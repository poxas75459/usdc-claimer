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
    "61c8xiJx5LEPgStQoHf2gEd3j8DB5sFNvJMYMvrS59BU5E6L7x47NMd1bmTqZVZjykkLT8sanrYMustPcNpYzss1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5woucQGmkp1TRq8rbaaXLDySZdnZPR92vNxdQiT4fH46jUX7zdCoxQ2Eri19sRBod5xdDat15X2YDM5e2ZgLVQfC",
  "key1": "bHZfVe1GLBS2N5xce9Jb9J41xMMgLuwUezgEPNvynE1J3yAU1y7NjAyVEpD9t6niK3GaVrKxTkVRdZh5s3g33VW",
  "key2": "3VQvgPTVnSBNRrYWw7wtEJgHy2q2oW1ki44A1kALBowW7xYTtyjgpEttsxBXyjF8JS19TY5bJ3DcNyFEYCv6imYy",
  "key3": "3ZrWKkcoX3enHbYq7c1Xsay5DUjoRFxEApzz3eHNwtUpjUutS15A1ZQGgvkqKUEyJoSULJj1cxShsgGwmLBw8kNU",
  "key4": "fDeFyqf85oNjZbTiDe7Vyjgrk47d5hVqRDpip7sEHHhgtDpzci7HckjhHmqgPDUVsWDXYYAaZYWoDcP14a55FVj",
  "key5": "4rqhav4zZToSAza1ZCKJ86f76v93qMZTYqxR5VBVEcm7BRbggvN79USWnphZntzNAWyj8BbF7CvPbdLzz4Cywvp5",
  "key6": "5PkYEpa8254dHrPiw42SLU3BH3htZtw3sXcHuDUjT6suAq63GaTo1iXoE9cSQH4YSEfRNarHUjaVWdE8GpeneRDZ",
  "key7": "2cYHL9cGqgBhTbBEBEusojqjG6vKYipDoZaW78yeqN64wQzzTiawW1HzUFrFWrCyG1E3LpL7HgQPs8MzS8hkAAnY",
  "key8": "65XEngTG9JuHddwgFTBmmbDeqYW3uGPNP1TaBwGetNbNivVnuJnEfRb69WsEy876RoHvgJogFNPioo1jKAneEtc8",
  "key9": "ogejm1afn5W9LUZXPbxcpLvYkau2BQk57LMh1qiJ3pypD2C1JbaW2vqgFSkKfUNKiBoJLWXauPqwwrKJDqV9SCt",
  "key10": "224n6qGyNgnpEvDTmaC952JSZ2Bab9PFgPr4ThVtWsYEpwMjxkJ4t4tTLnHnwJk3WK1wrW5QFYgFW6VTRUf7q1ae",
  "key11": "4Noo494a8PwFQZ5xxyMtQVqCxwbjVeeG4Thu7boihtw488NsAyNoP3mak5qLe9MWYXrFY1S76PYeu4fbgktqGD5Z",
  "key12": "5bUKbz1ex4g4oV3xmNwv5RxYVk1gtjJy1MWQQa2nRQgM8GutkZQ8sGiFEwdHAKN8uJbzLrdgfL2MknWawkgAF1VB",
  "key13": "5ocu34SeKvmFZUXKdYHTp2WRyzp1Vz1wBxGaCrAZHRUNkm8rfzw5xopF5KPMZUkBjJbmaYS1M7ZxXVhrZiiTHJ4N",
  "key14": "51KXSgD3RQsMhs2qT84ZMruXzFbfJF3HSSYZom5upk6CHmwMoPx1kPTs5DPRGsNcdY28pgQ9p6VwrnrHjBGhYn27",
  "key15": "55uuxfUViSHcffTTHZV4fjAhpYDPFHdHenpCKrshHiHy7NgKNTwnwL67r8EqSBu7w6UndTCxTwRsbUJW2qTLFzjr",
  "key16": "5JcmG3uQgZjQEQQHsXuhfBFqP2RXkgvuw5KQ3Bgc5GvHFhZnkSHEPvNZbVHsXwvtL2uB7BFkWMpZvML2jA4yAScc",
  "key17": "5a7rP1DE76wnUSQcrDUq84YZf2grrnkLUsUiKxg8fgn2RmmF6UqF9Q5zVfZrrtzjKUompt5NQ1QLm3sjBLykRALE",
  "key18": "S4ye8HSJVcoNTcZb6jU6yY793tHenAtHBEy6QxgWJExzdtXYhaXzox7FvjhEnBNudD5w7i7Q48wRjEEtFcedGc2",
  "key19": "66cyi4bjSSE6LMswcdjwiQ8Wj384s3V6LDvQW12mQqA5zeY5XzgCrR4iUfUc4oUQMKtqx6uwH6gS6qHPXsNzzCBM",
  "key20": "gCDwU4UsQ91rFknfZ8XjdPvF4MJe5gRpAEoeem8pUPA5x3g9wRMqjE7r1KUScf3ER2MqVk6jnEie1qM7ggsibeY",
  "key21": "4KNd24ncpDmfSgkHMaG77iaMH6H2Qs9Vrb9geHXnGiHd3wV7GHrQKZuwfJ4nnTLV5LHgvUH3ogzXCL3QiWRtXjWy",
  "key22": "3JdpipdwELkUxANyb4thJGE3NG1qZU6rFwkt6rAcmPmmrU1yHFqRS8E1yKhxmLUdJbhvWUHN3b7GTb4H61FeXQ4y",
  "key23": "4wAx3adiXiKNX75xHXCh7gde2PUqdGQZpdqybJuJKXpTp6MZsiWijmAhvwsZn59GymUKGxxYhUy2H3c3j9jkHLGo",
  "key24": "29ctE1fqXR1JWDaZ7g3WrKUzmfRnYLWrz2nkmza96nPHehuzBddJTgr74CWUKjz2pxvVkKc16gTWzGkkocx8mnPb",
  "key25": "2fpJG7vwtzpp2QH3Gpcedo2FHZbHaRm8rRgwThECf3LXhCFzF3F1ZJR2fEdUwiDcmkYB1L2LMr9t85Edp8Bfebk5",
  "key26": "2uXPBrzn9o9NQyaDRVt1WqqM1WZWJRLaNYFwFnVQpQoi3bkZiBUQHpb6mfavmRXwCz77GYPve8TPRmLAEQsvYhHb",
  "key27": "4qXK37ZH4EFz62AcAzxQ9f96Sbdy2dXnboK1BLeCY3TkJ7YpRgW8ek2GHuVKhWYrSwr7GKtnifsAuWWK5JD8Rhha",
  "key28": "5HHLz4sqDaHmEwMhPXEbzZEBposUZKonQMm3L66SGWhnPNM9ViDsqcJmtnyoERDG7NHPNxwp1L1txZx8qsHbBoUS",
  "key29": "3S1rGbZmSiBF1EMdHfBiSZ8hDHQmctaVzn4wVUe3wDcDQRT4eXPqxPXare82342vjy8HYWfWVxxj6AZf5S2mg3ta",
  "key30": "2vGHw8sRWKv2GzcQdkfrtEJ1VerssyRmzgjeDPaEk7xGEmbqShYnZtoL47QEg4MjNom8imu51X2JMG6EAZ4x7i2C",
  "key31": "4pWz7nrqmUgkZDr215xWBw6gR8ZPHZqESf26vHNZ1u3mCZ2hZQkTCLtg7q9roEJ9RVU4JivpehHydDPD7gcZ7x86",
  "key32": "K3XSm56TvVmEb8BmSS7yeJ8BRM1pGq5KS4T52rQPXKpDzJtvYmDKjLEigMcE9t1yKSZmxEkPksEyixdCqinoQ1K",
  "key33": "2o6SRAr2hoFhheE1TbWoCzqYYzjAhueLRCD791k8ZCqyPP95yoD3YtTYYEDkR22iKMZms7yauyQWR92QPkDbkkbw",
  "key34": "F4XFKzBLQ7UqPajbtkrHUN74T9caJmgYyVuzNZTXk4b8fN2iniXFXnDAD1aX1sLDBTMpKMRuW6wFaY2naxhQbqz",
  "key35": "5y2yN2zhVtT2FyDkPHQ6MNdyNnQXChea3LfVopM31c116aHAKwWNzwDRFMNzNS6pnSXqEzKwhLnsTcCNH3Q7Agc4",
  "key36": "5RwST6chK1YkHVHSAJGyGCykPyhrGbDX6KgGifGxANXVNaF97HwrF8fNMJreVikQ3w1U53HzBvVeeNarWmBWf4Cd",
  "key37": "5yPN7Q4DA92Gx1GWG2BtqR5Gv8t5rxXTJ7ca1Au67jtuZTNf7oFnecGJ9uJgwUKgpoEZYdHUjSQPQXoiKMKfpMKs",
  "key38": "D2kZnqfL2uPWUSEQcwjUFuu6P5v6yZcZtpcZPJezk2waAZ2d5SdzaWGuhyUVHZEZbVKripxPDxZg4J3oWVNj8g8",
  "key39": "4zWN8WGr4rE8kJjtm1Zbwz6XoaTsapdrcXUkByd8mJCrDijQrraseAuJD7FCHmpTPktpZXtE1QsQMWK7CtxyELm4",
  "key40": "3VAY72CHTBsRosVgFUjGAf1MtpbnPxFFDRirspJwBsupXzUGCGew7CnbuCktHfrzegrEb9eEgY8k8WyneRwT4V1W",
  "key41": "22QVG7s1DNyM74YLGwtkeGKcqcCHdrM6TWmpT6aFJeiXVJuJQDntGfYk75mmHgpfNFj4jD7pVQCWiBxBfz4YDx1h",
  "key42": "5MxEAGzJPmXmkKgaV68UFbHtSLqGVG13CftHx7Let12N59nKJhEzQ5cTvZQRWV1DfoCEdtbZB3GrorUp9bMVLZme",
  "key43": "4mFYoDU4BUk2qC5B9rNFaAoKpTgNmc2yfEvcqha49ucf4JyiFHNKmYaEfXYV5oTogZ5AbnS13E13UyUUjuvJPeRA",
  "key44": "3BTbVwf58eyaBufC5kTsNtDGRSCVuYuPq3xakpF2nYEop7JDgMAQe9pd4tifk5JRQgu8rDPSgz2UwM8Pj42q7fuX"
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
