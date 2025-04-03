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
    "4jQST9U2V34BdQwMYZGHAL1aJJxdj1g93aDHkW5PpMknCK8iCUVWTooEA8mK7u5ooZi1sHKzzxNsoWGnxMuNc6Xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oSgXQ1EQUrSzuu4iEsebQXXUzbRdxaV5mcvpCLkv1zBFXscNHms6zYcLzViFzNTihJnqzZ3XHVpa3vGSfPZLcXf",
  "key1": "2Su5oysmhT3pLp7q1QFWWwyNiSpyZFjSNrB6iEadqzRH13os1Wm2GuGoh9roqHdicnbHurxZn63Xc9pjoAmYbvDh",
  "key2": "62UrqEgeJTm27kFJD8rZjdzkfA7FktHnZMjG3DpjLApJBDHJktxQY3KABNoM92b4VhGt7gmXE5d6r2CXA8dynBXs",
  "key3": "Lu57TttX9ER1di8xMwsbPqjRibrYSpt4ZeCqsPm1NajGaLNTt9njV3h5h9yre37zdUbyaC4SE6X3bu6qm2FR5CQ",
  "key4": "26JyKYs9rufUdRPcn945e3BtGfDCgcTjMCbduKvmqcNJrFNvrnysbygonmtypW2TzcSPoteDbTTAK1B1d4tMyiwf",
  "key5": "39UESk3GWA7uJbiqoJKj3EMmxjGGbv9kYxwj1yWmoVaUb18JUUqzdRbjU5jkh9thxuqPvreq2UonGjtVSNkAiZHC",
  "key6": "2Vx45Vs1oJNPUXxGLxbsPGHdKvUTWedGzofW3oBycBFrL86wU3rUdNRv1YWZQqxUSHQdi5zNZNa8HGnujZdxs4rs",
  "key7": "hjYFPTVJR9j9yB2McT3fyojDXNg6PcxXRbNaiVSo4wpXTnFnSnhcYdUzQbSp38fbgu1WknTt9s4Zc7Dy7RuU5DY",
  "key8": "iHLDeipj4fLeLXBa998UHoD7wnnK3txbs3TujdNyyi16sumMijn3VHKicwdUybE3NM4RvzPApy5Pm5aGCvAYTGQ",
  "key9": "36VfWAPC9dCo6DS5D4pm2arKnrVgyM6d3nL1yotACPwyFoYAqffc4dc5meF2CbJo7LxDWbQNJnuMf8mbyyqigH8z",
  "key10": "36Lei5E1PrNwkvFmJEbmDVC8MhjcrjTwKQJCCV3jCS9mvfReD99yqN2nPSQmyNP7ae8y7k8FkMyfZ8LkFCZJv7iG",
  "key11": "3JLK4uFKmQHGpYoSYhW1tKXxiVPoodaqep8qvJ3GRXghzkG2dTcRkVEcY2ndC41wwN3rXo3857M7FJ7SQKM25PJX",
  "key12": "2itjCnfZVysikzEGFdCDBh4WmpsTkJqRsdzczxkVN4i16uc7haQY5uiqSt67Q18MkxPGdUr5nspnEZHnuGd4szbW",
  "key13": "2mkTkgc2NWicru1wDio9uecTc2QvbHUGSavp6s2W9M3gMdvKhiW2KQ2NayMCLcJbC8XfS6aWH2hU5Qr278s1Z89z",
  "key14": "VALGURvuKdXzpkv1ntXdpCtFpJVtoUigPT2ZzmtcomEpDzWVqBEdSvFNq7hEAVLJ4gmCjXKxArFKWKQmF9WyZuy",
  "key15": "915vjkBmWNQ9YJz7coQBYLD3eeyaNwJT7uMeBs9gGg64XLq4iKPREjFN8hqXqHa1BAq6PtDgw5ozaco3EJ3EAwN",
  "key16": "34m5K518EoSXqutiNeWkTZFLP9cY4y8WuCFkz2cLN6CoZmikfw4MNrGdADu42M281homhRaeskjKSKnDrREGV2gX",
  "key17": "4Nz7XrbiZH33dsYH12Cp9wbBctapmimTApF8hkkU7CxMoSJdnQQjB8zPJWGDYg1Gf7qmhU8tySGbhGTWEgx9gwBE",
  "key18": "3uVKKSmmPzyvvuZXf3Kc4p74pyo9MdAaaJB5CJYckevG3hTTqSNNqGrev19ERS8oCbFTLrsddVr9hnTDnYjvyQnj",
  "key19": "44LxUQpNiv6MNdWURvZ7bmwdpRvHo3qrGyXBnRdh2dvGPc99Vnfw31sEGWb52jp96wwXve9RL9RYxkYDAHHC8uqH",
  "key20": "2hmwsuKFq44AKGhJ6DJAbi9EQEbF9hc5rzLH2tDYGZUQBceco654BM6DcUodD48J3zKzUQaTbkP747yL9A3fZd3M",
  "key21": "2wyaK99ickqeFgDf1jxppTpa8GwvNqJapuzHpgdngcef9YahhMT4MjnfPyv3Y552damLEsVghQX5isgusBMpZsdx",
  "key22": "fFDZrsiRxJynzambM3cxyRaXv8W198qSg4aKNugZfQJcVVfQAUBwA7w6seHvxcML5CZBwC8TeYnp6gtdP4DaDnJ",
  "key23": "2rbFi3XTu9uTz3he25FT5BFctQUWcVJ1Po1SKTMKKryVHDTLZRHw5ciZUXsMuVvjS8vjuYNX6UdHBCgXXv63AGps",
  "key24": "z1NjiUANx1usSrFFHcDh6iKUqQQDW7ydNBFzJ3Z2MfT7mxaGohabRkPBPkDMLm3DCLvZgZgPdk6ej5MDdAx7XSh",
  "key25": "8SQJV7MpY8arguhah8pFTD5zs8G5x1b1NaDRu6yDt3ayH9SSUNsvfYPwBYnJCTaYbzgmY15mkKnZqRcpuQ8zVrj",
  "key26": "3cf5aaFX4K5BbvGqTpqXHGHujGGruoR85rRP159nbGL2CTcgw6E8D8NTZdNZ11hrwn5Cuaf7GocLDrGXqhDZvxas",
  "key27": "45nRiZMtPMge7Jk6QBzJpx6D5PDcnnpkM17R8wX5xmGUKyFwyw3bn6f9vkcLfuMiHcwpVh1g7dCwyaCJhDq6tXyA",
  "key28": "o7Ly92TAqdpXFnBxjx9mzAM5n8copHyVGMBYU9ma5hsq1AAPkTz8memaaigtphu9TE8EWHWkSR65A9E8okiRqQc",
  "key29": "3F1RF83XL1sWPwZVbardYjf6yXdumQYXGT2HnrLXSdwh3nRNxuzWoHFDrNLkCtkPtqRvv7u3RZ7HdsTioNUBsei6"
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
