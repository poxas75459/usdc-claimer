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
    "WzH75DSAngtoPgGboSyLoAEqPPhUnRpUokXPHaYdqnzQe8Pg5AH1SfEwJakwY8eGEp8LRTPe5aV7bV9KabxEXjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uhTPA85j549VgW6bGDvYqMVRn8fQjgJt3zVrLqjLBcLofbMwUpjZ5a2zy86bQ4tojR5jAcnFp5KQrRLAkwFng71",
  "key1": "3cUaM6g9HiqtT6P7hzxTDggTuhaWKTifdQqK89xJ5YjAEaQAHbyDPKrXhB4VjVsYUFer1twnrLPnazoAJRpgVrHz",
  "key2": "2ip82RhpeGAZpoXyhJDYQaxWZPaKTGmMdbFEN66Yr1BGH7RGJQeYCFhcK5dD1LXVxT9BX7tHw2cGCEpg6z8Y5xzG",
  "key3": "3nicTmfsp92NChotzEgqSxFveSpoAAXqxXgrb9Siw8aoZLV8nNtnuXwf5D3ETFnmk68GHMoY4SGqwJj1UEvBc8WA",
  "key4": "64T9Z2ffR3Zze7YEvzh7hQXzGXi6YyKwN8bLuj96rp98MQVwwZeUGbNykXYxD6ib121nLA1bdmTEcLJjzmcFEaBw",
  "key5": "wEaQzaMzJimH25pwqN3H6vTBCkzqdJWhspS63X12XmAZWNoqkJqB8uPqF5DHPhs2PbyeJKa32L1B59TpLrsx27D",
  "key6": "TLCoyLFDJoNUsnoQyT5pmYis1bTpwCEUyPVH1Sh2QCh4FVPnGc3a4gu2GLXPh6i3HGcsX1UPPmQh48R5U4gTiKw",
  "key7": "3HPstmkuQaxUnYgRV217hnFjYxSAamRcykz1zrTgVDoBK824gjnT85AsMgRLF1qcm1YwB5Ye3d95NMUzRL6wcACn",
  "key8": "3c2nMMUUuNRV8Lyfc1eY2NTQREzyb7EwYAUTVSET2rX4ZuAihzz8XHo2BfV9x35y1cy7PKbR1CubArsvnLxLTFZn",
  "key9": "59tbZrpeVuTi52PFrf1USgn8uoE3ZYXtk2FHiWbebHGQVkYnZCxTYGpvUioqDxvo3gdcyebaB6eDTeMSpGcLqMvo",
  "key10": "VzvGGpZ7u25PYxRkstT5TFis3cuYS7v5WmUpVKv4U8cyeXqm3b4w5MK3KpmecV21wobzyjnua2zbpYDjCxR3pMB",
  "key11": "2Dom7u4dMLLXMqeFMz5KkUSAS1vEe61U8gTiwwxBiMcHXmmXEUTxVjJQPx5M3KX5Hrckb7HmkjGbf3xoQwV17wKk",
  "key12": "5hEqEaus1eC3eVGZRaRwnWMLZfHvbcFLxT3mHc5BPVo4XZzGi3wAi12pNmKu4z3PaYzVHRBSirCxZQwrZXjF9Cxy",
  "key13": "3hcCqZftnQ4CpAGAw3yRLUev57zPtywW9i5gc1ydsNjYRN9X9nNZFQWUgXNCXwq7rj2VBdtnm2RP24rijcpKbJru",
  "key14": "U2BkuVWPZTeFWhP4mgMUHiXmbGmmH1NoJN6Y1eYxN7mAWjUMyJk9xoRXjSrBEEDJVsLfab8Rpsctu8cdGaLkQpp",
  "key15": "vkcUqDAq5iTHLkgEHB4vWyZfxWXbuQxFpJRUxJ3Qt7ESpBYFriBphQWhCLUQZD3in3CDLR2TjYnxcaCfKtN5pKx",
  "key16": "UBvY8YETVwJSPJEmZ8JFcBwWAJQLqq6Xvr3vEsu2ZF62bcs8QsKkDAwFGYtcVLV2S35ttJC45Fk93kX2r9fCGkv",
  "key17": "3YjZmHU12W4qrb4PQtD7LYFQDzGTFy669z6wYhaeG7JiK43RGodMJKJzzGaFjsNVKWeXn274yKTiXvVMYtYorvRq",
  "key18": "22cBy5QnQUBK3NEaotJAKrq2so8JzB4xvwsJewM9xCHpUAmejg4yrkuEtVikAxYr3BNjWcfS3s7HAjwdKAzmXGWi",
  "key19": "659G56SNsEk4Qzec7ptJUcFJwofXDH4Ucxf55QaQWRqQy6WF6HxbKdNTYyooh5LjQTYKnBhGaufM8sePsLT1PM4z",
  "key20": "3Cfg4WMbPRmnWy8p7zSHi9RSbqwia72JMkx8dveJUHe5FbxDFD8eP6vbfx8mmitkncj95Ssg2Q2kKJFfUTUXUVxZ",
  "key21": "2HQQMUTSahV5AsMocp1BqBnvqQ84ZsSQKYkCk782TbB5QB5y6rt87BoGaJ5wQieTfi3bxPTmRtzBjBzuVTvLDzJU",
  "key22": "5ZENHf9TifpS5nQPUrGSuR2dNYwVW2YERzkEXTZWDGpSbvNCwA2it9cz1JPc5vUVu5NWq6fZaY9bHdSh4X1NbjcE",
  "key23": "5yKZ5FGLSqHfz1pZGsZiKSggWSqssspEtMxKgrbyb69KVswCgwPtHpTXq8kYLALTvKx6DmUU73YuzpFbsaRFaj5b",
  "key24": "euRhMavhjNj5Tm55M17skKe1qfojwGiAEmALC8xcYxagKu6MpESqmVwLoR4f75eDx31cMYkHRXQh9tvQzhKshiz"
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
