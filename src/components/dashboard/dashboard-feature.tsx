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
    "3hm97HbDaFxixRSYEjLcaaadBijbEdotZfwwXiJ9AN9VG46aCz3fQsg6ijZEEppzjqLPsmca39cYuRsxKJNSVggn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zNXRD1kt1SRj49kxw3ESRKVwUynWdGBYfnZgP9MDjyaiWDSMXFtaPAm3c4p6S1Rv3NEWnj7BWcNbpfiY9FjWQmw",
  "key1": "3wA3Wz8SGkzs7w5JTYV5TnXvnQ2vXR1jeBSpgJzSKTRcQ7AVJfJjxBB3TSWF1fj4XYSPcHQYFU1nSwnHq6JdXY1y",
  "key2": "2UXE97W7XuK2yaSRS7QokLq4uEZ3JqG9GbhudADKfmfgjbJZtroUuZdXVDZQoyH2ST7NWdcCzZe74htaaArjt24r",
  "key3": "BEGLtiqAZGzoonedfpYbpNpQuNBq7tu4WtFwu2Nsr7kmG6yfG8w7r9TZZjwUwT4p1UHj3GLEz5g3K8taGFX3oit",
  "key4": "tNvKtt5gYDF4fZ9iuoHG3CSy2BYKSG3DB7CUJ9YTLJ6frvvkyrH4r9E4pY7nRR1voomkfhS93EAg42Lsr9zGpBX",
  "key5": "aiMoyd5aP9SVbgoQEQfy4fqvUvQGcVZyMJctq85zC4woeU29mdkUAqHPNk5amGSng2jPrzcxg2uxxppqveMLQ4W",
  "key6": "5kXcUtsMaKbGi9eU2v7A7rsCdi5whDHVGB4KAVz58VfL65Dfug5EsxUdBcYpg5FLXU1wyEoDGhGVmj7Lqowac5ok",
  "key7": "4QAdtETfjhDGFbrqkKat593oYf6zR3M1LVXZZTUKE8JgrkheVbL9mWMwUrnoJsjKyKjQwSFnXU5h1FgBegnADdEY",
  "key8": "3X4LxWm7rXjjsuJyfokA2k5sGWKNZvsgRHHnbUjQcBUgWNnqVPfqcruXWpz5rnQAcHjinaEJRXKyrLisjVjhdai5",
  "key9": "799R6j5ejeUgUFoc6HtJNi3VEfRY45WTyBrbiaeu7Gbk5g1MJTwvpgZxrAJa6nztzwJzMf18fVvSNTSY1oKBCzP",
  "key10": "DMyMKkfquLpPUbwL1fhFRWL3gs6v4TaDhaptQYa8FZ2jVZUxQAfinNHnE5tAUqxbiBVgrBj9Y7mnR4GKMVmwm1r",
  "key11": "2U7eRPDobsx9WRZHpTXhqY8oxBcCbY9D8bjtQf7xXEWYn7uYdYddT6YDmdTXMfbpDYkMiJN4t52vE48PxLF5FLDP",
  "key12": "51swGREKxk82F6BxGV4WgJEbBYmWowz5AkUdTTeJtvZg9MjYrU23S127WtKakrvrP8cjdY5uWXWLFbRiDYt6tht2",
  "key13": "2FM2fXiz5yD81eCUVrrS2Qv4FXmHnmFwgJj4eoLyBghTCYUTFdGdJjg6duhbSB1dHH23AN9JgdniQj1Q1Zqew6et",
  "key14": "5rUEntApFyD1FCoJhSi6PJQMwSNqQGDdKTcSGwppYKi7Ajagq1HaE5SYtVKYn74Xh6uGwauxL5bP8Vx2xW1ZDvW7",
  "key15": "4jKdjma3K1fGJD8XLiajYBAWs7ZEkTwgk7kj58eKKdWzLA4BiDWdyfgUhao6o1EDH7pG2YeoZcazhPQ7NdM9A3HF",
  "key16": "4qtBNDKVSLXE3NsemuUbYgXZhvUmfdDi9iVC8i1nh6uvBYPnkptd9gYaFcsR4G6oqATb2YYHwCxp5kNeUY5QwTo8",
  "key17": "5cM1smkkayUdy31UrnZgA6MugFhaY6eKMpedFaZwFj1PEuCMz9sPivPCy9yGSEpnFtc95tuERH6AjgJaqES8J1Ui",
  "key18": "5tXmGhq3mHEA38vUq7itPHujxHQpGR1cuP7tiigq5SAHoZACAwjPzJhXc6UbZSBqmg9aLixMsYMbiFDY6ymAdDvw",
  "key19": "5VSJwi4iuKN62xvbJdYVfm9c89g92vjJhPD4ypi8vaKwACra2rn3Wd4j4P8cj6tqRAUZNB7TtKXHfiqLqfC1C7Dq",
  "key20": "2RjjVVuTQ3aKM6h9zfv3D22RU5CWTNMpihWMFf5LCpHaJnQTqtSxsszcu9YrfhMJiGygMP1eD4UrGd9ZDttBA6ac",
  "key21": "N7EMURjHhPxfrAFrH2iUXzhf18YRHrrhq3JEHtc279yid577hTZycizkDJc6aAkjSPnkXABTU9qzbcPzMFqnbLG",
  "key22": "4mvMnRGzMLV8Rdc5ieWh2fG74XtGTHsag5iravGa2k9mMqzLPqjg9onURRvFVbuNNntSP464cTy8XebfJgEGSK9t",
  "key23": "67YnJXbrD3MaZZs4xLkErcFvAFabMvmCBHS8GZ6dMb4haTZxxgk17AVa4GUkoR5NBMWaxvwdhPAX6i2YBZnDaK54",
  "key24": "4qGBk6exaupPQjL3s9bvSyWuWN8SdidsbBWAM25usoeGsvfwHA8FC2w3gNcg9KZAurXdc7T4XcGvx6ToinWjgmtV",
  "key25": "2kSZ9EWfaxXQtmnqxS5qTCL5WevNLemJ7Nek75yNqEVL5tRyRKdYKuaTu3U1Q8m52jWceKU1G5vYc6fM2j9HKWWt",
  "key26": "eTipwLogFh6hL3FeGjcmnfmNHBHAYLwx9QQ7a6mhyb6B2u27b7MkTV61MFz6mzunZv74ANjXNJUw6CixgGcJquP",
  "key27": "3ARFz9TY2jctYun6b9unWJfNp9eRY35RTL8XuS2L8Qg3AmxP72HhLDUEkNdFbrobXxDoNX6B5cE7gzhoEzhsKShD",
  "key28": "aKxwGCQtTbUDUZBu6DvFxBNR1nhn9LeLrFBFA2KK4waUM4NwnN5EVG5k8ikunX14dbjwabasggJueEdEz1RoNij",
  "key29": "2rYXGgiPny1z9C4UxgMMGR4kSNns5QBntYCSgekpGakcUpgxpNbB89YXtfpjft4jt6MVHXkF7RxEDDoSAZdiGHTp",
  "key30": "AnxuPzzgVYBi357JprkYFNoWzmYnpd266MReuMHeaiJWbmPFnMTHQdbsuJ6agZFL82bH3NrE9Psay8KNoyuPtpC",
  "key31": "4GoTm9YZvKzt5qQh6ifMZ5QHe3yXR62oditd16JFise8F8mpXiB9hgkGmeLQ9t63ayg1UGwMsFDu2DEbsWnB6ctz",
  "key32": "3vgJwEWnXfECBgFcsBcFwtTpMMHFd36AbWvVxgRcURwWcbspfq58qUUd86FCWLDuicGVks9ump7eDwwzKwecmpBb",
  "key33": "43XUno6RYCW6ChyFsiRP2JwPxHmdwdhzhxnGS1bG6AcCHHdkncReMaucaWzURddL1aUjL3evYh3Bqm2CknoEW6wD",
  "key34": "2aMonmt5sia5uX16oMY2Js6Ber9Wzth8ENoszoS9ChdzybqPid9XMvqzc4Gg7wFDyEQFhLzESHUNh3tMJvjadahr"
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
