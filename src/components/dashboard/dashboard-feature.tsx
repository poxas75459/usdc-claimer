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
    "r9JTG4D59775DNv9ZoUxRcwdf1DoHbDHgrhBun5frTs7GdbB5MBVP1E7EbFBVQ4rLj76RighEyVvMjWHu6EJpEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45AE3oksGq51H3SAPgeiH9p3AqBdTXjSHWnjGwVoPRCoG6WQt2H6veZmHMyVSGGnJJ8Y8p4eEBcuwYwidiF2XZuQ",
  "key1": "4htKCrZNh5Ttpsjz7RnVJJbybc8oBdDhCtPSxYrFLRSCQr44QfzhzypTrJu9d6ZB3144oc13CZnxCwGjGt8Td6Q5",
  "key2": "2unyrDubSYN7HBD92pHQdtEARffmARXPytaPKAdYJcUrcK1pLVGVD8Bi3eNiyxNDRHZRcKSv4k3fgnq6DDnwLh7v",
  "key3": "5TURtkxFLsaMqyVccPeZdy4vLEiwWY3c9JQqrrJVLqw1Pegf37bGiqZgdWrDStQXvDb2gFyVbPJc7djRM93V6Umb",
  "key4": "59ZFwVNqDfz3FacWq5pNbtp2dqPwFdWkkB72CGoaJZJAxzVdzc6xBgpnfmF1SjP4kCgzVzZBTAyCUC1xS6HLYvhM",
  "key5": "3y8zZHuR518JpRXrz2ZAWSyr7uesbBxj59dDx2sK9uhUDZS7hBxFU9Z2PRMutJLpN5sN1BDRp5o7YKH8cZ7L2FGt",
  "key6": "RXCZCQmtLoPyUCs3UZ1yvWv5niiEhdMMbmT5KZvjPLuWuyegzEVSjNM3Xw8Dmv7AXwDwQffPMVcdKPnfnv5UqD2",
  "key7": "4sTZyDtvt3ceAjvJx1L5GHjXCaYroSkjvqRqMhx1w4GefJPRbfeXwHvEQNyYymcfnkB7VKN7rK1b1HJhWJWy3ojM",
  "key8": "AYahkvudKdY8wfExMfzKBrGiv7RGiGTVDjkpHCa5rMP95KKuPYocro6TKwqsae44GiqVAx7g84dPLYN8fPJNGwn",
  "key9": "YPtFuqhYZLnBYVA4N1QTJMgWpvUxiMK31j2o8XxRwAKz5cLakcWRrMu8Vzy7HbLkgPiHeJA7C4GCsiCRT5yjXcY",
  "key10": "2ZfuZAmVPSu18GYN389Y2Tg5GJogBbgWoeoTH2ZwWEaCA2DZFkGdtH8ks42rvFhspmX7ns6TV4aCjyPA7YqvK2k2",
  "key11": "Ni3fPhPr5hzovtMU6FqpB5G2fS9tAZGyTG8ChyTVbXK6RV8krtuZMUYJsG9gPoj4PBAQtJyrrdkfvDqxESoDtwG",
  "key12": "VmLch8tNCYdFvWzPTqrwS6SL2csdYpCiZVBgHV8TLw78pabu6zVm9cNo4QSWz4B5Vx5YxBzcaddFYisLzS868TY",
  "key13": "5EMZVSaVy8DrhsXKb352VXUxwpD26xrfBcgzqMT7QTZSwhjyoDpNibczaTSHkJWnkAt3pymqqHvRYwFGHUe8XnKC",
  "key14": "3rv3VVhJzmJoPBsLaeFZfSKSnUBkRHT2CzpVtkim7zDk7115k2kujZgeiwjAvk1esuWF7ZopneyNKRhaNWWnbUiE",
  "key15": "515uxdhC3c9m2uQMrySBFSp7WrqwjmXJevN9cEWKiMxAyram9vE6gxkQhdDkitG7GjRD3VQjM9SPEzCMvKDHXe7P",
  "key16": "QoQVS1diapXj4eN72weMMT3bVC3vvJdpY6RJozCAPLxhDoQDTWSTCqRfUdeLxnu75SFQakMThj8BQkogNq6tKXk",
  "key17": "3aqeoicVcKCCkReqKYRr7aqvs4yxFCckp17PzSEWsv5ie1ytxS7eSos9Rgf8RMfTBpSc7r7mxCMNCwFunz9Aywcd",
  "key18": "23SxF1AS9KYNbf78fxJPXRxT3nrxfFYZv5hCbMJYs5FPYEvmnesZ865CP52d53HMUn4EMjFTRiHQD9hTBavhBovo",
  "key19": "5HjNcucZPEswXvaxuf4RGF44Ppvp3mqhmpEW49c4fBEzeAg36GWW4SVTi6aVbJ7aFXbtS68raz8N2HopiJHPmBGh",
  "key20": "2L7neyNvHA88JqMCtxd2LVyBac9p3WPkjQzrGg8khMenEeQTXAAEChPdDPKMNAKJwU3bzPBHr8koASCEBx6jdp8N",
  "key21": "43C9SEWx5JMhznP3kjQKMsSeyy5BebNZKfwqbamNRb57xPxukSPuwgDg9gRFJviNCcS6VyRSFHXAPVKUVmXx9Vka",
  "key22": "4TmGZcLRFhPskdY5YDv49tQ8mqzWwSqyEyZn2JJ1KgP1Sn1tTybZXCg5awiWMwqyTeMs2YPk77cw7YeSQsxZLRZu",
  "key23": "3xtcN2PSPz63FvCUveQT2Vg6bXRDBu1JmwKDhB3d5bhKybQ8yjVoW8WFAX6mrvTXs7WWEmM6fFBmPHXfD1gErpkv",
  "key24": "4XBbxkQw3t8W261WJMynQpAjepWtUnAwJHegPWQEvR23H7NxbaAGYm8t8fyucrF7xkon1btyLz31dYCMHvh79L8k",
  "key25": "5Xzz2L6wBvkNPp78ipaGB1qZFWPGWCndt7z3RLfbA3vFTWnCSVj4ggDKDCtq9Ytpm93qYcr4ngYoW36dSKVxu1xv",
  "key26": "2f67LXbSA1BWanqb4yP5F6TarMzPbo1QAqq13ULpX9exVKRaFj71PDnmdKXTCvaWPZXKKPih1tKa4pr8WX4BmWLR",
  "key27": "hzLuyMu5RoTHkjvq6VmpNmXqdvuR9eHJgy4rhraoLZprrcd3w51UaqRaEDqDkerDmmNMH8wyExeDFHi2UUVN6Hp",
  "key28": "4VMGm42BjxYi9q3puAfGhAxgsrT8yLZwGgm8ABJwyvTnL9xiX8gKYpLEUUuMGQV6RxG2Dqq7xWXBe6HSnra8PyLw",
  "key29": "43s9jk19oazzmAra7ieRJHp1dHpeGtkmKApkjhvyQ9bgMvZX8vhC46m2SJurLX9ngUxaG57wTPBwimbCrNEuef2q",
  "key30": "3CAcqvp1bj33Ju8DQwtQ7pcnV8hzLJ4kdgytirPUekje6MGwMxaCbouAM1HuLZobffqKrM1Wv3qogQd2GEyEdYEx",
  "key31": "5hBT3SZud8aUb8pARABDSgh6gyX52fW7XDKhFJCo2RU43JNqcCqQAyatqUVm9WeKX2F5ToSKmVoaXd9cLCw9d4KY",
  "key32": "36wxPzTQSywManLfNQ6f4v8S2KBRHfm6dSeBmRjsuCuhTzvk656Yok73VUaBkBwDZhP487ejjvJF7cNRSXQs21pv",
  "key33": "4rQhHCNWkBnD8EEwfiqiAmZmg3tAVsPWSeWpR1vmSYgqwSEbe9qZEba9k7pMrufahnLByKYfZfFXvaQwMNXbj3qG",
  "key34": "Ck7VRJqSkJXMXfiyyuv9bqRnJMKWGW7EnM9BAN1ixrFvUgYWmLbNMD5ebsEgQbV5ADNVCkCSQQAA5RkKU7g28xG",
  "key35": "2sx7V8zfkuGcAp5tqVazenCS1PFmDD97hzy3iUcEgb2AG4pFmqdD62jSAFQA2ECVsQE19eCp8CmYHUnuAKfJ8urV",
  "key36": "5Z4YKnGPH5LyMN8DsvQxPb2FQW7ewh5H7RDU7vAb1rAadz6dhrWKCpyXX9eBQUTCza8SJHVXRTnnuj3NScWug77u",
  "key37": "PCPRGVNcZqCjVzVVCXEPwng6tDw7enHTrKJbUf5BzPYBYqSTYV6gjUGk6xqqWrCwjs6QLKiGKJFGQBdG5QGMHLx",
  "key38": "Vx9i7TqXu5Cw46Uvr6te3jojyA4NPFWNyTQ3hTsgzgbbmT9dC8iFuezUPnoFYq8URU2TV9VSSZrEgKxokfj7Tg7",
  "key39": "52auzQ1gveNZL1VCsv59Joahx6EieRJGdi6xAK14izAd9qfafWhdSgoeGxEFmnphC3Gda4St38mY4RUeHMdyPDZk",
  "key40": "58jCk8GkJNVdv2ZZQJZ4ZZn7Wo53mmPXNoZy2XvuqdJxFsz2hYSFoo1SEjC5AVy4QBYcxCz5XiFzG16hCsmZKyaK",
  "key41": "5Kv9otUcoQP2WwBc2Lm7dSdM583paWfcbTu3uXsqBX1uvE6iKLcHWUBuA9JATHZshqVn8KCpVSygDtdqfRm34C8E",
  "key42": "3TogMAEqaSrKXXZYHqLBgaBhGBWA2BN5uxCRWQ4Zy6i1toYrUbHYKu7ssTMN4Qs3zkExLiz2RN5jFTbwxNYxNNwR",
  "key43": "32TYHna5FGpqDwXZMa7t7SpuHFiP8EcrHcdymBqqrcdvqJk7Uuh2mWxsuysDAeaGaNJ5zm6cvzymJhhhPXfnfTAB",
  "key44": "4m95PMrNzHzBZ4nsr634kX4vRjavysbYsNByfacK1KX5UchcvfmhcvE3SPGUBA7LcivWwgbgsphQZ4Uo8DxwxaPP",
  "key45": "5dMjvwQSv51btyW6Ws27qpiR79wnwQknXf3BHPbVf1k28TgMYhEexaEc3YU8NakAEDaKKsi6LZdwExjcbjV6U2ub",
  "key46": "5zfWhHC1hdxPvXC1oo5rXCEhVmzFvkKHdPdXwh6ozTxcypNUAJhred2h8KP9KtG261sr4bb97MxzkPm6Qoyr92cn",
  "key47": "46REmt2Se7e8sc2VkrBHbyTiofNm28oHuFYrBpZTLvum4iaPVNCtbGRjaNpM7RSBtzqXK1We2LkptYwHW9iuAXwR",
  "key48": "2N2AjV3wditrYRXiGn78QPadG7kGSLQYHTy7ru8gKFJPyERmodzYYuis8oU27FtEVAidzooW6BAh9i7ZHDuqGWo5",
  "key49": "BegT72x7AwjLAATrYjHdQQ2CipSNp14tW1PfNMkvfPydoTvXPyQkDCxRTdRZF3hGPJt8qMWyYbEfAjWQqADBYPJ"
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
