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
    "Cx6c7ZAdNjM9zZtvwiTfejoGfiD4e9xoQo247cusE9XejseZD6LXRForrvG9XRzNpNWbSrfXFSBYLh2Em966KkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VWSytCyGwtD47LqRfsUG8a4ZSyraenuqG36Cb6imY8x3mDTa8W9pmSWJLnyoNvkG5TSiQJsxnhfjDg4zzFxU1Nu",
  "key1": "5BzoxebiEK9sqqA4YY6vugqwhYT1WitUiqk5m3F3E6KH9gdRPqtyHvxyZaEZSYXBQM31vaLY6JUJpEPJYHi4mdkD",
  "key2": "2NWXBmzRuR2fHkZetM6pBtys6Xi31UGRf1HwQuCE9xBGUgRoM7nzK7s3Unzk6Qfy48xdcfMpywo8tVPdsoxzEjgX",
  "key3": "4JkbAk2yaGaFf3WrW6W8qpc1WgAgoQp1APJmnMBgfb7HkcyUn34EjjKc8ypER1wABbktFPHctdUeSUxpif9n6ypk",
  "key4": "qN6rzL9q8LV6tLF6bmKXd1kWMaomui18WQk6KwXuWwe9rNiEQvAVcVi2EXg3fGC3cwwgehMtM347yP4PPRwGSdk",
  "key5": "37rvT3HGS3jMr6zDH4yq7KWtY7drvDSaXBpGjRbm1qvp6RDEr9fP3xmrEFnD1mz2dwBVgC24b7Sh7vmjsZbvQM69",
  "key6": "5Xzh6DG1ZhGoKxJ52SNRARzJfWUehWLFULmZKPLMjfLFmTP3J7XwFV2CapDcAmvWof3EFPi9n1ynHsstcsysCbaC",
  "key7": "2FKW8aKF8UCbadYsdDukREaHLAT4MdMoRENgafuCAHpEFLXEhCcre3qYE3cxNy1zkZ6DLtPzRF815rqswtNQUvRi",
  "key8": "5jm3fTx7JraFRZXVQ3gZQrtT2Wb9SjZ4i7CQrAhBUR8DZBNZjxbbwAH3WhHz9xiyexFfaHjtyZ746dTyVoW28X6P",
  "key9": "43hTCeTBtvBBgKwxQjibnodF2y6nVSovg94WcR98GqvLs2R4W3msVpHKDFeUeQpefQ5GQqep1AvS8W2X9U4ixqni",
  "key10": "UeZyJ5ggREPxSdkpWSresvfmVA4TTmZT9BfRnqZ3ikPauZsPSy1Uc1sucUwgWJARKTqUViuqzvn6wTm1vEaTvrT",
  "key11": "XSqYRhLKFE9HBG9SufZVseEQvvNp11JTDrtywAh3qHzCsuoFZd5WAnhBvPwnzXcrR3cyKDyBNfmQHvR4hgr4Vpu",
  "key12": "3s1DygZwjE1xjWnNnnwrGR2inYaoc4sCTUQXRdp3gxpGZJs8JTs8N3Gvr5d4rX3TqtdmhfYfj1yDn3fTqmKsxPCB",
  "key13": "mwYEWZGe3JS6YmsVVVWge4NX52ySMqpxtvqh4vuS2pgBsTcJLwwPXDKHS3cp79jAy8yJfwCi4jXSybcXKt3BA98",
  "key14": "4WSQN6W22jSQVnnh4kT5T2ndTDdjuuo89mQAb7jMMHxaMeyC712PBUa1f113TWArHNDAkC5odKcbhk7SHX5qqKYV",
  "key15": "4uJyNpjtU1c5ofdK9HmryAZZdnd9efjkq7dNCbBR754zaV9vpvtoALKLV5jZqj18PphRBW6Z7ovT6MM9CepgKAHM",
  "key16": "2stJVZTHUnxjck2SeiAdi1v5XEVvMjDizsSMFUiHQJBj7ffw7dHrm5VcMDGc5ntPjc7B9taWcmhNuXPbU4ZnVmRi",
  "key17": "5ME8Ed9pNBthUqSNzP1f7WxMxzM3LhYH1EphgUeP4gc31mCaSYPu5Dpvq5Dy8KEaCpYhqvCmkmz7FvYwDXBX2GbE",
  "key18": "eemCzP1Xu9B8NkJrJfaidd5T16HK1DhUfvVuFi1UaCkdXNGBqo2KHrsRejmqQ7GP65tAkDE2FXZGfuMoPHkXbxi",
  "key19": "oL6mY1ncURsdRbnApxMD552Kh6TgNDaknKEp3k7PQAuU4vxBP62eyR69WWNFPbeDTh3xX9h5E3JSnkMEjiuThU4",
  "key20": "7TVaZVg3NdHD5dSJXtZDDc96RqbfLFuTQWhiM9PdJ2ZZKqvoL6QNQVYdfLWapZG4sFwc7bSQFAEmLTRR1oPZxZG",
  "key21": "4umREfeGFsUtYMrVYemtxmtBoaEvH1jRUVXEsWotpVpeTf4HwZ6D4vXpx1R861iTyVLYGtpVsvXLUAEkYcVTjtfJ",
  "key22": "4B2y6VZcXsLQszWdwNotjrJcYfwoF9ynKHe4WQ7PFXMb5WA4x3TYQskYwkYYr9DH12xfWyGNDraecf5wb33Pt2Mo",
  "key23": "4kRS8Avp4MiwpG2e4qfoHrRsr8KvfoXvrGMZY4jM4det5mSsFwLEUt74EeFkvagfd741evbWjddhoDNjyVXF8TT3",
  "key24": "66QnMYSZ8HnBjTQWT3kbKrA81HM6zdZmFgSTMzim6KjLJm1hdDASBxk1PCHQHSVsnRvrEz47NCxkRfz7PE2MtCGy",
  "key25": "2j5cMz9WCbB1NM4rC2zgQMWxqEi6ujhC2cH4vgXSJ3cWoJGKtu2Nvd4kLCGUPskC35up8hBBRcFcVUbv28FbgTpK",
  "key26": "58dBkwa38LsQ9Y7mUdc1Zw8ho2TcaGKz7wMtShvkZvAvv2zHsgS9RNwFZG6wkETqi2MNyaMH8SsSTSRVySviK3tg",
  "key27": "3T7LFbEH57VgtgBP2dGdXDyTuH3XxD9JtKX5CQw3nq4k2GoE5h88SXLborn7PFnAgkkpBkw2hDXnMo6gauW7MpjU",
  "key28": "2bvMusDBQ5XjRACaZMis9uvZiKPxDgy4dG27LPAnv7tJH76dF1mksgY5qV3rVjueuSFcBnPEJWq3TCUFeg9jz4uZ",
  "key29": "5YfvbKUb68MwEVWCZcHVHa1rX2spL66RPyJCskmAbSWPZQY5MFySpC4cFBKengLBrk5neYkkVjwJfuugosiC79uQ",
  "key30": "FLZLUf7zoV91kjKU9Zw18mYhDKAraA3ddt3jrA3WdSFnN64eZGZFFEQtSsvhyxKXM14TyJorTyictCKftXDia5W",
  "key31": "58tBMv6EBwqf3UP8Rquz174RoDzneseF6rakqR4pzZm7oQNav5jazRwSUgCLLCapkFg5A6KhQVXaawW7seK54CBp",
  "key32": "3Y1mxL6QvP9j8zkF3kmV6WoU3RwMbhNyUAVoPymRwXJbp7575Y4sgSqUeRSM1AgZwAZDTRGhue6gx4BqUpEMaYA6",
  "key33": "4JmugmsbkNtGoJXYcsWUJBwZcpzkBvGaz9c9QUriCMbhTT5ciWJsk6duCT2VkQqjgiVVQUXCMACtS2diSA5hxQWW",
  "key34": "4f3Wfntq8QCMVEBKrzKBd3LeJ2yfoeZ5u9mWdXkHpLJgB7DTM21H4dmQFwrfyVNcYHyAxoxCuEc4Xp4Wodhv593L",
  "key35": "2PWFAugvxCL7q2DyKMm5ECFYdBxLoKpzTGhtHra2SRRyKqUfGepVYu1Uf9p2Wek3e9c4vfFweiA3KwHP2KXS6b4S",
  "key36": "27KjDQS8rzyNftgYJiWoigFPJvAvJFKcZwboTTd9HLVU5byVDbCrmw8YmjNqSzEJNzz1zmoDcxdrqQR6zApW2L2g",
  "key37": "FRvPm2WZ4KUtgNBNb4WvGDEjxLhUBoRBrcsGWBtxWrJWb4thHQAdFXv9qW274idFy6AEEENEkvqevHJspf1cEM6",
  "key38": "3BWcvHCgs1wDeHyrZxamb2Va6qBC8W1idGiXTx9YZLq2ZtxktSMCDuTjjuTp6izpZZe9nViKDnLUqHCao6o2aiz2",
  "key39": "oW9e7ywHougf8ajw5tK3oBCaMSbQbvbc56kJn2Qc81NswYo7dNbRNc8eM1DkGXX2KTS8LSibnvX8XneX1k1zjLG",
  "key40": "64S2Zr33Pa6PfRcyuGXDHDXup6xTa31m5sRoK5V2s3qf2tgGSEjgUPSACB33Sp3K9rxiESVq57ied6qDziB8E8pQ",
  "key41": "5Nfsqe9EPrZcxVW5JKcE3QZiz1AzLs9fnpAfeycHLknMpcxxuS8vY8xuTS1GDxHVK1z2tgxmNAv5DbPUtxCMEhkz",
  "key42": "64Ghjo4BqeMrYLSt5GXtr8ZUqLGzMcLt3H372M7pSfg6dswP8aq7P1JwFHsk2vTXA1KdJ4WAFKee6GxWJUcD1b5W",
  "key43": "gE1yfpaCPTumgdjM4vd4uT557vjCksCJtDWcALkPa5AG31UiEoREiq7jDApWM5DfREcmha5zRizG2j7Pj2Uat4M",
  "key44": "5H549dzf9Kj7kgRnAksPPMvZh1vBRPawmJBuvx3oK3UoY5t6KmGvjzdhmJLMymwdb1kbquiQKXNBfm8UyRdEBHZ1",
  "key45": "4k4sV8tVawEL9NFFSsnGd1cjmLDwSNrSdvxGUT3QZShfP61gnkzHQMtZxSY89PH51GkmGSxdYHP5uoFy1KmhnUFu",
  "key46": "5y2iMt29v1YRmjHh3GW6MGy1a3VQHxqmAyz3jvFAW9XtaXC7qnmf7eLzrNEkB3QLh249wDWgAhJXAoaBaQRmEm9c",
  "key47": "2XWESB25FxRxYHoAAsapZrKWs39D9bxaC1ppsQUN56kigtpPjE38aVHQJLxMsA8MX5m8jhpPsRDpyKgQETLJyC2",
  "key48": "4gvqaPof3CvzXVaKLRST9YxWbZiWxbMRdGY9D3y27pA3PARYAScVASW3k7wjei2A1vTiDVnpJRDEWH6Zk5Q8ZBAZ",
  "key49": "31CqfKvBjUJVR9p18rtHCbMtJZbh3TTbiQV6izfp3SUgPUXTSoCh87Wc1Pzqt9AouwLG6tjCHwB2ejFFjHPQMfhg"
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
