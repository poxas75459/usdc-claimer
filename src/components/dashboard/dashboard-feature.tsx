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
    "3a3wgP5uUzegaMUvYUuDbAMhHAamc6MSaLaP2h4pTtVzsoZB9NmV17J4Cjh6S6ixFQjpwE3ohRrT1WJw3VUKk4zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2piJgYuBuLi9c8FSy5sKMizEgRu5Dn3yq4Di1qGhFDRoEeFDJRb4CDYnihdPRfytYVyFwYmafN43JYxj7SArKeoH",
  "key1": "MNmSjB5qXZG8tKMdRx1L38XSgS3xpBJwkm37jVSx9Wx9tFHRJSysn6dMmBnbehNxURkS13dKYwyEf4oG6pc4ZUi",
  "key2": "63saR8BTC5iXdvBcJMxhJVrYReU6z9Rq2ncaXhWhHU1suFcLPxCdxpmVSvTo5TJB63gDF92mfw9jg1QY2dZWqSzS",
  "key3": "3UbXZYPYTRUhLbGnZ8KdwKRaMtHQGMaeDZH3w6tbTiX5EewSsVDc6moPdUbEDAvKoVsWyXrPYfmToFPAMe1ibFAq",
  "key4": "3SFWxY7teGtveAcDgV9pwZF1sci3qCYNUmiNEivxiHx6CuCh8WjxdtZzrLmmyD4HmCcx98eb3Gev2oh13XRsPcgA",
  "key5": "2jJawQtPiAVs1ZG85e32gMCsvuVSmCmRh95CWi4BshYDNP9PNXytVAE4zpAJFhjC5nqkcmuJ2niwibekrDx7mtXH",
  "key6": "5XnBdjV7Guu2WZnS1UH8MfiWn7ow2oLWNvof1USuFNcHNDua8AoYpyvyyUqoi7c4nwPYFs8GoDHidphb2aB2fZY9",
  "key7": "3fVGhPntf6eLRRoTodErZzd8BUmwTGaRLUe4nSsv83jhFcgrgWBux7rqG9qTjFKr19uGa8rQH2EB5wdi8nxiJ6A",
  "key8": "3GDGuiv3Kac2Di8hmXGerDjBfa15ynhCvHGYY6Z2eEdafgRgtmJ3a8KYMbuJYQEbFzQkRCSq8nSo1sj8KZMZZvtn",
  "key9": "2XAU6DLpbWc9E29BD82K7XFg8mYtSx4sTNtwi2bHg5aSqZZJjqF7rLrLR74wf6cKvcR9jft2pmjiT3zCJSwfRYDa",
  "key10": "QE9oyNChy3gdQ1Zt6kkD8FuHNAHsNmEa25M8ArZJubpHqnUph5oU1vqNeePMGKwzMCz8quKKFPG3GVAyuAFEk2v",
  "key11": "33zcLXQE9ivSxgvtDafZabymBA3MWRuDQ57Aq3e88pLNn85SwkqVAq9YKDLetNcpjJcbuAz1XhWX6zysq1M4hRHf",
  "key12": "2Xu757JyYQhbs8g8w1u4c39j2DSfqpGiXDQZPCZJnQ15xc3aoCUfgcvMdonEZuyrSZU9P4nDae7ku1PvEjyhG3iQ",
  "key13": "5PZ2sepfYd9cRdfGZ3V9rNMLKPXG3Qn35nxKYF6bWfBK4JzfaXC6qxgbqKsPRHBGGohpJVzucFaG9epRtkJgdpsE",
  "key14": "4QwFjBKgN7TWenHJ6ge1Qpz9oUo3xKSmpX7sm7WCpSdbBTiEuxQvmdUhuDXoT9eu59mVoXWqgAqv8fYzMq5AcGxW",
  "key15": "3LwiiospcovtuTDHLDDMKnVzjrbyzgVwgLAmcnpa8CjWTQmbxSkn2ZefZoxqurMdLWoVUYk86wuE63KnYUh3VQVa",
  "key16": "8ivC6qmLtRfQ1Kt1Ur6ipRkynsLos5CMR5w6hKQutptsXv31nCfnk9w4dA7R5FcjkwkZsRfbuwnZYXpk6QzLM3T",
  "key17": "kDajtuTTkNpHdmLeZAkP84dTdAjM9Vh2CG3euJwVCK9RSyhkGvLjHQUCsuVeUy2MRoeSjLcjGhkYzUeDQy37xjf",
  "key18": "2vGh5KhhsPSTpiYjmk4UBDN43bLJQTM52QaARnpKrfhJxkHCfEtGT5rueBj161GMczqjXxoHk8RQN8S29V9WgE3v",
  "key19": "5qUooYFt1BCtjFbBZz7egGTkpJZBK1S8RuvTA6fCpPpjGtfUz9JBzTcgm9MbLtnUSMCRW8uUhAw9huV3Gju3yueH",
  "key20": "65XE1NNKafC7bJFaqhdkYjVgpTHFxDLJmZ2f5xf2CWr8NWSqsGyFPyY3RR89GjpSZ2RADqdyRmd3qMYogt6BcEhJ",
  "key21": "4fZEswLLzAkpMwDcrpneWF6ZmEmkMpwvNNDHh6JAJqoJ3Ys9wiFRA2AxMFJnT6Mi14qrJDFkopExBmqTm3CEFJ8X",
  "key22": "Ru9HftxoamaraXBNhgM1gvdzV2GA688LzdAwAQCoNNKuPfhTq8P28Gsjf1BZebFhTDnKeKDYLJqVJJ9xjkaHmkG",
  "key23": "5iyfhVeKpWWEbZBGA9FwETGpDfXk5YqaZMg33gER3GnofeycQJxT6YMP4pznwxCDjaX9wE1WqxnnoCQecNqp1B7H",
  "key24": "2WFmvoYjqjeNsGBbYtHspfhgwb8CnyNtGYYMDRmEC2jc9r7p2KDWgy6YS22SKmaxhPW67ENReXQZB7c3qoQLZEbf",
  "key25": "5gT2QSsVx7ibk1RhanfbPt8BppFdqrffWhvC1JWq6meYs9f8jB1AYXSsBWkUZDoMaD4zsGg1tNrMcE6xF6D5rBae",
  "key26": "sya3N7r8Wc2roJGG4dq1vNX77TY4Bh6URZwUWtEshRwTYPLLgYLqUMLFcY3wE7ZrRZBqYMsDuQqNuNAbfNYJGuk",
  "key27": "4iqkweYXDaQNEF3spgXgt1dzWUWphrz1inkQt2bCfMXuNhmi5EfqZHFbuA34tYtsRnwfNAxyWdhDQZBTc8BrYRK6",
  "key28": "5rFbRYA4bvc3wBqTw7guAdZzT5RngFzSXzYZaVYDuA3eWLSqNWQft3knWsfCmic5SBPv8rgp7aJLavWZifHEV5kr",
  "key29": "39negunaM1TcujyW3Euj97kfP6xSMtmryK5iMGR3rvygaPYURWE2sJnBj6N29bWRRqQmaki7DNzwASTNPvUCAxM1",
  "key30": "PVj7YFAULnLs6cPqLBPpSkbgK43MoaB2xJeDzSzYuZ1TTjzPTR6imxKhYaTSaUSW4SiYmkVRenJJvSWfmerGcke",
  "key31": "3XneHeBF6fTNVSP34pQYiR8QPTDAAyvjgHchSgAWJmsZsBDssQfn7bE1e1Te5v37ZB7HiWUUtG1PpnnHA2cT2NrZ",
  "key32": "3XJmoeDdLvmP9nQb8Fbw64JNhx54gvjKtjgjJSbDyTCoM3PsHU8ARwtL7UaSkPXZCy49mDxSKSE4oDHZit3Qvr63",
  "key33": "4LRQfUyxnuxFcyMtYje5HrqsWHfxC9EaT4VxQ39yF2sjTZmsDHZUqJXPdY2cmEpEFsELLcEMPBgKUuaZFSVaNj5h",
  "key34": "RA7ZDD9kqdThP89UssVQpUaKiRu94oAqBmJKsiCgtfw8M8N36V674XJCmKNerQcLp58sZBwkAf7qdRSKXzt1esL",
  "key35": "2G5AqEsyTP5iVEQs2ugwfRK9M9FXzB5i2QxGuiZSwKNjXYhqzBRW9nipXvZVLqB6NDM3xuCSH3rbLbEavnNM2jnG",
  "key36": "Q6LBxQNxyDFUhyb6t9BhityjUPuK1SYYxuB4WYZ88GNdybA9ETpHPNtHsHyt7ZtscXFrJyQUC5GGVms4wrXNpsP",
  "key37": "4ZfkUNhXtwCZ4ViBLHHoTaz7ULqxKSQa8EqRr711E9cEmAX5ih6sx8y4StQf6t9kJm9DuQPmSdS9yAXMtB2fyqQZ",
  "key38": "22ByDHHD1frNJiZkNuv2ANTPkXhA3N1jUcDmwJXZf5u2jm1LV7o4X7ebt6BE4PH6L15ESJZk9Xssp1u6JSuE1euo",
  "key39": "2oSzY7BWnFPHZm4rdY6jUEmbzFnH8HUXP3wwujrRnLyPir64fLh7BbvF1Eei4b1Zo9nnSrKHXzRSfvw7Wk6YZYX3",
  "key40": "3ZLo3B7kFg8n8fARB4f9SS7QgfvUnGznhVtukBpHTAJyRhNdXSETHcnFtA4M7mP88hTYUJcgHvfdqvm5jS4zp2r6",
  "key41": "42wdM2P8hcoWQF7k7HSD7Xm2NHT5bHvHpoj9ps8sTTtBKkbTiGzRHCMJankGNAnm5tNgEqMcRtHGKspXLW5hmEPa",
  "key42": "59PM23c7jfeHUMbCBUt2tKfdN26pgxBL4UMuQj795HJoJ5wevLLg9tsmj8h5ctiK4Q22JTtSQtwJxS2cwLgdYPX4",
  "key43": "3m6r8MtCB1JNNCVQPYec6TBbe4psLbEXTrFtsP9D1eoaNK4CpKUNAUSTfxJxXB6BciVVKBZTrVLDyWUo1wuhRdrw",
  "key44": "5nSGeTASVmVBCdBZaEgPAeQVwK9jfKEBhG82B2nDMhTUQ663gXxe8hrFYnwqPh5RahxmiwzaShSejvaMmJ4xdQif",
  "key45": "33YpgQyopjn8JLNdEQsJ5ngck4eVmMmMvRYmPGMGzLTPg9U8J2A8Aok3d4G1dA2XjKy21HRySSW1PBNFiayDQbjD",
  "key46": "41dmbzJM5YQPechBLEbTqyGPjXXkEFcgM6vNVJnSVkX792hetPnQB8msrsAQXt7PonQdXggXAjDEGkSoEziXLzmh"
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
