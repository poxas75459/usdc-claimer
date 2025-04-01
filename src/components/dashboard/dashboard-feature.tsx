/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4thxGYwENPMVrBf9tWsH5mPfvxhtQh9CEMsWigka7rzfTjqSHWET7pSFdRVFyK8crGChEms2RnoNzdQfxJUFPJnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q9dpEjgDnpdWf2zdRzVnQDXSYPSdjgDJ9F7yzjmtm4FDZfeSujFp6iEYsXgvBtrR4nLyaJGdLfbJWScVQRYgq7F",
  "key1": "35yCozTYM4g7pmmVoL8Xs56LEdFPV48rDtLuM1QcYDBnYF8UhziJRLbMAGJEK5FEigDYTQEpBFHvw9jbTDzrraWy",
  "key2": "3zgkQYLPsTJfmsYDp8E7gLcE9prnKep4haAWWcrKE7sbasvADHxJr4nazVdajvSedPQeWPoL6fVehqQSxmjhZXZr",
  "key3": "37qb9hbnCjTC3pjKgDYvj1ciYmNLYMaGsQUJpp1ZRArgDYd3m2n7KuJsCE13Wi2CRnQbyceTxWQh9nX6cSd6dEAx",
  "key4": "j1Pi95WtQoQfBsLkYE9ik6M6pPwDTETKdfwt7vd31t7YbsYwR7jR4nVpH2rjVLDJArCXkfxnePB5LPF3mRozF8d",
  "key5": "MuiLSnFfdypn2MZYjrgjFN7cyRfrGiiHYm7dd7YdAU19puV265Ndq7X5VekkPbHbWt2ZcaR5CacHXqziHSFzBR3",
  "key6": "pCJKi7VHYdEAk4S1W9kSHj6dKWYUfPqYMP9JioqmMKzWQtxpaYG4kTwAbMzvbMZ9RYzJWv2zdmQdVma1uULSQKn",
  "key7": "5fMRAXZnZbNm9oyriHPyWQhTGWKYHe6gaaYiFW1AqMGsKoTJo6nRALyNFYviGfF5Kt6V5LQiMfEpK5xRtUf8Mbvb",
  "key8": "3ma3FSGvQqziVuye3hpzPBhhrcxkWu7XjzZMuQ4KWjKbeEpQ4uMoFz8y2oYkEaWcBrNRomgtzh3HohotQRzegdGy",
  "key9": "4mUx2L2kgHMmfGqMtsm9c4nCknk4b5iYvBjNirJ5AUud1tTntf4sjkThNy3tFJVYvPofCpbs81coDhamFd5X19bq",
  "key10": "3zbHdSSxRS8Amf4uzuhoHt6v3awCGC8uv2aFVSx7gRgRziKDRmQvDAM1QBRARCyP8n4YZoyXE65qWvLENtWu9kLc",
  "key11": "4YENWuZsJUownjVEvM2gB1SF8V3C9d8b91MQ3dWwepSPiQXTju7ThmAsuJznrxFhPFTgjPjtqxQfSSJXkFN84krF",
  "key12": "63WoBNfwpezLkXYk5uB1JERbqLwrBHToq5yPjCGLzafQbDHycKsfdP4WreKPe3f7C38ZX3tnsapmZgtf9V2F3nZp",
  "key13": "48YMs93eLUQunfpZrkLWMSpVwT5wv3mKkTq6JcojFx37ubq2vAvAZqgidMFDGwZ2LquSkvztUMh4TgwSw1d2aN1G",
  "key14": "4zK2JwyXPawt9nJb9NqesTGZRMhVQgvRipCGzr5vuT63XtvQekabWQdpJwEB6xbZiUnhZrdN5zhahsZPFGGGpEtU",
  "key15": "5d9ACeUBiZGYMpa7ChdCKTL4ppEJJ7H7tDHo7Jsc719BsiVhP6vaGQ8e69HU7SStfducv7XrxeLPaiXAP1PvcsPV",
  "key16": "66dVwcB2uEP1Mn6o18dzR5Q7GGng1your5rVgqoyuxcVQrWxzSsQzXpJzNzsWW6mVm6a5LH6QUd2u6FhJXyBmJJU",
  "key17": "jcir3aJNVrwcaD4WK8Lau6XQBi4FWvCn5w9z14yfqGHRNfPwJQa5DrhYj5yUKGVFPkRZyaWfRqMq8ygnqNGJZbf",
  "key18": "5n7E7LFRYHctHcXDUMuuQc9vHWnQ87gFjUihzHrWW7kRso71CrbzbrK2buppHVwcHnBAGWCDA5mapP4Xx17bZqNJ",
  "key19": "4Lf8tqwy11JnmQFBjrAgrwH2HDoBwnMQ73PN1GWAGGEyPkHafbDMXZKmZ5QDXhHTdF6LR6PjXM5vTDU5FazRBP1Q",
  "key20": "3aWX3a9hizq1Y56QdgfBjmhqpqwJygHT8gNmyfU7FL9YtRLba6uHR2pxP7T2g5eCHiuNHFMksa4Pktm19twPgXbS",
  "key21": "4WcdPR8GjaievJgbJBW8hTmDMf8Cish3QamRDU7EvyJC6GZUwypvYcjV8VLWXvgTkYMmrLauyRm3VG1xLTTGoQLT",
  "key22": "PBWYnydnxBRev8Gsna3AZwVQEDX169gs6Dz8znEBMMSrABscQzPh9apPE6ZPkNrTpDTASkSUVStF9ArMAaABuu9",
  "key23": "5WJxzbmBfzgE1FToVCa1719ErAzKhgjEVrchiWFuze3jjXpHeVzQdq2nxkasrG6sfciP76TKGxuwNdqVABUpCGc5",
  "key24": "cJz1iFX81zr9LPejipokwr8GYM47Udmi3iNCpge83PgQQCXUkwKErAQgZZivc2BB5s6B6V1ERaoonEU4dTmKZyw",
  "key25": "2r8cg6DMBbA51RdWwbBwkpkRNZxGR3ymfcDmVHV6NWM5CUGaeQeYJWMtvoakPHzE3bvMw5pv13g6jxRo1gFD6FMs",
  "key26": "GLBtJKGVd64hLVHJhejDWrii7qMqp7ggvPwt94a29Yniifcng5N4En6p1vvaWhHbiZd3qSZJooXYq23NvzpfEds",
  "key27": "7qdezfSKtqYnFLyVC5Y4yqh2oscTJiwBwHzWrbdX6mSQZPnH8ABGH8QwvQLCQCwmnUao6mFYrti8sYFbfvm98b6",
  "key28": "DHUuXtreHu97CryCrYYZ4UkbBUpjJUqp6XFpsbCpAXEmwNPd5uH19dsSmXNK71dYYmmRq6C6NJCrUP7JbPric77",
  "key29": "2pMY5chktRQ7oQbzn7WX5aA24aN2YHNAFksMzmDytZB1AbJLzSFoWfTSrxh699rusj5PQrTGnt5ibKE5igD44UkG",
  "key30": "42AGykw943CFSf5vyWiCnHvNLDw6TxHJW9ZscdUPS4eBagZYzGSsLgzFpBAzfdo6FWvoopBQs3XzrwNaXe9E2SeB",
  "key31": "2KhmcUbqaawH8JMCJJvYqkbYnQNxCLz97RwnCfTV1aMm6wZ1QvpjcRVpLxdEeV4ad589aa8MTm8wwMtciLbWWLT1",
  "key32": "3V5RvhUw9FS8u3JQkBsL7rs5kzGtmLx9GjUyfQ19rbb5KTzyyXWUgqREHBr6pga7UM24Mc38pnwLGXgrHLXX4zHD",
  "key33": "YuL6R6jwqhfhz8b59oHqAXGeVF1M1SpSt7FfzGXBjo8mASw12sqBXVNdv8RnjHN29y98qcVcEJHxjdDXQowQSKo",
  "key34": "5jtmxvq2b53LeqUEjuYZZLCYsZJ3GsSwhWAgrWLJwhfv6vS27bBMzSatbkioKeK5uBYGSidRgvuUduvt67dtVnj8",
  "key35": "2izoSRCWWBe3Tcd7a6MFVadirwuYU36Hv4Tfy9ViYtmbHpJub8QDibK8iFE59YTMiLckreAPwM2QN5yAmZMLpyJb",
  "key36": "3QRskGCPTsqHiQp6yxuKmrnwMHKqvmubZC8DggXU3AcK3pWN5BP18dkrftRMVSXXUyAQeFo2BU7zeyCo62WfuF8n",
  "key37": "3J3wVbh5pfzVa9a1X5pdRUFeJueyyy1Y42xzcEJJSrkQSLvBHruMkJrWvZridf7K8tfTvnozxrUWQNbhd2bMvxiT",
  "key38": "5AYCKtDrvcLkh5GfMfxWTyqEF5pZmN8ZVTJ4znaVk5E6LpVsMjAu3nGKrnpeK2fgSDEw2dohRN92RrkhpU5YZNGm",
  "key39": "Bvdfu3cVhdDAxVVF1QgsFzbAbNBx9G8Bh8LbF1udJ5LRz71QrLuodqb2S6RGhCdNVDNWSRSxY9XVQK4yYYUJ3v5",
  "key40": "eGB6y61eaHvqmDvxqULktK9asXHU1WSpZWJvrzYuykYK3k4fEZt9yJNqxGymXVMUWfjbGvj2aPbtg3niyXTKpsJ",
  "key41": "4CbqURCg1WnAXtg57BSYivEsGNt5ZNkBn69mWHfCa8mQzuezHx9a7SbwEgdDWMeBakp6tP3aaRkpMrAciQbAhtsR",
  "key42": "29LkwRAE7Uc85gMFbZYVRF3XWE1Hnf47WgA8rENNA9RkXvLozNjViy8XwsvZN9TmQ7TvMGm3XRhCZPtEXXteF5Xk"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
