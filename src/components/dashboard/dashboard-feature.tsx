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
    "3BCMp5yuVBHWg3r6sD34rXwaLFnyTvzdjYKk2fS9NnUQhYEWuBVhtYEZ6G2SvMjBaSizqsdDiupRVUSwiHa58Prq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27TJKLVBfzVW37KoQ56uBq9KN9BwLK5Y3A7f6RsoJRG8Q4tNicPB5oB9gme4TrKW1PwCGJsQ82EqAgvdErRPEpjp",
  "key1": "4PeExEXcN3YJ4A4G1qNAqzwVp7Mo6zU8CfPos1Tx7phcDETfG2xnDgDC78J7GSvkf6uz8y4MhKim3FG9x6ChqmAX",
  "key2": "5n47GfGd6AD1j8Ww9WRTg7EUPbXv4UFB15o9cD2iphEKWsRfaeRL1Up7Zp6XSmWL4EoWnCsK3VSzgtNGip6krx3u",
  "key3": "A6HQCW6t2i53qmvmCiuo1h6HqpV3WqyfTLL9LxoSF8wuwFSNg1LMesV6GTA9dG9ZtnGDV4LR3MuRG8GZPQVtPoV",
  "key4": "63KQrXGXfVsZCVK8QMc19LkQY7wAHqDPoP1Z6KPHXGwowjEC4FMcSbKNUNLEKL1UUVYwTgyKSXS719W9hhLXWoVx",
  "key5": "jhYBFZqcHRM5fcD9aC1QGnsThpSCzGEVaVvAbMvevkdvjMgRSDG9Jjm7PmgHYzKyyaGUwNkWjXrQuEadrzj7Eem",
  "key6": "526iJE4i2MGwgFPtemFse17xAeH6rBzzhhWmzNtRjuXpfGdZcfwL1CxMfSxfhYForaehwUHJFa91ENVEr3fFEaHj",
  "key7": "3V89jQjRR7GM28BrZB51j3ivJPw96HmgEhz9NknRyjjkeP1KxayGtcCiNe8UfCpkKYHcZ15w4GStcFeiJ7iJrprF",
  "key8": "wkNAneFcDEqAKK28o8QdCY4BFbbQKekp8oyS3WDVEDXP5srucz6LHmixaSriwg7bANCeYeAZ2yoRjKzBRFTTBWQ",
  "key9": "2PEmfwBp3SoomZiFBUzHBR7Sino7rZV9Dowr4ZvQxbBYhM6E6JjFpvhGRwk9Bs6ot7dCeBRvRPSZz3WbHrvDBjHN",
  "key10": "1sDaqKBtdrF9iqBTLkn7jhZ634uEiep3tqyjRmBxVptXKonTz7DjWu3DpeRss4ymAutfJkHDSwT49dsDamxt63c",
  "key11": "3crN3SaahtyXMLwfHDS4DcTzUjsr7PN789xEio9xPKWQARfAh8J6dt2TJtYFyUuW8jmYt6JAdJykbhQohoBrgLYW",
  "key12": "5Sz3bACYykKPau8ywzbpwhBFxHugGYRuwNSu6d7BeyeHSciz7DipJpekYygxr6FsTQw91CXTfC63JcH1ddxg4CYf",
  "key13": "2y7ASbfNHKXcSJdbPniyz7CNx9rv4ovwx5YXJ5t6bU7bcW6MivPpKK8CiU8LXLvj7E2zSZhrP5VzevrG7fdcPQnk",
  "key14": "4w2grHXuGp14Z3bRotFA5GU1z3BD2MZUnFwPJXnzh5szHpq7mjjQXpfNFkTkPzhNkBdTR6rmVeURBMYoamNMXL6Q",
  "key15": "2UYG5vgvvWNpsrqu9QNgAxYm65yCb2QbRxgunFBmNkcWZ5BwoPfHy1ueAxtdMRpwrpQbAFHjDeq2XaSKUDBW5mVH",
  "key16": "4HjPVioP3Hp64bT5zfcbbP5n9aRzPxMDpiZzYAAWB3o7ygo9xsM1k4qZqH5dib7Ytj3LAL6hs6tgBqPrjBrXUqDn",
  "key17": "9JDEb8bxUTfrRBkFt1zjg8fFpX9WksynMo96mrkLeQJegKTgU35UDVkLBTBZY8kdicVDS791ZXMWUVwwJufmRbN",
  "key18": "2XaeWe4X5zpjkfG8D6Yb3Vu5PULi7oDSCkE37oaeRJTAapb77aEcrxUQ4Gmrkb3DDev6wDNgRudHoFdiobgDjsd4",
  "key19": "rH7zvP3hPH1oXqBpxT8HFcnbSr2aBpUZ6NhKXpTz6KGeuTXfSBzGQSgBv22LvDsqSm18Uwc6SgE83AsbVWzgWkx",
  "key20": "2UN5b5jsGEWfX7aTXm6fPcQnKfaqYbPywaPmC923zzmhSwZDkimquWFmoDGxMyJjvXGu72Pw4vQmAetp3RhETscj",
  "key21": "3ywnpnbnyjpojbuKGvraRpKpLAYKrwMPvYdLTV1bmZHccnpp1Vr1Jirrs1dVur19nUGn7gPbZLK6qEKw5xY1wqQf",
  "key22": "yEscGWjxkrLmnM5MkFztXujSEs9nGesMRf3241myUss3CH4RW4CFNtsrvcWWDeaMZKyRxQxS8j7EE6jMNT3jgb5",
  "key23": "4w3kXKYHy9A54vUmymfJiUoxJ7ZtvxdKxjKVLeHYzNEpsUEosxxcqAF9jx7oL4N9HqJX9MnQosZT3wwJ15pidqMx",
  "key24": "4oYHc5RTAKFqZTJTcFhgaVBLY7YVTr6nVz4KtcRjV44y4WvRMJqNHQ9AobdLD7c1oMkPQXPsxamoeFCvHt1UNRyy",
  "key25": "2QfanJdGtxTsyj1FpYBsYbjj5RPmoGrxDGWPHVWU4kaBYxa8t7E3EbTQMpiFA66WGhRJb8eqEWV3WBF1ATGVXYAg",
  "key26": "kXcQnVQhVwrByWBupZ8Qfc9T3zVUFy1vXqsYkePcmmnbafTncZLbNZf5uuzQSmsvHeQD3TyEdbAxs1e9o4u9C4D",
  "key27": "4gEReoQACjd4UxP3tWKvCC6LKFjXrJwFtVZRP2TPoJzimjC6daDgz34HqRYgbPrDPxpQ9gUd2VZ9ZVHEGEDETFi2",
  "key28": "fbpZf6kow41yEmo5px8DnfC4HAySjPQQ5JbxfR6gDk6pP1VGNuUQTDLD4bpm2CB33JWHArTPq9fdRePUagZ8sQ8",
  "key29": "3esGFPVmC86mV3zcZTBVfLBm27FNdnHU3Nx9pKbZFSd27zXPGvCJb8YUeF8STMpqqkKRFMP25vXQ2MJvYm2H95f2",
  "key30": "61CoNpXc36BVkHWE4VZWyaNSD2gTYyqUZ1NMyHzueyHoDr2ofocrmrtVPn2uc8NZ73836HU7rZxoKH36S97RWnyQ",
  "key31": "2mE6pn46cysz4WRi6yUMZeZGpiGKeDu2jYFCZxdst2eoDKqRtjNgakpSYpdqaYv7PrhrtysDfJjfdsb2UCLinf79",
  "key32": "4w9a2Zg1dU8knB7fZFh3aRzVMM1n687ZgMbAKDybT7QmZGXMgWBm5TtfDNB5iQd36La8JoizHTwkonBp9NfUE8gY",
  "key33": "6Q2yZZcAwtScVHsqHjeuv9z7Fi43xdFbNa6aMVvvGDkvL9JEHMFVeCxuAneNp1Z3JhqUyCtuzAQDPEas1J1wXDX",
  "key34": "5T7ADAmz2rdsMBSegtEMZVQJaV5Ewr5Bn8NZ7Se92enX6ADPxuR9AnQDGWepuEsaAE3XWP5qrbM8VyWGcda35qkT",
  "key35": "46zTk7Up1q82LHa1qBEZfkgb5PqaKXkJM6kxUCt7oVcqQnQycs7cpoECYb5UEvefy2wtTKHN9PyXaP2CC6EZGTa9",
  "key36": "5E9XAji94uCTuHZ7R2EY6xGUhYuR4hHUxzK77o2WFHfTt3orWYCSXAprqD9d9PhZYqYYoVpqDZEQ5X47am1iHigf",
  "key37": "3s8Mva4KoXhdr1e6hUqEyDHjsmTsuTV1R7UCUZ7ZS3pe3ArR39r5a8697tetj8twygXiFQz9zfURqJJkF3THz1Ht",
  "key38": "3SqJjjWj57KF8Km357ELrBDktomtjWvDxarKucSjHvKKUgAe2mXiFLkXu6PiiL9vd6XksybwwLxXYNqSA4A7Gzm3"
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
