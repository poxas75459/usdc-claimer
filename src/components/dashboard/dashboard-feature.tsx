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
    "2rvqiwhiVGgj1ZkrkjFDxWqNeWMeCFqt51syJXaXWbuTdxgnk4LRrQecJ3Yv2JmhQeyvCCYWvf3WREXLAPT4MZ61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P1TJiUW2FmLv4PxRz1RCirio5HcZj7quBJfED5viuWzGLkmhsQ7myGZWMSq3Tw6uGjvsbWDMSHwRZ9odHJDKL5z",
  "key1": "24cHA51tRP2uJuEJDgjRB9bskVMSy7b3YwnbhVQkr8AwXNdMQJtwp7Y4z8wuLs8RwCgQBQc6TnkooBuc1B1xMH1E",
  "key2": "5y4RAk1B9wMK215BTRpKcnFTn79pVSUQTR9YixCNJEM252PjrkZRYodsVh34BmFycptv255znx3jCUThNNnVHGrB",
  "key3": "537ueLS3QDMhEunvWsgKLxL8YhvTD5uXyMySHRnvv7KndpuhL3t6qDDT12UVJUU2bCmrqR9ufnyBTvutPE6VYQ9W",
  "key4": "3n6gSwab5wDgTYmfKhiLrarcBbuMSLrDKj7XzKSJhS3wH2SWk9Yc4MsNkQmaPdxKB8BKksVbrX5jKtT1wuoh4RN8",
  "key5": "2rPv8UYyZsyTDcqZEDACK5kUYKKqXbbgX7tv5NZpKayptuvht58vumkGEyZtzMPBd23ZEfdK54iurWrgKvuAQoyB",
  "key6": "4AUUmiVTMe4Kbq49RQPRxjZHT1TKFiY2q47Vmpmfn6HXoYH2jsZqm68gRVHvQvE8n4KE85Tsu7aWuwXkfGdwQEpt",
  "key7": "5yrXLNcdmVsZi65DivtBa3bxBeSJN4h94mrdfT4eYNBXGoMq3UuiLxemjSXLACuukASSMaKDoknEdy5AKXxVuY97",
  "key8": "2at7sC1uFMSMmQFbXS9XpMKL4g689wmroqqHedjgJTDUavoc1en4qYCJdXYfdjMBeu81Yf4F1NUThjRstGSCV732",
  "key9": "Umqiv2tBRPBW43pax9huFMnqhWdw95eB9uPKUyDUQ9SoWe6xLdrsNsRpjPYjkxxB4E9ovpAGrN3XBRuKeDT7GrP",
  "key10": "2S8rZQGwCWZYmjqhBrpannvBZoSyDY64DMXEoNKfZvpWuAiopN19Kk4Ke7R4W7etaDtYy8ACnesffUUfNrLi7MfB",
  "key11": "VBi1BaJybLszm58N5z1S8amzeizgdR6Na48goQ7htf7qyJi3P3o6zVZiSc2jMwZ4b8hJtL6Udd1La6gHHu7QJuN",
  "key12": "2q1TSaDK6XWzhGXXbd2SikvLPqkGgq6zuH19RLE8Zm9K79uTx67LwjFR1t72xhj67kQVZS3jzk5eAM5AypR8sXCm",
  "key13": "3GHCZLPtnS2KRWxD2b2vLLHrNrLqjQfDe8aY4t1qJ4H9oXACTzi5Dmf2nrZgJEDUBXLumteDCTfSL58QenqbnVtg",
  "key14": "2eF3yY6kEPhPN2NM1k6iRkqPbRT5gWxDAEmBdqc5nGUm5ecv33Ga7jgdBeDyEbAYiZpc9M5hcaYTmnyHNr57w2jQ",
  "key15": "3o1BfavW1hr9C8PvbUZptcEou1eG5MaxWAmvvSFCVtwFuBsYbXE1wySv7wx2iNTyoMoGFyBfhoZo7jZ9Q3JbXoRq",
  "key16": "2tACKeAnziEYT527VrTCoA4MjGsUEQyVratYmpxePk6kfQq44sDeKNZLLwDYwihn5aQZJM7W6QNNpG59R9oQAWqV",
  "key17": "5ZADGfbh6aot7yTRrF68xVMvpJ5HVajRVkkhc2HY4TBF5b9EqhLpAqHuyaQBJehZD1hiqfq4X1dLqnRxW8Em8Me7",
  "key18": "2Dzasmb11VCm5dbUEpMgXZVemLX9uKpcog2UXuHNxKnxNQAmsmxK7xRK1KJyHmAQnqAixekbBLaafNMaYimxUev6",
  "key19": "2uFdJirhpespPYuy3rgca7LFjFDxaxBw8T3wRAwQfhibeMdDPSqrwuRDtJxs78ZpcvD7ebBAqisTYv1sqWcqndKt",
  "key20": "3fjziNNjsVSKCmWfA27kmWBFPpf88P42SmoKGgBYNEgE8bMjFLuhQuEcVKp2Yn1BMa8syfNCWabehLVsUwti6FdH",
  "key21": "4uhwMfqW85Yjj7URSrwcjts7vgSWBLKPZaRg6TjScwj7YuPZ7mwECKakvsHY6LTSjSZjpf2iZRQ3ykdTqgWrSyR1",
  "key22": "4NkaqrdXTLLhy6BADMAsiHzn8dY5NxBVuPMFHSxN5Ag3UVV3bQTDa9cgAdV9QGRg5NtAZBumtw5nkNgstby35kGa",
  "key23": "3Aoc7DDd5rNa7km87HiieX9LdaozM5j7TdatRFBRKUx1k2hgbiLTaNgQqZGhVMTzoaJqUXqE7RHWtP1hqNrFB2D3",
  "key24": "4oYo49pYb4bgV3JfXHqWtm3MhB6So9P4rpHkwAUJDXuko9RpJAvpKdnm4hM7rFJo8UTJomTNwFtn1ys37SEm6Ba3",
  "key25": "PYgFRRzdqM8AJ81vRaNHywYVwrTDRC6hhjEf24c5BqXQpYhvU1fTA9D5UBaVdTJSv7r71rqJH4LtK7ahx9Q973d",
  "key26": "4YvjkBvYZSc9j7gF4BZwG5iwCrKbcYFGVBdpbMMoBr6s7oE1wqBfCgcLbxbH2mL7QEt7TbPwSGbaumdp36Wv9yNd",
  "key27": "5x1heE1akvbgu9cJz6HNzDnmGkx3V5DtuPrMMrgpLw78YmvyWng3AKKaqrF9Bq9Vmgx48Uqd42U1QN4LJ7rM96Mm",
  "key28": "nzDgvHu7J2oiub636rVUJESW8Xqx2RZrxpSVsBEHfg6PmYUhbjx75ezdVrFRm6L2L3XVKnAFM4yH9gaaaRBHCaG",
  "key29": "3EdWowkABmczFn3c1QB6LukLEggrVAZNYxHGqyi8mCRW4KnXTzjeAQxywKpt49i8L7BC9VUjXCuFVBsh2QZcWwSe"
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
