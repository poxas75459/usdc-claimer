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
    "4PKkU9b4LvEoSvPbY5QAbxB7EFozA8vLzseQSFCAoKDDxATaj57ESkjXqewyNrzrLCrByAu1PbVTgjbBW7tPQkDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47dRHLekePURjbVaFskwRFsX4qfQcveHJ8EgVxjGLk62UCTZTVSkDXa67t1ztFLzKRbRDDQWdqVHasx8XqRrmXx5",
  "key1": "3QdE7gd9hbC19moS2xxhTtcqSaR9JzSa2rjEdhnpEDbMSwg4vbX4WqPhgYCicCqceWgUXob9GaRjNY4qWaJHbFXU",
  "key2": "2VQScp8gvuoen4cmBDDsdk7iZJxzioaVgDMvZeM1gAwB1XSvdSZkrLVDkm9Df3A3tKRdqAtyttErHCif92g7gAWw",
  "key3": "JDioMkVw6vyq7ABQFhMpwFzRvNsafDL5BzBfN5THBY6i3QyeNXVSQrZ19iPo3wJzW6CffLTNy1fu6J7CispK19b",
  "key4": "2h7NJKbevCmeFjXBXa7NBPxW2z6wQo2uQUYyG8K4FuuSgZcLfxxv7RBRCKqJurP2z5VeyvKVZBNfkVgG9bfFM8nr",
  "key5": "3EdG9P2wuFPVR5kJiFK8VNY8kVMrTXK6B1zks28qrMmK9HYwLrPHVLn7r7WR3GH2nNt4nnoxTSc1EUmjd42jYBav",
  "key6": "J94iZkhaBMjtjrKMMXvK5oUX2jkAh884dwiQUfbEqP2y7PUGiNm3HHPJWroXLRR4uFVu3UPeoqzmF8Ppw41NZCz",
  "key7": "21vi8L8vfPvmineBco5z4txmAKFy3F5t8onZrWGfEsPxiv17GyVabmgmg7kV7e2fVJeUcT9u1BGcsomZEiVKN4VB",
  "key8": "4VX9MkhjobAjmVtVFgkW9JeCwhp1Pc3jH3wTG2y4kWhLmxYFTCbJzH7qWsVoVQcqy8AofmLeqpwHdL3uBGDyLACC",
  "key9": "4TigazsxhA1fdkD9AbKYfYGDnXvken49R9jLoMfi9QTe7egQ7gynp9hWMMwQricXpbCcdafMkzJJGXdF5JYd1XQa",
  "key10": "632pmmfnNzPP1uw3RbgpxCM9SDEyzimSuRn3TbbA4ettRtD7JLgTZRJp2KM7sVC5N7dw61H896iTKJx2musdrj1e",
  "key11": "3KrntYpkYf566ucr2j3xMrANXeuX9ND7ne24xNxfKpKAhAmwM3rqwiLjQw9nTucsHizMvPfsMN1JwdQcT8mVA56A",
  "key12": "2YttPMPUAQ6xTSGgn2gHq5vaGYBFRuzeKJHiHSZkq9cinyWEq7B7skYiKaSNnkj5E4LDx8AMTFsXDE7ucigemQ1u",
  "key13": "4WvNKjv51tjASWKkemWQj5FJTLa7da53fx2is3LtBhyAci3banWQtt7qrHaQ7CL49irLLXjabVnb7DvbM5HRaa9N",
  "key14": "2YTc8Fx9X2FC8wpE9FsJUvScBg6qKwSD1xLZ6UbFCBWrDEtgL9Svc2tz2ocbnUhkTxNo7QzmcHiokSAWU4ruZn2f",
  "key15": "3MqkEshaytQYahsdekFpQSbpVcHa6SZLyuZcGfm5GiSaxrEpjgBk4CkzGCwnC9EELWxvAzpAexcfy19m1XVze95X",
  "key16": "3rFEz86gcB8tVQPTP4J1Pugwc3yBPQk1feqkvSzqaEWy2AVJPrMVrygYRRkiX85D3JiX4yY4g9KGU7ibEJj1m7Ub",
  "key17": "5Yb8uzeDxrBGaqWp1NZHGYyT6meXLJdEYVtM6SkCabEJWRcdw5vPCA6VuYDPe94yAs8FzfREXBV5vFcnL224jSD9",
  "key18": "T9tzDuXma2WLFkJ2MbyYW5Pt1Veu74YQ4nPK4oGgf9LdxCFn5c27q8LtW2ZP8ajSqqT4beqQYjt2nuR81Gii31a",
  "key19": "5wkvQEn2AKswhvc5EbKrhraz6nBtxFXFbKsBdTeA3GbBGQruqbN4axexPr5XRVSdmTjvs6JYdbQvAYjvQW7F79gy",
  "key20": "5ciDYHJ1f8mWCzb5xPSa4poop5zxLTTfH8j3j3B4HYvHgV2QvySAYfBQBrxdv6NB6hvQD1EXr5snQuG7zGDPyLvn",
  "key21": "3Yp3mmyXAXcFJ5XebWwJuYNeLXtmsrsLk2o3BN94Uo5MizQVs4q4S3RHsx8xPHq2z5VSkiChZaEW7YM4BhGFjrMe",
  "key22": "3vh8tPjLWptVZsUiQv4akxYwoyVaeHAuXzbvBhFLf3ikshcyoxTPfccz7L5wr8jkrZLNnM1st4UqtS4a4YWmyuMS",
  "key23": "fkqGPE5Q1jcYsfSw1xmJryrsdk3a6GLJVFifVYMyWNhoGPQtRrnujHnrdio2PMWE5m4ormHvdKyD7giSy6tx4rC",
  "key24": "2K9sj8MbgTt2QEYGwx31UMjSvPj9Xw8cJA2ugMvybA46mzWFZudcDCC1fu6K1dZhZHAWNFi6rvzYQewJgiJfdETa",
  "key25": "361B3dMT349dRZXsHt8REWgaDbXgRbRvjoZdmnh1vQWw6Xdvog9P6EqwpMT5E2uP7xiXZZUVnX57Xx62aS9FasWG",
  "key26": "2dMH2nXwgFoLXn6RTRfJd3tsnmZvUPnEhKnotky1f3gJVRK13XTHTxy5Sv2yf98df7BBXBQZfSex4hinfm2gcgTB",
  "key27": "PySbGbkVBDMrMUQ7mA3sq9nTnpyzrPbN4gUwKucdzdLjrovKoVQBESr7bckvPXk8PgxDgevpjUvfvnGe3c65eTh",
  "key28": "5dx8vkvaP3aLpmavo1PuYRra3kaApWTz1hTLfBDnpm2GWuZvmDWyYThmYgrQiJfF9e51Ezdhdy24SFwLRefJpLPZ",
  "key29": "37LW9iEjXQrGDsYXiFJNTtwBMMZUvaSYtJ2TrqMUfnVzCCmdP9FJ12piQvd2mCYiYrJJeVyxJmex8rHre2Wa3aX9",
  "key30": "5nr272FDEmcSEZyKbUjAAAmtCGodobPzihjLQJnDjKUF5TxRffvwdU89uEbsUHYsg4634ProHEamZKoWSmiD3Ksd",
  "key31": "5iJ3aixkHVJwhND8SaFkSwMcFsGfbj5Q88ZmuPX7KfvGoYXtyC9pJetg3RXibTgJgyVazApvrc9dQ21UYWYYBmAB",
  "key32": "Xq3Vbs7GmKEHLsXWUrGH1iFdTfgsfiW4uzJxfimvSEw6w7MDH3A5ERXwLkRuEoNpRNHupFiwS4AGn1D2xQc9iLr"
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
