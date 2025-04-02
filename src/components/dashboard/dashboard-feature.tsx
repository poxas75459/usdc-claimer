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
    "5MCPHGL2hfXrcX5JLzGXes8T2HRW4mxhC4LiiwcxNA2HGQeY4jM2WouwX2tUviHbFxFaqUr5ThsKkBs74bqykNX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MMzUW7LX7E2whMJknF646ztzex66fNKLh1htDRgB5CEYwyFyXqXUCvpARRkSVRbL5ksy7Nr6bPpcfudc8Na9oNj",
  "key1": "5NdTW2aeAwNmZgWeCc8aPTP3UdPFpqMW6S2ojyP8RNA3wnMduhCXGGo5LNkPYpQiusjQciiUpsDn9rSWkBRFczn2",
  "key2": "3RWFzepiiSbTXgpRjwuUmadzEAxrJnFpi2sKUD1oyFgiSdJNXyyfEk4kzYV3tUARzbUCgJE3o42jYDGWMmDuTUg7",
  "key3": "4jPmgeSnQKn1bfcVopjWs41H7xCHKYRT9Lo5pjY11x4cupHZdGfudCGVEFqRrgsE12eC6DLseNBojjdz1KyEkV6r",
  "key4": "4Yd26CtJuXHp4KLJtzqU9nzXr9GSPPByvyme1wXf9ojTd2KMWeemUZEQ4x1SzrWRfzDHVuYjkQEhxmMLSTxKKisG",
  "key5": "2AUAnCkP1LhycUdcm5hxnMjyZYc7zPtUdqNW5s4RYHcf26HZmSdKf6e9LGYUTJicp19fCWHKYD457ucXyzDseNGk",
  "key6": "2jEhxQ4syCLMb5tkLyY6pNy7bkuaXCAuRRw3Z1Tzmm6gLR3YkzUagEfoU8RNNki1zKzSB6WQ9i2yQone65JncEQc",
  "key7": "5Jq8nLjK5hbmPuFBzLTqNjdrdR1h9RbKXDj96cW695SHXoexZJ97NWTRxZpbnUaZxSTrpLdC49b96Fr8ZTQewM6y",
  "key8": "A1V1aTdhNrBHE3UsecXTaB5wMEf85thcedK35eiD4Ej79hEXjQXVWdPF1fwJ14k5tdnbmhgapUVAv8qwAJkPxD3",
  "key9": "5jkv5pspwWP8cZmb9Be8CesXKc3BhsqMACRAFr6cVpwewR7X5C4LWc69KCHKZv6fKowi7PFoZ249uUUf5kLKdKMU",
  "key10": "5UAPA7CFhazWjVq37bHL94qWeYudewJdPZL5JAkrhAaeMyvaJJ84VjNnCdYAbpxnSb8wCXqJLw3c4WztpCxnzozo",
  "key11": "5P4b8ccPcs2Hd5fGv9HyBHr9zSra3wEWg7jMUBzwSA91zv1k99s14tqvcUtZNtKbywoAgRfwxKgoyMHG5djbp7uk",
  "key12": "3nHZ4DUWhdEEr9E2naCPLYcwBVfTJXAxb7DTwxcyjgyK9bqyRRfWxWuTEaVXyxyhdQAX9RCwdWg3uAFb9hz6VuSk",
  "key13": "4iGJTekZZSkUsR3zUm916nKUizY2NtLr2rCmtYFXjKc6Lvq27GXWuDnFknuhBEu7HWZs3BFt3CRK837CNs712VT2",
  "key14": "67ooKQkJHRj4yZGUuNTQg1kCTPzyVkKLoqPyf9RM1BjwtDE8Mk2gpbXqJ9WrCmX8TJHXLHwbEJBZ6SJ7m4M7FXQV",
  "key15": "3hFS5Cjn7tYhiCX3LCQ8oUEWvAxfhJ4YTvk11xJBDemHLwjrEd6spqEzQkMjKkBuvYSRwmyd1ZWxaTZWUKy47bfd",
  "key16": "38HojPX2e5HXBiwpN4NXrS7ra19qFkdBCCpLm8CuS1m7vu13WjwEhcgcJcDTjmVKwrRRWXxjfe5mH9RouDUCACJy",
  "key17": "47VBWzFbK7ckCKjapUxTtSvkN5KUxAekCqHThbc7JMDCA4RmVgs3k3uVG3fG55htfiquE5c8aa4tcdph2ifnupN",
  "key18": "4Z7gTXuGNzRW5Z486sZXjDv66w2uS62UzeES6xWB2djv2PuVnbVQbDr23XYoFbFkSHgtTgU14GKtL5t8Gk9Bnfwb",
  "key19": "29z7ZLDLf65C9pFcoYYXFUDfNVqAty6NMMFKjtXs6zTTe9DbFocGtCETyrLuPSxy8LVyRWVcmW66gHtTAezcqiqB",
  "key20": "4rykgeNXQQGLxgb9BpkW8RdKq7bSYyQkwEa8fRfvJvbKX8RdDtDFna7rcFrdDnzH1c9ybonb2xJfe25X7dqBakWF",
  "key21": "wCR7JTKVxwZ1ThWUtTRHWthKMghNGbkRNo3eFfsf1stKr2g445mNmyysGYdvoiUPqdY62pohrnWZD7wZ4QsVQFj",
  "key22": "QsKPk2R6vUdZMBNp8tVYRP9znBuin267LUjHSoQnHNNm1E3bEXqFGzch36B6YdkLHqvCYaLZTnw92Fj8Wbk2Bqb",
  "key23": "4Z7P4NPAQsRnPHG7Te5bskFPGkmzEz68fCBKf7mpiAcN9qqLQrycDAx5vCkFFbhZJs6RATQYub5gf3Ei4gdPAEUM",
  "key24": "5Z4t8fJCcHWHvrjqgxqvadffdtXoLzQfStWPyR8HaAyRj9kcYHBugnjHUJcYzPetktocsVfQgutDKY48CwDmqwxD",
  "key25": "3fryR692JkGp6dop3Ud1r92sxNeBVQh97MZoXUfB4BG2V2i7a3vcWXmqGsqSib5hsffeEvwxvWLPVEpyjobpJezt",
  "key26": "4zoVSuCcin1pQ5V1iRufScW1EGNJx4Q9iPv5mSRsVFGVeZKhJEzumfL1tWNZogVevYN5Nmsz877S26PWtpaRChcb",
  "key27": "osd6TsfnfPzjpn36hQaDRCwKvBJ8KtVrX8vx7KJrJNxtzt7RDjRGHhmrdmMdSqtGHB6fGa8VPC9GSgDCACvuqmC",
  "key28": "p3EmeF1b5PkYVvjsfusQL5J3YHJyVWcjRhgEAfHYRGxuCxazcE7A7qme3md5VGmkxSuPFAd27JKt6dH3iXYGZch",
  "key29": "2xpD36DNd1QrXeecgF46ygfe8fdGRnyW6Ee87Up2xJ4s8Jb2EZJytwiFRyP4NATjo7KRfZPgAp5RnunLvNtVRxnW",
  "key30": "4i5X8GsPHgJiD8RKJQ3LbWBMZUCz49gAsTrui3BUicrvPLrkJq9C7Uyz8F9dUcxT9egt26spU8bKnNgUrraF5dsd",
  "key31": "3u3Ye3cmfSr3EQT6xE6Z1RpyujQ2WF6fKfiYiT6xCSSvZ2DxDAe4bU2p4aoRzv9kZLm9wGxt484Ug1o15wbSYw91",
  "key32": "4h5Bfszbr2trZEkZWMpQ8uCxFgYV1p4Qoxhqba5fyeCQ5bQzyev17iJeBa58jiYyxFXRt3jBF7D13Fya1tx6QARM"
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
