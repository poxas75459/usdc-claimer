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
    "3jF7efjH62CvzfeSYn9ay5GhLkMQSacDiU6vnMPXwpajGAyhqzPGgZpcS4BGXURrXCNq2ubmPoj23379Vwyify1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PCo85GoiJkmwAH6DiyCqE1DvEhuJnwhvHKY96GegXFfj9PvY7cgqSiFJdeMsSopiSEiVnbR4rbNrB5wYGdkKdFc",
  "key1": "5NPMGqsQCRqZYDWqTn5a8imgfEgh2k51a4NeGKC27ttCbPRQ6bsrF73x7a1RdBBRBu9yG7RvzmEYjkxGMnVkkxUx",
  "key2": "ktdE7k9TuBAa9d2swv15hZaafuoTiZDXWutJk4UmjbKhMhXYKwrQctvNbQUXgUbi7zkhBziLZnXKwp6EWGd5iAb",
  "key3": "3KFhvVuqZfGvN5N3csmFZXApxfdCBXJZNraoM8LoTzqvVeVveDs2Sdapis3HTsXDspeQVHU85sY15HjxHqMKKE9c",
  "key4": "3egryyMYnRNea7yrbGS8NoDXniD8bP6p1cHoZtNyHVFevbtvZHDJTWU7A9TChzgA1kvUCbuagmxnPeUrs1Fe935x",
  "key5": "xXAoD2h1cZHbthAiYXH6XK7MXub4k7hmau691JovZnJL1eudnzHHvKJ9wf3hEHg34aAfJjf3YU5TKvVKHd3QnEY",
  "key6": "3buZ7EfkaATzcWTp5MWWEfks6fgMZx2zqg3K9w5oBbauZcyPSZLcraAi4NGTL6h4FxrLCjaMYgeWZoLSTsBQyKdi",
  "key7": "kJWuqYW1iuDeRcAqt2uRYiQqjBE9ixuEH4Fyz1MWfgnRDiuZKb2aucPybphBy7u8tKyuAvPHZ1xY5aqyUMhAvwH",
  "key8": "3JHtSM4H6i4pcHK1GyhW2WN8WsnZnmZ3TYirMq5iQyM4dX6Ab4FESTGsd3g47VA41iYchCTJVb8PA6Gar1EVs7u9",
  "key9": "5RnQAkboBMTLoVPNgWthm9Dkaa9x8hJdMu21XVNbna2htQohQ5hzibxtTLVe8TqgegqXvYSXkHmCkP14pCvp8CvN",
  "key10": "2ZsdYNXLJKg5WGMGAVxDm4QobzKqY4kS7AaHv1agicNjtoQLviAb9bGxgqmfmaEWnKgPDCuurENNFMYuLtHpdcvd",
  "key11": "FiMhLQEU316QRZ94x2mH3udbeWu82yDNBbEozLZdeaPtajvGwTJ8vpVrsBgpYghjkqz6XaoAhjB2yt6k28eTQmX",
  "key12": "4QFsaZ8c9ozfJyGksJntrutbGR26McmqAzc8PELTUVVCRxQXiGLuGQv3HzZFKrgjgwihWCAziJu5HsP7wThnPUup",
  "key13": "27vf3YUdSXdpJ4dFKfMK96rxwMvBnCxQoPqHmcfEEZmumARAm5X15WFgjYjeNBC9X5Jv8obZwie2fDVeTUb3fNnV",
  "key14": "CK4uRcwiPjHZNL3CK4RhDnC876taWfkxzmc8U9RpNDqepWi6YBtJ4AP5Jrr9fodmu6pgCmXVzu87MtEHS1JjPKo",
  "key15": "3dkv2C2vnGqJthkBmEtCdgnnihdvEXMiVGovj8JrhChk3vEST41GVLJ6HchsTBy7kobUV3srPW1SfW8VWTzQ9Cyq",
  "key16": "4Xzjtcqac1mH4rpYgTc3C9ud4mgpZM4c64MXMPGRsidb14PPRyTWHVHNfuYtarejiddNu7jE7ga27SBqGFn6fvts",
  "key17": "4TUeXdJ2AKFuFFGp5zZzt6k5Vha2LsvfYR7xnQ8UsV6BKWNkrLRgrQjGb3Xz2wrg4ZtNWJk8Y7CkoVrMcUH1Eawj",
  "key18": "4vMGrLxXvePUcydCZRgMEQjzXHfmJbujM1qz1TAcCUcBStL3yK25Dhswe8dq2gTGSxPQz1K1RATBtAYe5d3yVRCm",
  "key19": "2Ce8uxjdYtWzRKKfvTwjHtsvLCy7kKKqN1abSgDPHT74D8WdBXGQfCJco9GhYh1PFMg6YCDn9uv6fxnPK7atFJka",
  "key20": "2k8GNd1NMdnozyUW3mkvb2BG8yLDCtN3VtXRPVktWXpbfxQi1tL983jCLdf3ECfWrji2Zc196fJ24EuLdQBy6RC2",
  "key21": "2kzDkaXGZ4uPYhRhEZbp4QRobnC7vwVRZ8UxZo5YWdYRQnGEwAJYhLYYizPepaqk9HBie4ZzcXHcFneKNYWDR5gm",
  "key22": "3bzNL6bTjc6tSEHaWt3cbEhcRaHjae3QxydRqAtMr5cX7VVRNHNDEGm97ikRa17TdRou7ENmQ1x2jbeRy9do5whE",
  "key23": "233yiYH6TPnJ3DS5GZze8uHrBKeyeSbbfRrkic2a4nie5KbJpkaqfLhQZxwMePefio8AKH1QV7C3d1LJNc3rH9Rq",
  "key24": "4mS97Ht1JFnj2A7eyygRSVriooFS1taFpzDfqSY3DweEKwXKroM2qQ8vgP6f86nxJ1Q8DJbjtcw8hfeq8WuCqzCV",
  "key25": "5HFfgHEM2QjNiD5cp3jtmWixtdWHF9yupS5HCYpQZyxHEpCABZBBELeSgfErWrqevj59ZR1YVgVTUqqMNdo5wjqi",
  "key26": "3jkVUZKmYq7NiFq19wD5nBcjy4Zy74DLMWn61FzZZitxzDqwbX6k3J4KxsaV9uiSRRXrAqQsttBxZB3T8pdiUVxt",
  "key27": "3HT9qk8DHZjYim9XAdg1GQK3RZaWq7ibhVKRJSqxuqod1kRrQ6prGPJMiGt6xCSZXmQhtb63edwM4cujFded1fWa",
  "key28": "58RdBeHXQKYvh6xXrvZszZH6xTLiS8gKgTVmbnTvZvhunWGttMbSrXRLs3SyrTrcyDztp7nBT967NGqu7TNumuGK",
  "key29": "4tqgjsg68HR1rFeke4KCH6mLn99tNiRHyuboyQhBojaUqVC6jw7EPn1wjpWxMFxc6YU6taJUjGks1P5Eht9v6utw",
  "key30": "4pwnvU2UWvRXTK2DrrujnU1WFtP65CGXPuXCvTHSd9BAKarNoXMbT7Wt9RoozbbrXVPuc62Hjz9RC6cZB8asbq7C",
  "key31": "3mbFuA89QaqiLUZpxe5HYRe7E9gWBMYEqfBtXxLJ6GHSDfbLA6fgT63dJxm9jT9wKDZT6bQTCWts4SSkYpG6a9fN",
  "key32": "3got7dpgzMuZKq63DsNGSdckYK1PDvZSohRSYFn9XYhoc1vhCnV78PSX5ds7NMKB14GfiYJxpcFBU9auWgjizLK3",
  "key33": "3wHkYXKvVHT4io7GicGG4DP1Qw5rDSs9wEa3G5TB54EpQSDQR1Qqq1rC9CQhXWXUddoJSmyk9hF62E2JDex8gA8q",
  "key34": "57qaX1MbdWjg5tsGk5jWJWzEfRwTfp87orisoVJhc7JwyfDkxsoEKZsqmy3FzcMkAvzRDtMxkEga9cz8D24dK49k",
  "key35": "53KbAeTLXjdi6wh2A75EW9Wbg2xYsDZYJpXDZSdd1iKvAMnaYXDC2AFHmSbboU99ZmVStbQ21G4GSzKnoK9mD2Da",
  "key36": "2933vXgywK22GNgLWaCAckziA1oqD6DphZ82Rtre3XzQTZs2GaRL5HN6XmipE3pJb1VNTbucZ8VnM2Vt3vUGiaaS"
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
