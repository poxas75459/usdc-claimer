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
    "3uyoTKokM42Qefw9qz4x4sDaZbYkhHcU9M2Y3MHKGWgSHP3Nvp7y78rdAWHnyDzgyEAy9Ebq94XvPLvR1tnV9qH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZXtgEGe1R1MwSiB2Y78LetD6hQgLjACGfKDWuKWuPYLn1WYzsq6cqpC3pT8rTfw5TmoRk7pjsvFoGuLzFmhfgwP",
  "key1": "5PVVNgm9f4b6si3Ky1eRaX4zxqxZT18bPfWjPJjFf3DV1RXYJcSVJhQQqsP4eZLG74Q2T3H8s9j9hxLqa1naZKMi",
  "key2": "5t8mVqrMZH2vD2CUBvPXJMaaJnTGWfGAnxTVKtJqyTFVZP4pBfZhxyn6Rcm2X8at4nZBcTNM9nLMSEiAQcgfsEbc",
  "key3": "38eL3rMUdcDrUXASnWeJkChsjkKYA8gJtLRBw7odgqYBH7JJLjaxVqCu3xnGZE5kX3DKcFKzMdDUmrJwP2y1nMzT",
  "key4": "4xRBYskjfH92XToBeSZjeg1wzXo2QDhWnuwRHYyMXzqumKbSLAWDRKqhXnBkWRmiA7C3MQndwGbt9pGMYmFLRUEB",
  "key5": "3LDjnC7GkkhATYVJwB5YeMwKSFJe6RQ62hZQ1SXZkThwTXAyi5J6Dr3ncwYLHYfwGc86FXGxnVfsTMCURcTRHh34",
  "key6": "KGJonh8PYygZhbpJS3Aj6PCoFfCtZXHr6gwetEruuSfBGK93WakvFarqFF7eMJPHvjHLDWvqN2jeC5pgb8WJ5aG",
  "key7": "36bkujKZjFC4ttp9Xk7QAv626oLjGBGSP6q9HzcELPfDHEGeXCEYBKxsYQShvXiYeASruVkK5SiDt6JomPG2zugL",
  "key8": "UocSEuA7VLpiUEiMiabvQrKHTs935nvVWxBusHgWSHPjBBAyE537PMGZWqkBTyuJVtsBj4znBvYc4MmuN3wyLnL",
  "key9": "2t5cTLVNtu59zvLkk1rF9RJXTM9MCK2k5VFUU3taf2dgUss96Y8QS6Yf9oUHnaXtNaah84f9VdByzPKgdEjWgUsJ",
  "key10": "5HKE2VHzAoXECS1AsAeN7jL4Xi1DXpWFMyjmAYPBqrBeUwThrLGHt3M49yNTR8MiweVVe5BMfZtULRvAaPd4Kwy4",
  "key11": "5wojnEsT494uNaHPiiSEGSWPnorEH9GzgdbhYE3V8TvzeC1GMF7xdRg97mHhLixNUdnYGhzUC3RHazPtBXR194ci",
  "key12": "2qkfLguRcFM6bwNVjq757Q6MLTkUqBN4M8u2Tvu75Uhe8JvNBHtWUVwMv851jtw51VkDyx4hDMtYYzKgxp46uJZz",
  "key13": "3UQrsRwnZnW7oFneprd5qvLrqu9q4yxJTkmMqc494nZkvheZ5aMWWfd9aMt2bpsGd2RSx2JVm9czHSGtLRoZ3bJ7",
  "key14": "3JKLD5p5M8f74oBtS6CMNQvVhQAVJvhS4iYqjFf18sKMsweQc5MapwbwABF2CiKB5Qq1ZJfyhkqPyor1QD7hU6RW",
  "key15": "2DWo94Z9nfKKEX8U4G58c58zBf2xe61NMiPyDCraFZdCN2qWG8BokTecGnYXecH98DqaaGNDrrxXuTiSfQNjDGzm",
  "key16": "3zisGUi43GquGGqq1RubmjK7YtKpBCt19Db2gZmma93RK4QdNWynoernTULZ6Su713qte8ZMRBtEzP1EVk2KMhLb",
  "key17": "3biiARg57a8sGvAcWyFE4VvqRST9d4rTjHr9D58ubgu8NQKcV6bU92UX8wAeLMqQkjozAzrYbf6XrK6fhaUATAyQ",
  "key18": "29iN7U6MAC29tfhJ9jQTJq7zka8iyRAvUS3psWsMs9N7WEeZYRNkhGtMM2bRhA3uoEYP39wYFVTYNsTooUm9LqdZ",
  "key19": "3WGqSYdJMCSs2JSeYc3b5ijV9YgSFTi7rArAygpyy1tgavPXJHHwWSqSergPhMrGEYAnNmiCyh3UUxcvHw6duSi2",
  "key20": "2zCWVyo6azVfBbJjrAE9n26Ki8W2ximcakVhyggKdph34iShqGkvTrpzHcrSs1ApQHqHEeSpkHbpfpUeDUMUsJGU",
  "key21": "2P6dLxDX5nnZ1bhreenxmie6gndekaTa4xFcXZb4XKSfBEEbtknLcCKTVetAB7BnK8pi2bftHJav3ArRKx5HVGPK",
  "key22": "5aTPXVZUtdt9C9vvrQQELjFUG2ZFwC4FWDRdkDfdzA7P8e1mUKJsCdYviGLVvvEYtqWq17pz588ZvG1n2kivATw3",
  "key23": "5Sk9JtPN3AknRhVzXhTiMR9dT6s5wFDKWvsxxnGchD9LJRLThpAPcpRmL43KdPQ9GCZDhvh37NvpSU9BmJPVQY78",
  "key24": "228Cnio8nQN6U2c23JGWNq8GjXYQLEYkTmmvhxNffrHfqmcGkVwwKojJB4tfBV6gnuJN71ukC7Vapo3bxLSxqN8v",
  "key25": "46awAeTDxh7m7j7ZHGLECeNxSTjbTdByUStAce3NDeT7MvUfbNAiQwtwNpnaZ23MeLWsB8rtJngfZzmVGNrtAjrS",
  "key26": "3MVQEtC7mSjji3KqcLCMz14bd443RLcydBj5XwehjjQMQf4JxfPg24qVe6cX4dhMp8FUtqjw6bFVWGyW8eHAKn5q",
  "key27": "5CLW88FtQNUEHZQv2pRtrXGDsU33cbcQsDQLs1dA7kxJFoiaPUtRoA4mHCtvdAHxn7Y799Lky4or7PL1QeX5UR8h",
  "key28": "4GADy8EfWJsEGnqJqBEo5mpBLtKv1eAjy19JgHmRrtrd36VZ3BAnfzUBS5T5ReKwDBx5ayhXgK4euywwqoBpcNCe",
  "key29": "NCqGcBLUuCTZ3hhpJR3vAiNtU6mK1vGUs5YHh9XfzmjUPVu7oCWgjrzx6aKqyEKaCDtn4t5zE4H2aSuPafRpEFU",
  "key30": "2HRyPhtioLJxrXc5fkGzbg8M1EP9NWmjRXZmVGncWTDrQoSEAYozX6rEaSTuhJ1BfiqvgWfNM88292Pv65PyeUmE",
  "key31": "5peUwpbhrHAVzhhsbx4TrTxpACTmDWYW7EGYwmYmAbVduGuFev8eDcsdYJ6vMRqWbUjMFySJQeenPcFu6wpUt3Zc",
  "key32": "55i5nAoEMtqCUYv2YzqWzQD9kxpLS7qPtxaGbXexr6fPL7NS8tVs8Dtcktq5cgYXwWxbv9Cq85YGYeY1fMznDGzg",
  "key33": "3JzWNWziqLvhU2z5xzYYTcUdpTZKcFteNtMKwbDKvumCaDqeuwbSRpFEhxsy8Av9YQsDU4ZxDcBs5GxSYWucZ8EY",
  "key34": "jmte7x2fMZGFvcMDUtCcAQLWED4cToYqYJaihgoFLRAgy1AHhBthVW8dZ7t9FDTtVfXwpu9tK2JFEnutNc1UhTz",
  "key35": "64JaT3do3teq6bqcZf2L22Uh67tiEJMPUenkxjzq6BweKJpeu3YoRTpTtzDv3RrLNtfuJLJpPHZtgXZZBHuhkjvf",
  "key36": "4A3tzvjpEj1ZHvF5pmHW1Leiyc9bAuPiwR58ZVCtopummccysfCUYc4YMboMz5tXNLMaZQLnxjK8Y7TJiTL8gXHP",
  "key37": "3rX7qeFHAt8j5c2yudfrF3DcrK16SvbCU4iLoMqXAPBnDY2QnY9DBVf3VeAdU8ybtdd89tfYdSkXzHsLT2ZjuKFg",
  "key38": "2xSKjpmCbwHyxMujDKkxVySdND8SdYo2AJ8WDNCqxrLbpV9AQ5AhntkQ2hiZLtJaWCpvuz4mfnZipm9qL6rWtVjZ",
  "key39": "5oT2cdcyQUk5beuxBaqQKnXzurC8Jo5daY9xmPjgykMjDKjAsNNRSMexD9Bx3fSPFNZdvBnAd44YAKf7cFo4xBJz",
  "key40": "66XxbexFVymBbGDFbHX7g1Beh7F9BCVC3rgyk8BxztegP471A4egd198e1E3MyZiPXR888zeWrij973DgjnyPFML",
  "key41": "5Yd9H4Xu6ZhFQjvgpgtVMF8czHkqbjmGQER5jWPvMwbSGpKRj8kiPrnvcxKudZsrhnBfePQu34ZeKNCzprwqcdT2",
  "key42": "kc5G4wJ1qHch7HqeEjMdaErkLMn6xdhGgMSzJtwobqGKZsjtQ22v4sdFezL43cPdFQeVhD8n5DU61gXuNSxmGNP",
  "key43": "2aSUfx9vSxhT1eSCcDVQRt4Hr9suYo8JGZx6YC2j86aQPoib1RawJJFvtTZ8TQYoqab4g5e4vfBUB31ZXzc7C6bv",
  "key44": "3khMeeEqL6os8sHwmpMTtHnQ9cFEQe8No5qH7GhJcDDCU7xxEvRrJv5wEHC6BFK6zAA4mmss4ww6Mxbjw6xzvEUC",
  "key45": "2xAB1Do3R87ZdgRJ8poSk9iActb1y9M2NfL3LVCuAQKxo5MweotCFcDbRFydtQnbmF49QE7F9Kvc5tqqnS2ia8c7",
  "key46": "316HVTyEKLX5QFihuEx6d8k7bsSpCrCjpeQdUPB6DePBc2hRNChyMJWr6degE2u57QCEKDPYHwHMXSZFZCjV5aN2"
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
