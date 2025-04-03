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
    "2d9PSx3wEU7xQRpv1wxxTUavSfLNHvJDcLt2vd1qGD96cxkhuY4XavkxeHULV5gYwGEFmC1XnjzK68YSyeh8vEBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y6mPGgi21H1kSeUP2TqDaQm8qt7wsLUGhonHG9TMwXmUxKrJ3QZwkATA5NdMdWWzb33RUdfay2yFrvG7sa7Ebon",
  "key1": "3oTWYuX7nJ5BeB6w37TfZ4CQx1D6fiaXQB6kpAo7cMUrvoaKdiNTVsca6isdwgidDWTRPeYpCqmmJSSQDtM8MrFf",
  "key2": "3vhxMWP5Mqkha79AiJWD5bQVmLoqjisx353EFo5sjk7H28JdjtcHboEB8rdGNns43e97wMPzRyqGnivmJjJLCzUW",
  "key3": "2QKwfnjY3SvGDDEALNNqXtaspm3teHGYGTjZyJBmuxHPyHf9X2h21Bys1JEYkcCv5pdKm2usUyvetcNVeERx8V2V",
  "key4": "nVbhHaQLdJmbdZLBVAHDLt8BBUTg1ebJVAWsogWLyeKYobDXJtLzX5sgmqPBT7e7keSmg7MdVmdCGNkcnUBJ1MA",
  "key5": "4FtnEW16F4gfm6Cj9RkVaHsg6RcfMspmHw8ZomZBLw9WZtZtrwg62xDFLFSsoHPQXrTGa7aeyWeRS2abKNBTS7jZ",
  "key6": "4gEyKv94jBt58dfAXJDCMjY6m8jtBzmofTQKbBsYtpVvrRkpJ9GMuC745V79dc1e1DjVNYHmq6sxQVDgDGPBY6Q9",
  "key7": "32chEet6XR4bfjkZkifAM61thaEde4W1m7jc5awSyQTGFMrBrpuQajBLmjzPHrJzjFRdKAfUDKdeBTCgcg7X519S",
  "key8": "3GN9g33sxsHbLjuiYdGxCEmvpWbS3UtRKSptQzspAGwR6v1PTSnfqipZjmChfDzrsuUUNrofkC88Dzpj9HQYzhsc",
  "key9": "XjeRgxcAfod2eNL5jV1miG2cQg75FGtH3EVJwzTCcjw312wsVhWznDfdqeAoDhdcyztatyvPmmUGmXbYQ2x1Qn4",
  "key10": "3n4g5JWjbmHGGRkDoZLBGRtUkfPumXaXUxoMBNLTppgQ9pZVb3BtxJHt22XMFufbAupyfoi9GtiUaBHizbQWhogV",
  "key11": "FDsQHuLLZGdodszkUBzPaKzLU3FBwhSTTUvhaE3gtBGCY9uTfHk49MqHzuk8rM7sPMmEV2CjAE2BJdhmmhau2ZX",
  "key12": "57jZWGnqNicuxQTanKRnMXYB7UBdt6qbrNCZ2ccmR74HduYBiALrJqfdponpQiMzrNa27S3KhjvK4dXzLapPYHW5",
  "key13": "BgQfHVYMff1CtEDHaY5rxge2aDiLqi2aQru9cqXyxPaWmyngncY6j3gM21CZXy5C23QirS2dZwBeh7onjd1hATr",
  "key14": "2AKa5JmmAjfg75vRXiQeXTa336HEUk8jExchtx5vsP44CYYTYrAV6WUt56t6TnJDNCdGpDV78Q3CcR381dMYGikV",
  "key15": "5JqgX76P4WR66jjt6Jqin6NfjEEgq1czEootjaxKRJPRxaNSMArA1rNYQqUMXsLmsNe8YDvkY2b5CKNPUymdw14J",
  "key16": "217knePyo6Q6dK8Q2uhmUsCdLSahw8JBjuHft8xMLVRZAyD2f1EbJCEZ4RmMdTfh5m6jWiSaiQ8nBQgirbqgkVj3",
  "key17": "3HV6MbBP4jiubxDCHWnD1BtqRjREWVQSPKYfLps8fuY6JYXKYX6iFg79xNWvvUvRmw9NuJWvckUXat7V91kAEmcy",
  "key18": "5TTo2pwG4pK4soh9HCjCPGB6oqk55d8ZuBLFqxiAdSdBxJeUo9mkrMoEMncNAM9VjCoe8ZXWKEqtY4QxHniKNng",
  "key19": "4mYAkcS3HgcvfHJuJZ6YqxYaz9eWogqdN4NXmutMa79q6pVH9FuVs51ru7GdqXwqWGSE16be22qT4FcmYUgcMQWu",
  "key20": "5GiKLpQw9jkTuHXFp6gmV9tbzf2JJKNgjg3FaT4ALrWFxYMAY7vQJcG6dmcN2oo7paucL75gwLSZAsCm7H1xpxDC",
  "key21": "35w7PivLFnJrHAWEm8Yb3cqfAgie1UxbthuEwHbKr4UsJvmHbJ3wZ2ug9zgucLXKMb9zmpf9h27LrjUVWubC1gNr",
  "key22": "kRKSpVNbYfHpSzPPVdYJ5hQ1tMahCAxU8VzF8ZkEXwe9wWWecGD9p3EhL1US3Xj7St1b6mvV9Lxix2QfYYrEwDk",
  "key23": "5HypQaWa5NwLrgoCMtsvsCKwzHq4YNjkSWhYwFuBNxiAGMtWyRxbSfzWvXFsGPBb8ud67aC3nNjsPjrpBXyhZ7zx",
  "key24": "4V6eAUi9jkPvee2zo5M8UEkcAKC4RTQWHTL5NLtWzSMpiBJhktjLF1dXY2VUh1yGH9YSYMGzseqJUW2QMYGGVXrT",
  "key25": "dAknNLKXHrK6Zkk9uZCv2NsEAMxpXCsW5BFJqvmbzU5GGu2UDaBV8pKMsVJ8BtekHKHVnCEj1jx7xNhTZX5XoFg",
  "key26": "3y9akWCHyLSGVxENEshGhVrZDb1WduiMyecsVAy9vzzEH8pyjoyhSxPaf4jmi5XBNUpxzkBRe4P3HGjzmCefs32K",
  "key27": "5nR2TP4mtsoioWdo9i2rpiDNxmuD8qtBTd4XDPMEtov1TBGufAXLg2FTptcSX1BwAenRc2BC9EsqEQYNRgvHF8P7",
  "key28": "7ikrba4m146mA2Z3fyUUNGHn36bMrxA1gWUNW89k9mpTovf7MtJAkxvBPeGsU1mHSm8dg4P2Uz2YR6fxPGzmQVk",
  "key29": "5Ztp4fkubnHHF5ssxw8tfk2rD8GVXKofJrETtRK32vFeRbKZnUSRCEExcuxQBUssxGf4FwHihm1VxL92aZvWCLEW",
  "key30": "4wUFDgyxKJndczh1ysH74aASowmkD2hbWqpH91M51FUGG5uWmVkYj4vGLw4CU7BJTU4H97dkaytcJhwSwnLSRofD"
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
