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
    "bmVgpRXTRXr87PVhyhthGzyEDEUagiAJx7SPxokvZh7KAKDmN8yxewQnwtQFK8WE3gYHtdo7JXSf5uwhvG3wjTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ryZKH5QmzwXdfw2SW8ZFpUTnMXyA4HzBL2UkDY1VZfbepgorJDqY8kKhePxwssruSdJkphLin6bKJ34gR4WDgW",
  "key1": "2VqS9YxNDBDgkKjSxwXpEGghWhyedMdNgo9KYAes2nbYo9Jinco7CaLKtxY2BKfAX9j93d9cysfgpYZ9wqBrV8AN",
  "key2": "5D4gfZv3Np2LRV94R1YFPTGs39kyPBqXTAcon8Lcc8knBrEnHtQjsQEPmnFCZuAuLomBiPLS2hKjLdrbFA3unX46",
  "key3": "4dinsSgaTgfE2SfpB7qoRSCDymYfZJi4W15cjwBjki4jgUYCGqjvWSEi7K7PSxdjkRm5TGt12NpYGfaLj4AqnCYs",
  "key4": "2zYK8jVKeDp61syuo2sRESe5wyTEC5f44DdW9hFAuhPb61eDZGNZftzkeoxq41Bu8L2cJdAHJhdLfGZYx7ACkbR8",
  "key5": "5UzAtKLrQK68MPdpSyL4ZPzXjrorb6fWVjCLwaQHGDebwavVGvBzv55t7K7f6cMkG5kkUmSg2RzgJdq2QiXZVaUs",
  "key6": "5ayMYakouS3JCbFoLgWUAnTroiDK45EPxEbfzZki2SM72mGaN1ZZnRMyz5A3iVsP8JB6xy1cWzT7KJ6E4LtPznpN",
  "key7": "66ErJQvQbLUHeEKVaxNhcSjQaY9KfY9CbMh77KN2PQNhnkH8jiBpLYVLxVn9L81ArziSXrFXkxYnovK6W6oSddLr",
  "key8": "3ekK73iLRPfbhz5CXGpGvMoCBMEaodqcgU9v6Udyc6ZDqM895zPASnzL6EqrtbkPxWkhd1dhgdEBXyV9EckKwFed",
  "key9": "2SE2pYSKxDkXPM91swnymQnZqUgv2YRDQn6vFAq5drU9tiCYGwTe1yqTCmPwciCLv5whP7UqcezibNweEbd2cFiJ",
  "key10": "3XJYsczxBgiDLgNF4kD25iSohw3xd9zW5Rhuttmea77MjEUErGQiFc4Z3xCjf3ubRFncfNNh7ife18uYRMpeRcpQ",
  "key11": "3E6LZAD2w3S716DVbhNbncivv1P7pE3bAuNeoseRHhmi3CQ9K8coizTACGuVSFaJ5dvM2GjZQmZ8wuub872BMYJd",
  "key12": "uTAZ7DW3aTi8aMpMDNYqHFLnfc7jqyNxYnfA2pY2buhaCM45oCbzZ9sp3vV3eZL2bEMhUN4Leja5Gv28VRyJQot",
  "key13": "5jbYEHmMUUq7uc1BhegPRw3ajgMdviQLLkPZy4LvGmJRKspJZ4GHSVBQxaoCznHXTPsTJNWqdWJBcGunEscbNTeG",
  "key14": "55TCNVjjn69D2TkvkAwB57fSnSNPuawFJfduYfsEDV354RtQ8pUkMTKvRQiDAie2NrkCeoJYJHWZYjpZfiZQJ7Ea",
  "key15": "2vABZXF85CYGMnvURJHQ2sraZ6AUT6NpgBBQZF6qej3WFHH8MtAak9fFvAzdZfSedpSVPdmzgmPjvoctXVzLL9ow",
  "key16": "2V61ijsrYmVrfKifXBQKs23PxPKUoofCeELLYsVmunctDJHbCfJXrqEVmp1pKBjzv11mo4bdcvXakSXzWbMYJD5a",
  "key17": "uWBAaxZJYS17iWp99v2FoAq3JjxymFS7hWc38jVWVvw6E2AcmbYbrxojiJAF9pZt9FyF8W3i86SVgTuCV64SZ6i",
  "key18": "24g1C7dATKiH9D3QgoKamEFhrECnemawQ8JstD33P9pHjR6EZv3Hkiruxsqi8ZoLiVZs81nwsojciRUYttGYffF4",
  "key19": "2bQEgGL41kgX1tJWxtTQf8YeHyj2qWaG72u2nwHkKZ8FDd7fZhxTMXYDGDy2q5wh6hoXJmdPwsBUHJjqyk8t4jwv",
  "key20": "4ypQXr1D7eao9AGRh5TJhekn1iTqhCzj5AZfyvbtF1YDiuLyxXPrjqV5GyChEHDp7EmtE8cQye7T8Y7AQ1snoqXa",
  "key21": "YZVS8MJpxohoafMUNBcTA5sSRMRJgPS8wbpm4UThDqs1j1vVdirmX2JAASR15Zs6RMonfvEWbqz8agxgy8Q1tFA",
  "key22": "4qFDbCVdn7o8BU8xx4oadEUMenm4BynscEpcBXySW8LyvbiyD7mhRmXVc93wrx6KDpsXZCY3uTxNyGQV7EerYw3V",
  "key23": "7U8nC2Pb3By27iATNsqAWNMgH7utgNMAked5hZvCqmG4W7KBPLJ5ZvFi9wmvULRYkpDZKC3pHf2gU47ABjX4vDw",
  "key24": "4v9MorVspQTGnvuoRh3oF9kxomCTKdPb1QNLRy35ToT5TGHiZMKY47qQ8EA2jaMZqY67mFD2pDqcd9re3U1PJm7v",
  "key25": "DATjrd8d8h6PqNc2qE2BDZgyACfwrdm2EAJkvUFYgQuj5h6fgdXP6aqUBVUKLzKkSpP9HKkwSJv1v3SJ4NZk44C",
  "key26": "5x8aWXmTtkQqptNn76yCFmTn9QA49yy4xtDfprNKpGVMWPyB9GB3yFxW4bHxUsQPbBQQR5L9dQrjTRZnJ13bWHsT",
  "key27": "2ZhDE35NiuQPyTTSkrQMt4JEs1pDqt6fz5R2YT5GH8xLtsikU5M3uz4Z7adYPLuMda8EScaQ35hnGRvmUfjhmvEL",
  "key28": "3tEvNAj1A8HMQK5PGDHKuUXbs4rJUP6ccQptuwsdxLnGJSmBeFhzrYoBdbCkPa9XkLMakaAVdtGh8x4ikRFZEsJF",
  "key29": "3ZpCuQxFjNskoTVetAMAe6WkPpJSC4kZtKxMTDoeJokeoZBgcdMnt92M2B5H8VaALmLNTJcaFYGWtX84CxevDXt6",
  "key30": "228CEteUpiYxqNHxwPXbSWEbjxfrpJZp3AmEJs1SruuJf8kopuGFRehX3MkBxYPk6xQ1NcweBY8SQTwoEmgbDbiq",
  "key31": "2iJU9bVgnyM4Ps2U9ssa1HX3NW1s5DrVLTaPGCzg4s3TLyNNkgLWEkSTYMFxBfnEdnD9A46AQt6YcPP48iWRmv7E"
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
