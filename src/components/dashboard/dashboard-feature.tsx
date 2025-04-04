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
    "qsyAx4RcYZxLaMBdbhm7MBCGpWyLemBx5WfZk7WURe6ZxjGc9PMCHCDf8FUPw2dRnXdoGRjBHdD78ofd4y8ZvSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qAP79AnPoUZ7NC5ZcUbtxbk41RAZF4kMGGDFxZeKxMkyTpy52UiLC5tWTzcMydVcmNhLTuLNn92uxcwd3pFFc6q",
  "key1": "4fMdgVUXrSEM5a59to2S5SDxpn2YVVD9UioTvu3CbvTvdUxjGqtk5WsCooJdRr138tsuHWoyBrMwpjmeDQve2wSQ",
  "key2": "exQonEwaopRcyoYGpYjFP1BXhpk1yngEK6eE1oSpjjVaCrPRsMZo6RuYzivuxcXQbMXjw1sW7NmLBkD1sD6wFKE",
  "key3": "5i6xMXvRJxmK7jMhBiRAs1MXQk4Hn7683i8MBJir33V3LUNJvK672sPp37yRVY5MHxEryAbycPaH1SFv4hLPCWiM",
  "key4": "5EhwF2dwbUFs2AaDUVGkgrCccQaaLfnj2LWEbLPRGYN7TSEpXs1QsPTM3BgBKadNWRaxVM3woZ5ZqudWQanVA1Ai",
  "key5": "2ZYjcqdwwsnX3dKkDBsJUN9YowUitPiF2iVAWErAi3NJdvKP7ovBBzzcHhquvwUoQDfV9JDt7iD8VKCjNynbB6qy",
  "key6": "3wXRt22CPfTbKwLiMNCn5QdPQQvF5LbbRpxXHso2WFLys3wpQncbAvMXRJCYTWDxPAtaQWwr6RtEfMJ8j6YhXWnb",
  "key7": "51n7w2C6FHNzhfQEmdzW7fHCuTTsGAvLFxYwvCdyzBLjSdKucYS2A9MgFTGsfkFx97HRzCaTTpdjS6DWhFgwXsbh",
  "key8": "4jCqLgqAGicqTt2hmGZ2FyFqvATkFmueKv57CNFXosX1BDgLy2UnDwMwLodpCBYfSZ5DmVBkHnCqLBHiiFHa35iG",
  "key9": "4CwXJW7eMrZfKF9EPFAfffr5GTQ6JjHpivYwiHtq3P92TaAniryDduVriPxhvLqSm9y21u4LHAU2bvhbQSjfzVPU",
  "key10": "24tomVRvZscg3JzQwo1DBzZnVfHyh2Y3ZAeP7wh3TMfUWEoF6dRNGDTE8s1XQh3G2tujSeBpJZjL3vttXTcpg4Z5",
  "key11": "4pGmWXvycEm4KnqAg1YnifTSpV9Mu5kVQ6Nm6TRGBrnEtNRjfGVqogDFmdUvrcAuEwA1sidtF4pVNGtyjvzHjhmN",
  "key12": "5sgfddy6s8DL2fHEqioz7cJEFzCDa3WuhdCpTRevRcAebp35i1XfPJf6CSY6X4WFWTJGAyefse7VGCSGPn6SQawk",
  "key13": "4pDK5GRJ6MRu8qbf1rweFMFMm4XFZusi7b8ewrZRw8VqdULpfo3ea8tkzwdVio59kSyENhn15B2gk2tKcem2asG1",
  "key14": "67hDDZ2eLcsjW7kxonzHTDbBv1q8e2Hz1BYCcwogPpFLqQh8UgxYSgzdEgcWeGPQmZgfhruKBAUKoRBAGPxpYyV8",
  "key15": "3xNoYe8vtLaQgsuA4NKmrfZVSt8Wpq9KS2s73KoW265a5Pgim7QhMDFqxszoHDWDZ3ZS1azHUhGeveQKeZwZxag3",
  "key16": "8dKTsRL5d7y7rwMU2TFqMNPfQS9Frwez8yoQ3Qzw6FPnx5C7YHgmYiEX7tW8kSjQy6UjkDRCRe1jJ81CJzp8Qha",
  "key17": "3gj9uw8AvZ2sCKz8jHDDmpTaUXBm9WPLaqMwtkX8CBuq4Jqg1Qd5iB5BLp78ZwQ8NoVcoug2nFGNAgmt9zxbBxK5",
  "key18": "5pk7KPhha5aGsbsZL8pbBs1cddBGKwsdVDULL2GmxuxwCJ7nGVaL8wfXEkZLTHKkmpmfJD1Tq5BwrmjVXpLTe1fY",
  "key19": "qVoV8MiPgbcSHmVjcYM2Waj1441kaLygxTrmaPvunSVcZQykTfuxjP6wNkhRmk1KAHrz52g6dJHDnfSinUFRtNT",
  "key20": "NqRMTKJa6yBDstMigQYXSnyGc6AFM1kAETUFyzokA8SJ2oheYMk8UgAXPBFoe68a1gVCA3yLSpdRQwFfGb2nnGa",
  "key21": "qMTaSEokn1zvbsqT1jzMma7TTSBDFhLbXPdswn62XHbqkhWVyFDUjApBzQWAMAeW6YkUc3u6sshBH9J6i9WRzs9",
  "key22": "2Lx67izGSEknw8ymefYWJz6eBKTbs6z15mJyY8JzV5cyGnFauckn23yYLNj48yXtd8vnYj9Z3qwkwY3nZhAf84mQ",
  "key23": "MpzGoZTQLAMkoBKdWn2Rw8UW6tvCEXTjFnx6uj4QbEveDw8dS77g5DUkEUJMqwB3GLYPi3oW9uAFBD1opvK7cAA",
  "key24": "226hc4niSdGREXCt3N8wetstBpBVwysQY52WDyPHNrKZhjqNLsy6h1bgnc2Gwqsvg9Kbkt4qZv2CAFR95JJjZVBR",
  "key25": "5r3HuTkQLTwsqjzkju84xEDqD76ttyL131bRf7y6sFxy6nWebrghbNSdf2h18hVJdUazScmJWycV5NFHrBWVixEW",
  "key26": "22haQYz7aAyqrzy68bQjfDAvX37tuPG4iERvB2JFVXFEhTr8YxzEtUboRq2yc6MkqHfH3NTyzCBvTCq2ypyK7x27",
  "key27": "59K1rtw8o8bS46HgfD9W315jB4tBka1WqhixVkPiQQKfnkpHXVmoK9Sxmx3nA8YuVnqSkfFJvhTd6zpBktqW3DnU",
  "key28": "4RYt3yGGvWhwxiNTFoTJu4iadSvAnnXMgEpqEgFRR9FcVuGbn2dC5xTdat9HsqNGjAkq9rdE377bd85tbTZx8hE3",
  "key29": "2UMsrXLTTsru97C2BBg2mjtg9Nvzyq5GDMpHanYv21EwzBJ5iUNeaTiMB7dRTHgoSwsj29Ca6QGXqunbBCRJ6yoZ",
  "key30": "2aNxScfzPdyDve79X6gxNsib3eCyfHYWrzntnMApdHtxcf8c1w1HKL8xF4XEPBNEtVijKm6nqQMJCATAcktzQ7BU",
  "key31": "3gRe55TAPzM9dqjV9ywcCy4dUbatWg3AzHQJuWiStQVZ2i1LNhmmnDPQGERddvMSPSepiXCma66oLPhPJqEgLjQ",
  "key32": "5mQatQwvNsSHpkh35VSA19UfpeMt6eQ6PuJBcJ3fT1wbKexmLpasWSw2fJbaGbZ4gXZdziPTfQo57Xau1tDBsBwM",
  "key33": "4YD7HnmvExmiLXNW89Tvr1Xh3FL3zEKCaq38ppETLVP2AvwMTqfR68vfApuw4N7MDS3pQvPHuciNsNKCWUAR1KFj",
  "key34": "4C9DUwDWPaHYxZRU6nkk4dhdau8DJz2CfABTQwo44UydwfAyTYpkZ4XTZRsmSZBW61MAV66Azq13sgeZHMSTPpri",
  "key35": "2UktCJVMSv8ffFNwZXubhxEGwyzNMZGTsC1Cahted4zUA7Z35AQXDrSb8tmXh7RxfMPBos5j4AMdRDKsAq35JcHy",
  "key36": "5oqP3PLDq3i4WxSGeuMP7qc1py98oVVA9fdkREr56JtK7svindujkTr8dMt8pbkez7ujGkFcxEuxjdFQheCCnrhN",
  "key37": "2bbuLrPqC42wrXxdwaZ5265u2eGxdaX76MtzadbZESqRzNhHYXbRranAkxMjR86fjpegPepk6KQPLeC9AQinRYYt",
  "key38": "5PDm9DsB3CNjEMueijxY5ee4rCFPHhD83UmgqALiWHuDfifE8N6FguuJs29vminFNDbnZvZPJFBp3U5ccEkYc1nH",
  "key39": "3XPeoEsXHQWYCpX9CibiQL8kTZf1XZfvr39xo6tgnz3Y9y6fJ4KzLP3b67SKdcZ9ggPRfHzx2taw6igdHBFkDJ9i",
  "key40": "1ZQnftDGRorJJjpodCgn89diBRDiJHs7S6eNwnthdxpYJtD4AZwuph7HYyF6HFm8ZAjvybqdoHySRGrfPxae2Yj",
  "key41": "5seejbYb8X9Xn64fqT449vrzRHYuYtZEX7RsVfwu1GP8M3u2HxhELqgNiBQp1B2uTTNAywyhgXDneftawgfirzpP",
  "key42": "5jhXKtpsL4JntjjcVeVjQToLCYznPeJ4xoLtMU5uFHmai5zcwnWaB9HyrkAKw7XoUT2bxZaMJYKj1cuTcKkFo78w",
  "key43": "3ue66pDYDKkzYoYUKa7g5G99UzAD1cLmskzkbGijBVXM8Rg7mdUeaxYFPmoryHgLvN6pRLbTYnkdRfHxY8QM3VbG",
  "key44": "DCfcxEiNvyXdcx2HEmNA89ZTgx8ZBcgyPMhherTE3RZssSxSb3o2bfEja3aPZ54f7oEr6kB6mYhRftQVeYvnyzs",
  "key45": "28QivQhMzafevbeyTyz5LHXTzd4xRHAZQ7NZ9b32GPpxFos4CrrVjZakSDJHbne9QaAVZa57W5HbU3PHc3YSZp9w",
  "key46": "2kXePnCSdTBAh2FT5x4hNm3cTYgEsQoBeMT2r2eStVc6cDxAFkpB4Yd6bLYmAxLvVhjuWKc1P8Zxch2TJDAXkdbW",
  "key47": "2gngwNbt6b9FoYCxdkxdQzhVxvgKEwWJ268XiAhGfBEgFpVsKBW5sAfgY9GeTgaj4LDewGoPxg87g942dRBo9cXj",
  "key48": "5gCePhRZDK2AEch9rNXBkWR9CHZSa9rxkeLa3tYJnSwWkQPWboyqarFNMLy2ySpEWFo1qFEiBWhUchArkQsHoH5e",
  "key49": "4vEpd7UajoWaXjfbLT7EQ1nqVJDU7kjMBjfam3kiMvTkW7fwNqH2vK2NGbdg6n8MQDErFiepuaDAbUSAEUqt5akU"
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
