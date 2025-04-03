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
    "2RnDzbFzxXJrWXY2L2tniKsy48vukBChoX8JgYSzfCRJ4K76VSK8zsanr2yHXn5NVzQ437YsjQ6f74eHwhEnF88Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jZanamrNHcpSu2QARmYWnc87n4LYSoyEzaNsmbnJ75NnS7vLXW7phKMJb4yqocW5iDtm3Yj2zBxJUHegsdCpj14",
  "key1": "4XZHULUf4gJP9kokApeXE3ujpcjCGG447S8KMJKEw4nea4ioyJqswtAh9RyYvPEC9a2m1BkSf1d5LtzRSqQSLFEg",
  "key2": "2PN5miXvf2BcmBNmBVoYqTEUs21AL7WueZXUb4EhFiTRj7WK45mJUAYxb9EpHFt6giPz9fcK5cqR5MRJR6QaE3oX",
  "key3": "67omu3BZdyFPTWLnZgMUJK8LugetreMREiNAJERWeYByYXftq7Siz677QKC1X5SHvPtdZJ88H9KH1C52ZZvWf6M4",
  "key4": "mdsej55ny1Y2UzERuoC1uKn5qSmXNPy8ve67emkyw7apDQcc8MJtiSJfs3z43V3xSnF3mhjUDajgT3PkgLDJjgv",
  "key5": "3J7ULdmCLFZhP2gD4wVBBooJPF68YdtVUzHHt2ZmrDxXsMn9o9q9Q9yydCHhtmcM3748jah8Cmq63z1SJo9B1Wgj",
  "key6": "4Z4GnEyyNy2K4p9TKcqmj1ohSk7WtgryK1CNMEvqgPYWqduUXHPUaJa62a5f967c9oG1xwc9eKKWbwMHSgpDSxEm",
  "key7": "31DqRbRjWuk7DHtGvw2bGfFEbJPXGAWUmoAyDQxcmbqgfPRGXZarwztjafxPKNdxBhiVED4S23PXHgU2EYWhuwK8",
  "key8": "5wPsamJvMfTBSY2EHnN1S8XkZxprj8mVzin5uUfN2HgnRGnApvGppfzpP6STtCwVb5m6i8eRFNYD82okenTd44J6",
  "key9": "J8pHcvvBDKnRorWsSsRrhnU3NMpiUzWPUoH6jmoAMucEWaGu11FgYsuZs3wH6q97junjFXxS9a54gn6yvEcHzCh",
  "key10": "2hMoQDBdFi9AYyMSaq8RoBi91439yo6oUBkwaAh9bkACHYfJtYmqmRsxT87n7iQhuAaQN9AcZRotgtoamfqNLzvU",
  "key11": "3FTk3Cyywz4uVCREc8dMMEd5E3fFuNbR1BjguvUeiYqC6Baza2xbxLqCNcM7venHvXKM242rpazzJEN52Zu358dg",
  "key12": "4Fp29GXez3YTHYBN3WeTXqV7oHansuJwWNpmnj1ESkFMZC5B6pedy84aTsbYe4FuHHv9oETXEPZoQ7ngmXr5VGay",
  "key13": "2x5yhJoCYwi94QPQJfeGw7adNwLPxqn8rssLJc7cxFfMiZem9ATKyvWmgNsM1ye4ieMRfC2iLZ9vnAQSAALLecU8",
  "key14": "4PTx3XDtbnX8WAg3ymX85QcHUANkqpjS9qjTSpY7wUuM22WEEBS7gR1vkMVKr5NcPyeYcobSexRZJXgDbAV4aXJX",
  "key15": "3VePUsHfTS2xZ4ksLr3Drmm7TJTxkTeQxk6YSKNUvoDkvhLaToJAduEdoTnie8nHQC7UUqzVSkYKF3C4x1H9sL3S",
  "key16": "5SUEvdrKCr7GKjjpVTf7PHmmGa126kLg2QUML4cwLz8G6Bmo1BXHbY2ccDJa6sduGqjFgBTvJRhks67uujQmZmxo",
  "key17": "3e1Vp4PBrEq3erZ2UsM1ohERR4i8gtiKDt9Xr6vo5zgB1UbGdAvsGHuH9MqYtKftdfZQBaY65Mm9JVZAYhDwdMXS",
  "key18": "4qVb5MPKLZmDzPBkBrdgXeX25e7StPJKRHeUe4XBDWNr4HZDSPJsNpwN41mqsrrdbW75FCdxNJnRCeNpSmJcDqRw",
  "key19": "5rtkRDeNdWkJpEnFpAbaPatMfdfzUJqwK2SxhoWGu2ywVGSQmZjUeq8gZwruu6Wg5CkHHeMUjRie7uk9TDuyTbQr",
  "key20": "SVtfRwo4DoAcCEAaM5oUt2wfBYkb2ND5TUbQqJEtok6M53D9fSzvAN35tudZRiTHmdDuQnH5oSziPLaDqH2kmuL",
  "key21": "3qtpS7iJ8cUc9jd6ttdCN6DMK35UFxnJ8Vqq4VbZQXJfdHfNybgthHFvdpfVSdRax2Quc2FsHD7LdBZeLFMZLhM8",
  "key22": "2NZo4a646vZh6UVkZGN6TWxtfXJwftPnLdsKxGVrpK2amdagABwkYPNwfipMEkYjH74M4k3TvkWPFQdntA5fcaaD",
  "key23": "x6Q1vY6bcoMbK7Dtk7rqw9HSCMeSQa9eKTRjYwwdyo2WRtgmw7Na7BkATYMktbNRgXmZbay6Dh2oZf2oiMaRBb4",
  "key24": "9eNXcPXYeihLXJbQvBGL56EUo8dNtFNiSZxnKpT9oTv4bzapzbzVV2mxzXtcJBmcirQPS5zBJLvHoLJaDWB6Zsc",
  "key25": "61VE1dFpYai4nHrkkDitNAFgXiZTaAzUqjhEZDJfcKztaUe6wmRKQ3ynegXTeKyavsAoRoMWzKVz3FFRAW7B9fAs",
  "key26": "3dU8FzuJQB5zsW9FipdmLY1FxRJZY2ZMck1e4Ta3NzkASF1bKc5bLJycQeCoiuvwd35Ec8wwdPtA1LNW6ZLXtXTQ",
  "key27": "4RCiUZkdFz95EpDNfopyY6VFsYhEVRYXBnrd6PZJnAqXbNU9vHYngvZJjUGa9WM1yr6sRhgz3TBiLmv3KFX1Te7A",
  "key28": "4UYaiyv5pNTEyyn6oP72kg18zPwCJSB5wmex8hobAF7YBWq4nLH28yE8jvM3sUszMDezkpThruZ6zmuLsqHvbFjr",
  "key29": "56sfr9pQ5NV72zdTHbcZYf8yZmcFkuZ8wYN39w1n62FxpHYs8fzY2r6ocHV9oQz7q1kpeaSkm5g5PZDSsvjS4Muq",
  "key30": "CTZAyYPTQStvvQxuz8zrhQqPEFgan7FDkkaF1SZA1f84CtcrU3X5dBDraEFznx1cDjqQkZi3j87A8TSXqLBxgEj",
  "key31": "2ZkxN8k9AGhqtQhbJNzRJgeNqCDvdgDDcET3n8QH87zYDhAbXhrS6JomVCmupAin5guiv6dmGnf6puqLPMsXawBP",
  "key32": "63heDx3fw5bPq9UsBL5KGoj3CA3bNAC9tcQqgsRWrAhZjYRYcrov1ycsCaq9eMhPP6LtoRGvsNnUWJTo9XMXi5b9",
  "key33": "XeSwtUPeT3QUy3QzURPChzsxn5JPfHdr5oBRu6BejtgujfDiH2nHw1kDE8KBD7vKJ8V3tdieyz3mSgnAmM3FPME",
  "key34": "2ix66XpFNBRtgogvksRsyv7BVekH6LUbUk28mbMcbmeMSmMvu4YT1UVqUAAEsWAXtjgnnh2x6DmtdTX7TX4AZjNo",
  "key35": "4pdtj1UW5ToyiciVFfpLzqJcbL9sPvEntnswzgjnAMdJtQDyuidwtQAnbbWd3V2ELExypfrqCN9dxwcyKZRgYQ5j",
  "key36": "5d95HjyunbRTfHMxE9xeZtPC6GBb5Wbgmabw8KR2XxnVDizEo5Pz4Lmp5ryTfF9HGydQzCMwPF1V43xq7otv4XAQ",
  "key37": "JTw8XyAroSLc3Gg4YohhzgEFEJJu1GYEVb6c466PG7S6HFnAA31mjKYou9gBpDZGDivApAAN1zMybbmGGAEJFyd"
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
