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
    "2ZWVhHEdyhmKqSXEd68vtDZR3MuneCqEhYhpRSWQEHscitQ2XosZLHSkFgnpbWVw57STV6bqPYLm9duv5QkzvA7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f5YWMnRPWJy46zXZTah2jQuy7W51KW8YXHEKe5G8D755qwwu9xtEVQcMYPPLN5UdPrEQGSoWSh9rin9Ru9iyyNp",
  "key1": "3h2RW2dfC5vdJdv3fQDsdKVE7VBQELXGrPphKotEgjvVjSz1S1imCBLAhuRT76M61oDsQt8FgkffGCZ75qExDr4z",
  "key2": "46TetwT93YMPtZejGwChE1ekYgFBtwSXtRGGz5k447m9oyZ8mvNjyMk3UZ1EhMaa6FJmwukYVZA3ju3p2uygZVvD",
  "key3": "2jVbR7AdigBK3FogyFhy4MRxGPpySs8XdHy6mB7DFCFmJobZFzPJMCpn8UBANCcdB8P6EpRYdkhJz7Yviiw4goex",
  "key4": "3vav6dEMJ7RYtR3HUxaLqNsjxhXnETZEZYeRmnRk5s9aRqPg2JxVSYaoEKCaZK3zcu9PbLmZRwgYwUSjTwADn5fP",
  "key5": "5DydzrYhZ1iNcwKmYqrmquWuyExagiRvwjouXHx2bCP2CakCZx738iJqLNucX8DMUpgEgvXEummbL1mUuQ2qT6MP",
  "key6": "5qS9YY4Mk5iMv2DPWf5VdBpnnBkBvcqLpfboy5qqLBbUdkQ36LS5bd2jwSjmqwYokBLVoUTFbNt6ogMqb6XjuMK4",
  "key7": "S9VVkD8m2659nr2rG83QPfv6ZSsHbtBru6jEd1VmygDXk55T7JCM7NbLJCq7Pk7zCR6hxVfw5kT1XjDZV1zUhQe",
  "key8": "4CMAvmYjsHAHfYjSjFcDzNEbJihr6EyXpaDyXa2mc9h3pzUaT68NdoQrBguHseD7EpsnL1c85m2cnzsm3wuspFC2",
  "key9": "5M51eow377zyMrssmV9dobDWFtKqihAnY4dYSi5ZGa51zNN8XM81BDp2y2ygrafvYoSD9mUTJKMVKLHDjU6ugwd5",
  "key10": "3C1hoKjNr4UyzSc6U9WvMcczqhj4hyQS9C4E4QFjmi13VfUqKpDtYPfVDPFx1Pb7xyEDPVR57dZ2WkUAKxqXZnJq",
  "key11": "4ou8iDwogDcDieR2Bw7pB8zjHAVAot7rFhU55VJY47wsdWRK8bdNcUbbjZT34tkHtbichvKPpEZkXKwgRLXLDCLZ",
  "key12": "DnKBSYuK5AaSxowYKc1SV8NDsCNoRhB6Z17qLviDR6FN3s83md8pe9CUjN78yFk58KYEaDo4HFNKuJeWbFfg7gT",
  "key13": "3nUWR4yQAQJj7kmUvx5ZsWDa1w7x4YtjC9XiUxKFUcvueSU9EkCpceSu7iaADAKfGknWdvXSk6koM16SMEBdWjBb",
  "key14": "4piVs6swf2qxfVy9UiP2QBeP7axcEwA8bu9raF2MdDF7JCVe9e4vZXFnPdterFSNK1AxbmQZpKwFv1jd7Si7jqB6",
  "key15": "Pp4AnpA2Xv2Szqi9HAUNBBLr2HEspTBeGFoDz8scJyG58qxHVR9MPc2u1cVyWppbBcmvuUpqXoJF5eXfNZsZRZb",
  "key16": "3BZT5fExmFBNWiXCv1eRG5iR9JzFWUYWB86usPRcZcGfgMGGdLQb9iMCfXzw71pUqxjH6KHgMn5LTjvZfERmwAXL",
  "key17": "3SFrNvtu22F7phuHArKCG9RmbB11bwFMdZHMrGvEJfACsRV1D9msVKbqcXbiiCY4qjetUZTjo86B9hAnXeMeGZRC",
  "key18": "5s3edTGxeiM57bxuXQPR1NcQQCTkDDsFzJNbo42doeV7taDHobm2Qtzi8ErTFUX4EsYPMZHLUghPyJhvi3GbmyZs",
  "key19": "cPTfcQnciqBFjHLTUG34DbBypp9BuW2XQKdRqdUMaeZCjTaV5hxikafeNM92eLULwWESC6HGVaMsLY9vjumTLCA",
  "key20": "5XcF3ZEYhQwJkPJY1X5f2K5QaLFEK8GMdDrQPqGYUSqK87W5Gh17urttF1HUZnAWqrVSw6RbLE6mMwwQpKbfSoYk",
  "key21": "2uGVrjcfCo8BmLD8CPnpi4XqyNdbjFxx3XSKQyDSQcieNBjJvwvjtNSYixkQtZJ28hsa1xQpQNAYETqLniGa1fgd",
  "key22": "5ENfjXSaqNavSWhnSREWa37cFdt98hXbU2CqXu7L8hWocsALQ3GMns5qFxuR22GnWJZ1gPwN9Rf5g2ujXomefKcy",
  "key23": "5rDRRWa38PDWLNyUp8bXsBQZaCDzt1DSzPzNBYh7JVpj8fGAbx1Ue1FTzzqHsBqBAGfhPWy3EF7nTU1Q6qD74noR",
  "key24": "4DooUosdZPbWLbi7BPNVWhi9ExVdSywaTpb4kCfJb9TX7HHb9bC7Cfxp359mpzurXH4hcF1qiGD95MNYv8ZJwFkN",
  "key25": "kwXxWkL1J4nFd3EQaG4897AKag59a7rEccRrv489WhPKLUSBsY8jsDkxeiTPuzcud1hkCm7Rbp6fXDmhL8f9z7K",
  "key26": "KyUGyqHHMfQwVer8cyoPzYQiBtMH1W7ExShXAgLVtrM4iyjAmEXG21wc5qdXAaQYdUsHmSzEeRUo9M2zdNmJ5YC",
  "key27": "4kv9uTyhXNsCNALzLgQ6MDzZvA4F36Xh9dg4uV2Z8cGFpV8G9HiLKjaytW7AV85yvDQTbTb4nCmUAnRzQNxdwzSG"
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
