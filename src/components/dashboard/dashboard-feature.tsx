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
    "3GNuWkvTFqL9QiRNiNjha8yERxCNhvxvjseK3iEgPU6bDuSX16yFFfNZ52aiSCtjAiMBAm5RKdw3KLoaxjtWMvo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3txuwzqbzTBJoXXkL2hUJdsdYFZYqWfpxfUm8YnAtu2dgkGk1DBF3rWukpvNvw2FqP6KGBLmKJBJjGioLsrQCTuL",
  "key1": "3pUyDCE2ydvgkbkRsZJQWwV5zNAU9f78ctrXPMvGLtuesVfEpHZwLF3kzK4KbczL2P42y7ojRQyyZWd3c1kiutch",
  "key2": "53f2rsWwMJqyZ95trLZHRF3kJg4op4E5uZmNihAeJXgEXWkoMVzjXgYFLQbrVo45EDUYXp6xcMMAfes7fhxzs1Fy",
  "key3": "63RrCKPnn9LnfP4dcjy2fWmJ9GFpkAxZTmQmzMy7oZvaeKPC84UrWMbFLsGM3etUsdVUkdEVerKGqERCGB9wbo1Z",
  "key4": "5pnSRpNKvKuivsWNkCZaNkisS9nQ8vpMDmZw6KQSBAsuv29bKcc1z4CJ7EaUePQ3hYsKPe9DGLtzDcsXwMZkmuxp",
  "key5": "4BmuaZGPiTJqm3Jsmkt5c2rs5JqzxLjwjVkCqcguXJH3X4QYi6Q1jQefdWfvZk9ZcrBB7CGbgi73Ttb9hGbGQLQf",
  "key6": "5caCxGRaJv7rAVWit5Dk7tJcM6RYTfeco2XoWVSMDxa5QLE6Xj7rGamGpWMps3vtJH7V8uCmn4KeApCVit77pDG",
  "key7": "4nr6XQQbux6F8U6ovrpQ1sXgaSarjkAfW1Ws3wwxSL9iWXcR6HooocLauFkLXFtZT9CqtCEgomtr7aTy98BAEbr4",
  "key8": "3rkTMSP6qkkEvJAuYtRkPkgDZ8hBK6TwG5YzUCAmzdGjCQMhekuxTQ2w9n3YKH73kH4NHQg3jP5mbjkyssocCEHv",
  "key9": "66UtVQGBZLRUrqw4wnW3gxKGFMoiGqttQu8389aPnWFDEVwURpNykeXPR3Mes136P8ug6BNgHVQK7WJSFKhSDQbU",
  "key10": "362prWumgsNyBFaz7wPVLmsX8aQqaZNCzuDpVJ2vXhzje1GoMCCZAqEr9cBP2BtY3CAgvncftAmt5veEmCkhCfzG",
  "key11": "4ozcPiPRLan6d2jjggiMaERgcWChSMGAbQEckAPNX4NwHovb9Kg5NpD7vrMTaYWk9H3uZqFNtiTqkU1PkNCqUF9d",
  "key12": "ULgQXhFh4Hwfo6zHCPgZhMxHq1ZDQmv22d5PkeMrNnAd6zCECrMyfQvWYJAmZrfkkrcAfcjQ2mmoQ728TF2Nigd",
  "key13": "2zhfHSL19iP73TQaDao6Amk8Q3pa1CLJuB4oFWM5HzbgWcpCZYLAdDpkq66YsQ6o1wcxoCaCQHsAmBhWWfjkVQvk",
  "key14": "4fT9JkSj2ViyT8VCC4s7YY1Qq1Kdzq4u4yC3ejs5hARrt14hCXLSM1yvFqierG6eDsMAZKEM9xLizTH5CrpWizx4",
  "key15": "2FusGqPaEXvKaA4gsokiXzo2h9yYvocqCDsJerFUENSaajSG8CZrunKueVjTYFDWETVW9gR74fbazDoRKnZojhXc",
  "key16": "3Rwxf3XDaMe6SYANPDonc4aRb53UDhtJC97ezPTkuqwkLpTGLjGKiwnDR3JGngrUYe3X4rMGtMkRHqsDuWnbaFMp",
  "key17": "4CMVzx7sCveC7b68FGm9FDDsab7Y2iqkaZyzASQtq93oupLSMKN6c48L2ztCUJqZBK4vmag1jK9iMtEGDwm2RDdh",
  "key18": "3FTw9ZU7D9K2WJRv4PbjHpNrXAFCZk8Kb4tVwJGKFtfCA6X5VrxZzzV8xXjqpaQsQJA3j1Gf1LBq471Guvow7WK7",
  "key19": "4SrgtsamLKemHEraKnA4BxG1CnVN1zTyVLQ7qVPeaJAKNDDCWqsix1sz4uQLE87t8cmMAFuVAo9eaycHATf2HHb2",
  "key20": "3Zgpx5omgg1YboeJzRenJEMJRBzgCK9vEiMDdAQzrJc7cdsg6NAvp2mmRv7KqmvSbJ2E43EpjA32pbk2Mat5UqqZ",
  "key21": "yfhXbXJVucAf7qCG1zuGTjZ8Z7kNptrXcVTq2RZhgEkPeWaQ7QtZbYVPNKLiRs6QpGr56Ei4B8AQ3w3gdRymFQg",
  "key22": "3f9FZkwHeWNk7KXqFdBdJmnBzSZkavg7twQL76nPz7PGuUhWxnwhtU4AxPhUxdq8ixY4kwLuh3jYrt9Hkf4MvHtA",
  "key23": "35QKKzhjbrsUR23tniEUobHNfAuF8CqitbibomD7MbKunUuCatkDu1kmWBUdZgJWZquCPPbeosL9Qu2YtFTyCJhv",
  "key24": "24DJmcb3guxmDdkF3SEniCEgMCCpnDiRNZoPM3N9RiMpN1E83mfmMmssSA9V76tw226ckG1jxyeHjx76qjJa2c7v",
  "key25": "4pJBmjyiSyUqK9ekUZB7PDa9fdNzRNKveAhqWt8QQBHUj39nKskfrrmKeKGTQWd529qZ916fy9SQLzEAc8vnRwhx",
  "key26": "kuKHLqVWgDiaoHLQejhzDf1ygE56747noyXgBUFAsSndRDaJEFFvepaT71E4oFVuujy5bUL2ZLBH2iDWHwv16LY",
  "key27": "51nCsmAKiD43DJM32st75vUjx5kvk9mza8fGN3vG4Rds3o9RCgHQ49siRyX18TrY5WwhBg3P6M4MKBUW3J6SNmR7",
  "key28": "3qzbyU64zXx92aCcnDDyDhC3U9SnjeeD6mtc1UnozHZQwZopQbgRZYEq61ihcaff5LjWNoK5tJwsHo8NZFjHusV2",
  "key29": "yCm77tmyBVZj2JKfdb6ZPZy3Ry8qENYvwxKN5qYAkKp7yMWuNs4qjBC4X2dFHuuC45AWsK5icc7RpNvaH13RM8x",
  "key30": "3rMw55a57F7pmJPi33wX1vQ5kbvNpgtKQKqNnKjj7FuuSdAeGsmvWbMDwbojDojRHoPEjn9cBGCxLtQGqYJVkGyk",
  "key31": "225D3kjQUhkohZcwUHsiv8VVFsjHYzyhmWGf498mtoGqKh3NQNwvn8vDnrn3yd8eDjNtRCCmYQPkggpmfpKAr347",
  "key32": "NqNTMtZnxnWWsbtxXaJJgsVEk2s8MPfP96fRk6zLXHgC5dYrJwYDVRs2rYMBPzey18sfUGFvdxYTEnwbQhgCfnf",
  "key33": "4zDZqRyxmZrgKtv36DzVfug9G2ujq4GZiw955zMbULQSS6PkoZG6jgWvX5Je9n8uUHFuhMUijjc91dt9t2JmvvAE",
  "key34": "2QrxJNQmyXXpruWW4j2KQ4A3RPPV7L6PEbw9GJMyVLk7bMwqVuWFLqmSxfUvauV4fv6uTUjRh8dDCNybeWNCPVgp",
  "key35": "3rqLey44cb515p8yZcCJVG1WizDzDwi5DbLa3TXszRZnbuQDXTZMyo6jSETb5iuwpuK2Du1QwTWkzkBRixTVZzxS",
  "key36": "3Hmtgu1MyRodKsVVmQVckJBwSTz1nC1zN3SRU8bsiYW9nSwCqcvCHZwfviMvGh8CAsePRX8afFr6uvXQtM7WiM5i",
  "key37": "ptWZW5pBhnBvxwWPP9BAuchgJUpULLuaSE7VCb6xAXTESeUVP6u3jvCabve8rhrvtdKs24jqq5Q7PFk2uTQhK2y",
  "key38": "PFTHJqatz8d5DEaSKKGyMuT5tNd5wa4rmAuVfzXNk8Mdn3h36iD2va9LCYTunVXLZdCVgzMtYKijctuxFWcuAnb",
  "key39": "58NpZrd3kUvWqdLd3fzxd3pGej6NnPahpw9J2gYCJmcPQLJtejdCXYsJEVq3jA7q5E93A26svDL87pgLinZU8r1x",
  "key40": "24i81LyPkkrgC4b3dpmfjL4cy9cBowMxwGNk33HxH4dH9EJ2DWhUBetYVnhxiWg1Fz6Ac1ZQ5xu6S1V7utuMfe5s",
  "key41": "2nVULsGWvTEEx2Znwtueb8XTFCPvLPcBtWiacekBZdHUiVDbBFoj2gqPUMbKoz6s6n1uQV2vdghxr2j7SsChmNDn",
  "key42": "eWC5kF3iNey9277qnB3X2LuhF5doCY6zi2R9ZhdC9xL2t1Ri5uMpQm2KLkx4CurSEw7XfWzv8MvF1SaPppPCWBr",
  "key43": "33nWZzsuSh5j4y6P9vofXbjeKpMhpKBwzt8MNWH5o1rBRKwpqzbzdi1EsUHoP7C5TLXvnFri6BNkc2geuqofAXVJ",
  "key44": "4iMwquaPasNCTw2eAgmMb4hUFcFsYEbW3TYpbLaQaMcoccTgiRghJ6vpeNYw6sm1dj57YYLgcBqCt2tTs3M33TGb",
  "key45": "5FLZePJKtNrS4mWxRUjLCnqBHcjepNadz5bB9CZ6nDDAZXyPpReSc7HjPjwS4fX1hhsWZ2YpcHwyyXj4yvc7JURg"
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
