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
    "3HGmMwAfjKQJY1QhpEcr8vcFKPmhh6ZDJdQaEibMpqQuFwGT5Hk5aTQPXh5KFvVyxoryLijQcrbkwCJhu8jidprX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ePEfcWuX79RLCKz6K21kx1F2f7FJjAKZB1U2Fotw93sbWpH4PQvZFMifM9QKyFz1G3fNiLCZcebEf63nBNsskmT",
  "key1": "2hZr9PTUxr4umuUPaebDYh25MitQGz4MX6m8yzhTGr5A8XSk8QpsNqhGHRBw29ZkdywD86MqSvhAp2ZK5WoYdUiZ",
  "key2": "48aazmksKFoSLpgqmZDhYeSUXWVypgbJEECtgLGPyhVnKGKtFRcxhCRKJy8YsLniwh16K6jB6rAUv76MiBHJkQKa",
  "key3": "5aNC2nxXgtY2F47K585bWWApDpsGNAWFSMKqouybfDt5rdSQ5ry9CELHbt6ivChpMAn62WrnCxM5SJb7pmsaop5m",
  "key4": "4Cr5afFtPr2Cxavcw5z8NwiAHwqCReoSK5ykECTy94P4T41te7Vy1kTJVLRoYJyzvscXk35JfDCktbmwp8Dj2hqK",
  "key5": "5B3gN9Rr5b5EgzhiFDqmYxYSd9fgcpz5ubw5QXymfDKxMHXpTHR3PiqqzsESS6YNHYSw3cNwjEZXoQrb24BJEtLT",
  "key6": "cFC8eqvNhu5L9AcitDbLBU4TTNECHnWwu1TEozJCY13tMQYwteg2jHgN4jPh1KP4pgsc7ifZpzpaRJzS9Z52i7z",
  "key7": "47NYi7PdarHzWAnaP3uQPay3W5jYfhWpanzqxPqsvTessaSrrN1MQrxEyXmNh7f72hDE6GEAfsFoCZGYqZbM5KYG",
  "key8": "52LNq1r6aipFZSwVtDHpynXhaU6RpTBV5r3XGRtTyZX2zXF4ibrvE6Q18oC9vGJKuqUrovDhzMSirXxaosDL55xL",
  "key9": "2xyepFPKBEZ4v8UrvXuPcnTkwxbm9pvSSy4DCq6aXJ8Vc7HmA6rT6WbpogNG3RwjYbmwcBH93iFxe3AqmBhGxdv4",
  "key10": "4jWu7wpoj1i6d5vBabA6zWzT2ix3qCrFAf4f7cGWZcsvkUR5hS62HRqMzvQoUdhTLJT9Bd33TP2VbwGV3swNB7Nx",
  "key11": "4ZTjemm5jBEkhuVvjTEVJBC6UaHHNjyNvNJ672DfjtKAePrTSQK5wDMyEUBkP3P3Zh25XbTRMy4mMjGq7bbZajfa",
  "key12": "8i7qAppTXfsLYwSiBHcQJutSFyccAHWA6QpQQynZtgEDdRN47Bq2MNikG1yuca5pzwntHWw9BUBQPjjkasAQTKA",
  "key13": "uzdGgUxgCfygDHDnf8F13zwU4qZ5T93zm62pi5fBHjYHQ4WQndTiAia6Gn8o2xvFD1vijQrxCqbfsUNgFMUFVRK",
  "key14": "3xT7ZGVSJhTF6hSgdqkHS2QcJuT61pf7Wv67DgCn8gVfu3BCbqAE3u2Hq3AZZoX5DfaZWpmL5H4GbqehrVMWvK67",
  "key15": "21ReCjo4UYxnpFye8wXF31TeyYGBw1cQ6FKJDNhyRzBWY7RrD4u36o83jDMqrbSTNejyyLDC34sJPa1EFJ86xu67",
  "key16": "BkMFboHEvspBDCDV124U9vg3mgBFW9fz6aVFUWMT4j8pfgsg6xkj9fZamVnEmPmFHRVYCqyGCRj6Xjpt4ywRxBb",
  "key17": "2BN4FZ89rKTuyUXo1PM69K2YTakwYTQVhz7xpcTTWxbWVxCfh7uRCGLiBAnoXv8etUfHEBRkwYZ8k8KUBy33T8mG",
  "key18": "458WXjBWFYpVNUgwDwUHAZk5zk1CZG8Heg7bsJm98jVoZ77DwPnkRBfQ85zX6Kf5Qh5Q4ztYVc2CueGtTsp9D8T6",
  "key19": "2i1ELzEFdGXBo9WeXV2nAMyTUPEV7VFE3kYeQarJLtPEmsXNdN5LMDKhiQcs2X8hR9YxyQvUuF1EWNYDf9ijNisY",
  "key20": "5BJAJcRRPujfgitoKbKR4BPvy2DGeDPcDtd9kNe67AkJY633Dg9mZZxGETQ8AxV91cxbemTucN4K7tDTNYRbwsEo",
  "key21": "5powQCR21nnYkQqEHYf6RzwU5Y8VxUfNtdXzpGUDKjUWmzHFEB3Jns9pfDy7teTkDDBzg27DtTs7NTpCcyCUXTc4",
  "key22": "559ppuNaWQfkAUE1j5pU2HPRRJ1nYVgA5ppyP6goyNiaJJpdexAHhvQ8cdccucFUg4nG5GizumDMEfzDrQ1mjhQs",
  "key23": "4JMqfkYt4fXQ7bv4JQEeJfoLWtGB7L4tZReEhuhhESzVrL1cD1JAj1RRQs4zZKW5Ji9qmotq75XrLdfJtZ4cAPgt",
  "key24": "34YbmBeB5u981KcUcbQ6FFBztej8xKcd7wihrCwdRu4enpwcsEWTwWMAcznrDm648Vt1uV8P6a6LQT11ByHCkFpU",
  "key25": "FaLCWqLRPAbnffGXosiJFbKLNTWbgbETR2tRjuKqb1QzDXQLLgzMQRYeEoQT9R3k1wrPcnXFzjReXuqYRK8tYSi",
  "key26": "2HY1aWTJGq5T8ZnU1saDChRTc9y5RV9SVZoYotvtSgLLjyEV2RWhimjSeEFfKQHSWRhh19HbX8wRsxCbekatr8D8",
  "key27": "oLstMZYEGLj5bW66tVYiNw5kxYDBimxpC7rZMuAvYK63mbP7kBhQQjvWrvfBJojc69ekgKwz5KvY7bGWR5iiPgQ",
  "key28": "3HSi67DLjkVfATt25JadAm4L5Z1463bkxgAEtfeorH5Q2pJfQSRUxqRgDFiqaap4QLQmeQaCKF99rbGCGhLNX6j2",
  "key29": "3FjmudzPbWCsthsAMnNvx9KX2vQ27USpKbThw9WToStXXkGieHEr5vVXYMbyCuZg2pCDRRMjbLVNXTbqkTfrhNyH",
  "key30": "2NB3BRj1WJjcH6oBB5TUWXiavHwuZgphds1pwc7X9HeC7KDkTtMRjp4B5U6Phyo88Tac4fuD55BrZCnvpSXWXVdQ",
  "key31": "29CwfPnuogAJmG5xF5CAvKZpQwLNowrcCg2ygDM9Nh7razza3PGEMgbF1mik3oZrCWThAL9uWx1JMFG62bXPzwLH",
  "key32": "219J3nA62R9KAFeRkzc4LaweJeL2hhLaSnf4SXQymLBgPQ6GaQa3dxfR19eiVQTVnUFmLuujEZahmLrmtbG9TjzG",
  "key33": "5maiur2AG9uZx3KsHX7d2DjAphFa8Vce1EAgm9z4yVcPzrhXGHWh8niTMdEJx1YD7aUiQVHRmYvTfD9U9TgGntBU",
  "key34": "4zuyjZ3y6BJuZ1TQAcsnhnHvxEaf5sq4RtdHqPpwwKbgyX9NJRAcSgJETcFjzSqgmoU8mYziBR1ZzKjTgYMWCvWH",
  "key35": "3NbLzj8Aefh4s85kpHWdrvZZ4fGjCZ29YtbbHKiG2voumteRpYkdYGmgYStAbEHDs7Tc16v9bEp9EPfk7dKCtbSM",
  "key36": "2Yhne4za6myPo34xVueYAQQTPf7nZmwDvgx1NWoYBgzD61wotauXgf5Zu8PJAq9B3tRWiAtQevd9n9wLs3ChcTP1",
  "key37": "3XTtu8qnh2SXEP5QVxif7TwdHsUFR5FSHG7uGLHnR8Ap8azNwTWQyxe9VWLbWTv6RTbXn2N1QatjE8Y47X3mv56V",
  "key38": "3a9my3j5ktE4w3ieMEd3j2SYm4w3sf1cWU3mMRQaaandkmB2TYcJVqdPg34rAxRp4Yz8tc9rtWdWgARHkukadutE",
  "key39": "vKaPrxkcFxtgMU5upJiemX6zHPWpd7kYbgFaDAXhwgWZGBUuC1sXhJMmThmMdpm1QKBybdCEjjt55Ws7xRNnqF1",
  "key40": "5rpzRT3xxJuwuYano2K8U7E6SQ2erdBQoVUjoZxtuU3dVfDTs55KVf4fU63guyA4gQJHLKVqyZUUP7QRZynJx2L4",
  "key41": "47KpPbdNsgfDJW7d5MJysreuFJP5pL5qMH5ehDrPjh7ZbBYXE3dXXtwVJz9L4qCrNc8oK1t2naSHF3AyLa2KB3JS",
  "key42": "5M3PETjYi2sCR7i1nfJFn5zLFtnnhwrE8eTURbz2HVsJYgu8AUwDr7cLr8izd9Tqtkqs7K8Y9WLTiwHZt4qhUXRt",
  "key43": "4JT1ZpPdZgiBiWfmQUktMjw1zt2g9tcr7CHBmD3Ps6PpAjKYh7a6JMGTdoeYb8CfYskC1HCaMyd5rpdcgS9ryXmC",
  "key44": "5wG2z91XnCAjgaVCvBZuZWYpWviy68MgNyUBxzDWjXt8TYb2VjvDhCzyoLebfpFDGxyVUSeZ9KPdgCmfyq7QwSim",
  "key45": "2SaAZfuyAQoFVteVUZJVCwvLxXapzceh67rMGxpbn8LhXt2XGSoxdaZv89M9SSazKdNP2jUEVX6tSa9BCK7yiRh6",
  "key46": "4D8cT2Kj2u74QxwsryawxbGL8jdRH1TYGFyxLTkQXqim8LBwpbibeetGcMgkKLdYFijpdbpzhNepFQs5UYi9RZTY",
  "key47": "5fE4G7d1joRE2xQJDoS1xTdv32r12VrMAqs3zXX1XQjdrL4C3Mz4zh735nq6xHc4Uyyjwd5xXCc4KEEKuUA3oeJQ",
  "key48": "2cKVPSY1QR94YrSpftJSHRQB6Ls97qXN6WZJfifMQhvm1Bxr7rtrpJqaKAYAXUoULCdbb5qk6f1XC6xQwvvUuFgy"
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
