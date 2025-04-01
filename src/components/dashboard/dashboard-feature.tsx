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
    "4PScqFHG1UG5uFYqedjz9DzWSbGziymZ2psx1pdynNTf2NuyKLrShszvrNmTx5zofBAn1pKhdXNvLVqrqkb9QdEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54VeeZ1kSex5tmAEhAUTXynBUpwpvyQGmui24xgzgVQgNN4aTpVkBhVrVuyXybfY3BmqVVyie7hC7okVryqCgnWs",
  "key1": "5D54AMPvkEQD5zA7fJVFAYw2eXjmfgLGFCVKgUfw79nVefVMdxGX2zLAnWkez1uGB4FKAx74fYeq3Z5gqcURCAtS",
  "key2": "5Y5HCn3hjcAgDqUYhLGozE3VHkCWZkKsF6C7k4WqYwC5JipEXXWJamG1jEV3ekoU9p8QBpLUHExR9Wq7R4oxREjJ",
  "key3": "5dGRhMhpgGxUkxsJCC9pmYNnVdhxySWLAd3j6FNXXSudbp9o6PNpZZpCW6gXujTLB7jiNPHRN7qJ5F5J8BkX7aku",
  "key4": "4irRRwDVgsnFJD5A9NY5H3qJgd9Xjg2wBDgxuxeKsKkAM4oczckY4J4cxEuLds2V6FtF37HUyEixBpYwhyJjARmC",
  "key5": "4kjTTFfCWHrMtu5LuGEBeu1ykKL32DeT2NnXsFwCtDEiEBsodsbzNopcwhg3imDfvuDBNR32YzhXzp5JoRLEWvZA",
  "key6": "4abZDw9A7QYvDhTMtiEXvmLjpGaEotfVnK3CjLxqF1hY2KrLkMyrKsCXpBBy3ETHacExjtDpj8f6wTD2e7N3ACj1",
  "key7": "2z9hc21rQ4aYuCRu5ZCbsCLFb5Mmwyn4XnyCjzQTgaG9rNJfnAbAVJm9wWHXvVQMp4GgcALFhBkdysP3C8QZ6rGs",
  "key8": "LUJifjcLA72e5SmATy3dhtcCCSWhVc4u6FzPJr8raACf5cisKPCcjAcKw5L8abwwqgKkokgP8j2avM2U7BTNTDf",
  "key9": "4v7VsxYiQZVRDSE8qQqqJ8xX9QRuDMU5XEKCNncaxYymDmfcezs7WpgF8vzAZXrSMcJVjTUkKCzwPXG4Dh7PraBo",
  "key10": "GfVVx3sqV154S1YHxZCB8aPcV8NPhuDHG1Yyx7vx8zYbbQmfENrxmC1NFdvRn3JHHDuArMM5G2PuyQQ5MahaTJw",
  "key11": "3sxWXZzYw35nVCjkuAwgqNjqfUbetsM6HGGGqfq5TML5E1C9kP3w4HbM1eJY23on6bn7BzJC1scvmWiVTeP8jWKd",
  "key12": "5oumKKc8R1EhVzXFqJ4J91FEsiGgK3mdT9pRuJyqPJF3uEZuJtMGTDdbUCiTvfA1Pp38E8RbJ8natBPxxAHRWaxP",
  "key13": "256dmFjtK3c1kwquqQgyeQaKHwdwgCHnv56f3n68MfSiFtwTrfYPsGCYuSzN5EScNJ5TnGRAw1taEYaoRf8Le83s",
  "key14": "2JJH37o3EcsmwShMTLzAKTcvyuycZx3hf2RZmjZ7DMZtJ3do9t9ujRNBzRFmJrfdwEneKMP92mRD9tnXQmXiHRtA",
  "key15": "3VCwiySsbvsR3YbwrZBRMmtTiqPd8v1G1Pzo8AmJpSWR9z41pL3Q16NQRAVfzyUQE16qG2NjP6MNSYn1ne9hLZ3u",
  "key16": "4Dv72JQqTFwUawfiPzz3xB9iGZHRsxWtkg5BP4WSC3gLvPBKWE9RwSMrZ1GSLEt8CBRtcoFmarxbHsNQVDDt9fDn",
  "key17": "2tQ2sQQveJU7JabX8pQMt5KmXLgzpfS5Noe6cskwfZYWeeD79snZC62khZ46im8cBeEh8G98QYhzzMitVwhJMT55",
  "key18": "4npMTcQKLFg6uqQnyUbbadAn1Nmm36JhmbHuSpYWmyPvFJ1DqoH6kkxYg34mRX9qSitSvrqGunZLwQo7RugPs1i9",
  "key19": "2DwApe4TyZNWR8myFiSrhgBfQ3qJJ9KqKgcMotFy5Eu9gbZZahR7GzxZ2AfQRUh8AohmomVCEQw8MfdfyB71wcqN",
  "key20": "2Rmtor9kZpwnGG2DGYDswLw4kietA1ZyqtFEeKk13NPmbUxMChMfYjdSLErs5CTngX3VHoQobFFLifSnirAKuXxB",
  "key21": "26tj3yc5S1fS3n4qSCvJaqoUUj9g495ddebA3yfTxoSNeZMjP3bs69VDSabg9pMou7anS4CV2R5yU8KGQxYhKavc",
  "key22": "5fn1WirikNjscX8fZyz1Fr2SCZsDmmsCDpLnUbRBJ4yLnvfUnpTZDRZo8TTa2tsdYXZu21a1sgL1suK6QhLifj4b",
  "key23": "XHzn8LEFKm2x1kgDscJsSCUyvX2NEycgWyTwgnQcvZv4T7jnANCJt4Pq83comtMyATLmvp26Eb6qdfs6Mw9fUDj",
  "key24": "56tVsQgQ9zkfC1aQkk2L4hCoWErukgf4RZHP9MEzKh7jFoWhUMaXXj4uZfxALj4jPBCdQipc21uuvRgPDZQ7WLov",
  "key25": "5g5jKYK3Dah5AnTubdKp37AJQEPDQqPtZkgnTdDBjzefK6iRWQx7e5vssbZEbwX6WSYcwPcbTmZRVLcWmGKcZdJp",
  "key26": "5R2pbKAvnUHS3SFtyRBAf1Pci7Hotdn1S6GUJpobWXUZzf8DxEufqaX2tDjwPUPbtBnvsoYJi4VY6vgkCx5sisrA",
  "key27": "yMD48UtajpJbbNQaEmxeiJCNXzsngeG1uii4KNRavi2mQP6QjiFuBcPTt4pw4Yd31NJ984jdFXgYvHdFtcqkDmb",
  "key28": "317Eub5Wi4QfeNdXAtcVYpUFvYZzXaEefTZopYQZDe5Npru9KVMgJ5BfWwrYpnRb22XkhBCTyy7FMGZmU9iCMsJG",
  "key29": "2XoYnDrdF9EWRE9fQzYahWH5ctJAp5V7p9HitLpBw8Bwz3eNqK2RwAJMXHu4yh5CJnTqk2UGJD6Qb6RSwFwNNbpG",
  "key30": "25Yr1sW9WDkKZPTQi4unsyagNtBt6BEyYwnzBZ63BeAmKTwbKb7wWNQCUWFt7ieihgLquDnVQvXkqPJ6mygEL77b",
  "key31": "39x56JP87LTrte8uKSnQwFuVwVLFZpA2L9AwcgmBhesBKeTSNY2xEiPsRZL84xUguyG4tQdMwQ79cHA7aVYfe1FL",
  "key32": "CCQMdTsDCJ25guQCQv64dqtX7cLQYrxWxojemYydLBPUvgQjvj3EDZhacTwTqD2vDkSsoLGNTdz3r9g16o3CJTw",
  "key33": "4Y6arqPUJCbQFP4c65Ykb7KtT2YfWVFcDmTDBUirXkQwMNW1mcQDxJkmRR6mCuxXubCLDbLpvSApAzEmzLXdYgqD",
  "key34": "55uK5CiFNy81RB6JjgWmYDztEjjL4yK8Krrqazw7Lm96UYmoBiPdNAwYAqucVzcoyzSg5ts5zSp2FPhyw7YA2t7u",
  "key35": "8SCuV9842YXBwDnJYiDLHR47Q3q9EnhDc3JUAdS5hTH5dEJRacYan5iokUTAWvHXtiosdH9f5vFbnHv1W7WxM1b",
  "key36": "2ecMBUaZBWST5NTTz285ZmAGf88LSai2kmEg4CWB9ZQkyK4BKAs7gih25UqLy98m4ce9DHekJ6ELixgkjc6ryNia",
  "key37": "4fx486yq5tpswEf4J4crd9u897zYuhA9LZqCTUFaX5KXAeJ3ZXkbHjNpFQZXWWwQwF8C6t6PPx1Q93sNJCy388Qi",
  "key38": "5ZMDHHq1LbuYDkCdb57wFxTzBPGuJZKF5UjF2eyLWbg6fBvT8GSzMRZTWNPh5RqDB5sVqnrhUV1gv9Mu8RpTwrG8",
  "key39": "3fFjgMjevptFNrtHGPYsG1BghhAYWQEvrTy5meCSsG3MMTvbaZrJaPU4J2axh4Rqox7GGhRQmSFw9pmLJJRDZ3qq"
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
