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
    "3nS2tWygFEKggqhRAxn9tRVDqh1WccmJ2A8vBZumk8LhLopiikWmL5gBDQ1K7moMnJtEW2U7dQb3wH7Nj7mwPLNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nu4h52GHSains5bELrssr4heHSbNdy5z6zGmLirmbnr7ZCexrZWgHrjGLL9gSsHFE8k9w7kLFmGgDLsr4h6nm2S",
  "key1": "5XwMRQgTYVG1DEtY1rKdy1aW73QTpveDayqAy7aFkq3esQ7jWNErS5shUKAAVxnubqE4cuU9n3vs7ucMEvCa97bV",
  "key2": "GrtqhpKPiUUeiJwKdffb7GSVPFouf6eNaFw3DR4zqCn6Qv1TcbMYhTTBCdR1g2iknTtvHyqduBznDYunKpHVnQv",
  "key3": "4ewUq1SiFHosPc6avxWV5AjugsdPRXnXexh3mjfETx3t5TU5LVHbKELuhV1Sg5Q8GbwJtbxzJxLwAALTVxUAycfE",
  "key4": "23RWeRv7UCeVARcE1aX7vExuNV7PcjGfXF2VDDF1GbqQ4zitmcivAVAtbKtiDgw8bNDBhmS2vEvJX19KUc8mim9E",
  "key5": "1VziNX5gH8jx1fkQbXJnWNBa46EoeHMLYFGVGdCQxhSnHD3M6romqogzwzrtwij8BNXcYvKgfKMnuJDYTjVoQty",
  "key6": "nFKQesxYwfhDQ8LhXVQ6MwvwxyfDEsvhvqQq9N6x9QNp38etwqbNe9GxAYyQykK3wczdEcSVb4Gqy9LeEt5sk5A",
  "key7": "28acjqVdMGb6BFGzVkTJS1y7Dvcb9Y7VTihAMkG3PCvqVM5pALCmUV1AdD15JDuXmMVDw1JWHjKRSFM1sddVgkwN",
  "key8": "2FXEnoVPLUeEXhWjXjJQzK2vhyyYAoggdt5CMnQqaCnFXmW95PaSzktAiJBi66fYEjFGHftUAtkYYXLscCbc4jtY",
  "key9": "hSboWEwJFJgxRpRihwEZssAvr9uB6EWELbpcAkAa2R5gBupptxPUEEjaA2xRsL7VNw6dARa9w6mBkDb92K9BRnB",
  "key10": "216bMbUYXwYJhBdrfgjSBDgkZe6tcMDrDXfgdpMEHtDALADxxg2pEo6rx2CtjeAK9y8uWS9pVZfxWwCzCGXLGaa1",
  "key11": "2RZMLTVn5bv6jfSBfdremVVkFtJPBmkeLG9xYXdD4GinJ3J8ma65evuJAfyHYvEzLkhvVguDq8Mz3QPp9r9WB7Uj",
  "key12": "23smf6LWLpoaiZLyn9ubmehPrX4RKNbEQyxm1Vf6o8ek4spp1yrRWcP52Z4PdYDQX31CffkrdADQFy6FznnWK58R",
  "key13": "38eT9qWWF7KWpWkbZw5E62H7Dqn4cjqVcXQETg2qNDBh45YKbpQnG8uvVTPNbT9adVfSybGn49UAYUPZPVVjXy9u",
  "key14": "24BGWTMhm5832XWu8J97RxGSG6NzYpgfGiz4eJqMdCVRAqkTqnQbGPTrzhxT3sami4A7biirnLDt6kwAvsCLWemi",
  "key15": "4m27QjRfq8vKyLS4iV6WZabALY6cfx2hqzWPa66wHNxYkodXf6Q3V7A3YbaqDyGt12UC9R1hwmp6PGmyxRJUmZGG",
  "key16": "2e6GjoruwgoAfibyj4dkXYCod5E6RoAkKvt1hzqiyJPZkg84wJJbKtezgcdkvrnbDy9YWSRBPuGw6APDxEajMM4X",
  "key17": "NJuVc5uc45wRafvUZnyxvBScQ72fmzKRa7EPBKjvszrztYhbb7cWycELqi6hccktDqUoFAq2ysBRuLj95cGMgkK",
  "key18": "2FGKb2VsDZoGer45MuL2uGnxov7v9c7crnWGUZHFyVT8XWF8Vz1fAK7N9XZeRfLR6Fa63jSjwwgGbEwkD2iDwiZy",
  "key19": "cj8mj4ozzhDThuZLLbeLa6Yb3Guz62cAykqL2AFKJHSgEU7ea4KEhqpRA3tVXngRjfpoCmRkcbnRXrgFgqqXUxT",
  "key20": "34U7piX5UK5FHZR9GBrZP4ujngtDL5FiNCwknzH5gUz3Ar8Yx6PvRXn1MbjwxRAGm7pCxHZAVf4EmmjDDpCVxSxu",
  "key21": "3ms8tZbh3PzAckjbAPzZm6PwX8BVMZHPufMLdJy8nFCUMD6i12vp7QJf3EcvpLAa9s9MuUKU1zpajqiYHnpqWhZW",
  "key22": "52k8GW6mDbpQtXUEcUXgnyhQscrQEZFV43ytsy4aRkiS4DcVtXqQz9njyEQZkXzyJDnobq16eG6qbJin84W2FTEH",
  "key23": "34vDu24Q3rMQhyBsX927X8PTVZ6Eh7yVhitVYTMuHWEJHYA6t2hh3BcT6F82bCfiAfu6E45WskXESY4X1xvQfZTr",
  "key24": "4FuWfwuPSURf2HNSjnYAacB42x3nxZoC7sf5hZVWmBrHvQgcGzUYnwv9Swgr25Yrs1sCmhDvsqdZb6x51WuyLdbL",
  "key25": "5oW3PkHD3AfREnkD4feYrc2BMGfH9fHYdRF9vQAZ34EfNbQfV425vxE3kP85anmNwR733wsHR8XE6Ck7EgZXyQe9",
  "key26": "4FS1wAG8AoVegVSa1qcBZFL3HMvTKTECJS5krriowyzbSUixxN67X6VQHwyskcyRGss7UMeVnrefpVcz5BdbqBSE",
  "key27": "5jDNwmbBoPcGAbK8LEWfGKB7nz4cykV1kE8JAsxGdhycaSsmbynr3x4bGmYK6yjKodUUdTecHSwg3kPY2Car9U8y",
  "key28": "2rWpzZ71irnFYHCyiQ8Mt4vQ4Bs5rQPm82erB1YEvGaGzADKdDUeBHKk5yU6ZGhnTeRWaw67oDsYB4TddM7vP39i",
  "key29": "tSV3h25sCxiTn8gkMebtPajgiUPcSmT9rxo7Vz6bYZuHKTQjqP4mYb6QZdCQHFndbRGGmf7phKCzhZHsjFPGc5P",
  "key30": "2kaQh8F2JEHujoD3t1SKjgQwyhGEA9UBW5GpGm1rnE7DKhaZQxuP1KX7Kv9LqGBqGqud2of1yfVjAo8egzks2Rhs",
  "key31": "5KY8WhYLJ12FiwVm5y2cgz1joqAwutk55cog7m2JjykSoQEvWbrwQ8DBrXE1Vbi3b6M1edsih7ELNUvF2FW1A1gB",
  "key32": "3TBgB4bq6KdVnFJquxs8Zu48uUezEMa8hxhjr83JZKWJsv1o5skWTjrSJWvTbkc9Q1ckrpA7RKuaWpmWeYnvG8uq",
  "key33": "WwmUoWfXPEg97RQpcZwv5qPMbBHW7o7ugvMKp2njf8AJ9GbDw776hrEFHEboaR8TECaviPrkSJ13ZWc6bot7kss",
  "key34": "3psVekopFv1Y4YDfRNK2cvjnrHghKYP43ahNSs3dgoss1Bo7nGh3pMWaXthaYeCBvnp9NXWny7QWEtKko2Bfycg1",
  "key35": "4Vm7hWffBcLtrzUZhvxEUzEQrrRsE1ShKpNyoxUGD4Ursk4dZvoxFgGvaAKktb1nQQTKSUqnVHPeq38XhGTWjX2U",
  "key36": "2896KuXtbyMcEeN3RfoDkP14F3ixMdqdMVDbGSW7AP4smykVXENCZXtYYLjztvLiWFMR58B5AnkRJ3JyffwBiw7H",
  "key37": "5kd88Y5fjxjwQdbwwQM7L9UXVQ6EbVtdHUbZsQkmzJ1wHfBXFmmCfQecQ3a29wWrasrqFg5g4KVnv1sQyTEdAiv7",
  "key38": "5t7AtqizEmZbqdzxVhq1HwrRgoaP894SD6Az9duzrHJB5dqxM1KgfxPY8F2NFJ1fDark66AWjax7pRFgYVKBCS1u",
  "key39": "5BKE1Ng3aPT16MUQbeVv9aMiwPiRNpzz2w1kk6rj6nMA7zUiEAaexeQWxwW4aidQPT8E7kyq4DsYYWgz5v2WYaSN",
  "key40": "4kTHkE25hChs5efSsWB8iRXFTFwzkKR28xWSXqo3JU5uEtUPZAFxzByVWuvmkyLsaQpCAjZEGMqbZEeLjUVAPVdW",
  "key41": "y6hUU7ajNZEYzBG8twMHYFbJw96ttqae4kcs89k3YgFenmf6fZAcSWdiinbcj5CU81CGNFuRdkB2i5S3qjJv9L9",
  "key42": "3nS1VacXH2dyvW5x9uKChSfscGo2HQXcE7QuZU2TXYEsqCnJbMbiG4mp5iExpB28MJAC84ZxqnnJurXgDkwS4oWY",
  "key43": "5w8Qig1HT6iE8sDjBUXmLbFuZeTyYXffYztVs4ytXa9BjPeExSGSs83FwKCG13DHHVkrXTv9Dn9F8bx3McuRFoM7",
  "key44": "5WbWRsdzNwNFXyqaQdas44EAUTRuxLKpJLykerHMAoG2FfAZ7CXxHepVBVS3F6QJyyaV84qdvdDGRSwHbBCpbhFX",
  "key45": "5Gx8b32ALAwmtDPnaoDdgPN5BVnpcDYrsPYCP9g1RQX3FZTnBb26tuMuQH2UBJXoWDdvzuGVQbtd4kakJcgkUhS6",
  "key46": "5WydfhGHXtpWLWw4tVkWbWgTCwtScPzd14skectr8zunBRgmpxay3LkFnEeNKPkJoBLLzfy95UYVmm2ef4f8di16",
  "key47": "2MXkXzEcpaenCaiysMFHkhuddsNf5f74jEmZSwA3rf8rWqXwv9tGfYZu4qfcCbKfHrPG7937RbGgYWxXVQbHADWM",
  "key48": "pqyNdZ3Am3ujXTrGL3rx2f7AYnRQrLBQcNcs1nvF1qUDHhWAz7Ty9Pkeo6zoeidTsfikZ36LytvMGmwo7nF9i6x"
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
