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
    "2vAxHrQ2qNLCvQWAK5gzr5q553erMWEB435rTyLeFsMS8LNvjb8rCU8zCdgTkQZjDtmjFwWkjkwPYF9PrkV7BPR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vu51iqSiou4bAaNLKUM2ZGZSiEVgfZnvFeQfP72rHH1BwpPnMN5ZDbf1qLDsjCRAJyQyHeYFMh2dnFYz5bjzgem",
  "key1": "317RCE4vKjMbFZEtkJUpVC8U7sU2kqBDfmCZz1BEW6uarqBrAE7wCBTym94a77WPEnAgFnpmBaW3cZU4JvVM7eAf",
  "key2": "4sWzTCnnF1pj9WDPFXuRVM99NMhdcryK7norDSAsJAMqgBwdmt9dr2zTiD6ZFVhqMY7ThCrfA9ywNaJZitoPwXbv",
  "key3": "y2fe9CRiD7K4Wh88JAkCVHP3m7bZotGrdiNfr41sjzjHYrjLyw3WFez3SFCz3XosmK9qk54M5rcNgBrDRM7ATfa",
  "key4": "2TdbptVs77Qvv83Dzo7SZxipdd9NFoc5BtAKYwyPvNKVSD3ZdWhL6GkrnLtQmzjs7z33Ubj1yJ5DQLDEoyd8KGBD",
  "key5": "3VxpqPuT8XgGDVwWTm19rpobtVnsqr8P977L3kg2drDu51FzUp4QfdzGUQWMDKrZt5rHuAUbToNtcW9454PbWphg",
  "key6": "2yz9KuoqRMXynktY75XqMB5zUdW4n7Z5azfz7ufpE5i2qppaSYza7KyuH9c4ZuZKw2cefGVKnVChEgQFagBsR1FT",
  "key7": "4d8NXYdJVaWrH1uu7zQ2hrqmHsHGHjpTNkCy2mfsxNJ5CZr1CAhkJ6zn5eZEPQkdvzvA18JzSUdrPnTZW1TAT9Bh",
  "key8": "ZqSnisRbJXwdsTx1brvTV4E4C1bmWwp5MVCGaqfT97akvpam7MkAWiPhJzQz69684BtkPDA5rP81WQQqsWFh6ma",
  "key9": "2Q4e82Jy35aa8GEYjqoMfrrGKbE3GKp9xFu9B7NSF2HAtmQS3qcfRRF2tJm7DiEvqizpTatXp9xNy8EkpwquPhB9",
  "key10": "8frvQwwbh2kW6ru7u4DfVs9f23qt3dWviCq9mHmd4SqYocJ9qdnpjJLovtiMEsU9HyUiSCSdzSanMT5YA2nUgQ6",
  "key11": "3Jztd9ZZawX8LjdcAeTjP69b5uENaZ8XhZgcNWLTR6gB6wytxXPX27fx1LEe2NrPvejv3KuKcoagLuYiRp5vb5jT",
  "key12": "2TKuGQtq2K2HfycirLZaV9sLeUCTHwLUsd9u8nsCAm7SyFaawyoD5hmvkBf8gccVGabv7GR6TmcvAQ6fvWTEXcMw",
  "key13": "jtLrnfX654b71yhAKeuVVfLeGxkyWCPDZgcMdEUpLqTodcyguFTc5WCJwfTNAserLPdQTzkEqUPupYFq6h9zEZx",
  "key14": "83JPuK8XcFwNcMy1rxPVYypGEV8GpUGcaDSM5Leu8EJCZedDwn8FgQuqZo4hkRdDCjvTLb2YxryEGYmWFA7s9JR",
  "key15": "nR3d9XEsnmKnBCVkXTeqERrmZKHDUfSuvzuh6HY1EVzuBr8XU9oBqy8TqsADuWr5qb4RAJYtTX2wJPduhhu3VsF",
  "key16": "5UKMnMWdNgQb7UquhMEFGyVn5SjtEjW8mzBiAYUByYCZvx8MK7pDo85SQSVe9n2TGPgffcmL3EDH9WAz3sFsjgAv",
  "key17": "3CtsF5Aj3uB8oQmhwBmGJSF6WsYsnFFKRPXz1z2Matc9z4FDYLpYFyaE7w4bsydRoBzeRLPHvX3fTaj8J68yyCHR",
  "key18": "3fHtRQcPZcPe1q94FZuynGYNFrzsELoWZx44hZvQqKrMaC6SEwcTsGZbCJWWiJmuvAvwfizAWy4TZ6txwQps5Y5v",
  "key19": "2Dm36ToBd4ZH5yUG8hXjR4wx8oKmLA5EHQFNwqxnfKbiUVmYwQ1gc7p5pj87vNHxaf7DRopBRUdk7pFrjMRC9LbF",
  "key20": "3dkNUPQ2Ws2Yixp57QJiHNj93Yo6PkxSxVhXx8sv41DkXChBf7RYzem5RunjB2NBhS3QqVWsiDxFCoLzcsMa8NTo",
  "key21": "5fFszCsUvBPhUzsTZ1YkDQR7TpDSCjjWrnn6g9cU7WZqH9p6pZk9TDmShCiwbmTDvp1fVza7tTB5vV9M4ozqmPbB",
  "key22": "k4hFi2skkTRRhFgfszyvX5Mq7FwzTJRYu7SLUuKLWFB2iAk9Fpi5MfHs8YeQDTy32sujxvzeMuDQe1GAE4AGYNL",
  "key23": "3whhDnnGs7pfWYciJDbPKzkUStrvgvbc6wX72KwKHSLS8UVW7rNqNHjayauaNyo56s74uo6bJuKAmHvk7qnHdHSw",
  "key24": "2zU1XGdBSpTzUPZudd5fXwZERKQe9Z94zAPfDBRkyeYdUmZ9Wi4THdGayVayGkQgVpjwmgM34jFZFZdF6vRpqQTR",
  "key25": "5yUmwPT2AmMmpFCpfjK8c32MbASqAwfXDG9T88ugyL93J4d18kEPFNz2uRieyTmG3d78Q7VB7TvnC254NBqVac2C",
  "key26": "4SUkjoJ49cirTe88WjYc73qgvvSbyof9uTwREhMogRLe44ZHW5m3fK67J3Wqp5Ytf5Vx31ks4dFdqgjBbLNnuFWx",
  "key27": "5kBJgqzBBWrAfnxgP2ZXGD4xU58NKmes6EMdAnXnucDpNBkhsqhg2LNTPWpVdhpLwdx56K9YbSYuVos8pEesNhCy",
  "key28": "2ZZ8CjavpwxCnbTzRCpDcFF9nEYE29NUJCx9d2fEnJPqYcGPR4wdeEyaiRw5WZ9jSCKMrNfKSmJHtFrbdGfFK66j",
  "key29": "Ru7Jwxubi2xsLNDSn6s67FoGazrhTEm6eUNCtCZMjUawBxWm6SyPbSofZnT7mVwEuxWcsQGuV69pLNJP3rbGB6H",
  "key30": "3EGHpjo3JqwHFf26Vin2pognsaqTo296vivB72CC7DZ9v3QVR4mkhukZMQPDSKmBRPskdF5oGBoNT7SSpS5DyRUi",
  "key31": "64u8KRqMjeUgtCpRNsXnQMUXbb2VnHncpo4U2YpfmQpujCYV2mHN8pDm2AdbxuwwCvBX7X4qACU2EBkK6jqc7rBP",
  "key32": "267Wknqsdxhm39Z5ScitTYA5DbDQ3HV4YavE8GkfGqRikdG2brfBZP2qBoP1defFBnsTEiAAL2EXP99DCfcpoeDi"
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
