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
    "4KQFq5TcrKfAz3JjKy5bVq3J6WghUMoU39jaozfC3TVascinPW3Cox3cjVdMNBiwT5zpZXs4iZ3qU2BqhS5QHXbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q4YtwQEVxSqrhNQ8TDFATCPiZ6eKp53Y4ZnknfRNL8RPr8oqknJNSshWVewUspxasoDUUQ5si8MpweRha8J1GJB",
  "key1": "27UkPXQMoE5PkSVccgsNJ5V5vfQUFDm98CqkRBvvyMZN5DrniPBeDGsGHWYZcrTkXNvhsMfJGcL1Bhg3C8HfSW3B",
  "key2": "5yvaDNzsn17dRk2vZueRemyH9rfpPFVG7C4ta9YJiG4ipc1qCHQKJBhMXanNno6ewnX5usZDTGL8M1YerfSyoxfi",
  "key3": "2xzeEE3Qtcq8fkTxH3Vv6mF82J55Wn8TgoYVUkiRFZ6ZYndXxiJqecRxd31ECdzLUGFDrrjaZAkVQb7NmuCmabBW",
  "key4": "3tF8S45vDPkxHhR4F2PtvwfD4ggXST6hjThctASjt98VQ7wVJKTh5j5BVaoDGwT6Lc6CUDVSKQ5ioXDreE7fFn45",
  "key5": "DKS98Ahp599c1qXAb8eRXDGmkTzQSdF7hpviqad9VTKyH3xPY6s32EwtoEhC9zwYxnczLbDnfdkohoJbM84WEZy",
  "key6": "44YAsCP7cBYrrTDx5fWuMAzyhcp2vEeviDi7ZiUnEbubhED9vLgbgasWHpLCTca4ifUoz2XmxtYVSFT9d8v1Gt1T",
  "key7": "29yqmqwf7QjGtaqvdcWWomk8NYBZN1UvWL93sKDL8dfWL3AmC8Ti8Jsu8hAV3DsZ56KQCveorb2v8bivHqFPKVMq",
  "key8": "3Hssy4uZWUJyBE1Rzdsd4ZxDkgKakUaGJFDCzSnWrgZBdp2aeiQ6qsafHEbomQKG1wdcABS6uBNTjnhwTEHMczJR",
  "key9": "a7fU1Rk5GeXvpQDSQZ6pDXQ5HDQSwUCYY9cDREJKfou9L9efSNG5jPdsWojEmMmYEVfppRV14ALkaiWz29sDQZj",
  "key10": "2De8B7v7sQwdADwGqXqR9EfRLD5ZW5ZambSzG6Bk7fRjLD1zZaHCYqKqu9bmtjMgh2paERvGDz2f4eeVBYLa459m",
  "key11": "4h9VP3Z3yhNKysNZi5VafUeehVjhZDR6LBoG8cEmqmDpQ7qJmoUx8LkWRWrmkkpwoe1mYz6TjryS4joJrZWEurkL",
  "key12": "5H5c1zTdjKh3EGaAperFS6dhuopbzw4DhGQYueCZWrhCkLDvKKCur3vDWSnUa5tjnevB6w1ERQdPMKNGGmpifzw4",
  "key13": "52RGsdQYPJvG6YDsqW4Mmw2Z6ByRxtrr28h3ePNQH2XHhKXWnNWr4kJ5cPCVrCKpuE6wdFgyZ2EVMAJ3oCoTcNP3",
  "key14": "Hy1aAytYBoYWftwWcH4ChqgVcSLEPphBRpuPM4788Joj4tfHSXuA5usiTZEMAKGZfAoXx1JEJxe1EHwURoKRUxw",
  "key15": "5NoGejniHhYGrEwHuN5ryXfDhZM7Uv8NaH5JXYTvbC9qtCcqCNKUdsMNFLNrmCLv1HJDLohfbfkN1Wj4B4FcRWnJ",
  "key16": "dtcS3iaRGnKEWf6grDyzu25cqaNkLqjtNBqqxgFEHCgf7z6UVP4N3Mfyb7Lrm2kn7C9aYrKoneyj32kBqkc8cdX",
  "key17": "3sE7QGjDNt8EToNNsMbp31zr2gfFnhDk8swgaomVNEdtinGTdR9haSqVRQScj98Uj68yqxKT3wANHzhBEctLt5oK",
  "key18": "3DQeNt5c7GCjLjvhKFvfRcPQw8qZwa9aCzB8mxLtP6C6xxCvmm7YGL5zrm6zjfsRxeFVHUJSoHrQV4L3E9FgTKWm",
  "key19": "mHacPoirnSFrpQQmW65g8UumbvxaN69Fbf8NBDTRfyYDD1TkZDemF1SLjxaUdR2v1Rcxuuhi114WKFEcrFajbqX",
  "key20": "pc6HKHPdzJV5kMgoamXNF5R4eMvNCFjAqYkAtNNDkFRLLQafCCeMJQW2HmsmafrNp5s75rGjCcrkTrbR77w1y31",
  "key21": "4eQEg38WMM19co6EMcXgyAuePiEJUy2s6Wv9hNMfzSzgsuGR7s6aK5jTqNzBf872VniXf1KBTTqowMwuNT2VFCV8",
  "key22": "YgQBt8iEoCjPCvHaf3AL5BBC7YiDGLbtC1tZiGSHuZ1ZqrnhbqfVTerXv3uiG6464VRoLKoG9PFjAE8r16r2Chv",
  "key23": "5pNWzczFwCLrXmcndcfXoLXqUQWnxmYftAEKAhfjFq7zh68XccwU11M3Nu1PhxVvZyZ5dZkYM3J3TLUFYSJGSXJo",
  "key24": "4NUFW9brDxwtqn6MfUC6cf7VsAMaRQuZS9AAG1SdgwVDTUM9cLTThsdXadsNqhBerXjAc5QyXArahQaUtPxGurK",
  "key25": "4xYBjGk7qXtu9nzahAY2u8wqZdZYzpCo7HKPmGpWD4T4KmEhhGyUqQvPFFMfZ43sUwHfbfUdY82PpzqQ67oQbift",
  "key26": "2M3TwaUPtTSCD8GPRfDyt6zevZ8CjaytgPDbLSRGLqHj8CTCq55o9TVyFPynR7oSGY9m4KXuSwEML53R5zMJsiwb",
  "key27": "3sEqbKrP5dLYtu2cmC7rNTES75yGGzNScR6j5hfAh9tLAytBBorr59qPg3hwfxbSzi5byeNLJ28oKbidE2nQjxxe"
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
