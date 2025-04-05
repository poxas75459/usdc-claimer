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
    "Ny5csuQZrbfUGvznTwtxUWf4TXG6YgDAZA4e2TSqNJv9KQLEV1xZox2JHnz26pRHAVXtKdMkV671hovWgbnsUPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DDDQ1CNJFNNv6dh37YAHBGBTBAKKfFhZ1jgD1vKFasY3vnAXv1NEMvDxvf2pApPEHnYesoJpUoLMK7hnC3g1LqS",
  "key1": "2sGCZQbFomCzoZrfyPNdefGhmy7mq7dDBp5nXiDpaLb6JoZsqPqd4ZXXrs5su8rwTbTgHXqtaZtnT9hYoWg5sHAz",
  "key2": "jMBQ6yD4nVKmUZzf3q6vqbfaecZaW9hqq13VvMDgv9m5KZmDL2ubpSk9vdfytfzqDErZ5MGDUEYsmbhTwJ3EJsr",
  "key3": "bJULsWETKom8c7GhvHbzX9Zv6VVzUMW3SU614f8cvLtVGiWCZbW5w7WQ7X19vtm2Mq3ueiQFMqvpVM7qVibJN1s",
  "key4": "3oiRGSqMwBerr336JFpHUpixFY4MRP1RQKmRBuNSAiSjdLVkePQJkZ41Vy89fRhSG9UBaEpXkhUxJ9KHBSpsCgTb",
  "key5": "ag34pPz7zMRD85cUcmXgPu5vQ74uZThqoQRWoJsCA4Us1J5mQVPjGv64R89qQs8LoVsmMy6RuWxm16sAYkqAhLx",
  "key6": "3MSzQYxwajtVqmsKBFbR3UhbFXdtrT8yCdY7LzFNGfKD2xNyoeyQGsXg8hRvW8xgo7jnpqWjTb2DkGE6rRxopAoM",
  "key7": "3nistS4QT695WcvvQoGKzH5Q6LC9Tuo4AxsFCSaTLKf2MaTcBrFd463gz2EsH6v8pKx1Q4ic9Va5r1CFxMoZuHFN",
  "key8": "31N6ftoTCRhbaAyxWgrzrBGpTqB9kE6qwuxERJEKtXU5qZLxsct7vJnSbVz2kBssEes3LyWAssthnX6dDhAA44PR",
  "key9": "5s2g5cni1jTsAG1XupBsJGeEqniTtkLAmChrsQPegFGrwwytH3q8pPPT1Vyuxy4Uypkw4RNVDPrRZC27RVv6wJGp",
  "key10": "4CfuNT28p8xTaGfV5WgmvWvfevs3w3mBHFAwQCVWpHs9zHixAayh9C2vfUWQn324Yon5Q13fEmhSukw3tceyW2Mn",
  "key11": "37rzBwzhaEBMQ4BsTSxAftgFaL3aa22t293nWDgJRwcUyLgHJCCp2W6gNAT36VBMikxc9rjHdisiBZWKzGSXzVm3",
  "key12": "2W4jjg4qwadv8e11rFuPQyLRJ7aBRvibdgjKSdedkJ6gZmrJpnaugM7S1ndYDHSa8n6YX9yzcEWNS9NiHhn6WXXd",
  "key13": "xPYYCJje7TwSUgpMS37djRPzm8LgfUpJUecNsSM1Bit8VWaAzA7ZfyadT6eDXmZFJ9u8MnKv4V9UWgdhWwewr2H",
  "key14": "5Dc3kTiuCVq6PhehWNLPMwPcQm3GNw3go25nK3S7a2BhWvRGzgmXiLysst2YFMFzLHzWVJTu8uhx9GRz8cqsGR9j",
  "key15": "4HKzeUquJW3WNSraL8MszpcFHVk7yCRPUHXrZkCPxeYW3ea9YfUD9Dut5QjwEncE8U4at3evyDGqwPg7s23YJPTY",
  "key16": "26BDbkLYfhB5w4JRymR2zMMTDH3u3jyTrYbYiGYGAtKFUnpe3coqf5edasoP9w7rVAKUVyKNukzpAeReRZWWXoXc",
  "key17": "5n74ZjaajLHVZX6tUbGiDZAsJ5tNBgjxuPXZmNWwJM88T5AX8SFajF9qgdLq4wfoNgM7MGq3PMmCMvQ5aVKgNWHt",
  "key18": "4WqAk29hmBdn7QNxaKQSwPQFtpWNC1Yp9MPR9Swzhhz9zrq7sZ3YyWC5RZ3m1yaJczLaHjrw2gGkH4GDwstpY5rg",
  "key19": "5QLScBmhg1Yy87n1jQ1Fh2FZGkguSazVv1KbCkekhBxBf3mt9DxdAPK8TFCUNmfCxGSmTnzyhqNExaQbECsbfNkn",
  "key20": "2A2FegBnFUFBwgVXPorQvTaJXuvNEoa89TMQcy6MRnMXHMVEQrRoYY3f19zz3vBhoP2A4LJWnLE51y3FkdJizk2Z",
  "key21": "34yU66EZT3tcTmVrwdBqjQZVFpChvkKSrZPbpAYqVXXUo2adgh4jUT6kTapp98RiPtcCfYkvuNnc7JMpEzYhwp83",
  "key22": "5WbnCvckbSn54vNXDk4nDXXd4dpQJqcfs1CUDdnLEVApyBhwtxMQLaBcYDASdH1sbTVut5z1WfQ4pXTeDmxKBxzU",
  "key23": "5qJwDAmS5AZJXEYci2CiGb1deF1K2Jres7obfJMPMDSVu6TyLfuvJcdAvuPcsEXmAtV45TVrK2MK9vUT9Ver9JkM",
  "key24": "5tCM71RLXKXbvstBedJjAvnZMU3LfnyeqGWZGUjstHMJkkHhwhepxEmyqSi2L5YnZU1tGesveUaAbH3M7JA6zFB4",
  "key25": "mXffGYF4S1U1pnKzpKewFqCeQgmpNNS3YvJZeRx4p4QMzGnhmoyt5R1wWdZohpAWBpKHGnXJTvF5UVGJwJsNxQA",
  "key26": "j4q2RQhhbrg2Cq1ZnVP932ggwjBnyKvbhd7iXbWHfM4kQkSEveqyNynUYjK71dst5PseeiXTdYQQEtzRe2PPEPK",
  "key27": "371X9j7K1MChgBw1B8qokvXPG6MEwA3MEhb2qwRPA7dhkaeTLDotXsvGQXXHLWNwu3n6S6jZQrkWFutLxtr77t4f",
  "key28": "4bisEKJx7hwkMvEVhZQfTqT6bXbAeyZS5gjx9wnkKXZwe8sfPdrQftDocyaQxc4cwQhK7kCTAieLxmPUDZ7jj8qG",
  "key29": "3eXSXJDUuqnApKbUhDpw7B6MdqqyCTNt6ugnDCT65UxgdG7UGe3iFNdrq29vAbSdgetidzB4pGmQLwPK71msxbwK",
  "key30": "5rHgo3FQ2pTbpvCaSMAKNeQE49c8jyDvR27srC92GdV1SAnJ8Jz4jiPsGweNFEUqmUAb5nXWC3rGNTGovVSLqJaw",
  "key31": "2mtFG6mhxozeXjyqzXeAbpDd5EUsPBSgyZvUE3CguBZd8D63qMUwJ67AA7zWZXZYZGKGCsegKeGGvyVE6KmJS6uR"
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
