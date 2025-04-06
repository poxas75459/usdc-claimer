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
    "49VeoBBkrtZcpkXFB8zv2tfJFzLqjozDjH6D3dMz3GWpfGk8YNG2zdFFmrqrvTFUzSNJB8Qq3efTB6M3QbFLSuiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25XygqRpvDjPqeVWB9MNBbsVtHHZWucTGYVR8y3UyvZ6n9rs9m98ov4bS1CuPymTNwzgpCbh3cPJUtfDdvWMaonq",
  "key1": "5MvbtUd4ruxVo3AEy1vC5QiPV5fSZ8kywBBgU2FXhsu3C6rQEiZSnRJbyMESx1F811jhMGKpRNtJDna7Qx3aBuCk",
  "key2": "4JpA5E89SAbvJeHaDMCJKrDy8fv32AXoZyzufJ14pU6RXfnZoWyx7Pzt4F3nQpCKUdbdQZWNrki9sQfS8yrzSZhQ",
  "key3": "6481KY2NzmvbkGT62iJvNZeJT6UietN6QnosQu4LYkCGTHjESyKBEwXpAPEhosMR3wrd7BFz8MDmz6ot5M2Zx8Em",
  "key4": "2pdbRPyoCX6LbNzpTbcTPLFYLihbUG9umSn6MPZXGPYinuMm8zPcFvTcHf5kzkd3JrjMNRWN7sULGJLBBA46UucC",
  "key5": "3GnHmEg2Yp8Q5WwTxZ6afFWsZynkTdQpapm8zVrd1Ys3isCfjGByxqaJE9eXFP9KXgsrAzgVUUfML5kJfF3Z8La3",
  "key6": "3U4mqCV49meFv4R5PEibVKbDHjpEzznJEQ3u7H7kvcbs8KxnBqAPX5s3c4yENoiJ7Q99GHDsNKLqnN581PPZe4ct",
  "key7": "4Fk6enGEgcthHBhg6VVcGx9YbQSD1XRYSb5Qc7eR9ejh5qon9LL5gznsbF5DvXNQduCryaaErxaNxbbEjzy93in8",
  "key8": "2heRLm3oEjQ8sus8LbzAvbgjEt7eSDv2WuV5F3hNVgd5eSWpUsKpvrTniAE42eJ74LD88xsjeHbBEJxeDfuoE5Xn",
  "key9": "rdUFG4zBmEuEFBNF83iMPVMh2Ya6TRmWe4qMQ4UHeL134gpxUjfqdiiWX93PJb1JWYjQQLGTLuzi1KAY2vfHcjX",
  "key10": "5Etb2fujfxxvE6ZqB16aphFwTPLBWBNMYFP8UVeYtAiLs7tfgtr8SYQcL5c8QaTGXAkmDzNzmh5mzdT2j6W5MQW1",
  "key11": "3dpQ8i2vRvtvu73rb4LxDYVYFwHRfCaE5pdHaWBuwvPKdUA5TvL3C9R4pj1UdeyrmZta85rntfiLpXPKwwKohCRU",
  "key12": "3AGyfTEbZjLbJA8nG9oV3zBkfeGT22YEcb1ToxoWKM9gnH5bfaS9r33hcv7D2aW7bUEmoWoaotcreGC31u5CDtSC",
  "key13": "3hwiB4D9YvVm4ByjtYKDPeewyGJrLnz8XTNy2w8PuTsnPE4gao9e8WbjYkSTTjntyVQVhpCTtpnsNeerNyJSbFgJ",
  "key14": "trzD1hsfKHoed1j3MVPLDUruE8q5JK32W1sKGQxSVXKikuvtHhswUheGL52EoJKyPAuHReGeZB4t787VP6eVMKf",
  "key15": "33LpCRtovXbifRQ1ULwDmZ2TzcwGJrvoorTWgiSxYDnTt8WdWhoabEsccXGTgqo981R1RShME7s4RCFFmfVKFNcB",
  "key16": "4PiJmr8NWV7k5ohyyBErx74EH1qUXFHFFKEZneRSMstWSZHRqvefHaMax19ZDu4NhLP9xDXyxgtAn8VtscdK3g4J",
  "key17": "4kUg6f5HwigHyRQJw4WbjmVRd5F9Qim86snVtCtmd5G2tM5V4BKDnJgtfKXdufzsgyU9Tb4V9KhDVZNRg3Mqp85G",
  "key18": "2W45TNHxr93hTNoDHzB7mMAT44xhzDHUkNNESTybBJ6ze3eDDM1dwb14mv4yxGFwXphuwEsu8LJu24v659euq9XN",
  "key19": "58fmQpHjkZbd5SEV6E9Ax5JFBnBeNvGQRvSLe1nqXMqy4By7dWFk2a4vHrCCfcN9YdeMofMABiZTsC7yny9FdXp9",
  "key20": "2RXEcQ15TmxKeJPRvj9WoZxPC8VESQ9pieJF5ZApAXYBLZpSjqBeTaUHueAEyQpSYg3FHXWDBVhfSK5SMAZSbY9h",
  "key21": "4rFd3fK7vpacRsk9sifTTPKryENNGQjQ1dmQBShDDcFCAMyv6R1PF84CcaW3wWXR54RrF4dowGSg3ojkoNChfYWU",
  "key22": "eKsCTcfkiLGrq4NpWXQi7oU2yjCmBh52sAL5SddLsaWTodtwmHGg74y9gqLdX6MNianXTM9CVm6nJUdEJkX7WFm",
  "key23": "5QEtcCywiHmjJ6PPdqixR17aAxAdiYtXL2fWy6AB9X9ASNUaBNQVni2nFwYFmFRpW6c1EX3fBSdFntn9baPupGGq",
  "key24": "4tTzv68wZ46G76wu8QVe7VS7gJ5tRKEXMLfheyH78d3KgoAzvucsbzkgUtrGp953c11nh8fep4V2VGco1xQKLGMc",
  "key25": "4ZT5XJf5bDLwCk7uXBiCK6Xus77kpsHJbBk4cGsPS9zY6aBZoKRVm4AJMT3y8rzsVciax9vXpC2qqjSPDueARdt7",
  "key26": "67krGy1VjviRyNByjvBqGZEqaRssfSKWeVUAbWZsjL1iCvMwR5DnhJxpXZU6bmpTWDqfsxP7XKvMAcBhKsemDeph",
  "key27": "2hYezGReGmFnhRMPVjj6fbeUHkhpCYwyQoqXhnGi9UAgB9uFVRxyYUJLuXiuHQgTX9PsABQLuWzkgbW9aB4Wi9VG",
  "key28": "5NArjRKx2pGe3rsB3fTMkppJk99v2ijoHUXcubj58Z2hzVdHKysJvnXz8MLoB5z925ued1wDypyYU6kt4nU7VuqU",
  "key29": "fbJpPZu6vzEhSu9kLBtKL9RAVHfGHwvYeDNjBdFegUmcfAprAkYpNPBDGrrXMQrQBmZV9CnEA2K9pdo8L73RCEf",
  "key30": "4fSDo9HjYFmpD37UY8mYs7KaPqLbaN6rjgZiBx2LyZwXUgeG8qZrxEZhUXRLfPsEShT3RsXA9ZxSRi5FBs1SRcAD",
  "key31": "5xnyrvx2DMGYWM2EuY29ytDH1AyvhA4ZgX3XHLbZCN1j9hGo9fkYUREbeMgGzXNPji46m6iw2M952QF2LZTP7xXE",
  "key32": "yU3Qaxc49HzWoMZ7bmuT13fyWX1CykEzwY9oQBS1j7BQkKFiP5iD29wAb1MQGCdUvo5jAmwFGdWqBEg25KPiaK2",
  "key33": "VCLVVZeXxEaR2AXcw3FEa5WWqgZKdK8yJDXG9XzrTTCm6vwVULJQumfK3UkQoRdBP4yZegv2kRmpNDcM1wKvgPX",
  "key34": "4TWDcY7NMUZ7Wmgew2Rbg2zrpGY9ZFQ94Gxin6xPrJdvwUouuarExchpJB8iswE1ftFhCivkqJcRgy5xvQMTz5rN",
  "key35": "42vt5RkiRSkYcFpuaBBoiGXVarvLPVrjtUD1ocbSw9uXW4f6AyMhFa6JyVohdc9mKGFSCaGNkn7DNjV3iDNqJ6CF",
  "key36": "5gacLbnuSms5tPyTWpNjHq1GU6Nf8SxWYYfq6bX3pcebCNrKHAphHxrK5sWLfipFkWAd42ADTs1V43DjWiJ66t2P",
  "key37": "5cvdKh2KbuNbJDA7vjYhXHB9pjQUhZx6z2z2RXvi1MyEtE8xi6Ww27CF7DjRh566Ys6zMikA9Xx1jDUwtefpwx9x",
  "key38": "5Umd4vX7sTBU3EoYVHB7tEFWaTbXG1ddZ5hBpGTRmYFds9VnQ96oh2WbhjhQ592BjR2nzfCPEmTroFzHG1L2zkSu",
  "key39": "5uLjh963SgXmNjyfGLdfJmUjdw7z2htxpFxZyeJdeZZBcRKCnsn7k2dNusqFNqNiyh5mK5FJMZL8RMKFKqvHQJ7Y",
  "key40": "52xA87vPWsd1Z9TuKiTKcHt9zWXuMy9X6oYPfoVnSDo1TQCp4dWFdMkETiUqPexAzu2KY275VAumjvPfzeLSpDYW",
  "key41": "3eY5zLSBhfY28yDzCaZ6bz1XziMuVcfmf4nEUQTGrxGYPnGNE5Sg3eYALeUwLuLiyp8aNQHRzBGeLMwGbH4UAoez",
  "key42": "5jDHbusZKHoP2eDWFtWAc5JUPWuVi6PxndjfEJrGCGimhsNtP6NjNgaT4Q2c9qJj1J9ZLXti93f6EE7HCg2uo1fa",
  "key43": "3YPxVNqdEijvxcmzJTXjATaCKwBf4x7EC6GYFwpjFzaNDgDDQut9AQCZUqfvSAAu6m72fNGeVwU4wq7MZj4bKNHt",
  "key44": "5psK3jKxbwY6mVkiVeqSjXpmhb7VLsuzbH4MHVij3Rhv87Gps6C14Sfat3d6LVTsG7ctNVCHbBm2UGpf6F4ohFBG",
  "key45": "gJs7BMFGMwNJwKspkd2ceb91dSaaGkKqA1nTeZphJTokjNFCE1xN2Qac2MUKTYUY1751gCWqHngmUokjTi4dVbt"
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
