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
    "3VD3i1HRFtAnc1TxXmZWrHPPF14hVmFUA9z9tqmBK6iA2LTKBvgDMAGRRw5K7YWfMdkJmsCP62SJDB4MXNrXq52F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g1gM2wxPCWUXweS5cm52Ar3DqMgdujZeqLu5ZsDHW4xV1dXzvFkBviFRonxvNGdCvKJy7RQ4As2fL8meCE1EpC9",
  "key1": "8ycCdrAPbqh9eJfbi4upHNM6edhisHwGqw2EWE6YE6vx63ibQeNvoHPjhuYMAUM6K4b85RDFifjUX3RsSRoyDAZ",
  "key2": "5G9ASVVEsBHnk2NnNJ7yWrCBsrvpPruEbRugRGgSXtNdBpEcXLBSKEbBvpF5WjwXzcwnjxPCjrWUDd6w73d2GpZk",
  "key3": "5DqqYLqpoBkNPXVud9jMzjReZwPoXWNk5Tz6q7bg9RRtJLtGBHwDLMGnsiQoY2h2LiAFPupFDwVi3fegCLrvpKnn",
  "key4": "3mew1UmSWdRqEJuL84HL9u38AZD34pehobNDk5D4JVsdRGAFfWRJd45Zxq29KcYDg7S7i7RLjeV8VGV8dREp4pMu",
  "key5": "8Pyn2kf9bMBM8mQqgUsbRhTNmcAoFUSM9Cf4W7bzAr4fP5LGxrGuAhpZNjD5Wpnr9ujdjLbXWSZpWb5bCVZsGXb",
  "key6": "3NJyMvtP2JgtF3p9LAwonPw7f3QYL5qVmjkvEf9WbyiMPfnRkhF2eFnkFPveSDFCWd6S6WcxGeoJrvd4vfc7zciH",
  "key7": "4y453BTvLLZHaswVddMKEVQpsPRpPuH5wUrh9bUfry9TGM848iBKzRMptGQMTG2RAgdueeML78bST2fgQdbBSQKn",
  "key8": "2tBAKooSWSF4yAGmYquZNBAKTHq61k1M9z2DKB2Lsy8D5jiTkuWbcMqr8WPjXSRunUeZhYcVR9crRkGkr1KJAJYW",
  "key9": "2YJEBQWRMv9rAVZEXbsUeDdvR7hLPcdC8rRCzwSUMT5tn6mki8g2tXxqAhmgytboRYRcvz88nSXFsYmLaaXGSeFf",
  "key10": "crr1x23odX4kc5RBkAc4F1AUFCVHiP2wUXS8oPGpSuYYvgDZ8ymCkkq8mgDavr2tCFLsGCZ4ZX7w6jqsr8TNE2m",
  "key11": "4xzUQYefVDy4vRiQtm5kaPEznaH3qQVbw5DhJSMYsU2xBkLZ66yczCzDhbDv8M4gSsS7zoRtjaWu6in8JyNoBj9s",
  "key12": "4wqMAsdrXHKxo9XMQgBA9AW8aWw66aBe1VXfp14prKZabupqH3ovC1Bhwm7hdEeLeukLy9XEWfWqCGGauHSHY7CU",
  "key13": "3mPm4sPn6Xhm9VYPEwdJWvvq5dzu1sovXDY6cGKWufr1ej5LpQDxthyDWj3bdqqXkQT5e27b2rKTJgrM95HAaqZ2",
  "key14": "4wAu8eLwRAsx3iqwvyYWFWvspmk7s9yJg9qhg2PSYA9SnRnx4MNCGAwSqZYitKEyW2NmMPMUPqZMqETQcJ8bLLAm",
  "key15": "66fmJypHsZRi9WGhj6doGdz4bJ5arB8QzpyGhF8qePs4ek7ur4DRdgjjsexhoPKxrNKABURzFFmFqN9cWTbLXXTA",
  "key16": "C538gu64BcKKgsduTHiPscnqcWSiPyoX5attBN3VmEYySHa7pd682ct7CZELwKLch5KF2SDWuGUaor3Bb2qHX1n",
  "key17": "2JWfpRaEsbmtfaXxjV5v67Uo5sYFMQa2hMy79hnK4Y1mtvgqZT3gfNzvG9CKMS16QZk2pux3SZypLVEiSKGh3Su5",
  "key18": "iifxnnoFBD5bCbTQ55PA2La3GTMJpNGLtAyC7HF4zWngCxB54pbH7AGiF2hcV1r6ebKN1nSHcwGZzr2vthq8KuU",
  "key19": "4Yvaix9WYD19ZcqLGChN9y3efJo6ArFKTrVaCVoax8wBSEVqXgb5MQH82VToPnkLhhfepjkjCVYhGdGSDiZLRk57",
  "key20": "Rbacb3gCgXTnqHeSSZVYb3yq3FbE4t9jhGCkiV8bDkYKGDBeRx395kppxN74vpbSDwTbfJPqiQpdj6DW5z7Jgjq",
  "key21": "3QP7pBhhUMK2huFZi7F9g4CmsvKydmG6D5ABvcqFqyqGMn8RgFpqUWHibziLNkZSxJ8kpsHvrdPED4wAH8kxc4Ni",
  "key22": "2hYxGpD6EuZFmbVqo2yt5397ENq6RxMRv9MAdXMoRfhejdFw9jctgVit4jmbpfX84GYXd4xpeNE5WqPxHPnvMLLC",
  "key23": "429RVCou6wKRUAwUdxUeMNkpxvuUjTTbtS6Bwnzs799fRbe9dU1UNBomo2TJXUGXt6ojYZefFefeqxwXy6KxRgGY",
  "key24": "GDJyBHcAo1oQwdXt6wrLdZGyJqB6dzz2FrrjCXThqh3XxZGQV2mDbdzufAswXVtQGVQgxk1VVduKjuSHNBjD7wA",
  "key25": "4GQw9qBKyVUudUwPG8yG8oGEffwFea4C32B7YEVUFgsvUgGGvEL6XiUaBhqRfLqyzi6U7a7j7RjnhQGfes12NXZn",
  "key26": "5b6D8xkKqfB4gQZy7A1fjbTx3GZwuxukb9t3eN9bjboBcg7WayZGM55nkmNfBnyRhqN83d4cQo2RLscZT48Ts58e",
  "key27": "3XkUoEn8qKAPv1SrAHoSTLgwANGpuU4ADkKKnL7y9WWnj6iDjVRWiNr9E9Gue1fP6JJ3Rtw3RDxWW49QuPUWNXrp",
  "key28": "49hLoUov2g2CkoxjgvbqxxfwJR6Nft1McG25WypXpEf9BPH8cHUVUK8rAaCzoeSrtRkJsfZZQfsSMH9AJ97V6kMf",
  "key29": "SX1mjSP9PeAWFY7CiMA2yUvZyQNbjM32v2uMJVBrhXRDu52VQ4VQ86EPGkmqbFzc5my7Z1NUr4DsQpfEvJssCQA",
  "key30": "fTvXhgMRwf5wGG6PXZeSGffuu26WQfXG7CrauHzRo9o3j6SVH1feLUJ2J9zghDTDVNcgcPSeX4PfeJ9dAEs1UpA",
  "key31": "bCJgAXo97jMzbpRbjvh8NoBiLQh3UbR9iMdugAa3FDzAnR5XDxt5iTns2oXMM5nXsH26wpudigz28DpzXpREz4G",
  "key32": "3sMKkR33otLe9owDGDmudr7PPufSepeGCmT2C3Wydi22P92ruafV57cNpUczqjBKKeT2CKrCa9i6w7kPupbkqqV6"
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
