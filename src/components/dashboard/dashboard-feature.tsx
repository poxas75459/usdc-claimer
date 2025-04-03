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
    "5ntjDM8Hp9bDRXZu9a8Gb8kKfeTHEHnLV11uErWvEevWg4E7v5DEkAuVEqTfsu4Z4dRU4oJgGFSyDjY3Pqey1qf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L8gKyhpjpgTEvyxUDWahVxRq7V25kQCPA1texHT8DUYgN2NLADZVFJtUMVwpjgKs3zKEc2DjqjpWeZgGkmCSVrn",
  "key1": "u3sXkc6Xwn3Pc6dLVu6dSCRdTADqCvJf9M9YsoEEMd6cpUzFr1d5RavSAfsBZn5kaPbVA9yTvKSdGWBZ4oJXAiq",
  "key2": "3EZoKW6dEitWvTjceFpWNmXLs5VEddcdhgPwraVpBfkdjinj5mkUj2BnU6q3Ebr4bZExDhkwySHkmL2BkidXxqyd",
  "key3": "48PR8ZFzAjC8XMrAkiVW6rpgHC6YM1CHh9mQkLJ6QP9ru5VQgYMu8MsTvmHTSki3QLSW1zcHrSnoJCJU9gyCrzDy",
  "key4": "4eRkVutUsJ5RKGgJF6PXnN5wdzSZsyrkTFQ5GhwpT247d8T7RQVbeZACWYd9WzCThFgQ5yXheUaWbENf5RXspk5p",
  "key5": "2VqmS7GKEZSy3vbvNecJvHAu5iZBf2BnAtFevhg18bnC6jJTNPPFTJU9CqVZ8g5B6SejvnM28jMxjaL5HMCn3RkE",
  "key6": "B6c7xDZjetEdgzjhWdYqgVVgfqAQk7UWXiGH8JSBjFB35JasgYkWWUwAWe6jFbq3PWY6oGUhj4X2UckVL9fyAVD",
  "key7": "2CcNSHNuLk8sqDjpp9KeNt4XLDgwcht2ebbh3KTY96weVScq3JmmMhVjZYLqPMx5znoLpgFjTn6A97qDx1qgxpFH",
  "key8": "3ko6bFy2xoDF2pG32HLLin3ukzxp8wZpbT8doLScX7iD6AbrJY3rsWmzFtMohDWv6iDdqXKH5v7kcoCjG81em5ap",
  "key9": "2tkkSy87tsLRezvsxhx3neUixp2ZeNFoENNmqybdKqoXnZfH3o7zkSHmB6RqWvm6h9xYCX2BbXYEcnXLDRTQSC7p",
  "key10": "4WE6QsxXGvdobtji1B5pYzD7KFqQqm7fcLpAnxvfNQrYs5yUrotL9mCdLRRrLAFScxsmYjmeGCo5Xo6a3tozE4wm",
  "key11": "3C5EBByUdByc132NWEUYmkm5wDh6Rt3XTJy6tjMPF2C94RRAgLXiq3uDSYin9DZvU884j4fbXxb6Rz2pMjyqwv1G",
  "key12": "3eH23nZQgmp8yypTh85oJLKUEpEaTjuoEbgYGmvUJPUHs38bppHyoMqWEWm8yfhochjFiKMFNAtq3hrDicDUsVfS",
  "key13": "2DEcQX8r9u7SuF1cWkkCTREQgjFYzt6iy1A3ry3ywUWYFjWZy4YicPGSFSkxMfJem4ipGBdgV3u3GukmEeeyS7Wq",
  "key14": "3XPys9RF3fxQMCY2J15zrzukdTJuS19UZtbiVPSFxMK7Y9EAmWvHfp3WVGucWHQfBUKXDLc6a8L5Z7ZmdtP5frPm",
  "key15": "miM2vrri76dAg8qv7KLPWt4dDScx8mGXPZvBrM7snRFWrXG6cAh76n2UKu9inWLs6KRvqudHSw6EZs77F7sQUKG",
  "key16": "2HqvyUQR41Ygx32ZTVZBDV5L8rWehify3vzxAwr7gwhmqDYKVAomUD9kvUH8AQ3RLa4sRXLHn18P4pzRhkeNZcsk",
  "key17": "5JLJaQXGWxrfaorL1BaUKCceeYQibHUvLwjtWg43PtCbLwbCChehSZMFqqTD12vZ4gzY64r1UPHf7HzmmvogoQHn",
  "key18": "3hoejf1vu6cPVUb4PsXU1sBNSrPTKPR5cyECSPxMSUan3kkVohQZgnWyEf3gVhy7DHpHNdSKQ3vqXtEabrHMop4p",
  "key19": "5Ucxa3jDFS9792VqmkP1br7i5qJn8y9dq7xjeZ1u9MetS3pogT6zmrywk2wyHeHiXSrR7LnTG2w5oS5uyB5mg1ty",
  "key20": "4GWrtnRx9mYkEFX4QWsyzzuxHdnhuAvXcUqMLUtw99jo3NahqN95HhAoHg3J4hFhpT3ffAY8c5t696jY2HJmheW",
  "key21": "3cBHoBy3T6ntsSwWxFHZHKEzcie4wrXGEJvMw8Tfx1cbYyoNkAVVF3BuMDoyAb2nfvQfNd5G7vsUCuXcDnMrrDwz",
  "key22": "axk5WBrwFh2KvGMmczbSfUkqPb6c188TxwejLs7rbGePhDLVeDgcLL52VmdmjCFkEWJx1rKM4LFPMtvPX1U95Wj",
  "key23": "5jtre3TyAeVgo6W5tXJbzok9jHZ8RJwS6oLeN4u4jVt7mtBkYq6iRb7RUzYmqea5j152Q1GaMatL8wdfcoF4HnCw",
  "key24": "XfrviPwMiR5k52qwsARK8aeR6HSfGYdFEh1BC6kEHG8u2adoF5cqtGrSbMvsinRdGpKcDcL1EJRth9puJJd25Vu",
  "key25": "4SNF4NNbV283e2JmS5dkMzZzn9aWJq75u7qHdKu5dPXAMXJoATYgKjEUhibXMXZeiBNZqYBpnP4FvM9KNDajLqeb",
  "key26": "6AshvPtusEZ8eAsh4zV2PHfzzt1aZ7B6PajqxnvWnp87BnMfKdhoTKetVKkXGV1CcYSDWegkY11NyusW8BsY1yu",
  "key27": "4U55SyhX2bSBy2P3KYBejBa9Zd2AgxWFUZYVZxtPUiFw1J9Bdf2q8Ly7gFvPEyNL9T5wVg9GSDCzhPF7rxXjXA5T",
  "key28": "dV32XgmwpqRZFTpNa435c6mG7ght45UmgmfGvrBo7gWRzP6jFyYoMkCG4ZBqRwbvTrZzHXZVxAA3L1v5LEtquRN",
  "key29": "2MSncJTrTTnqzmFETrJHaD8zQ71jYqXecysifj7LzDP3F46Qqq5MUoHd9Rt9nuLuGAcSH4tMXc7CfMPdSMe5VRD4",
  "key30": "FidPQ6kAe9uawTGGnxbR1coRdiXroNgECEBEXG9xaYHDZnMXhmFEMrYbEhdM42JZWJu2i7TkCpwMUUrYqiZFnxk",
  "key31": "AZeudQsrKsQrPvGTJnPXETxLZWodS7dnCQudda6BknwSgAgouGXQNoGk3xHFB7xyq78wPi1AFUiaRFZ9aKos8bE"
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
