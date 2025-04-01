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
    "4KCjLXkU7tcQpHpwrQyqGYiVkJR7gqKSgx2chYFk2fWTGyv4zaCA4nMk3Dy4DCXWiojdrnRHXjTB4BhJPxGWFhFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFs2kikLSWbm989xNgWXwGwkAxLzHofmxTf7iZFWxZGphJPFGfW6ckhHRF876rEiKGAQf9ycuTW3Lew3ZL5D2xQ",
  "key1": "3cmUJ2TMda5SkafPRNJLCqBghzwmXP5ASHS3mErw3Pa7XRyKcGfe8nGBvGaqDY1pSuWg84mFNDLD1X2ebAhW72um",
  "key2": "S3YJ9RyWBXBxr8ngWaXKeYxatG2AtCdBGbCnqVRjgyU8kSSCCRfem1sR39BZq8LvTGaKjrgJ6yCwb7zb8PZ29cK",
  "key3": "53AqAEJMdSjmSokvjiYLvbfz9mx4fa39UMcYqeajvUYSmbaJNzugn2cAVYK6jM6ZnjnvQt96XuGgAZs3RFLQo9yr",
  "key4": "5RzYEiNddZfGdwhdfe9ViLY5CXHpfdbpEckXSSMH1DG5wbhQuDWGq67EAtwS9eBm2wWmLJRitoSSuDCsu3H1LFxa",
  "key5": "52F7Btyz3r7Jwu3PKsjU7feXkostyYz82z7Q3u23H1N3RhCQMTxBaRF6hoXKRxbHPqGkgzrt4c3R1nEwqMQ89nKn",
  "key6": "R237iDRBi75xRtAnJDtskbQEMEpcDwHYpNbqyocwAPSab3chHRauZHjHw24io9JUnsL1mU13Bmbtme3pioLd9wA",
  "key7": "42JEqEX7bTD1KiDugGKFe5R2kYaANcrSvU9vRic29Vhu1kMwxEpijwLNSJYweSyytz4yBxo4JsocX2AjZ5sKkYvS",
  "key8": "r3wz1euu3d1dCDQkYLV31cw3xiHe5diHmeGwjCSF1xirUR8R4isBHAtwHghjxz1PhM9qFTE7MFBeeFMdKGjdh8y",
  "key9": "ZLkdWpeS4BimrQZT7tCEDUdxRQ6nFZCszW4URff8HbPgVXZw5DNGjKZCo6LMsHkmxYWCqj9XaRFgoSjBELMYYXg",
  "key10": "2PVe4xvqcRbkcYAPhed6oCypDYSejjCPKva3bGnLGhNjSucq6wFTtpnR5AWCfTefp7fsWKwFo8A2Z4ua4mgaG4Bo",
  "key11": "2pGT4RsQqnqn22DgLXixtqKaudwaARvL9DNPrfvQGPXeweHi2cG7At519SSRJmjySMz5f9nznvADMLbNmToDozv2",
  "key12": "5qbg8Rew2JyvewBv9XXzmjgpvidTonWkzrbU59tDNSEvYHHSnfZLiMP6MoYqBPi38zGuPGapsBxSfNMYpCcqvHxa",
  "key13": "27KKDnFTecTfjSr1iKt1H6bm1uh2P6VPeizY2Z5De35vAJzaKA5HUJJT2qDC2Fp8pQ6VpAQYeEGzTnWrzFqQ23bd",
  "key14": "4Nvk4gvjzRABMVo5y5F3whHJNZojioEqNXpDp3HXc2Kk7nfFvu9CNeX7RQTttPPPF7A8tqP38kJRmbDHfwafXfWo",
  "key15": "rRUMASttKRrXmFsTKEowa6EDKBgpkqtze3NYyJgAHWxkLsV3ZZtoG7frhLXyG5f3LjT3fSehq5WJa6An6bucV6f",
  "key16": "ivHipnCbn8Rdz51ifDXmgVJCjdDpQGKBwHXQKkn59FA3LwG3ZQteaiu9K2Y6rByeCnHKy99R1WkjTowGhDeNgKu",
  "key17": "3nWFGc7CYSGvGgRem6j6uZ6KXFDzXtVAm9QQ5bayxuV1KaCY7oFoPy4JBiB6MpfwRHTfLMFvQ85uYtVdoAJXq5a2",
  "key18": "8cKZefXrdvypMG4urGceJMc5KkKMcq51Try262AuNQd6a8HD2B6Qg6yLGWwcWM3fJPEBXrJd3JXqHsi15QzTg9N",
  "key19": "4Bp9pVhEtEDP1DkNwbn933h3DNdZaif2BD15D7sqi1SrdG3bdU73rUQGz4nMfywK4YRvHZKTcxYRjs2niu7LYS5h",
  "key20": "5GMeCcNumyNfE3FQfsmQFFBSouvVFq8sgoBiTYRHaE4TL8XTfa9z6aD5MqoLFLHqwargBPVUqKLhYMTmy87VQsiU",
  "key21": "jsAghbaEMvpWGJxSqJS8t811yUf9G33cv7QWyqDvamqXDCvp35n2MTnNyrb4qbzUNnF7pPxXqSLgLQdPyRGcrL3",
  "key22": "3kLTo122TxpHUE5F9LtyoubvJ1Q5pCi8sAsEP8YHLMFVrDw7bjzCR7TrecuywSX2Micj9AtpAU713ykPrPi47E7b",
  "key23": "4TErouN9dcUydpQZE4ZA1x4yPMX35yADsaP4z9y9AJumBm3pYHnFJWmp5Fbo7FW8dMR36vw8LQXLgpdTxfiBexc6",
  "key24": "3EBihJAdYRhPwuhbrsS6weJBg6WoB2vkU2LqC9EbJJVTdgo5TJBDw85KckG3UwXEQjXxkR6ju9a4DnoAi7TVrUoX",
  "key25": "2VKP3gD77HfP1NTy7yVsH4tHp9qG3xnTpsiWWQ6ZanhLMfqqMMTaTM3xySnRBe8mkPJ4YfBthyKNjzt76L4knJUh",
  "key26": "27XKdw4vaSW3THeqX7DNAJ87te47BuQxvBdtPa1JJMrpbvqGbMR81vMwuByuKVFXinvb5zY5hMVYb7HNiw1BCP1K",
  "key27": "GaDnaKY2MCRyFxb9eptnzARbKBZpjk6nA75jfAEL46FbCBtX7sunGznBK5QNiKN68L6XN9Nax2m5y5ZsLh6CkYr",
  "key28": "2vkPczqqvTtUvx3czokfHSAgSBMQ2P6GEqDNZDD34ZPRNfhLnFSby7CdF7ruayUkV8ZCPtEaokNGWFAp7XYCXEy6",
  "key29": "4PKAvSa5SpgLMh8tDUp8kmfP6qE6GVtcbNYmd3NhWTBKZZdWLErkqEHct4BcAUJvjBPiqBqoRkVv5nYtnXFMb9As",
  "key30": "44c3FeGCpvhAqX8hGADf1bGZffzS1z56xCx5QozTDsExXaWijKhnZa5ohPdhFucjsuzbFHXuLHJCmkb6ecqypV6h",
  "key31": "4sLDLNAFVj4dC1eDeTaiXjXMQNmMoHNpbDBdxbG1Pdw8irXR9jsewsWHHntH5HBBNAz8nBzcQUo7xYcFWCYP5aXL",
  "key32": "56Kug67wSSrnYgh43TuocykjVDWYc7ESFvRbEurbSkFdudWuT2kQ3A282q4w8FW4Dmm2VMi7yWngmPSW9j7Unnn2",
  "key33": "4JgSrDdPmLzx4LmfS5efMdrDgxymipRhAsKj2y5DGiM7ggfgeGBeqhhFbzVgQrdJAB3eoryxe2iWkCPzE5xUVwZw",
  "key34": "3WvJCVW56GuzRN61nWor597xbMHdAFAJjyyHqHMPq3r32w25MeqWkA2VzerxqeQ1CwH1exQ2QfdPJEuCNgwkuti7",
  "key35": "4EPXiLGgwpsi63r5wtbb85HaRybP5kPtWB6fkqEtifitkQ6jFZFs15iu6zznDimXqDFBKoTCFQESYGxxMT7QYRyj",
  "key36": "55CwXkNPuECkUSzgeX6PaEpEAq5KKVuZK64vF2wcdpdWBYabREAsekehdW2Dnb8QK5HSMHY1n4P3SaQaR3uAJjFW",
  "key37": "2KeLYTnQmj7NJk3udKbzaL9sLBVk7wWsEaz6gVBTp76JKiKzBchr8qhU7wu3zWpHiP5TVQhFPhGeG1twadpT7Zjg",
  "key38": "2tvDUQqDXvwyCYmbXRgieGQsReBTj6LeSZSWBFzPMBp8M131QGhHRPJ94mz8jmwtAoWBRwpmGCBNXnkENgLRTFWo",
  "key39": "5BcHxF8Ug6BPeeLb28SbCze9UjJTuezLtCmcJgcxEKgKzsU9N19qwde65BV6vN3bEGgMNR16qoBVT6oAXHwuA8uS",
  "key40": "3A1RXvhwkQhGAJgV4fRs6GxAofcFZjQjXBRVAfkAcerGRSrUZGKXqQKPu1xTJWUcXfvAqfz9Dc3XJbx2CrugH3xy",
  "key41": "24gFsjLQctns79hX2JWbXcc5aTKEV1fQM635M7AdeFXA1h4dthfR9uEg8LchsfB1k8nfiPRM9rT6b8KkHWSxGzwP"
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
