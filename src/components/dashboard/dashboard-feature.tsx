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
    "3oZzj3Swhw6GBt99wr6fNuYvRebznJ7CFqkiMm4Jyq2MuGmF57Dqg5XeWagXUbwq99T2nRiqtNWQpwaQLXL8oCDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bajSNR5GFfrENcdNoP7igqZaZkqgsCu8T4Dja6paFdny5YuMKtSaqKnodPS2TKeon8d8vjN9CtWLTyZiqr9GmkV",
  "key1": "KtVgKLhWhPy21fYduvprsVh6yTpokowpffQDM6qbrhuAkGS88cgSmjbUjrTN5HyfLX5sPJPD5ErN3etEMeVL4Nh",
  "key2": "5JoVXmseXsQS7KJ3ymANzsB3XkgiqmBzpVbfnptgRamCL76pNda5BCZQkPUiahT7paVMvyLKWcy2ipWkVtX4ss9G",
  "key3": "5LQ54QApWafyuN4VPtxBE5JsJ8s1nEASrWnA83vjrjxY83J6suswJkfWZDLBWhkHmoVNv2YcGTy3jpu3ox69fzpr",
  "key4": "5qkMathu8QU7Kxu69zFHwiXmNsaxrStwXf9ujUsgSfGvjX4fUWgw2o5oZuvWpAbgdPTkVQ8bF7SgN6EuJaW7p2vS",
  "key5": "3JueU9mRPkG924Jck3R94szNn9RwZvTyDreR5Bn1X3QoMLkcpUZ6PSo1Zigqza9YffamE1bcJns4vbefncsL1s29",
  "key6": "34LF3Lov8anUWy9zU3QuQhrUW89cgp89UUhxHTMGU16rLr93Z9Mdq1dUKWt8jPG9EVjV6avbFZRW4UgQYWxJEQkq",
  "key7": "8Atn7ztPavosh6jVGVaWW3GocebZ4LbZT1B9suJXDK7UnctoAXrDe2oYCkoypbokdooqcNmr434Ee9Lxnpv19NN",
  "key8": "3LSkHPuiuq6kzFALDBDrvtBVQZYF96fEMDJGTZeuetUt9LyufrodzUKVXa4og8NqUNBUrc5K7iiCf49dm35T7DZt",
  "key9": "67bf3ExejYGwAeEe1FhzWm3NzSFC5Weu6U8w7Qpa8K41fCULD9anoWw9UuMr4jcYTxQmVm1YLnDfFfKQy3PcLBcn",
  "key10": "2HYfWzSaghJ9CxFPLtyeABVQVE5V57RVahrdgPZ6whXfvX972eqiQYUvuyWbQngJqWd9QTpaEEPyv6b8dLayDcAw",
  "key11": "2ZEsegJaRnhQrva2hSjsG2mRR7XLAFjusbYNSzKfCwa6oEBxrstX7Dtq8yXwyrgH1Dp5RCKoJjCoa8T4A5tkTW9K",
  "key12": "2NszC5phUXZKxtz4ZkAUZ2j7fmDLd7PRjm9P3qtx97mJAdY6k9dJHMUSSVcjR8pXmGe86XE1zZha9puA9txz2VNG",
  "key13": "3YFn3Hsg3hXhuKLpQkAACD1sdhMhcvGCnBhoagNxJDrmrLFNbReszxEMfVVNatrNZrFejFpxN1y5ZiVen24twtas",
  "key14": "NfRgovtv3CemUvyNBtQkQezyDfMkdkfRiJAbQ3eLuF4NZYzFsZRnxNjyJzMwVkjmBju4nPfxT7VW7c86C7UFbMy",
  "key15": "pNjZKm6GqzRmAF9wxf4fDhf97z6G8XY3NtWLvZNt1Z9wjpzcGEq9iqZh4bmBHHv5SVqSjY4H4V9NAsvA6U15v9A",
  "key16": "2g58Gx4nLH6qBKeyawPR5jnxBT1N7X996UEMA9mcCFa7aV9EyE9iaijKZmBsKQjXh6MyKb7oeYB2DhDrehWEccAv",
  "key17": "4pMn3Xq4UaGTmiAEJ8zm6PiUJhgRRFYjdvnvy2FY82LzbeMqpk7QV8z7Qj8tAr9wbuJjcmXXAkbmPRKSxupphZ96",
  "key18": "5Fowy1GB3vzEw7K3LpKBSQMPEMJU9cxRRgbQaHpztVpfSb93SfPkNGpkzyfbhmADEX3zS4KKiQWWxVgzXLBZvxRe",
  "key19": "5M6EVLNMZ18LYgrWqDnX5yS68J84Ptix3KiH4HkQgh9Dp2bUKqfnzfWJpUyyJkDx2dhpcPKJFeeSUf6QUaKJsJt1",
  "key20": "5zraHTq2CTNMW3rwwAbMhDU59e118VGPWgmNUQR2VT9hS6HUKp5dSczoEnBcMvXZgAegMAZ8JR36wFVc17AH6Kt9",
  "key21": "4DZV3XzYd6K1h2HwENbefN7bDGPbn9Kxur2FyxpsYFmiyjpWXw1UZYodN74ALDA2fjvKQA4XGvbsMoDf6a9bde4J",
  "key22": "5iPD7v3Av4vw4VRtoAE1iZNs1AzPM35YHRJpXgTxbWPDapc9wgAZj3U2Uk1zUnqgojfktje79apq3JaVPhsjtai4",
  "key23": "3MYzaAHUmoMVd91ymdrUQyPGZFPd2iUNtouZvnA62oUHqryRdR7Ggb69ooXnATFe8uU1LrotgkyaaKpTmMsQrc9K",
  "key24": "44PFdfxMMns7ufzMyfDiqUmsi5FJfMtXVTz4XDQpUC2C5oi4eFJZkJ7VXsHgF9JNwzUXsBDTun3N6ftQhJ1gB5L6",
  "key25": "TxUdAtCDYbK7BoSEZoJThEeXoQvt1xEVQ1o3c47uJe7qaZoda352jwGNLugAdwURqGPDyFn8UuXECUyprdLVUR8",
  "key26": "5yhiJjCQgHgZFzm4weJBMwbvXJacA2owDeyyFMAo3B3zi6WY7Ryfzd6D4iegb1eFb5P2qXtoLUwLwy5ZezKTEkZb",
  "key27": "5sEZps4JHa52SWWRrNGxLHZSzJ2hCqxsUtMMvdNqitrFUNBfxemqLUXuWK2QkXRjwH8Vqa5KUECEvhDTbb471Hh3",
  "key28": "2uintPELVp4YQHPk6HHiATpCsivy6xRTWxKogfzX91ccorj6v7LZqEoYVtrtpSGQE4JQTAvKVRAaPkgd5ehnZoLd",
  "key29": "51oyeRM4wT1a7QdQghMDw9RfH9o9QxvzwdscH6by9VXhthb5cNUp5MkhwRoutdPr1oVCYvwPEQXesQNgX6MVJCz8",
  "key30": "2S6pqox1h3LjuobCBLm7Yve1FxCJspKFguVqFqDnBmDFj2jirz2wZBVStEaZNPkk9Z2igJqz1D5X6W2mcNLo7zAe",
  "key31": "Jk83P9V4w1gAhgRpn8KFRPqnVeeSEWpPUuLZbqzBd6hpJNxDBQJ3Di3Fa4ZtNs8Dmnjq5PtZFNAdgsNmMQthngo",
  "key32": "5Uyyb3iKzMorC7eB2dE4PUNgM1KQn7V4jhmT7aR8ituLUbBVhRHx89aHpes59ohSmPpoLRLB7oRXUcLmoBodPxjk",
  "key33": "3FVv5S6GKimfqo35TcnGMC5o2n4EDH2gVpWVaL8bN1p7NbkGCCJbhsJzxVZuoeAk7ui55JffJ6SLkr5eoXkNM5m",
  "key34": "3Pz6dBV6LbmAucejSbDMW87Z3okfTnaUatFESjcHNyUjTdaLpRMCmPPs2NTZttZ6viEZmdYEvc86bT62o8ujCsWG",
  "key35": "31dmqV749BRVxCb7auoEmPmfLfohwxzeMEX65f5AnGvaESPYp2nqtXjhMXArj6SbK2ArE4wya3VUgBUDtV94X1YJ",
  "key36": "4WfJpMZXiGBjiUKhURmjgWMMKsLgYbjwMV93MPQCpJ5TttL9WNeG1EfukXA589iuu52g7czqFqh3fbSUwTtiTXnn"
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
