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
    "4KZRTJBYBcuPJAd6zapvgKQJ72YvbXwUjeoMKKrWwhKUL8765oaWDLWqepvmHwbV5XBKhaNxAKkhTsD67MdQcSDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oNzLdx4CW5FxeJENDEc3xtDKyzpxkkpFkjadPA7RScgiLrjgFcNivgChYTzCUWyKr7AyCBUZ9WcWUXmRffpJrHq",
  "key1": "5uS5kypaysZhzzRBwcXf3SWEW5DrrmqGYvxKLrRApbQJDeKr8HmEk3wkpNT1q1yDC2DvNZMENdaNcJbLtiQCuQye",
  "key2": "39Mzv9fnTHEd4zt4Pp2xWWPRRMdfnvVSBQTkKZrRFST6iiMKnoyw8taYD8ZnGgaRRCA66LCx75iMtyJZ8TTMC9cs",
  "key3": "RpAEesF6QmZg9LpDn7CRXRLjKnqc265AFJfpu6eJeN8wrDj8qtiCFnEyRz6bk9o7E4Szj2j6LHUL885F4M17pQe",
  "key4": "2rMEgmr9od1cunUAW3NgppR2JffYYMZk6qyP1Az6AGQVz8LLAZnMprryADU6tjDA5qGj3GJZ4UdULxS25Yan1MHF",
  "key5": "2JY9njHoGhLnD2SqXpjXBqL65UZ3R2dgit7g3g39DTnZjhEq6c96FDAJJxVL8Pbw2BH6SNGLzVywCHK84Ug9z46e",
  "key6": "2PMxvs3VNGQxvUcgs7WT1AnGW6wF4Lo2xV2DNy55DmukWLTdFMAF6Yp2xbX8AwiCLHUUZbb6Kc5ZuwhxQt2rbvio",
  "key7": "x8QL6mfoSRBh3hEApAR3VgD4S7rb6cLJV3P1ACTgZytBpdM4C8pk6getVwCiRk7NSM8mc1LWZTMF5XMSZF4fCwf",
  "key8": "7xuSzpSGMfXoS2eouU1EzKQtxpziQFoSHcQJBn8tZb4t4N4TDg9ygGjArmd8h9it6K1Y3j7x7oQ3irh3SgGf5Vx",
  "key9": "J5eDPJ3yjg1ejca6A6SRYCYPH6uFeLroPF5DKccohmdLx6ritcniAuRqkVUsQMwDT4nKeYhbUrEzZuSmNjHcQGb",
  "key10": "3KgWBdx7ASaC3rFMoFPwShdnnBcCh61thzuzRVEbTWW8t5gM6Z8HkYUdZ1AcrDmSe2eQdEAWJ4aVdNxUA9az1Qtq",
  "key11": "4T6AB6MpSqJccCjPbVMHaZgPGGffb2NMUWdM1M3vN1woAGj53J237XDEFX48FseP86grY4vePnNMARY5HhqKgYjY",
  "key12": "NK9i1eFVvqanSoARp5ELvxhHWVQPJtZsmaiaMLd28x9NGfWozxEQDGpCA3E8EqSkYGUhvgrvuZHdijM3LrYwDGE",
  "key13": "22yWhFQBFvrqVuEUbuPGKP7cTwVb8ayTCLS5HZEMP9k5RB57xvrLNSToCX5XMpyCweYe7SjC1VMaZP68tdEMaQHh",
  "key14": "2skFuafMi3iBnXrtmVTsoVuDP1LnWrBbxHB5iU1etGLfHypWstKA5Dd5NSgetN2pZztKjFSaY6UBR9xefxihyTp4",
  "key15": "4yc3LvxfKuhyTBs6z9CU56Zp8ti9Y3TEUmzRDzfy27TvA6GmZSm3UUx8wkcbG57DDKxensBBfR5zbRa94a2GTUQi",
  "key16": "ECtJVfj32TGheNfKyeD12TjCdV2pm2w4TZ3wSAzDrbUJ8Yq1VxRbXKgyxgxnAVEPw4XTkgjtTKzHxDumbJXwiWj",
  "key17": "2EUXV2Sw6tfFWHNoBnbmKwFQmepLAc5AxFwfQZwQfHupC8U5aHVkh4FNZXqvesJiWsxFATycvzm8HaV9oUFW6RVf",
  "key18": "3EDPapaZKY8opTXo8HNDQHhuVC4wnLXCSGu424FUbNaNYA89VpoRBKs3t6tJbouKeEDWuwUFA18gYBF8AErVhgrM",
  "key19": "3nuyAWpUBuCD397zAsMqSaA4LvtwEmamHQ2SD7XrdwtPv1dwsJSNr9Gdb7usQ4CLsA5yScE5799LTWdLvJD5gzJn",
  "key20": "2bHUgU1M2ovvFJeH9NjbvGNYXVA9KfWTG2XYbrTTva6jkfVYXb9s5abvkDsFyV4WzL6ooJXhiepcgxijQLDz4hnq",
  "key21": "2uLS9usqrMrowSumtsJe8dMoBwVZWB1zJLip3Wwryvwa3i2qMPWv88GeP82AtEqxY4x2aJYGqdXBSiuDneTobD4p",
  "key22": "4c1HH9SZzR8cx2DAUgGW2p8CBwYgcayTGCa469qukC1fqFXQGm5EpmQwLQT4rZtMX5hUbLScoFGbaobbAejFS5GT",
  "key23": "4tWtF5iTeWNsBsbd47Spvhg2YsJCQL6frWTsZXEnnYh8AnyYvPDCMPGgYft5H8Zzrc2DzUhbeUNBNtLftBydXVFw",
  "key24": "2eFH1hpXCbmaQP9og6dnEgEAbNZib5RE3wpQV51LbKxkZBTpyhvUSA5ooKk5YaRk1WynzBPR2HgdoeMp75B36vAK",
  "key25": "3BxCGRVg8aHDUjSAV7Eg8ms4tsGn6RxGyE7e15dLPovbGCfcvNN8H5bdbee4Li6jmKCJ72XTzFnyS2aVJBjxRcuX",
  "key26": "4N59oiWcfJc9CJYvRuhaSuxop3dUmmHvkWUmTwbHrgZZMAaLGAp8ak9naJRm25SPFDQw7g7gCcH9BgWu4aH5CFFY",
  "key27": "5hduFRuFhbkPekLpHxZeYLmNipQGfWr7prbq5aya2K4VSm4ZB9CBCuMzncQ5hTp5M8KWwbXtkRtYf2CEGv6VVibi",
  "key28": "28q3gzfpmKmDfdD9PvgK21zKgPzi9o5MH9c6hfcooXNLDgLsbfYN8qoHZqXwGr3A9YLANgTwrZqGN8DdH2JZhqam",
  "key29": "2MB9wwTi5SUTY9rzFHxgftCzUi4PJLbF2NeCVhmFEqcRsKr9PLhH6GnMqGbwkEfYfZoC8gcAQ4ie6SeDTRxKLuNx",
  "key30": "62wm1p1trii5i9t89tXe3gnfaQVWj6KG9x6amyKqodbYNN7L4HM4ePyn8yM5mVQSKWwgPvAbwFAdqaYxtc4EkfMz",
  "key31": "h53wPiBi7VW81jY4KWzC25QrNAwQNycw47mY2j1ZeYzVbPCbKxo9zNja2nq7MWQWgR4MKu6CNWLFFcVh8v6graS",
  "key32": "66PevqWiLrwwMtE7FMvHKYRQxjpoEUQEeqUpZkLZAGwXmvAJ28zc1MBrG3AjcGJUXBmouFbxzYcxx3qqxtmBsVzA",
  "key33": "5goCDEXmpkxSk9h6dcn3jbyco7dghxbSy3V6TLFESuu8dSdmatTfSPiYQNCQJgmbudk1XMgK3cywiiiEcqeNUvye",
  "key34": "2URRasT2d5YgYfumQmcMWF7vr7vvKzVV95JHGPuzihLMTYaoLxQcHjM5ZR2f1fQGNbuUj4qvg3RUe32sykRFiPmY",
  "key35": "81Bp9qdLq8yE2UqEdJ4hEdGC8K52MGXKmpYTR5ffDGyavc4DhANBoFH889UXsq9FfGnjtAqXKLyjW5ewhKVhQ69",
  "key36": "q1smT2i87R2jA1BKj5y15CzbjAXEoYQTYbrC1Xk2KiAv6cnCe31wQ3EwJScj27RUaqsM65WzmvXGc1cCMfxuLYR",
  "key37": "2jSqZjnrEf9DrmdENcUu4Amh8uvXRwbKXkhqV2Mfx7veWUbwxMs7aAUKPYCDjXfyJLcrtsLKv1QAkpiuXHGKhy6U",
  "key38": "5MmQpZ3cNSdquR5TCZtMJkDixNSYSXLBEGxRBDi92MJCDvjt2zS5pJf6A5k2dJXjEALtHwT26fezgAQcbL1MjqPK",
  "key39": "5hvSS3MWUuZnAJdq4AKaEwxVLizA5czQQRiCCWY6bxrepGEmBBzYymwrQ3E8ws91tfq8Hwf1B419mVEXUbJ47okf",
  "key40": "2UDybrdC7VNCeju1YfazX86h5Ln2H3ZRSCUTGKzUDtYTLKU71F5ygHXEQ1EN5T2J4XcH5rgjwk4m2SiDZL7XUs85",
  "key41": "2ZVNmPBKuwgfrBEdqhFSQt273V3grG5Abi4jwEJZFETjetSSTj15tiUGt8cFgCRJKKfTUmkbwePtk6g86gDDdicg",
  "key42": "2yW3cVNDjKr3heSGzQz98abQjMw8RJUriNE9P1qxHtBUaks44TaHLAUvmSmmKn5oDmMeC8Yk6iaRZkNtzGANLDfq",
  "key43": "65MKhVj6LG5K8dRH4166TgjmvhrrWmK3QcvYZ6cTXmjSvj8wCCSivA3ydzebY8nWNAT1XSA7d178ZvK9d29D6fUM",
  "key44": "2vJAfF248FCKPSUdfFVi7A4idCqQazCzFVpBxs79JDsqKzGFv51GC5GUsrHkc5ikFmVYrVKVTsmpTnDRuXYDx55f"
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
