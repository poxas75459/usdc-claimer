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
    "5qdyjDijh7AEEjXPafWjsd7fYBowS94NfPJsDGx7CRbp4yXoosFKUa9DM8mzaP5QcjoNmDe6scZmqHUdvgosjuuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eLY3X8Zc7SNgN3jTx46wcjqdio4hCrXyxgEA1ju1qwiroFQKph6ZaLshX8STz8NapEQSvfh2oWy5UWGFt9YNqps",
  "key1": "5zFitCQ8PMahXKtuuRLJxbovaW4Z6WdYKWT89PELrmnhZG6ut4PnyxTqrr8PJ723Li4zdg88n88NfaYhpr727WnE",
  "key2": "4YURCHhLUAmQKLeUMu6tUNPYfpWkDHbAEmGRE5q7e6Mc7CSTjjLTvnNXdasXVsuRLLrBPK4ahhf31SJQjnEgAGiY",
  "key3": "wHPo25S6jBXcn6oBpMUBC7Gns3QhwSXwidx2ctSexb6f7HVXzm2AK834aNpfnqnVVCkY8XAFv35e1QQY2G4Yxzo",
  "key4": "398R6iyzW7zV2xnecgmTqFYqKWCKdrH8LPsqRUxYME7vkY2DJGizJr64xxu3aqnKiVWgw13g391JmvCzQZ9ADm52",
  "key5": "DKyV1YZADUJXh5HxQZz7uNKmjicg1p63ov7xYGhgF2GACZ57jKuCcwnNLP7svSjobsJo6MXEsgk4JKeFx8EGScd",
  "key6": "3pDDoMLJW3Cu3YtwFdVStKZcupPuCLuCjRySDgxV87tQztZQbmHsvVguM52WJqfk2hzQZpbsbZyRRdNZKQtNqHfA",
  "key7": "zQbHKqehk4QCMVm1wneu8oNHjfmHywJQ6J6M2NMzBJbzBt94aB1fBHr8BTPfuVqWV3DZdErz4wb5UncYfVxJ1Vh",
  "key8": "3eL83taiEcq2m7VYWA1pPN1uKNaj7buzmoXdHmXd7YJECm4TC7f9L93TC3HqoTrszBYpvmUBWZ9a5f6gyKwARzSN",
  "key9": "58L4K7uTvPCYCnAjrCm1rtUGhe9ECLhCuJjzcGHK7if2VSQZXGG1VQUUWQdyMzMfW4c1cEzzb71WuuLaegeT8RhF",
  "key10": "5Wm9fSH1pKcV988M4djShV3AcgHAcG6UKuBo4H9TnNDfc7Z1VNDFjK45ermwRhFHyfF1QFwECkJXfe1E3bT2EZAN",
  "key11": "51rUuoYhhNQTCuRFXHTkCernCFQ3syUnPskGB9yZuceHEzvqK9h6xXnSYw1jRjDneKs1NL4RTttu1NiWarJrbsZ8",
  "key12": "RmuKwJmZFz6H3S7nztBopicRuQyRTGY1imhfXviARAjfBBJXAHbWh9d9bG9FaEedUQHXGrnZbDL6nZQTf5wtJ4c",
  "key13": "576CCSYEFmy7AiNiV9j4r8uRNcWB5jJki5EJoZ8Zen9a5ekwx7eMWvn7F3RXD955TF5f14CVLWS5xRNFrvu5ATWk",
  "key14": "31A3RQWBvXGBkXxng9Ki7R4jM1aTEVHbVT2uUYtBciFzosvo42JkD1QNjNssxDmSCcbeYo42wVazJ5KmoZ4aKCd9",
  "key15": "4YBh5Dy5hnpehs9owvMjNhHv3ScfTBTqePrTPHPWY5JMb1Jx8JcoYAHMn6Y9AsrtYGxQ3yYnehVdVD9L8Z2za8Mj",
  "key16": "34Tm4yXyiPXAwvP1dDKByw1xs8vaGXFZ2E9rvSr2oJ2TEkCYsNMj8PCdEzk2QDRXQb8HYr4wCRSrWmLqhh55d3tv",
  "key17": "3aLq1u1VQDcw69LUEeXJZ2HBqXTgp1c9kFhEH61uQ4xCXKyig6mfsdrhjCYzKUagcZSjUAQN5ADecTMiYXQEoS81",
  "key18": "2uzgaD9jtovbRVvPKgdrZCWtcuk3BhRC3UteTGsEkiiLXtLBQgASRANYePLLcsn2DF3b33ZnRYvjtMvjfGBM6YH",
  "key19": "3MuCjQNM95jiZhwmke1yZFMAfs9mmjoYStzv1ynJUUSY7hoSu3LTbJKxeCopTpUktpe9v5BC1pLGtgp8bFiZoHjF",
  "key20": "3CFuEKufWgCQ4NS7TxbneTuDr75AX2zqmcaQEEdHKBrYqB6SAebBwQnCqrBDiZhFWcxZgJ8ymgzWmTQ7H3pFPCox",
  "key21": "2UXLGkrXPxFdmTc5GoPDbxjcuGC7kqY6mfKENS8JqzbJbNmfqAXkNuCZDYpJeNsmsHEDufduFWZk89EFCucfuYhi",
  "key22": "2xZL5KEfSE9nFSf71EzgZVrc6zuH5LW9Ugcwm6e6MtrKk7G8ky1Msd6s2XG8s3URbeDCtJgkY5NQ7nEXXSSGq4J5",
  "key23": "4sYUEwMFx2UjJ4zR6wG3CjC8P9NxCYAuSwco9fxus13F1AMhgETBuATVcUPZgSBDXxS6yxfWFkKW3sReQCL8rmVp",
  "key24": "2XyRw4eNaM8Y6eWzsdqj2WtJtgu2Zky4JtG1nNSGS5eftb9Uq7Ef8bQQWB9k1LGJnMMzFkAWtTGvA8zsXRyzKTWw",
  "key25": "3HzdbmvKaBLQqPV683NBWapEYtvWCMdxVoCmibk7C1CPRdznBejXsyjjWpiSLmR49T9jNKZKCiMEwR6Se8EApHpm",
  "key26": "3umT6AzYuKVrLWrU17zAWRKjBXfcx2H5Vhny1hvRGWQrdTRUTd2BqqqWXAZgWpwTv7L8Z7G1XHq3aiL7oGXEDTJ1",
  "key27": "5VmmHWoLZyEVq411jGdv1QEcjfAmXQ1oqe3vNXA6TfrsVsAvZkt1eBknpjvXhUfAFYYpJFNoBUjEpNo9auSkDkvp",
  "key28": "3vNSUxCZmqfQmHJDpKMTHgndXFv9GK2iQ5F7pUUnw2mAEDzg3JG7nMrG4juVoxRaV5yPCDdDwvtWrYwQDEDghDYh"
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
