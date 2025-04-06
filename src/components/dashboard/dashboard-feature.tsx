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
    "2zohoA57EQ846LkLBPZm91EyZUYiY7V6PNEKenizCAWbxF5qZASQyLs7LGULFHeAvGazcvt6Sasp2ffxLss8JQM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61SP1VBXcUX85dbQmZhZnin2hvz9pNwPqnRiN4q52bYvzbvdxmuL1oW2iSeVVQyJQ5uR5uS3QQPQHfBsMNhYBzvp",
  "key1": "47DSkdKyG4eMiTrDr261Gq6nw56vLT1nW2ARabixeNK3wEsPT3XMaNdjToGV1DKDm3YmzhmU1f2fEuAqn2m9oX91",
  "key2": "9urg5MWhPMD5KdkKQZvVo3BjyiEE5BFgCxazGjrTLjwQR8h1DuVbHaG3hmzCsPXH76iLpuWVvKDz2FLmto7Pe5k",
  "key3": "2SAMYECn5iVtdDkL4vBdmCFSShdciuTMvGJjKobMH8FGhLpXdXdHkNwRq2RLdVYVtWB7AAQsr6ZfwpmGHJ1d6BY6",
  "key4": "4Qj7bpy44YMjUDkHM9foDcphk7fDY5tfY4SYzT3oMiU3JwP4CVRgASSueoVX9Wh9H5HPLGm2ArmthSmTYvTtbkDR",
  "key5": "3Qq3gyhgoLKLwXYfxVgLqM9aF29kVwiTQJ67Ro3MW4DAmX7j3jEJ7fPX6xSCQf7dECyrsscPEBKsUph8FhAgxFgB",
  "key6": "2VB4pdr9AmTDJLtX66syyVEHrftYfGUNcfQ4UEqtXYUD5jEQrzujfZDn1x6Yvbjpbdt6SVffaYyLrosAaKGbBgHC",
  "key7": "3yRJMs27spHTdVxhEugNVwyv82yPFQYQ8EfHhQ2TZQJPpGtKVNSXmfx1g4AiWLve2i8Fn2uRW4LvwBbDZZxMQvfn",
  "key8": "3TTESiP2C3zfyNQDampBs96cEqFaTUB8ERfAVB8FBUorHbJm5vfndRnbrA4PZ9ZLphaBfzjFkYhWYf4CW1qwJauj",
  "key9": "64WTHyQMY7nTrB3S8DJ3sBosrbciE7aKjRxQ7hLMLKADmMb3sPyHk1nc3y75RaQnTVXhneQ5bTwGmWqcjXfngCwG",
  "key10": "5EES3MoAS1WSwyXVn2yY2GpLHeQUHxPuX9cqrweFvaF8FmG9vd5xKNivaTzVoXnemoFfBqSnbdnLdf55cHzhj5TH",
  "key11": "2ByxMZYXAmJQQB7W39sZD8yCHnFLpUraYZhgWwToGCKompjGj3ymxMfuGWZG6cQXv8it3aSncUepQtB83rxbiD3P",
  "key12": "5k3i4uSAw14y4cc7JvHLX9uorLhfj4QLdSccECiyY2JiCWzM1sk1mzu5Qk5yLxpp7Ci9hNNdWKuPNc9pEvVHcyH2",
  "key13": "5RJGAWMjLp2qL4g2uxbpPjTRr9nF9kefsKVX3ydMoSQ6rG89mTRZEkED53yNhC5QL4T3M4adEAhwcaUTHrwzzte8",
  "key14": "5UDZx248j3v5BARJHaoPMCRTirteAresXterHPXjSuTEb7LQWCjA16cC2DQVmAbdveGs5fdTBH3EupwCXe18GutL",
  "key15": "5t1ZMXHudvjEAZYtZRon9D42nh4zQFrj3ZgNAYPV25qa1ZND1XxizLRSuHSVV8LHwho44yJTRqsYamvtGzZ2k71p",
  "key16": "34YqdSLy3dvB3T8z6HZ9Yet5PUw9Zkt97SUJVgierfUvXepaKGpSiyBkWTxh2qGU5EpniK9qVUWbnNs7Qf7s8MTh",
  "key17": "52VwhnPnjXFz6FVqJEGJwsdd5MnMP65tPXB8k3EUDsQbi1oyY6mFQS2KPXyszGN1LyHgeCtG9UodeiCaNZ4edBVR",
  "key18": "5ikj9wWzaESFgtmdcAbENuoRU6mtUDQKYQrBXnnEJxW3ciiR8bJXB6oTdCKBw13gCUfeDWWoaCUfdN9s1MgU7Bc",
  "key19": "5K3eFyatRitst5ZL4A7Ew9QHEzwTSE2jJjWixyhtNPyUmGGhDHU5uWWewM9eT6C1GQ9NZhvQk5jccaL2dnDRkH91",
  "key20": "5iYHtvrXRery5LgeBd5ECPZF7998pnHnsUUH65QxjdQssnNM861rTUekL2BM6XGJsyEC9eV5couP8c1ZmNLpN5Ux",
  "key21": "3ZVehtDtLYzT3VAK8nR2SbdPSTDMaV3BLEuHigSG1Ygp7UC8brkNRvLx4k7KyFmgGAj3Kc7xpx4oqTomcyo3EYD6",
  "key22": "JH88TWdRJ5HMZGokHat3Mr67JhFetwu6bEMy9bmVDeVYRJvtzEfYBtTTNkQCNC6jV4QCQ9mwx9XGQrQrTLJybnx",
  "key23": "4XEzmPVfYK3ZRLWfvrUS2fWqwHecVMzsTsiVmKDe7LaaVZ5rB8L5CrjMagHCC7rJB22HRJBkqCim9fE15EcXC84D",
  "key24": "4doPyzNngaLMWorQyfuqWJFKbqdYrLkoGSHWQLXTEfHW2RbJo1gx1mQ5K7tWeemeJLsjP59BL4KW6MLbBnLU77V7",
  "key25": "mgfZXBaMEZxC5NRifSq5CvKDrL4rMuhEZ8AYuKp1Ci8nQLVHs7ry51jf4pyKHgLLDVrzmY4JuJyFAKNxafarzzS",
  "key26": "5Yb7Q8K32CLXheCg1NP4TcSmHkQvjkS6TLtrSR1NQozSdiDfSmzzwK5axmyuWiy5Waat2PG7RxHikCuSyrwZBnZU",
  "key27": "C8qu176oeHR1XHqobsr2bbJc91EukHfvcU5yZqGZYM5DoXA3j9kvsW5Zh5KWELYEpUTSpZW8tA5eqAZWDhinkE2",
  "key28": "2mZSn76N6eE8mPqRBkwKZsAowxnaP5XPtaQL1DEc2XN8ChQHfkv6p8oyucW83SPa63EkRLFwoK2Z57WAcApuzb3A",
  "key29": "LqCWsSgtJLJzjYS4uJ4NSoiXyR1LVCXjYovy2jgPewhQXBPZwHYHiY6P5MNeWneLWDgvczVin3NcoZkk5Z9WEm9",
  "key30": "5DKKY4QZ3zDFq2ruNQt4tX2XNbmEaU5aDzYTfAqFRWj41Wtms6yRa7BMis4fisJcv2DUxn6KPeKQ7ogZ7eJ1xUQx",
  "key31": "5cMkwyzNJLECv1nt1niEGfcrGV8m75EfjxYq9WD2i3BDNa9v8d6jzD4YKkkYUBQR8S8g6PDe2sXrhucr4Z3Ne9fi",
  "key32": "5bkhFV4tGw4inpFEFNG5kPV51vqGNEWJ3EjvHkjmYkhTf4PGoZpddg8qn2bx7x8mBncGmYrsjYsTCuA4aTn7pVAP",
  "key33": "4yuaLePvbgmRzi2vWCXicQ6s4XeZRLS1AbT9UYrqi7d57bCjLtcBBb1W1YfKuKH41TLbQou8Mb2Wr1U7cDttDRBx",
  "key34": "3Bndor6o4WHTU42ZRpxnuriZbaDQEFcwYgcTiu6yjpVyN5x6J2quFP9dyhkHLk53zd6VWKwUgWRmo9reWJDR3Pwq",
  "key35": "3gbVvLAjNs5YvGAACc2Z7pCPZXQJVzvP8ZB4h9YAtbFwYzF27d1AxVyAyXCLPzhG3tECNWQ5ZFxa8DtFf7LkZHs6",
  "key36": "5P1HneSZGtHa1AUQicRfWF6ZpcdSGAfCnPpynppbPNWLJ1JVfUji2zeajn43zo2rCSkapS6Bm75hDiEBBSyfLUGu",
  "key37": "2YoMNYDybwUTuM6K8ZQq8gK8mkDs8nXJxCiWDbfXzc2C5An1ygxgBxa4hDKSXFTS8kk7EtVDGFcN2xDLWMu6DPqG",
  "key38": "23Zmgkpv8b4YJXiMerDS2g4y2dEQA9PtvAML8TFDPLNCiGUAq8e19GhKzh1jTP2kb2iEe8wtbJd1ALKa3SqWTUZ7",
  "key39": "2HNMg3CzLt8a1oKQDE2aEMuSratKAAVdNzGA2fxxh933jPHgRBpaSCAqJwiHKiZrv8XNSDA2zxbLKgmAhwfwHKPu",
  "key40": "5hCtHGjwwgeB95ovzR9Qg9x7aVTrRmmcZNdMmMzn1q1BaZuXwNHDva2UW6uizCXnSTg8ogW6AcrTnE1FgBv3AHS7",
  "key41": "zXj9cPVLCWuqGrjckzFyLzprQF9LJM4hEP9YnuHmLsZbeEDtskzeGCvFK4UyH7mfmKJxWUR8RcqRz18Vjzacxpg",
  "key42": "4Gj8Srne7fLHc9RWUuBt265PPN3M52y8KVMdTqgD21vGLATBVjmX5JRFf2i4ZrYm8RzPmi8KRJ6AgcZce6BPYT6f",
  "key43": "5m525aY7SEjEB5qK2BJhDiQmoQGqrk4EwgutuP9AKHpgLiMym2yiYcT57tJstbTXdbruRX7NSCagD8J5wNBGZoJH",
  "key44": "2uSPeiJFTP3gPnS8PQ9UsUiYs7JjDzTe4BjqpNUeAmtWcD6nHiWUzB55PkSzFedRp163W2DgiTReic64fojstVqq",
  "key45": "qEW1tqEbFXWZs1PdTGJgLciYrE2S5bEWAagZHMGFYkLix88gfWo19DfGNY1mKFZkRkpirPwQLXBX9iQ1mwh9FVz",
  "key46": "3GsjR1inFLUYiCgHdJx5oSWikkXNoSunKNPZs5Dhck2F3zERAfvKzAMPvqJS2LJVtX3Jmogp1n1CQQiff1eqoqhn",
  "key47": "5Hiq5eewDKXniwCnDBWAod2BNeaFTEkq21h2AsUzeHYMYjSkVsmwHKpRvfc4CvTu9HKaaMGqvtYBBC6Sq3a2cmTD",
  "key48": "2FtpXd7SumBUbHzEEercRu4d6UgKcVEBhboT9M9uKkUJic86qz2MbpDjm8bNvfnLmrstSTeN9pnWWU26Cs2z9ZFq"
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
