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
    "4MAmbwazTJ8aJhQwkjy8ikfXdwa2jG6vKGwWPoDFg9NcSZtyTfVNYSeCeRkj81NLKjAASqVV7nkLjWEiopdvVUuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TaUzBaWQzMXnJXmXEZGRdtm7X1PjkbWBHoD6UUiyvXPVjS4ZyfE2eeroZ2cEodXd32iwb1GMUYrVnZcgEyTmYc6",
  "key1": "53i5PFLpGDgBf9Vbb8Pq24DRExKgXpJbGtbckxDEKuUHYo3aCeqzJCHFyxNgvFSqgJwGphf8gMoKeVxEQaa473wa",
  "key2": "tka8AQFJiPqHctdJZkrQgSrzZrZZTgPNv67PDqCEFQK6F84v1KUVJ1HPxZbJRCG2hEoZYX6w4hFQN1RaE5joCZF",
  "key3": "5psRoWeaKcY7CntwdrS9PwrDuyLnSj7NxSbEhdoQDjGhGFirEsdMWNHWa14635rztagU3MWJvh7m8gf58WViK85e",
  "key4": "4Ene6sYBJLCFpGwYW6ZtFAf6Dcw57URBAMAqiqaRoksCgMAoisFYS1kw7WXaNv2TQJaYEWSJAEReoafWA7AjAxCg",
  "key5": "4PGYTUUyV31PL975HRf6CC1eemN1DSvbocjMjBDjXWxDMi9cdGeDgiqdHdt3CRG3BaDXNUG8iFXXkHL7uzUXWX7j",
  "key6": "2YLes2YRsdEEbusV3dL2HkcM8aqqm93dFkK4QaMFL5RKErBzXboEJrzVC9GrXebonX2dvz8bcbJQvSxUcid5hmY",
  "key7": "YnG7qTkBhrGqhp7s7J45GsFLTNDBo2VujQGNyJx9comEoV7Ys68kvZHcYVSm9VmWJX6YwqQxyqysFMuJ4RRoUUP",
  "key8": "5wZN28p8V5NuEwWYeWVNoNGjqKUk5RMDUrCsJtjuRE8DShtZNxzmXjxTjEiGYunf9keHM1PjjJziy5LbBEZCtr3c",
  "key9": "2vjB9oK4Kmj1Yq4dWrxU7RbwQUDiDt3FttwZi7hoNPiysXtGSXbzSXFJMt6SZ8cDZXX4R5rLNuKbWHVoDoD982Yc",
  "key10": "2D3WtWVJWn1GxvaFDikZibxN4T4CySJT3jZyV5VY57Hzs518gYxUwpYTSkrSJwtryRBEGxEsaf75tNSdK9CpBPcj",
  "key11": "3WYC7sP9Dxh3MeEEaoQ7QLLXiz2WUuVrd8vE2zGeoEwqY4a1QyynNb3XjwzKazTCzXZRr5rZhvXuUWy3daWWBJtG",
  "key12": "4Rtk6uuWtxYyimFfQj5ZTPaEsMgz6izkq2A1f9SAYbKvcyqs4LscCarpWKbePyyCjszW5tuH9Yya5yJJwwnn3KrM",
  "key13": "5ZtDCh4k1t8GSUQ4vdRrS3dSLSLtkE5NQSNYiALtvfqgaZUJzpn599y4ewc1QLTnrX6EVhNrRxezZwnreFRmJixg",
  "key14": "fyk7NvcPDuS1qCFmaJDsCZ8JMkfghfAB1x6CHZ88tffFrWzUjELpEPVGG671WApjuEKtY9ee3AVG3P8mqk1eYJu",
  "key15": "3eYSivRriet8JEtfktqcpiU2dfLExgJYaYxofswrft1QJSWcnT9RHdvKxVr2GcjSY5bYSh2tNjPcrEevmjJCQu4m",
  "key16": "4rFS7g26YFbZXD3Nk5jZutEujMaZ1TcKDCfNVR4q3xfenubzsfpjm25vq8yadRSXtuoYLL3hG3MkZgXGjkmsdGSK",
  "key17": "4MY1dVQ8Zuaks2ST8P3VXCoDJVxpqFTB2cqUDyNPHULe6Rcg3B9KYPNzjK495pGhX5ph3bpe3jT8xyhU1YR2c7hy",
  "key18": "2Fpac2CUeyU5uCy97N76M9gCdNDAjSk8qyyCViraS4ebKnX4XcEGMnQwr4p2qBzAyym4KRJAEQDJ1v3FKKtoWxu7",
  "key19": "3N5ohnHpakaeqjKyzZk4PWYkmCSeZLxhdmKaRj6aakjJ6YEF9TwNStJnKNu7F1yo5jbqdwCpeAAsVeg7nkZqDSM8",
  "key20": "3Mw3FkFubRnBzXz5XtYbxwxYqYPH2i88cp4i1uHqV1QL789kSnDHrLAuCwHZ9znxeSoeYMzUwucQhJfyjKbKgrxp",
  "key21": "43oxJkLfdtCUbfeuEEhBK8QF177D51pdBH4F3zHrX38fXgyPVJPtc6UxYhyzvtjgevfKYH2jPmM49J58MwfAujSE",
  "key22": "2yWnfdRzJY9dAmTSjvzhwPs7Qu8fJptS6rYtuLNvGPRq7WkRrP66RDCqiu5LYKpUR763W1tGn9KRRnQeZg8Chy7i",
  "key23": "53rgjHvJ6x61Hbe1dc6ssosc8BRiEHWoavasPvggbcBYKJJ3X673kRccVRgV6NMcEFgtmcVMXhc19t8EzG6WodEy",
  "key24": "zSWMkhudpoK2RowS3b1LM6jFT35HPapRdT9EJsq7r8MxitXPuqkPdNE87YKD8MvZPJsxDKewx8tu4uGkccy5j2C",
  "key25": "26V2v3tgRyNigGH7Bo19BVkMfnXMFSvEcDuhKMUhhNm7ZL2sunLgaekQZ5DgTW3JiRqsRHMPaQYb1fYovxGHDNCG",
  "key26": "5N2wb9k3HADc9DEUScGyjkbinjjQKztbSBUQUNCqVFC8GQMfNdaJdyk3GpDLYGHZijCJkVgcJi6dffNA5ADMCF8H",
  "key27": "3MPfJyNUsDBoVWmfbSUZ36V4dVnkaPRbN4KypQ74V7DhpwJVuYeq7B8WsW8q4wzBc1toqTx2HqEpyfQrEDNEGJLF",
  "key28": "4ub1LZf7wKR1tsATD3zt6essgdVN6nMb3ZAV5RpDsoSQkKayUAA2U1KjRkZFiBd7qvg12BdrEPrYXzLaVBH4oG2B",
  "key29": "5sn2fiMt61fzzEG23yx99ssPWNUTLs9RG1cz7FvHw1EuH6xTMsfSgwiUrv6tZWyDUQ8kfWHccPHxW1B67VNxPDgF"
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
