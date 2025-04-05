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
    "T9Rj7KpNB1wmo7a66ydjkdgbYoUvQZXGyrjgietSoeBaHkDr3HpJuDLwWUAR1sLsVT4Zh5SWNXb5xSGa31tN2u2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oRFe7G7FrtggdyA3SBCDHAjt1HV7Qmw9RVSXngUCqb31PNK3yfvzzGqqQp5xQaAZTnPPoHc8KNaCATytWU3WGb6",
  "key1": "48mEhUmza7MDFDxB7J5cf4pWEUyimXrTsmCs4JgxWmt7xboFVJSLc5eKgH47JZWhSnVaK6U7rvp2NFbVKHDtW8kQ",
  "key2": "4XcGbDkCLWxpJnFRo2bMYYzYnLqK11o2zp5NBZDMpCxhcxrTv9VhjrJv1WGmHECcznQy9nj99YWGfb9t1psdXkc3",
  "key3": "5jbKqb8VmGcnUCNDrJ1juNegUj5LdfsBYgjyuVfviDx2YiWXZkN7792jwmPE6eNSE4DH3TNFaPWMLR6u1w3kRtSX",
  "key4": "21mmeXtxtVJJBQZfLoB7MJaDzuHpMkW1aMyBDQbLVLmfjwpH2q6xDcraww5V2e2FACwRzhXF8C8GLZop7UHZof2V",
  "key5": "2UjovV4RK3g9U8jiuJ6rA2ePU1Mb4SzubneG5W4zhHv4VPoGKN3J1ns85d79zQHp8bn8TBcKsip77TrkqgAqXJrH",
  "key6": "mbLdJ5DJhthUBigioZ2HVfWkSeXbZaCe9asWyBG3h4bpYJfkCvzzfgzYWudy788UBB95vXtQk14SAmBJUymHms9",
  "key7": "55P8pKKf82QK21V4pxEWTjSEwqGfQFqBk3FtDLB6K585FNSAeXP9e2izJDa2wyddR5SrCTfhcHX74jmoKMEkCw5t",
  "key8": "59G1Jqd9BA5VpsyY9kCv6c84znYu1AkqZJ5vFaJ5PK5Q9Sd4WyFvaPgpk7vH2R5kMLgkJtwkXAwNgNXVCEmX2h7M",
  "key9": "5CLiu9fPaJf1uDmXvahjqT5JzYtDHXoXAdExC64wqRogUX1mmFF74mknEfTHH334krNcGN9wW6BfdtJEn7eiurT",
  "key10": "5Mm8ZNnbkoKQGJoCr5db2QNFeq1XCkbpam6pcTsy4zJYz62g26mMYexJeeWqosmTPnmakFkGS43uXU3v7Q55ZqLd",
  "key11": "5Bri7r1Y62g7zUUjAitKJ3gpgNSYQbE5Ae9cgQV7gncFgzUXUxK8j32QcYWHxFj1h9vCFGbHumoirW5YnQQwuKbQ",
  "key12": "2D2pAA4AwprJptiSu74c3hHupxNEq8xM1t7G96FVV56YW5iWai7D29FfVTyiWNnvNPYS35VLTy2PHCouijLJmPMm",
  "key13": "2gPyzCukpLRUVQqc9zSHCgJg2LA2sJDBVy12k8hrJbnhKqVeARjbS6z7uwGoPM1nF6gKKKYaySMfHJgbvYrufYNj",
  "key14": "2Jgg8w9WHJSN63tR7PUbRXepWASvZk4bkY4ftkndmsxhpLunQEZmEvhomN5vyKCLQeLLPAvom2hGk15FcRRWz3pe",
  "key15": "4PmwoZCgkCHCWkQ43afTfNxrdDwAkzdf6MTgjaNBP9MUtjwRNMA8p5eR1mJfepHRC76TznEZaUSbUnDwAQ8U51Wa",
  "key16": "5CE85iLcihn5MoXChs8A34FsG64mz7uJ9gMbsVoSQqgXEX9ycRSEY27dyYrvgmvrQLFSQzHyDVAai7hSf1hSf43p",
  "key17": "39gVCD6BHahqK2Z314Tmtbia7BHE1GTnKUtJBJcr9dePwT6zyMuNQmCrr4eZQHb1xRcKfvVG3Mgt73wiJAsudRSv",
  "key18": "5xqDhnXAfFWZthWNL9yKmTNMJ6Dv35UZdqVMiAuFC59qe1H41rhXXZt1dcJW1PjLXKbbGjg1kDQmF1SZhTXQqXpj",
  "key19": "2x7h4sKiHRF6p7eebtSLg3G3euZ8FPj6y2FyP7AZYBRYY25AWGmMvvt9VY8w5P7DddWwkXxH8x4ZfchD9XNSvEe1",
  "key20": "24xf9QiPH7PZ6x4bFS7L7Fm2wSE2fQeLPBTuSFZi17FS1tmwFUsaVrT5R5uQoXZAXpB9B3A8yRUnr1apqiMsFkxZ",
  "key21": "2oTNzSfeRbQXm1HXaGdWJB1GdZc3PmzC8aW5AX39KZECv3nLBUBFXcNTdtYcvsFR4izMzxkKJVqittM7GpfTu7Rz",
  "key22": "44TQFw4T78WQ1Hpviu2FDorGkd7DBK5ex1sBVpSXzL4sddCDoQceGzSdpCfcXPGws12U1UUJw6yg5mPwmkF2CkH9",
  "key23": "3x1k2Udc3vz5J9dhp82npy5UHrGJZ5xprRkrnTFeFkEW2Ek4Jk331LcWMrdjZ47ukFHr2vDyPt8BKrLPMSn81Y6b",
  "key24": "2VkrNReskD4nzh9ZmsvDEuRzKdBinBfhfULCby5ABgEHxkGYeKfKeoCp6cisCB91aWwQyDoDvB1ik6ztJx2v7Rmy",
  "key25": "4BXzoqmySjkQAmB2UoUQcF9QmcNUMrgDHxZ5tQqz1YiKYZcdCGcVrLEencsHcRWEEMjMTPnvM1tR3v4FnFiq9cBa",
  "key26": "fLpvBp2uzc6CtzJSATmwb44C8f2yCEZBUhcYmv39p1nQTcLcB8vwXTqe9d5UNAJDygmnnVRzB5vN9vCq8eQX3wP",
  "key27": "3kyZGSjPeriArFe3XQjEKfUHhD8dG8nQ5U5dci8JkKFzgKQBgbLNo3YMU3iPKWKuCWCnzjDopkHDVH26sqEMysow",
  "key28": "43YPFTwjtwJUkJBgVeahoMbNsGAeUKJEo3c1wES22mMXYfX5ULJbT8JB7zQh6Ad9WqoyWC6QoTZDhL7qVu5t2t9x",
  "key29": "2sMYECduyScp2CjjCiz7jKB4NqX4gcZKxGtrghU9nhLLX35ZWyqj6QH9EPBDGUsSQgQq9SarXhJK4A7bsDTNUjs7",
  "key30": "2LaA11f8AHp4Kkm75bLVsYeGUzzUV6ymtXKrN5gbgqGikiB174iHPkxQ2pTbcGNYBg3TKKmxTKjHjyJykmU4bZ11",
  "key31": "4avbpmjvLNAeYoFuwVrvA1bA6EeM2QTbhY4UhkApkr7F8MAV4yJc5TgJuzQhK7WH2d8ef83AqmrUN9Jz7BqW8a5e",
  "key32": "3SC13xhdXYHmm5P1YYpMsU8wAucxMHvEcX1Du3DC1kVT4rAuBc9BBT1kmKcDXRxJ5EqeDeNPQUn4QtH5kEvNaiq8",
  "key33": "3NQ2i3RhabVsxFnD4oTpE5MuETyEC97AsDPQBqo1N3QWQMdcPT7FD7HmGRUwLpuqR1hwQM2pQRuDx3uPmiDS9PgT",
  "key34": "2WBKe2B9kKvjvuXkWjJshJYQDhqSQVW7mNfDpeuMGpdU7QgpeYePSbGKVBBhHkrvDBUY7T29FBqAH69tNsUVykik",
  "key35": "4jeYXb3eCwKKGVyposRx9Z7JzxBocSmVLBF8Jrr5cZzPLwnwp5xi6CKrXLrwRAg9xcSNQjmouJ6MrXgtMnGNAjGF",
  "key36": "4BQTbD51x5fEonc3KY1x3iUg2N7w4gbkDubSeWF4acHEgGiGvqwsEi3JGDHSMEuBWWXRLrHh9RKo5wU9dguDAAA1",
  "key37": "2t5F7XpSnLQvQrdwwTSDz3BDUQ97RLi7jRytHXdsrw9gDGnPNjZziXQ7YubMjsEwJqmLG42rH3h3L5axX6xDQzT5",
  "key38": "5B1pYDbKKzavWs3qM5jV3bGaRXSia4z8avLRcZNCpjzs8PXxs6Cdm7bQbA5dPE18jKJ1ZLv6bNDYxbFsgK8R84hc",
  "key39": "jprkabP9Ai7whb68tcofEBLNaFFjLoVzZokc3GQbPf526KWAeopFFoJQT9fprUi4xqYBPoHBnuDnsvH7h1MwU9b"
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
