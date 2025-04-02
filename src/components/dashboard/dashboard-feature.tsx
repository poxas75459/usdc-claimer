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
    "3BESansrDp4R5H8q3CYRzUyapSHGHxLV9aTix7nN4xvoLXZYhKrYw6Zmwqk7tmQVgXSb4tSaBkFPt1KXosYWNB1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25uyjZJkBcyYvz429Gbty4E8KqRPpyZzsZ7P6a2a1iBeaqy7z3mDvkbV95Q3p6AjaJq1q1EkZUkw2WKkUTJFotNW",
  "key1": "4nn8JV4Y9WErFhE5VSDZZry1Pr5oG8LKcX86ekmfHx6GVK4rGPBnisH2YG4SLZtMZzHgZ4LMDmfv4pj7RsGiGNp4",
  "key2": "3o8fqx3Qyfdkks3sjHSWQpqG7R11kSRmDrQK9FtTrDephKn3ukJnHeL3j48UkhsbdJvxjchFsQAec3qMddNudMYL",
  "key3": "u37FGArPWHjor5paofgeH6SD8iAipKsjtAS5KGukj9J4K6TGEwL2BizmAMy9x1x4fWh9orA1JDwRHdq7ucfSU7s",
  "key4": "2aRvLT4AjdCShjpgXLKJe7Y45f3xuiNjwaqs7TMQgXjnR5egnqPsac3QSYLu3c7U3HEzzt2RKaR3sfi3HaGek1wt",
  "key5": "38MU5WCJP8StKqJrPo9pa3aHVdXFs4YigA9Ehxab5STboYQNcQabEFzb56sRLJ8zzr7u4LGRxZdNZm39ZJnCMkSC",
  "key6": "4PSyzt7S1Kjqese4ukDydj5Mm1ZzaqT56VgHDnMfzENVPuUmqYUhK32QVYUTGnkvumNzDnkmcoUohYoDhLD5UwdJ",
  "key7": "AB6fD8UzQy3w5Z3Wq6vJkEiXtHBqUQ3svRTaKGSR15VWZrRXuTB99YBhXx4TnET9pstgVw9snSAnpsaX13ypB1i",
  "key8": "47cGnLfxfuw7KUz94rM98H2THNSXY8RsCvLtDx5Hiz9Ym7zY7mm1DFePSgkcuiugHsiV6NCf7EGt7ubfLiuiFG5p",
  "key9": "3J1VEF8BJbGT5QPXzXLDDdfPLovdGADvfGLD1iCbzWiBDso3WFLD8S1MYeM2r1jEGeruqAvXemHXTuzVANyT2ZN",
  "key10": "352jPJNrh96hXfAP4RMmLDqJTbqk1ge8HFeiA35CRHjtwz1K3UN5pUvGURfEaQNH97jUvZD21MobZcsukbXmVGMZ",
  "key11": "2gzmcFR6vUwZk3hew7yKRBqyJKDD3duVBcLFeiGbrsddD8a8iHJt3zgTxEr6yzKa4E15zTZBhALUN9WcSTAF27re",
  "key12": "KwXznnJQzVdVg1Xxtxriiv83am2WyiNhrqdDwwUt555cVv8Bv3CQbR1AamJ4mYtATbyFEUxTHciLDqjCNg6bq9A",
  "key13": "3TEaEPnVBF18Cmkeor4NRnNLGvRAMGYjfdfpa99x26QCR6xpnuwKyCLVKUkbYj48zWDChBva3skfXFUABhfLyV4A",
  "key14": "31hWY1CF8QCyGp9ZzjTHc2T23nKN9VhW2FvAzQiim6LcGM9n2C8U1uQJNUTySFeTT543qYdE7gQR2PhXnqinhTYo",
  "key15": "48VLZCgdnp6P5gpzUbSpymDETXoSkZVL7Q4mSmhNeSbJdZckkMuobjUqdRRY2bC1uCz28EKSbt2UNU4yKw4MdXBg",
  "key16": "kj3Nz4UfK7TE1jMJZPmiJq5E864F8RYDDXfVyVXfCVoznqU4vmRPCvf9Z8pmxmdsgWNu3VhRo74LqjbCHgMJoUG",
  "key17": "3Up8xB67z6XktUWNEgo5F6DnbktFpdqUrWUuHzbApepEu7f9oRhKQjYqZ2gbXREK8QAznu4yMK3K9KZ4Ci3ERHND",
  "key18": "uZjY7355EecvLn8xSfCKCUzJSzD5Q1JFwLqrDVPkd5rUHe534eYf2FNG2GAUjkRcQ95L44X5Y2cWCWEw9qbMXKC",
  "key19": "4cZgNCrXVp1GKkaurtw87vpwV7A42wjeK3353oUjaCHy6tWeHCmG7NpccrzB62uL494p2DFywPDVY82vbCZkhyXk",
  "key20": "4WeAoVKb2pm88MPLURjdrTkkF84prZ9GSRdr5JFCYpyrbfkYb1D1cn9J9iz8a6ExTptEQsLDNYWbThcvJx92m6RG",
  "key21": "AkmWhLaHP7kEY95oizyhFA7pmReigQBeK4mz3JjfDbFbS8QfydhU4wHppMLehzcB7dER1Mnegc4LySc9jsWtFKF",
  "key22": "3jeeurM8M9mB3XkfrLqAUv3Jgm9s9YPVjqDCWDqg1zj3x7DnfQmRU5GNXMQVUWsV4FvmbK6mMLpiyRw3osYXn8ic",
  "key23": "2hG1K9fZYdvWTT6ZJeCNoLbrh8oAsUuCNSPAssCzUT2N32be7PDJVvoB4RDCMxQc6sX4sCNzrjVHHYmZnvxZUZAQ",
  "key24": "8gWKAvGKP4wrLoYpYhmF8yM8Lit7KZ85jJzkd2BPf3jZAevCgdcKyYB1La47qqRC5i4BLaD8mE27ijQ9vU7P8B8",
  "key25": "4DTALhpJ9jSsdd8eFx8KcABoKPG9JyGgWbE6yXgdrenw6wMg9RPc7gxh8WgoZrsrETmHNJsaA1Q1gCZRDPStyshC",
  "key26": "5AUYoN3pzjHc6sPt3VXxyoLcTxfxBz7HsGf8Yfs99EPcmct5rKakVoaqbhoTBUGBJA8refZBWej76JC8vnnAf5NT"
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
