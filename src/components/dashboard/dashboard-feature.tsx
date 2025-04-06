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
    "2z8rW9vbr1Y8czWrQGGKcfn7tYLs9HFrvyTttVsVYGRAEK9B7jCE4KkTpdbhygkCmF45e9Ys3Q6bCuDexaeqtJ5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NvQmS631RDDXBTpxuYJteNunJSiRpFBfXUytyC8q1sfR233F24DiT5uqttWpqjyshuaCPCmh5Pf4tpqAhVDaD1K",
  "key1": "3i6eQtY4Zoh7U1pzPLq5yEUTjqMsZmGffyRnCSqPK4a6WUpiXRyyRCP4w91LD5xs9JCRcbpDkkRqvGneEK6geego",
  "key2": "5k9sQfUAaDdmHHg1bfV4AAhHKFHaGaar6Ccxxqg3cEHYFcyMZvzPK6E64KmEgAEJ4LZZ7uQjLonop7SgwCYHtbkh",
  "key3": "4yQ5bwjpYvQzSLoNBpj3qLTqbATyq5sGQEWCuHMy9gFwuRiuoKytmF5U4yVgcfbyPtM2YmAkN2jBTCA154PS6PaP",
  "key4": "56uUhyqcAbKs86aLM8X5dvwsicc7XAKbJckzZzfUAWrmUuXTrKSdAQ9poN2VtGtbK1hY4y68nqa9rLzzY1jATStW",
  "key5": "4qHEkvLFFidSpwtkGa7Ksjy4f89NBtvprgetztFpDa25mw5a5oL83j61P1XA9NT1Gfp1wCQGYWQR47gnXGuTtQFX",
  "key6": "QJSJpMLLeztwxYgc2pGc1r6WNYw51gzbhXmkvyG3a4MSUxe813QirUeEBaFEXtfBi25KzYv9T3wt4dp48bCRCFp",
  "key7": "jxLV81aQXA1mJkYhFWvJAHxiDTycVvQd28xYfD7mUWF98JfwrWvyuHzwpxSrPNu1g2y3DuqZc7Qc8P6F8tgYoQJ",
  "key8": "4Gj6C97hJ41E9fBNSHyKyDE8QvPyzs4quSwmyEQigbmQtvbwbzs44bjTpLM3uetU5Ymg6EZBeKMjnfwUkqvqYzbN",
  "key9": "3YFKW3FgPPeVrudNet5muZazEZyzhzefkbuqL4dwcexmv5Ur2aXywswWxzgVx4jZjP3rTnDRQ6eLbHKxdrYPusbw",
  "key10": "5j16nELqrpXKsWCTF1r6ncB3CQCaipzbdbHVVw5N4g34BgV66auSFaCPHZYsE14kQQ7uQoPYn6C9GaAWpZqK8XPk",
  "key11": "5ygehfrRGmBRpo6fPsJ6YC4qiq1uBzyApsQ5GqXzSijsRvsjFcp3ny8L8VfPg9TiDzMFDWEdD9hvL9VSpuagtaYx",
  "key12": "45st8dkdD31PPXLzTtRUYjvf5PEgRMTcvvD3QjiMhDzPcuAfSeNzRE6jwbrb5zYQxnCi6Wb8GYJQsw3ELUtUuGjV",
  "key13": "3YuREnz44eTEvyCryCygnHZKdvuNMqqNQ1TheW3oDTVm8ZQSWJwqDh1CofTGCKC9oPXYHNvoptHTFVCcWBYDNQmR",
  "key14": "3qnnbVjkwZMpFeCrbtwQwbMmnkYBhYMW6z3JuHav57TJ9bby6kucCmf9fKqzeMDfqLw8JhXi3Jsvo2Mo6UHNvUSY",
  "key15": "4yfLzcVtEnxEFE6W5eVumGqp13toYqjzUxhwdggjRbCXfCW6UeDoDN9guXSTWYX2ockBLghLWT7BK8TTqZNPV1Co",
  "key16": "5AqKbqo16WDve8qez49VfwVrbMR12m4mafA6nSV64rdLySF4kdWuZKRvwWkq7web115wQDJsh9CipRMbN2Ejzsbv",
  "key17": "3AgH96N42Pt1TGJb8A62a6Z2kkRejtraYGitMK9vBFfxVjjZ9AMswkWQZ6thJXvJNSXAMPEbqJ2dG8L8n2vd1h27",
  "key18": "668c545ckymBtCCqA5QrGCuZchbSv1yrBeCp3x9RbL3QnCDs8VVviKLHvDQiPmteskti8o5hAzH2bYHHyqwtRVof",
  "key19": "MG9kDEDDkA9jDvVpYvzVzuueeonfRemZDBXatWLkzAyAGtrR9z6eiZkEztaWtbcTzb1VW4bQ2Ji9AhKTHg6cphh",
  "key20": "4EPDNYfZBCdnFFkw33pUwZ38E5xKNShMmGsRRQosMphsrcGvksvtufJbkEpP6QVdyo8zCKzJAqxUbr3cPSyutjoj",
  "key21": "5i4zEcrquKnWrMuCPZZrEQo5gA9qL9eJTuNwtMEKU79pg2ajQMUSnt5Q7oTuPQxXhrpGiB3Hgvqwxpd9MDEsp6ea",
  "key22": "5VpYJfNg7sRddnMSDsk6E6uPaDu4PnaBRzBUM5b5W2rBtaQFjatks211X7wnkkZ7Ug2SeTsDP8HLeGMGL2XxPPRh",
  "key23": "wzFv5BFzbW2Wkk4WBTWR3SKoiE99KxUaxzUGEehqnBERKM578GA6EjYzU1biSMJBggQTBhWEUdk99FHfTCWRuJx",
  "key24": "2HvSpn7GFXGZ1rkbX3sSdnnKuA6Q5njXPKxtKR3F834Ps5nNSUnfRiwDnuuECAvi2VAnzR65MMmpp2FzoSzWdws8",
  "key25": "2j3meoR5kwPjMmMQ7TeiXz9djuyorNNajku3Xv7tykMT84xEgNKaKLNpJdai4sixXyuBQZai9K44Em3p3Zw33FYs",
  "key26": "3CqQ8poix3Y98bqvgETdvu8KiNZxHqHhBpNHuM1CXj71CHuvxVpG8aUU98UZhSQCgeDw8eSpyAwf7QLyYEbQqGhj",
  "key27": "55MqWCkhMtUTx2YqfpVTyXyewtMwnGLUrXMNkpFyvd5V6NLqf4qoWaX5uBG5prx6eekXByBsvpwchBsB4anYt6VL",
  "key28": "5j4DoENN5ccGXxD3PTNAQCAfEHeNLyYgcjCVfQpzgNLXBE9FAwtXxrNSHvdNkhRUHg7QnYr1Af7gtTgM1V6KKmWC",
  "key29": "3Qyza7weztBHTUfEEFBQ3hhn6ss5Lc5DTRbkNxRrvPQTJ1gTtKPrWHcLhX9gRUBiSqbboHLCH3nc9RLcTNP4osJc",
  "key30": "5nCtsKjFvkM3cEPG23NBbRhZBMDKBW77rKSLmrC1v3q1FXG83ah6xzvf7FtsnQRwQsej7GyEFwuL6ER12HuD99NX",
  "key31": "4QZqkLu5QC4nnhS1X2awkgBcZCxj3E6dgFTkRMsMmWR43XSbVZXPRTNyWg5zWfkPJx3ppCM2Lmprh4hC3Hp6Ccky",
  "key32": "66YVrLQS3uUFNRsX5ipcJPz8c3GcdmMWxZ7sPj66SC5WaGv9ZvEU3EoTiV4ThfTLZcy63KLZot3s3vc9ZAy74dvz",
  "key33": "3Jn1hguYLdMBtiMxqGkDkz6Y4zv9uZMqHuixcJZyJ411eGv2UYd2yDEaECxQ6D3EHmZLRnkjptg45TEA3aGdjGd1"
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
