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
    "5VyuPPhBckwwvPJt9hefJwXwBeD1ZdL1ufdhJTPzjTgJjJP3zntWKW8AntNWJT3QKE6Na3ptCjnFgkLSzdRAg7HX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dq6sAo6EMbjsB9kFHg1yEfPTpBeu1tqEqRzAgPZdXdkZYBWDTCDXKXu3gA1gNfRLqgdE7gGD82z6fu4tAdMuCkC",
  "key1": "TQ45N1f2YZ4vTDaHygDD4zbDtA9MVqDQ2XE4BhueTcJ8JdLuNu8jgH2AUJf5iN4j15dGTx73uSx5YYqyKBfmetS",
  "key2": "4k4NR1HU8rr57UawPhjDecnakfNfbSma94zKGcXQU81ugQz37gyTF3vs76KRJs4FBrDFpRGYexMdu4nGbPTrPcJm",
  "key3": "c7voprL2K779QABJ4kvE1jPNDWsRmsz4Q9yfjB3UbUX7huPyP1VbTjPwL27s6i7TFqa6DvA4LJvih8sj8RAnTN4",
  "key4": "3AVnMqe8fnGpzx496aZBWyjifuFN9VDu9AwtLbXuWo8bwanmeZN5DV8m5fCGk2wepo4yDEDvGyDmrhaJb9fLwgxo",
  "key5": "2J49oXaBxshsMnSgwjG7HzC3ZbtBh32KBjnsMntJo31Pg4q4CbG3gATeRWTJZ3EUdVLwzHiHLCWLVx4huKVnYfYE",
  "key6": "4fhJim7C73sEuLWio3eFz1No49uZh5aqp9wB7viB1XJi6mYfubv4ETBVLeqwAzFA6CiQ3EbuLfaMBdCvyL7tRpFi",
  "key7": "4SBR8iRa23vj1Y6mV7jt68Qa6kqJ1T3PNWrLmBLdM8DHpbukEXbar5gVuJVCCVm5BV8B3if12A4XBWrXGE64qqii",
  "key8": "fBUqRY1EyXBYS7PZhZ2rAqSEFnve3nW4yva2qKeptpbXmD2Wgfq5CR1niUfgBGFkJkYFdTcms8DQgwgMjFKNjLj",
  "key9": "2z8NK74E4sQ38hZ4DnyQtsh9LvAvpW5TBwE62ByjZRcJXeTmmLYDU27L5EgeKYWVx3zUM1MUsRdbLozCj3cW6xA8",
  "key10": "2xkALkSAFLnHqXMS4r25B8Mba6AVhcJoJ3KE6G7nvKffRZ4i6Y6yUSDSpgVVWaPHeS4Dm95Tg5DKjPxKDXT7rsiE",
  "key11": "4fBskL2MTrqqDrpA5ogDosybuk6GjvUwRxoGmfUnrLShaVU6bRDXTBRbtwRiYp9W1hFoJeVbU7sfoo9A643KHU35",
  "key12": "1mxS6GZcG5WArX8RPVgBmYoQwYmEGQzpt4bwQVFWVBe5Y6wy6ipzGbW1DP1sPv6QRsfDaABahLbGuxhAewsVu39",
  "key13": "BiBTTA4p8ogZpuXNazwWKeauGM6W4hrz34YPr3NEDRojykjQnrA7kphwQMozZnWhV9E1RvwVScBUkRvekP4oJJE",
  "key14": "3hfvqZ3v6iqDqTzZHPjMcvDikkLXRJu8cQhCmcQd3AdgXZeBBJz1azK2indEXkQw4JgxKAWupmCZo6ttYWoDCwkw",
  "key15": "43bznmreZCRtE1MenDcqsGuoMj6567FuzXQwbdWoXBCRaZATXTETFUUfMDMVQiEfRRsCxkHrYAsPeV7BExsQVWPo",
  "key16": "2VyoFTEPipYTQn5M6r2qU8spfHg5vJwM9zN8J9j3ydGqqvtKuLtZiUAu3BBwSk52LPNdsfmomS3gLkhRcSWr9V1T",
  "key17": "59LFKBhFsPsm1zTFXnDQosWQT1GYkWJ28Kp9GxQsMKvSyTGFwmcgzeBXJgbsz1CidFFkneFFPyEboYEo3HB8baW7",
  "key18": "5T2VxzoUXzVXjK8vrwmvEAgsryCmeL1jf4Kd12q5kZTxsY8JBNnf2kScAZgTDu8EvRg52daijeBzuVzbQvqWTnvi",
  "key19": "5KdzHntmxQFxzgG2xW2WFfr7mHXbhnCzqWJ5hzLyMkTKotjamDUkxT5vLoEk1R689j96ofKCKDeD9rUkuKfbuVtA",
  "key20": "3BoDdhA1dQi6A2oH96Am6hZkGewqYM8Bv7ekapfAwKEGQi2AnuPTKy6i4y3unyTpS1E2hCadPznGQF3GdsBHvHbU",
  "key21": "5r3CUKEf7aYVGJJicY9J2jeDpN8yPP5j4gVkRW5SZurD4VMP4SwS2bzJuXwovdaWsyZMRT41paoAQw1PfnL21UT5",
  "key22": "3nM8Dkkmu7x3h5rWiz2d2vRBDXDT1BN8fK4eQNzidfycgUzugyt3FvUXXVnWWTPbY4GV7QEM8BFCSruS971uuPQm",
  "key23": "2kPHiRn9keb4pZSC1vquXRrMc7ZHcNWSbxxqesNmiXQjDyRbeaVf9N4GwcP7rtoQYWNvMLTdXxULA2bE1zKXp5qk",
  "key24": "f3b5GoTHDNmgpQBqVb6DggyAigGmSEhSAvrJJyFyUJZS8PDkAkj7ehcqsQd8mbg1tEeJ5h25XGGRkfSDDfCTHSk",
  "key25": "46Tf38keqz7kswoSmvdPj2nWqvUtBMYm7Y4SQ9N2mA8pZS4UpjSDjo7vc3makGb3yxxqb4cq4b94zmsKHvX6Q1Re",
  "key26": "2LdNf9CmBMwhm1GBBKEUMbGLqWzmR7vkT6VwK6gzgxhRNdhd6bhC1WKARZ5YWhMz3QdeW1LvgSgxjMCFm4jq6q33",
  "key27": "4mAAL5BFB6Q4avxewGs9TUsnc2BaQa6vTAKFCm3WHvjEZgUgm7tg3d2NtqDeSmDTuKMJLhDASnVvdrxo1RCZeGQ2"
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
