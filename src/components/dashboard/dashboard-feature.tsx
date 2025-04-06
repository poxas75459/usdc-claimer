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
    "2pRbw26CWvvkz1CQcsXVdvWKUr5452hVHqxjDqwdj3g3svTPmEpg1EYNV8raZ8fX7mnc3DeYKWpws3d2tz1zB4LQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KvGzik6oBAfoMs3WjLZthA2V7ojB3tAyKJFnqimcrnp5JJQ1oWmuYgC6iFYK64nrFm1majDE5jhMwm1bdVQ6E6T",
  "key1": "511XwxreVgwstfnmz1uTN64qW3BJxmpNcvucMSzuvVAnuipiEf7GJ7sCx6yCuwzpXrwRY2WMwizs2F8mZXtzaUd3",
  "key2": "4EakVY261xsrHp46qzrDWJnovbdYChuY79Rcq6WXDyWrzHen3aKuf21n6JpW2QMsvwaL14oeCRf2tFKCgxW7TAiH",
  "key3": "yxrM9XgUyjjpdpHszdycxPSHeciNkdb5URge21qtXLkS7SPrKaST4EMrE213oRvsYAB15MMdn3dKK4y6BHgSiW4",
  "key4": "986LR98peEoFPY2mJM8pCreUoxBhin6NKJ9r5f2YvwzNSSWiL94AfxwH7wBNbqHuxxeFLzpPd9Y9dsKz3AteQkU",
  "key5": "2QHsZtyztaDzWXQG43vyqxZfhbgbfCfdQBk5o87Js3a5D6GFjv8hhA6AK9uBtdHNtTfTkc8EKZUfBXue8tw1YZ6b",
  "key6": "4dnnKyKTA3vH1fgZCQgtbg2npDNEYuXYhDMtptPNu6TpA5rBGB2NukoEnQYTtwTxNgFERZxgguRgZ66jSkwBSm2q",
  "key7": "4wCw72sd4ZHNUHD9Z6sgDSvvd2HsDHXZBWVLs4Qf6FUc31UPcLbEGtrTAfzn4eD8NRSojtNEpNsk5F3XaJGbyBxW",
  "key8": "ttvxKRCbxYmjsJYGZiPzXVCnXFh8VtAagRwfdMNTBfwUwTrNCgjUugV4yfEAdvvR7syUPCeryTMrstjdVodWkrp",
  "key9": "54f1TCEyXQZWKFobMSnviXb7Q2pdvSFY1PqeZnM6vB3sSxMxoZLe61EQKpcZezjyDfTT8fsbiwxagiHgGEhcMbfK",
  "key10": "5nWcb8Uh2fR35z5ZZwX9s7wm7FECXoBh5zPuR6TyrrhGQQ1UGJVjJVHMAxaSMRtoYwW4u5T5QPzWZakm8T8bgQW3",
  "key11": "4HPNuuD6NCRHv8Rjv98EbxYmypXtR41rGdFV6sBERBRXdoiAAG3WhbgTrqqLfZYPWN29a7njEsW6CRHhBJ4Ka87h",
  "key12": "3JqGwJNuZYjSV6s91Rp5oFoCxBDwbiF1wL6EgcgJe7ABr7zkkZQKZb5cZSs1Uez6tAZxuLgpPpuw1kwbeS95zWiK",
  "key13": "3XHDwA9ku2v3jSazZVu2nibQZdJmSCv6NwENV3JmiuZogNPM3EwNSj5cyZm82NZqXrB9RtGcM54ae5G7oE7GEGtn",
  "key14": "5gUxs5j2ghuduGbdfwEh2ReHaSuZL4e8VdbtmzNKTCB4ttK8V3tLQ3SeK7Qe6foHs1EB8bvLrwQxqmwegN6QxnAi",
  "key15": "3AJ9My5ZzfebLR8JXiwAfrCgGKMk8hVSddUR6PaA8MYAPyKokZ8ZsBFyf9u3s28wJ4roWtgnhkD9M9CzzSEgTZgc",
  "key16": "5vzrJ1qSwwmkik9LuiDtTsZ2dUQAcCPPHXvgWegtqkiEAoKQdKq3SU39p8nQDiGnsFRK6xHp4ZtRFGmVRpD1oD8N",
  "key17": "5sZmqeqfWGBGT2LmHdyfsT8V1Xsgj7ZkpUc3CGVc57VPiAU1CxEDe3YK17HU1qr2Q2T7aHykcGrJWUUks9qframy",
  "key18": "o8k3cvYK6933WCBG7R3och3inZouCtBJbt32sUsSRWxXsgxUjHRyz9EhxS5og2YP3hnLeeKzv7jXVnNXKpJ1TxL",
  "key19": "5uof4RJUuDCMPQTR2gkTXTgw6CtkSgDhDBpHFzRdJ7rfXkQM3RiNDsZofGsneeVCnThFProJZYRCMXwdU11Fx4eK",
  "key20": "3ou8Vbnq2Xt9rWntgHjGz3qvEk4dnruzig4REEF2uyeZndPfb82m6WAj2gTGtHAVNyVZGQgSMXqfQLU7fVvV5stA",
  "key21": "3cstGCFxdYAG6dSxa9BZ4cryKZqzZBvNgC1tf8q9taRTAZVkDojNqeTuasE9yPrXMcUVe4VnWeW3hip1PLLwN7ic",
  "key22": "625dazx4mNGMnYNWehmYSJGwiLbJ7nDso4FQHESaSRyiS743UNN9LinzEC6wKnEf6sJ7HHFDWh9aPwE1btsqhqtU",
  "key23": "5M8AQ2DV4ozjMK7d14wmzeVwHVFY5ksTNDWxktdm4iiz9o6U58CdxH8yQbX7hHvy3uvDgEugMv2AcCGqFcuZzf7A",
  "key24": "3brGpwzQTcsa5deRmpgEB6kbKSTrGecNtm1dK1iCwK3c7G5GZNK8nc5cx376XKdp3L5Z7uu18XaNjQGMRfd4pqYm",
  "key25": "cQ5KhhMSSeqJj7uEk6Q2RKRksa33WuoQWDhStdZ1oWr5JwMYP8SeCziTmr2iZvgu1u1cbxz9rk38uZsV2bTwxQA",
  "key26": "3CpbEtgnQhu4MnxbQg4WGFnF35HaYJexHAyV5S4VXXPMMMS1VBg2e4ajw5oexnH8pUdFZtBZt2vanHjf72zdgkbz",
  "key27": "65ihEVf4KYUvMzBSVrEH8DBRmfo6n5EQHeMoCm4kxi5Xu5hrV5EjGnsCSLLHDV775HC5C52KfnsTXANahyV2Ts6F",
  "key28": "55DggZ18MQDCXr7XteaVPrtrGEF1CVEUv6wC6HofisN9TZf4gj276iRNZSk3aX7CZUxqLSBcWEGRcSmfxVmx5kCY",
  "key29": "4cHhuXiQBvwc237i8mYvcCmgyx6hMKLkUc5cWg3jHe55EzPdQRd6FPMssfPFwBPbwkmjHWpELBDKxUz8XFEJyFdz",
  "key30": "3peDf2v6yoyAZi2mhbozjmkPa71tpzVH1GcioFLGrqxj34LkL6pY1Hd1NnFXm9K9tvb3J2pXLqaGGzcK2gMEn8vV",
  "key31": "3iNiyCvUyjVZhiqZ79g5bjT8Ws7RuhwEupa8rUzTdzqzEpz19DdyoKunoJVimxN3k1D9XURDKXRv7t1xp2J6SWdu",
  "key32": "4TzMqswbFh8qbPa6Chsa8qgNsdgQHAro2u1qqTRXYuGHj5hiczjp2kdrokCnvs1jKt1sTy9ijn5yUmH51L9RMwJm",
  "key33": "CHPrvu537gdZXds4DuFFUTMyci93qtLFVuTHTqinRzFUwXREr8URoaxJ7aBq11gPoUPUsSxJWWK9J5QDdqaUAVH"
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
