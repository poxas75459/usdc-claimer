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
    "4xb4KFPxt7cKD22D9aqVqsdr6jfjVXUtnXyWM5hyYo72r7hn8V6Sgor9CJEmMQJL3onmm4GQkthsghRCM8B59ghH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jznk1naknYyAnfopiR1dM5cF43DCMHnDb565Hn8iFE4S45gdujaYdZDdyNQynKXXju7fjMnmZtkpNB6opkdqGuZ",
  "key1": "3LjkAkQRsnX83CaUo5q5j38Qd6MnNzp8A6Lyq5Fsx2NLytAfR4Y3kFTYzJQfvCnG2DgHv7B9rGUgXwwQSVDa5ReU",
  "key2": "4fQY9sodDXSXQomksAEwJQoyvMtEPUPL435qzVXThDHnXvwLcdb1mtwdCDr6JBfZpaDCxnQjNAgCJYeaTTGhp7HD",
  "key3": "5mXag3ksaahVy3en1j5JddSbN7WvLNXsqYzhBeakbPurfp59WgqTz6rTjFdnA4vRiB7o8t1xdWj5GuU8vSkudru6",
  "key4": "3jMKC2YvaHSVzdvvC8Lks7sT8L4DkFp2KMXaqyZQtf7xBEWTBHc4ZMsWrqLWWERMcxELFcZoKKsgkeWsiBp8VnJJ",
  "key5": "4YdEN8FTVhuufm1csSDmfSRDe1qar76fF4qYLdSqVGcFcHXuDchbvS2TDEqKDEu93CAFWvaWudCdfYRwD3LfwuS9",
  "key6": "duouiQjU9PuBT3RUazRaCPYatkqHNo1gfyVAaBnwjGzkSJ7VSyGddYTn9dwvTGuNa8ZYVwr54ZbgLPr6iGGvrvd",
  "key7": "275H9ekSK6dHUj769KtsL9akY41Av8KAcKmaK8yTKX9CxHAjVj73QBXXCuakBZ5cWYxmYywRmGFMSMMEhdPhqRZn",
  "key8": "2GPn4SiaNg3HT4n14P7fN1iD55mQXyk2JrFnd7PETgc7tP4vp9raTh1puxfkTpMqoyZXW6SKcrnTbGVHefAB2erA",
  "key9": "5eVsBHgW2pgjQyfUWWGmtjfcxaMYg9KvqMcNaxNxkvir23EBf3Sf8GASX9DmBjAU96zwHyagB5XFs6vV2Gt9DeaJ",
  "key10": "2Rbq5LgVefqJP2EGuTekRn3NRRUjetioZRnTCJGyZoqywKtXXJMaoYriaHz6o2eQs8xVW79PRjjhrZV7MAvzZPj3",
  "key11": "G3aDyDJPBiRbnEVG7ZRZYYypSdwGVAcPiz5fV35DkkcJmYzWPJt9CeWCaFg2HUUdcwkqMQjA2vzRg4q3C2wgHQN",
  "key12": "4XWCdN3UvaJWEgw6rrgnsri3xiAwPPE4J4U5szMK1atBzXRmxvjZUW567zSnKVgFaNfPx1X8BRxzh746oXRniSmF",
  "key13": "4ebyiSpyXT5j2hycSt9pis8rTBRafwURexwapud1VHdfqMS5AVvH2aHV3HEbdDpX2h9E8oCbst4KUBQ3h2C2G4Xk",
  "key14": "2rjss9nQLTsiLrweJ2vgzhSrzAgRged8fEHhNipextecG9yAofkUCxSxrrvehr65C1ftKQ8qdVJZnRpTTDESWNPg",
  "key15": "eqjXU6opeuho3FuRd1b97kyDkFmuzeU5YSipEhNfvr7QZvuM8kE1d4K1N4sBoo6qdxkGXzgSiNgqePdu1XUZsah",
  "key16": "HCMmYs1wjARvCQTQ4zWcaeJEh8tTE5hqM1ExR4Syq1EDRySyoLCbT7fYCJqiankH3vPG3jXf5zokZzXJ4oJR9xZ",
  "key17": "5YQgKDD8jzY2J8bXwSujHq9crPtGPik8Lw81DKroarbsz4vbuyf1DPTXW8BQaTVunGvoo8rDbPEBB4MMZvirqa4e",
  "key18": "ich2wu4xZSDJ7gowFAs3c49eUC9TNEFjVLbNVVSVJRh61q82Gmkvc4PtGdtLzSEUkaTL4J55bmAC2LrsaufY9Pi",
  "key19": "3hLtJVBtoagVHnAdqUL6LR8B8nio4UHsXu3a3TuG47PDGcvV9NacHrZMdnAYk8oULgV476CQXyKthCtVJSUxDosm",
  "key20": "4XhXe8HBRt59yiyDNjo7yKUm6SpCUNGTATcuofhqUgeiYUmntYsQou48iF4yrKeHScmzhd2V9FC44Xwtg3TNYPrS",
  "key21": "3soiWc5AtAPFsChmxNvFFU9Jb1PgvFYQZsjQ1DAfbp1cJXNWDTZYoxQjo8XBRSRNAnp1egR23Jdtm5jg1HyPaFiq",
  "key22": "3RQxsskhXfDvGyJWXvPuV8LisGP14rQCNsjZMVwWTaEn6FLyh5n1dp6LWudzKM5GPA83Tmvj8bKeGcutnfiv3GeB",
  "key23": "rpA6mHWS3tWTvHBqiNf6pabGTNNxDWQdMVzsXkRzEx1fVjRYDRa1k1GMdHm7jxRMAociCQ6dqtiW9KbvLUJdAaE",
  "key24": "zgzCNFugFre4NjREnPJwH41mKW26euYn9XzkvNP1cj7dULkvZBUgNCGnuE3bFVqHS8Y1yhL3cXhSRbkKTGWyvd9",
  "key25": "J47YeDK8muLQg7hxD7sS53ezWWTi7uixDq1Yx9iSWjPkKc5YfjQ3pyUp3nHzHKxmAmnoFKtk9bG2oNL78emfLmc",
  "key26": "25GA6kU3tngVjUVcMXAVp6iapCitFnJf4LCCfX4Y3AFx4dk1Zg44qEdVYrhH4HtStNp3kvWq4N6mJCmiZJrYNvWX",
  "key27": "2cKiaohq6eJBcFPxmzFCzob9x9k4Cj5sZHKAhfnAYLcipvWi6VZmTeYaSXdpeNmMXdKRgfB2Ugdq4DodG1TNQVzn",
  "key28": "LfWBx323t3mje4jjRCCuk5iK3GssjdtuGG9NfRpd4wda66oYXPvwTXs2i7nLhZjmm6hcwoEyDYZ3YE6y2AgDELR",
  "key29": "4L91wyCCESW6ncqaUtvY67dbvJLWuoXEjnvFFdPQMy3CJ3ooBB2r5VgkFVs5qcyn2JdqQJSVApgAk6W679Ztsc2N",
  "key30": "rWKRdvPXhFouhnNmaGsLL1xCcHPGDcsSHedNzzCiJBk79RHo6gux6qzN1YT91wvkXFUT41CM36FovQg1k2Y9Y3v",
  "key31": "2KVkuPNhzjAoxcvhcNNF5sFtQZr7U2RxhSfRxybjJD8riHxG8ofLDxi2xC6nmqtQLdq5VDforBxWH5URL9TH5gT7",
  "key32": "Lx9FtMfj12amNw6sfAK4cCJEjMKGL4tLxNLkMg2TXa7tYvW1Sk8PcafTB6rsGdTGn4swLyMxRKfrxMsXpSvNLqT",
  "key33": "5K9p34D5KgHaFHFjsHw83cxXhJn87xbmTYRKyT8tYKb7z9aWsAfYZPJ1WGvgSXQDRk8bH32eU9XzkUkQ2FNX1XbL",
  "key34": "3cV6YUR8HQdE8E7VWMw3R2jtzBT48igcRH8od5ysMcagR9gjghKrCsQSzp9k6wk2Gue9t7zz5bJcy98q8SeST1mt",
  "key35": "5fnrMqzw6NfBjbsLzMapUtcgxg1QDFXXwtcmuLJyrAupQdAqTzmATtYh4tHk6WQup3v7Pdv3rBEQNRrsL2LvjDti",
  "key36": "4ct9PRs42LnsAatGunzGFM3wkqoy4AKfdoCgnPc9Abam6CA4FUS95fLgYxFsW32cn9ua4SHm3YykFEpgRNYWgrEh",
  "key37": "2fH8W9NS3QLCLakpGkNrJBf5rYcHFkr4z1oeshyKieGxkXuuvj37MyzxqciMPzDxbk5qsayknvxcAXwLKYJx3SJK",
  "key38": "31YDkNwWxE3MZCqgRA7X64ukAyTBiJMTLgJ5ijhaP5Czx5gt9c6oi935yBrp1XTPxS2qTmepkoohDMPkF7tdf2D8",
  "key39": "4946cm5YeoJVP2B5uGBSEzXpMhwbwiZ2znjQfeMe2dDUSPnDvQMNeAvMQgTDT4fVELe1bQMrSkNuJe48xbDQEfkG",
  "key40": "4fSRVGVDXXECowAJzn4rkQr4xyktc1mb1qQfNhsAqQwoWwrqJ3ffD8Bm3FmuwhTEjn4qSzuKHsDjWP3Rm2LxHsn5",
  "key41": "64viGrCkUSopxcsqaXgbyAP2azWN13psbkrvennxa9uU92AThu2abKyxtjwMFd9VDbp7hg43Kc43yfqYpy3CYUKS",
  "key42": "RvUPAmPWv8ffCR1f9p2MzwkVQUJrRnSsWZ9am8dhfLpPqU9awYkmJq5QgEnzutPEJnnSsywj7JSnCZtnsCdKGKr",
  "key43": "2rFExz4QdQgodvHy3AzKVk4qfpdyC2ZenPfxwGRDuJSSCy2Pe6SCEKzjo4LxBJpQWwcbcVxdMjpHLxhR9GaDVWK3"
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
