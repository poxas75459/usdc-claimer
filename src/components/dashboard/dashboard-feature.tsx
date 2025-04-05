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
    "45D2T69t9N49nR2aH9euA2pCHQM454fG5QeWTMnVmEQ8tD78f59dGxoL4DeAVdRzKeM13GTaF8oAweeP67QPZNyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h59rvmSVT56iecnTp4LaeiBfN9yRkXkfYXY1RgPg2v5mgXM3uwy3CWdFY8QDNp471nLDrJtis8iCiPKAMRUAzTg",
  "key1": "3i3BuN9AHebpqmaxWzYQwcsDyUuRjYp8jMFn6SpC3GUvzewjuQMmkbRi9DmvJsqURCYKfQYMY5oHZz6p9sp2tQEi",
  "key2": "2D8svTXA6AVkBsA8eic8v719Rsh34HApEMikto6BLRGdRbKqyGHgkjeLTAz12PwmNBE65wmD4ckCucLJKhNeFvRM",
  "key3": "57VXkKW9U7Hj8T2bWXt7TTwH7pi1nhaHMwveVFN6qtz6zV9DXuLtwGwpprC6mb98JmBAQgpWmoX4vFVWYKKRnsyJ",
  "key4": "47Fg8ggyqAHNLjbqB55Wb5ZUqTM7nHoX53hNiSkNj9KBs2wGTpvUmwLw1DFyTdLnUQaYihRvq5PVn5MGHXLQdiUK",
  "key5": "3ANiyUswqdSvYsn9AGghApNGZL3WsdqGXPG2VHMEV8CS2mEgczsiZXeA7bTQpz2tvVJVyhswNorsErRxhBCrpkom",
  "key6": "5NZcZwm2YEM8dP3pffe61X1EPEou1D3wReUnUpgmhCvzvbg96tcDnK8qJusAGT69U19dJeuja5VaQSq9svo1ed31",
  "key7": "2mW6wS1WvHZWqHcaMLdcXrKeLb7pR3FMbTq6Ycj8eWz7E2t7F3oiBc9bPeFWg1m3ysNP4dfMpMeLirVTdPcYMvE3",
  "key8": "3W6w1G2KSYCpue4SXUR8V47vZwzLSfnr5oJACXSiZKbs9HfFihvS2At4mTa4NnTHTBb6ujeJV3APvy3Ehe8Vb6MG",
  "key9": "2qgiLUhZPsec7rzjLEPWJNJjDMo5vSMsrUpu9jbY52HqgEmNt58ueF5WMWHuaKfhSnhx2gxsmuzAVvDZ8i9b4ugq",
  "key10": "4ZnP4NwJ98yreGcHdzhd3UH48ykUWmMa4LGMoAKKayrNDMgn7636URjhQhRJbBfSXQEexYRXYQFkeDibLx9kwFUA",
  "key11": "4Ka6TZFcDnptP8mmU7SuqHzAoWkfksU6AUHJ187Zcjd9ZAiez9wW8DjJ9hSRbcWcuby4mTEMYWvT84tkFVauDM7q",
  "key12": "EkeJZkAw8ZW8vdGHqxUuQAijbRZ8GJkTmpDcK7oX4PbVnGMMJtHo5DNKRwYTTzghSfqD1XvG3TVaxXLCKhA7pK5",
  "key13": "Cjb4w48azGu3nFLGCZoq5tHM5G4j1KiYFnQbqKwSPCy2FPDFpbVPkSoSnxRN8noUvS2GMAqxuDes8v9NiSAaA1E",
  "key14": "54z6LdMdgDbc2k3VaJMf2acZag4hQ9Ljg7sL1QqRucnJNQSxsLkLrXr1kwdGHsP3h83azFjmZT2SqajjyrR43VJs",
  "key15": "64xLRgNp2NyW4ihZumGXgF8juZVorERy1K9rxFz9Us1xGYRDKzwJz5njgw52RBkByVW9NxC92wT3tM3PCwkutaVv",
  "key16": "4ggEjttWQMYqYTrxtBBX9D8hcYNPX4jiMwJmB4Te99bMZQLP7PG1JARpfaT9pwjHezraYYUhT7ytZxjiyRDjddL9",
  "key17": "3otqcUaD1GrFoUXa8AqzghiNzqKqJ8aojCBUGtaQWgnSvqWRxGFPW8YNW9L6BWjPseWAUhqXtYN3BfcCa4ZXmFT4",
  "key18": "4xtvtfrjmdWqvHQ6gVksHuqreSH7DvWdyYbo8ZPS7R93z53XLmqNP2tuuACtkwtSRvC6yQtiUezbvF8ARPEAsUsY",
  "key19": "5k5frNvqz5Ao7ziiHaNM9vx5awGUdkGHvuDQDctpujGFEa7v7S3E81aW74b5whMC7AbqNDv82o7W2aT585aAPKcv",
  "key20": "2bDRHAnq9RMxYXAtH36btot5LuyEvsABTBTNsmjvxty9wc9VLmReNfqQZ8KDWmnaDYebZW6NemwLvvDDsGGL5Dby",
  "key21": "5AEGwD6UqAWxXRT9Y7dSDwiyMRKY5yQqkqaqfPZtrMwmrGPg6eNJVsnxpXapAFToG3yHbf1QuMAPth6tpJfAsSMg",
  "key22": "9jtTdMrg2QWTM9xddAfAa9zEAGGA4m6HKLBNEfEBWyzdzbLsSRvjtmhF6zuppuusWwj61V12r2kEEmtWb8zUBt7",
  "key23": "4ekgKQzjAKEsndageo77prrDxBGPuiMDnnCEPTzzi8Vh3PxcMpfDswcCaHeeur52RcDaRZ4cGxfk9ihLA8QE1Zgm",
  "key24": "afMBovmQCYLc9XWid1pgFHKJUEUKWHCCi4DoqQJQX8RyyxMNTAXizBZjoLoMCdub7vsLe5SkZew4zBNquP5j2Jh",
  "key25": "5twtFYR8898saSjQgJqeqAS35U6DB13KuNYDZs227zw4V5TB8XLiJ42RCDRpMLz9VVgPSnNryDBBsVnUH5Ns4TWa",
  "key26": "5k238eVokyCF73pLjb3sECfdZAHwPJSp5twqMUCwChrGa6dHV92pwWi2N7BaDzkCttyrFQDcxwBumJPu3yCTDLgg",
  "key27": "5wYD1LjnP9h3QXLJGnrtQWS2b4oRZv9R42K4MzaZeseFdiMG1quK4YFRFQ5c7a4sL8teSdex6WZQmmd9NyKMWzFa",
  "key28": "261G2WiCQpM4g1ppjfpKcXET1uJBHk6aK17fVqm6YUteBYYrv8XrUsuDDqEwmBSSvdf9sFT5nA3XRL9wEfBpWgLg",
  "key29": "4WMbiLvHD6Skf7da91uQCmJE7433W6SRvDWCyCDhhe8q8dMQhWraasTmebQhHoAver8Pa8LG9dXBCbjpojCQPLCx",
  "key30": "SzM3VPZNDEVHH58yGtbj15zVfsWjHAkiynDK15d2hggArCo3rjnjqGuQzz3Za2Yp9L1vmgfnJhHpmuX6TGzgcpu",
  "key31": "4EoKKg2Es5XLn1yvwn4b5hkevMfzAoxHNDTwPhEDkY2sS7BteH2ZKGgjvoVzQTzKiFseNHJavy2fpf1m1rgwKeSc",
  "key32": "WAgG7gwuKQC9SVMFQZcsavguJAFjFWjTGGogyqFyRR58xNBYyKnDNtDroGmsfp6EFwh5Thp9MyvS9hR7mdH91bc",
  "key33": "3oWadxrss1kgJZ5noHFgzuW2zaA9y4NUHXNJ51m7AY2kdqn7qmcVoLFT4DX5TbePPPTFNbjXTgaRJNzy16fQDtG8",
  "key34": "3SrvzJdjppx25joT3qPzmE95in85seyXwWXe8XpeSBudtvsBeU9Q2rS6fQLDorJJ9QHL2MGB248pP4tNDaiCy2r2",
  "key35": "3mcB6WyQfu8PmLxtw14gnQupVAjinvc7SnGjxn2yFgjn3ZKkxx4hE6mkju1MEGx5n4AiqYuZuDMx4YVUQ852ckU2",
  "key36": "45iVysAkpCA4M5gZmpnENENTBDweEAvQjGG9BbWNRXtcH3zaw9q9KXNEbFBdaH1N7rDTohLzk9zfCRN3ZdZ8hapi",
  "key37": "5fcSioSeNVaD9ypd4mQGpLK7jDAJJZK2bcGf6Gr4LJXGhzG1g1Bzk9PmwJnKimEHejL2DUQ7dppcEFrVuSqGz6pi",
  "key38": "Y2MwPaWMsY5gUuNN5vthxjrsFTNdLkBHN39hdmgxTmScvdMFWPshRqHSrMxRg2ThBTXsE3hXgCChbfNj2pQyA1U",
  "key39": "2ZdBu52JH136yy9FWaSyQZAHGAuJTptf9FpjunMNPR8hkiQ5gHCVzMxk55wGj59QcBzGPpnQWzZ5DjC5GmUeGSeD",
  "key40": "CQWKqwesnhsDrqFu9qbjZPPqWsiHt31bckmRBBzS8NfqRqWpgYXUMbY7zypHHPw7VnpywrfPbKVUEiNP5H9PAy7",
  "key41": "2acgojNjnpucF6Q8r4icdT4nwUxtMQMvxKr694eFw2CkZY26HDkg3mghNpwuBMbwxHtJkBhyaWKn4ZjmFViT6kXN",
  "key42": "2b8beor2a91niEyMJRuvgTLyc1LdPR91guufiWcCKgtmHNJR4JTU77kZ6ne91qt4YXTdcMXBSPUy6HWtLSA5UZVj",
  "key43": "5UVcYpmvaj4Jut3ALwtrQXu6WwziL8jYAaN9Xtr7BVEU4m9AGwzGkp84ScmkGkek5QT7gkWk4KqEt5pxp8mLvY1d",
  "key44": "4FKBTBwk6SSMqX6pNWb5gAmT2RvoWJmBNcKySsWkg2H8ugZAtxhaUS3MeWYUkX3b6bC8Lm6hcdgroiwHeMtLDzTm",
  "key45": "5ASu8qMYvojr7f4rf7hnRSJK7HrcdTJLCeqzm85TWmx5Ty1bLfA6joBTJwWgDxx2ghqz6QqeoTHnioh8nNXntwtX",
  "key46": "3zpWnwXQ8rWJyT9ecbbLDVU7vWBjxR4EAeqLtiZo5XBHca5G31jAksBoZC1GtfGpkcq2v8Mu5oR4a4gymidW9JZW",
  "key47": "5r886F6pAwgLixvg7X4Vfp9PhQb7qV7aehL9C8rhRxDbrPPHoB6YJzRvPEzZpkJFpGoH1RmcjAsnNwMhGg5q4zmZ",
  "key48": "3z9WuDybwSbFxdKk42UZHJADgVbwHgQaRj29xeRLPdAJbWtVJiMMDBgYoA1ASyoBnFpjLZUCZFC22PiTU1Aon89m"
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
