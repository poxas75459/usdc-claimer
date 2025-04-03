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
    "N44Gq5h9XgMX5ZCtV3PhXyZqnH9W366fhWdnnhRGeJcVhu4UShABdEHLpARvLvbz97DW4k5PyiymYhLB286XGda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bv9ZaR3x5rBSGJxjoGVvTgqqkzJQrxXeSvBUBUSAegZGoC8E8y9DJk9PzSKY3ZzoAAFqxpjJAPNR1cWLxzB3xG7",
  "key1": "2yfC1VcvSiupbbp39SbAStbb5sNoCNhDHyMUgsnxyHfM1HHzy9aWgEWtwQ5mv1vtNo5WiBrPJ5RSa8JSKfzkFzXk",
  "key2": "2Q5dvR3d42omy7QMqnx4sMr6j2WRdJBoLi2HjMnriH6ttb3McP6rLqUSGqrtxwojEYgSLsJyFPH8J14uHLUKpFb7",
  "key3": "3zFeG6PGQBnwKKhd2f2gUwza2a5WsKcqmKaL816WVuFhYCz4XKQHfKHNVKpQc57VecfpuY7JViGzzojBqmnKsUfm",
  "key4": "5oKd81EAUzQwYU2tv9ZtWzjtXznVczw1bGnyCLg483QHjttjGDm8PZKRadeRHSNpJv4sB7fsJeo8RwXGDbt13t4h",
  "key5": "3Wg587uVPAmPjuTTUP2wcbtEZZcJ9Z7TaDeWU33qFo3hE44G6bPbzP8vS2XCpo8cTqfSjvYUKp2qxsremf7FTtZS",
  "key6": "3jfhBn8KkoQHz5CFLqx9mJ67QExbgJV2iH8D5JbYyjW6hwrTiScQJ3gxYmzzdS4v9fm2FxGDHYX8Xh7FVAkuRMSw",
  "key7": "4RuQ3A5WiawsZsG2Z5QeZ83u7McouCjL8TkWH6TGzoANFyGwZMFpnGsCyhmEi312SYW8dsa6CKFmZdtKJaMw66LH",
  "key8": "4wHEmzLMED8o2pYT69fhZqTNry2BfjdSMhxUaUPKyKeCnPyjkaTkGbi3AZaizrC834BWwViNH7qoBiAFe1SovGwj",
  "key9": "3nL9ZYLCwPuGVmiRTBu8m4fsTawLc1xfgKoK3pQdLVtzpgbPmfvvFe8v4n7hB8do2KKzKFpJ1iAVhZ2P4u8XVwe2",
  "key10": "4XzQLdCRHY2tFUc5cxBK6rKyQVFYCjQwRSJMrAJkedXGL7SwuPSwcarMwZqN6yesvQwha6tcb6yisure5DTffWkc",
  "key11": "2UY6e92iBkJTY5CEdHo47V7vLwELveAptNaihbWSjygkBbE1tZJFwGkpb7A3QPPdUK37trSKVYWfJE6R5pivNfG2",
  "key12": "3T2ChtLHRn8VJbkAjvFcGFqUuS5Deg6FA4KoLVNySmG97ajMBq3auykeUNugaCKCNjZFj7Uz2AnuDwSdqJTnYEmq",
  "key13": "3HWupryqsyUuzu9wy4CFPsGuGxb5AQSepVNANzM8oQmbQ7qgFYjTHFXqpx2FXvKmMHg4dsVCdHaGEQ7SmEofXkLE",
  "key14": "3WTbFvtb7jdNBXSbJ6TeaL2T3ETdjRfrALhRE5HPyEwLJeXJkMA4jWn5z7JnSuniStGQT3rkbJvZD9R5yNJu6xxc",
  "key15": "zJTuFofrVP6zabjH4oEHCgkxNiHQY33tj4ErT23WCDFcdWsxi2TML3uo1R9NcWHrjBR8uqEStv83HfbCAYqETGy",
  "key16": "iLbWLE4zMeR5TsSfptLBLMazvbjYBBFv6ijtNLvUqCAkBfNkfurv2qaM4jifMUpWSgbDunr1kA2ZaCe9WZGEG77",
  "key17": "21HvrsPstkUahhZAcLhJ6LjPtdn2Gw6x7r3ujpuJMGpCNKuJLERFxfxJLjAVuYeHYHbYR9bRpMd8BLVbNEGMH4Rs",
  "key18": "5XmptSdyAyPUr5QQYWog2ZHNpqtUa6UbViawKxd8yYR1XVfnmgBombQUKPC9jhZUiTgxnWmwy3DVUmwTY4ZWzsnN",
  "key19": "5NzXzYLsWMWF81ZbJEkurpon8qrizxn4VRGcLC2QaRGhRHoSsNvfXLnSZzZTMANzwrZhaUJjvQdRzCx78rzSag4m",
  "key20": "55FhaXRLGGiSnxNoxGp8n4ughAxJaQfTgFKH14rEJTfCTKNwhuU9kVTZM38dRL22J6eSRzcSA5Ww6qV9C6EgeDiA",
  "key21": "4ZxSnz3DFdCE7HZ3NJEtJ1XgMqUuWZaTokBjDnGG2yqpdsS6oopNC7JnfSnDUKR9BdqRbYFxUEZpGZkJd5AA6oJS",
  "key22": "41RMzaDSGS3oCHMr6K2HZF6qWYZWmaap57Hr5Ge7y9fbLxoF6ypx5tnHh2x3pLaXaE9uCFntjLbNvY4m7gPX8UvH",
  "key23": "Sj9435Xw4GXBMGFM4C1qqPk4aGxkQ2BRq4UAH2cXgdpPZnPFCpG2cPEDk7131zj39YEV31mB8K2ADFy37iutkT5",
  "key24": "TMhxM6cJEYrDtQfjuCoD1beuF5qrTN67Yi8GkBQhrzyf5DqPqWzdCean2KYTLbwTShHQQcnGPzPbFkjJzjRr3EX",
  "key25": "Rz7UkDS9NFDFBxMTnoHNfbfbALT3oXJRk9cGjLZdGGB4UDnYichfc8tgQg7Uwmg9GHXvhxVKpbaVM2FtRYQ3fyr",
  "key26": "5YAvu9444XfRHHjL4tQx3yXNL34pzgSuv9Sn6gb9LAVfzthueLhxVYeSgjGrMdddZNKzRy6xz9a9f2YEJWd3mD1R",
  "key27": "45PyMUWpoaXK9e1V8esMPDtAAq7qXobt9X5hUmHoqhHgNayLywzXx2g8BJM8oRB45Ucy7QZQtpciY7o1gobA3CZt",
  "key28": "4aLTLF8GPN2GkxmhgKfhznKDRo9Co7svuTuoiq8JDPMD1nQeQ5zzkhJQhfxTZUvyrNEue4nDnHtyFVLDYTNmZJv3",
  "key29": "M7Q5YvvMPMYdK1LCVyDwkefgNF6yTPAgBEHj43FDb7ErXr2LDupvVmiAxVihj1whHKMDJk98JYFPnkNq63EgfAP",
  "key30": "Emy9kenwoVifzhLXr4zD9CJF7DaBLU2E4BpsgwXNyV3ChxU4weTcArJ4yptpdbBudKT7p3SnKrT3ZBu8LpVopfy",
  "key31": "2xmBWhCqT3BP4LArKCdF1DZXmgecRGuAUwvArune1HUrdCRQHUf5rn6vrmmWHvbyFUy6tA5X9toymrZL13ZG2mAa",
  "key32": "mhZyUQN1VNDE5zhbek82BxAoF6ZuhSV7WukRSfdxckdHDhCBunfUy47T5DM2keSMiRX5zMtgUw4PzmZTAAoEJvx",
  "key33": "4vZWfVbciJ4PtgJaeToMdErY6TY8iPaPemDubji8nt1AsmycyL4NHitxLomWyfgiBAAZqKsAw93WQ74fLueP18T8",
  "key34": "2kx3JEbzpLPkomEnjG3aRt4eHCauL6Tbqn5YLEb3JNWD7F3yE6FnZNRR2wpP2gFhaFaZ8zkFFaB6FoehKA7mZAXn",
  "key35": "3VP5L5PrzJ3ouXo5ryZZbbw4nxmipx57v3YMwQaj155bCAR96zG4z39nP1pmSwsmF7uvtupTn8o2k8Cvy7VN2tuZ",
  "key36": "73GF79rvxQZ4uHczpsrKPEqHhj6JauMnPxtzKBeA8qVGxYa6HZmA4f5rmZwrESDUWGpeowFEr6VzqaNtwwk6uDJ",
  "key37": "NaQhLNs4AorYGuuSFiiwht4jP769bGWcYjXtGqKnAb8PC8gQHicTQnWwqSYF8PejAbKu4LZ7hVVrG2aJSUvFGXm",
  "key38": "2qNvD6XFvHHv9KygZzkgrFyVtLMNiXiTb9GcJq4Cjd2FyRAvDFqwkm6oySYKHKQQxPV93sSTNYSfB7L3ZoFYvGqm",
  "key39": "ZTxNpKviFLh7UFTqbFcJK2FFY6TtQhzZssYoGHEdQdBrWN7sBr91vDUKEXhZuzqSuybvjc1hNwatzLLHhVvoGfJ",
  "key40": "3SrmDvfByH8sh7XRPgbrbvVv2NaXzadV5htiWKwLuo85pP8L4uxP7YjJ9kPMEJzgzsFozjoptke1HgbT631MXasJ",
  "key41": "4Bp5SkVRFZSRiN4sex5EqFPxJSDVJF7N3r2xax79MgJYRaZLfdvbUmc3ExKHF4SBQESp1F6Ai2qiELo1hAeTXz4y",
  "key42": "MY5g7exBSqB8wFsjrXKbrrjMZsLe3YxgHX8SPwgoWwZLNYrzAYnYY7pzSb3M72fYbuKguNhoJEhPQiwZWMbzEcW",
  "key43": "2Fur6KgXL2RpCtKjZqhoib9zDYMyn6CncwriyuXMeUYeE6rjyidjebXawP3i9gcQLBSUPRufzZBxXEqaTXCNcg3K",
  "key44": "PL9wBh9vctzQvHky7kzpxfX4ShkidbCmBYW7WEZ9zMAinyiwW1uDEEG3pV3k7HDXWas5w6HCsjahDVg5rM16Xo3",
  "key45": "YJTZZzPvLSurd3WtwY17HQhBzEJBUF9hQ62n1gbxZtGFT6W3eZmCLs1GDe8NUCx8kcvHcfrmyGMtDPs16mX5GaC",
  "key46": "491c2G7BFLFtgBGRkTejC5Qwbmo455V2bB2pxhNb3cZgmuu5HZo22CpMZNCFnwfGJPzLCXx1Qg2EV92y3qZAAPri",
  "key47": "4NquWoNzMzQ5YWY9MLHnjfiXWTVgW29UA9DXeCynR8h5Kh2y1FJvYGesY7oLmec6bHR7TpYF2Stcpy5vygywvGnk",
  "key48": "41FDQNEc1AdPyKdAL5sFqBQPhZA1oFx8mTNogPDWXKfbdMgteNpXTsW3JwnpzwwMAiJeAXDcVGQKRtbUbsqmgonS",
  "key49": "3BkumZfMcEfFvYzohxX31Lnv6jpRdvnUUdQSsXvvj1N3kujyeDH1iyh9LvWupkybd22dGphH3xAMEbqDsa5xnnvT"
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
