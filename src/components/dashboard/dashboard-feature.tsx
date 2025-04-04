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
    "TxEQMLsF7LyTdaUV8XsrHKbKdp3KM8ksjFD7M3b9M6GgTs5ZEo43N6RhDYxZyffECdJSABUs2yb8N3fGnS5yxAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cqPKY8jGbUhceZrGemedF9CapgzEtj6VVdNLjNN5zKRqJhf9QMz5yhkBUDBhZk1Nb9ah7xPJVPvFrVKmnMXCXmi",
  "key1": "4WfTL7hdsp5xMsKyJTV8R6XKuJPEJrbgsv5sUbJxt7dZHj27LzVDNT2eUtP8aUz8xTm8AGF4Y1Yyy2hUDkxQvEgn",
  "key2": "4degvA8Z8RcLNxhc1UTJLy3dp4Aff9in8GdD3WbTFB55JSW2wdiHcYjMCQs9hKS294VBiuZk9jyz9E3nTRjPib1H",
  "key3": "2yj981XjXHhRQNW6WKNzKrS2uXzVYrBT3k6fvLjsMy17df5BHWY8tPWuRqfFdVdr8PUMKAAyjQXdkK1yM4qdtFoF",
  "key4": "3wVNLP4XdoVgwJmBPgPcGh2G4AeNXKb9iZie5tu44jATTKKMdPrMXQqxTAYU7bHUW3yVZu46yv7G7D6vCXSRwV5y",
  "key5": "42YPNESGvmgAo68AwhSjjQTirouxJFYoz6xRTHiaKqXJXgGhdjWtwZLnedf2TQ3YV1ok21VoVam1n3FHYXTzPir4",
  "key6": "4WmYgX317jwiFYUEHxKe8WcKZTQFqYHYoRatJ1ydxHzxvtaqBbRCoyF5ptDSjj5kuC9SLyvF6Ac3iYSHVMwuBJ9D",
  "key7": "5uHcQB2m6vbbCbBDgoDTwg1UfgDr1TEshtTUEo7b5qTzqcfx1SqbK47pYn7poM4XWp94CSFXdpcMjp5mNSMuikyV",
  "key8": "tnS93hHbhPqsF1mDcuSR6VnfwygkJ1EP44QtTFokfaxEdBmmU8GnJjCbFESxwx53U6NFSWcWzH1bZYLo2K86dLM",
  "key9": "5MqHSJHahJYgMPsybmJL88REf8W8qbw7rkHXDbyyxMhg7u8m7aC6CZoSpA7ZB6CM3EpSnGWNTeQ1nKppc9vUhFFU",
  "key10": "2Uuk2BNEQ1Wz5a3wjHvqQh63o4cGvcgAtss6akYb1YszFzL5bk9LJTnAyXevaRcNhCxvpYj8VfqRvj7qYbfCe9Cf",
  "key11": "5cHNSpYnojcUeAMeW2zXtKPHDS4Ra5m4MHbpPCRcYE8jTqpHtftb1J3EGVLaPonV5H7nSxD3jBo6ur6PgXfvz22u",
  "key12": "2bRSA4GvJ64Z3WHUsxCb61m8YwAEfVwAKu9aLN3rxMGUSn7SV48X3bTg4EBWmRgcAqx7iyNNTkCeqW4Dc3mvMYbM",
  "key13": "41d1KWxGKxW8H47FzdypWhBLtySKkm48vW9qKLuMFDEQi1xj6vAJqN2dUZHZKoi7cd3ZdBeKwXwtnawBzUgbJNzZ",
  "key14": "5W4H2ihTQhbWWjnPAFPESavtvMSn3mnTPZFRVanVbuDiqZuKj2TAPzAUKEip2XVrdBbZcSpSd6J1UWUippmZdqi4",
  "key15": "639Vf5aPabTWP6piDkUAeYWEMisEvUEacxm7BdcEro9vd6mrg8Tms7VvSLTWosMKyzeYjAVBvuGeVaAfqKoLYqQu",
  "key16": "2Q6JCZRcr79VXDgHjM77J1mxYKLe36VfYR66ZUtnVVMBS1arzehvVTotvzsikF6d7eFMfg7sNP4fYaCgvFxwojJA",
  "key17": "5eBW9MUrLe8bMmJCewxQdf38skXom9zrMkPc6uS4BZkZeajeSfbn5tHkDGzzxm8f3ntJpViqJmrSHtM3Ciw8fEbA",
  "key18": "fSfNcYSetyMPsUTQ1CqfyRPjciC6R9NvxzF4kBTjVstkXY4cFazbQP6hSPw5w2VuYbVJymRVah6gh1Lxf86h1a8",
  "key19": "2TqMqM2tARDLXWUuSriLe1jGLatQtRnUEms4v8hGAGb1MxAiBxaUpaCA9VkgbNZNhQK3criiyMvRniaTmnwtDuce",
  "key20": "7V5buhmQFXkDDSeC57XV7ea7366Mz8kYAZMvscwt98BYFPGAu3KiyH5F2ZKyLqm7beE4B93TMTyAW9bbCtMDE2B",
  "key21": "5URdHbAhc4ZFPQDCfHX6WzokXMW1UTZYWW8iF63rDTQqRjXL1aS1LaqYdMFwoKYFQKzrYcK3mgjJjvpRSHDDK9qw",
  "key22": "5wP2tHpUopGfZpWWtGSWSSbxFRnNNxMYtnkcHFLQmuhC9qd2HaEqeimB7Kvd37FHz19iz8LNCMEGaAbBHwFQVazT",
  "key23": "8WnqaWGosrQGQc7FB9dKkVzU4rYRNtSKNcsja4tGWAR4zuMxqQjhfF5jq2EgyrXsys4E16xDHXtt9zvyDZBRhPt",
  "key24": "23C6wu2RekBsZVSR3h7qZjNTPcH8QyQ8J25UgMkkh9N7keRYvFTiGAYxfXZy6LRKF8bXGkiEt5BpaBFxzmiBvFGg",
  "key25": "3jW1P2pkUBU8m5gZYNt5fGY7hBumfpxwUMofmeprqSf3FGWpq4aoXQmXqNWepxRtoiivh3pea6EobTexiRHhQ86g",
  "key26": "4fJHgF793f1fr9pgzeDiQ8ESArjvo4WfKT7Wpb3yYTgYzwTu1br61e64zGXb8qtTVzjPT4xWo8R4nM2FcxgyF6VP",
  "key27": "BPz3rSbHpHPtPfnyE6QNT4RsN2MLtg6kVd9tw7oQwLZkaHEaeJuwZaTPQMBTNgj1QwvNxyR6zW1Ga7gpvymRKnY",
  "key28": "2dNT9ASATkuzDXvrjy7nUNkhcQSXHNHxaqnta2wJBw9R4K829cH9aBcZfvHLtHfUf2WjdeFqYNsXTcaETBNNhNSH",
  "key29": "3ZmUXbB9ELouHeAHFzT3CxbCubDNoJsqFjUbcdxpMnx766k3oHR7u4h1jan5AiZAKLvzXEqRovM1QUh4M1p3UU6x",
  "key30": "2Cz213hocAGU4AjQnSm1dSEjHQBrhfrctoBwioFgy6Rin7HYF3GxWun34ZnKPqLGMJ5V3aXYWWuAfhGTBmeYtjsE",
  "key31": "4skMSdEphS7qXiearFMcuocTsARm724mubm5Q4GLdgCgGT61SMzG6wWXr8HgBbvETTA4mLovJ9V1z1jpkHjqN6Z1",
  "key32": "65ghdv3uhh9UneUk7xxdLNhs85Wfhhh2eBDHaYP9wigWmoeCgnWGv9VqEwHvSARyA7WFMFzgd775pjBkXK45fcyB"
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
