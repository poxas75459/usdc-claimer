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
    "4SQpyRyjBqweb2Qxpd8aKNWGqtBeySUZg5BgEbCpwGEHSt4XS9rCbkWaV9qxua83XNQcpeNHVBF4DAs8HkG7ab8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Lh4qu2ScUHwwEUdyQGmwTbPSYQkZecyTk3FTD7Nr5CeWvjt7dLHvjnQ8zZrZQhcMXwXGZ6UCZLebFwsqBVZ86t",
  "key1": "2L7s4VvVdrU8TyQNZXqhsDZZjynNfxCrNepuAo7rLW1n9Q4jEasCVCtZfLPJFz25cgMu5FHTSLcRuFeHDZ4MAG6o",
  "key2": "3yu1c8q9GXfekJwqLYneNj1bLPgznNKdu5cQznXEPi3Wh4fKizFzyhGMBce1ZFxuWSZxSg4pp93mLVQF7cD97tu8",
  "key3": "3xdmQzWp9PiM5V41cTbHcdeULHotG8uff5oAbrZgE5wXDQnobSKkZwo2ULrf7PqtWUQNkbz4zo3grGEeekbFDPYa",
  "key4": "2D1bhhnK7Fy2pK4CA79pHifjzTnHUZoXNQVfL5wv5r1voTKFirqLzeDT6d362FBUE2udY3T6pZ1QcVEHkp3YncTX",
  "key5": "5ZWd6PDUj1Vqe8Ua8NMS5Aqv54kR1bmrTg5Fbjt2GYdVj4DcLYhjaJtrpxdVVc9o8eM1hvxoJB2sCR1zdssZkKz3",
  "key6": "4Vf2ob7BTC29xi7cAX9KWW4AWjVZZJYULqGp8dC3CERVyKi2Dixzy179R8VAYQ1ksuSuF631Y9Df5bDY5CPafaFj",
  "key7": "cnz7tMx8UAUzFaYwEm4TSoKKxJQ9Jo9mvtscAVFhJbhBCSFAZSFPg2esjFBf7P5mfm14FfhorWvdvNDS9wAz6oY",
  "key8": "5wri2ypyjQ9Zr648o45hM9VXDYiau6mAaoQF81ozfigtL3zcZb2M7nFtWoRgwB752wjcuvksJDcDHXcUWzMUfKHo",
  "key9": "5QRaWeEprKy1ZNGauEGw8X5sSwuF2t8ziKa5Gukj2av1qf8MWKFv2viv1yVT6Wpx7NRr4RZjMmwcUwZProg5DLyY",
  "key10": "5ZaFNJ7bi6Y2wjjHMrn8zDwxZzdoaL9mhAAaqeARFigjUcds1DVSwwwWg1LxX1FsejjjQDqNJukXBTTzhr7G96CH",
  "key11": "3qDBANHKBAWXH8gQZBY2diAb7sziFjU1QMa96kvhJZKdQ4s3FDioSe5hUmM1z4aDC7nYef2txta7gRhiB6bjiiBe",
  "key12": "3MBX6DiRnTWqt4z3mcNrGiayPtSzR5nBHBijXAHqkgUJ9eYMF6HJF1tgPKAGE4rR6aLna8y3UgmQXG4mbi89Ddt9",
  "key13": "T3smswekXhNLaosLPsfzXoGq7CQgZujqweXkxgR5MhsUc18iqRQiNNPnsHAt1ohiHbae4htPPK3qnCjThCh2m7C",
  "key14": "5M9VWn192Bc2cvzSCsCgKukz3QrrjtFYpnN4EjFoSmrMU7Lbhbi5EdkxybZyFRPQeJxsgxxLfjpqSN3cyNNhhBnd",
  "key15": "3i4GVfVxkxcrQdWLgisJjcP5bV2xeyQq1t4x4vNhA91M2NvgcMdwPNSSFiHozCrtqmay2LzzFfw6UQgn92vaVz3B",
  "key16": "5kSp6LtzvNktMofwziHaMx46gBL1vtnXRpEwSXkYtLEiP6bp28nRxtqxMP7XKLnekLbBYomDibBgAqqUskzQvTMB",
  "key17": "4eDWdDEkn8tda1t2KqAHS7xq8mw3fqXBDrYCKmudVNFBmEbdUqwx7eMDP8QKMA1AvaKruiZ9diYpUm4UQ4gyZbNv",
  "key18": "J8KrMD5EaAxeS1HmBAnJw4RMqbya44nZeCu6SmTHLdiby37yrXzUHUG8TxxcWQZ8a3WGGQXDhhKzyuKsQ8Huv1r",
  "key19": "9uzFg4ZUstcGKkiLXrYes6hANeYt44cUFj2MtJiRRgLAtt12ozcL5HZftqAsE8dKZuEwctR53TYfSzWoAeK6v24",
  "key20": "fMsnB4LshkFyYz9xaXgsQY52JGHfJFrU1HpRRACehLfHvqdt3wTEg4ZTKHJrnoZx62YveBdXf3RqUWTi1jZCMnC",
  "key21": "5LGmWPyP3k2fCu3DcMvJoocNGfQD3JLrvaCSCj9opqeTbiVeyLV2bRrHgfUeoAgu9VuPgJJTk9RE2T13FqJbTL2R",
  "key22": "38aFcr1ph4cUumwTzSgtKtVwGy1CsjBZRFczQZK4i5M6DPvEf2AabD46pwfcFUxgsq8tQbuFZ91H8zRC4t1Jt87h",
  "key23": "3pdyPUBZ6tE3ToTVyzyfFAXkWf7uxxXBzpLdpswzrYstXcWmmbn4jM1BcFGjvRRLJzH5ezgZ95sCnhSrj6iREddi",
  "key24": "57jVJYU3iEymZX9VsNDhJi2HSQS61wLBFWyr7Kg14Q5t1YBZdNiiSkJR5n39w9NkyGgnBwPWsSLFs7N7M6xw1FA6",
  "key25": "37HzW9HRCTTFHkCNCe82BXLuFx9VKeBABuhW8yGrbPvuBqudGRrmDR99u1oLwAzwYro5K2LLVNMz1a1zsEm2wk6B",
  "key26": "37VSsbMjt6FHQYs2KGWs4JsA5aXhjSbKS9gqiWS9YG2or6Uu4ZmfdzpSbJawDomPnaGpzLbTQMGsXg45ZZTa86Ty",
  "key27": "5gffbzpPYbjPv2b5EzwF2WoLKEJyuxqcXLAabWw4yDMo23h5ndkWZJa318a52vQX1mm8hmc6hFejMsNE1UD8aZ9a",
  "key28": "hvdkgxXGHWnZJfnLkp92p6o7bt2Jrvy9Do1vAQoupzP8ZtL1iFyVmFUnUAbvzoFzrNz2E2wMpZScMr6SNTB4DYp",
  "key29": "5iceJCUAbudV3cQbTcGjeeWed2tBUwkzHTxDtk1cybFmPqXnpi2eRwCGMBov8QPSFAZsK9h1rLdUoqVarfefdsPC",
  "key30": "2eZ4dMU8xucrNFD9DkUh1qtM4dZnKdau1fkcJY4dhBPtkTJkyYNJ1cgX7Yq3ezMmkDiL7bdFvqJYXjHSMK35oQXA"
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
