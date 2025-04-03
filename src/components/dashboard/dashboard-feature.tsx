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
    "NKvYzC3Lk5NXi7wHpWsGYs4cSZpfmvhmRRhXMzmNXt5AGx3uWqtaBMwrpymsRmt9gCNeNmz7iYErz8VENbhYFHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22h6FndGfDT7YbVDjMaktvzCYZSmY5YiAKNgZdND2eCJGp7EiiJK1M7jBLCFMp57sEvZZNqAvjxm1iGTffr4XAmn",
  "key1": "25NYKvZoxhwwJ9u5ZWprAUcitUuC4WKu1h1yfWEPgUvMnUD1cftAnuHH8QH1ggBHFAGNyQDgkPC15TnSo7WU6LGk",
  "key2": "5puieqA7u2WjL92X6QQvTBJ2FBEX1x3Ur2FdmS2tkNQUUeG4YUTZVxCjMQqa8KPUCSZX6VQckBnjuqPTakZ8s4H7",
  "key3": "QoQ2EjL5DcnUmxzsPfsfTpBSa24SGBDF47xvLH2SoM9py7yfRx4cfnhhG8vphMWKdkDPt2agEJBaPqXbN1tN9bQ",
  "key4": "37KAzQqnV3xM5Wuhv4En6HfRJiSPTzodnHfpscPaFD9hVsqxHVSroaueBwcN1xxH5oZZ3R4nHvAJd9B7qY3uFpQi",
  "key5": "5DyA19Dgq7Fvt5z2LtK3dyQiKXARuFF5h82g5Ui3oP2rnEfw9taVHVLoP87k5FqBKDXUqU7ZPq893t9BPHQV3sDE",
  "key6": "2f5TnRCMRmRnNydJzDAZmFE43DcEUwfrkfrdQTBxzx7EXY5Hg44pawGwzLVDiVa8QKjJSXa8RBhFtNCCJuztcs9E",
  "key7": "5pZku7giyUFXrxiZhhwkgS1vB5AcqjtP6nMvwtATbMCvRtsBoAMLxVMUV44i5swbaSC5pK6KgoFLpqj5r4eRPNjn",
  "key8": "46jNHS3mffSq27ynk2MN5ugypEzhmU18Lkhoueqx5Czvf8jnGiNWd72HWJjSps2yhtuCQvzWhSUdrUPjYqGog4HW",
  "key9": "4ZEwMXcgcgTSxhPzY9TQ3iNrejeR2tVY2WKSayF7pEbXDNdVbbszdqmHUyUxX1JsPKuwyLujRAyB9Jtc5zDWHYEd",
  "key10": "5wdNq3k3KnpLGgLKRDp3pEMeavWtnKUTNxWPvmqV77hcfwUzWygmFuQGK8Xg8hfy7CNcJ4aYFB9vxsBmGfXBsYXJ",
  "key11": "4Uvh6fpzDdsk7R2Y3QayUWjwD7stE87AQuim3g149wh83qampMXXjacGuzEuPt4DJa8VYnXVFGBEA2AtSe4ZU1VM",
  "key12": "47oW3E1qx9pWJ26wwwzXSyB125nfNnyrKCPUQvi7YkRfSmWc2rS2KZLY9MtzKRYgcwfyuNchctUd1CyuV4pNrKnA",
  "key13": "4RG7TVMzAhnso8YLwcSWrvnyzMuwp5NMett6hYGivWdHPPmvzgps7oXRPkgv76JDrFkDtY8NKwaw2hEnwCTepHFU",
  "key14": "5uNR5LyJoPUhwanCEVKS2k5V4L4r9a8hzqUjWjhh3QznMhdJEwi7WSzDNzsB3G47G8JK4oDvcTd5dXQEEHLBi1sg",
  "key15": "3zANShL8Gn9YNN9tfj5qp2BpWcGYVWmzNeYhkYzj6HUr3HLh7dmNm6j3ETZkahVKXjUrGmaUBcsExRmQAmvzxii2",
  "key16": "5zKDDsM8ParSaqBtPfA8aGCK7CUDTK6W5nSx1trynHWou8QD9mfFNLSTGd8Y7tPKxqYzunf78ooeQs4BmWTXTfSS",
  "key17": "4gVzamXPAPzSRYDcKnSYR8drF8wZdPVPgPwWcZWeSNxW6S3HqgaqoV3pB7hzsVvLDyq4LAE86sqZtSnpUR51zFwZ",
  "key18": "67W7RgpFja5k5RUYN3m3BRKnYsbHoNkg8t9dJHkJJgN5sSQVjo65qvri2Ya2xYRXAaW9WXpyaufz1QvqhFz6zUrv",
  "key19": "5QkWVdTGwgfAKMupF7uA2nk3M7HjAeC9udYwif9smiMjBwj1K9bwKL2mrPWYSDqep4zY17ga8WY2kXei2L1rUfpe",
  "key20": "R6TfW3vpRZdabTJuqc8eYcCDPpVHaLFELmqeiEBMwoNvBJvWAnPPbZF6UJqBuxX4t3YFWBPcW3rHdh9zomiRVqh",
  "key21": "3AZKVQj4Puj7LjdjeahRnMvwKFXa1cS63h1J39r8tXLzJpZoyr68Zd2EPPuUJNvgmfeXaVAV79RKbUVZP9BXmLwH",
  "key22": "3MDRYxWpYUSaYbfifXmUTgKBX6m1YUveckSWmBhXipWBZaQKgpgHu9Kw5iyYoshQuvbKenmyy3tCru69MwwVgpZx",
  "key23": "2tDTjFKwxgYx5mMKvbGFFcQjZfs2cFUPgYsfgMJWe6XcvNe3dwjfueiVQyXd6mKrL9dJxLcfCJ6i68rZnuLLuqyE",
  "key24": "5YQNwg931po1FUdKGRr9YvsywvzFb7C9tynwD74gE6xLf4tubXvPhG9SQsx39prH3ETmTy7JSbQ7HxJeHSKL6Zzt",
  "key25": "3FAHcCER33KBWQ5N35sFVZvmRppZmSaMGW4Z5AaEqo1pHqdj9CpTvA7WC9akC7E2EL2HspjJ8ELBLgKM6NvPdGsr",
  "key26": "3Cw4mRpaAEgVP4p6S3hsmEgQDNmj5c33xwTWJaDrMjxGTeyxt4ab851WCMWiHL1pixYVarEsTj13LnyUEE5LGDbY",
  "key27": "3pikUyspnTSqKeeuqeHcPbsbYS5yeSSB46NuHnZnMhD1xH4TmpFWTDGAdy5S8sXMprgLGi5zvpz3n6Zx99J6UjF2",
  "key28": "2eKjQUiCg1A6h65yxMAWhFfMgHqu7esX97AGtknvXdGnuP6qaYBzHDjkSj1yhHFaha9XS2qu7PnFhPWzpxAQNRhB",
  "key29": "27BWAr8iPLa3bqw8YBND6QeocmELjekCqYeZE9ErdZKR9ePmANrSWhnHsMqa7ZVHp75VsoPiWMYwsFdeiR6XhRTX",
  "key30": "2bvgvZ5ccNGmeYpj9rwk4hK7pJSHMruVQ9anh6g91a6Q1M9d2yAwT7g7bSKUZA8uzdo8E6Lz3BJNxmsZbVB8H2HH",
  "key31": "2r45CyCyqu63sHyTamVqaBrU4XuMVfcbhhUXuJG2cujmqGj2AsWKdzT4swWCVXXsLJMZXbapDLdP7pUhWuGbYZgP",
  "key32": "BXAYqJrXLPCguS2zaxqr41cK8cHKRiwsMRXQnK7KCbEBkd7y9uNnC5HbXXe34wYZP2FKrePqnpaBbYFjci26adv",
  "key33": "XNTYUmA3Yr28kFj6E8jg8XhBt8Ss8NYmvfXamNaMRbKSQ9HZ6eeRYxbPAYJ1keiTBK16pRqbRzGke1NbHDihbj2",
  "key34": "sfWakqwdccKopBZvtoEDfPA81R6hLT2KFEv3YL53LJnRSyvG1ZPYkiEvQfFT2typpmpKcCcJfofrHTF3CWR63te",
  "key35": "5KripHpJxWTt4KMZmbbDq2j1ScWG34so5u1DHiySuvPGE2bLrd9yGCfjTKj1rhemCMYvgYhomNquJmzpMCKEB7ZA",
  "key36": "Qccb8r5NiRXmG4oZYJorwdys6kfjy4Pjsk6Yu6vFHE4Neg6QdwKXQ1KUaiEhJvLw52EdKoR9tvjkwGAbfvW1eyG",
  "key37": "sLVbW8MPUxbMmrJXL6S2hBriscsnBKYwmBQPCfDzZ9hjXuXiZtbChtkS34AwwkQQHJJUBprZtYdm92P5h12q3vQ",
  "key38": "3BictMKatt5RAFPFwDeNxqSDXSLUuGpocEt9TmryAWcMUxjFmgRYKCMPNPTMvVuyrbqPnwKBumwWcnynxoT3PHm5",
  "key39": "63HRdYnxmMuwfZTW81RWnGPSSJgwppEaqmrqeZ4AM8ccXq3Tfz4GqCxbsbPRKghayD2ozTJZtYwqEv9LzrrKDhoV",
  "key40": "2pa7YcWmSMxxMnQdps4idku9JWS5ZSPHZfe2x9N6vDyQFvFK6QLpZb2CsXJYkptrR3kXkhXKysDbo481Dv8JgEBf"
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
