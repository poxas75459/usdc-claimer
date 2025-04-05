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
    "4CMqqx8XcdXU15JKasjPzY6P2tBp79HkdjywDEE2AFdPLpht2gFH62GbZfaZZuT634QVytFuaKfBv571HKiYyc5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UvcNPaoCeKaELM4pCzSRq1YVTXYq2meaXeSDMKQTmQtccmy5dtq5CBPoXoo2eWmHbyn5fi5H5XjuUT2y5yMVLah",
  "key1": "5MugYkvwdeQ175TiY1vKeegoLWPfDbd7MZsNnLrtHy4yXthT7oBcpyC1AwnbLQAQiSk5jUnFauLhw141eeQ5Tfzf",
  "key2": "4LaecPjRumBHc4S6o49cD7Q1MhEzE8ofTPpXoTnviKYcQkvrRAutGWy8xjedcBRN67CXeBkza6j1HvA7FyV571jL",
  "key3": "3NPVeGJCoW7SDsA5Why4PWqKswxjg7L6wrQ9LK9AzDaQeZ5kvehRy3EBfrYoAwseKbe9ZCJfYoiXrm87csL32snJ",
  "key4": "4smkH7mKCKq3ryx5SP8ZQe42Dms67w1qyaNK5uUk2k4R4CmzuKBaS2MVaV5Xoh4CPAsBhuPJaoLtEMVKo8rKhUxV",
  "key5": "3FJas9HewjcYSrDateqFpUDCk74uBe4XrcZVbx47sG3DmTSxJsqKVXkcUskE4kXEHiohnDbvQ5abkTi4PLGLcDWc",
  "key6": "4oEjZCXVcnZekpZcyCGrmsUytetXQDe6dN69AF1mb9ark2v3nyou6oMpYqDSnCHNAusoP2qS4HNev9W3a7rFGgF2",
  "key7": "2W9bbFfQXngihkNifNPgNU5sQXLfASFVNo1qHTxgog2ihHm1RYK4WGjWjNjCULMBijyhCLYDU7BSRHTVRpaJNUap",
  "key8": "546WNx9xNDLR7b9fhCmUfwbM6h4JRwjqaKKV8pBojrmGehDVGZRdRZwSjmHMwMjrhVuaffoV7jEXaUSygMq2Vvwo",
  "key9": "4e4rga3MfUwT6SBaWhfgPxrsJty5jDBrheBc22Y7azzdDGJBy76CdbXxbtFjjRkmxrSfwyQCmCJTSM7LPm9pUu6s",
  "key10": "5LL5kEDBey8FVci7ZhPixxoVLRFpxEzbMj9DDCL194BeWo186cKxk6RLWQ9nQnjvmnZhj6MVEvWVXYqdtP14GT7d",
  "key11": "2CQA1vGF2fcUjTkT8tafyrfuRkWEK6Hoa1iEh65p7ZDx3woTT9N597oJ3Eub2hCBvbLir4fFN7E7hZsQRrF7UgPn",
  "key12": "62SnyyHQvNuvUdrVT8xuVtrwAirmBSGwfoCNuVJMDtm8QywjjgooiRx3VuY6pzLccMcvazVn2Nkex5kPo7Bxe7o4",
  "key13": "3iv7vYZrUZtDdac26LzZ9KjHWjRkCokF9bKnwvRiVgMZwXy2GLTbW7aWSELFGe68DRHBXehAFEp7Bo4a13Du3A59",
  "key14": "2M7F2YszRZaBKdypJpyxPQ8uE2t2nM3YGVDate91PJy3e7cYoG1rnqbyrbpdqi22kXLa7vrTnCS4NMAUzWjG52zq",
  "key15": "48J8GoDMf46S598bCuti28Jtin8zi6m5QN9woPyioWHgnaxHwf8dTz6EmdmJ93MeyHFzRgf3VVZ2fb3ujkU8FoU9",
  "key16": "5Yk9AsC8VqU8R28mnu55JhGizLpqi8jXWkrxE5VQ9HnAw4qZV8FzyjwS8y4DpS6XUdyqKqnRyxF44XmY1oDx8T8e",
  "key17": "5yxMotX54gym4uiAYXsSLFqQrBMuqXFUAFHbxtKWbrKFdFsjH8JD9V8TnuDBXg5TDPQqEfWaSUcWgsdNcVAZsem8",
  "key18": "X9nWGfxbmZnoCXJMP9zzWC8bPMVGfTBzPDZs2gFKiBkQKJJ8DXMxxHbLTvNxE8YFxdVS2BgPYbN1np31z4c3GAH",
  "key19": "5oHDBz9hjw6wbMkUP3K5YnbUeLsbNT5L9T7vzxyDMzyBS3hhBL4q3qYm21ypygBcyYa9qgoTqc9wNskmxQXe4HvV",
  "key20": "4kDGwHJERAH5j4qJzyoEyeMjyEZvunwFokWtJfaXy6dM1BBML2EH2yXdiY1gyfHeWMX23FAAQPvhWVPfKLVeYxL6",
  "key21": "3HmuxG2VQYBzm7wRAeo2P18gJ9CaHWu1e7riEy5Yoj6T35YFMDLbGzG2G1tPbYF82xZMc7DAgwp64FiEsvyVm5k5",
  "key22": "K6ZykLg3d6rvCFbzFCccubhF6bGpMJmb3XeUjgAooP7oCrD7LaotELXE6aRQAsZJ624ABx4XcVk65hi7iANw4QG",
  "key23": "4Uq3kXoJNS7c43bDA4kefTdsXsCN4wqVJanpKEnvejkbUXN3RqNtHz7tNwBuLwuEteRyyhiX94xe49HFkkpSKS8G",
  "key24": "EcWzMQujHorwveC2FHCASYKWmgMSis2SLVhKJQocicv3fq1Suo3ZjYVZsyniKxuYCAqS97HWPyZfAuiSBw4yPqk",
  "key25": "3dTv1izgS2UY1y5epQbmLn6d5WYJjWR4NtqkbhYgcqM1hSrTV8gA3ymQhgX1s3SGfsHxymLWtDbnnvP7DGprSL4J",
  "key26": "5cAQGNLps5V4ruBE4JAnEBuWYy6DrH7397JyYsJ4QMdswEsS4Hoe1fnw1CRo7GYV1L1HXQozab8qcpvibudmc4sX"
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
