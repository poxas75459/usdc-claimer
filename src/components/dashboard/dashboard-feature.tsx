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
    "4Dqy8tSjYASnhACvp9ZMJ36yEBquvx27h89rFndD47fXLqar7Gb77Sx1tqo6rgBSFg7npZ3aDshTgVpFCYegr3np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DGxaQYGxT5BSwbcaMj2A6xm8QyJwvafskaanmZ6A7ohvtHTs546QeeWw6poio1oGqABgcnkBGZXtn9SnZMmvfph",
  "key1": "8SEPWDUymYdTmecxojDf84bSJVGTXM7a2Tc1Xtvwtpz4nohUrKayoMY32iQB7uu1tH41cusMicKHwmvSZnHiw64",
  "key2": "3QxyvRnJLNMxipeFTdtthrKohJEMynSXCBwpAPEHAjQWUVdE1dBSsb3Fscd25WdztYKgjmDwTQVGECjSkRyF9B9q",
  "key3": "BaykL9kCkCCsstrfTBaZJqVNk9Dgj8LwAycNiTkN2ZKEAWWLwSGfb3yNeGjDZFuE1GK8fbBRrXXiHNT9xXZvW2U",
  "key4": "3HLcYftgzNbSWJMsZLd7KoDswyvoT7TDKAuczutKygJacvhjBNTogq7QZRaTLiZyqhdE1bDQyCG39TzzDkoaLfsM",
  "key5": "5pFSVyjoRhvwnAxj2giNVwAi6cGz5bpDEMUatJ996eH8ebMbmoKS7C23p9U34WHagN9bs9y2wt1JHhHbBzcnLHkY",
  "key6": "jNbHAZg8KWSbHDwSPaQCguu23CyQTDuESaR4k3zWGowBkJPW2Qj98Wk4ufwqWFRntv1kVWRS6gVF1ypJ2Js6aht",
  "key7": "5KswAMxNVKKzio4RrCoRHr8hUa6vJP23JYZcSwUkx8N8TdXzT48nAD5PmvbA1GyzDcE6WQvYYxhoB9cmeK8sxDMm",
  "key8": "EgFXmajUgT4odcJzRuqMxKHciJcWFhWV1m3TBv7rCJtu5QNEwJzKSTrdqN5Ve1ncCnjSsTithkw2SAnt7XoDYNL",
  "key9": "2P4AQEMN5GYWRsu1H1GsfYAYQ8vk1HiDvKWGZiScWNt98F9Q7rugYPtTiPA4QRa68fpnqpE1EG8xjE2F35Bb3UkT",
  "key10": "4e9QCcWGcb3bvREnBinygze38RVeN6BinSLTT1eEB8HopUzXH5GJ8xjsYGtQBdGfe6z9PDjBNrkHMK5ZAQWUbMiM",
  "key11": "JjQxsXARQLEqGGXQkLKr68qovuAR5AmESqfZbCbs7cXz2xC6z34wV3G2cPRLfhnNjRWvQc2oGsWyGdaCAhw4HKR",
  "key12": "3yP8ZRfGU8W6auRko1MdEHAp7Nbxhd3cgugQdU5DDbSXyPpiyGQKMRxKm9xk5e47PCpLEe7GW5RnHABU31t1gZ7V",
  "key13": "2B6k62d8aGFEKZBTJDuZkqDW675x92x7zkorKew5QxJ7aj6SnA5UexFXz33nU4mTBn5kbFyUsR5xfriQmApDzPqF",
  "key14": "2MgJH2MbapVajm8Q3K4L7eQ8utdsZhRWhTMFggt7z6ysLJVoHEz1GVJg1BFzoMUdpFxtF5MFkVD7M7PN11ZEnezb",
  "key15": "4KXuspTnrry7tZ6StzSHf4iNHBUFgZRLrX4GC9PgiXD8ZXYZBbBWuSopnbERQNfDjjra3ckKSgoL2oFCdhJbAKin",
  "key16": "2YVSMHUnTh5qnYRp9xbhpNUBEhHR9uNFJF8othqiV85decr13jpwQVkMtp1eVRw64fJtcrfhZqHehuNK7kCTxSaR",
  "key17": "5tcu5NndVo4hUXgRJaGgnz2WGLhkNK1PUG6qcE8bAkvrW1bgtmeBQ2WWb7mCccmgwNoSdfGiDMjwB2rqgiV7qh4h",
  "key18": "5HfdaRqmastkgDtjVr219P27NQDwqYpUahnVUbZzFGJW1L2Pd5mhvhbqYiUzfas5YCJqwUQ6v9GdS4UcrU21QFM1",
  "key19": "FSauzkH7ysddsFHMy93ra82gE3aozvmCS7kGwohRfbwQiDR2r69qU3CMuHdy4VWFqVhcxwBiLGubb74WdCVDwfr",
  "key20": "2Bcw96F7XDgh2iYogpYFxSkngWnyerCUvgFUF2e8dNYKnuvWY3o24XGxXt41Ywu7hyRQYKf1eWYCXkCjj5tKzTtc",
  "key21": "4WKZ7D3rr5g1dWDjhoJ29nFZtX7tojdqeb9bfKY1zUXYwx1eM2LMnme5fXKntXsojwdeRRV9QRDsNSH4ox2w5Esc",
  "key22": "2FCsebkw8cyhJd2D4weR5K3k4KeqWjwK3iKqRyt3pZ3aFn8SnsFJkYQrV4twjKscSGeLNPVDNwfAh1MEpsXLNnwP",
  "key23": "47REhB6EAqn6hevkDdNnkoD6ZSvN6KuoWiG82Ziyr2dYxL9tq8q7UPruU3xeUFDj9RDChjUFoWhG882FucBMMjyi",
  "key24": "V3vugJuN1aZMSNtswZGD9XfLrdAKcYGKYvLvEqSKAVxRMWS2JrqG95eywhH61oRTG2yeV9AQidoooJEMc5i2Nm4",
  "key25": "54nrXPreMamTKG5eiJSBRjMN4S7gM4oY9vAY2FxDx15fhijwMgBxdExbwRP43TNdRV8UoWPkxz7qEfSVbinTTdhj",
  "key26": "fN5dcan2JY8cMSzZW6arxsMBamfJgBo7kcyMsezhCVsQLKjFXHMWRjZ4dzL3QKQJD3wysn8vdLiihQFsdmQtZvn",
  "key27": "3HC1sciiTcAVTKFXv6EA4UQ5ncEc1fzbSr3G8U66zsAU9oiCBFaB8WGLrugSMYtgjp3CKye6tk7EWGZEbxaQpbLb",
  "key28": "3rLRubpHQzeDcky5QwTSVvAQ1JiiR5YC7kKbBCzZqQh7JQ7mkmXk5vntjddQhsDPzdFWh88RPU31298nGJwgDfy2",
  "key29": "28W1WWZjPKgXBhNHA3WXPsgbzvwSw8C876oBhptQQYB53YakZSpm9evii7TUMoR4zbYVuuhhdYLvkXUnSGcYncVh",
  "key30": "qCJAiWC7ffSrnj5XzixUJHafxjdmx7DV17awNu4JiaBFDLLtsddaBZNeaYBjdDHgUFTXZnCjYibLDVrhyBcSSQy",
  "key31": "2ZcxkosqDroxhZk4aosEUBpyHng9RA4thSKge12M8KCGbZ1SXG6cKaCQvYFUkCevvA4cT7gCCdLZhhRFgJ91hQZo",
  "key32": "2VCKEfVSW36VQECVfJixUdRDsDMde69zLo6f7qHbvf2Yw8K84cecQjZ5MrFahp1Hjp6EBuY4hZatvwWRJ49XXMDr",
  "key33": "5p2f3ckm63dKCMN1Z6rBDu8bwAdBxRNTMSqHovGxhx4gEyZnpcaF4oDLjd77pqndoTM5BBFRJddvv3n8mWjtvcri",
  "key34": "5qgzoJsrQQE2u2LQkkKUPXQWj6Fu9Xm4jGmfAEX9AF6Rp9K84CG9Na8B7VKuUBK5n3iDSLBz8GoL2JBY75oC3R1j",
  "key35": "4YX5uukyGivawCfDriQpdMTgWUx4bR4RFukg9c1wBWSWqY1t9UBqHyZLnXVCgDzW9QsUCyK2smFBKmce1mmjavod",
  "key36": "2S2wcNX9gvXnTzCbcjRBrQqmmKNofaZ1ugfCyTZt2W6gsYrHBdRwyoqQK36PH7jagJ9p3j4rmwzdqewDJX1ecPwm",
  "key37": "FY5ya3Wt6VG4bt8VSymHviyUvhnLWji9VnNYg4eXKdVuDk3kDMqTVtw7w3LarCrbnC4X2hCmR9jS9ybKdcf6Gxj",
  "key38": "3UWB2xWuj4oQRF5uXRZBcdR98U8oyPE7yPT6gdj4jh5X38fKNMUWF2i14wg8JYa9pT8infPYndqbsV7bPFcxa9rf",
  "key39": "44J9iAWfxPrcuV861iAziwk8ThvGac6hcqY5Jyg4L8DHZfkhijggFL2LuXdBsHevu2Gga5xeFVsaZXWjxV18sWtZ",
  "key40": "2AKJ4JBzDYsMS8Eiqb3iBuAF9sbvuzXZ53wiKy99FHmGtWTo9BeVpcdx8ybBEgvQtFXq5WW24VmuFxacw7YgVosK",
  "key41": "4ykCqaB6tgfoqsc29VXQncnovj2Mfv12hei2yZPEVYPe7Rxiyj6TUY2AWG57GQducL1SgqDvFEPt3L4g4d4KwAfk",
  "key42": "41qQFP5WU13vq6Cck1ydzHsjbkxMMLn7c1ThKuTUwEYGpAfmFzMLgT6jTaun8ErThEctwMK6GPf5G4CHmq1FxdF6"
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
