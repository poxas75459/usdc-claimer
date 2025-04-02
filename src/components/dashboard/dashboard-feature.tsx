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
    "37fh1EYVwg4cSPwYNP81LWsY9ps6wadxYWwfeaVGY7QNy1h1kCpKosjgJeNpe9EWGGKLWacXSJ6ZYg4jboxTfR5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VtGkp8JBKvC1cxyoZgCyL8jGtnDxyxFSDsRZaLwKUQnBFifMnjNVbuRoKw4dfzR4E2UprfwfEAAecw73aDze7LJ",
  "key1": "21Asz2VzPNerg6uKn6Mu5mRAWiJ8y7FMbNFJYUAntnh4d6jjTajM4WNfALkRQJqxNtPcdVUUcJy1nXwXCKAvM33d",
  "key2": "5Jo4g3x4Q1Y5913DuMv4jJjkxdkqK5fp13bXygc45zFmGrBcUZ97ghTM22cGrjtBrva88pomZbCaHsSncesNZtYE",
  "key3": "5XPMpv5w1CbMU8jJBMPq6j7JjtwA7J8U1DiHGg2Gx8cqraK55u29s29xrZhapBgrHJCpq3mPuQzs4nvLY8Qy3PWd",
  "key4": "Z2a6Z6jQf3bQT1vHRQ8kVFb1LCe1GKo95XkcHyfkF2PfC9cPQ7QPz1p7QhszU75eC9fuAktYiQJAz4e3xEJXFSB",
  "key5": "44i7JyKRNuzAvLcs1oCwZzBeSdwxyyVLB2FmEZcM1E79X3CAjmzyrfS3iujbd75pnt3ZFW5JKT71A7yrKAxZBLQu",
  "key6": "e6iXYn8v9sPVftbAcvSzwqD5reAVPwborV35Y7ovRUcqC9sURPu78nF4eaMtLMSPnNm3XwBnWXrXQJj3TbV9N15",
  "key7": "2aPXfLTzXQFNXT4inGj2YrHpugimUb9oBucBuG2GGhUzdBPN2raGzTcTQ1tM9jB54xSHJkNxTjifGWZPWrwDBmma",
  "key8": "3e2vYL86ZKGQMQcr3eH1RVpQuTxvJ25tqo1tLF6d9gPASxSSM71rMtWiCEpFqUk55Gu7KycRRJd4A9uMyPRjBsfJ",
  "key9": "5UNekTTCxfvDPHmSqoktKQWf5RzNoeoPNRRTxYHptNgfSPgGPQQttoBSd5hCJUtGMMjcLiSx6gjo3xBX3TsY7mDh",
  "key10": "4aspxAiRyFT5rVqEh7GfTmxRL2hvmTpY3GZkGjQAYw1aVCvxKrszGfb8pwW8jMVAfjh2qaTwfg8H5G9aBtm6RRpP",
  "key11": "2XMJVsWccq3Xsm8MFDDZMWen1Bnce8vsCxBVA3eQ3QfDhuMQKLxEYSqPjysaY6BgEnDwbK4sPyX3Y3Xmpugm7KbV",
  "key12": "2fGgn8KkDfzcbNsNbBRHseQMRugS3tf14astREvxYrCW7gTW8i8BSHa2F4D8pE7cMJzT7p954pxr11tGXb28hjxQ",
  "key13": "2S4wBjADC8WaEy6BBpFpX5NePz9RopNapLQskAcwRYUPxS6nJUgGG1G1hDWkjURvTqv474C1KPZ5Dt2vDyievRB1",
  "key14": "514ZLctMq9GiwcRTtfaxCbQWScscRzXwEYPTrv9QCsVcq1GSqNokNekvMXfVtQoqsaLkCiCEiZe7ca1SSF4LL3pa",
  "key15": "3nS3HDnuNAvuodzHTMiU1jqwiHHWaMfno5zepzCkMpHNti9jL2E22kghSBdb599uDLkLzLZvwUaAePBv9Y2WGLs7",
  "key16": "29yjextb25tpNnDL5nFtqB3kEuZCF2EDeZ2dRy9Ry9kixXANRrgUkmSFKV9WBhTksnP3rTS28EmfspG6gJeGbXnv",
  "key17": "3uEJPhAyVgrpnsTuvX7wxq87j15cE6STCeThQ6XMpXbyVG7tBAexwsqjE9WP25Aup7Dmked645x4xw6FxL1eP83U",
  "key18": "5tRVabsq4aWg63ZehhMyh4xYweLj1EqNTaY8qorg2VVh9auriZJkbRdjXrhu9kfZb1MeobJfh7NHzCNrApNA5yZQ",
  "key19": "4mo5u4675YhTHBPZqGWnKX3C8xhrSZNfAdeHuRAU1oK38siQaTWDrFX7CcniNzuu9Gq2fin9cmPjQ518JkQoFkbG",
  "key20": "5LMZD4vCprLLiEzh1mZ8kYCx2Tah3bqaNwXnLw6jRcKMjWEUCZXdbYMYYa368L5F22oM4hjt4ijVdzkkY76dc98s",
  "key21": "4zvbGKaf8sTkHckDq2mqR75Ry5y8XCdcZ15ZG7vPwLxAbU9xMNBxX5Bek1rctfqrFXYavaP2rvr6Sv7P98bySgER",
  "key22": "4U4fDWC4Krcd54tyYhwnA2fVcu9E3PmikHRtgnKVkA6MBkMfdvBMYmQRjdVfH1sEAYj8f5R1oSxvofWMB9HaFFou",
  "key23": "b46b1tbywjKfCbJdBudcNkZkQqHFTLxURYD1F68sYG4M5kC2FTEYFjZsttgK1aRhwX6pCB61v8cmzbLvr4MNbsq",
  "key24": "54Gxm4cP4vdWEDWBSYZigjhB6iMERoRTEpULYBnYWnBo71fh8HV1kKTzfDoTX32eC9fa75LfuXa3F16bLX9U84kC",
  "key25": "48XkGQpjFh4wGeGaz3gzmnjE316gAV4XJaGuPgoj2gBrda4sLYpFGKpwHhbWiBcf4TXPixigcEkrsoMUgqw35eww",
  "key26": "5FxATvMFh1DAUmhFDopUk3GFUw318azVLnYbtaq6JU5XEhcP51nUpH9y3KVZXRrf7SCdyP8mYkuGwFQPgBDq7eXi",
  "key27": "3jnL5aRVDpFbQfbQ1GcPeMrCRCzp6f1QwFkmtymxBBksBB6VY44A3sHKy1ZzZUiAVwbm2mUUFHUPYHVqNDReFewq",
  "key28": "3HrmKURS7oFWLsx9DRZByGzq83ZproEyjHZ3mpE4N4APffMKQjJezcCEjVj8EsaNHHqHtQSMr52WKuGgvNE6ksWK",
  "key29": "2STwhJev8Rkqz3YYKHiR58SPAES2fs8388JeTKnBczsqTFYS6STwCiNmoqLbMEqF1tnw8SP4Sr9GWK9duLW3Cy3o",
  "key30": "5tn7CNvY3ynd5W5h39JXME2j6HWrvn2sccqzB1Mrpxwc4j139XcWy93ohLrLx7QundmtWUZMda2qkZTwS5eaRog1",
  "key31": "3bz1JdnzJ1VwKw5ok1YTqPJFz57DTkheQXejkHfdYBy6BF8Lpg2obUSW5koGEUnCJ3gmNmbDCtbDSsGsV2UtFrjq",
  "key32": "3xRUfd9CyxAAVNbaV8HqrPEPsgarXfB4Pp24eyd31wzEGUZT2ZNsxTtnfUrFE1Sz5KxqfPdP9GKUkUMijfz5gXqD",
  "key33": "eBiDTgkk3NhZ28nKQttQC6Hn65fGi127ZqxdBijpovxzz1fuGM9JuHhVjjrjPGiR5vhMYcEqhun2khgGqLF1TLz",
  "key34": "3JA2cP2Lgf3GDY6FfMmPQDC5v4143qGcXc5GDmEmR5hrioi69N8jbfCKe46ZT4pVB2zLru7symrsRUzYcMwVso1K",
  "key35": "5iwoapLEvtWu4NR4dEJysnETP49bNohM4yVapcfUcsPYA4VYZFwrmhjNLxW9cf7K7UVZeNE76jUiZg2xGZbFHBUH",
  "key36": "2RX346XsjXkSURmY7DDcRL54PvLuYVj9HhFvEBVAMcyjtMxP6ZtiTjwMp9JHMQovYsfLXU4Wh99khpboMtxhpZKQ",
  "key37": "26Q4Pk7aNCrNq5vSizbEA1nkuw2c3A1FSe8kuNMSG3PjLxiZzeoBzGqm1sBcR5nagw6RnF5ki3YV3yxgSyeCVskb",
  "key38": "61EVjQZ6mDKqjYUFKbcheANYeVvnw7YAudSxGNUgxjfn9JhX9FPNVMtLCFTB7duJfkTgVtH56ABmP1pqsiMrejV3",
  "key39": "5TU52HCsW5qADJJiKwFb1ssUqfrG8CkMBX52DkLwTzWTfdDXwefXgQcgGP9XusLFMCHAmDr54QT4bRrpWDBrqL3L",
  "key40": "wNZzd8suWhGTxP7Z97vH4UCqU4TUWazhhdCJWY9mZ6bokuJvvsads1JuZzNfzqZmpizKm2urSndsVwGMSVr6dsE",
  "key41": "2HW78RLrTcK2vVSwpzwJY45kJJqx3vQo7ifB1FPWU55wPK88wn2uQHnyXxJap11uivHWsME7Wj2xLbc1YNyfihUB",
  "key42": "5QiqJRgbXDudVoLA2NqtLAuvMyygnaGq2KZxYe7tAP9hAeh2QFQ6aj66b2odpNXmaoM41juWTTK8H3rj4u79kQhV",
  "key43": "4ZvUCh2XUUsERva6qtEn4Cs8B7jgd9jPgnaqiDTvMB4mhn3Loe3Kp1XNV1UYJZh3zYZiLGwv73zDQ6xptAvVvutM",
  "key44": "Wzr2w3xrkZ9kZr7RXj4nK2joEaR7ZNTiS9j27HFQZfrTbzq6dBJf69cwxvBSBetC99x77xcrKXgFgPBCy1KnmTT",
  "key45": "5DNHUFFDNvTNoAMZfxcBCDzgu86B2vfNpS7HMsL26aJC3MWX5c9LsMa3YEAxoAsYVQeruVEBvzbeydnN8fEm58aY",
  "key46": "41KN6UBMbj4FnhckKpRCrYB9TgxVzAUiLFWZTB7MpSwEh3yczbfTzopbqGEsKifV8CgEaBd9EBcTn1uTkSTL5UNB"
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
