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
    "dU9bgTvCd5sdFTmrKAjN3CJwUoyjNj1HogryeTiiK8D4e4D1umykBaZJfLirMJrPNqDGhQ5tD4ytH8Qae1kMNro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XeZ5jg6YYURzC7zvw4p5fhbzGG8fkStrqLyeqHFeHQGrkc8igUSYkLHs34qnYvc7ybJ185ibGzik8JpKyEJrys",
  "key1": "21EHGRDPvtyWfbH4RLPRrbyLkNMguEFv7b5hzo29CTk8UdfWUdAmFeoCYxXoJwKwPNeZCvocvuxHQB1AJZS3idbM",
  "key2": "UzQNFQbzGwTnq93je3ASyny4BxjSKpyoGPw71nyc5Hpd42eUYZUtMb9PBWyiAo2PCJGhvdD7aiyQed8uC6syU8v",
  "key3": "3niUe6aPbVMZz9cviuoJXCSj3eRucGDbdRxLnKJFzgWEyGBJEwtmeby1UW5p9aRLquwVLFqub54s2TtFfgGmspmV",
  "key4": "4zRXmsuLEkrKfGRzQ1TyrtzYfyMzRoeuMGwGWczBjJ3RDTLNkc48wyfoSe3XcvL1MdWXvCWKBRkuvez1d4DsfKe9",
  "key5": "nwzZMBTczb7NAVmzShSm153RbPKpwtWKyu9EBf6kSLX9hwxCaCp4MmFDPDXab2VYLFW2niKspgqqS3WeEV55NNo",
  "key6": "317xA6JCugmtvcfLCje1fxUJqN5cvwzVWosx4ejm6hryspn6fZKLVEJbPZWkYCAh343jGDwPAoWJ8pP7GvHUhPGm",
  "key7": "3oK1Wndv1U9o9MMhU568DwygsQShiZY7i2ZEYobYKRNnaGYDMwaK8pAdonzYhTD72fyMKexMURM5XxnqcSuEps1w",
  "key8": "dWrBvPVA21EW6QED64eDqT51vmmsB8iiyoJYeTcfgVSXwYApmyanWo1WRyRLk9PFXko1Z8rCpF8XJgHBAiVMtCU",
  "key9": "5DJFgpW8vF9tJiCeYX6sbtrcTrg6bM1UDTYcwGUJebuZafmp83EFcdc6m5rcArSBYs95cQgMtZWX15gMZPabwfwd",
  "key10": "2kfHpHwduijtNrhZG8P6p6SaNyArEuGK7oqewDGXuyEac1DRqG5wUicD3GLbkHSzuE8QGqSz6w45AAaKvugFAP8v",
  "key11": "qJo2H8tkxCsSosYih7pxJ2pcNRX4j5cRa498SbWCyvcWig63X1p94Y8vB128X3P5uzgNh5dCsgj69TpWGxQTwgF",
  "key12": "LGaFwr8BvHB3pz6esLEGRXPyjdASdWzVjF422BQoVM18EstMHm5hToC9rYGhD1mG1ZEtv296AzwG7m1nKnctMwx",
  "key13": "2vkKxwt4YcSU124CEiKfm6dNf5tWBoKT841CQxhsnPww9qWsZge2a3P5BRyzd63MzB6QzdtvStkTgSfvDPqUgNbL",
  "key14": "5jYZVHAKXBHa1sqqaRcR4EAuU2tJmZ15PC29yxS76mzRSvMkBbu4V92TRgu1kzLVzKFAz6KREC8kDe69UHQvee3x",
  "key15": "4qbVgA4DPVexWkssDjso3jYoNfwzS9ee1tVgFyeUWdNsmtXWJBviRRqv18kthyDFf9eGcsXve2gmZGAwNWT3c22u",
  "key16": "2mc4fcEi8KjSHkE7SnnbyPXix8Cefxb9URivjNcghXnw739hXF2djaunFY4f33Dh1GYxdHDrCqwXRknpf72GLbci",
  "key17": "5skGBXByHVsXqjm9iHcuvaHw3BmaK1Z7ofybgLyRMhUS1RHDZaipqoBAu1xR1SWJTpPBRj9ANwHuVFY1Vwy7pp8F",
  "key18": "43tiwAXeCdTjDeDtm9GVuKEvTETQp8yBhVgNQnB4v5SuyBrSGv9VNfMi58TsbzGXL1rdZLVvEEBAXo22o6J1AxGs",
  "key19": "3THx8rMdanjMWg44PtGkKSNnuC1aq8RUjrePHudZtATn61bRdXSeManjFrTGbM32ohs6YyfXCUjcKTEfxW9q9Vub",
  "key20": "41kAo4eBCcRYYna4cSUeEjCBrUw7qd1BhS8gYpap25TjxG3Toi3fpQKhkonSkiJF1HRfRWnztFK2Eqtt572KznJz",
  "key21": "4vJNXwrkLNPjvEmMMPhUx4kTqrfEHSV1B3kLcntKZHcpbbDnuk9DQk8iJLcNZAu14w2PrTwQ4oLjrUn7dEetBzUa",
  "key22": "2BsxQEKNiUDiCHvJ67PeX1Ck4HeDpVtQZJ2fAxbKKoX1XvLBef6Guo88dwfxbVfdfF1Po2MpWkhNiPhEQbsqgP8p",
  "key23": "ZPucGEwTnQx4SQxE6QyMFhyrfqouqYpcz2wbU3nyam1CrW3euQvZPPREAa755iz2CNa5x6VLCy3wtGEDSY81Pf9",
  "key24": "37sKFdDQhJznR7bByY655GBoLUdZRMNBZogHD71s26nA7G7jxFnocR1ekD6bRZ9h85dJiTR5VHt196qi5M5YXMQi",
  "key25": "vZhrYmAiEZeNzrJXpVgUwN5ZhCNGwCuzgVEexogaZJdkXcqxScnnT5ZVz9pYospV7nUX3i5qZGbaFUrerMsVRLR",
  "key26": "2rJYcyxRKQ9PwyyGnPdEybLMeVZGuQ51Vukru35pWvmwVjd4WK2ithNagmDg1xBfWu1xxYAH1pbPUjh5hDDSAmDn",
  "key27": "4rfgFedLWbuDYosC2cZKwiLkdXSbyeAXM2vJYf5ykqP5LkM2qh59rnbsEjXkhx8gpynj4eyNRWnUEy2c1z8GRmGL",
  "key28": "5do6PbA9eApePgpkYmK2Yv1jvmqwrnVYY7JEDDb3kRYEPP25zDpShj34EUkVhqirU1KwC4XMxBPUACY1Du2wc5Vf",
  "key29": "4GTCfL1fkBvqwSTnMVt8j7TeaZo9AhkQRKBNfHJkx977JnRxVX5AUPEvUE98bapCs9psTWatijBM7FZGbpHLe6YC",
  "key30": "4VP5eDjQNWy6MSt4MjtGrc5Tt3wEprgFLTeHYGSTTBqLbNDraPFwvknDnPpiqnFrSzKyoJsJ18uiCEDa447ELrGX",
  "key31": "6689qtWaZoMT44XLi2qccPqWYQRbFggsrU19PaZsqDSk1C5FuL2wV54NXNmoSMEnQuzu5Z3idjLbMz7NETRhkoym",
  "key32": "2YuwXTgCXA5X1uuiQGJQNiJYdtHus56uBAtiVTPgAWpyzHWnJuuP4PassEXhNcXp94rTrzicEVh2pf2QY6T4jFtV",
  "key33": "5WACKjeZkHq6oEjyNpwFgwHTAhUyqmRBL9dJ5Aak2VeivNQxQs48dCieuFkJGPzNqJpd651BmrNaN7k3Vw2gCJH4",
  "key34": "3ciKttDwcBmdBnMFu11PLsgos3iAKMWTDMUCf9ZBs4mkYwvkEL2PnyfW2qeXs9qJ9pJ2YNETG2Pi927veNYus4eU",
  "key35": "5yX8rGoPt8ssTkv7oKwBcpKRDXRtYyMqK85bZ2C4kCgX44G7T7MqNeMy9hWj9fDLDGY2bpMeyJq5tbiZTW7XGjA",
  "key36": "3XXTwiFAXwyotwSYbRNYVsb5ycWm3VwJfdCncptCeLrvRFd4CVLcK61qUYnKroGbKquh6djTk55aGRb8jW4845Di",
  "key37": "36qYhckb1143FEb5XFFWodo2aw9tFi1poyEsb84NcHf7nS4AZTbQzDYK7e7Nv4wTaZZ1hheZ8oTqgU5F2REQZy21",
  "key38": "29mA8EL6KKSDQQKgNdNbFGoUVEhxxP3AxzJ9asPM8HLuRSVTzRkAn3VKv5Rg4veUXoenNYgYWJ39KeEj9DXJLyT1",
  "key39": "46mHA6wsx5VnhFi54tcUcKmcP31yfdn1P2k1fSzUBL9xnYBUW4hZsphmoM4A3wG2hsqZetmRu2kykNUdMUz2EPKt",
  "key40": "227fsB7UZW96WhT9Bg4jmcBYhJeNGSmccUpwUYTEkdqiTyQqyVr2NPn3YGzq8cwxR6M3Qwj3hgG83VWin1WDGXR1",
  "key41": "3Rk3q2CiNeRtaxduxhrbh7cq9korJLAXKXditoU61eb5AYa588oY1Vem8iSEkPUJ5gFvrNUAzhKq6JRvU2Sx5cGz",
  "key42": "wouw74ihdkqHShnwABdecwkRf8QMyJ35R6VahBzq5djNZRnkWoAtQPpc2ZGBLER3WDgomYZUox5Mi71V4JnCNrd",
  "key43": "65D2NzVTc6DnQghsen5KDB5CPJM85YUv9JpzkWH3hBu6iiCLFueg7Xpf8t615FvUq2EnxwqJTLAArPNrN3HqzAxo",
  "key44": "p48Yjb1HjfGEaFyekhe28gySL6uSGbxoH1ihvSfhF1cULH5ZUd6roybuxunXiqnPZM9VLDL99kaAnENFrYFezu9",
  "key45": "5vTeRrqBumvDhPGJLnjBRWMSYkTstkEeE4okvQzLMBsCgoqXdrTeUuM7rpTadKH7rpR893iuW9xYF7RhzveJxuNR",
  "key46": "3z3dhE8ZpixGHBqocqK224w7zjjjU3F52QQZwGLNenmXpaVp7fhBHYYD7ozNCFcLHLGcAtFXApqB18hPUNhashJX",
  "key47": "2L2ziSY8hrBeF84jDWm6nBE7xxavkz8cw7VbRMLMyTQ3KQzcAHrdF3uThjfgYN1bxwyh6XcfLY8etsxsXwJ88Zaj",
  "key48": "FfmCk7h18tsP4cHDGdvwyPCKYnnuhqe5QMgm5Vv1vJXo9pQ3pAyC2V4a5Kq7tjR8jRjreMZrA1QcbrXh2Af6rws"
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
