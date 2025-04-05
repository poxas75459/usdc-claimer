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
    "4dyWhiZoBbrjTHJobW9qqQpZ5BxNtwpnCJLbCv4WPFt5YZQ26rCy1h8J3HAEAYgrpXnsWnSLcVjuMxu2Jk9jJ1ZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ma4L4djabhKosnJJu6Sj4QbJuFgefWyzYwq5XcUwdjwm7J4kwo8Mw5NPTEJi9U4B5PASLZt2PHiSNiFAXFxGLMS",
  "key1": "2cp4Xr5KePUMDZMHQSmkLFbyXsj8F67SqULeKSYcSBbqjF1i2iSzgFcqbFzoP8AbEuvSFLCKnvn84DTjQ4qUSGc2",
  "key2": "4QJv56qLENtvXE4QsL8Pnkc9e76Xsyy4k3tWVtShi3aBH3cRVqUsXuqwwXzNiLnvDQkiAU1yRCuxAoW2Cfd5TZiJ",
  "key3": "2kHcE58TLoEpoCgvbi724SEZYpP4e2GXWY9NJ8HTukNaj4viARWCXXqm1rQ1gRD8Sc87W9BivhiD9hhvG6s13LEq",
  "key4": "49DseHDvvBMbJzipAzMozNjtnPr6Str6tbRNVZ6Y5RppZ3dayc6a1nnchhmxjKVucBtoJgXaLuh7GXDNUoevP5gW",
  "key5": "2vH94ZuAAqcamRP6pNJQKogM55yKu2wD1GmswJtVV6jLGWpWiRivSj7mmk7J5UyN81ZVYd1YeHCnni6CQVUqwkcr",
  "key6": "2E4urXKEbiZfLv7CrgB1gAu77F5pGMrsrLKK8UFkSnwV1RsAwTWeaJwVnDb7fa1nXRaFTncfD8jq3hQhsswqpFFB",
  "key7": "23NgE3HnFTxVuvazsov68dgqTFNSqt3vTjSoxTPWJVkQPrczFKs7w2qkEPHWpznLAQyHi2jLTqHLRbAXc8K9DhQC",
  "key8": "3yDrd1Y785JqG75VbZFF8tLQSKsSZH3bpq8vH4ssmV4PPJRLNbxk7mVwvGSUmT7YF5Q83ikJERD3LrYCWtQ53VVE",
  "key9": "kefXXgbXqx3kLCtBP3v1UWSmNFFXiqXiJFNBEipKtaosv3Y4tm1jcZjLwGMy4A9Tgg1N9PVGdHYU8igg92thorE",
  "key10": "W2kf2WFifxYCa39FFLFryvYhzTG56DZMRWqPUqzNxRHVzg2xTwivuaCzSiazceKMHVcsdPaj9LY2rCGAZjcp6Nr",
  "key11": "3Ui4WX4ZpbLJcqPHthqZnXVs3ANqhVxzrSUdPVbpCocYLZq1yZF7pRu1V3siR5LviyR4FppiBgtJmV1qViHhojvN",
  "key12": "38ACqJC1zv7GUi3Qdn3a3LWwCvNHq5CEmdCy5Y7DVLPmyq98qXMe5fLQq65aarTiCdshrHj3tAxLZnTeoQuakHX",
  "key13": "4svkbhcwnadT21arMe9HSsKtsQoGWaSBVCaQjn2DiMEdtsbEaYPhAEEqcLmRk6VXrSwQdvmewK1AswsYjiCqUcBM",
  "key14": "AFNZp6fzwfcEFQvmC3L6cvYVg2RjZdsZZW2yrfWvB3rx6K4ko4EJDNQeXdw4gMU5iuTXgbdkFpgNHsKKtoSuEWo",
  "key15": "4Kji4ddDw2T1qsKNvmGa5YrkVd1Nbi7vrPnvx1z4juxswYrSvgbFcZb8f61J6hJrfFY2anMU5cDSTRt2xmuVrcF9",
  "key16": "JU87YxH9hNrGzjKm9gMZcbnjUsBPDYB8yMEHbSfedJMMMEEoorFjF4UwZUferi6dzptHPFjz4HtJxwFGLwUDU8L",
  "key17": "BZW6zmAuofg7LvnwP5wX8YE4YcvQUkmb7VdFf7GJ44W8YsWzmSdvzuKRuB6ueV8pRgtH7uVu3e2AUguL8uzDJdQ",
  "key18": "NvbxLSHW9CiXYTXguoFQbpFSTtE1NepQXFCzVa43gzN5nbR9PwGKhSaAFdPSC8YNyyt2PUpxCCx7Q2WrdxQLZv5",
  "key19": "3iQyYDjH7gfdtLZeWs31crDJgzbk2YnMb7XnrqSiQxnYkUhZkSHY12fZeNqiASjkCMxhVF6gjMFP88xUCLadqAz7",
  "key20": "3VvKh5oBMEqgJiJBVsHuu5YhmEZFpFM7PfxSsFFkhRL5Zo4MuxpD8MvxNfMQnjVWXgv3x3qQCj3BsCKpuwjnJ1KV",
  "key21": "38G7d1QrMWqqRa36eRS3CjP1JtbUWpDZyebsxGwRxhFXsj7qz8rWZDwJwcyvQfP1gG6kgAXFKvke6B5NNYpyKRfZ",
  "key22": "XE46vuhXMY92zXgdqcgWs1ny1vhjMZuTfWDGz13Q9fnDeN7Qe6mhGT8vbrDTRhFKPtjmgpYpzcXTzTL2iZvs8cQ",
  "key23": "2eaB1uYHLH8oaRvSYs8mRfokAhHNY9iDymDZtG34sWisWGZhrgHs9zv32538pRquoTxBwZVaw8dCjogKPybHvioB",
  "key24": "5RWKkL18PjhD385TMjxUpNNnGrp5Pj3CJorruoqZ66q8mdEk7ksH5mCULnC9uiU5gWqRaAE5GrUFGMAcpuFe2S4s",
  "key25": "5m66fHX8yhyVPtY9jHDfmh83T6fU81VsNdnh6DTy97B6JzNo6Vo9R6CZVGMgH3MFnMdmcZYexqu6EgwFyYWS4nXx",
  "key26": "3FfqDvhVafM9Qsk2mMfXnQewEwqTcdvY4KzoWg85HDvNZyYBEQVuB5jVrTd9hvTCjXcdebag9jdsyFGed8qdUVNh",
  "key27": "4Sx8L3J7kQXvLkP3CuWZDXPBuZLzubUTpgivkHu5TQ9MMZgh7NVtdULkEx6Pkv5vipoNJUecXCBi66p5aryZUFBQ",
  "key28": "3Me3twgKLZK7Z89Vqj9yzAwGM1CrzFthPPZ7Xt8BiyaKSgRsxzLWARa6kmBipRzRexAQqYo76HWWD8pBtiMK5XZa",
  "key29": "5T4apMJS9JnbZhg5jV34E9opTmGsnUCMtFWewUquihVkZSVS8phL23oLBHdzz8sQseHMGt9EQNtWxxfKERLbEZfE",
  "key30": "4x25pVermJhUTNhT2Q5ADrY1fkJzPCaFk4XpSesD4mmE76sTvJm4GzQ7WZXjzN3mcGZkXdpVc3mxXYqmaK4DzJNB"
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
