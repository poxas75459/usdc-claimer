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
    "o5TbM6ZFfhMkMWPaDpAeDN7WZEQJD7D1cZyjpswAwKFEQyCANZmw8Vy7f5XUkHGZBUq5NdYwewoQGWZXbGCu9jS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZBBiPJTNKQCdP1gLXkN1rbTqfZv1cZkNvP2Ph5JFb39ub3XsG5bk52BSZ6wkbAxLE5rQXx4q1mQCZbQLabfNMQ5",
  "key1": "5tXfz9vFmTtiaZtp6C2XYV2Z5D118vQSyuFwH9WdX3NZhuGkMnvDvs5SmKfdGrNLyA1cawgMphCSrRLVtuqLiN5d",
  "key2": "59SxPed52UfnCfU7yE219NrjYdvA8NcvLFXZq7QAs8dFACKptk1kmFAB87tgGshFPwQiC8mNLgs3XU1r6nZjjXb5",
  "key3": "pkp8GT3Wt3hMCTvpXtgeDK3b2h67MZZiqE2eEx7jk7bRBLwzcAV8crZKMcyyoFkdHx4KZnBexkBe8JEJb8nTph3",
  "key4": "2DjqLYFRLsDc7UnAcHqQGenr6e8j7KZxtHCZEDGVUug8neTeb1oNhuE5vmK43LVCzFAAQASB1uNzo4yGCgzyGAuQ",
  "key5": "4miQvFrVNxntfTqTQxU4RrXFBDTVkhQiskTUBBEguQmRmVEhDZjzowoCZyTzCiR7V3TodMzfM5y3QibaAEx9vjyb",
  "key6": "5NXSi7Tnbrs3Q8Fm6dANCTWhJ3oBBkwSuzFddJqxkiRNHWHnzdsKCLCCdPLYSjuxEpmUgTYsWdEe1CHxyxeZKoPH",
  "key7": "3sc2wJD9H2W3XVY4YGk8mcVNpBvfAt1iUAn38yK2qrrYdbzjdTrKPPcynWCGvJejE9Qta2gi69NfiRD8bMNe68MY",
  "key8": "5st5SED1h61QaUhLXRGE9LukjYgfmsMZJaHpp9aicSC7o4tGb1RAV4GHKcWQzx8sgX5wVzwQXrdZ6pxQ8xdoQnF5",
  "key9": "4SAMkzsGzMxx6ExjRvj64EM8uD1kZodegPjYbUN2Xt56YRpfhXNLoCtqapCnJ2iJfHThD7DiUp74EkfUg6Hx7cgY",
  "key10": "4pe3v97QkB1gHcqkUiDx874ejuwzWnT8PJVxah1Paz9yfp38ghjuM2PNuQHGHLdQ7PcDZeBBMGCXStpdgbW57uLS",
  "key11": "42jqE8napX9ZBz2gXDAEasAQDRGGifRULu2i92hGoJ6HFqcgfH28GeqWP5KBxEXbX3prUYtCk4egDhLrwkmUHRga",
  "key12": "4b3cSkT4GGwAfXju4YZjjKhVFZ5DrhptWKpu7Qbcs3fmCXbvDmdk8Ly1SFa7MinNAPwgTaUbsCDmTjmoWVXEjPJ5",
  "key13": "2vRt29JL3qbQxDpWLJ7Ut1rNxRu1o5AnohKHAt6m7MzeGPkWVhF9Tx6UHn57WSjmYGZ3qXf8ThV2bqDpQ6MtHQmA",
  "key14": "5PR2bMY2JTddGfWdATsQqyvzp8xqfkrfRkSGKQ1CZpqxtpuQYrE6UtHaRvpkzTcHg5mEYoKsF7zuVn2gcbnoPPbD",
  "key15": "3RiURWdcWFpxRo8VbaQzx7hZi3x5XjuPPYtySkWbwJN6MarkfPeSwk8jKHXghhVBE8e2bUABGFS8JpLmUFShos4q",
  "key16": "5Y6hYx4gjeiGxbELQjqXTLuHtknHfsrPgDnv7dA5TYPrRdTobnEjpXh4gufJMXeB5KEC6h5CPU4nxd2CKzKRVBeT",
  "key17": "2XYMmVd4vrvY3t54eLKiDm4Z49TnjXks3XX4dJGLK1dioMDUhciwWeQrCrM7e8swt9pDpgqafXzppTyvYfDEjCmw",
  "key18": "5QunSYWhZpGmtTNeDLnRjB8eeLHvcjWqio9NpT6ZdeGTGHuWSHp2iKGpGJUgNnuTGmD8vqx2R4fa4eFU5E6bvxAL",
  "key19": "54RuSpiSKoKavbzHM4YUTF2DjPf9XZoEiYdu99mfvwjYrzmqTBrFyqh119dDgoueqLZMuZR7BVVanYKN9CpTZNsq",
  "key20": "Dq2tomiaQDPuaAkxFh4NBy1XH5jnq1hrgJTZa1KPDWb7KPwDQWazGLoRenQgbAXMx88gqn1rEJP7Kb2egMQaxdg",
  "key21": "2KaUfkDnWTLgQkTEUWKCPDcRuDF7Cb29WJRT8MLvVf6PgeNPwtMMmbKTYxUpVyAoAJWP8QkWehRfRLFzj539h3jS",
  "key22": "5bTw54iDA5nUTJ4K6re3Zd82DSD3MzhRwyJCsE677AiRT6hVghUpZVvJRKsS1nJrTXPrazzFiStyFC5bD1M4gxD1",
  "key23": "uuHAL74Xbzzr5Df1gYoYvdzpvmXrjyGxbp7aBpoSYBpPXMm3moKP7Y4frRws8A3h3Xork1j6zvXWANHv6dPDukK",
  "key24": "52Wx7MWPktWNaWWEWbMmRt4CgwDrKcJR1T2ZmhHYfHaZTf7sUWxAUEgefH4CpQYvv66dJMEpNWfshqHZQafuGtxs",
  "key25": "3uaBUawNJwW3WYZNYWjhnzpbiYFu425Mh6LqCsMGnvfmypbbPZxkyXx4FU3cH4gGUmApwGpyNxsdsu6b9jAAPRtx",
  "key26": "2TcdwZdS3La9f17KdTn5mdyUqyi4m22BQaNYJu4uC3e9T2gsSTx1iRJ764d9m3cZKNFkJaFJpFJgqNhowGJ6Fxgj",
  "key27": "3WaHRgB4f5WeYNSfyoCFT53N95bqp8mdV5eiy2Ao5QnSkcPkTKBfQFmbTiKEcWkqcLRu8kQ7MMNnFdwmziD82MnY",
  "key28": "MpUpBXKiCXDrR67wS6FvBGXPTrnL4xC6xN8pCBnda2M9GpS4VLhfbBYaADZ37romG6fcr7CFbxPoBCCC3JwrUCM",
  "key29": "3kuvdc8Sv22EUmKtimSVABHtbcdoXAHRgvZHe9nrbUz9vM78vasNPNW9fyaVmpQaeSmkf4tj2Q9CehksxNyN4vRD",
  "key30": "5RF9Fg8WaJJr8T73t8zLQnrLVZR1t8YtYF8xZ55xyJCyZ7Q5QnoqbAZrnVA4ZQdcCDwCF9wdjTFG48XTsbcRXr1J",
  "key31": "Pz8r2veBVYQRErrM1PyJ31qRzWzdjGDdT8xvPLkqQ2fRZEeizFmQsSuQtUoNtyxH6unCVxRi7obgcfKnV22SG3s",
  "key32": "374WF98my3xTtEzTdKqNLhzpcLTHPEEXpxPLCYFxdbqPzWd52SH745eXdb4rH7ewrGugGqU8MYhtyN5fWjzBVPxU",
  "key33": "2bhPAWiaucJ9C6zJPR2vAX7MXV6j1uVG6TStifvkrLD8AEnvJukSiZTn54S3z9KYtLZtE3vqU5MqwjPcwDeat3Qh"
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
