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
    "4mvsiibmXnRhFY1yb3Ce9j4QKeyZthhAjQB7E6z78LXQpuZa1nbjr8KAMaTX6o8FzVJW53qbA9xxQCEnNNUcRB2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n6VxyR8TBb9NzFKgiHK6BWpi9Ccqy3wEt2LUfG5P2JGpvmD3BQ1iBsmivV4WuWb3uaBMFekdS1eKBW3bjJWSUjj",
  "key1": "5hFdiPLkCtdxUqAnbDBn1EFLXjDSfXixTjhzCL9ybmMNKUAMgJxZpYC42EVSdRc9D4335fn7bAtNkUMi5QMKWB7",
  "key2": "5r6xLv1UXChwhickd6ucZ9Y2vmX8JQexDwQG2QkxKkbX8uqMjzUn9VL8F5H9pPJSLTiPvfDJNYEqEkdfgsD93aE",
  "key3": "46CqL9hXw6fS5kZotMizMXtbEDGZjHjiQWcqNChrVr1rXaFAtGVSidnZenTrJj9NCQrbJW9ZtQVHjhGzEXKg4JP9",
  "key4": "dz8GtAqN3hFjQYztQFkiyvPudqWupF5bFe6f3DywFLk9ZLyEDmig4YxE9qUkrxwfUMEzMc5RcD7pkedZfJG3G2i",
  "key5": "4341VSo1mgSRLY5JKKf7KMwqfGMzhdUs79mo7CCyowgYPJpLxNrkweERj9vRyUV2zrMLjmi4TnE7xM8TCZBfz8wr",
  "key6": "2uaDgyCP42EhnJTaZw6yDVmmDvtghiRgUMgNnwnubCxSc9sUbq48CP2SVYKFC7wCCUxghi4xGtwk7WE3wM5QhSqu",
  "key7": "RNoAias2v1UqcEZRxdmDtVoQRqUqVMVH4hXcdUpDF5p6b2mN61vfMuwfCfy1SDuesVza9HHrsK2RQeXikx438HJ",
  "key8": "563SezZznMti1d3o2RdHgAi7XNf2M5eeSVDoqnMz3Q3dhvCSanBfGc1oohGuAk5f8hCXkTD8uwspK24HU9K6kSQ7",
  "key9": "62f8yEKZhugHPBnenf7chxXrnTmzkxotAagN1CckDYfGnZmzTZs6bW3ZNjE66NnzumeqcHPUNoiAF5BBvuajbsDC",
  "key10": "4JNqtvU1xcm1dXEgSrVUKQua1gkQaJxFhXrwfknUAp55g9LSXp3GwTZXe8UXUhautfvTEjgm5GnCFyvhWuydYq3j",
  "key11": "ED7JUM6JhgibHcSjysDGQ6dnDHsWpz6KV99jHGW2cL219UhYRATPopC6qBnW5e5SUyN16oxiqNPQqJiGK9CFZNB",
  "key12": "2UsN9jMwXzVCk4AfYEixJ6HuQACsKtWMLNkokdzGsDLWsYJpVgTe2ngQE1wE4r8eSZCKG3GvdDgEFndXyVvAVkng",
  "key13": "3yMdNGxfG6jtYin3NiDTNGNAZcDHkkgAmAqgD8jGwfwCpLgDVbMuDUR7LXvNcjiZAni37zQKoraZngmaF6eRZiE7",
  "key14": "3Eru5p5FXN75sYbZ8u3eeQ8NkaiFXb1p83DRMcbsik3mfzvoYHuHe6tZ16fj3BMWdTuRo2sjDVB55JhBbeHBFJ6o",
  "key15": "2PYZaahm6FxeBT2Lb8YWxZQGz8u1y7Dof6KEdq9mBLorh7Jz9syFFMpmHiGgWm9cdnq5EQGB7e99u6orqPhpJfoZ",
  "key16": "AgqXSpqUqmLNoU2J2B3ayNXCrdieaPgJZRrgL1oAoDceKK9oTxFL4xY9iRhLaHdgR1i8HzNk813fDDKpeW9ARKd",
  "key17": "5NbCx9yTQcTo4PcfcARpBi2RJc9Raf7CCP6Bs1NDrJZeRsdunbxFurbCuewNfEBwsvB1SnNGmRNyKxP9Z2x9tPn9",
  "key18": "fBFnuWQe1NviQWBzQL6429LUp6ZTxgj4MxEfkyrRbSLTiP6gjLWxe5ByZVnvdxQsbiudrACM2zZHnm4FccUdcic",
  "key19": "55c8RR1C1FKXkajcBPiJ9C4xWtheMPqt52iyNmrYKEzXuZ7i7G94HT1kKkdFgeB7Jcq2WCxc52fVpMfZ8qZmiVFC",
  "key20": "XksqoZ8umKToDogXmkVgcWoANTT2CiistXnohjxYXex6wq1cGSGFxcgp1KXn3aCwEzbgsT5PuDA2sK8tPdqRBFE",
  "key21": "3gD41SwtPD9JzRnCp6h2iGW8fgszQDAkCZ8VAosovxEcCgJve33N728HhWhmS2tpodaTQVQCzR6fh1LmR4ZrTC5z",
  "key22": "2eHbH7EddirJvdegqDi9seeEDGqgs41n2ZkzYwrLFTKEbgxUfbkCZ6AtXVnfNwYPHvkfkVp6ovRPiKUYEvHCDP94",
  "key23": "2upWFJnHvU7Ysm6ek5xt8iYHEBtpuxeAgBEoq5U2Sy2dXa4w8Sy78Bohjqvco6kFD3CrjDzoUZQxW2zVETxZFDgv",
  "key24": "37LHYQgqYAkwDK7d9e2o85CUCSRJxvhwcoTLJBTBXQbqpQxMQTt2WzdNdBkDk36gFt1udhFHqXxop7LJMtXwAYWg",
  "key25": "DBtGwZPNnf4JpqxZE6w9GgqNovmptquUmsVy5eV7pcGBkCmJNagF4PSFo1bypZV5DC32i9ywi7PERT2eNbKs7qQ",
  "key26": "5f7wnFBcVACRCFhkPJk98qzrTzVP4LmRwPBVeQHwpbc8J77vs5c93p5jpeqEEkhG4m4RTq3TRwbuFK9ypggmEPTx",
  "key27": "mH8qPyuBkFT2NCEU9B4ptgPqLjzeUKUeJZ1A8rKeyphYjAKzpGTFVyQMxuLBFYdugT5cCNPELZXsCWaroQvYRJ6",
  "key28": "5GtCQbtyzvf9YQpvGJuBzX7w1m1kKnJbrVqmbqCUk6SE9V9nzyXmt7AMYEUHnPCGTv48ZAHtsGRACTV3BVDnKFH2",
  "key29": "3T2h8GVJN8m9hMomNGVDmunYJE59i1uynJXBMjtVg6c6KLmXeB4cAyjbvxpGWivdsfrHDuuKhVnDEKzDLVov5Yz1"
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
