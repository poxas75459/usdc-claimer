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
    "pZb8W4rHY27EzvqParANLRQGBaaGkvEUxsiCmBPmsz4tBcp1syrUfahuvj1W2HS5vKYGKcqDzP9K6eEqP3QRVbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xt4b722gzKKJDTSG74GL4saRLuDnvWXqS5xfZPP7A2L1Zuy2sYpVZBnYfjBJ6Dpr6RgQfrS2cEGaxiFQuL1LEL7",
  "key1": "3uqtBJAMLsn65X6z1Nn7BStz2WT8TVjmzssaHtnLdQoBxYaj3ZNDsq8xAJDEg1m6nSMM25diRmriCgMngnTw71wk",
  "key2": "25cXyuBsruWBAWUPAotPXPsyxTA5VTBSzZWkLnpUrRcGBfuvKHEJBYwYwP4zFAvdNJvAhV5a1nDVgJzwhXBg5Srk",
  "key3": "21qryB2m4yxq14khUZUjExwjRrsTa8anS11C4A7eahpUUpKTWR8HZdShHytqUy6VfzaFMCBZ19H2836mECSsBohP",
  "key4": "4t4rrXnoJkkRjo9Z6tJED1uVUphTH1rKTPfRs83raJ6RBTtH2Q4ksFTUVj6VTwxJ2swBUX6eXTS5PvCJsW7kJRPe",
  "key5": "3VUBTRSMPwwojFxBfxAxcdCtiQg5tR6Yp5QMjiYVbRt264L3EeS9iheua7LkpShVRxjDDyrSf3d6YrcPVi8d7L76",
  "key6": "4P4T2QchXbTfe2vtTwb4hnayWgFU7rhYQY817fvifkvqNU9t7PfT8QTUJnuDfiS1JQnRfrxkcdrUjsbgNmUNPf7h",
  "key7": "5bfJkZeD34UtiFBP91pHa1P425oaw9LtwwGyyE93ZthfAn1DYZppMYVyteEjamyrnZbyR6DMLKYpkog1Q1TZUB6t",
  "key8": "5LRJywzvQEyN4M3WBtuCBW5HP6ecybuvg2SuLkpuEaWdZjUvraMSfhDdZUQSqWJmrZ3XM6ZKP1jkrqNcgbRmqdRh",
  "key9": "5aS9Mzt82oXVCU2DbnYjMQMYrRzmk3Zr986aV76Y2B8LDaAj1yoco9zAGyc4kC7qBNKAW2PMhG8gs6YfG2Cy8T1Y",
  "key10": "3huVbjqE2wcSjNCjNaQT1YhsKDUVdBGAvVNpgzYUBbokqQdmudi96XrfEU4LKm4k8m4LRyeJfueXTNDL84Pi9DSr",
  "key11": "3Kp1bgHXEAysUPXZBfk5B6ZpmeoVwXZWfhnXpcS9kZ2tJkMJATATXd3hC7NENSbKuZJkjDL4CinsfJvAB7i8aeTe",
  "key12": "5hXSE7BAPa6aUGm7r2ojkHYkpBKcsfvbaYSvHwMfGaDKEQzw4oK4zAsLE4C8wnyrwCtsYfnmaBvymBzwucoXjm1A",
  "key13": "61nWc48zdxzBxjDXeow66rf4uVhensXu2jJtFhUpRfP2Hif7eCKfhtAhJgM4cvYbstskMboBPiGJdShFDhYzwDwv",
  "key14": "4mthmHGjL4jvzArsqrZfTQ2yNuD4rFWapAgUZTSLRf9pxhwpmbsNsFJbF8UwCbijMjFX1RJoBE8jYnzQBNDZyTGZ",
  "key15": "4LNM5Bf8roHUkWCqussMNsBgeaRwUQ7zNhstWzQFAEBELZXv2xm4pj6xFvabMFiD6QQ2oBw1vuxDLsetU4SFjwi5",
  "key16": "2CWKhk4yV8Uj4v8Hsz65Au3dqmTM2hdconaRKCc827pQLEmk5R5NPvWjp7awFDPtVXQ6AihiH75TyPzWrWLc8KQ3",
  "key17": "4JXK2z65oMp89VLHP1mkjW9mDuDv9kvEr495anp1XfBic4GDg1hRWbScfPfPgxmzUJqE68VFa7KoaHCUzpCxxquG",
  "key18": "4CWgMapD8h9cBDgLyugdnQ31E3MXGeLenL5kz3jp9BrxoSQTfcsHiCdB7wsjwUAUg1nfa71nB5GzMjXCmRZWc5xn",
  "key19": "3SMRVQMk2Dqe5Drm7YzjJpzt2tk8xZ92pJpJpgV9goUfVsXfiX2qHZXC7kdmc6q2rb1QcyDLymXaBJzguZfhGSQf",
  "key20": "4Fn4rkBzUNcmUrYxtWasWVEvvXiX2cAmAZNMTvZqK5ipD3C6NJNm5E8rstyJdLxRezYaWaGxKuBqxXvNVHtKuqM2",
  "key21": "2RNf5SEUhuiVpzMC4htMxE4YSJtrXWi9Pf41sQWuHdhJ1pMxwgMxveUi1FnDVWJ7WTKoViENPiVK9RzfBxNtCdLy",
  "key22": "56EvQcrTmMe9oSuMQrnKh5yQHtzHr9m22i6mpmdb7uPvE1tucXGmuJrCu1RRjmH4XsZP2AmavHFwVoL89D7jFmFr",
  "key23": "56vt3XTTHGpG9KEAYM7Hxa642yhvWiEsEPhPmogryimDk48j9NEUxdHg8NLhK1BF6tuDsp52yimRk2sBZwGqoKiQ",
  "key24": "5Xw1uJfovBnRJiGdUx1wxpa2DHZbMdqn9BEgVrNRznnDxrZKqZNmEnUtoNKGfcU3HvVXPTciHXETvrQjjMA5N5Xf",
  "key25": "5KchcnXtJ8jACKKwhDKjcH8YSep4qSscteRpudw7oBBEKzeRj9yiw4QTbCe4dMtsnGfE2uNWa3bdA1WYb5mnz3qK",
  "key26": "2dFk9MNb3FFPDAkgYCV2z4kEkrrnTzdTGuTDdjQVgDHfwVLGWB5YkvVDcbrBPMi2fkTegkFm3ak4D3j9S2beyY3u",
  "key27": "33LZq1PYspqBEm4mxfyVM6TfyBXFiuWQ6SaSg2BZnr9Snn21j39qpZfKepbdj1WfVUBCveLuWwN4o2tG6EVR4d41",
  "key28": "5avMiqJaeEP2kBn3kJGb43naythdJs9TLVkE1q32TLW9RgMvgRkF1xtZa6ygfD4agGjtFNGMKuVCRhbfQwEpRaSo",
  "key29": "45dkAKoeXiQ6ykCRLNFuEMyWxr5Pht778dvrrxhyhUmxcMPcSUAjdC3SrqnXHmFvNBvDyfXUJKsvMp3vTVNNwK1Q",
  "key30": "3kjpfi8z5EhTjxZ2fmzpghDoEi2qpPtHT7KYL6LVd5MqrM7G3aX7dQsmEx8Xfwb24UczQWb7SbWUVYKSX4Cb7RVN",
  "key31": "3syCJCKTAPPiWyoyFpSPqky99R13KwLKoycnPQPicCCsEV1KpbLVMnoA5dWa8R9oSKX77xREHe8pVkwDrEcqGfw2",
  "key32": "jATZwaiUtBuwDqNM3HsV3Nt7nQyUGtUN4Gngkiksb5v5wVFWCca7Y2xngAsRgCPUfNYx2AkpNd4vcQiWJrJAkeB"
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
