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
    "4GYH7xRcrEeecuzoCQMsGw81PXpQtV9yeZwQkTd4TthzCAfiTo5J9vA87dVhHxtasHAs2CNy4SFaby4ojkTBNNNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mszxu63CWF8SEW8nX2txMRKWWpbrzhm9N3YpvkKz5Bnd6DTEhWfU7wPqc2QGhv5WubL5V9GR6kgSdNUYwPWHiMx",
  "key1": "NbdoubN2KKV4EXNQujRsycxitjUxctPXFVLfjULWixoLF1SJho4v75FFbzyfvnnReBjAva4XL2nazeLaUnK8EAB",
  "key2": "2RhpDbx8K91ijunZmmjCeSEaq7Ltfy3DzR9WFUfUVzAJYGq3xhEVR7u15TSSDq55uQfjrPBpFKqTXDR7BnoamQAA",
  "key3": "3AFTS9ySyAcRNwxh19V3RYRvkrMV1mpV6Q9M5z8UbyP35ENSm8wav1jjeVVA3v5Y6eo6cJDPUWrAvaUczdjSMAji",
  "key4": "quQofRm7o2Wr4QbTSyUYXXZu1BTsCT3gewH9HxiVQYZtJy5Jp99bcKo12bdmXegFdDFW1jzr7G3Zr4HFfoEGyv7",
  "key5": "4yLNuhrqGcwzSyqC1W8w3HmntNMfpxpAE9nYqR6rVagrcm2fm77bo1mvBtKvJbAuRUNWAjQbhPiFSFHdnZYzoGae",
  "key6": "2HzpV7b58sjNziDwYCsuF7HaB4fuC2gWZ5NcrmjHdGwbpLpcvULLueBsjsUm6R6XKmUkF4iSFdbssBdVLx9zfbsa",
  "key7": "36EDEg51XeQ5qDm4ocp8WEXrs1boKTjFefenqsd7RmUhukwppUQZ8nox1enjqsFjLd88UnonESukcLw9dLJ4hhHT",
  "key8": "2t41FmNqwdM7BRoyTNM4tXPcGsZFY6dx1idFXH3Ysv3fEhwKbTmuWiULnBMJv4oLMrhRwUnvztmq7HSpGJLoRSSs",
  "key9": "2WENxfSTJS81kKPEoZZV6TNvhessVfvykU68epcr9zn16rAWtiG3LqAM1zY4uwDKASuN9fVQP6YjyfX7f6qTznoG",
  "key10": "4WbkNeMChsXN46cmx7vpsvTXemWF1ZWKrCwsjRKHWAoYN97zCVKbLVRYWVKxmZ4PjxdYtgi1nfass7NWtBRsLYKy",
  "key11": "2hdisHBPhyt83wF4FnvHxmo4i43fq7EC2C3JGZrfvSVeBGhJuyXSZqTQErEs8K9UbZTWUo4Yajg36NneJgXoZWs9",
  "key12": "62Gs7mTgscfeDqT12GCk8kQTy5Mhdyn8zZ15SenTTmfniY6o43ziNGzo1BZJ2hrrA5BJ9ZjPpGQhCwKjKEd1u7xH",
  "key13": "66522ETbcvv5CHn2PiJXnctnr3fWgwsWhUUoZDSoAa5VSSJ9vPis7HJrZwB1a4gCVTnbSWNVc6jrL7ppJcxW1pFT",
  "key14": "5ds3KiKpNYzzVUtcYLQV2BC4By2HcUk6gAeFZKK6mcqAxoFPmr2dNUjzBghZQgyXcCmL4RcdmMBvPx7m7EQcrrwN",
  "key15": "ofyPEV5ppwxxa9VZymfdDEiDV6wpyvtR7pbYmfXNzmXoEJcgHn2QMtfynCauPpH6YxgW6GQMNB6NAmt8BLKR3b1",
  "key16": "3NkrBTW3NVevFnWXinRyDbXNaafuhNse23Y28j23NT7WjWronNH6YubbDd7R1g2bTJbM9sbXz8pDByFSDUdKrUtr",
  "key17": "2dVTPRfnu1CLJZYNcXipmmMvDuUrhJLdxR1hpyWfpDGJn2TrvsbUCNgcq9VFctzrRCQfEWGoUYa38SH3KgVDsJnN",
  "key18": "Fz4qhazdxpXjXFgh3ak18bPujRpJvaRrsW5h2ow7Cqfj91wcFW91C8x5MKPCAqU4QRnFVoyTVAAHqF9QofFSqBM",
  "key19": "5vxaPbAetzzBD17s7wDBDmQNevLC7khfQPErqvsdGNVuoAAMeiNvMMNfcSxb5dJTSg1GV1Ab49Pohvf1r8MCfCUY",
  "key20": "4zWP4HPhX1XvLVmPbAoVGZh1BphqKGgX61PnEZ3gvyVffubBxZqVhdtefgXVgpvZmqwBgWGsMmQNiMj7zijSVKUs",
  "key21": "5pZas5pGHCFnfW7CYSMyVLg2NAmznB6wvg58DCvNzdvV6XKZJu5MLGJzVwaUQZDF6zA73eQTEBjLwc8yMHLWuZ5x",
  "key22": "5Gzv3924R58j6jo3C81Pa48AXcC557WPgcraN1oyEkazdZ4uAcELNKDdT7XZuJLzJiMPzYHQLP3b6F5RG3mNs871",
  "key23": "5FA1R45RxmkYoqVKiPwiaaGiYdtEPa5Tyhpdb8VF2Shq7iPZWH6t3ZopRpN2veqn68jWVNbTiBe7UpuMPViuXWaJ",
  "key24": "5LQaBPUG75sDnMgGUqBZHtb8a9KxbP3fdUo2YTMPcUX8UfJcRGfrcjuUKhr3EvBbEb6o8S9KszgWHdA26bY9193c",
  "key25": "3wP4PLzgzGrkGkkqrkFiesizgdC7FSgxdK5UujBKfd6aptg7ExmaNMReuZFoUKUkXLtrfPqPLFN51z66cJHxVw19",
  "key26": "4HkyxwrZ6hovqVmnQJnWRWGx6L9PGJR7Ltqd2LCba6A7JwsHVcChfgSBkxrndXvcmhjdYkhzbaBNBpoaNxXKLHrF",
  "key27": "2Tt2bY6b8mpVMRyfqsXuaAhrNyaXoWpyuywdm7KqZWuTDyiETFKHfYFDr4s5sS2PGyMkBwmX2AF835TwWoMbhg2a",
  "key28": "2Vj3J6mLBbcDf2uXUn9TwZYeoJEbgZnXjHndX3zJniwje9wjCzizbKcBhGTWhegog4GbDifnT9ao2x8CTrDZLYB9",
  "key29": "5AUf6RmyFh3kKL8nJCEMY4UFgUeQsVG83PstTBmHta3Lt4z9PA5akrgWLsYBVFRBzb8wuLGmECMZimWZWCiAxPKT",
  "key30": "2SqU6j5VWKuwawHxdYFQn1RnYvxnRjW6TfZcsGdFhBpZRtoaBjV8R8Wcb2R7FkJ9ThC1Pk2jM5dUj2wiwe5JVbUb",
  "key31": "2oHufYFgLfdniEy78ZwxACeGF3hRr5DKNEgPrNtwzG1CnGThm7DfSnTGT3opVbji6h2QbSUBCNzDQh1wFxwLUsCo",
  "key32": "29Xxdc5tUoh5iRGrVG1JzF4KTbgxVyzLVEqX1cL5Ke7bY1ExCtrXjVS9HSghQfY1FKQ7oGj5EKwZZFCwznkFCFs4",
  "key33": "4YeCmL2PyDg9gWv7unKSnsTrvh5vjcacQBmD23s4XeK8z3zDZVvwsSHo3MZxvhHM827EUeJXifgZDBgWvCWbHMGm",
  "key34": "3mFDDAzhNpvahLjrbSGfUn1Jv4W1NHcqUvktmPPPnnfTWwm8o7uht6YYf56YkhwxMqkLW38mJL6S1WRBvqAxa5G2",
  "key35": "3Ss1czviiTpazQrB48QWsrSa2fKdpVNPWsbPjEsM1idnqvp55s9wxHuR7T1uW6NEgGCmVWy4J4HKaaumEDg5ccJD",
  "key36": "3qxjjQxwd75RUD5JarSwSEvopH1JuBpPnv6MuNd1ukNTurgnhFB9bfMmPaatcWanZ1gYSe71GkofQhvNgfDzZ9Fm",
  "key37": "Ewp1631D1shKjZfgcHoupnGc1F6wYEjG15ZBzG7m5tJ6RxiFxKwVmGCW5EzFW7LtDsLVr3hZ921MVpYeg297FJc",
  "key38": "54Nko2YEBffT8REDw1SVvndfi8TMHQfQYVyu2bE6t2m4JfNLzKXPwuECf7dNR6gDNRLyYU8Gmtq2LWt5PNrRmuv1",
  "key39": "2SWMbixeAbDNQzamJrXhrHByvABqxNd3zcRBHuj6xUmQQn2gj3PeJigAKGfeg1b3ehAR2Dp4WkFQauqJ1ZNzovZz",
  "key40": "36oiq2rNoFpuoGRme8PX4YtUY6xAawkEGxXV8TEgLVCws5zHByru8sdrQHie731mKALnh6XUZpc5N75C9TiagymB",
  "key41": "3X1vhAJ23CEHhkRtWW5rayY2sXjGFUrqAazYTfkQ9m9rnZ974qM7Qdmgo6vLaRfhqMaRfsDFmvEDKc5Ks9NkRXLC",
  "key42": "4D7qVyr3HwF2xZfe2jhd2pnccKaW19WSfN6fuQaCvkQ2oqq6oAMr3sCz2qsrnp5PeMw4MQ7m7nMfoovSecs6dt1f",
  "key43": "4rXezrUDMkEJcrzE7KFjNLCJN7EANLHrV2sdF2SAx6v8YbyjDcCegyuzbcFFCpmirtCJ2js4wz6VWLJgjHVxJXjq",
  "key44": "39Te159HJL4soxKCFTReZmYP3V6WSeVUpxGm4E8aEoBzhP1txPLKNENSacmXayupxfRJndYjfiKZYCR54mHrKJEq",
  "key45": "5PeftwghHFQGLbcZNWBFxsXtedQ3eEXXg3w4QM5tu4awtR48Y7fNDoawSkjRAuBNWkPs5pvAy5LTPozqiPp9Kr2w"
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
