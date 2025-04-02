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
    "2R4nEg2NEYRnwuAzWpPeEPQ24GA5U6MexPAG15PP7FNdzi6Waiqqrip8PqFQTNYHJMVayaSX2cHqRFiE8kWsofVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dqs9AncGzsLJFtMQ754SsjyyvwyVLTLxKxtGw1wx66joZSdqqTS6UadwjuPURJCQf9izNUjQVcMRkgcdVzf1UJ9",
  "key1": "2vXXmMKaZNpAmhJG51Y8SrA87y3E7MCssLogQY6sUz5CMLbJvoJLMHMgqYuDovzB8due66aDxMAfu6hu7H2rVi7h",
  "key2": "xkhuLAiS1nSyih5765sVcEL9PzLsGSgGFErk8NBkskjtdKiLoAa54yJgfMTMRPyuNhquH6Eq3U3yitpEP7e6eUj",
  "key3": "LcXC1uLfypMkhJbQiE4knLE8EHuZSroc9a2BR7BqGetx7m8wXsv1uxsTDmVCVY66ofZZ7VRuzoJNhXDzpHtJm5S",
  "key4": "4uBytR6yAaaCVTR5Cw87LBg24afdGpCHccgHKBP6ms7B52XqbHXrYZWfKtqNeredrFTCrvnRNhpZ1dQGvVRxy33y",
  "key5": "4eQEx8zVqmfHzh4bqnxsDoHwe8kb6Q4Gd7FAtbVJN2kPUHXrWvT4bYgUGPrZB8SXiCSEaUtPM8qdQ7tED82RwXLw",
  "key6": "5DRC4N1JhyWTZgUhqUQKvitEuGXCf8ohS6VwmiC246hZNZTsqUJurKo5EEysa5ZzuvocemyHhEyNA3mpygvqWqUy",
  "key7": "28WrWWUoyEtiLUFGMx2PPCifPJUCdAA8DcgWqFZeLfFcM9DPAh8HbtyrbbzfVWZrHL5ko6ed1divJpgeEv7AS7pz",
  "key8": "25N67LCmQdK9JwMtAGyQ1kHVQTHKxVejn9aGJ4Nq4iyueoG3e3AR6NHUntDCjfzvqvtWBCHikVBg3eaGcBNQmja1",
  "key9": "58XgGhEgQRGMiFxpFUfSz4U4jkjgvgehLSxKCCrLefvwnNPYmgHjwmb8bdWYgnZSLoBsuy2xPMp6RwxfNvHhjFdC",
  "key10": "47vkBXqPCekscUpiYgmjKfcB7y6m2evxD9pNXTnNdEvUsUQF4hEkkSAEJoaWw53WLrVXJwcFpMHx9dZxs1vb41f8",
  "key11": "5kD9Huckoa6TqbzGjXQ8LuVH49QFE9t8kafZPcC2rTQoEqtiMfY6HJ8tGPNTyNmVrVr1uDhKBGrcPNgfuN7M2TG4",
  "key12": "2GjyVDjPqQX3KSEKkvVpy4riXm6vMEDzFB3szDt8twdyshK1Cg6LJJ37qpS3G8tg81sdraoVc3YZuAmLPtePHie9",
  "key13": "5bbqWZRCFTvqn684HgNJLagTXqzGy75F3eRJKMJCnKam4Szh1RQtYeL6QgBZG9ekuX96DxKrcctW3dASARUfH38y",
  "key14": "4Cn1uYsyN6rrdwT92GAkb1fzeJNEsnQ9FWKQsQ7Gj9XGcMUxCbbJqD9Dwq6yHukMzn56ZDxcbw4RTeCSa1g2p9UG",
  "key15": "4cEU65rqdYrqVLWcb4kUhVWjH7uAt5RE4vD6bCT1iW3t2UaooAhFAw6abzse5umJTBGyKZRvvdFKCddHt5caZeKX",
  "key16": "5KhYgAh6z1Y62kDdnem5dJcpQdzUkgpSiUCzZ6YGkq2Xpfa5ovhknFXjh3gJZ3c475MNRtg1ZDp4u1tfCH9tQ4it",
  "key17": "wGYFkXHfwKQHqpkXvLwYqU98aZ9F1j3THaDwymV7PchUGKfaMTesNfhyCnrmDwTMywrSKRdZ7SrZw1F3yL3udQM",
  "key18": "4DThwzyesvBKFvx6gaG5wA9JT1ipq2ywVfFkGSibw5d7b7YRPhkMTP81HLsJYDSAJxh7AgSuDXGYg4SdTLd1Xi9t",
  "key19": "2o7EKeTihDi8WaC35vJSzbZ8DF3THfeHBPUSLSvKNYKPq7zmRCZHVeu4Tx5vLQwCnMkY8LUkYRhRknNwPhTY6J1A",
  "key20": "5YtfAgcn4hLiStarSs6kXsVQ571GJNfAonsYuQut6geRV6qnP1CBQSp4vZQQ2t6BX8scPRLAXve7W89RM1JC7GWb",
  "key21": "4Jt67BSoeooh5o7KbhDZ7GsYTSAA3dfwvNv2DLB4cmZXHxvxyDLrFfQbJvPeKcUmKYNSFQhyher2BWxdGgrSqiDw",
  "key22": "3gAQ7DuGDfHjssptRrZpjoCAwrDQEhdZDVzx9rRsv8orjH3ZUkWU2a3e7zr9HBVQ9HcJdYnNdFi4AWbANoLp1HEa",
  "key23": "5ENSbVnDcjbgxFwDavD168jRWWiongL8ihpS1h41npa2HW165ZR4QxhpugH4qcDJFEDekQYQsu2iXERSgUEZ5MvJ",
  "key24": "2cVofnCC4BYqZUAtqp3YFAxZ6JLxuL2iKjLtXCWwdhGvtNhbwab8Fc4418wBkKUpdbCoWPiDRKEtokYsspf2CqL7",
  "key25": "591SgNnnb1aQoyjFmVLLrAGhu8QK6sqbwDBXLSCRFYN7i36sEfe8fw2Eg4tNLsswrFwEaT5Rer25agZLFsMYk5dk",
  "key26": "3nH1vJUAbbUcWZa3DTMgpwPC3wktPngRVaAVJiY8wEXRatTD6U2aYsWgMsyLS6wmGuUyDu6ptf1tiv1EmSbx68uN",
  "key27": "44YKnk3pnoVS5MWjcdqiCPxMNKSKXwk1x5qewzTuJN9iGXiKnyF6sRojZtgUUECkFG4A62PZRBQrHhH8Ynvft9U7",
  "key28": "5C2jtaR5SbitZK5CbCDNJFNcuh3A6Z46a7nqjgSqbenbBWRXKr54y8PhJJdD7GipuuY48ovucwV8iCcqddVFtRcy",
  "key29": "5fhQFDVR6kPTTV6gghaghXjdf5QUJ56kD6Map6QVsU2wCsCjDP4E79DyPKQpDDdpexyShyXG78PqhpLXNSVgD6Nc",
  "key30": "2cC4NbW34JkKHmDoFoZBSebobbBt4ETYVfdj9dVon4qKqFT7JxZHjeb2qWXyu45Q2LypRTZpnqeq8NnzbDk42nEj",
  "key31": "3vdpLAqsPNSznaDMwtJv7rixn4a5nC32SAbfa3SZnxycSiUax2X4AtDMdpnWSo9Mai1AP5bkS3UtorL9NJJ5foQu",
  "key32": "2F4JV6cXb6exsqfCxJfjqN76YHFMxtwJeiRdEihkB3JdSQ5he5YBRoDp2xFpdnBuYiPCHxo95wkoG6zoRFdf1SDd",
  "key33": "2FVV51upSMWgtehp6iU2wfqh3JuG4d9JRV6awx5SV54BjjVaxFtYTYrsPXbiECSJffdXhEtaqv33fkwm4zEGPAHR",
  "key34": "5HSJTvnrMtja6i1mbJJhUSt2FWcjZj477PcAn4KkEtPWzVKRFnj9BJBvqAxvvog97wvFtzsGqvJChA4xS3F86EGR",
  "key35": "5PdBrwfk6FV7vd6mYFi1yRjDDubLW9eiFaMBWV5poUFMRr1ZK1dqafULh7m4MDAPyxjecDdkd3axFFNgw5Tj8hMH",
  "key36": "5VmfoHUVKqa1dmGkYfZdv9VPw4RkoWpjv3TyNxcBZVBjP9TMMdY7FAPWidqUzyUwHj2j8wt6WGy7o5zHR8xR6uEP",
  "key37": "36FrS3bTaejupNazrx66tcErUgLDpLJUaQwLiJ3zgT8evszBdtunuoqCuNYSDFU7TLSmWZAoTGR8yJQ9ED5Wqvft",
  "key38": "62iHEpP6d49H3iw8tcKcZmr7DpK4UxcUbqaTCfM4mwFv59sifNbZEPsW7m2e9upZvw3pASzUTwiVjuhAiqwVG83W",
  "key39": "67N4aonjnviELJDx1vmKycCu2FTuWWA2qmfq5Q3GPXawv3uFyXwLgjAm1za2w82wi3ZB4gVtBWh1HFiTGBKy5MZP",
  "key40": "5JMDTk5Rug2o5kaj4BBrcBAcsXp5TqPFHKrC5Yx6AxgUF5oSvCofAmbPqw15jUVSfdbNAk2GRRmsiCPggyZ9mcmz",
  "key41": "vv46hTMesAbzgL6HFNfVDtDZUeFSM6W2kNkzfrQREE4SzcAnTm4AMdhRKPrL5cjKpfgf2gqVfo3uCKgi9eae57K",
  "key42": "45mwXWuR1j6v7zeq3ghcnFnRhEPJFAnN7GzWLqh6W7DNi38JWc3QXXCQEukHUwr1NDvjHw3MwjEwmqA2XFcPXcDy",
  "key43": "3sxbRkTy8idG6B6sSjLFuioGFW4AwhJGJu6mHiD4GZZKR79PYPKFb7VRFXzCCQzavyqMSgndRfKca8fEwHcDtGPJ",
  "key44": "5agizribpey338BAszEUT5oRMmPzRj1RhKzVuiYvidLHudyVWjVvRa7LJ9PU6f4odNnMFPT31NFRypTWfs1iLS7E",
  "key45": "2PS5zrJ9tvSEQMvyfdsw8jduvcEhq1zaBV5SMfDFY8PwJvhpMAoqcF419M6QAGkzL4UJYcXxCsmNCkFymTvvnuJp"
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
