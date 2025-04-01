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
    "fdm55tKbNbdDjxNrwmmD1atL4qQ1sF24xKN7jB3voA9PjemStZrGp7f19zSMJYP2iWX7zov85rdtTr98JvMvks2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdEASdCGZk4M4TnhR6cqxrBRM7pXPnievbWjv2W88LPFZ68shgnG2Rby6cKNGfTVVuQEQsHLqcaH2iVWHo5aTf7",
  "key1": "391LFEyvChrUfZVtXFnwDLm3wPJx62GBpoyzbbHSgsh2Vvu9iRJDY41mc1pQduV7M2dg9rwKKCQ2Jr6EPEpFvdFS",
  "key2": "2dXgYSxgUo57DgkEVXvVSef4FWBZzGUCMurEnzRarzzXU11CiZHwzLmNvjr2Z9MyB8vDuThTgP4RLPNaZ97mM3sh",
  "key3": "5x9uArpT1dHYLXUhqpfQCi2GwnHvFAX1iQMvWfVjReU1fVYWCCsM3MhJX3EKJPMnFJi5TQJEU9h7uZzDqQcyBE4h",
  "key4": "3FoQUVTXrhWBZNYajWqM8VRNoHttk4sFzb3iQLyrBTBswZ7oBTtQGRKLiiNAxGMYsoXiTaN3HVspZ9qjhy3JE2vt",
  "key5": "2ADSBUywGyrE1vPA7XseFueXenTm4m1eSg5DJvBx1eNizNnAtJ8Kk2969NNzRG8yhyL6HtvdgjKAh16oLrubWusi",
  "key6": "64Pouvv6kJBJYPKm7Ft8cTRLQiu7S1chSDupDJsUkHpS2VVA9ix16u6pohfy4z5HbwUkc12q8Apq5CamDxvzJoHD",
  "key7": "yptdDWnT4BQQ3qkpV8DNx9m5xwSPU5SZprBZ1obJQrvwkWchnyww4xDgdLPHmv6TCwCGUVbfwbVwVkeRZxzBnUc",
  "key8": "4eG81J8ToTFYrKUiX3vu2uXqLBPQxVQHqWUEW5UN5ks3nhoZfr8BDkFnXo8s29kz5AiyyYugzkoQfUC7C863SNff",
  "key9": "w7HujyGtnGfRzyti3qnKdavgoDL3iTDyBL3irwSaGhjG5h8A7PrDotkUKBrfFvs5M28X1vwoMAmUrw5dDEDC5KT",
  "key10": "xbMNjZYZ3subJXr4PzgxQHixdBWgRheukdzmAQLiUstavGiBwXpiVNxWWBeaq5bpmr9CSxW9h8hah4m2SAPbw8P",
  "key11": "skePxq2iwPmKu2BZHB3YvVB77jmw2mVy5JiiXUDbkVYfB9KW7WRPZGFeg7v7tnju6rzXBYLXYHAHo1E2NSCHKkB",
  "key12": "5AA7FUfwX4v6t1VtVnimmDCfQxpnuGonpvRv53yBqp4seWr6n3ts73WC3HoernZvE9rBTVDVPbLS6aKA2jsK3M6Y",
  "key13": "2a7xZxKgjtfiJCVYtiZUSGLDvFqXquxu68oToFaXZfbfjBRYnkqfwSUNQ4SWofppy5tApWUCHEdxBMrmNTY7uw2s",
  "key14": "2C84dgEVyzWF6ncUx79gNKZ1AZbFu91tzFqeTusExYFFRyKbxEaZN2igzs5TovJTr8Ck976b5x58pLCAYZuR9fMU",
  "key15": "4J764RtKrZ7BCnRFwEPTKJdqoyaKVfnRx3CHMUfKHXtmrnKAAqpsUkG23naMcxxN3d4mvPpoDDYqDMX8myyKRsBf",
  "key16": "2hLwLpze6MX4j73i9jQGsrFy1kqHXmGUouVszPSfQUMc6EMtaPF62ZC3cAVsDr3XYHXFLKvtP2MMUXa3BaSHpttg",
  "key17": "4VqEVqPMDhzZX2hUXWpV4dcKXegi2T7w7gE3vW3Q41qEkhCvUjHQ5TapJCr93TCTMe5V8G5sKJhyZwLKwarcqFBx",
  "key18": "4RjRZWu43hhGCGHqST8dwifR5YZHgZLiAdukcr9rQsamcr5CcJZoNyiDKwX5kWkjorqZce7XUuiP8Xtr8JTcWojo",
  "key19": "5iRDMWPC7fKeTq7Ypx89WQLaWEPXLRF4WSuMXcS6yLyF7xRMV3Nm6fEoNvDKhNMiAsPoSAuzv9Qzcx8EkbWEPxcM",
  "key20": "5oFU2Qy2cLZXAKaJgezFXDzGJt5ctG3Zsa5kYzjhTuNoyE2nWzyYDYekf1BfxJ4GjUp3Kvk9Xpqc48qAipM6dTck",
  "key21": "46W1ptzris1wkuJxS88M7yCoG7ZqyVxWCb463Hds5Rd2PcCL7Nmb4yFZabL2tAizUYNXZRG8BggPDCWMqtKwkjbm",
  "key22": "58pQPG6nF2tYGff66kghgtdyfvAQyVydPEe7wxCkycucRahGZXqUqM4ENWn1TNJwqL7bGmTr7C1H7GKfGyp3ZV7o",
  "key23": "2yN3rHEF5NeYV7sXmf8hPteru1YHjtQVPQH81KJNCjHyJHfcUMnTrucneHfb3imcimZUMo5kRTciHkw2f9i73BV7",
  "key24": "4t7aJpYV3F1ZjngTiv33pJCDpWcCzPGCYbA2HCKwqTAptq8wnf9hPkhdwWv6fdNh7ekm2geei7KwvFU6ajqo6V5K",
  "key25": "5siQYy6obcokU92CDEUJmHhNqfFJKvYGN1EKMxGJDaWSQMkHnmZT9NaEo9FJemEE5QnkXbZtp4GoigNjZMTJfFRm",
  "key26": "2UShyMBzEUJtjhn7uMSDERZq7S5qEJ2G5TnaW6pvM88NSVgvfT84Xz8GaYcKEWxUAgdYuerCiFXyR4gYDgTQVB6U",
  "key27": "5FmYwo9qKg8hAqrxoEcUUXXtjdmftGq3Qr56FAZtfYogpko51QmfdxF5pxCDhvruRfLGWgb3zSZGXtpXf1Dci1Jj",
  "key28": "3BSuDCTdB5bGNSBFok6Sbu3c4iSFpfgMRvh65NzBCk5aNrun2jzFpNsh7Qaw3D7pemrTPfieywJ6XLeR47FBq6Hi",
  "key29": "4nKF7thiYDeqMbnTdnMyRJGUHLYmh36whqztFvin7f9PEQry8LeVxZinNWoF5dVC1yfA6ARAQNmcn4wp5kxA5MDm",
  "key30": "5QzCBDPHiD6V7h1ZPXmVXHWtKxL7D2cWTyqZ8WQktU5vxp5UcL1pfVsFAWPcVy9HBDh5j1rGMoZwGq7fsZ1DUFms",
  "key31": "frbEH7tzV64JfUmY4qa9CVrN5b97Pq7qzxq2vv7HFbnDWNPoAYx6ue3ANToA8veEcR1BMiHx3WVT5ovRaLvjARd",
  "key32": "3SkHYVzVGuUhi8XHtmwgmRXG2oEU7yFv6y5kmeCtBAdT2LUTxuLWmqd3XSn8XHgc1Vxve8UHZiEApJCeZREwoygr",
  "key33": "3BAhznC4auVZf4NZxbVJXiFdrmB8MvXzjNVQ4w8ipaRLuaUC8fkBA3KJ4NQPnBftyzQ3NCpuvbNddSwdXESKSDrZ",
  "key34": "5zZnRZDByUfk4LHsUghCxNkyBzjfun3zSrqwuZXFVdefvZm7DVcQgZbMgU7exBKoQgAiv3GafuYvJFdm4p5pspN7"
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
