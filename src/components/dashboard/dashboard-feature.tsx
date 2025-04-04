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
    "5hovBTbUv96b9z5xvwC9KcJQTkFSCH9Jdz4Hfus6KKtkZ9UCj4Z7jSM5fbp1jiYWM5DfjG9tGP2xoDuiu8V7o4BK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xDh6vL61iYfEY5cKH6XN2AsqokTowPMpSWh2dZSHuo4y9pxdS6BKNQmAadkjKrBVVHKEUKZEwvAvMHemqGXT68p",
  "key1": "5VJE4kRfBbL44xkWcqKoyUt7ksCUsjbtejJYjayTQZnyCZAnT11g5QhF7JQzPK6FXfGXmqfMofdaMGHt4aSQdm2u",
  "key2": "2eh79L7WxaFC24HuxwQJvLQKHBLFn1xZEoT5fMEUeZWuqHrioaUQmay1TDkYYPF5sAmmWtqHzaPXZ85LcFDUabTX",
  "key3": "2ZArQVVLgvn26p18BfBiTbH7d9QfCmDKyUPSyqfjXbUt3kjtMWChH5LCSWNDJB3n5yA9495WwkqfSdMEEZ9TZ7ih",
  "key4": "5w4SxkAxYKKep9qyrntuADprcq113NPMZP6XrmYDM1aQLL7UkgNGVjhNYRoKkTmTtY8oPAH6ZDUWjbUJ6RPqmzMR",
  "key5": "2Qub75wL5jocrdg4WPbyRf3btmoAMhcF6RmHFnmMvBsghyYLiVL4QGpg8qM6R2dXZtS7KZFvgfXLh8bgEK84hQCm",
  "key6": "2fJsyYkcVvYzDUfP8RQjEBYZUTjv84DzGGDjDVNnzhDxJTa2jNp3JcVypJnHCFZXTFR1wKf4Zwv5DRZMazFYoUSe",
  "key7": "4jnPCPngRyZfj7Z3LthyRoKY2Yh4UAyM7ioqh8RpE2KHhjMWgdL528ZkWxatRKZi7K5gLnRpsxoLEWyBP3MQvH6t",
  "key8": "mUhqhyHHDfq5M1Xw9dDpMQJxbv76bnHepsE4Jj1CobVK1cNKdgnxmgBjsB23GHrSztiyQkLA9WUdW2WJeo13oY6",
  "key9": "Q7ftCXt5bKg4u9Z26nnULECnYQm9iFkyhtDKWMjcfW24kmBivpcE5PgfdRsJohKiaBQMatfbaJSqCvsAEAyxZYC",
  "key10": "2aMaFREgJKx9FmeEifynR3kxsevcMaBnYKiFaby8mhgZCZXP3EvwUqbk2YNKfS5fGFEiVCvJAKYTbzJhCGj35WXv",
  "key11": "346DUrwfb34p9at8y3P5Hk1nF5NwZxTfbRbNSqU3RYAMrJWozokhMVs9ZeHPvf9KBy41HtvqsKhJdTtRxnwf4tB1",
  "key12": "2epdKBvLjZaGid6aSgPT3zS7X13kUsMJ8PbcQxWzKtGBLuH7b3pmX3Yi97TGgbddaLUHoxBTRbHTp2iCq4QwUDQ3",
  "key13": "3KpyZ1Lu71Mt11UwHcxgir56q2kTxx81hBr7Vz2fVx4eJZ3DAqLx8hPUmeKbHKh4FDQvGe57nfUTCzpnnHGhZERh",
  "key14": "C9kweLvGZVD817FJW8uhE2vevGL715JgP3G1VTc4oH6ZmUdS2awewD7wdaYkWhC1fAQ5V4uidjX539GMh5NYFPw",
  "key15": "43oyjQ3Jx2zPiYrGycdivvEw9XoNYgBJNQq83ALP4tUZXF5HY5Fz6xjbF1zLgmNrguoVuk9m5rNnEeVC7NDovNJZ",
  "key16": "JGV9qVB8p7aMY8QKnF9vmXatLttFFepfVXb3qpHsZTewNR6bNfnKjM9iG9mNijqRxm9mLTwdWYgnQqUzs9nsyR8",
  "key17": "2PhdhdyYHmPCDUWBDzZrRkgqckgek1yGxwthfGdpsb97D6FR5Pkxa8JeLpVvsevvR1NQmzjPhuBebWW5FAqjQuBF",
  "key18": "28pMomLjR62K9EHfWbD1h65o85QdYERtt9tTJhewd8nEthZw2Yugki95zEXYwPQt7DdgDMrs9yFgeK4i5z4Po2Lc",
  "key19": "3vz1kWjnoqArY11bjQeSgCJvaDSCrNHErx96t2SjphNXq1WsaDjjYi1RYQxBxhTZjk96Zcjw6oXPfBvhWNZTBVo",
  "key20": "9KP5tmPNd7u7FPD8UYdVKWmbWp92cANgLVJM2ewSxH2ob79PGDSyYCohkVgoE5sMf9JumNH78JVkLfCvDYBzA6X",
  "key21": "25B5vec6XvZTbrPuCUPLuYvUG2w8gyT47wTEMWhoThqahHio2AAKPLqcSPuKbLtkKxcdeyzGCCQfePwfvVXZrTE7",
  "key22": "4yYKsaC1FWZnTE3skxBdaopDomQomWZq1utduQFWbUVmi2Vf9pTFAUnwKUUD9pxk7A96ejqvUXUiwmynY4LKiWyM",
  "key23": "2NMW4NdPVq4Ptj4R5GqdQDWVaqwgQrPj89AQeZ6RMguiVFdC4GUZV55dtLgxfiKETEh8ySkL4pbhDWpAwLUJSMJp",
  "key24": "3stXLoNUxdxSZcGSzBU6Se4r3RosieZXrn6hiKsajW29fpM8ZpqqgD7ZYeRazarzFwYchvBWuCMe3opsSQvnQdzV",
  "key25": "wGS5QH8eoDQ4aKxX24pLpyL55F9hUNJfWX1XiT44utsZJe8Pyvcf3FEy91qW2kqR6bK4xb4H8uDpyBJYRNqwwMV",
  "key26": "31k95PVg3BdyUGAafyU5iAKBxkir2RU6WxLveBUFHAJ4UVvmb2vrBUrkNmy75rTZDSmMhRFcEbgckanigZDvcqpV",
  "key27": "4NYsYDuMKWxJ9vbBzsEHRBRuNBq8A4HSh56oirQ4g6Lc2e2FkMvQGAMVGidyeBqbViAHEMyAmHfA5Sd7x6EB8PYe",
  "key28": "4Ho6hV9fvCfM9KbwoheMB9588JXF3RTo1ux974m4aPPy3HPpEgn3uYCYLqubiBaT3TFwqBtevygGBEeRxeopmiWT",
  "key29": "2ywk3MdsYHYHJHHDtyN9X6swwjAQ2FYaojq4WFBR2YuBHnU9CWcnevBbz4wHuWaHNLcbCr6nYTQnGThsTd5pH9Yw",
  "key30": "4ZMfaNEGxd3FUyKVzM8fhF3VrCWhH8fb6AZuJTLW7xeBy9X5HLTe242XWms4rMUbNQy2mNCFYrAZHgnNha98r68j"
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
