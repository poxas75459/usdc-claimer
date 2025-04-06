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
    "66mWhy9aHBzLhFAcDBjo7n81oyreKtDjrXB4gUtefhXZrhKj4TaqA1w1DJnWs37kKy73szMaEGGqF7Di9AmyKkjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5edUEunfoS78jYWEGKXE5sGkAdQtuMLfdsT8vcPx59y7gTtWpBAMzk5VxGEUmCCnEiyUwCt8pZpqUxtuudi1dt6X",
  "key1": "2NhiehUtFmZPdbKHDXpEGz4LW8L2QqzBrfzGQECQosFpSKsdJbdZMh8hZwcsEJh58g3iUAzCPdNKgm7uYvojsNuj",
  "key2": "37zYpaaMqaePoKQK96VfSz4pApztFvYybsm9dbm3VSb3gvj5SSRnfRykLgVVnx2TJw4idoL8A1h9xKAbFMAmo6c2",
  "key3": "3Uav1ZFspvDyyPtaZED8W9i6wU2CAd6aDFnek8NNybWKGbfqAsU49yCHdSa9uocDZ1UwR3UgZ1fXG8YqgN43GHDU",
  "key4": "jiwi3S4o17XGhdMtjNWTgNC2dbaB9tJLozmmc43cj3qzy34F7WvacMjDSeZXJ82etBYfceqSHcRYJ2hSSWKdZE4",
  "key5": "36hcspmmL1ChRiCo51PwA5NtikiroMX8c7mXLgJbQzFkMwRa3BTNWagrPseQhtjSjxAaKUadpFHkio4tbQpvPGv8",
  "key6": "MFhXiHj8NguqPBEnvx93nFHaDjkw29CyGuCTg2nbrdqQ2ohMxPYmnxWQT8tPZrPrea7gehfn8Wf7eB7qAQsk5bc",
  "key7": "3fWJC5FTxrMEtjjp9b8RWU4ivc4RGpEsUTLnYmbxcjsmoo39ffNL2Q1UuLFdnhZL2WfNugUsefAPmQHPKPf5pUPD",
  "key8": "vFXakQ4sbM1sSP6SZ9cQFNiyDcjNRBWkz612cPBHm3o2AdM6STH7Ubnd1ykQUCdH4JNdncQ9Y9jhyW8CvjEg1q9",
  "key9": "2t6Pgebz62zzjqcD9Nx5gEsLUjhDKRUzyQKaX6S2vGKGvHJajn2gkXM2tuCn8exkDyfHS3WN26hPtQGChHDW4CjY",
  "key10": "5Sf37nS1Q3tfiVVxHqzBMFe6gTFwjuqtmVCus3Ek2Pq4LCJCc87PET5dZhJpq84DYQ76tHmK1gYH4o2rpKnNDaQU",
  "key11": "2ZP9PDgvH8LLYiARsxk1Vu9fBTmRuHCcH3hcLdmjmAxafmFDjPBRPFoFUp7s2ku3ae4zzwr6Wr3fn56GFz32Wj1f",
  "key12": "4apbMemNU3sofY1E1ig9KMTqCe3Vo8qMornRGtngFwkN4fBZJe8dokqxaMaH3X6wrWJXAfydUc8b6sJXrULm9ivd",
  "key13": "3MSiKZP24eWa6uvmrKhnLx6mX1zUJiwmQJsJryY8AGFKcugBCQUw7AeAoMr55Nzpr9KeZnRiZyKwFjhhRmCvvoht",
  "key14": "61Lpe4RpFkq3aeYjghS1WEZk5mdT8Ym6zaRKCcNrAUGPrfXr4qHXudBtfSqnJSQR1U12XLq432Fp2JHvTM5SquyJ",
  "key15": "29MSnmUyjmRQ3tNLgxDhLDWDAq4Fr7s8FPeS29a19oUPtzaB1NEzADvvnfLmPxMLXyjsEDGj4LnzcnJa1trpLNhw",
  "key16": "64wu2msDHNRJyfHyAsWNWV4jXMDDm9aVm4yqxHhrhJbGfd9yV4dGDbiwSKPXSoaHiqFUivDcfQM6BTZTxhghTcY3",
  "key17": "2MbnxLLj27bdL5ViL9XjHWcVPTNKMCqhieHvHqX9BwbzRfu1zWrG3qyG8bw4NGSHQmF9ZFYw2kS7AxzVA24yqwBv",
  "key18": "4QytNL4Ze739J9tEw4gtTGTExbfUgyJS3J4uMof1m2Pum3eXBZWyVeb7j2hehbRXxRCapcRUsp2DV1nX3d393KuS",
  "key19": "3XWDMbk85gzRpdqRaaK1nZNewz8UfPvMjy1eKz9MkeRHik9hCZqhkkTvf9MsvH3ex7sNXCxBzgNiNd2fnKiAVraz",
  "key20": "8aGYUhHNsfbvt9vZpnpmJdrGyrcAHBkVH4RwdMxZSzGt2Y8fNKH6vtejMKPKZiJbxYUWANGoqfjRWPyYG1FdvnF",
  "key21": "xDrAd3fZpVRP8ExvukAb6Uwac9LCzVSTKRnW6s6B8h4MP3FiRLQ9Mpw9QRpZ8kLYE7S5koC12Wkw7tjZtGCY7wG",
  "key22": "2R8kTjREw9H4mq9WM6ySirkptfcwidD6Q7tGNpCEykEPY7ZvUZnQV7GGuZvsHBrsdXHr4D82NLHdKMYWACZP1oPS",
  "key23": "59zeyDjTpVduxfJM27ucKqj5zXESnD8rPygnpGdfSrnQiLHY11LdfnGWRbd39ymNGyNa2VNc4UGy3VWrP4gqwPBm",
  "key24": "5i8QVpkxxqAxzxQ4BBJLoVFqYsUaeEgt2qtKLXQW9vD4do9kpcV7Z5BDKXGtKx1tU8xpse6sFPcno7PiepFxsGLr",
  "key25": "5RKU4KpY3NzQFCah4KtrnZJNhRSXM8VhXZMy9hNJsJQa7SBT2CKoPX69dcVEfAyWvyfKqAHWagfBzwUE6L5cgTc6",
  "key26": "5SnngPxR89u65ArbVqMHpqq8babcoFeFJt58xEx6wVG93nwgx66rDd7LbxBRNbsbMWrNtHMpEC1kZp2knVi6EQyX",
  "key27": "kXVUprDGL7UbBHGAurR7D4Sin9DSEMHk7eskFh9knTmRV571Z2XCMqMNY9VvywCoARPz9CnjJ4NcT8gAmyoMZzD",
  "key28": "3VCeu3GiKNBhkokQtpYZDDMXgxfcKGU2D6P2GijhENfZKzBbnyRR79Ed3gwy5F9jQBS1Yir4U6nTZbpPWddEJSKa",
  "key29": "2DM4tKfKaMF3JmCGf2dShiQzMGk7fXreV79Snpd4yBcjW1aMFeqBPFgJtMxCnpoxZt8SfTdmCJJfA2qJMLN8bT4b",
  "key30": "ovNzeXx4tQcTaW9hMsdmvc5EB1p9gCZUBgUVpDYG9jgZWiUXvJxAKgqEoot7K2KktcgkuEsorrkQ3kR3qJRVHMA",
  "key31": "34VQGU1ZXkDkhJ3FaGx1n9KrMWt8eHkVX2uF2v5SSfA2HfQBC18MruX2QyC6QsbD4gPwUHjLAxASuDgGpzGr1ffZ",
  "key32": "4YfiuW9TwQz1c8x8vbUpN8z3SYBkHn54xT5bkD1Dycwz2sE4XNCtiLFd71oYLRxo3SPvXc2yaMprimTK2mK5oo3n",
  "key33": "39jpPvLJoVr2CwHwEhRwuMXuJirP5ERpCNJcnZ7wtsgJDffqJiiev772oEdquG8NEyEzmexUsvmNZWD7dAiEXrPY",
  "key34": "5jQfe12DHHjL6cUfNhMYroFxZSA31Ba5tdKAiiSvWh8UiEQjHWJGaXp6koPXf3aiEimB7tEGz6LoDKHCAbPNXsZj",
  "key35": "36tWuUPpToh4oEqKo1P2QbFatFZWy9EYJWxLfX22P9wR3x1ot1kbu6XgEn86cvdfrF6psPpQdNf8jVcpStnWnFgz",
  "key36": "61b7ri7twW9kvUWj6H2BFi2i2ypnWYZv7exctryRDAC13xH6GoCRGg7LfC2jexHwL3BDwMUPkoQyz5KdHLzQxoz7"
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
