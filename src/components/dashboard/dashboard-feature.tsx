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
    "3xgH4QnV1EPcpCx9FBRTeHTLWaPjpPQFSQeBwcJJPHpEauJQabDqJFpeVVbMV4X9sZs42WCZeYuCrGZv8wC4dwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VBDH61jqqZjtGdvcSikzay7UqfUPPT63dag4qSEgvyjKEozMeXvK9d8TXKAfR926yhfvsXEjymF8owKfyH6gtiR",
  "key1": "2utM9pn45DgrEBkYXDqyxjh7hoiiSrH1tKMLEtEajs13Rre1LHSb68jKFVJeES1Pw1afzhkGrtbd17qcF8gKP1Xj",
  "key2": "411vrL5wMWkCQiMzT8Hfokn3VbXUVYbreAHWyCANffZBkrs7bYdE3YKih1uUzCc5p6S4rkv8nXtqSedv1seHJgGx",
  "key3": "4MuUJFAaBbQWVKvs73CRDoqHjWnTc7xJaQESW3zMqcyqAEdKiRqaPgHLJh5nAU7owEf6rudZtrStBDdp39pck4f6",
  "key4": "5HpPsHhP9kdJzZ8gzBSXbJfjvHv1YioUV3Vqpukc4oufWyZG4C1otoN99SSmGnPahLSDrmrjZukof4gN9FaY3MoD",
  "key5": "2Lv7cXksZEsxsd2EW4QLtkRY8i5a33y6uHCNg8Pq2cHgbE4E2oS8fY3PeAucQ1iSGyzLFfhcB4bsckF8mTpwCWSo",
  "key6": "2arJ4CcYVjdbE6rgGXUya5sbQKZNCWczY7jZrvZGZjPcDE8pvCA8xMc5WoMKcqYgTubuybRd9JAmmAPsngzXtrrx",
  "key7": "2hoBu1zozPJgKNzUVw5LQndP9xa87TKZjdfPSUgPHQ2PA6rKKL5aH8NpPbUCaJ4Kg5r8ajJTz7CZ4L6vp1mqnz4k",
  "key8": "6QxSrhBmM4okhjQnssDB8oY5N2XR5D1XzWcHuMFCeSE9SaePm8KHtv4pjiRNaBMTQQ5EGodyW33feawnoNmYtNm",
  "key9": "3k8HB88c7ZQbnhMGA9JYJ65hFtZHtymW6X2Gb2jMF58aJvsUDJp3xERXJKEqkswyK7a6VB3RzQ8msKqkTCuxWFG7",
  "key10": "SToPi6sqKZ5kfkX4xt9KDbFCrSzYZf9HBd96EUmEwid5szCbajeeVTHe5zCgSexBDZb6Y4a6ahHKqAU4rpFyZ2u",
  "key11": "Q2194gtGJRnX4VGJhfBbuSUa9TTdzRiWFJpSfeReXQsywnUTt6dKtc9xqSbmcNc1quHWm1pbtK2QAZrEwBcfohr",
  "key12": "5KFg82dv2KMtc3hyxH86vEF6VLSifN1zMhZXuhv74bTdSaYtrgKdRfUBoECfyP4qMRst1bJV1TPQsVcyDmPvJhB",
  "key13": "DX1gxNdhbgumH2vni6UxmeMCGbxUbQN45vR2tu16iMJhzrVuHeSe9mH25zj8abG8HAs6KdAioznxNvMaYxRmpoy",
  "key14": "4vozGrWDQwbyxA9ZMgQpJEx9k2oTyyhPgDJkRKsBGLGTpaVGyVu5Fav3Bva5GULrPBAdUhiR1Rjcq56AufWscYRu",
  "key15": "vMJK882zXth65ktiFgN7mjYJK29G4tkFUf6SaXtFAJX1HHwRrYbXfpKYzuNidgG1pxVKjUfbE8MvFp7HGo8BLiV",
  "key16": "3UzDmamYoL1jGs2jAFdcej1zVCypM7zCdF2b3q5kZFpKdCJpJC2ZQZyp5nxrjNMWjV3GSjZWkyqc8kdoZQXfmEtS",
  "key17": "dYx5CPBMoW1Mh77aGvTibZhuj8ej1GgJKkfTQJZnCx9bBsR5uT9cAmLDRF9Q4D2n671wrdYvXyTygvU654X9gYb",
  "key18": "212MFDWEGKoorFY4fLoo3dLtDvutcaVysUydWsCaaTvzKh9YXJJCZtBjd4nfMeynQUfPV12oscUs5vDMgcH5E6qh",
  "key19": "5UDteZrJs1hsqe6f7YJKqRcw9QZns1nCg6X8VoKQRSzAzk5GaCRX5gp5khS1t3S98VLrZSyL4bJoEQ9WkWJvi3QB",
  "key20": "5VybWHRmwu2n5QNHb7yEE2pNWTkzywrWQNrrLEum3cedVLC64TT9MQWDkq5NkBaQ5qjyxUTDzSBwzPD3XDqjzXjr",
  "key21": "62D5cNoyysazwBkBDEfzDfMo7yP3Xtk2BPdG4EZfUfaFpKpt3TkX1eWxJbKD8Ss7ZMz4soNgXgmykFuWzduJyVEn",
  "key22": "22Bru8Rg9ySHB1r3CBsqQcvG4MvDnyQJY14AW81NnTs7m7HssWZi3xr6qo1ZZN3Vg1wxE9TZMuAJ9pidNwHAkTbZ",
  "key23": "2CLawNK8xvDGwW9LWhunTPhMS12vXhFqnAznP4q6b7JdbfTJ8Cb3YqwbwCWHmKBwjWHaWeVtce51VyW2gDNJ7NmB",
  "key24": "62qVRRYE6PisLgLUKz4ZfsrzcbqZN23CyWmWMKBmooH4W6gHf6wRFcrk2aqnzSfv2GAyPENjczJ636FBcoDN1wAV",
  "key25": "qBYnpNvQdzucXeYtYtgPpwY5QuVher1TpuDXuVKBPnkwtkYhBESzbY8VTtq87vYwwDSRm5WX86m7yyuciwWDvsE",
  "key26": "3F11Dn1QGmgGyxVZcut3F3r9Lwjtj2MDhs2TMGy2GdtcUDmNEcBofJpX6hH9wLARbsyYMkryCJNPHyTZKYSFFwwU",
  "key27": "55yntTAkN44UaLpYtXY68Nup8jWZUCSxT8af2KEs2jdyxqiFhsVcwvaAz4eDFBu5kjt6PW6c6nUgrj4ATVVLSvCa",
  "key28": "5cpQRZ2icTzdMuLEGU7XZwyeRudbt48UTk73mth46V2kkH4yAMGiPZjkRZKvsgqgvA3mFqwdSNpdyCNJjMJSp9eS",
  "key29": "5GXBF2VhyeW4zVkePHUZN6evLCzJ5chCB5VyJKo992JEmdWyuKftcd9EoBtVuVfJ5bHZWh1As7rbNVRqXHRBweDh",
  "key30": "2P4iNEQ1zw7iuJANSLFawn3YDqqmFA9zGWJ34i97XF2Gg3pJrrvFekoKDqj4WRLjVcSN9Mt16uuxCUSJAvqRTjup",
  "key31": "4g7UfD6Gt91wfiQgcewKxrDex548NbmdXbBt9wyB84CKuuD2u4TZ5XpuGy4nx4cHibdWiWVY5gZi4u2ArFT6CiMe",
  "key32": "4hUUjtSJC4EWratU5ddY7jUWyf5PdbUc4oDrCdeovMNsitZkTco9U9LCjsjN2ELSWpg8J26h3R1uC6qijinMwY9n",
  "key33": "2pn5KantfbsHL5AzovfXyLcY7zR8oyxxu2LZyGdGu9FLzRw5QGobFcjU37JsQV6UQn6ZqWUxcyAsyJJfgkb5ue7",
  "key34": "BQHEVvxBWECED8wuz5M8nnmiyr9iApVZGyttmXFGNnCkY6gnUS1yFq6RVoL6WEorz39o2bu1TaKmBUukYJQardr",
  "key35": "jSvHW7vPsoQmGWiWKCBH9W715Fp8T8Un2SpU3iQJbzpE17BQLXuBTktfEU2EUGJaMurGs63HPSGEKvnN3qhhA7i",
  "key36": "5KKqeg39EmsVg5mF1mU7hbr8W4bEZ65xEiwiBCtaMZfpULpYf7qptMBuDFSQArpWdtrmiJQWDSqTtNZbFYnm4CPv",
  "key37": "622YPjAKQ3DYR5GdiyzsAkRfDaHGW3tr8dBtZxye2CjoybKX5eS3ccXdDcEgTZ5yaaa6weaTYoGirGMe2r1qA31Q",
  "key38": "3eHMRvnHnwF4bqhLiwgbtRgfisak9PJgjd6tGvzxkUuT1FxvwcSzAAHtX8EFscmWsy24vieY9qkvL2QEuRP2xme9",
  "key39": "25Bi3srzEmKVDnPygJBLHeSiVoWqy3RzKpN3ZkA8RPVpEgwLNARycguCaYQdhAS38pBFFRVvp846ijKsZi7pjvje",
  "key40": "2FJHiZ9cBDBrjV9j4W7KzgRnGgLheqUJzKqdencAhQ26ayLichFuDUATEfgRbXTPwbzRz9ahW53QHBYYYVZj4dqo",
  "key41": "HVsnCVAFj2hZ8iSjGHtHB4NppEgWNFXCzd6B5YAdoSiVnHnPs28tGKWfjjbpRtHR3MtFFLdJWLbo3cMjhWjocTG"
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
