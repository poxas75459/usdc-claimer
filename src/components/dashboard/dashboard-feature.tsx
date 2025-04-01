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
    "kJ1YGLF5dWMy7B9pVeyCA284veuyfNpSt7SHvHJYMCsaNjdnakidRSu8XBqnfPhrJUktMGbLrkBcGYhrXF5EXG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328GxrKeiwE71iSMN64LhSvp6q2Rkx7uGkPsw1DpusRqNAciuKgjYEbMob1iWKPSq9MotVcLuxSQCwYBd9gz1sEN",
  "key1": "3HY8uUxoxHPt1KskX6VFfctxtkxPpHfk5Shg4JELdN3WMg6t6xPkxtamCi41WFHbiKMg65BbRhC2iHtdqfY852bt",
  "key2": "2abQhz4rrMSF6WA725yYKMWcVktY6Zc2DSNs4c7UrfDcUQVWkN4Ru91rDaHY6mxNEdMz4MbGRFM4iJGmnWkHJpFo",
  "key3": "46qNqrZDasVk2fJVSuuxWsi3FN3Qz1ccu8pRmTthZAGG4XW92JJwGxT4doabdT9rD4CKTbRY6cM6Jy6Pdptwc7tc",
  "key4": "3FMRzYUPwbtmePFqkLcDWhzDJSv1tqcVdKK6SEizTpbMbGC9oo6Ktk61AtHJK7TmYcBrJxdUCV14hqHsTs5B3yF9",
  "key5": "5D8n3C4An7MZb2Q2ppg37tnW878Va1mbgtrpqUY1VWKPJG6KjsLsQQXp5MHqGqUFCAtKhbr71UwY5TERCoyFMGJA",
  "key6": "2a4TytBea9BYdMjZhrrz9DfYQ8YL4Xbt5MQzqUrWcMZVR4XsTE7ZcJXi2bYcnCHeu1B8Ysrjne7UZLcqwPJdXEX5",
  "key7": "2XWVGurDU92suhPWeabYzVqzY9QuddWyk1SQACTeVaR7ELuMHo6efPAWCaxtVdpQoQXRfCBc1Gp33Qt1WhNbaS3i",
  "key8": "p1YWeYG2HoFva6HnGTByJvonLeLU2j2HASYsZp8CxKLhiUomWknciv3U1pFno3eHLK8mxFt7rNi2NR5V3iEriXQ",
  "key9": "4Hzb8TcM1dQawgqiDXWyMGLBnueRAwsufqUN4FsQkcpPkw9FVm6HtN2aMTJgbBBe4E4aZ2uqk5P9XNqaqudm7Ytn",
  "key10": "XhAxwnm7eiUPQU4sgZ3c2uRztEGLbNFuFBJwA6ckikf7pMarn3AEprfhGh2MrTmMPZJzL7JDm9eKh81f24ENLbE",
  "key11": "5hLvP9pymLBG3apKx62t6NFTAH4C2MQ4uRzjXksdQSzmoc9atnSXhiKhandGYS8xkgvmdGuN615ReAe5Jge7LQzN",
  "key12": "q2mPmEmZbgMTfUk4ZaMeCdG6tAuvDG8afdzuzQLPVxYQpZTABYDRsLe6NqZkK1JjNumg5PBwDDUCwu9aP6W8R24",
  "key13": "32E3xBe73DiGJQLPMynKYdntcrjdTQ7vwESDT8HE1odkCAdw5DXCgHAaqbFrat3g2jG2pnC2wFrhekxwy9qUmeLs",
  "key14": "2rYSpy5wCLo51DXhVJEDYYYhXf755jS1SDcW4SeC6yGNHkjWKxnKCnuRw4XvapWMgDj9Wc1gc7HG7LHYxbSH9Hbp",
  "key15": "3Y8tJVijjr9qBFMeAFQxWEZCDASUe2ii2xcQA5hebKP6CUjFZC3gKvpJCu54WTEAKjC9SjsutRsEJt8z1FQUj6EV",
  "key16": "2XSGo9aQjDUNjZzV6ubwvpuCi7hn2RTdfASAvXnb6nKrG14KeBTcSVPGxKP1RyRPVcUxwtJVrqcoiv87VJJtsU5",
  "key17": "5cnjkWGZef5gVD2s4XpwZ6mNxigy9mwXdBNDKWHPKZbSDUgU7eywnzhPLMZD4m9qmtqvwgUQySNsWisf2JZQsWN3",
  "key18": "2UryV4HFUHRZBhoAfrhezF9R6P7vs5RjXofeTRefeYPuMyVNoBMcaLErVsoNkjPG41haic3Sjst3UxcCw41XVkSY",
  "key19": "2iPtFrG5KzYRjyZQk2Y72P7y4ZVA5Xmvi6aTTEmJX18JgLeL7jJTniZa1QW2KsWfmpeGY6y2VSENwqu7fKj9tptv",
  "key20": "58gAj8dvQ7ZSNX3yo26cSptjJrSGjvsAWCLJ6EAGyrVpwfUF4X6D3s1vGifXrhEhgKLHpzUWyUxWPk76gknchAsp",
  "key21": "2x3Bn1yErGhGyVJyjHZU6op9EersJr9bjaJaSXbA8MtQ9JdUVpWt4L4hV6wYUbWpxUuV75218JLXDgUb6gKZczeP",
  "key22": "4ivz2vNuP4JFLcDDTxxNugceHX1de4iNNvS5QG8Z7jjH54zjSHevi41ZvjLfr8SSgnNTHWpALpMHrACb9mr5QQvA",
  "key23": "3hku4MQV4eMmebhpW5UcyjPxsAoxVrfkcV1JRR51CdgaqGhRvPvuCbGM5n5EwLXL7v957aRjjhPqX1Z8ZHY5eLVS",
  "key24": "4ggzZpA2QMLCArdn5z4tB6DPMhuv1buu5RA38kQyioCZmHLr9Zs9WauBgAg3k5qyPyLZJzQsDcFKzFJsAc6gxBTN",
  "key25": "Dgnk9pazRn86zXJFrkyEaBt3fcyKfKthgcXdbKuoCiQLKxhjjrm3NeBTMNaEL9SXFWSawVp3ykNnnNH5j7rSC1h",
  "key26": "4iKeeiG1ZSgHkimocAa6zrYSvG1ZMnBm4gEYnbWGftmrSqrCQu8jtvmUA4JeUaYeEFVtEaRrowPtSgyhbHqLdKDJ",
  "key27": "4oRom1DjaQ33en4QjsNJCTUrqc9NdL9zMTXAc2tJwiPyWwCTbTHtdhfYsKepgnLH4Nw1XMcyWD8nAWCzHUucSoE8",
  "key28": "4Mq2BHQ9LsMPCF33KmmzvfNR1V6TCnmz25P1YTomzvrYQCJgwpaBBaUSZD1Hf5RNC8hgGJkMWXGX8xZrkTbcqokK",
  "key29": "3547vtQJDPR5Xs9qmnDFUadM4fqvL949yZeeMtMbybGky5ZZAc9GHmDNMUt4YStBqz5EgbtxmimxxNGTXKuUEaJk",
  "key30": "3TqVCuVpvWBToUqbQm9WcEhf6riyH7rdNo3Zwt54upBD8Gzp1cXiYBsJL1EJtrggGCkjZFLJywcR99wWKeBhVSNR",
  "key31": "5tCFvoRadjjikWRACbo7dCHJRMrD4JiVBF6FiDZGnX16FWRfdh2QSXdDRTL3zmKnbygXf8JjhWnVYSn9dpa8ER4e",
  "key32": "4WckrQ88Q4TAwFGD35CjVE22M5CvEbEqRVVPyks8ikykMpg3JoCJxHDYnTRutZTKddJejaExLr5dDrxgpnFEk6JR",
  "key33": "28AwJGVsozgz3yBqqX23VSZ2FUZQt12L4mHqeZ1kxCrjd5n9Dg7mDaRp1LsK78srXKuCXaDC2gCCTqWt4d6dCrHw",
  "key34": "3jowXvpY28pZs9ucU7eY5bzH1wk8afr9rR8iPPRisTVaTt29uRLnH3UDA89sk3v6VRSP4nrPsmTj48ioEbbnQG1H",
  "key35": "4dUSGueZ5m1pbGdJYLWhNSsqKv2GVhZ933VxvDQeqQKnaeTtf2zPZ6L1Sa4jF5XY8KP5TK8HNdfCm9GDnE2VGpuY",
  "key36": "3mLjERSi1JSbGjkdTvk5VCWwhAixBWQMsLxPaE9m8QNgYNHy8LD8jbcVhYFrxccM3zzSh86s2LfNKmM52AoNzpUq",
  "key37": "5AQLG2VQaVB4rFzacZNcnYAfs5oeAqQTfC9N93JFPfuHPHWAdSvyPyaM361j6z4BN1vH3uRp7rg4XpfLsgBNbegK",
  "key38": "DpeNqGLP4QoWqAJEmWwTHDabYyptULoJZ3DNJeATkVwMeYEQgW7maeV3YqMDtDwPVsv7fGyoMtYg6s3sGz3KBnT",
  "key39": "JvWQpmwKg28YU8jUT31Raqmr2xhcELrsADzKgrYDqiYWRgPbzpBeZRtefvEUQ2JNQxES1W6MbutEo4aEZXHhnWL",
  "key40": "peuJgno1vDJ92y3LWioJAQAjoLUQke8X6ZF5v3yWAqLwAEuqZFJPDpH8vuBGPQ8M1mMti2eUQ8wyJ5p58wRPywc",
  "key41": "5KyiicVTpwyhxnr9qnJcREbXYTWWSxrJkbJQomPPCavvHheg6kUuwsNRs4FAaupFiwA5Beyj37JCMQx62fmhNJxk",
  "key42": "5ZKskFkNYmx14JiNmruUhPbWqTUSPitWg6bvFSqZhxzWoH9QzP2G9Tfh4Jc2BExgDHC34XExxcuzuTgqXNVu5YDK",
  "key43": "5jjPnEM3ndoArxZhXJVJoa89bSG5GgnhdqxHkY5cQsjKY8jPmj7mTYUTX7ggFoHWY7G2fsZHLdDgu7uYk5MHDtKi",
  "key44": "121B3yrBN1QLyhbBiFL1VhE6fpzAHJQP4sT8nxZW7qbbYNX5D7Fje6w6TKM1qmQvWaBHrSdfphm9iTMGp9Nzzow8",
  "key45": "jpHM9UcZcXmBULd41AWReisqdfdQpftGWdAGWs23TvL1Qa2mxnDCjMXcZyqsQiDTg7FmSi6foSuYroyVQBH2U4q"
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
