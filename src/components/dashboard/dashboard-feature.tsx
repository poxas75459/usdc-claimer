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
    "3SCM6AErh5CnNRvJwcVfgG8EJ8di1wWbUaV55eVabsEpr6JtT8Vis4KW7HxztNRkkAu2Mugg4Bs8Q5yWJCQ7kfgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vE7kfuZXkLpP9Zf2aHtRVeS2obXdtK5YreG3iQfZ6mZRobDMAbYskZEaFMwiYt5hZUtjhTc9gcTSgGqEt4tU1cG",
  "key1": "2es1vxC8N1a6pV8hUdJJ4yi31cDxobuZyFapcmiSPb3g4wSSoGJPztdyRiWRv5pqAbHUS9Pm3LLgWY7QxEpuVxYm",
  "key2": "4u7BtYQnTZBY9aBGTeg1M6yB14rjSFSpzbbDb7r8AvBro5izbsyb4CA3PPvJTBL9H4pv8LwdE7n5FqZ87no7on6a",
  "key3": "24wSm7Z9VFX6NPGgbHVvYR4tr4yYdQiJ72QAv4rJacg176x592f7v3NivEmeGusB5x7RvJeMgP453M7GYAKNyWAg",
  "key4": "3TGZTG62yM134wPrd4cJwLu32JiQKb148AjWBR1kze3Wf8Djktoo1MStYZMSW8HyjqC3fwgpqvz3qiTSosCoL8q7",
  "key5": "xeXxP6VmGBNTWK4pLi2AquS9bDFYzkiwrczqbQbm3GsyrwntgKYFz7vZNrxsanmYWJyKuSP3bCWLrgFKCcY5yo2",
  "key6": "4g2SKKSV8ALypn4W5NLum9kcPVVQS5Lh5w3TLi1RgTmnR17mt9nBGQv8dSKsbic2R5bBjfbS7hfDDWrcUvGLv5xx",
  "key7": "5v7NPrmiskshJJA9ULjnbktTCQ47giEG3RxcohaB3FkiCjpMTYWMAZFw7AkjJimA24uJWnGVVjLcCQ3T29MpwKWy",
  "key8": "FoCPL5X8rScgdyABW6rTEujpJ1HqtrB3SD1jAFiwv9MK1BpphzZEaYZt8pETxbdFYFSoHjdJLBjMSXA9GkBmtZy",
  "key9": "5BMoMghgkhk8vc7RhLg9ocNxF1rHaKnRvUtJxo31NjhVkaLdwLJZB5yervziCp86HkVNRYYRdbcR6rVuTdQjuWjD",
  "key10": "38DXgBz6Ub6rFGA8fe1RAMNMu29uujJaA5L7inp5zKi8rGBp3kXRuc3q6X6GMnRXBY8DhaNCw8dBoPX7xHtFderL",
  "key11": "P3YZC3y7HsPDjYLmx5YFVBgK1k4V9rs44s8UBPbSRkq3EK4sECoFa8e3WmrAw6LfRmVtthdD5X4Ye2j7vf6MxYF",
  "key12": "4msu1FFBVthygv79C31VQoEe2QaiEdm1aeB5dUx4fiAwpNGyFuYWhFhCdw6nFbJTMqbHdVZFfCKPSFUSpotBfToF",
  "key13": "4oe87YRf63arWTpAkTr1RQTpFSwEQeF6QCNDv2uJiVT7ihNV1rZ9BXeoFUDwTdv3Bi5ZUe3yyLGeZWqu1Rx4ycce",
  "key14": "3r6PCWnp2xi8dQBVsCtz69AratBx4VgH7ufugAMmAEZxcJhbLTU7nMLgbafyKNgydfLu5WbxkzJojiWHZbwRyupf",
  "key15": "3ninyAewHDuoarSB3p5CeGZDM815KMDSxcPvWB2XrDoM1EYua63vDiP2BeXfrfvmaaKmVX1oS4ak4q9Ys7x3R2Uz",
  "key16": "3XFxh9BhB7AWneLDEADDe9SVXh2hUyrLdMvYzG89iQdeQ3h9uKVNUQeb7DHN46bLgmmoWb7hyXZUUWxggMGoYVqt",
  "key17": "4UCzmBUmn2TTkoStyibhD2adcfepWWgCSuXRNoweyn8A7QnEUSD3KuQD1kmgXTgBF25EkTK9C9dSKPiGRiGpUyAq",
  "key18": "Zr23jk2iYquDjpax1dBs4JxH12enMSiqK35xKgnGCEH83A3R12cArUFNWeqvLJGPjuNgek2xBXd4A2mmxh5Ty7G",
  "key19": "4rSsvmjPAQgE9sFGeZHrofxvBAjonw3tacjm4ZH3zeVHPxumFUQW6i8uBXU31ow7ehks39qSJGcXv2PAgxHFvdNm",
  "key20": "4GKQAwHHYUjQpcBWFKyK4Adh4HGwNEYCCQ46Q4qCh83JCk6GCtYnfUZUef9MoN9BD7poAqaxhtueyqSKfqHjb6FU",
  "key21": "32mY2NXH67JShGBRAahSKXMG1fmrVmGyBJwKoJ5eVh4atbhcFCXRPjTT2s5xyFB5VfFJNA4ExbgTib86Qf4TVyYQ",
  "key22": "2uY6JockqnSDD6dHkV7Jq94L6UX6EhK3LUZHHNdW2UWtn2ojxZiyah98qUc1PgeUu7rXxjbhSV15xV2DbAD3LzFB",
  "key23": "2pYjWA7b1e5TZ9jTVY6TcNWexDCXwKRBxxpA1QVw16yKxHQ79ySKPe1m2knqo66zXB3cUWMZDv3ehh8puQUJGjm9",
  "key24": "3ZZoDoziUq483cvPoZePURpXeeH2kB1WyU2Fo9K8VM3Q198U3238TBTtXynZPhzYij61Yciw41LFUkRmW5Ac8sik",
  "key25": "5cmXjyn3VmVBqdHPPwr68wR85qRwBeJzd6oqtjxkpb1c66HVR5fMJSb19HLTNZEY3BJwHFj4PTDx4HFNLxSK3YjX",
  "key26": "61Wsus1SDYw8PGGhb5oWLjHr87LcZyv6gQPBuHyBUVihVLJjZmjrVW7n1PZBB4BHe9AT6GYVMm62LUaG5dnA7EaC",
  "key27": "5HSh3cju9J4D3WpZWs8jjcEG8tStv6wLRSGGtU4b8kxximLch5mADCftQeZnoWgwJSuxD8DaYF7ct81KqqBtzYgj",
  "key28": "5dcBsiDBovUvnNYjLQdpeEg8FjxM9e2jMx7TdmpD2uFjFJPabbNTxXGQK9oP4Jgjf8xEbSCZBQ8Z7JDTfUQKgs2v",
  "key29": "4ME6cRiHSQATz2saQzGNyLhs5vWQRwezCnTuvcbq6VsHEg4RYb6KxK6qL3aqPuNytDcds3e6mkPGbeSfwivK22aB",
  "key30": "3E6e7pXmges7YawQRGhXfB2yzhJAXpqU1Tc9saeDnEUTWELKepecWkPPU5TrrKhRxgwJWzorUn2ahP4DaoC2pns3",
  "key31": "4XerPi66GqGevzTrHaQz18FAWduihfyprzoCx8JehBodjtiuK7UqbxHoZF7AJRgCu7uvC65yrdPVdAwzsyAHFFm5"
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
