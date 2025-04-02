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
    "3qxuWZE1Mounft7wEzngH1mkLka7bFyjbEomXkgKrkQwnVxxF5KSKFmz83g6LF9QyfZkKZ7i9SnEMUb9nxaKmmVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4STsKozdBqt5mBeqHwxCFqsj5RP4oX7PPq7XrraKgDoWc4QWBSor2YYZkg6cRyomGRCRJ5WEoUG8ixfPPU4Xr6H5",
  "key1": "2YEpGSN2AbvCr7qebCaTw3jbRTvCsLavqS7ew5TYN4dEACMJCteRdei9kv5WUBcmNoCo3CxGieZQWvdQ5QfEgApg",
  "key2": "2EWryo3m98KL43JpBzNJZsMjKf6tFdGZ8nkxjZjFC3rH5dGWbAHxZuY4tpNFP4ZS7DtDMGC5kPy8RRir3dRm81FX",
  "key3": "64Yb3qbfrtb5oq1jndhLes38Es9bjHNjJ7G3DNMtBQYRbWgHTvYsdTPfBa6WPrQtzKhE5g2c8BRbV9GrsM7cfdBU",
  "key4": "4QknmVAx9BT6CUGwC97VJwNb6PXN94bzKtF1gSjmmn4822vWeyy1iQsENWMxktarMnFR2BRKutHk156fiL2m1s5C",
  "key5": "3UsczKb3qbv6n5UnT9fZzGbncFUBTqJDED2aDb1YZnsWqCLePt9rqLF7fTX9zk9XkbR16uvzd6zxco1K82RTgxga",
  "key6": "38MMPwT1R5qzfF5QaCbe4MfrwkrsbaR9c4FCAupGha7v2cGT3RRKHykH1BdsMJfTXVvty8XCrLw36YXf9NYEs8xP",
  "key7": "J5CRo37tYTz8mKnovERfv5NdLkWZw37kXnougdp9DCXYwsq6TajCiqLFb2cCUHK2S7jTYBSacHpepDSxvEF3X8q",
  "key8": "AFUqWNkCrmyvv6NvpG4x8nzoFsEwELTNViegiaUoeD6DVRCfy9Lnf3oKvvq2ai84Rj1TdSpupTnCt5GE5rWf321",
  "key9": "5u7X3XfGe99DHh4F7N8BBfVyG7U7jodKq8nqF1nrP7ePK9Ym7iGhiSQfCc9EbkCYb1SXqFUJKR1uXf7XhhiH7uUh",
  "key10": "5wgVR17yXEjVsEC26ehhfk6JSNGE83joht1xYLkabBvK6kewsS8y5RTcrNFryUjqxB96i8B6wTHiC1uvLaDKn4Ft",
  "key11": "4EoVf1em11xthnS4T9h9GnaRzNhcNx9h2fiTUw4j3igbvasnsyX8c7SwsjuMFvidiJF6J6DcdKFiEsaxG7oACJXp",
  "key12": "2Y9p8BrZs9bnhouRfVCCBhfTyPws1AEwAbqJCwPM3wa8YbxFAqa9eATAyfJLpRgepS92rLBvFLmran5hz3sxh2QM",
  "key13": "2jzF8FJWqRQ8DMV5LY7yGebkHR5thv5ymL4dhzTEvPWFK3NrpKWY8usrNsFxxXhNAaXoVBZq2WuzsGTMbgZ7CCDA",
  "key14": "4j7nPbpLxwToujf76im4dfXoVi7NZsKhjRdksqwtv53bqDybDGfF8AWWsb3WaZX4R1JaXjgD5fqHc6pnfjTnk8cn",
  "key15": "31DZ86mKTecCdZFk7nX4Z1LfDGdo1NJh162GRjthTW2YZJiivqCFM5W66qkTerszXJGPJbTmpVUtDxbgRALSjkz7",
  "key16": "4Fxycb6db8Qt4iQZrwtfUpbeVBBTyqEHbodG7AUcU8qD1XUCAAou2UHuj4NqKoySfQphbFN2SL95BEeW2un5E78L",
  "key17": "5PWJGsEp92A7BykYF6mxKBsasbXbSreAdYhFSchDk2VKyAagnQGcZx5Vnm8efMbuJDBJK1oVHy2NrtZ1oRKZkWFJ",
  "key18": "3mcvbSqA3EvfqbUniYHzVx7275nRTVwtNvoMSVHBtoBTEXHt3uDBiaiyYg5RKhVLcopvnn6QfxghPL42ieBHQhSw",
  "key19": "2gdGYRaiMNAGmH1Ln97zyiU5W6ybcCHSPhACogUZS7kwhfQZTptQ4ZH4yzBMwSCmJjKKgbCVm5TMp6Y5KrjCakhR",
  "key20": "Ev2UYDfMYKC87r8RBFPLskxDfcstqU9p5adoz7Fo9u1DsGEVAXJxLwyq76Ysm8gGSMoFPKHZ718WFAtHxkZsXno",
  "key21": "p8CVR1Nqn9AJqkUPS4Ba9WrWv2qYD8e2TNu77ixZExx6Fp8R6yrhj34ppsfkar2382V7eoLrky6avEbG7ZuvhSW",
  "key22": "3EuTHjdQtYz24pzZ6rrLfXMfGePLF9Ye7wtuktZDxqGo2ieHUnoxkfo4V9xx6HWWNFGVoJnA8PDymVA4rUUUJ6ZM",
  "key23": "CnYPSDFeKAEyv4uqut7StYqzjqsowkcRgzBaGFTd3otFsqCpfcXKgrQW3g1Aa4tAiFKoj1cKi6r9su4T63ZQoUZ",
  "key24": "39pkvH9isYYYu6Y6rEEgTmEbeacLYZTfimoQmSoPLKaKVswACNkKiCjus6axzu4niLBsxwS1owNDs1GmX9kiD1so",
  "key25": "2Pfh4niBjYbU9Le6QmafzTuVXv6fe7ZN5dqiYbQJHhcaT7gozndyvbEYwJiYr51By1tBZy3m7skbgGD8qbfTbmyV",
  "key26": "3zrr124HUvtLUSxT3cnsmQ4kUcoWyqDxBFZX8ug6vEAJ1vLSkJgLoyuxds2FaJVyHfCaibyCsbAGwPCGzxnqCmbY",
  "key27": "4ch4y9eSko8v1xwtLRaHjayoenC1xYvx9RzTA1EGEuPCDsHP4kAAB5irt4q2XeZN6C9SgLiKvFvFGMKrsJaatXH1",
  "key28": "2RrbcF5yC7tEX7xtJQydAauhzT5VYap4TtqvBa7DAFie6uPK5qLhmo2gebJ47SGytMrzSnvd6w8SF6w2kvaSK6DF",
  "key29": "5myybPkaRroai1JCbLVebooUWTh9ugJMyvg96PwrS4sVyCLqKB3SUquKXq3kCLmnekR5mgZq7969KzbHXqyENgv9",
  "key30": "33BRv8Yytjnde1aMjxqDJbGX7Dnw2mjuSqYG6SpvdpZhzTXH3V877WrCpo2HMtm55nqs3ZmWfYtMcWtZ5pu2o3pY"
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
