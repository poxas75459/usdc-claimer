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
    "5aV22F6hMwQpfLCjHPzKu7687a79LKtrdRFgqbUzBUgYmEoqfpk9sJM8bRJLipqwJL1xbKeybfi731UfjmJdpKEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fAh1LLNwoZAkwA2Qt3utyiZzj4aDbxW7SkBmhvMUb2qjPi6cfUkhBAxvCC8Y8f4KmQVSpJUHyhphwg57YWjqLzz",
  "key1": "3fd3pN3eCc9znzY7GvwVnfNeRrXVmyxca9rJ948QyTomAsWv7je43gdVgQn9gqKJoTM1pUVCiScYZ162N7ZoimLZ",
  "key2": "2wkVe3593Wh7TKbRkh1oprzu8SMJQFzt34PsodmoGAyRs4QYTeDN6MjuY2onedgBCnttsNDjixvkRi7f9tPBmmHG",
  "key3": "4gGTqHyT6VTukXUHxsFy9usJpXri9a2vS7p9xyP18GLvbG5jhc9Zcz9mP2GjFwu6mdKbiP9mLHipTPpYt2Qr3mjR",
  "key4": "5xmGWTcVjoPHAb4hvYnwvnDx7dL43ZYX9Nq5e97gLFRjarnQpMCh6oimrpW3MwcSjtckbNzLj9jEr7FmeCoASo53",
  "key5": "3r9rmuDLBTEWNXxBtpLax4SaNpW8WjoQCJ99BMZHK2hQnFxbM7Q4XQN3B2DgjYSiUX2RLFdn86F5UnFAqhD1or9J",
  "key6": "35jFbLAn2dzaTaqYLuiEHxdNDVvo8ASf4WqGFrB1DkStg9BkSQUFN9ahyamUui1T5JRoFVzj3nMwRZET9pKVdcBi",
  "key7": "4u6DwccmNrpnm515yUFRuzzq9UjHPN2RwpTi7HhPQEYgii4zeiVWYniwkamYohXiRgeEhiK1wnUQrzo4cnKjq6TW",
  "key8": "4s4Pk2SuTnPCqeCd4bH73jp5A61f76z9txQZGfUDow5v4DkCzNtKd8XG3ShwpbDfFDUQRUaWJayoEfSSCbdKF9zG",
  "key9": "54GC6qYb2Qf2c3n4ib7AhARAeG9Pv8SEHTkbS5MHntWepVVzGxErTubyCy3MQyyRhJ3xac2B3mGuk3S4ttoaztGH",
  "key10": "5kLo3ePNHtx31DH8ykwDTk1r9G9soEtoqRvaUwzSMU2MdV69J6XTGoQnyXzEtppyuPbzxnEWiQrBd24daFMAA8hr",
  "key11": "559J7p8CV5D2yqN5FUjna3hkSqdfZrLCXavMLRNB6nzcNon9xXL8XCHVn7rN7kzn11JQSL2fFgGQvEbgD4eekPQf",
  "key12": "vsNsmxdgDMjz3stE6Y1A2QqQcFaA9Vjcn2M2f6iHUG2XAURRKLX1KHqQjvapMjkoQx4Z6UAto6DypXh2NzcsHq7",
  "key13": "3Yhugt3LnbegzUaBBknYxFC4ZFroi1mHGLiMUYnwB4XkJbyNfmsY2aeEKkBmxeJsENy8rqHEVhLu6J2dQVQYC6vp",
  "key14": "5o4syysrRdCsVjUcg2SjPiSfkEA8zjHYJyXC4T7eFDAwZNBz2b7V7TDMKu4F3VrvMzdhauWXtwvHSFQPLGnyaz5p",
  "key15": "Ukth3ZuG2W4HNXtUtLnYt3kHraAhZAeUSTBJsL4rfGXq2RbdgSWjghXr69Cb3vH9HkJADiFCakEm5fLSzuhcSNg",
  "key16": "2W4naWkZ969YsBYGJEbui2nBhNi1RkyK4mzPa18yamr8LxmkzqHeFyMWw6AKZX5vpWRnyBkeJqMStSL2CwUtrwvk",
  "key17": "4DNW76tRcmfnjjKSxA7TUpuKGBCdNPoMGAfVwWPg1si9fkffPG9JT9NBoqRRJcCVCYKGUHu5DrpugrJEdpnL8cME",
  "key18": "4zbZDvx7nYeCAtJb8ECHQLyfYCCp3TnQNRi6sTUXLTZjK4WWtMimcc227pxcDBs6Abepnmx1ooZDxKJ5Eq3Gcan8",
  "key19": "5FuYwYPUHBiRUQVvvUi2VDDEH4kcaMyCucC9NiFdeZtuDjVoGZkgy3tLCQSGU6rfFecenRpQnoYcR4sCKzx7AL5P",
  "key20": "5Q1ybNoUWUD9DtyiAgYs11EZvVm1ACasdFH9qb8u3r59rvLAhkfopsGk5nqW5JR2KfUzhcJpYtLZzXLuS1YCXv79",
  "key21": "3dzhUizFbNqzRhWpLZtZfBiC1Nm4CwgPVvwjgpaJsYcMWHNwZ4ya1E8FaLZP3hyQmor133pwjNapQPrBHQQQSeb3",
  "key22": "2K94ECe19nN768ZKpFhKsP6AcRb6E8r3fkGAmWaw9Ca24ntvNhGvFxjKqTQoNeddmojs4QRtcwGveUS33HULndvj",
  "key23": "58W23N6Jh3f3gTDv7nUrRYhWdQCU2osAWX25BZFrgwFoCH7Xza1B6uE6KvD2pna2pri1CkaKwJ7gbgZfqjqLKF8d",
  "key24": "2KadR8sR4souAQho8C7xNcDLSZ9TNP7NmuVgfyJzS9rch7xRKATxehsrgnqK92e7wBDrpws7VkWT9ea5WeaWVX3u",
  "key25": "46YQVVeXfnTcvCQaUhuXKJm6Jwcn7btPQZMpV1wQfQrfMi5qmNHApYrdtZavkVM2YztYv3tsts5Lu1EhfzC91nCK",
  "key26": "4ZfZxnPNffaxx7LnEAefoFyGi5V5NKHpM689potrGaZnavutEfPxyUY4qnLqTqAebAm3B69zK6nvkdHBRJgLZ9L9",
  "key27": "2Wh6GEcUWcLa938b4nEtHLHjxEBuSTY1awthXBGE6fAf5fiJjM7oJCfR1hBKEwSo7SWriijgGafXk1sqagPb9kyV",
  "key28": "4wxRtg5CjwKpyidREgqBVoyX9iP47EK3h6aQ38emo7ysvMWn6UVVAwP2HKFMXRzWUTNPJAAguiKwJTNAWkCbtGRg",
  "key29": "4MSzkV3GumdpJDJ7UrUaztwjCJv5VSbxBUsorKYHNZ93afRsUeSuoaGgq2qeoJBBuJUuJjjwkhVEcD9edezxwjqe",
  "key30": "2UFA5NpxhJgr4VLw8ju5Zec4vSEVrAoLfoiUCSK5P7nzGAwrhc88obbwQwW42QhuSwChEdzc3Ux1LM9vwrKBwK8W",
  "key31": "vDQn6mzeULa6Z9DgcGuBULj63CwPaa8JQXmg8DSivmPaVNsrRFywrukopvz141Krjrb9JK1zsg7KVnCfNWesNx9",
  "key32": "3oZCvEdBNZBCY9R4yiqxsrXBoYGVYEQx4oCJgFELZ8ZabesrZwUZEk3PRowzwS2ZeAyQiBefD5a8rBfvyAbLdBcR",
  "key33": "5dRchrb3FHWYCtpvyDLKrvmDZZZoXYuSrdxQfdC1oM9bkm3cBxoLLb2GXeQSZdutDfvFzEUTAQmDtWDKc3VtRufT",
  "key34": "4rC9LCSY7SngUuwYHQttwpt3tJViJzQyJYPiaU9uJZszjAy7MJAgYCSXuA4UkEtcNrVNUm42EgG4ihgNCkJrCDk8",
  "key35": "TCCs9kSsMGEoJ21kU2bTKax3PA6JBV3Bsdsq1hg1k8wzAXxQ1WWmrWqEe275R8ZxyAPy4BK1H3Q1KejNtPqwBHw",
  "key36": "b2kZeeKi6x6Gz5nkqvhxzLPeb8EjgFaBR6wpVWyfkQuPT7VixA7Y2iWZgDRJJY1tmgsiEE9W33tCz2o5qV3kwWr",
  "key37": "vJRXrdoVYajEzMWVMb7w49cZ7fnV71fVfM3mB9toT3fQn6D32HT7d3DeveWE8VP57Pgjh9N9RkAkEo1gw9tmR9J",
  "key38": "2xBMxfFBhb9WdnYXnRhudF7wGr9s7pZMVhEUXUo2NemBaVokG7ijWuJFaEGi9S3jVwGAySGcyBSSQUDCaM5M9TzY",
  "key39": "4NxcoZbYXwxyG2fASnsHwcoUovk73ny53oCrzQ5ZLMLBop3HPBHULZ3ZxSWQ4xeqZSmmHXusDAcn5z6JgN8wM8xc",
  "key40": "3ohTSaoGRNBxM6jrtnizxtqJpEG7aW3oAopRYP8KPR3UoRivsFi9hsir6cfTivC5kyA72RSmaGktj22sNzk8qJgS",
  "key41": "4L9r7BA8eA15Smqe3L7DSMkvmui14EnPe6MhTdd3JxYEiAE9iwXpM1Stcq3LqKP62TXsSSSK5Q6Wv7Y1He6t384s",
  "key42": "4hYercs3F5cSizg8e2SSQYxHg5qG2LV3JxJpEcQiuWJAczN5dHa1yTdb5Den3XzGZcvNykgss4qN4JrYs2rE4JYu",
  "key43": "ahJRfqRJbTAof79W1WvDngYBEDsgY9whNngFT3dUB2iHfPFHtW2Lfbvj793TYZ8SYvWh6PtjD7JZrircwCxPfvL",
  "key44": "2KxSKbbLVQS4dR9ks94u7ggWXVKD6ZXMzsnVE7uuai7ym67ZM7uGLBw75g93YwGDCpr2XpJAHYH2AmHNXdvKQSUk",
  "key45": "4dogM6QNUPSwwufsx5Y6SWAXaqCdUpdAEpHNs5pDxXPTfAfdHrZrkHrj4UotkLxoVWofB71dcR5rXAAFMn4cro6X",
  "key46": "4bSJvzB5URwEjy97djrtPXcgfcjFRYGePaX1DLzcgfdLprhvRg5QLmr1257W2xhxy3146yu4XE3D8193CCHUTVVt",
  "key47": "3eRkPD6ejxoTWjYAVebDvzdhRkLP7FgcP8aQGVyYX9cbZ514TjuLniJFvuekGLwhyN4Ra5eeYvdsJKhkBArPtLSW"
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
