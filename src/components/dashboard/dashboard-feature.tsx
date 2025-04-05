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
    "5hVB6YwyxW8RPnwPwfSX9SKxvCgcpMxF7iwYm8XtDhyLqrWMcD1Mcfj7Jzh8iSHJg1sf1Pr8TrzNC4zEZ5dvFWTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m2SqunP6cxgzhhUNbGQ3621muJ4L3fM74i7y58Kpq7eHN8z8u9v6Y8DwJpNQCwXEZtpkUxEuC34JGDmfrfroLya",
  "key1": "4h5qJJSDCi1icek513SqLRSa9CU1azAjSNpqMGWQVCNN9LMMjycuHyd7ghsyWFMZfnKZAmzssJSbaAxEjP5Yg1sS",
  "key2": "kkdrqZnoAF8u8NordemF5ujQdaSSWFUt78FfTmbYdj6BNPkiijN9AGHAL8JLoTurfdwZdZw3kVMdaogNqsrv3Nc",
  "key3": "2JW89iUbrhh8WCWYkguCnbGuPkBNvGznrXiGtLZYxgAvKNTDTRXMgVUDCCYU1jo2JMRW9gPE6pku6fw5K9Bmmcjy",
  "key4": "5MLmDG4enpyqHHJxFbho7hLeBBcUhAJKCuRJpnrckTEF1GJmtj1NKMgNpTogg6AkeWiGBYo2VNNg11hr4zfLC6da",
  "key5": "2bLPz18jFAfcTtEZYCEoGFaKwwt4uXhRcQ4uYBpCrSu8pRKiNQtHBuMckmC8488Kd6H5NzMTAKouKvafWJHvMEH7",
  "key6": "TmLkTuTZNkMpXM9Tihuf1pLreMrFbxqf1GkV3BZMvGmpZszVtjtV39Nhso4rXrqdgRoPgmtRqQxL2zYfX6rf8N5",
  "key7": "4z6JvF3vNHHdGy5jgGLm1QpX9rYVyN2DGs5YRDn2ixcJn4ZhKC8FRWCj6LZoPDHsn7GVpb4Feb5vQxc19m4RnTge",
  "key8": "2iMZ3w4cbS43aBFxPjyZojUj6WbTACEA7aeZBW4LxCf43sKsqEm7qdJYbKcPCiKF3WytsgJ2LLz26eipv15EZHga",
  "key9": "4fxSLhxcvTGxM6oCcKKFfhXJX4PjabrH5878kb9aeCgT33B5mFi6cao3U11bvy2wSLLJ76wLaYUgqrCp4t5jRGAT",
  "key10": "4YTgmwGvuJTpi2Mhb7LU3XJLwDsNeau2LYNw17ndoAvV3ke5naTdqAdfDt7SDvj5jHWhnbuBkAJJgK6197rFXcWc",
  "key11": "4F4QEf6u5QiHmFPMNr43kxGLCdys9k6rNHzvmaFuwaJKCvXBabQHkxYcVgtcTnAWbFbLgTE4nPG4iGhxgWzjk77K",
  "key12": "2Z4WweYcAJCypsME71smSEiQu9BA5XqpV1wpmQXp8hoqvbFnCSe12gkkdEEk6nxCTPJPZQq76xETQWk1yq97Fnmm",
  "key13": "41any82SQiBUnY2xEHJG3hssb3g3hWX5yRs6Xi1N8ABSko7izjGnM4BLL5dA3KnYWbx6wutTCmwG8cWgFmwLsnzw",
  "key14": "9i6nSkmxQtGT8ho2UtLCzr4ApHPLfxLyv6s2NoS8KvwjExJHKKtNis1K8DY1MEML2AYnXwmTd3oCTRRAoEEayry",
  "key15": "Zbk9UyS7vJ7H4xW9zy4FKEQ6drhp3L3qV2XqzmTYd8Qs9BdsPftv1rtnXc6VJQDPdLb5fR7LdBnGK4PYAgqSGtm",
  "key16": "2hHgZceNKz3JUDPHbr4YHc7gcZ2HmDSzPFKVqTVW8jUUgynaE6N9hyCVLELCvfvLJsScjxZZeBCsZz23rPKYQ3K3",
  "key17": "4FAFavTCw7nVFz46Sbn311E4tzoGdaFCGc4gjQCQsdUpmjh2HXHFAycczwRb6YPWfrpwzzBFpg99onmvtVKLWFFL",
  "key18": "5nj9vvKUut8z5ENnrEw7eQLBri8t9AU1QXjspDHhUgQicurGxkZcMEkQMjsqHvP17X3MBrAQbfFQGy7MysEFs4fp",
  "key19": "3V1iUvHWANenbSgfW5kTy8BVZRFFVQiq12rvErtSTQfkV26DqNyFtugnhkmne5ZFGJqVk5pAsTGQhtBmgkvc1TQa",
  "key20": "aZ6yq3wrbzc3Jjja4Arm5CtYGv7YuT6TDk5irWW1sFvKC4U4FmMn9KW3sobRxDC6xKRkBWmkJahPD8tvQPq5vyH",
  "key21": "21xVs1DmWt6d1UsZxhwXUViMdH9A4ifzVuaNh8yftrGY52nicY85v361CGTVADKZ2FKxnJikrjcuKqzPM1Z6eTEE",
  "key22": "ArgZGwgy6t5EjmRwNDuunXePMeWgpoir76chutoveDkCxv2XMMaidwtCKh8Nr56dPEUBPnxpRvqxLhcZTq2bCvx",
  "key23": "5CBcXFA5sMQ6wiVqLc3W94un7Y8R7fmj12c8twUKw1nxeG43DErF5JyUK9vSwE7wBqzrwvTWGNwQpXYUD3DH537G",
  "key24": "66KFUXmzRKER2QcaChPaxmwjrpUViR6xqYmvywhQqc7RdLPr2P6iR6BxvvM9GUgGwJYzAW4i8NAR5w3VmJ276wdm",
  "key25": "2tQ5EFkFEE6NpPqnxzhiM9tdL5BhH9gM7Qa3uCdrA6jdaR2BFFmfhFTuGFodzDp7fxrct9NctQtS7LtUnddg8oiK",
  "key26": "4Wej2V3xPhxJDCbkMsd6h8VxjSw97eqYjyhvmHXVzg5ijNkMVLZcqMqvsWczWeYfVF8m1CY1iNU7wQNUY8BMRftw",
  "key27": "4NKiz9bhZjkTLcuhcRXfmBDJmxT4RG8dPVmsQ75H2BjRK3U3cTcqDF2MbFFf4xMQ3ASP83Q44GW48KD3SaXH44LJ",
  "key28": "4MWZQcUa3b5obDggJ1FVEEK8zqydmvKEpGsAboy8XQFffh4mGkiKDi95wAKfUaoi86Jpmr2QbaKBKtNga9eFLaTL",
  "key29": "4ac8Ux3q1UBaE2iFzwGEEUWXHdtauPqfTgcGM5BYcDvfuL3zSqFcdUri6PZdpUXX6jJ8S1Yku8zCy3kxuti4KEU5",
  "key30": "3A2w5dQmarqoBSxx4bq2qdfknrBHg2jKJS3Kj25kYZbTfhvB17nGy5yr9VLmGC4eS1TQA3p4RvJbYHfsMXewLnG7",
  "key31": "4rsPUkgdvPmPdDN4yQRkE9teLbXwmGWvdpk2oGKfZVaZN91knwk5tQxMKT9UzLm24gCP38tpoGJC49JYag26HXp6",
  "key32": "4uMrQkd9UYSqExoeAceRbjqtREa5aoQcsau6M8R1QDrFnL31giv6LeJKKn1o23qm7u4kyMS3MdwNXotSrjsz7reZ",
  "key33": "26u2M2gRL2u94UmzJXYM3dR3yrr7yPV9LZ7H5UNqSJLRHyJqyTFUFXyGgsLWLpj42Dgi4Z9wUEhX3N8MYUh5iY7b"
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
