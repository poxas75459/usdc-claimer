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
    "4rCLCnatjpnt7wy1mYioHYDUFVtuVBmzksHKe72fPmDdAYH2PsincoEc2EWFkBNjCiBDZByvkvMpfCz8ViuQFn9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xGPcg7qWE2ihiME6w44bqR1xTpALERE33rsZ47BT2ANFCNgiZybCpRceoY4egkBYDgUvES8ybG8sV9Xjq1dD2CJ",
  "key1": "4TsmFDD3EGfCuWtKaUTmJC5KTYRRiBFPCxeBdSRU415wBSPkYFX6KKDgV5uU1PaEbdkr9wkWedVkVkEC3QbV2q2Z",
  "key2": "7F6TNAMD17t3334v7sJyo8EXNPSUVLCyprj5Bjs7wEKr4ubPH4JQfXyBKwf4JdWNHTyNki5nGBvndu4KHevs8aB",
  "key3": "du98uoyRXu89VUVz1QnHoqazwEhZZNjhv7bw4sJ9i1asjKReWds7cVKpN65ba9MjFqbaxsC5X9KstNSo5GtJftS",
  "key4": "4UfwGFeVDuWhUGH48Jv5ZvfC2UwVX4qDi59xQNpriGC9SSmvtR89y67yXvUTpJznzzyFptTQjd4AfwpHCieqeGTt",
  "key5": "zDmRwkNujBfRbnoPTfNU8H1Vw2FnRL2kYN6gFek7YkRUzQocn21dQ8yRf79pRd1RYX1sj24Pj4hEjXNMkBNyTHW",
  "key6": "5TNnPgcL2kvf6MptnM4DCcarG8Mm2kVte6SbiuemMs3P4VcDnGauygzCkqcuwU5S1jxXmNzFCoZA9a6pgBRrrq7h",
  "key7": "34HZYVv7BKHGgjpRTz6k5942NGB4m4NkKm7CZobaMcD9bTaza613qhWq5J9ojHr2Mm6CrZh7ZLDp9C8dvvTgUrBZ",
  "key8": "j2UnSN49exAcXVWPoqCkJ5TuEppK3S6PP6unxdyvNshy1zLxvFenjavMazY161UdKDGjSsa1zHUH8ZbYJFhi9X4",
  "key9": "2uQygZavUbzD2sur4waKhDm8AYbfAcqWkuVY6zWpgydX4fXqfzhKnwbBniV77LTZ9Xp8kh2oSN4Qq6m7P9qkKCqu",
  "key10": "4p7vbWD3UvXEQVM1CyXmK24fDZ9Z5CVsLeUjJEHJP8VP6mv4gqriWfQEjtdQTRzwajkwAUH6KqPhWiDEhaNx3KjN",
  "key11": "bKhSkyBW5fn1swwDzjkpEKrnK2HThhy1682JbeXmAHrWQ9eJqb9sD9oM1ibmoiZ46Q8mygrUrm8DMZ4qnuZ2dgC",
  "key12": "4kXcp8cVX85jJVTRxSPc9J3o4evUeJmviAk7DNcAcZkWUNye8L1Ui7EjpwHswvKTuZN55QjSHSY325gMfZuaYP3x",
  "key13": "2hs9Z5n4DxZo1Nr7qJYCRJ4mAYTWqaQBgR2hDJvkkwy3xYqGNNNzM2BVNFNqc4ABHsceUhDxGAd51g6LtvJ1ctZY",
  "key14": "5RhYrqtLXXDnbKJw1HfDvHLXR9dH5v5YB6LiUa8SLycKtDSAM5m2x17UUiM4CSb4JRv66AduyKawHW3EBMFGuT1r",
  "key15": "391KWLzxdwWS3q992QvUUyN5sgbNSiik8BEHMvVnnKfNxb4uPArJCv3N8eARUWXEqmMy679iJWCEK42FjQuytNtk",
  "key16": "3KusScGjktqGeg3cnCZ1XfMET7TS9WPrk48rbMxGZQGWBPiEnAbryrjLQKW2hNhRZTUf5jPXd8C8GzWrfgpPpmSV",
  "key17": "4EHT1VP4akTdHd3bhMFuSwQftBYPw2JfQqgFC79TJyShrihgtPJ7PbcZ1XyxsindaMjk2KuFXgft1e3hCTR7XR7N",
  "key18": "2NMWHPdSAHfiw6L2GYNCufXGYFgLbxHTAbE15As5R4u5teXANEgaEujp82unsjFL1dm4cHa82YDSG3qtnNuGEQSE",
  "key19": "3mszQhFHw2gxJQQHPkUfw6mV4WxsC9ZQimFqfxEBdDG3enJvZwpnJEhFMo2HRqgK7mJ9QGHUNnt8D6nXMwFGvMNC",
  "key20": "5X2s7AdhcYqH2sND9Q7gVwjzemhnCghhpKz7BoEegnKPihA2EAeR795utE3WnE7vi1XAZi7nLSrq74f1oroq2kBR",
  "key21": "5xS2L1otM9oQhk1TDvK4R2g3wPiNPdEdHNDVkP3PeXGMocZaNT5NoN9S5qEnGCdiTmbSiAJyjm5bA69paAB9ZdEW",
  "key22": "X8BXcEB6asEnBxfH1injNa6EEe61H1FFEbZLsgG14FnsxCzJPii4a18kX3emBv18qbZfiVNDXnLWPMzpPwzGQ9o",
  "key23": "5pSqfu1RMLPAsNsWsbGKohpYJZVs31grSdviwiyxN3jVbjMycZokn3F4R9Qd8kk3mwimhRa2uZsW3EssAsEWJwMZ",
  "key24": "5UHtPinCbeDgoatJQuKJTfxR8g3pKHepGs8q6D2pGwymziq8KeuM1p369SZkeMys3VvwtfGDcWqcmNLYjPE2iVuK",
  "key25": "4SFXbJTwMoD4HJWBEcxYcuF4iPQbGqMDVBrSKFwUeEohTCH5EjGDvt71BUdjapYjPARWCsyAzWeYfGNdypq5aQ97",
  "key26": "5a95QQVaH2wacdR7rJd54ZNhGsWSDmMKj6wiiiVn4CWa6BKXhs6tusftfMDJBakd13vc5dJgmv7ZQfFUicCCysEB",
  "key27": "5apjcPe8xrNow8LsyENYv1f6ML6A6uzu1RRMteVn5XCZTiKt2RsyFMC9WxihLw5cnr2cZ3PfREpf9inDMokpDMF6",
  "key28": "5q4FWEToScVdCfRR3rjRbNMJmCcwY2xtzij2fyMUdy9ywXV5FwXf8EEZKJ62PiqMDWziw2dkx7iMuEGUZvdzd4HQ",
  "key29": "2fbtHPLRvjDmK1GXnjwT9CMbvL7ZRj6g1onQAUdvCkQUaXMK4jAmD38DzkF8RVGnyYuLoeJgBWobRpdWqRZwxAcr",
  "key30": "36x7y4TNgDbALGJaGwQ3hYbK3rSYqaL3ofQgGoWrYxMUbCTZCK46cjNKazCCdWEXw3Kio9gSaXx1JsPrYjwc98xG",
  "key31": "27ScKUVACn2PuPRXLDhjhV5jpjHejKPnmtfUNPmKx2HvYpapSLvnNAG7LwiSTTMKBuje71tfPJMTtPv1Di1rb6QU",
  "key32": "2hD29atRayBcbvpTqMgYjKDMS4T3CQUEDTfVUZAuWfWXYemrgBzwwe8G3bvFVEMD1LGEG3Q5wUNm6uirpyFEdrdz",
  "key33": "2idrp8tRJfvPuoJKnPFb1quss14m3BxVvpwAHzJPhyHTKc85TvFcoUyPrCRZHPUmuVSfRRyKpwTbsYZE9XHRnCDf",
  "key34": "5ueefzcj7HHADfQ5ecppr1FbXxdLiXCZkGCkdYojBqK73pPAVckyyBnyRPnW6YQqxpd2DvnNWr7DaCWds5X7tLq9",
  "key35": "2Kp2eTCWrnayPgN8wgbVj4J3FjaeEtWiYdjAMk1Qfj1TT9JjAcaNm6rU78LmJcmFVSHjckj42Jy6nZ1HZTBA25ar",
  "key36": "XrbBRn2wWkkEL1eUsnt56EyBzzTuKuBugK5GLgjc2rcZwycMfCEZLsM41nHSwbyBH6P8TuqYw7g3X95wEbeocrL",
  "key37": "4kSDcC2n4sLJkJYnV7JBDvpKuaReNVRZu6dHP7ET2LfLRkUPkeuRzs127obcFZ3DhYHphNu7qbboshkUUgJj2G29",
  "key38": "3wwi5EHWdJ2zLePt5Hu7Kx66b2WdhJJeKxaURHkumK8JkcJStPU3gQnfnJ2kp5Bo5umpjJCpeg4YwjfQQvY454me",
  "key39": "4DAsPsGoyE7KBWB5RFofFqv62Tz1BBsTqkJfSftNTGenwQdXcVV32nbnPfRLZ9DwCTm5ZCVYjPpR7GVhmfmvKsvg",
  "key40": "45ycRx6vH52Q1whmSYmKAdbBekF1TRixJpX5H5Yi6NuGkDEGTygzfZSKqVCxwsZjyY3f6vXdcSUco9gozE6zPgpy",
  "key41": "4HDZbkPDYwzjgdHWksuHGniF68TUgDhRiKPo8hcriu4g8qqeB3vnXjkxaekMyuS9xE6GLioMcs9Lnhad22xvGzDJ",
  "key42": "3JUsNgEHqpQXmNDczGibnqpFsWeCzuRNxV8nVGE6sjpmFsj7zdoxevjNLfeELcFQvdwptohTfqb8rCQtc7x8C8Vt",
  "key43": "2csa9UnEYeZpHq7eJqbK6ajiAYiwDZ2v9ACMkUr8YhcYd6WofgQ7hQzsJ5mWB7XQ8kFiCmw9ZcLftZHgozm453fG"
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
