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
    "5RkeHWErLrA7Terby2oRomWvdScEa37TrGuzf1P9eZ1FSAhLhv62ZbV1MEwNHj3KmLcNbgF4cBJKWtqSmJv4eyiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S8HZLPSPXfmZHUNfwGesDqFFDo2S6XCPw4xD896oPvR2QmXrQBxnVy3axpA1DdfrMPbqzHUUJv7RTqPUvxwVZCE",
  "key1": "ozy9ATFAPy63DiAyuUwcAXSKMDF8S7WKvUCfnz6pYW7GkKNbMt8XspAAzDk5fefmyEHreB3dnUNVYgMs2fDuDH8",
  "key2": "375V5QaukmudH1LcCzt6x3k1AbovNcfdDcj7YcH3guwZVgfJSb5qkm1421JGWbCvtffC51rUeqYr3GqZon2aGjG3",
  "key3": "2Z71B6co8sEZbGBSkzKTbdT2qwHwGSw1JqnFNgvfbjCvfpQ9dgVWwRJ64nrQSvJ8QGbeAwrvcoazMFRKpWarTKdH",
  "key4": "W7MR42qwqZ94mqTmxDFogghVLMnrhcR5TmBCN2h1dX1F9DTGotiY4rJrAhtHhcc9JzVm6MzNsXhA68ZhSLdMwFM",
  "key5": "4X4t6ukGrNmWdqufsMzieR4jrsTh6kVQ5h3KqvtYR5VGgTBYUHthXsMPAbdCpKsoFVjCAyoaVc665GENFaVhUggL",
  "key6": "u5CmsYtJRKw8aGbPQYYL6BFzjt3Q2MXi3BUYv2KDRGayPvgnP1Zt1pkKT9Uupe8Mu2GMmVUbmohL8qjSy2DwAFy",
  "key7": "5XNQwnhbgSoJXfibtTwbHEgoLbxn5AMVR9zG5Vf568U4ppXS8DC3dSpxt3xwjvJtjY2v54eJTm539aW6kH3snfJj",
  "key8": "37wjbvg3As5cBKdSRxiASzGNebxAnCchxDv5pYoxcUcTjZd8jR6L96EFUjtkK46RC19CNU3mrY4QE7eg4oxn41Q5",
  "key9": "3s25TtsgZeucDALA1DooxMe4aLDzMQNBfb2dfcK1zgp6ky41pngtRBrPZgbUgSA3Bb61UPzydWp43UvQAhVtgkBn",
  "key10": "5bQrv3qXayJS72h7jMquRHW9sqNf8WfXK8Xej7Q6PtRSPRzLzBPFcW1v9FUupi5FX9i2dNBhmYFZWwixhMxjo3VB",
  "key11": "4kHEu1sm3kQKjQ8a6PHPa5MyqkjCsNYKA2wH3y8cAfnvNQZMsWcFUMUtwAiDxA48upEaPEE28AgvVXYHbR3F4VD4",
  "key12": "Gtv7RWcxHKfzXHC763oKz75FLAHsNxKWnrKsNBtnqRAQ7JmxCdwC2bVaYWx2LY42SVVhQH2xLEjTEqSogDPuBcb",
  "key13": "3eroV9u5ay7Xff769zeQwDGNr4surBpFu8GXH89zcY6ucGZfe3BmFrBAGmfs45MQW7B1HKSRvhjdvJEBQ5qk5qTA",
  "key14": "63KMmu7h4qRi84ogjk1Cs43CkLuqQi7pqXjhtWMcHMqE1ThS4ores9EJV7NMv9dhwgtuGWsQkD4e1HLpimN2ASMz",
  "key15": "4me459yS3vHdTur2Nm2p7xktq7emD4Vtsgy7UdDC5UzUmjFgi3sWamV72vJGPRb2sWyiP1Z7CPRge26ZypKQa7oD",
  "key16": "4NTuxzRD5zRCMdcBPuvmfUrhHwaE2ZzofakUkphD3JsjRx9kUW5VsAxGZnPAFCXTeuDVXVvqHp3edChv3wyfSoHf",
  "key17": "4WfWmTbS5gdcuTbg917AeuSUD1rx9GzACBGWVmZoNpiZ96GJCfj7Z6FFQpM6xfVS5rmNmQHWmF6k7GdAgpx5hR1M",
  "key18": "4xSmVYdPhPaKY58ZifawdjfcRA9rK1vhZYfy1qvqQE3CqWZmanJ89dWuWY8KLoTe5qDCmW9ziYESSXFPZJx3fzP9",
  "key19": "2HezH2XYUexyAu2kLYfkCWtaNtwzAkwisM2YwUnpVHAV6TH3F5J44uDr6NnKQdgAaFemUwMrmBZCxYKSd5eEJT3R",
  "key20": "yXhLte7oxw6nU1EfEGk38iCfcZMmg57wVUxTYs7zUU5ygX9grbSuN5mhJ69P9uEESfzL1jyRC2VvqQGwbwcqrLS",
  "key21": "65KbcDL9bWJQj56ReTTzmSDswwTKTwFiF5GuRx53FhSL1Ze4prk9CcwNj7BroWNTTATU2P68Ncvy1mqE1DRbijt5",
  "key22": "38MAjh75D2aEDdmZwcsBVWH7goLiVXQ7iz3QJKqbYF5EGic7Jnek4VDJbR3ywxwq78Uto3h2ewVNhYAs5tUUH7cy",
  "key23": "2CTQ5JQbuKMy57unjcokiGDKsMgSGKA2NmkPK6UF2Ryps4ai7XZPRgrCcH2xmdbFttx1zJhVgmoV8ZDQGDG38Nsd",
  "key24": "2io5Tok2qA6EnRbvbQrF6hYiHztp291oF1tcXJqvWcrcoeoHVXCzLFE81us79T2hZFaUBCsVmCitjxnLwk1NeNqx",
  "key25": "2yQRgLXZve7BjqVRYyEQkyEWb1DmSzRMBFeuiKhxQwLMDGcfsTeMeRTH2YnRY7LKxSEft62T4Zyh9pbHxa1ro5aT",
  "key26": "43CccsUHNLDQvMqqm66EFBLoWC3cq7iMeHvMYbZqAXbRiXmhUtDigWCVDaBuqNsnze8AfbD2tvw6RWEt6pJBbmLq",
  "key27": "fYMqT1ayC5LQSThrBbQ4Agp1b1pRHLkjesjjXGkYD84sjtG4xiuNdERwL6KVfqHN2AUhPofQhxaLP6RN4qwepK9",
  "key28": "3zhsxgjtXXSMCTazQ6sQxZV2we2ch6eEMgWUMWqQYetKa2sMXA8MhkfuRUA2WbQpmozPDavWcxaM9A8e1pa7cAAu",
  "key29": "4TPm66fFU8FYkVrbv2zUrDdeMsMA9abZCXK2HPpFnaeTAmDBGNWkMVoiyN9kUhkYexJYPJAY8zSCd4QZGVQhJUp7",
  "key30": "3jextpdeAp1sUyAYb4Ls4WSxqSQsnbeNnu9ChLV2eHPREtSkeSd1k7TWkwiNhqgvrqzyXzYwFnuMb1vYZuu2fM8v",
  "key31": "4rh1C88nG5mRs7g9sZLBS5Rj9dr5Hzto7AuMo8JvkmXQHVzvBsDC84f13ST6n4VDw2aMtnXB5VJgMevdCFunkEJs",
  "key32": "3jjeU576xCs9ueELYUudZcdvRzCWzgiyLtU7VFUPMaRbndWaSdJoejGDgm1yX9r2HaCGj4oYG5QK7uv7EAVzERkE",
  "key33": "4hoTRkwc5d8D8AXoXoh77HnrxcWC14Tyi4i2YiSiGQ7BDSZNfeKR2uHkvxTDLSJwYmW7M1iTUNdcX9htwSk9XPGj",
  "key34": "4zYT6TthXMw5DSf7f1e7QchoWU1WVsG3wm8CQohQc7ei1NK3QFFhG2s8nTWaaxrnp8kdPNgbgKZM5fn7Kptvny7n",
  "key35": "uQBm4Sy8cZmJ5FLbj3SokyysAWw19zhbuNBVXSSCC2LgoJ3kcQfdGNqEVwiDB6g8sVgZyAhPRhePFXccGrjZqvy",
  "key36": "4A5X3P2BFRs2rN5DS4DXcAV6Wu3hS1VwSuM4dJKW6ra5nxAGEibSHwFjtZJYxPNa7h82kUn55QDKRAAamHBDW9Hg",
  "key37": "37H3SkxzKWJG4XEXVvtn6qy9WxaYut5Sg4KpDYHpsX3dKb7A6XQucuSjrqDpGA8ozmSmiHz92fJCuwxpF1KzJNgA",
  "key38": "2et7U8L9y9iLsBy155h6ftsDJ1RoSq5AxcRJaYNsxKUES7VJLCRgdbPBK8jvndPjUUs7UhMMGvdCMHcZDnrLjw7k",
  "key39": "K8cyVBqyAc5bNo3AxanwRZFfpvBLpDBL6UKFTEUHkdasS23oXfz9VQCEs3XJaqKzeBNFiv94zFTSpBfvR65nNa9",
  "key40": "CKFJsMDcg4Ri1K7mXvuB2RBY2REawucNwKVQvPRYrCqe2XDFUsqjcSwRn6zCdyav87qSmeX9FCjnCQ7KaaBXVn4",
  "key41": "4sGG4mBNK3UZ91CTZkWXgmbGTzJ8uSP1D8q9xp113bcNE18AS4bFNMMNsrPoQMhnUXD56mrP7AQt2P21MxqJfeZD",
  "key42": "4AWkw1B6HizsqwUSYb1Ne871X2mEErDoMuZnNCGKYAgumkGA8urs6Ci7LwaXadxR75radZ2VMxeN5mNrrM2ejXue",
  "key43": "2KLnzQxuFrfeHLWPYywXnt5BtzGysjx5Pn3LsAqZwnB3s8jiiusSJ9B7wA4yhN8k5XB3DNLe65R2FArURPDzsbdn",
  "key44": "32bhpXFfd7BkUGBDjRkfmGiXqLUFLMeuRuW21P2xgDQxvGJDqvYJhWEDA37D8Vh5TVtrPDBcR6xZqJwKBDLbd29x",
  "key45": "3WoopjsnpivxejNU9p7w7DboV6WVurfM3TMP6BBRDxGofNcwEpivKAYwPhKCUJsRWAuPbGq53Tw2xzQx3wNmUem5",
  "key46": "5cwKzF9GuE5fwnTkdyMj2oswLupRTzxnNJwiCJAaRbcCakJZb3yozwBsFnCxuhtrhsgFw3wPxAS2w4PFjDNRqXA6",
  "key47": "tFpKjmeeSHZz9iyVh8WRVAC9VdcRANR38QMADD74qeEHZQBsS3Qk6xhrkVEVswBnfZTminMA3w3ruBNCE6eCgQT",
  "key48": "5yJeLJWweuwoNDsj9ooTqAqZzJjojsmbxB7ARCGTzS5Audd2Y82c3bdwswxkYy5S9p4xgpCK6o2yQ1LddHWscUZG"
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
