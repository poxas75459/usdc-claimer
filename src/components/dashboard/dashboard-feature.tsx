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
    "2czupb5kENjMVhkAgJbSsws5kxV7zu12Z7Tp2cPA7rQpwULM1y4mAaUEy82vJDXaoFqSZuF8t7w11QZx8gi2Nyht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QJYwuWz6DCPKeYoGj7ksYtg7wV8HhhHHjzyCzcKUuqT8mafQr52aREYBWnp157uaYNs4vqabw2HRbJ66o5iX4bE",
  "key1": "ZGHSA4rxM2cCRtinw2RtQVTxKvC1Zq2HcpKxP88hyXvjfELG46fCJU2KzUK3thsX4otfRL8kR7i7b3w51q1PdEN",
  "key2": "22w1tfiBheoPp5C4ADeQxzoYjRSrRzueieU7tyqNfZ8qMEx3VJ3AS3DAdoeUhjCBeeYVq59VLvd4yHvgEmgdALfD",
  "key3": "PMq8USYhTnnguJxddPu8vrogWBzUbNXBnyiDqE9i8P6VzZsQT48jTFrCmfHzmUysfochJYMUZB5jq7v55HW6AXu",
  "key4": "5wJp3f41s9AuFHa4TszAhQiQpYjnYBR8fARne99QhWSmbHTn2ef2pDDhgGcLM78pvWCnJ6pxC6MLABFXvdcMahHo",
  "key5": "2Jna34AGFfBGq3LmueJAy9zpsMKeuVAbp7qJFTmDquL6gwng1Ch4HTuV1XUguAG4Dqn8QEEza7JuFBzUaCGGKhAz",
  "key6": "2cJEe3Dzp2Z4rihaop7xMd7pxe4tUHNmU22j7F6meVJ52kBNxEmEqCaWf2wnRePP2hHkb8VtH6MQTeNAP6hBWhSk",
  "key7": "2HxHBZVJQukapRCPcf54ZDk5j6E9xLE2UhPwwKbyAESmLbkFT1LUrzpchwYhg55EyMCxi1H8t2jXRMLibrBTG7RH",
  "key8": "42qMhqTGB2ZCFGYcHd9XSxUookL6Aaeq5h7gBLgL2TtozrakVZoKBj4kVA1NgL2sCaTY9iTu3EHKFBXgTq6YWAfX",
  "key9": "5oXCKxHw2Y3KifzNwGEyRoTDrLY2WwGHyCSKy6kzcyVtHQLNxVFfKLowV1TtFVX9MmbJyTkgDWDG8571EcU317tE",
  "key10": "2MNH4nhPDBRagxZ5cPKbzV1rbggsxSJXBh4bsXHQSyfiRqT2H7mEYmQEiR7FW7gdedZpuDNRCRjCFY2EuL2Rmk8Y",
  "key11": "gfiZShpQ7DMUX84zcmjTdBE2baPpdp3u11fWr9wUb3AoLTyzDbHM3GaFjBx46cgpKGNFwHJfzFJyKWuitpyCqgh",
  "key12": "2eoqFz2gHz6myAj9dJRyVgXP6UCwwPs4ZvmkxQpdGNjXyjLeoLnRd7UNRfZh8SZaiJMhYy8tV6XoH4XWwEhetMM8",
  "key13": "3izkMT36d4uYJ9uJwUSj2gaGjh5bMnQ7iNefWHUXYiPp2MhHfVYCoPYSN9mawzJdXovqFdGJxKGxShoWZmKdrzmZ",
  "key14": "5jxZKYCvno5ZCmjcFwCxukFKsjKpLJpnxVKHKwFGooCcmdFvr7a7Q7uJxtxVojB1eVzMZ5ByxkP7az2by1Z9GgMV",
  "key15": "SCNFfpFeeqY7q7zCruSE4WccqpGm17C1x1k1VBq5hJDKB3NA8KYPfJmn91fGYMYtFzJVjKATdcYQrMREvNDUjUM",
  "key16": "2SpLnRuzEv3PNRaEfAVZRV2XcrgH4CYrZLmFhjk4HZVGaBp4YuatzTDKYcLMmWE3ArNeEzvTcyJT7ScY3M6oYkgW",
  "key17": "4PJKJc7ZS9ngYc5FF2zVTAHd6UrMfefaNWWSWnJbDDam4KivnM4a2WHQK4p8NsEc4tj7GWX2xtW2jH2scLqWn8qB",
  "key18": "2DeRJWJvvQ3GpaJ6ekyVNoKdgx6v6UNvJLzsULdkKS3QpetW5dfYTtPN6gaQGPGWGponFoZmw1UkRVFjWjXGmNNv",
  "key19": "2tCQmsEmjXPt5kzS7ZzHyga3BMygN3JdSYjBii1hVBqgWojJNAYD8DM2VVa4fJfCzkVQf1XKLPpq8Z11TTFxUxh",
  "key20": "57arpTCQr5n7m2Gv5hv94aHmqSy5A8korRuY8jhHYSthEH9pPhRPbw1tCoxk37LrDztNRdUKrSKeHZNu14a3Yf1u",
  "key21": "36XYcFu9k1T4MYkjAW2Jt4BXvT7VRgcugXaNWz6WKJ38dwmWhfE94VzvqhN7npZJcgDkQyXA3wMAneo9iZYN8JQT",
  "key22": "3R8W57PThneYDTkaCevRCTgi9E2QzbavNmFFVYZNhZTTfuYSqoHMBC9DsRyin5zQSsQo2sV4LS1owij4K5CWrGQu",
  "key23": "5zXeoJoyZT8SCexNrnkE1hXJYphogfCr4JVhokPBnDaj911wh8wV5E4Edj4M8xLaCsJ8qfgGfYwT8sEhmVT5HkbW",
  "key24": "3tp9izLG2Ef8e4odpPoGFDRs2myapRi5QdnTHbecFPe7UBGu2p3ovoVQk4pSA1AtBX48H6bBZ4qKQBSkfcJC8XW",
  "key25": "3P7LG6SoGT8TirLhanr71dXf2pk1MiqereXhX3hepL3gwrJmMDCzgY8PCxv2Rws7hNSeqwuHg6GCZbAXecWz9LJH",
  "key26": "4WPArVhfME5CSSuD2CVsh2YufXf4B59kEUCEMPVUQn3uN7VXHpXVXHjMUMNCnw65N6NZ3hnyfMpoFuL7TSNkVmiA",
  "key27": "3wYgTvp1LbLzSRE2r24yos11hfgvGwwLDge2fFoysSVUYvJMAD9xMLUTxsG8M5hqxmpL87deF8QLQ8r52K1vDTow",
  "key28": "YjiA2LTv2Atd72wHy5FvrcL6zQdRuYQVU2A7tkKzpMN26i25hMCcDNWT4y4ZEMc2tXvbEmuhTdtWeuVrdwuHLPg",
  "key29": "3zeawqjbcWuW1JHbx7vzfRaDjYpYfhrVNxnjyU5fU9fExNDGkPHj8TBzBycfVaxACk87Rq7LR5opSphbscvfwcv4",
  "key30": "3ExxaEjWHUR7omMWBk3jEEHwLKerCADrTqGf4YKbXcDkr4MTmFV8dfxGqtm2JFYTMteC1b4Fq3u7RqW5ABVGP9uw",
  "key31": "2ospVZncC5BSpwfyCQo7t7XLtYn6Ggm4DTWxZ1gt14P43LVbAL9QEc9HpSNrK1RGUDjPLUMy7PEWpr9yft8Dzx3d"
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
