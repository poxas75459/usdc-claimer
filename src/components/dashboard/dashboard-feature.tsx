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
    "31NGTZDjcPLJBrpyJ1PscQCbWPMaVsD2XHitEgCHr9VsUBgzNCgh4918d5njpxwNdr6YptTsZNGEbYcFcek6wJZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zf9vVEFQraqEhevGUeEDFFbBFy7KgJE96cd1LGAwx1GWDAtdsbk9CEYxnNMepQVUuoNwU15S6aJgGww36P6seWR",
  "key1": "3CF5LvLGwU8PH8vcSduyaAw2tYvGTNMZjAFdVafYn2qJBK62UnYq2KiFSwFd6yw9MAZLPGEdHvNV3ncvSvr721EG",
  "key2": "21id3J2tNvZLEsjo1rkKnnFDkRMTLt7HMe7oeFZKHNbNjMEzvHMs53e7tKLsQvHnVK4BshKh4GN62Yk11sCY24uu",
  "key3": "5wu7AemKBGWMPURLYQRZCzRWJbbo9Uztd5wSSoj2NcesUZa3ypyR1y6DoctpnNqFyhkyHPZjDL6j3WUqs5avPgJg",
  "key4": "3m6Gs81HtZiucoHrkVf9S4UU4rmrfMhyeQCDGcGmjLfrwTcLHvppBLqLYui6QgEAACy7GfgjwHxqomAjzTvL5wfT",
  "key5": "5N5PLbMfHt5AhRbG4weFSxnxPMDsrMBS5RHPYYgXdBwak8h2P39JjBEaPB6xpCWPPrbUqBxgzYK8nHsEQE5eBrTH",
  "key6": "4JdYQXB32uYDQypzJ4dxo6C4tiwrmhBatirsST9jYtLz6rv5zWNSksMZjhb9p6RbLkJyratmCy8qYxoZQvRsYULg",
  "key7": "5hADsTAP27nD2T2dMgfpRNrvrwgLfUsjuQ6nLYR91R6VaKj5fJnYVLPFvZbbRxuPj7pHUS1fzyXCU9Uj1WomQZoq",
  "key8": "49Dgtw12JwkTs1K1xWtc7tg1gUizudBRL9WhAvwLAaoMXPowAvMsXJsmrvyU9cP9mCqThoq8zw2YJdotwfhkcRjM",
  "key9": "ganffo7FPtS1BZ2ELMVCv8C2bA3AgoFM8zUhhqHbBsU7HeMiMoaeZFi7KMnSeCAkD7UcKjy9VB5Zr8PVftxdMnY",
  "key10": "xzXA1DopRGHE4uFsq5wtgETKJFNR6mPNb7q7RrCNP6zq132D89N8FCjFKwfXNBb4DVMktVPXJn1FZpNeZTRXcSY",
  "key11": "6YETreSbRvGVkUb4aUi6bsvjFpee36iDyeu1npPU4Xiq7KniLHijEdTvAqMYEnsdHTZS5HJzuaPzycZmoGQub6P",
  "key12": "2xcbmi6env1S9KvtrgLJ1XSQA8BcWbipGKUQKDfqAe93kX3h17JzEZJRm5m3AxyAprQUkeNo1m7FR3UWN8Lm3SKV",
  "key13": "4kEiPcog81zen8DwsjrPYpqvQDhk2bac8x47eVtxs2N4puLjHtyqTZEdrg6mpmwJgDGgEgt2djbG4NeW1gF3oCK6",
  "key14": "3vmbYtLWnZzYrLspdSmMQ2PKAqkZbs8F2JUZQ7nXar8C6aG6H2ZYgWtAfozBfgGeGybVTHa9fEADdqmaWs4aapfz",
  "key15": "4nrfs6vXpqTW6xnM35HBt24y7GwxKPVXGR2DBuFG7QnJN6f7KX25B1S4W7UKUYbaZnpH2YRyRZDbibNT7UPAvMVU",
  "key16": "4WpEuzo1MYZ7sLG7EH43tNVeNj8StoJSkZsaHgNXJXoGy9EmSZSU8fwTG124dWeLxoqFyR6pv5wFQbHNAFK1MiuK",
  "key17": "44t5LiP1eYn8XLU2Ay7AcQAujr3vPkaF8bCFdYzCqRnCeXDweLkseom1XPwLR14vfawszeTRLu1BUNWsxexpNm2v",
  "key18": "3fDHafyxMhZW7NbWeaLnX898YofVtqXrR3zH75mnsA7XnNrKtSpykLBMHXejvT7RbKt2cY3UjKFbriSYzdxHAY9E",
  "key19": "QtFFBEjkmpZsidyLNYo279N2A9vpzTKZndaVedXng7yJTkJ8mGnaK8stHCizF44gMdufksvXB8v5F4YbJ4YMt8i",
  "key20": "3nr4mZpfCpBcPiV9xH9cp8pot4DH9cu4WqJnPvFZhS5jfmzHwisqizhb8u5ZkbAWRtAJuZ9Qfr5eWw3KBx53BL2L",
  "key21": "4sdf8jVGSCKxyw2ZS3cVWjmv13jDxnXtZq8JPVGu3UGR1J2z8dZkd3hWN4igJSdVD1aiHzZpwRAZmdMNsKXsogn5",
  "key22": "2mFe7rgVw8mqXHdsdnZHPqoDJU2BwfdyNE59ujNG6N3cgAfV1qzLUEmr6LLv2x7Rh8AMgXALj7yop3fdpg1hzZmv",
  "key23": "2k84Naf8Cu2MSJBnan9VcDWoCym98yti6oUYTLqUxA8QwQFEpPuaRPVyGC88Wgoq8XGHji3fybzTgeq3HXWGmoT1",
  "key24": "5uCYgF4NHLGK4GZLMAt7CuGt1kZS3Et319v9kzSDz8YV8Ni3oKuXM3u5LNQzdYFNBFuSHPBLfQkSC5YXrfWWUKrf",
  "key25": "35A4nh2JQbcasEHcn3uaEEkCVR35MVKeGmxmVqibewruAPyHJaLcLyYVZbVWav4oFhYwECkZbUnuKCGjB1fGpwDs",
  "key26": "2UVEYvniJSLfMw6qEaaRNhquMp6CH9qyGNdcy5HNkkDXYiUNF3avzob76eKW2FgxD6W2A3uhPK8iZTVkdUrbn2P3",
  "key27": "5Sxiy5ddWKqF4nwTH9xd57VfVts3E5CNTnG63tckfSWth7fbemC3e1gvuAvxaN6bCHWh19CknRCPRNRYG3TBAS6i",
  "key28": "c9w2wVBPw7iSaoGk2ahsrckxdA6kjRAW86FxBduR3vFjbqCjexckto4WS9jB42QzQMxXqvb3dnSgWK3Kr66oSBv",
  "key29": "3VSydTtbWbXa9EQ8zsmW6Sgb4QWWThac7xKDXXWMdpugjvc3jZHnskFzrh6282mbyUF1mKuvQ4F1bJdcgkjMpmR3",
  "key30": "5f8ZS3dacZe6nNKpXhYsSQGvCdqhWVCqWA8kd3hBzcfhcCcU1fFXqkVJPZkoNFdHYWCcRbKLANSxt5Y9gZUadk2x",
  "key31": "3cR6yg7xz2oUh8twfMqtEY29FqiYfzgKv6HomUqsFx5iQUgwHZJogJBQ1F84WM63e6AxFSdJ5GTKpPsH8KTCbxdZ",
  "key32": "rgoPxMy3hbZ6wehn4fwfX5jviYvTPbRKaQRaih1VQiJiwtWmFUsSGQZggVm2vdPER12ows5wUknMJ9i3Nb91eF1",
  "key33": "7VQJkrTTCHwtXeXKfQXWkwx72x8owAb1XiWnBPvdfehv3CKuyAAik3LjtWo86iQ2wmeFqtjqPvxSNHUKji3PpDP",
  "key34": "4B31ojmvjMYipXTrMVop1MgTdgPu7uBq7PBDEN7EpYQMKDjp8dHyVRxEt9f9BB8USAKw7vYkQbXwHWYGZavwS3Ab",
  "key35": "pBVmRJhFRSttdBUJ4wkJK6UsCHW7DboFqew1dyxyAdyS7XpEyoZdcSxAB6WtwacReRTzYQWB9J2A27kDz8Wha9M",
  "key36": "3BmQh75Zudc81HcKF2UQaGg9sqQ3wX1heRZ5LWMFJ4popTe7ghgTrBxs4SaCzQaJS6wyPBzCD3PGg7RE995QXKZx",
  "key37": "4ht2BSeUWt4WBXfuHR4ehFeoZp32vFwvUrbaZ5oE9MbZvRqjNxJKUmiXN5kbqbZ2Z6M3mkGm6FiWmdRQ6DPJf45L",
  "key38": "2YXHcf1MbtkjS85weC2p3nBsYmSnBBgH95xpHggTutsK3zbvhv3Pm6JgoNdcretFrFcAFyHLX26KK7MEvPM9g5e9"
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
