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
    "5oGQiQXvLFmwqH5DdVuGYU4jV8TwknsvJoYbRiCb82RASMzorBcdD6rVB9geH24ws6ExvorCJYe9gGcyrJcTpF33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tW4VcZHS4HFXputg7kD5j9GPJzqsqBJWePBhL5A5sZB55g3gke4N56jx58T5FhrURBfbv65ser8BwE31d3uTNiG",
  "key1": "2QEWDzUvyEhgVVWtqKqhmTVDxa7FjoSPVhACHwwey6JcwZGQuas55s85hCqZSCKN2Ki16ibSJ3AUJKe748rHuvaY",
  "key2": "5sWDg236VJkrwWpRT98cUbYTfg22yQUKboEGhyuJN1LWdJsa2reEgRThhGnpkwnqNEYQ9GUcEYCeQtUAbvtCf61o",
  "key3": "5auEWrM8kxVu1mxku3i9Dg64B1L7TUkU3PY18a7uikhSewdYZTU1DPD2i5CCZS3sFGjDJaGK8zv5rLoFgdcdxefF",
  "key4": "Y6wsc2npb8sKpaj4C2RJz8XaYd8uEArcyoyvS4SEmMndyUCTZgVLMEdzRFDr6JFZ21ksqoqxHjuwFiyXVo3Vcc9",
  "key5": "2vCgfRxPzMN5MT1Pft7cSh9ioyLTJc4J55XY989DdvpdqFTiuxJcqf95nW7jBiVUHuDtufMiDRA2ivhqNXNC93qb",
  "key6": "3NK2xuCMQDxsbY2MP6eStNCav6kq7xn5n7Gewmp5jSUs3nNJPTzh2W3nqYHuYZDXZaDKz2ewYnBCwRp9PjBF7BgL",
  "key7": "YuCC3L2JgfWFVtNm136FWt2UWZbipkJeU36cWLfCGWhHApN15va1zioYf5rrU79N7bA9oDvg2GmKXYyW3yNefDi",
  "key8": "5tiTi11uNvtuV6MsCGLzfHjSzs6jJzV4CvsmGUGSmTyN9uDgkah4NENgonFqwjzRTyc3JAoFTZkSejRVotyzLX7y",
  "key9": "4w69TWrVA39ikbh6KyBCLrUBcQ8s8nAN72xnMvqQ7u5cxbBoEfGxukcAr1K65ebSfHVPL5KLuLMokAchPTTBKsXJ",
  "key10": "3Vi1QPBoQfH62uMR8ZyJDjLAo3cBUL7KiJX43vH5rHCtvmSEfj7rF4Ex3NuGDnGa813yuZaqDqq4HjM3UiJ1YPs8",
  "key11": "RZoyo2vQTKU1MsPquLZAY9ksHdHLaC3RWtDve5ueBVd1BAZv3ytkYwKKPZiMXxSuo8P5g4vjxgVc6UxxjyuDyur",
  "key12": "4PTQe3BNAEHGWamxUqwtDGb9f479fx1UbSby2SRJFCQ1FM4rpcMhSzi2CqyToK4vsmNuV1RYyJAjDYfurdxv4Ewp",
  "key13": "ej3UDjfJxJhfKg22YpyHUhQj8btQXcRsARTfjQKTWLL17widy8sJf6Ha5u6oLB72T96nQSALnPyvoG3XjdeXan2",
  "key14": "ceEmsphV6j89WYbcgW1G6UBGv28KHPbjKMSaRoaqVKqfaZ3X652Gbb33REktnReZReofxKHhRStMQikgR9vyhm9",
  "key15": "3HmjQVKqMTZqRQ4Ay1yDM2YCFLtRREzvwTpeMc9nx7oQ4a5wuf3Wjz3szBc6mHPGn1opTVkA1qF5aApn2icmZWXk",
  "key16": "Ak5jkJxL7MX3MFfgo4nEK7msbJyFrWxruXPbbQvBmYheAQ8DNfbY8qoaojbB2UyeU4PqvkRd74fdcbs3BuNZtV9",
  "key17": "3cyQnVt7ZYBinunXQ4mK3Zsj69w2FtRsA1G6EGuhPGsrgYtaP6eMVQ4w5LwEcAtCZHitDZUYXvs6E4wi9CSkakAn",
  "key18": "42R9vvk9dDsirLAfGEiZuPkKHW61JEGfWDvDWsDW9Bk2qKRLLg6EGgQ9v9e7J9u81RMsLSRpPrr22X3jcNYifoK7",
  "key19": "5doSWWVtXuVEKabihVLGPYKN6274qhNAeBeGoHwVhCZPtiqGe57Z2tVD4EpxVF7ZN14qCVM5dyJ5UreCsxnP26Mv",
  "key20": "3GJkjRxN9fsM1jwge6bZJqKSxbQfbsif6khgZftp8prXDJe8V35EFJt9jWmncD5aPwmG97BJiUsgCZq9pPujYyYN",
  "key21": "45TShCsawBFbpadw5cjLbcG41PLZ2pVxQ1LpjfwyunLGpfMQffHgZC9YJ4dgNrNrZv9zwkXFfAyLTRyfgwD4RLhU",
  "key22": "4b3djg5Kc6pwPdzUGZ4qTVDg1W8aQbzeAaS6vaB8bNJzkAa5MvGzpZNqvA8Jh8QmbmzsjDGfjrYDgvPnjj6e3X9C",
  "key23": "4brhwPUKWK1JvN1ThvPumefTGAL5DP6QWAZq85QLfwNXLWo4miQXkrbKZGKF2SFDNKLMKBV7mLZsoW8hBmsTszkT",
  "key24": "3ofi9ZAPKCQPeVqYvNBzNSyn8VMVzimJkQKq5hwY1kLjb99bNXWR7pGtktinw3AFYLeQ5T7kZb4V5sVSoNxuVzMs",
  "key25": "2UQrN8hM56KZMYUcse6EqpervSgfD6LveqRxC83WMDP2DHXuR4c3XMxaDaV1W7NESscxQuUaqvyJyzcJtY56A9D2",
  "key26": "3mndo2p9GCG1wgYdfx6yoVJJifEKAUabBRh6MThNRPgnsxXaWAZJ1143SHwSCycfqyA24mh6mjWVqVG55a75SVaV",
  "key27": "GTSRBrBjeUvAheWQ53abLcEdyPbNnSUY1nQ5Moy7Y5iNrt7M9AA3cXVQw2KGgb3TM2Z8FTHgiqcbrDahKfyAhxu",
  "key28": "43Mmbrbdu2q45iEkghU6SNFDm3zpUSCdkDi6XN9JPkwMrBQscQm23JpjUeQFBrZdWYEetXtHwLcVngk3PfD4B8if",
  "key29": "7xTnd9d3Y7mp2D487AM7VCurUqJE3DyyFb5TvdL5ci8tXMzZPzmUGjFYge63MaPQzm57S2jkFgZS3fhpcfBjY3E",
  "key30": "4kTXjq6CN5QT6jnr7QZtRn11nrCuE2FDhbS6W8GbMf68PjoWbGFJXrK3vZRXgmo9hGB9eGApV5jJgC9stsPKTD37",
  "key31": "44hAiCz61zxPtRfv2Q7Pb3WHLiq9mUA6kbYtHK6Q16UJdtDZUtwj3CcxFwQnyVbRdJ3Nwpa2BAYSJmpsJPSM5ZnW",
  "key32": "5D2J8DK43TqdMHtV4puHMCfPhmH1N8uYSe339HicUpYqYRZ77absSeaQKknEkAa4nS6sg6jGyYPwBwPTNU3Vi5Jc",
  "key33": "Ss9XFzExfQ1TNS1RXbWcTudEXfw1zNvBPbGtCPgLp1vJKdyvvy5nSdNjENnsWuGa7kP5TD5EUGCsmcVdfrUFJCG",
  "key34": "4Twr94uN3RnJysRdoooe3gvozKq6htusYJxZK3RhMPhdQ92yAA7oYjvjQdWDWiJ4YnBb66Kfhb6bYdXKJv3DPriS",
  "key35": "2drsLur3JPjEGoTnGRfoR3BWkDQnWS9pgWn95twyH6vNe5Hk49gujCn9rxKGQizhZbLFtBRK7sbEn53TzqkYtMXw",
  "key36": "4pzV32ve3MsRiE3GyfxgXZhTKFaDiwJNDBPTyBZ7tr715296euPEQiq29o9g39ztJDxJgnLqW4eN7arZaUcXjwGH",
  "key37": "3nUNCkW2nR7J77xykgnCnijo7AGHfZ4uf2YgY69YyEkGSH8e73hi7mEm1GKnMd394eCbZypep5whtbpBz5czawan",
  "key38": "WDNyhcf2e4nEGkF7skfQhH7wTmUoxtvMEfHzcrpMdvA7hnnfECG67herKAPq9inX3cRYpAyruspbF7DfF6Qz1kJ",
  "key39": "GmL4s3umPGByShtkgtpVJDdkj5JxSZw56Nm9WKF74Se7SZpSc6Y4Dcieo4L5tREBPQYQhsb2JfYrASZMfk5oLDo"
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
