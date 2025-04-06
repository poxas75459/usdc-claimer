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
    "4fde6v6hJtVpCq7kv3JKTBCcvxXLnpdEzndgyrdPx9qymmLu5W6voHL695Jgvpq4BDcNsscjLGNDgb2Ccnpc5BWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LEQ51hFwtQ5qyDk15kHr5pbT6YQrbQARhRQMZ7DUfJJc3WJNnYEceUMK6YZK47Lma7CJZjmqwrnoQkD2wWeyb9p",
  "key1": "5Gpd2ZWZTWPLRAok9R5aayvSAmsCXjzA5Cc4Jrm6iHoh1Q4UZ3PZvW2DE5vTn2ycXTFJwbbEBQPeDHPkGM3uL3ma",
  "key2": "5AMCVNwvG5XhbMd9Twvc8M5pUSSCPYtyej1dhoiEZaWsieVjTSWU6NwzUGysjy6tgnK3C6zadUogbtM4fURVjVMY",
  "key3": "4dbkR8adM7hsdCvBi4W5CzBkkDLfQbnxBgiGt9bY2zBjxRVrbma6a3pG9LUU5L3u5gheRWUoYJCMUPywD6ZwovnP",
  "key4": "54H9JeDCNCEajYhLzopCSXBaz35412vsZToGGVxJedbzHTjWvQp7szGyv9fWxEZqahsqeYqoBNnJFYRwSLimzVSD",
  "key5": "3K2pWGAWxAF94cWPFA5y5UDnMcdNmNndm27162A1QzoMuqgRQh7Z8VPiLviNpzxpanbFJLAtTD7BhbJoJrWj43Fm",
  "key6": "2Zx3Sb7B82ZurRc9PVuJZDC8so6n6jWcu9XC3wT8rDstyMtYXDhXSc7RLSQJHkG6JJ8BQV4MqdS49WCvuSeD3u42",
  "key7": "5K7fiQkmnjXaitjrAxtjcDksW8AFKpzT49KjtfsAk7aEQWroEp7voZy5NfsKcUfLVCtipRnbxchHyM8kjcYACuzD",
  "key8": "4sK6VR4T7Ao3HFLRbRq5KdknDSDRqL6dXa3dpLM3EeuQJbp2E3zEQcwFXaeZbueMcLqdrVxXmy3UNjEqWqPgSH14",
  "key9": "3kUr2EmXd3VHiiboWXmrg8PNdxDSXdRfkWUe66rNu4oBb5TvqkJ4DPh1UwWDBm2Z5Yg2a4tqnXajb5UtmXTBKFRB",
  "key10": "2fst1cJdWLTapVr3rPdMapjSurK5p9W4rjhLATf7KiHqCGKMQ2wutnQt4YSpKPnTMLHoR9EUgDVLHAnAAZgGA4pg",
  "key11": "2f1nrEX6xbw3iHetcsinWXTaDNBUVihEF35aYRF42ccqS1MCcbJZq8sPuJnmo537iihPEura6YDiGc2Fv25yCkaY",
  "key12": "WKaFb33bmafkJkQGGSvJ6cuiji41UWNHRxoZnhueXvHa57xJzfbkCaA1JUvvFqApfJEreAPErqUQ7UkP7WU25VX",
  "key13": "3oAbQbrvRPU3EoPGADHraJs8MoX6oNQmBNFDng57ZhMXVFpDx4f4NK7UnrexjExYpqz8FYgArwiPR3jKSjD8LFf7",
  "key14": "x8NXjoAAggQj2svJN7jWmG5RVhdF2YoMJw7pCCK8BVC7W1NrSaPJHCnwDjjGo1vZ82AzDejqk4tt6uLzPJW1Btb",
  "key15": "2xjacyQW8xnFakJWj3HpG2yLFn8iCmf9jvxJ8vjhGwpGNCJZhXCAerBAgM6pH1EGYxcWnh2trF3HhjLDj4SdWMHE",
  "key16": "3MaAwAxTTP7P7HZYBgV66EJDZBA9qNmaFcf8Hwwwhs6WukbRMocLm1uMTxwoQYEWLRTM7bt2HYGfBMWi5Nap4eq3",
  "key17": "3bVU63eV3jYUhnbKC8yTFvLgQRbzLfzy6PSZ2owgqioN8GEqBmYn4JtEP3Z1sNFdh5xeNExnAFMmgmrAE7Z6s58f",
  "key18": "65hRJZE1zUbvkoTAaTYURWxD8XwkYLCJFgmWXGBpbfF9iqrLcrMPLCG1xX1LUj8Xsogh3NCen9MK6ZMxJz55wMJw",
  "key19": "3ahacnUfNc8wcUoEK4bxEfWeNC1FME1NDuYRDUTqQLuck1mEaV2d2oiwXZxpPK8tFcs4cGWzBmtCNwc2qcbfp5fF",
  "key20": "GCr2akMTDjAdys6R52vKCkW1BwMxkgmimMHyhmSbh7FeRPPQ6UGJZbot2hiFwNkYSdCdTWAbCVZ3CXDJ6RaHToC",
  "key21": "5G2FTdLrVAUHtwdnzQ5faaHGKcv7mUmEc8FtJEkvytrA6Zp7wSy1Av46WBVWCtXUJ2qYFqyGD4Pccu7Ga9yovELi",
  "key22": "5pf3aBUgtWC8iQgB1q7Si8zxdx8GrTTpAiHivP2yJJuHVLkf6WETTLcVULqKJwgmaGn7JSeAbbgBHC63gAAVEJeu",
  "key23": "3jRYSNsQbxnYUUTopez5qRbUBwgjqxhHuuPmPQbL9MWZ6azaGB5bLYKS65cRHLpz3keDT4vLkcwpPveoVT1A5eSq",
  "key24": "3Wh5w7P1Eh9qiEQ2VkGykEr6QzquuHpAz3ymXEWCefcLHHuv35u9o7F7Cj799MzfLVD4YzgXhRZUxKRAKbuNxtBh",
  "key25": "4z68mTLojMsTzEuTKkSk3Yxz1pPF2jo98dGSYLuuQLKHwn4KXXUddn2gaCm4yQT78mF2AzQir45iYBskqLcD4J5S",
  "key26": "4uCe7ypyQsPcJWWmZKYc27nf1CmuavGS1erH35PFZJSffQt7RLVmudagMZVqpQDqMum4PhjaTWiJ1MVHXovx9WTi",
  "key27": "62WSwYYLcHL6Gq7PhE1DjkR1QZPzZ7t61XenVvZoBhdwAHipXzGvY95LmuARXcGPyJcMzUcLf4G7wMRHbdUuvrhy",
  "key28": "4SvAmMgMC7gc53BuRQdZeP5Ns4BzFtf382KM4XgVDrkJjvii9pF78ooLyt36spTqCccDjx9npjhHrNMZ4muYPRXy",
  "key29": "3wBwYqbptmWBY1uBUxeC9ehoHFQ4DM2Z29HbFCguwWWtHmQrHFVPPdM92s7b92aEmpnywJnoJfVV6gfVFoG7fNXT",
  "key30": "TZ3Qi8mwFw7b6AboLUZyMtqF8FCEmfPUAmxseChtt2XHymrKvmWzVij1KED5S6p8QQ5x5UZSPEhKsqvMvoWTF8f",
  "key31": "2EyFrh2Q2qR8rWiq6g2LNrutQ7xRMXt7ViDcH3XmkWtmB19YN1goUqQJ9nG44gCKTUa2XjcyeDsEHAuRDY2exswY",
  "key32": "DTJZzF1W8YDSRXD2TKYyRVEScnc1RKQpWMLqkyoHGR43k8wESYWzr799GmvEKMTMfCqXw9tVbB9yQ6XXGVjPvZH",
  "key33": "S1LGiyveFesDxhTQ6y9QCaQQF5PfyfdDEvjxux1h2Rd3yDMjLs2banniwDCwHE2z8Zs2dD4s6SDjjqYJDZ1kdDf",
  "key34": "2uTHyhw8ws3MPJszuiTT8RDFL4cak5wEq13SmUrjpXenCQs14bdmzeZefTDGMrBiarBb8hJUjWHCCetn9S3pdLUM"
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
