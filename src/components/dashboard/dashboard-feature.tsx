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
    "3foKb5ZMdotM3QKhUGhNgxyvJf3awD58zGJ3veiekpxequnyGARx3q2x2inTMB3jX9MjZKa9wAPX3kf4NJg5cb7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zKh9qs5n3NYJtSzdDRmzddHWodd1F1nj4k1Pv1dPCewF2q43tqy5tLqihGnh61MF3LMvG8r5wo5P453VmquF726",
  "key1": "5wsPpi5j65yozCfBScXNUB92sno9ojr5C2j6P6XQJ83sr6miMo9haE3J2Yf1aQdjSouEUaXdejkbpHD7ZFu8jwSp",
  "key2": "5g8sAH1TEEXMX6MnDYix2dP3M2eVpZ2KY7PQBtzNQWgLheTpfAxXj9T2W4uB66ooMFYXVoKEMyVWnpqJcww7vHco",
  "key3": "2Rqxbmx3dasiuEuF8YyCdZ4gXZQ6n6nTyTqUZFa9MNbyZmqsiqqveYHenehdJKLasd38doCrF4gjVjteMuFcAU98",
  "key4": "5dJPoZC38P9PKcwz9RFi6yzsyJiRfjCmqYn2nkSw45mEejAPWYa2uNGFAAyfM7pwsougXE2HsGiGQp1SCAXvx7SD",
  "key5": "67X1iuweZmqbAwPrUVnZt7bmdYvxVBYHnYWkkRCe67JkiyCp42RYLabppFzp8dVufNdy8yNHNFKrmTbfZ5qSRNGR",
  "key6": "5Hbmyc6oNUzFpYegpTY8Ay8HAM24mYD5GHFPq6MA3tHijSaXzZgDwcohoQ43wQCb38nTxVEP7C2rfhegKhR8vHAJ",
  "key7": "2MX5U6WoLwZQCHB5LkPPwgJZLNu6sXZwKP59cSbWhxy598PHQn3z8inFbeD4oVfeaD6yy9ag22WExfwcb7nwBjDY",
  "key8": "2iMq3iBrFPR5pdTCteSpoLHsAr8Z3T85d5o5btGw9ibVGHyCph2SCXTgZnboUHB3gd8ystnroJx5LdWFFZCqzghy",
  "key9": "3J5Gg7GAJKuRBjnZPQBNdtyQbDh2j4bMWo9H7La5FTX7RQnFnMrDNDmN2dY42KHwYXDq6RJxp3dZprcF5TeVt9nF",
  "key10": "5jVW5hAdkUyAvWgFfZGfq7jeXDgEMth9yeLVBRJtNDdUupotxmygphC3L1adCUDs2KbnMU18smiGDLVPoK8ZAuDa",
  "key11": "xfizSDduhyb8TmYtk8CQWj5whnFKtUav8EZruGyzsV79VDwtFu7uPHKwQyfim7nJ2ZkTFWCxraMPLXLA9jAFqLu",
  "key12": "SuWJLVEJGCGH8xMc8PUih2DypLYrENqXPHMzgqsh4LErXtdtqSf1fZK72W4dNAR5nSQLd8YbWwaso5gnFowpFXu",
  "key13": "58D3kUpScW8jKw1mCXh5d2iAM1MZ12kRDzts6je6uAfVXun4VV9xmPex9h8ZWnoQSKdr7BKnsuhLrf8yjs1HU527",
  "key14": "3UevwbZTTfcD81cXq4MTHkJv2fsG5vV6ivBjJCKJR13q7ZrxJixmY45bVdYB73qvgN2a74piM2QPnsMXAjbBLda4",
  "key15": "4rFB3pSV9kE1A2SnoCPT2dHAAokDfbLJZrJckMUBEcY91WEXCsjB4we156p9bQQbpYaLcLcw5j6ffcAkHc3UQUUt",
  "key16": "2bMTZ9efxpZTNQs4mcWmqr1yreuBzwsqpmweLpy2CY2cvBAbfxmXGLBHASTLtwpybkTUzRA9P7fRszZJNx8U7c7h",
  "key17": "3txyThALs358b75jWrX8Y2oUBykUDgHgVnkf8cSAKfasGngVeMPD6kqzx9hkQML2x9Em24qszLcRA1WQM7UYxBmu",
  "key18": "4Sh2fTipDnVRJWzAAMeDVgqNxkkyWSiY3MR2KE4ZXDpdRfQZ9J1LjMRsoPnypS5eGi3PnrYgdW4cSYT2UmCJVyyg",
  "key19": "4q3DEYwHdP58wrX7fNxR1BbmiPgVFRvEN1nMCiy4LkvBcANRa3huacr5Xty7cJN9wE5MbvXJxhv8dUiENW6VFvqQ",
  "key20": "yUZQAQyXLzJyZdMwW8gTidBzJ3FgMqXgCJYKM1kkrMbWGh34aZz77DsWD5piysXo3LN1atiu5ZJDWFmS3W84HMN",
  "key21": "5v2Rbsr2W9DyN5fkNTgBGzxqrWjyhuVgFhBzY3p9DnaHYq1jxsYoPVLkRvPJyi4ShTHKjPe8oGeAseCZegyW2W8E",
  "key22": "5KDGBhHzm6JQscF1PVYFknfgnNA7zpiEYFpxWMKjJgJUDim83wnjo6zAXQ7R7comPf5ubv5KdjjfDDYYGxQrCSMU",
  "key23": "4xCBeS15GUC8dN4P2RecAQ9sVNkqyCHxTMjwXBZadYDruoK2cckUbeJzHBJqcSHGtRsgvUc7ErPWqCo7y65kgpmJ",
  "key24": "khTaHk3VUfGE5sTpEa6dKYzNM8WiYsncyHw4fHYZxhkDyS6U9F6RoSLbzFCPGAFKJV77Srwjo5uok1mRHeKJhQX",
  "key25": "BUYVauTj1LLYLE2FjioTDepi6FtNyHLLVNHUWQqBdoWc6tuvpGTkbySC38hLo8kWH1ujtDDt9hK4AaVXtgDoFQz",
  "key26": "5AYiURn4MXkkn38JZZwaf5kDTgSYAa9S9LVs3898reeyekUPuALAXA5GksdrrbrAJ2mZA29PfF1EBt7EhJ5smBy3",
  "key27": "fbMiWunhnLKW45mZDvvPreNnScxBcq1KBgY9gaRqC1Vn6NkS6XDjzFCJqQFgxRGw8dNru3y6YxFNqEd9v3pYaDd",
  "key28": "2WFjZZCGukH431M8vWcemNwbqJehQsN7yFztNKyPXW2ndZADs7uycW6C2eAGGkxDHosCqpakDDjQ5bgUa7shtGRZ",
  "key29": "2j7uSwZQPqzQFWta8zAaHfvAhzuwwvkiVFVRQhahx8oknNLgGLLuNLN5PcGQF8m8ACG1yz521Z18d3TvHUgzFTZJ",
  "key30": "4t5a4kA14v2MD1qFmp9mtr3Jh542ZiZBakMQNnY4r5JgB2FVjzcuGFGJvgGAfexyF7c11FhHYZMtHcKcb5DqiLZx",
  "key31": "47WVG9ALBTpKEzVzV3JLxJ13CTDsbXsRkNjwh97mXw9fwgVFNLeELJsKx4cnfEbGgjmm1SUj4yCnWfDoK8Eny7fS",
  "key32": "33Ffng1FkrjKutm7PqGz4UgZiNMGvPa5QZniNbFUzM8RWgvWxTVuoaMgry62RjFVtF4BdHCURj8NoicTEPBx9hxf",
  "key33": "3cekFy9siMkWaRMa2zwecdKsEDU6HL9ocPhwcPQYtXqzAvLqBjd27NYHFwguq3gqzxcodMrngHmp5mUp5mguDWY6",
  "key34": "4a1cTa9Fmx5BehcRAwPN7H5MpVFjmVDz9qi7PCgkuwE1bGgbVrLWWtZXc2iHRRQMqV4ucAcvMgEQnxu7q3t1msH",
  "key35": "2fRRhcEx9UCjwMkYUcjruGKDsffyNMWASzjKesfsHSg8ceWDiYj45v3d3xbpFzCCNMaXWdJUMpiacyEowjsb6mbU",
  "key36": "3MezyB4Y3B14tByRv1NovMHnG4uCXyjyYmc7A85RZqKcVLRhXUNXkG2cpGtSmrFsTkhPuuuei1jg3XhjKxoyyHrK",
  "key37": "4fYZVnLn83rNUe4PG5ayXJvUvYf9UGYinGFYnFy4pxMsz1NDt8T2vUe8C9ueTf1gDJTGtCQn38W9iNnfWUPhJta2",
  "key38": "4F2eRZUvFAJUaZvpigXHRyz9cr19qzCUpkVVeZSgLrZ96UMRLbuKac8wJ1NTEbmhqGqjLYpMzxzXUCJ9wbKoPHGS",
  "key39": "3YKxSWAG1Ws4Epwt8yhve25mwTGw9WVb7wYZMEuyaGF2HVqEuvtasqU9nAE3BCjPr4DheXSazeVz6qqsCGyMvbaL",
  "key40": "3gvrd2JNDXxJPkSdE9r4Vw7TFZsbRSnpwdWbtRfLDmKyanaBs7swPt7SoSSPEKGF3NRFkyq1hQERtAuRQJb6rBeN",
  "key41": "5r37sdDKDC83gz2FMUsG36UZRptxGrPMDj8ZR3G1HLuNJAYNnRc2opyBrVCq1wzc7SvmX9KMMiUdLswXmJUBSxZP",
  "key42": "5VSCsgd1E5e71gZ31wuFgT4LTo95DNYY2b4QiNCezTjKvFkPYAzR11nd9uxKw4ZHX1HqoFnMx87JeWw6cFiiuYtJ",
  "key43": "2aZH7vuVx61NrLE41gW48aCBm7tQTYnb6TKScxVkFcww17hfL64yW6vVvsJBxZL4UJc7NqZsQQeakYwvAveHv7Vb"
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
