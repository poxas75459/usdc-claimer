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
    "2BbpshkxdRh5N2K558ku4ZR1k9TwxYSXRWRi7cxPvSrDqM3ft9BaMBmhTb7GDNCeVrvrGfYP2nZnRjpycAFkKdZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ye1WxKRQzC785bPixkQBYPqrjh18va5wBwKhQoeuo97B8nRrg4Apu3bx5tT4Ttdv4Upsy57pn1zv7BXBx4f3VK9",
  "key1": "5yYGKhcxGzoPkLkc4MWHhh5WQiopLFfJLKNtFe3zsMTR4y1yrD3jzyS4WDhArchfPruwbhBKMzb18bzFiC8vgnma",
  "key2": "4WhdByLziGS6UthZneudThAYsyj8bmQXRqnjoegtSyUGKMbnUfbQrTj6ZkHfiYzQ5zxTzLTaB9ZWMyEkQGTYs2jM",
  "key3": "2epyZcgSXmbMFj1RbFimJ8Rb75cWNdZ4cV6BubgwXtyzgZ5uSuW63w2PUHP7bwCbZdvj87RmR53gdwcyp4DGocTu",
  "key4": "5VLwTQHDAbQhgfy7kWmmPVUBbq4CXWuCYJHAXT9qe1U77aECUp8RATbAbzPW52BpzsTuU2CGNgFW7SFWRmV9swp5",
  "key5": "G6DUheUFSKtkX4MptiLGwiF3SiiXgHiKP3rBWx1QU21R3jw4UH59JZ6ytsttd126PtdqznqZCUe2QBMskwoUqKB",
  "key6": "4mjm7BS3dwchFauss57SU6RnjdrDUQ6LDdSvcactHsjC8qdJXaw5eRLsj6x6oKWV5LW3QMbovCZJZxowLPXYar91",
  "key7": "4bj9uxBeN4if3ix9BWzdw5vFPTKZCAkVYQHS8W6X3a18fQauxjHSL2fFRbQnj2pdSWuN9M62wp1iCbmiN86menZe",
  "key8": "3cxtvdJbRibFJMfsPSnwFpf7CCSD7CoQHGxW69918Pvo18tRhg8AFWv8MmufuBrypZXC25wwZa7yjna4oicdaQx1",
  "key9": "2GST3RRo15GytZeY2mU9jWPt7ZdqNnHNNLa7F2ZdB4oiqBZUUpG87hejgD48W7wcAHFvmuPQd6qJ59MZbRGF2M7G",
  "key10": "1dWhBr1fgcR9zrFQjBiMhKpveVtT6ksdbDTxqi7hsztxWrrFVQ1i5QHiA6hnJK9Aoy5NVaDcdQ7C4avRxiuDjef",
  "key11": "6Au4MsT3NB8jZT2isihW9hk9w4kEV1v1Tm31C4Fp3G7SeQK12jum2r9YVmD3dvEX6ZXRg6itxGMRWfAe5o84tuP",
  "key12": "YbXbJUbdNJrQkPgLreYbwroCpZvVBednf6izQreNgJZvTkEpDRXhCvaT237WRQUM8D6CXSQcD4R4yVcf2D3iLgG",
  "key13": "5Uzq19CX5MjG5cV9RfgLBSu6NLYEjyGJdKy9JF3whoFwpy4ZVKfgRmxLobwT11Ca6EdN6aAyA3uPpnjoBs3cNW7u",
  "key14": "435NNUsNQFgqoKy63bBc5u5SeuhipRfNikEypVUocscokkt7JH7TAozFyEdVGWUpuWv8yh1BpETzWokEza3an3rG",
  "key15": "4HAcDa2An4AFUftVTyQWFL2niqrqaghonjBGFpYM8NsA1AHafi8nS2iDyMw23d3YJXURXAvebJ4DNpoMHEGg9Uwx",
  "key16": "2YXJUMnqKTjSuJsHeG85NyvtNs7QnRNjFGvo5W7A5X4znPbQxJb5MXwtYQumuzxHkhTkTCCWtRoBA8cuyGpccH7y",
  "key17": "4thzfFsoJDq1KUpfh2mA4extrGr8127RFxjzrix229PcoJNdhuoK7JJ1V8C5zT89bGqhPBUQb74MWZ6RcoiRv9zt",
  "key18": "4Ph5U9oYVFSb7kF29DatGdUYeHWbrfXCFa6E91jEbvXNxaoJZJYhTchKMhJL7oFtTKxTchRereSVntWgjn5tuQx9",
  "key19": "LqhwW8MJ5bRWFJt5X6JAZ6ZS8C2f7mKjQhfiSnESVDZgkx8ZgWSYGoc45Mvg8DZeYRmgAKAtw8WFGiD6HqUYegd",
  "key20": "4Kwzn99y7HpME43Q7DcDjNYasVdB72paGz132AwsrenzBJKsXVLc2Tay1HnZbxPewaJ8LJadfV9e4E77KMFV7Vcm",
  "key21": "tWUzjPLPWHtTCnBt5TyssMF6bmVjMrm23m1cdmUZc3Agmys7MuF5at6hc8Ghx27ajM5wy1g8R1CAmAWfJHf2nwA",
  "key22": "21x8J8J5h66PJVkDG9nRMwj8J2c4KdP25528RgjAqc5kPswu45o3FYuL8ryShU8qt3u7aqHqePi1mcnNehduZ8Zn",
  "key23": "4i7Td3DBR8Ca8A8JZaF9xLjtFAJn18rbJ6CExkwCiF6gt81uUNtqiEatQjEXbNGJarSdu8pqWdYLXP3nZRBGv2QF",
  "key24": "MiPGaRoiDnoiehQRGUFKRB2LvFwjQPAnFmvanU1mf49PEW7JQj6GSj6WAnbEtY9X43cZMdZG6jFLeD7CLkCfnNi",
  "key25": "41ZAG8MhFjBh2F8VVguF1HvX6nMeJmjPTRxiM4CbmkbUPrbN6FJ4LFn7tvvRMeJwMmGaZ82XsENqnBryqjGeWSie",
  "key26": "2b7bUmSbD5asUc6DNEmSkmbESpgniGps7MM25HbcNEGWGPmWxbELHyDmR9ptKLQNc8QRujyAsNXNNrYwp9m2fxwp",
  "key27": "56nvaRS5obY2ueVjYvpT3dC2StjdJjAbknqaqjbx22668UQNdJGPp2RqCBHeSfrEhrdFgfJ2pW2rYbsLcdXUpKnQ",
  "key28": "EvnFBo2hXQJUyWFNqzZkxphVgibjGkSxPDLXgMTDpkbNrQLpd6koGnLixhrzFSkWz1343iHxiThDv1RrUpugMBE",
  "key29": "2SMfXrpAtFzYfkD9YTTM5b7hWfZpEsnqpoqiLNNXwRQnkKbifw4VyzZLKLGQJaJioJ47duVUfAGrTV6sW3f7A5ZU",
  "key30": "3wuEL8sC3M931WkRKk9Cy1nMHAh94X9GP6ehNCBqrm9cc8JU77oANPRHRHHPwwWuWFJgkkYxYick4VqzKD4icTLv",
  "key31": "4Sj2iDhSMrxtaegTz9wG3kQ8Zy7WA4fNN2TeAauHWDT9nFzVRyy8Y2RWpJtNjh8RqoZpAr7T247wZ5x9tPSyXkAR",
  "key32": "5nXFnCDDQWLWnP7pLZWX6H6b8MTbAYMMLHZ1CfKgnLoxJQEYFU5ezvRNz4Dzd2a8QRKE6VPUim39AedrJgeakdUE",
  "key33": "5LbkNy79Mf46C3Npb77wiAxVQJQtYh8dUYp4xEdKmi3VqZZGn4NXx6ZFf7WVqAvh7KzUSR5WCJTRTNXAQHeit7NP",
  "key34": "4ub34kssZqeLFGfJ3Rd2GLfwGSXXwz24YqSFPS7Msqeb99cmhuZFbrs5TuHQxSS9Gujy6gihNufnyvWrgdcwYZ3a",
  "key35": "3r6i7719Jz6mcoBwqbSNrEBVogz6ZmEk6fT25pFhYKL8tdFi1Wz3S5nzQEkQ9vaBWSUzPXvZeRMd1qopK6FxmYmz",
  "key36": "4jcKnKa2tQjZLfCFR9XvUzXAh4uNCv2NFWvzUWWZMRF3LN73SBMXB7UL1mbYdkwsyCkca46jPjwp6BJYpreL9FJA",
  "key37": "yiMsGpHaBpRv1dibtmxcEtjWkPuXL5Rb97krErwGxnnmCFush1K5ctqXdrAgcqWaeZYrKuBFWBxgrgAgsVxLAb7",
  "key38": "37MrnZP7upf4am39qjQy7FUDdDquiDzpgyBTY3Tnmx9uKCTcNP2v8kVK6ZvWqgKNer9LT4E5SwEVno1vEwCS1ZA2",
  "key39": "5fxi7kK63SBPVkdLEdBe9uRvYNrZhrsHtWZzzVEjwccGk8thENjZqtMRnzpg8cDnLTgBTFxWJ7a8TV26UuMz71ZD",
  "key40": "5VJnUrvoLRFKS3GPzngWK5j56dCKuyTfYzZaQSPaSAsruba6HzaD2ChrVpZKZ8RLyvzhDcM7aowMcbC4QrWUEE6W",
  "key41": "TVWDBSRmW2nAN94qCDiY968gMBXJ3aT8zVsngjKvppve3kJwxDxs2RJVzWoiFNkT5zXEg2qbWSPmPec6LPNnnFa",
  "key42": "3MNGvWCFZHU1yt4QJLkKt7oTMR5jJsL9KARosLA54mVBoAZptXHrET9yHnNhLAKnBzya79sNU14Uuu18PEXkns95",
  "key43": "29bDfHLBMQQhxTAoeXeJPwgySCfdVj9adnbZcEAT6H4c3XmYJVbLgbtDgzocuuWgnAdpLbyri3VJZdEpzJeTiN4S",
  "key44": "2qCEn57Y2QZ8BXX98hAEnDxkqGESHBsRVPpRHedM2mLiW5wka3ntRzKX6Yth8YeaoSgDCJXHaUjTwEGVDNJEwEeY",
  "key45": "3yLYr6RvZJrGjRmxUrcMyNwMKDrcntVhR9kqbAkaaFQZDpqY3G5NBKFggJS3XqM8mwEmd4kKgNfTP8aqDiLrcier",
  "key46": "66V5WuMmbB128w1kAeWabuqep9tHH7popXe52UQ95yJgq5x3edHjqHpCmgxXDy6UZTSMFf7mF18TprxXsBMnxwws",
  "key47": "48EjUT6uuDL7CHfm6V1m3sG1h3AnxG5TdjoRK2oKw86uhnLf1B3xnG9do4zF8NQUdMG2uHzkgQM3hd4tDQahkoYU",
  "key48": "WBmua7sgvojVQg5dByXFwmRAbwtu3rR8JJApijSAhor1iwS6sEFPZhNvesRBSwcQHKYcsEU3RPLW1f3co6qcUgF",
  "key49": "58wER8Xhzr13QrCDMaJuqfCUfx8nnEDUvpxnfRixgKwaC4L7pbSqardqiA9LgJcJaffQfSAFpVyYGBGzm1bn3maK"
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
