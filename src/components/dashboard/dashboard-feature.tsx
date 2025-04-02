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
    "2QH5Kz78BX8ZEgqeYsH31qpRWqHQfNTeSnmYrieTcv4to4V6EU5zhjMxe9RLbt8UDUvwvxu8v63xfwLCNre5rh5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xUhkTYr4whUwi7mnyLhooA3azA7HdDtp9vK2iY9ofU2PGaGigXebDT7AqLZpZT55PQyNErEov9MdaVtzKrf1bKF",
  "key1": "25cRir3yFBT6Z2ZK78uNkdMGrLDGq7pEyHAK4fH6k5goFMsDWrXHePRANhTMbVHg3SNsaMMPiugpQUn4aVrKmo3m",
  "key2": "4JtmTqyh7waN9rwEndvTwKbWNju5aKwYbh21G22VpRJihrTcgG11XLX11M2WnHqbaBdJ6CY2Ua9UYtB92WZBANwh",
  "key3": "2q2yuEJSuwWRpMLWA6twFvEGquGELg6yB9rosuTVxAa6UQXBbvbTMvS1oSh6DsxnddA9rCByTiXSPmGiXa2KRiqw",
  "key4": "5gWWpYQcATx3aGSJJ4TsgVdhcQHw1GqfusV2G8hXYUuKdeaJ3qenv7Ebjf8odYXpQP8iB8e2sNbNerDYBQJn1MY8",
  "key5": "3xQnW94M6xGEH4T6vXDBLe6wLyYyqFyTZmE5MCKRpNsQPkXvhGKE7hhM21ptrNXuVkTxLbFcAdkZA7ZxLCq9zrav",
  "key6": "4G2WExfSuxLb4C5PFbbiBMfxumwrKYhCYdBcSZLC5rFc4NVv1LwXwY79VUzic27itNZ9jaCTaFqaTJSQqT2meiCD",
  "key7": "2PuNc8V6Q639x4xRPtjpKYHiw95iigSMwj7N1GcuyT373wBHiAxwVNnMDsgyxSo3qpvsusKWXUTuFDrYCvEw1nvt",
  "key8": "46PSfjcs1a7z1t8thvTsVB6FtxgV66SMmbxz9k2b356V1oSaKfnwPW8z3cu7iq6hV4v6raJTJYw1GgdJ23iuq3vg",
  "key9": "3wg7wJjgqjCsDowLvphi7S8iFaNErR7hAdmZQFpaMK56qY7R2aWd73M7RLPKDm51eHSKc5QXpHCeehTMDpqy1KES",
  "key10": "4vWssBLQ6MHRFUzD3QSgWeuWaxHZbo7511A6tmtW7v4SbPKauZ5AY6z6bUuiBcKWhypPLpAD7UaSXcc8y79uy6vs",
  "key11": "221yakyDddTkgxXqTiaWgHVmWjf9coKBWScBrN7hN897jMBkrqu6xkxqyoDbQ2AtcuSf8PEwikqZaoJy1VyVnWis",
  "key12": "3Q5oxEgop369YhxT67ZAN4TfQey5cothyM3DgJ4LQgMkKB1iB8rsNpVvaygFsdMNmpqTHyWDr9FMGjehMaBhaLAG",
  "key13": "2RzYJoujf2cNMQKwmy4aB2kpYNeU4pAYziXETyQyG4DZAtZpu9TwLFEG4PxU7MHhchoT5FLaqTMNZ49ez4wJ8kSW",
  "key14": "28QPgB7gZz2y83Z27tAsDWpW8N32RmzFSaRsu1ktRKTT8YD19DQazXvmi5kmd6M7pPbfKp8PP74vxL2uujPuHY3B",
  "key15": "2fXUhXJcYXDmdacpKvdEM1KBxP41ycBZMqiyzdmafRDkuzuVfHyowBXbGEf6cgxT2go7UGcVMuW9fzNFrnMmCvH9",
  "key16": "2qVTwPJeQXCRgmggzxkb29DHfAWWM7So1fYNanTQUoVGmk3NfrCHiuN7TgTU6FPLDkURckX8PhKgwQM1JSehPKZX",
  "key17": "SQbU5yEwnrQzcKa55f9JaDzLaU6mwSRnN4R6CmFuYQppfCfP6r25nb8Jfqop9bSBanVtjwLHdKr2Sfw2arBbvoe",
  "key18": "4554cfigbkSJAxUus6NkD8pnxpwek4EtWBynpGnVm7akcEiRTDf95GB7kz53uFsQFc8xCEeeg1T1WYBvX9gAMnHi",
  "key19": "G86RLZAUmkDPRMcmeGntmfsA2MLoC7Va9aKmwxsgWeo95APx8hfjSvnMq6FFqXx8KyWtAMZJfwFijSMmcW1zee6",
  "key20": "5Ru1LyUsMihYJdWngVVaeaZb8Wy6A3p98PyKF1MWfkowwTbLmG4gwi2FL3yUmqAZRnuVHHsmo8JVxCS5gQynvH96",
  "key21": "2rzMpMDgXHJex7LvAnqKyQh6dGNm4HFDXthE6mbrjczrwsPcozsSp7hxs87sVVjvdXZ45C5xKhgGN3SaYkruZdrX",
  "key22": "4tjFGHDd57iJquVjDZyXrtvK1ietKDVY95i6sH8pXUcBUbBXDf8p4Kdm9ThGVWdmcWr255jFdQ3gSLC1HidT4exP",
  "key23": "38aEh2gFJZAqaZoyFWaXQwRF1PsUHnm2kxoVnTdFo1F6CgLu1iZpQyafMXnphw6J3pgsA7nUn3aEt16FjtKRYtWK",
  "key24": "4kfWWVWFrgLeTp1iZKPLGLvyKVA8EhQX3YjddZS3UN2MvkgeEGYVE6EgV3YHB8PaorocPYqXFAKUaJXj9XCqPAXn",
  "key25": "4S9az9cr3RFaoAs4ZwFYMntQbYdX3rQNW13bNptP6LxAjL4AMaL2moyHUwsBX7mmjD4KKCJ5ntDyRwL1Apa6xrWv",
  "key26": "aSvFXqPAZTXsi5WPQydXYqZjBkSDzZni6ovun2562xQJyRkvj4bb1P5joRik1JzoYNMxFYS2ApS3R4ikEt5vAut",
  "key27": "HevDJYPyXn2wZMAaD94EEpcsbTyTWsuQXjntRFyBsd9aBW8hrRMHW7AD4QtxZYxWK3rvXUTAifKSytmoAu8EzF2",
  "key28": "3PkvTFkeuSWMuYt2pjgNQhgMvi5wfXrjXn1SNBmJPj6a71qWkrpdjqHPoLJid4V5tCD9k4gtDBiHTQEK3QAjPs46",
  "key29": "3vCS9QA7L3KB1rXp6i2wUHgQraXgWHYnXU7zoq7nnhiDwjCNhEMe3hrg1LRi1x64cuAT4qorZQUJiNH7iJE7w3kR",
  "key30": "3ZED6Ltv4DxKwrE54RRVuwJ2xK5Ujvt4NRyiYW42zMw9CCVDPaiWmrg1xiouQTdhAskRfRzDaehqG4AS6Mvasa8p",
  "key31": "LGjLGygZhGfUSdyupVb2R9jhqMGVUbg3GTQaG4bSthZrTjtEqzT9qXX1rYKpgg4wb1ZZaLin2t3XkhEat4ELTdZ",
  "key32": "3SnSNMWLDo6SXJokJR6vH8LDy36qn8xDEobwyLtqw3bjQeaTiQnp5zFbtbvKJ9akzgqCoRfjHuhRvWFMuhiACgpv",
  "key33": "3vXyDECwqNMsQx9e35473YJafVCqr666oREBFcZFfikmsWRM4t7zdSxnU8hk4j1hx3eafzwFzPvLdAg7mDTJBrGk",
  "key34": "2doxvkzdmRT5fnRn4wBySEGq2F5ivih3wAk4CYW5VVQq4JAG3nVXnDgECKS6nYyVF3yg64LSPphDf6h8tTyMLe7E",
  "key35": "9BuoN96RsRgHJo81zr7B1RTdS8iBKgDEGbY6jFTaPwGGUbCuCyKWEzzueG9xsgJkmGN4MVtGxszMWtZHf8LaaBd",
  "key36": "2TpWFxALY9R7rL6yVwgaaczPDj5SuVAQYFqpa1Z3X3FSSThmHeUd4rSCr62EWz2nwFggiUqCwxNeYrf91ocsSDsb",
  "key37": "29N43SAHKBCa1tQAz5NWjX7zyLFUYJS1kzHtYFfG3q23Ny1gXmdwBM1hCR1hH9wXiXxW3njxd36ARZ6g5ikuCGTv",
  "key38": "4BDDFYKbtB1cReuoxzW71vwkcn6Q1H4qsB2A5xA7i7ACpWzG1SCejA6y3eBrahpJrLKW75ZC7GnHiCMoCAqnZ83U",
  "key39": "3HhMAhKCxamH4TNEXMDJQMPfusKfPBPPZocNTCZCknUACmwFxwT1QMLTiGmw2GAhjYz5PkrGe746jyhzwoKuET3M",
  "key40": "4wAKufAS3LZYmMnPwYSfCp3M7drSEgkbMxVc8jd4dF38xJ9p6pRygQoUPCRZfr3oW7avxZY93sKjVy69aKCXHnxo",
  "key41": "3DLoxYETwBoHFECG9dkd8jgXGAh1nMQ9dq3piuR3gs2kbUPU1Z5Vu3f2adAV1whtc5ihcPN8Q7KPmd7ZoHm9UNJU",
  "key42": "27bFaaZ3zyEgYirGtF3yBApJN98kWyZDZ1VAPNPBMuPDz5bdBNByCaPurvSX3pL5uq7PHAj1Kg2hLBG4GaFiGHhF",
  "key43": "2XKsNqmtV8MVV1BFeZbhpBfSS4esvnYuCX2ZLiB9JWhiYQkwBz8nzwZtQwKX5jEX4RhsepB5eTTMsJoMxBU2wDHc",
  "key44": "Ca1VZphVa3jHh1qCWJoeSqWkRjo1JPZm6aDVQkpe5cgRAizdrMxgqXScbsFR7Nr5TRyFdCMgXuM79mC7F1Ecwqh",
  "key45": "j2GBoGssZ5pitkXVBDV1nPdZtTHdfP6cHkubStThVjSmymo8V3mBVt8HiJ2tv4H8WJJAyy2znff3esfpP164upU",
  "key46": "2GdR77XvrNHW5d1DuHskrQmaxpiNvuKswsFxSbJCwyv7bXdsmBZCGzX5dpBXiRQKbgdPzHFU7MWyVxL2wMgg4HwE",
  "key47": "ehrhDLbmPjXVyGcnkkuFMeE2PGXLP8Au9zcL2s3Y8pXW1VvEHNx6e8bWwYstEFfiyzZCVefnb6FMgJCsArVXvzT",
  "key48": "3csP2jTn2kCExyrj2ZZXb7nUpiECvbcRfZh5pck6cfKJ4e7Y2PNsy1xAChfXbam5DC9zrzPvvedTaoNPh4BbuNSG"
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
