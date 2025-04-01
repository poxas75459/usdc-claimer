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
    "28kusUEw3pwRXzt85bMFCL7L96fvQhkHc7hPaCxoGgryF9GmqTR1w3gdpvnbkBPj1gqbhMbkemRKcDWYpcYBAum9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jSt1QSUQ9sj7dTXoo6geo3Xk6chYESfie9J81iYXszF9pjhhyy7gLQQuSRXQn7zHyFSm7ETjKE83WQLyu1u1U5z",
  "key1": "38acPL4nDxbRnbXc9n9D4wRwCBkt88Zjt75gbnUCKx3Sq9qaheDSjBzyMm4kZCzgz3i59oMxbSNhWwwd2msJmhpH",
  "key2": "3423v8BTyYwdwS4HHh56LGPdLG6MWVPUsyiQTJ8XpyourLY3xtndjjBo4DTQ4dheHQcaTa7mDsxj31NXtsxLwPPV",
  "key3": "4B9b1PPnyApjCKLnNqHHwdNgC31JSjDQVs6gCArYY5Xe3v3gfMXMZcnM9hbgHQMsrfPtZXcAnVduva1jMspWJvrW",
  "key4": "3UkaggnMtMJ5skMSxMtBeNPagTt2UgQxYjswwot6iZwhMp6xdvc3rdk5EM7YiwcNyW8M6txgEoh9oGLxNfzvJtz9",
  "key5": "2yLQQCaVEA2sD1hkrbS9sTXiZb21UkK3q8NaVMpmNQ5ThfQDpyUUhqNH7QVyVhbXN6g4tCAttcmRcCuiUrvdkK78",
  "key6": "5j2ChDZgZoBFJoaBdaMfi4VgeAZHBT2XK2fi7g776bRneYvsH69XdcxPVD8c3TywDgBfyrExTzDrMfmDqe72MaZJ",
  "key7": "3DV4hbP8jC4xy5ds7hNLB5BduSaMz5KtwFBfdjwNsNMa3GHLNbaMy8B7wpcKFcvm2m2xumngMt6BdXfYWtVWuASX",
  "key8": "3umBGSVZVWVhSo2vwS8aESeR9CXoWN1mPHg7wWVqS9632h89ajEkmj6MeTE8cLEfDy8xhMmytejGniJcx3ByEojd",
  "key9": "4k175yTkCqdpTSiuHAckAjgzd3Az2He1XuqJWnsuAVD1nbpweUDqszDbXqKBNEV9GvL9narFitge71qyzSKNe2m8",
  "key10": "i5tEgg7fWHugBU6zan6xnPgDSzof9kdwysRKUJinwSjVZ6s5sXGEmPyVHN5ab5G42VkPRV6Q1q4qvhbwPQYZ8ha",
  "key11": "61QbAjJej7E65e86oeAMrbx74U4UQb34ByewnQzeJNVaZW1NTURHuxbTFvpGL3Xpi6gkZMcSeo6Kgqv6WEumNYfm",
  "key12": "3t4QfZQ2VXJ8QKmEKwrK7bXqNniJVjaqNnxXSrtpoGtaXeTFH87EJ56QJkd5u9RfaS8iUH23vPDQSEgsFb4nxu2W",
  "key13": "23QZcSFeuT34z4vQBBtNQSJzArv9e2w6Dn1jRy9TEMz9inZMcRvze464dvvtn8muNAXknRp2ZsysN5oFV1NT94Nj",
  "key14": "5BNA4k4ZhpqfKwn6WrVLLhDirU7kXSkGX5ofJddqLbrz28Wdx7ps8xJxjQHymPALoDHbzgfCm7h7jnURpBE2qWyY",
  "key15": "5NQgi5rb91zhMCkmR8ttG7kgfb3w59ANKkSmncYqrQ9aGeaNPm4WrW2Lp7VxhZZ4jq7KtN6JqnZkTbT3tTzBLchL",
  "key16": "5U4g4JhN8wMnC3nF9vrv1TzJEJnKxKvnPB1YnZqxs6yU677npoMqqMFdqPAVC1B5ZbW5ZKechA3EtovQjXdvibh2",
  "key17": "5NcnFwC9RxjrDCijDiisENxcPHz9Uhf5F3ktLA3oCfsqGTBHzdoxGzEDvyU5jn5NRZzXgzSSxG42mmktZ6nKGLmd",
  "key18": "5hgXeabEFBKdV926DyWixAQGoC2YMkxhau1ojXy4UnmUhfNEYQf4mVV5iiGKfESC2HKhNUVqmZvKzTjNqyaZAswv",
  "key19": "9UkXvxd4SgU87Y43aTu3hnNMDAwL4Rn9XXboxoRga1hLG7JPK9YvD1kpu5yMa9LcMBoGqSoC9JxSnuKQGwD6oVj",
  "key20": "21fh7pks5dKQX5Rj3x4s7DFsif1m4PJTxpxVH6YuMbspDhy1i6pNmWMHWuA2CD7WmfB7cPtkS9FBKSi8DfvuEvKc",
  "key21": "5DjYcVddfMNWD26CL6w2dBn4wg3oUBf96v9JyN5ChprdS6cCGrWEpfqZvkLHTyJb4f6KvemWZG2Z8fKGXxfyDeTL",
  "key22": "2z1Cnt2kLsva1Wtvz5Vy2NFHAY6mDEzUwLyxXa4AwqirtBZwXCdWtZYqLHV9dqtH83BzjY1hSUyLbLD2NX9Ajksk",
  "key23": "7xDukhftCy7QhmkhAR1MsYRvavVerESJtgKUoTDMUZJDk5pHTzzHmPSC7KjYLawHkc4qfnfC1p71vL2h8Lwi4fr",
  "key24": "3f1wQ2K1gcfJwd1DQNXuJWuqC994eM6yVcu7GQsLEQF6cXNpbXU157spdEyEJACihShfd5mQhUh9sPHLB4mTHrv",
  "key25": "2DNGgo8bmjW4F93w3k64zFqt2wKoZXuSZJ1fmubY4LpJ3SN3ZvdLH9N3AAP7ANEppzDFyMB2c216xR71KjadXeHm"
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
