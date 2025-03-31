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
    "23fEJhyuVquPKwzNPfVH56SBx58M5mi9c1hpieisSYWYmCAYXHoUqCSyvyH53QcAxLRNjcZZFpph6S2pq4YCH41T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wSkVYJQ2HM52fN6igfGe8G7hhU12X1wfoprt6R4ULGR6Cq9ZbP7r8YhaqxzegRzGxJntP7b2NJsPXGPWfdb8dMo",
  "key1": "4jPAwaDNgq1Y5Jsrx5CLN6XF1kedSAaSrANiPRM2UXmCsh13vt5d5fovtYWYyFp71WdonP7M8Eg5o15WuP8cbdFK",
  "key2": "5uapFY34dVpN65FM7di5ZyvgRdtKcAcj5PjbLjoumVJeAGMbgycLhBUdygTM7C8LDmiBjM1wPboUucAk5HE77PSh",
  "key3": "4uvm7vzLMKmRq2wzxh55ZXhqzaSkSd4jM8LkzA5LyGb9mxqYr9NYbxeM9QceFFAnnRDpHKRxfFRavc6JwmTZvc3n",
  "key4": "5TKppPieuJ2VM7S1bafo4A6SzjWT4YcrvCVVwKkBiqC6aAjnsBaJq62QTqZThumujhPWtcmfQzNhgyehv9vHY7f9",
  "key5": "4wMHPmjTd9CGB12LkET4PXefZZfEFzzjskDPE7NyTNMdyMDQBFeFb2zkYhfc9jUmyVzRrYLTkuS2MwZEr7w51wV3",
  "key6": "2Q3ajcHwP7EXtcvuCKvH9aMPqHS6KcvnRHBpqJvCoJQkt78D5mRywbUGE1NJDE4Z3KXLfpUK27JfTsFLfE5Phzd5",
  "key7": "4PVHDZ6VLH4MZzpofQ24A5W1nhXKxKknwKwgzZxeCFzAynNMWjmmxzYN2oKg9yzRVsoj8XdME2j8z2q8iSHR66ux",
  "key8": "4114Dqt8MGRtdHbtPXrvACLUrAyJetuHHL3QG6qdyFjxTjS2bzVeiAiTtCv1S5ntCDjTswqhLuZJHmw39iDd9k3f",
  "key9": "4XSMAodUTkp1NkvJjEEd2zracnvwfq5RtYSCVZFbpyd7GJduCohSysxuVnumgFaLkoNVyYac7fasUQmhph779uyr",
  "key10": "4RA36aqgLQjncf1UEcwzh7Z7bKcsYjQVzKXiTbyfFRKPXEKTmNyGuK2AKS8kzJzmcst3dvpnnQ55TD1t9wuPQzBJ",
  "key11": "4zR4Lhxu8ibM5Hbwnv6YfmkeHzL8iH8s4nAXKEBam713Bzb3rkTScwfdrqUh9MTRpSi19hsEd9REXKTGpqQM6H4g",
  "key12": "3wRwJCSyf6TuGSfHGtd7fwhWR2jzdCyjNrbo43S9uJVLyZPwNnEVyPwYiGFyVYx1kfhUF68MCgwWPtfCXNeWSvfk",
  "key13": "ca1XheTeXZxLkXuFumySraRTj9ZrJbn7GPowYSFrGPheBdbdi5myKt3eVmQAW6EWqVhxhoUUw5sGNyVuq8CEL9W",
  "key14": "2jrumuTzoRQY9qtvFWxx2yf9mAP8QxmDegceua2tpBPBCdbiPU1iTgEWevAMa7dMQoFmxjBowyDQ55gRd6GuLo9W",
  "key15": "5FAwmb5vX2NkGB4FVR2PE7cZDQcExFFzoHVeg2NcRWt1UTvMzWYZb5WKmJJ8C1VpH15sRAXU7aV7iVz1ScFDRJB5",
  "key16": "5ntyUtR9BFU42hqtvV7B8XM6Qm45n6m6oZ5S729ohXzwBcyfoQbR5a8ieteswJCRnoUktWTNzEAENonfpkK8a3Gm",
  "key17": "2eSSiqCJoLm9A7Qod4yAsTKxyYXVBsRCKnqQ8WmHD3cg5H2nXmqRwTDRVgta6LSVdh8EPfn7GJoWrgrxzQbZSfM",
  "key18": "2vgPd5WYbGgvy5igMW3Z4jnsp49EmbwbZeCRTmgSg18q6yNWPD671UWirsr6rPC9PoE9DRrGdJKTU6ahXm93kJ4B",
  "key19": "6ajcHnFsrHd4Eg4RHXLQTKq5AHQzPzbpttH1pe4bPZ9z3XiYRTT2aVZYvk4X6CEoYsJChbhSbqLAUZZN9UwuXDr",
  "key20": "5ySBTjkyL9oSymPnXmU2yVk9z3gmmTjugoy9VEUg2RZSJBtCnNLmK4QgpGEQjhrWBY1h5WjmUk3yzohuSu6TFXYS",
  "key21": "Y1B2em5LVEzRrhm2NdngrFym7R4GeYY7tgi95WDa3mBHvyPX9bfLLA8iQeTdSn5H1sknoyB7mSFtf62yLTQadmu",
  "key22": "3znNL7xNLsYFr8REBhLAZ9hywhXbMAXXLYCnRwu1vMZJZH6X5eVmwmGAZVBvnvqdpdjizhh3xP6q1w27y79UWoxb",
  "key23": "yTu86wqkduHb4LmozT1sy5GqmFSYgzRdfmJSzp5mvP2iozcnunNuTA9V7BwLw8TiGWi4QzfX8ucetEnzFhedHFn",
  "key24": "rNrF9sbNeUQJ835AAFQ62WPnrtWtEZaxQf72BsTos86iH6Ca9QzBPrz52JC7dePbigDgsTXY2SKmCoYafSfBj2y",
  "key25": "3mm93QTsEinebdsFPn7t4UHqCSoEm1TSAbLZfEGijQcvNgAsjWuwGRJJpe1fbqnjNmBdw3oadeHmj4VUZpPbvVwm",
  "key26": "4uV2bEzFYuQkDB3H3zyFvsAMfDSJ7YtRnuYF9QxBaUnzj1ALHm8aQuGY5cWzuR4nNgxiMR7PV5w1TpwsdnD1ZgVF",
  "key27": "61wNHihs2bE17GoNWGUYMWzAkjv8LHR6nSfNCtFwjvSHraXfD9ShZ4UKFibKyCcWbpnDNNHqq7Md7gwDT8VzobnU",
  "key28": "46JUQ8Go5DKjXJZwjv8kfZAsX2TUQLttDhMQZHUz5paxL1ePi36rWtTtpBFtct6cmvpUGbbLcscrCXGkJbbxX7ky",
  "key29": "5mDm8XssEyY7oYw45UgNkbdnUke4KC8myzDKdfB7RC3zPwMsVhi4wpy1AF5tw7H3BfT3rUf9FoUymcCSy7EvNJpZ",
  "key30": "4ur2NCAaWFyWMeh74po86SgcMhMY8jJcWdgcdKbaxggE6t4p7vVcxvLgpttR48yCozNSaSovJNYHWbaKepjT5y4b",
  "key31": "y7zxNeb11c3QsNMCXvtP3KKTLnfPxm5gHi9J4yidDNgCkNCHYBemxkZGD7g9NTGCGt7HUgRXNs1P36UFusAAQ1d",
  "key32": "cwNiSeb2GH4PHg2Y95VAwsuXVfbJLyCLTq4LQmJQrGqWoKwianDXMqnUd3MCvWtvqpGN4U8yppcLcqBfXbyRuDj",
  "key33": "4wP5EykDsR6WXJZPuajp4j8HfJb3xwUpWRbqnWpaRtg9GgjPswLciC2HjX6bWXBH9qY6SxCML6DDTvBAAGnP5b6k",
  "key34": "nD3SgcN2KfCnaMGSwWhTijJxBZ8ojP2YmsUE9i9eRYrnSFTCurh5xbCo3cdVDSxY6wmd8LZDisWxMEi5jBGTH5G",
  "key35": "YtWEFwTA8SGysTyVD8zqsfeVdaSKta5qgvqtpH7PAnUGknP5e3WDKrwVHRKT98rRhLhjWzANeMPWSR1irPW1afm",
  "key36": "4HeKPPHk7eQv5Go4MTc3BK9heE9Uq7mcemA3PDzPG2cdPYcPY9AYy6GacAspcb3sD5bMccRqiphEVkqhpsxFzrBM",
  "key37": "3KSif6HXitnopVc868yNE2GGX73qRPwVjq3pqP4VqvfDaVGeyfGrBjrYPXmTNmPkDSRC28RVpV5ojGL4xUt56G2t",
  "key38": "4tRejXZB3Rx9PpXjGvu7VmwdYBvoESoMZoQ5v3Gc5EMBrdBv42UUqorGCqug9PcARousVxLQGDBXgS6RVeFkBbqH"
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
