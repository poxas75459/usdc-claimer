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
    "2xR1qUat2ydrFUneCxFDCzLwiz4qG1VynssPX86nqCa2b8p6wfTdEAosjznLYqfhX9ddCizR5jwG3QNYQEuw9cXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wvip3rsHxU6PZ3BSFGAd94ed7ei53EKeoZNBBPi1eoyLLVCgzTFqgig9KK2Rx8rMAXNKCc3FP9a4Nb23Eb9XeE",
  "key1": "43pdhoGkqMTd5gN5yi8uHKYo9eV13jaPt2Sr7iJTkYL9fBYbrTALaVfj5Kc3SeCpuM5j5GESoLEymkoq713RC512",
  "key2": "23hzP53RMafQMbdNW6wJkdekMULKxKrwjFw35eNQckx1eR4vStxzb4ztmnBtWGC8dn6dhtwJUmJehU6ij9nLwDgk",
  "key3": "Kv1YHzfqPshbUh9fRy2FhpNnk5JgAQEa7mmZ4vvhCF4ybFdEP9P75S5vyJMJWBQF5Jeu6cBUgU58YSfGVavbdGJ",
  "key4": "5Nx12eVpVza39yk2tTPmajsreFkRD2hun3tNYCZMhXgivEX1B8XhSfkpEA7uqjN6289dSkNJLj2HbwCjMB4fofNw",
  "key5": "2MAHPX83Fufjws1d6EKgRBMG6m6tuhBDXaBgQyHQUq1YeRunv5GD5rL8bu653qNeyKjW63jGkhwvfte9fgWiKgoE",
  "key6": "5sYimPhZysvh81TZuLm6VQXhcHY2wNYvSAbeh6aExKaviGbc1ubx2CaywqakVmwsLjJVcUWWpbLBoCryBrgcrzrT",
  "key7": "6363X8NsXcBsDTY4AxcmE7CNvqJLSDV7uF2GjxDMP5vwxuzbk1d8A3fPBYWY3gR3uSCfQGb6K5vyv9LxPeoJWAwn",
  "key8": "4YSZoV1dKyNj2toNkt4jKHM4oD1J1xhk6yYPUuZWPyQKTinf25tvjfNiUzPxoegN1Ka7RVuLCS2D5NHnpEt6mEWg",
  "key9": "2G8unYPt4gXPGgcatdQkkwrSDRcy6kfSyPFBjFr1oKVJCRvWij2AxesLk6Ns7HWq6UXwcg5B11GTVuneNYdXTyWa",
  "key10": "2DHzzV9RypwVmCiTFDHkffeKmpxVwiqwTfbzw6t7fgGEYYRcxnGUyhajYRnqwwfjwWoptn7abRyZTaZJkmdfppZi",
  "key11": "2DdMM5Ns1hJGpaBPbWx1btw8oVy2nWU1JjKaRiJZ2R4F7sKpSFxsCi8v2SrjmDzBXeR8sawtHEDgRsr8qA91a4mt",
  "key12": "3JhRm94AsDgRVBgUHabPLTzaY9XCWCRtQqtmH9jTfa7PGxqbypC8doNgDD8zQ6urqgabkYFnbcviXhNgFi7qfDKr",
  "key13": "2dkEogAsaKcqwdWD11CNtF4cKQiazGGM5zGSBC43kFveH6NZPmheLBmbBiPrxm1YEgh9uFcC1EVxmKUQnMbnno9p",
  "key14": "4DWSmdkkjfhuWx6mw1wLPvTPkoQuDzX8iWRRfGASajG6yiQ3T1RzbzKQECzA98yKcd2DxMMSiecbt4Z3PxCxbwgr",
  "key15": "4MbiQZsYZa1gNvU9QTNhEVqdd3SWTRDuUqKJqWSzqJ4usEPEuUPPiEAjd2Hxfa2qCDGAWcxJLYrjRtbrjvsLXiGL",
  "key16": "21AeKMQEnZZVjeQUWEv7gYPggxT6Ji6LDwH4iCbMasBvzouq8nHv4GdnBzJEYq44ZwyPD1gJADnjbRn3wXfGY4a8",
  "key17": "3kgwuqAQxcNyv1BpWheiU6a6goNCiuZgoG2DrcivUwvWKN4MfW273MpgjUm9MdjTx99joA3s46BbiW7NjKJBmMD2",
  "key18": "4nCJkjcg3ziBa5FXf74w4kc1Fwb8U8AnRA569TUtVbETpFpcVKa1pWE5Fqyx7S2H68KZbN1W9bu78ovZ7sJxwMXe",
  "key19": "4LKXaNHryGWrRxx8himLhSgev5PLtt9pfVU4jVNFma2E5VjgwatoTeM1yH6feowzYN1G3STTek59rdkDFvDk9dzF",
  "key20": "3RWet2NNPzLjtCK2n9wkjDWHMhuNG9tDiNFQ6PGA5S5aaMMvh6kDzSVrPZV4Vcp7qoVKeSqSwjA4VwnitV6Y3PwT",
  "key21": "3q5L9D5r3Qj1eeXcTnAavFU77uzKMRFByom9xWHugLacTu1Vg7EXkSPFyNuK8qig1xusQZJrYUCqLMJmSsH9gt2b",
  "key22": "q1ZzrX4UcC8imEorSheyRhngsDZFA24q7GradABNmhd6pUyfST8mf5sSfhJqiQreTAev4eTmNHqCqciRR92EmA4",
  "key23": "1k7VnTE3StRS4ikwDQiq44fGCQfxnku5MMcRwzHjyTzwiiK7CkJbwuEFQdndP5TR6U1g3ozZ16TBY3aQjTyUKVg",
  "key24": "pjTfAxgSuB78jni8r9xEEyevoDXn6eH13KoEGPsfnwxybVTfbvG2pRVVwd1qc5pfcuK5vmtPfPeiymmpaP7akcQ",
  "key25": "Zy1ohVEhvHw5FRpm4zkQgXREhpbKGY3xXVesyDypFi5GeZ2sSPJ9CY1WDtTH5GVgS2LiPN5UszPHnCUVrtN53eA",
  "key26": "5ufSWdSQFQVfaGfxN84r8x1V33TkbmVCDePcBexnrWMi2A98vjBnCEik6j9oT1UkPdwTFs2FHMWrjbSbEzdNLbys",
  "key27": "3mqsqsCxrhQE6fUh6JoSjX5vMSqxAjkGxMK8LnLRMMZAMV6mTboBtq4tdhXib5x51VCgtHfaSUgKgQ2g31yR9iiP",
  "key28": "5tiydhLA1pmMuia2bBYaBuBNJURLjs9eMij38gKhe4WRT1d3NnfTAKaTmh9uNbr7NubunvgNNmGGWjsfJLq7L13F",
  "key29": "5N3jyggEmZDp6rPVyn6XzJFsGJNYTRFkDNRzr4wDZZE1a2hciqY7FjadKqJt41fvoZ7PSyx18RSGwQTrcoo9RYEV",
  "key30": "2q3Wez16Hj4xMYk5gSyMb9m6i8b15by6t1ZPLxS4EWqQxiEjUrsVg7uqM6PoxTRPSLRvyS5buMfHb8rK45D97XmX",
  "key31": "3yFqFSez7PHfSD3HiV54eBDEJ57pi49QFXotcDb5bRvF46ceinp8zE9oDiWEQ34uVgV61RheW7kFx8XsGK5jycEk",
  "key32": "2c3DgzzXPr3gqhTSixhP85dFaz9gcjy29E57te7eL2egzX2PamN4BDZmb3WMFDbEDTitY13d2swHsK5Qurapvoqf",
  "key33": "8kUAZDcfcYNGUuDL4M487wAkn7R3iAzgh5bEhRLJxHf8wC7HwwFwVjAgG9pLhsGznh9RUUk9B5H154JvnL6YJyk",
  "key34": "5fuXrcgUUsHUcwhoAB4uLi4qBUj6tNYeRZ6nSx4ypbYXkmNNyvrhLqZc6DhteZidJKJm1N6FvJo6QzdXp6nS1CmR",
  "key35": "5guTUfdshY3fiXLPE6MjhR2xGtt62kFuB1JTFZzgz1ZykKwhpi1tytBY4unyz5WqZMT42ePzwM2neCfjSUtDxCJ",
  "key36": "3dCPHqPDviDPZdQMpLof7XFTSufC215Zqg62rA6sFuiDz14oAJGZ3kQmFUWRGrviJ6JdZVSA2xi6hJtfDA8Ki11b",
  "key37": "3Tq8zkopjKDtH6KFUnaLbHyLhsJ2a9t93BK5GwdoBfApvr3eRf1mNUZBYRKFCUvAnDXE34huYQqcZ9EhiBUqrPHc",
  "key38": "65LYx4kSyw16VSez1AKAxH86NURXggxaKCevCQffeU1om5XZ5K25Bd9dnK2Ahe3a3BHK8zrLVYxMzoo6EuRT7ijn",
  "key39": "efd5dHRstDBxBWUUpeP3c2Y8t31nMdaZvrp3EZJUbs16HKjMZgyhBykQc4ZsLFy4yoGhxLW3K4kL7ZFU4XxCajb",
  "key40": "3VnE5vM48sy2acek7NxPzBbPzp6WjT1zHxgzcV9SeAJq7sXAsBS8X7ebMk5Ch4APn3EXhxoPa7KHqnpMjdM2QV1E",
  "key41": "4puY1QNwcrEKXKby2KcKU2Vh11HSrUep4CKh19mVbEKJ9GKeSYzyVqLAoYgvRUHv3Hqn25QC48Wg89rUPZK3DBqH",
  "key42": "4KsLYoSje2g4g3rk3S2sgwNCs671WH7hcPkyvxMUwdA6JWbgtwvHL2qyVhJqxjfEBa7cPueTw11ANWA3btFK997c",
  "key43": "24bTheMXQeqVHNVVGy83TuzgMHNqFFFuGqYVj1TwhwP7CF6bxAXyfJMuSNWJAPkBk7UfQHt2CM7HExGZY3SXN3Gc",
  "key44": "sMkrVDj9FsEhgvKjs8wzrok5Y8QPShqt8iThyvFLT3JSoBzE2efyeXm2eGQnehRuFotkTiESdvN18zwRyGY6UUX",
  "key45": "2cUqzJhAzY6i71PFd2J1PKmm54sLXcMfNnk1GF1LM9jP6mjEhLHmpk2kSZyH8fBhMkZmxwEsusEe156wg95mdXtV",
  "key46": "3nP4qGfGESWMgCpDmuNSNejfvjQbgWKhgJPoqQeXWHhZ7LMQvxPUd2SkbBFF3g5yNDgBLWsasRLyut5vxitMboVm",
  "key47": "5781uwPxC1ZkKS4ztuVjYej2q3PdDSbkhUNKo4kEQkTs6fcj3HmfXeEjYTY9opLnAh2svdw6LEGB624UDGpAb8FQ"
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
