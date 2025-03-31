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
    "3JgwtoVVZiNsQmNik6WiL9yfW16kZtbGedpPyAk3FsdFuqZ4WD69jL9ytDcPtdQF7ijy2G7vdhEVB6ijABNn82Gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j9kRonPMDTq61Le2qBBThBUoEcuV8a3wiwyb85U2FraZaNsZceD1qMRjJgMLAWv74q9TEpTMPjpxmmHgAcHo3mj",
  "key1": "22HXoRfBwW3c5QzDvQFxFtveaxZnKi65aaBQYcZ3g9DukTtVVRQYfgyzaFoA69x4AnZoCD5QtzcDwf1VhxWzvETV",
  "key2": "caQBX69xKMdGG9ca5rsLgAa8FCmmS7zJ5zQgqkFZrsNLCxARAGcg3e1SQeNnJNGUyfZTyvx5kz9mZLk2QMqoXUA",
  "key3": "PhKZ2fvt8ooSgVcQN8xRjWj7RrkLMkSTkAPR3H34bspxgXucD69JXYBmcbWmjNvzYGchSkeZV1ce8PvogxHYmNk",
  "key4": "35uyAd3jbXDLzTjwoEygdworN77EK5apnEyBRA7ieC3ygD89TTPaRzPmHc3LHTpxp9sd1cZfqzU3KRSGzeFjH67e",
  "key5": "4DpchAd2v9kUdcusVmsQU8rrdqqSN6yoAsiPkWbsD9DD2ur35TuNKP9LjCXTDj9A3keBNGNy7kXsG3FgvX17DEDe",
  "key6": "5mBaSXFYmS1N4Bua8p2JFmJpfnCQkhCqHFZyjBaCkMmt6ipNS5a2KGkDj7pPy1cbmYcUwNfx2HNgwMDsML4c6Yeg",
  "key7": "1H7esKtYu9fkR6T1yKhDUGLbk8i55Z24VSEMXGR3YhkzXnADAUhuRE5w3zkSBeEiegm1oL5gopuG3LhUqWbAdk6",
  "key8": "4VH5TBpArfSc11EGsqWsKuvPFNCm9VAYbmRwh9xHnRJu4iXdkCC8W7abEApxj6KEXuQY5QwyL6w1vAHdA3gG82z5",
  "key9": "EEH4HPmJvRY8mLHYMGgPky38abY1YWJg8GD9RSFJnwmMwU15go7v62bHRhXNP4q5Q9bKrWbARbSdyzgYa3SCyb9",
  "key10": "3T3RPRXxsgqzT7CvpKM4jPnQM2gyvwbQJ756Nw9q9GELdiJTJqFKdRiQKZAT34oXN49AnCBPVUHYETzwS6dXoJMz",
  "key11": "4A98B2vZf92i2SvdyN1g3E9bEtzD2swLvirY1C3k6v2626jL9bNhfkaYbV6FiVtjQvYnhh3JHWBXXTvsNpCmSZVK",
  "key12": "3k73zQSoFgnvud2U7UnGw8B4vDoVwmp5cEAcPEmYrTnAMEyCVyvVCsVjPyp8cRSzizbVBWphGhPwC4ncNmkoyhMr",
  "key13": "39tpno9UuRVwHAgyEm5SsntpLGQfYY6RJnMeZKfyaMcUzxB1XDUBVdHEwsxxw4qEh3FsUg7jcqQsvQALn1KtP94x",
  "key14": "9c7GKngruSQ6QkDb1RdUXLmPNXZyRaM7qikaGC8qpFmEUs4BRqWWdEy36CYL36Savwqxjq2kDSHz9bS5Zcmzn7f",
  "key15": "2dzvsVMseGQBBJ5PSAADZLra8nCnjZur8fh9yf5Dfurp91MVGeAeiZt3fkjCEQzFLGAzpW91FUHfaYvzxr3nMSPj",
  "key16": "2yPpdSkBnoi6e9pGAG4jeF8WRQBgJ6typZj1W9uNJ7d4gCuAuzUo9y28HumTtv7NyEVEDD1e4MSpRvAXNREPfD8w",
  "key17": "3Rx1PfqLSCMQyTR9Fptu8d34kh1GbPxAhVY9ZR2CQAGPsW1Q7aZ21qyR2bTrBoumvP1BiM13XVNgQGqybX1WKnLw",
  "key18": "4shH5puKh8ioQj5aFjh4Fu1BvBiD4rFvQyo62qZHg5ZaQEFu3x4g1bEYnaBKo86rBgSbBkSUQ2ZQxJeNMP38pcHJ",
  "key19": "Ayng5ZhMQjXGEsQTpAYsWu3EebQRVr9GrKHpTbnQ5YoCWX2AqtzXY6XdXJq4hzdwN6hsgYxxGKUyxprUtnEHku9",
  "key20": "2JEJYEDicsPmuZhV43RDq3AMCdJ1FVvhU7ZFHysVaDEnCTi2vD6S8H6fRyAeozzsLXHEQp7U56nEGGKC78aouLFq",
  "key21": "W2DcoBAXYfiAwL1jBNaCjg8AHAfUqDuZHaNfY1vLf7gbNMYhBnwpUgUkg4GykHixE4nCr4Vq9t8KNxBt28CyjCJ",
  "key22": "6pPnUZWQeH3fdo22E7mGmgefk9WonJVS96ZZ8SExdYX3PLuJazW4CmuRkvJQnHaJaZyQHDeVvQQyyfSkrmyLVKU",
  "key23": "2oCZ33KTceAU6ba2ZBPFQHaxiwcycTLLnXgLN6DczYvEWuDwKNKtP85ygkLLyEjhgerxLtjD6mq8QcmgLX9ufGHD",
  "key24": "31c3q4w1d7DtSq9CpzoTFWpV9SGHgLtSNoL9T2x28AXmfuUhHf1CqNTLyWNgNTm1y1vwAeeXSvpyAt3SA44GgEJB",
  "key25": "gE1b3VydLmAKYdLZuxrvuMXsagAKyVNU3bzJzfsMvzGkwjUKxeZk2vNR64VsNBr9NQoJ35ZKPH3bsoRFhETE8ce",
  "key26": "47GqGvt4vL2KmxcxCtPCYaY3YcWg43fE6uzz6KisTD9WSs9rUdYajboWGmVfXdG9hKdNJCbztfDACKV7fdrbU67b",
  "key27": "3yYfkcp9L512CcJ1VxtA8aVZqJZcAgQdgQw6NBc9mn2dWcdUWJ2GouR8WYck4H2tCwLD3FPu1itw7BVXUK95AF9Z",
  "key28": "pmB57s1YNiVSTS6pdGa9sHKU6XMEYzh2SaxUVWiNuVbJVKGUuMbcHAr59TgYGBeXUEEGep6KapfHbgBYoZnjDvx",
  "key29": "zQ72fTFSpAGCR9HqeHjNSzcFLuwUT8DqM8mBZ1S1Am5fJEYHtn4KVpXYuvBEjaMHsNdrSdSVUNgoELbZhYKELVf",
  "key30": "4BYMvZafoSMJNfo7mG1bUAgoUgQppMe44QrV55sLktTVtTZGzxiYigMYy7kywdxnk5nk5RH919ymX1Cec7B3wENF",
  "key31": "5LqMFJuAGyKZuGfGfsoTUibxDWJv3LPz6c14mB3A7MVi7A4FzgrxcDNQebpkWboPho4J1RZcLf97hEby4gFyPqoe",
  "key32": "2QWTkDvL4dKPBmH72CfR1YTe8pkcut6xyADMgTxDScajxBdUaXuZGpZZgR9kmrhWxz7HN6D1MkAbKhNxhHzT67ox",
  "key33": "3uU4e6L82dQDL5w6Y3hTfcPnMGkkEsmixVg39og8siRevFfr3GrG9MPUCpP7htwe6R8oJWsS86VYaxckm55x7aND",
  "key34": "55S6pgHrgcAQ53BhPJsheKcqd3zdG9VwMeEyZJrDJE6rTvc95R2d18YzEwrfKiJjqGhTp4J5rDPgoXGtB6vf17w6",
  "key35": "eAG59LzxcNGBUvMZNXM6t95b2EFprSio3eo93FLGgXZVv19G88ZxWT8D9kBD9GVXp56wqy3gEf23P7MRqKA73yE",
  "key36": "4kLPJqidt2mSjcosDfXvazMojFBKR6huG72AW56NSvv1n8rWyhF1gihMof5yr1XiTfMvsTTZHbe68M7CXqt6ZM1S",
  "key37": "4g2pTWd7RPgBaQzvm53pqqSFmPJb5nKvUhKXD9WeZjkwEmutjVb6VyzHCu8rZnQcgazE6UB7hS6wsBM6NzL2bcNk",
  "key38": "3hcjwugPnGY3noNQCkkHJGPydEWmkTLP2sGxxJAurCQ9yudxCQ4V4KJutqax1FhB1nPi2jRkWo1Xmx6Rz27RXBpc"
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
