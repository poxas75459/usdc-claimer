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
    "4boB4i5HSXYTQcZT73vqqU1JoiuYUvCC9ZgiLU47gnkFXNUW7dJVLhxeEsDMifKvDq88Q8HjovgqKLRzTUuWfnZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oRQqSnEqjSoP6U8k7vNT3SspKdDjD4BhDfKm3S8742tS3FtYNGE6Lc93wH7rqWBGveV1dyQxqVqyBTzjAXxv25R",
  "key1": "2dVhycEMTBimm9fTdn375HiKnYZWAMJJzCNAqg5WZiyhURp1aKeEiscJoMEYzMT8Ezd1ihUp7aQPxZUp4kn4sJB8",
  "key2": "3aL72Thve16wcSyXXfBP1Ji61R5oLGR6SWgVM69LWwqxBRa6bmzstbHUHUQnuRzw8ZEVmBcW52V8cXtZHP6RZ2i3",
  "key3": "25qcH6JVqwMn9kfiGsYXnKeU7T2QnQ7gF1HxXT3pzThWBG11XEhmxzfgF1pfDby3rYyr2Neb8SdyUz2ALRks9Gb7",
  "key4": "YwA6NkHXVPr9Yo5iCfhDW8DA9KNj3FJtQvaa77jjwCv2vrCar2QkWMeqBrkuqV6zm6nRbzW5GWzASvE5ysmzPLw",
  "key5": "DG83sFvBHzUuaW3aCzoyndcsmXocUWnfQPamJNpyqYr868iMjEjEM11i7wHbwazXQtDD7f6qPiGBJPXEeXNxfXd",
  "key6": "3YyJiYduxjDHRdnQPwpFQ6SCX7oV6wLG6uioPRjDQwoh4JqA9U8TQYHVxhxrSkQSgZ6BzTNSHk9gFbDc5PctUjt7",
  "key7": "63bDGmPdQnX1JxmxtxU3aiKbcYVp2Ux9wHqnphTVCK1jtgUsTHpXrGbKrQPpZgxuyDFHgHvrcH4ZT8hyJbJZGToU",
  "key8": "pKKii9dXj2dYA2cnFwp532T34HViLxSwkekc2Rsw5q7DqTciHbzUnt75PC8Rrhc3FDQ28T1TcKmESUsbiUzTw5E",
  "key9": "4V4q6YEM2PjzMnUTXnMnkUsXgBkf7ciaMJyDchrDpmaR9wnv6HSnDgBnmcGs66YCEng3Hs6cDPqRYgtSPvgyoQ87",
  "key10": "5HatSihyXFGHnfTeCATkRWD66QWiPHgGXxANBDtK1j3N7tzcykQgZtzbyKUaNiPL4L4WXfP8zX1irbaymRzVTVY2",
  "key11": "2gacVmH96MUPd3UbWnKFAPQHBWxBzGQTy5bJhM6hwTp69uaVbiMtr2B98oYXreQCs5jve4kj4hoLjvpm71xtq26p",
  "key12": "3fwV7sDHuK7LQW5C6QMEP3avD3F8fwHT6AP9ng6VdEM1ibeTm8bKHYDASfWfvmQYa9fuEwvUnqjDMHtyRKmfGZrJ",
  "key13": "Wnj6YgYZfkeKfKw6MCKAhAJzULLkHJUf2yrE5FX9szTx5vSJA6V8CPjLQmNkVbEqGiQj6SbiYj3pajRhYtSkhr9",
  "key14": "3rwEzXGA654DhNXChTRWAxuZL79dCotAhbAxJAHmryepms8ecaRrWTg1V8x4j1ZPSJMEV8tqktkzrWidp7EVHgax",
  "key15": "5W4vDihggSRM8qSM9ABNnu9tGrKpcpZvH9bmCdDwaagnF8RGN6b1N7G5gQnuGa6EjpsurabzWPJ4yScAx148337L",
  "key16": "4fAoHiVmMYmqYZwPigtCEqvpKpmY8oai2E5Qkpf5sCSvXix3PQuqzGF2h1ZqB3QzXJZDL7fkzGEvMWPTqAKMDDLu",
  "key17": "5CiBNrxDLbiwU8eYx5ehER4wMumYfFJoYmvb1HZ4Lpc5zUwhqLETq7TiNAkyk1D4qP6EQuSQWwjgG3rQzXbheBLu",
  "key18": "4Kq5Hwwd8po8XK4tyZggY8RUsvZL9bjjgc6KYFaKavtZisanYh36riYzrpTYRr7E53HWpCkiMme2wNK1tjf4npsC",
  "key19": "63cdqce93ekprhK4JrfoFdhyUQVE9b8YRW9V7zFSGDfSvNCZkeFe94faN6pWveb9LGWWnHkYRtDkFT5Lbaj4nBdm",
  "key20": "2smfyWu4ejMkNm4hdg599jnjuJx8C5QanR9nNaHSUqbiXmZhFeL4eNJpffLohgCbj2AnAwSsABC1JyjuAb1g35kw",
  "key21": "2gKuUbUKpLzFotFZFfgjb2z7R7B4dRriSrg3QGb9iTD72GpZ27Vd88XVtBCEe6mw8AcxULmndbg99Hsd7H6H4PLN",
  "key22": "29PmEQGom71RUCBGDJ92PVd6f6tafj4svH295WSfLWLEESVmK1KvhjbPa3cHyYDYEJo7uSssQ4X3Fp7kdmEYGVpK",
  "key23": "5RqoV1M6Tf5Tw7MmQYoGS89VjQYvC958mhffaYoEEDYocrmiwYAnngduwwvYbcez8HsRDN2NMb2s5B1aBtJj9qtk",
  "key24": "4eAaBGTCRJ1T72nXT8fwsJEJQxxdZB4ggB1UUzkwbmVGGGzqHWKAP7qPP2mDAihNjVZRZexsoQ1m8fEbvjxXd1ym",
  "key25": "4virtyfWytgRFJUG1r64hXsLH3TyNJBDNS86tSRxcYXPTF6ingcazQjZQrtBSm5GUaGJfKtvr4qtUgb3rTxqxaBN",
  "key26": "5svNgwKHpC7gQbctBmemUaQDCjst3ZKKXkWUFWtVabo1uLc2ZGhQBwks1HqpFVH5RCfXn7Z5FE6N3VukGuu9mJgM",
  "key27": "3gL7CHpPaHmcxQajwDzphkprBomLQqbkmMQchL54hTj5V4n4XBbizSneeaL33mt1Fi68gvYoWhG1r4SiExbqHHpG",
  "key28": "5xf9g5TbdvPuLU13GbLj1p9i6yxYWNkd2bFM9bo1WR6LyRXHeAmoMg4Y2j52oRVYXJxzyKdYewTKfZDzaLKwbPSr",
  "key29": "2SjLzKk7bCavNzrudX6FDsTcQGJTdZ2BRxpTXbqZUcQszJHWACD5QVWPe3qKtJehrv38ZTSrtVT86kBMgeN7avrv",
  "key30": "UqNXKMedSZZAPTn2Z1j6uJa9kfacYu6qQMD878sVfomR1K72XKfeJ54LBmBXPbEgXCaSTc6NrTQ8VMbpyQEmFcU",
  "key31": "4NeYnFrh8yD1oe9bZHTQZzWwA3Z4TANHnQ26a5VV9dAc8vFtV8sL3jqit9YZ75wKdZKHskdp1HfsbgTseaK196Di",
  "key32": "3qHK4CL6MiQ9baLBuHnpmD8T8UffrJtpxn4EQ4MFoH1DtsPExLZoaaRrrfDurjtWrqQuVNaPkzgt3WqjYqnghMFe",
  "key33": "imenCVS2J3cyHfUywrmJoE3HoSjxx57Mq2S39SX4m78AdhJvsuvowpd7YRUeTVJWD2nYgZ4Jo2VY8636kiJFQ5i",
  "key34": "ZE2C5UkwwR9MxZDbM66hKcbzT4v9qdRiegAM8KEy5MZKHM3jrQVp2cQ5kYEaWDYpknP1s7A1x2LrjsoqhQqhTy5",
  "key35": "4ygaUqUrfGZKwqJ7moCLjf51KqZYSN77Z3uokpXvtTyh3oRMqQ2YK9LvQgsAW666ZT7QH3hefTGZD2HCkBPdwaWg",
  "key36": "4wxnZU1myVdXmsDcaKEEmtZhDPEZLqpe5WBZ6179sh2QAZZiH7hx42zb7DqBsox8uEVAtBh1zUH3VKYDgcHeJsqQ",
  "key37": "53SsWd6UmWMJ6MLFAGJQbsgLjEpsvdsnJJS4aQRco9kAsY1bU2j1DQeo9tzhwaPmsV9smiJnkkWUZyfwiY1TtvWW",
  "key38": "5Zd47JbGWhJRK2GDWsqKX7dNozRAxobhpBF1BuH8AT2HCAz9mueqHuPAHroWWwXFFPYrfLJUtihtpcx9S1aQXqL8",
  "key39": "5QXUJyeSnpYefLrnUNijRWtaK6BWJjFr8gQvmm6bRJBQZbEXYQzefj3o7oJZPZSnZVuXwquwCd1SyUzXDnPGHKRt",
  "key40": "w1TYpLyBQjVkazSVfiUyK4SDwvYLgAvJp5bwfQrJq4WuTH3Ns9j9UWeU1svhPCR68ofHcCckjFd8kcyieGsYqKr",
  "key41": "NZCpZqsc8EjkFGyQTzYXVWiK9oFzwsZ5abYFr4sZAyJGQjGxNbueYHvLkUmXccQ4VSsxeyHxPDgAckmTEgfdQpe",
  "key42": "3tKnKBpv9vEqGSFLqN1ybebvbN2yzyLDuHFGyjDPXfN2e8cnB21RfYDVx7AbLfStqfpEoZvfkUdZgW5zuyEFizaG"
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
