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
    "5kqJXpAn8TjCDe7eMpkxDMkb9M3iX9Jvgb1qexZwrqmTbopsDES8BhkzkmzVCLtyynoo1MzfmTiVkneDGA8JfmZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Poyrnx2AexHq4aDwfBi3Mdx4yqYeozFaq1Mhfaz2nRLcLG3DfxyagWPxLBrew9Po958zfpM2iaBjVEf4jcReCtj",
  "key1": "5ENjoa7J9bi6DAbuPkrSM9Q4LcJJDes4Ykx7tTRHysj3Erb92VxDMaFgWtkAGNN5aWQvJ7nyyHx8iLNA1APHC9kK",
  "key2": "5fKGeWyt62w2AFBsAAWPJ9EkwrogKjF3Zi5DwNuaSpYShpaykQ6MUszgqNz2ndMxDVHykhL5z8zFQjwK2ozpKcX",
  "key3": "4t5yNfd78Kwb7Up7xz7HuUVG4HDb9wkP4NtFaZyHPAZFV5KqxUBANtvUvdCfuDCH5KCmhyxqD9RvydYhcL6Vumo",
  "key4": "asWZKVPiVvtgMfvVPz7ayJEuov44oLetmjd6kXyQtqm339mXPL4bfDxfGYBRS7H8K3mr2ATXArEjBAjuuEXuU6k",
  "key5": "3DeveCpWr17x1LhJrQsPJjbFVpVaH4sTqm4Cyuc4NUdMzsdSFFKZc6nBYMsASfoTcL7XptFozvGkpRao3JCd8E4f",
  "key6": "2kd94gb2iHUtgx4SUtCqMLCfbhWhdzdXcjZueGb6dLUX1Egm43p1dMu8xsMF6e2vtT5PZ1HasMLaxosrNvVCRs86",
  "key7": "5wNdK2F5zq6PmCwytGnHckifcYKRwX4BrghGfjLdGKa8kZTZxk7JyryQu35tPjTyo7EvChjm2r9TFTHmSGBH6VAy",
  "key8": "3KfhS6rY9kHxaQPNgSsE2eK2x9g3S6F3m1GEzwWs1kXucUEzQC1oJHG1JrGCBTX7BDJTXD7eRVrh3iwnuGaGu6eQ",
  "key9": "5M6xw5rG4YUyHziXCY7AF3VzHVRfr55SDSUnwN1D9DmZatVc3fqpVLEjhFYx4FYWDhCDnYTfRcJey1rgaCYgtUms",
  "key10": "2dfBRXWbEYSMAzwx3QYdE4PdjxvBeFH6PRnBYA78PjmiLWtHpmKw1aFiEo9m4iEXoJGVMxYPVU8gaMke39ErqeXy",
  "key11": "2tX4mJdDfJMEwdhBFHywEeJ7gSynBiDE46pz4vk7z36Getw8LDwuWNLhjuHh34cBKNzNmbGf2noxUHzd6jMfCXJg",
  "key12": "4DV6Axy67JPtRm6WP6DvvY7FNaYNDsroRFAynHBosK3V9rjMJ4QPGUjhVYa5rFTzHfp9WuFqFVuWRhYk86CwufF",
  "key13": "2Nqagarzwi7DGkttcB3A3dcKeAiDrwXGJYKiTP1gGLPz8wx2mK2RDJikQZ9usRfSYrifMoALn92vsiwhgLKNaWR4",
  "key14": "34Gpfm6BskdNK6KQSYtXnSxea3mCh4vZCRutRkrSxyVjdWLCFTSosWC7FXhmDrv2L5J8EX4CKdLWvkXgjbyYmrCd",
  "key15": "3FMu19ZKBUKYXeS3C44s4PKnmp4WzUcV9thhLAhDALK1KMRwFvxRdhDNjEBtNcxuKbdmiUbquZKMGeoXnCwqk1ZQ",
  "key16": "3yUzTapkY41PaWZs9X9Fmi4WwBrFjXiYHaPXCqg3JB5TVRuzGbCnWL474mcTY4FccPQLjchNr5V9G1SrotXPmXmY",
  "key17": "3g9c31cqa81k5YBBDdC4XcYmg4iDppXSkAShoxZ3qZk4VYyDRWGa5w9HpnNBUg4soxqqyJLgQ23HNqKfTP6jd5KK",
  "key18": "cJTVygBxvMw73dKSRp8YYCqsfcpivU6PGiqDKBFbKC8dx3Tvyk4zZz5ArUK9Xim6ZH9TWs4tycA8jjyq4vtDwky",
  "key19": "HTexQBSPyjTMzGGHwXvKoji8iFM9NtnY5G43JHG7hCuUNTKqKsPzYy94VJZ1LnSTJDVqYb5BXpQbCYSNALY3FH3",
  "key20": "z1J6hAknbFAZBHdr9spvy8E6aP7CkXwSP3FuCa9iCsBtU9hf4oNLTC1kEcrNMYB97on3td1BdRn91x6G6hDkCU8",
  "key21": "3A26CfnanfPv1NsG6oB9nhfTJS3aDbTxzgSy3XraixFuZ7cuWcG1Zt29ZEGejwApfcJ8Jz72W5xJJRw9dsifDzBt",
  "key22": "ceyEYEvep7pA26PyE8uuGWJ6PwGg5b31C5WhUTbzUdmgmQHbyot48jzQv2QzSuGN6SvczZSgXiWrYP4JzUmaS7s",
  "key23": "ZRMQeyyE2VqEbmnuigzJ9hDNn1joS4FHre7rohozpNL4Ue3qYrLsdsHTVBPofqGzSGG5ekHFzBG1KqMxkess6UT",
  "key24": "51BD9Dg3Xbb1x9Qrj1qaKNk7K4CPQvKFN2APcddwxHVnksScm2pM8kVeK6xkS7TFr1c4YH6zGPW4RQei7iaWF1A9",
  "key25": "56sKvGRjWUBZseEc5L6sQuceXRHgEsNbugAMWeF8Rw9ioPEz4S9HUkyDhWvpTJZkmdSfjA49tpJDtK51xyx9aEeu",
  "key26": "2da3jHFLFydHtLCYuQkASJDH2YbMen8Ghxg1zxiMqGYpmFTs9MBVcQFhqLFs1XV66RUnAWLw4W3NgsDmMcuJVSv7",
  "key27": "5oWkWUmFqwxCu5p2z4nokMtKMW2xJUnQwd4zM4sA1o8wBxev6Wa3tUcJMWq9zKUp2N52TmLAXqv6tyEYJqijJxoH",
  "key28": "51pBgKEsZinng4thRkxdhscStuHPdNyeXf6nqh979GSEfKEj4Y7qeG7N7QZWfAVdUGcCThUuNJVZxwoyX1RxE3rR",
  "key29": "4Xvtf9nfJJmiEEAy5z8vj3dDPex2Dj7zqtxuPv6VjjQgF4rBg6q5Dhcu9yy7bDoxwEAcMnQ1x79n6GWFgYMuSVC1",
  "key30": "u7bm8TzmqB3GTPz5TMLz5XjqdoU1b8fKQBxMVYXSniA1bPjvhFHCNBRhq5LxNGYojP4W9xekRG1L1DhANTgToyX",
  "key31": "64teNTJuHchMcSCT9PtAWzr2hnyFFMktWdpdzrRKTNN4xFaZnNXBzcqG4NTCkEDPfWYKmqnFGUwEYnUdiY4zDQdQ",
  "key32": "5bnHiZJK8SmnbwVogn5dQhQRX38CwVtoq541JXEWSLLpnghw5gdLfvBJFnWzUdb3cepU45AjCHqZCaP2bQgfC3Tk",
  "key33": "3QJAZSXN3qLemwsDoNpL3j8YAFnK1xzN1aTbgVRVdLnYS5XXwcEHB7rdncqEQpuTNn2pSEADCv2uEzXkZKKxiSJd",
  "key34": "2WZnjcUoDahZFFW5ysWU6U29wT6rigEZFLraGd2gdpo7vJUHHfiMaxmvxemrrtL77iSpz76UXdbqmgusfwJFbL5W",
  "key35": "2aWFC6SGTYf49aP71GennRsGHn4YYrooEYYKpfLTAopDev7J5mDNwG8GkkmFrGvU5TK2Lq7AnEXMnHqZ2TKCSbot",
  "key36": "2kGGJFVdnHWScARBbU4pBsb6Qp1QxgyYit7hX4MAVCfTGp1pmBBSrcShS7z1tA1WB9NBxvBeuqNFyjCHTnUFxFwu",
  "key37": "3iRg6gd9yfE4Fx1Jfzdn6xvXmPCupqDMZd5X1NvawNwCPDvQ4dC4Hybf8JeCa3YKEzVVWiEUezr6ARRpGPnZMYgu",
  "key38": "38ohXvZNJ5M7ZVcFA2CUn7ARE1vRU9EJHYPRu1ycKyvgHN3ybQRm8NgJAuWy3jtLc7BZj5y9HEgBRcUffwwSpUi9"
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
