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
    "kMXT1VR7M4m7nYBBKzN8ScJbP1fDaiBGKiRyiZxqogdWLETkTwm9EKGydmbpKC73TyAW3q7wNMF5CSVSnDc1TBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ct4omZVeh1QViH5jj3xuVrbM9SCsqEnKvimWzFoi5SeRcoHHqkgmSxa7Y6a4giCjDUMUkLKQo7qgjihWkWL2hLS",
  "key1": "63Dp76nvJgXPcCWS61WcTsVitECgzzUoipynvL7FevY7jj6UR4zhaPidBo5xBtpu6AQB8vPTdfCLUaHpjWypgUq7",
  "key2": "5JDrzw4fafrLGfo1tjmkYAKQjtwkSUr179vaXHsZpJHteMzV1hEBSY6AnFk2GtFHaje3g77uMTeTs6B73B3d8Prq",
  "key3": "2AYBpMg8fXbpoDM5V4fugPewnTzVzdeDr4ajokYvAScT9PNPUEngpL5fR3aTPVCugn33mGcFJdiFSu8scmthNX6e",
  "key4": "4S7E8UmXasN4277Bi2nnBwQdZTigWgu6N9VWigbUrE1awYbgd2k8kqSVRWEsxJBaqZiJB2XEH9onm4AtpLcjQdFR",
  "key5": "HPEuxcsH1YwMJhGEpXxXwMQqKDP18nY9kqtqXa1BFb3cpKCiXEWxVKmBXVz35aTkpLimDNWvmPEnXEzRxmV4eJp",
  "key6": "4qRGu2h8VtvrtimWde6htRgBHdys1NB3NBLMvTLE74qSAJjasuFqqX1hd1mPSbD5WmZrKrek1yzbZMVZGG2Arvg4",
  "key7": "fQXfm49RE6AzdrQYtxKDqXygwmxA9B3cXYTnL37ouTQX1EDwqrdi36z68ZkRdU1edafEF78P8LmnpxNuK1WWwi6",
  "key8": "4YcqcZ3f7TrFYwZjExEb3FSTKv7qJe1SQUy68qV1aZ4rvtBGaTwY8jKHoGHnEhvTBjRdmCWqnCsooibjPF1yABRe",
  "key9": "4FcYXj8NcnKoD7FUy8EQqyy38d5uQgjjMyWqSWoxK2nJ9KrNY567aYcUT9PjSLhPrbT46Smsm8Qtk3E2wRG7wVYa",
  "key10": "4SRKkZghYWfuTFWuptdcwV88eoMwNdBqHC8MpavAhUHx8X4NkTe3nqu5vfqShFAUFkXCpT1t6Noz4uGpTZ5i8Moj",
  "key11": "529LsAHsf4JteCiECQYu5qJUaLejnDwokNQugGUgSbJCazusYXM5F32K9AUhEwCEVZWvEtFgQqyHUACE4Ga3ZMac",
  "key12": "2EcKMTpCw1HqSjnYBqvqBwGK6DpopQazNVycgF4vDMGduTV4SMbLetRuNiXx4nWCxrwiFAD1eEEkHfQr1x1mLQ2v",
  "key13": "2GsZtkr9y5kdbXoe4KFuKtivRBTZDMUTahRoQzezRaoFB9qr1dHEJnyKZMeFJJz7QGinhA4PSkEqtBXMq1bxkrUi",
  "key14": "quQ1sp71p4p4bMy4dTM92N1aJYQPBAM7NKMPGniL2EtKrZKZnHFN2YcLDZ2o69nDAVHYQdRC3AJfdwfNz2KGiwU",
  "key15": "eENBmrUVSFVrwPSQxsumHZAY7JKnrzFFVDwTwMZ4jft1TxQAyUi8sdYqeyDdKPtD3KyFS7sRyb7rrRMfnV2cwZj",
  "key16": "67UGu6hwR9u5RKBEJEx5DecFBfsigTyVhGFJKmebHMLBvDSeEK42imxYbWJYRwYrFVqM7JhAX6BkMD1sfTu23thy",
  "key17": "4e5Hy2Q8SK87YVmzL7cBek4ggpsaZTMWUaNb7iyQ2w6Ep9pKoXJi74CZ7XgkRRyV2A1veFzF5VrmK8LBWz5pYJrB",
  "key18": "3AorHHjhYV9VtHwhnzDnZvSuDYL7qaAnQDruQ4AzpM1fMGtfqmkspehrVYMJE1pN4f74xFv9cw7xquxSZq1q5udp",
  "key19": "Y6jsX63jeymagfLVqCjRRJmiZTtkKSQqxkVBZHgc5uopxNRGx5CZDSpzEcQmF5Nktau9DNWUSAhUV5DPNCErvYH",
  "key20": "4aRA3aJbYM2TNMqEouNhz2KeX8eH2X5x9KVcoTgExVcaNxeq622KpNUkSof6A5qfy4MZsuYiQesc2a92AA7ou3BX",
  "key21": "wiWqkPuxbLLagzD8av2RtZrLpvW7LLHLVxDXW2ee7thLDL8V6Gi2acHSTDn2qcgqqx6sT51KhPkuB9SeiNEavZ1",
  "key22": "b7HCGQEAZrPEU6nwCd1yQG4wUsNWjnTLtSNbbuWGnoioccFhRzZovwzeNKcqhobt5nVEr8JWCrBsKFAR3uPuUYw",
  "key23": "3eY6WXYpuZ1zP1bzXFs5it74ehuPERW5iijKGXo1Xecok7Dmnxjo56iD7d8CN1CNddhQ9gQgWri3fVe7fUf9aKhT",
  "key24": "2vKkEmu3e4oKXnnphFxzo6HWMyuUHYBThXjvenrQXjNFMq7RRwb8Xtt3KLLUBQeYN8g24aaeFrXc1bgKJ4adWgYU",
  "key25": "28UoCv4cWAnNPXfEi64KLUeN1nkHFAfyVfuaosBob4KVcQQqtBRTTvEs2HisbRqZMAn3nvZS2VvPnb6J5ocjydxk",
  "key26": "4RbEUNB4krtkYLdTzZzPvoye8kmh7YHYXv9LS2SSTH2uzFTZQaGBWWFTqHL963W8o7a4BAgeEB6jiNhoDUcEKvpF",
  "key27": "59CeBnGwc4iTimfzsyPh1koaLWDoDnYcKQSBP1mwisDLM3QvVFUCZHcrgpijTV4Rnk22oCdAuwuA78LgGJSsYmFt",
  "key28": "3bapS4aC1e2tr5btkfznFiQcZHM5zwyN9vpoauutsv6UjMUCFpVYPRHhutBdPc9S47LJsywBBoPkVkQgfrKGLmAp",
  "key29": "2W8ZWQzMfhX7wZqroYa5HMqTgUCkdGtPdF6vUHeMBqntCa39tvKd4MKTm8RrnzoyGcdvPeVx2iAgTVY6ic7uABfC",
  "key30": "3e9DyQn6cs75oC1vBk7zkqFHgsnoZ6nVYSH8HBmnC6JVdyJdaDEHut9si9eg2qBCsT5jMFebdewXaY6ve2UfQxvY",
  "key31": "5jPW8Mw7uuQvikDDWee3bBJwYUFpfdQpk6g5UU22YkxRMBvPaEMLX5z4G5r387HRr133ZfPUDQ8ZnBs3tgvdaMPu",
  "key32": "5x1vCxephaioxHEeePFjFPBbthpPmt8TAF968sqeAEofSXzL9R5cnKfC8cnWEihVtm8Doa1bc8HW9QvJPTJKzide",
  "key33": "4hPEkhDhasr3g6QypXfaJT4b3Fo6AJzj65wr6eKU3JJumUUzYR56zCKsKt4gx7awJZHgPcJaUZP7KNnARB9h8sWW",
  "key34": "2QHiRfFRt3XH7oJChNmfXtRMJr8CT4pggm7CquDk5CDtREg2QBhxJkc78qmyf5QZfcq3ECxT2D5ubhStGJUuP6Cb",
  "key35": "4LL8Pq5eb4MUNmFVeBNfDppRdwJvANbZXXRxf8y4dgci8eZimh62L7TeA3Df6fqazvyk1xknztUbXEru5sUvwUJW"
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
