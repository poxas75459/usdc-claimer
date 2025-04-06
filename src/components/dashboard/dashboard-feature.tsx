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
    "2aGpVTQgJQgKKAujeVnLu4PZDZ9w9yBhRgtvmdoBNmhzWSe3HAAiUuSV6BqDNR2vuuqzqKZrmAU3hqgrJWQrhbAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGNHeEDHD4ux1zTEE1MsB8G6GA4A4n1j3K7yYwyboUdLtiXuqQsaAG1pkbowvsrsvwjbm7qCHCijw8kdCLKhB7P",
  "key1": "2sMMUSDxBFgqH6D9esdwHAx8uaAsg8GLPKmsjhocgvRBpKBrpD6Yf39P1hC5QVycpGaKubn7Ks9YNzBvDYCJjcKQ",
  "key2": "4N2yaLrDB7dymCc5Avw6fSqLcFzJvjRrighgVDBQJceoRA45BQFCaCcivARCAi1MJpVUdGngX48xuFPdh3Kzv4iZ",
  "key3": "5JoUKvDtSm4CGmk8wem9Xa2s313wuLvkEs7SiBgNJ7QWfVxCZoM5GPWugAqbnynVq1DTh1K75hN2JXhFfyo5paQk",
  "key4": "47FDqyv2wdGjFKtRpb18UMr54M3HUL2vBinc8exAtdyhh82myrZs63oHwdQVHvbgd1d7ZvvvYL6MLUwJJ6ZXdny",
  "key5": "4YGmoFTmug2Gr2Bqv5idDRKQecj1cehu5kiHGu8dNmj6H5SM4aEU2F83svLB4MUTkJfmUJo9c1KtTmyPK2bQfMc2",
  "key6": "4bETmKkx14LS8zuFmRyHGw56Z4SAGtWFdHgc879Ui6xFbYG8KKGBEZTewN4pno4UD9shz7Uy83T4YZKqHFq2KUEK",
  "key7": "34XYFqfp3atZCpJnFpByULRSvpxmRS1nKiRvmnfwyBPioddKj4rHiTJvovgDLcAxTBVzMc1n3QpTbc2zZG2g1LyD",
  "key8": "59izfC6rtqyd9YeLBWSHnXJmK7WiPgRWWB3r6Y7PxA8y74u8DFELaW8j6LrRbrRRMcQMjHMuwkief9kXL2TivVbP",
  "key9": "4aDCQgGvU1HN3LixXneML6vhvNYvnSCGEG8GTANRf1jNzSgiLWFKHEFPk8h95kw9z3AFCDGQgjP9RDohSK9k762h",
  "key10": "28ezuF4ymDrsJTA3o8Mg7pJKg34VURNgEKorJPPmW95wnrgWP6XBzjitiRjm9sd6DssfLJGNRH7cN9mWqkgb5yc6",
  "key11": "55mEjeGzPG9S8PW8p1dxD9nv4vEg56gCPT3SdLrFU1nxDbkMXHEabVCW44HUAeWwcuAJHFQSQDnUdrTGfEwsrdq6",
  "key12": "5jFH5KgVraoVHY7z6dPWfEjFBWq3uWMRTcSDrSDZFkXpTxQ1cztEacCTVYS1JUC67bmDR6y3GLKo3bqDxf2gphTj",
  "key13": "XXbear7cuuNHen3JEjhHAcsSJRGCAQNFqjmRFp33zdBB4PvwYDpWy6RwsMmMUEusrCqRuNg8GLu9dTop9ddg1eJ",
  "key14": "2wfa1h77VbQnjRFn7yepAxmJ2gnFTn4TsRwfMs5Xs3BCFpYPzYXGc9GJiZX5tuiVPnD6xMaE7B3kLZ1gKWVWxsxa",
  "key15": "2p4B4Bc2948jAC9iBgqv9aydBPrC6HHAUmZfNVE6T6UXWPcUG6SK1KPUSRmmP7uJMPgkNxcnkaXyW5CKQwJMaWh3",
  "key16": "4se38PAp74frLxnmmEC55uwxHXLP1ee74QadxwkDViB3gRdKqyhbaaTgHY7a8KE1NsXgefRrDmSMjQsEY7wghYHv",
  "key17": "5gK7315Hz4y8GWjoCxnxgysrCZk6yAfnaCn6m8MwDi5xZtisGVRr1hC7ccd6dqWjKpw5qpq9xu8kc1NpTvSXjA66",
  "key18": "4Cif9Dv8EfqdqtrokkE5QWeam3qCvvRv4fY2qeaxvV5qPgVJXUgaPGHUuDQWpwT3EpuEiHr8ZmPtQSzJXFUjUwgJ",
  "key19": "3rRu5tUZrYA3VtFtj3QRW7vTbmP2PEXtqEPa8eME2VaN7QMnRnXqerkcCpngvuCHcVqXcoYSNqJkZNMUEqNhpFsi",
  "key20": "5S6iAQqMYjqcNz7N85hfFbQuMG8XwCCtYX7GDmBrF87fpD1CeG7f23ToJP7egN3JQRLwnVBFszJjrrSRrJ4Pndhn",
  "key21": "SUZuAfWiQdkiFiyyYwbHmLucEBbKXhvH7jaq81bmVcSD7mtsVfK773NgZRgPP56fyEv2r9p5EZYjSVUT9SPEcxA",
  "key22": "5egKgGUCHtmj9oKG5np2mfMkiyAcvjzh51d9QkwP9qvgwtEc5Vp2ibj8ztnrtCzhu8xXkdF2nS8Qfbn39uRTeygd",
  "key23": "4aToa562ZJfPnHMaw6rCPYWhcShCc4YfPYaiyEDmngwHFuYg3whqmXhCLdswH3hWPGbgweaVpfiXLfkZViBWgTm7",
  "key24": "4Gcr8Xp34827XWckBedSSp2yCz7oXvuPRfAtA2hHbYf5koobzpLK2oT2ZfXMN9yqfeZPVoSPmxdRZv3jwTK3UNGT",
  "key25": "4Fjk6VjAYfX7hyLpUkppHqNJV2tfvU5ypZQjnzsjZajrM9HM5g4Z1kGp29HAgeUHXEPPgMTmTEgFC1Lzf66KMi2x",
  "key26": "mA3y3ZRwk6CFJJp3dZfanifZrL77jZGMkNVuLPfDuUaCx6k6LoK3aaQbDkMb3gKxHWqP2F7zZLU3gpeaVbdMyE6"
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
