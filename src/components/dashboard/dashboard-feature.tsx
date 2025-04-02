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
    "3f8C1J5qvddYqNuZbJXTdbeRhaChLRLLBhtP3Gh3S8auMpP6rqEU5BPtd24xGKBfYHtWBsFsZsz6fbrPVJLfLojr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b7bS6kSM7krvKqYotT7Qj9mPaurTW1f6RX2E9vs24mqr1ZCGd6dBC6D7p4m9fGD8b87RJmbseBbr2UUXCAoSeQU",
  "key1": "YRgD9U7UhLFgAmPsrTgyaZvtERCwaGtiD2nzYHSkTadKPUaaftMQeGHUXVErMm26mgd8XDBSFPteSL6bpu9KhYK",
  "key2": "4FkW8yHRahvnw15HAgoBvvj54um36Yv8TUkqCoc7Nkog8nmESvYKtjWZr8sqms7yQdoybqHTuUrw6YT1RfeuUELV",
  "key3": "52V61zFErXpxhkVpr1xTGZADwuahAmfsxFGQNoCB8W2GRcoub2gsQdUBdwQkZF2YfpXXLsES769W6uhL5Es7Ma9i",
  "key4": "39aJ8JbWk52sPNr6s23NNiWa1ecN1Gy2D22ugvSVSd3fYdrUTNUbxeC9biaGTk4YAUyKmqVAmZomPCaP8Faq8Qh",
  "key5": "49ciTUp55qUVkcXRfc61NH8TQuqN6jXspWzP9nzTZTELRnG4CbqM6TZonexJze33MzNidVXHvFzh89wD78Evnw5f",
  "key6": "4vYrZR8KJDdm3ACqFPYnMJiVqq9kR4MKfQ7mJSHDcSmj4sm1LuidR8GAxxHY9xP8gbcXETowhtR4K3WYQK4ReYD8",
  "key7": "5XWYw4cb6CzPmoGTJR2xJin3rWcVDdXYYX5Qj5o3z3kD3KKg2PUDUpTQ5wT7ZAxP4wFrihukKkKXLkbnBt58timy",
  "key8": "3Wj3e48i1z3yEs1pLwrg867pnRHUbVgaq5NDFeWCVYZTww2mi3tuvVDQRo2V5prEvCjHktrxK8SNwJqYDdS2W1Ym",
  "key9": "5CTTj8GEFgf6YP5NrM5mLt5oAPTwTLn8PTGeZWre8aXk4PjQU1zv5aDNz9QbPySVuNjeJ9fPjSMRuRoMvQcLe2tU",
  "key10": "4jMuf88xdMJcjhCvJ6LtjcQbm4FxUt5QdYmVS5KRhbNWmftkEWSBuYJcauiVsGR4C4uD2V2wXwtunPDDm1MeiSws",
  "key11": "3gAPd8YHujMF3wQLcUarKKKAqb39RheM34bPKWnyKRU2fSYJYRYkeM6pn1naY1BkZUh6BiHtfxhvPhM8fVszSzMx",
  "key12": "wcaikG9tvQGbCXRUoycSHVyjjY1f2xrPcogXAy9G9kfZYVckuLS7dEG7qXC2TWPXZCNCmcsi3t8YVpayUX6mG4E",
  "key13": "5za5HLUijDzT1fu1Xb7vVSyFy5TzHCy5BqFKeQuMCvfsFXEuN3CWy7VkF6zZeBkheWpRVqeESyDmUMRkaWQGAh19",
  "key14": "4rNqTBSUn9W9ofsh3oykBg3C7cou8i6H6EzzSDLa7W2pC9vd2b7wPdMHdxSGrKDzZK5wa4n3mJPfiPH5F9r1tCKU",
  "key15": "49pqHuq6AedMFgtFTbGBn1zVGQa7URjjRpfjxzERmjGhZ6jnHiGucFxRX7eBde29d4MiEYHJpMD5srNSQpGaYiEo",
  "key16": "4rbzFVNV1EhYVQscXdfGDuBcN848Czo5VrxqXwHYuKRmDNB9ZWHCYPw3a81TiPGTthjTt6NCVP4dAh64BzAmhcpF",
  "key17": "3pRWWcrPhz4kP7xs4NLkVF9xUFvzHjVjpYV8Bq2HKwE8HBZdkdYE3VbK8W2ox4XERb9kP9W8pzWfXMHnBz8nuBdE",
  "key18": "3AcjCdKE41ThoSv9Cgv2fttLakdG6F1PLRcgync1GPTPTqxA8uM3BpBYF72nq7FEytScfyRhFg12jpi3Lk47P9eF",
  "key19": "4s9iiQnKzCGWPdvRwZbAHsYQnbnPbf911iS3rKj6o3ga27zR8RKk4Zj8SwPs5bHJbSLQrPziLQvL56LDhtDPUHTW",
  "key20": "6JnLFGwdAg532LPckFc2Xm2haenCJ5HQCwx9NLiTxnqHto5mzxwpcmpoPWa63BCSNszwpCLp7g9VSoeHZGJFs4V",
  "key21": "2ZbPdd4AfUrBUkRBrQuy1hgv93CzBDts37Ce28CC3jzxy8i5uUm6kTtd5E2p4NMW1xBaHpCDkXkx9wwidVa3FCti",
  "key22": "4wfP5aT6zjXhXd54TsNdCiXkU2NQivncPgSgv2syBTyk3bk9cBYLLmrD173tSXWFS2DXF1mJmwvMptwTpJ32n2NZ",
  "key23": "62ugwwmCopfsyyDaigE52uGiRcDauaEBc1mHWhhY5jhbmBxn8zd3X4ytJ7UexwCnHom5cU2pJqyZ7khUpoKDhvpg",
  "key24": "GGBFJkgeBsqUpevWhx3pLUAjnqVUzYqqycRVtTW4bLG1jsLUUkEtDasQWV3rRCuw1zhQfKs2WSL36xEN12Qqpmm",
  "key25": "5GwAxUrxznjdS4CHYBGpd6WYNPn67coZUe5CycjgMhXAd6LjSMs1Zc8ev2eWRQgHXoH5aJB1uBvjhUfK58VR6ric",
  "key26": "pvV65JmEPGTsP2tnqn7XEvSR4jYqMoKtnQb1nPFjhoXvP4kqfJen5SJVLXjG2kYoGaFFw3B9zYD3sP1ySwayrot",
  "key27": "245EVd3VKcEttcmmobXyRCdoun3N66tpW3WNoV2XeGcuHKfrkCoXFKTT3yi6nL3bywiaYhuAzUzsNBzTw1cahxxF",
  "key28": "5GUNvkev3S29Kb53xUbmZZEDtCGekGffpdUpvDMbqyccUpHBUwmEcwJx75uSMzcWDYcJ6XJLsgtiLkv1hPQP3qqb"
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
