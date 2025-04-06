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
    "XJ1GGWmdPF9E5RvrD54ADKhQCEko2Lagb82xMAzCydGsZVN47mKrDnKJAh69RuFT6yAKgUgKGu4qQpwD9TR9d4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r6SwYKAivX1vevVcUggMcDatkzEVEMntsmrhRs12aM6i5sr5TQQT7wvoict5NfyPAGgXbcLWmUkyajaAHLUbJbn",
  "key1": "5rev5CLwB9m56BHH6jbVkQtbBpchQkbsbEexjWGSrKcPSiTGYaZZwQKo6akkZUfhcM3iJf1hN6E2UDVpewvdBrxq",
  "key2": "cBjsdWyxMixYaZ6oqiAYwQwj9mJY1xKreVeP316mEEDrTD8ZQvSC8x4ZwqQiWV57puM6gz1weNrM7GvyCsuGiA3",
  "key3": "tR6oEjwPFAbqnqsJCJPxgKrGZfzGXseSBMNxpMjyqTQcysfoxbmKya1Q9D9PGv1VsP5YvrkJrwpE8Huno1RPFjM",
  "key4": "2p9hUJ2jY8WJ3HFGwbPntPtY8PvtFKU2HREyWx1K1KEH4EJb7MFjMR6gx35AaR7oNKorc8GjMuuRgDvB7teMs5W",
  "key5": "aeut9Rg1rzM7vkhMoGn1zj5qRPXthEGtiEJQZB2pcrVPiGTkfDiweG9FsatdUaecnijUYcTSqxzDz95m6ffgCLs",
  "key6": "2N3Xk7pP1shaWw8q1tFqqWadWVaRp33DJ9ftSVtv5eXzzR3Pyh8zRxAz7uDAVRuc1DXgfyv5xfPTevBP7UhcPf9q",
  "key7": "948SxqmGsYc3D5K8kvPZ1CyqXrH1AXi9Un6BUn26TvM3bispPTmovDKinN1be6EKQ3Uq9zuA99biudQDxdkf2e2",
  "key8": "6VzJLdjmoLGhC5aMD9CYAyP5XxCjeDhGJmxNnD1dZUbkFTDrcSDuY3WZpVa6uhuw2FmcAdJ2PPsxBzvPQQk8gLk",
  "key9": "63QP8rat6BsCEmJ17QsQUdHYPm1sbuDHsSstoy3TfwGwGSfyhgDY3X1WRX7SDarHWd4rkaPzu2kQyFhVU51Ueepo",
  "key10": "5DRnDy6nPwJSntaQi4TFGFikjnfPQwY4ZWdmcgsv5nspFVAe58yjebSgGFCpF12yHHjsPAvj9Wz42fWnGP3dzGYb",
  "key11": "4cz5eKDKaQ2G1iaP7ed8LmrhZneoBsP8T496Gp4BDeoqGQXWrJ9svtjUUHyKK72RZ7JgH7rxmY3rucUVTwxyc3oG",
  "key12": "2rueyoGJAVMTDfG5SFFMbDyQGM5P6d9JMQXxDoSRmzrmKVvk7caU6drPYPmwupGUbvYXMTUU4or5YdDqX4MrD1f8",
  "key13": "5KGcB37xNM1DFNfzxKNanTqKghCQzgdFfMGTJskjk9vFyDWbJa9m7Voyvqj4y7ScDyMrwfHDMr9LEs8yhJfSZ4Ph",
  "key14": "3LhiaWr3mCRD4tXt6e3dkuNmRsx3a81fi4csGjadJnPLxJj7EEontFoV8uHxU8c2LGAgQHViA5Awv1ti4HnAca3d",
  "key15": "39QKN7FnatByudmF5YxeW1RNzBVxgE2vLFqoxLGnVzfZjPVt97d1NergSconkJcgstfXzDFEdbCMJg89MRMtud2b",
  "key16": "5MM7cCbumVza2WGUwqHfJ5cbBbfn8fdGwZwoV9odU6XW6Vqj2uYyJsz3i6v5GGe4yqVSRc6B8tq1KWvyimA8AtRe",
  "key17": "2UQmgQ1YbBUyN5o7c8gtPbFY3o1M8a9sTUuXJeQBUaFDhEd4ENhJEKUZs7se4G5EKZt6Lm9iVKX2eKZmRqRgp3PY",
  "key18": "4oweFirfHaeMQ3EWReRfzhbMzKKASUr99NLfuh4UxUb3X3gc2s4h1rWBmxcwZAGKKejHT1wRjeNdugFDpGijP53z",
  "key19": "5VV6ykUY7285fjLGwocBsuQEVa4B1DGrmdUQ3rPtX4sJ385NMgvrEvcQWUdWdzg5vN3Gsm1UpcSH9N7WtVXJ5J5P",
  "key20": "5rofniT8QkWeiQEhwkumAfdsLYRDgvWgbrnMFPYZYtj7SiVKRQSoZvGGqx5oJXUmsRrc6pLWacpTWKVBFxwVzLWC",
  "key21": "3GJEjCQWv7swHvB3WF9McngdUMNaW6zgWi44SLyf4D5Gc667gRpdGWtbzWFyzYVbKf7z9w7eugBoGaeLAKH37KmV",
  "key22": "4o4mPrq9FGz8nBkkEo5DVu7nvrVadXCvFs4Me5XVKwVyvoT4Y5e829AwXN8B7NGA3UQwJ5uiwqVHbVZJtjsZKnRo",
  "key23": "32o3q83BRAVd7NLsCGp6dUKWhjXRFw4F4bW8QdEDKamPZQxRrvfyYFKX6AC4ZGTVR9mfTeU8yDLJQc3AVL4tg3rm",
  "key24": "DE3TrosXs5BAnV8x4sDh4q9uvXu4A3y4VKCtHM2GqNf84aS3hdMviPudAuneNvPG4T9QKWPcBo9r1ZEyMPvXfod"
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
