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
    "2XBKM5gwdvzjaiPegByqHhoPYFHK56cLq1spAqS6FCjL2uHf3pkRm3tW6MNwiXvsNprp8KxVqDkiTEmzdAMbMz71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rREVG71BJNh38dAM4YfHDrHK2j6uRuGGACMpa7V6ZDcnhuL1sJGwPb38xNqinNhYLUsu3XSPPMrmjDFK1dtExcc",
  "key1": "4hf8Ytug2ndNxWqZW7Gf9TeHBWHC7X78ws7VjnaoiVJ2wMuZ9BUQDAA2fS1JvqkWyXiraoUD6xbudYbpa4kS81Rq",
  "key2": "3GvYBb7dMN4A7z4g7oycR9MmbJwwMXGDuGB24jym42BG5pbCv4AuTJa9bqGpHtCSCBKM8n1nYnM2R8UcfMdzgQtV",
  "key3": "3b8kJVfc2th7re2AnAJHMjgfi9V1ZWuHjgKgjQwEZk6AfRJFr2nkYVv7bVitnK7YQrpfpSBMb3KjB23muLne7J1X",
  "key4": "2adu4oWdGnH46d9ihKLxemZkPx3iKriiUrH973EWtBrd5qsXb3MwznqNPRuXjXpa46K1SYVomzyQoPT5DNKsiYBH",
  "key5": "3APB4j8vXeAo1mbFDPqpubr36f6yFm5ibY6GUXBy32qAgEX2LxcBtGQAQ7RGrxypS4sK1TxY3h9KzCPbh2jpTbBi",
  "key6": "61ZjL6d1gaCvuohSYZvBALCAmZz7zu3dZfTUsmisEVoLN93btcfvEG7wErBWd1tPJZ2jszvSwHaMbRkff4GpfTrx",
  "key7": "P8rQ2tpgLXEMkKD1H9ogVHDGFUNuiCc435xfSKDz3yWqv5owNwmrFnyNtouovgnfj2TEruc1NJyxidKxGSCpG9C",
  "key8": "2LwzX1XvrM8ymNENGTAuM4cUbCJ7cWKir46JZyz4M5Axt17kWdd3bnSXyfherZLpySSte4ZyYy2vCHZoqsJiTbGz",
  "key9": "2LfKRDGcCTkXwfvZanDrvdKjMQ5aBT8Q4fuMkhuejKvAcdrdMhVqedzsid5LmpDHgzrMCk5oejTRQiZBjdRLGtN",
  "key10": "3XoTBCaAjWyJAaPvmyrrVM58Ji344QiuhdTEr9zL4c4d8j72n1neLu2LMZjGWffTAQXqp3r8ZBb1kRfaNRXQKey1",
  "key11": "3ZgMrANX9jK36eprGeWPVwqMoKuKZZiB3dC1jT4Q5PQwwg6MJGordai3mFfMfZW4yz6a1G4ubERMD4wE9BnmRq8t",
  "key12": "4EjJqUFsx9vbAy6xeNPNXoPGdpPWQhKierFK2uyy2H6oUXLWTLix5LTDDKoh4WN9F59to1VV8nihRCfv3KX5Stug",
  "key13": "4ipZxeoKLRsNwN6J4edjEmfD9sGEfvmZatHpjiFNZ4uiwjb5hfoizdMzfxCwmP53dZiDgszM5XRouRAPKw3J1EE4",
  "key14": "4uuVNBPMLGe7WqEBdQJ8Enjhi5WHyqf95CGivRjMHcHP6iMDAN5NRikbMY3baQzDgoDZCDpDnzyFG7kAyZhYf6ki",
  "key15": "3Lp22djYwnRRCduU5r5C2bL2swLfPWRdqP9kRJC5CFpEYckWf6yZ2LD6Y1GVdB23Zwygc9S2YH1f4d6mogKg7atD",
  "key16": "2tpyxBngwnGCTLCbi6wpc4CgsLjVr4g7YmQVVDtAe5brQzrU7jo5BdbBYjYjpgZqG2CmmWFx7pobFL2R5DDxwzcz",
  "key17": "3T1LsgmqqjkBt7GVvVPfMeX5DReWApCcv3MyVYnMLC3812h9AXrJBt7YzAJ8d53TozWoHqJEyPkfG8LKybvho7Xk",
  "key18": "hBuH9Qk6LeNbobMXUyed9iac3sfakZRsretoZGSLH3WetXHUv9mGXVMVzRM3enAWbHs6jbfKBydpL29Y7vrUbde",
  "key19": "5kDRefn9ksorNjyRgnJ4hbCe5sb9ndDggaYicbb2CtGDTyxrnwpHvwYGAUUB4A7ZygqqqnF4j7mZfN2qtX8T9WYH",
  "key20": "2MH3TbCE1j7VHepbnoBBRXti9eYUGPHdTdB9RSF64ErfUebYBnY9NHbqHDNYQHt72crEqQ4VeKttBP2VW3EBaiXS",
  "key21": "5WkxPCoTcfQ9DL2ZE6ELwzCyWBjh4KfsTk5nwJotkHPm7FEqhTgHDhQDj99YzwQRhjwZZsUEcW9D9H4uCEyEHe3b",
  "key22": "7BWqyY3gyM64qN8teaH4mRVzQR2BCSdJbfH7kvYKushvgfTaf9adeKbqCApTtVdXCWWWmsVqSAZs5AddG7pdH2d",
  "key23": "2WUa65yw2mNA2axN4YNAw6xjLcnUjnmMxfeKETtGRqRYr6tKwEML6MonU8Sd17fCjvFsijwpxwuPEckAsKdes47S",
  "key24": "4NQFx8WrCmByGrd55Vk6CfDPSKiLXFRwzGDy9zs6X6SN3eX7kcmJcByhVT2fTuy6hq1WkkWdanDrqxDRo2prbpnw",
  "key25": "5W53UB566tUA4y9D67Ku6AAF1j33rWbZiWq72FNgmVv12wuxY4RNxcc7KTbQCw3SxGRfQZT9kKRFPxNjwsnCLXuS",
  "key26": "3exsQXc11PaV7WdwZDbKuYP6hmWQ1AQjA4vZqdUhifszHjsKwyaVkCNcZAEP1iut4x87vJtqMNc9mKeJVfPceuvm",
  "key27": "3dWJw9YYbna8v3Eyw3NXsSJrufUCypETeoR9NJ2EQfZd8DqadRbhLnNVVqVhMrs61xkbWnSJuyV5EgjdqxeCRKrD",
  "key28": "Jcw27i2T3s1ADHbqv5ctxYvJHChoU8wCsW5iUYEFnnJohg3peURm9Xrr8uVEvrUi4T22XiTdycAApTPhmo77gzm",
  "key29": "42SCpZrm3pEcNy16a3EoQrLrAreRCZaEEvoz497eTcUtFB8eUEpDDrCUwSs4T1J6Tz3FQNvPSYf2ZGkS4N8JHoCu",
  "key30": "4HPhcg3dEUUai3oBPmNBuSXnno881qdbBofr4w9bS7k8KfNyEcwGMoyKFUCNcxEGsHVyVBsAx7MzwMj8D7m5adn3",
  "key31": "3qdzKdC5ydDwn5b6GsuBLuKvi9W1gRCwC3DjK5YFCn47fTDv33zfJcAkd22mintAxwfy9p8o1vLV4m7UJRrsMo21",
  "key32": "4gCG4be38KLXfa9YzZx1zmM9zp2prNWjiRWvuiMxZrpPBrTaNMFxzj17LEj4HnEjEfNdQc3dWxbo366id9yjsJrR",
  "key33": "3HnRuih7Bo8VwcVxbp3srvS793wRfZGnU3qfJL3gNuMtSwXHWCirF38BzSAts4mz4D1mBNmXErQZnk9AGDoUcb1x",
  "key34": "suNabAmSozCEBmbvLyAMjwkRvom51hBUpkg1K7x6kwys92ctxmoBSSR3x8mzKuvLm1R2o5ujGqxisgYevCtxUjE",
  "key35": "3LcAP5ChHTJm9YWhcwxaXJXuaohr4ZqYSq6eeYtKgGTKhZtgZpYR6LAjgnrXj7Wt4mZMcTVnkZPhspSq3eadTs2d",
  "key36": "2njk28H4VA1xVtZYXBKtWMwKsiQgWLfPWvUBY9qUcmQ1DwR4unKFXEJR3t1ro4RuHoyD9y7zihZaFKoTx9iLKy4F",
  "key37": "snb1JNk2B3gTNvBBxGKkqFC2cdyX5H7V7jkQFojHFeNaYru9x56eNAc5ro6x7t54Mc3etvcHH18EmKA3vDvwPhW",
  "key38": "3QxiVuNmrWWK6JexAgJEeK9s4GPERuvBuX9Pp25MTaXNE1Si2KWJwYpepqdSjnaBsXNRZnWVcK1fubw2NVxdw2Te"
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
