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
    "5LwHTTZF6aCSGici5ULFQnoZCiKgK7JRpHRmxLftmf6jK3AKn98wRTxcUUNaXXALTJ6e9GVnwgmocmdXYFkHCCgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mnrVD9McM2rrpoiRuCYE2qw7Uy8CRAvpVYktyqSz6koEzwhSLY3xCy8asu2G4ho8p8m5anoPofcytWhNgvQbG1H",
  "key1": "4AUkUxbY6tEA5DDmR9Ge1YqTcrydW3vzAbHfWbJVjo5q9NmFz3gikHiqvYUbvpFzbDFU3bsiWidqqu17WRRRqvSr",
  "key2": "4Dd999KXJbyX5osX4Q4yju51qrcjfJXE1g2yVDr9ZFr5MKFLwnNHECiKSsDffkYyw3n22jhmLVHZCnKnMyVehgku",
  "key3": "5rUxMhXL82RgNX5eUCPNJKAhfXA5d3SLZCRxS8GKKrAdrJamxxoh6k5FTwqGxcNky1Yo4Pdqjo23BSasFAr8ZFkh",
  "key4": "4wvuKvezwKn9edmWbzwTpdGJrDA4KjFaURLNy48CesU3M8kUsUEsiUKncee7ngds1wGcFenji2YYzqom4Q8RguwR",
  "key5": "RDr4uoiAH8qgFVe8LMtoMMF336Dji9rHBqrmsUhZSPbK9U9vwDeSgYq8fhZ2VkX3mNPSfLgN392GHwW1LgSELg8",
  "key6": "4VHLNoMYhmQSLCDmuKRU3wmpS7Fa3VZ6LUiCsLSVQkjZQ9ssNucrvVcwYrRWJZxMCAEbySpmmjTCZ6AkRqo3hn3S",
  "key7": "3VLnXutwRLJhKjERJuc2GkE537tyDwGn2jb9nicRFWkXSW8sjCiXg2j5uuecWNrhc9jDgjq91EDZfujofRXs4HnE",
  "key8": "bYCZ6bokuARhH15s6smzYgCaApH68j7WPgq7CnFy8rirf4bWavEidiGJGey9tqqnLeHBeJReXiEcQKrx4H9mkE3",
  "key9": "2D1BfQUodikgEYSfuJTvGMvDGwu1NyKmWqBiG9HaNxYZiTikMcX7AGUZFgaP277xhz9q3cZDiGPG7LVq4cP8WEgU",
  "key10": "3MbPc7jJ8h2Kg47auUiYFSqy58c4a4Df3ndKXPexqYs7G9G4baVAoauH6SZKe8PYtMS53X5gSGsvZisKPPgKqyxH",
  "key11": "2Zx9rnSvRUGGrLDxyHXkxbDA7CTzkVPoJ7r4xt71SHj3wVDVN3YPnw6oGgDAjKHaGLXqUWvpvNyDgyfDA9bGECk4",
  "key12": "2Emq1BMNGmDpMaQNnm8xJbJ25SRgzcjgcCqmxFjQEtwjU2LMTZahocap9VV7kY8YQUmueTjrcgmBZ8GVppwSxFeb",
  "key13": "5sde1j8Phy1yECFPDC26ebNqaNF5HAaqwnFtuNWYQevzNkz6JfmXLZQrBp17ni51p9LhJEZvPW28MSYhbue4x45v",
  "key14": "5tCFHmZAKNPLGNwbJ9xyw8NgvgSp1Tuepku9iySCRmsw9yJhPcQBQHoKVsfLh6ovAaaayDbRp5irxMsuT4zptnsr",
  "key15": "4dHyxaqk8kXBemaDJp8QKj2a7z9VUtNEYEAUnxsYRmjisy2hpfqeC3a4QtK74PioXQojy365kqoLQYXnJM71m9hu",
  "key16": "2osqKCg1Y5VtodjDfUhKQxntmCoFZD8cnjEqwsyU9CQWW3jomky5LNtu4mi8NP5nbxttgij33WRq5svXfi2pkpgw",
  "key17": "2D7mvzRBJREVY6Y6jGGJBb87zyrQcuwDqdAwr15ExZK5szqhdJVFS1PZvDtT5gjunLBqUjrSSYTBAVmDcdv7wrVj",
  "key18": "2oYhFKmm54vh8ix5KsRgDhZZXNFs5noe4eHj4e1qSsEFZH3zJNcgA4pMSta6XcQnFu5pLV1MFDYHAxypZBrx1cRf",
  "key19": "3ZKcHFFd4vvTa1Ki17wuxmVG63iDkZUvoEk8mja2yTHwuPM7iAFmFPX3GC6G7bztXkJmtnkQ4JDUH3cSZ9TDXJNd",
  "key20": "4jCWgHPemtMDdnQj8Ep34k7sxK7HGG2QFumjiHrXmvTSkqV1YEmkpbFd3JvySVnSrGCUbJBFqEg8BkpUa8hcLLwn",
  "key21": "2pydCfsoxoaX4T9c2jEsyuCzwNGpk3VTndn8wSrRFUv2yAYvMPvYV3YgP3H4ZqWQGB1nK3uvM96C96dy4cxRr97g",
  "key22": "59VtaupP1Jn9kNi4xiGwSHicoe7qaCeT2sjhwdvWkix9wAxumJ13wr22i7MpGFgSrLULyxPCstBzftHucJD27SXW",
  "key23": "4s4gEdBDmvmiwK3gJoK9jxoQeucnT4fhMsxoSbN2Nohov4toodSfLbPVC984qW5hMw98d11LnyD3piDK8c3BJJso",
  "key24": "5kWr3MCMbJ8w7YyKF3nPBEJkKnCzUoggxSiWcgLUhigCHca4DZ8aGXV7bdnfhzqYgLueRNyQfqfNtFtXrNFqsihR"
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
