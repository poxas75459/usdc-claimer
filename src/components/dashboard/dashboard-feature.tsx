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
    "2KLA4UJ7DhXgh2XMQSaGQf8gChp2d7sH7kdPC2VteAkazHptMZ1V67Y5bHevCsKPZ96bsAotjL9CbfKMt3SSrsj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZRfa8pDZExZJZ6MPcF31cqsv5zC4Nip7Uoonkcdb76LG7rJFTTbgj69fG32gsRyscXd5JkpqJ3qVLTLyr2Ga8D",
  "key1": "4N8NmWUgNDE68sh4tyr3kDrZRTYT8rMLCDynNvyZymRELqPaxe1h4424r7gg4DignhWw6wzmEmd5vre8hvih7MSQ",
  "key2": "3ztadTYKqppCkXoyNACehtTZe4PAjLa5a7hAn4sD8pwWs597pwRWdW67eYWnorbJmEZLV7XBaLBRHsCfX1fJtNey",
  "key3": "3ZiCpNBPNrA8hnFUf2UtuQkYLmoTLSb795VGxcywvas5aL3etUe4DyfSampkKth38Xrh1KPdtmaT9N24xVY8Y792",
  "key4": "34Hb2QFsMy73G7ahUyTXUm7YQXqSqrrHiXirnTHeLpdPb5efR3UaZYNLwWfYV959chiKx6nk1w6ns2gRZCBTESX5",
  "key5": "4tu8XADGtvTYBGure2VCXwUXGRLVBDQJxp68CQJfggYtk9EobsyiGGqG2VFSqaQtqiEYW1Q6fYyky8Z7DQwncMmq",
  "key6": "2KeAjxi1J1jx7cXJfYaCfvxBrJ41EhJ1MTPdDojg4uiZ6wnkt4uUv8xf8gfMXX7PR3MQ4ezb4QProgkStcVUTW8j",
  "key7": "4MRYrTHxw4fH9D4AW14Wd2FEdSD2Yfhve1LFWjZwE6eraZ8LAfp7pz63C8rmvyru9HwJ74R7J1mNHMNCyd3boVov",
  "key8": "5mqxCNoT7QGbNKYwD6kuwme6ucbS3QzpwYvJNx3Aui48vXxp5TwdwpbzRdVziBvqykqKNCjmueXcGiGgc5cesBoc",
  "key9": "61s5WzbjveGHtXQ1BCg3vfQVMbY69B7WZLP1a5GcsCxRZj7LXMHKvczu8bh8nMmQzy74xf3oKr4dWAAg9Qai4cFK",
  "key10": "3Z3uiLtzwHuvADPe8MDT2Nrsx1SvDmCgSk3mSKciMrBpJVpvbkufxvMQwRoab29uPBatFrENd4xbdMir9iggG2up",
  "key11": "2oMXxge1hhWWmghCFTaFhzVKPkbLgJzZdVqbZvoWg1ATRjgc5g53vH2CXy7C9JTG44bn1CDs82PzVjCvZ5MMw28a",
  "key12": "2hUCBqsTMbM65WhXzDzG4GxJvpj7RNkvNTk7fkRSvbAAJcgP29Ew2a5LLJNQh7x8Fm3R7A6oJSajN4qLvYFQ5hZa",
  "key13": "3jGj2uCifVkkyBwoPTExuWp4jkCfjRZgsgRuh6cXgNzZVwUETawaqn8GygK3tSWCkJByKN5kdCgqYvbvTWRsYZGR",
  "key14": "3k6TFEJSzUo14e7PxDQvik5BAJq9jrX1LHPAvLuMUEhbxujFYVqKBxNCwfTT5p7ZStquaz6PRGPtqv39B7VL5tdH",
  "key15": "2dzVo43zDNvUK2f8rhRmisg4TsSqTKomtWPaeEKTDKrpU4CqP3VcumcRWoKmcq6zUkCfGFQcKpZ47JPGvkpbD3PX",
  "key16": "64rK2beA1BueTmXp5kpdPP7BHBjRbSdWyCqhh7FS9ybuQJsca7b1q1kvjpd9ZYgMeDSUPpxVoCHE3E3P4GXdkVyX",
  "key17": "25m9BYsf9u83YYZfTQXEaBkPHHQ2Q3bk6VWmfFKCS1W6bkA9EccddzX4nTuT3FvJ45SpoB5x69nmefU8qXFhkKGV",
  "key18": "5iB8EjJAtd7HH3woBMKyZVkTVEafjQztAdNLBTNKynTgV2t3pLKPB2o9VHZFGRhcDpoVrnwdBHRGZ6VmRQ5B5hvM",
  "key19": "M5EkaJr9yBFpXHyHd4uufHeqEV2pdKzRT36GL3dUf5QE6WGcaSzzFCqBodLzFwfSVpohZCu8xWZ2TqMorvN9sFo",
  "key20": "AvC6ndDTc1vyYUVyMiYN6ZFJbaoef3QhenYvPnRYLHoygEGWefBohe4xnmQjxV2hadDZNmx4B7GLmcH2WQocRVc",
  "key21": "5yXaHG4HxGeFrH7C8RpZ127suktKkFpKSRezKNi3efDPkYRXPXPwmSXDsW8D2UBBL5pXwUkfiw8X8zt5T9mWDxQx",
  "key22": "UD71SPnQLASdgsfGEeRF3YLpxAwSYSnkr89WndtV8phZHFUSWvaitjJMdUyrDPUBjKtJeArinjKGbtaP9X854f9",
  "key23": "3cVEyPgwe4UV4fRFQe3cqcLNUcX61EerJMdJWjgWDcfk21YGdFHU6s2m7vEEwYtaAVXKf47bnMipHNLnuWLgnttm",
  "key24": "2zwjD3v7k9FB8gUSLVkVbQaipYK5v7t8nVctDrCE9UwH8utXCnGRRxAuut2MSdpXzpQi68N6VvCDVqWiC9TF7U2T",
  "key25": "3CCZAaZUULSUWMc9uyEXYnpma4jbzijcZbfg1T9ASbvVqiWFvA3EWAhkqsa1ztDGeBgzh2K3G6eSe3zQrH5FJprW",
  "key26": "3xAsL4Xh5hf7YHzJqcJk5jZmvbA2L32qiFQYcGz6Ptd6C2vh3evRw27Jekb391PXCtjSAeu7Rkf3ZZRibheYt8P2",
  "key27": "U5JTtYotogGywvMFZcy6a8fWyE215ALQXY1afiLNGcKeVaNLzsfZtnY9vJPTwsU1hRVmJfkR22zr9YQndsc5Sg6",
  "key28": "3N2J7iFJLX8PQ2o2oRduV4eUHgH28NxeeKxbHPTa9SgmvQL5nuLd6hMFyEnU7SuqnPqbd2Fbp6hzGek2xewgjpU6"
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
