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
    "3aexxtuSqiUjTSxFqFzwexNUKuKbMfDFNthmuCJmyqYbgCwn9cf6zB3uTWQbJ5ukRGQb81LV2eTD3G6ddUWMfE7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X6EfWMKZTS1JM1vhW5oWpfEkbEcrMKQqWHZNf4wrCwkawvXJFr1nLadZ1qrsAXZMTUGttYya2PvhNPvH7YYL4in",
  "key1": "4hezeLtTo56WKKhQkEUwbLngj5AG7LiV6Pv2JXBCUy98wnqVGkhqZAfu4AqGkhBGBCzGTD882iNU8CCf25XMzfq6",
  "key2": "2FUF2o9NHKpA7A9sidsNcDQJAt1oVn5chHN4DkRucormA2oRmGS2UMDarobbG5mZnTbENzWGH6dusCveweW8BmMU",
  "key3": "37hx2PVZcAe6n9NG4uzKtS7GyUzPtDzaaZsFuc9gqt9eZR7YVZAz7QRx8CvYhg2w4ZuBiPqxiG3wgh33E13RPd67",
  "key4": "4XDHAHk5ckAYut8sT5u5nPBEcu16qzB2LpfcDPFRDBABuDKVrY3kfGK8iMg3cjxBbjFsSQBWqtuJcwPbaWNzMBxs",
  "key5": "2VRALR9ZtYavd7WiugnSDnvPMXBJvJ3jzHvXKnkWYfYXkr1NNzt5BMVzhEJxPbMnvvqFHBQYmwx4mt3CM5mzAJop",
  "key6": "5xeapgBgG1Mseg3KhQvnQMiKPKmDTGfmmARMpG6A55dmDcuvZ6YFeM9EKME75HN52uej9PopSWrK8adufstGZFYx",
  "key7": "4sEiQCt8qwkNwxaCKafZJR24aGxci9z681arygzPr7AzJ49JTfMesreWYq5xVVoXzmHLLx5TihxN57eo7f2ZCZ2t",
  "key8": "64CGhrPZ3QP3TVMaAgkshiMpLRDcEpgm6GVou73EijrKAx8ubUaBBcuZ7q85wWTpS1xw4He7L94DQTEoqaaEHn9n",
  "key9": "3EM8SRVywHbmcy7iyiFiZjWTjaXECMKNgKURaKhpwiVYUkA241QZKLtsp4hDgouUdzpYuHxVM2Mw2rJFpNVTDuYw",
  "key10": "3opd98RZmB3FFiS9DKF6R9aw3ggLeKeYSSuRZ5r9QJ8yoXSbRhBGfcQ8isTufhXC7QMZjBwGZ1TXtNWPqhkRQLKC",
  "key11": "ny7TuEf9Th3ik32kHrsN6TY1BN7rwyVjhboFdy32BezxpGAhhUi1Z9GXvpJybHnvUnUtJQwMHJDCcCmNHgjwXEH",
  "key12": "4a5PjRfyvskqxZ8DSs5cLpYGhxbBGTjCwD1AyJ1Q4KCF8f6zc2AsYSUZ9WPmyDZacrY3CZTChQQ6h6dB4rHpT5hw",
  "key13": "2qvpii2JkpXjMnssP49x6fWfSCrMWnFsRviJFisPqrvxZAv92kDq4pghWf39GMm6bERYvm88t8H2L9WqDJAbH91K",
  "key14": "4RRsoLCv7wqGXsB5c9TNqBugpp5MuC642oARGDZp5ndRMezvA11tp8Zuhs6UDjYpWcFXtbXZt6U8r2y6h9NfsCZm",
  "key15": "2miV6d7Zw7XJPE4WGELJUnjjjdLrV2m9anf21HCNZqavRnB3BuBPrW648BcKW8tPEwVZxDoJQCJmHDWPCmVQzo4N",
  "key16": "5jACtKuiDn7U71uh8fcX9SK7Z5hCHpmMFCvaQjTxRbtDPjPY1wniRQctZibXWDCkixYZ3paWg5yPdNSjfPfXpCbg",
  "key17": "3kDmM9AQkCB7Jg7NYNnFUoSwPS8Dny2i4x2cmh4jsrHLTZtWSVekJ5gN5T9hMn8rQ9Eaxd7qQ9wiSCsD4pdXBVck",
  "key18": "4L5pC2bXNndHyHqn9wG94i9wQWxbs2cPDnZBuoKgyArzsaNp1Wpty4J49G39FGbnrYM9kpvN7t9q2NSa1rzw2RpL",
  "key19": "33P2SEU2CrMukLtoR4CmxZNgbBDBNoazkqfo2yhbpmHfL5QZpgYanRN1cbVu4cffxoweoxhoh1iNjcGq9tDw6Hgx",
  "key20": "5BkF93Xe6sjh9yz8HLsowTxz4DepNz875jzYrsS8ssLTQv7gawUapSVDxFJ7jA4xH11tbdAgt4yYarBtzyooyZrF",
  "key21": "2uWbsuqjsJrXhNq45mgFJ644smpvMwP9heqJBpK6ysRN2Qcgb97MNrjMFwswakM3XQbzq5dywu538ywePEsWC9UB",
  "key22": "rtTKPkZsjek4SD2u32QFDgVL77t3ZsrF1vuqm4PAsnBiY1KeZuA6F6syd8gxUKhPdFTHjF6vbZZAiuQFrHrjX8o",
  "key23": "5Y1X1wEx7YUGokE8boBvpzX2y1wTKNrcGfLGNj3BisEQnxdAdDuQHQS9mPYEfM98XYjrMPvsHZX242aBKBwSMY6P",
  "key24": "2wBnaA71jPuMpdvnCBFPezXDisM13TGX3zMUr4qsYi7k9HudBhCcHK6ycEbtPvzYcWYgumBnRo6BZi6zsBSTZMH4",
  "key25": "4WwsMpD3qeSgtyy4qunp4HXL9DrU7Rm66bDANm5MHV8FcEzXuzb6GRVYdXsVgC6mDkHyPsjzTEXCjxb6SSceWKXa",
  "key26": "4edHTwZdh3GZvCC1vzvhEDqxBYpqmxSatoVPP4uKAoEhhp81mix4UNYvsGvHg391wN7jhp3UR25FFh4GxMKZKDhT",
  "key27": "5MmH93qF92nN3MRRSPyhGRB147Cymc47g8bN7i71hSavm2LZuXSGmcmHSpEBSv9dzowyLBZ2Ed251c2jCEPc1DAU",
  "key28": "58rsZgRnYPEPcLWDMiEM7DDsMkZz9n2QQt8pd42Dtx8isDrApXeaerC9o8NdBg9Hwu2BzmhdFpKDb5kWUnQJwWU8",
  "key29": "WVyLmNHJncFxY9cSmSxjKMSsZRiGDGHzVQ36WaTEivPGimXeDTM8e1izDuZforjWLJtfAvvwv6dAqBU8nEyaAn3",
  "key30": "4y7mvRdsBM1v6KVf7tHcNm9qXy4fVfPa61nxHS3TT4u9vMVPyxgsgS7wH5kSxvo28YTLJcrD659r1Nqim3GzbZBX",
  "key31": "7Yc2bqrbcWy1FVxcrMWyhoZVDoQBfJRHchUK99CEjyR9AeV8dddx2RqJVfYodZMBo4vX5s946SxZ6QFJoceb7XP",
  "key32": "262tHKEpMPpmEWuNs89MVtvKY3VmTcBSbLedN6kzSpnuHQwvCVnzZQDkeJaYWGNTf6wmXXVx1mncpZxmjWFNA4uJ",
  "key33": "4ya8U619DE2pwygNHAa7o5SeuDVanqqCJZ7j8JBkMf2NMb5CJ7VBxDCTdMCiTqNzaiPn3Rm3wfUiQL3dQk9byjgX",
  "key34": "zzDB8EGfuVgZVssrsHZXZhqnPMcTtkFMeu1qocN2s3Vkg8P9N5AfspsBwShS7Xr3BaBLHsuibFpcpJVVwBbNWF7"
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
