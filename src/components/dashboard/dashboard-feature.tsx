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
    "3hVjUfb5iNSD67maAc7fEK4hABN2ztw2waqescW6ftwkhuysTAiBgaXMNSHtuME6YeysiBbY4v92kfDbfaVim5JH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v4LC525pty3yU4p9XRKUGLapfe1FMAjNZn7mKJtoxPjSsU91FpWnVLar6Q7eHPCqntJ3UzBNAebiJLNAAcV25wn",
  "key1": "5CgnL3rz2Uex7VLhYmeYJxg8d13wG7rdxUw2meHtRRM1cxUeLpLrNQNiF9ikoCAkGW84rEXjMXG462y7f14HXNSa",
  "key2": "5y3QNskUpHt72pGSAZtvXp5dAQ5C8LjqsMzeCVYAV2rszqREn6SHRqybeDFJu5HgxeFS8bfj7geFwFvPtf9Eu66x",
  "key3": "611uRzb1Xbw7LRqefxZhuKMxBodZGqHx3fQ4r5JWr96RcvmDZzW3XCr18dm7NuUsf6AypXRMk6E75dUmJquf9e5W",
  "key4": "53MngdiUeUbnebTzc6bf3Lim5SaEzeY1q5zEJJx2WKVvQkBhK5ce5RGCiNYTgw67wzniZzTFaCceVh423hvd6XeN",
  "key5": "3HpR1mAWr99NuBuKa5yBNUAiJoUgfej5CLYJHnwE61EcPDwSjXYPQzdrX7aGSz1tNRipc5tdt4X82R3Kpu6CASPW",
  "key6": "4MHXstfoD8FWnbwe4nEvJRsJWZHX5KeCbD9GsWGNu5Cahbrtx81aWQKjYmHbC4MKsBTejnB7jHRrZKzpeYppL2v2",
  "key7": "3KvCbudYjwtqiLN4F9CLhgqoTVCPkE9mVD8isq4jyj3tUgq1K3Hik35muoNKkgdi48xepuToGscka2UwQDP1kRjJ",
  "key8": "4fa4du22yHaCeCTA9zUKnYFn7QuwzVjjkrg1DciCkNksb13kWxw3L5XaA3DrMhCjutfQfDuDtxBmpoX2LhnJEC3d",
  "key9": "23EjgeS3kU8PLrs1Qx5fSMYPsGtqtM1m2EXhpWRGVKRt6MFGaVBNPNPdyBeETicFU4xEiso8nZJK1QtbayKtJh7P",
  "key10": "3UV13A6RfZxhgn8hd6kWfiGZAcvZUqgfT1wvF6nf7METd2h4feSrrhpobgzkjuQa9XzK1g1gvKgEswkbwYW6d6X7",
  "key11": "3fAUDxFLSusDYTbqGWE6N36p9ELBuuEKtMpfQDpAWuepdohdNRY7DqAqdzXNVDmavw3pJhJqXxSvZUtU3sQ13v6F",
  "key12": "288rkfsavAvcboqyiYyjimqPxZQi9QaqYRtLFw4V4pg4DFuyTgo37qLBB2zd2PsHHLNtjZVQtY5Pa86xiwb6uMyQ",
  "key13": "2J2F3toJh7VPRWGqfGJEYM18kHDskouLVmLW8xK5Jpmi29JGcZYfb3w8thvmGb4hUCbnZzb72MBnFRn6AQ8qjA5j",
  "key14": "242fnA6BTnpqHEdDEhuSf33rWB7x4tGhR7aFVX2bfCWyrhCcfeqpZo88xumMXM9pk8bufJtGrcQ5yshiPMt4A2Sf",
  "key15": "39qnk9fjfC5W4ZFCK7E5p2kVgkUuXMHyknxE5yHmdcxAtAomm7MnHLxrfLGtJZRWHxciUDXcDLhBhpdQf5S8TZff",
  "key16": "9AbFRxEJdeEJq1WDEoHGue4m1nQ9Mx7iQ16tf2XGDQWJMPE2qhUy8Yr8MneCfM9p6rA1Gs8UKX2zmUVGmkzWi2P",
  "key17": "2sEdv21RiAqmaDJyaRMmY1VWX5fXXFectSMfc34WhBNA85fQbs1nJkEeiwgHNvJ4aUwmEKJD3hX7oDxuUT6vccn1",
  "key18": "5vFySE1TxknZPBDDN4aB93uy43ZpLazybzYUjQnENbpiCSu4b3S6dMZg3K616E9HNnzWF1zNseNhCSYGWxvvQKuq",
  "key19": "3YTx7aghha1KZacFg2p9LKpwxhbTSCSTvTa6Q7wwLP7zDjvoEfTebKJPnTUfQQS5DzoxTttX2G3uh1s4VyfkgUgA",
  "key20": "3pHMgGijYC2LtNCizJHjYHfuQFzU5TpJcU8MZbt2qKCgBvtH4w9QVAXkb5zXH8iNbEF9Q63EyvoBs6NS5gWGm4nX",
  "key21": "4Emi976rTyBaRPW11gfRn5qBcGWGkKc8fRUu64W86LRov3BVDdi7ucgbvaoeUAA3qfgErZfptPy9717TWPtwwCAH",
  "key22": "4KkWouc3rZEeMJGHZQZpfHDNRohh4wCDcYqCMxWmpvpoCthszqibZDQ9GJ6LV9FeU5vyqcpZPUUhKqkmUzMQDHxd",
  "key23": "9HLJJjVkMT6Ee9Abf6dxzbnEJjGGFumADV3PUW8jtnkX4inNizXxUUbk3KskbgetKc2eocdov5BczabkhqiiDHv",
  "key24": "4FP2uUCM16os4zAvVfavdbXfz5qAoZg4aEnNNFfjg1eSG7vchfPBBxH23JoUEXuVasgfDibKsNZJcW12Qm6BgSZz",
  "key25": "Jpx43o6mQ1BEfYPzk1eyKiCZWTucnDjXMXVYfF9qUTJFjPA7Yis3pC2wHp4eTG72pZWgSEdZ9syybci5irqJx4s",
  "key26": "2iais2mNdpsZLbXhBLzK9xDvAYxnP1m7uhtUXXqT3dDmNRupWNL9uBLKPYGBXS3ZT7tQXbcXUuMdUWwWFMgVRioL",
  "key27": "32PTcGEm4Ve5QTzhEEWw6pYSR7f5K49S5jA46R4LoAkyLBVMrFR9uudGEyRGRbSBsCXiw6XgYDPXx4LACmJTze5h",
  "key28": "4ghsQXWcmCoXD7AJUkjgmLHboFhGCYdEaYCbsb9hesvUpuatCHytL33ffpX9gpB81v8e16RA4oFU3bE8VqGWw26u",
  "key29": "xUTDbdVqUsUf4u1Zx8jkTvMui3ZPw45VVSsyioHsvPf4vSzqrPvH4FWT1HYJ5ZJ93fA9fPuhRaww8qtTt4pe9nu",
  "key30": "66EfatAJpe6SxhDap5uXSxo8NRmLGV64vJSRns2PXMLrJxAT5WRUWZS2Y7zNh7QSU8LiXtbYc7kReCCKAJRA5VuZ",
  "key31": "3N8eQQmrSDA6x93EjhxnaowZcvag2nBfdpWKGnx69u9yHH9kCccFurfVLCseTu7UzX2554pbanbe47Dr2yCwPZ11",
  "key32": "3njFB5bdKZbwH5SQ4Y2ewcXJ51k6hTZc74a5UtbaYJLY3riUTgYmN4ogZuDUXNKS8RS4ZW6Q1DPLtqmn7eBQ5EHL",
  "key33": "4vkz6Z5btBAVpNWsH2e1a1yczqRN1VZcnnY9SR879CvjsdpaSNMR4oaasvT7z7bAwmwYVZjkWwx8iVUL5mFCDGD1",
  "key34": "3gWwKCv2vvS6BSiRvtf12vPwevaQBs4mVmov8PHzaA98CKdwd35ciHE3y4i2QyEGJ3kKRwjRFvx7GbRq2HLz647D",
  "key35": "4oR2iEW5vY6g45Uy4KNAPAdeCsPEqHs3cEuuXvuWwrZQEYueztgb9K1QRBHJzp8oR8xTSoWP2Gk9zaSqWoU15Csw",
  "key36": "4pQHoAaYSvkStS3znJouNsNbGeuYoGzberQDfgkQ8HpnjEWKxgSoz1tTpuJG9Jui3MZXmbDtwE5YiNxMbSJu7Ah9",
  "key37": "3LhPn6bx7VCXhpoPx6W6Cob6wgF3aLiEPb7S71QeZ8oMaxrR1RVBUNe9TFrB5Jkx2Hn9197tPMAmjVZ9cxoQBdFa",
  "key38": "454QNE5szk32cbsFd92outMqctye7bfZL2mKU5RycSLcK6vGEfHTE2WkYdfFfJNtNTiCXZaeavQEGfZ1Bf6fys4w",
  "key39": "cmsWVfiLo386pbprs7gLFnvKCyv8zVoicRyAsZQChqXqmxdtqJh4XmzmMwTEx94fJ5Cjt9d2WXWPLrgAKtB3tmn",
  "key40": "2ZpRDuLgzVBcn1QLjsEJHBPGokA4J5TkCFgwZFQvKmnSFciE5uJ9rNhLozq4eZSrWWyai3mNVoa1zpv4YvyFuMFv",
  "key41": "54ggYYkG2WkHPpyf7kPBzZokY3T7FWSdvbwUeUteMJuFBUzhCSKuow3vdkeQi7dLx6N6vjnjysHhLUgL8ixbqGxV"
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
