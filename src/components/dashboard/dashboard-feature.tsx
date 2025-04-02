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
    "218GSyyB68opfMRdm4saEcpB9bBftnSGwNHx8DYshzBSPSCjk9Z4654frByPm91ALR84VMNqYSp94198hk4qcD5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25zQ17f352xLa8sAYvGabMBJxSGi1M1B7MhTJiDwmfV9kkAe6tvFF6moq4gNRevub1E1rWbBge9dCbeGEaNx1q1C",
  "key1": "2VjV4eL1gtqKKcEY8jRvUpH7fR7u4Uu6QHaT6GLXVH1wK86cwVZk6KVabkCbWugDouiSooe3J5UvRK1vw6s1mH1c",
  "key2": "49aJ9zu9P5DCkrtNGu5HCE69JvjpnL7SRF8XXWdjAeMNGn2BtpmUD7QYefMwJe17aHYmyXbJRNGVW4c3jQq5kUzb",
  "key3": "2FzqfnYmkEDEPR9BmBYf1oBc8uzRmqg4PX7iYENyFWT3aToPskukwvszZJUJQVC47bo7s1JxBd5RhYjyHJqU9vAQ",
  "key4": "tfZz2B95C8MUbfKUkji6jFjqLvbDDpCu82Xi8mSRYEVeVDwga8LLGyPJB4DBo7Rqn7ky1N5g2ED2YweNQmVHU2v",
  "key5": "9oooYbtaLNXPsAJbsppg7WnbNnuhHVaif9Bzpsqaid4fJ7yEiD1X4xRKwHE4bagEmm2PdX2nxRNJ4HdGDL1MZp1",
  "key6": "5Kq71PPL7476tKV4DUdxMDYD4HfP5any6HcKcxJbDT5ACLzv82QwBrYKyx4dVBUUi8LKZ6MQuVgiXgXWLKr7XFSq",
  "key7": "T32NsfrbLotGuUR3huxokaQWnoxj3Q8XuTUkay5edzmnFTX2osueG2o1VYBxcNCJXegZGABrTou9jhdjKEPZsps",
  "key8": "5d5KUbwcRTAZ2zBVbUXkYuEWmCpZT12rZkoQMvf4qtfCCuHvMEHGsMGtMn9QRWF7Uvp9BLB71TF3DytTyyeQfvcZ",
  "key9": "23Px9WprWiwnjM7WHK4MsT2vsLxcSdFSfgaSiVTmyT7J2jV7UwNYw8ERuGcQj5o2mWpQAaTgM6mhmhjWUnooRRjQ",
  "key10": "aK5WqubPqrAUqg15YijKTnGJ6dTrC198mZkpNdnMLUew51bCAoJsqPhbqaQPw8wQVj9JLTv98iwt4J4ts3SHbtK",
  "key11": "4Q96N7RxYv9AwnSoPpbTpqx7Hutenf3VHHA4MtXumCYAgepsJwtkja6yPPxBZasLLYdbdBhoYbZ83SC6rtPiiJcV",
  "key12": "9pD8tiDzLBKUoU4sU6MxiDM5HTzAqtWjV2nKN3mFdGaZnBtysB5B3dLgC2YJqbwDYe4q14MLB9aFqZtYnYiHpq4",
  "key13": "5XcZDZ6qvTFL9xaumC3xqGhbiZESK1imYJKRxDxZ6mQyxto9mMMe1ajea2BwDHiMp8ZbbsnFLwvZqUC6jCWfrBRc",
  "key14": "4PbDNSstUhPKSnBJXEy7PeyKcLrbpztFP8cKT3RZsPH47A2g6G2K6nW2eRk9CnLVfWmAikLizKQymyUnT8Cc9oMA",
  "key15": "4bH5C2VXRBoKZnKvFJ5p1XEvotW5vDENKuPTPJarSo5hRpWUjEupdpvikKyfoAnsiGQfEmkoP8UfzpzPdcgQSeNw",
  "key16": "2pCMdmhKwKd3yPyisTHY2hP9AekmDcB8uZtTdZDyZj8gieHaSAtkUamy51NqACc8g3M62xY4YP3fu7KJtZaMp7Dd",
  "key17": "oq3t3PYoDFCWcNbD5moCBCdC8xFKzGtTgw5biAdVSdxWSn9M9gfosNvS43eRC4uceUM8Wwa3ZNTTodkhUy5U98D",
  "key18": "M8bDqaSq7MAu9NHn6dEwDep4VsGqrcFQgb3a6ab2b5XkxKfqfYj3hV7Q9PTc41BUPFJDBJfnzMfrbtkADektp5f",
  "key19": "4LmuuQHXCEN45uWfArxRK1c177P6vuxdKESNZCYBZxWTGXq6stXYQP5i1UJZnPJnFWPcQZFwS8x8CJo2YMdmLFoT",
  "key20": "2DYcfhGm8hP1y23ZN7T3aTsMVkxiyB48d4xYBM6StwjWvrmkpgtMGdyL6TRjXVP4LNbrxKWFVjpXH1PEKRidMSjr",
  "key21": "2tMcU6QcR5CGn6uEvfmBsii9yJSkTWFaYdVFj1rtGTNii3cD76wiZAE8UZek1MhNJS1iA2RiXJHnLLT2wtf9ENnV",
  "key22": "JbAobGngzdrVkSzbyt5rBJcXwa2dJeycZcGKr5rdUo8SECqwjcdM3GiHSf1YMFBWnUrGbFDnwt8cLP9Df4YyMNH",
  "key23": "3mMcaYfmtnVX6zkfe3sGADpxepxVhYNifgfoNMNjPw1PmaKaMsBcuZFG6ixPHYvU9jUdwSeMHkTL3ARHvdGEtcjD",
  "key24": "63j6r5J9EV5CX2CXGaKUANEgjwUYD4DSsnuRt9N2cMfqW2DRW9yzQSu2tf6XhikpyHBqJ5sQmuvr5DvFJ5RsR8JD"
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
