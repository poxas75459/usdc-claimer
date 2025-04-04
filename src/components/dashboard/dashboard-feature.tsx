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
    "5ZCPpNzrFHa7S6H4qwwdWr6UZSXDTN6fEt2J8YXPq3K9qg9Pe3q1Pamf8S6ydbhVqQbhjyr1bqYikH7JcxzjWNCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SmRm4SHbCZgaQ9pLnJZ7QPvU32bfWRTRmMWYWyhHRGoAWhQjt3XvRv9oPuTBfzeNKER8yFDd1rWqgudWyByMn1D",
  "key1": "5C32hjgERhTRURzV6VFNZpEJeFYAzkLDAiqmKuhY7JNQEPjySWvaurHzXaDtkNJUQz53iuF1QiwhYZ21xvkjvErk",
  "key2": "65oQPSYud83QqqGTbwkZQ8BtwfYgH61VCKqVKDx7bU8jcN1nhVx8NmnBziMXx1QbDEK1brNqVVmter6QDhd5cqsb",
  "key3": "5s1dUjeykEwRftfAZFqWLcGYx5s55wTL2nWBZUbVy9kBbtAmsuPqN13v4y78ebs9DRGPQNTGjRbVyJTTDmPeZm9i",
  "key4": "2rwtvk81To2Axg34Ho2KtiddWHR4CsUfzk9mxSfTzFWwesJiijGUQdS3gfrRw9LtPDKrWzk7a9P6PuN9GRfeSky4",
  "key5": "2ivHAMyXGDKQjzsdbMy2uQ5VMBeHWesW6w1WjMT7hNJR4ZyCFjFKKs3JQMh9v7ujt9n71nks6PVyu2sSiPqYpFUD",
  "key6": "3Jp5TrPDgfmGcqpHm8GVEd3AWATxZpXw5QdxT5Xv79rpBYHy1NBvUxFcbXNjHghsPKXCqT5jBZqwrdhU6BmsH2c5",
  "key7": "2cxe49CSQ77vALr5XZsKR7t1PvNA7nTWKjuw4e6yoFw8thV6PXQxHj4TAtEqiGxC5K5NVnsnixAzKP4z2yfjHPqx",
  "key8": "5xng7qnr6K59UboNAcXqKSHkLSTbHTPVUaLgCmU2U3H1bNM8KDJDwtM9uTti75yNGeHsbmJcJRAyBc7feCcm7oxS",
  "key9": "2TR1YnE7smdGpk1qXNG239Hyksg2fMsxBxLBS7mHRc57FyNtri4vG5J2Dbk9Mxi3hRr55dDjVGdEUQEeQ3vP89SS",
  "key10": "64MEUobmSxucGjRzFqvfyCCoqSEunqMaGvHq36FdBg3PAufhhGWozmkZYgBt6Jo1uqxDYRtpEfTfzG64mAzp3rMA",
  "key11": "5AfjRX2RD3pe2Z7RY6Pf5Ycx9G6SHi4nuMdFkikrJcr9KKT2bb9NhRQ8ity4F16VAeRpGiDbz28qb4SNKK63kWRv",
  "key12": "3vXzHtyNSd7Qmh96wRGUZN5CtmgCr5ZgEQ6Nigqp76UL5xjEGxjoMLfJm6gMvn2CeMfzUyrfYvxk7Wqq6Bh2owDx",
  "key13": "HzCgmjbNE4comhPtdokMMW61oauRuTEVV6Fuy9S6JqbvGeMUFkH6Y9M8phW5VfLzfJBQMfQcjjPsTP5c6otvBju",
  "key14": "5hZurG888m9A7489vfMt89znogxePWpuaNkCCBRW26P23a5o57Tzt8WTkzP5rhJLAL48M1yd969pFNNAqLDQqVj7",
  "key15": "55bVcmBBWuXX24SQBbD1wZmpwyDVi9A9EnNd4ord5eB61LpyyCTyNYzcY5FMzoGeNbX8HbwEtvoHZ2vrpW6UKpcs",
  "key16": "eV6CLNtNNy2PYcT6E9r5T7d5r87FqyU4YdPZ5tH6f6FrhJgGRrb29Korv1R47VL4SnvKbcm23ftsCnSsR3FpPFJ",
  "key17": "2kG7WywFx7yKvGKE5ZnUNcWarkPPA8WmBfBGU8JJLDmmXdHK4bDvRMGsP3yjKw1tmbkkb53DPphyErrboLybARZv",
  "key18": "5Kw8k1mySadqzNJzaCV8fmhzvNgFPqRi3Ha3SyNv5pH6WFt2VRQZW7SFsjcVhvr8vGncGS6hvZ51kNWerNVSmG2A",
  "key19": "5K5cVjthabdqmzw1545x6aBuBSmEwRU6dztEMJ7U87nqePzumY2VB4apWsXLBTfzAsze94kXr4BdsCqff2gm84oG",
  "key20": "2ad8SyZ6fZv12xK6jbBTihatjHU8rPis1E8fp2xjo3i3HfnF6TynsuGxvcwCRqN4FV6L2F9TWWinGxQ6XnBRV7b3",
  "key21": "5w4779VZbhuGLQqLm9ZzZc5J6QhtEN7gsKgSyhoMxYjb3oUeZkxBTPdpuRaAvmvrjL5c6UYH8vBEkzPSNrB29PKb",
  "key22": "3D8YsY9cBg66Ftd1Nr8x3fhKaSWtfQRqCgveGG2ab6o7KGgiq7WLDdHUVSkVwwTeSpGD396EqvGcT1G3dt4gm85u",
  "key23": "3ccKf7N8TFQ7ThXauCpCxEte9WStoZyJ8pdeAUEFdZtykZge4uDL9m8PucvY6oSWeET7VLzXoqoHkpzzGYATKqUm",
  "key24": "2PALDZmjjHTSfYSFpQJ3L6gnNFEW3UGKgdbNDFNkP2Ka83mRsBeRaFnM9Pisit8CAYfhGchvwKFAJ5bWRzMYHnD8",
  "key25": "23LLRCoHU3oa8dUwLpkUwTxSaJsCYd1Euk159yLRL88B6jVMsymvDUeJGgGFBx2etuLLjebZApZ3sUc7vHrvfaac",
  "key26": "qpVtJsTDegtUtegis3GKAKEm3HmUxRxoToqgXttLdeMmLVQerNzwJ67asoWz69epRGSibmyRpxgkzmNq389K63s"
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
