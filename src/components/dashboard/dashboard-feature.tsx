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
    "cFE2cseBLzzkpbEaiSryJsCjYiwFbiF2DKR9rbTJeZi66VD9RLDPwK4qAi2MUCdY9jnj6hJyQL5f5dMHViQsi4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ktW24As3MJw4RWhNuycbH3CApGbnDtdnf9aWEuimC27MCpW2y8ZEvaLqXpN6qAAkiH27PKqoSGfASvZhwXFrob",
  "key1": "2gwvi7a2sQ71cnFXrNtJCJXN7Uz8aARXW2Q3s42t4QimkfE9eHkiPSVndAxhbW6KxtoWfrxHdA3ZFZoWtBgBJP7r",
  "key2": "4q7JX4yQFzyyJ4DYwCsKtRTQiUEZmLPsBB5mWpwMG5SwS8hDQNFEn3mEsQnUxSfG1du4bgZxV4Jpuj9F8rTyEVcy",
  "key3": "4ZpYBH1hyaDQAYzHn2XKRU97GGgpDmBoiogLRQLyDVFbTC9C9Nh6fZfo3S7wwTxKCioFR9wyimSsrCLAG6aGqnMr",
  "key4": "67qU8xTdnfKDz76gAg5mbHN6m65vrwpFe1kg7KchLyYKJsZiuQvsxEyV29Yc2sLampHK2fBNkgHDQsxHodVjrrut",
  "key5": "2YW3VyKA5mnbHrcVmRHgijW63krWjFPGbCLGqks1dNNfvgjUvZB3J2h3tDfAxza8EhkbBWifvvEAhZHZnZSZwzd5",
  "key6": "4X7iC1Dyf1EssgXH1ZBm9DfPHNahwFfuyc84Yu5e7Y2W3qbTwVorQhYwgSRUJmQsJ7CAqt8ZoFRs1Vzr5dvuJB29",
  "key7": "3aD3DXxWC6qfdKicsP4eoHGCzQ6V3t6ZFJsw651jvTyvBLe1b9SkMMQtdBNjaxB31MgxPeh6BsCctAUHbew56tTN",
  "key8": "2tFoYjLABeQLCzshwRrjhywWgzttxy9kpEDzqJ2HmQkRSYJsXNfop7X4RMarjjbjtwYqMtmWovNaeAhwNJH25kNz",
  "key9": "2PGu5W2zvFfoJc96wqqmEVHhZmspJY8cRGwjNr5XYjVGgkvxc1SohPTs4FKhyuwv7uBBREnE5dVKQGZqauten7YR",
  "key10": "29pUTvNcaYZrVCK3XRaXAimtwndy7t7PzBFZeAmEXZFnTiF3MyHEL9tXGzSspwfJrpcAkwPMVBogrweJeJ5CSTun",
  "key11": "5cwQJZrXysabJwNpqyJCrkcAcBrFD3UU1igRYRWcCvZfzqAtivtdDJ3QYeAxYNJkCZsWQqeeg3629u9PHYiNEtYY",
  "key12": "5iR5fSQw1at8LCgx5zUBmj6X92jgHKw4jFo1sTnH5cRw2FsqJ1KK9PbCSwmjV81tepubmEAmSW873sP26dpRcg5Z",
  "key13": "2S1YM6mC51pjPLBD4rbuwLjDLVbKrknrxD4kt8LksBRpWexAkxtozPZZKvpYxXAfphxCAoV28oC1gc8DiPFTcP9Z",
  "key14": "2dAFHKuRYb8MUhEdRoQq8o2j5h2HCJU2z4WL186jx2iQbm6rdyw2L7xiryoieqAD7PJmigY2XF1HNguJKcmaj5Bh",
  "key15": "3LteGBEFh3BVxX1z3SRmLAwcWBUvPxXdJp2BVWzNo5H3S4jWUsoJjUaRnLPnz2Bh9Wxo6FLZ46j94GveftvtvSnW",
  "key16": "4cGUHjBaSJDjr6ptx3vKfnNHMmQTQTaighuiWazGeWG8ixi95oREoLNBNd4D9rDGuSG1hoXtcoCisScTgY1xw7Jo",
  "key17": "21B1XccNHF61EDhJ4RAzb6TH35qwVQfnLCT34kH9H4L7wE5JYMjAwnJTgMMhFHhpqx7yGK8yfWVNPebEYjLrEKmX",
  "key18": "NVNwq5TsNhC6kXxHYpqgQo46aMvAt51nRXomdMoShMYjXVbwgmSW6pweEEzwf6aTUTQa7zqMHbBR69ZRvV2YypJ",
  "key19": "5TJxTyFGW21dLgxxHX8eUh44QhiaCqPMduFYb5DFUUgvagXxfDbiAkk6HbJt7cs1dJfcws38Deg458QFUNHWR5CC",
  "key20": "3ebytVCUnKokNWJbgJAAdBoKfPBmzXuudp3X2FAeWy1MZjL7apdoWJReymeQ7CGooYk33RAFv3ynad8CmV9tRb5j",
  "key21": "2BQhN13pE5rDtengkyb8u5eTKsEZgypEWacfU3CYxNNfcYM9uxVgyhF54VPu3nhnSKViA9JvHtD8QQBZ12sKphEj",
  "key22": "4Gr1EGgMfGEBfuhcxYAyLa9PKYZzXxhQ4uTXNUbDpXw83x8Tx3YtQyXrfjZY4CqDkGiaNndgocpmvQxNh9REVD1c",
  "key23": "3NmjQSzFKhWJS33gGzSu3aVs8Azjcodo3Exa2WG1czQU7pkXeyGgqkuPCP2aHeReLSAjcewhhDS8UWjRBKBS4to3",
  "key24": "2wnUHyoj9Pi3KaLUQv1Xq4acVMbKiyqhdhfLsJMnupZhfRDdLCaeXVsYVyUEc9VyrrP91K2oRtJQeEXaGhvqQG6A",
  "key25": "z5krXjL5haidfb64T4TQPcixg9GUn2NFb2Uyztrf22fZBrKyLTgAT9sSjCVAxJ1cvHGEx9K4tRwFk8nvXXa1C29",
  "key26": "3jLKYT8BHCbwinNoxqYPp3tM8HBvBHYRuvX1noQLo2JB26gL4HtFG933ne8coHr1xE9XkK6Z8k9UX9pqV1CRoSz7",
  "key27": "31ouoG3BGKFZ4aARnyHUz2c21U2EonuFDcsysZQZ5FyMLBds5qzyLF1EAT1dv6K2z3pY8MUspCe6QswdDies3vd9",
  "key28": "5LtAarwb71EiumnwSZjC8Qeb3kHsSWzenJQRN61KGRCo5VDET6vXKjm1qcdLYv88a9huJ2kJfeo4aazxgAQZCnEA",
  "key29": "4HAAdW8kyTnosbPuiSWHypAynuqt3nx4XrP8xBj4FkRmhSjEwiVwLHsc9Td6avHoHzxcah3NN8ovF5Mfoyp7pYDQ",
  "key30": "4zzaj6Lued8U5y4Tta4esyRSwVZRDmTseR1XgKqybs5bheVMwYcNB7Wh9PnZfcGW1wJWFGisXjSEdEKLJuEMYff6",
  "key31": "2ougwBxmEHNd4z652HdWBS3rVcigqmfiQs53GkC5fGfr46yGYBEJZgtRz5Rbg4NNTrRH9VSkC3GLFYAqV2i1BS6F",
  "key32": "67EymdH7Lk74hAQ3do2TUkAjGQyct7VeyJQG6hmxqTNMpgRPspqVn1PaNYb7Tjxk6FD8zztnFUnLUVwnSm3XrDLn",
  "key33": "iEc9ikLiBS29MingqXSdjopJH1fPCZNCgeiNEYkJaRzwFpMkSL8PdPTivEhEp1iJgepBUU6EBP13xarRDKQv6DU",
  "key34": "5wej6a93mdy7FhtBDyw82b5c21gxJuQYeLiePo1uC4E5XUQD2UxdeAPNRkJzzhEwWNrmkYbG7F7juHhGMXnV515N",
  "key35": "2VERDVqSkhgQakzFmFfy18F5x2fWVtFFYK7oD3UzHVpg4Y6XNrMyA5EnJg3zVnjVHpWwJniGGnRxZETWjDNF8Ybr",
  "key36": "2kf2KXHDVvaA8fECFGuzNKrK8zGcAxc3v1kFB62AMEqxhHFZSebrKmCo6xssXhAQAToVbUDRxgP6SMMmuhJec3Vj",
  "key37": "2anDnhevqrtEZDHjnqkbEd41hKvwWgThQ8kvpfxDTzQJnWgDm2rMozcSaCkNPA2cGyru9Hy4kXw438FPweDJMEbr",
  "key38": "3PHWU1yNYgpVZiMZThnrzRfD1QwK6QwrDGLV5RTpGiUpXiMvJtw1tbDENk2PRzraqRBFoffGEExKNsoe9YpxmvqH",
  "key39": "aKayxKfDEAimmLi9B6QD3zTvFLo6TtUHM2Qgy5fmkrwLJJmdZx7SGzt47BvFu6yQeRCDK8CFSVG25HVrm6na6zi",
  "key40": "23ucuBP1phW9RVTGxcDEBbSgKGsfaXJyKDtq5fMjfaBWJKZahqg4NgqiiqezS72DtcPEjcsPVAAT8JL6C3TAQNBn",
  "key41": "5j9v9ivrtxwi3s2nYxuVxweNeXGK9JDGdt5nqR7gxkTU8yATWbGhEk2uJA4hF5sQ5oLhPJs19qptdk6brf3e2zX5"
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
