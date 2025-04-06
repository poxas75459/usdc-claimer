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
    "3tyYMQp5THgj3jrtcoWMNqvBQX26Vf2ryqH51ZkbauE411xhr9hQn92t7a6u8XzaKFRFgXYeb9TMgfVQ9yd9Ze2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ty2cmFUGeU1rq48HpoLNUia8CmVFLVHaokxkLQz4CMK4ToREAdmiqWLEQqAtS3kSkbCDC2ay2YdxZ7tUuqxTVtE",
  "key1": "2pjtoYQ9XFyrMF8BJM8owTbnCWpwKatMqLDq18uwaoBh9TGJiq27oWYNRXSM2nGNB5JGYc7afABA6fdJHrHPHDsZ",
  "key2": "3eXhJA5YSL59KVjzJpRCFPLqJVXJDs2Ec2k3EAyHwX2RjNmWq3237d76FAyCAFRa6CjkReJ5MtkCdhoqc9WGNBg8",
  "key3": "4hCqTynxePza4WKa4xyxMtjgiiJn9j1a4auLVvduahjLu7xP5rBQTHEyE2RaNbvhLVkjmfsMN7PBVzH6R7HYdN5W",
  "key4": "2usA2icfYmfBSMm8pm814mvaxFNSiPLR94AXcnxqX62UpEpJzEY2wWdS3zNcF3osjKXxcKDFYTRirc4tLMUQXLF9",
  "key5": "2hof5VTXARdQLj7FKBdXN22J2KxikGUHg9HKyxaPYt7Q3yrhMBrVmpppmKUWCZYydGTD8sAkAQx9ybtr1kwNC9EM",
  "key6": "4HxEsNBtKnSxXnvhQAyWgraPpyZbBMEBreCWTpLPmwa8epYhZ4M4zx5ecE4Rj5SSPCsCdWVZ3KrMRMvsyaMQEzFA",
  "key7": "3WjR6uyRX9EG93Hk2TMoesJS1WfVEHAco6Fj69HtJN7F5KZpVTVLXkVs3y4MpSFbdYL89zBT5hzXSuAxNdJAXyvS",
  "key8": "5JuxCMnG5GdAsWRr7hhrhqWnyjsZTTVxwgoKBJpkkHRMSNhFbmMpfvZhc9PsF3sA9MSXRjxuj2pWXVsRQMRgrt1w",
  "key9": "3p1AD1jqZ44E3bsPqz9bJRz4eSCzAaXMocH9Fv5LUGm2o5Eqs4Qit3rQWeFTgcvwt8hi1ySX1enxzrjNAm4di7qw",
  "key10": "4BFE5sBr3piz2woEk3Aw4LtecJy7Awa7abzoVNfN1cddHxNL5CzA9gMFPaBSEj1j7u4BXQ8B3sZnzd3pVLLBBYy3",
  "key11": "3A7LjZQ8HWCSstaH2xFguyg1F9D3giHsip1St2kwLPrqb4hTfdaHF2SqAmybCn3Vfar7Y7kC1EXbu2PbPwxaVAs9",
  "key12": "443WXGWHCGnXiUGHgaiWQy5gLz2UUDtw1XWk6azbpCGCsqKhHpqYvisp3YeXkNuQCvgVuyiAZA817b8jE5PqHUwa",
  "key13": "5RpcVxB7hHfcRSvzD5aFfBVBXrRf8jerfVyzMe2hrHiufLDkqcWLyc5eYTvQu1v7mdese7WqwcpqNGyd13wJpYV",
  "key14": "3LcfFrB6CVZK6JpmoY5DhbtYAArEunrFQ3ycJ4Ja8J8GYqVae5fMF9rvB4KCRGkkH2Z861qH1o4sUcDzZbMbUDsA",
  "key15": "Y1Z5mdsHNZj82UihScLTq6gMqVhtAwtrN9fDfqmte8ZwWtBbWRw3WxUvpsEnwF9JHGb8QhSxMBL4qB3M92JF6nr",
  "key16": "4vAa1Sry5suk5ZU7JXkH2HqWbFx9yUdpvfQoovUCjYCLrWCVWHeeoHpUeEUr7g4qLxCpY2BDvKK7ro9sshYw73hV",
  "key17": "hCDcfaYN2shcXDPZsgTYFNhFRqjGXh1A94nca8dmo9gPsmdJgT4hAtokotfVWeMwTuDFiNMpB8meD7RmkXTXvKJ",
  "key18": "2kAemFBy4kw8YdtiVgWXZkEvNuFFr7qbPfLXNHBHYU3wxaDGseXjKtvWaxfCyE184r7kp3KgN957PVPNMrES23RZ",
  "key19": "4TVdQecGLuCPmuN3HJuwsQCPD4z6EKrGKpGa7JiKuoUGE5tB3onzjMDcNm3CHiwSs1zqBqRNsD9BgnPoZwqArScW",
  "key20": "2KouDgywEftpFPgqxKV2RnriCkLsEEutPDiRtD2WQ9d7E1qM87Jag3Rnq8dwjh1Lj7H6ZNYbAjuqChhAqn7APNGR",
  "key21": "ZhzzdnS7TBDvcsptaBob9cGUsnq8QMuSAVDv2Pv9FdGaJfUgkJaqrNC4Adi8pHY1bu3SpZbLxw6m7bTtMLhqA1q",
  "key22": "2bTVdRt87Rk5gGQ14er3y8zV8iWAPvwP5CFeQs5kfE4yjLJhRcxVkhyRDRf1Rbyz1evFDKzWRDm5NPtbuvqXQPXf",
  "key23": "51jfWLUFKNXfUW7DmkswzQ4roNpqaCmELv3dyTTm5WJf3QZTc7CaZX2nNpbNoG6bJPACtJ4yUz5EzDzUZsFjmYKL",
  "key24": "4cAs3K43C8EWccVWiiHiM85xdNRJ7p6A6WfrvXTe6FfWnncxLD9mTRENArLucRH6cKsCtfbdkH9rib3Ro3cp5X4m",
  "key25": "tF2LoH8wArjoMDXDvRCBp97VgxUY6LyK3cih1rgCZPxSpJ7GvuLZUQGju5WWaigterLev49bMxhjsTL4tECguRY",
  "key26": "3aoauAUmgPdgBKRJCCKHYDRau3BDKzYfxrgnTKeAhUBc89cebcPKK5Ts4FapCpLpbNvngmcqCCmxSyM5Mj1dJifF",
  "key27": "2c1Y8cHoR8cUCiF8q2TR9LHX4e1mFhCVo8BDH9c5KpYWmw9qdNWXR3u1e6tZc4EeoCQJseZ6KbJx3EU4FQpvPS3f",
  "key28": "2mdHyMEAPdwRvANWCsQWJJE7dc4drmH1rbvyBs2x4eyQuVPhtT58me6S9QpnaPJVsQaQnxVHk49RXZcbxyNCt8mG",
  "key29": "3TbcNFBpWoX1t79fea93Vo55M5xoXmYXsCFynoyKSA7TL6fgyz1tDfix3tXdxudGaLRcpztHdbskZ8CSSjRkTM2X",
  "key30": "3hAdMm36XjLDsGtwK6iid55mcCmVNtFVSD8QFpgQzFbQfwAXeAbRmxJooesxJyczMqMsu1ManTwx7J7ZenLBYTec",
  "key31": "2S1XL2rDs1Upo45MeTAr2HpMgBKoj54USKXgmU7nBNmPJym92VLS3qUzkZocuYhBbEboe8PGUqNFCSjCaAqyAyFi",
  "key32": "36otniGCFiiaGxBub8PncGATLwCocrFBZd1nWRDjd5xTSd1kqy24Ao8YJkLmDhFStdGNKEdAX8Qh6W9Nd5rWfEuw",
  "key33": "4UKEk4Q7KZNquTWgT6mRxA2cQtpQzWYk7SP6q79Z1y8Rm3u8XiCjTZjereixCe725NJvJUdHDTbtk6jNtuUHW9GB",
  "key34": "4GDqqXy5XbbF8tXxathJBLGnCUHQRWMy5EDjiojqxJ9FFNm5a7vuvgNMt9aRxAWNtTEoqTgwHZ8y5YFZuwPsHLEb",
  "key35": "5U8sNtowupmoLEnbvvtteE8SGkM5f94D9czR3XTMRnQAj93nJToyQXER2La9YTNYURPzEQ7QKueNqNrtSoHRmih4",
  "key36": "3KxyNwQmJvNsczR1BYzwSuiS4GBBHUdC1eMqygw2TnG9UQFWXeNajqforaY9yC45eHKViBCKhwkrUPMcCoVjSnVA",
  "key37": "2ryBkkyqb8hA9w1joDRd4kw9K7UHAZbgbUJQe417r99yERGUgaYKiDoVY42TABRvW2BjFKp52CaXjZLLpAw7WXmk",
  "key38": "2MbPepmxTcRN58PpEtYgA5X8JdWUCgBXcRW3XjtS53MT727xFtnoRuV5thgZrdhz6DjioziDSz6rpwHYSTaTi8ip",
  "key39": "2fhDAVhNzHKHiiXAtcJ3V6jr3yGSmiUmjTP97mgGzxQkoewvFcLstt4XiPvb8cgWR353D7SRNPTRjsDvGkP8n4eH",
  "key40": "79ky6FKBYesCpPcUtY4HstQy6JGYJmfviB87gHUpr9J3ycwFtggZ97BS8tG1JUkhg56rcfeWizJP2vxnMaPKnkm",
  "key41": "4JSDnfHEqG81a1HCvHtu7eT42pNcLqBfiD4x2QbMsJERtdSRqDz8y7sS4Znmh9Khepj9xVuY7E2DVVWoQ1QrQ6fy",
  "key42": "4vvtLcm2fUG4NAGuu3iegiYtVsqNkNEoh9AiLY5d3LkJTka7dQ4qvZmfscWjbPfG9dXQNXdnpiMfmYZc5Jmi9LPW",
  "key43": "3NBQtjcPsXSA1QnRi1KjtigUzrD4j4GQW2D4iwqHNFys4Zz4vJTrgr8WQQBmMJ4tZ1gsum5n6iJWK5aNZMN17eev",
  "key44": "3WXD15kjtv5WsBj1EXd8YGixiexM83LerQeQ63HNW8SbjFhbYpgba8WehAdrGbsRKHmPgM3iSgvdWL43mjyFtZEF",
  "key45": "4c7aiFxuEWwkmaic9qdbNRnmVbwue7eTe3xLDnaz9FL8ChwTiThypcR7Nf96VaRzFLb4B8HJyokA2m38Fp1Bwatc",
  "key46": "3QWxYZbVoDR9fYSJq4wSRdVf6FABQgFX5w5H8a7p6JVUF3Vnvp2bxoRNQTfCbt4dHiSCN9y56htSshEzmVpjFqpR",
  "key47": "3Lu43X28eQaP1PLG9MnDLwZ1Q8KbW6Zv2acokehdA3wJrLHAVKrUctU6QEvGAM1M3LfuZ8CVgm9XW5xyx35Hm55R",
  "key48": "TzbnQTWJoYW66WdPH8qncWp8G2DAVWCQZ2Q12myb54mYLXnUZ588cfV9se8BmFFxXmhx325hZH9SVZeWbdka7ff"
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
