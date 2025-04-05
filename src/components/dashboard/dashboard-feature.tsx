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
    "4SzBiezXAYo9nCWTXHuWZve6yBtS1V5tpwH8z57qgHUjSZVpFgvsvdHwbH6gtFxUyxBUibSBsQD9XY9QLNmJCz6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WAYzCAbWpXiMXcKKZZ1YK2jUCJe4LsgQVwwyJ4Jrzpygwm36koA3J6ZrEFpvk3oQ2kJNdF47NdLnc5LWUh7zreB",
  "key1": "4kWt3vYdnrTWjfVU2WVnCcVzo5jH1o7mwzLJDcAvGLoWFrguAucKLjg6de3cHJPZx2UDg4bHjufb6KuHvFdPd4kV",
  "key2": "2236VRfgtZoMy2cm7aai7TE8s8sJ8yiBEGdcibdiEDh3mExP2BrYG2NWj8ZtvyHjb4RXrPAUSsNTgy2dDBPV77R8",
  "key3": "7tJaQCEQGEjpGxqaEas3edUW5UgVLReTGKFZWMCZyAaLLYSfwoAsvRyZR3BcDsFnKrdvbpnDPTRTAiw1MzMaqoe",
  "key4": "3LB1nhfNS9TGpoCkEkcpiaAyHwiZ5rB9TfwrXMSzM2d1vpMu1TEWgpEovt9Q8PCXDwXeoxGRxuearx7Tz1HaRFZo",
  "key5": "5TJLawDFtcKSvRq7Dj6C4rVuBjnTSTH8bPrRkyWJa6xwxE5EW6rurqo9cVZJULjTW2S22VtkHA9p9tcKhWedknvj",
  "key6": "5Ec3cXN3M4dg64FDWADm3ZnUJcbWXHv8DpE6FXLbtCLn9ZBaXT9vHQ4FgeGMDL3vuCGSHJXfEQgxcfsTURRUFnNv",
  "key7": "57PxhbCo6mDh3PJJ2n1qSmajnxEDdZB8Fd8Lypcc6yLTEb82XttJjGqzE9pzhF1gHoRKUiLt3k2JGg4yuQwprQ8A",
  "key8": "MWcHuaJNJaCVCAmH7zEEAxUW8fNY9CKprKz3gixupwZYz8caQKPVE8akEstksHFg5911vP8BUCwrVY7UqgrjYg9",
  "key9": "5sAUqu1ACHiMR4D75UwhXjTBNomuDrraS2Q29BtRvwVUihTqRepc45PddHcW7DMYwM59pS1zhmG5qk4cgfdWgS7C",
  "key10": "euYS5wy1aKGELm8u2ERQsrPV8ojpm6E3iwVcXAUZv2B1iBVknU4G72nZJZL7ZpRowMtQP2maM8f564kpbyEbVYC",
  "key11": "3PPVGUqomdBRsomJiHJ6DMWJePvGBzcUDR9ph2DCekCwuoVBscwcfkrYGKFq64493XoKMWAphQGqMeXA2RBggSYy",
  "key12": "3KKJ7iipNoGBfA4GPp4Z8Y5AhzSj3QpvKrfFxVvZy3Wkn8a1DRRHnHJJDotrTbYS7qKcU1XSYkCHXTkjqa9mpteF",
  "key13": "5VeTEmQdUQZrXHvv8uH3rpzGx2UDSXmEAqMxGXeNBcVzAcEJFUDBKVfXVJBxyMhXrFWdNzP7yHwjUPMeCKoJskW6",
  "key14": "5YJSwopLaXeVy1BgafriQrTiwgyTuj6YfGp1FmC7hq5TjgC61as9Srbkv6sTFYeNwXJWvEVG3GkrWvUNcj6SJLpG",
  "key15": "2pMVBjnjkFC29HxLDTsP1aRoU9c19zGx8QspkrF9eZJJ85vDGwGAoJFRn4rBk8M2oiKoet4DErmnUbZNQCn4Uepe",
  "key16": "2LCbGuwWGuHVGseYMquimFV8dPi17Vck74kLWuwT48AAsR3nocES8ztBnVVPLDQJthkH9gDkmo1KXEp5eZM82RsD",
  "key17": "58PFvftHz6PEmnqaTaY4CUMmyXx4FLFohB4vD3aXxo69Qe1anuuJekfFkSbJiNFPYm9jL9BfYCjPyTjciwikF8Z5",
  "key18": "3iBeaSmPZfwudBfiSbtQKecxN7HDj3S42ndw1rpYSA5tMpfMjzs9AuNuvssaqWPzR4tbgCLFUNw1yLvYLD4KFTV3",
  "key19": "hGC7jKzR421vCP1vPrWHnsD2se7JQcjoMWsxUDrYSHKcFo8x7wgNKqxXTPqqAHyQdWGQVMh1bajJ63pXgta4517",
  "key20": "4bHjmVGGKxVb57oXWhw9ghKdQP1WeZrrBPaVQVxvYUh1jyYwJHCTEiwnzM6FTYWyEs5iUWXWJj7iBrScSJ2uqfAq",
  "key21": "D1M8V3mLv8vZgUQ4bMiWPuXW1GDbkYL2jaUgykfgmPdn1xJp9Eoq1wcAnMim5nSyQL48a7NCQTCCx8BTebLsAK3",
  "key22": "PP4HZUCgcaQJArYYpVqWVSnoRWergoWnUaj7UMfZcdBRrHPokiCsWbhrv4ytgoMTJtf6ZkYQAn4qy6z9QCKjHKq",
  "key23": "5tAZHD6eofNvxZVcj7MZjjZJv5SG2y7cLCgYix6TLW1FFea2Czdo36KhsLSjL3EzDBj2BTr7EDqK7M57iQChhGZQ",
  "key24": "3bRnarErtShQENnbQpQTNohuymdgW4bQDoUk5n6B57X5Gtsnpr2dYRXBWqeTkYgPF4oCME2AXjd6oRbVuuVMvng2",
  "key25": "PJkFa9unSN5m564ogjNimWfC1hsfNwrVYQHsfizeoyKaHLpDXonBrDTeyjsZqaR93KfLgQEdkxz3kVqnhNiGrRk",
  "key26": "3uETxsVx8NFcyLAWXyd3bHh1PVnaZ7rdvEqJqjdf53L6Kjd8n9jrkXk2j2s7csy75bRZkRnziNJTh4dhBUQWX98j",
  "key27": "TP5DZ6nu6jgQoMmcg5S4xRNaftweuTVyfxNGTrGS3HqnSLKyzd82L6426qnCk18xuD9C4q36oLkXCq6kkJxCvfN",
  "key28": "sH6t5n6mqMv3b3UdWPW92Ky1qrBJND8WSmqEcpnVi2RPQvQ3yUH3mF5kgPLdL5rF5mqDhUGVhdTmJeVqfSdwfy8",
  "key29": "65vw5vcDwGKs8gYjVRF9qt9xBPkwCULUyonPaCi6PcKUMyE4Cy6tN7P9NS28bB7NPfL27MRSNJGkXNm52mDuickR",
  "key30": "27cPeJRUrmHRDbJVaAN29vJN7GKVUKmwueqPHF6sViimARsw6dKjvyg2A4xsxbVmeH6Yn5Gn44ahSCJuAF62Xzmk",
  "key31": "554iZ94bKGdWPYe7idCpTK8BGWmU7XC3zqnrXZCNNeNoPU8VciLkG6KAxqLepvzos5qAKJbjLFXrMgMZS95oyZ2X",
  "key32": "rFf3hXKpxqGMbmvvUAWc9yWs1ray1CRwocn9fDTc4i72eKMvKSdX4DcpaRrQuNyfjabDw4NQ1pbfryRk5XLhBZ1",
  "key33": "P4pyVo9MX2BjpTE6Z4N5ffanc6hJg8kcvKJKYSxPhdk2DYPMQ2Xie5XY4nrFVnzKGW7mNTAfMk6n27SW7vGLBu5",
  "key34": "4gTdfKBiDscf7wUwFA9fbjHCERXUbpoBbhMBHsYSUjH7ponNZCus7Cx3D1hRnRga8jU5kV6Zhp8JNFYG9rTDxZ2v",
  "key35": "278tivLVeo66eurKLBa6J7FoBahpcXccZ4GWgCezkCPZBf7PSTsGy4cfepiH1FxfbxYL82tu7kbbQ5Shh3HEkGJk",
  "key36": "5ne6PJ5J7g7p5EDFdP55KNrtTzxyTYbzRMHLaZRK2FNYuE4gpVx3sd7JArcZDFdemEijNAz3sET51bTew2TUeSSx",
  "key37": "2u2sNDGvDJskKBoASSKWsEBX71GDewSuV38kCRJC2aEt38fYeKhPBgXWueVmRBCzoyxbFs2tWdEj4PKxRpatNf7N",
  "key38": "4iXv7bh73XddGY4eMnw9RLfmz3pCX2qUkzG6uEa23jXZMj6QQzGryrnhEoxQ9qiWMkHdzoqTPbJocV51YCTKjNYT",
  "key39": "4MrWWR7DzQwZqmv3c45wJDzHwBJSesb2qzS5iyPumgRyWkmCn3ZDYApKhjusXZF9R7xhRaxeuyELRzYfQzTp38bK",
  "key40": "3mC6Xqy13YcvfMN2PD2eKdQEFL7Kza99cQt7eCHSRYEBqdudBz5tkh3hEUqsAdfHCLfzgj6LATHVJAMGZeMPnr9e",
  "key41": "H76P9Lbn8HHqpU8PfM8PG2FNd7oCtqeDjsgpA1Ujq43dsPAW9WKnYgFNDonzP18oBzqETKiHdVHwAMn3fPqsEbL",
  "key42": "RirsDrFcYrbuSyPTt9xHFco79HaMF8odbbELJ1pGzZHYHp3K7NWJcbV32WCEiyqhUxQ11Vvf4JVuo5U1GcCvpep",
  "key43": "53V9CvS2s1s7soXW5n9HSVhPJwUfe5Dbk4hJtAcioLp12mhpKi9mRmqtFn7MVjwN7i1KKgmaDkb4SKsn6eYSodV9",
  "key44": "51HwyeFWmDEUNsuevyQBuLenr2fG1A3CkKEo5Z7p9bJfCkBMLLv7ZuQCxxvEf91oo1WRdbCLzbkoC2jASHVLJtSW",
  "key45": "4RxsqGxoZEYc2iC3KD1WpwNHfNRtAhxmCD6QkVPMRqdA67jMZFmAtJd7hDj5WDoRWgk2T1gwyUTRTcSzgPeJVoNe",
  "key46": "2ZhATBEJhpzjvSuzcUGyQRc6Ph7fCnqwXN9AUosNfUzZFHvH3cUWFVB1YnUS3z7Ny2pUEJfaiBJ8JyeZ7jkkzXu9",
  "key47": "2DwKnuWYmzVqE37XHemaqixZDxHGNk9WqZr5dp8YftLnUQXEHMcam5nS61UFWx8hXedLtg8vCaZnMc4qwURaWJXB",
  "key48": "jy8HMfdvyU2DssC9zXN9JkaZRE5UDqjQ8SBx71xmdVyJL8mta6Gkpwbj78jPUZRHJrSEsn6YpfkjgT3qn3SUaLL",
  "key49": "3UEPbFjMtW4L7CGJeLUZPvqy8XKYQTrLivMLXx752ekXcsVYppKcdgc2N7agiwPtLG72DMujXzhAX6Pb8GsRQWXV"
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
