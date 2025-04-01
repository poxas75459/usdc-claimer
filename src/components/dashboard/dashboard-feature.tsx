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
    "2G7ihiE6Cw35DtkABonND8NF3EnsikweFK6LodXKwum63qY1Vw8qja3B8DxEWXPBtzTeXk3mDRnpMpsmjSKuJb2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RcefyvRvoGZCwXcbJjD9wmwsitJcYA9eZKYDSs1ojZLPKzVSWXEyrfkNetYTWfgBrFjGJXuD2YPakMDJM2NPzqp",
  "key1": "4sbNvDMFtdXKb3n9tx1upGUS8nuC76iWje2mEXrCcqHREMgFC8keuJdF4U7wncapRU4cqK792FnSj5FLwEtsx7Av",
  "key2": "2wRfNQKLEveoNsn3Y7EguS6Q8TwDfmDKcMnTxtrWNXok9ZQZVp28oUPEsAydFwaC7QR5w7o8JT9ZfyQqQKPAqQ6d",
  "key3": "4ve4jJeWAghUV8K7nrHeA3bAj7dWN2J2vULwhyMyeFZjqftx8zCLz3oo54cnc1asPJLvRoQtYRtbQmMyVapAoRwk",
  "key4": "JZPk6F5CdVdPMgs6VCakXdmXdd24w6z6xtqgppJQ51qRt5nmsFNbnY1DZK9MvZvzyajt9AbkwxDyy2QmiPdhZvn",
  "key5": "43o6LQcw7ZnUguxYMWeu8TQyNsuBDtHqN5Tydr9bJtLCwjR2ov3fePSTCUWSRkjfuL6pQW1cJwBd6DkgJhX8Krkc",
  "key6": "5i2342AHLqsuZjgGWhrqBYmos57mAdryRM4Fwwin6e1Z6sCgLCN1ktdWGECGcy8ZoFNu7uusouBvdJ3qxBU2eU6q",
  "key7": "4jtCsSLAFCg3c8UhVFQx6DxeSo9vSQEzo5Hpwv3quJME25EtPN8MqUBsWi7WbjzVi92dFyCdpfyLxSvAta3RvMfL",
  "key8": "5ZHXTzS3zjS1uEsKeRzr3g5bPCeh23DSZDJDbsY9QWHzhpWVTV62BwyRMDx6MHKNBczGgbv4XHBsmcxNzpeAowuk",
  "key9": "65cYjXFNvqLS3WQ9GSTGK8Qs1VH38wNuAsZhYJgvuENDX8RkRvcHtD8tQLzbb2KyfCwqZqtdNJwCGkGGaX7EQMi8",
  "key10": "5sfwZzYQgfkaEWuSL8MAELZNScW1UZEYtwCg1XWQ8JJFgFar2AxPLyvQXBQvaka4MFDg3QuVrUFeBsmVP5V4vhwW",
  "key11": "EHLib3736xo5aThcJtnTcYEywtxtRSt9u8t9YixXK7wT9ADixoGYftEAp7iYhf1CVHzoZaE5mPphqqPgH7vcmqH",
  "key12": "2fdEQvuNoCvirMBEgDY9vW2u6gYQrWpoz7s6XxppLQkF6BrZ68pxNAY2UXUj1fyCPxehGGPDhNmZx1JvtBrcyNoJ",
  "key13": "y37EPq5xVi8AtBx15CdyY6Mb4r59VcZsuB1sAynwQJwWnWUMb6mYtxaQLtaVhxuU3MNdbiyuL9kgiY83KQ9Rw6V",
  "key14": "3sgAMNP1L3HmauveCr1C5DzEWqJPaac4MVvmS8E5rHhiNdaj5V8LhUFivvyKqXyBj8ZuRVSTD874KfAUZEM1g8eF",
  "key15": "2QGNebgaALcYqsbKGbVLxw2ebDYF56NQMMSPCBdguC8zTtx19P1tKT6ka3vudyWDkg39ZaC1Dw9AhPkHerwyCuFX",
  "key16": "66RJP7bA2QV9LJSFi8E2bfsvVMDXeQH552nnpvNUxuRNWtaCaSKxoh3CPDp5iUv1tneRth62EJhRpLUqa45pYut",
  "key17": "5RB4WD9ayT5oRM55G9mckf4Z6CcHx96zJR4ycnDk5v6cDJwZWF11SV4LHXmJYmVjLLc9cz5uLJv3kNcHNs8Umktn",
  "key18": "4DrBhWU2BqRM9dxZWETFunjW6UmPgbanyaht9J5RnN5CJmgK7qwqWr7KuqBgw6HiCXMfNc2YD8pGxJNmbJYuGgY2",
  "key19": "43JeRA5CQbaqPtBZXzsZpuJLQYPZjA9GMmKm2Mry9QGbjdNJqfUBVPXdxqns5Z1Umgcd82pK58vVhNvKw2JXuSBT",
  "key20": "47wGqbPhqD4DyFyhyUYWj1zcScUEmMy7Yt7VuYGafo1wVvn4hFupN59rSoJpZENNxs9QFB44mvqBp7iMH5LzFnb7",
  "key21": "2ySAxZg8kG7TMjtnK5bnXxnJt2tqJF8EmB4AXm5PuHxu6tKFKCUFgx22rbCEcuQhkhPJdB3NPR1Cymi6vyuEeGp5",
  "key22": "43nkQyT4kTa1f3mSJvcZDtgrrsdPesTsnYv6R4ZS7cWvDL69qnCUzsvK4eU1WyPdbzdMWaf1NhCneKbu6PccEq7M",
  "key23": "5hyvHbCHTkmEPSNCumibxHKhPLrz2jR5bFnd541SSV7xpjaefjQmWJaHptwHfXP76cH6XPiSDZonPMgEiv9F7bky",
  "key24": "5GSF3WMBHFg6aMJwFcqjeFuo8ksN4Vajvf8iAJs4B2XCVoRcMH7Konurm47UfANkHK9tem9KLf2xCKoxE8XW3SEb",
  "key25": "3bkwwmxespxN97tnJhNvyPYBQKARkmB3EVaZPz8JZQiBtaWFE73wXD1U8JSjKj7rt3VYoEZXXhkSwQvdfWtUgtSx",
  "key26": "5JwpTPq2R1m45PUDhiJCfso1ieNHFhxi5rttTqAUdi5d9gDyyrQ6Rf6m3AdTvkiJuy4Q8CWZEwzvapd31hPY3E1L",
  "key27": "DrjaFhShPvcNi2AQu7rjW8BNdPUwxnLoiibanX2SS5P5DKn6yKP5QGAMFGJ1qbCLPmqLoksbbsENCXcids4FH66",
  "key28": "2sfuvYma767zi25nMi5K3qpoec8V2PwYccYJwcjWCuKZbR9UjcHmbss2LF1h6FkQsFrQVVX68SPQJATYrCfgzRqa",
  "key29": "22yur2BA7G9Z4ogjoitScEZufLYg8PAeMmjKmbNVUaWUhxRqBf89pA142e3bUKSVLBd6MbsEXaATKJUzR5JT3FdW",
  "key30": "5CaC5qpc5uyeVoPEbmVbW27EUZbcJQpj4qEAWTDrL2L83RBpZzgUufCnQVZdTGiGU5dErvHVjHD3An4sMMxR6w9p",
  "key31": "3HVUcm57aidh4NPMhem4h8gwM5rE5fdRAhGe1qZYQhpHVs5PGUd1if15Ge1WPRiPjmU6B56Wzou1UVe55eP9cFMN",
  "key32": "5f4bbAA5D8HwRDHquNN7AQiSYjYYkh185y5ghV52LN1vFfv5ovAPLZG8mNR2oZEBRb1gcGPgje5jkcmLfxhhXjZJ",
  "key33": "5rFXq2wygQTS9ctRKmVt4vJZ66yChxibcumwCGeeLwF1SeDsWYskq2pPdhjEvM1YRRe12jaohArngkePgByxKXhh",
  "key34": "7nyxX6p135gcYKUEfKKGMyK7Dqx9iGnHQDAUnyAuJgvTdZwcjShokFMaRaENaqBoRi3B1Ccjvf8rM9ZqfuRQkmK",
  "key35": "LWoh7QmghTnrt7e57zen1rVsvzczcSXeEyRVhnTE1xQaKQTTApzBMXyyd9Vi69pnNTjaQieZKccqwnSf2kkJ25R",
  "key36": "4Lb55PLGba6hrw1itxVj6Vz4KA2pvqYyGvE4J5MMVLFG4L6JyMmQSzDBEmbx47vXFmYFuNmwo2sPLC96AC8XAqsK",
  "key37": "5hw2T61NS9NmAu7gdRaYrYDa4QGzzpefvUFVuKrc59Lq3wbpENHtUE3DDF3Skb8jGMex6HsDQzzKoNgL1HVtz6Fh",
  "key38": "29PV92evBbERnT6dEUj6nDgbYMSreqDti6srmA18yg4QBUqRFW9r4PoBZVVPkrEVFyTL6duwikq5EZWN5wvi18zm",
  "key39": "4xAkods7CSEvFhLwdc4sW2YxdWC4kAF7t4YpWwLLmpwYyAxsryLid4EgaYY1MRRvmtQDy7SzQySB8QbTiJgFknGv",
  "key40": "61AmMSgsT9Kip9YubuqxJFjbHdG8TjHbbwXQQNcJmZ9gUPpzsqPyCakRhgmCqbcrkbmiGduHUtceQFwxgCBj5c3o",
  "key41": "gvk6DwEHmNGFhz4u25fcaCTi4g5fw33rSsS6uAm4caBWZRr5eU7zF1aySM59jUs9fDKsL4NdNnFRWU3m7TqyYTA",
  "key42": "3cWffxMfaxHN7CjKko2CxMUs8nCSTfu9MPBfAXgo1kbaU3qxXZTwpJownwTgreRE55VbuopHBC8D3BoR7Mb7W8F4",
  "key43": "3xv8Hviz4BFnkh2ac64JYKu7RctcBtn9NbLZ88ZvEjfJu8CrrpXTSPQw2VnSBm7NjQqYCHyW6besgaNfYKu25irJ",
  "key44": "4oaLTJX6EyqWvHTf3ZDg3jfnQdm7BfT7nimzjN3yEstzr2ymPfmVtjWzGoiahkg7gNQKK3jnrmGYt5ZtP2o9NVgW",
  "key45": "wExqFaaECK1v1nmKRUobP5P9XizGXmsP2APooVHuZGXutkxyyJpjWifSfqLb8DqSitaXY3zbBSnMtyR2SJAfWan"
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
