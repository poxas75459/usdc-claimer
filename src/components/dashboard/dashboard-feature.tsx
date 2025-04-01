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
    "2nZQFUJjNsyTB51iXA6V4zPFCx2ZJHfHXqMjbJifpBiaCNYAfZF5cHfGULp1kPucRs4JDteyHBzN54DRrTH2vwWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZcpbUYonDMF6Yy6r9qnJ7hmTesykd9csXjF1oj9prAerg557osJV624UcC8NmYT4bmGhJAfzE19KV18Nv1MX9ZZ",
  "key1": "4jJFbW12wWJYD8cTjQz6Ha1SwzvUrvx2uYpYx628ySgUbtmDK1f6ncxndQ9r4L5uJdHSsoPiRYxuhq6XApnCGBML",
  "key2": "3SD2ra5LoJVfDRSA2duf9T7LVKxjUmEiHKax9hjysxQdspodTF8FcnVHMoMaUc2ZTD8oK33aarpaH7di8MrT3TBQ",
  "key3": "5XhXkShfi8ZupHKCfWbf63esxh54DPDzKJDPrhUnTsKkaUwELSjnKFP28dYiA1yB9N1aLpUBycKyW26Tenv6TET2",
  "key4": "62wK7gkUMVV6F3CAHYYxLfJcWLA9Tck9k1NYXi2fv1zmSio74uiKGJmgR3Lavt2W9LMRwxv874mxHJ8DFYH3NCKj",
  "key5": "NaihkuitKuVJmDbKArftNJvR7XhB8dMw8jX8oAfd9dYekBUDFfS9xiLMWVn7vJta3SbMFvL3JmWWHGcwogfGYBe",
  "key6": "2bGkK9sjJHbgnSdLR64AKKAYxuZhvXG6zDFg6ghNjwCrS2YBZ7FZkdME3PYbyJnr4vsJBMBZTYesiNQcbk9bp8hj",
  "key7": "4gAhT1MnjNDvKSfe8dvr88V1KFwJXG34J1XBfGBeYMfnQfTNJcERBKfzk8VibQwzXBCbUKkc7cdkBffDNDtcZz5F",
  "key8": "2bhaY4iGfhj8cxDnXbJRvjbA8ZBDkkx7LJp7mV9jugN5vHt5SY55Xuf21WKrPU8XJYsLcSnN8yNghGW22BHfWwX4",
  "key9": "58v9TtvpCqieieJhrXbWdcYNStiJxW8vQcQsXQ7LKWtrM2Pj6iF81Dn2aNBWM5L4BrHZbgpNfhY9nRWAFLs3HQFZ",
  "key10": "4dTNqYnKG3ZccZTjRDGkTLnFEs8XFt8ogTLaD1u6EsSBYSi2NYQMaiFJqhhM43phUurP6pAJosJnxy39bKQdUXoL",
  "key11": "44tuWx6qjPqrJZcnepRw4ZZ4kdNMSkxFcwhFu3NKMU9cqQL5xfisHYaTgaKNDD8jsM6mk2eNGH5zZ1Kb4EZk8GN5",
  "key12": "218LL7eRfosMbrojJZ8xEvmfDFVQFRHnGt3zZUfupevHmDZoeNjtLHDqjfjzwuEjBQRFhWG8qZ4LWpDgP7Dy74vj",
  "key13": "4dwzUG1ie6TzfyWSB2izNpp2T8ihn7XSQVwKFkSqz4LrgvHemdvpYA7HCK5LHxuoaSDZ42WQEQLGNAW82eQPYLxX",
  "key14": "212Kpyy3SsVNib5mqCTgnFc27rimiuEWMBjixsH3dCjBEtJGYvuzr2mx8shHxY8vqeQQK6msudWgXQVMUjmZAiqX",
  "key15": "HLa8W3YEi4Gq4TvJE7wRyiRAcPupp3fRqtr51oGAJAEhc1a1w9xGk45QsXhbSedZuwNSB7RweMoXnw8aBZoeWKa",
  "key16": "3YhLHrtNMmAmg9cbFMhhvN9SBGbEvtEwH5T81gcBhCtqWbxCpAnbeUX4WCpZcjCwn7a65xLVRQ9BkWJTGJv16E5r",
  "key17": "3ABUdWaLdS5spdgwUotwDWvQyWtAeALsvcPLRcLExeRkPTBD8vWmtBqGhsahmxv76ndPUxGa2BxfLV1upmcs69qL",
  "key18": "32adiBgejRsLDvhpkMMx8pkNkc3KmSZ3P98ZEhhUmoLTqURJUuBbuN87EtYKCSq3ZdqxnSewGPizvY2PZk45Qg1z",
  "key19": "5FnpqmRicNtzfMRpKgFkWtVBm1ihTxJXuZk5C2u5LMGcR2iXxuoc9c2WyVsHFNyGuz6vs5iUbkqqVwCpVY6z58wi",
  "key20": "4xsmL7mqXM9NLu4Sks1yuoig76CVtooW9ZVuraVn3VsVztEHDwyDM8jY9SJs9h6U3bBNwj944j285xireupceViG",
  "key21": "5JHTQs3tummDnuAP9FtKVH9r5vG3bjt2Aem7pY2iL5H4rpDxLLV4pkYuiJhkcPjCEAFjXW2nsMJwUQtpAPLMzSNb",
  "key22": "5SJUTZr3zgr2F82PnPWdoJahFA6mBTBfPvuuHr7kGPdN7Xo6pnsJ1HCgR2scSw1Zeu8PM4uuUeM6ZLmZUHPf5tVG",
  "key23": "39bqJiunR8sf4Ejcy3dF1geFhCic8CfnPmgNZYquxXJXJk97raFHKx5kD9xto9fkwmYV57erNyuSn3BL4AQvfrF7",
  "key24": "2sku8ah7GMmxcoFEcv4h1tKWhgwbV4k7AhPa7zSRjR93m8iTcn7KNWSYtuskfDmBbEnUie185zvcNS1rAb25R4qt",
  "key25": "3LCESMwXewUUbrjfWvPBxoKqztDvz2krvYn6f8GsoSnTNBaHNgzD9ULswhgSPtep7t2nUDgztsgHGNiWH7XXMmkQ",
  "key26": "5RtpryogagJEqRLUwipej5DDesE2S2KQTv2Du3ECPHMpXgiorkuVhtCN5viQnddxisUhuxgNE3ec2SkZwQKajfjw",
  "key27": "4ohN4eCBtqdfLtbv6qnGrRRKGtsyAB8wdrnUap3AhhK3prkwjqTvWiFigGS7UCgixLvFti2rapzipY191ZwSfFAR",
  "key28": "3mJX3RTryrx756Uci3AzgRjyYRbFhmwZzjSJsiTVLSUZJYL4UW59Ru44b9XvNTsNUUYG3A7cahHPAC3TyeEd1TAw",
  "key29": "3L1w2jfSaG24JSJA4TPCfHr5iRSsGh9QSAxKoL9Vw9k13T6DLNrUEMURfLqPbtTc8oGRLsEzPkLrnNNyuQXiMpyK",
  "key30": "41bP42gtgtYsZJ8p2iv3gw4DhS7C3PmQgsB6oJmVbeNqcxPpzSCuymWpmbA7DmCLA5GdJR55EMfJXqxbLq4pmmHM",
  "key31": "5qF5UPGjAeY4NqyR2xycKtuR2vqZacKKicr5Pr5RXKwBPys3ZNxSwt78rGAuAkQzPbK6emdkeEuEGXoBh7rnxAM6",
  "key32": "21vGUKXSSjaDZ5ETukbqDRGK1CsVGfTSaUbaeYg2Z4VGGXAKGhfeX41A7ebLDtAKAuo8DmMdyEdcSup6R2J6tiHD",
  "key33": "3vLTBZJtspuFHFWCddqCkKh22XcFRwyTBc18pMsSpZi5kd1X24FhEDqPJExxvg7B4tuijJfmgKBUc6NNkmNDUqK",
  "key34": "czN7o2bWFWUg6LmqKi7eDfV2zpaofABfbDMozpyzyTGAMV6V1CdjZnV1SkBAz4d25gzs8x425bEwrcYg5FecR2G",
  "key35": "2U2WRE2EKieEH5abz3PJSVafUMrDY4kXrfkWqohtg7xxpdcT4MaTA3jqp7WTdvmndGwv27x6E9CW7zmhFzmwCjW5",
  "key36": "3gEX9ghy2nowiW7gw1hgFzYBPLnuYochjrf7RuX7gcFkEjfKKWXwPNoroGBjUyHGM58UkeKjRqmKefXVhirC1gtt",
  "key37": "2FxaJYJQZ7oorf6a6YX8pCUjZtrLA96aVroDMmQVkcpDRjgDxVWrBg6PYzU65qHz913aMEAbZy7bW9bcB6tQf58a",
  "key38": "3ZLkqkRJ5CaaVmC6xV8xJs2JqtpgXh92qUgFqPvZVbcdvT575CmoNQBiAJXWjzJDzqZfYxfm2DXCmJAHwsHwDEWE",
  "key39": "2ynRUC9DV1wpjaTFcskSAeSDL5tU4rx1ftog8Gy5nh2WvqAnPQUre6qWdpg8m2gnVrcNMuESpRAs2dtMQsMbhKPQ",
  "key40": "2iJ446WNUXqb4Ex22kQgCxp1owTgye1AfZtEP4yYvk28ygTjeiArmSgJWQmq72jgQ7wYQv3DrUs9A7hL3srdB8fX",
  "key41": "3CkAavKcJWnByUrr1vuXnUvJJhB4RMmDA2UVdGq28BFobrcSMK7ScQuTi1L8pSyoRpV3jG1CXghcWKrbdG1wKHcA",
  "key42": "2kwNgcMfaMn83tztsTf5x1UiyUckNX37Mi5k3yMEPp1aw8wAtbwhA38XQDouaKRf3w9dFv4qvXAiZEzrEwdjmXjW",
  "key43": "X2cJDRndRL57Nm1aBes4qy7UTEdzaTkkgJtMpZH4oW7HQdsKQSL5YJTuyT2DQZaNWaCwb3KHRs72qmuAX1aiuEA",
  "key44": "FJKBKtNjkyzavRuXkutFoMZURzNXiCrxpCkuVxNotMiDPLM1773bhZ4xBB1eSYGV4UDudAgmYNyG3MCxrwFfod3"
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
