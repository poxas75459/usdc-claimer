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
    "WF5ik5cre9d3UpRgE9SgfapGPhX6WT4wfUgKgTUkCwM5MJW8qboSu4yDLYbZg1jUcysruKZ6GA327DgATWSxLgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PTPv2HCZ1ekMAocu7LJgonUpXzXDdQEax9GZGqpma3HwBTsjGwGvXRmSN8rua7FiZDg6UDMWeW6ahrWhbEkNL5c",
  "key1": "557uj9xufYo45BmSPonC7trBswWWGyhKFa1Hzzq6hPuGAnpDu2QAJEPb3jN8XfGe6Qxv4EJqaSw1Y8GBGhMZATM8",
  "key2": "4jDCFs2DeSJcBVEoXk3vFjB8ttbKX78QmZBLveUVLuVXyU3QsxDS1qmxnY9QzkXuPMYFZ5pK8bE4DpvFdU1hTnbM",
  "key3": "49LHuXidgUnvnFFbVhw9R9tDkoES3EF9aN3WpqqUzsa1KWaFAFYvFqAwjfhcmKmGTNUjkEQVQXjokMBHtHEunLXL",
  "key4": "5aKop2sAMDHnSbFc3f5HNieMaZDTqbaLWL4EJbEkGwSxbZcGnywsAUBJiLyWoUFK8j6oAsFAZLKQkTet2jAGrtbd",
  "key5": "4kziboiacKS5wFz8wzRJSaRFdRDgnZoXY11GHufpNhNy7SnjZuVRyBCXMV7XnWTxiH8VM8ccfZ28WA6hsKZ5KCAs",
  "key6": "4ZTHPxJDoTzrwbFmwNAG5cGiP5A3A5j9M9znLynTSAY6Gg8ygCBNJEhLDNF1Dj2ihc8GqbKvkam1G2W4SWoJ23dq",
  "key7": "46uABCe4mzD9cb7NGVcFBiEUf18wsTnfKAbWCAbrYQ1ByKoSMuZh34EQGbz4VjTeQSRKBZkNdmrYR1BKiCW1mFLv",
  "key8": "5QWBcp2Y9y9Rvd7RLhZUqMaGTqC3sd6cHmQ8FNa3X2FbhzrDgzSVZLztm89aA4uv8mWJn5SvpVBSh9E5DLDK6Viz",
  "key9": "567q9hht6HURv3YNQH9HxAAiDLA4DLgW4KhyNJeSRVADtU1erGcXYdf2H6cEEh2FZTws98ucKmmouNkFNwfHPsfJ",
  "key10": "3by5AMY9QmtP5kAAetFmMqHsMfACEspS4wZnfSpgB6RvsjJLqzJBjU8NzYmezncdSbLnQrHDvvhGryEDKh5LZsxF",
  "key11": "o2HU5b5zDRYfTQeG4VZ6UcDp1aY9xW3RHNeAHMHCqZX6obC37j68CLWKgYa7KX7YJW4BNjC2P4LnjRRVETU62WK",
  "key12": "TNLMEbG9tJvfEidFU366X5bCTqWC3YpJMa7JsMCgyR9UqrcgCQUkXpkgHrLUSzG4a5WR3CU8yBUPm2M3pVDWuz2",
  "key13": "KpKCDJJYLNse7uKUiaT62roMJdTgLeq4CRyNfeLsn7538oLQSRsHg2QZRSgFU25u3b8rtBYYPVQuKxwbPejnLPC",
  "key14": "2uvA8Z6KGJ85PasQdiRRb6cB3iV7yLZWdPxDGwRNGTGtT35PGeBccYsLpaD7Vp3VRyWdEHf7QQJCyKnHfsg43Rwt",
  "key15": "2jfmoCiocHZGYxPrLymDVWmLfSEc1WQVDcg6gqT5r5f4ZTGQDg2SwMigUd8NqmfhucwK5auamo6pHfwUugXSUp6G",
  "key16": "2E7qL72jh27xHNj1Jjw5ox7J6YGReNyaTWNGJKMYDU9TxuRfqJmZzGDd6zcfRqMheeXTx9AAsKuNzrCXPACv7fFh",
  "key17": "2madBB8bLSSf4CBeAvHSFSqKRXRp427jXyKFHfg7inEmtUG1dvq9r1vPFETp1ozNG5J5Ti8HPmiJ5C9sYDwFksfB",
  "key18": "4MB9T71vaN5ji2iAviPn4uUtrdGAgpZsifzDCsh8j6c8ort1q2S662yo89Hmh6cypM1n7EDnK95jg4ywMgZcpZUb",
  "key19": "29z6XeeTerVNiFGBcMsr85KyJwvTNC1nPuDTwNUE3rafXwxCVaXS5TqXysqwh9cfuPnKN3eaPETNEQjCym2eiw3i",
  "key20": "4cj1KztGbfmpLVyFVEQZZPiNZNGaF8A2jby5sSpRDi8Q5NBw6QZLtF6JUfu76UTYcCSmkUmq7VEazS2R8HEKtnJP",
  "key21": "2zCkXNZ9vLfjWiTqfkMtKJwBRfDs37u1Ljk7kwpCeX9jzpuMdfTHoj38vwVGLDvwVnxchdvGLcRgiMdn6R1F66Qz",
  "key22": "52sVhjvJiqEYRV1CbDVLqJeQ1RH9TVHnTh8zTtVX9b57BRt1N9utXtD8Uy2SymWC8Pm3fsNwgBfBW7nC6LHiP2M",
  "key23": "32Gt8fuBPBXmWhBV7btaXiCicwgceL8GuW5b7EYXaKefAeMm2GbwDgqW2GFkBBwoJxHsKgrWSNyKkYa4pPyK8kgT",
  "key24": "7xMGpTRypwNhD4qwPHmVHJpTbjfH9nt72E7BXCcuxLU4HsWdWTbmaEoewVpj1SyidnqQ95fnUyEw9iVcx3gcmS5",
  "key25": "3jhmT3EYJZm7Wsu5KDarz5iuzDd65K6xVoizC1X3Z6wSyojakvk8UGcdLzuoFdoZjYbyGfBG1a8zhifw1dQtVyCh",
  "key26": "zmRUZ86ruAAfWuudXqTAxyt473znSy9jVAquq3W2JtimCTKW6eyMUCAJmbvWutvYvm8rkUVmrmyY9gwngNywsdf",
  "key27": "2fMqeRdehSRRTDVP3AC87RDu6bap6TR4UgYVSaoohTFmiWXermNvUvVRR9e4T9dZUgYRHmj6j8KstzztxCnUjxcm",
  "key28": "4bTWxBFQ2EFSYzuuFQgr6gUyrtZhfTjYj6gAYofr44BvUpVSsq99rUPjGrLQC2LiaVjKPibYCPDjp98HzjE68psn",
  "key29": "3DyBmEeyhPm7jpTeiRy45vhZYFEgxbPyrD1jfCz6ctunYWu5egydL3fZnLiDeSB9XnVEuf3xfPEsDGh5HBLzF7Qw",
  "key30": "22PBoK8J5EUTr4n9Xzh7g56aqwgujHkninwRosVjapR5Nxk8RD5pA9TKcCNSaE7r6g5kqMuyTXo7BSoZW3kGFAr9",
  "key31": "s9fe2xzrFDK7VividsXVdTDZQEsL9RKKkkWyeWpvisJZ9SPirD9oeopSxwd84qBBwXMY2nQ5FZmoELmedgry1mA",
  "key32": "4DLZjaG5cwBRF9iWZYimgxwjpKzs5WBdwwtXv8nWAw4bAMzPxrnnkNCTVfpK4h9WvrhwNSEkXoyP2bEdDBQRHWzw",
  "key33": "2HqL1HL7z2DtrdvuUJPjVAf5nEPMTFWPm8ve2zgBLQdpKWem2HgVHPkA5tZtCxaKwk2LAPpUDAWox8Kd2NNSCh3M",
  "key34": "3yN5UypZKo7PGpirypFQ9qEu3MyWnQX6VNbLh4rriuy3FabeDvK91tfUgBEAAYWmYiYMHT9ovGicygKXSw6KXe2v",
  "key35": "G29GtYNipVdKwccEvJLfvdEx9shs7j8oKR4RWF4RdqEzNavZBTFopUpkhcxXpvyUpp35khJCchKDagm8WPYgu2V"
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
