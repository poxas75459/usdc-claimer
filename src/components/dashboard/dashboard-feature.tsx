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
    "2DeVQQDwJQ9WfVWvWtcY9ExcTAcJzb7GrRsHdaiBJAwZjXpLLgBaE2NchvufzkLZ861ogNE1VRymikXvW8F8Lbrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JMigb2rzRpYsX5dcDR856qRoGSXAuk8ws28XcPfiM1xtpdMgiL3cGyGMrSBXSarJD1Krq3hhZkVR6ajsWHGB2W1",
  "key1": "v8VcgafauqCNRC9RvrusArUvsxAdAnLGvLMWpE3GFH9QsN988SC8SXqmUhAiB4HYFMNAVKFHahSwWCQNCRPxU5K",
  "key2": "3A6aRLZoi3A8CNQNfSGQ4wJ49VgSXRqRXXYJ8gMAtbkAaN644t6ZEprwNSPDCvepF4Kg37aGpMCDfgje5G1QD1Av",
  "key3": "3xKT57xx3XwFNUx35txPpunnrU79yjx3XPuqTzvw2LsHirQkx1jsGxJohitVFjhNp4pAhiphrJR6DTjztWYYo5pS",
  "key4": "7Qj4aKCV2zXVnUgxEUWcHRVAVnzAu57pWrpSxJcDtvgwLdZbSJtgVe6nPgM1dHe77ci6LoWu6Mqgerug2qEUVwq",
  "key5": "QapUSQNTmG3YcCGShEM1w9yiDF1yZ4qceiCsRbMgCADvnLGErLG6ayHXVRMTp64UbfREBGve2fcaSVzEzQXam1N",
  "key6": "3f7otPKxjqxk4W6oPJzq7t2CKibekR1jbN6W5zKZhCr9Yv5fHuLS3gcq9ToA8yg5thKBDZ9kNuzZxWuR1SgSKJxQ",
  "key7": "5Z2n61BTzrrPhcitTptsBPo8Wmvq24NEX4EhY65yFaFP6fb7gNn8rHDHbdgBoHxF4qRL4ayiqhFDg8uNhGgmUCAM",
  "key8": "5wobvG58fRpMssFdNqwfrHuTAwy9GssUkXtVQHYassBkPygG7fFE6P4nd69sQsrcoGer5fd9rM13kgXgMGHmpnCq",
  "key9": "dZwnnGKRbomKG5oytgZMYJ8s9wVbR3dg3Vg3iiuoLbM8CfK9AccAMnWP9yNt3dUdz1R7XrANex9mMXgEFUXCzsd",
  "key10": "2ZGhTx97T9yNUHjkwonF5cdNbuCjQZRbNajbkrnn3dmSE8Qxa5gBeoikDeFJMCvsMmipA9jpAJrb2Qi6MT5kedoW",
  "key11": "5peJRYEr14y9u5uPW17zTJKUYEVdCdUkMLKL79NSrvLt6A6DzZwGwEyyaBywbRgFopuzNrnGAooCHsxpputCQVUK",
  "key12": "4WUw7mM6fA9K8dw4t96ZwFdXjPW93hxDgZbscqCQH93NCvH2zWjsy6hpHFTeCzscW4kNyEP7HKFA6DSRAn646DzH",
  "key13": "38PqXPUiqUjbGJJKSiZR84v4BAt8KSMKktz5E4gaJpyqnY6i4fLZpmnxBjdSs4Wuh5cZxF8rqBWWeUGZZ29S3tXa",
  "key14": "2GofJPL7mzsLxyfEK5LJ4gXzSKELybDhFtLdHZjanmUtFpopignKtgGn2HcnRyTdNCX29JgeGf4kYK714c5CcGPf",
  "key15": "3jY2YwpEbnGtD1QwMqNxFeqJ7ZULhcDUGqNzxpQkqy6Y2X9kZUTRuTzwn2MiVTDqQAtGnUzBKVp5Y4CVemSwCod4",
  "key16": "sH69PSQrtVH3ttvcVHrjsFbnThvqnKJQPpgNK5gPaDQiaSPyGVYEScdn2XPoacmdtE5SHyiwRQEevAF8tqeodJF",
  "key17": "2Y7JNBn75hA2KpWr6Ya7g5T7MZaik74n7pPNWhFdHnoPNeyxyCvGVbZF6Vt96NHYyVqCyYh5VC5pJeRxmRAL3JJs",
  "key18": "5jRanc1AozRpAMz4qCSkk9V4PjJdKAui3qxX3VjeztiJWrvjqZvazi9WE7MqXgSKvF1D3yJvSxQCkyVbo8UCSXTC",
  "key19": "2Ju5ZsXPww8N1XUKv5wKTqpiL12nUt6uM64g98zefbHJ7B5URxuaRLwtpJR6PayuWgvhMasvyDWdMkKhZtWXVrrp",
  "key20": "46Mia5sRRcHhDioZan9Mk9WXaedFXwjkWM38t6WdMwPoByJtxd2g9CkhHgAyR8JN9y8dcVvMyD8ky2p5Y7vSkoY4",
  "key21": "66UJEH2qUnzoLMSJSBeJ3uSpRGpxkBDRsnKyR6iEd6saxK6BwwrgzMmpNxQfmWrQNRyV9KUBxVCufLeh3V1ZPj62",
  "key22": "5dJta9huERyQztFmfXqs2qizGYNafM96o5BSEpEohFTgSGGsnXEZ6AFPrbVHXWYDTesb4F7vgujoHJDnpqvGD6Ke",
  "key23": "swjJiQY3qxMJ7x2uzBDWYVX9fWqVXZP2e1TyS5opSNGYybQe8LKHkmueVum6Zb3TDqYGHd9d1xpnEaYaRLnivUh",
  "key24": "4SRofLV9MyrNLR6NshyZpERhAg9AXjoTYdVfxRba9HGpgtofGsx8bpvQAEppJa2F1Nzud2A4pSsY3qnLyec9XDFo",
  "key25": "2SxdtKJFHZ1FC1piCD14RgPrg4rwiG6Q1xfzotoAD63UHimpMEXWh2pBpqofEvevEYjkxNzX2ENbnguohpwjM8v9",
  "key26": "5ukaFqFZAs8BLoJG4srNpGyJsDTXyT6WNgJypps1NSeMSvxJYbNkbDGYxHocUyqnUPu84fXPEZ59otTMn5Q7JyzN",
  "key27": "2iFHUDMB9BaJXTA2fLUi4mMLrCYVeKwt5MRoMv2tT8B1VHvNPPreW4nWCRQmDy9iGC3YrDR8rE9CCZR5nhasGLUR",
  "key28": "5An89xQo8DTjAG8HuS3FqkZRouSWWha4N3mEA1H2tAeiRBWEBvYJPWJu989pEQ2PZdY7YrARgfZ3MKeLzUa62AGt",
  "key29": "4NWJ9Y9ZiAarGmhJUoWY1jGMx9gbsrSjHUZ1xNnacWe9vhdyhraQr8763ZxbDtjDG4DFeuMTae7a5vUNAQvGygoG",
  "key30": "49U67eJE3ZMvEz2FgoEXQKArHwKoBPiuLicqHVqnWzptgRBqi9M26ctfYPiT8VsYbakmw8iLWhjgVxTJbL8CEhMj",
  "key31": "4Cu8aF2yBxKoKQaH8Eecc2839bTF3tL94hNrPZYvgvhnbJPTW5niFP9EhCmy23wDefPXGBegfdBxtfsnL1Cah8YL",
  "key32": "5G2TZWgenrQPmo8Gn9UY3h3186NqmiC3zQ3gY3VTLwz8VVb5VDXj5bbAtwBa7hJ5T9CfazxkMhJiVw579JAUrNq7",
  "key33": "4DhpA8kRJykP4FygnVgGP7gBf7fVCY14ZebyPYibZ4CE7EnnQCbrUW1YcwUbgL4RUMVi2mCGTN5jMghKMTHiHsgQ",
  "key34": "3MFUriyJXjq5HYt9NXss1V2t3tKCcbtqQcw1f1pWtJCWwFTijHeSRc3jFuRribFPRhrm59BsmkHAHLHUK7peUd2Y",
  "key35": "4jn3cecrK39qS5mUBp1fieVkndYFpCPBANpdJbX1iXh1VGo546fXi3kKcg2Wqyc5Ls81XKVa1U3429HtrK3zs4ZQ",
  "key36": "5oxqxK6DEoZJqpdmVHEtgTovVycXkX7nZbjbdvC2oq8y1yd2Gt6z7zY9USF4sUDM683uNpvWBGq5n9rV3Ntpd7MH"
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
