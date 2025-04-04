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
    "313vgTN57Ph7qkwdsA5RKT8PCpK6mvq5BdJHQD58NSyMpaDXnKjzKHR6B8kZWFEtp8MHTZUfFpgap14u9h7nHQLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XfJEpr29zs6shawEtrKeCKZWHz8dnirQTNVRRfXF3XxAi6kp6LVDDaXdVma8oz4rw3L8xJorEKq5krKV6AT31fc",
  "key1": "3tmtLZn4WkZZJXve8zDsdZDtiwXYYxRsSpkowu2fWUCuHcTMs9aFmKasChTyJ9QjP1iVAQrtNTo5rEZoYEbSJPjY",
  "key2": "31jNGTFF4ienm2qoi5NYR2cQjYJmGSEjV41U1EJdPx5vHLv6pMoz5EM939cvqj6dJHwLcg48b8YiD2PmUAy9bnh5",
  "key3": "3KbFMHCW8CPcwQadQiAghnWD23qZhzr7H2BcTwy4j6nFeCmaG3mejKnrSLgqdKPZ2Cc1zbodzKerfArra17DDXgS",
  "key4": "3XC345FzBf8pFCm43z1tmg1Gec7Ngx4dqe93Gd1F2hXJUswRBXdAQtWpfATEykeC29njyDKkpUZV8buXP32L2GV4",
  "key5": "2Bu4tb5afTn8JxY2YyLJStsGAcBw9MqDE65GkeJqC5xxPj9PF2Q6pHdyJ62BgPgrwNPGv8mPDMiBLxZv2npazvxb",
  "key6": "3dbtPPGs2hDPnJrFAMy8kMimbj7gm8QRqDEp23G8n6juBCJfwE4XPgLyKdw473ob6Pk7PsHNFHngXoXpJS4Z5bWM",
  "key7": "5LGLZ9x3tDV2MSkiaJhayzDJeBiEx6eZo2xSADrMRjQ9Ks4Ubxoe6qCivVzSaDGZnrwTtkLwoWqi9gyZM9pKwDb",
  "key8": "4qBzW3MaPGTFrXMZHXc2f6HpN3uDHtvJ2B2apM39L8sV8aUQD8QEw5jYXLXhfJZm5w9abURow95HNxgT3NoF2Zdj",
  "key9": "3UHiLmKqo9GtBrNMXafaEFTCDDcbr1XXycsMuj69cXYoR7fBbFLooGwnb2mbviQX1WqC2K7ZnToCUXcVLBN4kbmB",
  "key10": "2q3gibdnvwpbTrwQnKzUMeVCwddBLGQeh2LehDX6DWUFSFvGyhyLa5KqxqJtRJ25Go3Ao4zxMosm42wrQ1rDXhLx",
  "key11": "H4fs7NqTMwCNe1hsDtS3Y2iMDCwCSHox4KidhYL4PjNPVqG6NBSNqfehgeqtAZ3F5vQsRiXpVt3sehTzotfsuvE",
  "key12": "99x71of442FvUGTDKmjUt6Gi8h7PgaPPvBJKqQfBoJJymeUjtKT9VVPBKgpGndoheaowY191Y8ubReQVJkVXpKL",
  "key13": "3cwReVujm2HDxPesn1W3HqHtLm1PVws5ogTvjpUET6upgRw5Qf5d6RHzUqYFp8n8MDYKWbKpnoDtVhkKcmuzXXue",
  "key14": "2e4RQDF5bC5xXdXAXTkg1iKXmFS7SLqUcJrux5uzwT53p8jjspEBZCeJU2ec17PyUTVA6EqoA6m9b1nwksty8nkr",
  "key15": "3LuSJEynpS2Rubtvz6jjgUWBeCq8V8ihNh7UvzpwTzwkCM5djc48it5HPoFcUm6wDf9GyPfS1TyioJgDJs1Dro42",
  "key16": "3MS98EVjdWtSjQjSr6KCFPZz3qv42x6EEUVfWasw6Dm8KXfT67U48j879jY9aAo9LuwKdAhsQ1QDCdrDCZBaU2EM",
  "key17": "2oYRcrBsfxmN9LPgLYeCHreBaAH7YKMsx9Zfi3vwbJC3KyDvzkLa1Lc14M5mLc2eaFXPCLNCegC2UsNBeRsUUhov",
  "key18": "3HGz94jo6kNtxoJkiubqn22jdvkRJkrthHU3Ru5aZXPyTv2DC2s2b8TL33GTASkiMPRHSLtReWs8pLi7TXVAgwCd",
  "key19": "3UMTPR55giays4t8eSmiWaRtG3RUGjoMx8N2UH2JXBFmduUawUtyyJHx9ugsFPmHJjjK2D9R2tprhXv6EB5Eg4pa",
  "key20": "2ZX5r86FSDRWhr1JxJgCRnRsjxBgZFaEdMcQW1vDAtgXouB6kQ7yWMDg9c36kxjFoFr1VBL3j1LmoGNCudLnmEdB",
  "key21": "4tmbYPerCn9hdktiu5UvjDWBS8PPn6wvf1Lp7AzPAg1LnXd9DtgoxyUWXMoTBCHaEJWQpkALNPYZvvX4k4LiczG2",
  "key22": "3VudS4xjYkwrua3z1CQZkerahBYD2q6spA4RcSkPovN6bHpQaXo3S8kSgy5X2k1oHAqE2zVJVm26vTt1b5DSwtG8",
  "key23": "7Ykj8ZNjSoUSdLM8i1HuvJ7fSbSwJ4wGVgBShiwna6ieqDtf8mLGMn86HntxRKBDWSA7LruUtLrLyFFcyDkkxqR",
  "key24": "2GPu8j9oUxHGC5BU8zEWJaSy9dzmPYN94nbcV1mecWcgZBGeWmXFzvN5CS5WS4dVxeNFbZfFYSsvSYpZaHs67H9H",
  "key25": "41M5JB29DeEKaxp9dbqUQnRVcNxdSEFh9kvvpqeqMDngGcUiPNGsXdKuBvhrk7L4nmAHZpBkNhZYf2Bnu4dKWAwo",
  "key26": "3edBeyCLd6UduGmjuHWJ6AeTb1nhyLjQZod6AEzT9RNHTgdG4mT1raoJHv9857AH85N4BC2fNFSARrrxh3yTQJvr",
  "key27": "4f2e62PsREoqjku3WzCbgEUmTjMeYWLpFC3Zw2eUZEQSxmsVafvPdBwBBQXCvk3pRGudVvPtaRAMrLfYZTX6K51P",
  "key28": "C6tiu55yGimmiwbBDinUCdSETFE8yimm2UYCVjgAcLJFRdQodSSCsQdqRpccVNZHw3qwUbpZEKfbHLih2Jko5ge",
  "key29": "4v3VTtVJiULD6mcj7yyHM9xL4MYiC3qPFiNrvQ8XfRuGTfaCczgPFT1PDQLa3GwvYYUUvrAyNw2qJxQyznmAtnZm",
  "key30": "5iQpN2SXXxQWmT9G4T1Nsyy5vG64qsdfHuMNPXLUByNosWrDFSaU5n187xSKatzZPhYFobiCpxB8fmQzJEZcCA65",
  "key31": "4j4e6uSGuGgMwQ3ADdaDRDTcCTCBSE5s6R5T2FAbQwcKWmHTh3FnxtniUoapK5whWAvNTz8dDA4fjCnHZT7pL6Db",
  "key32": "5VoUPiSmD3mJoxRWvsfiUAgAK9gZAQXUpu6XEgsDPSKittxpAyERdhPPj3euycWVVANADop75DZDC1hXZ1zdM4mL",
  "key33": "4MoproayLJwXzPstYfSf425PmBHSSeT7RdqC1Yct1GY7uBjKYE3wZY83UaTe1HtGgZ3eCTN9Pxovyidm8yda6FRd",
  "key34": "37bBeCckdWCp9s3kNqE2VQtV47ArFHY5Fwnvs2BnxyX6d1aB3eFN4V7bXMXfgtPecJvv3VfUHwq9eJJKV2aKzEgn",
  "key35": "2Jzg1jVm5iEy4QpDfqJ2uknz6wvKRa6v3fM4ik1vvoauwmvR6gVzVGDWVUyivG3y2B2sWgn3M5vrUdx6wCtNN9wx"
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
