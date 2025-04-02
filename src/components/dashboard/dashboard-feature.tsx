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
    "adu2qwV3yaH8xhk6hqD5KNewCRKbb6zy2Btc8k3dnt4pSo4xgwDwiXMStMTHVGKh3XQ8SVBakp1GRge3BTSgftd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fCUmoRx1XgimMUV3j2ppBJ5KKAU92oxJEguJj9VbtPn89osivwW5DXGp6KDeuTpU8EuBhjMUwTjKeT78z8zkp55",
  "key1": "A89sDdF4tfb26XUdFS8UUE5aixW3EG4HapSGJC6qcPZWNPdsdHc2QuHPebkz4k1rXUbQw97qsyD4FBMYtqpVuFZ",
  "key2": "Hr9WnL7eHHmjvP4pVY1m22pjssBsPa6WYUc1AeQeZ4biGEUauVxPAofiVrc5naQK3bCRYT6QGpAc9X1cyFxh5t4",
  "key3": "5R5ZYipTscWoGYuTkqAkeq3hptY1MonUKUkDosQJVm5DrEVW29U52VSLYzhBrVvTcER3mN2C4TeKh69H6m9LqhgQ",
  "key4": "3NuXMzQ5uV1vBPfmz1mXAB8BeAHrqSNhVBbTfnQN6AhKAL4tfnnf4ULdrpQjX3ZqxCpSuPNP1HFKLuWnpKfyg3GM",
  "key5": "348NjM7z8uzxmKQneKk7kCKVpts72nyvafT3PWHqmbhCQtWfyWjXNXWgfTdGcCB73vyUz46b9YXtkq58S7ehAFNK",
  "key6": "4sAE4fzSm1jzuRUqBDJRA4ngzyPnNiZBtihjxGVYVQv4nqr2h9b3h2hUPH72uC7ib4phQ2wmoZnVsYWNXomuJbWs",
  "key7": "3qs6SfHF7SyiGiuoNaLvJFTV4KoM8qvBsgsKx2bR6wiCCWurMBtYi9nkUGm8SNB3vY5TYNSVfse4Ns6WeCjyZQr1",
  "key8": "5tyaZRd8o14td1mjv1fGbjYzqFLTeRC6B2qXkNCV7W2Qf3Vjpu4E42J4kfe83i5tC3noBcnnkJimrHkpmXSepVRU",
  "key9": "5MVzjuG2Cuh8bnMt3wtFVuCE6fRdXZEztCkbRTnUbwgAKYm1L4Ew1L1jg2SJYgoCJuGTkvzoAsA7qN2RRt9oUDgM",
  "key10": "43f9ebbQwFiiGULnUzQQpEKyDZqXUpPUNamKjZ7eNs5ned5PrB92xB65ZR4BE8mB5vDipsQX73K91MUZ78rW9geM",
  "key11": "22EHEZHKYRnBmspfCEYvEesdbiwQqEXRfSnG63oRHUjtU5sFLSpjcHGhz9PUqqpG1zKq4mVXJjnqjQywqe1LuBxc",
  "key12": "YXik8Q8rh69XrM92puWow9YDFYFeLNoPUcnuF63Hkieevpvp7ZXQgziCBe7bDpw7tG3rZkJpGG7fAmtpU56xGUx",
  "key13": "4pi3Me6cxrwPn67MFyhVYnkRiWecxhCWVCSDM4p2C6RX89grZsB61UxyRKLJaiZmwAgrwuqi31LXxnsEaZb7P6Hf",
  "key14": "Zyvf489QJgo81ZvUsu4yoryUNACs351YRTh9Dvt7n5Ng6joSHsKTw5k326ZhCr33KU6n1qG2aHSqEnfw3TPGZMT",
  "key15": "2q22fnjEV6tBBo8smWdQPhjxKb9nEFJ2hjGfmRhMBCgucmT2zcxVsiWEG8F6ANAQCL4Y3tyTwWCze1rKjbpaA2UW",
  "key16": "4Jkaw46vLFioE2JZbKkbLGXJuHUJM3cqUmU35dK2HovxNHDai3Hs3Czb4ugUFtZJb6Uqsqm9XNRebUxoVKVccGTU",
  "key17": "Ls3jV4aHDh4tcCmnNsDYPXz4E3RQTEaMcs4xTMJACHMaLQsJq6SgtaEw616uEWhzC9MUMZRq4MApPfvoynjuaoR",
  "key18": "47yL1C4ALZqfYt4eQ3Rj68mtc8pvKVUv8WKZFqKUsu6EoKtiM9wVBkmtnoQh5z4Y7VQPutadxuqdTguBkv2qXcQU",
  "key19": "2dpZJvHRxk252D7gSd9kb3JUTFTXtTb5HNGPjvnM2Mx1hNptbmv59VskqRpF6bcSasU6obY8qQxtxKo5tGWQKThz",
  "key20": "2WAb1gEcXAGeZATFyVAhCFF5yobGAwbs3Kt56E8kvekhKFMSoD7zB8LzyvTdKshtkWwDU759SW4kN4eZJ5XhXKRt",
  "key21": "3MzkSwrQa3yuophp2WLicLaT8pfCtPBGL7jALzAaiwvRu5MY1PUohQKvsrzQXHHRWc9Bm2FSa8M2hNtLBe13VyJc",
  "key22": "4dAgRtpQhKhstGFxGF84bXRgsqPNs9LD6PXMVGKTbuLYfUoGHqXpziNjmoJUjeep1SkbnRAWgqmqroAsU7deMzT4",
  "key23": "5QuAEHYsRd23ThF6AjF7dNdaMALfek6CdqmJ51XdsZui99KNYXLvbBs4NNFWaqq8uXggt6X23YSpbkUZh7JgwG7G",
  "key24": "4oW7vw78sBmRJh6WeQ3EhhGfojfuDJhvmQXqk8u7gPj6V4xZRVbGnMK8wNhRxmazRaGBbtRZ3sVzEXZirCYeGQRj",
  "key25": "5CqxT7qWTuzp2Bm14s8Ma2DhTBsBnFgFY6TWTVPvi8drL3qJfmU8DXadThtP55s7tg7mPYHBScQn442swc6jAaSb",
  "key26": "4hs49eiqpAG2R2a6LvjDfMhbmwxBMUwbGTE8nbnBPn8na2zbeTSwgPmcsjkfhgaVXQ2HyoWP3ocLAmkiPZtQTqdn",
  "key27": "2V7d2QQqT5qCS2697UQ3StRzi7uLeF8MdYKrp1rokLM7sR3tFvqhyNDDZ9zTxejeQRuhGyNgCBE1eQMm9AUs31rN",
  "key28": "QT6yV2zwCZUtfDQtXdksG11jwRnRAkfZi2oAik8cW5p4MbC5STgKEboAgTC1zuMQycARLFY6k7PpNRNtpvgmvev",
  "key29": "2Wir1EucEW2QXfpbXf4omeWZ8GVCz6Wyx6mzuGgqWyVWbMBH1Ui21vaPsUjGqPyrsYaatMghHU3bHvvZYCRJMrei",
  "key30": "56GeNWGVqknPb4JBvoTdDZeaKDwR7yMgwXokC66vyfqFeVHeFd6DpQCZEwYn7Y6qUkuQkP18zSK9bRSbge2kMEwL",
  "key31": "5pftMNu5TQKKZwiM7Hrk2wrEJ7d74JoC1FTJKouPEHAdgVee2MzbDNHdWHvicafZXAPQRtxEUqx39Mh3mc75ygpT",
  "key32": "3BcRheZUBNDqyMdMoyNbJ7UYfqUYtcRrrs4k5zQRbDheFMm96A3NGZBY1nz2vAt9n9ANGAjyigePjd5DnH1xdNvy",
  "key33": "3c43TzyjYLDRtUGCbyUjcjgTxmQZDXauT3cgVTrXVCiCvEhwoLHpnMvZBVrGkjcQGnAESthVbRv257eu3HenCUEH",
  "key34": "3cbuh7ccfM9X4Xvq4Pc6k263AdqfDndFcrgT6B1NxjmpScebmvbtqusaEyr46Wrv5rHz4ZnzW6CsLcJgWkrZNGig",
  "key35": "4aCtSh4WFQhbim2wsPprXTr6AHKWoY4X71sULsbAijLhijNjJrWUbkDCgKcB57wRsJ7fDvsxX5gAsoF611K7Dew3",
  "key36": "2VhpKXQdNLBtbe4hJJcfp7B7T2mmyBGGKwy4jmxH5jaqgyEjWwtM9oK1jC5qeYEnCnne3EAxvRsddL9PAVvkzy4U",
  "key37": "3pR4bEmYSZ6VnhCVQqRSxsJ7hVVfJwzBaE8T1RtcWpCGswVai4AdeNqJxbLNBU6WJKnx6LLy42LBS3hS4oGHqhid",
  "key38": "5T1HQwM5bvs6fiaz6q1kWKjmhyDJDg8BtmWMj19ZDmPP3F5SJNHtkLHeeGYdkJximxffN3YQt2qwmZHff3RTWJo9",
  "key39": "2RFseDThYoRHqHoDAfWY1AVzgY3fHZLof9s7FzzYZXGv9L8SqG3M5iF8VraHn2Ttx4v2PH77H1VBi1ckotpZAAt4",
  "key40": "4JvXX8E9qpmRipYtyu3aFWbvj8p7VXJ9oehooALZFdsSyucbcUwobWtAuwMmCj6MotwXUAEHNkcW5f52FQQjhWJC",
  "key41": "4U4nmBHAMpzg8CzTjnkWKmc3jdaWHF2KQUbPAGhVAufsKsjCZgZV3LXswpYnHWMaberoXtYJ7zELYH3MnvMScX3g"
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
