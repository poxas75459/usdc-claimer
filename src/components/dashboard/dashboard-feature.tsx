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
    "3DmqTPVy1Kre9PqcT654mKDoE79cVYMKwJ6X1FSp84bvDBfqJVoTvZMcMUTVmaR37feaF5PBQMRnNTxq3QR8gq6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nhFKPZ4vfWYUvmCzAPhykPXWVgikY6JfggXrePDMGe9s97VxCjEh92Z12sFhgcf4eQzaxjKVXTeXMEJUwrQ79VJ",
  "key1": "66nukdrM8Xz9NTYjQgoyCnU6sQpdTcqYHEVpxRechyvFk2bpmJwW2V2NCahF2HdW43NSwBbZrZRUexijiSxegaGT",
  "key2": "2Rqs5MDYsLrdtMAS48Uef6SBMayma98XrSuhkmu1TtueWwHDL7Zmj85LGTmrYQ1oNTQSnzH4KeKvc3NNXMhmgw8g",
  "key3": "4WRae1X1dJm3rDW7Vjkx7k4atRUAnQd94m1Rn3P9Mna76G7YwbStrFKszzBZXnQsA3ssaGxYiRjZgSxBR1ptUhbh",
  "key4": "W4VmLeqM64idEUUYc1AwqQjxg2StWcSfHkj3FatjR92yYmteuNTmimA2womaVLAYJqcvZHLsk8JJxSQdksP1Wve",
  "key5": "31nJidz5q7yAb7x6j9M5JDvNQbJvCkjGA4N89Qv9WLNfdGtL6VcYjb2Fe3YowHevUi9RS43AUvhm74UccxqqmmZU",
  "key6": "3PdkqqctJ11UGKR3LriXXoLxM2g3rMqVr3YK7ExFctfisx2xiTSf7qAyTNqN9wRs6hUK7r4TrTyWLd8c9wJVuybE",
  "key7": "2g26WerZn2Fp5JnWLvTU9oqAT4idvb1FKwQaCkyPo64WWtfSiVZg5qveZVoiGX7mJi1pdWo7wPzeJvQp6d7StvFE",
  "key8": "oGFrPcfQcyu9Lfi8THo6ALHaeYgiSE9NvdcBKGuSL8Wf5cyT48BML3uvjrHou3G95jpYDHrJryDHsj3oatSa77H",
  "key9": "2EjCr2rmfmRUjsr8CSrgnMytPGffwDW7azMbMondapownF11Jzzxt4pB6Q4G6mKe7b9YfqFRnsy4xCQnk1nwVL49",
  "key10": "5Ec6Ywnp4Mz7aVbdgEqDM9jRRtqKW4ikxo9y3TqXswKcio99kcPkJoaWym2CthSDsw4giZpyzAp7ZJJehv7F44Qk",
  "key11": "4hssETDqZDZ5JV6N69172WDcnbfLT5jmvTBXKRqhgrPZC6zjsCpAxi7x2aKCE4bPnY2MDyqtT2RvKZzQLwBGsTJZ",
  "key12": "569R2MLMjdPoHnCM3WghcLHdBF8Erid9LxSvRbtxhMTyqqbZPdaePyPZGWFiw8nfqv2hzioBEnXbvywo4eaXCCCL",
  "key13": "2dALXMGod9Z6rHRRhBQXqAUHZT1pY7BgsW5durC4frgy3wQz9y8LP4nD9Yamw2zFCSC18iBefpxFmvSnzzzrtoEy",
  "key14": "WHmGxp7eCW19dnmtm6rCtzH4vu9Kh73KF5iupxNJJmqxRQTHid7qZZRPNJjkXjH1NhHvQg2PQntDrL4uSYpLTUR",
  "key15": "24jhudvfEeeYMEMGkmV1tWCLHq2PfswxJwpsBvxht9Wj7nGe5cW6EJdoVpoqPcUv66D3Kg1jhHtMtdYBwunYuc7a",
  "key16": "5UADQ58DFJdYvSsgmZ7X41cB8g6EXCzLDciEpD86YsNy2T871WVu3pWyoSmkH2WKNiTo6Wr5biutHzQGJ4eBP8HR",
  "key17": "5apjZsWTwdPxUbhBdfrFUmEBtBpGDiZEgPGXjFaM22YZR5Cd9YEipyMEvrrBTiUq6uHd1vv6h3npwatxuqBJuXdH",
  "key18": "rPMBBHaQFF1BeUZHsqjJb6VwY5EEkBartx6yXPxp9rWWjx79gM8o1j37WEhguP48qwWLMt4p6ijyiLyMsPQ5gpW",
  "key19": "4t6L3oe6P5QvpMmghSC5D8i5j2u6kjEHAQooqvBsQcTbDcAFjQKvpSzBACDR84UnQzXrgFKunKmRSD7HpAaHckCg",
  "key20": "2XWR1P3rV4tHR1ww2L2M2oW7Z4HK28vt6LbHPitTwLTyzD3BHF4H3jJsmuk1qwHdhz9n156fdWZhYHFvn2SUaAdp",
  "key21": "618PBj8jX8YnsaoJELhmBHAwRU2eS7dbg1hyp383kaNzQo8fandNrE1a5kQ2sGhqy5jR9Ff9EvxjWSyN1iE5AezJ",
  "key22": "5SfaNz76fznSf6XzteKYnaZPhpZoQw4CrUUbiyJXAfbrUUEARoZibaVZxRiBqiuXZ2hohDqMyzYQiT7HSTVWuTNT",
  "key23": "MUt8DgqvTvyrcaAuzfbf4oBncJEX75BwgeDDJar3RQPKKoADoWna8wehGuYgqDmBBizXbVES1YALhRAusahxZv6",
  "key24": "5R1KKk9kUXsja5H5avafY8q2dhPvzBoVmSC6v7MdHuowXtSFiPZSZmmGijRoF9wQwpW3b8DHhJ4wXWDWnAvfiqN2",
  "key25": "4Se46cKmaqoJnpagQVrYBKR7y4va5uRng3nkBNN6Ym7BFogTdP7PSTz2HaHBhYRj9HYzQC7vCmUja5vYsYDaPxWS",
  "key26": "3Kcjw6amBqnLnYjZeevpYTrXVcE3V3w9oWVzYGvNEjSGAaQ4YCnhx72nnnYKDRPcdV6UFD3BDFGuoDkGmGNW25Gi",
  "key27": "2CEjzNqdB4qiNnxmGUR6nfMX448SgYU2uTAS2g7QkV6trNeAKF1Sukg97PM2wCdx2T52XuD6yNAw2JKcnbN2CM3U",
  "key28": "4VcQnK3VTTXDqjeCdTfp79UEYBAGgWDaWDC6GD2qro3QRdqTBC3rXUqGbKQQA1qaDcNKercgKRp1iFfKHdKxwUMh",
  "key29": "2YA7rBiZUuXQchh5rCinh9tkS3e4qcnW5EejBRfntoESR9WVdpaUx7KBLjYTwnC2J2L7WHc3CuhRovDVDwm18ess",
  "key30": "5akUmuRcdVUH9tB8oHrESn7YxL7z5YrJoScyDoDmrioorXTBkboFgXJQ19jo2jTfqSe9hpkvTH6TzUykPftsDMu4",
  "key31": "4xcSMNXj8s59tC9vS7BsFsbGKwHMg8YEB4xjMH7SSKsw6hA6oPcRq3a1DUzSC2vFMMSQLFYnrD5pPRWSgry9C1Q6",
  "key32": "RdLQ4VXKaYcRPLwJNaAA26tAdRJoYQq4WAznK1AjKqaNcXbbw976VzKHGBSGq9cAASxtdfNmBhc3pruNh9p2zfT",
  "key33": "5wK2sby3phSJwYSuoc34NNLqVDvdedUFNWUoQZCDqraPoXBZd7zuXirpebu3E1oqEMYNgNtJt9my5QzzPFA4ZdQd",
  "key34": "5cz6chvrXC7timMHoEcBXC22MvG7ngovEEFaGmeYGm7dfWUjfkXVdVqJYbPxV5GAmc9hfJtJovHUDnjA1MUdvQoj",
  "key35": "2YD1MkEKHZyPpBiztLhRJrhFvES7uP6Y7jUdF36WrBMnSMDuSS7vG8vCzC9MWH32p5sVxebyyumUVk5TNARePrBK",
  "key36": "DYmF8vzQ5BNjC18PfQqEVcC47MqjdEuj4YvkSs7BGz9JH9Y3UumHMEU5i9Ps791ieNiMYJNkPeKPQqaNdqC6RQe",
  "key37": "5R54qywH4acjzYV4XFEbgVUqn5GznS3cKzNButsRh6fFZdA8d4kUeP5t6jh9BMZSU7BNR5N3unEY7JiqPvtb7xPf",
  "key38": "4tKLwWs36EPVgsucAzAioFDZLLEjABg3YT2RFYF6paTpUpbjJdnZvfu3u1DTLDFsr4vuBKtjEfyXxTLNuJkEqScn",
  "key39": "34M1veZ7ayWqhYV7T5Z1jFPaQ3gxjYZArGTuojHH8eRQTYxtzKftTqb8FW7a7tJWVxcQQD82VRBKgX9VLiv5orDK",
  "key40": "2zc7e9Wbo9RaqAh2trLQEn817fAMcPhUf8de4rVKRBD1hya5BiFwecCriVfXoAJVrJCRaMx7tdSirrb9fWYyA35M",
  "key41": "3fNcYaUJ8hwLU7fPZo5dQtcLG1HWerTFdAxmZPT9nrT2z2nbjDv6zavDCjF7EjyhvjfYKsTqP2TgSw1FQx1SJqsv"
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
