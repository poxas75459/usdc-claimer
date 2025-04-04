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
    "3vBrYCWfURKhZpLieniCvjBbY2xafxQtK7kv22YWNXRzHnAcnPW5CdUU9tkHsLwuyce2HaJ5NQW67rCbT6L3LYbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ahHXLngbLJ2xaPypKdMpQdBu6ugSfXxCAEpCrKm7RvPXc8cwhxN4EMxTBy4rrxfZbmccKowr9Xb9gsRgko4coPd",
  "key1": "HvzRPPKTPM3QZiR4pbcZ6ECyZYHZ5RDAUzqJFZt6VZJKVL2Ggz9WWe5hmqHVxaUf44r3hGBVdE9NX27Wgyo5AN4",
  "key2": "4RuneQzv7h4xP3kDkeZGjYxycRdQbwt6u5So9xYNGvF18Jdia3tq4rm3AYSAnpS8ayfruyaRgKLu3FQTXAe8EiYq",
  "key3": "37gp4YyQfEwZYSj32BKkat8J4zXJVZhZz5QrqkDdyG9gMmZRt1absTvqvG8ZVPVyhpyfHhQWjaFGNmniyAc56kzm",
  "key4": "5QiBVkdTWTGBv5RXdH5pkKQP64Fy1MGCZFmo1MYySnyNf4sidT3gFZdLheTt9uRYHdqaJ1qVpBhVoDeNB72sDf9P",
  "key5": "4eswAx16okCEwVeEffY4RV65gXof7pQCwjQvZQwLDCqWgesxe4QTnx717uvzKvuVgp3cCXyKjE1WUeC8M9ppqsQp",
  "key6": "2RDu4NPLqDYPG3vdReKv39wj1ckXrTpdo4Gg6fhTkygDfZrU1dLWEdjjekutu5hKjN6kNWU2K5yfyyg6VMk1k9FL",
  "key7": "2k79uXZQ4VnY2E6FxU7w3WKJfEshsoSp4x3M84Ljmj3JxAU62TcDoLynhJ1owaotxT4w6kEn87Ydr4tUnXyCbvy1",
  "key8": "38tXx7VNn22DH1An63rPQDQWpbspqJLApMpGogPWH6vQYNYzK8r9xG7pBGdLt1gvZ9arFUPVEx5uxkK877HbYBqj",
  "key9": "4jGjDYKUKxD4wLHaT1vTjeNcfwXmZTin4rPaNZ92bQL5ygMXY1iebyUoeVJH34goJDKiKcqRyFu55rs1oPwNY8sG",
  "key10": "4bEGiverwbXZ5CKDpv8nZgjXjFhvmkKsr6t6xuTujVw1Z3b5LkshnrCLNiRN2ovYmfBHteVdAztAfa36tWLxWej8",
  "key11": "4y3kR1TVgdzC2dsj7cd4bh7jNxdBahGsjCbkRBjQDbjPacrp8kX2oJjN3yQe5xd5BvpcsveqnmvQsFcfKz1tysCA",
  "key12": "LSAUB4K5K5MeaC1zi9poZ9ZT5F21DAR3wDCTfGMNeASXsqCBDsc7WBztHpQPDjuwGwe78tM2K45iQsHH95WgdBg",
  "key13": "33gh8VoXQ7D2TfxE9cS8BCD2XTkijRTGkphfCWzzs9QZ63oDr6pDv77tCZ74Nx1Mq8cajrtKcTSQ1yyNhpQjP5jp",
  "key14": "5n8VtsoZQuMsnM7bbYAdjh8fDoXqnM5iG5gFXXTjnfzZeTT8x4jrfSVQAsGrXJauBBczz6FNUcrDQcxSeBierMpK",
  "key15": "5Qgaasf2o67fynaLwwfNTgcncyhJx6531GqkqpdTDB2x7J4MawHtpY79detEWjWyRDWBDXobQ3DuUnu6p5aYrzUk",
  "key16": "2DVvSAXWzkT5ibGR3vYBK9pChKzyriYStFX2B5sv7RSd4Vd3F3ADffKDpY9bWBmm6DGpxeQGEryFu6mYggWuHgHf",
  "key17": "3mrGm8VUiCUwbPt57g7Yw8LCwzb2GoSsMMjnD5Yrk5i7b2zwaEx44LnmAEu3EZvXk2H2S96U5dc5VqnUeneboLbL",
  "key18": "2XiKyHKqgxDr7H6KWC6H8XYaWjQNod8ew2wf4X7PjvYo1syC8ZfTNqHseH7x2cAoMzRvcTTKw353Cf1K18UjY67U",
  "key19": "2ErwAULTgR5GFLCVroLstpGbMAWMUJvFxN7FQgF7tm9RPtXUxCyHvA9Cfm7tk3GX2LfigYrqCn1UqZ96WjimKkNj",
  "key20": "5DRjE8JyEuDBZMRQmdww5c7MuUdWhHPEu2udUCEqBE1PMvtAwhwUBZxPmVNkYY9cXt6Qgoi2bVZWLFKe5MwkvbX4",
  "key21": "2CrMhvr7NTBCNQRuH2DCavMmCuDgjndbzBMoZ3i2P8W68a1jezobJZ47rBVVrHMMv7aaRE84Wz1x2x8a9VbPZwZ1",
  "key22": "248qXuRtYi6L2mraePX7pesh9qCHdPK3jcXSb6ewWMGq4GovJe41oTF2ciyWBccJWJ9WxcEgemZ3QBMAxJpcTz8Y",
  "key23": "2SXfoT9EH3aBj7Ebzxj24FyYyJghkLCsJQzGyyM5LxmqLuPj9BFCAZhYR3q5jX15My71gRdGiXYD6LEehKJp3Wyp",
  "key24": "3LTVkFvnxR43dfCe7WfLwnhDEkMmq6C7W1LWXHTqCPimm8RCxxe9gzzHuWHYUjGHULMsAZtQ2kMgm3W1J2hRQGKZ",
  "key25": "2eC3tWsPaVpASGfJxfKpdCiLqYioBdVCo1CN4snQ71QcwD6DZYv5y4jbTe1F2A9TAyDGJivnoTNUWS9g9iGydJdy",
  "key26": "2CuwZcLfdk9qV88KAEbmX6vegRRQdT9tRdJtX4QCKPDuvXDocTxg6tWLpN9Ni4pakm8p7TNmbd4S4ss3KCq1hak9",
  "key27": "4DUE2BifwdvYJqZTZkpKgAyHh8Zr37v95SUb1AdUMej9WH8DR7jiQZUC18qfoMPdJRfwPAYgQs8dD4RghnxGFAd9",
  "key28": "5PiVDYUE2qFMaZhTNbT4cq8rFwCVUchBT6yACr3uFQzEmwouU4mjHbxkXeYFLugn7Wjn61xapt95XA3oQQuGqZ8Y",
  "key29": "58shQX2ZNSzH74gnEoxi428KWZrRAndE2BHeBZmwN9gHVg1qkuu3eKyyHDt9gY54VYd7ym3T5ti1gt1P8HC9DJ5M",
  "key30": "r7H6HWzcmxftNHYQuR9AAxMr8qohAnPNBgM2z83REyvPWGqjXJ6CEfq1rVxfmK1DQRBmhbWdJCBzhV3yLVUondG",
  "key31": "2xTEc6qx6Xvbk4yK92LeNxJQLJSEUQ5sUi7Y8KbZCdY8szKHgHCWNP5F7RoRhHrqfuP4exDiz4bNegJjkgeRbMRM",
  "key32": "3GHTFrdtpEzMo3Vs6GKgWWvtNgNUDPZiG7V9pqCfxd9MJTQLg7DqwV6NwYcYaxcF5RvZXuRgRq2jNAuEQtZ9yVPf",
  "key33": "4T73wx2wLvoN743ye2p3ChM1Zo2cXAZ2pVg7bv4fEe8SBVLeHDZxT9D7BNSpcgCEDD9nyYKbDXrBvaKLEKYDGcGf",
  "key34": "GgesoBCieYkZe5j6aCvyGq6ZXJwmYa2soZKHiQyWurstri4jX5tNtmaZeJ9CtdfTwZWoSYBjw77EKu4FrytFEmU",
  "key35": "3evQYByHiXPtHvjd36RFCvs8sz534NzzLs88GApRducvURdnSFkkfLUQaAVYjWtSR25JtbNYd9sTkaKQaSdeq7z5",
  "key36": "gVnc2dywjVEJCwYt7K9V3h1Z1fjnkWoFtra7LYjBjEVbEjkU2rjEn15BETYJdDbSTLBuzGMkhKs5Wryzkymbhu7",
  "key37": "3JxTxCp45ALZaBwRYFUouvWxD1QrRJ8b1JTg7iW97wiUzYpV9RWgbWe1PHq6WQpSXYbMzMJrKZrT9pHjU8bo9vWa",
  "key38": "4x7GEmQio2p3fQcvSVGHhuXkEE9YXS5XoeneGMw5RZH722RRQRXeBRZ3enNzZa3dqD5iW7VcKpnNjjV4ChHcW8LY",
  "key39": "9pykbpMucEZtEqFqQVw842QtuDUyVE9Qf9Jkv1RtxZUpicPNKs6EfEvPrRZF8twrxx9yzbUHBbL2BnBCeMQGYDb",
  "key40": "2CS3ZbyXHw4mtWXLuegQRxbFgDA9x1QhAze5kd7AqqdaNLFj3M12rBaPnoKSpJNuNxxaueuzFydUyXcXaRGunVxH",
  "key41": "65Y7weYR7ZAtEHvts89i1mia27S3yCrxBYkwzQDgNkhtJh3uxyHJTSzeiBRzdq8aQzQZFGv9KYfQhS8iira626q",
  "key42": "DNPDz3zH9CP6Ufumz6gSaLpcxP5NqNA5WpscCC8SCYe45ZytnnN1N5Uo8wFH9PH126KWnRz7SNhFF8d297RvsFw",
  "key43": "2wM7RqP22A9swP7YuBct4jFsuotK8KDUphuB3dxdamKGpvomF2MNXXfmxVokdL3Sy5vBaMzUffJzaaBQFEGsZnsD",
  "key44": "4RZ4MEcxtHE77m9Jx9zKZ4BqY2jF1ePHhdfZg5scFkD1bnbbXJy5LDvwByeZJ9o4b2VkEztY8cWFZct4Yy5ERLzt"
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
