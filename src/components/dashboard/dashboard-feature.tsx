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
    "2hxEStkBH2HcjVWxnp1DnBkxzN2C8oje8oiQA1ejJaSPqR488inHFqhQPmDVfA9djkyZYsue47Ci6p3AGoHweBqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BNuR9w6RPnBJUHMbg94TqzEkTigFxASmdtckeoVgEeqm5zgha4jSA35FkFhAqVAnDi91b93sqvjLjMCmaVhc9iw",
  "key1": "22MzFSg7v7tyuhhz5L4UTQSP5VNWDxeHXEB3fobBVeeFyR3j9dNBXKiRDv6JhuwMV3Dn4qURpMU5w4SFUvh9P1be",
  "key2": "2ohYfyiy8SpDni3P8b3wf1LmDihQ6bhhuUFvCfFhUTU9q89JnAuWkHxBB3B9pR5t2Ju75m11Avp72AoJV8sWaRUU",
  "key3": "64ruWu5XBcsULBDcj1PVgmcheTTSZWGM995f4LmLxTDzNuJNk1eD2fj54TWGDPwGbUh9vZKUaimduXuuW19USQSQ",
  "key4": "2B82KbXTfFgQPKWD6kTwTD2QDj6KA7pyQ4sdHbRhitP2KEgVNSajaCXjXLwWrMhKEM2iXYdRQy8weU14nxtie2QD",
  "key5": "4qE5pLTUgka3FHJYAEdsg9bgv6Kwwnjno8W1Xg2DYLCFb6n4NXaiFn9FdXvQe1LQJqB3jATi5TqteFyfWH2BTStq",
  "key6": "36CFQ7sWQCeeHRfZEc3mamdLSGijt7aAX5ZSqqbtqT59yc1zvATrhrpVQisRp2SY77TzFLxx5RU7R1adkDHAsEKC",
  "key7": "58XTqNK2Y6upsnPMyqGMqDHcL4TtnQ4srAQwgVWh7AfJag1tyHnAjSYxWogUuFEujUZ2ayVfEmi5avZrV7RGNzox",
  "key8": "47cMy3UoQyL1S1foqZM3tSpFuW9ZTS43UDC5VeJPuKQh7ZWKpLSecBacguAv7ezaYz1oohe46Q7RYGDxLNwSAeAh",
  "key9": "64x2GG3E5iptrJELCK7PiUoSejorX96JBoHf4yg8BrQscHBhMZ5rwnfL93AjMh8LCSfZFA9QafxAHaKfmx8qpANT",
  "key10": "RSF1QqXKZwQqHe2DnVGMfFMzeCgZktZXZFTmMtWHmi2wsCpitqeVAxKJAQWsrK2pkhcqvGrDRDVoHFr2GoYs3Ro",
  "key11": "46BMFEVAJVF7aFAgop3jPQ7K11ViLAnPaDzJpaDv1UvX8qWZ6HX8BWjSK4XKRoXiap8YJYwJ6zqKELgofQoFjQ8B",
  "key12": "48TDj1RiAmA5t1uK8pYkiLhCezHNPrgwYR895ByV51oaMpywQoQzj2QCBUKtpUVgRbXxvzTUdnMJzy1DkrL56uvX",
  "key13": "5QScd5EEVsPYRzkaNiYVvWQ4U4MQnDx4hiuhFtdTyWRaE8VGJMB11JS8qCDPFg1sA8q7sYDJanGh9wxseegMLiZU",
  "key14": "4PU9xEfP4jcs73EzB5Bn5KjrZwmWX9ovV7Zz3eWWQivjzjX4qMPLt72DRaFAy95HRZxADaH2vTi3ps2LQX4qBcdY",
  "key15": "5syFanmF6pVs7S7rEU5fduXzCF2b1b1CdErKFGTdRxEjJe7iym6qztanqPztyxHSrgxer3SCRL2cV25Tctqqo5Y7",
  "key16": "5FFwxmE7zigYgWffaR4Si9cCiGrN1cm8RWi2Z12jjm4TP8HeuKPhfXYzUjQxRj2PpTRa8LRA9tfqwsCvUb8zjAeG",
  "key17": "2yEXxMyKSiuhcMnPoeRGPXAc2zpAh4CiQZRpT1oXyxYvtSRT1zGSkaLpyMyP9tSEzDUzWC9HQL2mCuLb91cniRmK",
  "key18": "2PR3CsP6tGHQKSDnejYWRDA3QFoNPKNQzxHnS6kZMRxaaqTFhVV3B7TdNqHELd3a9z8yoF2hd12P4CPJEpuy4uAK",
  "key19": "5rdeKKSrSjhPxr1w1qkZsTjFiffTgaQwv7qyhvJpxG3xQvvrxpEUJiye4nKMkiRfKLosVAGmtidAwCFPooostab1",
  "key20": "5aZ7f1AYkACfGqYrG1gSBKymUvVBFEkLazTxCatfEhH7hA3mbzrtHazEza7TNbrjcdYirFahc6AVMuXG9Lh9nTut",
  "key21": "3zwc8sX6AErbwMPF224aPcJGqZvSi7Dj81xpbsygyYZb8wZSL1euzFdf8AZmQZzyPoC4cy6D6aKmF3gDsidtMoAE",
  "key22": "5Yoz5ttqD6vHq2mXCUtBj9kbAbY39e3ECo7wVUVRe235goC3L732Sz9vSGCm3DzKogSDmXYs9njhA6P2QjR3Ry9x",
  "key23": "5muiNMtZRRsgT3FfQeYqYNYuuUoVSzKqYcma6k21sU3MqvcacktV3ecaUsfYytJJpU2yXGuCTA3eZpzRLyARGFuV",
  "key24": "5A4h5tVHkm8X3wWKvRGRCSLzWvGmrn7DrVasUsQuW8Lnv7FCwf2Wxhva9xWH9cFVVXnGp9BqkwcaayutpkrNgY2h",
  "key25": "2RH2mwrAbLn23svXjk4WZbe7ux3QcCborJfrpbPANDExwtUSpAeXbhZxxKyJvuhyWGhSSiyv8H3FtTCGjSX1i4pW",
  "key26": "2xeSMaxqHqb5pti1Em9N3QXYwfJ1FptPKuamdEpCKGDWcVactJuMKnnwMD59drq62ZX1cScyXThNj4iomtg6honM",
  "key27": "3TGUg9Ct76knETAevPV2Te8fbzWjBFMKANHVzrrCjaucyy3BJDwjD2urMRo7kFYQrC2BnfEcr6NKQyHYrzWB9tmB",
  "key28": "PnLhWdvkwkU4f1W7TWBMhvuFEquxF2uFnV5VZ3eBZ5uAT3fuu1HM16spkHs14CQswQFvChn961iJdbn8nwksXdL",
  "key29": "37c9vXQBwDo1z8bXrtLeA62qdq59y6imEJHUVctT8eManTgJnwKv49i7WiuJMDEqwnxLDjgSvyc7Kcp4kfBEBKs8",
  "key30": "24eGZQbJRB45iLkD9ue1x5yXkLoaA3F319ptBkmWEgWVic91Z7QX2GWYMy3GBnm4Y11VgiVpGxBQS1S7UFPgg7nD",
  "key31": "4MnT533WCMUK1BgtEsQaVajgEr2yiHHF5pgM6DwoCBFFrzCXMP69sWu2mCCxy6Nx5U9grVCkDHg485gho1jnMbUj",
  "key32": "2QJdYc1ChfDYdGAGQSME1nAWrkQKZtwR17QbddtFhw5fF3MMbvfWckj2RYp9NS74GodXMGZbMpMaK88EnAJ6wcp",
  "key33": "3Aj5W2ugZMuZw3GhdtnMNcaLYSm3YUzBRk1CLSoy3hpyRUF7bBTPFC4oE6vVHXeKjgyG6eSRvBtkYWjAPopqopui",
  "key34": "wLw6c8o2Py7an8XyR8bED413m1658m3UegX5WvoVjjR3FPRCmd6PR57m5znWmKVJVNBDwdKZfbHsqPsAPLRFzeq",
  "key35": "koERfMGdjXSzNxzYy2RW9EfcPQuTa85qYEC3zMtVJDAaLaDE5zACtJAZXwrH78CHhC1HDkcbadgR4haEr8eNMsX",
  "key36": "596diJyUVrkmx7k7zD9Ncw6ZADj5v8oeHn7zW4BQ8mSCUT8W3JFyML4TAxsx5BJnwjowxWgK2MF27mgB4fVsojgu",
  "key37": "2Petyj11Xu47udnz9Gj4TD37deAU5AsCBa69J26NhtkaLzFnST6pkat6ptpWVH5tp7uHnzLHaL5AjdYJdjiH4YL7",
  "key38": "UmN7j2no6LiHX4vBtH5isGN6u35t92XYacBvUQB51TG5RhtbLrNwEqfAGMLycXx3Ea4n2y2s6MSfPE6V9zWRxMw",
  "key39": "2LAKenJgJSuFWw6bdr255Zeew7eAwZmDe5YPGjrrh7yoD2NTFG7YF4HrLDEKPbCp9wUNHJpJ9tf1heygWjFPxN16",
  "key40": "3JKGMz2M18YXywQ3baevPnaNtEhFCmvmDNysqRF9Qj8NYv6ihbbravTgkCuF617WhEmF5ieBSA6xNC9einB5DWJB"
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
