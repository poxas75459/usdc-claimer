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
    "4f1aebSNEoARvUSdPg7B9Dxwmc7P6A9GA6AQAB2STdKiqFhXBneCciNspyHCkUZSJakMM8eqmE75XkuAecyagcvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42hBcvvF5benZDH5X2kygo7ixc2omfPQUUrp1xYTNSG94dRA8f1uJt6Q3VtZv5JaWXvxzeEHiVy4Vfjsddv4qzma",
  "key1": "4eHACQurTXWtiuap5jALc3nZsSUqaURH4XYT1fVpHZ8WDif28AtZQsUYsyGHymsEdZgPUjmrUGwv8GF6x6kryZVz",
  "key2": "2scdYRKAixcXeyWXXVB8jKVGUGQSzXwsdiLugG17gyEWVyFE8pLs1j2QLHVUwYYqts2mvXNTbHE2newXAZx52BDK",
  "key3": "2UrzkwVWjvQCToCU9nwFCRQoTBAqFmkKdTPkaU5AYkXkP1wSKB2GtViHeHzsEDyNqXCUpnGzhMZWHHf9XTZaswVm",
  "key4": "4C9s16PQnbZghUDSNNbsBR9cSHdsWxa6KNcn7vwuXpMNd8GoFhWQPaMjnmpGGTxUSiVsYUDesJZcjqxw2xgJEJLC",
  "key5": "fUVKNd6YFzsv6hL5rHMhpEykjAEoA3YABCKr4GrRQQihEoTFTP8PMGvvJ8KvPgpTWHpKATxpm3AQcwNeVUTepa5",
  "key6": "4oZYdmnq6GC4EwthVXai3XSomnRmR7BEZcFwBDFyEBdcRVkxuVZK1fYkcGxRKDPunwBNnvxrQKncipCnWttZjYFd",
  "key7": "2xrnsSnhGL2p9WdGzXQYb7tXYUzzubNTHvqXCcKz9jkVEHUpr9eAZGVAcnqQ3jb6sahJCFsywW6Hgni94ih86Twq",
  "key8": "41CZr3Numpwr6inThu9ysbKP56JXWXBrkLjfgL4is4FbgChntXnJDP3tEtKXtYjhzyQK5schScTuMXRueKLP7S4q",
  "key9": "35KWynx5QppZyf9ixsZQTZtZ2eohLbU3N3camg1apiTgTNpf2YwQASbpb96Gk21jQTarLzx5x1MqidBxEjXDrbFe",
  "key10": "2heJEcZ96pDradJiEzShBLeykDgkJxpuXJaTEHbAsGXKWRizy6WeVioh39CFbcQ8nwZGaDtSra73ahnkNv5cxYHu",
  "key11": "5479XFHashXmG6nTodSpdyBq8cqf33GEzkjNDSw4X78Bh5znMxTqnZtHiEEYBgtZmLMoi5x6pb4omPgd3N1fWRmb",
  "key12": "66guWbnxTtbhQghcdrsjAXqZTncdBgbmzY7qYtJvBwGZ2GcaPWqdvKik4fZwyt7Lev8bif3AQ4inxGTdK917oHbE",
  "key13": "2QKx9ue1vBBwYRWzjBiLjbdbDruFFCZjzpo46R3jUKDUbkVmtBViptMu5RPn6sPqsvrY9qNJS5pQjGDwj4S3L83Z",
  "key14": "2S5UakENTCPvf2Adqv8cbjXtmaLfABNVWLxSL81hMdTxinh1eLz492dCcSZKmLSwY9ayHWy5nurnpfEgh9u8QiWm",
  "key15": "4mdDfdxwDUCc98jXvuEJ9kmhZPTEwyvmF19bMBKqDyE6SaiEprhP5s6zW49ZVHJKegf7jot6RM8p4Pfvn1cTHwLP",
  "key16": "5o2PtrkiG4wpVfmF9tBJsJLvxyPzpQ5yhP6ARscaegQqTT5ByikzjJVcq7XBcyAVncgtbfzkLkZEvWprkQHrNPxE",
  "key17": "33HK5US2wFjcHsM87iLzEyujyFTrc4k3vLrMRcHVSJdo8N3ya5pxpd8Y9gPdSh6wVbv3KGGJg1iL7yJCHtp7nfBP",
  "key18": "5MTGoJxt34wwni8kdvnb6tjd8DLFxbxRD6YChDSaB41R13p66Kp4PnccB6xbTCFYdtqLMfCkxRYnduManHCa61ZK",
  "key19": "3ZbUru51ZXqEubtzgEtesS71YLDsN4TH6Mkk4SPHFEGrvjMmCe56zWfY9FSZwXSAg47vytYputPyq749HFp9noCW",
  "key20": "49kVVbt3ukH8NYcV57QtEwi4phkWcTAdoBMFC9bk6nXx8TsKtTkadWAsGSnNj3iYaT6ZF3eoYC2C8BxaFEp7S82e",
  "key21": "3sVWiFWtX2XXKCxViEHEukJ2gvXBJEsjdLtuqG1ZYcY88DjSLBJF8aMAyf5qUVhEcWxNHsPzRRomcCa8sn3FMcKm",
  "key22": "44H8LPCKZgRfoxv48A7Vs86YcRGf7eoibCG3wgCMoGQFkV3HMtnSoM8KTJfP4MUxVwwxV8XYzdm783f964ZiHJzU",
  "key23": "62g4r1qq3j4z2nizPj4i52eLNK6tcdFBt1PPYJhHTMh2JzoY5mPfxBuC1bwGsbfAbu7PyBKRH6NWNR1dhfxxeNNT",
  "key24": "24e8U8MzgJfATDNgonN6qUpkQdE3ALBwyogctAWLaco1y7mgqwuDy3VKnzLMuVgNuKsmFjTd91JQf5uptd3X72UM",
  "key25": "5gYussv8tdHWKMoC9KWjLWtwt3vhH5JWGTt8121brzwTLzvqYaYWbjpDtEdcvpgDM6LrPunJqrsp4EEjLyBWULp1",
  "key26": "47vweCkhYrf8geauqEa53q3huAgQk1JLFnMbRFGbvfqRCA4yvj92qWv3pnbJArbWXpn4zrYsZoSovhvJNqY8Jqj4",
  "key27": "5wqXF9NDwq5An792EJx4eyvhfdjbS6EKEKvrom7kYkaRtGv5tTnngVrdLcePF3QA2sW6axT6o3Ja8U6LzoiLArBr",
  "key28": "qkZ9gYXFt8mzDERAWa8xbBuDpCWcArHKbgxRHkcCzW3dThwksgkg6fq158Dq9H2ATNjS6KdD4weqKSqDFzhYhPz"
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
