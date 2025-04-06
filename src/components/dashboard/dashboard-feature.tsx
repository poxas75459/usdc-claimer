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
    "5ctqc7uKtRT4FHWeBgFDMGcVNsvQj24CzJNGE7F5ckB3rrtuJB8P2MWmQyJMXcHMTpQVbDLyNJy25dCPDx9HihSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tegZRYkRhHLT7s1GdCBBU2FGPd4x9NRzBTv5kfA7WwsDLezMMBCodH3dLG9TePi3H4wwdwwhWaorXEU4xXhU27J",
  "key1": "qQsMbh8nzz5MRvGUbaCVKCmexFwy9AgqY7LdYGET5kdLq4wxfJopUTV6nGybE49MEJCegZmfmm7FrPgvTdHRhJp",
  "key2": "3sJPYfu5C5eoK6WxRjMpanqqnZKvuerVtBbDmB6p7oQGtkK448op2KKD2eV3WMii4WpQ5VT4aZjS4vRngYzV25kM",
  "key3": "5R1fMJkvFENFgcYTQguVdHLwC6iYBGUW6W4o3pQtMCL3r78ihw1PRHLhdApVF4igiBhgcj9B81LTMvDHPCpJTTK4",
  "key4": "2DPSRHsckLwpyAFvaZdyoBZ1hCHfmd4eAJ6EF6GpbwPGUvp7QMajv2ZEuBgENx6eqCBUiBTSfXnPw2KLZqokQbYJ",
  "key5": "3ny1A9EFCRypg5XqZzL9SSAWEVddZGtDDRiGee82vc5tq8Q8HLngXMisxVAX9HRPbDFU4hn63AdHTeRBeirWcjFU",
  "key6": "3yCZsLaqz6eS97E1ZUyCT3KTWyX8VtT1zA9yT8qJzk1ioWYWBWukTE1f6rFj68gaeYF9T9Tuit6h7Z1aFchcTked",
  "key7": "3QJNrQPVt2nPjaZLmjd4s6mDF6L6gxjSoCRQv9FdJjvG6pAePSBV9eQgNrE8MQxtKGw8hYMmLhKScLkdxrS2CJHU",
  "key8": "2zCK2231Q9tgyj7tzmz6SZiVJHEcwGYfYArAKkEsReW4TVMswqptBVhkYfVjw5NoXwmZuFoMwKoWpS4DuokALLWH",
  "key9": "524gzDhummR4qY7iQ3CisrnkBRtEjAy2jjVfAaZRYy5RWukcNZeJVADXWP3GwgyAD8mLJ6Hoqf8tPfaK6ex3UgeM",
  "key10": "1qLU4QZEhGnmRmhAC2winBMFmURz7xjRzTtpmVEYyHrp6YZUfxdkyDkmNTggbht8RocYxnLQoSQJV9HA74UajCP",
  "key11": "369pyFC5UdtvRtKVCbPyXKU7r65qEJV79w62NTuTry8BxLSRUkRZLrgaYXQRfQ88MNeMPtG4o6AvxXixfuuHHetA",
  "key12": "4Mtk72nfuwDu4Y4nbqXSCxnLxusMPhDUi1jF1dEtxLJTC8qbUYxBaEYPi4sfUwkxZMiyWnw1Bfxu8vx1WuxW9dT7",
  "key13": "4KvijrVmJ4J1U8yZzxbi8J4fQJ5uBHfkxCJPxsV6AoXtDgv4deSaer2ZgVziYwgyugMdvN2dZ7RdAYbQs28S2vRy",
  "key14": "3B5gcyjM9pGoq91Dx1R1oBHvVMJDCm3gKBSL5jDA4nS1h5tDAUSqkoqSnXMzqhfv5V17e7D1J2ukdtEPGDij69JK",
  "key15": "25QsY1BfCnDmqq4usRTJGHatiqH5pc3HR2ofiyFVWRZvt52VxnyZPET9eJ5MiKcekBmf5uNu42wefhxWUxtWnKTD",
  "key16": "3xLAaQxncFbWdRJvYZ2on4LCP9R6gJrLbfL7bwPH9C4Rk5cBpNMSSEkNRE6kxQ1nV9A7mG5DNyKMV4oNpC5gQDDt",
  "key17": "2W9bh2oQVvZJh5sJB1wXaYFQvop5Zz31o3xSKPxzofeU84rpftaJoD6oHgyk67g3jKNsQUeNETBpcmbDGsM9Htxo",
  "key18": "3sK3qGxrN45bGggCoX7fyL2jsL3njRe8u9cjuGSGaDwHkHfHPKa7Xz93KvJLF87YeR1mm6GbVmjarnJPBTBz9WfY",
  "key19": "3P6voWg5p1U1ooYgtRfvUncz3Pfzwo4UGpRgFZirgnK2F3bDRALxQpjFC4DGauYVDz8ArZiaAaCaUBRsqEXp5DU2",
  "key20": "3hNyitXwywWBJsv9SMXHhDzySBvH3rkRaG4JCVCMzccWB7vHLpAsY58hrgtFej9YN6jFpyQD8MX43hU2kx4UMxjw",
  "key21": "2koX1ayDGKFUHdhjWkb12uF81TZXryGr15w8N3pfq8TKnU8g9Mpsy1hpVtk7bWMeezggSxHxNyvckDb3xaQGMe7L",
  "key22": "2pM5vpUs53gSMrLwK6qonrHS3ZqJChiaC4BTF3GZ5bbwGfhgnbr5gpqCsddvpR8FA6zqQfzkKPt7ts3GMkrwVi6d",
  "key23": "MFKvc2h6PJCaVwrGKn91jN7bk9uTDkZUTriD53tKEDriuppzpTNv3LAbjJJ9Q113TGbtkaAm5LkBLq9NaR3ff8L",
  "key24": "NGpqP7A5hVFrUSBbPkt5FqR2z7eQRuQNbFDG1DkxxxLomnrzkutG2JTf7zy1BLVSczxH7b9VDiWorYw9VKp4JMW",
  "key25": "2KvoRMHBFQz6aL54Hrndp5T8XkfvDYePx91CSQPEfYxbUVpXxMsvw6xegAPEwtNFyBET9C6squSuGKLFF872yxpr",
  "key26": "3TvovLL7PtGgfMGKHWwVac6NcYmbM9axzjPu1SMkErYZDewsTngpA37FTxNeC2EEJ44EFFszDe9x8s47FLp2uyzE",
  "key27": "3PHt7y8cT2FGSoCu1bg8bqiSbkRvmBUqsYj2Ysmkhb5ar7c8NShKw2cmBDSpQtxzyttQcY4jnuPHuc4qRQZ8QtuS",
  "key28": "5pZQck5pUSUpgy6cBmcY8WDr6kwMwYh6ktz4rt3yV9FrAPaeT6mjg91pcPaXKeAs5UU7fbZnZTAEgDpPV4ewLMeD",
  "key29": "WTeujWiZc6o2rn3xb1i9pYeRK8n3RwpkyiCFRbpB2ir4kUw7sEVB5E3ePAhtQDMRf6gxuFNXdf5ogxnHRqQ6SuE",
  "key30": "5vchSUV3yhjT7KWBKGtzmaJqVY99jA3Xb6F8yQJ9Yk3RLiYGy4rk1aH7AjsqjTsRkjP7cuknKW8ma5kf4JmAaT7e",
  "key31": "2wRyuYvt1cf4NpmSBWrPjk4EcKMTk2N5KhyiRzrQpZR23wfkX7uEETWNzAAP3XsE8XoT6DdjUxPs7acyBKaacXyP",
  "key32": "3gnSk55LcFXjJmfW73uwJkTpXCwpFdSfz85jRhSDQZUXQmyVs1MaeRWFVJqTfDX6ecKcjtJ8yp7LGWttqCg7gJNF",
  "key33": "2oa2GKn5aeVJjrZMF2w8N3SDYpoMRuNuw5JhAa3nKfzUo9QHyjupW1KYpCvfvgL8nGc7GwuXyY4PfhmBmwTGPzbJ",
  "key34": "TeQVyGmPS4KPkiS2R6yAL6Phdjs69SfnqZewbFeexTnwGsc5WcCMVZa7rTmmS7BbyJA6fRqJhB2Y75ynMYiEkqj",
  "key35": "2LRwqKjb6wRVBZMdgjbPxpg17SJFBiFvD9JQj3H5GcdPmNmPxbJVptinEhVvjY6DyZK23qoygMKsKVpaMfQnX9VN",
  "key36": "2EWTY2HrBZtUt5af49r6EBxPjUnNtZazE93qR4iLWjkPVgGBQYuJeE2F5LsHxX34tHAVXR4u1WkpUdctsFY4iMg5",
  "key37": "3Y93ZH5rXtGk3jXPdEmNfHWWK4yPkejHAcwm5kKrDw2CViyxMj3yMQK3U13FAJkPAo8usti5ey9EnLDfsWwC32zA",
  "key38": "5JrhF38TMp3UwDQaCKGKQZtgs7jYUdFhP2noMMPLvrWh4MydTAPh5kZbaDuXuUZZn9JxKvG89fdCdqYQwXXJiC2G",
  "key39": "NWpwXxQocQX4K5wBnxMUywUWDpGVFqQjFiAdaMij1g1ik86xNgrNdtAK9ryELjnTWL9ALTRRCXNP3Yv5KhFCJ4D",
  "key40": "2eaMNYrpn7JRsyAUMDTLL74yQGoCSvgQzHvrT84YiPcfEo1eU3YcEbwXtnymxJMZHnpwhZUtf9cJ1pcYCWDDxnTT",
  "key41": "2aT6neckDDyGZpTfNQdfEQkczBX7dPsrvEwQiMhY1D1sGoC2xfFFvdRYVH2NxQD3CPZXK1GZtx1Y99VaPEJzY1mf",
  "key42": "3oZCRfiPd87YmKQXzBZQCUn6h5TMtiWC52XxjefJf3J7n18znHGLkyh5AaGB9hXtwEh3CnARLbTNRmtLnXMExEJM",
  "key43": "ff8NwRdDCZFubg6oioh7i2bkmY8BcPyRwp3XSSaojNfsKsJw4TgXNpNs7EqdCptNDbBVWnKdQvBV2HBJtXUjmBh",
  "key44": "5zb8m5WGjx2LKvFdrmEsPnhPGaTjBxvNV43Ysyf7QF4qBhdH1YZo8UTJCoySwZWxhLoBtGhwbCcN6S7Khacwn4mG",
  "key45": "4qd7Ybnc5nzRTh7SMJwykvSAZXkkLvtoa8pqhQ1SSbTUixfpgrLrHHyhYbt9XWLLYVnpDUxRM9MFYmKLJSWPDBdQ"
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
