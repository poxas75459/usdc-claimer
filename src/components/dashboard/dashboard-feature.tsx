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
    "5TTejXjFAhVd33YqEjxgDTDCZn2FQNAVJhfTGNLu55NU9berfREZfndDahkRACS1B12i9WikbXhGdqmRjMCjRTrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oxieR2mxhXZEhL5shLhAkKpXE4TGLgUVRZT522feHSwGkjCFRA4An1doUvxzDvniQUwtpeus5dVdG2gMoXwGTQs",
  "key1": "65bMVixLdpsqDw3hRd5r3Zk6X3utE5xL9Q26z25UM3tA81iC6hwR6BLo2du7iMTtyHyvdmYbNDQYnzcBrY6UShq5",
  "key2": "3cMXraSVUdeCC5qgoCj7oFNfBM7TYYsECUMq2isqmPobjsbQ9fkjB2Z9T6Ux4KKDToS4NVqTeooUqAPnh1hG5SBH",
  "key3": "4uDVZJex2ZtwbZqg12YBQC5KobYPTvDDyK2xcAB74d5UrnKC4q6WWzBeg8EyWh3NNSLYb7qLwFLE8FCKZwzdUxA",
  "key4": "k6BTq9MuZmaXidiviSnb7fNjA836NZfmvDeiQxLfPjgfc7XGLBiD15TCAe8xQBTsQvKgSHUws7mfej69CfYp5mP",
  "key5": "5DGH2Rzpd9M6uU4JK5wyGdU3bmDtotdT6pN6nzr8c6bau2mMnRxc4UqdDevy2WpgfXuZhE8REnK7wFqfTBmeYgvg",
  "key6": "2Y9nVJdadmtv11eU5Pnr3ZHpwbDChSZwoZRsfBJisM6gxKGNZTFfAhSSbfsWQ9mfgAoKwJyHpwdHAb8Tm1CMN8hT",
  "key7": "5oT8LtypBSjdtHbLeKkf7ekH7JBWnjotjLGVuUsKpmdDkcRM4netw2BzH7cEkRwfz3FHe9jDkroFFfpG7GaE24rn",
  "key8": "5WytzbLEyZf7GBt9eeo3vEMpWy918pL9b4Nq35yyTu1WKkKG56brh18RV3GiKYdNKyjgnskHpuFhVPQinjfViB5E",
  "key9": "5xhVgJ7VEwdBKFWLKbfst6rR7NLkdSgt3n8p5XHNn6nKddpo2hpyaLbFTh8dHh9N59SFSm7yzGQha3Kkc3AojBHt",
  "key10": "5tmE9vF2HcnDgyWkkZPytYA95jUtWrodqjf8RVYprbvYb3hoRTobuwyS477DKxhhwgMqL5o4CpKW922HMKbKqmNN",
  "key11": "4wKDQhMca3act2FsoHcLZc28HhoHtwLnipfvBcpXyienN3z7PHyngCCEzfMXkjqpU87GdFLqhQ467HsTeuSJZcYE",
  "key12": "oPexWBGHAvvd7xawJXjdvmJ1Nfi6s4xPu9Vv6Tr8qrat26jTsebZBSxD7xgVJiRZcCGdEymCqkYSxPqSFbZy6qF",
  "key13": "R42dTyH9wkK14XKENPRcFti88Nbvb2qwrBedq37F6TLYkNDWtJFZ58Ax298HyLnGzCpzEYRYxVciuBRiHwXpN5a",
  "key14": "2C6eRPrVrcbWLXUtjHfFW54p7BG5Y1npQBJrWE9q155i5S89ha8yEP2J56dpP8G4TqinZCXWN1V74jiVquwyNqPc",
  "key15": "3n626TTQA8VksgWPEUFJcA46hoquedqjTkj6XBqcevNqrCMrhvafaEg3PoZCZ9xdr5z6veB6kULP3WtWp95Lxo79",
  "key16": "54cfeYQnNq9Dv6Fps6qWqJbCJZpNDhKAba33FMbkpcSqTa26mtCKzRWN4KARWZ2nrD3w37XuxiD5dQV2fWoFSckk",
  "key17": "27PSXUEJ9gK8KxKF3NeZgqR8wrWmiXmiQ79kZfkVtcgh2WhieimS6cqwozRR9o6ErRj5oajTW2doevPsFPtyB1aN",
  "key18": "JiKhpfoWdtjFL11ayCCTafgygRxU1czNuagdcHA4yk3esUBKVxEYqmVJfRykNYVhcbeky2W6HFvQs2W2qQ5NYRp",
  "key19": "4yNDHzV1LaGJ4ofwqzUTqnkcsLrdVWf1A6wkFv25MDSEcymziA24qQhvfo6jvR522Vuo7jvV8T6CY8AoaUphd4c",
  "key20": "3EruGA2fFa6DS4fnQdntbSVV3UzxVvxNAc8Rmh9bPHk24ZkRFQW7cEcgrWuVdvV2NacTzF4aDcEsXvQ3BiXj7AT4",
  "key21": "3ZZ8rQc45aNDHvAfZE18cM2FLFSDoQaHYciMwA7BfhPUo4X4GmAsD9rFhwSrAPp9teDG6g4zPsCtjtPpqTBxbHjm",
  "key22": "4vJEUs4JdBisWXRsk651Fiw8eSE37zB9FgdpPZqVTFCS6GgMXLbtavAtiU6KPEh5cNS8DYGLzMN9wjcs39ZB4pbK",
  "key23": "ibEhtQpWNVEG3jC18z8aJpzhxZzR9rZABLBtUgyvTGZY9CsRn8XgmDZzeeVY15e5cxkyTtEvD7tVG3t5TpPRGCe",
  "key24": "3JznbSE9hHQVscfvfRsQ52pyzTsZtcV8UWVYMtt7Yja8QSyEp4wRmJwbgw3VPVxLkdcV5DDf1WfAr4sANjKghJfY",
  "key25": "MVZLQXaSKe7n6LoEqXZVz9hoK1b7uuERidPM1bEK3DRu1SLzZnLMWJ3tJbuWfbGgiJTsjwWCwn4kbynMyavoYP9",
  "key26": "2stPKhyZWafJv97puAU3hBFPp2nXo9i1zoFW7ModJVVceL3CkWEGyDqwsoBxqHcLNURoqB8kCD3xtspT91b6BdiH",
  "key27": "42cFP3FWviMYoAKnpJfq4G5ZtLwjdf6147HadwM1asTRKHnnQsFuQ3EufBd1eHnUL4tU3HBkJvpd6oxcTUwEeuce",
  "key28": "3N9azTKQWxTbtpdf6KTKj2DRAL83eCLbDY5SYjaNnoQ5h63og8qzzN531BiXJQyPcwfGK81YF9SiCxa9VozGsxki",
  "key29": "5KjGLa9KrTgA4UM7tfLFfkg1r6ithgbAjwBZDQodrFy5FkEQQ3bcLPJojLvS7wpQUR62DEcJG1pdCCpzVeCu5H3S",
  "key30": "41W8R424Bnr8LpmRs7PLysKQJ9FF5QqMLhyGKWezbYaoYQ7n11bYYKKPPPZwscVT1AZAa5EZpPnjJ8cim66aDup3",
  "key31": "4kfS9VAs6zZsWYAjZnee2yUjU77ixsrzc7GqJLvsLzmKqRVAZgBARK5jKJh8YtAggDujZXeGkiDwH98uPuVuv4dB",
  "key32": "4YfX8r3G8w7Le1267ZFzFSvHp94xysDJYK9qFqMcekk8V3cjkeUtTcRQGMPkDjVmybCMEwtmDY6ty8rzLGMbWtzh"
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
