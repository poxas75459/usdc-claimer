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
    "5yzjyqq4Keqf9xmrHwWyxAfGYE9AdM92ARd9AL76cr9uLatVGHh3QcoBd8DGQRCcc47BSBY1xp1WzjM8AhHMNRYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5drkiuBN2URgKrrdtAJUkJFh1dHTAAEjw3bKU33oGSUaYMsME4DZoTTAPHGMaiDF6am9jSQ8pqCc3K2uABhWERjy",
  "key1": "wS7no1VThXzbTDaw2aTGNnepepzDF1NLQDzANgn6CJLuozFFwZRdWxmNmQvyUsKAzUHAfuNkw2UGn3cPDtJrHJU",
  "key2": "5jq1PAtkeyLQGaFEhxyNvqmK82nCCVDpBwYU426cehWZgVGzMqhVgQuruRx39xchcPwVvYhyzC5MjM2LJk7EvtNu",
  "key3": "2a8sqn8KSoDC1fAQsuKjbiaPBpYGZmSGj3Q2U1FKZnPGzdMkuyWzjwUSCtSoCSNuxEvgugz1bmz2Af3WjfSPtXrF",
  "key4": "3uGSj92JUtVPddcUzmjFUpMqCwu5TPUAUAxuWFqN6DGDaSScTi8EHADuvkje4Z9sgxrDiRPpF3SixjNk8vx8h9Ks",
  "key5": "7Yc7nxkFm7NLwFD3aswgmzPkvCxrfxHdCT8cg2ddPgWhiU6Zj6ixjNpGAovKq1bf8zWtizNzRst5tw7KHRYqH8U",
  "key6": "3XtBBrugNnsqbBENsWtJxsm9eTFzaRWBFXFBCSEri1QF9KC1LpCJeqW7Tcv4vQqtCtZ3NXf5hcvZH78XPqsYgCiz",
  "key7": "2Zf8yMHbcKxKfFULDmAU1wh1zzgm7vAGiKaxNKpnqRCZNTbyDWpHJwxWJq1YWP2gZFM5ByF4Mrz5EJYXdazj3Ap9",
  "key8": "27tfv35nbwruoam3NpF3xDjESFtRdqcrepSdSfdFgSRrNCn7mZZVxEQaL9NpZzSbbrsqV8dXWvQL1bQKH71cYnPZ",
  "key9": "4jtNYDicucrVA2BCvxJoUAAs8DJLiJvbjN32WLifgZXuC5qxfESRXwdi6NMv6C6sC2WZey1fFM9hP9yYHHRHzmiV",
  "key10": "4PMbJbbE18X2eDa67S4eTuFakdFhGzKzoMNryTRLxahjLfetSJq73ryJBCvrY17u7efedgtTbaRNHTez3a5WZQV8",
  "key11": "2EjPrhWpBzJNxARCbCUj3UikrPiAZy3zGwhuY4YfXv79xbsRYAfG5kYzEhjbKfsC5JbAnUVD4fkdtoeHnYgJLXet",
  "key12": "2JoMvY2WkSqqf4bnfHF831xgUP5uZxUZopAaZLKN1JMR55ybjieszpaxqdLvKrrVpuvJYieYipcUi1K2XuJTsban",
  "key13": "2xz448FEdBHCiYxbFogyy7ZgrAJ6Q3ci2e2cfAP9dpQdpa9UurdYV9qJvirFKoQ8RFvCeYVXSzdRyhQ8h6LMmUGg",
  "key14": "zSVKY7xvpeJK5riBrZ5Q3D24sC3FGGBNTZbFzvMxfTU36nUM3Mt23zmmFNezTYUJqoZQAN17tgbKpGtoTawCe2n",
  "key15": "2Ub7RmkiHU68AJFCW6uWxSuJsDSZxg9nmm49am5WxKTJexF1ZJaezfZCxwVNJzp3i5VmZF1s4dntwZiuoHnHedsZ",
  "key16": "4u5oAU6G3YtwgrZoTdVyyCT7mci1ynP979vkSPWvXTPbNTzzsEki2ZDmEq6ZYNwpr3jxpB9BYCRX5hsEFtjyPq5v",
  "key17": "3r9DrsAbsyfbGgmB9xVcVq28csiAdrsetrrb6nmWbi4L8f919M5PD9qwVZ2iBR6E9pC4DLkSMCVCzTvYxAdgLj6t",
  "key18": "2sEf8vAkTwqmPFubj9EXXLC9h81W7TjaUFW7sRzY5bYBLVJSmC2chq3v4XUhwzUipYnbdsjqrBu6gxoCSFTXZsMT",
  "key19": "5dYW7RREuwmMS8RfyRMmQofgtk7rBM96FCzVRdTybrq7oURVA29Yw2FFBFm5zKdefKMbnoCpijNugJ17KnLVCjeo",
  "key20": "yDTPdo7R6ZVC92GmE9LXEc4Z5isu4rNPx7t7Fqv1DCWHdDBELn8KfoMdC2acNen5PbDqmkG4WhpqZFajPm188EG",
  "key21": "3sbXRJqFLgDUWtJVXeYSUjCtbco3RRjjjG3tjr6x1rhPNB4QtbFSVCJPKaxB5LYfFFeEJYdcxks9EyzsTLAvnJk",
  "key22": "52kCguybd2VRDQuheRz6AkcJNHHQEZYvA1891yhmxgU3CKUHdRRgh7N5KgeVxKkNLDox5qrgjKDG1cBGxbwKmFAb",
  "key23": "4KTkFR8FMRANmu2FXk4EwbicDtzgRRyJnExigYx6BdPjhYc7JPnPmfcvHF12AbLD5CP715zYMyUBhx7megP1JYnY",
  "key24": "2iDzYx7dMaTP2m5Tq3UgrJaNEFUzWoikfMtJfJ9VD6bbCVUAS8sADsS8m9QNccjMbRGTRQBUBYncSzzHSWyZuDJJ",
  "key25": "5Z9wB3ojnCsbjk7Dryczfa8Co75E4fpPKRwjbK7yxNLseMe3FQSQvdGAmYk6vSZ6d2AAUBqRn6De7HFftnAN2q4s",
  "key26": "5awrum296C2cv378pjVntbUEtxRiuUgfrK8TALyY4Z7sRN5KBss6oCsimeQbm6EvLNzxoft38YwSBDscb8J1aR4F",
  "key27": "4DDsHZkwSyXCQr5eTCKKXXGKJJ1qZkRfmfSyyBjUaQA64bbESwsypXhkTBvk3ECrGp275JqH1JhepZGyuhyod9EU",
  "key28": "2Np5aeKUfMAz4HXuaDAFc7vXJgV5Ha8NLVvaE4KzCh7PrrhiRadDiiGcodkZaZfzYBGfWFLHJzG4YRd4XQKN8RMt",
  "key29": "6725EMPA3TCjixUystiQXLEfmQSWskCiFr187gocxNpVxVnz1aZqw6uDx2DqrDjTsb8n3eq4meyVFxhZzBipixhj",
  "key30": "mDwXJdKVjcagXMkwZvoGUwm1dZKq4529mQakptYrsEYuToKU9UvD7Du2vB3ushjFJ6t9213JPWuokz7NDQcS4kZ",
  "key31": "LayZA82F5QH7zS31fck8xoqrce7NsWY9F7fn9xDq12qbFWraRYiJJuJxpo5yHGu42jbhsNcDiFZn8bvPY6nxMgY",
  "key32": "2gCsEr2VBZv8wpsLXc5dJbQXV9AvLrvd7pCWSFvtA6Bz9mUsuKnSxu6FVJp5rRDJHZaYgtq4XhnZ5sjaweVAfNcc",
  "key33": "5wG3q7UFGhTa7L5KY1nSRCYfQgFh36J4feDGhFhWcGHtaHmyNtdH6kmxVsCvkswvy2jLx5fpbz5Q6ejxyxz85JuB",
  "key34": "4Rabt1kqiR7b4qw5HRw4MExBD2eQDTzY8mBpCJopQy7BsSmGwXiQwZcjpteJN6UwC4Q3Yk8f7NzAfm5QM9fciqM1"
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
