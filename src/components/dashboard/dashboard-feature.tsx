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
    "4WgwnKUoQuJ3bxt2TZ7HMia36B7tyR5vKLrBh2d5k7jUoMjJmSwSQaCmcKyqycaXt8BWY6czUBwwAGmk26QRFQJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bJ7ThEuDKpvC849t3L7zjcBA3d9pRCpXfNR6LRwjkz3utKbogzTaUcKeoixFR5ooLUsbC6JPKan8YAAafcsnyDX",
  "key1": "4DDhcytXUhHtmDN4JA73vR3yLjNC3n5dRiGkCbcCuXanhLQiLMPzMwW84JdMT4EaWNda8JUVTTBhMteyc3hg8Xc7",
  "key2": "x8Fo5vPfszgABGenF16wvutJFLoPy22kMBZvHqpwavnZ2ZA5TQsRMR5UhJ7m1L6ApRNyts83j5Htq9QeQhpLFj3",
  "key3": "5bq6c7GfcW99g2XRKMxShqrmjHMWbtPcCxnVjYRhRr5k5rTG8tZoweABiPTAcxCowNzC2RrTfo6aV85gD2j37n7A",
  "key4": "334SZRddAFcLgXuCLCKzXMocrWZs3ZydsBWnzwq2KeFYiQuBZS3QbUtGychhJxkUfzjfGYooeo26KBr9PaPr9vjt",
  "key5": "5pKxvyVCH4yumy8J4vLnRV7ebHvTZWynKhn6EvkVkroF3yHdPJqvFRaunQWSEfzD6WogAeNyobuWPYbhRfe2Mq9d",
  "key6": "33HPNEdzv4RW11kpEDWrsZ8PP8siD5rdLJtExj6PtfAyDjvyxuzWe4NSdRfaw2gMS4eDdRwp7siNCirJ7KpguTNu",
  "key7": "Nb9f46A94Ezf4rmYCSSB1E7WZdvoZ8Mc8hfJyUF9pxUqvBtgtHPdRnSGV4aa8S83XLninXdrd7fyMTimNVY7Eqe",
  "key8": "XmNEiKuaRYHqSc47e9KqDgR4wejkd9D3cqvTogV7XTRDfJnvbUJt6ddpBnTTphUNkmeCrgS6MxJ1Gqubvz5uhEy",
  "key9": "4UT5NDAh9LevjFsXJxj6S5XvFd7essYeYGgxaKLavA7jHZvZs3HggsQJi3zjaW9cwytCi6NjgTbkL5eMJ6hVsR8p",
  "key10": "3Kx63NrbGoi9Au9yH14ZmXVojb83cnJg8LKdNzgRRmykToJQaJQ9XN95Vc92LnFVE8PiZSSorjwMptqBLmDfFDF9",
  "key11": "4WD5hNDz4sMCAhAb7ZPu53pTF5CtJ1RMprE9sLnZpNT87DRgk5soPiGy23SshXch9NFkAqTKANNZ1FoJwt9Y9VBy",
  "key12": "58QUcN26134wpQZicavHFxaWGnbc9Bf8cNHaYMTjMXxtw8a6EFikmtNiY7ksvFi2xPedk3iwG4AavrdkFkfzh1eP",
  "key13": "3tGdBhatGegRGQAx7ZH3YwQCt9wCBePjvCPPh14LYrM3Bkdcwu3YCom8HVi4cPQDn35E9Gdsyg7a9SjWjULkYJbg",
  "key14": "64mYAXT1AwJXFbjrt5sBR9pACTSyZgxgyfKT7628J2cECJePEVZWCapTAxbpZ3XpFAPXRoo6HsB9KCHEGnZPedBH",
  "key15": "35ArTL6RFaqpE6DG5LynFaFU9aKiM8kmQ53inFyZamkTQNK52ai2L5HHZquwJ51hqHuamTvLZ5FLg3fzzYYDRHS4",
  "key16": "GvrbyADQyqn4g33dpWAbcvFGMVgqgXECjNwkznjLuU2Nmn1JS1S5aNHS7s33wjGNchEmEZ4Zf9B6tBFe4ZJFwNW",
  "key17": "2L1TYDKnNitoRrHcJ4LFQ6WEXpDWEN5rUb6QCDmR68bTUsCvP7Dc5DLuGJssnf55sAJLm4H6dQms5efSzdjEkTEZ",
  "key18": "5q66Ugtt2RRiG6zktvpYpdzx5SpfGpwNiAsBDqiYe5T1Qu3uc1cEofvQwGoy49M3UZsrtyFRgj2acjxR1njvbZRo",
  "key19": "4dTFn5iWKBA1HXyDxEDKsMW3LgZkQs1j19yCZmc2aexAuFwjNbNzhdWdvi9kEFZ9wg7MSfbKvDMchq7XrGjxwAnr",
  "key20": "2FLuHqkvzTEKmUTH8kQFQ868PND7qMVpFm2179yzUzJL16VR36VDTBTGjNg3FKUEbAFi7JLDGefgbG6xakkBqgL6",
  "key21": "4LbovFZV9XGQRKQ1mSm3AMN5Cyg41jEyyuWbTPkAnXwNPZyoCLdvxDhXsWv3WjuT13fMZzcWzC7HkxbQTfNBXiQW",
  "key22": "531h88E3Bm9NvTMhyWZfQQhrXJfEtFivSUhgyXSXS4ChC3ejHuCtT9nVf44XbkLR8jdFX5sbiD4EGRpUbznaVLkg",
  "key23": "4kZjX1d66yWEm26JdnxZ2AhyDTiFvQCJksaqafh7FePz6wyNsGe9ZY4JzXcoJFadBLrfu6xt3pH9RAU9jvxxoow8",
  "key24": "295mivQvwTMKTNBF4qQRfJQopKmykWnL7wgqYjgdbPF896uQaXMBt7gmvCtn4Ge2xUSLWgFPD9GTsTskNfp8HSp2",
  "key25": "4KziJeKXgGq83Q2vGSLu2ZGrZPRpUpJv81TaLArnpRQPwUxc2bZEdXxj5KE3gE6CC7wjTJTj3MepDjdvJmbcszwg",
  "key26": "5eTidLvnSqfP9BsHDGhcgxAh1EfzKL1UaJtavZofrUx3321uKYvnSwRZxW6Rk2UWYEkRWHuT9e1ZrwPKM7LyiVkG",
  "key27": "3DqCCJhNEixZBf87ga1DiA5K8tpUbbDVS5szKTSpyC6sdMzA5esM9TweXjnsihysJua1hxcWiBsGLWKgQGN6uzCe",
  "key28": "2d93VSwb8XGnXSKPEbQ91D7yyLKooFc3AGmgrxogaNvPNnnrwGV3RXuYdAz7bF9XCFNzhuGFSSwBbECugPbcSQsr",
  "key29": "42q49BPhwwei2xE16PcLPGq4wfvTGHb23e56Za6mZVkLfh4j67VtY5KKPV9qzM7UBVfAoK3syA6eATfNTD84uWnU",
  "key30": "5dNRLezsMcvJzqfLo41vB2YbxRRgZ73TE4HcNK5tS97vDAhv6xw3hEFf6JbuYCNNYEwBhmxeFBzWW1bqjgajbNeo"
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
