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
    "429JfGyMJPTLxBbuEQpyP9yTdzctCctZKjnQdhLr9abdWdBTZtT95A23vJbnVuG5XM2wk52DaDNZ4tcyvR5CjMqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RQw16fANhZoarpeWQSE4C13M3rVeu1UPtzMhqL4tPYM7URngUP4rYMB26hvM7ruyQUrhkNRdErh1dUa3ybRxb3s",
  "key1": "3G29K3CWRaSTUm4GFDZjsKNuSbjiFcP1mKVDt2PFXAYL6mBhpS7AJQSP8kTbbsCJ34wh3Aoiwuo2sTt7b8MMQk9D",
  "key2": "fHoJSvTDKAWbCvaTs93LHckcrYxs3tKXSuej7YS9S47BEQm8sdw2vUE2unXiAfbP2V1sWy68ZXVjemDHB5J5f5t",
  "key3": "2bN3hPi6CU9ymraUHPY9n667o18pTwXUMSsJPukNsBCLHaPUvznSMW6af4WgPXvJY2Cnhme7svrotB96m9VXzTw4",
  "key4": "3RBbo5FthdYtndY7CmBcE4ooL2tp59F5sT6shm8rtPQRr4J1T93KoBtMzUZ1BvuW1RvANf5qzoopBXhxvM7jjXFY",
  "key5": "4Z4VCyA66VmufT4oLQLxRzuBjbCkMqEAfNeiASze69jz5WLjH2KkqHWEw8zGhGPqS4SwLh2Z98WSGhZAcNu2qKJD",
  "key6": "3nPDEBkDwnD9TSt5jvVuyFUARWWte623aoZ4qjhsAJPZdpRNPABa6VHyu7WujDjWywpPozXBgUezXx2o5s4Hfzmv",
  "key7": "3GeTTmP6y9CZkkM4VsF6hPGpWgTqWT3PX92XrL8ouF1k56KfwY2oDb5qK5S5MZyP3TYxc8qwDZuf95TrVic1yLQV",
  "key8": "4FnbL1hNqzeRJAnFknFJLV7Krq9FLr4Z3LeqWxALEZnjiWfmEfe4BP9iheqYLkqvhqSzZ7zTuT87WPYUN3QH86Ng",
  "key9": "3toNUn4pFvCnVbHCUk1sq7ixw4yaN7kyFc5dpDUk2Bxd8v8nZsT1briPtbKVLLyFqA9tyyyjwUMdy7z3bsxyg8m8",
  "key10": "vdqiE6L74ey2fokbDqzJXc6MhzTDRi3gXnB1TB2Q6n27J8bSpA1Z3VnbMqYHFC5DE2rSC8YSZwUoaHGf4re963F",
  "key11": "5CC2pdP3s9rG5DYjs82aFExh876LM2uQD1fN7Xi5fQvp8orVLGXwnrexZzjCJbLez4YnbqXSP2Ho6S8tXeeJKyKD",
  "key12": "4ZfLyw79BTKXQBDmFjN6xdHioq7Mon45k3A9sLP7ebPQ41fhy4am2R2sdh91ShyFtTFehsJigL7i8E5XwHQoWscw",
  "key13": "4Qsjav8fBP6bvkgmsU51sei547aCrEgAyNwMrsPi3uVASY9PfKTeCp8M9UytNWvtaWtLFrRuVpjyByqEkDAEQ1Pb",
  "key14": "4R1ngAutuuC1ofgyYhWt1mXyFWYCmpSibQaqx8d6CLpRMV9bErL61WsHCrBm4cyCpUBNWJKwP2UEMWMSBqbN2LaL",
  "key15": "5Xvixb1FERMieb5uxD8fcbu4t4v5QUg7JTHe5ynQnDkCi8YiHWGBjowKtqhvGgD2y8D9uXTeWJC4PkvvY2c2KHa1",
  "key16": "2BEXMac6DGoWRSvrgty1vypwwSty3aG5iCHBZjTXMQC6zomcrViJQGuQfmWCToWBxZ9Q7HbokJgKNsDHTKuQtDoY",
  "key17": "3U1WkpXHTwp4igmPiJFRiiMd6buW2VJ39aGTcVns1HXnDZUN7DGjTn6ZCNHnkZJBRc52WAuVkiqi7YaZguZyNBvk",
  "key18": "2jsYzbkAG3b9FZiUA2embGtTVGxFFubRLX7UyBnBGtSyMsdr2iNc52ihSeeWBMDnkQvHShpBcCjrZ24hVkeqK66A",
  "key19": "3XyJgXvWkRKiqcY4QBzLnBFqujVmwdAbFN5WfkVwYFquiUgc2wVNTFdiTSXqJBMdCQNmK2NQAe3JdjAA5qZUsqff",
  "key20": "3j5aMewKBamr92wPcMDAzLC3XKkqUBVp75DjtTQBrQ94f4kyGkbiyUy3BDtUaA2NjfMtgSdtc9qbBaWfJEoZz7Nt",
  "key21": "2xoFaniySzwjngtJV3h2nDkdu6rqfTi9vZWPuHFGz1MqtjDXbtCLWvzXdbCwhwP1jxbQh8PSeEip7Kq3SGbCi42w",
  "key22": "5nWjaGbTzUswUAEQUJ76voeF2KooCWCvodqtjQHBuQcB1Bug1GtRnjvC9MRTJD4Ee7GNb4XdSFoTshKxuw6eq6v2",
  "key23": "5KBHvYShirC78CEj1sjTecMKBHKGLb87rNA3ZoAEE3DthBRekza8mDsfAKC7DLW3Km7PXJDE2x5MNpdP7Phm6uk4",
  "key24": "WpcL9dbuVRbLvpYnH8hmr21UPVBA2F99wCpjEu6WDXAbejyQTzaZyeeAdQnQDmCWqY68SiuTyQUQWvXezFPguHC",
  "key25": "2z7pxjny8GKo1VE5CScC9qZ2Mufi6sLduDN5veTxDaVeEiiasyDkxS2kzvGubAzsMScxXqzLPCSr6idH8P24bntw",
  "key26": "26n1KViCBfgDKHQV8sReKURrLNdJsL3kr2LChMcohVBLepfSc8bfsHhzqD2UiKh3rUcuPCZGK3ZutsANLE4YSniY",
  "key27": "4C3XJR2T6WzB1LnJERMZGT2yHSNmUJNc56VNo3Jp2y4b7MHqjp9Nx5Cm9Z7aEdjP4SeLduoNNY6E4Xh7xq9kvend",
  "key28": "5itdH8sf7ukBiQxaSLjrb3CVReTChHUjFNpHwz5JkFuAjJaGTNnL2bA59YLo3q6T2yXnuEvsaSqDcEDvtJJCgJEK",
  "key29": "5FasJWy5obvrYD3wLG7W8aDj45G5KtgHLfi78NznRUp8wGNEhv8jixDhZEFG9WfhwXne5kCgDB6c1WjGkv7mZbFw",
  "key30": "yZgB13bF8vwFsftxA1EVdMzrvYPq2G7uttiCGGATCqcodiNsVaSrtDqZZDCUEsNAUhoTrSu6axVB88DkAWBSL6v",
  "key31": "2cN5jAFWhz3XjLtFPqP8CKEj9LhkgKvc9NZDbxz2KMyExdEZVPF4TLdzHkyLL2Ld6a8Nx6qcUUr1Q2pUG7hAzEZC",
  "key32": "2Q5HoX8Rv7d245fFWS5jtDCEsACRk9rK298jEHLF3QGRT2MPsJ6BRsDH9PXakDP8gaaS167oaznhXh9Ab9z1ZnNr",
  "key33": "5KbjrHLgdrocrty2qYKrJKfVNHP5DMxmM3zhAKhbiHWmVwuCXuEjuig5KV6XpQytZfiCTfKhuVJnc9xtT4B5Femu",
  "key34": "x4cKqkv2b7QiNFefkhgfU8eh17P1jUYi2YaQpz54MYSDgGdiKoCmvb7jnX9xauVbxPARaXZ2jynosJavDxn7vcB",
  "key35": "5AoBi7K7ouprJueieDAkM5MiTCpeanijL43DRRyMtU4ht8MfMBY9t2ScSaN7iP8Y6cKY2ej7d48qsJCc2YpTAk9A",
  "key36": "3ssvAK74VijZHadAiW8qzkLfa1Z2QExf4iFZgLuZ3y4uVTXyfEsgUqbN1m4imQxy7NAgoPZKFzmNY9RSVUkdZ6nd",
  "key37": "4nBjAiWUfjiHsMzweSB166tC2n1J2GTAcwohGYB4bs8vTcQzTsrhUWRf2ces1tG53feTzgSvtmvhZrhdruazSMpm",
  "key38": "466RQMKbKm7oLi4SerQeyi5z4fB2ZKhz2Pd2VMEUCAEeXJFw2E4145Vqauuisr39tivwRSY5MFgy9pRoQsnxMLan",
  "key39": "4opGhJisbchacxivk2kqeByF2SDdPByPGRof2ocR2v2KUfd3s5C8VcFuiysGGviT8qm3eTtDEnnCDPsSvFeTPBth",
  "key40": "HUXxCZNRwiKk3tEJK1cGwaj6tC63cWKPyGRT335ANQc9BwvLscTjz1suTN8cKAgTAoCqo8Zug2n4yQBddFosBWm",
  "key41": "xreYc4kVLb48AMSkJU5tZ6muGJvLuQrRv2y6Hvxgc92KpKeNn3tGudFbVx95Yc7ydZcYAC1pBfFqfbkJxKFkknM",
  "key42": "2pfyqvGkXswjYmMepm2xZqR9PaTijfdCwnGiMqoRjrKpWrJjFkFu2LFcR9QmnQnywEgpCNvgp8jPqmtCb2VWYZRt",
  "key43": "4KBey5JD1tkRqGy1PKBVRGSBMqWydVfs4SHZwGy8En6TLD8zZNBXytb8qpQVxETUt7RcNaeZECpQndGRwvJsEhtk",
  "key44": "3eKCNVGgB2FuDggJh7hX8UoUSe6tirGf4VfnEjQ34MVWeemzbeDNHm59VZiZ2Ga51xGDmj5Q5VmuxYiYHYmFu6Hd",
  "key45": "3FnZY75wqgTRbYKN6nKftCJrN4CoUQS7Bko8aPoY57eGqy2scJnFtKDs2dW5r62K3BbgMHi6iv8H7ezkZs7KuTAG",
  "key46": "2fT743dqZbS47GYDTsFczVk7ky9JwfrXfeRpb71YJ3jTtmMdLZ3WAW3bKMK3h17khWG2TX1r99bmk7q4bsdFoDYp"
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
