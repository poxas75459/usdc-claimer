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
    "2ia2yoxdqNJBAiFC3F4K7WCNBueJbUZo7Q8i78p1Eje598dAo4ALfbJRv6csN6m9DjndXrvzr8CNVuVPiT41142W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uCEXU69W7VndiVEC2xm3cQ6j4rAo8J1YvHQSx2T7MwFqEge7P2zPtJ3p5zcHPDqvuLxZwoC3kiP18cB5JqNTP6P",
  "key1": "47bJb6PBzBH2RFMEGWw4QPhQmfZETkg7c1x6J9dDrujWHyFu1JR5p8SvfHajdtGNcBqGQK6vGPwgxXx42LTeZj64",
  "key2": "3422P2coUJW6Lc7TMc6UNoPusYyforJAvKvp8U8RsFGJRgVU5fcifWhCtAXYXNx9vvvufeAX6qoXgHJLCwQt2XXE",
  "key3": "5ergbJVR3emG4TR6Ed8uE4zvWnQVgo9SdeGgZHxavuwYhxpQkbFr9cR5FBMuz9t1NLeZX6ct1oLXUgGqEo6M2Sce",
  "key4": "5rC1PkEViQjvKqLY8fD1sE7Vn8p6kR5AVReK8JbPaStX33awG9Ku8gv23YdK6zy7vxs3UKc4ds1Ha4ca3PYF5KJM",
  "key5": "ooBTuJn2f6yrJ4ZaQJhDoutHoe2SjKGW81TwvFzCTJcXZ1sdMJR1PpiaKi4Q3WniHmwfbDdusnYV8uY3PtTSdew",
  "key6": "3DfKsZELA59TfLcDszgLC36U5PVnyF1CqTnSaP46PvNJ4qwYAC5NuPm5v7v4cW6PtYd5Dy6gQ97g4xziuroEn52a",
  "key7": "5fgZjkz9THbYaVA4sxnsfLBHoutFjWv6nBwdU22tamaaUwnmYCjqNEBddEPETp9qhy827xHzei7hfa7vxtNFWy1x",
  "key8": "4Cbmqa99GpfCqznRgzMfgY15PmuJ5t55ursy9q9QAaAVhn1zttBV4PwrkRCfXqZaVQ9r2FNgLDzAwXTZzZGa4RzC",
  "key9": "39JFadQs3YsGV7zZidVyUr8NudC31nUuJTryPke2cN9q8FqgnKKM161Rzv1hZVGAEnzpqyzV9rYsD9DxGhCeBMy1",
  "key10": "37YWtWiH2snRRhHMnsAa1pdHFwDe9Mgj3nFwiqkp3n8xPBBfMjHJgkJgGR7CzEYZhiFLDjT3J94upQDYjrUkoCdn",
  "key11": "3qaiNauiiDXQ8JMR45WHyEMfqgsKszrS9u6Z8WmadUWMUqxXMSyBA96w1ZvHvwaQsB4G28gRRTKPdPtsLttxpnT9",
  "key12": "3MfGNaPTW5mSjB6uiHGK9HXbinZXqA9479F5vv4M1XYN2Wh16dQEM6sSV1pf7opgpU3ricJyjuD7aDtuZV44WnkV",
  "key13": "4aYXchun4m5pHFSwFfhZZRyDCZ9E7jhA7xBysDDSW4mTSfLY4TLqSDkKHt1LXsAajA4sDs28X5QCNY77NNxvDQ6p",
  "key14": "35ZYJwaonsY4gTSbiUFaQ1pnN71TrbHixkdVFKKWdpxAXCnpa9mF6UzH8CZ3oZPAtro27ogk9H5j4z5sHHXSBiCK",
  "key15": "5UtVZfmnLncf1Kr1MMH6ahkoGMaPRymFWdaouBmaSKvHacvXNjYaaURLZmrYvGeQfvFsokY16q2HRHDirhBkxvB8",
  "key16": "3PHCPJuPNoiYTGnytEErzhHufhGsHLFXUr8mUWoDU7zoWY5FbqANtuq21Cp63WrSdobj4iQR9BsrT3rpmBhXmD8T",
  "key17": "3ssVVNthD4nmoRUWv4YbfbqhDzN3LwRo5pStM8qj9fDHDTbtRQgsPPGiCMyroNGdRQrDyGWxXzWUfL7cFRoxrCvx",
  "key18": "4BcomxHZaYAK9WHgAsKSmfcDbphYo6AkatM544pCCFQqWk7w8HX95SEjZvnCdqff5C1S7NmNRt2fUa88hXridAqw",
  "key19": "2fiMrtQyBoMHc82a8aoKpdwB9bANmWXr6xacRKBQpTPmcmHuDiBYGqUXSbcSRfvuSc5oWM4c4VtW4iGDuo9y2QqE",
  "key20": "3Nq3FwhNA2LKQiBrqbPPHTcbs2Dhcxi2XhhZmbkx7RmpFAp2doyj1ThzcDSN8ZLRELACbCnyd8KDy5Ri8V3RcjxY",
  "key21": "5sSEjqcKJtcevxztdeWet4LwdxCqnvW8MLEU547DYtysGuXfsvVkHY2YxyupKQ3q6qePJQDGjPPBJrtUu1xcN4y8",
  "key22": "4J3tWDeGQQBsR92hGY4xKkGtuHGpj8JaxxC8JHYPrybVcFh8NjLEbYaMaXPYcivPA6PaRBmEkBYQLugqxbdo8Y5z",
  "key23": "3UDYxNpPKruoBcedXx6pyN1LoEV71vxGfSYS1j62WXypWGt7speREC8ZLU3KkYTeYQefF1TrigYqqawDHMzJ6GFc",
  "key24": "52rf8hw1FRgdm4hBq16dcC45fvnwmPVKcGyp8mkCVepvZ6p2x1WVwhgvQdggx5VEvRJJE4oDEBVDpjVFWLYxxpPj",
  "key25": "GjftUSLxv8Uz7s3gTHMryWbHotNjAc8DBYUE8ESw23zasi17UUQeNXE9upZ6yt2jBMQPihZvRCAoRyQwJdH3JLS",
  "key26": "5DsFmKh7hKtVpX3Mf4RkhK12rcZVb8bha76P9Vd84F4jzfZuWHkegGcywSwyB1vQSHdiULhWi3VibcX9peVLxmR1",
  "key27": "hTCq6c8p8538ckNi4S9jeiTYJAwsiCBvsRdzkf5tsy73GvNn8uS1st9JaM4GiAF9DNX8sVU6oJELmr7J92DWYJB",
  "key28": "2YLgbaNdqqYtZJXNjfdjMUKAaYCAsXfYCkYoYiri1ijpGHh11BV8hgP32zxyMXMCu29smhjRpxJGtL2uSoZKTFRy",
  "key29": "SWVKeyRRyT3oheY7mT5juatay4aHSUu5ztxjvYvY9Z82nWE44n2Jdno46x5cMy8Lp1fG9BHqaHAnSqVbiF8BEN8",
  "key30": "yE11eLbNtqHd7YSjUcy9hqiDq3ittT1Nd3iJ6bYm7wnuJytKSL2FyMuenuAUc7PhKreyiRUvbBToyBPoV87XF4v",
  "key31": "2AWyZTJHQCm9dfCQszeHRWid64FrT1T6TUwwccUEbK3gT76c7uXe1wFVGtqrRXtVHfinHYLD4PXDCHup89HdyKwN",
  "key32": "5Se7PcvU9snCAfqZinBf6qrQNJbrrWvPUd1W8RzGhPZf3GfmLUbPXy3rxYbYV69eG2DafedkK8dptB54cm2bYPYx",
  "key33": "3qt25MF2DJJBqujKWVsMRRT1V96o7Cug6ueDXsWRKTDT2kA4sZ1XHRgKRSMTbALmDnpqYXi3hfdiE4RXXUfosaC8",
  "key34": "2CXv9JEpzcd15C46FAjiReVYtyQrJbwpEsuyMz6rxWFPJvdxG4yqULGrX2gcWSQMu9jsheNZjNurXbb96j1dveu",
  "key35": "5i75TqVE6QHEXLqLh2Xs78PEms54BKn2Jyeu57J5VDu7cdQSsFFLCtjvskayvUoyPfn2jvjXTfkpuqfiiiTKrmbf",
  "key36": "4X7grSgb9sZtJE2DYLkDAus7R1ReJZF84qthrfnuiendS1VwxGWEbosRuk7oMeTiE7XkLLbp5pscc1bGNiJqMqsR",
  "key37": "4njhzjt4KVRqrbwrkuEkZFEqb2hzNz8Swi8dE3pBTHMebLfba3Yf34WtWDNQHUxBW5AkaFwfLczBBjQJYNYnEsTu",
  "key38": "4NDQiWjRhCTscaoJp2oafAdNdhrboCQZ54mx6xp2FMcGKMR1rEqPoQMTWWuujkvtejawu4wzMkwf3Tm75vUuCR9y",
  "key39": "4kvJMFSnZCEUzn93R7kQw3VjMNVFUeUx5ajW6oXohRcoMZGznwZBkpS1h3Nd6uEwxzRmnEd5ZMa5psj6DDxWcCYS",
  "key40": "4na9nHwr9vCtqDveCPMP1EwnmsbCH5Gk7kDkWGhnTaBvfSN7np112czd4gUvUUwp7q39FAewDGdwdqmjvp4yutXy",
  "key41": "5XC16XyFWpy1uk7ihsFdDzwwYvvJdTFiTmmVjta5iFBaXzcbiirH6v43rfdr1y3bHhwJ69PxgY1iDKv5c5yBFVyQ",
  "key42": "dUaVzAxDDUSasXLyuY4ZXUmtBA8VSC1r2GW2Loej4xqdp916zbsBvz5ePHC1oFnNvoeQ2bmivVeJS2GdNZ32Kpm",
  "key43": "1XUAhM7Ub3HPZKf8L79xdhbciWdjqur3wzGALtgV1hRiSrEwoHqWuUAys1DFxMhFtYKdpE8ULqs9AJMPbhs83tv",
  "key44": "4v4QroyqYVbQB6e4EZfmsoP9WGQZAxYVEKocAf4hL1CqueBaJmXrPzFn49ijAgARoWG6DauY7FFraUPB9eCxZgrp",
  "key45": "3JngRib2zqe69NhU7Fiwcq2EpbP1MfSsB2LHEM1rNdbg9YQi1nsVfMvhWfv2Yh41m5rYUcE3tj2a9L4QirVKvHRe",
  "key46": "5sGLsygE3QVCuZsnZmuBBxM7sig7cqqBffiD1sxzewpgQaG8q4z3GeiLqgjSRh3WEJ4qeoAwRTwPYtGw1FEZXYkU",
  "key47": "3AjhHV5gGJL2vvpsmdEN8UzzSFUYuncpCXGRjcj2JMYnZMWPnqKqrdcoM4t8qXfZ5F3VT2BsDmjmgqVg9D4vSx9M",
  "key48": "65iHBbGMW5qCKHtTipXu9WVzSMpSf1RZvan1os7sjYvncF2ZXyC6p2YzJEGz2BBopdJ5tL89WuDCJKgDwRd1uB5w",
  "key49": "516R2wN7QYt5yhUZoaegMBLMNYgbRDoyztN5zapXCENQYFyjeB8mb5pojfmAgitAbGH5vqbj3VWwTU9voMMDRq8N"
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
