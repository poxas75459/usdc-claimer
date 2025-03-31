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
    "59dyXgSiodBpApBZH8kDWxkgGWg4icHauLJJ1W9FyniujV3rajgFuwpsBCTtfesv4ZcNJTPK69tzoJ5WcfsGNTaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jYFgbPuucyAhatREkkxUdBAu4hjW6ih2RJnxygH6kVmt39Hz2PVuVz39p1kGHs2tz1d1KFp3oYVogmwL81XERtV",
  "key1": "33FyUN2FwSQ6foJyR1c9fTGFQB285cPVkhdHnP2NA4TjbjiRJq4LzBrJgfZ7RjZVtBbesfDcqcmfx6gtBzFF9LKj",
  "key2": "2gqE2NhV4dCwwjLeFm3gvwJwzfdbuaAvsoHGBS4wSYh9KXwJ6GnqDT31paP9H3Z6pqcx8sCk8MgrkdhZ5HiLnj3H",
  "key3": "4b5TeFGvsRrdRnSiMNyN871vW8uhQ29yxXw2uQXrTV4sdHxWG8UR8mftmDvLmXGvR2J1ezx5kDRAjsQHUm34nrm1",
  "key4": "3d6FvmCXBGCNfQkcRAyfDfF2i2tyYVRffCHRcWSbEyCefMk6GNKNL38fZFy1YCaiJBK2V4eskNaArV4jtbLTruAW",
  "key5": "64GsG7bsXV5NZ8KYfnXwzC6PW59YZcx1k7obzzx4CtGzqNBpuw1kWs32HdhXUTW8cWicsMVo91J86WmLoPkJbnio",
  "key6": "3DVJoZnzpHXqrSBPVrjz6kWxLoLcN5A8uS4ToYn6Q3m8ckgunumahTjesLFZg47y1ALt8EFNLZpzLjxmc1jbMcpT",
  "key7": "25Re1oynqduWLAwZK4SCnZdWBNafBroqUt3PYfedzQeqtHzYY2qduHaEkkui5DJv6jidUf1Qy1B8jTKRLBoz3t5g",
  "key8": "4cRrCJVwvnb6PtEVN1aE5TekGVwFmkDZDnWZE4FFv5VTsDBzrcNfCz4LSmJDuhHRqoGg4udUd1KZ53yw5qAR9UfC",
  "key9": "44rBWUo4qZ7YYYskYDF9fveVAU5rcG3EK9PQSHNTCuywbDCM7xCaSEPThKy2NzXVJgPrgAjy33HZaADywy4PCDvf",
  "key10": "5qsVsnqH7VacUMd1g7RUG7RRStXpiAms3vTjX8a9ApZ1ootZQZndvaVE3S9cHuGZwSp5GvFYVso9B3RSpu6Snjis",
  "key11": "2V8uyBZSarr1MqkzczEX5TYDdSZ4VKdY9oMyJ3C6223Bs1LUjLcNBN8u64qm6eeVwBGdYsr3drPW6C9bwbXw4B1F",
  "key12": "5imiYsiKTRYhniRnSBXqMcwPGj5dYV38kpaGY5wze1bBAx1xWHrz3RyMMYLxusVP5MVWabAjjZ56jH2uuoswE5PJ",
  "key13": "5gHeC43X9SQX72popMP9v2AtYqxJozzuoJm6x72DTabmVnHgx6yoPNGxcVCReUbFMeEVgoCK8G5XfM7D1Kw3Aj9F",
  "key14": "5yZ7B5p6Rbyu29Qd8XQU4hFB7u7ZeSXy3odsnh8jMFa36LUPCkcAzts7USQpaMBTQc3sa9D6ktRgqRd3ri2rjVXK",
  "key15": "5Bfgn7i9LZn3GCS4vRRUCqeAZ4Xvsrt9fFTWbLB4zystpPYfVAKQEmT2JANdjpmdLegR4kneUZjkBwZp9MQjbSf9",
  "key16": "5tZNEgJ714hsexwwr7AtBZAmeRm3avHMg3vyqJhJcTqzFSmbNCFk7E9dkt9jNvSpUJtPW9KQphDtMAZA8gUwUERp",
  "key17": "5oeiMb19b6UkidpnBYuWMu7rW91nkS8QEuwPJNkGHLFWvMLGxCCAXJj5YXKT5xopuTJYV8kDrowGRfzjTDD8D8Jv",
  "key18": "mNbeZqu1Z2vFjCYPp2czqaotjcj5Yvqrr1M6EzCKJKbsXLtMXPRxSiaVLNDneGWyY5V7QZw1ZYuTM3HE8oBNnRv",
  "key19": "2JVSHywgN8gH7D3yy8EXu7hd8JkP6mSCCHCqjVfKxnXuW3kKSUHcjDGQkeemdYiJgrRynwo1dAPRidAjifFkGHj",
  "key20": "RQ4G8UAUZSjP9ime3uxWeGeadMtrWLktopf33MjUKw5xAaEWUoUVtqg6BbS9aVhKG3344HzEv7EdFWeLbeoZkdi",
  "key21": "2dnMLJoXq8tNxUn6HEB2QyJFLnXpMJxE9kGxTNxqBW45azRYa5HNeNAjpW2YkhE4D4Qwf3CJqXxFUZ8jnPwtMX7Z",
  "key22": "657g2xWWjnZfS1WkavuYEDq2H4V3PfXQR4J4miwXqSjvja7zAcjsWB1WkvLsjNbtcyJHmMproGafFVYMnpaG1jXr",
  "key23": "4489BKVYfnzoXWBcWt5SUnxDjJ3LRYkWMcPtt4FTKjH5P2nbXmWe712RmAnkfahCZefu9M6QpSRSmKBvD3vuX6x1",
  "key24": "4pX3ZEwyTDUckENp1rhrJAqiVkWgtvfa44fpRyRSKfGQScA5kYGgH9UDijhgzGPp6WgkaGE5Bfh8o3QNMCwuTnED",
  "key25": "3Abf1ULsTBg8iBdYfa3fn8eKBG5VNVHYMKEvYDBUs3NFu8CMWjh3Pxsc6bdeoX3XEDPp3VUaX4WGGHdR3aueRxuM",
  "key26": "4rKoFy19DYezdjyrr92dDJvxYLiTMSRdxFem3675jsP8ANUDaefFtGtfc2Y76gLLHhwnpmnytXdSLwHtqwdTebTH",
  "key27": "2BuoFrptqAFh9yStQ7jfRGtsMmvLDGJFEZ7N217L5NChmsetYuwzbtT6Hn25pVMQidvM2HPJ859CVguTZLncHq2x",
  "key28": "sZzzsFrSyP3zhTfy8W12j6UXsApynjrinceDEtXWSqschsBptuTEswEsTCU24pMaiaWmxhzWfAqbqY3a2Rau8Bs",
  "key29": "LrYSXqcMJpFXWNwvhTwSgyFdHi8s4xfxb9FNaUwcuf2jETwRT1yQSnzwJWKTdeTjpWXpboAtiQM8pn7rkvyB9Rv",
  "key30": "2TL6pA1u5RwiXfLfYc7VCyEqwZ6NpaA2T5cvFKW7y7gryEBjcc8ekTzac9yaFw4D7MV6xYAh35RV2ZZu1749Eudy",
  "key31": "5RDZNjFw7Yf8advVJx6Nbgnnt1pZgfDHpziVuLvkyTnXEUAgDQTbKdGMDyCtgbaBUmyRG9neimMFxA3MnqmCgUjy",
  "key32": "31dYmWRwT3aqkw919v8ZcSQGsdHPi2ge9nB9M7FoQ69cpGD6A1fEsjiJkr6Lcmnbdo7Ca5rzE1KpjvfHa9L9PYCB",
  "key33": "3hUKpuCJobpPEPKdqyqJZEQ8dA7v59CFU14ce28RBfubj5fhSXLRdQraGUEJ52QHRoDrRDDpdHhVPyPSuJmjcqiD",
  "key34": "4e5uJ2Q4ZHqgd69YuFmo4SUjmggGmwuuth8FwD4UbC6Gw2NfAMfAaQEvzzusHob5JqBuDthu6ej3bxq2iD25Q2oL",
  "key35": "25kBzcUGKjKdA3rDrUgQ9A7izZkQnW2XNuEctX9FdFA6YDCKd8zUDYczGrwTCP7S9My6hwX8A5NLapZdPWk3UctG",
  "key36": "5RKWy4yiRP9zdm84e6SDJeDSkixbbBrXa5ZdN3GXy4DawqvY5Aad47g12rW8ezgAhQvagBPR44P3EKtYjdb1RiM4",
  "key37": "4aBtqKDckd8qwEgepMq7PfoSNwhd1m4FJAuje3TqvdJZnLEeC9w6kno6FWfW7n8kcEZyHhJUFN2xyBAV5aPXz6CS",
  "key38": "3VCmcWhCqrMo4Y4zKCscxo7XpNo1AYo3jAEAFDBtKDABz3pGxeS1oCZodRVt9MGcwYsh4ENT4tBfobG275vdgMXr",
  "key39": "jZBYRSo9D7yycZh3RycVetzbjzaQdGs1qim1UhsqX96YGW1HvJ7wXTDTpXvcxYdFFQUV8RCPsGWBTFkngkmLxrE",
  "key40": "5BfB7WEW5NqjrcBtvgWx9nvPMxyffjQS3PrhMBan5iQqk6bxce3FvaFwp5hN93AkAzHDu8CjAvELek15vzpLqkTk"
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
