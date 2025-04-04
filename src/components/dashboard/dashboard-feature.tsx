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
    "5m5FAu5dHaNAEPn5egT42RLxPA979K5vJjTYf9C2WbJhhhkjTuBM8DJP5VcwjRCmiV9Lrik1NeNvTHzcnVM6twqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xCeFR2KygMDRdhYQRG9BWRHtWx7bgo2QwwDvJgcGVGGiiPNkD9B3ejQSL4sL33UbovYFzcRXSE7dHU2YfewtD9x",
  "key1": "2BUPXKmPMJrcHCxs7JAWecAM1PacRT8bECE6k8QRhZ5SdBM5vkC6ZW7u3q1dJZpr4Ytiu61E4pcBLR5yDtB6i3H4",
  "key2": "3aaeYK13D9SLKqbw7kzwrANwDB866YjkAZrrD1fabqWXS6XrW69KGVXocn2sX6J4gT1SVumLhd8nx9rSG2b4b2wf",
  "key3": "FoNPpmMwvigTzKqNekkT4AUWtcSQJTT99jJ5LP3rPijQV4BPRFjpvQU8fQJew8QjAYfmMmTiDme7XNzG1K8dFsp",
  "key4": "5xjmbmXDiNNfbnYtw6JR36jr1Zank3d9MPWgnzyKCAsQVKm66NQPM6LPh6kmpV9gn7sbyfjnEnwqJ8k1AovpMhLX",
  "key5": "2QbSDw5zjzhDGSkjsyTMy82K6Pd9xBSCTdbvRdvTmsaUopyJv8RKtH86isZAZVwc7SSQxmQU8uQzVm3aySdQ77Y3",
  "key6": "4FagCvWsvS4rCP5q1qf8hggbuHoReYrZBTBhEKKSMwGUQQRq4KCTq1wQ8n8BTPtVpfSNRJnxKrVDafgXDYPvMP2i",
  "key7": "4e2WAejpHJCbL1ydaeH54XFYcSgaSxFh39suhtQJyny5SNa4e6iCUTkBbuoLU3N82Qdg1JvRmXHHVT8983jtYkA3",
  "key8": "3qFVEk5SYhojet2kdtpffnZJjj1BSm2JoBbmav38vSUh742eNTjuXjGuzuT1EJSjxjs4aAgoh38tbQbUuuVmyzAy",
  "key9": "3TWa2PZaMnxg3ptWuAoNWWfXSARExUrEGAsdpHjFkcFBYCroPMVsmy4MNycP97yQoeVGAavatGG5WPRom6hHWiKp",
  "key10": "3yQEaCncYbBFWyy9TAYnT7DdDJtFC5FWmHWy62D1ipR2FF7uvydbk46HqncMbV4PqnqNRW6g7HvrASqnHUvavon9",
  "key11": "Gp2fSjJpbzTDiSSP58RPg83NBmwpQqBKQUCDAVJGvJ7T11HnSBQiKUknJhz1AkdMHdJ9VENHNBF4u9W7G81d57b",
  "key12": "4k2Ry8PtrndxzPEzWJwG916WdrTZ6Z3VitSLNEp69vaF6TZ2RRqevwfHjPqkYgzuzF2WYDGcXAAe72qsxqZXX8AB",
  "key13": "2ddVdGPffuNyxsUksmN8wWJhLcJzDHCh4gsNurrkbdX9zebVdWEDbCdAcYb8R3WpewjGPjKCJBoxo3i7dGRt5WCS",
  "key14": "5hfFZtvZZxiDiZAj8524bbEN7BiooT4HPmibNan19nimNXijcb1ZLyBxufn2ismTQ5pyKqCych7ikyFqeJ9N31Pw",
  "key15": "3uv1tqNNWXxwfEUWKBiHAsq7Mo35nnPQrCJVBM7agr2sg1nw8ujWnZDuj8pYNM55hZrVTj2zLiyAuGEMFF411wH1",
  "key16": "2KFJker9DTTWcboFLg8aZZcJRgyvk8XSwvjkLccYYKSh1CHnHNRNEehbr62FLdEqQU9ZrCBiCsbryyqJ2GBBE2mt",
  "key17": "3NLHZbeB8Pi3TowGopsFGtTP47HdvJRin88uqyyVGqUhhMPvfSjQ8bm3aSTFzcLHFGYhsebuNfWNqGdV3ek3188K",
  "key18": "5k83EGmcv2rrcnbCyfbq9XX7nVfrowSnhVh9jgZmWrmMboJY7VgG3Xtn9U1Piw7mC9S2XSs6ynyvWGSmt77gew9s",
  "key19": "2pzGyZVQt9e43TXWagPSwRKi5b9UnZ34tE5RHviHWx4ySnwBnLTwnzm1eJ3kiaERgn6RHJrJaLbgyqsoEBzXYL4v",
  "key20": "2ugiP7HPFKhBcei13oq2kqyJdo956unUZdQ98tZ3Uvf1vt4KFRQdMHz3AUdUn15WccuqZBs12apAc2Q6pJ7y2QVK",
  "key21": "5Yg2u5NXthkxGgqZbuhmL4H45dPttyarTj7uoUP4RbkMCiVdJ5SgubZVyrSVu1w6qvQumUGJ8Z3qZn8TAYHqnPix",
  "key22": "ExGpWAenMgiB2eAhmxst1Z5jeqMpUmrMtma3tMzVuFNNbwYNdUHPMEbe1Jkr3DXgZRADVhy25iLwUPjHTULnZx7",
  "key23": "2ahW7r2er6RcGo3RbW5rrQx79eXqbQDpyzpuz3JNiXrgKJVuAVVGLWzYVUdffhoTvnFSfyjqcY6DQENXuna952A1",
  "key24": "4QNdTxH6VC5Q8MX9cdtwPDKZaVvJZRfqEMHS2Zbtqpk6khyBxBwC1SXDrzkD77PS8fogarYgdK5CZqTftzdK2cyU",
  "key25": "3edr2CcE1x1e1vEd9u2vgYZAf797mcNDfGy1krJJT8mBoTiE4L6oob5GGL7NWnpBaDWPdYcp4U89qxvtKaot3Y6Y",
  "key26": "2eHp8LHEhkkpEwRMkKmoCkVFsxMC3D78Rz3rxobG7CCfRkrc6sDT3x4X5tSUYbX1SKHpZorVXFckzYds71UX9ZeV",
  "key27": "yBD8ZG3PLRh1f89i9EHQembycmCygZpGJFK8CkMXtLw2HYAScedhFUDZmUVP6pHagFzUbQWon572NJgf2oc2dbQ",
  "key28": "ycUYg2Vu8okch87TQYsB4TB5gFsbHgxbqeznTiZQA1kTrMQxyk7UN44PKeGApideZ3YCtwc1xhDDHSaD8gTvaG5",
  "key29": "3Xqvo7eN7TbM7dKABwipuHj2zLpykzwKvBtPKXo99z8V8Q1J86M74RJ7pDWh6zYTd7UbevxSRYstCzf8QH6eXeVN",
  "key30": "KqD2uEm12jVjTLq6t9AWqFuBrgy4qPzswinNNkFNF9ymCdY2hVDnaWk3VPiLuAfjjp2Ge3cFx4zmmNe81XJMmRp",
  "key31": "2Sofniit3Vkm1azSJwby5RcTgrZvLYvB3M37vptbFoE9TcEbNd7HfY6ZvLC24uJ6Mj5tN83XmJwGdUJ3Dm6Wo1xL",
  "key32": "3RyKWxBqEt8mHqS9wUxYvYoycrVvZ55jzcMGTi6EYdtMFfVmKHqFeAcpM2LVkhLyHtXY3izZdvHLNrRD9QVaGTWZ",
  "key33": "4R3zFqyM7o35FZk97yp8XXNxt1gJf7EsA3tXntV2nnXxDRnYsmQnPNosYaAGrJTEXvcqHu92dV1vBMZnB2CpbaKf",
  "key34": "qzsKs6gxosG3jFgjwdC3rYcRj1NGUvFVczc1VjJJuy5xm9bkKHEDXpw6Kj517v51P5AhWYXJyvPY6PmhchCBbjt",
  "key35": "4VqW2hrpqTgCY9F2nXa77fMd5nCMka8Ncq1w3i5jPLCDaBinuJThq4nkYQ8FhxK41Hex3xpaV3UVuBM3eW4Lhsmr",
  "key36": "5jT2dFHjZ2qS6WtYr3TMZja2z9NEHebrMZt7VyDKj1omdWp4njvgBxupjyAtyXEyd44y5UHUKNwxiMJjBMexNKbd",
  "key37": "2UwzGs3q2X9TiKfmJg6dvDfsKsfwGggVhW58itK4vD1szoQsfwL94MSSJVhGxb7LSnq3yvkZoxuHcDdskVCQiRgw",
  "key38": "4EpWpUFAEZ6o6W1kACUsqSjZMC83U4qsEUf3azJFCvJSTkrUFZAeLEtZ4DWpXK4Zhhdi6W2Q1h9Gyk74SCfNGib2",
  "key39": "42je5eMw89B1PKsaVK9uwmPwxtEnz4f9biB9pWsEkxwzYK3M8aP2RxARmHpr8gWjnVX4Vf9SYMptpTEc6xGeD2G7",
  "key40": "XXppSpGiVoTbJWECd2PDkEwwNe5G561WSLwycgVUgePS7GGRZ8wvCtnxRG3UuaHpeYohf7zKPQskoeVHXkYai8S",
  "key41": "5jhVvkJb3JJst3sf4JbdDDDnhW6ewb1GtrAB3iM1shTjqMpBqUZ3QjyQCLvbtUdQ85c4oASiZHyeRgh54fZugdnS",
  "key42": "3c1Kqeu81Lrw9xRjKdSPCBKyKwCmMYgEYUiZeBgJh9cg2Nm6cnzcpawBEJe6m5K5BpCWY2eQGigctLiqTS96tDSq",
  "key43": "2HcWuTM7n6MvtSrrUtojpWvGYq2DkjLooQdS9ZzESpCF2isXQRKeawaNpT9VYfiGh4qawKGNKCJFgp2H1mk96v4W",
  "key44": "2WnyLtXiPZYMQhvLV91a3aBX5jFYzakez9jihAbLt2zmpswFRJMAPHqNgxi4p98E8JA77S6fKECJfMQqwnJyC9M7"
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
