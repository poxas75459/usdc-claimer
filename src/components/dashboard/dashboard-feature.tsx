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
    "4YyBo5DyqQ5AKxLeohndT7kJ1Y6AD7SAazs8n7L65masNp3QHA66yVqsi6B3VHL3f3qVsc5mGqKXyhbWLWiJaMbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XDNoD6Ewix8Ayh99zNL4PCGBQ4hLCErL3VsTGJGQAjdiWqHZUJDaXMBqbVu2pX3NiYyDfLpcHhyQyD3CNLh7EHU",
  "key1": "36WgA1ndYkcHc3GKS2gjgSfWsZ9ygJi62q5LUSgn2Sm9G9vaL5E6UhX6bWuw5g8nRbz5iXvfiTPrrwQ1Hyffz83R",
  "key2": "epiEYBkUDzR1SkR4BEBWWgjbB9PAPvSbA71JmELGX6jiFgCn6iKixdWzGmVFGTfSjbnX4wN2A1yGXckeabkUY5v",
  "key3": "2LcfpCBmxjuEGvncKoRPS5JbrRh4AvowrSnNbXwTkd7MMeUoHCMuBi41BeVzbY7Cqqc8jvA1a2PhHiBx6kv18LmH",
  "key4": "5vdW9qtvpxykV6ZiESavDKmafPoADELq6uN6gf4Tix1eg6nyTuYN5zZ2SPqnKS86MZawABRnCs3e6giq4HFE5WTX",
  "key5": "5Z82EP2YwRPAKd4k5N4PXSY5PjsLGr7qUqttWeN8P887dHnasbCDcxXPckq5Wv5eSXHAiaruNUS9w7gqbwpZnvBj",
  "key6": "2DVTHYTJNtbtwaEFCv55FE1m6Pc7z1m29Pwj7nZUHcx8Fe1oiq6g3rCBvQUZ19ifAAovGfMp7RGXoxUnU5147VKH",
  "key7": "37F3YTS6aCo86oGzWjEExvqc4ybXbmLbRJ2G937dpZfG9uAittNbHexvnP4Ed6FUSEHMBrW5iEM7uqoRcdpyUxoR",
  "key8": "AXNtAvbLwAeMFpyNwx2A8JKNmUsqr1nzkEG3wffazn6EcYDV8cTSSsd8vSpXzJRHmxs25t3fFkLkonnzrYNQJQk",
  "key9": "2MCUHycu7FoAHP8hD7cfvLJSo1ZQaZLHAwwhQuR6v37Zg4gB3SAJ8pJi1BXoUktiG2w7sqUrmVusWWLeZ3yuRdi8",
  "key10": "4xFoJ9pa1vbn4iCymfPBdoQ1uErok2ARLXSwmozc2Qf2CJmVoD2sotjWX6A43WpDn7JBiaN9tAycNL6kWDvT9Q2U",
  "key11": "MtgaDmiXH8zo3ZCsHfDt38vxuid2ZJbCrFxFVg6UsAUDpfwTCf6gEyXRDbNM8i8SpgbsM5UVSFd9udb6QaJuRsE",
  "key12": "i47ZiQ4Hv64cEzveqMFgRsiHScqgFQLR3XbyFgE1WvkEjkx9nCZ991rKGbAUWePkzAepyduPPQBGeYSxunE8kDn",
  "key13": "2oUMaeU7KFtZRnUq46kdvjNrME7dCet7arof8ofRGbMvnXLB4eyftLLxCg7bMgQunpmt4m2gaKpEQLBNn4N57Hu9",
  "key14": "36mTFkP4NxCMbQjGybbeEhXqqA9xiuS1FWorVNbVnrHd6JFyDeWRoLL2rs9jFsrHqh8To152vY4yLyXkHA8Qhyyo",
  "key15": "3SAwtML312hCoi7nTejX1RT5T4QGt41hWvsxXJ31G9PZ4HWfByuadhCfPiU2iKQr4Zagty1rQhzxTPrRvaNiV7PB",
  "key16": "5VUW1axE7WfHn5JivqLMisT4axhfFQ9tNDXKW93pjzhdcZSKC3JTtLzbEifE2SuGgBghnoDcCGXEBf7euNwrXvHd",
  "key17": "4zdJiRLfxF4XX74HKGyNGt1QhcPfCT7abFzagVDbZ5CfUzFMyc9Cbo2FWTeh1R8GhKQWqzfGffqK36jmkE15PEzE",
  "key18": "4pG6ScLgV9EQFBgfHGqNkWdi48mEPLTVpRRuJCGKD61oACsCCQEtVVoScf2jKFAmkmENcnmcJhwRtxLHwmMmqNFY",
  "key19": "3cvb6X1u3b9Nx4bX3GqV3tdyN8B8GD7VgRdGpUn7Hdgx8SEvzQhC55MmbGnww7p1Ac7bfDhHErk25T4vFLpJ7KeV",
  "key20": "7rYbz7sfV4M9zsBu8sNPUKvKtYEjwvFo8CZEma1v3uo6EkhuziAgND5NSVmmxPAaBTQfVmwtZPecz16SESsTXqz",
  "key21": "2DRzrRdNe2r2KKzBX2dGXTrc8bLynfmm2Yig2ppPpQkRpLSj1Hcce72Ak2xa7wof7Vf8UKw8q7Qf1zkqkgxEvnj9",
  "key22": "3KUc1KF1xbq1dnqcymyqtq75M5XovH2Cs4BdoWsF2ATHgZTE5GcnuHjQbiotHBBTcFRTDcsm6ZbNjDgFhSEc7b4j",
  "key23": "3d23zV7HhTmau4YeWzVYaJcVLAh2gysUtjbmDD577JSYPzrAg2HhABwbtdDoejyqxfEbgrW9WxEdGWRsstq6ukAv",
  "key24": "4GZT3SXq7KHEaATMHkCoEwPxHdjVhsVgAQergkdBPHf6vbNq5QHQ9EaXC1pZ4pTZs3p7GPPdxzkd45XVZby8ChTY",
  "key25": "2GYMWBJCZUdATjKQfnWssVh96t7KF64dNenYxn5BmpJBvpUVy4H46bqd2eo1y8kxp7r8wcBYY4AZK3eCSwNj1qKf",
  "key26": "2JTdL5UpHudaJAyjGVpE7taTh3gi16NUTsFkT5qY7ynWzd1BCwRXtptX6hXSMfgkNpqUZrXnr52Dkyj3uzkFY1zV",
  "key27": "2Ski9FF2vV9Ea4A6BZNLkgfK1uuHpcq5rr9CnuEyb3HhCtMeuDtkfrwD9Z2DvJyFwKyeiNh4o1uwepJbgn4FSgEZ",
  "key28": "3JVx3fya9p1bxQFXs3W1Sgm59Yh8549fFwk6itoGe7jDazdueRQM8qDs3UCrtqsudy3EqFdZ9jBbg4zMTHCCkcVJ",
  "key29": "3kCUtFMZwpMaPbB5Dmi9k8aXkgoBZtZZZMrxBUqopwTfR1PbBbJ75iiN3GEJTyNTxQNiHDy6xaHDjjScZ4k19Ftd",
  "key30": "4as4k6e6sBEHrvTvRkhQ31VgsU5xhZ4oEJ6A2KUgbytuBLdmxi7uNTT6VTJjimzCNhUYSFW9W9ivkGYarheQNsnR",
  "key31": "4kHsvebMB6Bn6vW7yKCSZvTir3d5hbAER2THM3qRohWxmtj3oKj18M3NG93aQDpDtMPDj6HNzpPh1o3tjkm2fjDL",
  "key32": "2xfdCDC3jyDf9L1453TfqwTBAKqFfq5K8kgSEcGHTnufk4ozjSyou7LX7eKEoRrYpju4fCNCL2smEtujrkXvcVzt",
  "key33": "5iGSqyBAZzsZDhbw3DxnrNey1e1pBRp1xZQVWvS9sG39i35tQNCx5JtKHjRPANnX2CUpLkVDZRMRQk8xpb8cPZ2Q",
  "key34": "2ghFtbPjETQYXFaftf2a4gi8zomu7FXPgoApsvspe6SPGDAeax28j2ov2CXxMaKD2z5HtuhZn3gXxn7z6KZfvufa",
  "key35": "54PLrMVkVwdBKHRQQf54pkazi9oz4oHR3ndZYqqqthpP9cwLeGZ8cWbirCrUn1VKkj4kP1nurL6tnQi4QHrR7KVd",
  "key36": "3jVaEDQeKNgz3i3epX2EPNc5BBDRAyyTyQj4icSHWe6GhQDjkXNRJwEm4wCHTXrgFY7VRWRi3Kb9c82JtqiZTr74",
  "key37": "d9grAmvs5gTCcPvRVuPwFCuTiby4BKdhRm88f48gTXPg5aNYrUx8JESDGs2c2jMvFFN9UqZUvKGeciLofJebXSg",
  "key38": "8eTXyLbgRq9r29DREotjnQTwetaocXprGYUX7CRR5sAL7y2XD1KbV6KXkAqxH7pyvQmMDzdgnuCQdd44TqnJGxP",
  "key39": "MqunN7M7vfidK8KbcpCza56uREUKbCcJr8cwU2wuG2uy9PtQoGEvFJcCBApZz6nosfQVNT2jjup7zChNy393HWj",
  "key40": "5NLzWyTxVkjWAnhVx87HUknrizcwbjNyooR2V4hWJ354MKccGctnNAxmWyveHQtEk3xinvBVmbJ6797je5ZDmvQV",
  "key41": "2upV8ZxKny6ZPhhYR9CRymK9qU4TFb4j1E5Z7SWnFvEBynRx6JnzqqyLsa7FDPpvUTrd3vymp5ZX3XCKGFg5b962",
  "key42": "4YFDHjACRj4a73uQ6BXF7AphiaimxLMuz7749LwXMovbQQvWWkR5LDJsRx6njA2N9nvaTp3m6nJ2nbt1NyguwRuu",
  "key43": "3Q7csxm1DiqvGbZ4jjoH1Ek5UiUMa7Ax8faqjic1hMrJqmDaspQFyTuYKii2BvCxnwpT84Yhy9DJjoL6fm6oJQSa",
  "key44": "2KfDvWuHGqsrruKha2St4GaqYu3rTk4B8BGkHKzYnqMTxbkFd6RRx1H4yVtZYg7C6wpxozwV3hBnuACyXqAJ6cDo",
  "key45": "36TjnFgqSwSZWvtdggSN8GHJiCTXSC4G2t8EmJpYD1zmsGM6mdG2V7BKQuXkpDL1cjZtbKzGAtuwYLsS51vxWCxR"
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
