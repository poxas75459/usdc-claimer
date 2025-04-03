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
    "3GtMFv3rty48nMqj3KDbjVHjAxUhPLjBrGY4FbPpeoC5222vwaHhvYsqgZwpyyfa24AXCJRfcdiU86oCyA9E98Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q9N6rWPvcV1rinvYh3Bz9RZHRGDahCHcDSHiaUYkt9sSpV3o9xMXiwcS4m5jT5BikpavxsXVVRym3wGRK4APjTx",
  "key1": "5snJxhsE82Qk58RQG1mPXr1eVtjiUqfi3qWJRwqKxbdWT26PRRg354JHY1bMn4g15Lz8nLwxjdQUKHzp6TcFkkB1",
  "key2": "22BPbHQoU87kzkCMGXcLnnD5zGGq4351UC9vVf3fL8LsgPBYrZ2Mm3ihi17hx2x26HDfq5Gded9MyVkmhJQKpWmK",
  "key3": "29LmtEXh5BrgVZxqFoGxRVXUcm9zzVoYs6zZ9typ2pCtqU4XMgpFBH4Ay8e1pepDFs69UW7PAWM1gpohz7CQDu5H",
  "key4": "23sN5XudDFZgnXKmvBmNHP23QA8LphSe81CLqLf9hV8wEdbuepfJF4Ku5Wwc2TU3hpFGhEQd5KwydM667VsWchER",
  "key5": "3VD2Y8sWhEQw14ttNPBiQvTZVukyCwVV8FdYCxqTpdaaBYdxAmKvNamJfM748k8NFeGM4cEMbRbVqPTQnqJXoEot",
  "key6": "T7KnSTgkKEi33A9oQCQWzqkZGFq7s6zJEBj4Vou5yhhLjYkZLSMr8eA71aZJZB4hymDFZHduwQYdi6mB4bbX2B6",
  "key7": "5KaVeQPxUdNasoknLrHGBNu3XtoHCkqBw7XprejcQeNPARRt6MTVbD6kLQ6i8jZHsZAFmZvCCKb2Q9fPELDY3oZr",
  "key8": "gsP2xxmJPdtHKjWYiaZcHF379wo9jZas6QGp9u3AngCNu3Axi94j9riWwvhFWqVodizyMXFKYsVSyLa3uZyW9DY",
  "key9": "4mqA8vUYZSaviNYgVAg4VNL9iPhHvDczF9NaaLayzzmt1G3NqxEgTQBWptqNWi7edES2HgVbqVHQaLKT3sggVbye",
  "key10": "GQjKt2aa183z6gyS68RYdCDpy5Y5Xye8ivtpdQ92PEhPDKSatctuhWQxWHJ1jRXTa5KQVKYvF6gahphYV3otS4B",
  "key11": "3gs3a5NGXopCptKyEnuprtNZHBRFPkbGAATCYy2riW4T9a7wm92iZGsJX5QhEiLczwZMgJTohdirpeFbADJMLqEc",
  "key12": "56HJ5YuTzunFWwRt98UYQN5h52dF8T73C4czT2Fp1UE6isYcREW5ThAWDNFdb8eFuh1Vg8E6FLzjrni8cc5132Cx",
  "key13": "5xPedhRNu7Hwxpf2TjrL2ZzBgvmAkquwvZeTakMqG7rihJhRjsexouTyRrCRPfo4cbN91H48WpfEbMigbyH88rMU",
  "key14": "3kqaYzvNfYWxjutvLuPhgnLqDHtrn3m7xA65eEPNJL9wqkGPeVvNWqNAuZrEErsJN4dPZzkwK3njQVZj6xdDjKTu",
  "key15": "4avaiRsJvmgS7PdScY3r6hsN7auRD2waB2Ydf6V97RVADXemEXNxfMT6RR2A36BZgRXS3fTvRFLm6NxFMiFCazi",
  "key16": "3cGsyLu4Y9nFyVbxLkBY3MBQjELCHyQVqD8PwB56MZPCxDTiJBAYvEyWSi9FA8UD63uQCtJjRr3q35pNXmQPoP6q",
  "key17": "3bz36XzRKCSppxwoiQb1ajSfMfrfYGCQVdcxC4CkdkzZgRXqHcfxuYL8q7xcMeLmVXZZRcRexvnTovuXoTMnKM9d",
  "key18": "XKEfXe8NEnfJrBoobG1QsbRoQK78Aw3gw2HAiLnZzay5ii8kRUKUfA5RUXr7xGTktzmapMNBgQgCWdK9hExUgyn",
  "key19": "4Ks96M1NhduaBMTYCcKZ4RDLPXQnCh9zLGezZNVvn6cFFu6hJW9nhrJStba59pgGs53VMpxEsNDCc9xstfqbJV3S",
  "key20": "3Ru7jKGzddefgLE9JNyDBm4KGjhV75VQXQ6BmC3Ej7nNDgf89H52a1jVwcNMMVrFsavT7ao1cskPKa3nzM7XzFq3",
  "key21": "5EKKRWjrL9mtt8QEWRV1L6uCpyw8bEkdCzNNBeeqBqbpeZpn6ztmzmFyLMzYVG6RAgyCCB6CRd3XQSWVkLFriLxG",
  "key22": "fzvQSBSFjvpz42dBmNJfvnhx9tWhk7hoTKtxPjHKzcyJxJ5ezaLjFpjFHfyDHXZ1o1gFWmLiLjEw9wkthKpc4Ro",
  "key23": "vZnw8KXP7f1C7snQw2SWJFh9hPngMjSYMCLiabx9adEmnmy6HtRu7cM89Xj5qqmi2CKmZyLudWhFCaeJvwbZuRr",
  "key24": "5kmhz2CnHPezimCCzMvwDW18hYSnW2WcH1w4WGcmGBrKDFkfQbHLr1EmKKyhKyuN5gwKrbVdm2NPaj7YVNSb8ptC",
  "key25": "4nuRpLzthNmy4k4FQqpM4r92BHP4UoUYosmU2sJe4todW3CQG3vdPu4MEKvdevYYsVtm3XFmhQtNvGsRPTkqC4b3",
  "key26": "2HKx7KogDrZMrV7xjyVAPLVvhhuGH44sUeqVuZUVNeoAG5dyLKhryFLFTZZkPvFbZHrVME2hH8ze3itZHV7otjM8",
  "key27": "2PySHaR8SJvNpBgbAAg2gXbR3LovuzNJRtGPUgmfqB7bPHY6HRJx9DAervERT45djqbMcF93amaMA9ap6fViaRAP",
  "key28": "5TF5nj9gMikd5xXdrHmsJCbnTzChfjASonsP3H3P77tc1L33Q33A3rAMg7AAVBNcZCvT9ySYsydWCnqfRyYpZroc",
  "key29": "5xXUj7jqCh5h5MHJkN2mTC213hV37QwP2gb5HrcMFya7ea7GkFEnQynk9YWSoEC2svJtBboRcrin2aHnDMhncACs",
  "key30": "4bsgxUsgkhPKeuAh5Sf9uKYJ7ggyZw54Y4Ba1o1ispSnfcCReUP3EJaZBdeNivf11AD98wJ6NcHthxY25b4GcCU5",
  "key31": "5PFgzjJraC1BjJzqKAHAjY13DQqCVLAaR2CwvtANrhw2SqkcnNT2iVXh4CqF7CokSSNnMzKndmTZS8jXU6eJYMUm",
  "key32": "5NcRyLf8rTC55oawNZiYiaejMYbQTwWvfpe3fey7wTcnyjgJMJhcmoVUt1kMvTLSf7VYhT9bK48fDHTyrTNenVJk",
  "key33": "5d5jXmRHWav93mkE6aBqBMU59owzQtsYvY12aqoG5uag4jcxRcDziKCovx7EpA52DufEa6thQjBTgqTmafeYLQqM"
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
