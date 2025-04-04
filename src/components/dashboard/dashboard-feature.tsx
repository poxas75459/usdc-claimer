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
    "2YcXUbJbcB5hr4rZttG1CBxjqS5NW57xKMojdUNGv7wKNLKapTLQpYLmfrq1CuujNwb153sM4kZ714PcUT77mb3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJF8ZzZwKiWQsKowkZkccXMSd9ZLnzqLrpJKfUoZxJ3sm8Cy7w9c1EC4Nug9KMqD7PGV6zC5E5FTARZDbidAaee",
  "key1": "5LBkjBMukzJcZ7LLbWwbZK5KnDKnS9aL1jJ1wSPeofCJaXbUsQRKuSwNQhmyqWbLmwXkx1tBia1yeuidU9x9wKHu",
  "key2": "2tMoKzKrMgBbr3B9bzkeALaYtWVyVoiQhmDQeGDCG3z6JVAUVg4PyprEcH7BF28LjiWtkKFH9Z4bNTHSxnM19RHT",
  "key3": "3LonX9zbcmB4G5vVZZXHid17MqA25pbsd6PfY3L1ccDft5bqUJoZJDovrBuoifmyLpy7rDYkHE62W9E3HKHikMaf",
  "key4": "3Z7hoeEXKvEA1EayXcfxDE2QPbbzRQaN3cAmzK4Bh3y59L3ikhCEywYLyDuVXug5aBqV1qma9LSbdfkoMHNFbKs2",
  "key5": "3u8YyWfCebTnFnaFCBAdL8hYqrgaM7XGGnWgUZWJ1NRahiVYvi2NRKrMp5b83K5jC7wxQQqnX45vPDLUGzKK7f7T",
  "key6": "2RjVJxDFG1QgXNAHASeBNMNX7fNqpr9VnToCGkUTz65AYF2hpm9z5X1TWPVdxRRnKZEzy6PbMdhJBdTzK7UJ3LjD",
  "key7": "sWwsdfkcW9RmZs2J1M85SJ23XujqmKz94McfrVmQgq7pm6TiTH8GEXcVAGVUsKMGFs1ygbUmzTFeMU5XfFSLFKR",
  "key8": "2TVePiPDRrPP6DRj9yX8ZzwhNtvX3WXXV8WkWKaYHaji5e7gbEShaiJDLxhKB2aQj6FeaJW2pon8VePaRiXBgwzb",
  "key9": "3CUmSUVvXTuy741tPWAXhrtANAVKXA9XnNTKfaaVvfE94HYEwcuAbUgGihH7zRtTP5jzJ95rdVUS7vmQ9pKpMCaQ",
  "key10": "fzyLCnu5ZNY6onqy4j52kSPhsfr73GSXdzchWNQrTkGqGJrGLmdKmNsqLA1LR1yDUau2ZeJKgaezx2jUcgKxEjT",
  "key11": "2pyAmtgPfJepddyEczRwS6zMUg2doBA4Y5jo2e57rjUpXPmGG1WxMs8KKbuZYxgXA6ou6bXpUF1qrNs1iJ9TQaQk",
  "key12": "29rLfFFqFQSTbf58e7WE7ZtdcENcFErKK6i1hRhUt4LMyHQHeVMrjqSECHkPnxa2bqSwMi9gHwQt2vAmYZR7Udho",
  "key13": "3axtDZkbBiQEMBh4yFzH19cEgYRRVbuuoJdi1DEFyK1jegsfXJiNudN8zghCa5eSpH9mB5cNy2TzkiBDEyFCGQrY",
  "key14": "3UXUSd2Lwc3SDm9cKjgZW97cD4yVc6xUc7Joj6ttvJ2WTNDNktY53pZPPvNctuNTfz2fZFiSRhW9PJWzu2Ud5AWs",
  "key15": "3s4GZPrxT7jQPohme36VZC2vxYmBJEZV6eDoDJA5YRcZftdDFnppWyqBsuboRbZTMNVi1Jqxrh4efB5Y6xesLQNY",
  "key16": "34X1FqVKoguqchCKMY91X4NpfBtkpipwsxHqbf3CdvLd4fnYCsXkb3TGiDNMfzZCtLLZNX2xvrJPzeGk4trKoBuH",
  "key17": "4JHK4ECgZN3UyNukyDddFyXH3v8AjWgaKc5h2mjsZhoa56kVbd2Nf76L8U6R6pGkQhA3Fr83BwnjHYH2jjUTEuS7",
  "key18": "4jgaBn6etS85AA8oWv7YMgQcUkwZvQFCoPExYvBEFnNq21YYZuUU8AfXhE8AMvXHiTQB9uQjTrovqWGY4HACsRB2",
  "key19": "3Pn1koPVt12bHoDekCCpbGL8STijT2MtMdeohpi4X2kGAsHqvQdaZKK6L3KCdMGehZPw6RwftaLFqfJFLWp9aBBf",
  "key20": "8UK1RWrB3T6gwehAPh3m54dmHKVyhE6n1DERL6m33dcA3rN5rKdWG9mbDU7TuFTg9xaGDFoS6JcKgm3gcV2X8GM",
  "key21": "FkbM8ASbrvYDwvG9bCSxUJpZEV6VKSnudeAuB1UJZ74xJxfLbvsBvnSshBT2GpjPRNhL8iqx7NtSgfg9zSHzjqT",
  "key22": "53HDQtQWktnJqzyhmsM63FZuHxZn74HDAT7FwBwznQX7b4GGkW1bY6Aqsp9tEkFV3QBi8Mp4YNBCUK2BMMDphVNM",
  "key23": "3XrnNRzHSC1F7SzG2fRXuXvcY1bzyFqRqzGS7E7PdTWKov19gCFrkxnf3Fs5GGgbkQVMU319xHZeSc9bUQPk5iBL",
  "key24": "2coKdQGDZEMzSN2MXL8JBZSWio8ALQVjqSLu5FQRSeuusqABprwExbrmvdQQHXWLQEdmoXtMybTJTPgqxXso7Bjc",
  "key25": "2CohF8S6gKxJanQxaW21dEZ4gtnt4TVJjEu3MYZy2ZXEX8sK9ec3XS1QzNXyQEYsiZMDVpY3dvsK9LPEGPgVHYBR",
  "key26": "4KvkuWRQXwRWkHcUUH6kdzQgGJA5gjdCdjzQJtc5d39R7cey77ToovpBfeYFqpREjNSmCJM81M1G3YdtoV94Nh4h",
  "key27": "m2p59CgtaRHnM3RuHJyCdeGNNk3cfBPTCgx3uaiDZQDL4kiBNfJwTzvZxrNRD42cguJXysEd8ucktCefs2EedEG",
  "key28": "5riHLBhHShctd4x9UtKq8Eowh1aYAmaiWBS3XpvYczRrx4sRXNkcJWwxyJ31HzXp9oFgfAapfRQZXy3LySmvfNP1",
  "key29": "2dX9vmGgwrx8TWWCUkHEdSV2iyQ8RxNiUmBqyjdgtjtn3P44LmegBfCn5L2gqUzNTk5tXSbrcMp5VAP1dbKEAf3L",
  "key30": "2UUGHNf3k4vw2yr9Vzi3KYAEo1GesrDAeToY9ERrEXTvNtk2MXf14dkTdL9Qrr9fC2aDLyiU5FxQLvEKyyoxPBXc",
  "key31": "5dfo9Twz2z5T5bTSU5ppGdfFjLzkYwMpLxCmrMFMUbQEaQa6j3R5rysynLrcPq49nrCiurbWqzCZw6aH6kyRTseq",
  "key32": "2fJs5HKzHjEiH4wMze2xs9AFGQcyvBK2qgMoVyZ1bVKb1aTo7RZc1wwuogc4dM8fELNnk6rhjpxWMaHbMbVBZ7AR",
  "key33": "Wy6i7jo5nYbWGkDNM5jYvgtD8AdwdwfW9vvjhUVm4NJ3Xo4NhJxEtGV1eYCrRbUZ9CDFezUbeRXgXfcFsFRkEaz",
  "key34": "8QdQcURmZ1opWTdFs7eQ1ZWRZgFJv7ScitHTrgf3cDWpG18vVKHWFSTZZmD284JNnmbwZyxzuaEPEfa4rc65RBz",
  "key35": "2LF4SahmbmZkrsXJGnxaL4MTUbN1UTviS9qyBCgUbwW172weh78TdxDs4yk2RDbbaziPjd3XtjSVGBMURB9Tz87v",
  "key36": "5R8F7E73y8XKMgJ36B55Lw8yPEJRZAnnt5LfZFEuyJ9ZtxttMBChUay1pyP2xmaoHKrQf9dJp4is437YUWBUefgJ",
  "key37": "cjqLstWET35VvvLadfEVde9avZstY24r64bLUchJ95to7XuU1qFimfSmt2W9HC9to3XRPGuPFVi64gVvhdB97So",
  "key38": "1PVDxLUJa3hUzbFtWEa2yfZG4zut9nu4dnVXZCRy5kEbJ5YKej5G4pD8NUSXj59VUJqvyG8ztCvfhHTxdDZXwHm",
  "key39": "2DZapVVsCaybMDj1bZA6NQ4CC5oJu4XUPGJtQ5hQuDky8F1PRc373vieVxiZLMxW3ux2QXreXKy4S2qjZRFbPxDL",
  "key40": "gckUppbsAQ3cWrEq6EXosWxSVVRGRWFmiBeVU7nnUtvZ5DjYNUvkeCZM9U7RcPZhbQjYUnTcW95uADmnCQqoELY",
  "key41": "Q3dCiv6aRAByje5kLu6R8SgHADbSx3DZGmFEsWeso7yBZ2jr9bJcXd9KqJ5XK2Do35Fju1nqwH6MCQexuLKFP8t",
  "key42": "sja7YchgYR9EhitHbZLvRNCSwpxUX7ubiwJPxnVRay3pJDn6Bn19zkh9XyzvNdbtHdwahgJdL5Mkub3XMNAgq4k"
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
