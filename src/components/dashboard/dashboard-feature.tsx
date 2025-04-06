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
    "3LyJQEzfCtpaF5CuQrmsdfgDBMfG21kWgwX6HGCyxjdtbRxqirLTdgx3EFH18CbS8mF27Fica9U4Bc8h5KFvyVD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U3faREZH1xryD3xsKYadLodw9J4VhPP1iCRj9JoyvedLFdogJBKX8ygvdEfVCNH7MqdsTHtF4NkZboUHiU6sxgZ",
  "key1": "wjJpVDN6poSG8z541bC68SmHYRvAwejTPyqZwDHiaRVDsaNQekezpc9YRqpzUTgCA1swLXb3Ub48rMSjuTfSodp",
  "key2": "2qZBWGoxjgvJhqvuGtLUkpHVKrBBq2BUULBXuEFdgyX331AW8SEjF71SfP6tShD9vkXW6XwTGxAX8WvR3ezYvYEA",
  "key3": "5psczKuBkwTGSoAALmkddxBDgY7KLi67fuoX6H7sAnNCGAxxZKvTK2ie7ogSLzn7s517UmXx7Dz16XJswZnUUsYK",
  "key4": "2Dzz6M18jwXMXhautQ4wEwrNaMyMdNyTHQ7ZYc3rJgE2f5AnwFsDNVWGiTzY56XHR49dtiYudDU3rXfag27HtSnD",
  "key5": "5siXkJdgSdQ5t6A1YUkVU5kQchih21pheQD74mifkVLXDavxCvFK84HVm9hcxrPKVo9R2Wj9fbVem2b7Ao5vwt5i",
  "key6": "2Wubm4VppJbLwfgKiTttqThZwtVUrZYwuuiEHSR2ZWN7LYDEpjm51YzYhP2BJGnrvt3b14yN1UkngcUfc3oPpy1r",
  "key7": "2KRgiS7AJksQNPc2Lx8rB61jhxTczPRK4s36t3tZ9DycEdts1NSUG2yP6jkRGDhZNXfuhqapsXy9RNs5b37a327T",
  "key8": "rspHW2Xw63YSUdY6xJcNDSrSp4CctzQ5gdsQqAkSA7P9zsA4357mMKS7kmwKDNgHF3pnFyzJrqCBiAJa9QkhtGL",
  "key9": "2DEgKHkFiybtqbiGFyDfX7AHkutGzzQFtEP5BrNeNru8FujbJjQ8xB7rJzFLh842gNwaUPWufLNMa5JJBCuKaN79",
  "key10": "53VXoRueBiJ8rmbZ8x6372Adsi7yzvXZMs7Grk29tJtqzhS9QTEtHJsLipW4yJvv9sEFwWjx9R4TZ79U3hKC534j",
  "key11": "UK9TjRAEjgbRsJAjkqYxSbugBvkFZnd9PJvWzSkm5Xhw8e61hHM7wpsjUs3qXAkMs5N5kHzT3qwKCY91pejBPB8",
  "key12": "5NScChihdXh7it2tp6XYfNBcPB3qmuSwddrzpjAbuKwo1U2w8utwnKX7yM8DmmVdqHnDyVco15jrcVPeM2ncu4ez",
  "key13": "4rHnAyDt6T8KFiqaX5rdfCCxkXzKVh7TnHJXvY8fySdWsFhWZLp9tf6qY4PWGtjMKM5ZJGubwpTHzqAPcHKeXSB6",
  "key14": "5QBXCRR4rtFtKDeWs2N1DQaLjbsxUzAHL4hL4ybcZMGzwKnXJVS4D8Hq5Bsb2A8FJx4k25QV5vrX3RcZWPPRPdHZ",
  "key15": "p2CSqXWX95pvV18Ls2wnwppd9s5uszmh1x9zU25o8D5wP3YJYxok8Vdt2ewqHNd4R4ZcuvxhRuhmCMdX5HTxqSx",
  "key16": "2pT5DMRctx76UWjiksn3pZ3WvwDrwxaBGzt5Y2kzEQD6FByuFNxNYWv8Xv8H4YnFgb1eH3pPMm9zAA7Ev2npoazp",
  "key17": "5kZA6M1bHYKqV9qKVtxajdvVar1GQFsXXn7CsuARvAC99EbhSpsLyeGviuv44CTNQQxV4qLrQd4mpCoh9DpBxec9",
  "key18": "5fcFGPVcF6w5EGbXCqdHBBqkRmCdxrw5C46f8SXZxAHL8CH1wNq7C4kue7wqZnGKN6m3nE4UDui9T1EuWNLsYDsL",
  "key19": "4H4dXGMbrjsQunhV8oMNPm68KPwiEDzsg5bFLknsviQPASHZrTcRm7qCK29VW6UT4KMhpFXzmnaNArbRSexF6wWY",
  "key20": "2v9qmtGu8Hq5WCaesbyjzCtk7sLGWucQdGUd64Wt11P3qyb3Wu5jkgU72QcE78Tu89pJtN3aVAUuW5V3BkFxYvHS",
  "key21": "5d8ydgneTqqVGtxrJSUp1pUFshg1JujYdk1vMQMDH9ENda4TLWwRy4WinK7LmSSuTFwi4mPZ9UUpSUqFZXqRh9Aj",
  "key22": "43q7U23ZQxBMXhsgvKrgbpTCT6nAYD6M8mc173iP3pNbwMjB1eX1MDWfN85GL8HmQY8QL6knMeab61xCNEqS22P7",
  "key23": "4fGXY9LFTN4SNeVmQtJVGAbwf77Q7mKKyi32fxouroohtLyTr4rAwLAKFG99Jjx1oX6Z41PrtTVY8x7ztS4ZNixk",
  "key24": "2wV9aumDAVxgcNnkM8CqtsUAkx6Hd2EhUV3ZAeqZzCE2WsKqRKqBAKB8YR3cow47H73bUov3R3G1Ck1yo8Gx8nym",
  "key25": "4zhJSDvU9Fh8EiX7WRhw7BXzF398bA3b9ta4ipnaFEdjSjJ1W6QG6uv4T9Cg1qs67unvzEi5PY8cnebqxRyH8kfA",
  "key26": "53eEbddMapBMndnohwL5D2yB39gvm9oqxjArahfUo2S9JbLZckRsBnpQhDypqrzoUpdyjCntGuXtdSndLfJcUKgU",
  "key27": "2HhnPne5i8j62hwv19wvApWt7R18EzskkpxmueWxEVSMX3gkEiyWkwvB4PWy6KSK6QVMCyyfXHJ5hshRtCd6wjLy",
  "key28": "3haAJTDJsxe24kPpDC9d9ehyhCjy6x1G4eGKE4Es9KLUFiKJpDSn5yxBgoqgVGUurfpTAGUfhHbzLBLnTrdp5L77",
  "key29": "5QCZqsgsrX9eKJk9XdutPswiG5G8xwiM9ayJqTFuzkmzMbAEg1po42SWBLuCPAszzCNa6PdA4Yj9R8Q7r5cnELHe",
  "key30": "53Qy1j3wnF3EsS7f7he3PDkpWkB9bN8GncQUsYcoD2wjmTE98WoAyPPHFC9rJMVGcWo3YWPSxmces6ZZqk9P9hY7",
  "key31": "3NiiV9eVsrHXfhVvp5FDXi2T1Z7wdk6DEanrWFzsoiZnjUNDjURNbEex5maAktBQuCrmYSr4Sgf1MGTzKniUpXRM",
  "key32": "CZPp9aAKtJE8HWx8wSq7bS74LRiLLgMMv99H2m554qryr1bpXQMb4tJ9imbDE2X2ggLeZh8Xht4AgNLrhXk8soA",
  "key33": "51sDb9xQGj7Rx3Qn5VGSK6JmsNv3iN5SQriystviFa5YmyW9Yxdqxn2rhcciSmTRsBTji3DScB6ogeFoUNvvXcoq",
  "key34": "4KQW9nuabzzjLJgPgNKDrR1Y9BFnFNaUT2grFuBAKgYQQZJaLk7Zn1b1k9tZjjzg5tbM8GdQQfcMkW1pCJKyguWM",
  "key35": "5i5zMF4Cy7LMd2p3jwW7QJov4TRQUXbpHYdEqfe9iM6pcGDHDHhj9rWPJtc1dKAdQ84Xtav3VaWpAxnVHReNmKCa",
  "key36": "5x1EZGdy9yecjQjRRBVPf53csA4EBA2TLRiJao7xo4wzuX2CkhUWNaLNhsCFNQp3bDphkx2Heae1XgGvjktoYhBf",
  "key37": "2zprk5iuZqSABHC6ZKQ2DW89XjyxdK6sCU7XywkVqZiMApwSUV2eiyRiLtq99iyfhNxShpiceF5ngd4AMuxFZeri",
  "key38": "6xVN7zuzuvYrKoGFweADQXz6XVn4xHxACJQr6i7XdpeeZaptJNpS1PoE2mGTeEXJcVzbYxijuenDXG1UVjRdhft",
  "key39": "5hNQ8D7xA8MFW6aGvudF54X9X7tSGwFiFAFnbECrx3S73cowdk4eAgQhqEbsA2TJymkRjtMVzudGW9tXYwq1gp9n",
  "key40": "42BtFyG14EBV6oLbYb326CYA9K6mvMytHRAaZheLtaJm5FFTkNuVt18oEyYK3LTMCj6cbAXL6HK453MN6jKrLsrL",
  "key41": "5C8CTyesjAV7J8wcvczmwdDJfWjE3z3YwuUCJMuAybbm8wzgstHiAcvobWRNmdWMc1dJqRuyskeT163u9MMeRY6d",
  "key42": "2wdLx9DR2jrDQtMvw2qBF2gJEh9hF5RBx7Dyxd9ekAyvAfdAWD3oZvVYAq1uVV8FMFk15joq9tWXDodGcPUixQdM",
  "key43": "2KpxWzLNYhjjhLS9DR1zq6ghpHhMQ22HY43FYGtXKtZmwqKYHQfmsFHG2QYC5hs9gmarh46CxzZ1t5qFV7TWnW2",
  "key44": "qEyJ5ZVM9SCcVMsKcsotTrbRgoxdKkmDryodpsKAm6MG8nMKGtQqCtw6jKf5jj3nFonxqUeBgHisqJNQk2XTH7v",
  "key45": "3VKkRQbCy3Jjxav2YkX7NqhVQAk9RHbDgp5SPeEUk9Dq5oufZZ5HqkSh2L5wbBTbaMyT4h5vHH738dkV1gceVv5e",
  "key46": "4TLjVnv7AAu7mg8b2581agH3xvXTHKfv7Qpm1Ajy9mjGzC5ardD8XMbXb4u4ehEhwH8mVKcPcjjyeU8Cm9qbhkBV",
  "key47": "uUNyF4y1YiVLAP8dz2RSUZ4V1tEBF3jTJ9V92eFUgLfoGNRYFuL7PVbpoJpLjBwsgRBKkEkhMok4cZBQEiM8UkW"
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
