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
    "JmgdFKbSvb3gLMinFAoqkJFwTrdX85oHYL7mHRxLULYjEptY5ucFKHC1rgaakNR8iMJ4SL7HHUjiUsHcrAbjMTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WEVoH459f8kSRUMdRbemZC5fiFz5zT6dVxHKDNVwKUstdVscD82gXhgzihwGuzNSX28De8dwpsCqWPXeFRCHZ8W",
  "key1": "2bzEjAKarYX91n8EHvGLWcLZSHCrpaENBTstTucWLmVVcnjEWgfgRaNyEN7XQWfoCnZTwmawheNRMTZgmVEJBast",
  "key2": "2gBiYY7Fw1DfdmRCL86yNui66nEk99ZQ5BpGPvJQ3WBXx3wAUxjBDMnzxFtqmri8ThdX469PKfUyYPojp15s3CnP",
  "key3": "k914ToD5KENAPHmtvVh1hj4z4mXXHLCwp33QtrFf64QVq3pi7rHubTq3j25sqbyLqrpqQtagEV5LfPxoBA2RUmU",
  "key4": "2BiWXYe8TJR7pzbNiiYBTV87BwKXcTK2ymFHj5X7swh8663bim6TbEtAncBZmB1zEUaZi3GEjMbu8V3puLWH59qZ",
  "key5": "5CSKkPoSNXXybLmJghtRpZ157EUfHw7nko4o79EbBymksGitZd4prx3YPqg6RLogZRbjqqU8SoYJsLQq1ZXusgJ8",
  "key6": "YroFYZJUojVxAp6fVHTJmNzbiQvefxHRXo1fDa6jJYBKy4jDY68xWksBziWpQhDSuDqgvdF771ue7Yp3269mNxw",
  "key7": "3RLtyNoXANDC52s4qiuEFGG3AEkg7KtUkd6hEBNSYAqihjJb9NtdG1rFEmXTpbwnNHBx8BjBMcsaDssMRXU1yT4D",
  "key8": "33m6B9WzNU8iuTGM7MBLqEQBwFpUGfssfTwhDikXYTPHizJXuZTX9KLjiXZ1H9H5PgZ6WyAu4pTvW86LFvWLQd6L",
  "key9": "3JnztLLSt1k3yqWuiNp5nAXT73bgyuxcaHeGxGHS5hp1HFZZSkAvgKKKbyQEfVCCBDwiqmJfqaKZqxgeUmknnpUC",
  "key10": "2xEXTykM8ffDQuf749vfSHZknmguG3oVPdgJ8CW78D9yqmcrUX9V6CZNDo1DHUG1d9n2anvbaTDB5zyYZf4e6ns7",
  "key11": "5CjAVQCZZFx6TXizcP8Da19mayMnsJn6kyVxAQc1tgYY8ysKv29NEdZzpxisjWu1Tt553b5LcC8qSyfdpZGYbKz6",
  "key12": "4sZhVDBfrL5zrZAi55A9RkhbaR1vG95rwCPnbyH9CwAepgh4mqCs3R7TnDZi6qGcbMgogPL1wY3HCCVZqavn9cnV",
  "key13": "58zU4Q6G1X99285zhBoKoyntZh8eHN8paRLCJPfyPdcGPytFh9TbkowFvUwCLGpMTVCFzrTEb94B9dddKqCv8q2g",
  "key14": "2ipo41Dh3UwcAcoUP8TbVu25wPnuZ5EVkm7cugAob7tKdTwyaDGQoKmc2QnXKW9dMFbmnsHR1kkDrHsBvY2CVGb",
  "key15": "2eVPFmtXdNoQjTFnmBszg6esgboRS4Xf7JzjWppH6PjmpPL4KbhnQ6vT6iy1PbmCH8sZLRxsmAZmMLtGHg3LA1zM",
  "key16": "2SZG887ULTJrCZi2kPtwxUxTeiosQNFcxfLfuDnvS2NFPFkoo1BurKiWZyex2N7MtwnZWLTzfijTzxVAXLZHjbw",
  "key17": "4zb4xWMHVvT3B3FkC6BHSHKtgv4nnGbJdXkhMjmVopXFLXvnhU2VfvGTRe2FSvKu6quWRxSF1iezxPTtyoNjgnXE",
  "key18": "7gJQr6PEZJtHzTEXv6mmy9RLykSPx8NknZHw8j9DffWuL2DA1v5gG8B16S6eXwRKKEcYvosX7vGcZHT35cQXSed",
  "key19": "4rJEr81ndavriM5iNrUTru83T3HZPEsvBgDEBDPgKfc21hLgG7pct5k9DY6Hz2WQ5hawNuHSGcBftqYnPnoUbWrT",
  "key20": "3zEYCFQQLzAEKSUAvgcWg73wFgerBqjs5nX4T1RmsPz8aRLopJJigUA8DHKbcavYv1swcmnPaKXmSL4k4CjY5vEs",
  "key21": "2AWN2xKDmUijFY2sieRCGB6p19npCUrkm5UoZMvGMM3cu8HaMxwFVuS6uxL6PE7Q395RmEeD1uPuochdDxtwboue",
  "key22": "3HsDkHnLrXYM2eAGPQAF8fP93hYdYUyMc1T8PkrG7r41cXxjv4GTZ4w71g8QXP41n6qbMtdkysTvN1uMvEVeDwoP",
  "key23": "43XjRibmNKpzajV41ysJuPnz2AGEXTWtBbFoGwL5A73kKk5eMkoX3dGwGPHXvqA4LPyWVdQRXaLh6GRkRPfoHHCP",
  "key24": "3F1aK5VEZnhBjq9P1pZ6ebht2HG3ntx6cG3biuWAFPBv1oy2nU8TbeNBjv6YBjtzvHQdEi5QrwGwB6wjsiZWzHC8",
  "key25": "2cWXWNWDA2aa2vJiQfmyzZL1RKeNMhCJLywMybfHBMWMTQ2wn3KBVu9Kuos8GeXuTtdcsRW9mvMEF65tBWy6zg42",
  "key26": "3Sj6ZpTuoGwC3vyDsFCpnch8nELUC6QUbbn5kCa6AANAWthANJHCaqphZXLsS9fUcKG694zvJTrZ43Lt7LFnmBZH",
  "key27": "33KHwBCtrrMwXN8k3MxcJUn79JsukoaoPZhRjrZZbovjELPu7Ga8MMa5DnhwuDy7sireNR6XgpHjXWTTpEp9nGUh",
  "key28": "41MSsjU6CmXLSV5ZwDzZZjCTX8ceHZ5bp8Gnhmq9EzWxSunGSQQxgCYD45hYbHZfmkR8pKPNBf11esfMuVvX96pV",
  "key29": "4T8nUaA1PWT56nuwbUmx4DCFgxMf6STVAUdb55N5XGP6FKv9sufhCVjdfdd3HfdGeeVxuQVHfYqvZhkPAEpWBdfx",
  "key30": "rApuRPoWMdRJu7H4qvfU2kVtmitMEFsAPduLPJiL3yLF9KFV3XKuQKbbfQZf6tfJF8NyVoUjYhWckigvMh9V6VX",
  "key31": "2LFnc6uFnKXASD6u7JbmqBdPaMFGB4BiggGZ83miVSZDjafuu1RPJifGHa3rowwC52n5E5cLAvMowftgKPi1sBdU",
  "key32": "rHmtUHbvtXALvgo9qjpFsgYQAxMg4m9kAdpSZtrFfurfa94mhAstQ2fbLUagQBJRJnqtw9R52M3mNsVJ7vCkXka",
  "key33": "4REFj16AVXWmU67FfbbGHk4pqUUYLwr8ARQh12Mj86f1jdvJNkQVufGE8UYUP7F8Med2BHE2uicLQsRsMjwiGe4D",
  "key34": "4EuMoMQxbHTeMVYux3bsnCHz9sc612DYE3H5NeCc7gw7Y3ism5wfJSt6JYXfBDsvASvMC6osjq2NXFk4hWcKtcJZ",
  "key35": "4U2yEV7LHFjcGLWkE2JGLh4uYJLtVyWTCnbBfKW71wBWh3Vv7mLZy1eGDZCTpWzwPYkL4cM8fpCcnAFcmjRD1jxL",
  "key36": "5Tk3LYVghcpHJqqUAinxb9wsKgEv2hu5KidohCQ2MumVtdoJ2L33V6XU6SBtpmS72s1Kj24eHFkDC28sMZ1XACGn",
  "key37": "4mKSMNfeD3N2GgcdQ7BchDjFWXVNSUiB92QRSSRWKVKLKtjR9yiFCfubq2qb3LLs7sszDJHkD3SuLLLD8AvAnKwx",
  "key38": "39VgfBXNQQfP53FMcpAqbMy8w4aFLcEU456gf1Qekc8Tuvpw1a7U8TWW6Fajwojmb1yHqXPMs9t1xEy9ak2CM7QA",
  "key39": "d6Whqf6AGn8B4MpH1B9G9cbJe8kYwy2Gzgw1zn1pJLACSyTBFahvmrYpznpuE9QMJT96pE3jHYaXHq9eX8iozUN"
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
