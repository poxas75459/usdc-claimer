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
    "2nMkWUFe7N1JEgJ8jduGT5cWz37zwNUb7RQTveLXW7LPCCeC641TBePN9TuAabtcBHGBir3PPsURgCA4JX2tQp7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XDvrEWiS1MuyXfQaYgqc1SD2spAXZprkoMdukAgbAotUjp8RYDjgCLumdLkBxDDbhXhwzLrCziEcjJ7FGJGhyin",
  "key1": "3xU5JG6xknyYAJcjEuWtk6k9HGHhLhFXQmY73ZvsPXkUHGDymW5vLpdjm77qJcBHYSoEihZpSKxL8tyxaiHF8G7V",
  "key2": "5PNv2TtzkZsE5qgf3iDyvfyK9uVqiHyZSSrcjJqBn7ZP8LNd6uvQRh4dzN5z4dbjoQZF48rRJ1SrVNTXYpMD2Cbn",
  "key3": "4tUXtU5HnwaDZHjYrF1XLetLQHaaWvDMUM2H9NvC2zuaRtUvYi7AVnEUTsZrVuTFrxD126JJ6m6nkr3bodahaDj8",
  "key4": "3wbbBMDdwc8sJM29dJ1rthEEsbwQTt4K7f9k4uKw2vw2ht35r5ToU2ubHNuvBEqm1tTsMaXNkiyHXLNwPSq1MfBo",
  "key5": "5dKcxF2vnCLHcKDhGhmj8Kakc7yBKZGJPTrFJ8msMDcgzepQo6KTchbCEcHYTaRfBpfEShZxZs1W3eEU24un9zuL",
  "key6": "34MQz9sPWDEGSwUv8rnWUpNUcRvjNp8MUHTa4nYVgnfb2QyJ12xZNpdX5yrXN9AJJzJQ4LVziuXynCDeeZMGCWgb",
  "key7": "3sRCNftCBx3HgUbuqNKusd79bKjXreftgtpwe8YtKxrS2BXwvmaxePcqjBhp2PfGVYiaVyCwD1CDLTF8j8EbMDRh",
  "key8": "b2pVr9D7dYBGd1kTuA416v7i2rsyEknNjuG6rmQoDhaLb9cWb8TJ6nvsdABd9hYcBnNCqNumEoJbh1dv7b6BYVU",
  "key9": "BsVvyCkQ69yWbjBq2ZhZeRizLTB3bEpbxUMNEftRPtuMfq74RWGtwWn9xL1K3bHUfZ5vY7RBT5kx85Ei9KS31jG",
  "key10": "ocaP6NjDmWYW1Xm6MsfQyjB45JWDEKXQrBv7VsMsf7nzLHq1iqZLj2oQNiiLGkrArc6sYk24VXhv8VTuuM668UC",
  "key11": "5W2nWnAB9xBucJ8PFtWeteHN7ceAMMVcBwXjW9Gh7FXYoHeojvm9E8xtRrUVfNowVDX7qJwTUcLkvDGv9dHw2XnP",
  "key12": "2vbrTkQxzmPuWJU16XBo7RZzadvs9XRgD9bsEE6tnYyQvEJc9JPoiQaa4toa2EvptLvRuvtQb1joJT8VAMbatftP",
  "key13": "621KoxZqKePDbuQ3R9bmtZK1oT15DediQdwB6Pr88PcWXbdeKyEYwiKK1CrpyWRBYPe9q1wnpDJxPErhzoNZb5SZ",
  "key14": "stV8ywkniPU5vx12NS3VJq5mbRuwVEsVzsS2nboTi2YmLdoKAXKzFdC2qdxbiKfbrU7ikrpkWAWue9AdEEaUBbr",
  "key15": "4MM4pV4fY47vEA42z2ZsUgS6WtZvQvboC27FAPxib5d9T1sPxH67pD5aEZZV41VHRpTbU1mjdBxSWBdFkZgxPNh6",
  "key16": "2i1RmTpGQ6Sy7PFFjXPiykxAdM42jsVx3gnyv4uh9SN75oMjWkEDgryPxqSUrbZnKFBepnhS2MyuEq7sKTHUNawC",
  "key17": "5Mf5R3qyTP4EkA4w7QTK9TipNhTbiy3Y4xuBgGUEkFhxnrkDcKj9TgsKJCetps5Q3WmcW3BiuJgDJ5UkAPDiceeW",
  "key18": "thbJPd6T5vbJ66PJsCj3vbZR6xVFq8wSkUWynZn1P1zoVyaPtL62Wpw4kbb5TX49bs8LD1zVTBtg6gwVb263cyk",
  "key19": "3mtqFjr9g51TvRDz3Ea8qoxQi54vGnGMm5Mykv3Ks3nQ6ozgSkifB4UpQEK1c2xeBpQkYWJsFojKXbVG56BYNzW5",
  "key20": "4ZKaWPwSoTpJdGZM3WnbZkPzVri6DE7V6wGRozuMVXswFiZPdnxbBkQ751yL7DzbmGuqMbnpsywCdhThqJSTZ9Qt",
  "key21": "fSydZ28gxbJH8F9A2SpEteJ67e8mPYjnV5WcHTBATVkMrtdUbc9jqXF442caVvjf1AQ2mvFXuYxtTXx6VoZLNyX",
  "key22": "5uTCVqUvGzFiVeq1BgucM3V22uEetXd5TrQQ8HsfRCdRWQDALgqDgLpwnSrGc8qcRfQMjEACS7LLCxmXoba2YJtv",
  "key23": "2T9yH4xGNKBdPPJajem9Hc7BqUs6atFxHLwqxXpane19viuQHzxn5e5LE8q8CCTDhX4smLxhieeX9b6ioT9LHFcD",
  "key24": "2ukV26L6XZKWQVAAEY3SwyjiyhwHwowXekjbktKGVacArKHXk99pRyxC7JUucaXexoKRzmpUU7WuXMyuEyd9DXK2",
  "key25": "4rX3PXF7BiX7qn7Erd8VjMcaYJzV1G8MNg3v5tcyB4kAaRKK5PQkmmndtPBwi6oHVNU4Wjo9TjXdmhrGo55yngVF",
  "key26": "3uHgnDrjiE7Qexrp55zfvLCNeNfKkmfVGJrwnvG9qdwUvCw56AjdXQpfajy5Wr31ZkAJqufoyx2Dg5MxucstbpCv",
  "key27": "4Viqy9fLAeomdcd8YSrDBDWUBGHCXVpoDSru8qUzKPtvxnf7iH189eCj3L7qJjUM5AuqBs7ahQYJkvbS1Rkiiie3",
  "key28": "4eKCECiSMapHVvMi39E4fWeLJ88Tsqqk9sdaY2rGcQH4Kr5LhCPKgZoxNY69D7ENNZXdYpbXNR4PEYTvWLcYAJrd",
  "key29": "61dgHCmyuYDaW5oS3ygyAZnSTmEYNSqSZyw8q3UFVz7DeXhJF8mU4EF8zAXaYVdZKy8mwLPj5iBPfBb4keYjkg8a",
  "key30": "5QghNasdhfUrYBnpdJYwfqTXN5uZ9VbAcjiViEPpmzSKBnPzzF3WGy6cobiAbXuTXdHzjB2GBh6rMLZyifq5Dcm1",
  "key31": "3FuSSCzoRf3VMExjPQEwagu7GykBMu4SWxB2JxmGy8LzujpkLfRsa8395h4V9EyiAzyYUKMgDPNR1U39UqKGXfb5",
  "key32": "zpd2vaBTsfmE7MQrxTbGwtrUtvVZeYWJJyEF5jm8LP2RxZi3u2NnEFKxcG6BEr5mwoGvBY4hxtbL3ej3LUo1vuc",
  "key33": "5eWq1XSjPtCihBh8P1raojgBm8GheBS8wmWQFvytFMgEkEzgqRi9C8WHddGwn1t8rWwRLt3MUu2tuMWfLVVEBwPy",
  "key34": "3RFV8ZFaQz6zfoSGFcgcqu6hqjCT1oW8wy6fPGE9R94qsy2LEnNGrXkndYm4WiA7rYikmLbBUMYNV67AbDavSjv5",
  "key35": "2Rj2dXEZS2Z3q2JnDZVsj8yw8KfqNp4pLVyzntoXLsBMeADS3iu4M7PG5Ya5yLLY1WStEYCNZYmu8redXapLW3W3",
  "key36": "7vx6DyC45pEwT98Lbon1MumokrrFNfXmg8hkEKW8u2cuTZthH28yWd7LAq9x8HZHGHbU2dbVarWpznANZqsxHXo",
  "key37": "VDRiF3GiYGtBbCfzKnkMeYRaRrEzbkkg3nBLcTT6nWbY4yqm1hV1Yt3gydyWnTH1BL4MnjHSfvgLgbiZawc4FWP",
  "key38": "qfxXFrXVLzHZiRRmkPRLw44w21rDBPi9CXqXug5e4FyZutoEKCrZnQCx8kDTz4NqobuBKbTSJedHDzwzJEJeMgC",
  "key39": "eGRXBxdvU9keg3ocfWrEQ6G8UfZRwbtoFL3D3zkjHFJxnAuTZZzsWcS1Jjbvsua3aekjZqEVRp479aEcabL3rJF",
  "key40": "SrkZhZAHg2k5c6JHYjVpNDZPsdaLTXUcPX1vsbGtSmm55KDpMXLDjjBYyuoL29abtz7iuwEMu8vDM1Hr9izrRBM",
  "key41": "2LcPd6czysYqK6UyrY9Qu5DiXPhaG45BXYdrkFWm3JVVXgGfF7S7scBiqATimSRhFhNymgwWvQbhTja7ogoE48uo",
  "key42": "SGf4z9VdZxWU1udtJnfRrGCDUBapi5QtauX4k9JKAyGDYwts13GgfRvcEtUb2yFDFBkXXGfuLXBR38syhV7nEFA",
  "key43": "mZsk1kNejYSY34u22WkR4wYipa7qsTeZqJnntsmZAhk9zhhh3ou1jQWuPPy89NbUcjgye5r3XMCKeRqNQN58pXz",
  "key44": "66FEuabvgWV9T5oavrXXyKmcJ2WySKT42wwcvkWgroAuMe4g5phnGYudMmjMxvE7QSAN38BXygJfpiiQaWzkY9rD",
  "key45": "5yAhTnyMGgJLey9S5X1WmTqQCDFkLn27sYyeNfASF2U6jkMyNjJkZhay1CegnwTnG18DzqchMy7sxFiaMU3f8end"
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
