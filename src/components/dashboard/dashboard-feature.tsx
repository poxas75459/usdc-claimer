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
    "3yb5M9FJu69A5mTDLnTDAUBut16r9WwCMBPDugp4QdNNXh1y9rzniqWHKS3QjmB6QcPLtUgWTSvteihLSLRRqk6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4euPH3mEnWYW8bCmpKy7moGB14ekK86i2oS2VjJBV71rGb5rZAXyd7g9QuR7fpLUsyDSQiyd9cTUDgRUyAAkjqLe",
  "key1": "3Sgxbu2WcdWgLfPVhXDmszpcS7yc9MfTzpx5ZgTdegKbeXjWPXNSi8tcuZMsovMrwK7Xs2QjxKREcNSukpccSHvm",
  "key2": "54qZsZJBUNk3u1gQs1nCs8gitNw4ZFGqywyS8gYio7hvf6j7w5RtP8kZTp1T1GJb3yATydCt58wDkwQekgUrApdN",
  "key3": "BDrj4rGqCid6tznLpYxZJXobP3ERhHUGsdApLNLF7pMShtxbkUPW8SQViVT6Mmp7Do6XHtCePc6YmSHNdwGxNbp",
  "key4": "3xbstiybFHiKcSECi1iU4XVoC6Tuq8vDz2hF3ksKh2z6tXeER2t2gfxvpArX42qfPu39uZcfgait44egW4tX68b5",
  "key5": "3zJKrFA3JvzHh1uQfKYUu1JLLCFedm3oiUdLd6nJ9jsd652a8QYFYyvg1mn4AhuDvJwkvFTpsqSWmPJpqUPyEAUU",
  "key6": "5qtyWqxB65aabjXKrXXrrCRqfMh1tUykQCh8CUBmeWuqajoiupLsMRdQrNZKFij5b9CB8TbeRHoR8XB2pVXxGfwW",
  "key7": "5dGkeLzHiHiyobYa49QtGDDHwndDfjRr8K3MZwjnQPryS8622iF62WSRJrfiK3tZNmkRJqYu6g8cTGBKYQgPxAAF",
  "key8": "2Jm4q2FXSMKmnP4Py34StmxvEv4kAnaXvGs26aY48rwJSDkqY5xv9rQWm95SNXffYJguxygrvbJPQfMVjanxgMYf",
  "key9": "5VwvHZDLotQg366szBUoQ5cdJJwDJoH5RgN2rPQUzrMpHQrHypE9NhGgxHzFvaVsqnBhdwaJzrX4zeEYViF71eSi",
  "key10": "5JYjufLWoEW7ySVHqRTb9cjMMioD9stywAkvgj6PotEnrUX1PyCvj7YjgffKuRxo9obKzpQFRkZvA76iDH5NB38d",
  "key11": "3V2QT7NjfFn6yQtrG98apchfnNk75aZn2dBsKefxoCgk5tmanxexmooXuLToTUvaw5ocaEv7Tzp4ABtufoUEP7Y6",
  "key12": "4Wq6vLuW2SstTTiWiBF4z3eHo8X7rHBrueoez2JjkUFMtJNWXuNzimYUFAY5JTk7Na1gxVNMouqteoBaSWdN6Zwc",
  "key13": "5YzpswNv3s39vHhUrCiZNYzTB5QLMcwBrLLU7JfBaVrnqS59Krn81SXcodyDxogxM3FQA8kTGhJVMfCLWBQT8dKD",
  "key14": "3okC3YGqzcm2qAasYsP96y1qDWRu7BVbqfm6CffnxErZ9ez1b6mqLcBktkBgXYKxMJJY2qYHreNhiiBC1SBKHnCy",
  "key15": "3bUAAcUGXuoCF8dfbqoKDPTDrQhF62LXnWmaosyvvgkrk8CemaKnLRxUyS3wEX2keMoc1oMgttNgHjow3KAekiCX",
  "key16": "4i4YxExFPvbmgevGsCQsZRknxjzaMT4X27K3mm1oGnBb3Bi2SP2UboN424bLhqWXUokjvavy2fziusH5TigDeSnK",
  "key17": "4BZJqJANmcFRKfqudR3aUrDzQQH5GrKFuDy9o3JQRuP7cnCKNN1eacpDqfugDb4GvY38A6sTKhASpBHjnfygDNNP",
  "key18": "3N2f6rTDFM1d8G6Uur7SFNRPkuKevqaNEbf14JmkRpmcZDrMYcf5eKCDPqxkG9P7Z6b7uFSXdgtGaC3mMTQUUKnq",
  "key19": "249oBNmXpJjMGDsWWjNUKmeBN2pTr4W5dVSBDkFF1hg9SH2CXY9oTKR1CrVxdtoj111aRDi3nnYnHjCX46SwtJLv",
  "key20": "3UXmuQV9dT58fGag55YpBa6ejehFiP4iC95Hf2jZYZtPE2JqNaMJuh6gXFu9Ztmsge7ijtSiA9fXCkdac1YPAPRz",
  "key21": "3f17ZygGBpUTk7Pk96R7TkY1txmzfpDYwG6tUtpHsDTVMm8fY4qAYhEMFd2Q37SPD32rhoK2oHoARzPDoZRQuEd1",
  "key22": "3zKtv4Y7M9D18uTjEP1z53MvVFWjkFnuUhajXRwfSDd4CA2swXgPiDAsart16s9iJ7HVLJ8Nr1ByEn5vTPSKA7By",
  "key23": "44SXhTB4m44rzKCuj5KdifbNZzJbCbu7bxvUH7M4Sy95sX4fg5FkVGZzgoMEW8fuKqX7r8v3tisAioVzHmSBb7ze",
  "key24": "2g6miEg98ASbJNZEtFCF6TxPbjnsTErTQdVNuWLGp2p8ctWD3Utg2LmGZUeeVrpC5mWdN7j9397vQ7FqhJu5T9m3",
  "key25": "4EsRggpEQw8b4Gk5Fm95MRwW6uDgdWKcPM1sXYi8STexBHtxjyFgrtohq9W9y83owVzqmxbm3Ahd9FJ9ueLDVkjM",
  "key26": "4KLfexoYuLL7GWPjVQsvV2E4XyD5MjhRZ19wnt1HsKGx9X46VQiu79WGQ7KDAKTsgaaqx382SYwivtBkDcNVyBvL",
  "key27": "2kx16XpupPMifYaMewBSr6Z2C5PqoxmQhQfmsdLt8tb797F45vf3oFyJVkM8HgZJSXmFEN5GbnLQoThk9PSiuish",
  "key28": "4PbrCHiXCXReydUpqw6Z2bBdFpdrJJ1PfSWXxYNxwP2WitvAbYX55WB8TPitRc6LFq5UsV8vRH3eGru7aMt7XQ2K",
  "key29": "3uGuaXyxo1i1AtvXqfeMAs5R4vJNtJZwx1h44ZoGmrwRRBRrGY9DCScL4UxuWmjnMiVhiRWpdw93UPvHX1dc44Bw",
  "key30": "FXxi5qszPcXUKCeQJj9hzhVScPpWs49s851gHsMbVVGJH31R2HepVgboLeThuyNzSPk9Hd5tkf2fy5c45nMZH15",
  "key31": "31EZwe5gc5USGJc7gDSw7SC95Jyc8eQaLiToSEshQB1pyJWT4QwbCmbqtUtCiRWB5q9pB2NURAh3MvBHiytVEQA6",
  "key32": "jeq35FBNkwrxPVZiHX8nuUYfs8fXWc9sPirZm7xxxm1aKwAhkc7S5M2DNrmLQ4k9jJF6pVoZQvvKoUGDM1Hh5ou",
  "key33": "3XNWsuBhV5KyTYSrNxmF6S6gMagNLENV6EgrwnynnKXkxkC8695Wby3z37vohW1HANp7rzWxC2bzy9d85aNzLLUG",
  "key34": "4TMCYQM3TwCu6HGWt7F43Afu4GhEwRpM6waiyQUcGN2AbkbNZ4PoJ1an8R2EHspZqoGLDWS1QUg8Ri8PTqKyT2on",
  "key35": "5dd92X9if5MC1wPLLCgLyADXfku4JL1uRQHgBfpJRjxoovSX9wXDgtVW4RoxfxjcfPDtTqKGYKVzPNpEpVRzGCwY",
  "key36": "38wZDc47V8RwFTWdd6KFkPGcH5QsU3UZJve66WLxhViJrJ61EqDUnY4toiTfStEWtp1SC5Vy1yLXaiwSLdsRQ2mV",
  "key37": "3BbU5tKDpBupwRY1zuH7JfjAib5FoCPhRmETMc1k4skU1Sk1a9ctR9hH7h1oMKGP43mf2FfHcCCZyoBwa7shWr5u",
  "key38": "2VhjD2cVFqWX8XK1ZayaDDGoo2gViGQ9zwWtTv9cNEuWpbbqpxEvx614rm6CqNfWi1BcXLSQrU7KHji27TgRtrWJ",
  "key39": "3gra1Vo3eBH73x7G61UipjQEEEPfyzp8rbbEDeRkUzXmFXHw1DtBh7xpxqzv1cBq5tBgbGGWdCDVxYQwUEXcKoNN",
  "key40": "4WiTftEVn8ZdxXorR7jvw8Kz2xSpcRYo2p3qpz5nMrizx67h55ykWsk15177QcxiCsRAequVTLAvXMKdNm1x7PFv",
  "key41": "wNvRAnwz3EkDjG75Wa8kE6Qer1W6soo9DWkhJjYJ2P62t9k2tqtQJzK8i5map7xuEkymRk7SrQyG7Xvj2yehiJa",
  "key42": "3GxWa6RfK7SV57Nf8KBxxN73fLA4gH6hTXSTRmtXUr3UjJzAwe2ZjPjESSccN7WiiRvSgkeXX7ALSXe2C4taR6N5",
  "key43": "ktPMU3HBzENiP3T35UhZCBgAjJHpRPPYmYYBBhHZVH1kQX16kTDzCjt4KiZNuJa6NLR6QMHD4E4xE2o9SASfozu",
  "key44": "3HUSY13npFA4oDm2ZRaBQ2yxrfwcZDn63kGeGVKCdJLeDN8HmHsfZ2GojCJmQzCerL7YzQtN4St8iBLpC5MdQBgt"
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
