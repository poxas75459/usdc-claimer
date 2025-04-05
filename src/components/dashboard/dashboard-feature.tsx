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
    "5ALgJk98WvdR2GoWW2Uk8YgtSBrSGreUUpWkzZYfo2A8cWAGJCfHNe8kXFW94xrigLjibUuE3pdtNUMmeg83QpSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PjVYfBGtD8BCQmmM5VgZBt1nKaS59ymvvysjdwfqzWKuhDbmFE5wVJPEmU3SqvmMaCsz6K71PqWTttwmqHcEedi",
  "key1": "2zyxc4MRTz3JNrDPqrQCznLwSzFFkkqUewLcHLfDb8gHtnPc5PZEJizg7re8GgxLCoaBiBuh3bDsSkY6Dfjx43e1",
  "key2": "3DJLyACBjJaE7cNbeTkJi6MdeBfRVLYCcEPJefCLdXN9iR8YVXmTBRR9JqGmw7yfA5ikk8TeFsPhBv61jnGgshXP",
  "key3": "4EuK9JVygLkmCsb6MYm2SmH66H2sKMrkF664kAW49NnRMPTcuyixq6F6i4QTgKCo6yoyUwCn5N8kWD5Bx47ByAAj",
  "key4": "3DcK1LaiPjSNeqfD1EkQabS83FgjFZ7i2gtCBfd2rv8YLYF5MzqCRqmJLuNTC7nP35SXhsBGm8m2HpnNsMfbSFJb",
  "key5": "3gTX7qUnvTQk8zEqAP1Mp9XasWFupSRMJ5n7oh8Z2Ai1sUjXdw9x8vAHMsyUmvqPnp8oTN5ryExY7VWRMwHv8QVT",
  "key6": "2wtxNQdDcNCo61DcG8fRC4kFi9CWf6DfBuPJ4r58PYPYZs36VoGpS86KNoUhovL33sLXACau7ZtaWs1HAdctqJBt",
  "key7": "58KX85driKMVe7AMufEnpcQxjvbCZMjtUyd14vuHPVL7XiYkyeqxXrGgLAiuq3UJg32ZdHbNQSjyF9GPicRPft26",
  "key8": "5BCDa4jaoPTtYiVNr5fxhCLKDVfN6A1FAPMfB8HbrYtNBirZanNNHTvH2h16eBMQNDd1EBhbgLSQEBJ9zBCd8WXh",
  "key9": "5EMcpKvraLNWzsoR5WwnZ72ot1i8aP6vcPXRiuPNWcDuvQWDohNHHKPagBZmAdYgJxLfpE1r6Wmswjuks6h5mRiM",
  "key10": "4zmTsjvvwux656h9SBcE9s14cfzhZaovK3uJRiMC2VKjbCydYpUNPCGye7AZXZnKqnpC7wfg2Gff3eWsL2vrfseP",
  "key11": "4CyHGwjxpyhda3tMp2g49AU3diDbwJVUepbGckriHKu7MJVQsYrP5UqK8nsi6eGsmSgj82AK7uzFxLVY1LNdUHJf",
  "key12": "4AkA7gu1bRpVrXJor6TyQVXJJFYh9G3rBzsdMv3PjDH5Ak5mLoSDRsYvBpAKHgHxFk2sjdXHt25928ufEz5AMHZu",
  "key13": "66fP81s2CbRVpz7e5scjhAaKjormU4c1WS35fPfxmAjPr7KmZdhmCopX2mdbDGWmLo9uyugVY4KRuGUg7n5Uny5S",
  "key14": "5ep5pzmkoE4iDfJSVygs7GyuurokbVL9cXuVF5qTdA11weKKyqcpdBMwiaBh6V6bdYewKX66xnDPwMmYDkxXVoyf",
  "key15": "2hHx1AfUwffMEh796SnG1gpFvs5tSuVJEdttvfn3aUXJn2uMQxoHDYo76VPVyNJFGSC1fPgRm1XaPqKCkD42sYSf",
  "key16": "KXjEEB1BWPnfZcgxPMQKRMyGKsCg9jqBJUFnoTrL6op82LaUk3FhHSzmCxgEogb7bGDqG4rgMQAoPYPnnXGAsMg",
  "key17": "3KMXE3ssXoyhZ4TEMgjrqcoDSDquh2GVYq4NUNXbTf414ZaR8tmQkHiMtq5u2mM1Xu32TXAiyCYR1AoRgVfrreN3",
  "key18": "3hT65rxZLnVWBQT4uWQP7M4SV9Go2WUZMcM7EGDU3HHKSRN7oXhnBgUxajGeNwKuG3cxfHtXh59BvxjSkiEvjMBs",
  "key19": "5Bc4jqnEoSuMM2WmNkxKwvU4K79q1pxVqfuQrzThozxjEvjaiBKzXDpxbK3AgyXqyeMGmtRVQSHCAHR6pCgoY9gd",
  "key20": "J36pzDUTWY5p5ueggRrZ2W1h6jci8be3FstsoMtf1S1YQzdNk16Vu85x7GuCfsZJT2KLv2tGUnid1FhAyMNUhgp",
  "key21": "5Yy3drBAUmXAmmaB5gZCWoQRBxqQB1mRnfpfyHXXpE1ihNihJE1zqb52Bu9oNxaeHsmG1kdB2BJGyE6P8rkRunQg",
  "key22": "5yvBM3WjJuHEk9ix1emi5xnTxTaNg1wD7uzhwKvcpmUZT2gqoYhpk2CohCzYo3v5VBpwQeo4qu3XesSymCuQnzni",
  "key23": "377hhgGZ9X3NsCjnMu593woTw9AYPTWGjgowee8bjrjpgZuUYtu4CqWeDuaEwTCHdSddFr5hQnuRdGmUBAR5aVNK",
  "key24": "5pJwQFX9tTurkMkiybtjB75pJzjVWQrHXTKTUibXmyXGVh6GUX5mXay5ScgpD6k8NUoTTFYiwRmNWDHMgW9pAEHk",
  "key25": "325Nuvt4nWFVFjud3aNzeM6fkAKVp3NJdt91yLSav6LbQCz9foxWxyUti6YmNCiDtCYfJ9ZqwBJ82fBRc2tJAGv9",
  "key26": "4tuWJRWQoUryLowswA6Z2cwW6v91Bo4vxuPuswbZ7H7fTFTNXR5hNdRvdfEQfsc5mT6SUwGG1DSfts6Rfs972j4c",
  "key27": "3kJcZfmDyGE6whJPBnJWXNfKjBaGcBqpGqz1ChLsuWvgtqncK5x7ZUKZrYbHBEixjRBpMYPujPdHYeBufGWWMAaT",
  "key28": "2M6QXM5Tc9baBjTWoaGLcrkH9jVv6kCZd7ZgHdDsbkdkJwA9534x9AVWZPBxnKcWMoeLX575vPvcw77VXMdxurh8",
  "key29": "39K4KQCMA49mdEeaHTYfH9rs5ZGsUnjD4sKdr2HYHh3j6ingKLKTMLsWMp1nrAi2od7kv8UcWWs3pvJvVsB6iPK",
  "key30": "66MzeG8qGZM7zHGvByapMsPmXm4Q2S1oBr9TE5avvNmqo3E8Q5B9bqsghEyAsDvQfFDuXaK6HZqKWNTt74WtKmxX",
  "key31": "4ojoAQ3s33VNxZNw9gDuFXKQmGVPee1VzXeFiWbKMM1z4SRHZibqa6GgCzK74CWAiTMtzg6CHZsqtDGcJrrm44eY",
  "key32": "3XiUeyeGXmiCpinasCfJQgdwfopXu1SJRrg6cpXSZPrzzyRjWP4wzWgJmbxKdRk9JT6ggxEVQ6VEzgNFdrxLkqQM",
  "key33": "41HmePeP93dL8dSUYhgL7QzxPsFuozf1YbN6UhBb3gfobHaiypCLKzALeRESjnwerEB2iE7TNDPUVktj9KT6isJW",
  "key34": "552xFF9DyDNteVo15uJ5k5UYvRm4Kkxxzy8y4wKv1PRJMhY6cd6bngCCLqL2V1TeiGRuSdDChNVg93csxT9HCfNo",
  "key35": "3KaMSqNS8GL157i5MnbZi9tAKHFcDjiHntib6NqVw9jruLCLGhQMEPnENPKHzifUjogiv8BjYRBAB9yhGpxT84y3",
  "key36": "2x2EnMcDYxJPt92Bc6DUJnnQ51oNR3cnWsQbBc5MigKGPUaRSvVjexBe96RkuZ4vqrdVD38MCA4aBvfttc8ZCdk1",
  "key37": "4JvYpXUbwpMG9k14fJ32WAdB2RqMYu6oXXqffomPiJGsEfqyLoSWvhQ5VbDZGaKqwJwXfd7cupjcCKcBaQctUir6",
  "key38": "2xfDcFwC5YLkmF56M2F6eDNKGs3BDDgBpvi4RHuWF2YmNrf99Myj1abt3cioagFe2kuTNZX488hL72ZwB1rHAj5W",
  "key39": "64Q39Q1XGUiSSJWhCGfbP51ydeD4ZDwwiSpWtU2jbvNYyvhWpokuBVeFYX33b8d1b8hX51DQ4GNUNtFY8K3BmMyt",
  "key40": "52Dc3wrFfeRv9fxPi9y3QhRjLLH8rKNTuQHNyBu4wFNxpJhrraBNLFSwwMpdPLbK67KUg4ZMtXAqw4LKwokGR7qX",
  "key41": "4wEqswXp3swFcBETevx7SryH96CrwFzjgTpiMWLrYhP8S8r6JuE7MLMwaRKWV4hF4zc7vQVPdUbcqte9NYYqXLmj",
  "key42": "5zz4cDDTX82vUfJUdykJmuBeWSFYobcsJeCV3GCAqGpksJoC48bkDjPf9fS3wwLLc8iyT7aX6S8X6u7kWrAdmud1",
  "key43": "2nsHH1VCAXXuwqQB7vLtqa5fccLPFaeJhfSrcQYSssAzh6gidSJRMBAUWFTsZSKHJqDL4pZnhZ9xYySCL9VmG53k",
  "key44": "3M4XU6HT2SPqg9dahmMZbuouecygHmarXGaKFBw4E5A1VLv9iK8SZBNNQgyHg6sSvGDxigkMPhbumnF8jrdRhwF",
  "key45": "59WmdffkcP9XgR7gEwaPjoSM85puPkkqKPLKh8A6GiTAi65USZ5QXGt3wKt1UcuirgRcDNH3cVt7X4kHMRTewWd5",
  "key46": "5PEJ7eXPWoGVyjxVVizCT3c9VDg925K9frCL2P1f9BZtiBtc3XPHvWq9TWanbW6UrGnyzeLXf2HskuG7TxnQjwHj",
  "key47": "51k6fdYQtWPfhvzdhxab1BNgCSGdUFvEJonfKHsxXZtED1X22XHfSFKwEpYPDhBjrmdcic1CdSUyp8SabyvnAq9r",
  "key48": "5FwARZEFYJmp9inV1W1UU92j6qmhBP1vRVC1SRujK12tkJMnzsjjwut5rrMeyvwC8HWAMxT3auitFGjwy1WsvFra"
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
