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
    "24Db4Kb7hj3yaCDrLcszwFd28CWqtxGZAAL9qVZhDfrVgWCpZLUp7z8ijJd4HVY1iPYcwYQhD9JyWxeHvHb8sa8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hY7rApugZjiVgjx4H4UJUJQjm9SdJ8oueiMmQkGeHdw2zusXJD2HAg4ZJ1Ezqvs7j7qr8bhyjfBt84FcmmWyS5J",
  "key1": "23MkJDh2119cTRtpbd4yg2ecLvesnutn6w33v1W1FKv7YvwthUpE4TYyjzf5XCz2pZbDmB2532uwaPqBJbLf8pks",
  "key2": "5wNwCdxGhAE7EJCWQpWaJZwDagpV7j1LULmU1FejTcBDSnPQj4TVVxv8MLPLgPcwMUsgmmCDSfbevSEWe2HoaKLe",
  "key3": "237xngbK1MgJBHFzgsiHzK8R9o9qGvXaRK8UQrbvmuRMWArNb3mBUBazAWH95s1Fpu8psah7JBcMVGk5XCGaYLar",
  "key4": "3U4LKEnd6UwGd49DVSmhgGwa3PzJh9mLsjJV3KcwdW46VFhwnEhdahqZeENjzVQtyyiAchEDEp4G5mCShazajV8H",
  "key5": "3e5dgrDdqKudFYEDeTXFQpdpW7Q19qBJ3Q7dy9sy9RLpfguwBUrUrBdqpSbvCaoiMupab7W1nR7TaAwfvZpBJ6Gy",
  "key6": "2f9s5DFMLewuEPs657f18QKrJJTEpRL8rKWCUcPdLzp74B26HL8X81uxiLZ7R7X39HuE5t2ewPjWS8UA5yeKr3af",
  "key7": "zB4gt2gojjRtTuoo1otRFfRJKkkYxPqg7xSrHZGzytZUQ3fuQn41yFBHqQ4N7NRZfcqmkhhk2PKAoHhtVKMWyhv",
  "key8": "5yyuFrUbBsp7hyUQSfp6WuhCavXWDjdLgxrHMx6eFzKWP8zicx2axLF84tirki5xXiawXDQGYCfNYxUBV1NAp8nb",
  "key9": "3UfPEd9bHFt5vaG5Mh6TG7Y1YXmauhWiPnmjyP3cELAe4GvMewbNBPtfkEAnXrHArUZ2MRnJj7e4oUCJygihZNyx",
  "key10": "3ooSRBpgaZbhQEx9bDDn5jF9koZ4ZdAPsFYzDkZYNHKhZj79U4ygXQfoj1o8koSKfNh7dM48njmaSrbtFPFjc8n",
  "key11": "2btBSm5RNujmuiqobrnpTdgdtEuSfPyjgS1pv3xP9h3ipcJ3xW9DH42JAweDnuwYGRTApGt1iwYqPTbtDoY1eno3",
  "key12": "bZZKcRS37WTVTvKDZrvHnLT69rNQYaNEZWC3aYS8T5vn9H8i7TxqQgWjSjehLpp6FmjY4i9oLBbFJPrHNZPiz1n",
  "key13": "GKaKfzSAnJ4r488J1if8bWdAYsxstoUw8FkLr43RWegjg4cFtBGjyV2agFtk6qadmtAuH2MrkW1u8yzp5zeQWfA",
  "key14": "2CCDJ17Z2mHxVYzBJCK9m6YN7sMF8CtsKag5FGUo4RjuVLDVMaQ8kqPVttUys8b9u9f9kL3ravVVF8Mb2zV7pwT",
  "key15": "55hTNm4rR8sqiV4PffMFbwrg2syYUkK2nhMwUugPSUnjtGtRoA1zLZjmRSNbyrTYeNpZCf7yH1da1tcyL1MYN7cj",
  "key16": "3Mij55hsyFBQ9pDeJkYHpEBCcdLfo44rHRLvVfpB2N1jbaLpFX6b297yHvTmdP1j9ycRQwMhx8NqiuwemHE1Yr9N",
  "key17": "2UGDPRTAa36gPo1B2vVWwmLELoXGg733j3awPX5ucJMkZQ5WgGSbnD63KHwfzVjrdzE9vnGSNgVNqMTgr9ikf8EW",
  "key18": "kBh8NrvKdQePHnGdS281SqKir6cNG2oC6FCa4sQfWKykb1um7wNBSmjUWeu2VNJNTwL2Ywf3wBD61879cmt7P8k",
  "key19": "9K3XT35JDayUubcbYXM1kA4XaXXNaYFYpEyjrMRG3QUZwcQcpneepW249hggVTFtKmeAQN8DZxWpgV6hmNVvKji",
  "key20": "66YiHayvw7ncVtKF5v3BLKeHHeGBg3vYFvCdYxjYBL2rYagxXK2YYnRSd1PQFGsER9QZTmnuEmeSztJtNxMsi3p3",
  "key21": "5brWj5X716M4kdYvcff2rXJyoVBY6w5QEAHQ1dRXg2smbMNYUWMejaaVCeKm7pKGSLP5EsjCpsjjxemXPuyUyDTF",
  "key22": "4anobpr2WW7M1q5Mvj6khhWpQBPL1iGpYm2DgKz2Vzph4aXgoSCUCDpJteU9kV2Ce1CnvwdgGDyRUCq9JrRjUN5f",
  "key23": "4FkekeUAgRoebonNd5KCT1Zr6rWS8YRsPuPowie3j3v8KctgAYBfiaRCU9BZrQ79Hbypo76a7deADaAaRWkvPpbA",
  "key24": "3hTAe74CTMhiKqRZVztk7uQv7UWiAKj38WumFVmeb8saYEVrCXWsB7WPhNdwSETajQATj1SjtezXhGe68YeESX1E",
  "key25": "5eDL24KgxrjSC6yYa7QcwxjSp8a5nNbtTYsvvD8cGyuSDYNwLTcFtQ2ASqWYZDNniKeCYb3GfkAkFvPCiUvsefZT",
  "key26": "amaRBHuin4XaL2nJxKTzXy7dbig3DAhmLjYjzfyM4uLvQn9B5GDUxfAQXYSSvLmRzvcaVEjtKy1YtLaDiWjkhnH",
  "key27": "38AUiQoEtnUxSrbrPp738Uiq4YndtsCp5w62LBnUtL4z5BDgVsjXVviZGvEe3xupq6p4LFajJUcRYYkR7EBaUBKB",
  "key28": "2SmKwAmUthPekHPwEoYd3nyNTnSsueaCT3vJEStGLw1EKU5QVABY8jZxGkQxvPKGM9QDozXkgG83gWMa8LkAwqTY",
  "key29": "CnuZnJmMahn9iRMEd7LQ4anxpkfUb73ZK197pz3VU3dZJ8W5uM2ADLXNbRgULdXSxyWmkePReQFhhUh1uWz6vjS",
  "key30": "CufZxFyMTVoRdvUTQ2D2mDzsc2mR6JqpVDA5eLtsTm1AWPhgmKyGBUrBq715ksV8Y2UXFWy6xAZbSWAf5rUm7t7",
  "key31": "4agfbxnd6EURfMgKCaZ2NHbEJCBNmhRRy4Ux3P8XVQBemrtaFxThhVdM25W1V7Jk3JxnCWTZNbQw3oXg1QUdQ4DW",
  "key32": "3fvN47TfKXaCKBSQfCDoYURq18i7pJHwQs5GeCUcxGxVfDoUjPYr43U7CXNs4NXmC2evpukHLgTAMdKZxrVaHVtM",
  "key33": "3nYr8ofyHv4Fs4L3qiYWicUSaRtpBgaX9pJdEudtH1CKq5ZSKiKi5CbgReUR9DB4cCMVJupWmZuvFwQhMbcLn4bW",
  "key34": "e2mEfFre4ao84PrZdDuyoG1DnxagxcMnZdBZxRn3SLKqeEpZMt9WvWRX2v9YZf7fmEsuBM1oPyHvWAVJxCrDuqJ",
  "key35": "5eShvBYT6GzU9XYfY7amQEPhZspNcESoZCGMUGfynzHBEMPqXew57VBRhsRqeBbTKcuvg8moy7pCB44PxQadbS4f",
  "key36": "2PMb3gqRDVggJpfSnpptqk2PS1QZRcM5jZd7MCv9vgudVw88H7THdhDiwn2a72vmBnLVHxYkDXzcJXppzy2sZMp8",
  "key37": "4wynv9iJFShx8E7hsA9cbdfkB2AEL72DfhVx9nLFi1PMZreeVm1nnaz9yazX3LARuikogNdTzL9stRF7hxyccd6q",
  "key38": "4kczKwYtAAWNA7QCjPXsVZsuHS9tGoqaKuF9hXzL2TJVZjLSWR3zYTzMFuEGmLS2ADoqJBQz9EPCF9A9Qfdb8imB",
  "key39": "32H3uQ1SeNhxjt3SLpGUHBJhpmmLsXEiMe5fEqgJt69QiNiQ18zKugGsmRzmxijA8LqhMxeptm3CCBGuq2j7GBGw",
  "key40": "26VvCVEaBrF2GGfXAQFTZQjNKjXUtTssBV98TbqNo2N8LQqVcRtLZcBMduESusoCh8QawWnRLWD9QKi8q5wu1RCP",
  "key41": "2WgAzcKHU4mi31fY7oSQtf3ru2PKoitot3sZf8TUYghGEmjt3dcjJjACvB5xVNrFg2e9T2hqoU3kLWSYYUJpzhPe",
  "key42": "5at8SxaGMBvMcBAFsD7EvVxxnVtVoLP4ZJ7VPzF1KQVXonzsZFtCpre3mrwx3JxgKhfvafuK7M2TS3SeJRAspHUL",
  "key43": "2DMKDrA5VweqQNqDwYNNwizyoncPBTwDzN7QXTR8AE2VTtJRDaLZ7RUceudxoxpSA6i25bGXNi1HATPrX1ynJYK5",
  "key44": "2R14cyoi55P9RvjSJSW8SCWjJxBemuejmm7wCMpLAg93yj5wMdDUwu5634bx8z1gTvnVFbpe53fxF1t8mAq9U4YY",
  "key45": "5Q2GMBe6vHAVifyYTYAxesG5fQBQWuuBHrx9mWPYC11uy2qDua57NW61uBsz3zRQZYC9nu16disy4t23iXx2CbVd",
  "key46": "3wDamH8HwNzbnQMFxKmuadWbFkUHJYM7V8XFDBZsmDX6on8PqiwpDwyX8eTZFsK8R9snwxKotvUXZq9g9kEqsnyH",
  "key47": "aGnUgNQ7btqhND4XuaJEfhKg7gMgaWgsuusZw652LNw1QeSRXjyg3aMxJoHhHHK84xpmVauPVis1XE5jKignBqQ"
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
