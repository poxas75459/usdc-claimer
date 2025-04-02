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
    "rngPDVPDW2Tyy6pGdMhxNEeAwBL3jRWt1gtXdyweft3cU3FF3thgTFV75BzAvPv4s82NayWVsAWJY9KtRKfRZ4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "guyKrZxDZwC7PEtbHwM2mv5Yuk7vyehXBynaCM7RmbnJGvuBuD3BzDfmBg8UN8Dpu237kN79tcb8ziCgikLobJG",
  "key1": "4XffubQB1NGxnTwK6ufNYDXLkrNWTHaFXb55dNzZTte9BdbQnGMQPdNbSYHiYsDw3owAXbq9eeh6Kgbwg7afjsGr",
  "key2": "2nJy9d4nqcnqi8joScTRX85eTSLepEpjxgJhuCALEeyPCusC1HSLYMBYbbwj3AxRtrr9cn6G5bBkGEtyUjfJSK3N",
  "key3": "2kbyjHtVVQyKzPFYWH48WJrJmVPJNrfULXmUNeak6zdzbENjNfs9rqtvsNGxFrmVuP4TB9MjmFtM7zmM7pyHU3st",
  "key4": "4aHApKbi5t48XvL6Zm4aSo7JvVJ47wBq8EXGf1em28exd67Qi5vcJz1ShUcmUGTWt8F4Zdv5qNL8NgG2kuKuZgFL",
  "key5": "2p9vEMZqouwReEEHJGNE9T7Tz9GzvJbk6FSveDXTKmMmsPCy7xA5JdBiZPFaPny58d1JCP5NXZ8Aek28Aiom1dSQ",
  "key6": "5FnxV3ZwYYuka3VvpTmQzGnbKPc5erJk1UQ6otMyEK1bKhVtpBRC2RBeE91WEtanW1CTdUc3SdP7eUJU6HKnrQKC",
  "key7": "3szq5Ls37oUBjZkHYwbJW2o23toMiKTci4KDEqoiktv5P4nVCDNnAn1wZZRCTTFo6jh9UK8VSjgvpwZr7F1q5aBN",
  "key8": "4fWFMDueCEgKaTWDRQsyjEizpLfHNd1BPPao8ssAAzUBDg4dRdgc1yziDJMCf5ixRV8owMAtakydZNUtFnPMyTw3",
  "key9": "3wUmV5Y3gmDKvsfDA6NytXW7DRaxMJc53NXfMjyinTwv66PJndwQc63tYGme9mX85MoK4bH4342AF9aeLEMzRhYF",
  "key10": "2t3y4H8Mj2iD5F9XF2tbCN3iGxW5pobWtXdRYbU2nX2AFK8D6k9Ye37DGmYdaKHjKFNdLeFbMQeWGRfktwJWjQWK",
  "key11": "2GExBF2fY4L3osPFBSNR7xPMc9wEJt9pvmCKyRckcWZnzB2yhYHQtgXwsznLmyBsVd6EFoxJXzeF4ZpfMwwDL9Xj",
  "key12": "5GxGLmbKw6BXNieD3he8xLDLLZuGjhn5MUgnGTCrvsQmd6yJTSvcMDBgmsrdCZ6tRNRZw3nfLQH66brPudfAMo4E",
  "key13": "5NhQLqEKZFT548WKkhRdP8REfas9ozq6srPftyXRYeGjkWTLESUmL9P7mBo6CBHVkZUSJPBNj47kvsG23qM7S5vT",
  "key14": "5L9nUbRxJuuffxvo1wMvhHvAR3XhXtJjVLdGyJoQrMKxAxXj3ZnoDTsAKdxwLvPrq4bsmLQ1toV3W2QvnN5zCYHb",
  "key15": "5hhCkhXPNKnvs9SU8u1eGKPXUUJQYvw6iV9nSCTF5LDuS4QJkzmmD745Q9nHv9BdvhcPTwRqhHXJLsnQtHLgpMAN",
  "key16": "2DkD9uXJNRSjHouZqZ5koccwBU9LtimiLx9TPfZ6VyvJQe4hCv98C2SpLQspaEGaud67mq4TdvnjNCSa7VhxrTzo",
  "key17": "4azvL55nhjUaaXb7WknmcoUoFBWZFQtqCtmTfMtJBh5uzReWRKwvqqf9kLW6UKY3dhWHLxbA9P4jXtNDhT97j7Th",
  "key18": "2urDrsZZWeffcBiErVYavMmPHjtWFHP5ruyNJbXs36CaVv5W6WwCwAbQp4DurpBSLu5eCphRGx5fZaisRttVeEs9",
  "key19": "5xEBuZnBJcqZTf1PSTBmWneyonAbcavDstqKJVsrHAxyL6rRhCmSH6VVv1PzFymCCS6XurTgkvDa5cF6PsfVcVjH",
  "key20": "o1VdfpAsHk42veaiuNx8NNncJuM2Bva86LD3VdReDMAtV512xWyJViUGsmzr2GV6fm8a6sfTcqYuM7oZ2NVzjdW",
  "key21": "XBp6cddpGYncP1TNyrrnKSeSp3nn5ZksgZkTNzEaBbWcubWmpifCPxqGJdG9Kzqy3hW8CzYcavnvEbRKyTbmbuz",
  "key22": "3Jm7aDzGegxhQHrRZubew17cvWzSg2ibKSweqJCA6q23HJndiT9A3k46sBq8VBZHQvHB1nubWAwYwTkFDKWuqrKC",
  "key23": "24qVwQz9YNEtYYCxMeQkoKDa8GszV2uCKNxVVEri4rT54sXjGWSwA2V2VA6Z2Q3ABs81azUZqnUQNaC9Jwau5bRd",
  "key24": "52AVNsM1kzfxT1n9uF5Zfw3DEM3fnL4hH84ZQjPUJntAcfnHSPKEgMLfXXWyQ4pTJX15LgJDet7WA1iyEBQ1o34Q",
  "key25": "3YoYgj6uV9z6cMi1xngUGqHFRMD1ezRK7KpAB5FmysE5A83kdkXDsB4VBishEfTN3iYdCo5wrKvX7LynapGvMXTK",
  "key26": "3DNqm2oZExeYzuJg6PggR2YPZM4HGJLAx3XYHGsJ5iKxFUBhYZknESvk9io7jXEN5SsqKAVRkbH2ffrj8YmXKqcJ",
  "key27": "15GH4JgxpicErYzaQK2Xs8LJRptLYbvnEh7rGqyeuvE1PXquorFPfLtxTdGk852impXeupzebLL25nUEPnM2xJ5",
  "key28": "4CLb5B45FmFtGJrHD2yjT7n9dXcGPhPrsCP6zN5cUmje8cACTtcqwq5RZm3UXzP5VSpeBNLuRP6rL1WyGi2N42dA",
  "key29": "2wu7bskZo1WBCjzR5goa3dySbwwnwwDpxya8QKdj7QvhEkJtfdr9iUhHKVbNYJsJRwdgLHWWwxpZTaTFDQg17CgP",
  "key30": "5Dq3aXnsfp7gwdgsXQVXv5kQ1LNY5akwvtY4ZHFwTKhH9nkCND91FQM6vBeXQTSTErdbbzVdQp18fmqYCGWwykWS",
  "key31": "N53L8UEVaenYuFkQ6MtDjyy8EBzHZT7EyDbczxB28LE26cYGVnjyye7DpZPacNPv5SkHuG8rArGPMeKncdymNV2",
  "key32": "43vN6dFxdVaXzuwY1mEvVqsnLd5bQkNWHnkHA2jLbzy8KHJ1hnzpmnNX6fKeS2utAamG9rBUtQYZAh5yEPaanzh",
  "key33": "54RkGS9V6Y1rgeTKCfpGfpfdQEoiBSJNfFiYeSCBuY3FtnvpWYeSvLbz5fuSkGaJvgNGUdpadE9MvzV9rCSTsd8R",
  "key34": "f6c2kEYFqKVVx8Mo7Y1w5h7jQC4e6ioiiHE3oHJk5jddBLozftK6M8ubTduQWUUwWkGs6VtduAcfxV18JP6YweK",
  "key35": "52DAZT2Zjtm2ZejQTVKBKq9c8T87AhDVmqPgFwezHiTDgPexBnMvwYGbTQhogvRqoznzahpHVDYGon7ojeYJsifL",
  "key36": "4VKub5Af29aR6ufMntxehhsQyjcJKNj1E3VzGtCNbVbD3ytpctPNjgDUDCdJGa1X2B7HAFUpSP28hgcGzL1jwnKb",
  "key37": "2MZR9o5jTzcyQhMSDmaMiRXYogaij34XDiHeAp7HsCVRE1JnHYFC4KJ8BGt7uvFX2UxUpgyZ1z1M8SMPgRtN5a6o",
  "key38": "57jF6oLb6fnuY1gfBoKcvseSmTvHtmwRRVrzriWU8HrB94oyeqsqjNGjzH3LgHFrmhbZgzyto5dDiERGdFp6zdrA",
  "key39": "ADDZWV1Zmg2VaDorh1kAttPaC8zLp4Ky6ksZtpoBdpMdjk4qYFa6efj8WKinAGoJeKG9dAEzyWs45cVnYYiW4GE",
  "key40": "2j2ENTwAHnPe9HK9JupR1oaNeGHPHCpyv3y3DMmKj7KJuZ4bYpHzHooFuxXFScyM2xa6EwL8LLNKJAA43RPZcrqx",
  "key41": "22gojxvsMm8MpcKneBr59RJVgBMnACfSDhXnGHEvMj4qKDKxDzuU8bgWsArTuLRt5pjyXKrpsAqcHNNuxQhfJYiN"
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
