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
    "28Sy5hcfnqsMnJzAY9JZed8S5UkrkUaLriWQaSNxgvPt3QrnTQf26mYpGXrJxrhwXfPDbA2Yzxnri8zkuT64jf3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oHUzoQKUxUER9G7Kk33rxaQiCg9smrhKn5HPEUojZ2Hp3i3DsEdjT6aKP9Dncbxc6GtQwHkztUNvhWxGUa6rjTP",
  "key1": "2CqrBep6YnatNzb94Z3Svr32xi3zUwTHXuRdw9JQFdnXvYgq89xQG9gMdDEMdCY1iH6uGN3Euwvpwjw2cGwUZiB5",
  "key2": "4oeBrJbnojPybuRaon9PWUm5aC9pVWxFJ38Ax2w3yt6p4pZnPm18Ey5GhPVUvgTSvBuk3qPT1H5TndRPGGGwR1oE",
  "key3": "2koVFZXRLpUxb41jajW1r73ZHuKd4fTvQiqMFaMFPotujc2j98vRZyJPnA6FaukXLe2UejgqyPrKppATiVGwTrNF",
  "key4": "278DnrU5rFMmSGJBVHwNLGAsMgcbsxcY8TxnWV7sj2zExVS9JFxPK6fQRmxcGJmBYExVCXUfn4JMPwqJvN8f72ks",
  "key5": "5nkUN7wjv3Ad1hVXC6St9xv9r8umRg9ZiRRa3FBf87LfGD2XMdiRUGRDTPcqvXNmA7dqspHCX73XJePFF4WfFsxm",
  "key6": "4ueTbcYrSbDikZq6q2GGvxhbtutUtd1znU6BxFqX85UDQvm34f3njiCMy8igLTR95DoaeAYpSRrGoxaPqu927gDq",
  "key7": "2oXZyVF83Y6bu3rhBUHhToMsYktNKMMYLrtbkptApg3KuoKca7nFJqiyUPiRuzK9wH2xV68mH3AQn7awzdjWRu2Z",
  "key8": "4wfXwDMXibqVwHa34b7PXGM8NTdiKH9f1NyQBdxLWwUqeVew1twfjvBM5bmJ5RYjLy7Su2FqLAogsPgK4JcU1MCD",
  "key9": "2kdFx8wAcSrNP5RUfeK31LwyEmhYk6jpvADd6o3Fn5fWnazB5D9mWS1YR2NygAsFGR8kqazeXvWBV7Ce8qbqShqV",
  "key10": "bE4wo321ZJrK3vSANvv2VMXVcwvqemmRm6vKACZrMfA24Bnq9Uc8nYCj43CxTx1MrTQ5C8AyxcDkv3xSnLEh7zK",
  "key11": "gF61fmfPd5tap2aWANAiwAbgT4FRfSZ7djoqsUw3MBcZKpniZTY5xbLnjrYR5JfSHER179rj2h5AkWm9p2WrkFG",
  "key12": "43Vrk6L9EtsXZ6e9A7mCTm5LBUbkCaPxqVHSh6A4RPP3FRVVikMArjvC2NqtqmUThUyb23EUV5fhoLZWUt2mrDNH",
  "key13": "3deg9h1zcqsQVJLWDF873tbbmeBmfuBaPwhkKJrwbYtDGJ3RvJY7vPBxUn6pNPEsyYLm9BK2hyCZLiYqtvtw5vMk",
  "key14": "3PJQ877V8mRMwWLe2K7k9Fq7PKp7C6fdPd8PrD4zeKKmvXbJpbXqZ99NLrRjCgefTLCsyQ8Gbbqr4PVxjyrAPGdy",
  "key15": "2vdn6WPsMtWn6JEd4EQ4hDZbnxNuT4JHjFoGRpiBz7ifGq9eJdgG6gHHsrUtgWS5vFxxL6hGo1Btb3j1JdbTsugc",
  "key16": "9CahAdBaHEYBskmN7XuDrKuACW5T6CQpB3sPq8MZeSQU5yn46uEax1Bisr42U5xftFrBZB7vVumTNaqobLQLgYK",
  "key17": "4DQ8yEjvg2f9DyYBZBL9mzaP6DQ29WnaP7bq5EJL2J6CmA23rEok4BdHxHMMTst3W7L1She81DUzk9JodE1kBb1Z",
  "key18": "Yadq8XtjJXrX5f3vNAmABppi2PmVEXT7wQ7sWw1VyKA46Mit6WQ4PdAKskUERy2hdY9usLovLfj86CCAadrkgXw",
  "key19": "DYAWaeyMZju8viZY3tVGhfiDCxEh4cwfC1Bx8mQEidj8qBzMJszc7KvKkNum5co7pAeFt1zKvUQ8FxMxqfVSeZq",
  "key20": "GBWtfFfapxGXzGMfCEpUfUgJj9Wd1jgqwmtoKq4Jg8w3S7cJ94UQhNR3EnrA3ByQVKdsFZPriht5jpVaY5TfJFw",
  "key21": "89bkd25qNBgHPmvhmtYJRcdoGbptJYTTh1pqzPGqXsz79DMkPH3kDzatSuKAQh3zJn6hLGAmmEYJEyKNjHgXB7K",
  "key22": "5EJnNgRLA5nKR2WsuwXvqdt8jE5UnCFYWvrSrcSrhJZyoFFaxmU1bJ2YfhMRUCNQTvxkeW2BWsmGjKnuss16VPnU",
  "key23": "58P9dvZYZtDTVVwb47B5TG3MYWUsrdsHDZKZjwKteEJKRskrok4JQcfRN3Nm2PnrGdfLcMEm36ML3pd4BMcUhLiJ",
  "key24": "5tLb7xREXHZbk94mTdXoCSmXaZZxbyQSvF1KC8JRqLhFauaVxYPLpGi2y1AoKYk3ayncqicGZ5QE9SNkjzxyfenc",
  "key25": "4D2Q9XnX4yR8uL27JgBMVWYfqdG9tkF5aqD3BCvJmfh7yqws8QXXbiS5KPccSMcgcEqPd2q6BuNozcCEAWTR992c",
  "key26": "5aiKjxfLVAQDYSon6inYKFT1Q3XkriWcPizrnQkcqT6yJp9isvB1FfS9BB7FHRhFKJFiiJbkQeSxYjGjz7ocYEK2",
  "key27": "4vQvqcRVZ1FTwsbMnViPZaHpQwHsmBLNXRTFFp8NmcFtsbkFw4ZbQW1S5MnjJukeWCnDriqo2Z6RGoSZj7TYCZYH",
  "key28": "5QJJ9XuBEY3AN1gtS1gkkh7na3KqtQM1k78EL2iuHqpFzG1urpnuqB4Hcfv5E7pawXzdBedTGsvkFG4fW5gw7HmJ",
  "key29": "4X1fMPNtrG4CCdiBmguYG2BsCrpdbGJiagsADvWawTsTFcFAuBo9LQnB4FZqX2j92VvLWJiSN4nJcmeezeaBin6r",
  "key30": "2AbAgQt7dBCVfYUQWbK649wqyyCeZcuSgEM4ghq2G9JrRTinkTsDksdYqd5LUMyK3CmokG8ujH7LBX9UfamFRmXb",
  "key31": "4TiLy5hyCNTQEsANPVxMCtn83K1XYcAik6RQzwPCVPkJ8CXqV9ApavxMpraC36yTPLi9mqU7jxFDDcuAb6S5L6Sr",
  "key32": "bFVNeHs8evwn2bkqhwQSfmJoJenNEp79926J4SaHbByceD4TqVTGR4CCS2YfQ1KMBKyDUNSZCfF9YpUnKjkyg3p",
  "key33": "4y4dRSCcn35irT19MUAc2GZo9J5S6Rzmvot6vkho2UQY9vz4Yo7aA3daeBDoL3JPWmH3nAYoC4XHMfy3omM6HpUB",
  "key34": "4WcdZhASJzkyiHe5GqYB8eHwXVv4CPwJY7oAjmCopcuyhAMvPZZCWqNLmE75A1mtD9aCwkLnZ69mMuAQx9ZM3GwH",
  "key35": "4kjJEpmQNxokRJ3wjzEzUy7KFKfKoJEQhNqJSz4p5XwMSiEZXUhKHivAwgCjCHTshffeYfxcoRFqhq7KreRe1njc",
  "key36": "gZGtPgSUFcwdNpUhV7jWXPtCwwbzqmENJqjoFg2j1ZfnzVzvAzJgWbYaLEYTQ1BdGqWCgJmPdX5JbJa32r6aFAg",
  "key37": "2jaKfvGKJaEaLbXVs9Ad7kMAS4rJauSC2fbRwBr2aBQcJ7u9c31cWZDEGr44KmDBtE1ukrwuVUqtLJGZJfS6Hx4f",
  "key38": "4tjofDhwnidW4jWoUKETcLPgLmmnUD1wMQyL8fyLy9kovfF5EtPtSzffgt7oDj4tYfAkpVy4S4g9waHfZHierCVA"
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
