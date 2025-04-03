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
    "52DcYaZ5QQyit1coa2DoeU8giKXihNqxB1mupfAwVHSx1BcXjeZgetQv2E3xq4rn5N2JyMWYLAtUZTcAxncGHTa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35TAEiQresCbGyEyj4bueMxr1D66d4YUz954f7aAxCmwsimdw7MFvotSAeF51e2EqLKg7X4xJgHN1RT5ZGuhVbB9",
  "key1": "UnhhJ36a4YzCBmA3QDX5BMbeDbjekgERvR3Jie93g3Kwf9e9zhDQRta1hL6uCzouHXKHdimBcHdL7VHi8vLxSVB",
  "key2": "28H4nAoQFRFZp3QDUqJABpUXnBFnmSaszSwRFL4cU1X2UQznwyY7trzQZJj3dgVNrk1JYzWxPZgcEtTJzArTWcWR",
  "key3": "4TuwSMQEYQjQighnzCReYia4WTeMuHgMoNVRU2eE4akS6J6sgbzJzmrQmSMhsx4WxjrsUgcozp1R9L1y6a9H6sx8",
  "key4": "3kaGS3BD5xZMdMNie87BJywmGz6eUNDtTyH68aQHzUfnnwiJ2paM1uUTRxf8dLWxBJhGQzxkhgTm4ftjDwP1NZ7u",
  "key5": "5wLf1ZxNqq9L8kKoYBrqLDNJrmiWi8mthHvRDfwq7B4Y2LnVEJQsDRFr6jWHRUHD7TbEXNuro5LukqUisBaWeFzX",
  "key6": "2rZRGzvtvyxer7VVMBJFCau5hyQ3wxcVD9aft9zRopfHMsnKA7NzQjSYGeP3RuoSNTMk74sxao5B8f33HEw6qKUo",
  "key7": "3KaKQHqQw3me4KgLs55VjJzSARQqJJ7cMwKdebZUadz9ATbhG2fP18NpKXZjmfoSzPS5KaySNpexLbbCvvFhz4C3",
  "key8": "2MRLPoHhQWXnNMDUmuteAVqJwyiakJ3iyEDoDuyo6Wx1c1p6155divF7cbKDePaxdbhVM3ef3HntVm5sgZdfoNgM",
  "key9": "2JQ27pJAMbJn3EuzXZo7QG6q4aLAJ1kyQgiYzbUJSLkpn7g4WHPLcSszp2QEyN4W1tH2fPJyqjjGRP3X8KQkmESm",
  "key10": "5RTrfd8WPMsFiFfC4V4CPpF9vUrm3vQfbv38wDmNyu3iAjgSdg9hfk3sYvGPShugjDEihb53tR7We3b9tREiWZg",
  "key11": "jUxKTfs12NL3166zTaU9zMoJfWcC9A8GnLGZ9vpvtEhpsotDx7nDjgLQR6Kuri3EEgCe1yx7PxNAPZ1GxAC2uEp",
  "key12": "iwhbPC3S4F52MPvdZ5jvKLrNiUgijRJJuRc2NWXEzJPxiaDBswwcJNr7HFLrLz9E3fB3YtEZ5GDXoLTeepxwJdc",
  "key13": "5wNRqq3hAgiVXZHdGEYm3CAGHRf9tbkxiMFBNdtzQRpYPXWt5AbCnXvgmep1HakudNPKBBBXwMdSkCn1E9wJoL3F",
  "key14": "4LghhU3cRShecDf9ckgLtRjYncdQDorLSzYJAjsvzeBeuTU9gHqiU82BpWiL5nmzCaC21o8Sy2ToGeTE1RaA3dbu",
  "key15": "3ebwGXfdyA4cvCCf83622PAZSNfPxSAQ7pFqAcP4Ht3F1ZFmYLShtSwFzCAonZMB8mUnz3K3pBphx8RTn4ZmVnDc",
  "key16": "3QGyaZoQXSoAZ6iUcJ9BL1bscvWYxHh1B6YctpXDbkWvtWmzYp366n4NnBMTRtr1DoUoZTqfAKVScB3XQahYdBUp",
  "key17": "3dk14PDYmtKydvtJYaToi4cGFbKa4N9LZ28hgHGtYkWPe3MiRGjDZbBBmDzNsLx5zWLfx2Me4TzU8Zw5ueRCTP2p",
  "key18": "3GpC49Jgt4pYq8eNzU9smpFp4FR9Tpy3EfLdRwivK8732vghfvBxFqkLFNMh8m2cXHLzu4FpED93YN1TS8oL6FjX",
  "key19": "57mNWXhwedN4h3xb2Z4CLu2ybQrxoEjziyhFkr8k5YgG4NDDRnusq8aanNdwkgcKqBzm4LNbqfucWDaDDsrjfgxu",
  "key20": "5L2jiW76t1WxKTAVvqpTiPVzc1uFuYSTH7jc79dRuEfjHZU5DyLdj5zaKRm5LLMrYoDjKwXMR1ytb87yn5ERQbAB",
  "key21": "4Fr6jhk7PEBykXq6D5SCfBDeaU9oEQR5mTvWvAAcCYvxmN6AxMKcAk8b3dsNN46Lu4Sp9AK7cYFu1kPP6pfiLLT7",
  "key22": "5ywAAozpWF6KzguBVZzUkfYHFsG8D4wzeP7Z43pUpT4AiRubD9P1z4cBZEnW17YJnp7abq3FhK3gs4dgGPLq7sbT",
  "key23": "4j4PmdcV4uiRWAxCTHNvWn5Ac28c3m7B6tCGibCkVBVH65En3iNWyrEwruGyBmmcxoYTJkShD7PwRE3Sb8a6sbSo",
  "key24": "2x7uxwxfaCQjssKgr3irVRRDciB6B1i2jiBSn9e4QP8JfvsEFKSphjp56FbRSLD8RDvC7B3bUbxmt1wj6aBU6ZGz",
  "key25": "5bVLGkpc6Gb5Z9YhdaqFGBMDEYbfZy89p15ePRA17JoRi6a23uKLx9Y9yd1Avervi52bSkBWqFMhcCY9WSKytsfk",
  "key26": "2qx7NLf3jy6WpZFzxKQ7FtbGkZVN6h7u6fb2CsSQbkVL2eW2aj8Ms7HnKTgcfw5i9tD6RcamtQY3SfyedNyXaHH6",
  "key27": "5DEXajrNpQbBPPCcMqqJJbQiD5y7AEtrYYYudZBs3XjSKL1vHvhMtjRLkhLDoVhm4MDzJoHo8RmuJsEKovMXTmRY",
  "key28": "3Xou3zHd2QzzLUJ136xZDcs4fva8oRe4fTiSR4cEgNTRkHodKn5knJyxLTZoc8wKYNgZ1fopsQfq8UyzntPEG5tG",
  "key29": "3T2GVaGZRmyUfELcU1yzJGMnRrXrSaCdsm8Bk9YJT4DHHwS3mXETU4rGEJvf3ip1TRvyernFwTEc9tPXVkcvbmHM",
  "key30": "ZvQDsuRJK5ZQVrEZhuezE7XitvZsepCPeEe5qTJLywnKE11h2EsBqUGgcykXceuWFKA59347j9LUBXyP78BVGTE",
  "key31": "5CyDMeTTZDSyy5tTEYSeEkp4ikaigjceofYL6cjwFh4EcmQZHGhLdG7SxpkbErveqVUt9nCo6S5fokyq6vEB8S7N",
  "key32": "5YK4MQFN7CuYjG3qnZxZ3ytLoMwoApi56BZ79iR59tPD45GSjwEcZzfh2fUwxyya8vVACvLt9XxkZbJbQfYHybzD",
  "key33": "63gcrxCUhRhB9G6Ar6gbwp6GmoWsWp5mkdeBUv8eGg2tcLWrdpQGbmHmSaz1cXyqco8A4dPXats89x9p6GRZ8Bwg",
  "key34": "4pbyWijLQzapSdV6C7gfgHGuxExjFySTUHF7g5LnrwoHeZ9pN5wC2ciS4fL7pyewEUUgCexYVkPxLiNjNuibiuAy",
  "key35": "5bH6QKEg4PusagPGbzLrRH3iqHyqpejb9PmmV2VuoMM5ayZDH7AP1PsKAN7TP3qwwtUsWPxxE4TNCZyL24Ljke87",
  "key36": "5SUAx5g68cgeCfpFzdj5eg2tHKT6PQM5jwWP1QwvcZgM5edk73K1WiDsRsedzmQVs69RyRXtpuj2wY519jDHRL6o",
  "key37": "4nZGxrJxR3Jgs9mt6jCNyXfL5pxpXw919qgm4fLUhXctbYAxPEPbMXBMDie3spkqr1Ld1sdsED1HNp2RRE7FxrN8",
  "key38": "TMW3bNNGSgjAzfAWZ5ubo3UihWKvxEhsLGYZJemvKi84yEwrfqTqPWNhVRP2pLzFb1MH128FTQCwHXfGLKPtuUn",
  "key39": "3q5JKnbNubJC9rc96mNmHje26sDBFimS1Wku8aBxKVituoCzQQmp3graEfYPg7sd5DMF1F34psnsSXMdf8R5Xhwi",
  "key40": "4yFBWJsFMpEXkUmYWjVYkAnMVdrqWWSns12s3M4tRxJGTcVYwdihBp6DYhPGqfcJ2j9r9K3yWB6VPAPsvzJVU4S7",
  "key41": "EgR8n1xQ1wvRLgnRLu6Qxp6u1znLrTkFzC1grdVMxZcciEANM1sUuADQHfEH4SoxhsbQHf3K1ZrX1DZePaB9Lhw",
  "key42": "4XRmQSi5fdRt53E6XDHxgFeWTRMXRkA51fZkhFKE6H38rWdAoAbxeW3x4Tou1YjjMNLDNwRAveDJjV1R1uinuQpX",
  "key43": "4ZTzDHTg5XunctoGQeBPCKLsLT6aDzJNszscrusz6KQmbg5Ryw2BJnV9ceA9HDKDKPrfMYH6JV6NyjT9MTpsWgsW",
  "key44": "3KKJpewoNQvAzUjHpLuN1pLdWAquFkP3cNDikYrmEt434gTtAM1nsQvtUbrfNZNGkQhFRJWoJCS1prAZJzF3NNHX"
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
