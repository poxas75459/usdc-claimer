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
    "vQoBsYvX3PMx4TBCLVKsAgQydhQyG1snoUHW8HDY9jpqb2vZXsHmhhQVs9aiLdphNXfLRs8RgCuREARy22Ei6C1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pttCV6V5YR77E7NuxPuYZCURGnH1sos2WnGCxQn7g9FoQvmXbBzD8ZM7MztDNCdzi7GtcU9stEsVaCvDmYBb1uN",
  "key1": "5LR6zXLLTkdj5K4LV8ZN1zNB4dWt71KQw7PmWs1u8UnN45dMovZhZXxHS4nLy7Jb6foV26LYTzra3LuY4LywP1P8",
  "key2": "5jtaYBpYt8kednjvBsfWCoT6Gk7etsGF9fKGChKF8nZbZoCEXK2AtUT93v4ZGLn3JuPu7BXbpey8Kit8obNpvD14",
  "key3": "5XXi65wRNPvNKMUsV9Yj5h4nhdmoBK7W78JCgB8Uv4rNvdRcVvmzpqtb7B7yHHW6PAdZ6ZqN8B9L3qMZF4LgFZ81",
  "key4": "4eBwCEdhzkbsHRRWxFcZULpSdSdv1wutd7yUJvHfHWNsbufXDMftegQTFhVPmYjCLKfn8hJQ4LsUC7Pqz8fZU2bf",
  "key5": "39USJJCK1ZbiVWnYGdP2x7cVEzT8PWLQwYHFRzcNGejMqCTU9otUBJZJV1tqEVXk6Yv6VUTQZ3A2FpMcvz5LfXjb",
  "key6": "26aUwRx1QTnBaZsoGC85cK1BMChkZ5S4j8jsZC7yt4cX3mLuDifCqkpRvGJgdFRLS9Vm2suhzYCyATBHu68MZDHi",
  "key7": "2GeuKtRHqjeZUQwznRvf6uvF6PZZcuUu85bxwijbwoA4WqL3xZA2dZQoBT61GjiGR77uKd3AqLJ3NXt5WfA6K1FF",
  "key8": "2Gz1mMfwkRwSREuPA4kSHnpNwDe1sMo5yEMi1UoSqmHZKmt7g4pigAXrLTxwhHqW8KdDifnCqB78XN4MnEt29hJf",
  "key9": "35AkemL3Vs3yLZVJp79ycJXgJWzz2YkKzwaQLs2mMiuWJbaAytuomMJSC8soxFqdJBTPS9HScL4gjLJRozaRq39Q",
  "key10": "6kZLMdWa7SDiKw9CzSTQaiTnPCjV4Zhg2q6GfrzAwz71g2KKLLkvN1SaVKwTsM6WyjMbT4H6aFSuNmapZJuxofe",
  "key11": "3rYmT9WFENLi6dv8NahvtEeZL1wchzJTUmfAPuw3C126txLnesqjfJZ5ybjGQd1YvD1wMHX1L9trzFo2wHVAR9HL",
  "key12": "2kLLe6bQpFupc4fiwNs7r38svQjr4PYCeB6HVg1NYFUSWAHFWHc3S6g32iU7qUyVg3Xqyi2Atiz2DVFJYxr2KoXL",
  "key13": "3ATwyF1eG5U3YMti4MPW5Sev4x75hqLFzPfnJP9sYmH2JUWzn7GXvSWDt3wE2QG3z6yUzUKUFQUjLSQPe4kjPiGx",
  "key14": "2QrZHdjyyMeKYNvumDkVFVBHECmKhpGNaob4FD7t6qwAkycQcc9Y8JhVgkR8L6zDNbDPCgfHnSNUr22cHGC4diNd",
  "key15": "4NGrRNARcbuu691mazrD5PVGQWNacw6hxfXfuiJB9tAg31iVUfMtgyHfPA56dLf6kVdSKTwe7ggkRMw3frqsEc1P",
  "key16": "5yPW6TCDSTGspPtHxi5vraxKnX7fKhFQhJ6eYiX48qJDt72MsqQbFoQ8vADD1HFhvdwbn4BwToxN4V466yKoYoPF",
  "key17": "53wwR7tT34CHpPMSA9svk2KGp7agK7Vgz6YE8RN6bUSPvE8NwtFY4yHUoE47TLYm2jcidspVCnRqcrsbd4W8K9sH",
  "key18": "5KyKPghnw6xVTUabfZq177Fmc94JtE8Z8uLJeq5Mnu6K9dsqFv3j5sHJ6SVY6jNVd3iezNDfR2m5tMRiMGxz3YZj",
  "key19": "4dJC3457Nev1tbLzboHTLeb5r2xe4gkTkfFDM3NsVzuhRnbv4Bpd7eU5oSFUEckxXZYmu7AieTZSCEMwKRQeKdXZ",
  "key20": "2Cp3BzmdYkbbTELyo352weQ4rUS2fpRvgJF9BJqZCM4WZx7p7dGM3LDAG6z6AVu4cJCq7naw8rR7pNSa1Pf96eRR",
  "key21": "GbDGVWcKVqfmcrWiMhWTS8mEV6yvfGb3eqXBFcKQU2UXXkeHrxi2ZiUTJmEeK6B2jqqA8AYL58oomQqZUVgP14b",
  "key22": "4VEYM6GqVxv4ALtfzFR6bBvF1D6zutndAUHGuuHdw9FPDyAUurXbGPSJVxfcXKefhcRxMgx1oiRFZ4GzoKaoLQL1",
  "key23": "5bVA8rYgLDrNTwKA4GnK2vRD5LUjeAi5SYuoEeWiuvn2rsEaoERRik2siAiTkZ1BHPpaQXBf243fKFbep8JwzbsS",
  "key24": "2f2iBnAiBznEC5JjwzcxsdZYiu3Qp82U7apKz2rHEvwndbr3RqPbyvVZKrzRWQdAEW7BYTKy7uyPMsms99nBbLkd",
  "key25": "xQU6EBU8M8acPHzfGX5NL4WDHNctqSnf2ZF6FVSbbD9GYnZubrGSFSEgfQtig2QepPa5kDCiwKqYnThnxnnTUbg",
  "key26": "4Hz5DEVNtZkSJhDXNsKv4e5AJsfoP78kxUY98a5wnAqBUpAeLmFRxtyPdE4zxhy99D5QLwo74nmfCUJ3UwJLEoXk",
  "key27": "46Yw3K1GbJkXbqCdJH5455CJSsHowEQ2NQVn7jNZH6PVUTvW3zjkuUVU3SMhG5ih8BEEKR7omyJejXSQdYxzJV3z",
  "key28": "5c3UhbxqQLJpzPDsCjw6SSeabMUVatZzkpFpKjDJJsvKToRfcqvJgogFNzUZer3Dm7pdQ59QCi8w1Fbp3ADszjkE",
  "key29": "AFMMdgqLQZtv99Xpn9oEd5odXEuAkgF7DvHacnhmpduP7jZ7aPuaqTdsXrFH422JToMAZm1sZQBQNNecMcVCGYw",
  "key30": "2ydMNMGpSeiXyfuCgMCdoQM6ifPf1MzfWoLRk3urVJuzVxu9M3p1gdAwNDeWu1BNssZFaxoLxxoonY3LR8ksfLZA",
  "key31": "2kKXAsqBmspMr4qM9ziWMX7vG5xMA1BtKDD9UKTY1KxXw85pYCc43yW5zdGudjRFiYPsmqrQs33aGHe7tnaQHQcP",
  "key32": "2tefyrGvVCEDJNqLiYRsivT9sWSufYKxkWNN5sxJnUE9YpFnVY1mcG25DGba5sCmCFB8SYDcaSR2JBZvBvuYLocc",
  "key33": "2mD2LJSs3QjZqrcPFRJMBT5TvvFhjavjbQRTyd9PuaMzv3QQRx9rXEg4RygoXSHyPWcJkNw1WgVJaJSEM1k7rQ6m",
  "key34": "2ev1pv9brr73k7zfS4s8aBggpgVj5v7c7xzjCkkHeQczizJbMmrxaeFewD2va6Qm1W8fwJNbntpaSqnzx8Y1UwYQ",
  "key35": "2NtUUZtHk78D9U8eX1rAHfRFZ5xGRb9Rc2wx9dcTSQTwiXptnnGWnG8HjDPfAEwsyknkSA5ek2y27mPM4XRyYfo",
  "key36": "5TqBt8DctTwgjwHdsJsc2Y7bWvUqrdF27PyT5ZUU9sh448rRMaRrto7nbQgYuAAaLcb4v38dK8KxbLTgsTAZrpaH",
  "key37": "2o1U17criDo837gLJ4dkvFHmvFAVEDcf9kmEihgzbJZqzJ7vjRJoZ9Buc57P83TTMjLSS8iyRZnZNAvLB3Pr2rW",
  "key38": "3pFy78zo9v5yyymbDQWZm1Vn9bSJYa1aqq7RvQRmjUDDyVer3v8bJZwGRffXc4go1GG2ZmWjxC5gzqjU7m428V3T",
  "key39": "4K2oiiqFaizhZGJ5RQC3DAwdPHkPhwDd7GCCBs1xmxi3t1NnvoWMiWtA8GqHhRpQZrmeVCT61gkMuRtyb8HZLPSu",
  "key40": "i2Eov3vEEF8yfDKpzJgugMDRAuiU6Szc95GqYH3RdzWMG41apmtsfTbeVCbqT5nBnVzGRzqRYXPeMtymqXaGzM2",
  "key41": "4hqfnvEsVbRB5sQ8RGURHANcb88zAU83RfCefGcZyqJNj3sBRv5JNgz5mUsA46maewnv1DgjP4SzLK9Lx1eEiHXT",
  "key42": "5BSLSNKKw2xtZRL3hyxpe4XXA3iWjdg4kqS1vrrwxuLzFUU5sYeDdUuNnqFdMEJD5L5URkPL2qpaT53wmmsAeFcS"
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
