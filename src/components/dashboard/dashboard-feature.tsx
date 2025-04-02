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
    "2c4MN5HL2UaQAg5V145KVkB7RVGVEk8rNqWLkGLBTqgM5UU57c9Cq4ey65SksJ1kAKyk6P3fNF5TqzLpdzjLUDyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "289gEHwbPkZ3K7wUFBct4tZizktoARGZ7jRLGi2Pke66j8Yrr3daXAeCjuA8SLo3gXuSKqLDzRZWmb19HyYmGups",
  "key1": "3tcZzWuEZ8shK1KD2r8T9cGy1RSzhjwCwrLgNGXYnrVjvsY7q8ZgrTSP5fxkn8YdT9sjRRzCqktHybG4ymFk2czZ",
  "key2": "66ZHgXh8wp6uyZDMf9iRRa6D7LeuUTXvdYFWCCqtcRxRGXT26iqgmkTkSbZKrSLBsojZDQ4qkHSmmJh8XuHrXNbY",
  "key3": "4NUcTMGnB8HmoBJVpG4MSwBUjfuPycM5r8f5yF5xWzwLsXML6oYVm7mC9EbSZA3vPksbdviJs2akt2zSRGFQPZwy",
  "key4": "2Vg4eCBA5qcq6QQ7itN5MAkVepJt9BaAJWTMUHHryVS6d2tkQQ8rxLCoH9ckugz2at5rnuiCd38mun2YqMxM87oo",
  "key5": "4kQPdfQyPfYwqa2CwKQ44Nbyuj1j6szq93EZ4uRKj7yLnc4An3PRP1Brmfu1foGVdDMbEjUhpwo2kCHpKB6PtpGg",
  "key6": "4yPKBpzcwVeus86VCrKCpK78u1BeuC86tN8ZgY5RrufmQVj5qqCx8LvtS2SrfHXuWzUePT1QX1JiRmhuEv86Dcd3",
  "key7": "fAZaxBCWHssbGBD91qobPGQQgeTqrDG9LxkAxEQwUwGcRakdaXsSrai18Y9PdQthWwfsC7k3vmE46NozZfneagp",
  "key8": "3VsKyjd1e8csqguAK95Ev4FKZ4nviMesy5WUhYNseCXd7PCmoKvcTXTWkCfZXW9v9VokwyojXf6feaMiiNZfeoyr",
  "key9": "4GXPidYgWuM8p96zLYbrVz7n4Z6LEis9QQ41pjfHpbbGScRFYks9WhKA82HqdGrDEEKwiMuzYLTLyXVBLfn55PdP",
  "key10": "26xonfSMSfQbu2DAnvMgQ7rkkRUn9EbGFBwYevtTnhu5AE2JKsvpWbJWkHZptncJm1GfhALYton2w4tZa6qABbTq",
  "key11": "UVMdhisvF4xcfqYGkGJFKv5RmdzzqzBdXV15L2N6hnfJuJWzeXCgtEdbmoy2rbHUny18q6BUGBQjCqHR2Yx548f",
  "key12": "24KDiZMUqVjKPh3vT8Uimbtd3LthCqmvnYMzUKjVwMk5DLR2zAQkkK5qSDtnZosAbPUCpfGegoSrW5KUgmv4z7Yc",
  "key13": "5rU1yyhy2zsp2sjzEpDKb4uqz5GDjqNMPkE8mh7PWNnQ8ra6ZahUaxi6Se9yFjgkM1Q4TgAjwPZRFCAmi3ViDdBi",
  "key14": "2D2hTVtomZD7eBJfWd3wV1BVKuRbbk8rhSomxifSXwpEEdEi7NcrVKnpDV9X7xCANpanEK5mMJVwryBwTJRoJ6JE",
  "key15": "tWAdtzGQVeKnkiUscaQ7u3U9KSQ4tcz1Ytazdr8d64BG9azY7Dm4rCpVMLLYvag19qxvpcTBqT7QXhmLygQB2M5",
  "key16": "3h85EwDhK13ZZSGV2RaxzymPU2eiem9egmTkU2zvMhsA8XY9q4MFqzvfbszE1uNLELJBrs375EvNCX1iBDQzN7NM",
  "key17": "2Wadf5fFXUP2TzAfBsd2VYEV6b98jdxxxf5AMnPTppcVXyzca7NEgDsNgHa2QWmBSw8k5RaFG7Hpt93MQQ5jpRRb",
  "key18": "55MscXQ7SDDScZbAUdD7zxWREwwwZvDUYhuL43yfvxdHYo9v9mdWpTENFW1wAgMSDxX3bB3ee3YnntH4XHgvVjDG",
  "key19": "5NWoSz6diwHaGWxAmKhWcuS6XJJ5MpkLYAUfSMgpvP23Ve7XnUhi2LCNhoXeGqyKTcSAkPPPimXLHStNZJ9Tckse",
  "key20": "5maaTme4ddMZwwXScf41kaS6Srqj8vcYPVvbRgjs5iuDv4wTJu36PsxgF3Pepk4MeCsnaRCme8HhLUEaLYs3SeHM",
  "key21": "2PKoT3xxsULbw6PD97ZKLdcWU4ndZNty8bv7pXm4ReGZ1ay6bTRAK5FMFfzmrnGfna7s1uU69Sh4J3MwVrSPmnXY",
  "key22": "3P4i3KvVH2egiAfDXSibd5E9X9cLxdDMRYN9Q77k4geMoPQH4nRHHxWH87DQ45TtkeCDRYHQvoK6f5UWgcoUPEqx",
  "key23": "44FScbLELMy184PXWpCqyuKPp7hB54d4aFHLNew2Fiyyw4K6YUrAn5pUVmyFcuJmT9WXLJo1Xj3aQgb7dpN9yRh3",
  "key24": "2Hv559F2ZdSRuG4kNtpXSXrSURS8gbWWjKdEUhz6FZoVgdvKw6NAd4cBKdK7UBXierXFBMr9dU8xhYPRhW7wKwLZ",
  "key25": "58P6Q4fmZLZzYCgFEFyRqnqWqyiXdBqouwNaRsv2bZfXaV85pWnbaDhgSRNgpGtbKMmatQeDgFHcRab3ggUuRjAo",
  "key26": "N8stUjq4UfpPMzLF86fV6SScfitL47mtUuqqYzcETaeWAM7hUpsX6Se1gjb3HeVTubbaDVXtKh5QLc1QoQWSZ8E",
  "key27": "5rZJSDLEEqeo8jRZhZCUnPFwA9MjCrsryvGgncVDGuR76CcW7bzMSY4MHJNHN4N8WqzyXDXtJKvZ45LQ4fzcYBQK",
  "key28": "4mqpG1HGNLi813jZUX76tEiTNrNbUY9yrHHNzMeCyQzrGYoaV7JyPRWZvpv77F1JgPJwKkPDGtuYHQKWdQsC6mc",
  "key29": "v6L6Z5zgkVEmZkuGSL5uKDqH8aSxy2F6eiqAQw93tx3GSra8JkGXWct3kpGs18tuzMuFabLvVv7jAi7PeGCH5yG",
  "key30": "4Hbt4jf6N1xML8bCQZoGFgHSXRDKRgGGpfvVLgN8CYPjTxVrPij8R8Ru8YZ1DrYXTg4tfcuTqjaSudKtgo4ZzsbW",
  "key31": "4ZjmPxQrhF64dorGnuEKabyAuFdQQakGTiZ58QcU6xK7PDLARCYFp9EtUFDwaPGBREnXzqAb7wh2HaZeRAzuTvt3",
  "key32": "9PGS3URnwgUQ9oXWLjQZ6aUBZeaJQJbyLAUAKkP7H5t8sccVVWwkgithb5qTnSXeY2rK3UEUpQFvaPVnaCgf37c",
  "key33": "9dmfeW9xFB2qvskgRuaZC9KkFsJjq4kZgUVNNGuyL2tokGh6ucgBFG8koUtocoQ4yTTMzKBA24TjRkKBBEoqXR1",
  "key34": "3fUMB3TbQ6ydS6wyTA5BifoxqLat3BTJVHAjyu5WzmMR4iQrMM97g4HZTcRCi17rswc21sMVd39wLKNt4vkrUmuv",
  "key35": "3kVaNT3aXZgXWf8iKjCLKrRZrYBAkrh7azNXqWAU9h3PDNL6g5Eae1PJuUQPrT75MiotFsdDfzUWsxiJNhLtbp97",
  "key36": "2RDBaJK8pJVQfmZUC3XeiH4JFPfktWoQbjKL3mXXCvVkGF8LurAz34ATrZe5j7Er7km6gQFZotuwExnCQR9E5kCT",
  "key37": "Tsi84twmbYLL2WcUbKm6tL1P5p4qM5mwipAWdGZ2M1ExBdnCe5tsSwCFWWPtgebPgzE3nPbdtgPvfp6yuoWtuyz",
  "key38": "282jdsoRsJMXwmbiz67HQT4JUHUTzguYt4QBYotw6WjvTCsjUujqS5zDBqxmVN5HhrFRhmwfRyLKBpMdXsCFTBaj",
  "key39": "3NAVp6jxAUjm45nXWuDCHp1XNZ4yDNimYjTsEH1HfgMfYAY6wMj2rVdPWmR2Ah3jjpb6X8hj3czanFyVvfAZzvhM",
  "key40": "58G9aHAWs6GemeLSEHmej6f5yPJP32xY3yrvEG7qnW2ncg1g1c86eFFvEdfiMrrVighGcDuxHDe6C4kw9wFEF3Gv",
  "key41": "4iZLeCVu5oSgg2AdXxKtfonGKCkY3HggWHVGqbeQdsWcbTxjBvDRvDh25UNNBRZHfNEGRT1UyW1ZizhJPxsDZJ21",
  "key42": "2QS4bqGbyp3KC2kywXFoEwaMJnrkm9gW5tuJYhpQ6dfY1hDkwPpjmKEHzsD6nXuy7eR1boX9aZpzLkSPtJ1ZK6aN",
  "key43": "5bgmCuPwjPCxxZz4y8KstmtFsvDnKzW9PWBezJcZfD5h9AWn3gcXRZKdNrHdbHsxbXXhUnjDri7d869kg7q9nTmH"
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
