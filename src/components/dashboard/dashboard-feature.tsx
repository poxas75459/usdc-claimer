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
    "4mnrWy6jfiz54q1nXSkHPBq1Ez5RBiVhQvhLmYJWtLWC1NSRaxv2JLBR62FiNJGn1R5EPFjnkSCbYZZX6q5QhAXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VVLjgaXLYZRQnZ5vYQsRiMeK9wFTSmjaJz5Qkb5sHhRu8ebbTXqgcaoiKu4sdoB3HNDAGdieew6YYGsK8zC4Wdw",
  "key1": "4ErwFyuCkNFVYNa5VymDpK1rb8BMfzjpjeCqbT52baBaUYb87Y3yDxGGU9imxYjCr1HbYk5hLd33siSGF6WXr5Bw",
  "key2": "5uUJeLoK9CvEiUUA1cZBB9rdK8FD8jLXQm4rjiMMfTzY9oczBt3sTsyJpJmq43hvW48Pc84RxFDLvKi66fD75fok",
  "key3": "5vEic5asr1HsJway5aKJPNrGybRUSV7P52AtY6s8tDw14tAWRmFs5XD2wh6tzLAie4ZKEXjB5SENPi4rWf4AAJXE",
  "key4": "4L43SLsBVeGsy8fCmhf87igBL9Mgi6858tcMz22LA3cEWqxjbM9qKphaggZJcfqWN6d8rApLL1H7Dr78k7WKALUo",
  "key5": "2J51P5QEtYNABiqfvRjyZTy3HcyW2wKrbxccE68RBRHt9F9o3YsYaw5ebFLs7u6shvfLByNVPFDnHQ46r6KEkH7s",
  "key6": "HbjsnRL7fZYCuvXsRZWfbXUzp2ZeGecnkuJkRUzL3KgRHfy5zyvK8CKVkBaRCa3edAwRsgWUXFdoVvUNGXcewAo",
  "key7": "45ps8CYeb9T5Xod9gqGrdrNQZbkRZzhXYPqRSHBZzeWVigWpmM2qrA54Dsxq3geKhJDQDRWdVzhGn1Fzc8L2aj4F",
  "key8": "3AwW1xpdW7qS4d6qseEFV4gjBL3c58zCTPhW7Q12kdigSNPowxp4Y7qFVHajrxJFv7VTvACPdcfRjJViG6uLThq5",
  "key9": "3hbLcrCePHdKD2x2ftGPB4bJYTZjgB77raghmDFTezzT1Z7WrcWcSCahqZp4sSVXbMYJYgCXd2vviDdgeYiLTTyU",
  "key10": "jwVdNbrv8JhdRioFD5bPC4cX26b99LVMcZG4z5HpHvRMzZxREWyjHZKEqfonHvHzxmhVEr7CLMYnQAMpbuitS3g",
  "key11": "4zfL7CmT8k9mQaJhzzbuPAoXEPdvRfiL6LjXvoJECugAJY8ZS1uB3SCxt8TN8m1qq5Ugtni5XbMFo3tAbuUKFiFJ",
  "key12": "2FMTpe28MDomvneYUqx8j7MtyEcydWLUQud8FA6nvHuBsAb7B4p4xbTgquAqWRU2SZMLs7MVP74sU1HRBsZmEzAT",
  "key13": "5txZShpmASwywnL6Gqy68WFiV7UvC13VMtD4JiCcDM74KjcfDVg7ZEoeCdDNfB4ML2CHUNzdaAGC9w5RLpzcKRJz",
  "key14": "5tZWjMotk9agJ3U1yaLcBxDybQxA6tV56Ft5oDbgBz2dkiDzAoANSBcyDDbd3nLUB3nagtKerLx4P517stKhJJU7",
  "key15": "zxVp2Riv8YJcmifUQHPfNQLXD6Ptnf2qY4woty5fETwuAeY9V5JbGEMc8knvs1FvzZK8Q6BEnquZ4LgYLwzcVwF",
  "key16": "4VeZquns5LBU6WhyBFHzoo5UEL7S3gshF9nepRCJH48KmsXYnjYg1kRf3PruJFkX6jok5ToRhgYUsVSnFsjwWsyB",
  "key17": "2EvePkv7AY7MHTAy5csh5xKe1mJ3snDpvsKBCUSfLs8T1SmMpyR4CjLTLyLFFABuT8qopiXFYir3ex7ARZ8FEeLY",
  "key18": "3kpNZfzoxsTG3jr4P3SjAVfa43XYniD8raJAmkzxr1ScoDRLpfArLDgieDPMRvSRiT2SxxUDd2dxgnAw1HdnCie3",
  "key19": "59woBv7dhmPkRyAJzbqaWDYmMZpWf4dwst31SkSrH9Xexijs5VmbqFRfZjBuspDmqYGyFUsatMSMPzj7XobfUK3s",
  "key20": "22CcLDE9dWnLd6xikaVfEQvFd3sGynFXkhJajLHzzxHFc2584Zc3J6ZFusn6h4P1MHZNBFYEPESyectYPBXWjNfe",
  "key21": "5uztV45y789NybhS3YRZJ3F8M52v892ei7YD2arXN6yv8JC1WoMUQZBGSdLZrPtGR7vRjaBEbX7JJFKLpw5KohsW",
  "key22": "2zBFdbVuSXQahAYMdmNXx9ZRNpPtHJwmYC7MF9uwZCJLkDq6AE5UzJyVRXNvQCG84NbRPfwAf4jj4qMJMYxE5t5y",
  "key23": "5SdzUUHjxHekj9dQCY66Gv344jKz4Muxh9mMJH5Y9PhmQtCGxQTeTWwkfmNzrjuvjCTVDANS2wLso6eAWNtDtZ8a",
  "key24": "4m9cs1PRahbZgK7aov3o2SGxocJDedT76RhKGbSg9VPDWjGCKvAfki86rtFRG2MkRvUWoSvNY33HCSZTFa8BoqnN",
  "key25": "G2Ssoj8FKGspTdBHrSQtKCRQi45rzszbRQjtY9Z9ujsURhKT7aWm3NFUEybPTJZzbf1ZST9T6EPpc7KzVNFcuV9",
  "key26": "su4emJ6rN3Ss2yyW4TCsNcqEPHUn9gGtQ4C4gFypxuxDUFjunScG1mbWwTEXAg2Uo5uD4PDLf7eU8RMNWekvyZ8",
  "key27": "2vuJtceetvkAXEMM6N4pbjiGdMJFdZNVr5yrhHKZyLYSxmJizo3DC9pGm4qLQHUegTwpTXWbpBT7Jb2e8KyaytsM",
  "key28": "5qFSethqzMoZRC9i1qTCZg5eCJk685SynsKXWH4zJkZkmcDuUmNhdCusHY5SagTFzuLfXczbyfJwt5NneFVaQgjb",
  "key29": "53fK2vPwmAYPeZJiLQVyHq3x6km1QkNC75P6QwoVQEn9qDst5q3DY8gfqAUYXG684jp8wqKR4nLbYvfmy9sYsoqK",
  "key30": "4tgmLDZu2ENJZsnDbaADnDHz2mfRp6t1kPJXfMoJmQxSoszurwcJUWdzXa1dkTjidG6V6Za87wPQ7QFnw7tL1qDB",
  "key31": "2fJ67875fwtNCDpmYprqRQrF7N1sbhrBxLftNZQKt3MsdZYS84CYMeVj1m9uJ9tL8VPbH6ARP9awMqw5BMSgEA5L",
  "key32": "4CidRSfMTBjzGp9p6Ds7F2okAW9RxAYhSHA1EbEbFeazhhDmVfCCKAXpip3eZo1NfhmkMFqELvmCQMisbxtaSuus",
  "key33": "66C6ycmPB7BNi6aHGrRs3WGTmEQwvTe6WLFnD9PYEpvNqGWoAFcBVxLUwVVUCCLqttcacWm5K8tmrXqotKV5DiR3",
  "key34": "4tWSTPnWwufYCmEau6uGRypBYjmC2HqLnd5PjKynd2Sa6HPbDe2ygW7mcbXMPSx1zCYwGuipnf1tPiqiZjtFxeEP",
  "key35": "5zLoR1WmDhBSy3Sqrid8x3fUKXpYdeyjKo2qaxMQoC6G7LfFxPKZo969Z4DsedfdvZ7tEx5UYg9D2VkMruuuwjE9"
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
