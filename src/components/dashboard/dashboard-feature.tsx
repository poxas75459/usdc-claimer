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
    "3mGY1cgD3eJHmTL5EmSzAin1v9n5sp9W5eEskM2DTxHMaffDuATmvTQPCAknVhbHFofes2yPz3t3nrtFUMCTwRa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cnYDrd4sbbdEJkX2x3T5b7LjGKBwERYWJjMpzpXLuFfbTZAMfZ5AUM8H3zq78TnDh8m6JFQJF5awtxyXSP2LdNS",
  "key1": "5tEFtfUhK4AU9eryxiWc99FhkEA6a5CfzgKoagwSmuoRHeSqzVeMNTRCG2tz4oeor37ownWRVYT6NCLTKANzsMYn",
  "key2": "4t4YUoLxLjeVRhfz67RRwMzRYnaBPc5YbeTjovxY16ceFMe8x3C3E9pnEYhFRgdpgecbDufYsHu8mpe8smTJH4fC",
  "key3": "3vpxcKYLYfZ3KYZ46NyCSArnJMTT11ErkUFcgGbKzo6rxZAixirVfwbVNmRenvzCSUDvcvbt19T7Mcd1pgh7d6Ur",
  "key4": "54oDoG4AJPenv4J8FtnzAzLC3xQCsbyBQai6a6M27ad2GhatMMhmzHmzyefZAjXGoySbxwwpCn1cdHsVuJ4pGW5E",
  "key5": "3rPESQZKJ3GPkiwtNQNoYXDNdEinsSbnu7FWFA2buBoZFsGDVwfhTdUz2jWYrN2PQan37LWiMrBVedkohHr4Bz3k",
  "key6": "4pjYQiTESfJa5dcjAVzgbCaKoFfGRD9FNWBUksNic3fwwAxPzBr6P3S4fsPxjXWcGgz8weo8KUco1Ak6SFHNVKox",
  "key7": "2P4cb1n8o34xSdSBif63Pgno9ByC6SU7GXZ6w9umSEo4GwZjNeUp1JKuFMrqrB3mbAD2jU44Ksfhaxj1VEE4bZ2k",
  "key8": "35TVaeHZSWgFbreyk73oCTkU8MJ23vxzK2cz55LSYdb2f7dx6n7UznzRyie4K1Wxq4f9PnWHqExSipZmEqo1GoZi",
  "key9": "5cM61A6awCBJ3k12gZmw6Z6wsuc2F2owHKKUGcLQWyxD1uFUnZ4DMzbGMXnVhEKCQy2PauRbdT1Ss9KDshb1PVbX",
  "key10": "5Dup4eiEDvcDTqiohLmVmFJyHB7ienot92exEiCoyXTPEDBLESampTTsQwZRLysCUMf95frCTdTuuygXeqpFzJNx",
  "key11": "56FceoBrerxD52WeCe5HC4Ku4LUwV3qYs8XDPxGrTgrBn8wrJv22YaFVUThvWQR1TByocKRMHRuRqBsXvMVYXoqa",
  "key12": "4cWgwADd67EdjGBZyFeHWTeighi7mGYPAW84KcbZdAqPwzEYhfgQaM64BeouFi7us8aT31AtdE1wtYiG3uot9a2Z",
  "key13": "4m8HsbdxzLkrEP7wtnWzVE7fHYYXzic6UTY2iajmP7oWfhTQeE1zca9wVwpGuTEPLfVKo7fxRFBnQgDZBni9oCyc",
  "key14": "3eGhVZjctM3rmmncgccxP4ed7C7WL7FovV4Xr4eM3qzsZVmwohpTxfYpjj6iF2MMHiWopL6kqZpW3hLwid4Wmb7J",
  "key15": "5Wsu7Khc9NS9V1eKTxBZby9aRouA7ZGBNbxAsKKA7WCfg1vwLnDzZvS8jtf1ERfXHDMzFbWkXg3iKu4g9EowDdPM",
  "key16": "4XGZkGcJyAZTLBLrS5fUNDVYXuQQDQVJcjafvsYnofu92fJgsLuTa5FAXbS7j5YbH74Wjhk9xjKBWRtvnXxSZJiw",
  "key17": "3ruYmghKhHcvjLMuCWTvaZijhZWHeatfZYAeKx5GWP7tZHbHMf3FKWFckmFsZrKCqpUFN9ujBm8KQ7W7Pq72CzRv",
  "key18": "4gkMpyv5xPKmGB54SvhqaWj5QF8UKUyinHNYrxu2vy1MNwQepJgoqif8aKvxpy7gBRgRFD331R6qR37x63yCdfJT",
  "key19": "wxDpGoB15LiYz4oCnuAv1Tj3Yz9BYYDPUQ2RrXFDKpdc6Ph885yrFLPLxMLKgFWz7jH1J1bQQ28EkN2FxAj9epf",
  "key20": "4HgpVUqzo8RfWd99rJqYUJjhtUTjUtPEfF4jvjCgNGDpyk7g5qssFUmQ4U3PHdf4rRE3RdfhsUwR4U7fpxtirZQf",
  "key21": "5diGoTn3E9338ELy57D315RVfykLTuAp816MDBMw7Z5MezdWJ5ZHaonv88VT76ZrugMpwT4cMPi4RCmGqhSMhdQM",
  "key22": "2dBhhARpJLGi6VqSqNanDapjCefdhF1PssPKXvHEVbw5ziQw4rLFknKgSBzea8Cp9FfpQQTp4yyZQhpuADebPbCj",
  "key23": "EoLjff3MCJxL3uxpcwMrJSEF2sH6cqT6iikgMXGA1SqNLp3ebXfaDbfaEJuKbjMb96Kqhj1NFpZQC2edpK4bd4v",
  "key24": "4rP2H64prY6bZXBbSUAua5nai5cFL5EuY5xZ8xNoFrxKZamhG5LPZycEB8WqCsSVWUgbGBNKZ94MGtQsgiaKGWoU",
  "key25": "4VDjCCwLMvoY8E7WEcSsPgmgZgaKoxnkqQHTdPhK4GqQGbh71pfMHD6tW4pKFwpJX7yibocZN3gQaQSDXgh1aEFC",
  "key26": "42Akgb4GGKn5y9ingRJMsMofijLLiNkonqcdYA4RMdRBDPZ68gcKSiTryb3cWhJUPpJMLhKLwXyX644ALBjDQKZE",
  "key27": "56X96HEGFYmk3kdTzidxxZNXWFqkjmiG7w8Msv3pt5EfV8XJvr4Uud3tEhQJ956d5Dr7ojfP26JzEv3GWSQgoRs7",
  "key28": "ZUYK56wdAdurvjhk5qKzSiUTc7nFvhFTZvBzCBkF6qgGQzgfeu6MtpEZ9DrVFvaTPmf7voEZCtgMWBs2jM1C99M"
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
