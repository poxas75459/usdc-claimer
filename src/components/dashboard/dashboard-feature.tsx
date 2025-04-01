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
    "HcAC4YDjs7iGtCEeN1uAs1skbVv6S8BaXgMzTQkWN3emwNMQVGo7hA6ivEK713UtxviK9k2TFNybWe69tdB6KVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2quVMyY99omWmxD7PqTaxtugf5RmsZ3FTAWPnYurTDQ9RWCuAJdMvbMpKGmswFsaQAmooeBVgRERdaJJHsogo3rH",
  "key1": "4rNFMQ9SzFixbE7oXAS5QaAu9QNFqi2rynhDbYPZEWmddjUEmHKmWQEG7vSeEaf7FEJGh54kQqTT8JdSka6XNgF5",
  "key2": "6PEdxczGASwgXSTnMYpG2rc81Hdes3QbZhFs3KJaSkHDJ59ZnVQ9HK7RvEpuK34DpZBdwcNWqun4YqGZFK93RLL",
  "key3": "5iwWrtbV1Ay7u2nUh4YMTUfdGi3M9k6sSDN39YnejhN2Hoj2fYjs4WryfgMws6PNmxTGaqZWFQCz3Q99EdxPUvw5",
  "key4": "WeVez8quUXqthosS7T4djijNZfpf9zT2tkuN2z3S2q7ciKGPo44Gu53BASR4FFMD9PHTLW6oqnyupumFxYaenKG",
  "key5": "zxpcZ7R3FA16AAdJryiUjA7GxSaDwy336sbEnwzMtdTw2W6uzq9y9Wvc5HrLEacWWz3hcLEM93WgvZS9wrv76Qk",
  "key6": "3zg77KG63vkDSH9rgLmQyfeaBkUPSwBPbNt4rbC22T2XbnFuTFA8bWi1iVDMhwZwKQXpmPLif3m76WP9dYfrLUAF",
  "key7": "5pGGVmkWZASZDAbxGA6ypmy65spWBJ7Up6tg3XYKXT13QCdSKQoLk2R9k8tN74Wf7V7QNQd28Tpg1vcCsGskgMDh",
  "key8": "4YFg3WebtbpRuA1HPpJJboNBf3eEhCRtLF6kEAkQf2zrxT9vZN8Ad5y3YYktq8ZTy2BYrYWmw7CRAuwNGHjtK2bp",
  "key9": "32VRkhfvUnyo2Fg1sXTZVV7PDeK69UScDG4RkX4XeEwY12bCUWwQRSNjeUsKeC7JxqKB9GeixQXQUkjuo3DRZpLK",
  "key10": "5QPT6brrbf7Yr6ky6XsdLWPnBfbUdumnitku9HXKNZZnyrk3uc9GBX7eY1Lq5eUoV4Jv7K6u7teXKA72edW4o2Tg",
  "key11": "3gPro9QYEqmk64BG8rZgZo11XBZJmk8EZLP1QRhNvLJB7Sxp6VyZgVZQLm71kNcZ9rm5pbiAg1tbfwebEseh8AqC",
  "key12": "2z4KdQ44jkKjJxQT1Z3K2jpGPeQqGm5inwBoCuk81CiuH3Txi2whJMe4BKpNbtH1oVDono1c5JLmYD89uh5koNQs",
  "key13": "58viKUsFSZHXzSTHFFtJNCbzgACNdqi49LM9M67pnh8GCzcmYvPrT1KzpZiEqqPM3dNZp9YREnoMP2G3nrCkxtpB",
  "key14": "47qimSiwoNwYasoFUJuNQaC8By3vbmSMQ3uNxeqdWfBh23WS4k46rwMFJw9SqEr44efuSohNK7WGa9pJPqsxQ1PL",
  "key15": "3iFrtNEppjLbdsTfMUGD6D3po4tmqWgHY4FyBztVSMg5nH7BaJ2VxatM5FerYmHJyYqUEQUupzV3G6g3zBxfmC6p",
  "key16": "88sBT1n5WmgmDxAn5QcsZPNQ4vsrCoBcjjGgVpZ1GWYak3NCoV6DHDi7g7fypdytCDngukKEGGHtNRzJuB6mx7q",
  "key17": "2gTWDt8ayhB3XEfi5uUcQure4AF3NjoyosUYYESunnhujD5WEaWPHpwHT2g7GJi9mUFDceWsFRVmHnaLvEiCNEVP",
  "key18": "5Vtjm23kKHmREXim5WCUUTdp168qj2WaFSfBAEAyHCrVRUZKarpejynHbvMvKFPaQDgLgieCGmF1pgoyBzFoBhny",
  "key19": "5LXRqoPefVgzmMNyxxuUxz4D8p3FrLQmvUAtvmbx7MzHdY5ZN2RoXsKbGJDNPPwMg4udnqTac4jUM7EqTd55DxsG",
  "key20": "3CCu44e5CAvdjxGsiFZTh5uBwnP5jfECvez1BnbFhJYBf5qtsNtWpjXyvRTS4osFkqNT5WeniG221M7L1z1aVKTY",
  "key21": "5EiTsJZXetis24cLE4pMvH6QA8bnwR9EUrdHY7XzGTJUKQ582g9vEbNcmrcq6dm4B2kiPERbx1XPdRHAZAqJp239",
  "key22": "5YUbhjaEKcL9aZBaLpBWPucA8yNDSiq4jc7DgENZ637M6XzKDdZXV2CTA8kxeRWwZ16MYWtpquytca9PbAeV7Gih",
  "key23": "qqTUB1fFGbz1DNjqeEpsnzgwFpPJgbhLd6ighdXKQjQfS3PEBKYjdgKWVnZy6K2drRTDq5PffRJWPotXf6BxXyk",
  "key24": "3yrzsVvP9CcP1mKuCJfUFNDCGtmTvB285T79BWDMTYC8b8AfSAZpRTfCHtsnCvqv4ib9sGzvAeFLe7hKaFbGwion",
  "key25": "3rDrqQgyHyg4vkqEocifbs44zwNDRYCMUY4kANFHvvajSVfYq26hQyQcNvp1SPKPMxca4FXg5dawRu7iVH1smUVu",
  "key26": "iKhm62LyHUjqbLNvo1UGMg99YatWptPauuHf9ZKcaAHyRzif5YWdNhDCAcPky6DjzhXS1nF7aCt4364YEYhD9ok",
  "key27": "48kwrfVnHqTd5hPcie1DLi491YD9DMf3XZuJAwLaGNViAsGYKi8tgnshtw748ERemJghFPouphpngaEAx2R5Nuvn",
  "key28": "26Y25WVEuRp4uW4xGZD9qpUMs4cj7e7smkcTmLb2mQ3sYSB9Gw7NQx68eZdLKdwyYcMUb1Ape2KWpj6TLjF3Q45G",
  "key29": "4pgNPoV3KdSBSG8DiMCwdFAZREoXD6bbZYz2H1G3LfXwLZ3LDHYwJrroDTpjbuGCcuF7sQNfnxj1Aaz4tpnmLGh5",
  "key30": "LkGQA4WHYis73yczz1nF3JdhT9AJv5exAGQAX8htRAEtAmAyhNmgthdygFxowUyUPUrH5cV9dFoxWqbACeZhZ4f",
  "key31": "2hxv9vR5KdMxWeC5edb8rph5P72eXXVM9s6ab5bdUKGKcFD2jZowLP5xR2ELyTxuRK9epBwg63Cx9jimoHC3Qa8u",
  "key32": "27d41ReJZnAyjb1oR7w2DFbbEzNG9xnJcJRKqHbA4A5QsFWNUn1WzzaMuUmSMLZFY2aieJeq32CweTaBVJAfJZcs",
  "key33": "5rtcmuUJGsKGaQzDrUqS54Q7km8XiZWdrwmZvQQfU2N3K5jPyyh1tuXGEMEATSVv18HFAVQH7xkPE8CgGaiq6UAQ",
  "key34": "3ssYxxn1XrH623iRhwjYTFoCfEER8WbNJ8p4kHTmYXRJvbamsaQTF2Wu2G1GnDpNw8ai7egRTcBCBLFyehLRbmFT",
  "key35": "5WFZc2Jw1UyjjLFsXZwyzfLmnrod1KgMMtZxNH6mfCu2jokf5D2sxckDkiVXpJ3oRdUjNdVdrpA87VA4Kx9ja2Wt",
  "key36": "5rmjBCfuTWsWXNviTrQt1raeM3qTqcBW7Nb6inhiHDucecrrjC6tKDd2jEjASfxsTSJtt8M59P4zXdbGgFeFbDJC",
  "key37": "4vsAFzyJdHg139GPLYbMXbJYkt9aYv3X6CZ17nYuGeEtjDevaQg6hUU2WBhuhNF1YqnrnWCJHzRHAGGrrCGH79ig",
  "key38": "3WJCHzED2Lcnoz8i81AKeXM6HsbF1xQJ48ip7NTaqYyhNqpNNPecuUYq8pUdUtcg2uFT4QGk21xWBEo9KKRdBEWV",
  "key39": "2SfQ46RTYWdBgWJdRPV2mjduk4yjyroQgr72muBED4VEuYgDuRKgDBdYesW5xykBfyawgFY3o43Uyge6FFTRTBpt",
  "key40": "123vnhgqtrfNsBjGkMxGLQfajSLWAQj1dFByh2sGjsgB7po9f85iqEhz8cT9cion1DCH5Zi1VxiYK5wot6WE8WHC",
  "key41": "Uu7ZhwszArxLD3KiSanobjB9u87NCQXbbdzB4h6mCjVFuxBXAPwTR3kDtyj1MZF6ebYGv1CDHDYaaz7csgPexLj",
  "key42": "3HhxMN4EdX6TfF8Z6uMXbDkkx86DxBhbbSjWaV7ZgRfN3GTTPCGMC8NHAHUu1pEN1NNw4g19DR3poFLcsByeisFv",
  "key43": "4bU8SGXKRtEmvmsfBYhcgGWrqtsATg5MztiM923TFVwtekqdiY9K7oTMbbrjFBBm76Ej2tFa6t4KrwFjWi6Rode6",
  "key44": "32EdFJth846CMQf57xcvVCJpMBBnYn1KVY9Xrfdk4bhVZTbsKP1ChTgMm89R3W9h345kffYxRw7nGRhRgej1TrCe",
  "key45": "4NjDRXX4JCSNLjntdzSYm1GMSqcfkcs1WEBW4ebVi71iP6S4BQbd3b3qHgBDBERbhrQ1zf1owRjCcSY88Ppt2ebo",
  "key46": "3oNGJHkD4jKC2KChCzDqHKcMJRwkfzTCTcssRztX4PniD9tJgcvx1bZ81p3hq8MAf5S6eFAtvj4iYWuro9eZqDew",
  "key47": "boxbZwhWdnDmEHaDe7LjvyUFm3ZbWuBYkzrWvD7BEpoMbmKidYsLsD76BU87rSQXBmyYxMAwhLxUvJtgqF5URKN",
  "key48": "3itg6UzaM3YzwVhE5Ka1hHDdaGyg4Ajar5tQq7ufrbEh3SVkxUc8ArY6BNMM7PMrLZMHmvnoq95e3jUofdouMLZU",
  "key49": "57o3w93Mw7Ln2wQvhhRxumhm2JLqwpu3rhvURYu6q9ponAbpXnxaKQwZfM3mpTY4x25AUwS6y8t9aRzUov6JtVCw"
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
