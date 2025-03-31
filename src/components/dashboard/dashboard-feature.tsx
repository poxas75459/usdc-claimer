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
    "5icebJ89phM4tvdHwQGC4B5Hqju4se87uqL63W8xiY3bEs3PzY9ouendQCNPn6vrL4o2oa3bDwnWVKzDGyXZrGVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NVEnfU1QgUppvBikZ1MdvKMCv63eCVg2X6zd9GxqThaceFrLNMUAySMhoFXF3w8trb7XW5KukLBCaTpQbAGmRen",
  "key1": "42LFDxtYb72uVDDzPbXCVZD2YxRp98pykx3vagrrUagBfcrQJ2ushRHvYAkTatmLWPBrrMRi8gkT3Wm21cdhfXtu",
  "key2": "4g7V1cdVjX51WTQyq7bGWB9uMm4hvCGXaUWRK3iC2hPDRNLHZkwfXtHE478RPq6VMV4JAWrhN27b89GSHGW9REKm",
  "key3": "4Fm8gRUn6FpkjFXHPE9SXtn1DNqASCV9ZULsaM2BM2zqgkNg7ijxHR9fvwqoEdwxFgM64G7PWhqQzUvSG6vb958h",
  "key4": "yi9o2UkyutKPx94f11eTGGwMY3ERRtiTpEH7J4PqYQFWmjsF17ZjMvfhbwzfzPsvg6xaPrgXMRTzn6dXhoL9d9A",
  "key5": "2jpV3VqhJsf75SKfyCoALByoKFj8xfbYaF3rUBtZmAL9QmGMd3xYMNVUqAkEUYjecmY9J14K8bkKvFgJKq8NAENJ",
  "key6": "3HQ3WfLkzCS1NG5ePVfiNy3GB5WdEFC51fvTGmRzsnKaP4VZ4UMJsP2zXNioFe7Y6DiqRAeXKYn1djMJt1i3PTo7",
  "key7": "4Qry32XRCDMVJcgR1P9PqbCyKxRM1vX4mExCu9QXVoCZ9DCoQA7vU37sWYXbqRAJVdFo7u847mr7CJJZ7BiUNKia",
  "key8": "24QqGXsEQkiQ2vjqG6PeZbnPBnX4rukhXdog1x5BpAtYKJfg1gHi6dwCL8Ck9efY9o891Jxefi8Tuy733qL1Rpp1",
  "key9": "5GAyVBVVJSrW6QSbE7BLXPD8u1vkfvfGz9UgVKFRNmCUHvmSjt4gd5tQjZao7suu7F17AbEr2UnjbYrxyUyFTdm8",
  "key10": "5P1hTjC96c2SqYRywf37aw3WNbBqeRumkw6VS5mJP8r1FZzfMRzx9yMT8ro2XNnTmS2wwQVCCCXxxWuNje78nznj",
  "key11": "2hUT7NTQsQzymA5QHAVgLr4Lfoyo7LgQCe6C9Gz2S6111QG1hDatk93gseK1y8YQ7p3qbXHJ1EMr7FFfFYHVTfqb",
  "key12": "2sDK5sqjdvC85ZT579sdXPKY8LXdeJQewxnpyk9yfRjTLwbUqbooQNp13DmRgxou4wozdS5xk6rTChoMc4M3c8DR",
  "key13": "2JB6zGeUYKVpgtu3urGzkN81PoXLimaoAA4t9PpXJJ285BwZ6N5pABkGqoJT418pi8H9AWtiqZDzDhG9gTxLgxdT",
  "key14": "2vppq8AT314UxZv5WQsXka3nPSnRofMKAZ3UfgFFcfVMHBMhi5CHFB1EAiUsqaLd9w3DQw319k5RdcCMiAXg8qMg",
  "key15": "4UPwf1wtC28JrCjipXE87irdndYK5QAREnGsDULHjbyaMSy6afQTL3mcVwsaobAmMh9nXxyreXhYPUqCg1vUupvi",
  "key16": "48z6drGsjJUd7DJ6aRYS2gnqn1UziB6ctyntgDy9RkBFNG9jvyHyVkyApcsovG8AevVB1vaE5EFVVhx81Gb6tdwa",
  "key17": "5UyV8SQj63uSq61uX2Zop8w6CmihuMWMxYrHZdmr7aQuS4pQDkpzctLQGUFsbqZKxHBqaTTGsAaKcMNFZm7QGtVy",
  "key18": "5AKqtBX8Y6JmELzWLLmKeJtrFtYn4b96aFPeaRRLr8xGyfVWtKfxftfAXy4kTJp2bJvZgAiiHEaF8CG1mduGanbq",
  "key19": "vA6sswLamcCTG7vqmPhben8y6WWBBPotmp5CzCVEPFmWfB7wjXRcyZzsPTBQHFxgZNZiyZ1NNXHWcvpTbbvS9ww",
  "key20": "3q2vExK8D6aY2ceX1ViEu758MtHZHKc4p1pyvna3yar4YDCzX147im6ERA5ajVZhUcvevcssuDCRDvhvYnJ93RPc",
  "key21": "3x9vLEyRKQKj7Qar7JxUdjNJptYcN3RDpSDLQcDT2FuWxvXZNzxmP2fGtjfxYLQbLTr7iwvUTA9rd3gNn1wK2Jg9",
  "key22": "2kHcJR6D7e9JVyCnsoCFN9UZMNQUiiBoSLtU8AjAVwkbNn32GFemBsPc8d1uswdsdogrHdnoDEwz13aNT2yYQ6xR",
  "key23": "5oDpCx9rpfqkUsydu4EdVR65GikNfme1Z3yAGBjpmBQpd83Xnez2jPNxe2UcujNZaZ1zWMoWP2J9xJamfzHxfTA9",
  "key24": "4W5VK65Gpuhyw9R7NKzbWzkJMbTkEdjADHxY1zRYB3GALJFLq4G6VdvZkf91BFUd2CiEUCAc7jGhQscy1yWG3DsG",
  "key25": "5S5Pjo7ctD6WaBaSRWBBoJpJctyn9obRZgF6VpLTiKt27kNKRPArwNr6ewovFEfjpsghjASCkEeKSAxxWAfGYx7K",
  "key26": "3gQvxnCERcqvZGAD4jUqPwAxjyWPbR1n1kHJg9od7Ped6Hzy5jCX6MSH4rseQq3Pe5mukWPoiUAmmGF75wqpNaCj",
  "key27": "4DRTVRvPigzqEXiUb8Rws58xu7tCutenFrTpuSsrgAUbxwcrbMdYXS5oHLMratSndrhjYQ4PShvndsYh5aGRC2qJ",
  "key28": "3SxjB7TZ1NgFSqUf2dmR8wphnM9d7X8Mhvqi91TYbmoNQ1fA8C8yhTH1jqZDWte3ByXYyPXpWk83XPEqFnoWYNrk",
  "key29": "2bm6Rnowjj8LM3o4C9By6KAjM96atnQYoAgxXhChpvgzQz8xSqYjrTNEGWMWu7Yo1K1yCLfBnbKywrDSnpqHc9yX",
  "key30": "4JUT9vSEiqozHGeHNN2CG6NYLokCN4qejr67zL7YmCBj7ypDhfJA6j8ksYsKocVLmDvq63MKPiHJNi21wgokkNM1",
  "key31": "57g2atagmwUVa7cqF38LyYwmEAMaaFYuyQXu1duiuVAEp5VmBcudLiN48pcJWmtKaLGJrBoXfouiDGibTUxECiaj",
  "key32": "x2xrFh7d7YGVXZWL4j75QkxiMyjGd56nNzMtFecgvTHFDrbqthT1Y2UPQmGtuXfuVgtTzMSP9iVUuYSiPBxYwS8",
  "key33": "29PJixFwp7scWSJFUAoACpQ5oqW85TeaSrgQjUWgwcSsFrrSUh6ZLkyvi4EXxGLcYVjAKmRr2FJ3xneVzAUwQAVD",
  "key34": "2bikDMa3YsJodGUSyRxRii56dgoYjgGngqphGUuoMn6Kt1M1q3fbDswsRycwEP5r9M2VPscnc24DYGi4hLeDKtSZ",
  "key35": "UKTfhB13YNymrvoUG7MoaCfTN7mXgZZLxB4YWcYL6PqJNf3LUf6jv6e88psEBSMqMrQi6JdK7QHejeKDEmig1sT",
  "key36": "2U7czmZM2rPxi7agagwo8BzoQTZrSxpJkHto8WcbFgs1vbpxeq7YxmbeR3Z8BNfencmiAhzea7ARpbEj4Mq9c3eD",
  "key37": "5oo2MBNXyJQRp4AcevkexqCt59scmXTaAbq8Bahn2a1GR6WFSEWVeokBEfVjQWPNCenEZQRaebT1Meg7rgLeBah5",
  "key38": "67fRsLisw2AF1ZSxNBKdWTX8fGR56oRVHLRDbyeKmWxtBEqt1mXwdtBgnPfaaAPR5QdsZyMjnhv9YYsxDxxBm6Vc",
  "key39": "5Gxn3MCzhFYYbcYKmfW4ZwDQFE79Mq9cQFK4H8LdcYVUeDu9866mecEQx69KVooKqeXYaE3Wt3BaNCGpC6PggiRJ",
  "key40": "5bguEBjE5hNSZSAv199WXwLrsMXurNvvjhb7dcZ6yhqHN7vEB8FnMgo9ALSuuFKf5NqLYcGGoBSJ1zdxVmhvTtCh",
  "key41": "4ZxY1bfTzFoTrKaZpcg2JmhXJBknLZTBKsGnz6jNGmUxyaZ6T5BoEzW9sxQPiorwHnfPE7K8J5YEB8N7NfRZUFo3",
  "key42": "EwCpyGaKeVgiFBRnAM6BTjy6L9WyDyAWdf3ddJ1W6fr5McXkiFZs7LbpAajWrSB4r64qyMumfKjBpYR8yD8dhye",
  "key43": "5xgnSBr2qXRNqx8HcQiyJaVFb1zSqu3kCh6rpLmE2xYCy1tvgs9VQCzrzyUXqeRS5JjKsHN7JoK8YFRtp7LGAj85",
  "key44": "4s7ZPZQkJPJQPJB7TCEmGvoxvbCkNBmjH4MwSYp7T9MCuTWmwibSgf8fRqdAwXVDS6bbAnUcoJJ2PFTUx7BsdNTv"
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
