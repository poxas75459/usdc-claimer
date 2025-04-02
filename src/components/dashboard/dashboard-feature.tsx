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
    "3UQxDpiFXmgrLfLacDeJS74NxkhvdCJnSspJED7xXkmafXMJRhEoYNJ2ueTg9WsSWWyN8BQnbugzMj9fFLbjXtsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "396vLLPQggsaW8RrF9TYbmr3zL2mrY6KyaW4UpEdBqJYqmxsxmqXb1Wq5kpJf3eod3gSTeyWsoFZeMmkYei9MBQa",
  "key1": "3nfoJaGn2MgbLgqRodXEF63WkyrMMscwQFTqY4HYMGWYBxkpJ9XP4hZSrbck1SbMzADPqBV3a8nhny3voZRsFTNg",
  "key2": "25kAt9atp33u45ABvtP8t78pBsgVJ1eqGCTDeb7zEL68AN3xi64J8hacHpnhFHevQ8pwUggY8YxnLCwFhsGtpEYT",
  "key3": "4m1eUFTLremZtCw2aV7QV4Gh7dyFfjTEwwaxnypLquKms47qEqmKaRGAgB2X1dmFG5keTsgVinQdR6G9QKQKMYf1",
  "key4": "4AfQZJKRxfEm11JEz9v7Z7bAgCkiA8wb8K7o4Q9vsXmW6FBXBwSXFwN5wSShgd8zFF9xMBP4GLguJkeZ4sxdcEkJ",
  "key5": "46K3MJxVeZSX6vUzfr48y83sgsDSCUKn7Y7Kbn8i1G7nmJPEkfFjvMXFoLcF9fA1UTqgfwnTXmP9FJogiv4bnR2",
  "key6": "5MqvsDmWmtx2zv5WuL1o926woEb27vW739tJxGwmEiFoHrn8Yeb7XUmprBaeEFbj5iNg7EUyDkyfAUwjZe1SpFsN",
  "key7": "GjEXxvLJEoAoTRxbCbeNhvvEF772vVYWUTq3ZJfKSuFgoEtSS1DmvuLBuL5CnHB4PiFnhc1ms3GHvSFEijNJmn9",
  "key8": "3KPjAQXMkTKiPokch7VfPX6CbkQvstRho9gYF5BSTtS8z3DHRce1HXKg7mKJkPuAbQ567bpWCtPgVNzhoSrGHs1Q",
  "key9": "SpLJUxKVfg8nahAksAc2BrXnpduAVRLNd4vAstMNvG9eBEPHeaPebtBCGFP3diDRSxVXavdCi9VP4rAq3gZkmha",
  "key10": "Y2jgNAg4pPc5HxboD2SsRPzy5N7ZN5Yx5ZT4brrwUq32v2KRv7X9nwTisEqWp5qPi4MLGiQw4FGpMm9ejcgjVYD",
  "key11": "2EbxsW9CHUdSF7p9vcyEsgJJGWxiUwoAHhQrELsQerM7J37qUCJoLFLJiAye9cf5xDVHVEoLS7SyeR4YJBqACeP8",
  "key12": "2TXWBpSeJmoX5gjk2BcUtLVMDenCGyZv5KgDyPviDvxV1Da3NXXk9Lz98VhCW9ebPw13j2H8Rgcn2Fc62d4sePUn",
  "key13": "vUY1hmzdzpyycS7c1exgFrH3PAmt6y3yF5Yg9bbGNzySZZayqxhwbtHd9HdsVHBbzJN4m3xDisPb6tSUWXDu6sr",
  "key14": "3zHce3xKsMaPxP9S55QjJUfcwXrA1DfLbeRGMAcPaXSUgSw2fW6AxoWraWaRB1d91ZGkvaKfY93DPTe4qBcdtdwk",
  "key15": "42jxLpmBesH3mo49atATQBgpFz6hMBUQ6FL6Nvt5xvvGNqRwhuF33bvfSYQSzBoKiSAJ3nWPHrpVZ5y1Pi7rc51b",
  "key16": "63BSoBfLJaDkyesyyVXyhtSZF2k7QSXdeT6MqnLnckjhu9NQLMgPuXmiTMwormvUruCMRanERqvARCxNLBS9Rhz9",
  "key17": "No6mrKTPD4j87KeHP1UJMrUeWvVuCMDn4hemhV374ZN5mfSJrt2rSifZV4k38zewFW3SGKqbGavgQFww454LCni",
  "key18": "4udMEk9LJXzES8d3pip9wqnfA7W95cEWy3CX17mERKiCB3txXhyKyeW94ACXUMpmuoVBohd12UVfycaNCoAvUJvL",
  "key19": "5yPG9KeVuEdo3vGFCUTtB8Y34F6ZM613nnK7N6z3wYQagKU7uFAoHWpXEjh3ZiCLcdZfD45mc8Zi5TkPXe8yN7xz",
  "key20": "3tLci5LZQzSB5hfQM8v6zcdgAHTAoQqjKMSqLMwK8CuYdAZzvvtiQDfswC9G5deJJhpxdcR2a9tzLsVvuxscDNhX",
  "key21": "36iEGqFHACWdbRUYzcSuv6RUaPKrHuy98DtJnzth7FGYZ5sYspyks9oS2XrzkhrGNjsp6A4ufTdLr3421mpjJ1Zu",
  "key22": "5j4BtpaSmJif6b4kjzbntjRLrWyvUYu3eFR3vSTo5hkx3EbAhmUY1QtTYd6Z36B52zWYPd9aMRyL96ce5RdreSb5",
  "key23": "31RBMBz3B8uwofLVjzSKift3W5fUzQDB1rsmnH4KhehQrRnRagMKA6JvuFmj52z9d96DhKm6Tb15hSCEGxiXChd",
  "key24": "5HG3XQ5ke1nbW2fcCqnnw6bPcPFdbwa5BwnoxfGegpyabrzno4KXikY63GzNPi3A9Zobb71Mbj73txx4c6WtEagu",
  "key25": "2rBKjyo1NKJ9tFXu7nQPVEpUXhoqTBVk2GjNKCfpdcV9vJXqqHFAXVBUSzMppqXGxaytM6e1Wm3QSQdG17SnobtB",
  "key26": "3RA9sZ4LdASju31r3yXja69qMQiRawQgU9UFgPvPLwib3Z5zixHUZ6iKZfvHUNDsTR7m8ndetvKLEgjJVZCFN69s",
  "key27": "3RD84zDqdxEC2ZGWTVXZezpQ1GpDChruScVrAWRUvDPvTfgHKiJBMcYeqGjqM4kzKhD6LCbmhKc9Sd9RaPqi43XB",
  "key28": "3joDcmqbfhX7BUBELLDGrMMdAwjGqCQXDFUYCMnVKXEgbAyAA9U5wE74LgPR9GVVUthMeMKPTk2FYxVTKTXh2sqv",
  "key29": "4biW5Tgw2WbUridNMiYZmfcQsKZDZstWKv51kNqh2w53gyaMZuGvkH6aWsBsZGP6vjdvLJ3gsTs2eBWpcqKstG9R",
  "key30": "1i4uuhFKBmJ4Bnm5x9NxC6N67YrCH1e8BZjdJXfrpKdLx3LimdrhswaAwFr8LzeRVNjxLdgwJc7HC8h1jNJkkPy",
  "key31": "24t4XpRUtw9bJm1VwGe1UAiYWjfrHTG4Eaju5gQpmb5zywKFeJKRb8nGDC25boQJR2NG68AkhayxJ54yce6kLxpA",
  "key32": "2m4F9JxKuKmo3xAYDVN3T5uXJEMCZWTF5jUANuisxfCmuQzgT6id6k7Xk7eztcfseqjZEdQy8jd2HKutezcnmLrc",
  "key33": "617QeuwGw8zFDfZi73D7vu1SUENvQ6NVHRRYwyNuk23byRdoc82A9W32Wi8pYqkc3ssTDkqkA5E4sxNvK7YnsNSJ",
  "key34": "fXQKuRtCVZwu7ta53TgbUktyTcdsg1UqL3Z5FLknZ46PGYYbfDjCns9WvsQZYCfSgRv1zv4Mwdujj3vs6EFmtkS",
  "key35": "roV2o78rvdUMb9cRgXvy978kt5wTZxhi3bo9yt6yTmRC9gYzM2qFbgWDVdW9Mt68kxKtXGjoBAA5opLe1pDiUTm",
  "key36": "5Jhm4M81fNwBW7enz8GZC1GSvja8BLhPhXVCfFBxLPwytbf9P6DrL89h2XTiaUaseKK2E5YoYhy6mRkb7jhyWcAg",
  "key37": "pYAc4MhQHUdQHsy2E17Mkwob6gRjGyhWXcc52itGQct9axuy4BNnaTqZtCCrATkFH5GMk6Wozz7DNXogQVLPeGo",
  "key38": "oMGCVkJJ9Pncd7riAodapWVP7hu2vDFM44EBjb9v7KnDJyaChxXhZ6PoScdEYeWcEkwvaNzveR9GScEELCMX2Nx",
  "key39": "2dHHu8YwFawWmbUKyuVYSMqTEGoT6QWGLNWGEuzvSsXtsiD5kM24FW7kEtdxEuY1mWmkyCTY6j7KqrUD5FQoQsqg",
  "key40": "3nvo3HNTn1jr6iLkxrQRhc7xvKNhu9vwGYgdV7DXoqFfUFz2LsC88VuycXn2XDgoFcWkZcR8Gz2mNvuWtCorT1QT"
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
