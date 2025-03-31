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
    "4gsMjk5sWRWABK2wAHHDsZixQPxbhehVDtiJsSrDRtd6fSszdXbzerDAA1kcs8bkks224mB1VfP8YHgdXLMwZzjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sz9XaZp99j7HjCyVheSQXTrSSw5C5QuBQrMU34KNEgLzxtyfte4fd1zbzN3YN4VhTSPUcmABms7L7ZU7TDhuRz8",
  "key1": "47AoXRAhRKooHGtVZXmSrZJgHrJVQE4h3VZBbXachhBPHLpH3PtGzdoEhZ48EPf2M5kTTBJxo1UYMw6oqD82G9St",
  "key2": "5sYQfcHg7nQpWzmyckMXcrjzK7Pra7QPJZtrheuHM9Ra5pGwf7Jf61hhhbpnQvU2Bz21CxVy7Wwn1L5goS1v6Xp2",
  "key3": "3YKzmWLvEqxnKn6cFPQtjXviFGwyrLz3AdMG9eXkz9DgNfb4EgsRWgebQLYKAyGXiHhq6tTEYJBg1rUgwJuakZiK",
  "key4": "i5YqA32nSXRZY9q5LrUcDgq6qGMToUEocex4iVHaQfudgn5JX9BPAo9x3shZtWh27vTXqq3c4yDftzDmxquu7AD",
  "key5": "zeFQcwmHP59Q9wZmBV8yrBW67BpemzRcw4oR7x8QzhJH3mpHjws6qHcUAt4yCyun1oVbDS5GQeGYJbDoVv3HScq",
  "key6": "5i3UnZg8TmT2FEL26zZaevmsRSPjPPPzARmsjK23SuXT9kmsWfzCiprsYKHeXfbjyDqZWxwC9ZA8cfnaUCfAmWX9",
  "key7": "2qAggFDhKHxwVZVbKnKfLSCVmRhLbGjjhvW2LLp9fnVcfc38agfgVq5jdvkzQSGmoL4YdCswZR2YnTP7FLpxb5uk",
  "key8": "tsRQr9hRJzPxnGWSSPNcUiSRBSnak7KLokkTgNwhxFtgFcue8YPtgzv3c9bPDjgz8zqez43CR21zQQQc8Fkfceh",
  "key9": "37fv6Vrx4cTiExQi4v7U5fJW5pvJqhkvfHMAFk1yF6RHdWmXHE4GKopKKAd6m9oFLvbZjvxgLqeSjeaQahUDkCi4",
  "key10": "44ikitgwTYoCccfGMf7VuB6RypTucCFGNfhGtYLSFyF9TgUJSy9Mi6tHXB38tQuKagEj3AwWa5x6ptgEaKKpdgPh",
  "key11": "2gF23qShMmb8C1hjKRvpaNMH7wmWpDoenGfLNStyvYZvBnZN8j5aLVyxVdRU7boUh1ERMY3HMaPW69Dd96eA4EZH",
  "key12": "63SfS1G42Uv5cnxzfWmNwX8jsymaeR9TtWBg4iax6mbLQM3uPVGi62CESBTfHqDXs6ozbHn2BPztwHdwT6ngNbwA",
  "key13": "53DL4CCE3mg8KeDvwq5QfA9mQYAV5r9pjfpddt85gCzKSdh6U34spkH1XwpZrhyzuy8CA3XmJJgq7FS8LwEGxCpD",
  "key14": "5xRY5w2Rht5rQ5QiGpa78zM788esKpXUvubSMzpvPcvSuC2uPNvBSFHycRY8r6qbRkVijBJpd8oX2bm6xftxgVsu",
  "key15": "MprVazTQezSftZJhmcvCFXhBMyj7SWFtH3Kt3rsof7Pgkp3PYdhRMDjuasa4WJRRvTjqiukbsn1G6dW6KDMxnku",
  "key16": "3sewvwqNbbxB4A2B5uD6xrLuFR2HLgLyexofcNxLX8kHdhCmqCMntbtvLVLJKZtfMP3U2Rixnxt7QkZaUjoXAUN1",
  "key17": "2PBrWTPcJB23RjdvKZ14cccFvpTRJECaAXRRknNSQbV6NYnj1M4q5JtmBdQWPZB3cu713du11ExJWoUcBh3RabZa",
  "key18": "3RMALurZvbNmGCw6SA4poK1LSKk54vMmCWGvm2pt4JkMayz3ovWZUth7VRwC6ZsY8vLRum1TKZwvYF3p6jmkM1jQ",
  "key19": "3wEvAwGDNKgky3DTB37kE1nKx6f6XNQSUG9bV5LfrPzSqSJNMgee9nQcTvPXFwWdWxyjBgE1pNXSEpksB9ExCmTW",
  "key20": "3Qx4JfYzuG5muKVEGUrjFHJwNHqtsst1LdPffGe7FXjJq1mGagaucsucj91T6QVCrLAp13qNL4KRiq2GnNQXmF7k",
  "key21": "35ifQyeDjtQFEYN6jxbAECyCSShZWATjegUJjoaCrcYNodrS8jycXodyrG6tP4SuH2JE636uFye88ySLVhphSC1t",
  "key22": "4HVHLPjFmM1Hw9pMRSoJ1CXEyc5iG3Ze2RRzvMLmTji9uf8qvrAzUz4cg4kAt1Sm32nq5aL5BBAeUk87hZpmPtwc",
  "key23": "S2Zrf2xJUqipu8bAczqvRThLiWdsQoMf1zVHjKs5nWiH2FMtgHEPBoyUMb5RK64i4zkwyvAzkUtXGyasvBp2g3b",
  "key24": "66PnCnqQZsCmUxioanQuNsJQczSF8AswCiKoWt6Sko79srsVgFU6mXt6JUJZPnMjvHsJ494ecKxK9ZfyiaFyNJjD",
  "key25": "RKTMVLmKduE2Z5ZaWyjJFrzJSJXCgA1UEd84AfqYqU29AXUnwathBtqFA9j2hA6UALDLJ5Bq7BXrEsDoibNpkx4",
  "key26": "41FVreXE7BFfWHnxHZ8rzG5fj9htHNRJy4TRCDFHmmLypFi8kZCJs6tBmua9GyKvHgA4gfUyHeJqtVrVGH5vN3we",
  "key27": "27VDrS83nLhSoExUBva8yRZZs9zx1cdGkJczmDhNa3kGhLcdFPCy5GN3r6eko4MNtUn9Magup8qsCv61Z4uw9si9",
  "key28": "259c5F4Xdqw8FKepZ5v6uEgwja6av9vdxxouxT9W8ryDrNCdYKHvetFXxs8sBgAoEbbU5DbQZHb25oCWPGQKRngX",
  "key29": "4Byrj59BQiZRwztBNhd6Dumda8ahUKwu1Y9s9m4vtsgfuErtSV7jtLR2AwMU7xnJKxxUaCEtebr7AnVXJd5uaSpe",
  "key30": "5wxjoZQupvMvuL5jKBNesgmrs4QErwysEPXS1rjKDynepsk4ormMEw5YX5obWGrBdfFsAPz1qiFa6xmZ2gZWkf1R",
  "key31": "4cPq5HveJFyxRYV2gmUAMQ7T2rfXdqCMVuYm78PPFAE2fsY1jieyDb1YQEj2Rd96jSoFnsMGoxgVmfmJwASLcXeS",
  "key32": "5oV2aQ4mqVcGbEBiQyxwAWJLk7yqCyLkuMVaGm9pvLZ1cmULy1ReLABaEqFLeWoxeVVPd6USb5KWXSiCCiGx5cZH",
  "key33": "5pPZADBhH93LaZd1FRVE1jKMCy4vus9WEryApA3UpiR6NYhex3MGUoqYGxCt2Pwi9bfj6D8svAV4Kg232f5VhY2v",
  "key34": "36dB25P3bXM76rgkLWs21NQ6KaRsiTisSHAHjbDnceqZ4YDHkL9vvwZoM5JpVnLwiex5LKnvZhNeCEkySv5CDnL",
  "key35": "4PoDZE9yxKNN4fKPh56M8Sm8CB4jSKbMUrcyQyjpFMzfWDHoH51UWY4JnRYXbzWPoSPwNsQqYMNivUmGTwHTbnjz",
  "key36": "5tXQVZyGtGFCS3mhbBumuNv89Af5nKVgnQuJrg7YsGMwF9PF99wkNp3fZTL8jn3XAnVkzBEzn4nkqRvFRJzxdUo2",
  "key37": "4ZaNmeHgRb1uierD7fwDy9w8qbZ3NpBWNnzUbtFcwLCG4iHtMscka7b4rnDidVsJGy1omrtXcWvjdKyqt1XktGmm",
  "key38": "2ivKDjei79LBqevtV9w4wFbTkXXSiTtTEiP9ZJquGQC3FYBagjWTMX8q1XzzhPS6Xi3LQWRXhnvfJRZUmBhebxAR"
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
