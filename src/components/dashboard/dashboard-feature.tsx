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
    "3AnvxX8voeNpD6Zwup8bzsW1xoxbPqxPqDeHkgPW8reUG94h5wKDikknmHrBFek1sFar6BLZd6PLfUExAhBp2u1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B6wVQptADx29BmNdRfSRpFu3zQm1VVfRnPksnMYez9xVZxkkj2x4n1hskzoxvh4ZPcYyDe5MMwKbQb4GQY8QHoi",
  "key1": "26xAycw3XrorSPA5KiwY8HoDJkGEdQAGX4x1J2cLBEg2Z4odXHWFEeGg8BYv27oDgXvzQkvJgoYseVviXCZRQmy8",
  "key2": "5LCAqU7hkTp33Mf1hQUm2oZQwTBd2LGRDurew9BjHsXEqgq2DFCFnPmXB4c346FSi4W7VN3zCx1ZrmpEEs2ARp5f",
  "key3": "3udkrXtg3u3QNrYLkxDNyqTLnMY1PgxAWxNacxRS2a2V56rYarornSctzQPKUSo7SKWDV3aMvcdAEo5XaEveZPth",
  "key4": "5NV1AxCCQrVv2Fr8RhCPZWJcMMCsZwYmmjVVrgXHgobsnoY6DZWB69BNmK1d1fBP5eSyjMk2wQ4VULzGKmHPmCnd",
  "key5": "5e64tfsyFnkMvN1oxqcbtq46PqncbdJ3rwr9baEvnStk4fDWvuAcPh1zurAzwEbvawNHpPWS3wYGw2nNqm26DG64",
  "key6": "4v6APDv5LnLwx2zD18EX2VFPBd9sFrukjUh942J78bELrPi2JTPtdYnZ73xWmBvwSEDamqYRzMr2nZsiskXrsGeY",
  "key7": "63BDRDAzjbB2x9bg5HLQjRLgiRsoqjhGTWFMR5yVZ1WPHRCMLJQXMPiBvC3N4kE7uftNEeG9uqKnABunam7gHgNr",
  "key8": "EEUzuh65keJPAGfERcgvbFHee5qr2w978cpwjhvubnRFEYoj9w4oGYNiceFQT2Axo2CE9c32gSBMafq8sLGYMcN",
  "key9": "61qcf9Xac3eeYL2EYzoqqFasFjpbSwz6s5h9atj3HbPV9xAhgfoRxaeitG4tcVVeRt2V8jZ4ZDPkHEGX2dNnmsTR",
  "key10": "5aiDtsfXSHEeBJRJNRQGMZH7P9xh68oCnwNuXCePoGvKNzkiV4MjXmg1atYAY64Nr9qwurVmzqury2ck2YqznUgQ",
  "key11": "3vebbGGoLEUYwVakHQYWbUDUBUmaJV9FU4gCjtu3N2UY3qJaXZm2CubGAa7GQgmw1PtTEwohUkWx3zygNFLuKgTG",
  "key12": "51SYfMA54J262Aw1caRxzUmXjKkw1K6n7R7Xok2qkwMVx7RJK5ktoBPaVnErpGtg1q6b6x6wTJbQmQYx996RmfXV",
  "key13": "21UiDgwx3CTnesPn8MTgax5dctrDgtBna7ZSdjYHaKxqez295U9wh617SL9Ggy6YkTQFJv1jXAk8rctE8AVtKBPj",
  "key14": "5awYuHY82zcGVhu1fxi715izwHJqaiaoPq1TqoiejCW8QNhsMfm84mjGeZot4NGRBhtP5XHgkv2FQADRF7Pm6Zhx",
  "key15": "5pYMMUiwcSC8pmNrB15toLcbkNkBFwNA77sEnRRL8C3K3WyXL6a4Ph5DTaffkNimTwND3WGbj76fwmXi4XtWHgQN",
  "key16": "5VuqGxXEew2SN5Ch4ebbQTL8wooNoMBFaK7d6qHncNjjdUj2LFsyMbSJTXxKZtsqCXAGmzUBxvQ3er9HKUVe5EvQ",
  "key17": "5AsZbU8sbwjP5qXpf1cHrzoAKidcD3dxMrnbUtGqGDuWBxPpw2ck9yYZB22MJ8urnA3Km7kCZqi7ya6VvsHSPfHX",
  "key18": "DczEetRhNPuX3YBfA5HqiP9tB3UQKP93uYKVfSdZsgV3ehHVSKggbeJwg7GMAgfc27EwwQHcXFXJgZtKCUApYWh",
  "key19": "5LD3iantqhFDMwEthqVeR8fcwDMEgwSmTp8oeg2ruLhCG6anQQGzMK2ge3cGiBTnp49ugscMd8891NVgmXkTJe4a",
  "key20": "5dEzju9ebBEmnMui8Kn1bRLAn7MThBvyqQrG6Dx5RkwrCwFgumizv8DJpAUTT7oCAUWNVVui7R9Rb3Byfi92W3QK",
  "key21": "qz2kRR2gAKxMCfewRhc4N1WEn2Lm13qvJdmEAnLAj7jHLfe7sFHq2qqk5A3QHaDekUuZ1vT5vF5477RPjyfiwJS",
  "key22": "3uJYczB6ukd4fKBiWwTNEVxw7jXujsR3vx7AAUHbXQfLBFQCe9mHrgd1pTriXJ9WetKFGDMw3HRjnKX4yLCpqQbG",
  "key23": "5ntdwUhGNuYLDYMMgNSCDxAWSSbLnHezmdDQCEwfsWN3CKMHZuCoWXXugy3S26SfV219TouAVxojo4cxVz34pKPM",
  "key24": "66wr9tQS9pnaQWZPQkC7LK8NssT5jtsvf9xHE5DShPqZrF24okN2hg1PEsF6YssH5bh9D9WsA2re3p3tmZSpGSEq",
  "key25": "58iwScueaAm62V4ckFoLBf8W9SFNPr7t5EiUjQAxUeyC7r5M3G5SynVu5CzvirNY3umy9MXyAAUWBRhGeFmLRrNj",
  "key26": "5j33a2Nc6TpfM5tY4xfeeEn8Z22wZ9WCdm3Eg4NfYrWNBzvSBPKczJpt3CobWdqrdt8XKGhsVwpE3y1S3Yv1tLLC",
  "key27": "2XVSYNAf8ZKHS8CRj248AxL6sS6dsFMkfr1WgVqzqffDPUqHYspP5RFDjC488tXw7HS5agg3JuaJeZ84BJvWayuE",
  "key28": "5gSU5QW4RyTKTFBoSXiMd4kP47Mxqb9QgSPhfZUt3TdSs1iZ4mhGpPgfDH4XA4j1R8gUiUyq9bizDWQ7NnHU9JP9",
  "key29": "5BgL7984BR4bVhTPAG1FDJpbdwUmzJkSFkFniLTR8ezJeDkNwou4NcZHZLFZN2kdcgR4Jt2gUGibU93Cys6PGCND",
  "key30": "3J7S8hLsunqamFkBJKWK2itP9tpBNXVpszUJPThjPHKxc5BNsabAZ9hMQcKBzD5ZUikEjcEjwgdKLhaY4Z9drGQq",
  "key31": "NnTDeGW95NXivaWAXSAVNHpRdhUSRbVDrbZjmUeeEGLfRDJ4pUB6SgUuqDrUUudvF8LKgMc7o3CKrKfF4QUuf1L",
  "key32": "4vWL6HG4VygJZX8xgKDCQ8uRMJrUK724VpvayRSYcEM5KBFjcYXGP69A4xx83SYUjyziuFyQ3Jq5TFq11MbcajJy",
  "key33": "41uzWaNTcBqTWRPfcS2q5fPPEhYaZAw5oXm6BssFE8htASW1uUCm4JcTF6RW5eMbg3V3swFLcsoAiV9abhKXMUnc",
  "key34": "5sd1GdVvhWs9WoSeiH6TC8UBeU7GJvdW1rNzRC8aTNPC22jyuvpFeTKxPMDA5qQc7pBXcemmVVmNcG4P2mFtrjSt",
  "key35": "2jS2AGVrcbE37Cqcg4n7R9dLAiUmpSy75gbbL1UhC8yPmwNV4UgDmJEq4CySot8vbUP9L9a9cXHkyKr64CcMz21X",
  "key36": "5wsYEFM9dx93TKbz8nomhowuUHfVu3pGpinEpo9XbR7q5MTq4yeed1PckpiAvQehdzcGVJaanjks3qA3nm7Bn3fi",
  "key37": "3YhNyA1QPaFMCrxtxBykqxkk9MK3YixABgS1nJQVhKbGQ4ntM9NNw8XUcYKvz24Qst17fwWLomRNSxRMcSrqePnZ",
  "key38": "4rsN349cP1XSRkv1ZG1VeFJw9aTyvvpvJLLN6XynEbnEJ4o3LMZnsBkpt3yXT4Zk9m1pKhR5MB8HAQNv2ddMhkVf",
  "key39": "dzYwcbFcCJWJkPT2zLytoL8zG4cJvT73SAtML4ynrVQYfhhy2M1pBjRheqHsMSkfZoaHQyBoGNN6ifoPuoiZztU",
  "key40": "VqEc27pFDGSgVBRvjpr3abhicpfLYNipwvCoVLykNZA1bHigkiRF3GJjNDZAjz6CX137dXiCxrQ9sEhsdE4zJth",
  "key41": "5xtTd9nMzng3QkTg94KWJGM9U37q68hGc7E2ip2mDDvUkfTRtHZDfanGVaLpu2Rcb5XMzYcEqqoM6X5nf51bNLpu",
  "key42": "5tnX2aoyGSpmnM9J8M5PDw4QHonqtNZtSau27nSh6vh2rkA2hiQkQmubeJCYrshCufFehuQmn3qRJUoTpDpV27a5",
  "key43": "362jN4tsq8CNRkBDGQCkYsR9UbFK4h5xoSSfEYi7bgV8pb6MqZvebcF8LbiBQ7d7XzDLsVALTv5wwX7f78RZygM3",
  "key44": "5Jo3861PjsJ5Xo4ZAdJnAAfkABtkQPevj92PHHEZVthsNuAxzczkwyA3JiYfxfW8TmP8ynqDxjh9bCxpas4dY2Ja"
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
