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
    "35Sx14EY3STcMCnitoa3jpNiDwcjmXMhayNDrMbHtVrZcDqJYR6psUdriHJN25sqQFJvgGPsd9sSsRA8aCTvDUcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "258YoKX71ztQavDo6bQ9EC4mXdJnU7cQivecjENmd7PEfprbwViszMC9H9fvUwbmMGbjZmvDtexbiTWQYm1sggbh",
  "key1": "EjJHCNQdN3hCWkWW3Jj6F3iHqWbU38JK1LQMuyvYCPoJnYhbjBbTfFbyF4xCZenNmXYdscFoxB9LfHMbeYEQ9g2",
  "key2": "5UWiDcH4iD5TgARkfKcWQVnwJNv7Grk6ssqPAPiprS2rXqUxAtS8xgWxqE4wQxCPW6b6sPXtrY3hFtzDjXU1wewp",
  "key3": "5uN2wyzhFPvcfW1Gp4osHrrrLKiS8P3jzQ9bsSZ6iP5eK1V6qmcTj9nX7g5DWPXzAHHfRxSFa83xV7ZLzBE15q9x",
  "key4": "F4UizBJHkxXGZqRxpgoAkTQn1PJrhWNBXaSskVH885GiMQCc5S56LWXzxz9wcG2YLexHsjW34oTzumgrzSi2982",
  "key5": "4MNMB8CSx4RWB29xzvzGkvG4VFvoQcYLJ3zjm1P1fTkJ6jTYFFW6DUE3RiHBDH4NZMqSK5fGcjFVgHmGi2mkLmrA",
  "key6": "5RG27PjVWbuBPniK2p7Z8aBsM9Mpo65kGjmPZFbooy383PhCpLxeqxJywBeDVnsuXhEcvmD66izmH61gg4LtXfFm",
  "key7": "59LtndhgPhd3SJf3d4EhiBGny8qZc1zwRhhfbDRgaqmbp7vqh4RgS4PvpJAjxb38zmnDqQrP4MCaWxa4pYZ7725Q",
  "key8": "4oqk3kKN5q3hrisVKxrceKoA9Fktv4pD8KEfKKbHEgUPVMfuAUon2ngcKp83vsftxJQZAkLjmXPmfRUs9SrNYS72",
  "key9": "2mZD1uy21X1pLKHbCpb8gNkPVdkVfNWhL6cbxbQQqGh9ztBUwfz1jiVyuRd3zHtrcBM1n1U7N8cgdrX5P5J7kztH",
  "key10": "23tk4MXNcWzTXycyxYTW1YzyqBNCx27kQZLmtShp9ZzRWMpcLTvhfv3bNLBHBUeSVSZqYWbPLQb741iaDkvQe3BR",
  "key11": "5zNDMExCjCCLQwxa1BrTuEA8jVz6rdYoVFgrW1ocZyfsLEnfUPLWkP748rDfeo15372vtf7yTQaE5EA3cdFZaEvQ",
  "key12": "39zZxEjd5qYSwtQS4AUta8ZoG2aP5FaRasinAUdAXEqQY6Ayee4viB6ZkCNaTLUiegYg2ECwNEjSFVuCUghCiYzk",
  "key13": "61j8q7zBzrcHWpgCyRTF4wng5o4kqhSrUshNFbfjezuNqPcxx4kbuLBEe5iMA2kHVeG73uota1kxg2K9ajG6maZ2",
  "key14": "25TijeFwq61suidE2oPt1v7QPMyHpF8wKCCCEm4x4QZyKwpai6tR4Cw1XmjKUsBS5JTn6YjzcGYoTFSQeGeAxrs7",
  "key15": "5widLKUywEEKUBFPpThQshyRz2JqYkG4SjMKsb4nS79r5dhgEwfqGb5h59wwEDJcQznFAsC92H8qSmfeQVy4svZH",
  "key16": "34TzagCNV2j83zSUguZtCVW5GW6bGkJ4hEDBVRsbjoqNNARD544y19VDfCmksDoUhteGxkjh7MRRH8K8UwF3Enqs",
  "key17": "3aXujHxoEWnncpn17bwuRQWzqca2mMevi7uXLCWiV4T3FmVViNKsv5tbx7Vt7GGdTW2RN1D1zKkRqno3ZJfqqQCL",
  "key18": "3SZGvgZmyTAvCoT1hAuVpRAicMovysF5oQuBtGHzZemeopqiyW8HuTJyR3ZfnUeNz2EMGvRk1synvsXJE4QniqpH",
  "key19": "4iubgJy6Pj1otuP5V47731wEd3R7UivwtPwc54MuiZJAVdbiRYUqwf9M9BR3pgzchsgL3e7TTGtTevhp7FNtCJfu",
  "key20": "3EjCorv1mUerrkNH3vgScZRhhctzXr5CjXeQkQRaES19aF5Laz46Qkfyg1LzbN8vjLJhE6oZ43VcBMchaVUaXWRb",
  "key21": "2jfK1HC2qEKuDcKirytnvsNUa4AXgAeTPaMNKT8G7P3HdC8oHEoDLQdhFVThK4ByRs4AXT3VTsTjWPDpL5rH1MEL",
  "key22": "4RpZR8bQYVEbmXWTZ8cXRjLkUXY2Y2oUYoLMXmq6NpKQ2H84tKgAcBsSZjqSa4xv5yJs1E48myPtFXYhyJDRFAbK",
  "key23": "5UD2CEv6RLiTRxm9TtFM3Qd4Gjmi4kHJ3FhtERFxs8tJc8YS2KAyYnmhPvs8RZyYJVLus1UgjLMgsP4b9fDGVfy9",
  "key24": "3ouNQEyqo1LtigvcSc4fwe34ikzYGrPFtwmm8ATNKS7JFBPsG6tTQ283Ui9eTtqFvUPpmX1d5B815V9i4aW4ExrN",
  "key25": "3b2pR4fjy4fPAJP6DqNVtY74DLF6HAizDwoP9vPZYPZzRoLRdZeHn6gGkjXD1ndu5taF7WHs6A31iuKhhUy8QybS",
  "key26": "3uxwhuDqygNoxe3sRi3J4yLjGCxT1iQeKSurHNBkBbC3mLcM6fjiK95tX7E7Zz4zSAvPUrFmstUbvDLFUhZY31Hh",
  "key27": "2DHi5ghR5amZ52Ph9YmopNDVgd9P1bA9yth6CxgACNsXDv3di4himQMjhjyQk9hSKJhzNfaHcDjtyGzSFz6vS6qu",
  "key28": "3p2q162bWT62gmZ3zgLawjQ41nYLJh4BUuXn7TRn8xh3j5TbXXrqnusQ8zWwgDvCsJTsgxjxvev85rqCGEc2unx3",
  "key29": "5FggyUQ4rbMnSxYmMEwsfG8cMmdchXLSvKgiFEpNUj6k4sMeT3GpWMpSBKqRbhaLJFk3DtCiV7aqqfjJ2fEuqfy5",
  "key30": "3ybQeZzPJswcZ9KeewAPWFa8VRrinDmkRSZpFJQtM6P72HNiEzLs4TTqwNCD9QoqvwsvAvvdkyRfFGJQPXuo9vuT",
  "key31": "Uwh893fFnXyvAwAqFwXC6TN1665fuUvJzfSXFx8Rqq88NoLVyj3S8jN4Ss71jrHDpLXqwPxZBvrMjaViRHwSWpC",
  "key32": "cG786wJa2xRworbLigLpkFWaMdvoJ47Qb4y1SiKRZEx32M5vtCGLuhp31zYovsZUC33evWoNEhg5CwY4uTVKMUN",
  "key33": "eYg8RyBYoAnU4bAGQQ3Nast1aBYufKpHszayyPqEXbdzaVN1v4Rew2SkMsZWjw558u9SxZZ1CM7UqNPV4X3LZrr",
  "key34": "56hTmCYnU5m5JaHy5KdybZPbzWxGCosviAbqf2nz24A3ZfgAp1FRJryQU4XXspqFigdGS8EDqsoqNmgK1HnvXT97",
  "key35": "5uxBgbqzqMYuJST7atT1Cmg6Gg9rn2H2QMa4RJWdb8rVBRfRm5XeywCJT95mgMKG6z1pUrwegvr6kyi98FJypoFH",
  "key36": "Nrip99yosjnY2rmvqJh6bnbD89csU5bSmBQoudd7buRvUkihYoPRqB9PZS8Whqj8DhWjYEyPtiVfS56yp2gkJxg",
  "key37": "4hb1UAKhqYfWyvVHvJ4AHPJMt1nW8NhdyLZHSRxruX1X7b4SCAAZNTxbRpvnwSg1JzktiU1HKM1uRQ8Kxiw9cuUF",
  "key38": "3uiTyMynXYcPAyxMeBSk24wKhC5UnnBjqvDQAPLS9aMhdfMKA9HLZraFx4DQ2osCAAZikTmEsiy1tSqSqpgCLCF7",
  "key39": "2HAufi5s8XeTB7aNthhpeuWRowknPeKwV4NyCLB2i6Gu5zirBwxvMLEUE67JrKZhWJJTEJ2u7yjtpeP34PiJE43A",
  "key40": "3Ccy3ew1dvQ3AuaZ98neZndjzFMRFB3JhtcgNcvovPgpQMuGXUtqBruQvTXzpoTcWMDTGK5gaYAQXXx5WMHQHRdW",
  "key41": "Q8WkdU6ExLSFFJpM4FmXWqb4gUKa3C32bdFtZzh6XC2Svza128t3mq77xVhL1kJDoh1uH9gQYWpKNuX3aWgjRnN",
  "key42": "LeKd1McV1kBMjYv4HwE3qnMGsE5hAj9dUegVL1wUCfE79FVKxi617SJ3YU6NoYcMFe1QANXxFDeJByKyboKzb8M",
  "key43": "65dpzbpXSHFCMRYggeoRQfaaLQykeprXZDbHWS8JdpUiF1bSE3PHUyK1CnR4JJx1A9kgmqjEGa4qwqsc1k6AHzau",
  "key44": "hhEvfnRyrGZcSAMUspR5p3y4XTCEkS6diBxdjBMvEHGSVGFiTDCAdZfZsgJfoYur1itw4JKMHuVQMdqVSkgyQec",
  "key45": "3Wh7VLvpFe5Jf4Jgn5TGptYLV7bw5LZXStx742SKb3LRLpFPkH39PAQSz51xSw8yQoMPbkUPtNNB5RFQdpLAzFfx",
  "key46": "2mkwZecU9aWoLaQpbWZwagBjJCBQFcduziNMQjtwWeYYRvGXps9qcNiEwbW2VhAPbdz98jssWEgNbm4x4GNPbT9d",
  "key47": "3u4rByyuHUy5CMzgjcVKdvrh3effwPU2qus5ZharEBK8iw33fLg4BHWjcYVU55QoEoBet8sq6fDQX59khwYW293y",
  "key48": "3DCLoTYxXmH9hX4YHq7ckK8TdGcrPdawZz3738Ym2PoJH2anzBFpMVgWrnXYvhC5b9AhaNAoGT3bhM1KEoBzL1DP",
  "key49": "5AUARQ2ADybzAA8ZEpsVUdtGsR882uGPMJrddp8Q9aTPozKaRdbLyR9nLCmjzCJzfPjitrLFLMFguKRmkBQTVEK2"
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
