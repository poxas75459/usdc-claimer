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
    "s2XmJ1fyyKCePGf9sAGY25Abb7u6SQJNhBNsQ1uxDaH626tB6j7cxmucYX2wAkCruyeMkToMqKuMHmdTAaXPEBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eh3PY48eGwzuZeLPrY17SMseNs18MDmDcxo5xV9DCQKg7mSYVZwKwyabwYmK3WmVFzFs8pQ77Q22vtS4wdd5pdQ",
  "key1": "2PHo7AasFmjhhT5dWbGMH1CUJxKESyDokS1wVK7H9tJuZHqstNw792kijb9XHQv59gF8mJiMMGgVAVfqMPKt4uq3",
  "key2": "1kHuV4Z8yjiEKk9D4fTq4MK3Fy5S7cgdzEcd8V7Dp4JanwhcPjh36GDuLTvKcPY6djMBBXGJK9CSHgSe5Bsh42u",
  "key3": "27kMBgQgywvfTgyrgp3LTkcicnzL5VPzMqFeYh8dAPVioU17hEbiocgavFbuAUVk3CqyiTTjmFo1eYNwUkSTJA7q",
  "key4": "4xPmMogGnvY8ivdJoWUbL63xX3GDuyMBzRNQHETTeZE74XtTGAS7vErqnTfhVgnHbkqJEtgoXshCNJcKWVo4nF6r",
  "key5": "4Fj8kL4bbbNf4UDxUz1eGahMA8bhXGfQu3ko79ehdQnCZUyjmM7NtvpQGFd53XbY2TA8YTYMiUnL3EeY6BsDuT6S",
  "key6": "61c4Q7imh2UGBhVmX9mJrgrTSyE2nv9CLxcF7V1NdmtodjCXabZquUJPSCyZs7teuCKFaewJoXVQe7sEq8pnCnsy",
  "key7": "2cuM6crdqZaw3fWSbZBpyumiTHS8j1bnziHhaeUxhz8hF7RcuNHXGRawQz2HAmiPcC9uKRKnyfVY2xa7yNAWWX49",
  "key8": "5XKy21fEq4gAJM5QchmGJhvKEQgHonc444fUVq1kFQ9JCrur3yLfQbdnTEgTKUxoxFBRyv59YaDkmi8afekh4wTH",
  "key9": "5yc2UEmaUrkp7vHhS8RLQHvfJocdCKQ2ZT9L6kaiYhcb3miDxnpNF8PdywexGndr8TBvpEGDkGMsxpYd8tBgQqar",
  "key10": "GiGt7kAMEs4mZCo9NXCvVcFShKFW47xzbmvg7bziSVxRDrjxoHqgMXFZcJrqz6QHjc58BSsXE8AMhcW7rAcmUoC",
  "key11": "4xgkYZBDbazCExNY3joYJqyPnfyJh2BheTuH3d3JdPjEWYwnE25SrxHzaDmNRuQWRWPbFiXpPeAAoRPoYCebsa5Q",
  "key12": "5VMSoY3e6fitebCCzvXQzUCX4vY8QFbSYtAyTPmHAiiNV8jR5NRsSKWEH7HmwzAv1SwhppGgguo7nPRyT24rKMjM",
  "key13": "66dDH479pYMSq8ipi58rss1nF3UVsJUoUWpcdgQ55Ctu3vpLY9kGkCHN8DHrXKNjYrGseLHtMzGdYSR33RABXwuE",
  "key14": "tZRzugCeie5rtwbnA41Vscs8Uu7sBACdCnvSKB7gw7pN22hQV35rcu4PK2tmE8sry82vyFAh5xHWouS4GS6ysko",
  "key15": "26v5xH6syopJACj2axCp77CmEb7igCdLhw4fx3rKLLPMppmxeWd7GopjocBqyDHNjxNXsY3YsW3ZTnTn2tys1Wyv",
  "key16": "5eNEvK3ctzBtNzvbEzhrcitVQSznfeFvyMh4uHEjGS3pyfRwLd9QE9brwLZnkKzHHeLYKoHNyvcP4rpybE5No2na",
  "key17": "4vPiazAyG6a9bKMBiJFt1s42xnymMRF2dcuHgUgiGkUY7NNV3Bx7nxGzj2HhmGdcEQRqyokcMat1zkdbxWkHTCW",
  "key18": "3CigGoycAXdcNeKkwWANnJRBBstBgxpTFG4JextBvBKSZV12qCNzJENBet9mwsU44aE6tyWfh7uNa2YXuWPyGCRj",
  "key19": "5FRJHb2CtRd2DW5ofywiTLQ3bDK4W7qezfpLYCaaWmeTrEgYXJ5RBwU5HQdBBwuJGv724AfV1X4GtEvyCQyo9t1q",
  "key20": "TggLYazrd8sdmCg18bADkKBDhxvMgKPjykdcx5TEQv1NZfoiWqR7r2k6zkjujR3cpqDSRw6w8gjbnr1RaaE6YL8",
  "key21": "3qTZrPoDJBWep47NQnjQz6MGucVFAeRPKEkiG7NBXrWCzuw9r26SDS2Pe5A5ymrfyVLZn3Z1NZyWpu5DjUxNgGsJ",
  "key22": "5DoSw18iYH13er7VgihQdcRC5j8eusnry213JSW7Sc64TEseYgSAvcfvrfmikiYAqe2HbrrtimUgZk8FYiDcPjph",
  "key23": "5K5yPjd56tMgKCLF5XdRrniAPKP9D6MijM7T5Pt52yra1jQvkZeaVmHrTWk5vYsyFCE2NJscxTyEnwqeGUDoJoE8",
  "key24": "3eYVdUFH263jVKKsTmT3UpDAWCJ8XrmfFrR7PmUUuFHRpomH9LsM5EY6JQ7eg6cvsSLBpJmMFiEqVqZ48k3GYgs2",
  "key25": "5UzStJxabG5fDryejJMJPpRWNSP8hUVoqW4Mu4FUCASFREsgS4p78GzZ3QuxVeuQFyFRUcrCfSFWFwiQXseTMwGC",
  "key26": "2396Y73K58rH1XenBxtSRYVbYXFc6nXxotiDJccLCZGDVas3UwrAwY7o8A17iYoeXVpBYozyChofjYnJoow2nA5x",
  "key27": "4qvBv1ojLhbgP24V6wFvKQPRbMrnaHYivwbbEp8u3NNoj3X5edD2ANRHMb33CyXaUDeYPRUQei6Reid7FPUoCrFN",
  "key28": "5drYvC9QYqdkoNjDvJm3wbWr5Q8Hr2RMsc8XgdL9n11F6q7sXzsPjXHSHnBu8yfjw8o9t3XdjvK4HGsE4oNKWLf2",
  "key29": "366rhi5Z5siTr2bSUBH51ZTLjfRWPsGCaTFZk7ehLVn1Mky8mbRW8AS1udJeKL8jf8nvUoadsPg7DEQYMSYRsfMu",
  "key30": "48gpq1migRni1UEiEdVbeVpM5ZXFLQPCqhMBbFRj2hZQgvn23awRoY6Qx57Umb7tQ9gx1KFJCcvPN9r3ecMiq3K3",
  "key31": "5nyrwxKZqKiWQmfL83dpeb7uywPK9yuvJhTwVJfnEZsobiQ2BZfij2F8RQRnyG3dMDJWFotoj5Mhop2R8g7JPFGE",
  "key32": "5BrvTJqVTCnxvDK9kifayVWvTXL5FwcYb3w8L9AnfK36QtmKqDDNwGwFGC1vf12bRHQv6sVeayTKBAkxsgzu7Ejn",
  "key33": "657iJ4Epq9zxiHTzokJiMFBzs6vJVFwoGbbTEUqeZyqJHM4ZtH6ucWKAoFFx7Be7272WYMQMvtcbA1Wz5RGAWTX9",
  "key34": "5YfY4azaVwzsekXMkExip2ECzNP8irJFjJv6uwUHrf7So9gQtL3AQBuL4xHYRJFB7wfc8mhvHCqkCYj22SKnmvQt",
  "key35": "22X1wf47Fe5b51MkfHm8hV7pAu6N1tZwAtsu4beJsmnW3JB6aAm5DS2fETzZiVEutZDSfXVzUySgUfVdhFcE5hjS",
  "key36": "3TJbyQdtYd15n72MCmm6fyynJAdzBV3t2uyxQAMWQmWGwZGNQurLjaCA3ssidVW6UyvNJEjUppnL4kyG85NdNB8v",
  "key37": "4mBDpeixxgk4qhB416V4j9uz87aP5FDsEh4biRuf7VKn2dCzkhnUvBUwsY7EVBZEbWPFyDLHudoysMgUD9hSjNZN",
  "key38": "3BTQmsgW6uZpib8bMVLEMvBqAdBYpiHdS4Dan4dYN6MBpe6Yiu4zr9GQ4omMqK7yBA9WaTwhwSVCiWoCGvjrAEJn"
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
