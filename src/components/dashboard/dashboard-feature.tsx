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
    "2J5AcXBQEJpBLCHXSa7p6JDoKngkNvjxxGGW7RzE8tsKcaXjMU28yyFdY51fMFyoSagCmdGgaVSfoQm6h1SUetab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ms2T3r5AyGNYLo7acRmozCMixroti2nCtpGtPWhDbL3Ly2y7mB2nYqit6Ya2CeuASdB7eHWirniYxHhM38QRULy",
  "key1": "37JuW1tSgTVCBXPkks5Sq3duSer6YLoQ1nWoDuJmaoePp8JxUJDvmRSft9wV4cDmNttdL2dJvwq471BEeXbHThK3",
  "key2": "4RHm9rLCb3aMnDyzQAjJv4WocxbsKCoQR5jaMQ15wB5kjDurPhs5f1iJWkR1e7hQEAupgeTErdFVqMPBJ1wNrqie",
  "key3": "423d9RZfX4rqaF8hPFk1sYqhebFkBmjXto6dcwqDNQBsdNXamJNzzaPGPX43A4Db4YUnR2EqtuHcMRnr4Te1sdr2",
  "key4": "49fNj53fXmhAGGCyZNJhFwszTkcrHVWrNdYM9CrDBG7xQXbozRoVSRVq1LfNQcq2MB3KQfAo7oNEaQaFD9Kga9Y9",
  "key5": "2Dh6anu1V672VkudHn1nHmUXREnn8yGYtybhVfzjxQ2bXGWGbH4BF5zTDvFqbUKUHgqyGj5RY3qbFPMWYWSpR2wZ",
  "key6": "5gZMad71nvGKeyntvz18PQfcJMDwid3a2hxpiFyQBVTM1WBPeHaCjSqN9aUU38q1f1ZCrDKnfscvSNWEWkxWFbit",
  "key7": "3xKbhsFsVMY9e2gUv4jFhT2s4gAkw2EMoZ1hYqCSPmj9WXjNqjmftjC1F2NusHvfEPsPkwUWSKEMbmT4ZQkkSMss",
  "key8": "4edJMYfZuUTdDrzZspeL7BqQNwmFDkwa1ZLQAXiqtqbsqBi56DhqSYnSvYP4BK3S3MT5fQk4DoPXWb3ud3Tsw12e",
  "key9": "RYYgqmFfNzCrY4HTFAp3TK6X4uPtNBKnkwSsFQnZiZjLwo49ppFd4ke2RZbDEwBxkUGvgBBaK9sHtbF9QDhyCbZ",
  "key10": "561nhFEub3vufgc9m7xfmx7Do6kh8LYPcMaRL99VN9FpXseVRjkbSBNnsZV5nEB8geW9fvXzzcXAZbZHMixpawUb",
  "key11": "4kpv4RkG7ditMpdJYLDkGbTuKixqC159JP2KjQTYwnpYmMZy7cRcBnWRfBsoMWX3up1Goy6yc9V1zBjh1bohVciA",
  "key12": "51haR7dnB29hNvevKu8maK9xxooFWF3orx7S4Cf1MjGJgAca8Aev2Zy2zFhp8skLvNL6ZDi9qnTRC2YLRA4jWYXN",
  "key13": "4BLxPFEeTnfxG1WbVcmw6Vp5aTmZfvvSimkRjPyRzeEnaDZ5D7dXqi7m2C9ESZqAo8mhpjCfYKN4Scxf5VtJMRpm",
  "key14": "4yAqGsrJvdRXo6DZ1B8nSFJ5HSvApsgho7G1yy6rF2nEDnXWnY3waAKXQARZjYwqv6dCDWm2pyJ7SeeAMg7DJomT",
  "key15": "2dCFtPbxnRvositTBiyGsxvUyyYzZSk2DgVYAjtdyMf4ns6YdMX6xMZ5G1a23sWyuxSr48X2xKrDhQMPpBSBFVm9",
  "key16": "eQZokzDe46uk4hPqFQShDqG6tYtx7jUA3bT3XuF5hni37LEF4YCqAk9Xznqi9HUGipuZuof7oAgn8M8rLrL9qSu",
  "key17": "5mbXS83K17kdrkwM48H9axxw14NkE6EzpNj6gVUK73on344n8ewafzmqZYufEkz5Sw5MTqQwj2UiQdDaQrmaT17J",
  "key18": "63on5TyXFweeiNNgyedp2YwUECZHf13ModGcmWJwcUy1ZAuBaeKogsW6Zhdp9sDw6M9YXKmfhcP7kirVzBL2gmyG",
  "key19": "5bWq6BUYzFvBKNBdz9DMrCHFPx9FkfD5CxynjX4K8MrG3pLyuDZgZyf8qR8rARjnitjbbURW7BZSsF43sApsnvQZ",
  "key20": "2uoYqV2aYhcP5HxyqzGdnmJW5VPnFaNnxZQs1Y6sUk82H3uLiMS54rbKw4PXv3y637Xv8qho2iRFBsipFmrDQQE2",
  "key21": "3PhWWfJbnrwvaDt62DMqgxhbWF4SuV3wEsGaaaz8CGGNJAzPsuyb3s8FJZKggLPj4vidMi8XFLCYdveHtcBmQ9sk",
  "key22": "3DqbmymUDaaymm14yAvm7GKMGR4Rc2wd8pcfovbJzZjSFcQuTTzp7NBZE8M9ZcC5mf5Dt4eAjoN5LAKBeFiSfqcL",
  "key23": "26zDBAzFeMpyvfwBrzSrvuXuvxoaez2xwu9ddL6bgdPWXDeRZLs8kHe4U2bixehXLYTTi3tB6hMre7FZpryiVY3Z",
  "key24": "maop3zy3RzLyh4CraNCdRVgMKiQi1a5nAyPZdZAUa61tmpUibNM1SabUPHfSDgeQ4GRnR3WqrT27xrixR9oftNz",
  "key25": "46gAJ4dWBzM5f6uTLePSHGCiWVPTUhowdwT7pNE7trad2x76z8ubfGmvvczH9oNdBN9NpkPrH2NbKx4WfxneVTwf",
  "key26": "GJXAERrT7UnAnxi74rcQr7xrtQ2Tzub8VaUeQiq5mXHnK3fLLb8RnVWVP1orrNALLHE7xE8ZpAERVD9e5eHcUsi",
  "key27": "4WB57bAGJcxz3KGhmK49WigzdXDmGb3CoPTUG5p4pGwaKBzT8rGnPmDrSmsUeJU729dVaJGgmsqj1jXeEceLot8z",
  "key28": "4w6kYvxZs2rn3G8EArMLeyxzBYjC7BQeezs8eNBih4nzxr9m2vC9ShzzSAywcWr7aEmiTsJTBeZTjnSDpvcG5uug",
  "key29": "2DFha6GndY14zKZymccdcm4eErCUshNREN8y4fvXxLGTSFZUFN14TqQXAiJhYKwmXDyntkcFQphdBQULCjBBKWra",
  "key30": "4GkyA2J7Yb7Zys6Z3o6SdK88ruqFZXZEbadkAscGczsVpqMK3HR6o3svEYR352KB5wXhWWf277jYaaghL1qUnEoZ",
  "key31": "AvqdqcwZ31BdnLo7PFkSoDAvBpRAtmE15tEWPCtrXpcBUnCzBbrGCgqrcitHFM3QHZU5VG7EaWwhKqLU5AHb3Pu",
  "key32": "2Var2kNjSB7FYCWTcp9u5zysNrVSB5xUGgsBYu2Hux4Awex3d7JafgaTu7qZuZZkZJwpEZWsimqCnn4RbHLBqs8i"
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
