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
    "bwcZ539Sc6B5zKzQatoAocSbER7vkQzMiufM9MvzeuC5k59ZDTgYVWmLjtcQMvdumiWjg4v8Lw9RPAuBs7nxbiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z3oEDFZJsx5nABMZZ2v7YTGE561AkfdXcsACaX7kkiFk1DfvfcurJ6iEkJ1xSF9ZKEhm3hvShDBSZYGbz8Q6pCf",
  "key1": "55c7ZEPZqgZFdfctMVJcu1pKqqK78dfczd4KiX6SfYrQsSeGqgB7WwCkYbuFkLm1xuapBUZ3SZUgz7JqzvtmB8ms",
  "key2": "5MxfhV5rFCgi3vjEGEoJZpPwdLCfqUEQmrGwqpZorSN6QxQpdeJxa8JNk3YLC4LzpeqMxWmMuJZptPS629joRs6M",
  "key3": "3KGWDz3UyfFnVYSRPhERA758UvWBzoWv42PFGBvuuMVV9zXAGb2bsygvd11XMutPH7eQHPhyzqnJhY7XQ9sPLPkb",
  "key4": "3qCt1ymQ6QuASZa2owVQqpwQR3JukowD7RiSJYc1v7BNRpvKghRFwQ28cgvYLPPrCGALBshWCSDZhcQjbs99XE9u",
  "key5": "4AcYmDevkk2fiG6Q4QDUNhqy1e7hZAfXJYkHWjfEnEA8tLo5GST4mXCFwLzQ6qmSpTmFAf1U6K9uuujZ8X8Nxxwb",
  "key6": "J1DjLXjbxVZds185wDktpqof4pTs1QSUCUKF7wiqas4DenTjEaNt3BrvWcDCoosdVkVzFpWJfnmmPU7sKCdSvPi",
  "key7": "27WS6CFhx64mrBdfSCbUw3LriGNreLLy4DQXGwhwXUVtWEMdTQ5oUSj3Ex9wwnpU4hyECMSykX5us2QKshG4gYR8",
  "key8": "3BN6gsKEbgwLExzgSrR4aqzBsjGWFJgiNkswgKVMPDoFCtbDjXps6a5ixPqECdvcxjJvsWGzrVUgjLy6ukm96VfS",
  "key9": "4PSgaKBVV8UHUZWLgSGWyK9kKpfP33RkoooUGFqoLpAJLpMnsH7zAMyhCSzMKvEsC5Qt8K6Vf1143uuoDQ2pX2tr",
  "key10": "h6sr1cmj6TWtALKv7a8nwKXhBZ2n5rX6HysGLMSvC4U5jaqtJ8v3ADCATJQRD42sjTXKdHXcr1RFboBAQJrYsYY",
  "key11": "3uJHno8npvb4J6gGwSMr4e58K7zUQfuPvy6VyDpt3fKFsigL2Bxgoq2p6mTBwaasVR7eLYTjcSMoB4hoebRUsrG7",
  "key12": "7iLjzEtmriUH3yZ4zLetpi37Yrtudn2bdtybmp5T3V4BTY1c5AurrMkx76RinpwyWvMHRbLYRXYdXaCHhvzVZYV",
  "key13": "3EqTxospPmwWrUV5CbZo4YeNoJYTshChzH3dmt4KXASFGaLfac4tEUzVGpHTtrB7SGSkwrjRzcpBEdCFJ38xv7Jj",
  "key14": "7rm9E7xe4UHRRkiWoJZzmFh4Nercdpwrx9UQzFmRrWvrZ6Eug4qHCYPZzCdJS39kwaRux5xDpWepcE1HJq7aYgK",
  "key15": "YbLRcy9tDhDeH9coCyZXvKVRY44ZvNLXWLEfMrNFqworXvSFhqjfk9NnXkeMsYxPK9yNrbCL3q5G6pb6JHVcf1U",
  "key16": "2PWHAETfvASqneZi9QhDpWvNjxRxi7WUJZpsF5djrREBYDaLw4BJTVvpz3oUNw45cw3gj9HmNvoQ3XfWpSSc3qm2",
  "key17": "3KU1Di1751SWyKfBhYMPeXhQ2N2aW5HygKNZQzTuUvxvzTK3DvhsHAiozsidsoLSP7Uj85xBBDoXU1NKJpDWP1Ts",
  "key18": "39VPWjcEqHskfCwRSphUL6gET5KkJMB5WLSF8t8A4avNkcJSGLJcMjWgcLvp3uXXv6ygwdhRyVo7McntzXXophWg",
  "key19": "4WwqvRQzymeBz9adGAhBDsNBHqwyYVAcqGE79R5jzRGk9Nw6zY2p8fWSfR8NttfrqxJGfCD9GviRqfVznsydDMuH",
  "key20": "5yDcFZSmDm1zkcRytjW3SYWDyej2wRSQ93MZPBePpoMiuvNNumTdwUHfajA2c6XJFsYVAtNTwUWQWEp5umFeHKT1",
  "key21": "3wUChn5PgJK3FyiZrrHbUUiykUTe3jiDW5CJAeKyjssd6uh5mS4GvW73rTHPAcVeUyKgEKgVWJrVTwwqmGsPJxAo",
  "key22": "5nG8sqrXZ5qjJy4QhLXaXinBpCQJ445T5W8M585b2AfpNrcgdBuJaMp4fByJnRvkSEm1JBRrNTaXcK9Yujh6BDoG",
  "key23": "3c5iXtwfkY5KHKJ9djqyhANCkmvv1mmBJM63DH3u54XFhVfSoQW9p3SQwLMp9mLtKHSgN1wgnu2rUMCEveh5S5db",
  "key24": "2ovwknedpUrKQvZaFGRbNAdmPugNwm4pKYL438dsLqzQ2ueBYSkgmaXS5fSpzTqfDNujQAa6Ku5aUMvZSYs6c7Rd",
  "key25": "35AxsuERfWjNqkWcz2TKqeRG3jgY15D6zeJ1V2m31Fw6qz6WXm35y6uWiQv9HuzXBH7expsrFyqvDQVD1tV7LSPw",
  "key26": "3ezPpJHssPgDzGNzEtUhBo87QnUQc2VAmVT7LTcg5FcbNZWpBtN5L31RyvKwDGb4fYCKcHvvp3bLruVuoWZWbbuq",
  "key27": "2GJVbsJStwuUeW3oTiG4qyu15EVg9YpsXpHh3SPhQv8VjHSNawPwESPiJ3itbGzYqComFFnz6fLezNpE2f8NppgB",
  "key28": "3y7LUNYJRfc1M3bhjtqULwSsB6DnnhCcKEr2fKR4SD6aAi2pMQRus2oNPzm9aD4QDQkf7XqGXA8HKfUeRpnRWqxB",
  "key29": "yNNXAB6wkhTwULH7qYhTBkf8Gt2zAEcAsaLmCsmRxbYKAMJ547cVM5rVSoedLx8YqW5wHazPVEhxTDizG7cn6qV",
  "key30": "4YpqvfctThjHH84Nt7Bport4sb4Qsod9eg9cyizPfJ2SrLNZj7kJz8e79YMWKajiDvWAGzSnLzKmR7cwX7QDGB9M",
  "key31": "47qLoGn78TJBFowtKvvRNv2SPWEPhjrXsEsNEVYmwXeWkZCTwPddhcemNMXE83oPLXbdAivb9BuF9LMdSfGfworS",
  "key32": "5KkQrDTM5oTUVWpnc6Dq55HW18dLewLKqhKgjABk4ugvVqb3eU2ypqdDNQZgayDdPhy1gRraoadkEgnVTZ99hqgJ"
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
