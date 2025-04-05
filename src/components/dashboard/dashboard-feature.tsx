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
    "2nndzq1U2u5bLjcZnseD2UJYDGdKp8r3kmTkG3C9eoDcT3rrURrZmmGS72UA6239s3LRbPDdC6LqdbCBpFAeRp7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yVQQoLsS8e3fQfFUfgDmgB1Zu3k4r3nFV1v3VVxMS1ETPmCe4XCPZKEXMnLzV1MwNVuCyAy7S3fwg9DYJsGg6qE",
  "key1": "5seF84Ucf3Kk4e3hG5MeKx91KMBK6gqAoAHbsKDBBocTCuqf67yHJHi2ZjXeCc6W2VEvjzvbbKxTxXCNZUxSnJgf",
  "key2": "42KkBXAscwZj8NrdxPXqmAL8YMasea12wzTq2JhZgZRGkx8XY7DA4apESckaThNmXAugNSx6UYFhKXE6bkqWJXx5",
  "key3": "5DK8uPKohBknHBALsRq6ZEECP3xiTXSyqGUEmngUMEkHsihnPUBvX5ADRba7QWQ5wfmhzcgVFYmBtPSjvbfGrsmq",
  "key4": "3aAVLtXJxEpJ1XjHe6mCGsLHcbMUgUvLsbkYvkzfE1gdNMtssdJKhLyhNV2uGb19d1sR8ikkbKDDzK5z5zpNwTkG",
  "key5": "4E74BjsZ6MXBRmEZUic6cShxyDtXJLX2ecyWmF416PPdm4RGc7rQJ3D45KB5DUre45wUkzdS7uPXdqXiLyFPhsEx",
  "key6": "oAXEKGKLhsKoShKqJA2cTGNy5kT8asLfaJAKHaWhLP3fpEiCWUBWqjCZ3ZEB14S2Vm1Vg4cA6Ze2n9hcU5JrMp5",
  "key7": "2SpzBJ4iWwMQbsk7JxMeNHeht7oJfzw2w4uwM2B3gzovi2VgTqbmHKJfvann6MZiXwwf4ngL1KnFutTjPeYmahip",
  "key8": "4GZD8FHwJeAHvGRU7miRN2G51V4PrZbi4zALtAdhteUwDpjt8Wt2Mxq7HjW6G9PjbU71NiutmNtzqg4aQKqxUye6",
  "key9": "2juCT5guS4hoXusqN3jJfaKwpDxR1paenpsKpowR4NdLx3f41zmumMBth7Z2px3YugLkkuXJdWF8FoiCV3aQnu8A",
  "key10": "2b5fdDseYKXRDNm6WwzF8fckK1aVxuFbut45nzmSZFVoQWcQYzA4zEuwRPKdirM1mJskRvKDoC2dn4VZ1zuujfRa",
  "key11": "554WRWp8gYQmYhwE2TZzu6nFXBbAADvtuGSCsoPrx4qwjeczmsqtmd3nREpZE6fmAQQrCxzDijHJVYWiSYijyK4D",
  "key12": "2FeqeUgS7cZzoB1yMjruN9f9SM2B9fgXULMDQ9rBtC9kuEKaSp3z4zGeHArQYgauYyNGFJgQvFCFWqLr5AQuGJTH",
  "key13": "3S7Da9Esc8qtRLG5a4LVp6jXCZubes2iLG5Hbjfwg4RwuPvEQj8tUVoDZcbYhPzVhhVjHaqwV4ApeGFMHEMTeyLF",
  "key14": "2uFT3Xe1tqMY2tWiiN2hzA1eZkY3tfPqtZHLFu43fUiWNcApcSLwWP6YFv6MvhCCwvzrdPBwDKPdRNTZKRYWK6da",
  "key15": "3q72pAYYUp6nyGvPDajPEgYSNVSkYmjGq637VyDteN9jti318N9owbsbs1p9VbmsKKmaakcDa7n1x1kbDtbELQKC",
  "key16": "5S6e2iQT8cmZ5h64ZH7WX9ejvcwSVkcX1Xj3aBRtuYW2aHc7utmXgmKG7Kw3w8uMNbUVWmzZnBLNhpM3H8ukU27A",
  "key17": "FpY92XZAAoHWWjG9YD9mGHUqPoi1af4sxBGCmP9bh7yZQz7Pgh9RuBHibxkDs7cpYiWKn9ZMgppNTPhYfyvhHwo",
  "key18": "5xRBgzeWPfCFxL5GiSuX1smLGsNLUdnpBetcYcs6cSTrCYyzBCoZAKKTY76hhRqwGvn8jkP6RTUmcaX2oRcn684V",
  "key19": "5Y3v7scV7THkfGepfChd48MHv4815LJCzju3fhZcT8ktDM2gbw8MekJwZqeMBv82mPKj6348ZE61hND9kbU4MM7Y",
  "key20": "4JkiPzXPitjvkwL4HV8nRT2XM7W4QEDxfFsvyrseKVS7kCtg8nJbow9P7uccjFvdRwA2hRzbdA1NbYeiwCS8brux",
  "key21": "3rpk9YgyE7ePDRkfZTZrB9CSmLcxN75Jfk9enZ6o8gFqJUdCUs4BRFknrLsVLjRZcvTPD7gubbmPAX4zMfMZzyGC",
  "key22": "33y6epDqf8jXajQzfZo5TEz7EqBJuK8fJ9eVoHMsfTwxAWWX6dV2tcasPtP5GDNFhRBMrQCPnuJQNWUVXptp9TGU",
  "key23": "QysztvdcJDdM5dK2Vp7q2EMGmemVvM4vpTE67QNKsJAka1hK58Xrru1pigKgypwPWFpLQvX3wv61hNZPxjFjtRH",
  "key24": "o3xHyn8mJpott3fTzYg4JdaxgyWrAy3c9x5mwjtP3A2EkAJk7r5NRCKevjyvsJ169riArhNQZsuh1eBYTvgHni6",
  "key25": "4JgSZMgH3JfG2hmnYEBqW7GfV6MdQvCB5sEMUDJ1LqRAMLKHjBt7NvjAa7oqShZoRwn2Awfmk6FQhgGPhVDJvUXb",
  "key26": "3g29WiDLdKMPPN6sCmwcc5fAZT69DLEa6YYd1YE67CyQbuhTeDhuuRA8pdPKfFcusRskQnoBHMwNxKDgxRuDpBDC",
  "key27": "3wNEZC7RfWhcmEwkXTWqG9mbCisvzxkfygMuMFhPdVnEpPAA4aiQpjTWMkwHxX8Jixd1xy5gaE9GxdVN8hUzjkU9",
  "key28": "59d35bXYyshNpZAx7GRkhXkpSZQVQdCAFZDQweHAWaPSf35G9WZkUyLsNDQtvBsiUtAHLrX8x49N1x5SbmLFNakp",
  "key29": "5TNEqJFKZUznYVbJfgvkkgJYFwvioDdPHiLxHatPPZLoSQXFpGJcxPuNRkuELQ2SgHwN7drnZnDGWzPyhW1DDAwr",
  "key30": "CVQN4zfXdtzQUigfBbbJ3MeX6RtHUnLHXe3coerNnoYKyNTR8xXAgyyMFjR7yACznsnjkDUyZrBBjqNdjjAfP1o",
  "key31": "3UkTAP3toVKcmTGLpVNuiT5suPJm4CkyyrjvTyEPWxtAkL1MAjAHhY5MNSmVyskvcXGY81FNSQhxpTwxv7uy98TC",
  "key32": "3LNdwNji8utPfAATXx18zw1PcG5RCDWrZHQGdzHHeMy3jcvPux6SFF8jpBzi9Km9otHtdNCTTbwaWezFrqJqDAf8",
  "key33": "46jqRp6g98dvxU46CzH1xz7GByxVr2RySM2JGS2XBDoy3Rf5iwRcGF43SpUyK3Bz1VtCuE9CjHmtXxcm7mxKo9An",
  "key34": "WK4cKpwVgZyXVsQfwez5ua5qgshudKpvNwTajtqSCtiTqbX4kw7JzEk9u4GJzHxydkmabnpjR2rwHQQewuoDXZH",
  "key35": "5WmSiAFXMwEzHkhq55ziiuTRFGY1Ez33zxKFtbRaR4hL1ZFpcPhf9s8pLSqAiXQfRBCuLhnJcSn8e79x6kaigpkZ",
  "key36": "3oLWoiqBeBYV1umC5kBnvwH7yEbJDB1hknwfePVDPXFBBsV7g4YdHkLrCEGVnXEAPpJUWzpfPK42AAgVFa3t2fK1",
  "key37": "2SZyx8DhDtcLZZEQHuZCYSBQF8miCP5ggPMdMeXTDR9x9TxBC2uRsJZgQq8gQLL5TW7iRXrxw8iJrHdSFDeATLft",
  "key38": "5CztJszFqHhm8zYbShF5p2JUPe6WmNMfUrsYuEpSscTzFNrH9nQ5BAkxGaBrAxgUyhffXPrsSsBXqmD23vrcKzRE",
  "key39": "2emArq4ugfb5otyZJRUrB8Yea5q2nMymbnhdDtvzkW1tUUmJvqgvZRJPiP9dWbRGTZh9hzHFDU6LGzLp4F8b5eHK"
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
