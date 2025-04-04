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
    "5NjgQq62uKWyRx3QFmVx42W49vfEKeFoonZVTswt4k2bvMopGy7AcaALEanjQ2wtVV35y1WWBJwWd1N4kbF6GoaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WL9zeBjy6DUqqvaSpA6gnuKkyf8TtbaoVFC4enZsU2mFTuddd7mCj25puXVWHmR5pPzj5sfYdrHnfYsdBHBSSVG",
  "key1": "P45n34BcoC8kv3qjEEMcRNk1uGJo6UnStp4eTiafGv5MAGcaKVS78a43Ti7fdsjsQwN7iH99eGtC86uQ9NrBDPg",
  "key2": "5zq6VHabLjW1DBCitMnYrbP716WBf9vV6ZJuyB9h3ZVoiLCguFLfrY7gAMDaYfVXdDG3Dkmp8ftifyjHM8CQCN8N",
  "key3": "3DJwBV6a44JsRuAuaFjXnkx3bAUq1yVNsUuJ8wZS7BhGe6wwmrBCfvC2EfsScF6oqsd3rp3MXHkpsxf2Tv2htrar",
  "key4": "4adeBuRFLhWSUp5hcERj7BfFKLKYfDYEHjRteKgXFLpEuYjC1r4SLF9431xQCtA86Vc5yBi7yJBj6htMJ8UUFGr1",
  "key5": "2m1zNJCYwr9ZrhuiYWykwnRkvQ5ZWotLRXXaSuRNSZSnxWbYHEu6ZaUKXhiF1CM4XywEUdekY5LFcQQ1B5bGxmTA",
  "key6": "63i98LLr35UDX9aUw72BMeHfoo1opzqTFjMC4hNaSNJ3WBAAzSsMf97ktvE2G5cbxtj6fs6jUM3q8bTmtojzSpbj",
  "key7": "39PX32BdoEiLzAKw5r2EVYx1RauPnRCzX1kLkJUpk388MJa4Gq257uTKAyhCCPpK8y4sGV9aVwrVtv3N6AFVHrgb",
  "key8": "5TRNhhEcYmpM3tdzT6WeFkvzECLcyhjc8icmKpkjxcKPDoEkoKH59Q5Kf1tPAXRKyLUKVC61Xf9xq64Le2x1x3UM",
  "key9": "58SLm99TShGrbcx1sk8pxbfvQYoY5cbHbLboHu9jfx8jeQR89i3e8e9qSMdh3y54D5x3b1CZ3z83wNfr35PqbWsn",
  "key10": "xwS9EMKqeLBqEVadLMyFHf1WkwETCvtUdLNJgZR4F4HKe9X2voLkRQ4Y9XaXj86zw3xJ6rz5WedvHkLKGwxzEao",
  "key11": "4mZMFVaZC2sBVTNXbyNg8LQ1DzVTwEG79Tae9t5Hp3fFWqCH22Npe7QdUVsKHLXjSJ3UfGoZyyfDMVwDqL1eZpBb",
  "key12": "3YSFcZqZtuiw7p8p9yUdJXLL4gJR3Bz6UELuXwTcPJn98i4Ne2NnoXbiK9GvTKWLY3FZ2oSEtYhZsHVCuX1xbkjV",
  "key13": "3pyxEmXN7ZVgLEv32avWdH8Bdig71mWSFgwuvsdJfWVGs1zHm5MoQHjib2ZHobADHyD89mJ5M2MxN7617n5KZhqQ",
  "key14": "o55dm3x3Ert7X5mHqohRqu52TNiatvefdNTtPi4aXJdDHLyZKFkCV8x5EzkzpACw4sePrzv8u7uC9JpvoQLoLWp",
  "key15": "4hXP2ihPfwWkuiiXudgSvAz3ddyTYVcdrrjyXrXfaunTdV5N4zXb84pbfKkLi6oUtcejWhUk5mhZDDDpXQ2siJpx",
  "key16": "4bYYpCjiGMgLh4QCEZP2Yd1HohwJqvLxqYtNEoC6Cv7nGeXu6CbwuDGGGJxtnwyPnHpgpqjb3tFxjjAhYi1TVy3A",
  "key17": "2sUAbQe7T5eSeWXunHAsWVJDDb9pbJK8vFsfrAdewV5uxe6HFuTBCX7V7aKXYxJnWZiWErTzhfMJZdSZRvaaCG75",
  "key18": "2TFsQsFinSFggkzJDSKfJwxu8XTxNDd88tKgZySYhpESopwe9VuBMVm5nZN8UqSBcinjuLuamN2WFPsc9EvfvEu7",
  "key19": "27o5TX8xFXgv33o92uBaR7mTvNcquD2aRUKJ34rxPa229rf1hN8qk3NfEtNZrwoRTEXhRwH57E5tn12QSfK7bTZ2",
  "key20": "AH7MLWFYyjctGQUEFyNtcgoV1DhcvQDTTxmqC22ERpUtER46Bubi58dxKrMBZCYgC2uNU2fjLBfW3qf8eQPTowB",
  "key21": "4GhdnfRWEo7fwMLkH3TtavRQfVntXSQDrbMpdsyX2mpHRYVjJjF4J2Kk5oQgC5KNf8gcHRjUVGFrtZvrikPk9Vki",
  "key22": "4VcN8nU23sFPTHLWG9P3kpfTGoz48J1gMbAFaw5PSG1bZ8FryQRwnk9kNe35A5QT5cv6FghXfK5ht9z73RMdbiAq",
  "key23": "2JGRe8ewMWcPGNKNVVLDNBx1V8RJLNmtN3Ys8kSDTbcqbL8vdQZNkeyjs13FBfTWrNyej42YJKEx1fMU4AZ2N3eV",
  "key24": "5rMJm3HmyvoNEMSYtic6c6s4ZxcHUzod3wzyEitDxfw1LXiav71eh2wZBFTPuugEoUvTBmNYd8GMHiSjsMZMtQtw",
  "key25": "vyitEqoePbe2NBdZLjQrxZd6efGvTjyRZjtfwKMsLeYBhsgfnBSrhTeQUnZtoiSkUNDket8K7mxMUZPDK2bG7Y2",
  "key26": "5ZibsQ4n7jfy6J6m4SXeaRZkk9qNAW9EGmrLi1L2SUp8w7xSywC65XKeCCWeHuRAcKBu1FCH2tnaXdA1372bMg2F",
  "key27": "TyF7PcgRD6mfaAiWBUkaMYA8PE3hhhpUeCfShjuPEej24vaiZViCrgvHzrjr9kkaihkVetS9QTfSnkSUxyCpgJm",
  "key28": "484HWBhMG2bfadKBLsdGj27hDw1ysn2FSjhDUJ9JzyJxeveHFZMVZy4qdEC6mrhW46Carm125MAESE4UUbaoGtNb",
  "key29": "5i8Kh283NS6TTWrzEZ4woMdtm9zoPo6BS49gEdJDrhdr9ENg16BGmdZfptcr2LRLSEMo2XyHyca1WwVRtiwAm18f",
  "key30": "4ZJHCYfwzJLqUFTVLvbf5m6noxty4QqCzNiYZuqW6htb7xbNxLfhZYuTSrW7jh4wWwS1SE5rmmCGzR5Wp727bQ4z",
  "key31": "48ZjnMipLyrA2a545bVM1yrJV5cKqYipSJrWVPcMZT5mEQo9WaLJ99eR4ACouVk76jopwsNbMAFDjufT5y9L4WYF",
  "key32": "3iWnofcdWRSDSFJJKpLEyDWQFSLfabtWQvYUJ5QnCpY5RtxsKEzvndfU7yG7cVBSkHv9ng5tNvrwUXQVNXLDeAPA",
  "key33": "62g9rRcBm4fgaFBMPnbLyjFMrk4ycG9cgqkfsjZstrjsqBE2EqXXMHiLTJS5yFnqMvsNnzSF7mnV7T6mxTquwbHN",
  "key34": "38yeyDHb2USYDyXnGHUt15AG5WBTDvuoGpkDd3pXRXC2UErc4EnQzaAEbt2ybtadznAyuiuBxvNTpYzo8FseVuqr",
  "key35": "3fLpBrGbpE7Xx4x51b7G5asSna1CktaMa5kAfpmhpWY7hKHHnuiFGpmSjiaY3E9b9X5mcZE2fY1WVXqSJ9fZmzvt",
  "key36": "2TNoH6zVrEFYHDhZXaL2C7EwVQCPhR99L4DBMcPet4m1s1EgCcfa1n22tqVdnRTdYkRogMehAWZLiRSmAHGWPegV",
  "key37": "312L5hwiovZ7NK9hFyENcK6eXw9KuzNrWf3Bhoiure9r964oGEBqr6CqvrXCzMJ8ESM5mGWYpNK51LLkN3LTyqJn",
  "key38": "4CyBuJsAn8oXJkUzduXiQM7cLJMry4zz1h5ytUrvnppzB8JXgKnEjaYTWjbzv5pynDLgBR4gdthzopLZeFBh8rFN",
  "key39": "3U2W5CKuxVng9Nms4F1rscYQEwmUPxN8jA2PHevEbN17NeNYQ2HnRu32oy1ysSLvYT23NTJFREygBznjt6HmR4Yr",
  "key40": "4iif8Q3EVge2R5nSQRhKcWz3gHsQNQcG8QrWNxguzgDvDS1B1GTZE1bw3JhKXK6uBynj9D3318qVyzypcLnPawCf",
  "key41": "5g8sBcBRgGMQeARqhsJNcEb3iKqWpKjFNTJNhSd4GdSG9jKhhVSgbCUPSYcGJbzkGNvaMQF5VX7mCG5BG3dUgZTF",
  "key42": "2MPr7vR5PoQ6GywYHHCKH6bQSdZdxFbse34r1gWoJbVuarW2qvq3BmcgYMGbJjuDSkHUvUv1LuXi1u9dqMZKPrPT",
  "key43": "2W6jQCcAyeRg94cXdRKf6oXBBZq8rCSPdkutEJg6r2HZfS8CZ2KGrKNHT6HQNrnSD1oRJbskkjR13fvfvKFxaYK3"
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
