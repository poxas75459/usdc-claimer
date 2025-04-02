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
    "iGxbhrcMWkFLZszBnpBb1gvXVp9noRGhsXvvaD9a3ZZF3JUjjbkmHEVYXE19H35X4nvjTG1mMQzvNoxnhCdGgnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p7mtio3fNwhPxEud1MpMUtEB1FNEnvyAroDrYoew93AT5C1wn3Kj1V6EeHwyX4NuvRo9vnrXi8aHL6E6b7AJsP5",
  "key1": "3yKaxEXPvpzifQcqTqEKa43QnGCrcz28p5zk2HaqHZceP1x8CYFvpKxePBtYeQREuwCG76NboccXqyx5eGiW47KF",
  "key2": "5JAHuVfnuf9AqCAKYRE4RmC998TweQtnkdiqXEJhsb8VqKWDReF2c5LpuyQPCMCVTTrYXtZ5FzTzq4x9xsz5k83u",
  "key3": "47AL3rTDzYY3ESqUcq4oqj4v1QhXW6oekYRTprWzCaDUm6j836GuVtMwLSPda2KE5LKuJw9p8Hmi3JeLcCjP6Rox",
  "key4": "Lp3CxiaUFdBLdedgpTL92Px2i1i5kLJzxa72N1wbJViq9CQkeXNFV7H6W5YsBzZrtpqstwAv3MYR2nvhbNXuMmV",
  "key5": "1NEzKBHvk9B3bRZx2CD4p3rUtkKjV7iaVyqfcvCVzS5ubYCXfyitAvSHufn3L47mcoyBRxVVkHR7UGyDy7y7wzd",
  "key6": "63pTMNRCtJxwcqauY1tpWhTXj2iREkeNT9TQXStpywB3EYHnmWHoe6zwYmWCxzXesjG5imYArakUuHp2WuXbB5Xy",
  "key7": "4DqRoXJ3rrL743n4vXbzxbbBFq17QvuweMSHnCa9MK83cqvq87dhXSdz5SK3wNvn88tMj4o4oQDTeEe8ngqesqDg",
  "key8": "uYYKdBJuGq2JrgD5PtL7qPvuDma51GCRbM15s1UmQt3FMVK14ghbT3EQTnG6uvjBs8ZLWoR4bQSUPYJ7ctPX63D",
  "key9": "4GumGSQZWtT1qJkbiDnSs5HbtsyydU6MtAyMPEtR7xoinCyt7cNuUL2aQJLS9Lecz51E4mSvcJe2jj6eQ8XzVFX5",
  "key10": "2toCxAf95ijHBi14f9r7WkKomXdoEsxrvJ9zPfNorzY2yebPWbPqeacjBH25N5CDwn7uez1Sgso1JYE3XxQUJj4k",
  "key11": "1RSbBkT8YJZxYDG45GjTqe5J1k5A7Lqm9jtBTwt3DMRfTcPhpqGeu7z3p5eNXhWwg6dobKhkXtLdw1r4uR47hVA",
  "key12": "58PAzkgKN1bjeiMVcP8FoNLuZa4tGpAFsme1gaTVcCE8rRotYQ5wtK7Lnzyv6Z1bUmc32AWLG3ZDp3kPfA2iityY",
  "key13": "4hQy1BdYiVEEQxcc9fTD8FbSYW8nhWzXwuy6q7GkQfx51YwY5Mq6QvhRAEwyMjN3aC1WoDFDvH3bnuqxdofBqfa1",
  "key14": "4iUNNtsJWh4kjnYWUGPtCCaAisLdVHm3uoURc6qMbaBzWqR2HeGcgVjJ4MU3ZyLdaNFasrMDtbTBPXuz676xNruq",
  "key15": "2qdo1BvYJW7KsSLnUnx7AseJQj1a8Y6mMuhp1G9Z6wLtFo8tkuV55Js58Nk8DXVw1WMLNugHfLMiH6a1YzWGj3CZ",
  "key16": "4dyrV47SfmynJcsBzbG6S3yGCcuCGsQvHi4fnHsyPKmYJ9PiGiofyA5XMBiKnXtMEx7kEVPLEbRQ4jwvTwyR79k1",
  "key17": "KwNpWRNfiGVVHt5EQi21ARW8LSfJTg92z8qGzfvRi3CTxZiaXRLcjzYUZWJfXPXx2opgaT51CUSvt9di6MqZ91r",
  "key18": "2kFTrxNaBfQjrxq3v9CWQGmQSY37N47hYwrjHuf6ay5pqSN66g4hhFeh3uEjqEFtQMoQFsYY3yenTFG4WpVRwppe",
  "key19": "jbr3LNnzLzupUhub92RAAG2nHDAfXfwUXduxPxNwQS59Lvp5Nifh7eajoykjsvQiqJ1kZVFqPB9ove7iTvX8wgG",
  "key20": "2hknbB1X137Nx3fi1g9E44EtLRcgZ2dXX6EMwJf6r2QnLqhPtmnC8oK1tsuPf8mnManwMvh8Wnfs7X9bCnMhivm8",
  "key21": "2GAmzcDtna39GBHocGyJz6Kdh1tjkk8ab5HUqbVmu4WVbgi5Zj7AA5jtmiYuNmsm7ynsgV9crRzF3GidqdeQ1rs3",
  "key22": "5w2zYfFPnGWTFNpxhaVwkzm5u7YRxf7zTYTAFpoNW9FTm6WEWcxPZuazksQdwJXvGHqmsFg6u8bMJZN68FgaS9ds",
  "key23": "3EvPBxQaF67MnkhmoCD7C7bPTLJw59cpUJbU7Y6zunsYEVFcZbPuMDuRw8N51cJYC7mm6yeybNbfZ3EYmA63JgXB",
  "key24": "2yLyHHYjkpnyDEHRLoZ4V8wGayZYDuhzLczFE8LCtyTx1wLtP6fkjKNyyg5QQ2FThHRE1TTberEAmbk9dpoXFtXv",
  "key25": "61HXF9Lo5Lq9QWwbo2d8DjxG4yLx8pB2RfeHNrfFZNK2tzXYtVrDto4DbsHUwuxXeLqL45MESFyYrZUVguQHdnbK",
  "key26": "2xgGJrutCFqSdD7aDfvrvbynv2dYfmVJhekF4KekM4HkvK64w33Mado2xBCz6sFjLAGmyiC3Sqt2hXq216aeGNJo",
  "key27": "5E8RY8ENrSAMphKAaS6qqVCMb91aFREQMAHX23ZcJEvSYFBvtSAB9qVMgLTHCJjmTCVhXq9JXk6vWgLBh5b7zT1c",
  "key28": "u3t94eGr1UgGbYFxuBskHpaZ15UW9uRNJszJagwbyxh5LkKjZUG922CkPpxcNJakB33ZaJtQB21psUHBQP7njGU",
  "key29": "upx6dit4rrK7merbNEXUptTT9uV7AbjKcUdP8BofS9XD5kXe2D4tu9RiFHaQ2cKTw1MxPuENTDWzy1ZRqYnoeoE",
  "key30": "3p7fmCrjGDwrMFJjBAahSiY2MCAz2sE9juhgu37TBbgdVC8VQ47GQmsqEaYQvMLzUpipq6pWJF6ckA7StEoSvoej",
  "key31": "45U9kzH8nbykJfrHzwRUpGJiGEPWHFjcNxuPgDJrjuWqNyEjZbGEP4r3VEW6d7TnrS1cbHRfWiaMEpbJ71f9ncJR"
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
