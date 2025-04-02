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
    "5zhrPKwQuof5SvPg49jJVWmsnWMsNJ3TExh3ej2uVES4me9Y5uF8hWyecE9Zy6rpd4WwhB4H3CPh8oB13VceAA9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JNxeGCjNGyB7MYXkwGKbA4KmTV1CGGt4UpugNwTGxnd8VhczuLMnHtVZtoEPxeWcPE7PhYLCJ2XzxBU7dfmjM4f",
  "key1": "5Bk3VuauAVV45Qat7QobwajAfdo4GiejjP5Huz5sReLYs7rDVkBF48bsW8LhbcvDxjghg7cSPfwkkoyTFsaJWejW",
  "key2": "5LGbKkoKPqRA9CQwmYHzbiiN8o8HPpZTtqqLHTKgHwD67GCdNRK5H5qALnLqJuT3xgu3SVKJ1onCKQ9VxthPCCSX",
  "key3": "48YRKb8McUDEp9xZP1QSeDyt7uUrfejK5Pq8LUcjMeJGuKxrkKmzuaBqMjvLrajzWQT3fEh6pX4R4ZESkUjPJo6n",
  "key4": "2ih3s8yrrCAfXSi9E5X2kLpN7KCNBcDpdLKwcPRWech1VvnYBPPTy4A5p2S4pSDHrLqNnLpimf8taU1HqP8yMBrr",
  "key5": "2Q9egExjU7TojnagqGwStiFsa8EeuF5j5sWh9QWqWEc1sz1MqjGeMYASMWMzbVtMTsoyKRykTm8DFhfigSDMH6XH",
  "key6": "5NNSnRPkBunLCbmPRjKA1EiH48tewQ4c4Dbo8d37P5xWS8Yw5k6YGYehUUbgNaPBJUfbJkgncJsbCfKQ5tvDw6wS",
  "key7": "4e72Kb9mf68htpHM7wVA2ETALPZbmLE7maoCJNda2EBt5NpTuHWKzxqBHcZAHmFAi3uFLq82jCqpgUeYKNxSq7pY",
  "key8": "4ge6hqAp4zbSUsqtMH8SifSExYwQKP1ywtUCmB9mZfxGsMWHa3Tj45WCGuWSPCC67XggbMXLm2NKfnALHYkDumWG",
  "key9": "597QwMmJJti6gWacsEUTdWbeNv4aGZGyc72HDE9WC784FsujHg5fSrKkDRCpZESDR48XkGPnfU8ePF7QStSfYPeE",
  "key10": "26GyMFc63F66JRzNnZkZfxvu1eVKyMzqreCF63ZJhq5EVu4DuXQe4qEAqunt9URfWyS9YyLh8MhEnju4u9oZWCNw",
  "key11": "3SP8GG1x5rSHQ4bAbjTvxCibdnpeqwAGcFbNdSgCrGo7vTda4ajMw8f4bY944LXjwa2tssuhGRonAwLg999GxiZd",
  "key12": "5x5LfESqaGEJH2JsBQLxvYm7JmgC9d2KLEmxPFMsWKg7NCHFhMaLwLhQbTEFWLQhxVV25bvGRdnYz7XehVTKrvSS",
  "key13": "eq8M6g4yuFJw1vkeEFCP4HBWmtuRxxd5CNtErbyWfifg98X7LZgDZTe348U3se9GjPknBAj19owJ8W49Cfr2PVU",
  "key14": "3buUd5WezGRxA2kJ8HGqLQqVSPJAjcCReHXZR5LjkrFHLdZB3gYt5N2EUgqMcFvGMARrFneZDzWNiW2JhQrcPyts",
  "key15": "5b4rTeiqmzgVTKqpdAMmyvhYJVUFhDMwwfdWYTgzWkZFg1wqUfJGHwdb5wnaSHf6rAVeBnNMRvUd4zYWFS4GemUM",
  "key16": "2nVKPNpXsY1kFPT96XhJ29ZYb1foHuJ9fdqRovb7ku3wQj8sjSLiGcPG4Rz1V6ahpDbkvFDbmeyv2FhQTv7RqGPd",
  "key17": "4SFTMahxVT51yb5yMyBzKLPHR1DSWjfsZFyNAahKxcQETtWFKwKJyd9Q2Y1fayt9RsYbskfbyaCxpS4fqwZCmsQf",
  "key18": "2tK42xVDF7FFRtxbnzyqJtzwL63sv5GDfgwB2X48RTmUuAUniSvdX9rzmJTYdSdzUUfBXh2w914f6PaCNL8jraor",
  "key19": "2tPgKk6cSdNkwan6auAWZfVskvWTkSu7oygaiLvvRPfUAAi5A38DnQss2MNZFKVEuSVeGJoQxNu5i153SDUST3k2",
  "key20": "4XyUWdNTcPE6owucBatYaeVeizQqcKRQdJrBVt7z9H8DiQiZszy2GX9g3Jpp49KGNZVqTWcsQ2Dh4mey9FzEEVp2",
  "key21": "4TGR5NnFzixVUHpKBSSUP1NAQibKn6mYcnhF5DJRhtsKVGuxdVdv7vWkEDJwygKkufGYARiex6ijAKSedZfNxJQa",
  "key22": "52y4bNWz7HNwcXNK4R74ag4hoGHUKY3mtc1kWmZecYvUeCcUwTqQiHjv4Dd9XKP72rCVJmiSoS9ENP7bXLP986Fq",
  "key23": "3z8iGSAXvvagxFvqG3CbarCx32wqhVgTkP2LiEDqraNafSUsDBDwTvN2EZRneCQkLXfDNrRFBWKKfXdWkG7EotjU",
  "key24": "2Kch3ssBsRNQipiBSLJYGAvzyFMQypZJKavVaH4PuRYQ9qBQVZts4Zyc65PDFpMNavxtRBubq1zyYU1RV6ZjWfLP",
  "key25": "61a3R5mrVUtZgwFqCXyNQcSZNVaTDAWiYREi5PkQNoeZ8CrQK6VeA8QMbyYnHtQ77GdZueMDRG4AF4oRzVotfmN4",
  "key26": "54YFZe7qF4znMoEdptbTibeXm7UQHtXcg1nTwunXcqfBsekD6UAzAaUz24FAqHtqp3bLXR1tghF7efNcwYEV5rtu",
  "key27": "5dxFSE87jEocqSjmMznFWHnM12768qbFAbh6pDLBzCvMxDc7eL7UeyYESStYFc4EheHdM3uAy6L31hU1yudKB28T",
  "key28": "2mLno5aVFUHAHGzkZ8bM4HfTUZpkwrUxgzKgG1Nx415aNqaXKR7HkYXsDzmY89E9xQQq4ryPvcHmz8Jnd5an3rEa",
  "key29": "nCMyjGb7ncgQa3Px12Yq7EBDJRNTsABfG5cB3ssX6TiUVXTyhHV8XM8KDJ7pW7H28XP66549o9mVZqDMViURD9P",
  "key30": "5gajBAjVvuwpTbexbmrjCmHNQKpiwupCaexe4SdWmnT3MtKrd8H99KQR8t8GFUXecaasozRZkF1mJme9w4gGAGws",
  "key31": "WbDvygYSUNBMgAVRGBEjpmsn2YQrhCHgHEgFigQRSz3Rajnd2mNDQZ6KZscsHL5AdjLSoaUjxGi8xSNpbeaFFSU",
  "key32": "xh5LLAnUAa92XNMjeH1Z89ezqL5xyiAciE4K9FDQ4Nt4fZjs3RF6Stcfsf8wejifuZehjZvo5jjKWWwYdaic6HS",
  "key33": "2zGEKXGuBpu8Cmr5spyfkhZTz97dWgYCENSvSySQGGjh8LpGL5jSBAnDA61MG1tPkpfN9bvkY1in1wdRk5tfRm57",
  "key34": "4aFgj8FJSibxxYgyuhnPgt3oYci1EsnSLq5wQhE5TQjH6rJAsEk5skXHNJ2YwjqyXifLaAQifhb8fckGR8YtJqkA",
  "key35": "2ZSLRGJ9nPPktts9Vw7dFvvy7QmT7j5Kv5VAwx5v6fTFmSuqhR31zvE2GaHmuujt45ThxGiKoQUchHv4FK1Ye2V1",
  "key36": "46dLZQP5GNjVzXhLnqjFVFMhpMC1Eybtr4zc6e8tcXnoJdXtcGZXKoxQGc48yXzyrAw1KaKU7G5546N7bGLEqJua",
  "key37": "4eMudJt5CwZ718DmLbgRyykjKPnZ61vgPpLTZSySbisBZeZCkJYgwPhRQc4x5H119ccY9GapP257nr4UcEX5CSM4",
  "key38": "5EihYQ7Zd7yGdTyiaWAdJeDoZm7jXS1VJd3xBBi11jEgRiFYqQY9v1ZS4UbSzwyLfVxEnKgLTUbLUdZEZ5xN5RjW",
  "key39": "4qf1vnMtDP7mcNPsGJRR5fVJCCHW9di5jFkyMaEvDhcrkPYerS8vcD3tyKMgEJyTkd91xxiRAbweq2yNTTNjAYRe",
  "key40": "eGYacF1fFivMDaeY1D96eyPEJFHgBG3D9nwqy55Xcktk19DvBwxnzHW3NuJY1qAcxjdsVWfHNN22xdqHfJKft6r",
  "key41": "35m27rmm6QXM1AWAB93fR6GLDZMdWXzSzMHA7HQYsFfF6JubqShMUJFKrNwsZ9MmzHtuxXXJkvd6Vh6XoskzkxYp",
  "key42": "9khd2QBa7eUTnU6LMJMLwQz5eHqz1PKrrdEmnp5uHNSK1uoTpRJkYugo4f5FqkvLMCNkbesQr2gnAed9srUVkVp",
  "key43": "4WVy89Am9LtZP3nxafdLY58QHeSiyHzuGm8DyNkeDWktS6D7aMVMjRJ6xo5MMYNVzKxYy9wJvfzkj2ssJJB383n6",
  "key44": "4uB2ihpdteXQM3CiDuURSWELcebiVffuTh7gCBGbCuGdNB9WCvmkjvkoMVEAbpF4Q15zXBu9gfNdKFDTw4wosV9F",
  "key45": "4eUrJT8e2K2d4sP63D9a5PLa78RXtrBUgPZ24QexLdeSw4BBEPzzHDTWaeyGu2SGQF72yKvRFqTxFjBx2XgBfvgm",
  "key46": "Yq6WcSFpWJdSaToGAtC1r7z1dTB2P2dyAyLvxDMqum2m9mqvobe6VgmDcaP5a7nb9esN7Vifo4mTUqQFZofBbKf",
  "key47": "4cr3VrQrmbEj6yKg7CRnApBgiA4u5yogwP8YacNTE1ViYp5iScekPj22j8Nq12qeWasEReUQeUvsfVNbGA7cf8qF",
  "key48": "4C1Vm7ysd9bnVizKDyXCqQJygbCqW8Rp3NwH5jWgpxxBwmP4PCLFynSCLhhpgBCyNoerrYDRQopEz445AB5aGMBf"
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
