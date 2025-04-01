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
    "4VhDcqk35wxgzjNmxdATX4YmcAHRxQranTgjTYY2ZM71CHW3ZVevHsZNiJQCr8WcevkVqF7NEggg7VbgQjQTDxeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qCyUYyUP7uzAjLWe3LhdPVLCi8Zc6FSQogkh626hgwa5qNEi3wFe8pjjw2wYKPhjDWM57aiJCR4mauzm8vQYHNF",
  "key1": "3SUrJMajpt4nmetiFVnD75H2vzixvaqWGYw37po4DjTE6Lwy98wqKGW9wzHFrLpZZ5v2tt7sqg4Psftr1dncQ3pn",
  "key2": "5N9rPy7SRkk9Jhz3Xj2XLkSzthURHimyDL5kP3t9iLY7WznAGR3Gj2NWY8B1TsHbhgsT8vrEG2pUbucVUq7wPfzQ",
  "key3": "4AjWNKFjzq3iHWr48CJLpwbhYkrePaWtTsG5j1LxdeunbqZzDL5E73J66xmnEJSCb87cwt7nyFqWjpkjV7trR9qs",
  "key4": "4YzPnpLfyD2TrTdXNQui3WnxYkVMmFKpaomsbbByx1dnrvidnTDWg3CGmYK4KpG7vFhmadW5NwFQpEjosi4GRx1P",
  "key5": "uncRJhWV47TtJeU7YrxE1QadXig1aFH7hr7kQEh8BHKUECzLVYQHzRdpB2arkFHkWnqEU3GRCKNv7sL2eTnXZt7",
  "key6": "kMnY6ZJar8DLNXhNDubTGLKYrR31ftgo9xfkZ1rMEb25zTMv8dB72vk6KTAMxLSr8SdyFawFD23Xa7JvGuqpMXx",
  "key7": "5EDGdLe3tsTZLskK4X59qjvBnHcNDYfM9KjAvduvZKxgHfXBkajH22pUaDTodyEihZFTxvzAkNBEBV37PWuKL56V",
  "key8": "2KP8BNQctEfxSBL8kYFwhU9wMNBJAtvN2fbJhioKV6G9XwaK6mUx1quPSZTZuGANSmfSjUr9KNQfncs5kWdV2XZo",
  "key9": "4bg3jxvosMmhZHDdxQ36bYFMpANhbnW79NjQhmkxSEjLgWTA4fKTT1AkzjpPfAvHLpu3TP4nf5SXvn2d8VrP2KJM",
  "key10": "2t88udM62Ks4Tz2y2Z3g86Bxh87R6QV2mCpX6Tui84tNPBBA5117WUcMMYYmbwtLW8qPPA7jaVAHjMCnb8w6x5dC",
  "key11": "qLr5HGo8VLRHNGjdX2pnm9jfCzHG8G1ikwybYAwufeTDNC2ewqzuUtuaihi1Gzh8byj9t79BRfejGNDKH9ZfpKE",
  "key12": "3EKwSwq3GJ2XUxx7ZN8vYiHCjFRbU8msbbJ3fJbab3VrqfgozHjU44kXAYpdkwR8fY8fbEMewghuwr6CBuHB5Qrk",
  "key13": "4tUtfjwCdF4cKNesAiFvefAtQ3tudaEApgtUdyeQKNtm5aqdqMEaRDmN6DqCXrk3V3QJUFEXvBHbDsPZVyRnsr3B",
  "key14": "4V67epaKbAzhzgTcMseDsJiHbMnvVQShKRjTc9evUSy5Akor7V8LgE3qhaXMFt1KFYtvd1PCTMSWG1d8dZFdMZ7g",
  "key15": "58SmMqbB9NoHsJRXfn7vZLRPh8TuammRfQRyWdTLPgURBoUT6tMZD6mLrMtvXNmXwY7GJNHFHrExTMoWypmvsvFn",
  "key16": "f1ncYeJ5JFa7Qx1QiLJUXov7wvHmnWavnpcMGfgjFNPSfZBVdfMoP4vrMrCtxMNLs8kHaqNAc1Jf4ihUpo12f2w",
  "key17": "4qKRFJ9ov8662GD2QjYEzVxKmGaZiq4WpbR3Dz5hRq2m4mMjqfgQpB9Sr9ADFwkvCGknh5ChBdUJH7JQ5Wc2UgWN",
  "key18": "e1VG2DbxGoSD76gAPA4WAWRopcJRvNAaR7EfJeuAFhaXqwifQ7NJFmf6D88ergQnMF5JPydQQsfKRhqWbtbbVjd",
  "key19": "2uVvrQLuahJGsKetuSHDtMezm2n1SZdFHtPRZs79QYQyH9kgjo96ZrFMvnKvhTXvCzZKpsYh8fJwHwNzbmzV6otC",
  "key20": "56zNLVhLN32tgPZ7jMcJv4MbLW93E5rfoZLozrMC3g25TmSbjsWhmt5jvHbZFF9NYVif24F449dUpjje9t6Hxpac",
  "key21": "5xPFDYw7X8e7qWxYfJbwVG8jRWH3zzeDfX8YyxwM7udrFTUNGwTT1rvQThu1VcM2t7kTVBhWH44JuvBgFX8oaFDF",
  "key22": "2kXq1jSgzsQwEaCtjL6Qis2v2EbKutjayGgyE8QMDfSyxhVK2PV3V3QUe4awbfKgBCLZFCH7mCNR21s5UsNB9Tf6",
  "key23": "5jBWAJ1aFQYVGTzUo9U2hUychAXBwFBkjqrssCKRhjMuRhBaf8qwDfpJgnbNmd6R9HpUZiX1dx1qb5MyVQM1BEg",
  "key24": "3q9qmMRr3yBy7m2mGE4zU7XYhpj7RZSbUbF8SrGPSCbPJsHy9ezkmMj1BHYzTiWHSK31ukHYDave4jf7V5q3pH5L",
  "key25": "N2R3t17ZWLuv7fqPoTGm2kJMU9EzMA2YQH8c38HGt3jdWi8PG6kgKmB1WeBxuhe8aqXjvsYkgDf7Dj5QLJaPfJ8",
  "key26": "5wRBdPAM9RcoYwjBG71SqD2FsM45B7jwe8Ee1JVg3my4PUTKijry9S4EdV5d5MBDqHJYS5H32Qrba6Qi4PPjwbnc",
  "key27": "7hoS3RabstBYTvW6BcaVtFSrb2ybGavSXUod5v4rjW3MjNHtwQGko2L88uiJjZNooqxUhkmLNiZQ1JxRbWTBoB4",
  "key28": "31ZQAQBkj7gzaQTX8SQY22kEyJKZec3xP9ycxjdCRcbhRGhxtiJpLxtMU6SmNKzhfCoWt7rbNRfdawyxHWngPNSM",
  "key29": "49UWGR2icUVL2TZfhLs47KEze9vcHTpuKoSNrW7Mozc9qMePChn2o5ZgneJahiJH2FuVuYbYKqNvJyzjbdb56ZMG",
  "key30": "2hzb3xTSDXvbLjxyBhuB8RrT1rjqCBTeYPRBbbzznTKzwPJXDyNXVE8YdoRHrKmuvGvJHqu9xtEnvWKBqHmgRzMM",
  "key31": "V8kBpY3EVoS9yT21jLavBFSfpusHk5TS8sn4CaENjV7H8dacn9qPdgq8gVs9Q6HLz8jyHi43xtkmMtNNg6EXU1y",
  "key32": "5n3sCwvhCMpmBRTcLfmdmrzNxZvqFDaBXirJviBheiNgsZHvoLmEo31Wfpu6iGuMhmVMgMnC9j4iYsKyBQ8hZ79G",
  "key33": "LFYCqiJsQC7mH6t47c8YZzANrZyopaySsPgvM3nMc5t7puwNhrGotF5VE9tn28WaDuQgn3sgBRyMo2V5eFT7y1o",
  "key34": "3zkPX9NjnsR2USxePzxzZVF2BHhnE53Q4nYiQTdio7KrTKswYvgwFgESASQ6i3tZELmQTBzxUf8jpVe3pzwyRgPy",
  "key35": "3PWoWZD6C6WgSvNH1MvGDEGqfevVQY6xybW8WtnJ6L1zobfJmaT4dW4r7DviWfXzuycNmfnVREnGmA31GJPrjnQ8",
  "key36": "54LwKeUWn5NcA9VSJ69qb4hv7Jutg5cJLwuVuY8Amn6nTKP7aKXxSbniVnnXHWxZftNYaacgKh7aWRcoijKBx4pC",
  "key37": "5yWbUkuyhJoftFNwHa6airVvJibLwFEHGMupmmfRyqMQmkiFUxRjj5dFVCrSMw1bCg2Gz7a6WPQhhSpL2Zi2Q34M",
  "key38": "2piFR5amAtYZhGJT7C92Qxp7UPXMmEwyWYkCmqHPy7ja66NhJ5b4xLEBfKU3R6UX59HEbDWrQE6rNfQik5zyi4PM",
  "key39": "3df7cjNaZXdTJcHx6t2xU8TYEBtKD7Rs1iT1ynGqEShbaKL6nkQ6387DUXH2VH97Qe4fJVP8jHNeLuFoxpMr8GfG",
  "key40": "DC6wSFp1C2q9xJhqFvRCoRBwX3Mz3zMDKVaNDfgexV7w6tSbE9kemPLdwdMgkzdzHrExDBsi9MFM8Tafnh9mZRe",
  "key41": "vQ15hwaEVpEppwoK8T38X9MvW4gWpUn5jbB4A8SS1sbzmH1qoRvUBYFd5Ttq5hz7LkTGkJYfN9REw5F2X8PqBic",
  "key42": "MZRsHCm8AY35xacRJY2NbGYXpNqQ5yTf3JgYrw5Ljj2WbAW6d7jMXNZzGtUg9uFpN3touheyX8PSqwif5zCcEB3",
  "key43": "2mfJv1opqvNgb2ffEFgCGEQ7r3LeaeodzEPGY8Z4zVfbTrukzNmQpzjfiSm9GZ44SPsbJfVutCzW1gKncxJcoSou",
  "key44": "5uWm9cZkJhQmLDWxnTRtmSa9dR7got8Vryc5SqAso9UEDMoMTQDVBExHjJRdRS7KngsnZp92eKaCyF8JewpJ1APW",
  "key45": "5o3zGsXbRSRzT6QXyoBSFcANZPHZRXxamfJoF5RSJzVzc6cemEpgwAqG8o3L7kZjAELrf9hH5DnjjUhXqiEVoNAE",
  "key46": "5yoSFaYvjCUothu8XHiemNDnCtHkPafRmy1miiLnhcVr8b9GSfMbAaphnb7UdrnCJQQqvzAYBVXEBXGMyzK8P1uC"
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
