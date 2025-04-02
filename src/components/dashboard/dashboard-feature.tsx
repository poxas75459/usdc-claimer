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
    "3QrBTQGj27jY1kZbvxJN9iR3whRBCvNNrDMpNfhdiTQ22McAixS88Kw9jzCB8mFJep5fBavBFKLhB4tgJCgT2R5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yji7bR3Eax2XiWX8BcxH6JN2yuxs73RAnYpELp8jukuBDgqaS6LeDT1AW3b1FijEtFLKiSZwBqXe4GAWVeaJgg7",
  "key1": "3Eu9saJcV5MdCNmuuC7XRLpUFEC1WHYuh6AypM9HTiztsiohYdesdgXEyUqwdzmqxE6yxzASUPGSMUArQ6ZzFNCb",
  "key2": "5XF5cPWusTV1UhQRzaDWWhaHcNBpyu7S8Lz5Q6UxPXiQY1Zfh82qJpQqLdRruHgtxEu9P5C1F8Rx7FZHv5xtNVfz",
  "key3": "3r62VWw94RqznD4PWP19QDaHuVQai2AzF7QKsb4QGbzHLdiizKCKqApHiVbcvDSGq5YXHm6ncMnFPBEEi61eS1EG",
  "key4": "GPUkZ9yYbSTJSxoJ4soe7JcLNJSrRggwmVBGn2hQFdjF1ikFB58fnE8d9EwRXS7BVjC4xgQfL62JFZrsjsRKVbK",
  "key5": "3jTSo8T7Jen8PSejVxKfukeeKTmjXirkHDKL28jtHwB22mVYtTy4drk7DyqwTemRgUghzLvurMYxSTEQ1zDqV8sr",
  "key6": "XprrwczrPehdApGyXdmGjSXHgCJCTUnaFg8Sky2htosfE5dkx6EBcTebpnRb6GmyKecKiiQb8GvUu2oPkQWtQpV",
  "key7": "3e5J9zWeTQjZSSDt22wEUEJo8wiYs9Aw1dj84QiHS4fPjKhPLNZpbxJ3BqeGZw3qrNATmkj3aK6aHFV3NeBbLuH4",
  "key8": "3VwtbPZXUoMqtwY6bkLKq3D119qYLfPNvy2E7qbBm65hmzAvgrp66menAxeW5Wa88xTqgL4hcsdhEem8hcF712p",
  "key9": "4UKHUC8hTGHqrLujywSi1uVyXJr3e5YQqAUQvXtxQhHYBZyN8psLUQtJXu6KNq12RxvFsqpm7SjviAsbBC6kuUjR",
  "key10": "25Ft5djgu7WbEATRkoCDQbQq1zrdN1s3c2wqcuSMguYvogVUXCFDDs4qbrPAYaCVdRWBHGzeWiAmi96y4q9Bpxep",
  "key11": "2mo6x6vypNcuicm7jTyGzWJdgBxeh6dxsXgaXyWhZZKfqqaHoUAsPrW4b8pAhAUEkHeyQ7upfWk5j63mPbQao3Rm",
  "key12": "5Qfams4uXzPVB2aNoxEZ3tL9nLR6h1FARWSyvA6iGFVwqWMSi8R8P9aYCBSoW6JVLiFya3ZifurWNYgCUHTg8gwE",
  "key13": "5fgpBgMwrDXgx5rZoodad8Qowtv12wFYum4FRg7XeMgktQks4dB94GZgtzJEmgg3iVudnJJXFBKTXsjjX567n1J1",
  "key14": "5sMMACjCbLFJqjPY6mzV4ST5eT9bYGHzUmi8RxhmirV83czwsxcDLkSxGueJxY3RQdGiHBCgyc1CXAKrSvEVqsGK",
  "key15": "3kYDrq3TtmQPEx5uHDFvWwQNdw7xsVtVYy6oaCcUPeCACqppZzweSgY3Kvywv9kbFcgxiZNPkGzNJFsTiEqZZfAC",
  "key16": "5vnzSpsm1XpLqoUKHVKQAQ9PBVJuWYHDHNEzhgBFK6pSq8biTfLyGZuEPQzqMoRu41ima16WTwvMkiTPKUdueGKB",
  "key17": "2ShQwyye5csZK7MZCJxgjcWCt9Z9pXyoMk33mG6HvJW1dK4MZeXSuZ47CBjPJcmD72MPQzMFMrXwDV4Q9hin6Qvv",
  "key18": "4DKPwC5DPWqsVTYUqmyg7q7ZpWgBw2b1PZLXVnPDyskNSMyNR7csWSV87dhrviTYrs6iMN2gvQb7HvpGzDQBNSdL",
  "key19": "5VjcnkyjWGinkFY4W78uPasvptuq4LDunLNFrhHKmE6abp3Eb4gFx3frb218x2bBNaTgSHMobMd8ELSQz8h3uSEd",
  "key20": "2wF8cghLygt6eRwXFKdopX7SyTxxkejgSSmeJ1swZHJWiqUgLpHJYCsjrCfxXZ5axah1jdUDiuDDuYjeZqWYqanh",
  "key21": "5XRh3NH27DJN8sUVpz7BjUGrdkxR79Z6UMPn5dL5eY6TmKry2sFzPRnCVF9212ZgBzspn9Bmepm55ctoXcCLHv3F",
  "key22": "3K16YQ5kw7UP58np28v3VAetD3uDTJvR5DskBaV8eS6WNVUYevp6AXMLYpfTUaUriSjnMsQL9w9PrpfLsbCwuUnf",
  "key23": "HWAJtFQAeh2Bn88RLqhtr7nm7f9P65zTcq1dmonXiphkcU3N97oWVa5mocmHtLoDjR7KBSzBpjeYs91yRnGqVXR",
  "key24": "51DDTWaW4fvnpxesEmZ2Sx4vSRdteRzz8NfhrqU3mdMC6CEJBhCfzFj5H3Pq8svSdkqdNAzu4Sj8U7xcsDw5rpj9",
  "key25": "4io7JFQp3G88d4qzGKBKS3TdfA1AG16cu6AUeUezHw8kKSGVEB9DG28CqZ2yX5fm6JPB4Phxy12QLGiiHbWLeqLi",
  "key26": "5sgt4qLNHV9Bow4BtPdvysWDvdNfZyVx56WZdJySVLVb75fAfdRCvPEDcoF4oNJGfwSL1Emj1isiPMBXKdiyAEiV",
  "key27": "g8fN8YhXaEK2FqWfmoMfJzGJm8PcAdaxJtoxAS8wTXvFxJen4UEkaJPXxtzAEb3H8GdH7zcq2o46ofTFJuJPbMv",
  "key28": "3u22A2MvjfEqwLzfiSyomRiWuYSECWLCHkyQyWazvVJa3mSRCtzRdN3ZJNBd7fAZiarrHVCvNywHHqT3jFZ7125y",
  "key29": "zFFxnR5P5Gr6QaogDrDRRuE4g8zXNTvnWEJJ6QgweaJWSnZLj41Qx4WpMuj952QH81HY4N4H2A9Cf7eZq6bTfYw",
  "key30": "52gXrvFZwNuJHKGfLF7yu1BpPuMMCKXK45mUTRF4NSrhhjT8MXQ47PKbuHXUwdq93QuEH5BZEiZnLMg9KgF9YNZp",
  "key31": "5KGF5rVth2p1ywmZHjgAP89EY9g3uqhGSYDhEjnCtAENRrpqHg1ULj1HQyXpAd5zSrPE4EkuQUtH792uxFCUfg3j",
  "key32": "35BcZWz4uR9iN7c3XWUhUVDxb5y1SZBy4EQGtQuZe4kDMKZLge9oZdYZsAGFwykyoZur4oSHvrrURS1mjjRx8ebu",
  "key33": "5METPpvYf8Mw9i7UjfMvEDnHo1Ypjw1KKt7LhHkBANFctFDsXguYG4rcBDYQ7L1oR3Cdt7p4Z5wzcXezP4KSzEBT",
  "key34": "23mDv4ChwpeRo48Ed4JvQU8Uiz5aCQrLb9DiuT74hR7AM1C2K6crD9d1EQJ7ETTa6M9ri9kddDaWFmn6UJGyza5p",
  "key35": "62j8Dg5HuyLFWhYiFuWRUYCxG8thTwqCDMMAumAhQp7Jaru3Uh3xtb8HqBnCE5R3tavGSeVjwgcNh41wLZE5zued",
  "key36": "5kW2ombbUeLbtQM7FJ78BCr9uMwVyZw4LroD3QfQ61om1BaqxqKVfnNUEqAEBxKxMjD9pnb1cNmyedUFvevWMsdv",
  "key37": "46iwshRaqmpKFw1dwze7EDtdJdMfqG2oZLmssWWiKPdKCFBQbV5MCCRBAMaNohj8vNrnkS3rreKtdynKgQ7kA52g",
  "key38": "iwKbsNoA1HxKP5LLWN8rwLJUJFb6V6G9964UwVPZSicbaNY5y1WLXZrej9ta1eL3hAwJWdUF4JyCTV3GghEn6k9",
  "key39": "6aFTkMsNvU1nhc4MPbdWUSy532DaqUDsd1KhSJCJ492AU3M3vwUge4kHFpZGsJ1sJDzcPrBevLjeZChC21s9qVa",
  "key40": "3XU22mjWkaFWPya3C6hf5yBnVF7Esm3RQ9yFNjLbH8vahiK4nxbcvrNYKJHc3AtNRL1chhgJYMpiPLFRynv7mV6r",
  "key41": "2VC4mN5jzqf9CUrVPXfp8bhFX91Js9J93GVUwS6RApENV99pw46gtJeH7Xxus52BQsWe1PB1ePWKF2w2ZGtZRLto",
  "key42": "5kTY4mCZhKCFE7qsJWbftTG5AWAgTxpyLNXQjVhzfthHRvHvPtg3f6jpMbkqNLZxR7PgdNgnu2ohVsuot7xKwojt",
  "key43": "5wNXo948tpa5zUJJmqLNXe23bqqPeAiMEAVLpzrYEvdDDwsYTztPRp1gxwXpqFRxTVBGaj8jzZW97BZdCQs87QjN",
  "key44": "58ZShVkkV9mGPmSPVJdeCFZsC13qmSSaCNrnriqwkcVYr26ndnFU8qbTANDamm9fPNua8s2FBaaMTL7rvWCr1LH4",
  "key45": "uV7uUuM69S1TfGLd1fxQ7EKP1kaj11qQ1xtVVjXSrnuRzLkYGyWmHFFgHRaWB8SZNswMTDQdJd9X12uefZWNSn5",
  "key46": "2zffpZEZ4kzPGX5GVXqc9R2eTtpmBm8pkXtnQVUSDKyjYfNXRzJQidzYa3GrksszSZ5dH1ibMZP5PN2pAgg6GVE9"
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
