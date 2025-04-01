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
    "4cd84ScpQViRvL3yj3h9V9ig4AVA7vHUwXWRiymDizmvgXe8BQB7BY4KZzQZG8b23TMdqcf7hHRkFMJ3KejVLv4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nGAtaMQCHSx8s3X9trCZyqrsj7PxsgwdJFtooGaJ6zNJ8dfuqiyN6qW4wUjkgs89BiN4Q6JtxC7rvEanSTNjnzH",
  "key1": "2U16jBpoxK8qzxYshdZNMASv1zrxcghoMYJB3VWykPTEMRGbqrTBFk9aubuPaS8TFLvJeRnqHE3vi37G8UihQzvM",
  "key2": "55JpHk95cgFK69cNceyyUwNuGs955q8EiSRygACVFATZZCJ8rYHSwnr8YGTC1SxFX3yWF4YuvFQ8BjWuYGq1KqbN",
  "key3": "2TLRr5cKy79owHGWYra4PSKNc4KnS9yMpMTBFtVKK4dcgpJkZru3D9qtynVQ9zja3kUbyc4w3Yah4yVTuQAcsm5",
  "key4": "5kcSYis4DuhVF3t3auaU5bByUyLFw7VWLyLTfVnpJcsADw7BFCLPnVCenTgpYxnE5ubN5fnf4w11eJ21FuWEUgD",
  "key5": "mrMJZDqck3J6Zm5Cjy2p8pMapN1BsagrxUWfbBYzqnUNattXBSvgBGwbUscjnM4SZ4LEu4koDvoPRti5T9nCNuS",
  "key6": "5xAE9JeRYGXkYcePKniU97pK53bK9BiP4qd2mFNogYhwBux6Wc44vW2YKx45fJkTFPGu9S1A3mgPizYVxrwVjiDs",
  "key7": "sWB9BNg4wxsTxxYPiGGt7o6hZQ7KDp74S48MQ6yDSNRvLXpYWCs2QJMrtshymiaLDX7MMs7DRtwHTKk2rpoaeQf",
  "key8": "3bmq5bKmL1jhk3Xvn8Ln8p4PnJx9c5D2JavJNQz48uFEnZ8cu5DH2n1gz4GpDnvd7ML9nGagvaLbWQgGmrYEaVgH",
  "key9": "5p1hZqQjRVjqhLW7s8xFyfKgzC6cQfUdGH5CbjxCG2LXZ8qH2TUgVv47NdPg6SnibEmtPDvUyVSMZ3fLF6Tge3ga",
  "key10": "3SZHSkQ2Hj6oPAtyLfcvwUeqouFh6pkeAXnkKmfmAicQg6GQuyNSrhphzpjYKSEthq1acviPJTybF56n3nwBfnSC",
  "key11": "4JRVQTVSqoTMS9es9KPEgPKU2f2zLYSgMiS6SjWViYXrQza2Cr9zd6pi35L5N2TFiyPQ3gheBQFQxPa9LES9cFGu",
  "key12": "4YTrKakUnkxnukcTRucBhLsZ2evNGGF4QdhT44mo1BuSjXAyrRXzG3mzqK5Se2NQMtVUoWMCgm84qnsWp1iujZ55",
  "key13": "3kvsrG1Aj1aAAybRcv5c2tbgUCSntaaoG1fii2HVBnnYzLokGX6p36kadecoyiv4xTZm7kCHsHsrnCzp2Hzk8Q4u",
  "key14": "2c2Eyz46Hfpn4DebrvMiqi13pZHp1hdtJ5DDK51HVeUogoMEYVTRPBWFELmpQPnQnENJqtVm98PBZdzT8R5MDPF6",
  "key15": "53R4RyqW4bdPK1wATb2YxjoXnDTgXwrA6dyE9JYhC2UDKAZ11hY1foZRn4ofSEVcB21m4xyZxyjbFnvYJjekYhKt",
  "key16": "3VTPRctpReCeXckGuioeXZ2F6hSmwvZCvphZ94E2fEe2AR9iP22aGBuRvLWWQCkqG2Sa2PzAE2BiEZnN4xrzhoA2",
  "key17": "5dDEBod3vdmePZbhCFnkEGhjYnm9X5t1mkj1Ze6UkaQfqMQmrDM5LpbUJKo8yxwHRarZC7jbiCxruzP3fmWZMY14",
  "key18": "51775GjLFtXVhcyqLckBzeU19XD1W5P5wBAiNumHgGD2xTd5PPKy3GQqmBc6rgVfovgJkxCvrU796RMyab5UTmX6",
  "key19": "3WkewcGbtBegHF8qKTmLH8w3RJsSFFCtPpv9EwU7tG6Q5tgcbjqfee2Qj8ygf8M7URqBTdGQb4V5j4sQdJKUJ7Wi",
  "key20": "3e3huFGoxxJeEwbmKwDH8frL9p86ZwhEX6Ar98NMob3ZNy7mowJCjKkKexjWbbg75sNQKbhwRCeqZ8PrU8iuBNRi",
  "key21": "3mfbVCxBYTMsWk6vhKGqAAonDb7w3YBr4jDnXHPdvJXAomkWhniW7NjyiQs2RtCPmzEU5jBUWYD159Jme1ATtTnT",
  "key22": "3oqC4AVs6rZLJVSxsE58vNNLz2RFZZSm8z6dyKKxAYbCovuUKt4nz5UDwEG9TcR4zQMdyguzPhmAt4XSLiKbR9b2",
  "key23": "4izta1u5K7J8FoTLdboEFwp7dvLPqC5rGuurk4Y3Caz9EHFSiX9eZ8Jvsd787c3K2AL1ucrq89s86sgyY232HJgr",
  "key24": "2jPcyedW9UwVRfKDxT7xEiYfZ4Cu8F1GoqZXb46m17d8vUiZqvQe53Fq3r5ZKfzidzi9Jv5yD7c73BqKTpYJANy9",
  "key25": "3W12XPHTFArFyDJ5nW7Hjj9t3mgDTv3KHUsJd1BtFSnLTRsMP567qtrfHAx8d6dBS3QKyTVnMJ5dYVCGjWiGEX37",
  "key26": "4dLsLkZXpC4oX6tNRrgSJsyN28HPL9goZ44qX9T6CHwCMkHi4jn86W64jMh2Aayh2sgCNLHBU6WKiqNP4z9FcZjc",
  "key27": "3VAfs3HoSd6vwMH9tHhQpNtpP9wsXj1ANpaiAjJ5r7CeAUbzjbp6jm4K4TFEADwFrH8ethAP1f6RGqhM6cSFMjj4",
  "key28": "5D7evkmRG8N8pNKCBhAYCB8vbRSES76zLSwLQ9xhvduVazZ5S5Hs2VFyBnvt7LjiSYrNonj7Y8jv8xfLuxsRfBpN",
  "key29": "28dffUGASz8j5k6ZNV6rD3Pjmb5mS7bZB7TiXyypxnFRMUhHv1SLEAFp5rB8nAZpJP4MEB71JYM1Hvzs3AZyNyeW",
  "key30": "5Gaw5bbgGhoeQ36JfKAnHU4aYJ9T1CVvizLfeUk6HvLB1cEmgfyHBswV571MhKHmxTqxtrxJwMkzrWBvTBNg826h",
  "key31": "32qTpGRngHNzRK6TceERuBFonb7iZGfaC7ZrVQ2bmBfKHp8EemwKSCzXn12idgkYRJDSxfShMbce3V9aeEu78udz",
  "key32": "3LM7m6kjhdWnT4gexvqMCn4RNfKCjSc8yfWnyeSwLPFBEoCHJ3azgAt5qujzRWh3SDvFSPfUasqg1AypACkFBDU4"
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
