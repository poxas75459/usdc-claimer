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
    "fTpUxadpBxseGkdEbpsHMoSy9XwzAVho9mnyzsqgqYuv5k6DYm1F9RkrKzQNkM9qm3fPbjsjr7VeCjDENvtyDbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38gSeEzFbB8FHzygSHJ6K576PbjszYNcLwRUkuL7Rdy2Mms8Xgomzf6HPSqogy2RkgdzXqiGuTKqzGvxVqtcNYva",
  "key1": "5Q4NWSsQXUiq938MsYxdKbDM3JDQbLphv25gWg2PR4uerq4fSdU38KXojUnbSxRqHAkcYoKijSbHBcG3LxVvAgaJ",
  "key2": "5mxn9UP9L23sx3n2KsL6vPA3uTHH4aPQ9HeAT778FTcccB54DAyQXPcW7dypFQ2DyCCEw8EcNta3Ff2ruwQaMytM",
  "key3": "5VhM9M4Bymv7WgNVvCPaZt4WKMLosPYDsNt88hsvJQa2ADZsLv7D2KuaFtyKZPZZdjaXZCbgajh6D12SYDcnm6eE",
  "key4": "4e8gXANkGDUCcnyxtt2WJQS2pB6gXuYiQtdbdqW3gAaZR7WWgiMzaHWxkyyTrfRSB64wStPugfY4RkbLR19nyHyD",
  "key5": "5UzeCLZVQTEangkLrNs52dSWDbjGMXS2WkB3AcWCsNKSNWRyHq6APk68yeBAuUxd8Bh6DJZaQzATEMArcMjqihtg",
  "key6": "5bTW2gXLkpr8KhFUJYJBVHL1BYxvB5J5p9ANq85LX44K1N1toohqQkmAk7Wb4rockorg5rFg2TnGS228sYKV57e2",
  "key7": "4Ukryb36TsBuSmrbrN714WNU2NAWg8fyW84oPbBTExi7RHh21ZRcVvJkBEdhBspqmAb1HN6bJUzUyipavRtBLJBG",
  "key8": "4U3f57UmWRqo6xePcSZ6C4qTjEA3d98QDY2JdtBscBnJGC3F1XJfkhbGxABrsdUnyCzyL8LgcJWTxtFhTBfMyRd9",
  "key9": "2TbSn4J1Fw6XeQA68Q9AMqM7CwSK46pZWJzK15bEQZPxsWonNTUyuHXuwBQwBWcYNCvdaU8CKMWHBex8n9tJ1n6W",
  "key10": "5jaEj1C4sP3Q99zGxLhKWqeC7QZJtY2ei8DPCDJp46k2VBdFZZrzasdaYUynHog4QcGkeHj1Nn8iXS2Cgnsb5fJn",
  "key11": "tCEiqcP7ffPJF4UeD7jaWDEQS2cgQCAhtQUNsUCbgTQCmAFTD9DZYsGDPkx9WnSY9UYXpgs4ifZwZGmR6NEEM7S",
  "key12": "2trMbSvoF2Jf5DmHUmrzVAfHqe8TYxZZZ3cuwTvyJpx7KC8BrKmvybEp5xM1P9MBWD3rve64GKSokQtCCLo3vDrn",
  "key13": "2URhXtAxSoCBcg4oWnoAx22zVVEYLQ4VtnJYBUdo4figpPGP1Pix5HbbVZxzLax1PGGyJgEDu8AEUDbaMrH53Fxx",
  "key14": "3tsYZJ3cjbUDvYuxChF6REu3kAKGJacfX2ftevQbZATJC2AbMTWPZAP2dkywAToZRDcQgoA3mMrpPqo5BNn6WJfC",
  "key15": "3JotrEfBLVwjqEdQRVk96aQpCrgpeeL4oTjXfY8EkX268AquGQ2r96gsemEdKQ7rEPKUnZjXdgJNYKLtxjQvVKgu",
  "key16": "3iEPXAkL6BudEHLDQvBrJZkzTSB9B4KvcDEZmSvHGxSMRKYyR3c8kGhfHoUTuiFXVX7EPswrHynDNBsRgQKvBLgg",
  "key17": "i2MjWrqP32N1tkcxH82e4zRza6WLokiW1gSB6W3p26JvJW4kukMD3h8uPDfMT194nU3Ghcnggmm3MBkRz4hKksi",
  "key18": "3ueqtd1MuuX1etXWfFqV9aXsbzC6zKMrSXWEts841jheC4DqE8GzW1mycKSpcfswzG4q9iAJt4NTTS5ZVfHKxXGt",
  "key19": "5YkP8am9MxnZPSPnKgmUGhzr8uW1bdaVVrkTf4fG1ZHPYVSZQnrbFax7bdEASiNTaQQE174cPkCanNU19HL1EF9r",
  "key20": "4etQCQHJBGhMin74vK89Xgszp1gD6n8QMbfLFGhA4kpMtbBpnoCjB853VTymJd8bT2issiuUxk5qX7JDEb2SLTkE",
  "key21": "2juo1qBrKv2xQhkihwB5djPgoB44Jm4aEUQthg5sJ5mpLGebb4kUbL9G2ft9NdoV1LV7A46WhE7Vk8iYek4V4UMa",
  "key22": "3cu3YPSKZF7Uaq37FtE9WkmePR7AhHPbmcF5kPZe5vFLeuPZPKGyu992j8ZHhJhVV6cznrAfMPSNhx5hZZpR4MCv",
  "key23": "61o7uYXkiMRK1EQtnhMN6tLaDEorx8UBXv7Pjjcyr5bywVmUNoMtBAxgqqRTcgCE9rpuKos345e7yy5NTvndHDZZ",
  "key24": "3rzdaVVRkVKi3ZZCtzxmPUmwdWiur2feBknXNUZmb2cHRnwgkUXN5j7cUfD4QBEfm3tceki48fsysaXJjTMRow9Q",
  "key25": "36j3nzoPiX5fjqZkt5LziYEkiFYwWCr1Hi3D9pkhy8MBpP1eVDLQy7mY6qphrYNFYbcr6xp8BXHTLLYvrztAxtW2",
  "key26": "3nQQzrruoE5HaUFvWPAtKYqRDrnoJysoRBsdEi3bibErHVLhmqtzzsemGV6wGhWVdnKnqzyq3qecvn2NQ18otWMc",
  "key27": "33dhCcfrtTNEAESMf4Zv2pNFjEFLWJKLwDTYvzrkRVD9Bpu7NBq4XezeW4Dg2EUpNTxg3Liq9xV83Z5FX9tszbHz",
  "key28": "3bsefYWhzF3kCptSRumoAD2NRoBfSu8YBxXJWZz13HGAyX2RN6FSbCA4CafJxC5GAr6aNEr286Snf7Pn2jDEysXk",
  "key29": "2uovLbEDsif4xHjrcPhuJ8nebAQLG7vajAePFgM2vYQyDGpnMzHi1UGWZa6RmvuCN3dTYchxZM86ztyygeAtNVY4",
  "key30": "3sZWQdLKaELEW9rkHYfGvtEkSaydkB23bhXSpgKGmY8KgZUZQmtSFDrje1StBp1DDqKAcFEooqXRebnchQfqRRBn",
  "key31": "t8EXu9jmqkEF9uGEXytQTD7rsTqNgq3MVcguqJ5eGru564F7KXXJGtRvvd7ec2CtYFX2kzngEGjVuAL5QUQ31BM",
  "key32": "4DM39PikJS4Ue86dAwLR3P3eFfxwJ5TTaDwCRPWi33fwt11vmYqh6YTA54wyXT6gfWERDasiLGn8AucF7s2hP4iq",
  "key33": "2oqvtvC2rihpYxsJie2siphxcNeEHqdu3PdMhqX2NctJh2ZzQaC3UZpUDDHKWj7FSYCFsagYfJejmtNpTfT9C7uq",
  "key34": "2UjD2Gv9ZbPqHGqNnKM7XUafi4u2Xgk4CwasBZZSX2tzKpuP8JSqetHWMDtvzokAjks7xCQA2Fho6yRDtir3EZ1Q",
  "key35": "2jCtsV4xKFDGmyMzmsTGUAywnXaWPfomoBV3Z6mts4ssaLGrguc5mnrXkQZFb9iy2SRL15tP4U5EUNHaGuAVBLEc",
  "key36": "PszcRfX8Xm8nHmmzpfunL9k4PwqWKnnsTmyq4Rg7V5BA99tW92MmUoArcZATvANzjqn23R8EuahqpSzCvL4zPvd",
  "key37": "X9u9ERrbQmvXVoxQRBAa4ZuqTUSYiTZJ2bHVRuw9LPtf41GUDv48vKKjRygGs3W2WbBAsWdhvXvibFZfw7JtZhN",
  "key38": "5r6wFi1JHtMGZAbtYnbkfAcyiX6mNj2VbGbCnyJMti46FncffB5WZWtHesShpJ6Zt9qVT5s9TxCxMC9R6URkB97d",
  "key39": "MpVQPcCGuQz96tPLXfc2P3iQqw7TMBMpksrbU8S9AdtfUptK3DfkhNzBAMd2qXE8pjaAa1hBWeMpY3nwxmErBs4",
  "key40": "5BKANt7p5fe3k5AHnV1CSzUTwvgXQcaNNDNiv8syJLZTE9GtUVrMYRpiDbX8yoGWUQezKmkAe1YNEoQqf5xerzEa",
  "key41": "4pJ7J3tSyFMY97wRk6QhYFNGeMARmm1YFBXCjBvACqYMPJfuM1H5QA3MtHip8VRMKxFGFYEzWAdGKyvVM2qSizrE"
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
