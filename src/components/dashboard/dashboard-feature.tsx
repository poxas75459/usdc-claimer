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
    "oFgbc4Gi7ebfjxFJeiPcS2H3q4WpBQvbEy6sxP4PLPeeYz4PRoFDrgV27HkWjEgivPW12LSEq6yK6CTLFvQRwL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BKS5Ns3RqrHK8iSyCMpN1nVV3H2afzC2QyZYtgwK6ATbEqd3bewSoRyDN1ENT7vmGh72oUxrsvp25pYVsyF5sS1",
  "key1": "2nzXHpaSaSshFsAnTFR2MfGRkpMMh3J55oFsxooRMApcJiRa7G9QXb8gPo4mA4EjMJHxBAbT4wmGB2NnwBktUzKn",
  "key2": "4UQYLrTdzwiB96RJigh7kg2Pc4KamJgv8D6bxYrwjD4PZ6WdhVVLYLxE5ZDdQGEGnvbPibPrqSebpntwDf3F4gsa",
  "key3": "EWvS2tWWbM9GDp2uxrjr4WcvToKCYjUiXcbqVExmktT56GUVXMsy88jvuZyfUpj1BN2UeaKtPuVKkt7L4CgechV",
  "key4": "U5FZUuyAtEUs4Lc4e3RyaUB63AHx9jbfMYRX8XiwWG4NqcjzBff7AUtxk9S2tR2dFqLpBbvAYHUURiYt6UACtCL",
  "key5": "3zMEPsGpuDzSQDwf7nd9T5iQ8QTe9fnidoEroYJL8zj2rLpoCwPfmQoz2FfQpya5PXfPuD1xtzGTDFVF8dnCZGtU",
  "key6": "44jNeY9giNn7zNW77VQAUbPKN8UW3p4nfUBhRJqo1KSK1XqAPcWeRz1FUhQ9ChajgfTn2dtBDURL8hgEMcrzVoJs",
  "key7": "2k7nwYzGjFHgfbViMrsQFbUNdW9tv6Andjhq1cW9jz9wJZWjHksxaGnp1KeezqEyH7aLSvRXGJiRqqNNRqHBLNjP",
  "key8": "3FvEJPYPuQyvXR95umDa3hc5KcN3voBfryYTknRebBPh7ABgBGsxUhCTaYCCTiqz4KNcoMZvpBmqKZeJDckjf1Fz",
  "key9": "4vUmjsNBtYTQw9PCMHeAcXLQ9n34fYE9KhSZ2PrQie22xfexLwrKYcRRDwNMLiZv7gt76YgaLWeuHKFbZbKY1G3w",
  "key10": "2SrknzRo1EhjWoJKDiTc1aFmNjdBQD6MfqQ771XigMBn2CAdeD18Ezs5vsJG8zjZhwGQzo7xv1FaNi7pavH7N9yz",
  "key11": "4k1zM9mCk7oE9iJVk4CLpEGSh5XsugECwWcD6LwoFv5fbpRx4Q6QfEFSeh3C78G8UMy4Jo5svJdn6XneVBt4dhwr",
  "key12": "37EWvJ5StsKFQgTnLrLm2uGcmWSYVVNV4xtrFdms5pnNADgjmJXsWCJ6WAY1FkC8bVzTS1GTQsYD8Q9JxKtBGdYo",
  "key13": "3aMKNWauwPELvLhXTJCJh26pZ5E2tCrinLH34hzrKQ8ksuC1b18fhTuBG4E6JFND89BkTWHiTAiuamBqgbJAPuSi",
  "key14": "4qr98VvvqamuCmZAnvh4Cuk3ntZRs8b9ibLgkNAxanmajwqU7STHfZJgox9QCjvNCRxQHnBUrGEkzYGbFvSq7zNb",
  "key15": "5RZZvz84vushGpqvo4bNYbqvSaxXRjZFtTA6qaAb5m3jf8ENaRtsejz22qjUKaV5V53yqoNPNUbxWEd3HyAvCWfS",
  "key16": "j1UMbVPFXMpszFrumHazV9LxmaDq9QXM6FJbJjS6aPJ4WkatEtPPdjtKxr9aLJa1L4ZQqinAWGmkS1DbMnZCBma",
  "key17": "3YAYCXsaAvUUCUMqQY8KnSe7bNJo2Y71FCZhvBqZNjCaAg7VLL19KzEiZhdbiUhsTk7VzxX1iQW96fhjGdmtbB29",
  "key18": "3rnV6ecswZsxcih9LJ2NQesEFJwDY7uKQb3SpgYEL36owDkius4wy9EF5SrPoTStKH7pxRBYZasiCYMB6SdK1KfE",
  "key19": "2WYkBzyvs4bBqV4bduwBVRcs8RMZjHXuseEE6eusQohhqmcPQnwZ7H5EN3ppzccX45SEjQ5ZYzihvSexK4YW3HLB",
  "key20": "2jbPx86aKFE7dKmPLM7d38uFYG23bBD2HfF623ZeqvvVFk1gonVNfXtnzzwYxNBnr44JAn4478ktZg4zvf8rGtbJ",
  "key21": "56LC27LaA3PVjTEi6yP6eP9fTKfexZzWuCaPq5SX7F42ZNPMiaoGonkXCUU5zK4FKKMMbo1EYyttFpXW71Dmogkg",
  "key22": "3dR1jE5CoxpZWyR8eYd4PqXVke1ViRZtsiecCtwbFJLggsy1avzgzVadhu2oERK4YkekJsSkZWTWTmZFGBBRYbwH",
  "key23": "5TXhznVWaptax92v31FYDeyrYKGRkU9NPwxXfZFxoXNUARnaMEp548nVFMX1YG6bqHTCeAgVzoF6jgUpcrPrYzPg",
  "key24": "2t4rzf9BfdjxE3kvdabLhQUWbdfdNGkvxsxbAaUzBgD7VpmaTegcvwfuSwxPfrzKjinLfeLYD3au3UsausXxSBrP",
  "key25": "3PULDUEm6Q82nLnoDHxiSjKtVvW2mLh2f4xVW7LGuhD3aNAdN4oauhCFSpTh34QwFTZD3Ct3WGELYG94PfqYTHdJ",
  "key26": "63WSfocqFAH2Dd8TYNZEYKePzFxP2WxAvRS88ZpR99Ygxkwp1zWLQ1iKqirCiq6PeahwwnLbnSVNv4FmYixaJJE7",
  "key27": "5QYoeArhuQdGdvpiyXsFdEGjjDXawyikq5DqJRe9m82ndXW1cmMaLmaKq2NbvCEDTJWmq6AE5yWCa1VvGXvdRLnU",
  "key28": "4YsBhiWGVxvWr4skg2kkiKcrLbVzuZ7N8CTf3dGBHmQjN79nm7pcVdk3VxFAJ4wU4h7WpwbaAHeHCd1fULUJT1Yo",
  "key29": "5JijV6ynvunNRJwGTWVe8K67rYA8xGFjLnprwqJQcbDXZPX5f4pWTHYsiHKrhMVCNi5yGXQDTq9XSH6e95wFpXYM",
  "key30": "4gpgNHj5hTkVcowzHBNxzpbgu38rwNmXi7xCnaEBqiFwAFqTiabcvELdfNB4N2j8C7QQ3dgMHHEGiNmi9zVZBoB8",
  "key31": "5cHT5QjKpDGHg6ysDZL61ktdC488uwiKbZYW549HXR5kgjBxnguRevjY1H1TZvbRzPUCavovCKMGDKMDgaawNcn9",
  "key32": "5PnW76WeYF4cgQvTWduNKsxsVYgv27AYVaPHft3uQ1SxJ4H6TNxSu6yXDRDXVNQo1PBWKZNE9btvvbqXp3P9uW18",
  "key33": "5x69uv496oGSqEzE7c6iYp4dyJbPmEvSo29YzR7iD9SVBCaPXbTXQxBXF2P1YqgDP7CxRGursrXjGigzthk9aqL3",
  "key34": "EShgA49hPFF5x484MU1EAQwJuscoansy9MJGKiZfNb93E2VkBZuPikLNRN4CtyffE9TcMKa6wQHcsk3ZesRVVpA",
  "key35": "3ZPPk8APn3766UikgyCY4ZEd5R3ZH6U42M2M5JeG5efRfY1CiB9XWmmiLCTv2YQCitowjW9YhbkuvRCme1aSSU3W",
  "key36": "3qK5GHao5wvDyMdZ1Dn6CgYLVpx9b5AG2hxQ4QLLhitkiJnxeVqXKMHEfAzpwRmmdnHbWTKGio5JfmPRd4mgD6h9",
  "key37": "Ks9JJeZdHevkzwpRuT4456KojFf3ihvvGTbVt6Dts8hGe4Q5vsHsjGRqhdD4K3389crbheeySfUc7Dsgi1dpKMD",
  "key38": "5nkNjQjMb2XEiskz3GGXuxRpi6vDFizkZTZpMwheSQhiSK1VXhAdPph2G2iVuLf2uETWBJfaYzf1iuwGPMDsz1zw",
  "key39": "3jYFer7f3D3jZJyoC9RRmJP3YDTLwx7bVbzGLvPMoBXjQk29TAHd4aBMsAizrVeLFALCsPBE2rcd1SNhj2uDphik",
  "key40": "5o3etv2TiJPGrQgQy6C1eg7oL8oA9LWQXnSEsWQtkRusTUAE9hu5XhMUUURX1rHseTVZLwSiRmYpG8RxJKeaXC5z",
  "key41": "4rfN2oexcuRvf7YCQAURkAK9hFEUb7ugeD4NAjUerScuWvLfBxYjRMGw3fZzFWFE2fJR2zqtE2jBTxiw5yS62hg",
  "key42": "3KwbT3SgVFp4zPvSJZhAFVNEL56kqsGbi5Y9nk8Pd6KzWvy2P83LzF4ybVpyS3E9fB7XLxBMUHpN9bfA1HcpRrU9",
  "key43": "35Sz3kJhoqBRjYAF5LXf5RL4BCR2VmtkWcn4gkzkQFY6JyYsnczBezaFYEWTu6KP3KWpm4MagPhqZBiQJgS4P7of",
  "key44": "5Qq2RpGUnKgBb7xeb2g5VJ3RvLBqf1Umht89FWEM3SPkrfAn9E3DMntADGNevsA7XxgFswpcWHbgHXyoZKM6Q2VE",
  "key45": "29rKAZKrmjskpP43BXrvuwsctyH8DBm9EUvPGbMqrLbwgCDNJn5rQbzXdRFevtaTsWbm6ZpTWYs58cUo3U7wRNCt",
  "key46": "5ufQeD7MJX59mXE7h1nVXpYh1MFp53gfZ4rg5Vru9C9nDmtmTKY1rJ5hbPz54eQuJgiDdwnUtj7Ykk2RzRuNtZoD",
  "key47": "BwLHmaASsojuz9Dp9Et1aQCZSWskMXpSh645BSw8iMYdoPfAfiwekA9NdLB6RRSSQ7nPQkhoyrSfD3zRF7DCiLT"
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
