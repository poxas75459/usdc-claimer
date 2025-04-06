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
    "cdAA9HCtX3EXgVQjgM4EHHaCetiqCGHYC29RPa3u35Z7bxPTcEmC2WQR75Mvbsze9trHWYuBpBBYxH1wvqGonCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "noEt1iUdBGjHrbFVgN8upBKWALQikEaZ4pAtxXZUKfxraHNZZNVe3KZzkJ9MV2XveVxkuX8EzcisDzMogsZVtxs",
  "key1": "2ert6WuiaiEdJdnHLL5aBCxRLz3izBtGNxg4mippWYpWE27vy1dffvF26NGn1A8mp7r3vFjW2sqiigkU7SnNnkgA",
  "key2": "2XSww19FCdygotyfXMREgJLkuGPMu1GbaPY5Sr12aai78hsESmxoaHijpWHpVzYrtpTN877wqtbHx1zbLoDy7wgS",
  "key3": "5EdoAGa212NRfSmxrEhQ6GS2kddwzdmaiCTizFLuU3TguBWH6XvaEqwkpb4jP7qpm65KLeRHdPaKPLGKCdStvWnB",
  "key4": "3QjBMyGGy5fNCmx8GFvfqZRakEKTrPUjZmzM9M6V8yvmhvYutuUHeZtfqAC6trMhoLPqDj8n9yY3BuFJeuGdXv4E",
  "key5": "3E6rAP3x8tLddcNGCHG3CZ4KcqcdmmyGwMffV592nYRNioMPNpBLMLGKQDF87gGU4pm6x5smjpj3GdDB8BmW5p4P",
  "key6": "5iDKAY7M6jcWi35eSG4Dtgw6f5jLp2o3cL7irMXz13PE38Sn8GTth9kCqd8G3V1qzzkVnvoqfL9HA3hTyU4FkHEk",
  "key7": "BpkZXDfZEBjWWXUGLfdBzX6UYQwKNQkGZxgXcYCiELMZg5aJeDT2kZWGLinFrAR4fswHyHYdx6bgpiNMBbQpsb3",
  "key8": "2msxki9Ztcw8vAMhSYYjAZJgQLcJmYdLGv3CEThccTHfCmj77orhXxpRFak9S4aqqCvv3wEouBM1uSDF1iYBxqyn",
  "key9": "5sqw8Qc4fLujpoFAGAdJPbVdTQPS2YiR6FbNdUBFJH8gydWkGujkATSCEhvGRet8NmsoDpAehk2JzAqfAR6d3Pyz",
  "key10": "3CmAFyVLDQpHGDazLykPijLLkWphbNHvuiNjCR6EofjFCqkrWtpZWvif8g8wS5sgaFrhgP1XMDdRTfMPHv8gNBKX",
  "key11": "5KyN66JC2Z12At644mATc13ZweZVcB8EGRxD3CKU6SZVvLkct85BsuqVGiAWVEcPkyk73PL3Yp6nrxzsDUbq7tGt",
  "key12": "5xU44oy7KD7HhZAVSarHzTDUti5giPacYD8ELk6swF4s5hdMKgM6TnARXYybnHydaHDn1KjEtv8gPz1dupCfp1Yy",
  "key13": "2tFbVLyR26MqRH9z8PvdWazZNzd57eMYZ9cyXKLamfGhANViRe4Rf1EGAPZyf5DobV5nGPrRzvRpLHFkuTvPPjS9",
  "key14": "2174rJAmggoYYJJVWqVy8Lqag3s4T2Vm6MRmzKYnGKcpZUG8mER2WaRWb4Fvaw1d9uaxWVK3YDMMoXxX7itL72nK",
  "key15": "3q831nhiq273a9z1vqnk5mnd6vuyWLWmMYZoJC2G6ptqUKGpLMmG2g2CFanvL9F4JS4cgyiyGkdaRBgzfMDCxyMW",
  "key16": "36SYpNw39MkhkUxyGR3ZTDGbis2BhCh4XKBDJSc5ssYy1upJMGzdAGcjP3AQaAFJvoTor9VrNExguTnAiPiNeCbv",
  "key17": "2yV6ZigiKhkEBK1pRbTvWRgsn9Gbq9dYXJLdTX7LfXoRFL4jfYLcgtDc8a76XqMvxP3o16yFF2G87wCHqJL2Z2kp",
  "key18": "53aSUuAxNxx2Y5VNyiyGkJ6HuyAYkwCjZKzLy1DNoVuv6TsWXRNMUHuiBtRnHEvwk3igGk9o6CibhVEp1BF9ZmJA",
  "key19": "2HbtzEgoMXKquu6Wsn3xSvyuUSHQtooj35MsrU1v2e9MTSqYb4jktX9tZ3YcxBWjyMaWsU5AYetywqeggZvCKRHt",
  "key20": "5PrY1nEA9AEqpqHjVGEmNEhZpoZdd7g8wE78AjUcbjCArUSkS1EGhtHCC8VgxE8nWJfy2ZBCjwaXdf1dwNkGiknx",
  "key21": "QXuLbdnCFAKH4cMooApSvE7d39EV4hK67octH8Z7y6fg1SpJ4cYyR59spgjnE4rnqofULzEXyUsATeNJ1PaBRMb",
  "key22": "Pc1o7H45kvvLnGNDZ1xwbtxiGHrBoEfcYpqfgy2MAuEPvJTJkSmReBoTepzY9pv8Td7UXnYpMwkHxJpekguhZtP",
  "key23": "2FNNPExxvSQY16rr7k5ks5sXthyhqnrraehy5ej7w9mXevqTcxiRkGGoMnjCSY634rU8dpK8LCuzNjiRSBdwv8qu",
  "key24": "3BK62jmbAJVPXPicKesRkFB7X7RSidZ7bHt9caovpgZmh6QQCtmytBE3m7qU8vDhZ2NPKMGwQhczNvANKBzdjbQo",
  "key25": "33RDZd1SQ62aYaHyGhLhAMv5Kho8TULM7g8cRHse3XHVaQgbxK7UYkK7QBZHvbaENHFSzCXE4GnCEq2bx7eGXrw7",
  "key26": "4FJ3Ft3Ly6BxcMoPZGm6gbSc23auEUpUPhnWp7d47f2LrEs4mP1FhPTdt4Xxy1zHMDd6dMe5MkhVMrVXcu2y1mDr",
  "key27": "5oFikzZ98k9DP7hbmTwLWvXP4vJB62gVm4CuWPs9eXBCVMQtLP1aWVjBr1gDqz7sFQz1m9s4e2tRE5D7nTNRnSJm",
  "key28": "4hZsA9HvA5QjhK6v4GRtPZas5dk3kGRjazoic8Gkojoiat57sawjaVFu9TV7t6izgPL1QtTYe9m9xT5X4U1fWD7s",
  "key29": "5aQMYAzWyak2CnmLNN659hPQtqU8MqZdogRkmfa6qdoGxe4CXF9A46mP2feSXDPvLNr9R8NY22cLQVyB836HtN3A",
  "key30": "c7LjR6oViCdv9X7c4wkiN5ZBxV5eJdJqw6q34zenEzVwpWiiFt2gT4NzQXmDJXGo99SHbMvk5WnC5KEs7pBFvv1",
  "key31": "mAdo2BbgzGKdQrkG7nLxzwQ8WeZGmDF1Y1n7XsZth8RQfc5bRwS6rgwtEDGjhGWsXzxGcRSL7UMHhmthys1hKjM",
  "key32": "5Sx5RJCSVQi5cEvP2YW5W4MLHPRqVQ3gMnYDHV6xVqTvQFcsYWrivrJRZoSSA2LyBRNSEB25Lnaw1RcZgHHkmiKU",
  "key33": "hiH3DkkYBrAHwosHhTfhg8fDu835EadWAVGNWtZzdujVzve2TtRaDPTUcDH8tb5SDNXdbv7Ni5YMNZs1juM539A",
  "key34": "5KUMyneK1KD8BtuJg2hgSZrs4LndZswwmWDTs2m96v4yZFLVzo12tkRhP8gwuTUkDCNQhn13ocKBf9jjMs21vB4n",
  "key35": "36ha8LFPGDYv68bDHjWj18p1KQwwmNUyTw8a8EtQi2TKG8xmmm4w2jjf5n5PPAEsArfVgrgrZhu3N3KB6MkzyMLF",
  "key36": "4MVdmnX679zEjfYmvKTAiuDj5arAitb3EMiZ3bFASv3C9XZshkvr1R1j7oGrho5hdZoDPibvb7qLfvRu6p4Um88b",
  "key37": "4DwQU4BW4Jp7zhhuNJFXS89s32ySBKsNJSCfXv9iwfcRksmBrmJudG2U4nFw6YPMkTaqWjzv2Dj9gXfqU7RT7AF4",
  "key38": "4q1H9pNHRw8hivV2KGGLtUz4BwY7cVxN1YfobCgHvSNmyzxHFkRaeGu3bK4x59oWk6UmCejErbAMF17ouzxnSYaV",
  "key39": "4j3dtqvs5UyMrGjC66g36tKaMG3iHrGDY2NTKG2F7trosLVskrG3QnmihFzq77Tzp3PNGSRffoksAgaDCFDzbkZ8"
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
