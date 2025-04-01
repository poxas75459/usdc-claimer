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
    "4YUbaXyEAcJFCqN5KhHdTJpibD58igMDw2Eesb29JRgbSGrUskyjWdJUcDveueD8jrTz74Bat944Z5f71zwSnj6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3orFieFtGdFSUD7s8ZbKYxtQ7WEVBCbY9VznZBeRB7C7nReMWFtNnQCL5ZJ6cH3vXuJppjfZVwRGGo7q5SLD3i2M",
  "key1": "4aVmNy4QxZLFY39jGEciwhtfmkGjW1H1mHok8ELZANmG7od7fcRd7JCVUYWjk8FR5w37dF4FSZhThUw5vvDeBk8u",
  "key2": "6Zo8gHy7u2MRHpAkYTemWTdmtJBSbZms2f16tRVpQckjjsafxQ2huiZDmx9run455trMns634AxX9rpgw1oKiXm",
  "key3": "2bv6KR5jWUW8VCn51dhTjEKfkJYwg6EmgB8BvuGjSr5r95i46ub9L4kMFThQu6NKvAKUomdeksPP46iBtfbNykd1",
  "key4": "5McoC3f9xAnEUCRSoyBk89aQsT9t7B1Cn1nK9j3r7oBvDSR7hGhH4sz9utKmx7r6kjbf8Ck5GwFdxJKLcWb1DYbM",
  "key5": "4eixoW8obcrKk4d8my8sjN1Rz9kRjSaRh3jvyi8RVaWdNTjMJsXN7BqL9XPVPzB2wV8iMziEqama4pcZyBSCyuw1",
  "key6": "5j6geR2sFWMjbpXK7ran9J6PuiwyqkgQQXWeLB9Nbcjfno5XvfeoauQgg77H7QocqncgTCWenTcgnoje5DkyHnf5",
  "key7": "5UaUcWJMuvF74yfr2mf6KnF64dSe2sHa1xjz7vSzcAaCaWhkWfrgF77VAUVhiakHJXp6Tf3yDzKh3YFRym7ZQKz1",
  "key8": "53j2aQxihYUgXAhbBFhDH3EB7fx8caxkukVuSKCEmVAN1U23jeEni1wLTjv4wBwwaVx8TFfXcJfk7SF4MFLoTgVx",
  "key9": "5dDtU9QTZgLELUHwDp1DHESum4QSz4XDhtJwvK4DA7d1NjKUt3taAfX8EKcqYDApMZHCFNzNNTZigcQTkN2YWBtu",
  "key10": "4vxs8tXEghk3s93as1mh7gRo8Me7E9djzuo2twyvY8ffMekVQYTiJNase1DHRKdV3PaQUcoDQ9nV9TzHo3M3y76m",
  "key11": "5yJpz23noTGKmbRkfxkvuKbLhkEGk7FPHjJbKAf3yBi86jZtjDR2pRSVfia4kA2BLDt25Nij1mEx2AVceoPcMJjo",
  "key12": "4A55oWmv6FndUrotLkmLR7zew9fixXKb3hguineBVovcu62mvQfcYdN8NPXmwUXVwknzzotdfNKyyv32hSy8rxjw",
  "key13": "624SW8GpFcLgeHLZBKGXRAQnpjQaE1Pi1EFWFqMQfTYW9KEu3MNoUVJDPC8Zzf7E6gGxLnjypCMPh1wGA1aoSDG7",
  "key14": "35tAdodBpFkm4DJLiWLFQziShYUEpB1BhtzRjYngVvqHnjmYCUscYhNBcCrwQGfXk5pSvHtH3pBuBFF97WZdWohS",
  "key15": "3XJpRNWik5kjqSJaGigr8weA8wST31vGNPbKcbqzjbBqfvsRz7ypFb7rje2XfLLS53uKifMwAhZmUFKK3WjdjKuH",
  "key16": "5vtkHX3dAn9E8BUPmoHMh6gWZp3Vty9vAYFK65y4feGThYRvgqZRVrrC4mQLnneDdzWZnamhVPgt8srjcVkcHiyy",
  "key17": "2KCwDZyRZoUcC3yQ9Y2ku8CzVihWN3zvSa5fsSfHNPb9XBDabyY6nHkMMPq1tsKhDKFRyL1tcJK5SVtHWmDof7rR",
  "key18": "5efirS4Hmk2HUE5RSp86oyqhjmJf41fSZ7co7kjKD8NdvBqggz5gAPk7hxAt3EQZ5dVNUqcAqoTaSDJQ3nuzFRay",
  "key19": "2TAZWZZmSobgf932AUig5smFHaQ2eysxHpNbc6gkjBti9Qtfy7AkbEZEWPgD8jXa5wZPLtSn951LC7aZ32Ueim8A",
  "key20": "3UogFutRHxsCP692VBcbaYcN39xKxdsfWfKPptsLVg72U1qEky5mYnWFb6yPGWBAwLFAAbZuRb6pUk5GjKaq2o1i",
  "key21": "X6bnrCLawxzhXNRurucBkH5DkZS2FxpLV6uHPJbkypyeJLWAAMQUAwtb1bPCkA3muU1w2U7bDcKQJYqQnHbXCHq",
  "key22": "36XbXv9HfzWdxGDrNeC2wJwbBR7xK3ZLrXFfKGzRhczpWan8eeedxJx3S9FQQFeNm9sTgSzXsLkPbWJC7p8YXXAd",
  "key23": "3scpB7XxZjGAV82xJB1JV3TD77sPsFCBMddZRuxgDnfsKi6fgzbYmRXYQjFN1RQEWycf8SC9wuPCWikzQGM321mv",
  "key24": "4Ev6i5dLz6p4RoRJtFHqVxoJXejVUJ1PWYicoUwH9f6saWiBkyBjTN6NKfA2VXsh8Bk9wYcCJJ6odxBYr7PKAQKb",
  "key25": "yBftNq5rzjmEDj54dn7BinhY7Zmj53fJ5d1eET2VR2KzfqwKyasCbZD4FH3bq2FkSZdzy8iz5TLuQknYkStumPz",
  "key26": "2yZ45zVqC4UFHKXXX1tEBgrzDJ4bgGCTZnQkKyGbdSxvnMo6BCjT8rYzqY6ZutSXiatXqdmpXB8aQCSG8Bfed78y",
  "key27": "GiyfJ7aaTowyR71AX1sEymhok7LZm4BQCr7V3bR2SaMzsVajA8hQ2NfS3r6BDmNDg84zsHeGrtSzuaw3mbaXkyZ",
  "key28": "F3BaoV9bim4WGGho91XuXUvNhYYUpJ7ytzb1HAPD19h2Gh5mA6UNtyNWebZmhS4JAr6KAWCLyQiNrDNgNQJmovd",
  "key29": "5qzfptHNnVW9VGQGwA8zSn7HRo154RBnJjEiHaoNSYyaoVcuaEuHFUoUdpC8BY4JYRnbVmyL3NFpvaTYtR63hJyF",
  "key30": "3hBwA1vDUFbu9rQRFqJVc8vLmu9SK97AmtsQQ1oxKfZFmVBJPtMZ9ZpfFQxYQVJ7BG7C3PGTPGRDTxZyh4NU3nVp",
  "key31": "5Dpph1PwY5isPdPWYUz5HzfGUUycfz7JHtgR3X8pJCxBeGGrtznGAo1cjtSFRWNKqocXcvJyUXUq1fe5FCvG6riN",
  "key32": "54utPBRed5QPuW1nZ1VJxSKmspuswJncnr3caXKgDJuNvtTQmaqZi1MgGYnZk5ESHzsd1Gzpuqo2CAnoC6sD6FWc",
  "key33": "3rh8efCtxH8xxBvQxYCGZW571uPUGJj4c7kAT4B27v2kF6yjksuPJv87WRhRRQBXSDTpWLtEq71PLJ9hfyfU5Swy",
  "key34": "5fC84Lq2hNQL5VrjWsJ76s7UBHhCrsiAAFsVKytstNnfS9XHHWqTztbtWcoK4Mp4U8cFoDvbntV5DNGC51dohMo5",
  "key35": "348aCM7PPeh9wPkV9W936qC2Po5qXLkerZtoUPXm5Mh7BF1QE5ibbbQBZXdJANp9iShLYjWLvaugYJ6BYGSzJ4W7",
  "key36": "67n7kR7LM83y4ohMpNtCS12pDwZbmpTVXb7M6pae3Mwf7DPNqL8DqGwd2a2tGssZVmy3ig7ZZBLwvSvp1ypjKM2e",
  "key37": "hehkF6iGqywWEujWYsK16AYhcFfW764VCe2teutjVfYqqoXkPFTgNLJtQeGvwoL5Eyc2fCtkFeWmPrN1bcoPH3P",
  "key38": "5JkAYr8Vckrv4E2rPYYnQPYZrVg6b9QvEyPHvgDy4wcwM2v8JEKQ9SubaDxv156q88kHTnvA2z6nSd7yatXy4p6E",
  "key39": "f5ecWViJsxtcQuJBdeR5pmB6ejXybtbGG8Q91YP1qL94fropqheqknSmjJuhm8fJme6zr1GZGToZCy58BPvGBby",
  "key40": "5YaMxW2XCAD86oL1ezi1EH8MHQqgFPNUX58B5AN8hvEChW79dHqyMeTMpukPH5ByAdEHyBH2M8m7KaX5cS2YJ7hD",
  "key41": "4RowFfUsv2Rpk2VHwqatLqByJgvnFC45YSRkyjwhPPCTHpJAa9XQJbjfDHUwf9mo3JgCdn8hFe4aT9NNMjZUuLfs",
  "key42": "5c3gVQfwheZqzo5m9L9PXGfjGk8cdpWWHahh2xPYtd8ETmTMhkHrduDapSdERm4Gcw2Wk7mCkGqWmh8nyzhrhBSr"
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
