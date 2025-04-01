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
    "fBRV9pBGk5K2nj7euEmXhBscd3H2nBzVvb2V1b7Uxccg3tDUsxNaG9mmkoFHWn8D5KqjrWUC1qqBGJVvp7VPKkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wRhXHsJbZ7vNeCRjNbnc4azfYo9m6VTg2zhhMWSw4y7xvdCC8ALe1GR689xbViSF6Djr4Gbnmn7EbmmmbGzbzm9",
  "key1": "fvFStdFTDLqbuYhpSYoifKHhjuMbFHycuEH6vBNrqW7DAkDBrvTN2NjfmAngwJddzKt2oD9DqZTYA54PTUvQkPu",
  "key2": "4NtScjnmB4Rp6EjWdQXgGfVBrQufLuwWAmCYwXLF2H2ppR7XAxgxdMP35t32Ecvd3KP8h44GnyehAyiSowqA868x",
  "key3": "YAxYmvYTQB3Psws3LG9yFZRfQ4DvnxgV5uwDtsN8W6VrC87z8bH3rqivDqXXT2V22iQ5VzkAu5pE5q3ueXMgrH2",
  "key4": "64oSfD5FrLdETQNr9t5P7HjETZR7XWfo7MWDvaAJM3mYQjedXDBzgJeNMTKAfUBQA4j5ozapYwCLnDTMfginprAd",
  "key5": "2Hvunv4LGWyrWKFmfPdB9YZP4UqrS2hPf2gQzLwDnTYorMB7ALvCgoURDyrFbHmwiV66nJBnhzMDF5ZXyBzoTZQE",
  "key6": "3b1E9qGKiPtgSSoUFs9mC18gXoKaTXVku1dEZSHCx54yxwLTCmjgbkQRbznBQJBkSjw89TFKdPMJFdkXwMQYEMpY",
  "key7": "3Z6dTt5xqWXpgeWVHZbwh1HXeX8AyKi6CFKhZz52VREBJ6UiLSYRsNGUcnwWD7uGz3P9MDUHDrUZj7xbXqhZ2Mh8",
  "key8": "28VrGrZj96KqFxeSrUWyxjoaEWgHSqvEiWeFMtA75cnc8xyqZ6MYJKAf99uemgt4cWBJSE6TX5PkH9D5QjLouCgu",
  "key9": "2zQ67nSVCkwv17AvWNmm6G9PGxKZcKqbsa5cnX2q3g47URFFixd3jA5bZnvA9QNLjjcNh12Ufr78ZZ5GNabKvH3F",
  "key10": "4Hox8iJCdus4h7a6vmXRPMNa7R7qnn6BqczczDTyJedYBkV5BLa3E1Khndc97Bq2bRFPEugJ9o9BSbmK3Atqna61",
  "key11": "5nG1GSv4s59JJXMQLpcFGitXGXLQMLUr3JwJDQRPdtwGaMmG9w2tCYjSasjkULGDvsm4XaZL2oyh78z1JVvoAnEg",
  "key12": "63fCshWAg43uVwzrJKcACJn5z2RXH3dJijUH9fihS6LTfaawrhdHc3bTSWDTC5v18cYbZ8vSKYfTfSX2kbzpMiQN",
  "key13": "2A5ch8ypVDKy3mG8oa95dqz2mNCAikdjNDn3Mz4Hfivi1grjcNSRTnnkfF5ZBBiSgmqtzQwKWGiHasnuShc3mL9Y",
  "key14": "5pA8QGL3crmazVVRwNdGGrmK2QHAwH6wsLADPzHcRP83GhJh8jxst65tftY5RDvoSpKFvFggf6J1JVknZoVujm7L",
  "key15": "2edzXPjn16KJRawaQ2HRCfnv1F3aNvYHA5LdmfmnPpaNLkvWTXrK4czU9jh43VutXJgk6Znyndw5yW4vMfK5Q7ng",
  "key16": "zEGuRiFn2nvcPVXeQBUhkUJ6ir2icTwb1ZKNgrg8p23G2smjcH7sZLtBbw1JCqPmHCa4mKZjFGBtitAbbu9tRbR",
  "key17": "44fCd4mY4L3N6EqpKo5pEJ935S7X3oATdFGHvj8L6Ynr9zyXWAazqxvAHaLpzevWnKXkC7vMSApTqBXHdLjMgw3",
  "key18": "3t9wryLpwv5dEUNkW7GC1ZMMC3uod1Fq5HQxESmSBKFdzbnmHmeZSZ9C1znsgyXeyFnevMXHa2HW2ckzAroeaYwY",
  "key19": "5YUcGu1SJqGxuGH17CwC5pc1k9HQPDPfvGQqfZ1KoST7bJg7FmUCsaZiGkaEUhQsVU7UsxfZYd4ZsnT9CvJSxP4T",
  "key20": "XMEfLSkPHaHUMDnW8xvrre9ZBeSD6zavuw299edRxW2Ccy1mZ7dXsGHmBAeqJaM6L8ETmXtmp7ufrjzhzm1LuTv",
  "key21": "3EbhoYrFrY9CwsfWhhy1Nznf5fRD5RUJaL6dYJbC8wxtNHayDXfWQs9JW2eThxMSqhE9ttAbexFBDSBLmWhBBfnh",
  "key22": "3H9iFpG5EgJebbJ3Ppe3fiEqBxUdmAcqBf2sd7nPgfwJyw2WxVcJ3VxU3SqUCj2BkhDro18j385GnnQYaxGrNXAJ",
  "key23": "5HL8JrpDFMDyyAtSeMHFdTzDbUAWvSrkVGueR1vAScsmpqQj7Jmyn24ZwKm6W1CCveV3qB1mBFGbbVknoJfze5Et",
  "key24": "4aNjxAdbSfd8aahBiJUVazwLHLhMGCceW2jCECbCaZriLouQy4HHFVx5cjf5HQEztaXbh2p2h55f1UxWpN7YEgv4",
  "key25": "4yN6VKYt7Ci2tLKGZrd1Nv91YzTkhQSdBRdEQxFzmmB7tpVAMu6tMQgivfzNj9E33nkhZoZEkvJtJ2WEpdJcSmgm",
  "key26": "2hXFiCi47aYk7ww2mCyaX65RDzrie74MhoccUGGnP9B2vMz2eHc7eSVkZcxMR7EZ1N7cPmsBkuyDdpEYPRfT74Nd",
  "key27": "SpH1qPatwmc4YXkKmWTr3XKufptq5Awb8dDxZty6w39EVgqRoHfQF1ymzHo3d97gZy7ktzYiwdVK1kCPDVLcyAH",
  "key28": "2rTjscLxnXM7VFEkW9KVDJSZoLRMs4dKLRFXA1PvsF1gfQFLDDTrLsiygiuXtwMfnsm475xYHkS8hxS7UdGWR2av",
  "key29": "2cmay6tz7EBndebjGGwuP83jJ3YpWb7VMtBtkds2rMXHUMVDn92tggzwjtq8zg8Jhvu8sRkHF2AX9L2SM1V2raV3",
  "key30": "h2wqM9XXbTfnWu4FR7cUxY3ev5W5i9oWsDcuH4t3DXRfTwCuyTCPDs5NYMZiknM99AeQWZna2mWcEsueKa2VseN",
  "key31": "3kbzJABMU65uGLnomdF8Wz92acHqpfnjUXYaTLS2VV89C2ym1AWQq5S5wSvwpwGViTHW6WEwH9kNdv69wyvmNAZm",
  "key32": "2bA2cgfuvvQWXhQpqKL2bLhE544JJFWfmmfAChetD8dXaxNLctmU3uHwu11y4gQwNdwgESVHM8rfzrA29H9TC8Gq",
  "key33": "YFNniHSZw2fPyStYFCeg4CmmkTGoKJGRwpdjmKqM4FNifKeWMs6JwjaUULWDCjXpttgnSBa522phaFmfgS2ggXM",
  "key34": "3sEAGvdmJyxGznGwW9kZsNzuAjmUChbMV6KEtYCBQuPe7dKJpbGXRQo4as5sDX6fKuoE117852Z8623C3qxz9GL9"
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
