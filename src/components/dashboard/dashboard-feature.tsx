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
    "3kQnWo6hwv7KtVs3Sqb29p9D6nn3NvCYcRkF8ruaecfLVLFWjnuXNbDnx63RPVoBURyUq2hHxjMFjiaB2vZSnY8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yuH5yT2jDUixzyiu3JVrSdAgD4cnzKcNmVVuwwR7PVkKPHuTtibNrmU55aTbDE72in3inFGkg2zGKYpPrwqTHom",
  "key1": "FXSnSNaioWjyzXRZTTJDrgkJivhow6Egi2zCw6Yx7fDJtD18iXt57gVvGLEzooqktJ9qoFvGNcfWd1u3ZTftCQJ",
  "key2": "p2wWYqHWpap9VqaESRNEtB49iQbJ9kiAWZEMhKqdBCH47Ry7zjFzJyaEU4e3rpKhkm4JA8EGPD292gNLdQ5ifmh",
  "key3": "rbuozjjXtaTuHr8WFQidXpC7jf6raDNbqRN6ACLEysxrV8ULPjM5ULs8vGbp1cNoNveiDhhi2QvFvGxWyTedjCU",
  "key4": "2QDbiyet1kcSigdnv7vBK7Tf4dm7PzkLg7HWqnHG8z5YhSrZKu3jATHhr5WfS3CrTN5sQeiGrz4n5Gu4KrJsYv1Q",
  "key5": "5mxb3L8BZJp5rG35z6dgiuUfRAgSSCEvx9SKnRk5JM9k2iBtbpVR1RfrhoXoSACvR8WCsWWncYvi6W3mMMKmC2vx",
  "key6": "34VeVefi6Wx82MXu28EAobsufSH5gqksBg63xvrPUoG7QBmwGT1mzabaVPqYbigYE9t8djZ5uwXpCGa2z7rbNJDL",
  "key7": "4bSvfFUgoy7gcUaWaNDzjUmHyPsAAnygQFbf4gVRSHCEoFnQy4yE7ydtd5LsJ8KQnPVd9P6bVbaVxWDa6euCwLzW",
  "key8": "4x7L1ASdvEeHmcHjP633SsywHToFmXzZjyxdaLkdTvQqRn9iR67gUthdJm82TZkXWedhxt9AyJbuS4TUftXFTmTv",
  "key9": "2EEggJq2E8DaaBjAcZxvkSMD3ENe1wLqaZCdYjC8P7WbJ97pNcuADKrtgpZ5AuK1N66XAUgtAYKr2tXkPqTWLuwB",
  "key10": "nGww9YRLkzpPv6dVBRvkyi5x8N5to9ZTZ97rRphqs2YWWi7xSuTrGyzCKj6Z7knJ6nsnXcUjZsedp2foKBWSqhp",
  "key11": "KHtPTexszkSGt3zqmaU5zNQbf48ADBPZmt6w16dMr7KxJAbxRyyKqf88xN5Bhxcm6aFnoAmLnMwyp8YfddXhA6J",
  "key12": "sqDXXNxmF7XeyMqY2NLWgwvDhoKQAQzdahZhWNg6S9ECpAnNq9TiwvTqfNAdKK7y72sNGnzLcVJZr3t56KzGv5q",
  "key13": "2gQuyZpPNBUu3nYrkZshsGmyhTN6FaN3taGLS9zBGMR8YU5wuKC4GVCy1qqQ1LPQy4FSp3HKhnf7X8Btcoeh8L7g",
  "key14": "47BVQemAy5Yo9KFSS6XEtaqgUKoX9PTvo9xCwphiaYby4qrPEPJ8vAY4nPjEzN6J7dHErYFeFeYewtHxTiCVGmnZ",
  "key15": "3t2gNUHBiAjX1czhjaxS2vKxHMbgpGeawctKKMdDgT6rs7k9ruQAVd2WqVFeBG3XZpPNL6358tVF8wLAqbJnLhyB",
  "key16": "5PaYUvfKodwJWfUevkLwzDezvLTcbKMgnisoJZYoeVaVqR82FFb1SexKWhuZv12cH6qFSaMCaa5tc5m2wKdQt8Pz",
  "key17": "2GAFELz1VJt5ZgMU3SdBtq1BzJvnESmuvtCtoCxZhKY8dpoQQZBtG7fh8AYPiMG1ThYsiE1vhFFS5eMpoHSboQnQ",
  "key18": "3jcYEcNLzhoJE5t31yAxAui8wNFbkddYsELG1vbF1TS3rhScHAToxUtFEdQaQ7JTDsJqeSuDV3YxToCtjJud2Nhd",
  "key19": "5XbqD7JpJjxBYiupNayWN8Cat5xKuoTcQeQSaNZPjzqRPQwnxu9JzrTJE8zY29TXHEJbRi6TJ6dSRgDCnETJkbbm",
  "key20": "2oWQqbhYa9AnyiDnrcnFcX47a4wSbu5zg5HThF3bHxW73ZQGP4bvfkLiEjt2MCvQrGKFfNHJd8ccDacdFmnZ3uon",
  "key21": "31TFcY7AUogLTxJEa7YSuai8XndTQRDLzsG5yepPdqCNtnoPUDQKoKSgvzYLmzqLBxH2HfhvWP8SSkddyNjCuN9C",
  "key22": "4UGrw2q8rC6PnebsZqJGmPbH2EV66b34LmTPfJ3BnkuR36gHMb2rAUsUX24yyqPsd81SXYxgRLgZWM31yfs6t4B5",
  "key23": "cggryfrG6omtbUN8DWcJnGQU3wUHT2q58eXeM24qyqsocZ114aPJ1y22RVzWzcJV4hKfEWDWQbQCccfxoUhUhi5",
  "key24": "3RpXRKH8FXQLDeQ7aikbVfFuxo1kTk38bbWrWyasx46FGwrsQpS4HSy1GoHWmvJtJi9jUAgtZy1bqU9JWSQWmVWp",
  "key25": "R644fBBUduxGnmwT2Y7Fwg93qhYkPhK2M4rBjv1CnDG8Bs8VBJrZAsMcQtH8CHYffjTPS6kdccKY71cfeebhwMP",
  "key26": "4F57Kkh6BYPbks1CzanmEKaiGRFCSWB4vYGyNpTCA9MfBXcdeaReSCsrg6bmzTeyLmDUYmnHGvugeKDfeZ9kt74L",
  "key27": "3KDZmhTjFP64phkZbzugqK5aXFTBs2c1enWHwTkBYdHogrtEhC27Y3G6D2ANHYuQpMsLTrfrpj42MtZdrbYAV69d",
  "key28": "2Y5yuihS41YSG4Wh5qP165emdShGrQWqSGSLWS2bJvedTZv5yLVpgYgodW8VjL9v7TysxFTu125EvnjwLCWh4dbn",
  "key29": "hUe48p9SEksYY4jiDNvoiD7vtYWPP6aUjz4hDdeNPqjTZv5FPGAvwViSWErdDS9U3XCbLmMYnm7wu3ZKj3SfBWX",
  "key30": "473e7UhM7uMdW7fbapJJEUXBxzfstxPXeZANCkL56rsbrrAdXhHxJr3FEVQwj21oQDLFd32BGd7dHt7w7qVzpS87",
  "key31": "2Ae7y5TzCdZXi49uKEcgDRxztr8Pgk1MrrLZskc1buULCumykCFFaEEX6bUGWusbTKJE9TkSpA1vKe3CLrZ37L2U",
  "key32": "4fYBNdL5xAjbmGwj25yC3m2WkuT9csqeJvdUuBnjX7EhnxzzGgoPUHgoEmxHXJfT8U6jDYHcRcsAs4nUfsRcuyLw"
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
