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
    "4mggRj2Lip7VAhQeePCGjStUgyUwmD9uUXanmGZR3BW7kWGECWfVtDvBukAyKYhAk6DH3x8wYSb1t6ZvArNcVWCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h5PueyWgRQTvpkuzVFqMK2LPYPfKu5DVXv7a6eZg7bDxzahyuDXnWGVynzxaDWovRgWVDUSSJvNCjESwZwThJUn",
  "key1": "3wkc9yZQxZi9hUDptNpCndMi6iVsimQvejHUY6ZSfqqEonQ4tH92m6ZbNE9iX2kU72CRstPR7zZ9ceGjoYNqaThm",
  "key2": "3f6BEsqVdMyWrtCFZTYmRX5KW6vRXmsxneUNw3Y3FUvZmENFHE21CTnuyMQ8e8DrWF5ZgqZ6c7boPH33fafeUx8k",
  "key3": "59PtcLwAN5gew36esH63HVYiXzhn66hUKgZE3GEbTCoN28XvP74ta2qaB9PjMDpRgoP9S1fb5fh9tDhLP5KyGX5A",
  "key4": "pSZeAy9rxpYSPNKfTMtJCdw2oHcPiRSijEXm5P3cyWuW94eByCmUyadGFjv8Nx9YZtMYVSoJ6QbN5XoNKxVqBGx",
  "key5": "2Nmj1osQT9ZRXcuu29ohQRC1PEbzYMPAvJPM5Dw9X5ba5FHMbn73AiM4RjF8uQ1uzkH2yiG2JZYwBhBTr8TFRiMv",
  "key6": "3Z5GAuaaQzK62qs1mikU6uhNyU96av9kp5m53WoGK7yrsnHLimDQFy1knnBBDnW4NHWqAXLgmJf1Qicc16Eyxq57",
  "key7": "2yGrGDLHzWofMpWrtsXh8doMjkLpc5A3ebg2rbhfSC9WFWeizBKyj6VcM9CNTUNijEMgV7j8UxDmjqJU4qqigZH9",
  "key8": "5XHaP4LsAjnBsU9gQg437cEURSkVibbYudMT6yoXKkyscoY1GwcQjFLU2VbR4cTDDJ6qXFQYx6m69dgHcJvw5CQA",
  "key9": "4FYikkAa1kwhpCc5ydVzRxYPH4rvNGZcHsJEKAYXq4RfaDqfTKc5GDW9hKjhEpjGbypbcajor9rtspvXX7hhdg7t",
  "key10": "4uSzQeCYaVKrhVXzhC2xFVgjhASzqc2U8dVfLSVmGimBdmsnPzCq7CSHn9pf44N6XsoUs18Grf9VJ43V7d2AEGhD",
  "key11": "5AoxWA6vJkAhSQHBRdLkAbjPh1gBn7sWGiEbyTmtuQy4wSzYTYCy4tAC7QVTTJrb2rMw6QE6WM3TbDXQCTDHKCqR",
  "key12": "5LGefyR9Mhz9xE5FH5XgtvZ4ncn1YivRS5hBCaeMox834AVtneyQ7bz5BAnBxFDiCdySCk3t7AK8yA4xKzqXiHKp",
  "key13": "3ACV6h7jrZdi6FubkGb4sbTGey2G8za2sBkrKf5yKWDWeeJJzvWd4M29KfznfhtrcjmUDDrANrccqEcqg2a8CdqA",
  "key14": "2Md7sf4htsS8ThBkHfAqVpDifD957BPtLtYti1qwfwCggAFYeBo2vtt431VxGpPLvnpnLQJT3m1NW6UeNzEj1GV9",
  "key15": "1PkB3rKVdSaExsuQU4xLjBaLawBJyCdxWV7vKibPd5ZSZKcnsbDWWbdEWS9Mjws5KCe6d9kTRgMNDNuUGgv2FsY",
  "key16": "3aj94ntFDwNBZP35dm6iNeDyB3xptqENaiofgXqCDkVpjuWscw5SM9ojirn1VzytQCRmcw7oc4y9VBhNqDznw3oM",
  "key17": "6dxvTwxJMPgYYzD1roYHUGHHrBuM9Bmt7hoiNUYxsogbrgwAPFNuNaKEkfE28Vzff5VuLEduzW61CtPsp3t3ivm",
  "key18": "rPvggiwxhWfA2K3jsSpMicdZTpWJtqfuZLvfaRRze6bo8ekRHpxyaKocgBdgqufgmarwi1TAkeMwqhrY8jXyJS9",
  "key19": "5xYFRy5rEQeLSfVxb3yHZTmWpLWWJmKAV5xin9fik96cUnLzvpy5qDshTN4hUnGRxEgzyh2JsKpJr7FLx7xUymks",
  "key20": "33SKdCH9k2Bm98Q2NdEmjptJwzDtjFm2NbPXvDQddxuuDXE9RCtta2J5ttKSrrSSsJPKL2Jyk45YTfvpwrzMS7wt",
  "key21": "3aoGydoekEq6sdGKTHXYYCNJ4kcDrFWf23huWKD1Y6MpUZdoxGJ6uw1NzriE5nCAgtrhRo7dAGmsp7Fs9iVnWRWx",
  "key22": "4iL9BF7MxfGKLZc2fobq9MgHFWHJRdaDq5Jrqvpkqgy75cjqBCZXVPPY2ErrnncStSWYw9cbXAVVydHta73pPGEX",
  "key23": "2Rb6QrfBxNbdWF8Eenf3dBGy6Txs54NzJoNinPRJzfYLwMMQQootKtgZ3jrPvg2VE13QGyzvBwCBjBH7rz4Z8Ntn",
  "key24": "4PB7GGm37KPvfQJw1GHkU4sDSFWSJQXKj7D7MRSJRJ1QorwhSrjqm6hXRNgnmS6irsUNPjTSRYTwWDDyb61qSbSa",
  "key25": "5iYyD2ikiKaXibq8EgZrHBQ4vuGquV9M2HVE3MYBDCEBRb8n2W4YP47ykzieMxBnQ96W1EK9UFCCJDfk96UGTsXT",
  "key26": "5kw7hQAkjRjfwZxSUL4bqAzynwRgtTSPEbupQQKh8CWjLBCaiXpHuwnVLmcFzbcLLPB1Zfsm4oggrdpTDdx5E7qL",
  "key27": "2YZKYH7EnXqWsXS3o1hVEUuVrcxmq6qRCHr8EXg7qW4SYoR3MMvLmawUCAhSbtdG7hJnfYJZQWnVP7KgqBYTULDB",
  "key28": "rhZjkeG9Sq3nfRozAwwZjQFeTkHKe8EgvftaV6dxh6NJUES7hMs1qxS6KiM4tYScZ7XwVxAChenb7xKzJEbnPSn",
  "key29": "4unL7T2TXYUkHu86wik6ARrEzMYxiq9nZRwbcdA8HZ7cZ2R8RUuNXTqSw4XLfBGsoXva1U8EWm6wDNp8uwooznxL",
  "key30": "51fkt6L5uf8WN81eB9v1AyHfuXfxBGy2P7jp5tyeVDq2hiZePFWxYRGPqNCcnSjEWuXMUyU31SxBCvmpuW9tVwQ1",
  "key31": "57V3H554T524DAmHuRvB3qkmNofjRD9nmCUSVcky9ou8VPQNGB7YSCRgSq5urXDPzp6WfLa4igHEz63bHPVuUmqw",
  "key32": "gQL56f7DYGrtCoASigKmHZt89zTXjJos6fa8Yst5ztAGoxwHQWHinLwfbDg7epCLM8XhmrZzQTcwNrzC6Nr3L65",
  "key33": "5gfouxaY1h4DHqWKRFwNKQg3B7RjnjdHTzRRFH83h857QgHHpRtef1dFDtwKe5AwJdrswD2YN35QsLtzznYoQmd",
  "key34": "51wpugkvuGq3Hv8cvdsdEh6hTXFgL63DQ2aSLLxmvqxZYF6ib7JHUdfmSywtmBU4eLqDgMsmTYAuiXTwF7vREFEr",
  "key35": "2ogd8ES4VXxQmCvYdeY7EpKFyguwA8579n57arNc6hLsR7r1FZ8EZ96sWzEGPPs7BANUzpFgdUypT2vFEDUXCSqa",
  "key36": "397236tT7o5FX93oLvLs2uQS2FekxphCyDt8Sga5Y4iUV2wRtjE7y7MhhGAGmtjqoZen9JBthcJozMc6iKQ7UFUc",
  "key37": "3SbPxkrpyKHFt39HjC3HaL5ZNB1h9vFuvT85PhfAd9BwwjuGZE5RbiAgXwMUtAA69WnUE4GRDJkWGh31NXDEGMik",
  "key38": "4qTa2xaysriPueMHG9naVK3Lwiw3KW2PPdFnbS1BUDaknDmnyemmdrWbCujW65GGQsXF65bJumaFk9fJeQvTB9oX",
  "key39": "5f4NzbaFY4DfoaW56WtkAH7QSuUJtyzXj6ENDyBGUUA9hS2dRAE5MW6yziwvpB5AwKNbtbvMuCs718G36Pn6Re3t"
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
