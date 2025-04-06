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
    "3Aw3vb8WvVcA1c5oVQi9VcYZNAsyijyy7nYdWVaFcsvV6Tv4aUxJvPKEHMnd2G9UXeQyaVYNFXD5114h11FZmCNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WLxN4rns2zLTPjeNDaP8C9Ms4NWVu9TWnYJvSVAUAtWNBaTTV8MPePdi1Sq5iJYzH8DscMv8M2kpWsNiZHKbsca",
  "key1": "EUpmps9DEX6tWDR8AFop9JckVbrbAGQiYGHzF9f1NyPSgiZP8Et2BjQaaqQFshDPeCbBncFDXWAPtaYELFS6jeE",
  "key2": "4hTiVLeaL3BLPNMiWM6kRbNBaKtWjNEtPP1DuJHEU7ReZPfthKFu7zicSPtw3UmDeJvKJccJ6Dvw4NXPmktyid9s",
  "key3": "jC34QGvtqhinN2hQmnoDpj4ZnTxbt2MajpMVFMv97LBJJH5zWnCzm2PmnKxbA29WtpcjR2B4TVEXBTnhN2JMQUB",
  "key4": "2vKQcv8N3BgsWaWRUC2GDea6TxWtXRyXopSmLwcX43jp1ooRQzh4EQTxDPDAoDgkkwCHWXKHYRLrCTvthVLXMSiX",
  "key5": "4zw5pvAxdfxnGJF5esc2RMwXgMp6s4Qqf71L85kYXjfNNxLjTMdv8kRvn8WByGtpy3gK2K29thzzdWRcY33bWPLT",
  "key6": "2UhHLqgstXkBBzmKJfR77jKTQQdFH4m3kgSwHSRg5DUzUwjAbny4n2wnSd1f4qFrLjh1EqGs7ajJBfLw1bCz1rTd",
  "key7": "5F6odWhv8PJWVovqNRm94u4tVRzzz4CdHtyEYoqcAW1xbL4PDCm2KmWim9y3kpDreTCFjZcrmVxVftGH8NQSDo1i",
  "key8": "612twXhDtRVqKw5fyY3T7rUmJTke4V7sv7vccZAz1Xb84yHGR9ptnpJ197krTFzmFjXVW6nj69aGVkujqC3tGsZD",
  "key9": "4e4LTuzqiYT2cohRCthXxxvEcmvGCishKDVwWaK9jJF3n1zrLKTArtg1EdcexBFHzJcqw2baLWhd4hNoQe1CpMF",
  "key10": "3mkddffvHWKXAZYUbm7R9Mq9r2VT9jN5TkfJV8WvDpDxn7o44LyCuztMor63sjBS9yMsdhHT3xNzFsZnkBcz9354",
  "key11": "3NengMXdJX9sf9VnjKKDSkf87jyXDaFF2toL6SGEWAX8cx1dkUXba8kc5KhpEihNJm3MYPgNYQdsxsnYYJvUCcS9",
  "key12": "3BA5dyGyAE4s2qMiUqiskdcZNrMq5vT57x33QErGEt1oFWFKk8T6Ero5vByJ5Tbk6dm4CuWdMCMLnZAsrYHczvYS",
  "key13": "2aermJozMZBCkYXmZ47nbwEmwpFpqVM7UYpgktbtdbfXiyPDwLGSSs3uch4S9NQZxTWXaSgXzeWoyWHsbQFJt9X",
  "key14": "42tQWWkY2u2McTxh8i8hh8MP5qyZk2ouc6KbtjzvNLPCc6d5u2uuxJDckkdwQtGoDbSpHXSrnF9uH9YxnpQgSKMH",
  "key15": "Xiw7wXpQqj8Z9JyvhKPaDHcZTiD4M3icKtei9T1swWq8Q8jqELi3be1dV9GdB8b1WTWcyfQ3XjA9dFkmndTcrEx",
  "key16": "22nY8bq7aru5EjjjJVEP7Ldg22UGeZqXQuoYeimi8ugqswamNRKBo2oBswGyC7yZw3irH5F5NsgLKKtbhpqMjBR7",
  "key17": "67gfE1NL9f8A85oMJno7GP7S65JXVFu7pLAyp6Z1YLTm3whTrjSMjcMeZUAJ4yssavHMtEuLcqUSRyQDkFZdCWtj",
  "key18": "Vsw9t9kBwgwZSkfTcbEYZqAUQzanJsK8uz4ZLqJp9TcWEyEKSdLSfkbNwpEQMgFoGbTr2MnitWLziwQRh5CmQRk",
  "key19": "5buD612WYDMmESaZc6r7g622QjyGtt8tPARUkxWB5TyxFiq5CiwpvSKdxytmEAgnLSXf1puKPKjnHrVDdysPo8eG",
  "key20": "mpi2LeJNYN7BozJjtjbDYkVZFFsffaLQubDnoWnvGwzESTBdzxtCZMqLKV1W7TZTKFu8XSTLx9nEvLTQg3UKtR8",
  "key21": "33tJzHzPEiidJk1hVi2UmP8pB2VH7EwMRDW2ScXyktH3iJu9CGvvSXfm3dN17kT4k4ieJj5RTCpTqmnbN6Z2ErmJ",
  "key22": "4f2bb71MDymxRmU2pz7Tqfnui2Xr2MddeU8gW44GkWEf5SMJoLUBWrSQs5VrP1rpWDmSFk8ky2Zg7HVwkib8aMAg",
  "key23": "67mqdZLMmHWscJVRatZQYkjwM1CiydDhLjz4UJ6TdTkRqU7JidGhyGF6kPwTkPjRg1Nx9H7RRfWKftd8NKYvspfJ",
  "key24": "4boAoiuU1Qg5PWgXwe3BwAzWhHhDfaEibsQKVRM6A5HcyeLKj4ZECpRS6Qhzh3V2kVqyjwoCfRXmZwZrTfMLbGk1",
  "key25": "mrwUSd6rUQaqddyUa4BVpfq3zgZWoVuvbm4jf4GrjbNW3xuwdTnBgikM1MUYARB6peq6uSN94PuSkVpDGX1o3wD",
  "key26": "27kUHFVhUTniFm1vqEvcS47ALPfFhCDWuWXRmycf6zwWeRoK8AnoqpLHHaBLQRzJk3ikpWWk2JDkwzu1chC4JVGm",
  "key27": "2oVsSXkdQYSCVVV2XZu3GJxWd5WXG8t69gg3ooFd8vHXncCtPVnumFahr9KCHDgCZZvceJsHVwmHaPepv2tjViDh",
  "key28": "5DFLy5y1pqjApkzPankZ14oLFzVYVVjtBjPEcQpwRxxH48EvsFrcGw9VrSAuSX9Awtw3MFVQYjkVQSfWGyoQoeFp",
  "key29": "2mzGoJFRC5VZyoow1BZC9g3Q1Uyx3LYC81kSRgnjo6EhR8iq3PsBuSYZVtBRqQCDBTu7ZQsxroczqjSXtfk8kDid",
  "key30": "2ynxHhkjK1nEqqJpQ3ZaN9D1BXdUsvXYXjsNEqxARUadoNR9XZLatPqTzbmH3KL44UJpd5LARKSnSiXWSkWbA9Yx",
  "key31": "3W2k5nxCFfSnYKCcabdQfHur26oUrastB2XzciJBS1WdmEQwdRFUJcnNeVVTB38E4NERZpQ7dabkQnGg5L7aZezA",
  "key32": "x6JoM7s2gJyPhpc8QmKfKw5caL4jvAVTerfsAPtjhtdtdCAdtMjaqsFRXuDddyP71hoptvZFuTjta4Bsrc3xN9w",
  "key33": "4CifEB12f6z2ACffdmXRfBgidDyW4JTUbLdYSWtFtEKshiM29LvWMLctJVWDqFrMC93c7wxk6DBRAgQyjhgvGJKe",
  "key34": "4LyGeMCjYq3YsGnXxuGjy9V5h4rH6re1CNAk8SwE2LEjTjmyyTaERV6xFk4NZz6VtmCcbox3SGEBnUNwF3NVKeFm",
  "key35": "3Q17HEYnR8KtzRhX3BJ2Kf3xCcGzZoa5jmEPvsp26tqBjWmgnicghuwqpzkMFFjra3dufNAXei1U3ahPm5WaRQGs",
  "key36": "3js4RSr2kQd61NUmZ3iYhvEw6RoqfCBkgoMrXzaYxsXeNJ52NVwui59dRvp7vAyqCpQx751y837o3zzyqwuKXutD",
  "key37": "2GsHfN46maqv2PKHuh82HacL9cPn8HZ6tZMJTXSw45sShCh578PxcuqJtXPUWHhGuJnptCqReREHBemSuRMnfYoE",
  "key38": "3rPbQcwjvfHHe3tF2J8NpbgCd1BR61bLCS1Zvdxydjmr6KUNzBfeC9DKUbwa5beJKdMt4C5WBsT8wvaNNnfm9s8R",
  "key39": "o8H7Tk1SVWTQmSSf5SpWTZgMQgaYfs2EqQBEtkVrQhKf88A4j1dbtE8d23hY7Zv8DmbdryrGvFP3ZRNYZoa832Y",
  "key40": "4RnjYyRp2jvMtNmkfStucRmQj2gsFDrpeEKUE7qDUcegRALbNpdeFYMm6wrnuLbBqzgTofqrw4LaAKDVvr18ZpdB",
  "key41": "4LPB18Qs6fNyxmqRLumkzKxdvpqqVL8Dm2g1U3SFJmqyYHv1BSX138831AWSYFdc3taTmbnZryiH2VafrZbJw4gm",
  "key42": "37fMq7EFzaxkdqD7HXenHfZpLPTM8VpYKK9CedQYekM1yXL95ZxRSXvRcKFBxAt2yy5HN8TQxximL68CaNLmTsYB",
  "key43": "2W2tHrRaL6zF7oPBJug22DGVx2QCLGRDNH9rkQftvgLmXUCRHK9DVUT3WoNyDZryBdfsoryJGQNgcNUor4JsdaQA",
  "key44": "S98N87gUihuSb3gPNiqK4pbuXefRkpMRsKSDpZ65wcfsnkVYGkRKGqSPG7cjdaHtNqWLRDoGEtRHAtTBPYwgMNw"
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
