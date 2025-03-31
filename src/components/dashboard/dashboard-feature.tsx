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
    "KEkge95uDLnkL9jSNCpNYxidNnVETwJbETc1s4y6dbcBJUtLRwTdzYPjZHPoCnMwzngUK4HgCD4xzkHiCEZpRgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rX1KnfbxQDeRcHKAUMrjSSTGL7Hs2LdDV9ftUG6QFGg4BnnFocrTUrmXcNwEZwkQU3o1QZg5wYtqEEQH9t26tv4",
  "key1": "5dkvajDPo1rUse8Juz1jcPQQLS6P7AuortEnASm4WBq4LdbXvmF45e46zuc46TGtuftcKtes3JCfnBHGAGQceYpb",
  "key2": "HvrhfBaZPJFGaiNycdfBR7M6RnKnDGuCqmJD8WLSsQtjZACiJAPmgcsqFYjoGsEMhYi7dgomUBDdP43Ukycy5pJ",
  "key3": "4m274BZg1nebhL6S8gK9PsSxcX8RxGqYDeSyqhE4GPP3yAPRZq4TgPNktKJRy7wBbALPPWtr1VSACfwfZMfvtQjR",
  "key4": "4zac8ZJ6Lip8BE87nfDoriQ7iPzJgQVtotjt3bJd1Y9LMASW33YiD3TbR6wVbhexWKz9ySuVXrTzqpJA8iVzUefL",
  "key5": "5AiJfyEkJZCTQqqXRaKz49irzYaFEoR3UAc1BjFVXysMeSYQjD7Co55vvrSnksk49AC851Ua3hE6q54vifqbyrFy",
  "key6": "5UboZ9UkW5n27pQqfkHxN6hkRyZkAdcSvogaCRKUzmhpH2bmsdQxADaUNycGq4GkuqHK5Xe5Hxh3gVLxBY5TjZ5T",
  "key7": "5wb5jwuSPFdAnSsRQcvfoXPawzWSo3bBETyY22bVCHKaruVuJSjMWzJr8UU6BaVzHhPwB9HbwBfbRPJNHiFfpCo7",
  "key8": "4zVnWF6NxpkqQ9qqN9Z9bWimZU1zpZEWqwfeXu5oq77eqEv82Yo6nNnxP3Y7XwtV7tVnmecBoEmWTkacU3nsnVFx",
  "key9": "4hYhpag4t8mL75aJWd8eaebPAgKD9nYNdX1YNG2ePkMNhS2mXcW82au8awTiErUj81xkSUKRqfVCbFtWVQ8BNXRm",
  "key10": "52qmZz1gqZyju4E1g7nTp5iGmqM1uTrJbk52NS2RxNMByaHDDEnH3YZsgbis22x7RSzeNiGkCrEpfdFp1VRYsASR",
  "key11": "33f3SZGeWU9DYqxLa4Vo4ssDfALNWd7y3sMXXqi7nBSC2UDZEsvqAan6V2fQrpFT7NCHwGFPodComWK4YU4aLPRC",
  "key12": "3mPvG3f18xUn6LJAEAkLmJ18MNnXzimv2QTGXMAivY2magCHqgr26fDuf68P9cH9JJzpQRoG5ucxJNnVQLUutDvH",
  "key13": "4yrRdQ88y1fEU1Dibs9RHESwZWGcBNnT7oayFMeHqTNQjui36wYTVs9VLycmJJK7xfsUVMMzRxzdX7VGZuV6nq3v",
  "key14": "2JQCmWnoqdDvRHv2meoEAmyD3D8YeX1AXa5yk8iz1Fj4nHpHpmP1arkQ51WE9vuTE21CSD2SuYH8WzFjffDCakmh",
  "key15": "dnLgZC6zcmHE6TK9f4HB8EzxN4aDBzLvJ5JpooVX7V95mHQmESpyNdwqSuM6ftyAUeWNFL3aUAcYGXtrNhoVPN6",
  "key16": "LKPsVckY5N5kAcp8qacJDJAyJ8dvvYuMdcJzGwNE3gCzUiMsM18Es3E2vQXA34UZtHwmVgvatSmySDifP3y4igc",
  "key17": "5jRo2CeGRwbFKgFbxy9duZrYdj7oLJx3R3xa2vADJMZALHooc9Xwn36nw1p4WxTenA5bSM4g9QN6z3g6zRpQmGUZ",
  "key18": "4wgqpPtwvCWNbnpq92NCSWkjnNUHB7ANSWYZibm2AzCqdx9R14sGY7oWYq2cRZxqpVi2pBGT6Uy3Bp447LgRoLEK",
  "key19": "uuaAPCxzHbwXKLLkkj7sQZsVW9kYPhtvq1YVAqP7rc8hWaGQ9pEwQJDUjvBgexxMjVH24yAakLiPGXKtaSHKBh3",
  "key20": "4Mx9FxiHDor7ZcLpC1yiGdufrzR7o5xhib73UqFXHpHe6efPKT6xbJDqTrkjxkybTACEMiai9A2e2Xy9VsGmLrYz",
  "key21": "3qmxK3jiTXYA5BUE5Cs1u3RrbwBPgii2f5CxmVecmp7LbhSW7ZaQLd9cb939nzzUvqvkiQVenC3gcCBgPef8Ciq",
  "key22": "56pcMJGAYrUMMJydYSdnNMqhQKK5a5g2NnEdj5xKVH6FeezYe12DBSVG7YAwR8FvTZEpbxGc5rndJmNwyRs2o6C7",
  "key23": "gecAEEgbY2wK3PqenccdeotVVBMmGBWQuzFtsfusNdXwjyeXqm8qPAVgJERv2pN5sfUAJm99n8LvdE3xaKbZTYv",
  "key24": "22dKvkhyq54uG7oEAaTLZnR6zNSTpTqfmkA7hNVpt6hL5pBoMJHWZRrAeBSxsmJAQPnTzNqaYz9fzHHNoabTLyBR",
  "key25": "43xTNhUHcG1yPTx4XWYDRoSh9Zn5rYfem1AHFfZm6w7qgNZbxUYe3CKdTposFL154NptkM1qcdLwbMyrp88VTVJB",
  "key26": "2ewhp8G9Q4MiCbgPgA8AF8iNVW9D8r3hG53D2VLNUBnHSZ4cSA4SfQtZcNp3dC7zps5K3TkMCrmPL8d5Xk8DNpJV",
  "key27": "27EjUjtTpM2Mzt6oTNJzm4cpHRuk944LqBMgcfbiZyVDSmzmsFU6hAAUfjarM114vAJiACuX8Q2YJ1m6ppVQjpVG",
  "key28": "4sxJjQwdEcivxzAhHmPrMwwbULykFiW1p6DKjs3dCX33wwq9hrh8PcpWoefDJb21R7Z9RyjRRkWk1pkXgzabYwNs",
  "key29": "CExsJyxJGeE2GS1B7V8cqLEGN1iWf4d2eG8FEYbrvGvD7BKxgeqbR6Guc4HjA1PV27H22aKSm83N51FX3cGDFLu",
  "key30": "3Rs5nAmFDGaqh99XGtnWC9Nq2DuEhZsqRRcsSobtEZfG4HitpUrxr43x9XjqN5AHTEPhkWSaE68bHBUH6j1w3knz",
  "key31": "5VqheeMszdXPo3UiZtRa5kxdF4AdeAmLhAcgmX2a5UkQWpBXaPnLUHETz5vo4nTxVk6BrwA9KnTpM21ZNDT2CfLS",
  "key32": "3M6BLpKijDstbUf6H5wdmz6TTaF2CGoAW1Va85KAG5NxDvJczX1b1Wb6EdqGKFs338P1TUEpSmt1hZA9HY6FsLw8",
  "key33": "gvkEsRBGqDxACj8z6nn5jqLoJJjRL3JvFptiZpBqLjdEkkZ2Vi2SmqaojZB3Kfd69oo6kAFBPLTRYkRTznT73u9",
  "key34": "2qUXZo3xeP9SCBBP6fHkWNPvopYXA9cBzcT6QbSpR1efmvef7g3k9bhMDjSyFYZVgNG8UG6vvW51L9HSJqd8Zpej",
  "key35": "5jzJh1U21v527kHJjVaofsDHXA1DbT8Qt2a4G6ChkV8K2oztdKGkgjTEG5tFd1xxvdfxWwHpchuhNphaMpV8nvSh",
  "key36": "53sz54AL59kmTriSXHyhecfNaXxvHqWAHusKvoqDXZphEVXd9ToL8zXrmcLb8nd2jK65cFWhPigReAQS75KVfpkW",
  "key37": "41KPuT6YCXcR4rQsyZKpLYKM9GK6j779JfuUUNEUt8Vys6RVvvvZBuFDkeBvpTngr8S51Jxpr4EbmsUSC6HRnaXF",
  "key38": "5QuU7NP8DTDZj2bNgdiatfs1xezE8SSotuXrxtsS7RxhKEdFARiwvtTNMeyMVAB3FVcUnstEaEKE5f3Q9bLK63XQ"
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
