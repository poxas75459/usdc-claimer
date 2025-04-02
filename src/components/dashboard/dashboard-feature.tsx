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
    "3oDrjEnWBbKacPefRDr7Fy7dNtXTi138Qa1FYEXNYr5jdMcmNVnojK7RiVXKXMH49qiGw9Ar5bS9bpNSmWmgMAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vgVhNA7AEmTg1en5RH1HwcJjRRZcKadzdTpuyHVvXNUvteEqEsKqq3T9QWbiNRScQMKxyzESV5y9SweXA2aGXJ9",
  "key1": "KWYqQj9efW5arAKqNH1SVvy3E93Cpr38TebuU7DRoN3mdVHJCw7STcCjYWF6Vd1jkkJ33CvZauaXHgWqyhebKyV",
  "key2": "3gVUp9biA9BKEzybyK3hewBXmpV6nNEXLMYFm6Ekc1WBdQzVLD428dkxfAziaaLwDEd9mCNuiCn3JodRbUa7hs3Y",
  "key3": "2uWG7SPnpLWqK81qqLspKaqBgRMgK165vo2v8Y9H7kxKmFwbLDoxgGZPisxs7Uj7Y8N74zLt42w73BR5uHLAHJRG",
  "key4": "SzDek3pQQPaKk62MHWxHwRPGjDTA3t6EnTbmSafA8Wvr8WxXvh4tRhbKQpx2gDTn8GT6FT5YbvFqpB3VnPKvX8j",
  "key5": "2HqXaGCpqwkL1WoXqcAgDVo3bhLAS4wKCqTNo1pBP9HmbQaWEQqe3PdLGJNTDqZPRWci2Ejo8h3uD8WaH3pxk2Lf",
  "key6": "5gN7tWafSToEMXCy8wtuXuGMkSHwiFP2DHrDBjcx66hp3pEQ5zwy3tg5Z5LPBfYTTp8hRNRuswLM7wJsRz8TYS44",
  "key7": "Hu9o8qdNfanpJHFTG7y2HkaZG8wNbVLLkQBKJmhhfd75RBCAM6yiss3kLgMVkp3MTUrijs1LfVyNCmPuiinAtyo",
  "key8": "5BwiW5oCF1A7wruhrkeMcmQSw72nwxZmRA8w9E1GtCJYxTt4Z3pwk7PZY9tEixQXfgESpoMAiM77hS6Hs7p2SSLs",
  "key9": "2SmBNBGE1KKNg6pwCofu8nGL3MhDAjEPBQ164ci9AUz8MkTUPL5d15X3Rj5g3sYwDikBjzLqddjfzgwU3X2VU2xE",
  "key10": "5dC1CCoybMK59KX4vXJnVGjDi3pe4WL52BHqv3AjJyten3iLgtBkemTjCUZNKVffAiYhTkoveXje9bhMM6zhCMRd",
  "key11": "52HPmUonMWA4BhKpwF1opxfWPsKL12wfir9gydPkUs9untcoRHjiJtvHeYa8yZfxhXkxKeWMTV2zfJ7VAe33LiQC",
  "key12": "2dgAsttgVhws4X9DvNMgDKWQqDQTvuvuY6UZpozQ1znh8fJoRiRf8irmKRUgAVjne4XwDFbZu3bYotCKsHzTfod9",
  "key13": "KHKGmN5q1RF4WGcaE32LFv29MKQRUW52bTHxDepLFfBsf82GLuugyUtEHy5kHsKDQt5s9M1svEaRtmomDpM2WcB",
  "key14": "273ge9NjUHhwj7mvoEWyV3DCYWNLnrx9bWE3TqdNdAWD1xNaXaDQMGyxY4cGJyoWYbYRJwgJfKtj9ubNpZMhfGZS",
  "key15": "3EgbMFqfPp59ykfeBZTAjrrn2Cyh9bjGzEb7qaitCK4zBVpwEd61PRa7vYUyh1aUbVcDvuKWQNzDhS6C5MAQ3PS3",
  "key16": "fopWWaENP1dNXG7uDiMZp6W33xULU9YnokQj5MsnqEuDXGKtGegstNn2VUpDAXR8nj5wnoxZ9Xju7oyLmnVjFjZ",
  "key17": "3TmFeHnF2UYqnNsTUbG9achHR5FVGisvnMt8HmMh8Mgat9DjA61eDyXRuiLyhDz727F11XhnFQzpgEMZMfEBsd79",
  "key18": "3jkmTDQzbbZVE5AkNqeXXzh68487S2P4AcvZ4Xyra1x1LqQa7Qnf7JqyBMc3HQBryq8XncFzu3tqAsoYZjWBv9Ut",
  "key19": "2qeMdiYhq4fMRc6jGUHfmK2htUmyoHKnn3eM792X7y2bM7M8kAYL7crVYP4utLd3sdxhGWuDEfZgFu3npwHxFsVV",
  "key20": "28zfnrzePaZZCeqjV3Aai13xzx41xYSUcuomBvdktAK7Fv2TP7hYYjpVBf6AcPhnvmtoAu3NGvggcxmMZrpQeW8f",
  "key21": "5cDKsBV241CnkScT7gMTEBsSBemJbJZVGg8hhmsA8t1LJz9ZLVS34fCeJxQSKmAkpaeqdwbcrW3c5rTXVtw8jD3a",
  "key22": "3t7XYrfzi4JWRG7sBPCzswtsPkwCqER6mbsdWaSjPRoppCnwSrU4Mt8HQyANabzHyqVA5CtcErvAy1b8uTrRU79T",
  "key23": "2tey8swTX4bpbNeVWuXM649okqHMSWYT5zRX4GSCCxSh4i3VaJMukYkxgZPJKQFvh64KUHx4CtFkBytyz6HDkhTz",
  "key24": "2Vvi3X1tyczCswaEaG2P9R73pRri4SUCEWCJ8skxZbiZeyAMhnk45yQNroiDHQ23AACQ3RHo1NNRzd2w1xpaxEpR",
  "key25": "2cCPs5CicGrF3GQ35vKhEPvXpXD9uevW1iDi1A1cZ7VsGsZfkFh1HBVZGoaqN8jwDuP3PdEkjwWdo6qQJWADVWRa",
  "key26": "5hgiQGkwjPTasmreDD7wsgs3ibxVE3kfpUsdFCweeGFaNpdcuENsCs6EJJpMRnt9CJ24PoMKfLkE5DNbSs46E6oX",
  "key27": "2K4Hx9cvpUANNVi1ToZ9mcuM3yLJYZCkawSzCecqW8uisaggRGM9MLbLBirvxHEYHMw2mUktNMXH15ZRndJHx3ZA",
  "key28": "2p9gFfMWDpiKJSTXgnmyeAaE6zuYTVjMwUXzikshLeiK3D2iAPxG8L7E2jfkzmPZaNPYq1JHYwtxt9CniHTTGc7U",
  "key29": "4ctFnf2kCY212g4B4cD9vn6Znqms2P45KpzwUsuWe9TawuTcCMDCyNJWFwtgicmT8EVTkntWYign8DfUmdsUYWAA",
  "key30": "2bK53prGx3JCahNJiRz5SnK8N9vJS4KW3MmdxPcpqQJW1tSchJuGvvUdb2Eg1hKnQJ5L9a9qks1CjKNT3wyv4hvT",
  "key31": "5jrZHDeJpgYTPvMwksBniXUqcfqgRoZMFWFsKBxL6Tm1ThKjowiTueRwmGPYVgoSdbmThCDvzmJYgY7mdExLhHHw",
  "key32": "QoDQFQbsFsSrnBQphmKuW9dmyawcYwKfuArqFgtdsCh47eJJDrMg9fNgd9YkZDX4eCpYW6tdagkYf8jLQNsK7pK",
  "key33": "3N36su8MxptH9eGhHR5Z9z7ba6xN8PaKduBfvjt6h8yGCsd164LNtVUXtKQAkBXbAoTCd7jFDbGK2RifQxkt6ZL7",
  "key34": "21PrhyTUobmdvTrJwzgaJxv8nHYeWdpCSLG8eaFsi9TnT3opqZR4TpkhcG4QF4QP1dt3gsypDvt7RjFaEPXmdSjM",
  "key35": "4KhJHK12fgH55yH2KvoFhUedF8obNebKUxcu7WzVFbbXNMTFhBa9LEdspcnz6o1tj2SBnNvJEzVwGVmgzcRiaDXM",
  "key36": "VjEjfq3dyV1cehxmWT5uu3hN4p3AFfX5himU2Jb4ejMgfpF6MxTkyyx2ngnxMh22HA8VwvNtAGDYNHje7QjiJ6u",
  "key37": "4en48Ymcq6YtJWypnw9kBgUW9sa9c9XLU7ged39iq1kVUoLf5ZEi82Qe5d2QjHzJwPWc8b2PsNGifpHPwY1qFap",
  "key38": "2zmNV8XoeZftmcmTg9YGQXdaRjZszCro39zismr18zUGitW2ViDTrBEtq96w41HiJ9jfYqoqe79nBn56S4rPk62c",
  "key39": "aUhBvhunv3VdqbNQfJaQrTdDp1SfC3ktZeEzHJHmPkjDaKkTFmvYw4HSRzJ2BHpin6FGEwmS8ySXd7X8L49NNaS",
  "key40": "55GdUEdSAQEvpMAsLati7pduttLEDPwRH61WvYtHBjfvjftWzXpWSJERU3tgLCHwoJBU6obANCtxPnrJv3qg68pk",
  "key41": "5vnXZnqFerd5wk4TQsBpCUFzYx4AQhP1rPm1z7c7MDM4zrhJ8JR3u456g1JW8N6eSBBi41aojaUNeGcPK3EvW9o4",
  "key42": "2EzVTWqpGxkDDQpVp3AQcjCRhmNqtsKez2kZZdWBqsXnxAEzoD4iaQN2yMhzj3TUhmNv8bymTbtC3zWJaba357BY",
  "key43": "44hPvwZynf12wSJaoMV75fpoJPLt5Bg8oUPAsrsdUP9ZNQHnJrzJQw4P1PCCqhoJQ8stmme8gRaq1YWAYCgyZ136",
  "key44": "3WSqC366TR2a42Mg4vehiroBvNc6FhozGzux1cGxHpSWiNWb39sqK3xhkZBc4BBCQ5Hg8KjMcBfWWYwN2ahPzJ2e",
  "key45": "3p9zQvuCuk9q1ZPCuBJrRJzuzakEieQTE6uG4VdrLAzJDyVJ7g3V1kEJt5hx55Uu2kLMGS1PrXYj7K3G5rNDt2Nh"
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
