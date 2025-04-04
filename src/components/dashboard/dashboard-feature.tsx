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
    "4Qms1eVRAhK1zNiCdz6vyzr9LqTkp2xUubzh4iiio2cqNpLnxSsF5YfaTnNK2J6FaYmZ9VYr4ufJ9CHtdZPNXAiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VxFh8ouzmfGTZUU3wi8vCbizRf2X2y2pgSNMYStrW267XnUCrQjqHe8vkseBNKxSf2CgrvHUyjzPKNnaC7RsZwm",
  "key1": "5q9nPBPdN5QfGfbSz1ZHyUCu1VS5JQUwbkYGCpRbY84RL2XadRf144FjRf6fETbxZUYGPiTtme4kZ2GYAFrPF48z",
  "key2": "4TWp7Xo2oz9ELNcyJ4nw9dykoWiHRF3Y34uGJrmHqCk4dqeAaf6uahGuibaDWu42GKrHd7uCccYhYhiFtEDWcYae",
  "key3": "4JXYHJoVVPWWNp53KRJ8ERGv5hWkmqXW6AsFYyE2dPWymrF6uatQGnx8NXfTdFhSiwiysUsHXDmNhgP6YwmokWJ1",
  "key4": "HVd1mfRg78SNayZkDi1GrBPkYtdsPgzwV2iFR5BwLzB3f6km1y7EFegsHwpzzwJh1ggAHaC6uqHDWZJcn16M6w7",
  "key5": "4ABNM6WumYWS4Vuo6PGor2zNoqrMkGKWb3MQ88z9RDAqHdwDRqked89vAqGfCYLvzkyftXeSEvdmTWFQRYeX2tLM",
  "key6": "5mZEKVweDtKRPsAgspXdRK5z4sbArVGpjRQihVsHcnoNRciqj4Z9qFPn8cb4Ptfqo99pB95ZiWteLLkhKVdwEq8T",
  "key7": "8gNhGrfTu9ovZjTW5vDiLP1QbXGeyHY1zaV596SG4VVC5aQCFUNurvjsoFumzjxYzMJ9f2KEvkoTJf7hEK8pjto",
  "key8": "jwN8uyDqkWyhhJUsoYbJvwgMqkX5k4B5mnCR2G3N19k2KjTrNM1rSKKapJhKngnvAR7X2fnQpb2ki1qK6zv2PtG",
  "key9": "2ZKrgYGioHFLqqS994vWvQf1wZCQreAqw9tiThxNAryTJGjQKVaCArpNkrXGu75ZNwndPFcvy8PL7Eub7ZW8aiCn",
  "key10": "4pMuEvwcWzGL7wLSpHxhLW8DRhWSiJJ9QYDvsZJFKCBLR5AA4CKgBP6JjTQSPWeeKLvNXfGGkvhbAJ7K4avgexcK",
  "key11": "2EsgPkT9SpdJnN7ZfsudgrABvKk6V4Z5r7Mazy9TcpWS91e7a4kYNqvbYeCjs6nkwdxwmadt4ZtTp2Pv2wUvX3Pv",
  "key12": "2FMk9RVRpyVkNpCDjPdZAN3GFkhztKA8EhTKCQvmEkau2PMA7ZoH1nWoJYFSQn82cAhQKmSeAn1gV7B6RZaysBBB",
  "key13": "3cW6fhhZiEEWXXiEF6WdW4EBftpiYH1zTkizYANQeB8W5MMXCR6Z9iyzTwsupKoHNeyysjXnwvc5JkWX1Kkf3B2Q",
  "key14": "4VPA4ZbVNZ2Ey6sCgb5NKXWoZZLmxJ85djMxuQ2YAVWcHi86ioeE3fxT4kkQWa343rTESHho7qHwFNK9HtwAyuLs",
  "key15": "2ByRyGQYiEg9mEM3uTk2zWzPuVY2pyxydDVfkSHhJgwqYG1o33rGu123ob7sQ9Ah5A9Wnngmw52u3yA4eYTU8gGv",
  "key16": "557gdDveGfAbJZjVAnoAgz7tLxf6cRDqX8usTJpLL5TzDuLtAMECjdHMpL2ANsgGaj4nvoR8FLAV9pdXGL6T3Kp",
  "key17": "V3Zm1MDgiinSswiFaALGgF9v48BSzY8YUbwDyFxpaSY8NjaiLuSNfURFdj4JQcAAZp8oSixQBjC8QHHLxJxbWCo",
  "key18": "2P6SkCNcaDAwiuaxNjh6h5zVVHpbHNqbdWtN9dHRPPyz1s2XWQptxPDhmsxwTaxzzPFLG8aRza6esNEzb1jQjMQW",
  "key19": "3BB8SZsULsfnmGgWZTP9fQxF5Rc3QULu2A6MUpxGt7YyZD85k2hkJrJvs17tqJX9YMXrHSajA39JzVreqGjk1ARs",
  "key20": "41eKMN3Gibc1mp6Ex6JCcZK1b66MgH1jE9x6TTarXTTHbJReXUn1YguBA8jhHuqyh2adHiGaqV5iHZiEYfMpUcWt",
  "key21": "4pyCwJHU5qGtnZ8aKUqy7po3zYe95YZgsyEEztScmKC7roq9P25ict3NTnmafMmQeu2i61DXDSK8TXUv9E7rE6XC",
  "key22": "3ddeLxG5fapSGvfjMbDuCMnuTJdK9Vr9mVZ5WHxGrYP1YRJZNSCa9Zsfv8pSSXYi9zEQ9XYs3f9KWka9FRzsekFu",
  "key23": "D71oGWdFSB6bX6ofEyqxSJdja7V6Yv97jWToRxnJYPuXGxisydhf3AVdH2dvWJW8ojatK34YospanfqQHUDDRLw",
  "key24": "4GfyKtNbH5xqguMT58ABsoitVkb1cSLVGD8DtXzJMVApxPfs7RS8saM3mPTWaqJwy2xFsoj5TPu6ibUqniA638Gt",
  "key25": "3xYPHMiSMsmuWTQbajDk4Ah8GuvzXxeFTBzjZNHnSYxfcxVHagELJMV18GnYW5j94rBdYCdxa9vC7AAgj88GH1pd",
  "key26": "oN9orW177wh7qPnV1GftZcG1LcvG17ztonUVXbP7WRRVr4GCg4Pg4c7z5nwvCexufZJS5ecvGCgEVnZwUB82JnZ",
  "key27": "5Xsx5TNdmuedLycCGDs6dux7B4jGRvawbGgYNbK2XjtmoT5N2Jgbop31whWYnjGpdvPhB2iwFVTRG4AxyYKTXLHx",
  "key28": "QTtaxv38rjNZYdAcqsaKLK9otsAF6AvyeveGVrwfkQCcahL2mVTf5pBNt2rxBeKGb4CAq5ZYGX7QFVwwxdCJRf8",
  "key29": "62VafTyjmP89zvXUUhqmHTLWziWhzgJ8UQEigJtLSYoPR2Nzx1phxjcvtkujKK4hW4YapPDkxS7UqLZtynHerQ75",
  "key30": "5qYwCibFzLbGe4awNvNSPvq8EkxLYDdduHjMwUpZ5jrsEFsU7W4vNzeBGbisQ2jApVGdzFoazEbFYHPRgWA5GKje",
  "key31": "573rSEVZChAQfhT6whf55MFNPntJAXuziehQBU9Nh7zWmtUxUf5F6A4DXLKmKoKG2NpQ4WqDzjkaJnR9hedqo39t",
  "key32": "25119txhUEs1pKAqQ3NfoE7fmKYKZMU32fSEd9Y9qhh1j35sGjzm6pnXnRCNWfMdp4hQykmiVLqVkEytYunZ1Zy1",
  "key33": "Pfnhp6oGgoTTsWJWz1VdC8f96MAhsr1g3FbVAhgocMXQgMg4oE88oszvF4fLX7GNmndWDYZwogyQH9NQoMyYQUo",
  "key34": "64wvAVgsU7Sy2GE5Ew2cSvfRoBbuQ2UogTAA58fiF3PuX1TpjxmTg58616rjWJ7EnSXno784nsmh4jiBab45jjPw",
  "key35": "39twqgRoF2yXtKujot7F5L1UieMTWPDJgKfkG25AEPpE5gLtnxtcygUWMGTumXCjBr81a7xpxEgW8GR8vddzUhwU",
  "key36": "4x9P9CWwKMkHCZDb3nU1idp5CrQG6FTbB7RCeieAnTwFP8AryPjoZchUx14E4JWRdncC85zYCWhb6zx9wvjVoJpd",
  "key37": "2PyiSPf3eimmCrxP1DNfyEtwBnaebqJpx1ZKKD9qk79N4sxJ4tCkwoazh79NQtDp65VMznMy2Cq3sTmusccZ5ZWa",
  "key38": "RqTfy4ei9TYUrcs9V6kGuA6L1ftvsh5ioFWUxGqeTrLhquQcP8Y98ETsaCCLu8CtDg7cbbYitVHXR1Mj1JG5SGh",
  "key39": "3uL5Ciq1L2zMCyt3irAyjjMgxbWhsCaeY7gHT79g2uGkBMA5orFx4SvVPQFsUjNTDWLj1uPrpMqZQMdcyWmbZHXQ"
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
