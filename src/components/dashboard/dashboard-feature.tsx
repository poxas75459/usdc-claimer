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
    "3MHJzQ2YDoF1v2Q8ou8YVLvdKZqmYjWs8Rnpu5Nwkux2A98CPkjyuu83SUbHyU9V1hJHRoDsphKpdAT34e9ZdHRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25zKcteXjWjN9cabhAQZPpKLnvL4fvasUrCM73xm1G29CXWZeGgok9dd4pmQnJhD1sA68uU9UYEQjVFQGUQL6vFo",
  "key1": "zEAM42teNRXDMTtas3LKpz3vwSBKCQhjCeMVFDHyq9CqZbu1dH2Dr4Coawz2mpqm8tR7pWwL2DyQiWs5tHhqUqZ",
  "key2": "25pVcHCufEjGR1np6jmFkRWUqT9LSXov5iLm1QXJ164LgP1WeZfNEGJXKxwhEiAsTFFpBzF1GWehtkhuN9qV2ucx",
  "key3": "3LDceaU4JuQXJ5dBA749qFWPaUmeAni5wxQuULDcERD9NWeJaGFcc6QWpqTC8EjDG1DQoKuYHaBMQ7n4D1nw2Do7",
  "key4": "4vgDHeLPD2pt9HoHtdaF1VsHh77wh47mcdGihCju2ssJkjV49G95uAPVzS2KJRRtAvVcX3ZC9kRmv2UWdNNNT2YL",
  "key5": "581x5sT7Nk888iAJ8KExRyWiJuRznjob4rySy47tdjsoid9vokVHvjfX3PXzGAggDSLBBo9gr5bxkVLoA16RhPLM",
  "key6": "5naerZpUKEAj3pDGfNkLYzdoSdEdwRDEnM8HrzeQdMeYXvYPa1SdvdKYSZMHpa5oFCCTjv4cYaWnhwYDB8CQZjan",
  "key7": "4jZNUWTghWPqSGXdbQux2kyjHqQH3UARFHTVDzp4zxMeW2LVHUjLCHa4fsGsPMxSuesTWTP8b37VnbCCvLdrmUJV",
  "key8": "41qebRKKP5ZscV7PYEihDKmGXvXnT1m5xzg86uE6F1pcbenxnAHAusr2huKH9TLs8BA6Crn9GieLkWWX8xdE1Rxo",
  "key9": "5WsKAmXbMCtRsrDUUxmgSYBiZz5uE1jxJczTYL4i5HWpxu9Rdsc1cKRWvZYrqsNhpiksRUq6Yq4FYPxCzsqcMnHV",
  "key10": "2Sn9Uxd8kMqXmsbAJ53ZdmmwYTNgZNgJQwn4Rtx8KWyzapvYLDjqci6tSQnjWWhjLKpnyqawVj4pUR3P5sCneYwZ",
  "key11": "3AirWknirQL12EPi75HWS9qut1cL8xp56WbYJKE1rELDPQLiZFuYkwYUD5VQeN36r1eYyyEkdaZbX5KWCR9KfPgY",
  "key12": "5XoooSRn6cRdyWpoZXZcC6McAQc7xA9EigAyohuFD6oGk1yvAC4fmpwiayqi2xqjyqLogRzK3KM5XWbYevGTQ5be",
  "key13": "4yjG4dWGTAQaFBkosmmjKUyVmrRZjDiSqfLbKGyfZV7CHTzzngzagqNdk6FcWgB6zKWUFszu3giTkymejJvNMNCy",
  "key14": "32zoS1sJvSKhcKiXy2kkkMtwCSXoK74qb8FULArnMzRRmJunjB7Tw4yqCfckvUtFEADdfr6vJbyWo2SjTDmQfqAh",
  "key15": "22JzaP4vYTHZfXDfowugXauVggJTmUeUQ5ZZHgLSfpMv6JwMgdULnyv8E53mTrGWBzdFrRZ3T2CytVisTSxW8kw2",
  "key16": "4vFUpYhXAkVXYM3K7VbimwGv3qfRSyTuy432G1Uyf5pmt7S964L18J5NK4ENrUPX47cvsDLEKcjNUBGDmACcjvXt",
  "key17": "4HRXqk7ewGZp6ruT7ppeRsm8X41pHJZEZ5ZkxJwyUF7AvnAKa7nQsTX3S9FbFoVeXEcmJwDh3ALLasnuUhX9KsZB",
  "key18": "4em2J6B1YPqr8sP89gh4px65543Ns5eya3dytGjqNz3Jc4Cw4cdyxhHczpxaHqdvrta3L9VZWvWFPVCMVyqMkyz9",
  "key19": "pBB8qaYCc5mSPUxzREyi8w7A7Ts6x2qaqbfWwZrYfXJnynAVRHvZzwKxMNinEon6A2MoKDdikyAMWz4hjiPhQU5",
  "key20": "287HFKF5nzPegdsi3ZpXn3wkphc3Ta22oC2Hm1Pc5x2nxPUmh8cvHrQJAZyY48xu3JHpNjXWd3awUgFVbUJGoqAr",
  "key21": "2c52uECXvcQ2kLbS9GtzZSQp7yDni17NbAHfPJhknjziSkchwBJSTnY4nXnJzmYMybT9DV7uUiabCmqQK9Aw7c3c",
  "key22": "28VPZnjjExonG2MZYWS7P9gZjYvhRXCcFse8b7Mjumc22XqEq8jRVtVY1eLx4uSqehL9RYKx48ZwcJFAYyYJvr2c",
  "key23": "nWMj1CX7WciSJFAQBrQy2rXcEt2Cdio6HvZ8ZMm8GEJRF55JDpyMf8gyYfN2b5rzZVEHyBGbDuiLzkxmuuPRsew",
  "key24": "55tuvkerrAfNQENKLPsykZ5YNdPQXCtEt3AVQF2Doq6eapBeoW7qKQxURBNLfafms5P7hojmipfHoksKKZ2kiqLW"
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
