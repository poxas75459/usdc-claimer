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
    "494iNRs7zbSWDc6dri9LoDMNNLo4RsGhrsrVinyXU42PPiHpFohQxbzJ8AQA3vHP9HXrYgaa39gs9GcUVgK6bY27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DDPAJhpz4LCa8GwisrhQRsGdeEdpQewvoHXk2uR7gFqYDpNQgm5sGFuWppzZ9ReDj8jGnHcsG4wdYLrevK35Cv5",
  "key1": "3wZdEU94BBJRLQeScaYDnCgEePcnhuRZH16R4GLRaYeqsfbHrG2G3V8f1Z9CX88biKQivBpfhh8tchDcznC9q2n1",
  "key2": "2vaTRSGvvjwUGo6gtv3Y1MckfCXTs6p5e9PWH525ruTTVhwRMmVDomiDPdxW7Zpjf8eCxm2Z36Z3z8vzj441QBMS",
  "key3": "4jGyR3C671vibqfqPsKx8zKGBK4fGhwSJyHUaAARjJBnKmpeEmvq2nCEAQRMSh52twu3SYe9sJC3rQkWkwKex3X9",
  "key4": "5p4MRuT742gDJ2UxtEB1zwA9jhpDDwDiGJhRoCc3GEZkffotktTacHvWwjm7S1FwCzH9Xeb6u17ynCXDrpyorhtr",
  "key5": "5PXY4qb1DJ4KM84LUBX1TDbwwdpniBQWRpUqp9ECqSAJknmgUv99EZ9aQf7Ws4PrHK5kUMxLJDzbdGtgkmU7cM78",
  "key6": "2ZWyhqekELVu4yxUt5B3YUb8sWo3NuAwNKgwpTY7rzCUemqGV5XE6ULn7hbkio3Udiq8ut5jHnZXcsuM7odJLhCM",
  "key7": "65PBdfpds1aiBR1c9E7vyw8LiBjAdv9j32sthPEHXdzUAXDqscEYpgp9VFfDEm96W5cabcSghpA86YCtrgFsMQsj",
  "key8": "yG4eT9bezNzGYGYvZhwC7wo8FinWMVyVniJb6HboUBYCZBiFVx5YX5yyd5SZCYQhKEqDPnbbaLmaHmJtaDVsqEq",
  "key9": "2CubKPSnTPo87HEGjEUUtu2nhNK4uXehMEqfHaBAStzS7BQLNPwSvvyMyfFmNmtW8X6tgjyxfbUhriLZoTZvho8T",
  "key10": "5nbMv5jJ4tFMS6ghUYdHBCR5Y4tMY47XNLPQb6tFnbrj4zY6qzDCtP6VxWLTzih8P39LwdppySFhLiCxPptixP5P",
  "key11": "22Rva4ak19KzrvYqtY1wcq6htEpvGvL5ab5rn2CokEVALNTgyxKf4EeQrfqxWFXWvT8oTwNSzZg2HD2KwP9SxsQ5",
  "key12": "3HuAbESxYRNHXmf1Uzkq1noWQi8dNdHarMnMpYq5RLsegQExF87q3mnzbZNf4a8aFf1SHuCjQvzGH4dVuDPqPT2p",
  "key13": "5WryPprEPstq4KrSJHZGdZ3kGn1W5FeaPXZ9gUv6GZnuGXX5m55ZwSosSBu9ZKgSoLAFH9bhfu7mEVo378jXEN4",
  "key14": "cTA5CzSts4QAukwSMnGpM6X3xvzfm1ab83K2tuQFbNPXygxhAxeZWB5eUi56SWHN38RGZhQHqHPYzL827ZmKpir",
  "key15": "4KohdhkeTLVa5b3tv2dMQcSpWCE7P1GscTGvNQcFLgx2h9rat9SZELY94mY8wn1Gc5gTowBUCbwxJx66AYKdn1RZ",
  "key16": "3Y6fvgvBYguEmc8tLR3mdpHuRJoTNi9YAFza8V22trxowE4f431Kurr9erBar2QLrqDx4cxveMzz94HapXvJ2mcZ",
  "key17": "2JD4npcFzvj2cmuyz19omVD5KPCPyPApqNbg8B6JrsieMYndPb4TihyayDwHr9GfnWLvad4bChdXMBZzmYfjdmi1",
  "key18": "2SWBjoiPUFoK7uZhgikfTbs1irPF9aVh7RpNhxtQUvZfD4qaFyXw4Sc8dcapmMbroxFGKUGtHAXFGHABF1rqRh7C",
  "key19": "2TRNS1yCtzx2Zy8ndx2qCj4tBCA8PceKuk7Tb6ZnbyTPLVsDHnJVLr3z6VHGwhDJKx6rdRhxs94gZsYLnR4UV5PT",
  "key20": "59Jakf3WGQgVrV8XBiBcYZ8t42rKu5sztLRzTiNTvwFerfaGZ3N1oiAmu2VrTKiCfAQe3qA1XNcWVyHJiBjMbhS1",
  "key21": "49mYDMMNm439J5qS2DqAVJYbRNX3GvKmKWr5ST6wvKQCLYMm8G64TXvEi4a2UMNL5zPtNFbbyujVkAWNNCwXEFZE",
  "key22": "2GsEBBq56U8KZHpS24VBgcCreM5Snijm8jDYwTMR8quYgYt161hCTQV7tikdGAfoWybsZvdKkAqNHTa1MmsUSgxv",
  "key23": "2QTha3kzbQvvZrdiDephV7xUAuXGEHmdz34geYTCCwgWPybhY8KSq7JT6R5t41x6KAuR47PX4ZxwsQJnyJgaq9ib",
  "key24": "4BVh2YLyuBuPHtoiE9BCCfZ4trEu3nbyRJu6q6emfJtftVbGDraLCYiUwt5jwzJpxa1vRVAEosgvZeGbGVAtY4W7",
  "key25": "3Gkg6XyxkH8hbi6yufGUrGmygfKY6NDM9kC15tt27P8bSK3HDLgH8YqeY4RQR1ykx2jAjV47kqNihzaVKFQv4Mty",
  "key26": "3sagTiv2w7WcJVwt2cFYyctCkvJ2rLpkd6yAhwPV77hpJh1L7Hvb3W7uqY4fRzFJDZiG29kfSGBukEY8V1SEBLic",
  "key27": "K7oBWjSBV2ZrgzXUGaR3vxu2MimjKw37uE6Ph8FWf7ieQrcUG87FoS41WkQaUKjczKY6dBC2P4gWL3xBwuzBsWr",
  "key28": "3fmQXbaVDeHN5XMykLMirns69Z73NcGJdhPKZFXuRPsc8s7g8kzWDF9LR9a1NmzdUduKWY9ngfhScsswKUZMrZJr",
  "key29": "4CxvU5vpcFCRSZ5WAvj8UnTHLANRLz2UKyEdE9PCNnS439vgTz5VxQKR4uaVFCppuVpgfeFBw8Yit1JXMpBREbcW",
  "key30": "2cm28Udtv2NeMpBbobB5LX5BW8mTxZe6C8UAXqCZTMxR25dKWhkv4nDxS2ktXko2vSFmNZ7yZU24YhGLvMQNKBE5",
  "key31": "41RtWKJEeAZsQiAiB9qhegHw5zewJjtAVeTu22GakTuBkf7491fcSFvBkveFgYP3vrscKz78MEias2P9UJhMHZeE",
  "key32": "57Dww7YrpLo1VGv2Qd1PLqH5rHsFcX1TDWoc7uXfdqTJW7Q1DZDUCTEuGBSPNn364Wdqw7bmaiXfE2M6cTyo35Nx",
  "key33": "5Dsn95kZFGgfgkHpQs2bpGGfv4Kv28cX5oVBbwZRJaPyJKJa35k1r2WuByX5nZ6QRFMJDsuZpUU8LxEigAzDoe2f",
  "key34": "3XXEzpqpvhGrfRMpy1kgppuhKAh5NvzVp4yde39aSw6aiJauA9vu5HfQUHcJ58QB82cSwkDhgUZmn8oc8jR7UkDp",
  "key35": "3C9Cufaf5gzCdeg6MfyyLZp3ofJHAPKu5Ki8ZRnmmfMCVkBuVwcBPg8to79bEbdBGbeancCmA8cnDwXszfxEYSnN",
  "key36": "4rnNgXySCdJXRSbK8UuDpguA6Vpv6nMZAoa4nbccThZkitHqh4wvL7axPoUQbZ7gV1UfQgh5Va7W2KKEzBfr7BSC",
  "key37": "4XzwhMGXbrnuwjr5fvuHSrgTHD1m4PBFnRncLVKMUxQBqNu8U1s6QJyTQWjRkSYJsFoxT4Ww6d9eKGgYcs9TaPX5"
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
