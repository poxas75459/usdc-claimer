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
    "2JkxPYnAzbESodcBwZY98fhw5qJWYkZrQpG4RcWHTk9YpAqkaCMBmeV5uyRgP7yLEns4DZGsvbpTYRevwct739o6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ohMadLkHDjxQ1FhTgWJy2iJfG1Swei3DJn9inV44abXcKQu5NVkVc2PsSVssF9N2VH6KEbtkXyjhPYizZ8ntVyA",
  "key1": "49LYYikc74gv8HBaUwFv81EN8EnAY8iDWC77Qx2UXtqJdepF2x1p9trX3Kcg7Ja7jyp3kAcysdcHaitrsDDHtUZp",
  "key2": "5PhqGLmBPqsP8ik2CyzQxG1Ph2TWPmyGPP6crpUuNKBjhytww4aw2XSqEsW1tBYUu1xXE2FgtY3WCDxYx5yuU4iV",
  "key3": "44Hgkkx1Qhg5NhHr8YAs38zG9qbJrUPubuudnykjmNEAP4jAgwW44REuyVJTfYPhbgc3Fk41cymqDx4w4PzeXFy",
  "key4": "2B6LVNm7wBhKkXXRneAWNmtG2uCPTQjpqwK32jcm6rwFtgWDeCy2Jvek3UzLAJbTLLejMu2JmT285tRuTdVDMBeD",
  "key5": "mFGgurywfDzL4QV8bcCBwWEbU9kQBaRSAm1VYketj8CH3LbdWRgVD68KFKqVya4TsJSrCogK2LK22TcAyrfgAM2",
  "key6": "61Z8TKbdUN7tej6hd94xJdV1yxZnF1QSATBzhAfcWxJKyT7TFnf3EGDHspnmKsZ4JNkeNmi85hnXn1gBK8gddY9W",
  "key7": "217fRHZEhnQ6DEdBbjnyNeNpp67c2UzqT2ga5qNZgFoRP6bto3zGWRVzfZm8qHXfG4tLkAdsb2ghj9NcWfFpQxiJ",
  "key8": "2Hu26pykvNwnUYUwAvVc3taVkUC3pox23FET3e5QBN1cym2azeVCvM8qQN9hpyciMpdnLDNeSC3keZXQt39zH8pk",
  "key9": "3UARQZcap7cxWNQqwHTxipHQ6oaXBs5z7j4SX7KCd5PiGC5PuYYyJA6g7gpSj5xBURn3jTcQx4WogB4RTZpESGDA",
  "key10": "5DYA2MDGzTJDFyVk7cjk3ayteycrhtLFQeyyxDHw794FtRvkdgC4ktojRFstwv57VWXGL8KorhGJZ22v2zqusffm",
  "key11": "2DRbqXC89WftGZvvHdF9QS2DwEq73NkyXCELVWLQFyGFDZEYcfd4REbHeeQES7ZuHr9Ths2AhKMY2DcziMAACaUs",
  "key12": "5pLecvheu1MQ1GebBNHN52ceh6o4bzFvMrUyD8PSmcTXfD2S1B9E1Jq214wy9eD93iDHqjegnNUWKWwRgLAxaVtE",
  "key13": "HPmGg9SLM1RtyKPFfojCvCxwLg6TLfJcYRaGFzLxWbALWfL91rfye8zqteNScLtBG3dLhuCZ51YAe96UPWd4xnA",
  "key14": "2MEe5U3YF8EY5V2Wc5ZBHW6adBBU8gAVbvezQjbsuEhggnGnckQPpMvK1MMwFT6a8HfHLNGbfTSPAg5q44HbN39a",
  "key15": "4LfYxtWKXPKCF69kBbM77kXNfXxfLi3c6eJFfJWrNcLfXR4ZxUHmWsWZdZAEtxkK82ptbJJAEREFtFq1EZDox8Z",
  "key16": "qg2ESLBzMu3s4vQJ5DKDaUQZYGiUPxPTMMBaeFNcBas3RdFj3PozksH3XW1FN5cBP6rW9mbgWQ1cjUjRzghxVtW",
  "key17": "3J4MvQw6KPdaVWa6bTw4SPY5VDjSzG2FEGGANUtTZhRN38a2aEngTcdbrVQUG8gUbrbVH4XKNiCtZWmqHmqjP8q2",
  "key18": "3i7xnAQwdC1KrdDqA6ELNuSeXLLqiYdsEsUEpSNW7kyf8xwAj6CDsENp29aiYEWYwuVC4Vq6fuqydSt2oSZqn8tE",
  "key19": "Qrb2jHaSHpfdCEedj2Y2CiGzYun8P65umZAoJnNo11JPQFcZ6cegm6CXRywCaFzgTv2HB13o6cgkU2a1K9239p8",
  "key20": "4RY2oxqWKsFpyfeH8Jf3wRkBvM7iUBBHsFMXeDeoCGMFdRr1MRoKizYTTujhJmCEv3nQeASPsCv8LT57KyMhJFMT",
  "key21": "eBTvEGPvjo44QWoYK5YvgCcvrP7MyCaRuex9rbMVmzrt4LCojMpGJvShcqtptnEPE7eVhrMuZxNDpTvaEnErKjS",
  "key22": "4744q9bLgz3MgEew2GKd2gh9QoM9EF1BU429jLFDEGwkJVgLt7syhZ7WiDL2Py9JBZMRXhmSopZ7jD6ENpMWBJFt",
  "key23": "2E1PoAbQq3nfU5Pm74xkSHQZmAew1jfr3yPh9VjbJSkkkHgZR9j4XcVcgM8z2CyqcaE8iHxPu81zvDxTB96ZcSNg",
  "key24": "4RyYHWTbx3iuYinee5zhShF1iqMbqnCqYGFpxQsbSDt2vGMUBHtBppQicxdDicWC1LZnLeUVFNzjz9NRLMoZd8cQ"
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
