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
    "22CMHN87X4WiDwFYiwRnbtkwf5CooaT9M8yrGVGobA97QUJpYwrnB4wMciWbiDwzGG6jCKyXZXhmXGCGrcH7gn75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mpd31uGkYPci2o3cqbaPx6k2mm4VVU5ENtkxbaCnMEjfMz5UwCwAcCx5b3ohE3VMRxn4fhAuzKEdjnKVWXRW9jH",
  "key1": "2c3hjMAa6d8rT1jw39PGDqohKxVdaWA86bgx27qFFCkAo7EbJvvqaqRsXihro1VYzSjb58MJtCbvpsTsZgpGKFbf",
  "key2": "dGEocinW2v7z332NUhFniNHfJrdFvMsSicdiJiHW8xF1q2UUDWpPjXwMRsU1PJzEvyrZ3oNyFnshwXvckvxvdMh",
  "key3": "3fuv9YDkiDpeqWpsLBx8oTSdxkRZw5B9eLg8aU7rwHqjMGJzgmtfxt6UDoP21CQ1vWFya8xtGHmX8w2pLRKug8bE",
  "key4": "2cbtBmeLTughuWhNUYiwAdtuuckCvDAApqkY8guDe4BTdESJ4W4ES8qJ39Vy6g26YeQeuE7X2vF5er8JUgp8hqCy",
  "key5": "9KwPgg8wC5qxxRQfztdnry8vYADt1MwPAtAnEj8SRuaGVQ6C23nLXn1rwJ4H4SP8GDaZQnifttb4fb8oMeTnnLB",
  "key6": "DuYySgfwDJx8vjcN2fU9M6FF7EuD7rJq6x6LZq49d6Re6b21CPPQ7SicNYRNgCqtrjx9PLg9sVgjq2Atqf7Cd1N",
  "key7": "34YXFQ79MgZV8UmTvDbKwPebiEnDpbFEeJEHo9AWUGjhPSrdsPQc3WHoxYLMoiq3ohaKkj1j4iN7bjYF27bUUntc",
  "key8": "5uAFpLfjaU9QRaJZ7qQtJUVCKc3HmGH72iJVQBTEZuNVvHFztM9jaoVAz9sfse3ssPGypUwJnSvXKGEgeByyCQCW",
  "key9": "5ouwBwBvZEGXUVKmAj1E6vzGjgguVby9HuahGJxT8WFGaihH4oyf1qPgqQx2Sd3zGQSLw8Gf1nuonStTW9z8o1QD",
  "key10": "o4Eyb1DMoPEMd7bBnFEf14DMLapS42XzRffHwiMz1MZ8qPfeBYGZiRWfwEaVZzEAxjTyevh2gbDoYCTCHffA5Y3",
  "key11": "FzGq7wxq17zUi9Kyb1LS77naAgHeyBdYHgYbNgCzGQTjX71PpZoU3eJzfRLWRKQKCtGpcwbLGsydxqtfTq9ksh7",
  "key12": "3dMnoTB598Lok4PLRMSNbrKW2iP9YCaCoNfh57i2gJjfFHkLjCAWcDG8Fnue7LCYTDe6bVRg5Mk6jK17s5NUopMZ",
  "key13": "4ZY3Due9yWG3eiLb1cLVeuBuQDacPfLQHc75jjdcSq6ZcX6h78oTXqz5ChqnujX458ogjRDqnk7LEe8B68TUDfyH",
  "key14": "4o4axQcrgttBDMgQ3GpN8rxcDjbQh6qYpu1F3Ld1ADKWzXa8SfYPUAy6TtvxA6k8X63ewMKtE6NyFBedrNfJBPvh",
  "key15": "5c9sFEDsvdHzs44HZTTWe54svTzFXb5Gqp5hg6r1zm4UA8ghJC7TC7UJUTsTPYY8qjwXm7XKFmYyziejJMPgnh93",
  "key16": "4d7deWq14ueBG79NHw2vFJDbizNhDi2CQ3KfYyrnr1iNaHXKzbpyJsYtdCG9EgEpQ2bemqM3GResCaxvkxZ4Siwb",
  "key17": "599JKPtjvW8x6fAGjymkjVMmZWDPkm5ExKLbZiRk7pAcLw9DEyrkWwheUx7zxoQ5Nv1CECPKPgEaNxFevHxoqTGP",
  "key18": "2RY5g72sK9gYBsgGCL1jPc9wcLLLNEAPdFUQG5pR5riT3fxF1iwW8NKay6tEfgHmZTifQqykrBiWRt94Q7eMufsE",
  "key19": "2nNLUxcryRtZ8XbM7MPTsd4KodxPE32uVdnCkqKznu12JUnkM6FRy17xXGrFmTT1ryEniHWnezifEq7jigzB3rfP",
  "key20": "314Zemd9AdALLZt8228BCoHpkcTDt1rQVb9xUGZjzq9QVxVrifYbkCyR5EvMYg94wMZhSF2nSo7k48FbvVz9n6jx",
  "key21": "5q2P7vKPDfjAveR9sa5J52J3ckXpweRSm2NeFw7raZHY2xAtzSA532yTmNKjj8yUiR2LRDs58bg2knSaoiVpKrha",
  "key22": "4DSd5XLKixqD4Ykf9ba5BDUxPpCYDBTcptayz1Mf1QtRjwFyf3V9a2Fk4P5Z1e25ku8avvgiiig1MRKAiucjW76U",
  "key23": "3rpJYfN62uRpu58nHqQXDfhNivVfnrXpf4gv67nKGFUSNfGhHZpf45eiBRsDsuvdwF4UjeHEMwsBrEh4dBVvkQeP",
  "key24": "2HvtLBB8P3Wm5ZSbiS8Gv4SS7d5qSPf5K5jzbmbqAdnv7igmBcxDXAdccqoVTcUmjmtwnwPTA6j2HbDPV9qXihE2",
  "key25": "63bpbVMMP4q6d3mnfk3WYDYd4yA2jUiHSQJEBoU8gRTNHNT4SJ7D5Pq4mymFKSztEZv9cVrx9q463zCDLEaEncEh",
  "key26": "4av2bwxNXJoFyrvhkbDka9xZZYNp4HbCsE3ny81kVB98fJ4mU4sKgQFyYLmrdvD3AHnnX1nyMnaGUsyCC5Y5fEsL",
  "key27": "2zW8gN6199vWfBGMn6mr5WwKXKj6agJ1M5AcBfxJRsY2GPjQwsXerJ7ytJ3SQKWFt4mPxetqT45Shi4EjCqiDbpi",
  "key28": "4gGJUFmrsGRQQNAgBVWTYdiuvhp2um16FY2QZJAQMVZDThoeCeePZiWEye1JS1Ksgd8QH9cHiGmn19edKP4oPNt4",
  "key29": "2Q7pKNN2BjWEJf73GrZDztLooSHxUSC7nnc4dUiMTJyPvzysseVnLEh2V7X7JyiDvPKUqpoFF6DzWkdVKm2dx8f9",
  "key30": "5PRRyEE1HSyfVtCw4wqDg2KDZ6hCAQzPZY1PznkC1GT1Bgb9e2A7PN674WP4owGLNi1vnGZbeUo9H88jLirh762v",
  "key31": "BHUX4V7gGGy9WDfNWW7hF7GHaHnUt4VhMHwjB6ERTWaJUaTsQrbQ2JbsY8ibijK79Ji1cgxYByxcP2h4RmkcJbE",
  "key32": "37ApCbxoCoGrUKSggjKaxDALe6LKiQaKkc14HpayhZ32J8q4hGvFaPrRFL98yKaa6gTXeLTFCR1SyPUuLEsWt25q",
  "key33": "3ooR9zjmjmhrfKvo7u9vcvy6znw9ZBjzjxrQf4XjVGEwGQT4Rm8BDcXL2WnyfSx7HZGvvUAK23pUyiddG9vEyiFb",
  "key34": "5iA4PCv4T8zUwd6S6BPHX8A436AkQdApRDWBZtm1nYHDdVZr87cPh93rZxYVB4LeVixWaND3NCzj23ybAKf5eZ5G"
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
