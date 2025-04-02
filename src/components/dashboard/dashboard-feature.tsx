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
    "2qGPPZ7dNeG7CjpwcDWbPDMxMP1pkKDbbz1DwAF71uuUA2CSqMmjAX9bjP2M6GUhwHaYFBPr1BqEcZWmYkqhLJ9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62RwSMwytxaskxVZN9SBKFsFoorLxVWSbsyrevbdssr7KqN7VFTm2tZWh5sL1dEgNPoDiS2SPYD83nyg5j2nuhnh",
  "key1": "4ouCa7y3YmFBePt6cmkWhcRXBfBzMUE4ojU81JKHRZjRtyyCkRAe3Ab1D6FU1iavJdKYvtcU6B8KguAG6oWcdGgv",
  "key2": "pdESYzKyU43HmGqQn41K3nR5vUi4y8jXhZC4yB6g7bSomtqazSvY7j8Jce31XyYbxUn2RXFqQMo6VihMUCDnC2w",
  "key3": "eeeA3AUazQAGbdE4KQZrWcUYMKiaYBQ8XUm89Nedy5Q4tnGWTRAaNubqZurjhg2c8bz3VNvUgnzLDcDoKckeAho",
  "key4": "5F8P6P9GhhjB8t4VBfnnt3dcPFrezXNpxGAAQkWW96RcDgnKQRfBkV1zJT1yMW5uiH711Z9ccJ6ZSEypaadRaRyi",
  "key5": "2UqkMAnxtVCJe6jYsUiamUtcyS5omBEkHMCj9Vw94c1fGgzbU9M7spHdFTU6CmCeMfxYBEULgm4egPPz7DhsUxEE",
  "key6": "5LmpZLXy4caX4n7UrxTv4F2NV3kzDKj8nFVboFfSnPXdSij4P1rDtXxVhnC9ooiZsDJntpZM915BbToosPLqDHLy",
  "key7": "3TCubtx6xje4u1XaDVXaJNaA4TMmWiVvgciwjSduM27mx4THjPhHMRQu5beDJWgC4CEMYDzZ2rAzcjocd9EWqPyw",
  "key8": "n3kZhCg17MVdfYZVu4FVy56DPxSZ8wwMH4xeXwjjoBzQJc5dfGuye4oqQYEHw6rKmQABTXgbRSNwBBAo1SYsSfX",
  "key9": "42MZNYzRaXdn7SXwc5fYYQGW1hMXHkmbW7XqVo9prgioS4nBuC4j6N7fqYkM3GzNLDSVnACLwXGVSE8RkSRXrHG2",
  "key10": "62kWsXzw5z2bYhiVEHoJ9UR1U3nriMvGjyivuhyz73faSJq2UJXbo9nDR8zW2mChQLyD1Q2bGeEonCKndmVosbce",
  "key11": "2qfFvwXCNk97CXBfnALTjfnb2HqAe2wt7TrKK7f6oenzLjnAGU3ErPnZZv4QhbmZTeAVC8yRnCjJhzxaUAQ99hFS",
  "key12": "45zmJ5eK8M6fFH3bRJxYPr7UWQ8WYrdf75aQKMgMHnbGddc8euCVkXQKP8yG6pFHDDvF29a4vUDEPoQGNa7NibGL",
  "key13": "5F3P1UXcLte4kv6Y8DRFDUoqfUPCs8RzjCvgsn3sYq1iWeRfbLyWLMgJYFAYAFuE9iyHq5A9BJxRTpuE7DojcFJC",
  "key14": "3rG74DKeZYvW83ftGHYJAKymFx9J6wFPNLTxaBdddPwJKQbSrTYyRCHojBto8gfjG2ur4G3kdUHq6t8xBexqLEBT",
  "key15": "589nDwbP6zTXVyBgpf4KoZ7s47jBxHn8hDU959LfxRwRL4uwqi2fmdGgVTme9gfqgbVUDCGeGS2Awt2n2gUWpGp9",
  "key16": "3kdsti361CYTkJQtN99PtT2xqi3tPpFHZXEHhcNmoeLCYx7XUexvUN6X8sYyUF8h2SatzAGPbhz4F2LzufaUmGPL",
  "key17": "4ieWtfqxwFtj95CZjRGpwoCwAo8v68QDC67MGWn8RDk4WPDKHn1AtAia9Q4VyZStxGUNKzCpkpGLCK6orSXQAUV4",
  "key18": "wP6gNePCYnwLpS7fijWpVvD3vPvLAiXNWybVtCcvX4emLiQVEmVejeKYuvEFvCg2vhu5qonU7Whao1dRzxCrUfs",
  "key19": "5oqTjwyFTByLTtkuLGR5FRqoENCWdwKYkSy8hZKg3jR4zLxYvguV4qCEQFspXUBxB1wMwpDXPx8GhZc2fhUomcL6",
  "key20": "3giQpDuV1gPrULkbCJcYUP9N8iWtPs9hw7Vtunzz1oRKNFYUDmJP1W1yuPAbaYv4iZJnospVPNFQMWpKzosfYmen",
  "key21": "2htB6jgZQ638KzjJDphLfwYVzZGaghMuZBDFHFGHFLdP4gB4naKs58QjKAcXNQQUhtBScRDDCe8dbpM9NjGuHJ7N",
  "key22": "5P8Kf71gwqavHApWra3H3QNt6HphrTEowRLvYF7DJzBQ6vJJNE59pq1wehhVfP1FYSrXVxNYfxUF5zuDdz1M5uqc",
  "key23": "64qWXDrQJbZBRLNEmVTyhKtQzACf1my1n1YJ31FmLQn7k2EhLgL79hg7ug1hVsJ8rtYR11DtRNAcLEj31LMzUGEo",
  "key24": "4gcdZkwFxQ5L2nUNUYb1SXU7HiXsXDhNraWQCiZ7yr85bgABDJHHXKKAzrptapu3gr5PANbo3J7UH4zGFXPPiuoR",
  "key25": "3YN417e4MYPepiU6VNLE3TQJQMHetvxubvyZP3Ag5hs3db8XYAVTuHwjUXT9LYmhC8pe9dDX2womuycMxPRNGB6s"
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
