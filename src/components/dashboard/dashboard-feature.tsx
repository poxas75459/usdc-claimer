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
    "xs27X5ocE3d6nww2wGFKetVxCVySo9MMTS34UM5aEqjk1KLzSMfMsaSXnCcCQPR3nhbqS9dD12v8jYj9Bt5NQ7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26NK1qct8eYQNyPudjUrCzzS2Q2Ufn3KFfci81zQuG8Nw7xth5NAqMbMN1VcJBagCePVXsT76x3V2LBmoDFoEzhd",
  "key1": "PJdepMtAX8v1GEYGiNFrEVohkqHg9gFzzp4zX6ozPD3nVVg8yn1gF7g3HUq1ynyECzoDDVXdi4Xh9ADdGrP8ZHS",
  "key2": "3mrR8gWRMyUKof9865n1GwckpoRjCRWoBtfk1tFXWRWiJEtYFRJFBrXH2f711C5eyP1f1taTD1syHnNTK9kuGwJ5",
  "key3": "4HMDQZnmH9ZgfNDo2Xjdynnx88Znk9Vt91ZLCzSt5Db3WWnpbYUFQE5hKrYjufMBAkvpzuekMD6U3b1CS1U6Yik6",
  "key4": "5AUcLssPUA64UUn4QcqkzGVZxuPLVhgpSeXum91qCmTujf5xdMddgFCmvF3Ex2PHPy5i1qX87JubQgCTPdK2xzVA",
  "key5": "55CahZMBKe4QwhHS5ZUEX2519T449Y5iKeGAsx5Sa6WbmttCDVG7Kr4SQaarzVtkEJpcJmWoc9HbdPu8zA3UPbYN",
  "key6": "ZDQjK5vjgR8ULiv3neqUSaHvNPR2RXdnKwE3cWUF2w5gDKXp7HoPxesA1KieNX3QQKXigERPsWET27FXr6o1fL1",
  "key7": "3JXo8tyc2NLDH7r5we51ng8tdadG9ocXc8sLVztWGPSsPCauRmjXgRCD9P7wkrjpArzaViASoTFrR9V4RW5zg57v",
  "key8": "4kH63okdScBbHPgEBdXBEotbWUy75dHp3LSgAAugf9emsMgcF7L8FMvqR5wF7ZZQ697cx9qUfaCaX2GcE329cmqm",
  "key9": "3vJWPggZoPeYQKrfc68NcMVFepEPwYp8E8RHq7QntAehoYFL1PxApYpUKxxJA1cGthFja2tRayyofEmJbmzz1amk",
  "key10": "iFK8RvByJCSAT6epDGMGybNaYh5PtPEmgVTdgcx6hyrRH9BmRmsFiDTjNgVSVmkoFEPvRDriQfm1DVyctrDe1N3",
  "key11": "cmeyRYR4Vyj4fUtt9gStqZmkvEhioiHY5MkkT6UuW9E93QagE9aFz3DuihK2xauQXAenbDNuGgBV7dL4miHY6nK",
  "key12": "2nHrRgP8Bz1GPpawes622cCegam2QR9FYjjR3MKT7puaWwJRfCqGBitLbHc9qUoqXGSWEowq6PGK4fFbp48odCnx",
  "key13": "3xAGtEEncff6xB9CEA7PhV16FWVrFAitgeR88AaSykKL7pHMjzst5frrBXsSJfD7FMuXXiGgr8AfnXw2SXpx3zuR",
  "key14": "4WAGACTq7RVfQMVoWPBTdGLWNMXJ7dMq2Whxik91HD6jY6BwMZdwa4PcX5eHeYuzT2VZee5CdMJFaL1913FxbTxg",
  "key15": "zepWrbZ6nZ1UM2Pr9w9mub9YS6N2fVhYKcdqUciTvUMcMLdx8FZSHrsZNG7EvSAQ9JEaNGAvvHjY7Qd7ZkhHPwc",
  "key16": "66oNtmZHyToU7x1dQLQGR2cmgVp84hcfkX7Ju4cECqp69Q5fZ3xYtUPwgT3XkjnFaakzxgGSf3nts96q65obkSMU",
  "key17": "2sTT7wejKL7EgAMhZchTKxMrxiADzfkQKvFkbv3JFLFZARzfTpRfCg1t57mwQriGwFCMaWkmxms6MYGtVhoLm398",
  "key18": "4kxGRt8KeYuwWoMmtCCUPGNYnWNaa9ERak3fDhNkRmVaTVqEf4ijVRMJcdzS3797qYmGkHxq9THtox3TTnpSnpNV",
  "key19": "msDWEyDeKH35AEU2fP97pbZd2Rm26yqxQHSUVDjUxTZKpHXmky34U5NpwQFxzi22faswySEtSKY9vyr9Ts8Yxnf",
  "key20": "21xbYCPTneyAQQseAeENuhW9Xg9DVAP4GDYuFJpEqavmbSpAfySMV5SSShTVPLKNh5394q41hZnbwoZxi9ogLH4Q",
  "key21": "2oondwmb3k25NJVU997Mp9iWmMXGKGkGfmfVkuQabNZMxnj2tnSwNC3vQNZqWB2U1Z7hj9hcVnnHZsgr8PGt4iNm",
  "key22": "5ifUfnFKoGvwDj2Fx6rLJp48TFMoeGaf3vZn5JNSTQUKLbXsifkd4FyVDu1bqjZ93fvi5UW11ms7wCeQJXa2kGrt",
  "key23": "5Am8hAxF4APGoFwQg3EE3oJfYBkurf29p3r1ZsuKZVExK6Cbzn1GhGVN1arUTrH9DhJa9jVMwrurhe92kj8o7Y2E",
  "key24": "43XeMYP2kHiWpS5yTBZj5SqiN5jML4W4dofXqNg4pzN6avpKR1zew1JkWaLytqM1FKorADMc249psTC3UzFgWn8k",
  "key25": "496J9ci7LUXoP5rwLfMFespynxPmnScHUfnhLBjQh1HszgihCq9o4Q8HSqRJHzB8iVaxsv26jwgKeo3MjfpT8U9C",
  "key26": "5epY17Q8ZaidYMEMFuSnELGjcb5cDd7CK4fxT7efGicUL1JdiTDt5eazW6fJ12kyv8P1Jqyr2Jq2hm2sVcMXn64g",
  "key27": "48Thb58RZisK5rjnxQukoE96MF7SWBrG2o8MDVDYE3Cen1nJb2iTMaWhADgAEbkW2dKZpFTmM7EWEq53nPPUAzxM",
  "key28": "4fMsZpthxz7BqPGJFNxCawPw6tEPLYnuzBwTj7zoQpE1avinj8WguNyax4HVSqxjAfVxUFQye3psemCh5hFscnUH",
  "key29": "2bvi67AeMz4XEaoePFHC9dkTyyFbFzyVbzBRwQfCCxvxds9b6DUBwdnCCWLvjGH8tF8qoepdbpaUuvm7ctwG2BV4",
  "key30": "5CGB1zG1iiGoya4e62hmSNGuLfjBuum3GjmdPEWiFQ5fXpsKWhJs37PkGCVz4cemMYKximfATWWPefEexmE7mozd",
  "key31": "66ZRdVrAxM877HJHAL72fpXFwm463su6tA6AkkrHQ5RuzpWxaphW1zdkx9K4dpt7ySHG7fxdu4vYvR9p7q7AGPKJ",
  "key32": "5XEQE5G7mYb8AXcvXBPtmfZykNdjNJsSuT1fmZZJi8qcndFZHiRHt4NRR7xMwPokgoDoigA8udJuo7ySG8UwBTJM",
  "key33": "5dAQHhwN5XNFkZyhCkMJ2ZSnzbfV8EzgaYuNU3YNep4so6xSNeKQse7hWWBqoP3WJsdYSmZpKzZXuso2odKgXytP",
  "key34": "2JvGGwRDJKrgR2gdX4eNJ2sQ8HdRR8MvkqJNZneRpXGkw675zdYnj4StSqa8CarPN2DPvhwAQiJZSAVLxFwUVTYV",
  "key35": "4yxuajqAy7wcGfJ5mR5HZ19sVuUzoyprrsHh9Gkuaph4xP4ersc2yvxSady9NQJSdCTdFHJw8qfLyDwmB1YHFRr3",
  "key36": "3wviUgAJH1gxEZdvJwEfh6gXQG9hEZCuwHskauWJMSPZaxcjV6aFU6hwdXEondLTPTunXn1P5uXNjxyNngqs7AcX",
  "key37": "4q3RVEXXZQgw9X7mzUQGJpHtDaTY3B43o1C4gKm62jdZv5m46D6TfLDccQEy6N9BZRC1vQE4bygs1e2Mx5eMKQKK",
  "key38": "2tkUCkitywcxweTvvfidNaobZog8SSBtwMRcBtRipfS7mUoGaidms4mNaCUzpCUTZw3oKA3YPJxeDo5RqCbHouoh",
  "key39": "35yVtge3i3boWHNFbwUcirFnVp6evcVfNuXi3Htf7LC7XRtQhDgYR59AADMS2Svm91R7SBq1f2CepBYoe3rM1MEp",
  "key40": "5gXoWZkvpgLssiG9B9ciLqiEEfYgYJ6StYgERZ53ByXdNuRJb8yezUYDYyMZtmiqFkGhD59cLqB9dPmEYVECHCoY",
  "key41": "3ynic7xQFanUKYWFFNT6pCQnh6ectcgvmKXMVZRFJnHJ4ukoyNyRVTUSYxUUbDMaHTmXhuWBX1hzrwiHrB5eLZMV",
  "key42": "4PbU98t4eRHjGdXndanXp7ijYhTprLUKjWHUm2RpRtY8LVDNWMumon36G63eQbPYPg8CwmxWXt4RtngehwRF4E41",
  "key43": "fj7Rfkn4J98AGQ7t2E66zQrTGLBwNMGiXVXborCB8Sp3qu6cQa5wKSwmsJ7qXRe5W5qMgKGiAcw3XiReBCBwkCd",
  "key44": "5APfDLLc3HqeKBrotiDCCq55KNGk6WamhhDk9GjCL1cHkDhjVC4kqqWf9km2yoFmGFDJpD5mVvTiG3iWif5T7Bhi",
  "key45": "4NvNFjmYvdrnjUDuxmYsYymzrusCtLCnHr97NADHHq6Lgs8fe7GTx3U9FgWs15KFj9UnNEvGjYG4USaQszT7WzyT",
  "key46": "ZVMMbRXZLT6BFTpzJQc36QcpubrdT9HG37cRp6NfaN68mz537FjqzkUAgwTeve8cMSECUoAHutXDEWZ99YtwKwW",
  "key47": "5sP9rJNdWtmZvvWuLBgxsX3FcE63HFKU2LoDxUs9QJjfFv9wWc3wBz1przqhWuk5fRM4JYGaMU3KpPMvbTJWae4P",
  "key48": "21eutxfKKkY3bSGQzNVUeeUwQkB63M9f8FCEeqzc8m4TPesRf2tptn54N7JiLySjM9qVudJ4QqemEyUJfdNgaGtd",
  "key49": "4Ew9aS5rAopFZ9LayCigYsd6nGHwo2xZKTyBydB3tjDs9Ba2U9rxpiYwQwUtGSwUnmFpv7GUYQXdgSsLDQZpsFim"
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
