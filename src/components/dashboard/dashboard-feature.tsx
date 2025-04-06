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
    "36T9Sjikvh6WnYCZbsFcnjsZG27gRAnB4CCLKjU2ZDExPTvGLCdX8fzf86zjVuw5bfa22FnJgbNu8GL6sZ9aBoUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HUHoqaQWtqfAakWUwqee1kcWsUjZgqMgHYC87gwGraxKbvda2ZAdXxiKCcnycs25PzweznArxbdqpCuSjPqGyHX",
  "key1": "5SR64BegruFCNQDkpYd7LktqoC8VkjNMozo5dbDrCqcUftmSytnR3Hos4iZDZsQBTJixsSXJpHNWJqHRQjKfhJ56",
  "key2": "wKoWWjh8F2Jp5C7ruZf3xxraNvarAS3vcoAsGzyd5hMx2UjtXzcHfyFU7LfnKjyHhrXPg2UN7vRGfGdC7eBrQmB",
  "key3": "3sC1tJvAn7qvKn7ypdAkHpoW7WeQHLqz3cVPk2qKtVjnFiupb2M3y5bxa9vU9D43SupBFtnkBEMPVuxm7XypGHjy",
  "key4": "5qbgu1SnrMZ48y73RwYiKEixCSdCHtGXmrZsXJyk5D2WCLreAps1xEgLr9RraX2nrccq5YTW6FdvKWtTz39KDjsK",
  "key5": "2pqMX6M7eVevYPbEpKKs4fPwBjevUNZqB1cUAJBieydJQH5Zg15oNHtq74HJPX7zhae5MMb7yogKtsFbWE5Jd9sZ",
  "key6": "5VeXhCNu1QQs7FrnoakLSWj42FTCi5AKEkN7E9ifcEivLfcpc6jNswW7Ve9WZsERx5L2uwqyNjrHLv8ob4y4FRhn",
  "key7": "Sr8EKD61hWSLxoaZ8iWF4TXjXHpvr6tsd2Xj7yYWNpKQtTRJrkFEzpxk9N7M1sw4E8rYWFi72BMidw7N8zgKr2C",
  "key8": "5Nk9YYz3Uadpco2nbuRdJix34ds5FkQwwLY7DoQR4FB2eeNGLspiCPAzZF2CfqwtK8iWVJYFPAXgfRkKJipvWBvp",
  "key9": "4BHv2dn1YPMzsimHEA8qW2AZ4uV52bXpEVs65qhf6DaCiq8RxhVkFFBtrP9JG8hDdJS6SJsKofDKm4xoziZMhYwK",
  "key10": "NNrZNLNn42FMRwR7WezWDaChCFobpqz245Y9RSUsmnSKfcbpNUV92U39TybhcAB9v3sAmsvc4F4GQ7GbiFh3qSy",
  "key11": "4h4eDBkXDZg78qjJnwSDvuP2eyYyrk8x2s2TWgDxUziK8Gqd8uBLv6CGrxpCb435cJ4FXnfj5TxtJxnJfQexdkVd",
  "key12": "4Yexmy9em3FJFvcuEv4www88j64Fj5udEXHGydxRDktiFxMuNLBG9vm5Lthk8ZqwurziSxbETbAPRR1KcLUspuYN",
  "key13": "3YWbts5MVopKKgXQXU7QPFi5mshMQrCkABMYzyt1eqbRP5uJcbdQqPPU5hkZy7h6M7kXWpMw8TwjUZ1Uruujg3jY",
  "key14": "2Q8EXane3o8m1ZQAKa8ry3ZNR8UhTrxMBbGmHKx7wEHo9kJSq5XZLaNRoHZLMdv9e9ZSGE3capWGb2vf64Jq7MKY",
  "key15": "3LeuLcqf4abEv7qu8GiTRvW6xfL4r7jRonMXpTpxLUXyYU5bZW3HsEnXyjtrwrSgBNTXw3Kc9QEbPEStPZvwRjvy",
  "key16": "2pYkik7tpWikf7KnjbgiqpmuqoQoLnupxKkghKLri8NzwWBWpn3DKQFMyP99dmShy9SqWZgWKGLYuqGoKQwyKnBY",
  "key17": "3q8ChT57LLsMLguFr9U5tSiTV7seWCqD6JAgVyc2FRNqhc2pkqwBNA9RHyA3vVb9JEMTJvYpCE1qBnTsAPmyerPX",
  "key18": "2hQdpzRUw9L6ZXx8XNrvnpNEQxZZWzohsqeUqdx9V4fDo1Q1HAFz7RgX2BaWd9X6jaKmwAGixEofaxwYHgTnuJVE",
  "key19": "41fTkN8XAS49FZ87jE9bqnAw8hxeavC3grjvBCLFuE4M8PVhMkVTday6Zd1rXsXaGqM2zh2Ws4wzSrs1nWFPchYB",
  "key20": "3RPRxqPwK3GPp5aBFsqJLL9jJkrorGc1fqATzHbjrUoQj1SiWiiSbDYS72CrDaAM7sKn2MUdmsjUFUcUwohywnZf",
  "key21": "215fHnRev9PMh3eSdxD2CbipFcMbzDH1Za9z9iaZMrdgusAK59BGhZQc4BijPjJyGVSeazNGgs2eWwDKYUEsXqvX",
  "key22": "29BhKc2iEGsYecjiWYzhWeckXraE5XJhenDn15K55xwqdCeVnx5ooBSaheoJVmENmqRS2cb7MFBH8snmgXUoBs2S",
  "key23": "5wDAZYQHv7bNzc9KsgZcAgWnqwvq8uLZejGpSKMcvXmTSpNb91TRzdGUQyJ3agdyh8GFMDS9U5gv6P429wwSeHJ5",
  "key24": "45b5pETFtUc7kY8qRuabYBjLhN5ic12X6nbL5UqGY1aUVoQH7ojxYRjNv9qsJQs3z9jZur6oQnUKDCqGwt74r7qk",
  "key25": "4VWFULM6fZq8kDUYRTpurAn9rYy63K1AbWmCbXxtTiVeYZoM3R4vxANucPraof2FPPWmYRxPqaEtdX3L9XWr7zT5",
  "key26": "42vkCUqHqZmE3axcy4Hy7Y6qj32vGbsxMFKJpMzHvePFMK6BScCwx39GDjrDDV1AkQpRzG8doQSR7ZUinWD2oeri",
  "key27": "2xewoDUD8xzZ6Z2bpjYbN33uLa9ksgSib8MKiihgtxY4iXRMtHnRLse6YbhV1sFyRncpxwkcjCPJ8Kn4y6NySuBq",
  "key28": "BkHZY466PRon7CeCSJSdnHo9Ghobn61LNdyRNV6yjNkqhUTsj4xXK4znq4CRidpAR9exwLgHKGh1CSL6Y6QzdNq",
  "key29": "Be9ZvvarS4b5LqupiNuaRqwY1U8JUiwtyn98eZkL2HEMqZjXNVbJZc3J3EithMQKfXDqBE36LDWSS9gkxDzB6Ld",
  "key30": "2uyYnb6X71obqZrYu4rYoFBvm5Nh7CDuvVZo4LiME42NC7DRM38rJyAFWb8pmibtns9sg6chSW5QqwP9rpkh9VRY",
  "key31": "THDiCk159USya9Fxgf2nRx5vutECCzj59xBWMcDazUjmA4KEYT1Wo3s4xCkaAaniDeCgY2bkXfmPeTXRT5JpE16",
  "key32": "PCLcYH3Dgvy1ykfR6mhKfebmPNS1tDyZaWfxJM84tYKRMWGfmwM2F6pXpAqVxf7bF5wQzAfWXvmiTDLRTtehAbN",
  "key33": "XoJ4Q8d4ft49biQ9bFLowUbE8cPo413TZqa9tfUpvpvdwSAYYWyEq8zARrLeqzhmkxQLNjLNNkkNxWffRM6rKy6",
  "key34": "hsrjEeHHWwQTYZL9rtBVmkjq1oiWBRNG3vudz1BjJAMgLqkhFydBb17ygnSUa9oxVXxWu1eF3kvGPfFjMEgg72d",
  "key35": "2zWggvoC2Kx8t4HGa2AE2HgSjqqT5cM4eCqExtzChdEpRq3BQritEKb9AxrVFa2EY4XCpfWC4uUfbqXZgv9wdjWE",
  "key36": "373wtRE1TqUNh6Hzfn8wSfJXe1KVVyuYKCcJGMSY8w8rezL2FA2ZRC8PwEcNHMvbH9DPpaLc7WGN76MSLvBXC6qb",
  "key37": "3jiYZCFDKdrAaRBq1ZakMU7uksc3xcyvZLpjdT8Br34coKz2TwcVtkJnXxgEspP94WbbiwAqH2Mux2YFRnTN8jYK",
  "key38": "3dL2sQmWth5G7yfrGm3aBzfHtivTbE3MPyHdo5gW7tqgyFbkDExw8TUdjiaSQcfiLFPgbMgy3MdYQPeYpXSehwDt",
  "key39": "4ueXtNGJbSaEhpYLUhheuHYnmevtM5TA3Y3Yi3DL2boZLUW76AKmtx9xbpBPyvvgpFXRknK68tJjHJKPTNXHRVC7",
  "key40": "2s9iULZ3qznexGaGMPvAgP64sqeaWe8M77UbQLcxbEz9wAkKSjZprN68EzbpT8UEUYkEJkT9KAXk6GutNssgLSe",
  "key41": "25fymi28c98kM7QhytYfXAmnA1Y4GXzGemw5oL9PKozn7mXQAep4ySe8LyS8z114kjoNSeQgLeouHQWdVMSjkPUr",
  "key42": "2R1Y2LDMVWuX9YhJL1uidf9ajSH1jMY96owxJeQ9H5J4f3eYgSC7qNDQYPurdEmjA2KMssYurfGqUzSwvSs9Y1mU",
  "key43": "3k1z88fPXomVmvakxnF2Wm8LKdX66iHSbkHnEKLLgs4aBN6n8KKt2UMkWfjpW1hE29tPf1zVJSjpdEBgP4jfLWbR",
  "key44": "4Rdsfqzc5gZqPymu2rtEzQn7WAYnxSXX2oprTt1Q5zBd3K2oyL2yBDweyFKC21L482v1LqyBrmZv5f4rNWkuYGz2",
  "key45": "4i4TEA5hYcJeC1yencqxmDyaRWdr85JdKaXVpAscxedhKNN4wmDguDvJeFAL8scMutzkkuurSGjnkyY7dCuLKcok",
  "key46": "BK8w5zMDK81io2MH8L9pqkh5N9dNBRW17t5N8CQBM1v6XvBFwmLnGCxaLfVJgt3de9tbRJHEJSkKL5E5EZi2VG1"
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
