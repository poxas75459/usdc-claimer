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
    "4Sbzm9LnZKGGYLafQUdzcGtTJtWiFrEDsv7tDFXE4k3VkjK4fyfZZdjV6S2K9T1STRm9JHHC68itTu3NMFhyMVKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jp628WXPPKVVjevQKwoGeNC8Gh2Q1z4uHoRCKf9pzAsbmdiGeH4XvNvnvHZscMbw4sR1Qo3gL6TfPbwWBHDD7L7",
  "key1": "2asDQK7eCGCzScV4Q6HwrFSbfF3zKJqe6KJnft1vMfX3n7PfCvcZJXHfSKnwADvYRX166QSGpcYonQwWi5Dfnt3c",
  "key2": "5sA7nvyiXGwDLwqQi8NRMjhExJp8Q3rXTpMYmJhjByzqDgBuB4Ux4qFmEn2odMzBt8h5xK7VAEJYvCxs82qwT6eX",
  "key3": "mqQSUV4LsVs2dTXb3bWDCLCXEREk6wFsvSeNnXiGkyeLHTfa5Gx44edYVrF1StTXMBR6iHfLwku1twdr2DwxuGg",
  "key4": "47178n9dtMbC5dAs2NiRk5uJtEy2w125XkihMj4nJp1cJynhHx5QrY6btAxdkPNskFFNKGnnp9AeX1EP2p6KFjuA",
  "key5": "5sYvwWVLcKeUqvEfLWVYLrDjN58Bvq6FY3xi1JzVpLR5zN2pCwvMDnvyQG4LN22ehKZBvxyfdjAqRvgtQmFYJHGw",
  "key6": "EYWt3VgqKmTNkxRjkJPnkdVWX4nyf57tFJhSBZeZgisFNU6RkPEmArXkeSbuwjoZstkCfVMHDwunfyyTaH9K182",
  "key7": "8MwtP6nWFLxM5mgCPypfJ83idjTfR4ZugQs6Sa6nYCFCqGP6bP27dbbecKQdbxbFg98WzPYK3QJNj51dCUbhHt6",
  "key8": "4vE8wZtyjnk2czJxL5bXMgc34UyJBqiCDdck6viovYSMmniYxiXzYAEWHefDYfFCwkVRC1nNebjsViTfyYYoraSR",
  "key9": "52VQJthDnrKHLJ2emCkMpQ1WsTZ3hXQsK9TL5jcam1RhtkBA1QKqKp3Eo1nq84V37ZHHbBERAm3rkMH4FJKYfGoX",
  "key10": "2QP6JbemppuNXFrYQe6NhXRBFChbJVYGQBsk5HWDBBZPKG7pBMdqP3FvJXDfXAcJdDr1BpnZi15ZBYFT4fRep79B",
  "key11": "P6P7KrovgY43x5bUVrgmLXnim6cHugsgAB47xYvj56GUjYCoLjRq7fKkm5Rss8kNQQVJNdXKTzNNmZVzCWk97eY",
  "key12": "2ymML2XUBAYzktbwjAxDdsvUiLqj2APXm1xhcKYoSwHPCSniEMx5g8FJjEExSEQwUUUKNceDy4BHHnde5su5NMpu",
  "key13": "5SDYVsnvUJHLFRXNSsh6bLuXYPFvhse6E77PnWGb7V1tLtMLjwxbjJ5pWV7WJ6Sgr1jo8fqzjfzXPEcfP3LGZ3kf",
  "key14": "32VHubiTVqmFsLupJo1wroi6eXLf5sAbtPHXRKybFRzg1sY9zALvSGXNj565rzRvneXMdwZERtBTxmkJoxoF6QxM",
  "key15": "2iTKxbP2u7xtnzA4z1nbhziLwqFXQPv7sLFWqNiFxMTDwcKmJC5K376Vth5DkwRYNQp7nQpcMwvMfghqvPYh7cAp",
  "key16": "5MPC1xJBAEAcPS5WZ4F5sCXDGVa3LSd841Mt8w9hfstH9TRgFNGCoso7qXReUuCi9VmpzZDQJueb6KtH4S8y3bxr",
  "key17": "3GLdKK4FMEtfB8Av98bSFk5fajZDNvNJEGcyr5VTJMRTkUDesteS8qDxrXCoJXW6zkfwdZ6naRF7YTeHVCawT3dF",
  "key18": "5gmg7MMHw1RScmEdychmo1CanK56VVJAjM8Mi9nAABx8oVLi9Z3Fa8KNVtSJn5aZasHG9LdSftBwLZ1nyhUKxeSu",
  "key19": "4zHYmaVTBpuCJ5dKJMkjdaVg2XiBbThfLEMc8r1iKAgyVrYXcrgWGGbZ3ueSpEp3VK67x8zsETa3L9y5dZuMjfH8",
  "key20": "3dwE4NCQ5hN2FiSKY5eVAYXvmA14GqY75fdEXUmE12t5PB6k2C6kHd8tAfbh11aKM8hh6bM1Ewxcv4zPSNR2XTyp",
  "key21": "657jf5VfiQeUw5A8jo2gHxULc8a7UkGXo8zjwccvaK4b39nYNQdQRSEhh7LVbVtRYeBYueNypPcrJgkfTZqJNJa",
  "key22": "2qqiuFpQ5SGbXfu8RGNEVQn98rzvqLjnG57sGbJp6GR983FpEiECQCAHGSQxTr1EFvtTyCx3Z42W7m6uY4M8THJJ",
  "key23": "5WqBLB2w9sRzmAaFKcvXdhtX1bP5hnWzLxcrXdMpLUiL4F3uzTEEn9TD9jMC6F3owwbtSZ5qNBvUa3XZGtHDgP3C",
  "key24": "3sRgChfP9MpMzf6Z6iUNsRKfPkdnbMWxgtdotnoLF2ZKYHm9ad7NaucRtBivN8irwXHLerViFNMBCHfTg2xqpfuf",
  "key25": "2i5TXGPi5fqT7Y6718hK6RyCr9ca9XDP9mLYpysFFHWdvXT8KvkVHVLnxei3tFhfGEy7MrJoFkWEcnEy8ju5NGLN",
  "key26": "5H4p1jfocwPsDyA3QQJ4XaCVxinro5PwHCe2FXzPbXpveGjksbyYQaT88UWWBp5ukkKWptuRYFhBwhDM9YRaKJiq",
  "key27": "3uVWtES8ueUGqMiQAcAfxZYccQFnbCzZooTJWccj5x5d5bYDfueaNVZkUybXyUZwwDJsSWsp7uSfxjztKUaucxfn",
  "key28": "2Va2cpt2HMGw6K8if2UVhMxWTTC9B5n5BWMxxxBevGHbicehisVhc6ev3oXdexSFvSYUqmKyEuyFRp59xXf7LhjW",
  "key29": "EWM3P3Mfi5s6AeDF6yofUYBtMhveSkQqMXk2BvDpXw1SizsrVHR7mwQ6uaVhtC4dgiwGp2n1jmiMewPD19tQhDv",
  "key30": "5sPr623ydQaitweXQ3PqCxEPdu5pB22jbiKqHCEZW78gXKSfYizrCDRdRY5zr1JDbag4nZJ1dUoQ7LArbg4p52QE",
  "key31": "2eJ5W52zSUPDXrd2KXiniUksg6b2qrFioXbYxjAWbyzmJRZbAUDXnkhJL6mUwRCRmkmVpJhK2wBkg1nwAwshGgGJ",
  "key32": "477KEpfbi4tr8A7H63t6HMWCcc63aKBZSdVFwMJZhJ1CJkg7e2n17dGwiZQhquEaNbLXokTskM28KRmpFhkdDiUK",
  "key33": "5upYXwSKSF1STRspdQYypUqvPerHkMKP8St9ptJeTxx3Yr5XSNAG9Sn3PdREbkb9ZeXeaoj5QmqLdGjtpw2yq6uh",
  "key34": "5tp7W19z4P2ox54M3JMJ1ZvjJVAFQJopyGtzXNtcvGonctDZ3uXXUCnFHN69PdtDmNQLsDKcB7CH2k5JN7LCLyo1",
  "key35": "ciSYZLQ6gG6xfxs4tGdbvHdS8ZX6HMzNekRyZAMymky6PHx3waaCyYpynFaSe27qwy1pRH5sFL9dQ4vKMRirNbH",
  "key36": "2eVg5D5M7DdbJwF8HHjY3Tnb25pD1w945wfFYiNg8CsPbNDYf5Y7yJ7YP1QCDfxyXcbBfWjYgYy7u9R3UiA6a2Ao",
  "key37": "5dmdd1t2HnA7XA3Ei5hwEXRD29q6LSYR8GNFr8ZjSJFiesgfkRFiUEKwmDBeJpm7XsHANNiADw6euWYmGyKMa9SB",
  "key38": "3GxikbDGjKP4oKpWhHMGn46autizCGqv4pFmAqs1unSAMG7r7TGp9PkE7psJPXgxEUbfCuM67Acav77BrsPbHuQk",
  "key39": "3crDuuovrkkWMVzh6867xTMjcKUV2agTbt4yGhSUbnWBBrCyf4RqmvuHt1iBqD7op9nFsp1eSno9tELckJLvbXmF",
  "key40": "2cc1mL4KQBEvUt6A1q9SNSY1Zw5cDTRihqxUK8AHroavhnHMQKawwRibypJrBMain6CrG6DbwJGT2vSp93GPZoxD",
  "key41": "25Qp4e3ubG2GP9AdTpUfFocJxdVzuMoZQNySEKpaHaqKXdWJDt5cbBzs2KaCxJMNna6BPPfNN1JxAbLDuBoBKHWJ",
  "key42": "5WTorfdpBB3pnHerK3tNUzJ1sr3ENDeMSn36DSwQCKPEoS21RiCJxDwYje1W33s2SQMvx9MaBFsJA8k5YnYtXZ3H",
  "key43": "2XR19UEeUpJNfJ8BrRtFRqTYBzCWBYEaZydJZ19s1DoCtSkM5jLkrK846P9um8npahU7Q5yDpGvTE2JeHUbN8vjf",
  "key44": "3WVAtqWAERE3L9rQahekVe1sBEFTaUw5k9WY8FAv1d9r6zv3ZHQ9gzzNWhgZy9HyA1Tj43JX6rgVUyYp1KaDT3Nk",
  "key45": "4qYFJcEqxwNS7uDXtUKAo3cwEzdLCNMaWShvSkWjJypQwRifAfnwQwgGjmVQGai1SDKrP3qnUnzQcGTVQ9vXUEgK"
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
