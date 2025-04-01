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
    "5HWF4R9iNnMqUAZSN3TbZz5AUuWfrGxef5YBqGyq3fpJ8CRuS4KMeJyLnnHLvX7GsrzQdWmR4fr3wYcCe7FxoDU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oEhRS6HQc9cj7Zog6bpLRwjyi4SSpqpamYNKWWhd8AF13phM4EVoRUCn2S4Qw2g34CYk1PhrjhgNVm5TabRZEVu",
  "key1": "2RJMzqHMuKdj9EYwWTQs31EPZeP3QwFRsNDRvHBuyQ2F5enjnWoLQqE8TRCLy1VCUhPEFSRLbkdXCBPUFA27Z8oJ",
  "key2": "ojF3PuQF8ob8hRVCXpokJY9CMZowQpBN5V6EY4xtThoa3Vb5K2pBcNJfiXWvfYdnQ1HPfgHdBM5WkoT7tD4Ktd8",
  "key3": "12GBbPp3VburacjD3aWtwKjBwo7vzQreuxviBFVurBrp4QDaTG9J6Yz52ziB6NCAHNw7NiPrPbRUQAshath3N46",
  "key4": "3ShjWaDXvEPHoR2PLxEu5PpD3jqCgZ5vRxpaxnbbaR4cjeg6mtZY76TZ11wBiARCkAe32zpSc95sSAns5fa4m3Jp",
  "key5": "3MhCqaorPmEYggs94AuyXuzKbTWG9AAd8vUtuGzorCkRnQSpf4vQd9eWuz1PRqoELZJbCVjkFkGN2YufDpc6NRqZ",
  "key6": "5G5JtyAsQw72jrCvYqjXprSFvccRkvAAWu7hKRH7kb1EqNgkvacfb8XUQNpEkEaukFQDtBFxn1z1LnadJNbQxgqE",
  "key7": "45z1GFfndh9HsCYh9Bz3FNVkXECZdSqf7ao4VKuJEU9b8TbFAZSo6ddkvo8aM7qkYxQeE4V39mp7EphX8hH5dU5p",
  "key8": "5yeCVB2sS3NVFQCLWFtqNSYrjAM4PisdcpS2CYGcmhRdGA4K23YTtskCBNFcBA1Xxzftii5sUbroLpyERvH8vUiL",
  "key9": "3GKC6YfP2ZtiozuGn6nmdvUud8P5QdUukSvdxrHxQQ4fuaQWBAVbbSprbxWmJFqZ6SBeiPyEkbgRtFSbepP3JKis",
  "key10": "52fhF7mqSTVWK8ARCqKTSWQkDdZUkWh8PhHUnxdeyH2HdHVngoMTaiFFbaLguyxz6fQJjexQsUQnh1p8h3rSpeDx",
  "key11": "3oQJJD8NFZ9c8thtawmB7ypKJ4ijvjck63MNxZhzCouSGtCwoKqFEoeBMH6pwpdsSmQT7F6siM7skkR6RyhHpsqQ",
  "key12": "2qhtvhAHmJ9tKNqK1yWpgs7P7pwVVn4gsAk6eynaMqTfVdBpVxtfsPAS5ZoyS5ZiJ5HzYyn8hKEdFaegLpYt25qn",
  "key13": "2fjcjDTDNA6o6N6k94QTGQa9TZSVyFd7agntQdZtt8gBpuDh6q1S9LJTVmyk53huXBBNnbyQceQ7jQeP5Ai69Lae",
  "key14": "4Yp15d7mBE94Y8r8hj1VTP5z8ciLSotabBE5tWCWkGh4nc4jop9caZawe5kdXFj3KKupsq7JtrrKjfENzkQwu1Uh",
  "key15": "5s4hHaSqSRygFTwbBFNKgqgtwdhKT6jRuz8mPZLNps9JtfVajYW4fKxAkexHUj7cS7W2SdvDJE8XdUoTyAUUU2zZ",
  "key16": "4EX6JiGVgYvi2nJsTKAdHuWHA96R3nNYZPZSUeSbuJnXX2DjochDULyqPfMxPi4vgnqFh6pDUFy7Ag5PV4Bz2HcK",
  "key17": "3UwB4izjWaz3fycsytSimp1RqYrdpYUk9dWALQ1Lk1NUYFyLN6CZWmgxHS6nBf3HzXUJMfXpg25JQn1bF1RAFxak",
  "key18": "5nttFwqTkt7uCvM8ym4CEQcCuvoRRcCJMkeCxQv1XVK3UfJXAex3YakT7TWy98jgtaipa2NZNKX5BufTouoRnunM",
  "key19": "n94YxyNNc5htwZJ7u8GQDn89JbhMcBbktP8EoSvh1Bi7xBJHnBSFMZhKcpBPg6GTKBeTzmkjys5Qu7xMx7q22wA",
  "key20": "jXkdY9ms2gufomyDfr2HGeS4HkjF5qyAdUxRboFf5ZDQTGL5z5zCX3FtsfzvVv72T89ac969EyfRPJQoGXt2QGZ",
  "key21": "3TYaPCRogyig7EnXqJ7V7FCNtsJz4zAnfLpgB51y6BzNPRXQf5Et32tb8Cn7RkooADTyJjA2jhmMa95fwAYZrRH9",
  "key22": "5Nm4FBWz6v8XFSsbJ2zXzgEEZHkDsJAqNrPb4cxVSRzohxJp9bWiXDeyeBq8pvKoKu69yg8HCRfdoriComxv5nxk",
  "key23": "3CPdGgFNyLm8doRpA5Qtq7fDJcze3KSouVmCSZkm8ker2zQBWq2zYn82G6YqNrTN8A3vDZPi16L6s7PtuoSYQxGS",
  "key24": "54YnXC92D1CDi5M4XybaPRTXeCiZ8ng61uQ8A4V7WASMGbjfgEASkNEyqfeGn9A4JeaV9Dt9DXQ8FiNN5LGytjRZ",
  "key25": "52wCdTDXYCsBi6gLrxSzwCaWTtXYJqXvNSqWvYzACvFBcjkAdLEockBgM68svbUp3gqxEuC3ULPKxFkFksUSYApu",
  "key26": "2uPAP6EznjCo9b3zbdiGwh5KgX1MfQ2mPsBaFUW5tm9oBkHXjTcYgQuC5YDGdFbst9iC7vAtss2bbJYaYXjEtHHq",
  "key27": "2NXu7dk11WHckpT8Waby8uDP1txbrz16JyxQtTYo387Ye98dayhX5KtWMK4pWVq396ZSt1hnyymuxCcjaYTF46qW",
  "key28": "5TKBCsQmu5epVakWq2PsmNF5NKvE2HkAUR8Hm6FVJX7NNgHDQ6e7oZhQQUBbapZFSqJaRz4g6mR4AyfzuAArs6C7",
  "key29": "36SVApXrVeXgphttVQzF8qCd76st6BYQSaHTvSz88PuXDwUnZncx49aitnf4c9q9pXgzwsA8EAXC9MGPQB3H3avn",
  "key30": "3eveLiBobkHZaWMW2sukPtYDGgGzZXwVMQezh5yauVUKNZebYfqGm8jD6tMKxRDHcJZGMrBwwh8nsmHWWUZ9FKQT",
  "key31": "3gTb6uj92zLpydGoLDE4qcwi8gLN7yonBt48HhrbT7xhxvK3s6fxLM9saJAk7LXJXoWuFszZmWGESmuKWvMLrFBV",
  "key32": "4SqGqGMaYXUE69yK3PMQ4mpg3LjPH7SJ6gRTWKZMnApqSNxDGyQujx7J5jvSmfiNbLBxKMwV7c1G9szRoqGzmR6u"
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
