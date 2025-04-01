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
    "3VMkBnTC7dYpvLBSNkjJ8iff4bFp4U6BRBHTNTp9bxqsgBa8MLcxFS2tVd13ZBryhrchgGqN5AKofWQWvfFohNZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ow2N4Mat2Th3AzVPGTcmX6SxgbNKyEiFprhgWZATx8Fnr5T7dcg13HziUPgnsUrpGGR1Rdsn9kPCLafPk4Tczvd",
  "key1": "3uXmbuCJick5i5dmD4Ph4mmrawF414mehUXcKNzuBdVj2MFMsoTwz1X31x9FkqY41RCwh2uGejeuL6vS7SuwvBxz",
  "key2": "3WeXLakZ9kUY9fUjWbjUC4Hr42vDJvxNe2Hz6S6sEzNTaLh26ftkpWujPs33PTP9d71RRj1xx259g1qcVLFGYwbj",
  "key3": "5ttmi4YLY3MvsGVjGwG7FMsCJkfbSeZgJCYuKzauud87YcDNsjdY2otCtSej1UduPCzrtGQocWypvwNvEX6JogJy",
  "key4": "3KfsyxgRPNK9FjGh7ptG8PxCtcxsU8a9hg25P1zgiWiL4sxfViA2QKYHj2ySTbnSy9vxQAAD3mp1oJcCk95shbkD",
  "key5": "7noRGitrMzC4VFvR1taAesVd9VNe2mG54nSDQFi2QY7UUDckmEDS6go8FpJE3yd2wb7RtjxNkC1ndQTYSCbiEeU",
  "key6": "3S6NYSKGLn76tEfbw2o7YSefem9h4PEVZ1rmvoGd4sfyyo8TKXeg54k9TtFWW5e6LWBoD9njnQQvnXzKvKiuxaZJ",
  "key7": "3BsMkqqYsZ9VGAzAjA4z5kc8PgMcwUh8mGcvunBj7HvfwTfpHNJBXAs9KpHCqoH9sppHPdQNKzzJyQVhvgtLfEZe",
  "key8": "HddppvtFqxyMiw73nVGzVJJ1tSQ7mqCejXQ68Ftmuh3M75jjrXLqdtfWycqfaqo5CiXEDDdLbkWKH4c7FUdpBZN",
  "key9": "4GuU95rnYs7ihMF8ymC4Ps7afCPjQ3xRAgJkv3dYhbLp98PTePCHtQjmgi96xLa1uS1GE3BuPrzRrWGFTs1H2Ekc",
  "key10": "2yZg3pBWnc4dAJU8GTdqUPExn23LKZKdMXF8UmqaAfM1hXiAUP9psQ8ANLjzCmgneQP78AsmTUnvgS7xPuaY891b",
  "key11": "5M3A5Shdzrzixv7AJ3EENka4q6nRgr6rGSrJVxvexMUU6mMagLYiE5M2EKLgrgd4cqL1CieR7PF77QvCEbyXnTGG",
  "key12": "LEnh9wD3zCvBgK21wec3y5btFHZiBEtsGL3RV9P6BcM53tzbh1h6TNd7DMXG3YELVyoZNLwgwuKvMvJwfba9HHf",
  "key13": "6HqJSkc4p2mwX6zVgshqw1z1QhYskUYA8uTcdPKg4A4vVwwEuzTShJSMvZu3HUAzp7KoAoJSKbyctgBkc3NQX4S",
  "key14": "2qUN94o13i3QSD24WJ7ST5jQtHxgFtw2cRPbRFxibjS47MCQUkctgWLxYXFGq6W35YjZWR6vGnrTt7L1LYbVvHQA",
  "key15": "5phUtTbTFDyBrG1YGR1NtAyiiQjVxcyjV1BgXDYYaws66es75qkDWHiSD37PHT6qPHCpP5B4qCGA6xwDasgTsAiG",
  "key16": "46kHt2DDZrEiox6GYvFFMkCVVqEUzfPBcTas4kZKPdTkw1AiuyNUvgNEUZkoib4D73BAWVpZKkKLLocKu4n61G1E",
  "key17": "5JpW2LR58y9RW7MQTf62js2mhtwVhdvibWiVmoc9x4ywXHH3FuPDm8zSZsfu9wvCPSPcRwstgkhsr3MywqVCTpi5",
  "key18": "2T2oSWns8eFEL4WJam4Mf85484ud8t5jEATqzzHHLwRTDv5R4ZxYKhbjm5ac2GsRdGXXr1DHqL5Gh7rd8SZYf17n",
  "key19": "3EmDZwKmPjQ5CFE4iSJswQ9bJPMHgqJWPkw3gJVQYACYaJtQyaVHQz1mnm8EfQfYGvFuhZ4WNP4m5iGgjcyt5yUz",
  "key20": "21kquuqAm855bXSsnMXmLXKfhEgvZPxekMPJS8tobuUc8Hrodzg3s15xxpoENJVbvcboxofYTaDeFzKehomGLCtv",
  "key21": "5M5uRXq7nQffk6SufELvqEKQnSKfuuSTY2bMeFm3Asb5nyZpBMNnfjJ99fyWemKHyQEtka6XknkUELedJoXnkcNX",
  "key22": "2GD7mKgFuXVdugsgrUcb68cFgpvu9oi4J1GDGjfDHvjRZoqRfUtbDHY8CgmzLj42f6aJfWBKHArvXyUcVneKFLaY",
  "key23": "qg2tE28iPUeGiMvm9VFGXXQ9LifUxP7xKgb8qbC3YfSgpRoNsoBdPS6k4bZGgoHVZugu3Qp1M9bqBF4mCTwvyWd",
  "key24": "4UQeGE1XfgkpcJCR8HjaGdSzS2HyVudkwC8MGigZMko616bH4eA5ZFCjb5SXdm7FdCXzPVxanGFgTepSyZdgBNE4",
  "key25": "GR3GaoM8auRy3Hi17Cka3mRPUdSnYjMQCFEeb6vJa47HdJHRCo4UkCmQvdtQFb3oXDeJM2hTULYBuPMwCNE5hXg",
  "key26": "4rGdGYMUbHjrB7PPPFg3yQk26vrrhqquXaJd2MQvLnvtbApYBEzhMnhtVVJP6SexNQCSzbQZwhPmFeEqYdUr5ZFe",
  "key27": "fV4RQkkjA3FJoKSo7m2SokQYHZv7wYVvcE2f61qpYm2CagUA4HVJSg6PzEGnBEGad4p9cf4tMuxSrJkafhuDinj",
  "key28": "44Bqpj4C4o72cCMMZpupSbK9nggqs3W7uFdEysiSVdmGBGHMh6hTBYe3YS3FfFrDB7U7o1Yd7f1y3uMNypwUhgXV",
  "key29": "2yFq5yut6219Yze38mZTTsFKF3YjzUNER3x5zF1FFNyUwKsbEUHuCdnkU9u9wPwFFLU4RnERc8NhyGqYTuK91REH",
  "key30": "4EV2m95PeHqux153mp7aTFdUBWmzsZZ339wrrysTeWEEyuoToKk7tP1MryRLJCHSpiYuER2GtAhmBctKJmbRyYkh",
  "key31": "m9jbaLc8FU69EsekQQtdfnjQmCkQDMamggRGgKTC8dZ2oSjU3X7i86eQdMcDy8HTiT7yJFo6XgEQejsR64FV5RM",
  "key32": "53nuuz9pncHNr4Ujgw7UvrQ7LBuSnSF7ASS482DkszWLgqbHmxJ83mJcWZWpnoQYfjXfo9dAZHup8ZtkGBSKP1XC",
  "key33": "iB97T83AodQ1daYFB277uYAtLF9btfuWNfnYwKN9ducJ6qLqYSQyF3prAQEE7gmKCrrKCzSF1qQKsVRQXBLBrDi",
  "key34": "61yrzAQHN9pMvYaGdhDoYEvXfVDGBWvpyfMXXwiNiKbKiVybMd98DtXDvntyeD2fRXPrNpd3581kVYRfS6LQ3sYC",
  "key35": "5tk9N6mfDEiy5vCPXResqQxe6towBGmXuV6jzjzd77igC6ctjmpmSTLnuusfsba9g7vdQod8hS2BbBFrKWVBhWyK",
  "key36": "2BbiQ8jWJzNFYCGtC4pHJDfqiQaKoUiHAs1PUvZWamDnEZJt5inn4mUszj41FaAuwJGsKT6pBUbPAgTP6JbZjr2Z",
  "key37": "4xARHGMWhb8XNVMiSsh3W98Y9FuWtiAf6ivBcdrX85RW3wPg6MMRzwJKDwKeMp97jz6dnGmsBTWBsm5f4CNzTU8Z",
  "key38": "zL3pALQVeR6qATK963MQ85jYyUy7w73ie5mpeW5qy59Q4Fq2R3F5rQaEZnitJ7f2559G8gWu4iTPjotk4MB8wav",
  "key39": "2L4ibKVF1cs4wujTM7LwZm1XMRKzyqfPJL7xLgstfUQqxcXM3tiXxophyKFKpmYGZ8UVkCPgqRZXtuMePMNu41BJ",
  "key40": "w8cXFEm3QobaGugkKKUK4rJkCLVEzLXrFyn9TyGFCHx97cL9LK1Dv5rZRPw7A6hzVHBNAFS7JvoisU5oDfKWZKw",
  "key41": "2C211AYzZ2APzgnSpKKoASqJRMGP6c3SnPpgoRRFu8q4dPwFR2ERVpvnQhfSCHiSD8oNiTePZzu4mvirALLSXU5f",
  "key42": "4yWRiv4XroW6LBqzsco1KyB9fqTxj9vJ2csuAZVt3o8YgunwiM3MeVZyobGYmgbLF5UGDJ2vTdj6hoy5x5LBcEAr",
  "key43": "2qvDQKgyoy9sTbwmpDazZspmvnw8J8z6d2zEruiRMnevRRZ35vF6dnMzAmioiTk1H4d7Mr1zYiLyZT8C9opiyDpg",
  "key44": "4JajtS1ykjp5GTTxz5LBhpoWzw5VKV92MXarsFSEEUqLeAzbb1VCbpyS7KkzPKNJkq6ZfKszzAfqweXSXGUQRLDB",
  "key45": "5dktjXYy3ZDXVaVp14pwYC5xnhH6RnnYramcygGDUH1eJM9yiXW8pZiPQzUQu5BFc2AVddsZ6jW1uCQyj1DTnYmR",
  "key46": "3qGTnVC8wuTNic3DLiYQ8bD3HDv2gCnxbxg7p5zWjhRPCr1CiNBMjLcQ5F8jUX5rGVg21SVLrNFAFGX2J41K7KEP",
  "key47": "4JtzrqvKPCRu98FXtMivqMfQfRVhGhhfwMbZ6ES2Xv7YDmutQ7RCJGt8tB2jnkQUL2a2E6Ts3itSPQYaTV6LfhTj"
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
