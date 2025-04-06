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
    "3pXcm6BJo71K2GYVtXBjHXPcdhbJVKYi56wN1xci1UhoFRQs56PxbxNmd6t8SeqrS3atU3GUHjUKotyMQN97PFK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Nf3if8wm8WAi4C4soZdZQVd3fXv18yJTudMpqTrdPfwy6qPRUxHA8Cz5mcsAHE6gYwmpvdPuxFAUe7sabHypVY",
  "key1": "JVt47JNJ6nGMsQzSkLoM9Uyo3GgLFoHLH4YdWFsMMpwYMdHH2eDzKtcbfQQFoyV7hi38rAmuvm1EhdYuA2gN18e",
  "key2": "4LzWDWipjjaLtzo6vtXN7DT2wfoo9nwwCWhSFfWjm2tVbSiyLbW3K5Q5Pg7Qq1ZEqeoiduvZT2ohcMAreWSggbKF",
  "key3": "5oE8P5yHkv2eNT7z4P9Nsyfcfew6jE2ocYYv3JgPckgqkTSeyjzyLZd2mD2KrUqPZFVJtmvsKgsp5LN7PYkC38DX",
  "key4": "2o9dX3fwat7GXSR4BJePBasRyr9KEEsRCRr1QNHW7Xy6AnndCLM6hPpPiJmgiQLxnPmhG4Kb1nN7fgDbcYe8mH8w",
  "key5": "5Bj2tppiHyDmeviKBRwnYLrnRHGyC2aurvyhG96ekQSqaYGLMrmNw4DgdX9fYXq3nYNoknDkq7ohU9njs5i9CNPy",
  "key6": "3oh9CJPzZArUPRiRwfUcVrZnLQfSf2P487mDohh9pT5BoJhRsHUWNoTWzSrn2vQQ2pZWky58zS14JFEL2Msz7kVX",
  "key7": "2v8tRWmGoRg9xUS9zfqUYUdr5xPhYWYw5hVoi5DfBT7v2RmyvZCM9X41BZq8h3ycmkLPLZRjynjCMd4YiRiqTGhM",
  "key8": "oPbwEq4yLfLXqnJe4a3WXewy8NrsGqkf9SEywu3JqaMCdEdAzswQrP9LUUE5tFAFS6WaMZtRSnnnAPRYzHeFY7u",
  "key9": "2hNK1dWaod6yxLjZnZFYgz6HuaGn29QbpFKDs8kHGF6fDUP23bgJBLeHEzbCACL3vQAwGB9y3i7iWn2oWjqCeS7P",
  "key10": "2UN95JKhkEqWHcvgrmhiriFpdhokgZdwWRbKt8r8tadHB3BLsYzWAwsU4qMu3T19VHnR12XvKjGHV4pCdtGXrmUs",
  "key11": "3srJXeCCX476zXwWjKeLvgEohsHutSfkGrZvU9x9dHoMV9EatG9QXwdXZ1Ah23SytJb8dFsCf39hZa8W85UUWUw9",
  "key12": "4VgivCw9mf87PqxYKRkAjtkjU19Q9SgKqVtPMiGeDhooNpa9V9cvyTEpLmfFheiqyH69xvCrrs4YskWXCP5vNaGG",
  "key13": "4rqfJ5ibyPr9XiaH6hknzEppiAsBQc3k1sBHNcMbvXPdTh2RacptiTpxtFxkLXVcxq1ZFbAN9yfrHADr546GwDJo",
  "key14": "23FygiQhWPZZhWqHND25UL2EJCqX58Vp6A2p89kJPuU2gXWLGaJRnfd3noHQYTwbpEZ54tPesYKoJk7mSros3gSQ",
  "key15": "4Xs86s5VPC4PvHVBoExP6uUS2sVd2uQvqVCGL6WQBZj4RccXYBVdprSMnLLV8XcTbeukh5iuZyJe41RZ34wyXQDA",
  "key16": "4Jex5R4Fu96Yuce9CX4VWhdHZp1J5Ub8TUFtCM5BLVcKRnNB8QmoXac8UsYXYTPSxL55B1ffumWoYjdRj1gb49Uf",
  "key17": "3ePLX1A7ELRhJRoBYumVxUEgGP3eA3vjZeVigY5ALwpf56XZpqyKndcN4Zuapm4YLHKAks1En1APjjX5i9xCGq9o",
  "key18": "3hcbXMnF9G7bosvgnhv7Brah9bdR48UvAm3ZEc5EXy5eYUG4NmLkmZDSFf7z3M829SSXVSSWrF8hRuigqphNUJ1K",
  "key19": "5JtzcdMMYcrRJHxK55GnbNoAqbns6ZUqkKsyZHxZ1qK5M2dtRrAqWxLzZC2yPzqBAXRoAYsSndXG19VY7ZAAU1Ff",
  "key20": "5LFQ7amAYizNb7ZFq1GX3DS1k6gHf6CeynmaF5HMTVdETgfm9C5YKnMSoTKQKoYNfKfVDn1rWssTCqFbzWNu6hzr",
  "key21": "KNuXd3kwcFTWgBwrxBwjr1LpXJ3xS7ArCAzCt7hv2q3RipqFrrn5gojEGATUpQxBKhKiqH4JbDHtJFERnx5ntt3",
  "key22": "3tsLMm8HK37VBi6EmkNfxTVVmqyN6KyDR3TqGBvEwFhqZzYzWK6DJ5GgMJB3GqEdHq94DcvR4thQuoLCNYctYax",
  "key23": "42qBXbN2ie78xdM1hUj5gYBk8quWf2TPzNRCoq52URx8tFsRcbhvfmrYrFywQe6NJBv4ehmASuVRtBFY2zXQZb9M",
  "key24": "4tASsNKKbFgTzTci9MSumMjyFyPpkUPrFHNeVAcY5WcdFBFMQQxbpmgebA5Ez5XbShFn43Hv9XAoKSjkQs9Ey8LL",
  "key25": "E4sFQ5DdKJ2Ep5tE4S5ghvCQLQQ9EpaPre4tPeVBuBzFbTHXjwJKDMFgHTv9EwRPyz9BGKQzN778o2Sc2sdizX1",
  "key26": "2yY3opB4iZi35jh6NaCayL8smkYi9kSCaRyjER7eeokjrd1NvsSbmSXbndXQHkchRx8tq9AsNDUABfdXKMHhA3Lb",
  "key27": "4kgSs4QMzNH7MZxsd3NVgU5MsbvtwpZaNZJhiKe3M5zDT2sAPQmYZhZEYqA7NsgT7FKj1dvZPy8X5dVBEiBwPrp",
  "key28": "2uZVhVs2fSeJMtDm3y2ZsdFBad9Zw9pgcKdXBnjkEZwjeFQJj2ofcH1hrDT7m32QsvWQK3LqT5Bw4rgYF4ooXDYx",
  "key29": "4V7PDdwRETNj5Rme7GsKnCyUXr6J6DX3MjvESfqrBH562UEAs1R9kXoYiDfVAVcX4PjYo2yg1yCWNeEaBYSCheww",
  "key30": "3HfEC4dhrdPXQfVbzaeYtLmg2heFbwdyKf49fETESfbaCXvXsQU655owSpRVKyKp6eMdyDDdhL7ZnJJEd5MEAHn7",
  "key31": "sejPAj1eLfFZxovrueuNT2FMTEF44Bom9ZUaUQn5XTkbPBykm6cLPAfa3aoidgojkR5taWkWwTNXA3kXTMKSVtG",
  "key32": "5kNiypvRfhP6rd4se7HdLj6EL7ABYgdwNhNhTPgzDDAHZ6ixdaxiQjRvgNpM2R67RZ93i4nKT6EXCw57UadsuoBN",
  "key33": "3H9D9ZTwBwXtia5vQojURpHiEubvgMALu6kjNmKfHXEZEDDrKxQmMnmnUWmvW5seas6wmjZBx8GCdypD2CnFQy2B",
  "key34": "4pfzzJkjw6667vaCUHCzA1qaEJo1G1WS9rhRnXpsrHGhWxfDMUb6q9yaaefM7mruUFXNkevPWmpzbgh38qqV8vEH",
  "key35": "4HAJXz5fLm2LwgnKQd17detiCxSEXt2qF1VM3PhV63H5HKb9EzJF7SB8igt9hwb3gSfHgSimLHF3ZYYq6sxCuTfh",
  "key36": "5t3gFCksRYFtJxhvndTUUd1pHEaj4dSqNgpyjHUZ3XXR8PZipPjnyuGJqL4gDNYRYwpHh9Y9ou9uodNaj1nVmKxf",
  "key37": "2c2zRM1u3T5TiQFoY5WUikEmgnUZNRA478wYnopuoGRUA4JqR1H7irmiShC7wBDeXhHqmi9XyfseSacSeemFsjwi",
  "key38": "22nxofNB636JwpPGDfGFjfvwh8fxZ3obRDLuqQTTXiea12erCoq1v7DFHV6it2qR89AUTu2d2dBrdUG1rKwsS6Ws",
  "key39": "3U2BGQ6DNPxhkz2Nsfvhd1zqoBPAGo53t14MwMLiEw1NQHaxrr8MY1ZdWg2Z3sWgt7dR1py2uDnirHi9Y45waYf5",
  "key40": "4ydyQeSJQLBFrKLCvcAtG4XJstCfDArUKx6uSa2pnGCHJNYNEVSTiCrFzDCE5j73LWKkeiTwZBLGHR9vg28aSc78",
  "key41": "5ZGV9E5VSGXTEDHmgasKwzNU7qn2AYQ6n4EKqg52TNEYo2oRKBVxEmDiZSFgDCfGdBo6LZXKdS9jqmuTpx4UzbjJ",
  "key42": "2eH6BS7ERzXqFSsz5D8MsRojoCvqZ9SzMPG3DzRhkuWjCbhAiKjyBXpNBBELZyGQab3TVL2Pc4mfjo5MbcZpSFQT",
  "key43": "3rKfeSP4pKuPEa71SuEbdBfM7dgabVqb41VJERkDuLBw94Dmby8wdFu6oDHFgPSgiVQbTskxAiitpgobMKG42uWe",
  "key44": "36Qn2ug4xuMJ69WWTMFYUsS9WaWwSHfL9TbKp9RuuRXiu9sP5qA8e8RrYJs2nMddwPtNhRanBpWQka8EsKfABVhQ",
  "key45": "gfxyGBqquaEt4fKtzeESJwz1VqXvqE7aG1GA1xKkbBRWvdQ24xfgdwTHMJSuoP5SfxMMAueS1eBYqpksyZprnfJ",
  "key46": "3Fujyf68eGragrisgP6bzf4it1Kre716U6uCVf6ciQMgii3YEA8F3ximrd7i9DkCMwJhoQaGDRwh5moCTqfFDiFd",
  "key47": "3hKpqNCLtWwPopDyw5xMqCfmVwvK2StH1tT7Bup7pi3D1DDb8Y8fD444iZJVfMyETTtfPapXtivt2AEEe1qBo28u",
  "key48": "XwDg7z414HGosvprAgHMpkh1y1LVu8d9ipvDvTdcksH3RosmnjZMa78XWxDeWYziKZzLBBm2ne9fBgzdfMPk7Ge"
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
