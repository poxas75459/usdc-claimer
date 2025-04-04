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
    "3QQtqmSKC6G5g9T1F8bhpv7K3Ebz624yuBw2WGqPsZB3giEnjpy2n86Hz5sQDxVa4nemUFEBUDBGp5nqYCBRELDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pHyNteaF32fUDGKhxVKo7qUwt3MHYaRrbcp4gF3QNS9djw8bjTxYqCJy2XHW3983n5s3u8NRWCXFAH5izTnTCkG",
  "key1": "5wDdzyxVBv7N7rXdkM2N8PNckyxGGhrSDmDBwxohWc4EmJwbe42a1kdao6ptEfarXiTCcuWEgHqaNvQV5ViCiJYv",
  "key2": "26pY9Q7uBD9S2kopDEevSq3dcdncS3EWENKGMa8p3SK3kNsw33VR6WFAhsHPD41tDUHj6td2uBqvuLsTYa34dobn",
  "key3": "4xEE972EkEwPRtccVD7Y7vhLW1uvY41iuthsY8tBHYgYycsFJip9275BWNtqQhU8cjwqPLZTvPEYZ3XJeZdJR8Bj",
  "key4": "2M6vSy9QemYcWetavjSgxNNHg4pWRY3pYUvMj8NMbDcVZyVqyaqAvzqvWmSk7g3WUPCw6Q8EYKXdAxLYSPZhvaaz",
  "key5": "kt1BiDP2XFYuHx4JSM6jpQdFMx4NFahZztUdDbFuB9ES1L7V9b9ghKsSjBFS3sPrpBB2BSyYtNUGkdxWA8vH4BE",
  "key6": "63pxghU13hAmPcAN28c31S7VBshCLdfCQfHSwg4v59E1gWQLrAN8CVkJ69R4UsHk7riSyPA18pvTjrACLFoWXTSB",
  "key7": "24mJTpXLCBmcAcE5R3oE5EdkmTWyBNDdN38SQ4s2PgAQcDW3UD2bnE1U7LsnvC7rh6SPUoZj5oZna7P1odtgFtEH",
  "key8": "UwnYDBV5U4Ad7SnBrshUwCVAcmoLWrtMHNFGh9bT8dUp6SNSxpp2LaHbtKrfVSaNf13CmKPQ9ywXWFBVUoMCfWn",
  "key9": "259i15nZyMW842gA6upycm6VnfFPPnt6WdiuKwvNL78rwdrjsHExQCk1dTFZJjavyYSgunRyokZYFLau4Zzfhegi",
  "key10": "sUKfZQKXCKMnCUmrUQ6EWiUkuBqSdeJmUg8bpy6pWRsXp32HQxJApa2GPGRH3btPBiyaJZ91ZhpQX9cp7Poio3K",
  "key11": "cqT7Qi4uGHtRovTb4WhiHUqd1v2raD9K6Fyh5hDLjaqEbPzJs11JrmrKx66sHFt2n4LM2o8xHBEHuousCu2CLNb",
  "key12": "3QdP1Aoqh7aiZNA5yYiZnVQKSnXwViXa6bCvGeiToqRf73qW12ZWVtBkePfFHpMxbtqsqykF5snDKVyk3ZK5xoAZ",
  "key13": "5nyfGBJUZZ8JMLAgXWqUCxPUBFPkiA9yyVq1sdyivvkSFg9MpwxQrX5UxDhKeGL8m6mWQnUWjiDdBv8Ngedmp1La",
  "key14": "2fqgqVNvw69gxXShASQpgRXhZ4xWbu1i6GYZxMnxzs7MT7LYPYpY72AG8s2r8ekUHzU3kiHZQf2YT4yBJ44r6Dzw",
  "key15": "3JNVHSWMkmA7qeJxyQbDKrJgAtVCBpyiVe6A6JTygLqy2m7pDEKu1Lie7UGtj1QAMHiG5xDUWEjrvfrjnFe1H7cV",
  "key16": "2S9ryK1cda8DpZVAEcpEcQcohGN4sHT1wGnJE1x7KdrNaUxdM5XP8LoDYjAL5jSjdbGJBsgwbRKPiJ2m6qhVTvci",
  "key17": "4z1NdDFnyKdVaMvgqA2CKWMtKTGXGmUEKjuoSB8XrpCvfSvWJQ3ip74KDcMkWxwNhL8YSSn6TCzyn4ApTnv1UbQJ",
  "key18": "4V9QUuK2yX2sGmctih7ayXZvqtTiGoxow9shdiy7CfQRRKFh6AgA3QBL5ZPwfpmmKnEDx6CNXQ3YWS969wkmozh2",
  "key19": "2MtjSETWgXgV7Wt8aVk13Eu3UuBZ8Q5K2Z47DNaCBwasiFhQpomnvdWGQxmN5kFVSAogDhe4v58kCG5RH7VYEsnC",
  "key20": "21E6t6qCQywGGXbhgywh77BCUixbPVsZx65cNS6YDPWadtj5Huv8Fg2gK1eDBy7g2bFkkG9WLRdEbnmdAKPWSQyx",
  "key21": "2LMhAiKxgeA1cv5fPVDiXVYtY9U5rvMuQJ4KBKZvhmMcCNUcgecTJWLzpes3VPbCFh62FV9NpryFL6oNEicqjzVg",
  "key22": "4FZ9MpCP8tFaLzGFqt5sPV9YP5EVibyHYdtpTbHy7i2Woz19xc1phLffguRHFFhdsVMM9KC899D7GsQp7AcBXop1",
  "key23": "5ubjxhh6tLvLwB5NXhvYVaFi4kEre3M7b64YNepKg2FR4Yx3fn8CsvL8uJvQi1LQwFUJ9gE6hdtjc874DsWpujMe",
  "key24": "4hFS9BcKquGcaDBYJthP5LA8kcFF8J391AVEyMEmePkfiAWeC2X33UixEmCYh8Xv7jVbai9LcituK69idNZVfdZi",
  "key25": "64yRrAmsJRnmc2WqELMeeAvN5SzW8YTd7z3c39c8VEGWH2N6FFUvSwpvmUCVC3hLhnRmDH93merMYTMixisnk7Hc",
  "key26": "4kdNuZ9KMVJJWY135ABDdnCZJyfZYWNMg9LpQ2Qtwj1t51BuTpnmUuuhvep1hgZhgaWki21e22fq69hZ2mCyi6dh",
  "key27": "3Csb9iSvLcXMko99C58kDuDXTk1xQ5RxkAktjMNAKBgztvNbYJ9gtbeB9c7A2BVkUsroEyJh3Wk74jonhvUpwJTM",
  "key28": "5hLJhXeP274wsUDtXReMEHLnQS9NenvgFRr1oF6hBErxJL1BmMQZADVxZFSsrDVuuqCWtfCQGphXJfSgzmpPBqVi",
  "key29": "2bCx7mwHNy6mnxVpBwFhEuLEFWLY9LQ6fGffyPUtcgZEzUEuSsAc5uSBFWxTbXMP2qdABQatjdY5fgNFB7hfputM",
  "key30": "3VeSBu7Ao8xuUnJJ12gyyYmhoFV9Sds9VKr3eUvWnBqbKFJvi2x3voV3RgYgN6oKuNbDVRAKnuGFxvZ6ykyjBhmi",
  "key31": "39ACtYMMAhRSYPtfT9M7yAAuCXxzuvJa7gnVubPEfxiL1tYu43GUNWPTxfEhieRbkoJEHfz3vjcfCWczAQK5hctF",
  "key32": "5gB1G3BGUr9QaDs6QypQDijDeBTQ56ZLSzokf36uqnEsZn5npVzV1oPQHeijS6jHQ2FRQYLp9KqudJnAqjbuucHk",
  "key33": "5a4GVDF74oJ4YTEGbim969YfHSacBj95No1Q1rTdqrxkeuSKUUMPf7cz6dwfksjJFFhCGw6yfiJwYQxwurLW3pQ3",
  "key34": "3JvpkSqyCU4tuG2HiyxpJKvT7Z9zh2S2kt8KuW5fiHSBQDgke9gU2nWWr1Zo6U9ZcqbpCZdpf7b1PY5F4TYG6UPC",
  "key35": "5D3LoL37Cuoac5fZ3dmoqprhmRDTND9wndffGLh4EBFgyEKRSy5XTpkE8KVJrBCJa7sJf8RY2tiyEGNMyQ83jYLL",
  "key36": "5Wo3FJWd8RBdTKwPreowdi9nL7kzoXgbuoqwdqb77VFSsPsLrwBP3ByrNcGhS5CqYz4Usa5g4FzCBUKwabcoUUJb",
  "key37": "3MTwhoqoStcHDMxAFtUMn44KUbuhCSsj6Copokzdaw5NjtSByKZB5kqA5cxy6Ec1F3N4wB95n8qTE7cSP7KAD9SL",
  "key38": "p9dxoxXJd15bcjzErdZerBMuvBx2sHzxbxmZ79Nnd4P4oxbLetHLMzCJRMNdUovExmrsc9FuJGDzMTxNCGTjEMG",
  "key39": "51FkGtTijyH8RjZnQzrkVs6wUGHcVxxUnwbnYkhciwMsYVLPQZvo6sSRCbFU7uwSDrZN9LXpGJn8XbPEtXxSKhg9"
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
