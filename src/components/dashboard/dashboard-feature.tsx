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
    "r1FuNbiYvZRge2aTxTX13pLnfckK1bvxtTVUajfMkhoAU86X6bEAyvjvtCxgjfm3nNjpByB6DP39Z3bKb5LLDd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QupsfXd1HhkXx5VrjcHHBrGZNXHg4K6qKLWhPriPimxAhHKfBEjwPMqSXL9b4jX2mnGrJkNWKJTxgEHShx4rjgk",
  "key1": "561u6CcbzLMYPAArUQoVsAFVFNCo69BdNuL1RxKyLLudvYFDDAkVU9s9nekEdXToHUPwxb7SKjsQYGQpPQY69q9d",
  "key2": "3sNr54CUxQpPtAL86RC2qbV311qmmaPj2kHH79oHFLKvbzJq3DyQVUsDd1GgDjwGuL6TWrJTQ2aV1SCaZdiV7CgY",
  "key3": "2mhJR2RX3YpKLDeZSVKicmsz32QGhjDFdwbKySsFH8ByEkQgFoXgRJzpREWxaevsxurxBhdYeeWTThrSvBnQeyNn",
  "key4": "4iGQetMMyfhcLoiWwmgoeAEPdfGm32mX9tCwRgt3PPsFhnNd94RybJLMxofD5GdwUFtoTVQ31w7twacrz5VRmHTu",
  "key5": "3747DDfvfqvq3aPm3QM18coeGWo134tFWPMHA82KZ4nNAvLCnkukE5oiojNAkgRDH2cuw5HpF1bas9zTYDV6DVJL",
  "key6": "XHyg8FmbSwBWK9pk8k27zPxBVD7SCkVVScL9jZ3s8qyjqELmWKJcngNxmNXUjgqPUz3i438nXzksbDaGagKp5Nv",
  "key7": "4qPh8iqiRNNnrAfmgV5V5EZjb2UwmVT6HgP8Z3qUq6yiYABFKbhBiRy87mdqVgSpidPV4sfXBH7csm2kABHws6fA",
  "key8": "4wj7GDmbHBXJjJyh8U39t19MniCqFZXNyB7PKdpymZ5udxzMh7EoWUexPUPEicz5G4J9o99qL7Ja7LXD1T56s4qR",
  "key9": "4UCRsj9cX5fCsDNebFa2PNhv5eYM9CujXCbHEyi4TcEZ2XdXCA9qpCPqGWbHYJv2mPWj8k42wjq6mR2q8YHQZDch",
  "key10": "3th9KNYuu1aDQwYUCMMVZ5vyPjcgDPenY8dePebVNr8DuVPb1ocpF2kuVcyaS2Rm3g11C8QLWZB3wZ6uy2tb3LcN",
  "key11": "Qs8TPUzrfvsNbj6Zs9cwdqUV5LkSSAiQjhgrhzqvfT4hbHpzYzoD4JrCWktdZU1wfZ3v5rNAii8sHFsV49EW39c",
  "key12": "5R1CmYNJFsyt5chjNK7rcBynuJ9PWMpo4ggCBCMyEHuKBodbeCrANWjhzxqS8EYhvKnd4V8FbpKTFArgaE1FVsWP",
  "key13": "WJAPuedSVCoPH4TtAFfGwiisRh86TzPVevz4a4Ed5XaTUWJno7vhAFuSrAJZxn5mcJZ2YArR1gwX3btAiYHY3zD",
  "key14": "5c3ei6b1T6ye3D61qtbiiTdfgKLfht6kTXpMniUcFd1DcBaL2fmQUGy4RcVnATZEgCAtwuf2Ypu4LEYZ9PTRx7xJ",
  "key15": "58FQRe6aMPZmA5wAabZ1ApdXfc93AUzf73mX93UJ121QMZewAUMLJCfuwAoff69C4WfQZV5zECHEghmNRw3pYJNt",
  "key16": "3EKdQADji6KVZFUeP7j6mUPwKAQqFzZdpij1DYPHu1LSp3pZueWJHQYqyoUmECMNFsootV5WbL1BVLgicU3gaj8p",
  "key17": "3wzz7Ldu2Wr5ynEE2dZ6vqczN9nBQb1pkcKdBGhYnq3skw7jLfnsYi1u2rSRjx67SXLMpWLh1QS8Y1pAL5gpCMSQ",
  "key18": "3RzaLugf9e736zpnYvz4YQUSS6HFKxz6mydBjk64kew2G1pWUj9cz88WbsorJTTQvE3maSkDQZP1r6DEh4srsF6c",
  "key19": "5sDvgxHaNQThsDykttq8ZcjMcxtxZuF3BSY9rpwFaZeYBnJKAurrJzmo6LZEqye4vJihajhxsXrWo4kgAVMtf8Lg",
  "key20": "4xKndtJqri1DGthfpGjQdjjsM14ofGoc37Eu6rm9WgBXBV9KUQFmDFbCzHck4yuRxiuAorsJRTqATcQ4fFzfnAXS",
  "key21": "mM18M9HhZUb2i6sza61mBLSuTuW4s4wVtmwByXbj1q5BVvKasWAqyt5w3QC5VeSDSWkxqKf5QB26A7mSPmYXHng",
  "key22": "4XPNFqssZcSrQUYhYX7HMKm2v8Ut77FEFS5byVCqzuqYY4wx9qXPq1iQPBLFvt93tnhnVTpPBgeRKwg6m9iXj5dr",
  "key23": "5LsDaxP4HziEWYEq8QwQTBPud8cHSFfh8aVxTcoYMcKNCN4FgHKEbvkrAhMqqkRz98xmoP6VtRi6bf87PAnpEPoZ",
  "key24": "4rQjKpYFxy45pncrE3Lyq4uSoJijyg4Z6nVBUp4f1TmkeFr19WkAbAY4U1jyWsypLAYeCxGHwBZh5gh6k27fbp6G",
  "key25": "679BL2VyA7PPLrYwtofK2HYp7vjb3DV8RSjnaRT6BUDrwUeyvSz7PBJGUPZyNxUMFkVDfWCpTwMErh41tY5nTX7x",
  "key26": "sAoTGTKo4HkHc9PPsam59TRtwAMzuddTpEG8i2VgSqJZaSKVZsozqkaN71Ya4KvJNuqmAcYAj8Eu2LtmqWq8Fy9",
  "key27": "5Ncvm1rLSM5RLKSebxVGE3HESFE8uSpALjGSEsH71wwm8LUezYmCxtyCoNNX3Dnbr2U384TmRjnExLjdGvG5YGWM",
  "key28": "5P7oZYgSYAaVhNApQkY1hNBieGAzSiypz4zxAAgjnKqYaiowDKB2A9enp6X6VC4QZzT3fCpbey1WqjoTbgiWFaFD",
  "key29": "aZXNv31UBBQd1te7Xa2nHBP98EjxgrQMA6BjeuVpjP1xv8oUTBuPw1gyJcfSeVjznNM5CtSLt1ho4KuRDEypF9K",
  "key30": "3iE6sXd66vTJy3j1aqKkG4SSMgncALkQvPv39SPnxmtJVrcnvLpUQUs3fJ7C6JVk1FrLcEesZD9o1hr7VYgv8mQz",
  "key31": "55zGF8p8y691qDxH6W1zAZwUVSToLYRRqtiyeqivcMHB9kNqG8BpTfGsVscAXgzqUkJXfwLfxoXW3BdRLq6BM2bC",
  "key32": "4yPxtYaFZW2QTBTW4t78wYikcNhw34fZuAQdX6Wcf1VEQ6LSXRUk8wxQWn9VhyF2tE6H69HePPeKUYJphK9Crv3",
  "key33": "5G59F7cNh5H352r9rNsPPSo1iSjAZcWXcygf1NALtEnwn1oJj1Xb1fJbV5uj1ggEJ9YV4B9hV5MT52YW7vuWFEvs",
  "key34": "4B9KPW9EJsQzV4adRF6rJQGEH4AcUXo4NgZe7cr5noNvMWMG4W5nYfFEngAEcM4d6qqppDjFzdrvYJsKrM9KPyxp",
  "key35": "3H9gk99prHxxkmsAmv4vzUA7qD5rcKo8ixKiHsu3h1ufTfcEXreeRoY2AV8jmhPQ3au79iuKEfdgQc5o3pB4u32x",
  "key36": "3G7eFWZjgjnF5uBWUAg3o5eJSrWjgvekhvcFaU3i5hZMiiDmEoMcbFt9prBLNm1V4wipK3PYavPfjt8Ymz6zK5mB",
  "key37": "2UwZcQkqBfiHC4KwGGAFfPGsYy1bk9Rqe5oYxqYqQvSHT4RYoGWYndoBfU8UJyzBFK5nosT4LBXxx23XyUV3qjub",
  "key38": "2Cw6FGcZxu5JxqwnVVQ6FkHdJDA1QR1RwpJ7AoxJBpEUV1TT4Swk29a4LifdGA3WdRXYaBEcLZe7xDdAMJYQWgRi",
  "key39": "soYuuTnbkoiLd3SrrnNsVavbJHBEViBVb2wmirrNTPxc1K6bknASWX7YQZsgyTXHocZEJqA8SR48MZDJbkAuLYr",
  "key40": "bFNy1yj4LbNH5D8Fs2YM8WvhhNSXMZXeupvjMAdZCyrCPvzmxzAS6Bn8H1TY2wQQPokfo2G6uqof6K9Yx97Q3Yd",
  "key41": "4qSnuozFoi5sX4SVfzZXNh3CyuJt9J3EX7eGYkuTui5kGauCwUf81UgxoKNXsRdhbN7nxp6pbBJcRReT7GwVARC8",
  "key42": "4fzTrA9SvjTkSNDm9PEVtod4eJ6pYUnesc4L2C1yvNx3xr3hhTFw4iWU9GTtW8KVcRTeQt42GKjvaCNZJ5nrJrYC",
  "key43": "2eTc4Ua4nJsBcjGFT4i4qZXdcejKo38jHspXY8ZC7SY51UfraJ5wUB3mLoLrgAHGJ7ak9CxA8x48magWVhqpQpUj",
  "key44": "LPADWacdodj3oMaykpE7LzFAQjFmEKtjCMKc4XyyW6q7kMGkE7dsDHcFMM19P6QF3T3b3M3NyiQPtNwwzZRPq8R",
  "key45": "632HiUuvDeFMDvmapUPuDvRgZPVQ3wtyRbt3akveEiLi99aZFjftmAfQJqb9q5ragnASTL6Ptke7zoMR4ALiNAef",
  "key46": "28mTiEzeKhNAqszY3kHtzgRhH6zvAAJZuzbkTzQDW8i43MnEby8eLrvgskyaJim6JWkgB2uztzf4Kckke5JvUj6D",
  "key47": "3RHJdgVSjemhLVUV1Zi6tc3WkCbEN44E2qFiyH7hT7WR2J1yrJ7sEr9dnhQx5H3rmrrvpEr4RJimiEaY4BNdoai4",
  "key48": "5eegG1MHEqBUSu57XeKPXsfxRaufchVkNRhy8ghFBf9m6BtxCNJo6y18rfTUdgAjNdUicpb5PLafGr8BDZ8rM1aw",
  "key49": "iCqZ1E1C6zJ7CR4cvsSht7i3dUzVsU836TbK5uXhdZnoqJMmjdAzgDxoLWxry7jgTbFTqV5K5R6LEHYpcBo7r5Q"
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
