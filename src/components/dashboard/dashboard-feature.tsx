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
    "orUxmytFGagCbJHLHftX4acJyjpGo1HvddweybLfvbb27KaLePghnwGpfS19FQZDGFEGm85QCCCgnNUbAxvmAfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hC6ktu3LttUUYbfVRsEbvXcjDG1bjshgFT9UiyTeeADooiaUAhHNYutYhEmf8YQzZHsodETUzYbmXcJM9JkR6Dq",
  "key1": "XBjekL9qDvAsFnyFyMsXWMF1sMzrrcKetEh8BThZvr4coCo9mfZPCvtytCUEWeKdFRTSHzm5dndwyc5FkF8U94p",
  "key2": "3qppgsD66CjZoULeDcsGsVbbzTJbZnrDKmwWBoHzCHgQ7yyAH6iDyqByV8ppFzsFnBD6b41DpFxWkjFpdSsnnDcn",
  "key3": "XZi2UW1Aqq2YrvDeA9JaH59xKrpM9MdbCik9kF5Fj9NjrzhanAQFDj1VNT6nR5gHfD9uPJL2mv7irxykMfRRy6X",
  "key4": "5bCGiwPZAd954Cm3dAoimMgyua9yNEVzWi4CSUg7zj3AAgLvt1ZuD3oj1dGmedhnb1orMPJ6dvk1GZHdv1rtKqtb",
  "key5": "4WviaDuR5q9K1jfThMXizmouacz5njpzgf3F4itEQyuphfzgppRJL5Zy9uDBZ8dFUU3VeAovMTQbmmeYLw5r9g2F",
  "key6": "2GL36WZ2NPERVKD2G58wQGYyqGZGgg7YeHtCbUhA8A5RAirhZbNH3iNCfy3GAFE6j2Yo91cyVnV3wPNgWPgJEyw",
  "key7": "tE2VmmkVNRs8uoMFLWzeVM3mvdNiDENacgM7CyyWgwYJJEUoFmNGppF2CNHVYaPM9C2f4peZS3HJuZJ6bQ9EhD6",
  "key8": "2tftU7sT1dAjuUdKSz7t5FNVdspvbMCiqXWGUjJgxcj4o2orK4ozFsxFeS7NhiYyDAvEcywFedLc5Zwuuo2G9T8N",
  "key9": "5gLQP5rK9ba3rDKZt672FDi7NLWW8iAqrUkumBKJmJAy4dkUhVHTbH5dyfZoF32kNayqH4YLmPzRVKNiCkEHQkEb",
  "key10": "3FvRxd3enrriBki2opRaB4ekTbLzPVJRtcHTHPZc95SKHiGxC9FkCXfs5PnsUwWyLtcUUV7DQqF2efq1prTFQhPF",
  "key11": "2omVbEqPqjWdyp5HBd5ds7ZMUQnMUn5sFFWAngDvYSM7P5iLZXcqctdeT9ngk1x85xifH2d8C43JS5H6qEqHjD9T",
  "key12": "2J7t6zRuZURcf7uoSXxUKGKKbJE5FbPXJU3Y9zhpfbN7bgtw7ZFVoid3L7p2enwRo7pvKbZpC5ZuZa9mdLQkmVdC",
  "key13": "woWVZWmDMYBbNsN1jdcNX3Mbd9Q2v96VkSYmYUifpPPQH1ukTiW83vK4WKvLeL41TrBm1Kcbcu8RyRDpaDCzSUD",
  "key14": "AcojVQbYocGN8xvJjm2VniuzEeFsJKBrvcxv6BSboyPyxrrvumfc5NfJ1AQR3s5pfAKQPpj5PMURG4SjwW1Vzou",
  "key15": "3UGaKnESiRQcgBKcwzwvyhBZJQHKkCyrLyY3KKH82o4ueoMR4S9uXuFbUcQoBjYEpBDVzXTF7EAsMLyhD4FfTGA3",
  "key16": "2k5EFAF2Ln7pRgG3UKbjjbhdjmzyF1TYBuZ6vzZbeYXrWYmHsHbEfoZhymrpTwM7s5irkgXfvEBidPoJ1Pj2qxAr",
  "key17": "5gQ6t2g99NexdpHQE9SR2ukpGpBPCHeXig2AHCyuLQRtVvCpaSAfocVPwHPjDyEvTfAKkmnYYmWDiATsNJFVB1aQ",
  "key18": "5vZL658eUqhbcmYPFytJJ4w9eXSXA3K8XW9nhhWVj5fUsSmojG2cX8j6JfquowrjKSKqPFLYVPW9TLSJAWUz3qSn",
  "key19": "2vwPffV7GLQMYN6edGF6cdz5kiAiMZ7izbP8keMaFCRFCWMi8vSzXBTS2o3WNvPK8kUwk5rPLjvTP4MtUE65Ys43",
  "key20": "4GS9hkHU4BA7HyB2YbAxXMk4HNWNNvSXHX47kLQqEKPLhTFU6Vu4DVMQxQRVDxhaoJRkfiXJdFYE93rS6jvaRiE",
  "key21": "2iU27M3RGvV1GtZXhJMmE4q8kvxZWJoZ4uet8TyvRNfeL4ASa4z4e4BKaNoESG547CNBTVBoJEmLYbb9haFAhzMd",
  "key22": "4MAScbwvexU1NtwXWxCMqm8xcmdfLa8RBwvaDXS99n8VECAdrvjR51FM3PvyLm8VE4rCuQvvRjNe4BYgXTj28mPk",
  "key23": "3FemNrdzWJxn3rPq1qE8h8vNpSXtv8RxXUX36HPYFXDicxSz6jJhGcAhV1hnN4BCgZGLaiL3cV374jh4TWaSMfSp",
  "key24": "249WWR3RoJuiaBTAzFzLjni9rB9UgJ3QxCoBaNJ3Ga6gvHWy3rhQbopzGQcuRcHwYeAfCSzDtUA4qC4FbDxtU8Ur",
  "key25": "2CTpShPqbSUzmQMvTrkkFA8UGKYagoVfQ24zaQdD8S9xsvenPSqfc8eDFQXnKgLovsajmnMHQGBbyiouhGkQZNot",
  "key26": "4tb8kFc48mokqniULmgzaPAiUGY2zqcxF7KjMmBrPX3gCYukfbACuVgjmPf4FdAVBAP4UwLTraFJopG6Pzgiisva",
  "key27": "5PBfSZVuXtkM7NZFcxCTqencAcaERo2AJtH2BKEntYeLhom7ESjYjmDqkAbv4vQWLGaabxi5uCG8Hs8uLhUa9D2k",
  "key28": "2oZJYtkmFokLYDWTQijedMbCTR2D1LDTaum8azdv6X5ZfUmDqCjJE5ruFgMULfJMWo6KTvBVF4FjQvG6jmv7qHCD",
  "key29": "2f5GbQRsVmVzdSuyczL8QZpJo2GCNjfcWkb47vYu6prKAidRujt8MhcJUfxyhmJCF51MK6ZDHa5hcFJeJhzUCBpH",
  "key30": "5cHmbHw751J5e9ZCsmbsBuwfMogyvPdWjRnYCecBtNby1c7rFvai82nq1foPuZS3ikQBcK3Ho5NrUqf8dGBdZyEu",
  "key31": "4nZDxAhGwSHGkk99UgRjt7ZfP3csnkAEXat1oEsDZ3Hjs617XEiwYqV3fCB5B6EG213bkVDMgh9TEhPciKiZPvBF",
  "key32": "478oevf2tWB8sUWxn4UgZwrP1PtXA5T2t16AAup8REXedwHK2FHDt6fWRvP7fBi445jZ6Bkssg282hryxumbCLSJ",
  "key33": "4Spu8MuUTAucrqZ4eSyDA3QTuahu7u5LBg3H9f2USTuume6sRKy6sD6ctoWYg9pbkCJv9aptKXN5B9LXdzxrXxDz",
  "key34": "3VQURBw8VyUKiQSM92zNrDsDNBBmgEtqqoZbAurs2Rw8MwAKJ9sAmfjC6WkjH5GaCyB25wFA4GxNMM4cQLbgWsLd",
  "key35": "3ob7nuf8j3zGcVBTGrkLjMhdSXt4RAyCkJie28jktHysgf6mkEXsi9LQvRoRAd74PXpR8JsSWPVN8N2StbroYQb"
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
