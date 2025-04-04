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
    "33xGv9VcypQhBhA1KZTnww9PEokzMm2hXAHkPyP6sHnt374naiaJi3c8PWetqy1cPbUS729vFcbDBfLPhezvp6p7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTRyS8rNcy9UgXjiN2GGEcgP3ZVf6CvD1AxM23ujaZL66RFHVzhBRSga88Kz4un2TaWT3fJNcQVxpEhBkZc76HY",
  "key1": "67KWC82Zqcw11RKze6Tixm6zoCaGbRhtSzSndSVps3T9Scnms9KQa3CvPC3VrmUEgC8dHJNMmuB59icAVjtHH3Kr",
  "key2": "3KQWx15cQ9ncAgPg3VXLcUoZDq5RzkPgd3v3VjTHsSp3ZvKeHcaLbAfvkeR2JEsLnS9TiwUyHMRhCsdfht4txyf3",
  "key3": "283wkLxYX4nYsSwNwLCc3CFkTTVNZVrS6QxPrjMtSYbhTBdteyrJAWYxfSirRihY15F8BenNDE5UL1qDHVhNMKM7",
  "key4": "3PszRrJTvXgzqPT15vmE74a2KQXVwapAKgdMcBHArMXuYng54cXSxpHHyV3kdb4yzZEfXTHfn34vFj3h4eg5SHSF",
  "key5": "3zWTogfzShhi7eRDF3HQVHmj15UA6j39bJgqd7fN5jSgLyqhFighhqN78EqKCRRNaH4j8ZK6H5gqBr1fQJqnKDZC",
  "key6": "4ifd9m24noMMFc52kMk5GgWoqo5hzbK77YHFbDSsEyhju992X62PWSTfpBxeqGhYen8vTbEriHMxnx7zywSKnBxq",
  "key7": "5HtBfxFPpReQjnwmaThcKnzCoie8koajujge1GwyutHLex5q6Jm3geYKLwp5iWAYEsyAPGqMQ6XnCxkbktuin31F",
  "key8": "5qxMckZbVfb3MfnM3c45SAf6sgih8CkgKgJ7y68d8Nzdm5JQretJMk2SDUFe1D8eQHbs7i9s4jnBnTHekQHTZgbg",
  "key9": "UrkoedQP1dXiBYDrSWWZo1JwZfR4z8nbfevKTHdkH4rRE9rykZN8tmfBm4hbVBruD5qULb8RGcBxWVGvNTUDzX6",
  "key10": "No1DyR6b29aZTbtodGRbqsv2Prm1rvt5dNZDKNTGwHQMR2DCc8gKm8rzMrLEBiNuWD34BrsN6mx5TN6t1B4szh9",
  "key11": "58NVuAz5FTjUD3x6qLa91xpcHXBFhfirDB1b9M4f8MMMBw1KT2QEi11TX2Xw3XzxeiSoJzapTmitso4a3drJSKDe",
  "key12": "5Nc6Ny3DV11XbTWbeXCY99QH1Tvnp13KsVcsonea5yJVAR1QgxzfkhYoeTbh5wegRAq2BhQiBejZ4wrpxNTXSuBg",
  "key13": "5YXGfAcWF6ieW5mws6mfLNnsDotCaM7TiSEXLaBt9U51MhwTAbgRRU7WCvdPZJcevhJjyTJgpd53hFSmnwquwDBt",
  "key14": "4t5jnjb6qtNjRe4ZJS71pUsQwDhXoMQjoNFzvTg9UUrgdKgQFzSH9zmKXgat55ZE69Bx9YfwHFep9qyq8M3uaQbJ",
  "key15": "CqpuNWv5Tpfa8JhRcWB54pgLyfbcDrTg3fFYYdwXbFLq6xwB1JbG1FC31ZebHRrUGMKjRCqwp9oznXwF5EFAuum",
  "key16": "3cN5xTMpBKTF7rdAXYrYbmvBCVv7q739rbUpcY9fyVSecRfni1NVsE2twjRCYsTE6A3Zbsi9xinhoAzDXrg7NY2n",
  "key17": "33SxKJqSmTYuVP4gCRtLFu1h43FZq5pJjStXTWNG5whAnXTomjXYoBU3dkYetsh3vPDchbqMqpGG6CWvj6rperJq",
  "key18": "4TGSRU9L75cetbcaR8fHpvC1QeibfGS9F64F49PTpffYvB4s61iehswQWPQuZtsMM5oDFZosGELd97FDzwtuHDtm",
  "key19": "3EkNLg6eJU3EWQeU8dzWjdwwLNANXRRYMA3DMhbypc2cYcQzxPpdhjpqtkmUakDEufiNjhBUx9KqGssPsJREvWoB",
  "key20": "4sdir2CZXR1K99pQ8zoG9CYwbfYiiC8Xiuq9Q32mpSVfzPtyFdTvTVw9riqTMxzRuYmbeGqy2rVjRj7gxBXJyocg",
  "key21": "3QjoW1RasWhoK65GMmLVMnS8ztoHXND49LVMi75L7w4LVuydHUqbv22V3boCZg9omndA85M41xdxeK4hGQXaC1AS",
  "key22": "N5qqUPW4Xn5hYxAL5LnjKij65snez2HDG32xTs1mt4q9U7k9KCfeN7WG9cutBNUpgAc2NV3miJbZGspPAC9LFV4",
  "key23": "24iNKGNdgyFZ7iPAd2T2TVgxhDAaWCXQLgAEAZPzgnskCVVwkHX3stdYVi39NiNXssLYC4PEUmZRpbsyrFRGKGL6",
  "key24": "4pM7dqyF9ywVTHNcJxoLa5hiPGUuhtzHceLude7GwiPufqU5py1PSYoE76TSD7JzM82J15UhmHmUDS4MomDD7ujo",
  "key25": "PptZP1qL1usZhD8BYbzhyp772P38SaDT33RvBnhbXkA1n7VuPfcEz7PmX4EBVhn8a1Z9EXktVfN7QjJGonTJ4pz",
  "key26": "3khuHUBGXuXiEsxFxv8SuoHGYc6iovtopkTNKpsTA5GgvWFxRkXsmGqvYaffUgrTokFrEsApQL45Y5SGsk7faub"
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
