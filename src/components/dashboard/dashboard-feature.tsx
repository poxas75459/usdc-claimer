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
    "3UMiGxVrz6dcExCJUjPABH6hR3ioRVdWR9UVXoEvgoeKoECNUBMyYBotgSMATQMWFwNtsnA9mbFfxZgZVh9Rxy92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJ4chB8LSBEANT6aJ9n92yqCTqpSDSA5ZBf9rimqTLws3Shnr4Q8N3R8hHiTh3AVgJ6HtU1sAJVkPq3fujz2rCW",
  "key1": "4XttqXj1186tcLyf5Wu9tbu337fnMhYa3gJeYciscS98stoPKHseL7nv46J5whKU5jPfeNb4ykQCUbt6Cw3QZtj",
  "key2": "3jCTf91bR2rTbvLMFuKHDMu8GgKNtb45WG4z41dwuDicncLctLzNQ6EgBH9BdgZb1VzX6DKeFPPR6aTtkVbMHntq",
  "key3": "5HYsnyRerqVEDsbFDf5iGavzTCnbXeXWn9fb5bJfqqq6SHzvTrZYFZkAUBEVxz61Apg3dKzKEoUpBsguTpW6SjSq",
  "key4": "fnVeJ5rC4xq3rQzRBGjyKBrAFYWMfNRsFy8n8KgPfUn4HVh67YxPCCm8eRWjK7NAMQ3N1yoVZMCjHam1rDNHfDD",
  "key5": "3otbhD1EveBz7hepKFEW4iiCqF1BRUH9DyDSGXmjWyk3FRLF41Vmkjf1WgddhV7REkVgQQsrZs3s26jW1TfWA3cp",
  "key6": "2Wk9nbWz48SdLaXKaa4FezAa7gnkvm654Zra73gbbx9RPjxT8AXts5CgULkNCr7yy2PmfB3MNEerTCBT6ArfRXn9",
  "key7": "hH4UN4mPLTiao4ChyCGgFzPanNHLJqefR5bM47awqAtDcz5bhHycGZN14bYa2HeKdh8UbFSd3WX1jPwv3b97Ge9",
  "key8": "2hCjDo1f2yySrhVvTxBQran8k1iXFriHxqU5CQ82mQspCfA2n4mj3hHcBRVC7CjH8pB94R95wi7sRjiS1g5iXco5",
  "key9": "4cd9hNHePW2ZMwH3dpk98d6Yov2Xezys9PKSTbMGREMEtq6fHX5mXuKpf4vNhhba3AapeKzA2XvSMzLV1hodV7Dh",
  "key10": "6yHm3AX1JYBgoXefQvB9RfqF1dXXmvH3uahgYY5cpQ1fYHJMFFyZcU7y8pRp3tohxoNhefqLpzeXjSEawHQivGq",
  "key11": "5R1ughKt6crYiU76GMXp1ZX173z7tt8BxbYER3Zydb9qHdY7yx93zFxTLS7MybZdeqfTy7ULXqM3AbUHy3teE3uj",
  "key12": "2acSTCgCJZ71n2BvqvLcgg2WfMtVkQCd6Qg5ufeGVC5Vm3Ekeig3psBvAskHbLv1BYKUEnEJDvdLdsXW93WRXYoP",
  "key13": "KhyR6kRwH7ukwCNW3B5VGZJCGcVxjszX34B4SaNRee57FhcoY1wifLHhYEUSopGid6JX6Xcnq5ViWyLwLu9vyqn",
  "key14": "gArcSNLkrFPBhY34NdvybazvGvG7FTEjV9eQzzhsenvQcnTsRwTsHrDmxLHkhZZ8ZtP1qa5bkZs3Xzp5mAKhXVu",
  "key15": "2VmNcsuHfYA18AKY3u8EboU5irkmYUUuku7vVFCpJrrQyLZfGaq9uhyzGnBoJ6kacZcyBVXtCtrhtJFtkUQucNEk",
  "key16": "58svoyyEcahHPNmYmbtuYdDVwiSDjMDJRYf7EYFAawT6Xc9waWxkLGawYzhSqatbU3nXUctJ4qoJkUvERQ9GVNuL",
  "key17": "5Sx9FTZ7BasAPSS7dMmSbmxRVtPxmELeuUGZTyeeWNFDWQukeZTZ82JHutb9jFw7qkzCnYwBvhVDba7WWwbW43Ht",
  "key18": "4f4sNS5fJ93cdhfhgrGN1ZtQMhQStcqSWUZ9UdQhrqXg1mLxifNDBQbChBM1cpKuJjvTYGAcSH7mthePV5zvFm1d",
  "key19": "5pBSwGZBWHnitnXJK1CC4njKccXPj4tUs8g7FbbMGWNVKrtKbo75CdGBvsn6BUhiyxhWjyHdhwrhr67sJ4DHiqzj",
  "key20": "2SpfTqN9syiczZTn6sjKSnzn5aa7kG3USMQmkZ7iiHkVThkpLen2x36ed6vJrzK2DoJmxUJjfbHGmKHGZV5YCTYt",
  "key21": "5zmm58KCDYLxQGeqVLQHkP6C8PnKT9KHM4muxDUr8h7Xbw2sTDamCG7wDav46E43uMqcfVw9po1CuePoPCaeJbJy",
  "key22": "5FodboQNVfLAgEM6BDtgYJqR8tfJ7ic9rKkzGwXsUGD6c6nkw9xFNTySSo5Yrtv4UCeJ2spSzAKChd8SMZ8FeLKh",
  "key23": "ZRHq4vpEFEc67AghecpjGgUedgZtuqd1Yg2dW3mDGAA8Ee29aqU8NfvemUdyPzVKN3X7EeSwNDYKfAy9LsKXduW",
  "key24": "4ZnkeF1F4eq6i7kri6NtLtb5BeYohdVnor9UrYpUFW6rCvaiwA2LqhVok289mnj6FUNePAaxioBnF5vdU48djNTz",
  "key25": "3jwi5fY3hnntyxdxLy4e5Va9Wv4Y4ACUJg84j1ms5LLGxC1DdwPKatkSPbURKfZPkUrbFfCEDWSmrXgEJ5kfnTsb",
  "key26": "3f6feLEBwGcxqKyX5YjD39DesiF13a43cwMHyMSCHWgoiyV6HKV8M87JqTFb6MDKijCmTSJc5jnW9fmtd3uUYC6p",
  "key27": "33MYTuej5REJwesf8idPPfVaH515QXrmPzEDJmZnm6aKU6jfMydQbh8DMXAkBZtEDht8V6CaFJqf7JuywtAbHhBS",
  "key28": "36pAdfYi4xTMgQKJaxhe8RaNLW7bfzjJPbGxKhiGV5YDodjjEy5QGpjpPF59BUyvYLB77id4nrJ89Z4HuSbnceWf",
  "key29": "5Z1HKKHKRNeyEUi9hTkSPv5wi3ixrQpY3ZFqvHKyxw3buXg6HtbyEzk12Vn1E4ifgEzN44xUTCXgDgDTNjJRxMeN",
  "key30": "Ak94uuwYgLj5T5ZgroQsWWBVrfzHGz6VUT67S9vaRQzLR8kU723aPzZcgroQw6BmrGKgb878sp12Ytmu3h5mwak",
  "key31": "m4ASaDxmP2Tt1tRNSLUZqXHnTtCpWmCJ6n6fHh6MBqaLzvUAVMKUB3e85bBCqi1NLE2oL4aCnTMBrtsWafsmeYS",
  "key32": "3BEkP38wjhdDiPMVC4KL1Qi2AqCS9bgKCA464GG2jwCjsGw3ZUrpmYeo8zpDmR8Y9NW388uGMn1Piroe2u7xhPnb"
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
