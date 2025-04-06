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
    "5syfAC2RJxfdHGrGHrKt594bb8PHr629aTmz1idLjWwVDVmeA9u8zEXbfa4MD1EHUXhqyvy9fYchkL7eYFWFtGGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iATEHyYzJJ1J6Jr6cAXZfDh9vPLYbTuX3KoCzS8yYw7aFfaRCk499Qn1gcbtQRRpaqsPHhq7kYFqM8EJpLHJcxS",
  "key1": "46NjmqyLDC68aXHKFxkQSGyhYYRbUyvTGhB2HSJRqjcHELdYzvxMbo9SsafXcfB58FMvZsybpaceEYEzX4nJaZJJ",
  "key2": "3QEj8HE735AQpAELXAyxvvVQhBNoQuVW4WuKZ62KmYfRgbb1KwnBpYgQtyhF1gYMTHCSB9SbsrXpm9NmhTQTYvVX",
  "key3": "3BWWr1AmzhPPZz76Dahg4HNT1iSg5DoVaghCkytEPmkchMzcC1bLRa8fxZ7tePzzwxwnpz7o7tHarhumaFbaSXpB",
  "key4": "3joo6riVxdpycF52b343JCyRQGa3nWH4ZMpBkXDY5zH4WAHBfR8aMDWuT9psAPerDSTEfcyych4urGqf2KdkJj3J",
  "key5": "FSJHuqiUdCDJDSArxZYRBKFtnZ3Ev4BbFnWAvoqjKNqp91GCQtXRmTYmE1FKUvCJMQKxZz1DLB2GysiWzfqxqgP",
  "key6": "5aBJktqZrYJqthpFA5YmATLxHhHoyNPcdJesswLEK7cJGn4p5CjSQtm8JMX1rqDRgb4yq7zBqFLBqbcKU8fHgfBz",
  "key7": "2vxvFAZ67vMM7XngKo59VyV7wUC5ctzHuQLzZA9CdccX8rKaCjYtaqebjrdnP9GzJ6o6Nu1gMn4GThsUeyj5c7aQ",
  "key8": "2TrjSt9GiBEjqG49S6mEjZ6xEgrKi5ZDFzbmfk9Z8Wpvjma2P1aNci9UKU9AEmHPQa4XFVzY4knpnwSeCr6V8HBg",
  "key9": "2WmsNw9BCVdNjWVYskChY5hzwZFAqfMr5ECLrcWtuTyG2WqnNtSwufwh4WyYjQmLtDnewMd9cj37NXaUQJfP94aR",
  "key10": "4QqWTPgKXWdHfcmkZu3ujaWFKxg18paovhb5Qe8gBXY71CYoQr7MdMsRQPTu5r6XXuwrQMCDzxXxVDzRBEToVVw",
  "key11": "47kXxBrvi6XLYqj5FXiudmco8LyS3QXdc3hPSTohcEJY4AJpWezZHbeWT463f84gFVGzUMH1EUS3K44tPWYeJ2zk",
  "key12": "4PjvBAwCbyF5VaSEfJ4bHj7wcLQQGptXvZYngvTGbun9aRuehSQ6c8u3g8GXTasWJncmP7cWJ1nHcKWb9nZ3myBY",
  "key13": "MtDNH53vD7F9jSuz7ack3pczQKFHaVoBJq3rCj6YNX4b6rQZCywnT2x8GfXSBofAzDftmMCo4MyyfNSN6hVi3sM",
  "key14": "5o4Lw6DRBxG4iA4dn9ZeBii2CmEpMaNVFiafnSakiFFkCcV5HzYr3y885mxV6zk8noDXPKj8pJA79GLBJUdpG5aN",
  "key15": "XoZBDGJf92LNVdgtLgZbBENRX5iA8mdajn3kMpDsNXezk9GfTNWutVLFQA17UyTpgzFfH8KV9QaEU6kLAj19DWZ",
  "key16": "4uk8kT4NpoLDV71hCBLWHLqLkCVUM6z3d7v8pwiJRAr7JrdpKgjrUmHYSq9uNmCMKEgnnR2rvt6dkwjsNU5dqtso",
  "key17": "2KFqNzXTNQCXdryLRKq3omyDxctPdpNdTmm3VxxuaGahRXoqnnswa1raquqrNwYan8vPUivyXmLQyUsKa5vbd7Xr",
  "key18": "5S1QUEdfSkdTbywqpyJPMWUK7AzBMt5DkWTk3uKjbHsZ3p24JMsHSGNhK8nsPQvAsggagCrNdvv5k854dn3VbmTR",
  "key19": "LGnhUijFb1X2RfkYdDQo7CMJtn8d5ktw3i8YJXh3r2AYRMVKQeocYPPveWMvasgygFKGXEm1WTEFLpXBDHcQE2Z",
  "key20": "4cEBpBfY6WggdFJRaSPyRnyUNHaTSgxPMCnaemj4YzB9ua1b3ShSPKXGPiJ1YDMvhbAFgEzQiyMAsejxn6cMPv6t",
  "key21": "22yD3scWoCo15vWZcYmbic1jKedHnMaC8kTDfaYczLeiGuF3GMuhcRA6PYd5g7dRzPGPSLDF17aBMeNxpeA5m7b9",
  "key22": "5UdNiqZy8SiKbFeCfRqW7E4CameFRTS4rdWFDgfnQgXgn3VYVPiQx6MwK1fV1ZPxZUu8QtYuzFdqxnSexjpXRzkt",
  "key23": "2p9S5kxMbupJByNJY8ST4WsnuyKCA9Zb3PfGcB4Qpk8aXpdyp5tAzHPu7UqW8u9sZeRmarNj53y7daSuXn7edk4r",
  "key24": "2a4cZzsfTbdgAUKtHDntM73k4MYh84Bm4GqYZy3NBBMHiMVuzjCLFYqSdyxaJ2YhWsLqaMfx3Tqdm6eAcos4dbrc",
  "key25": "C7cTK7khSp6hCSVyn3UU8tq9Sy8stcMrXVeFCM8qZwEYSJ7jdB62kc8wbSUYZkjnaR58YVFvTavDsazYNmvB26D",
  "key26": "33TYX5K4x3RSQiro9Scdf17dbfZSEzU1XCogX8SMa4yDwLrP1dQhh6AsjepNE4W4b2aZz9yjaSrnL3WoNVWF1ZJo",
  "key27": "5zuUr6UzeomTfdaTSYXG1KeTZ4RhZtjXik33QFMP7TepezJb6rCrEPHxzZ5FCJ6rnC6xrnJb9kVGrbE7EDGXrE4T",
  "key28": "5br8JHE6So7St1TTvQq4esjRXjBihRD1WTYehMBP6FpfvePGHTPFdkyW5zMYiJZL2Lh8d58zuH3NbAMeTYRn9bbM",
  "key29": "5bURbdm6AQuzgxTRxd1JCtXYoj2WPrPzfLdcpu1n6SCEudJV6EgrSXW1uAoZCdWKYWqw9jQWNjqre1RtAAGCSExn",
  "key30": "98Ly2pcXFhqr5rmmv2NW2VDbfcv3sWjqiBpiFibVp87WWfdm47gJwh83x9aVG2LT4dFe1jYSQFA6XdJ6YNvichp",
  "key31": "3h4fJiPxiEuTq5snqVRoP2LY9VirKvbQfBGbUqwhxVxRHiGnzZSihSHJNn9d5hJphY2jnvGZ56KYCrMCE4QoCCDJ",
  "key32": "2NQev6a5d1txvnSSDDSi3NmFrfHhAmfirRfFCJzkT3UxEp5YPVAAZwW31VKGjkX5XvCsgXCjt1x3iujShZgJBzZp"
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
