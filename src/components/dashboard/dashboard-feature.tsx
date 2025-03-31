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
    "25VDACpekeFsepjwpP99WGLUnq7s3DgrNsTU28oeffME6N4vNEeQxXdPsjUfpT9Yex8BbxzWjiYoVQ2wm2mcwwB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oiAoV93dnxBRzBXXehtemWGR57J4C9q4nScox3ppRbWVrFncsRFX3uqAXJPwPhN2rS1GsHjQXNrbJfaLsHWn71g",
  "key1": "2qtAqhQHss2BkP8fUVC8MzShMeCL4vUkBFpDdWiBCae3EhXfJqfh7XKt6audNDu8ysK75fR9v16w8KuxFRfP1Mj4",
  "key2": "TnAWXqhLUaYx2JZQVr2qVHhk9uYMDEJozukUCYZLFFz2hGDb4XRffXQMAuxbKsYxMpK6UBUThbkxJMXDUrcJUC7",
  "key3": "4CxDptZ781m5B3afVdgCdNu1ofHua5vaTRoyfyPUYNuhNLCicKjPWhdT56iow8ahTg5WHZ64USkpcFxTcXkRUXxW",
  "key4": "353mDhN3VRUztYP6TpiHJWDmL6X5qJVrmEHzHiCT5w3Kg4DCpeVwgHXSZc6BP2nmQxvExFye2GtHJ7oU5NnfGfro",
  "key5": "5m4PWdou6wPxq7N2AY3Brnzvcjk6yiWhwvEzVs5bLUVzqxC1sGDgq19i2UD5f2WYZd2USqnTavC5cxLwuYDZd1xH",
  "key6": "2rch4TrC2YNLRZhVPvctbQ3AbBjvsYPb2VDbDsoJxV1aLdFNJPAFNzoQWDbxbGJCGZaVgXk1LwTYtryh2KMvyhC",
  "key7": "o39m91xVYmgF3pCHkhggFB2s7SQoz7VhG9YRuQke22JACMB2bnBZnUCbMMPiy8NjP9rdsRxGHArwa9SUaJ3waJm",
  "key8": "66swBqdRofKJ2ApbqUCVp4YwfRJRQDLZXpQsg4eEHGsWu1g1zHXpGFd7cngFz6GzVsrav1aiz8Swz26LPNt9V76x",
  "key9": "4FtfJgexMTMG3Dk6Uo8Tw4u38bXDjErGVMqzzDkdCSxN2De3exxmFKpjGPPYXE2BGmMfzWXRSj75y69YQFV9mBe1",
  "key10": "4SwZqEGNG7xRjhQtfJM2tw6m4UcfnRDR5Y8zdWhByp5AMjsF9fwtPEEzsnA7JKSziyfB9VDaZDGs9KRZPUSQ7to1",
  "key11": "4aMgPXP7pYtJV1BvTh5Qro2RHgMRsPruLPcwe4qwGb47Vp9pJhBPVKe3ern1d92WeQvhMSbL7ypWMJ2DLqyEXYx",
  "key12": "54cfEL6uqLcMCMu7ayQMvVo7FbagB6rK42trpVev2MkrMXVTUEZyoQWhLEz1b1PHcM1WQSBkScUSZbbQ8rXJeQSm",
  "key13": "4T1P8aHdWxHPDWgGQKX3Aq5vqoJ2NvB8iDTcAJPGmnNgdd77ikeJCcHAAwjaehEEJd8A7Gh3mmJ6xEnGA7d5rYWQ",
  "key14": "4rXkc89Fx8xB35LRXNFNPbhBMH1wjAWnZVN61DyLaghbrdtvQJ9vVadaghtq3i1nxcqXZ23U2XTF9kW4nnwakRN8",
  "key15": "4qUrMYuVsVLSy8J495QFWU4mtSkujwczCt1k6HsLd2URXA2S54mCRQFFZXp16uGWX45DmKkKNDZAuoz22UD6XMTM",
  "key16": "5AmWdgpjUx4R57apNv7vT5bH6BSDoQmtDZsdZXo7C6DVioSXjiUWDaqX4GheoeBJWE77efddbdNNwYeMHP5dj7Aw",
  "key17": "4jhg3Hx3orX4xdgPWZxUbnFG1jhDV8JdbCFeKzvAjTFRtYcqooEff8bZ31na1k5mmSaYMtwmpa9NgPt4JDNp8HW7",
  "key18": "2cjY4YbeuMe3L62NNnJwVCswbZ4rHRto76SvfMAmHtJSeND4cF1fSVbNbY4BtUWes7WMfKSuAdJm4qdcJwQbJzxv",
  "key19": "4oDCbNouDoN8qyyQfmJ6sfZAWDKwDv8TLukDr1anHamskV4MNsG5L5mjJwRcWzRq1f1XDMeZXHb1eAfqG7dE2zrW",
  "key20": "44PEV6oKpCaeR6WqjTMkx8x6fhGxiUBevceTNQvTSXFM4SzZq2dkFbjG8RrWzEUD3NihDrXHcG8Nv3u7XKqG3Ejp",
  "key21": "4FV6HGBsPxQXruqHoBiNN9eeU3DZcaSbuaTAeead7UMpuBRXw4xL9WVhZBFkiJkbBzN8JC1x3FHSNmvPe6SEZVFK",
  "key22": "33TfTbxAWb2L21A2Pa575hnCpgmWiZpAqJUKTMvBfUEq6KF5fpKdEsHhivAhn59p7yYQz2etFudti2oT2Xy7HPEv",
  "key23": "43rN54tdw8KxvHxvtTqDqKrRzApPSrEkwPhA9QCkkffgb4JKW1DtbyvBfXXoogFd6mgm5CH3w1mzmK3xEqYayzEE",
  "key24": "3HnBX4kBrZxzfX2XKfXQtysHt2jYwbewNmyq39ySjEG85PtRxPr5pzv9gckTaMU69CcLPAf6Y1YYk4cNcLEACfNM",
  "key25": "3Die9LENo6JvF2DYH1jfH8MmiTT2fiYQMg4rzwVzAzPM9743wLvVnF9XsJVH6DERE5w37od49eFh8EQhTFgWYRiT",
  "key26": "2YkVLsVcpc8VcrErrJJjPucpfLKoKdqUWLX9XdHmWBBJ44eU9vQvUjuxqaHeZLwe1XQHioE5xfPu7PhbhZ9mpE1J",
  "key27": "WVpnVhmiNX19y7mYd7G3AmfhePpQUeHdCGLQQp4zoyipDxsoUakuDaNqj5G88YpZUezDdzSD2idVH3LrCuDmaSN",
  "key28": "22HoocLgqAavvwLNEd7anXcQEDTYc2v2pr1zPSovXKjYneunyWLzHQDQAtDwEDwPPDLpw6n4CzUv5PBFHpC4UxyT",
  "key29": "21mh3Fw12ad6URULGWZGQQza74hmxQtmFdFHDoLv17sAr28gmBJFZt1JHvB8GRP2kuSVNBFWED83xUit3hCHVidB",
  "key30": "4nbPc2S1S6a4P2KKz9XfHJ2jxY3uUyHhc5GUfsQ45VSs3WLmTXBkB8eVWmuqqVWricpzL7A52LphoZy7oZKuKGnF",
  "key31": "5puC8BEJF5fuU1BzUCdQbxm7M2cj9Z6ezWiTScHcAZGeQs5HUZdyomDcNynbnX6h3WSitpD1Znt4xoPVnbhC8Pyq",
  "key32": "nRtNvPY5TmYHSRkSwrC2UNFjKgf621wctELVRnHokJE4wzaaS6P9voQyWa8oLYQwEf58gk38H7bzHzGy8PoL8tU",
  "key33": "2ZLJE7td48n7aTfBTFoEVExo6vuKcES7ncazbHgwwFCQ1Jx7bdQfyipuynaKFmPJ5Z2QqVtQ13pRboUTBpZ6g2vY",
  "key34": "2amANVNdhT5ZeqNuP4dpHvtsGVhm2HVxihcSUUcGuCEAwAMGv8QEUgrKTVmdmdV3skWd34QPiGTGWdh4qAGS98Wp",
  "key35": "37g1a5ihuXTLtYkn6uKjtBSLwwLxwygMekibd2riiyLgENzsbYgwsdTyURwj5xmM3w7WCr4jh8qQhsPSZWKomgF6"
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
