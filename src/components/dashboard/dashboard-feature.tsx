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
    "BH6haUgRgr1SnQN1xcRirxvF3EjLPFZP9AsJhra3CBea6ysTocDkwBCcqQZSzka5kthBLYRxgCCsXKD1gqDWPKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f7auKvQhgGiFtoWnEqsusPs92WTa1hPrrhw4L7dAG9BghTxqYd2qV1z417XEd2wqotjTRDnGGicw2KUZDiTTq5a",
  "key1": "53MbHV7XHBUcAyJvPCUGZeEiXH35Zkv8UuE76gQixr55kncHRqUVJSXdsWaLt876qXUHgrf6Ad4rtPbGLpCqQCf2",
  "key2": "3Au6SpzBdQDheG7eLko36HsbiM2uc8YNhUrFYfwdrWWBeykay6vVj5UNpxcp9N8TP6sEPmJr4QnwHnrpNo9y2eop",
  "key3": "1jVdUbe1JuHhge3VAuhdtCRyvfUJx7BEcppAU33QRtZdmdQMRzCLQYffLxUHpJJhG69WnRCpsq6UT3G6XpaGMTL",
  "key4": "wdTpYv34CkapJrtm1B9iUoT8ivRqvkW3X85aqiVngzrrpKL8ADpQAaZ2FS4FYLgCWeUcWvsvhNKdYqUdpfgVjkG",
  "key5": "3n5AX58a4bs5gx61QiKAzxEMBZL4H8jXm5ZWHzS1s9e3hLfcX7sj2a91Pgh4y88edj3bBexeW5iwWwRhkKN6KZby",
  "key6": "2PKyyLcfnhik7vfaQXfQTEtGaHreDPMrMDe68GDAByQYPf2g5HVvAvMxb5KtPkBXjyGFb4mu9F4KYBEr1NJuZrXk",
  "key7": "2m21AJcnKavN2KyTYwTxaekr4nrBRmLjbZgYfjFfGNZspm7uTuoGcoAXAUC1DvJrMV8X8f6tuHSKV9XveZ3audCf",
  "key8": "4UN48KDbTqkWJzvWFCWatmGJjGRsNPByX52DUmSjtwJY7w5JyeQxtLjNfadrprSMb4KxqtotLNSzZX2SNGdakCa6",
  "key9": "2YP3VNuNf1zvUB8Niu4ogccesuASc83sxhtgGzWRFrYh5tYreTd1iD5z1KervZEAdAudrFi1Z1ZhESJYBLYXMzMG",
  "key10": "2N5qMR2XmMGJV5X8tSzbKWdbL5vNkMqf1GiBuTHzyeUZvFDQECiAYRNzwzhiA8UBUbCfcEKdawvZ4a9HUKZVGxQG",
  "key11": "3sZNApE2Q1NmgtYhusnF45YcqAY3Y4ZAdUrL6emqUoYK1zC6QVAJEoWemr5cXRpxpC8uJrkUtemgcNBUmyLqwdkx",
  "key12": "3GT9y54mL7JEKZfoxUemUXXtBpKskwyjBaXDB1xwAFatJgMXL3i1yPKLktvzCrvyJNzCbwNtL23Fqp3bpHexc4uN",
  "key13": "5vxDKiAFYwVjNGeDv66yh2JnBPYhwEVWLMEBf8n8EPCqwmTDdavBs5kRGfVzcjEXqzFapWH4wMJtqJviveauH7Pt",
  "key14": "6ezuVhpBi5T4XCK1Dw7e5gzsiScingPJtVv2cr6S8awbtAoauHrabHB2bQhMipJtVyR56kj9q4osW7J9dxnCsRm",
  "key15": "2v3dwGBoEQ7EbtU8dUfPjgj2iv8PUdc7G1oiSKQyWJD14T1Ut2rmt2W75fBWZ5L5TKmxGsurpwpWapK75MUQZswa",
  "key16": "5FBps3UHnLwi8h3SejEngGDSEazeq5BJ2QWj3hoSwD46SuvUMQvaxLbAGzJvrYSBrqwfomqn9LH6TSRTssTDDhge",
  "key17": "4Yun3GdLRVxejXok4iSzU38VMRVpGXRwxEeuhk4i6QZdvHY5tUd9WQwJgjiZzDGCaQTEFn4UPN1Sb9vm1H6qRRvV",
  "key18": "3k6pA4EgNhHHqqPT4weAy3yLSdjxDGdyf52WhidX33MtBe5VfmxEdsE26xCMwGqJ67v3VFLUgeyMPr5L3wh8Jghj",
  "key19": "2AnZmJQnWC3JDS6GiAwjCe8Nt3rRr7K27FHkHRrhM5iStbVKYrvBWBQ4eNZQ81rFZ65bR1vahbRHjH98C9N1ehxF",
  "key20": "4RkSfyM3UxgLF37YRLdMTBhYdGUtmhYSAJm88E4aZBcWJh6LQiQcfWpzNDtzrUUsXR2RZWaegayw3sAiYXwXRm7M",
  "key21": "5NHf2GqJEpvywEuFfSzW8PqDKM5P2CTjFiX1Nw1YVpRbGW5C3W1RpVQCy5zZysk8mc5byBHttJ9GY3N46AFG4YJ5",
  "key22": "4TXc3hKRWc2Ey1QGj7iGNwM7mnhaAbWujqnyrtDq6qigpWTYJ4ceYbHVWf7egZ58pY8RhnYzCFfhR2xXYz3ariZS",
  "key23": "qLEuGsZCQqLndxEVyZj7NC39GiEZD7wUL5rWJjSGfGteY56oP2G9P2o1DmcmGF3GeywgzyPqgABwX2Metzf4iTM",
  "key24": "3ee3PwpABgbU1nxumF96xRhzc3GQkUmkxE6AGgMc62Sfm7FC6BBymVmoggVd3Ne5ypuR6Aow4pEGj7GoETTbUsHc",
  "key25": "2arGN9gCC8p4DmCGvhx7DNbsejtbeLcJx2Zs2o8PjPHaRco14FtpjTCx7KDGLiJqMz3xXHy2tWNjR5S9xJxCdH67",
  "key26": "2ngzqnjYF6bM9WAn197kg4Gp2s5pxy5bJwiVTJwbakYB87yqYJdDrDRaK3E5AHrw5z8t7XH9aoBVtiMobWeZ9MvN",
  "key27": "2pjF3D23fsSuYDXEpyWNBtU2FY991uKDPzCxwxrn3KqoVET2Qji59mACeHs7AfkDZ3i3iZH4kJyoRaMCXCykSMUb",
  "key28": "3j6NeXRbUsZcBNxZWg3U28Q1XMTTR5AYg5VL8gUC255TG92UgNeqqMEQrrMcmvuv92q1BHzPuLCeJVA11mNWf8Cn",
  "key29": "2kURfnw3tW8xhSJmd8m2mdwA8z4qiqp3X48y2scgHuaz3AacgLeo56DawEsPNQ6gnkRvFQ7GNwhVu5fWfmbqRwVP",
  "key30": "5byVGCLbFZmMtgJqtMwU3xryEEXyB9vmNYSNLaMNAd4eJsJDyECeDXEW17HmEoWHvzTcUdLe45j6BfzkVNC6mdHG",
  "key31": "5Y6QfPGDzGyvXkz3gUPeXUU1DjMHyeTEd94QQ6qc3Ci8FrGnJvEPWYK57pHgdEvAV8QcWBDDKjz9BXpEreTqpr6V",
  "key32": "3Eh8wLuCgbncNxMPoFWqYN7Ez6JtEakes4MJXjCAjzJoZjTwQ4i4w9ACfiv9sjep82w3XgH51GiPzWhUVhcCrC1h",
  "key33": "3oGQVVWUzce8qsh3L7cJG7Z9LuYgPpFQmkJxczruHEq3hincVZ7CFTHtLvhTA2Vuc2emW1gMG7vdHMHxyWaKA6w2",
  "key34": "5AA3DJCvkWNuJ2HYYfYb9eAmBgQckHCJHV2BfSQzEv2CEqPwvKughFmeoLZF8QUfvZgTurB1i2pck1HT8oyYSBsz",
  "key35": "4qYfQQkVVU7aQBa84rDUJdBkTGiYw4E2BiUuV3saRgHtZu2jcyMPUgte6PPMvzvGjPQ34syXm6p3M2oi5mAXpToE"
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
