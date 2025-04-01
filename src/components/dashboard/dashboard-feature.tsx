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
    "3e2Tj5rE7UMeDVcfA4PooDBeUuaWJuFR4Wtb3XZddCda4nxzokyGK3GozWeGAdcbRK9R3oxbpsbmGoqpcdWNYsr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54A4WwkfJA74fdrdQkE4UGhe5E6MBSL7Pb5YdLGnQTpamzi97SGonbiM48VmuTbWo2dtmwowJB47RZNjgFRjmSX3",
  "key1": "5XW5yU8UomQB6vvMbpr2hkS5EbDeb8szRdNU82M3iAQCxyfEp7NeqzN6hs1UsLYRpsNPtcmLWrBTHUF77Tn8oq3S",
  "key2": "227PdNMb9a2xNtG8dPW3yqb8seWbNY57A46yzcWHz6tszGygp2Q8YrE4C9hHtXM7KA4NEfi6sDcpWXudpSs4yoEj",
  "key3": "3oNagcyuv19gyvoRuXfvhMNBm8bK2uU9bq2kEviTW8C6W3PEiepXKVafQU1PHbWTk6DiasxTNSbahUDJcjkQS548",
  "key4": "3QkMvd1MjArQrnLPii8pk4KwUvxkaTV1rxsVRnBzUvQo3mBgqQQLQrYBaYxgCuiy676Ecn2VVSGsQqpmrMX3yP6J",
  "key5": "61DGmk2tAZMLoG2qEpPM5L7Kqk1FqErXbF1b8WLKRL5Tw1upVxSaDm59Q5zDnQR8Ps46nCcjcJufh38wfLcfPM6y",
  "key6": "5bJKHhZndpX6KfwCfzXHMBQfWFyzG5tvKE9hNqBGTMXjzmNwampd4xNGax8znQpgPkFJwPvCTw8p4aeyMMCq7gZk",
  "key7": "5WgDM7dyDbHo2Z8A4HifJhDsjGXm4TQMD4qQx7skR5xJT5UNS4ysGxBpFkNYPtgBZHBgJtNkYPw58FdKBWSryxdm",
  "key8": "5fQCadDCxXWKr64eMHkExuX95nH6JXiP9SagVf4k6YwHxd69dKv3iLQiY9FMLhBd3w6tc5uu1XqiDVqsxjxmowYd",
  "key9": "66SJnE7nsrXCHAoJsTN5wfnhBziRhNpmTF6Vtg155RUmfN8nh7tVNNE28spg64WC4VzoeuJn7LaxiQRiWLasoK4Q",
  "key10": "fhZWjwsqYwjPYikaHnxTURJWcc4F5V4A8WxjaRgRLpCzAHiLtSy7fymQTBhW5GfWje29M64p2SKsGqw2Up7PTpN",
  "key11": "4mNnFgda7FQDSyroVrvzpZSzm6zsTkQuBnbR4e8nV3o33rshRcKmDnxACgAwotKZqTfjje5KWPWj11W7VBsLS1TC",
  "key12": "52v7egTwGkGTvquMmtVpUoQ7QQ9RH1p3N5YJ5fz8AF41qLSNCRsrzQ52Jngm95bFeFnFyvo1QmYaGhzYnRsgzwZh",
  "key13": "43DFbJEK1spXEN6AMNfd4Ntdt6ugugDGWQhiypeNHjvd4d9sd9S2e31XnB2xwrro51rUf71FbP1Hv5ghCb16XBzg",
  "key14": "5i16wvkMz2EZAhPV2hkUHcpBPGMAuf5NnqzSizTUS2NVpcWEA4YiWTLyBsZYA762nJjMg3kgJ6geGAqBrembiUe4",
  "key15": "4kqKrYfBe1cRw8tMGKHhhQhYoaFaBnCn4n1H7B96UBeLMZ7SVgJXZjZNRTx6AgxYQMuwSAgZwpvqqRwQc9CbeS6Q",
  "key16": "5pXE3AgnJfupgbTT1QJvbmaQWhKfJVSMwBDC7pHVkGHCEGPAR4CiMViFH3xHXbda6ozkyfTQed9sM6yxhS4Sq1nn",
  "key17": "2LhTVzFHRrVC6Lpcu5t48TEYvcWj1YxGJ1ooPVyyNidzSoRqF9kNreCp6QLjDAHQnCpMkL5mvvp112XzwHhn5w1U",
  "key18": "5jFby9MMpid4mjmLh78VrgeYbESd9mufskqYrrECsXT1XX6FBMV8ZqELYxrCZiMPfrd2Jm2VPtnPEX2qNWJVAGrN",
  "key19": "3h1T8tc3Wr3PoCLqSm5XQ6mdfiTMUMaW2r5ooTytoQ6n5Vbm1AfRbn7qtJ87VTXQNZckvvNDCixB3rSD1mFHKmmd",
  "key20": "24B2ti4epTrjj4UHSPv3HgNL93MFD5vaPe2VyY45NjkazBEfVA3ubbQjzp5j62j8rMhj84nhDd9hBvDxhFYdQCPk",
  "key21": "4GnrahjthyL7vqmW5PLcZ4rNc2UFQ3VcPLgsqQ8eAAeavwNHzZ6hJ4v5CHRPJofxHhtFo4XKKs7ff2reQt6DoJNw",
  "key22": "2o9KgAWbYLoT5eH5TyDQr4TCDBHSeP1khMqz6ca26YQJE5ibJjctYi5biwTcbNi38UAHMChGSFVmebpeXgZyfm47",
  "key23": "4EaxWWconGURWTX1paKS3KRFEtCpXAYXLwoXg34R6mW4HhRgYVtG7hJ5RWqgsdbaY4NkS1WUPXPUt4DMKoDBWCSG",
  "key24": "2NtvVavDsc3UMAjvJQmaxQAy4PeVXd77cx1aZvgDXkpwXB3nFpbhqzn13BUUu1srp8V14YsvXfBG4rTNsLfJ2JA9",
  "key25": "45Fxnvd1QLLTez8MWY95EpUHTm3XHvUWNQf2WYzkPsJ4BnoFTY7y96DpnKzhJgrawGribz2pG6C8EAaQkUrdSmX5",
  "key26": "4ws6Ka2qyCbY56KmcKzP1ouSDY372ikkyhSsvPbYWfQKe6JNu1MM6TyWt6TyvHRfCA2niVJUMXkrMMj8DQn5ZuVS",
  "key27": "5pC4z7Moyc2gjkmSVmes6612RWcdKDF4BHEJptNfjEyebjKwZBA7e5XuJSz7tkqYxNtpaf94q8nczbDGAeEvnw2U",
  "key28": "E23WF2dqq9Pe27Q4iPb7q14nrYB3B3iNvMBm99pcB95gY8VED7JSjDSvjXXjtDR9Q87qPWL7JcC124wrwjaUTAg",
  "key29": "idsnTRcwgRS1JrpZXZUnhMu3ECvu7jXK54YL9KBBLpU9bzCTPpHJ1zf976fuf7jKbvnS1bgEC764wZJbtmMo11z",
  "key30": "2mM1HG5A9JPAZsMEygNgP3m8BUycBZiUZ4ELthdrMxset4WMEYydjNodCgVsSGgv9e1EBPsHFLu1GLfiPMRJVKrV",
  "key31": "31R41VPS7o4u6UXjYFep9tSCDoLa5Vs3Lcp3BgqSFPWtesiZmyADwbVeGDxSFuLFNTo6c3ju8ddp2n4kWLZsYhgC",
  "key32": "34EtbQzGJdycan3aNrAEWqDq2h6eLQ1MQwNzY3E6MVbkHLmor9Daz2nyv7J5ZVVZoLRprxX63K8GXrEJA3EdCYEb",
  "key33": "5rG7nEZZUq573Tzmg3pW4AVtSqtR1piJCxAKZTSPqbkDEim8SAtZRc9QaGY6kWvYxYtndv7ZnsWcgN4ii7apZu59",
  "key34": "2qJ11zZnqapDdJ25UTDiQRrRM26CAMTH2sKogEfjfLQF77uZ4adg4Bdm38MGScZFqRyNheYroXwjWp5Me68Rj7x8",
  "key35": "vu8ywqYv5GwKG2xq8CKvdcqwUdh94p3YC2m3thyyYfSjbHMt15nUdXgcoMzs6RGqkeEDvG2PnJkt7f929e7oC5B",
  "key36": "2v1Ww3wRaEYaqWqDFo4oVYwn8yDAYkzaS5z5B4MyzBmyUUcBBArR61nfs6PXnZFxAaSHuhJba2EVBnk1ZGU4mzqF",
  "key37": "2CnM4yTJULjmeEqfuFS2wM1JECfqm2v6YP2b7igePDgGR1QfAFGzgban12sXHS5KtuqzM8kfFGQSdwmQ9WHsVGpk",
  "key38": "2NNUo7sBq3WLHEina5FNo5sTeXJsZCuTje9taBEfqno1mH7CPTAzPdMQbhonNZCqP5ewSufw2hpoyvmpUJW3QU6G",
  "key39": "24qjia8iPnzJGDgh3pfaYAZcRaQij8QhoWDsPs4TRD8kX8eTX5exARUqAsVjbRFPJMt6V9JgD1jp2tYtGWGFjkoB",
  "key40": "456cB8ZsFkdztVMM6nTaogs34nXynCjZm4s4RtyaHAtKTyPVjeacB4REAAx1tffQZUA6smuLRqzVTTbLvn9MBk2S",
  "key41": "3XeQdWj7LDigeGMvJdFbwthNkDPsCuqdPSxV7FZWWamdttFRHS1MCpNviBBSnNjzWSrfGgj7C4n4GZtDkuvv3wQd",
  "key42": "4gQpg1CqsYb39gKWMgHrQdJMHPcXyfHTBRgaWrXz99JCD375jjiygqLqtT819mKWAXqB6GXfog1rz8oERF6GR9Ef",
  "key43": "gwSi3tvU3qQArZ2jy5sgPuwnE4tdWg5jv1TKVu2BEodp5jpG5LmEHSQwfu36Jf7jDS7W2xS1vNGJM4cUkwux4Eg",
  "key44": "c8947eSkiC1WBHg1yKwBPub1keSPQt3iPqZC3SrqH9H9igSiCFwLnnKye9njrfjqDdojX8jLEpvsB7j2qgK1Ad7",
  "key45": "55QeFXzdALW8Akcod1WEoPa4So1U7aX4NuM5PxGmRPpqm7Hr5Zc59TLSMZEUNMd3DkyH2rxk4EuWR26wTAKHbaxW"
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
