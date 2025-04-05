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
    "HhARo72efjZc351KJ8bw4ijj67cXPXscHMZPMyV5pwCYt4hYVDnniZB2VePs7rfknbSfE9SQWKYRrTByaxjm7Ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42LLUFY4E4CYrehMCahbQPFRxB3162L8VCKqAEpdc9dqJvqC3H1q2FViNE39LTFGKAqgpGLM2Abu3CWmAsYWxsL",
  "key1": "4cr4TXa6TBxcvXZYfHnk2nfqH2fWxZRqyjCefKKSrh9gXzatw83caByDNEjGS19P6iGFUTS6QWnSwvzdY62URzJ5",
  "key2": "3UcNb4QiQU21NcuG86WV34ta4pFKMYxNTr5cDjZP9QB4qpeTpJS2NJXZFHqi6qZQSFNKkgJ2zzCUCP3nz1dnDNQi",
  "key3": "3dR3QQp65zCo9HaA9tb9Y4UB8kecHCuD2hwrqw5h9MHXWSTYjSGRdnuNCyMYFstPKGdRAPZ3E1CUnfrwkR3chtoe",
  "key4": "abPn9Bxr1BVE85zC8CichyU6jL6UFEPaATCrkUFfCXdrDrmBaei7Q7xhU1nLn2uXGS24vkTqwJES2627sYujnQS",
  "key5": "sarXiW4BBqrScw8ptWr3a1mDxoQn6n3Lv4rP82UCHoZioefP1cuRSPAUGKcNDYmJ3wp8im6y79PLDZsDRJt8RPE",
  "key6": "5F1A5TGm7G9kBr1pVBy5Jdeo52mQC9njT1LM9PL59hyHn2f8maUmeEq8g7RjLwL8JE1aRugYJRwwbbPrrqDyvM9t",
  "key7": "62RtVXZ2gRBkCP33F6aZcADPno4uJ2Wfo9hTJNDcjV469jSYXRJoRDK1JtjHnkHzWdiMwc6i7b1AVrZPCPrFvzCy",
  "key8": "35HLmrZcrVwd9ayBw42HUYYAQjVt5gyt86q4x9DRP1MJsxxJLLhNNTjBXVPpqLyCG6beaQ16Z9Qippdx1aA2Qk9d",
  "key9": "5dG41hiVtg2aEESPWZAzstDxKS6M2kG6uzRAK8Z6WEuTMdufkBsrvohm1qn31L8hyEuRG2RZkH5j4Fa2vdsSBhjY",
  "key10": "3ti356hVTXmo8unrdYRhzkMkpFZWMhNU3qwHtEJAEx8hQUqdza8bygD2RmQqWG2bztEzAn9JJTC5weEvTfUqp4uf",
  "key11": "3YTBhJc9wKCQGScuFT6R59zGr6XQFktaHjRCzcx7XyMFG1SwsCPwekKMeEy6QahxaoSZh1QuNSnuM1dAZMEMEg1o",
  "key12": "2FfsUAYPpNzZsZfns2vEF9vvxgy2UfyvfwMPT8wZazGyV4ZMd2j5BBC6D3ngcHWPSKd18oM8we7a2PavvWEGAFZC",
  "key13": "4iusedGqu6RbvzYqgDLS55p7WNu3v8ccdut4KKvBnLnkenqsbuvYrYdvkGHcAiaYdEtG6CCMMJ9KV1pbBgN8Ttsv",
  "key14": "46HyC6A7TES5g4K5sWqxwjVk1UQjLTVjCCqVf5WTm12ZwdmkvEaRUyBy8p49mAQFyuUoBbvVrNaiKaFuC3smrDFT",
  "key15": "2pYaGiAE48y7GcGsDL4v6wWzDw5KkHmyoy3nb83AWtCFAitb7oPfaibRwALgb6UFFLdAV2Z6Broxv2GPZMz1HAXU",
  "key16": "5LgGGR6hpLcp68N62cthvWA8uXGwYuhAe4tiS3nnyMkRdJJiDYrYoEF2d14WrAyXZahSbtxXAL6kTNHr4YQ6REBp",
  "key17": "5c2inDbVttFLmywJ1gn2hCgHAHgi8XcsHApaNXLxGshMkLEu3r2pLDyiNgTmmxDTMmqNPu78aYSAFTrMujyVZPaT",
  "key18": "2Rg66EaKXGp3cAXSKn7EB6QGw2FDDaPLQtceb7AqzD4wi5ZoXc65h3TkqHumyTzVVwicNdSkLEfh8iNP7fJfLFjy",
  "key19": "2BiaThH9R3GYS7JZu1zRLbcLQGoVuY2CWkXdjjEWod3TmcGjyeu8LHC8m45aCuSfxs5uNrTiX2EVvskfe8iA682J",
  "key20": "3G9oxXF221HKCtS4NSVPSzJ32kVVbpMvcAFFMGNWZMghMGmhsL6DmxCR7bgyXsrmXngWSYpAX3GQfmpRaMmYSjf1",
  "key21": "2Jn62biPBR2fcZgLXp45SN6TJez4PeaTtVSUXRRkcyKJZsLQ9SDtUmibd45j5T5P5dd9CR2M7DbAtGoTQhnqBZG",
  "key22": "3MxEBbAhZq6foXZq5YvRMmYYmLy7ZNfvoPP38FhKELuaW7M1prsoGmhmTRp9qMdgYLkHDgux8KuPzUqZXU2XBcJD",
  "key23": "3PdVaaiBudArp8Jt4HEmVjKyXWjAQEQgRY8bfWmgxDncAgDZ6i5JH2VdwDzpvLbjeQMpdA7EDDknnwGSqtqs16AT",
  "key24": "43yYyQFSs2j9qgFCVm8F2j7o6ueRs6QnysGK6ceLxZJ5wQzSvc3875PR2fx1eGHU81ciAVkhfz73t5ZLAEKbkb4S",
  "key25": "5TJCDWc5w5KXgSvB2ezxumRroRcguiakQV8JDpTNjcJQDUrve2JJVdrWPaPALaknEFfrEbMccQ31MP5y9ggRWVdt",
  "key26": "5qZky48RsstmmazmmBSktyqoCYH7mEgMmeNeBisWSJWcKqcCBoqDXnGYgMRomDCLULsAXboCW3twtax7GGp8UGzt",
  "key27": "3ytCyjFd2VErfLSHDVJtWi63C5XMFuohtnKUiFqvdUzT42ahAQfvfQhjzjenPhG6jwZ5yECnuNf8KpkgjUTQcWgA",
  "key28": "4HaHUvYTndf9i64mwdR7YPqtGz9GiZwLf7b44CPg9g6CdSisv1qwCuHnbgKrsRJqo8LiYXyw9QiMiv8rqoW1EcUW",
  "key29": "21DeGtVW1DuTvAaAzL2yxWx1Tkub88iHbVXxBQFmoXwrgXZibrygfgzwhT4ULwUxvx7mthzbF7wN5zTuX43D1ega",
  "key30": "3HR1YxNWrSK44hBzKqdVpd95qssZy2LaBwy78ECRTfwJs2fr8fDL5Y85Lz63q7XEXMsktjYgiUcPX5W2UDwiazCb",
  "key31": "2H8TkSoMTjT24RHGEksuZSfTmQKiMewgzXc15i1e1iMBfjc1Xw8BijcYuJvZnjbutHjHEupxTfUVtyWrVKuQDeZT",
  "key32": "Swq5Sy27CDN45m26GUXbDJtmqdnpk61NyzapB7TuefDH3cH4SfouDa5AnibWZgc4eJxWy2nwt8vwAw7bRKbwga1",
  "key33": "cyyAFCdP7tJVga8xSUrSQLyey8ejtf1hQutkMYb71tMQuc1ffJrH8RWpAqmavdS7w1x7gr6XSAHx8etZRjcqZZE"
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
