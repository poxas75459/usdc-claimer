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
    "55kfVjM91A7ZK69ca6zMnp5NSeM6UMazBQewciJbcL1H1trdMhQEDtobBgYcRvyaHp5S6cjkXvS3j2jiGcrde2ck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZGFn8NJD6MH2wRwsV7kKh3AMptYiDkYSnNWhE2pXvahSPpSiRRgjVrsm1WJeGGynWfbwwW6Q47JAmzHRgLAQmq4",
  "key1": "Xsdb6W9hCh119Xrj8pvTChMY9ooD4AArXqqvEqVguWyyNKj7k4QE2XninFHZnXcGGkgZa5riLfPmCdfgG5GXRt6",
  "key2": "5mmWUAs5MaEfB9MzB8NLpoQAhPsFMx772eoeFyQ1VzArUhPn3o8vuBKfPPZmuaC52YWLCEQoXFarXtpNGutGwYJC",
  "key3": "3ATpbtjcUjGHqRgsdLLtFUWgvkwHo8unuuLsmjhL4uf3frqLic67ENw6bgzZxPuEcuhU1PMDHoyyWr9RRR4uR7BR",
  "key4": "4oUZXikbUV5rbpY4C2W4ScNT3KSrePgu2rwYRr4dmUw39aiJQQoXJc7h3crWPHc2pwBdn4EtPz1ocujPTb76SGSt",
  "key5": "5H8KNYUUU4SsVmzqtwtNjLfibFT4usfYotQ3PpJCJDupN9qwg4eLMR4e4igN1UGBg7WZ2vQitxdYix4QR1DwrCVh",
  "key6": "5SxTaE1WdzLFCJnmZSi7XcgbzJ7KYjVWnVftce6GkdTDSVExLZ1EphvH4PNXk4x6qTnKYo6uw9bnrvgrujSfqyL1",
  "key7": "3yMsgprkimNUiuAgRzQ39pBueuyR14pweanagUNuLEQM8JycT8QjGDGAMYV2XsGR1c7X71SP3Yh873CqJytPyRhD",
  "key8": "2LChexkppS3PpVqdobCbt3zvcNhxA5HhMBcBKyH151DfisUTH4gre81zAb3ogg6t8KAEYyhXvK2V9565bSZAz5MN",
  "key9": "4B8Kw2ZM922ys9AxBeECY64PM3vRAh1eVisuLH4X4ELiVu1JaoSLDxcavoFnqNgGVBWGwJy3L95tANat5G1tQPUg",
  "key10": "5SYk4quVkAb5LGrZCN5kvZwZwqzM82Cj3BeUiLK3pWPqJ5yPYrXdBeLgJViEy7PMbHJTCP9TTXD5Du7dX5vFFJ56",
  "key11": "5oGrTaCD7NJZ63J7gKbHJC8kFqTXRrCzM281U15tvRXMaUi6zgAUQMnQNDweQcEcwCZxypYbqpekgyJiUsGhWs8b",
  "key12": "2EpCdoCXB8KLat1g59RHj7JyAEy9ZuqZaDUaKK9rgtWkqi6jrmeBC3qmFDEbJDkaiHqSJrGbTPosPgMmbsSNumqW",
  "key13": "4TSrs6yukHc4kivN3sdR1XP2xdhpdPbe3KpVf3PsupQ1sYA1hEsncpQVLe8UsYVfXDGEGGreK4ri9yk9PDu85xQf",
  "key14": "UAEpVR4sMYRSqGEqeLDDnJoTPGmdLv8Zg9nsQ9NftYTx8Av7xjV2XwQaRppvStYfijqba6ZSvPcSr2KDv31K7J7",
  "key15": "3tYUEbo6RjG5ELEAcEBpxrmKU5wcEpey6ew532NGcfdDvuyWTTxVib9m1bcEscoBfYprjKhUEhesvEVW5DfxunB",
  "key16": "5P2sJSpqHCdtcDuxkSCQiHrkehHduazkdMcajS5FQuepBk5yd5Yr2GL1pZtuqjtVQ2kHTfA2UizTW7HMqnTvu7Ri",
  "key17": "2Eh5dKopkSAoeSw1wVW9f9r35RSxGDYSyWGaQAK4RVysPepy5ALwfYcfghtkEsBQaqicY5zQh5imVH4K4DSdCre7",
  "key18": "4BzJFE1pPzMa99fMMqdD5fJjUiovrkS3iz9fDoveHzhcFwXTjgTuZcGux8Hz3DcNYNKa5ckqZFNfqP6eYfAYDjKQ",
  "key19": "nnhhuBsaxR3udX7vWGbtLChBdtSWevgzMW1cNg168kY63qBNutLeGYJdXmJqnUQq7sXUSKmWZwcokmojkBvmrsT",
  "key20": "pYur2FLyue5xtp4ctVKfVyifeMWW8W5wtnHD1eev5Ba8w9G7bCCBxZt1aKapKsGRSHgeBiPc3kdDJufKzSuSPdm",
  "key21": "59uVdGkN9i3gJVWFT6LVo9fKxs8eDpXf891ECyeDc5kFsiRdAf4N7BTGhr7qwxxNro9DuQ5r1dsoFqverSazqhXK",
  "key22": "vpBBhiwjpV15jLzWEERrUYZqNea2W7qTGESGGFTbeUTiawzYAkhX1ft1V6zDPQsogPXrrz3AGEReSxyA6FNp9Wi",
  "key23": "3GkDwGcaaaHf9dA7UtfUvWAmQvf26qFNosbas6ZEau1cCxGht7DbgU1DsuLuBp4H61YrGxKbfzKaMvZbjWFB3S7e",
  "key24": "YgS34p3hZyTFi3GZWBQH1fRKw6HipMNLRjvEX28PqQoHmtHGqbVckGtPzUTdcqiZFQRNsaSz9ahBxQHbQuvjxJx",
  "key25": "2mNSCXKS8YwyQFG178DWYNhjsLi6ug1YXb6uRseUTFPYTBvTzGALvDyK8Z7HzYvSbrRsSBK7UhT74GaRV2AMN1q1",
  "key26": "2wmw4tKVovuPVKpSXujK3YRFi1rCWAHasz8utUVtsVdh51vnRxeGckiwkPibfc9BuhGFu5Pj42C4NJ7ynUUD2HtL",
  "key27": "22VZjksTnEg24ciJcfKXzDqyPNLCC2wvTgRs7PCkHKxkiXHeRt8QAmfHreYmYV24DkhwkATx6r1c5NBkv6CygwV6",
  "key28": "2PJQsni8SnnRYFyzFPYNnSpfzaJFY4mbLpKVAqiymQSh9HUpiBqa5kuNXEuiCo7XopQ8iUVVzpe9fLRFb9ZKGvof",
  "key29": "3Cxu5fLSkNWyMdFKS8GDkNPu6c24hwbV9cAxkdb5jCK1JTmActfsqT3pL319ScRhcFTpFzT7hkRhMxBzzJLWUFYd"
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
