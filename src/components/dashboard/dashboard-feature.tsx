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
    "5ZLX4mcwTGeuWa1bnPVAn4QsPhe6gathYwVMuazQ5zMBjVUY3RFthEQoU5bMiBAAQR4focRJzs5JnfS6TEJPFH7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bt9FGxP8L6JnVSKbsugizxbkDHKDwAxpWUhfhRRGXDBHuJtuHUxczEjz59ZZA6GmK3KdT4b8qY7jGnvo7WDgLAa",
  "key1": "3gyWRf4GjTxD6xvoDFaurxUummV8GSteEcuZoxnGbk5eQhdusvnkAvw6yzM3jkNvt7xEbwGfRiELh8RQ7TxuLXFH",
  "key2": "aabcbejxZmvUgyUfoBsbvAEiFZXNvxLaaeaD9ZsptsHMMNZ4p8kojqanMxvs7CJ4Vu6fq4uNwTaTqZragqK8zsj",
  "key3": "5TiLXeRVJVHDKDxZg5Uf6R1F9Ntg56eV1g5vdsbSVUKjLdhUcY3TmAzWpgS7WyYb2hHuhSLywD4iVSQs6ov4pJdh",
  "key4": "pnRffvrFbW2ZhHLvKWnk6mUMabNZ7RXRJfivF9C5ik3KbNV8yLp5AXwZRgmqX6DRS1GvJngU5jpfk2vcEUDvNE3",
  "key5": "4mV5xJzuDPaqZeDcrSej2MRR2zQ3vtyF34jkiBm25zcmNAGDmDjXThjLgNineJYtELsPSfthrCheoV4ToyVShM1J",
  "key6": "66Sga1MVYxmmzZq5uHHx8Crm6yX6YKDJXjsCtrJvYkovhJe83emZUCGnGV24vLV4QsJcq3qMCr7xaiviHDUThCgP",
  "key7": "gyG7iNH4rqzShQBGfsVT8ZQ5iKr2ESJX38WycBapmn6ns8AGqCwgFz1HXPuMwePcdEPs1X17msiVY7fKtyDoyjm",
  "key8": "Xb9hJBRLUohdooSeuBQYToajASbMeaQ6ivvD2ZhyXSnqs8tJw58rgAmJybTJcaUS8HASQged3EV9C1uXVzMotc3",
  "key9": "4VnVo8z7fAQenxQhv6ENNpUpZ3FEKcXQXRShonkZq19E32TmBhHXSfa1VZxKCgoAuBiqEadvvzTB2ByCfUxjpPiB",
  "key10": "5JQ2V51CqYcmEvB1SHTd7L2oKQ9MkG9Rwc2joT9um6N2kECKd99Nnjv6fua7yJqoDZUGBVorFjQRMvyWVNNRiKR1",
  "key11": "5U9WiZHT9MCZVCo2SwNaiXzKcouQfefhxcCyJiw2ey73hY2BERtX54yDCkPPaaeWqDLoK9HoSh74K9noygAR4JhS",
  "key12": "Z5QmEMpgraF7QbPXsQmU5DAaV16EAeW53h7xBr8tAMFN82yQSvhFfXVkjpZvzxniV82cYb7NTZPVxUWXC2VU1yf",
  "key13": "65zwAgeTDuCtvexgeaziNbWC31acZtc29qc5N3fBjYybxLxA7GWeagAsJ8QPPcLkWikrBJaL9hsiqLriqgVEBuhc",
  "key14": "2oTurW7JrZCiYLYbV9f7ERiQ8v3Bii6cPNZTKCcpi5qLmfMDvtXDd16BHzvgA2gxsL5oig4MxXmLGUTyfomewEej",
  "key15": "2nDWin2VfBZC3tpWZB9F22pgXTtnWNEHfFTcmrVbphJeXWMAUte5g8NaJZjjBtywFc2NjWtLzvonYPUFLVGksS6y",
  "key16": "5QiTRVDf5uS27jUA1p9Y4DTPHvzRXb2ayWykVRJx7bFVUV6jimiSuSD7meq1ua4yc8Cp9wtdqvWXoNbwf8G5f2cW",
  "key17": "MRccm5pfpxrpN9rm1gGJiWNmBUqPdcc1mqqFPDF9dfJjTLE7pwpuGzxvRcLmZELJHomsr1Ag5uR5dndxMnnjmwP",
  "key18": "nJ5usqor9FVba4a2ckALqj8HD69waNsyqbv28F8uKGeakkZi5zEQphJumCZiBPhxcKx8fskBQGwChhTN5gmZBoV",
  "key19": "cj7FGY5djL6uCz5aXK5dZXkgyB6GHfxfxyRbYupwxPCdtyoD9wjGPoLBuvFZE46N9pFkK77hu7sNwzkscZ1MYN6",
  "key20": "4a81kw7uCBERRA8Shev24YgU1xyrjdzLUnY5BnTXWyXEmTrLaa78zy6Z8NdSjKbzaFr7Z1tVj77dy7hS2yo57pCf",
  "key21": "4V5gX5KfqTcvuqeLoPhrBzNmnX1dqTnvS7fEA1A9TbyYAUHuPN3HG5LHvwJVeoCKWz81587LSijdvgv8wcknhc1R",
  "key22": "3fnqtDrCcnR1dvwJo8V6d1kXdRKMbTWJvhudDXXeSizA3NG7efuPfJ9N6xpuu9MD2TCXN3Pgo7yJkAW879NrsYc3",
  "key23": "2vFnKxVH7EkrRn61B2yREV9LiDbHUoC6cnpYjc7hx8551sxqiicikBNfaCn4cXkkFuXDoe3qpq8eGLQ4qoNiE4M1",
  "key24": "3QRaeaAXQByYPGkQFJQonhDdCv3TuYg7DYBUdcBfrvafd4wsFq6WXwbTNw2HYM1zcET7tckREGXgrzmNDG1ajdZj",
  "key25": "2D7EszbJPLhwKDQ17yZCBp8dREDGFzEyjKa2tZx5mftrsiuvR2A3CS3ysxiyZguXMQiT13TKY6NJjfUu56Hyigxy",
  "key26": "5ViFMaQSqJZHtcPAFWkVhTJM8gVrsT71WgG2GCmvEG2FqXAUaNfFdW3PZnteWjPNAqjPPJDy24M3s1XkqdYbDjkg",
  "key27": "8nNbf5Jksgd626zkV5eEzxzDErV7WRq5rWniauobbZAYy9edGdN237eGNDK2TMgaPDyw3ctFUfwNLM6UnDJeyB1",
  "key28": "3K9zN6hoJDsC2ZUYdB3253fDMaLaJ43R3oGwWnrGznPAZswZxNsFdaxw42Man9uz2ZrPgZYLh1ghBGs9qvLzcSSw"
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
