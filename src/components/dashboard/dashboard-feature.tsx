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
    "5anaE6kfzGcj3bKk5JZRUGxH3QcBYDwShG5j4J8AWbQp9mLc6m3aPsDD7m2Rk1aiJGsPXdwxL71ofzLdHejXiQkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YNYe62rFg9H1gNifuJzi2oFQceTzin7QXmjpnKqwgU8NR5MWEaeFyJSTDd3BPZXjjBZQvRFmQ6FmAeXJ8TPLKvn",
  "key1": "3MNMUU1DivhAqQTJL5bTguHpirqWvNF2Tt7D4vQAaisVWa1Lbu1dRVyEFjnA83LfKkFgwH4n7vJLRR3sN82L33W8",
  "key2": "4FSnc3EjCfaxjnp7XRziNcKVdAMEUrmta5WAv755rMpU1FwSQsshJp3fbAymcJ6VPjcVLghhvVsH9hTV7XYcb75U",
  "key3": "4yd6iqvmGrRfBrfU65jsyaFo3HfQMLfkvqQNjNs1eFMpicUD9TRC6ZPFWGXMKEFCqtAerVSy8DjUtWwaPckGwMAM",
  "key4": "2SYZWAfkmm6PSGDCpvkYVmsBBUxK6xNNzNmhS73BBzaM4k3N46wocNeA7D4wCX43AunZjdiNawwQbaCApSC4bLtq",
  "key5": "35M1kH2HtXJUcUMpLQH2TAURpwVEzLrvZ21oQbMqboDLvpsApFZPuqU46YjfysAuJWhBC46SkLevFqBFr5YoCxLK",
  "key6": "2zK4kvaLL3axYcvXDSFnbkrE7Y12XjRAijjd6ntS91sGfVWxLU1BKYLkNBdafYufUN7ZYujpg1UiX32wu7M6XWiS",
  "key7": "32N5pqVsTHiQSxr3so7mPSnGQqRS8r3D4KYZhnmCmTkH3ptc5oEgncDqunyHcZnneZJ6HHdPTvAiaAzrGtBBgyxX",
  "key8": "5sW911KYXbNPE1EgFYf2GSStZARYGhBQEeCpnfMHyFUrmMfpqwGPCu3HWE1GnLRMRj5vcLN7d2hqZKspdhkCivpT",
  "key9": "5Qr9vbmaHMu28wECd8PThZNWcShCF6mJ6QNSMRKknsoyUj94ugR2V5bxKsKy8WoJhMvtSTq5FQqSW73RTA41ZDWJ",
  "key10": "3LRKBRhXiiWcdWUyHuXW4q3gA3LcWuwjZNqLatMvBKvHhisvzcqg8VCymXGtAe6sc434TKiwVgZZyZLmmQZ25KgD",
  "key11": "4F1xYjnPUyXVBZ9M4rtWQJDo9toYPniMjuCrFZKE628Ms4HMxP19yP2cvwaJyeZFevqQcaotD4yDAgW81opLa1pt",
  "key12": "4rXnFoeLag2DqQdcu2Dv9RTfq3cqUy1YvWkERnxTzsMmGKMog9283zmetFFUC1SPvtf6EQg7exURmGEW9e1BhLs7",
  "key13": "5bEJiN8rdXrMLedqwSYBf5NMgDNTja8E5QfR35RsFPtvHjk6dcHby8xa3XNzBrtFmEQf6czQbteMXf2PfEN4bvfj",
  "key14": "54NfFuS9v9yn7of2xJqfW81bmid7Jn5FwYkQAo8Ekndz7zytrDVbAgx6sBB5Ct4mVWoJVmphjiE6eTy4fVbHPKwD",
  "key15": "36oZsY7powRbSV7ra7EGfCjCpafVo7v1pG8LLCHSvDLFNKMcrnf84qybDy8AkaR2FGKx3Pdn8BGrXymkTYtZCuHD",
  "key16": "3v1yzTahbMcie1f8kMFrZwNuctkVDvfQKBQu1quSjBAPAJ9MiAPYNS9Wt3wFjxhzbR1psALSU9UZY3p6arGHkgMr",
  "key17": "4H8kgs8FfpPkrgJaEEU9SP7Byhh2efKtBVVenhiuNjuKs7QcqfiF2Jv1xBMesVScDjUFejVwjUY1r5ZWVX91xhXe",
  "key18": "3B6DRS3TJYfCaCBjdVF7t5XP6R5iKuY5KgxtpSuFu2JFRmn2ToW6WoA1cqkMfSCUeUoHytgsfdSf4vaPg3H9pKsv",
  "key19": "vTucsLwLN8KnMYRLPyuJkzs4A5phqJnBmHvH7odfRo4LYwxBkdA7tdZHxaf4wT8n6qbBEedMnhJyWAdTMv3HnDH",
  "key20": "35AeHFkRmV4auKxBzMk5cwqASzmnn71iCUXVyPpScmcH9KYNDT3cb8TVz4RiwLKsbfscx6YLbt7kUdXQXpD25EZ7",
  "key21": "4t5Chcj2D8XYbWCYLAkyaNewbpRSZnpAzp4jEMBNQTaNdjEgXjocnSCbxjwo8q7AoSVg9W57Nxe1vHkLo96f8knv",
  "key22": "3XyKrjmPv5LTzz7wpS6LMqVBwBVLiNRjkgbDVkPQuFqnVMnNco1vFxjDfsuF4d6quGBeNmLSc6eu7EubE3iK8G4h",
  "key23": "5xSk5DxxMEWaUHszZ7NbKgTYqNTcZGxXx5cRxsmMTsfhfdf24rjUr5FuKmdMP865VCtck5SNVhHAMM6JcyH8Hsau",
  "key24": "2dqn84VEu7kayS9zSkAduJiQnNnerSN9a3MmyRHqrdeMsaJ1KsBfEhuAcvbsi9zR51FgkQVK51gCbF1dXaN2hKhE",
  "key25": "Hgb9HKHVuYjE7ebEHZPPWUHCo3XFsNdN13CMURFjNgrsf34oqNGVYnLpzfEDAbK5XYYL9ofG6Liv8LuzkQV8JSb",
  "key26": "2hyMPEfkPurGvPVbGia15gH1xSYw4xHPeEMr7sK7U84eAa9CMmWvVvF3GdEXoYvGbFj2fVnrkYmN7Zu7YphBfcZW",
  "key27": "4jHsn3ZvV5xMGLuvJF1SUmDe2kvUCd41jVy6MonKSQciuKppbCJ7zp1CaXe7LHMmjwe64WarCiikuayvuV3BpFJd",
  "key28": "3bpKdjorUy8VpoNeoys386NUuhtecaijR8ZW6ZCMXNMbLHpJuwoEdJ3mZv27sxvYPuWE27vsXtGmXHJkiK1gkqjq",
  "key29": "3cnc2H9y1rph3BL3LPKNRKtKz1hLaxpmvj8bxgBBDsBsCabuFpSH7hUQMprtqpEVjHkn2AVZgnPQeQXf1ZB3TpqY",
  "key30": "4oiFxEeQLL3tUoFv5hGKDhCxgrSkTKFTN1ZDtNixNnfWg68tSerH2q6TCEL2zPdJ8He8FzqVM5FyVWBvY6VK7jd6",
  "key31": "5FwGto3qYb4BiADawnmB9hsda3oDJa73U5x83Jq6EoNntVYZrLdhqhRxDXhZe8GbTaFT4hbGy7cBLjVj9Qw9GQJS",
  "key32": "4KArmzp5hzYfY67i2fv2EWXLpMRKJr13W1S1J5jhsAbB9KHcMmpEFbiTwzQ3bUZquZvGPcJFJj99q2WsuhZVfE9j",
  "key33": "5MCfnT9SxjRT3g9t71kCKrvBzqGgEnZivVb738ZEBQLmq9bkpWuERCyjUcBhua66YZzY1uvBXEzwQYPgyfTTjatM",
  "key34": "3Lg8hrXs1oAaXCf2QdipnKHAKKDdf6UMnchXcF9dFGYebFEEnqCdLRyc6NVx9k1bkpgkGVDevcMvqnHakYqG8WhZ",
  "key35": "23nkHgiHhsiRBq4GSmqduz8R4GR5UE8TyLQSncxxbnyydjpNRbBMMcqH1PYuLE9WkyAoSMKB1KNQgJD4Po5imrpt",
  "key36": "63rHp41xfepDahBP7REpkfUohuXcjfX9smM4SKYoS6dGs29Eqr4Entpio9qEQUNNyjRePacVgcw87T9VgdBAvaus",
  "key37": "3rxQB1RqB1BYEdoyaPmTTu7o2aghoYQks2N4BHvaBZKYAoDYmPU2ktFhMaxgrFThdxTkqi3GHtrKDyacvGnKKGBP",
  "key38": "3bjtm9DPZ22EyQ4Fc6GVg7F1zeKzAjhk8amtRRPcNUzk1VmZY3o45St3UaCuMBkwBn6moE14sSiB24vQ297SWmwt",
  "key39": "4dTZkysyeNQsbBZ13EydvZkrBV3WvGAZg9cf46zYsSqq3Yd5fyEAeFrcs1bM9MGZGXsCrXjCxL7w4pi4a4hmSMmV",
  "key40": "XsXB8m7CvuVXq17rLUX8BVQsqhXtddGhTxT9jtZgFbDUooAv51KmnhXzveNAeFRTdDpZRQhH9yBMHVxnVqKHasv",
  "key41": "4jTpqfbgoPMMedKqHctqZwNUrEyz2aur3eZoo1SVG49gz5hHXUSNXdhCjttTFJjQr5SaJD8cQA1oXr5R2uYmDBBS",
  "key42": "J94h9L7awor2HoqHnNdzB5dPitmyaSBxB1iqbehqdjt1RSVsmNTtesW1Wdra9Tiu6N9C6SUrcJgfCzZ8RzXfbXq",
  "key43": "3V4FNQaE9spovN4mnxKpgjR8F4coEKyy46WJ2Jr8rEQg5JJmnyZLzUBtwQ6VBGZ8Pt3ukE9YA6cjvb3KaNuvGsqR",
  "key44": "28RQQ17LGGauxDoD5iAxzq6LwRLZCrbwZHmpA5tiYbRXnYMYAp1RFPDr1dmVu6D4s1Jhw3sNU67jdU3ELHZAehcV",
  "key45": "DTR98fYLeakN4LisZs6NuDqmqmABxL6dLK4GrNMeQa5E73ASRYB1vm2Kxr1d9k56FcHbpv7sY8FJK1FZKNLW7bb",
  "key46": "gZ4jzauXBcKWKEeYmSkHHUrAi19oS1RfQXGW5tjmUtzrpmW2CxTerA4Wp4dDAfMYxwbL7YT1JKAUW2uDjGcqK8i",
  "key47": "syh8ZFhj5GbBf1NgggSrubvnLWYDfuSsztwHF51zNKFf5XKrTcMA5CTBCaaLRyUz5s1DXLaMsPLD1R739truhYC",
  "key48": "5FptgH92hafvSC9KDz8HTTK64hKSk1to4pXFU84LYNm2HJHYkuTqQKzpqZ3tYiSYwoSqXs3o8Qa9fN2vE776VjGw",
  "key49": "7gaLRdDkBfGazd67TLCnvUUdwp2WDaUwBD9iYZ11scGEFhPE7KKHZuYrwV6e7R6iC4LFzX866nt3yNnhVKPhcbX"
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
