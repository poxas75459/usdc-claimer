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
    "2dxcBrsCSEQVET2iWDZRVokD1Gg9fYJ8y8W2eCR5Xo9LK3UaMunrkdqAAkSfTNiJ7PKYiHnzKV8APqaTVch4XwEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aW7ZP83GmqEGc6RiUcoxopkp4ZPt5znYhmTj6BAFLa7dpkJj1mYaWfr5Gi1ZoDLD2pFmYwWWVQm1dFQ9Yb4ruTL",
  "key1": "21YH7tgdTbZMSLtBWXXp9xb6DQ7MZ97SRAeTE74Q6w68unbRqKB2az4zmw4BsUUhNkNCLS753Neqr3awreX2DN3o",
  "key2": "4mtTqj34FDdzAwxwLgjE2sbJeiAQ1YCtbeoAFTgpHKjXnH4eLgfv7rgFfnaEv4aNrDxGaN9ivLkjbkya1UXtsa2j",
  "key3": "3kMMtQetcPxH64b9QGjvLN6mfVcYnH43zuuUQcojUoQjHPBX5vKsf7sdX3SrMGq2BDpS9fdDyPaXPq7FK3U5n3Vx",
  "key4": "3mW7e3b1JZcebg2ng5rQCxMgcEYfrEaqXHSSSb82YiGzpcK7UCCXRKkBn1Z3hooi1UwkPxQegU2Np56V5xe3Uqrh",
  "key5": "kcTyhLYfc1pFWMzhKZ5LmZg3N6mB6jL8j4Mdyacbc6nZoDTUCZHpuyYGLEvmce6CepX6MdGgn19cXcXR2PGueUd",
  "key6": "26Q4kgGHQGotYvvZaEEApLzB7NkvDMgVur6AiT81eiUMB6siz4FiBm47A5ZNJJjGQXx2VS1R2EyvGUh3AB4YHuqv",
  "key7": "44FMCfvYW6Cr8q3fwQqLQRZ4RKsScCfVpEYGNx1yQERj8y7Buyt4jYamteqwVgLGih7PEVM9zyj3NtLsHKuL5QqZ",
  "key8": "3psucQu44VoW6t6JxuFvPJk9RWaJ1TTyJcYCbeYg8Bg6p7ZT7SsHDrzBnU44q52iT5qc172zrdeTE1rXQCGzJ1Su",
  "key9": "MpwYEbwtrENnFo3PT9ScEkSVdkzakTXijbqHo8t3gk1B3HRYPRmWeFFcwUPxwowRYoM5CiYnt3W3Do83rFo9j6r",
  "key10": "6EdNgjfMPbs4B5H7jkJU4V8nfHUDi2mNziwXsUTJm7iG7d9aE9ym1zFMQk94CJ7eRaQ1JfFgeqXpdFRRYLqbBfM",
  "key11": "2X59dGM2vQtMCz6AmfVBnKRrksYL66wYj3XKQgf2WGhuyGtJrDN8fUkyitd4CApftxYzYhV9vd34TbgEHW4CFwGW",
  "key12": "3PeUfuGkHgFdre7XERhuPnX468RBYKkjVQM6A4R5HKx6ByQfxvm654JWWsc2eRAHTba8zkcD1NRFgyD4SU9SZ8CE",
  "key13": "teyyMBfzznFfdtNJiqE9Q8NC1wN6qrvBysDj1zuxT2DzicDRvy54qLfuexoiXStHuz1oUL9vNhn3kfKDbCDQ2qy",
  "key14": "TnveJYpgdCr5KCz9QwHZMUR9fGcW6cd2ob848cACeX37aoaLggzjnJxnkK3J13sC755fsQUXm9yjPTLchifpUHs",
  "key15": "4wSqCB5oLWuvK4abi6ddgj8UPDgt4caaFbtJSAYr1fphVxEs2mafoWyfsA33FYExPuS9dNUzzoNpHZTqzmrWSSNk",
  "key16": "3ys1AXzgmYowJ2Wo7YwMQzXXBcF1SKZfQ524iyuqdffNKrZyYZ3ujTDWxKD4N4hXRMMueXC4nqdoek6tcDpgSayu",
  "key17": "tDTQWpEhv4yDTeaXajRVrTNSY9BoKkvYqGeoMdWRJ3by7bsoDF9BqvdomdbzuQWKABPVR2VjVqUTtnGk9XPeK28",
  "key18": "2hP3QLyY7rJuHR6Y8XvNEFP33LBViZFk6zXQrTTCwAcYR9AQtGATjbmy2x49zFv1SE3WD2ZHxNn4zyrerA7uXn9J",
  "key19": "3PM879xw7zKY433PuwMyJGeYNvTBxq163a54EwbVgriX4L4xGgvdHAnNNUaEbpYnushrAfYWYoidGt5S2HUomh8C",
  "key20": "4sPWkoHjC88d8y9AaLXozbA9ZFYSeErFMnhG1Ye6rF3tsCrqttenyCUGg6N8afPgQqPtP9aLjhioJ1iqRz729jjM",
  "key21": "36GtHuHxAXP7EiJm89cHxuhTShTEtwA1B8NE9b47YWR6oKuCepoRuL7zFeeLopQR2Lfn5n4S2E4S1tpbsAUHoPAy",
  "key22": "2BYco6hUA7oW1nwUsA9uxu2VjhxA4auArhdXCpKMcjyN71abmmwxe4DzifjZUR2Qv11B9csQfzGRh56DkPZGDT6o",
  "key23": "4QPKEMmuSvqiDfXsuswWJ4qeWUCQkhPV5DXxdLvKDcPQoDgWrZkEfK1mWNucr8pF37gr9U4HU6NkQ9oxtMCi6oWU",
  "key24": "5YGXae4dqUU3uLbXbRUgPRd3kvbMxyyguJrzipZhd6meSFgpksATXiu6x97bA6UPda7TvyAa79YG8JaUski9P2r6",
  "key25": "64piR6Z1XZTSqaMxcBRuJmjRYYR6HaDdcZ1qnqDQFYm1qWRMokdTRhtDkcnn8RSvM3NCUvG89vNuLEKhybkXrWL",
  "key26": "5cDfzvmR8ZhACCGrAKbGep7Giq1urFyyZPuqy7L8E56c36eztDS7rBWu3xaHdDwgqjXjuM1wBuHwz9hh3DDUXRZE",
  "key27": "5tHrxR6kvRD29kdM74n8JfUTfXzAqW5WSeRw212X6JeMRvPTKGrGtw3c8rRWg8Kd6RtcVoeTHwipM7pSabg6MEVx",
  "key28": "4AqHpRVdXXcRgwodHjg62mfP6uozyRiXqncRPTJJTD9TKwDPdkLnAcT4ZrKiqsEXh2bRkrEdnRiDsh6KDxtbxo1q",
  "key29": "4wgzZDMU8jpBxz3FEAZvYcQ115AVsKak9Y44dmWL9pUAg1ip16Zcu3aUnS3qwbJJbXvXes3mwhaWGV6mmX1nz5k4",
  "key30": "5N1QcvQLRuWzhBVavsv9HYy3KZJ6B7WkAQ82BeA3E5qdFUVUnNXkqsvVoHxMVrWQFdNuyT5gSVL2zkNqRxaw27Z2",
  "key31": "2ZsXMby3662fqHxy45aweX26icBdRCSFTFLQe4SABHBFiVshExDycqxxwteRQMs2CQ8ppWSX3bCiZ5z4uvSdCvak",
  "key32": "2GzP58mxBDmmTmTbf7mKyY95v5yJmdpji5MXAxHsZs8icaVKfTomRzy5835jYHYHa7MQcLgTKakyNbP1XF6FvGgy",
  "key33": "3m59sYDsDfUiUMCjuudNPjYpaidPF4UQJFVxCcvs51NDwRdhahE1vefeG1eBmBtwLbC3vGfp3gKw99MrKqRiUkt5",
  "key34": "4WG77NmYRGMHYW5EcLiHKEnswuwDvWz5DpEX89HwwoZPW7D6FtgeXXtWE5MXzdVpdp4N1v4SEpuXYgZmzd9S9SEs",
  "key35": "2PNAhe1Afj1JAnKEDbNAzbevkfNCVnyCEkfVsfQd28hWzQK6B768F2PRUTuB1APRD3QHEouH3w47XrpefEMC57wa",
  "key36": "2PMEzBKoZNJ2nwr2ZqH1bYzuUgNNWvhV6tLtP5La2wVCepxc7Kxzq1CotYoDhwCjkn2SEu44HfFu4VfewsMntwk1",
  "key37": "GB6C9dzDGJdLB3mve9MMi2rJo7KBqmnAxXVrc3DmN5xJqjyUL9GDkTV9SaXjL5sLnegpfx2LhBG8nYXdXABYP6c",
  "key38": "4P7WtUpEPBYryk2snR45GnoapYhiwtm8LEz49V5edsAoFFiRmiVtHoHmWCpjNbXoD32nSXLGPe8UH5bza3Kd43j9",
  "key39": "pLHVYkAcae3Kws2sLwVHTvLr18ChcECMQ9iJbDGhDEemarCpBCjGLBt8znBw1DryTCjrcmytepWVwz7RM4Hys8y",
  "key40": "4ZXSxwpj6YbmL37e4sz7wtUrN7oWUKMn5zyAQXncJ8ZBBRDCi4QgitCQ7sgskP5brU7kvsm3z3nzGg6B4RhoRAmW",
  "key41": "28aeTHuJxbWEbBX76JwwnLbHVcM3zYVuJXQSRshdWbyWAbEFam2oEWpt577PUYF6LvDuzMZ2bVo8ehg76aimhXEw"
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
