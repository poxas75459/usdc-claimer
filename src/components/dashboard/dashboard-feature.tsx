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
    "4DhwazYn2RyVgcR5p5JCrBBgggPjAD3LX5UJWtynmpax6pkRVYHLCAJc1M5zhHX847Sp5MABHnigtgY9HsCnVnUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UTByAyb9XHS7PLT7Fw5xDhBPfFb7vrufiFwE8DrDCVazZeDv8FYJghqkJzgbvum9WRcKvDZQYEdZFSGgdWpd54D",
  "key1": "4F6GRcTtGg47u7a8nMV4jiZMeBxQq7fLwYFvLM1DNTn3bQmB9wBLE6uKETP9hvpfPryb17p58mHYJZvVqstR2QWY",
  "key2": "v2oPVRDriwsN32j7KFm9rR1eDrdf2MPr8E2B4HzmL1XuX2S6m99VBZa5Z4gATx9eGMqK5SZ4QWzk1FCW4M6EBaz",
  "key3": "2B3qdUnt8oiifDjTfQgaDxKj5gyPAuDW88qSgJyEL6FAoZzKCgmLPt51FZ6H7FL1hG836ZnLEHYZvTuJJYD9eKrQ",
  "key4": "5ZEjx8N5NhFczd6Z3nzoCbUkPaHzktymuaJd1izt75TPQKmfcuuuvVuuujY9b59LrbiEBKQjS9tsqaoYWXQEhjhZ",
  "key5": "sHFF8FLM3LtXLsLxVTNXyU6hXZ3YVYVhHVdh2iwsDL2PR5cmn6F84HYS5PKxQ8e3BW81GGSy4g2EnCYAUFtUWpq",
  "key6": "H3SJJpnQGnVwuBDbhJ5YR4eSpFh7XGtf6jkdPxUvW7VFeGh66qEtM8jFQ9zotv3cXtitGnn5YNbvmxqeiqp81RL",
  "key7": "38f1B36E1iizqK4ZxVqVXztsHQaraCACtbHTmtrH9NDKDQfr27ibGzjFA92nCQvpgeB9ssGi8bTx5E1efUQKbRH6",
  "key8": "2kZeESh4nZcC2dzaPvPBFCX9x7PwdkUGLmurfT5HmhhZYMEtP6xgtHHntZ5JMwBw3YX6jSgjM5JfahthQHLsQAqp",
  "key9": "4yTb8PXtLeZDRQKvdrcdrcm4eaFWPoS4Gt3x1cSmnGTVp2N4MoRRhV4R9apgmpDNKqYU5ynBAiBYs2hstJW4Gi93",
  "key10": "5y9q6rhZLayKAer8HuHAen8XSPSUYF6KgpatqruFyojTEshHW58o5jUvEB8PJJNQ1TeVeRwdHuigvJV4tPLEKrJJ",
  "key11": "3Y8MyEy75zTqWpVw9ZAEk2rtrHVmFJrgJUFPCY6CHF8CpMtHh6M6RBGjggSKYSe24qpei9iMp7F1cZPQBiwjACW6",
  "key12": "3R66J1gqkehjdJhjFrQ3ScVxdRWcMLoYU2osbgENXTwH7JdPHqeZRCaWuwMfEpv29T6N6eCWXkE5ieKFx8ZKYkMt",
  "key13": "5hZ8nqUyJ3oenCPct78t32kWVr9suKqCRR6zq3zv9U66vgPByE6cW1Fr1gedQxxVpDrfo3GGHXHur4kxSKyYD7o2",
  "key14": "4TanGVWccHsvwubdBUriwQjjwpLLHstTvyrbVzL39J3d6DAcKajAkjyeNU7cVXwU242djit5Az6bvjnA11Rt9FTG",
  "key15": "4MmNn54mmJuWVh9n2u55q5WtcQikBnZQnSHqd23S6qJ12jrbUUmsiQzQhJkGUnA9AtoTrWrwEyzmovdmQ4WQg9bM",
  "key16": "3oyr4hwRgH41fRL5S7fESDUtQsfGjvg7uGiHBEUWdUcM8M8TcKVQC9R7CzGPzjRBScTCMCJeDU3K6NLL7kPm4osS",
  "key17": "5YLPgCes1XoBhpjqdjkbs5eCsDPSfHf4uz2MSXiL4t3aVMVnjyWdPKRm48JPLFKFupGEt328ku1kRPZPUqJ9GjGn",
  "key18": "2GmvngnRJBavnVMxBfJJpM69dhbYn1wNXPeSPsW1gkzSg1gjUQhqZhKYuQ2ARFzXT7ngS5F3HWm6Kq2vg76BR9SE",
  "key19": "3W12dQznt5e8PGRdVQVQe362ua1Gs4MYH8MKFaJa7p9SpyNpHWpHFiJ3TynKTHWtguXCRboHjMGnrtZVjtXu1fCw",
  "key20": "3xhjytDbvVczGByKZFFTtUv5uJmYMyEqUQEqJBKM3Wf6HuzMsW8H5CNWvfbVbM1EoiHd4y37CWvgxDK5VaXc8Ljs",
  "key21": "3TtFtpiiWcE8mwy6YTSPExUpfF6AyzXGKSZcMcYpAFFj3Xh5shH3WK3f15oGJ4A91kusRv3LP5Yz1bXZCSu4CWn9",
  "key22": "2jApQ2LkQFVBJqv3ZEGZ2Rot5C7TyvKXGeUWHujjMWDQ4H5eNm4sfP8Y6GYkGZD85sNH4t8DWX4T1imZndizKGGi",
  "key23": "4W2y5Neur4wnYJg7isbyym62qH6n2wkMgy3gqm3SdANEvetQJo8acC25mSCt6Et1Reuhxzfg3SDcvBbSVQirhsfX",
  "key24": "63HccmZ538JEjycYFo3Kgs4p6hKWC8bRdC3ruMfh5dQ2JKJfBGtzsPkqDekeSA8WRSYUB4cuQdHTcuXH6JYTpdah",
  "key25": "3GUYAsCHMysP697Z7uUE8n8GSzMRemkCZ85wEEuYvkiudqA3h6AjN9ugZ9UXzTfUZB9Dch6YAStPgeohHT9dSXF5",
  "key26": "2gvQzNBpJrewgnPABXXLtn5USF5mHS7waBDmQBYMSRa3nXHCB3mbTu4veu9bwVnMAkmKqKR6f3MUxt6sa2Se8P3Q",
  "key27": "241XyrniYv5fCpqfGJfGrbakk7vnXwoUweygMyBBvjsN71G7xfMXSrFC27ERu9sF7sb7SWjPN3DhEQ7EEUEEwMiX",
  "key28": "2xftqNiFcQv2vG1czwDG6myHd7MLHzAWQurrSrbeCgFDPzxfnjmVCeMU91WkiHQNQpSLVNQQRdjt2XfcfSF9t6mE",
  "key29": "2bovji5UC6pTcJgsECh6kmtPUhFzRoQCxRfCbqJL56Fd5NtqP1rcRNZLtNcWTSn4dnbaMH2act6TzgpEn2NrA5tR",
  "key30": "45nxrnPtUFSzo6jyRF9ND1QBCy15PKP142QtrwTtVRECbg8rHFiquYytmME75AqcsgnpabpfKFTUxgZCRL3xyySk",
  "key31": "4kRwpLcKzf1dNkKuRkM8L7uDJ3DNnDah8JevVpwDndudK5cUXYGhMgEQLcDzTWXEL5GHfGRGDFunk45BFe5ZDwHq",
  "key32": "kDkJfKxAZeaUQTTGC8eVLRyT5RKbsho7zgUb3kn2TYTa2mBKprijX6tR37BpL5BHie3fGiRvz47h94ZH6ca6bNR",
  "key33": "4hFkxqamawZ4ZVtMHPPQwiuKhbqdXQo5SKFc6jj1PWuydYT1ibQgAzVMU2rhNM1AsjPok6FPAjNmWsb1rwT35woT",
  "key34": "4jXACo8RAcjFm2kFCYKhtjyk9SmjWNoq2m4JzfH4f1HwGQUoTC6dBsVQXv1nXL4A5F9QgUqS9qGHwVjBrz6fq9jT",
  "key35": "PusRXyffBTmLMwKX7Gdv4udD1kZ4wnWDScrYeqHyPJCFCZwez9w7vyMdVvBVWCyhfnc9Q47y4KeYz6Nw5c7xQ5g",
  "key36": "44ug72dkbPBRKYJcf8f79YL8rURb4TTCjV5WjK8cpE1dPCbMwV4ES7p2ihQkBv8MdLSHxyfwAxoJPEM8jGRnYiaA",
  "key37": "55k7SL8ckkhoo8M1eAs5kwJVJpYKtVmAXS3hzhGzjKxLSkCEk2ApZDSpEtNJJWUFJXh48bmgbAKD1fUpcsiEShwV",
  "key38": "QJqmwKJfUswKddLYpCKRychrpc4WBSupJKWMDFKaWi9ZeDySWQtNZBKKJkGN2WbpwNfoZvCBuNCeDLgmQrr288Z",
  "key39": "3LkSHsZWczTfviw6SNNspXFqomcjWiEjm7wBcRjAvJZ6NNhpYCrJBYxM3am1G9cc624reyEdNYKvuGJkiRTMogUM",
  "key40": "44AFonZSrXKXpvdzv2LdAY5HrYdqE1yTzqHCUWJPL7ofe3kKhb6MYoTHHfEWaC7UMZNSGqeqBiQQDthpgcFnLep4",
  "key41": "4xtuytbJY69cu5J8X5h4ks7tdBr7p2GD2oThinScCpFRj4mtsyjNwLmEC9SEGkYLi5uB1G5Txz2pt6rsQiR9f7eM",
  "key42": "5NgGUNdqjpLJfDB57ko7GfUbxJzBwzsHHqwboqfnvML7jqcviF488oMfpVdLdMCu141kbfTpp3UuK5zNuFSEFLea",
  "key43": "3cLZMhB74D3HRAA1becPfmLbxrJmY26P7m76trXPDb9wF4NuXtTdn8Z9SWH1xCp9fhBBABqr5B2sPXBKMs5R7N3K",
  "key44": "2RVwbqsDD6aa8EgZ8Rb1RB4cFiAYMjh7bvxdvZvEFywyAuYD9xp6imVtPJ4cnsdHGeeaQYhhLgCqdGsWutDgm5oT",
  "key45": "3EdmNjfn6iTJYCuPzLvt8Q5tys7Y1RCLitXrfyiJVYoPF3dPKG9fwn5tTLy6AUJDp7kkbQXqTaHfwMBJJx3vojmZ",
  "key46": "UNvXs9RZcKbSMwFRbgRSWDfrcQ311vKGdSSsbYghZ8vzWV1hGgkPSZFduGXpfsbbSjYCMXuspwzykCxBdiV5bQF"
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
