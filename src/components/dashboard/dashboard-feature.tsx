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
    "2BqNe4BCYPeEAm9Zqi95QhuTi4rn7GrEVs1SFka5nDkvskf7Rm1HXQcoG33YCDzY6zqMkhhaUjHYNNw1XMeXw8GH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aLsdXCQy39GDq9qhwM1zNufYjFq8RyxQfGGzj3xVwYY66FogKLSWSowhALP3sDLvgqRudCckosjcLEX2dkfA5a9",
  "key1": "32tdZS4Guka34JMjLZJDFDe6GT1m1MYWB3okE9qsAvjSJJF3AmQwsjoj6QRaUMoTvmSZCnEcHchQEJJWcY4VAuv2",
  "key2": "28wca1qvjXqpo1ZWuyJ3uwvd2RMMatdVB6KBT9thTKk6Pdxt8z9nai536cu6ryR7eDL4odAb6NeeMSAcnME2FnZa",
  "key3": "4K7wokVJD513rbEhWrSR1NqDc2qPTTqwZjiyxEqrJAorRiNqMYi2bcRtmSGoSsbDyPpBnQbAn1gFHGM9yy9tow4H",
  "key4": "5emaMqGW3cbVpPDkERsmUGVKgUXmCPButa6e2WzpoQBtGdHnmSybHJgukVDMqT1iAT3Et7R28oxPSsBTVLsFavBQ",
  "key5": "2SY4TzjmpVfguGBD85BcW4BkPgNc6VD5Rquzwy9zLAseV4a9b8dYPUrPzxaXXFn54DhHFDBPrqTrHobLDaK12xvo",
  "key6": "2iZeCQ13NLWHLfxKdGnRADWUCbycw1omMc4XNfMQMUvt1TYUyrJ43Cv4kv4LxLk3H9Hu6rYaCNgDDjr64zw2RuGx",
  "key7": "5a3oPbrKgoXivwmCNzk5mZEUck7jMaUEo4KgUdKWWjX98aWJLHMj5KWsKdu7GcqqhyuFKgdtVsShSmwhErSV6aCL",
  "key8": "TxGaSDvzD8s73eUKsC19GyqRUQybzzbvY841TnxiVuPt9JHzPKKNPyRS9dukpoMyhh4NJfPDofDFvL25zrqnvPj",
  "key9": "22NqsWKjgjxyAnFhdhKG2JCEDNnGUBrjnkrQgbGw9Bmfs4vFwoxQX6L8GRmFrnTSxhpgqFiuVLJoazKoVMRXmyWt",
  "key10": "4WMAHgpRTSDtYVQ8wNJeREWEPj3HjorL1QuCyDses9g5ScwkrAW6BaTaXm2TCgL3i1d3nWSUqudTDRkW8SSnwDuf",
  "key11": "3GTCxc43bBjqLEmnLwHYzYaELoq7MbuBbxQWSBvtJ1g6TQ1dVk4XWGNzBMVUvATmu6djoHnj6HuDMM8WhegJUMJx",
  "key12": "5Bttr46tf1uZq216epWdsFDzmgPGtmjSBdgzVxb8KFrwv9VtU9zEYXtoWxqscffAZSR2sZHt4o9Z5gvxfYTTMYcZ",
  "key13": "5XyphzkYVErjZeHP2JUrUwV8DQgWMEjNttVbUyhS4ssbHbUbyNGeZeaR8UzzzxYVwDGXXU9BvzL77H2EHFmVdaEV",
  "key14": "5HvVmogck97XJjhZvi7YGiKrL7reUV8A6AQx36vvkTrFUfmwm3d5uPZJURYDJ7wrKBevg3NNhKjzi5YPicJrmJKK",
  "key15": "3L9aLb53evQ1tCVLbAve49kNSTM9CV6MCV1Pjzbo6fr3bP4oZVHQsqSE4EUag7pXXuuhgmggY8CpBuAs1F2WHR6W",
  "key16": "3SbT5cs6Jft36Z8WeC9LnaWVLTWFWB7g3NoPakgTkJP8qaVKxYi17yH155j214sTKCWmi9Se37S2GnX9NLHa35At",
  "key17": "527w98oDt6nD3qG1X1WqBJKSvBmaR2T6cnVwmmzMSKWyNcmHotg8uizkCHYyoU3MDFHkMcN7XXpnU4uPQrUiRPea",
  "key18": "5aY2kmcU4YmWiETwVKxKd9RSh5pK8tV2Ho7zRCSfoWJDqHQfnCKSf8ZiuFtLGarS14WVE6RVFZeyE9aVP34UKXaM",
  "key19": "2GTAn3Q3Lgsjabw5Mi3GBehvacaFf3avPD1pRrurzgBon6rbaKyUQY7QXT4QonxxarjQRMnrWGunZeMtuRVPRV88",
  "key20": "5GSPD5mHPmnhioQbqjGDjGcStGHRYEvhgP5Vt6VW4aXiQPSzvvR5SPT6AjUxiGqP7DJGUBfPwHowVzPJQBLqWpEU",
  "key21": "5F7QgUDJUa6PZnXWMzdaxBN1hc4rCBuEU2jAcFjmU3w7nFxreUS3nf8hfcrjLdFGudrXryZ7zi4avyh9otrAdpnX",
  "key22": "5zTGQuP8y2h9zeQ48st7qipmMu5e2XQZw6PxLHZKfZLFFwLsYdurqQMu9NXFXkNL685G6bPanUemYNLev7vgmTAf",
  "key23": "2oCTr4Qbt76EG6WwP16afCnMPHC8tmWdjvWFuvi4SkMfdZr1FboADv6C45X5SW5KazJhmnWphDBybDmY78sdC1Bc",
  "key24": "65tQgnv9KWBZ52fbnQhV36xcmto7HLNwyxwTEYnNxKDpE7NuGwvredrqGMmqeQDVy6CBEKN1NoDhqv3xLvWQCgGF",
  "key25": "41iQvs35Je6q2p35s6kTUD88RBbR3aohYyvbbafoZSAuH21PGre6VrcQyJq2LaUPA1HabzPSXRaS9zhsnC8PFNpf",
  "key26": "319PpD1qZnruwnovjmnxQBSEU9HjE8iJeQU69b2w5qnhK5JGKZLD2NYTzrDgvob4ytCifs6GyzX9LiprMwCQwvGc",
  "key27": "3qP5pbDrxbLvPSqVxy4advrJQ4L4jS6CxiQYQfFEgv9bhJGmyYjheuDBbfkowyedn4PHFXLE1W5WQpadEVeytWW3",
  "key28": "KahaDX6cQWxPZxkvg5V9Co8mdpGVyrX5WixHnB7pttVVR1oay2S4Nuoua8ftPNdafdSh5HwRat2uNUB41XUDnQn",
  "key29": "Zh1EL11RV3y8pAeGpxuGWv1HfZ5j82v8vf7wqddQY2BieZhzGN6Y5MfjBKrFwoN3Wf2xVnZDk5zHpoiTFMr75QS",
  "key30": "3jifAMUswtSbNHytU6TFVgEvXm72J3yrSYDMKZedm2WnS5wjUZR2fUoA5xeQQmM3TiCb1jCkT4fRF5Vi8TCArFMM",
  "key31": "4e5UVCyKQ5PECXNf1UYcPC3Hv7GisRApPZ6jJVQcJHSb9CqCoGpC7BAxe9TJPErRfmFYZbCVuMx7LuPN4KwYYLfi",
  "key32": "2htfPoNcUmkRi2hvVS8h3JFyS6Yv1WhSVgmjZtsfsPtyU3CLTv7yRjc3UtrENLZ5Vgt3Wu7whRydxjm2Z8YTQ3pm",
  "key33": "3rBaHFhXqHT9mznZYVy5AQwDA98c8h9PTu55HQSyy2irCg2VnoYo8U4ay3i7p3YxYuH3kwLgeatHrjfvMPb1RxkH",
  "key34": "12bDmhnC5RoKpxamVWeZ6BFoeXCo8xP8qrKNrqvLBVVg5R7NqXbzLxDVgTBge1ou4585Pg24nnUQabWd13CG8hL",
  "key35": "4UwvavUNciAAZfPFDVwJdJqSEHUYu8FXzdEwZMfB3c9sFKxRW2AeQiLLheHpcNcPNq5uBRe3VnzUmETQwjzKWHsz",
  "key36": "a7e8q661q64HGytp3pzcDFbAgdPM8bEhhJQkU31ZXQtcnuTjCvYMAjzovK2E3HJ2SfVuQxqjGM9XB8n5S3XDNYj",
  "key37": "2qJfyPcgCnAdGiLgWRaZyBLd4bEd6Pb7ZuAfqMccmHrCZWWzjPGhWSFX1S9LXXsrFDjwGFccYvezpYUvLYMtSdF6",
  "key38": "5AKsuHuRWJ2bsreCPaxVmxpx8CnTZanDm7pAhNkdGt57Lcq45j5ii6UVY2rsqDWcaiBBHsLeNoXczjpvfddRQzqf",
  "key39": "3w6sq66Z2xppBURhWahc4Ea6a3E9SuQfdHf1pJjxJY5T9LjG1QKB8z73npsyTgBMxjUNQ9SUXRgfowyY7v9kuNGu",
  "key40": "2PyFN8Bkfspex3PukDaGpmTfsErjq3DqvFs2QE5eonktb5oGX63eAmJCEU3oMDf1MoZAcaRxJoi63EwBkrbu3ZD6",
  "key41": "uWwtUZjKcqd6gir9ju6X6k9pMQGUoA2onksFFe7pDkZPMFRCk7WGHB1Y8DyHf76Xw68DFuW2C83ZunQUn7YPuFU",
  "key42": "33KVyKDEZ52hLeUZJNGyzYufoao6gcaxwf1JKU1XT9spoit6obdh5afRUAK3BzrsJ4b6PhUohdUhmXUBZuGXcGmp",
  "key43": "5r1N8m7kSbPbncMDSKZn2Sq2W5CiCR43fpdnUoeoZVTw37B78fFyVNhxgEgLZrd58eDjNYgN826ztXokGdY4gdf8",
  "key44": "5kC7zqCZwo31HvFYptfLMwhTw79d6JQFAFCQJzwamVkfRneh2t422rUQbQAt1Uwid4otCNRU1hu41A23qMoCZjfQ",
  "key45": "2TyswAotmjBqipULhY7kGuTHMXgev24B98ERwpmo18k4UiAqFpeB8NEHzKjZBbtRV7479DsnbrpAM28xY6nzQ9aP",
  "key46": "5cmtpnJhkxWcqQGSUMtckqES1t8AqtDrt733vTC3j92RqjHtefwUok78Nz1uRxcxs6s6g2WfsXDeVUva1SmjyZ1U",
  "key47": "38fTrdv7xM5ayzYrvCEX62Ca415gHnzgzLf59i86KErQUeG4mDpJckTvW3pcMFWQkcu4fmxvMTA5xXnawMZD9oj4"
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
