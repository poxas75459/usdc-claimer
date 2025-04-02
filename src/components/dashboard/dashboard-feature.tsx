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
    "4FNXWiKiXjDQyiCtY7QejFXzbn7E6fpktJDqJvRH4evaGzoGnWQF2ft2SZD4z8MFprHL1aCDBvoJ1ECVWA3jJuj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jw9BAziLBEsCUXhYPyBjpZGkNVMTdeS4VsUz2YptgUZqSfeqkRnHzp9zerQLyH8dBXu9uUNCPdPtJCLhMM7rXNp",
  "key1": "2nR3PjaQDPjkoqBW16bbF7o3ShqvLYyZb12VWVDUim3pvqsFMBAjpBVPDXNEb6oGRAFpv57y36ACU2Pnc7gpfPD3",
  "key2": "27TSvHVR7mecQ9A4vCwTBB8ouFJJp47uuEw5otUaRNCvSpZ4rma2AW1dw7VruiV9LhWrvXzVZxjp126eSoKEEfLa",
  "key3": "4LPCoG9nkUtxfHBTPUk2kYeFh75XkpK8hRYMtTP9RZSBsdRMZ7nZ6LbdYZ4LPgogqaffXKy95Zovj5sXbk5s91r7",
  "key4": "26aTpUFzuEH66fuKXqgiqBHc3mC43idKrkRV7zVSL1B1AAy6iwBmeyaY25SrnPCJJea6nkYeK5se3LoyYjKTjVDd",
  "key5": "5J1d5bpzgn24dT6x9ZBt8zNEYy8fgB3KfG4G2quBxJejZcbkFAoqQebSuXKtEH4Rbd5VPzn5fPihPgmetjBagRXW",
  "key6": "3NFPgwiiF6kvXYJsPixkPDMTj6eDLemT6tiWEuKvgENVu6doND17sVzukiriwdapoV3s4gMxMVBVnn4xPGgpzisQ",
  "key7": "TYLoLNmj9G9anS3m4aFLjK9DHQhiTaVVKKvLtuEsA6anQbLAYA6tf8rATMeHALyp4SiaYjgehU8QkJNua6Lp9a9",
  "key8": "33dKS8meUjRjbQNADbQoPHij8G6VgjpoJRfLNsKCZTab5Qzi2LJvm2GHUUwQEHNxEv8zD6hpd15a5eLxvZyDEjuq",
  "key9": "2yxAD6LmV85txK93gqnLnFHatfQXcz7wNbEiUeueiTFDmR1kuk3ciLdkR31pTsex83X1dg2fQj1waV3riVoD4D4N",
  "key10": "D4wdCAPb6pmt8jZYRx8Mji18HbYXziWhx8b4HtgsmYy1XzFnxCyzRJNddwV2Jm8UtqwyiGTc3XMt6uTEzvr8XMg",
  "key11": "4ZSFtmJiRTEzGHWwFduo3TgrWhkfzyA9JTgMZvqxxDZ1obu6hgoBJaDUiWcZWcuSJgY1T8AebqvK6PBY6teoioW6",
  "key12": "2gkBnNaLrgGr6kxnmkEgRwmEEKCBzi6HtAeRZU3ASZrMGUSsFaUn3EwiRGe5WG7ddhH21a4HxHm767taL7tgW22x",
  "key13": "21N6fsizjHGo4LYeaX75NoaVuzby9t1Y2DA6nbP3pNo2iDiMYyVUmhN3pWwx7xYEx6wBLEe745K2DPGE6rM1cRRe",
  "key14": "2PXRfjpDLUJdjypA6ubaf3X4quzPtgSr9iW4F78foYCqn4QazFtaTk3SPtZDiFVjnUomPzXarszoZ2s63PyYAtuj",
  "key15": "2xEUtCKwueGafX1jdtN2cYggtA6fFXT2v7r764NLQCYGj6Y1CiXnh71ozqsrHXHDwvneThFmd5bQ4PJKVJRm21uA",
  "key16": "5sWhm2SkMfeeWSGfMNcQqdmngPPeLHx93ibTYsx3apV8dRnkmSQfKy1x3UigoV1T2dne8vLuLuVTrrySeudmYqjr",
  "key17": "3P1Subj4mB98RXcU5vVs2hpVJ2CFkeNDhdYSza2RwbsxHqPgiiHu2DWJKJuEpqjRUSTHzULdz22xmyGWPYiYAGxr",
  "key18": "2oEW9X7QUnbwbp3Zr4D2WhBqrm5SH3bmnDjes9SMb4CFBrFwZ9K2GQyn8kPemN2Lc9P7uJQefvvXGeEAKz8fX6tt",
  "key19": "44eJQz6RteTBy3xitNbHzKmiYMWdwK6wzD3SkfkM83zV8pCvvhmbZg3myjJgw65a4Xjjwg6LdeWXV9Lh5qDvWwTV",
  "key20": "foeijNA1HovAkRsL98eN5mbz3Nu1gazkAU9EuTvX63LcjWz8n4Kf8Jrc1s3zc7Ciwtx6fEf3gXN1K2snA4AHgMt",
  "key21": "439X8mqwDYC9iRxACmT9mG9hpofjDAvkEqf45485UDFPgxBaueUf1mZd21S1q4irNUMXkeHCJ3GxMeEzZ9VvaHUr",
  "key22": "2CzxPfnDd5EYUgFhVC8dgdQ7256gj41aCktcGVEpubUQVy8iyzg96YeCpLn84qtZTV7z6iCLi3NjyuBz75owAgda",
  "key23": "42Hzpt8hJKSvHUz97NBMyZ6xqK8EJaCxfpbRGAoAxX5h85hWTkBVC6y7Z8pTgEEgiyDPrUxtfM8jBsJFxJL93Dsx",
  "key24": "5xGsXS4oS7nb9s7PYfGkQEk7XqDGoUGx9XUgdTjYxmxnxWLSa22kaWCrZbDjX4ntahP13XdANpReAx2aNJdhBu5C",
  "key25": "5teMrDbmkzrpBJD1yE96WfAsC5sUKmbeSzTTKdpmo2EscHQjKo1HJFcCyoasjfEpfKgnghtBrFbrcpnuy1SiX6no",
  "key26": "3FtRnHdMJeNjnxaNr2RbQ77JE3XwpCSz6saK1ytUnbVAa45Dqg5v24rbVusbDiEpZbPXCH3FmuK27pUh3fsdtMvf",
  "key27": "iUMNeGxPBowmCnkvv8ZXJZNxn3wqwxSyGvzb1DXCWPEKVcwUwVmuBgXCEiSRZvB7rKyQ8qayw3VVZDhMeKSFLGQ",
  "key28": "4fPG2aMjd9NT7u8Qh3qQykFUejbt4hqPN9pEnLCkBcduTfeVbrCUcJrHUNqpJUWN5CmAY6Z9sKme4KeufoMzQmAW",
  "key29": "3G6F7GuqYTLuUoHK4VtLbSiWLaEDzHrzvUvHTHxgQEKRY8HBD3ro78K648LXKE2Xi4QWm2YhCCg2orZj84k7eE1p",
  "key30": "VkU1QoZGDXq5E1LLnZ49GKUTRKGtbdkTuuFtJz9SqgCHzUufwovMdVeD328g9HKfzyBc3HXzrXTBXXjLtb4QXBp",
  "key31": "5YFUauFMLVPXeN6fR6dByRinSXqnigzoYehyYb1jHCwyu1k1H2PxAAzaMjVeUgkAP4UiqLhtmoveSHNthdnM3bG4"
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
