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
    "2yGAJDTzARiGYoCsoJwxHzi83Q8RX4gaJPxLxpyD7bpv8esPNCcWuJDz733XbuWQW2Cjkn9PYc6Hq4XzR8xBfMfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WcogW3pHzN8K2isAafekC2VpHQHAZamb9SmaRAdyPjMFLBgGxnFWHRnjdCSNVVf6Y6xmCfvmjwsoAcw8j3L1B2i",
  "key1": "LwBsbi9gn4C2B9hBaa3Kn9sd5GbYeZhHfMEo3VWHrAXEz7MXcoGAZwjMrSQmxdd4YQyFY8JA3VTTpXWWFco5Hds",
  "key2": "xCZNtcRuMtWdtFeiJFzutMrMKkBS1rKjy2Bp6DUuA4Bic2ZWmrtypNrKqBBxez1UGhwbxpZMnU4ofQQt3S1aW6Y",
  "key3": "2bZ4rKGMXUNgMEtoGfR9sN7xtC6s4F5WwZXcN2pG4ychB6M1uaRzEUe1TjgQPf77jD5hhwQ16skw2sbRTYFqwtQ6",
  "key4": "59KBZDHmFpPq4CQCC8mqwvLpg28QceL3BKrH95orXPLRn3WAQyJEPE7b7X54Y22TKp9ef4Dt2QNTfdhygkq652Mf",
  "key5": "5g6tVkWxsSZyndQdRmnDEhUFxQ4yuoS1gtf6Ht3AVYXaCRYE3QhsTv9G4HiLk94KWTmDw5Vj33c4pbWUEy3HTey4",
  "key6": "2aWfckh12jrPFXSUQprc9E6ztDJBye6n9GyUd8PJYnfXHwmFZmTVBdv7sjZTfpzzGbuVmBwNEf6YpHgQND1niBwb",
  "key7": "5sW8vFtUzcxttBL4Qyje4nYaNkzp5eg51L9LNk92vSZFyFjUENQDStQL4XYyNCcr12s47rfZ79CTWwfgFUWyGkLD",
  "key8": "2mvmGGhYhdWLRXetE3QoNZ6FDSmHJ73XuBrQKspk8bojjwcRpSze2mGo5WBqbq86RcsZAiwz9qHowDLo8LngyPcv",
  "key9": "krCwHc5xmXZjoLtp5mtBMJ3yQhcYS4U7HcC54RAw3N9LRjYeNQAugFT2xDdqjvEKgMCf3mFw4Q7LDCy9aPxQVsy",
  "key10": "4eFUfc7fBsE4eVJFwDCqb4k8usMPstnBDNfjvJVo4aC2BsGGe11GsQhZGTuXXtmhxT5zx5NsxZuiWzJH6eW3NQnZ",
  "key11": "5uPawYPaegpu52EtVd7t5GoRFtsM6iem6kG8QtxKaUjn1RdNa7LQwAZfMN9xVaWREfac7JKJw3fVFUChnkBaq14x",
  "key12": "3589xEtduaPe9GvePvnbtYJGzV7NYNQZtPxmdweHWpibhPRGbMcx9iqC4i9VVLtKQnHDznMJ4pH4ig85HW6Vrq2J",
  "key13": "T4Vu3nGPcyxnVrredww8o5f8a16QLE35QpPnveztYSWFgFZUESqPe6RFp3xu6GZjXYFKTKvhGhvW2E31iksUPGz",
  "key14": "4mngL4ubjCWEoaribx87SAyrehnJUCb5xSy6KKwg5cPXkj81e6PjHnsL12CgpjA5RggV1ARJJ1wySJB23pwQsKJD",
  "key15": "5DUZRp2kRQd7vcZrg5aw8dH7gnu5SBCYCtaoBhcrWYFB4ua7tbW7kHxk2xLkxtpnTYonWdzhZTQGtr1D61v26L3A",
  "key16": "4tF5TaxRTfPPrKnzim6mBXNFNYu65dwom2X4ZRAAKk6Vj8wy3K2oJXYJBWA2tKiEcdfnm7RodzbzgAQ2nY9BJRdS",
  "key17": "3ivWpibcU9okxPyKHpeRPwHZb3vfBFPt9Md9gzhNA4jgHUPHSLdysTpmapXHmRevfSXyAN6mL9SyfkBdTgiaGqYe",
  "key18": "3kNSQ4x1QNdWXU8TeWkq7SnstT8BSTS2ycpKwYP4SDjWjYCerFsjMv9LE66jJF1u9yYQD8BNqGB2JTJbjpZKros7",
  "key19": "2ZYE5eYX5KEQSB85uD1W8pUn2QaWphLFtxdi94r16osR8DDjLeLce74x8d6HnMYLpF6UP4ved3qE999WMNUuRjxi",
  "key20": "3VzVnSNDeJZQJDEu1PCm9aF2BzwwNCpdWSyCLs9N5YmHJQ3NHvuxX3X47ijTN8HK1QvTGvM9Gpdy1KyNhw8yM33S",
  "key21": "391nCZpeuE5xdm64UgELPWfFEAwMTFB3sC1xd1n3ihPepY6nFJgj2cs4qFpqWkxbXKJPb4omYKL9m9ZgX89cyR3i",
  "key22": "3qhuP7cCsT4Pg42WmsSWxwd15JfVzeUZNtGj5CAL7JsUQTgbBaki1sEoU22AKGpmEDK1nYpwermuPCoZRQLrJJMV",
  "key23": "24YupzTHfYYiMwPSFfPjpYtgN5xg5veTENr7vTyZ53HuNcYm8cVB2isvi5qt25LTcQebFAfHiByUweTb9mRSgh5c",
  "key24": "4tBDeBr4FEcKLgaFdfDxy57LUxLnVNSd7LCjCjW9dSqtEJdnExygbTuvPfLuMDb4hjMhqrtPTDGixvBhxgUei5gU",
  "key25": "3dHZQ5abzAXU46A5Z21tcc3QwN3jRrA54tyywebZeZn8K6TVXEcP3bthnveH4HBNUYP1kHMg5KP2CXc3Uy7CZdWm",
  "key26": "4BpAtSmQXhso3PW1svjLbDGXmYcHL3BpDQJNpVm5nvZKP3bL4FcTbyJnJzi8sYudTyGjrZsVBKT6JRXiW1LVmqiQ",
  "key27": "7CvoY2BA3fEzKTK7Pqd1ccU2ZRTP2SiqmPdFhpiMiu1sihVQbfFk8FYYp3T9MqnHa6EMkPxmhjpNUTB4vQfDC9i",
  "key28": "3UqzAbkyM6MhGiUgLyGpf5LuM3Gu6hA8szctxzVynAQv2W4yzFudrtZWfsjpnf5CDXWTZzLLZzPiqBV7B74HBNMW",
  "key29": "26Tb3YgPSUx7ixnujtXC8w4N3MpC7fBRfqpFJZAMtCRKukQMFQsoWc9eVvhegp1XEmKNrH3ePC1S8wxqgcAdR13M",
  "key30": "58vRpeqdjB9PGCe1kVL8UHZf4JkANG9jEArFryQdtJALqmbrPzNbCtn1KnXaEeCzUjD9Q5JnrGnFJeLySzSnteWd",
  "key31": "4VojCTMuh14H8FqCMeorZPXYpNSRvdn2GjGnLjxeBaj6J87DFqpn1t3b2bxJvdmCzLsV34p6GrJzKFcPbYbeFL13"
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
