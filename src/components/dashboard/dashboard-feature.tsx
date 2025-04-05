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
    "2Yhm6oX2BEbNwW38HKb4rKyoEJEFgWnu4BghNv8oRU651SVSvsdJb5SkKFHAzFWwyn7jWiiDTwWh693jEgVHCnM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25fAqzUjNRq1KViMYjoddh1wRnhZrceKjzZeTe3oSe65zfadBToBPZBu6eXCE46hqNMY5PiDmeptF8DCgRpcbdTv",
  "key1": "Mnf7SAQH4hHK9EdxYbkrTR1wFNUe1bj28LTaf4WooY2XiM7qbHTCS7fHP5THazY7fseFj3MNntHxhyRJHcZvD4C",
  "key2": "P2CzAwaBfkX8sr4ZZdEarPrG24m7um8tA3eSvzCK9dbdbFktYWeHD89ubx9pJu18HJtDhCVZffd53UNa7uLw3WN",
  "key3": "4rQDvwdJeF6MQQ5RG2i5d7SaDJGFWxc1fCqAJeny5KMian6JGdGtT1DY6VLLTEM6pJfytrv784DF1Rntk8yaGvqd",
  "key4": "1hXVSfidGVBLQ2kAWV2rZrAM7XtUsVyC8bB75ZwggaAJos47wfndj4fsT7fbTsKc6jYzXcRvAUfVAawfrtXiSuV",
  "key5": "574wmsouZ4xrZoHnB78JPgNm7mM9UAd2Qswq5TtSm8TQTQHGEgtn1mSdjjioBHsFsAaq8mcL8UpfZfHASJrPLumM",
  "key6": "5ed6qh8EkMkzq2NpHU1eDZfTofFyCtWNk4fuPjUoB65RfRCkiJxMGxYKfH39GuBmMxSYEtUMGJF6TeLBTWvTnTRp",
  "key7": "2ZoZnFWmfoeJk4mZRas8RrDD8dtrh2SpNWYgfZmzzfhjDNNZNc9ZWpVy4WjcY22BR8KJ6GXaKP7ksWw59MWL5d6e",
  "key8": "c2rMcmu42MtqEwDCsNiXHLygP9KUbwZanq6Scgq6VPLGaczcjwJH1cmmhs3wcrktuWGVvG18LFkkWZp987rYiJ2",
  "key9": "2vkHfAfu2fB1SAbGYTD45pVrEt2qrVxLF5oHbBD3Fz3rG5UZVu5rSzndSM1dsBvDkwkevcKpo697CC4i1BomFfTU",
  "key10": "8BnagLXTnMAXMLN4kc5hPR3snPAyexKQExgYrMf8tuAg26sjonnMnP79oSvYfU79hecNBAk4wHarMGoMNa24FSu",
  "key11": "2v3h17fuPQVaLBT1RW9sUNLoq8zCJzZeXkcLUXjshbnPQRFDwtjFr3i7nMRp22cfYBXteCUjJSYRaEqJtsm5iiXs",
  "key12": "2Zrcj37ePX7umXvMxRC9nnSGBxvn3K225kiVLe9fWtPo19SWrwUK3boMvsYGv9KgGqW6FzokN1sZhoGqYgPTLphQ",
  "key13": "hFJ62BeUoi3nvQFLwy5sUpqjqPRjERVeH1PjXBkoujLV1coSD96VjRXY7XZZnPfxteGHRHzUZcjETewxTDqEW8n",
  "key14": "5WqUka23vzVf9WW15ubWjV21T5RhMNHiFMNxQyxzd8xAnvhYfqRNKKMmt87xmubNnZqjdL2qVz2ARUTC2SMvJPHk",
  "key15": "395s1yX3uYub7gVxf24JKYnTYEgQ528eqgMDhubFhphggAhZywhFUc9LH2qaeMUNDhfMz11BvnHRsyge2ugLYFGU",
  "key16": "5hBsN8fEU1p4k9eCdktRPoeNW3WQzVNrvWDbAdUWHMZf4PTchcMNPCAb1hSq5r3XckBycEsaCBMaf95itt1g4ArX",
  "key17": "S1ApUMPuepgDd8qXdoTaybw5KtkYHDc6FKMiqqLQPptjrMnuBkJbR9A5dRFuswnqSGiX6XtCQZ58fZJuc4yuvK7",
  "key18": "3uMEH95W5r5MHhPHEyuxPi3ssyoj8GkdJ7t7uSzgqZPSDWBoFczoFiziZNMr8zHBgvfJY5Au9iK2njyjDDGoSZzV",
  "key19": "4yv7mXcn8o9wkpWVqqekLUAW565GNCd3eJUvUgsD863yEbejf1koNiVRPhnh1JbD6ffdw8CnXxDMJqQXEsrUPUA7",
  "key20": "fCx3xkjp9jcUtBcuXcdowYTUjS6jGCBafvzPmm7kHgAeXuq54y8BMUwQqEkQZefp1mPRgQmwH975NpJvCNmtXgW",
  "key21": "NfwTmVxjXgrFqCjB1K9Bcy9zppDCzxWBoXm43PjYdoLSmZNZyXqZJtWDkMkqNwwF12GxeYzTi2v5825rrYFFY6M",
  "key22": "r7ojYQxypuLF3nYEAQ7ZVNapHiPTxr2UneVVkKipY8dtNFuEfzLn2LUXZuz3171up277Nbp6Are2eek8mpKUteG",
  "key23": "4fEyr9oKBkGYCW8ANq8yMJPEgh4boE41LZfxNXsJ4QaoacZCtzm7Gp5K4wHwYpYDkNM5oyEhcJvuXopLekKxDbLH",
  "key24": "28ctcm7GFMdfB8k37zmst5oC7bbuhJFedc8aEg7dpDYuYjcfoPmT8ynvtL63VaDYDxQ4GA9j1sc2DToZ1MRNoo9c",
  "key25": "3GuHGESVYCzuC6qXUKaEwn2PRrg5UExo6aXFn81foobHAAJ8ZU8d1oHXWQkVfcPF53LeH4quWTjraDQ1Qos6GKu8",
  "key26": "2bcUayN79HHNFLj4HzwJNwyYGNm5832Ydbw3Q6ZpTNrUuM4Smut8bgbwMDEDPaFbXiRXT4G7kHN8mWaMnjhwUFPX",
  "key27": "SpYLRamxbsCCXMLET2NLTSfjaLC63m7qNt6evzdAv5R98BmDHZbH5ASyf75rFz3K66zHfneYCpfz8nmUPVxpiX1",
  "key28": "5rbBzUgEdJ1bcu6DVrc7he51SqNHS1wqE7cebKVwd56PcfutkBtNgDGUf75zSYm35KCKWqRmQT8fdrrQPfFceaQn",
  "key29": "3PjendTeJTeLHCoHrXk9ShLKR5HBGsoQMuL3XwVLxxP5a3Lwb6kNxPouHLPUd3UMUyuJwEqiLbBuHRVk9epoKeHZ",
  "key30": "r5Eggz3z72n4i8XaeS9rGshHcwFYKXVhNs3mLC6ZiBV2CNSQrAjNYhUTFsxDxtrEh6YvuvcbDHVGQeX5HCLRXg7",
  "key31": "4nMaPEYVZegYxqXRmb8kkyf6L6i9Xk5dXCR2jsGS8Ug4mhtPpdN68S63HJYgxA8AZg8nce4L4nxVQ6FBC8dNLFm9",
  "key32": "4xzjR96TGGPk6EqFqGEARoqUVt8cdSjHm6fx3YJcB2bnJFeabbtsjaH8ZTGK5HznywNYBdSsRELFp2wzFRYJTFUJ",
  "key33": "5Q3XDJWJCui1ixDmnNgns3HA66eHNYTpxNZqMp9DCGKPfgtRsuTXuYB6VShPi1uXFFSLAvRkSytDdzNBDBAyKsrV",
  "key34": "2FoZjch9vyqkDHj9dHnXL9jBdSDRVMgapUgWDPU5hokTB1h4SuG353XkBpa3UYYHBCDTST1yM94Y83vsXqQJeXZw",
  "key35": "55LJLpR52eXEj4D8n9HqVMydW8KGHRFR5Z38cT8Cw2zBU8vZejGuTXRL4Meby6uUvP2W794Uy1dtXvHgwhb4aLLG",
  "key36": "59WPWsidTHtQTB7dHGCBQ1Kf46oNEAb3KM4pFTGP7f1RsiyxG2AUSAw16pVvCMhXd2CBCk94SApq1jbLQd76Cjmr",
  "key37": "4A3sgg2GuYcMZNEqHAAFrmWorPZHaAGmG4uxQZiHxn8RdEMLBUTQthCXCSHQ1q6D5MR12toHi77oASWQSLNYtHhS",
  "key38": "nFh5Qysx43eKedTAHgxksi4PfFBxDkm6y17at9mr3p2EHuCDpxr5yjNLnT6pvsxRmc75dnWgLcsuP4js1x5Hyim",
  "key39": "2S8uC5oV2KgFTqKPPVN5qfNq6Ybc1AeMwvW43GqdeHNs8UVxTnC8uHs8jRTbXjGAnmcfTLByN6n522W7Egj4fNP4",
  "key40": "4zJiGb1pN3CbN3iAetWqGu7iAs3e7g24BHxudAdQxSUFy2YoAp6nKevdq4jTqnmJUHkuRJGTQRUJDjSXRgBjQ2V",
  "key41": "4vEqqpHc88G357uaqCXBaPbdS1Txnb5Yb3hiUjQShywQcuTV37BqWcJ34ffn2DJ9oT2eNDtiUdDaodTEnQFpNnD2",
  "key42": "3e7yRYp7e83S3dBdXMMouaEMeJUKg3mh5dYKyDdBrqBNWHXbuCpNLfF446w8XGVqyHUF6qK6ik4oU6HFjp6MmEfa",
  "key43": "4n4kDGxaCBCCZbY9J2Ka9nv3qors7mZ37MbDMzoko9dmzNXgZFr9LactdZriBffjMVxqPYCEzaPB47ZwRNcUZeyL",
  "key44": "4nwSHiQZ9Go66rNMztaYQK6yQub4gjyp2QmSNcMjMtbJCt6aJjU1HNkdRtoKkweh8uDdT3GURJ5uHEoeakxwEV2U",
  "key45": "4jwnGUbA2Uw9uhpRP5PJiUzRWwiF4VxTEerfmKTqCVpo5QcTn99VS7oPbgYdDx7ku9xeyDKzEM7V4KBT4nEmARDg",
  "key46": "2ent8JWbxp5vA9jqi3cgiA4R1KJRmZ1NZzfbxhKxJ3RuDaj8Dr1tYHP5tNULWdiE5NA21GeixUwWPdAaUS2MpbvG"
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
