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
    "3JTHNF2y7Vxt2HvBuQziFWZS8S4TQryHrwYdLwTZXqiH8wx3GcZjZVdVAds5efSB9e3hyrNKJFY69SCydPRP1iU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qHcMbsFdLB2nMnMYXMTWqfZdxZj873fMZKUbo4fc2bddnjMWMrPzmyNL5wdspaJ2GddUT8ZLMBw3WZcWtojhpop",
  "key1": "2vYLEFmJA71tGmuRWCh6z1UxER78FDcHjn8AGE4pstrKcoKU6Hf8G15PFijyRnnQccsvcpzEZqipC3fuVKsF2Waf",
  "key2": "JieFKK9yN7wY4dRYnUTUAg7wTiG84SfcekUf4iNdkbue1osDA2YbZHSFSG93e9sNYVt9ryn1MtYJZTFz5kEPpUx",
  "key3": "4jmXm74GxuQjyF9qpaxGFjbSn6APeAQtnnYNL8cVRvqFNBtbbTk1PykUB3aXVd2nkFNPGcsx3wKGLPvNmQd7acvh",
  "key4": "4q48mGA4kMTg9fgVp1ybwWY92z9xwH5HxAAqhHdGkBx5Sa387NGdF6VCBgagSfATBoHKPGADHJivsi4JJShCFLGS",
  "key5": "5w7YoCVWdFodKnRQsK7KAbDhFVwUvA8wXJCoqLxBrwcTnfTd33WtjPX8at554SzqswSZqcSEDm2gyZ3pGqLViY8i",
  "key6": "3x5zqxYDqToFrzFymnLFDNGUJQxmGdc2RaN2YHhLmWMNsmRePpn3taiLLS4BqRg8QvgsCw4o6VD4fDdJXAyfK1wW",
  "key7": "3hBP52HvQ9NPbfpEnUu61ogv5qKMSNR2SjnkrEGXk7jLVkAiSqzFDioka8y8PLx7k15SopEHZYbRiXb63mJLF2hR",
  "key8": "62MHJob6nd2hGrqYnMVYo9zDfbo6oheREmTUXXY2yFF2zGGngT6g6aDv8k7aks7ouyCMxVJVfsaijaanrKADZM85",
  "key9": "4yYHFZuNz4mhcpiAbejQ8m1PhJskBjbWGCo7VPSJRZgh9L95mQab7ez1M14CoUJoUvb14H8v8wArTPqqivD7MdxB",
  "key10": "JTComFLZ4Q26PonjZxrga789bhnEVHRovfYAv1Tftptd5NgAgcXnQGxKvKrTKK2RiYLsaKEGW7m9XX4FkZuYJca",
  "key11": "3RpqD8kcXG6m14hL6rxsLEuMUgaqRr5dPJ4s4oSzPp4xNjgDeC6Nap7d6CcqMTwTYYCkiwc3E9EG4MZZRLmSxHMo",
  "key12": "4CzGnWr2TiZ9Bs64xUqT82ATTRcedEkKWUo5ySgdphRDEjdvZjnYjF25tmiaXKGsBJ1NjT4pH12kGAbZv44Dxx5F",
  "key13": "3wAKyUQDTYwzoJ8Qmcrt8o7RWPhXTYwZnDRA3MkvEhG2LZdxGyMmuafE4A2eQ6wRYaWFLhBWWMsoTGtKFv1rGCDT",
  "key14": "4JwwbWZkh1uaXRdbBipgY6aUMirjXEk9jvHZerXokDYi3qABNfRj2sSkRCGfty3AzjA9wXJmisGUdcobYnYypNYi",
  "key15": "3pxcAY3PVcqiW1UrQdoc147SyFt6ngKEerW3nb88hTM2vxdZekavb5J25TQAHSAqxn6wyRmUTdXPVU7SFJXfHMdC",
  "key16": "5h8XFxkcUYA8JyG4xyMYqrgwc8mb8jj721kLdkz71UVZx5HqQscToFuwyC4qSzrqBe9Nprrvd3fd1ZG87HDdLrVX",
  "key17": "3R3jDG3ez6cW6egAVYWVd5p6D7j3U9sKJj2LP495pzJ4zd3FGXh1grhWxu6fhL3hsYkGF2hbkZJjkHsDjMAG1C8",
  "key18": "5DqGhcbStaZwzdtYCJVtRc2d9iesY2VzgT9cgTyjQyVzYBXUjdpadvx2Cezyr8FCyiNVSbiR3BnUHN5tGz7KjggK",
  "key19": "EDFe2Wf4jUYvzn2v9azFwdTwP3RGVjPGLGtNhmpHnEeC1Pw7DsVJGM3Pybmp9mhLH7unJqTjEnzP713cPNx4U51",
  "key20": "2au2zQy4fZX4RdSXL2tiXAgHpkJ5YBGeM4YatkPv8QCD5bNLMVKmFnfnzsxCudVJ92kNv6gzRx1bEjfBShMVreHK",
  "key21": "35ehwQ9ocPRawrF6qimSkpv1SetFBN8NsAA1RAmSVvXriEWV6krQkf77zS7GMxCysFLkVW973Kr4FAqrozCcARrD",
  "key22": "2QbjuKQggqg6Pno3QpF2iuXf3Go78CuF8VWQSdBiAZcwHGrJ95Hus25ZzMWuyrmzjHFJWCM9NE9irwRqqNyeZqLK",
  "key23": "22WqQca5ZhrMnDhBsGmP5vR1qwrJ3Egos2rU2ZEqAjfGKc5h78kYPjUm8ABbNS7bC9J7cBZDgx8AtrzQPkUtzaYE",
  "key24": "5GFrWJJNmxmwe26CUBNXFe4mEUETwjTGu2AZPZvt2ZBUf8xmrefMeKjeoSXbZD2FgFEGvEocNMgwvRXXHQ3ckurd",
  "key25": "2LxkR2nXWL3hkgyiTXDK5VJMWGCPjtE71qsFDBJGgsbutXnVoPb34nfHW1ZJ6fwCtXHLx2fiByWTMgWzqneT42vL",
  "key26": "3aGhgpQrk6Wrb3GNEfb3Gf8ocVWH6xLhcg5MBD4q9kxaaiE5CyiAbjLPYD85jQus9gEpHDLS5veX7mBa2gZFyy47",
  "key27": "22qcv5nyGTTHie2hwnaGAPT7YfHRDhWpCVwsj1xRCe9Au9wYyFZZXb5iMYCbuvHod2kQxHqp6XeyJDmPraJd9ivR",
  "key28": "2d5goW4oAVkgqdAKM2Chba55zpQ6Fd25GtYM2697KL6dw5cie9G2h7YjevMBxKCJLdPx2dEVqRUS7ye3rodZy4X3",
  "key29": "2G6gPjjyTRiob6z4LFccudFLgJeFEH3WUFF8b7AEzWQ9KjZ6G8Lrz9bxVQTPQDpjU1WgNyrsgGrYA9eSZewB7FKg",
  "key30": "5PDQWTB4c93XvUTdderQVQWy67qxfkLcqxu8g3Fh5WpPW1opBUGSSWavyQbxHij6jyncAVQAvpmcV6KCg4Sxdmai",
  "key31": "3hTR7ELvPfMdNgWSags3qfFXkP9vm1uHHh9waxjkLFwVigqnb6jvCG2ELaMogzyoBCrRr2SPV5nJ5cQgBBusAKEj",
  "key32": "3PvxLquYMmJmjD9vFNNkvQdajw4cBmRsLvEGEWSZfQtTfZcFJCWfPvk8kuZXuNpJ1fpf69EQtcyN1mvzKK4VBdnv",
  "key33": "5orenXLZrVgsizjndaNKtUTizj2hvS9KWnnKX428H716AEzpbTS9hfU6C5CV3Z4tcmafTTpGHbPNCcg2VD3uMRZg",
  "key34": "rGaAwNRKDDkhwj3xNsGyL2JCR2aPpBTUWiGiDT7DKGWHgEgkjtNh7cNxrCamecEXvbqrxKzhNGG8LyaSBjgWogF",
  "key35": "5n43RnurkynikoAKZ44Lfkzw5ABU8nnTEzH78D3NDJv3FtQDGoDdCSZjZDot4AV1LVf9hM9BXACKP74CmAEfAc9Y",
  "key36": "55hCZXsAa2TgMNXrrUF24C1ijnv4NSZtDizG1LrX7fVNgVuYZUfrzsKFA6hgUoFkZfGxuYku57xE7r2XxvBquCQi",
  "key37": "1CjEPddrb3J1DG3nEeXx596wTJGT2FqvcXax6VRB7Sb5YMYcUvae4MKZVaPrCAJBzyhcSx41L3mhm3w4BMdjsvX",
  "key38": "2Q5eZ9gY1iPs39Rsk9dtM6SvgPr81yz49bB8sGXsqb6aTW7FBwjDigD3mywpngN3vBUU3GJL31RwvoyEs3mzmk62",
  "key39": "2GGneaZ7pApBkfM77QSciCTvf7dYEBGt5TU6GCYf7zUaXe9XA7Z1u5m6QdrthTuBhbN3Ln9WKxiZdbRqexShr4or",
  "key40": "3zd3d32mbyXYWxAFNvjQmnUmvUkWQiPqT5fRmFG8JZ96hHh5NSsD2kTeeTPaeb7ZDZGBAmPyGmePyxXKz4u8fGMD",
  "key41": "g8Rh6UEETZ1R9esc5RTz2ePdkQuopYhCzGxFCv8c2et4uX4XRtU8tjVhEAcEUUJAGaPnXiCDoDUjoaFYvN2v58T",
  "key42": "2PfZw3RfAqVUqa8mYcEFDTN2Wye5maACYkshQwAYWTHU9TR4KWKevqYcoGgiasDaFKGBpHwUsiomFXCc7abdQSyP",
  "key43": "5VV2fbg2nm9HbBNs1CTxk3muKdskm8USX8haBfMG4XEp7NNMKYRPXEW48MKy6axFXJoK3HXLzwgCfZHu2E3JGBmS",
  "key44": "2kQzaEYT9uhXZLtMjYwUBh42unGWSUJJrFsGZE8MzZE5z4yxggFMtMd7A6tcGr5bQfmSHMtni3gRPdrhbMxEUiGS",
  "key45": "4LFRPK1F8soG66srV9s42U7bKYtm4R6poxQehq2smEByLsTeoCennLfu7dzNW94SqCGJGEABkxEPiLXMakKDtgKq",
  "key46": "iZNZvEhzuKviUuyyjHYRtBMHBiGjLZR7WmoCrF6iiG6D7FydhEDMv2jPRp2XmRm2SYphgfRgwaQegewKUtbrj98",
  "key47": "2hqRK2sgLtR33CsTdsDdbthhnFEPBno4DRFFeuLieYiWzmdQWBn74VYnvyRvH9mcG8edgwFQnqZb196tq1JLELBq",
  "key48": "53yfoe414Xc69C58mzxrV1Fd4hSNDbmpSCA5tTNTkLtyApb5PqVTRSWsAukc1ZWFKsUsuvrgqHfq1eKYseQnx8cB"
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
