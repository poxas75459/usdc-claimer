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
    "AG9xeXJy1LzKDb2PqSjauGjb11vwBnc4AHzXLjBbX1aVexaDJQiUVThezDQupPH9mmZKawFqqk8DvGwKHMKFRyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pmp3MUqQn7LpFoAANNBkcGBMHnn9C3rnCKynuLaYBWWH6k6rxMnFWCQy1iZaqw2Z3mJ6VnmGmoHSdNW62oEZiRj",
  "key1": "2UDVor6AqCS8gpC4YLDV7NJwiq92wwC3SnjqqsTrtoKirwueCS4YQoHXNHfun6Nx2EzQnk1ZLv7i6Zu2eCpnZir5",
  "key2": "4yrAK2i9PiT5DotvNVziCJUhSKiJDtTaFoXKxNrMeXvMx53VM6nkdxPPKLSowStLPoYxqDCjAyy7SGFvEuUEbKC5",
  "key3": "5qXDJUZJjCDwMp66n5PNRis5LWqRiWrFAsDFrXjHBMyJEL9fYBnB63MLZqaFg13RXeH8gFuyE8zt2L7ZkPMbryry",
  "key4": "2f9THMNV9nmvUvDBp6hZ1mJvpYugL9i86LUmTSdBZ8yZ6bNPQn93ooaqpA7aL1afaXWQWYpyZbKdVCBXN9vEnRPK",
  "key5": "5eRoq2ivjvxwvKMAytjWy3HJvxyr7va3p1ReCHabAvekvSkLMKHMaggZfBuXVdmghp3vjek5LAFC1Zg4TXGyYrEp",
  "key6": "5yPPY5pSEoSNc3fnqFzjUioCHd9JNdjzp6MX9NonspiKqPzFq26Ts8VUsXCaKENcx1vhCX6TKEi1J1YiYbSiEXLj",
  "key7": "4fKKmyk2BDnTKkjr5Mn2PeJuvE3efyp42BBfCeJifzRXP7szMTZywNGpCeQRCrUzeMAQRYFo9GhbHkFGxXWZcNrn",
  "key8": "4d8TA6Gh1nDWt8t12mtTBcdxWKQ6WQy7ZHYEubjaxHVkV2NWgCuABWE69gCM5NPepzGh2p7ps71h17XSop7Vuq4c",
  "key9": "2GEeDAg8p9JAQwRKhpDmzMUT2uNTDuMY28sqb2SmUspqdPEiM53Zkw4RzR6fH44D7R2zntVvQaRWB5SaLERRuB4w",
  "key10": "4d2F1C6No7Ft2hLcMct1qMXMsqwgGB1qT3Q8TR2E8juxTarj9QQL9Qb357CcT8GtmU5SGYFNGsS7mZRFn6MUGawa",
  "key11": "4NRRXK91Xh99QAFgs2mmbVK2NBa8jnRjc96WSciMoEULnrdVUSzaZ6VSfovXxPpfDs2KJm3ktQNXHtRycMWBKaRT",
  "key12": "5LZcvnbRns6xFL9FQDDMGH4Aeg78AMoXBKXHia2479N6cc1YiUG7vtPMYWQPWdznsW5asrQvnpyzYiRF7vFCJYNP",
  "key13": "3769BYzMccwBMhwnGZ72xvTPSLdWHwcGornedFE4AwZA4H8Y4PGtAq6LCUkVu7Gu3VBQ7KZtykHazCMuiwQtWb8u",
  "key14": "2ra13VZW6y2LoKLRw5UGMB6VUn9vhNXvH3sbWWZxLr3f6zfzgykxc48VeUaKqHMSLjgFR9oV8txUnNXLRcYsuETp",
  "key15": "3KcgK9uUp1GZMNYUmRDLVMpPsjXrEpM5E1YmKHBUg9o3WsZggLfyhQ5ov2GBABWcd8BDXu98vCNaLj8UtsFFeDxj",
  "key16": "k9zVP4KjB5PopzCUWYt3azkQ1je8gKfrLbusqEFz61ydFYVjrSswQATSj4J6SqsS8pAUTgtCNc9m9BB2MJoaL19",
  "key17": "5qhhyRZxJhTp86BTLtZmmLmt3Y6efuDtJKntBiazahWrZToLzvwaWLSu7KHDQbV9TQNGHMHo2oXzrcgUQUPfrrks",
  "key18": "5sZ76aFh97ocoYnQQ4qY3ULgsSVbNVvJeXpMhsoYXCVsaTg6jk25ChYkbQJxNpHkDnH9tXxJHuCeuhaUVJ3EXheH",
  "key19": "3zRn6LeeeD8LHFVrC3Wug5onivUXv3PyM4X971ncshGy9cq8rMBAMZrJZgfMFjmjh3iaJzPw6obWpYmpSMwNXday",
  "key20": "3e5u72KVepXxCxiuJpNALrpuAtZcLqmvEqADJXFindDL7tUDroZHc2XPXj29tQvzyd7ZNWt6vT4FRt6tWNbgRfsU",
  "key21": "FbHVDH7LikfgNU7AFgrDAaUht9p6ptwWaxHhNZ3DNpW7Q8bmvE8ZBhKPcqgd6tDcPpmAyJyYHsUeFW2E63gmk8t",
  "key22": "7NGoWjzxYL5zXe2fNeukEPmSX2BdPiKTJcYBJkUN4EULG8NN6AuRqLETQ1GsY8Gqhj2n5zWBrHrcY3CxD2zAFfo",
  "key23": "3HJai3Xfs7ErNtkETq3gznaWm9Zch9Rj3gW6g1vkCFPc2rEw9tL1bhMfr5uFonieLnAR469kueashxKzyuS4BR3o",
  "key24": "3JsZGPQdznWoMstbf6em7LdxN2Ps6s9WTwyUsoZgMurYoMFBq8TyjiPP6nom5NjVpYzkGXzG2cweXJxgA6iKSzRc",
  "key25": "5gatArGEpSsiUW9HMDzBauoEwkzZApmyz9dcj9deztdcYXLgXTH6xy5V7rNp8569CtUMUZGYgRQc7JceiYQKGbYE",
  "key26": "5KiRSLv1tqWvhRukiFq85enpUChYmQwWZ8mPGPLjHWovy4ZkJPsmwm1Aq1fH2so7yHtiHsE8QiDr4kxHDJCKogNZ",
  "key27": "5WGGLikoEWwPWwzQCUgURkxn3TH8nTDskToT7qVL8CBaByJAziPL6Dkk5T7gkvFToNbjG33YvRG1p1dokyYemAtt",
  "key28": "jnMeucRt4Z1NwaaupKYBYhf9gHyZtKmCt3HhT4mJQQ6fzJPcAxZp3C2fJjvs1eFXzu1SyN6zhEJAhWs8dcUVaK2",
  "key29": "3weE2qvbR5xxsJTobiBPiArAwnjSXD1JeG2NhV6j7MPdwjK2iAxobAe2GnDtBkcMuVU4G99asNcqaUf42jCyiZXJ",
  "key30": "NpQcRWkptNenwJMbaLdznubJFW7xioe8aEF2cLn7pUG8QrrLHZP8aBPqHRv555q1cYh8CuGdb5xWDNWVwNyoMbS",
  "key31": "3RY86NmQ1wS68FbmdawMQbTaMCnt7keu5rk8GfatLWZgSpyFXm1jsXuAmqerY75UZT7EacCEK5h7RPsTrTK9ZSqd",
  "key32": "3VMXJ6cpdKTmGqkZJzT5KowiviyVZ8aJKPFNHn2VnTo8QSoypc37WzihGuEewz9yYCv1cCq6qAmDYwaG8vD3bLDK",
  "key33": "4NDfTizUDE7iUeTwqp2RMHU9k4CBv1pynEgkD8UFpAP4v1XVsJ8Q4df68wBcaVMaLNNhmyYRKuDsA53xg8YceRAX",
  "key34": "4PDQ2jc9gwSXx3PmJddWLvbUrwqNe9Tf7CBtsRXxyFkBXMg5oJrHQjaTm6LWZ9XEtcDPibufB4wVzCnmD8Xh27xV",
  "key35": "itP1eG47AmAEwNkLHPfiX7XAYSQPNpwfj6EfRS8p6NVbFdKiMaBiCTfuQPGd67ZmNgWVbULktH6KbVtTZt7XJYC",
  "key36": "ocg9vSFT7xK4RfttdjrPWYSCcMFHvwPxZ4V5UvsSPLnJjwoG2p42DyjhveYtYoFLeNNt4D1asV4WVPVbooBKybs",
  "key37": "jhcYS5uhioga7HvbQfEsCbBxGieG6pdZSjgc6QvH6nehQNgqY2AyKgee3vHiGNWquM11YCEAUZRnqQGya1wzVK2",
  "key38": "4UkDnqJy16FgdZB6qAhGsNGqouQiCapq9Azg5WyrLx7APxnLdDvHJMUXUf7XmNo28LC29m7T9hcW7auRgENSGT3J",
  "key39": "3p9hDz2eTK9FK6iQe2rmjWEyujN65HcVqZAF6e74Arin95YJmhnrDW71dUZ9w6mhNYdJypRCuP3suh8vmQzJT9qq",
  "key40": "4fyovkBeFGvXkHYS3dZnfnpaDqCQ1bm4GnLmN9ahAxWryoUFs4Yo1oG5VVpNWGPnp7ncUJqTaNfTdPsjqx5VEHVD",
  "key41": "iDow7nDjsexk923hmLAD21KMRjCRTh2Ehc1XUgpVopsectRsDxfxKRgKQXMY8mZvg29jeJb8YJLAjFYpGf72sgR",
  "key42": "5to9B2ZJq5PxNJuXGz5J1jZee4b4RF6g8QKKfCFrdCErn2uwGFm7JHjUrwMk9JLujyYAbjFTffYFbTyyD8MWTfbq"
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
