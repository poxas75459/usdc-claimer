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
    "2vT2JQpQgTsxcDv1QjE28GQFVZWwABEu9ep5fyci2K3wUH1a5mAJT78R2i4V9tQ8oPxsBKBxTevDQRTaMVDvoQEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uXD7ttHMSQvdGBJpgUDnznCHmusq3taEb5RuWyBaDX3FQtkDH5dJ2UEpiHAMN5J5MZFBipfsXTCTssJgqbkEsuN",
  "key1": "62sBiffKMusy8W9aLqMtkuZpi7NnTczXxaqRV4MR6DK9DQoYNxscAAyAjzgbDg677VNdm1UD3etWTYBtifvmnVha",
  "key2": "LVjZRoHhUPZg4jWthPJ7zXCXkoJXkq8kvipV3p6xykBsUNkWUUCdWhBF4TgBLMqsYQC3mfgFb2LfeXAPp3bw3nK",
  "key3": "2aXHXQtmvUnXUJyF1ij76P6Dey6LYyX4hVFDFirNMBy4HtYfnwZMna36s4UxEryhz2QxQ4qrkzQws5wHarvjpQgp",
  "key4": "58eB8yRRQc8ZaC2cDPn3Lh7g2zpG37gwJvc3TzDutCHs5BL7rLuGN6oX3CrEksvbnaqnoQcv6vP8GQdGKRVMNMAL",
  "key5": "53HoiBcPMwEeTaECgPWThPNKgtgdJx4ew51ieNWG23psYS6z6Hwsjm1mytmEKBwqAGme45NzN69br9VYKpfNuzwP",
  "key6": "4mqPfz5DsSbu1817bMF59BDUoLPmHszfeqJfAoraK7T6PZf3nxxXqx2SEC2bp9KkLXL1aPQCAU9Qqo9TSzZh4gPc",
  "key7": "5zokYmmM6cdkoGzVX98PTLjSAA2PCHvP8qe4bZBYnMVFJxhorkHCtamab7Dqny7TwvZFmg7B574Dd66FJAUWnxqC",
  "key8": "5iva8R1ZVepoWfQgXj7vQJudJsJYtCUDbbPBraUqfXkCanfzwQx4rYi78kYUfnNdmiJM1Kujbp4cGeWPsaNK3KsD",
  "key9": "q9284HaK1xDrFkCHV8eroLo7fBEUosiajHhnAnemUa7352G5znyi2tGuhPXZzVmWZ7yrF1dHfRkRKTYdfJvmr1z",
  "key10": "5HPdkz2SABmTcQp2D9ieFVfoi5yw6MkpiQk9dfzxvNDd1rd855FHLHFMWYJx864qiuGMDeXPjSVpF42wm8SDtUZo",
  "key11": "2nYQGL9V894rttoBRidGLB2PLwgCcBKgpeAa4mVpgJozFLGXxAnqTtyaYXkohvoUeEHCnduUyJJ3YDSbkh9i4d5e",
  "key12": "sSpYotk7ujuUmA48JV9s2jRRU2n6p38VKZfbRB54EvdtUD77hZv2smaFJCcXnA2MWCvHNwvYqpcDgqye12CfaWn",
  "key13": "26wAixV8EfKcwxZpJSNmYJ4TugwVKEeFSpdvuJh2GeRSnKomrwRHD3r5RFucSx54UVFXAiRV3D6r8aqyhu6je6CN",
  "key14": "3xi46k2ACL5DxkStrL8ZhgXwwmiPxu9ByXpRvjfMeKsJAj9RduZyrVA2Z7hpUofA5xRjkaDEscp7HwT4zaLCNg5H",
  "key15": "4A8sCfSBLeq8QVy32RzUkgMXTCu3aLFcFYZWYve2or58kEMRKfVEZAnhTXUvVK5guT3sevBnPXpEGgFWrLfsFFK3",
  "key16": "kRjHUYyRUXYmgKyNZBTKr4kmNbWTkS7CSq89eWh84C7mzhEANouoqsstab9E8HNmzz7NutkNNUWtqNBYzdAdsQg",
  "key17": "2sXSFogtzyvQV9q75Wp9u4Rmwd74KpYpae4XaP7NYfv1D3tws6dGgb5i2WyxE422Yz5xfGNo2nzm9pLqfzyt3tqD",
  "key18": "5PmeBowZ3YKnLP4TgCQXGLMKWeURbP6pmhrgiTRFZWG5vK2g7RvMSmn93rcoc3SxkrBLvZpmFRi3jn6UZvvL4JtP",
  "key19": "QgdoLzS1ST9oQ9zKH2MU7Kd1FRzNwApXvhtwj9eECgJQZFTAJF3HmSdAr2MsSzQHhP9X88uXBeDabQkqkkERreX",
  "key20": "4eMZrVtnyFH3tfeYVLUMJnPSbFrVe9rLiK4THQBkPRAAd58WRse1Wg1p4G5paWqnsC6ZygzuVr5P3RGRJxcGDq7V",
  "key21": "MrA6AADVZxz63LZvJTMQbwDMuVNwKMuwhZ13wZ2wpLCAAujehP1RXVARfp9vbNmNawB8wcHMTKCwxxQJRyYsA1A",
  "key22": "4MEBCp1Q7BJDTXbck5kPUpNw1MRyw1X8v6C86PMa4Dr7XSbW5kgY3wGHSo4QSbMLG6FaQAzBT8wFr1J3jpicG8bU",
  "key23": "25EYkWhXejH6J1pxCP2CxzRKPT3LY6ZQeqs6FvmgMAgjgSCADpZbLVMEbQT8UuwDNvNYy2AWhNQiEA9LdG2c5xBW",
  "key24": "3H1n8QpNNiWK1W9FuUwutmxbmgbEgq4CtcgyUvcoEt71VCA1Lk2xCoeGjsLbWchL4XirYm3R36FAh5AKuXkzxyYi",
  "key25": "4dMxC2Xkgo5GDKcnyRHL1Pjh3bFCy8wQL6hA5pa1UmAgLonqnKZJ61RUSNmh2hUGBhQdqAQCzSCjNeYptqG9B6nm",
  "key26": "4bbUyBdSZmdQF2k2j6WkwMMnUhKXarR5PEv78KiQuLAzCYyr8kLokqQdA76d1xbpZb85z1doE9t6yaZuG76UrThY",
  "key27": "3th7DUxHfKuM1nxNN5PVbpHT2zRfJWZxE5s5VWyKwpKvNPrvSzzXzR9ngNJs6PxPEnTzMWcBxmTzoJ7AZ6AxCmhX",
  "key28": "61x5cE58a3zh6hBxqWWQL1Hqb3K6aw8PFDhU555GRvVuZCRonRVzSi87xBh9we6B2qzk5GZRkbW2bnS1yJUKYCNx",
  "key29": "4jRPR9PaJZMypaoSkugzkV8txu7NmGBNCDzQzxjRdNZWW7to4cKaUydmqzDjNPwpMDCEhvhYzXPMV3RoDwzKERZQ",
  "key30": "4yMJNgUz54F6JKjvTGQReFWpW5MEshp8GBdXn9YyBz4A4rcDKHKELY2YKEAhDGh8CnFpf5qdBSWWt5Tqv1xGaqLW",
  "key31": "4JNdAAiHmABQJKgdWhtVt87sRTZV9LzYutmKdDZRiavwn2Q1tqJWyDihtmLnRwsCVmz3tR9QQ2CjYWKF8H1MGH9U",
  "key32": "2sJWM4WzM7Jw1UQQFaH91Rz2unWmdtuRqXzXfwnw56usYZvxGRCA3KaN4o2heNCEn7N18f4rE2xqfeciFQAFGUkL",
  "key33": "2NmzzYcYUqLAbAdpR4D1a3qVSpgjp15m8asGXvDZ5A9piYYDjvPxpqkKbcWkZ8nvzemYrVC4apjHEMgUvhT2WkBC",
  "key34": "2tEsBP57tzDYUCQn1pHir4xwuDBTBCjs4sVWtiZJ4in5UcVvJobAeWhSSDBJ2Q9QrMsqKxEqJgJ1tZ4CHNMdDT3W",
  "key35": "5kSXxoYxnWc2TkgCKhJXvDo1GZzP7emSDffgsiNfHUXtNpcrjfhs7LdGsJMsXCpY344kvRxscJzXJxpCfwogVCWd",
  "key36": "63CdPtU8b7fXpaBygvn8rdvyGPgjkizPkLB6SUSiyccduSYjjcH8JK1yLYVvBQgcJi4wNkF12f5PaSiQbsvXSme5",
  "key37": "2DAruR7v6TGr6ZmR24KVr2iHNCY7qTzKQBwV47q3kKX43HLyRuyKFhH2j852Wem8ENkNvTucftbagmy1pqnaoWAH",
  "key38": "538rH9FvV8GpciiPy8cSaaQL7or5S7DeHoMkL4u7YDxePaVbY1QqKtzmLB1ek2Yp55b8P24wYmDfjECZc6QptFuY",
  "key39": "2o9o2GKL5H42sXsAW6sDUcXTbJ2ZRch4arw7u4iDMm7ZCbyEn9tYhyB62V8KapLaevTNFDaqq6gyvjX5e6SMRNZE",
  "key40": "63xhaozhf6zHrTJCTjR31R2EkVxxipTAAyrh2xNeue6U8cRDu2visUCvvN759Qzpq5WXmSd11oYa9CWGNAm4NWNe"
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
