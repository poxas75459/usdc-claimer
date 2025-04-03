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
    "59NrLPrzZdCU9gnNyC1uDwwXSKipN5aS6ESycXkf4xUG7UYtw1xCUXfJa74pSEGbigB7LmHT9ZdJGHVMVyLqSXL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JGDJvr4bY4EQLWVavxur7E6hpSe2dkkciQYeMQU4UWUZswMu5azvqALqgeJHEddDfNDM3TNz6ibZvLUx2QihCGL",
  "key1": "3sp9VBHKxg4oUZRHTPmQtRx4RGAYZrVck42XmVUgFsCHMbz9KVgJkXKp8WTyhcMTJJs3bzMrGjJyT8oZH6q4xNVp",
  "key2": "5dYuyCTRgSyu24rFDD9hMJu1nvX4mPKftypUsCE43N7R9D7GyCjY8CNu6d56Fr1yw6cUTAZ8w8QwuKbwNdk8muYq",
  "key3": "GhNiHivUMP8G8XAdZVZ21YCFx7ThS85UvfY2iR5t674DYE3WYXphp3j6K3j6tmXJws58GiseCEZGm5sc6traSyC",
  "key4": "45KN95gtT2G16ugYdSAE67o5EMPVr7WHYeYhc3TEBcZLR8o71c3QiN2bBGueQpYzjh2wdz4NggLcEEL9aYRNRmJd",
  "key5": "555XuigPaUthJquswbduo7qCpfQCx94auu9i92MMv3FFqozneGyc2WCebuSTjwPSoXErkJjfBjTsvh12w7bQ4eLu",
  "key6": "2i4onGMzRTnBjFB8derNwFB7UaGxCiKyfm1FZiPJ2MUhd2SyUQtfXqmLES4ThKUHnfiie7UE6rSc9QcLWyAMR6fE",
  "key7": "2XhNMm1ZNPedYAJWWuRLqyYs1yiZhyG11XKuYdywVdYW4HmrpRAiZ6EsiNvESEemJdRvCg2uyrYemR22VVStLzf3",
  "key8": "2Wx8fj2nG6ksB4UbYPMhiRo5cmLU7hNGN3knhW9bLfZjVefNuEAWxzotVcMqiv11Uvs41mtPWU7VaqyYQGwEK25J",
  "key9": "3tq6j8s1vfBFX82sEtsPJWifj5MoUdsfPkGWH15ESrWpPPRPDeXFmDS7zMsedNkftpS8sg7rmeiGbqEqLqyhB1Kq",
  "key10": "DkLJkJsBD5GWHkVgMpnm3Xr4F9bvZkKeqUhZPgyq31EUdxEYNqRcgWZsNZ7dFkN7t3RzKeo4cvq81xND1jceU8K",
  "key11": "5e5fBdVTpmm3XQSQG2EeDcPSEi7FaSm8HPkJRr74myEBP8VPMzVKZVSw6QhP42vnbW1tyFuUCUu3yaZMDVvAfWST",
  "key12": "4owyUsYUjCFZBj4ofkchjDR4QEhENAWxD1Ucj69uDKMFR7GF9dAmcsyZ21F7xfNjdsga8no8kcNCgfAmQ8genbc4",
  "key13": "249dv6LParPJEJEJ5yTp87ZJUgKZok2d6LBvfoPtq5vJ9WfHuuh43662aohHingobuN2jsz49N1GdKxhGuegazbW",
  "key14": "2pyQQcXTngkHPsdxmioCgJapjSFaAcPkQBY8Lhh5CvJex9Cfobm5BTY73fveAdLLzFU3fHpLqMDTetBbkroU9hMA",
  "key15": "mSM33qRsGG516S1wnHdwNmhpnrZ77gdJNYoM58rdf5UA7VAAmyoVH8ZQcXGdaxR9VGH3dWtXrVso6KvyA2ERAV4",
  "key16": "3Gyi5Ab9wBS565fFVoWCZ1pWPkroi1tXSZdioFEQL23nxZpb2zoQy7YBDCDtQrs7GXUxMQQp5idkc6GovPLKtC1G",
  "key17": "256Gy4pWiNhz3z28KioJ8aic4h32g4sAsyUugbfwVsjnAGUr9Vrbv1UxNbetn2LA6m6Cqy1g9xYnuApFUsbppFcL",
  "key18": "5C9CzMjLfoQR5pMRKku42UtQc6S349HEQHuBbGHTSo445gz7kwKd3wwTz2MNzkB4EwEdVcD1Hx3AgS7k3o6g394C",
  "key19": "4cZJktebQNQcKbB1j9dgypR86411vSH2FMKVJsR81SqFbvYZW3s3gqoWvwmgtMWN8pfcCxfahQ6jE7Nota1QSd6w",
  "key20": "57fru6dwXXhx32JtqrJUyGZqVnWecmPpBLju16tMhPaJ86DrMG4aU2LF7S1GcRgjw6R3KXgTS1wTAEh9cg5uoHC2",
  "key21": "3LAGsN2Cvp4zFR4o8tnf4voRj51ofH579BgNKnVhTSDCDoNE5EjnrmLFJw1xR9fYjfqzpv2ZienBArhG4Cou7ueq",
  "key22": "T4BGBhj4eV2jaoGoJL5oi5HJqefJ3uMUL7eWfi5KePpGYEkE8WBts7beDnf1y5LVaVdY71EnjZUPfYMrVLpKE6U",
  "key23": "2PXH44PeSzNwdvDL9tRgMdJxWhxHUx85vd3eKfBG7MTBfSviAUaegwnL3A4v8ft3fuGfYeJQW64cwHreTVdwzMBi",
  "key24": "2gcpUti6GSd7WPGLVDvG9ckvaJbiwSuNAZNimYhMiTQ8HwuNre9g9AeKjiNtxXVTC4pewJcYuX3Pz65ameKg7hcg",
  "key25": "2CsHaC3JgSUxci9qgY8tnzVW1hrzYhGkRvDSyQSpCxPPombEK4rSJ3QTXAviW3cmW4QqgedFN4VjQUSByWTojWr3",
  "key26": "44BcApYoKHxffVNdYYEjo8NLmXLB1Q6SSDyoVYC8mWZYQ25nuzgxCMKAJmhZTo8Jua49tb8FL29bLmQamdRhQtPi",
  "key27": "4Nb4AEAHTXvs6T8811ZiQr69vxvhyWbLMbP2orBDm6ygiLFKxPPQhFQNRiWQrHDZqGTQRroG46eTNTKWKym3Z1ci",
  "key28": "5zee3i9ZYHNMt3mXykqCnhES249x2Gwt1Lj9yQENmiVnEN8E2AemJEzfoW8Um7MKvHhq4WUouM6Um5Ec2gPzfCV6",
  "key29": "6GAgmnRVbKtBQUVM3CYXGbEE9Stfd3NU9Kizk7LYdekK1UG1ZuSiDLrLB9nG17iEFumVU8ZETzmffZ1urJa1AEM",
  "key30": "4bVv9J1yqZMgMxGmEGFc7yErtyKKG9mNhnktPYJvZzvYLqRp9sTWydq7v5pZ3QDJn4AYP7eDrwJbfaHD1trhdU8M",
  "key31": "5bgrLVKqiKJkxaJMZejzRgMKgLMpr2eEJwBARkFF2C7KuyMd8Hr1JweBLrTnrB6wxp4MV5azoLDf81bRQv1tZKDk",
  "key32": "3w2qSuqSsshUvxFbFNa6XywKf2Xb1D5Zew5Em77kP34EzDDZzepaX2rDjFQN14hC29zyJXZfemQ9WA2ZxgH5KxSH",
  "key33": "3UiVUzynJ547vjgscdEMnZXknhcNmAZ4JjKsAeNyKL2hQRZ2QsLevCgSFefHuHyi8d2EgM4RQjVGJbSSrwr8dAj1",
  "key34": "4ysy9Jb7jtuJcwZWQaNHpvWAJVnJE3a3Jz7fshiXGhmLc83ssPSErV4q3NLohsdUHeCdL5FrKsRu84zTuP7QpQS8",
  "key35": "3f8WfYmeCtvJEYznErXQr8XRj5Fepr7XWbzKfyhtucFqYk5taLQJ4c96jnxwW9BjdXyXEXsybU1PsJbb9BoVej62",
  "key36": "4FAqB9oiBb8MsMz6ck8WoVByyVEEDHoJQmTHzikhsqxws4ib5duAAfDRp4En4Tt8MXVRysjEbHrsacrP53XUrn6J",
  "key37": "3228B9GByDKfj33Hcnm1cQ1QQqrGMgb6eDgzVxvSUkKCovVrmA5UndYmwAXm8DhchLgYDMzrL6sxQXau4dYoj7YM",
  "key38": "37DtXHizX27fxRtELRg1HvwYDt1YLg4FpLZ9BVJaFSAnxJt4e6o8PswSaPszZGMyDXgvB4crvY7ESk8ayGaqPQva",
  "key39": "5sdQwBcwa17GUzF1ZGegy6wtExwH7Ko8CycD7L8eyPGjpv9A2J3SYKtK6sVde9m9YQK4ckDKdTfvNFzy2vYon2fp",
  "key40": "2fiZzuaqj8S7vT8zpyTkKCXWGG6fSaiZF43ToZTPQjwFWC9YokWmrXFQfdJx8mDfEzDF1zEJB3LLLZAmA1MpsucY",
  "key41": "w7YruL4SkobeBot4rNRoPa16ZaHvhmCED78A8w8rE9hPrDXF8aY5557MH7n85dg42Ap1TZ4CRJpu5U9tGuvsAbJ",
  "key42": "2UXh5x3d8vnkXJ28sj3m9mD6REC1Teh2VGUqMEsaFHuDkAStS1rJ68irNW7HyMCKncpev7p3SLEixkmU3u7ry92p"
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
