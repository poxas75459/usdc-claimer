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
    "45gchMbTfR64x7cCpBcyo7m1K1PX4p3etyWn9knMEcyLLDKu1mvuwXbkgPvd28WbcpjWqhDEetCEt3xtgmeV1RYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Nr3MTpinkYZBVXpnuBQTHu2pNbXot6k5Huq3xDJBC34FygjDdYu7KwYuJi15qRPernrYQEFG7NvGx7WNWJmNim",
  "key1": "GN2JsDdsCdsgL3hBeYXjATb8k2zVC8Sh9JcMoGTrthnWJbE3sQBEEN2e6bz38EneQagM85W56BRg1Q7fefnNjnB",
  "key2": "2fR3GXe9oQA6JP8NknRj6rg83cT5zfkbcycJFkpQntDpDvgT6LKnKf4XX4CQJDKB74GcUK2HQkVfX9kRkNUiZidM",
  "key3": "3bMXME33BFaiQKTTpWvugHKR2HSLU8NLzskJPheXv7kXYvGDUASo4wnFaE1A5WYC53TJs733dfu9JAq3xinM8iXU",
  "key4": "5i2iRxwSKohPr3gRm6FPLn7iScqWiM85hUyZHAt3jpheiGbKp78cGcqr7QsYq7EzWP6m8v79431RGEBVQ1uadZWd",
  "key5": "F5nJ9aWsdL8oRWBrFEiJ3mrP3WZ91jmhj2Hejsy5NWSbTdKR33BeTzwuzJmGVW5pASQTzHzPoyHcUkYJFey9RUa",
  "key6": "wnk4FGxgXj8m7Wod6THqd5Pd2KnP1bH6V7M9b9MbeDwjn7EHRcgWoP3iKDn8dsjJFYqehx93NmZgYpEMNWt9WZX",
  "key7": "28A6koza9JtMkbWV1qjhezZ6pkcqoq1a3mpVC85hoNkW6EYGBTArzZ1xmZX9MntDxLWCJDwmppxSWHeiRGy6CoSA",
  "key8": "5EkY8wQzotuRSvL5KzcY1pNqoYcSWYAQyNzyzYmZqJiKDyhewCLoPnAG4eFyeH4m6FB465bEqtDq9z7pKt3n3GyG",
  "key9": "3zP17YgnUC8iNkrREghPqwB5hfSRnxgBJsXDyRsXDi28trQMG8m2By494FZR7evHZbsrACCGbPUSYH32MPgrQ9mZ",
  "key10": "4iUukxg7j6BL2pKkTsAbp2sGks4uMRd3h9FHCH9K4G9Nq97qaRe8zzt1mSVyP3rPdo37nMkBAvALPTGkvzkksSoo",
  "key11": "n4fBzMUHYA4AiAt12YhbnTfgHPKdTKAL3NazqnvYbvGWshwZKpKm2vhbpDVzPFRraCM8ZKSm52uMd6Qjpbd1TRL",
  "key12": "JPcriWkuQ9bgkPAXXr4j6Hg1MxDyqWQ2JnTR94HxVo5SWDEbnv3M35twQfPehqTK2HphqebtLR3AL83Y3McPF8v",
  "key13": "2fDtKLC53xq4iQmfwNDmQKnQNtwagvAcoe2Wvunwjgb2ATaYwRdnG6ZBD1kvzk9r6Y68tPCdUrULrofSR2F1qfz6",
  "key14": "3awm6ApxXWEckAEM38qv2NKMQmvDxWUcKFXq1Zktxy8EUhSXnAVkk7RfWs6LFGPRYKkL6dQjPZA2msiXHzbwguvQ",
  "key15": "54iXfrXM9cxbxkQ1Hsx6nsgJdXb4itR5uRTUXrZp3buDZRSmUsY5KP1MZeUZpVJQ9LAGMGxmQkTg7KFVisVdoKcN",
  "key16": "59JgMEYLwVJ9b4kXBvBbwE1PFnBLBde1dkmM7U1RbVriomqYLaNPcXv85ku9nMCGE3ihACoy88SKgZbPN8E6QkRm",
  "key17": "3GoPfbUCnMoLzHJ2zmZeTKRBLXNQEZvws4q51e9Ssw5thqQaLPoLCHJvthmJ96RaK37xYvRBcfvQckX7Er9CcMpa",
  "key18": "5EkdvhCRayyhSRcBj2npjZrCpzXhQQ8Gc6cmHSQyi9XzuMEqmGJdrmW8PKcGnoPs3YCt8rqShG2y5wPYmyBesmoW",
  "key19": "Epphyth4QpXdoWzt9UitFN1jj3MRzJ3cyjY4KkZnGEg4zb9j8HpJg9N1YuFbyNbhe8aSKX8aHyzpjQAhNrpBLtc",
  "key20": "zy9N41a6gqUWomJEgEbtJNVa1xYGCXAADUSbY6M6LPKKs4zBfnxRHE7DJEMjeDtAtVdYHVNBuvFCFb3wwsw7Jme",
  "key21": "2hVcp4UB4tUouPJkA3JSKccQ31JmhaFV7o4Soh7MufLixkunKPmc8UxbbByRPjm6qyVNQZ8adZPmgxcmSSt3Wj5G",
  "key22": "4KWfXzuYx8ZDWEKfTcJCU9JdEZ6szeTB9XYu5fGo4FUHUUjRgVr8QXVYcMZeJy2LyfdT2BoT3vLcBiTLRznC29Ku",
  "key23": "K9vX6eRX14D2W1fGsWiyq5fqGBnmHkpE15zo9JR9SJGRdBiuMYWgSprPs25FV7Pn2BVQKUhtchVGRsDjG3aioro",
  "key24": "2JmgkHoW5LiexVFVfxKDA6LngAMbAyYJa3Ch7U1Ncx123og2CnVw3LBJjUpo4H33JHRZ5KCJaFvzMUmYwHzgmMGz",
  "key25": "2CLULfY9cdZKbuao4K2bnecLGpgBpGFVp5t7n5sbm7rYTeaG4TXqKymdAxWTYRhQ3X6YbtZwVCrdmd5FRGZNYgB9"
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
