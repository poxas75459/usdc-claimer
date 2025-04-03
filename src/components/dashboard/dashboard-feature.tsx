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
    "3RPMaiYYwUfve1fh1o2G91uCzD9ZFKvze2WaBm8wQHwAnv2zTUTdvxRLA4NyLiAVJA5y3cqjxRgpBgL1AoTgqLgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gvTj6VmVaTQ7fN5AW9T78xPJdpFnERCEEM7S984uyH7CMVNBmNdddBFYACsCtoCYXeF7B6Qn116d1uPkwRH7pyQ",
  "key1": "MYe3rB5Gzbfjs8KG6JcVupEdwctPXyn7Eqg5cmbdqzoKjXGxE9wYj2myiVBDKdLyHjvZPbrig7wLq4Saso16Zgq",
  "key2": "4v9aLmVTBgUdRhozjAg2JhMnwmzefQNwCPmGJ5Zp9mFTGW3kFTz7MKAzCW6d5qgLkU6xxkFBAzN2aWhPib82HR42",
  "key3": "5RCtavRE79oa3iBMaZmGVHTeYxBdbYLK4t5muTXX9EvMGrmkZ1pd1ocDZd4UCgA2BUeqXQfd4Jp9buccV3AVTR1t",
  "key4": "4CUzwgVMmcXXf64escsxw82BLDnfjr597QbhFEseDKXLjaM4sPumY9V5uqwQUfqCaNyx5tZU5wnLBWLuayfbTtcs",
  "key5": "5bCY3UtE9uUXBmxBrkGfriW6qQkMxk4kLv3yXmfa1QfwGLatAjJa6uQiamnTAHf7cW3XHe1Wk8xW33qxHSJH8q6S",
  "key6": "2W4WZCj1S6GJZRpgifLyEc3b9f3HYo3S7pfeA6MayvXogFHtFR1JRdnJB4C1wEbCzgmXMLty2sS6C7ntoMNAA5Dn",
  "key7": "5Qe85oNXEnR2E6RBF4DES1momtTvdCVxK1h4vm3J8LW4bqwnyKXa2Rd4pebxp49YJS3w458vtqdjkygU5rHjTHfV",
  "key8": "5jJ5hjsWWQZ8oCb6H9NdziXG4GCvptAKssiwAWYYHYW84PHdKyNhVpMn3LPSDTvUA2Udh6B9xmhfzjpJJXifm1L7",
  "key9": "5hHTznfg56q2LQjtfnqu6KcBp7kDyvccwsiQWMn8UUsoMeRznuk6HkZwDGGhpJsKprk1As6sGGtQ8cCDCdgG5SKw",
  "key10": "3XYdoiQxvRRW5vaUBnKfuMaEQEafFx4xuqooTAAYRtJ85prmniDfVUusLqopCXsFwQ2D3rknU64XYfAutxDK9J2L",
  "key11": "2qg5yPzrxX5J8UDbkZ4z7Bpx9iiPTfC5DWsT9w4LAWohyzq3XsW1i2DewbRSXAp6rmRMhtSXmgPNQKTsu4YX6vMD",
  "key12": "4Kxp55DDQJKzBXVx4gw2N5hmV3NMsYrw8ZYkqJVsWxYMQ7K89o8PmKsPL121DqX6KA4jAUrTbG6rSFVAi6u6G6n6",
  "key13": "5h3UXstjC3AF6H2xdLvNTU8NqPwTmFbD7WU6XE3qPuYbr8aJo27xrjKbrZG8unJQJeLjojwnot5CBxmj6WxdkrHH",
  "key14": "35ZKtGwWcD6i1SBdU4MoHvknSrfREVH2AJ3R5ahB3avGQkFjPPDgotw5vwzrA3FWAP9KhH1pR9JuZE2VAYXBqGkC",
  "key15": "5MzAiZ8ARq5eqPxAo4nVJuu9PNEvhs1wUAke59K6x1VP8xsEm3tQmKsepug1shGdCuggNr1oepv1F5Rg254aKsdU",
  "key16": "5MpYSwzoweGJiyMTJi5Hfq55mUfi3eL9uUKRVKeNGvMEnKmEMAFaoJ5oyZ9vimy6gyJ68hECLCd9wCVZ1Ffd5G6Y",
  "key17": "3TxqejwQt3eyGKwXrhMPnAwPt2ZZ1J1vHnENxSYeYZoZSta1X5R6N7amHsz3QodFLuWLscUdFsktwd4bqDFYqAn1",
  "key18": "4FV4DcJkkrL2ZW71rq1W7w3J7YwMPxHaVUAkma27BUww5XsNDvrwXSz5xp7KRmdj51H6jjmqRY6trEHKZksK13oT",
  "key19": "61uepdGKokXZ3sK4HvCBT2PQNwGU3B2Zxy4GPAm5HWrYHTUaKaTpauP6a3XEXYgyEbJwwN9LQvYSKEYJtz6S5E8a",
  "key20": "GmcXuM19MBAnTjUXcR7La2nLHpcu9MAtzG9ky3Jz5scQqw5DuaFCLTgCHN6DVqnVBnnJW5tPeVKsC2jvt8jW4gC",
  "key21": "4my97XHxX2ufE4zjBX4Qkur1DcngquxKxCLkGYEgfGUTFRjrXUN7aL7V6LXGFaHdT49YpuwJNPiwus9YDku2HuPq",
  "key22": "5u7x8Hdp29zBP5pqZuiSoroCDjMV98HD1m7RYwJfJbgL22bWFt7UPYiz7SaFceoRaUim56bY8hd3eCGYrSvy2Exe",
  "key23": "3ReqYzy9MmHRySPwDZE65m1igh3SWgTi27zXEbE6S8trnWbbKjAUVnGHfEh2Kx8ng9G28PJ9z5ZqerhzXKYaAf5M",
  "key24": "5RtGNgUEvm2CkFKjkG1Jm8XHS1uJDTVw9eTgTpDRRkSHjZxQKGK62zha81TkudcP7A3srWxAxFNAeXiDScHF8Hoq",
  "key25": "3ZjACjXqSRBtEmwuPFbKVJ3TXhQE38LE8uZdZzCtxv6CRGeUwroi1abGnVKDbMu2ENmzS7GfthfJsEPbHAXsXGvh",
  "key26": "3YW9PJBAgPgUaCpQJvyYSXuF3B39t6kt6vFu4XVSae5xRUd54eT3bWq9C8d23fbqvGJtBgRhZeeqf5eZV9sUC6Hr",
  "key27": "5ohzRP7Pa3gFAX9dB3zVCrBgRKrUB2QWch4YZ3dDVdEbM8TKmXJFJ7Yre1jcFtLj9meKyiaNL4T7ZBLXgA7X2FGD",
  "key28": "PXCLneRVtWx6NnMd7Ck1eQjHhUbYVVDJu3tctomHpu9EfyP1pE976VkfsCQJ6bEECuNtHjtWRTMHG19RgwWkutN",
  "key29": "5iXAqqMStgcfXgXQjoR6jeVkykYZCHaG1VKtr4KQpDSioc395sJqUR1Gp5o1K7pdPW2KiGZNJDi418WLVFzmDMJS",
  "key30": "2MwBh3LVD8kEYuNLSj1oDsdRnsbkKp3v9Qw7wQ2HsKbJNcu5TdS6N1oPRvej52oGW9iU5dLnT1W38UwSRUaeoBe1",
  "key31": "5cc1jv5mmt25NxJazv6hu7VTRReY96R1syTsUCbWiJp1HTbY2FNQW1PEnr5H2psbktaJLTVJeoqWcwq8SS9eQ3Ry",
  "key32": "3SnLnQmJb7CFXL4sdBkdbcwKq5gvUjs7egeRwtb1ZMxADyQdZLxMYyFW3KVm5WLXJ8WGAbTMvZ5d5ovg3qKij9We",
  "key33": "nAqFvnUnm2PRrvpM1tCW2hLaL11EuSXkyAWhMytfpEXwMDwAM1pGK18d9dk8DZ3bNpYxDtNQt2Ss9NzRNsUFFJc"
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
