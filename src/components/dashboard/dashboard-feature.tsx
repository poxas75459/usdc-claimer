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
    "2FVW8qfkEEJZwL1bnJy8gz9sjwM619JpNtRGgG1ZBhFgwgGe2jywpkHgS8u6f8FbEMak6ZJpYEeoaHNxHUDg6bwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52mT3qVSfMb4hxQoTCUbsLYdvspSVqKTtPMxfHG1sKs2LFAArdXosUvZuJNng32D714LLJN8D85UbrXm6QuXrK1E",
  "key1": "5YVTwEpp9kNzvFc6e8nKwhbGUdudCvYqVSdWcNhQ7przziC1fZ8m3XsFHcEkF8wyPkQBaPkWxP4oJAB5aouKmdJ6",
  "key2": "RYWhEaNak2aoMi2J3rahU7h4oosm4VKN4yTWpVuHyoGBFrWaizYG6b69WNgd1qwTE8dUjgdDzaJDQiGaiamY767",
  "key3": "3pFDuAxkEzrTeKgwqeGhXwKVuUMeDGMAuzmbDh5fvsTmQZvHPEdTBc7rdaRipYVUintsWQTVeJ3Srej3jwftCCyy",
  "key4": "5b3w8YF2sj9dcM6T7SQ3EtXjCvTyZANr7nCdDYE6qpgLoZ1tQEAjEMk36M6ehYVKYgW5Y3uzW7VkvfgqupkLyjVZ",
  "key5": "646Tp6AW5pz8H5nDxerMV9Qp5uLZtswdoZtyBWRW6Vaj7PuJj3dYzBUDnEDsKJLXTjfcRR2JoU1sLTtAz7zCexnY",
  "key6": "4Aen7V9nCCAuHVUFW7YBgUuszYz8PZ9hzFJ2rW4ZJFNi39FhTJFQgL2wP3eTPEeW5DKAknxiCkTn4uX52439xtNU",
  "key7": "54s1g27FNS5y9yqJUxa543SDLoyewnAHLzNsbpomq12XjkpCP23GgEgKLb8nsripJerK2xQEu3EPeW7WFwnVS1aJ",
  "key8": "4XJsdP1mFJKwZqM2xWNV4jaBGeTQkYNbcvCx5dgqPJsgx9uKsS4aAMYEg5ERw5LX9wzQMip5p5dZEpjUwE6xkAws",
  "key9": "5UywvjXTGjdoKGjedr41wuY5FzHEeaD6eS3t8yVagdthLb7TsLosiz38Ke5mtf3GvA8aBhpGqxFixi5KFSzwgVbk",
  "key10": "4hCoeNrirZ2kXZ9KhzkRsN3m4R9CDC2esxcCZPYpGCWGnhrsf1KpnCfqsN3YFqud3X9XED22TyGpr5ePuQy9WV7h",
  "key11": "3nYpTGG4x3RiWR1X3zvpswfDLUTcp88nSDz1ENxu2YL7bHDntsp51fZK2Md3vWhMUPcuwHMxx9X6KiECnojMRo9f",
  "key12": "4qfp6BPJaUdLMvrebB4sZ7kVW4PNfS6Xm755aatBooDytfVPFVXFksfBxxn8dacvFcHSpcY2zSiy2ukx5EeEB6ia",
  "key13": "2VsaZ8iedRZ11fThcnBJGiMgV3jSMU1sY29riwFdJ41P6esFePkWhGhGjjX9Hq1dSago7R3hoKUorX67gAjmBUpr",
  "key14": "3HPjznjtvPCzBotdCqXxcyRZ9Avs91reGC1wST5TJBbhUtod5G3bSXfGNubc3ZjLasFng19CmVnQhCww9zgdnyue",
  "key15": "229pQqCZeadZ51gb2bUZCjP6wjGr7QcihjuPf2veq68sY1TDPadM87mP4SASoDDn3X2kWfGFgNP95UXTAo79QEh4",
  "key16": "2BwgCcJMqJkzudN4CPYeZcYd8qaMZp5fCcmgHuUoGjRi7ed4MEQxmqERPBCFw7MfVH5qAGG5hrVc91Za9umj1JTt",
  "key17": "97AB7PNehHNbuoKGXTNFPbNxjJ2a5aSrHwvTXTKq3f7RrRG1Z5VdMszagGTNnbd7FbiEgWZYq4aJP3pcKuXc53G",
  "key18": "2WjbpZjNpVwNfo6zKmyCKckxryVMSBvNZdohZfcevKKfbAqw9G4aZ4SCZQWXrjoYRAcZDDnXXexYax6Su3s224di",
  "key19": "2Z8d2Urg9WneVFtRAaBL4X2xXLPigvh7Gw6qbbzibvUvYicm7z8ZDncegWCNnLvwMf2ScXzAuH4G43M74xd5SAy6",
  "key20": "gwwZAgTGjh7Cr9pkdJSBPWsSap3B2hcxnW1jTYtYC3vfyB9xa9dyp1GTULyDhLF28m6MYs5u44h2EMWhix1CWaB",
  "key21": "ZbDwWwYvgAZvuzhDY17Jho2FqeXa5qmMhBy7tzvqLmdePPQXPHYYgnzXthmKMKtLqf82hsnKN93gYATrYHsKuuW",
  "key22": "3DUqtXTW4Bi8Cpo8xz92k2tzoQCrjDcNxV71tHq7NW5mnXjCWYG22do6K8DpRso9TpjTqybBjcmjj1U5N3iKvkFp",
  "key23": "5dL7WT7bfQmgeeW6jCcxRvmunM6WLXZaq84eHqy5z3YuSSf7zSs1CFaVqG9HivxuAb1PeyQTYcExTw7LExqunSe9",
  "key24": "5Z1sneoCDNMwx46FTbL5E8MUvuBNaWTAvHvafFkziggFUhc5ivNFNnbDCmDLQ8maLXZd6yD73pB9g7nkd3cDtrCv",
  "key25": "5ZmxC8Vh6Sgffv5CKzaLmVJJq8EcVhWmGrpLi74Ggiw3XWHTk3TPMEqELM8xXCFkC84dSF85FTvxQ7GzdNYvBD5t",
  "key26": "653CuCB8BTmHtqNZus6izwHqbeMmJ4epzY2jRcDXvqCA9YTVm5NcFe2RfVPhh2ADYAfkeTaUq55XTqHJhAHVXApq",
  "key27": "3SGzhoTudaVoLZiM6DjdLob2HZwpSaQfQVEvDoUFm2rvSK8sScJnPrAe69myHECFhX6kmp2DVti32UWVGGsWwXWx",
  "key28": "KeLzFAzPHrcTasdWX35y2k5Qssx8dDccGA4mKubyjEkhibDKeL45W7YHCvmVWy6j5LuA3VnhKqLbcyaEfymQH5S",
  "key29": "5AjVc2An9KoqgzhpuCg3KLdBFmkDMx6SSpZpEGraC4r8yv8hqcxhWNmy3YL95gLWNhmifWyinHvRvsai3DyRiFDd",
  "key30": "4HtmRZzcuG3SAWEap4tfR7gdSMAmwUzPgzopx2Jyw6MkLmKEQNTpBUuyBfK3yA7xfXzMVtLvyE9upJd8EbHxohqP",
  "key31": "35PrneoipvweKG1m5N6FesDs8zmtPa9jmGinhJL87JsFFJYpQZFaVK5N14zMkzY2xcyWTnwiJBuUUBx7USKRoHky"
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
