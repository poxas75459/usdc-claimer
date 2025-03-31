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
    "5uQmmbNgfq8yktRBN7nNSc7zQC6kjt74cezmtey91ziaMzKRhRWn5NrKNFuxfWxPapR3ksyBQtPnSKPAa4wAtdRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SRE8tqcSMcYDomT8jjhkjtqscW3J1pMtfTCArXbHt25Btq9VUnEJy9wDt89F2f6xnYPu2MDRv5do3g4v43MCBEH",
  "key1": "5J9bdhpzinFs7mGEFmT9faH8vqtsFhBfyWTjDd44m6tyCWHTVEDFhdXjK9sdB6T84i91YhNLwXCPernx5hVwPptU",
  "key2": "23XUSnpsTMR1b56JqaepaoocQvzX62qRZQQPoJ7DUAKYyLL1QR7Ztue4UUFhg2oAaRDUbV4Jbt8UZieGKcGYSP2M",
  "key3": "2DrAiZgiiJcao7MWucbCxEaosnkiR1bK1dxNW41yR83ZwqSYaqaAouxFbeqDAirtKhWrLHmh7FXVqKcGJgyeRg8K",
  "key4": "WzHMfirjsdFJChafcLuKN21nuJbzfaR1QcqhvRwzMQBqdpqaJgTSCUA1QUsVvdVRHZHMi241uHiq7F7QjwXePvw",
  "key5": "5EweUjepjR6BwMWQ91LUQWCNNwFTEAB77QJSrxbiaAq8fTZNiAHxV2WWSW2ws6NoKGRMy1UGJmrMxF5kk3TPKSWv",
  "key6": "2FP4tqs7Bgt4oLoNhbwngmopmVLnyqkYXVRxUgTxBHf5o1XY5gXcbsmojfyGMU1JQCuQvPMYgrmUFPZAoPs8JvJ5",
  "key7": "cfAa5y91B6KwrZfsw4mZaQvDHUaJy7aSrdUreJyXaB9ArjvsYaqmdRHrJUMA9z2ocNdrCZLSYyW5SPZ4jmxiZf2",
  "key8": "4VZvsY9qMzvuNygXecNeqDPbw4UEDc8YMgp7UxrmS5tenk3oTagK6YijNcZR5qZKWVGyWexm5wiXuCoRVH8Ms6Hm",
  "key9": "43jBPsCojhfxryPG34GFdkFWebFnBM8ztzy2MsFfhieHGjNJ6ZjjsP9ExAj7HCBjV1J8heSqSPDTeyGfN5wg2BoN",
  "key10": "4NR5VFjkBc7uutPYy9vGDK5wgamyMmBh5G82Ajo5FWLZXQeWJ2qSy52hLuVJzyKQEqdHoGTAk9cDib5zGMRAcprw",
  "key11": "5JP3ZYZkV5HUAKzMjXESR5aHe1CaAwdRMRLSTnm7E5apwQ2jcZ7kPwrXf7Fu9BbeTuY4ZC5Mmmg9ooK8XvCr9CoV",
  "key12": "4V8LNnfzGJu7AV4Nj5uMyeWhm3c5bWNBJAFbdQidDH5H3MmQkRqP8EjWNkcgiFsQde5VB5hmZ9xh1wAz2fXwstkH",
  "key13": "2EzZUdoAV1iAL9om7FkWKW8LsZ2CVrTsfEH8bEy6b8X88tcReSS6yrTvdAbAmod7F9MdBWnYtXbgGh4JjDdNxAqM",
  "key14": "4NheVePCL8M7h3YQhHggQNdLdXQDdPbeEPGCrTMNcrcpzfDK2DSyHzeTspKMgx7SBEgt481vgrPPPHGz2K1u3CU4",
  "key15": "3NxNyMmx3ouuyL2LNaVAydwRueEY2U48YueJQEbZLEnjijRQFrH8XBQjZNNDr4ZYmyEQf5pjGFgNunnPmwmD5dZw",
  "key16": "3VXxh4xKJs1LuKwahwjZ2HhC9nP48FnQmzGij9TuwwdYTdY68dbEVKTSXkMCQiRsQ7hZZhHF4rWp9q2Tiaj35dBA",
  "key17": "2VrvCY2fuHLo52vWQi1rBBfWxB5PK83iRPFDz33G66VnUTspVPKaUnoWw1FxcxYpr1VKMynWmZM94Kxcekc67a5j",
  "key18": "3M9Hz2y2212yqrJsMSWg7Py9evnK9JY4tP939pw14792jagf9Yr36piGzfGdD8x3Rgx64vyKEgQzytsC3B994FBd",
  "key19": "hQ7BfzQYeWVXeYpU2KDmNVWv6Dh7KkPqs6vgYnMZApkYg1PJCQgUZzdx14TCMVm63B8uoxXQhEXvpSzgMo31gLX",
  "key20": "64jdThsE2uvWVbDaeJpGo5JsJSud165UF1KZWBP896HfoQq4aY3vHXSiwGzbE8SspxSb8JFMiPiAYxfQixZ38N8S",
  "key21": "jytxk6BxBn6hTGZ4ke9MyXwYv91rSiCnahUfoHJZ4JftDLov872mpK6wXNZguhdWv5PeyAogATmZMXrgzXJvFXZ",
  "key22": "2zg3HvvP4gDau9G1PQHDMwPqJQafheEptPXE1BDiZxjXiE9mqYf4xmvofgSMXsnXu5XraVATqciv6z5YjdCaeGJr",
  "key23": "iGoSzsssG8LB1a2jD7LAhvBvQNr9pCv9RWbph6Pp5F6TWxAThw4y5HiJi6AcbN6u8mnMgxu1SKeE37XL3xvtrAp",
  "key24": "5uUAC5C5g1SPRfXZLRuqGxmysMni6ADqc8QwpnneNzYb6rYs4Wvk4D7tDmTkN38dXL4jVEZMUiLMdJdiTdHxJXnB",
  "key25": "vESU8HreNQ9gdjNJQuxsnXs9MCdu6nNET3Z192Fdnf8FASyU4j1ot4pKHXrPP9HLRRZmdoWXzyzhqjzj9HZgB5i",
  "key26": "2cwSArUKDFzrAv1NSQM3F1ji9hqz5Q1G9kaTCrLtQD6odScvpxrs844J7JEBW1N9w684V8jmAk4thwsbA8YYYstJ",
  "key27": "2q5VUPdTxNWi2iLq8gmZDaTU3SACN9M8no3QA6Wf7HqirYTi9HdHw27iS8FAmCkPR84Ds1knEFjkCCJdrtDxJYYS",
  "key28": "5SVN47iq27rzhHHwE4pTyBiB2iWfWtXPfiKn7SWUeFtS9Kt4CyxYiHCNCP5kLeu4VynoCnHcX6X8pHr8eRt3CH8q",
  "key29": "5xh6RDARCbgRcBBYyPNNwnrn8SGSAxScU4ckzYazTNKq4jNtk8rs2EmQYw9GM2Ed6TVs6w9jwVFeCi7U3vDzqMfj",
  "key30": "21FtRnV2Shpr6bx7McQQQng6UfNXkhGAs2pQcokdJusxvmoTA4qoqqaEgNCg2xDayUG54PCcfNCnr83VkwDkEF4u",
  "key31": "35Pmdn5pWUhMTgaBEGSdw4Gse4oEq3yDcpHq8oRxfF2xBAHC18JrbhHTCqddpvQQ61zjYHtzDmD7XqR3rF48SVm7",
  "key32": "3qRM9EMMVYRV3Kw2tyULBi1zePfjf9EE6cGKyZREfxyBtCqFsoa5ryFeVvaYk77r33p8shYyqJKQ9ehskDBYPPsQ",
  "key33": "4dHhDVDpQha9C1ZVrjsSSaui37xKM4uQX4qbKQRYHAtertDGD1GDeVuszQBFvRZopJ5dfSFwBzdSYTs2LYN1MwW9",
  "key34": "5ocV5jMwnFvAU4sM6XoFMLpSzWk8KzTMxdCN9vGap7Hb5Kx8hfbGqJHP8bEQdV7fYRtnxQyttG7h9amMibB5PMiZ",
  "key35": "N1gwFWVyPGERyWZyYUVLJ3XKVSAnbDZE954Npx5XpSeTCBbGoPsxbRZAYiM3Ew23YcUwm6VywMbmKKyzBfuJoBx",
  "key36": "5pfToFDWwAkmEkwu8WUM8jZdmGfbRSsp3x57aLWqW8Tg8XoXbX57WDLAabyMxGxnviJ4ViSMXJGKTtXaHdmfuwu",
  "key37": "4vsZYUePCbFg6yAeEA7TTwefHUJ5JZcMNzHfSsZr9FcyYgDyhvSjetj67bkUcmKwSDQYZavR25HqAVSZpCTs35Jp",
  "key38": "3baYUGHTU4zAmvmQZXCF56gopHHRQfFPfYSsETnpEankbpFp9tszGkNqS3JqPEqPRFZ2Ctuyi6S3FmdSFbfZsgtU",
  "key39": "5Wke3md7xGdbBWKUjB8ESfBM4HV3Up3cPkv3R2X4KqA6bVdVg62waLYsioV5hKeMtg84xq8vzhug4HRBAZZw6L5K",
  "key40": "3CYCmhYEMJ4LCLF5iqTKwoHsFXFrHpcQs58C3cbKKXwn8vbmjw3FGKC9Z52VBtpCBXF6QEUUDxbwoCwN8NsGgYEP",
  "key41": "3ZuBw3S2N9FjcPVnPxZQNkzuo2XJUeYpCVXbbb4y4VX9jSnLmNxYQ3uNdF1og15N45C9WRkRZmmHB6vzsS1Qk9h3",
  "key42": "33cuA5fF5B4Mv6FfCzVjw2RQi9icZzVbnRzGxvErHNo8tW3D7EemXrZ3VvF57pjqftvErAzjWpJzjpuybwYVfPmb",
  "key43": "vqsK9aqidSrteQuUeM9DNpKzBoNLbu2SHH4qw8quFqecS1qFu4xEZ7ErioYqiyPX4WA3v7BCTUA5Q6LewhLjYsd",
  "key44": "5dzXXqeeCu4hNK8PjBnngygngctFyDncNFteWQz1RdsiAeoCk5qMUpWgG25Ha2UgUbhUt9dJ4A9EzyW5BoV44vaC",
  "key45": "3sKrMjE73mczdtYkhS9ZowUoRAwohTaYfDVJDNqTeCBJhmRsLo9xKTP9ZpSDruLkpC791gonMRzFfk1gXWVw2Fcw",
  "key46": "5k5dA8HwqweiEYiVeWEwKmhMuFpZYRaYEtg4kcmRJBHkbRzDmJyLUbFjDzUsr2dZkFBNzjQYfUyQFdwgsKjHJGjP"
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
