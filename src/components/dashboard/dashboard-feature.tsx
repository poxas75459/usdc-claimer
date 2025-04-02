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
    "3adgj2e95LxJeTVFeyLepM2RnvWwrs1zqpCNTc3b91WQhfx7PkwNRH7f5qN3UheBXWvfaoMCULq7FcLcxLtfDj6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h3DyKtYxesUkmrbGYU1h97opEPuuhtYJNpj2EKjA2q2Q7QEByL1CPhvEpTSuhHLRBRDpWMdTUKTTC9uxH8U3K3H",
  "key1": "2CCxb6P6WhSSm9SUhkBtp3DHHXPjY1vfNKuFPhA2VTFyWbJPtjugkiEmizZEZjbUeq3nkTM9PQU83RndXyYjtZwb",
  "key2": "3ZFxJasPJdFMe8S28Zsnmr5D8zj8JvpdcjSFd4fAUshHDRWy6c7As8YC4jZa8u6SZ9811gzBtrLr5c4pGcHHtMFe",
  "key3": "BD61y1RcGJthGjminT2omwKpR9ZQsszVNQmHAP7ysZiktKT3fkCGfLCbc87xH5Ubnjpe7WG6hzyBFhhi73oe7RG",
  "key4": "X4MkzkkvGuadG3CCULmENBuaQMMMTVRJeqqMxMNUQzgoA4XCAPJiZoY2msjdYqANepdKwXnu663cjQzFdZeeKVz",
  "key5": "3HQtjRRKeUWT8YSKG1kep8wAvGn7MdsCx5Un1u422MnwQA7FUko1QHrApCX1K6Y6v7tPozQHHqpcFNHuMVwzWmZ5",
  "key6": "3Cpbx6YNE2CKEgYgXRdr7RQzSsqY8cyWB5DPJRZjhLysPzj9ALykncDjijPyMqwd8yUFWos7gpF48wwLXhzMdMKf",
  "key7": "2aQk9HC7b8zN2tjSA8C7TgMYbi6MiqgkehposqMKgVLc3nhpngpUfJtYkWbU9boG9qMTq1ATWerSEnKYbrp4wWq7",
  "key8": "PEG9KYJvfw5nV2q3nbuBihy1Y7udmBdRkCG5xUof8N7okotXVnBdLimUEeoT83SWHW66uSJVM8XsQPeNok3D5Ss",
  "key9": "62o9JoibdTmfgsXgTcyZst8yC6KpZ5yZkyh7aDouZm5U2WAuAnS4uk8pmzzCQBaT4owdV9Ju75Zbp2zx7D9cyxdJ",
  "key10": "3vGaiQtWPf5g5X9ALMjCSANckPFrU9aky6W8u5jfM1uHBycPEFp4Zq7xFxyzLJ6HQSWDC1RiH5YBEeJRH4bWfwV9",
  "key11": "59s55FfMyV4gNfVYgECikvNqtWpGEWBKyF2H6wFh9La81srnEKh6gVme119A2FhVpvfFLJyV9Roh6mWL1RtP6xcZ",
  "key12": "oGEhyH9AfaQcNdRqWQy8Bmk2bu67BMn6vi1mVYE6RneSB471ksN8seRYorzDsPeDKnSnpGmCRkGhV2w76JaGfxt",
  "key13": "23BAQUcqtUeqs5aTz9cWX8TCSya8HnJKJwg1H4g4f6dTF6aQKLbtGjAAe8jkzTzUrigtig76DF25SdQRNGM8ep5M",
  "key14": "29Dok8hSJuvqNgtbq13VDKMDrdwDmZLhEJK39DD6yuskcU7n96kZvRRAqmSw7L9Ho187dHJPxd5VYz3A94mmBTCx",
  "key15": "4toE4rHJE2kiD7fRExQXZGzHGk9se4KHYf4uMTJKgQngpvrj8XbaCx18bJD6QzWsfbDPGK6iv7tAa8VPezhyUKdB",
  "key16": "4biJhKJTEidm6GnGkE2uBaybqDNtzramnikzJwHns1KDcdYoYxewKx3hEEWV1BSwg5qUUuxrUvJQSrDgz7CEBcj",
  "key17": "4oEDbEQAkHSeoGkbYfjhvUhBzFfeRXz3Vtk68biM5NxfS3Dkase52DrPcfAxKFaRGYpfXSvAiyv9d1yFYxPUXzNh",
  "key18": "5Ju3CEjGAyvUnagz4Sir44DrPL2y2YfzbnMiLt7PPzVS2brzCuRLLk59esq5jtRcNfoG1Jmrj9xYnZsaveS8D9SL",
  "key19": "dEs6XQK1VXJBYZ9zqQaKCyKwPF6BzYrZVLTh2NifhDyPJyeNUvfXfi2iBR3XECeHBpE7URC7BXjbxiazJLezbTc",
  "key20": "5Cbz2QwuPvuipsRCtdSDn8pVcXsCQuP73gHdaShHpkDSyoRR7HCUVypZcEzyQ5EQWqijtp27LDrGiYfoovJT2qpV",
  "key21": "gxzPp4WqSjQuTimeWbn8sE6jiYqTuQMQ71nkVPkkXSXeKquhfT47Mpk8DaJXzFae4GkfEPSUBpFDvXWYmQigX3e",
  "key22": "3mE38FTnMBYJUvojXH23kb6QsjrVLa7p7rsWXBu14HqRvzP9jD4tG5aAo7AGWyrWZqJeeSG3kt4whP5Co77DXgjL",
  "key23": "46fxKP18P6YTbufR1dkAsNNabdYwzDKHMDMA5tFcN18eWYHFZQtsqNrFy1zboaoghoPixKHqufpGCHVbtGgLMAXk",
  "key24": "XWfpZcZcKrKQ2GCcyiPgyJvHGQkZV5VQZ4T2nb7yTC4uRumxhGVa8w9FxR2HVV8zoXm7dvKvwAiN97rxfRVMKD2",
  "key25": "2qUkMG35ULZu9EBBy6kma2tgZMmcUwqgBvRWGt7yg4VDEtUgH7jNbhKj7iGirmQ8dDZD5SbZkFUqFGyWe5ZJVDmZ",
  "key26": "TyezDRLJJwwtsZaXQRdNABKN8sAHUvetV5MHPnH1pw9jMxByVFicu5wk8MXUQWePuigZhuyzrFqv8tSDDpUEp9E",
  "key27": "3y35dFKmHcxDVpfATy12SuYtGDDf978EcJC4HrVoiqYn4ychdmAopzB7mKUCLpcobzQTxM56kx7hj5hdmJG5Sjgk",
  "key28": "36KjisjsYzuvL6JMwBFu5uYAp1XvifoAWDvjrekHj9b3oKSTxcCmWzG3fmWyXQM1HRPVzSGSM3CubBpjJZwAwWy5"
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
