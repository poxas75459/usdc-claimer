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
    "DsUzC4VjFCCkMWR6bZqp99zSEicFJsyF82huHSdvVf3GhZsrqrihDNNrmnUdUYAVnjLB6DJDqXrkePyGATaeizx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cfurnnb8WhPkGbGPBBcDpsRPYuYHR2BDDdaXynGe1JFftSfQhduV6939RzSS6SHd4BZhsYCe8G9qU71BBcogymt",
  "key1": "2887Vxanh5omCkHSNX7ZYhvahit5M3d9BrGGRwTPYYtogaNGkof9NuZojESu6FMUAgGuktgkfgMTg9JVL58TBFPm",
  "key2": "3tpzRT9Vhz96fj7UZA2RbogMyJeEbohbG96hAMJHiYLJKy2drhp5WiepoEobqyunhVeuPHoTCjUa8zkxuA7bJU1K",
  "key3": "nf6eCZKXP2topDqYq1ms8kxfzNmxne1x4x7tftQYuSsYEtztyeeah1EBa2SB4Wwj3MBmxSBkPQfHR3AGN8Ld1Tb",
  "key4": "3ZxuzGrQRUP9FHeSwFJ3hrMi2uWrEiBE4KyNnqR8abMPKaK1rRjumMUby1V3ZeXDA6X92VCUaAYFHmgy2PnY1MS7",
  "key5": "3zLLe9GR1VztFuCuXXTNzEpvtrj7dnGcchqk6rzvRx4P5Pu44SYW9KqLj9ntqbJcSCXsUN6kZeREsiXs2vkK74Tm",
  "key6": "e49sfCWgnsQDkpQB4pmu1yLbEQWRm5UvzmzLZQQry9dN4AgL1xcR5jv9DuguWWXsMDNAtviYde6GCPTdBVsLL1B",
  "key7": "4HQ6RGFmWSDsTXKQW2PyohAm5MfzimGsmXBdvkMVu9GEG833r9QKND5qfMgrNDAropfhTaUjMwhK24TeGkWvE5Zo",
  "key8": "2xMK1JvX8pkUHY6ukKoAJfcVEkaXmb4bVhpJAFqvL3UKdvBHYGicXG7PkUzPbVr6ToxrLqE4rzaG15xFngLeVMGc",
  "key9": "xS2N3rEk9F5mwqnrdpNQMxVaDMDe1KNh7ssKDKdCxbrdaAPVzuWifyzJ6rCLoxa6owGaEYWJ8NySQv9YeGQVtaN",
  "key10": "Ldpbs5FxWp81n8yikYK1327zyYWn3zESJfgJycBqKWdkYBxr8t4c6LgN2uaukutSySREWZsB3DB42rPUFpQqohV",
  "key11": "535DaFP9PSC96PVKq6gkLrVSqeb1RKBQJhTtgqWN5urs8w7PzFhhbHM6zpABzFL2EcRcT2DqWy3eqTEdF3ntUiW",
  "key12": "3ymWrZBUMw2cTup1iHDqJSzbPuiMvw73UhQ9bjf7fquAcrGvf9jjaEKrkrUcoGmivzjmnFswc4KNjDqbJAxYoxJG",
  "key13": "R4rvyHA7bVk3qyDpwGwKj1k2aZ1y93LW9wNUvx5WC4QiuwagmQwrwhvQyqQ5UxpNixsVvz7TvAAS9vJMd6HVEyy",
  "key14": "3BMbz3k232U7AihdGmAxZGsksS3jTdpJBL2U8WVqGtb6oKsk4MK7FYSt24N5udwma23iSJhzQReiKEHUSP9k4Uju",
  "key15": "4jzCwyVZco7kDETzTfeYm945kGmz3khiL5svR1GhWxGhoPhyXXeZC2TuFizs5Tmk1uTFVLRHYnbCDCgsaZdzNvqC",
  "key16": "5uREfgEB9yhUeXMSU8ViBqYikk11jHymCxsuJ9AuLfaadKUa7XWuCFS45MVUfWAye9xR6gg8sbpbhszoHUmLxMZE",
  "key17": "3izGoDAypN4A8CTzG9PLiVR22dz16UGhsD4Wv3uPnhA6ZbPrkD3Roqb1J3bzNzCBLAgniX2bfNVwXpmVvVuvWab9",
  "key18": "5rwTMcyan9CkJU7xjnPyVRhjp1tZ6q6whdaEo6VPrCz6yrc3rK46HDRwyvWvSL1PtjPapNiR4rku1qjPwF7ViXxQ",
  "key19": "5R9sp6AwjSYL7vFSymFMPu4H8u2v7SjVBhFjiHc2h66U1EBbtQd6xTC2cevc2rmdCU1YdaejeBRA9AqT9vd81xJ7",
  "key20": "5dizQtZMNQ2qe16wTB9QGvFvVeZ8gFLzjQwzYEV9qLPUtzWCUdDHcN1ErM1mPi1nArp2gauabyWHoTtQGV5sZHTS",
  "key21": "44xywLQbzNAAkKzquQQbkkppnhPjFjwSAtw1EpWiQ12SEuaVR5B6oGTdy9XTkmRbKqC1wi8vBQS6CXPMT5fPpzHG",
  "key22": "5Pm72C2qnLgWcoUe4hxAX9Sh76Hj9Z2J9qbpdbaEHUwuPB4AFEEjd3gTTjysGB72Ld3D32j7GpsVb7jmasTfQsYa",
  "key23": "3LriDqPEWPzDFPy117dy7kfLjM1sy8FpCjkuZ9n5F5ywbFAYn6vFMHCvvYyKv3ac21DDoW6gCQSBTdRoYokXxDYH",
  "key24": "4dMbUoFyjbEAfBGsbGLUVDgAq1eKq7k6VU9Nh3BMfdPZbzc7cX5VQREh1u2PBnQRnUryH1MjCmbZqpG7vUv7TpUp",
  "key25": "guDUbBKU85p3Xw7YRjn5f7sGSCbWQufC487dWCBz6RTNF7HHN9HuZZFoFeYXKcaA2oasoNCHEehEr2eQisUV7Ny",
  "key26": "Ru4LDT786yMpLfhMn8DNrmsgaBzetmtN4uuRqmDeUc7j4PwZmuiJyWPkZeJWCZnMrkYUEg7gvit59Xiuvb7PiqX",
  "key27": "5GJvyBRj23GnhPb7npa1bWmWLEQEELBRaz5XLwk8scFQyziKGUamkBuGnYQHRuqAqrDMzzN727oKtNLYwTPXie1z",
  "key28": "5D7i9eNdjpyxwHS9meyygVZbjyWUD7QqKbvT1qmoWwumRg1NGJnq2PiLzJip1K38H25fuyKd1MdCRxGEyrCFsTH4",
  "key29": "5pEfGnw4gq6LEXHfbQmkYPsb9Kza56c64cSYVNMRJHfAu74EFRMWzjoqQcHKhiPbbkuoRsd7gyLFcAcF1SegF256",
  "key30": "5xoeqmkmvCy6eCecpXXoGn3xzBCyvMfKSmKPAzVZxwqoj2zFG1m4nwVJ6jd9gCuTLTmQu7v5BudLSygWyNgJahjj",
  "key31": "5G29FvCiqEwYquFYDCmcVGViCvsnpsj8imBe3hhfVLrwbQY8aLwuF4AHoMqvv3JwECqcRbiPz737Yy4zzzUwdQMD",
  "key32": "3pBnMAL6nj8rELFLj1i8uroJStTYuwekpyPvPgEa4mvAnVbHfqyKSpfeCYto1Zx6Rub5AmnRBThBRDgHVLULQZ7U",
  "key33": "619MGn1vJAEt4d4R7ur2Ye5rDzXFuHYhkTVgac6DF1Q1K92TpMSxGQM5yTWBJfN8cevaUuv8Nd5kU4gGYZmMCE62",
  "key34": "2bpYYoP8d1cfU7nuWbWDUAU8HqVEyr4Twefo3PZKdg2ds22PdtaGmqLZJmTbef8sULCj96jDsQKBLWvGJRjRshHQ",
  "key35": "2r9En4DpA2XNK74yXiGzkwsMLXuboCquFNKksrXJFymSrp3vR3JPVP5F5jdQNWNKBjgzihSXuH4Mzt5Y7Y2MjaCx"
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
