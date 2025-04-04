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
    "rA3pyXcW1HVHY821jXo1fRCxVnuXKXP4qHe5oLbKYPqPoJj8iCAFX6D5Kakwv5JX8yaddVnSHvkQLPhfwyBf6SA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45JAwUE5zrmSfD9Q18fC2xSr6ukAaWAZDuusQMUzSNWaV4QRAvaMw9NFJXsyEmk34iE2xTpsoBEmJL6ndwgkgg1p",
  "key1": "5VadtHUbBe9j5dheNW6WQY5FqaUeG5sdBRajFtcheSK5nYNubUfZkmsBmYCh8aSKCXQHS5bgwKTZBYyhZ4HZG2qq",
  "key2": "s89GRgY4GtM4eUUcyhWtv59FX1ExJH8KpKZTLLmF956qTe7ErQ8bj8qAvtY3tRXZCQqNk5Zv3gJ3YbbTWqRSwnf",
  "key3": "dC8WAycmL3xqJ71YLeWdQEQKmZfrQfHSJ7eQVLRnWo28ymaLzSxTEnpVuFNbxwghe93pRZ4heEtaLVbSkjDCzGs",
  "key4": "4ZzxvbndKmRnsonZqe6yh2GHUs1SHxgL7RNXHMDJnnkhjFyD1Y7JCZQBuGswzsHit9pLNkp2AifMTbeBwwQtXiTq",
  "key5": "5ZLBguYJv6Sw22nFNuAXQpdkvZ7K5XFtojafg15eXB9PH8v5ZHrNSxpynZ8s89tzMgVDTzzL6b73k1rHNXZB6xfB",
  "key6": "4ZUykLZuohhhoH5M6LWjzMnB2udPNNZZVKe7tPotEa5HYGFQW364o9QxSLk8sGVyUyM7nwVvzvokFREs7GjtB1y3",
  "key7": "u3rFJk7bT4rz9nfRx8isdUzt1xKtcExbo8diDf89Fr1tki1jcCBEvdB5DMsa1yHNExUxtEz5nzpFPtYrVDhV4wq",
  "key8": "2Zc65cTeZf89DKq7fQQw7zJS3gkEtRnb36GE9ZapWEe7AUywMnMVmicKM2nuaNiU9MbxGcaUKoeCsBmRqWBfVFZU",
  "key9": "3JUfKZCZ1pUJuFzAZjYtCwnupCL3kG186DFP1ptDxAa681cRE6Cy4iVDPRr3Vg2uoryemsEMcMaRjuBn2ELteoeY",
  "key10": "2YmYaj6k1axfTRTnFzELBAjeu4wbb8U9ptouVrUhDrWrwUyx89BGHcVT9sPHJHM6AfNLwjh1pY7dxdgdq6UH7f1u",
  "key11": "5gDDwCfToTDaixQV1zkRyoH6xTMbcbFfJoxs8rJkRbmMn5hAdEBnAEikkc4fcyFZqsWVmTDEJwyNZsYM2vpwgVio",
  "key12": "29rvjsWCSKeFv6PxTzxWNKnEgVKWJ2Sn5jhMCDFTTQZBC7mp2h7Dt8dWYj4jd1TcxX8xKHNsAuXcfa7EUxknL9d5",
  "key13": "jCbMThyuyCzTEZ9QFRmEB5rxD5TXXv8s3tPGvcwRqxe7PMDJQ2CE5RwXM4XjLTpJEtweBPyRCUtCsHjRG77rKj2",
  "key14": "2kAmQ4CEaR1CK2FnA9Sh8VWesVyqkLLb1u91fNj4SnhRvYW5KigSHDZEQtY6sd4zu2RwR2i33GE5HW2DMt4JoCg5",
  "key15": "zUZeXpLKow6vZhvvhpXD743kd2Vmc6gzrjEuManAtAL9K9GwVphSUY37VLk9N4jnqWvV3CAu4ZR4S8v7AbhgD7E",
  "key16": "2A3NHJfJbiztHqxjBYVkyeA1LBuC8m6HXkfQR2tSX6KHFgvAeoFm2JgMnp1KxTbSK8aMFyjLn43s8fbBc1oHdsXN",
  "key17": "H2CLt3DK9gWWctkgziBV8qkoxAJLZT4HcDZ5KjaHEvhvzqsQRCg682vSubMiY9eedho9iYmqnoy1TUN9xp9hqYo",
  "key18": "gL1JbUJSgTcpTHcffJnd7H3RnN6Ci4tU4TwMz6vBdLcWo4hCZ6VsBy7rGdUXqCdAtS8Q53NKdbaCMESwPjNNkwE",
  "key19": "2TpeatNySAeRzkaZzTcrarrSMKQSg4i4wG2nEKF1tJKku5hbUJFGdimzNmyydhFqCfDF1isXVhCruRC8frGfYEeH",
  "key20": "5AeWqNQGgRE6jdCe2bfzVk4wyViskQ5xfkYtHDpfbuJusfLPQY6zbAHvMrUtxSauyQxQczpjfJTtQTSLpeG7oiMH",
  "key21": "26QdcEzooL4nNT5cCKWhexouoeXU8z9wPMkff4z4Do4U95Nj4EXWhacdvuUkN3Kn4FTrKMf3SBk1FVvfbYeh6EKf",
  "key22": "52nYJ1PjsKmzoMKDQ5XyeTNDBz54S1JKQrTPtVFvKZoLx3vbEVAXyWTubf1QtihKz23KE91wF3AwERFZVLy7cs7A",
  "key23": "3ZumuMZprELqz6J1V3DKyxMomrrt7WxCWKQMhf9EzU8suYhtakrFCZF8vw9GKuExh6vFrC7WYofbVQs12nWT14Rg",
  "key24": "2Xs89bFXS6jYgSQgpaiLCZYgYuKiNtW9Lw84GVhiEz6Xdqmam88XHHBm6dSScyZAXrj4VjAqMWPuWR6bbxdkdT6E",
  "key25": "4q1h4ZRC4hhyaSWK1SUcon7bBCwBfM1KUqR5E553eRWZm9mXDyDwmDJCk8YhdKXwRZCMeuw1Hn7xMhPwkF8bNZ3H",
  "key26": "2Zcn4hFws5doPB8qe4zyFxcBZ1txUpARUJ4Bv5va2JzAvnW2bMfkcHYU11MypsjHb8PdPk5oFVJ66oH6JTssMP1s",
  "key27": "5zL7gSsQP5MyQy7BNREYcsZpbdYuBSS9rDtPaTJKuu6b2CCfnWQmztnuWxt5uiVnAqyBBKBByxraaR7cwuP98tK4",
  "key28": "3yf3Apo4nQRVS6G2icPRxeTwJAVbzEFJNS4EZWpYqi7PSGGoCNPTb69Sj7Hck4rf9m2ykabhJ5BERSspGYrZeWu3",
  "key29": "2Vn1GC1Ljk8w1m8Jhi29wkMMXRd26F5Z6tdfyGhbo7t7QJzJauqCPvfVLnZg7jZ3QuLcmvz3ZXFXKQfFRoa6gAjn",
  "key30": "65pdxCsHsESdwTucmSFex76BXdZaJpuWF1UayTRWfEtgm2kFg9J976o3nwi8LzqABkYvCFyKEmwvTQk82MKdkc7N",
  "key31": "3BnZq12T1WvR2ECtboYHzWfmAWyXt1xQnzw1L2aoc8rzpCtY7zBVjKaDd3Eq9reCzXBGtXDFYuMMq6W5ajLprjiB",
  "key32": "5WPDaxPbTiVa7zguF8VvCYhRuaDhQbeGv1V4nYg1KXKEdcKHnG65HaWmu1QdAjQJS4Hi8hLLakg2PyGMRvxmekP1",
  "key33": "2repRTeCPX4YKgUvQQ6ZZ2TTRE1wowtbguDL5p21Tiu5WKu1BgPEhPSU23tFVUQFSybAJM88pBtYM2cWkMm9W8Dy",
  "key34": "5ZdaHJB4tfAu5FQ8GbPqBCXEnGpBHPPacme7mBaJySF4DqQN8jDeSLGnH73963gMSDZpf2LW9nCVhQzvTttnqm7p"
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
