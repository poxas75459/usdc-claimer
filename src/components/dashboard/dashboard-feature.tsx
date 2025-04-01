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
    "4xKTE7EdbS2nirpekWrwR4ECgeJJp8MmbCLPdEtqDWaSR5R11JU7M7RuAk3GtdKv6wQgimnZbPuSYZ6MjY6CbcNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bTSpe55Rpc3kUBa8jbmgAfnxWshGt2d4Ngpa9RRbpYkMvkhAiYwQgPdrsMiSQK7y67wef2MKUmmJdZY3LHtBErt",
  "key1": "tHw8h68u5jSMhyGTwFbrYY9bAQgqH8WAVAhwGf47etTDvm8SDX2hD3UWsRMF9BAqPz3i3EQBgbxzJGPYBf1LUX3",
  "key2": "4Cg9EGrj26EtFBLMGet9RaMS9LAJEGNCTcBkuaedAywBUutxwKoRehgQUb1PKdLhVec9f7SDVQgZk9fUCqDqt2Cp",
  "key3": "5L5W8zg6BtChZyByCTfusAzv7E3SYGuVUSt6UjPrmBT7ftQ3kb2RpCKEtH7NKAoXV9N2uoYPFbeMqjF2h8A84qZL",
  "key4": "4HJmddseZaaw5nwE2TVdtVAXoGsAQr8BNJLcZpMGJ6bqUDE7EkfWx2ymPoVSkrfyTKnKJQ365nDcCgAno3QQkTw",
  "key5": "4JBU3Q7h4WaccPSGUorTNgMKotkhgd8q6MtpNYP4CHoz9XfBfpuUgBXfZZMhMC3TwxGTVtbYUDWNtYRJG1nwF3hs",
  "key6": "2NYCyVaCBqQF32pK2WgGrJRDVNoLdCE5QNrigyJLMFZb29b9PoNGhzB6AYbPcoGQHxQPh4aHhhXFxv2zkyJBJoHN",
  "key7": "3jUa73BNKqtD1n7VnTnqVRDT1kbSAWE9DjZkuKZd1YJ2usViXAkDQxXWiu1aP8dDPcmALEWzxAN3qsSi9SHqB7W1",
  "key8": "5jzq8MhQ3GubAgFSqHTqDgjNmKHoqz1n9bxVEepcVe8ALYmzyuq9UaaA72erujmzhh1neBxVJ7gu5RRi5RR93LH6",
  "key9": "NpgRSXGjEyHG2XCwnqSJXJKaHwhV25c3oucJrRRRwZoZ9WjyXRRmeqpnvdqGgHaGxLpJZJtZ6KZyzQLe1GeMThE",
  "key10": "3W6vQRPrK9RmVPGATaeia6mh3TfwAu1adkm1BtfgDVpennFAUxAPfqPjvknMfMuEkGx1CA5w89vFJwGkgbNxi1uo",
  "key11": "TiF9t8vtNXkuptrnwcnLjSqcHJPQPhP8mQqTG9reA8MSKaEmD4rpBah2zo7xU6tQGDmLwibyPi2sZyKTnY3yJ5g",
  "key12": "3dE8eMRWbx1hWfq2BrnLaZPKRj121f5xvgWe4yCBVaKLCZHUUjgiyrMw2MDRH1BJjn9tQtWb55v29hZbK8R6Sqv6",
  "key13": "4nicBZhCc8jDm7fTS8yRA17KSKS2ntEWapXVHN7MAhQzNwUAGrNE5Pf1KhRj2GGp9oQmH3y1QV8Vk82EE5KxgH8s",
  "key14": "4TLySx91MUmdoTkZ4q9rMMzFMhEJLqTgkWSKjsVYb3bGQXApPoN7NLrazbFtfVvK4pSXj71CNF33d1x81zy3e9un",
  "key15": "4QNGZuxaFRc7yFGQqMtbuFwpDacXgV1VWybzqHtgs91UDPoKcdgQg3H3tFA1WdTWRgVaFyK9CkGoKamMwTBMmYRk",
  "key16": "3wPn8k5AR7uM6mPXR5iD4sgizHSnMokywHLScD6znmDFJ6N2yjVKrrssrEXSTzaj6b4JebSR5mAZVH17VyKmkVDc",
  "key17": "EGtvzJY8uF9rn1q1QQ9PFNFRG35RVjVZyXdU9kxp6xjwmqo15cesBmwcFGtEp8nFTGs53j8ZTxPGuiUArPv8Lam",
  "key18": "4rEE1ffryHcYZhihokZWo3g9ZFzxP1RsfV91kbu4QqvQ1udq2jcczg2YDLKQDmMqFGNgdk3K26KoPAT1tmoLHXy1",
  "key19": "4oTdn7ccS6gAQk2duCTH7jvXMXTMHnvgoQtUvubDoeUzCaYLSiX43pjZ4DBP11JMeZcDsJSKZjXJPAFvHvPYk8RN",
  "key20": "2zd2nyUBZbTeWwz4X2FjxHUjarzR33SbXJNLsiYszvNLkb8aHsmNr85EshoQLon4Fv78gPJF8rkgG5z48ymiBQXa",
  "key21": "4sCTggY2ti8mHVfn5jD2V6D7b4Mqvh75J5upfVwKJefRpNWPBL2zkP9jbiYhPaMGfPAmnHyfANV7EJvrCRpCz9Jv",
  "key22": "2ry29bQXqGXMJqFy2UffiVEUx9LQDt6jNLwqobTPbLnAt1t4hAJeXnyFRuS2pNkxVWr59JDx67EubLhkJRkZcsDR",
  "key23": "3ag4UsgGPoqRWnCyNPHDQX28cGRAmhfMQPozUme8w52mcrXRz3AHYyDJC8k6vEjEmxj4uvq2aevuzGqh94yUjEiy",
  "key24": "44KpBmnZd6PvXz4NeKvoFi9Lgov2up1xciXzsCF3raG7MMC9WVRe34ssCBKJfgvgcSA5abGuLaanhpmTwosjDwot",
  "key25": "4GAvA3JWarEPXag9p5TcrW1NqEAhBRDus4cchE5znZpKtCVCzuaaEHq3FymGZLjP8Yn2SwwShYQaSdQcztdq7R5Y",
  "key26": "m9cFN4D6ThqVVQfobpZRrrhUhVrvEHfoXNEd649ZbHuqbabXZfxCs4cGrHKT2zMpyQg1ug7NXMux3JdaDi6jo3z",
  "key27": "55YsF5ZxuTrSnGQaDeQmuNGBeytD9V8P66QxWbriSjGdMrYpGGJVqD6RTJ5kZWpaR3yJzVh4V4jz1TuqbPrUmy3U",
  "key28": "4a9uS6RtzqGHa1fCFmaf8pP5scePzZJSAMwL2JpzhjpEuCTUVFgABa7V8RmtwoRoHswZvkMqzcAjcEhkmMXH5uqR",
  "key29": "5k4NJ6wy9nKg1Spd128Bo3Wb41ohAsBj3cxJBZTEA6yne79rTi8Cvn7h9n4fuqZq9mTATet2J7Dxax4XWwGR61wR"
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
