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
    "4K8CgW8uSF4mmrXXQ2prZtDV3ETTMT7wCTS4SQEBifc2VVdP8JnDVTwKYKprpkLdUXRRhKBhFR6FMZYpEGwLxxAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pBgB2MiRjvM4y4z3NWJdiuMqLCgG7Ge6NANeafh2xMG6bue9FRGxzRQs7gfye1YbLVowmAfkphjgMVyQVXW3xnT",
  "key1": "4KKJM97jR3r51n8RVtvLFXyYZ5UpB4Qxb8TsFkY8Q63N36mVEcaJF1Rcbp822ChvQNsHmfvQjcRBu25VgWfKPGGB",
  "key2": "UnnjAhqFUobSRYAJd6xc7VA6V4HqU2p7DzkYxyTh6tdPZjmxH9nAC4V6fk9aEXUU2LnUZV11hJyLDe76tj764vP",
  "key3": "4nT2zX2hH6DBbWb2B1E3RoWULqqa3nBotey6emHUndASr3tZVifQPpFtsjmmJvevhMYqQuwMoNkfYPmnG7vBfsZt",
  "key4": "4zrwfaB5nyvv5jcREfcCQwGEt8TFG1UmQdqT6v73uGNzsxm5kCJXKXjvA4KzJhJQFcxRH2AA9Rh2wsmVF2ZcWJHU",
  "key5": "4vzYgamXFfkc9feSSyx2Umowb1rGKNnmV6UbcV8t9B5Bug1ZozonLzqix867khaZXPPS5HZa3yjSuAaLYMqGPH2e",
  "key6": "Dg3pNd5zL3EfynuFpL6aUeFBCd6gt1mCXVD7o9wTu3eJvJ5g9d7DfnvCszwjKFy2bpQg2gAdjnNFnGBVXimMMUY",
  "key7": "VY4ztgkZZmVALBRTtMEDdqzdQEALiFwUzfGYdZpng8sZv8scXwKhCngyzgRd2PJZFznYf9vo5Pw4e7eK6HmH8L4",
  "key8": "5VEXXqdz4HyX7aFFpvwxKYfN8E11y1MB4xKHcC1k789d2JdbnDm6LcjVPin3m6d9AYADoE17PM1fSYWNtUoxBF43",
  "key9": "41vySq7rRC4Ny9CJyLQGwrbaWkT3vv9MoXGaXikQyDrDt1jAtvDjUtznHxKMzjNfKYxMadjuAebhUMxbqnWwmT2e",
  "key10": "5t9wdJAdbwboUVrzWsFFB675yuXzNdHZkLRaDBbb45WLUit8wqm7SuWRokcx7HP7Z4mVvhdArB7AeeLxLevzP4y5",
  "key11": "2EoywSfzEcuPsjme1NZ5rHirvBKrBgDuj7a3G1U1Yn273EcGH7PXo45Vv6spRFBsd6Z1Fd5XJVhJjDe8eVsZGxan",
  "key12": "4gJ9psxcJSjUL5kvdWQv3E33CN3pykdCZ3faG51ho9hA2qJL2z4rHhxLjbQwbDxPSrn5iQ7AqNqvzBmkXvwfvTCy",
  "key13": "4rrN9112g9itmLjZFbVe6Y1qVjjzvKquTWGEUyoCqFV2am8pkCKmo1Pq4ocbB7YarzKuzyAcJCne6CaXmYWFvTjd",
  "key14": "Ft7Z6sUCTAxbtR4EcKrev8rmRysaHw6f7ReWDFQiUnm3HkmRLJ62ozkBUmdA5wL7MftzYD1nmhGk87QoHHhyLdL",
  "key15": "4SegXLT53rHxXVbKavqHhyG9K3vB4dK3oVyvo6URFBzQNE7HjqwpCdduTYz4GLP2GpENsbmkxPx7azwGqEoA9spS",
  "key16": "5QXd1CvwrwJpnyGMkCVvCvVtdQYaESLsWhzpZKdDSyneBW8y4NudgjiJQyoeZ8rs8Zu5HNndpkPWN7h43EqVtMEm",
  "key17": "23WTnQwqHagwQSQz28ujGAiksqi3rkPo9hrfSjYSKCLPNRyn5eWnh731L34wVuZdftHYQt7yN162QEuvBF4Qxqhm",
  "key18": "2SzdX4XKY3fdSTFNvH12JeoWVgL9UD9tRaDfnUd6cK2r6TC7hax9VN6ygKiXpJiZVhabkVrr3FkhLN733TgyFZdM",
  "key19": "2KHXiEXoKFaZrc1hJ49mUX7sfYSWHeXaWhTWwsNnY4ksh3FkjL71G2KjPHNcsVCXunEU1KumpyXvqUfmfWu3rXsZ",
  "key20": "44etrNkxKVcu7n3krcm1pcNRr9KGMRmPq5B3iCeyVjgawhfFf9o7BjcUvXfQHMC8YdbagCjUWxtoqaWkSe8U6BQ2",
  "key21": "3pnPyPwwSb4FHCmcd2E5xrN8MbHBh9QFuC4j3rMn5ot4oJvkX3wdL6Y3f8q8tuHTNFAFKUbF4xpVZ7Sqf325F3MM",
  "key22": "23D1QsD5odoLkiaSyGpBUK586ahYxQxjn3BgjDwMRmYZbJCy8atiZ4dD9xo6ftkvkavhHSCKqD8VzM1oZgFprqPB",
  "key23": "2ayxD4eYHPUFiCdBR5xDpzrjPs4b9eqGrXkLtVq26GMFQPTktFrXo47922vfdcnaod1j855oSYd7nwE1MfkvfAFx",
  "key24": "4HQfNh7UcEdo5ksAgWMaLidqTpgqyKNN1QHbZB2eCsv82u5ywwKJnoL8iqQMPKCFjYEpn13PLPUJGmamPW9NYAG2",
  "key25": "2cPe6Wvp1SpWccJtJiz6AXwwGYYdQLCGqzH65VWpJFbpVuf1QNFdD3UzyQptG2QHDjebUHRG8RhPHmLLFLUtYHWc",
  "key26": "5a8knrAFjxoM5Xr8Mqtqmcwu2K8pvgbMgfRzkrDBwJvcUifdzKebdmCbTsGvHHTmcLkwqzWEVRozxr4BsEp4Gz2x",
  "key27": "5a1f1mTUzESvWMeZKdo4ArRvnNKpbgFjGuqbszZrcAo4F3fBU4h737nUHcgek5TibmEiBrxLpMgT21vKSB8z9jYp",
  "key28": "46m97n3i4XpGRH5QNwyE7uAy4G5nMoFy7fYWo8arQspYsavMj9pDHyxr3zbH1GcVwh4BXmgqx2LAytxx8NA6yCcJ",
  "key29": "ZiFiJhPtjy2RxEayHDQt3npwfaT43pxzy8fgzfSck5JcBkh8kH55TriSQWmJoXE74cryp8SXvxTUZQRSQFxRM92",
  "key30": "5QYKxYgkGrwW7dy2WJFMTix9YbgpJXqVZY34V2q7SVeh9AG73HpsQyXzrjQkChMUkF4gE5M83EzYJXbuKPhLNqhR",
  "key31": "3hAsvxUsdT9LLnXXHZxtjoNiEu9sjSvgnC3n92eaeJkPsWJH772BK98xNiKmcGzRz2AB52CYjJqPLgKhY828sMwW",
  "key32": "3GQMkdoRMuA5iBxYqA7h3m2xd25EvnZ2eBNuEGApeUpQ6K7VZZy3Gfjp5S728jsisHHDqutTqngoKdX4ZnJjXuSL",
  "key33": "5BGtVvNBTYuoCa7S62YAFNDoRUthNqe5QdyeHhz2rdXFhGxzkqnbPvckRuLZjFVs7iDzdg9ZDFfXMzEd2ED9vmHi",
  "key34": "2LN5NMnopj1dX4k4wPAjNPicBCChRfFzWaaBvoXkHDKA685YoRnT9tb42yvSDvfMtunK1FFQ14a6pMrmSngXR62Y",
  "key35": "57WGUBa2PhUfx3u7HA3rF44bkyeLiLxqcKShcpi19Z3JUekXSuQSVQ3nfjGsJqNSVDZjNLZNprbjHzbVgmjhtBsh",
  "key36": "xnuhxGd4VSTF9yvDzuKifeRqvttNzY26sCJWufMapGnLEtZjAmvVWh3AL8ed5FDN9HCSJq34sJ3NXAwmT8QRZu9",
  "key37": "2P82UkK5DGccrjyVTjvBkERCviKbrwQn1XBkotnhCqi2YCFFWzgv8oUoz1UYxxnM3z7aKjijsCpvNZi8wNibbcQa",
  "key38": "4KhoDYoXi5F1VSMSGV2yYinttoz1iHeNyYcrBEY8g7BXy7BwWJ4LpxsrVneTKmUDWQNP9BJSB3WYooKGPLayCLLc"
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
