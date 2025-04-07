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
    "5m6g5cU2mhF6b35ahdMJhUdk1Sa9kSWWbWKMR4wdBRWjgvp3AaxaiwSuiDDAjP9xESmVvGmKhc4nL4RcMbfw2Ke2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "381YnEnKjUA6bwvTMKgCyuQmqmuoDVgUh766DxgVVaK7EMSvDLaEPNaHUXLP4Anjaue6ynwW676Ae1aeNsjCPFjC",
  "key1": "3WiPADF6RN5gRbqCjN6JE7ooV1qyRxt57oYCLaXtZR1JxHEqtmQMqvEsKCfUnHk3rtwvewduvgsUfroXUDSoFkMj",
  "key2": "4jjbppoPqY389jtBeHS2aEXjxBzogze5HU6jDkZuNnasVYVexJ6NRJtUjgxKtnFffj9eGcRhaSoFTBCd93ZCUxE9",
  "key3": "4Jn5t2t4RLPXVs9hR7h4tpSmGGxHvUMK6iyQcSbNKbva3Biob4sM9EC5prg11XrZazunF9kMYrbknFNaycuQryxi",
  "key4": "jLgmGowgGnuQuSuh6pCh5jzZSU2XPdNXaNstewbLTKNirdjLnxDU9pz3X7kcWgTTve59TYtE75jZ3X4UiSzUff4",
  "key5": "5MhhTJBogd8XMZ5hjFxk4nwjv3Mq571WJd9hmgMVdqh1RvUG4zBPhRqhMk96rmvtJF5vUr7WLGYjU8V8Zq6RnBZD",
  "key6": "5e2jAHbtugkW7hkTcwCnUNrN5cEz7mbfcrshRAMcEwvwgrS9MbUHiU2psJ568fi9SibJQCk9oeW9P9CLjsYTwW3c",
  "key7": "5XZ3CiB17Gi5koKGCLvL4MhnYn6Tng9weoiFoeMvSoQv2xaS1dEgutWfzXYV5T4C8zBfouPno5dnPfJ5Agvv1Sam",
  "key8": "2hUGiJdRrj5zSo5MaLKKCTswX1qS9VKiyxHc1c43vnJR6vcsyL72jmbASRczf74taGpB9N5Kd2B9oZ2SBEFeXc2o",
  "key9": "3XxGXwestcxQhYbo6A9kVvJvx5sRrt5z7EBabFZcqyekZgGQ5tHNCpLeSw6nHQczRVbVaJfZixySwfoWa5EL3QKp",
  "key10": "3Mqh2cgSjaU5mTFdmUWtDLnB541NMBce82qX8oVxt3prmE2u3vmU1ykZHR5Zdk3xd1P5enHPiwoN2iky1d2vaNmh",
  "key11": "1cYDdq8PVwCTNU6FhPKC2cQJmNifwa6BGVo112hJvPr9GeWcupqJBLfumGydRs3VDtFccSoR78upavKftw9Quot",
  "key12": "32c8DN4LxBRU4xAmBsxHryWdBuSwFtDYaYe2YX2NYG1JyGc2wsZb2uxaNZDUwGa3SVPg2iUaCA8nBmYKcwZcrRqS",
  "key13": "G88JzQXTj6WnWNRaAJprj9nKrBoUMo3FhgKCQsJnJJ3uFJzzh6Qi5P2xVDgx4HX7N7GaGXaGyNuDpXYGH19ujeN",
  "key14": "337dCpbnCBpiQZ7SWGtwcYW8k1kixEY7jfmr61XpQ3drmmqBU9qJBmF6HWL5ADa6uYfFYimr5DAGvz2Na6XsrnFA",
  "key15": "5tb19br4RgNyf2Pu2S4wgU9ZJ3HeQpZzVchh6GNsTxvtyxieSihAm2kRD5wiSjuXKgp4FvvEzNCSo7LT43vEPm1B",
  "key16": "4cARVEjkA5GXBG9HvfZ1iyC4KjfoBLK1rN2X11dqav3BP2xjk4ymDMvfH2L4PrXQtxoWZSWETXkk4T4pNoFxGCeo",
  "key17": "fL7J8DqPCLTQhaqfxQ4jz83AXvWSgqtaTM6GiMuBugPd1Hq7A7CgsDP5Bbbf3zAJHkbhDq8woKwiv4nsmZKsVt4",
  "key18": "2o8qGFTr3yYSf61ccbfv77TUtK6Bxw9mdGEodARH9Ui1Fm1uL4NH1dK8aEMdGxaitk8Jb5FCBW1pdbQMhiKqEr8S",
  "key19": "5pcUyTvi7o4gvaLnaARhmXQ8SuMZWQP68MZ7Dw5gyanFFLm4jRsLK85CsrgQ2feNk4FFHUA3FCsJFbT4qJc68pti",
  "key20": "5J32eeM9UuNiEobinQM1YMgDkHgYPLtqjJkttfabVm4qi9ndvkvaqefsk9J8Kj1Nyp6Z2KXzLioZmF7NhxNdE5bJ",
  "key21": "4vfgFc2yZ8aAa9Gmd1huVxDoDBKPBjkoF1pAmPAwfQwchMchvxDRq1VWrSt5o8cmKtSuNbtLzxWmM3botgisjfoU",
  "key22": "34RNxwxJGYMFhGhr6ttu4WTQSS7ztaGgkS4zLbUD6gnuBWJ2vaEwxcHBCUcA6DtfrYBbwqm9TbqmgHi9GJenxCfn",
  "key23": "4DkFD8HNFwJVkaQw6ivT7svNeX34pZTxYojoRC2YgWiuMVYc7A7PEwmvnvHf6ke9bzKyz4ed3FyoxfvtoJMp3sim",
  "key24": "5tUS3UQ1nrcLym6jJP2GGLzZCgmxXFWHzievXJZDVYGwShDXtpJQey15UsKngT45sNNT7L9ykophXuQWKDF3gRYs",
  "key25": "2bKLBrhofyzc4PBSATrNnje6RxJ5b2dtWqW7TwLPEpio62iCnc9hvM1qMKFJdB9WhB73hLSBb6Fb9gazJhtffvqv",
  "key26": "3Z9uetuzxKvSdqsxTZCZiQEeGNRiiA1yGtfi7DgCGQTA1UpGSMHLHVD1nBgNHQgN2KTfwHfiKAed2EizK6M6xjcV",
  "key27": "4TTpM9stpxCjaxwZPnekzDsc3N5pEzRK9JYtaXUnx7tToYgjYuKjhLFHQ1zcgcy88ZPTV4hSjw7zA95ifM6jPgkU",
  "key28": "WS8dtZzoLuy6u6TvHin33zgN6BZr6W9wa59BnF2ak9T3hCV4arL22yzP45S9VdKNz2eorQNHRvZ9yyiJ5Cd2t6h",
  "key29": "3SuyYKTYUgD4w9nktux2BytrACmNrkn93tWSRikWeAbveaoK2CECfJxJejRGHid6of8pMUMgHrSuEM6LJge5m1TC",
  "key30": "4qMaL6Hee5hbp5FwKj2k3TNryYZHZ9pc2pwM9GcrkaQZuCD2vUgrEhZbz2YKiUkSbeFHz2w9qr5EAcr4Z1Zq6tR5",
  "key31": "4u1MVNAskuHtHJxMm5bZoFBA2UUS8JuhKZmYzhNMaco7ctzoHtenQob641H6b6mMyyEyWbZjHMpVLmpNxgrPmmZJ",
  "key32": "4Z5x7yEvhmMM32pxvM1PJqKWpBZudxuLydcCPHganGurbgcUkfqFVK3qMrimrzj4zTrCeooVKQ4uo5shva4xk8A6"
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
