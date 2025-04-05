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
    "q9ai1kevSbFbzRxSKtC5qsVeBG4FaD9tzowhfj9d8bzhjUQufJvGn3PRsPzL94dYDiBvVyU1YEwxWAAhJDBGgTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWwNaruBnGc3u7DeT2WWXFca8LQcquVbxQ9dRqQg5oExoiV6QxJhkQXtz8ACkUcedoHLt3eJFkcP2zucSvCxzQt",
  "key1": "4XA57fY57gHXagP7Cvi3prGAB9cHLDj5brQZwvjGxt3vsiCRLGdvA2Q4jjZJBWJZSnfr8TE8ZUURxpFmtPwrvJi1",
  "key2": "3ZH81jXB5rEAfYXWWd4aG8awQJWhDhJhScsnDf3JCgbrmSw8r3HhKuXe59b5BzoSFsnenzjBHiAvgbcYra3mi8SX",
  "key3": "5MNXhKRmvQdeW3qjNiorKyjZJd5tTQ9ddCg2ZeFpf9gxcux195pBt9hZFwpQGjC48ArbizcgCjh429fd4RuN1NQi",
  "key4": "4qBjp8QDgJvR83gdvy2W1FxfyUQQiy2JYd1sL6i9qFKr2ek1wjh6GdHZxfroy6b46CKFRqsszvPhKFTs8BFfDbzE",
  "key5": "4tMsUFVFKvzsokrD74AMD7eQjUVkq7pBnREhjJNR7RELUyuGWazbH2zAWtTENz7abquMb8wCMQSnjpmhjzDfTtWZ",
  "key6": "35AbrqCgjnado2diXPLMFjtcjS922iASWPhmhLsPhWobkvWCmF4RAzQkcfXsKSf2wYT4PhcCvxEJ2L2ceiNoE5m7",
  "key7": "5GoHNM796vwd39wik3LBWjAueCrCTuQ1rLoSiRkhcs8Z2Gh9NvCQRstwkhuukbg5TXbpTeBKBE34RpwkpyPys1cD",
  "key8": "5hXai5ycTStiQJx1Ckkg6qtiHGzuX3XUz5UEJ49d4D5XnyZ16ZzwDQ8taYLy9taBh2vt36afUR8bdyKnSFJ8pKJA",
  "key9": "35oWXtiP1Guoa2t2Eamt8igPQGqxC8J182G4zEmiwe9sBs55WrxgjmZDXzq7ThkLoBrdBRttAwEkkxMtS6rTiw1n",
  "key10": "568ze2AD93AitvV4dTPmetanAXm4HA26cjMYAhPhsaPh91k5VBhJcJ9fsm2BFK8EetWGpkdDPQi3JwXDbQ7xHBvK",
  "key11": "3vfiZv5caPp34yJpFh477CEVbiH73inCeFrwZ9QmpAKPQrGvz7wdBedT1gjR6XySM5cjYbqNtXTpNFg5EvgM6SCS",
  "key12": "4pXK8wiQLjdZ1zmQFXNTqwfTjYZiVoPmGFksSPzA6eDS8eZQs54RujXxNNMB7efZuFq6eZTdBKmpPthzvKofPUP5",
  "key13": "36r9hrXNmRxkmWZqnztBfAvGqTR4PN3bzatLd88qiP7pMGwhrjt8yvzU3LkhX5SPcDJ8eUdSsteVGtGt87RgVMgW",
  "key14": "YiNSPkAPkWSWVW4EoSKkthxVS62bTVtXoRSdRkCgyHfJL9LSkt17tirhxn5utrDGMvr3bDD7D2mSiMQkXPdFvNh",
  "key15": "3beNeXUJmwHjjvrpQFhJ3jbBhwJCkH4xRuNQAe3QYYjJ6QkMdjVLji6LREowLge71LA1QENcnYabEoqxWERW7x6U",
  "key16": "4fyeR5gyefQFtnpALJqRXLft6UQ47aMYiRP9uAeoXFUeu7pxhD7crCAjsFUzYitVDV32FvjPyG7mNu8BF1o8eAW2",
  "key17": "2NVYKSvbkWXb4E9boV7fQpVbtDmWc3B5PPwXMGasf5435ArMY2ormoqxEU1B8QhuJ53fcsYve5GJHZv8oG4NjNd9",
  "key18": "2grYs2tXSweTiaC2h2NvrBwKn7mcVSssVtAVca8fQriiZNMNgFkYStBKL2HiesEZhEDYJbjSp3MLtuY52rSRn8hm",
  "key19": "49znwMUeCuDA9stsigQ4fhBSLydzw8nhq6XJPKMGLFQUUFtn7qDfwcSFkSiGwBpPMUfZ5NuuwVgdxN4a7dzidJcX",
  "key20": "e9zbP55Gve81oVtYAjGCJtEc4Ush4DBC1egpiPGVUSUgrWLtaW21i3nhsLuvGGJUcaiVkYjAyEkvDCyQWJ7nWF7",
  "key21": "4K18XQpgN43Yx61t6okHjXAmG7yKYRb2JUXWK2sKydG7BP8D32xjLKHoURQKfwTZ6YAMR3XtqR4RuWV8Pr58yh3p",
  "key22": "cWSFm2dpnaR8RgaSad4rECiFwv7p2n8jEammZ1MCcYB8NXFR9mSb9Z6zH9BKZ5cqepqw4MSaouLdEzK2uwdUTV9",
  "key23": "62wYcg17z65Tu5KpkY17nQxkSTz5fQnsvGxQrAJ1Bb8kT4Hg1AMMRL72v7qhdrcnibaTYfS1VpaFqhN5sKD3fbbQ",
  "key24": "5rxCmHRSyxUAyizssfkdhaUEysAp6a6taWiLv1FLoPqwUMQNjqVUV1vvKeW1x5G8g2A83FZY6eAFiiyCJxgoh76b",
  "key25": "gY2RKueEpcQZewFaDV8vGc891uMTuzGFQwvBS1VpTMvzHsTsu3HEk8P95d3MuZmEFy7MSE1vbjcZTZA5CNLLe9n",
  "key26": "2DmZbP7YMteiFQjx3nfQCZKMx7E1rzG8FkNwULyToTDJYq7NnPfGUr1mq3wAkiuwR28dZ49hziyjAvkU4Hna2edV",
  "key27": "4UvLjHnwfLPA4RdKZVhRZMhnRjX9DoT213cWEWNtiewHgfC619zeEFtMUbdDsPQAbniUsJKQtoHjvLRf1G9ntKnk",
  "key28": "54STHguiDA7GNMjZABWeFhKMdcwcVba9qxgDLyuyVvMid1xmygkogcNLUmgKgDYBzZtqdEe15578a6HEXLmg5NgZ",
  "key29": "4JFfYFTEnCwKdKdsUtHXH9DvCbkbYB7W5ah3YNVdEdY2WekoEPpF2mYF9z4ZcNQDwiQ7ktsu875VP5PmwyoyszE2",
  "key30": "5Y3BMJiAZiTKF7vK7rzpsfBS4hsdTbCZzK68fUxzvy93iKsbVTarYi7MMbZZYtLPELKXZFH73ZSnAjPSsNBbsGEi",
  "key31": "3RS8xLewjXQUPASikuyxz3QKQ5ptuctP8vznMxLfa7XceKdt5fFExtzFx9JFN92H4cz77oNPstTNR6DbYn2qhTPq",
  "key32": "3jqpJYeFnCLYE41xr6ZQeEPqXYXQGyatcjqrqmrWMk6SJnL6hPZ7ByZPpES9rdFN4pMy8zjmP6TjvxGtvR8gsNvu",
  "key33": "5NjK1hbMdsE9Lv7AKZ4cwr8ApVWgyiajotu58Qb7UQgv6D2JFiub1VCEKX6BpLiBmep7juChXCdhpHGAPqfGiG6o",
  "key34": "2EgPsK5MUEExooBiu2m5y9uB26Zm1hrmA36L95LB9piiFCaMSi7JdaNhmUnecH7am4oF8ZBA6vTijn97zpmphXub",
  "key35": "5qwgr7bNG6ZnHnbsHYMyQR57isU3UjLbTpVQeCq3mJkvyD4Y4gS9nAPptFYdggJBEYvxfsYcyAjHpJEmT9ErCUBh",
  "key36": "3Q6cFEqKBMmW9iCnELZEPx8kZKWy9PLMvsfz2A2VqqESZcyjmWyYge5boJEeABJvmeD9ygKURxMHNbF1htdGSr8d",
  "key37": "5Jk1fjvot21SFGKwEqCYtD32tkUPPsJKvTP3X1bfVj7je92S3sDfJG6ijK8Mccujo4Qihd2CjW26Tej2MTwhLRj9",
  "key38": "G4AChp8JfztC392SwupjWrqoeCjawJyvkPbCkE2eK3KSTQ3Hqrvs7MYtF2fP6mqkfdDcSgL6AVGQm9Xsyi65d3j",
  "key39": "4JxRf7gGkG5dZ3jYBbWTyPwWDMt4LKGrgubUUoZFwmS61RREDFFUR3pNfmsn1KwcFxJGYSP8JUnoJvduJVnvWjGL",
  "key40": "QCdAne5qhRewkhhWGc4iAxJmzyX37bi6iPJs2sTxB2pL3p2GBjPnYn2TDLJbMu5MyfiBoSnxMFspPx5depdVSop",
  "key41": "4fEfqqzgwnrkA5UEP7giPghc3RSFak2XPn7yRdnqL728PCVf9X8dhmVZxYPRoRpKJRqoBP9A8YT39fUyyY6Xpr1r",
  "key42": "4T5LkN8f1N8oRmiwGwDMakCY9SAQK733aqkKLzKHUjD6M8CwhkQDe6xFJVXQnknV5eXCT5pifRRMU2Sq3EC5EhRp",
  "key43": "xDjYmF1EdyD6ftP28Y7vuwNWXBjXk1RHSYXiLk7qYsBc2Lf5qVGSxbUVtyHUtdEPzujQLBmeoKgEhW5BRT8mRSv"
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
