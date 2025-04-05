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
    "3QoW2AfbdVRYzHFLGQPDXF8i9AUP6YTMo3vu2M1yrgjAqKSYeZZZFwB7HfVVktRd1jncRJVm5izStH4qSt7F6BY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67hsY5J55N7Sb4kajnqguDn14nQHTCdfZZQq1UWHTcSTCSErC7XvFqj4GqknBmsLbnyUGRGd228YXgmpizgUeH8",
  "key1": "3DN7yc2eCARPssUmNVKFCGhwL52YLepHYurBxGxGzLnxcKZTBJBSSqTiso5RXWkySCLocZydZfwA14b8MSCuwiK2",
  "key2": "2G31YxeXR4KFWmKYQviDu69RBShp2wMzjKJzcFCKtu2euTWtAph9m7m9fJhrPYQVR9tMMZvG9wjx6j5YECJdye2x",
  "key3": "2tLRsayVjwyVyH3RFT2vj5nRjLT8YM8cuZ1jQxYxmTBj8u227zN4LvpSziNNp1gmHB6SnejUcszjZaGYXTX5JL3U",
  "key4": "XhiEV3qfAS7oaSgovYVzXKyxWkpy69bFreizTXR8hw7bqo7w5hzxcdcQwCD4A1m3tpSkJqxaxyZfRQcYtwxmiXS",
  "key5": "514QnExRn7BHQo9o3XM61UG6HiapRB4uoCjMfqGXx6jHoAtsgUAsMLcG1AbXPBdc4f8zgGVLA78vu2joqj31KFSm",
  "key6": "5U2QMpyYBgcTtHLhsNQa47haspSARxBV9MSPis5Y9NtUi7zpQE7LTErhBz49wxRXoX7pjDiLnMxxk2TK9x8ka4w7",
  "key7": "3eFznrqvpWxy7qjBLZoDdBMUPpwK7KBZftYJH53f3xAsj2BGPC3hcChHvafiPfLT6bwgJrv6JhrB9yJ31THDrNMV",
  "key8": "2tbLtWRCrNPM1ehbuETdV71iKXWKBxEtMjkgaqZAVHvcggsP6quwd4M2bS59sMXrdD86KeR2fD2DpeEUnq36nj3z",
  "key9": "2H7L7nUMsZNDqYpUVQ65sHX7z93faTQNB1va2M2ahVWm8QEcUeEPw2hhU62dhAQyGDBmPussW7bwvESYkK8gBGo3",
  "key10": "4rReGQ4wSrU2hWkGGXKHHaW4HHPfDJKk8BD8FtsF66TWN28PkRRj4Hw4fFVygeawo7H92KHRL4Hmak3ZH9b5ci1C",
  "key11": "2XNp41ucyga2jZoQWJh4rs82JayrPV4ZPwuRvB8ukeEDhTRSyBhVASBV2xLapFZAhKyNNMjrQJPLaqr3mzrg1R5G",
  "key12": "35RMMNe6yJuhwzNHFBp1PxifLXAMHbJ3Ng7c8Whjsb4JVocZ4xUbtRKecka2PdKF77U7WCxmU3gFo1jMpbMEBwLV",
  "key13": "5brpbCTDG8255L1HH435eBHd8pXMnzLcEbjAFv4t86cXykdn1LHSa2XPYDRB82AXGq3Q2f2iLrFMKqNYHTRqyK8J",
  "key14": "3PYULk5wYphAJ4JjJVGCACLxYf7U5ZuaGQD3A4E6p47MTBrhVvjN8UCyFJtC7s4kpbA5LCYWcW2DVAyz5WdH3QH6",
  "key15": "Jbk9QdkPSQjDtodbrL1Uf66UvxjEYq7L7XwYXGVaT82nxQGcBQJN2ALuzcYdVuXBMKvkG1ps87fSkohVXZyBwGs",
  "key16": "2DTo7cR5vQrg6cyZy3EmzXTC5arobYAWjEybZhzddX2sDDje1ZWyjHu4cP7MdEV8fVxSXoyUqrt3R3cxHsaCs73c",
  "key17": "24Zg4qfyqVQctWtJGuhKASZCpC8DXWdsJmcoYG7bM15qveV7bUzR28j3uXQ14fS1bnhRn9exLoikBQju9GpqCnJq",
  "key18": "57qCaWhFmeWscMV6wjJ2GRBggYvoX2m4w13ww8CbsfN8RL6vHcfiMZHAsbUpCF5Q3GynASjgHp15q6zdFtBskCKp",
  "key19": "2nyTWTAWemwH2SpMiAa6YGqhAwyUR84MjJCyHdc1Tc3ix6K1azmeUMoWAvutscntM3v4uQfVaGW1VaMZMNmRdLdH",
  "key20": "CPgL12FkKSH4PXz27eS3MxJyKehGaw8r4XPDKo1tWVyZtePSPR6ZSmBjFQxbpmrNQjvQbW9e7b8MFMBvqDSi8ct",
  "key21": "hrnQV4niux2EBhVEesJu3Mc2NrHrUJhcRsBwrREbEs48wt9HXwxF3vv6F9axiB5YXAHngGP9JfgCTZQHrDg2BV6",
  "key22": "2TRHfTc7vEVWMVSovxX8kwqAgekAWLMCByCq8cGG89ThBqj8suxWgNieS3wbLKWTLDTchJ9m2rYyWbqBgoqk5KQf",
  "key23": "5ZPaGpNVNsrYJuYN3e7FrnwUYkhTQdygmtGA4u8YDcJesS69JnBpbZ8Pz2xbsBmWSib2yE1cAoMP9BchzGyx9oGa",
  "key24": "5Tar7obEnjY1ATtUdpNvAmjfGupSQNEL3GqHAwKNFojnCtw7f9fBYY4eg5X3feUVW4yKKK9wAGuv5bvqL4oFDFoY",
  "key25": "Qf2v3LSdh1mwbw2oxwH3zn5F1s9HsYzAjKeQogovh5vR9wxZgFcAvF6Z9sD3mCuTqjS1kHRupseoevjXJjFnhcJ",
  "key26": "469qxrYx2HVoKdUQRBV6uTRphiHHpeEszxCofXS3jc8wUBB3eSte13qMxV82MURmDCY6boD5VQdtQ4yM2Znk1EDH",
  "key27": "33wQ38To8tCPAVrW8g9mBpDshDvfAHLt8HfS3RB8zqnfap1QzHgTS88qxEzsGGRHwpitwrXubecwAAL4ahVm9wY3",
  "key28": "2UoQdFvQ7875o4GJhBjG6mQcZGi1tssKTbF43eh6pNQLNH1WKPog93GCpfBWu4Avk49pqRWs15B8XyrtYtUE5Jbm",
  "key29": "3ciwFhvRHTXuoJUpvWD5WHUeA4vk6EX8cLetLsEpwZefSS6VtN18oVkGuMiXKYsxbRNkb1vASJwdMGVHUbyDKQK6",
  "key30": "JDjR2L4x3wXuBm2a9Kc41WVuuzCutpcKwUdGoXmFzqwdJ6RCkdNG8VRW65kndDUaBXLMRxnMTFMVFqoPS26xeYm",
  "key31": "3kpTWKMCRdgSWBLP6pZrhT577p7abqSTzexW21iTp4VX3ETmMFAPD1dMj2PTjQv43MZBHhUDk2XHMy4RNgkGyLNc",
  "key32": "5TydfPbKj6F5fMzicEg8smUaBnixrNGfeVBFu225RvMVGRGQE7cPfuVMw5tgnEssfLoL3AGMZebgt9qJGJifbW7b",
  "key33": "1nZBETGy8FV7qGPszrQ8wqyo4MWGatxpiCrbSF3A9FoiULvmdk8Gbea3JTh35yum79E2Wt4p3jvCREBMyULtdcB",
  "key34": "5W9muK6MA2yxY4VDoa6QEKh6GMSfB6Gw8LQ7PvpHxQsw7YxDpNasbZhbfzF32rLax635uARuHHKAZTo53WgHvM4V",
  "key35": "4TA6NevTgos2s4dVA1skjZr5UMQKC7ak3WQuRm8UMk9jNw8RWtS3KU1Hm4H2rHNJkhgYmRpVZNG4NxoAPnWHgsbT",
  "key36": "2cfXtsKKgNndpqWUJwfAmXvGZmRXMckVpDJFsU9Q7bU36nUxf88fehpq7MTK42D6y1hRRWLbYBqBNJzNBZKSWAyt",
  "key37": "5oKyPE5VYSb2Zzcmqn5LEwn6wR2t2X4GBiMqY9yJeV528a3VXLKsucGqkKE3LaiwSsAsTHfaruuiHUWJGfTq534T",
  "key38": "eVRP252hbExmrzmwEFehxeN1f9wsp8KSaexP9GvVLiWMvpkjJrqbAtnFg5BLWgqwJsDbmTUhkb8iaSXsSvm5t1Q",
  "key39": "2mSFKRobcvdZ1uG9CSbL7yS5e4h6f1cX69WP6wJ6ZJtnZb3qYQLymkstNRsAx1iR83M65YwFAVh9RbE2H75Ay2gN",
  "key40": "2enpWyvh1tB33zT7xsKH5oCsbTBWPCvYj6t7Q1iMgSNvRKwbU6VEj6L1xaqawWcxkZ4ogsd4G8XVdZJLYbM7XsxM",
  "key41": "3oK4H18Hsgeqt58PHVKFftRT1yhyqR7c46q9QEz1GpwdfHMgPMwEa1F4b74aSBrT7myTSVF8b4RZ3mdqCdU3Qfst",
  "key42": "4JNEoVgmxN3pQxy9GVb4hwfkrLamPKa7NaTvt3JwjYbJmSJGAvbVFXBJKsL23WFCB9tUun3iteMzUDQKjQtdTNrp",
  "key43": "25WLC7uzdbaLfjabbVAnRPJ8m8y6g2hER2DSFMFXNdUgJbJa6RMDxRzMWXGH4TkPxA86CvhH9LSWq1n7KoUwyUZy",
  "key44": "4cqxxX8mFPL4hqD5UonXTSvYzpGtLw47YwUL7k2A2NLBG2Zikj7HZYzfN11uhNAiZ1ESDJ1L8LwxgHSZKQDpS8FL",
  "key45": "3HSZBCKFjCmPZGdw8y4arfxsGsF1t2MMvYLpeYZQm3ivCkKaTYs4wLYAwHbna1ADYWJmrppUAdY9jJAKC8W1oSEL"
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
