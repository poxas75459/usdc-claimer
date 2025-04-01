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
    "4D8dG1eWvjoq7wpvvGTAyRoLpBwgbdfgiNPCNTH8LT91SNFYQV8TNTaxEgwgf66rKx9zddcKxsyNyY3c5jYZdkd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w3E3eCsT7muw8pGcbsUCTMeVD2pZ6RtQRkivZ3rfvbLduYp8YMThoHRrNaDaQPYioG4rNaNHgBgEcbamvmZFv1r",
  "key1": "3b9AaaeKzoKw8iUiq897TrKJK9mYXLduULx6bG7oJQudZpDLHraGW67ToHUH86Jbz9bBZoq7hAPenVpZL36XFdRo",
  "key2": "2n1Nd9cTw9oRMpn2wtkAJM5o7vX2EtQFpSkMdHRv6i8cKRB1qdrQJRv4BpGnd6HQiFCVnJNXjuYHuzRWhHEJfxza",
  "key3": "5K3ptAFX46fKBq58w13azPgRczZWAt3Y9uuiw1EzdmNCZVrpGXEgynhL9LPvZwKaNgwd7ox6PmAuFR4Rmiz3qo7X",
  "key4": "4D1HNV7yzS2kk5trny52n3acjmE2e9SM95ksP7pd4kDxR9YfMrkp3UqRwdkC3GBzapWLrXrzvhS5gicbd9HJZfJZ",
  "key5": "2fnm7Y2aWqzMV3am1XvJqeaWpdKRS6Xm8c7CkLUoGHMLbBNU897QrFwmEopHVQZfZfQDZkpp7uqjKmktrSPnGXe7",
  "key6": "5rKnMFxKrGW6oAanBETVnc3iTQRrSEGMffhjrEVY3Bq12tDVmGqfEVaFtf7kTSsoCqeGcf8yETRu78aG13az69es",
  "key7": "2pfnimC4SGpR4dwMXRp1qX8gDo9nYPJnephCS1FEgTGZWbbF2Gr3BvSDWFxUZyqAHJxDPy3NDwMXarc95zbjfg4G",
  "key8": "52TJCMbpJbqV47VPvrKhzUJM71B5BRSgorqjdJNFz3Kku3xyyvNNcra8xdMkRYVd2NGcGzkaFrttZLowbGMAYzZu",
  "key9": "3xa2Y3soAmfQ9xTCdgsrF3u9ykyimFUk9DgkkC5RybNTwXA47X8jKHzyQRUyYh89UbDLrC42Wrmrk1DsE8UG2Jxs",
  "key10": "4HVF6Ucz7znZFCQ22krxeQqTmTfUUGGTszcMurXk7SXojiy4SY7eafd2eWUgertqywm4VQFxqH6nqEwMYMXRCfQW",
  "key11": "tLLxWajFYBNRbwS6J8Q1gBW3ueqQRp3sGZ1E8derqyFP9qRSdz7StVVD3qxTkRnRk9n1NjUgaCU1P2XERJsgH5g",
  "key12": "3cY6SKYZbkpgbnqjqoAobBYwxqaj3665TK61tBsUa4SDQNwjA2wCQBiNbgcCu3sjLxJ2DoWYquFoMzoh6LLPprwK",
  "key13": "3oenfZ9j8Fvs3HAP3j2u2fobANUGnrxVsY54jyLUU3oKV9jkFPCce1wbw3Y8YECUGU6L49nkRq6ufyqo6nFyaN6x",
  "key14": "4yYvzpYYF79oQtxUGQH7h3w1KQVRRSNQHTyCaX1rCPs1ekuwBZnbQ6wXMUemTHNAvzbJ7Bq1MDNo12jHwwPcmWcX",
  "key15": "2pjsPCu3uia9KGP6evRMXJRSRdteCmPeBnJAo327M1oj6LV5G8T1bGokj1eiiY7EGB9LAofJKTaYuxgYC7jSToxa",
  "key16": "456Xm8CPCnSDjgjFDZHjpCybUw9Xw9QoQ4yGEb6fccQgf2PpMXYmhkgmySW88Cani3py6ESftf2RR5aCPLZmayLt",
  "key17": "5rojRmJqQ5mb2is2dQ9zfkWkkzs3S5CCVYFByAreqtwBbTPmV4hgZ5pkD2cXW7rEKsBcnurmgmPhgqLHFDvcBtjP",
  "key18": "4NorvX3sZt4LBRCGMAFdpqmxjzuae1hEa23ZeR7dLRxLmSn294BkdbvQrzCB1kxTpJgTNgEnP3hRDZ21dBRZvKgP",
  "key19": "5T6sGZi7eN9VtQGEmxnGfDq8vQq276qSmSth6xK5yveGtuzCrJB37Qt644mQamV15DmrCqVpZXVyJvN2Vqbe5MN1",
  "key20": "2owDJMjefLbZ2X28eJqPYU9yKY7JFzFktJzqAVwqfH9b34AHmzTvzHW9XaphuVLkBjfTEh6nCFVKXR2GPM3x2LLZ",
  "key21": "9uvhD2V5AeExYjgcQkGVQdbGGTpVd9RSfWq7XMc2BuPXDZGLVGoGAvpsdNSF1rBVk1jocBZ2K6BKaJwyak6a5kX",
  "key22": "3kHdSiAm9T5EqVjE1J5RtmXJ76pPeno46UB8kmz7Rno5wJR66WW6uHZNzsWvjTVKWwCYNWbD6aLES8E8h8d3r91E",
  "key23": "3twEB6zfhumLhjG81AP9siJuP1o6c7XBAnsB4eVyTASmzZVQeYFmCcj3EkC5J12HFb5VP3a57rqzQ11GX8TUr8Rq",
  "key24": "2mUrTdFqbVoyMxaG5NQKz5S4upzDYmqkTsu7LBzFSoHv5et8QyCKhs2ttJdQ29buqedj8VwE5mnP4Ftn4XV51izS",
  "key25": "5ti4rF6fxdzAo4mwzzS5DWYD9C9v63N6f19yArvWVcwx2tmdhQ75nt8mTGSgotrxVbaDuoP3xCkt1ofxUtv8YhMH",
  "key26": "43vcttbig5nK3geiQT3vxNFsULo1bHSnv7rt6yEt9fk1wsK2Zkd9YALjg27yxL1C1cS7muRUJWwd56doouyBKzUJ",
  "key27": "3Dx4MeJg3jZsKFSm7HF85u3NHprwyMtDvvmd28DPDgwFVRMwS7Z7XFEN8rJPfYGGSXYmZ8mqJyPB8e8cCGRuSuDf",
  "key28": "5BR12eGiDijF4j7R4HmFUCHb1972GpHKfvEdaxzfC1d9NVsZBRqoBckV6wuorX5VzUUGqV3cP98zvuLAYwADpesc",
  "key29": "WiMGY5SRxoiHHtoNCjxbiFcxisBpEkHn3MToGUwg5E73ZC8PF9T5ZGizjiXFYzchTaoERnqcrJCBBoeaGMi6hoP",
  "key30": "3AX79oQCPNR2Q8PcBXUWVMiQ3njV69VLFfyKvcfkgNd9XAQqsJhExNc3UeAsAd7ShZFEpSirZGM66moRbYwNC3yA",
  "key31": "2sNntprx7tZUyuaheJvN32LyLohdTGPaFkasp4LSXotnwRnamgvGX7T9EcgYLxrs1AJhruoJZZ4mvBBWHymTp7pT",
  "key32": "3iqQryc5HRbadLbGthdaPJwzxVzduosUDz4xY8Grq51DVEUPhEiTJc5vMzEM2CRwpAUZx4ZGKpZiwK4qfjz7EDRJ",
  "key33": "66oPyy4heegueZXHEerJziHsz9zLwELqRCtFqXQBxiDPkuiYNtA319JS3uP7mFkPrEaNGFWTpQmdi7nKAYdRNohf",
  "key34": "yidowSv77dC6SmFiRvyyVg6MDfUQ3NFmkBza6mkDQif4NQibpo8ZYE3Fh5KBbFKys6BqL41fT5nT6LAQGE5gRRi",
  "key35": "qAjJAMJioZintwfMZA5TUP3iFFZuDeerv24JqHDhRwtQBnuGk81LAFLhX1LBPcPnZKqeGmULoNCnH4XfPn5WPR2",
  "key36": "53trfCW5CTVE63RZDQYkixuaW2yzrosk5F7kuEYEoZnMWbMWxbKW6ep4uiun4xZv5NNdos1mHDTfoUKzaCzkpm5n",
  "key37": "2gYFw9S5Xfq9G5ieG53DhbsdNXpNGmZ7xCPtGqLfSpd2KzHcPzFaVT62vXo7jFNge7oqdZX2Hao2ieUMvtjuMUdX",
  "key38": "4YhRrw9mYoKJGRvg1pzbrGnSQqbGxbcYPkPYyKnuBjwWcw3vmY37S8zZwrHZNf6qbcsvhWifP6bVNRGize1BAWBx",
  "key39": "3NhpeeJcgnDPzpAF8TACn8tLQiVMjo2i4XrCijNNqjCJRv8rs659ako3nJqtoKF48sbn2iYzyKkJQqsrTbYWJF6z",
  "key40": "2UzQnkFYvE2Si8Mn5oFFVBfQHSweo4TdumVHb3vc8CANwxoHmsR2zedAnG14eLhTWq2TRCYaPfuHAug1UBVZoGMZ",
  "key41": "3JZKcU9em3psFKx27hLnYiXFnRgQu5Ne4c1Lf4YsbGsXRUJyKTTtnuQRcVT4EQSfzAXMrwJeKXc2A3Tt1zYexrK1"
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
