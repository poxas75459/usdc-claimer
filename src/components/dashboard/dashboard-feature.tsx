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
    "5oaNZCteBPsGyJUErqzJ6uijy5Q512Wa3NDCc4hfhU7Lu2NwSfe2gXBtRoTL4PEytNtyufcM2CbA24YGNmNvrNag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CdMntTfyAj4edcY9rKbHkqzauXE1Um6kML1Nh83NP4J5c6XG7BYpT7MqL7gJvJVQdpRMRxpCBp2wvGjA3tJS9pW",
  "key1": "23cnNPC96Bap63c1cndQSUVakUzp9YAQKrrqXHYai3xhAPAeuFabNmvcaBaYR4PNHSkLMs1M7tVViwoeapinV8i6",
  "key2": "5HCrt6p1P32vhK3kZ35txx5vjKcKRy6t2bQtu8XGj8VEyw3quQ9z3Y5Bi8JXt5f2bGhBk95caTVtqHqRvCFq8eHa",
  "key3": "YhXAFsqJ4ozBPejonDPyeRtfjYku1ARfMy1R3z4fPGWdCC4rV4MvN9X44bQZZA15atmd3DHHZzdnxYLH4wzRUtz",
  "key4": "4RnJQbYFtSyYMy5BtiCNgBrYez93TWewiHkN9kZsxm8UG3xFg8rwUArD6XndtWdQxLVWK6xkLbbNbCeeu8nWtuTi",
  "key5": "3Eio7ZYv1s4yrM3Ez4nCwfEH91VmeMLiFqmUJ4zbrRR7xJBELeoasNfqXeY54kRK2hG1ziZDdTdVy6Ta9f2eqTCK",
  "key6": "12wd8aot4jsPVbcxiUYhgCLBZ3ugYGPFmddscZrWxdULZVdXdVa5kB1vgunUqcmFCMygKxAwjrBf5ZWmDFpHwPa",
  "key7": "4A5KgoTAa77s6G3dMxdr7hEKkDz1w2h2MG9cZFMFGZDSCMXtC5zJgzLMeoW1oV5YV2DnXjBseycN9c2FY6m737pD",
  "key8": "mtFyb6PiVhEXjxVuzZmPmhx3gKhaZw74aKeJtWiPqHvmjWizhyYnkAtpswXuqX4Yau78rSANGX5VMayHfQMoroH",
  "key9": "4EexSJu3fBQrNGptGaGJfthgGifVtnfnwEkMq16k98QJPMBKygTB3XaLycqQwwvSkFDTCLEtK3WEdYFm9bJ41A1f",
  "key10": "3o5Z6HP66GD1TFxKJo9N3AocmfAEkeardZSQuvB7wmber4vfcLxXZ9JXwciwbePNog4G9dPRHKVCi8C5L6GxmcYe",
  "key11": "RdXKL9c18ksZEyL5iPZ6q3vVo4SpkiFf1f1Cw7Agu7nVxzFSqBA82xyPfz4C2pCN6gbbpRmQUTcwvRRMP6v46dV",
  "key12": "4Nwyn6dXwnDQe3fGvXzUN5YSU8tZUBmBF5qGWR8Q1sq1vjNFRqnJJEnhrWbyu2smFwJ42VycdxWbVvLac1nmqsCV",
  "key13": "3ABDKW1qdF3LXrBpYK3EnQaUYqu6m1Ckfron1r6k2NwyXJrBeKHGEXcPi8W4UyPVmwpLuLSFAYuj733JSjoa25ur",
  "key14": "5AC1m9Q4JSuKPS2pEjz5ww2xHB9LzHjVtzmvw25V6rNerfPZMvE6zgSuLam1rgkfWrXUhegWHaBrGKKMQVcmiupx",
  "key15": "4EayPaAMRm6jj3PPCaZgGEHSstRnkaaTimMCQyXiAc2FUwEGq9LBZLyLHG2YXbsJ7wSrTxLkR24SeUexZ9xBbkdd",
  "key16": "5X1dtAvn9gWKKo9Rf84n78kG1wu9LvF4GWGvEaC8XgpgcFFRqjjMH8rXWDwWFUgGm84y8AEJAvfV5kVxdhEDrdj1",
  "key17": "4Xxs3aJfCJimMWL6oYN5aRgo4FpfK7uocJUf43uQsQVAUaRUVBj9rh3Atm528yjRdBSyUGxcDxztneWaEwvgN3io",
  "key18": "3ztduXjsk6LwR3wMtpX5auVLGgnbkEL7AHX2n1dcz4XxMVPWNV1t8MTk3EXvdeec1VRwu3UqwBis7Qq45qWbFPQE",
  "key19": "4wtcSyYhVacRr1qfRpo52DpzmXXjcGVLAaeimU3Tagyp53exw58vzLCndCaamCqG1z1FehqFMtByD9foU13L2nhz",
  "key20": "2KwCmSGK6oeJkpbsJoUbEY7KkgXRF2QPcTP6JvBuq5HvPxN14mBdj6dmNTLFhykVTafiLMJiuf5ds74UWrdG1TaB",
  "key21": "3pnrzQz6qdL387q7PausEaAyNwEbHG5scTWBeYrhGwLwKcAzQHFbH6ypx4KwaFLzBUX12LaPvA7cgJxsHE8U9ZQd",
  "key22": "3xDPHHfYxJ3UHbTkbKbQ2fPEqtoF1vyTftvy76813YQcpgD6davKSXtnAvRjzrAzDB4ZZ3VgXJR3rE4G6mSkfQKM",
  "key23": "2S5qMP9KxUfCdr5BspqsuwdhDWMsq1JMisZMrfoh9YbbCXx23a4Qdm7xvT5MwfP4yKvqr7Xwz3StqyXsr3ZEk2eK",
  "key24": "1TB8sVwvnYkR9cxFkoeeN5fRtryM7jpcMAZWuSVTGpW3xpAA7SoZNKXV276BZyDU3pWrppjpt3y2JDNcNV3147k",
  "key25": "33vkoUdoqvmioZntPJAUCpn81YjXE57M8ArJCPGBPFm532Se4Wz6HJSzweFTuodU3uprC7fiumZB49UTsdPfTbkX",
  "key26": "4Tr1oENTXHyX8cPNoC96WyPJuQoaSyvCWXGWg7aSaoy8dDKtoGYwAm4k7GdmP4kGQA49PLtEMZViLLJFJLj262Gm"
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
