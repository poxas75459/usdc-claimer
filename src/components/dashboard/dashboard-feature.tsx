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
    "54xk4ULzRoMjXthMCybU8cecLdVkA7QJvyoZ9W7rZk2j8K7sRFeLnnqbTEja71WipN3kP2pwExQqdHY89JpTawzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qduQ2uM3ePzfWyjtrgS9nEc3LXiD4T7rE8DgHXFzXVXFo6BByviCp3eoY1RMLRPDtpiU4Z9mNWgufh72Pvs3T5S",
  "key1": "66sKH9V3cP5mMRCRWcHemqh8ojY9KevZ5PHkhoMdE2bRtRtA5jXoJnzy7dKcAAQuYCRQGMcZ1d2qxCv2Ga3EfLFD",
  "key2": "4CeqXPQznwKGw3FGaBM3tCx1DFHwdfpmfso6iyRsnFs91ybd7m8gha8gY54MnBpi6qnFUcVjeHyjTCgFCXiVRDUN",
  "key3": "2kVZu1HzQPrns9jTwVC2aCro9nDr1EArw5jrwQLw3J1spWGk8yBFZ2nLDnbyfDTB74eMi2if3ZB4otJLG4Am39oi",
  "key4": "41U9FqPiAvnNyiAmMHZGhMre4XcpJChdmJpm2cTbtB84Whp7jRacffWUaaHdmtjFERC2LbFkm6V2PLBWP3yf7ta5",
  "key5": "2MmQyNSg5mEcMQz8vtDudAsvduWzgNFcew8oSn7Q8tqwJun9GBsp7hyJ2591niiGqCJViTXwMmaG3RSxKtWP1iyx",
  "key6": "63gwsrCZ1YRFqci2PxShfMtGDYkwhrACusQi6ZpDkiMXVicE4bRpkg3hJJEGKHHpwfQyWvE3bnvgk7tQ9DiP4eKu",
  "key7": "5BZUkFMMhdtK58PJu8bBTkucJ4hEDvDVruH4smXXpavrGubU8QUghmvkpYTcfxy29E8YDh8YTcW77TfzMWxJJmJZ",
  "key8": "35YbpZ8TgYyfmcXV7zirdkfphb18DAWsaTtgLf99Bt1gk8YvAYKMQNQhCqLan1FCv8W32ZcMpAHXyBUHzXVVSX3E",
  "key9": "4BPHdq8oREbdWyQzgTcHepjEbVEH132H3WeVE9u28E9VnHKFn6o732rkFtPRWoHvY43uUcJz9CR8Nc76JaRHUXVc",
  "key10": "5LJG5D1KkQKVjvhHKXA1JR9eLgVzvpr2WT1fE7e7LNedhm9mutAhUFZJiJ1vMHniVnWV1BRFAPSTvgSnD6uYq9id",
  "key11": "5pZGQFCxzuavi36t94sgnW7dDcH5z3NP6JrUoiqn1bwiazjkzH5dtCakDuUzaXcRPBnuvWDNPKuPWxhzAMZfYVcD",
  "key12": "5QK9Pzqsq1P3RXnVwoAzqCiBmjWymjqFhbsyxu6DrQCujtmMxNSHFNER5FW5NDzxNkKRmyJ4EAZH6jBfMK6uFKzP",
  "key13": "58DNrtF5vR7d4FjHRVQJwqcErmBrqK4SH85rnqGjC4QhyJxwbFfmXQRweqCH7vLtj9XCUTWnSWRdrqSqSe7hUokr",
  "key14": "3QJmKCcJ8jX7HBnPchWPEvx6pEemmKHgtQMdwTwgDCBb2B6Gf6MZCF3MEvKKTRqbaqeyzxj5c62eMuRNiUt28fEE",
  "key15": "2Q3VHBBkXVSQeXiexnUPFzzViYBH77DAJyQhFoCtSWo9zh5o4ShNZATWvmKJgsFbFWLiKgDv59nXX4q71K7KzpHm",
  "key16": "2FFZB9R81YBY3To2qYgBwmdAZ4HiZwkon3yuezJoFu2dyx5vPtcLQNdqpgZfBUFLn4GaVETa1aezgzgNtWxB1u1W",
  "key17": "3YtWaMH72B9mcXAbKKyjRPKvEKxd9ssySSet3ryxM4yWWhAwHCeXTQqv3PWY9XgB7bqkU5wQoDdvyHzba5R2pzDG",
  "key18": "4oiizbEzy8h6smZV66iHbPYzqUCCd6KBUwAzKVyekx2DX98DKgVhuReDupr7GJjzJhYTThuYfDXvsR5jUxFGbBnJ",
  "key19": "2KR7DHayBzvr9owwkasDL4v1mRgDcVGFNVqSpUW6xKEC6d6Yu3sMSd5cxhCDAuUwem3JptuXzYmkkCmbxufvjLUa",
  "key20": "2CiDThvpSoLk4boe1Jcpbnn2vsdBYuLoLjcZnWKouURpLtSD35xakeGLJbVuUeZJXVa4F46tcGsbSjLxQPnNQqe8",
  "key21": "5YpBrCvJT6XTC6vqzHLd6HZRzcZdaxNoN6zBa5AQnDknkCKFs3jtRxJTUKAcRvz8NsqKFxdp4iKwp5LoVHeHP2kn",
  "key22": "4kCk9jhzKKTv61xghDcQhX7J5V1mEBCsDwXQNiBUiZzkE8eXpYJYopa8EAAD9Xg88PoikpVrvVh9WZaW1mjy6tnf",
  "key23": "2Q9urydpdUef4BULtSuMqaE8erwpGDPwcojgU7qbqC9kVP5YTGQ1GdB2Zz5jvgYvoq54mpAXbnSiKbmcXbZKPmRp",
  "key24": "2t4EN66CuCg7qVDUvXYcsLKZUeNEGwVD9VZq7C6xTQ2xB1ksWFVWrPw4Rk24FYTxLvynEut7ekPRJ9fY23NoQRBh",
  "key25": "4GVtVvSmDYUMKqZaNJGGu4NW9Lmbi3P53F4wM6R22xzzGExqen7Fc9RPdCDsahsjzXZJ4svJUSBhqRPE7i6LrEVf",
  "key26": "2JPisHLu6vQKyLHEGKc9dAUJzY6GD1DYSZBSfGEB7W6tSgTLbMn3miGHx9kD2PsGSNmJmJMhfyviotbaRvYHJzLU",
  "key27": "3iScDgcZQ2x2E6iaCFPtjwT7QU2zmMAGG9Hnr7Dpa18nQYPmSMAhFtubq3BknG98uh5qCRRfp8dqwV9QTPsrJWCE",
  "key28": "49pZToMUaY7L7F8zhYMsSa4GpESWMum4vyvkWmBfxCRmi25zSMM6R2hhA4hPnyMDZu9aBmvL74po1emhVY389tLQ",
  "key29": "3tvCyArRam59LUokDdYPK4W4JToHJB8gH878q9CjAshgBZF2cmwi9iHxS3ZrkfFf3x8FHqtHg7ku4ettJb3gjtQw",
  "key30": "5bP3v22zk9AWyaGaYqGHWnAmES9648SE4RwFiU7yD3c2tnwpyPwcXBkPQizWVbifvQzFtn2ERpv8Wm51x25ptWwS",
  "key31": "JUJemCvxdpcspS1TdYDzKQBcdVCZG7RtynfsG3jtKeXxWk7eBUjny28DQYUThZejRGyhpNwQGfU852qNRntx7UF",
  "key32": "2n94ueuHhmyhpLw1WiJTEf3DG9t3APmzabuf2Ccsxoq4XrthNr4f2XsxSPRPFdFK2Vd6oXY9XQaibjN8wUJedz6K"
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
