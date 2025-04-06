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
    "4jr3hboA43jRDpvy7qpPr642EK8CZxRUTis2sjSYZ4qMqxG2WoHcMyX2MSKwjCxmWkSqXEaFF4pNLuBcTxQBkGAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KYDm6iLh6hNHberaf5PTMiHAdqNp4GEYiqXdiDxLDE7FhGHjyRYFg9pCmU5t9Z7xzS5DwyptVV5jN2sEquHUySY",
  "key1": "3aQPetMcagC9cJrk5LTGPQ1t2WeU9otWAJV8tKrwkrZSrPhwacXyUTuyq4EggppDw6i7PsMCJ8RcWQgLLQuJqUgP",
  "key2": "2srJkcBC6NR5oeLWTXaGqQXBH5HwWH1Vg7HuhA6fgoeh2g212vqRyUcmoezma3NjniyqJBhqxxv2iXkrQF6nQXub",
  "key3": "57tdCjmWqr8sL5ZTZvoPkpMLu3f8jMboRtUmqK5xg2MvszWPQRvnJFtAsdssGKqZjeanoEX7UVYy7vws9Smw8pzT",
  "key4": "4QebdGhV3k2oSUYrMSGinamg3WUqpwkXo8LnTDU4acWvVUkEibMm7ZUYaeJ34WdXvEErYUVpEaT2LUmjrmBa2DLz",
  "key5": "2fewfCeiPvMfSL5FHxSCAgqXbUUWmZzGnqi74CALcVHVwTdhPHjPJuGoZZrnMd2guAvsg54tcAqqaCYuHvoEDfk",
  "key6": "3nKkjHE19Rk5765itRVfC7qH7NtKzjSHNZoNzKE6wTkXcPkY5usA3e39YEqXXMRLMXFdchfzzziDv2DMLH2WCrZq",
  "key7": "Q6FY2krx5P8nXxipsvYVVEuGkPHZdWCghhVogeoESR9FEXF2zTryKuYBdjwqoZgbDhMAL4fyzha6UMhJgnFyUks",
  "key8": "5iFcPVWFBKQ8pBhS6JG797CKZNuRXVetrnb61vWtAkNQSDFKXPnhevrJbn66zmaV5t6CHct8fDgxx5FxKjTYU54w",
  "key9": "55c9zkuWToJJ2fDHS4uY8vAK2JJQV8ps3TUyH9HcE7SSjXicVq1pAXtGVHMTbMm6uo9ci7io4HtocGeLsDNhyriY",
  "key10": "47sMGSKVVTEFqYvJayDKA2eyLqDPoJxe6M9NbXNi7qPzsFZ1WJ425fqLwwhAaFEYUyvyr4SxntkKQ1CwzSBJLQSX",
  "key11": "5aabGvEQi2LHnkeUahtS4Rat8NWHTHwrqZsDbCw3NX7suC52nsja2HHaK92WAuU1T3jVA3toE5TsWzooCziHgvw6",
  "key12": "29ciPQdGxzvqhRfHHKeCdQqwQJz5m6sDNQ1NbJVJwpLnwD6HARHsedhY6SYPGNKYxGcJs2kYybEF1dcA84W66T7R",
  "key13": "iRSwcxBb9Ed6NweNpivde3w9nqmbLWb3axHhZpP7fUmJogq227scHH6bBGy9f4NzA8QPv7qKmxS9G4ZVvXKki5G",
  "key14": "2TJLWE39wUH2nH4nCRHivyGKd8uTdZVSc8miKfn6wrRKMbLm4M1XF58d7vUXimcwph4x3JgV1KyTiNCv7Q7RYcYu",
  "key15": "4sMvVysVSnnQz6zhBcBFXLFAM756e2t1qo87SsRfAinbahgWoRR783ezfyF2p5DxDCWqT9WZsRc5TEJoaGaggnTD",
  "key16": "3iMFYddnMbsrMKPBRG2RcTJsgmGorgAv2zXbP9xmo6xYxUsm89udiFZAD9YrfEEpjDouLz43qa562w6RMJfq3aPu",
  "key17": "4CwzBSt7xh6wQFGEeg86uEtdcVzwv65hAGEXKFXM5aqyFWCyzRKnuQFmQUU8XYiV5iv2rzJSWf1v6Xm3xaKjtcQP",
  "key18": "2f6yUT9zGJifSkt6Rk6JvJLhzC27uXqhbtu9zbMU6ymBGbxfC8V4QSiHMw2DVVGFpvrkrzx93nUntNiMFQbgenme",
  "key19": "64CvDgVRKv811XMdyJo32F4EBaDzNH794Gxndg5GRuvf3VTCdcTffFuDuMDx4Egbvkh9KZBY5VLgw68zmxjMAqUY",
  "key20": "65CSpWC6TQpLshcZWQBEwTSSEfJUk6HJnmxECZmxhtTTgBf3jHXuXnc9eB2gfTervkrvqvRhotZbNvbiki4cfBdT",
  "key21": "2dgToKarMsGu2zZ8vKPe6n2PGw4sXGF7tDb8Xshfg9ncnKsoaxJmWrfWk6jEMDkQ8wbcnDsnMV8JkteRbhbaAmwU",
  "key22": "3DCgHifnAbiS8HrvMqLNTAam6G29ATfBEY6kotaEsMSLfJmsM9DyTLeYkJgo2KLC3AnNp956Af44LNYT3nTSu28p",
  "key23": "23DJh98RuWHvaEjvFqSZ9nawCsvEqXJ7T3MhuybCsickFPpVocF9YdormM6J3tUhmvgBbGwqsWaCJitZZb2fbNvj",
  "key24": "9u6igsUvd6tb1QitojsRqf6UzfSxK5F8ezqZCteSiMS7A5h1KGDkBD57R3PCGwzgSfwHBknyogZxou9PLEoAYUy",
  "key25": "4rkCB5NYzr3CqndSfZryE96DMx6RWEoMN8DxiSbHU3Q3CyUWwv1H6qiRQWe7cMawv8CetGbULXVZYGGx2AbYu777",
  "key26": "2kp9Qb4xVVyBV68Lh98dm46N4yN9NYQFumgSwp8CqpbTcL9mXJhmXKNqMjVsM3hQs1f7c3nGg8378pMexTbY2MWa",
  "key27": "4vxcUCgoxPkb45oUah7YbdTPJS3xA7u1Z8Ea7dkAWsBpWLpprMBaBRapuFXZGpW9tdA1qQo3HC6xucfDYcLrQaNs",
  "key28": "9hnhVELN2xqGnw6fQfMGeq1aeMfXNYrFAaXBv7m4osRgxvfDwyTe4pxQQ8SdW7DXMLNST97FC6epiPErbfLZnnG",
  "key29": "4Hb1U7hWG4E65ebxx96fy4cGQtJQJdfbuZ5xXhjtXxUtcHYzukVPf2fHev82KD3sfiGwebLHn6X81Uquvp1tdqJQ",
  "key30": "QuZMPGKFk1koKTJQ4PGtTqVtxpWgDgpNropxJZPG5fDYusroZDSdkLRkR6bq7NzRipQXcZHHGePZWphJ8BA2rnx",
  "key31": "5KBe7H2SNN183tiwL87K3qGgyQD6Lq3dDgYbfgSWCQppYHPuacSYdjScpMaUtekzi6pRHDTdvyMoz2DyWEWxPBvh",
  "key32": "5mQyaQub9mziKuxCZDwiPHf7B2vyVNaEDjBYUB4N4xcDEWG23dSuZdPdfrY71ijaCm1VruM8GPuEwNzQtZXmzDw9",
  "key33": "53EAYqUsFZaKXWHckzsGUeTrEBvT1K9GcFgPPCAc8FFGzG92Qn9tsf9hRHaKZ3FLSyzkRGpXsXr7FpNir3rnFJsS",
  "key34": "4bZoX1gV11uNh965SXLsxNUWS2bf2RcaeZPGAt1Uyio88QwoVyQtAKzLWq94n8vvMDQEqAcTCX2gaAVVvGuDpFBX"
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
