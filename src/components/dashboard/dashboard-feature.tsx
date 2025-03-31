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
    "25D4nKZewvjdCHmGA3iPpLPLDMDssyrWhf7yHpqB9LspFpW2j2bCXjMemGTuoiKDWA45PWW6tsqCVNaMstU5EtT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59PYN3XyaEaqmbax59JZ8Q7m6PPeWuhMoCBVVbQmm2E8TGs8wHXRjzqPquVcZbwbMS9FdQNyJGzFyWDfFrVLp1e6",
  "key1": "2Yf3WHr6eFyGG4rdNKHn4aCsh9Ekimk1URrQAmn7DSJDrdsYCgB1SNQwWbhrKxSD1DhHT926zCH1Ya6ot2Z2nMmM",
  "key2": "3vdy6MXvwDDySGHapFHcFCuhyrYnFidtn2YZMUho83LvALqsDcH5aD33LLJfUEjJhexn2m8wecXonyBUQN9jVxRM",
  "key3": "4tSkSDaSfe9HwQXu24T3XgBTXAdiXfChkurmbMgucNFPke9Je8RkLr768ncAP3hR3G7HamKXV66MQBXf9BAaP5DY",
  "key4": "4yxbyBSL1pXTBdHHXUxVwstKkzrJrZqymyXBGKrauXuyNPAUv7xv7EPQa8ReAPvVRHTkKeCzUZXKuZKyAR5dDjTk",
  "key5": "2mr4iZV2QATgGCq7299eeET9QRZMmxknfJZHjzsiKJ4bg9Sb7nQDxLupHJqxPCE5VfQJMhtVMkwWe9ZthWfzH3wT",
  "key6": "dKf5yNCURCfvadE4vtSW1oZ7DZ3sj7thNPENts4Yv5ew9Pitmr7qDdPkXztiAPAueKoczbFfYBZew8YrsF2UfmY",
  "key7": "5bTcSDgf8YmLSgikLLcqpCjrPcyqtNtLJkp6R942duugmPtdLDCEASDwmTzrnFujzzoWUFmirWrsbpTxbsjvYWxM",
  "key8": "5haRBhQgYzDPgxMe2iLPKjNNuQUB574Sf65VLufRptw67ynREUTYWQWbyV2mDJz7uWPsrCepqqE7pwbif65HLNt9",
  "key9": "3K47pkpQ6u9zw83FCf9Q3F4ixz5eRbzRtNLuxBUCrcBhtXXJqLu5YDigsy5tqUCDhNUbVnzT4MwFSSB7KT6cHVXD",
  "key10": "5MHpdmJYU1QrumxFshesjcAuwm6KwbRY6UvuEeRtzQMbcyvgHKZa3E212JKDiDtBZ98oiNtnQpzDz4rc8VdGus31",
  "key11": "MxudDdijgJXMCr5WsvMnjvKhVLmuKmtvdkJtLSb15Q7VziCVamWaJM94tL15CSW7zjz7BQ8eKEaQwkXqjZ7tfzc",
  "key12": "4bK9odyRY9J5t2ubhG9ZJEVPYBPK866B3xTY5AzmVtV6Z3FZErecrhznkVQa7WqQ4XXUwtcbfDMtFXizGfg78MGf",
  "key13": "3XLtxTxi4VKsoM7CDQxzKKqwkPs9RpTqvyC5BjeCrabsXw4WaReCQhWVuMcf6NE19cnF1ZYPwFEPoJzAy9y5ZuMV",
  "key14": "2x1XHmgkrKRAvhxjA8KspLVMKrh5ZdVBG4Z38WNbxnRiUgi5Xwb17AyTufZUH7JfULfLg8NCHbfXqp9B9uQZx1ME",
  "key15": "5Du55Uwi2AeRNpzcUFoqK9iUud3JETbXgqAuTY3amLiNPiSvFMrV1RxY6y8AWZ3tD7iVabnV1SiyG2yJJJSQL6sb",
  "key16": "5DLpMjPudruuwHzj2ad2KieYxug6V2D9ZNJjNjbrVSx4kc5ViLbjLcRGXBFZdU8ovxQrd1DMErUkkYws5HUReuB4",
  "key17": "3tCi9g41rUGVLr5S4RkEatBSfCyQuQNihdkqv71aYx2fFNbmhcAuNtchZuq7W1a9dZEbp9GTUX11m7J7GgKrM1Ax",
  "key18": "5scKH5HpdxBKQmTg66K9tPF9wjyC33WPfFteHBRiFt9N6wezTXS4t5SoAn8ZUEDEN4oigbecvzkgY9kNc2NQLFsU",
  "key19": "4yqMEfwz3zL6h4ARbuv5Us4hYzXkuBGxqBXWMidteqkniLXDaak1ooHx3bkaFqVBXmpmdJ3t5vR3w8TjtC5zE7pQ",
  "key20": "225f5bLp6SxuizR6D5yVRL21pSNW7ZwcNyvPeMn6ZN1rHwc3bsbtLwLCpseLdUMGB8vKfmaT4peGd2u6VJLrrUC6",
  "key21": "36bty6RsqbVFLzaQvupQ6qvPbpMQLyB89wRd99DVzv88hztwoJpDTPv2nvrBvC9pvz6DkwoSKebstNHDggfMT2Tp",
  "key22": "3wthwNuFyD3C2yrj9ybEEr6Lo14m88wcmAucfC7mq91wwJo9nZAFVZWLDPRvhWWW7aBbRvUhxfBazeitgRHEeHYE",
  "key23": "kf2mHRMX99VQDAc2bEmsyH9BVg9iBGH2Az1B72VoT3WXAcSn5quUc3Q89Yp8JDXpA1A9kwHUHdJg3djD63jeR2K",
  "key24": "3okjnWvm8ywxAevpi24RWZVCGebDkqiUjkxioPeqFeVMbaeqJk91bQGz4MQgMjCmVbQTerMfFZZ3veodoZmCmhPY",
  "key25": "27RdNoAVdbfZzPbGthrUfpijRsmEAUmuxALXWJxr5XyB8sDeXXtBNahwydgfssWyC7LvzXDvSiiDSjjaXNBnxKT5",
  "key26": "2F9MekFP3QZfSmPYpykKV9GgTzBffjMwSCUKgfrH3NN3GPawMe5nLabtABfYSm4JevSFjTDfma6MWQ3Qrj15DdN9",
  "key27": "otrEHDh2hHqThsd1JHZQ58Rqcz8aDdBwQK9eNu2LbbgAcDtConRUr2tydPyHtmGHEpaDUDEhScSNcRao1diiTsY",
  "key28": "2WinXESRTyNuEWK21D5va4Aw3L4e7Vg5a3wSTAanDZihTnAJWvg84ungg6WM6cD6F3RCtC6CfzTUmGpFVh8nr4J4",
  "key29": "5vTsHBpgkkvuXj6SKxk1CmVkRMES8rycZYx9nYNSNuKWt2mRbi7oxUwCFMnLQptWbTt9uuxHnsEvJVbbSnxgv4kz",
  "key30": "5ZP9ivHvMvvTof6QNrsi1ZmHHu34Ynp9ChbQ6YxQP54ZqCkXXqTN1nYrps8sHww5foxPPGBhNjoWUwSvHCKta9ze",
  "key31": "5DL786Eo4AKx3VpggxdN2XVVTeCyiuiUqbpmNxPth5dJBhcmuznVycQEGVhGWoeLSXG9L1rW5T5KnwgghypKA3Hg",
  "key32": "2qgyoMN7itcjhbeDY9EYq1vEZPQDbmG8Lnz4FoVkDU4xEjKKzcc8zFeFudwmCEiUKA8piRzmgPqSyFBx693RnWLJ",
  "key33": "9pKeM3PubXpj5XFAoHNMfLgqjM1u3nVdaLTdeYLTxcnecNu8ZNhaeXNN87eG1vNssSRCQg9Qit6st7Hwt2F1gSK",
  "key34": "4x3L1pspsQzuniQTNS4WvaFZE4vPyJ8GYuZwMAxHuUZZjBT7pxBKFitjDzAmwZ25ahSomPhe9uT4svBXipLKdYSR",
  "key35": "2TRr7PdvFRt5v3ezcy7xhVpG5ZrhcvYZdQpTdrPpeFvk5R88ptMNUsEwkcuHKeuubrwHXmCFwPwnaiAE1cBFjKfc",
  "key36": "5NhjAKJWxi6V1kjcu8NSsVgkUZNtVinaYGaccfdFy2eFSHtkx1GNmYogf2YG44WAwrTk6sTVQTUvDCbgcEG4vuiV",
  "key37": "sg2GqnxbSa5S671WpvtWYtxNmEQKoSbXWeYGbFekEFRkBmxjadzCa96iYqBeTFnNB6zNB9RWdn28eMbrubZ2VMA",
  "key38": "3RrMnZ8DavjixkhCMNsA1zT5p4joAWyzJKNkcoy2zcyiN5rmGRGduDF7VyRvWb6bmhAvZmxK9ppGSk2P2aWBKHnL",
  "key39": "49n19aH6V9XiQzqW1HnJRvg7Yg6Jt8zbQXQJP6VWH5SHWeox1mNwfDjQfgFHUAVaEuW35MGPSPP2yGGbDnJhdotq",
  "key40": "4qxvynhxgzj4yvgwxzkBfnWNx2EuFPSj6ctCHsmRRczQSpMbnxifEP2CcuYp4Yi8DKBfEwv2KLPA7QHKnDfL2qLc",
  "key41": "3QSCpaD92dQobzB5QqjsvTKVWuj1NjcqruVPAm4GRbTphmkQstmtNCqaEjE621MTg4iBExcexPbagU5CmaWsTR9o",
  "key42": "jteGtoEzTxL6RJoTdWdLRyTisPZr5pfUnmiVW57iUMVYKWwYZY5JKd9jRV9fciCNDtm7EHSaPYQ3VRLDiK9HFjK",
  "key43": "59vCWnkrjDxj9Vonh2E3Cd1jbvyWQ3Rzj7ij8MsVubfQxEi6TvzXKtwmpi8LKUEXV16WfRg1vdZ4w1XmStGid3zg",
  "key44": "5HfNQbpuC7njNoMBwLsSeopqRRptzh5Ya3tnjwKehLhEZj7VmXfW4RGmkJ5uQiFnBWLnwCRQKGu4zuz75pLKcE4a"
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
