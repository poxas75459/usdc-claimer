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
    "2Trz8GrXJqF1wFRUKb9EcgXN9YLrLkMQ91cZyw4mvfBL2R6TEq3hhUk5e7LR2tkTJw8WWdSXkB7rcWwWp3kaK2JZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXR274FPD9uAwUJGWrpwMbAfouvdiHTNpk55MRzdMoB1bLrwdANpb821mT9LZQbvM7KwpTuWDyZpHXcMLiU1Gcm",
  "key1": "62U3tRvVQ5dYfNTqHy26LoL82hXQ9ap5B8wL6SfYqm5YTcbBqQpkkdsR7R1u2k5Jmxu7KCbLszJEThDJKxDybwYW",
  "key2": "5NK9gboE4ePppNuF4H5QnfFHoExzQ3WyDw9kQ1LKL4VfYXWLNRoDqgzYcZYQJNjXqp4HRKSbAX2N2ABbFDwTn7QB",
  "key3": "4w28ezud56p35sW8YmzsEyoskJfpQ5oAEogpBMXbyZdC9XXmyMJFTXmv4j3rvSaU2rVRcDcp71RqYUppPoCTTayd",
  "key4": "49hWZcq6E1FS1rbD3q2yqYEnjHn4jpgb5T92o53AmzVwDG32N9ra14TRDDni6fLqoXyir5HuxRdvyjbhQoRis7Lr",
  "key5": "2uHn9mVDCnybfmLaxpsNNPhc6ZA7KoEkgh9cLLqn5mk4T51LyReaKkktgH5LLZdkKAw3gcNAVtBamByJqxYBGm5b",
  "key6": "4DsVhMwfK19GuZ8zvKjX1tAxfkaKuG8JnjDZReRdik5xYbBa1CpbUgjAc5QLLTCeu7NzTTrdXwtX9QU7H7s4zC26",
  "key7": "414R4DMhS8YjH3K5pZoCAQDgGMjAzoCKm4wQCUvW9gXuAvYBhJa5V2HcVvKfrDeCvEav3EE5Sc5YHVizXDPKETep",
  "key8": "gXUxp9GxwXWsNWKshQVGyaHp5iPwAQfYSgm6yaXe7nRh15osEpZAn9WKnGzWoxdTwrSPT3rSLwhiKp6YzVXYU1g",
  "key9": "5CZNzc8r4LA8ZzzN1xAGdtv4Rab4s5eucnF2dasi2tYsJSvo87rqEhPU7HMA3UjN2dNcLJRYayF1x2MW1RYA2ueZ",
  "key10": "5Js3V8aHLfoy8Er6S464Zoy2E3M4shmyMTAxog3pjGe8pakpyYwByEaDhFmPjEFW99TDpjMzEZNYMqECXeGARbzg",
  "key11": "4WiKzZ52mYi81Nv8NweVk6xrSRMqET8uWX7nAqrBKBdiHCrJhW2QVEdKkp55ZnGCrygwGX1uYYqEi6SpxaBBKTCd",
  "key12": "5H39eNG4wzvxF6PTnWXXm1QqMkKAqt2CZDsyoVeoa5TvzYnkVFVniY8hWDuJd9i94TPt4YS1EfSGi5aQspRvdd2",
  "key13": "5GMWkzktP7iTBQUceFNEHb6YfXd5CEgRyPp8tkccm7ruE2Ein6xdjxb9hgi3G858MnRc5ju6YLJGeZuKKkRSU2Bi",
  "key14": "2BQkdaEbuHrmHi5JiUYPHhhC8jcWohgibnYwEmSFpcocoxstTk8CwKdxpqJ9SEZJ1PQXNUWvQL9X4fJFFCP4hqZo",
  "key15": "4smdidYCFSw9HpgX2CaBJXVjBZvEt8KpLi4aGWU2tsrYqG8qeaWEM5CJWhrR37edrA7rygkqHK7TZ79sFd8btcyt",
  "key16": "pEJwvBXMe3u1yqz18ye9e3NAyNRBwYtghfchkjk78xyK7JUb565Lvn5neAiVUaeLYW9gstKWcRPY8KJRz2fcszR",
  "key17": "gr8VfoDibCZNZGWD6VSjeK7Anbqh1Bsgy1QCPTL3Pt4cR2Fv6XfsfnvcXehpJp1Qf6WGbEJqRTmJxhj6mBtupoy",
  "key18": "2Jw2P3DWCcnooc4ikbR2kB47Qkke1ntGWXTnbNYBE8D8f8yy9FGsRmUkSHYGVaZa68XFRaaeJG1xJKovDHBqQQzE",
  "key19": "4SPPRHhMsipJHa2zAiZksHUAsCdPqVn7Y1ZmDiHGct2QrWk9t63jkQBVz9VwaSbTx8M5rELVu4rbFU1qGCy4o6Fj",
  "key20": "51K4JYAVyrpUkA5vEFti43ZvMckFRGsARiJAMLUyh3VYhehStfET7UFRKwvXkbVUBA37prJe3kNTgdMSFowhoK7N",
  "key21": "FwhUrBYHi5YpqW3qNzWiXDSioSGVejb9iGSH7nFZodsnowUhXFyKt7KoZTFTEGChddsdadWodex7gbP8aa1iDd5",
  "key22": "5hVyRNSo61yTzuHkNpn2c2DzixgAYEoeE713v9RyGNQjX7xqCgRiN93z8LDvnQGqCEALhoZAUGuG2KBku5ALY6WE",
  "key23": "SNKjhXcBoKbmuQB3bjvzizhgh5hj6MApnDyvRrqebE9LWJGp9N1U5UZLQoJvc5v2uUBKmtwGcGp85tRbTEWmj3U",
  "key24": "32Ld5eD8AHiD6g1neMy96JwAApDuVKnpwjVnnyWwRwHivQditRPVpY88pR2d1f8UuybuPR3qtHSNv532t6Fj5jad",
  "key25": "418356pGupz7qFeKLU982rJBTxNSXWyuGpjsSiE7zkSG4GrXybeinDgxd8BE6AoR5z7n2YsiM2wjiW4mvE4peyaa",
  "key26": "gYpXH7nBevDauaGhuGzc13JbjwQ4Sn9C6tpJDuJHGFq2DzQbPUgTrXHbjsZd3tTHy47vXJEgLQg2d6xakmv8odK",
  "key27": "4KvXTHQD3bg53JBFshssQ9fLtyJiELDnML1u863YTtKcuha5Tr91XffHvzwdX8QfXMa3SgxUpa9PziY6gQuZFBdZ",
  "key28": "5Bj1WwEiLkeUpVQCKWvN6CXJVvfy2b6SMX8ZTNxvArvmCwvLbDYcEHCSCC2354FegKPT7BdPbeStps2VBGvUoH8z",
  "key29": "5P4tjqQEQ7xjhadVib7sosywaEoKTo2Scfabhv7vp4pkMq9s73WArrY82pBMquPW8Tq9NGBzkwjo2FkFEUggC4wt"
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
