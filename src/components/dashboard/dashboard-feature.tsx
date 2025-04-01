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
    "3fC1XoL8K3juTLDABW7k9zcXuEUjDPrv13sYUKVvSzopSvN8RA7WrpQN74EJS9msbqu2p3mFPwNJAzr3SXiNW8H1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2839dW26f5nQ4WycwYPWLZtNJSteNQx4dttBNXjUUSjJwSyS99dKsEAeXfcpijVfxK25Xx5Pxk2mwZSaLMF6etNo",
  "key1": "2PsUuQ56vpotitTGsMmzHvWEsqBNZnewgfSr4URCckfDtnvpS2s2tbpq9uUhzcH5Sw1qhZH8WA4TgXaeGiVJqaQP",
  "key2": "3ANkz5SVbpYiUCCBDXgBWbJxVuTjPwnvMwqRQMv1oSzTi7SaRAQ34agDaANrb6T9qRgNLYJq96wc8cCZPbNU1i1h",
  "key3": "5YwzxmRpe2niB5RufJpP1MjdmMqcT9tdSSVh3W67ZjGowvaCc4TMCWsYgcudW5iCoN9g1KpwDxhs33Px2HhsZywQ",
  "key4": "2JqXsL6SUVVmiuawFhPJ3HH6pYdZX5TEUN1m3RZSmsB4oZkKCvQBe7FQbBR8ZZUwJBCJNsDqAVFVTvFMQD5VJh5V",
  "key5": "4fLFtetAP8YNbZz52YXnRzuntsx4J2s8QXJ5aXGy1uKf9WoxSebKdYhrTHTmn5f8EBroGMiUnqVDS9sZFz3LPRGh",
  "key6": "3S9B5qSLEGfbTjLAeMgTd46RjrWWAC1jqiqiAGbZaJQNFsVTo9hd1vfGPGRyq7B2fyEcTRUPW9ULytEYgECGV4Z",
  "key7": "2i6Bj2otrSCFNNLZZZMzDdKBqZCuuo4N3mvudxeqRY5TrHaq6bBM734KqyA1NuJCyZXkTDqnQ6mgGidKMR6C5Abd",
  "key8": "2gZhujTxBCpLnjGyLADya7cr4AGJvpqSGjG9yfXbgDs6zaoGGVRwP8fQB5xiSfQToNkNY3nffCf2G1KtGqPmsXxe",
  "key9": "2EuweYjH1kgwde5Pz7bA8GKTFtUwvpmBN3bsaXkahRKcGMkvJY9rhNqXJJnxgnAGJggZuXLT9grHeUp8PysGUVgd",
  "key10": "5mxS5PTNjAr89256mVyc8XDMMLpvHYJSeUZYhJCgG1Mv6dFffxoXvcQg6s73DntjGHyyekdbJ8R2DiCqjQ1fvYL1",
  "key11": "34a7XLMECn7MbmE4xibaTt5ZxF4nPbfFajhP2midDLsiW1kNhUgmAnNzwivraAH4StY6ZEPNpajQuVKMNnWmUb2o",
  "key12": "3AheTCyeNU45zThoaYQSfArMxjoUArVH177nNAx1kVLCpPmZrBPaNQsXvgVg7YaVXLJPRbZk7kRLX8AnDZnpWp8y",
  "key13": "YgpXsA4k3cPdCHiJ8WGcfYFp1hy2JsMxBrA9iJr7MyzU93neGJYi317as66582mFP8HkUuFSs46gxthJfYi98Ms",
  "key14": "5PJepTYAPcMyhWK5vmeCj5PUeMV2H21gaHWuHZqpu4p8c6HbFkm79zoT8Sew3FxEkEAY24LjNAWQWk5xQ3XSQUoD",
  "key15": "3e6WS3vGtHSqM4XggpiCNaMdyX8omV29TfcfHxtKgTcef6smiivzFwMA7gwUiQx9mcXNJLuTWTbr6Fn8tGxug5as",
  "key16": "2E32hyYJvjvpaJdVriN7Pnw61ncdgWyeG1HA2JLPDNsw9qpadsJHpHGHH4ABujeJQh2p9tmGq3F3wPykQTC4WwpC",
  "key17": "2Wm2QZSLgmiwyvrmxkPtG7215gDRdJnRcmeaBU4r2dqpEE2bmjt5139NiHnQxNjSY7fxfa6uWheTS3b7nFyxdfor",
  "key18": "3JGyKvLv4tTT83ZUbdjN4LSGasaH3baWDR12kjGemqzXi1TAv7KGjHgxD5eB1TSSjG8MV1MkBq9CCMSrZ9V1rGbn",
  "key19": "2sqjsHcZhmZe7KGH5v6cmaFPuzs2qhFquVHdpYyfyh8AB5azTvF4MtaYdFGujyu1Z57zHa5dzA8CQVfZutdi846W",
  "key20": "3EDdwwpBqrToPb5RejxD2q8rAN4RDwsP3zsVgeTFtr4ikfDKFvhhzaW1RX6UYT3NJ3UK5r3M3vQzFN1BCQtRpNmG",
  "key21": "31r23N9e8R7tDADf7Nxh4pBgzWYXuUiw1ANZJNQKZGt4SsfChrAAUcXvz8hyhdWLJMkyEdtKPk73m7DGy9mVarGw",
  "key22": "51C21iu9EkC7AoWHnnWmKGg5FZks9rR6Hi3uBshFyYYLbfVQXqJPEfoS497FGi7P7ST5HKffppGKPuosbGCyouhK",
  "key23": "3YYJXzzKfaXT4vxXaR1dA7k4QDderKjakeDWg6UBeDGpHrNRs9Rw8v7dyXvM5cvKjMMqSnhTvfpxaWKF9GRsd5ky",
  "key24": "3eVZmrbyyPAVm9VKCahxXgasdQw9Qimkt6tBB3KXyj5W1iEWtAz8pGtGX1154y536JdqnPFqJJZ1TmQGnbm8FtiK",
  "key25": "2uwgmdY6f3zPviYYJkMmn21S2RWghNKb9SffmhL5g8AP8yrUq31FgzuD1hqYCEFWK7noM57Gx4hJnB5gG2K4k858",
  "key26": "2XtmRLxLCtyC57WQStB9jSvfWCkpdEuRGNnukfyxLcYoCq6MHTWoQ4ygPvch1apqoNDJwgCgAuRcaTwipwyqtYgZ",
  "key27": "DEPAZxgFPJdPN5ehRrcQushRi87neE9svF8HbpC38EJhc1zKjMA6cibChHVZL4TeG3xz93XGjZ4Phw8qjsskvkb",
  "key28": "2MjsjhmbUbcoS4yMrvAkQ5bkM2z64TkWApfT1nwBREAfBKby1CvFA1iYXptNjWL4MFfjveywtjDeNq5cAbTDC4K5",
  "key29": "3NoaZodZcHPa1ppThfZKAEUhhSphUzUWjVPtBtiWW3gYhs2cRvB44PxRQYvXrkpws173as1whBp9DkkMm21WKStL",
  "key30": "3dxRBoLcDYz8qNJkUfTya9QWjrwtZZv2bXQtALT3uuDV7YE8RE6gsniQXYuEriEJ1yUgjqoAwWrxWRdPubdW9ms1",
  "key31": "2gR4D21ZujRu3mfmMry55aMh8CFVZRZWPGjLB8RkWwCM2D6UMyroqnKpUgTBR6mzFWBR9MYWbYpWtkhXQS8FNHdr",
  "key32": "r8KJCvVFdEnPBwe5JbZpSHDfr64Pc1k6cofpXc8963ARkTsd3AN57ZaExgdtSZv219Ng7VCWM7ySPNWgeyxkBFY",
  "key33": "QKPBQaiDzPvqxhirFwLz3wkFaJj7ayfJb8GjZWbcLKSjNNPTztCvbkwZt3NHbttSh4AnTY1TvEg7VPggTzx5P4j",
  "key34": "5n2D3BLCzkRqejwx9kf3wzPKuupbg4a9CVzkyhB5bWDCKSUxwYN6VgqEcHoxmiXvADaZfmZVxw7DXu5yrocTQyK7",
  "key35": "GZPTdvZyCtzVZxKtBfauvgtdwcJVfsWkRYUSmm2CeDQGRjzSsXVhUFRGV8mYXriUqrtsbrwoNQQpYWeCrhrqX9Y",
  "key36": "5qfh3gCb6RCtfJFZ2nstdvsB7uDVY9cZ2aPKpvUqbDxnU6J33mL3NJLwVdsDfqeGkbongodVjHX27Th1cT93AcHD"
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
