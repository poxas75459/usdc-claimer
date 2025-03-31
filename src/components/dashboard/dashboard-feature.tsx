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
    "4TsRkNiA3G5jMaJGwiV8LZoVGXSQ7nrTP7RU2E52KNTmeEwQ3DvexSppzByiMQ4APrdmHEDuqc6UM1K4ZvabT24c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TGRkMUu8KPKchpaSXri8uZ7KjCGLmHhYcABS6En2MyaQJ8XYJFxt9Pe4qTzLmFueJn58rqxnirnQNqNbqJpd9Yn",
  "key1": "44jqK2pFZqTZYe8dPSP2eXbx8UiAFWVxMZ5LCGzuQGvEYTMG1NGSFEpoW3ZoRu7KzU8XdtVL6PkfwARXbQfe2HSx",
  "key2": "tEVUqBKKzLdQaXpY9aytJoj8ikMH21Zmu9qwama486djUaExYk92AkmsEneasmiEup5SLWAoFQQNpTwxmZdrpYF",
  "key3": "3RDQB8wbfETtzLPrJSo24KUT9L4Z3YUedWcDz6FeSSQMNBfxvHMWgo5r5iknoRrdZSVvM7hXbDhuCiqEg6d8ip7Y",
  "key4": "2NvgyurmVgRfjgTNUkmEFC3FTdD4iBEURHJZ9xPpyPtUqQiZjcPHXTcCS24w9Qdj1kkGP3FJeZ61r6wFJS2PzzZU",
  "key5": "3jURjFhTw2LDq38YmEntLnvPYRQJDk1JV9p8pQenQK19dhCSxcLEq5L9BmgEgv1AyJuWpa1h1Ww6Jyn2ScnT3987",
  "key6": "9iMXK9aUq7tWXA8pVSdy89DwdqV8DZSRfjvZPAdc11oZRU8YpBjBuv8zj1FQ1L3Y2cinFvUVXd6tmLLniHkhzoJ",
  "key7": "5U3rZCA1VkvTcU5Ahh4zZPQ74T9Hch93E2B9Vs7nbFMuJjBUYcXbEDEjVragq5trVdR4mFtVH5Zo4zjqGgHcEV9j",
  "key8": "2cH5fD494rLtD2Yc8Sm3jF1CAoKVU7PFUtZkFjuRyfCebhWbQRpBo76DAzZxbQ9uQdiSZVfSGdEvkkVPHTMAybPB",
  "key9": "3fQ6aeSbG58aVkXswDVhm6gt2bAUCD51YGkv6y2mjPJLU7yvcjUeZWrrMDQEqrwKecWKs6Y7gwPNFENE5iLny3Kn",
  "key10": "67YQuZ8bJxg3N1hthiCfRbTxBgqTsKQcTtCz2vf1yQnFEY5yt4ru9XHDM6QvfUaCyUnfhv1HDkMzstoL7HGSHD6J",
  "key11": "4pV8pNyAfLve6Psr5FqDpaqqmbzdqCnq6173P6kFDsm8bKTWoYhk2D8c3Vbwz8PFuVSHrw26CzmjuYDkjAvBnRF1",
  "key12": "51DmZZsBxeXX8B5WBbWDDcRu5zHV3cwzirVn9QW7rHRei9XAvVMs5SJdZC7TEGr1RjivfYeZAAro1CKWTo6h79JG",
  "key13": "3f3hvfFZ5Y6PCWgD1zYqPGEEQSrj256aJimwuUARPHBk5cGbrQUM67Dc87cEzQqsj3k3JBUnLyj8xBYZiAYE8nfN",
  "key14": "44YLbMjpDUUcaCkyBrMmh25zFJ9QooxvpiCVpsm6vBUkWTAv5ZN7zf9gYBYoyWpuSaecqkmtmhmjwsUkXn7TttTW",
  "key15": "4ycRTTi1kmqR2bsHNEkPEiKrywDd65mUSDu9PpWz43Ps5tGbmazaNQkPDwuL4XgrgCAMsCe3yWWbpXYMyKGWkWgV",
  "key16": "d6CTc2W2G26uFK7rAnfK1bNYNTnjiCUAE361PLempHwK46RCUqqaGQnkfecq7X5ix6ETXSS8M69Ax8YkcRs6DNY",
  "key17": "4YwPnutWiZEnGUzfPqsPjz2w6MXrUabGHhaWRtBNGP8EYRcxNNFMRWzKA1KunKKL1x88hMoJXMuQfc4JWLrwPU3b",
  "key18": "4rYvY2MH4wP2j25Qq5YXn8kMM3drUMEA5tziyXN5byxQd12UsneVM1F3vkinmixR5yi84wYmjtsBGJA7xBZJRgud",
  "key19": "w5qXL3P5oes5vYB9GCxqsmNcQuEPs3g7qkdPU6nYrkoydd3PJwNuvswAhfNU1sN5kiakQpDkmZgiscaaiLMTJeP",
  "key20": "5rGE1WZWeSR3vfBuEygeYmUaW5hDZgLi6u9EpEDfmwW6E8tXVnVLp2ZFHkufeC9Mrs1d2zmNRgYKfsdsMh4B5VPh",
  "key21": "5pXfsvo4ztCNZqWJBpBYVCncoEPwqLhjgXfApPT19Fd3wDXgLxqpXmFx5Ed1n9AJF55wnA2o5hqBCS4vtFxwTJua",
  "key22": "5xAZQBDmgPaydyRC7vPmmhQL3pbQWoizMNurXydL2mREPKCEuSQcpxKjwPnKYyYbULfbLeKpyAEkNqaBkYDH94k8",
  "key23": "ccX2Ba39ohawysgxwtRX1HHb9CrYg98qecXU7W6mH3WYXGCuY9Lrec3qEAaPRufpAhwPsRb1vybxXh8fqgLg4Ff",
  "key24": "2Y8EP7Lx1cbYJoHzUGi57MMEL5Xoq2UmVUsSpXtfSX3LAVo29FGcNuBdV2fs3gJRF9m81G1rqbgWr2PVpRhq5Nnm",
  "key25": "5UmFoeSgooc21egATjpmDng8geYKTfJkTGKQBQgRuxp8UKBonsgovonjGqPcpVR5fdgqvdXVKzHnpZ7DwXHz5wKN",
  "key26": "31HPN6X7u8BNHPpoDNwETDQZHwGFmSdeaN7Hjp3NnPK9L1XGKNNLLmdRAssbqoBg1vjDupCyk4vKtZeTHmLMxuF9",
  "key27": "5bkm4ybbsTZHwwz9ZaRzhVB7kfSGhsS4DpXL3ktxV89yw62eYp6vMzCLjbufiPzDyYbKVBtUGgcPu8teFWwLjTfa",
  "key28": "3CmXKNaothqUUzutQfuhAZonnVZmzi1ye9xbhiz2e1zBEGWrhyR7EYZaK1Mo4LFyofTo2PYM72gmgPGqQZTaHRWF",
  "key29": "5dT8CNjwGbDkkPnrQuSaEJ5fr4NMVTWJ61RGDePQ5ojNsWCtvcR6uWL8cfn8MYmE6VoiDacE3kJsTdLQvE8E9FVb",
  "key30": "2VFzqcCFMkaPxtTNaUZikGbPhSEdo1qfib7ByTSCLuQFLbKg5FsYzVoTg8PxGcNPRBA5ZZPwU4bM6gGVEAdEdYV7",
  "key31": "3mXRpWWiPyfUaGwCot1ccVvLM6wEKMVGcbBk7FaNdcaJGjQGQZBftUZ3g9P13w3Zj93m9mGwnH7tVFbx1STu5kzY",
  "key32": "3HEzPyk7hpfbc7uhpygAzkMx7JYoUimJxhRSU9L5ft6k3nEfVoXj8ZAkbQnG873qSHi7N2ff3yFkPeWLPTcheLPF",
  "key33": "3qVqw9xBGt6D3ZqKSFZNGuEzEoX8U12cJEcQuN7dPRHX5L9FtjZvPjj1QaYd7iSYTRvwfEncKvdycRuZ5dC2RUap",
  "key34": "4As7wDgHN61hthN2uLYejMBKrFTjjKSfdd8M5UdPk6TXDnjK2PjPuVJ3seH43YRWRKpqfEsLotCyftZXGbcPnKbT"
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
