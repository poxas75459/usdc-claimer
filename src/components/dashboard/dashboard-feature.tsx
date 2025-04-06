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
    "5JzLgDnnJFZLXpWdGjuuPS1bDhXgFV11MSCwkrxUCYmpxjc289Dj5GpKzbhKCSQyq2LHCVLeCHPmFwX5PWHPfKXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cc3RNvyfpmZAsQct66YEB5rfKzdWutjwrDaT2ArEYn4AJNxVk6w4n2BcnPVxkvchg8SFBdDf3u4TTC929B1FXMx",
  "key1": "1rwHVYf8YQPPeqogiQs1SV2QV79SeAUziPPKz4tpUHYvmdAi67drUpTZbThqX8epJBKcaKGaAuTgV9exizzRSVt",
  "key2": "4s5HAhRU5ghPmonQ3FewEAketmiR472UrCF7B8VAQv8ZVGypxDNMiFiCLr8yVGXmWoCccWddHePpvqdRAcrwQiYU",
  "key3": "5hcxV7bZsbSN7kacd7gKftcdboCRrSjwbg4dHmrZKadYrzv77WDMniLGqL269NhgtKitK4Axh8GQsfPbq1CCmgEz",
  "key4": "3aqTBcqPyViH4YWPfpFVR46QytmzLHjwAxkZ16HMxUri6zFGoh6EemBXW47HXpevGLMAChuEohZF25jGmSzQ1moZ",
  "key5": "4F8b9XEzn8HEnTzitoGJS1HvBTDGsSi5oiBshGNWtQ7iCA7CXBoTuMDaDEQjciYYKcaWMcxzKqZ2nqBsTmuKS6pn",
  "key6": "2EFZDhC8AmhzoYknWkY1DBS1QnXwV5nCrT2p3SUFyVdfD6oJuUVeuq6MKcZiTFtTugTHHn9hKRRD15q3X54U2ySx",
  "key7": "xFRku66v6aExPr4Ej27vrAgha3kCKvV9uys55JvYqPsqvVjWjJTDtEJnqwgiex6TdRB3KupjcJmPJA7sonc67va",
  "key8": "3ikNK5w3gxsqoHgk87MfnXHVBRqufnNU1TzqrHR5WjkM78uBVVKLFCEDj7f84zepWQ4FP6dHVXJ16GkUZFiJurS4",
  "key9": "5Z6BsMf8HBtwJUAgdjxaj2hpE1G42bG7FriehxN8VX2cEdnGwPR9XVKCysH8rEqVMNGn3sxCvY81AGsC9x3aSnLY",
  "key10": "3iXGnNAswF6SjKCmMVp7NRWf3KJG772pG4kAhWnH5aPHZGvThDYLnc5s4xXrFfTJtwwvy2VfX6QFDjHYLuiYBSwQ",
  "key11": "4vqyJQac3vuQP4WKzfn6TofC2wHHgCPgmPqhzx6ggVavmxQtjAZ8SvsfAf9CXUXRaDDWmgvXYibuLDwcCnyhqkNx",
  "key12": "3gur3oVRHqzbyyExmrUg4LcmpgecWxvGp4yk2V9bNbF19bnzL5b35emCxERbw232u329yxM9ax8mKmKkn7wqSkkH",
  "key13": "cCZkbjDzybkn1f5nGgQPLiMrL7MGVUYp1P7bZqRCdf76W97QN6AwYVGnaJgsFg7CHArX6AbVmzYzZPonZV7sDLv",
  "key14": "fgLXZKmmJNJeUz3gRFYbZaRBpZZvDGwhVhaAsBoT66rLM2Ddgkwa9ZTVVj6iZMKz4vLNWE7Q1rjZM12BBfZjHRX",
  "key15": "3uFD6kfHggZfsmzaEyoxJYsx5m1W7GnUhZ1nVVthRBoyL1gGPnQpTtmYPyW4c81AYJqRgGtRWXDHtUwvhrzQH5sm",
  "key16": "3vJyJNtS1eGFajVgebuKKMxKqyoJXWDuja5dnmBkhga9Mytvo1tj6DrtsJ4yYrER641GbbSWAfqjFx6doHeAXg5z",
  "key17": "5LEG4sX132MnGWw8QazMweC9rdkexktxAGZxtuL9pJgiMpgNwGkauy2FhyatYMRspDkWSTnn4QYKs82USYqourF7",
  "key18": "5SMwBntV7A6wR87D2FaR6Lssn1ZkDd8EHQqq3nyY7TypW2x2LiKjnHLNUBiyvgkJ7c3qbRUrG89BkxEsH8vQL4nV",
  "key19": "3JAcYrZS6H6w2N2fx1UhzG4rUX6d2AQNJDGdAoWWHPz6iYmR2THmPdFyvYXweknBZwRrAx2BJfPHFXe9RGTZkdnh",
  "key20": "2kBcYeAJuL3vaW3eS2cz8izB3YKFMTTCYZzPbNvysZQHKqTBF5CLHPsEax8GH7NckUHVqU4xbyfi1NLn8NwcSXAP",
  "key21": "4fMCCgZawtA8PSxPApXYPFzGVRuxUS9xUFjvMLWome4XzuuqcjahfxyYQFMWSnZxX67SAvWUkJtNtY3WLoDgepLw",
  "key22": "3z18G4BEY7WZaLSJvGb2H25JLXnj3in9xLCAVptsEzC7jVGg1U9wH3B67GTNFwCMyU49w5gdE9ikYmho6vtAjjjw",
  "key23": "43Ke4agbB7r8C9u96EBaCbLLnXkJezx71EVdRPyw6WwtUv3amAK7SJ6PSLxHmKp7eoBF4YvBSvjLFFfLmGwcgR5f",
  "key24": "5SuV1sRCCajKb8TwHAV2nte5RtEh7WFAdkJqdCcbbu8vq3YZcu7DQUpNDz9E3UPa2D15GhKLd5VQUWWM6otjWpxf",
  "key25": "3Xt7q2T57uGBNBsmvsokGzQLYYy57V3mY1ZxCgvFYZmU2HfdwfCAoj786HZ8jnGJ9LqM4GVJuUr1PWAVQ3qzEoWH",
  "key26": "4cDzTGrTRdtRKNBTAeeKeSDDoa5q2cTGHfxrSD65V94sZvfD25TGTrHntVbjaaZXtkCGSBbPQfPbAtTkQiboeUbi",
  "key27": "3adYFh6YBP8bSEQ5RaDirpcvwC9pvBM1bbjE9g4K7gVw8GWbsjDpb6VspdkPozXXctrPFMyGSoUHftkgzQbyiU7t",
  "key28": "43e9LYVvduLDuy8ye5Q2cxRG8cC4nBjDHvKNsh7h3fdnsRa9R7Vzk69u5y8TDQYu6AxzqFeXtgJLk9CTaqYH2M9X",
  "key29": "2PJP6Bq5c66mSMPy8VLFc247uYe4T5Ttikcre81QGwGpG4iSTkT3WmmCQLdDxYarZcLLYKeKBMpN6tgpKmd18q9x",
  "key30": "2WuMLRV5PWaCGATFRfR6KS4B2SXhjFzvGsJkNrcBaARjkvgdYRuwVBgtigPyP9dAxQLGwWcnFfZt1oTkMzgAEYg",
  "key31": "345omiZcxzu3ByLrsxDidjzVBtjgos6nKQgD57n1FVJoJZvYt2oiJgYxWxoydFtEHEpnBNVMeWZ1AK3KpDB9uNSD",
  "key32": "28oDfMSChToQ4MUL71r3pwL3nahc15jssZKnWwU7MCYZhKv5mHZE7tM2UW32PzDbLrnfik9AcCm6ZiHbepcRarUi",
  "key33": "2Gjty1QtphUEJNscJNQFQraWueC1SuW5EQ3dcaQuzkmfffgcTmgmvRBmWEkkAN2apUs1GgQ7jVyMJGcQFUJEAdED"
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
