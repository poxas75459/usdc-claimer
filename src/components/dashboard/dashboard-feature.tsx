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
    "4Sk9rbLPHinpHhr1nPTYCb9ooRmBergw9iZcopUcYqhycW9VGKkVZGXFXZQPRkf6s2HcHKfRukwDNYsAHK6vctEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aXcabdd5HR64yN17dAmESXFMJ9TKqTMPXgDQf6qKJY5kNfdWV96cesBEG67QKMNVaThfYXUNRDrfrBTUVP1iq91",
  "key1": "5kaZj32nUQaKYpUmBcKbsx9PchUWQRSs1rXB5mpr72dARdmoMGVRmq6j9UGh5T6xWxDpZdjjR4Qk7wwgtnH8Mmfy",
  "key2": "5rkTmEEr26u7PKGNrUCPpP7HQeV4Hgy2b6W2wzAvc6CXwCFk6B72Di1aDJjCTvpB32QL6QGPRSTZ7Qfc8APbqaoR",
  "key3": "3q5FeNn5okCyjwCLuhqeZ2DKnhuUTpVCsxDCcVQevhbYnAXdJZbX5NmEh9s3qtDqPRtzUYcWJQP3KiWVLc7SfViH",
  "key4": "7hVJMAnSmuSCm6dBVQss93hd6pDLXKCVXUbTYoTKR5mkZQaz5ovzRxLoZJvi3GtAGh9JuM4Vs5t8nTMbTLDigDu",
  "key5": "AqT3cXnSeeY2xJhtBJJTJpdCg2A2ihcWxbCDUXvnPNSJi1dh8b2NqchMhndwioKWrm3Qm2a34rVi88jkdcnEZpH",
  "key6": "57ij18jNjG3XJLdQWCMWXayhx4ddE1CYU3UaQL5TNQWreee6vNnBTbELLmcscCEw4DBZ7jk2KqCY4ddmVcXDBcrW",
  "key7": "4VopVR64V669RkhLh4hDcNKQcheJuvCVT2pvRPmgXBW75zLvRRdfYZeGd6wzy5APMehL1RbAhJtqocYAAD1Lj5MG",
  "key8": "3eMGceDH3h4iUVCgSib4NFGjL2XsUJH3xrmzqXUWCyDQFT4NDL3jAJNKh8BH6ESy8fztbu56bEaRZHEuGRm1AN7D",
  "key9": "2x9R5Tf6hN5TtdTk8VMKWZuKWBLvaT15yn7VQN3DfWUDkD4yzTJcn6SLcoVnnZpFqR9tC8kK6oanESaH3ZFWDkSF",
  "key10": "5kfsqvqFa97oiC7rrHUNWYG9MDZNXgQDqdhHCkwH12Kcu57DbAZ2AQNHPLBnDetEKvM8JR97iYVjAPMWph2VAF6c",
  "key11": "4N8AzPYnLVP23qRWTkGg48MPJFH24HQRCPJa1T5YhJw9Xt9d5v2bytk3HnXH68UgMrbFubUGqdNy4FogyXvZSm3V",
  "key12": "ifGCVQND9NLhhQ7MY5vWTEKXE6qh37zUyREh4pb9TLNefZhteQH1wEsXGmTwhNndGiSZN5Tsx79ERNfCiFT92sX",
  "key13": "2otYjtnPD3nCQgcfWeRcE3WkDciYaX81RjNA9q1g8QaZAm5Ppykp1PLwjyv73uxPj9se9bGS9zpYbNEcfWjKxPwb",
  "key14": "3ooyn2JVpd6FDeqXiBinbNwGhrFMErKVnDTmf7LYkbcib2vYkZQLPthMDGAPCxnQ4u4ktfFngdT4uUTH7YHbkpY",
  "key15": "5TvWCTV823xAcSH7D7hAH1o3h2DbMbUZSLfbg6TfSaLP29HAgouGtohA7pQTtXdvbstNEHWe6kEZsaCj8PjPg2Zn",
  "key16": "5Xrd4meR3Ls2oVkNqF1k3GxpyUYNmpbheU7HzGipfFBPMb2HaasWHCp9hym6LEwLToZs7MhG1qqS98UxgLVTjCxY",
  "key17": "4LvVm5dBwisjMM9DswYrqeTKstfXWHjFudVCw42Li7B91GVeXgR77g41QJmncFpY33et7xP5g3wcKyiuifgdb9Cb",
  "key18": "YAW2d5hLb19zeNE2egTWStptjWBj3HBD6fV7RpDhNq4vBpqWSZWb4g4PshQgroDeYPuPG5ggs37EBML6LbQxHaG",
  "key19": "uPF65CJbSsPmjfuJGsewC7SgqhM2GS22WNvSBPLyeKvPouM37zZPbY3fznGpiW581QDYEevsqAsMJufqsNjcCNH",
  "key20": "oBvvHXwh93fVHnEm4c8zHqS4LnUE8rb7TpjcebFXHctCYZCo85Qro9m42Yzm52Ws5tUrAUSzooreVUgVwRijRPB",
  "key21": "4x8bGu8nFSnQG4WD3s3S9Zegf1xvWrAeVYA7m8xgQq159kza4p62gR3KpGq154kNdkWxf7zHCEXyWoUj8iMwgjRn",
  "key22": "4ofF3XjFwz4vSKZM9NAeqY6R8qqcyJyYUiVWz69T5bnELaW2LDnuFoBNUp2T3UXmC7nHkbeh6EWyHHVa53TMCoyP",
  "key23": "5vykpk5WEMcSY3H6Y1PQJvhvxAcbqYTeTvm2oJdMtMzWgMpj5EQK3bDdWYtqMGPhz4CkLaN5Sx4Dg72YrS2ZsdCJ",
  "key24": "2cZKS2DyMdAAdcYg9m42daLS9z9JMvfK7YSXsmT3YTsb9q12oiLbk7pG4EgMxx1NaPkmo9C1Fv4fmvkfycPetQdR",
  "key25": "3HXMULFwyx3mkEP8QhhDXueQLTSmRb39SgzewPLfe6hgW5kpgMrMPia6Gm2pV5RNxjh44BXQugk9tuPDEHu3J1Lq",
  "key26": "253UrS3xM7tsCfmyzUwvDZx5mGWncK6r2odgE3nvzbniCQRFTL6kQMaya3KhM1U6wGqs64szprLYeNwoQga1bjBP",
  "key27": "9bDaAnpA6VUnZKME7N9R4hWRmCE6thtvQVKUDPmJ65XuwShBaiWwiPdRoqwzzqP2X56ijgGD6CGPu7Xbc8JA2J6",
  "key28": "2MWGHoFUBnRN4msBMX7QDbj1bkrsa1Gft9iu9BNGVepcDWJqWiMwXYRGy7aXZUindoBh5P5nXw2bBvv9k7KwfqnP",
  "key29": "5Ekics9fMcqTsRP88eWeEvmeCb3AM7AV4v3em1z6AGRHm5HHnHpeZ6thwCfRji9obkxvYWHgDvekeJk2YAJ5GdPP",
  "key30": "zVcyshXTpiLkbvzHMWbrftP7SG9ymfzGi38S6HY6UnvmvKPsrGMa3SzsMDfUZ1Sr8X2xvvrdj5MW1d2Q121PzXd",
  "key31": "5X6LQJzhDHtPtVhHmBmYQVuxRkPfTSfR2tigFixtj8DLNvatYMMVA534RksHghx8RHzDDQ8f6WZGQx6eUDCRvTGd",
  "key32": "5cAxt7cmGdKuip6MM6iRa81AdXGqSvYuj5hq1SguoJinMvrpUzAS6eE2aQhBdTrtKcBqAPaHVbFhp9qHntpcUJ8L",
  "key33": "3BuKwDyC3SsKqSmhdxF7r5JNsXxr1BBbBvuRW3HssxFZxLLafGUMQv8Hqqy2R9JJxSoW3jb5auFFJYdZg45dpCza",
  "key34": "4fshR4rUoLvuzqt6mqymzHS8UicYwNs2VFPHmFMrMbJA5sF5uXJcXwtAnZYAFQNVodG82nB4rfmtxJDHMH5XoyHW",
  "key35": "5WNMqMHgfLJK7LNkxe9GRsdVaBTwpgFogyXLX6ktfLkTjdwfYQKwQHwsFMsJU5Mjud4CnFjpuZC1YJqRyDb5XqyJ",
  "key36": "4TAHR7vAc9kZ2kKnDksnThgdBmncLEK8ep4Jx7ER7Sb6M6FsRrHQT6baJAegFYvaHezT1FvQatpawG96NNXPGswf",
  "key37": "cF9WEYehPTBQCrPMCxeBqaxJWa6LSgmBP9G35jCGT4aa5Sv8pP33sxP2t6LHKmB5CVm97GiDptR3J9Kgc8zCojv",
  "key38": "3ZqC6gawtRCUYgEHNqNVsDyejeWgq8cQ1qgHHvsAmwZA42GofgW2qbFkEKtNytKm9ZWFLmaadsF4KvpvYYW5FJJj",
  "key39": "2GuMo1PJvw4ekqHrUQsxwxZw8CoGSyQ4ti78VZgAPkBr4Cez5RgBg4tTZsHnEMSWz8ureEV7CPC1RpNfKkcsuFLD",
  "key40": "3z1PfFD7BaKJfeSTQcpZjdjuNJ4ESkGWpSQVR4hoKVGq1VVB17AaBK6qarjKhNM86ozncXsJTAgEAf2rpkSe2opZ"
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
