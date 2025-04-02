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
    "5E1cqUF8qdmP9kCY1b77mdGZ3dVA89knNhgeqH7EptxQ9aUcerT1DPHfbiequqToKRRzLjw4KB65RytsJ2SMqbNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "auvWERc1k4F5K9quoafcc3hfYheFCg6fiP9f3JW63oycqFh2Vciu8i2URYmN7YdpSqEdJn7v1FMHiDKH4BTq87v",
  "key1": "5R33wWLtZwFdzbyZMbonQNCtx27gRzq7bnjVwfRnXUujcrWj8EeTLX8KktYANxjUjQhjfaGU93eKv25hUBoa8eDv",
  "key2": "3VJ98KcsAUGMuRgYBLhJo4KXrQ7x1KQx69ZUGytnziazFfYgezs9h8iHr2p9vTmdrSCSWFdDZnPaY5iUQk9CMLSE",
  "key3": "3JfUvd8FSUZoCZpzLdnVDdCLBDrhvjgh2QEY9ThRh84pSMRzNtYbbAJ9KTNfsLZ65e8uPd7iPaTWc86wPLyR7558",
  "key4": "4AYWgdjU9GUUH8Eusu8s4VHE4rcgCPTrREygL8xzduucyoZmQNCYdHwxCkDnpi1JsFBfzEAm4YF1b8tmkVWZptuv",
  "key5": "Ahb8MBR2Fa2N52oPkA5noiBABqcmnTTFJJTC7Eg89SEgzdt4U5p6mMFNXZmwHWrZDCLpP1crrdhuwMDPjS1Nce4",
  "key6": "424ZwXAWPaEPbi55y6cWghBkqx4PWkgk198wwz1FsEwJL27PpoGmapSdLSaBhndPLvkbt6kpjPqmrcCLXAcJYhH3",
  "key7": "2VAzyVvFvEUAyBqdqZMmKC4dnaVSWaopTHGoxr6HWc35f8QcRidgNvvHgzBP1yuVsCuKPdWrUqepFuDTiZvMDTvw",
  "key8": "5ExkFQERnYhNhKF9WNSs8Yu36f4nGMPmf7p79gqrvT9jwsUbEV3mkHCkhKSBZ8ndCJfkxg2nWmSdQWRBYpspSRjT",
  "key9": "48RbUC2TaHJZnvNW9b9y1KJyjaarGLSQcHSrng3wTk71sESCG1z9UK17bXBYvuXnaaQXtVJfVXoQquUWTWVesTQ2",
  "key10": "3G4RHGS3Sj93woLsozigRt9yYvHKFokExrmyCWoELPfVoSYiC6KWLcCxBLZgtYoHFXdKXD3UciQivgu7C78ZqQuA",
  "key11": "5RSSYgcspAqeZmqHMt6qF66vGXeY21byNAQVdcDrm3ZEE9E8oFNvEWr2qGg5Prpz9vuAK4okbVsyrzvWQzP5VN2c",
  "key12": "AGFYBRtcpzVzCngRfJpJE4Ze8v992PfgEix6vVULfx68GUAim1dzCMEY9ie1ZfQ4v5ESBZupWhaAGcnHtwbfNiW",
  "key13": "4wB5Y8KrE4NBmYLAaWab88rjw8bZLyCgkvYHTAPpsLwFjZumY8624tG5kknkDrcAD921C3256dRso3R2kqyetX3a",
  "key14": "3GSzP654hX49du8noupQvLT2rWKVf2i1K6GEAnwWR1zwTgRmEHQgdYbRkUzPX6ynnQjXMXh5NmBnYvt9M8FaoubB",
  "key15": "sCgqpG1DtuXsBUGTJ6cDLG6Ny2uqN2D41V8GsshaFyNHP8TdJioayBu7LE25cTsdSwpqKGzvkjRkN2tJ9DMFfTU",
  "key16": "wmKiae73JCxFF1EW5eHuga2bbdoNfRGxgQ9DNsL3ebxmJCpcu9inmHJyupKbsJBjCtERnc34vxVhqWEyvdtXLbH",
  "key17": "5Ufqc4Rh6VfTwSE3zryoJDMbsJj2BSbMgf8CLzCHTc9K2saMxDaRQaVKhhANxJkyaY4eu3vcXMaJkYDfNGBkDup6",
  "key18": "3MnebuK2xAHEmAPXKCru1m6crg62cZxTR6XENw9jUe2ZHZyAaicX82oZJMJQddoQgRvQhkNGxEp2woBJ47sNg8Ej",
  "key19": "4AjMLpxADGjsKBpujtYEWRsgNotDyoWGQKUxBaYuyFbTSbaeo9dmjHQMGk6oZ7MVgciCeov4rnt1UCGY8Y5zTcLL",
  "key20": "a57SpZKzxMiKLQU9uejyrJnRrKvLTQdKref3XaQjEwMn6KVvCF7A8G16r1dVC8LdEd8nfoS27Pa1kQxAyraw4g8",
  "key21": "53qYALC61Zi3Qt8SBzb39aViiZN9QVww7fAkTaCxTWWFrS3G6F4L6xrJrMU8eaSKna7XBznnWXE1LkdCqnmiyhuS",
  "key22": "5cmwDez3kNjZ2jyLURoNHYiLjhw92gdycWW3Akf9bLtDB2oBcoFAAtfhn5APLzwk2ivGC4171DRp5Lxm21iJdzXd",
  "key23": "4w6GqpgTSYEwZPtryG4S8wbq5kUYv3TwPvw2rsdrb4HrkacsHoqCE7CTrhqcZ8vCny4i4apkoU4rShUFFAANxosR",
  "key24": "52PwJk27kACwQHmtUZ9ankpeUFZhUYYfDr5WQowXBL8mzgWzHzAm4dsZtRrewvQJiyweVyrf4Cd6vFj7MUaaHD34",
  "key25": "3krB2MtDZLfxMh2Hfu91j7aRdB3aNTe5bJpdUGg3zfLqLbSP9Tek2mWLvu8FyEgnHnzA1qj7vWze9iuDYcKKbRyq",
  "key26": "4oJQSY4HeG27ySHWMsYretQLRJQTQkuRUJHpyirLFaSm7CT4uKFcwASg6AyzrBKemYsCavqjV9S8cbvARo3Qg3s7",
  "key27": "2FNjwLxEmKhmtjVUaFMGLDM4MFdgQfMQywa5xqeyJ893C6zVhmau8LUYNcC1wjLvtHbxxjV62jf5T5aw11gajRTi",
  "key28": "2nstwQk3vZfZXnrYCtjNSE4jHUhi2nEpx8YyBCU1CPmf2mY6qRD1VHosB6btksBRzWPef6pMfbqMbH9aMEYWSCvf",
  "key29": "4EAat69wfpo7egFEPj9Z3XwUZVqBoJ9AEYPRaXw4EjBNF3i828ZBvuaaiYR3WBvvxGwUnU7bRGmbYbFXzfSpx2is",
  "key30": "64tr7DoX76mJXs8vfDuApJtY2n5ykacfH5Zyiju5ZdXbv4t5xkxk6hNcUZZWB3f1xjHgJ5ufdm2H9zKCchmFsue9",
  "key31": "3WszJk9Pi2nv97kVqSciL8G5B1pAdegbTZ74yCut13R9xcivMzL7FE3rgmvBSxCrWgWThfXcSJWQSDENsgzmSU23",
  "key32": "612pM1R9ghwZKAZQvQEAMADGMmuzsMaSLbYBZSMMrbHUSuua5zeryTBaXHCDF5A5C5Dhwi7QQ6FbH3quo3CnQPuC",
  "key33": "4BrHAPhJ7Nn3Rz3Vykt4jij2FvBJKaTu6uah7sSWcthYHfowwNrwBHFRgt3zhAsy3VvvctRXF4r7o1zMAMzUJUY1",
  "key34": "2vDb9jmWcuT7bfQ6bGtnVUShvc9WiLp5J64GaxApFE6cKT5DexbAocbFJXZg4SnDSWyMzWtgmzdqDRcTswvwv3oe",
  "key35": "5kYyF6V6cB9b8BddxDt65eiTK1oXV3HzPSSxn3yY5SviNJuwwKUsW5bFAZ5WQNZXHj3pjfup7FBKdciSPfuWJGfk",
  "key36": "5VASYunbUnG3Gb5RGSEdf88zwWmHS8FhxVaQitnu1uRT8yYbPfqersoscC9tPhqj8xMKdD5U2h5BhZiVzKxvMb7V",
  "key37": "5XZmkEmJ3hctK539cZ7XnhPfnRAsLLa76DbG1o3Wi8A67WT4P6F5yuHhLSLYJt8KGxn5KLMHm9TbiMCNcn8ABtEu",
  "key38": "2AvxDAyesqB5PtCgyFBBu9fhqLkoxPHN6dmjSYvoUzDPUVWozi1XZfqPdtgEU3DpN6cVH6nAjxUe3h5a6He2taaJ",
  "key39": "5pwMxwcCmNGRUXCi1UD4Nf6QFj28BuQ5ojA26q8ekorTudtF9rA4C7K9p6qG9qNSdiGgPzoyMNhNBh3rcA1jwHr1",
  "key40": "2waUrUHdBZzNFq8Lcevab5b6heDRr2QDLkiLUPiGe6dTiwn36fJGdYsVL6hoRpknGV8tWcZ8jJxdgZ2xWR5iZXGj",
  "key41": "41XuiMEGZxRqYQ6JA4kz1RMF1XP62Un9rdac42onVcCdqeiCYZoV2XVV6nZkReuryQzMVGEgHubaWwEw2a8QNPEQ",
  "key42": "3FBeJEzfL7fARSnU8mzJ3SjSsRXcaLjN3Ebi7tAQkMbVBfbEVDMzoqoaSez6vwG6QKBApC2LjNUdajPrwqK1gpLP",
  "key43": "43f6Be473Tsx3khM4LpChzJhtM2KnUNJGAuhjdYMzEmajx86jXW9ia7gmwoMUSUkgo2WgMa1R8TnX7ySQvsVtHaa"
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
