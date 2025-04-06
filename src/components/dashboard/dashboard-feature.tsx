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
    "UpUrYDLRkifjKxVdWAksDFE6j79SPTVZSJ1xM76EBH3sVjV2FgNxLZZLEuJLnZWwXVKyd9ajJ9PLvw8FJsaWQgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ktTjmD232rWiHyUDnu881EebnfLqKcwCY5k3ZrLJjB2KrE7vAtfWZ8EyqFgjxZhZruFvdg35Y2RzpBnnRarLpt",
  "key1": "ps3r9DCH85ckTT8dweMvuCh2m82AhZcTAzJBSRouptRtY8cadcjrCK66a2ETQqsk8nnhM4t41XwdxG3ScTAPuxS",
  "key2": "65CYqrBQD7jCEE6wkyaWGsrFZG4xmkKpapiSpmn4feNdtS4U852RT3j5ijDaWvwSfcFMfJzFjwPzduE7hFimru4B",
  "key3": "2Ns9MRzx9u4EmotSBngVPnggQWK6bQV84tLmn3qPUg4WxpWcV3M5pyMCs4wfQPZQnNtuwfHGoZbUfYkdRsniyf2n",
  "key4": "65PKycwWVauaPnT8PHqoUcSMfnwmbbLfShxE1nc8rrWJMSfJCm1YG8pmiT6UVTExWzeAvEmyM2Groi5qxuaTeBok",
  "key5": "3F7Koc8BUnvJeqsbpaxq1BXqpoH3xWgRjqaKFE3RKNQuEqbiNKqFQoP1KwndUBEvvYFEXsuZNwJweoZn8rAAEA7t",
  "key6": "3UFmVxR9wnugA2v84MVTHJUY5LsyRNZE5CHBgnaonuLbNj5PVo3oUHSFPRAXR8NEEDLFeFHD7WfMWBrKkaKDxfTD",
  "key7": "4y5hnH82NVDEaKCo8WXSeeAgJFU7VFjTNkQ8PrzgFT59fw81NUutia4MdSfcECuPx5jMuXUxTqTPzkSBUPGmmD28",
  "key8": "4wcUi1f93zaqCzyhgtM6WyHfKqsB6ByUFxY5LURvedyPcPZGxGgK91gNXNfTKd1rc7fJTthLVA9sz5KiRdjHZXNX",
  "key9": "gfJPUWNu7UJJki1hpF1TKXNZozkz7a7VsMXMr216Ctc97HxW9G6GqoHHNaJrrUKZt8ivtS7hD3SXTrviqrCSzQx",
  "key10": "2gtNGhuAxt9e2WK9n7QK2QaYqUHbf2b4W4HWW35B3wCkTkHNTQvnNgjk5DKQK46V93Bt21bUTXBmAEwLzYmM9wK8",
  "key11": "54uh5SjGLev1VRaQW4mEvHXNUdayVuLcjpZxVYWMRe4m8mLqvo8rNsHwYfqKrAGwR8q16JroiaJVSp8QHGPfwjQu",
  "key12": "3XUK5uX2HoebodHb74NWA5cgXqcqzQaW2ScYaHwDQEQTJpSGA9hciUS3BeqP5Bjw5JZPEaU4rHhq2eJ4KQFuULHC",
  "key13": "4thF5APXkM7qLA8HHusMeKCrS4gJENq7MLN4jZSzXFcvQnz6E1bTEz66HkbvjJricXafMKEJadkwAdHSVWGWgtu1",
  "key14": "27Vwa1rNjrcBKnrEWKv3yefeWj9iNSvnB5oQML6rgNxzHuf6CeHsSGMuUaZ2y6wFJMMxinjgQWe3cv5HmKTdDAL2",
  "key15": "2ECiLk9irQfQEXLtqhKkNPSrv78rZFyUuWPMTYMwLz86BEynoAPBxRgswCBLfV2QLrVE23T8GNgpA4byRPAePTzN",
  "key16": "3ohxeNrXT1T2NV6QWhuTHM1WVBKLMLie5rnYRVy87XzmQNKtRWfYZukQzDWb3KQAdQUX3iQfrGPqwQwbwQeugntz",
  "key17": "D5dzAU1oatNEgYRUxycXeavehemdLsZeqPwRJMERsHGM4CvPbMdrmipu5MmiMakdzNGdquHYFGtF1zkVG2mHmEp",
  "key18": "EgTRBmqEMLLBeZM9tn35jprAsJKe3LxRP5zGhhnVU2MYzRqLZUGTWboBfnE8RjzZMFSiNJ8YVjb4y6VMTUDkxYn",
  "key19": "3PaNLVu6xXuzyhBAzeBkFP63X737eLrp7L1raDprHmKTR5Wr2s8qwTLbBkA6jFYctAYkASPsFgZ1QDEcyMCDvTBb",
  "key20": "47CHzEmJrhGraSzeYZ3ynzh2tGYzhErAcAuULTeFX1mH9wgzpGfJJ4r6KP5f8rbyaTqSBh6xDVyF1dPTu7YKUwny",
  "key21": "5o4KoYCqhFazvuiyEJNfQWMb3aWydFpoiJZETiJt2PkcCajFjdSpdNeXgfJbtweVxirS5teBkaThPDpgqVVQ8X7e",
  "key22": "2LHZ4v3wfCtgv5KMb65TFE3vY3sGFDVJGsdMHPSXP3vso2DhaiLbrEY23fEHQmtpQbUUWFFKhc3fH6nHymC5Jkyw",
  "key23": "48hKRYEDX3pMpktJr4vRqFKYwu4T1Fs6HXefjyNPzw1Xkb54ZC6PmrJk66ELRpLEQMYkt4XiaYKpMksgFoSaCAt",
  "key24": "5FuiKK7oESj6RiPP6yXBEFfajURnEXaFgEJ65QqvLy9xi9y3FC3rgYY3L13T4YBNi8Hv8wCXHF46CH9B9Qah3wU6",
  "key25": "5KKkgQVzCFJ4AxVSnM6Pp3P8mxgeHEPViQpaSmgMLkKENtJrqcJwmk4LsXiAfecsx5qnsfwSdJ6GMhJRtdZNfSyM",
  "key26": "2hC93WGHbY6b316FdtgfaSjRc2DeuqXkJPRhC92n7qXNqep3i62DxQPfGMuR2pweCXLE9nfncnSVjXMAXKpgRi1G",
  "key27": "4Fo464jCD5frh2mt8PUGyjMP2wGHZCAvBbJrkyotE5wfsqWRVCHntGuDEf4mVHe7MmrpNt6fBe1L6rzfBkKVURhe",
  "key28": "4rq3HVE2RcE6KGyBhiKjUyjd92jJBLcW63bFAG4RUHERPFF2ygmb7CMSdy5fZHqmzj2rbev3icmF8UYD1WhogrNc",
  "key29": "2GgHM1QTWxJDjAoWHMQYcZDiN83RnX4625e8P7423noVyQTJiHQCQs6tDuYmprFr2r6BSQmwN8GmPGgGjNzMfC4s",
  "key30": "2W6LtMbc928s75hat6nFdXMSCfzwe7dkmAf5HiDXCFECBjt1aw89VXdrM3tQcBomykBVvEiEhfKWHQ5NJ9oAUYnt",
  "key31": "4eN8LxHDMXPwqZrUgfBVT6Zafyq5GGkBEVWdM1Mk2DA1fGXDGbkwSaZhYkVSVLsoWmJqyWWAriXqWiGS2zLw6nqA",
  "key32": "hYx8wUDM6uKkyCUegaufeJAk1Lhiss3BGcFqrawHLMbej1MDuzMyagqfCeJQ5JTPYr3rM9eEPRUrZLYgifkVoJB",
  "key33": "34SNSfDkFohn7vzLFPEBK2C9zJsbyrk7Ry8z6hKmeoeJgGXGAreLBSo1byuSvJHJkN6cUComUfDG1dYSt9HGXKz4",
  "key34": "3nX4nogF37924K25uHuN58vwVrNMPXamcYtDkgZXAV22QpJrZYacqSK3gzmPNi1bEYf5fdizdCQSxR3BPNBZkzCH",
  "key35": "8NSVjZVwpgLEEHtwkNeu3WEijtRGbiRjWXTE7qQ34fGQYC9T2NvYT3iATQ3ekTiqvCtvpAghZC9hAAmE79csX6b",
  "key36": "3QrHL9FuGL52G74tN2xXeuVKVpbPso3Bw6F96n7amkZA1tFPPPfKb3XDxpi8aniW3fmDKjuxi7j8MAz1o5kEKygv",
  "key37": "2RK7DUqsMVTrZjXgJCj18UZD2cJC3X4JrWDfTGujoacpHtAsozDvxbhejqD9GRTkX5SV3vqnuUq5ERsGctufUhbW"
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
