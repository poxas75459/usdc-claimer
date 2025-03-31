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
    "5VeyGBxWTbxhYrmxW48NW3niebqEHV4uyzkXHAnTgbSJKVrcbLReEPxvYLJ8E4dTu9zH1KLs63upA96MS3cbaZN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4znrUKDLWHgGXBkL4uA3352FhgMUbD1jnwwtoskxU4PLH8NXzSN4Zjb6Zo1jbT5nwb9jwELf8FZsBMXLcUSCUhsF",
  "key1": "GmGSvQdhoekhz21JLnFLE21pp6yzwToB2tMfjwG6pfyg1dSd2pb9TfyACGiA993SaaFMkDShjvEDs2nbdT3ycEo",
  "key2": "FWtGWuZPUkPxJFgVUdcfPZgHaaqLQH3PMwpS8Do28xHYsPXbRa9sjUtNerpX4hi58KMDL98czAxx5o8jVp26Zcu",
  "key3": "3vFSRw7u5L2sTGwMNS3tDEtRxYTVmmPqnP7SzmUUufqMmp41dHLJVEZKTbCXMo3PPGTJUQggyDCVp35JHQNzEDkv",
  "key4": "5dajczo6uWomc81UMAooLs9Y88Dguxg6KURy14NNzo18NwucLaFgSMGrSCB4FKsBwJC1LpjwDgrZNwNum6AYmfqN",
  "key5": "4fEpxpVk4gsrYFfRgYEuhKwpwb5iAV3P7vTxXZuU4rvLPtdedpfQby3RK7QfGbHi2fJa5GKimCEKXHZqpg6wANZU",
  "key6": "3bDZjbfLKA5uwkDpemRusPFb17fdehTpaNmcrEksAhBbF1AdwEgo1qLNgm46RffFhKXi4Siv9eCqJVgn1UZpVL2D",
  "key7": "4rqiMaH1YTHBENUJLfLo5gLszS1jtBm2oMuseGq8zGNeofpM5gVJacf2zthoqkJ6qXh43gop3LDYgee2JYkoqyZK",
  "key8": "2nrZCnxwyNTYZ3JqC2TyKUPtEH9SSHQ3UoKHM6czKH2mZrB6tZ1CcrAijYmyK1CYucyvusmMzFtUz91dQ1ah1kQ6",
  "key9": "YE4vfoPySEhahaCPHumueig9Zaa4s8hHNbqxERMTnEXPz2Fhg4FD5VzL5TUcD9eFjX2tAUQDwiKASFrUxDAuW43",
  "key10": "5BiUwKG8j18peKVTrAfX6ereMi6fZn7WeyVrNvU73gxxzyu1TV2SkMuhF3eBPPpnisGNxhfaL9HQR8d5jLyqc4ks",
  "key11": "5oo95cPkW9FRvcBCdhYLkyhF2wYw1ZdQwoNEWcEiHy3krEcoWfebudEEdagNyaGiEhSTP58Z2xRJGsQ9Fey9Mbs1",
  "key12": "2pkGk3erwstRHfLqQrLrAAVw6QNrWv2JB3NkBT2taaXQdpNmawAZQRGEuma5BnnsZuB3pdBAqC2ZYZQYKpNruwpt",
  "key13": "64hRFeLXdvW4ZfjAAAEnK9ytzuKJx278Xat7E8JDrvHT4bz4UovHV2kduDy5GdubsLPaMrSrjUWhiKQwqcKLyHWx",
  "key14": "3R9Nirbwne1PBfaC766PM8jMMoMq7XXYWeBXq4GwyNUWwGHtgJizaptkwQnnRhNxETDkNvZh9fx8efjjPLVF668B",
  "key15": "4VFMTtGm227bR6GUAyLg3s5BvhjXVg3UcfJgyfGAc4mwEhkUjobHnBy5kJHfRKYSA3rpSrPbBKKbqnfWPiEuQYTK",
  "key16": "5VFpZnTcZwAAXM7xXx3DLw1uGPGnQ1jyhm6fXhPvd7WPwR9ZAYxYhUpQoy9t4PXU5DJ8uUCe8JJojj6TqqghS8nQ",
  "key17": "2CgkTewQFE6VRZ3Rpb9RdZiGHXqjZipNCxhxT1wq6EbHjfySHd7ADniK6DfzX4h6a7DMiq5CLZ2QnXCxBhA4Qc9C",
  "key18": "27EdmpcQ5iVThbNcS6HhxcZ42Sjhm7SdoaF5R8Z7JZvLP1SrkKrDi3RLWi5FEpFeKvTie8TWwThtsAUa44JnRXdA",
  "key19": "5SMxVmq2mH5WJ8RSS3QRxW3RGkk7tT1uEVEfFm6zPhooDYwYNoT3cLt1EPDNES9gswRuh4vzkfhnc6DiBiNX8hMT",
  "key20": "577Ye1TmwokNiTBRfTcXhFDtEj1WANMFbqZv22u2oHeQXsre9bF89gzjnHA3u6KDvhEsT2gTr2o8AZaSGmBMYdbb",
  "key21": "5WXUyv2kREG1oJKsb55KyZdquPdsZkZ5CbER7x2SVUWSpk1PjpNwuHT9YsqcM538zGjKnJqfZ3cVCaq47zHSJawf",
  "key22": "23wpyapMaYcDstJxYHbz24xokGY6xQoMkLNxzgX3tRLZC6QCHiZzqck48u5aKpAWQfS8rtNwEi7Hiho1L9qCYopf",
  "key23": "3xM27HbYsotfennEWL4XpfKDpZ7J4Tonxhve7ZyQmKU4WSvUjAvtti58W3izj9JgDg7bjkiFmShngKdisZU6b9pn",
  "key24": "56twfxGuhaKFU6KXUKPcMxNT8w3yfxBPGBDUF4YfVtbCbyPZGjxoMGoEYPF5R5MVctsrfnaiHoSzAoDV4hbJDgMB",
  "key25": "23YHqnbzg5QeS9kVFLEwiNBvfjn2R9pMi1AihQpqUVhmZxtDh23pRo15UDJJo2djjR22P31TndVaF6xvFtGSwJFr",
  "key26": "3QSv6RX8LXQGX6yQrmLrdLZiBYvSt4k6LduJA1Jda11TpZhqYYzY5ouFcy4wHggZBLuryVxPo46qAdgUYX86FUHP",
  "key27": "2YV8iNkRwFE9G64TNkVCrJJXPVrXXMHwFzLgLjq2KNA2YRkr5yUrPdm2BVk256ys1gLhsrxMterUk1HYt84ghvnG",
  "key28": "YaqNz2mjfU2Sgy7mLCLdaQnQjz6auPkpGWg5DtxHr3yzwVpuxihxPwANzigQdLM9utF6ioa6KeeKDmpFDuJymVi",
  "key29": "5qWP7SA6caZc3KVToBknRJHP2sWMbqUsbuQHxGWBBy1kvDTKPWxKwMmCzkZT95vRRBCsGbqTP8tUCLULH8Xm8tEp",
  "key30": "GXuxcCaSGY2fA3hK5krgEC4R1Jfsj6WFdysQKEVSaDXEmBPKAdpVgNrsmYgMhAMLCLhHvRLCvWQWrCCTthyyrwj",
  "key31": "4YNurzqYfnCPPPeUpgQP3nnprz6AZchtAGvxZ5fqVM94VkQ5xRkoiaGMAFKwjr8d3HD28h4xtcT4EDQyJcbnpqj4",
  "key32": "D5RZtCfmxG2mgJfCDRVQgeHerHqGR2et7us3vTWvCsb8UEKq1RGPywhCK9K38ss5NQdDfmh3BvNvtSCFrYe3GEn",
  "key33": "2FBLofiw9nxHbgtnjUA5hzjPBRucWCwXa2jd4DxKLrZjjamkNCiVXgyaGCFjTCFjALwVn92gqja46UrQLodCCuD4",
  "key34": "2SvVL8FmyNzLRtg6SwCCaaYeTfRzRNEVrY8UJBhn8dX8K7moCK7WVZ38WY155ditctsKn1u9c2FA7pVns7FPUZRA",
  "key35": "4TdkAv6vFHFapmwj47F1S57L66hP8QMPooUdMunvNpbaLoz5wdGP5UZZk16i68VAArQVDMPq1mCLmFg94zprQMEu",
  "key36": "51sYPksj9gpwGhnNAwztgM4GGXEZspS8beZxEdANmrTmtzKUet2A6WpzFWcgRV6iQHrxyXdz46JFyTkvJicSRUgu",
  "key37": "5jSXxpzG5gLeNJFAFUL41R2z9Wks42use1XsiRUAZk28hS4DvowhBjXoUcr2NYi8Exqhz4xoPuj7uZYrN4rjSU8K",
  "key38": "bk5h9eLrybn1oECy1bWehYhUTLEt4FAnqh9n95ztP9fQhQ714EwDcDVECZr3s7Z4m1MCvMH17h384kAVbGucMsW",
  "key39": "4M6L27ETNmMZkJhYWmMGgnpc7C5sUNZiKthAuR2nSbVEAxwbJN9n7oRRYV1i287UNMUcanpDYp4kPjyvBRvkei9s",
  "key40": "PuExsn2Q8MvFE5vgpiFMnk5xyWpRzu7vvyq9pTSTzdtCQHrEfuDYXRWNSLtmZgDVXiw34pNqFoZoLXhvvkoSeu1",
  "key41": "5hHFA1VgQkoDrXwsDkHnLFjuyPfaZVQ1gUrKwoaMqiwpcxHAjkz3awX3Y8ULqtnMxNKPaMvFtHt1oNHXpZNynYEV",
  "key42": "YtuGd2tq2L5jiVxRJJaX6niuvGUW4uvszvQcwb3k3DLdCKhfRtjRUrdWd5ejtRxrYAY6haBT2y7r6WyKEdT7kim",
  "key43": "9V4Gg4wXyNEYz9mx8TFuD4UV4sG1oeZNo4BgesG6dVorb25f2u3G311zVjdPSdZcgUTZVUx9FjNhkCJMdNVWJmh",
  "key44": "4zpxRnJkuvzrg6R3ufwjQzX2CdgPQNRQuusPkEpWvVAeWbRhJydypnx1hvhyhQ6gMkGkDCBr4FMXjyfRJcJukhFb",
  "key45": "3wrwcfxMdWPVjHv4c4gaFJCoH7hTkNXHwAHuYYWd2nkXuNfL1ds5cnu2siXabEBYMGMnTcNXhnsSDXhA3oCupXGT",
  "key46": "6N4PxL4bdRDmBZ6ivTRcEX5tqqXH68z2mSy8jVXviyEBkmpCmiXPSYiDKfVZd6K7Vgt1KWJBDhGbhC3pnGpK4Eb",
  "key47": "4DxQS8VCCbmF1eJo8BhzLHhtgiwxaZcmEuQ77DQUcqwkjW8BaFR4gDPFmLmJee8wPqAbGkohbw61JfLtXAcmZLFS",
  "key48": "2gZrLb6P8wreJ7KTRuEf7wA6edBRAPsWoNbnQer2QPP6oyQntJa693LKLM225rZW7ycZYoufed5dXtYhDF9SMFxK",
  "key49": "2eqiHz7W51japWwcQbgHwfRUPWDtLT4m4ggF4Qcq6jYZFksAhpk1eHFrCun5wBRNz5RpHDyShh1v9oGSvyLzQZDn"
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
