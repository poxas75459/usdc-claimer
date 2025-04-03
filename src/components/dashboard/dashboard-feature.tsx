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
    "4NahnDgCNeYGVBNTLzYH1ySGfgZapabUosj31s5j55WnxwyUXjbv9bBbpa8C7DRamoTyd9PkFQKDbATiFDLPnPQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hRKmKqL4io9t8H2MNLA25zZ9wNjYSahf2CG3H57AAeN2KY6LamBEMPUEkBbGj2eaKVhA9P6bLgHemGTEmd5McrU",
  "key1": "46g6YkpnCKHX4pY9bDkKAV1mcWcsSkLj4X8R5wE9vQYjBqugZxGVjBVrxVH7sZXTkURvcsUhrLLQUXvMk5CYyzFj",
  "key2": "5nboGRvcLWQysUsqYMgMFQEG5pVMngXCvRvYUeyPmewUMknidw7TAZMW4CyfUGRHgHZYJNGdSmLkmkj6Xhu4J8KB",
  "key3": "3EULWmP7Dz6Tw2yqqNXrFirFVoZwGQCnWwNmNigMt2md2xxC2ej17oG9dVpvoz6b1axJ8XyhQ8tAhTvwjUT1xLy7",
  "key4": "3QkiD7wcGYddCrpih14uoHQxmNCv2DZmLzXYDhuVjTPB9vXATt6U7tazQ48gKc7gjuE2NaQ3pZs9d7oVaA6fM3ZJ",
  "key5": "WUhCa8VP95uQutezi1NRfuotxWYArB4xbbRZyu4spAG2NEEYcyuWp49BNy5s9vcG7PLxxtvmPKc79y56uSAAG6t",
  "key6": "3EiDsSFWiQ4q5FzBrWNiqKmWQNh3kZQVpUUsQoxW3w5S3fZzWLeqoQyJ9Rjur4jmP3yhrmSnddbmkdUVYcHdpu5b",
  "key7": "z36ir2HQZk2wza97wkKC7YvKLrqGR7CPLRG9fp6YVepbwpcAemvmC8K2R4u7MqKaQUT11dkbuWD2Rb2XpN1Zpwm",
  "key8": "mmhMVHXH3YBbUJ88ZrHhz21wXw2LA2e6AQDzPRA4jos11NmGpzBeQUEYQtCbPHyy27DBuLecGvMkNhsKRKLX7Km",
  "key9": "4NkQTGz7rVnezefre5DEgfU3gaHz3k9m13DyrFB1CMBAShkU55SXQyDRKVe4DZptn7PzUmNCKQkRHLNSXVsHHCB9",
  "key10": "53LKJACiSXrGg8QNLXPfCu9YUGqkwhHjiEACGvh3i6JmrXVyDR1C2M17FiqLoGBCrNMwiq6VzXaiHxekKJmrWEvS",
  "key11": "nAaLc5tJDNngLficmFiLiqXM3ayFtND79777yrHeoBWXwdQhLJi8KFc5q4WJdfWrCLrzQ6mqW54jNGDAUsY7W3c",
  "key12": "LunKnELt8KF79CywD6syHUf7qeabCPFngZ7cxxcS2jYiTHjfa4Z2J8WV8M9YU2ugZSsRuK2kSA3mAKMywpdKwQK",
  "key13": "4hN9j5ReV62v9t8fvd3kMyEDaR1aHXtqbNirZ1DYUXUNAPMTnHnwf73UR6pjRJY3QdWiX6EM6PGmu1EsZt4jimkQ",
  "key14": "48AoE6qtGWumQwSzxjjeKgkorNAcgo6tP1CCmSbBtj23nenkuqE5QnjBSea4Q3gQiEvtPADrzy8xFLP512cXXks6",
  "key15": "2rcZKbXANcnAqhvTifSug3hGK2h8pBEJXaRyb1uigTkSerVdWxwtzDLANyQyVASeaUUScH71jLgfF6gCRbSf3pGH",
  "key16": "2qjxWFnhdHuo9qSLF5cpfT8CMKCbMLkNQJghahgoknfSnaGpDjVNyLLu4E8kmhMipJ3yANQ1oMRMoejmMkzK8gag",
  "key17": "5bijTdELhNKk72bb9Ke9VNdaahkSGE8APcA7zNKfhSZS8g2Yj1rcCbwiafnLYCFJXKoyYjRRQiCoCvUZU19vC6QS",
  "key18": "3sEJCmKHy4V37ToXd6BUnjTneYdyercakv79YX8n5nrB9c7c2t2CZjZRyoZMH4q2hT4era4JGEg2ibqGu66diWJr",
  "key19": "8BxunwZEL23Lu4fozrFJUNM19C5EuxhDWCF73T65ixiWggqyDrGUj2jKNGRkAPYDtAuvaSkTvrDvofNNmkNQdsb",
  "key20": "2VqAMhcJ1J89NLYdgzgQu6oFzxaeCzVSLZrDGmKTxrYmi7LXau8riqgsPMvMcjEy5KTeFxS6DGpKCw9pgZLBaV7p",
  "key21": "x81yx5a4sL1ZWzgdCrVZyWzhPvVCzaRbkhFhYcCZSF7b4xk9Dy3Y3NYFt6QVdEa46cikKV4YCG8yoWqXKKEZymw",
  "key22": "5a8vZDFCicWsaxQLcLhwUN6CV8S6sV1uWreNkqJVDXcaujjLH5RSTUtpixnv6sRCFEpSfKP5RNbfcP1LKNGTfWsK",
  "key23": "3xedtwCywV6weYG3n4M6NyKhV8spG4nefDAEzYKkPCCZ7rChuhcSfuNMrPXbqXPUP6yLrCvuhnHb6YQcwHAaihr8",
  "key24": "3nnfaEPg1B6Sg1RkmXFqvsH8hSHgBi68naAFWGxFLiGaF1rJ41VHhWqkpEJJNiZGL3mBzCE3ZfnsxnvUP8VDrZ36",
  "key25": "2Sd1Mh2z2JetmYSuUWCxxCvUUajBqo6hCF9V4QRYsLiqhLnKC1fMyh8NiyC3N7ro61ZUDvz1iiG5hvmi4VCiov4R",
  "key26": "27wQyf3HbcQdJLN1GzKddeRhoZ5gb73BQ2K4regoqHGFm9vAyxReUV4Ssn943RZ4tV1j8H5MY9CbKmiLk4tLwUkF",
  "key27": "bjLKySg22PuunfLF3YqkF3TBywxgY24vBFmKmVyNLuuQff51rNijGfNSvg2zqGqgfDd9mSm8TrjAYWh4toYrZVr",
  "key28": "3ZW2YFewvmEsXZaTyjZwuCqrwpcPE5aaSnV3QfzxhJ6DvKPvoxuvMqRZ3AeeaRHfkMgE4uJBpGqCLVEPTxqrtbMm",
  "key29": "2K23d7v9gnjinYgf23Vbm3bbV4mxVd5aAALVzfubBn9dat5dk5FAspxPdR5iWT57PcAr5kYeRwgbsLKpP81ravF8",
  "key30": "3vZpxZNAhniJkaueHz9rQyodVhvX4tmMRnYQiPzgc3b4eYRMLgnXdk4fkdrntJALfrckWyuEAmT87duRofDwpLXU",
  "key31": "31BixnBA4TqfiMc5PjZk2YJsuRQBvNr4B1nnAznP4rdeSJpZJcrRFKgCUhnquSNcU5Qggwf49UBjBGTPyPDUnjpd",
  "key32": "4rZmvEMKLN8bPGiiP2Qs2XadJA7AriN5FpQdAomRHuVJLXhLwM4VBptwX44sW6En8aENGWSQvvZxXT716F8NnwU9",
  "key33": "3cgxKZqNWhQzkmzuESeEHFJSVgiE3erbnCq3aQ1hP13x2ryuxKZFCjicgcJVk9M49vLPhLGLTi7wEbwF7p6KHYRJ"
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
