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
    "31XdknCSu6LdLQQPGo7ju2NCC5wDoB7roYDhEhqn6mgiciEVu6jFUvBsYs6X85gtckyGUeve7k4NqpkLTFXs3k6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aNP6hCvddDTwQHPgumnQpkonmeg4VHscaWUvTh1j4QgSJKiCHFUVJqbvYXv1p87G8V71fS6Pbt7TJ7bkx3jXZBn",
  "key1": "2FmAwSKtof8ef1S9je9fyQr7oPCYfqc9JAETJMb9Ej9Zq2p2EbmiuCbTp8dXNWAAJ5JT8Zb8Y4BXGE1JVR44CBLd",
  "key2": "4A6hcEjwp4Ki7FxeU3PH5vvp7cnQWbBF8S7LCvgPBwE9QzeJeVBXdLdvF7Vq6EpseBGn6rSiydzvfvWBqY1qyheS",
  "key3": "fvDA8ey7s2TVSNoRx27Z7wF4r8to2HiMSUnGHKNTGJgvqs1ieHjRTJCAe3QW2B1NUgwDrSxiRmMAafBHrAfrMyn",
  "key4": "27VyEruWVTvijPKB9prcnaj7H8XEzjgH5LX3nQx4fZap26GtoYoZ75sbNW55AyS72trL1fzYS3oC67zsTqo4VKhY",
  "key5": "6beR9VbP4hWnACArfxcdeZZExdsEN4Aha1kw9ZyWvJaV62hBwkBY2jQ8jP6tTHcXMD1QoUvH8xH5AFNwJ4VLDhy",
  "key6": "UjxmufjudcRpQ18BTc3CT4mrdPVXu7Jf4NATa9m8WwpoHQsXkQdPSL2HCyaWM3cmR2yJ7VYY3ir3CaHaNgbt78d",
  "key7": "rcqrNhNtxyKVrhkxnLW62EHTCUdq11hGvkDpkf1iMGQJ2E5nGa23omPvFRrdpuWpazf796phZPo9hrNfutrHqve",
  "key8": "65oRA3VH2Jrtn76ZHkHqfYWzCEiuUcKoqHD4G6Gmxoq24o8VmCcwhw8NhgeycNJE2wvSyhMc77aedZ3gJY5eKJ7v",
  "key9": "YkSkLFejzrrZHN5spfmk7mLpabyfGWQZzvjPDL5p4nPFKbBFMamFeZuDrjdUqV2jAozt4uvGEiFuHVX8w3UGkZA",
  "key10": "32wwSiPvcmifMhL5u3P1qZoGEuSUpoiLdvBCK7QshxvWn8CfThLGYxf7YH415DLyJAq1nGTDFU33JxaeQsy6Rxn8",
  "key11": "h9tte7kUm99FSGfPBPh4P6maFn1kKJxnyg48zJ4kde7SH5kTBy4yai2mYTsGLFM1neKeb7KxRLdqQRufAo36uJ7",
  "key12": "4Dkh54wdYSs1TRbs8GpnhRWuPpHm56YsNyb4hMWBJjzio1U9gHstJHQJiXZgb2JwLVcEomkx2cwiD73jUQsMQFBP",
  "key13": "4nzb55h3aPSyJD5td977f5grU2cwy3SLjTwGuQu26sAKn7rzomsCBJytygYyViHE7Eyn34mYPPvzrCYhkpHvuJ9U",
  "key14": "oxLipuKcygSvDsSjxyNemrwABEojNaRS1A9WgJs3jzZ2kFTgAB8LrEugWB5bkzLX4xthU6RsXA1bUhnHS7ChWA9",
  "key15": "4WU7f61XEwLnzXJrR7xB13rsHaUKLaGokwRVVEKcGePSb6zT2XjBj3Bawdyysh7oXUSMNTmRBpC1jALDYJnp13Lm",
  "key16": "2mDAswgPAeBD5x7VkQF235rBdFymd55jJDzMBEfsvAAnPxMnQ11LZrGUzLCQd8N3DuHzZN8EeU5EuSxxXz8hidNK",
  "key17": "24rpwf2S9hhmwPVQpv8HZs6vmcBQ3qgUXxo6HS4QnY6RvUNooFNKyVR1Ht9PPR62Ui4mK1QrYQq8r9V9PLhsHUB4",
  "key18": "62XAdNpb6FjFrqSnxV5AvyDB3hR34vho5pEumGLWq2WzbZuLLaZmkKwjcMYuyhpH2He1kKfvLXXq4njumREbqTF6",
  "key19": "2FcPdWQJQEyeSQykndJJoNYRt9hiAKJ2P5qqd9XGwwJJdzYnWFpgJZDw5g3KeSbdUyn6w7s9EbCHfRJdiCNqw726",
  "key20": "37a1PtzgRrNCxm4y2QY3BhYiRQtjq8PHjLYoPytV2Pg4BYEu5dFLjwrfi2Ks8tWWABL1qYHREX8wRwMq464pEWBj",
  "key21": "3jhgcjxWT7a4KGoosszrY3pe1kHfQXV2wbbza8PW2n9HC47AsoaLy4VCgn1ehoBDHDt4HXEER4JLAEiMvudyVsu6",
  "key22": "F5TtuRJhyDaWXNYD96eo88qVviHCT2kCTVrZfRGqsts6JP46eWMgcCev4hSSqbZLMZLmdAuZm3QrHK8MtREh1qN",
  "key23": "4gh7LPunnfgPmnvUtE4xBkoYgW9v9cayENh8SbQvYrRviwqkJyv4VctWVKVaSFTjQyDR2aaonksmHBwc2ZDuovj3",
  "key24": "4iFgMb3K3kaQiSXFYihhsUtzoBc1FjD3vPmYRoNBQhTHUVLB4at1qDKBSAZnKbE1XvZGTsLMmBqRnmLL3ZuapfQh",
  "key25": "39S6AdQCk6kRDhYx1Ct43c15iCYEt98pPQv15KvWYAiaV7FVvk7oVJTyUbENgreKApfBeaHAxAE81AecZvM7ZxE1",
  "key26": "3cfPxEvYsFuZdt3naHewE8znAHDfLw5Kaawv9XUtAHN4czQjj9rjLKV29AycjeDwZ3MGkzUzNpKZp1moQbVWcE6o",
  "key27": "3vyU5UEeEBhaha288TcE69Rqq7aprZjMa1qbhGsvYbM3LVaTWWQHp4wACvce12sbzYqyAbJoMrjZXojm7MRho4Vw",
  "key28": "26JTV7oDPcFvLkKXcumngQxA2V93rzeVnjQNuuKDdk7BGScoG37z9NE8udmG4JyVFCEAeoS6UHxbeTW8a3dzZnML",
  "key29": "bksfftWLXUVi2dZJDadeeunVhb9mtcPQFzHrdRknPXdPRtLsuNwWoY3iF4kars2iK4tAhRZdZogKC6fuWbAqiTg",
  "key30": "5ZeZJcqepdai1qV5y7GiQyxBPiSsKyw3BgYgTww7DYfD3XFiiUQRNL1nBqUf38FjSYn3k2pfPsT3eKaEqaH1n4Vt",
  "key31": "xtaEuipByv5MoMHAUsSXyvdYft4gy8uAQ8KstM1JzwQDKpYUJrAk3Ftdk6h44TFxCeBcg6Sr9T8TbbJzCAxgpFq",
  "key32": "3r9DiraijxEeGsnyc7og9bsfXZY8RF5BgFM6Vbh2hUpp1pyZj3yMiy1EdSYoFkUzjnce51kKELEXH1LeZzMhLjFm",
  "key33": "4XFzCzQQHcpb2LaxQEYHjau85Zzju9ZWss97So8Kas2oY4tbJz5qVgXKLikmTiKfRnaGm7AUSXrxNyUH9HeP6c5M",
  "key34": "52Whrm2oU1w2MqNNBoQ2jeWT7g6MQ8yZt5bJNuhssrndTX2oo5dcK7WUb6MSR3B1dJksiKESEFbuqxzcmq6cSL7Q",
  "key35": "4HujPvs1kTpdGTLoU8ptFnnRtFvbKa1ndTjtv4tMpYQ5ESfC9Hqd5ExgyR7v8VB6VmY6rbHnDAPNwQDmRGSK8qP5",
  "key36": "4Fk61bLN4q3C6ax8Z7fp6vC9rJ6SNffmAfCETq88E1R3UFmDAGzHVBgM3gZM7ycjNKti6uQbCqwnucnAY3kAgG5E",
  "key37": "43v5i4iJEneGij5drSFZb1rXqZBfufWFiUAJTTMFcaWPgHRyh1G9AC69aTWvm53sHv4HkwgBHbKkrqR5owwZbVAr",
  "key38": "2eUJLnh4beZi3nYPLVaTu96tSkrxepG7mkyd9jNQ3GDXoYaR1hKMW7a9LyN4Kjjhj2GnVbN47xpy1w84DpvjoUxp",
  "key39": "4gcUT8jLQC6VbqZZXzPQRBVsjANDi8M4b8HDwUyng1qFq6Ec6eAKFJooqfA8LVk7yRsRDGfyd3wYG1wcKp4rSpRx",
  "key40": "4kZ1b6w7fYW1EEAybL3VECDzi99rUfK913uWdVEwpzC1vxPWWt73WiNoDjh9y9NDPiqtmvBvfC25ifRTwyKJvHUB",
  "key41": "4WEkPUD2ZPsU59bXcRM2d9GR1UQWtUz1xieDUR4A481ej7WAiKUanqgDo54u1XNsuiSNum6WgnuBDUkPEQRJ6nRz",
  "key42": "4AEcDTD3u5qbzkzxoAocgxKWeyGh4Vv9GjRa9qBd2HKQjhWWcYUTzTB3McdfRM7V48X7Go7mWD2thDjUZJyZc3ZD",
  "key43": "GzsazZMB19f9LpycRQ7SxDmyADskpCYb6cFVx7UKqHtZtdnqD6pz4ZbYaWuTzFfy1g4MGwDwkaCfQn3VMt6crbR",
  "key44": "2Km2Jn4SBXwTzTwDxSXn7VXRwHj3GR87iAE542c1Yrm1yrEyxtoUGQxESTy9ZAPBXgu9eHZmTHSuTfA3NUAHuWFP",
  "key45": "3b1v7jaAH5eQygJyryJBQHGCkBnuQMqmxVAieKXN7XmuuV89Yn5F9rFegf9xMQVQyNRQCtJ63ndb6gjPpUuvDTic"
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
