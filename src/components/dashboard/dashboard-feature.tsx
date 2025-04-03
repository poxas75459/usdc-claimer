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
    "29n4DxxkUieZGsAJSaXt4Qk1oK9t4YsMvUAE5n9wBArpJjoGe89NKXq8ZPdK9GQJor1ATor2J474cZnzZnA3vVZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jm2YNBF68YxaRXj7Z8TVEhuyWHTKQTfYZSFf6cArcjNAA9Q81mdiz6XLkMHt3NzPqKCg9fnfwZGERurrQZtXExM",
  "key1": "3EhfUqwcUuYzYHwxCscLQQovYBSY2zkkhbaCeTzxzhSo4jdaeBGCXpdL87fVexcQqu3J3MdreEkMiZS3eFKHM4tA",
  "key2": "354sA4BXcc9e1hiYsJKdj9ukUKNUoCVW3v2pBhyHwaD6SvA6YRzVX2TTXnoJKfUqeCGqjydVcFfTopGPACDS2se9",
  "key3": "2qCyiseXfQf6DsA9Pjv8GUvwJQiRTv2aKGKSKNjcdWSBmyRhWvT3Uq6qMTc6fPQnA3uQXeaSQmr6qvAP2ToXVKst",
  "key4": "sfLmVaeRsGbkuYUTgpYebnzkdcbWh9k7auqFzHkzp1TgHXRW63J9xCR78mE94WrDP6mFmiNp6YzaLivoaVbnikm",
  "key5": "2WjkAY1kh4AWAYE6K2jVCyM737m9oNg9LhJN2mvKR7GBP2KQV2ryH5Q3cMPQnp12isDp6MvdVMuYd1RYTN3TgaRU",
  "key6": "2cCcX7VVv4aqVNtgJ9aqH7AqqH3i6FEnFcy2yQFXrg5auzDCqiVgbU38dEVYR9fpXFAwYDEWhxcgFxDz9B72SYZ4",
  "key7": "9rdDimLCewMM167Q8RfBhcvVDR2AQVjURxaVsxBsX4dpUkhNPhGZhA6VqKQrrMZoAWmZVjdU7gCSLbod73NmfS8",
  "key8": "7Mh8FAnxvbzLRc3TAunNHV6JSfMMXZUf7yhH8Y6FQKwxyw3oowFDrPYFuMDrpXxS3VjHFhMjfGtfq8s4EciWncy",
  "key9": "2eoGjPFqKAgvoGFKgC8p7VFwWrusT2uPmEHy6qNx83jRaybKMe5ESrKZpUSM2QccyYztWn818cRPdphxnLBe9VLK",
  "key10": "3ygWKNVmSLEhrVJawvQ39XTpndMz6GBTgzh23cedphCT1mPUBqzYjpHPQSecQxPCkN3nCX4Zw7iht2VifAYyLT3z",
  "key11": "31BhwyJJY6EQvyLcpTsX6pR8TyHAD45VjpntRU1Xh6LSRA3qktEcDqrsbnenMutN86HihGnKFxpeMSjV33Q83AsN",
  "key12": "WrDq6owXzAfnei8QsqN9xu53VacKEd4av4cqEz4HxTVNLMe6H5rTwEHV4zjkV8LmWHWWCZurpQVfxuk6tvkBT7N",
  "key13": "47oDTPNpv36iigVFQMCoFVs1VWwTaPtqS5MMzLxUyrdit51Tft4T6vaBWEqdtsXwMFAfFZXZz5UwTLwzpBoqdgqd",
  "key14": "5SEAwtncDmeaKRKdpinB1RVwisKybGEH4Fb3gvU7M9XvUCr6EcMTB5PTko6oyMGL8SZFnfP2WKEHKGutp6wptndU",
  "key15": "228hUKSDxptJf5MWcdbrTJUyd3Y41aveSdaD8wgBQK41uztBFVAWLTS8oddiG7BkN8uvbA53eLSN8MY6UJqs2p2d",
  "key16": "5YKCwgmrgRGJxPKTBRmWv3GGSKRf3tZXHQSX8HYS9U7cX16AD8Rn4DEzzonY9tmd11AzE2MsC1VHsf6EdeBrgpqv",
  "key17": "2atoVCB85bPZoyh1wreWgQ1tRCJqqgXRREjYxgq8BLWeyWnEKV7wu4AbVYPC24KQVkp4Tc5gxSyBqkHjBfX9c8uu",
  "key18": "3vxGMBF8dLyarfBgjyEyBHF9rJ7mJPPCTgZoWtpiU6z5hKGyroxiS3KoN7txtdNjH7W97kr9LaSv9ew212kH6bvY",
  "key19": "57bGnuj84Zq1sxtgsw4GhUKUEKodRszvk4NBqHrzTxzagPqZFoqm92DyLUyvhPnLz2neLFRdTxhEW9iE14xTXxck",
  "key20": "4ER815ZMRYfXPzPGZLaJz6BbQhtPibKMdUC8yUahQCqvhFcSvs6MMbHbS7sVAH2ErAY6vzYq68zqRYRzyFF4FW58",
  "key21": "3WNzGfbCwxeke4BMVhFsZW7VLgnGj2KsVas6HGaJT4SuDd8TvhPhghmeUd9b5NkP1eBuw6unksCjzZAaBuGy6Q71",
  "key22": "5VxfVzyrZ31nekUGZRLKT1QhCQHV6CF2UADoH6SZohnFYExEdquU27K82Vz3MjCtmyB3xay7mzZKPgZNzFsvrqwY",
  "key23": "2j1HP832UzuhSGXFhM3yTBocsV7L9g1bmjnx7ArfNqGfV5gePvuuvhDkJo6UeSFNYewvKCZ45C9QKHv7ePnR8a9w",
  "key24": "3Km6jyVd8xuTJkCpJMagDNaQKsCA5FyFuhpzdGNWPgFC2iX8mtpX5Sy8HGM9M1KzYVRKQnAvN32QsNL1cvfv21Jz",
  "key25": "61u527fewa4kvnM76mEm5hjqMTdaVvP934BKx4vHCSF8Sgb8AQGqYqAPsyL2jaHL198Woqr9U6Cmp1uKBK4b2LGn",
  "key26": "3bChHoocARc5K8QsXLEXdnM2iUSmFqLT42kA1nzLWSsgywCoDj4wsutQTeMpgQ5VB4DtZvmWkkyw4ysEZXK1FGZV",
  "key27": "33YSroLs3pwtFquvgSHXeTxQNREyCZmCts7nbf8RvHZ95eJJ554tSh3KjCzubDcUFwAFU8bffBZGVXTt62mTQvgG",
  "key28": "3vAKPihQzXQ6NHYGsHLPWucYwYcpAnSn3uvXwY8us888vBVotq8vwwtyrDymMcayeg6bg3DJMxmWbFbq4EQ4xU8f",
  "key29": "2x6iUsVPRCgm1DfFoDQD2zGLzDCW8qsPZ9XMwGkEBWyM8zo9iFGEhhtkz79i2qMYSDBdKxmpoj4LbMJJDb4TL66Q",
  "key30": "5819B5g6sm1xzF4wNKQt2GDL1JiP8GJKGDFfjdeGcp7gdp551DSKr53QTxAA42gScyxxM51TL8GpSVGxW4Wjwvsv",
  "key31": "oFoGJq29RNSskQZWHqHyDoRpfwBkPKdNPvDdm1AvHPK9sPdDA19ZmnV1T8tRd7zwPZj7AYcMivCWvAjktKMQXdw",
  "key32": "2ZK1dWbDJoBeDt3xi7DwRL2gP5QogY6jCcMvuH6Ykb8LnFPBdr8PZNzo5gbwCLY4TryMgKL2StdoN83TAkZB4Dns",
  "key33": "EbWnhJ6Xc84uYL1cfPx9pBL616F8ih26w5Ti1o2dioAFTbx82y2EYDwDovsTQrLKknNQV6HaHa5z6j1URJAcEez",
  "key34": "TNGMPbjnoeoHW2BjtKwYVT9YKEtXXkfpm7ff7QSmsjLfWK513ZYrBv3wetUYWZZdHagot8N6hC1GKkvPDsrukce",
  "key35": "h4afvmCAkFKgrwfbB2CjRzFiu5J7tchwQP8gaqSouTZFsdkMQ6yGd3wbWAxLinSZiDkmgX5uq9h6oX4fohiHwxF",
  "key36": "3bTrsGKbu4QA5hTfgoJmaXJkrkx3oDJhKC8SRvVLmAgtErvNNyzfuaWi3FnQsiQyyy78xnPa9JadvoqjgXgnxNAf",
  "key37": "3mmaT4HStxLnEnnabeNaL6XvSbZ11bbEye4v7Bnc1YH3Vu18UEcLLMX9Kwg95HTjuTq2Th8VdXSZAqvs9WEmDHcf",
  "key38": "4v6r3JZPoveJcvjLkJBYyHDhXGTuSLzH8XwH6LHvezR1vW25wjYzWPQHwaAtHmHMyZdCH6C4CZdtPuunSaGzT2Ta",
  "key39": "znFAscoxHsfnKLjC1Xwd6JNn7F8ScRQ4NapMSb4YjnMqqBWcAvca1uF5xUKiPyriCCXeYAhz1rJh82z8vqfvNGq",
  "key40": "2qVnHuc6jczKfpJ8FGzzwCMzrz2W1emtt1T4wVCQ5ZTdmE9pHojSWhbRantnqGtQ6YYp5iZaRA5NHY9AteLM47bx",
  "key41": "27PPramLNYnN6RDm91R2S9c4PYRCEP21iDTCGnuVt83hJceJEo8BuGWHwsbR7CqWknqnqMPSDjqeK3kUnVAuGaKi",
  "key42": "4zu2c8HA8XffAziQqobqdECXcjWHVnbaCx4v5YcA8ZBVupudASCNTGpCNKXgDPAQnFuu8m8EfhNAexKK1eUxt1hu"
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
