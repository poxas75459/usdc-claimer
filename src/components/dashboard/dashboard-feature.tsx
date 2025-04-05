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
    "gQ3ct7GrearCdas8bGrXbuTaxXboJ8rsK974qancQHAwGEDh8nuN3JDoaSVTM2JUJn5NeFYQfkTUTf3fd2R4azk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238V2jbhdT9ZMgsPpybGWpHaRRyLihTBvi1EowrtbVMiucooB252QxPV5zkzxCcbqp8Nina23XWuzCnev2MmihBv",
  "key1": "5XRNQNo8F9h5aQxGCK1TWtguhTeaEArfE328Xwg2SrK8BhXqRsUMuj54n9681uc6PkPLVXbnUij7Gtxx6JDjBujw",
  "key2": "5F6VQZrC4y4QrDq7rHjnWqVhKeqESkoWoecgWbJwTqC74UBtxbf59WvkTU8j9Q2EVi2PG7CSfyRecHRWNicJFJ3q",
  "key3": "3kPxvyDyn7WSL9B2sk6MdVWeYvMDiZiqwMSeJDRTFkAh8jKxw453yyexSzEd4uP1jPtcRwff69knnqCFiE7s7nGQ",
  "key4": "2TTCgZPMZNgnNd7H3KtYCeDhkXWZtf9Yd1rtWvH2YH6F7t1XRE1vdHN7qE11RjY3Wq2YruTeaXsz3etq51XxYcrp",
  "key5": "3g4ZjRunzBUEjF7nokPRTMAnWs2F4s5LLUCiLHif5pZCFrHqGWr7yiHDDUUhbGaA7SPUonLw4qb2hksnx9FCMLMx",
  "key6": "3finF2kRLXzdW2bz4i3W6cK66sLsdwujhoNmTk9VF3E58NmDmCDdKPAEPTdogc3vfPZmQ2t4EnSra4ty6yn5wTMJ",
  "key7": "5iDm68HRAZBedV3oEAbHzksNCfTFQAqXEwXjfteLtx27LBNDhyKwTs4fTMpopQCnfjrRXTLHm6ZaWRvQekE6ekhb",
  "key8": "2jYmy3iGmPbX61uDc9nigSHjStb2k7vRN4zyLu41wQSCmNcCngwqkVwRD4EqJkfX6hCLnmfkGiP9anrLuqh1YHqC",
  "key9": "4PGVexktNsXFGHhYATSYdAV8A19wALgSfQTQu6vKKwwNr99jgJb2NFNAQ2cfte4KoJvw5eu45eTsQkUEYWe1VvTk",
  "key10": "5gr2TxAPusaCKq77rweCWkLQd8EEUGhWr5nzP9A6GyjZeSzfKhtkwgN2RiBAWGrx41bWEDNkQBPojYu7hZPo7WfG",
  "key11": "3p171uWdM94JWF9LdPpXvsM4phMqPLuirjAVoPtUJNmRe8hBPcTVhcBLHpBbfH9fNrJxW8PAd4GA5fRrzaXHMxzp",
  "key12": "47Y4ANdB4gcaLQQV9vkKn7iPMHwh8Cv6reVJo398oFkA1Ai9hez3JrLe9PnejztTNtibdbFjku2G43eQdDCmtnQn",
  "key13": "5Gq2Da7jFGha9gv6B5LohWKQkjiH95NRXx5SrznmjSD45xeRLg8yRCJ52ZFQS9xPZD3nNZ7KBMSqL86BmkTy9uQV",
  "key14": "BQpsTpgqnudhhTGyniJhP4hQ2DkjshE4RdoMnoUY5t5f5FApUjHydZ93esSu5mt4CpJ9qsB5oD1aTsYtDfNA37k",
  "key15": "3GciQtGC18Xh26CFWSxLMqBvhyRxH4R9XZAccaMLY35ihSLHoYAj3tRQiyQJPs1ChQ4gQLkwSWz3rEozmS2ULfUY",
  "key16": "4wWrGkH44EBxg524eNEof98qGKQAiZQZX7HDtgJMwEXPAVMFXCSq52VZZ93adq96EE8SmzV9MRYzAabzFKuRdxja",
  "key17": "4Agte1NVkP7FufJqci8XdPVceRJCzGqBFVVZEcDtaKzwHdn3oXYABEwDpJmHywNCQHfybFLtA3UHR3A5MwhTs8sL",
  "key18": "4LLoP9p8zwQ1zTCxfaUqMCNVRhBnoT5gsRPP2Qh1sYCmbGmnGLv84PW7NQ3yeEn7Dk6zwGTnpyggPEkHDz2Bn1M1",
  "key19": "2XHF47sCUx7QbCVJsPn5RN2fqUN6sJuKnCz2T9YDWvg8t1KnQyp6T24empR6N37UFoSs76Z9UU5vYmi4gCGjkq8f",
  "key20": "4naCQbRy96QMUt15SF49j94xpSraN5xNUJDaUBsuZRdQRj2qKp9o1DpXfDGEqUkJS6Ehrv6NwqNnH7nC3cFPy4EP",
  "key21": "5yFF6YaQUT9pvDix4fz6WCThea12v6Ls82LkYzQ7ArQsuSA344rqrwQDSuji2BZHZqGV52gisygTWJXwvMRmSi6G",
  "key22": "5S1KS1fTLo8YLm3NQ5N8RNsFGzpfTKCTYEv3S1zh2ndpdebSAU9RjbzHC4ptFptt4gJQty3q6JcBSovz44b1krW1",
  "key23": "5oq1atWUwsPezeGmkC7kcGH8NsNjv4kPWhk6FnRdrfC2JmKLUgs1wrRyMXtBFQtgmWsYsvpneFvZvV66B8UmdFYn",
  "key24": "pe9wB23CEzrbBcdPCpfiyPVBHQeb1pAGYRf1G2LpLe3787qqRrsGWhRp94iKUvC2zk5MbnqF7jpQf1kJ7ymU41q",
  "key25": "25rpARyoorUiw3yUaXtPwQS9nwrNGeiVXLu5izPq8mZA8q4e8cXmnjyB9g38USDt7wiZp3tAixyB4b92V2UxvHje",
  "key26": "4zgWSr1fiUafMKMAGuMUDVMk6P2VpAkBwutC7sLCWNnzCF91jNwghxHyc2Pp4oBBLvPu8tXvYjv8t3y6UMn8rtYD",
  "key27": "5oXZVwefD3W6vLdk7Ja37eMDUAjkQx4LdTkMJckaeDFYsCEezQbj8NbnvNBGcPEW64utskcivC93TpBFHuw5fKX5",
  "key28": "4h98RKjLmz7BPghnFg1mDXUpRo6TT5ivD2EU819FttCeEtWfVASqrRXZsgogjx8vWQ2QKHRru94Qvh8DwmXnRYaG",
  "key29": "4mkPUkZvk6cpUN8ZouVskrqxhqopSszDg43uoHSZw5kd4Zfaoxt4X72pB3X8zkafaiVEu45EAU96UPRBkM4qaBbp",
  "key30": "2ebnGUonA5v5Lrqp3RYKfWUhZz6Ljkq24Eq67u7euR9kugnWPj8hZTqYxfXWvzTqLJvkd42pnuvBZJAVA74NKrVC",
  "key31": "3Kkhbm7BozZcf5u8bV3vVZRQEMTT7xsy7zv5JjYcDGPKiBVVnLDUgoSnGA6Ds7ghdix5TQEXc8N93GetBsEAre26",
  "key32": "F5BywNY88fjV2Quk7hmXShwRMmKrRXkwJs8fWRcJYLEKFKnScjCb5NUsGX2nvJXtwfLXqvxp5E77yLzM3qCRtkZ",
  "key33": "4YM1BuZJcVRXL1ssB7Bgv2raVXRz7GkKxPk1jmiSXnRJkmSsQkaRoKwtJ8MnJSTM7Y7SoRhxneSPRZ8GcWskaDpm",
  "key34": "2qBnifpRuQWSbiTt2Xfp5cazkY4pbLWRYLEPycTZzEPY3467g5Dq7gEBJHWEyGXqhk5wFrriVnwAEGe2KjFKdDVb",
  "key35": "5Nwq7qXxoTVR23FFHyCgqyDSarQY6Tm3rm5f7wF6nCCebRU274gaFGQGTpmpVrBzSzMwq3WkfpNdKeo6meNLGu2D",
  "key36": "3fsYhDRCq586nrLrnfQ4CQeCbtVoSPwvQDg5Rywz3q9cawVXyLbPRE6G6Ldc6rjtv7xEYQPy9iseETwm27etq1y8",
  "key37": "3jGKicAH1UHNAq2Jmvtzqt9JnxijzQZQPnZKd36FvpAHNu9jTQgLxwdtuUTBwoD6LkRVmxG7oasVzErhsfYrFLHd",
  "key38": "24iRxFxHhkiAexix3Y5eyXP43jhenJduXMqFZUsp1bASkXybeYgMkojyJi2bsS62vUREaAwcbUsHyLz62rahPPcS",
  "key39": "4E5bCz5w2wA7HZw6L6EKGDGfE8RErdX2XHYeYfuQAdTP1CYPtLaYJWfoyk2uBB29XzFHpwiaT116Z9ukHPgkaxvJ",
  "key40": "4DbBshbD3oN5da7FHcj6Vwx3asPtZVc6Aurs6BqrZUfEBJt6Yjys3VVuLMeXts9HktQGG32LocqD8NToCK91UKXJ",
  "key41": "4spNJGGuCtcqGKWraH5fCDjtgXBkSkcLDFyXVw7zQLbudeEksgvR9AWSJWUCSQvMDvCmBZyTcKmgSYnUsVGTJwxF",
  "key42": "2AAk3me99JXR5x5ZA5BQfUhtuxbDQ8g4PsyHwsZeVEEEfGMzJohJgeKuKPU5cv9xuqhqY6nnVvV2AMginEU4yzey",
  "key43": "2Ne9PdsbPkQgGKvPQYT4kNWtkiaFs33hdUrLYzRcpdHSozqLKC86WuDBbjr4GQ8ZtNAXZJT3hh66HkfF9WRKzouc",
  "key44": "4AmrVMRNv1WjuSbVHmt8suvYcQe2dhfdxoXJGCobYnQqyP84xNnWq6VnFKY6HvJfpYPyzAiXQHoZfQwCmcJqWkRc",
  "key45": "5w9HpkMyg4bL9nzEk15hMirxYLGB5v6tvHFwqHP1H3T2xfEpocBwkRHmtqzxRRapFjCaxEnxyi8NoMMHLHk4rNNj",
  "key46": "4aYwvy4PpVf1NZRn1Dncw4ip4Zxkee4c2MjQ8k9gnE9UyNiZSrPayCa9deWMf6TdkaPY2sYC5QUhTTTTo7AA5wD7",
  "key47": "5657PTxduXd5VHXPte1CktTi4ggu1XKUagLZRPaTVMyhBNEbspEGyjMZxRDNf7JgQDCZ7rPxUBE7CPC4LDsihfsV"
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
