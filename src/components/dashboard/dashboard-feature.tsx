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
    "2sgwT5fgzbiYqKd7w7nXBGsSyEnsrG73NGN3f6gZFwspGxgQYPraJTa3MCnYdKKVDCYBTc2uHiWVuMtDUD38Yn3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TpSFnbVf5UQkLLQEpujdo1LYsSs4Cr64SCpXoEMEvfjeepKeVy8AUAYL4QzvwvRrbT9GBFe5JfuVYBrWZ2qPRf1",
  "key1": "5BYd7BPkwCgU4eCeEtYRrhZRNgfkLmKFu3GNoXbPuddi92Nc4mBRGdhoSQA3GuKGRq8FnaK66WgeabpCBb56wVLo",
  "key2": "3SSYmGeSfAGvoChJMURUk8TafDMpC8ckL12RSkB5iMkhjuDzHQQAspu29WmKz9QXXA3AFQYLuxVA8RJwFXHxxqzc",
  "key3": "3W9rEpG7F8LcVXnzdfVDMFdsSirVFd3LpCJZdvZ3z9YLWveREAPDQJx7TG5LeE7zmx4GQn7UADu1qRV8KuapVKQq",
  "key4": "2YrzZreGcg4kYi2dFXHT2fya99CvSTFLHsfBj6Vz6RmAMjXsr9ByiVLpraXSh5tf1f3pVhhrW3ku6sK1oaqBj8cc",
  "key5": "49NZjYAKFowE6QwPHD2az4ybb7U4tHfuoWCNkBP5VFVp3AJ5TPNU4JYcigje1oyq7J1EjqtyyYahUoJCKGmWyWrf",
  "key6": "5xV1treyowq6HswwTWtNC6Asdbp5kAuM7hdJqtDNUhW7hm4ANniV3jicC7nxuZDxMt58waeCT5qnitakkV32CcgG",
  "key7": "QfbfzW54fxVgX8nbC46L7BmmZgVxSkf1rdi6veAFt5gkCcntbzyoC4xxWDycM5X9YWGGyJxzhPokZYHjuQg95Hq",
  "key8": "4XPkfQAVv4QFqn7yKrG3wDU5qUGiSaxini5KLNXAZ7A4nfHywkvy4LPEUtaFcJftWF3LeM7Wxj2sqrvpcfpGJBmi",
  "key9": "5zzHyGwEHSsdyhxTn9agphDSZ2XrfmimNnWM3VKYdyhYD5w1RBDyHh3v3M62LfKmZMZPKL1oSm72b4GJNSr7WGp8",
  "key10": "3RCyRS9R5HgTysdrcUmLoLk8nHt9A6qkA41Sfi8RaxDYGjgwUYPJ2kPNzPx9ufsuGcZkRF1ce9npwLQq3eHmy9bT",
  "key11": "2BUrntchiZh5ympttb14hv1HweFXRqPkTDXZGFAuBRcUeW1hvtzkxRpCC6V59q5yEpqNtTNnJKYZeKV13pyEwc1U",
  "key12": "3XYm6YZTeDgvCRakUCW82ngfc8Z4eXC2Gzt9ur22xemaG9L4dpRr2XbqiYXiKHw4oApskfRMS5aBTGELVqKPPzqn",
  "key13": "35xBXBwiiBjnTaGrNYPUi3sqfdavW36sbhFaSnqpvqvnjBGFVmLLimGfeUks19V2eX8RHRgXrSavTtFYss2GJZDN",
  "key14": "2mywJY2cZpuxKfQkv4hHwLgGf3yngAQHbjNDgybrhgSQiSNdjCyaGhzdwU7tWbBtmca4qBxchbnLFVimzVRMDWWZ",
  "key15": "fiGVGinkkCN6n3viC1ivdxFi34HwSfiXbvbeT6x6fV8L3HuPLwcWgD7XhTE7Nb9LFMY5UELZtSzMPaL28KT172W",
  "key16": "3qNYL54kwZQWhheFPxhbHawQ2Xk79soSKrj9KZY1CScp23LBX5hB6t2qtBNCu6DFNHCmAAAq8VrBJKnT1yjfvNuH",
  "key17": "7RtU9Jgk4c1eKCVXqaE5yhSgdJwiT7niMfAzEAEwtPk4r1Hs8iB17bL3k2TDPFJam7AyLC5VAFGR5aV15AcqB7N",
  "key18": "SNEeE497KsQdYNeCm1p1cwu3KrUgB3JS2VD7d9ixu7vV79Pu8ns4nBE1Z4cC42Co7quVZsG4dmKjPavQhbSQMZK",
  "key19": "47xFDSZuc6HAxqE6GiPRx3Sh4QA8VBbA957UAaSzuNQCLTq6TzvmfDAGgURddCw73FcNH9SuzeQqgpA36FQxfBDj",
  "key20": "LmZuJrUc95UFDHUekm8iT1x8sqFqTDdmjDijbDDubb6V8nVDgFDmNpRHcbRHYA27pGp6gT9biAArk7e1JD5FDVe",
  "key21": "4bzMDPuuCsTuRwhyPLT2G7xoGS11Q2FmBDp6YsqxmBZyLoxFFXiuB8GtJ2Gy1iLaqMSqcC8HXYkcTZ3ijLX3B2Pr",
  "key22": "GiETJ2gJh8RQR4dkbgSNwQYnLK2mXsXvGhyEgCpXo7Xq37uzud2UTqLK6KtncSRCAxkLe7iQVtw84519phfQshE",
  "key23": "3hzG9rvjRqTBA139ngDbxpch7GEwiGZ6UnjVXnfceJkoA9WCjwdY9aJHrfnfuWUZS8QQnZdQkYLSoHjj8fEWZckT",
  "key24": "2tWVYmJBoyzEpqJHRrKM5UrUFHank1shh4fGZwJ2VcULiTGWowduVK2uWGAKUAkY4yGwHRR2fSUwbdv1BKHAfj39",
  "key25": "4jamAo6aosiq5xYdqy4rQLoyjHBjQuzVRdS6YnAZCcsXwEe5kFnGbe9E2Dq6sfiBncxActa6SmSF3dU6EdSrjyi6",
  "key26": "27TbDwj5meDvfAKdf1mPY7xmG6ph4FYpx8NckLmS5NnxnWSwfXY5gYK11hKV3xaveHFwjG633CyYAR3jGz9ezqcs",
  "key27": "38G6MKj12Xm7XtpMA8R2TEV92grSUSWWVG1Uitm9VYzJ5Ge7e1Ty7ueMsjwUZHF83ZzyAcM1LuuxQKXfdb9DBKPV",
  "key28": "jcLVLAZ6r2f7GhchXcrS4npQGe9PgXAocGZdcSdbyQtgYtqt1ham9S4H7FPuwodcbTjPUcTBGkHL7sj1SoaS58y",
  "key29": "3dvqVzvYXkbcfxDNp9e5BSmVZU7CR7AvLqJvZT8GZmYd4v6X121EJGkupngUxJ5rCgZve5DniRS4M2uWQKHCEiVH",
  "key30": "5kRDzjrb9rkmhW1yDjL67oh9E9dxTT1NobR1pDmugQei5yqFPbxb84iK6CmxTd6jVFiEZWggmzQdTp1XrPviFfzw",
  "key31": "28t49dQhHXuDp8r3n5NZfekLeXvdZ46XWvgmPbChdBvpMG4K5xiaiTb68BADzv6v9iiDHP8MiyTkPuMMdnufHQfD",
  "key32": "5usU7kh9Xad5nXhTVm8bB3K4SMRmsm1UvA8taV87ZT4u4CrZxvt2jCpWMvX9HZvXUDy34m5FthrqG8FoQvAT7io3",
  "key33": "w9iUWEiiq6vZTHyyXi38sViaVGYiJLkzWsYYXBvCCJF6XdxADncX1G3j5w98S65kECoQwA5PF6sLd3SCRdtQXyb",
  "key34": "2iPfCsvHn4eemMf2Lfus9CkzqiiJB94D1oDqf4J2z7T5oKCfb6a1FEkeZLEq54AHTrDRuX7soucMPcLe3Uam1oJZ",
  "key35": "5xWSEXfj2u6c9WsyxbUFd14UArqVJWtCgamBNX3nMgJCyL2rRg22fyzXQSqN1nsgzqvXasJTLHJBf4J2CNaBXVvs",
  "key36": "322BGsyLq19Jzcq9q8Ew4VN3a5fyZqqDGo2yE1PZ2LVJSX7PaNmGoi5cMfZ2UDyfzaxEdemmQoRXfFPj7vQ7bzsM",
  "key37": "252c5M8Zq2kS4QB9eCLHccAcu16ehg1HKncVnaHphMndhjENxMHGqfQFeA5q4T2unEr4nrsyVWXw6bGG4rYK7YSp",
  "key38": "3wNJmxLG3VHy9p1YCtLDJAEKpw6jK8JNMtVKK4tuhDtJJe99p6yPvUGCceb1kJwUwWHTsNpQxfYgcLKWy8ukzHDB",
  "key39": "3zQTeTitP1vMvZw1r9BYAgJRs2k1Sr9FJnYVsaxYYymrSTuPVj6B93gd3WWETdEdRKnjBoPm8gCCD5uhyfaAyqLQ",
  "key40": "25MX8KCLGkX5MToLb3Wat7eP8zxNMawX21YXRcLXqWScAoRLdRLowPcPSBD6KfCgDCt8qCZwiC1AXwnuQvqYY3zW",
  "key41": "3rxZzBJR3Hzyi8vAKiuT3TyH2oSpBwuTQWm7LBqV3nNorHd7ePTRBDuyMQUxDoxrXpyiPDac6UajZC7r19j3bhyN",
  "key42": "U5SrUoehqXjHicyaoejwm3YBSiCYNnnLnaGhDftvT3YazWwAEX25xZCnere6AZVpqE8c3hYycWCzhYqa5Srvgvb",
  "key43": "5awPu3X6Q9MipttYpkkUiECiZWrXiWHYZJ9GgxkkW47fUUxNXPST5J5zTpytaEweGBPsgHMh9ZJ6gRVRN7t2ZKFF",
  "key44": "NeP4ce4oUnAzEGxNrZDMS9kxwa2DNvn4HwzoE3LaijLaxBnLY8FiBp31rKg1Hqn3hSwSmhsSgGjjbQt4JamNnhy",
  "key45": "54KskqnjHpq2nU26AbYXKoFzEaq96gDzPatfWLc8kLL3wx3M721ic8yQmANpAdHUdFHMHtJS52YcKef354fZqeUQ"
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
