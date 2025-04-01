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
    "3H39zE3e8tDXA9rkj3jaSCbXujc1taFKyNCvLqL8w6pizU6Uw4Gcv9KvktsZWqLLmtsrDcxHtXw4gu6JGDafnZdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H6ktYjFpBZ5qrVw4GdXxkajRidePbEthkY8wZFBU2pJ5EXo1xdrtxZPCYH4tEsM4VJHCAfsuFVJxukLxt8JV4xd",
  "key1": "3mp5QSw654rWKfirid7SpVpSTLUZXxn6xLKrwbVRN7eD7g37fmfZT7GdtuhgYRAfQ87xndKaHvfXewsEvjtaSqwN",
  "key2": "46JTBaLBF4NvdMyCFUDEkhP2GB3jKqtCzGPyd4uKioSxFPCY88pjmEEHA9j8nPwkHNtFXsLU2gDMkkjeoSReE9XD",
  "key3": "5bqzwBrEJNPJtBPBPfMEBcKdRDegfWKXFpwLTQKSAAav4WEJ9vkLxcPdxH6HABVVJUQq8VZ1hHHqez47ndMXKVFY",
  "key4": "3kd6wUhRmuVBrC5NU1yuGwaCQvHKDFTXg42j79L4mUvVzomXSz9NXsB9UVuoBGv4b9y6cEovECgEoH7dzyGvmfAg",
  "key5": "25ovJaQefQvyjyEAsSYocYuCBL4JLPEkzwGCaX4Y6j1XbzXH768vm8mDXj9kXnBgXfzvhhEPVL4d8WYUTT3iPxcR",
  "key6": "29Q4sig8xAgRVHmqaBQYCoiAQvxRxYEV43GYJSP61zhvjzPYX3MAY4Zt8sqr75to4Ptger2iVXfU4tDxLS4VYd3v",
  "key7": "eQsVpMxwfETRJyE7EsJGBEzLm2JkWaDXqXUmK6itfGi9KCfs3J2TzgrDtgTP6aCfXQH7RtHBQHxfNMNjgou7tDN",
  "key8": "3oGHUmBg4cT2FqPwZtd34aCkcfii5W7uZq4HvjfKV4MaRkm5xfqScApdUtCjfwmpkNP3hk43361t97gyoDFt7f4Z",
  "key9": "PoZtqUpNcJnJjqPpZ5qcJSXzQ2bXDbR57Jvr1gxbPg5cUrS9U9sTmWqgXEtw41SpnUfVFVbmqLY74NbLYTGmsSU",
  "key10": "46pvvniRpNDPEnHZGtDT1Rtyk2xeKQWzeQcbjkSta6hUmioKs7stNFSpJFNt2FvxP6zJTBrEh8pAzTQS7ayuLseY",
  "key11": "3Zdh9ihcozfj3kmaFC4uU6s1rwMMQhQ8x6VdbmucnfXbAszKdgP33zJdceNceXFXXbLfW1kSTpSZz7SZsue9Qc9g",
  "key12": "5jwvCvmXMbPq2Coj9FNzyawR12vC1jGiXufPEDYtMiKorbh9CU8LNkW9Eukqi1djc9vsrfiCt1DHe1mUQHGCWCH7",
  "key13": "5zeL4c7CRGBQMWdCFejU8TQfYbQcFfHfH4bag3RGRnGh25YjsomHpiQYJdpDMKp6db5hYz6UbGdV62GQA9mvHR4j",
  "key14": "4CEFcLSYbStL8E1EwJrbxfFBvjMBF8XUMK2os1WiFaeSKnm665TWDrwjspqLMXZTBQfiqVvMDtuKvUDUhzvGWAbN",
  "key15": "5z8Hw8c6K286gnHAkGdKzERjR1KKwNf4mcvVzTGQABNPr5AacTitSxNx9GNFmV6nSW1xYPK1bGx5vt7YKdJpFf7Q",
  "key16": "66QcMNxkUHFkX9SEjVWP4LTgdWicJaCrStCpAMf8FTYDXCMuoZSrmpxY9Z9jcbCPiFHUhAbpJrNDtZXarKwkM4AU",
  "key17": "5H6e1bfGrDfj248RHzsutqagmn8udP3QaSDeEGZab1A22z6xdEmg1U3vpshrwfRHwHupuEskXF1ni3iePFd9jWii",
  "key18": "4pDy9Qtq39Np18qeM5RzTa22dVxg4aVE26uHGh6ZMPapecihr7ZPD6GPbtRczuTqE97H7cfkL5kSedgakF9dBhCt",
  "key19": "4W3K2XESnvQptDHqDhv8tLLU6eY3zXfEXHXKhsKn31tiPeQS2URNNFdnAZWJSUrofwZGzAkoRBVEuDnwdEh6JDMr",
  "key20": "4GrX8Xa6nJwRq2hTbmTvo8qGLdhy9jWFQvdDWRhooEgvJ5BBhek4CDxskFdRzL1wUeojPHD4Y4Lz4qDmQx7Sc59r",
  "key21": "5WZ2cq1YwyUZsV3ieWaC9phEtohJZD65mHjbkMu6sHrzKugTGVCExo5uESGjHKEiBv6VpsD43SZxSQ1Cshj5tUPK",
  "key22": "JeT31PdDMLxYb5NfkU68vvh4tD5KBphATcW8dms5ME6YeqHJUnV4jgJNEESnxkEWZV7tSvhQLizgnxBb6TMEts2",
  "key23": "5aeqUpcTnPdjNTWRGbJ2zxJnEyqhaoMm6CFPMCyyRQ6LzC3pSGCPWb1435KTrJxMSH1PLBoQ7Ssi3Q1q8cC5SqJJ",
  "key24": "4AVKeMQXyQP6vqQkbc88pBrkjQHpTpy2KPLSf9zgGE4uWptdjUgimkr8SQbKbF61eaSnfpZykVyYjmobEwQXnMcE",
  "key25": "4nAr7Rze7MdTVwKtWfqvrEUDQSgdg1EYzwDzhtLrcQqpsq9cvzbXDxxCqRF9MNymfxiTbjgBXshHTZnWGyExtzSv",
  "key26": "52kG88C3VAh42QbcWm2Vsc4XCpVZnEB4jE2pP24x1HNVan7ZXGNoZbZ6jcGvt8J5YVNyEcB19cJNMjgTsbWJg2v1",
  "key27": "2EyfidMnx3LiVJDUWwDbmBM38oKTuQLPUpYDuvefKMcaTJ51mbb3ui6hadhFbSdCxDeJNnpWHaMqURZvuvyHJcjg",
  "key28": "3cACWtzqyz2YxfADc74gZYVExJ8gfGTejy9A5FB39LFQAqSAzDKQT4L3JTzL7R3WK7ukGbwUjTuDa47YuyMWA7Xs",
  "key29": "4nrBNhFkbyvukuPuih9jmkMtZtKKahnypDkVp3mbuSpxffD922P5M3FJXnCsGhZMDvQ9YvWtWQLgvueg5evXeQUF",
  "key30": "sbTV5YW3yu3tMpq7W7wENdfbSYFJBwQJXmcW1iV1nEvQzFpaSx9xMiDnxAACnLAzn7oy3GqtGvgF4hXK1FdWnTm",
  "key31": "48ZjSiP2YF1CKKAfwF1Lcm6uf7ZexQmmG3fwZGkMXGJJbA86rxhtFGbXmUj4CjZMJ6DobFu9QcUqxipLZD5WxEGS",
  "key32": "5nw7Dt7fibhyHgmrgh98j8EvdvBhR3hArXyaNCSwjSW2fVv5gFHwh3w8PcNav7ELdvoWSJZW9zfqRxkMxZXNDDhv",
  "key33": "3oAoNG9GJw1ihHbtXFcgZYa1bxCqeMHML7R6cgRKySsQ8cPyxeESh4s396B7u943zE7SxUqyWy7u5FP7NFdXCx7q",
  "key34": "45SW6efi9rq95r5Fub8CULttjU8XRTX9i3amiHF2sW3SxPwmWHyKi9qNpFABMhdowGk7RCxWc1Tz549w1UmEA9hW"
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
