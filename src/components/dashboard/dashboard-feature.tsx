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
    "2y9JwnJJ2VJ3bXYgwSxGEhJwKr9JomWAp8BH5QWb5BDy6PqEPBTUwDKQUYM2v1jf9tL2VmyksQ9ehBayrAzwYwP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VvatcE5tDNgV26ERS18jb6URbWp86kA3TUACDeuCyyFc2FaafuRMWbEWVfTyvXTZbEusHaURs9aoq2KXBGhLbtd",
  "key1": "4VkZXUf8Ei95NgkV6FQbDa3ytZe4i6pijSzJBLTcsAX3pDFXg3DLYXB74YoZ9emhPk1yEUjSSsyxGMagf6oWWiGQ",
  "key2": "2PwRxyKTYMQaBCHfYkDGxnf4WukkjeDj8H7XKdBeryefuiAJ2VJaYinUU4rw7bmhBVsPBRi57sL5utU36CSpq5Sb",
  "key3": "3ouX6hC7wh4wSoFb7ZjE8z8ws6mTpo6o8VBCQ7JoGA1mW2dnGCsMKxRxH5AfJvGrfpcU7SxBTnSoZv8psjMR1kwF",
  "key4": "6W7UnmYCmCBRTFrufyGKaPzghw4PTPiTG1i4vrMf8jSjdr5t5TrmG2s6opnY6UXKM25GbCTx2VKgamgX7hpt9i6",
  "key5": "5EgCFdwNJ6cxbN6fSPv3qvsfXAhyYvqSj9NUMWjZERjujis6SKvVHCg5eeviAfv8AT3z2JmMgwhYk1GUZdWskKG6",
  "key6": "5kKFxLGHsCLhjAJCTWgEFAX8CnVksdMY8tgpBnQcv34SPfeFt8SJfPGcLE8VPytYXA4ftFdD1sbvMokcNHiTzeeR",
  "key7": "4qALy5oGZq9ZHFwVzzsFZnTeTnTn8dHUx7dCVYSAx1e9Qkp6cjAixMtKtRZQbcQAGFFNqGKFMbXTF4Pp8DPehMBr",
  "key8": "5m33u3AGsFz9G3gTv6wFno3NEEkE5EmHdvRjX9cdJBTpYHpseC59PeT9bJZ77GdQMUjVFkVGZWfr1AneeeDQ48HB",
  "key9": "5DqBpwpF5tRPFXg78zyT7CUaaCWFweY4gLzMdsxw741BDHAYzrH4r2EtjJKKGByVNAwHTm6LQkoh6cPwN7Sbe6cL",
  "key10": "ePQGBop5T7ockeYFbKGEvvrq4X8RcwR7MQFPPWcbG1r35eV4fm9tLFicJg1BRm7XpyMsQ8tdxvpmho2tGLBujnt",
  "key11": "4yJuSrVXtPqXSaEuvFr92bfmQ5mPncvx3cUfiVPhHUmEVqUd1RBDR1vcD4j4vitsqSXY6m1ASeeVgtfb9vYsZ84i",
  "key12": "Y1HY7GBHruQmKLqxzy4WpNWfca9ryD9JY6ZahMzog4FUHn4egQgbSKTHLrXMWysBFApMYamWVmWyJUVnHEs2A4U",
  "key13": "3sxfqh1nenKhJPpvxTKZVfJnC7giP9uewuqZ6GaMppM6NtqgJgBqo5mAtLSDqXCPZPQMjujHuHA7akgPU9NtfvtE",
  "key14": "JBXa9TthzikQZWrqhnJkrB9bh34rnFfrJviojuruHW5trNKdkuvNgEarPaQZbniTjYgkSyK7cuvRhR2YCx4VeUj",
  "key15": "3XNLtAERMJnYJ3mh1BFSdc81nA8Z67DuVxbsozJUv6doaNQJzqk6oaZKCXKGK7Cm8J3i3axTAg4ctyj43oX4nS5Z",
  "key16": "2XSjkJJk6WT3HSRPCqHjUbNAD82YUkYkSPGbH8bvQ33efUrMNKZFyiAuKZUAsvHWeSeLNJuSUpiQQRZLVNgUvDm1",
  "key17": "5W8NGZ4iGpkxATGKSreNWFSdFMaHRqUuh8NspndwxKGTCwz9uDGSArwLQVYSt9uFWMdWaMJgZZHC3KCnmt1DACAK",
  "key18": "5JNTZkwK9UxtvPigVdWnjEAVCQvHsNbiRnUpCcExbHY9cJUEK11UFUV6tECpzHkPKuWMr1MMtTieow8orsaoZc9Z",
  "key19": "58qJEJjbrgEX4PLdmEmTKSY5xQGBhjAWem2J6r2yeW8iMp3cnnmi23qrRSw9d2S57tue56MbKLtM7LUKLWhGZSGF",
  "key20": "3Xg4F695RuCJzDMcnwP58vFvzcPGA8tMp4e2XUagVbwZ7Z8ZN1A5R5boAqn6E1mDZc8LzaLSncvpMrZLwF9UEsXP",
  "key21": "4kPLrDCXxPkcyfAfknaTvcND691LQGxsCq1fpntkFULbn61x3ALBrHMs43CepuxL88YGGxYBNR4JkQJ2siaktLxx",
  "key22": "5EggFe8C4MosqPVorKzPxjkVWinnBAyi45JqHnwX8hirNRdNPFZ1XNZKqbgZijhkfKfpUgmYu6gZeBo6Js1sXChe",
  "key23": "4uoQuJ4KHKGw2MF1U7DUxc4MoQg1T9zWRa8cmwRAzq9H2QUrxSpZmASS6FNX5Kr9gR1GnWZznVGWcFyjcP56XWDw",
  "key24": "4FYVyYvCkWgszWssmH11ArgAvPZidK7B52HvvZyvuw7uUsmXfYtXrcizAvohUZeCPymwWDH2zFpHX4hK653cyCej",
  "key25": "3WQJQ5VdL3VWZJWG4Tgje1zzRihL1z5dP7R9iHvK4LGAx6Vt4WvutgVJvgGXBYExrTHXrX6HmfpHxhN5pmsFoHmL",
  "key26": "4PVGjypWUdqQibw4c33NCbh7tBdaVNHRFMCw2Q29YJKHxBDyk1H5H4grG3Qfcf8CXFpur53UAEz2s6oSwdNHRLoR",
  "key27": "218fYVxhJRKAiXGC7xN5fdtsBue7EYycjobLsE9ZrYTHjuPg4WxXkawTmFYdV7NTA2EmFu7nibm7SDvHSAC7XCeV",
  "key28": "3a8UnJkdJtKtFaHYHMz9oBPPUUyywSX1ETYbYma7hJSTNW3PBhSwYiDAy6RTnSUW4y5QdpK5vpPBFZhMR8M3XkZV",
  "key29": "5ZFfbwPJ2SGfQYiXjvuxkypW7eA64NVxhH2z8euLNceJxoZJujymXNQZp2i8HAaBmeBJ9vEsRrH1AeAerdwtCWYr",
  "key30": "5eFkiR7pnAUMq1fagYDgqmM6FfXLNUkGFzrKPN6cu8a7ZjQQUCcukoNKfHC5Gkkm12HnRUCQTwBZu6YwNtDtJFg6"
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
