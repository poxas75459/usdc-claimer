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
    "4S8PkZvoVjKB5Tqf55Ywo8JaPw5bh4kwgErNddijkihaK2XYsMGtfRA3TGx9NyG84NoE7p1t22qGhdcuwyAj9yxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bLFiTo9CShWNDVmG4jQ6TTLM8StVaBCJCtv5FpM78jSujaURPq3aRJZ41DTTMLn6csMujqfPDFJtH2FGUjqQXvK",
  "key1": "2RPsT57AWQK8BBduHs7cpSQndzYFkq3rjoYgxMXpRxWuHiJQKNVcqYjYPmFV6dokmXDUKazhdimppEiMKyKe9sP8",
  "key2": "4yykPvmbgDhNU4dj4oTLMPG8QuqZphgJMTqauVooiFExstWYiC5L6CpLZQZRrqLGu6gk452vFWZm1FGEUEjSQMMf",
  "key3": "47iiKeqrfXy9nHV58QY5QUPArunkr6f1XLVTbKnomvFXQdbK2HMStoFKZHDMgVGCFbGWnNGFXqcvXbqiTPtWL7pE",
  "key4": "2F9JJsrMKgMSLi3YrZ9eJArX8sTVGuEhLp63sjU846XPArPATASskeT42vkNuneNyY2opRAX6yPwKWCfLU6Jgf1h",
  "key5": "HkYC3CTWdvtnfchwfiUtrgLJvPWs4EELLrQtUbNNQCCoqr6uxiEAJHTWxZFFZJQ43DxHHDwYiJwu74APi4i9Fh7",
  "key6": "45KTFFDPGBMDRT8gKQ87spL9tmkbcAjpaEFJBZYYSu4qhJTCLtvVpZXNW4RQ39x4DVbiLinizA4S75kffxCBJuVS",
  "key7": "5AaNMpsdwBeGQ64yVTqMVA9qN1mPkUGmwJVta4FHYCW1drnRyFUfCWDdhQpf9s2ZGcnSjaXAbZWB9BwM2RaxVKVY",
  "key8": "3HRRNh7zvk96dUk32UThvKWeZtpwppvxYE2ZCHPjXwkmjP2CtADhbN8wxg6uq1TG6Jy9jCrmyCYJNh2yiZuWhetM",
  "key9": "62tmQUAQShwEzRNFM4cKCoQaZfN6h9BDtke1YpethD5ZGadPomTspRw3YaczKiiL6jDasX7jYxLbLTjHN6743hxd",
  "key10": "3LLSjootyHv5qTRZV95eRCnbtp5a2Yu31sQ9KLqdVyWEyLKRoNapexdipx6hqD4qbKodQFv47WM7LB1XZPuWvH8W",
  "key11": "5vWbzU8tBTMQVcwSWxW7HMCCPCjZfTWeFNgvBt3yjqH6aDxmfPtQ1GjW1zTZpw7p5FyG3pXp6zDzaVTzfrKidC9N",
  "key12": "2PckuQJwJJzHSu5HAWHUswtcmNJb4ESwR3Qi4Mi7sLwoprLSsA4n8zf4EoitmsS4MNzn8NWMqDWn89V1cQGGE41d",
  "key13": "2XLT5rjp8rT78LkjECPRujEarwqhQo2TT9A4XJJ4hgLCFrk5BcU6hFLow2cGZXFtatASPM4u2LPTW52GGnuUkQxS",
  "key14": "3ycaGacup17Czt6JBubqPkx5xKXx1BYv9rCuUpZhdutZzZYZjm7kvEfCnPasrVuj4wZoEFayfhZQYtFtbSj1HG96",
  "key15": "3ypSxFSZ4ZNggQFwg4w6DTWKHg379GZawuGMuca93Le7nr6XW83de17V8GDuZZFLmH4zfCGBVTpdbc9dMtRgPxfp",
  "key16": "4aQiik3yxYFeEyxY62ic8V2BZ72MDubi4C513B9JaFWAhjZ14viNAsrX1TUabzkw8o79k8EszuLQPMCrrjvfpekb",
  "key17": "3t1TzCiNPHxShFVLUqTk2wqBcyAtP9tQAV81KwkE4Cv2iWBXRTcREaTEPRqiUy2J81DhyD9xkU49d2LdCgyGfooq",
  "key18": "2vdreFAn5V1UHM5WieYk11Cuz7T5eR1h3cxTsRSs58kCCr5scdQR1E6fEqkSiRw9K1FnLyPMWvH7oYPvWjTLwbPd",
  "key19": "rqXEb9hZxe6ATMNsj3dhQoL5gU5WjJPmxXKTs5anX71qKNHfy9KsC58Sp5aNx4aEeqNXBypLGDzeaZzf6r7XjBW",
  "key20": "29TsQGgvihjNHkd9XhwPALKaK6kQyKEqYnMQrL7JRj2oMxuQAP6W7pRgBX7ChgTCk3i3MAoYyVCPBgAxZGHKWFtT",
  "key21": "4gbvP6B4t2iNTdneafPafpenT8bZJDv8ajgUWiRfzJG7P1w3eVrqGJJCqVBupKaezszWDXnhmAU5YTWfPH5Q5MsA",
  "key22": "SgC2uXZYWrMyMGnejGrdDyYhz2SKtVQw2iHSo4HxLd8F7LroFxZjJhxv9ZEmw5wCUfsseNmZ3gWGWPxuLh3Jf2J",
  "key23": "4sVFZmthpc5b8xQCirvzNKxKTRHsUegL9KZHGNG6fggFt25vMWZDmfCqbFeKguALZLpTb95FVjH5fVxphStiTRNz",
  "key24": "8WtVGnoY7yffefNF1XnoZBD1bEzmyLgLzYL3jjmT2xFoyLd9fr4y66j7AXsQsPzo41fBCc2foXFY4aAAYrYaTwG"
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
