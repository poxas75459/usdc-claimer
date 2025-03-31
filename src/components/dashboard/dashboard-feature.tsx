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
    "4NWJ2jX5MVY2wMTDDyKQRVvM1CTfjrD9otR692MmWAtPVWXFmvsYryVo4hJnm6fBAeA1AK11LtcaQaLEsyHYfWeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59d2sMSyBEvnwHTpQzjWb7RsrXfAhjJVeD2e2tQDZrYG3gsHpe3VTPXL7gkpDykiDbnFD4DMm8Sq7sqR6nVFbRV4",
  "key1": "5kMxmmRgA1HYUHqHY2RPSFgtpvVY39ctQzHntmc5xqevss9cgxVTtYgt5rUdeAtiV4RAz9WVNNHkp6w9z5xA9tpH",
  "key2": "2UQeVABBaMbV5a3cY6ozY15hecrtH5aonBDALDXPYuhMQAACR9CLyNtHSSPeWNrNmW2bZAdvTARMjHSgqtR1h6Tg",
  "key3": "FJNRZ7RxLpg1W4AQdQuD9hftpCVtAWKpS4oaFZs9iG756KzgaxXLPRd15a1RDYMgLC1QfN28EeDiMzLCKj3GmDb",
  "key4": "5TSn3nC3mp1XJ1YxvkW6k3jzUyyVExuJ3V2dRYgmmq73vvBD6gg4c9SpJ81KigjWShC1hosN3uQgWKNDvsiZAtzr",
  "key5": "2qqv4rBPZX83wiMNBSkPD78kfJYj89TJcBHU32SCkBxZobEiMvjP8EonhsAV9rbTisATUC9T7MvRmJSh7KyyaqpY",
  "key6": "64vNDhFzPy1uFr3xJxgdxfKJbjPiN9RyRibGEKSsk7poPTB3i38G8tbzfdWvNxEoxjgn8GYC5MdbDg5quV4BKvnx",
  "key7": "5meVQY5CjUbeLAfx6rd2hYoPEypt21A4JDpVLNwvCbijES5KCMLL9W7XyYp6maai7tDk33MnMpq8niiouxiU3NBM",
  "key8": "4cuBQQWREd14fUj8f9HBdfg1WD9gUMVePPHAff6JUvk8hUqJenS4LAvXUxc851QMC3KCPuQN64M8ooAGn34AW7bK",
  "key9": "3JQZSz8RA6htbFHUomygcKDrvjDCRk7mkjh7PbRJeoo35UAW9X4PsQGr2Ge5gXE8wi98RUdQuowFX9RkzpUdH6sz",
  "key10": "3G9XXQNW6VYHxwHGCcisPfwcBJ1fegisyUTnSBRhfdCtFqV7qMHJKTUqZsfJweqmVh5zCfjuRKoPKSyXmNPJ1R83",
  "key11": "2PX6WLXYL61RcgfGP4YkJRTkb68YgTedroM7HXT1R7workWpooYgASxjfmyt1FZpZG8m8gzYNgSCyas7nA9woTJb",
  "key12": "2SJeuqAjgcFoYvbMtbr14PeeerpPXhDoBDvfFApKjd2KJpQG6qRngWUn95oaAAwqF9QfPm7hGv8yjPSrtYjzLb9t",
  "key13": "hqh41uKzpCv2xe4Ab7DcBxaZRynmGJQhZJJ87LfgfJfqWC8wbDBvRrBnLNVJ7HciJ9XbPeAK1xP457juZ5PHbvX",
  "key14": "4gaAkayqbtzKjG3TVTy2A5Tb2jtfj3v34SwXFeJ6DmSKT82hB2P3GbtUPjJGA3nZeeu9bKSq91NoHbwygJ2qjBa8",
  "key15": "2VAWMS8d2fDqgxWE3hidhWS3rxgHfAbyWq6p5EbBFBNSbyN1acVL3t19r2vt7m6MvithhTkfxuEFuz26EfaHFP9b",
  "key16": "3mvUcqfn1EVAXPeUxXa1QTfjpCthkrydqhtWEo3XKm12VWjJNapTgaiai4pWj5jJBNzadqvk9U1aZx2PsuKWRsep",
  "key17": "62udQzzeAcTjebh2mrNhrqfUuYPnpQ9kJ6fWPWaADnfkCoJYKz9x6ZQfWbVJST1oTumthBkpZdbBbAGUXxQkM8vH",
  "key18": "28ure6Hzdu5yM9i2ZqC9BWqLZ8RjjK1TTkCfA3K4Bt52FjGZg4n5Qi5kMGsk882ph85nvxVgK8WocW3Kjd6pGaNL",
  "key19": "3AUDr5a1RD2RdvX8u7gqTsVWSujjKZmvtT2rJhUF4KvkB6tsccxw2NEmTEA4eTRzaUV6vDcMBckp6qCtRwdYPt6S",
  "key20": "2UYYMQVkCAJopi8q3wXUPwxKBiVue9ngBPSR4qUp3n1EFZV1MKcpXZkxczyWFjYQQShcK4ncFKkGDBsP8DYotjXU",
  "key21": "4UjYgEzYfSSd7AZhH5eiR2nhJtpFoSfYrqqn7P3fLLW5DxKVyS3rbtyQPEpWYephzfyRMTG2fXUKecAi7C8aX6TX",
  "key22": "2XX54T96jFnkvJx4bNStc33B397VC67A2jFuaxAnRcyHsBmjVtdDjgMep6HpfeCeZ3KdHYS5iGjUoPdcVGCAV1hW",
  "key23": "guzD4SfWeGmXrQzAa79qQ2xvVw8Pkh6V4zEFkX9gCpFU3J9YZEohmy2Det6o4AQxHmwTdjWkXK9yBNuRWamU9VQ",
  "key24": "5jLbDuZ62qo5JkKqKTZtjnnaH7KbCHLKZie7ZWLN9WbLRcyLXuGoSQwuKMoW3PzGqsEwNMe1MYpXoHjcNMDibVCG",
  "key25": "2CT3VWrPMsqWUk196jCp84y12uyLZbzcqtQ5we3DBWYdf2vrmxhupZUDpH5G3x8uquDYeZwYePdsu8QnDD5XPWTE",
  "key26": "3UnYqNcvizA7cF7vtKQ9Jjx5pUHQitzR4CyCpTdXFcb1iBFkNudkcWXsaTcFJzSVp6s4p6VbyzSiLoyCdjHbf13S",
  "key27": "5491C6vZWHVZQPtNCibaGbJKv9ZDqRy3SgqaydZgpPQpCSUxiZKaADT9vuTe8eUHtCdoBULqRYdVwj8ze2kFRUCN",
  "key28": "CtwGMiz81ju8wDyYAdLcX9qriMCheGf46r14PALV7SYXKDpzSXuTvNg8dkUJV1EVK6kS6gyhyb6aBBFmGhBf3cM",
  "key29": "3GgZrzJ8Rszfwfxxk6haTAmPgvw39eF985h9KFB5Evynat6zPEAgtXrPNRPRPrkGTX3jnf8PR5Z5sTPa9Ha4YNQp",
  "key30": "2Hs7nn1DMrysUwSSx18rogW78EAxnomb2DNvuuBp3CzXkaEEgFs8vG5qqe6VfmUyKMwmTTVNG4uGEwFfB8XKyDnD",
  "key31": "3Fz1675B699UYCFK2FuHWSthbKFAnea1eqv6EFQ6RFccR1v5Wzbp3JdxNqW87QZBWNpgZiV99UwYV8sCxKeU2Joj",
  "key32": "5Y8VrAuJskH2UHfsz5MTDga133EPW8zTg5W6qbJASrhAZXXWEHLaARE111opneDe3xQgweXNxUjYSjmJC68iYiCt",
  "key33": "UVUb7FL15NSjotbzqtBVJg1rjqB3sV61z6F5XpAu3o1SHpQvZv8y2ph1wULDcvT41kMMcMugZNo9ewjp5BPJaFB",
  "key34": "3c2uyZU4fBBz3nLHRdj7D8SCGUrkY9xjkLiTnXTy9bBvu5WZGkzrX6F2ZjoQFRuRHutdSkVN2iY2podfxwoeH7FY",
  "key35": "5s2f6u8kFNUacipWgvBZmaPi7kHEyf7Tx8wVPDt7Jc78ijmggNmjFKDfiU257bCA8WAyV3y96Fzb16MSH6j2H1Kb",
  "key36": "5KeJN1ZtmxXfBsYJpTHbzZjbwVviD5ao9tssTjuYGB7jR6CyemeZHyLyreTnw16xx11Q99n3jWNzBJr6o3tGP6R3",
  "key37": "64Gf1AXCSat3DuFBc4nNDU1T5uixkv49thbQ3LhKHsZqdqPQ1ERjeiU1hydcJA64VPktmUoNrSRKrTKqvNhUQSPc",
  "key38": "5bnbwQ2xBZAph2vUaTeTRVcVYx3jwzsC43ptTUudSggb49QGWkmQDrfwijs6m5ZGeq6KrNPvs6p9V9SJ5CocjSHh",
  "key39": "2NaaEDgJUGn33eEispbk3TvucfceUbXE4gm4PsGDWBHLxv5Jm4mPRTKhFDSR3XpVi1SB4vC3wxZsHTYY9yeV2X29",
  "key40": "2gLzgZgEfDkpnr2WsbKTtfxdmz3tTaUv1V4CyFmepG2ndT797DGcFvDQbGvQGM9SLPSPUyHfdLgGH59mtsS6Btah",
  "key41": "2Xti4hG18wMhQivqb2sT8AmEHzq8jj4zk3a5Y9pBbGBHfnVeKkWsFJbqnbeCHF3khwk2KSVokRs83JseNFp6XotW",
  "key42": "25oYzdmDJ1FLAZHGd2p6RGYssAYQWyc3XSLKR9yR9WoaLqGPyVeEaRMC1NwfBzYopsbMqNAcENBG4L4EteNkroiz",
  "key43": "qTsZbvtq8WyPEcVB1NYCA9fdUXBg7sBoX5sYJSi4DAtXSnkciYdBrghb6gdLaYs4o4nRffzaRrCGPKUBzAxAMjJ",
  "key44": "2W1pfTsRoj7QujXCvaZXgJjxiLkqQKvUpNjX5iiYkcLeejzTaDpcSZnF699ecV67UTSjHd4ZrFc27q7oWCyEa5tf",
  "key45": "5cQpyJjMCNkP4pt46QCWmweTJkk4J5oJL49aLzwfVEDrFXyyf95JkfKmMNeSi7YCJ71wfWvicX9tfBVvgj2CGdoM",
  "key46": "57tjUVjez85Aar6xZXEy6avHhZfgVcopXLKxYmaHnDAwy5zEYi6yLZTq75EaB44RZ3GDdVkoYuSB4fHJigaP185D",
  "key47": "pYVXVeGzpSouutVucL8vKkR3JMFbeAfGXcv41hjS1gY5zuHstG8ko9yAaxSMZougvMm5g4kw8daRrZrv6979gL4",
  "key48": "2mkW55Qw8NyZLMi6DXaCedhUpGtCsHHzxmEkCEamYGK8Rb29ZSDboFR3NGpYZPAhfK3iHtPYNGPWBQqxJjDNRnjE",
  "key49": "2BwXuX3mQA9dbrSCxy9wabvjf169bzERkFFBcgN7u6wHoKzLQ8pjg7xL81pM8Aq4fn7CFYUaTJwRGexEVoHFDwPc"
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
