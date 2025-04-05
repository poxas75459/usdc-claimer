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
    "2XDtT5NcYrJPkFVdKbHb2BcMP4JfMQC1VeEPC2YCPEXrp79tRd4pbfhvkrqnf5MXTkmHnvPawyt7xHnoXpDnT4w9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMNxXcjbq5VBw9bYmfh928uXNmXtdFBWaWnM8WdxDxVUxJgsFVytWdyR45TKr7D3dZ9w4QLNMawFEf8QfNLusw5",
  "key1": "5FhYw8cwokn47UUrLJ3RB41j9TcY6BBvr9bbjEjBhTadJBvHaSkDGPgjduoLdy6Cpvv2vsyT8BESxGSKAbUab86p",
  "key2": "4JxYxHTmuhRdjDEnx36Jp4XRErMu33yFt4TBnyNBLx9rAZYTZomwjzGc6KctACZpZKQqaoCaw8AMRANBYkyBE8vn",
  "key3": "5zxsQa44cpheHsEMWayKmX3dsA3ENUYM8UuzZ9ZJdVLvBBeUmNVtHreYb2N7RpAvegGD4WbnvLLYT4H3RbEZu3Fa",
  "key4": "5fG8urebRL8yBrD3BgxXNcrkcfUmknA2SeTQbYTeeaphN1q55NhwDRsazYDzvTm6kRJbp65Vym5xf7EUY4WRUiE",
  "key5": "5Q7cQK1kcAzXoMBZ6AY3myuvFceCEaVZzvhWyXGrGbRmju1Zw1nmcjusfjSBMiiDUphoCG8JQ1niQ593bSYh6u2E",
  "key6": "35znJ9dJcHjzpFioV3qXsoxjYKbLSVFTyNyfdancXYZtNcNnnnxpNS6zQhndXt9fLdCLBKnvNUCaudSVaKeQ9cVK",
  "key7": "3TLhz32VVqh821yeDTPKuzQGk7aPMPPNfgH4pyGDRYUcjqX8ifFCcra8vdRvCu1SCMRxtk5yPgascuNYu9jBkSTY",
  "key8": "GLUqy1N4bswjEvRBjZMEKwt4sDrn8wFemNmPxMfgqUJ31awa7iTjM32buVPH1hEKdDWRdkLybd7P7Q1YVp4ggJW",
  "key9": "5QDhmZQZVNLK9gFtqy4u4yiDYPDQLLND9BW2JEpoS1BJpB8jjt4gvQWZD1FVGTHoH4X86Aq9TsTowGYxzqpkq8uj",
  "key10": "2sfPsydMZ2WfJvmBcLmXkzrmP89XSa48aQyLkjR5z5dJqfCyzmwM1UK61WpkP5Q9ZQ2pQfBCjWBNxexepa9UjKuX",
  "key11": "a1KQEYDbH31TwtwXDjD7d42ezCpaZhQLwr8HYtWonjrmK4LBnayEz5w4ifM8Q4g84myG6qwqEjNbS83dt56asGK",
  "key12": "4gEnyxASkf8345iK5uWaAKeJfCH3wRh7iR76ZPZQvhjdyGBqTcuoXBgSkiQrEEjggTSBC4WAAfqr4HpYh3oZBpTB",
  "key13": "3QpAbVRQp5Sd1ZXHmBdPSZCPAJ9Soh8WgP7RfUYcwM75yXvxVkRdeuQakHAd5vev8r8ojLAqGUkssFyVM4Vx7oTr",
  "key14": "62Pjoh4oD4d5yrLzk7kRJqGte9S3GpWNHUKVH2PPsBztCy7pQMoXBi82Enaja63HJvu1AHiJu7jMwyMcUeGcxEzV",
  "key15": "Vwv4sYoTLM6sYcNsnKWwdtDNeLcsQTNV1GJe87fDJTmm5MzBa6hXcvZ37pjY7M8T3tb3DA67PiSnJYRdFCBo2Uw",
  "key16": "4PQTnR99f2mWsDKinNKYbxVk5TNmdEqrMTf9pcQzC64ZGuJvj7bVsE1PYoNZ7uLmXkXZ3pGvM19PuSxuiJCeayEg",
  "key17": "urtsSCtYVWPBzWrNKopCpcyFuknEUs2ebUaM2MyPbLGYzw2krJbyRizyiSBCK5knWD4RJzwKcHHAhEfuaqyTHgM",
  "key18": "4H33SPnM8GmJWQU3o2QcTDH8Np3FzZhnrsHV9JumeoVk6LprdfJ3ty4UT3vaxwNnSuumM8kT9wZjtGUj6D6ttnzf",
  "key19": "3Dzvctnx4Ko7zTzujoSoBg7BUhpSzcTYgaBAkyH7m3gDgKUxUAGTsMVF66JpdXccLhhcyEy9YgUc1ggwKbarFARo",
  "key20": "4qGAe6dY3LYrAXjXcX81388JD1PRfxqE3e2oQM4RHqFT3eZhmZ4ExahJF591kuAjcJVHhv2Gfq572133Fn2me87y",
  "key21": "2Mu6aBgqUUtVM1cw8F8gULyAZ7qpHQwC6tBJnzePuT8RYAa9pUPzHM9iQy9Ypp85MrsMQo7cGdGAYZhjwGu29JEP",
  "key22": "vqNbzm37rF1QrpaxNcb2vTKDLvYfeJKvnu3YtJiKi6y8gbxCCxX35bTBQCSCRCNsFM3YCQTFE3Ee8cTnAxJ6NYN",
  "key23": "GhLSjWhV1aZLQLMexH4QkaEMSUjjEnGgrpGCzTb69zJPFpATbz2q7NGnQuN5e6GaWHgNSzsb23yQioHM37s41cm",
  "key24": "3pfeayp6ZG13YhnJ3RimQ3rihAbKzegjx7jTH7o1NvLhQvFiLfsZRQS9rPPBqDVeRRreEWW9GiaEE1CwNqsevj1E",
  "key25": "3C4Efvz5h6TuXzst8FFeCtTJTq29Fj4o5MfhSFvmqKSEYT4NaLDbNhManCxxmVFG4cEh1RYoFL7A8KYdjLAfJbnK",
  "key26": "55U9U31mVo23R8H4MxcXq721MN2kUCp4zw4myS2xpf1vUxTnEW9pZUeP93DBDsdAWfLQ9H8NK9dFzswpSW5o6bFi",
  "key27": "2pKaiq4f4c1AaoHpRAUdV3h2qySYyGZPXZSr53VRqSUwnsPCnu5SkZEmnpcLfqS2afkeD1mh6NCCotPYNwAuaHAr",
  "key28": "4V9wmEmR3qtgSwxN4edgLaqquGyVaFDmoNZQnqA56pZ4vVeC89Bq67zh82BekUwQwKwonFJgUKqbSgLAdvCPrjYM",
  "key29": "394R9fLTCU5CZgcCLDcLh4yrPn1STfPWCzYbhUn6xCcSmGNuYGoLsX6FAirEog513q65cMTZmrX638bTqBn7hRAn"
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
