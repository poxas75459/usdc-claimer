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
    "3GrZFnWQLmLAtqgQSQG8cs7c3CCZcTqeW2uw35ytedy57f3xNnoG7an7CHPYwLH6N4SkfvcfUirYha7NzdWoqcRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TJrDLzVVoV2YqV2EgVi6vuRu933zupjp4m8MJ3GBJsHS2K9sZAY7NCPZvWVVocDWaMvBQA3PMdGCDoeg2prdPK7",
  "key1": "58YLaqGJ3BHW3xvaPHyujc2o3i66VfgTPLK4xpszmbLh5Xcaay9tbtXAmv2qrGgdetzZVpG5oMvVDchRD7Ajrpfz",
  "key2": "MUP9QeSJydXErW6Q1prJ7asSUM5HhkBqwepAqeMMkzM5YLHap1Adnn9Vdu7mQYQS7DSPuizCgraBRpcwG9jkcpp",
  "key3": "5yr8pnzTUdympuJkUSMC11WnqfiNHb5yqCwAi3md8NSnrjywGrMPJSAhx2v8dreSFNnjthG16xNt37cU8S61gaSZ",
  "key4": "63U4poYN7YXpt6uZ8KMmDqMmKpnxfc4kTB3hM6XvEYXrYLkB9mMSvogNuEmGeHXn4d2yUcbmrPgfKxGkhdHj4fNY",
  "key5": "gAoQDxWWCdUGeNEoepmFcUCfPFx1CZHn5HmpqpXF9SUANJzR6PY6vYK9pHHMMunjWaAwKLKDpX53TcSpC7NAwjs",
  "key6": "2SBc7gs2FDSpKT3Hgo95ZWbEL9okyDdNj3uwskXWZ26UNMK6Zc9apRE8caLWHgDeReUUpCaFevH6a2BgiP3dvKzB",
  "key7": "57xLPdhHT8m6EN2fgwYfyqbmnxTyKSEuYpFybAXc9vQyP4ptTyVhh11uNAfcts4o7URENp1C9b7Zv9bsQNR4TyPk",
  "key8": "5TNJ8nXLRAvH7m5WS2rB97QRvEGHF7a4rjQnP2Y2wJVRmDndbC4cwRWQDxPSGm1SxmXfPJKtWVFNBGbmaNivtvPi",
  "key9": "5g7MxrncQitYCMvJ8M6PD9hRyQnzHdRYXfuZ2wt1LyAKF3u1FEwvGC499f7hPx8WYqdLbBry65YeER5CqNJ41FFL",
  "key10": "3xkyLZgxFtKBjw4eMoFpDdFF5tXK7kLvFYZor6eTLaypT4KbyyAaq82GEx7Hvi7MMNFeHFp4Dzc6cGyByC3piFjm",
  "key11": "3c4cWp7XrxmCbWbvB4xwGuaBxRv4x4eqvtrrVpjhMcKY9WaZ8FQyLEsJBRrivhGDaNEqfwDxizybauamW4Tm2ugn",
  "key12": "5XAhXKKYe46WkW5jxzb4xEw152J9ZRkAMmQF83k6PeRGZnunggp1LGySqUA3HVfZ51G2QZoMY4RsbtVueSNf3B85",
  "key13": "4TdG6WvZi6biWjS6BZX7ejFoD4sk8qnio5fCXMqJbcWgfNkMBtdbQcpkrm912HF4QfCgpG7vPZUdunvQBtb26Q5T",
  "key14": "3inp7QpzKvqHfHewgY2WqtNxgWXc6YyVBPpE9vmD3SfivBodGF1MqHgBDkV4Rm2HZmVxjYTEhBHJBSSRb8sAMjFH",
  "key15": "5yNGfiL6Zmnou5h2JAnhFser4GZHJ1YcokEctMpfr22FWszt7whRYowaWBHGEBLa3NHb44dfNNyZC2L6u4f5mcEh",
  "key16": "QG6DP6ZCuJwo8b5jj482cUkHVueVxUcF7aWAEJu5UHiyFDCZmZmfdCAkMdr2MjJNW566RjZ2mvhoDTv7nYUmPUm",
  "key17": "43WgVivovHZoSEGtZTdZJc7FocbH5HrkZ1NJMD8L9mSPq5wTCEdMs6z14bHgGBaBdEuKWk5g73ixjm49GRLx4djV",
  "key18": "261x4MB8nDUKpMbPS4mVL9yig7rerBYLs7VXYig9TJEmiYQmjYE3gybHVtFe5XCrQKP57ZvS92zLyraQ6aCqZqXw",
  "key19": "48G5mnn1c2tdYNfGj6Dt5X3u7ZFSpWEgQab4xix7FKeRT4M7Znx8w4fr1pJXdqP7X5q89Q6JdgsRk8Avci7mSXPi",
  "key20": "4J3YU2imJFbf4PFTca9ViZ53TWYege5nL9F4qRsacvjGGixz382TryTLBjLAXfUy2N2XURhqhoSWR4ia92Jqipo2",
  "key21": "4EK6sz3opAb3iaAtr1NeqJe2rVteW2qaJUmKsvE1Uzn7FLhsqmGn5EJj5u2zB8Npy8uhuKkgGvJEZx9vioCfwiGG",
  "key22": "5v4uFjtVrLq7ZR4WPp6CirX2P4GoJmQjkNavAnZBLUpsSeThxCvH7sV5Ja8C8qRhoNddvjiJZymVMehc48xvdmDB",
  "key23": "42tH4vMFaLEoShtJwH6ydEaNw6KQhLUnm2u7D1fwWgF2wMu6aScf7ED5y7savBXGVDBwN9XA94wCSUqKSFVeajZp",
  "key24": "46do9u3kPRbpCx4BvAmFYaQWPa9LeQY3Z7Y7uYnGZF9iNxAyhwWUNvoXgpmRE5ghQfrT1FQ2tt19sKPiMeCWfGAh",
  "key25": "2mUGBRxXgoZJ1ST7JyFh124y9oMbzw2w7cb3hukbw11a7ZqGYr5vyvChAnK89sZ6W2f61uEyJEM84JEqeVsG5x3T",
  "key26": "iwTr41kEqTFqoiZb6cYEXyHPwNcZheirnmt2KCuUd4gsie3KscthgerEJcrPKXEK8fJgfaNSyYpuAJVSbKjiF7i",
  "key27": "2LGgrXwvFos6Le5HCePfGExphc7MDvJymnsuQ7fcdaEwVZA8tmU1EwyXZZXxQvaTUv67jZTM4ssbN3cWcQUqmgzS",
  "key28": "3bXZ9tzTXHdyGe5up4NsdGP1bTaLj6ukBRf4gTiAbU1YbcuY5uThvqu9FBEJSvX8a4E4HYJSQXoaSRbDdUqe4KA9",
  "key29": "YeDzevpiUbXnvBy9AJ87xDHiUA8uWq31AVAHdb8pkMBozg14rrcs2hC2fHtRDMj6YtME1rjcZEJNW1NMTUKptpr",
  "key30": "2Vy7ozKRzMzNq39EngfNzpBGdEj7uSiELmqejH9h14axpWAREDuhrYtAjseCvovUMMLgVmtbBCURz1nhPTDK6oKn",
  "key31": "2FBuvRw9D814DzUGEibzQpzkXngwiqmWXGwE2rLcPMTwDTD5wGv5QPV2o29sSYYd4LWAJn5ocfyazWHqRkNTQ5BV",
  "key32": "5BNhiU2JKdrCj29FdBxw8z6GHn8WiCDjBNz4zgQF3NpmfaRtDeM1mboVKK9c55ugzwDiWENdVEoHDTxVScXtUe1R",
  "key33": "37SoWjbs8wY2uEZvv28KT35VK9FJMaNHsGRAPo8o1RYvz7bJvU9QYn7U5HHvGp3UWjZ7wEmv9s29gbvqSrnPAHs",
  "key34": "332cE5FVraUvGLKWuY6tTWHfEqGCywnUZDxEFw7yT7tUFmwkK49tznYK79ex8r5FMERYD558AbgoBP99wERY64Gu",
  "key35": "4KTi8jJitncDpMpxLbhWr6Jz9fcMh4Xegy1W97mfqaS5DDS3N1XRLuSjVrsgQWyPn65M2aa2PbkjeaWRGnfmPPFP",
  "key36": "57vdw67YVxCe6FkWtJn4tR5TPiGtLP93ABREkNM8kfDRmsXETdpbz1irdEXbM7ERPUusSiChMJDmZ346uo5YdMb8",
  "key37": "5Xacz4nVLm6T3FHABewW3w7PDsEPAETsPnpUJpFx3ruYNUScfeyEUM3ob7VaKKPfk6oJvXM4YnqPTAhRQ6RwCxLj",
  "key38": "2o4uPXyA76uU2hRaLkKXzjfmHg7PL3Eztp62pHDuXv2UUpe8HJEwZUjERUEfgAsSS5pV8jmGTFrTMni41uniyBch",
  "key39": "yctesBv9ytKQyB8e5KRErKtQqjnYhHozxhDvTPdDy3yd5JveSU7FWKhdqesSmdL9BiPA3fiQK2VA5cfuPYEiEYa",
  "key40": "5thfdP7mUEaF3Gj1ySJAaHmpb2CSiDsNRmpnD9F1V6QKo5uj8ACnnrDMPCz7hNhFwQsZ3H8nmwptE3JBrT3u7sdr",
  "key41": "5xWhgkaSvqVgoNqDd8gqyHY6t9YJJwbfYC8PjqeH22U4Uz8xU75SZSa27Tvn1T3PgRi8hGLL5i16s3etVegJ7Nc6",
  "key42": "23zWpguUnKHUZPwtNVLbUZUKz36ULAbxE5kLhKXEnSR5tUNh4u4uoopDt6FcqXaDJWRzMmsy4TDWnyQcQpkyydGa",
  "key43": "2rerb4PBQvjFUmK8Ugs1YJJuQNhpYgJJT9bxC9YPqmhnUkRoSvdYbgimuE71BTRefR2BxEutPRrNGyVDFxdkZMTF",
  "key44": "26BVFb74XkFTonwBKs9eVFhkqjb4u2qKDPangzWAUyeEsxW6y3MCVC2jCRxH5kdJDeBe4FbBj55PpJ5SbU4bfenj",
  "key45": "4WoEwZbhqndD47YP51HoHt91w3SP6gYiFLdHPh9Nop8F8PGDmaYfjHC8YD6EKapiTsdgUxUYaVLSP73qpZU6Y8xQ",
  "key46": "5jX5wdks2SNECbmywni3pnDYRgovZcN9G7pRZqbmovNnsrhCxF63W5kRFahJZxjrzKLF2rf9ExL5dbgxDMhQEGAY",
  "key47": "2CRpeCGHN3yz8n6sXovgmY1MJXnwuqYgXcqKeY2TWzj5zEw8R8dWhwCEqvdAr7sokCMa3D6AGvGCcdGaGNqjCma5"
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
