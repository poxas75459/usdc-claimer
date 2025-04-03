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
    "5ujonuC53okDvpdBL7LFz7iwP6ZfenPGNbwYHfSizkRkZuiSdPjtf11kJBP3hVMb43Y8j8ryv9neXzucaRrt9suL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AwS4cfXT41vQq94rr9o8Dw8F9B8U4XkVRAe4cveh6rBe3csX5Gwi4EJyM1E1TAcjjQXY5Y5wLLcGJDoatTL3MeD",
  "key1": "5K97BQPdc4bQ6s8j2fCQUsC8szRABGWi3VLEa9uobREujThPenRCJBWYumHgEydKGQKoCUZB2XZnVUAEtH93y2iS",
  "key2": "624jg82GYnCXbpWHGsJLG37iP6nqLGptiPP9Ut5qDsUAmnBR1i649AdBPHoi5wTihqXVcm8sfsed9QDFYg3JdJ8f",
  "key3": "4euSzXXVAW9tCKBfwKBQoHL1wNtpAc86hcLsTCtG2wdRpZtBWz2JzCsaixouD9tYspvMFfKMttY9GZuvYHZrsfLs",
  "key4": "3vpZoMmeQrtLNjiGtDWzUgLJHpC2gRkWyS5RDGFSSpjZAqSkmoWxgJQZMceoeoHF7qMi8644dL5SB2PHheTFJzTK",
  "key5": "62bWrfJh21DbZkHE88sVN7WvPMv9qiWuPErgY56j8REW7k1TsHPyu621Wf4hKwRoganqnyhqRZ7BYaCA2zx1oCvr",
  "key6": "2ZhKmMgpkNZnH1ZknS66X3K7YcvD7f4oUJcEnf9gMfX9qBroQKzn7a6sz7tXjgBpTecCMV7QtVFBTtw53oj9jXJi",
  "key7": "5aqwAczbgrPx4AaSBV9TJrfA8qL8eSvionao3xpBDDALbbVxsiYQiRNQTdARUzR8mCAJHYs31cjTaSGDHBcfPCJ5",
  "key8": "4DdDcKcaxtvV7QNNHxy5LbuJkWMZwrrKHJMjTdyhvwrsXERSjemRBQubsFCi2yCri6gC5MiJpAoge2h5e9RmjVXk",
  "key9": "2YPHnnHBXANq8QKQ6nJBLA2x5uMhtBd1fqGuDZkE3cyGfwoZFpE94wcXdQ1CG9RXUvFocwznRtWYYKYbxkR2oZhC",
  "key10": "3TVdBzuWQ4jms5TBpdDwCdsiaQTrdCtEa8xbySNxEPWtc7uZwHfbv39nnqR6zRgUvK8E3gM8BgE4Sn51hpnxLYAk",
  "key11": "5Pw3pQFG9ocKK7Qyx3famxAfExwBvWumU4ecEKycX5YokXHZvhH51T5dBbBfvmAocUE7k4iJsRuQCRvq64e3yTwR",
  "key12": "4kCPDx37eJQpQvT9jM6N8qXJMpzSSgntu3eAtSq7FPVhNdShsDN5Bsa1FSc9jibZfc8EPGU2ttWx4h2xqqmGnrkZ",
  "key13": "3YhQ48S7C54DQd6RLHycK1V138pQwxSYrXetiUaqHSYdDUGykXGVTddPwa1cRzeYG3oZ3hcCRGBsoJjvat5J1WoS",
  "key14": "pL6NDXC25sDFd9whg7kV5PG3edoo9jxvdNZMQXyVrKrZ3s7KLmzqDrQDbPJmW9eJt992qcXyEe9RDoDS1YLu5xj",
  "key15": "57AheJVek1osuAdMB1CqCGxURFo54Wf2L672t7ZHadsQH3rWw63n1c5NYrkR656tf1nCte1GEGdKKpdDtBa6EYzJ",
  "key16": "5A1oLpxFZxVmALhNv6SD2PZmJ95RVqHx4q4UQYVWHzAV8WjUXBZYEXZ2oSzKq6RbXcUR6FiYa6NybwefbsrRzNv",
  "key17": "4TQMP25dsrTRxPEExJh5fa5F5BdgqLwN1YoBDW1qvBXSBwthzJR99hHtCqUAgwVQsDryqEZkBDdJS1qLvhuHZdj5",
  "key18": "4obLVwi625ygrw3sx8kKrDP96Ht76jFPrENS271pvsegmt8Qu7CX6QYGmH3PGUfmdh2913xZdT3xpH97uSDN3mUH",
  "key19": "5nCYB127G5qei9wGMNQa7RjkZtvAokGHEuMjJxRtVSa8rvzF7UkD1QYPQGhUrZiP5ycUPjdCwirbvR2FSQKEd8jA",
  "key20": "3zbLq8KyrLMR2sGuS9MdyYurTsge67N5M1eA3pnzqxBiaWyoJ7pox5hVCWHFKFBgKFgpxA67kAGwnUf14xSdkkqH",
  "key21": "5FSzdvY3zVrKyAtb2zK5huP4fAPzgj2qzLJQ9z1PzXgehZv462zwzgMwKEJGj3KebNMEtdv5PMjVSNp6KBjY1ZPC",
  "key22": "2X5n4WQo829Votf4e4wjdpkDUWF6v1Syieif3au2ZfBo69gEki26tczHS3hS4kejZuVoPVriu7ARUTN7s7BBZYci",
  "key23": "SSNc1oxKQ7kQkav2KPN7XoctX6NbXzvyGevNGp5WkZyUvk4JRLCnoiRnAThs4ZhBNwoDJJ5k4ivTeiJkCZp1H9f",
  "key24": "2Kw16QV2um3BmkNSQ4mSuK7QKkLJ9ouJMNZadfmTGqNfaW6oD43ThmkziCR88ntx5oca4hj7zF5LqauykqnbW6qi",
  "key25": "2BtrZ3Zoc9uTZJvEtT8D36vzUQvWp1vLDr34dsKpGTWsTMpoK5sVHCzNfADGDSrzi729zp5ZjaSsyqacUx3VqGGE",
  "key26": "3J6QTi928iGvVmRERdZVFgiqEKx1uyjKhuP1NUAeDrvu5YC5bxzC7KL2c53UW1YWTTSfTUFF4HSH1qhXqr7nPJEe",
  "key27": "YXHRPWuvLXxeCBc5yEErd7uz7ohgdsToaZbkgPdsUL4qxftmJjNyqRrCa8wH8sWWoLDYHLTEwutcqyTvnToYCj6",
  "key28": "3T28JXXFFYDzEKXS82oUsHDSJ71aXc7qCs1kWuNUxcPp2eHtYjAdwCT3avV9J5mc2YzS1ZYovkz1KxmkymRhqKiy",
  "key29": "3dVxEdTEqH1yN1WR1sFfni3bjAV5tQXzz94ZYSGGrxEoQvVGvyiSkB5pzdTr8zhLcvRMpnnjo2Jz6PpbHsCRSJ1y",
  "key30": "TsNjaJfTyc3ZU9xC619HhazQvZm7Ndn42uV1Y5jSQ3MTtMg4hikvMzSEbGwSu4Ez25spMoXB6hYWbMox6caHmJj"
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
