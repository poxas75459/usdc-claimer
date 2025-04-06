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
    "uG6REHxs76rT86tBsWERvMZddzmoQc4gRpHmLfCALwWN5ReCeTpuaM97q1s6oWcN5ydMLZVw6BFnGrU8SCCkVFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXbL63dVF6sdF86mxWhmRCtdptNX5qFRqdEdChC2q5vMJ5kU6r41vC8Q3vaJonVJ67gRC6pwPtHGUVQwU51A452",
  "key1": "346PafKVwKL6X9Z6pZhekMescLpan8f37PHTjk3jLm5G6gRqzhjw9AdYoXqQ6hFJY2mTbHifEayoV79zjKbhLrjA",
  "key2": "3xRRytKZH5PJxTvmTw3wqaKmCYcnXnPMA38NWgk3b9exWXXXGgjpzKtAXGGDiezT8uMwZtfjhtVAJXNnB1G3JmVW",
  "key3": "JXExmJmFdqhPPoKoV9QonHU5HBieY7a5gWJ7VZQ972Qh7XcFCsLVJhVGymwgoPFjQqGNGFDi1vcZEcC6njDQktQ",
  "key4": "5kL6wu6dTBq9foK71ZsuGSeuJGF2ixxgrj9925Eu1Dt3LY2ENVPsNy6rKZA9bKEdQ9G578rNaEA6g1S4SAQCH6jN",
  "key5": "58zJyB7bpQULfTesXE1Yg3X1kV9hRJBJXtkunZpuD9DeysvHZiTRZ6JgatD5PTEKzaubUHZdHDwp56ob9wAZ2pha",
  "key6": "1Ln1oNy5YcrA8DWVBrEH8fUA2wFtnhGRAwwVVoyjnL5BLGBSCNHk6RCtcenRsFncUMwo1VUHrsJ7DfKgrhhY38Z",
  "key7": "5CDK5pM44s1jD8zya4b5oUhFXzYfJRqLczQhC9c6fDFYmaSrDCKx1HGfTi8d26BYD91j2rfgXK4sSuErwjqmR1KN",
  "key8": "4P9X3XLWeu6FGhDUuxE1HcD5QQT9MgzbxQ2LvJxZCYCix2m3jfzrYp1sbKmS6ikGtHJsuDayLPBgSNhyNpfknTt",
  "key9": "h4SqB2sZQanV2UVF9icrdTjdnWv1dRDeapTwYu9kFRqHDkEzaUBSgwr5QwtP785ZGz5624xD2g5cpZm6YG9ZwE5",
  "key10": "VNbX2mHbq7cdbXbhEwrVSYP3V2ZknVk2Jp2V6GFkdzSmvvzZnj2xFnEdfHgAmcbVo6C1W35Z7ENKhN9nS2PErip",
  "key11": "4wUKrNWWFH3w5DYtYTi42EAUpwdoF8rVDipxM74TjFPwHw4Zdh9KjJqWbqtj8LDNYi2HMVXUqn2xVyfRp3pn6JKD",
  "key12": "3MWC3tMAFnRpbMUJYSzjh56dHB1iEirgVyMmNyB4JUfmpKwrtoiitSVJgFX6h1Cg1WAxv5uonnfCFNv29k29MMwz",
  "key13": "2FvpgfrQcWbNujB5zy1oA2Xj5TnLETQuwLjTXEt1rHyWPMbSBF6Zb7d2boapYeMHHQY4fzSRV7sKk84yNFgRdB3f",
  "key14": "4YhpXfi7ec7DCjUpEsgyGtyJvQ3pE27k6aq27ExtjzC1KsLMGFwJGVwEv1x81MzmCTabkXZ7UYi5jWtgrMnZfzPn",
  "key15": "5ACGNdwfepnJX2zwBfsV4c3qF9scWi8gPeMCFmXfEswMCxJnGqsN5epQnt44izjzXzn2CmrSSPTf5pzRX19JBNfA",
  "key16": "HHU2pk7SgtvpY6q9g9JaC35jr28BT8GcPCWFhJskGttMWNfDP7HLFxKz4LWsAb3fonUFT9aTxF5NHHRFB4hZNuh",
  "key17": "2M4Cgyxa9Zw7M3NC3kGcTJ38tEnvhUFbcRq32T9c1hKdQycsjFKhGDvvGzKwbo3WrjgGAW4hjcnmM4eAc7opGKmU",
  "key18": "2nFupiJ3qpHCxPW4pR1Cw1pVLvNLQQbmupFbr8xn4etZYS46FAUK2SU2K5nD1F2c9ExJQ7q9huucLqSbuiFxSQSK",
  "key19": "8iHsbZxnR7VH3ME3SyjtiGzhkxKEHxkz9UrkrJV7T4TTrqSUJ48RnWXnFZsPyAix3RvQfakmpeHgpiZzUThHbWE",
  "key20": "48PEGRTasRbQkvSXiSQBZe5sWdYeB1P9rR2e6jAFJvbeuWU5cajxYuQgb3mj39ZReNDPpehotJhoDN9bHVEP4MYZ",
  "key21": "pxD4ovTwp4uVRUjz5KoBWQzT1eUGycTZd1pH37CY7KQu4h4r3a3wSTutRjKirvEqs36bJyiPYgXUrd7ENxX8XLC",
  "key22": "2CUvzdiGvNqgz7a6tTt8tBoY2ZXwnDnx8SG3JigumgT2qPbRAoAH8frB7a6joYx18L9d7Dga2hkKtGnk71icajAR",
  "key23": "5xZ4QEfoWJfYsS2pgGrKhNe4CDbbsTeobNzPbjXurEhKHHzPG7o4ctHDRt2vbpBoAiPtgCN17kR4qnX2KVcoNzBC",
  "key24": "5tUysygJe7tv64qVKchB8QffaG5RFNxYGKoSukruM7vW5RrRjq6qZZCHAczZ2csHveCUS3bjNWESXLxMQed92cpR"
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
