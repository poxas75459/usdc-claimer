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
    "5Z8To4pDwFN2xpE19cyf2kjihaub1LdrWWbGxHHUQZZndzDWUKx3ke9uEnCRbE6KVdmi85Qx96AGmhrUMjqFvxym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HqHB1u5QC6aWqMbAdJwzk3ZpMnYQDKSfe4e458KMC3QENtoeZcrz8Mbvu7kTLTCGUyAHYytm2ZJ4JT3Bswa4b49",
  "key1": "xzK2XN1k1ytbunLJbSGqXDQmHmPTEXWgZ6m46TFPasAetLk5VuopqBaUbJbkues8EC1GojgGhdWirkqyj1qVsvW",
  "key2": "5VhqGdt1JmreRBpYjeanmsNaWpQRfpjP9Y6oRUs4ZfJDCzYe6wAHxsgnUxJamGUAGZZid2iqngxJcUq5h8ETa1AM",
  "key3": "2mVLQrjbbwh6C8bVX88vri19ngQaJcwjEzC2f66WSJhsxoGc6teDfdgZxogtRQooFFRKeU8euYqzMhBvfptPLkTj",
  "key4": "5RKBYuvoDGpbsEP3fuCHLL5LJn8iKqRPfKmjgZTH7vdUrgd2kWzpiX3WVGFeZMECLwtxXszDARoU847fjAYc7NFk",
  "key5": "48LhEuvtjeMvJWjVThJDVsTFLyt3RhxqqiLyUL2cirJx6Dkeh6DDav7cifshZPtfnoPKQpzfecchcxDkhWTCK35H",
  "key6": "5FxJeZJB8188yGkgVJMK1vT7MDvWzzk7FfqhY3uRhRaTKk9mWuzsgsnYfRZRw8SnzmLgUXRCcSLZQGB6XqFwdntu",
  "key7": "4WpMyDuR1XzVWJwmrGy6Hv3oPaKCoj9riyNFAcJn6gVJ2mv2dLbM8ySkc7y3ZMq2geHKkYfWnUnri1MkZ8shNNRt",
  "key8": "NNME128WwiuHTFi1D5JGcBb2dQwjFVsdruUHCAr4EYJSzXd4SrUWRFicoD6MYhegW1oUYWD751yVTftur5rVu7g",
  "key9": "2zK99ydZxRrBcykbzU1v69mZoktwSXBUCktpVD4SaKsY3N5UvkNKhSS8inuGrzhcWmZyxbEE3nnMoJFkdWfnbd7D",
  "key10": "4tzwzfp36QJAGibFC7CdWnfRG4pMeMxwKcTLSKmk2Pb8CRSJZivcck92CRFaQHXyoyEjw2ZFiDU8vaASSdh1dB9",
  "key11": "5DJi6jso1tfbAPCSz4BVX7UrJHB5aekFKPkUfGu19rLVfmGd4oRBnCnVjFZqXDRUpDFcHVUv4b8pDNEgGy6EK1qG",
  "key12": "5XNJaYr3EkiaLiMKSDuMo7wzo1gHakibjEL9WmfqnP6avfUbiBeJQ5YkN19CrjMBJexEygi18vwiVyj9X83bMyXs",
  "key13": "4NDyURHdA8j43DBCxfoRJSDUUNiYu6crGxrmtDrXUbUt9Rd2GCJFMg4MfuVoPHivnsNi4vpDjWMp1m5hKfusscxQ",
  "key14": "53tzedGxoM2wqpGLbsB2uAL7uEpsTjwSdbVEHSQqv5GAkUhDW1vGdeHJut58UwmZXdjujaYaoTgDsJYu51CbvB59",
  "key15": "5KL6bnLyjX3wvoKYRivhigJRPig6gd3JQH5SjTLExY6TfQiP3jADZHY52QsDUXC1RJUuJ7VdLFN4zNRWqCULiWzP",
  "key16": "3P5Dtz1EnSdeCXCa5HJbchP64QFPNJRfsdfdosDtwX1HshXxHUA4JWBRwR7xv5AKpasSvM5DF86Ne6HMZUiJJcMq",
  "key17": "23bMBiDw8vHCmEZc7q3LXPRjSHV7QKz5vrQU5Tt3bRdjFxXM8wbQujBWNBHw7eA3Zob1uB35muTQTY9VS3MZ5L5y",
  "key18": "3jMMaNd6xQUE3Bg2Cmvvb2rdkFnf44VkcPtUcBhdzrchP4LZedWQoXdQRrNQkpiDrVR5myQBKDNHTy3MQGKZYH5m",
  "key19": "5FqFGw9fjfpPNCu8LmryK8mS2hBwRZSGhobErFNipeqcG3YwvdB1ACitU34Z8kEakovzPFaS9K22asiPzVuuRfW6",
  "key20": "3ehME9DzhyQWv2he7z8Sn3ov1paWPzU1RYgJnXZNnCZHFtQMiS8JF7f8gRVhifhRj7bYr7v3pgKw96dxzqtxmDdT",
  "key21": "5kqnRsMsyhJRgdgNgbxnyDFwDxeFDKNHj2Xo9XKxKvG3WxjW5c7VFPZWicCigjgvJ5ntverb7YZ3Lzc2jZEpbSXR",
  "key22": "3cEJhDqhTb1DhSoYgqgFvoG7xQuMEXUfn7Ga14NcE4oaKykkoiEnzLYDu5qANNzGbdujnwv1kaFkGXZCfW1yQCny",
  "key23": "4nHyxiuSWtRGqf1QTCH68eMR3QMx2tJ2io8m8N4ZJrsiPT4ZpGdHfPnVD2zuefeExGttWCL5St2LAK8w527i7t6w",
  "key24": "5gnUn1pczuvLmZdgnKqDcTj2bWKULdgpRfnHw9jACQLAH87kczH6t6EptVdmxHMNMjdva6ZNhAmtx4oSrsdkFt1T",
  "key25": "FeSmM6jA4sWPaXmwNSrZHU9FHknL4hEGoXhXFkdtesWExAJccvw63QZ2zEED1eXD6MT3qCZG2ZQNEgCLhoY9uGx",
  "key26": "4vQPiuRu5DuJUi4MZ7GncpGA7wDPPe68P1P5dzWx5ZX8g6muiyewGSmgroZB9LEkdMpSvird5jtdtMKp3eL1YkY9",
  "key27": "3hbCCtgd24Kjk1ibHC4BxKUTJKMPQU4ycGsu9UKTW8vJTj8rfTNn95bPs7xWWTzJ2oTqXs44oRYB8EnJ3KW5YifY",
  "key28": "xurFJAPQ65GtnLxpaMocmWuALy7e3Tad4YDp9MKZfqFybBQeGp6hzP2cV5gpinueNEcP2MLBKYthhCgNjA3hVoR",
  "key29": "2gDc9xioUk7RivzeKp6YDFNoPNWXjjzLvYZEqXCBgUkuvUbGiP9gJjHfWvmwc6Y6hSLVDEBWdURRscpZXw8fdkBX",
  "key30": "5SpWFh62gMXU2ThBN6C4fkAtnCNLaZMmWFLQmV9odNU41HYhwLWsmcYr4GYPrkF4LaX7NGG2Q8MXabp2YeRnzb77",
  "key31": "5uFykmK7qNYNiLjubBpfdNuiZ1rkrSH1Nj7aaJroj7Akg6FTfSja4w3wa4zs7FAQEFfaoFttvo7659wCKcgz2HnH",
  "key32": "5m2oej5phjyeVyboQtojF6xxmfUbZ2TzrqwcnSmDqHNdJDctgk1Sq8TV1z8KS5onKhpe4V254goDVM3chXfsf3gm",
  "key33": "3wU6VDcbABcWyobLivC8wTzbd6nVmgfE1ozhex4WcLg9U9rwqHiCsL3JrXXg6ZwxAHcZuqFNfHprwjv3Uqwh8Muc",
  "key34": "5HLPRN2w1UzHiSJmNFdfZoKHHAuAvt2wwHzPm4Z7yEAV2ihD6sSd5spp8cCSi154L1GWJ8p3ycctAWAFEHxkFZay",
  "key35": "JzHtkdwJjvYdoR2etEbAm1ixn3G8TyU7Mh5Xe7masFfe2Lx9EVGG5H7eTkTFtRFVTXb9hvgg7do1eMTy3amrBFs",
  "key36": "42dkuPJxMBRo2uAxLtfsSNx3fYFePT6be49MHNnAow6qm7H2jVvS5Pj61XQwKZkh8ADymjoioHwPmHJU4KA843NB",
  "key37": "5NeEE5phufYmB4kDP48D9TSbwxCmdMTAgvQEQEDwGMstbW9rMB5fLCauAxvEpFRsRWDCxtfh3bUb2jsMTV6nsBGp",
  "key38": "3KmRescowBgMgpb7JSusjq5M4SUNKSVgjGCnwTV3cCwYt72ro6wGvbpRPXGJmY6cC7DVDgC692K96NkL2ZMe2xz3",
  "key39": "tSmF6sa7CwBk8rB6DY1AppmxwoKuWCx5C4ri8To676roeo57AYGjQQxW7sXoTf3wgCdDjqUWAAA2fjK5Uic8BJp",
  "key40": "4Eoj6G8fiA4N7Wj27sEe414UFrjD5NHtsBs6HhbaRaGL7HsGghNy1HoTdpRQUH5fLRrGPJVynewyVXUPtzSQRzcZ",
  "key41": "5jgt3fJtA3AQJwy1PQfHhzWCrp5vgdYg4aKRHMVFbR4mnrwwCYTFsRacVgjUGziSQHxV1zPxZjyiLFnjQcfULh4q",
  "key42": "3pUAnGiK1LrjdG7vPgaJnZc3VESHuGh2WLSyMkPcZo5P2RqVSB1w8av6sfTMmD2V4U8iw2k3q3hMoZF1TuR4a4XP",
  "key43": "3hTBWGvNQ7zim2LVzGUsZiJMvPi3toSYUj7kXMV3WKbZDxuJS6XS9P8D6kAB2EFHjqLzUVgufiGsMfg9VcGSLE7X",
  "key44": "5v5kjkNH1BWhF128QQatm8x45pczWASWysx4KvPVMZEY6yJzGyfPffmX8VBY2pLQRoWnYVAPcUvHF1yzWFo9GNTG",
  "key45": "49x2yGZpAdYMMer61GVfeMMTN8TyDWYqeXGEeaKF8Crm3rMTSqjaZA8PUX4Str9fnBMRV19oRCVZRMuK8jwEVcjo",
  "key46": "32Fg9xqBkY2FUTAiVX4a1ffgj5KxjCGThE8k9L23pv79WgJcvB3mFYRjv2Umy3DWrQjVbdmT1pdGhiFrCCv93yzw",
  "key47": "dY28EY8HSXUKNtUmmfhxZFdBhB3LspMvgeHnwWRhJJEjKPE5fMssNWPZSyQpJB4C8nMp4CiwsCgo5QEcxHF451v"
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
