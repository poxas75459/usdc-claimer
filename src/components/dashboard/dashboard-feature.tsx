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
    "3hURbwPygvVfQaWf2c3mE5UZKtBA6aTBHTdnKDC2zBaoTbUEvtaZmarzcMkEmqAv8mTh7E6CWdDrw8xd7tYGbMSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52TAQRjwMnBNvhZCNuMRHjUV9CxWzMis82N3K47PGRenoecDKR89H8HsJf5T8MXpApevAxZyPyTfsQDpCxUofFCz",
  "key1": "2yosSpJYatuFDATS6Wn28mrj3gLKk3vsTyUVTf9z5MUyQYsW82zkevx4DSYhNFVyW5pNp6u5857n1NLZDj82TBG2",
  "key2": "2PNP789LKxdCmnA2FrKtVAG5yzx23EvDQVTzPr2xj2fASQut1a4fj8NHnVGdjUvZzz3g63TwcbssJz5DhzUmWa41",
  "key3": "5wcLurVmdxh6hgtrb6paaLF7X7JDi3Ask6yEEaTxsTPBYq528sCtHsJxGnhUvPDPNtRzkbv5gsY8BsoQJef4V9rL",
  "key4": "4GuDu8pWgwqUxesegN4gqqGtZRoZhPeXw15X758T69ee71dxTg9dQ4VaE4do9QRQQG5JZZkVge4uD1FUNZ4uQB4Z",
  "key5": "3DVAnabycNy8u2kiDnPykhYXjboexiJqnkZy4GSeEjjEBJkN8H9tRZamfyAYPs588P6xATG9Eb9uYRq9aNSG1orr",
  "key6": "3XEswqL59CACzy138u1xxvdaVtwuY8mSuao4oxR9Hy6X72LTMw4sX9jR9kZYN52tLX3UcQar6EhGyfRT7ZJhDtAq",
  "key7": "2V9dt6haGvbT2JTXmtpE9YnuhpTaduPEyGPJZdAq1NPcDKKrbq7aMPztUeBrraYwzNXZZWV99shCd2ner15SXzBE",
  "key8": "4SrtHp8McEFkcdngGvFhdwoPGKZwkJkK15qReKDFYQUaQ92iVuSbF1bzPfb19TLvrJ7p4DCsBiyDkAo5qgp32Cey",
  "key9": "3MnUvoCFrZGKgr2WE35rPVXZbwjEA8jjp1LouVbhUch9krMdqPbvQr6SbK6o9yABvaStz3QrsSdzz8FqPLJen64z",
  "key10": "9ruKJzsJnAHMaZk5uc2FeU7oHufrp1SgkkL4VeqKg2MPsEgEeLRMmpyfr2ow2MgZDoNFYgq1SbdeayrDVRZKQfj",
  "key11": "5aVaPnfbDiDVpxJ2jgFiJUnU5S7C54dni2mfHx9kZFcRya6VNtmXkjANDscNQc4jBH1yUBWxiMNE8frXztaKM5g4",
  "key12": "4fUF95MnT1QxgzWVu8nMbZoMGoauo13Gk3L5kUhkSurS4zJCXXgsKKfDnLBrqNAfYB6oNfmv8JveSkjkT7F9QJie",
  "key13": "5KSsm2V7hToBMT4mrNguZozTL45YdGgG9VM2ynNV9rZ9dJLRzYHpTzQPmTw7qPojxKVKyyBLBBCLjqRHDBApPuHe",
  "key14": "mz2MckAAmkGs6jMJkuuNi7XmUQKSaYZQFpa3Ysy1btK4p8u8rCBw3U15dKxpSRRTBLmdj2L9WpUqAcTbprZMBBY",
  "key15": "3hFhCXk32DFxxf2iukFPwM1F8iBn8hS4QMM2o42LAEjq4rwRNdLSMGDr4MF9wuJmX1W9BynaV8ggdrJbUSGt1HK9",
  "key16": "2p2hs6KZpdvQTQc3Lp45sQJ76CjbETuSm1gL3LKyJtF8euK5cJtNXw9AwnxWMjg5X8QB4GGSWfH1X1AUT7siWHoS",
  "key17": "2rFsKCf93D8ji6fajXNMPPCYZb62LGDRWrDRfK82TdQe3hJDSPpgUAx5ajV6dPzQDWg61ckkfq8uwXkASvJbjbgN",
  "key18": "5EeJwU36uq1XfQiyP7QFPbJMy6J9QNkceZsqagvFFndEeuMcAaSu18gujQAYdXcnGeSrVqPtFnNGAjUEpuk5xd1x",
  "key19": "4Gccq7jUBiTyXkut2LDp6p2uwP9WfoVRPstqMFW2eAHfE6c8TNN7uWuSZRKWftDg3PoRqBnUZ1kvL8HYFQJkoFQC",
  "key20": "5sWTVZYsh8L8JE8d8o34APiXJA8Y7ayfc9LxPmyeMiaYFb5CrfU2vi7zss4CVmum5v4xqpySHpyZQ7BEeGz7C6E9",
  "key21": "5waHFStQ4CL3bMawAJZJBMoA1L3TcXvEAQgoCcAvrRWD3YNcUqbynnAjRRDufo9qTnLxKLJKq14NRqGbmCdyWZ4k",
  "key22": "266AVNpYV5aWZuKDht5NYFo6MuEL7WUVqyhx6fHgPQ5YgmcSqvET4c4KRWEkRSxZeJJesgnydLQACpckzqsVxULg",
  "key23": "2KjZMRDQvEucPFnonoKckenYMDtsk8bMS7h9WAQLAAzN6hC3spik1wSShGKKQ92mpLmaNDFPvZjFiw1UZQeBMEEQ",
  "key24": "2LdtE6W1jT4gYnZCmjZ8utPWxd6NDJEQYrkJBiFH7xpoBxSNPyo8HTQirqdbmZNM3cbXnKmyjBwkUV6tWyfFVPEi",
  "key25": "2GfYsecQtVbdz4R9WdULZaRWffHSmPB7XUzZXE62e6RKeE8VRoWigJpbidqQmQLURHMwVM7ioS5uCJ3svrNxZMa2",
  "key26": "4Ut9yF6ncT34zLQsFDTD9qCWo2tmUu6cZmdkRgmtB92ZyXyKpPhPqN9sZvS1XB1ishQXSLToQTvVfMwSM176B2vB",
  "key27": "4ef5bk8KWERy1uAWSoNr1MHLe8QuU4KGuBkCAswutNKxkhJAVcLHDgL3bL8Ddiy2f2Gpuhpv2dcDC5NCVUAAc3eb",
  "key28": "5evam1eqVn3N38cfBMVFNhErxDpZ6YqDB8sEHWvEoNoZhqqhAWYHtarPayTDEgjGYsDoLccJe9f8FnjjhTgwG5os",
  "key29": "3j4oQ6E7YKCHRXft2hS4VUVeATfbDtgDrcTPZY9zw8ys5p92wK26EWpVuaV24iS8ZoERN8J7Zo583JuRw7e3h7qN",
  "key30": "4VVYx3U39xYwXPeVJxPyFjw5qJi9S32Z7kTcR7SQjJHmtbL9gMuixKskSHvEivuR8FsYNy8edt2xZxYe1gZ8vnzW",
  "key31": "2W2QmLUkZrLjpTmu8SGFXst34sU7iR9LVvyhg2u8WTKUfPTKmHrU4T8y6SPYUhMYZqLfFSWtM2tyL48ZjdPXdmBz",
  "key32": "3gkyMr538zJcWyzWaiK3tnH8zfmXyxaRCRa8t8JHKU7WSS692H2ypFXTJjfLLsuwtbyaih66vKcL4xE1skqNARG",
  "key33": "5ZgVuJNxxNe5qAHA6kEYMnqWgZYPY9vAUYZHjAFMF1FFwhhsUuGXCcou6YqfuXGNMT1jXYvLAH88ZKPhojCbk1Ao",
  "key34": "3zCuPQB6g9SxAsGPbwPbtbPRF6zPAx75xt57cN1CPaiju2UDh8aK4hZw5jzhaE1wPfbbTu6YLASGhcSLzG6euy7t"
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
