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
    "41cPqVFfhJeYcu987Zzd7XHebjR4XPzb9EzHUvbaXHpZgdsA5hY8m9wVTL1y5yaKp7veawCtKEAPhX2YpBoXp79p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sELa1FBE6yK1219XMXPf1sGoxgBuJWXg84NkHweqyEPqtNJCA49sGwMVdypf6cBJYz4us8QBCYJbcgM6aDeYv6K",
  "key1": "5cdnrfoFvcAsB69ZChq6SFj9jAd5KW6gCBKL1tV2vpYmTqUM5vuyeb6f3MQQrYTDFbKdP1vhJVcAYmJt792v57yW",
  "key2": "32Lhdk4Bx717ck2abgJLo7pcUbPQqvUWPjW4BboWmqVqbf5Fm4BEmYSYyNfmwjiGMr3bbZnjM1KhgAN9mkrCouNr",
  "key3": "4cbnmWd8TeoCVh8q6pELzdovgFjUTHDYMCZhQeSF2YhjyhBboamjVkPCdqAUnCQqRodeeuwT5RSWWkj2Wgy7Mgo1",
  "key4": "5nGPeqDVpq1WmZtm2jCBBHcr9sn1XF9Wv12ihXwZjfqxqFwb5zWiy53uV9rs24Yf7PjvBNutTkvCwGPuLrJcpvnG",
  "key5": "29WnUWMSGDpypG3UFoNAeNPRiFRQaHKBp1VnzswBewcSJzPCuScjH88yamkfe4FTGEKkhcTHKHmypGyaiymEMWDa",
  "key6": "2jEwAoFBoRkML2mPwCD2vsXxj4sT3JYUnZsCEKg1PJrYaMCXwQj2e2SqrvKNoYuf2PAZMMEUoAabiGL6ikjQ86ux",
  "key7": "3MWPmGeHKsCmY5NQkwE2YK3rnRAWXyejL78dqE5CwjZqhUPTgMnykk9mUMt8sjsiorLDbcqdafeSYAUjDNxPawaq",
  "key8": "4CSvW5EEPXvKrgUfPmPevoYDVQcPrfsRFz7MckEB7b1LGxLXDQpKxnrYztFSLZUc9eZAiRfwr844meRKNb4BqL7F",
  "key9": "FNiv4QqA4LAoBc3Lw5aBXiaKE4jQmmSVTg4dxikpKPMgH5SnqtxsrtJwLs8rajfojRDHnQ68yWGKnAzbndjzBoR",
  "key10": "3TixSzJ6NsQzcRvjwMoDgFytmw7zJCtyXy8HjaQ26nX5Ptrc369rCv4unBXzzLHyheLaY4R8AQmgv17Av5GcqCuq",
  "key11": "4uSQKRVvXjRQgNXwhu634HHXoT5EdTJKY9MTUFfjmNF7bRXsBCF5opCVHbwLFSJyGqMZyK9KER5vrLFP6pHY8dFU",
  "key12": "3kV4k546qEoQKmjJDDVMQAJBmTeEQNQAcwCQ4KNbRrE5Y7wYLFEqrdssFnAR6hFnr3oZRkLCnVwRv9nm8nbJF9Nf",
  "key13": "ta3SVxnCJYw6QUP1mUxPxhDVxatrjmsJ4CYjpryqE4DzAkegyvkkb5iJmApre96kQmqUoPdYmL5UVpjLa1E3eA5",
  "key14": "2xRKTPov9qmJZfdEyXgZByX4xgD8Df3FH9wZ1eJ5eobmgLvAzVPHssD3AW42BeLbFT2QkoN6oLscWSxUBJVGYC1R",
  "key15": "4Nd1CvvC9LdV7nLudDzgoWgkHxp1T2yof65KAMrUscyrau88xQQL8F93LaAEjKyeqPft1zsVRv31acGthUAMr2sU",
  "key16": "8KQWdcsVmtswDB1RTFvSaTc8Q8XWimsjDWdoEYjwULskoezUhed4nbR1ZRaLHzZaj8C7Q4xEzYDbcUSNDHwuaGk",
  "key17": "5dS1xr3vwpWqJRqWqJszZfNqxAiFxfCxmvc1Trm1LJ7TAQJ5b9JXGqWw15QTmGCPJ4YHRJfz3H6jdQBHZ7zJpsMC",
  "key18": "2KWQutkDJkGbBun8kgR3GjfiTckHXv4YNWaeHnVRdWnhWxqshit1vHQyfp8N2dM7gH4ThXVKoqWLWHu3eposHR7W",
  "key19": "4aKug9YZa5XvREybDGZEe7VugeVDY1MMcnMVrBK2pkHD5JJVHiaAgbCFigG6Kq9GhERTYCs1JSN86EHgFUSWJWvi",
  "key20": "4EhL7ipkkDHsJPDZ2J99KBJKXagnfkqu1wSLC2v4yvms667DFHLs5Gsv3GosTyKeNdTEKdw1ktGZEMPZmQfsUnqj",
  "key21": "5nekwtyzfn9pF16xa5DF4B1C4EaoCvtH3LTMde3Qq69VftLZ6Jjka3u5GMRQeXmDGmhoGvru6dFgtxPnhJ1xX4oH",
  "key22": "5MBot38fmSxofYhBQiLfSmMJYgcUorUwZ8QJEfpeJRTeKa22Z2DeocKnnWpaotiw4SQUdCjsxNx8bbgcRptkVaCB",
  "key23": "RwqeLt4tYGMwVp544myrJVSQ7mrVKj2XAChtksLFVX2aBTPDDbuyNVkqH5oDWHATCCxACfKXrC9yJXpfqs2ynfm",
  "key24": "TiwgPELt4CKmj9ma6SixXHocrb8H6q7UZdqftEG9qkEJwJmdPkvfy11y5heTs6T2iCYjPNwyyqJAHLKdmK8Dd1r",
  "key25": "2BrekLuZheCM7mU9FfmZ6ptYjHFgdFUrrT4KrKa3ypPdQzXtnCKmw5oLSpKRzPBQtPTtSSVDDJePo5mckF3Rkefb",
  "key26": "5uHyKF7fsZw5nD6okGtRHvZbUZpuuoh1GusrcfnRGWhPydqUJs5pP9oEwdVKsfhQwkjzo5cYchecDWEZ2xKJUbbo",
  "key27": "TmFpHHZx6VJqLS16ohwtRRiB2T22Uvug9efpwfR527iYgqjrFG4WF3EguCw25AvXReV2T94TXj3fgbkV5nGzbAN",
  "key28": "3GzprodbjSfrnwCfSQzAWUrh2pjKiRqQQvdRByfZKEc1Ftz4Mh7bQvQ6hYyrLFq6iFxz1bhW3k4S4wPkYjNfBFnh",
  "key29": "5cAkwfs3oua3i2zbS9wbCWqufwRYeJBZCnWLsCJeJ7UyyQWSaZSWaEqERQo6RnVaCHGdd9PnMPqnAusxhyKxexW4",
  "key30": "4Gnt2d2QG9f1DPJmNWSnRbWsxrF8SBPS9HAyj35TpCt5MCdv34nCEegjeN7qAuFJ3GYKVo7cGrhMdxPmGxMHB7LT"
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
