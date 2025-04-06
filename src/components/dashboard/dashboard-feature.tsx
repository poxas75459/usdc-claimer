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
    "5aH3GFUbU8hHkjEVVATPJ5GAwFTcghP9yEAWjqB8zirrUnFhGfqoBz5dpcS8aqFY88TLE7HKBz6mbDGTdy8CioYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r2Xrn6DCX5xnV9E3QGqFDsk2Akpkt1WFsFcqaT35EaymmicehNJKofktj1YVewBWuHWYYFZn2e4wrUzCpjZdSRT",
  "key1": "53Vyko9pCLQvw3sKdfYxN2zqFntn4iV8y9cmz2PVwoXq7WosvZPFsb8RcSGtA6A5KxVWesiqSRmbQYaFCjwVvAqP",
  "key2": "4Tb9ETUNyCchVkySWXt4Qs9scjTtvJc7viJBpBHQucyxqtoEbGazvtFjw9JfCNeTHzYVBrqJFWDApypmzNPTs9Ux",
  "key3": "3CPTMUwCRvF3ChTYfzfDLi43RMxtuM3oBzL3bjqqa3CTs9atTWpYss3ucBoHPpgkK1cMhMAJ29quuiPoVbA1RMki",
  "key4": "59onSsYYXgcANZT8LW67j9aLXSUgguzska7Lf2YabLRuwjwykWtoXHEJK2o6ixVExxM4nHTHh7VLy8qjjYENDUFV",
  "key5": "3akVNXAoEn7nkk3M64qgzfuXaiv1eAwwtX9pCy8k6Qzt2s4SLRwueJdWWZkEzBEnfB8P9LzJJpjkzautDKyyvSL5",
  "key6": "3YM1xvN1MnqFot1FPqpkvrZs1rYSeaE92M5UEqHVvbYquDxwbpXe4qcRxchqo9FBYDdvMaY2aD2D8T2Pk7YXQe2U",
  "key7": "4GMdYHU4UqepFRj58iyXhhzitKGpakkCz3FGSjobVdbuyGNFNNwvY36SRqwyPo13Rg1P9W4ZGKXETT6uhgk1MEjN",
  "key8": "3VUdzRo9Zo87Q9j4E4munmuSs1LHzeFKKwqPHWxrBa7PPYLHud8Vx22n3kvwNhanYceiQCqypr8rrhToMQt1BawJ",
  "key9": "5HEvUs3wNZkvXNTUsvvPEnaccBf4sdtw3edADTXW33CHeMxMYo2pnR6GKzG45cKkUKMn3mKUMeaAFRiL9R1TPM24",
  "key10": "QpY5D7hBV2sqj6LJH49rWMGRF4JcUSVkX1a1ZRrVVwyxxgvKAFE2rSkwYuVC72sPnt4Txq5TFxmHp4aBg6t4BWb",
  "key11": "4xcVSMA6yoSfWEEYnoJAXohUurT5uAXBoUDFg39jazZ32WmEqLMURLnG5DG4d8c4CjXHSboN3de1iNvPHKXkG5Bs",
  "key12": "b7fsmKN9T4CqGx9PxLBKD1kPhnVDYGdMVfeCQGoG9G14rFZrMpevGuSVPEXnfCq2sA7w8JAMu5FDz58qR3HFiux",
  "key13": "2pE3P4GWjaYFZZoJCjA9FrkjNwwnDdVxM3BZYcDJzg51xFC6ZfnAHmkPt2awto7Y6rne2FfHcHuRMKZXEe7AdQTV",
  "key14": "Mg2G5Y2ZgKKW4oSVc8UcEvtFdNkxoUvzPQUS1dF42naRED5DRsYXhxRyHFjpKypa2FKsukNQSe8go9vuF9SrXHV",
  "key15": "4svtEA1AtwzfxQJWS7c2bSP1j5vf6Gr3XBrqRo1t5ZTM3joh9bE5SnV6hisjUzWEqpyXqXNNpuLFBczZPGYfFyA7",
  "key16": "2hHAb6bVyiPR91nE4Dj4pNFVtHmb8SFQC9gqwYjvE8Gko6qN6j6HTbUK1nhW5YkXTk9yNq7Wp6BPSM2r98fJGXdw",
  "key17": "5yTXuVVAeAVn1nt9AxSQ3nqAyzD8FPtL8Wbm7CNwcENG9uffBH49EJpLLzD5n7TpRewjDCtBMT9hJ4Q4ymKa6maL",
  "key18": "xNmBtasT5AUU1Atifv7BpEj3tzNvswMzFzNjX8Qt8wqMZNbEra2MrB1SR7Eq6j4Fe8UyeBNJa5zYzLS9CxuMYyh",
  "key19": "5baRjxFjrr5mwPu3gVezpqWsRSNjzLB35wTzvG97czcLPSmoZpKLppq4V6PZCbxzqxVERLubCbE812Gs4bsPhwB2",
  "key20": "3ztj6oTPKiRAAjq2D12fEg4JH3fy85i8Q6BkW3LVrv7M9W9msPBz6EzetzZvdGDXwsUXYiJVqefw6S89dKntVBUN",
  "key21": "5qypgcrVKPJVUCt5NaWrpufCt54aGxFfdGN1th1J9SDdWjchBtJTGECFeLLWDFMiphSKgFEPEEphAEgbNw31oN4q",
  "key22": "xfKLiKbacu6UPVo5amZqE2Q6AxPdMcZmWC43e3zpsigXeHQJtLnbnCpYvCLrMHyP7YooAcDhoxF4hnr9FqZQVY3",
  "key23": "3jgQJ4NWRfnyvCSE3QSvmaHVEvVFM1wtntFpH97EZbB2ASkiGFWcCHtfg1aCMRDLrpz52XFDVa6GPajgXpkW7581",
  "key24": "2UC1WcK7QsdYF9DHyqumWB76MAzARRf3UrW4tM3h1yXtgsXPgk2V1CJoY82aK8uxKpzDaxx8BNv9bopi2ADk43bn",
  "key25": "4Pw4C7n5cgSTMi11QA2efafS3cYDPbD7fziCErdR2eJ9zuh4iBfhLH5R2ZFgHFJpkD9b9QTdJw6CR71Z5vAPRunP",
  "key26": "4ozhpdhDrmysygQgSWcARRbYiPVFktGstv1gELvZ51n3tMyVD9gjAfKh5EJpXM5RY5LQCqRTE6FYmNapPtkvbiW4",
  "key27": "2tefLvrYqa6A9hzwv2szoW8y9msC45gsvSkYBupjLRNHq1GJrMB2EuNgLQQskn86MSTLneDxztVeQY6cE42nGVUE",
  "key28": "JtR2tVYS6RWgLVQMm3YVTM5i1g6Xvh3AdQFaMMoFNyhND9gHAitwinz1MaLNtFuY2XvVwyDrVZLXijKaWhyKjhX",
  "key29": "4UTrZV92mTnuaUEg39nP4FcqgcVMZmKV6pBMbLEUAHpYEBYFB52teyY8DHZx2K65Xd2GE66kmvgCvx7KvonBNsgU",
  "key30": "2iBs8K3tbV4mQsdh5LLTSZYVgUPKWLwqcw1uJyxYT6AnD9wouXYWFFk1z88d3DmLaGBcuikNjxdZyTGtnrKRcY2B",
  "key31": "482LiyGmEyKeThR8oK7BocHwgvkmGUhrUCKGNnP7hmfQeQA69G17Jdda7MHqSqKKFGZJx6JZZ2Jcp8QcpjHp5RxH",
  "key32": "5hpChoPZWs6qJx59KJxCyZ4Z6oMGYrewsBLaxxufGR93MWqbHgDRtegRTki3M9oSm2quS5dFiyVSqYF4CKj3xQB9",
  "key33": "4nSXcG1b88jnG5VvmHrA4YjAA9d4F2DkFrvMVZySp3brDbTzswmA8n541mUvbwfYVU1GkM9GUqsqMDhqgWYnhv4F",
  "key34": "3Q2CSxJpBdjLuVU5gk57Nczk9LB7NAFSwbzBQjXyjSoEczBfQxaqR5FDGzaYD61sb1q64QspcRMyj3fxKRugJBY9",
  "key35": "5oxhtRNibm1NowodDc8SUo5sxG9mvRVzEqemqqtae1MMDMW5D9T7uPsk55jQby7aBf2DTSyHvRfzZJG6HedVeQH6",
  "key36": "3LVWRjt5NqMd1yk67qXSS18x8ow5yWJN3R5u8KXvtCqQD2QvVjQ2hYRkL2CyWzmWBTGEeW5Xw355CCrxQYSfQc7p",
  "key37": "5TV7sAJ52xq3Z7rrg8FzekqXKMK7N7pN4n8uBGjR3crQHFU1JAqYuio17wz9Lc9d2SG8rS2mfNTJvovGp2kHgbfD",
  "key38": "2ZgpsSKJybTxAYkof3CZxski62CTHzHenjKnvBcZcPuq4jjo9wH4F8yyYgz5gXBn2Ru1KHiM6wmVASPjteKfY4pD",
  "key39": "4SbRFfWYfxTh9FgyBtDt2HPBKmzKhuaA63awSTFMeceGxt7JPVL2JpCnaq6LDbwUufjxmE3X3HJaR3K8wUE6m5zM",
  "key40": "66FfUbbgyHfYF8QhWwFzJVemWhHHnv2UWGqhR8wiE3cznvm2hRXnunmhUkVMzmAXPWhhWiDMu1AK3fq4QDn3y9dC",
  "key41": "5M7PAF86TB1TdwNYoMBJFsdr4cSGANbjBkVESbqdEnHXWct9NzXwSgcgN6M9Q1gFUex2fxNtukYZDzkHyNcVhCmu",
  "key42": "4L9wCK5JiAvb8tfAsCbJK7Uo6gev9AU1JkR5RgBoU3DCdSTkwVK2jVs2Bbt5nMFvS5fNhQhhtPERYJd98N5NzGgx",
  "key43": "3CtzgsMhSNp9z4BGc5rfYjpJYxLDNLaAqV3YvFsEXnbidGfrfBhXiamxmUmNK2EtHJn3WDLyG1tm7Ne75BFxnHay",
  "key44": "55PdFyqLL8wDyaPuzdqR4aZT3kpwa8AjK5WdEAsN5oDDL2Tn6VXeyeLS2kTEs8916xM4aVQWnwxPwWYKrC4qxcF7",
  "key45": "8b8aRkHZzbpL4ptQgNLfDY9mroX3KXZTeHorXXTBL47kSMgUhR2F4kUCdfRqJTZC3wUfw1hTedSCUiJubagEJFK"
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
