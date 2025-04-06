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
    "3cok97RwphHzS3yUeTbwy5G2ZgkkqGGdhANXhkt1zW3QoRM9BoT27bahn38GWsQrAgqbniBkGssPC1HU7na4HS9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55XRv6r2GVzoiL2EhDsLjh5xBFQYwg6RLeWqgdig945B2Dk6JxHQ5FVAMsqoq6VNtXaaty9VtMBasJrXsW5RYJFa",
  "key1": "5gNq8aXHSgkqK6TkEHdTPLn6RBLZ9fm83frSBEE5RTuxskZ4KRQKvT2QXruJWRgBpznaGgfgWVazjUBtf5qKfn3U",
  "key2": "5QuG7cBp4Q3tKZpihj12ZAtQf17h6ABAPAFYFGEvHtFxPxFnzTmkf2bGftMkVor3af5PxXzvMGugK2e4UBjpYRmB",
  "key3": "5F6zzMtrRuRSdwRLQ8in2eFtnGSP6bz4yJRwTp217ne2A7tqgHgUgQDzn3pxCUhEQ2KrMuxFUKSZzwMHC5shBp7e",
  "key4": "231rCZTzuhkctv1DudtkBwic2GgV9x9BLAvaprerzcWS3GuwXdL684gPeC3RexktxkTfULRE96rJFNpvwAi2bCjX",
  "key5": "CznhLB8vPdCFtV5qQKrpsyfRT4zXCu1pS2qvfhNoESKyZ693PCYDtUxHKLeaUQontnRewX6hE75mP4RkTp6MmTT",
  "key6": "4QN9dqNWwYPNi5eaKwrarybckC34aZfDbQ9SMTyXR797YrCFs1Y4FA3cAMKiKYDbfoPrqvqAPwepsysQu21DQZvX",
  "key7": "4aVgnd3v2LE4rt3chWgXTaFUBEPK7GwxswfAgYkzGKfUrZ9HURzDuBAnH8v5iDtHW7KBpKfaAEPTvrRt3sxDJPV",
  "key8": "4GQuNNRnjgL93AjUYhZXXc7KnvZRAwo11CHmqfZwkuFvVo51TLmDc26VQkt8YcCyQ5q5NPzVRTfXFqukTaUm51ad",
  "key9": "3hV9jRehzCijX6HuzfruiKkbVVkkwxEgChywBSnGoVLVVrwR7w5d1vonYd8tBUvuD2jGiPdepkVJh1sgtW6HiUva",
  "key10": "4awt4fTZHEMFnzD1EnNPkkZDk4TMijWzHYnRAxv7v3pCS44EVVDS1BmMjTqGYFQ86W4cMyxby4BCUj9dBECQwu24",
  "key11": "FLj8wmoSmBmxcgFxaELZiXpCrS6oMGXXrZDXL4VveteoG48xnrQUjGZR3LGB5KzsjS2H1qoUxoBf5CcxtRN2bMF",
  "key12": "5mrnCKVajXxVauhypaB4RoCHbmDbuKi7nMAeRZJ9KfSiQcLg9shMAHzWmF1zwfxNZwrwCvVEzo4cC6ey9sNSEoyB",
  "key13": "HxSuQswE2HdEr9DJnozsbVSgz7fLMJDDjLFkb9igbeBooJpZ4xmBb8ykP8qtADVS5Q48kWzkdbtcJQhg6av4okn",
  "key14": "42knVpZSj2DnSxUWYf5gxC6v7xfYfSfCoMuU4v74VDMchK3xTQk467QS6DQVErPijLUDUJujrZJYpRcAYA6uUmoj",
  "key15": "4hQ8ZDXzvti1UF8mUEkETt7iduCa5LUtSRo32EwdYjkvgMsRfhzCa2JTqJm55TS84yYagLurmLzj7b7TXFu4xnXL",
  "key16": "5uzYSoiLDphopDhuQ2RMde6gwRR4frAeia5sf2HmboRVpLhmnqfEu6xM5oLcQSWYNkv9kUSVkwiZk6sbf3JrKECH",
  "key17": "43UrnRE64uAQPRcCLjabm51xNhk7Ch4kTNLwzGTcDAD7ZZMQwKpd2G11eKNFnEeooz6xrKEpuGKyE6QXnbmJ4q8c",
  "key18": "47ny3RQnPTdLJ3KQp9iHSZ4qdZadYrPiyrvgCnD1Pst9Fr3QAUuxzijbDR3mZn6NZQfo2cFyVfCuKoBMhFD8rejL",
  "key19": "ZzcBDTN1GjBPBuFkKygSiedW1UQuZVah3wjCo1UYEBGxEaraRabZ2w6RPoyo2Nw3hkMWd1aWvzQnTJcRP7bpcqc",
  "key20": "2FXcZ5bLSDg6rx6Pinvq5NEB4C1yv7NsYskLGDveXUXhd8biFBau8AsqSWVdVgfHmJYxxiTM2q4JHLgyRhKrQDtu",
  "key21": "ie8k1UnMxxcRtaecDUaMeFDYpc1ArH7RPRED3wiEF6i9sGBwobpmdPGG5rsNPvGo5tPR9Jr3nhAgmSED3h6euru",
  "key22": "3U7XnPuNPat5oMU4uFEEesf1UDgcKaZLThAYaAywQiS3WGuZg2bwPyHAqWrYhxB1cfLhQSoEGk5GnHoj8cTc4BHg",
  "key23": "4p6NhtXWPicfvUGroFh1N3scKjS2S5s9CkZjNfDXqvm7mzpWvknSSdvKSJFSuCbsBJXiYUZfcSaBYhWA9V5jTett",
  "key24": "3woucWhH4LpZ44JrhyAVgMqfRLM5oThzk5AQJ9Pzi5nyoy8kZWU1Uv2rL8iWMMjnvDh181edissP34eZuinvM7Lh",
  "key25": "3qSsLz1fghsbfqWdAj4TgbGkLpJswNiPAXkAmvHjcRbqzd1fdJP2FeDG1tSxrvQNd61w8hBsh8mfJMLcyZ3eRXGr",
  "key26": "4j22YegkrqwK6A2mgRzW3sHp94GvxqSgB298WyEPYoTATCBtQeJrF9UdiBABuUG8NpgMnx3vvhV2Adt65rwxwEEU",
  "key27": "5YnEpHvHi5Ga96Ui3DZFDpCmVZPGNoqvvKnZAakCUsajbnRZm1SGsk6WtDGzsRXE4BXv4KonSvsu7jcdohFq9j3p",
  "key28": "4po65bGGaoigvF99y98imrVp3Yac4GDPxK6GSnM2np25xcxcotTrq5CqnuSmDaWcK7tpxkwZKPUNVwvyd67Mv4ht",
  "key29": "2QE7f55K56YsXSC2uFtUDzr1Q6BAijc57B3Xmahg8f7UFfnuQmR7qM789URLdBA7jf6uxZ937CPsgkaf11w9KyEM",
  "key30": "2msQ3VDKWMF9fvrFZS36QCKXWxaJoKqy8LxCMfNYxjVQeER4W3Y8C91epHqhGinLNva6nUaUQMjPHRifjCWXWtYe",
  "key31": "4D4AQGKqyp3eyCzQZRU9GiZ4TRgvEjQ4jKXAjQCQmSfm15pXwJVTcvKjExpuJD5cPFD1CAScnqGTnNxnLdvJMBVA",
  "key32": "5JFiJEmByLTeqWVfkcY6M3wsnG7tNC8Tq9QuFJnVhqPs4aaU9zN1JFfKpDUYy1ijeZaUFdM11DLVq6qPyTXc3hW4",
  "key33": "2UdWaJCkKJnr75afgJaZAS8dLQcHhT2UqLHSRaSk2B5BMTQ3DcBBvL8ogxuFQUzfPX575gnBrBraD6zaJyw9vpbW",
  "key34": "2i82Bo4NkSWdoBmZrXuoLcVv7zkDni6n5UbPGU5D6yGv6HkNXxXVT8WPLxy58TLCTH2sJjFwTMbjBZNCbJkAVDu7",
  "key35": "56N6Lw1ZhMaQGdtEUtQ3o2qYi2DhS6ydiTvyfPuCSL8WPmBb7dQ3Tm4smWmfzjyS2r8kovwCKPk7t3bbDToWjvZd",
  "key36": "oobLgTYBBNUty5CqheXd6MX3cZiJE9VW4bhgcuo7uYpCk66TxREXuZo2DwcUaEsHa1HtRF9krjEaRNAojUab83T",
  "key37": "5xbcVykdhya8diTVxui2qXwVn4v4kqFJ7xp9b1SVERxS1qY9E46qZoX5pf8d3XHPV5mBigVAxFF8pTw6ybXsuFok"
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
