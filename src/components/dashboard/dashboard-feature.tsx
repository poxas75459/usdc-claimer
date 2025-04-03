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
    "4Xk8QPApQSbnx8TYbL31q5unk1zbKTe9KrWwamdR3RysgDxqPeCvkzvteBT7iazViKwqQeLjEd61boy4RsveiaBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q9icw1zwRyWXBmhq6F4WXVetspDuj7aZurptgzRx8P5nAmGFcEQXR5YdJKqfszTvoqHkKSWAp4BgGGgvnirXVWy",
  "key1": "SbQRfgvhHJn42AjzcXc12eHXMtfx77sHTRHnKtmPxWYu7M2H3k8wCMwDXPimnVcckKUZosypDe5E12teZ5kChqm",
  "key2": "XZxeRHnTXaweasreVhuGT4jhGbqgPSFEGEMEjwYPAb4hWqdpm5L45msKfTXqSGfciTcvvmnvH1cwJG8YAj9HfYN",
  "key3": "3kfnvf5ZurpLbMrcqTk31anqT1mf6kvieFfJDn8Rs51HuQP9dSVFg7gSLE6Bv9Rt3FgJAHyJHxeBcw7cc8UYcS6k",
  "key4": "28Kfoxx3gc2Ci7Hw46CMb2NUjJVAcMvLvw221rDcTWihvHqYE1BS7ELveJCUrFTMxMbKjSCvpcevEcPCCZfebV3x",
  "key5": "4TeyA1Rqs8SNwucquiWFqJYoMabu7xusFUvejxjZBCgYWJUcnxWWuE5ebBEWjgYRm9Uhn41k37gVK47Phz8YFrZD",
  "key6": "5zaHBn3YBzAydE51omhjobweNuyk97TEt9jEaBMYoP3MqZoh4BtF1N6CfJPDcUy6EAsYicVvQLXVr9JW4kaHBGpD",
  "key7": "36s7MGamNUJbT3PzrqJm43EVZ4Apec1jabpiAz4SkXkdpT8GHHAwnYzx73L2RFsBm8b5iq53esUreG86Uexhkpv2",
  "key8": "2yrRPYjnyFSZsgc2dTSuSdYc5RxU5ymzqUPbJnQoZgNBpAB3CMTRYApdntRGUercmfiQDGtbFSTFFekNBG4JBbYD",
  "key9": "3iLoVtJ77YKj9eSFDvoMu4eRdvicCEdZXtaVgEBeohUT1x6zBfZLre4mAZtqBrHDMzJAux5RPjjxS39ra67nSTa1",
  "key10": "5yd52kgYwGkhv9Q7K3WfvWqGKSttJHo2QfbcZZpXZYnxQR6PTjL2vrLvAxbgQy1DhEKVRG3ToCaHoJjfvhkur9KF",
  "key11": "3gvXcsKcPLp97LqKcLoWNdWAfdmZJ2x7mXzV1EngdvtaLg3V5BxS4vU1gBKW9w6PPJnPbdwPs1MeeUz9gDWwjNP8",
  "key12": "bDiCAsMN2xxxHpjDUWoWvFRnYx5N1aUWcpK2b2QZ8oQE73CZVCCgu7wjpCHe7776ZXdhGzfEfsNaEbc8dfTmR21",
  "key13": "5TxnhDep24CQMubPQDPbwCRK7v24Z3wQsHq7xThpiNTQ4YYLxUEeLHz5xeRGvMpLFeVagxpK5EtRybjZARqGS1XP",
  "key14": "3MSuBqn8haBqCiS2hTohi2kmEkT3NkcRJ1uKSMrz356nFhHSTGzcG4e3XRvX9c9iAuNW3NhX5iPrMoihfsXfEozP",
  "key15": "4TmetaE2kfcKL1hRKML8YGM86RuUwCqYHCfFGV11HfNjYGYv1Kd7b224GR4V6ojePWzkTvjwWEKvYStztmB73WR",
  "key16": "TxUrX3aKLRMgkJW4Mzddw6i6ML2cdrAck4hJ1EdVm1fvzukjzDHFykgVTHmi7Uxex3eNxqVzjmYSzXTpw22UJXH",
  "key17": "4gTYJds5RoaCddds1DddzAkKfYY1AEhyqmL6eDcDsDxRNvaWPWgNirMr6D5rZK4mdpyDfPYi5Se8p6LV4SQ9UBzE",
  "key18": "Tg5jtC3PiSHAYkLw2nAxWaXnD8vp4CtbdRNi7ZGTfQWGzYWqvPMs5Xj2KZ2n4JHezKfCtu4pdD9zw4YKBUBrkPp",
  "key19": "5WGqLgrnX68TFQzP5XY65hpTKFdHbycoVeChqWQqWzXmoacfCRrh18iNbwMDSr6QkGGCz5KWfn7tv6vuFr6caoAF",
  "key20": "4qGjvepkEKusmc54b7dU1Kwp18ssyagUBn8DNvwh629nN81h8JR5bsrtSorK9yD4zQkCiMShcsyde5DxtsVnsQtx",
  "key21": "3NGAWLEUkRxD4oCd5JYjEzPzT3ozFzpLFHEyd77pTWJ4ZPYe54wRx1ZuUyhmefvuZZDA6rzKk2TY34Lt3fRL32kN",
  "key22": "5gVJuNX3DvtiA61WUrJetcD9Lsx7rbq8NNjqAnqFw8Ns2k5zyPaNgGN8akp3z1sv8fofMaJPkjVroT3JE3C1XzCK",
  "key23": "4unhLwyccK1TsNoX1cAooon6DGTpWNY8YATHdWdjTWMAUZVFtG2v4Co2N9LjB6iNwGXU7f5UhN6hWKCdBLvRJRER",
  "key24": "4HhSVAqTFPYxntCcX1fVWDyPDWo6LPdV1s1eK8W13KTjpM1JrQ3pvtYBocNuXRxkhaxdRsF49Pmkr2A9yq6QV8g1",
  "key25": "hLhdPCaChtQgGSdvuabQjqXQUEYqW74qAvTGZjEStFhyngvhhQCoZEfRiRdaxkvdusKLd3cEao2dkuxbPaRhdnE",
  "key26": "MaG2786fVkjr2Ym6aL7TSsLxPiKm1ryJdGed69c8pobxQRop9arjNUjUkxUAqC8U4aJyf7JnrrCoWVCRUBcW4mW",
  "key27": "2G3L8HBp1pn6g8Wt29dQG4gW9J5ZEXX3FDZkK2ME2Bkd1ud6Ev5MJiNTPGkPDRUdDTMho49rNytahSiB8KfoBvja",
  "key28": "2QsrvFFtsgthBVY3iWvzZZuKkM5UGiGuB59MzsYyGKiTrZoqBjipzTj6Qe1WhYoqPEnKPvaE5VNYjX2FhuCWfDF2",
  "key29": "48LKMMCCZgT6tgzmW2gAj9EEjtcQoE1BawCNqNYoiRSeJdkv7Gv1GkwozTMn1TQ5wGdG8K8VKNUXDG1wJuXkgdXs",
  "key30": "32mMfgkPYGnx2XCAADcbvrzRqVnMXnvKv43ACKpceVvM6ZAuetFstWdouVEW2Ua53vFLiipqmKBBHrsn7r9h2J8R",
  "key31": "4QsqpYPyEqYrzJ32FnidRF7x3vLM4zJihQ65ithy9kbZDtykiaMK2GZx4p2kGzDKPcvmmdoDSRTN8oViytNeJzKM",
  "key32": "N5SHstRzRBeR9RAHMHkNvGKGv33YRSMBaCwwrfzEdAj55F7FFsMth3RcnUtugwzn7yKqaa7MRYkWH1Ewz1D5Roo",
  "key33": "5hX4akpzefRzCNYKA9FEuzEWVRYXkZLWiYziio2qbwQ2V5dg3CC9zBeDRcvb77uQ4Bh3TQyyY8KwjrhHP7aPVtzw",
  "key34": "5W9WgpQf31NTCbWAw6XSMFh5ndVU5VZJJhWYfUv197AtLPatmSWmeMi7MNCoouVjUQrEioejAERagHGqgAtPoT95",
  "key35": "4wSkmKG8QQcBWbWFP26wHo1u9bQKYki9yzWc1T7YNV7XswqtQVzSJfCMaWxFmY2hn6t3iSUgH1f9jvo4psrqQ2qw",
  "key36": "aK1CPbozf7EB5YYhyNnnoeYhxy59vpefiH79evQR72kRGHKHYD1ECXNvBgUHRHdJoCnw5eD4nWT4L4QMmGy4KFm",
  "key37": "R2sDbJcndv946aC4xULY57iWn399fZU2Fx2EZsZ1PdSRL6c8NXLMzBCzMqy1CTnqDTFpuuEisbgkeo7xMe3R9jk",
  "key38": "5CsEnm6HTgJetZCaacJA4AJk2RW3AwHLNWFs4hxUUvW9nFVU6toLTCdnihh6yPzUzcfexoGnbCA644TTKKjwqqEM",
  "key39": "KoYVh1VsXx9uRLt5z4SLsh7uWirBNzcBQhdohSa2RZhYPtYFDYeDuEU6x9ir6Rt7xQuSMfCDhmp4Fer69W17aGd",
  "key40": "mqsBBhnG1y8ELq5vczQAUq7bHmYJmiqzhotcS37mkYVqun73vYYfRbMqi2SGZ3Eb7SiizWjrstcJ872yHuhhM2T",
  "key41": "48j2dShNKYiN9x6uDHUpNK4Npo7z4pj5cnBaaULBZKXk6WHfaeUQmutxAVwa8mW4pysz651oAmmc8i5Gbh3VbxF2",
  "key42": "5yygQaCN8YZc1fewcQd1u23FMYBYhbMXiddaZdP82kkke7FeHSdVx6Qt31YLGWVnMgMRav6YLz6w6rt46VZT3w3y",
  "key43": "5fz1nTwFovRKEq8fHwGE7evj7AuHjMBcS3NPwEPvAtHxHVwL2RLYB2u9SML3ncxSAH4YXQdRXTPn6MCScfxFDqC7",
  "key44": "4rDUMq17cmok7wQqmfGJEsDqBtiT3UzGgtWYZBJhefJHnJDC2Yawwkad8cPoELY87j4V65fQeuDwLSrgLUD6P8M2",
  "key45": "4sdSEPFyhPxGPBvh21F2dULqq8AbTsymwM1wS6taDyd24o57rLxPWxDHEknc5b5zpYCbhdBtNzFLNFSvjUHdn7Rf",
  "key46": "4p5iCgUffh3DAFenRAanhnGrKMzbC2wiMh4a5V5C2PDyRGZeHKC4SzT2GBwJnc4MuhkTp7aPEf2jWBSJ9w3E2tUS",
  "key47": "5rFNKA9uS4mVSum3C57N1RgXFFnr9QL5VP7g7EtQvjoTVwC8VTzeCojxa3KK83n2inkGVTJbM1Tm2wq8mqfrtXNQ",
  "key48": "63YHeuDF6gKnVia53Udb3v3u6RQ1fugnMHYZwER9GDqjmx18MVj8o3xH4ASpp55UtMwS9h9XAdnzG6aaXti3qxYc"
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
