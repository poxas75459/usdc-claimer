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
    "41uHLDTsF1Gkqpid3dUtMF8MGkqdd7CckZCGWMi1jXdUdE5bk7kYGUCNUYdaSiLC56zGz9yAWKxXp6RXLUf53K1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CLfRdZjPQWJgrUMZWPSsPJdqEZx4GQeaRLETm5P2jea9RaWC99aJH4Qs8CA3H2N7h8ABQBFHPNvd3BVSB9kZpbD",
  "key1": "3qUbqhQ52NTNk2S7YQQZJgZ7UJmmgB1bsAkVo41xUwvPud1h9EtAvJFSPgxYU4Qp2G9Sq2f3Cn3NmALKzrBVUtRo",
  "key2": "42zb8j1cJPsSsLtyWzy5nD7p7tsjYcBcX8TBpyaJWSpxmCC6TbNVrzsd9SuUMXFDnL3h14eRFCkZDq9hHE17H5oN",
  "key3": "2VE641XjjvWFjxApom2tovQCc1pSkg7Eac7AAdsh6rd3x4bUypC5KNcR1KHAZQsex9p3GcpysrfZ1HZ68qtsf2EL",
  "key4": "4jJ4cHFihmzBuiAFBx2hSiEy493UC7gHesaRffPvDHDEWychQKCcjUEyNU9MnjCEB1jxEGrKCL6dnEu3zzf5ysFF",
  "key5": "3gYg6X88tHdyUoRZ5KQmQDpGczxey2ShF7pX9tyMFmoiTvYAf7n86r1xzH5YnsXidMLBNLEsVGwPH4n8QQZ5UF1p",
  "key6": "N1R4QKPp1QiYrgXqR2JBMsdFcryUGvj9xP6WFWcTFC3q8pTKt6fwuWJbL7wfagnQCJychMBf92nrRZeEN23wVwx",
  "key7": "5ty8nGjUUS818NsWrUtyxU2z88cGkD4oDGMZT2UxPA7M6Dda8qdYQYWLd8GJP2KrNXbkjXWjS9wyi7YYsEf1WzFN",
  "key8": "21T4CFCB1wZmBJhzYktjQWBCQCi3mJFcUqvrDjfwSNraj7w5XtBTqGB3XRqsdBYjWLapDnKZ3yj3RzVVdKznVHLw",
  "key9": "2PeJZeyacsjEGmTJxVFzMUEjBbFtrnbk6S5xLUG2ZLuXnfniWKBhTU77qx5oijDew7F21mgSXTe5zX96xUtznYSP",
  "key10": "2TydhTU64tSWmLkknHg5gfxuKjKUyBN8iaFzMmSH3ERjj1eKJziTBosSqQuQezx3FHnyTdBUVVxXik4cbAgGrCn3",
  "key11": "4H8yjDLhJGScRfqHBXz84ZrkaZSpJGMBfo3JELeSJBeEkFguYyaPXJ6tyB498jnZg8jMDutt6859KD8dGSiUe2RZ",
  "key12": "3GWG2G9LHhzaqMkR8bRFoyQ6GKBaPbiczk5rQLcWmHTT4WZotqiGwN8BkUHGJunGEvghEdVYbv1HTVGX7kz7pArr",
  "key13": "3HtTBARVASBbcwTThZgoaeRaP7zep2Xk7JZ4B1HARTkB5gYMZMWM9tiysjXuiyw9TuWzZP9Je5mQ7xUQ1es4Fuzg",
  "key14": "4qLmqW3N93wd6aUUWCmgG9kipyW183M9P1xRZXrcBEuzxnWZzL4jWcuDViTTPyeaN4hSkuaLUQNRGhK3PdG9orjU",
  "key15": "63oWqmUoYPGrvGxSSc6nMioyaUCxXRmdva9iKquEYdHn8iHLkMfp2R4kmQfRYiQnFrJi3SFFrQzpSu3fcRYDriB5",
  "key16": "Q42bavNQs7MArAPuhk1J4QMUz4W2Yz7yszpUdpk8VvJzVueTvHum9qAqN8ihqvQB8zo7XiCfUmu2u58FzuJgUgP",
  "key17": "5hk32sT9NVbposZrUrvB8qW2ks4AP5G63h5qqKKAi3jQPsqyRRKhnp8SKNPAg7zoRKYN4bdW1MifVWp1XzLVgjt8",
  "key18": "jMu5ifc7hge7Xq18WAaRJbxfEY2Wgz3C77TjGNornE7bN9Hnz7ejbuXJVt6icAWU363QbWzCzBHXjTm7Rsz1J1M",
  "key19": "25scTJxumgFCV1YFHT1LehnMUcW9SVqXjgt6chZP6BUTZM3Wcpgr8HoN7dWvMT8qMkbtY1Uc4JCoFS36sBknSr5U",
  "key20": "3CpGZA55N1tzXJDKdmamdXPpvCTXinmfEQapCKpetFJtfKoCsWo16JDEL81TnmupCBdJFnKKSwwDsyENKRAAxBDb",
  "key21": "49VBQ6gzzbJ6jsUrDonWuedsHRKHiYbawY289sqK3aTFxsDuJnmDnEyeFkmJdSChoPTNVUPwL9tPmPtr3Wd6wxHZ",
  "key22": "4YBeVgEacwzDZcVPV5jqdu9kTSejYEPCmwGKYmmy6roPfyTuDCB7iStLAfqcYkTAoVRJNFs9kPmjkKJCkr5cGS56",
  "key23": "3pWD6McmYQ5yK5f5LFSTdAXBYg7bpKETKmAxobsXSFHpm8GqY2Nx4JmJmGf3U5P9kCAXGBAPn9rx8HEX6fvCKSZj",
  "key24": "2UdVmtMcGXD1kYzw6wGaMPSZ6Do5TdvfGcLNFxUDXbMqBGPzM3CmSwMrPCs8z93PeEyyGj1B2oKkPFvrmR1JrwEc",
  "key25": "LRAqGMCe4WpVizRw4vjVHsQC3Ztozut49YoQPAicVXn3bBuPq1bvKWVbtezL6W28fAe2emGmPoexrd7VZJ7nhrq",
  "key26": "TY4ZqeKRCkWpycgCMQBzML6iEig9WSBmW639QkNQHpBheHZhU1VLhi5SNobBtNW9QPVW6BPWoxHXLan7pVzuusk"
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
