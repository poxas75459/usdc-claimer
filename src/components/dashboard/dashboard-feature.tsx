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
    "5ZsS6k3gQySV1UvxYtQA1P7av8ZcfVarwZEvxMrXsA629pKxwHhpAw9r3M9FTc1VPPPGaGpxm4YxoGiT9ruQBWRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q283XbjRgB12xoXWjrkwhzuhsgaREDup5KDSG8khNGU4zJQWmgFgiT4q3S4J5uAmeGmSouDaZG8kPp3GwKtJxeD",
  "key1": "5fHr58PYshpA1wd2AVsT6MY6SNPeiwbYt8A1aedsAMFoLmvZPsioofgkMZ9TZcRkNb2pXdjZDiJ5sRF9CRUzPCse",
  "key2": "2sGk7cGPc9BeDKgJuUWUMpWxHyxjZ4pB8eMwLwUXetms8aojDCURZmU7Axi8QMTUm49cGa9ccaTYuPAhE6SXdxzL",
  "key3": "46CYEFwznL5GCVzun97FaJdSFCVDvX2gRQ4GqQpQWhvq4Dq1LtjSyQPTqAHtnhWxkqpCjrMBYZWGZp9czinD4jVT",
  "key4": "3hFJnDYa6YDN1ty94VLivBFjZW4N2uakeMc6BhviPuvtfV2GiK9mVq6mSZsQaPRPa3u6MPoqVWvr27HgT1FncEgp",
  "key5": "3pw2dhCztTqgMidhexvorfa6DnAM3R2xqR6Kpmu7aYqqntoiZGHGtMTF6WWNS12BGaeXTYtpQgKAKSyTYPjjDYKZ",
  "key6": "ujnkxDJj38gxWaEhnxyfuaadtsNH3jdX3biGCEaa5vtsog2rgmU1Y4tbNpVAYpZ2g7o2R8f54ggMsKua7bVaqJV",
  "key7": "3KxDG8U33G5Ls3rmnJgrg8vNLPAnABqxpikumDhPPa87twntBwcCxsKeCooK4k2h2pzAzFpN2oGG7ion5dLrFA79",
  "key8": "ecGv3y3Sy2frQPeeLMFTyQdwL6CYthNVmFooennwevRomjLw73bNjYy9nmqmSLyDdypFoAndFXfMKp9vm86MDzr",
  "key9": "deG4L434KNAtAjrDRq1C3N8hLcjRHiPKsvojEcErKJtDCpKZZVofjApoLiUpJKPeRH8wC3ZWavwBosGeTCtRsVj",
  "key10": "4VQJbDMgQ9R8XwFhmG8k6KCCmgqbJpuLQXLBYxHedENXBitfgYLFeNARzCVLmKiZWeGzJnrDpKQ2VucijGfp7QiV",
  "key11": "wuqRxAmy1Nn9Nk5fdw7wFTD1MEkwKvg1uxs1nsHEfWJCUXWk3sYDNLcvHcH6RWhUYfNWLdCz2Qt5X47GMU1C7iJ",
  "key12": "3WPmcdx1cN6aQ6ztVgTT3eiv7siJcU2U3BCQKA39E7mmqKPoAVZW27JB2CedcCjBUBRr7mWN29p5x8xNec4trx7v",
  "key13": "5Y3dJZ9UM5cWkno4LBBvWagYYckWLtXDHbXLKVUNJLMXwwBeuXJZ1FGP9AeAj1gHHg5dE3xKLJsk5Gabuyb63MQJ",
  "key14": "qD1QRuavjTPCYooMbZe4L1e39bBvrEMHC6n8JbywLZFYdHJRfU55wgrxZrpNqMYhXA5r5CtdWgmPUmUqUpmDQza",
  "key15": "5dULuPG4dW6jgPdWzBcv23cCXyyfmFKzXknNwejScA6H5QmVfGg5Xs9uMKEyZP2kyXnGaiFTrXBBtb4Wvp6RqGtH",
  "key16": "5x641umFzdY9onqVQJZEqYvRdWrRCzruCbhozzTStvV6sMgxmjkh3i68JLodeup73jL5ux8g5cs9KiPbQ1bPLCjC",
  "key17": "3P2PfjC5NPMvUtcykn6ngWk61QhZwXjzYJTp9qEfECRYCWjToqb6kw3B3uf9nBd5x8dQxHeyKzeEaz7cHQWAZK2D",
  "key18": "KiNNvMKJ4NadtnvAfH8u1mHcB1tKv5QCthobA1467gcmcVnXpqTjj1FRVVXhPWo9E42GUNnA3WkePs2B1MUPB9i",
  "key19": "476b5zsdKbyj1bJMDohcnPkWW6Wfsq2hsZv7e4Ec4Pc8ksagsJoMkPcgTv7fKgUeUPdwfeVRfMDwwgXX11xWuVg1",
  "key20": "3dx7FXys3MYSWLC5dfzVWHQNrQWF1TBPhbCpvTrEDWWgdk8xgR38KnzAP38iksqTXW4yfCg6p7JHfGGHWeB731me",
  "key21": "4SJNPZZRmexFebMBHHwqHZvPYsf3tcH8mq2Mp7NxT4A1hi2THwkHSPPGqfniNFBHiXnbLrGsgLfLd3xEvowZsDtA",
  "key22": "4CgmmNd5CXQ3yXaRpdXZG3YyzXtx4HFLhPunVa6a54tY4UA6SGiAEbtvoBARJkR1JayK3K84UfJeAPN8Ew4irqV6",
  "key23": "3ZHkScRB8cfwAeE1cbyJiUAkSwnS2SKbzfCMBsafk7mZ8xkwuMWqLkWa7vaUXnVpb5q8F8jGsYfDjBWctRGPRWR4",
  "key24": "WLGd2L6e4jHKBsHtWZWszMDbM7J7nKHLmERuVKJRgdyJ4Ynwi6st9cPbb2n8N2vMBDE8ERAGfgzZzaCfTvCbkrY",
  "key25": "3AnAYD8hK9977NYgcbpUYdbWHXzfDnVMngjBuxEgiFB6nRnpNnBxXSFoaqT9ayQEB3Z8R4iDjbNs7rAJv3CbXL7Z",
  "key26": "28F3saGnvPx6FzdhhwK4GnnstJMF8rPu8mh1yvvmUde6BGG8LTKAxfQ6EZWSZXPLD8aBLdbxQZxLYa7T9RN31Etg",
  "key27": "5yBvAqUdZPBS3G6TRY3uw8sn6xNTMcN7eoAWtmrnSADMzR5145nKehUwa5XuP2dw3SbTkDBPkZfFzG5cukxKkef5",
  "key28": "6XurfXJVd7a5bEQRoC9fJEnnkGkBDjyevxu7tCaRvgA9uXRjjWcErUHQ8BozTgXESSZ3AXWR1HsiTBiyC5H67o5",
  "key29": "wGaTxV2ocVmQx3GceSZK7eKSKJ5VmFnVkBnLdUBpZx9EziZ4rWa6PeXEW42vucDYfdwa8wU6vcQqqL9F1q3GGfS",
  "key30": "4NaNG8VGRw9r6VizEbuqoposQP3wDzfJEgusdcnDVGStaGpy14UZ8tnDioMGAUvgSXSPoSAnR5zqCGAcoiqBqURi",
  "key31": "4nERYJEJx8LEzYumz3BqdVh5dc1zs9ArZHSvcmQLJ8dEUewAzSEWHFhJP5EvU3sbEzg28D3K71hps4tTtUnzf8oW",
  "key32": "212WrHsdMJ9bfKi2BuvXhZe43kpLUdKH1uXfmLAqvZYHvUMS6hTmQNQy1ffhLfZaARK5Y5tBQyh1ZuKAMAmi2SAw",
  "key33": "3wmi2zPKqxZczSb42SiHgoomDxEsdqjP9gAWZ815GPAQnbN7hsQWB1s4mVyDNtT5GzW6GXNEHE5sf6Z5GgzKMUkL",
  "key34": "5ybQq1eJPLVHUvGQXNagMey9UR1XJPZEB8SbWCrjaaaSa9vqRMDrZPRFwjds7qnk6jjuTUHHnxZs7db9iUjfDsDG",
  "key35": "4T2JhdC6kBTnkixcyzt7V9ebLWrr3XXCHFAWWHiSPdvNTbNDcJxv2xNtFdAHfCswWhdXpf2yQuB86ko7eyTniUq1"
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
