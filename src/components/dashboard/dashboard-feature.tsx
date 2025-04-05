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
    "4DNfUDBJnYp2cmVFt4xvyfHwiMtn6szAbpYeCLLw3qW4zE6vtc3BAw8gFef6aQNmZhtSjVbe4JEZDBiHeSZGJf38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tnk3prZyBC7ybKhPrYHbLa8pGGXncdaqk7JTRdRvkUWLfJmgvUyVkiU6caqGZW1xjH3WJkFjW7S8W8nQxfySQev",
  "key1": "5c9pLkjCq5u5aDs5TodedpiqNjaFtdFZtGjKVR5AB7BBnLAToWHPNVFLRN6xqLcPaMmb5qKxWnShHAnSoHs1d5wL",
  "key2": "Eh8dpfRHZiE1twkQtrUX5Z6X8GHHc1eE2RShWgHg6BzyTUsAw5zimGxAU9e1a4FYeGiryjQppVuq4SUF7231C66",
  "key3": "4Er4SpfrwKsYnyPWGRZYhVc1qhMbB8pjJ51SAaFt8CpqJYFPRYoZCptD2PPxJQWuLCGcwZQnH6u65mbFTR5YuX5K",
  "key4": "5FFRQ9HooEQhBfMtuuuor2QRufFrzFA4pzdSeaUwYkhejJukmfVnwFxeNPMk6Hah7GMfnMDSrT4ChnULkKmCkiEA",
  "key5": "3ptj7SHKYuB8Y29VcTD4E7ubh38cks3MwDQraZKoCMRCAT9cF8324N5pPcg5P9Vj7z5yyHGUMGEUSX6GNqaBjebg",
  "key6": "4YRygaaTM2xH3VCj52AzCNUecsjMcrvh1jmv3v6rtLqs1TkDcQya8h97AQkQbJyN8DqsPZaoGxV62453xdAHy4AV",
  "key7": "5Q8CTvc2u48CnsgdfP4huMPpej19fejRzYy1yA6GMoKq3edUdrSDXNA4baky3fdp8yuwnkN8RiZGAt6f4jGojkC7",
  "key8": "cQqKAJ46VW1CSFhtHjKJm3un7xnaySAw7D417eurmEjSP5eGqnwdiK2EyEdSmkbtx5cCQ6eJotgrxiRKzbXqbXg",
  "key9": "48dVte6TySynvV7nGpGPdocTaYkKoT3mNCARGfFnxqy6px9wXarX3mGC5c8Z5ErvU1qdCG4HSSUW3qVDRgV419tw",
  "key10": "5cu6pSbXmBA6GmZA38K3D5FBJ5Fs9A173eNK8EiiPqTyoxxTj3CcsHbscFSRQN2rjdz1FaWDGNbfkTjZsttum7kU",
  "key11": "mkY7u2F1MgLDJ2EsQ3v6u2K7FqEHQH9EhcZ5bpMBPvfdTtKkxGNGVfY1sSCGfgS5zSJEioca3xp2pQGgNDgTaBb",
  "key12": "5jkqL25no9vsKrYRThKmhbue5X6vLERUpzeo2k5s43xXF7w5x4B7DVhcVb3Po4qwAE5R75kHTDW3buzaDRvAZPCh",
  "key13": "5nqBtA2W3TdtDVZthxH3KSC8X44M1SNcuybHztDWnMWsZ8vhxbNZPTFB5kT1FzaRhcgYqJBHijfDmFjzfq1sq8Nz",
  "key14": "3HWLhp74rWVXSwWxCQT5KHtfUZc54tYGYC166HX1xAb7hZgzaRxuGC1Uae6TvQyR4PUBvME6yFQT6MjpwLpD2UpQ",
  "key15": "21vg3ZrcVz1SJ5MuZ3oh7yM8D3Fjrso9Zi9P8fMGPmGkAtLNmZLCh91ZG5jB3vHVod7TGCGzjnEzSbE7JpoSEaum",
  "key16": "2ZY72N92KEhJatvZxavmSMHUbKrYnqkuSFkJdi4J2m1N1qDGpjANugKrb7RsgGEdcgTXtxa9QBEnvPnka2oKsrXs",
  "key17": "2eNbDtRH3gh5yTBuxTDesbArXm4bSNjarRvLUmKRxZgZ56Ju7E9hD8JiTcH8E5Lm3bPZHjNQEAjy1LdPTa9AcmED",
  "key18": "4UUqoKaDWYeYi3FzZ4UJoyqKDb2iH3sKhyp12yXTPgYeLt3jePtL5paJDUejzfDY2fHjGksTss6wgCExteeeAhoA",
  "key19": "4aVYhz5cJwtfg33rvRNE3VZJkAYYf6ofVEunpvUgSuso6ArJ7et4gPaQTzpNH1qqKpSUSDduvMecd9DvLNYj7fqh",
  "key20": "25JL3esh3Qiu8vJtXpnDrCL4hZTH3rcexdgjT97g5oVn6jLsd9Kpcinocp7ABQSM79WDaxzzNpwEzS4Lygsp6QoY",
  "key21": "4ar4TJnyrj85o5Dn2165rSrN9gZpwss9seYVuZNsa1NJV1g82j5K3X7tzeutPGBYGLWEjUHKL1X7ZDFdHui47UxW",
  "key22": "3EFk2D85jZBH8oZEmtzxrYun76HZUddhnuLyYYAunJmFGjALAMWRRc45iqAGDLigqWAxFBVTUaP7xewi8bHrqNMG",
  "key23": "41HLmqy7sjdtCD3AHkHAGy4Jyh1ddLdwa381A8uyg6gg64AxXPRMH9mhjjf4Ud7TYscBaheVsiYZdUuCt4RTHmFu",
  "key24": "57vsTSbYeW3Nd19dALnqZXCx3VuzgywVwGmj4hUUx7wmZANXBXqe8QK2qqWMa49T3aBJwiRU5BdQLZdSyfgy2B7i",
  "key25": "4wLKwEYnf3GEgRoFCAevgU1xxYRSTqfaXRbjqZRtgCXp1vE9twb2L4vEcndgeZLptDfbDS2tjWHiuZVqmjEtp4Wm",
  "key26": "4UhqjywcX7UaTC8Z9QHNeD8SoQWg7dAHE1D1CH5A1u8cZqY6zWisFQcZuMcc89MZeuzhSiw5raYshUZbE1vDRXmx",
  "key27": "4kWnivbAq7T7mqziJeQDMWx5heK6v3VWwddRMvbdDanQeMf4CgnxL2etHqeZTU2EiFZAX4bCov6B8wgDxWAEhLSG",
  "key28": "3iKMmiRbrNjjuYaob6Voa1dAiZE7iWct5JAkFxMqgsjaxd3SpCA8CrfKh8se3AYwX6hKVbK66xGBwAN1zp9ATSVe",
  "key29": "26KvGmLQKhhP83QR8fiFExvsxE8HBuNUZSu1bfZs33zeAJE4M4nN7vTg9u1sDZJ8kB4iTKFrpASUxj3dfEXo7hZg",
  "key30": "w2p3v5vD3Ev6MrH6qNKTrVPmz7xVC9oJGzrdKDxZ55FNJaVZ5WVGo9P72BoEm4yTamnmU8Z6YLBsRE6zZpHfWV3",
  "key31": "s3d4QaGZaVvPNdxk68F4fwVpZkrd4p6YQ6fDAxmBEDj2YqtRJgZLoARqg8EDfKgU2KL3mbznWMKuobgMY9VReqk",
  "key32": "2Yk1UdqU6ZkBpoyMeZu8fRsXXe6s3UhQcFQAjVs7Q2XFABRqju5PzHPHBvPxoM9xvKsqATGSRicaEgP5xcwF8jhR",
  "key33": "53Pno9FsV5wqBZU2wxoe4awsRJ9DSukucdXhyBgP5xeYeyGMf3cEwUuL5QAkY2q4cyJ4kJC9iq1b5mvKKHQv7xH7",
  "key34": "3XnuQb2V6dtVfotoDPJmXSsqkEAZdndH4EfX3Q7zjViQ4omY9CkNXRACkeqChU2H8gyKzX3AmrAcxiEoGvhtAGy8",
  "key35": "5ZpbTe4xdLL2ADB2WKvM3afxonbu7nk1cyYzdMtroAMoTJdoKJmojF4AmwMoxdtu7sKReSYb9fJZ5fSaxawCNk8M",
  "key36": "4tF5zmxHGCFhaz8F6virca7zhH55h5AdJfZ3oVX8CsvGpmTSYPyYvqmnncUJaRKaygwJbTJczJ79FNBxkMWG37xb",
  "key37": "na6o1fBo6VeQag83HsHk2vZczrbcjP3yXy3SN5dEuxvdU1D8iUbfDawH8qoN1rMacFvi2N27fNgmB2Ek2AmmF4m",
  "key38": "KPTc6LDSMQDRNjLSRsDxNWCE2b9PbMB1u5v3sLWsWzk9FhALXG3zQtrehiTVgTietJffWz9dKqauCXd3FSmBRLv",
  "key39": "3qJKNsMRGzBtuKjmALbC9td5aYAW7QTe1mu8RL2n1vHfbZ7x5Rk5kULgAZVksGSvXn7QCDDrA3pCNECC6ieCJsjJ",
  "key40": "5XarVAymBx1PgCiK2Mc9o8Db5tN7u5eff9eZHfGonUxTXHdhkVeRPTZd4ppm1hTZXFaZ5ZAXsqzqcycyMXnZ6XUC",
  "key41": "2ixngfAtVCXudEY7YR8Y4bUB51JyN1EynEVAJjMMU4ZQJiSiRR3MBnXhS4zEYNgAQjpxqX8VhoE1e8M3zVXqe5ur",
  "key42": "3XRvx5tnYBdZtdaTRyohLqjUE1FYUe3X2kcNFGxqQVS4u8rrDGf4c4hY4T7Lo45A9itybr3aCaFsyXuD3T8vx29i"
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
