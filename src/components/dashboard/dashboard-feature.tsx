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
    "4fwJgpa2PGs6sWb8Bn9bDL56W5VqbdWCLZykYeTnpAptap6STfS7gE6vocCMfxTEtLhAXKiQAJaejazLAP61KoBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F76MT1ZtsBngmfbVupz5rNM1n7a9BqPEv5XXP9Le7jQeKp4rjqNLQ3ojm1Rids3US41JC1UZ35AUCpQtQ8MCfGh",
  "key1": "5poC3vXbFck5HqmDreFFEtJZ5zd7yvB2nsYUauiVAJmLPXCmyccdamnpDdzAvkyM7iMH6E1aNXnSAG9Zguag2A3",
  "key2": "24zTXMnbodtRYmiREVDF9uq992MCrEJto6SAGUoQFnCfYvqBz6acjqt5qu8L8jd55HMheUTdzmwmbwQpisgpJUcm",
  "key3": "5WPQ81SS55tiFaTaB5TawmmB5kN36MPuZDWmdy8DUXsDqtexe3z3UkDFfSd9fF5Hp9uDFWiYDMkwsdc4UgGff7Pd",
  "key4": "3iKMZ6HhaDLsW5Zzur82iA7uQWAMBLdzum8VaKtus1cZ9UZnkGEb3CcZqpHt2zLtRRzg3TSXmFRw7BN2EZ14shD3",
  "key5": "3n3fHzp62xNHaCRUBFMW9cLwVRAupwDev5Fbp158HbvDBx5sWShbTgwZiDUfdh3Rm79U1qw1bxJq4NUDU6X9fX8",
  "key6": "5c6Gpc9Wv7KjYkVi7T6CYzwddDredeq6CVUBmqgRHfX24ig6BSz1Jop8fdLVpSRn39dHkJx8GTikpHCFTMvDDfEt",
  "key7": "5ZSByhej8ZYD4mfejH534PrKMcNEJe7E4j1gvxWxyCMXyeLM5YHTHREuLVVh7R9CGTTye3g7c2tZ16oY9Lx7X4b7",
  "key8": "5fGJVtQukYwHfgf4uYsbnN9yNyHhsSWDEtFXMStWGTiGckSKvQ5rg5SgcNEyqKZR5GdVyQ5176NnUpesNADwb2Mx",
  "key9": "4eadAbTNTP8tMfjop7ga7HSnUKny4toh9r8LAzz8HVAedmeVDoxZ75SPfoyNFqupRVN5qkfXT1m8uFxPP4KWb85b",
  "key10": "2pyyVKwLk4MKwJQESdtvDSMKyNTLoBCpapv3P5WAcP9EE7cZkiSLxREb3Jt4wcTbZHwaLnbLdznmNEvtzMqCr1h2",
  "key11": "2baBEz9dZhptxBhvkY8hTXGeAPuHDyYKevt48odh2oK6L8jxLHZ1EHUDahEFceWiHJwexHBuEpcbFFe7dvTk5Eon",
  "key12": "vTrEHE9YFier6iN2Kp6GtfkfaFN4Adwg29S97b7mokFMy1cfqB5tqEik6yNDSPmh3UnqccpberAEw2Kkz5KaHBc",
  "key13": "5weShNZNFqG2hPToX53geqS2LxZk3QgL7ou5AZqScySYxzcvaDnDQrBj2H7NZcvVXcDAt7NMk5uzxWwZSUM1aSMY",
  "key14": "5kLDvUdBZT4SkjoKS29KN691g4ZET7cdPD4iq5waHqXTNZaqafgo1Lji1pTpmch5sonNuaLk3QNm2sAF4fwW16Vi",
  "key15": "27q4cyjycEynyhkdf2pJjHczJ1Z6AEQPBuhu3yGxAhpUhP5fwSpuBynSq6RraBhR39sPkGibqTrr37BqC4DrX8yM",
  "key16": "56ytSnCAtMzWAifmCMGEVRorif8xdnKcNoLtAzDVgygCTjQuHUAf6PVUsRYsdjaw5En6HcrdpiCXXP2HKZPD3WrN",
  "key17": "2rs5aU7viYM7oagLjXoWT3oP2kBVJhCqFxGMLmEHddbDjpYJimV62ryAQ1BdQS6kW1AdHJwSK2FGMeFi9S5z8SaL",
  "key18": "4W7jPu15Pmbzut1S7CggweNnGDAwsLkCNsmwMVqRsg39B2RSy8m7E497Cnc43yhgRdWG8h8chy9ff2dLiKqFwF7S",
  "key19": "4XXNfyGQL3pAck3XaaT5hSJTafQL3KeKyFyt8MUd2Ga87zjfbaTmTp31HoUYUzineBPZjhw2TUVLzEjkFiYz4upp",
  "key20": "2iStKD8f9kpoAQ4qcsZBmn5G4paCfHu12W7JoGBhWFCayTNpTVQtGiNDYTbpSVKDEWyKuCUih12YGqN9VjfVGNa3",
  "key21": "8udYRDcHfumQeMCFq6mvApagLZi4T4opKyPP4KXeYTgCfuXJgJTwTsJWMEUEAG39YUaYdGgc7TBj3QorREan6Mi",
  "key22": "3QLAjWFsJ2qoRmRb2pr8UgdujswP6WytkpZPprKvffNV4wuRS9TJJbx6zoYdTtCTgxdr5GB58AC7erAJmekw53QN",
  "key23": "j4GneSy7TDBuwPyid5Ym1xqVPFmZvxj4JsQTnimcXcVLGmUMeU3PjqCdQ6zZ7Mw75PNdibW2mQUn6zxvQs5n6ov",
  "key24": "4up6bJZi27MG61RWutPtjceEgtpXnhW5k7kDNhax4GTcwdgtLcrYBCCsHoSa9hcYqAJQgqSaskNW8PB6Qf23RN8r",
  "key25": "2SaDYzsdJf5J67WfftRioM8SaJVqkhwFia4FMPFPcZmdsEPHTbH96VeN8hZHnGPoTpXVtw7HmgEAV5KbBnYRsEPi",
  "key26": "3zVi8VTCgDvXbqiGY4ngxAiXpi7q4jVP9jV9aHrz8NDCCg72Vw6rw7yqN8i2ehMtVnti3Yih67TanjSaNdhUtXzw",
  "key27": "4hzy8jBtfBoUvEpipLpeWcukHJkwm4XEzzZKP3TPV1vwPC9snd5wAipTcMM1ou1uUgAMjSQREJ3vMknMoJKTi5qZ",
  "key28": "5yDrqeET4dhkHY9rauCFZiSPcNjvYvhfANMiw9uqPjTFJWdLDJ4xLkNuQQgp6odeA7tWgXirRQfJcdHiZjLAvNgF",
  "key29": "3CuE1NVhSmBh3G3EGtudnXDHsw1taZxMQbL7P3rc7M3nGWTKjVNtNfrZ3kA9hfkvxtH9Bj5ikcD7gguZKxmeRVNt",
  "key30": "2RvDDqD9bkgG9dLZVMJrqTR4DQe8xwf2viTkkP5VJDfpKV3Dy3xZW2rmMrgEyzVXhW7x94Q2QFLiX8cW6BGWotN1",
  "key31": "4dp9ZraMjLqteFjySQdq2rD119VjjMoDbtfT7BpF1t7bbJ6Fqu4qZuwqVnXVYo17KbsRjL2iacrLKkpQZV33j42G",
  "key32": "2fmJEjTSgpgcRW1dV65DjLG5QXow6aRBfmcnp6Q6e9L5nGPqoiEDPonG4N3fZdMzFfXCDpRHmgRXkSny2HjNwWdb",
  "key33": "4w4Tje5Xn3UbiDQRrHdBF3e6sdCke98othoukYVPzYoWcnkYYEBPY1SdCje3abAzyXmHqjvZBcDs9QkdUBtdYqWE"
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
