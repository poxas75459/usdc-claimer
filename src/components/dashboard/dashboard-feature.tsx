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
    "2gWf3vYn2r5QWtBz6QNu2xChs8HXL9mi5YcmQS1ph4VTk5hduBbiCQEm912GCZaxoJiC86VuPoB8d3Kch8B6Jm7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gQ9bYaEbhLUQDiMFaN6YyUjYyhsxM5SWc6j7t7CguXwmFUuuBje36LpvpCEcrNiKHqPw7dZWvn5EJCfA7u4Fw3G",
  "key1": "632QZ9A2d3dtTahqJq4jrgE4L3m5KsJKGiHc5xErKUUkrVrZVaGhPHjxPBsdE53egmMYGwPsiX7aa7XBpuwh1eZn",
  "key2": "5mg4GLRGd58JzSfvRwqgSxT6tdvtKHS4m3e9L2F29xChUeUDihbt6v6GQvufJVazcpCeWNL8RXacUrShGvptMRx2",
  "key3": "4WkCMMCMao82W2LkbLNMN7mAkUhs2W5MVSKs12dcmpHK7fW5wButGDY8QBSU1C4a6TJ979M2Gm2tzZTBgB4Fosff",
  "key4": "DHvEmpje8how5mLs9Js6Uo95C8GACAqJjEaqUChBZWvSgtaFALiCvwBadyDqQYSarvjYqxPfmNEDaWpdcoBoGR7",
  "key5": "ydMpPCzaXtqpZxK7jxQuHDuyvHtERKZWyuQFrSV6jDmTDV4tJzewz7amhGvp2AuEH4eP2cTtTRJDn3JBXzwG6Ru",
  "key6": "4scaLEBLJW8FqqyzpkLXQqXwZdmeKYJKX4vfpZJ7zX15wZCFUTM9HzPLC7gUEJK3p9tJ7JP9xFxDP46uE5tyZQNa",
  "key7": "ruLHh54NvzVAb6S2e2GzB7NmmbkiYur3Xd5PMUQ6Q2kDnbLSKZuLvs7U6xJkjy7iJFXCvYujsdYrwQJfj3Mi3VE",
  "key8": "37UocSG9sFjSSv2fKGHkYtyRS9WPs5mFq6WuUZucofbuaq5nDwiorYs9TWRXuLMy5nCC8VUG2yhDapnaAxY2scw2",
  "key9": "XyM5eTpBj1LF5VY5yJLwNpKas4VQ1mA79oPujxwNXkjL6LAd7QSXzCsNqyPcqiWpQ4bSnApvDmCdGo3PbTbWwun",
  "key10": "4WLxpxbKFcVRzS9yiR6V2x1LD6ub1GhFs6PVuoCyC1AH7YPGdzu8pNR3931nqZnDsJnGvooeXtueA9HrATWYT4xN",
  "key11": "4Ycu2hkNjN3HbFPEowDzwUTevmcxT4Hr1z3191DjFaohvqoZit3s7vinj14b2yQZkexPFfRxWBg9GHzknJLouFjU",
  "key12": "37eToR9psYn8KPTdPCiRLY6sHRk731FBWTQncQnJv9U3xyUucYZYTbnkxiZvzduj3rL6LPHcTBPZKpcG1nxuRFAU",
  "key13": "2mhtQwxd5PGFs5TW26QxdLYDd3LLdZhwSR42gCYFC2kuhin6F7ZGeSii5TadpxgYoovECm1pGj73BS5h2VGBvCDc",
  "key14": "u6p4ANPybBZqJmXoUrBGinUhCRP5r2e3S7Uj35GhGEwssujfQy9sy6Bmm8BgziDpRAxDHB5DHuPUwCF5H5s7At2",
  "key15": "3avyuiKXRCpxyaovgsosSsc1gM5K9fKgYNjGJbHXCzT4aFhEAREtaU9CeKaFDEse9KdFPVkA3ReEo75WSr4yFBsP",
  "key16": "2MtzyWB6D6rmgGVay9kdzRxvkYfKG1jVdYZEw6q5KgLRhdxxp3vccvtmxMyzsjLQYHW4S7AXuyEBdhkJqH5j4NUf",
  "key17": "3Gg1MktoinSU2FU4dVfk48Ycq1XskiP7BDejmZAnGDXhxsuAPmNeCACacadFD9kR315YerRj76zXRzifvKjevQ3i",
  "key18": "3MrtrKEaz71frhmQn18sCtcczbYvviFqWrVCxWzXaswiKL3LLZrpKLoNqgeQ6HNNiXG6dyCKosu4QzczD47FQfHJ",
  "key19": "LkCUztJdjGMKyRA2xaeUmMptkX6bdHaPziLjWZENS1xdSNxyrSmymwhiQQegU7qZpnvHcgDgsE5tofWc2EM5oc8",
  "key20": "2JeHvg7b4zPhwLXHZRyF4CMNm1ojeYNtS5ZgyYB1mFWfw3CzfwZxXRMKLDr3CEKSo8cRSEaVthpTndZg1WqGVCs4",
  "key21": "3ypyEp6vNH9Bofg2sAMSWfCG4PPyy8ccGNEoeGUnUbNZpdCn6FWpNyzDne7YiwWT9j9nmRLsj8PtsH7kYWJ13HC6",
  "key22": "3MACfyUs1AEjJ4S2WDaxv9Uo45dWt9Ro5JD5NPdsSCtonRjquBjdX4fWfaKPkKccN4tEwt6PjKJzsQLQBAoq4zeb",
  "key23": "3yS83Mx2jXdaoT24Ffsg74V84aBL4YSJg5NSGorHyi5q4cYMVnTUZ5H7VbUXaksuq6kKbxo59xPfBmKCzGmHffJk",
  "key24": "2Ttb7XH9nmRQaQBB2jVNRERLLFatN43pK6Pb1rAzuFkAVa2JAFKoxv8fgoVEBxucGTBx3PYaMJKNVa8aREDb61V5",
  "key25": "2cJ9nTFnmNFc8b71p8mVc84H3tM2Ex65oqS2cabEm1EacE9wp6paUMYjvNZo1hgqcNNCeHtvKGNGnUEBENMkQvR9",
  "key26": "479wT45XPNoQ9DLDkgnk1TC3K18YgqwHwqTSMCqtcUZRpfvo8N743gKTN2ttv8VBTiL65SRYBNvFQvq9cYN5BXT7",
  "key27": "5dtN3ASNqGGYSJZaXP2LE9X6w7pX7o6xnzCJSfS3e7dr3ZWRHP6kaXA1ZfV5YFXxHcuaB4EhYzopVNbHL8wf4iqQ",
  "key28": "2rZM17Nesvcn1MAy5bnBEGKoZZ8n7eQ3hf7FjEwD3hQqdk93Lvapx4UJeEThRnV1oMBKeYzvb8bT4kYLnB7MMJ6P",
  "key29": "4JiYTUPYyQ6nSbDkHqqXd1WQM5TDBsUPGKhmFuupDTkgzA19JNjBvUPUVdbG4WqtoiAiVaJF4pNobNxcwxm9c3Ke",
  "key30": "XShN9pitwz847FCSANnuvM4qkdXo3iS6PGoBqUDnsfuYszV4PKoug5LS6jwsLotXzg2Pnm4c9EH2GMuyGxFFk65",
  "key31": "2vExP6Ph1M3Unuj97QtMHkkjHEVBVMtFXK75Su3YZQhirTTLgZwnNcuKGZZ5PkWgWESwTuHu5nwQJEVnsWou5GNz",
  "key32": "4o1MmphTVkNqJrviMzy1r16AWBAzZ65krZfax5ygMtuhfCp3X9v3iQfyph5QA79pfXTf4Rg1N3cd93pAFSjwLA6T",
  "key33": "5HxmSNMf3dEP73ajMx8bXN19xvBfBgS4e4scbzNAXfiNmyag7urXk73eNPSCye4W2aS92GuqcWvCzeAPTi898nLz",
  "key34": "HCy5H2sMFJAacrXcS2Bpvcku1Q2VWnp59d69KJdpjaXEyeeniEhKde1iBdEWVEbDfnPyL4qrnSmEsdRQBVkHx8d",
  "key35": "32MuMrT8oh1tEMK8RH7y12ZEhJWUdT4LcQqakQ2SknkMQ2t5vtifujLnd9BpVkepNRboJZvRiPtG5pSwMwGyfhnz",
  "key36": "4cxrYiYacxatQkjDoEBfNcFVUbkmTJ2peXZfKS4v7teeo2hh5toQUN8ByLccneyAMzLnKaaGm9HmKGtjYRHK9fZA",
  "key37": "4JYZVeZc1f8wBhBHUogttCzcfduLEtJMkNYPQ8zjyCmjKoKrtPkApucmrJFhTsWCvxPVTVoRSuBzvJANKgRcdYkL",
  "key38": "5csjt2RvY9g6rQr5L2kqxitR2w6EJn26Y3PGo4ZR1Wvrw4CT2LF3wkGpBDNZsUjZRGyH262ZkPqmMUfaLev9omUC",
  "key39": "zm3PMpN1pSNHa7G3kKPoExuJFuAkD7hYfStqK5y9QgXtcKfo83ytHxxRXhxvSifeDoGSKN4VbwB5k3iJ6xZHaXw",
  "key40": "5LDkhE1AtQDFeM2venEzBiP98h4X3vDabf3uXaeWNeBjzJXZ3eRYPaz6QCYPeWBA6ZrkCzw4orMzUjiTqFP7adwu",
  "key41": "5aXWKF7rNHHBxM1VCTkRHYiz4LQpN3BZH9uUEEvzVndJMrSaxHV5Frqi4gUh8uYoSqShZEL6TCUppQCZjo6ZFkTz",
  "key42": "pgq8RYgskfsZeZUaVoVbxNYVKF25ACPzd92zMGGKqxhzBY7k8EMZ4y4NRFsHwCBkjTkLKPWS6SzcP9cumoZ57UF",
  "key43": "34m4fgpE78ZKvbaxyYiaMJTkmvS3EaGDeQ7BoM4BXcF7vXW7M3Agh48ZCZACVfgzpCFpsgvpgkUGe3JJwfJ55xXX",
  "key44": "2swKdk1HPoBEXHkNNMhD7jfsqgrXQEb64zh42iBs3EgZgzsNwNJzfzsRrP2Q8ug6XyMMu6yBZ81Kogd9Gzs2fK3X",
  "key45": "51vYttLUP4gPnRqBFAC4RrefsvUeS676cWqDErQwyTXakERqc2XRGFWDKEhHsjhthU4u8aQt8K4qcbgbXB5A3Hdx",
  "key46": "5om6JHfLey3c1Yxasf6g81TxKt4XXgNDrcTF32cKecW2CBWUvdpM2GEUHZVxyqyTiqhaYfX1bL7V91UvtjYmzUT3",
  "key47": "cJjN9i5WsqY6EZuHfb4xGMmHwaA2Z75xpKchvyvpkivNi9vXUqZGRR1yf3GvyQbtBcsvRvT4AdqDVGs9dxYNEe5"
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
