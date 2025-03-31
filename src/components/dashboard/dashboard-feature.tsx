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
    "3UHXq7UpWnD3du49hp7HVZGS8CGbbBEGC1zdAC4Ft8BhJGR76fj8h2V5NtsXgZziFthyoGiuDme8ajVWp1u1guTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mMNQRrLG3B5fxDKyHNW9bV3EJ2MtYMaCtnA6orvZwMYwkoEGiLjYUvt1Th8RRfu7FcnAfeawnTUamM7imD2yKnT",
  "key1": "3mGropURNq3VAHczjbCUggFUamaDvVRXemjGsaMSGofZw7Wd9vWzFdDQiNvrizQingwF7JCPbNmxtW51xXnq5UAC",
  "key2": "36pBKgEjthrBHFw5LyvR6LEqpgtjE7orhk3uHW8JCczhokmnicNzCcMnYEddYzCSg8cscPELJc4xs48No5W8hf7B",
  "key3": "3q3nX6Qusd88MVcKd3BW4jW6BkGJuBiHF4Cv5Npy11BeJvs1qTH7ykxozUUK4DYqqvLu1MCN7cTK5swnDzWVogCy",
  "key4": "PVLH3cj2QnfPJYivat4LP4D5bqCY9Qh3WhfHCjxAa5Mb1RKUMfDxCChbKojN7Th6YGYEe9osrWAbAZPVmq8356Q",
  "key5": "MSLYgnpcAMRLmMjcKcrugtQ4J4syydSu5WzW6hKVrZwxmoZh3ieawMoUMdnptbBAPxWfHm4ZZTUZSWCTHkEgUtQ",
  "key6": "WZ1YHAiG2VYGBeRJhwnYpquyaj2UFFbVbqXYse3P4NwqgqNBijoEr98FmUSXUJtJxi3NmgNHYtdL8zCy7pUCwSU",
  "key7": "5F76YiEz3M3kaHMhBjiQ47FeLTpmNQ1TVbnYc2e2Sv2mca9TsxuambF45SVEfbSMm1vgTr64dJuX1PvYS1RmihrG",
  "key8": "4DNy4dozFc749WRNXvmmDcCLWfvaLTRy1DXUgD8tsPM6jBSetj1arKbZyRuzJPLenoUBi6TLTq9npvfAp2oSxDNW",
  "key9": "52pGrDpcchbnuDteRomnATXYp4J9bgcJ6tqiZ3gn1aVxDp1rxfUE2DZrga8NFewNyz6Gkr8VyYgedeP7kyuV3n1F",
  "key10": "38ADTvjRwdfS3fznxWxsY8rD5DUwLfLgNz7kxTQWhUn3ggJDadWXYtUuFN5u8bHDVdNbT6mR2ndo77inYAfJQqXT",
  "key11": "4z3rrUp3ieSrFAHoQ57TcnbqHCksMjxVmepkR6UYyCibffw442DaX7FXdFzKX4HY3ThEghFB4zxSXGmhKcsW2wN2",
  "key12": "ppz86zc9kvwsR9dZY3KEm7bphABcwZNXPXs3dSFLaUxCUGycd77FH3Hp1QSZhbMzHpwnCVRVWXq5kiYCzgDPtLh",
  "key13": "3YvqfG2LY1DSRb1U8F2aAknhP1rp6XoE2KdXUVprYHzqhEQGXaX4tHE7d5gqGBm4Ta8ecNNDTavHLa4hR43iCNUv",
  "key14": "5n3dXtYBZckyA3kS4DyBqVsEiynSGJQXtdbMtzYw2DU23GaqPK21fnd6jW62B1u65uCnuWhheNCnNmW1TvrAwPgf",
  "key15": "5b52415ckQaxTR9BrHkPo8YrBjK2Mfyv6yPg8bzcdCgyy4xCWmV8snjGwcps9Kt877Jom2pR8yT6US4eJTwRTfSv",
  "key16": "2zCteh7QJD4FJYP8V4g1JdXN7gFrXm3UwdAwkq2qQ86UCwvABw2qSc7hgn54Nn8QKUWv1hL9C5RjKhUHJarJhkiu",
  "key17": "4iDkoqsVspXGNTWNECvVfybwmc9HbCbs2gBU369z6MfG4dGonhD4DigNaF1LLTqhYjj1XorT1YE7ptmU5Wur7g6",
  "key18": "6T99KpHP479Dy8sLVtxCobA2bk5w1FgMTj2QMVqkEn6QZUkgzFyaWaeh5QpcvnUGhk5HsT9zruGjV7hznUezggt",
  "key19": "3vRzonxXxhUmRywFPC67xoNiqEkJd1Vt77sdy6LSrg6PmjCymMGGYagoT9ECvBu45AirAjrXWpJt9JEa1hZutaHf",
  "key20": "2hvtx8EiKmgzLARqLuvWo2n9EkrqrdWh8LmUrALd9V54e9883VfG4Yjtas6toeHMbfYpTnJpRnoqdwpJmNsUBBXB",
  "key21": "3f1s5u4f4MEKprPTDuXcyfLwQtgCdeHWwWkZ94Rxi4MXjK3cJSLNDXVd8YZfT1qS7Ao6aTjtCXYB6MEw8LppinEQ",
  "key22": "3yLZcXG3RBF58qnaKhkVoLs5gJdrNq9k9cYseE1KjKHgXajRXtJ6WBN9JckyLysyug85fHnKd9R2iAzmS45vb7qr",
  "key23": "2tSrYSyiyAtSLnFoRrsxLHRazNyKxPHFEVDAEQnBNwWXREFdAhyQKTHWVvhmbjyFKSc26E7ojVyqTWJTb3Aq6aLg",
  "key24": "RQ6Tx5ppcCzhAXB9GPuS7V4c3VTfsjGGPou4Di1pVgDMNRto9g7uaJBPBLF39a3eRYymLj8ZFbbLZ2YwiYUf5K8",
  "key25": "5gZYighPU84JtEVzphsnADpWENnTFMvmqgpyPcWAvqMM7DC2nDpyMLQgKWs82HLov5YPYNicRmpC6rAgZMgPXher",
  "key26": "QKFkDw1CRaqhr443aQxcp8sp8322XUZFWA7VoavgK59xyyayvRz9kiPPRM2J8D5fWcsb5uuUQ9iLbX49MoqpeN7",
  "key27": "2DeKgjaaJcP9nBgHVK1Y2w3cUYkcWBo4T47BLR6XWZUQGCQ5gW7CnHfWbdyXhqB2pnWqAnP6mXjGaZSCWp3jjuo1",
  "key28": "ZK84SdsdqgVJCMrjP42hhd5dNkEbWpWigTAPCqWTSrEKxXWqFHTB8L336aRBNcrgtmovDuDRkQwhEt6YDCwTf2K",
  "key29": "3wyrASsqXPfnxVhpRqh8NMM5dpmKXadQVUY66UjHGuZFJpxnoewvH8cnGRBSL1KaVqNqDfPmqS4qg8eteBnPWqSZ",
  "key30": "2JCas3dg5AUMW8sejGbBuR626S2xy752wad45ueQFJFJ7RbddZ1XCgar8nQvHNnapfYHJ46s8is7yLzgtEG8TxrP",
  "key31": "2zx8DgT7uYyvCZqbq4v9cUCaBLSAHNbHHm4BSTXKTRXgHzCqqUQpE7jxPoNdbWQ7uLUUrRQDXako2o8dQ4UnSb5W",
  "key32": "2hxck6V7AAMrPAX33JxGpx9aprjXWdCUyiKjQnMQMFRPhJ3xKpJENczdj8eZFM1CJzMfw7jxCs521WrgcbzvCM9x",
  "key33": "5Sq3dHxnxTTAkQ9KSVYdZjPXQPTAZ4qpKyTvehByKqYz1L58K8ksDo872jJVcBXFu4wsgWhqHt1W4fu6uJVFhyVf",
  "key34": "3iSqZQSbroiD3MHCjFVu7hBNnnrMSSuFDKYJwbP2VoUnsv7xLr5ZoW1rPpP2EXETyoYwTCqCFMnQmAtP72QGATDv",
  "key35": "57xDdRYQxijN8pCs2QPZcpzxgCWr4PtNUXL7YKAQYwAP7FeViD3DVgqhwSD3Zt3Jws54agSTzEv4CwR9y5J78UVF",
  "key36": "crSYQKYNQqE9vKeUd66kg8QDEu3gbRLVxXaZz5yJEGaw295JoiYWi5Cmvzq5ZW2VVmC3sHbkKNJNtfPaYyWBPEd"
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
