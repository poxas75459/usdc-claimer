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
    "os9RNVhJro935LFNrX45QCdAPDuRTKuxnEBndStxau3QK8YQ5R3kPm1mAF5NpN4GhWr3sM6BUfCmD8YUDtc54YW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "apXN3cygNvBrCejAMK7YZc7qy53ZnmLeko9JNWCvUxV6jyL3VWmUxmNCeSh1Nq4rYib63w1ZWdB4WH3cQrrNmon",
  "key1": "4XCWjQr6syKGvGpxukAr58o3uXLyGuDwYZykmfVk9TJZRwX13pL7No3rW39hULVGAazDBRVmvYKW9G8X1PY72JRs",
  "key2": "49SBKDBD87HcreVcVAyyaTxZ4kiv7xfUt9tZ6GmCJERPidpqaksu1PoNuL7Tj8sdSTJosXbcRQvtPf18cZsMcauv",
  "key3": "5Kf1JSZcu9WHrjEmN9tqSePVkey8AwkGoagPf62m73eTvLJtpLwyUH7R4qEGBMZDpzvX6xpbMMgu1stV2wsXsEKm",
  "key4": "NuEdmX4MhhdAJwbkTrswWqMYNkjfmkUqY9giNDW8wbcqi4HonWa6UG8PR6eb3Uesz8xctqXnHuaeNsKRHRYog3w",
  "key5": "3VdsTAuTjsnHcdiLuV6Dg5kvFKuvoDhiGPuVE7dSfTGP4nKcDime3ktLUJKMczPnuy44AJtmrqUVrWDcjTxBDUAk",
  "key6": "zn1LRbrgxSM4Jswh6fDiShnShwBMTTf21k7FBB3q5u1G9qAEZttoVuxKYagCv93Fnr78WMhon5ZeQiF9wSTBNht",
  "key7": "2Cfaxp1pp9BRe4g1ASnKN9nU2oqtavMU8Km2WQ8kcaQL6h5esatWMQCiXMwjS7s2AR13QUQ1iAcRZE7sw1JCuMJq",
  "key8": "2d6pvdgZUMZ6LozeVGS6HRNnze72Nh9ZrMDP6nHfns5LyrKhuFLRgM82bcPVZYn7G7qtgKxvPuYbmRJmaWdsH7zg",
  "key9": "dscRc7Z9mbS5xEYkToVTT1t2JejSM65NKrm5XMtwpZuPZ3S6LjW8gCvrXMTbSEsk7LesDmkYP5nQPT2mbbSHMTp",
  "key10": "4iDpjonRrUyNqnWciAUXnfbQsZbKz3xyjyfF8TDtEB6yo6u2t2QbXhCuN3ymbJJ2XMJbLf7HZuREuJxJx1xU7TbE",
  "key11": "5yegrPiByGoXMF4Lu5a89bxEvSEdgJduDfti3kCKagQs6Yn3kPCV6Qvqdxdn3LwgT2NHvRvdTvf8cmjbPURrc1R3",
  "key12": "5o8GADYtX21qLAfwe1JxLufYBwV1uKfMuXtM8GhUciLWnjnF89Ln5er4FeCbse9G6CggKFo27n2wyV6zvFYvNqXt",
  "key13": "2kNAi21PaCUfTMEztJcwGg7BwD6nTWWJg2zx3HF3GqPCwrLiQyrTsYnW6tKLKbtRyVvoKAxA9jYv8NmhkTarzvkj",
  "key14": "58Wa79faGboaXkoaGgKHC7DsSnEU66imj2ZnSYRpCbojQYUC1WEcDFmYk2rEsGdmfxoyFDAW6UWsHZf7HbDd1iUu",
  "key15": "633xKw1MumRyqKndpysVf3ogV8qJNvBgxwJZLCZqA6fpCCePNt7rAxUVG7SditT6CELRqU2LMC69fdTGyrwqeBW8",
  "key16": "39b2CnqrjUGJaeVKvup5fR2ndF6gr1KABDruD697qhDPcToouksqnErZj4jAYjXKZ6SjmWhcYJywgmKNmJA2ff1T",
  "key17": "kjzBodfom3Q5ekNHMg6JwWZJaxTw4jLaC126ZdcMosdYcxQggau4Avtn7WfREcztQ7rmQ5BSJAo8N2CRp1qo2mT",
  "key18": "2VNMUmVWr7zPGVBKbaeVPzEk64DU69gqWnhbgq7ZWFyrjMWoZfA764LRiCqJifXtfCxLm9j4Ba2bYprDQiCkvVti",
  "key19": "4gY5aLSWbMoFvEJJHuCcrFoP4zXTkCcRg5JrhXLWGXznAv9RB7WYuNraYRiXq3RDJmasjFZLucxzNZTQCzyZ1Zb3",
  "key20": "2iYceL8CMALzhFhvxwQ5bnV587DLkeUNNdjyyjJnCzbzcah3jSgK17Qd8GRFrqck5aAAsk8TWqhPddJZfMAt5YWA",
  "key21": "3J85SsKTwwygcYuQuZ3Wua387n3JFz7zD2xE7FtC6d9K11CmKjf8JPM6yRYiQe3JoYKT48isiYBgyr8HZQEuWLUw",
  "key22": "5tXDZGc6uWh2JvKnYKwyueRb7eF4k6UoPfKnvSoFvPpfEoXLNd8spLQGLTxQgXSBiT8vQwefrYRhMuMBytrcsVDg",
  "key23": "5pds95rChUgLHzjRoNxjQPwADviVUnv1fF3GudeEDAM3XMvBZC4BqVhVWmptp94ebFrtXNDturAgso6ygGgBVztt",
  "key24": "4EEfwgGsM6yefR6PXTG2Zfcp8Rq3vgCYZPqereScepcTZRuad8vSyCQuN5AS9AKpa7utafHm1r7bKqJEibFiDsVw",
  "key25": "n5ZBrJdxKYY26RfccX3sZEi37NmZdrLLfqW7mPxUKBHgknGrbRQbDXJH3Asw9yTSYSGsTNsvpkUoXfB2spSnuz7",
  "key26": "4qWgmJi4uh8vnCNgdTdMnMmoSdLiswHW8fDsqxhbV6rg3HN44bcEquzfQ2cZhTDC7iZQNaLpnBRt7vuFV3NuBpmi",
  "key27": "4zmFowweTdd1ExAcnJNdhTuM1YaLYJxtj1Kn8Td9dMxEPXR33F2VoJKKyy7V7j7ExF4H19XzsdZfEi5uQaixjyFs",
  "key28": "3yqECp1SHJ8ZxzZ5fb3CQ27bRXew4zLCYhAVRYCUMrh1SM1M6rjibjS6DKzb7xzNitxVz7qbqoBRLfYjLQpEC4LT",
  "key29": "L7DUgq6ANagGRQAt2jcSe14wk1YxnQ25qEHFTsd62gGsVnni7bKA9tSAoAHyma1dvqeEiRRtc9gTgJTQpGz4WYJ",
  "key30": "N5DWWMgjFsaX6ChSUwDugKRULth5RJvNpv6MY83RQJhyyxYHiGHW2whGSEoHs1BCyLNujhvn4VkLE2hbkJTM3A8",
  "key31": "2C5U9a8c9jDF19xzXbqUZBCnErmjT8mDyF7HEKF7DG4WLwLPmScLVy8RoyAcYogLLwqHyBv7SgvLUqq4nTyNd1Ji",
  "key32": "4YkHqBoaG5FkPywzram9S9CNRSxcWi2Kiq7Cug28Ws9q7n63qP9Mv3uBRBYCkjT9xdDNAuovquuHTEB5WqedWarB",
  "key33": "JpCjCeB3Nbke9ZUC2JuXk4o1ELP7fhkTYRAmoryhoUBVE8DwDxCg2g9KkQLXVdbsMwJK7SBtsfBCd2y2CVHckoG",
  "key34": "2ceBf1jH3qDykwKnUwqSfj5Qvn5F7EsJZpeSj7rmLx99KKTD2hfiDQcaoA2PLSG9FTtZ1kAgWY3BAdKF1LemEE6S",
  "key35": "3CjaZ8a65AV9rkBph9A4AsvbrzZRaCcxq7zmQ5oTj1AMWjtnwBP8KmpGuyc79UBas1cnphjTuDw5HhwApCd7s3nh",
  "key36": "pLcHKdeyVpCnNFSZSvnkPnwiNioHxNhT6wvke2c5A15Ye7Mg5F2PFhKv5SNBvudcgitwmzwCdBLnaYeoLggZmUZ",
  "key37": "3pgM7CCnJ4RKk8z7vDgmJQCYnzC3LUz5LQBT6wpAbBStH4WTekqmJb64bM1G3Sst3wuVeEoVmjWJvLGA4xyxL9R7",
  "key38": "4bQRqrmfZ9DNRuCjQXoYvFCP5K5nUaKyRFRFFYPddxDk3oVHrJKxsYTKs2Gszcre2xFLxRb2ZeHTZbJnfrESQENq",
  "key39": "sKNJntg77hrwyAy4VrkZ5Xrw1jeyTwFKNZ48aA1U9jHUYMxY7e5sGTwtTSaDQYDoH3m2p7WMqZctxqbgvRJXwdG",
  "key40": "3Lw9FBsCtHKAZbKgWmeP8YiqbYYgxFFyPA6q25iu82XFSUFoJruEuHr7iZfHW3GK2Z1CXrRQJ81QeRfTdgxkuYKU",
  "key41": "2VqYcqiv28LfBUGVcSvoGi9rvoiTpqFPfur9ekSaV9B76aYALhEFZTf1nYFPuXFRXFppdukGrcyhtE7wxXWnMGtD",
  "key42": "2vqZrYX42KpEUVUU2DMMQmKnXk1h3LYw6XCFQ98V4pKwCQoCJi3CHn5qPwM9ZKeiWjUXGWrpHhJSvgnYpHUZ8LP3",
  "key43": "2jbaVB5KVc6zsnZCNSUYUUwYWW2MWJTwrvDpB9nH1w15jG97Uzy1KWoKEUmz258sLzRVxZJ23vBLTLqeJSA1X6PB",
  "key44": "4UZYhzw6Qa2tULDLbct1QuGLhm893va4iLZPk9qQ3waoQYMAUMuhT6tJ6bnahnaTQE3j6BZPfEdQ5CVHsHtQZXAR",
  "key45": "324HC5yyUTVUy9u99xgDEAjf7DQYz84GY4rH47HkgSRZ4ug13JqHNQd6tUwXq11EzWLLpJVEJP2SmaQsWAg9pbfp",
  "key46": "4SGnZhT4PXTyBW7dJYw6gTDCg7d9B63uZFg65tt53gq9PGB9UQjAH2tvk4mMbq7v2UNRs9gJiNNRkoSoQFmyaJFG",
  "key47": "5STvY28NPTZjbJMqkD3cDnfeTBn7VvuPXA4xu2W5osDJL44U5oCFC5n9nnpJQFGHhDf3U1MHQqmdvLAzQRXY9emF"
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
