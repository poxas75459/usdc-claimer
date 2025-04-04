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
    "4cFLcu8JNFFZyngMVHniZ4nJUX7rzdQxvcnF8svmcDcg1PDhWsji4PDLEE6keKBtUpY4wzHmWgVDKEWfy1tNJ2ZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33hGQiCA6uXuGv9LHCHAvuVBzRYMHJPwVaPSg1uUfJYmusZkyvaHNHZc3YpZvJ3J5aYbQG58KdgfF27DK9jQyDRX",
  "key1": "46vvJG4dykht788HhoarwqZt7XRJ8oTM5v8uhA3UAyJzNxE3xLXWWPCTgS96Fqc1M35NjZPpEzftMkgyVFCxfRNT",
  "key2": "4PS5NDx4ufCFTaJu18qgUnbgit6hcZCUFAb5T718QceKcJLKEHB8AoVLhftgir21Va5KDUTCqAUPs4nVHPceUwpq",
  "key3": "4NhbAW6tQQzobfAD3WNDsuGbN2N8if7qK5sQ6obR3HPDQ22PqvCu1estzLxAh9sa4X1hVjCLg9rzDgdKL5Zd22h3",
  "key4": "2sQ5QMr21WCrLddG4xbg2ceRsK9qJTixu5vB4jC5A7gb13BJpXn2nPgqDsfWf5z4tL41KX4vSZCzxAWGHQSw2BiR",
  "key5": "496hVNU29VTuZ3WnHhThhUQbpjhymwFeFotDGmzJhJShd6QJZUKwXCdBDPK5jpfUg3ayrT2QUxJH1Zkh2yHzfJKu",
  "key6": "4TSRs1BWtUT6P948DVaZtr5PuhutgwNENsKzdqcQmd4ATGwaSDWMDibPacMLM8GRRUniYcB7mZHrcmNaFWj6r5Yt",
  "key7": "4KgET4LRW7g87HvvXTLNeMXeEB11pMhzNjRJVXThdiHQgXgfE3ghevfWVtEYVcCaE8LcdHofHXMVJzVwwJxFAdGn",
  "key8": "3FXxrkqwUrdJEGqbb4gKcKFny5zW8WKxVQ9H5u2No1JB1P2wrDjK842egcE5RgEvn2B4dLndG93vYgv18pz9wwfp",
  "key9": "xRVGfuJH8eyJVm2iCwXhu41VJw3dWaA7QvuAgoh1Bf4a2WdkZLmGtUv9Bex22tyrJo4YoAZ9wkAprruTZw4e8ri",
  "key10": "c2jg4fqinXhjqCEttBFSKNBPBvvvkVoJbz2hnY3PAMoqyzSYXANu144idfmBtLyMpwvoD2sNt27yTizSy7XvsPQ",
  "key11": "4wo2sc4pVwECoDpAAqcxS4zjZU8NdZyLA5HipBefo4kc6FUA9V6i4MHyMQF98AThTsSNKboRM5L6QcKTTDdT4u3C",
  "key12": "2p4EDyeRN1K2jWTxGLSdWzGQ2BvvX5HtmJ1AqrQCiodaQ5inJB2VqY9Enk1ruiLaK7FtykieJmzDJZfLy6jU2pE8",
  "key13": "5iTXvg9r59P7pTvEumW8VDnB6EmmX1LSZ1Aon29Ku26ezNqYZkMtnFquvFMtuHDUPEkeRVQvcvpP3izmyj899XE",
  "key14": "3WmhgXHeCfD7pZ3c2XDjb55g6tipMsGuW95ENhGTvVK668os6HFKyPuy2YvmPwt1RpjEFNa9VKDbofQyDo4RPDn3",
  "key15": "2EYsNj8RJNDk4CbrXBFdbtgqWn7p2oEYmTKdvR5BcoURg8YdXYjG5YZhttqN7bewi2mUiL3ztHRZAzkmioazhsjh",
  "key16": "2qsGmp9JuPBFsoWR8SRwJdMC1yG4hL6tmG6Yu8mFANiKpgxjbFMFP3QahJNxnT1CQCKcqhuNk872aepuPvezS8Y4",
  "key17": "3ziLEL5xBT2H4kfhimKF6xnQnLtsSy44yAcMQwEDDMdu7dMH1F5EcM7JacNYnKWj3de6YTe9Rjjj1fWuzcBZdWsJ",
  "key18": "AG8SQr4cB75SVBiM63ido84dmMXsMSdxxaZoTGzucc51uHxvej7gHsKi1XkhwJnDBtRmqy8UKuEiefqhvMuBFRz",
  "key19": "5fQHnkXU91qtbBakb2DLfvgJHex2gD1FW7FQFZFinZT91MtwgtCbzJ4BdB1ZX5hSujiisWMWY24ZpgJpGQtF5LbD",
  "key20": "p9SpR5CzEghjasrK2efJxcKV583go6ibyKsWqu9ypr1btWVfQayFEr7E2ZqswJVHBZd939XqSz46QjGFzVRREbP",
  "key21": "aV6j1mW9AC2ctv2gfhGrzSQ29LbfiNSxFwaxYr9bfesvxhzgSqUww6tgY9vPUwDpprTsABULH8g46fMfLxJcqyA",
  "key22": "3vaDXzUVbvgLdaoT1sNRMraaMafYUiViRjsizsVPaVCfgTwn9ghyYYkHXAke2AupLJZn3riutcKT7D14QR1yddz8",
  "key23": "5X27nsGcQiPp4w5c2PhrvityFsNuC2rASqHpoTrGvCfMVMV1UiMwEtwCEXt13ZBTecVdV1zoE2CrZRuZ74oxshL",
  "key24": "4VSgkXQQNJkDGpzRJbDd3MPr8NM7cnoPuLUJf3mpVG5DZB3Boo4kQGuFXwVnQwh26MQ9RdVzmw1BWeMNviR4WMy2"
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
