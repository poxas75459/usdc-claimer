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
    "5TDT1wbpUtiTe8KZPatjEhXZQFqQ7iZf1BmaA676xiyesu9vohme8JZGLjgHoFPA9dj5u5ehcTsdkTq52dAVFfey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ihwoghMkZJvj5SRysWab4acVh144bHhgQHC7Ekn9sgKMZUUCgaHB7mVW6ZBX8mvCCfVJnJQSCVvfk536a3ZTMa",
  "key1": "4f95sP69ZYQ1AAnFa7xheGMRr5oAhe1LK3U2aqa2HztYciyk5faVwkDsrRicUTe5D5qRWzfQ3NC4LDCkd2ZFwskX",
  "key2": "nQz9ptMuQESuD9jAjkJbLuUGbpDzSBewmYfmgcM2BhfUFmR64Mv2MGjzcTbtxjM3D5MZ2BA18C3SrswFvbnbJPa",
  "key3": "5wJQXdj2AE8MK8DagpW85cUce4heUnx4uV5NxRqZVnWsnDZh9DDrMke4yshk583bnuR7YdGFUif8gHMzeiZuxLVB",
  "key4": "3kNMRUQ72qdG8xUCnQv7qShQwZqdjaQpdZYveFVuwgh3nnspiSZj75nfLZK8nEZWr6zDm7bUgrZJfp3RAA2gepJT",
  "key5": "2AuXxUJbso7vyydEZuUKDbbt92nRN142Tx82p7Reoi4ixr3wKbeECdoeGuhXbzRBP2C5LejuoRSVAF63ndgsWgjd",
  "key6": "5QnBmKa86j3zMf7NoNE2qNSQGcbFxbazgw3mjb7PHk9TE6VXjvvs6F5P3xGQiLnmvjNJdFdvh5mHWXT1XbsNyhLe",
  "key7": "2S4VzGkReecqv2dnCWwMdkVYAYYDstt6V5WUXAw6fLhV5Lx5bLoVGksowDxyVf6A1ZmRhmJfbeSZUrCx2f6x7YTV",
  "key8": "3WxwkeXZj8hi3yz3HBACXQJ5RmXFFWi5MWo8RFjh1UZ6SBbwAxqCNL48rgXoBXGAULiwWLNfohmJYb2FUjA3STZ1",
  "key9": "5agL3EPXaPQjpcN6suecc7J9BZZWc2gXXwKkEL6v9n8MLxhrtNsygXJzXqJKyUz18sd5S7JPsKbeGLv9qXHsb2nL",
  "key10": "5B5FrcuzXvy17FyE4j6EDk22MdsYNVGAVakB5pmkBQZi65LhnG1oSiVKN1VxHP4fdu8iaLc5vawHZGw27w2CvVRY",
  "key11": "4VqigLCDahsLArKGB2UxmsdG3L6H1aUujUps9cbJkM85Dkzi9wEXGEm3fqMnx62Ek9VsXXobxh8ebC3VpradZLSP",
  "key12": "Np8x8kEBy1YqumBa6dVZjKZFFwNVAhfZ1heRftx3W661vCtyusXUHTut8Q66ty1cxB5e8jiKjUJUkz7ee28vsQf",
  "key13": "4FPXP5GWAvYQ1mypqrfQtrjsi6UuUJFHZUk5zbMZXKtk7frGFxJR4woiVRvSb8SAPZLPB9psZZno4NGFLdKfvqky",
  "key14": "4w9U1rwUq1afuwF1CgzSaQVEebZgDjYGDnSeNCzvi5hUHHaHSWcmGFWY5ReKKwqHNktaidkNAESJvVQ5ABPpenvt",
  "key15": "4rk72v3v4fj1gNZxnnieaWKAUB63TMEqmddn9dW46abTPFDkFKkFVVvxGBMQr8UofSbmnr3wwTLzhsk4oxLCVjL",
  "key16": "36RKS3jxdjjAgBnqTZrQ726V68cSkbNHmzxm2C3CVe1ryFpowRNd4FeqvS1SSecqgAbce6Fi1oVJi3Eoy87X6Y8E",
  "key17": "2ud3npWnwFQc6dzyLBV4Bq2Pivef7U4fSTYrBHkeP4PGjLoQaexZc4rqHK6n3o7FDSvkWJ1SFAXT3hyXEozBxBde",
  "key18": "2Btkb9cKvNxW2g7g49REsUafEmsYJZSZeDGXsCNyaX6nDuBqxmacD5EEBbJo2YCNir3HT9WpVcppZfxh7EV9i6dM",
  "key19": "2YycNr2qiysYZzSXbG73freVBBh6J3cGj4FJEvJq3JfrntH8ftXrazCMME7MLeDDPDUqKqo55Dw7iPKFo8siGnz8",
  "key20": "2YBAMszTzYAEbPDc3c3oVCdJngesv2AqXJ1VAvG24dMeM1xgjC4neLE71gP4Rz2u152y7FgxH4Vs7X14LHNZSxtN",
  "key21": "5RooU2hVucD3J5e8fArBqZVteqwNtCA2VfG7gE2DQEC1dz7qh18x5BdYtWT4Kz4niiPNT9QKjoegf7DAU4PwaUSA",
  "key22": "2iE8fY7Jzu7Q1fv5HweHKy3vEaS749FmdTjpY2MLSH7htXGUg8M2xY5RbyWxm7hYCxRgsPYn9eNt5uCPd1qGh5jm",
  "key23": "2eN6pjPyAbNhLXq49bR7w1cFGu6Ep6pjkTgipR9KWPY61JHrWdvQeZTZURJ9DfPrfFrrivocJAmR5opnjvZ519Pb",
  "key24": "gYEX1Q6QfjcxK3xVyeNN6TGQLbUEPYSBdGRRVAUQKRHyFJMxyUr1k4qaVpYSFHpdVda1bxLri76QdkGz5wFyPDX",
  "key25": "yEhayVdmfLztrS9TbAsuBtT2hHZFoiciDNdzqpZ5rtYaUtCjSBcNyzVZXZwdMWR8dQo6znrZ6m4G71u8D1zhDmd",
  "key26": "PnBhpUGoF5StHh5cPvFZGU4fa1nfc5sig3EigPvsM2Pv7fFMzfrmrjLQewTidbZKWDAP6Ep6RrPpMV6FiiPssFe",
  "key27": "2quGJRhH7v7tmXeJdQ8DbaLQ9rnmEiM2oaBR2f33FKLqPuQwUPjbAfYQH91p8sTHBgGaZ3T6m93bgQvPizMdsMpP",
  "key28": "66xzAZ11NH1gKjvLk1m549hyF4tyuVW9i4tuqVmtobzbGKPJvZrQtmoJM7R6UUsg8L3gwFQabJ4V1tAvz7PDCK7",
  "key29": "CHT4RaR6ssQXWbXP8YRNRcyrHhLJV3rGjtx5t6LSattb1oZkGQjHV5o2Mzmgo3fk6MBK3YKGsqYVWnHMhRF1drx",
  "key30": "3kF3DVE8Ba2oeTtGSAhijCUNzbrdVAvAX3YiXMmc9FvHubvMdQCzms3a2YHL5y5jnRNbM8qkvx8ti2qX6yvSWHU1",
  "key31": "3V4K8LYFGH3BvgDqGZb98qMYR7vYPkGb8mSd948jy42Vt7HaFZWeSeujZr3q16hQpKuHEZncC3XJ9WBWeQ7Rr95A",
  "key32": "4gm6YQvnAXy1S2NkFT226kjSxhpNWMSvephWU1vS7dyXAUjVkuKJLVyqh9B6iLEDptEwif1YQXiXxHHZzyBAFxTL",
  "key33": "32Avedic1RhpmNfPMS1gH7eE5reENXXacp6ZcMuihDeAcWdx713Zb2gScqK1oikHXhyrYELU687yERoom8qKA89Z",
  "key34": "2Qz9tD4pSYdVSTZnJKMLjNHcX3sS6NcqoSi1g4avxp5cBoE3QyqNTzL2etadnbyc53wnMvHtMe38d6wFTt72HjJS"
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
