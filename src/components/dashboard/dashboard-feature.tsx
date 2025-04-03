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
    "62LeKY5grpo5W7VHhfX7HvLsrFUfXxkBMDatJzMCb5xxKsxPYSsdM5p2pWxF53oC3XhoJhthoyNGGNYnD9qjnigh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HfTZq8u8dVdvtNZtK7ePMAh8REvb4beAzet6247z1E2WLkiNgtMUH3mwMcUwKdZCqQFJ61re7fqif9cTtUEkuds",
  "key1": "8ALGCayLyg6KFj8fkPEKvkBJ96XgFC6YByRE2NYoXat4K5cyjNjbnDBXS6ZsLXKiBBNvTSRTd2UnCWz2F1RP59N",
  "key2": "56ZpTVBoYN6MrLaT3aMrjixdRZ39uinXxdaw6nCEvY7ZJMDtXqzM5C3v2FhaXuKGK8RNrNKW11Zv6hpSRQs1rtZ",
  "key3": "5nAZ8114cfwRmoocAStUGwhH94ZJKbP4gUSgkrp7RCg9khgvBcxkZNZYDnLrERsbMGuXMGA6Z2Zs4GVf7vQSBA8X",
  "key4": "2bohVTHcaxXKA7mcV1KjxcpEMzeXTJpHLypsUCZUWrJwjGEXZrdx7acyPvJN98aVGEhZmXzNXjRG12vHrgjFY1ZL",
  "key5": "m4fqBJBVSZqfiQkAwNQXYBcpAspEdSUbc1zf5mh1q79kB3iU43f1Mumumy9o4hEX8VsaAVnbQfWQqPCFKgbEbpL",
  "key6": "2DE9MnrVAJ6wjDVZPBu6dNz7DhHF95sZXA8f8Cdasd1Qn1syRZT2r2qDygJVWuT5kBroniciU54sxBwdMkikTPVu",
  "key7": "AuWamdsVFH5Bp18dUjGN26JhDaq79WdgtvawCM5zgiL6cvcdVWC1HdeLgagWPPmqoDxdybEPXffL3q2dw2eopFj",
  "key8": "4xjyijGCDoVVG8S7dhRDwHqQZ8kNNCaBenvyJgBMDPQDq2jtf8fy55ojgTz5428D84YajxvTDo6eMMHFuKujH6y8",
  "key9": "3s8WLW51nuCSHZ4usr4uSysd8TpC5212LDwZrn6fxTsGqBwLADFU3QoNe5UAmapKa9b6jGVvrJ145nTeS43a2zb7",
  "key10": "242cDRtWxF5EndCMB1VDc3GsjAbyF9a66YGgs5oikSquDwVA3htyMVupYePVHqHzy8ToYkS6xGcVmriCwvtfNqMs",
  "key11": "4CQoQ3dW68JqjiuZhE3J8Z9FSQtkEMgGyCqt6eKirozeLzDso27z72phQQYjxdVDF8m7FL3hUPCJE8cfA6m89jwT",
  "key12": "28h5oy8Vz1RsKKNHTwDNayd9Ch9ZH5BazLZWKoxJFXATwreTgJexGnK3RQ7BxwPiWySTX9495VDTPgX9rh1xpFcS",
  "key13": "5J13pNQaXKVTqdFEB5KeyWLRTLorTZekRznWkREsHbi1CdSWyCJsLroZsVG3KfJzEZtpZYMJAGaXZ8hH8CrS9Yys",
  "key14": "644sN7hfUMhw7dVK9AtrDc1sBMNm41EEV7cg5iyDvNcaBjBFSRWeFwTv9V8V3noUF5BLYxW7eLd7YGCGmMkxHoJt",
  "key15": "3YBY3NFVLuGVTC4BY3H23LwXGmiDrjkiigvdsSpLrrjSUuSoaBQZ8C4Y5BSuE9neUJ83kp59j84KEugxezsTVKsR",
  "key16": "3v8nJXzb3VW1kDosLibDMCBLk5rtpbYBvxdBbaUdmy9o3xA7GiWZXqjuaSpL44QyvQv6jtJH3Ye52HMUzhG9PzWJ",
  "key17": "fA5r5UEvBqY9zPnSCLaBEjyEnUW2xHygvmZJ4UJpXEuzBF9vqaSdfoEGubXUxJvZ3xqbNK7YEkY2VxaoxfJWBgm",
  "key18": "25pMNU269XebnMPgX243XLcCrdoQYmuXhfHNy2hzozXQ92zN4Uh8XqnbDLXedCECpDrKdKQs9MSZrkXuenc5KZVt",
  "key19": "2eid4MdoBaJLWHt79w492q8hbWkVqhtfXAu8Msz8Fk7MxW95t4WbxLhgWSTjGrVHKRAdgtRapfChUC6Wub7s5J7Y",
  "key20": "39tV3graiBkrpvDrmty2hcQGkT6oBo6SPNmcry7txuPHbY1ZsYfhWk6EqiQ4ZQ2PfZ3bPrLhEEYLDJVRBURQKjiq",
  "key21": "DMx3wff6Uc8BJP9TRZ41iMNnJozCXpai5FxKEfcThi9EFKjGuNLM5UYzodL4Rba17aQf5W5poaoVH6mMkHSfiWa",
  "key22": "3pB25ojLYgEnqqeQTgp5izhQpvo6uhaXuJN1fyq1FQSYpoXzwRG4xvpfbDSx64NTxYxrnRmtsicUsKj5nZJFGZ6y",
  "key23": "HEEbhXHW3LSwZzYsbHy3vfQmDzGxb5fAeYo5CiHaJdYRGnys4sJs7yEZCCUgymjs9B3Pq84uLsZDUjabtDrgcv8",
  "key24": "5zXcTrijxH8bR3DuwVJ7J95jq7bS7vVCFBmRvmgRPZwnFvJprdn9DUMRWRKvsh1njLEaSuqtURPPem6jSoQ2cFG8",
  "key25": "4H4Gt7fBWx1RftdVPSEayZaR2koH1x9K284PGHXXYzYYqHq2QvqKCKR5bcmFbFTG7P6zHZQGsQAzXx8EHNHonuxh",
  "key26": "37h8PwCATnwszR6MZLVWGGLX13Qt7iQhdTU2sHyGoP3p3BffrCKaf2izGHUz84hskUoTpZTU9QSuMkbBXWYNTMGZ",
  "key27": "4hkMHWGFpxRMCoSKChhgrgKHkM7CTu3sQkc8762hX4Fx7iY9KUk1BoauYWBX5ypdnW1C91qbisFmy1j3QDS1pPBK",
  "key28": "3myf4YywQdMMLijHARbu8H48zRTVYWBNbieyvu9JExn7Ziv9S577gjJbeAVytju7UVwqYfRCiaEAqyamcgDVif8D",
  "key29": "595mqQMc56dD14V3itiwAZuzNM6dtMYLW55FSNfn1yADyHnSpN1XhV2GmgFX8ZZa4C4LtM19ayHYTtsxSpDrn8ke",
  "key30": "3z2pH6Y1H2h4yTRP4QZps4JpP4wQj2V7vXjJ3W16AodUu2a5dqej66bKmeNGQPZKY1YDotnMUt6mqCyhHGGmQB6y",
  "key31": "5oAzvVwt9VMEYrwB3E82Cm3UzA1z3aNybdeq2LCDXPDBcGdxTR3Uz72ypkH6RQZKsoyqkrZDGujcJdRhH6F1w5DP",
  "key32": "4TwNAYcxFucXTVAxqF7WWu4Q5hL7ZSetFCN1nkxDC7X8ASdwVUsfnbsEbofk5Rxs21W3SdEKfYa1teC6JBfgS8A8",
  "key33": "2t5nFuAN1PATLumQn7Wj6vxSdvNgReJvAgsgqDLcwRSsPM4JeUMHgf259ph5viddcAokXwdBzULbCT5eSvNZFZmn",
  "key34": "4UUfBBC28VPn6PhuypfNj6NdMhufkHbrgFDkEBBF3P47qf5JmaAEKWEN5W2u1sxVe5KpJjcfu8GS8i2iPoDwarhX",
  "key35": "ZjXHm2UFr33C1RU9UpNaskkwPWtXfKghfMNiAVi7udhEVRGu3M3jJTXMW5aRfXodeJuyveF7HC2jmZRdTdRUQnE",
  "key36": "41YUwgyrQK95m6xaUhk9VrXzP4qoAimmKpxSeVxgHQdGGpU91pPnzPDRpcJtTWB7oTMBMn5941KbDwmSbE1X5mwA",
  "key37": "3HFggo1GcYjLnjXT7P8Dedj9kaxo3XTbFfqPJvmEgXDHSHLEjn2PHGxGUafuDXjLssHSa4Xko5z9Rtj4GxHcN9tp",
  "key38": "5RrTh9t1b5JrWngymL4gmNb4HhiJjDLWM9G34q52vE79UhnGjhNy2fLRAgkGLR6w13bhcKJGcQX39uA4LMrCiRS8",
  "key39": "2Lw8kEAukTjZcf9jpFCrKPRALp3nXba9LPG9cyExviFVDKKoRVJz66ytRTfsd4iqMpUbZRhZXv63sJbRB8cXCnsj",
  "key40": "2WMmoGigLNyj72bqvDm5LjcEhATQL9g2CxjTv2NfkRsxyM1q7kLTUHeVNDdy5rAjpjqD6iGGAQ4xoUWWU9oxTJbF",
  "key41": "2R897RuzF1CwP9ftzh55CqB8yG1WaVMtZekCdSm6FiDFNK58bugEnk93EJDyrX8zuHimRcrWWMbdaWi3kWYRQGpr",
  "key42": "5dFeAnKPucQ3pFs9hPZfisRNWJxiUw8mPkPWwWYvBmoyPxqmPqn1F2r8fBaqWrpsRnhSMhNgc7Q8zn4ff6AvPSXn",
  "key43": "TcaAB6LNMr845wMnwwk3JRVLVVJnNJ5kFwCK1eecNUSJRSCX29nKaTznaQyAzz4FqywXX8NqUS7z8wyq25ur1RP",
  "key44": "2rpoYk7PC7VWQh6rEEDGmVV1XqHK91HZoe1Cz4FQdnTcHUkimBXAMobsG9TxmbCgnyRFvi9adJeKqKC2Gk2UVK1G",
  "key45": "2PsVZ5Z83Z8Soy7uAVLeXtgbeC6czyZpPcMJ5dveaMCu9Ka7eesGTTDCzKKrrJF9Ji6Be7dXBWWK44KoK3dG8jNc",
  "key46": "2oRhJhhDE9A8uVZQ67iJtayRJAGtCPJHcRohWuJmwNDDvPzpcAWfB7QdLwRCjbAfMbQgcsG8ccWHDYJ9m7sy4sd5",
  "key47": "2u1UKUXQUUYzZvZXgXGsFchjJGGCo1h7FeDUjJnWgGnr5ZEiNLVAevYzU6zSEBVpTkMfWrqCRkJZsfBsSyAk9fgz",
  "key48": "4X312Nmo995Z4z2MEAyiy1QaJXizy9gTU7xNBVJ8zuSwmqVntqG1oRJe1BQ9mYtcsrf6BdJimXG3LvokP1vQejp4"
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
