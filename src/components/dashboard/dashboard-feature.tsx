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
    "5RMTpnEaZW7PB9yadVmuD6SpTodr2KSXr2v4PkJnAbCn4JRBcf5mqiLmZYQtk5Duio3pWFJTSpHPhrGPZ3kCgfU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mcNxzd3ALEUKMK48ZVhbXziAPKUPnrqGpChuuG2RZKCkSTMxZRVD1K7UrXEEujNS6gKufZjb1RtDonJc6NS5rd2",
  "key1": "37onAVRyyuTmRJJcKjsExpHBXMLtSX2X7ZksrSqo9d2Nz94ai8F7cCgFGT6ph5RqmqUUSV83p955ThmoJsTeiZC8",
  "key2": "5BJEf1tFkqR7a8eLXAMASAUfZPEEqTo7ju3a2ZjtKExzAsty68mwVcLpSamhQpX1qVrhwR4vgH2eKZ2DdiBJf18y",
  "key3": "3pEJpSSNreqWDS5RVh7bfvn5S7YrV3Y1gVzr2r6kB1jLpRXs5aTGHNEnqiUFa7kNdHZfUmLQ5yNCApmbQ9oNWvGo",
  "key4": "FFfa5t3FDFQpmUBC4U6YNGjKECWjcpsEhkVHdYZqEAhk186RT194YL1zVzm5ZkubyVEL9cW5Y84phaYisdeNueB",
  "key5": "33EM13n7ZCWUrV6VbG9svTGxTjhdFXgyAMBn1J3GYJUQe8viKgQg6c564Ha6CxwrRXus1Usj81FNdVUn1aaFwJvs",
  "key6": "4UBm61JqvXZLDMhKqxtppFsAqHdaabGYLZDEqDThYLnZfSjtZ14VMgPjJf2XsGBA8rzfQ6miPRUZ4Zk1yWwQfGZG",
  "key7": "4N4pbCpGrhGDS9m4FqSZPybrrL6H4U2qhC97cKv8eLEJDjAoZbhwiMbxpzXebfw8Kv92rzNEVFBQ2UD8zMdFu4mP",
  "key8": "GStks8ByXGxvTvRPoDsdXCbEHSVAcJHutfJ4tbLqmYQskuFWYbYZV7u8RECGNJqoQcTc1vfwPftJt3VwYxtgXbV",
  "key9": "XLCuPPhqc5YtyNaVx3kQP5jAdyx28kDi3REcm793KhCEfZ7eZitqm4Prim7WzaEkGbpRmXrMUt6EeDTUu8C1khb",
  "key10": "3gqPdt3viaMz9xwcpBq92LDGGELWxs13zSbAgBTjabdjHAJ3NYbpoWqGMMbCQwL2dE3R9eFYH6c6cDpAUTYPs8oJ",
  "key11": "5uVvuaShy1bndf4EjHPMgRaKGqZzzCd2e1f6Aty6Xb9aVdg7u8dGGjvJxUXK8Y28HFd7p8f45btCP59RD3CUYqbc",
  "key12": "3QgT3QL64yBMjxDVTu71G87G2asuZECujX13isNwb9YZJ9fwyUw3qX79Q9qzwwuNNPh2v12s1oLS9B7LXNEWHqFQ",
  "key13": "4yxJEe3hki2edSE9jth5XjRiL23NbJJ96VCmZ234URXEnCGrF4SmSQZW6NS4G3bPmcFW81ycZaFgKdvU5sYqTXfu",
  "key14": "3a5E2YBma6UdjJCMQnKnKC1dwehcurWTTJo6hTCD18rv15XNov4ndiDxuT8wYowcivqKG8mhGvaUyn43FMuBCqsN",
  "key15": "xGPKYEXeHhs9ByHuZtFRhq9LCsTqntPCyKcowCtGVDHePh1J8mNKiqsDMm1ztdBCM9nJyJiJdE95eRJsCHSVjAq",
  "key16": "4gfjiG8KqMLqX1sw1ZcigSjfsd89hmGRcLNsyuPJyjzhB3Z11JudvDZKixZYdVcfCPh6zh7sz1DtskTMEbR9i9bn",
  "key17": "29dBxBuZij4FxiWWzpURF1HcEtkd89TCYWtRs18L8ifyDzyq34TiaStGiKQR1XuMukS6Vftd6ggDhERdk9z3PTjE",
  "key18": "2n5kNsGgX5zCLiGx8vKgXsXVtwBqXgpDzgtSaaEN1gBymDq17DkRXSC1fkhSX12Md3K5Z3UeWX3wFzb38GVvuL9P",
  "key19": "2CaS6oq2vBeiytGBY2xCfD7edsu5NvWREZkDF7xGCivNhTvAvv617F6cGh5iSSGecCqMpsSPsbLDNL2C6MT2Tdnr",
  "key20": "2fYAPeaHqBiFZT9ccnPWrHJfRA7wDtChwZv54g2azDPp9cWDvuCrBqoGyKYeQBWq7HwbN42926VUxjky4ZcRjPmk",
  "key21": "3JSGusx91QsEkXvt7VgxpyWNFVPtQJVxrSYNG6eyBXp7PXvm7BDuHVRxnoq7UviBY8HKEJyn6hPWVMrQT8G3ho58",
  "key22": "jRhaiKgTLGbtvpJUYQPUtLxbctgb9UDeH63hbfqZvnttn9XNP2oM73R7cetobQxELQyZdxSxr8yu36CkghDiEKn",
  "key23": "DsZw2zKWUx584suHuSbYdE7hBTGwNVPvqrxw2SrQwHAdXzytHD8ByPiVZpbq3pjMWBbCWfnyovZdcra9t4EcTxF",
  "key24": "nubrJHYxdSsS6fHEYwmcDpSbDst7iq62U5dzce6PTFu3moLPij68cQvd7hx5vxmgCctA3V3FycoKx9D6MkAVdQX",
  "key25": "2ckTCiV6dK9KMaToGRxzeoT4ygPxBcsyy9JrQFd7QH6TkApKNEjiJXceptmZ1Hm5nPxWqCe5zcWD3NeFhfa8SZQn",
  "key26": "46iaquHWEYjjsafoTUBKoNJgahZmVa8LfEuLgyJJiChGAEFTXJ251xasVZW3z7ErXT5b5ZGrGv3My5yCrptpFGsg",
  "key27": "3vCHpifX3iJowKhmsdV7KXUDvCBahG8y9hV48WqszD7cYUk8YWUysoBgrW8VDgSBQxumauyyEGNnrJ7yNBMuNCQS",
  "key28": "p4zSv6CXhh51hKCkJqqVAnYA3b4xk7ca7NSndHJgHgC3oBko1a67TsboLefQSxHG86aXVAD7G4ZrtAngqFqWSiD"
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
