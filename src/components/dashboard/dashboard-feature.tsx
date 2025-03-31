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
    "3WfBLPk23hd9n6FVBT2aCD7HpzJBHWHG3V8TTVNJn928DHJcGcWVsTBA53qTsAPLHPgAucUHPucsZhyBTsg1vPp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VPuBet4oo5Wsb3yrZ9FPJYP45GtYYmR6MLM9GKFToWZxAGEffep4fsb3dL3HayeawpnBjLKDkYrEmQYqHjLcCr5",
  "key1": "CDCGuoHwvRv2Tm5qkxfu3fuNqJwV7nhxSEmx8JKfNMhMEedPApmWpchBKV49KQ6e8HGBarB7fTTnEYE3kiyPhTG",
  "key2": "4FUsRJjsM4Umq7bsQSsHE546S7Ddogq14gaRkAGSJqyTMnbP2GgSQX5US8HWReLDJr2QQ2BzuxnV3GyDdJu7CLBx",
  "key3": "517bvHgwBBx26VHeDSmhf2YTkQPw9t9zNZgunGXYUBhRB68FYbMLfwuAn3PdFUU4XPCjWv79uc5XiAQ3KXVaWfRb",
  "key4": "3nKJwFmQCnq1o8uUnxYYSkrXknnXf2xLDVqCWGQBqDVntWrk2DF7CbMLmAgZ4rNt2EFjiXeJ5iMGwxXUVTwQRB8f",
  "key5": "4Eib8UCTkotRaw9pMDveVuWeqcfuo5b8p1h3tPvhr1cMCPPAFgsSg8ExjUGXW98SNWiWLhJQFEESZUeWVnSZ2Rvm",
  "key6": "5BvKwU7dUV8MJBvuqjkLVxpQWkQeztJs1AceSdiGMULQywTDYVfSq31z9yGf74MrysZx5DULaaNXJada6ffW1998",
  "key7": "2xo48j8iHKbrWcPgiAWMyzQDKKzopVGbVggcvZ4oZd9F7kLk2hMqvq48iWTqK4hYq7hPRmyzc2vjZNzw8S7Cj1cS",
  "key8": "5XchEv7gPaUw8mjmxm1ucuXufEZ5poGhxNC7gGNiAXYU2cYDgoseraVzaDFu2TtZpFTi571D9ZnFMY8vmN3nzXsY",
  "key9": "2c7TLLoUSs8tRbczffmxeVbDvSfbGAu1GBjiGNQUeyMwGPtAhP8VUsF6URARLe1BMWFoX987gh4LjnX9t1iAEmnT",
  "key10": "4H5GRZrDaDR4P2yzjctTD5QgXbTFp94G3BKGqGP7HL9NkviEYsFkuh7yaMjevpPZFRgPanphUSNyzwAfoC6Jyh2t",
  "key11": "2mFvwdHUiycfrZAyWM8s3a3fU1ejUir6HpAN4cfFtr2GxCQ66axRzLNxiB4U8xNgPWWEYaoMsU3tsjoUyXm3gBGf",
  "key12": "2T3u53ZAB6NAhWgDiRQ7CsWTMWhgeJSjgfVPRQutQqfJ9SnukodGbUYoKYti39hMpcccSaFgtqpWmMLRKYRSrx8P",
  "key13": "2jignhFHCvsJMuqKVH1UytihzpEDG6BkSJdDUstbL2QAbZRm581rFFvNXTuC7AL8u7HsAtK5y8vrvAyH1ZRmbBqm",
  "key14": "2yXrT28W2h97ZkbLRFbPQTc3DarjoQDtnLyUXyPXwbuk8b1ETrWuCpYUYdFi7FJJrYkLUzX9fwJL9iYQfxasHiG5",
  "key15": "4EDmfRsf5fJM3uCpVSo2nQhEdx6k1oLwzM9iFQa621Jgqw52FX6xGyJ5m4Jjk8tiQ7gyFCdf7E398Hqzg1M9oMKa",
  "key16": "4zZZhYE3QRgGsHzCm5nQUFeQe8PxWiyNDz5uXmup1FpJnAAecPWF4gZkq5mFLdBdxQyh6sffh7Jh8v74Cr9bM6Jr",
  "key17": "31Siqn2Me3uTEgAc9RqsEXWg2NScJ5is5tCEuYDSQDSMHkXQ7WRTzpm7V4oi7LH7zeRDpdErf2ZEUryVpkDfrX2",
  "key18": "2VLv3BV7maxPcY2zQW53XiYnhk1pwFmUn81TdMmmuvv2hhbWJhVMRtvC9xiLZ47AgishwAuaFwKhyCKjxHdQTDMr",
  "key19": "36bHF8K8c5MZaduxE8XrA6nMHGb1iAgcAZps3rU5AjGzH6iZobJqzPoLwXJdbfHJJLVVQGqEocRdcenT11z7vpdS",
  "key20": "4oWcwfmpr6RBxdHCBnmJH45pK1w4kHH6bYSaee6gaKQTmG9Q429sU4jaKNVWyai8NR6ZjihkwtgkEGcBKYgYmhaD",
  "key21": "2p8bWEUoVNa9JK5LTEBytBfovRnSCmpCKSGKmRjtchrV6aJkudSFqeYTwBDZjR27fx31tzkCMdX21isj38hubhKG",
  "key22": "3i61LhzxwGcmhCibhMZA9gtPzDERrTtskw9tUZZkfq72d4dquZX7DhfC7TjbEGzWQ34MH249CimfJ8s7nzKQBbpA",
  "key23": "5zYHnz95AffVruFGGerPXqvyjrc8bP3KBBa8PEqTTzhsKbUmjtSLW3FkFLWrKJMoGViF6h1YL3aBrXXDe51u8bVJ",
  "key24": "4nyQGXfAMwUw9wKcztcZk93u6fQkxAatcggjxqHt6ERdmrftBxaxeAJC3D9p24qoYZ6eFTHLLFNqTUQzRrSUUyXa",
  "key25": "2oD1MtvZUNnJ18B5uTn7AdYwCXi8AF3qRWJUYhLwBwDvuRVjWNSvDNjdPVSRFHVwD7camoGNwYcu5xbfVfXd8Yu2",
  "key26": "gmTbdeGjAFwmJggGx7DCMMsUo5Smv68FyGPt7fMLci3MQgZ4wQq3BBPWWNa9JoXtRjkpLaQn4ZKDmGsgAerPLzH",
  "key27": "61sEQcT4uK1EjsdVcqvtcY3uaiM4Ppx1mWzUwLpy5UyNX8tUr2WgRayteNqEtRbfh2dyB7dBK84nrkAuQGHxjoZM",
  "key28": "4wtsZ9PqeEBdn9RyHpB7JJoGUwMua7jGBBDMR4jGntRrPTq5BwVzXnCKsw7xr5SQYhEby1w3YNUCaDViK5CY9wXd",
  "key29": "4SZudiuNJeg2gi2j6V7wgDwnv5d6S996YJbVtbb7jo9FKUkVgmeGcB9rdztYjrBpBaeWDcgt82zPwkYR6smzr6YK",
  "key30": "2WsNPKdfZJh6P5f9XgBkCeK1D3CPP32kkxvwrikmWrzUwzmPdWYno39rASNcZYF7YbgnMvp1zfJTzgoK6C8Kuu6o",
  "key31": "2SJLK9uvGZhXxdw4CSdvnJESQJuWTVPFpMGuYes5o4ETFV9gWWZ8yTwPfBExoogheuPZmrSYoSpfFk9evVC96wN7",
  "key32": "5BbD5ubzCeGAv95J3ekRnXrwwSr1JZFjnp7dgrgDQih9Sc2iwcyxmKiDRBeUfSRPGewFk9yrAABFpVhSDdrmUEH5",
  "key33": "4ug16X4AqVvDdQB4HLWyNxG3tm6fn3MyMaMpchoozwqrzcsetWSX8LMXgJU2fsqg1gkDT6LrwCBsczwfVAeb3mR7",
  "key34": "bEdr2Tr48xC4FTqdAjxqe3MMMTpzicummjgmHCpgCqNadKFNkWiFzVHFtxXmTmc3eWrhYmNebqy8LzMT9ny2KjX",
  "key35": "38mn6b6SSFVwdxFudGSWJbhNCNL7EGoWKfrrR7HzPBbJDcZetu7WPcwJgaRobXRxpB7C6RL62K8qw2aWXHpqgC7x",
  "key36": "2Nh8gQsDNZd2TdKVCKZY8a5DM9AEMioPd54TEQM6qkeoC9fAFdn1k3ipazV2KnM2EZTgQgfhLvfRuBH7AjnmFLjc",
  "key37": "YAnM2kN8b3edwoxymi4JwVEbSZAAXqQ7PLp73zCotH2jicNjfWSXSBSfpCsPnZHibrSjbbvixxYW1B2mB9sGfFE",
  "key38": "4MNy9g52zAra6RjpZ2Tnj1rVKMSPoB11hM4uoP9d15xfTDeLv1j6UNb5LrfG8PVMKRjZsPRX9Gf2kysg4qRLufrp",
  "key39": "4ry6zEunVwf7awok6sCxUPi5bZXuC4ziyDgwFHeoU7akj3MfMatEnQKQZboD7tCCiJ9qhyA6tJ6j1oFQ7hovgddg",
  "key40": "4v1PbrVoHuaf19LyzFwz9jYhsxoMkqWVKo8Hbwzrpo3kL5upfbD3qhA1HE4wHvFUFxzYn2SB5EsRc5T3AtH2bfE5",
  "key41": "2yD7VUFXWYNV32NSRGtdDH2Vy7JK6cw56D4UM7K7hyRLr1WX3UmvMPVQisez6fsqcQ6omP1LGdWdpbQmcZAFkkL7",
  "key42": "3yzUMHPzePjP3tjG98b4uAzkUYcmCvhWYhge9amDd89gnMJ91xqvNf5ArWhUCWv4pFiF7skLQa1jBZ9U5SBfm9NN",
  "key43": "wuqyKLypgZxACmhCwn5n1gWnQqyaD7r4M4xn4xtvjC2X8TRbJSgC3vZVQ97Vxmo1xB84bpr71dTtTPTHCT21aUf",
  "key44": "4UsgKw7VeqVfgUAk7VYiYcigquzkkoFmmVGJkiGE9fUxhCqB2MjhEqP6ZFBjzmj9AeAhiw4LmZXhWvsxUssi2zL3"
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
