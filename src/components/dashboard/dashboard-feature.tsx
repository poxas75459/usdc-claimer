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
    "32CRP2662TE92KwAP2HcCcgmnKtVjvnmwXdB4pQpawzRLJVNHxFcw6QG7SzzWXDimTu3mNNZhujw1AMe2JdGSAm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zdXd15dvjS8t7PvJUe6yMTeyUJa7DmrcDYBDkpiviwrMvr9VUvNBkduhUK5dV8Yy3eN92r4Xm2eAqLt8GpWjMJN",
  "key1": "4vadAnawabWCjB9uy1EUqajaaGYYovCz757jthhbjYguwwM3TtRb6Unheprie6Ap2Y54pFZPc6JkEwmAVEvq1wMW",
  "key2": "LzNPtG2WcBPYeApQjXqvpTbbpGCqTqRr9F3mydN8sRghvZePvovLsipHNkJZ4jzBuazxY7bbvUZCXtzSrRsBBWA",
  "key3": "zLStg4m1Z38enLvAZFx7U3H4HgPt6Fm73mRvUS4BzB8td7UPdaNgYN6FLUo4Swc1BHcPuBfoxzMP33cpphsdMtZ",
  "key4": "3FSAXwVZFSMwtTTM6brQKzK9Ctrk8KxSf3aRcmh3EH4yRjceHuEH7vijyqmD3fwXgca3d3vPxCzbwgDwDX49oH9x",
  "key5": "2Yoonf5pt7Gu5xGAxHZQWNgyq2AqXCEdUc71YuFRXRgeXPwo5G1vWiyQ484X3owBWMSLoQEF6UKSrsUsLPERTNyT",
  "key6": "4mXxkwrS8yif5YbSLdru8TSV9tMTWF44i9kzaqb3sJVkRp1g5r8Zq1iECtWRVsX7MjFoT9VZHUNpMjZb82mkiCy5",
  "key7": "4aKxKK5cj3BcPgt7hJM6zHYZ31ALFCkCWY6ybiLaLF4cow9GeGQyD3MDWb54cScmuExqtRihUfBSp1wrPXsC2LNo",
  "key8": "w6Z39BHMgtGtZTzCHyUh1jCyBrv7v7PJywBVrotpsxok4Y8X7348bc6GkXVLn1BVKX3JypxFGmnGS9rsJGRJAR6",
  "key9": "U1wMN3N9GcjGkVd11nNZAWdoLKqbf8FPi9rcFpZeudph2yqxu8vLPRGa6FMjteSoXkGVXxdcjJeh19Fu2Tzc17f",
  "key10": "645szvpAkciW5AMEejf5ATwBMGTfEzcLsYfogh8u5t5v91hEdYiMb1z4oPxJDjhzdRVojQzRgDhB1Rq6vwv9wgco",
  "key11": "WPn1UkXfhjSwKYvujyGx41mZBSKzxv6yH5fPPyA9DJdwQ2FeH7fEQ9SrkKYkW5Wb5jgtVRjiRFQKaYRGkhGjDXv",
  "key12": "2Y2yveJiLvFJfNjZaghH2Xk7rcopvGho2UBbjgz4CpUjHReV1Pwr3NabuY531fnFSJrRUrVsyJMmnNxrbKPZAnXY",
  "key13": "4NuifEokq2yJ5CXc5eHJdRSfUE2EZFQSio9GC8rPm9Ti8RAXHKMiMdBPiVTcRZHBPBXszT19fsq9etQAXrkBWpNc",
  "key14": "4A2edWJNAGDnPqKduzRLc5wzG3LEYBjQiHtdihvBgcBy9S5fqUKYdp93V5N6M8j3KWAChxBzJYacVefDupZMEWiT",
  "key15": "3zUkCCxDfuEEtSJkaPXtZvqxwZVvGiQivhky1nrM9cxWHqcE1FE526vPGZZbvp4CJG52z6Xam4ypsH4NdXG6EqoJ",
  "key16": "5Z3zxpbVUZUucdze9FGPg2wKB7TnNhH8vuncXknV6HW1xN5UbwYob7LZCj1twejz2v8zsQ7FpiBXtuouiQQdEHsN",
  "key17": "rVhG4mZEdLpMmQpBdEhpVu8ipPK8BJ9RqwKwSvsH8TnxPyYJB1ho23wZcV7Dkp4bkzMHzpkRx5yne8sAfWF6y8T",
  "key18": "3kugtm23ZCg2tunBtrVNUFV26hA7RNeBkj72CL3YmopqHmpvrsjtQ4JkUZovrviA3MSgnA5W6HCA2q4fnrteZZTo",
  "key19": "5CymNyCczixoA4bh9po3BvqipoLFgXfvMQxodEyYxA8z9N1a1cWz7287eGbbYKzhdG4uiASAoq6NqgrD7hybXKru",
  "key20": "64rBgkcqsET6yTjsnecZPkrBhdf9MwzvWKWku5wK9LNm8ZAgUdYLEGj5WJgnxKKAegEJjUvqwK1ibx8wtMxGTeMT",
  "key21": "2yHsN4MXCqCYQGEyCbtVPVqPJRTKyZS5MeT5X9j6Bch8wyFp5oC57vuKFFxyAwS6s1kwbfsUBUs7zXEKLYUd4kCn",
  "key22": "5YhzzyWZrzgJ6k9pr7HvrqCQTWDxW2LCM5CfAZ2EQJ1AbRWVA1BRcfRomVX1PaU6Gv4RvAicdWLVBSaTzhoBXP3s",
  "key23": "5Z8kZPZcBLuupNYmFPTuamy5zjMKVmHwDTnPLUHnwH7oUnXAp7bo8ueuTB4HGPHg4hkqCBgiXoVVmdLu7RvpDt5o",
  "key24": "4Pw516uDNFddWRDFhADZAKyXk6S46XpscLB2YD7gVyLfJQMPEtU5BaL829c1wMks5K854Tvr2BzYob6FmHZsKckT",
  "key25": "4cH8mo4tcMSPgwzs7hxA5pLWfJ3N1eWE5gQx8SqYEDe5a8XPoZytb5KgaBTCfubx8CweKQm5PLYFCz7fYUF3kLaK",
  "key26": "2JmTRa3pbfpMH4LVKUbRbmU84R8TPcxbP7JcMs3ozjr48JtoAHnTwakny2rwAswN7MtsmsKjDdfFiztWQ5Q4sXHQ",
  "key27": "5f4dJgtobhxdBL7rivkbhEJR8Mvn15uK9uNNUiUYeFEXautzq7iaws9fgeF1R9xWVsgzCbUcc281zaZfrH7Z1zzh"
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
