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
    "3kE8KUCkSRwqtoDV8eeVBhhFDA3wxYnJb8qs36rA9UZSFLLZ39NDLbQZx2boaWmqFx2KEXXEsEEqWQcPws91BgQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nbAELA98EMxDzHZTeAZwqESVjMe9NF4rbBrBZ3uhCn3Vd7RMuXDa7FGYxJRDN64ttCtCFUUiA7BScc7aJXEpvo6",
  "key1": "2qddEiuKiwpYv4csbiNddpBKfhKSJCXT9guaL83TthBTrZAj7HYh9dR18vGfom1t8xG893Uoahz6gMYjZsr5iDGb",
  "key2": "3stnQMJRLXkCn8QG7ky668iHJzLeQabCnEprHLCMoqFCaqnzipATJGHPrSdE5P62UrtarmgkgifBEa8h2UUPN1yo",
  "key3": "3iH6DtSFhDWtt74WdXYLCU6LGHK6m9EXAy1FEsjCRAwRFNEhuxZBLpyuQgB1jis1pH1aCfzgodT67vZYCDearpbh",
  "key4": "4JaWwFa5YqraYe57HrSUNkHPp2AeKCekmyBM5D2onfzVmZGX2GsAamEsAinjLq9nVkEkHJRT4wT1Ui1CoFcW11B1",
  "key5": "55xp9yG4pSV38sqrVTYYdWja1i1cgh81Pxh74pTiEvkE6cDiZR5c31JATATkHtrePk4Qg949tdXYT9RK2xKzB2AU",
  "key6": "3xLwEBzPB7yZ8ZVsCxfSHDfHt33sx46n5ApSjxaBe4AEZUu6tUr3REfu5t82JimQEBPNKZNZmSGcavgCrEaJHGZE",
  "key7": "3ESk3ctsjZnyji2iHA7dFTq6CuVS57VPFuYUJsg97MRYQ9XbvXXwUBFPcmUUuP9Ma8kxd3ZVX3mvAeYuWnYDzgUX",
  "key8": "j2K3D9gAasgxxHs6nBiFu7DkabS581z896RHfdtW3FYGNXuNkZqdaQw6oj2vrDx49ma3vscE1e5n1KUPgUG65ti",
  "key9": "2jTK3YMxF7LpLJYoU255XMQcg5E43EnVLxhFUbEA6kkh9KqCPMydUGzS6PcLhkQKGPZ6Cpx4XBU6GXi3uRVvCSFv",
  "key10": "eYopqwVX9J5kZKdtsEzFCE9XLWLNSjdDsNEJWxu1n5kNnkXrZ5CmLskJJLf9Vy3uvcw2jPn3YFCEfnHtQiFQBXX",
  "key11": "4fMabafLAHqoJiPsnvFBvxLSpWYGgZ3QWt1VsqVBtMhzbnE5Uww3UXNeQW3UmNgVKsHuQR6Fs5879VyKK5GBJdDh",
  "key12": "vuVPdCF4XrDr1MsCHbJwHbk51HEQhNkYv12Hoy2PayLpye2AckgcfbMv6W8WSVFi7JvuaBXWkzYFCx6FcL7pkFF",
  "key13": "52aERqwBsVuiyMvDb81xPVV5oPw7vMwYVPWGKuFmxXU5bqzoreUVkS1p1mZrTdNsyi5gPVxsoEefkD5zyrRmPRGi",
  "key14": "4xNFLUmmZzMTVBiJ87PUfhpP8ssBGF1yYnyBywErsDRRUR4Ws1fwCuwM2L4MY2d2LpaJwEUpHEwXEhCNtwX641a4",
  "key15": "57HQadh72QX7FdnKoweYC86hyfqkc3fUXhyNbXwnWDEEjadR2yeSnupDvySVQP5rA3jZQeC5c79v3AdPqUFZZqkh",
  "key16": "3niy4fAYu5dGMv91UBfNYFvpPq4SHeTLhAGoELiMyd8PUPARxHxHtLrZNqsSdvGKqWyko7oQABGkPV9XbspnB5Ae",
  "key17": "TShayBKiFsP81ML6s2zdU65xKjareGMrhcqsfoQc41GKkG3xEybVULjwzrGkK3aYTAtKCfgamxXS3JjsrVtZLq8",
  "key18": "4EdXQKnGwc3KfEgRe5y7QzTXXaeEhvSHnU7XDpTwtooJrPo8bg8sbEHERah92ovUKZipkz5VReApuAT3JpxQbpQA",
  "key19": "4zKopDes7Vvv5RKf7VUVhZ2RLHKfaLA6faj4B5NsHLA98x4cETuExgnJiKXUPQeDE65hqfJfBhVUGVsrZzFtC6nq",
  "key20": "5q8FjssQkYkv5gaUDYh8sDRPc1J8PckXFGs86LzDePmp9hgS517YT7sebGjjEhSV2fCtv9Xu8f17Ug5FzjuRdFJM",
  "key21": "5uvXFt37p1gbdR7TbYMpm8PW1NtsQxoeAAm4SmRwMwZpTZ38TUnHtJpCp94Dwyzczt8smCH2zcMdFvzSCtEcfCGJ",
  "key22": "4ULpDWPj4RJeKzUsaLGSWmccc7m6wuV9CLMojfCpXEknXnRFJkN3goxoE8dkeQ6c2LtzLtoYrHTsRrVST5xodjox",
  "key23": "27pu5Zr2JtBLrvv4bgTe1V49vazAFigALtn73L6oYxcRAVscoAJLY8EEJrWhaQA2NrF7Jc1Cw4vBwaj1iJm9jv7d",
  "key24": "MWiQiQZJcpwHs62iBProfexrKR7jj6g7VcChk1E1FVdMMgUaQQosqEuEezCECa43AEdM6manSUAPusksKm4TX9f",
  "key25": "ep6EHFM8La1RAJJQsXtrdazeNpkH4U9TRUnDFxDhcM4t7siU4iLQFPjyW2DuWZP2R71p7fewvNPcZyuPHTyrxfV",
  "key26": "vR6nTWZ7m6nqXSYtDC7kQ4C1U6ktfeDpyckRw6fbbHvApXA5cxYe2wjadgyNaS1Jrnrsqe5PP7dRGu48fhZg7Ge",
  "key27": "4KL5BouMvUKTnDDXoqLzLFqdQE784EG3uDhvZcg6xw2mDP7XaDjihA45CMDY9d9DPxRiyRkh1oWWQe3mZwWJf22N",
  "key28": "Cn85CHhvRWRUF5ipPeqf74C7VLHWcngTtFSSCBQH5XmGdQ2fFJZN6NFeVmkg9v6SLDLjtAm3vqDJAAwk9hMZ4B2",
  "key29": "4xCEtEGat2j8vhk5Xrv6Tb2BB6W1Y4beTUvZKz99YZWComK8zfy8cpXiTT1dVt83JVTxVUFNQFgxzva8vgWUBpNv",
  "key30": "5WmF3csNd1HbZAS3556VzSc2xDDT25DGc9H6sGC7GFA3cfkti4x6C4ZRhkf9ibTXFLtxsSYhufkWZGRn4mwXovRU",
  "key31": "3TwmvGfNVcDQYRksbXRjzBXDRJjxiKenRT1rzMzNuSeYLUBEagpuPqyxBpKZvp2Rus6JzFNkF5MwFkGkSRiBNXHC",
  "key32": "3ijRoJ3zMzdW5ivGH5vLvj8kcPLGtYexkvd7vb2gJ83z8W8zapbpsjPrioK6VTW29k9fYPtt5vYhpp8PdZYZxJeW",
  "key33": "2MftRbHsxv49hEyarpbWM4jwyQjUfJ7gLQCpydpwTpb6zU7VHT7NGbJwxfNKejrb4M4ykcwf5hmbiDqY2g7nPLNf",
  "key34": "3LF4CFNadJxDT78KxcxPecCNqfHh3vr2EXPCuRewmdjbsqB41Dcg9shYRNPRpGVG1dAmiBEr6FRYs58VyQMS8UF8",
  "key35": "2J7VGdWNcYaVFvZbey91pA9aEgKWFogJg9N2tjWwUBszjgjAa6SqXQHmME8AtHC22QbQxDScpLKodFB1VVF6j8Dg",
  "key36": "32H4AJV6r9w7Q6B9TkSKNAkPyVWRqCMmAmNEF3KeVPMRg4QeNNFSmgSDAu67EnEYrqeSjvoymxJZCFPw9d45iyZa",
  "key37": "2NEZTwScsGMk2q8bKTPJZhBqoap6RwDZ2pStC4egktB9pNQ7QzyZuELmsWtgAmZKPS4pT2xeRspHK5V3zGAghGJM",
  "key38": "EvoCbZ1fRiq7JSiTGSQQTNQ9NBiQDnhK4mkg6xqTPkEs72yxVBjVuXHZUJ4uRqJqvyayVtkDoKto2yUKZX45uey",
  "key39": "2Wh4gyZdcKFbLhqe7jPdtM9RjZsaEBqCqpPKMcwDFfQbMiwXXocVvnyWK1GKwCrG1pH9wrNpsZ2pWyoyRLE2Ee6A",
  "key40": "xvLT3iyFhk9kPR57MYjiEtvzJGm7e4xFkxBtU2zWRSvicto4ohQ5N634kyGyq7qgZmo3jxvEKAhEmg6QUEAQFQa",
  "key41": "4KNE1Gz2YFDD6jMqifosdLZC7TF7hkT4Y7SRGVEnjeQQYqfpREzzbRjMx1qin9KHMkmbh6VUjdcNyxHDrhK2uEzD",
  "key42": "3FoXP5KrAKwPuHZKsaRb33zKuoHTYz1S49gHJEhxVkjYnMzMrWRX3bT4HPTXMi3zc5tf2TwpBbwkzg1QxJwQ7SkB",
  "key43": "5n7zVXCdR8EhynY8cF7vdgqrcF3MT82dap2iRjEcwZCV4uRhwdP1bhPn7BQ7HNPzt5qDzNtbUGBuWmmzMviucKLt",
  "key44": "4tP33vFLegE6xfGd5F6T5xL8C6UWyj2rFPz5N2cBBRRxh6GR42oVZBTzXghShJfTmFkV45s4UCpBbqgr8V4zsz55"
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
