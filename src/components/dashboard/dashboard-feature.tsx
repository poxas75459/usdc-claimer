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
    "3d4w139tDgRBR3kiMMzwrLQu78soFF6MF32q7jQQFxTZygcuWC7E5c1FSUbw4BogzAh8RJvNjVGDTGVNi5hLbkFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NavQBoy8MYFte52BEHxVnbFdz351aGySCoBa1Ct41PbbA5LtRGKH7AynFTCo1NsZZkk5eLDZHFs1Gjf8ramEDa4",
  "key1": "3FD4UJ9Z9k8mWSEQiN2fXESbM7RcCzV23vDntGrfbk4WaAABBCXMvxi1ZTZMWQAsbxMv9YZsDSMcxgVPZuCYZ6cJ",
  "key2": "bFQRcAAtTSCp76wnvrf93FSXVccRSGwAVTr3rcruMWwbnUsUmr1hj7f2GK6AhQCoDPiSNtMArqzRvsfvzZ1eRfW",
  "key3": "2cJ7qRou3cFWHTinW76oRweV8R3SB5uXosM6AoDUmpahzEQSkJJR1DEkPkDKUiLrmrGVuAHf4RxNKgnJ4PXRM4AQ",
  "key4": "64mZninLySycSNzP8wwyxEDdVvBfxfzkckSCWrGP2HCWH9jgg7JwNyEuyFzPGrvahHbaeV8tAaHSNrsLnpYu4ecK",
  "key5": "4ZzCt9SHVZHnWKsmaSJPMnbAsAUYx8H4pcDkGo3NSSHtmtMgUpJyPGwtFfWs4orgw1jfgiyf7hq3Lc2WRi4bm9zs",
  "key6": "2GPuFdxyd7tXnuWjtXDweb41b9B7Vrs3x1Ux195S7t4T4rEJwGKgxw7dp9cYJjfVyjdAKXxyR5Dzdcth4HxzT6vK",
  "key7": "32XudmHTPwti6P9H1Ntxcr9imaJh5FC715RBX9QgibhsAKCE9MGMXYrWxV2551adQQdqnNVPEx3VkSWHoTpgqFJ5",
  "key8": "3ie21ywWwUqM3jFuPMh1TF6VxkLbZ9gLzYkNkokE4xr5BU8V2acxwGJ3BTVGJ14mFwxodoHX1p429WounNtNz6sA",
  "key9": "3mpDt1QY12SQp9HMN6MyREaGH6QRbRJZnNodPLPGJnD8btHtzJApiLa6BC1HsFQW5CWZzp96d4zNxSUzeQ22Q7qy",
  "key10": "2CWFAoeJuE3CsJiTuS3hN5aJ5fCPtbEydwRz1p6fNvKnqURoy9Ep5GsqqyRGT4mfR6q5hjrZqV5aRCQpT2v1yypj",
  "key11": "5FAa7Dwx3m54fxYtVDTKiYzSdqGeBr2TBKvoUouHhGbN1tz4o8nQTH8JqZqxvWAh7k99sXCSx8uyaEoGxpRVa4c",
  "key12": "5qLfDvfnq3Gt39qZak6qY5E5WE6Gwbn3C9hE1vwJfGMMcw9NHyBaRYpj4J3jK5Mco1DY8kPgJ3Do7rpjQ6ZCd6vB",
  "key13": "3X2qDQBHqZ2BkQ5ujTooU7wrm9kd1DZ58kT1KDEePTs5BnF11R97eKyP6HXUds4nfDSbZMpTGXfQ8Fa7e43qGtCX",
  "key14": "2EUXWpntSMLyZ62ZUyV8YRfV47BwXNkJhQh9CNci9skWUfrwqYHJVJ2KPfEVRPD3Zu5nEoAL4JyQrpHcbFrz15Pd",
  "key15": "2UxZ7vJeZRFmKq7noKdAkJv5UytLWvmDdkhzSkff5KMYSWVHTmscWMcZv4MNjYCAUinpCn4MreZXkbzZMqwUgMv2",
  "key16": "55FwNFpC8xd3QiN1s9YUku1MwKxCUhJg4QQuwH9hEYUxrjKFnyUbiTNEiKi2akT1yEKVvao8x8fQukQtxrK1mjhB",
  "key17": "bwa1YioAxAjjDdfNiKLmBtY3ax3U9Y2bjk8zzeNGAy9Rhe9eX5gM88YZ2ynpV3bxV6iWP7try5ypAM7KsJxdBR8",
  "key18": "2WCLHDNkmiK2wZwbddgLoGXh6SmaesdPm1nmLy3egqdcWV7oCGSWBw2k7g5Hp4MBezQdBH5MFD4wvrCt1YcRkBNx",
  "key19": "5b3F7KeoaHb71EAPQmnYkGku9EoV7kktZSHS1YHWg7skamrweNKJBFX1xBgLiDX9ugUQxtzY4agDaB5pCBN4G6aW",
  "key20": "dfhh7KLjv5DAZYfdVnivqGqwPg5fr3FfmMCTFKMVNHTcihVfb7ZA1BVNfoFw67h1ywewdWrZffffXGnqU4u9pcL",
  "key21": "4tp67H6rj7B243Rxkg9TNmD9MkuddGgsCoJA3SCxXSBruLcYUoknLfMTCuRW58vtNDwHYmwJbjswD9paPA9MGRSK",
  "key22": "3QdcxvnKxQvcMVk6mijdnd3k63CtGir63JXNpt79BAjVkwoLm89iB6GH45tKKCzmHumUZa2vQRY24o4wjQUaWjoB",
  "key23": "2XAjx4TThWD6eTBty26rcCfmb7bPySZHQKWFzoisZwVE1W3bjFD3j6PNWGcDXhR3Yuxv8BSkwsqqM5QiMvuGKoKz",
  "key24": "sqkuLAYa2VgjPMJhQDGBWhWLtD9KtJKk3itvAVWQjPjfj4wEoNzJ5bsNRF5Jcxbnxsv81mf4cCE5ry6dLAvedag",
  "key25": "5VCXhF6q2ZsCHU3B8KcQykrqy1xP2jq6gXsqmwEQKCdfTnU2LaNAQEQKUmHXjaeQSbbFK3NixZVKwgKaKR4AmoA3",
  "key26": "49wuvGAxY1PVNEke16G5W3ZRPcXqCNB1DjqU6Wuiu7Hm51Paj5G8PrgKke5odGNwhNEkgQZaeDarLMzwo61zPifi",
  "key27": "5BGry7qdQSFmiRFeA3KRwYAnCqDzjfkS7RBYcpFJvKxnk3miwjuD8mbJ7FPFahbuu2uChwBztGndi1QwWwdcoNhi",
  "key28": "361KKkEXKAxQAWFddBJ3qbn8xBnueEcTumAyCkQeqTMRjWwEDrvxDhYKZ6tpwubaHrCcxm5x8aY6hGgL77yHubTN",
  "key29": "mL6efgMfcuoUYYnBsGKsTSTPSWvaDY4FUF1Ts1roqqiiXey2w9M59SEexomn8vktpeBAeceFnbdKJ9QDqybusUb",
  "key30": "a8ynYwpXWnvzZFVsUtAjvpqHJBvkk6CFwTerFQT5aniNeZJBGKJV5uBXM1FPipLB4msdoirGmzRqiFGNu886PQZ",
  "key31": "36uYQ76f93rjYMHkQmmh34oCHgEzuWaGmXkVjDQ9JkaY2FsVPCr6wkzn9mxJ6KuZgcFS2pcu9a76YAuYyQpBz3Y2",
  "key32": "2SxJ5VyqypB5EWV3LE986TeDiddoBxnFxdGioCvN6jGKpmqQ7gHzeUKSGdQqtrFY1xhjsZicbJGy42gSdzTFi2qh",
  "key33": "5H8fJ4i1zSLnBNyfgz7aJSMzjAvnUYf367zAhacXuMV82RxMJtJX88to5K2TBoJ8Si9owzdhqMiSfdfzpdZWFjTK",
  "key34": "3hxC12WAw1hT4LkpAmhKos6g6jDVSg7tr8YeauCWzcA4VfARAyorAzuUwT5ymFsuKkQbfGA73x1VGFYes5oD7KM1",
  "key35": "4HHH7Qh4Qd5MKdBWCH2cktZvgEubXCHasUomgbjYzx5bxzJBCoCNFvQLpkp49vaSEjaLC8NQZYUeheEWzayTbh5E",
  "key36": "iP7LtJXv1nmqyU71EBsr7YPN3vuSLtgzNhEgx1JWvWKxU9jSuSgd6EiG1oKCb7ZReizQ1U4sGXYFytbcf4xb6to",
  "key37": "2J9SQp4U2pGLrxNQj7cGPn7GQdq2boQwZKJpBfVBwHgc32jdkcbJkUg428krKvuNstDJ3jYEo4uWa8zDpMsmT2mR",
  "key38": "3qkUVqZQWg95tPHhUecXVa3B9QzpevFVkpGiBy11TD4cQUgp3ZvKUPvZ4StsCx2GnRQ8vzyYVCEJY1y9f6Muewp2",
  "key39": "5MvNL5Uub99nsvhs8bHUaaDXs1r5CHSNCyHLjrxxJf4VDVBUuoZFUyYmGRgaceqVckHLvgy5eQ8ghLQQxjjD3X6V",
  "key40": "kRpHULP2JFf15o6Hdri2UvssqJovv3oGYEBPf6iPQ2q91SkL8zdNQZb9h6CemtQ3bhQETXZa5pgMEp84iyJotq1",
  "key41": "3UsBFUUsGrWziBGistqp7ntXDsi3LUSxzeMhaZkKAzm9va4sXGPJ5pXmnena8ozk8Gc8DSauzM3YSrkmFEkNQ44T",
  "key42": "4Wp6H9iWVTT268BzrJFPkBeaVMqkvVAJaQ8ESLsWW4eUq2UT4Q7LuSAtmkMa8iTVLqeq46dhDw7FiVfHQ7AzC215",
  "key43": "5yhynEa2pFXcxwN6oiVryeGhuV1EyVAZmN96jhPDF3jQKmraFsofPoja7z1QatBo6iRa8rrS6pJr2d6ioCVH8yt1",
  "key44": "3GMXcP6KNrafjUNtwcBSFVKe9o42jJtEUbg9jBELkarv5KNdz25LdD6KA7eCZ4fZiYAFftxhNLdHRFUeK8mSUw7p"
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
