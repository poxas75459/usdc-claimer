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
    "h2Umu6wL2RwWdj9TA8hXEQVRFhw4NAtAeYVYvV5rjcM5EMkQhWdZiNjpqVMrwaomQisEP3X6Rc9p6cH7mgEamey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NhbUJyRKZgmwm42YxLmHow1bGEQzcLcyAZitgFpxFHXuHMStWLhF2QNCh1GhmKamvDFrvzn3TXxdRgXibb8BgDw",
  "key1": "5ou7s1v9KdtU8JaC6GoWAD89RG9FcNerNaqEMFjiAEgPGbLdEnVbybyW3LYy1MbDNRMviaimxyBmSPQYNTgEwQtB",
  "key2": "fXW5sCvEMKWruXhBNq4BfS9jAvb1885CDJ742XyxajcnQkafvQXrUBWb82qD73S9CU1wz37VdryLaHwG9RRJ6Sp",
  "key3": "2oDx9ndvcwjfEKr5rRhomX1YwLLtu3tUxAfsWCf9vcbNh266oNmqquGVkNmPzmQx58XML2SMee6UH9uUFaiJvxmQ",
  "key4": "22auygSBW54PX9ih7mx6pHYxCFwmKiaLDLzQbZV4kK7B2ZUdZeGWgs95Gd81RJFcwSXZcd18HW9TAt7TEb9rqamy",
  "key5": "GDHz4bjAsyU7MvuYu7k11hTeyfaBXGniJGfrLVXHSaUf7nUt66Eube1M57fr1MKyHRW3X5JwYD84njtSiRQqTvf",
  "key6": "4Qfg8zomnaXUmYov9m7M9gVy5a5no56Y44JTx2NuM2g6ewjbEffTUhAMJYbP35Ef7MCuvV4i4JnJVJNv8oDR2RMG",
  "key7": "pEFQBhB1sdRerLxGKEUDzSNFEpW2EBjgenh69EH62dZuxN37mwLWxfbUwhhfkLnCJqVMnxc9zsv7khcm8n1bz2M",
  "key8": "3kFt7RNGeeEbim22Fv2MjfbEsUzD1ptTgHjdy9Nj11mZWbb9NAF379SBwc5ZVWeiaQ7kqmqQzYXSBn8mpUBBfLSZ",
  "key9": "SQ6trwq61tGY8Pa5HipocQLwmcVyJhbt5EgZRMefgycDyA2ehzZgrkqNb9NThBvrbTCPrgmpswat2eWKhHqYS5u",
  "key10": "4J8C646BDvGKTnRwQJLn4JQ2Fi5GJnE9NLkwnAf3oqGfpArcmZWvvEGXn3VdmzUFxQFiDiGvVhpFZ2W7rPm18Rpw",
  "key11": "42o5BQwT4ybLEojKgcrFHjqyPPqYn8bGJ8gh6696LetHmSogXE7AUgvtgZB8gLUMQL5WwzMBZ9Eb9LiqJfG6sNeL",
  "key12": "zDonb3v3KHEMcV6RnLeuG5zBCeFPhCMi5F1xxEcteR5CWWvYxxF9j8h1YQMJAo8dV2cN8MYHKZ7RvYcmNHteuTc",
  "key13": "5jHYRrrgxJ1pfzoD28yu8Fd7SDJq7bsbrR25dPAjXTsP8zJoM4tWq4hXtNkYRU9qrYS7e6AJd5vFfuJ1C5uPtXLR",
  "key14": "F8dCCsP4FAuXc7TD8midmFyfkPCT4h2qMvNrGR9YAZtu9GKo48vdT6rXLW8nQK1ZmC1EnrxeBonk7qDJAdTfpS3",
  "key15": "4yH2vJ7cLG1RsMNaTqaFGvuPg9YBofwCfC6PyBm6ETsESjm5i9pwMa9zdZHQ1w2q8vTQ68m48GdvSY526G48e5Me",
  "key16": "qPfzsLv2aTdRn3xja6ZH2ptAgqH3d2Wxet7TaGQcc9pDFZwcBhNYKH2YTu9rQeFJcePPvZGRYbGgNibf78ZEqAy",
  "key17": "2HopLAAoN7xt1CQDzYLZCmYJVrQeWRejgieo4WBFEACmq6bJGV9rH4yKXDcppqoG3WfpcidXt9J3joSadvaDJHLJ",
  "key18": "7ynV8HaiW6P8SvzJhyr9xBU52HngmBvmYJrFT8qf7PXCLrinWspcaw1cTVAFpqzuS6samttMmuZ1G1oBb6zmosa",
  "key19": "wJ6dPQ3QZYfNzsjBMGMhNBVQMUVro6TP7YS3uJq1zuhVKk8qucUSfKNPUXe3d8ReJDkt6oXCtULbUkpgnzne6FF",
  "key20": "38ZniV6pefgCVqME2L5QoWwv8yiVNVHYRZKdyqR5wEB8X6S4gfDqvohBmTGiTnFVWFmuuDKn1hFG7RGnjohEijtq",
  "key21": "PTwumczRXESvkJui5dr35kwhtnH8xEBiF3xhthstEUuHGsBcPR96dvqhjMqbuF2Rs8PfWgJQeansck1JoasBt2M",
  "key22": "2dpGy1JmnyrMtyDz5fNg8pmLvX1m2ouXaNwY4ApBwMjtVXAoaFo9TsRSnX3GhfVvJBcgvjCt5uk32hCsBAYBM5rq",
  "key23": "2wvXowREo1yfNy7P2xav1W1TLqLBg9vL8hdZNZzauJJze3UakT61XLzEhbSLFtnPbxy1mHQyHHeEwmVwj2qiKFhg",
  "key24": "5Hxr2WAbENbmF8YszR71ak4XJ8pUKWGwFTC8Sn1vntK8hvPT4m8mPnws6rPKUM9qezp91vR1bvc2XWf9N4CcUWEp",
  "key25": "48JhmDsN74ZBgpuGMMyvABPi7orFxjWBJLix6y22uzAEmH4Usq6gqfitX3KEnmivL8eCLTX2kKr5mVSVTzyvoqEx",
  "key26": "4dSdnx4pK3ohbHTMcP4XDFtiub6AHBwj9NgQ4zJMk1JfDpGyeWpZcuzi4VR3ofqvurpRvV7Mu8ZPzwHvqQBShQ1D",
  "key27": "3FkdP99e2WnF9gdkCrNBvquuaim4woywf8UzP3vDUpDpovK53hy48oV7hZdaH1M62ef4Rhtwfyd26LVsjhaRKBRA",
  "key28": "636y5zVR3hPLHoeFzNPrL7v9hGmEguTBqwUG7TSZYf3tNvokAYTFjraGukfVTJVk8pDiKwJcFwp9kUabcuYndKD8",
  "key29": "4Zwy3cQ8znfiYtNnTJyYxKghZuBJQ7tnVqL7rsT495o7MFMvte8rVfTUAvuqHexEgg2iKNd1nkcyS27tGJXn3hTb",
  "key30": "42h2CHyM3feikJJbSne61Fjr7etAvgyYf7QrqxVGdwFnf3Yx1zLQBPiTohmpr6dMiMGefBojEXMR7N6ntGViPQ33",
  "key31": "SfrdKeqRf5yLjSoP9E9QB6Bfc5SjwW2TaBN7gBdqDEUfBj6aEM3xPnofoURHwV8RDLubyYNCDnJRxBiPaF3KiEF",
  "key32": "3nAjjHhB2iSdGPEPBdwntTRBHw9tiZrpBQjYsQP5TiETZ26RMBjeYesrFwEQYZYmXkNihRJZ5P2Diky9LJamLhx6",
  "key33": "5KtdBjAdJNsL6EcXJM2MjoZP73WdVHr52R8H6eY5pcGvUETBsQEbmrsFrzDX83rJQXveo9Hnet34T5j3x1WF3Rjb",
  "key34": "4PFZmpJ28GuXWS9WAX3QCVw7ayrywjwDXKo8AhsuBU36nabYBLveduYzNirk4tKmeQULGV7TJLfqEWqYEWTEc4jd",
  "key35": "3JQ3FRwT5uCxn5j41YaQNbrQK9rvdqQTFEYfD45L2BLrPbdBGEtZbHxQyKBqrihdjU1uuMHbufSpjMyRsm5zQwAX",
  "key36": "2Qmbe4iCBt6ygPRiwDWVnrVopYyixgrhxSX3GN49kPq3yWvCj29FqwhkZ9PjNC1ZiRQhZGEqbGpgJZYADtHR7orA",
  "key37": "4eHGL1xcyBjgbHtshrgkCNz2b6ux7S3NAR7Uf5Vrug3wBaVTPvd94Krkehm3FDpzAW5u2do5qPYekAooQUdUQdQc",
  "key38": "2VckskM6n2i7JGXT5g9qYJ6MJz4pwkX4pCMJ16QaaBx88oPS95YLwWi5S6ZUdAzuT9Q51J1LxLVZLC4bJv5yuMQK"
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
