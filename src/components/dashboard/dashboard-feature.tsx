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
    "3pEmW7KeQyUga1cQLx7Vbn2s5dkxM8tiFuAtdbfYWVhChXaVZUfzezXppS5gjJhuiKt1A49XSuxpZLxFyrxTn5HZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QD9fGBEU39CzeroU766PZfSSVE8NLBhXgU4Gpx5LGrqJQP4EheJFyMXCG4jLFAHvZW854XWccwfYiFgJArtSzWm",
  "key1": "2gGCJn5bxSP4EQVSGM31qkuxLxkKtaA4gZy7qVsr5bo1SPA6LCAAJpqW5nACUzcCFj6V58UXtoMRaXtguZTLiQaE",
  "key2": "2fcwhJJ8C9MC5uqtTj4yAiHKPw5rrRGe2fPxSFmuYCZWS2SiQjCxAiFMQVL4RpuHBv1VnuuEkgRTM73jJLQo2xrY",
  "key3": "3hy5BbjVztREb2g3fUxKYTbDT4duFrVfNfTTLZWhh8DeUfGnCvdjco769ZPE3cSvvASibrF7cdupe2jB1zXMmJhC",
  "key4": "utGxLQFDR5zPiX3aCrnrmxiwCkTEruZeHts97uLy8kUzJTHrWAZUTESqDs3TMS92bUTeChqp9n6DFyV23TqAeAP",
  "key5": "Nii5n1XSzzC5zu8qZRw5sg5nvZRV3bwHMJo5uJEcF4wVhyTkh4KcTRi5rTFhdzuSjBi2vCjCbSC9GRShAHvRRoe",
  "key6": "524ciP7NiPTnVuxK5GGAiAVy5HdRhs3ncFchQ6GEK5U7F2zU671RpHY4Ljxaxg7y2huTHuQkC3EHVMrqgtvEhH92",
  "key7": "3fWhVweNJEVsMg3RmF2webKfW9XRrgcYoKRqkkhB3N9HrS7BWAHindbQJKBZHX22gBw8KqwHDEwddan3CffxwGTp",
  "key8": "3ZU563qe8K7PW36rzYdipSCpaeuNH2LS5ZmAgX4QxKTZPFAvuiQpU2vQCx93s6nnHHhMP23PqP5RLjorNd4CHbYe",
  "key9": "4kMKWXENiBi1aDzTUeYBFiEH1sFAPqso5f5hhG17KPiHDueNE6Bfu7UGg6inMcpyXByQ3kq2TRcEvn9JECH21S42",
  "key10": "PYrJezbkEgKJH2aEmNFUFBY6bRPD7Hmc3ux1VxSpRBzkR22X7NjawN8Wn4zRbjgRnC4rjUyFGf9q5xYwGjMriLR",
  "key11": "3QWiTkYMcGpcS4GVkyHjsKqhzA8yWjfBxvtZ34wVR4YMDdg9LTH2Xfpoc5W6YqcAHsdbJvhnveq1ixM5CLTSxxo8",
  "key12": "3F3DKtPe172mPRbpPiErRMo4FJ7JmYpUtqfyQ6QEJXja6f1gnNbg5Fo7m11CfHNVH9V6gAQUYFGrUg7T7zNZkEJw",
  "key13": "3MkH6uKvMRLqWPT6kpYw94eKEsvAJZAoiTYS7M1pYZ8Cz7yuWr55cdHMAbJBi2GJn64GjRTo8r2sEEuCTzWyHa7H",
  "key14": "4bNf37A4x5qVDptwqyQCJvkWPNd59T7Vje6frUBsgkyfVaKz6FAo24ZjrE77fe3F4dcQUhvP7VGM3K9rk9JSWDmM",
  "key15": "5852F9iwPjf7x5FaWYiQZRyGvuZgiqNhzXRN3gD4XnUdTtoWB4peBhVdJmQQ7BmouwRuKgN7dDsT4snJghSg14tx",
  "key16": "9cdrNjb1jkBfXTeNWuje92GhUu82kpWVbrDC2UygLHe9N7FyUK3PTfBC9rEKLE5Ma4yctMJN9xWxoJgimkbGR7M",
  "key17": "4Ce5QUYx3YrdrosQdQKcU7gAPz2kRuRUYDUXrGxsPUNXac6RF78giA1gTRXLt4o2SBW6r1aYcVCVFEocHiXt7Rvu",
  "key18": "4L2grKaCz9pgcgNr13PPMtuwzHZvTePiHPZJsWbyXinVhrDkrUBDvDJbnNkCFAx5JtWUXNhRb1UaGNckhkatwMn1",
  "key19": "4nQcBfDtWLdhUYuwvEpnAmUf1UgsAQWBPzNqKvQTakfxTsyB3iCo5YDbT495giA339TYPon2wq8xCUyZY9cyvQap",
  "key20": "4kLGYjQcA1dDB8x2DrE3J1jpdpdqu8DXrDCFUanvqq33CoCwDi1WtGRgwfPZS7Z499at2vM4gnwBGUHEsfSdVPjo",
  "key21": "4stQchTiRKuzwFqtHiHw4stN5aGREjP6YC1drXaH1XfqKaWHK9dCVBPJfDUSY1avFTcAv6PxwBQ5h8eGXMsCt8hP",
  "key22": "47y6qvFwecH9bTL6wiafT1CqA2RSbTJH1egyGLeMvYn8kydnSDLjWowBJ3nwohEbBF9VraPDaDiY4a8uV3jP32nm",
  "key23": "4DetkTdYkGzxRnBaJo5cpTUnck8DZchQ4EXGaF2pmfF1vcQxNbENV5qyQ84jk8Mh6EeenoWxL5hxZD9rGnm14nNi",
  "key24": "2ALFCAY7DJie9wxyN13X2ahRHwqwu7GRfNJDQn9nnxaMmTyZ9M96RvqBNHAstPm9pc5RGrcr9RWM32o6QDJioVK6",
  "key25": "31DXh9HjULTaAmVU2bXuEzS8VXiUWTam22PMbsdh3kortc341QhtC5T6cUoNrWFv1hx9CXkkweAnttyNWFcZd9TJ",
  "key26": "4tXVVknmt2mmsM6xcAUH59jePRcgUJTzGmD3zvuBfEHfP9spY516M3au8TqFy6xJaZW6mMv7XMHDVXfR4a6hHWsA",
  "key27": "2B6umYoFYsw3FR1ZLpywnkvsk3Hpdbr47ghvQMpuHb1JAy2E8poVSN15NFMnjmpZLjNMNKvGVfj5sDYvKkv19dTy",
  "key28": "3nhsY2Y3xPpFNLXrr1c2cLr74XBpRnJn26o618bMVHtsHtDAUeP9iQbLLx8r6BuDXfJm9juayhLUyqDhXGc1fSsv",
  "key29": "4S3x9FubA4EeM15fmeJVUAsoFFf6THxRZd3dddJdUdYE6tWLu2dDCkVYurFwexvjbqFTKohqprf424dKaVeZNsho",
  "key30": "p2ivbRL8n2LMPWA1m8B1Y5SPzDhCwcWEsobg7GrcWDQrJquUwcwyrBsWGzC3Bh9sFGNd9fmGiDxsvzT2MWUd6px",
  "key31": "43DVdGcpwwRxr6Krgd2fcpGejbACVo4scvpVzRqm8WtAE6eAHWLrqtGr6zz3MqBqbLvDwpz1moBndQumfVXDwaV2",
  "key32": "27wpEQMcHCCfd4aLBPegQtmVYLczgak5hnTnymQ3omGAMCHQBRFxrvPMibN3ySAAqNkPJ3UqgsTNEphkThuQwZaL",
  "key33": "5SrgkEozN7CC8FuKoqf4T9WR5LgTMZow9J7EkzCgfCrqHKHmc4kajN2tPhfVGVXP8s6G4bVpMrPbq35EHpjvpuq9",
  "key34": "3yEneKefNSW89cJMSSGCxGgBUHdEc79eb5F71ZzaRA3S4t8YCdFzocjvr8CXfRJHW3QbrvmSKKgQL9qC33Z7ww2E",
  "key35": "3vWxfZUn7bEaE8G2uX1FH7XLdTuQaJvy1BifGSo4DqM76uipriGeQaNA7DpScquZnH5ULmJNgYSwV27MA11xLz1b",
  "key36": "5wxFMbvrgULBWBjXJpTkPo4PB7wq5HxWcDDT5QaAHG4e9EaQB5szb6ev8Su2AQYDpQJayjXiZHguwtCrKpbRUkfo",
  "key37": "3Jvp7GdYLCoqz61D5nxfs1oXE8U7vE6PEh7vnjiers7wJUZ2WZWH9Bq3WsPtK6PsSuFUaHHkopCnSYgZWiaHt7sa",
  "key38": "4s3LZJdbDMH8pgxmcyVBvyYnc1qUGQtAJL9pe66yG8HEpr3sQmzz4x1ZPMpU4ZMxE88RoWZ5VLDdW6YsmKJhvJuj",
  "key39": "3saGPsCpdDTpDb5wDuUqeBspWWgaHP46C62Ueqxd2NRc1sjkasrod4tCg6c9FNQ4ZxGAbiHpoxbYwYfzEswEyTo",
  "key40": "2hvQYf8b6eVF2m3uRigw7iP2ApEno9cTHVnxfFUNgSbd5tDW7uQ7qvsWvw1RuDCFbLgDScYtXfKRnpuuQ6b24Hfi",
  "key41": "5EzLjYJMkR8vjVGaT1bGGJ8QpY5Ns7hivKcsQzdkg3GeXgKQ7hg1utEz1LZ61A5KNUuqjebfA5FXNShn1H6V6y1q",
  "key42": "CyLZUvPeFkUJ7RntDGZcjbJMfgvV1tnhDftVaoH5acwsqkv9gfC5o7JkwL1Pd2mMbNCCtyZFoPn25JNTruxvNpE"
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
