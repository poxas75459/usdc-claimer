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
    "2eJvoEbNbokpfqxYYoNiFrSnPpjEASHhKDeeGAoyTpsXZzFed8YA2ZiREPMmEoQmjZruKHVaeDNwpcvNWUTYxGVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ypaQQTHU97mnnHu5rt11UndiWbUGZhdN4kDQ99oVbhRTG1czY5hjGhSF2GcGiRxu1m4e6tg1PDJcrGZRQaA4xYJ",
  "key1": "9NgZ9v8PJteEGgz2zD46kUu9EaPD3vRqWKZ1Hn9CqXmTds86yfkiQh4AUYpK3AwuNqnRCsjHJXiA5jaEYULCry9",
  "key2": "3gFYXqx6mESnPHw1gMdTDWydeDbGbxS3D2Yj6seUkj8WGxSnfNAqRRiuUTpojrbrV7JShraweg2GFYvSXHKv5C1Z",
  "key3": "3gWaU3wSmUG38y6CfJt7nNz7XpLZjKqc6MCSmiZdL7XPXfVgdfkviJKJYVxvu1RCJ4egzsA3tQmgZNHysfHUB2Si",
  "key4": "4f45YBhQu668DvVwbqaDXLKKZcGcUpLQxGZrdptp5BSa1J7C4ArnRyPhCaBbpkJnDR3RaKa1LEgmXyBCQgqDzTpd",
  "key5": "22mdFA7F3VyWyxQj2u51ooipgDmUQfZ7Gq8uNTar81TzytJQC5hLZ2L5BomsznfVx4JW1W5R1T9CViBJVUTeEArL",
  "key6": "55WUAxEhbME9q8sDMUj4Q1P74ynvNCMcetSnpzV5ZsXVBccVciQixmwoGZWWtXUUffqrXoSNgHzzfRHXNtvDVTBh",
  "key7": "yvBjFz4KZkFVrtsBUNDqwkTSfSA1oATVYJJHzpDZ9kFEoFfDfhrr8834gY47zmR6KV4T3ecLvqMWxqM8fhevvyY",
  "key8": "5H2WvizjosexfvyVjBchCaRS9cCTgFZcvWdFx2oQCHfwTKw4E4FpwtEE4SYgdfsQwy3YW48yehAgA43Q9YH68SUg",
  "key9": "2nVc7S328PHKbQQaSfWinEq4KBKT1C13DfsjhwWqUafEsbCfVGGNARYRQzvGYf9hJc8y4SyMrWLp5HimJF63ATkc",
  "key10": "33hEyfcXy1ycg79vMJNzMjiieWGMfZaq7jnb2xEdiGBTUAnAEcbAibNKVDsGyHWqW75TBPCoXH9RibxuruFmP7ps",
  "key11": "kKhG2eYeE1PK9ioNYCpFoPJSY6PeRLQcBkKPpSR1CXgVCJYCAwNoCur9arUFdfKLUsyjtTTWfUpFiRt1KChz89n",
  "key12": "qM5vcx2Lr1FHR8uVW5p61fAT8DjjwWUtWogZCjWkFMjebsoEZeLmWwbMgSBxcU8MvfYLhdxetYe7nCmzYHc8QVp",
  "key13": "2RfKE1eozAVbLRwhLYGdAhjrU7YAgofk2EfzNgydH9gd5eQc144spoeEmNuuR4Pte1JjMJcoY2c9yTgsNf3StRGv",
  "key14": "srBPGnTYcSiwNn43MR4dKhR9a4hcp8zAaewnHMHQgEwE6653eFXuXM3oKND7awZiUYbXL1EezV6NXGWFDNWt9FN",
  "key15": "GBWXGiew7jF7j7Xo15pVKcqpgH3Q7cDJdi3QoKKzdbUqPd9kXXcRb3vimbZrWfB88o5pfp2rKiuNqNAQbXjuwHr",
  "key16": "3Q6gDbbMYCYv5siVJPfxiiUD9N7inkVx5Dz4VUW1uKHX9cinkgqk8J5whXK5NfffSgiN4v5PWJN6NSrodXTHMmcf",
  "key17": "2hVcctgvcBf7bEMrGtjRhRcecFniFyRKFcYM7Gjbmx7a9aHABxLv3zTgdBGhuXUgEtnCBxiLRWw2m9CN65via3Ze",
  "key18": "4wfBzVKhWWbB87zc71UgQrqV1RAEaDsYFN4UFRtuAKExzSUFs1hw9eewaBFtEnK8ZCddHiat6LGpDuc49pKM31bS",
  "key19": "2y8M1RNR2q1ucEFwMAMfMuq1c88851PWwGjHxivdCUdppCZMYco6xiisNJyXNfwvhTK3taxsMLQWdW3PAs3hXuCg",
  "key20": "3fsuLS4nGbSxKGc1PmjeEzQ1XEfMBLCQJAmfApHZyRQYWgJRTiKzAaXGk4YMWYzWzerZqVsNgLioy5A983AUu1Jm",
  "key21": "55v3ycUUL1fTEDbkKE8iFZM858VkLNaon54oXSYXwfkgf4aKfnmCEWjjUPJr7jVqcWw1gz2eo3LcPyKEUV8i3v4s",
  "key22": "5xru7nzYb85ZRiiCZxUb4yohRJ1JexCogyFzzw96M6QHRn9NdaQdDAu8eBiW2cPSjPt1crE9zg5rxFYPv1JF87yX",
  "key23": "5YCh3rLA4F9zVm464EziGYKdK658YihCBPniLXDWQnvPHiTyim5WdgKEruHtC69Mj1TVoCNJZs9RKpff59QsUJV",
  "key24": "32a81YbmuPRW68wc4mFHX8N6cSCNdjYyy14FBH3fEzJnxfUVqdxtgKYGicF6teFYWuBAuT8Bdk1Bm8tgVhSDUBmv",
  "key25": "5roMh8M5YZqCfbJxKudGnyPpLm1piVyAbkRDa9qBPtEBBybL3PBj7UFH6rrMeGW4Z3hZM7B83A6FgRVcvDgdYTXH",
  "key26": "651oxHiXXuMFDkg525fQMDivMAYkkioqWorGo6F1FuoyThpaGptKuw5KAVWJRprGpNirYYPM9dNi1UE34ZZ2Kh4m",
  "key27": "2dgeTus4rZmyvWbZcfmvu9i9LxWGHpSrdUZXhFXiMBpfy6dEo2JetdAD3rf6V12B17CjaxZzV451S1Cjyp6ynJPj",
  "key28": "65EBpDEZH6GykJvbva8XkDrKqoZ71LS3eGqf1fprChA6YbaZVmFyit5vukNwaWaLQg5RxdUa2kkS56AVKqVBZpgT",
  "key29": "3MWKYRZaM8RcaLFfvcU3fYn851c2dtzX1CZ3f3TYjT7vGTDQTtnegUSqunn32mAmRzEdouJZpFb7BnUcxJoUvWAw"
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
