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
    "1aji8dRszUdje3WA84afGXbS8QBV7Pj6SxCW2KtgZdcGz9WG5apgGnutnU4kT8sxhFZjNPeBQBAw1kyLtJE9zCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HLo6Q6rSXNpzgJDDCD8YSwsHnFQRLroB35CkaXL5UXmgVPG8uRg85k5EjyxHnaMVSBv384aP5qdBdz68F1VsJNp",
  "key1": "5zEEUgbA4tgh4ceE6Ap7Srjo7LZX466cTy6jiUWqn4sBZzE6Kw6xr8djfSL49FxKfCcXg9y6Fkggb4fURzJEiS5t",
  "key2": "4AevhKb9iAtXhGg3U4EGZRgGG9efdyzYmEfzQwFbL545hSJd12XPKfEGweJN5Jxs59LMBVhbGe9WmTca3dtKjh5o",
  "key3": "ve9UYA6uiNvizoikzav3SzkHoe7XRr2GtfZA5KjTac6kSS94CCTudtP35rMsmc4GTXQeAvczJ1469tukc6gffrX",
  "key4": "28eWMpo2BBCyjH5JBc4KhZxKLhTLmvssyTwbEq24fp9TW3uLhF9pACjCD2Rpwxt9JETombvDVCAwgZdd78hUrrRs",
  "key5": "34pz4YPJVFePqdvaMuBQraWpqQXUftnzN7SH624ZoSrdhM8imhiXRVnHp6MRYLhAL6xJUAFBkaLKCwnmtQRpAFKp",
  "key6": "3kM4sURCTGtPexVyQwbgLzQgEdMbj9KsWf2xYXX9BR3AJt6isTAPXzSYvpbG1JmMTf1wZPEPG69G6gr4mp4gAbbP",
  "key7": "5wPAcprn8ksa3KiovYNj1sjq37eBuzQBsDGWRG6mT6xqr4BDBnFzWSkaoKK9HPHs21uGWqtFvE3aYzphjG8V6LkY",
  "key8": "3uU59meLSgfK2rSkmtN8WEvdCJxd1Zx2VN28umzW5NyXbodJugfyfiU4fVhKjXpQhMFf18njH65wubrXjDrBR9c5",
  "key9": "52aiSjGwvNr8yheJhTCVDjZCrqtn1VctGMYiciQsWbU9J4FgtC6qqCrkrX9C4jWsecrLPjkFm1jVneihqCo8r81T",
  "key10": "4d6PQDgRL2NHH69isVjJ8p7e4sdE32StoPHhpc6sCaWf9ox7t7vcMDV7ZkH86v8zyL3pEsfb9M3Yji6fMg3PoA4x",
  "key11": "EjxVEC6ehEAE12P3hSKPSnv9TMBowXXsWa1E88A6xvXA6F916qpCTxD6NUaGnoSQD6hTuBRBWJaWWtYAyujx4Ft",
  "key12": "4uofSx5H7voqWejJ79ELLUQeSDfyv56sGxV6ZAsXcj4haonmw1mqTdpde4pzH5xApZ6L1DTn4RsjTUZK8kZFAoua",
  "key13": "5Q5PaYTSe2QFrHqSRg3KcyKfGEFXMQZbQasEVYTM4JELUagkrVkMUSHUtm5hxJD81Jy9AerDTmgeTtJSj75FBesw",
  "key14": "dT5PhwKu4oD5BJe7uE4S3FDvqF6jFWYzDqTj21dxarkAkt2zFho6CTh4oqHEjymvdoX8KCNsCq2u7R7nWG9sBsp",
  "key15": "535bd2bgkAPe5k8QCmXWmmB4WPVACmY5xUbSWLCwVbrXSx3rLdJHfwvFKnyzQFMnMHqEWJbNpeUbsPNx9WkyVSQg",
  "key16": "duqnaRH9tcJJ7LjkCyhogSNQaFWHW6TFBucdsq3nDPsx1CfbLxZYUxcxAqDZnoZF9kRDJcDwu4jkLE4AHusLbrB",
  "key17": "3A4xjKpkR8V3zNYcgEeB6Uuc5pr7fZzraBQGdY3s2cdGnr6PW4ehUoavG2vCQcvvSXQ2wxbYfwFZmaJcfmbUjLxa",
  "key18": "3HkJeZ9gLoqKbEVrMvvGvDBU5qySnNJVLXW2tB9v852rnVM1USKTyCjhNGDyxeQsdjppvxhUeH1tsvBSNTKd3GGU",
  "key19": "2SAyobmmBiRby9VUwp97EcgeN6wt2sy8e5fSFdfEaYCf9sUNjDZ1fjDvxeSX7Ba9uTkKAdcP4yNuD2tGYAmXwYvN",
  "key20": "5g9aZMx7DzYMFMJHSamBFD9Hi48MH421WdFif1rypTez86LhMYpcntDPmisPco1pS8kpLBu9LRLYoNF6cDxnkDTE",
  "key21": "3rBZ8FrQ2CHTUv4nFbAVTVeTbygJMqhnPjU77dPbL19YByRPknYf8HAKjVymjwTpb94P9gxw9eN78j92YMfWVGJ",
  "key22": "5N2GFh2WsLXS91QiBETjh2V4iabUDP1FrcaQnbDFTanRtVKEv2akvyXM54gzC5HPRwyLmNC8G7EnKFAwZnkgZeNs",
  "key23": "2e5gBPKDj47DTDVfDggGsyoYDGU6aEwa1uhLrZUFSG2hjqfu4wudTAasE7cfwiZha68AQUX7aD9EdwkhKUDceZJp",
  "key24": "2Z3Xk6FQk2JMiLKjwKCFSACWnBEyb2kqvsmEmECGup6hQcdRSJXDvxoSnvqoumiYva6pLSMMoqo2kKqA7iNhEaWn",
  "key25": "C8ktUFNDkriXCtdS8LyL3yqsvbQ18XT67XhUKnY7Tmefs6UdqvUa5Q7wkW5MsYo7bdtm2thikZGaQ9eVzm49i34",
  "key26": "Sxpq5kjQLHiupvTsrtjyHkw3oRw4qLtwHvnpT8Abo11tjHjgpL3ytHZv2AJdycPWFgdYA56aW9eNcJqo3pudBNC",
  "key27": "mXWqeSnmdkjZrXUR3FRqcTRxFUtVmbyuxG919i1Fgd8ENZNSaDusPYmfaCw5wRxx9qG6rE8sjRe5a17z1sNKZzb",
  "key28": "2mLRhfCVaCe6hvS3c7VkkmHSwm9uMzhZqpkrKcrVtq4CY8Cihb8Bc1E5y5dgftgiW6aTYWSwkEsf3xwK7w3cHspk",
  "key29": "4oXT7gvirEhquroi8UYqXzqNDGqnAkKnoLADAvms49PtUPL2TywCGFCECmiDVfgrkvr9y9yQRRkUYzjB1B7JyHWP"
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
