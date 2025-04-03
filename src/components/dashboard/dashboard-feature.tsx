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
    "48Ja3FvhUAgoGHmLh4cap66uVh2bzdHJA3GcH7oCU5dsbSJ7a7UKD54yqmtovpfMA63e4z7UGhT3u1MQqk5fbcTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kJ47R1ZBrgBVXaL9XeDuyokDpT1DHbaL6wguS4rYNzhvfbv3bia3LLZ1C5qv3z5sQZL5nP7R9LzsVPz3KDV5gpQ",
  "key1": "32AA1vDL1QYsgkYWRgfcHDrMrawuV82zpR97Wdx4DvVEonu5x4XGKSvUq9fXyAsfnMzJRRJp9wciRX62bGraZNh5",
  "key2": "67a2xFbsNxruhxUBaKBxheofKcJcNNfQHMTxNwWgNgnvTAvnAQcjaSamqpQNwEw88K2uSNdXDY9bWtSCbFj6FgaV",
  "key3": "32TXxdaE1qUeKMXTD8xRxMYmzjXEYwEzaN6mfiMuvwDReWQmt6VRWYfgBUzc36dPBDLBVttfeYK7kaGHCPthDhka",
  "key4": "4D4FaZENhsu67gyPiyRv2e1rM9fmtyWY9DH6dPDtDQFzbVYMFq7GK7Tz2QfTQQEGWreqsFp59gCQ8wUhbZM8JQAh",
  "key5": "3qrxfr3RGsXdRWjwjQcGiZzx25sa3vAHfB3WieeBAVv1a8qZne584KbupdVE4xGPEfB3MyhLZyhU2Ju2YEsLm5BP",
  "key6": "d65yZbJJii5aEsuWTebK8GznP9RUo3qnftT6J4taXcmrVnLFD32pghrm5JfigmeAYW74PQdikPsNTiGUifbZFTT",
  "key7": "a71yC6UWYe1wZLooCVerWkv8VP2HLVTKqNTguNVpnVKFfp1EAPd8zVrH8DbYFXR43H9bLeqF7CAq7YGUaHFjM7H",
  "key8": "5nHZo8BAwPufMvb797mnTknH9bqA4wN45FCMSVkSb2SiEUyp7GhQXgAhiXBjRBz22TjmYCdifSze5s57JPMLVKju",
  "key9": "4NH8mxd2Jq1mKwJGUxgFUvdoLfLY2uXWbWuimg2FBZfx7GTTkfPLyUNuywTVBWwWBNCFvKkLDpnXBizwNk9ogba7",
  "key10": "4mgup6H1925fVT9SL44JnrxayYDwdc2KFKfRCpxtQe6j3gC6EeFpsxcrRQuT9e2hMbTFrSdj67DY1ijPgY3K21Aj",
  "key11": "2VoGN59rn2EScrwcijtBnX5SxzUs2ncfJ6r7UJfmm9FhH5v3Q3QmNvepBQxwfiTXKaEracV7yWiA9md6jnHneFSB",
  "key12": "3GRXYQ5nGVjYq6NeeZvHKDjrZpp4XMfpDJ4G3GL5xUfa7hTfM9Vxsu8XJWVD5xS4XyVjfrEKUat2hT1vbMpZ2vYR",
  "key13": "hKoakB3Mije5DURMfWJxgrxiC1T2vPp7wjME8V2T4snac5rhfxcjrfek4HkgAnLcAzRjLGUi9aPw8UzWA5NyWsK",
  "key14": "5bdh5NSpJupobBF38Hf9zr3w4z3JfurCn7mgfcB6BWZtFqTp8tSrDUvzpBaSoWksNLA6FDcpv53GHbzHwvL2aDPq",
  "key15": "4KvDrViZE1D5YW2Hw3FhJe4UacZD1PKgLWuwX5rxZFyjU4Z6hrzwyQMvVDQZEWbspNfvgQ1TuZJv1mwuGSTivgLw",
  "key16": "4x7K1as4u4DNTZGKgDk7KzBMTH3U2xqMFjBTnThUorqLKVcMUTyTc2fESsUkHSomzGUiXvFUCx5sUvuxQu4G7aT3",
  "key17": "27TJNtorqfjLmNcHij4Qc9voguPUjzxsvvTL9c8kbj7WrpvaDzXANBtJcJvi2zovuKNeAFmsYH9jTrHx2y4oBPKd",
  "key18": "J8ozApMPphSMe3DKFxGyNM63FhVFjX1yactZ9PStTcQXVFbipgkwfJV4L6jkuou2v8Y9oPwn3FWJy9q1Y5tTb2y",
  "key19": "5W4D9sUBSwjTjpKsvzTeKMUokd6fEBQGz3nQtdLTWWmWmvLxM5KmJUeknJKz3RNcPCTJKLuugXuWuq7JTu2WiAWo",
  "key20": "2FZ2ukmAEp4R7SYfgBiy83HnBTN27Yh3JBnQxfGB1KXbguwthkeZAXxpVJuBYdDJEcbtmWkxM5AB3rB6vdhy4tov",
  "key21": "33D7HXzQ9KfM6ZoFAvD4mZzNdaWhnfF8jjSJN5KGx7t3pw1fGe1MvFWrE2gxEf21Pxz2RE93L5N2vDreZZC8Expv",
  "key22": "2syeaT8B5U3hihjxYDHJ3FU3FDDbPbgC3GCVEGw2eVgNL5usF4CqjPYmT2RrA4XT4Mn9VnwPMrmHQpPfzvXwTRvG",
  "key23": "zMkgNdU5jXK1zTz8sMiL37DjoQZqNkJZrdwMUHPfcFsyXdPdqrGFqC2Pt97jgQbAwpwipMdmv6dJKq1diyo1VVu",
  "key24": "4PBufuXmZwo6hG1Wu6HfKkUAwjpji22VkzkdP9h58mjCuUKgjAkQRvcqe1corMmaksrJ87FrRZV2XojmUZoHpsM3",
  "key25": "2ayevFLaeRn93Ysv4oThNXkMcnnu5DGub1PH5ijJTtKuzH2HysiexJBJdydMLLsfx6ajeoKuTvydmszBsPLQBfTQ",
  "key26": "4TSqZLbqHLqHJYPg89744Uy4PPvBQaB1Y1H36ddnnFmJGKyAow2GEsetn9T7HW3tqkdNF7yewShCk1bA6nRNsicD",
  "key27": "3KR4DqrdBFiPtFToqHCtnzokWDCuNqc47watKhTUndNEeCzHDneyepRHWVKpoQTph1pHhkWfDyF5WeYzaA9dVcb",
  "key28": "3R6sBMkiMiZbBkhT2yV1WB66CcVfnTpA1EqsJ2qpVEjDcgogPmTQgrBGGVMB6HFtSZzA3MdKemK9mtsURvQDuq1J",
  "key29": "2FECeSmTgp2TcNivyTXJSwGwnEMLbJgZgqVyE2Vcmwac3abHBBf5NPaf3exFLtZN9EJaSnN6ojazhB36Dm1WH9Xz",
  "key30": "Wd4UJPREdFiGxiN5Lkkt5R6NHaKCXm4yfwXwRY3Vh4qHHRPf1pnXCx71KAyjkVbwxp6qpj5QzTmQEEfkzBeznGH",
  "key31": "32KuLeengibQpYPcFM5KwFH3iJeRstMgg5csfmaoKbjGki4eSbCPMbZuuxkDnbXHAaPgHgnqfLDXDSbv357V2Xwy",
  "key32": "28hNTSXYVSstG7ckfwEUSgpdN4McshRT7BzvBeLUy26DFwcZJwHZZ3LdcuzUQrmgmA58ZW1yvpoFGFovu14C6yHP",
  "key33": "58EyNUkcF8evUmQWCBvCn7XicMuBF4A4YFVdESRsSiiVPv5oJ8RpBB9zzNyhXYNdVvBBVc3FDtdchEhWS7f4iCCx",
  "key34": "539kRKNzVWomRrRkCNGhthDUJzozTqMfCJ2sPB9cGYBtuXvrtTg5xvSAPMmEQzEh5hdJ8cjULpXV4oobWLYNNBwG",
  "key35": "5xH7wxQnPaC6zt6CAks2jFhFoNKn5ebuiVbUy4d6Dhwwp8wfSYKkKHFghsvVh5MBXSgpY4UfbEmBVckwWhxBgwBQ",
  "key36": "5HHtKbJEo8nnRxEjJMk7c5hmMrHrz4EyU42NKgC57LEuc8TBS5TKazWkPbkjX3xxyKe7f11EgPHRhwZ8u16UYuyb",
  "key37": "34dFKV23ndoQ5Kwo6M58dBvoFQep8AuMcnG4r24PgTQg5YdeomiKSpxdjixqy86mY5mWhFpQJJB945ESAsEPpLMh",
  "key38": "4qDkgyoUzdC5gAHcEk7Di9AoBMWip5QhpvgKJMdpAN2T3fM4ESgjLd9kLYCnDC97Vn8SAoYNWzMzAm3Dfp38Le4n",
  "key39": "45RXVKr6XFXp42swrbmmzeZheRaXWjs3tSBQPSmG1BsK8XJp36icjwRT7e8LuyHvxiDU2KuwFTARzjTNwpun72vX",
  "key40": "5vxJeZbqrJWY921k5h7LsR2tRtTtCb3hbNokmVb13nbiJAwT9B9FhzVGVX8pL8nS8CgBBPUyaYMqesx2R44JMpCM",
  "key41": "JkLvvCwCRQhoyNZxdvzM6iFr7i66vpkSF6e3ZaHXJpcRoAvR7w88K9MXAwU6WGHv4BTjArY8NE59dsBc8ZcHJFa",
  "key42": "cczTLe8ZmvXpRvQfeEeoqPMrndxgyYvho6zMmTtXSByUDz46j2xmJdRBJTJQvAbs5HE5BhJ7WH4mxAgejgpqUoc",
  "key43": "661Z7tAP3hgPn8edBv3TYwuB52d2xi3umd3WEz3kxk4sNktymMXH547VKynfEiiQ3v9YRrsyW8PgWVEQQPGU6urj",
  "key44": "5rmjcGFAgdxoCsf2TvnjBUXyotLH8nt86zvoXutomhmwXbSpdreDkfK4jjNGTPCspx83rEmZM4TZUA7fWMAuHKf1",
  "key45": "5SwxrGvar5DJCEFCEuR5ExfJ22WVVhwRf36ZgmFeubYhkntFg6k68Pkfh6UArx17UYZhjNnsbYiEAHuKx6QEbN7t",
  "key46": "5coLdP4p8G9baMGP9hFpSMGtgzXHwyPLge565jhp4w8ysdFCP27ggn1YKw2PGnD1nWpuQGU4oEJq5FMR5mXae72k",
  "key47": "4Gkb8RCKbnvWjQtRYN35ZfYQdVXTZs885nwQ4K47BZ2Sy7q66M1qnz4byRZHfrGKBF2aFcV1U6E8vU6F8M3tot82"
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
