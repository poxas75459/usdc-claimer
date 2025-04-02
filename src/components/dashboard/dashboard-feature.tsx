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
    "1VyHMoFxsrqJoPKEuqdJ4J2T6uHQXPj6ZzJcXTNGk1DJVkFYX7a8RpKZnL3ZSHvvdFNQ2ZZsbfNs3iXYkqUvc7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EjyUfdCpUGnLckrSXPg1Q3EN4nT6ET4jQxE2qETuPaBvcxPB8Di8q5KK7qFhfR3X1gtwkSYwdsBt8SK3Y6jZbm9",
  "key1": "3eewKFZKmJT2Ss5Ry2X2W8roztQb1VqZovk8cgquzy4TeGyTeeTAXHiq1w1Gju9ZNuDjHd98JQdEPv2KPo3iVvBp",
  "key2": "8Vz7wwERNyWH6YRCYCvhmvaR3tCgywKmv3T9oNGCtXvow64ucHcGf9J18tuCcRGNc4uNxquk5r4Fk4FwV5kVEJS",
  "key3": "5Pf22H2DENYVQdSuH1LBL9nP1JJ2D5b1FqD7Z29aVfNi2nZkVF6PAvGmBiTf932tLa941rPFxBcyz44vEB1Ty65",
  "key4": "2Vh7cWJyUeYVQrkFezeJpZydQQ9MFeCxdqf7ctcSWnrjRRb6eEojFeS4CsJyasQeEosGg1ncGiUs4tSECafxjZuD",
  "key5": "E8TdWTzTZuqi9E6AcNKvtddey5escEAsQVqMVabNcPGVs7KdNSeeXbDLzTWyu6aMfoviwiuFvdxpRntFXFZSfR9",
  "key6": "4SP67bbKPvdBvk4XtNPhxJuE3xeF2TbgDqKw4q21RQod6JJn9H7mkPFdziEHX1MkjXjeHpj2DRrZ14V6DSoPab3c",
  "key7": "Yg7utte3QbW5sRdXVszKnbrCviPz9soXepktwe2qmBy88TtcqwekVLesronxs4dJj9zvmfCc9MCx2EjYf9tUG7b",
  "key8": "MTQdLMzW7U173SSSBsF2D5wRPD7z9HoLhU9ZuEBhZRYEUtQRwJD6zmgWZrEaxvBB335zGh2LBr5Mo4BPN4w7b4W",
  "key9": "3wqHgDL9mewawgtQfY9YBSd1HNpyw2VdhCRMZc6zczh9LWPK7YehfGaNLWqk9MgucXei5SNoUjdyY6wXhM5VNotA",
  "key10": "3uF8zpX9FCR1qvEMm3ZWPSVP5zfTwLPGE2XbzSMRJbsveuPjonxHLHfpPbVsbmjxKWZmA2dKU5ipCEoDfhZiQnR7",
  "key11": "3uxf8AE2yxR3Z9nJLtAR4wDs5bmwkytnGRtSQyYPJo8KU2TJ1e56eZ9vEYUFM3Xa8tKhtUBA4rk96kn3izHqQdDi",
  "key12": "5s2NfxhUtx7WzHT6FsTD9abRKqkxA8o5dGZ1qoK77zJbf4LYswsmLCxnUfEuELDtTxC9Hg817Jnee8nHdH81SByZ",
  "key13": "3iHATSWYtXuinqPM1kTqRV2qL1WXQVJvBni8kk591zkWunSRuvUWjqEmbRUkJ3hQZJJVpnNaPSETE8wAAh3eiSpC",
  "key14": "2fzG2S3J1SibTFUAjYrc2tPffgrSXibJAgGZ3AU4TSF2uDoeVcWn5Gjc1VMQaaddnXJzRQxZKne93HXz9YUcvRes",
  "key15": "4F2ZpYB1nZGTeA2vahXhdKBMqeXPH83gErAarnSDMge351XaTzFyt5qtrrakN6aCeewGiRWrBBC7CN2RN57pcCyX",
  "key16": "GbMFnFaTCg9VNttdcTtC1LvwrV5pJPkiquU9H9LSTeY4j7csYSpKr6rRdd6DHx38qyiAdNBatYiUzxK3UKebAiG",
  "key17": "2eL5rYnM6k4aVWuk3EVr4GhVJKwcNfixmbdqPr3JwaiKfY7waMr4P4nUcwMkguQ5rmrUjoc2tj3A5XGbEbGhPC7",
  "key18": "3DRwwSEzgoG4qoeu7faj3MQZunC5FnpZn3x84sYe9e5RGLaQDSKt9t6vUN3jP6cWJYbUQCY7V1SXrS6eAmXnJ2a1",
  "key19": "3trqQv3XtQHuJgt7oorqGP2yUyJAqecwYEoQAvGAFSmWPDXqCVcKCMdGc1axRGjdn1Hogj5SvjbnKW4MurPZaeps",
  "key20": "47hdHaTfFQxKj2MgZwH56i36uuTk8PL5NCTimwja77B4oH3hMxVXcyyXzEzgx9FynxCuPfE67BR1CGSKdP5o3VEr",
  "key21": "5LgxPLmQHpXvGGGJTUPrjizZxhM32s7aCQV4MkUqMua8LG4HH1HqHPjnygEeCVA8GnY2qtip9irKHPs9dRHjmuWT",
  "key22": "37QVWD3iJK858rVw81wx5r53pNAU6dKgLzTjuvhbjDVZkXXiNEwKLkFZ6cfkW6EQLsoaUtqXmrfMp7tGWBdNeJdH",
  "key23": "JfqxDENDqoRCGVR8EBTwcnoM1PKNKca8JmPfDZnTk1msn43wZbcVmRRKmyS4zQ4UXZrk8YJHuYoTDzPrFtpzM1e",
  "key24": "3PwwLjeqzPMamgJ2Z6PmA77FXqi7hG47R62GNGsPk3tgVZCUTkhi6Kta9GXmviWLem422EdsggdaJKeL4SKhnTSy",
  "key25": "4M7xZMQQbkeABzXRuFHm7yvFjWsM6jaTBhspLwmnzNodmZ8JipCYsWNaF6zH2ukbHVrE4B31uu4qJPEbcHNe8Wki",
  "key26": "47VRENUMbBpzSwED7GLZYoGV5f41LtggQ4iPm1m9wu4WujndBE3kNwJXpyu73G4zfHC7h6LkKEqJwpADhFTx8iev",
  "key27": "2ggsXbcnnij5PouL3c55YML8TKyYMZseoWwDRX5ZUL8mj6sGQkDHEkoPcEHtdq1wHeBSoSge6kgjFQn6VE4h1QN9",
  "key28": "4j5dX33XnhdYXnkfxwgL1SU5jaCbyRYrYErTmwM3GueU9cfkxsPxgp2qB8dxQjBF9HfxVvzUsvHxxmZkmmfi2Lnf",
  "key29": "cWva1n39BSL5ZNj7DjwsfdVvqGhQVwD7qajg9EUmT42zG4MCBjaKEA8hZGk1yV8361yN6PGMgp4WJJCkqWDzSvw",
  "key30": "2paLBo2WaJBt7w94toPZVDi13aNb19mEMSFA28idfuEWyrDmLAaSiifJzavnhJzE8gfg5eC1BMubGcdwGPca3dES",
  "key31": "35Ftic7qXha41u9nixgrCFdjZ7b5MegUyTFDBpCASHo8Lf9LSdiSmMJSDtAopaA2J5v37Z5uTJ46cGrwEYtxScmL",
  "key32": "WGKR83kqkkqZXCrgHdPbvxdmv343kzqzHrQBmsAibPh9eVxjVAkLM9V1rCDc8tTaERmhXRgd7bGqKd5nmt4TaQ5",
  "key33": "5zJjfU4ScWXA6UghtL9dRaufe6tPw3SErtc4EN8Gp9FNJ6k2uPzEvQpj5hWSEePpHwNPgh5mqvNuPF5tmLLhywk",
  "key34": "5J2JWUQ2JmXPmBmKpe2XYpVB6kzGDxtkPbqoTBBHniybNrBcnAheBfhb16ncxdEG4kE7ZLud8VvHEBbAbrjEUotb",
  "key35": "6Kap1zSWy2cx7gp71JeqZcmYChea1NzW8Ff6xRoB1uMNm1ePh89EiZo3LF4w9NhEwZcuLzdSjZbve3yRfiUDHX5",
  "key36": "5GBrzG2BZJoyt5z5QukQyXwx5bgXxCaMQ7fdGuSncSxPdp4HSYuD5cCboDJDgXyZcxhcyQ3RRGFV8JYY8WJcyzum",
  "key37": "2wYVQAeSuCNJBZLQEQffKnXa3KNsc4NZPrFfFmCr7EqZ3eHbA4andeEBnSepgyJFDCTG49ztSx2xhDxhj3V7uxbd",
  "key38": "4ddt5CZerozCf5MxSc24hQmzfbS4g3tgLXN5RKd6963hhCCQjqxSHNpFLhpea3297n6cjgGf9G65NnCrLfGPdLcM",
  "key39": "2uQCZkAp154q21z8HUFRkkWAYuaqJ1NBkPLPQNibdF5DaErFcPnZ1HXRWaSgaHRTz3w9mzJorzBnEmmeFyjinM4K",
  "key40": "5gGdCSjZKC7a3SUdGpVhmaGEXX3pTrMy2DGAsxQk1yesD1PAHcGReZ1CnhY3Hwq8idJtwAMAL84U3yaoC1vEYb7x",
  "key41": "N7G4cZDZ9Fvvo7nU3Tczz9VcCYpCipi1QZ9cKN7QvB4MsB3eSH2VwQrc35pMvhj3kZ1VABXYmZ5tfJjTs71EfCN"
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
