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
    "2cXyhY1DADBqUivBW9RjfU3msfnxdSWZBiXkK4wxWRqnqpvybAtWPQ4pPbvNE6fZuN8EB2xmVEGZWmxbtaQDSPpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cWAU35JChBNKS2KPkqZgGP7q7wRF9u7fRowv647d7tinyerCgKDzfXqXY7crQRc389TbjZS4QTCefDqDKDWhnDd",
  "key1": "4XPiqTqiEdTqEPxtKPvrUPEKuvPQnKnEYHRXX3iPocy87triLpVh3NPAHQsz4pSDxtFLZwrKFbrUP3iePRgYvRhF",
  "key2": "615Msp23aLSWc7Gr91F7GtVme59Sb8P3U6kz6rzpdD9aREqKSms2APJYkbBw6R3GzBqbx5a8Q19dq9gDUS9AHCdD",
  "key3": "48eoVtax1cetDQVzvZz4UqzZM1gCBhKtLHhCCGpnAVKTpzJt7dk1Hs18bKpmFXG1DQS9DNpYHvD4Ri9uJTHHX7Jh",
  "key4": "3md4KWHM6Kv4U3yYAxaYkAA3kHCq44d9QYnngp5Qfk7EhbWqCr3dZNhK6fHgsvRcvHiaHeEvXybhEe6Sv6P7qPKi",
  "key5": "3oEBdUmpxrTo6Z49TR7gmzuVHE1M4KQd9kDSRu7tv7u1zDJjwyQ5J9ZMhuSPUzBVEivxrAwoiWgJjsJqMEqa2BQu",
  "key6": "21dELE1kM7jzX26uHWpq2sandczoDuGWXhgxBeumC96uLjF4ZUcuTZLomeraPHhRRnefv3Bh4jUzEsVaKoxYYccT",
  "key7": "2H57Ea4ocxopWgWPzyU95jS4VvUAWcGjEysQD5fRHMHuR5zyUpMjPcZP9c57Yx2QeSjsEJqntzzZbUK4bj9EDiLQ",
  "key8": "4LxUxtjdcgSmtmWLyJGVu8T6gDVSG8EkzKJ7sKGMrc7x8rcSnSMkAzpj9ReipVaXnMmzqXgHqYuxoihKeEMzfvsd",
  "key9": "4YRG93HqikJ1X82a269wQxSE4oVEU14jYtGiBbd6PCK3aCGRBhaozgBtKmDDd2FZSymwMAJUUmVyaesyX1p3p2JA",
  "key10": "4b668VViDekpaqnRuxcBTN1MZUAu4BcNUVhkqFqeuLTuUyZ4PxVPdHKhzpqg9Jjrf6vWfUPr1y8LhSLyy2nye7HK",
  "key11": "5ELHEGkNKzpJJQsXkKRChR4RKh57ZwRZmv2dttkMecC6AimfByBLq8wTcRA4Nb6ENeV7qsSC8BF5KZHoV41CY5wp",
  "key12": "2Rs77ojEqgRBa3sUGGLVtqhKVdEZj1UzLZtbXYHm2g2VL3exvurTZu5UYoDz3r9XtT95eSqL32kNTPWioCRjEgVk",
  "key13": "4eDQJ2We2Zv1PfzNdzerSXFj1AsiBKKe3zsrfrVEceNWNBaYEZfDBCBdd7Xro6M2ebRhaARcnE2hhJ9eEg3Souu",
  "key14": "4qWGhdosKPUQALu4iMnA1JrdBe6fJ4AWpqhgmvcHzwznsqD6HuXccgsbw5gh9mWeuqrPtsFsY5uDj1ACwA2dfkhQ",
  "key15": "3PxbzepbwAWTVwzRsc1JYi3Wpc7GTs5o8tTQ9gBRr85kgjFVBbsxccTyV5u7aRLdb9MbD7H5rxKwgrRqQw1e3jW3",
  "key16": "3WhGZR3ZHBGDwvGb9deFjq2uM3dDJjtoVtnV3KfVv49z3VLkdAzAgsUd4aWJjwLayDbrPc5GPBHSRbTqquGZuKw3",
  "key17": "2wKCKortjUZdS5CPgf747vEtvjDgZn2ewsXgBTRLfMdYqY7XfQWHy63HZ4YUsANGyr7GSZWZhiYSxt8g3abdgAjg",
  "key18": "JDcxeVFWDTSmmGqxSWpZttPjqEZHLdxcZWGSnZ8VYLDp1YnH4TagAZGpBii5VoQ1BCLRtYg7ubLc2yfaJ94DvKY",
  "key19": "5CUyGzrDNnkbex2D1dMYieRMNfj3E2udw8bcbnBqyoUFWzAEWk3w9c3mAKqR7gjt5saqrAtEMQR1uJMms5u2jveC",
  "key20": "4bw3WVXFLhX3YwBhqRit4dmt3taXZbCxM2cETrwbv3Y94TuNvm4BNrb1vYG3A1Z2Hb7dJWLUifVQEksThNA4g28e",
  "key21": "28mjuuJEAvGLWbTbEaT2mvirUZVqSEF9WjiSb281z7uEtJE82xK5H6E8JVoDMSsHyQDL1u79xcT83hmEcsXwPc2Q",
  "key22": "253rHqCuHJYnWP8KFVzcJQ6rPs7gGTymuLM2zAAyrvx6zcVnejPoSEJEDH3GBCGrZZgrk8PnFTb8Prkfpzf53UEA",
  "key23": "2ti5Dw5sFZW5r9uQyZYtRWBBWQ5SXrtFwAMgZwuhuytwWzsAUPU8r1zaexUepa27hiDXEMjoFaPt4BC7GSg4fpPA",
  "key24": "2hDWNUqosoff9CDNWdJv5VFxdcXpye246nHXHewLG6cDzTbGUpsu4ZHfy8Gzxb7vrzTqivECNveRvH8JCQWUW5c5",
  "key25": "593ae3Th4SqsKc6n4N85Ri29qoWzhWKpsS2K4srzdj7W1GmqF7bNENmi5bW9Bd2StLwzP78mBmA8ExDDzWhHmwCh",
  "key26": "5sXSJu9JrQD7eRAJVHfDPsjmDBgKSfcjXeETUDnJrSEzHpNcmBechiy5DWSngyijjz2rYizrpYSfemufHt26ZXSB",
  "key27": "vsLxsNbgKkTd2dmk4EVTSy2Wq73BQ6GWYsRNL4MnTJRWVHy1oWzaBoTQLZ1m34osi4D7NkFz3sbq8QVs6c2z393",
  "key28": "2LXs3LAVkCVn1pFVnbHZfH1aBUQGTV4TdZwnPhfBJPxbpJo7VDmF9EhnyD2ztisnoRyja59PfzaEsEqPR1vFsoLE",
  "key29": "5PC2KAbNZN5oMtK5Xkg6ZHamBnfTegTDWuiAWkqgF6ZUJphq8L8pZ7MNAGtuuZcCQcJ3A8EUyAjvfLtvCfUN5xUi",
  "key30": "4CXiHVDkgoBgvKzs3xsVJRSCUVZQaRDRQmMML5YCfy4Kx9cjjQc92PdiG4kKaEBV3iMFzgNphhfutmcooibMV8Kg",
  "key31": "2KEfV8XzfASawkDzWeepM1eZSAFoSckexLecgBjG3Y2KRs6JkaRD9YcaQoFq9MTEkfUPCtZsRBnckQJB9PpFDuB7",
  "key32": "33KsSosbCn38sKoTfJRBKhwJKmLg6sH8ue4WKQwtFJamm7wY54fY4inN654imMjy5KC8VwS7S6MwcEwJudmKuQjU",
  "key33": "2vrpW43m3xhGqm11eowu6TBSMYoPdmA5y9xBCrFeNRoRA6N2AhbNYHczDHFYUhtmqkgXzLpgG6KkxJoGT5x2iqQh",
  "key34": "3nEnrYXFrD1NuWTscZ72feRsRoTixbtbncsaeeSQTBajM62pAJDeLxoyAJa3jCcRFmvyGq9zt4eCUZBURdZfKKGi",
  "key35": "5sq3wLWRJS1bWR3nFanuRxQjM4zEMKBCZhagtGLKYGzQKUTnehYWzNusEhBK17bQXKLz64v9nWvvZe9yXqud5TiH",
  "key36": "4GFhj7nsVz9JcmQXRi8QvgFnpZrVWr2giVtoqx4zrF9nrRSBMeGZensCseDX8eiaamJftPRkJuNZuRuDejX5QwLX",
  "key37": "4Cj2sLivS3WYxeA9B4PZs1pSjSQh8t1rr6A3nvP689zneeVrYJ8SKijP81ozzji416ogybAkwhv4qZRrFhNKEf1v",
  "key38": "5Ej7Hk6Hpzust6FsYCWkctaYJZoyWUWGNnfBAmqoGWo1ktRibEncH1MGE5kF9FeQHN7C7H6kwDHQuSGTd7AqacYR",
  "key39": "41kNn4nfftz7oWR9ftrDwWkLye1Nk7ZB5heNwKiqRvHJrZpkLCWSN5whFkJSAxBBWbx8JonEFucCSthYLiQE8aHQ",
  "key40": "3zVyC5gUrDzPGB1HnEcz1ECfifE2H1p7VFw1zAspUdqb9mJS524PSykp4MzgwA3zogAGRF1LkxStkv1GrkR6WmVe",
  "key41": "2giCQXmbTvdZAfDGouFQ7EpEhj7wPgW7Uj6j2KaSRG6Bda6qaU68W48PsYUsajaKttibcApZUPAN7qpxZNpQ8WcQ",
  "key42": "WxSjxGdKwRyn2nNQtSx2A91fMW38oriEThhytbEZ7Bjdgt2UGxCC1Hrt1t3NgCQuc2cuX1eP5fUAeapqzcNhuJR",
  "key43": "2JixAFqVwDPzdfNX5Cw5qFRuyrui6m2ZnMAhfAmXRunkaZifFMe6f4vnWwwRT5LAqE7xnAAk95NEVKhHfUScPmnS",
  "key44": "3jVgHfBYNMryCu49jw3hGyUYAiaAqu7NPoG6xvnM4oPxAjXoArZhe1huHU5mpymb929k5DSq7oroL2hBiT2E8yQX",
  "key45": "3Cz61b52LtLp6DeeH94LhRyRJszvGLNPaKV6VJ6PV8x99Y4NNwjHeHQndMnAvE1QhDyvU9gf35393WA8ncCAsUFJ",
  "key46": "3qWNCyntoEWAMDaFW6V1vRUb5DYwa1uLayeCoby1pc6BbVZiFqXBZNfWY85xB3yHVbcw6Ae4m6FrzvMe2FH9NckL",
  "key47": "2Etn3nLqGBTkA1AXNopgHBtEnBi2nfzoyHKrVcaQBLudb7S78M6StQFXctgGHnrsDB1e332He6jzYe6nsU2CoMoL",
  "key48": "6622sxzhgFtnqtRt6SAM8jvfhqa2UJEneeFczN8Uzcit6a6Y9ZKY2k4tfdGgKZJBcCoEZV2b9ppLWw1U3vnYBia2",
  "key49": "4en1E4HiBEj9oazQX57BqwJuS1X59GvTv38cbhGK2TosKQmrLoz2X3PfC82k6r3yqm9tWPdaSoh8LN5UqdaTaJbc"
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
