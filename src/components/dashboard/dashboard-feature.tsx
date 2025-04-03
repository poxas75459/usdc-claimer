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
    "2YBEQgLbsH7v4NuiSbkkjG7Z6GrMo1WuLL3xYEPyGUZZKdhW7YBz1dAXZYQdQeEnoFhjwLT7mnQWEPsNSvAERP6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v8gENQ8ieDYiPBFUFGbjj5QHV1aiC2Y7538xiZunqEsXW1MJSrCCwpcHi23Yyid1R9uWzgBr7uwE9mu8HP9gLeb",
  "key1": "5nQDmgEP6KeWoJNBDz8DiBPrRrsRZuDXMWXK1SziEnxWB4HpnZrhkUmGE5zRZW95qfNETdBzSFuQajpTUw1ESWLi",
  "key2": "43GPSUoViLsqTQVtpVEHEGVBg2a4CykKUuCE27W41dtzEDy6dZKjd1qrQJCmUhAHHnNNpW3QLHHg46M8P7QWZD4y",
  "key3": "2rZ8mf9JaDASjQpqBc6zwjhoxZaQ279npjV6C8NCR38aWm1Dj6iHfkp4M2VUr7ydjAGcVn9wLDgg5MRveGt64Drk",
  "key4": "4xTFAtkXS6ZUcKJY2qErMk8KfgBurvx9vkPx4ALxZw5VeKsMGyJ2qxuGwshSwACB7brkr4wdmkChq8wLfwNwpoVF",
  "key5": "2m6gBANBRk3yB6TkPGRQQu1XgnQTtvwsj3XeyWbsHpSD8CCTvU4h6xAFxj3o5gw1nXCMjD4zYS6Efrt8Qmemryth",
  "key6": "ZeTP3D74W1TXeDWxL4wr4uFRCAAQXxKA3n5M2BKThXohzXfks8MBo3xpFiThCZeLpw7p6vwe6hbTny8evBJjxkw",
  "key7": "53ZbASjjf9aMpUatGY4EEmFkt3gZrLqsBNGLekCc6Ef5qmGk4sKL3V1S8C3JL253gfcqSKPncfwojSi8o1iMS2iz",
  "key8": "3iA1pfmKeHMvprBo5QDmfL3mmc4rUh7LWBAvwv27Fp5VhuekyJEiVmrF96eNSDMWRv6M17ygG8gS5s4vHSkFUmT1",
  "key9": "5yMNP8geYe683TDgSGz9Xr9w8SKXTS9KUzbnUzc2Cfwiopm8juYV3TkYop2B6RN84qCQo6c1owvEZ6wQg7RA4siy",
  "key10": "2dz7wx9HCeuDUdBFAnHPe8NxR77TafF62Dzz1o32V4X119LW1DW2TuMYqCN679BE5uGBzn4wQV2Bs1yETRQxacfT",
  "key11": "4NnRKynQ6FYmYHohm2CC6oLzkE8XHSqUe95kcXL1n72pdXjgW7UmhuSQ8ekeNkFzcN5L6TAwN3HtVofnquBmqxTX",
  "key12": "UKVNwTSN3A1rqCDbXjeRTis7ptPeVuaPftqDXHyrEfLz2HvPGca2aGbp3p5m79nrXug7AcZubURaWd6SDFPG3Bc",
  "key13": "3wfbTgdkkHWGDEoMV5G21xPMCCvmZBjgJk8Br695z3Haii3bRmhFTAfR5T1GZUhvGCCf56jHfZNffG2dpQCKaBHx",
  "key14": "3W1WCXp8rySNQ8t4Af8GCkaCfwJk5pC3AviPjpRgCDSmuVcQ88mgCvs1PEx6GJSdHsi8LRAhKsHxxwMJvqqgDDtx",
  "key15": "5DGZeX7YuxqfVzHegPJRfgjTuvjWBqfYWmq5JeFm5zqGw353vfQgdQccG2hc6RW4AhY1HTmy8H91dCiRhqJfcVcT",
  "key16": "5w3MEaWkcZA7cd7GjZcDbDVng8Vwwyj7WYArpNy7NtEobXxCUNXdxojXDHeUU9Dw2dPB4ynwc7hqs5bpqrD5Hmpn",
  "key17": "35ZKeMz21VQoK7NTQWkec7WJ1fRkk7DDvTTZoZJtj2SYoYG8DW43x4X5GwLG5XDyZDydahenMyQgrHDn4xZBzamQ",
  "key18": "MSAcH4kiDVBWqW4VbnQb5nU4wLpdTDxfvqWFAhqbgmgbmJbr314DiJoEExD5MeMPbYjidZrsZP8Rq7xgsfarsVu",
  "key19": "ENz7J8XEtMfxkWExEjdSavDkPVEoNqNvESua63Qjt7pvP4bA6vdjJ5CWyitZMdtVQVj7Em75czKHwGB615QbcjH",
  "key20": "2Ez6bksA3VmE656tR27ZXsTGRV5GZxHF4UteTqh93eyPPM7t7GzT8Yvie6LupSEvQEnFqmrvi7gGBoNAkkMjCU4V",
  "key21": "2BvYA5BS72qdXTgxrS1AmjoawH2WhVVW7hMd8jx2QotWA4UEwfCiU3yds359s4KcttRyUnC1brjazHTzNuBvEkkr",
  "key22": "4aTmHHfrf5Rx2beTeYfYmBWW1yMCVkTvdyRmfcPkpKHBa8t6voy3Js9SBccPn3YBpTf1jJpf9cHmdtnPEDGaby74",
  "key23": "3XWrpJUqTCzxDjNgThb3FKQjs7bDhbHd2SaNJLis8XATRHtAwjzTn8o7GisjowrhAsd6pqntGM9Ho3SotVc88iB4",
  "key24": "3tHzS8CTijjeLwi6SHPwFXrhL2ZA7SqJ7S1MDRByT4dmGcy6YLWrLfGigvrv2rRg9CJZro2wqizrqTPgfVTf6RV1"
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
