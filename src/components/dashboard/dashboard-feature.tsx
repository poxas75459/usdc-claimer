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
    "3vFcqv72eThUK2ERu7jhuwpByuJdMykejmF7EFHwB7CoDtFrGAsWaXbcP2JxMoYKh8KwsNcQL3UUkddSqeVh3Zwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DcUNiTXmofhnQJLMyu2US9us7D4qvvB41ok81du7goLnfcUuZY3DorLHmf3nGoCHRYbsRzHpBWbg42JheGLCFXk",
  "key1": "dmCSnVKNEVhVy7zFwkxnsvwZL5toBwB7kjdUHQv4mkjtc3AJWxUbL4ndce4drQs1s1F9Qi8mm3VLanUYUuW9gER",
  "key2": "52YSerFpwu8C5DdWt7cJCgaAqHkGxpBdkFoartKyPTSZzn3oWq4CpygD91TjwU4PHbuxsCG38Cxf6XTUbV1t4pf8",
  "key3": "2xf9aP9HxgCY6evarvUs9wrEccTy6rN4xNgGFPiJnEMURu56K5MqEXS44eKiiD6WvKjwCjqZZ5CTw52T2MgoyGfw",
  "key4": "3zLPkfswUdxRkW62U4xkTNRi7boo6PvpowYi5Ur73S3hinHaMPiUSeDgvUPhwLSJ15ivMV1VRLAqmue4MmJaKiXe",
  "key5": "3f6ejjZiCyYZaZoAexgPDmh1Jp485YJfMNrpEW8vTWQc3wRecqJsVEw8Pj8mwP7r6HA7QKAvdDEveeURzKFjtqLg",
  "key6": "5Bdqx8Mr5vmPbfjFMSR7ud94ZjU821cnr36rMEQ5QnFnDWouuaqwYVgtqyyXCr9AEMfNeGLQhmMS6kFAi8ZrzJir",
  "key7": "23KmG7gWoiD7cNRGP8PkFSE2QDTJhWFTj1VADh6xztLEPjEsxJ3a1ZgqF7cSULTirjvnbiUMNsc1cUoJWeXsC7bH",
  "key8": "4TEQFeE6ns91mLFLZTWFkY9xmFSuujjpTBiYH9xb6ZHyKk1miW8NSHpDy5E11o7hpxuizsNQf2KuPKe6ji77v2Ht",
  "key9": "5i9eesME8nBF7SEPU4UXNvyVizd9QGQJ2wM2gkp15b6JNtxGDdS35BDrUt9t57agiaMCUtLfQZcb9TNVhsFKY1kD",
  "key10": "58MK9qgCXrroMspLeo3aaz5637kEK4HpLLWvUjNq9pJupuo3tvoA8PeH9ak4ePMoWERT7YSmhVWTKEjzfztADytQ",
  "key11": "4pAuo3vWTYxPbvjsdvPppGYm2f2BuPdrY5k7GXhYfxtKgR1nem7XckBSoetck8qr3Ndjq2F4CyWitAdcZ73YzuqX",
  "key12": "49PfKfdkLpSDtmXZnoSPLd3Mz8YdGAFBUsGDwFsMVNLtmFrnyPHYjgc5TnXTfsbU5T96EXirJqga6ZGTUEEVeEtN",
  "key13": "52ooh54rKqp4eqKZXfKZyXXvNM4vqdu6b2KKrKBCD6kG75YKFPZrtRgsg7VgHk29neNUAvnpUYjuq82AQAmmKFpJ",
  "key14": "32miQ2cueALWvvyW5kVEzisL2QVWM9Z3y6gyT4Ay9ir8nDZHKZLzkSYH4dj7Rj11q8DmJmt4XU9bKa6CB6bf3SX9",
  "key15": "4DhWFKBizddPcKTavYfGWEdSR86AJWUTtQYicGBrc7n956WvPUhi5XFzUGhfKQ1N8jSY4e45PG5aQu5tqzHYRfo5",
  "key16": "45EG7TkDcKf8RG45sY16LZF18KN1Fmgo5yA82Yw1jZ48K3TD6DmGGLs3oQLAtfVsThmZa3RWiLebVtV4xLeZnLcr",
  "key17": "okqJxjMds2tCUBj9xs8FdSyUTqfMNTmqopxX4kdVdBV6p2mdM3FDSH2nJdQc3Z51SyUfL3sgG6P2UXSVgEm8aDs",
  "key18": "62XK9LnpvLDR9etKbRkyLFSUGZjQDEPrxFgS97gaFNcJg9RNy2oECuXCJoPaMVW2cw6TDr2pbiQ2EYxp2RC7TmGu",
  "key19": "5uCW3mCmP577YqCgzAatKejr2sBm5ngAGREYCPvvK22r9gfj7ziNFWvafeRMUDSwrBewvGuFy3v9Ni5krkKWytTs",
  "key20": "4DjNezTaJZ5ihoHfir22mWBm16s7igahvHXA3bfLu32VobHNHMzaYKuUwVfdAK9rP1daqVPpLWziU9zs7ok8Udmx",
  "key21": "31TwhdBrWv6GHzmL4KjZ7W5vb82nnVgz6gegubi53AhnNRThMu2uebAAZhnPYPvj3Sc4rw3zTgoA2NTX579mGYMj",
  "key22": "45nebRAiC8HFdizBC7w58dkKn8fFjL9qtPux3a7oXc71oyBMJbdfH1viCd9Dinr7K2cA7atq3Y1Dmp6pYXxZ2vMr",
  "key23": "2YTzWKxrhk9RNK2dtqWC6Zhz6NDDVy6V5TMuKsjvQgV2vjqftMgjQhrgMdM3i2Q72b8v4VsZJF9g78stYFqk4Jke",
  "key24": "3MfZy51rYijLquhusXwyPofa8oPrW8cwt7buedXjxQg8m6iQ9GFn6fxVBjto8mqCufoGiEpR1qqH4ob7JoVU3D6v",
  "key25": "2Jk4JSXV2RU3Z693YNkuUYQkM1qmxDVZsKG65wyQ7qs4XVvJJHT6F8BQkzYTc3eWAkp73DdksCbsG7sZDyEr6XEG",
  "key26": "2Mv1deTbxB6BPVLddy1A8uJPD1AS9wfV9iCYCDAQmzuEMk7BN6QWkqpo8Fn4k9MPDztEPaNj2uLe4ZbWXEhBPvuB",
  "key27": "4QpQQBpPn8YTcQYaHgqvcaNZhQvvbmgjhcpP4ayAdeWtFd8z6upojQgxaUoESswAqJ6PeUDrq2uJ5nuHFoFXsyNa",
  "key28": "4JwFY2qMe7mhEYjCCSWN6CeMmmxEWwkt2sKcFRPVnPse6Qqaf7p9cnDjMGuX5bJtLocgcUD3A3DthWHmxfJ9w7Bf",
  "key29": "5J4if7GPAHoDG2L1Twidiupm7Tjz5FbRaFvZyfJSCVHsevfsmsbASTQwCf7rAoLcGLiTLZD4XUiKgm37Mp3R9ZML",
  "key30": "2iKyPQwJsRib2LRUv4F2uzzmkdPZ1DZsNpRQhWA6kKf9E4mQFbyRTk2rES3cLrwvgP41pQfgzbFa3CC7YM3EE8o7",
  "key31": "2CVMbuU4pBj7ctW6dNmppTXZMDgWX6TQfqaEjrPLB7CDznimgoKsLZGzQSzGH6ztiZRTC5xH9Xn4UaCkjwBUaShm",
  "key32": "4YGXgvtBVhp3cyJFD8PovLN9NgCvoUnnBQf6mk5G3z8PJrYeGfHEfDEzVgKTHQ5Y8HUWBkRrZnyXesBF3ZqT4tgG",
  "key33": "3FfDRLAtpEYWKe3VK98u8D9FkLvQuanJWWhKpAqoWLoSw4ULS3EwJVWj4Q4sfPSjj237dNJtFeyiZzdRdt43qgTJ",
  "key34": "4A5CmkvgmtCtyZ1a5AAzg8VCm2mDLor25qjwPSzMAc1P9CXPu3KANucf9svL7VKuRaxWUMduTmYTFQetCse6vJji",
  "key35": "2fvBmeipcxDHp4YBdsA9ZHiTYAsvQypsA3uMzYoeH88KozG6FShEHZHicdCQbxcj8WF66DLTajVnxoKM28mb5Tqu",
  "key36": "5g8oqtvMm48YGGQKTeEz68R7Y1WCv2CkE8YNX3JXzsZMsHmbyoSP92LsMhqkyCDBCiS8d83DHbaUaALgQ7MMD8UM",
  "key37": "48d6b6dQNP5SUCYdy9wZQuWPzNcRQBCYsS29x1s7Y2Uw6VdphLxWuVdWnYnr6pMUXfYG24iiYRLFGjG1DReupSm8",
  "key38": "53b44mrPJ4o395webzssQFKXeg3irmGLXBdqGbRQcmdJQL7xjZzHbUV8M2W8Nf2Jb5WJhn5BE84JoqRSFxaScFDQ",
  "key39": "5gWDBCXdRQ5RurjnvWigUofjcVGGN5xZDduT5AtbcdYKsUUwVKCXqzyNnxM5SurZFeiS6d5q8DshxDtcJRgGzU1z",
  "key40": "3EXWNYiSerXSg8NBmtiJWwaVQ7JFq6MiA7LbvaLZjVMVKesh23GtPTox3hjhH7FGp1puQDpA9CG2gTd6feuNFqRR",
  "key41": "23ML2x3Xc5TTKCFrgmATwmVtG2j4pyyPR25d4Szh1pT7cUQDymExhqYcmnu6RpWrb7iWRX67GQJETVUsH4d147EK",
  "key42": "5o2UByw9sXszaXHmeNWQuJusM9bbLzvK3vjBZ3BNWhmSTb3vyowbpuPjqu7nSE9Yd75GFmXbsWNYhMhtg59KuVou",
  "key43": "2bFdZLo22YNf6fJuXrzZ8su8YCkbZugcQHLEVpQYsC7WiWhxu5bhUqwv4ipTgVTRMmHUCg7vFjQY42Ww5HGdnxPM",
  "key44": "rNCQKuhiwQtQqEjDdG2UgNBx4EcC9mNJ4oecMRZmX3ac6jnzqveT3Yj3tbz9aggZRfdtCp7DouALhp9GPRsghfv",
  "key45": "3LVTS47amwrX7g6PTB5Nsft2JxYjPuhfVPDYm6icz26jBxqjaVNQ8XMziPYUSQfqArSakeRXGsQgGHv6Z1YDSt4a",
  "key46": "2HN3eEqeXf2dgBpZ5SSWpikN68nLqZmZsDPjd73HyNkvdWWdQmYibE4BoUrn1w7LpGHXwkJTumQfrzZNS9u1uqN7",
  "key47": "23jbgfBP5ExPRC43GiuYXmKnuUNY9RALX3WfMf4PYJ4wWnH3YMDh4NTkwSJ2gUHocQZB8UVFY7mAB7rGFR8qJ9vu",
  "key48": "5hjRL7RGXx7eychBexG5uG3GLMtuwykT7dAbM5DKo5hLahVA77t8SJ5E7SGMch9GY3LeermTKJRYjWJ3ohuViBeV"
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
