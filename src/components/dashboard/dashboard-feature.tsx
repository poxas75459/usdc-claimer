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
    "RueZV2gA3vXS7U6SqRxfy9CRt6zLU8gNmtKb7Sk2nxoEeLZgea8ycvfAT2BS7i9SfP1F1u6oGEkrcFxXhR1f6rF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pbBnZGGgcXyfYevLw2koyfWPnh6fbR2FzvdffUj3CohNNXa2dkBrpHnS51oCs64zJsPHE6pBYD2vUEV1gqknEms",
  "key1": "4X7AHB1GSEvN8etzJedopVbBr8kH2VMGnST8kDCLS6Qh9qci8jVPhSWy8GT7tqW4o79nAmH763F8s5QeVgzd9ey4",
  "key2": "3VSG6Nhjbh5bGbAi6RPJEZi4dAX6sEiC5NWxuTnwUPeFwXG4TtkMQ3BcKaSnE6NGqtFg5NLhp9oq2LEpoLra5p2b",
  "key3": "5dNZxUS6RR2hV7EKnYd4ysBcPGNWfBbRBurBRuEKg2AczUs9gifJnM1CYQ3ySfLC66nb5UtdGbjouddJZn3CtzSS",
  "key4": "5kJzRiXNP7rM1BTT9Ed6fi3PDQDZhKQp4pvBvRSNLWpcu29R6RZDoR3tmXnjpfvbEKjNMZ64ksZj2orHeukFzmGP",
  "key5": "mphUyGnHbiD1SsMmG8GeQUyFWUhqnkRBxGPCvTiebk4fSU3LbkJBvdYE3U6txJrKZpTYkhxM3uMS7ryNtEB35VM",
  "key6": "VeKHVfgujcxqyGvvt8w6uEm2bfxiNbNZoGxX4QQxWeFWFFBKLEYbVTxQPyiUiCWvq5gwhFPer9KTn5jzBdRyAme",
  "key7": "5vRddo2Yfa7Y4BLfNyvvdk6zxxX7YaY3C2Hu6t1UwGmMC1ip6MMoh43fvWaZGjZmd4fUkd1cg7mnv9bNSQKJMtTv",
  "key8": "4ModEYohoKW26zKrQii7t8pxGpqjygXHzMccEJv8pjdApyuS8w7V8PwNGqdoCB7VfN6HdSUrymVc43tWDmufTH5P",
  "key9": "3wXE9fjapr7Gv17DaFc7fyoCL5DEiUDsvyWqngWtL1UrWu7dwyZncyYjhpZCTHDN35d5XyD6s3p75zFUAAbaJB9w",
  "key10": "3nFkyaHNF1nzrLYc57sq9xVLf39ssbfb76GqTXXUXpsAzJPjYxbjprmk2rAgBmdwxqi2i4wHU1VrAq7BjLtgqm29",
  "key11": "3GqipcfCNpGa3LAcYY68VybayeSwD9WisYHzcq1Z24wyKLedk9CkpAf7bQG1xYgF1oBnjhPYaPFM98Pvjp2ZKaTN",
  "key12": "HP2QdtTE4XADKnVQJ5Sg3qdC6jZPjRwu4sB8wrrFF7V3brSKwA4abrJ6msn7hVz47Y5gmWiyE5ahVx3ESn6zncB",
  "key13": "4oKxDmW57Dk9oUxoskFWwJuYQgA483tLcjGFoJ6QAkKvay7BtjvEH4PxvZcjdKcSxH24Ebx83NBu8fkF6ezJEECE",
  "key14": "64ECfn2UmfeS3PVSxZTvrK9J8gzAwdhR7oS8hoduzTaPTmmwGzbLAgb4NdQTdVzzzPaUCHBrpjFJbpgAHx5DuRbG",
  "key15": "mJsRWFFcaVpkE9q7w6ZaD6QeUKEVSmqABma51pCAhp9Wjjx5K773aENLCtTFi5NQXcKBQ5TNrAWzBhDJ6K2WZsM",
  "key16": "29URKXnn9UMqtEGDFruqrqvwCL4wYivFMUqo4wVGLs74WDPPtZFbpr2Q125xNXZdcNTzsgofHH3u5PjXX5YvndkD",
  "key17": "5VZJMg89zFfSncFeWQXknu4EhCyRn4kw5seUv3ZS9yVnZJyBg9rYcuK1HqGDPCngJGWYZmhHKiUUQXDXdDHSEcb4",
  "key18": "5d2b2ew5M4mAd2XZvvQHrPyM7M4wSDBikQxQtPszBWuAGMWT9d8MLnbrNtqi8qVy3oYo7kj6qdJrqoeCULhWeEgT",
  "key19": "5qWgjRG5cgxwGiEdAiNpAdvqVcbjusEXYijash2D9MkRijzBwBZcMRh3S1Paa7ibvRzC7Y5PWw8zoGWsCLEZU9Hd",
  "key20": "5bB6zYJtQcPbeeMgNL2Z6FzzZWdyow3prquMXFkxaCMpSaqMrYWWSN3KY638pBfqivsxxiEMQzKbYuzBMJK2YvPf",
  "key21": "4zyBNyXb9zpKE1KPx9JwhybBnSzEKZxGAj1pzeRL3pBj5bsfRgJtBpSMYJghUz5D12p9xCEuGg5AeNGJMytoks4k",
  "key22": "jPTJY77dWN9Hs9mC4jrKdCVjan67eVcSRi4JE93zzpi21yfj6Fwuz6xkHSTZqnAoEzsoVt6ywj7i6uN2HDWkt3s",
  "key23": "N2QYp4W2v2sL4r9xH7SpCmFcY44K5DiU6pXJD8Tn5oosuf6h3ReFogjSNSd11NDtuSw54EwiYbmCGifzX7KWgcB",
  "key24": "4qCgykN9RFosEaGZuYdtKsUaLoB89EM4vj4k2zXSo8hMK7cDqkreiNDH67RurQTW4hwN8ZPWF98fSVFuoT8eHZd3",
  "key25": "k4iQTtPUurXooqz7TYCva6B4Tif3sUozmmhURo4HgzXGT5ra3aRLq48HujFmEioMUAUiEejvjvHt38v4j6Q7ZLa",
  "key26": "4LAhCJD4TLDBzXxQ3fBGj5EnkDzJgTkVxoShuqcgVK1mnrpqQVCM7UktACNMwwMaRxxvVVBeyUAajvk1uu46C1dh",
  "key27": "LHhfT6VUeL4o5Vcg8Qg16cG9twrBo9Q2kQqp8p7nYnrr2P5MeExiiit8UmRAXdfUa7VsoD2evWL86RpzoxtY6c9",
  "key28": "5QoDhYJKJ8zMW3YjG7tg72AwZAvHZQiRp7M97NMLMKjz8AnrehCMuktDNRSxm4v5ZuADjYvT83MwAaMxgPu7UXdG",
  "key29": "3etL9ENhJHZwEhvapwJT9B9AG9uW3zH2U4uiuSB2RXEdvgiViCS2EGEN6yo3UdBDH4ahJ8ioVPq9Wjin3qfqMtkC",
  "key30": "5BbW81jJ4kaUKffcNxa2NDxF6v7sbFKHthcHPZqCi5fDApfX9rTeirZCiBma65juoTWMVJLMyNh1ADy8qQ9xtDGS",
  "key31": "519y59xHMM7JUpQ8AZQGypDeDKecd83jqe9dySUVyMYu95ojxATf6Lgny8T7Mq3cE6fbHkhzBMcWLGqitrhj4Jnc",
  "key32": "4oDvfiQeNEC17HG5hrzEx3hgxbRb432uMPaGD9XLAsJnpM6raLPKVnWaUmDVUF6z7SjPbqEC48tNxGVcxusSnKhs",
  "key33": "5aXHTmxf5a8N4ZRBWJE8fxDa7h3sG4BmPBKVFcZvztmnDCip6BHdqVcuhE6SHqRyHWHHXh7m4hyPmX5szbqK5D1e",
  "key34": "3X3MeWkKonyEuySMcnrgTdrg75hiaMwTvPJNRaU1GogDuvyCjharAh6Q16QMeoQQ5pHobPid27iKRdsdjQszuZVM",
  "key35": "3H7SVRRhghwwZH3W1hB6fawqANXKnFEMrzrG1MAdp7jRLir3H4UAc7j3wUYEupuyz1N7HMGn9CG4Qzp8P5NNvM4z",
  "key36": "5W8Mbs1F23Q2xvo756hVjzuxf3g1qXJUsGZCKwC8Y6RYPVNqVkvrKhpgGEza3EUd7k1h4M4L34bbUHAmL3X7KGSx",
  "key37": "4RChSqyrE14MfmDY2jGieJ8dhetiwfT5HvwpbGf2bSz2pLtSnZPL8hbEk7RWoWriqyNyRKgfDLCvP3sVSQ1Giuhy"
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
