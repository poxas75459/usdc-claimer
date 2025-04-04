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
    "5dZFjJZkGyWKDqYmv3JHPJVRojUn2ptEzC21aD7CR6K2cHYCF7cMJUWarbrcp7E5Dc2dK57Gs7sP74A1QnzGcTBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27YtF5UwRwdokddJ8ndJtLsMpRmzbKQQpazm9S8vM3R13CfYHpH4QZY5DuzRVtKxzHGteBjHnwk1DWFux6Zhrqj5",
  "key1": "67gT7qA9BxAV8Zhnvro1CCufjLdZGHTkYwVVq5JZCWey2aJBbyepLA7EbX4y98DzCmEwUZLR58zLNhgb5y5qW36i",
  "key2": "51M7bzaXmFJzCc9cinQymNVDXqZuEcNyoMgwhhgtaX4P7w2FWz1nuZQ93gjJw8naCPm2BjWhNetf9FLhRfFMkP6K",
  "key3": "2QKEmwrbM5DC4JeLLzcKTBxs63YaYTPVkPv68MhPN5G9ojkTHbtzkEdQivpCCChFL6RAyHQ8HCP8471etMxSNfFr",
  "key4": "2Tzntk1Zuqrf1VtvTXA1aWbhckjC38BcVqyyTPo7HzUV74FKFcwUqwRCH9mcaPGWFcdmzZpMozkHGvCD88n7gpKH",
  "key5": "2DQbqujiymy3Z29eUkhn2a7KpirNZZ2RJvnVTzGayGE222pS2xKM6BTDtQ2sJHvUzrKGyc1Pin7jUQLEtzvAZL4D",
  "key6": "628E17zovL877EW3pCJ1nrV9yJqdZGFiTFA9xhZFwRqEEMreTy2Ma57QPc9gB3VRtoaS6Y9QREjAmbzBC8XZHgJR",
  "key7": "3devDYyovv7SYjkhnCTS29RhV98svnSPHSa8xpRgUZ7dYeKwkHnUZ8tVkhrZa31sMYHKDtepfNjoZxvwrAVhWq33",
  "key8": "4hbSqgqHVn4m5rWU2cvZ8iz7JEGTgiU6QiF7D2EhxWCrc4AHknHpaMAxtg4UE21836dQemomJCi8kfMBN1GgCxWX",
  "key9": "2xeoaBf78edoXFHJ2Txxi5CCChTftzD7xDZsUDb9qY7J1rzUUCwbN93GbwWpsCrq9tgFAywqBhjtuzeXbzdgwuYH",
  "key10": "4AcMtGtb9VdBsPFUr5tgfiJHosYsQugdgptMLejGYC6j1kLPLvDUkDnfAHqyE4i8hhEv4ZsMj6mawsiV1x9aAesD",
  "key11": "4iUbDq5xbP8jUSXeEZ5qhhQcR54v7JBs9c6DE7wf3ptEBg8o8jjhJ3eqUj4o5DkL13HZ46XotmLv4yHLaZ1MC5gB",
  "key12": "52tYCyQpmBQ3UAqdbbCJy12LcrjBC3AGhP7EeoWq3q9Vsqf9V7EfTT435v5Xc9igD2V9S57XJN9wStCbfMpw8svx",
  "key13": "61H2bibVwQGAAF3jJ3eAofWLNR1LXWSS2Bq7XmGFTzNHnvm5yVBnzXEcUh3SAiXAGjxeoXCyAXT7YeccfcQ5dFNX",
  "key14": "3oTAUvMLZFEJkbHTG3BQ94u7pK6yAn4VP45MhtgjatNy7zHXZL3jE9G1cu9XV5fK57HWqam86PmuwX91hUjG8axA",
  "key15": "5X4HeFzn9NsXbwm3auQSzLWXszpKTZAw4PCSR9tRuM6BkojZdNswVeQ9C3HhtrTZ7uxb9b2ifkqsuFxqGwzBb45N",
  "key16": "86eBvdseiMK5UJ1yyyKvHvheVT2rUH4ULh9srZdfBQP7DrumfPWyGgeTZoCeTLxrfmevEANUv1nGijtJKyhvpEN",
  "key17": "486EaCw5WZaginFNcoB7hqvpMp7oV7r1DwtC4cKxQbNszNjaZ7famu7VfR83cEkmQnr3u4EUC1D2TJCFpo1iL7yR",
  "key18": "29kw8CJ6cDsHLxoqtyrHPSAJt1nYbCFAyTdFeFz374AipKYNYNY1zNcz68rWcPpTXqtuhawKhA4SQppeqoESkWhQ",
  "key19": "5uUvFgq7ynsKUJghJp2imn9fxQcJy5BSWJDDwY6YD1RkD3xnH1Rr4Xoqw2Bb1obiykdm3cZhpbUCDKgJxwuxVJpX",
  "key20": "ZbYSoxKsPQi4BLFvkgQiBNQRaaA8AHzkErNYXimy8LkBBHegs81qD58FY758tshrTNB6krrqdZeT2PqqyeGUZKV",
  "key21": "xS3v1Gjk6c7MdikAZrt7DXmgarzyzcExARTbwRdU9JkPCaF7YRLMfZBMgxCXzFBxfz6qs31uCA3q5mYz6ocpyjp",
  "key22": "45v54F3rAq38tA2VxzFyQwSxuTTq2R8puqVPb5TuYRYeMcwuBRRGa2P41yMWyYbz99QVcu6nJ8FJMbLcK7rpmUtE",
  "key23": "2GdYaiR4TrpXQdhgBqN4ibqAYNVgNeDn982Mtu8czmgHxcsqJfF36M4tVWuBb5q8AjfUhqRSXz2YjPCUYCrsty3n",
  "key24": "352CYopcEWAc3uBeobSq1FVWB358rrgfngghzAwRnVv6aEMPJCduqV2spQZqJ3kF5apfeVzjGgw6MR1ZTUVbWxYa",
  "key25": "3HDo8JAjmdsK38L2ep3zNqvBdVxa3qJGBvoeXqEHW3wnDLTi6hcCqjGgKE4Y7X687LT1BcuuyPmo4WknqbyMgwmg",
  "key26": "2LM1jsZYmy7t2DKyb64AbHDBT4aLRdeAQrJJDSVeVY3KchPos5M9JrF2KqCDYP1RY52ab8AppZChY9QvU4pLRNZf",
  "key27": "4mu2HSjmwyvcXCAUvUutciTA4HsTShVG9gn1GxhrXMpgvv3PTiLsuLYTnFLPzybPL24RTsnccdxfeMKEsG1BjpRn",
  "key28": "3fPw8Q3q7Y9G7rX35fp5E5saP6XksBRV8yqDjcgPzZcSM1rikLR3crTjv8j93dZtvKgg9ZPTJQhjBdoDefgRfCkh",
  "key29": "BPRnSUg92eAyyukhAGy9tpTjn1cVZfuSSYiyY2qvWPVKBep9jLTzv2jUMm1sTAiXS55xj5n7SxoMv5RMD6HwZCK",
  "key30": "3LA3tC5N9rpQMVCwp3sfpBWXBz36XHK4CHGFvtoXXDRKU6sxB9vMmavf5Q7vDxBHhSQpHdfsuGzeTMjCU5mWPM6v",
  "key31": "5bCrhvUjoTNeDfTMJz7gFwFpAK47uv8scogUHPYzM5e1jX84VoSBiW88NWbiyk41TP1rHJizSCxtARbi8iPtEdSh",
  "key32": "5fjPQeHV4S4K13SwZ7WcFBL9kYMRnMCFDY9sbWDhv91z7fzUn4KdUL2bMrqVZTM7QqNTYiVNgNSpcHvRzSyimS32",
  "key33": "4K8KWwsem5r4zTPEkWkzzcZLQH51wN7TeEnSUkaUXvYGikDshgnuduzSevisVTpxVxg2SEdMXiK9Etj1G5WBFzY6",
  "key34": "NfJAZqKtwKzMwSycmX3hpwRdwaVYpmpYAaYgedxXuRwg4ZERbLEd3uonUbfEp6Wn6kWnEeHJw4k3KTcZWDymwjk",
  "key35": "2e9acB21yS2ufZ3potEPu5f5kEX5c2YVvKeqBkBhbea6YqJ8CshKzw3nRuj8KobwmogYLb9DrcrCkGKDtM2nmJWN",
  "key36": "5iDC6HuZNMYTGrp1HB26fe6udZU4P3jNbnPoV9ZGfPZNAfucusH9aumnkUQFPQ1jrUHxHvMh545JDtAq7TJ6urUG",
  "key37": "64GsfHpbvN3ijnQpWrmunP38MgCzGMysgE4AXYLooSUSZyRozPa7PdnySF2ewStxe3F2WXQDXmoLXU4gFNbfPkKU",
  "key38": "43qSdEdwrpGUzVSG4tw3ZysWtN16FbeiU88sprzpiSPH61hKb7YGazSX5WgJAp9rdgqzRrEcQpkTaDN4D7TEid6F",
  "key39": "38vg5FM3tPK1bkX8pWoroiGoDCvSXqZxcigvkggybiujd111YzRAgGbxYn158fZJbPnR8QMCZN7YNGCRCmBesCLn",
  "key40": "3XahhkhLra4U88Ya3xhtyw2ResKu21sSJTcmSxku1vuaeHaJ8DKJwgmQQwQ3ErcSGsoDnh2KKow47CAuAcyP1SMv",
  "key41": "2Wq7nYXb1g9wUw5LG4Zi2TBKR9DDtBAp5gsRzcjqbTg4U4XA1wszJrUYsB9nFDUq3iy6u4SbLYAoptaV7EDFJBfp",
  "key42": "36NX2umYKJNW7MhCumVQmpk9VLff6ku671kmRb2KMFRTR7f8WRhtPHgL8y5iGG3QVk6XTg42uguKVVFtTHuUjyNF",
  "key43": "42LeN3DtR1uj3H2EYA6FbvRD3YMqwdfH5VFA1hQpGXqfPCWCPDG4Nj8A1FEBTYoUFHm3ZPACqQDxAL8Div9jnYQT",
  "key44": "2zLLfcCrEvEAc9X25oxMzZ2kV6UW362mXy7NXkb7N78maQ4JnTxg1T157dLLvE9cJ2B2xqm2AKYKFnhH5RqLJDw6"
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
