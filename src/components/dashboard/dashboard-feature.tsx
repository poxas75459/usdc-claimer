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
    "34NVuCmcgTGor3AwVE9ZeDXELvXLGFPgZNGqekXtxt14rCF6QGvFuDxD7YX2c321qA6zS7YCe1X7icSmXK5spau4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oZGs7KfzwzdXSBcrShvMWSsja7iiPSRsM81vkJayw99JeL4fSZNLt9PTx1KatjWMXrLA9Zu698BCL7QPpa6jF5p",
  "key1": "K4pEPKzJjNF7vC7Trs9jAXhwNhMKCyeRnsj5tKHenpSQexuGsGy9YxY4GkG6kqkYCZxZwNzLb4f8nk4rwNsxphc",
  "key2": "5sHhoxNh3M3NEpSexc7Sf5wz9VM8iqL1EHaiDVPq1Cv6XP1VfLrzSAVtye2FT3FviFq8NQtLZ3iNY54sm5r25Srh",
  "key3": "4xq5DLFVY4PDepNUgREX18AHGnzoZne1uNBf4hYLKk4Jvch2hVt6NzuPkegPJZPaSf79Qs4M3jz3zCeZHauTnnCp",
  "key4": "eRsiHi6wkXRjnuXwXXhdPvN6eUqmgunN7RqMgPwJdDoSEoGUKCJZGnZCYk9BSZWfQUQVY24Kec9LLpeghEDwKPv",
  "key5": "3Xu52Nc2khMFM7EDogMX6LUvdwvieEsxFHHvhUoRdpBryTjZ6nkWVAkYQLYPMJTxLvzVw3Yn2PtnooytRmK2yUfF",
  "key6": "4b88x6F5WcsBR7ecZ9i71wcW7mEFQQrVFUHmcK6QAn7j7o1LWzegGNhtMm1Qu5JdhqbqLGSphnvXHcDyMTZxKzL8",
  "key7": "3YceFAxr12RtRW2kC9tyDkG3TtzTavv6XNG41PkBparyWDVwzvjdqCTaMrYT2VbgkeQ161fTMbLu3YDTewUK2uE7",
  "key8": "ysjKeu1MarjhGubA9GCg2PhpjpkcXWW54ELBwceaBxK75CkUSqwkfAgwKdr117or2dcQoSSppcTyiFKf9FxHfSz",
  "key9": "46M7PuTAgw5d4T6kn7crL99LJzwbWJ3vXHKv4BMN6Bx8yu2o7CdsXDeJM2con7vgLxWUE7Pu19AhPhbAgAfNMh9N",
  "key10": "2YaYxTtCeuhFKKmpWMBkNQ7JwfY61cnymaHRVARHDfyhuBXhMm6878nnEwD5SAnw5jYtEWcU9wZwCdZGfwXU2E7q",
  "key11": "5tYLyqDtLRRFyBcUuCRVFiHkeFeD73BDnPma7RoQ1Aig2oFm1i4shisLjNPpPKjopyDgo3EAfsNhR8BJhKXphMMg",
  "key12": "4wcJfTqgpPxKdHPwVBF7mfATuzTLiqjqpkWyXwmcfseMTpJV8ssDnb8SA2cCUdAiXWoBWYwwQDWMU2gDgdq7xuex",
  "key13": "t6XMttzw3HHnED265yHPQsBgcqTjgehRRDRJJXkXrCdvzTUTMPLWRecfZT7m6NP2azXkaKW3cDxj8Ax7JfSawY9",
  "key14": "3onZTpm5eQm4Gz5d5b85Hhase2JMGEs1tCuBGeKWnw1PYHbyxyBm7om4nPCwLv9PQR2KzigQzLQixxWdbsfZf7p7",
  "key15": "4Eqzdud85q4WXkxHWZq8XUGgKkB8oJgqDrVTtPP6W2oC5KchHCNXeBAKXqFQ7Si4KWbB9261wAZPDwj8KTQXUBCr",
  "key16": "aoj3wr3JgoAFf1gjiWY9kxA1qx27Krd77bAh3REVHEEhgL7oXjzkMMh6mZ8EYFudK1VoD7N3ogYGA4SvxJYn795",
  "key17": "4PLcECQYD49EZB9G2mj5CXsAYYkK4mZeHG6mwV9SmMvp6vtX17VDrqMS7ob8gxdbPsnTr37aVPZndZFo6Z82UE2c",
  "key18": "DcsjFCCwkTAj1gBC6Vop7tQeQ89TtXftQF4kaQ4FJcV4wSr87EKeKzwTC9WdNHRTPXLjckqs7HRL9PqMgnP6uKs",
  "key19": "1aTcPCcPWkezbFgEwMag4eLjhTzDzS9YpZWtuJCjMhhCJhVT5FTdYBZA48pUfn6NjsNv5GxwgF5oHz6P6pAvxuV",
  "key20": "2PAfySAmKWrSUcwgfb62eQBPgzURKtFsxU8jTk9DcqmQ7myXD4FZDRB9wuR5fnPsVQQfhFGszvdf52t7E5YarywK",
  "key21": "4jyVfabwqg4G6RxcZE77sCfqvFw7Sytq7w21unfDpvyve6pzVUWJFmMaZvXWyPCPyMZZWDBqPg2oDfPF2314tNYV",
  "key22": "41fRpi7MyZNtWgbuijA8is7xDaeApxdgbuZJvGVkiNybCGkwdfNSs9QqitDHWFW5VMZqtBmfwVTMvNTXWUrSnPuc",
  "key23": "4mGJacNrMfj4yNn3mymcm4qpdr9DZocEsagYixmmnu3JRyige7xxQjKTXfMAbBVDss5d79bjkVFqQ6shNr9esm8R",
  "key24": "2wU9KzjCSzQCywMFNfWGGh2wNaEQse8wxprqzhrdBfVyWfz1BaBpx7sv4Ts2ew2mrmdprKiGFQ3w7CJ5dtZFXgFa",
  "key25": "38NPaiNV5m1oyDRVat6GT8YzU493VMGM8ZJVycv2SaSYWNngXmNa9Ku8E3XovZwTrtyxFRShTHanmfXTzoxVQx3W",
  "key26": "5KcubQ4vfk9mgPnz9NjYa8XTtf7fWSkSeJFB28iAiXQeVYKMV2EWMhqQtf9YMbCB689vjGzQK36kpsMo1HyFjauf",
  "key27": "5sWAXc5aAHh3v3KtJgeJFARFSAqQZHd96X5Dk3gAqbiVGK9uZV5LvtqA1iy2PLDczSMFHVtMADkZ9KvxT9Ku9Gjf",
  "key28": "444RwkoA2PFDy3dwGXSS3B8sJ9gxg8tk4g5aCWkRRy6npZxFbjwgWSUXXC7N3ai4M3i1ujTS5LqCpQsA44ZDHtoU"
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
