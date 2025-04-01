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
    "7LCqHPpmGsVWrRqgcoZLh54Xi4jFWV5A88r9FwF7BDQ5aTvbQ4SBppxhjdWcDFLGzDWf4uhDUJcwuAwX1YpUVBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "574uny4AMMC7VETs3zaYpgJKwv2iz4o66V8CQHYbEJ1DEJCSdapoDnZ4csunmpSvJXbtwcGYMHiMkEiQ1QTfk2x5",
  "key1": "2tL1Kucmb7vd31PuroHakGgqkb6j69rRPyoHqCivj24viRFaWR89drWikoLskR2js2xP2BTuUA7U3JNcNA2WPP67",
  "key2": "4fRkDmPeJn1u8oPnuMxGDNvGp1oFQLAQqfCb6rxsubH6pdZ5W27iMuoKtgS5s2iw2qtvuD4SEun1wdc8yQWGY5uw",
  "key3": "33E69f5G7FtoTe6Ark8a374H5AWD3kkvxHT2g3VXEkCfyyrR8PoqZ2uX3DubKfiftDnoBtoVakX3tzZ5rQdaG4BQ",
  "key4": "VXAhRP9AJLLkfftUTUPffwTEyyuvZYVgQoUYhmiZfFyGnv4j7iRnRtgvaot1pB28GeEDM1Ef2D4eHrU8aABStAf",
  "key5": "4P6v4K4fQvNE5jedxoLWYFCNaJKH5wCccKZBsdAK4fqqnsnNZnQ1RW6L6zhLyB7R3GXZjxKKquSkpBKN5qMW59St",
  "key6": "43qUxYJHWFtTFbPsuCZuBsc3LLdzW57Y5d7Jnfw7qmBkozHg4W7sL8G96f3NCkSQGVoDeBvk2YC4vTvvy13K49Sg",
  "key7": "2rNBTqYXHQANBUrMBqbdQvtj4H2dChJGihVJuU2sVHWphhmjR8dRuWUiQotbhJ5p7oLt9TN1yg7idjdrZvDuU1Yv",
  "key8": "BAAuxqgRvaUZmYnDpq2vDwCQMVermtMarpcYp3mdFsRnU1GWZchyZnh4vQJUH72Ek7jS7fpA3p7yS7ghLfs3dDx",
  "key9": "2GT5nXYKBiKKquvSKJZqJ6seFXu6wuXXvCx6aRp7pRiHxh6AWxKiXWjMaysqPhhNcKeVuaxxMDLC6n9iTP5cPPjo",
  "key10": "4Ag5SeDQpbEQd95XU8Cu5cX8GCoUs35hxAjY6CsqwQcfL8e379zAM7Hh5TsjZ1ziw2BR9xmvQQTvNfLZTX6JQYTb",
  "key11": "75VPNPNQGjeZovG7mqEDtwKqN9FW8VuhQ7EHp1NNoQdHZi7AT2ouQDBExykzYGFjanP6P43iwQX9Ped85pVuxLW",
  "key12": "xhvCFcJNsAKc6a7ZmxpYUdktrBVpKoR2Ptbd1mRDzoADKGpehMhcgA4f5B8D1FAESYiDPYRwxDmbwa2YeUz8QZ5",
  "key13": "vUXr4RdFt56XBv8GebACLqNKVoLhoYfxzkbQy6HGTXfGMWAgRiAEUVkbTg6SFsZzspGTawGVJSXgXbkH8k78z5r",
  "key14": "4xJQaJLejiJeNc6s4tmyJoZfEuKDdBevs62Lt1yRJiKj7HZZu5QtpEBDUoxXff3MfYtGDKsUwFtNC2oMaMheGAkj",
  "key15": "5wzNnST3iWH5UCaeJKjcgBpHhNUcszU5f8YXWP3nzVJ2EDt3JUTox9fAz3ggLgj2MBUPFnDXY4G3kzx32pWeD8R7",
  "key16": "5CjuKAZ6e2rBpQ8DNAngZASxmaavyhieFqyFj5WcXthDMGwhwPPxJGb1JvEn7QuJ1T1bMv4iivAwzdEF5Wt6beE5",
  "key17": "49Mj2a6Ms7GPs6gS4uVUP9jyHy4PdviLWi2n1y7KCFzYPapgc5GZcJ5xLV2M2qLKpPEaFvMRQDbD9GDinkek7c6E",
  "key18": "4vQuWjageBkQgJ7YfjQPVF65hYnM5w957AeHpcZWgQSgGFKAAxAzG44VhJH2yo3eScARdue1EBuQSjVStLgM8ui",
  "key19": "4yqYRGDsaJd5S9ebgX1Kd1TbEgmpVPHAFn1DBS7wiybUfJYETP413B6H2ubZdZiQZoXVhZtirB5TV9FNH5H3H3Hm",
  "key20": "NzJSqrQc4X1ZqrJY8yehSecxKXkJzVYQbz1TnGbBaNwVPc64varFmSjUMdz6skuWm5d5j5kAcoUbXCgTPsJSZUc",
  "key21": "3UQ9HUqaCznHhKVweSh6JXRyAsc6xvuWzUVxvxhpL2hQASfGG8j4aYE8MU8UN6VrEFCvTG1V3rRRYDV4yqBNXadY",
  "key22": "4Q16GM6h2ueFM8By1q8VSMKJBcwvY9Gexxcr9JFy9H8jBzqT2K8wHitJ7pbXjhu5mAuGrURNBLTismdTsWduMCR9",
  "key23": "2gPHDaUewuG5bEbyuCj8YAsVM5u2ERF5mVRt9GNHsEWgkrqSjzwxbw41RZ11ESNtudvLCShQLmWmx1nECg4WXgk3",
  "key24": "zmTYKyfAzszgBR9PZPfN2bscLAFEBhJ6iVQLYZJhWcFWN1kBMZFmzyca12SSyiNcroRcJ3BYVYNtAtCwGxXUHLV",
  "key25": "2ZDUTtNZWMXsu4BaqpKLAoJHBzd7uZttGBXiKvidf5nFpE5to5ZdVpWmiYS28qwg5WeVV1RSWmkfVFxoiR2ctcxa",
  "key26": "2tCfFNMj7FHUiMoZja6YiYW5ji47Jg9GKis4x3Ybx515dcMsgX9HBDLMuk2jfbertLBaXs4xkFLnEpLPjqkxietu",
  "key27": "u4HELzUCDpCQFk32DpKRGXgGDxmJJDG1etELZTamifFDz1eiMYgSu9d9gAyX6UmcTFRKk6Zp43sJ1JBYjHFM1Vd",
  "key28": "2oQ1TSXyLq64Bjk9G9HUah5JZzPfjmEyvWVUEe8fAaekmgCPJpFM32V6cD7g351dvacwX5tovdqCeUsPUNF9Wcuo",
  "key29": "5VsLRY4HE8wp65xALprsMpdVxFmbrmJqrn5zTp9AsJmVhLwD1F7QMmGmhjoRJJRdFB45dUtGgs8mpmnn8bdQiUE6",
  "key30": "5sHkbXVJ2xQY4196FnJ8pcVoQVwCWi7sVQQCrpuajxdF6Xjp9wLFPCcU4nyfvr7hgJ1foif1bqNVCNe7xMdnaiZ3",
  "key31": "3HBXSMGTUPM2E94Xbn54BftWKoeBQjxb8Y1txFdmYjDDFY7wwrVnwBeXXvRcpXk6ZrwqfzejxBUH1mtFUcL8c7LP",
  "key32": "5fR6JAuTKJEUYX1jucExkS7UiY7qbPo6gaKNsB7y1RZqLwqZ4mK3HZmA3vFajjTnRxVDLADLnKbJYi8xtixkVA2k",
  "key33": "5e2CdYVm1Nh17tT4Yk93W9ym8uotYjYPmqpEcqZivfkBsiMqb9diuqVmSr9NYqmPybarBMd5XFwFGVahasGyPuYg",
  "key34": "3ojgAY3j4mf5BvT7g9gRu1m4ZrxRnmUVdFy9xsyXa1rjZaMY9J3DzQp8daHvzsEw9wzWtv247zPw9wpi7KMRttkB",
  "key35": "z5L8YtQLsUa6jKAwqwe1x5ydBAFEjQeYy5Gb6AC8ejJ9ecRXaYqVA2rtnjnpr29hysHRSRpEgy5ucne8SUDnzVT",
  "key36": "5oVrp1XNDoMcmWRBE96Pb2LixBS9ohcJSWbbYpFXELpAv1MqkwZb7UnvjhnaHNAhzTyrXosoBJekmnRw13Pxhi14",
  "key37": "jr5CxCqGPd2WF7Vi6tV8SWLrDy7Xr2NKgyps9D2S8nYYDKDZc8YT3x1qKRGZ97735YZd9Q7Y5FDrKsYiezQFf9M",
  "key38": "3NoMC4iZ9EALe1gQmjCpsULi9GpL53y3Z99jweA2LJAVPdwMK7Di6PDSMM3aZ4WvLpxx3dUMMG3mUdyPYLTg5RuJ",
  "key39": "FnoVnKnczLJb9viKjSMg7X2abVAie2CJRuDtBGaZnZ2YUXEGubgW5dc8q8yzPXewj7i5r5ivv67CXZx5e5A3v1Y",
  "key40": "2r1JRHJ2pC1Wp8ptJQ5WEm57x6HvezjxBveF1JarFMfBjKYvnCZuGPXPPVaAL2R89iVdEzVqxzGfcxgFNfdb5K3u",
  "key41": "5NCZxGMacjuiTdG7BMN6Ns8WM9cDcjVgUBkvdtn52ZZC1LKgFgQ2dCQKzHLwaoPUbPkWtoYYjCrPY5j6Wb1vLBBW",
  "key42": "51Ctw5A5R3e9SRJw1DSqJhkNcNWAzNVx8EyHygM5ufMaXjwH5Xti3sFGx7SF3r6nzQ8GiTvFfjU7jo8MfaTqC2xv",
  "key43": "3r8dvBg1scmYzjRtpo2Y4gEmz69NE2GovUkYy2XLe5LbjbJLCdmDk7vmAAAHtphWd38AaRLMxdXokb2TpYJ4k9yg",
  "key44": "2wjXrNNSuCtvqTtNnq95BMPj2rcgT39D5s5Q86vCmtUzKu4cUDVyKdrBrgwCY8ZrsdpKxMDxdYrWp38FT7oQGkVN"
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
