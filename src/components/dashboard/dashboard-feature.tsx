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
    "ygmNrc96cFqPJx2SPhiVrvJWdwgx7VZDUmfV8cRyQeRr5GpmnaaePJZ38uUwPoNVGszvvRYtTuvNzC2733LyfKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hgf7DFjJLitUANa4KrtDqnZMCqNETSmu2r35QMxe4Lqbtuy1QXoJCaLjd828NwgrntYMM6W4v4rr47x5t1T3SBD",
  "key1": "2wVRrgiNHxSgYHyExdr4wjSn6EVwkoFCxN1vdFbLk9hNgKy3XzYaihEN7EXfqcWz3RnAswpmVWCxmoU2xoAHvdKs",
  "key2": "2gg6iGMPSNbVH9G8bFMhSVQycUaWZ9eQ3qGY8ytbYsSsLdC2Vy1qEW1ZnutoZ3tJhpXCi7chPVZziQzgc2cSMiYY",
  "key3": "Zpmbix452kp2uAiYEiqi1zeJNyQZJX2sZYtHRoG1ZAPKWJEsX9FCDdGPx2kuf8wqugPHzEGspYYEUJ9gDfpvZMC",
  "key4": "LDJJfBEcr7BAwyW64ZSMTZYD2GSSpra4bXKWd4prdBUUwQp1YH1sFgDog3AhMfBAc8s2C3pP1RzMZDozPSAjZb7",
  "key5": "2RaRxJpj7JA9dNCqK5YzNz5f9WKUbhq64Ctufy5RPFbCkgdEgKC96GBVHLTNwZ5j3y3m6KvXVtMm2DFbJ6BxRDLu",
  "key6": "2dULs2uNCEEoEQE4oG6yr4rMu6KJducFP1W2P7q9jJbZDUjsS4WVyxsZG9pvtg3WCvkxKNqtFGKdXCC78Jaysa9J",
  "key7": "QWLf3eCfEcCRvSdFDR89zPNJwaBb5XhttWg2kCmwf62Lcs2kqGdh5ZFUPspRy6Lxd3mKkTEXtJA9AFofsNozqPR",
  "key8": "2ieY5cVwTwtC4dkTHZiA4G2G6STRCcaCbfkYGKNHd618eS4tdrrQ7QMgmx3nRfqQoURPAhij577TFwCt3TPvNuKf",
  "key9": "5Rf78rEnobcbjH7V73dN62xw7nAc4Kj5FVbrizs9yKetjQpcz2eHdjsCXUcHVC4dVGp91bP3tdPZGTWTJQR5ND1N",
  "key10": "2dqamdN1ZeM4HnnZR8XDJpNqoXRmPdA359Hmye8qSFmhYM55Xzjx5uVVCDWtxkKUqQFQpWePz1ouvccksUioxcfb",
  "key11": "5MqXCykwLiwxq54zjZ9P6LE5DYh9MctLoQe5ALw1k8abx3BysSMMVWBJV4fJhRcBcH7fPtYpv5tN92MRb8RJveaf",
  "key12": "5aQWFhY7jYkAFytQr2trpYyWpcHLnZyFhf3gomvpXeT1JNaDcv8hLw8tB7g9uDmJ2EkMurGvaNqngaXVSCLbRFiX",
  "key13": "2hmD1hU8Vw3K6yYWnbxMnBRxAwwcKGjdj56uCThpxyfh8qbnp7nnA8HovWt1HBsXb3B3yHczGWKup3fXbVCmWKWi",
  "key14": "3CHQu4uJsA2t8gL8H3LoyUP7jvh7sALUM4a4bCJNoF3f1Y1LaVAmuHnKbHWqLaZPK7rejD3m99DALESjuhCquBc4",
  "key15": "UqsfWgxGKyLV9KBVuMrbvPsh56mFH892xoQ1yqJFDXW3p6GhKNczcLt4dcyHtmqAmHoiRHHLPZH3raLDtbjmn2J",
  "key16": "5oqQK3eLg75KJdS6TzpDJkaWt2wmkeQZYwCFD5RC2k1aeSKi1quvDwCVsPjwdzanVBjmGnindd9WJuAvDdpMteYa",
  "key17": "4Fard98D4h2kbAuGfUmy68hKyqUZbe9SkGM9Xoswu84PFqwvdC984LbfVz2QXCke2b6ryTsbeJTX5FidGmyZazqN",
  "key18": "5ZtbNGPCA6SpPy8rGSFRbEjGfLa7KEVdVk8yEAaY2kB6MGwYkS7DuYmd8aWwZeE8FsLo14hiZNbvkRCaaLU5TQXB",
  "key19": "44AYCAdZYTFdkho4unUgdcqWcurLzsWJtKi1C31tjJrqkinCMbs5jkHZFLw23yneJqnEYuBNQTJFdCaVvoJA4bh3",
  "key20": "3xfg1sJTr6Y4kAFUnrtWm2ohC4uTbFAmTVVhjMkFUginvPzFa27CLu7MhLXQkK1rBg828AQkUxXPrWpoPN3ZXa6z",
  "key21": "3pp4xRAc97vzmGqNt66o4PNTYcJTXdSKtHTX4GuDK1LdJgSaxQUW4uBKq21ZfoUBcqkiMppQHyqCYAYStzC33yCz",
  "key22": "3TcPrZ5CQNvs5pBLMbCyjGgBYU2sjhaDN6t6NA23Y5BmJ2xPxbTPiskRf2Ax92bJotHGurHVj7YfqJ468ohzTYrq",
  "key23": "5qQnNPzqyTjonHXToeUVC6vH5i1dxxKG1u5SifinsETtKCsXbqcMqwBrii7tLhdhLCw7LXM25nqhkfTMF2zek9Kc",
  "key24": "2Y88Ht7WV1sAq26tcky1QM2krEcot9XpUQx321vSnbppiBam6r9PYsZgUXwQmHvN3w1NnR2VneADxWsLn28dW8A9",
  "key25": "5vyMhU599ozGnXHJUnJYQEVrF1JPTGQLu1hKa9izPYN8rGVJYDhQVRMmUnRjhp7L3epGL6ZKjy5jXy3NxpaLvvEs",
  "key26": "5ncysmo84mVKzjw35mg7TME7sT2Bksc3iy8EM8sL3Au7S82stx4kVh91gjC6sr5dfsW7ioLhAeD4ST5J31xcR3hK",
  "key27": "4YN7PeQ4jXcGAomjNKMjSocPQg85EBmUnqk88G4mCHZYzrxnfg5RWL8E9oVnPUXT2vVjgEPdm1Pv7rf1khcoZaHx",
  "key28": "zJoFXKgScb41Z4u8fnXPrnUxsbveKWdicjEj75JKDYsczbFH6ssKfFdG53rjXH278NG3NohbTQ7jNasuDwLiZyH",
  "key29": "42FRL8JVz6dpeNB6hQ69KvdFQMWf2rDuZc446MVzkwGfZvmNkeDN6QAr5RevowWb9YHPyVf5nrEAxvKgYfwfsmza",
  "key30": "DZHFxtLa3SxiaKgfsGUsTFH64kYRddTfV7yL4LzNet18KPWPjTapDAzqvNAMgERxkR8dhQcoNjaBPCs7LjpDgj5",
  "key31": "uWUih7GmSnFym9bh3cLg8n42NSH2F2rhnUVhjfXp18AQSKo5CVki1DutsWGW7mq7dA3WKecEYDHJccSaiR89oTF",
  "key32": "2w3N3hGBXPAkUzxMRjga8FiUAUNnCdZTyTn934s1yTzRWtTJKafMrXCSP1TtNtWLMjPuHuvhJ1uV9ubdYFwayVy5",
  "key33": "4e2eJzbFqGroK8iTZhPPVvxYREPnKxCqreUxjiCXv71CxmoixQo92HqBaoV3TCkCymgzUhcezzD2VQMup8gUS4Yg",
  "key34": "21uTkdM1tNG7deouYGKRghnY3AArfPKqUbZcWX47BNmzaCt8RYWNS9JiobDVLwaz27PkvwoaBAmy9J5hLhkgPeXe",
  "key35": "5QgPZn2ZyhViwRYLC5GjsyhieyEqjG1xkew8VKoDbQD3xNjr3qwg22Y2m1KXxuMnrFEWg3ZgjVEfeWodqztZ55tT",
  "key36": "2qQp1B3nYqP4BqijJ2pXLEesHcU1L5jtKjBVXZ8VWNBhxj21UNWhup5D1eSWhnrNuk7QzXKJZ6vS1pAFBabwHr8J",
  "key37": "5TNSmk6qytBZDkujA3RymuJytXyYKaWMQXWzJYNMg2iFJUQcBxF7DZJsmizgzopKZVt1XXnypwaWrWCKRTUBHmZL",
  "key38": "DsgkQzF2NGh8XimBLxHs82ppGfu21tQ7jkJ8NJ8R85TdCCUaoVMYmA58j5LPuoQ1e58jaKdT4JRcGhoq6DdxqTE",
  "key39": "44tfauTQb4pGoXENp26f9pfrgpmPc4YLn5nEnWEWYHjVFzCuv8fEcZv6TkSVuWCNXMxWgUsBcmWaB1MBbDJyLHVC",
  "key40": "61N8D5hvGHGXy4hJHsk1a5YcBqiCSbktHreTBern4hfD6QdVLwmfRzP7ET7JBsFTpEJRr97sJZu1aBcDkppsVotp"
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
