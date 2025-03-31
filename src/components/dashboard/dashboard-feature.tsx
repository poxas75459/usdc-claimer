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
    "5EePZgNvJPs1EsbXoWLGcQd4pLqJT6VSawnishixXRCip3Z2Pb7NSjEVjdDMGqur1sgpSMfYKxZsLffayrXhP5p5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oBuNxGjypy8qyfJVggo4B4n5UnC8v4C4xVkLztB9Rp2eDzCWSm8SyAkdxbSV2REoHHVjoaMmDRGySWBmyxGVAZy",
  "key1": "58bw8Ed9QxGVffwEbUAUyH5eh6huMW2oU7XAAxswCyvJ7Zf3YJz7aYfsXDyuF333HVfuVVHxPA71duTngRqg2E2D",
  "key2": "cAd9bGU4HhLzcPpQ1JxE89ETByuH7shHGYqBG3vAFn4iWcpN9WHKXz8fsFtPycj9QaHfDsBXzZLkrrxLURV3XNS",
  "key3": "5gG7RLsKYuFrSPPo9JG5Gr7B48BmwPPtBfLXMhqo1a2NKuEELqxGCh6U7js84dyGoXt75LGNS7py6zqiUHwaLbsg",
  "key4": "2zhX3aJDyDHPRo22uS6xcwCtgQ755ePw5b7mDF3938GVWfpZjap9WSjyYoPzVe9rPxDVBAk6cCZ1tmWeYsoVhAR",
  "key5": "gND4Qih56zwwxNuY7tZyxMmZY43wAk4Tx33UTj9fuhfH85ugEDaSMZaZi3DmNZgMvGGBxyzszg8FndUBdzDdtW2",
  "key6": "4acbLszWgrSZGn185G3o7Ms6F3UenVRUouA2HBhiZYi2pXw4U8oLDjmhhz9QDTcaUVkNyZL4a8b7XKMJY5Hz6AwQ",
  "key7": "5QLK2Asx8RjQsuKZykjZkUVPcsXYvHR3BgYhi51NbZRGeNcNZHqBYUfZUpX6mJBaK3y3wiE7kGgU4SQ2YRyi9mAs",
  "key8": "3TKkAspFUuz7s6dPLgywGdk1najPRRwJQMSavQXLWrUgWHj1J3mC7QgfC78Zj7fpUFzoMt47KzajnxBGFMjnZF1s",
  "key9": "J9meuCamqdMyWb3hduUUkSLGX7JYcTCWT4UhfTYKyzSJXaW94BQEYCYt1SgLnh3LMnzbmzigjekxU6ak9sZXbW5",
  "key10": "1g8CBfPPstDmrYqFnnz5xQDQZhr7kXKk4R6gVfSFLV6E23o1NV7DUGKaC4zmCWm5B3xbLdxeNUeZAaYYLXMZU3E",
  "key11": "5mUnLkYWtcGfRhWZ2jV2oQFnjA8rPUpaT7hTcBH7sncLjpCthyFAXQCpkKRYMKSk9RGXuffj6qYTyQFfZUFxUsNS",
  "key12": "3vbWnd4jeYW3pwc6A5MQJxedBnZyZ68Z5yr3cMUtD4BuUV8puSEFML6aZXYpswJKmYi2L2YDd7acKPMnfi7VtTdq",
  "key13": "22cvjyE5MLFEihVDtDoxEFouhLwZgPdCUp7QtdRsdfrF3mU8vi7SWKaWzPN2jRs3ERkHnhQMMaDKDZVtzM5JjnaF",
  "key14": "3tEnraN2JC5LTv3B6HEXLdB3hm1NdS47TZhMJ6BVrbpcH6qifua2mwtmZ5bEVNPgZiUhBLGGgHALGr5b4uhp7YkJ",
  "key15": "271rFJfiMedoApBj67AbJyA315CjCsA4qgBU42U1e3nNRsBek1BDNmXbHYRjHB7BKbX33WABeqNqtFJ1FUcVxMtG",
  "key16": "4qykBJ2dKTFjKjQgqArW9aAFNfSdNNQKszro13HUmGbth2V5jnsPC1SfgFzgpKTNt2TVNz4cMAoDV7iYTm3HHeXc",
  "key17": "5KEEtDzSMzVRikNdswLLQFWWboEejsZ5hoPisqGDVyo6mk8eeYFe3M53niU7MS7cqGU7ZUt711nyrJkjdmUDGQ9c",
  "key18": "MZHi564ArWmVkoUS7QusqqPAUiseYqkrdixYj9nv5uZrduShNHpnKPTWTNLHdLp3taHGh9JX6dMu6H8Vyj7VLZy",
  "key19": "67WvXPQksLMMXaFryay4XvRRmkGFiduLY4fNgKsznU9WJmqfFGu126sBSLTPzaRzP4gv1mQyn1JaXRGYwoRnxE7d",
  "key20": "3RXgwMeDkrspSDpFEsSETzpwGCryMLymscwYJhLvaj4GeqAjUv8EnyDbM4hSa1STgRY49rJ1gRNpnjMkFNEnJZa8",
  "key21": "5SppXXWjBKwm3zXn5LvdTNSLaNJZMsvQto7dHF5B5C4UqBgDFHAc7fAFUqGkrBtEgYrorZB5tr2HZ7rtWAiZ3oVs",
  "key22": "oxf94NmWcZ2oNikQx5czSg3aGZxNCC84nQGCbHPUxtkbWWdVKPFBc3oiTjjprctd9PGZ9sckzHqeBqNsfbZ935U",
  "key23": "28g1NeWGb1CQsLu72v5eTUvhxDtpVg5zkrDPCqSWEv6RHCZMLYfYtbcNpKatj6gmLuxvjQwSjGJPHYaeTb9j8Dor",
  "key24": "1yvQgLKboqX7ib8tVyxB65dCAgAhzXq3415gLCJE1sf8Yeorrd4Eprdw45Ng1yL9y39dfbyCfzNMwUgVouJ79yV",
  "key25": "NTmH4XiTHwmDboqFu5mn58nCRDjSMxRZTPyuHzKanGPAJchN44xsLeFsgYnTQCcBJaM9Y1yY41WoGaUjzaqC6pR",
  "key26": "2Mvu7uERj4UJmaYiFHNR7XwTxAYLFacbiJ9cibRgiB35hGgwv73Y2HquGUJ1ahESoKncuCVSES3msCrh2rv3KAXZ",
  "key27": "2K7DMKJYkdG1MAjARGhWwDYavVq1mBkpKaLG4VNE5Gp5Tg1hsicNLGYawgP9i8cWVCxpxQBTjptQB9fGo5Sda9hS",
  "key28": "2Q5kupuWRXJKgyRTyd5ysZ66NJx7gPStA93eEsNGtoasCjbmdd6JNazNDZtovZaxY6bkv2ntvS7A8ATz9Dvgc2iG",
  "key29": "2K14sL61vUHuhAUUxtSj2dfG4YgPHz6Y7oNXnms1V6Kt1ETMjxqWmEQ9HTTDnP74DbdP6Mdd5ocXw9D7r7sNZWQA",
  "key30": "6AFQTk8HwniqJqL7pqfiMN3DQqiBxDne6wAUkxYsPAGqeVVcW8WkWDYgN9w7x2WKvBJjuBgtjmRxpgEgEdjVnuV",
  "key31": "3r3a3SNZTpSYcYUuGtEBK9v4hDhzAdysfTBVfabc9Pw7ny7MpKJnpZg4VVjghDozLa8ktZmg3Xt5Dz89y5kzXuDA",
  "key32": "3M1aAz1fAoJxegb36KR7SYTKJUiWPczjZ9HHwQacWXbLcF3ZSPbJqxvVNHJQjynpUXPE5ULLDb2ey5iTDBUz2sUb",
  "key33": "Q9AXiz7MGd3qyQKoB1BLxia8TK3QjqkmH1TnTpxvcKRfz5Dn1PuWZSVvuVAd56H9rY9EA9qz8vgQpXy2azCtnLR",
  "key34": "5ebuSC1869AyG5JxpezznN6r4aGcT7wvRMCTqLVAVUAt4GQV8YJJWHkCxq8dhsWncFLbgcz841k9xaQgDkCBqgMe",
  "key35": "U4ZTrwoDn3kKBDu58E7QxUn9Rgh1tc3pUmGtrW9ZcUTBrQBuWASLNbJoNHLW2RKy8de4XioR3d2ZT4Hdqeo4mDS",
  "key36": "3hFXpRfJQSxXg669uo68G4sCLAg8hL7gMMmGGJHcadMSuuooCyWtbWD4M664jd7SnFsCiWJrp1iiNmizZf4Pho5N",
  "key37": "4khsER4N7xAy9e1v5EVjY24zp34XcsfA8Yb6GTEVy2153UaHXqxs5ew2WWiky8gzuXo2ezef5iayBPWNrssBwJjN",
  "key38": "2ran4b1KwoHoj6pCJ8HFc8ymRNPMkJgKPTrTKyjGx63U8xUbSmvD9qDziAhFKZfi1aGHD5VgsEbRtvsTdayxqgxn",
  "key39": "62jj7TWsCUCHtdyxTqS8g2DnA1bAGedyf6QbSg51MH7YHXYoWw2rvDuQpE4EbT7bGFZTkDRKwon8kUmVRuhQbXiX"
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
