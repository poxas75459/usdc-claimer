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
    "eyp8isdpxuK5BPAaRRXAk9PApmEZ9mX3h7KZPzxbAqYKNrTHtRtnA4oUyUv7BhnbWHhfGgtEdYEZzwWsyrmZfwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FzVkZpN2KmnS9P6bTPYWVqpkrG5uGruY4bJBNyenZSKSWjnmqwnsay4kndKkJjQADWs6Z39Rk5s2xnXLS862H4u",
  "key1": "3fEFVfFTB2GYrpGBfpeonZK5eVvM1zwqGAzXtMibVhLUDXmmhTsgiW9qt46m7kdMv1S1gHir3Hu2sWmQBMsBnwiN",
  "key2": "3GjqobMpDykjhjVLGhoH38ksB1HpiSadkz7QCTxF7ks382wi5ut2PiX29hoioXFmYciga2tKqoZDvN6yPcBrCanx",
  "key3": "MhRYFA2A1fgLZxdjdx7sB8iw5wV818FQ8W7B5xfrd48hzEvjogeRJEYQ9M7FXEEKWWChmxeK6NqThhZNT8LdbVG",
  "key4": "5P8HFHhWfU9HXtXYGJ9hPPDEunbfCjRLZsvj6x4ctqaish7wZ3vkx6ZCmgw8CGhVvesp127xZ2T5wybbEvf47YzM",
  "key5": "5tKzQU5LnERfVHdXkvkUYiQtRjmNyMppShGnYrka3RmjcjTNj2ZtgmRnwHjqe5GWFkmVY6Q7M3szVkdB6ZGRdNEi",
  "key6": "2crcVYKHzooxygg7nTy8ZncUYdqrsV8WqrbeqQXuyZwKWuPgWqsJYRXbnYpLfdT29CyVWh1smcza9EcapcpacFCe",
  "key7": "3k791vMRKMJsLZGBugPTG2rxC6QkMRpSK3ixuo3bQ7t89R5QERMNGM7d8tCas8nWYBc1yHi3DK944ch7QdYfArjU",
  "key8": "51xMvkSuLpTSSm8Cwf7AcWcU8s3zrW84SepZzcp9GiXp3jr6n8Dx4zwDqcUuTzsAnKdRL8RkERf8X6FtqU1yyXCJ",
  "key9": "5NCRSsYzcHLRobF68AADggGuBkB3JEiHQMpFPt4um2EartG6V2PTp8C9Nf9gke8gdNvR4nH5iiYd2VADg6JuKAWh",
  "key10": "4pGgtm9qmBT1GL6FRZ9WRxdShn9xNeewS1kQHHf6X5FK3waZvUjGB6YGYZCF5YqFaXp2pfzLb7PH3yBLhyRw63LS",
  "key11": "3MEsDD21h4FmnKZfZJTuBqJoGyKDdrzGkifLY2vKGMmMfNB2qVrpK1ETLZyAL3f2EXEBQqiKEQ5399CXkxvhWT9i",
  "key12": "4KxVuyCN8htFDXGJEBz8Cvf5aVWe6phgRBnEgUJZfV51wQQaqUF1c6LtD8D8ktKEkvxAAVXYGmgByo2QX1RUgTun",
  "key13": "59DYS3kR92rTYsmUSo4oNAG2LqqKqgDeNuH4jhmqRb1u5tvpCMbnnBSgCingBrvjKyTZaF9p8otKDdxQirNZw1ti",
  "key14": "62bkWXytSjpFZzSCBDs525MJb1jyz8B3oNAhRViCoXV4xbR3tWW1bWrK1KiAuhc8UVRcPTpbtiqwu1heZ47m9Voj",
  "key15": "32du4aR8ggAhjuaeLZBcUYLLuMFYJ7L2W3Cfi7v1oCEGVLerXuSNPKUX3tbe6JdJc1dLnKbSHTuZ4FAkYeFiWvsJ",
  "key16": "3gpMdPQbZSRNrpdAsWnjjVXKZWySWjKGASxCuQ79bDJsEwbub34VWfKkxHfiG3D7bQSJKuRLUXz2PECpY7mLo2RT",
  "key17": "5EU1QBmZ4KRHcWe3q1FswEUqhYBJ9vHWiTruCBz9woMgZav4smmAYByZwjZ96AWxT477ZfqG4v3KesB6LbQcmZrY",
  "key18": "311TxuqQSguTRb8UbaCeEVivsVJckP7Bd1mmWh3sJvjZc1q4uEkbSTaJWjbot3BQ4BMWhQEwovsdYmf2oMFj4pd9",
  "key19": "3dxdm128m7G5Dywgz1v8r8FUBZBqCM4zBE8hLfqrnmmrbPpy9e4s4Vs1XRJ69g2Ct2GC89i6nGWo3Au8jgMtBjHG",
  "key20": "ddBZC4qySVB7QKRyo2hosqtoUt7uoujJ3sKGaUSWXQigTaSX27UV16z2XSN5QJnH7xBTu5Wy3N49Qs8PtvBCpRo",
  "key21": "4cF4fL3a1rhj6HKwbRDTZ1uSecMP5HWCE785bWydMDsnLKrhzKbiZfRxvZSfu96o31HZN8vA4xCdBthqgvkfL6Hp",
  "key22": "5rBH9cW9RgsN711Fiu1yc4ysCRRDRuXk6SMRzcuQmtPvjYD4f1uyTh5xBhQDgEKDeqHbcv2QL7Hs9qxXSNemY7MN",
  "key23": "5U5pAE9eVToRCVKGNpaotSznLsZQwgVw1mdEMbSQuLwFrGBkAzR5b8ouYUC9HjMc4uPg37eiteNv1ovTetN4qQrm",
  "key24": "3LfStF4cdZMhcqMx97s8tmQwqDqH28wGMDhFd2y7mJ8AXiSGDXS4t2N556uRQfJDWMnQYYmzz8DnBX2pq1qzPRAh",
  "key25": "aPr4tbZrKarWRXxYt9ncEB1DPN1gH5ep7LeaKAxqbRW3QrMdT2XDxbzLyAHbchKBVHHKRtQDqhabAYAWLLr5a4w",
  "key26": "52qdDmoR6tJPnApKnc5NwKJntiNK4URJHJ4UXCK4dkot3yiHfbb64cZ27Co1iFjQAheCiFAX2XjKd6WdTZE8EqaA",
  "key27": "5KKWFVZrkM8R3XoBQqQe1z3SYDtiB8GWPLxqwo4sJEoqKhrvFW6kGsVzibt1mdVD2VAmuzKo51AzGzNstJREYGPw",
  "key28": "3PFwDwELFcZRa5HeW92CFSCsZbqKu5fg25JuB91faBNAANkfh3cXVgr1FnCmwjePcz9qkNYHjd6cCyu5jkRE6uzn",
  "key29": "3xnYY37VN2uBsB7bZoEqQ4cnhNbmoYceevdqdCUweFc9FawSwNoQETgJUgbk326Y3QHaaCthrNV9NJ5ywMyBLaHb",
  "key30": "2cYDHNwjDxYUQ11XiohaJvgAX4JaHLwLJUPkfWEkCHoSRKCFcD9XE5hkgvcvFUH3tuxwpsD7h7ReucAJoq5FeVuA",
  "key31": "ZXkUMD89kts7rtjMqCkwXzMqGa8UQMX1bGiLwPQKRvwpaZLPHuJtTrmTBMrxCeiSipM7FSnMnqYGsVsbbMubTq7",
  "key32": "9SJFZXFxjswLGofjxxHjVQ9DX5UNXRAzW8CiwceyjBokJQqWYfsEPykpWpJnGQDM3zZfjLGbABFMr8e2bnAaymr"
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
