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
    "4Wfb4RWnwtJ9GQN4STL373QWYC5aBHYecp8eSnLsUFQ5BygQrci7KXD2EJ9LQgpDRrwpQd8v9oRNw9zCUXR4w27j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QDnYhdytgcuCuYfqyAWU9aKZvGroktBF47kz6RCqTM1icF7HeHp6S1pvi7SaV9xPEUYL7jXeutyo7mJFiUx2umN",
  "key1": "2YgTXDzYNAARVKJev7njueUS5QBebUNMPuf7HPK8qfB7wqDpPFFVjq9wCPGevZRjTnU1KhaSL4kbCtkN4YJ3w4fo",
  "key2": "PMN1aUnM6qiHgk84UZ2pxJMsjuCjy1ZAop4MBS68nEEGYjPBdnhGWjtkdByCbvr8LguwhLuxUEqwb8HKvsBdv2g",
  "key3": "2gPjrbQ5JXTjJSnWjYG8UvM8PhTom7YcEyAEfzfiwNMXtoJAWVowmxuVFVY1avaS78PPRXjiiygkyJ3kUyaWKju9",
  "key4": "3FamvYEzRnaD4Y2htWHwkkzsQzdzrKJ9fiuTXsiK3UCKXnCu7Yv9QB8b6b8uzUBDP8QSGAZFa5PKx3wG1qGPMGwU",
  "key5": "4UXSvr8N3Po4zKas1AKncbibgVJvvH5ycK2qDnY1RwHLDmWfCq4enShoGansTWgQrv5yix8RX4AFHbyQGaX3kMfm",
  "key6": "35R27CMCpbGYzEuAY1QyCZaYcuhsHpT2NmsHnAMZhp2shLzHhCPQMWfT8e2TBY4qqW87hdWLtnymM4NWNpWkhxM1",
  "key7": "3KGXU6Qzpouq6foHUfGrBvDf3AFAqJgK37mm1brejV6o7XPMrsLgjBJyd3NiKH7MF4jNdv42GmxMi6WoBsA1QXjr",
  "key8": "28Y97LfnsXUpwmdCi5cR5HL3zfUpiEUH4fRodhbZm2Hp95GsEeX83eybvegpDh2jQZn5TmoCiPBKXA6mk19WQsvM",
  "key9": "YphCD2F46pe9B9bG3NmgpQbRrzqGxV3vGDLdAi9xZmGwsYQ9jcUqPimRWQourbv7dZo43L1tiTURVZBfdNQiEe1",
  "key10": "4GaZFXouw89nmT5ybVCZ5mx9f9uGGPEjX8LHSWSugvDsk8K34iHCamYd1kSTQL4uZJpqDhiHygj1Q8JSQVTeumDp",
  "key11": "5aU3nwLss7y5nK9FuHYvTuajtcww1CdPSD6vLcPRP9YTxwywXvTJJC5SQahXfU9rN9uxG4AVJe7K6G4NXTUAZPzh",
  "key12": "9wfUwrcvsn7QwpLjdDqPZHSWhMVXuqynBHkCZ9E1575epnQh15kp2SGq7EgcbpU2f2Qtkr5HFpPGaa7X7xQa1vC",
  "key13": "ozxurvoEJw5GTVtpphgxm7BG1hd4EHQMSzu5Lfm33wdqj1oeGmxuBWyfsboSkfYKBYg1mSVhFJrD1Q2nRoRHtFC",
  "key14": "48nZix5oqbRmd2UBKUyRYiPGCsw8MZy7eiZRJ4AUD7fJhsyV9z8MGy2qWutaTs8ndoU1zjsJf73DS3ZLbxcFGfdV",
  "key15": "3wKLaF9hY7wPduhfHYeDVWiP2xtHo3pfP5mmuJb9rfRXaYgtL27LReSErQmPM4PivkEC1FWfxH7mcwjwSjFEDqYY",
  "key16": "2B2ePPjig743i7XtocwbPnXYbLwZkJLPV8Skgyqmb9M1dAbveWs1jdPdbbb6hYjKFzvn5tWrdR9DNyMTgRuf8wpJ",
  "key17": "2JiezJKs43CfDiP5mAs72QJZzupyAwY6mCe9v5v1dbxMDpqR43Kb9p6TQtqscHqRFC5nERLKcvJhxQ8KrY1961ES",
  "key18": "3g6hkAJii6RqRhZKjrQLnXL8bBv82eF8uMvQYcH5aJw1yGNZ3S7nacqXvCT5dme6F9BhXboKJ5ZZ82rP2C6txUxS",
  "key19": "3QoXeGrWjieYsEfmvPfQnnjQa5noyZJL9eCbCBdsuMYVXFXrQHdf8dJhNoR6VZsqmizofSkh6ZREoGpUcGfBhr4o",
  "key20": "4veCe8v15Tr9QAgtGDM8HzioDV78ArCi9YUyFBadRJeqEyTHRMWY1zWrtzDVkNXUPRQzipPJmatCGLNHNYuomaUk",
  "key21": "5Fm9YNbydeHF6rq7ggB9cKKQWtYHwygHrhWywfgE9qbp6nebPV3J95qDYJWhUMRcmMi6j9p5BoicLjrJDd2V7LdT",
  "key22": "2DNXGyEPgsid8MXKX5QEasnghAMkhmzNPPQnozLGKU2ftKGpoGuzj3focYUndChjVNNuAZdjaT15oqaHYvX5ZEUz",
  "key23": "3Ex2MdApG4YzAFGMpDjuVrhcJzR56q6BifwWjWtNHJjfL4rHwfAmgNLKTVPvArxhQQyL7BpYXoBawtEh54BFqFNC",
  "key24": "3a4sHMor4VBDGkTM7K8sXVAn2JKf5HkZcfWPwNUbBBRNuJD5xk7LpgrH2bEV4bmSsyRoesPkvmwbmk1sDEapFLwj",
  "key25": "479att2Pba6ZVLc3QnkkiSMoqDHa8g3k9ZZZ4Q32iTbSeEcDcXVXaFnnwaS8cyiMmpkFro2s9DyHzP2ZGr6M8NEZ",
  "key26": "3E73aGLDQVroHBanMTE7dAy9vNoJ11xEFagBMNxLWRkDb68F7Hwmcsrk4ZnHCxtVaHfqL9KeZrpDNy3kzdR3TVqo",
  "key27": "t2M3khDpfjJprrqutfFTqWoSJhTB7eupnXfxPLAuv1rz5iRoYyiBowfy3pK9L2b14ykfBEr7BSYbh7v6UVSVM63",
  "key28": "KbwbuoTr1yhYQ869Hq1shhL5AQTnRp6HQ4zpdzZXMiDcYKCkkvHkBa9Mqsf3355SmpPGruDL4J31qpqgQ8fQXcV",
  "key29": "4bimo6DZkhFKNJJiSS6MxnRuRRpUhFVDugcZyiaExvTjG5G9qxSxLvheiA16QrHgahPgE1SJSnh3NqrWHXuSGoY8",
  "key30": "2g74mFHNK2vSis8Pj3gSPkxLUkiYhjRtzJkn4L1oXS6gVmEpmSGDkcGKEYiW483gASaTeWCGeUPaMj41zoEBEr51",
  "key31": "4LSQqGxrDR6YiksN29pkEH426BTg36gbVCqi6RXFVV6XF4otqb29e4fGu2jbzzJYVroociRpYJaNcgeVXiNJmNBb",
  "key32": "2BjyTDcVxdY3xMs9Sgzntqjak7SqriQnvMVUTWnV5UgxrkbHnx4nBf4AsGBYBDqTg5N9ss9ez6a5hSq4FqBds27D"
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
