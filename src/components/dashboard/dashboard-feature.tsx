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
    "5Ygu83nkxzdcReYtbvB8hp5MJQgYrUDvGrBBuyMmMwsgdjSaCDvS5sbegx6RsdpJ7phrHg7AbFVC1jCpMbuGW4PJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ZE9DAX8XiiouSKQun6NRg5tn7eh4pcrrMz1phpVe2AcGZVM5UCtk9bYnkJepnsNSsdYdra8pELbGrE1EJXXDAs",
  "key1": "38VkHt9VY1AaMQNtkubxWtTpThfuo1VKoa6YJWjVLHshvJCGaabW4FtUWsuMakhM31T4D4pNPf1PFbC1BCg7CrZW",
  "key2": "5qNhkfQiwe6vWyJ78mHyfi5D8VAKR7C2Nrf2J59Mjqnv2UukQJ7VEvQT44zZKthmubQEsPkXm1ZBcWmh7ChFGBtH",
  "key3": "4AgqnmGPxnHaJWc1MEhPtwmnUNG88SzjbdNUp2f6oUQncb9V7j3rSMDaqi2zeKvWNxPwfSXVU9Nh2afVvF5Pga9a",
  "key4": "GSJPBW47brTV4fybbDtBFsM7HC8CnrVX8QJ4YHMW4AyMXY2suEEnHeNArBrgi3SKS5yTfbQSaShqv2PSKd2CUVH",
  "key5": "476GeKGNd2dcYZzUcQsLbVRMpwsJ9PrXL25D81SDa94VoBML5Dgr5gEqkNrYGfsBSML6KusGj9NNfRo3MnQzJTHE",
  "key6": "5YaLQSptVWbzXtNbteYfWJHgA8XjXC21qeisbdB1S7vhkXuoosdLHJmXXoUhtDDpwakyzEAxgkfvTRq3ao74Nfqc",
  "key7": "4A4Fx5UDSCQPjWgQoMPD6zhWepxf8AmHpEDYzVT8ACRn9XKDsn6iAZnfZE5B7LVQP5cScvRYqhsutd9EsrBeD3W1",
  "key8": "3eTBUd9TgZinQGkMXaBKVaSaiQaMmWQr685uvBf39u9Uw4UxcNwRk4J5v4AGWodWETzfJrJkZubAd7ykXrfiEzNr",
  "key9": "39fg4UML9bs5GpGFoXqJZpP2HnMDC4TTdqs7rE1UtbYXq5x1EH6HMYRhJxPBu2yVfB7AeTkjtMjFz6LBaw2hxXty",
  "key10": "5SorvhFLbea2T6EdE11qspGGMLqJfub6cToT7YwX644GfFEgo6LQhNju4CATEN3UCZzfeTmAjP8LTfp4j2fTvAL3",
  "key11": "3Btc3FtUxA6N6LrwdfCvC8AjPV1zFMXUgA4Dcjzs8qtwK2fZEoDb2DtUNq56h5znge4GxJV7mjAv7cVHJKnuiwEC",
  "key12": "2n8FFSCAUw7De9QibbM2bEoJHP28QyYT5QZr8mZgfTF7CprCHdWXi4QAk34WFnwrgS2UVN8MRF35JWAopHDMUMAd",
  "key13": "5g2j2p7uwmdUq4HK8o8sjh3M7zQBxxHLW16XHkEgQZSsS8qrbJtSXxTfd6VVdg8nv1CGqqtswHuna47EWwsV8aBA",
  "key14": "23C4W7XcZxtrQBU31XD3Ritf2PAgAnWo3DKt6h9cRYDL532TZco8DGzKGJz6ULFcBQMUCBbCsb86RnDqLwKTHjpN",
  "key15": "nTuQX2LGSZs9ckAZVDGdzzhJpVjxZ7BMGqALkcekJKeXss1V4Q2C8EGgCV8HJ1Hi5p6JaDqcTbxBMZk4Ux42i5c",
  "key16": "2tpnZ6tJWuEFzFxa8neCJp1LFwm58g5fBGQs913FLUzSLy2zs5Nu5dTaadcNimDhuvygEwKYP8Z1eoxpLCxoH6KY",
  "key17": "5Cy7jhoQcYzVs2n3UFE5mbcowMbPmNuD2Z1eu7KjDhpaG5GUg7jxoqpAdHYBcnJdDZD8n61rzPEqGJ6EkDTJ4cga",
  "key18": "3pjZus8kiQyxaxRs8srtqUByWWSGiPn7X4cnnZNsByrmFDkPp3sPbRnDEHmmREC3vntadRueHr1XSrF8dcQk7NW",
  "key19": "UDNS9svn3nDdyPMSQ1KA7fYXaPTWmGUsu4zTavsvT2kLpXxdEjNQKUTnJCfojoW1Pq4wBbtic6epwNB6axs9Pki",
  "key20": "2caF4gMdckooJdiqdEy1hHqfGZsbTHByb4xuFXec2epmLYdgDrEPcM9rdY79RrsqDWLykrt8uLWhZTr8Yd4uxgMM",
  "key21": "4JEyHhLxgD34D7t923yVfAQymycm1k1sqVcRr4bpMzm9zCcmBeqgx9kF5bTszHaXrQquPk1E6ume8fnytrt2XQ9R",
  "key22": "f4DpB9VWk2DAp9cXM2fEdzqSjK7tS5TVh6H4mUxjM6oSCPSLMFmipXQ7BxjupRXMMmL5HKpAUg3ScAbpWhu46L6",
  "key23": "4Rn6kn3muit9jg9LLAbHnHrnU3gFibcEPQ7AjRZxaw3W2dEdwYKpanoRGVYR5UrroYVuCSk4Bo7QBYFZR1egmsSF",
  "key24": "3dRMNPVNTguMPKUEdMG5sqpBV51sHefHCfgDFV5Xt8mAe53q6YztsUrZPX79g6W1aSwGQQFDXp2zpZiv7LR6C2eu",
  "key25": "4kS5gn8H4GbK3iR3w9cQk5smUm9SywKVb13qaszcyoeB8TNv2emY7KFDZaGcommAaRsFtVExPtkTWa7GXCND2G16",
  "key26": "2y11Yqym6kXsRz3kTxYGzKRH671gXXaN5Ebrx19r9C5sQo9131fCZEKjKsSxw7v26V66QtqNqJFpCr9opzKDCkKS",
  "key27": "5snoSwoHB274FSAGb478REFQo1EYG2Hs5CHt1duyarCAFCEbwSkwWQJ2snfyEeVqxZ6Sw1HoYRXsDsrJXdWJ2i5m",
  "key28": "5s8ZxoX2PKjJM1padQRM5vwnwdwnCzW2oSGNcsDmR4Hz3QXycM2SCqGXrPe3dUR1T22Lz21swS1JcXMUGg6mELbT",
  "key29": "5N9N7hUqXU6WVcjQu2DaFr5TCnqVnagXsmPhJB5ymQKEmhMbjosaR1GctBsYwAbFkGmMW5RchNeL7p42ssR2PA6a",
  "key30": "2xA3nSCAyWcGbN5ZWp79DK5yEYZrvFzQMbVoowxEqJWUg9Wcot5USNweXP5HPu2bvqCqhmNJHuFcEPCqXSenrFow",
  "key31": "3MyonkFVPwSJ7CXpmjfnvQwH5smF487FhfkkWefbkZ4iEMmCo59KPgrECxSKB46br1YzfESE1xYvqLba3risiHSA",
  "key32": "3cbhyjRnkuJee17QrRj8CjXWKsfGCTEQPgQx4KmhDuGSjmNBfZeDHrVFuNXhxBGB6AxBsKu9LSgyFGLj5db2d2gS",
  "key33": "3D9aeyQcUwXFLGRueXD9vby1MCfR5zb1EnFz2eH3hAfwCqeDXz3b1uagUNj8JgyaiEWeJvjvMxhfKjB4E3g7Xbff",
  "key34": "3z8rfpV2pNx5eZYUQmrgZ4beMCz2EJoVQcyQ7pAxPu93m4Lg3syrkRpUkRaku7PiG7oqbdo3CQCtwNWdpMVM57im",
  "key35": "awqxYgxBF3WtwXLcfuThdzsxJ7uhNyKJQx7vLm3xZbroenTjiWwUqqHKjMrG5SfbBZjnhHuPuSTvLyTkhsJgQt2",
  "key36": "2ShynFxJaXVfnJfHahEg2BNrKLh7yNDmnQfkLvK7sc2uLvzYL3rmAbQhLx7LLUNvZBg9gmYELLrLuj6b1xwLeDYc",
  "key37": "3uYRLRocv1qBUHaUZ99WCNZ6WCuKsoRJG4DQztwcGKBhJNGL5YrfTDMNqobjdT5ZFB57xUuAcUsWfccePtECaRBZ",
  "key38": "N3u7MFMkL9BuvXaS5dk8sAec3woRCzSrsxX3wHD6N27U4u7LKJSZzPiFc1oKF4Qfwh6629UAhDS6foABC4opXSu"
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
