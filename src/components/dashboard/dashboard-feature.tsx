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
    "4nNrJKsvxu4uAPju2TjuiAHfCLkTQ3afuvvjKQzYVRVoMqdFYjWuY8pDVDbacxkP1yt4hQrdSpW86xnu7zbbos1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ST2L6UvahXvP5np3CTib53XyNwz6Uay9x2X7p77p7UV9i76PkVjkBZtUDMbPKEXnvBisg684yaHuhdtC4YcVZLW",
  "key1": "5WD3D98hAFar6GikhoVc9CfH3djgMpwZPPd12WmEnAn96zkT9HBPbAmKZK5oSFAyDjoZf1KzmipDFFP65ytj1piF",
  "key2": "4pkANQwHZCpNCbXQ2nqwLGBCycw7n6QoFGQpKpRzsY8BsuTxbMmBMUTwqsab2piw5Rc8FSHNCtzouNLvbTQGZAGw",
  "key3": "5ea58pjLjAHr7Qq21V5E9yvh5FtReP32oiL9YsnA6FdhpKskJGAPKDXoajHwUSoJPPpW2mQX2gRjwuj8Do5TMaJ2",
  "key4": "3PAhcaG8BGrscyaH8o3ohJNqcfXFj1T2b6LL6CNjgRqtMqxcsWiqsbQhzriHeJxqx9UuTrVX4Wiig9Mt6bgqsbpU",
  "key5": "5dmoKH9voKogLErUun9puitJC3xRtsmoWYwaPDc2Afvh9Z8GU1uqFSgQeVfcfbypGYXN7AVnmhtTQq2u4tXXMut1",
  "key6": "4jzxDUPv5ijMWjXLQr6Az5UY63jPqi3DdkPdKEPf4FtkyTYmpYT9QNewioKZEg8EpUWm87bJGBrWZCtxhCcUhpLK",
  "key7": "4LYZGiKeYUUiDAzKB9zZe1QH2CRAgEDG1BNL8mqQHofjPoX9iiMcE2BzYFz1F9VCEQMKkBQSumnwEuJ6niJaPrMS",
  "key8": "4ieEXsosFx31GusA34zYJannRkCDwGu5bNLMPESQ5uCLjAyaNwWznMb877JtHWSTPbb3LUatmmxDqnWs4TMqCj6Q",
  "key9": "4iXXvCpPAtddySkNbKKxmMZcBmDnWqbejz6X6q8xzzaYX8UxMDHcSSCmnKW1Vir6AnCC7PDa77bcU2Jd5RM9Xpex",
  "key10": "4mHou8s3FpZiRGmaT55mdCawR331UfKBWc9pZdzj9nnDREYsiG2AjdZhJS7CG3uKCAsi2UA3Cn6AX2M1YsMtNLaC",
  "key11": "R26LYmmm8VDEoaVj1v3XbYfKqiGF344JLUBCpXkiPGop2sJRRC9HcRPnRmwPCVzb1sAdbVDEXM5mcW51fBtqpSy",
  "key12": "4wfgaVe1u7NLWejs6trwGpcQUdJUKQXSo9JgEsy84thUJTnB44XkAeAy6YTGgB79vmPvVwNie3ksTPWBwSPXGuWy",
  "key13": "4XYXxPZx6Y34T5QAyTYti3wnqogQmdFa5PWTgksbHNa7UPmcEjeGWLqNext5MwzdwTyc7ERL3BvkBXkTG2FcVQeh",
  "key14": "4Ebr7JCMurQvyvCnT3fqYc4QJ2tD2riWodYvhenMVA9hHFcSxV5dKGYsXCKt4EYzBTttU9uPRPRNB1MkhtEgBA3H",
  "key15": "47NxVaP3n9rTK7mNEPG2Bq4qD3zLEDiL7pg1tVjQRHxyZGGD3THwhCDiwfwrWKEBjMFJo6XLKshu6bXFSm8k3G7K",
  "key16": "51wkntHzbuEf4oka2gw6pkC1pLLWPUJnakkrar16pHH8YD4x7Nh9KzAxVoWy2Pi82YzBjMYd8dPK5KNzNRLoswHa",
  "key17": "61vL5tEjHNVqaqZbYi26EQcsyBYJaaysQ8oTCjx8nUbcwnCnfteDgm3FRTspo8JuJuMBaJsNEZmiYXsii4cTMoTt",
  "key18": "4vrPvma4JGZvMttqrz8etQFo7CVofLQRbxpnGYiJ2S2txYxAdBEoMTdK3KSi9JUScgVNwF2mAS8PyTTUH88fTBy1",
  "key19": "HnYsCnoWUeG2ymcr1sJduZYu5Bo7CdwHrcn6qsWG71BCrNHXtnKRaLp7Uobqd3Paj76joSYgQeAsoH4vbFof6zS",
  "key20": "4dBEatXXmRBD6SM2Uw3Bh3EPdsHnErGyXTubjri4byxUBZ8139MQhJHNfWKHrZbnCwRs99QrG9e9qdhrJDE3E6Un",
  "key21": "48ktRss3xPJJTV6oNT6ZsYJEHd7SKDLKXHtLEkZuPuoCiSvJ7ZwLG2B1WoiSRJfxFDiLPiDQ4zGgBKX1itZsHcLE",
  "key22": "3Pr512z14Trq2YSycqfzeQUEfefdCe2B6hxc961hLnQnnut6YPtbTb1YWNCxbCKJCYcWK9YnEh9EtfuquxDod7bF",
  "key23": "QSWCUnG1QGCXHBR4ufYo6sR2kwtTi5gvUa2Wbtt7U1JwqtgZDfF9Va76T9qxBtgErDn5HchwaifwhssxTCibtPV",
  "key24": "2kfLCp5giaPKCtwz53D11cjtEHf6cR2WCkNBYdYYeVr5WmnniAgnxW3ErLPhbDxyxyPcQuXKXWXJpo2edPghXjFe",
  "key25": "37mPSTDRNaBseKjPMat2SQTmhoqB2qV5jtBzraKQ7hyJvaMSuzicSL6UX3GMi8z9MZwE6eSqXS74L7svwNTBG5CQ",
  "key26": "4rBBGV3Yddtxpb7jh5euoD5EVDiTiqVjz21eSk9JJFH9s4DYJy5Qzj63dX1ZN2N9FFK2JhPptNbVTZWKsBdfMAA1",
  "key27": "22yXCRPBKvA9EJn4XUzriBSAM4iHrYfaJWrrgbCKazYASP9KzaHwXsHyAML9659ibWPWMkeZCxfxAUv66e8imGGX",
  "key28": "4pZtomzyTA5croVVwanAWyg8iKh6n2wUN5neCVm8aLiViK5vyts6HeVGWnH2QZseuqy4pELi4mQthXtAbe476nUP",
  "key29": "2NWuqWmCRL8f3Hh9LFPCxFhWt37VQweZster2vstzooepQFCgyQAoRNx381tqGHGgyx6nnecU3jhxQbyafsN8UNp",
  "key30": "39E9rhUG6u4BfbGq49VuFMhkVsGMktXHjoauQ4FUCu6CdxMATbympdZtXjNzjky3th73rEBpTmpyixnX3hREixst",
  "key31": "4nMz9NrFKkqbBrXJ5wpko5x6ysvAYvLc2MNDXjxYsPNM4Z84Uv2efqhKvAvjqAuyR9UWXkRmXmoiHUBCRhmemFbn",
  "key32": "2i8wTLqkgsL1JudtWsdkXfTiASLEM4LvEwEh5kGG1Ec9Zwp2knEUTyELT2aDQWGpwNSbEQNsmRUt5HXcNDaLuph3",
  "key33": "2ERzMsZwiYFQFMnA3AnjxeYYhDRAakBLwPqB5wuzJntGsFzqhowatgrF8tSq6anNECSwuq2vg4iJSmUjajJXK3Xv",
  "key34": "3sEi549TemhAuQtHKtmrZTdAiqH7YRwEjn6mnuq2hUKV5NgW6eGyAHSkXvpBygmoc6JqQBiNZHEpdtQyCr3PaDv6",
  "key35": "7zHv71dr9K5wSpddzKgD6rFv4iSxrYkAaQrq89GXdv9uVgDHUfufcp1N4SRG7LtiX2CjvJUqMJExkVPMKDRhRG6",
  "key36": "4BqjVYRE1kjZuXmgWETufiXT5AaMV4HLViJkAEFdHRoFr1JtTd7jdngMZYVCTZBegPe8j2D6fdEcbcN4hYWsvJ8P",
  "key37": "5Z8iA3oc6vP8QLNCE3yGosqqD513BZXShEYzy78JmgZ611BFDPQsQ2iFZXSeXNWiJwBKjhqJtdR5XoeU8ADFPjzV",
  "key38": "2Cc3NugApLA24WvyU2fEQK2ZbzrZ7Gkwy9YC2jXyJ8ATW4AseM4sqvt537fEch5DL9joSrwAhdpSgcisfvpXGXMu",
  "key39": "B6KyFrLB3wfAMSzUXNEjm36Cbz7rBbfJ7oSE9Fpod9iZbj4VSeYYJiraVg7vmDrxTHMDTf82nNwruxiUpjpL9e2"
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
