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
    "3SL1P5Zt3czn144UyfvCj3k5m8pmzNgU5V3U6STZjC1wGYZQB1v8gpi8gVGcGtbPtgvkQHRTySVDAA3p3yPzxskV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55FiaqzPKJw6L8HDVgeDteiyBHAqa4Dh81HuSJkYyMhwJeRqyjAL9WdPRi9Nw7WuQQBdsiHoEaSUBmw87xCaafsG",
  "key1": "5KK8QUrRRodsbvR5NHdUDfNMcnr7dnmfHiTX1T8T9Bq8MeD8ZbyzDeUEXGFTquxHvY1MxkpVeN646XiDAwuWiUec",
  "key2": "2fTs5v7VrRaVVSvBHbjGwXUTBTzKJevEQ6xV1Xbr2FHpzcJwkLAgPiRku5zCSLmAeoKw2CwkjufMQcrzuqrusFjz",
  "key3": "53dNaj781ohQtBVbXkZskGMmZXWfYzk6tJn15Bd7G35BhTZh19JtPketw6dvfUiaNUGU76M8PQGQTDMAF58YT1nh",
  "key4": "5ixbdGNwbDTeQyWZRvQtbdMXvUPbmavqoTqrycgmBN5ChkavgxyJmYzdF3WQNhkcBoUKUJhwW7oLBHPc2MieHhR8",
  "key5": "4cRsyqF4UcbxjdgtP7EnfZBjFZpk67qUYeowa8A7v9f1UPt639eDpF2U7kaMPsXJwLHv8TjNkCe8e7LfBqXUa2gm",
  "key6": "5CsZdWL1EwWYoMrr1k5r9jd7ZCX9UBxDsnyFhzb9dvQtVcStF6vJgx2xSqJcERkpLGLSuJfV1Z47wQNYKzt42ZqL",
  "key7": "3DQaNgfVZP3ESx4FwWsUs3gBk6RX5Aywcrk85m2zuKtQMKddFqeSkQaVW6q3cnm1rDh5N4JiQjyQDbHDd1bnC7XA",
  "key8": "5qQ7hVnztcw4LSe4nUZiiQLfpZUHGhGiS1sJw2s8hEJgkZaNo9KGVd8EzjFWYuD72zdYiL6hLVgY3qdB353psDS",
  "key9": "sYUDBPchjZpdi4NEVr6TmGkrXaHLRqs6cS1a9HyhxTJH94zqTC5WpoiHQbgRmmFqSJEJAY9bFgrWs4BsymexuiE",
  "key10": "4WhoagHUURCjb2tjPmDrLSeXuFUFWvhB38iXW9BC74VGGzht7smT7iHafrvpiWC7HqHanHwitkxBY9DAB7wFSi2Z",
  "key11": "45smmGdD23do5cGCm56LDFhoF4bHsxhXt22LJDjLNd8sFPeH2cK1usZnF6ERPSAfRvHndSJzW6ukrDGUjTVcCrRn",
  "key12": "Tkbd1mmc4eMujGScpiY1Q8BrFu32gBquPVBDSZgxDHgZaPHtzfUeTc5yzhH2joupBxmBEit4Tc14VYxe3nTUoa6",
  "key13": "41iiobcUNyDNiBLxA2gchrFfwJ4HXZmcH4jHQ5cYaayAwwKtnNEhcGdMDUiqzrny65pvNsMRDXAAR7jFav7zcM5H",
  "key14": "3wm7wykXPtcZadUcNtM2GPPj9KwnTZUV4fTMmXwfSosCGFmXnu3hoLNojnF1FBLAJncqo5FMkZhEwFsjbVBmh72f",
  "key15": "5mpgw4ucMhQVwhEQTV9i1tMCHraTPqKZyT63Jmw3fwgB6r2jsXxNyq7buP96ZdR1Z6QtNeRL82ZC9LjPJb6Kp6sr",
  "key16": "2dkscvYvy2VfvJi45DwrHQSrsSBXtbj1H64EoW8qnNvafop19QBKmEHrxkXhnMNxKtHH1xp1gzEvNFmuTGiPGWQW",
  "key17": "2ZyjJ48RAmUsNSfRYbkVvtsA4yd1LSmgGwr7Em5uJ78n16UDds1HY8Y7wbsYCTygVtqw3tZ81Qwk7SymHN5D2MAk",
  "key18": "3EYPSQwbu5EqNSsqBHNQFCKY5zAg9pHP9dFvf2dUECLdQyKuefMKXfT5g4HHkobJMu4Y68ij7NT4jpQj9fW9mKjb",
  "key19": "4Wb5LAnZg5dLd3G1HA3qCYN7qDdYpMxV4TmbQXLVnvNRCEP1QjUV42ar4LYvcCu5B3yqmHxQsdq7HjeE3PgJeHzC",
  "key20": "FBNz134G8yRy8m6ucxELMjaa72cUBiQn6YEGsJTu8LaU9kTe1ViLvmBWjCRYiwCrvH6HAV9zfnFd3a7XfSBaftf",
  "key21": "3sVtF3Gs7PnGUauRBdjsVFZRskpgKd9jCnSTahJzWXYU1egekh4J98v1L4KWKuuZ1SG71J4iHBzbnDdN6nFA3AX3",
  "key22": "31XSMLCXtSUiTmk2kPY59fuvxWfvDBSBSjNCaJwJdRBykqVLkCA79yNSAAzGbuaL9SEzoiJFwBqAKkNevNHgUJym",
  "key23": "MYRC8Ybjos87aT61ioXiRBeQfUHgPuGiYBxyMnJarm77CcHB4UVfyAaTYV5urnhbLw33yeeEzdWcrPTgbrbQ1y4",
  "key24": "2tRjWxnazFgv7m7B6UkWUmYuQ6WjJGfgrzpPRooN6s9tSPuo9rvCwqZfT9eKpFsHH4fr4scwZbxTNyg2Ms4Kbgnv",
  "key25": "3mnWiLMdxVmPUwXKjFEYnFhYZhEiBqUEMxrFJMwjETAVKz4cARN7LGF5f9bCSf8PNZTmmXXs2zdjDxTsJVNUyxYo",
  "key26": "5dCDyLJkekgUh3A4d1SHxL4y8fWqSJ7WT4TLykPfFYUjhN4opFmf4yePjNP2AS2ev1SwfUAAEbgKDzSeaLzktYjg",
  "key27": "3DWrvrBUMZ666qL8CYp6XJGVYLdxb67m3WyH8p8osXQZEREKqGoHMe5R748NiFduZAEAEH1DnyQfQ17QMAcfmoQn",
  "key28": "hkYNTXaSLkVdN1XYSqa7W7wfobapqQSrZiQsnxrSXvU2TX8PCQLkYUi8C2Vj4DNiRMLPid9fQbBAEWVHMpnHy4u",
  "key29": "36oxPmTFtgJ5Y6BtzC8jPEmJBS9baW7xmmk2iugC413w63DyKzE1fwR5XPJHsEHkEMpToQavTdY1AekDdU6L9a1q",
  "key30": "TnjY85aHUfC5GSyMmorTdutr9VdYzdpZNTkv5pctu74hNCLWPMFMa5wqDh2wjvKrPwEg3uvxsuU42idXQ4tWPXS",
  "key31": "4dPSiCMRC7eGxRcDnc7mzktdBwP3mjxovy1j8Fj318dtYfdVHzYD151mbcEwrDo19ce4S8WgkfQXsC4WjuHeZqYF",
  "key32": "6Tma8NeDyvtkLMS9etFyz2JmC3RpT5jTNSWWE4NzBBTFpwRnJ3yoevCPG3hH83hjDJqRQN5sA4NiLE88sN9vsFe",
  "key33": "3ZVLQcABo4LTDpC4EBdvfnFfLhRhduRMSd75g2dr8pdVrSBJdg8dkPqbg7qrRcTYvhYFsUYCqHG2K1hyTyYsc1WN",
  "key34": "5W4xWZRYX3fUJwBFh6Ys2HXngA7CDkWVLBo3g83SHiuUi5EtsNKtYqcXKq2L5yDLJtTx3U9jo5UDFpxdbwbpoGTr",
  "key35": "2DC9fnRNY1gUmFh5VhzTqnB7THbnQAhFQwkN9qfZuQaifLPtgtp1UXm9fyErAQAU4pg6CNYQ2SwkgQdsjRScZ96c"
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
