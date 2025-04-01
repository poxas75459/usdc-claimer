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
    "2HbtHQUAHhqNcfwYPCF9Ef1vnxbex8cQGnfZR3NuFTdietjdyrRgFmX8WqmKfzNMET7MNEHLBVdjLa6eL3RDtPW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45USVLQyPh1myrSamSp8F9oeB9rv1bU6PUNUJhLAk8q9Evd9N34vEkJiVkczuZYeXDfn3DBTuUbTJXCz8sfXXQSW",
  "key1": "3NnsbMmCtptQNovPTeAyUTqDyGmnScaZgMQSEZDu1Cfh8LNNjCoabdzw8XKaGjQZCtMrDdeBgpm95MZQWckHTWwK",
  "key2": "42uUQVzs3CRnmdRvv1mUNDwUBNy5ezjAUBSdANPv9JTR9fTPCViHkFs5BAuWfwaRLT9JiVmrYC3umdVUcovJ1bAb",
  "key3": "2BkQMViH7FJBF2TG6KgKPSdAxkh24vcST4HgozdBuWEshYxEzH8rJhnct3LmX3GaXMb2c5DZeJGYuPcesx5J5KuR",
  "key4": "4WCDAGJaB7bNv4Wn7Wg6m6qmpi3LaecENtwNb1boAG8gehoAs2QLLZy3NqN4oaAJS6fxM9DvPrs92w1SmQVTobmA",
  "key5": "5aWSew6LgcodkRKBSpTCCbMJYkUrMrABfT1eHdDbf5ApLh2tLuDuMwA9yUPb7GCQmzNqFbWU5VLFZg8DYsDVntyJ",
  "key6": "ZAyMyqpbmt75eyErDp2fNzdT8kq38GndYoxCnq2PR3gTzZSgrZFndT7ZuGetMrcCH2Y9zjuhNYUmkK7RcF6vxyi",
  "key7": "2jaBQhFwC1tXSwoQPrE2qB5FPVhcDVpRmcrP7UkkhHKKKVH7r8WPFnQdsQ2o6tMFdmf7BQdshr8mxGi9LnmCFPUC",
  "key8": "45pCWPZYLXjhHR2Y1YCsPZSqpnqitxbFoiHNKsi6wQiyd4D2xuSvgzg47sLAXW8nip7cpC1bHNAjvJ7eQQAYW7YR",
  "key9": "4eZsD7o7zePmHGhZjBpmvxAy689Di6o9KPd85cRPKaZ3vQPomKxoVAWDjt5YTezKb87dUSrpytumj4TKsqDSZcqi",
  "key10": "4hrte8V5JdbiMYDYHvnscRFiNGDxamyRWTj4GscUsTwRvSyRAvjYoxKuvBrK9ttDmDjP1EUpSPgszk1qrqUhfeEB",
  "key11": "23XaELpY9N4LQ7Nb2PNXS4U4ZgJrPeKCP7vDUxQHHaypCm5v9YtjPzyqQhGiLsqLTwpzCorYe94n9VbdANHvKWSN",
  "key12": "3heELxppuAw7pEGBDNL12W8pVRQ6kSzkFiuxmotQCBM1nqkBNC598TEZBxenRNoe7qGy95ZEMjp3uiwpoqtaFbfq",
  "key13": "2N3tbFRTnSigFEparopJDnpaznGFyxhTmBhADT7SvcMBJTvYQ5nctbCukG4v1JXEN1SJ6M9ZTpLL1mbbLVuNDzVy",
  "key14": "2M9N5bAKjxotnTpZvh1Qk2UnXQFmKzUBCXbRB4RpFz6mzbvTdV2RBMuatGwrVE6DgAx9Wm92msn7YPizT2oWXBWk",
  "key15": "3xiBcFzoCymmrcS9nicN54TwXKtcEdADQeh8tBiFd4Ewg1iYAAsfCa4fUX8iRbcwU3yHQYfpLNgGAt5HLwGaDBCJ",
  "key16": "2PM38WsQDtQ7CTNeBzUUQ8dBXhMkEDwMJVFHVGEU3umbaeBw9QaYDWVF9wt21fCQnQUuRffCDiQDB6tB4S5mkqaZ",
  "key17": "2ph1dd23Un8bCSG2jz3xkG2EerbrxYPCn75VknstJD2esNgaxkCeUv4hHC5ZN84hJnXCP8fFsU6ZKXh7Qjn6EnkN",
  "key18": "3LkVKDXqnsEMAQyfUm85DHMoTnCP3EBvmG2hX4ZsFEEjVhwsW8EWmLY6KLf1QtMQUgTJLVZfz5Qe7TULWbDx3kcK",
  "key19": "5FkEXzAwByfTLZRpaT3oBV8zAiYLLZsrNo69hpdmqQm8LnNt5ZVig3kPFqiziTY13Ch7xVicugm5t3fB2qqNxEFB",
  "key20": "4LGmRDcPn8A7qDCcV7x93JLNozPbytMkkuCFFZKDx5LHfuVyxUyHXsAgYcDWuVEAmYw4K4XViFARmgwCgBe1pkMP",
  "key21": "2A43FFHXfWpMoMKNKFGPpjUCAiczhQyfDC58o4xepeCm6FbTCY5FunXfD9z7T6PgA5iCxYeLU4H4kpdh6W1hyk6o",
  "key22": "ncgFfqmrRMexyQ8A3iubdFjS4Ktx9gbKLMVKJ4JxDNNNYRTqzkQiMWNZpJ6egBmBZjpUYS8kXUi3cvzsNH4Veoc",
  "key23": "5ESm1fSg69HZHqVF6LCi64VSFwLxBNG6ktmhefieEXW2e5xn2kMdmGmLmMkYQvy9HCUrcjfsto9hAtqs1BwMMRMA",
  "key24": "pf9Y5LWzpuXoRRLTzVm2oCvscenMN86KjDQfLdVrLQX822GUq6aJ4viFcKqJGKjFAApdUAHEByCsTGpFkhjKL3W",
  "key25": "4L32Fa1pHF84i7TBMHxP7dcJxuYvBm8XZPX6kxZmW7g863hMSfMNAhBeGRE7TzCQVyMekyM2KsztQhEeBucgSKVJ",
  "key26": "4ruTLk4Vyii7cYEZmgmDA1584jAEFJnkEk5iXnfFbxvT8fdnsCtQNAAj5Z6CwqHQCv7xukKEvTxwm9L9c7jfiTyD",
  "key27": "3ZE3FdPnvj7kjdggQshVYrHBeEMjhtSVThQmyuNB4PaT2XiVYyqEuZ8TsjVcQZENuB7wahsUVJgWKVhjL5viXQGZ"
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
