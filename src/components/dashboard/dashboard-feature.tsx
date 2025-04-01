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
    "aizdrRFx6gg3DUGZvXfvBL3kTJj8wVJxFHYDCHsr8WGpJgZ6gKRqiaGXwY1Adc3AkEgzdnJ68VnuUfvUfgrY3Pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zdVrt19U9BZmaT4UZpL4TbytQEHMa6GFMXMTiCqoMQkWcwreMCZ99wbwrCJ67bwUNMJnEqtmswwEC3bbzPemsHD",
  "key1": "4QHfFK6d7WR5pP8sjwWzgkU5oApKTnMFsyikZAakqeCgYFSVdcf3ZfoPZTQGfhQZ8cFGGkfjqEJh7BLJh4jiUrsG",
  "key2": "4gCUGAoETGFzgLtZzMn1aUdTgyKrb9qURmQZM2e9JKqjEKpB2rpfiHBCxcG43nM4JuF8MbSbqrxe3oViRG76tKk9",
  "key3": "4C34TPjfPCjfbCpv3eZHj8xo4E6QVB7Z7AxnzSqaG2ijNLxaNCCgKqbKXRbsrjbZgAc4Xosvc3mHyN8WYHPg7vVj",
  "key4": "WJiKKo7FBrPJNCtX2QWQ5b4aa5k5d3DDN9zasZRg72C7bJiLknvnEgfBRqR5tRhd4Sx8uJnyFb1bkaKDu9PvWkF",
  "key5": "4JDZo1i5x6A7e8b1KhzRcuPC3BuB2xwedJkK7w7sxJHPg6G9is7jLASUY3JYa1AyDuHb9eQCRnficAT2CUqGodEi",
  "key6": "2B1xUqYdmTWJow2fiwUYupL3t72S2DqzQ2FbztW1zYPp7ztJeEzsqp9yXgByuBPiPi2zxEvPD8YT1kgNh86P4HaZ",
  "key7": "f7rsYPhnRD4nZAmP679pdFbzxeHFZXTo6CS2oDTMxZeqjSesTEDiuazHgcoHtKtvT4vm4XxxwpraKc4wFkSBFSM",
  "key8": "3haGK8dem6uLHU6pUdwP338HuMp4XWLPsYzd6r9UmdExZ1TWJPtExRr9DF3SjySMxaUsYUpwKrU8pgQYWb8xeFMr",
  "key9": "ALCzRt9fQ7BsCSLTHr186UTiBxfx2u246Qem1H9PeK5LnPirihUuAmjGRoGUYbPFp1pd7n7aqtv6wNT16YS3zdT",
  "key10": "62U67m5gf6Nkqqhwb7giurc1ARQNsXoNM4p51azimmxZvxceCibHS5QsGvqF1oPXV7zHZyAK6euVDpidBz4nbTGM",
  "key11": "kc6MMUWBgCwaiDAhaVYBryziqDrrcUkGdvWHwn2hHsP2qg4Q4zHM8oWVPrHC8dSubmzDLp9zD6Sa6FVXbTLuePy",
  "key12": "9UCgJ8UnE66Be9FrfysoGaS3tibwcXUYKHoazGxQfXt82mSeoK69PybbjzSYPpiA3ACwffEppH1vznRgQJuLAc5",
  "key13": "2aBgkWu7nrZnohqfamEw9wBogVnuvikoD2WZ61TUsscpRKLYcHrY8JpjxuZCpHWF557uuKFaDjXLSKFct9pjWvT8",
  "key14": "2kE1DjcfGAkhnZyTWYgXXVNQV34duXXMZXwpxcJFGhKtvZcBrHDvgAYh6zEb4eBtYnSfjgHQUtTcDPEErbiHN7hQ",
  "key15": "5sRAWDAjx1Tj157wd9G7HDWEn8SG6DxXjFNuBmYz1Qm3rkGu2AAMFmo2niTV2KNgbMy9Wwt6sZkU719748Mbjjid",
  "key16": "BDMUz8ncfvdesNyEzHNDjrmHiTCmRvDkj3b2ebp6d3EW1Gos1EHnwFDpX1xCCLtbXcJMnSsSnu93hG3sm3duTus",
  "key17": "2TYovQYH4ZRAP3k7ShtWsvU5MGmzomvjqxzAWw1BnuXsXvd1VDuTTzuqJhjwBBKTMhE9JLbEgZsWgjKkKM3mndiE",
  "key18": "2NzChf97Qv2K7u1qsciUTrPwyxR5sdwsXFfooNNbDA12rgypG8RWyqAMDDMZjkcQ4eJAZfT5fFKxgGreNwVqJLCZ",
  "key19": "35GCEkXAbVVaggr3daB9CKWEiEHGsVwaHcHoHfDpmKnPTyV46KfV9kEgTrWJVuDs7hzBVWGR49rnKDdasJk8TpXw",
  "key20": "2FWJSxTdY3LwfuM2Wmk6W8JiujZrR5JhUk9Xkesa4r2BakAR4ZwMzaStKqeNfmTqxfsMNA4GkL1dQhdZq9b6oz1b",
  "key21": "R8z65Hgp2JxqHHNCAjGYw57MjYK8NsN7Zuoo3yYf5F94ULqd1gJeovqgZHuZzdrRq6odfZ8hNtspGNdnRY45aF6",
  "key22": "4ZLhvbhdYnMbDDF3Ns7gtn1ZZtYnHdTy2nJTm6pnK4FBcTEMn5WVzhkukKhxeFbPnNFyBvSjHvvGjPnH9R6AgoAk",
  "key23": "Cq2oFCykFoE2LcNctqa5c4KjmVBruySMGkMLjYJ7zRt3R8HezxiprBqj5AnJPXd2wx7AhL4wJtY4qCw3idPCGeG",
  "key24": "2sK8X7pMWRaSV7uf8tJr7xU4723C43gQve6xTvDRRKJGjgjaAKsM8Xp6MozURnjNw1gTCu6AXq2XSfRH8fPZTUV4",
  "key25": "KWZ3CdD5PgEG6peRRaLWpoioJEszTM1pZ91NdUwtuX5QAE9c3tNUC4UkbF5KmEcHuHWhMPYhWmzTrERgX1amry2",
  "key26": "4kstnLnKVe896EqRSEHoYzdreg9RT1F7vSYJTPvCPmxr2LYAKzFoa1oyNzjVzCajGMmVwg6RYkGENJJgbuSKk3rW",
  "key27": "56u9qQp2XRmrMBcjjWfNpz8BsFBX7BQgtyd8XMgZy7yyKeGCvuFAF7zBX2Rpt29ALDj13sn4h1u9U8dHxDDpJesJ",
  "key28": "4QbSzcWkLH49bsXoQJj8LavHXkkn5f2qhBSXBxeRDxbmFdHVqHL73aiFxFV9tQ5jHqtFaHg1d65WYeUre5WbSQ4z",
  "key29": "2vrMUC5tdGSLc8pjGud9m5DXSQU3ARJPNXXUfRiDw3mTj55JmpJ7fpqu3vsA8XYzH7SYn7KzTYfvE1gBLLkGU524",
  "key30": "3MTvYFZTZcAhyU4qT2ZcARwH3c2KFyhjQ7ToXQrN34dQZfGpWKCA379FwbKpJachDj39k2ht19i1MTHEcGNMTrBz",
  "key31": "66AaVAa2n219AGnJnGpztz4SsZrnLgQgtDiTgbqydXvVAfsStx5qzGAt82cNiWkXLuBctQd3haGcYdFVCnxWNbk7",
  "key32": "4TevdVB7jvDfKv3GVCkvdBF6kkNhpbyfBN9H6ZK8FPQA2SCVZvZstEExR1Vr3ZU9X8n2GDME4L8HqXnPZQ32SKGG",
  "key33": "3Gtpo9fhxHyydPhnqUBEsXZM8aGnZHCvHN8XshH6pSHEavdsTfHNWmCEtFg18Ljj1bcVTmvxoQpgrUbdfxxJcedB",
  "key34": "QbwVSMqHSSAAKdYScZHdrGDHru4gMPg8FswpKnSB3HpBmGRY6p16NeFHmPhaBo8PhvyGhTSRZTxQ9JknWFGgSgA",
  "key35": "5tYbdey2we1zYhwwWxw6GCivhMeDRw2Ebcisr4i3JZ3VjFoEJsjsgJr1nAUagoez1gtFvhe585ASeaHPTD7ZXuD5",
  "key36": "4qB4njTJ9QoSepfDqcBQrkSqSV7QShctww9dZKVTTsNCsHj5fFJSSkCVrPupBNN8fADoKWz8FKn91rXSMz8boNGE",
  "key37": "3n8ekK5FBNkvHAXqnXpZpnoSdXbprsdVnzY47yUQ8Ro5niXuZTV2iDspZNtqQ2HBwoALMJjgdvA2XRrYsAH7v3bd",
  "key38": "qStFDDLhUpzPXTXSm6ESjS9x5CtbBFVeKKKbJBKN9GuEAodecDx8sjRbh62fz3FJcfURHEVTBMT1ZtRgmNW4BJJ",
  "key39": "NBUMjNjLQgSBd58c5yjCqaHGWtTT4EXzghGNCZ5jkEgreXs86WoQoqs7m9Vg2dKoYnrkQqxX77MmW13uW75PVi5",
  "key40": "2KTL15tCsdfjJhKb8S4wDSB6Qd4JVd4W9bLqVH1C7GRZhYt4b7gByhnqWdUbYinu6uwGFfcNECFd2gkWJXa5gZ7R",
  "key41": "pLYoC3LB4AE8hjGoUmi5PHPCS2Cxs6icuqfj5pFZTEGXsNyxbtew1GGnZSFXLDiTaQk8QG4QyvZ7ytsD7HHvvJW"
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
