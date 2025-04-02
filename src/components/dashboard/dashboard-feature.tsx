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
    "53vfoWfF9ehvSKcSjEQxe4Nn4LJ2rSJVmUMyVqDr9pnpnoTZA8bcLHM1MJM7RpcnauxkYVRpL9JfwxanXV3hykH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TVKr3wDgQnH7e1WHj9pSkKNznHRF38KjcDpZWuWy4Gt42gXQrsRE3RwCNWRVGb4KELSngXw8bGR2csVzqbnVCs2",
  "key1": "2c2U6kBoGnngrPvKeiTpZ9jD96QRUvKptBjtEWy2EnoeWyFcX7f9TYTzZRsr7H89JnL2xukFam8NHvorCaUywzL8",
  "key2": "2Cpov65P2KBC4gpCjPh4kjn34GsfqJoD69GiWdJRHWyGPvg8iAyoaqmZzG7RHVmJBjthbdSd5MnDxXSQ5GqhuKVo",
  "key3": "2WjJMEPCDH6MM1V7vGKoYs4uMyuiBcya9RqUgruaTSGxC8jukLrihzWkQouk9JPe2PK1R3MBvSQrv4a5maC1NaCL",
  "key4": "iaRqamYF8enJDZLUWygATaRM849EXRNMkzpusfd9poKMiD3P7UPZgVsd8WopQbJFrdCPv2gQJxe1YVixjv4nFUy",
  "key5": "5E9Zo24dUZdrhWmaLZppj4SZY7iF7qzY2fibG5vb4LmvXvoCshjbyZaR9uHj3XuhmE8rwuPjtgBF77NyqngK82BL",
  "key6": "3Dh6msby2NwhsEMgoAdz3bLBxQkjUJmLT9svVvPTAdgezfcPzLkAxQyFFST9MzzuXFeFJTqg8LnT8naBGpzLATny",
  "key7": "2jerj6KvYvHhgxVEnhXoEiPLnwBycLccmMgsGCPb9phNmsZDHDhrhJ9hz2zWaLzv6ACmw8VZCXd7kZc5up2gwyR7",
  "key8": "3w6wv5PiRjA5EKFx4ZBbqxWKp1PePjJDTe4ZPZ5X5eC8FT8NtW983yzsojrF9TnDE69VMe9Twvx9GUQRgsL25Wav",
  "key9": "32dYr54c48gu4d7b5CkgFrciKVx3Tho8huuH64Dpd7SyE83jmY3xPLt719uifDaWfahQgirCgWZaPvxzkouruVun",
  "key10": "h9QE4RpGvDE1hVZjr6WKypAweK4QF8Ri9GUzCu3mf5exj8WM1KRg9awS3rX82pNuNraHcLF6Uphc7LZfrHrkLhs",
  "key11": "4QeYiZfoJAPcXgzDTKxAqE7YDS26x9ttwL2o1DHvB9hW2rGvryrbcbuVovEW4ymbGnCCVWYxNum8Nw1RTkiXcGzk",
  "key12": "2sRAUCQuipqgZCnATjGpu8KsDF7em4bY9wHTSA974Ram1nrbuTqCnaWHsZuLkvLq7fHt3AYzrLZRg8VndAZfnP3q",
  "key13": "5XC4QwmteUJmssXSaXj1cbQwTamktzfCJXAmdvGR4nXKNwxc9fFGbM89c2bvCeSM7yG5THatwBR4M643AAmGNJD5",
  "key14": "2AyTqJGCVHP9atK78oYMCpnLehjDxHvZcSUk1o198YNiSCBK1hYDaEPbCv6wxUru3u1yuPjs8qfgxoQ4R4H7ycmg",
  "key15": "2yoLBeH4tht1HANQgbVUmh7TpVmwLhhiHKwMjYaAtxw9AkcktGPWGuQQ5d4uQpXdBpNdY65Lj3rLxMYGCiBaQTtY",
  "key16": "TKngKHswDDUmVmS4GKaMa4GBPVHnJ9VEBqUSK2v52vMBnVnyGfyvM3zehFkBDqs5KrRzizzxjQZ33aum2nLSz5e",
  "key17": "2uVhc6cnnnvnYGugjvydkxrJvC8rjGnByZERL85YWtYZR3P84avGuFCEdb9dfQnSP6V46H7UCCe1ou82x6vxy2BB",
  "key18": "5N9p7kcACpmMnk3fR65hhQX5dVijkfobzW2BTCMgsyCpqRCfwJQQ4CwYhz63tmtcF3wbCj8PQMbPEFch48Reb3b1",
  "key19": "qtJLJiST3mxATu2muS7GUxsQYYiXC1fK2d1dQh8TRyE7HX6jR5tYYVe1KAfMWdtWczdmKvAa8H2nhYNaHmCDhjB",
  "key20": "vn8cg8HzG6Knjea7tgJtGTDQ6YxwXq19hVphF9AQBZBU5vPC9Qx1fUwt4oC4EGjQvXvwmwuapRtb33F3RhHCdZ4",
  "key21": "tJLcf8TseSv4pVQaxtQNSvi1oJhRWWiunSsRk37F4nxKbvrowkbD4Ft171PsDG95EFd3YVie3dXG3mjU29tMtZ4",
  "key22": "2KcjCqhC8uVHipmCStBvHNegeRKBG2kRKBo53Fkf9MUr8XQjCJnc736iCpmUnZ84aqYbjEMUaDA872EmU6bKBSTu",
  "key23": "22vVApux2SYUAXY5LBYdW3euuXQ5SBRv9u3JCAnwYttVc7T6gjCBgfBwUUDor8qtNCo7YTSkmSTGPvbaxBH8WGF8",
  "key24": "3Z17pme32ToLimBJcTAXgF5upGLzCcbrcKrfAfUGQy12QBhF8Dq5Rdomh9ZdDYw3t5yHrrqJL51fAyHLXHQA4E4h",
  "key25": "58QoU12DxfbLf8Z95PKdcCvdtrdvvKT4G59hnDuW55kguL4Kvw7yAtejYz4wRGsMDGAjVdKC1Xbho4w9DFK94Kh7",
  "key26": "4kFd5BseCqXKFMdYqoX1rMYbHEnE3qiyRCU71Yeu9z7TC5WdhFLAUWFWz7GYcTK3G74k2fRphi4RP88VSwGsqPZo",
  "key27": "3dAuuEwGFZ9gDqGHkh3c4qY3CLL5a7MMjYUTupjS5Mv6v4scUWsxNr9J1qd9Pp7zwa5qibbUrboXQrKFGtVnEzkq",
  "key28": "P5eKcJf7URqPcgv7KL29uxtg4jNNGwA6o18ZfaK8HXgKe1VCmcLoN9x3a16sB8rYrxaKSBJSDHb6iGaFjpXpdzh",
  "key29": "XzugAnv2mUGVMaLLcYxBKLu4omN9VfLrTu5z7pMtYYdhYbUhE8Kgf7NeL5kmEpeKXeKPB67utNTmnnxDkF6bryb"
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
