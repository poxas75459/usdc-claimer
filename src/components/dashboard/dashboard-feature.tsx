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
    "5GefSedi2ncceLMwDntqmc8PgcdMKqGnkny6uoEGurU6qQpYggUQJrTRpJ763sByCqP9nbsQJyKKnBTVgJ2XB8pV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LpR4FaAbMsgjUGaDcbErvD9ksLHaxJRXhS9pWDSmENButj2SFScdUhfT56ez7UnREH2dCGBbZtfG7GRAX5PQFLy",
  "key1": "2qhyV4aFgPJddiLtZ5uHcUUV9YhBeD7Mq2Z6wEyouJUePz5LQ45Scr3TF5YMgfdinfrkK5u2JMqTfyqTTLAhQYdj",
  "key2": "X8Xs2WQWpE2DKKwt1x9smMRmL2RwfGb4rUCewNeLWUsb5MWXxwBB9xvhcF69k9VqFoWfDWT3Pq8e9HDYvJ8qGcG",
  "key3": "5ZHypEWdtuRWEDmifNg6As75Xtbxkb8Dd3wdgYtzxNBrJxzcdRaRPAna21VFtCZrzZ1YMAtx6DwBkanqSekQVRtF",
  "key4": "3KU6RESYHRxBNXJkn3A14kpKUeqsC9zLg7Pwbp5nVGzFrTxYWYGPnmZeLhLtLRaqQtsy8Fsof3iTDDy7yQ8iqkFq",
  "key5": "7pRSi7PFovrVBQ5QLxcgnVfbH3xe1F8RhTWH9sVu7duCsw7mYD41qv3AAMNGxerwPgUFgSY63fhtA9Ch5MnzyKy",
  "key6": "2Z3vbqMdSmnm4fC8S3zvfh2Cv2gUKAMSkdpsddfztKz7yHXBkD8jWUdiEcrW8D1cMetvoTsPNwS15t4UZYNA1cvC",
  "key7": "42Wagf37rwcNwdSJt9JUN7h67dYQK7hS7yNA8GKZGGLPM7WLyKrYQTosfkr6ZVzeDxv713E91iNN4WNFTU8Y1LoC",
  "key8": "2WEbJzizeTkSCyb93BwD1uyrXBYyzivrcVmGFcjEuiQ3z62oQLFegRjqMDaZHiZUfdTQ8KR1oF1ZiGtnngMBSx22",
  "key9": "5vBRaLcaA7xCiTCWSHgjuyY9GvBxN7QmH8kkhGgDbaUm6KNvgjUiQ6ybzX3hX2Nra6suigRFddyQzwfny9L7gaxW",
  "key10": "2r2sB2FXwm6vQyTPEZYayVCpRB5ngc31NnSGBL8nHTyzLUUvfL2FACg8CkqE1Phknba5zeviL4PSom8o2mk4BEJo",
  "key11": "aexuh8717ZAJJNYHhA2SDX5HWSFjsDLprpZSjkMa5Vwub82BqzWVAf6rBhGqj8GaWTSxQiu14sxPw6Yto4SmBbD",
  "key12": "5NYY5nrSVhsixPKMBswYjy7usU3Aoej3WnVESxFEBKV2NuWW88jMn8sDYJNkLEGQpT53MBSBfVcYbabBypsBbJ55",
  "key13": "ERZhuVZWKvG3pgcDQ9kRZQf5WEUb4qgouV3FwP34zpPuGTnJkgVBQw8FSD59qxU8tcUpuZJvXnHLTZ9J8eFJo6x",
  "key14": "4srJaFKbDXtebap9A1NZUrYgpKkNwhUaGoRx5HVHuuH72m6MYvZy5kNwGPcbTsJk1weXsTwDCbstkvJD6VD6bPQW",
  "key15": "5v6HZJcdWBLgGXpNunZR6M9f3xqW4iPL8h7pdBm9hN2kz7U4zwyjnGghpGNjXqtPCS489c8xxATyMRziGRZEpCbg",
  "key16": "24v73sb1r4mjXNcQ9ebY8jbuKy445EbSDrJ7yj9aKe1Ksb4zYL5UWT8K5fpUcUBumTreYVoqyKp2CHJuAWaHZ7eL",
  "key17": "Bugg6qH8UxRYfBvvdewyPQRe9cmzt5GRsd4fgCKWiP8hb5XDC8CfmmNaKJmmNnuaXtiQ5Xcuao3wLUQLe1EazW3",
  "key18": "2wMTahq9ToaTbk86SiCqjQaK5k3rqWziHtcHXM89ZRpxgLuEyKUcvR2Z5gQTdf14RgTVdAKKBSSXnuqwh3PzGq8w",
  "key19": "48kkMGzou9Jx6qsm4ohhiUBcmbpJVA8oz4A69BS6CDf5BCLJTwiniEu2HZuJ6nPscvTs8VC9PFZq1DDbGTCWkddQ",
  "key20": "22Ltkd6M6ft7z8SYDK5Jxy4jyPi4Tw4ffLbQpvSQYiR2DyHdFgxvtf7zwNYdPdQbQN14ncsudn5mHXhG8Bd9rgNX",
  "key21": "3KGPGiV5wymrqMZQXSqEpAJB18aMDGNY8fCx81Pn8xNUKf55im9ZLdFp5iTvqQsxWSxrq7wMyVae5pgnfQgSavq7",
  "key22": "3dr9be6FTf732PBssUKHr9W96uDLRjsds9ByqbNZBjCvZaJmmXaffAqFXaAvdSFaGHD8PXqBrGyU38ARLMCnAKh6",
  "key23": "4m22wXrpPvn2QhS5v9R8QGjaoyGauonCsRu8hqQNW1VHo3t9KQYLQjrrZYPMT1vs3wFaHCE9HTeXTzxyQZL6VH8z",
  "key24": "2WV6CNndHLZKiyKno9MxUfVBuESNRxiwuxUZYZF5PPbKF43kXMKCDbNRK8e66gxdQJrLnWqQM43UHA1iZL4eWbBS",
  "key25": "3tBRRwaCyoLkhe4PTbvYsWJz9UUP57wuoda5QDu2GFv2UVyQApsqvHZd3tubvLMCRaQkB2LVcwZ1SztpEz3vYEbM",
  "key26": "4r3VM5zFAjYS8Fg1G58WA8zJmFW3N5p52QBNP29vLSGdcmG5DaP8YhVEXvmf6ruxNbCMeEoyLxSc3RwftqL8D4Pa",
  "key27": "5kMJRiz9xg611F5By37YfYaWttU9u6i6XSEvqe21xnRFE3ktRCR86Dy6CbYJkcYSd1QKJXY1Psxxa42tcxZLzAYu",
  "key28": "3RBQjKQE9NnneHbESDfdBjfE7xBYBbxa7j4uEVVgxAT1Snyoa343fSvAzUV9tq1gsHrkZ3FKg9oEQ9LLEnYZpUgF",
  "key29": "4X7zu5NiDoAuJ7KbPSyB6QoMntcFTdsJPKn45HxVvDvTdszaVhUQvX7qv2WKFYXs1G5wDZELp9gErhwwGMiQTyA3",
  "key30": "3xd9bECpCWKzTk3e34W6TTPuhLUmgku3zLtQZP36q7SbaT9vWQYebPNxrcg7yekuLPpYKdqiGUZwkV7ZqCV2C7og",
  "key31": "3E82hsTZVUbpyYe8BX16fF7XPmKNWoGxiaxStDdJoVJABjBSKwcNjCbwGebyLCbmA8juiqkEimHNdtNqtXGkM2Vs",
  "key32": "4mRTnxU13MNfACJSu5dhH6Zpov2eGy5btGrLTPXFMJhZrG7nxyVy3aEZ68d6M2Sp1vxhUvDUAoMeu8VFJkcSuhie",
  "key33": "4qsh6gUqm3kzt5LTXPbDFHsP35RDYydftZadY1utjxE8njFDwGRzRN7so5WKr7ZFLUrDdYm3eUqY5FWUYxg3rDYW",
  "key34": "X3jcDRhPq1cr3AUgrFkmP7LY5DSGoS2rk21JW5TrJimDu5JpyCj8Kubeqb2FotWL1uHAUFcTCtTtApR33fjhg25",
  "key35": "5BZYyPFXw4S29VG8PPyqKt55vRPsUM2CYT4XBedPvTaFDHRvARmNNF5VNHuBKBxKLDGtS1M465grd2BPEPioDhV3",
  "key36": "27ddZcTiKHRobqfvBzJt6FA6TbBkotXhEujkKnZXgPXPQSVMbHgNE8kYhH1irytbwMdkoCUFZryasFG3vTkeTPjr",
  "key37": "3JbNTvyPiKuG5wSLQLpVjVugh4k4EjnpnuQiJBwtVzyKUpkvmEaEjGJwmnTL4An7SM2juiXtnrqm8UoQJkpGSM96",
  "key38": "pWjxbfWUQRys5CLCcAYfndzxPXcP44wsN1kgnNCS2NzPrptD5EAFbAaCJV9cq5vdhMG4B6Bu4yWGFuPrSFS24PB",
  "key39": "5d1ALwVmxnjDBzkzaeRMRn1qvLYgTmrCZ7wKLfZqJbtpiKLP7HNcnRwi95zjnaiSx7F73q2g65JTToZhEatWWbHx",
  "key40": "3EzMPi6XhXzvd4kWqPWiicb2DFvVeoDSBAYHzGC7ij6dArqLuFv2Ss8bK2PkGyveWBXDdfiURo6eXie3gLqwCAKv",
  "key41": "5ZJDz4EUKyvM1jGea8omJA67z21nCR3iaKvAEamjFgvDhwgNNDwUHGUQK7Hr3UV43xxSbFJxtLXx5tLwWGcAy5c6",
  "key42": "2VkPPLNhTcQwr4cXpfDDHkRD3R1vpJN5PB7eEP52MNtMpXt8K888mB8wFcMLHNUKYLAE2iv2pnYjWrTwuV8Knewk",
  "key43": "4tdvkDt8Z5MTH4iyyXkVcdA959YReUY4QZB59uTNAUCPa8hNCPMiQvYcTr6YwEba14o5Snw5caX4cDAgvyXJACyf",
  "key44": "5RuKF9hcUCyCvsu47XH6vzkhBJ9h1TwWkRPmWrS3pX8pKrxgBFJWiS5gzxD2js5UxgJ1QTjq9uBXWAmrCtEuU8PX",
  "key45": "4bGEXvYdEPHKDqBb36EiwFr6atdnQeLfyMnLuip43B3tzcddH9EVK3JaqBL5KGA2mjXfqxAszRpdQepk8jtRxLdz"
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
