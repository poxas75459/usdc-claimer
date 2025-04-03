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
    "5XpHikQrjiTRPB2CeMgp7SQjYrtK5yFxKvm1azA5RUWcVHMaNiirV6WrYJpY87ubjoexPzJvU6JHSTexYGK3snKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MZmLBE2x1Uc9kMXxXo1SJQP8R738UiWqGVdUEpo7c2y9ghn5aVoZ2vHqi16aMMnWvYs6tkqeSZJCdYbjstbYxnW",
  "key1": "2evkjGR3GfB7oQYJuFrfVLp4Q77BTaiDq6KisLauEyp6pwvCpb2rxbBkvgkY8wZqen7tcUYUPsMbQqsB9VyYWkfV",
  "key2": "3MHePEe157quwzBchrAwNoh3Fm2kDV5RXrM7PzYAiAjRfdv1FDBULYxjsxq5hm7ixDd2fpS38FzUjhviadTgSwSE",
  "key3": "ctexL8EW3UeqC3eGZ7ykkfBiuMpz6TgZE7UxH34S32Y97ZbH5wZM62qFX2hkMaQd34s71jFLMeUahdRfpjm2wVh",
  "key4": "EUtJ6eg6QV7HktbJkVUrhteCUxXrCk34MS4vPL612x9q2hGVr1HAMh7a5MDQGRsB7B6v1RvvcNrn9LqoX7QsEuD",
  "key5": "219wEscbNvWpqqARg1Zt7WYf5cUgw9SHrjgQ4UBUKr7b3SWV835R2BGEvYSQzNkh3xEjGKJNHZPdwXqvWnExC8ve",
  "key6": "v6m2pzKF35LyUnKoQNtNf9sKj1mQeckRa5B85N47GWy2qWbQwE9caPvMXeWNKzJHe9WmAZcw3HWPRCfxKkK1Cqt",
  "key7": "2vnEDAur5isSVFijx7R4CMbNT1Gghz1qBnWLzU8JF7zhcTzUK8frYwcM1Gu68y75VSbfvaWaT9wLptreJAKggDEM",
  "key8": "4rp3AyLyd3dWsMyC6rykDoFxYn6F7p6s39UGcKRjXM3tw61q3dR778419k9cgH5KSPAaf2QM4msTGTJW4fFXTTFE",
  "key9": "5vAUDhgMMa2i7hB5iwbnKEPEKAqPWksYTCJ7ydok9PnEvBxWKaQ4qDXLDeNSj9USGwWN5eGSwwQB4EoA6dysakBr",
  "key10": "4vrBziMvgjxNYuQZDC74PNAM7xG89uH2TjrUCpkTFQdCwz3pQLXjHbndYmcUSet5VLo9jdDzLXju2bDgs5SFjPnQ",
  "key11": "d2PrQdaPWs7zXbYLVxcyqqgdyLGGWy4iCTEghhvDNa3ruhvVbeH4VaX98EihLK6Utpx6i46K6J42Cc9yHSJxgoj",
  "key12": "3bU81pKG7aPoUAU6yXWwaLRrEFz4pHH7D8uYLS58nHWbdUPkjsTebwmTXcTvUM8qgDH19GjWY2nJ7YQbVdjD2zw6",
  "key13": "2xWsaGcDDJob9XzG9tickWbKXkc6XJSWRSGSuFEmc68eWwyWkJZFGgvmacGogZ14ZGGuxJPVbcjcsdsFe6sToXCN",
  "key14": "3uDTUoi3N4KYYYaxD8wLVj8AYojpUcovT4aF5C9SoH6LPpVuV8vMpxYTjDHy4N2e9WM1Cjgwr31MtvBJBR7R1wzY",
  "key15": "516S7Je9y8Qbd77oaPuJ2bY7vthuVnZAQmDaExtoxMHrjyig6dZFobnSfH2PihwKVaxSkAhjmZtpEt92zyoAseZG",
  "key16": "pFzMYQANfsCNtC92zWtGEUYiSkvugUgwvXMn8J4MMAY3hdZtYzGCfFyLZ8WMHBKLNGdRni8dJkVFkp71JzMomLc",
  "key17": "3TD97gLEpLhctsFtNJUQZFc8xQZb5oRqgxdsktSZHCHL95Bqng9zutCysGg5BJNi5pZqNxrqqH2HL2A764T7XJLa",
  "key18": "3DPxPqLHchgwRCizFTEt7KkWA29GYkttbvqz7F3fcTDsf7kJePRFQXRAvudAD1mHrFA3gLMJYuAYJzQZKRd13j2p",
  "key19": "3dHSKD72cM5rQ2odCNc5JUxz83tps6vLLuGGo4adpVzYM5ZZ5VVe8WBdSWMUVXbLtH2gFMq43ooPpCGwVBMCchXo",
  "key20": "2nd5Ci3NHetiWp9n69kq71JecPGN1vkYPT9aCV3zhKFyLG1Nymhs7BX7NnvqUrysyCh2iupn1RMqdtbkHqPm8SdU",
  "key21": "2VVRKhtnBRZqauNPjTBYecwfMhgerD2CXC5bvewYAfDTKu7T4pE6rvpBvh3CBfEeWuxjbfWKCrivPsyZWPo5pupR",
  "key22": "2RqsZj9VnKwbokHG3NsRM1vmL5hCRnsa6KEZtgmRVxZ8izd1Cc4L2Q9xT8Gy7w9do52cZVjYnVc7oLJ8aHjU9HEj",
  "key23": "NqdTBvoM3wWVC7c8JVQP3UF9voLEgyTGMKASu515QPCp99AeVgpLWKVWTushQoibYrQm8NzR4yjBNKXxtEAH79P",
  "key24": "2vFvdbaeCcwPoZAWwSRHYT4WGumYofsoiEnx8qNRxAznNUwY3rXP8xBXyMXhXbBXDZAf77mQ72o27ZNzSr1tpJGW",
  "key25": "2yJktq3mN8fiuAzxHze2Vy7kegiZkytyMPhgjSPbPPJah2xg1jv6JLiuYM1Gt9yAqXqZAZG2iCFwvzmVSYpp5ygZ",
  "key26": "HNvcjWL26KmUXUfutPkw3KAezsy6yjxpuTa2v5XBFGd5N9aP4AzA9iBHUvPccU5beXAc8ZixFwXVmWo6vKtGqSW",
  "key27": "5iuh8f6TSo7N91XtB2Cgb6AJtRD6BwuKXe148kVjoDG31zvRmDshPE6oM4qL9FLAQkJTv4Leoe9dpQfNEb1TGT4n",
  "key28": "2Z98TzxY9w5jTrMYLtiZjbUU9RPTtghdm5brEivP9NHnbeef6dfpBzk8DD7yCgZT8ZHxshpxuh46bLHfZrv5qrMC",
  "key29": "3RGQKRW1tV3msWXTYhqbPaeeSrVjLf9ysWhswfB4T5REqxwM6bCFLxG13jKco15soX7sSadsQJFZp41W15rKxRg",
  "key30": "3iZkTxKyLLHyc3RVzX4FfzuJMWx1e8Ko8d2MwV5rDBi4L1ZCKdvDadHLoFnMxKdsv9S2Cn6BM52Z71fW7infw1gj",
  "key31": "2x5enwEfqsDjbdWQWE5ckN8nucTSvgaYE4HjXzxRXBrBBKDEi99tZ3XiyrQL2L5H4B3wGN9eAZvNcEnACsBbBktJ"
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
