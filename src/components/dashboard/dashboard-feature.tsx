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
    "2skwHqTRVDEKtDmkXejpXCaukqRaPef8fiyJbxbZKgieEiMdQ7adEgUfe4GAjV3XuRCphaQwa1a1YFNbriUL18Q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CQ4hRcDr9LHQSi2H42emS1ziCb594PRo4h1MaoXnEJeVhSvRSF254uSFZViyCpzCPEpaDQKfXKCfSWb3jkuwR1g",
  "key1": "2gxjk8G2KpnBGKkWkezqHeGz1npSLAkqFtyKrT31vXePZHgDwY8jjEvB7ijwGnYQpUW4b7cBeLaLYxcFSys7neUr",
  "key2": "31hB59iQzTnLMQqnsigFU7DoTJp7hCn7LJFJh8AQFAzrYk9F59UFpEemkrrbAUMfUh55xQFi34f5oFi8oCHRYa9E",
  "key3": "3UZEJ5HdohH4navxHMoGQ6gyjDLG6a8pV6PG4YhRkYXNvPCpGpbp2s7GWauwNLYuguXK3U53Aq21RCfoc96ELwZx",
  "key4": "3vEwFRsgnw5UZ2p8y4uGRhx6VXjvkHxVFWZQWrriS9NtpznQkGwmcVhU1YwM1Uf6oeQdfozHo24P67VScvbX84bg",
  "key5": "9zbhLUfsLneV2qGiKRtGEai6cRoba9CfPmJorsfcg2UNafVE8DJkNMQSRTpUhd74KAm7hqhfAdsBDSFZ3ey5yJr",
  "key6": "M6CnuW2yQfxjekQiwStMJX6CFmLj9ytf9uk4S9koRgansStVALjwYzEDnH3tUqmuPhnB8xiBx645p3v6Tnsniav",
  "key7": "cX9dJdDdZSMqH2jTEVpADcBCFtKjkYhG7f8GeYX35fV7S6Zk3EK3QMJfVAuECDmn5akAWQmRPu5uYd5RyCGPDuS",
  "key8": "3s9xYdLJsF95G47hM2H4M5b6Sj8JoXjb86huHPsoE9u8wVtr1CAAbwGxfNCY51VJ5wrLrcsMj2UQGRxFughjjQ9F",
  "key9": "2zWobRCykXai5z36x1UbTHnn2Txyejty5kvRZTPbMma9kQgeahU2LniVXd3fzZ9NfUyiMrK2baCBpBJavV1XxwK5",
  "key10": "24GZpbTUyM1YJWa2tXxrP38qndgbZWimXNEftP8u6YH6wP8XjAzhKnpTPty3yQYSSVuRFw969bWHBQUtKdhUgfg9",
  "key11": "3UN2oq9gx5VVkqChYdzDH7kkX4TmWcGQSyfi4dHtcYyBGBPkDzdLi2dZkj8us7Y7g2awpLoZGXyVomPJp8KTBHYD",
  "key12": "33jiPpRFT2AYpkA1cQdXZXic5byBv16NJUwRrEJd8ihWYNDbwhmDhZJXouCFBPMrK5WFdjTp2g1qppQhYacnDQmo",
  "key13": "e63QUYCapbwRWwxkXeHrBhVB9Md3QV2fP67jYNPy4sEUQHMaVZUfHi3VsntLWN6dzsmKe2BapYF8YTVnAJuEnth",
  "key14": "QY9s5uovguKjjebKHEYFLp8QXURoTNnHFKVitLvDbH8cpBfF4KEppWsYwjS5aAotSmK3HC8iaodb8GTtzmA5fFc",
  "key15": "3NSGgZPqXzeDZk6LNcpypgppVrp6Lfn6N7pFEyXShk7Gh5dyPAapxtaF98xXGZ6t8k2e9iNJ1NDUfzb3ho1ejo7W",
  "key16": "frFbnC8uMmv78GYezQDAG1zUjQB3GrmbTdmzW5erXcHnhZ1AnbPzpQDXyQJF3UkZmhxDmYX7fUsd1gnBP2w9MCi",
  "key17": "3qBa1gr4zxeu9BumCGw1tQ47qVw8K85bhAxviyiNEJbXwvtcGXtXzvpYQD9YtkksVBkCRVeX6ZxhLejfTtbENmT5",
  "key18": "2keNbr2yvGCfXhRPsR6tA8zkwcMFXp8JRLP6MdwatTbyJKbR9szTKTeypSdkdzppZo2s5BvaxbDFavjzYPi7g65a",
  "key19": "xuejdwoB4FdUZ56wzS19nWfXXfzKb1qVhbjBxxK4fo3RoZLLvqaTmUZpHHk7m3DWUT91GFxLymbTquYHrE5wZYt",
  "key20": "8bHpruGLKsmtbXE2PyvW8khzqKvtJ8osJWjQm3ErR6ro6mVyHb7qk8Ah6yPCmQtWkSdx2474QN6knZyE7Wrva4c",
  "key21": "zv4euMkToTGTJSwXKuLdMd3mZr5YMU1eTsvhjTp1UKUu1JEU13gSP2k264dYChnkmFrR57Wc3vTdbV6bfY88uSZ",
  "key22": "4SqW2YKMtTMzVTGRMTm4M3UrX1U53974YJ2XRNTVYGjo6b8KcSePL21MUhWRHLiVTAf7xAY4AUvKqH53CKatY3s7",
  "key23": "3gD5ocv2JKbDHaDPSpzLtbMNCr65yC8sqojhSNqpsS5VM26dPZpqcbrG6ck6PP8PCNbHHWn5G22k6Y4cXuuv1tjK",
  "key24": "3woyT3MHapNMHoEFyWxAaaAw4i5qLxgPj4p95jeXtUyrK9DKA3iJeAnm3b9hqSvRZukLqGwYEPMh2mpevgF5DfUh",
  "key25": "5Z3cXFWHtweVmznh67dnsJ4djAVovYb1rci8Mdj96GuxNwRuvsXpZccGDiTNUNvbJvssDodvC4nCU1KNK7ZCDAU3",
  "key26": "4h14XJDKheNkdtBnvQmqwcZdkyHtgqSb1eXKtk2zETh2vc5wvFcWNYshtBfMrn83RQzjcaz2QSagiRgcewo44aCs",
  "key27": "2JnSDb3ZgA3SyJPZxjTK24MNjkN9Mypsrbn188CYjBuRNa2pZqYY5yBAdDgpkcq1GS8jbuyJDLRxMYRCoWQWhWwn",
  "key28": "4Qfef4i38QBkxYXaj7Td2Gems2Xhy6sm1CYjRVaN1X2s8iGpUuGyJ4nNVrxZpECoqrysDtom5VdJHMkdCWoxaJwC",
  "key29": "2qzbh1Q3oWAbjNSzCNMwVJ3MNj4bRUKGhzK8aWh6hSvE6rC1CxJ3qV51gBLYgWnL63bM3irPkdYcyAzNRBCfrP4y",
  "key30": "53UGftYY2yz4KRXX9Ci7vzVJ74WNjhKjzhJi4XEkpTRSu1HBUXJwHCiduiNrJqYTQ7ofhW6mMmgrov4toK8hauo8",
  "key31": "3zmHxLAqGCbj3Hxy3Gh46sBr2STGCpMVLD2ckSGP6mcfhcqYCBdaUX9huSGNvbye6iAqEKZiqkWMeY1CqjAkDNg1",
  "key32": "37qUhHRW94rM4SMYQxj7LTcUAZvWg8nVbNiW6GnG3JTTLFLXMWVKLxdU8kKxkMiaLtiCLPvzZyaTEJxDWvoYsy1m",
  "key33": "2LJ9dkFRmUTthex5WWfv51GrcCaEVFotrL1Sw62XvBiAyAY627HAQJHDRHws2yJA8opQhprqn2P6p48krup8Nsfk",
  "key34": "53hL49B59J7cFr9qZgPuAURaSf7ytUiLuAjV1JkKHx72UKeCC5k3vfnRi1PdaoG5CepEGoSyrB9RAnesNBjDjaV2",
  "key35": "2s4Rr3rHnKT5UG3VpjUmKx24Tp8PL6ip18TLtrmB3X14TAkzLVzRUxrPqgMNJf8BH9z3ZbfonbK2myhpwcr6kPKX",
  "key36": "4jgSy8Fcx8nnuGXkCwRN8bjxx2WGjbNJndHyyCKgeT1CBKbgqv7n8cGcNFkMNKgrmetKobosU5k3AKoemXhf9QqP",
  "key37": "4bkRZ21BNu57DYm6Bxxnm8hwGVnG43Z2os5WREAqAiDo68RvXwsWVpWjp8u7vSh3YxJkq5WDAx4bNpsyqTBm4kSe",
  "key38": "4JCj9oGfxNTP6h8fqLi2i3SKwHe41zYYkX3TQwtAKtVQWub7D6tigPSeExmcDHW6yVgW8f6FMQEPfi3TieYq96oD",
  "key39": "cMtnpJo6Cpw2r9aMBZrsuF8a9K8F3QanbeCwUBwXFAR1dGC6sKfdi79qzHT32wZded4QKNqkCEViXwP9AvHF9NA",
  "key40": "5LG8V3FQv66AgazYbk1acxcuKhELVSpza4WJF7iJZjkWzy918L6rnBNkKiMs7HaHxSL8S1ixEoHoxcEvGikhVzgW",
  "key41": "2qoYUbijKhTcZy9JbpJUGx4Xr2cmRpZS3zN1fCmY8mrW4LtNXoFv54p1fyJHLwLJRSVbrUXYArvBuZjitzox4dQb",
  "key42": "2yKwxPRaqSRyppuwE22M1x6d99WhGneuQWbZJSE6tak5W7MmAb3HWey7VZ1quFauJPHAaDfnTgCEWMUnEQWSZsv4",
  "key43": "S1nGjLau3xSSQkMWV29MTKCyY1kv9UWL1zSrqu4vyuWHftScdHkvpPAEn5u7CxSNpbD8fzQwUz9v7B3Tt5Gggwd",
  "key44": "5YRtQ5RPGNahDGfZLhXDRaKcFwnP3WHJVvxqRX7CLKeybEagTuXpJbgNt5Hx1c6bbh9gwy7pXbGDY7wHZRBHPHNb",
  "key45": "2yYbGMDa7EkiJH68qGtf3LZaeeTQpCy7AJQgeyXkpbE6KZXLohHwzEySYJzjYGeXiP81SZonjPGApzsKEDSEgLsA"
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
