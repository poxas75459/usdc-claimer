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
    "8KunefUd3Vs99Lp2Afgn1oYChZHRr5PcHSzmM6gGRumrDmgM9pCk6Z9S6TpJNspfqhUGdVGUCqKjCK7Y5KjpcCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ss8HEGbbirhMESWF7qGRR6BY7ADspYehys4iWWjzDYRfwq37eGDiCbc4SekVmnL76pyLtVZQxBgcELBgPaCawhH",
  "key1": "3BhXoGnqE7gwdbU2eBiBACDYFBhMYhQB753FjA23tebEHRXdTmG2dfSUxTGFzVSR8ewSS4JjMpMD1tmpif4S62CD",
  "key2": "66gMoT4XDedzM5TyoGje5Zy4Zj6HvbZjTb6k2MrEU6H8zpdFz1ikh3QhE3Zzm96uLBzQvqTTdpWfqLMeE7Uecocg",
  "key3": "33DJZbi8DHvoEifzfp2Wghf5QEAfGXquedQN1Jtbfg9cLRyVtTfFN1a6FS7Ducuwkx3QYJKBewc47D9JBNAQD5ZP",
  "key4": "5kefUxgy1kzXNhRwALjGk3t8Ax5joScF9UUYArX6w6AVVyUMYgfZBCcrYKRuqpFVadK59wGoPtRCuFAChojhVUZX",
  "key5": "39az8aZNUbawhKj42U7KE3dZ3A1pAvmNw3zoDbXNBdZ69WexayQjrEMkKYzTXpRVAFFhhDvZWHw4STooxnLj4nEK",
  "key6": "3a8AWkesNjy5b1qtUMTKxsMqGKCjj5MNSmdyZ2ibGNiUrEK9PsFgyVvMh6jXtpnqrqaJLbciuu4spTGxpX1Z9ir6",
  "key7": "5LxEHnWpBWJh4avvshxP6aeJ9Fnac3KSvjUy2dUE4mSWiKUs4XkmB7AZR6i9NFMqsXkVpgfJvWMsi9yVriyw6B8V",
  "key8": "3mF43sgJzLorYUevqfuVzP82HrYwUrdFxoCrNfYdn7DKyzQyZGMmSsByjz5zC6amskFN7gRzsDcrg3HSL7Eshzgf",
  "key9": "6mDiXVqNMVn9p1ctEFSMJikwKDtYPyPBKcXsZHoBBkPYqSS4pb8GY5m7odpTq7hjQgLvMQ2eFzTaC3yWK6Pxucg",
  "key10": "4p9E4VgrNft1Bohq8QwsxbDajBevrnc9tPbwTG71R9tSu7iFT1hbSxaUXSckPC49a3jBe2HtdXeNqe1L6wknvgUp",
  "key11": "2TAEYHLfLCuqs3rx6go5h1sg8xRXGnCpBUkxWdyhidFmfbifMPtvbgbgRVshTppTBRwtvHCfBJsDG1ihzWz2Cgo1",
  "key12": "cxhoZ9Bm1kLxaYj6MQf5My4VRGDaRbsmZYAGuvnzZScvZ22vVx6bYdSJ37dcBLR2mReTkTx7JGzGsoKurpmzh3e",
  "key13": "5tuUTAtcbByaA8FxKCwHRswJisyj2xpVcawyR4Avawq9PQWsKXmNzjA8mzmSnz4V8mPLfa1wKRhobDa55cchw1AJ",
  "key14": "3CLbCMiiwppkQzWMUabUayS3TB4G1JSzFCs2qajaRKHS5szpxtZpCUh5pdYxrTvqFYUXGSjMmvZyb1JWauAFJdz4",
  "key15": "5WsDrze2EQ3GahzsDf6kWtgWTgQPHpFYcY35h7zqGwgbRo6gkt5XTq5kcNZe8rLNUZCLDx6T4BSvAtNqQxfTTX3",
  "key16": "2HAbeerW2LhZbBKQ8y9Yeh4fVgWXQhLyaYomPRdcEyP5a8M55g8yPzQt6Sr5JH5oUNjGvdS7MvJFGoHQNAsdCpj4",
  "key17": "35xFpE1uuE73DnM1YcmF223wRyG35ZrBe9kbu7Hw37qk18GKrC86VFaR7yxNHmYjTUGPgwbJAEypRvEGzcHtLErE",
  "key18": "g8TEeeogEv9NpcNtndHfXsVtJoEuW4avySANNdtg4XAK8WhmMcvimfxRHkkKyTS7DLQoSz1LWN7sscHDFtiht4o",
  "key19": "2k7p6ixdsMg33gd1g355gd2DbXwBFBNM6r7pN9LFdwAYrVzwJRa5GMsoMnZt2rGzenQkaby8dw22uHDU2W3JKWxq",
  "key20": "2J1pqy9HqL8d7Ab7YXvtkv7t8nKDUDA4WPKo8L1rK9i3hfWSFyWsQEa6Sj9eSAe9QqnibLFghENYbs2ihML22Ejt",
  "key21": "5ThfZENbbALH6py2eJjSsrwjurBhUS2LttCZrQYHiS2VbJDd5DAvif8im79pajKrj7FpLNJ2sMjbtrKocGVTXJZu",
  "key22": "2nukmQX7TbGB9qcbrymgYzJPY5cNDQ6SwAUvYuZcgmwxWNki7jLfkt9TnqUq9xCjByJkW31UkaHqE9AXZqs76r9r",
  "key23": "4UiuXtjRzziwoYEiXeZAxJRCKBNrTptZjCYxd2aKwL6HwttpLUA4RRYcMjSfrBqLxU58FUyrVeGHokB5GSdKtVaB",
  "key24": "DetXtBouQoi7DjrqTsmmXBReBYfRFt7YiDSfgNs4STUFHdzD54PYigALSPVGKGvDpzpxreqW5V8ZRSVfWeZVhv6",
  "key25": "4suzKuuEYMhYFbCjem68o9C2MPvjVWnQqZVrkPgRn8VcoyiHjJjHBgcyBuNgoi6nUZGd8yVPs47QqrLMUPoT1LT2",
  "key26": "5YZXUYeEAy6c9Zqq5zeArPepp79vNuSuP1DVYE3b8KLJbajhjjjiKDKkE83B5ztLwcoxcy62V4316os6pgXyU111",
  "key27": "4bF26V6vLHaVvz3Kv8GD2dUqq5cnLhCrL1MojtJqZs3TDRdbVpw2pqERSLLVjUqz84zH9GPmMygTZTRnVek4o19g",
  "key28": "5oZ5SCP8iSxeKSv4PzosiwSMAVT25ma4LfMmkFRifpkHTWNKvZTZvn3kHheycWxZoyrDHFkvSToiYuWX4gCh38CU",
  "key29": "BRtfPSuQXgJKwzAS5He7D5ZTt6idMjNSGcKaYFyW5m27xAprCMitfJhVAkSLge4pe16Ky6BQVGHwYk37mHhugSR",
  "key30": "4rs8xxwQg2EWP8wZ4zeNMSztpc578m1xe3BwPkVsAzUwGCk47t9RjMz3xQXWdWV2vG4YKz52Pm8eXbRoRy7M4UAM"
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
