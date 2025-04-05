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
    "4hzjkZiBNFKysVhLw8ekAhYzswyygjgN7py7Y9Hs5fbHcCJgXSoyfb137uWWXphyuncH1fFhPWnnPjvJ9v8UmB9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MYvKsPqwX7yjt9NDp6KgKYuuCX588F6pv5ktQFsXCbcRWztXowqZyra6npuK2PoLzjKFiMs6UYvjcsLK5ybjY2S",
  "key1": "2HuKcUgdU2uzmFxa4URGfRWPwBFeJ4pdnPvJtpgfGH16uoEhrLKdNCkRkvb2zqt2mdvMoYRwtCDdC3WGwgx6kncs",
  "key2": "2GW3poy7pS2PPkVuaPj3muAZMS8fhTJbVymocN6H4Gzi3AQgUERyeS1E8MxnSyNjtUW1PfDzMZsESuAiP4jfneah",
  "key3": "37b5reh4h3BEqFtogpsjHZKQrqQPCr8GAXNaWicg56wh1MfVquqDxGAz1F9w7pkRDXGFTxc9XTQMVQdsSU3utYji",
  "key4": "5KQEDfz3DSqKxxz3yMzutQicz15WZuGqY7b3zfRVjpRT1BQHErLauo5GZP3vq9Dgj2jzJDnj8nZConNV1VeAraXC",
  "key5": "5bkj7HYu5nVMuzF2hFvhz7Vyz7ZNwe8PfnbJND3f6XHCnQcxM8rxGvKwR88RnQB1xy4MGvL8yEu4gbXVTnFjRiXb",
  "key6": "2UwDH48SRR2Sz8Sw5xYdqWqJJGXo2wxKC2PQXMrHrFRmgFVzRGEwgeZ6kTnooWRDp2bs3yinyxXMM2AtqM5dn7bG",
  "key7": "2jtjowpSnfJgugS1YYA4aYftSPmv82LFLHmD57HLqkhA6XcJKcEVLc8z9EFk3tLEGVeg4BxNZGmqvwyxjUukV8a9",
  "key8": "2tDGoJg9aAxweUshzwnc2s1HgJ2q3bw1aW2DMLuWD4XSWAsq5p7SFKSEQ5DLutqMKW38RiiF9tH9djSgzFhHVKZ9",
  "key9": "4L8PEkJSkukZEMAijUfwZL2tXZVGrwW316Q5LaDD3Z3agQBJdWTtpUzJuzZuAP98C7pa3K99Y4rVNGLwF9DZ2LeY",
  "key10": "yPceyVrn9vjomk4Hki4jFhtoVVDzbzDWqK59VhY5JhC4kwvL2c7yxEM1w3QLKte2dxmdnx9V45f7b1rnYuv96wY",
  "key11": "PojaTKn9snQasWfnq1e9ZVJDtith34KQq4BqUdpeZiDLbhUYJkvpGC5z4c3ofQNUpBqypP9zd95R3MWoNBjMKXp",
  "key12": "3ReVqxCwezMasoa8GeDvj6uaxD9mjScg7r2iT9Haz2paE3NLc4wLseDKQkaDS368Ub5UCC5Fqf8JfmDPigmnQNse",
  "key13": "65Xb48X8zWZecBDmpnpzxhq4KkkZCNqZ9s1avotTRtNGbuHjcNgQVBD6mdBLWqHEPj27dGvxNy5msD56MxLE1Nms",
  "key14": "5smVaSWuyV1RZ8bq7XivgGsLF564MooZJPSkejMicGUaVqwXnhrAUmgBt8UkNLHGcZQKRXhnwCjTpaGJkTnLG4aC",
  "key15": "4vgcGPpwin8KF6XfhRTczsfiqZDNf7PJ1TN96cm5CTUsSk3EroqtLSksEKzrWTtFsNL9uH7CfJtMJH6tSKQZZjk7",
  "key16": "2VXJ4gRzRdsoiLbfCX1Vpgi4qoqwcxC57Mxurx9XzmFwn7qqb2dSjXCWHrxccYfA2W7reUNcvKjeA5NA3LtnYJCe",
  "key17": "5jx8tu8R9EavNm93oSAUVxyAYXkPQ47rs4j94szjdCqwovggZjF7rh2Z95fKiXVfuskbCy6mR8v2fuLsBKY6daCH",
  "key18": "4gqHDPVxfv8bWMuDTEAuxvfuZ3KBcf6thqV5qkJaY3ZxSruJZBzNw6Dm7WbLYEKJbCn3EuTcCY5RWnnnTwdTWqP7",
  "key19": "3oMCSDGCQaQ5DqbYPzqF2Y2L9H6eCnNWbbQHz9F5xJs9nSJBWc7vKt9brnnP8ySobsTaxHGUbit1ZFiAFn3BLuY6",
  "key20": "3hUuahRLF1e8rTce3kMVXZZY2G5XdRmxHKttYcGq3DEfLQRTB2BxHyzf7eR7ooHnT5ii4jQKFs1VKcpsJQZgioyM",
  "key21": "5L5rpmoJD58nTqDP65TZzpdm7Bar3EEJXTfHuXMK4uQPfCHciCy4MGCCanTwP1AhX2fLAUBJNFCH2eqGGXuhe3d1",
  "key22": "4mDHFHk1WBfd3eGN68uxmJZ4Xg6Z4dfLeNLYAGWRS49nVkrNEU9G1QYFkR2pg4yphzuMvk8koTnHJDf6n8HMTCFe",
  "key23": "3T7TXv9XvMU3NqTr1MSM2sPqSrpJnsz8pMMFN9cmkWNDDRLAm76e56toTQ7pcJHg4efsjqisTzHTCTMe1koAf4KZ",
  "key24": "5PDYDXGTPMEitTDAzQrMbT15zW75BYaM9PM25CYzJGaQ8g3kfRn7bBDCY4bbaR3y7R8SVpkjH72J36M4iizMfSYy",
  "key25": "42eXBLP18Y29jgjN54sPreakPSVRUxiYMM6ASnKBNnxpwxTGKmk7kVbZS1Ztcx9uWUSucduP4oTYYa8QkSge3WBq"
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
