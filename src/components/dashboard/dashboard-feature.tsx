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
    "rAhcPQwB49esRVbt3ikKabF88CriDEDZ3A72nyeCZ3tjhGXQL8k2pVKM8ZsaYr9TvQb8UMbWddiM1JNWAo2cR6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NanyNM62pMeH261bF4vVVfBLdgwrowzTngPzBJuUj4q7u8WWDcwFGaTfcZAE4L3JDnqbCuu871hnaRpCGkDkoS9",
  "key1": "4zbakCai7dkfVjz9xGPiShWu9sxKJjg3bguRyQUm9Bg7wQuDMLhxfiPztsVH9ms5UwqirgU325SWXmgxJ5X8qkQG",
  "key2": "3i6hURoTb8scRsv37gd5CP28bfirSU7KT8fWiEbxGChnEjcqszAL3h8EXED616M55nEN5m9fLMn4n6XjBkQbWpg6",
  "key3": "tdaTQXxAzmTPJshEFkYfbGje1fCCitHwwJjY7iuKjkuEUP68RzKrD2111MSn739Z3zPmkaUEzGa6Cmr3vs6whLb",
  "key4": "4e3ZsRWjrHeWRhng4ccdspScg3yxs6CN8Q1anw141PJgb6aaKLiQpVDbBMkAdGQfWFxUzUNS39K19y5etx8z4iZP",
  "key5": "2UavZGAkf1maDB2eXEyCfn4LANAvxukojPPrC8mTBLuLWAXoVGoT8hmmnxr1T4E68yzHf6vJJyHGtRaDGcSNHjrn",
  "key6": "32xHSKwg4mC84DFepXZKMaq9xmEmthY55tx9qYXhWaFTs9ppHb1bbAjMNhyqXD6tigfHgEPiHzSKTAksSGRjVQRb",
  "key7": "UQc93RMa4y2XdFPJpjGreSLsQeFM35PjDCJk9XYn5Qnb8Y6aDqzSVWrUpMFQCAhU8ET6HuarcFv75NHe3M92suH",
  "key8": "5YN2FF7hcuP1zStPrLowe5H9ChVuJdTwVdHG9YgqAvUuzdncmyxQgyRuEv4aTRXYD1AJ6nG5ZBv2HFPt6YztawDS",
  "key9": "2iB24dMQHqNidKXU6FSvGbsFZKfeU5sjVVc3iarbxWmmRSm5AvV7gB7yk6pTn4L1KesaDeDAfR6r8TAxADnbpR4s",
  "key10": "1XNdKWTeyYH6LLbYf3mHmb6N5iuczrKnLm2ztnrA3bk3EhjzkQ6y2ArK3nWS4Cjdo3meB1gde74v7ksLk3Tg7bQ",
  "key11": "5FZsRHYjndoxC5uNNkJu2KdiL7XUYvca72zayLhGnUB6k1Y12nLESJyHCMd4vDNtxgnSMJS9C8TY26NxTtmD27vR",
  "key12": "47ZQqPRQdFB9ihQ7UQoAPaHV7ATyCxXWibU9rCVBVYcMzUE4eCW5RJtdYoCQN2aMwLtcsyYfBMGvGgn4RTcSdkkx",
  "key13": "54Fu2uLvfmhDwbXWdXku3Vu7anSbWcb5jU6KHDhLqVGaXKFebGekx4hhaqTEVTtkXu53R3XiQWvNzGih9QUA3x9K",
  "key14": "euNxuc4YNKj1b4YdZpvmdFfJdEFSorMKPrc8CHxkurBoDwhBEbPDffWkgoPQB8EwCbAEkccj2pDVNGWtwsDkzyR",
  "key15": "5s772Fkecph22aC6HLe9ySstE8M6ekb1fW6SkXkq5Re37enNuQgURL3sAkb5wYksk97bKjYFnBdXGYrZ61veKhBm",
  "key16": "4qN7UfHAoyBzy1pzsYZgYx64k8cciVbVahqxRfQFjd71LsPqaorTgNzdjNiZTYWHvDBcBuznNZFzUEjgTG5MdqG2",
  "key17": "fVYcj9JBEucnbifSnWToS1FvohhWUGj9ph6Xo4EUFG54iYdqiFjPxhYHAgcKnyaa5f8SaQ423askWj6R9KskN9S",
  "key18": "3oxB592d9D8C7bMenN8NpDCpxiexJ11xwierp7tUHKwxRjoEXUtRGSrMf6q6sKp8p7N4hRze5fNGsZmiDvvYiF1B",
  "key19": "3cbq4pJJ25bstoPQDQyf56VMSts2j8KCLLgurAyxFGPGNBKHz216nVEVurUGaaNzpetCnbBeZywZ12RVo17DGLuw",
  "key20": "5jp7QLE6dBsVCUYgZMbHvd1mJqH1yjnuMFTYa2eW6CX94eeo9t5TcTDwL3Jewx4qYXhchQdBwoSix4a4v2KAxH7P",
  "key21": "HG3J99jSesS5wKhLMFpD7RwBKLWz225a9FAZAutxpxLmZ8vATod6NPGgo7f4SeMNw8ks8a9YFoeMSeWdCcf9g61",
  "key22": "3z44dyVqtdCph62Ace1CE759yqi5oSHLiwfwdEnmaQK8YXX6kTJ5MXL6B9igt82dykrff7AJCGc3RDCCLy6zDwVt",
  "key23": "3kcC7GHbDG2gB5rC2w2mmhtR9HVgm5P8wRSYQM5Vh7TkvoMZ6nXiQYueKCnej7jy2BTtAvfg9b9TmWED48onyjhG",
  "key24": "27agjNZ8SrhcQRC7LVZPUzCpXMEYtMSyAATNYjqA4yquS1xKJV9vXeE9G32Nq5zP4YTH1UNhskmYPpQXC2Lf81ij",
  "key25": "526V7tH8Lnsfnofo3qfg2hL8Rrqu2edJSpqQZhCbNSzhCRDFXRYp8WztTtG5QaAJZqtaQWeQLLwxJpM16tXxkbPz",
  "key26": "4bwF3PQHtengcuN44PxYeTDLMVn9DPsiETvLRL162guky5aNKj6wtbw1LMa2LnorresJayUx66pBPDdVUZk7V3f8",
  "key27": "4He1xHWYX42y8mkqzm2ceG3kZ5M2FsbuXtovuM5oURp51RwazosvF3u16fcr1oqCV1iPpjFv11bXA23kp2ns7ts7",
  "key28": "4bSMUPiP9Eh8zPJTsZUfruqm8mtbUJJUft4AfXCLXMcBjF5YNpX2r7rM8ggonsiiFCG3cEc8jSxGsbcaiayJSBbq",
  "key29": "2bUNsvZQUESZJphm7Pz2pBz7CccUHj464KFstresT9vyeoysuuQQZy4EpHLZEwrRxGNX2KN5bBNCqyavzJTz5Fwq",
  "key30": "5jGG1jKoBnyZGiAKdznDfL5uuXdv7f3pPNHNV5qjZVJUwTRbbJtAvhk9Hnkyxm6gTZ3HsMuTF9mEBrCPdon1eCmA",
  "key31": "4PtoQrKC11NtAMdcHTuxmx53x7mPWNpJVTAhWgeskxxvEkyX4bimNJSyvKFwAqdZUxtQHYx7mfR9kpjxySmkQk9Z",
  "key32": "2Nb4NkKEsseQym9w2nEE4pBpSvm91Xv1wdmnHkYHUfw8Bry92K6V93w9cWU8jjwySdErVUeR5u2QTXGoJmMrf2z2",
  "key33": "3Tuh2fBEHfd7i3nZmzURsaDaapQiRbNs9SZ7aRLRLtm2jgXc3ogZActSW4sGwVZnEMooi5DeMg9YbgPydpMNe4BF",
  "key34": "5SB4shLcMGLY4KQHqChfBWDGW13Tz9CUj2NBaQ9VmapgTbW6ohiw94AkD57VFLSZ36dy3zzomoV4pzRzCPm2qNtM",
  "key35": "42rCUAwRAEjPDMcZ7272V6s3PHWqPZBWD41zwxBaeFKZQyjFwJzRHKYSdDVQP34x9iYAgafMH4qzBc26hi6J7Kw3",
  "key36": "Xd4PJTNZPizRo7KtRXLwcghJVWGko1wFV1cNTnegNo98iSaBiFhWZAU7z5o7ouBnRxBecKgDuEWh3oGERYfg9My",
  "key37": "3hhgwt5z5DGR5SHYHot89RcRZT2WhuKvuJzBRJPd3yLw9D8MfN6DDZbWgZb8PaPxQ6AH83R3i2VhyEbp9hcbs9eD",
  "key38": "2v7zdvagRo81RXuZkrKJzMpZgRydhxn5qQwStxiwdrWHmy8vR1iJZWvLLKVHVMkqnXzQZypHuqJnR1XMRDxDtY6W",
  "key39": "5dVpW19USRjoSeahkMErX4CbVFSidj5GYuhk5BeayvaXTPqFXK5F4dqBz3dStwKb6XyxktVvxnd1gkJLpaCXJgcw",
  "key40": "33kZme29byMzu5LqUkW2S1Bze1AMJkCRKy2EFfH8M2iSaLQyjv7ZUrsjR9YqpzGeUdWSPq3vV7eEeinVKnECXPVZ",
  "key41": "4TDS4rDpSe9ZW4qMCjFiiots5xFnMZ1G7iggoeMD5rxkzM5VHHYwT499GpJFRRK5jPif617L6Tv9aVQqAjLEZ1Ku",
  "key42": "51R1Aa52eNumPKddbKJGTYeL8NkzSqvKHoQuNAkVygF3Eb9gVk9i862hiEdEayVetMLFZM1GL7FyrDb1tNeJuTzi",
  "key43": "5HRdrJdSMCvenyzWFnwwZdFMH3ofSo8L2VFZUAFzEEemxHWfhb89hLsM5RCpBXMu5Ps8jeqMEVfrvi5U5ihjsZd2",
  "key44": "54PZRhyoAXefL5zB1jsUWCYePpD46pV8mH1JphzKi8aWW9K7pvbhgrbVN5wcXtyfqaGc6enssKnW9MNrBLzFG6J3",
  "key45": "2yErqLnpCLactDEQpN3iMz2rTHakm5QzEBdyJE4TpqL9GZ68NsreC2yeHJXQv4WFCeVYouyoGqjZ6tj5YxmCXhHH",
  "key46": "4hxmreTjeGVgy9LB6q3kN25W4S5AypsFaGWQKN2C3yyTigZALqYPrcYdG2QTXTXwnU2ZBhEBbmBnMaDJbPW4MfGq"
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
