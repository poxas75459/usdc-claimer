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
    "35EDFQ2AtV4AMXNjzTtJomSbdwErbDFJwoP745BUa4sQ5ge3GQxt3x8C1396yiGJN9TZ6mzVpF46UazBHhYsGcMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oZVCymBWeg1p6YGUYzKk2giS9D8esWFtxobgtndnLF2FkMh6r8BhPFxPfiKzFZgs8rSJTgHit9dCxmy8cL9fAY7",
  "key1": "hr5LyiB4zE8uTetHQTWPEURwyqVWfkyLLPeijPhijpqTCkoJTzsZwGbxfEVomXwyPfKxiCEoDgKnesogLzFeCT1",
  "key2": "Ewv95ufQyXn8GAwHxLyiAGpzLZvrWj7Xi5tXFiV5eS4pjeVJ3oHgRvXpR1m7zMyDHYHJiehyYoBEL9ZiL5wGHib",
  "key3": "66c3nnJixanH51i3XwDKoYvnS3dtjrM44Qkp24L336cTW9635EYmTg7Skcz78gfzNSiBpXKbdVgE1XRWHPqzLGue",
  "key4": "38HZUnjgzfubkhwzDhimrbdXFpUcNQTt1LHGMdAhVoeJLxvsq2uBBasLVts9qhb9ywEhBEr7StpvSzqr7jLpmrch",
  "key5": "4bK5hCYo1VuTEP6Yf9U7dgtTeBUie8ghvv69dTXQFy1N5G6juayuLPHuQ7cYcGxC42LteXXfmJg8N4ckFc31nCRR",
  "key6": "65BBLwfjw8s4SZFc5Wbet1ApD3p6mhcDYWN1AuyZMdHhJhZBFoe1XdDHnKQ22VcKET6veFFwzQdZfDXsbhLGhe6g",
  "key7": "67GJCHDBtAkxypEym5vrh8KqjHx3S1exppqM4nBJ2X6ZNg3cAPbznh2WYoPjMwkykW1jvE6dhdVVY4jxBkhkdEtE",
  "key8": "2JredbNqGXWpZma9B7RCCzJjHsqQw3gDY1H45kaLGYX6AoxbhU6VuQW3fSdX7wZrSgi2tZ5P9Rccuw48vs2raf8K",
  "key9": "2qcB9LseF71t3nPgpX3b6PydWYqhyXVHQgmZP48fURRfYPLDkrMdURuTVs2xFcENWWosNmX9JgGKWFASSG8YYHqC",
  "key10": "218dJaeioiLNoSrFb8EGQCujmEfgHW5Km9JwhaGPfL5CuTPaNgGBggxKANnTZC4FugysHfWX4VGqjPXgCGG8LSW4",
  "key11": "2WTt5wZteX5QAoZTpvYGVq1C64QgGfWQVWCcQhKc4fFcs4u9c1Ue3wLMXknGPg9YBgPjBkKBgdFfwm6Ejwc6cRV1",
  "key12": "4PQQwhoDYD1xS1MJXC3aFApYzSS6syrtpJUW3rMtwQeZrhKZ31zssDDYQt4jVnnJtLhq64ZeeH2hEaqRojGaX6E8",
  "key13": "4SL7WkAass5b1mvd4HYDSCwmYjbjekhmZTKXR4dchgEHbv6YszLdDoUaRmr8ggaC9mf3RyNmRZ8ktpe3ekJV969r",
  "key14": "HW9gH8V25ebyw5ZofsEcyDvWe82ehhnYCkAy8m2ZH3cWB5bfXF9hzr2hQmAxDfFx27oSV46Z55KMC63He3fsjUM",
  "key15": "3JuLjeYqsk7v7VgavwCLAxT57WPyei49mnBEsVqX3CjcZ88cC7GsRS5HKLq65xfJg83AFNy9soGafkpkijQgApH8",
  "key16": "2xXAJTwj3V62wZtseBtZ9Rw4p8aqhHxMeLa7rWhkbQQjKa1V3yHUhduv8jCca7thpodUCDuhuJYZSaCB62HLRerG",
  "key17": "4tVkJ6W141969TKcznWczeQyTjvCpQ1ogLq8iE9g8j3Xh1GGFXHsotvKFWXFX1QVnpnvys2YBVsmvPhaESvV3uiN",
  "key18": "6CrS5bcSNneeMsdFwCY7GDSAMNjLtoFcEqyiXoUGx5i6SVUHqJ8ssMcLeceYRuXqpDzmdwLJhRAJhusP5iUSZoa",
  "key19": "3rMNjjTzSHpDqENtSHNCUMfL75W1FNZBz9EwLerNn15dziuKQdBCR7f8yC8kY9tP7DVemFo3KumZ797LSA7t7UJ7",
  "key20": "2ufo7nCAmwTom2PtUkedrkEyCNuzcxpLSBQXNUMV3aPEJ5jP4h8iosFXuEy4EEJ5TB2c33dfQmbovmPEFpKf8j6b",
  "key21": "UtkM3V8jML789oVWTV7KDRgHaZihaomJpkNVNLxsbv1vuaYdU1wvM7ep7Quvfg8EtJCJqEAWt5M8jbMmR3MLzEu",
  "key22": "2r6UAFm9AnGJmJyBAWJFzyX3rKS93QcQuTpsz6xeKqBmELAaDGxjNviDWTsstWH1i3H9wXt5LhoDMuvm4kSGNqtH",
  "key23": "51Aqnximm58Z6cJuF3YQbcVomjt9g7nR6nRuXW95gVjua2hc1qW4mk9i7XBS75hQQnynvXTp26v6jn2duPQGWK1L",
  "key24": "2xkWx4T2DTQ8mustQ7auT5R6dNVt2ihXD1YgLprU7tzAs9iYCUASJSE1ZqQfPAFNFeZ188zJeN3syfoH5PTMu4Xt",
  "key25": "zDmQ3h18JLvHPfPAPQwECw3RNvfFSto5Cc9rZ1y3aptFBtQ1PEkFePQraLWy7Rjjm1x7pgFEEqUGsfnugpu94Sy",
  "key26": "56LorRAAcCwffcd6cgf5qjTKoMDXEnCKji4rz7JhUdn6csd6nsYCinjU5zZQqoGCPtFkXHcqxEY4xgwf3CTvntzw",
  "key27": "4GK4icwf2D8bXYGGpWPTtrczvEhUuEhQingeTWqq99aToeuTUvg2YEpttyN6V26wdbiUnZ1CeUsCnghovRmvor3Y",
  "key28": "5D57bHBdz5cB68fCemVARmfcmd26FMm7ytHkE4vY4rgKoPDY8ouNnhChWGZi67TZnbj47rp2HmJievZXSgoqGTaT"
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
