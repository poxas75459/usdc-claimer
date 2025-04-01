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
    "2teGccY9RvuhXWo2TvxCc5MeC3Z13MkMrMK9bdzrURvH8XybVartTbNh3AWcRgTPZXtDBfaPR84UujWGdDpn7wLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JkbSPFsv1pn1opKPeHHuzCvVjQJu7c8nxNdckxZKrq5QCjSXz6ZqfXPwpH5eQSXXpx7ERV3puxhfadjpgZq3614",
  "key1": "WunSXXWSsSv31qjKv2gfiwaHqRPWEkPkTFQyPXc8QYkEhHTMnTdfN49KtrCvBAwDiFtViweGeLqcBTNtGHpJrAK",
  "key2": "4Hi3T9wYqpi3M3v4brXyF4CjXghToy1R7ft6J2pSu3JxV99jqP3JrhAGjJ9WnXMN51Te9pgXSH9TE2c3T6BJmpKE",
  "key3": "58SZ9CiPR6iYuvpLyR8MTvvqj6RKffc8KGg4BozGdnEHx7uZQAefdAQ3z9uDv23yALDcaSP2f6JY85vcQeskoTwF",
  "key4": "29zYn4zmVuYzaze47PzpaSxefNxzrmAed5R2V6Deq9w5AZ5g6pb4MQyC41YhyJyF8d4xX1uvfywa7TzTFdXxQsMZ",
  "key5": "5kCfC8k4Ft11dYTHpZtCDzvQRYjBcGhQDBFYxGWFnq2B9NreVHXYYPfQj85m6bAYWqeHKYErT2vD8Sf4ENboxHdY",
  "key6": "4a5ZrYTh7aY8McGWa4uMUwTBenHBQYWkbodtatkHWB1cysA6crCVESwscg3rG6tBJEWPwTxi4mpkHTiXWyMQiev3",
  "key7": "5uTi13pGq1kKAQ3Uiw6AHiGi2SFZfSoZbcM9Rto3HXnLnGvihvzEi1KihT2QPmu5HophNFKAKBjf8CxAmGnQsi6q",
  "key8": "cc8AVmYxoHRmyKUYSH1JfJgWPLAFQFVe1L8d5CDsTvY3n8bXzEn44e6nHu8MeoXb4KvkYTern8XNHp82vz4qkcn",
  "key9": "58uHUoPorfN3t6Sbm2n1xHW8X4KjKEdLBGtPNRPiQ6BFymPicW64fk277tKZvWUefsFRpLzVaEUWvc2fvYya1sMM",
  "key10": "3KCnFfXox8VgC2t7LTx2z7jG5sXrMTmU2iXNNsKP2TD3caruR8wD61HWvohF9S6dTzNShFyCeKbLgo6cAf9914FP",
  "key11": "1zXsE85WCmxYC18L8rovPZwzkEuaQs1tTic1wWzXV6Dry2btvDYALfyDbMEVtqjhjwZP1JuLssre7AtJJGgRGPH",
  "key12": "4UAfCHTtmZrLs7KquWCCsi4Tq9Qnd4FP1ZED4ynKP8gjmPLv4aiDTRh9uCvSpGSXW13PHQNpFhk7RdZqU4WoyVXR",
  "key13": "2AesxB3ci54huuHuYXQaeMGLyEobQYxNAGtMFPLr77ade8EHoLTNeLqdBWDQNjRTZwPuSGZoK9FGZgFf7WGzhpcy",
  "key14": "37MxhJ2m8Zx9UUJwdntJp7LEXhsRskmMg1ByPwX57biopbE8GFmcLwtzwMZHfizX8XxaXboZMfVmkg5prNFYn8GP",
  "key15": "4qY9D1V4nz22LceFtgePR275qHqzvNn9EU75XXQpVyVs69jVAW7jgcM6LeD3xyazignq5adUC8NDe6Cz74U8JBn5",
  "key16": "3cM6ojHRyorKXnSuJQe8CBJsXz7KCWNgqhEfGap7jCdsckrxJvSZLhpzkaPTGPBxBiyiwXBwvvioUcsFNLjeSQo8",
  "key17": "4idMANHeRoVSFGFee6J2YoTa6TmxTeZ9uCY3KZ8BXY6KdPvRvacfLd6wCUaj7Qvz43WRfej6vcyExhz2htnKuGDA",
  "key18": "5rV2aBqzPfxFGk2fyEP2sZEZQKzvLmLxzXLDu1nzJwjp6nPP1j2ARJiuuxhfAuRzCcw2yXnJRzK2CBrUKZ9jnjFF",
  "key19": "2mhzZs3xucsx99pEgrCDm4eE5LwoyV6sDQaom8Qahtpx9BXQYgzoRtEBLPnTcfre52p29a2vmNxGFYK37mLZmuds",
  "key20": "2qbZcjarffGqykyZHaJz7x7HTiXzmQf6PDpFPP9X1KfFP44xRpJNHmBQKmjefrhgAPfnxAw9qEqpuvobEArC9Kih",
  "key21": "VPqLNwreuXb9XnrjyW12H2VU2NxWik7YDQX4AjrSdgfvfaoNvCFo83VQJdDKatncKJxY4xxCwM4yDpz7o8Gi81R",
  "key22": "54aPHSunfjwsgN49eahHQzQwycfRPTu8AJju9b7M3J95bkb73E7mK7Y4CGDqbDj9BjNZjKch4xUKFaHUgyredbov",
  "key23": "2Hd2zLrES4qhKhcR14uX57HpVZXUK3NkKXkGbBmr8VkQCix9X48Z8ARaMB18Gvm3kJUL7dCqf3KM3kvEakdVDMvc",
  "key24": "4RtRhfo7Fyzk9mdZv2zKbqMUbtJh1bjRu61ZJN9f88G2WLef9TEA1q9DxHVy17v4Pgp94EEyPAhBKjnemTseiHzh",
  "key25": "4sF7QyyxaAnV5qdFCbi9eEAD9TdZkZkjyXWNLpEag5oyqDJGW8cvzMXT6fpPzUY4735mXnwJrtyciNPcRsZrmXei",
  "key26": "2aN1sitkYY95CZTC1JLMHk48aAhheuzTzij8gn8LHZuJ4Jsk7J6PQSZfTEAyUkxZyupgb59a84eteb5Mf9bSc6AM",
  "key27": "2cJX69JrZLAB9DsuTsVeLCPCWNuHaRNJCijZVKAjq5Ag7gyRgeGtLUKtcmWwJitV896SZ6YWH8UqSPGjCS4ZUJC5",
  "key28": "5kgZ2Pd9zeeSCBvice336RPyNzjQxPyVHKe9o9HooQfc7bj1E9EUKVj8gNa2GxsZS1H1c5wYAz3aX6qhsa2bJDTH",
  "key29": "56PvmyuMGarWmcGNKUDwVUh6yFbb7L72RhkNsDFedrMBgX683khm9Y8Ki6a4ZQzQPtLMPcS7Vdi9YrD63mbXwGBi",
  "key30": "5ymGF31zRGLMxmkKfLzSXKhMmz2pRaMEehMBZfatGQzCkcJ7Q6CMKUgKxTT1wkZriPkChaeW5dbSUUBpUccwf2jh",
  "key31": "3jfNkXbQqkZCd5ao5mKHHXgySqnaQUg9F5mkYJ3Nc6fyHJ6X3Ek5PoWCNzgWgJ9z4QyyhAn9ieCFaz8j98CPBQSW",
  "key32": "55eyScitu3bwDbDtihrjADPGxkxVEzp7fuvXxYfMJj8YqN5oWrsRCj2yB89p84SKQv5k6wRoFtg4kSspEYhwL9p5",
  "key33": "2TrE44x2BrRy4nEaPrgwz1gafswAvuiTcM28JeYnAp8FZKdBzLeTPLo2oFjFF31yYdRbk4WZCUaGQSKMNNss9rBe",
  "key34": "5ztfs3H5Yz3SYeXnGHsxSnWBpdLBcp9p28kHR9uHfCtJvko5yH2opjsiTMJE6dUpPusCnp9PMma13A59Rd79ghvu",
  "key35": "4A3brEpRofti2cHZicfCqS9r5hZA4pQCiUfvXkpB1brvex4V84ypvKRjdeKijjp8GxZ4WKwhA6oxdpArqrdEqNe2",
  "key36": "3iSSpfzBu5oFR2Cp1cPy4GZ9GQe3hjntmg4UgfQt8vBmFUuj6shAtTL3AepBktop2fmhceknXV4FewUCJPFauuph"
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
