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
    "2w7ftB4QjEkAcu4QGt1SukTEhpJusTyxFg8jdiZUppmNHBPm72c2jGYsUG2BkmWG6VYDLgRnz5buwji6bNeUohBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JUz88N6tHzsiNm1XGBuQdAcmnhcCyBE94dEjeLx879ycTT52UJGmCsoTiagF89RJkAVEb563gSgnxPEwwkiRLtX",
  "key1": "hfwJbjZEfJyuAeAduRmoX4uSzYRtGJqRizLRNYmdFUMC6t1skGMLuouoDoXLZZ4Ki1wpfJfCMuHcAoj8517S3gf",
  "key2": "22S7rvSQAHrzZvyTT8K1WFDn9eVvdbNBprYkWQzHkbHAFkkvFjcBQa7V1v8KkNyojrgkxExnSt2GCdh2nwFfo2Ai",
  "key3": "3d9s1EM8r3HDCrhbypE43qsrBEBLDmwMNKr4a5RerXWQf6kJfePwwjBTip5taGsHjhwVe32VZhpg1wfxKrNdcceu",
  "key4": "5WQ6fR3AyXGZvRtYxcJPtUsrob9cCCHXY8GuowBywj1U5JGNyoY6aPoAwUvgLZekeQyhWdpLCPctznuBoorqtyAS",
  "key5": "5SteHDkjJWyrNP7QzFhqJ3S3qu9u3Vojtn6AjJWTGSuWkanbTvmNFeM9UGLPwoZYRwJWm5DFuxPR2RD44ESegPTp",
  "key6": "3NkspDiPrkigP25DThsb3aSbzK9awuy4N6R54LzNYjq1rPsjjAj3NAujyenwtfECP8ZwFffR6aXqhWCAHwukXp1L",
  "key7": "3kw525JsfVUXLGiMnvwzp9vPuLX9UY6QKrXzkUxKvggrxmLaYjCESMaWSrowY1QBmBrJqbmfxXefdbven3TzqB1x",
  "key8": "4nZEnkMpRQMqVxLoGsPPQjGkkDh3dKB1Texj1sUpXkJHX3rTocZN2RLHXU9YdrenyAKUEf6BD8mMn2ySTyuwnDrc",
  "key9": "2CcAaUnL5FurbhLzTarMq3T5sMe5sUSZ1vyEwHdrZQZSDwPBkhm9TinbycwZmGkSGB5Zw5myi93LHSbNY1jP2wAy",
  "key10": "5iqDsirBQEhBX2ziwFauCfWEaKUCpTgTdMago2HRkbQx3ChCAD75wBpaCHFBeLQh8zMsxj7tAB5c6GKwA7o1kWUZ",
  "key11": "4a2WaeG1bHipM8ydJVhb9SN88XRG2YFQBvLjQAaBSzSkxP6Cy9PYtJYEvTMhUYqkDobsP4LmFXMdgkeJNyjMHmRp",
  "key12": "2Lao2Zwek83CyRYwCgaEs41GH1Q6DVyMNcQmMo8k7Uy5RKnQHn65tyBFj3xyvBRRcwPUpQbxhiLa8gVA8ED8mrr5",
  "key13": "5iLBNfpVb8QWPMHnLhbgQP8YAmEs1EZDoTKgmkkhuEbG5uxADBcp5rfrC4eJmoBNUgQYyDQpUNvuTDWHtMXnPFPp",
  "key14": "4is7Up3mcPDT69EGPKRDijSnDT49fkbwyJjDxqytPxFSzAJSKvEFumZWZStbbyPQQCo5XZf1kR54m6acsz959N1Q",
  "key15": "W4XMgzjQ6uFvncoKw9Mo6XPTkWQ3X5YivcqG6nkT4aGF5vktZCaE97Cpzz32HYZRUi5uCbrN3m7GWCTbPbkzyPg",
  "key16": "4mV4EWhSdpsHYaeCE8ATCucAwnXJNu8ek9jpHqfrkCiqbVdo336De8jKevS9C1W421VAfBVkYdyp7k49tvvL3TmY",
  "key17": "iLxnnZSFskNpY14Dv2Eh8cAxdQ3w6e64myNePre7VHsvArpPhuASqnJhd7r5suG5H6W9Kpvoagaiv93BL1kjS4S",
  "key18": "xw7LojqK8USZiLeURHjD9DwG2rkv1q4H2S9gDfSgo4JqAgj2s1yUrFN6LEr2rhGwhmq2xNm6WDwYasCFa7GFsHi",
  "key19": "2APiP49DezZf7UhiLGsbLoziWjmFNFf69qhS6ae1YaXc8HDbjbWxVwpYAAWdgS7JiUb7YHJzp7ajWXMjMdEkjvJw",
  "key20": "2a3FLWVgLVgifWhCV4oudzz5wjoNgZ8Vyo4ZSML4ye3BGHHTrRe4TwhPuWpxhBNS61GAkekfR3sJM2FPPJmXeobG",
  "key21": "3zLcZ4ef7ugpsMMjnfpPprxzX3EhtNd3jUtX66DKKiLqSCJYwdeCK1zndYvewij7swkidetR1DUMJAxJm9mW3HNp",
  "key22": "3VAzfgGAAG9H8U1ZAMqBY1rgL9G3vfUejYNtsuQTFVLczpmoHr6ho8qqbEFhR4PdTAXfP5KqqBj14tzoxfc9LxUu",
  "key23": "3krFLZwcQpKWvJ6yc7hnUkiPz5zyo1Y5ubipa99xo1yHWF8e4YDyayMF485xf8UMtugKRyHWEZSp5mnL53TTWpCN",
  "key24": "2YVrGy5WzZzuwxA3s5QuXzKHPuz5fy9ePwxPRUYC3Lw7UHYuNdcYthDNB9PLJ86RHrsDmyHje96zWc8pfgajwexp",
  "key25": "33CSaVvxohX4apTwHDUZdcKRNjtKZdjZC8fd8ykufY9DbCiC1mGxmHGxJkZPR5Kju18oGfek9FkG6rchfdqfnPiw",
  "key26": "2b6AnS22aUQA7uCQkmgTvRpRoGU1TUmMbHxvufDuwsthmb6SXkurPUrfukoYA5DZgchmtvh6iZ229uYsAgFYapY9",
  "key27": "54jCiPbx6WXpH7BwyvKuHDdVfez5qUzFeDscJaW4AbH4Skj18XgneAr62qAGFcqfowkWVYQHhoHU1ekxjrUe5jD3",
  "key28": "pbB1AoBRreVSADe6oSXvT77RpuMLChtSEGGMF13AzuYgXTkZypE3RekdQze5pkU1sAwLDkJvBE14bAGT6Kt8JVr",
  "key29": "4bZ5ioRWny1zF2eGKrCAzHzsjkwnW8zkd2i3CwgPKVSG4tDWkUfGfrRthTrXLgQw1dx7c5FztLxNemxCYeNj7yi7",
  "key30": "3UHcCt2Mmn3d4EyPG32JMpHximDriJBAzTPTcMmkUPfhGZYk41eP4W5ByWgEsgmhuw6xKoMUNCSkcZTRNxvnohNa",
  "key31": "3ZscrNbNDvZcJSjpwZSpgJcoxFhi3Dvmcio5WQDeX8iUJmw5GwumydXMhMnoXEDvEMMsJJ7wRVR9Kys4Ukj3sUBe",
  "key32": "2LJf8BqzA4vqnbxnAbvK8XAqu54HJ69S8Cr8u11MxYSn5e6iDU82VVLQo9CRo5g6GjEj9wXpnyiLU5k72wavbDri",
  "key33": "3hBMqKjGv2TjotbsSGtturaaQBxu53CxDXHJeiP4QkSi863T5DtvCBsiUkVjsww2ttUPXpFxnokYB9jz7UuohjsS"
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
