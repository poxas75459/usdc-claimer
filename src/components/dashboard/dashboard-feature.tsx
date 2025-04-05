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
    "5B5jLGV16RWLGduqRm3YaTsxeE3qKtwW9NnF1zybf1MjPkirrcfbBJFVeWs22MvNDJXCkxsffgLyfxDpJ1aguUF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22c28uJNDxJi8BMTwQKxvQ9wZEJTajTJkKpvQimbJ6gm545vnWEYnkJTGna29trXrTnesXAmymgKpKNSArwqv71t",
  "key1": "ffUNRJq9GNzjAJgAGkCJ8UmDRz6Lw4iRbfRtt1RUaR7yPPwXxC9JuwSPZbmU3YJmi82m7iMhjNAW6p1RLwRrGfS",
  "key2": "2pLy1rr9RuzjJtftFikF35hALtzgF4YLtDQFi2wL8URWzMJZxnppbKcLeT3KnKAPV8JtqVzb5SRPamahjcWV125y",
  "key3": "5bkZrK523qavJovuRf2R7WrMs4LPJdVN9zWvqbHdrwFeqZwzLaeD5AcqXuvL2xe6H8ztHj1USMNG7LUTf8MhgJA9",
  "key4": "RsujhzhhvSpmwygfbCSU9Py16JR7okngTh17nXpkCBq1Ps5k5ZBEByovrNQtKKkbqpJW75D6sdAPUZHGVR3mG8h",
  "key5": "4N99uBcoqVeK6oSNBQ6TN98BSqHMJo7C4q41ECQ2eW3p8fxqFsqFKASfc9Cp72D3dmrWYgz8CrRqfBpK86LT3c9k",
  "key6": "6QuU4kAEQJD2AHbVW7jRcW43epTkyAwvrdtAERymD6vUojL3aG8GkH1wiDbbXm1Fqg9nHgVEyqsdkLbC7fgN1XB",
  "key7": "QAJ2sLqDhRarfzvpnLSx4nkM5rfpE6Xx4p9caTGv5TxS2tAFpTVXnnm6WrbDyexj3cj6RSUobEoEworvRLYa2Dg",
  "key8": "55RaPsekdMXsFEAh6s3nrcLA88J2h5CfiNvvk1xy4kwyVwvvy4HYv6nWBkNn7xsNx4TkQahni8tAWVNo7Esup4L5",
  "key9": "4c4nR1NUdA9UbUKnbVZwbrLGRanMQSVwFxneDTsFpR4kKpaC2daBs1DoZcJPmr4QSCGpFFUZQ6dfsZgUvvYHwEAZ",
  "key10": "4cn9snsD7vLBhsXCRwQ9gw12ZfwxRh7Tvn1mVEKNQ99J9hGpGXXCUvBBAzGgAEPNhnpRQ8AwhvspeDdaGT26TumL",
  "key11": "2so6c68FxsvbcLyJ2k5w8NRpWstzWpS7v1597wFCMH5kfZArZC7JcoGiUbVzrJqKwMG92ErafftjhVRzj8sJDei8",
  "key12": "25s9qSnJbbzMVcAzoiWCY8Ynm3w12cSpvzQPAQBaYBzfXgC5EwamjRr2V9q7qHAQiMXhvMjkg2cffSf6BjCArMpA",
  "key13": "5EwSq2SA9dob5sR7DsQxzVX796nP5NFfWRSsxL83BY1M4uCDSNsfutHEC3gpgN8wcSnh2metVFhhgEYzjX3uhpR6",
  "key14": "2JQoC9YD48C1FTm6HZMKj43LtcwESFMhCk9uoph8Qn8qep9J3AqCJYNEmtM1TSyyDUfsK8K6nDufYoHmD8g8EDnH",
  "key15": "3B2J82VoPvkqDYiaMTTWxfK5JBr6hrY1RT2ESqXdThVW6FJizYTnvVQ9mAfJSpUfcyQcxioxxGT7YgYxwUVEqr1t",
  "key16": "oPm6URN3fgJo9c2uaW4472LpcbZW3VFms4aMoDwnmhWUcjPg19fHbMDJEdovby3EwCydvgaxznYpYmK8416sfJP",
  "key17": "3or7WdjSeFnWMoQ1nR157Em1Pwn56cXwDLumiTdZy2toaEmAicBGqZiyoSCNRVGQCWGfep6CXaNAwJ8EpXkwDTV4",
  "key18": "5tbbMhReehToFFm4QdhGCmjZWmPQnSYSJaR1JHKzhKCEQioJQz7ronaB1CnB91X8pEMrykrMRWYmJ1eSEKd2udq5",
  "key19": "KVYyhgeU4q1mzhcXWWnT4egxZyo5L9fJ6LBtiorcEsQLgskXQ2pSeiBpEePggJPDc9KLEMwzQbUmRAbawfyv9NN",
  "key20": "4uG1EoKwLx82Uk6SBa9czFusvoLDatUK6HEwx2HKRN55JmGMC4qc2tqjm21K6A8xF1muKE36KSz4xyHfAZGfjWDr",
  "key21": "4wuYBdB2fbdFmohX9LCzUmWYumdf4QCEyHaJA5WCBpz1sVFkXRtt58rTa8gd1JyRpNkSQdnU35GeHCwqiSNWZgZk",
  "key22": "nf4jErDvMsJ7BQaLk6UG73JfDMe3zfUHnfgGC6dtyT2QgmuNDei9x36c9VE7rHdhHTytPiMSJQcQcRoCQ6gf84p",
  "key23": "3jy3AGApeodjGPE8hXb2ZTNspdUQqNF9UGrmrzbVePaW9WWbmXjWLPZjkHcBpVnopjjuSzNtX9yxx5moCd1gNZQe",
  "key24": "3L6apstY9BXLTtJayDRykf2wD2adGnEbPZUWz2e7WQbm9bmwrPHyf3jDqjx3RydV1Ei5aNvjvSemgLPB2HVSKNbP",
  "key25": "3fgcBQPwTUz9ZjzyHDe8YdcccEtLe9EmN1dGF4M8m6d8k1zXEEn38z6eFY8mxMSXV7mxFuzoEZ4fGXkBgKbkAGLZ",
  "key26": "4P9w1ZZvsqokEuCAeNpzgsxtJuXkNbdo2uxbwjN3fx6BpKJJpPuxDbFLh7v5QHwxuDutdpSeaDXMLNi8KSC16LGq",
  "key27": "4cUQPoR7xrmmYNZnSoQE8s4yHVGFYANosHFUYQcyZbXKy8tNXjvm885KPkr3FsDqfn4jrAYUvQbY3pDhYe2QLheH",
  "key28": "23cs6G8kFHe5upKZ63yZkCoC5CnjX6uFFG2cpK3NXbj7AU6WTptiQQmzb9xNwE3Uwjvr99ZaqrjZ5XDM8M3t89dg",
  "key29": "4pfy8Zp4GFCzonY6B4c7C9cFwJStiir23kvtQxVthU19QaAnwvhg9wJ7uvzHpkk5VDvPuujMwgrN31jtAE2HG7DH",
  "key30": "uwPyiRtAytSfeJXDDTDWtz6PcFW6cWyfgk5SAr4F7aqvq5VA1NMNKEhQ8PBnHLbRW6yTYNTVGDy2s44Bf1gi4e1",
  "key31": "4C8tVFwaQqfyLx6R6j9gBcVuRTtDomNM7tjr81W3vQLJ9qm54VWqYJvrdDxdR6REmSpn96XKNEjTRhiaDEkk8beW",
  "key32": "2Bbzir3tRMoEmddi8V59B99c6ZXHYHSAmG9fWhXTFt1uVLm5TXFdMvUvNi3JRsHLzNZrmDPwzPJGNKXUZ5iMk8qT",
  "key33": "62CSDDcMFThh8XZ7eC8n2nY93KHPMxzYQ7f9pmauMRtYTrgqkbpW7axTFKmzaxyYpsB1f7bQ4K23LwTuEHuQNgz9",
  "key34": "25NZsxCYCQgt3pfcSrAwHNvHebDUtp7Uvfor2YFLQobyKRMHQMp48fPpfLJvHLcFBpNTbAQqhPyvbpe4gi7UuKN8",
  "key35": "2PBfP31dNXPp36QSYbsrzYNk9v2nYtUd9a9irb9GMbjpGYPQvETsQwrqUT5dJhKwXjjygYk1X4UWG4xSb9nHpvTd",
  "key36": "2YB5UmFCMBzRF3unAXV2HWRCR1P9RhEYvwFFez6gk32jUEz1MUNCWkjgs99QmwFTehc3AMHxrQDVLgKg9DjW8B5H",
  "key37": "3tCp7rErKEwFZbTAgVAfubCZSsBMNQ14JHqLkHZrq1onhGCUtNxyJ3MTqyjRH9N7kfyfuwVtn6W4eWJMyBvLfsWG",
  "key38": "rv7DYz73yQpTTdh8ZNbcNCNV4rV2bqjy67mxsoo7Mepk1yRdp9GuMZnXNjZtyozULmMr95dwiphACcCVoNtfY5x",
  "key39": "2CmP1mwZTSfpEDMxhWJoS2p9bNmgHinK32mpQsiwhjn8LVmeSnHqAjQxsKMQCX89hhxtx9hPwwDuAbjJGcbYxY7o",
  "key40": "5DHgGXc2VryH2yRa3HfdmCC9on2matirBD5jqWcQvcrA4F9Vf6wi8Q8eiPkT6tNAz1Qw5cge15Zu9zRghnMWyXgL",
  "key41": "5eTGqWwCdhKVxsCwXucRkkFBDzDTWJgL6FgTRvBpzhRnhou2x98uYTy4QkoHvK2d7U616Ws44tSzEgT3xZQ51QMp",
  "key42": "255F1JAF1j9Dzq1LR4fnEPbanhBLYTFLHJoDScL4vmznUecYJhAoSitAdSWgGQV2TGSd3pjAyJKGSvbdvCbunLfn",
  "key43": "4oVPS9PiXdQ5Nn5QFKg1rtFApFWkZt9Zw32EzsRhoTSzhtvAYopcmr2ceFHLKhZpG3L4xCrH6WXvi2hjGgNvJPx5",
  "key44": "4D92d5m9r1bWVdBih1AYv5fGscGiasrGRt2UqR3ZdTTv3GcWpfSeDnABK7rniSPu35UrXMdMNjQQxAvcncgtHbR9"
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
