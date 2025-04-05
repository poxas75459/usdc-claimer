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
    "3uk4YsF7F4oa6rjjbB9vacE8DHHaQ3k9L41nCCoDMbHQmHdtQXVMPJ9jXRz4yceQM6ThaFW4bbXp1sqsZAHUyJnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tSsPME4iaJwrmVMH4CYkzBW34jAUqyDvqDEx2scXyx4VankKFC4grkH94qiHzSDt5ay65WvmcByscFHW4vyjfLi",
  "key1": "2ApeX8v6kL5yhS3SiNrwEDwWJdeZX1zTBN4vjd4vQkyoLWNMdrEfFvPnz3oQ75LD1hb8WrZaLmvC3z22d6RsUkTU",
  "key2": "2N27ZLoYk4FHEBY4ACSAtfus7P5rDMpHHZS5osJ3NjujRja4MPx3wS1bM3BsMwxyNwiDviZb1xLCa7LDhKN24dMv",
  "key3": "P1XDqn8T45UHNYFBqktG8CgZgy1Ls5Nfuauzeb9MpP9KQsWukZo65VhKhhdEhg7YHRjgxBckZZgCo4j4FCCWphz",
  "key4": "4VT7MSsgYUSbMqd1D8cB2rY4tebk7CriVXArSGYRSwjaa3Gkvh2mxYQLx5S6b16mgANsBdvgMCmEcuCpB5RKcbgQ",
  "key5": "3XqeJR7TSpN5zge3HhWkRvPxaURhpcQ4M2SU7B2yLz8sS54nveT6EaXvZwawTBxUuW2StdMuVZJZMuh7niHC2Sht",
  "key6": "5BdzuKVRRqppo5MmqYpA1qbEQV9zcbof6m7jWUs7tknwGcQz64JaN8Y16oBAJxriNYt6LxkUL3YRVkRLotKjzSZM",
  "key7": "bcFBjMKN3za9KUQYx4yT4ywga1Diq8cDXioZqAuZiTrVJ29ZJ2E2PHwAiCEXzS1s2dQvDcc53H2gn18VGEp2L37",
  "key8": "3NpVJvZDFgJjmM6owKyoonLuu7W53PSS282VPrCtGFmKFFew3EkBYBcoWc9TVoAGpZNRJKLNEdUyPFjrycEm3rbk",
  "key9": "54JkuHJ3TSUJw9mTH24K7fLxJF5QtGFdK6D4DXwMANiazFypgrcfRjhhywpvJpZZrEoPX1c6qBXm5nm9R95wVc7f",
  "key10": "4HFeBWLNrDYFLGSkaoya5kfPyKygpGYdHh9aEeoaFewAnVnRTEZL7qE7NU3sYxANeS5Zc2iU1L3JrY7rMURssxqy",
  "key11": "55tyc4zCbNggG6b7ENts1pCj4fDE4ZUGuXezyAnUrm7fMyPARXBEVj3DLZkfsYvTXuoXT8zX8URcBfJGCPMoFxK4",
  "key12": "Zh7jpPFokPq4pq3n2ZmuwQRHmbtNk4uma9GnMWRsXi4pDjWNQ4mYKfMeEL9GJ7Hqxch4G8p8iBvRbkrCuhfqoTi",
  "key13": "58PuinvVuhSudy1b9wZRtez54UEygJZL12jQhEVJ7VQw8Qmkww7NSmRcrZP99s6iTUktTiCcdh2jMhYVHNWJyMJM",
  "key14": "54tKNUXMor9f9SbRQdpwt9KU8zZZdzNWhFWEJHsd2WHYu6YCKnyGw4dmbeae3UQeFFowJBnAANFTxQzvSVQkgxFK",
  "key15": "cm62KbSELvLigBKNhKPvXbi7AmaXCw188etbB4mzm7KCcFKDcWh1incdVo6gi8YXztAinVnHKNH1vAdzemnsb3s",
  "key16": "5cBsvRRetYmVUcBKkW1PbMM4sbjJQY2nSEzLfSJpuVUaLA6msomwsf3dXxSUiRyVaKbXPYDNdDBBuHF1JRaaJTMP",
  "key17": "2vrjuMizHgXqbEFf5aqYq2AdgMSywrsm1b3sYNfmZr75TqY1pwaVHtktywQfvkgBC9T9cvHTBUmVBpjL3ZRqZbfn",
  "key18": "2dG3Wak69jYPTcWapXrSwX9vi5VwLgWKdf4DFuqiFwNMXLEQUHfrUTphnkzYMS2xWnioRFB3SHUH2QW5i9W62SRj",
  "key19": "2mJVUG6hRLZwpdeVsySsBhvJZypDtUiFkZndK2ef9iPUTrAQ5CEnrPy766n7Dbcz9BeFhEV2cufKDYCRLRE4m1hC",
  "key20": "4DNz1uxyPHZfmnocmRNjvZ8zzMNY21DvNUCNk7W1AHjggmK3yQBWTsYzLfSajY8EWzmzQJVVAkk7Das8pnbHhbPW",
  "key21": "3sxtM8BXY6mVays91kbUS8pJVrXjseBCE35oqDAZCBq2g9zZC9JZ4CDT6ssxC1XTTaxnP8ffcRhnfyfxTc8EGQcq",
  "key22": "4UQSnp2t2k4YkkBsoQ4n5fFQpEKyNm5zfuK8ceKci38HNf2qfv5BKUYSNKLnfkC3hsVLrFCrCuVjeJ38bRTULMze",
  "key23": "3kQksW7qz3tCBXufG4iZjxr8sMX5MbGA6bVRCUwadCKucWDiLHRt7yKijLcpqABDipGcBhWbTNTNZQoBbMt1BzB9",
  "key24": "3CFgUfY7ctAcUL5R4EmxdLpv7QosALmTANHmvELKCwe4E9d2hQHx6i3jx5cWMAeSKMMDWcxChVr6nReTLwhaFe4B",
  "key25": "41xhShTAs1c5ri2Ci1DfWowy8C3ePfaBd66HS1BSJvAkCnYPuQgdRDRW3kSbwunoLmjvo6Hae9c6jkdiX3zsraNT",
  "key26": "2qaMiGJZsumHYYx5Hpc3wsRbSQeThZGbbxHEp9J8mwTpDwGvkccos85HimqoPCX36t4ZMMLJKv3u4LxkfPduP6HE",
  "key27": "62YaYmSYn6sKisoHGAGw9xCEReYEgCedtMsmGBiPE4tRy5Y74tsYkAMSYBYuiBUvPse7mMnvn6eBMLUrSKJ6piEh",
  "key28": "uPsuHDT4pxpZZtqm4Z7gsp6A3ZHUmxEk1AxhzKwJRuWc1F5x3WWFoZN1NdcFz1THJxmKbdr7LMbrxC6H7UrwkCX",
  "key29": "3s3jgsWKPjSFbAN6bnfVxouD91NSHRhd1K7MvdWgUvsti5dvUmif9BCtPRn8NCa2XCvTr66EwLfsY6w7WR6fbdoh",
  "key30": "5Y8dmUYxX82XJWERJ8BMrG7paEyE941aHDcr4CfZwyDk6rGFqngCQ8pCzhMW47wW5bBkdjAHhX6bwKKoMCNWNTBx",
  "key31": "4gm864XQM52zH5ZY7t53sLVwQFghaH9NakZshHCTbhYXKfXmswhNXtXgvSF6nuKjktv1JMZi2LuisYCWX7NhuGF",
  "key32": "4EB7iCPijmr1J6bWrnRNYtJJkHNKd3rTVKXYwCgrmWmiJC9Ps1uggm2hSnvczfUQQzTfbYY4tEJHiYSUGLw2C6xv",
  "key33": "4zsCWyPNPcFjUHtD3um43X6uPPVJaTAHeCqxfsL6vgv5urnC3W2LmrHPAfpgGrgXC7UacF5sjKJXzs86QLgAteQh",
  "key34": "5j8acNapK6MtCR6XE76v3FPv7gm8BvZNPgmVDMU3ks3dFFn9h3Xdv4GzGm95jA7eTWQx8JrTENHAjzqRPd8N4ogf",
  "key35": "3k37LXVo9eiV1zhSuuSHX8JbBh4zPxSqHGUZo6UpjjY1ExaZg9XbGbTdmmJag3g3pG3RGiCkdGHoaHdGWragHeSi",
  "key36": "2ZXk2nfXQ8QwFMpm2vkEjZ6NPrtFpHwL5vH6A2jrnkZ77nJ5MvjfSD7h61v1YvvMbfHGq8i3aibixy8zZHFKQNth",
  "key37": "2TckFFjpUEcDf5LmNh2tz3qha5L446N3bSm2orrt8BkHZW4wqv5f6J4xBDUU8is7vMNRqSL96jGpFYS32ZTj7bsf",
  "key38": "5rocTxtU7Quc5hjf5KwxRnVx4mLV93WrD7bGrrZSwYWi9FFZv9opyBcN62tgj9AN3C1WhviFhrCZMvNmAxY2ZL32"
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
