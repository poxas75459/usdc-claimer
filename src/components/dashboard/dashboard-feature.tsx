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
    "46ToYYVAPsJa4pngX9GR7kbVqcs3gvfBRyy5KgvBKoD1vqCJ1wZpSYKe6sMpjHmeWcoZbr5LbD4eNfSDkhHWbrCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xHcsRcbbyAAK1z6hDsuWp7aehEgNGp9aGQbW7ULa7pQtMLcSBKwKX6kFpJVhBv9MzywiLf6HgWaZNU5zSaqefrA",
  "key1": "23VxrUCDjQkfQC3VUAo3tyYFew7Sg7aLbbcPhoaGCESZrvAAThBZjEm77HRjpi7CeSx3g9i9ZdKjph5SioCiEfjV",
  "key2": "8cGeLKG5zbhLadLi1F2TtzR4yt1cWztSeZArZSnsBN6D5Jhud4uehZdbFfVi63AgtfLeek16hXizH5z1jsbsTz4",
  "key3": "4n6o2WGXhGDvVN2YgNizd8TPWhfX6kHanXQQ5A1w4pZUJBiv7q8NtQV1KqMCnBVo91uQkYv4ZDEtW8h5KW9vED5k",
  "key4": "2iTenfq6Be8DBbxomidLegvTgffaXpiueB95GhqX43hyAkbPoyyk9LgwFmuC2teFATiiScqLEoC7fHuqBxKmHQcy",
  "key5": "42TMS9XvTeCgyS1jDb45qjUnP1h3nfjLTjtkdVuLdcWtqpX78xA7h3pYd5rE2xCvuZh4qXh4QyCe3AQJ5L93LVRr",
  "key6": "2FYmGLwPvWvYTAZRwU3EymKUw1gSzqc7ERwg7LPQEeFgbuR9zamGy5f83NMPxgri2b52qaJwQaTcFBYRFAuhoDac",
  "key7": "raWGTCSHfVCxAGhgjSgzL3QNTeUR2eHTUABzq7zJXRcRKiDPTz7jb7Rcb8WCD5yyHGd2KJ2txUUxvBEUi5yRydc",
  "key8": "4LznFJ9mFX8ZigJ3q54AQkEuPvdTjzdmhJvHcZXSGVoQ4Z2SyeE98irwpAtzTTEXm8pic2B65UXM2T81vubpChKG",
  "key9": "3VhVdYJwHh6z8bfBMpS3YcPntUwNhLSproVDNCoob7KoqmaSMinsn7UvwPsqx7nd2gHKayAxJJBi6frBJsrj5VZ3",
  "key10": "5Bu2sPjhjyRVFDfspfw7Rz87vbYh7SYdEBZWorhoHXpdMgZ8mrg2bgNkFYu9rD1q9oCWHj3h4y2Y8n8Ygfns5BwQ",
  "key11": "626TWerGomu3FUbSopXQLqVxMVi97CWfgkfLnCPsVtZhknzYaWZLtFnzUBLW43TQA7f9isJU1HCs8uT2Ckn92xWA",
  "key12": "4dx3DgJuhoaiCJTw7MEjaZc7Mn1SURX2kE4AhHWLceppYHsuc6BJ2Re3HQhshn7usuFnKUaroNRsPYcfT6tW7WZk",
  "key13": "cCTrJuAARapm5XZA563Hf4Lyce1qxaDj833yNreJcf2FW4budJS3nD6iA6BwJRAZxSvqNdWQiKmsHXJCryZQ8jf",
  "key14": "bviitDVr4UawvVoba2DW51bH9N96vunYiUJ5UbFwaZ5YYG5qADEFcHNnTaVC1K9QVFjEFsRKQZKMGXCzk8cSwov",
  "key15": "4T2eHAgLvihDsvmA1cYFnpyVuH7tuxUuomvRbsD48X2MVjxhdecYYNM7PeWMf3r4E4eKTyE5CJY6HGrmQu3qQhX",
  "key16": "62VEiMbvs96YxmhUCMWzEwZfvkTxW87uou5oJdxStsYQih7M8F3jNMHDFwj5bN47xBn15m6SkTQ8JMsic95wzsqM",
  "key17": "4Kr9MqekCpR6EKRBy71CuQ7GjarwS8WAeitQKci6Lfrzuou2eBzwiqaGMGsPrnGTBn47HfeBf8W7jYTPuuXSaWSu",
  "key18": "4jSgau2qTQhdxjDehEirSgtpyVh3YdUgbpHYrVmKW1W9N99DqpqtwAYKLoxsCykqiDrq9R5M7CPQFDnuaV7Mt3e9",
  "key19": "3zF6yMHvtbj7xwvM6rJ8e9toMUumX6jrwtdBL5LY2xhvFLHEkDAU3jShsB4YPz1KSHZ9eeDXd1Y4ndGWs8nZD7nb",
  "key20": "2hJxHAgeppqP6CdofZaJsAcFNK4MRptt695WfzR4ETVifsKgkGhmkBjJKSwbVfvgW15V1MW5HSaExtUHje1yVvoW",
  "key21": "3oSzGf2yMBmK51p1tCNCyMXPv3fKVHS9wBUyokt1QUmNvgxXCsicmDvgXB4bXYJMNRo2rjXjyXpwXSZfmjqH2rE2",
  "key22": "3vTBu3eiQ1mh5vZqYfDkdRHD3LhbDTqycW9s2ytLudPBvJKgemahQAr516gSpej7zQW1ifmpHdeJwUW9fEDDxAvh",
  "key23": "2NapPYP1tfTHvZA7mtdNrEjv8BDsRAF16kbXaMG111sLcPzTX1peBEyhR3zap3gNnmYGNSvzVwEXsk1yMWkcJbT5",
  "key24": "2ZTjKH6jkaLJ2jRM149xifDhCn8CfjE3Vjn8FbsdQx9TnCzWmVpDqT8ZaHuyTunXPZqr1Xe7s6kDUjwRVWXq2WsT",
  "key25": "59pjVZNqgi6CmrPydAPn84jUBpucSbD5LFetpdCUxhTbjAy2wqKh7faZX3KYvHkthnMWNxdLZy39Zbp6eBuhfGL5",
  "key26": "5VPP3BmbG8d8hfuvq4S1CcEgfqypfibea2y1KW2vEUVx2qS14v64cvyZQ5YDdGxa2CmH6XNoUxUqWr5xfKsbjZTH",
  "key27": "2Gj5NZLPWKBxS7ufhNGpm1AAD8hRgxoUErmkUE5kU3Aog2EXjWrAEQYgaQNwDqoxEgCGQN7QKSht8u3NANXsoc3F",
  "key28": "6f7wvJg79EA35mp5Jxy2VLXzs35vwoPMDHZEG5AwmFniMyZyo6k92bEUJPRyVvvCMaBCY8gRDbzzVYW16pPtUaC",
  "key29": "TVvviRmCi5zNva9wW1xBspHkNDt8z5d8Zp4M4QJ8DSxSi9SU6kZyuYhU1Pi1P7V47A41PLSwvpWPMDuVqJhj1e9",
  "key30": "5CWsYLPsU3WW2sHydpW5dHfUa25feLTAtFTHyB9Saxr1YkUA42y8BhUjBFN7us7rwzHYB1huNqaRDpuKsX5DYjCQ",
  "key31": "2BL7X6pb6n7wJZBAG4ecwgkfVm9KkFnga9U1gUbC6XuX5jCNVfUtEiH27K2ZxK8XWu4cF1EGFwJGcUf8gpfypJaU",
  "key32": "XNrtW1pThhwmPT1RvBqnBrV43PqJEThLPvLo3dZ9H4A4U9g3smsmvXBUC5aXzAFzgxBXZggwDE5BbBT2oP88SYn"
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
