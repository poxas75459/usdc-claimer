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
    "LQX2HHQE9TEA5ZJTsNa3imxR2wVnc8kQSRujcSfhtUWj2MjSuQ1GXQs31oKGTNdauL8ykLLhxG3HGTpVxwzocNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RaMfraa4VgHwvUYGDkpSry1kahPx9B8QsBeGYX179LWM5jmhwLCsjR4VnACMRwGr9ApEFxA9gvdGJXirwifSnSN",
  "key1": "4g74a7QmWkDmaLf99Y6kDNQhaSiKaLj341TBzeWY7WoL4fBa3XM5sJt6YR56oByC8WcVk14YendrRc3yBLGZSVkZ",
  "key2": "ywBA3QLdXtRXUDySWybFUiJt7RmAFXshju4D3os8PoYRZjBRuCRBS4dWgQLo3RgwzZ7Dpy7aaoUQvbVHT14uTiK",
  "key3": "2ogCW7qL5vnHFEBnQpZMFmucwSMrM4nUnX7bBdGEM5ibzX7bv4j2uQeVzNAJ5CrFMofdfsB9d55JLtaVzoZ1kUjM",
  "key4": "545WABHfz2s6g5SRS5PEs61zQN9DY8yigW7tHv5vRzfKjfh3vNWzZ87n4n7rrMwNrq3jh3o5vy7RiQydScxATPur",
  "key5": "2KqN4Y3gqL48XRWzKdr5FubXX1xTjUc5c88qgTZKnHaZbPhBBgBSJ8kQYfgEA5SGaUAYSQxMjBLd2uqzaPezSjnN",
  "key6": "37DQFj8UD24n9EJpej8jrSWXsTwhBeaoB8hnpSrWEkDXsPvNQbM25uq5sd1AzabEABuv2mcQ9hkTrfUs9SUwJvx1",
  "key7": "2gaGLmcDQwyhFH7fuX4o5K465suS8u5bNEBTKRWvLKm3jh6hf966MQmp7Jo4BEsoKNxJCsakt9sTX1tGEH6gCNCn",
  "key8": "2A6aujnB39yNQAGeLmaqV8Qx2w8aaz5BXvoNRXMnMeQUKkmJXEt78df9j8VoyP3tJ2FhPsUKxqqDRhBdcapZqKkk",
  "key9": "22R7oUaAtfmEUATueyut2vPKm6NZo837mFnTkh6ggEztvAAfYDRU76AkkqKELmfN5ZvseVLmXCK7xZQpbAp3q3PE",
  "key10": "3bQozeCeKm2igSL1hFhkSfsnU1ac3asXLzViaQxuZGkEdo4HyXQgcbAJtjE5wmgF3B2FpJiNgUvWEUuqwh69Mpd9",
  "key11": "4x6rrzRemPMJGXSsY1G5fLktBUBaG1jujcB66iKUYaoTT1zJo4B5tpQupkVvHCcwKbXjUmQHa38SxTD8B2RTZeSG",
  "key12": "47ABtnaht9rHCfTxF38hY2P8DGUFerWA5mHsuaWVAx51DtX18wLSfPzr4ZQHfv8LvdSAzeySYX5azqur9tUshvLw",
  "key13": "4VoMuMQtqyWHD1CKM2v97T38CHmMVi1w7fWRGa4GEbEnNSxraRkzPvSbs8gaFDRerNLbbG8CpSQmRsYbsDq5g5qD",
  "key14": "qNDRQEnDaU8L8RKoqTU87W4UYXXjpnHjX1MspuRJodCQ8DtWhaAPAxC8z1yNDWCUXqXoYbvRb334HBtXxQr3dWM",
  "key15": "3pvBYnUGtndoD617naBsvxCttbnArQ6EWjtNtKDXy6yhMkZdf5XbP3wvvWbzsar1x36EcW51vwFM1wp3GVZBpBj",
  "key16": "Ag7TZ37Ldn62pivjcb7HfcLF8xr9Yp363rnKvi3wwP81GiWCq1kGgyzQJgCx7Jki63RozuVsHThGXf8CMqcgScd",
  "key17": "3wxM394wPQEm8CJchozoALpmBVMjLqnFsH6Kkh5i7Eh7qkhGpB5rG1EqmEjkySuB9NhpLAK476zUd7nNBU665KFX",
  "key18": "VwvW7FEFUM5dYseBNguAcNwHGQJVPq17hEJcjWZMg1vhErEbH3JLHoFQxL8Vt19w4YnCZoYXkTBz1XDGtdsjJ3g",
  "key19": "5JVLWfGo13LHmeNzhfJdMGYJ3F6TiM2Sk3aS7AzU2xX6nYBTwEXc8nD6GA3B4RHQ4SvCv3R37gh77Hiv8dKU9yJk",
  "key20": "4Fnn9iJzd7RU3Cq22wYx5pTTtxSGhKE31V2aREKjJ7h4yLF4wVBoWnqakHXhxMZDfwDCsdmHAq1caWFdek6bXuti",
  "key21": "43GvQmh1TLh6aNX7FCfPGTuFVqkG7aBfLzP7F8ASBx3yQMxMkAi2sUKDEj2tdiK4NK6MWfVvqexLVxWmqKHzxgMC",
  "key22": "2pDFuHZNwTj7Vyy5gzckwvLSWgPBmM4tdmyfAeoKFG5YdV4s1MWKuCSrS7XKZxWKHkQbZDrEHTU9nSbmgLcLhKUg",
  "key23": "5xcjtFuYW6qpcNzX7UFKPAc9wzPxnUh4i4jKPmrWS1bFzAXT66vBLzG8dbx2SPWHfWoXwoMX2WirWqxz34B7XiMu",
  "key24": "JwHNxm6qnLEj2nGRzW8xD61cjsZBsi6m7FKT54pM3w8jpi6go7qLUeSkwMRG8354ZEe4trBZPvVUejoq7bnwmdf",
  "key25": "5BgkvfCujTvwQYLy1rLhKYu3ARUmFBxhjMgwFHopQVSLbnZGYp49hoGr5TnJZftkQbkSJNK4cCCozHBwSSXjWneZ",
  "key26": "jHSjaUcpHeLw2JjrEz7j27Wz74eLim8gd53uQ65cC1xHfonNUw5i2KyCMQPqbz9YF5wzSSewFmSafEDx1boDpeX",
  "key27": "5xUxsCfo7kgVoh5TNFZhiTUG6JtNq3nSTyj7jiyLV3cyh6mNgWVLGNZVvr6xrFDBoLc5GzQhLCBrXpXK3ccvpHu8",
  "key28": "4b4bTF4M4WpyR6XJS8wKp2C6BamPsPHh2jzA3RrGUL8Swx51gX78Z5diBtbtyhbzGUBQkVqDwfVyzv34GTRAAMsW",
  "key29": "2us9aQinEGtvoapAhVfeVHsdwKufN1xii1jfGeoWTXwR4WKpuyq35RYoFdc1pNhhjjtyHAXa5mr1t3KiigMMjxYL"
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
