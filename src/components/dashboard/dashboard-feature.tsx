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
    "5kLvBPQDkcrsjM6rWzPgzL3JLbv1MdVpxyN1rzaNAEgA8ZKyuRyDZNqhPwhUy2UHhmCjc5MErUjqHLKPpfQZPC9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wg1VcZ4wWreNVDFBgnAHGLAfyrBJp8GMXNmU2WcDoB8TrVfKN5jgumDxLPs4pspDp9ecGb9TjA9ZnhJmKR7TQMm",
  "key1": "66sEpYJV6rkoWz6bYCq6eGQWne7xMTdmkAMbLFirsspksH7vUz8Tk7WGtQVfAncK5YBz7GZQetQfSaQ7tTURUVqm",
  "key2": "5TqG2u2wfY5xEU4ExRD9oT5QjdijsQxrEFHHuMGcwo6mw2Lvm2WzZ8CyFwf8cT7hj7B5N6t2RguBn4ADPaDFC47k",
  "key3": "412Ja8nj89WQ6q6ggRc4DwzLPwfRSfEnn3YqiPQZW8mhnv2HVbjAyd3hC9W7kcFdqZDmiFsCx3LoJf6i3ziirwCT",
  "key4": "2zbnSqUWK5k79g8jw4ExDw9TJe7Rkn18M8vaf2A1nTEEVzpLASS6ug5fa167K89aDAPbUPF7J8NSG8jwu1C1By1K",
  "key5": "5V5dgYqt6pjBpRiGMtFcNnUqiixPP59wdAkctLd1HV3XLuJNJ4zTvaX6jH7msmxF6DByHSLpykujHM1LLjrcNYrC",
  "key6": "KXJUvL1SnzMRBcwUVchd4VLBybJRnG3rVZ75qizu7iFS8F8CGyY6jDr12t5Kzq9RVQCd1psUDtLKzN14odBsttw",
  "key7": "3KTantwmbyGPXJ3VUt2WfY6eJt76Fw1Mc1mkik8X88Vezqz3XwsBfdmEoJa8pCzLKDAQgTRbvxLQE5ahcRPYs2z6",
  "key8": "kNbknZuQu5vjk4RtsfaM4iw6zj6XmeeBjAuujAwD2hcdbKwLNaT9A4wCPQahhwZ2Pca5HGPm2ZFCFwntWqaWz2F",
  "key9": "5Dkfi6Vn1R61XGNZD4y2bMbokUAzWcHEi4ma3Vw7FhiwSD9QYW6cLBwuerJN72gEPH6n9LaMRYPLmbNLjnCY1Jaw",
  "key10": "2QP8jhUMoXuuB911fHMxtWH5AdTTSxHsHeXvY4jH6GS2rH12Nm9psiuc7Go85NKEp7ZaWeSWmVqjoE6EgSyVWuVn",
  "key11": "3Tt14szednUNJj4qvk5DcnAYgX3g34sUaKDdefNY7ow3uv3sDi2mUaA81BDBiV9aCuULt9J3QQNPLnw3hCJuUk3L",
  "key12": "458pqWMptteyFiPUpx6zvcW1dDkaSbu2FgXwGCJTaGxBKTFP4ui197BoANyomJdGD1YJzvW1DPNKbRaq6n2QJsqp",
  "key13": "xAwNQtW9QjehY55wue4whzdUduyicTne5dWAcBbtWPPPctKnuLKevFbc68wKfErRKnzU3wXQQ4KFAw8RysmErtK",
  "key14": "44zaWxEPAZXA5AP41QwZ1DH2XGP5zshgYGr1q4ZL1HDioamCbWkKtcrkdhGuks3HdA6NNHFMELx6TmzDgxMw5zCW",
  "key15": "2J6mPqUmgsqh4pJytek2euV4i6jpYrzSBp9Z2398gFTvFdzck5dV6Lp949Rboq8BTPrrYoit6mTCo96kSmSweWf5",
  "key16": "3o86hTN5GRTSAuLtVR8oJW5CtSWxkHoFwTNPxANmMX45WpJkiZTkJGRzTU8bnXKqJbsRjaxhqBVxw2bB1VJF4o1k",
  "key17": "5D79YNoVsyKcC1QSKfB7DvAGCTX6uqAaJPSLctE2tZRqvhvwSBBpU2v4JyRoWMNbMtE4nRpu4Sag9y77B5AWVpL2",
  "key18": "3ewqRprjKNZVBeZrWVvgGnkNCZbnRsP84JT7k4bh5ThqHUj9pZZfRiUPJSHNRaKbjxjnW2dfiwyeHj8AQhfLkJp5",
  "key19": "3ePMiLJVRBaKgiFZQtiwzdZvDx9HWzK8PHTw9Kcy5ZbzC79wteZQTnD99kQgC1xpfQ7NYd8Gqh5Efq8uDK3FDSz9",
  "key20": "4LhY1yjaCEC4kWiutntQ8qopVZPAUZG2R4gUMUhGWBG7Q1quputzKpoFtNwwmX3mXa4n2DKQsb4sU3Zijv9We3fT",
  "key21": "4ERQRFYXFFTxbVxXPBnLTkAYfGFNGnHqKpDqeBDHugAHjWGvC6YUEBZbsqzJecPFLQ8pYL53pfjUr5QLowv3QMzL",
  "key22": "4BaqXBkNkRJ3KMu5ditxtucULRqV2KvRRt1xLzaGWex3D6NSFzF6J3x56ZoMeQ13MDbruENSw22kkSMf2KfFVwr2",
  "key23": "3pUGoogTXQA3TR5ZermsdnMxqqqTLXkxkjzYmv5wfHU5D5xUF5n4p6HvZ4PeZ2JJP9zUF2EVHZRbhPzPsBtMgZ3R",
  "key24": "5c7cevRv3yzP39pDSeiNB6sHKvtASwA7mg9kvDXSaRsfLfe17nTmY46Z5CoWihQ7iRUurpcmv2sccHngUoAQf2aq",
  "key25": "46KCfjGdBzRgWbzMis5UeRpDmXUJvCPsQGNAUk7tPpDdBB69oDhPdRRbXwqkS6zVn5ihrF5d71ktSq17L2qdSZ7w",
  "key26": "3iQQo7kN5vZcHcnaX8jHYax3Pfzweqny3nRyZGiGbDA75U2enwfdGk1t9VjvDx7oG1NvTisyz3MsFsLyZXQXjtdj",
  "key27": "RDK5CynzzPJkWqzFJBXURjqu9kmfHX7sV6oxHb37jGbCcRHnM4UNpjVsW2ZaDo9ci5h4i4C1t2PsMgnZbMKWH38",
  "key28": "5CxqoCzzDGB1hk8muq9YbB3rUQ4VpwMEpwAkiYhDF6fK9aQuTvNL7HTVDk3M74qiCVF4KWqvuGh2jURLswma6eMP",
  "key29": "4eWXnvCfkXBA7fkS1TPfYzDR8WTLFUyFr93cmXAkBFbPVpHMPJEyUGK6SmT3qiyh5CsqRnC46r95kWAmtwC5FddJ",
  "key30": "27xBAia8oj5uqvB8xYQfQRSPrwYHM1tDF4r77metBAsptec8XniHnXVNajzz8bRZV9bw6j2wmHKvykaLrczawA3t",
  "key31": "2pgX79jfLvoBahwFXCpvbTrQizf2vry3J5NkvQrTR9U13PTbdPCLzFsFncvsh7U8bdwqP2fmtBQVKrLSRSXHLUNm",
  "key32": "UCjiRR9anHZGdjaeLxGZyvHHXqv7ZoK1sKxo9pfu31PV4fjB2SvA1RkaTCL4VpmkSYzqj6t9SV8Vjc59Rkek1gQ",
  "key33": "4u9MC1XutVQfxcFDTbD2fZQQdsXe8uCYsSBCz9hgNB8fMqRC5q2Sz2nzQaS8tjPR3agBjwLhm255rNr9nYLuCGvc",
  "key34": "2619kNrB82fJY13eULcJaNBPxiHH1jh8EyS9aYA1HW4qKoAMHCwXgL2XVwMARYrysDa9EsvQe1krjMteZhofQBsn",
  "key35": "4sjFQFKLFJDJ5FjtnCcoC35vt9hX7o4WAMXVyT5JQicLzLksDtLtLjnzDBPP6Wrqpq43SN5YYuVSxdww78SqcCvX",
  "key36": "5dzLhbzm6ffnTVhZkZ5k8wuwi382d4ViPFPBSZJ9csoqxSyd4Jg3Uv6JmMxVP4K6RVQXV8hMNMXSs4vZa74MbeNP",
  "key37": "48fKQPyYNQoiANfUZyJ6g1sFY5VXScxSqCx2GbNLy3mCxEmtHHhQqca7EwE548vS1yvMDoqYLqmkmvrAb4ZETyeq",
  "key38": "2Vqd8xLDabfXGG5tjUFKzLmdqVtH7nFiUumkpdwR5YWVKVwPdKTf3TS9NZSDpFNePC7BS2kU3gf5m3pfyEvixbnL",
  "key39": "463wRzNryMYjedkWBFKq9i6n9SB7nvVVu9nHjLSux5FD6v3ZZSzsyf9UjQ5UEAYg2j5hH5m48KZKcbFq2JHdRQBK",
  "key40": "wqmfCty8Sejj78hAao26E4QBk1GzihWxRgx9Eay5shqfx33Li1S2rSTtorUMEULZxsYEKgzH98B5WmXZ2wGNC3p",
  "key41": "5BzWhK14GsCfLmmqj2SA7JtP4ozhdqp4oq7V7mNpDxjGhTVMKXGrtbyBHYna6a6eR7bKTjSMjgmZcthaQdYJhvmu",
  "key42": "y8kKfGNmBhQqfoH3Np2JtkHK6JC2fzLYMRg5oMo6soLZTBe1Tg8FWFDJTiZ8kUZuwB8qQZMUHp7m1zws16Xugkb"
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
