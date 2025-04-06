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
    "49dpwwtiW1J5cgirPhm9QXra5trZgNm8oGASYwWQyKLeC3hGUF2YZtZiX94y2EvSYtK7gvWz9AWoQdDV7AbRnn5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gEvmbT5JocNdH4gWaqx4mZkf8XttDjHUazfTHv1CEfFjk139CbdXWHBjS5Dhecr6kbPsQ3RtTtRt3TBr7Nvwgiy",
  "key1": "48YoRtu94HXmnUh9cqXmmB9hMBRRq47VQU7GjVNYqWiVKoZGpqdNptGPvnjssUB6nebkKx1Hr76X1SpkGPJwnD4h",
  "key2": "5fXLJ4i2zvKg2sgLwR2NB9a6pCGfaJmLCDUTjnH41BNe1GXK4Li23jU4buMte49jdfgqz3Xda8Fj4HiFkoSCoDFg",
  "key3": "5apBanSRgjuaE9oNEaNiCWGNW6NgEF55iFfmXqsk2ttJ4cy1TBTy5oaU9HVz9F9Xu4AWsG335VV9ch56nsVETEUi",
  "key4": "4JMxUv12kNvrp4d64NJpKmwd4wF8cLZC9JPB3iMFd67sSpgAmftm5dG4jGjY8KQXavEAud14iw9yPbUYtzjzb6Kc",
  "key5": "3RsdbYeMWVPrsZ3bwSrbnG8r3W5mg9FaB1qkQyt8sYhAsDfsN3E3Jtnb5hcm93pAnqQJe9jbqCAHfyryBuzieFcm",
  "key6": "2APgG9Q7QSxWAcjvnC87VDR8PLEsoxUKnQ5ZLPMvydUyntKKNpK5u6Jimk57hQKXduHzPF6rd7xyDA2h9uypUyMA",
  "key7": "4KLihfDMASjsQiiekSaDka3J2bVRZkwirmSWaw6Jd7a6rELXR6Ske9pu4q2ZowmdU2BaUNwHGQ1asX7UtCS2iqrG",
  "key8": "Pg71Ysv5E2q3x9mTxYfV7iY2caEKWYVqzJEurhEq1ZZWCv4AmGnaw8PRrLSJaJhypyGTjmLqBcBSTmDzRTvyRpR",
  "key9": "5KHdRw2sp7r9DcVYGoeTaATSxq7APBw2x18TQnzj8hRv1kcupEop6uJvgfXTvvudit5HBe2QmNvYd8N1PuZjPzhd",
  "key10": "3ZEwPwRWFrWuFobydcZEohYBiTTjD5VVZZot1tPV8WS5qttzcq7jEgkX63ULLTqUfW2Jv6P6wbvDC4YoTPeYAg1J",
  "key11": "4hXreouC19DSFbjyN518xRYPapMU7sEjz4393NDbSHKDaT7Q93AqnYpFeUL6DKqjxGPydHEiLa6pbG67ZfPTPwWq",
  "key12": "2U1dMjb5R5SzYEwjN82kGe7CvBUx7nFfcJpvFybJsVHjzZmaets7te84iJkjBSHTd1XRZnvdSyGREhY8NjS2Ych9",
  "key13": "ZDkaFFCdT45YdAMjyzhdPgkRbjgq3AJYvYyqndtUgrnx9NebyT2Gm3x8oJ87sYSZ2EejyKSsSTCsMCKwXSMJHaU",
  "key14": "3gQfDrhQuetsLMy5pdAakndGYGuEDTut2rRasoic26Tyw8j9M9i2ENic324RXierWuLJQNAotvhb5Mt7PGys6vnW",
  "key15": "5VJMJZfN5cpjihh93b9dJ3REQvePQQBbyDUom4fHi91wVSMZRPbib76URRXLqYqw2ymi8gw7Bh6qVbsXBqz5o338",
  "key16": "2huRJV3t9ky2929NoTpknuvB1fHP6ENbCccrjfvX6YVz3gfHEGxne2nxNYRaFnqQXcNu8NfRJuwADnFSeTw2pJd2",
  "key17": "5NrQPyCEnyuWw9ppDD9k7wTMj1YnZwMKEXdMVm8muq1mXiV9eZSMqAyHEWpvyMvCv6CwHexhKy5wv5Pm1r1cPJiM",
  "key18": "2oGBVpwx7hE6iejh9bama4vy6cXKEYHKFszRYCE8eN1MdPjbuwUmcz8wHTRDRKrHrEKuwmQkTyXdpAW9jfn8e8Vc",
  "key19": "466Hm5kT2styeoD6U3bexf5hz8r1yBcVE7iKXnVPxBit6uKUq6gDTB7nM6wGtWNqvEneumxZeSzWenutd9snAGZo",
  "key20": "3D1UznNiDazsxez9zJ9RXy5fo169RFCbq8oARavyeUHVYmnDz3ePVUKcaMnr4NfKbrizgV6MZD1been32A1XobTV",
  "key21": "4qGoXQ4tGonhM4PLmGr92EiHnNYcB4arrE6UtW4DBf9y14AZEb8vE3MbudkDr72VmNqsLZRokNp2hNhUdWW8pXxn",
  "key22": "3wfbkcCd9ayxeZ7xVWX1NAKN7u2JCFTNb3Kjfnq2PmBrUp4bMPfLCV4YUoHra9vbhk7JhTJJ8juxMJZC2v7Aq7Lv",
  "key23": "4NftM8LJ3kxfK4N6xxXn6fmHrgHuGKgioCCmUfdnHLHnqUjsCKFcpEQoAm77RW5jG8Ype5X3CKKjzyfngR7SfqBu",
  "key24": "xDVkGA6F9EYq7oZj8rqPd4xt2Bc6AQVCRroayeCPpq5Z6omWyfbhh3mkjHEFA5V3J2SWQu6eqKmAu29CkdZE1ji",
  "key25": "3J8yWRHmw1nWXLSj5euk1Y8dq47LTKDFCJD99aJ2UvCvnwKji3ZAiWxX5iSYGJyJHZRYCmJxBdRxUgnhjPpGkyDg",
  "key26": "2jAA7frRn4XGJCDMczUKHBQwwzGFPBfDuSu72FWMnpgxFrz5TWJGqCYHRqvd6ZK1Hy2mqEVuXvxTaQDFp4rBTZdg",
  "key27": "5RT1pZtu8Rr6GkCMV12AyaeQXY98uH1VtUre4G8AzvRmgB5NAP1jvJ7xkNiCCp9JeDBe7t4NAoQQ5ta8r9v7pDtA",
  "key28": "34TAQB4mJ6gAt7c82iGsMV7EY6djPy1nc8X7CAq7CzMUnJDrsv9iWCbbQ3EKnttTEZ8Vf7gz43bSwBcGMEdAgxcE",
  "key29": "2UE4xDejKviemAD9PC6RTLwGEVYB1YXkvJeQwPxrZquoBM3ZJmpbMpyqXARj2wS3iE5UikAv7v9cJ6f1M87qS6UX"
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
