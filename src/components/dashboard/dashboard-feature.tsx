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
    "E4WCFvYALdx4b2qRUHRgVUHb58kcRCb2UarHUo1KE8YiEa86pTPRUyPSCGj7Zu6zAhhAy2aBLfzjz4VPk7f5ETo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WWPzSntautYj3Rkz5z6Jm7Ad7hfzjLvzijHbEDVkgumZrfEy8DSPNcQouZkYpAPb7Ww99crjJL1eVrzt7pKtwZg",
  "key1": "342VUo5BsavVhR4MTktPfAcBZEnH6LunrPEqGkCE8NkoyyXCh7eEzF4aUq7f9WTr64BT4xvy55edY6o37mibnv59",
  "key2": "7HHS77KzKsTSJoLF2tcAHJsX8YHuprwTkzS3jDqqM5jR7BgJDFA3W9QiJkzaGY884uQ6qcF1Jca3dSFmfVdACCR",
  "key3": "a7Phq3iPw6rdy1cWYmUizNpofGn8KaYBoDv8Ldmvt66JaaBPo8XJZtVKYhx4erXbz31q8EUuu5bzmnbSY74ze3X",
  "key4": "4BtSdvLTFS7mYfXGcVJGSCczZULtiejYHb1GQMn3DB5HeZSLX5wHy92h2f7PXEo9ak651derSmhNKtRkQj48iYQn",
  "key5": "oSKv4q319Voi69Mysgg3p66bhz5n662XgGk2Pi2uxsr3MejVTA3tNhaUsVw81pKfQWpzZ89XwBP3dcpbhXFE4Vx",
  "key6": "2g2P9ZzSms9hhSusve2f3Tumxp9cqQWdeY8q37SpF5FLF7nXevS81dDY8owNiZVR64pB8zGVuq2LfZrYYJYvNFAV",
  "key7": "7qEuCrnzSMmrRUEHgcBZnmgE57NcSv15Y5jjmqfadF8LmcTGxxXPNUjsBXUZH7oByKqjvTkDdPLvVPiS5VgLw6c",
  "key8": "4yJF3FG2bY3w1znw6ArEe17fRZuE7QSpeNmWpjC6dEnEhyBcpQJ76zfo3FzZG8zfLqYN8oWf6EAySJS12i6uVYjv",
  "key9": "4eXvP551xp78Lbwc2A4JyVJGP8SxPZrhChWYW1H9Me7GLRnhauiZ3qE3MmwYxqfst7sSnEbfHcJpFxtwnn7hRKu3",
  "key10": "Mtv1hZKjBWn3ZR6ENoQp5CdEmzroppRiiw9pMdGDAbB9qiDvix1PDSXURDn2MRmxxiCgFtqSdAgicYVLnQkWVsV",
  "key11": "zYKznUsT38zVJwZ3FCmym9gXcaWuRqSBkEn19BAqsCP67bhAW2TRx4geDhhRg7Qk17ZekLdxCFCmHieNvfsa1fj",
  "key12": "eRLMV3nFtWbSDovq4P4RAP8jskUYGFLSbV78K4N4MPsmFtj7ihG7f1vqXEwWrCBxMjXmJB61HaYreyv9yE4QiXy",
  "key13": "3iUKSzNis6tMiZVd1wRyyECm4qn5yi8J3dHJg34wM4M6gfZPoTdgwQBp329FtsVHQ6DLyyD8Rnj5HuYqMNbQB5jZ",
  "key14": "3tbNBQkYkBtVcXqT11hc8BnFgGcRUKSurHRQ78edBF2PoRpnqFgeA4vk39SKLoB9jLkRBvb2GW1W3YVv1UrMWYn7",
  "key15": "2AZ9taxCUFKRjyWA92VymBgdjVNu2QXux8D3A3SC7PKrLGhszHXXzmvvrj7tYNuDnRtkQ8D4CQAkv9T7QbT27uC3",
  "key16": "2S1VbuBfCFsSpYZ1W9zTsThCGw6Vu1RTxqydynaFoBYBY1YFkgo6k7iy61k7G5VuMVTnQ33DbxNCeocDCJBLfY8S",
  "key17": "5anbYguurFSL1NScikMBRqVmYmQq2Mh6GJsGHQx4b1vSJrVLCxQiRxbkyaL1zarua7D5e5QvUgTUKjfkczPjmKMZ",
  "key18": "5bB8wfMEFPUmWocFvAsBTSpqKswxmgSQfMKum2AXK9RwCQFMmVLKaQzfBDvXNTDkxEX7L5Gbu91ETvvnE16WDLX2",
  "key19": "3YawDT5QyavPKTWL246K9BuNBnTJAhb444X4NrUepXuGsfXYzfVVEJ83yezrymqU36tjAYT5NPC2wHbXEQrywKas",
  "key20": "2Z6GSzr8Qiptwf1ECfnz7oJtKYTbaUDUL6f8NCaGmMKd8VgTQDGoTmdHLPjSh32vutAGjz6KhvVyFTk2DeD9MXn1",
  "key21": "4YoRuN4qL4io3ASbGXgCuUnw7yH7wN6t9ukekPRnsTZAVmxuUao3bGgnn2SopdbmSq761G3WDGmfifKWwifGN5DW",
  "key22": "4XCNyCgWNshsdzU2PqeKisngyTzs9Ep9LuPA5GJ4n6LCTh99kos2Xukyvmazf6fF7kBcr1naLrJ5fykza83KVDZy",
  "key23": "48btwCYTjV2HmwGh73TSoXyFCNg2uKWGd4TmFfAAWZxtWtuPtRGxQBh5iRBgie4VVrKYTQWdAC2XbeESgpd8Mkdk",
  "key24": "4SqBe2CGwGwVGJ4vqnnPwmBqrBuZLmRRP1XxytxWbrK1b9eEhArDaWQcAz16yEv94CtzDCo2tqwbbkKwjJ2xW4pg",
  "key25": "dPMJBmX7vXJb1XxKDDbJm1unUCgVgQqY6cLnbPfxZUTnG3E8yZA43emKrgyaYLH2gM5i8sM4Vo1gUpQ6xVTkqUr",
  "key26": "4MSwPAcpBtyt3i6NtX5F5Kc9P6bRrgTFaaNwduz5U9TnEY3dCJ6CP2qdJPEq3BdCDn7SrhAQfvyMRLTfftzgLqye",
  "key27": "2eBjjiutDBHDHaUHSjUPBTdLT6XPuLAYVGf6ZHFKHa7FSZR2F6ZWbguHtJQcGDY5oP9pAKHH8FeYfFegGbL8RgQ9",
  "key28": "4PujSqoor6L6RcHFWV9NzS3i48Rbp2x5srHXy6P8p63VPmEVpzhd4Ca27VDbJimLZQWL6Je3fqXyixXHGN9DHTyT",
  "key29": "QviAZBukG37XackWxjJxoConHALe9gynyLdY8XmdzXMtU7Li15D3RnBLHVSXBgifBLwaNUcnAM8kj8Ua962QHAe",
  "key30": "4brUej8BjuBi3t4WbizuATrvTaFBUb5D6sbFQYY1Qzm3pUti66rWEo38Nd8Wy5n4JybAodmEgfthfL55kNPCuKx",
  "key31": "4yuwRuWnt42mgWLDUnrzSLzRzhjXRarCudfxn9Xnsd2vr6JjCvr1ewj5YcrJyEiTbmo2CpUvaXGCqcyYYzv763p2",
  "key32": "2wiiXmHV7p8Lm1X6Ao6dfyQBRmRyWhSvdxDQ25AwJ59U8kmd1T6rHPtjhgWxks65KvBfTG28e3CxKeChK7srbkYV",
  "key33": "2Z8fFT9UfgkaD4yLchCeADz9sB3ywCxwjZkJW5B2YpKAEpUJuUoKdMR3PWVRYgKJBRi8hS9RN6ByVSBRoCXzeAn1",
  "key34": "EyY3XVVtystpKWQcBFCZKp3vdQBr2WKfxFLgqpRFPZbKYDRiLqu1uEoqwL4y6z29QkAfbqLNvMPFFzEZovGooZq",
  "key35": "3xexyhremQ77HqgWxanQ3ZHndY8bmG1iuBtmkv4n48xat2N2iPhqYn6enhfknUa92TTE96pnkfrH64CQ6pkaz7fJ",
  "key36": "2VtPq1WyfmppQSkcsSeMP6SWNrBjp8Wt4EWNqCqEELZtarC6UPHGsjqeCUj1KfmUP2cVA4Wo1egK4AxPH5W6nSAN",
  "key37": "gRcT9aBRAmRg4MUZuYG3MQjeJ2RQhdFf1BNM8GRQPNugByiZL81mQuYNSbAG94AHZL6aBhzqopDNAwayicP596x",
  "key38": "4HZtiSwyUWyVNRZNVYfqa3jxrMtpk8Qc6aQmPkn2jwsUsRKh5Yrg4cByRcxcth66NvEM4A7YDWEDiqbzZsKXqhM2",
  "key39": "4cRsaH7ufUBJpKYcBhawivpvxaZYw8thNcxGxwBKK2omTihfgM88qZcn3hAAyUBRcYJZokEQ5kw8ru1JPExQ3XrA",
  "key40": "4GCkKQka5qSpgFpyi2umNd1J5So5uXAccouGLeQtxWcEtUDSwW79uvQwDnVGkosL7oESb1ijGiPzpDGKPRqMbbRo",
  "key41": "dCipavWv5ERZRz2TWoeDVYsP4Z3XDBSrVXAv5z2J1BNv1Rzj3qkH7BVAqi5mhPdUAAdqXBfx7rP9YLswnDBxV9a",
  "key42": "51ZEA6yLvq9R6Afq5UCxFastxykk5MHZ2gPGEmFZP7cePXnKnAXCpzYiAQx2b7iMet8aDuSiqb3YFxLBTRwd51h1",
  "key43": "5Sc5sUpYjoNhrJKRTJYgGRoKJGLG4Z4LEP6DVLHz1KQFz7BeoRhETtzdKeqY5sSELjtLMTDKipVyC3DcThQwJpGh",
  "key44": "3RfsACKPFsB4R2oPUZNdbhod3Dn4zoRoAu7Vjfj21e9EX3xVRtUDjqVpcETCzCHJnnZ8yMtWjtuxniUcvqA4Sq6y",
  "key45": "5pFdu4zT8mmrLstNhjvVA2pn3nQZLonmGYsRjzQrBtq1ekKa1oLMp7KoKaAShTt1LsS2kQDtY7ci2C4jR8h4Yqvk",
  "key46": "2fkWCbG56XmH8a8JA3WPKNykvkvhjY9rXGw33S9s5fiFm3qfufvrNKRtFL8yEsqozNw9TbGcvWVway9j6U8cpXhc",
  "key47": "2h8RBabaAPUzpQSLQkAc49X36mSJfAxDBqRufM88AtoXNtNHhWNgcnL37AeCvoHYSsbTyumpDWBGdjLn1U91uV7u",
  "key48": "5pEzoLPkHqsUwU1RLhXvqAgbLpbKCpZa5oDhRdojDq5Ky5grSAsjgYqhftPK1SqmfJ4oGGfU9GM2DJ2x3AwcKE9r"
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
