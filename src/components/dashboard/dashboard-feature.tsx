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
    "4HZUtjsdgq8UhnjhsH6Z6a2ojRQyijVZyUoz63W3sv8d9tJ6pdMj1A4iXhiHM2nQSBBUeAe8nSDZX2pGhMUNDyqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5He8bSuia7CoJbeGoyqQZ9eVtDugp3nJ9ZfqJo5h2FawVgyNRHodSTJk7wi4hLxKY7hzxYBj8sUe7v87H18cX7y8",
  "key1": "kf7EXhqEuzgKdyNZs2RvCUfX8N96RXmundREXX21HerHNtQ1R2u3fgiDE8gUR3D5mXZcexLhRRnfL7KbG9rGbED",
  "key2": "5jt8ZDYSU7UFujFtir743V5DPaN1mDJSsM8TWSADzE3oBsWtPMtkjdDqeYg956813KCtjfdWUNMcyMNjYFyQEsUV",
  "key3": "2Y7Jh4hfp4XrVPwqLVCpB9LVKYe6yzHYb43nj2tsyRKXM73RcCbECQeJpMUxdPWSJGBBeVfZkmFASSaHZEgcVXyS",
  "key4": "mPaRVjV9g77VjjT2d8ixck1yCbx7mNtuarigWxGyK7ru2dxb8rtj21jAtwZcLtJtiA78VaS2CtG6jZPU5vGAsSP",
  "key5": "Anc7gDHxyXLJgtDndmQ3mwbF19s849zZdYGb69rwHEwiVpGAwEnYHFwV4c6qcBKUKyVGcrHtkqxiPiRawf6FkJC",
  "key6": "2SB4P3BUnkDCsDs4RXSAdrzd4KC4c5vC6Yku56gKdijXdXGXdRcasG4bqtqiqb1NFtnA5d7mF3iSscXXHcnmmRc1",
  "key7": "2wkWSTrQNByw8pmoTGeFqoTzALs2G9e2Q3TGTkCYqDenvHGH8yV2wc4H1LZ4fZZduXC463vdYBTfDQRU7egQR297",
  "key8": "yzxNd4FPjeVKUnJRvmBzJYnYKPRwGYVgrZfGnvj788L96cYfhUvKW31QrVsiczXfZqrcYoWdfe3coCBRjANSzCU",
  "key9": "L3W6wPUFWd9AetoRuSkpUH1VyWFfD4aygzzPXm4NQ9mph9cE5PVqdLgkLYBHcvVeJKJt9ngtw8goULzZzYDberk",
  "key10": "Gnx47y7zPKYuzLKtQioLgy9YkaMYGMXBTQrRnSefphxmMwgXz2N8LQBvbzi3juSrdob3a8RQVWdCL8zVEHuCBES",
  "key11": "5apKfzgY7JHFrqLvLMomJuTxp2Qc1DDaLzsD749qG7oLyEeeuQYg2rc5GJsyyuoKt6YgxCk9Bk4nwBFAZUPHygYp",
  "key12": "3zdpWH4gDnFpXLnF6LiCM32rJj57kir2sYY71ETyNRhmNfHpm96mzcPhPBVRaCTrzzBvLwHaXL6kRXciUdXLmQTZ",
  "key13": "4F14Xt33VNVHrfZhGMrjrMfLAbhoPU7qn8GiReUC6GNYtk14yXee6MrAZz8tppvmEpmVr26Qtc1aY1At8YWrQvP",
  "key14": "5HWV8U7N9dLZaG2F26G5HcoUViR3TGSGK5s9siNcY2eA5eeLtELXQmZjEhj971faRsypJNDB3r4GTgPmp73GVtYx",
  "key15": "2bR49uLgAWQpA9GxxxdMqQAnFrmGsE58E2ri4AQM1npSc4E7dxU7uqRgAGVC4WoU2zJ6B8MAcQnyESGra6erBSRs",
  "key16": "5YbsTVzQB2W4mF6f7cbJP89SSfCfYeKbT49nRizxrfaLjextCDJAEeTCwySGycVqRXqyhPSwAbnrcuC85NRZQWB8",
  "key17": "3KjujDLce2wJv1Zc5JKZt99DgLuR7DJpS6q3K7kKpy5trm4qiR4irngm3BwomTd4rorz5BC6J7yBj2yabEoXHRYT",
  "key18": "4J928L48EZhtQLLt4DF8M9qjARqeWmQWpQibauMDvLykUJfkG9tpxy18fFNbevtbov9zU97tjjSuDAE3LwmmkfkJ",
  "key19": "4ffZg79yRgHBA7thEKwhMe7XPJzvU541wK1uVUYsakg8M9boF1GfJHzmSM3fY2RMiBMRZPKYg1wk5GdufN1KaBXK",
  "key20": "5FC7aQVQ4oML5YY6ssD3kECeCRmC73UR2UxFngqzdJpmTLdJUPv8dVQjEuetUFN3c7wvsCcGYWktdixztDrYV4Az",
  "key21": "4pWEE2AwJpayrVsgt1Yi9PVaW1kFJG3vqJzCpWbShwG8mnRabLd5W75ZT3btgmvfWsMdjCQUi9r3ZsJrWRuCWSjq",
  "key22": "4PhBxDRD2AEPsjVDXxuNYVV1FyvxnP1j7f4enTWCSSUg2rCMZmJeDpM8FwBu63iXs53p1XznVVA5xXtHt45xM2c8",
  "key23": "2eTweBc5eKXxKUBMfsR2Uka9u15oEFEfSkQUdFGszkrZfimD2TDnP7UYycwyW7ohBdJux74E3nX6FDy6Tg5j9AAs",
  "key24": "gErEYeaFDNi6MDmtL6GZ1rNJTUETsb7rovzZTQhbJMtzUMesN3Zvp2Juh9GD9EpsCuiMTyUcgofhqLzboec8tF1",
  "key25": "2BrU9TfWEZ5LposdirtMPUSVqpzver9q1vaCQUTq3ar2B8fp231AhKmqaJKhfUaVVWNGiXL3hy6KFvUDAqTDQTUV",
  "key26": "45bs8tRRMBcbXKV6k4nDwB6R3hzBQAm8vMTuRQtKi3SJcRjsbBimDw173wUdSxxCLNA63EW3SGdFvkqbFADV7Ao",
  "key27": "3fUgoNrUB6YtGS5osgSkeSxgzaowwJ1kmbjAN3J2PdeQ84N7yV48jsoLawnWvrvLeX1o2QU9XsX7fC7TutHTzwWV",
  "key28": "39JEWk2ELoRxHABDqgChf7b4s3cohpNETGC9cCwD4JMGbiomba93UbKNYV6prU9iQ8qAPqLgM6RA8cqon5uRPAdT",
  "key29": "4mC5Lj8gHpK115g74ESvXVzLbiEQaYYiN4ejnw4Hs3khsFrSSWpss9jnxc8jkT2UKP1taGSJeBReR4cHpx5yXuuq",
  "key30": "4UdRtmYroFkUc8aRNhREUU5F8z8pZWRnLQ7P5YrkhecKJ22pFxFAwoNNfYNoDRxzYPxBF3wVDw9yWDpdLxCRC68G",
  "key31": "hZXkh9LtFW1T4624rV9P3R6nrqVdykGUmzKubYXZJAUyAHXPPx7JjhBpPG9dZTYQxooxSjtDRnKHreoYv1or56w",
  "key32": "tPg5dU9fMi1ySZjakTbMsLsDxCRVEfNTVxnm4PibMy9vB6vLZhRBm2EQLaFLi2Sh4of5S7Lc39217YuY44iAoJn",
  "key33": "5Mn3eUS3a8sQUTqM7KKXhBwH5otcTh5zz8hyBA4y8r6g5qtfcQqqpBDNjxcL9KaYF4Efbi3JxKLWwAvcinp9i3KN",
  "key34": "57h12qQZ2XiRpmzxzT6K3eUuLW39oig2yJT7DoDCwfciz9yb8TZfkWCdUTz4GYspJi7YWNby6wNE48n37QUyTyF3",
  "key35": "Zy3J7ZjHrJjiUmTfSFoCh9cAYE3rmSC8oxbCDdY9Sfr3RFVAFtaHtpWsNMkEJPgDHfFswLvGDoTYPKa5uSJxB7Z",
  "key36": "5en2thaPNJt7491kGyUCjCXe9fmBEju9oJ4oUJZH2UF9L1GLNPUc3xnsRBdBHRx354dSoFcUFTVEcJiSxd8SyZnJ",
  "key37": "2LhEsNUBBG5sN5oanYk8Yv3ESgn1fT2WNw5wHGsZLwQGhQQZr8QGgGDygA2vwitRE6cQZdKETntLS3jRume4q1Ta",
  "key38": "3zcgyZFZR1C6HW2gMzxt6xKNqzdTaGM4MxxyEmY7ibujTRx4otZPZhEFZXrjTTMkGUXankECNf1F2uefHfG598LU"
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
