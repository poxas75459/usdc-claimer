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
    "5ceR1zAi5B4nTyky3vAtRoZR3meBeQL7KMcQToetVECnXSvbYKGsWEoWqxKHPWjM6YgRK98zfpm4Yuuh9dg8jsLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d6JCNSbxjKPcxCHiULQwGMbphs1GHRhjraziZqwS86wTDPo66qSDqQVdJpFk5deLnkcLFiChbwDkyCM2LTzqHHr",
  "key1": "3HjKb2vm5BYsicgzX3JH1QQ3kBnmjmfuFasV5L1KenZmwnRTAajUZDMHGPykYD2MqU57AUZLL7w6jtJoFn1DWn19",
  "key2": "FMCqbF3ssF585JHqyVFeaxoETVhH8F2xNBQPGUNJscGYfWJByzmU4v1RHMrhyeKRZrTaGGhPx3QNW8kohzM5v2y",
  "key3": "2jEAffe54ZxzrYGgBffMdgKSSoE1waU7Y4LaiYJFLzPLzizjzCqSS5drDmDgCaiCJJah6ycjZ84r5WaGMcX7cqeg",
  "key4": "3qyttkV6yjGkAXZcxJaqctnCLz8jNXDot3v5oY1m6YtFqeZ42Mv2C99xPDMSxZKTLt2BiHaHLL5AXdcPoSWw6y4q",
  "key5": "b5iNWsvfK8sqJFvfSCXguA7tyPz8wPEXgTJKvEn2oJkWheihYm6nQG2nHXhLF7TdxKzhpM2wtqu4vZy4huHMLv2",
  "key6": "2Q2T188erZULxVvz2Yt7vmnUbDKUipYirT7m6gJ4tqQjprN9j1XgFy9P6WuSYF76W91SttzJFdt8K4yAM1JybcS9",
  "key7": "3Ng8F9yhFGpsozbuP7CDpkP7Cor9S37BPgchu5RvqxD1qpvUxRUfCw7uh4yQ5kenC5do1QSkAYqYt6GACChUSqDf",
  "key8": "4tKab1tGUkzX8KXgdVqS5PrahdMgNSNzmmcV4VwTn2KEYaKPXxzNfLqjeaPr19iEYe6M9rWPumReKDcnM3dfh4qz",
  "key9": "3WH95zi7dnvb8sbEkyztYeDiM2i2rXKnSypgAcuTL82gJsKZRopCGQaBiKt1E1DGch8MNF4SLN8DXEDyBQmUxmHu",
  "key10": "4zNhyw9BHVz42hWjMYC9UiV7DephcEMxkijrvc3oWQF6ypAU6oy5U88eQd5fivhr7vKSvs4vJst2BuFxyNmGWD4N",
  "key11": "2cTbd6qhi8f7xihyJQYZjWmiRqbpCYbMpyREXcbq2fEQowA5fWsa1wvisVMNkBd4Ro9oP4VdDBZZGdKS6tMCBUc7",
  "key12": "2atPd8s71y6rD4ekp6T8RKJFLGVQhh1wYgzDJN8BXRyVmeFJLQ4tb433uJE4Tkg8aN2iKB2MWpvah56GDxEou8Wu",
  "key13": "4sn4HWUM4V6BLyii9ZzMQDDitdYR7pCr83VidNna5topy1QYL5uqv1bxAJb1LVHG6WqoXmsekYLSid982LgjDAMP",
  "key14": "4UupTLbtgzg8wTAMTTp57j5tw2zcHZS41JTZMHUUYseuFBiFiQvDECE1p32UPkgRN58H3ngCmRLZJbELycqAb551",
  "key15": "4DzQnHijQnMSjtVzoakafreDgeErpd1Hm7CpZnCr43GGA56z4dN9Ju5a3BDiJtXkhrgBLpYLaj422S4H1QZqi5dW",
  "key16": "3SSXV7AH9Z7VmdWJdPMe8ALUQXCuv13QRcWjMkL8fexfthEedC49RgLdAi1UodqSgwWtS4ZDAKoJ5FafepCeqC8V",
  "key17": "4FYmJKKoDdzSWn5rLQ9sRVCMnEDsisNxrGDgSbecZXf9Yuf2FMLiVEAahbVwb5rzp4m1hM58zYw6PQE2CKehomaH",
  "key18": "31Hgf83mj5ev4qX77j8BBttmSKYXBhcRJQvs9PQqiMUQcigT9Pwj4b6t5LRruxT1uG8Byv9Kk4HyFVbaNcZF5LwD",
  "key19": "kj7CweCSaZtndkysXtDX8y9KBXdfuD2wDtsLyasxTwcB3QqGL1Bd2H2dddeW4BSDABXccJgN7ArJYDVW7AmKdq9",
  "key20": "2FzHv7KsSWLkwX1CNxqBqCcfqcuQsEvMqoJFEjNjK5mNLFtqKQFMZ6TjEJcwtsr7TMuswoUGtindSspASvn5NV9r",
  "key21": "388R6MqLRC3JTTMxhLz4FgCguG6YbPe3wzaSrviSKPiFhCrgZsJSbiR3gzRGcmTggQMQgcNyLMPqZg6CbiYwTvx7",
  "key22": "5RwL1qAXcYUw2hE28dtX5gwxAyxo5qiGjuPaUwdvoGha45KVbABuWjrB8yktpC5FiyZGvDze7S9S3SZhmVpUkcgh",
  "key23": "2e6PcP62xBjQ1c6i2rWyyiLjhCp2FXS9WCTSWwKrCGfuR68VUmZdPsF7iU7ykchPJWhvBA7oKPzkcqYT66HRmKGb",
  "key24": "5YVM6couq1wGCkqT6BrRZH6MxpsWyJUes3Zf9am9nhQd2w33htxqE8JGKQPZYaduffSayWKWp5ktTY9CfF91C3vb",
  "key25": "48VCEASgbdnonRQEELe69nMUjXGWNS8md2aAgXQoCgfzm19cuWByssREv4aSo7w84YKWfeLSkFLasavubEUy5Avb",
  "key26": "3QRVHjRK5Wq7CXhMmj6qkTwuZSk1RsmL6DajoRUeFSZ4hGga37sitB4uH4xmTRZ5c1pZG1j1nkyeEfVxY9zaHVVv"
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
