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
    "vXArwmtZ8TMDXm4a3r1fZuY7zoxdnrUF9THkScpC1JeKkoDtvhHfdyn6KL1BSuE6TnMbrjmMy1viqwnr9LrGqTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cFCGmoHrkz3vL4PJGL5CZYjwzzkDrtr2V8FCqfXzsYrcFXmoK12dTAyD4AJ5Jfj3PLqo8h3mfMBiBiZ8xWRiY1S",
  "key1": "3hFEHfYqSsAfnM5Ar8bKysLNyjcHb8A5m4xk6HGofMnSUEAgzwMas7DVmy4tC5hGHPRQprR22gSRMkj5DtvhA171",
  "key2": "4uSohgXnpxxcH1E9TLdwjSW5B77bBGdeBZFYwzD9hJfbY2Y935iLqdaQcPx7hE1iGCJrhZQsUKJyta48C21sdmJ6",
  "key3": "BAWevdqMZ8Aax3vdRYbXdJBASwJ7ii7DBr7ZiUjBRvPMnRtMbNtPebsRkbqDYrbyWndCcFJFrLhzfvYSqPeLwgj",
  "key4": "y2fGfc9FwBkNZmKeLgzv2EXqTXcVCcvg9vufQCfxdJik71rqVMiMMottUUUB19MWpU2NYZF8pKDdFFELmefs1Nc",
  "key5": "4dezcCZmAjR5Ew9RUNBBDADmVRr2jhdGCYZimr19iJSTS2c5vhbfduRBfvBVkKT9fVTR3PHKFUvcpYokUgit3Zg4",
  "key6": "5sSZ5aZbYHsQEW4jgNKYfQ4bqT2QwwwSWq84TMyY9Qh2K7EYzCcdhs3JQuaLpGuYavqKqLMzKPECfcL4yT24FqiN",
  "key7": "3yEPqo9o2NJNvAgKuBTo2ydyAS4Ea7xKw25uYdbE8rWc53A1F8yH54GgkbA1oQZWuVYAgybPBSH4TJtu9GmEcPMR",
  "key8": "35zGz9Aj1Kp85haPTfLfsX4d5qmRNmtvN3pEkJjF9R8xJgJsC4rPf4SpCdt447VsLMrLPfpYaNi3D1kMNb7mX1Qa",
  "key9": "5FqM94LrVrdxFvNB8miLgRyDSVoFePYVwb63rUqxpW6nGTTFU8GQQHhCzVQeRUk485tMVs5DGK517D67jG5MZGrT",
  "key10": "2Bw1hBbBPw2YDk9gTxg7Smfe1sz6iSBzGZ1CqGRv49k5Z847kz36LqM6JSPTWvLqLq45EZrmZK8D3SxEduhVafmD",
  "key11": "3omt4YqXfsNxTLNR7RiuFAbHLicZquvKzZguAFL4jAgp8sNdtGNC6zCjCG6rotVm4R8WpXeNBR1ycw58MExM3Nhs",
  "key12": "3PnjDa8k4HW5oXuXnAsc4KPDvzT6yjfnhZYEcSEtzE7uSYZVUvQcoup2HreV2DFvjiHfW8HvHL5kzzdc1yPu6W5K",
  "key13": "487XhhM6dnG6VVXjmTTNDgmSHyptdhWnoZ6bk3RnYD7yA5GzKjLxCxtXH364aLeCvSyKb7EpSWXzBn6WGjwaFWaV",
  "key14": "3x4fWN7BqQB7H4bZrKyxH9muC7gRZWcuecNtRoKtiNexLMvvBbPFyXceyQtb2t3iSTVUSFftGGf5sgf2qKwyMNRr",
  "key15": "DcF4Kz7dRTNhPaXn67zqokr92RMYzEP38F6xDPhnJZGfhMpw4Etb8vL24i1qnribXAnvMpV3xcLLBfK7gBWb141",
  "key16": "2KJaZzzRc56WwXSknxmyXWNADBU348b99bcKEJTC8mSUbND3R6Nfwe8aPPu4rq2mvPkugTtc9Ci3v2a6PJrEoniA",
  "key17": "2Yj2Y8EtLKZoePK9BtrVq1rmBVsijQtev4f4ajkNUCqhwz71ta2CHi93cDP2EHYbs1xAa5wBRpejnPeQZFWXZ4Jz",
  "key18": "57cer6qTA8TPQsSNXctHWffFbQL1iboWcB1rUSpEHFkwwZGrsyCNM8GYRkdroUm9VLaxNdvwmCQpxfTJMkf32XTi",
  "key19": "5a8EW741foSARDcYFqfooFMsyUt8PcCiicRSbtUBZrTarLvMmszBxDQ6ukpVojkP8v5C1cusXHk4CLRQw5iyWGrS",
  "key20": "SYF8fUqzsUQR3qfk5TD1CLHJ1mGf6kEarMBG4p2mpNXhLnUipg8F3C2P1etivwQG4BhvGp5YNFuj8XW2Fty7Uxn",
  "key21": "3RjzQAEZ9drrvDhV5Qxv3zxwsqF7K1XabSqJFobx4HHTs8s3w4HktDuMuuqPgANnBSPna3kbm8uUBEoNw9WR7TG6",
  "key22": "5caNqPGnQup5iKNAaz5afMAWB1KC1QpugjxpLEAYes71AGaiWrYHsNezSXeSmHSjAyxLGyDcZuRBEzunRT2wQ3ad",
  "key23": "38SKgu9PhAAT6k1VdBAWxadCcB9jkzNXVCHH2jjPPtkvyhoqLjshUtCKeNvEWXHJxn9oAdgZLz1JZwYbwzmPGh8j",
  "key24": "5g5yrjfZbwT3nrbhsHpGNYm3RLDGaYafGQH6vgMdAqimdKmeZCEVso9nXULMrzsM84CszyrvM4KzQzc8GnqPvyky",
  "key25": "2bSsQp7mDs5QAKZrG8WAXUjJhrkgAVJCM1oLhgZF4DHppiYwMWieN4DepuerDyQ8VuypptgXBzqkiggkFTaMvACy",
  "key26": "rWGsxfQDgKk4Z1qZZWJUSwkiSgtWfCu3pxE8turWM3DDgAsms6wuf22pYXdK1jf7itbJDLmYDCvu6CUgjHg4Z9b",
  "key27": "2yHtmbSh6yyoBXeXqS7XE9HJEJucvx4FBvoEAxvvG2brBF1xgm5DRmQpKvPgo4FrYxY74szicMb2UQCAatFdDhRh",
  "key28": "2Yu7tkBtKDvjsLgDKYp75QxVNLnSd72yKeyup6wgbctiNrY1Ehju22p7nyLFndcxMMKJiRCqpbVRCyi1mzrghkup",
  "key29": "62GM4Ys4uskLhrAjS68bTCMQXCGRSU1QpLXw7dGYWMPxTfGXrorD47ui7Mcqjz2mRpdQ9KDDUFmYdwoASt8Zve2u",
  "key30": "5x7QWjV4ta6x4K3s6ihH7SZrB1h8tQvC8Je4CdnYmt5u5uX9J8qQf7AUNRHPBPxwYwobCtrXzWLdXohgNvXHuSMv",
  "key31": "tAaAsgbXKKFye3mfrqDj4gzM7Lx3WHXJkguzCedwq6pj6M6q2utUki7HmqcWx31rXPJ3UaGgwmLZvWACitJGwVD",
  "key32": "PKAkYJGewcAoHwaKCqnHtjgohbRG2JAT2yNHe7UN2dXer8mWdtR9VWiG7nfW51T2ZRXqFekg37LECt51tXvhxwz",
  "key33": "3KQmV22j2AJde2mF7dPeASg4yNDRQakmgitMKQAUYSR3x7neJZ59qpGnoLw6qGZiFr1q8rGqCYz4dtjtcBD6Ki2f",
  "key34": "3dJRmQL2Dyzz3sYcTak78AxZzCxVHZopSMKJjGMxyqhCcqogwFAbLevG2qMmQTQZxqK8bHPuN59VoeJphNWmMTek",
  "key35": "3prFQjtj4PPuBYaGGhDC4St9BXnXVuDtGeXtGAxPL65uthz2Z8mkN619VR8bmcmzJiNAAQCRD43btLWtJVWXowVD",
  "key36": "5ZwzCCianbN763BAhHdJHRjgDcFNkrL6EBHxEq3hnkeWEYEo6KJmNpN92wteJAq6g4EFsvwTWVAK2eFrZr1GhZP",
  "key37": "4EsXqxQ2QeAYvdkfUJKwfpVEiqs5FCsEbUxfrUPQxet6fv9Gb7VoBiH1C336Qy6iu9gfo4MpjLvZNGVszvcNP1m4",
  "key38": "4kpY3BuJSTYzYVb9Wm6ZkTKRyUP4ScNEFgQm979Nw9nWdDbajmYDqEoNbWUGGqQCp7NGdsUQBpgw6RXzSKiDA2U3",
  "key39": "4QGQDq7PS57GTf6ZEmoPAReXSkRVoX647rtc75QtdYcVf3S5WkSAk1W8mQocwWy5GSNumkjrGfsNUahqpUC8Wbp5",
  "key40": "4tTSb1TLVwCAB5LKwhgqA9JseLtAK8LsFbscnuZ2QvwszbCGsqWqMdo5gKxM33XSS8LEBnuQH52Df2Xitu4bncB2",
  "key41": "Jz49owPM8mtiW3uF5zJ5j7cnNKhRKCJRf3SLXy7V6BNpa7nK48xFNV9yFbE3BqqvMW3L3BvW22E6UuA9JoWZRSi",
  "key42": "a1BGL69dpFPeGdbbLGBJgZWfuSVQtmmD4DRz6Zdo7BfumxaeGxKowU3AQVxPv1iEzAqPmuNP2eZeicVAg8jCaRF",
  "key43": "25r3CKeXdewFXcXsPB86bP7dzRyBfNAiZmiykd3rjKtmr3ZL2p8ofBZ6VJMhV1kUe9AkJVjK2pdcAQAe2zyMjQi7",
  "key44": "33TeWvQtiYSuP9NwvABy12VBu2Ff63ELqYxTPw3r8VPmuYosgE8PfwjbkoncRLp7i1UwpQ4aHhkRH2bboAmaKZeH",
  "key45": "5AFvX5PJdUrQj4eiHZ35mYfh4qR12k6SpDCYCbDGifg5xRCAys8t83uMwQ44DPJ2wjNP7be3eKF1ndmLGFAHot7m",
  "key46": "3NjLgBiaa3MancBRXKLNqufA7XfGuCiJeR2L7Dz4qqFvJVexGJEsdDBMsK22Ra2emvA8PQhbvohu1QgfHaNYhvdA",
  "key47": "3g1fNo25kvZhQ7bQCECLcxufBKhkgJLLwaBbWta8CWUqaMktuMX6SfD2tKmKu1qqgYhDg3fPFuJuuKUKSb4mvW5A"
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
