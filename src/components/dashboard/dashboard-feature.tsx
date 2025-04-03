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
    "rBVPN2BkNAkGqNPv7r2H2Jnujrwd9Sh27LZnuLSonVDBE4bztCDAktLvHNQd2qLAAM4vREPUXNyV4tdNceTLFKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G6h1atW9cY6crtRfDgjXAPbY6hXEUm4rE2rFmKFi3fi6R9Ricpk6V3Qr8yUS5Tf4NDAtVLD1y2rDqktX1MuPibq",
  "key1": "5zHmZj8Wzz2rWd3rB83oYpecoxVtZy6vqQUc4ZBYj5Q7ENCJR4iJNAz6MjGnJshUFZ7obbTYYPpzrcz6QWxwG5cJ",
  "key2": "3LdB6rqHg29tsaE8ZuXgUAmAtwajmnhqyaQJS3NywW33oem1cXa5KZWpnMdcGXdTFfMzhtJYgM3JtJqGb5W4p782",
  "key3": "58UXKxQXe9nF2BRGKWwb2g1uQeVdbAJgRDsMibifUrqfmDdsbKuPMKxuzT2er8QrsVYjZjrx9QdNW6z8SUQcddHt",
  "key4": "2Ke178BLNfdphuJY7V8jQxCA2b4hjQJAJSRkotJXzKiWXmuW8H2zx8XmzdYCGgnsyw4teQh1jsBMAijEXU164Pcx",
  "key5": "3B3bXdMSrwiVM4YdRcdCf7QFheRGy8AzCh5hVN2R2yoirPZXQifec1nQ4eogLsLMLQ1DZ8xKyz2dtcBjYhLRkBVJ",
  "key6": "5uE9fPWsNoMYun7hp2CRKFBmtUjCg7wZXTpu1YXET5hH1TGKQsPQ52QnHYhDatcpfcTvN1Nooy1LVzgCpzxzz9x6",
  "key7": "3hwyMHf2AEehF1esKkvstjLpmsz9bXrShRCsz8DPrywoQsnh1B4a1KD6bEaZeWvyKvCx2Qfxauw6gWekvEinxB2j",
  "key8": "5PDUtvXLX1Ybgp1oNYkeGpwq8EB1y6iSwyJqunE3QLmfCkhadrzpsaehDfZFUHXoRdSiK1NgYJWzYr1HKa6eAXhg",
  "key9": "iuKTRMMUh37rrgVsDvR5ceEcVrG5VCofFm2G2Z2DHpeEB4FEAywc61K8cFsSYiaegLhcwYLoYZb4vCYjaZ1n1d2",
  "key10": "4HUQGruPedAUahX3sJVDwU46V4zjPtTVABASphxwySExVkgaR1mFYUQc7ZXHKx8dinm3rwjwMBihxYckQ5jo8zY8",
  "key11": "2bcm7wy8V2dc6esFcAb2FCREcoZXfdNzHrWPb2fhm3SnmhESfXxbXpBsQUafsppMxexSVfe3YkZkoKB7XgKrrzRi",
  "key12": "5kSig1pMQrc5L8HSskA4sqR8rxRFc3KRGjv6K5R28P6fUqvoVYWj5BghS4dojiycaTZosgtXN6hRdbFCbg6z9t5V",
  "key13": "4xTXz5844vLteRFjcma5Skd4cEiZUkXLafzzBJU2WeLx22SzJaAWA2Nsi4oJVUDqiFL7SJgeppHieXXJGw4yA33K",
  "key14": "61CqN9qhbeDiAdozieBhBYPEbfGLUU8DLSGGDPVYTzBjUqWynGhfdfmz1Aa5M9vWwAxNnmndauHUG1eCfobjawxq",
  "key15": "vpHdpZ83cVYf89w6AWwLB2kj1eTg6jB3tk6cnQwH1tgR7YvPNVzRSjmgpXF6FQ9UMDp8JWn7eKA2GDtga2TrRzW",
  "key16": "5Yyxj3w7csSNdZTqEwwVuTH7jvJUVUzLvYTFjMFkZRv2cjY4fseHUWQ1cEmwf9RX1jm7rk1T56fiPENBPkx3kaBJ",
  "key17": "3v4Ngz6v7mFQ86qvuZa9CMvswz5rLjc1LvNd8PNQri6uyQm4neFg4p1fmXuCsgq1rGWW3RRHiDVAm5A7icFS5n65",
  "key18": "2FDj7CtczzXHyHwwRB83ER2pbec9Cg4wYokL2W2XjPQQWpn6KQmvtAxKWyh3ve1xrwt2d5esuvJRwrGJiLQW5NAp",
  "key19": "3QDVBtRKbNrBxnXKoXvM4f9fRkT2veTGatYzuGf6jKYPNc57tVrhM1Vhy1KEVoQ1i4eUBck1PnzEo2nCTxsC4zoZ",
  "key20": "4eyb8Nxu6itSbHmFKF8CB4QiDSxF2k5Hza73Cca1bakAhVki555yzt8D6EKVkWdjgCnSQ76KzFTkZqcgQ9AXQkC4",
  "key21": "3FwUtU3bFJ7zErQnugQaW8FbWukSD1nH8NcwvinQdc3k9FrnYJGAUTCXKPNnmtk17npQUy8yxoMsBXrrLywKG1ny",
  "key22": "54buLewJud47b5sEhSbBaoZENxMZBCApx6iNe5P9wewrnSfG662HMhLBV3E7qzVAho7fTwpoSsErgprNGDcgx2ag",
  "key23": "4MGUkJm6tKjcR4wMEXpsEGZwr5FGojk1S5tTjdajfjHQCAKjGg3UaGwpBMWPLvsfposmQtPPRY5y5dgMHZi6f9gn",
  "key24": "32uAuJwzvDX4g2X2cuARssxsLnusoeHDccqLFdThCENuh8ZJjqLynRiPCcGjqx5RfhCDrRrKMxzJHNC51x4RMVVv",
  "key25": "2BzGLbDk1gmRc9ePcUoxuCURR85nkqFS5WRd3o6y5ZSDk9h7f4asbeZB41Fkv86WNXH1AyD4Kj44JwgPeUgodWYd",
  "key26": "39twtgasBARvSoXbzcZVtCwj989gAmJwqeFt3mvqnHEzBc1px5PUhj9Udtmd1PyavTUfGrBVJJAs3gf71bs9YV5T",
  "key27": "4gvAY6LWe1pRRGHYUZhdfJV3rGoVMHZRBz9JAxdGky6pdPJvGLNX8QmPoSEmwKSuWXpgA3kg96Ebrpkh2FyQbQci",
  "key28": "2VTXuiiKjx8HDRf5bg5nur4mfbGgxFWYxGiTfdURLHFPt3RuztenwqYb7uHWqTuA187w6EP5QFasfni7jtp2n9mn",
  "key29": "3rjQWdeoe2Fj6KTKcruyDemyJF8xiGX9ou1trVoSBQyHeC6uqiRwDxDPW1e1TmPdSszePin8BBE86jUGE3wQa28c",
  "key30": "351BN7junonb7F5oswEQ4RJDtmTJPWiVG3SizQGcBXKMJqcTu2y4WRBSTMjZBrGZkRf22TEWWXCVF8y2cXC8jv3e",
  "key31": "4Fpf2NVYTZ4bwrWx1Vnjjj1UZmx7qRpr7tFk4w9TJQDnKA4xdehUK93i8XDxpU7d9NqWQg8eFVoZKFM1kJFbLWvw",
  "key32": "2o87bHYwv3829B7RmR3sUy8UND6WLVi9RkxzyFWEmHX7FqbFJDBvqeukNbpRZ9sWna2aX17iVn8XCoAyJbm2x9iS",
  "key33": "2WsNRXMz5woKVa9EhHCaZnMzcjpBiGroqdQnUcPRUGaNkquQaozZvFK6eiYPQEttjp6Q6tz7K3hCinFiV7NX8LRA",
  "key34": "4Ldjo2ge9KqvojktmGCjAnarH4F6sH1jXUdP28EHovu1cLjt3LYKhiW5CCvU6eGJuzNDUzj7ujkpgf3Fyz9nsw22",
  "key35": "2HbK4udVhGk11B481sWkrGoaLCexwvJo5e8BeosqvYuaRq9qo59hAg8oRXnr2cSbNMPBtcYok641p4YiAwBVUvG",
  "key36": "38WfDjcBEf5i7bVSQoQ3t74ZtHVdjr4XqTmfUggC6v9GTwwJbjtdkoPE2DyzbyJCwzGGucHW9buzJE5nwEzXQWvF",
  "key37": "5pP2mkr9rrV4Zge6hrLWfH34H9LzWQEji8cknY7BeKGSRaCLDAbQDfz6ACyMz5KamgUhX1oaxUdNvUMTZdhga8LD",
  "key38": "4qdjSLotsM25eFx2hUvJYUP25XcwPxX9dUKtm3CtqnAaNbfdkDPKRwux6iUwvCA4BtRqCgpMoqYhZXmkQ83FSnaQ",
  "key39": "5mk6AwvbhBiWrKZ3is2UAJdnsWry2nEyBtBeae6orqfcD878xrXN3yn9GffBQGG8jCLoNkSsMe9fwnYqrvYdyje",
  "key40": "4qWMmSfAag356bo3rDcYrWTK6Vg1CYcLQw1hmynrUPYAPfpGUCik73RBr4qjTbULfAdFedoLdq9J5jPcq46y6BZM",
  "key41": "4RhQyb1vGF4ZmjjgLiBsmuNxVgj6NisnC6u7zhpvmGLAp3LMySLv77jNdFnt9PCViz8oi1bD87Nz8n7b3kbGua2B",
  "key42": "5Af1mqv9StcmvJtaZFxUsmZKrGUUUMXT3WFjSwYf7j1NkHHzDe7SC3FoGpDZtMBTUAeQZ6LjTgydL11RmuSkzTVE",
  "key43": "2n6dXTXBEyTv4B5W9jrq32WsYnhxrcJqLTKN3Q8BnjypCGr8epwiZ79jnkvqVn4Nxivna8xxEJ3zEK29v6UchMH4",
  "key44": "3cVdQTBE72UDV7nBHdSrV4Xmq3WDTcYn9CTyoqBC2unbaAQ4MA9JKQ9Sv3fo4DcPFLryKQwGA4t67vnqzinT1VWK",
  "key45": "T1PELnsMc3o9CqT3wSLhUbsPHzJHcT2gdNbno1jNof876mJgno8JRavDcnXAB4XvL9dSSZ3xGxi6wjyEHi3sAbu",
  "key46": "4nuBiXPSFUZbkPrZEPsYbFrVsjSxev8cA6YwHRvpEnY58bmi7hvzPiAVy2t8B4wXBMdshvFP5qnQThCA3N5oesJR",
  "key47": "42Pi7Ce9ZftsiqtcfHC7B5PY31pkZRrZPX3hVaE8AkzAy1thxCoEsUBjCVrQiQQvTvU3sCsL3k2V5bkCVvTCudov"
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
