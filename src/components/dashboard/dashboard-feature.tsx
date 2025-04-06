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
    "5eig8YSrK4XBXbSpV85zFm53LNeppEpZsbLueXTvCh49Msue5AzaQfjx8ZAvnSXkzg7vmRY6mj6ATfV84x5GqSdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yjacnxb6LpF99zmrsxuhmZ19BFruxqi66A6HESnM3fB5L2r29ued7AJ5XK816kR44KqmvoyQmeGCeDJFkeAQbYM",
  "key1": "67mreSVtbGTZLybqjh8Ar9uYXmRS4kPKanS9sGvg2zH1bCV75PgP2Ws2GEfud46Y1wKZ9mmmTFLSMmuWHa55rxKr",
  "key2": "2qV9Dj62EFeK17BjFvFVAipnsCqr4GiCDViTZZRXgLiQBAM7gASDYgw7umHyu6HTzWMC3KaKhysguLpi6VYiv3hb",
  "key3": "5upcLMAa6udzvoUYJq6B12on8MM7vJmtA5v9wQVdaSfdjKGbS7H7DgA8jrGgHCCSqZmJXqkwuftotJkNgFkHaL18",
  "key4": "4EhK6n4auXRuHawkdWjPJ9mKjrGD1B8AjFMTAhXBLoQaAkSscffoheD5LbBwVVdPDnxdkQ9BNgNF5g7ZZgGwxKtt",
  "key5": "4HzSrw8ymRrWF36dZH9wrsgj9avMPMNa46F6jANCn6TTRchFwRxc9mLwLQ1myQR7NNc4evnq23cBdH1Ctn7SWLBB",
  "key6": "4xSAT2NuHPSq2WsDob72NaBgUzJxTeUEv96ZhR6Vtmm8KgjEMVY5Pc7Qu7Lip7qFzYFqGadSHpz8TBN2wycNBYdq",
  "key7": "4JUbm6qA2SBfCENd1wpXw25GTofWeNmaAdrLPUn4Kgds4T35KiF39BuVvaFc2aGY7P2vLKLeWHmtRqCdWbZk5tbA",
  "key8": "4qC5uYJYJYA7BTWwCmrGmvnqcJNWmHhB5DDFoBFtWoNcvqxhpdqLeEmkyh57tSTeGyKpKdfsHkQN3UqGztKrTE4p",
  "key9": "2LPcGtaSV2kZBz87snWG38pvv3nhBjyJK3QLBRiXAAD8WfWoLFm2XftoPZr2u8CMnMFy3EC4QV9253sGA1BJ2Nor",
  "key10": "3Z2cA3xqHt57vR3jmgePFFbXd4tg8HCWCLU1rQ1gUAEspbivCKoiK2P59GsND3HRgC1fcMK2GeZKB2Q1nkY7vSsh",
  "key11": "3sTpkG98Kog7PQ7gt8HpXtCB91HgoRiQpheKRPwywh119ts1ez8kpzEaS8xxe6Rvqi5CRtMhnAiPE97WT58EVYYf",
  "key12": "ZUDoRyuoZ4JiYFxxkyxLfmoUuYdeuiguNhm26bHQ3kG1UAXqLVr2pqQPERrKFMofaUkBhm9VdME33BtQGcfSbB4",
  "key13": "29omvyTzyXmXaBfp1EVeGbw2U4Yo8bGxg1p2ygpDWwofJEtA9KpAabtefXJqqLwpqt3CjTiG5qtxJCGavmUkMSCn",
  "key14": "5TdEKQWgB1wUVUoRYtkybTKhMn2FP98eWVgShChTzUj3Xj7gTuvq2vWPf7iVBUpWwC3ECUavhnkww3iGyGc94UgT",
  "key15": "4JmTqS9RDko2M6QV3DevfsUnKDtDcinhx2i4UWkAMatfDFWSWkABX7z6o672M152PDRN9GpgnMYD8JxnuvhWnrmD",
  "key16": "3rhFu1UEswJEbmeAJ2ExZjmqzmofHZsSAeaqN7usuNVZxqbK5SMk9Fn6JNjasuQPVvpGiu89xaaKaoS4uTjJv9fv",
  "key17": "3BvqMwrYUwBaMHDSQtPtAqkp65hvhBcnPtykzJno8ctSRrTUeu6UUx6kKQNz7VfADbBbwY98L51TbNunthG8SzWn",
  "key18": "5az3VGuz2aiikM6Vo6YuAGt8GJsTWoR5YtDz4gMzCnoNzSnmCFPeEjKRpwqXDdj1Jgc6Rdx5Cad5gezPRVKMRokS",
  "key19": "5chejuE4ujUzAMhpsmu9HjHT3j7sPx7PDT3qian5ACjYLFdmRUTkQLTFMmaj7rXoVr6fb4xxyosMAkBeWiemMT3Y",
  "key20": "2N7NfGVfM9ezZ2QiLBSefX4A1TS8yGeDSEjzPThpEHP6PxvcVsvCyqTHSny4xZWKQfMjNps4SNFR9kcNQn27pbFP",
  "key21": "27wJQUYQq5g95k1vgisJDbn3hDjyNgvzZU5d3Fr9sDBqSxNoxv93WkdXF8vaK4xakxAJJwivWTdVX8BEhRTbqRFh",
  "key22": "2azHYyQ9wTeyNVN9A3JE1GnUEK1uZJoHqAukqGk522zWZm6SjoJv6ahycQqEoxcYbnsZejYGnVbDenRuaqZxJnPK",
  "key23": "hGppKbBWJm441tuLswvxxUbiu4156ScQbDAcVEMiv16P6BD9s9HUxXRDL5rbhd92YuRa7hW3m49i6EuxmHAWfra",
  "key24": "39e56TGu9PmpFD4aZsAGWD6qGm8eiwbNvFgkYq3HETFJ36ebVPHixGgUoj5r64Emxp6GaY7zdQzDcWbn81a9WD7w",
  "key25": "4vAVCmCHxNHCn9kVK8CZpR7VycfiDSk3iJayz2W36PGHCvQMxUY51YsiZRNzcCNj6TTVrvVFAqpxvo227VJuSYYA",
  "key26": "5vXwwcygrnZuXy36ABKMkh5WUN8aAys9cFeUnXM5mFNiKDFeyS4XZgRN82TENacqCbsBbaeetgoXScSH9ucgZZ7w"
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
