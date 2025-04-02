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
    "5odygr7vtjW4JDPgart585WNsYQEnQrNc9HphJhVhc1R3zAYtX7xyEvy6pUow9DAsZpf8siY9eyRd4w7rVDwS5So"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qYNMRRtKAHU4xZ9uypfrQ7K6QUbS6Tun9NWoJ2UBh9DwyGiqFTsd6EUxoQMkoQ5hE9uBLNJ1KT9TPVsVYKitpDk",
  "key1": "3gNCY83qvjvkBDALsL1moma8AN3F2QVL7t8mFoybn7KgbLF5wQkV2uSQcCW4q9PNEfUy81GUQdSBBYEZsyVJiWLR",
  "key2": "5jonexzCgJKvbTch6BQrxixee77rn1XA5aN4dEfnKqwvrL8q3X5GdwwAsarNeXJWXMGTrZRUyikgeURVbTWjVxQJ",
  "key3": "4uwpQGfvaZdzQQHRfACjDLZa3st8iX1MoMkqWsBJR6K981MFNN66JvmKZ7nYgeV86DtW6sxywAeDrTpGANUxAFij",
  "key4": "4WQ6vQtSjKjLDg7t24ciAjJ2rY9FNUczBh2UDqGymcNosKxhMgEt9b2qReUjBd4LiVjZ7s8o33oWgsNS1jU9w1H6",
  "key5": "4baGd43U6EeWvFpMStQNCYnYMHyR55Soo8SJux7AWEF3xYhpfpFMVApMm79ZZcsDohcHyDuNNPewoiZ7Tum1Vmja",
  "key6": "5R5Z7rWTtUfit3JVS5xnwXMgzhCUjZKVjLcR8cXvDohkKwLpfwopze2ug89L7GgGBoJ6u88GbRCaZ998WT4gNtgf",
  "key7": "63ib7Kh7twz5qJKJkB6fkJoCNEjmRfXsH86qRp46S8L2z3t5CLf3bZi7Zek393GCLbChhQ62Sv98e8WNqHjUQeWZ",
  "key8": "3ZCyXAWjZSPMeeg8JmwCk8Kv7fjbhW54oDaFFoNXezDHyvVo5LejE9PmUMNpWcT1znDGEGYTvrY6RFgVrFxCvVwG",
  "key9": "52ZRrabS97GDSy4dHwQ39qxqfj1BZdVnRyQvb8b8vvNFK2gsD53ujhw8pTYnmB2UXPMMC5VQsTKQ6qzzJxU3BNKh",
  "key10": "341bLkS4hPt2ry1D1UGGdtA8z6VFbELy5Hsppd42rjBdBCtZpvAh5jZxfKWPsxQ31HV9G2FA7T9e3aa7a9AqUj3M",
  "key11": "54FDVq9AAsisDFxvU1jhUpkWaNhb8Q6bEFiiULLXzMr8MXmW1o4Fxmt1D6LQTKEJv7eX5eanZ6t5quF9mczegYjj",
  "key12": "339CZyfQjwkXts3NGti1Fe78fx7Ts3Bup3hhGsF3DzNUrUVQ4KsSC1HhsSgEt8exyH1cNdygrhciptJS8RWqGj4s",
  "key13": "2jtWMixh7gKTieDC2qEeUER6LXrJVSWvaPY2SvVfTWwC5Hyx3tyL81JGoBwsJ9yDkc9WzTwGR5yX5dAyGbn7WDCG",
  "key14": "3aqhwS7H1jJ3p6AJafNoemuEMVPiT9MhkD2vF5EBtY1PQ3ModKi2ygwKkTA2aFijZDLmycWyfULbaNBL1Y8CVWYf",
  "key15": "3T956cNQQSeNBxFP1FoGwG1RZE7F2jH7qQhFiaoC93XygU8SqRdkxcgeEZAt8tR3Py1tmy6ibY6aDUzUxUF5H8dm",
  "key16": "2zExYwRBA77UQwcR9maf3KUKU8PPwbx99qwHwZip2syK9rW87FR6ZeNEjq8uYL6w2FVYPjB2Ue2dAF1mVnHAGdVV",
  "key17": "sNURRKkGjiBUDrAX117Y634PLYUfTU5TXtz4rL7STjEzvxaWrAVf2exQpG1bS7kk3P3Juycv45kEWaqmrhnkpfX",
  "key18": "5zPyvojiyHV2B8HcckbVGcrGDuZ61ucvfzQnxCVXTHeyPVNqtTzTKT4pTFFanNZfLkTEUAHouHLwvEZZseU6tXAz",
  "key19": "3huU9aVrrqf9GaRLXpCrNao1TnhSoNyWUMCnpGFNSktQYE5T5PmHZYXriv46M1mdpgqubL1xAVVqirQu3syrJB94",
  "key20": "4393oSX1EpTKXyYyqDye3p3WWfrZWLyiCHrKPuJkQwLUtgeBg4GBNLjgVvgBWntBwAWGgyxPy6gGrmvyXE7ruT2A",
  "key21": "34QqqxPwBmvgnyTfSdDWGRJssbjp8YK4vj9EPoD19TQSvSb1EJvcKiNyWJfH8nMECJ2a7zbGt9qVhFGsVPpsR5TJ",
  "key22": "23SM45ffYx8n79Htu1rRzwShecsovv7yT7yyYfwKQM9UJJXZSXxxGWtJkPPFnKDEwmx6WkAxVxBuAjP81EJvjPt2",
  "key23": "KoNZRAApNpKREuqAJEvstSweu44PL8A8myue3UmQzVWeUHZeUAw2HgZfJBSm7vHvBBNRmS8bmLf7ncUJw3tKtzc",
  "key24": "623pHmr4SNVggw6jkggNGhdfU8tZMkYxULBTqAoMYRFYyjsNJpQb4AJEEtEGg38PGrZ9XbKRgyemKaDDZSarkN6y",
  "key25": "2EqAiKUZ7Wdu9bx9unZqQYQvfGvHYcWu4HJVmFriaBLJzkyAy5X6F6isk7C8coAsfEdSvTV9LVZDS1SBMx3o5NEp",
  "key26": "4rgaRKrBADTEnjCgEMNumZekrFGzUoBSksupJe9MD5VMRqHDnnFHtnHUGh2LcBTLoduULdyLYz9bBJPx8VrZu8uX",
  "key27": "2K82dGmzXtEjzFGEuPrW6Arv4JmrX7ogw5SK9p1946BDHo7TQotAMzUzS2Hv7byZzCGHEkEAVWk7rBGxcVN5cFX2",
  "key28": "2ZEdtCyyrRKomExpyToDqyRHquf35Edx88mTibhF4jkWh3JuJFhBuqau9WhaWcNzhKZD8sYDkzEJaCWVdpFnqqHY",
  "key29": "3XwJX3LAA3VvMQMr2dX1jUBX4gaTE12AZP4XL2xzcxeBWd2kyTiAJYwSudEDkfZsCfn2HWPaZQ2HNr6kLBcXf1y6",
  "key30": "2YPGWmXfJKVaa9sx1fUS6MbE3E7wTQHmN3y8oGKba91piq7ByoxudGvRWirC4fTt1xRz3GQHYhNFpAJYkmENRDny",
  "key31": "2ZTJGiZ8qEkxbZPokKiFmgsPZiinDuoaiDNG1tpMnDhht9XyySHyZT1VkAguLKavtfuSw1hpBJ7hhSKqCgJHBX4U",
  "key32": "56cqLBGNa1VZfkM55KMzwpz51KMeFqGKgiLN24BwQH7tKvoCjqGvwkgfvi1fs59ZJB8GMQUmpXXS3XFSfxTEwWoo",
  "key33": "3BhGZ2zwibTV4cuXVsJmFp2mLpy661VzxsEiWyqQ2Y5YJRPFKJhuhuTFwk97Mt6DqGiAkNribjhbjhy2yV3xkSFW",
  "key34": "5oZhdn9s4Mck7usE4h9dDJizQaWTbBXUfDjEVRLBDfJFnAQEmdgfE5DHkyHvP7VzhqxShecpk2fv1gGn4CmXQTtK",
  "key35": "eue4ngpnLaS5ckRszd41ZneULzHX4wtqezrWCuq8Kobopr8WPjgjetBHWrTvkaaBDdvB4LBKK3UvcGJJLk7rC8k",
  "key36": "4tJTQvPWKZj9ufUFXepssGEq4VABWumaKFLAe3zVgF8bTJTjBxXjLnUdjFtEEtL4gQAWPRb4YYJPN916yz8Z6UAJ",
  "key37": "2MDyip7fJKFzDFDw5d2gjj1xV2hdqvFYJrVKdphGzL8C4T99GEpZcFcsz7FnkgNnZa45jn6mihcYAFJdv5nWVzEC",
  "key38": "3N6KsCzA3JY9GNmG7tDQJU1A239ganng1r6Wc7KSEHbk3KXu1BL5cJhhQsEJCTx6vBAWKmVqHvnTP36z1WcYLJw3",
  "key39": "qVk3Z1NbfNi43kwrmmw23dBG8Udh4GmV3MeLb3FKgBgCDHYhPF4Xi8vkewZ5R16y8ckmXzTzqa9APMqytw6gYNW",
  "key40": "2f7ee4CPYU7pzdio72dfLZvfsw3xy9A9A5ZuLfZJdkpvEkzJmKka8twzcHUMoMXfDFZ2TVPUgWfVvp3inqe17RUP",
  "key41": "4qHhn89n7beZH2DfF65T4coULcMbJ3Qm36RiwPRwtKgiRyZws1w5RZzrFBz8FXRdjXjFZayKC8GbXfv6xgSw71ac",
  "key42": "eHn5z7Bu1LRfMoqTgLyDsNn8geDES6WAaukTyeuJkgxUoca7TLYosHnV5hXY6HQcJZcsz87YkBSULhxXsrZDnvk",
  "key43": "KX3kdCK83aZA9rgxPUoutGfAfv4d9nujz7ibEJaEibeJ9A4g8awipbkxVd85gRBLrX52jgKHwtWWHw8PN8Ttj9x",
  "key44": "3wHYDWXkC1vSZbEJ9rX9P4avvSAsTSfKc139NEv3zqsuMME2orB5sEZMM74RoMP2iCpYd5L272rNJrmdXEukZovv",
  "key45": "m8GvVpGwnzTJ2hCNhbtg1in8dmZY5J8H2BwS6CYKvyRkjpq8pnJUnXh9E4wARtZ5gD1EzV5izYam7Z6KVQcACVw"
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
