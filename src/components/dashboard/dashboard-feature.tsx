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
    "563G6V2UG15qE8AvhW1RiffmXSVcceAQnm7tLcmY6WY5wJpG5QX1uAdAJpE8NkfZJ3Z2nqzzcAPq3HxU5TaxNUAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s1fRDgaUyC7K3yifhK19rQg2k4gTj4vVLLyDV1MoeMMHcPsv833g7jyiguyexY8kBNBU4Z8ywSB2Bw3rLK22QK8",
  "key1": "5rR5CPsDds1rSKJio9b2qpSTYRG3yG9g9oMq4rMFtaPLDxvqSNZ3b1DfPgz219xFnpsLBtt2Pvm72NykShNZQRv7",
  "key2": "3QjmLqTSQivy9bHkr5HPwQtTxdYZFovLBwTYg8mF4ji3rq2h6ZGHw7DgxsUtL6cU3LKLu3SoXqK3Soq9Xmtg1seW",
  "key3": "5mQoF3yZRCnXAmxQRYsNMH1qyfixJJs5mQqmtEg3eLohms2zsVakvvD8BNXqUebqSF8q63cy9GtsNCEm1WzbfDVt",
  "key4": "FE5ngy45inFLZXL5dmG41zFeFL3tbPhJ9L4zTTv8EQM8NaiJi7njpw1xrXAUgkcmjdW92GMqBtkqkUQmjJfVLus",
  "key5": "4TP7CxmQvQic9PPJbgcMqsvap6b1JvA6Z8FwAzsxm2wN8TT1AhzQE5ULawM1UPujCXLoW4VD1M8G91typDzEq7EV",
  "key6": "2a4zyyxxNZZCd3ap73TySFiVBT5o1MfMLy2kHWnW2GPdDuCUFgUw3eZ8McSiT3RVKFFKYbapNZtZyJz5F7JZrGkV",
  "key7": "2oD7b6SjmnTnQQWCvnYFqz7R4CJ9CHVsehZHxHZwPA94ufvsGcPHDzwuWdg8GfDMQfmYUWGf2bXeJj4BVM3ojPyZ",
  "key8": "3FeDKQ34FjvBYw2pEf2PzvTXrpa2gSpfNxhXb92eytpa9zvExorM2fVt1nU8893mBPRMALL6GLysW3KHquZ2B22w",
  "key9": "5GKwof4CNzdsZnGwvbecm2NKM8sWnzsskAggQz4QgF4RhVQV78vmKdFWt9rBvi8krshx8ZCRApfaiH59WMNwHPSv",
  "key10": "3RcmxC4rDD2gC3KuYgFj5gchzjUbvUSoSbhuf78wkpYbVvkQk4vgXzupNeYsMKzShPPr6najUnN2i4kDqSGsi7Dv",
  "key11": "3oQW6xeTxz8Pf9WNn6jCjFtDR3UxspVcgyUNdkwBpj9JWntuvbz5pWNH4dpmjLZqHtGEhZzTtWAonYceeFktLENU",
  "key12": "3fhi7uqtJomtopBEKx5bdCwq9HKEqbXCbuuWuGwtmaXEreRFjM5LyiNh2ie4oNuemywn4bqDFoYU2Ungu9SEjdTK",
  "key13": "2NpPbKfMasqi49pJW2dDYogxFYWRutczotbJqXGAc4EDyd57npvWvWLMFQp9ihmVK2gNJpvZ4ocWV6HLfAiwsviD",
  "key14": "4C1hrp2KowXdYxkfA9YZb7BuddE768C32qwWXGGZtujVFqtp1Mg88rw1euEjubXj2pjGVsRBA1YkLytSqyRgGSb7",
  "key15": "hWYvJduqTd846rBByB22h4hCZqmk7AtA3Fn83mvwX3JT5vgHvFWREhahbYiBffTRbiWMVdQqNBZWMZjoVfUKo16",
  "key16": "5jdref9iDYzyUuGGXdVXPEXrzbAMvkrp1TnD2gPi86WA4YrUBV49cvYVMVteA1kFkBzHiyyc5DKJRtKGKjEBxcqb",
  "key17": "21Gss5aP9xJLLhNA1NNAojeJuCGreoTXLkhCqdCAHPCcdvPGyweLXTMMpGZqNH8sT4H92cJa3gS1RLwWS41qacYA",
  "key18": "yPbF33FD3NYXNEpmpkNhNnk6hUoGzhAfTt53DkGHsQG9Xh6i7KFaspAVX2CQMVeEaVdR4Mry2DouYFLYY5hpuHn",
  "key19": "2qjqELpXkUDz8cASLY1dmkWN29L9xevSdbQEghNvJtvGuzfktpDbuKTtGt5B8aezz3H1KStkXisr3GP4SVGS9t8b",
  "key20": "4v5Cs95ctjcPmdGVGjHx2utPcJzXPuasTQ33pVaQ1cHKKLpDgRKEyXvwRKoxNux3cbXRjrq1rt2iYr68VAUSZ9gx",
  "key21": "2xk9Nz1ZrTdA347VbD2AtN7nygdk9QVxrp2SsFGs21HhdF3gJeE6UXfmUBWPj77X8s964nweXUeodQ14XC11MN63",
  "key22": "rosuTxjtDyxxo6hGSh4x4H28EXm8mcxwGXnHT2UMXdnYpKACqwsBDjpwAEeR7JkYErkGCzycJJvnAx2ji4BWrjD",
  "key23": "3qUxEC8dLLCqb2mQN17ZkRzJZNhLVH6tFKakCYnsCLCUioDaS5v3aGQSsHaJThkixSNzzhbTCfFAGEBSrmH1dET4",
  "key24": "5yWZoshf5CGXZPxfJnBVU2GLHfoxnUGboeFwrNYfTadofrjZDm5ENPgEmQS8Amwrk2H2bbYvegRp3gX76WHwkkEC",
  "key25": "5i9qgMXKKse5MiTRh8ZjyFU85hqmgFxbEuKUoKtgfM736vZ4b73WWQWZtZxRw7ZTT1NKUUmqXTJRxWuzbkdST1u3",
  "key26": "36q7Rd15a3bTNVNsNFcfKrRDEuRbvGZXtQ8adEqm8MWJ5xcjtmQ92bYv6eAgc2bY8xccr3LYR9E6evRL9Ro8No75",
  "key27": "5qvDnig1pDC2WmqQFWpEcNCNvka9LLWAtmSDBg5D4s4gXUTZtMYo6jaVSezQdAv26tmxYaQM1LcfVYazGvYwki5a",
  "key28": "67KCHBYzS9KFpyrWL3oxT6K7J44WuLxNzgsJXi6wpKVkJsngUTvXFTued7tW6wM6zaqH8vFXFPNGRyD8UHmnfNcn",
  "key29": "4xADUBap4G4hPKM1vz4WBrQu7jaqkiYV9VqY8mstTZzAYwrB8L1C47mAwe1RQzshbD9Z3Ui4zXRjZHZ59ByW7J9S",
  "key30": "2xWWnkwPsjeVsQ8Vmz6E6PqdiLMAUzZknrsn7GNbeSAFZAxCJxottNZJz33ULL7yP1uRfmrC6FLyGT146rArnGNw",
  "key31": "5Dp9cH2KoUuE3poaPJM3ibsJYd2oyufNHUqQVjnaLjcEVisyZ5891LiiCUHjYBf4N8ReGisz3cgJRwvW7r8k6NUN",
  "key32": "496DRSrs3DqM9Zcf8YSFNQgV8MvqLub8PWudUKbnGmCgdAk2uuZpya7McxPeB7nN1ndZ9P6uQzRByyZsb3FrkSvU",
  "key33": "5Rw91R8wDadR7DZnjELmb8WTGgCt1f6DKEyNyeCyizUHzNtoT5tGGVhDP3S19mK99ngwaAVLQJtq5imXAwkAUpH8",
  "key34": "28QvPj5x4v9wAGyi2V5b14UAe6xpz3medLrdU1KHJPo9td7wEGv6Pxwo6WBu5y7Rg6CyaFBsPLgGongECUku8EoC",
  "key35": "X4XJ6X7BAVuH3z8cu7NC2yf3p8AqqacpiXzkwo2yZ8rH4xZG3DP1bThPmMDhK31pWtX4RcjDqZjDkdqtUUGLJvT",
  "key36": "XL8kiUK4CW96HhAaDs7h4YPF8e2goaNcxk6nWhmTP3LLWpLiwpzuD5nQBPphG5z26gNVRi9PPwvW9isPZPQLRux",
  "key37": "2Y3yPJdW2pTHzhgqWf4GbdEkz7qnkRucjddSXjCT9GubXGjwqPnejBozbXVBtjUnucM9x3hSWFbHf7AfWzJLcdXF",
  "key38": "4LyybtXLzGKfsQ4iaf9MBgZ7Hr82qFTpPRshfhZpfGfdkapJHbj8FPDAdYammsxtE4n9PUcnqabJ5UzURHwXnxkg",
  "key39": "m1fFLN1KvZy3mNF4agubP4S76zyHZMrKK3Mn62SQDiHgUqwNAt3qyTtvHdW9T24q4sogzsxHRYfwfJJovvRwdBL",
  "key40": "5RsKTgddhT1S8yCEoPyFhJixM5hwWKQCuCDEgLq25zuV7aVR3rvmkJ1Av3Ymkiex4Zyq5sKmrEXXSp1VDNJhxkxj",
  "key41": "5G2P4ootjT84T5xFu4PSETYUti9YW2DsMpyjvRHCvLqXp4MRi3euzbccFvpkro1geGg26WVeorp5gsNhaPtZNrqA",
  "key42": "3gPJLW2m6iB4WtXtXw9YixoUaEu85cTrqCNCToFrJBNuDeuDZB34hAZWYvqE84gTSF9VgZdYhWRwpAGNXm74HQXs",
  "key43": "14gmtMYFBy1XTFJqUvkDtxmA4Mq7movqwb4tSan44VSg9ptsJ3yaiEQXZEnaf7UKbzNygakwM7SwrVQ8PC7V8WE",
  "key44": "4Lc4KhyDcJyupfuqQkNoKyVcJNq8NQcFKGnqD1ZanLzbNrEYypzvviQHXM2d6CPTg4dDuwA1gZj1nb6HDKvEFN1b",
  "key45": "mLvDijYv9irqMaewVjgxk58mARzMD9pT1sVqaqZP8kbWHNu4Lb2YQCPwDmqE9ywLGShQBT9VRKcYFEWuQVDXADi",
  "key46": "zA2AssNobhSLQApTXzRNjUWNraWSywWoQajBHJnzbFiphG46hzNRNQVoCpA6Pp6XCdvnPe5eEqyVf3ZCySppK5n",
  "key47": "3jRzMcn89uLn89EFsnqwdsDyRYG2ud2J8Er3AAAnkqcYQdrvH48kxi6KYY3PkFz6GwiticCKCv3NFt9Eiif7UR4u",
  "key48": "5xsaJtAMSQjmJZE9A3zzb5GhHbUNbdrteRrmhVMzZXEF5T1CXrXVdZsMk48w7sidMKuZFKSdyJwzVo48Wj6MPjtb",
  "key49": "56mwNtVs3EMqu1HQJmuoC1VeVXhYEgmUJYMFHNiqQzQnqagjde7AMnZrdzwiwnTQ6sW29GnLM4bsR7Ucv9KT2yTA"
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
