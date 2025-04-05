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
    "3ZbSsMGBXhd1DybDFLwiujhcgXxG3PL8LstZ7V3jYet2uHykGtTGGYGYTZvZ6hfqccczHjJDoDaCu5agGKHSjjxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oKGMCH1SqNAepnMko6p8ytwiAK7Z7nXwmyL8ybTHqMKPtaRxYzvovLH8MMfqUKCMfqGn3Sx9UdoxR176r7Lb98u",
  "key1": "65pPfTTS6ZiPR6K4JeDCxdMw24S9sHoXWwnWQ9zsq6NwG8TL61j23mNhkKp1E4i8PaLdF9qG5nKeFyENGLV8MDmS",
  "key2": "ggcpzcswEYSCMM8nBnjrKderHSh4KczuGfUhgxKnsDWHLk5da18hgL27qKK3NYsx6fSrFMtXEHXjixyTuF9gSEL",
  "key3": "5VCh4DnycabBdiaQxrRhAehNLpKDGWmcSWszH9PjtU9tEoqcgcN2TmxrDCgN8nCdYBLTU5wdRrCFqaWVTxytm17g",
  "key4": "8o6Lj5UxjEwG7Sx6A7m6dgQbGGytQStm7SfC7gPjaSiQkxCNbhEMHKegRSbM4aCYMyGwb7JLcoQiZYXW5Hu7rVS",
  "key5": "5U3Bgnkd1g7H5uugawLek85cs8KBgndmq89vDu5sQTXq674Hx6cYGXk1rEn6VgXgtA6zrVe8mjUjywLEoKDERnKX",
  "key6": "9u44YAd1wKc21EEJmhrP8PesPdYhnnRxWnGRvaz5da2zGTLHaBri7qmekemPY4Lqbguh4ifUE683ihwHfzbgdWr",
  "key7": "2TFnRYCvYqYpLee92i1nBAU9NpzvJ5pRb5ozx6HZxWsxDrqBrVgdbKY2ojK8U6sYTPqdAS6dBkswRt9TuDixdj8H",
  "key8": "KJoBUgMn71V622Js8g6FwjbfNP8REFYcKCSzk3Bi2SDe8gJ3EB39eijnPooeJVpRKPeV5chgEbH2YSKe1BQCJhC",
  "key9": "5xY9TzKdBJDv3HLrZwvimMvs6paB7Vh5fY4oLJqr4KxggQ56cCDSLrgVVVFpNa1eo6rAUq72MGBZcCaEXq7aJCgB",
  "key10": "3hEGZBLe3Fo4yERVqnKeaW3HfdaRidvfNis9uBQuufZAtT9YvtUQEMvSKaacComY82aKskFZG3HyjvWFFvCFpap8",
  "key11": "2Tr8YTAycHt85h9pof79Gjz2X1SbNxrE6c6wKb1chHVHuDEsFiyJPmZkH4qWHjRCttNCsUqwgGsLfPVRM8cxkGgi",
  "key12": "4xkvAgq1NZZeQqgNGcu4wbbsTjW9BVgYrTSSF2DJmYnNNZB3F62EwqMzvifv453hC6n91h9tCr2pGM59AjorXms8",
  "key13": "YUqSEWqNE4ZDu2XMadq2cTCtH8Amwtd8Qx2K692EeNN7M5PwrXqk4n5n1Em15spFbaWYYupZztq37aQdZDRgPax",
  "key14": "3NG7oCYL16DZ1E7YN6GSsKwe1iiwaxXtjbdmjMsqffVFvQGtt36Rzg32jXP26ccNJVia4UBvEkGGHxA519BQa6Eq",
  "key15": "4cGGUZfWuLSgQnR2Ljw6qjZmuRQaJ2pJ7F8okBBiLC6BqQNz9pGC8KVxEh3FGVL31Z1jxHC97omp2LY7nK3nFUdJ",
  "key16": "ewy4SSba7MVqG46QVee2PFrUSyXGhJB3zFQkFqCPspb7Ps4VRCJwRsrrCEqbf3NTmD3GCyYkrfcHEccoq6CJuNW",
  "key17": "4GEHkUih8enybwudDviEUZsXTK4Z9zGLT1TMVtWMpYgrQiA6qC2BgDSFpakFh11SioCn53BiARaTyTRBfCmTJaYt",
  "key18": "LETwsCJBiEbEVzK1C4tgB4A7RqdsE38WGWvudnYy2amReZM8EVpzVg37AKdg6XvmQfmeUhoNemonCj7qb2iN3hM",
  "key19": "77XgorJJZvJp78Um56Jkdum8CpJ33y28449jwyvqVYYmLJQ21BJjs7t13auitDVaii4U4xV6a9okkffTac6wfN2",
  "key20": "2BAjPHSQCzRwKtu2HzApe3xKQStAsNkSk5wEwJbWN9rVtsW9Z6MbajP1fnrugEftCnHGACF5dX47ZYcAF14w6W8L",
  "key21": "4yvDd5AcmnvjMuzQzquQdXkQXJbsC5Ug54EB4gy9KfYydQDDXTRwgLR6fX1X7jAZaPEkCk8GNtiwEcLPridfBvN3",
  "key22": "4JRRedygxV6Y8VLVmxcQB6YPjJhKYCGA5tdcE8CY3H1Lecsi3SWSkMn4NA9r8Km8FQ4fBNnkYAtmPnqdChnzHtpQ",
  "key23": "44VMg8k2medKxm2X9M24Pcbho8i9TgnqEYRJoCHu5RnSajc2i8sc5MGC6JZqGD4YttGdT58ZbYRiHk2TtPnL2W8B",
  "key24": "5r88NSmRHwu5KTaZDaQDQcBPgg2A2P3TfebN56jEhikhsKPGPVRRf4UyUHrwPhLRF6Voa6mmuaddCa8W4Z8feeMv",
  "key25": "1x8xvVfZ4wfDguP7tb8y1nRS3B1o6ZgJ36vtcvCUA6k4mbdEMeinjPjAbY3ypZq8YZcqRcN2TV7PuGXQBwu6XxG",
  "key26": "5CzChAjeX4qR4A24BwZPBNibyN4ZKkVEDdBwJeg3z2WnjHopGtNpRAhA1nxBpgSDfFp7XfyMjS8eWQKrxntdLYiu",
  "key27": "547M2jUydbjM21KwmSEKgakg4UxgZRtAF2JXRJ5DfRkLYdK22sLwAtSpG8Sx581yUb8JGAgxF5pLrTKdSTuvtT5n",
  "key28": "XBUX8u93HC9d88QnWhLCvR3kYorem5tGkNbnJ1WJfZsqnQRwnCEETXcNaTHvKcwyY8AQrKePWCB65SRTd3GefSW",
  "key29": "5iDDMWHQzPPx54ZdTharfnzyG2FpHjDeXpgvdRykHaRxFdiuBBpxBYDuALxjFw8WKAnnxyVeoqR9W9DkJeqdaa6V",
  "key30": "3KNqaDrWKGon9yo3mJ9xcuHvbCDsinGVPL58cCBRnEfieidAzGBrCnJ2Hbajev6Qo23FGyYMc4uwqTQsPWFjZQdw",
  "key31": "5bqTXDVMjGsPGxNyeBHxqnGwPsFU8Wp6ukHS1xHFk9CZXzAj21E4PYKDqtkZJLwSJuT9DHoRWcwLsEAnLcLvkvY7",
  "key32": "28CwyKhKbunnLFhLsJrDBXz3GMimeDB7hYvcaguqMDf2cUxConRjPKePp2nMsTEj9GuMzZMxfbCZPDp3r12SUgqA",
  "key33": "5GUKnqMv8uSzswmr7VAi78eBEG7GuxpEAwjL6AmybxH2MhpXV8kMZhQskXTcRdJJss7wYGeMjUKn4N9GzM3diYif",
  "key34": "5CaW5XFypXziutE4kzj6TMvAuydGJqyga9VqEtKcG4APGkeRWeXcnwdB6GWZKR9TKAALstuwX6Uj9XsfatmgzgJ7"
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
