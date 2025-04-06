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
    "3b2aRyjgG5o6rjf2VJVRBaSMpJegyyEVimmYARqNX4sZeyx3wYqku4kbrdZp7W6NZe14JMyhmPoZa5Mqmng6Nwjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HCDCARDSPBKn9NVHZqxD2qHszhxwKXqAeqNpRafFM68Dw1YLB7w4xBZY6rit9oogSxYFFRKEzeHfxUazSgjNJq7",
  "key1": "gJRZj2zU5JgUi3d8azhC3gABgM6h7a7V8EngTFqoytZFWczYYd2DX5sKwjhAHgzhAMYjdW22cQNQUxtE5FW7wqb",
  "key2": "5o4KswZhm8nU9mqhjkY2X4WNe5QYpFwwPNxKmSJTZQZpuvLPGrgcFQYV1zWjKvxw6uaYQnYbLJovHbctFkFTUfSf",
  "key3": "TfY4MKhgLHNM4n8q8szozbe5P1AF9EeiiddkMTerxPBMDKfdAhtEMjjVxfkaCF74AbtxQPvhoevJFrBqGwCSfCz",
  "key4": "LPUzJDcSPJgK6Z4KmeoqZsvSrQvYtpDrYNXaAMmeQpPhGk46MiNNSTbPxTKPvtu4fdX47m8FnoKcyYNcX8zjcPx",
  "key5": "5xursCmKfR7zGub555j8siGZPqvr2k8qTjEfrgLBsrSbvmMYDdA1V6YrqqogNPwVWy4tXMUeyd37QZvPNLfxgZAc",
  "key6": "53F1kxRyGkVTpvJxTM5MRq9rMfjAFLmJQJjMYZLQDryKBHCT5kqKi6YWM8gPLVYcKGJtLmoMV7p8kRJxfLPuVRPX",
  "key7": "3dAm28bLj4m5vgGT2TZjMpwLuSPm6ssN3QRYvkEfv8hFxHu7wTEjBawozspBYDuZ1UQsxb9AKwMaVQ73sJjbMbnW",
  "key8": "4odivRr14ZVnKbiXqYLpw7QKRh2YSFsWn1F2Za7LzJfajZbNjwEaScpFkA1riUhkvwNNKkvP7swzyjzpWhh1CbqR",
  "key9": "3Xy4Uogib3QYn3FVoyCMYpaGVubaRGkn673UGwQCnk436CmqNqzyqFF3DcK6MNgoAVthkSBAiHGaEBX4ehbRjab5",
  "key10": "3Q1YcEsq9vXcScADapaNPaJjBPGbHAHjVRtu9GrYLukbGWfxpqL9pwbvcyMnRCFSAJ6dH43QpCLuLU4xX9hqW7x6",
  "key11": "5ruuVCrK2t429uNE1yv4S2eB5NsxBKv85drZ4KxA6AAo927b43m6rDeWV22Nr6tSBg51YBetr7itWqYAjrn3D1SU",
  "key12": "65FU9cZyRVi18p4uHboNmYGM9GF3GtNuffzueP6NSMkzxMbJm1CU38yhbSTfaAofA9QY3CGeZKGafqfTAMRmLL88",
  "key13": "127Xoawo2W8Uy1dMJReVxytiN5r3xDpdgZGbGMwkURfc8CGWqqX9AhXzhhrcPD4bgukVcKexCFaRveTbJBTj61HS",
  "key14": "65QD3rk1kdNR8jmgTiaAVf89944N1dCEcrMpeijp5CueRwnhjafda1ibfZ9JjiSzj83keAyBnU4Ws6vcmxiecSZv",
  "key15": "4JKKP5Zt7jmoqkiFX3Ug7ePGu1WpTcwRkPZtM9oTNxYFw2qK6NK18JqH5swJ7iNbSAGzfKNA76a2MhqaAAuuMshd",
  "key16": "4vJsLT1QVvpKR33eiGo3BvHr6bpC51u2JmndbwMJLs9AtnEGZmpnWzV98BAoAyEnJLVcyQj8wD7rVbVbUfQUJLio",
  "key17": "dVpVitMoxSHgBAdTtnRoUb6q1yYd9auX57oUTMwLgzdwE9infoYcRUd1NSxahveKsMf4QED65UQ3m6PbETipeZs",
  "key18": "2WBNxJKjEYgc5tUPgg1xw3rrDoFJn6d6nqGwVnsocQyyERpbCFt1DkaxBusYBzDMk5MggNDvLybw9qUy8YQpKykZ",
  "key19": "2bq9o2Q1ZjfTfiNNqvcm3rnkbWsd9bSrvTxVZhF8YtBLGsVrqSLQkeTjpe7YVbef9DXzqbK8X4KSrda6jAnXdEAa",
  "key20": "5AEJHUNeJnW2h8oDQV9bCbfVwuxxJxzgEJT9SegSRTENnbAfKqQcvws3peZRJqYW8aXViBUjubPdP1ktcKsACqQ9",
  "key21": "3zjgL8LnGcWbP7WnnmGAECZPiVPEKCkL1YcRGnm3YGQE1CJ58uoxiBDpvstRu3Cd74EGaC5BQs5joasF5YkTAAtf",
  "key22": "3j29QZwAA5FLVkUpiChytD2BFKpB17rcbu5WPRJah229m8y6nYYbisJCc2YarDjK5iDQNRbEtoTvnYg3qi7W1TyX",
  "key23": "4gX8WiaSd8TWo9ZQD2amDfVDCdxgdpzH7MJ45YCUvZtAohPBsPfpJn7J7KSpxwkWFbBXk1Wh6eWeV8grmdkdM9Q2",
  "key24": "3dyEc1EZJRTTrqmLeHFWKQvw6zvuoLL44HrZmjnEUK2XnK3VQC6WfXCULDMHYPeuQAJdbQFJTUtT1TSRZqLGXrkW",
  "key25": "2kF7FiSCnpF2fb5jSivSTXa6HXP4SEX1vv2ALh1WHYmYGhBS3uoyhzWJrBxfWiVfaexZfZRPBZyy8SYyyj7VTjxd",
  "key26": "2vPmLfjFL2RSx72DYLkPsuK8cmzmPhHADPogwfU4yU7VonzpHQuUVNA8jVC9zyxJBEbTGF2AMEUrvqZUBkwSVgrZ",
  "key27": "AJFAFsVukWrHcHtdtLbepTQG1MYDC1C9FKJUvymCp6vZG1AkuDf1pGU1du6cgnD4TCoX4nzNoCbB2wLvp1fDU7u",
  "key28": "2VHup99SCAL78rje5q1xpzMEJheR2EUcjuiHPHAA6APe1kJczgpTbmgxc5Tcrz1SFWSoJTQA71dZJ5fRU2HqvBBq",
  "key29": "5qPBxRpW1ryHS6cgXtBpY9ssTLG8LZCvvhiKy9Qfm9oN33Mo7qTbmS5TpnsQvxrnTGXzeLftarLtnvW6HViutjpX",
  "key30": "2NqMHL6csFwLRoiq8UeiPYstHjwTdFmAcMbz8SE1Nb8Sv6wNKid8x5V9FZvK7UG9J94Fk851h8qsSAYUpeLV5Eoa",
  "key31": "3cLVw7kRfS93PqSz2uYsH8nGBp7vtSPtUM6o5vWxREWB26NPqF913cLNbm1nvtNTvk6wiwzUNMRoF5GixtG8ScQn",
  "key32": "2ohGVAVzNbg8KhmWyXvb1gJ2ncReXwvnXKzsdzkRHLUDS8DDpkFkMYh5BsKfQtQYnkAPE2chX1Nq9j4tGPTC4bu7",
  "key33": "4eGvB3obxwt96YQ8CjfCZEMcqCAiotHxbfUCqzr4uGDMdekaGzZf1uiw3amtYdX6Ku4d9DJa7bWxA1mkpjAivZ2E",
  "key34": "5NedczsaT8vwzMkgXsK4ct678nVTNyhxU7ELAhtDWQ89mnfN44EzXJ2AWhzyjJVV94cFwqwpm6G8z1UJSzJGrQeo",
  "key35": "5KUQR9BgZK3YXQq5zMnSF3LrqzrUHgbokhx4YNHZvy13DsZNSsCYvXA2mum1G93Mwe5iqu8RqABTsk18cyAa9opC",
  "key36": "2PKYy2e3pdHyEiuXaJrq6hPeo8soZ4sVApgbECJAdBSyihyFQcJsA2mzCaMmgwNJpKqhxh1Q95rCxHgHWzxb66Cf",
  "key37": "62L9GqeaWHoM8Wc6jYhfE2AFE79AeD4bPQ4rSPSHc59GDcCpzEUQZ7tpCGaEAsvzPFD9F6SYGVDoA1pu37HUXuvc",
  "key38": "3i2Yi7vcV7AUYhie9iwynrikTAeoMFPn4K3dSscZp71n5pY2LdhMSCZSKFmVx2XzVfWr8WzCQW5mnpRNZwkckRZ",
  "key39": "JyL3f2eEbRoiV8G5tDF3KyrS5YLq52x8cRyfwX8ngMcSn4u3i5Qskp9V7k9w7RsXj9rdoGDi47zmX1cRiuewpRn"
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
