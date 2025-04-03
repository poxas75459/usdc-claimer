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
    "2KrVAF2gCory6BC2hnVD87UqhWdrB8PFjifJ94R2XrGhy71m9FDcTHUbMvDtxvWGHstVejWey83ZPL2e3Bx18nN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9jBstxz74YUtwD9o6YnfQnGds7r5EuF2waTE6M6KuN9JPjW6UwcsMkGbLKpG4F2msTmYW2Ucb7a988tD7CFBc1",
  "key1": "4NturJSycw92fryox9hiEwiR8Gr39jXE6noDoiH9fWJ7KM4ozv7JfAm8XxLdrvWPp2qrfAPLQ6zoVdwSNi9DNztz",
  "key2": "5cDwf3hQxKmPEnfvttx6ZLbrqnVHEF5eJHELAdK4Embu6m8nQLjQagKMXVb3G4ndReh62J7ejgbk6iUj9NEhoLH8",
  "key3": "xFFAzg241SVP4kqRYutrSjYppB9THqpRtsaKvZRa9vJRpdJbwqcz5wqHQhY2KQGo9pG5Zmy2oB8UXk7dzHc52GF",
  "key4": "2nKjHRHhdM9ZNMU2nbv4q8MQ4C74qbkz9HB8CRwjrWWQHT9Dvem8esCq2TU171vUeqCa1FLX8WhmwgmHCRXSihbT",
  "key5": "3cPvQwxUjMLobfgpKHPPC9bVhZRtLV6Zj6KjRTnm8RZXL9Tx33EyZdi5WWYMDNAEgmc6Cy5jthawmNiV9ZmKD146",
  "key6": "FLsYZNRoGFvusWnxbaHLWWhoWBcXhwJxSEf1HGDzJyjiMxPqSMBV29nXMqJw7pxAXsDv6MrdsRaCtBj9fPJLHd9",
  "key7": "3RDvqDFmsqW9QTmEjz7vJdcn4piVtMdVcLM5AfuDjpcvZpLHV5cT9tFuejY7CV6WtRrrmQNYJs9xjB2coZzZS6Qj",
  "key8": "5DiqBf8eopfxe278ZKSj2yapHSkgiL7dKKL4xu56Z55JfYscGEaAH5NV93eEEbZq4P3RC2bd6yG8rufcCqXrhjTw",
  "key9": "mdKtA3zdCDP1URTNnFtU1gSjwWvyxvapDZzs6sAi6sJLZ1NfdCgeVnVEqzKHGfXyczTcgWtBYUMJmHWKvSyXCkm",
  "key10": "51YsAeztiGKjnUh9UfJEdpiAaA5cE1JmSm7nTf5tz38wScnhT7gE3Vi6fPDv6Vd8PEY8oSnuHGjmQTPyghXfSJD4",
  "key11": "3SRTdbgwQAT572yEXUpF2kd3Xhy3gygvN6ZCQ4e7tjdBvZwuwj3G1w6drmA3hm2Kmocsz9Gyvpu1nwaGEFLseS2T",
  "key12": "5GCmFTLjreAa8SDV2Mxdew3zAvvH4ayeSnZc7wJ8FakPyN9pQEtVrv4eN67NHbYM1yitWmFnxFY8EUYNdRFjJtkk",
  "key13": "5UHAiqaWf8BoVJnbw62rMWreEr2XEvLLv59buPMs2hbhovzBFB2g2727xBxeRq3v5RYYBoq66wu6rx1kBEdAJ1oQ",
  "key14": "63RnCyLkFbwNmtL8mPLDbWGJfBRpXGcuazdnnYoTXALSV1gNK918WPDwTe3c6KyQf8uEiW6bS3hYFmboRsK1sYic",
  "key15": "4z9jB4DUoAqGYmSUW2ojrVchBZqTBmPMkCr89KMrQKdBVXvuK4QZy1S6ffNoq7mGgo7oZ6THmeXrnBU2Cmoiw2d4",
  "key16": "5vFTknZLsQo1iMHNv1LoTUvQgappsgMs2J2PgdqjHt5BehxzGZYR1wUYXetTrEx49KALAt58mCfZW3xYMq6KFixq",
  "key17": "21FeNfpgZ53irb91jyePKrwCdL2i8gXpZK4Y7XasqyuPGmZ9yuX8ZWwNCCjxdSndxYdYJmDY9UX7vdjHYtURYbcx",
  "key18": "ztkdKZtc4auSgHXVb3UnVuRy33twfhHTBUH8A4ADc6h3adxJm6MZx26zCipnmQPHMcHFy4ryWppSjpneaBy3Ueu",
  "key19": "4ssG2ZHNhN7toQCGvuTCdoTB9WHcUpNx87tZ7pBQCDoH2xsrAvDZTroHokrjrVNGDcZ3ZTh6omodgKdS7ywoFLaH",
  "key20": "8ZvfmvSzGriaTRkDFwwYRQUGm76RmAcrwfcwrKaKaCu6rmpejzSg3jUZFKcAvkz3ZNxFaC326gSK5L1krAg6oqt",
  "key21": "BFByAqxNBd1SUUFzWeH1adyZi5F9UAoZFReQwn12BrgRLh6QgQ6JCT3h2i4JCGyVCTJv4mdchPQmtvvpQfDrAQK",
  "key22": "1TEDKnVp2ZvbFwo4YAYigq8sncNCo9HFXuFwje7L777MXdZrPUqvstD4kf9ZLBL64SrNXarSbHGXMfVGLZbaksh",
  "key23": "4nEJxGUpYz8DTppnqGX2hGQQZdqGKiBsM7t7aZjrHgq3jMNVkRqtcQF4N74wDeyHqm8gbzsYBrFAc1EWH4kDchz9",
  "key24": "3ELp2TQirRgSdm4UWko9A8iHbt7e8Zq3d131vmxtnht6cWKVYbxgTpSEH2aTpJAAr8YDan73D6VmuTRzay8GohEi",
  "key25": "42TTMHikh4DbKYBPFeNgYFipB4ESTmTTDa7UBtzFC2ZpJtx7KeQ3NXTetBxnCPGubeTaqhfpRm12weUWcvk1DDni",
  "key26": "4amvnBsNBFi2LBV2mwG4kY2QxpsiiNR3QSvLtMa57c67ZQs8BpNQyPmzXYHeFtAUu9qr7nenzGu5RkAXKkzyypLr",
  "key27": "4DVsxVktsEKeSXF81ZR2VH2QZtBxDQ2u3Krh1x7CDgFo1FFtmAZhGLZGjKYBUiTBkNuB78s1NBFTbuhw3LQPRqyt",
  "key28": "36uFvRNweSbxNU98tCJ77fu4FrN6TPJ2hsyDJ6f3n8gQRZDy2dWYvSfpYpd91DwVVmd6xvpDQwvadHNqipf65Tt6",
  "key29": "2YD7R1rEniqkkqjq98GN85TPAMmWD7kk3NuqzfZSov5yFsPMtFiNHzE9uFdm3CxU9B9firNSwNwy2mmNmvqSkmsB",
  "key30": "3nQ7kLmX4xQERjN9iDmG4sRzaQJDUt3pnpZDrPNZZagpiToHwD5Y8RjKnsjTbH8AaPXRRtJGHzc4Y8VwZRuGafUV"
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
