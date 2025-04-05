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
    "2r95fxkMXgUFUwaRPe9CbqSu5o2rHT4bQHqAkYKwudfyWPrMxynvY71oy9yDkCzZD4JktwSqRv4kc1ZSK41L1Ea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m7h5KtZxybRTKeQom6pGF6K8psboSkcG9Njx4u1jvErVg6Asg6GGmBuGfWbR5PmhRuehtiRmtu47jHvh3jd4jkX",
  "key1": "4HySma2jc2hToLKV9WEnKhcCvuHuSiazJ3YBEhyXsA1PN36yjDQoepdQir7mCSUkXFDDpkUA6Wg2jsSyGnNK9Pj7",
  "key2": "4j2EPh56jt24cVX2J83UUPbnUkbpVzh4nceXfCiFX7FPE6JcbPgaGP1UwFnJmSARiKq81jbsr8X75izgjf2wYxzt",
  "key3": "3UjYhLUGgp1gNuNnALzitegPGL42Q2TpyKuMgPSjMz33dsMgnZUpdrdiWKAcf6vo53kBuy5LC9JeLGEGetN4DgmL",
  "key4": "2wrzvHeng5s8AGn6tFg76xfXc185ESP78en99vmF6gxSa2amCAXLDcDeoSvdQ1YqUQWU4z1DoCiY5F5fKC2HftLG",
  "key5": "28WG6pp6gMb4vuWUdekvfxB9UavcqGHzVLcGBqfz9VQj9EmeVN48N6kJVEA65RDwCrAUZWo51F4HFHSvsCmTudxH",
  "key6": "LpgwmLVC8VJfhMGUNsAYesWp7xtWwkQRdAYCYcnTzPqQrd14nDTr5iYmT89ChBNmMQgu22hypn7Gs5WDeVqxdzo",
  "key7": "4QeKhbvihCMwnWWG9SZ54nNCWgDLjejNqWvyKhqVj6U7EmiEbVwMJ78ri5DFWz2xjFVJ67jThXgr1936ycvii161",
  "key8": "3MecL8WWSou7cAyvNzXm7Zh5ghh37UxBNA7siRnRGoHCUwoWS6LM5HddktXrrWq6DuSnRWzDH14bvRobfrfF1HH3",
  "key9": "n3qi3pxHQLj54jh5ZUKFB4mprUcSAUGKiKwLDkCD2dQqq6p5wfSGAqRjPymgLS7aRCc4mBn5HqV9y5pR16Li4SU",
  "key10": "2muD93xXLiaCGJRRfAZU3mB2wx63vNapzHtS968bnjGY3HGWVRZPFVvaT5jvb4ssNHQmzS8dtRFDCuYaPQSUPALn",
  "key11": "3JASCqjdCnamm6oXDMky726FqSYiuMKGxpWiRLjG4CFGui65C4f1fTR9ohWitpYP3D1NuW44okc7Fcbj7n2kW8eQ",
  "key12": "342SjrvVAXr4S8uimZ6tce89Q6VTxzapQseM2CtdNkf17JVw78a1LgoV8t7q5sCqxHgXp7NkRt2yHJZZ6F55Yhus",
  "key13": "4RAuvFt5mdvW7trtRX81RnMXc45AZwjFhT5bVeMVQzKxsuzKB13umzEKtxbWV2Z4SaVCTib9K7TbaHma4TizoVeT",
  "key14": "3X8mS7W5R4p5eZyKhAeQCMTEypobHMmAU8yTe7vVeHywP95JUaXpxwfMpHNadh9PjicSfUWcGe2AHwwiV1WVk7DY",
  "key15": "3XsFWafFKjDuWupnWHweMUQEYkvUWXswpYjvoEf8yMYktUnAQcS5JGYvGKNUQi7LyZq36ncaFKeYTDTYWLbkW7rb",
  "key16": "2SJydZS7eyjtaxbvH8EqmpcVutGvTBMvgQyYCioDf4QMqb1JNY3LztsYvQu6W4mPdKg7TnYYpRdzN75JQhMapAn1",
  "key17": "46hLhxaKe8QfRUhJjXTXPyzr7R6TG4Vz9qKd9yeGMjnD4ykzPgRqpHyX3h46XC18yomucm7QWLXoYTXBGWFT3y5x",
  "key18": "5R1uCLqndRQXsRXrjUHiJZASBvYPHWJe6ZMsxT9mvNv1fHNTzMzPqSbFfp4gw5hai6g8XYLeAiEDAmSrKqaBTiFX",
  "key19": "27A9yW4RhURugPcuPw1vFbFBUXhaFCYW93dBuZPFCxCwZvpsqvEWnrfpiCNTZdbGh9Fmr3Yk5EQW7r2uro6U5jnb",
  "key20": "Y4QkKmkVJmLJBWicSykmeBjWZvz7Gpp8HGoWi4rkaSYtoDnzDFY9sZc3WdncvaZ4UaRWjKxHCoc9jKuekGqTATq",
  "key21": "125VvTqHE27MXDVmkmkwtLduVLJWjmpKwK6wgpdhMkTqyq2UnfBXcRMpuhRNFmWd36vL5ywoLiw8LzykDP8fuJkq",
  "key22": "3TAPTmbTjsGQuBcHAkA2zuK4NgPDxtt2RZAQsYg49ELpywGr85AKCA9mK6ZfPNZ2njnNDetKPDcBhayQ5XwYGDrJ",
  "key23": "5C3kFVENKCz7K2ZD8L71PbReFSX4CeHgJQnFJSZLSsE2uuTkRG9wBpWvfnW1zogTv77rAGg7A57rxirUPYNygbqE",
  "key24": "4WFU9mg17Nz5U7KWDyvnue5nebycRaPXsQYCZvdgXp2ZhHQdVpTWufYbF3HQFn5NPAdgdwMr3UwW3fcPk9gxRCyK",
  "key25": "33sAvucyx4YZXyTLHbWk1J8asZHetioVRV5AE2TYsT5RVRGyfQ6gbJKjTCBjssNPX4Jtm3W9A4GtSvGx8F38AEnd",
  "key26": "JKUSfPa3nWKP5EmLEhdk2sMSjVPBKh7jSXGssBqrK2CGqefxtaAWPmmC6Ky3uPD2DC2Jfz8goRzBnLCZrCJsJwz",
  "key27": "9buLNoxqQLonvVopLjpGPfjZRVVY3GGrGiz6XDM7p6j6Gj5EyrH4KcXtZ6KBstsQFpFQbr8YuDJCxx9JcLmegGt",
  "key28": "5EJ4Dsrb4Tbti5aJ9fJpotMjTUossHUfteFLGowbMrsM6nub37GVYmNQRxK39EQ9z1L9U6VQRfDcYcp5jsx2hqgy",
  "key29": "5HESfaEAtVJKHFSNJVnAyzxjPRhhiHDv9yEh8Lkx1mL8xnWcH4aDbNSDvBJQULtRH9VneWfoMRfQAoeNHxpL9bQV"
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
