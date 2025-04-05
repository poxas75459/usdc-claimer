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
    "61E6zUNVM3sLmrfPxHyLpHRoBwKonJFdpzWxbyujb2ReuXpAJH89bphqVdR5cSQBVyKA7KCgQJkssLjcZWRkCBGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r3a8hnse28XzyMREYrxfPnMSqBeovqbxiZTrhmmLfqA3WuhzVs5YA5B39xLvm7HGen1F5gkduV5woMAzaD8wZC1",
  "key1": "7EUw1a5bMaGidtLcBxEf6PYhgkA3E6V6kvpbZ4yhMgS6PSMGStT39Mb31N5XLsB2ouAB2raztGz7S5h7MwLi3nJ",
  "key2": "38EZfb62rcHStRmsj46jfBYcVffhcodr5XWY3fUhqAAjgRjV2MHLy32YTdBH6S8a76EkZy6jr5uzFA9hBtfpWYK5",
  "key3": "LohcLiamKJMHnN4zJ3Y18PpbP7uEGrfyuNT9uV9fy9eBJh3U5UYa3r9rFcD99W1pJoG18fzytNLW9NBLgwhurii",
  "key4": "5sL3W4dfdu9TQ3TWgvgbFPqQSFAeFky3z9yuqLawhamg9PHrdPonMcDi96Ni2pdVG22TL4vgLWgLmB1JvmvBrirH",
  "key5": "5QHjvveJfoXu55Y9eY9HrX1RAZjbRu8DhUU9V5FboZHZQG6bDsUMeUDu9VwAYCD2mGBpRUUXFWHCCkifmtjgEbAH",
  "key6": "4kFieHcetRBnCGSuN3rz5H6pAe3kzeSbxFDsvtqpbcodN6buM8ptqGZy31LZLwTFZrAAYBuej4Dk5BanmQGSLn1",
  "key7": "fgo9r285rS1zjZr3giHUbXPVn7afsVLtLbDLeNuZzkyxVySZTbJLFwqNu4jwkSakN1wxyLhT3iBaEvQRVciDQMj",
  "key8": "3gEAyw9hpwYArgZy1cu4HntZmnFrQrYkKJ8EVDUwMguxyLzga2tBRF45G91YigJJ8XLRXfKWaYdPALRBffiSLBni",
  "key9": "4jfBFMb7tbSNxNoTt53ayemdBKyYdm675BXJVBZt4ncBT4TksgQ7cfw9oMfuTivXDgPLkc9bPaWFbcjVg68fCyLw",
  "key10": "4pDPU9jCvDFypgwEvQQtyDJVAn2jHGN8mAFCy2xfycFCCYG2SRjRu7XaEpzLAAUyJrDGyWsnxVj2A8kCxmG828uQ",
  "key11": "5hSKT3UUHqEChQUgEAdQbje6xZRDzzGmhyP3HqmpPYzruAiS6GfqWtaeoTvAVZp2ZV1ooubgpwuZRZbLDXrmjZit",
  "key12": "3Z6XTEdQEqDYx2Ni3JA1cuudNMDXdYbUa7UJ8rtMiszNCVTMsUyTT3eRzm2xpbrFisME3NbaeNSu23c5v7Rd1ZP8",
  "key13": "5SptBT8RPemtehQug7R5qinTHiV8gNtUjmXXZwbNis3joiGTmvGjp3HxYxfDUUcJMQjGHVHQ7QJF1zMSEFe3ed9A",
  "key14": "4HKmU9U2ZZGfDsQC5AgBaTHhK4vfGAK61b6xej8urUG6Ygjdvs1Wz3sySxygE1HuPFZ4azJCNa5T2T7DQ4x14f8A",
  "key15": "2o5gdrVHKDUCUtFSLxxcJPwTgAQQJnN8mc6U7qvR9nzzcAms5XNdAspJXigsq5fENLEZzgabx9jgWba6h5E9AE5k",
  "key16": "2aTeJs2wfnTmfpbUHhF7J5rBdLFN7ti9XEEbKyHzfa53Bp5KBa6ZoNpnxFHML2q25eYJd6HEXa4XyjFe3WndH5Pz",
  "key17": "5iLZ7aKDQqffoAyQDRxvg6xEewbBo1SxsPwpcXD4VLq4yEhZZVbbDvUWBvF5bgjFkdrVVZufEnP9zqr1Pd6uoYvE",
  "key18": "mQvMyhyCJxVf7bYDViQ8jmPfnr83qkGcPMaTN1q3hSwR98saNaZGWCS6SMRVTzq58GBnMt71K47GLbvRGoZXbLu",
  "key19": "2mqStdJ96zxAMdHWDpELYtJ7nJnshvfgzuKBu5RDgMtZgxb3kQswVjiFohHwQ8LtxBpgDuFqtPsLxWHdnjvS68Ly",
  "key20": "4aM8paLZnErc2UBeeny5PLun6WxNc4CjiZWWs6iJ5fqHuKyz4mBNoEragmkuASrJcSe9Dyxzv3Fw4iZjShznR13R",
  "key21": "2puevUCc2nehVNU26SZ4H2b2iKDht4ZQZQZwTWsEd7Vi2hQ8fg22Vg4WstimQvQts6JifdZBxiZM9kgfngEtiK5f",
  "key22": "5wtHpVqJrx9Bp3eyHFZeodxyGbcsE7A7EuooEWyCTFWDtxJNqBFz1U3ErB8eGzfetDmnFnNuRrRdV4VJRr3E9E65",
  "key23": "34QWjmXGJ52iG1LkEFRfYhTpraWuY9hE1JcthvZNxouBvct8eQnL8rDyRpiobUHbpd9dgeUXu679NNmT5CaeQUJz",
  "key24": "23v8US5wo8P2BPpRsGBXbfnDCKieo1XfrhiJJCJBuTVTBxS9eRThzzmjw4RtLJfopwRxsPBW5QHpGfsmoisfxrJx",
  "key25": "3L3FcjjBUk3BuaSKan5RuSukd5twoBQ2vKKAaAfZw9Kg1i1UZxDbEAFXZaX8jCU8yboVRNFkrAF7xSfABjYafEpA",
  "key26": "5Xs33WtRtUap3z3i746ZpBYTo1d6tGddpYKcotBWi1DfuFeFxY6qnhJwytBGEMo8xp8CDvtNTXou25PnDDwk3uZz",
  "key27": "47V2jp4K8GuRkfFGcnFq4MkEQShQkYikRDJPYRkP8MZKEpSoMDSMmkS4msy4Y1k8vGQETWAxuXqK5BXX9zmVvFMT",
  "key28": "4LfVN9e8BkbitU9LDn5UVTNH5Z8Ja44gL1kBYzvQYDTvkRPJdMJ1Dur1MjLzccK6jFcDfAz6yzPRLi4p1ibQKwK1",
  "key29": "2h4wy7NJbLr6kd5wh17P35hjx3XhB1QKngaGfHRRBHxbxmaryVSKmTUVUUXQf7Cjo1sJpZDCht5Qf7JsuE2SKpwJ",
  "key30": "3vQ5fBYHqcx5UkXWwLQv3aRNmXVfrrN1TygRaQSuNXP1uYkFb3tqnptjNEWLVbrwKYQELhoXACCp71v9CndEVmqW",
  "key31": "5Kw4K6oacogq2y6sXffL3nHcNBYA5TzZmgxaqmkvc8JvWd2xftDdahzSvwER8ocXjj1WcKEHziVHfZ94HNYn4mhG",
  "key32": "5cYtteeThmUcYRZK6aX5GzwbggPHu3XJkmznNU4nB9V5SJY7GkHJZBYvx8pGykWstoongGnmMgJtJRYE5WPTzPao",
  "key33": "5mFGt49CQxBJy3qxmGQZpeMGErGqohghJhoq3DJkFgnpq2jqAcJ3o8GWumTqP9JrpfTYbx3AaCy9jZwopQxsjEAN",
  "key34": "28y2G42xNXAzK2YeL5VLQWiJrLhL7fiiG9tmh36Gk1ocVnpNuffryVKxEd6tAjx8rmYfGrKvQADJEamwWR5dcoJ7",
  "key35": "3z2k4ScuKfU9m1AAk2tJ3xGDtciniau9ByKfrfoRKkNdUoYFTZLwhjMcygoqSJmpz75VrLYZuptscxhWprnufx2s",
  "key36": "4L4aV2QRNEiwfAW36hfGTmiRatH1tR4uyF1cZHUxZKtxvPo55NDZqYFVNFWaBp5ESL8PWzSy4RMZmay4Ub6RXnUE",
  "key37": "GMtyniNwPgeY5RrRAbn1pWShPPJ7dh1cgknNgFZMjPuRBmW23A4nkzxeq1dr8PsmRiXCfY1gBEEE6rb9KgAQUEb",
  "key38": "2Jap6E2A2ZV9CURfD9TJHagh5BKJzKngzkYSWevSagRvsnWco68vxRS7U5KiJ4VZdgqKc1dJQReC2tx9o7AioX2i",
  "key39": "52Mx2ykpQNMw2D34TdGjoghfMTLNemaqhwwdstLu6ckUKrc6J7khGX5oWXTuqYqS3nS7rZXNQrYAP3ktci5ujTYH",
  "key40": "5sN8rsjTJPkqnzSowjg1RVDaAtQZkRFgFeopMZN1JToQduxz61u2rsEP4qmjU3nBXbY3L9J368CwxVfzykFEVT3n",
  "key41": "3cJLd3VD39zd9PXwAX9cUPDcjNCjYdoZv9Mkbqx2zp54SxsWSafY3ZNbGjjYPHWSk5iVcCWgr3J7wnBAFkawGPvA",
  "key42": "5danHYWE6ZA7FgYG4bvCVE64wyaH3qL9jpEXQZGVsAc9vVgyRt87eeymQVZsHvJtgwrvLfreNXmhgTTFsevY6xpy",
  "key43": "4cRaBDNJUP64T76949XtKL3AMQCFs1AdB86E2cRBc1WxLmm6CVMN52vWaX32F8qVBfc4n5x5HHPKbzsXHsgP79bS"
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
