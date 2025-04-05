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
    "55EA7PQKczZqvTVGMvcJdqdrFMQpimAkyEv8MKDLyCYnFovHrd1KTCHLr2asptkp8becqALQ52XdXNhoBBbCZeG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MCXHVDdf2fswyaXwfrivXRhuapq2jpYbfMVaerFBmKLyCaCavFeFQmmNCQepo9QAs9TA6yw9qD7MyBFxWcfw7e6",
  "key1": "3QPXbfnBsnauwtELZTDHLAa2p3uzeGGNnSWVs5BQ1JiAaSpbMUiPDA5qV1ADY4HX7ej7e8yMpkDvH3tDV2u4PbLP",
  "key2": "jkfNRRJLEFZJjZ4qGjVEMnv9sj2qGDgNj2XFaQhokw69kC1aBHXyQF4i4jxXTiq1rNY9XDk8GyrpDytEESq2D7P",
  "key3": "5NFh63PzJNBrC6FgLm71MJ7yXE4TB3FcuzyWCAm1PwQWKq8aaLXNnR4aiwQYXu5qhPVrbRUXVMR8U8fVYx46H2zq",
  "key4": "QTwYhEQoQhqeNXoMh65mAgqgpYKNZebTiGSDfEPd7sXVZ5Riu6pQXcSyWx7U8KNYiiBG7EwnhB6RrSpmMHrMDCB",
  "key5": "2eZuQUitZQRiabDNgfdU81m3CXnfFMr34WtejNH2XuQwg8bpp21pnvnx5TkqykU3q6UvhqgaiJj1xUHuvhe1jMwY",
  "key6": "4Tq1M5cnUrBr31hL5irz6Gvf3JTY7LQrszQp3v5tJDC9yn8QGq4TYfN18xhhcGTFHnnw1CFRSZS2MoeYaNjMQB1w",
  "key7": "2sTwxdrhzPxhxbqSjAjp4a3eEP2EjujxTXxkUrBJe6xogL2eNmshdWfDMdkoktVU6NsYSauNU5JHKWvvNQAcL4nJ",
  "key8": "2r5a9RZmAtrB1RT7J2KV6N5ssd4wsiqpaNLoKsFBw6ByZt1hWFuNo7TqmhXXaTGborRjB1oKLUhFrdnTRwNgRhSj",
  "key9": "67mehsVmB3GHXSbCZv7MDtZe6zYnW7L9KToRFLN8XkEayfpvtTq4fmTFyJHUf1abZUFW3j2qZxnrXjg6qLAgTSSL",
  "key10": "4idpSPCM8Kt84aXWawtBH8mEuVRDhtdorxDe5AWZKFrMzhc1YV8aJ32b3x7HkQmdL3aWxFJvEmCyaPnGpt2TagpX",
  "key11": "66RVbY32QfngEiGnkAUUNvk6gS2W4ZAw21sNJc3yBCWTssCx3Q6WiTc8sELGpDoRMSqhNo2fKZADZoZEpbfYvT84",
  "key12": "2HHDLpWiM7odY6FVaQrg15LD5nNmG44WAkb1CuPcXrqC8g9H3V3q17PwJhL6y9iNbGhyXrzFG7hE15mPpgzdNfwS",
  "key13": "2QTsoRcBMZgKQcuEnQns5WyMZiaPnSyGdbfy4XczRWzQqSiArGYk3r9RMySXHUCXvGa185umXyKuZSkA8thh4KEU",
  "key14": "61mc8p4ru3EFENSE2yRiNePFH5GUJGo2WXRK2JiHKtbauioRW94RUnFbG9kDwKoBNdifdYu4RgwGeNSmjZdJX1nf",
  "key15": "48L9oQKxXUP3vXvk7tggm9VHf8h4jv8KFpKtcC1YYBMpeQtyAJCqNHg9PFg5tZBoPMZGgRvvZcmvpx36CFz1TMor",
  "key16": "3eMLsvbkUNgcPNyXGwzAU1bQ2Nho5LjjDuCHzzSo4F1xJ9A9QGb2yNnbwAYTJ44uLsyMpKGfB9AmxYgjRW5wAeH",
  "key17": "4BqDbnTBvkC2h3WArbX2F8deRFwmEdyvZcE24dcAatkvy6Tb6obHpV3u3d6jdvo1U2bdSHCERft7PhNSHvdwp7Qf",
  "key18": "5CeNpsztG8o1EYYFkecaxoB5vvJ2W2NcJPzzToHK4PxGn18QYVfdFLzCcyFsmH7MEBXKfEjM75RUQ8L6n5cHKr4V",
  "key19": "3GvPoSvBKLTTqo3b6y1cuz4fgtos5CFAYEmQDsxzayGthrX9rqRDAaD6desaxyFU7puHRVj7DU9z628w3mEzYvdj",
  "key20": "5vyUBwZnCprkqxVr7g8DoYx7gGNmxjg3gLQmobaFYkLJhizTXcRjpYzMFoLbtW3urEiN6fsxyZHDPAQJS9xcCD9x",
  "key21": "513nHfSrPdwVEkPVqEiBxZkuv3WmhGjZA4TMuk51fTGyhpcKnEw4LML7BTA3pAE8RFo7QsGjP8rUQf73FzayQTyU",
  "key22": "4H2m3NBxRDUCE9QccQwWoSf1AV9fdVH8NftcmWseM6pTirhDZgoKfjpmZencvQFUZ8iQHYG11226u69sfGohLVcT",
  "key23": "2RAgC8ESssqY8XgX7kHK5fp2bXab6qKsrQwoQfzkzssBy7ctXtgcyKyxXGcYSPxbefFHBq8Sjgpe5uJtdR3XUh1H",
  "key24": "5KjM9X4qoisxBtxj8AZdf2zzLu7KUTessBVZA8M6rdKtNQguSGS9G9jSah7ftpJdCTYpWoY9Y8Y7ZK8ksQbvFskw",
  "key25": "AETPjxd7AeXdvHnvWJ2H18hHPWd37KEvXnP2ztaV6AHkPBb9nm65nsiJNi5NomzZwf2yAdrddxphDmeyYAfJzKf",
  "key26": "3ri4A3FjrXWg62yWFhmUZTnoZ2pMR1RWtVzY7ovP88ZimG5LGw5zCMxpi1LifEjzFveEQbcUUcbpbJbCzEYUPM1F",
  "key27": "2Nyn3jbNusdJC4gZuBLDhFLp1JQ5fmTk4gnhmT4fQzgTUqADh8bAaK8VQrtAF5sSBiDXnwigHGvVbhu4HhvREHgK",
  "key28": "w3QzikWUwE1C9GNCnV9spsdoGhHGRgrtmqvrvDLbmrbXU58hkDTuXvDduNZgTEJFNbgmMYfJ1bVM5FWiqPuUBE8",
  "key29": "MXTh5NZfNBTbU7h3v7v8eFsREvdJHtfBRDDcvZZpq5T5zZBT4hRKjq2S8CCNrHgrWQBeaFedQwp9RhFQTyw25U7",
  "key30": "39wwXcqsU6kKYpy1u5RQfkZhSs8wK98Wr6yLXHVBCxPhm7F2EbmjpnpQX3wy1imvvC2uRPrez9FC88x97Z7evB3D",
  "key31": "4wzkveHymJCMBLwgsVhmacyrazpcuAH4V5xAqcgVB3cEYrUQxtyugixDsCz3dEe3aBcetEW93jsydSNXkYfEPzF2",
  "key32": "G12ZyULdm898EScYAPZBmkPZ62WfjrswSsv2KLGrFNBKC4T1PvEbq4NUDFsN4vHR6h2LFVfwdM2HjJksy3ZPh6h",
  "key33": "5ThjvcoxvEE8New7UQxukYu4qiYEJ8vnqKRNSSm9rE6xUnqGV1zxSk99Q4a1LwjusQJ1nwkXXQrYLDAqDekDNDUT",
  "key34": "49DUq32pQm6i27vr6TKWpNqKsktBW6XFxhe7zWMRvkCaCCEuWQtDHbvrfWyejYPnns1XyTytDM4kmDndQLY2xpNq",
  "key35": "oqVBRHKKyro77zquk2ZFRsmn8gkQtoKw2fAo6ju96wFapeKPTRMkttJjb2KSWMx9ehF5eRjTZpaq3bH3abYRoS2",
  "key36": "3fE45ouDzqDVnNAcXUFYHngzvB8AX2539nVmQDSdpDxrEfnmCAP5NcSthdXQuJT2rmHFvL2kT8azhft3wksAyfPj",
  "key37": "4t2Wcjic5tu8YyDkYrjGe4iZXrtF2nDY4HKZqNHzPPP3aAspPDLjFbJCK5iEZJojo7yAS41uqjNTHxYWe7kQyQdn"
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
