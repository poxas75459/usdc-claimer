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
    "534ZppQVBhJ1ABRDEVoYUuoXgUdrbV5CfDVr9ViM29XhwpDcET1Urm1jxbuoUvuhvjSXrYSrUjNjAaPHsyrvDQX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PjoGhy82FnkSbXCJoUsCp3k1ayZK3zpCs42PigStRQtfJZ1kYE4FPQ4SnpYiPchtCLUjhySLYQ9KyqAM4sZeqRk",
  "key1": "66SGbRhiH6fkHAJs5UuoiDykUY15VwZoYJtxheKoU3ZVRNeiRkCdrQaoxEMfKSetdfSK5LPmUaNcdAQkuZKSiXzP",
  "key2": "3sr8UyatfrSwySYBp2RLByKv5TJs329iSBywp5547mjZHgtBrjFhL77hfKb3YKhXFWfyD9G1WkZwyG341wjWNuuN",
  "key3": "XRrvqJnpTNfWs74mcdLFy78XTxG2cLjP7MqKmAdkrfLNStHf46u33ZvwsHzML76hHPzxLy3yjbbiZytkGdftyna",
  "key4": "Yb7e1CMy7dxEKFthyofhb5mcW9d9uaJbvHKDqBr2gUzCTCkUP3wKrkKWFQzPDzHGeUPpM3zr6SFyRcwYJec6H2n",
  "key5": "3huHBfyYD8DjwkDwDn6yxTXSEhoWjhGimpsSN38WEDMwLuJNkkzAZTLKaD3AKuiZZNksDRQ8w1QkfHkLYrbvqYyA",
  "key6": "3SvhS2z6GcV4SxKBB5GiSXpptUR8keQ3Q5puDAxdkdegsfpexkGsExT9gcXhpgsvfLvXWUBGzBinAgDyNkXf1a7Q",
  "key7": "4pAhYWHkXFrNHnJgXTQGfb83VrEM2rPHdFZMHmsPxj7F73xKQmv3oMiGtYUuX1YtTgU5RZRvdjbYrPykkxpPAAEN",
  "key8": "67UQgEu7Q6YcW9F2pH12K6WvsT5bikjxsmti4f811nTtfCZEvAkUtV16s1PFkBBxGgcaHwq2H3trL4DXbVbg3iyB",
  "key9": "CjwwcptxDyLSgAuvwDuwxRv5V43NQmFpYG46hyMfVFpiNmNuQkjxPKsfkcSqoCw2npugBrCBQLSyX2AcgNwyXwF",
  "key10": "26bSvjvZrJxv6Lsd8pUqwvw1F2EocnH9zu29YMbEMnP3ZggtYiAsknLVS9fn7RQFY2uNw59zP3kCgxzyGQcyhH4P",
  "key11": "2nf5rKY3JXRnyToSQRviGc5Yuz5Anp2GE8J15paQ9WucTmKgLsoDbF46D7rXFvPhA2b19hbcWCnCga2wVA2BTK72",
  "key12": "4FoVwgaW4PePcYxHyvfkrDDLUj9YhvSpSGRbUbVKNodq6ksHAvZtNW6v6wzjKi1N3JRhidBz5NA57AYAxR8aXK6q",
  "key13": "5eUSTQDxhfD317Q4XKvRDqkhGmfhqVrJD9tpmWES7T2wbCSw9XYax4h5fM4N4vNsE9FJKGjCTH7hMa1VLwxCDgPN",
  "key14": "3RZKv6ZXDdpx3D74bYj8ph837jvp4Zn64j2QFbPEP9gi4q14t2M4mC3EY6VgT1BqSnWkaN8qCVTuAhKbAHVv1MNt",
  "key15": "2zLXpqWNvKfc1uSeud4jHtnCQbRpV6gtPzshr4W8SjzVB2cgVff5andgz2LxedgTTBwcCtnXTL9Chw2icuuUUpcH",
  "key16": "4kC6VqyTDQGkCfV9yTpGb7Kq1GbeCowEQjJZyG1DCAE2AP1ZgsQFrJfbQQDUSeWKyDeN3uakA6NDz1yEEPRhUWLT",
  "key17": "411bYTPmxA3YjHemA6hT1ZkQPARS9SjqdybuQxnJXkE26f9no3n1UckB6WB8a9g1AxZKxtiPEar9BDMihGkPMvmh",
  "key18": "4MzoQJuy2z4A7pxDfpbxxrJprXzm43NHm1oK6HfV86df5WmgCUguvkbZsYJ3eAgMpxDZEf9htukrs18cqV8AuT3g",
  "key19": "2ZbgbNHXr6oDLtTsGZdesfRM43nRmNGoURVp32LGGLxCaZRNMoKRMmDcpme7hFygZJjH2t7qiFoP5UKYGcJuryxX",
  "key20": "5QUSxKnywVFk3ncVPwboRs5ub1uyhH4vjhw5bhTumz1RaeuGwgF9xgKyiBXJLBHM3KTLNM3anQaFyK5fi9QsZJAi",
  "key21": "3wjjcyMzt2k9jM73GqHk6AZQs4A2at2N4bWKA82pyq2Nqjjv7jJKN5tZiUHrRdkFjVQbFzDVd6T5jUr9Yo1G97T2",
  "key22": "qVtq9gFt2vfn8BLA4MckRxKFexCZYGYNbEfvofar8AJowwtVSQheBmxvNJTz3RjUB7Cog6FeD3KMhFE5cWkNFyp",
  "key23": "3C235h1SXyu92aXcmDkny8SHe1kq8mLfWhHQn5qNAdmcZuuBWpird1Leeij779kGdBxh8PfEd6aPqLpDy49ZQrEW",
  "key24": "2Eeqc7amXsex7piW291Xdff1bn9UEXTcTYuctB9uK45jUpMJHwSe5bASjmSmEMWKyduE3bzjdYiaWJkasTngHDjn",
  "key25": "4NiENs7irZpSHHcvntqbJG1gkU7JnV1rMBDfgizE5CEHvrLb1VPcFAe5KnSwJwrwaWhjtRxRePq37yi2YnULeFQg",
  "key26": "3SA39PZyz72DuhCXqHhs6T6jMLtTc4pyyjUBEXGs1fyhSUEgpz2Ff78q87kTaRwC97KNKmtoA1GW6Hb6CK1mMpfY",
  "key27": "NsAcXM59sAnNrydXJMj7f7jt3s1rUhNVVidPvKqDEbRCpkT8LaG8SRAxJD18ewmvgSJmRErcveB8AxYRskUgH5w",
  "key28": "5ry8f7UNPEVWyvnYoZSgkboSeNvYguggfgan4xazKgb9Hi1fvc1tAnPmybjAzfuaqZpTGoZbt5HVxUuZeJtE8Tj8",
  "key29": "4i4JyDPEBBuoSmvGcycfHRuqLgi8PbMxfvsh7ud5sFFyY8xUHDU4pwZtJzwrDkGDsxmqjNiiAaxNft5pXvCcHbbm",
  "key30": "4ZYPiUhNrzCFLQ9wcZzTE4XfcapcoYruDWNWfDt9DbiprRp5vxCwwQjeS8dJ3s7GSYvGqTwDsGZZQze5w23gw9Ve"
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
