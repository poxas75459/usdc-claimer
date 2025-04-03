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
    "2e9rK2iJzUdvo3qBV2XSNZpToL7QkHDeQgoE2sVN1dguxdi6u5HmpH1qmeGCTTpuu3DarCksxeuKbcGVqv2cAQLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XGwU2z8YE8vCevv1QPnkQSkPThLaj8yqCxZsuyWLe5byU888WixVWmm7haRCPLaNM46p8kcYasx7zez2EZP4ZLv",
  "key1": "34Y75RdyWdYwXuYCAaYe9nMoKJSA4vZuViayCbpwt2JW6iQ5ghaJM6jjTcDY7DQgv4CXzAgvCanuJRM35g79HjPd",
  "key2": "2AdShHjnoBrHwNnCtHRvaJczkurRKogG6xzJsBQgAZcg7jEmE5QU81p7AfvxbhufCnaZNZH1gqzbJanEoMXUro9X",
  "key3": "y4CwTaTXLtogpaFss1gfbidgHYycjuhLQxbxU36BETYt2gTLsYAmta69YfYmtLX6hBXwxBRi9TUJUYn2XYLbAhF",
  "key4": "5UpFe9kbbmMzCk99oZ5GfBATfH4eEYpQ8WQAALoQPc6SS3SBzdP7JjACKTEB1oV1kULERXnVianDmrKUk27TxdFP",
  "key5": "r8hTKXT1e1SKCMYKgJgjoJg1LZr3mRdaryDA1y4DWdwPVPVc2r7bq1vuLs1fLTJo5n2x9zNpEqx299HTqwaCy4r",
  "key6": "49vYReLFMnD1euXpUUzPRHhRxcgexcMQ5i68nffZF5fe9cxzZfygkep4MxYmUpx1CcMGTVZpTfxkQDyNYs9HAXS7",
  "key7": "5HJ83kYMfivJfRACDAs1RfJpDcorX7ezNw3wqR4Ry4oXFqrBhKG6KnispEs8d2BBf8deeD2SGgzGynJDEWP71r3J",
  "key8": "28C73qhrBqFkdCceCguNmQNhxk7h2QoujExqZH9HpXrkd9uBP7FvD1m53TM49KxzL3yrsVDN3J4CPhpAa4dZTZjK",
  "key9": "4bMf76pwqSqaR41B1aQ2eBnog3fbHEKxxu6SwKgpm6cR3WEPMMTvx8A2gPLYQ57gJHyKL2T6TiPYksY6BNwxQadz",
  "key10": "2RoH9XhhBdn1VApkVs6tnNS5fVvXC57hz1JwmQpyDGQhbX5ZN6w4AaVoACLYngFCAdiH4cXpdMLjnUvGgeqP5Z2W",
  "key11": "2jNogmDBN39NmN82PZC9abTt5PkC97iUc9X4CtjDkGtT1SsBeQWBDRDLpeJyeN4AjZsb5DhrgY76G6Bg1egYi5KD",
  "key12": "xkmVAUGbbr6aUoRtDJZ8EyFw6ueTokYuBkVziqJB5DntGNDQHG3PyP8QhDzMewsHyeB9whF8Y4kJjEjDqveJsU4",
  "key13": "3xadWyVEm5WvVJg3uTxLg53985hRZ9cFRnC6fyzqbdDSzbvwUxYDRkfYX7yDXxbxbkf7QUNzMbRH9arxn43ctBy1",
  "key14": "3Uy2Sm5R5CgqaxtHC2yuaFc8UL9FJiin9TAHvj8tcAxzybGcHnKCCnZrsrBsf8ATJry2SwYCr48E9LoMFFVG9sKN",
  "key15": "4g2g8MwqagYdE2DYVkWrvorJdVac4uhX9CtvF6qw8d5hdVpxictPM1jmyecVeNkbNMboqjQ7T65Fbc6bydMpfVRd",
  "key16": "2zn5q4Lbe6wpYD7dZek6TLFsecb392QAc8WJSVmBrueKnqEQKZjRCDsNniqKnMBUBCaT7TxkXr9VqCT1vaTtAwFx",
  "key17": "5ATGMJFa6o4GkKz1ckrNkdXnDbXDVVRaWCzyhJwBszoADQG5b4c7ActGsc5KnuwbiLyHf59CjQPioMaKGNdaagXd",
  "key18": "2Vp5jnM7H5mFVRUxJY67edQipks15ZvTFVDAcoPaRFbw64z8Pdi5k8GC233RjYuJwTdc4BjM19stG9aouLdmYKV8",
  "key19": "2nYjhAUeDAnzCzZ1aXzSE6uP6LHYKYJNuxFyJw8REoLsSHuQ4LbAN9STct5DZfuiLkPpUMDSrj3D3hnJbYqCqSYD",
  "key20": "1En6mXZqfPnNvNPht2QrXcN8iVo2XYz7WiHmRnfc1iEuu4BV1MF31nWJCLVrZ95q3PPoctuTkU1RjKgKkMfhitp",
  "key21": "5g7Yhn8Zv2cX7Dedghzk81JsAhzCiNKCgyksuzCA9ViTCi76Sy1akh87WKKeBRULNcbYAaULMR9Tpyif7925QdiK",
  "key22": "4jqPcV6gtQr9ekNetE1WaGTDkp4t55JBiXgywgNioGjMS76v8c2jFCtT8jGrf7uDmMzJmrC8XMEjQBDGhLy29krG",
  "key23": "3FcoSKFrV9E1eZWChF8Z3Jn11PcLj7C7oNKBn92fJXQuy5KVW7ufVtFoSa17ncf5xkXbqs2mVCQXyN9BstVZWBJd",
  "key24": "5uBFMZ1r1QXs2DnmtDpFHFz2A52NWcaofaNjy8e4Kcb9eBNgedonV5LAvgAvFrHz9kbHHsu9QvmZBUVfuyGWWLZj",
  "key25": "2V1nmKq67XxtoWU3U48pzTjXxhYCuhyqPtoBYyk6uvYwumiuE2bherdxZSdenPV6Wxd7nCeX5FFm4SGUVgxYLLHf"
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
