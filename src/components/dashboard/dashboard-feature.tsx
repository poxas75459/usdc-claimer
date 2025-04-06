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
    "3ERfkKQ1twEG6Nk3iJzKAPAEimHyvmzKRK2uuRMy4Q8kekoM1GLZf7JUzbY92H9rxXm5cA9ECUSGZ1T82G58JAyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QBK6MLb5riKeSPgtYY4ZriFSCJKt2ctL4Fgsn3JyFnQgVXRyH4kuA9eU5KRRdqY4QBGsYXKVfJaw8S8LFS2LAEm",
  "key1": "3F1PiQxfzemJpMkbJGbG4GbxohZCYXUUhqRG6cqnww9vrQhDPHQdxwizoZA58gMqoL4FrXrc3JyjozerHtmV4hZe",
  "key2": "J3HNXZVp7CPRmNF3a8kRYqQ7ZZv83ZZrbNYKuB5osPpPm2tt7hCgTWuJW55D1hCUiqjSPrrSVEByRiUUNN5WS4x",
  "key3": "3zs9qFnFsSiP7zBYxCWPqDJLtQnpxZZxzjvGw4bGSTRM5vgFn1tceLRqpgdW7TDugb1wbKTTXQeqwK8G5ZuyoVwy",
  "key4": "56sdQq2eP2Rv7j4eMpnNbsjyg9xZ3VTPy5nhs5Wwx1SfBuSx7uuTdDmsNeXj56UFv5sg35ojfwsg3h5NEDBhvmNT",
  "key5": "61971LrP4BKibYYSqAVAwVrhu6bQAFKvwF7FcHa7nDCU7syB7ic2ckSK8FGVWcTwsf9isYm1XW8UPkWzXPdD6oVV",
  "key6": "249JhySzydGwyenvYZXKbYCWQPri2HWYQoUHKXafQSuNC3HjqGfRuawKdKUgzNR4wQqa4iHPAk8rn8M1TfJ8mqS2",
  "key7": "d7KHbGVcyfSrmo4smx9B7uLLbGjvTRW2A2ZyGh1F79F5xRrw9H25WuPkQEQ6ipAS3kf4tommxGDmACXT6jLkBE6",
  "key8": "4bbiKH85D3M7DSSW6Bc2za8XwbX1i6ZD8HPM8UtUAM99KRcSXKsjmSHEBgqq7uggfH3vjZer67E8nd85VNaLNgVF",
  "key9": "3L5c2N3n6u4YQzysQ12fHdbDDBYQNNiXQLyjC23rNSHAVrFHjdJ56ws3NjXwqE4g4n7EgGUTWczgeywagCkhhM2J",
  "key10": "3uDBgukxySphYZvQNrRwRuXwAYCx7EWXRAdmwNsFaafYPhVj3JzTjuYYJ8g1X18LQESwBZNURgQB46m1nd9ocrem",
  "key11": "4FAKhZtv73pK3hEuVndCRDwf6Q3P9r95Za5gWgdf7MfJBJ4VtZM9dsJQRsvv6Xa8r87nC8rJ2KcWL4rdTjcogP3J",
  "key12": "3yXD5kuak432kBUEaqcmsjdzyqKb27P2VHoUhQYTPMp7say6r9ZtourmD5iGYNdRVVvC8figevnUrZzPHvpxy3Go",
  "key13": "4ApTtMbekC69fZPf8SRy6r5i5gM5xdx8TpJtMr5ZGsT4kErhHBHzFh3RiS2ZMAN9jySvGThDW8sj9F9JQS9xsgBB",
  "key14": "5jhNVMYiX75J3f5K9JiUmFPF9SVYWzvpFcs679uCtHjoyxa2bwq6gQYuN9188mStmfh2Jbwh7o6n3d1s5Fv6cp4v",
  "key15": "5KJ5xbATfY5EPi5BykT9ggGCtbagVuLEXT2TJqts9jVfqZGbHTjmA3J7KiTyFUUGDTkAM5a8zs8Jej66hWPSYotF",
  "key16": "2S8WRVUZRTs4Gj8oz7uWZ48VYmNqNd2GNSvdU2VoGYXq5GMc8D6WHt3zBqaTyQwSvwhCYW4DSeQuvPYkZ8uwLtV6",
  "key17": "2KA8wrHb5ndzHfQSRR42a9qMjyPkix3Zkt9rYrSPeJ6TLWJJF8XF9ceEchSuQXXdxH5xsAraDKNYcjScVE2htVnR",
  "key18": "2FFnX6M7FZb8FWBd7fXmGfFaxzoUNMXbyprhkJz7bvnkU1zu9rjA2UBBDHesGR5SDyv4eAfqBjHbjfGWWD2YFtwD",
  "key19": "5f592k4TD2qyTG95m6if6x52xHwtebv3Bw8hZTNfeQzEQEXcHWWj6E8XjJGFqKZSN3Mh3HYN2VMQcivaDtTzE2ZR",
  "key20": "4uVcHnymSaEkhPtGbTvXyHARtfUmCMPDFFrBs9rCygpjmWr4b9HGDYhjmY9UMASAYL2ibUTFGmeS8tGHwGGMJyWi",
  "key21": "52rJtAF52o9t8t2JyBUAWrfNRra2VaBULzKxL1oFBM9s2jdbEJw6C73v2reJHPKXRvEhodDdeMPLfRFGwDoRQhEh",
  "key22": "5L3gMSsrY5m3XjriNY8WCTFcFFgn8xUeNeayv5KY5n268UosXuex1T3CbKUYhnZka359Z7NX3K4doeD6CiWZeD2o",
  "key23": "26d4SeC7CX1gZyEKtUtRyAAp6F3tDCVjwecH8WahV9y3D8PDDaLyeQfMdJYuYKXNDaT3GwUUVWp7CjZsdK94NGNS",
  "key24": "42wetzHtRVjzXFaP3nraBfyzM2a52HEs83F56cL6rmNaKz24EaABeTUJAyfzFHLZyZt6pXAAw2AtRTnDtjsNmBLs",
  "key25": "4TcN32pWEFvpqXpVECMdTrbH8h2EpUkW5DDzJ8mbrhTzJ21rU6rgBqjZGDksmM6ZbUsxPAGvg7THNcs89MXYBVEL",
  "key26": "4WqnANgj3PffKKe1rG7hdnBUidkwhBCELVfDnHb7QFFCVQK9Pb7NUPGutPVhjSaGXTAbdpYFjH2G2QYdgoiCFTJ2",
  "key27": "2wJFjhhxnoQoH9tCsKbn3s8uFUC6xMEZBSP64FNzneLWUHHCUw5Bzw1y6BdzCRFpgvB4sdyHoN7UANnK7Z7cjy7Q",
  "key28": "3iUbMrj5768SUnn93aopXSHcuwXJSjsHmSYKhjHmM54YVyYF2VSyy2uzFqQTnvdH8nHYeFHW61wamkY3av66HVah",
  "key29": "TiUmJAA9xKRnCEk5HpnoaaXptPJ8AkM3jp9F32YQEw9cGiMahLj3hLfasTSgSYvqyU2fhtoYAyPjBhXL2qSfFxG",
  "key30": "ky27ZgzRDNKyVACHexCtwVKEoLmhXEUNzXAwA2ckbcTL6A6mqUKRVh5PmsuTDjkDCtQn9UzmB2GhM6Rdh96dbg1",
  "key31": "4uzAbveC4p7W2ciLhZjbnirz6dR7AYBYMnQbWQ4JTPM4hwzG3TGvpkuaH56UAqQKiGQTGBdfbfUBvYptyABzaGPo"
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
