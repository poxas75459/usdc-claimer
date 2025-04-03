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
    "4bTLjLWvgJTLh2D98KtK91wTEgBKFGe97PZ4cYLz5nkgVTJNSG5CKNKqKSScinKwH1HcyUvZdbbriB1LJPEnWg8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V5QKX82wj5VMb3ASquRDtWseVg18Zr1QGznEcEccWfn3Yj4zTTVow3tvEt3bZSpyHDowopbbRZDunu2KkMuzgqG",
  "key1": "mTiDu54iCaVjiikmE1c5TMpiQV9naBxwucmxD8pAbKCRzxhFgYex4zAW3Bs6nrGneNS1h2XmkwmVgMHL25zU3hw",
  "key2": "3XVzsnQZ45xqU187Pd9yTNbTEsYoshoExaa6c45c1CZE6LFpL48HMQ4ijRBt9kagmxK1ZXqBbEuRkanGM81AJm8q",
  "key3": "3FaY42GM5YAiEisBi55XcLNb6cohZa5f7b6tremMnPjrx2fe95sHko17JMy3nQ7DBkCiEvTeAz6YdGgMd4ebcFME",
  "key4": "5nyct1spRvN79poNhN7wU5KNDeGtKsGGMUzK6CyJUfPhzHtEUBPggUB6svTqBdYiCtbrWuvhJWQmAZUHp3Xo2Mm4",
  "key5": "2eVtJ4yqKHktAFRoKcAi2PtDwpMGgnDF6TV8kWDPwSmWg7jHnThQDczcDvAQ8hBAUtcHJRkbjE1HFTwJD6kCqkmR",
  "key6": "PCsGe39PGvxVQ3LKRGTC84976DKECenYsbKLSUVHHkZHfqzv24LWTxVzKF3h2A6jboRjSVr8CgWSoNhgVQKyM5N",
  "key7": "3KWBM8Ps6e7ZxYZznhNbtTpSwA5FTAWSGscpJGzzVRauzhGJPLYmMzPeQoKkUSswSd5KoMLpsWSELsx2DgsuZp9S",
  "key8": "2oBZyqeFfyqANBMi2xiepYARmFSb8MDQqkvRSEn2XBjrsryGzUnydgZPXCaYibbt9uv99RuHCgBTGRew9yNvz1uB",
  "key9": "4DMJgpjqgEF28adiEjKxP5hb3xGr8j4EraEi8urtt3FcKdoeSvPkoQfNuqqbAZ5nmysy4H2tCXtSXyE8YQkaXrWC",
  "key10": "2aHHXThh9uurnzr2hdCcqjDLEqd12NRheLZEj1Yh3PsYaATZQeSW9XFwvEwTBaEmpeivjFJvhM7bqFmskhDCFaxF",
  "key11": "3Phf5kExEMvKiYiZ4ZsxnmKdWEKvVoYmz4f6fA1rHoeprSJPYiyWxbTXMJLnevcQsQFtfei6sedBgdqUhU3qAjAM",
  "key12": "vditRv8niy8KoZLpJehgztuELJwiAmLAbQ5kw9nT7M2Qg6DHNyD1MMYSoJqN7RWEinKUywg4PdonXB2W6gJvd9r",
  "key13": "2VejfoM3d8iPCsJJJoqFBF546U9MGkyGq7aSEU1Z6Y37QFpzj1UJiwEJW4JaTUCSfWbEUzDRuqkoibEfUZ8ufi9L",
  "key14": "5DgYj4xHyZZ4zkNG8iKLDfxShQAvfS3wZPUF1SRbcCmvR9Jb6aHxfjWAANk2kSaJXgYP2VxPrWX5N8UnsMqHXC3D",
  "key15": "3o67Hxq6C2dzcmkDHMgKbjLajUM6SW6VZzRimFaHzFyhRyPtqKaCq8R7Tic7nvmsD8FjFKx6tZZ5hpNJRN2u4uke",
  "key16": "3BWiYLNKL5A4KpY2aN38ApCSLSwktT3xhy93MJU4wtTjRieRaX3pkaJgKYdA8xpXMF5dPYenz7JV8hU42y7yaeE5",
  "key17": "EZwoiHAM8RTgjswF4c9Qz5T1rRf7uhgZGCrxrCiyRdM1i2TdGRfSWKoDwDBvMjFnVBCpS4ArVqLWwuRJ3C84yGG",
  "key18": "2CJCxpEtLHePt5osNrN2iavmX9Zwfk3PNWMbLyEMqiyKeurgoKjzHCQ588JDe7Ef6xsYoYxuVXMeRfp7XC9r9Fb7",
  "key19": "3Mtb3wyHsZFwG2xgd28j1r52pVaMQdP8xuRNcS84wHxBVbEABvonWpnHRo3bRmwLJnak41HwmYQp7zH4H9yASJsJ",
  "key20": "2xZyXqrdnjLEiWZkMNwbhZdjtxCekMY4y7rMWSxZt7P8MhozwjZzBWf3tPMqoMf6RJC4z2xbYJ8Beuua96iGpbmm",
  "key21": "5KxJwXkPR4FmhT4hHLRMnCiguYM5pjQogrvpAugcrmKYDsApXS5s243huFZd9MqhHEWZx7iXbbdLq7af29QK827i",
  "key22": "2SA1KgeP8uxnsn4BiXrm21NC2BK4cwW6Ub1C2zvbSiW5pj7wuCzYAdi16TP7LpSehfLx3jjGSFm2TQLQFTYKXpjS",
  "key23": "49JvuzPAfmN4JRA8LYEAKJYKvkFrxErNXbuybMLnTmtsh6sAHTQtEWakGy22yv26ztVZN6142NWx1xA73ckeJhTi",
  "key24": "49E3hV7WvY2p1yeMeW9hu5yZQzShwbcDzUfdKzhXko4vw4ARJjqdXG9hm25RBzSMNLUySsnTcb8rve4e6FgzksiK",
  "key25": "566co2y7pJXUDieia2Tmr1TyPTNR3qSBRzp4KmaydNSakbTLEPXnQLQx8SfnMLtTrNkgSqpErnJDzruiqhaNN2MU"
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
