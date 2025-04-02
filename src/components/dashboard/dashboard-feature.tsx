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
    "36j8DXtGs3rKLF7ThHQtSDvrzmcs3SDQWK6dmhpeTzGtjCC5rLVXkdRveFqBUouV9SnvD57wyaPtwMHaJ1y5diAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tETGNuM95U25CbPGEobeN6y4SeQ5Jmi2qGzahCxgoyqWYxbcMP4QagnxvfXUa6WXWhqAet3SqsbG69WpjArSXq9",
  "key1": "979b85fUhvgX9f3WjmaHo8kVAnjk8h3LZysPcJ1XoKtkSr9D2CpdqmxCG3GkjMgFzwrQAEmfEVW6KLcwzpabSCQ",
  "key2": "52Co6NQ8ZddQ15EYSK2qKptPoFE3XKaoHf8F6fNTfNvFxzHe7rkEzzCgAxpFsRDiZranrgtDgx1tPWcbk4fCQwHF",
  "key3": "4MJYogg9PHRGMxW3WML561iXPkcHrKzWaMJqvUSHN9ReN8U1FjFEUABG24uhyghipd2bkn6GtKBvNFviEoNRQXa7",
  "key4": "3AGZRhtg3ZKK39So43A1KB5cf2SDQHCVM4t3tvySPhivkn4crfra7yxkDs9Fz71v23EtQUyHFtnyTiKLnZxc3Ksr",
  "key5": "vMCBZ8WFWK8xvtCRoh5cG1neEcWA8byva2c9BHx2LHwtMVV3XAM9jvYz8UaViRD7sfGTEeRS8qW9A3ShDAaiwoM",
  "key6": "66kjBToCSemQXLw5busgiYhDGzEQrN9ASTEv1L7ErDYk8mYQwmMvpfFh4JkT4RTg7NSdcHe27vKnVXFGeikFzn1e",
  "key7": "PxhmzTnDkBVPp8VQsX866NK2oiwxd4rXinZ55S7KjqQpnFG7geZm27m4Zo7cyUYvFoMvzpSRhhw2P6oCpEeWdjb",
  "key8": "3TBgQES2Jc7NKh7Ae1iGZV2C1Q7C2MYAjhCnP2vHsrP6zpLK82rmuC95DMB9WXXNAhJ9STy9W5JDgaFZPBKfqkzv",
  "key9": "5XfU4BSNrspKHqqsYFjyQmfTBXjvKYe6yKkw1GXqC8NPt4qmArHCnmcLkAgDwPXcNJENHNSmnmCZKdhVQGkrmABT",
  "key10": "8HWzWh2SeLF2T5VZF7UjampKZyJhaSUvf8g6Uv8cZ3WdAmWdnf4ej2s6UYgGV3t59keC7yaPMdiL7bPGvtXtAHF",
  "key11": "4wiuW2CbfzRruKVQbryTdzXQKTviXKve4yVCqf3oEyFTgeeRz2R1H89PktYYW64PGK48nQFU17CEs15z57McuJPw",
  "key12": "2fxcvVFMfkLjfH7ALpxAFLkcwzkfMcKs8LN3jw2srVdFvxKNcPBC7Y9bUZEPSXL3fm9EpQLbhPDGmAtdg3jivcLg",
  "key13": "3MfE3vp6bmBy6Vh8nVGoUEpBc2hmRhaevMMh2wPu9i1K6FqC3QxG7nE5NcuJScgPuusfB67frkXhRreaGXdbdWFm",
  "key14": "4W8yaLQmLuz1GAbCM3xDRvjzDoCQzh2uYcaaR4k28tb8Qkf6tdJTni2F6AfSyKQ3eQRE1BQ94z96Gcjj23U9L56B",
  "key15": "2QZPaAEADXuTkSwA5BqnPhwhVeirsTHeJ6fEoFziJTWHouaRC8pAnGuaNqJLQxEYnmUkwb1LFcZgDQ93Uaxu2FKB",
  "key16": "3t7V1W4SSuvYA69YCAMX1MK3Z42AFfuaSm8v984g7WohLRQ8hTApcuQZpqcPs7sKagCVTu7p7Pna7nUCJwJp7M3Y",
  "key17": "5xCc2Q7TbD8yNcgocx9LYD7A4uQv3mCwxa3EAqrYK2AAKhNpuiRaE9H4MXttYD8Tmq8LHW3Pa48dEpmm1WcuB2vB",
  "key18": "3JzyHbgaR4m2BKmFVGLc6qgZUEx9Zy83kjMgNkSdsKDVJmxAPDDGFEprRQQpE2dRCJJiQpFvFxkMJ2Hd6fBoVHse",
  "key19": "5Kud1DbhXh8p3myAzNZP3hMj3cCUE3hg4DXuPjxfW4tKULeyecxYaLNQmGgXdrkEEF7TZoWiuczhp2RXAVuv1FAF",
  "key20": "cSArg8YVBYwhp7fYJJhigFxXUtVVbeafejnt3txBsupZ62ExkgLGFsHq4RZ2hAJwHTHGqwd52FJ5oznB4vpNDy3",
  "key21": "3YmdVHEPJeoSrPDwyfHBfTMCJaSHKnMh2e99xEfMCbSKXybmiLpmwNd4WsgJoPXmbefoPqPWFxNfXmX7PSZSdjZq",
  "key22": "5hShWS7tGLeEAGvKCByrNqwnFGgGdZWQSwuUBLH5UQpBMgQ9kt7FwcZFF6pa6TBPqcd7t1CWv1iSnydX59Prmx9m",
  "key23": "3jBCuYUmNWHGkLsyQtPVZFftLT4e7SamjBQKkk26GDnt1w2vDkG1BhumkYfSPz1MdbQdJAqwefSi8fQrp5VZVUdm",
  "key24": "4wk6Rjed8iEpGJB9K8X7vSgdX9qgME2jBsU9KekDBzFNfMCqPDSe45HBJxvWVgsb4zV2FEkUDWpegNbq7YPKHBnj",
  "key25": "6Jy2UceZkgBuCoc7YJhRaRoytqvTivm9F2Ld3zn23Fx38dw27if8d9DhQdv6MELrsyqhdYCxwJ5pnLRZBRrZtk5",
  "key26": "5cMJaN9iXgGjoZF44Qo2VALG4hBezzpGhatjvM72y3g8kFZ7MUmhFmjTXQvyjWh2f1RgYL2JTkHY13kCyexXWzaY",
  "key27": "2uwKLyrr77828gf3YQEAdAhecFGQU3HU4SXqFRrjeJk4k2XTXs9fVnp5Vx8WNXUDfnzauBLranFkWxr5osdvEHit",
  "key28": "4HFHEYZV7sbSiDmbQ8RngCN8xGyz4zXp5dkNAyEcAu2X8NQuB7p9iMreTEeRKQ8Z63Tyhm3DZeWr5tMPXrSTUqCN",
  "key29": "2hfjvHAPk48TwnHR6ugyi7zEXvLKyzaSNfNiaqc4AwsFf71jC4wJvodzDyCuZGp4XJgArvWubGWMRidPYgcgMGLw",
  "key30": "46pgKEcTvcc92FimQXdm6fQb1dXqTU8mPF82U1Tr5bNb1pM6xsKEWzk4ts8gEJQfVzSBZ4bVtqWq3eGnJBF8GZi9",
  "key31": "2J6m6GY1CCpUFLsWUAN385Pdfib9GefaX6uCYKWYFSK33SzgxYFKZ6Vt2gd9Bni4rarAFj53abZwnK6AqHY7Cr3r",
  "key32": "3jTBTZX5kakkcTRwiEA5iPBNh9AyrnEHRdqac1Qqp2JUQ4FZ8DQNn3ENfndrtPFEmUfv5cvLk21HAGtSZBBMG62s",
  "key33": "62fnVbfZHLxeXMMRYrKZ5rzQsmF14PMXS8Hj8fEkXKiteYjPCvbnVP3fULCoE86qipykEMWew4nk2fHHQiGHUzex",
  "key34": "7WCdondzbgWuSvKjaEjj9HBc2foXbiDPXisZF8yHugXq3retj35c6FnrnUxKGeq7GbuQJSitxBkSECWMuFbyGyk",
  "key35": "3ucChMEmskTscqh1kzsH5Em2GnFGuhA5JP75rp96yd4S6JmEfahZ42K7NxViLd9qKhJs824Xw2v7Z9fGCbH9sc5H",
  "key36": "2LrNnuttzi7QgNhS24vfNMjv9EAQY9StKt42NcsdTuz8fWjTi9ZCiVQPaQoCZfhahma4gioTLRCy5LU5RfDfte4q",
  "key37": "4qfdhzJLYWGWHT67FHF4drTqr1cS1BoXV9ahEYn1Gd475inzB5hH6bZVJSHSFNBkhypnNh4vXs2ZpgpJRsVdCFU5",
  "key38": "3uwGmw4HusPmpoHnmRsUVDjzAqiA4ifrQULbrjv5imLdWJVgcnviGVV7yVVdN5G8igFiPgwiCZWn8TfkrZL5aKNZ",
  "key39": "5SPjP3m2FD9gRQXjqTqhEy98sP6wRGEQDrZPGRVn618sJa5xKaUA6KbmVcw2wT9WGsnPVU7VduKiPg8gtt9JPqXP",
  "key40": "5mtyVBBWfsDXi3vxZhDtFdMb9EJJr9Crayqw2Ph2hhaD6PNHXjKWvPRVNzE1xC8Khb7xhWq7P3V62Mk4cKcZY39T",
  "key41": "3Y4sW7gNstyUfVYLHksxAZX7oDMSTqv1T4Mtrywz9mL6WAFCGnGPcX3LBW2QGedR4LghwHaDFkK4v5d1igeQpYbL",
  "key42": "4nGWxK5kE79WpUQGGyqRTwdvsySptWj1obXSDM7emFRJy3rTcGXTpT9ttTVM9gXLrjE5mGigt82x8KPqmr2bGRtZ",
  "key43": "348L7aZ8EcoLKuNJFhbxcaEurtGswZyqXcGdoJ7RVW8T6qjdE7BPrkZmtahLMfnCimUQJftdvGZ1cfRv4DqwUbek",
  "key44": "5d481q2xDgpmhvQgKoizTJaJ953dvqqvvwCai5h13J1X69mfivbn9E7mZmQxnxcAEZsmPAfZJsmHk7GqRaqGtnSM"
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
