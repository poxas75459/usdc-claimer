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
    "2NqxKLKEFWQp9fQ7H5rVRTP5vp9pppKkZ5F9fQDQUPuwC1nNgnyDjXf494caxqsQTvgCELMh9xTnjT7ukz5MNtmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gBd2LoMqxeqQU47ZVofuLnDAMiTDfBeKvrJDFog7uqUuoScHWH7ZGty3sazAfW9KNnygx3WNeUW3NaZgecrXtWD",
  "key1": "3hUHCRXpBCKHLW7JeoKiWCrpoZpUFr4ugjYDmRjEruq8dQxqA5SruMDpGCFd9TcQ6oceasa8YAL6ERVPf9ZP98Fd",
  "key2": "ddzDuZiX8jVa2Ne5SeqUGteSBKyfFYijiJe4e3nSFx9bgqcuz7VC8JC2hdFJQ5MqiA3xY7uQkK46uG52YsNQzt6",
  "key3": "2iSJF6m86CgX8HYcr817cWWSfe2pkwM1LyicGm8SVeQj9N3dKdQ1DizkRBdmtEoacsXvVfdDmKV9faMNrfgNtXMN",
  "key4": "5mXLZ7M9nFBSL8tvgTo3K6pvijjGDnBeBdNsCjNjE3zJ6RwryCXtAogNufiv54jHce5VbzpaBGc71syGBmMhdCdi",
  "key5": "4rUyBjExQSPfvsY44DNcL278fXAyXjbn6ihKEnGRwitY1KgXeG8CXNBAA2mYmWJ4uEJzZNmUnVJBWjTkh2T9u5rz",
  "key6": "3LWNcoQxVieFpgKmoEhT82hALNeLKq1XcQcj5qHyi4w3RS3372mowiyuRXzv7kVBnGztqxXYNTqoupUVPZCh7pjL",
  "key7": "gqaRGBuPGuh3QPxHkqhQfQsQhreXLuUVhJeqC2CQQh7jA9pBTLtTU74yWVdT77nRWd3iHKN2fRcB5onw7j1kjBa",
  "key8": "5AtfvwLDKfAU3fo55reYTXsSjezawG9cxreKhCMuzUxg9SnnShuNmxmT5tLdV8YJ2XBpkGA4D9maXNPMx8gNnm4f",
  "key9": "2fKqk98BUse44Nr7kXoR8GAEvB8UNDokqLH3QmCE8KmfcsR5zczbz6QSzBk7bctGmQUqJADMYaiMYbnR2AhEPfPL",
  "key10": "5gJ5RAEgEiNAELR2SzYVUWUP5JccEtA2PXDUdCYmUA1mBuFKtg13AhfnWBL2ZVFf4Zqx1bwxLBve7mYYBMqCHrHz",
  "key11": "4jhMBkZ59TUMJSrZ9QBLixrdQjhQCFWXNPwE2gkKhWBzfJx8afn4eVuqghQvgUAkKXdxMJxXDry1JdqeUTYBo7DS",
  "key12": "639CAjefUvDdCiANqDHGw7x8VTYRMudewPv3TBbDUreAhTepBzQEGqXhRjsUSNiGjBrzffRsu4Ga1oEKf1JG7hgr",
  "key13": "5teydTfC9tz8H7VLPNDpkk7fbNion33jARH8BYVJyX1TS3pMvL8QZF6ZnBBsywhuNBXKTD3zSGTQDPT5yShr66bW",
  "key14": "4BWMmJ4jo5S7bN8ArpbFWkMmomWkADFGGgmDyUjxNddbzgqmY9j5ejVtVwuL5JfseLnjLJJ128VXYSJc1GRK8mVA",
  "key15": "3a3R4svwAAGCzziGoSnLtcwDJGiVksL3YoHB9rYeairCe4tvRrs8jNTg31VWarMHhcPjmE7sPrsJVPzQUK1NNuuY",
  "key16": "KEFeFb4j3VikQWECU5c62yppSjQvhHf3jMjboVBCtGTuXMgBiweSB5WLM41yBpVE9F2iAtFVUcUzNaSmutnSfaQ",
  "key17": "34Vwev1dhRLeGTGBQk5FH6PX4zceuHGktjtiLTCWXHmygiNF1nyXeXUo1KK38DxYxXbJpSByK8ibXGPrn6LCbrxt",
  "key18": "5QnrcKT3sdwreymSnb5qwKm5KL6o4pbSidS7DvmEqm8F1YLyuVAPF9RmQqtf3c5zs1SPrQeAtZxr3Cer7rx1RWqu",
  "key19": "4pfurBhmHfsnGE9ffSFJe3i2g5fAUcExw12mTrErh9jJCDESgmMRZGiwjDv6p8kvPbKQeL9YcCtqgH4LN2kYnvEA",
  "key20": "4qBmKfPm5jhjdASbXiZpZ9AwjpeQrSK51mEGrJf96fqeHHraY7wBkZZtuhngrSqAwsZp5USRFcVMGMrWtq3Kvqim",
  "key21": "28jydaC4rZ5C3JWqLgzWEQ47F95ewHyUBL6ddSAvsENkNNr6WucQGz6QX3zyseLqa2gGVeUoGYnCF6Ra5fFc8xQD",
  "key22": "2Wmr6E2QsDBUQS835SutAi6k9JCT5h7R4j1hdk9RNjeUwSY68QY8BYpwTRgWeS7PyRB9L6SNiEe5C3FGt8ombuqp",
  "key23": "RJ7ahfoG76EE8BngmGJGNMnmSb1DhprizVmXpdExMxU4Mda25ApBmuurMkqMGVcF39QsNokhHj2U4c4yR52PDKX",
  "key24": "4DCFjWvjrwnrEeC1khCXs2YNT5NJr4QoLj1Wu1kMfizx3VjzpNuzCzWhmWzXkos5vg7SSDyK5xF9fSp69Sv5kUpe",
  "key25": "3R64aZjv1KyAmCjjxfQUemdeLWfGaWiY3vDNbkk9eKDkMp1CYdc2iJa4zMsuoMSYMwvw8AwBu3WNjMGJfmKS84xX",
  "key26": "3iApJvJdM92x6vaJdxAEfzVR95EGCa5VByuF7AiS97D7Rsc3vuZNWTasrX7t4oefccX1tUXL8NGgzrLMHycKzbYc",
  "key27": "DhkHpNaxj8huS4DNyc7BYUuPo5XFKvFt9uYu2qqCjZmQwodFtXR2Do3VMQueDZwkaH3dZ55fZhkZhWGpQqPXgr3",
  "key28": "66vRoudAswEkYop2L75qZRP8Pu7gdzMiH1ifrY4efptSgqv6kFyKTKtMoEwPizwHqZzGFKCdTVAURBL3W6cpS1aG",
  "key29": "MxqUKRQ5bGGcG64crc3UYrYj6h4fQZnJQL1hq7zv6pQFyQnFDkCBdM2i2ckk6Mg6hcZPVRX6VamuwHHCucpoRs3",
  "key30": "5YkZFopzCbz4cLmaoWSjhBcqEJyVPaa78jfTpLctRhbnn3XAptQ5pvUaxeLMh8BoH7DyZHyxZFi8U19FKkHRQ3gQ",
  "key31": "5ETX4QqphL2N3E9UPj1QYzQY88VZhJTBbu5ZuUD6eibzWpeAjk7TPubMj8EPqmpoPW2E2XG9Zbr7NEkrLWBfsdTm",
  "key32": "5e2Kcj24yj6hbWMhsf3TKsS48UJ7sECqQskanbNwChbQBk2NEjNpLs9tqioi5gKhEUv2EpnpzDA67mo9qMAFRrMv",
  "key33": "5zsFD4WJXVdhbBcW3yFs5zuFbbLoFTuGanihDAFZJDbjSXpdkx9bumxN8Wo42t24rTuFoEG6TZJshAFjRpDQf24o",
  "key34": "4X2ztzx8tQfeY2tKJmkoVoeT6siuk2wsH4YVFYzd7hsHjmH8apxEcG9MUY8kb13bdAVx7RfWoTSmSZr59mai4SNE",
  "key35": "63PvpwfW3sUsfV7rVevCxjuJ9ZY4SbwTo37dUEEcFg5V9iTYoDCxuoLHnGucvLMuxna9sNya4Y4jrJpCcjG6QiSs",
  "key36": "27hEFDoPMdVDc3f9Kii73csRLoVcXLL6Avn3d8vHo6tghrkEbXSTtn8Ffs9JdmmmouKdECWxXFxZ6AJiwikmJ2Bt",
  "key37": "51hohEwMnfbwyPgsVCKrv2cvGZNW7GxHWa82MeMqH5Gor29rnFn3RcCzUEp9mDVL5r6C9bXHo8VM5wsePxbn9fbB",
  "key38": "3WyvcedcScGk4yhCQeeLqyYdtwdL6htpeRgUYfaaEP7ugzEz8t7MacF3LAYVyFqaqMB69pSEh6ohyk3PE5cLTHEQ",
  "key39": "3df3nvAd6fwUEAxRn697fdNfRhD2z22tSDJGpq68LXMivtic9e3ZdFR3CBen7Siqs9cX2K9wzczCfjqFazeZwATe",
  "key40": "3A9p26R4Gnkx4fnmMkCxeGYqQcWA4L9hhxh28Y6uaDjPH1GXKMDVDQDR9hyqFsKyjDwPBoMKKYUxPXDiqtG7Ma4i",
  "key41": "5XnoWNwSizZwRF1ry8pmkpQfRQrQzVLGNuBzEFFSxEMs8hqYxt3hY5Qr1KrqRhVj28oKiz2xdBfadsR6YT9DrQVG",
  "key42": "4aH2jefiyxYHhGnwV2RE4AJ68yCKEHznGK5PUsT7uWQDhaVaCsoKe1FTYsbxsTG9EFpxKPzmgcYTXJog1dEtX5YL",
  "key43": "5MdVWTCUJocvK8Mr2hBHd8d18VKkD6paCHbjZ9rTqMGeT3mYpzhuw9T3qGQfuySoYtAMAqQGYv5mcW3gcqDNAGHg",
  "key44": "iGGTUbAqpoMpmY5m2bmEdNSqxGdDY2Hw1GBX5r5eiEL8Kq4n7JEEoDjQPaY3hVvWVpBvfuHNwsUHKF2qB7hyoya",
  "key45": "5xXDk55JAj3xAsaLGGvTwQPoPw7djB5GRzn4sceZ5AuxjFrWfjsrzLUo1ctTgRVpTTAEv2NW8qThhy64F4Sj4Ruh",
  "key46": "4L41W4MoK1JTBmRmqvgcKzzhCu589xTvZXNDtE1u8kEjXKkwPtNNTcqBWfnS3zkG6GcqAHoo2NCjkXn6y9M26wPp",
  "key47": "4ntuysdK7MS1yNjQ54YGPKxr9FGWqcJXsUfm41mP4gpobepXiC1HTVPutfK1P3RTZ4r6d2ENBEtQPcyyhqdNrwd5"
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
