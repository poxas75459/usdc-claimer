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
    "4bUtYhx6gG6psM5RGphXKjZ1psEp1pndp5PvW8ehcEWsKFpEf3utRYxBYX1MkiRUWhhLys9oAukkURsTML8vz8Rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RMrttvpAZYjPkcC5KzJVjk55ev8CztmauCtWfSruz7LVyJGivwwHAC3DEgZyd6nNA1gusvAPHMQRKC9tDU4npQi",
  "key1": "hw44MA39hKWc6Dcbzyd7VoejFBdfWto3YUy4iVKZQYX8NXwVr5vV8KrSR5DhHJemkBAsrh2LWGG4c1L5MNLEHSA",
  "key2": "2J4aiaWXrmCi6VMKhsZG7AvrxYpeeGHVEWq94KcQe6GJH2ZtBwWiZ79cPTY6iws79kELagfv7Sf9mSmmutXdKHWy",
  "key3": "5V2F4ENFnyq4X3D7hCehKuCfiET9exypCMZX3hKBba8p9ryZke7mQssKueFZt9RaD4EozdK6udvqdP512eXbmH6d",
  "key4": "5CfvbTHe7JKkv2dnBV8z77inULaKWGYkpfH1HhmBz1k3cxnc1uJaYTyx6mCEGwGbTbLqcqgPfeyd9qgQP1aeb4c1",
  "key5": "5LYk7LVN3U7uvMtiyepviMMrvpc9WcCR6TzkuumUN6iGMoNn2M3VHcyWgJ85ub9PJf1e1sPEWYFBLQxWdbouKyc5",
  "key6": "3SLMSKoq1E43U3nvrQfgqTqUXRqFk5xMibA4WaBRbUojCS25aG89GWPHPZ5emEXmpgat9Nzfqhjv5JwVWNpwsLcG",
  "key7": "31J8B9kW4hPpDPqL1FRChmAxBWbgAstLbF5d5xfvRaLjitX3HaGAYQE3haFP34JnLZknmezg8fHZPYZqoEsNsu8p",
  "key8": "wL2FkRCh2mU6MW9dmnCLtb3UzorySCCdJaZUNRpBdpy3eXcqzA6J7JqoNaRgiEoAkX6YoUoqPZfbFytH9JNqTsR",
  "key9": "5zMviJ44NHipwMTcFbUTXMHPmTnwWfGg9Tes1aKVPQXwLq3fKBKnus2XjYPUAABQ9yb1tuEh8s4Qs7PYdBeSkK7E",
  "key10": "3ukRn3kDFrxEXwRQWNqAgdKCB6imNkko5m3ZVA4sEejcFvqxcjuXehRLmPTGeeehXusb9XmkzRnkYFSterQ2Roif",
  "key11": "33JDKtNFnkjWbzsJ1jpAGo17fr9Hx81FfxiGsW33erpFSyqXxTL1fW5v9PoMPCxcEp88uNiwNtkRZZN8Jmwm8bU4",
  "key12": "3DxcBU3W8cske61CnpS5FfmCiSXxDFV8T1HpFRCZBC7wbKot1en4UAX7TZeyyHKeRwakSZbKwck5UzBzVF37fj6M",
  "key13": "2obFFipeu4coQwyLk9KBBjNv7JJiLq8zkQdadBMUgJfbu26MnLpuM9EmeoJi3jyuavGheWFK1zX8PDdJmX77LEy6",
  "key14": "5efnJQR84Bc81i2wKG8BLGjAxn1vwA7Ku7PrAtdQvkZchaA6nP9m5mDM9LASfT8c8FYocKddTSe7r3aZaMGeivmm",
  "key15": "5HvSLJ49yAZpggeb6SvgosZUeViVBLCDZ17DJHcFbfQzr9Wz1d1d94GsGCA2rKmBi4YVfRc6UsXs8yfS62VvssAy",
  "key16": "26xni24C1uZn7k6x4SnvfY81cgkFmpc2qaHN8iCDNxHERGU8Thkaa4bhjrPz3s2aKvgMVvkRJMx8FCWMuVvEU25u",
  "key17": "mSHsvgoMDRXLhi2tA8ztanfN2F93NfMwJDSqZNMLts1Emygqf3a2UKzuide5KcBE85GxeZWKbdEmFWWtADAGcea",
  "key18": "4FG8911Q3XnWVANCTG4oZkM2DqquYBWPgowynhEHm5n35UZMurpZaBCQ69DpDVb2vCJtD4RpvhM4NwYQVuoXVe7T",
  "key19": "5g6ZyQ1veFP91SSuBNe8WQM6AhAHudF57UTCfYyzuzdkbtid79WUTc4uVVHvtjBz4Y1AJxejtoiCgGrJDirchbM7",
  "key20": "3WUdJyZCZJ4B2ogAAhwDFyn549ErSbDjrbptYk8ZDZjEzpMbjZEaWLZzbkRnhXrLM4rdbLSk7ss13MGgwok3ezRd",
  "key21": "5XznRYJZoKsssbe5jyCtu8fcNoRsb7fmnsKnn6DNKSmanXyffeeqY3iWGSgq5XZSGqyJXdWMNkjihf9prrgMQaZP",
  "key22": "3Yu7cMGv38FUDBaDVG7xFRbe5Q8UdBoneHRysbpT13B7B1h7UA4zVkX5aYcoQL3PMSEKqSzdGAHHVkMTmQV49nDV",
  "key23": "rb5KZb2F1ZiRVV7yMiDJEf3FkqukKk4kM8axoqqnuVi9VzsJajdhn7bd6wHvv7qiZdPXLbxdLTZrt2PhmxQ559s",
  "key24": "4mtmhRAJD5t4c5GFd71TiNHRzBCFE96ybzh5dvZyVZ9j6FemYrDfE6A6pw2L6QRz9ua7Twai3SwriGHVHbLkMU8k",
  "key25": "2q5Rt6cwY2MX6wkyAyfxkiWm8om3pwEGrRjyhrfXxZX4aKuhkHTEmnJUhmzmNsdG7g8XgvWdjr9qPk9f8hKbjCqn",
  "key26": "3cK2DaTwDWGSpkn4PKKZA6fVZWwVrzFAHAMTbHbXNHUtaVRDM8KD9WLPFNcpn58atjomWvzz5mKmAB9kHzyL5zDS",
  "key27": "2wW5etof7NgxMV1Qk5MZzpCEnxJTAFnY3pcYRHJ5Fn5T8D6aTzatSrtzChmYM95G4ggDSNV3m1oci8LvtA1p3kv8",
  "key28": "4zenjdfRrruc59zoubb4m1GWDTNbXJpEBWGVVFbzfrDCGoERSuje79NrvGho83PUBAoncS6gjLW9jNU1B6sytbUQ",
  "key29": "48xghYVhaxQwPMsQKfYDkuiffzRBf3mAfU9dj8MgR8ET681P5wNwfU1PpkrK4PAGt67y5wBkWoHqURrJxvNznMSp",
  "key30": "4WGtBnToiwxahKRKorDcLUvMxD5LkKWmDx3Rc7KsdX76gkWHDhK98WCaYhrySi5BBkzWhKitLgKzNErbFpqcijGF",
  "key31": "yrboUMrRHZtA9hFgh9gpsymLfNTQdVLnHa5Wy7tAJV3FWHx2jbC2RZAgx46DB26eBADEXyHdauvjCTH28zxkB2G",
  "key32": "3WYPWmMPj6VHVBhRnrNVfSCay98HDHwQvuxDcc1xYBbdwbg1er88ra7asQDVmg7dcbTK6vwYp8AfVai3QE7oHm8h",
  "key33": "59qPetcMoaETxbwHn9w7q7R55sqUZ7AX8VjPieqZsen6xWFWrWBcjK6Qkn4H3ezHWr41xD1nTJCEgVodg4o7qXVj",
  "key34": "3mrzXs44Kg5MD9L5whWy5wJHX2nvYrK8fT2z8LLNF8uzT3wHkkF27Xo17pac7ALApk77zjDSz9B34H7bMwEUJX3"
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
