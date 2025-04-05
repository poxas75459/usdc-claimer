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
    "3CqBhxX6pmPMf1h6Y832bi1jet35DCnUzLyxwv7MAZfhASiyvYfLEzDgUQYQu7JFdxSP5WWsnoqcQbQtVPMQurBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iKAkSAgiNEyeXvqw6XWH56P6dvSFJQwXXWZR9XaBsXm5wN1hnhZVuA9SvLKkZpwS721nSykiFYudwmGW4RBhznu",
  "key1": "2m2C4iaVKPUN9U8xwjnRmkxGSUXpVQ2TKL81s3zMHxaLv6EY1TfedG2y9mT69nkTTdpu2L5vScBv7yftByMdAPju",
  "key2": "QCVw6qudoUUrKgoMbrWmTquvhN6n5uWiYKRTt7vtQ1hvnsJGpnhm2U9RygNN89RgBFCFoaPgwSv8QqdLucAPgtN",
  "key3": "4KnqpiCYFwv4rYMt4LfU9FQJaD16M9Z2mrkc6Jxv17WBUyDwNWdBRd5nfTzVqAUYp6Qh1XMkAsgaGCrxLHTdoqzg",
  "key4": "2xUaMX198ErV92NcAnwrPSJT5CUBw5qtuYAjpnKrG8ZcL8JPdBqxPCzjrVo3yzqpX2QB1JdmNJQTKA4TWHiRgUkL",
  "key5": "2SPHmKpb3axwjgncUp24nmx86AQJUQAk7TvdU2rwzBTDiEBLrVoQGgupUNnaoKKejAFd7nPGDPSiaKHc9onmurK7",
  "key6": "28p3q5GqjXAdQGYzGZaRbeB4DY11dKKh9kvjkum4iaj3AgFs8saSxQNqMfWo1BtCwqnejDGUxnd6tF7nsrhdtAUW",
  "key7": "4UnTmVWDfYzmVUQ1MhYMmoesqYduFAoSu9bzFeKLQ93FHGGLdqtxDPk3BdAjjdApF2PKAby7Rx5W9Avnvvt5E7zh",
  "key8": "5XahTAB4V129BM2hLy5TXCp8VX5QQrUMiG7ZJTPsWe8jHntX1Lv3XTu9JJ6ktwhrCunUPcEoGEUrU9W1mmZEJ8jj",
  "key9": "3vxzYwDmtkw4VnGCYg4vMpYo33MtxdQwFiCefP8Dk1Bjy4f5mWQ7VJUovB3csysVF9ypBwUPxbAcefxJLmK2MByD",
  "key10": "3EqFrjo88seSJbJxGnJcy4zN63xLQeoGyb27kxdUFMZkZMxBa5eELHM9GQWbXAMTgv8RqJgqbtVppRciqWe2dxnA",
  "key11": "5VkMNcPnkBE91tqiTVyAsPfHaW5XAAnj3mFV4P8uEvJGHTYWeQfjshUrz71SmcJXNw5UaKVgGVo4F6PQWPDYK7f4",
  "key12": "4kJ3PmkhDw5BLAB2gJmCQ88LKxAaLnCWEtuJ1ccuygv7q6Ef8AcMo9Sn8wydWHnDeksnCjorTnrycV9s3SNGgJ6t",
  "key13": "qV9WVyryGQmpKChCnynvh3p9RvmYsZPezsrWdGyz2zkKF4V5vydbDFy9UtxbzwymykmdbLHP1HQgHYKecfWeXTR",
  "key14": "3j9mCZZnJEmoHtegPs5HeSJL5jnLXUF9p2RnHSXAsw9nLaRrf542MkEDW7Mo95Mctp7eCkGKQza3ER2vkRRbLky2",
  "key15": "2svjyYG2L2XXKA7KJmadyfBv3DohDusFJP6YRuMtDsXKiaNnC8xsGeTFn7jkT7XnbYHgzpiHDFXbyd4DVdPmyDjX",
  "key16": "2NacQAKhPJRF5oQKJc8xnpnegrHvUtk6YEQYfPHfV3syAveUQKztoUeVpNUBhJ2j2vaHjEzgtEyMBNVgFY9eJaaH",
  "key17": "5wEP1HDFFnQUgMCUt8w9JvH2HnfRWacunK1nngYsSyHkYMTHLXiizHcZoTfs3Dffp7UWtzsCdLNPanmHuKFx31Vo",
  "key18": "3zEdxmVYdTRY9k5AwZDk3DmVLNx8J7EvEMSNMKa33oGdH4uNmmFdbPT2Ycf2dpB78zCe9rSBHod7sPHMEofzYqKA",
  "key19": "5Bx6WuhmDqn4XCnJZp8KE7fce9LibCDgU1M2rTVXujfSjsZSApQheRfUnSvtn8seKUVVzNbqTvy6Vw3n5f3i1ecb",
  "key20": "2LANbj4hQTTmp6bHTSzb5R7UyB4bUP3HhSaMRwTZYHA22gHoHxn3vdrs11i7yCjPvkhBkDyrnDD5b2x5UottTFox",
  "key21": "2geYAXXPheYLuzUZcL3HP8Y9cLwPdG4EMig6gfdYbGwrRVQdjU55WcMpK5zwigJn2BE4FgTJsrEkHMEhJJKnWt3h",
  "key22": "tpPcWLyVXcDXweM1vbPHndQJp1AjyqQ9Du1EuVMufLtLWiCvYaTKoUz3KEudGQCfKLU3cbCmTmLi5naucs23TFz",
  "key23": "2R9shf8jG9x4ACkzTwU4aPNKrJegANzQASodmAMcdQh9fNJQdZcQUvU2rVxMzSVo3to1pprZVrDygnCUqUv8B7P9",
  "key24": "5e2uHVSUjJkSSVzJwLvpCVWHEfmAu8FoBDxWa3VUzziNaQV1tvHhk8dTN8oLi4RAjzmbd5YwN4QB2qVVWtWD55Sm",
  "key25": "674ZXVCotoA8MhH7mwY2TuAZV5Qzy6RGtxqadd1qcpXfJBWyzCJWCFWMLqPsSBVcw4meFbGxMwzkaZCtEfVZPg8o",
  "key26": "2HGaeBKZ6mVgSQ5hYen1U2XJMaYzBKbXQTif7iDyPq1R2KQYZ4mzJZgoMd664QvyWPiBMcJLnzdx37XGs49eSPy1",
  "key27": "4P8PzxA533HJNzFtQvcWtijiNzaHgTAHH8Cp1oLFD3KHisEvKdQLVaFBkvPwZLcctqzMe8MtUn6RXfXnckeS4h4Y",
  "key28": "5HadsD9y3YnXk47rcrxkbjLPmf3Z1UVDYdjef4JKbTaVhUihrZx5RCS6ssYVF8LqiWRR6YS2LYLbVVMLwBcxxJ69",
  "key29": "eQSQJQDANXKw4ehRhVVnQqbsDyn1JDb2ZEsQgEaGimaEdA9Cu7T3cdoJuZgShCVxbh67uhfRv3au9fbvYxTaCEQ",
  "key30": "2KBg3uaUMQk8p1KikBqL2xueXhdsXcUn5WZw9kSYc5J4LqhF4evynMtPJLWNSBmAGSDkDSzP5Fg35URj37Gmzbw3",
  "key31": "5tiUTTQtT1kcEo3fTxMhhtqzx8eWUZJjmoYQt4oaghxeHcqwXUHU1665B7DCTVBNV4QsrVAjp9c4MN3oMxafbmrD",
  "key32": "26SZt17arHupDwJUvgFd5oWQz3ohE3Qz1yXjpq4aJG7ppnYTF7kjp9PSMU8N3bv1rYCUs3ZE81bd9KVgK3K1kqKU",
  "key33": "3mDbSggTGSrp1kSgoe1G4RzTcPDJf7Moxy6yoZL649127N86X4tw1GVQgwTgi6PKeskyVGHhF6SE36x8zn97Uty8",
  "key34": "2fQMHQSpv8GWFdkoqMHPajWz3GTWwT3xmFz9tHbGw8892qog9HrWzWrmcAF3JJ8USUZEeP58TB62M3MF4C2Ey4vX",
  "key35": "3dA1FKcg6kAyFPSK48E6VDZNyLoxKNRVzSi23Eyqi14w4M2caqdVvh2kS32wysk3cYCENWxLRPN8dXMyVoELHnYk",
  "key36": "36PtkQviCv2Bx9Bfabza6wMjL71GVdf6MimXmGuHdFDwkMzUuexcoJEtovfjoWipAsiYYb9uqRvgGvyJj9bPwdbj",
  "key37": "5JqskKMP7KCV4eshZFVWvZDPkRcEX1vJb1eAs2SzSkKyjiR1iwExdvvqnwy3xZ8Y451tjrcQasfyTRg6EfmjKz2V",
  "key38": "3SAXE17R54pufEkX1SUmjegssg9LPgBMEDb8t7EwVwZATrrCgNmTEfNqMEZarLYifzthTTTwkkbNWhmsqfCuz1mF",
  "key39": "2dEt9uUYA1uYvRh73YiXt5ARXakk3MDHZeAn19a1RzyAPx1YNHZ2LW2PWLy2CiBskEDuS2pia73cEPW9F1gHvSYj"
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
