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
    "2YyLwMsswtE89vmvtBPuJxLByb6oNk4fJ4frmaX5P5V2htiDEK6o6Qb7rWoTd65ckG3H3yfNtbPTCqCHgreEtk1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eTfpCqQBnxnj4AjmBi1ANXjoihp2KCPWa7TXVm85yBnHX4iZinUtRQSjtYQH4uFnJX1ZfX2UJ22vit5w2bAy1HC",
  "key1": "5YEyMqDpEuQZvqCYoenJ7EFc8yM8NgaZqW7NyRiG2Do5Eh1E2ft57a1F8BFAhQzD1i4wnHGmoJ2grBGc4DXRXeDf",
  "key2": "38qQ2DpuvBdC57tW1XRBtbHJjLRb3LPJRnwa9pvMBoTzAN9XUxHPJjRVPjadRsBdkTPWfhBJMCNfcXz8nk44nFtX",
  "key3": "CffnFMgQWY7bwHZLtZWDcMTQCsuJMXap47AyyK1cUXUCcfpjANAUUJiKu77V5Ln1jhSp26WAHx3m5BL3NTA5A9V",
  "key4": "4mo858GKeUe6kHB9cqw4Jp4XBSnCmTAN33kxSfzPkj58Y9Bvnant5PegYF9mut7ZWVS99g5aWJpqXtZstz71L8pK",
  "key5": "3qQc4SqsxxXBCNeHy5DZsqsZvF8QAiSU74CCP8y2Zi3wL4TUTW92kSywLRo6TPXz8frR2Q5gjwhZuTtxJqWYVSuN",
  "key6": "29X7zyWFGp7oZLA2TFj5ugFqZdYGZbhVzze3UQF5PbZghAmyk2MwGAAiQR4C9zbfYc6yci7Ndsj7Vzfe3uUgDt5R",
  "key7": "2HmLee6GbSb8QgtWiBtYbRtvS1fuHFdzFsd9ARR6zDfikm7QCc3dWhfXXhvnPSzRqXVzFyZQGziesXVBhXJip3kB",
  "key8": "vGoxu2phEQmC81CqmHYxGxb5Dwh8FghcVZMbQ128hdQhSJjvaCHMpgXV64a4nadPkAR7wNf92CSWp3TMvabPjc9",
  "key9": "5nh4aJBE9uCjxCt1oEBUNtLuLTEMLxDiX991Kw8jzzuKk5656uUyHYPz9QZX7WBpMKZjEZ2WeXHw7eshoZbnee6q",
  "key10": "4cVnVTbJSuoDDysmmqVAxjkdCGCSvbudHnH66gYyhcpBLfRcSP79d852CxiamhRA6Qo5jTUaMtDgcaGrhhyRCnxm",
  "key11": "2oUhWi4P5HLX5cxdkMkMTik9195DHoDka8mAKu6BVB4z3rhZNYTyqz3T8gsQXdbjwgcg5MtmrKmZgrVwtv6q27B",
  "key12": "57y6jiRSxrVRYbABavv4wWHhstcVDY1smrWZKPdFQeK5pMFakJRLDmmaZessGFqL8v1FqsfhYzVPYw9F4dFyjkRK",
  "key13": "QCMGSLgLm4hTwByp7daBkk2LnsVHxfhLYgQsspsdywENQkY7RnZmEJgdFs27zUM2Yv8ubNVujtS6kXhzqas2Z76",
  "key14": "5RBA1LzrdwwS7ksHT4G4o8KFAxDsjvEF7up4wX5tPA2DD21ucYJC2FyaK5Dh4Hgv6wbprjMXBHMekDF781KENATe",
  "key15": "386BQVFh7bDh6SE2UcHoMMx55LRphXkHsKeTEVBW4b7SFeWcALF4zJRZTQs1ecstq4vCu5w51bemK6SyHEFeZfxt",
  "key16": "s7LShPLqu3xAKJAc8MM7mWfqjFjeSw9PBEbFAPnwiCfEu214uujPjXEpgJhn9xFkQiHnDfXwBQDvXqCaGBdqzgr",
  "key17": "5mFJNkGiAKzZ27MGXgLBaSHaUHBRoUGyHysbxr2ZQ2Vthau6qz4fDWt125yX7WeEXoWLgat1QJBiyop5DbFkN8Pt",
  "key18": "4BvKYYR7yxHnuUUEcLTDR89eDgqCvJUa5BcFGh8sjrYLDUDLADZET9qg9v3oA838A2AkeJf5DKPf3BMqbeHWAVsC",
  "key19": "QwbnfuTaiAmb32uzhMZBDP4SmgMKiKcjTyJLJh3FxwGZ6jdHyiEzPqSn4hamtEEPeAjgiZ6ZRs8VBYaR5EwLm8g",
  "key20": "zRB6cZvcHBE7Stn77nkxRjefFK2rWPy7jg9bkawDz1Yj5zY68s1KgqGqjG4UYccMBcAFcCKD1N3dQfNdFrZ92g9",
  "key21": "BMpCBinAuJSaHZprja3ujWcK2yVYC3ftzWDSAZzxe8wrW1YvpXhReLtLvE9ChRkw8QThBsUrrQ4Sr4vbGUPMWth",
  "key22": "UrpoB5pJ6Ln1Y6nFUfz8ac8BjGKNZ2VptMHmwZU7TSuimBu8QxCng818m2BWLa6oxugz5yBwKibSwZheBrWX9Tx",
  "key23": "zbMCsR2nupvsHFSf6t4yfaE6fhQaNn7yBzL6zNaXtdFj6yY5atFhUzsVE3n2B8zTnCU7a7kiyzFmeaQ2ffXrT95",
  "key24": "528KzEo7Y2FHNquoxy5WR2AiCreHC5cFrDnwQyEhCxdYoQG9mZCjg2qdn18mwQuGgUkaesMY9i6P3S55GEKaV4Ea",
  "key25": "3QVRcqVncWs1hxnRKeHRXJYw1QAmvqGzJmAFNxNp3Xm4uoDUwK8hb56ex9ii4rCgiFJyi2CKqPDGNGkZQDEBc9Xc",
  "key26": "kYmD8PAbXtd9wDpGLHacU1Gw3Mp5jjD7abBFHsZ6NUsx5adXMY6QLEm6NDV3pbiVobbQPZhmJUfTTe4E7pDGu8a",
  "key27": "B1EctmWiDoNUBfJLiqRmAtG3JmvmzD1TYQZDqViFdXBqbReG75XdW5BXfgex1TBxGxwyWq4GUM4WwRY8w2Ng9i9",
  "key28": "45t3oXdm67zPDh1swDwQaCSLhitmv2Lz515Q7TGKLC1f5tb4BsA5pxbatf4PHF7e4ZvcqwzyAAF6F8wW5g8XFy8c",
  "key29": "2zsGYcw6oJC4jo3pvq1gqJL7kxBPK4aJdFrdQjipoRwokzU8oPN9eDPLZap64Pvo7UyMtbtZaZy96pJR3gA9rpff",
  "key30": "3gU3YHWvoE6E3McHTe3RbiAUQqRDVVucyJFTvRnzWkSS4ME7pyo7cGP9wo7BCbM7WKTLPxGn4VmJBKHnARScGGVv",
  "key31": "4rZtrV8KVE8qmWHa6WCW7vmLmqt6Np8UzNXUYwE5XBANfTvv4ty8aDFAwbqeNq3apMSywm1yspANrNyhLKSxJXQt",
  "key32": "2Cg8GLEG21H1JorcHS1RNihJDzmi5GDX8UoiXfnei96ouQDLesZhegwiqaYMVY58RLNKHWegjSGPoAERrVVmzXt5",
  "key33": "62dcfv6nyTmryzG5SjbDddBCs5r2aami76mu8TPMsi4XFW8dUtShyepunRpGGbefx8P2nejCthUmLV7uK2t4xYGd",
  "key34": "seQ3TQcvSQg5fN4PRpk72K63qADSGqcQ3QTnpoumeM67Mbk55TS2ccoejA6XSfLbWAnndrdTHbvoCGK1ZRCqzs4",
  "key35": "5SyqECtzqWobYWrYgnNeRYnsV8wqzv4TXponU2Ce9N9wkvZmr4Un7jUMMUvHPU7KK8XJzMusuqpgFJfyrJ2VeXGU"
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
