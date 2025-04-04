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
    "3FyRXuhFqxFL32VTnA78tiZtXnv4YBnMjZitmwPusj2enhDv8KDneJYt7VVyvyJHjnajnrxaACehoWMmWau8UUSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q3AmHWFrJWnpaz2KVpWtQ4GCaY2C5faVjoApS4XzvCvHCuXKmKqYyqTbEkvbtrqTJJP1Ffc8qsTHECLa84HWUUr",
  "key1": "5kTMULnahve7iZsvG1vjZTunkwmtUNXMW7vTXzDvY3cJqntGfCkFe8JuL3aMPdqyjt5s8aE5J6TTWR8RjdjB5C4i",
  "key2": "2jrCLRxzyoA9iGReyfDLYEiV37VyqWcrvGVdnuXQQx2bgoZ47Pq3pn4GsLoPeuyUM4xnqr3iFcK5ScvS96d2seQg",
  "key3": "vZ3jjjfFkMrCDSDjjuaj7MjVnjR97B95pkjZRMbbZ3bZBjYkDTmKRboh5ZPhpvHmC5PnjeZiCfogfUEhLcsEoLy",
  "key4": "2end3LdtLnyoyT2v8XCgfTxmbvFhGi9GPvHU2Bf9gcJyC28zvF7wrkghfyBXB2Fz3LoxDHZpgXhQo9A98dM3u7EH",
  "key5": "2toUfrDPF378ppFDvWqs372zgH9HCgvetLY2gnLz9ZZrLcpngZvmPW17rVuLq8PErMWRESZpXMc9GMgb8Wr2mrmT",
  "key6": "2Xsmvyo24FhuPD5rjFLxw5p2UsrYCqLwh3kaaBGkPjudkeGPXwr1czqJUyb4eqZW5vpxCrX6ZUZt3q6ydHA8jcsD",
  "key7": "ARFesW3QhPCDzPX1xrBds16eBGzWAbP8SqAqNtN5QF72fXwbsXJrGPeq5ttfgrZZ7ZiFdPST8sS3CwStvJjCesa",
  "key8": "5PJY5WYzwPjQBvW6m52cPYMNzJaXV3wGnbPkV8DARugY84zSnzDML7D42JqZxKj4QcV4iQopJVFGM6AoDqWEj1DC",
  "key9": "7d1Hq51LkdEDM8797Sr68YrwCDEUuPuwob2ihktMjpqoh6mWyt3oAks5Y4FZ9aTw9yMGxhqpRfYZqVP6GBbUKY4",
  "key10": "WgNx84BrNjFp3FyxUUWD4a6xCRAzD6LibzPsHtXx8AjySmkM3ri5Yc6osTdyLr8kr7xJCmGfD7qjpptGXQemhfH",
  "key11": "39nht4tzniSYfxxw5MV26DJVQBYhyyoNo68uUvpRXbEDUQeYQM9pzbUX3Qsunu9umheS3PHeT7ibc8p62N9x2Cyz",
  "key12": "Pxxs6E6Ktd67eggFoLVWfQHmdTBJDfnasSNdnhrobiip8Es1m8S1dUfH52wTZdnoSEPNHjj2Mw7LcHCxNudeHD1",
  "key13": "3pWFRS4yu5vqZbCXgQQTNzRbTHVWsBcLvKbiZCWGnpidf1nHj83uXgVzKwCAtCra6eadaEhoQHRbcJ7WD5Hc2kp5",
  "key14": "4K3Cb9WVtnpdfLrSN22MREbwLLuSSA5jQkhEmzuy2av45n4RNwq6g1nLkBqoXjt7pamMM1pFwqJJhRyDx5PUND7q",
  "key15": "2ABnZbjAGoL9bNJcoJNTUVvkGDszLziXG1AC59d8NsNgWk5BmHhHwv4Vu2hEm5tR62iwxG24pXShesbpAM3Jr2wV",
  "key16": "3M4kyLt54UbJd9RwXdsbuNB7b4Vp8FtYHmau1dvTztFbBZpYA3CXTckc2N3oMzZZNAxAPEXpW2r6UdRgocGQffdf",
  "key17": "4szs5ELW8c1tFdKvt7KePrWSc6ixuvZjtKELM1pJoSyW4FjWBM3u5S3QuyxgMg4oRxSALxYocBRfAZjWgg5DsbJ8",
  "key18": "2JCWBKr4Kv744G3GCSNeGs7LNyJMw6YZiNWeAymQyjuHQ81FSAmc9Va8j6CkbSjDirifdiL9T69vQZW5bLdTWK98",
  "key19": "4fezPDygdD6PEgWedsU4XLJWfDoXrsCeNdfkuT1SWXEHtgYEBCFgPnKbtYyCA4yuYWLf9BWxAD1h3zrCQrqKcbXe",
  "key20": "42s663ojVC6ZbmNgZGcGupNL1wcv4vpTUDc1XXSKSq34FQtTUTSLcRuCdzu4YnjsL45U9yQhtQoayXLT7gN9KdzV",
  "key21": "4NB4H6VT1oDfrYE8re2uNDksiUnmhzLPxBpXRyZg6UjyfAjZGas8HtTfKLebeW8gq2ZNDy4hkGPhYWCscnToQcmA",
  "key22": "3LqhCxZ4h2d78KWf6zMxv724rG7y1VoGEwuHuHnW9jjWuP3shiAMU3t8eeGyqMVD1994ktYFvVASzs73F41UgYmz",
  "key23": "bVyEMEH8F8v6MMZeWsovRa5BjaV78DytEqtarSWiK9MLYtpYCxmBdoo38SVH9jaomwbLXuqkGRPRYjooXmsZEe8",
  "key24": "5RwN5cfbzSbcuHu9xeRQCLXJhkbmhjDM7QR4eSHfCUM8f5TLKoDAuLVkrpeca3UvHwXkvzmjhe5MydRoNh6699gn",
  "key25": "3qEg9d2q7acn9mGQvD2BEoNtovuYf8arC2MYnw7JS4f3WhzYb7MLTz9CSBT7ZAQkJTRBouM2SbMi4RDf6WW7nfUw",
  "key26": "7m7LjUWLY3mL7U6nddoQa4d44cgYoYzfx3waTYASjYAJLjmVJiHHmEkjdBzpivdjUJ1vjLYFjeLr7ktEDzF3zSy",
  "key27": "3aRwytpCwmF6cnzEnPRDuvnF6aqrV88uYJWJhV6kN3mt5iGiRj41eBTDNwS4va5yRzZkXmb9wp9vK2WaHbbgc7PY",
  "key28": "5XGQZRPeG4H3jAYfu5fG6xYx9pJydanzZ3FbvmeHhKu38xRTNPXiSkCKrN5m3xhf8iK8dy6ej1WVyFAiuBmSEmno"
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
