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
    "4naemo41rcnTrstkoTz8hShDK2fW1H1G5GzoejqsY8cHeg5o6vTnGJY2CpGU8sVTxMuDXEsfnX8m3LyBiXhgoxBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u5cH9WwratGJ7mW9syhUk6ZzDkVUioFEkPbfSBTAaTAYTLE6Wb6tyPpJ4CB7uHcLxcTx2MBEckZPFPF3zqSiZFb",
  "key1": "2rGaSXZ17BubwfRGydVK53GTGJn4s8RScrSi73crFTJve3BB1RTa3UDtXVhG3m37wC3nJqm5cRwRCCk2T6XJYs7N",
  "key2": "4NnKhJAdGgFG5U85zYfE1biZQpeTpMQvuC59hFkNuCD4dVrU3hSmgF1DkYGkEKEKsKYN88hFdU8QvvARKuQ1mPN6",
  "key3": "FXkkQZAvptS8Zgy1FBmChLdNvQH8KdfjGAudrhhXsBjCzmmUmzqcppBcV3X5igZdpUALSAWTfgUpPNTwtpKEVdq",
  "key4": "2yvKUPg22LdqnjAR7RVDybHsxAV3Df6o5yYK6EaHj3RTDSNVsJmDUewTe4JzGTt34ti6KcW7GHpVBHTb8RgZ7hFK",
  "key5": "5rpeK6UPWeeLR4q44tAvuYfFJ87dteFwecGzLs1FwGhebfPYDFB9BWDCFX5LLbmJfqdDcvo56VWU3rAiabcRKvA1",
  "key6": "3b5e5JqdUsw3GrKJVt5AvjPcYa54zhCAD9asj4vDGuTGQeqHgEXDocnUezDBq732jo6WSoQybDs8TbPChK7Hihch",
  "key7": "49VtmxQS8GjCsoQHXvAAQevoSJMFd7eXpGZULxqHbDQ2vMURkSBmJMQB4DfqA6zqvvH9KjTJhsZHGpUhmTbGeTfZ",
  "key8": "2hpXCUrFWuQxti9V1xUYZ8UKGH7mhQL6HzXqj79m2KtxGqMZ9CrZYzS2Jv8VDmWwaia5KPHfcsV3b8fqJ9t1LCjN",
  "key9": "3wozUb3YsNvBiMCraZ8duLddq6mrtkoCHwYpasS9gLumTgZXCLMS25jLtPNgwqctWvQtVFxN92Wxc3bYsJeVnVSD",
  "key10": "cCswu2dCFMzx2ymPrrE383u8ZwhUoAG5AP1YsAJamevZdAdbyU41JyjCiJQQTbmqBbajjzVAxHBiMrz5JGTBxMd",
  "key11": "4LWrQaacL2Phx8KevGYF1kxL2Qm2R1CYuVMh28BuX6rVk4PuYPmW8FiQJK5NYPteJRXJ2mjjCXtZxynd1DYpFTRK",
  "key12": "4ZP5weW7Rqt5DrUYmnc1faYZxF7gFNymHKDkGi1ZCueqVYqDzWCkcxLbEJ9v15TnzuTare9GTE1vFtg7QUMFxDq",
  "key13": "3yDhmKkLedNX17wU58jhpy33B4jEYbYsQTspeLN3dNbgeahvEkXFbmun9LV2LqcqLnQqKhjP9ur9BXMZEWRjAG5y",
  "key14": "2PeBB6LdvuSyWt5PjdrAS3PfdgH7txUtFqoFNakBM73aP4tcu2eguxUbnymkBrsiCDdTeEJDZM8jspcAYJ5FVqYL",
  "key15": "4E9sTifuTswSTsMVctqZyja66eu9y9NXrTUBihQy2madUQUvWR96LXS9qnc2SZNuX5kJwvAF7FtqzVehK3DJJGki",
  "key16": "2rVucqjevPAWz4xzKWXDLjLTbtN9rorYqXWmJnWNB1hPPn1rJgsJaegxDeKRZBpqYTzH8S24zAqjQHcPgS8XNcUr",
  "key17": "3eMvfQPUF2PMVJt1TvW6Pddq9Y9yFCKD7dUCrkAZmZqNBf4zSABC8HA1SxJ3ZyDUc9AVKBVc4gkK8tMsRxndbooG",
  "key18": "3ipHSx89qVBKEdawC6yAnx3M72jjRKFXf1F2bXmnUzCgQeBzfdG4dqJXC3Z1NCk7sYwrND5bzqbbz79PwtFDDuWN",
  "key19": "5Zs4BvCztnBKNJTu4rSxTHffaK7QvYk4R5KGmgZNvaSrQFqeWzdomdse2TMSzp6sXAKXLr8PjRezews1dmbDFGJ3",
  "key20": "2KSNpfvknjE7XarQm7Ta2zFtdj5kpZQPJFQUG4J1C4FR6Hz3stKQtsRHMwwtcU1VY3HMWRv9GZjsVEAJiDv2bbi9",
  "key21": "3rFwQyPQKnA78ob5TzoC7Ju7F9sUjryFqPyM8d6Sb7h9SEAro3GPc6NhkwQo62UcG4MxF1CshkzgYEHXRg8Yvkou",
  "key22": "4yFR93vckjUirvbXJWaX2GXBevqkvrkiDuZisKaDSE9kWLU9vqc8wn8QXT3rpwCQsyaLCbfHhrsr5mJoyEEdfTUW",
  "key23": "61NnPQfxB3Uztzw9Pwy83no8DsY6h97ft2eM4EhF9pjYTNz4YEb9pKXpkcgUBUAbGe4EcoUr4hYvUpe4hsWTGcxZ",
  "key24": "2UzYHpzY6mYjxL1wWn2sUj2uqYnkmj7FRpwY5bQinDXqwxZaoi82xPTGATmwjbb4zD1JsdpC6hJ2HofvjrfSf8rw",
  "key25": "3vvywP35bVcKcF8bxcb5aDdixZ8KHzeSx36HuHU6Y4LgmHdXYiU5pbSG91j237tvqx1xXQmhu7mGA2qBDskvuueB",
  "key26": "3LLF73r2ZthaqxCiqb71mYrguqB97D5LntDmVac1watQ99GA2VuixZ1a3vD2RaFV3idfvLL2uJKzJPvZXcn7TKLU"
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
