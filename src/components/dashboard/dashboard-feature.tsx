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
    "2pwZsQDALrSBjotGNe2dkbH8o5KR4bmxHCBLHw5EdTpLPL4cMpqG7jDdBa7vXwiUVrJz3svaXoPNodGxSM3iT9UQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U7ewcC38kr7NfpbEzRnucVq2iE9KYULy3KJTURSAne3cTaHzgdw2mDnrUZMA5yRRhRG2PYUZBTS98LiiCeiCQ1Z",
  "key1": "5wrz5fycXAJCoyuQeKwFqd27zjFjboBGyB2kXsjYtEEMWtBsD9emqgJMYFydVKsEw6NiCeqafzF3S2CCEXsrHPRz",
  "key2": "4xny8kpNkCjweqdTqjugx3PYPLBrYdAKRfbjaqfkP7jtD9q6vj7A4LryU2Wxa8xaDqXBnHtwXG7BUkDi4Vu7qcJf",
  "key3": "tSzf6tzvP8dBvW8bXtot79wCb6p7cFqrFYekJ2P1beSupy6VeHgzX87BQQahC6RVFAYvfhAbQSZLAPYBiQQnVzr",
  "key4": "5kPpj1pGy9uSRkbfexS8cbiTgxa72imXT7noedUBnytMyiFbzuHxfMXBFDw6xa4hYt3xMNGUd4zrxo9xreVsXr2N",
  "key5": "58rHusBowcmDhN2biFFszoxg5Ks4sBbEACMXkcWXJo8gGHFWc5CixnwXAcq8NRZw2gHZeYXMroftZtGBbiFmUynT",
  "key6": "sYrQbuPEKFq1SFMGEW1XwTAxsXHgNJJUH8e2wM3NhbEgXuZrUQCGj39NitosvVwD3EVJjyhGy1ceHeuxD3bfos8",
  "key7": "3iVdMFotwLgSm2JWKZ2iZwArWGdb6Ky1KoCDf65avGfefKRGNWYYxhGaog6ss2dUZhQcgJqFDaGVVafuYq3tAWFt",
  "key8": "iRSXAB5fvL7wZ8Zh7b55oHzKLzpCX2n8R5db8HiaJ5CV37xFPNv5zhbHmsFzu1tZrmn8ysTnAv32bQy8McSevw4",
  "key9": "2qCtchAbeJ4dQmWAbkc7EE6NKPJHo92Vx83fzWFYosene8hHJwii1oTNNBLELRUqHyGt8WFWjLmnfUp2zDfiYs9L",
  "key10": "2gc9wLfBAFC3MunHKatZr6xrJGUJkJxDm9wNG82tXZpp49xK6VPJLJNU578xc1va33tH8FXJJEpkpsLM9x76w8w2",
  "key11": "Jbq1y3wDrCQmdVx4SR4665Vw5N4ighXEYLBMeXTjriaATRjFpRhaaniiPwCUbHdN1W1iucfbXZx7WyU2zV9VbRS",
  "key12": "4ar5ijLLyysihJ9RD826UPcAzouEZscNAvkgH1toMvguZKheNDPAd6cmcukXdT7V2omzMxyEZdYFRkbwy9APifcK",
  "key13": "2FFV4HTg6egbr9GZ3JAamkGxFfXycyeKpUkijyWPjpSCbhezna2dha4953sU2g6PtHz3233tQWeAhUzeciEKzTPu",
  "key14": "5uACcdp8gSkzLQHMWKjuPTZvugNMmrfNVmJr4DWCmiotihhxRv4e2nNiLoe1gfJsh7Z8359Qj6BDSsj3WqCWXd1f",
  "key15": "2Tv6UfNWjwSBk627Tej596ifCgierBW4bUhskFDomU2qRejbut87N32UtAB1LipxZqvNQkCuKZAf4mK2PcucNS4W",
  "key16": "HVQMSG2K5fVmHWxRPX5DXK7xKt9pwP5f6pMDssHfCsHrcaBoNstjNd57y5CsUvJTpkA76BfgpbuW5boUS96XWrV",
  "key17": "WG7wExoB8QBL5yWHLbye9BXgv6pjBQHhaADYzvS3iFDGCo4amAf7EroVscgLQKM3mpfCLM3fs2wHJysPLzmBAky",
  "key18": "2FH61Uvn3AF2Khdj8hPozQxuL8US2aViDnmGXDAMLYLd7KCyiydZN13R6iGkGUVY6UufF1zaQBcVZnankAf2nCjn",
  "key19": "5jDQb2wPkE7AqRvcmY4mWVu8dPAwbAaAr95vr7JtkYUstuXeRLMJx7MPToEwf2C5D2b9hfBnPjJipWpGfmNKjxjR",
  "key20": "2RwTqtihjWVJtVo2Uep6Gw9A4ZQD9e2Xj7ZBX9gTGBbjryuxA9zChvx34hCgqTsQoeECB8RJKG2i4gw6sAKuAEkV",
  "key21": "62vqHmZDuHdvJx4djCrLBe1xNECb9JfzaVGNS63L5k1Dncqpm8zActhMrpecokW8uy81oCBCT3jazGFP8kvBsLFF",
  "key22": "2TxPc4WTrRNdTzcKVLwxJDCKGNMQpirSW9cNeT35LbCCbJEA5VzDSKNZMZtUbuDS5k1EyKjweTrKLVoqEGkvgYed",
  "key23": "4pRfSTXUVyVJiq9Ljvb1YVwmRb4pNpkABLFrKS8QioWNf2X6sTbR7bQJA2Csekvf7VMcKuLse6L8JewT4hV1x21Y",
  "key24": "2MQpc8SSgZ64gt4pkkHQ2mGg5bvhEtuH5f3P2v3VKjo8VNN67ScTaaaw6svhHPXkpLDWKtgfcMyTSxeiiELALkZA",
  "key25": "5NmfLP8MBitbKsiXYTF9EaG8xVS3BZdLQnxPXCBH425MziSJKwEpF68Y1sjAjW1MLkGNnZBrV415dWqe8MUx7MaC",
  "key26": "3wVuhM8MLr6BpqHQLGQNMe5WwCFBeh8GAMGCvqtPHJs7NzZLMeP9J7F6DcqnRskeZXoorJjTCh3QDgTSX2TjAhzg",
  "key27": "2HtELcPUzBkQV5pWsnQzuAkAqcgPHnpvW8HeVM5bkYh51GRuijoAdJ6zSEv6Cgoj5Gzq15pzw5DNUw3jTXbSAKyv",
  "key28": "4qX9JbG6yXG8z4Awwpq6TBC53h2J4AYqCJuZszpVp2tTztioNZRzxgmxkABvMpXJz9xke2CNWoauWFoYjTduDtsU",
  "key29": "3R6WaYKLX15tbANd41sTUzF5Wz7bcEYrzLe2uY5o4yFw8LNLU9gamkzkc2Tc3EtsRTyFaEFvKwk3WBbFXbaTc2Ln",
  "key30": "3MXZFtGEDGJXSkbJkbiePmuBDaHxg1pExykL52a25QBspmcaKCLYAatTBtydKaBM6jnjzjoepkWLYwpQ8ffYjY7i",
  "key31": "45HnjVSvBdHoa8zMEwnBvrNzKSnEFuStKJFRCZpMHfZyxUGX2o2t6cKu19eadriLPki87mLncuzXLQAruUVdTAT1",
  "key32": "5fxRiQhbjPAPDuB7Dx4yJAqm8qznRfUS5XRRcKmCbZbSKuYYR4z2D5PsMGQykpSSQEBDfKLnsj5bZEcxMBhLE9rL",
  "key33": "xLnszkfrbrqBhDDW4chkPyo9hGkQxk65LCj2VXRoGZNAWAwwfZGcQXa1rW8eUHx7F6MH9XBHrLCLuzLWhHDmgtK",
  "key34": "2kwVvrVteprYtrVSaYUpnCmH8Mig2cmWjuEqeAu9Ra6Sd5pS9aBmMdQPhD462KRLmMPwk5CjEuT7zpPEJv7SwsA3",
  "key35": "zkbL396H1fDTB1fo4RC83K12dksnRhNBpWGFod4MvKA17sCcgccdAkrME5ivcTNcbq5CXYkujL8hoMLVMM9W5Q2",
  "key36": "2FHnj8pfTepsbxffiJT3NxF28kp27owFtsuHYSLD8iTSy2jF8zdxDRkCt9Nfga6uQMkZoQQ331aQZAzHBoNnymsH",
  "key37": "5Mdxt7ykW3ZfZWV5515u1NxTuR4fZwpKaUu22zJ8FygYNU9PjKxgUsfu3JWvZv6JgornooudQcL36rriEpP4RMKn",
  "key38": "56X2NXkjMzDagjBcp6qg5abiAZHXbagfVbADTsSf5fYvNkhtbqJia1bEysueGMveyANffShRDZzzcRyHvFnctexw",
  "key39": "2h55aoYabEweX8YcELaHRAgGiesEnJgJiZAJMqWZFXjDzJxfAaShf6Xx1VsVWLsZBk19eJk9KpeRhmV8AmJzep5V",
  "key40": "4tJdx2B8KVDRWPv7waaCas1qjZX1Cits5yDEFd4aYfqVEW9xN9eFRB7VzBnYnCRhhvXCYmyhjWKM7HvAPNTYwiZC",
  "key41": "4osvFiKaREazsKqjQkHjn2tDZYrSPsAxZeW5JsNg2eaSXwawSaMU13cMgs7Cgv7RYsR6KUWnC8VCy8PE6eVxSqDx",
  "key42": "49jnHjza2Nwja5NqiyXRZyx2Uhgoyp896emZhN5rD8gyx25swCuQFM7cFmbe8ySV5ujwuyCJfpMq9dKS4tmtwcSy",
  "key43": "2aRDftCG6i4Kb6yLmrVBa78a5JASvkyvuLHZH2kxdrMrWeY53PJrVESg3rq7BVkDgCW28uAvH1XRY1G9hphtkBLR",
  "key44": "2XJua1uoSYzXHzV1NWix16yTtJbkwRxWe7cXTyCg8wNB5yWqUnfCBLSdYoitsjijwh9j8FJJZJ8nfH7q9XZKH5nX",
  "key45": "5rKsBRk1qjNhNLYd6YwvxXHJL6Q2BSVBVyJZ4h4afKLVXPrbRHdNHPMYKAHzdpG8attqBBkUb2f7c4Vchb1wuK8F",
  "key46": "Z5qwxtHXDqMRxY2AUQKjtUKnDrJDqaaVRoZnxfeMUpMp7q6v689HzFfdXAoiKQwBF8pXSEDzYDxTrWShKbrTwvR",
  "key47": "3dwLcwpHY9fGw7QD28s2wAGpZcH3Rvnz4FwnFqm5daAQ1Y9B5xd11V1oP7gAKF7fPM8fWVEeV5xFBowkX4G9u34N"
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
