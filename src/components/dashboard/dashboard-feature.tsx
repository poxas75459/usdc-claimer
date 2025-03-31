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
    "ZGeciRSv3SGvLPUYR4ViGL96LVKKYL3xFk586RaL4bMKcvKXc2S8Mre8iffpWJYYC5RkJq5nBBboB79fG5Vie95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n83kzBWq4HxcXCVRyudjt4Vdg49ZUycxC2UrjHLMPdnq3t7kPXZVLhUoJkXAvgaSBmJA86td454c3agw8gsfGjL",
  "key1": "3FfeRTEnfj1BPZoaZzH5R3L4Y96gRr5WARNUWy2G3q3iBC2Hq3QumTCN53bGSh3rDDRDs39c79SPBCFyv77iMk5R",
  "key2": "3EQynZLN6Ay1EJbaDNytru4FHBKB6bjNrU9WSnZLYjfrcpkc5aXeMcXYKqE9y3Rk1uio9BwJS4z7o7dYMCA36qnF",
  "key3": "jJjmtpz1Nf3yvuAJHGYA3KUNaUpMj3Dsf18RsciVthJyggWxsznkLcJtSHphEHV3nxXVzdnggyo2cjSqbsMi5YU",
  "key4": "4rBZDC9ykT1Wa4ddCyMndG3esKcYysKsEH93tCTcgn5GDDsDqwFGuyq2KHkDmicJgFavQvuRnuWaucPKvG9ZmTL1",
  "key5": "tMa3PD4qaVNtoDKjrTguCK9jqxauEAtvrUvCMpXpqLQo5XAZXjsU3RQJQYTnoQeyycLgPVzEyx5AkEEzy6RAg8D",
  "key6": "2f4EnmT3BcHV4REKcgJLAWVGB8uFsSBjpuGXC6T7uUw1Lq1nwpWq8am3ayijePmedDUm23gFsG4xpdjnUvGyVC66",
  "key7": "61E2y9Utd92DhcQUGXcarqMYKY5uXwTP6XvV9FmK4taMU73QNvAihuzbUYBPZwfATANcAg5ZxkNsePVwcSTGoZWp",
  "key8": "2L1ias4n1RtKkDkQehVxmSyD6mncnUTNEHt2FmfpNjXWidKvQR7guectE5zGQuNsMCM8iw7aoXojXDxha5TRWqHC",
  "key9": "4EVxsXfbD9KQ6sbzraNYwkDqyGunUfReF4xsDXTsFQofcor1C8uPABFZk77ifV672QMXZ4TTyTjTLb8FfP3sMA2m",
  "key10": "2qjp5pJZEWV9sjtJUzTsehH7eaeqqUKr4DHBZAHpxbDosABebJCbA5ijvtF4KQy3nUKRjGFJE2j3st2jYccsaNwA",
  "key11": "7Uh25AymXgar9EG9BrntT31jwayMHQKWtKBZ26vTCdCAghHyNtLwHK3o813MGqVcSW4dYuDYFKLrAkUHiEtCXmQ",
  "key12": "5wiG5iPWVCuEp5WpwDmqedR34BuM3AahCZhkZ7WEQDQSMbwwgrJNT9KR63ojtyPtFU2yq3rJqmNMYiHTpRcpK5Yx",
  "key13": "1v63Yz6XSvR58nFEpD4V7iZq9oGrnH7RdxWUZBzUv7n7NNS14cQ65xWjtDRHba1jN4mHRvGQHY6GmN5SmBrgy5t",
  "key14": "5htsxZcrWGsbq1ZdQH48CnAKwD6ou3jFaVhvap5RjH1QTVgSnHmKJqi1kuVTHq3LJe4ccZLeNXHsAbh12SUw8nA6",
  "key15": "2wcmQggVFH3muuLY8qN8KmtnMFgMhmGR1AGo9r2JU8hnyEhJT1ZgSMG3msr37zhdd3k7StJzH7UuvB53JUycDD9s",
  "key16": "3ak9vkbCqCsG249JXoePr7zuPLKNAkbMcZifxgtkLm5mFbnyDz2juFbgbHJGzyuX6Ch1xvrGZntmktMRSJY6LeHS",
  "key17": "2JWMHZZZf4M93Vh3JJwT5eKNa4yBw6iXUwS92DeG7XK7putgYZc8JiHGwceZLFRab4zwJq2995w2uprBE2rzmq5G",
  "key18": "31ccqavTN4TyS7dU7WGH5j13SyJTwigQSGd1uR82TCk4AQUJe2VrdoouFWv8MWpaxZxhP5WmUYkxaC1Nf8ZF2Tbs",
  "key19": "4urgpPY1Cv4EuJ4VgvB46BcopoFddjzhKKPVAuie9TyMR7kybwbZBbCAjb6qC1Tx4V8LRBW4PLJVhk4BVbJVr8ya",
  "key20": "tEjoHqcZtrCVn7Nw7f5vrtxaRk9nCoB8PFrgGVdPFegUB6fk5mgMFFwZ9LScvYTSfY5j854BjsTRRFC7otQz91Y",
  "key21": "yNRcNjES3ADuXgwkHCZRn1mxCRzyPE5K7xxkSUCzApYTaXDvrHBnpWt75S1h6T2ZL53w5QPMfYjoEPr1PyAzmPv",
  "key22": "5652e6B1F9j4ffJ8CFh2hmeowEWiUfehaVQqRJ5D2LemRKCxLYzeggHAdd4EaAVjq22LVLeTPv4716peZ6qAzTeS",
  "key23": "FYF174TuiN6KKjFF2EbqWC1qmTZeBV9CXASMsu7nWJfHnGBP94GFhM3TpAqvPySMDiUrx4L8mZsrCb2TLyGFGyb",
  "key24": "5cYviTpAYJD4G33fdVA7tJ6ugCkbMgcbTLBqfuviqVq54feWJxFbZMYx6dgctXJdWHzadppeBKeEp6bE861DjU3d",
  "key25": "4YBXktQuYdUkUS8KLtYtxgWEuPErDKGGnFUR17BXzQhyyUSBcCfiThfPZ6ijrWnL9CazcfpRJpAva6VB45fabG5o",
  "key26": "3ddWBnLFkUM62FJDZrS4x7BmL8VURwM9idk3JdtqsdT6rzwAF7EJkgPeqtLYNXGXmya1Zv8F17Snaihw5Ngc4sTf",
  "key27": "4Zbk688pGDVGdznq7Vbp3RAAiEf6w88q7VuN8fT8gRkep1GECgp2M9hZxESQieYNFimbAncqN77Up9GZxnbfC2PV",
  "key28": "29qiRCeX3T5DpC1Ko6v5J5GVRi843HnQkXRd6QCddRZFRFCN2UYu5VQ215j5xBciVqgPDypqJ1ctiJmrPRU75qQa",
  "key29": "4oSwQUZEXXMRweBvMvSCAbh6Emhm4kNPKc83dXgjwunKoGVhzG6e7N7g3QUjYuyGfzzrNNVwNBYk5aKR8LLKPqLr",
  "key30": "43zG3JdEt5Lery4jNJqjJzNHe8MjSDXvmtmvrSkbQdxqYpMZKmHAcmGZqBFLqAocrF7fH5qZTQ1efg2jtVFSpZH3",
  "key31": "5XCDckw3rAVsgP8YhKdA3WrSvoVNNeDDsG77giaJfWgrt6gBTfgDURmxihemb1zz3C8TTNaLiWjAUEejaR4b7CaS",
  "key32": "bQG9Qj3qNDKtWE82jLCtRm6pyCBAgYjMwRSefzbQiqi5N748QFms1n9vFjbCo6rf3oix3yJR24dN381VtQVypgT",
  "key33": "5JAYzKw5BncEDvGXctSPFxe6TjLW5BncQfuHvsP9azACt6NUUWyctXjxCAAcRMhgJDqPQ5AWci69TaHyyW2fXz7E"
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
