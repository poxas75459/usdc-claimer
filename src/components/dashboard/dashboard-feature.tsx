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
    "3LsSm9QBXqj8qSYCPhBdA8K1VwbyxVbtz57e7J6qNDS55kb9k8BMG2roPSNE1AA746ZcAG6WRE3TXXrc5F4UrCoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WkAgpqA3gZp4NT7d18AXGdjoxELedym5QUAdnfxfi7UWXap6UJC5ypa4aaXrH8ETw4s6F1AAYVMKU5jKw3rQfuF",
  "key1": "35jZQGwgWECoT9XbyTSYN9pfkmqbX4icy2XWBEeciA3akVr37m2g8noCZgqyEUUZ6DVsJgCPmzxZk7FtGM65Sx73",
  "key2": "55qCKXouTq7Gd7godpCwKjootNJK7TmNEW63QUSQUFPbonQg4BRai4LYw1sjW3JniN6t4shcE9KSAgRYGA8aQMph",
  "key3": "7T6ftSPzSgqUQGN6BeKtCHYGxANgipMMtAQwcdZew5VWGb8g98HUYytos7UwuVGX2XfAAfjqQcqf6QioCWyrjG6",
  "key4": "2ksWRGSRXs2qrbiMGJJCJW9oqxJDVhbZNg8DvQz1anC7mrmtrk5no9FGbZSRR2MHphjRgWbzhUqDTSm9dAffuGWr",
  "key5": "4m5Jh7Kk8rrxTmnBcXoNqFsaihDD3UhhrFzamAZ586YKPsmo4f5Ebfq8cag9Cgaht18mnVg99JhKCX8LYmUDmYK9",
  "key6": "78bNdCscsrHwzeRqE8oaX6id8VgLNqXT69CRWoR2yfPuGv1eSPh4Vt4mZpjoTHCGfjLTSrsQbXegAXdCKuy5qhF",
  "key7": "2PTHT1XV2fLozsn4oWimzrSkKbwatPcSbL2jDyjbUTRGP7npKBW1PjURf7vnVEGJmrCD2cvkDUrxa1dwjSvjG2nP",
  "key8": "5reYjcBSKtfjzJBShgLqMFFRLiK8eZ7hUMqBFf7tTuWpdHzzVBWUsp7pfJzEkhmWu46gW3g94wAnEm7N7fntRvBL",
  "key9": "2bmmHkFJr8jeNGRVMJexSc5JZ985AiKbRJQDxQYgwkuTnYws88L8Z5sr5hjvEyhcEbrVKeHjdsDxeLcDzxT8QS6y",
  "key10": "3G5CccKQnCEuNzt7NNjjJbjVeyJ1dvF9x1mD4XH1qMuBWpbASgrNxhPCnVKU9Gwcj8kaGFZzU5ejSbokdtbBfJWE",
  "key11": "3mpgAagtj9UsYBNQuBcaSSvTkLtJkuoayN2xfpFTUFTtMsJTPGAHWPMEnEK6eP2H7gb39vmNdqrVV7LVSj4sxkUj",
  "key12": "hXAYkhujaK2o6hNBp3QUFtLUjqpMqqg9VumAtNjjPfVMZKzFrdfNoAvBmAo1PWArQn5XbcQQpwt69qiornrmFMc",
  "key13": "EFYbVFeu1KbZRuv3uqe1ujXvp4oGSF7M7q7eKuFAMjXed5DLwHLiX5hx3amFkXuvV9exTu5F1nEKCqbVGTChqYA",
  "key14": "2fzRvjWVNjxkuNHEbE7yDVWWVXjJj8mPLDYEvvzC7mdjUq6FwV87cNKtFciN5BevugyyY2XMZhNXFV6eoqEpUbA1",
  "key15": "3Hyekd3vgnAqh8rPubNZU1wiAN5irXbnoTy4eRwQAhbbrbzhXNGiWozDYdepGhH6DyYekGE6yJYMrz1QXc9RMrqL",
  "key16": "51sS9K3AEc4KL3mfJ7S93kiBrGcK3vgV66C2EMpAVjY4c8ZpnE32B7caKkpArogfZvwwdyxPSYwVXtGJ7Vt55sKT",
  "key17": "5EGPN8fn7xmtdao7SMWQvTYVh7gQayrwB4xDjT7694C4bfZ5e9JYDpnt1QbgzYaRc1RtG6SrtBKCA3Wrje5zANSJ",
  "key18": "2s3Hk8uCLeSk5MEUroPDsebxoM9SHuwPuqdP5g76SUyk1ku7jtgDCmqRzQ6YEQ3EZ1w75wikwj442ciThKL9Kr3A",
  "key19": "4UBywKcdx2qTSWekwFkGr1WmmpKJfnAZMVykjCS5UsBg3C57CJEeWm2YgvrHnZCAp8nhG7PpdzxYJoScWER8KMgg",
  "key20": "4E8BFA96Q7KBUi5NZjKxrh7GVRAADK2vLt4zebiXvQMus4PmqML97MMsZsViMctQLTM5e3DZaQVNzfvcUzHHarYb",
  "key21": "c5CDK6zZu6e7VRvYL2z7fxkzj9S3ixHgzDp4C9jYmyUfLVbhjZXzgnsm28sVCqPLYNNneJwdSJdRvTJovdpUXWz",
  "key22": "5Em3DLknmpzGAfn5mqwZr8KUyByJTvf3daWSQtNpWdxEY4DnMJLfEcYEGSTbnMo8vumCwDjSLP78RnizjB8Vsbsk",
  "key23": "3r2Lt2t1QCp69S6EwBTcRZLvMcdzxxZ1Nu3t64yXRjUmUWX4Q6vmUrF6hNSgV2wxvGdm5gCKQfy5q33jvoaLKQjL",
  "key24": "4TLH586KhdiB8dqbyDYqA1rgGRYsA7nmTAtVC9TSvNwUZ3ZPdWA4afQqMkc715kBLzTkkqw8oBPr1rNkqd7WpmKs",
  "key25": "2borY1aQdpxjBULjneZRow7TGb4eBrrNWhtEJdVdog9yYfoWHNWUBcmMZHcnEoEqtsnQtDpvTkY9bekkzBwf3qEU",
  "key26": "3Lvd6FAfVoZ4aeFkex8Jm3KvhCjEwRsEBWhvQiSphmZUUTShoxQn1GVFZowfDXHdVc6G2kk5LrJxTsMNvYWh48Fe",
  "key27": "5pjBrFZFrqSbuRtn6JBM2DP66mgtCXXVz4jE2iqKKF7LJe3UJvrcXEo3NERgzt8fRTKpCGrjtW9rFMDnxRpimvmq",
  "key28": "mmH1s2b2CK2QootDxw4hZz1YgmCt6GZPJdRjNt56chMogB7DqBYHtaW46dPgcYYx3k9KveiMVQjZVjDPWhz7xxy",
  "key29": "HXxMNaGBayQr3CEqNennsssom5Z8raqcg6idBNmT1mu5b43sARAqDbjbRmEKSCVdjPrZtzPmnVDv3RvABSjxkt2",
  "key30": "2bVY1eyfGcMfiPvUQ3hpn3io5a81PdWRxWQ3F97YMe6X7d9HaEfdga8LP487tsSxnVQxhVs72Qjnwaao48L398v",
  "key31": "53Dza7R1ELDZnYAVXisWKdfvJ1NCfHuQ6pCmfHViCgPRXSMUyYd6SUCf2QgmjeYC5Z2aaZv6p6Be7qXti4bbVjnD",
  "key32": "34WCv1mceMWr8gK7NWLga9QjLSqL8ETBAVxy8A3FfFE1cJFZnYRkqh7zQx1tsvu5eKj9XXnP1dDyvGhLUsfYLa3K",
  "key33": "3pQuyXU3e46z8Hwxu8Ncd9yJSXULKMz5a2eWE3Bc9xzHgDzEwnFNaTYh3MFw8EB87DajP9PZnP6XhvbcKXnJsSQu"
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
