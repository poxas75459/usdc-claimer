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
    "D5Cy4BQFZbT1qiB9uV6ra6MpK7PuPuA9TqrxpJrAe15Xiiy4MfePcLQZY6Z6zeQoJRMAKLnvSbivq6DV5Aw5qVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ja3zRzegfU1HADic7oPdvjF4Zqm2N5TnngwuuXT6Rdqnkq9iyWxiBrAFzfDaKrgmbPAgMPXEip3Y13AKJQmomyC",
  "key1": "9fL9pTL9kL8CU16TYosehSoSENsrzK1svxMzYx2TRCmkkCV1yfmS885Yt4zec9ztbb2TULPoxqcbPhroWKQzBd3",
  "key2": "21RPmPewNteqiKhrQBbYZBoeso1qKiZEn3umnNdXoJ8g4vuEkcsdrzVbmzePvKLsBFosS9RS7CFWvJKwrn7wdajg",
  "key3": "3AdyaW8GEWeHotSffHr7F6uyJfN1bWwb6xMWtyQDpxAfvWSTzwz85soauyqvkiBhbL7PotmF95havTnJAVmvzpmc",
  "key4": "5se5Kgkea1xu4FZmLo4U4RgJFU8NkVwyj71LGryJjhDhk89h2xBVhbB5C4A73wGbKwsBPkdip5U2WEJP6Po2Qsr7",
  "key5": "3PLacMnctJ9PdEMd2gew5fa1LUyAG4A7LQ3a6sRsrEVriVLXS3ciTfRhAY4a8UZ4BCkVzatjhTCHGUGyZXB3Yu5j",
  "key6": "3zwEZdeWiuvCFXjFXwwK3Lqn5Wf18TYxbjxmsz8SKZjdcov6dEC574mBvt6gdu5vdyquVioYDVUFrprdoazmzBhj",
  "key7": "62T2XB6BQNZSkYNuqHy5aDvmxmysW3ZNNDj1AQD8CeeojbgcQW5CY4ooMi3jpV5cr5uLEDeNvvRZCdNnPbbin4Kv",
  "key8": "4JLs8k5Nkz4B6XbeiX2VR5ojyCthbSjFNYCY87FjBAPyxNKo2jCh3WjF53w8N8r6eXgU6YEjpR6VrHMk7gTtgupJ",
  "key9": "5Qu9KLHQJNAQypJMMue2EdJDmwPGceUyJqr4B8tCELoq9TM1nFY6acYnHCnUkfccndZxYCdEXPN6L8JULDD7Fu1m",
  "key10": "3VXehQcnaA1s9dJTnhuvscTZojMY4hshJZHPSPVEfqviQgSidLweBMpeksFZDVHW796viDiDtmmmbLDWFvaf6MaH",
  "key11": "vb1BmhCYxRhvFMpxov7maUNgNkQCkNh5GN52t6PjvPpgnuyWWujGeePyUzTnng6TdcSeTEiPy6pzurJ9DPSEkxD",
  "key12": "ZWsMsAK4HiZU9kHSDNmM3Vbt93ywhUcDGTzdA1KLXa8Ygq8xMqXqoEX4XNz3FUuMhEGm9wVZr2moAzmNSfVdB46",
  "key13": "53K3htTeZUPEDtadV5pvv63eVBximwXvL2u16tAtkNrmrVzzXNx4dCgAc6654BRuGXYdfBqZ8y6CUuu37toyr8K9",
  "key14": "2jENayZCWTUSkNgScTLVvhUYyePpQKx3go5ym1e3zFuuDztjTqVWTdiHeKfQRx7VcgehNKqp6DKWJQyJsDEsknmo",
  "key15": "5eTaq2DsUE6ubffMsnQfv9u98wZneaMrueyK5ZooEkGVarzN5YxNEcykYCPxMW7mG8ZLg9ioKhJBtnCSJgFkEkDu",
  "key16": "4nGPrFf2ZizWuGHAphVsk5hScXcPXMYxVfMQZKVKKxZcPWbKQzjxmopGS9Yv9yEzUdYXhpC1aCT9CHZN2hN2mvs7",
  "key17": "3jz2M2BWszbZouXbMnvYbNhqtjmai4UMfUcCidATTpPv6EfxK1RqZsG3zbAYPJavzvCqWkkuUxL59SHcEEHEQYGo",
  "key18": "5GpdgQPCuDPQDDHZtpJVSGTjp4Cr4s6oRTyQ1mM31QtiZuQ2rUTT29DPgfwon9MvdaRfUnuy2YCXKn4LR628gdFf",
  "key19": "2fZjNNntEjYC7rwdwVTseysLmdNY77Md2YnLcZqeX46S4P3okoB6eMtpz58qeESNjUNVw6Jgcz76sDBuk6LkgL2t",
  "key20": "57vbB2Y78T6xZj4aZA1K197Zz7Fawp2nXkCfcSvTd1vF3zYjgejzdzUQr5iji79XzwcKaD2qCP5QVYTsRwyCLxXo",
  "key21": "4esWXBpSNrNpFyQgf1KJ7An3GXgqHYLp4dP9V52m69hnZw2CSam3AFAnRAqkeEeX6nu1wJN5Fp35QFF9oxGnRNh7",
  "key22": "bcFpJAA6gsVvbRskePL7p715vDqk6jJfDj5LWMfucun21ngQ2jGVK2jVn9997NeMQVRUfjCQwPjR7U5rW3Cx6zN",
  "key23": "23wLLyaD9BJ1aVqwZJeWdgA9cPSJxJHFxpf97z4KzdSeavquhnd4zq5gsLni6MFtmvFAZNvFshtZBpx6hJh8EVKJ",
  "key24": "MsEd7ybKsS2ZVpLm7thpL42xyoycrEyK1xLetaR5gzgpmMziiVqHiWAPpqj2Kj2m4X3rVKnb7mY4mzF4t8c9L6Q",
  "key25": "3yChaZdx1UKL3nfUhQPQn8FTdSFwdxW69YDKyAsXLR8zJMS3pi6Wns6JZJ8dMhQjtJxLJJs8CcqpqYhYtsBiG3ZX",
  "key26": "MhdwoFcxNaPvMW558UHAsCvGkCFuvM7QUfhJbKhUNEsRcknPELwxhcmrfeLTt54rE9sARrGX5raVqjrnzHmtdoM",
  "key27": "2S2oC63SA4uVGDckcXh1u9KG42EfP8c8fDwbYnBS81u1CxLEo3E9jRLANmfWJ6EB3GRLoBoipqjsMTDMK3S5eCAw",
  "key28": "2uRLaE2svNPjM1pWY7wzuBT93K3YHBKYpdLkTqrXHNgdUYRcXPWJd9aNJ43idALTk5Ap72nygkvLRo4bezmGg3mv",
  "key29": "4JHjjoN2oGGU7DeSpZnufekafk6CjiHDSjnCH71PkWDUtTK1mzAUQVDTB2xADg8DB9yPKMzgmMiATN6SvQrS3bAy",
  "key30": "3e46c3NiwuxJe6XDJQSdRZCoYc3wLCg7oyN9efEVfqVXnPobGhYx17X9345kKpQKM16iLw5Auz2p8oLv6yQiRVKv",
  "key31": "dQZBpz67F2L2hgJ9YPNu9HRH8GbdHuJZ44KdKw8L23PY5QF6JbPrbMiX19criBGVWLnQYj52Q9Vm7bwXtGi4on9",
  "key32": "cYYP7pR8bL4kszX2Ja7WjSayCkuaxznSQuVKgWykGxYg7UzhXDCBZhLouUHQDipcoEZnCbpdQd9DWHQREr14CSk",
  "key33": "5QWjDmhujFDDU9Fum38i6bz6afbidc5zj2yk5RMGWhZVKqnedPR7xNS7UH16tGdr7aiEKtVj11JixW754CGJiZv8",
  "key34": "4zz44HVkEXBSQmmAqJd2tYRenzzP25f872ZUfHr42Z3Q7qbMvaM8yPXYZXobTkQJDsn8R1k576d1ryutzohAMekE",
  "key35": "3zzWFExrvjQhSVkLivGd8FdhkHzShNZqd7BioYeM9GWyiXMA54PeYsajm8xGpKUpJaE6gsNTZ34MungCPgTBiQLm",
  "key36": "48pGdfUcRV8DuBtjUwUPnkB8LZEfDmpTAtbwAHPocdYUsd97zdVp9zjzt7DAzggDtR9xGV28CFKAZDK2kRGP9Tcq",
  "key37": "2hsG29uFvqQ8Lc2sjfyCG5Vf7ZqQT2TimtSwV65RsyWFyDYvVy5Eth2Yp5sQqPbaQeJVELRwCwcFnHSerie6hkoG",
  "key38": "5ZGqCDryKrseYAK43GMqJsN8DkWr4jKW2SQL4nbXK7dUcjg4pqVqJcFF1Wx1eNuCF993tTGeHbXc9iZRnSrdxdzm",
  "key39": "XjuETG4Lj2EQuq2q8WEr5Biwgobs3SnZBsc1osg6ocrPVkjUtK6XAiEwzfJ3wqF8bnaFFDWQvHqSvkMeMg6jGyQ",
  "key40": "4mibBv2QMJ2Ec9w4JA84RuiySCtzTAmjBUmMx4AZWGqh2NQg5X3XXkHfpxwF25sPMShtSbkten9BrzubP6rYPF17",
  "key41": "2wZFqxSvUuDoNNwapmrNTiAu19Hv9f9xgzakUPaKT4HwFzt41ceozpHrSq31xTrrKxPbdbBUyGwp8vJeRhCLr9FM",
  "key42": "2YHAJw4hvawkQFEpcs4nHn8AegWxbz31G13kAbSGJ5HY2tF67hrThDDi7qziJUYjt13TrxdyJmzPD9ZnsaHP5Xyj",
  "key43": "2wQG1JmHsLP6qGGQ8KQvddWCHybPipCEgbHMc36wmAWnDNbMezjWRGQc8FDG21LScd4Eib9QGEZUpwDRZfjeB3sr"
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
