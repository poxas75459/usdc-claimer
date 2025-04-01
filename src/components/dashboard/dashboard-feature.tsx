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
    "5durU5qURrPHCdCk8TYYsEynXCMquD2CamC4z8q8v5ptHo5E4hSaTqGiNqmqH7T2ozREjVB8CGtyHUuVsYZ1h6wJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SAvnqej6EnkaDHHbbPvNFa2ejxQBsE2mcB9MRcpnWmoheMFg7jsUxRLoQ9t2zviiwz5kSpWCKoMv3mpETKzHXU5",
  "key1": "2VAwAsdvkRpdnt3ZpmjbwYYYtLTz4rkMqufSjt21sogb1QgPvQ6DoAvvMMLXPAy3B7CQFiheKQ2xu9r6cpxk2TFu",
  "key2": "66xwaVdYiRyzyiaxAKU7YvzSkntp9v7ygjpPUcBZBwTxvDiRQV1jGk6k7DHtw1skARCzypZQvC4bCkTQU2in7SM6",
  "key3": "bMWWhfgFAEENWEDMgUaVdCt2TNkvgdCdf7tkVaoASxaYW7f7yLUeQS9rnSBRrDtZKFFqv6oVkrHxNMffxBPVzdn",
  "key4": "21J5G2wevkpZBD7ip9qqnqDJsKVJQoPsDoaFDB3jHSQ7ZxkVsNgbhof9yR1AHmx9SJ7KG7X7EfEYb7VD3oZd8HPN",
  "key5": "5afDW6n49hMLoff12cLedXBBPFLcHD9tTnWaEqY11BdaawDhsdAAvFWze4LSZmUebRYu3jLegNBdKVjCEaxiPdHb",
  "key6": "poczW38N7DkMkQpgPiWNF4dFSd7SSV9krg9PRgGVG2gp38xwgcbYzAsn7q9hWBGdMtYgvgP9CZuMQHqHeVfjxSH",
  "key7": "hSiSR2US9NKjX1d7MvkkCC46XydfJa3mSwA5yjFSParzXoWgtfGSRuR3jRZ1ASKCo8F8WpVmq59Jcx9pX4eC1ry",
  "key8": "63RdTJREX8JXWhXbVtvWEATMbnmUyMbe4i4Wtuxf98Ge8sMZryPaRkc1eAByjyWwXSZyB6E3je5qsG6VhZGo6a4W",
  "key9": "5VZ3HrJm8JhPaA9UaSwmC2ABzX4WdfcaSVcMaoRDj1EH3u5MBn521S9nTYMmEEkoFfKxPRVZVoTPC7fGjyFvPhMc",
  "key10": "2Jufy2ajokdyAgETpzcD5SoWQUpbLHof3LRdNNy4LqWqMCqFudw41fK93tyMHvRZo4tqpfd6KGBBSFKYc6e2eQac",
  "key11": "3AwigsdcsiJQ1AX9LmBCkCgxzRwTn3hvYn8R93wNNHNDBbeNt36T9g11z7yv82Zc2CufUyWPmPgiNDsnorUVs8mb",
  "key12": "2bEzZrJpWUJiRAhx4pF79b5QA6nP4vNmzTGa5SoeTRbmBDZvddxTAKSBXimYLfm8kr1YhFb5jF7SdcV2RAK27Ayr",
  "key13": "4f4fGnW3cTyk3esh3huzwckH1sEDNU6EE1GQxUnmqVMqk8dLmGgP7fXCQaAiHNgjyBN6EoRdzXtPwaNQwDqvBSE2",
  "key14": "3JtFNv5cPjoCnV3BcQmX7UJcGbzNKGRc5Chdpm9G7YyeDBmJWVc4XbB13z8mUewrDD53P1wbfkHkc8TZWTzi2toe",
  "key15": "3sbyk1TPXr2SzfnfmrQszFH3nWeSsLUgFENsZ3Cs3yMZxmzqAsqzkzWrQzdQG79HL3ongWt6fFWLrGj64RK1mQx5",
  "key16": "61HuHx33J4L18Ketq5BSAdv4UmGBKYDaDSYMmiqpNTWi6SdZ4shv53Bm8rHviymSS7gKkZixSjbCSxRnZmZtjQsA",
  "key17": "4zKzxiq4iUFJkAQx1CwihEKiSzK1goXbCqckcGbzWyvnCaoJNJkPNGrLuJfaMjaMgwkuPSMLUKniuonfq3stYZ1W",
  "key18": "3ULZcVnc9Y3vcQugHH1VoVNttjF4y1A3hQZz4R3RwgzUJR6WCAtAC9FC2TVpFsNSiNLTqo2fTc77HTfyh4XZvCrF",
  "key19": "4Bboxceoq9GMiFBZUdvPJXx9FYnQ1KGVC6mGFy2UwQeV2PKLyt1URMqpNYqhmgGFzpTXmjSU7QqPCH8KgW3mKrTf",
  "key20": "3pb4cFi8LTiD7XZsJ3U6JaY7PE4V8WpLFJ49ZncXUxGHWgSmX4kKWchKNqcY76Ph41pQsfSMXXVxwjZ2xVvmcqX9",
  "key21": "411cXEruQ6VLnE1r5i746PdS6AU5TQUyqh7eAJCFMA9C6nSZyqdBq7Mnf8BtFBznjE73YUjkQNYzXM5JCeEBytsD",
  "key22": "5Xk5NjLzhSqJ2afdJ53vuavtKz9iJGJjQLxHCDrithhYuDuqnVCXTTyt2k5Utxbexov9Th8TWYvfhDFkUNuYDTmu",
  "key23": "CV3rvEkcB5VT4j35NWjhoWK5kGH4Y9WjcVrrUC2uRAzpuQUMohK3fkepTvMzfS2dAanggMgakpdQrcmj29DoaXH",
  "key24": "63YZQJoadxyfGGXoeqFm9eVcpC2gD4qb2AjJe4RDw3fNsyS71BstXEHVVj8YGwGAmgMHzHHEfrANeePymY496KBP",
  "key25": "2vLSeG6gJNmT21LJKhRyoJSnqfbD3C7RGNj3LtjQNA5ApxfdBUB6ZfPqa3PmYLFcQLvLj65XsAqwfrkMAfMn1qeT",
  "key26": "5q3PqWjkGjKuKwyqu84HtCSzbQAgzoAt6pthb9bU72q5xFVpfiZekskMzB9nZK9WNUvv4rgo6q6Eahw5c39wrj95",
  "key27": "5wuwuS8zEq3mW6i42CudA5JMuF8EMz3pSGnL1wXwvpwwPvGwyi9cnXWMsc7qrs63BMBirfT1a9JAxg9PnQSeLqjN",
  "key28": "5epCxtsHmDtjqvRawdN4xo6YVK4bzKhDqSzsmKDXGULsfvQAfDXNjTDBQnmGRJGEwjggMzbfsuKTrvqwwVh8P9M2",
  "key29": "4HKABcXG1k7JA7xpTD6cNk8jtM6ye2MhHazGKsJfooUppxqTHNLbYokDakZCqCYKUDvB2AgdNCFpyzkakHsDhABN",
  "key30": "57tdn8LKCfsu1yU6rGHNttoBvkE8jVom85mebcK2VozJtvZqM1CDB72vYEzRbgpPhzyUtLxd24VV5LoUNpvcw4tA",
  "key31": "4mRKnENDyPGymqu2HNvd98RkPdPX3uQiL4wxgvbqsRECKJd23VXZ5sjcUtFns8rvCCGeNsQuufQBywhtC96qEa3u",
  "key32": "5DjEvuW75RNEqecQ6Y2D96NFgerTtDhwG13ktsCZrxkNP5ShpWEkvhk45q1xXGtPxAENoPcqKYtmjJh4PE7Riwjj",
  "key33": "58Wm8pGXWr313CPqwDDG2kEg59DjECGTTkVAjn8M7YaBHRGGmAypbgg1jpiKkZRMEkDE4zZJeXqshtsGuwNney4L",
  "key34": "34iSrou5RMWf41sZ4bSAR12UHXsLBt1kEyMeARkeKuJXgepvrzg525bxjFiGVptZy8WGFqcYt1ZosVwYqjCr5oLW",
  "key35": "FnJiTRLFzk36ZTQBs3mNtNNnrjm3g1oyqqJDFRX262u13QrAuEtCHNAukjBxtxYF4wfVqqSycE7fg5NdqGXPREq",
  "key36": "3ctirwh7GDDjcGkTu6iF15xjT2tAtuUbmSW1dMhhW3n7z9XTxptX5axhyER9dCpPE31jJ9CCJcHJzTdnActA5XRX",
  "key37": "1LzYVsLAWHeafSMExUGtcki92krJJFkHB4DUrvLAzScFKq84gtA1tbenrc68KhfFDFbduhjn1x8RuXQKXbP15U5",
  "key38": "4nzTMSRFbMZTNiWJ4QSvecViFiZL7qqDnRAq6nWfKb31rmGFQQoixLYtJSrgZU44ZsCmxQvvTefgygcwxb4cFw46",
  "key39": "2t8N4Z1kx7k1B2u39N9s4cUzv3T2uwffzrGmjaYHsAaZqVXjDRjovWgbczjcijQpDwm3qrWTyHpBNVCRCCGoKG2a",
  "key40": "5YoiLYC2wrKz6EJj87vNepHAYZxRVzTb7w4xQhJ5jdvf5sPZAVxgS5TpDVkYoPAxAFmQnzEs26WbCmFzbqAUadaZ",
  "key41": "4o5PoNyrtsoVUJi9e963wxsmKNCgPoeY9ViuDfCoRdbgdVS46vEaoF5pRpojpHdrMLExcZQec1PFhzgU9gqnkwsk",
  "key42": "2TtDErMgxqyto7xSdAo1vwt2zSw19hH5h8hx8ZcT2qKWtrhkVMiX6VtCyts1PSXsBJXSe4h9sqGhAc8oxpSG3x3V",
  "key43": "2T5BvDcy3pe1dFgEcrgLz9YTgDbF4tva4LLrExqeTPWMc7LQRSquqjTdb3v1Vrr3wgTr8MHjurdDNbt6fJ7CutUx",
  "key44": "tWyjkxo3zQaT1ocHX4dH8ctwwz7rTh7voQXbSqomW4N6J1Vxo83NUgJ23ByC6NNeqGovr5CyPyH29Bmo6rZbY4V",
  "key45": "CPfpSwydnpbxu5KS5xAAdk5PdiQj3hHg1fuexztxsQCzjcjvqhPqLnXpsDXQfYbvkZk4V4rdWoMfzuo36b2aUW2",
  "key46": "2Tq8yRaVQTytjZ1UfpTtmUizhVCsvDFDiPuqF3HQ43vuhjVVLzDyAHpY81XwZdGXC4C4EbpusKgtvbDopinbuRqE"
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
