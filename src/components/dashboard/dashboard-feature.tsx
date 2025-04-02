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
    "2QXh8bM8QjpgbjPJ24hx1DBVCr7pKJcnrvd6erFsCMJqPA5gdkqRZhaD7mQCmCL4iWps7K5zbXJmkimCgmH6ebHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qVeTNNrkBHW1tQhcRPSUPtMqhgJhwDNWBhdj6XhADUoovbVkcQrQR93DLNMDXwyQGULbiFxKWWgpWow6QLbMcSb",
  "key1": "5PYk66yXuNi71KxJtCwrjyqghiX61yH9G6roK71bh4qbf1A7G1F2KpYPDy8ACoAtj1TdsHzpZ6axFPp46uVRL55i",
  "key2": "4rgdzXNt6NgsRdkpA5D36RDfUMiei8Z4wP3unuBMUJUQFYE6MX5YoTYkSTAgewKchoPgLp7ZMppyDdWnoyinrSib",
  "key3": "3UFuLF1rPM3mEVwnoSp2iwT4FwE423Bp4B4wrRP8ncYJXENiuvDXcC1kcxku53pe2WijjtdaQmgJEGirZSZrSra1",
  "key4": "5SapY7KsuRQPfnPfhy5yb2ist5uDXnh8P5LRhBdKwFtJX5cHWJ3kcsTH64PFBR6pbciLDzWoufEzdmcFmVTYmkD8",
  "key5": "4uQ7AY4CEAFHFEChGZCY2PJRFkskCe9NzSs7mAQQuJhh68dFJojYBbZfULzNdgPBWJDKpFWDQoz8KM9dugBQnTRb",
  "key6": "GYuF7FB5zeqew1JB6Pcs1oiWBoQ9ATQX2CJnn1RR3oENzGBoUqjtkYSUjjNKy1CRuiC8q1bzsbjXB6NezUgTp3P",
  "key7": "3VLgYb2QSiGjhc8LQ8vJEpjypbvkvv2d5kFZ2bRRnwdcKDHGydDRWBUZ1VM6NxKcCXdFdAF53AJCx5LMqVAt8ZxY",
  "key8": "3oPwfhShbvxnxu9L73LCyT6GzCU92gHMVooCudGfNeNy8rNtPEVLdeRgdsXU7AFjkfik1A8apTL6MtdmLobokREb",
  "key9": "5w5xtfbxrpPpTKHkFkFGPpMLrXCiqcD2rVnV2HMfVfZN7FDZ7frTmWrPwSuwAjy5zRziwn11BZieJYtnh5ESqSGn",
  "key10": "5gGGKZdKcV3tJ9sK3bNfZWq7BEP4DasLow1ozzFXq3ZZs6zteRBLP7stSf5gUsGrA2GD6XCB8qMmZgTaGkxSZQQB",
  "key11": "3m99njuWeiJV5AwRhUprit5ayMPAWW21USHzYRxUA3gMJNrSxE85CnzQvCmdjimW5n45YSgCp8cpb4ZrBsdQP7dv",
  "key12": "27JhBYZmPbQEb1NK5R3ew7yKR9YFYdtQ3raUi2V5FgDDciSsWV5ymA2pCuMje8DdwqYgQAJvK46b1SntuAMry6Ls",
  "key13": "3TpuDpDATRbPxwe5fgoDerqhm4CLUbnAefDS5nprYM1SbEdESEetEqPPquy7qBNYnkEKTNPHt3NcqZw9TrdGbvXF",
  "key14": "4XSUbXvoFJd4Drwov9NzWhyW4hSCYhL3a1WE7jA3UcoDymTkdbmpTfrvuG5fWrTAKwWitnieKnrNJZdGKPb7udTc",
  "key15": "3qPQ4mhLT3xiL4pe6268EuLvnjez233X1tJq6ChKxgov9dfjkvi4dupc72wWxAWybCcxFaYiPZubxrUby5Eh5rXd",
  "key16": "4yVcMAYJSa1mq7bbgp4NhDJLaVU6Zc1wyqw4dQmzCB4ExvZvXKEuBLgojTPvhEs9VUrUmtg5JqrXWS225aabcvqX",
  "key17": "oU7zJb1MC4PA96p73ME7m5fF7UqXy2i4FCbad47aPnc1R8ZqYoyiiSde65ZY7hAXPtcU5C9BHX13w874QBq1nvz",
  "key18": "3tvAe1hWXHLqJajYZbi2YqorcUPZaswtoa2MCYQdcJZKasrpeGjsgErkDjsJRkFouNaMNWrxkG1kyXiJkxSmQZmC",
  "key19": "3K8EL2XSFxLbS7t6uMzyYHvcdd22kxcvgmas2yXon5MnHzvHDUqP7mW5LjzXF4UDMDszfSkck9ocXwETkMy7G3pY",
  "key20": "4V1FUZkxKjZoqBQy1kQrpvCM2tFdkz46ktRZvcFtFoH1FibR3AAMHgzFZa5h5LGabdzBf96au3brSz4YT4xu2hop",
  "key21": "2SxVVmDExCpeFCtufKm2WEt8cGoRF7Ww7gmGYRRBXeQ2WUyPFwCzzCfvxsy6j1eZN1pjLsNU41pjRBxMnYDP7Zbi",
  "key22": "5RV6d28YagRmw1TUnyfbfRH4YF1NvnDn7B8Q4tvqMxkHYyGqD9K2cpxT5A4JUJ4qLRyarWxufoMBMR7A1aPgr99P",
  "key23": "3JydChFJ9ugsLpatk8be46s61rYsgMmb4Pt7zVgT2UCysUC3G7wFPspnVv6ZNrmzY3BSZSBRbSE9gUAt3tkPaLu3",
  "key24": "ZTX5qy6i1zerC2FEBGGSJkoR7m5DuCkaFGDo8Wsep84TQehbHKJiNEr7GsaMujwU3RhgThQfrRpX2fgshKmDuM3",
  "key25": "3CwR3HTJ2GHVPrXkZXP3jnXYKNX94vGy9echPTwAXYBMPzNXnVbnBnAi2suiZBzoQZ9poD42tLoT2cd3JBLiysFG",
  "key26": "542GPf8P8NyTbe7BCuPtnF6zf3aGdK3JDtZGpgm7zawsNFXF3tVoGdqDNnv28ZwSMsWT3sKvrTaELgY4CKo7v3ZB",
  "key27": "3g7kriPc7upgbGDxbTU78aTeddiKntCho7oZ5gzQsZDmt3oG9E9ibUvu2sgN9Px6dYE3SZduSsDNNTnrK6qTosh3",
  "key28": "5Jt2TiiVeNQ51JRG5Yb89PBbXSs5C8FiiQj1yzCY4DLc5RXrj1iZX3dV4Dy46mhLRTL38Tce7VFX8KYpdU4Zqbfh",
  "key29": "4Lz3v8DPwFQcKt3vszAGtHas4cLVXDiteKkhkTqZNx1Z7qsNJdDe8Npiv9HGWYXTgvDFKxbvLfxL6ZeDkuHtA8DJ",
  "key30": "rG8SwWLHk9SUCBhcBNMdgVytqytL2wmf7XrGhfpaFNunKz5eSMDtQxJwvvsZQSRUXZfmFBWC3X2LQCRyV3X5sGZ",
  "key31": "2tCDK7iFohEjLkDtRKxvgABLV7ZfyUxuaRh9nejQhw2PUuq4TWVgHQiP6UTdMpMqpdiKLbAYhjDJ4TyHkkmzwDfh",
  "key32": "3JQzovrfTGBP3dW8vuSXd926o2TQdVPo3z2LZZYNjVhEp374vjcAMU9sgts73KvmtYwtUcakY8ZNyGBKHdYtn2DU"
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
