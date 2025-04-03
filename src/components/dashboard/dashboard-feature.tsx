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
    "4Lh1B4H5RPMB6mh9Bi8dVTsHKnYqa9LCS4yPWAj12pHasZuTMojgcBW3gJ5ChzATfK5Dsv9KXm4TQDozET5bVXGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51aSHQ5yvEgprD77sph1ni7dwVC8kdTueWgn8ZN2k1kyxLHsU52ie8YmkiujCALpV7cTumC8xdX936JZXuCV9Fav",
  "key1": "3z8G9AhRMWxAeDkg5sx1qvkBJJQ5RzsN8oLavrxJdKuvoePGhXGZ56YS9CvnxA8CEo9cdb89ubW7pYKaL9R5sYto",
  "key2": "YLfBtBtgePK52umgWdXjJv4vABaWzVarrLRvxshsJVDsV3sMiLmpburiKA2sau8wRBKS4N5ZPhy9UPmFZKHYzCp",
  "key3": "386Xy8HLqBDz2ExXGB5UKniyoDBFojj7awfsQKem4ue3D7zSLHbdkf7WX6ywNh7aSQ252PF7uyQwYFnGXwttoDLv",
  "key4": "5c3ze8GRT4iPDqCi6kxeZSy7xiQLwa3xYC31Zmor8X3tkfRmsEg5UMhzmUdcq8jD3dhkWgoWtJevTj3zFCQWeC6z",
  "key5": "585Lc98D49wid2ZH3S6qGV2qtdve25UuZWZjw7fHHS27xEmjh9im45ANKtcuWThPsoh3SCEgJ233FfbnswVA6gjU",
  "key6": "kv5GNWnCukdU7LA9D2yTh4iLNzcgbSEzZi1JhJntTnPT2nbethYwmk9sV6xTqjmkmLfuT2BTW7HpAGaSKE95yU9",
  "key7": "HpezEATs4atNMervL3wHXz2irSDM6x5zmqyAwQ1VMbrwWfPURrXRaVmNpPGf6EqfSoS2S6eTHNBYNr8Kq1rQyd1",
  "key8": "49cvX2qiaqF1s8vRxksb4mAU8Va8H55CxMLwknMeGs6VMk7asiC3pNk9do6SnpQMCJvJxjR85VNJGTKMvuYhYCvB",
  "key9": "3wy6whQFhVzmsdS6w18pRWbhgPw9kTKvPghR7JcqYFUUzRnYQf7xGREGXvxTbYLJh2vm5wwhCkAkRzN29vRpxztm",
  "key10": "nvr1dUskWCU7XSdLQaD4X8dUxJ6oezgQpue8FNAbE1coL1VYnHssxoPrDoNSVaxYjrmQPK2Czo47Qvvj4LUCb3K",
  "key11": "KTHe4hkTJY5F2QB2BeC3vBSG4su53hAi3oCfnGpc9mimF9KBoZJtJkYQt6Z5CYwwi8tnmDWPCrdTt5f1L9zYRBW",
  "key12": "JYyKD93g95z6YPgwKYWDsVtM5qLUrcsEEELdnx1vj48J2UkVC7WiXzCDhJnQn4NZEsi5DnGyLPoG3NpF9w1CUYo",
  "key13": "5n7hXb7da4QAZhKntM8uuqm7yZ4Qch5hQnA3wDfY1S9bWYFyFAz1toyEuTqDYHJJJnDmvBzpYg4eAHmZyVLkPzD1",
  "key14": "38SSTq8FnBWfnnTEdwGvHf19Q5UJRpzdXwx14KiBevVFp6rmXxsHxd3QWwivJwUCB1LAJu7s2RVJHtJehoNsyDgi",
  "key15": "4RNeoKR2pC8ANw44etJgoNLbBUfa1MmDi7ezFDvLkrJYei8y7pKcJUbFfpPtJMFyTjegyKTq7cwW1joTV3CcERKm",
  "key16": "ECyV4U1bTEUmpQUtKt29JMH1RiG3tgqrFZWPVZWybqoU4assnLjg6qT2vmTeqqAFbmzA4MdhfveQgdY4EgUtjcd",
  "key17": "4utzqg1hWKS6hteabrU4CLbrWnLMmj3xJynZZ8FsTYqUjQJWtiPU6CMMbFyD34By3cKjzs3eMxhmjqfE9gqNvxwK",
  "key18": "2tE5t8dp2yLJmBWvkhjD9HZqFm7MfTAs7HdxyD4rEYtE8rgM9GPnJcu9PhngZzr3Yvpt3Pxw4wMyL9R2T7S9nVzu",
  "key19": "56mvQ6e8xmYRzgscHZ6ocK8ikhW95jHWrbyvQiXFD2V9pb66RjtNemo15p7YTeydcs3DMEbmz6xbHKXfr1Byxmmc",
  "key20": "5EkyurRm6Adrmjn9j3mznViAiN4BdouWLwX5EaCvk78QbBALWYMWUuWeEc1DQNKHKwMedG3gdiQtfVc4gy1ZU5s4",
  "key21": "5cqfXyXEkuWSRiQActgp2wLyX6qKwwFdSK5a9sSs4cFvNwX2BY3PQXgsJSRxPiVyzMcRo5ERjHoYfeDhn8zXrUmi",
  "key22": "4r4Bxpy5rNtGpwKTnRqwZQVP7XCa3yEqsp5oqbUydTjPFLUmn3sfUwZyo2rv4Nsmbemr5bHNh6wxgCWFMUNw1hqb",
  "key23": "27dLBmQm7zLeQjpDmt7LMBomgYYQGQCM3k62wgo3zTtikBJNM4dHGVvkWdDPeLfRLdg6cNyuzAxy4dQfRhEN3srY",
  "key24": "3v9AK3VjpSSNAfQunpAMet51jZ6SgCngx4xFoaANDyennR3SiVpogoCz7HNrgQDPevtssG54Jj8yR4ysCKt8Nvce",
  "key25": "5gY7qLr7GUNLdPjd58ion7zamS6q4dbcUWiFgWo3X1FxqwMVAgfBYqWQMJZeXRNF7BJVWTjwytBes3tFpotQN22E",
  "key26": "3KLvNn1aNE7UEAfMh8h7oxBSHG1mYVvQyseV7fYExDRJaJRHprK1cjtGwjeTpEgLCm4fjUnovtb1ufLXKU82mwCs",
  "key27": "FKYzkyggADKDGw27WEQmKY9x8twRqe8cfNmS8DKvnfrYjo3gUVq7F7LiUQhEcVpnXjvBHzrZN9rbfqzQyboCx7j",
  "key28": "5g6jmc6Wj9eU7zvkhmBExbNy3haaarHkV4gK5q2Q36LQTUZboPULo8A6pqYa7BaXLtTrQZjbg1YL2kkWgio1Lji9",
  "key29": "5fcJLvsCDbx1T8eyAFotQKuYTRevgUXVjeaGd2jnKnLXxFZqHvTyv1mfkcbDceyhmLEAc3xgEXQgfzmVDfPwTXAJ",
  "key30": "2Pn5veLFWfvF9BvDY1DqTB4ULJAxSwxmxvn5vcdRqdDHfyZuddoJEY5toQnSJaCvBKJQwTgfBy7LNF9i2LK6VE87",
  "key31": "3Y16npV8jgpNL1WRHqQTDLZjttHYPCj4h5B9hSSR8aH1MBK8hW9gf5RfaNdtpMytZu2oLqDbEBX2swJRSt5Aq6Ma",
  "key32": "5kaLje1bDeg5ApuZVqye2PF7xdALUbxRpX4cNuX6Gsa1tCZ7qaYDMhMk12FydHP7m2jKWDNJsQKjUjrjdStVSWxd",
  "key33": "v5AHuG7uCdgRNSKmojUgVSo9pkDp6yhe18uSprBe9bJaugKi4BRsgEK9ZQGvZekvLBbCa2g3oncsTeD7NUm7779",
  "key34": "3cUYPqxFDoYTxPHVX9fK7qC75kiGSvobnp58pt3CqikH5oq3aJCAz1Rrurn96btzdLBCj7Rsu1EC5vVwuXFopNov",
  "key35": "2NMkTRgDb93KsmkE8b2Roo5QsPjSzM85V8asxyePJD6RqLJakqyLDDyLqcr2NzDUSU3n2w1tcbWamiCoqe2rsQ8C",
  "key36": "3Pwx7n7HVZE2Kn9w8Xf3oqPEmsb13hS7nDyi7Esf32PwWRK1kCaCBs2CPBrbjHgWf9Je1ZqqAupgQoZrjT2E8SU6",
  "key37": "4EDgJ3x59EXzC35KXwip8vPC5fM7m1gskMYGDV3P2aCL6UETVrjfDbUCZr2pch6398BRnygCD5pyHdegjYwBwwBP",
  "key38": "4LSW7RQAdix6cLs9zL7VNy6HUQ4vkzL7dcdeGbRTun8T1L77ZixB81P36gpfAHJpuozW12M1kGbVXQkjyq8xutD3",
  "key39": "tE3JDNgQqpYXou4NaXYSdV5BfnnHkdwrSfnpfDzW467YCyzSU77jKADCFq1doxHfdBvceDpPy5jLVLDJVhbEZA6"
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
