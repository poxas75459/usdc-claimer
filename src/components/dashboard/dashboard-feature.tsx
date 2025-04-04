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
    "3c7SDiNHjYBVji8WsWdVS4yeiWi3cMXsUKi56saCAteSpWoqyLN3fF88ERkNgdtJkyaaiXXuR2Y81R7c4R2dRm6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vFwasSDvsmHMHbbzPN9Y9EbbCB9Xoqj1qtD2Ghr5ChabasMUxQ7EULtGeLHmuuxtAHGeUNL2n9qfrkNixkgyLBB",
  "key1": "3VdWrDunvweCDBxd3c5xA4yxoHo5ibTCMcaFNYG6kiskzkXyu4KeBYu8HFART8KqZYHhsfqhuBaf37L4DUr4Pbnr",
  "key2": "5BEdqSkpYvvvnahFqQ3N7dMiEsTpdFNYLA4ifb12u66nL6w61qtnGoD4ZmvFNyTVf9VMbpuCQMii318ovXUvCnQf",
  "key3": "4NKMLKoX2GAaZUmqQ3UZBS3j8bC96SSWa5EUwpjGXCwsMG9FhJz1hgmBf8awjiSSrrLKkKURALvHUAYHceAcE8cD",
  "key4": "5gRLSLk7XUmwzGy4avdc1DYwvsnHtfuipHBuPexw2wNvoVRm9iHVTqX2EYxu7SsFARZ6W3BZjmcKS8s3PxrEhQ8G",
  "key5": "2dsyxJstfYMEDmw5DaQTaMx7Uwc3m7hD5uceJpqQ9WVs6EDaVjR8Y2jxer8isRcBNQCLAF9JSed3HPi39UfyvRrb",
  "key6": "EooFkoDDmRcc98Y8Z82n1m48WuLmdz6WEWugBc2noW2WzuXSbBKH5ad63YeLEQWH3YUXyxn3TRpBfrAqPNATT94",
  "key7": "33ajgD5q55RueLXE7ee63PaisYn85Pv7bJUjvPy9FtiSCiaFzrWf3MGbznT1wjppqGyFqZYLVibPD6fy4acaBnxM",
  "key8": "3wDLbgtXEEtPTwbAYYoMhaHL7ywL3STZEguKtXobqajoDRj21TYyrBVpyH9gWiZMHKDRnBqxYLZ6E5WRZvJFTtPh",
  "key9": "n6papfELvaFmqdNZvFoXitRjgaZ9k8dL3e1RqGYGuGGkpAJjR9G66KtgDLAYRe5asT4CFA2Kwq7Y4UEWe9fPNnL",
  "key10": "eczKTFu2QeunDzjFKnNsFLyYgkyuR3nzxpfLgaYEQ216XUkZgzBjJNFxpVHCCXMbgsXW7zjjH8gzVd2jK6yRSvA",
  "key11": "wL81wyx95QnjEWDDFaQEzHb6zSnj5E7aT8XqWUVGCB9PRroHhKZqyqmq3ifBCRkCnkJx6hFZfpCu2PZXeGdgjuc",
  "key12": "4hMvk7NMz9Ybo78J1fmSXmsoCyvhpZY2aTY7zhgjWjd2zxPrwQroywPvH1PnKg62BQRXfzMjRrkARiXyXAhKQMm",
  "key13": "4DKCePJbknaE8pb5A6gr3iFSq1Z4cZfmDEYWVeBhERzTsEQzAVZ4mSBbCuUbkMZqgwhPUdrh4GHYuSPK6E6SjWpE",
  "key14": "5ACjLqtW6g8ksDykLwF98W9Jcuj2TW8Y3ffj7gB8Tye3ZE116Prr4cwVFnnRFhmhA6AXLv8Lg9ZtTJ9A8yYyBAo7",
  "key15": "2uA4WTexGsk9mf1qJ6D1LroRNNfT678HApzpQgFk9itvLEoCcuWX1aAZSj6Ls8EpWxJpkNcwjFKPrhFpCntbxp5f",
  "key16": "2xWLqx5i9badPHE6LMrj7xPGjusZXbHhs4Du4hw9SRNjhxZAYFJiPituskpiwvRaRATNKr1v6NFFnaxDZorf3Em3",
  "key17": "4LYts3znb1oeu45CKwvaKaXUXyEsbdCZCt38i4T5trziGFJuKmXiYQBiG2t6be8UKLfz3wCRKQmy9JzPpfGE8jzA",
  "key18": "Ks7KuA8y7fWFJEMNoSnmeCe7CyvA3xovkiob8UtbuMA6ydTYUogzezQuHCXfkHheYZACFtte2DBurGJqPBzTVP6",
  "key19": "37EhZjLXXof1AUiMw28R6wpvi7DPJLdtDc2NtMvqY3GsFUA2eTWxnd9c1YtKFT6oUgJYYVy4JUwZZmT5uazj8KT9",
  "key20": "PEHeLVCS7LPXrBKhhXd4tzMQEiUqqVG719d1uMrSeZTkXsRFWTutiu4s6TgGffHgmZLeZqmYCTA8VyUjyBqpdJG",
  "key21": "2QSeYko32LHW9HpmREYaFcobdsg9MQ1fUDoWnEf3n9te5yM7WKD2NrRT24hivyq8x45xbKxSKPmahyPEpfrnT1MU",
  "key22": "4AYj1hQcJpenjN4f1z2fEgMQukR5ZhDd6tLduD7WpWuasjd4vqkLSPpFPqKkVvd6mcKSUYmsQSkzv8e6UPZppKUs",
  "key23": "4GgUxe9knmrdN1HErsYvMyo9ZyJbHDKJ5F93xXUdT6y6fP1WJKxbKNsqWLbzLAnR5jR69g49CKs3VcDxPtwCZ1ji",
  "key24": "433p8ydoWuQjZWyceBwmoYvSQZBUSzwk6m5w8KE98YTDuecivKhD99QBAmZeiyUavHKASvDNqwWVFtbgT8BrvY6C",
  "key25": "c4ygUJnLvW7re7gQUGCBJ5EEDFCi8QPtuUAhcM3Akx1u77bquqzPrhc2Np32DXNp4iT4Eh9JYD5vsWbrnotK9mt",
  "key26": "M6Q4ZixRDBuoZjaUCFgpf5FZiEK3nSRUVpN3yqWa6U3uCK9SYNzGabohmJsDNH414ifthTvifs5YzAQHCtJPW4Y",
  "key27": "4Fo4w5ABsgjAXJKj8FnBPrgJoPi1JMqPMmWQQbMtyCSJz1NZo4c3xmT1WWjn9ySQMm5LNBgHYCMxAcNSVGvJoy8f",
  "key28": "612tEvrhhE1zjxw9AbPxwY5VR7oWR8weJbaThwNgGumcDZJdjPPcveQbB5JVr6t7Aw9Lrx4u2MifReSMK7iidpKe",
  "key29": "XuoYu6NhE6x3BiFGqiTK29u6xKNaP82KkKUjLGXkGZou8yvBV33kRS7HoLQqq4uk2V2oUryG6dv184DsXc3LD1C",
  "key30": "3w1UNxZAyaQwJjmq6FCxqXPAUQHWzaQ4izK2F4emHjPSXnXFLhTH6DNGqN7Poz883NxD2RMBSEDXtStwMWQ2risd",
  "key31": "BNoj3Yp6JVNDoWySN53jDfqvqXNm8WykCFUXeo7faDoFgAEToG9JWouWXju11i8SnDxXWSdc4vv6FFtZtQBSPz1",
  "key32": "2vN9EmBgT3XHnJCtT5bu8kpV3boCt6VoYFGrSEwkMi3BqydhJEwPZRfPgBhHLpfp6zqYetXGtKoS7XThr5qR1Ngp",
  "key33": "AmPcwfu2f4xNPiMviR3LRjo9kAaKdWb9g5CptHKUXbKWcHDwbdkfHdQvk8zMBhsYpNw56wkKtwLivUWya8pnKc1",
  "key34": "WRAFJEsfoagQmStgSM4nPDjyjzshCNG5cobFLQWhi67qxh7NWo9sCK2pLw1aeTnWCZwYrBCK1qweKgAp7bdApBw",
  "key35": "Xtne5hvcKi5YQVayJ93MkoVaAEGTz4FonD2Y5KkBM1AWrEzUJypHKvJC322Nso7UzTwg5GUGees6dZA7ctHmKm7",
  "key36": "3DuVRDmvh8sJrYGNwwn29cgQ9b4djKS2XcztXXkaGFmL9pbriCqZDrx4eKTKih5HbeMx6urf4yFeqtzY1fXBFPgr",
  "key37": "3P25FhpMR9MFm3Z7ryBHL2Nm7VzzBXSsLRh9nQ5gu35nTjMyUJM2j7rS6Uns5ADRu92TnWomRiu2V9oF1gkawz6C",
  "key38": "3UhKjmQiRSMLnQpccVjFp1n83Z3DvYjUDJamvx11udR1n1qHtPgffb8QwH1ym7AS8x9BnB2Bi9u4VHFuw3mdNftN",
  "key39": "4E4VNQWsUv6X9MjHWQVGDsL7f5jeSfcdgkTCc4aHn7Gbsd22Ur2UP1yjJ1c61RvyERup3o5UzwfY85hLQEMggeET",
  "key40": "NDjS8x26usJUDkMkDTb93EZ1gNdaLW8pfaJvm8QBNjJ4izHLVc4ax82VNvM6JnqdRXzsbmAEh2niZVQ8jorCVMj",
  "key41": "4HhXwnfV6gEBada6LNn3Z1a5Wt28CKoRfF1DizJtcKykP1ErKS71yFYpWGNpfih9jPk4mjNvUAjxUNA5LMadG9RN",
  "key42": "3qAuezU3QV19YH42RpF4fkL3XEhiNNXvhXKRnTS3ryPBpKm1s4TiUnN4PdSyTY9K9uwcqwAupxATvP7L53JDhxhF",
  "key43": "2iKXcrQ8cwYrgJ17veduuYLC9T2heSU7jp8kAGMB8naDvsX4n7oTLNKjdnUmSmoGmJBKLytBPodcRaAAfcyh5EZb",
  "key44": "3Pi1vNcC2LJYLFc1WoVjMBK2FoBV1ChurGTXB6vqbnNYAn3xcMsrYtxrzZuZGkwwgnSMgF75BqrejNxe996eHxQ8",
  "key45": "dnzhqsUq3Zj6xeJzWKigEL9Ku184CiguUGZNbSuUNUg9iBS83tebjoAhQgaouxtEty4iAvDtAKAiJogvkUWHjgU",
  "key46": "37m5vuGpnyrd78QoZAb6y9RYcEhdXz18oBsBmdHedfCp3cb5KfBmpLCkrH1bvDwXLmwEiWCXquuBZnemds39PzPj",
  "key47": "2hfV9UAve1mnu8bvN8E7WMjWUhWREhyUBkjZMyrYJDQQdhjpFG63NwZhWHt99Y5KneTKuRiXHgaHMvmMnM314bzQ",
  "key48": "2HhzRAerGqUKeCb1ZCUT6dnpBL55ni73JwGSeHJZ5v5GJDTjDToow6UbcMXa5nWdffa7HigWtVip4So6XFe6Hk3M",
  "key49": "61kXWo1bRHtELnJFjku9U9Hk5952weE4BFTkqwmfAw9jF1Ly6FsYFnRS9vZD6Y9byS9cgbGREj8R39qMDCRqG6Ef"
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
