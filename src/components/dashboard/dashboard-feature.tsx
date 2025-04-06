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
    "51VQs3ZmDA1qHa3dB3DYyjRrd1iCMpwkNki6bZ3NSaCGTyoArFBnmsji46pkMxzJtN6TQ4Scn57DcagG9H83xmQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UhQ6Eu7ELssenDiqv4uNqbs2D8dzgEHGz5fYwRUM4ywJGimXvqVvt8bZ5YyAWsfmK8oLGGYVBmn3bH2bAoyRyr9",
  "key1": "61DpfFuaTSus2TMsicNiPtdTa5VNP9MCxasGxXrGJfJo22fPDMuQmMm7pxtm1sSWH8wvcoopY83VvqxPNEe1AghB",
  "key2": "3zALSvx9zCQQ9CzsgF4vY3SFccC2uHyAGYqhHUoZdu8HxScUw3RJHXng3jZCSrd6AZkfR34Er8rspnKZgjBeLCCU",
  "key3": "5BBmsGxjGu7x4xCyoYEsXPGDpJTjmdY55huJEMTk7MvYpLaWjKAwde7hbwx5yEUFV7GnxMVwjUkDbW8DGT4cWAKh",
  "key4": "3v2MJeQ8ZwZE2adLjg49nAWF2sTp7qnNpRsgLHZ6Z2fCyMyWhQYZuET9wr5aBNSX7JL5Vd6Mo3zZbuNJpVUzHjtS",
  "key5": "5N5yX8S3eHhjnQoVEveTsSETHRUQRvEvDMwthaShrB8uvnKhjaMm4TfnrKjmyGSifsrF1U3wPGh35HW7XoSj2gH1",
  "key6": "4bV91MCCmuh5wFF9njBT33ngfjXKS9PokXAN14kLrwkZMtU2KYC6PgHxWbeV9tWUvL71R9daKHhfZ7cBGDxpDeWw",
  "key7": "3Q8ojt6cTnG788h96cqYkBuHRNd5Hggn7MachnctDQ7VQo3My1NnGC47GUt1aBW1SLcNXPaLPb8T1kpjiTF9xute",
  "key8": "3SXMTsUQnbpBMXXjWEwcNdRq58j6oJYNUbTdAZdeQANJ8N6es8moXt3E8wRVrXha7ic7mb59vTcAKD4AUWwxxaiK",
  "key9": "41Q9Q6A7rqe966J2pgASRi9s4T6DkkBqXYeDizWLj4TKVTuFULQt6Dc2btVKryp5kRV4idFf9yCszxHESGfkHBaD",
  "key10": "2qCZNqdX4Yezfw8r6BWsXKHpVHNBseBgXFJ7EYxmPLPz2PXuYnNjKvmeVWvZiJbJmJD5Tgpd1won7jsRCXto89mX",
  "key11": "55r7RTtssmjT7LaGrP7jma1infoBqhSa419PThU8iEifokm8BT524fJ24yvZ9oVvyYHRg9kuWDmQUXincuBBsyUU",
  "key12": "hMh7uBMDGotZTRfsbHg2BM7GYNvAkut3FffDg6oTEvYqHvNw1DnKoYiPafn9vb8JUSHJw925Sfqm6mMhLrbFnep",
  "key13": "28TqPdDAZj26AeeGnEdkoKKfGi7Bx9ZvKaybtexzVm8cmHcmBpYYzFXRBAxpESJo5cca9Ty9wQ7vKYZTVusyRYrT",
  "key14": "5ug6CXJf5YxUSgxBK8jhuggeJ8fmUdUdsyvjNynWgCpR5rX4nC2gbr3rcy19waAEbuKP1pEg2ZyAF6Fc6P1vJox7",
  "key15": "5Bvp8UZe6LjWuWmCtfG6egwUqaNDhoHzfVRGZ21yASz4uo635Kt8s3RXjXXnpieMvfqxwqcYWVm7qX5VrZtv4wKe",
  "key16": "5cWCV1Qv2DDRYxTnvyHGHEQpD7Cdc4h1qjpUr9HaXybxrwFpfTckH7XDdY8HpbGQryYiSyLTCSyKCnMLvT6oPXi2",
  "key17": "2yoJYfccAA9QuRA4kafTgmKtCRb41a3jPhC6w5pjSu8mihejyYbF12mEvW4cXh3apjNFCjP3Vb67JPmZohkV23J1",
  "key18": "ZpfnzNEKSF9e2HQFsfjR779idRvGTUS2sDesXPZL6HEHhSNocZEsxmYk5sM1ByChG6yU7Xw9rVd2z575LJCvjGv",
  "key19": "38yhBmoqSAxBL1GSW5njFF1W6Lo5EJoAPWmXpk1G1VakE7p6Mu7QhYZRmqHm7C7v3qkSPM6kLjJciMrRozrQeXzB",
  "key20": "5JDRnA2gvehwD2sigskDnWuacrLnr42b5FuhAB5gC44Nrv12nYaBBqtazVgpPkP9ZFtLuJcZcQh2XNqUBjcibu4c",
  "key21": "3mKBmXcuyUrzPnnwHfHSvs4y6Gm7gMTG26s4pXnwRsiFxAuw1STSDktB1fGKph6W9pdAx7DYVHQqSc19djTa96HB",
  "key22": "5qyVaWvkSr7dgcQMmeWYbSbnb61PZwvrMAHw1qsBgAtQBqZPxUk4AxTobYeMv8R8QVEc37McKEbqiyYTuoe5DRat",
  "key23": "2gmXTrWVe7nDDFahRAdSGJvNs9GVGLy6Ym8X16yGL12AYddyU1QsEzvrskxVN4Y6i6ZGXKk2et8S3VAKAe9nHgRE",
  "key24": "4YEKTnvi37JQaa1TMvUsJ8epYwMh8UeL9EZ14ooARj35gCYec8oAgj1Pf4zJ2qTNEihb1fgiAN1GBDAjoAKaCEUa",
  "key25": "2wqUNTCrQ4HikoahEzLVBGWWgFV6cLNerdz7buVWFP75yP6tnUvdKRrZo4Hyt23H14CguZQKyCzGFuyzhu4AgggU",
  "key26": "4cRvtUc43Bx4mwH4eMNgVVMguoENM6qmQE8RFpNVoNNZcN8ig9ptjQmDQkhPQ82KWupyCfusJZrnUGxDYZHTcPNV",
  "key27": "44CErdDnbpAE1QHHAZQmzh4yV9TPJDUEREHUpoePVKyeXc19RnZL6j4rbZfgMtTBwRfDBAYKB6g94h8ue82UpYf8",
  "key28": "35nC3qCvY4WsPWwtRiEtL4tdxayZnKSoy4efCWPTu9FP1BqzcKMSp2DNVSq62FPQxK6LiFmRHVFBHb2Z8P9UHiLC",
  "key29": "5HZZcht5yjpVrKmPTZSbrKssQ1ugSRRD91Vk8tPcLx1K14XibiwLE7ffNSoFyqPQfFmeTHMVaAXPDyEeWat3kjBq",
  "key30": "HRxBcrABvPHFDLjBLW2T36VTMxxZAJg9GLZ8vLCuibbA5qBCgAz6VA6BcYkxWsDJLbW5Qckxi452PGYyWivrGA5",
  "key31": "4jhCTTAnFVfiKd7qdy2e17x1HFekVf11jZbFXc81vC3QFPYZrrFRJCL3QnfVaqcMaWVB6bZW1i1jk8MmzPnH86V4",
  "key32": "3p7pfr3poybc4EqHdw9KjcwrAqQxpJM8KGzNMjNfe5hxPeRqUys774bZVcDiTXMG6r7PKe3fpP1pGe5dSbVSAmad",
  "key33": "4iktPv2db5JLYTEb1dUBp2rwizyPteyBR5pF61WUGZBx8BuevMzY3SzFunRtsNR9Pyi43eHCj9VGpbAgA1cyFVx2",
  "key34": "63iH5PYeDL8B1nbt5fdxivSEJHvvgCqDxxLM5edXnopV5XK2JTWmEkn9yUhNwPvwZhTEQQeWyPrnwdvhKgs3AjZw",
  "key35": "xQ8tMtZsWw3LLXpzy3MGj7LiJnWqETedhKwF9t7xC1gMJdcdwbeYSKhLKvkeqWjWQL7WW3Nwyb5vGagXfvmxRCJ",
  "key36": "51Cjr2H5fuqJxmZnxswqwqBAE2mkZFVkmPqx4t1qep5tPoe9ffsA3dDpdfSYCtjsZ4ghKCXpqw6VQDPfzp8znAdu",
  "key37": "4MyD4kEH9abJerLzD6NNgU9f9cLmKmk4QLnJNG9EaLKaVcX9GC5gtEuhJPWL4fjnX3RaHFBwNWTnRpMV64HtezbB",
  "key38": "3eoJMP7GeFaqJu4dgcqaAJTCYFejT3uYfPGS4D8KErf5vhVZK6VzSNPoPtXmMF4oCCTFx8BcohrkYPaa1h9upcuS",
  "key39": "3JQmvcNrwoG8fdx63YEaLK2rWCz9Cd8bQB8ebLf7XdWUxLnEoKnQGoz4CfTHTZJ3iv2jZc4byy1PbsKEedQPf52u",
  "key40": "dqUQCcA2B4aDoqnbWFGmhNnhRhQgJGx9u5DBDi9N9fFqV58TtjQDqyKxAYXWNXhgZHJFnuAk96Nur8TbLxunQs2",
  "key41": "2p5Kg5rpKRVEommrRiLNkwBNPZGWcVvTzU9PcUAe6NZKbD67A3n4M7TGbeswfv3ZCGwyNn1NDgp7wbkZSegyeMhS",
  "key42": "5aX4UUJgLNLJ1s4tEfXq8usdz4SXQxPtMwcTK4v8LNaxca6kNfCJv5CPv9HabS7PKAuL9fuoAdkt8cLsqBV7iBaK"
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
