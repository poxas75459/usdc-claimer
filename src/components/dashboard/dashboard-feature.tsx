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
    "H5HwbZTffnXHWgNeNCtrqne8xa3AVNi5PTBifPqRWDZKjfCsULCU2ZbgJRuchrEaVDy2WNf7sy16wwipcriPfuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hSvVwwrYUDbQMbGrBoXTqcqUp3RWqnv2eF8zY2iJj1rqcmK3FFMK85qAKUfivCLo9nkFKAZdWyKvvfm6eRAS5jd",
  "key1": "3SyVcWhuTL92DSju3zUcJc8WnRNWFyzAemM3osJifFzRpU5v8QaumLB1EjkjMkcD4sB6WHFKodPnG996R4sCfvQn",
  "key2": "4pExyzpVCAZePaui4uQ5rcg8hyUG7QVjQDPyxkDSBtuaJgbhnz5VZQt7GK85kNA1BqdQaZLDyE7waXkHSnG4TdEr",
  "key3": "5kQWX5SW3PqfHt7cD6zFy9NpAFMK7oc7avaLPiaQwyQpwHHCjdvJigFS2sAt3BKfq9QtTmByaMXjbAKjDmDP8Qoh",
  "key4": "oRTsFE64M5FxPY4iJCYWPWbbwVmHVZCc1sguUzxHid8QV7oYUyrUocCvvych4rdX951s1QKrN1gFWYmUhnJiNX3",
  "key5": "58zJTvXP3ofobHJGUWWWy78ZztFDD8TxAJWJjqAbuCSKG2XCmG2opucXRSaH13vo9utFvqKe6oEwJUD7Sd36Jrzq",
  "key6": "2kxPWhSAn4Q1ofyUexLyAv89fKD8C4L7EH9sNBibGvyEG45TVBbsmiXg9QZEACLuazuhR877QvSrHUUydFGnPi9J",
  "key7": "3WYq5kYWVLPFCGzrZNiWZ9pM7rzZDqGrGvvqjxwFTSSX96EQ4jQYfAXPuTbEMpW41Qt9RjCJuVJBUDBhqnwwopQv",
  "key8": "m9HycuZYSJgSN88FuBC9tKLRuAoeA5f72Fho2Z3GQXGJB9xuA1Cb34EqpRNu9jAE4WktArPmWPjypEvrukdwaQE",
  "key9": "5CY9Qqq3wb25EeLZEm22xWSQyUCdf6B4kbmRWQALfcFFaFLAKBZpQ4gkArxe6sHh4cXDSXp54LHiud5QgxQD4jec",
  "key10": "4txuP2wr1TLGpfgN1sMeKZD4n4JDjpNdfMuEqUt94y7hQYZPYSiffBjT2ASvcWn1Uei9TgeSkF4XYSVPHVhGV8JZ",
  "key11": "24dU4gTSbHppjnJhwcFoZv3ih4169CCwWBSEAwSigZdyNNtvMFj3nvbRThyNW1zfB8fEhzhGBYqBA2zRZtzzbBSJ",
  "key12": "3DwxjquKe9R6HsvHP6UftvbMjDhrpk8cnVLYZwzobgijRZdpFgNGSuUXroBpLExwoC4qcTzmpu9fVd6hRPfY7MaW",
  "key13": "4kCEYcG8HNyjh5m8rjKeDHXwxnN45mwJtKC9zmPZ7Bjxx1QTen7SPXGkXgfsMvo7z1DThrBTKytpGpkk1Mj7aXbo",
  "key14": "25rU5VUsT5ZVYNVXM5YUi1vDdqcmSmsEg11qkdGSoqeXWrktpUxhm6g4kAusK9jCFfywCLBfBfhxeybt6zzvQ2xb",
  "key15": "4fUiXL1JfMRXhT8mHFiuBaMWGU7n5zKjj1x8v9GzwSjgZW4Wuyo2k4g1XdvRi5aNtme2e1xRPPbA8Bi6vMFRVHAh",
  "key16": "4bfwQCkfHhpZovdVZUgQXY36P1bCzNSJQkCqD17pSXurt32sg1iEDQSZ5qQFfMRDC9zoce7C8cjGJGvgvnABnn2V",
  "key17": "zCt3qa9Yu7PFqAU9BVbHpKr8kuBWNhvkaRpoQZKoawhcMtS6ktoh6KvPr9HcAbRPkLqg8HtKf4gDTXv3kWqgbps",
  "key18": "2MMwHEjCAnnwjjfeQtL9w3TnpTz6VRzV3BCUG5b3yojZW58Vm5zAneVaJDH3GnDW8eHSoWMAnghQD78PJfotuJQN",
  "key19": "2tvjvLE87yRDA4g9strKNqszcEPWEigdCkBb1StW44eYvDazN8V3XJpunYM1i95Bj2j2w753Hk7uPCYEnundNMps",
  "key20": "5x9fswkcgQBtQtQvowciDpusCjEtM6zgPs5EqHBAxoLdYpeawpXASkqmkMRnGQS381jJzVGVFVs1fNGaHEzkPK3r",
  "key21": "C2VBEhyQQVJi2Mq7QWxtz7N7eFRuoGdHpQ8jNFabd1x64TgwoPSFDJNUaGoKQ5URi8ziKnun5K8B8iMtxtLojEj",
  "key22": "3bCXVoHgqj6BiRN5EywKVJBTCECX9y2uHgTscvunke1ew95dQmz5M2RugbQmktsspjbhTXxBbm8rk22nUrqh6L4T",
  "key23": "5vLBetXZf4T8wkfqT59snNrunbNu5w7FWdfjsjidadXHyNWdmNtskb7Wr65qnHbdNjZw4AzJ3gXTKpJUg56dWBGS",
  "key24": "4FDXVVnVMuNEgUXrJhk7XzofeTmj2QVgvG7VFNUj7FfAoGgkHahTmPDceh7ouFSQSVoBBV2sbfT2yHnrww2sk2op",
  "key25": "3nKokeDe8drReGPHx469aNaJP91kRXEQ492h3aBUpt8833ybz2DVPczy8T5iuNFYk6dgCaSR6M9t8yVSWxsvnAe7",
  "key26": "34CGyoVef6oYhBexcvw4EAEFJXx8qctipdTo1xHCwcnSYnobiQxNvP9G8icbzTkwcTN1vTYhpymFDpJSP1QupDwF",
  "key27": "5PTNgPyKDnHFWniyLEWas4cBFgFZdN8Td2QjS5E5gZKJ6ivNH6ka99RMvJ8y9LqBhHuTm2cQxDKDRTEfExJ3dUFj",
  "key28": "46TWHbNyj2yDBrQzHa7RBzJmMShCs7JcSHjvrvNuUiWYfdCVCAfmRY2c9R9aiDJKFCziLngEtzb7AHGKKDYGthac",
  "key29": "3z54PRP6xdaNpsYpj7CivbpTn9PMDbFbpxmtjnqpQqWtnPTW8Vwv7LCDjBKjbjZCu3xirvtuuX8mHiysy2krLS49",
  "key30": "4TjAohStrZCe3tjbpF6gU1mTy6Ar6sqDGgLeVtZ4ZqCYu8md5CsFr5Gf326cjkDq5WVFTff138C69ZsqsN1Ujc3v",
  "key31": "2zhjNpVnnsx9eSVj8cXhGmTnXW3AEw3z3sLsFeiJe4ih1mq1QBwXBid9n3Wto65j7xUGrB5tyBwFXdhNU1j6YSkd",
  "key32": "55sZqu7fEphAtosA5XffQwm5TaDVd4UyaKm1QTttPCAiJBHYnUsV1mBJmwoi2a3Aef6zZHn6sBfDh6deuEALcXQK",
  "key33": "5w7D3RUy7uDRECrFVMXSUvnjGeJMqXhh9FEb5ZJ7frQj151i7Gd2Lcbe5e3L1fvvCiFP1NExoJAP8WCgzAUoXgfa",
  "key34": "4S43Wut8NtWHTzXxWux6VhSmTw38JoPLttV2NArDXZJSDo5W7mGXryTDoBRpmaMrUCjkwyBin6Xddn196mgscSCP",
  "key35": "pmw8DqFFHxx3GhcGEp86fS6KjKGTxU6LWpp7K41Qu4Y96TTosfF9w8o1mJ73Ms4QLe2iv9fgoLuBML66e3gQt8A",
  "key36": "3wKYVPgwr1uVPsJooyeLr7coYWWcq2eEoGD5B8GACzncY6W4995DM8vJqrxqjfohrLQ9EDJUtMa2CphZQNydhe9p",
  "key37": "2T6Kz9BMj85CPgovLURZfX1ffj6jt71Pg9V1ekaCqY4rtXCLCdpTzHkoipT7Pj41brcr2ea5ueAGqQCM4TnT6Tuk",
  "key38": "Yv2n1sW6E8CkPkKmh12qZ7PsQLDfcsnvEeqJxRjHKxHiA9ZZ8wSNcniWhtJheGMoTG8CfAKBBaxXeMEBU6bPcx9",
  "key39": "2pfrjnodiBGmu4cnW4GTHgPaqMouV74vLYtig1nAXHKG3dh8J3MdLXpu9UB6AtkbsiBHMMi9e7dTbJZ89CuwxKDp"
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
