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
    "27ZxATM5BpaQUDHs6xzGEiF1ccrWk4YmXgMexC96NBgUTQyNzbK61c2dvU6Ctg9DZgLBojMJnPgFQknZCJ2j8f6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xSPZJ3zTEvF2HzbfmEyFxzrWbLYd89kPZcvecTi6EaKgdMrzhwYNqpb4r4VMefVaAeNkpEXRiqD9j26Bz3nA9bK",
  "key1": "5rzvmohcpod5CWVUz8bqtTuRW22WCBGm27Fy5u2q5a1nCoHNNGY8wYCnVQLChYGv2KoVekMUxuowkQKRvf2RK2P2",
  "key2": "3gsNG7ZXcVtp2kMftg58uHeKw2tq4ssKA7eUmGoj4QCrYGZSqriqMmsJFuitWP2hYVchYyLxa1JYNuHtQJ96WgCS",
  "key3": "2FZaYohTSmEZMvS3MaQMAVVLGRHo49noBZkTDD2c2RCataa65o33ScsCYf77wuM9kctVvTd1qdE4fxmBXsMx83Td",
  "key4": "57yPpuvB9CVwegbgRcr8b5LZEgvUmkWMeq3H3myuCh4idJPFqYkbZDDHpwT6WPfDJHztnC4ND8GWD8dqGGd8D7Gj",
  "key5": "YSEux5C8dM1XRK8AjdDnVkYp3tQaTGUSQ5kizLzukS2vVemjjw9cFYVSdepCNoLYon2CTEgBD6Regkqh2MLuZt8",
  "key6": "uwp2M9eZohwxBaxjP6XURBv6B6MFNdhjsNcgTWRgEpgFjNrH3kTJJ8Zc4gftxAKM1uV75vtxi9h73gvCoNAHdg5",
  "key7": "45Upc5bewG7uyiMrZwJ4mB8GREuDNeuC5J7LnMqwLxthkM4TVuRFksY9uXaj18EdKqBbHVAFdgu63tjmCAJigvk2",
  "key8": "5LrRY3zPtDBBGec9bFuRGDxbPkYu3TuEVNeaJ6ecukMReMVLmSxxXdFooS5hp9bWaCJo1k5KSDb5iSEUcCkdjWbB",
  "key9": "2rEjF6z1m5QDQY6ok6BVENvwJoAvzt4p3qeZn51gETvdHRdjVAq4jbuZBguPZnzA6pSe9tPyk3YcevKJpvaskhSV",
  "key10": "39jCJnduzgkpEM3yiGfG2ECk8gceZohNyPRiNHhA9Ap31Snvemafdo7KTWZd9PkuDEDxhNBtnQiFY18Z2ACuHY2D",
  "key11": "4GBfjWo4gyoYJAzyBTk5fHcZNGXAVqZAdzHELpQewibpNZrPUQkijH5MQ5CXwExs8x4Eq4obEGcHEpHns7smUgve",
  "key12": "2J6YTf1EFwPaufiHME8kQjZFbNtQwypXAgW71JwTud5bxM91VkdUXpD1scBbuc9eqFsrFhnKgsDdVRubGi5e7fgN",
  "key13": "3w9m8aJEvPNLbXUarr5tzABBXoExbBhjUARpQ9ZnQtooZJQPaQv19oQFutk3VH5mZBCingToiFKdb4kJZvBtk8Fe",
  "key14": "4PWUhAyeRxQa6HkyaJP3vKxojM6epsUDz64rEqF3y7DK6JNjNjv8EkxQamFnnHkLg2S8sZo6GVRmJ1X8YuSnhF7e",
  "key15": "5UNFVYr3V65q1Ps6EYkeKgcDpmZD8hyUJvinRoiuBnKrSz24cHoK7wdfQLwQQDe8V1Vgap8x76c7xNKHbGB68iYk",
  "key16": "5adBC7zx7fEnhC4ViQ6CksT9678D4VL6EcfmmuFnx3Diuxz6BVEy6Z2psZEomyX7mCeq2M9gC8BmHM5wKB8k8aKp",
  "key17": "226gAPXU6h6oFKmWe2mxG2GZ4pq5qgop58auaZ6jNNZcwtF6WtLWvwQ4jJdhS2Ka1fXCyTscvmEVgbT5aw9YTs2a",
  "key18": "5Zff7KWndWWNvfWDCofUwP58PREUBHp4SkW3g6ND6wuojdRp5CkCFf5ymMaSTitWWmHwf6AiSJCS6HwfkGWCzBKR",
  "key19": "2YBVPXY2cjQ8tt7AR7uC61E4PVFEfpYrLj4i2kJ6chSx6rt3yeNzn43jTXqhzbKLK9RNhXRv1oLsuQSH6GkLfrj6",
  "key20": "2HhmT6bapcA2vDbnjJXR4jK8CX8xp9ZcD79KSiunPcXAymvBx1cEBzqt9skgP6KiQWHN64Ap9mGHEmH3ahDhWprw",
  "key21": "3XzoHBrLbyQxyJGnL8Q4atTeb2PMmcd7W9zFCyg3Cq4mb1zvzZG3w9ZiKNS4vB7VpoQrfv9TpY1ShXxXnvaxzMkf",
  "key22": "4PCtCzCHCDkP1rJQmVSWFVgDfVdRiL3Ky9T2wHtE55yxQrUsAWz9ikCvgeCQb9MyYmQrxLtNpxCgpf27MtBKzN6r",
  "key23": "KSuyR6wpzwhumqfszSUPyG839j9kpFtsF4A2K6pvqa1dut4TAkK2BGzbbWRrpMbsqNnRnFZZejjh5XyZ2X1Nbsi",
  "key24": "3hs6RZSKH3ops1gdTHcEn7VrsRGyQtBZozTKBBe1oBaFpPLAb8SoePUdga8HgY2sEHKEWsgL488nEgXTTtk1X1ZA",
  "key25": "4KGVaRSUjAJDwapFQt9vS4CetNHsr4iht8nLikYDRSo984fM8PDH5j8ifw9orEC5ZJoCdsDvEaPTxEE6MwynwkTN",
  "key26": "27vjBTThPFwdpaiRuNpxSwyfwr5FP3NkG92NziWiZNrb2fH2oYWSVfEJJuk4szwdFCyPr15F56PhEkwaXWPz7vHJ",
  "key27": "JXc7efoRfE5UouvwZ8AXJ7ryEoppnNCzz5xseBAvrZU18HGuQzkXCuu1pTuvo9jLLyH2XmexrGPHrcGx9sGBMj7",
  "key28": "3NqstdEAEv953jJjRxfCQ6MB3wvRno7v7BYPkjMy6MefMb8sLr9mhbJfvkkodjQKKC71p6F6GKtYAox2qNTZUKuR",
  "key29": "4yKAcCPYZo6kS2e1waUi3x3QmLgf5HxmmDuYpnpqLvFU4zF5KaieWk2MPxqQjyW1B5xrh856ozyBxEzgG4ovPGD",
  "key30": "3DW7K4HWHvdNomyLwg1p2oySp8BHLqycZxnmUp1jiv4Yo8WsJzrC9qK5aaMWF2MRm5hsv5GkVwi9aEBPgnb1vguC",
  "key31": "3y3PGAYSybTVD5F7EYpvu421ujgVfAH38sHJVrQBr2VRkCPyNXPhyzi9h27v59Y2EzPTDzTHLnpdmMsrRB4EQrdP",
  "key32": "31aM4wB6Pagrq8ibhxoqTgWtEyuugAp9mS95x6oizeNH6YjUPHNgAcXUTsFrxk3CZeu2YvNUkVoAqTUScuusjitL",
  "key33": "Q9pia54Sc3rtf7tppMGrgrpK4U5RykpSYCJdVeVRBebdGSobAMNa8hG5vbsFt8sxiBreobM2cDRee6RpB9bLP2V",
  "key34": "3q3V2hRXo9PnzrceVdxt1mcLuRkCniUyUDjh2hCC5QzkJDiFFKZfYrHzQprS8wcFerxECzjX3miafHiuJKkZA1Kb",
  "key35": "27DuemwAV8rUXeuyg9WqZfYLMVNfWmPJZt9fQASUGer7qd4gBNPhh92UJmQ56sAV7kqhjAedEafHeK9FLpvfMszg",
  "key36": "333Ss5JHh6K9rbV8QHyDwAT5Tm5rgrcQhtNxqc5WzjRDXzsezDaJ43WgpHqcV3VntToi4GyyYLNUR7sEoZt6zxu5",
  "key37": "4rZ994tiCU2SP8CctpN7YiSEGtf7rwazfsFuRoj4CHK7xWfAZnnLf3qUtaE2x5otGiDTXgJLBCNdKsv8aY2e87sc",
  "key38": "3HJ2XvL6egGZWv8odZLZh6YpKAmzHC86sqb5eZGhaTKZ5gFGeX8FYL6aWJryFT4CQTuy83abzPdebMVxzAD1gM6b",
  "key39": "2DAzCoCmEqbZaR6SW7atniuYBb5puJLxGiAR1gYBDP4YvR4W2WKZXbSnhdiRM9nR9PCm8rChNUpFRSD4GzSi6emz",
  "key40": "2JYCcCFV9qbWCYiGdmVt6GFQo4zBEaBJzMip4MkPWc1mzBxVYqQtB1a9x1h1EsreEpqpziTaamhiVgDSN9PYGdcY",
  "key41": "4LVpzGaPXXqfAqa3pcb8N3xhnfyEjuaJSw7ADptinTG6J8Hbw54LMb52jgmTzaDBMdQFcTzuJZzTzcvirREpXAPz",
  "key42": "4MQXqZZRDsKhEvzhauPy6JeCbZZxz6Fr322QkcsFLvRG1vEiL2mdu9kqwGkm8YgvqNtHqUy3jvGxvL2DTrQFcK6i"
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
