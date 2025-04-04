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
    "3MGXtLnFrFbgTE6FFavSDieTJ9F9FnxALdsNeeYywUhvZMfjjmUtbjSC4YFaBwtcK4ESY61fgQeSeSQNkjo7oug4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X6QZrUXwYBz4dtXXiTDbSrch7iCAYJYMHFACr16Nv2zNm7f69UdSuAz9HraC37oiZcAgXErZnhPafNiXsQTgagq",
  "key1": "9V2hhbzR3hc7JS6EnTM3R3bk8e41Y28sW7NkzQS1efigK1zY3QR45TSnbQsGfqi5RTpmFrm8HpLDP5uLFhvwRQv",
  "key2": "5ZwVsAkMCcAUjbijgiG5AWdmG2VNStarsoAoaudrVbBoWwXc5Fm4qsSpnpVW9e5mXDwKvu5VC16bWasiqT4KMjyH",
  "key3": "2n6qUrTPVjxsWqPFewmR9QM1MdG9YuBJq41vbZTEeppARVzgj1XtgXrqkULx9fyk6awbCwp1Sfx23CqA83ThGcBo",
  "key4": "ySoUAjMyJGGeRv4CGWJAPkJLRcGvCSR2zfMZpJRgnV2fH37thSG4sMz5BzxFyvGGViuHh9rdUwbrVNTiQoA5HNx",
  "key5": "4M4CaEYmMYgkQ2yw1xYF69X3gGFdJ9j43cnRPuBzcQUimRdmr9475D16EMGHbyH4erjBYf8ppN53gQhwChSKFMhv",
  "key6": "kc2L6izfxoSfpUZURyULHBwEZ5LZcUQZMyysiT74Z7awBAREtvk8tTEeHayUAKQQF5VJf42BMQerJoXh97tRALn",
  "key7": "21DWoDZd6ZcQtPrcgHCRHrLTRDGeMffFiRyyMyjt77tPsZxmAQmvhpfzaD7xXdvVr1xyqA6gFAghMikkfgaHXTMn",
  "key8": "35xJhaQNpoB8oxmuK892VSFjaAnmKyiVKNFcJ4LPvMXfTCSaHczfTdrBAuyDaqNpLV12jXXeEbV2KPXDyd6QZqtm",
  "key9": "5fdrDvY9wrTVJGxsCgcKFmrBgnMNsAfTKBto93bzMZeVZATaojey3Li2nvDxrCHc9qEp3aZEukd132WWbwGnWNeo",
  "key10": "4YuUTyn2S8hGxaFxbFNghXbCBFg3C6GmyLhCvDHohD2E3FW3RgA1VX9PnpLvdfnAF5vpDdRm8oasAccns7q28m1F",
  "key11": "4kQoGjQKk5PRMaes5THVsJCwNpATyA2XgsfJSDZAfxtYntMcYf3QnmZp3QnE2RXyUbYuRiLm4hBYVErnRYkVaFy6",
  "key12": "2Eab8xrn9NFXatkM2wCPsUHtDVEzk6SLWbUSRwn999dF2W4DEfVcXGyWdVNJEE3idnPMhX9AZ4jczawCJkpLBTjk",
  "key13": "37shVTBWy68r3rRvuanzoNEXbEbiq6zhHDmTmqECgEokiyvvK1E5RZuNWR96AuUSpHcGBAnfeccUSgAWLAwGeME9",
  "key14": "2Br964AHszB87DKRp9JzyG1gknhVJjZYV2iebxfPMjfAfHNzudSzhNmrEht2Lqx3uDwmd7BAH2JofqvdBpbewaah",
  "key15": "3fdzHp9MZ71T6RZwHvCM6dD6eo5N7k2Q2ga7rKpaNBaPnuaAYfnFM178rfNDnwdvu6vVr4mPhxxq9cTqUe83xVJv",
  "key16": "4Xk14hz6bdcmLC4MqxLbttyNMDb3k7mpgaMcKoXBYnwkUEpLkiU1JZrzvpTUEMXc9pTA2iZynvx6VXfJqBPuTskg",
  "key17": "5d4Sn2PZDfc5assWgUbkJ8Do5RygQFirVuipuVRcpWpF34U24MxQceSDCCJoeuRtgEgWrih5QR8CREpq5kWuRTJg",
  "key18": "3F6qwSmuutTb1G6t9uzPXwkJcFVdhDpuAFtxc9tW4N11swVXWjj8QB7ebtavHzRxWoEircc6cnBU3T3k1C6qQZ85",
  "key19": "4HLb1FteBoxBPiwBdtYjmGt1mrDDYkM8xX8HEaqZ3idCHniAn6tsT5LBGm1eBdWAbUHcnYpiVWd5BjRkgNWYWjsE",
  "key20": "66DhApqkqFnLbsmLYs2qArZNVcYRrjUJNtuEcPVLEaYruCHE5n7WVxU67vyE92T3hcy4AbzT9VZEJyYeNadZxX6v",
  "key21": "2XS8o9PGJHktoev27A1jr2PuQZGcYNzw11HSNbDARbc62j3FYf2nvZ2jVYcRbAdFtW1JWzsTWEKufvdBxjCcfoFK",
  "key22": "vq7xXncw1DiYaMAHTrX4Sdg9HxkeaC2Fg3wGruyU6PDou5pqhZDgXM9VME5AsW77xC1kYKPp96HX4EYpYe7wxaB",
  "key23": "qJzQgYgXTN714CwYXsDwWsjs95S8JNXfjzXUYKUr6qyeYpji1ZM6SzhGuLAefAkb2EJhnoECbBdqxPey6cNRHHu",
  "key24": "3e37zYfNttDMffBTgMuvmvsY7Htnw1kA2dtEamWr5XdAnCzAQ7UoeYj5wf8NUEcYeRjpiaARHcLoxn67fjA5zft6",
  "key25": "21CLrugvyiUduKMSzw1RZfiTGtMJPLdVuzPWJxsfpCA8A74RKpZJC8s2K5aRVZmSk4d96E6uZhUsDm6do3xjt9bi",
  "key26": "fmrnWf3NHmiS48WNwadKDYcwc4DUUUW5N1ChqiT8jkXApmmhWdmTLQUrpL7SFigbiuxqiKjaKNKFF1e3RH7Mwiz",
  "key27": "69ZQeTnGxux9sjZxbykHEHYUe82PsMpAqFggufJU7BtmjVdCKyuozKHgcfy6PKg9N3T8gZcvZ3dorbS9M2vCsq5",
  "key28": "3JKVZ3m6FWm4KHWfG9L3pYs4J2fvPo3Wo412DBESLrf3aciKCWxZE8yzX7NHxkni4SEdWZKQ5VkUQfEbYrNTmGpi",
  "key29": "44Rukh6NHe7L9vaqkx8jwT9fjAhfTpgW7S1MiQXnJqhG6yU1WkGnXJCm9s5NYor4sVzUgdcouMjQqoY6beaoLQhw",
  "key30": "26GEQqSAkFzUn8Xiv5MH6Gb5q2mgR4vw69h3kP7nLP3JBKMMJkzYdp7yQM7goQaErHCXVyd5B3dk8VeWPbvcAqni",
  "key31": "3UXMkt1AVw6E77j3zxS8RSUJZ1F7uL8sdRQyG62StYcqsDuhdka6YGah5KmKjQQtC7pZJdPfUPHFuDuzVs8Cc31x",
  "key32": "3FF4YiUfs7u71hVsJnvg7uaDoF4D7zfkDk34HxqUW44wGVTQzBg8h2JoRFngEoEsGCA8SjMeEb9v7pKeTyETXLgD",
  "key33": "tRuubtp3s1ozswffGk2Bu8zPncMcnE8F5ns5F37VtqT2bgTRFLZzrDfoVsFugnHz9w7uXgTSfD1wyFUhk9mkhKe",
  "key34": "3bXDd29ALfDrz1fwAhsupSjwYxMDK7gbh4cNHqLufrLZWsYRYRVNpCW1yx8Rzvgd477TyG4xGKjfGiwFtorEMCTd",
  "key35": "4bo9RQ6QPLpJYVxcftzcTCJbBiQ286iasXfTksK9utCkarqB4FtUYzZsJRgzSP4aHKjHqnjpGHKdXe4JmwrPqX1n",
  "key36": "3y8jK3HKJ8p5Ckf9vGKX88V37JCcwi44iNBE5tgHBH76eGPQzvu3SsJgNEfsT7tqhZNYbabpjSTEfbhAxoh8Bh7c",
  "key37": "4qkdnE9bXTBknPUFhhcqczqNsdLLAccEmN5rFk16nGEeaCM3eDR3upsvaQnynGLChY3pVEVBXeyK8JVBCumtZvqN",
  "key38": "24TsYyZsDVtF59YSebSLRsLXxyYP7AKtgXskGMnLfA1K4notBEe5YPSRiDdMdrp1tpd2hdKv1bnjCuNPm6yAfRCv"
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
