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
    "Xe34hXdUAKQoKq7eXp8DJLudYMjfzQjU5nnR1PSTUay1dCFbdVzgMiSrjGrYiKQLp7W18kob9nhZqfTWhHvHuAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7W18QqYu5oc9gPDmf6sdKxAkyeRRpaZZPoxCEPeWVRkp7kU1pHz9CHvSSBgazKyLcUJMJsDzBMUGAVunLhbZcKH",
  "key1": "4ND2Q3yehvW1DmKyEKDM9o7FS8D7E7qNAoeFVAgCWiqQeeRJ1XxAefKrw5VppwTLtaoE2NLdCDXeRQPcF31sfcH9",
  "key2": "F6kuxNFkGuWCqeK13PpHgmPYpKKCwfNK9WsTJanrbQmHFqDRMfaTeiLVh3nBo1Bmwv3qWsSnkcubUR3SL9AHEzW",
  "key3": "46AJwzMKXRksbnQhwRNdQqoCFX3kksLzgUHbeRpHNskSNK8o9SFbkbpn67q8Hoxw2WGHogytpiyLpNVYxQivE5c7",
  "key4": "3TRBvabik1YBpesKq7rcguSSeZ2RijpExSakj4pRRJtc3QuDG6PZ6Q6V4fjpUP6fd183uk8Me8Bwv5QkvNqxsiRq",
  "key5": "av3MRqNAPjRsk14Eh95ybRhsEa9eWPoPHHsru6vGCynjdTapptyqSK3Ce91W2otg3AWYZMtm227bug3gNB3dvH7",
  "key6": "CweKU9Fcub6Dwd7hkciaMzFgC1LVPpEpN2AxmPkA2KtdNULMMrxWksU8gcN3tS7Ju3BCPNXywfgXP2BeoT1KqVw",
  "key7": "2xwX1HzTLyBheyS2DNsK8sABym38QPXN8T2yG4LsjdkuL5TuXzC25P6QPJTKbspCnBftv6Jt9i8rDwYqBNdaT9Ps",
  "key8": "262CHA3YHxMMKHxMrFpWq2vAVMSNHugJJ88MxsbUbiEyViG35LaWq4FMtnCLuggTi72Mti9DHHg8qMtCMkzv3dWg",
  "key9": "2HWF7nyVPU9njMGGWs16pfkMcR29ZfpBrwuPLVSVx3LiG7tLvZuLyumWq2Nmaeg4qpg9A7XiLeVUFmPojiQ4Svur",
  "key10": "5zkwHqZ2eCEvDN5NwXtoyVpDxT4ferEuVfqife6RMBRpZa5cA5wTNe7kZb5hnM4onAfH185BaPgJHUTYmtyeRScH",
  "key11": "5XR9RGuLeruMi17oMuMooZca3acs7zSLdoeJ7e8ugfes7yN38fBuw4PMRA92reJHfZGVRWSzCd37KBECGAnRr74u",
  "key12": "59oMNo6SQH9462B49AjHNxV7Deu5E62dRTgwxnHejbZA1To3pHf7muZoAYsnQWzAsbLuRJ1oxs6gHk5aNFUZvzU1",
  "key13": "3a7rmvY83ikHJNxhinVWUFocsnaZX6bBBVkC6v33ATiWm5BhYnamfaQK4WRDhZmTCtk5Tfg8vXGmQwgWnkWLDB6k",
  "key14": "3AKvQef7v2dbs4wuJancZQnGxMnyMZjpLcvPkrDX1R7nkSHwwZGLNhGQ889Z9xVHFxxGN4DjdmYdsWftitsGGyNf",
  "key15": "2KPG7iyYbtMZmzgnrPBeJB24VQq2AYfPQ8qh7AMuYcx582XS1KcZYTBuydiq5Krth6MfUCvUSL7Aq335KamrGmD7",
  "key16": "5B9nKNTihujeWFMe8Lf7sBYKtwisJz2JGH5oJMtvrchugkr33FbS2VYHYFyT2hd9UfCSAnTgxUkdqX37x6Y63d55",
  "key17": "4hgVWaK4C6Hu5NcHu5tNsWrFSZ2xjKiwBupFigW3b3XjBvivzFLxqyhXHW9A5m7nGvoScSLLmKJwDpBxpTaap8GP",
  "key18": "2oB8g6uw5nBfWj6w2ATJSp7fihhciLZBbtACvqCaQ4jUxg5fEwvopBa3qHLaHcTK5MzuUoku9xdqu35ZwvWDH4ZG",
  "key19": "Xrwfnoe7LE2gMMYCBwXxkbAYbNDTh6WUmno8kaVNsMWNStxfBtkiwgsGxw6pvJzN2WXh3Zh841cSPBjE5osrUmX",
  "key20": "67g8vCcDULUzys7NDNvzgRYZckWaFXKJqA3pGfrQGneXLdvdsSHo8cUiTUn63BxyBhQXaF9FergwuB4FDmoqr577",
  "key21": "EkTkbrmxLjDqm9HmaAhmwrjW6y837cTGHtWGL5N3FMZNTztbaix6TU9iZSPxs23YUcEJW4QNh6nXLDK1zjPdVAs",
  "key22": "4Bm7fHDSC5hgZcsMUXUVtvZwip5PR4JuUY7i9mCZ4BC4QXbzQVv69NubKyMQeq988Kx4AxJtbjpJBXDiBGB6wj3Z",
  "key23": "2Lw7fioCiVLmFmUw9LY9NDSc2W2AZ5cVqCkaT43oJjEpoBh4xg1Xf26J2hSggiSv2u2wKqKJPt9SgAxtVs57YpQ1",
  "key24": "2fmubuGDRZhbJyEVrcPV1gt3mhpRuNSWjVnU5Msk1Wp56vWXcHsWpqVAkYrHvbFscrNDtggu8SEYiunTwXM4252p",
  "key25": "2TjwdVpYnHrd8Yew3YLehVdAqgfcXSEoyQKmzjsRxcMP2TU738tibDgFwYrGngmaK69c7u57ku896DaKFhxAwars",
  "key26": "6XFnXGBKAL4QGWkkNpmBwCwQS3kxC7D9qMeJGUcBKRAXeoGEDZ84oQyqexak6W8TgCn5eY4diQYTkQD8hyiB5XM"
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
