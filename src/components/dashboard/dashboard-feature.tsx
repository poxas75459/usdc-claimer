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
    "28wkhdJzU2kVfJSjFZ6HSAFu1E8kjGmiZPxaCPinf57U7fPkbqsYuQXRRWDUJndP2c4qaPwDxqf67DnnzovmuYc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KfWx9CGtnwECBUtQtxnewhzw8YCHLFw97WhCZww8Kcvvkb2yWy9tQRKyv753x3v6UyRPdmQHBgTh9HWYqwnbvNW",
  "key1": "5Tj6KwU3pajDBBYgw2qa95t6F8jbAUWp2YekRBfjHjndr4EaUxZWemdtLvPmpTSLjn5reVpPFKbBx7XEJUcuUWTq",
  "key2": "5dEbKBTzKbrxASqG6cvtNP1Lg3gPxr9w6YEJGCm1JCSiwcj562vB5Mh4djBdwPC2BafdUAj4CnWuB8DhEYEh6WRV",
  "key3": "3ovoyrz34YT8mToEYtbzZzsRjXFNUacnasofpV2CqAXMn8jYhDgVJN8ncEEZs1H6ujCnTerx59rcUt8kCYhpQKWB",
  "key4": "3U9A8WHhKB8gG2uurCZzoiP7tXAhSZ1mqcH69mWEwLn4u52D4KZv1qZ676sxDxpqtvEMPrd8oecrDm5U8jWZGJrw",
  "key5": "5AeLeiV9cmfcGAHjiwdrP2MkzPzY5woWoBU6Y7pjUvkVT8saWhS1xggC4kNTkdZZjFPbwZq3moxEqeQHfB7HpTRk",
  "key6": "3h6wk6zMPgQAf8pLQCzdjGtRkoTdhkyzMaHAF3Tv1e3SmWBVbQdUDCRdQ5ng6vePiNxz6D4BqtaqDiQcXaLUUc95",
  "key7": "2sfAYMBQ5sX1UyUk84yt8Up3m9nn3Whs8cUvbY4y4GcDh1Fb6mkmKT329X9jENnyv8ZRa3DVgmMG4kTEBRj5G52e",
  "key8": "5jyj9GnTz9D1tQW8wKp4LQ2S9REVSddEznjQKXW4jNfWUDY4NKu3pHcz6CyJC3JVAdYyWWghtbiFyqWuUjPCfoZK",
  "key9": "93c3hdtmKjmV4hASaUhr3F6cC8viyQDuDkg8W943x6hWFt1xLLP5RXpMfBNTpEZbnXixVJFHKSRxmTBGqJ7w7cf",
  "key10": "PVcXTBNkT6Dhf4wxZ3sY3gT683PwTAVKGf618NnD49op3JxJKZwqWsQ5cDxEZeNBpxfoYK4rQh6GTzAqWrXx2eA",
  "key11": "3c7oNYW1ef882EgiPVFvFHxm4NC1QKVwgWxuMhukEocHXadPTGeEcp1X7waso3iMGLF51rrY5VgwTbezMWp1ToiQ",
  "key12": "466zNCSzRYvyr8C4p59HWDdErhq4NMj2KWPtaVviMNZ6iSLwsmyswPzBKEweVXHpiEAcZKj3KDbUq52PvtG6uJCm",
  "key13": "2ArnR2Ccj1ZHccE6fwDeeNquTGk9xCcLQmZvfhSE5VFSz2488JaHAXEoPG2ok6mkdL7v5NfcVQAPZ9aH9WSNQhj5",
  "key14": "619ehzQjhBtwjTYD7GFouELaHnYc96xegNmNRXACb9eHXApbBz13jU8Rrw2SbUZWhU8ypu2Mhz3Z7KLYdcvuHZn3",
  "key15": "3SFaQhjusRESgr4b1o5X1p7QzUUc8xctok7CYUdJfjjovtf93BTu7otfSsWgqpUMPjXMuv4RfXdR8hDpq4Hf74Ng",
  "key16": "5pe1rc6ng4zg3iXwD7hQb7kFR5uUrFd2umtrdwuiN1bNQqKSGYyXej326nMdWpSAeNMDYs9bAf7Yz91dj2TYc8Td",
  "key17": "3o6HqCXxwiJno3Xfuk1ZoUUDRrZFvU7KvmMQQeMi4BaQwxrgwZAroHWdtLwcD5b4CvoakeBbH3NteYtSYEyWPKRc",
  "key18": "61tvbqBQHwjno66YR3NddMybHu5QFkZQuAsjNytqTAs1aPmQiBMo79RcLvCfswyptvKr2sVB676RembEqU4MnGNm",
  "key19": "3dV9VZR2XsPZXEtq5L18cVZHzeJWyvcRBUbmMou6qMCa87paife1LE3UZtE4uTei61NnGXDQPxX8skv52okWhYPy",
  "key20": "23MyzyC4KMfofwqDmFtipi9LLmQZtmoKc4aLfLuRfwXJd4vGYZccqDXL759d7R3jvK73uhY6eYcyGjnhCVhgxxb7",
  "key21": "ZRFu3tHXD8STwLrtqTyBiawkpkyGSZz93uvBzZiAUACpEDJ5B43S4pXmXMju1Nc1esEZMNDFXKaLCY8Q1VjTJRx",
  "key22": "2PZeRhWueZWjtE6hVxKNhX5fJXVs9NhDHwhKVAGfMdy76QkVFyQaJRFVLqtLqa3MjBPkC7bvSt2NkorSomG1jJg3",
  "key23": "3QrXaaVKKKSR2RrqwWsgNNM5EwADGHL13ExGR1EGCKqCAQi68CdUtDVyt86P1NnoJ6Ly6o6p7sQ8LQP8JMB1kKq9",
  "key24": "5zKqBB9NkBpAoXeFuyG5AXr1foMmvE2k2w9e4GBPQjWGZaSXUqdNoGjcbHR13U6zZQXKj6XJPgCxCjoAJNK6DVZ5",
  "key25": "5h4tPUrpeED23LVEA6JVDje952zQx16Q9Ex3cmc52qDDMfno6DJyFbg5bSkuNTp5z2JBbvLD95VXTeUgDXBLUKv",
  "key26": "5roW73fnDEZLUjVszRznMXSLJEokyvbSoTJxyR1mjqw5TzjbDFyRuX1sjFptENyMh4xwwJ25D1gPgyAWySQXP9FK",
  "key27": "TgTq3mVdnwh1Q4MUDWTEcDAhPAaYCVC3GsLXpLBfFtrBoEpv93C1qt4t7MBkwwF6JAu5ExwzdKzdkVmzipk22Pm",
  "key28": "iwzh6LiyiBKeeL7dXWKhLnYvFo4bhFRERaDy2P2NkadXx8nR7TpGCiMkbAwF1oigL7TSqMqo2zB6FMFctfeJ999",
  "key29": "4VskBqA1CdaYqZc9VvsaCxA9jTEdKhWWTQTipvBBX93cgiNtdA7p2Tw7uzeVqEPkgHMNgJRRG47yzDEyZsAN8cRd",
  "key30": "x9nDNZvfradWSsxBKwxKEG5fRCkz7GuVGn4S85ZwGJkerhfWhtmhVcBGW4r1ncN77Aznwet3ERbNDcDXV74Xa9H",
  "key31": "4b3McPRGR1gMeL6TTCtkG1xBjtbcV3HJE1S93Th791zrD8Jh8a9Aud7Rg3vHFuFnDbcNe2K6VLVXpMYRkfL4jJfC",
  "key32": "46e23wuhwf85imjkganngdutBynpKdAa59CaiTm9gQkSjStSYi8caw7hygWKddhUtRqye19uUWPQ9QfC7pYudQaA",
  "key33": "46wVGhReH3giunrLfjygTHBfFQFHknibfugADWgocrNsYofJdTK44TBwibQ2ZaZRTzgpsWoFzXyTUget35KX8MBU",
  "key34": "c93fxRy5WXbHdGQnJCSFgd6Cu5ggVeRfnaRge45nTXnWLnboUuvWuqGZNuQQxmZoN4mS2GV6DuRgXrM7DdAyXNf",
  "key35": "3NTepNrsTn56XnTrQpQKa72bYjdo4amjRrVYcMS5XHTAwBRTn9V2wcmEDwoqaXfxUYeqsb3b8WZnYoPfgAbaj4Z6",
  "key36": "4Lf6ojXFGasVwYAaKjoJwjar5CCfNMbPyMwHdqpDyBQAKgEskZdfGGxBoNbiF9HiBb6oUFsYzu8MxSf3dU9VsrFX",
  "key37": "zUCgm4JWnfpnTuTvGPmtKgNAaibVY451WSvCuatj9P8RH1vKR2mtygRqteFvQkbCFL1PKGEkGCdmv819qKxg2ro",
  "key38": "2grt4wJRNr2jxgZPci5sbwvA2rTg8ksUKfxWEEqNUGPvrLTVKAdjeaRZcjdnpqZEGLGwpVKpYbUuHvkyVYa8cGHy"
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
