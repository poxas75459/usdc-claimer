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
    "3XxwSUrV6XDmUGsJG596jSRykfeBKrPgpLYvweDNVYHRxSn7cufr9YdhqxUoFdzaCZRThHvsryc4nvoCXYgjNFvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EfrdbhYCveNR9UuFVaquvV5K8GH1sSA5G3x3ZRueaR6ZqqcorQ8FE3ZxgLe4HpJpLHovs8syMRLkecQYFZcgDG3",
  "key1": "43vysNNHTogseed1QZY7TUUXkHoHzFfBJAYd4uLhhc6kzHfXZNxpUXwBaqBBFzuedY8A9hXL6vXxghT4dPKu8fEc",
  "key2": "611hQjCNqK3CBBkuZzX5bbjpTS1abqMz6z31adaEvo5NCUy6a7pYo8x8XZKABE7GwyHguvTgNxbGVWjjrNkDSWF6",
  "key3": "5EcPp8sx4so56BwWM8ByDtxoznaWXX4fYex3SQZyzLBg5ttwvm99VVM5wFLPzngFZMPgsjgcqf3Gbp7EviT1ReWz",
  "key4": "B6gxAKXAA1S4EkVaeQVNpWenJhrMBu2CSfmqdcM6fBxRx3DqSFwjCTJTHQfM7rt7diYgmHE7if1dRkBJ6wV4Kf8",
  "key5": "4UA4NLCiDPDmcUnVtCXuAKCAfphV3A9GWQoFhof8cTrbYSDudNi5Ftb5WUnL4o8rSgCQB5HM9JRsddi9GwTuY4ao",
  "key6": "5DDyEPEMy8ybPqFr9tBAMxekVpA7P6nkgc5Fv8yd614bP9zRwuF4xY5CGcfhopLWiGP9pMYfbj53iUDH8P7PkhQz",
  "key7": "4uR5FG2CM82AQ7KRzHztye3ZUH4s7oYGptJspXJuLNbaMBxXcb3fwnq7E9eNEsXdY3r5vH9PkLgjtLBxzHUCr9BA",
  "key8": "25VMJLQEEqompArThEs972tbMorjomBvq8WcXxY7oNkFn7aeLzwWVzyEePRCgJJ7oweiGkTaZ4cE2qa6HciL9rQx",
  "key9": "B6wJNKvpRkAjNwGmpEnZeg7bjbkMkL8H9iJLSMJueUBswG617QM5D84dNAHekdKX97jsdgA2gE47Vxhuzse5Qwt",
  "key10": "47UxNeNwrKEUDMcWzTe4tXCN9yCXShZFix5rJ6eBukxWVP7e97wtDGuzQz1kLis6iCP8r22G5egQJkJmkZWVwL5",
  "key11": "5QQ6A3UYXoukGv6UP6ACi1gzSZqeFHPAah44mgcRuKdsqqhv2Qkezm12kqSRaXhNyMnfs4KWxwUgWpmtFumcwPyn",
  "key12": "66J8bePF9LemocmVnCQnKV6kHzksc7U7Mv6qakYpjb44nBZTJ4pQ6NDC6YkMdPr9V2N7KDYqx6bLxXAYAQq68JSb",
  "key13": "5NQc82qz6shPk6WwEeFVdefQYFqss21jy3ojYtjGPjZhVuoFUsYspTJtczj4X2LCNsRdEvPdBEeX7jQB3or2rawQ",
  "key14": "48oARtYCBiBbXpGayBex5Cem2TgdSwdEmybSRsrCPPfES9sJ68daCtM2isLiQGGszNhYh5oMUmyhPxYyopZzFeus",
  "key15": "3VxbZQhpEj9LyWV58B2XXC5c5yBF31YRpWjX2MKEUDKYa1MMHoxZPbQxh1bqCFEbZ3pbe2tYYRcJHMNaAsG9wfxk",
  "key16": "5axgfF27UehGDXkC3jcBVWjhohX29H5i6YXUefRyx4nz4SKDkpyUEVSvuGkGCVmMa5eJY4BCdsYksdDC9evFQAiK",
  "key17": "5xxx2fATbibBfXuzEsDjopeegfjJERXgZqQ66mNFuZvD1U2G5dHrq7acshg4RWz4o9bjsVSbzc6h52vXEq9pC9CB",
  "key18": "54Jyh1VgQjcG8W6zQK7y6duFB9ritT3cPohR9RJwPUJQaYr2tbFafLcQt3U17eLbiNyAvqYXw734f4b8DLci2UTf",
  "key19": "4LYCoqANvf7PmbDBvHmCW8t7fCxmxGdVeeiR16BuyBSL91bAjVYhPbfteA9uYo9u3GzSch6EysymeXRkBJJE2qDP",
  "key20": "2gZFHgacx27LtMmA1PKXb9k5L8DqjB5PJzqMhLYSr7jeHvLficFS5rtxB8bbxyWd1ZMyc83obS6juB4fvpfLkXZs",
  "key21": "kkuPwp6yZzKNWscMxGS9dMncTz43tC9Lp2PM9BKwK76V3HrZT2BqxWt2JMvna1jg3heqDfuXqGjtELncBHoTGiZ",
  "key22": "3qKk6x9H7AqsjMtQgJX2KeX5yxDRhaPagKXkiP3PA8vUE8b1A7uuSUkGFzTGQKh42YJBVtjAcB3BQ64UR8MytP3y",
  "key23": "5QEJgFXr6Haz32KZRgb283EGTTB8DZVpovzrvcap5R4jJsPSWD7FHKkdtsXu9XEdGZbHYYTzALw5ij5PhezvrU1d",
  "key24": "4JmW3PiJv9DcU4ADUmgBQFHZ7ezRsDmm9HwkXn1WMFZeMzEJ1nMsvNUUqCBQADDWN4pN1WVqp6t8TdJcXLCvmezN",
  "key25": "K77YW1hoyRcUHe8KYbCjqw11tEt3E6dKYJ1wxJEUBsCenRn2R7kyEfNd9xGmE2buwykf5nDHgy64skx6GUjCSwe",
  "key26": "5SGC8VgqGqhbZB6cVLHZRVKRA1vqe17ALGfM86NPezcFeUBoKzUrcDkECGpu2Un8N5De9cVyj7NQcvjDhSvSGouQ",
  "key27": "4aNAJpnm3hDNWrCZ5DmWk4msFxFcbjbzZ7d2WbUet2zUu6MLKGnFizCvC6vJDzpDzHm2fhcqFW1so5HNL5sHsiNV",
  "key28": "4ujYuqE3yrUdMyYLfqGyMFpEJapzaEqWszaUWG7LVw65M9eXNHLBgncBPX6WzKAcn2kA5dFuUnm35DdortWx5Hye",
  "key29": "5vJ8Ch6mAnLipxNnJ17aVvkaNRoqFUoovBum33N69jsGNNZUgoVL4FE38iBfmP98uH4wHb2SUYo3hvw342ydKgGY",
  "key30": "5aYBMPJR8s19e8ts1muvVGyWBwvsYPinpznhFR3WEvLy8s8fGccAnE8rWyqfuJmvpC3S5NTDs4dSiKoSppZCD8ff",
  "key31": "29u4e1ko9fnnZq9wyvstfjB6xzGMV1prQcSAMgcfXa1VUGu15pVbCjtLKtnpGPbSyc5Soree1Hfe8NY9NxEJfF4t",
  "key32": "gS14PYq3oLMHThHGq4pX1JuqNXcjgEEsChRo614cajv9JTRs42Ysh2JvEPMtT8vFqMKATDYre2Vioq64Wd12djY",
  "key33": "62mmhiVykU1rQqD5YH92RqqhnhjeFiEXPedTW3tuc4w67DthTSyiAxJLtERggMZ89n3yTiuyyTaLFKn3TFBmKYTw",
  "key34": "36QhyhW24ZaRRseNyWDxgCWgZQqB7ajbf8rg8snGZLuUeCo3mZPTeUYoKDR27N55qAQt5oQppfaWyUVD9RFxdLap",
  "key35": "db2usPXGjADjxrGQwP4qkH8GQ56DuzSEnHMaEXd16KBVd7LGykPF7wURoaptKhfu555U4NtSNZxqbAsgAuNNN1n",
  "key36": "4q4s6HHrXz2ExJidDU9iLFcHmYDvRuyBtb8eCLjtnM4hkpjXjJkN1j3NLCKfhsctWPd1fvWeDWoujtzF7A6MUC2R",
  "key37": "UrmS77VBSgWYKK4YGAoHJUBGkg3weCw48HycRwKAyaTgAsyJVi61V9kmxFmZCHNWK4MdQTUMAwYEENK6vKcDvim",
  "key38": "5Uewmj9SxSKQQgLERTYUymhgSgHYea3bzXh2fearEbYaFATRjdst4CEx8Kke4hC2YbSR7iwjr6WRaSimfR9QLQHZ",
  "key39": "5BmBhzgSVEKHMJJ8te5N6jFAKcMiKM5wYVw2V2szACmKCWQWvHzrjhCFp7RYtEQymfPLkucsB7emVEioJskR82WF",
  "key40": "42UTzKHoujzu8ykD2o2f22kkm7YpqXahZwFoiDccLkVoVLss6RrDC7rLKY6VwbSJUJMQix4aJpJnAjc26ycv7Ssd",
  "key41": "5sJtY4jqiwDLA6JeTBboVhJ4EwExrmRmgKR97yjnz7S9UnDeVMjx3NqgRgVEqTq63s2XWVz8gSCY4dXyCFReCnyM",
  "key42": "5cHbW11LRevQChhxELUNQcdSQXh5rsuNenLFbxjhTiLSJVgt1BRWGRou8yVXeHhQk4g3V79YUMcq1JfqYCmy5QvZ",
  "key43": "2ZCRG8YAfCesXSqm2VRcroPqGx9WfCqQkPg9ECegsfK3bjgd6i5cSt2K5GGzP6v12raQeSCUWEM9BjbTnJUGA2iV",
  "key44": "27Y9eYwEhei6LdN8Hb1jFUQzQki3jEokoFjuaGmQzTqioTM11SdYaxQLR5AEgNqdd4XVgj2dSQdX7iM4yipqdZLp",
  "key45": "5SMRZfY3ASknGTtvTS17KituQooFy2zovAGcUFpfbA6Y72KhKN6tfr2A7g31V9iKzmzHLRNp6WVtbk1jGGLqb6o9",
  "key46": "4PyqavY1SC7GkKVWb9Jy7NtVb87xMboigVBezG7XobWPEyypzemsqo21aqfDSoosvyoYco7NfSqFfHgYCCK3BnET",
  "key47": "4LRNYPB34DC6fegfo9qF5DSJpikJdeJqRyPYtqVcWtUGETht6MgoQsqv4CP4euhxLs38zV3Cb9F1XbGtmgLYh3im",
  "key48": "3zusdJAbA79yd4FBNxp5QjYjmtGBAQs9ne19kkfejpo3Sze2GqqJLmdVs5BACtDoDvY1yE5XWdgnS1h8BNzNLt68",
  "key49": "34pdqZ1AGqBCxSJPR13eHhsv7bXZPc4Dx1pgaYtPuE7MB3eaE7eksafnLeqrXY8tW2mps29fmCsTQDQHLQmfnFD9"
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
