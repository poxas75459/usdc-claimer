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
    "2HXNUrTSnd7NRkAy6LfBtjwNyXzYTh9e1QVAKuriN6MMECGVXed67bXxG81VKt1qcgRxu7VV5cr6qicVizoAmeM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KqHGpgW3whSxEAKEZcjFWBuaWhj31QmQhhgzBMHjpVRN7xDhBCga1vnHnVphcPodCjC7R7g2b1uPvsuPx3Jm7f1",
  "key1": "5GRSAGFHU2TRWV51kdZSuxeMQJE2ZTU38AbGK63eYBoB7mYA5ini4oAW3Zsb5qkbhSHRnigfqm8tmTALwcNh32vK",
  "key2": "66JY8Sz5FaLtA2Z75MudV2feGjimTsfAzZJ61hyU1pdYFzqPmUq2gubcQ2pg2vkqq9iH5AuJh91B4DYhjTHErjM3",
  "key3": "21eufdvfisgTUywziQwgBbHHZQYMzqYzX5N17hyGHJochov4m1G9BkR4g4kDkDvAcofwYyLuL4id4SRAzzn2sZwy",
  "key4": "2sbNZTWdWFMYmHHiJV6w6GoL96irqF2Urx9HaKLLaDWXEZjAWXwvMTxg8KB7mawveN7vbdwTgDwo3x675uw3sbfh",
  "key5": "3AkUkdT9yipxQ5s4hCYsUjsUWUvwU3wP3wHBWm6wyWfam7gK5u2oHcWPuu9hM7Mi6tYitNiqk868BHkPTcGMxYTo",
  "key6": "2L2ftMKfR4rpDrrYHokVe3wLskx2tfcy2dFQpfbXL3oNy8diocvWtwfVGg1hLTACUp3vNaByhC2LwJoKjbhRTH3y",
  "key7": "5yeSq8cf35qSTUuDaUhjzSCWDh2i78nbe6GbjBRKdLeAu2dyTC5dnY1LPrweh6oGHbnJ8ih1ZHHZdAJdTPk9DJox",
  "key8": "3gqtNZecpX9e9ifm8tqpVoofm881viBjT4KzHugUfmi3NCkz7uz4emX1MEE9LTiGBDZNFv9QZkSrXYCrN25WxwNH",
  "key9": "21m5ZKGCdsr2H1jDNMoYsUS1mbUwJUB3G2VzjFG7K9X1FXqQkxtzLUVudvpDw1E4xPeEsCEzG82eDT4r7pAgSVQY",
  "key10": "3SLH3HuFLLER7R1FVaym6qoS89njmqNDT2MBKpmBiXVK1d3U43vPtZ5azZ9YoYXijKmdU8dLrKGQHpFxAPGDe7XD",
  "key11": "2U2NuttwbiNuCkKNnQkxavuBmajugydXBxwNsaTwoBU1SrVnpG93NZF5hCcjYW3KSkqs55DkJTF8BxghK77KkJyq",
  "key12": "2kbphUKik2uUfJyWqceKj48PkS6P3eNgx4XAtpRUTnjWB5L8aDmzB6Dxgm6xm4U857bJh1sxTQwunwcVtrGaeCAY",
  "key13": "5H3ztawR4YELM2wmEkmwfzcsCzs9VRzJKJpAFWVwBjFNj3LgwD99uRhHxQUnseL6A55SQqAQvp3idpgCzDQAqzip",
  "key14": "mayL5eBDZJbkbwEYqqiz4vjnswCeUfSDGRLrThqnJgPQX2EE5Ww33KF81R9CpfPFTWiLG5XXE7CyXfp4MbSXWK4",
  "key15": "2xWCH1umse9ce5j3EANSzpfEaif9k9rB4sX9iSZxHvMPHoGdkkm7vAqcx5LrrFFFdCBjRRVwiEed11t6zFbaoVnc",
  "key16": "3BM13d4xiM4K7hA1tJZdeLn4PW2gHdGPjNFMcwdsqhpr6ECNMXTsxNr12jWg3fAgo1ih9Ng7BpAsQQZqnnQkEUFV",
  "key17": "HaoL5rfoWm3MtWhSxzh7uhVbXFc41rRvueYhEE2hzJFvicaVNTyYqgZparRu2W7wgaFcpzpMntTRMtfP71ZZjaw",
  "key18": "2hWsaFzKqMz5KxVZhGcK6T29vygMDs5ucTHgzGW3uxFhpqrvj2gr51E76wK85sR9SsA4zWb2LBgLMTasAmtbZMCZ",
  "key19": "5aGr9BJMbZyvT82BUi4xbdwik8UrheoVGFiUmfirRHRHJKmRFo7oFLzVpdoeCfUCvK55xAKoLPjELMMDXXHCHwnK",
  "key20": "5uwafhbXvAWyXmmwdnx5WxTZhhWgHhzPXG8CD77JDsiFsGeGNzXG8V5GjC97HknEjTVgwXRovdw9wNqqn4ozdw1d",
  "key21": "4z4ztcwiQrHU5NUxsFg7R5tVycLEeDTiZSeP6NBCt3Xj7z457DVr4oQYSVnLn7XGwsNvPFSGuJHBmAfBByDWXAYp",
  "key22": "sC6pdsVCnEAFb9SHUC5n2WnWWzYb6Md8k6biAGF9rqdcUS2rnSTiWZd84r1nnF4E2AjM1LdcYsNt9L5kkGbfWrm",
  "key23": "4BHXq8jd5RUuK9cL3g9zkPwD6CYRbKLQQ3fnzQaxjT25bYvyLNhVBL7CRNtMQ3KhPY86QfmXCgoEWhEWyfTivyF9",
  "key24": "kCdAzqyjyjArXZm2K86Mu3dAanzZnV3F8xW2PuxDJhkm3tpBRdvGUKcn3P945p79fJyZAoCXn3Mu1SrMo319xhw",
  "key25": "haVCgymqb35AAKKAUvspEHYZGYNd5Z5mdZAH2HBdtuA75KHTz646aCPVnrQQhDABjBW33myfmcefSUukMZJ2zkE",
  "key26": "5jSFWtgtGTFhvu4hY2QYcgTHnrKfMuxsoSfxpzU9eQtA9ChW9sMZ5FL5CfrXEVg52xe5ZZfP5NJAsN7mDUNKfaoW",
  "key27": "2smXTg19yYRWmuA1Sw2abgjJVwqKH6B6cqWwYvYsuk6yw8Gb7YV5Tm5erUk2BXptJJhVLYtimYMkkMcuhrT7y9FL",
  "key28": "5yJb563uVV2dYDRe3vCgXQrbTBeHdsVfNtEYAosr4R9RFggsCtZn3Xxt8T1Ln4nrtZwavTCKnWfHdHpLE8dnQnob",
  "key29": "32tzxDNWLRJQG5Lk4CTXPUgrXshTYmYasaN883tKCo7YmdMnaQyy5QC45kswb3r6Qh7pwxF7NpvGrd2wPiAxZFer",
  "key30": "5DTGvLZXAZoLTZ9GTjLd4Qz8KL6gu1JnBn3PjmWXqFArXRm9dzQXwd5KEDE4Z9Y7WDj9WYyH9YpSZS3ozWVTMhzs",
  "key31": "4cf6GrKcPYj475Bi5dtwNjRAXVvuNcGKMhLyrcPb5Rir63BURL8B5X6v5FdiBnuzRp1YjvYt13EpDVZZyRUnPZC1",
  "key32": "2YfScqrhKvBKHS6GGsSBf99cyZFrDfb8YFtRZTkdfZ9CzadA5DSU46yyoLWpiCfJxTVtPxZHpJ46k7x4JY96cAE6",
  "key33": "3eCj9ADSb2FdXQYFU11XF4thJykrmNFoNsy4qtGFGn8gpdwV2TPHoV9rPsx9b4fnZHvM4Nih2UT6eWbradjb5aD4",
  "key34": "kAz8s5vXBpJchCiJW1U9PrgCqB1X6bYLZqGzTCxLv3Yybgt1idtgaEnr83uew53WmhmCzM6MTiw1bStEbMrWLbE",
  "key35": "63GmmdHnj8votF4HrsJpiprfgs8u8b9LQSjauP2UUUM9PGjr3HGVHwW7DMuTQQnEG6mNrDETPPxUbSLytL3V5Kcw",
  "key36": "5XpQDdFHUkDTuQutHnzYGDcvtB5SZ2HiAF9Hwst6oi1zngMkB4G2oGkWNRw2eT9F1TT16tTYMBugXLCrE3RioPeR",
  "key37": "4af7bYJVdtvQkxqgwAo2EaLFCQd8npFgUecLp75588ozbkzcyeUP3wBk97cLfcxVt7CGyNbVgQPeCz3ZEXFXRq3z",
  "key38": "3UpDgAghPtygyPYxDp1vD8mvvpjR6scpba6yB5nWKLHMbUtcihuHGVpvAWhvpRZvkq36wqiUaHkkwcSbA8mXLW67",
  "key39": "37X4TLAMziro7Lm1zfTrPwbupETka64TNtM4bwGeFafnMw5XLfPS3MD51TUAHrsj4VXn8emU22o5yJGRzYvixrUX",
  "key40": "49PvWTopVrxFX2uuCmELnnfxfmxcLPewXCJ1ZK7VrFYQaUx5kA9oKkpQxwWDs54p6wrEGc43DYMghqdysn9hmftj"
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
