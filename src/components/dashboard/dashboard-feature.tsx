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
    "55DhDTDeuakDBEhgP8i83bFjBnRJKPYFag25EGaZjrL3eubzxEn7Nbxq5XmY39XGTv5dFEDD59pXGCAzp8rbuRGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MMSYgvSpDZWPGXiJLukNVvM6p7NSifFfNvURxDzUJdpGBEbtoyXerExoDTyRu5mPNyUQMW4h5qkWyNsya6oep8M",
  "key1": "3qBfRicDswb5STarhJq3s6cWVRLCqrRZZ91faBChvpJmZZgQRndJvRGnnTFGLnyA9uoNVdPUr45TXTsSAysmUEkK",
  "key2": "yADFXUSG4ooBvQ4Pme6RZ9vbLSavJoyyEYzXS4yKyoxyDwQ6xLHcGDbNLmNd5hmUqFVByqij5Xt9GvG6SsfrUbt",
  "key3": "QbnL5iRNJjHiHExbLjpGrhGtFm9XWY9rofLQcVmbDenAmry7zZwzwMzGiatmR6gZSNDzEdCVxRtraQ6tr19pemw",
  "key4": "5hFrggan5TDeQP7vAaYmDdRCBSRyUVazjDbEanYFvEeCNSqSXUroWpmMYWpwrF2FPjB8TVyVv7deTc2iUvaRrxX9",
  "key5": "4MTogSFXkp1sZ1QXgyXbqPsCfVmn3zxj6AAwACdNhYqcqTVYWWAqRvfnDEd2ps7w4RSGpL1jTakhnaTZwWBbPcNW",
  "key6": "4b3qhTaK5e5P7XzGMMbKoSQCDtAjdbirPw9FrR2bztkCvzVUC3NbZg5sKDiz9UgLZPZNWC9HcyPQYL4pX273cPug",
  "key7": "5LvvTMrZqG2XwoNATcXHqB1ECZezXEysFZowLA31kBTd9msSadkXE8B8s6vYQAue5G2KXPPjHymUUNDAFmvrx8Ra",
  "key8": "4xiyjP28YRacyqRaMbR6r11HM7CJ31St3VQBh9SDvgJYmNv27ooxGakexVmi1RtPxucBADzb84JxgEzD9Xv4AuWP",
  "key9": "5eLRFpqJTd7TNHQr5thYAoawHCHCT9K8E9FoUuf4XAsTqkQGEKAWCmtoDskRmoFYmP14bbou5tzjVasa3HP6amv9",
  "key10": "3P2oLffwWytdq8drMoAModXzW4ZZ7xf3uYtF9y5BjU2tSU2hTGCavyWrc8qumtdpFbSuyHpKmfziuTQJkATwu2xy",
  "key11": "5p94LQ2NRkhrh8vLyBUK8VEjA4wJJ3dkt4BksU2Gr7cerFLSXsrRETk1i3nphvfrwUTmcjA7VLnmGfQ2jAcmcN5s",
  "key12": "2YbmM8TtQ8vT4Eiat345e3jNvDg9KjQ9APTt8KAse1iaASrkxF7SKJi8LkGuJ7EGrsPrb6Tw2i9b6CG81mJMFNeC",
  "key13": "tyAW8wvT1tmpL45EUNHNv6X3aHqmznmVkrKC9yYAmfYVTDkCvaawb7bZzHsCYnDcKbytcYkKsbanEmcoVL7hrgy",
  "key14": "gTRWtEG4in7jmn1Gudei1hSHh4ibHwHD8EwGktr94ncuezhJ2Qu8ydKBbcn2QNnpf7TPG8acPnHiP9dVYeatsAi",
  "key15": "2mtU7ckfTJ2DZkiEpyfuAmRPzAjzkL1C3tcuvWTLLwkfEBbHrmP6PUtda3fKSqUAZsuFoNq4cJRAtJJAxhqWMVVT",
  "key16": "3hgqY5USWVZhZPamXe4ZfL6RXQ7tJdiHeqa8rJzmnhyiU4P9rC5ttRovJVJSmgpJMvNTLGY6PW5oCH4Y948PrthK",
  "key17": "4kWK71PepEQ3guFCm35HaA69BjVohWoQQqy4eg8Qd4DRGYH123y3VfSFzQ1TNL5SHZU7SCN7nkdEimoj61wRxG9g",
  "key18": "upYHLsRnW6NSa9mCuDVwdpcPrgpQLqqNDkAuB9TkjvhV8vgEEmYYsp6H2nDZ8ev8aALwNooJ5HMkAb9HHRXni3w",
  "key19": "sMTJjdfC47xsyL8RRbiMSUUR7JyyWTzLHZc7ySjxqZcg7wKquTxdYUW1pvXSaNKP6uQRcMkQcyC8yJ3F12NHKv6",
  "key20": "UEpDcNQJVXB9HBv3xvNgJCthanEzwwMY7LYRQp7TMmifdAX3GEBwPauhoQLSDXM5EHgAisqYk8RBqs2kc6p2nKX",
  "key21": "PaKY4cq39pfQzKp4hnyQZCokAMbdCcdaPampvNb76zvikr5b7TjPNYj3hXBtPHN9QBij9a5bv9NGasqyV3ZCvSE",
  "key22": "wZ2QMTYajhiE7vnACLqZxpT1EVJb7gjPJnd8mBayN3zRS2LMfoDf3wY4KwPNzwL9vhJFgDCc6T2r7TiSD77zyPm",
  "key23": "nqhL6xjGbSzV3qKKeWbxrHbPDtU6bQ4aUgrd6ajXe1LnvYYY3ybq45UJ9Vez5DiH5RYASHUKYdkzsr4fJZkKnz4",
  "key24": "2UkGGK54gupjZ1ji4BUrVbYrc2nn18Ze6v9L5ybrojWqr1jEsH1y21vR5vVpUjMoMMUa2SkQeHEFe8bz7XvZB5S4",
  "key25": "5cNpCXNSMCepuSFACk3EDUtr2ybTeQRXy2SP7ZmxUVizpdDDHoBz1MB416gogJ8MeBrBj6AVhsDKuvcT7DeTWy5n",
  "key26": "Yvi4NEJ5hPT9Z1uW5xeKWiYvfsmdZXPct2WVM631SzpRtKGAtv6hetfNPsAGhL5D5sYhTLHMtc8nnvwJ7kqCx4F",
  "key27": "3RfTteDQB3dLeqtNwCYMqvxonfGPPzKLTmhpHBLRfXFSb72cYpWgGj3V4YjoXhkfL9LvnGXS69DAKcHJ6PrB2asi",
  "key28": "5KbmkTju34iPyVJXMe2mSEAs33tanoJ4YqLFCapJu2PgJ3b3hTgPiZFbJBLc4tSQEUVnu3ZoG2VRUWcosUAj3Z5x",
  "key29": "55TJzygsXG4rs1vvL3w1JhJ5vP3tdq6CFVG8raZy2UXG4SDdMQXUvaEE7KCnCqBLmNVg6rb4PKZWSe7EJ4ubi2vm",
  "key30": "2LikmDrskaqGsnBCCHe6r4yhKxDz7gchL2ULTDBPt1bqWrYnmhc7P4RknccHMhT391Tzf9q3uWrRqordD5ayEBUX",
  "key31": "2d2usH7qdUQBTm4WLDEfNvu1twACmGUQMq4aWdTGiKhDb7VV8P26cyug8KfRbM5wLYTqpaj9ctVZmPDKkBdkFTq4",
  "key32": "4X6Aj22LD7kxKwCLgqTiy9jZK4v9eeXUWP7C3WSVT5NvnxREHV37KKh6sj3XqobnLrS3UvYeYmShStK5RcxQrvVs",
  "key33": "3Vvhe2T32jeshY3dt1bT1bkqYPR8eLsjHUfXtMnbH6EqRNuWNJpDxnQ1AmsiWFDSpZVdcXAhnExip2b9kyExZd8B",
  "key34": "4z1GVCSPi8oBewRxVXitCz9f9phpyzHd8e72YNxADz1hgiYqXgM7N4Ughq8L1QaHj3NRyTJs21AhXD6ugXgp6sV9",
  "key35": "2qn2yGoYyHf5m3NqmXu19VWGL3R2GayRyt5Tah72bDxQa1EbRZoasJuAdqFXGSc3BrqKgnGUdv8kikPPMmMmkQu9",
  "key36": "5m1FVx47jevUNAFr5JHE6jFrwzZSfYB19z26mdW1vbi3M1ZyR9Nedq4qBqizhk4XrGXKL3caeJeBUVk7GB5RX7Kf",
  "key37": "5ARGyHaafoxJyRUbfsSzyEJNi2kzZznyPV8LJEs7fEFRDGRRKrRw2iVyBaSEah8b2wpwvdsJDKDAPMvcL4r35C53",
  "key38": "KMganJNvjNWm88GKXPFhdVZGgUR5PJqyt6JfPiXh7dJNBzhJrq7QygdmoojKXZdXNZBahSHqMT4taBAS54VZ2FM",
  "key39": "UtD5JVCt5Jtdr2chMSt7fgVYaG3beSkgRoaGQfrv25K9X2XNSLf7Dxr7nMH4xAPYEhfZsYUPiYN5iTH75H7j92t",
  "key40": "5kXVMatEJ4gdtibusD22MMeTzbqHhAnYMTfz33158D3pCWv5Tm1eud93K8wrSmy9m9GH4F2SCKVeUyew6hkHauQy"
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
