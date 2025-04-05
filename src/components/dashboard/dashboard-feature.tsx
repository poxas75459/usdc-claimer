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
    "3ZLmNfhkxCVFztLL3rXwCtVRtc6HC6AMWuN7Hhng44gn8g27eLed8aYGa4JbWV6RFqa55Yz5vKmPWCYMKjpt3hxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hYyjd4qvSqtHcEog4dVi3nBstsG57B85gAzEVYCanX4sbsxe2XjMzPuR6NMvy1zBnQnYebhaF85cToUauMGsr6S",
  "key1": "3TQvrozUMUFvy98Sbtw64sYn7HV1ccC6zbBVvzJT25Dockq13HngpDS5j2Qk9NiZ9mbQ2Y8cGj1CUjSNHm3pv6sm",
  "key2": "2LrPrwNvt17kqKh6nvtwNTjFZJCvrmJG7RtD2kZp4ZLarqUFWToSvd6o9YGP1K9tPU32mCZyr3rSzgAwgAcMSrtR",
  "key3": "8t4NanPFMH8ytbFrYgUAXF944BqptTJRCapeiMhv1XfMttvnvFEp1vrvBwaPP2dcLqAY2UybTVoR52hCt9Th9ki",
  "key4": "4KTYNMDchFMYMWjk7aDZXLuanBrR34zrdo7nFssfAoLRo9uQvdzJR6oxHSvdYFJZNcJRA8Twhn6CseM9cu1UAPiY",
  "key5": "2dAJZ1hsLJbJrFiwdZAhJwTDRwJ4xcXgJyoAHLRiFwwEa1rFrt9ZmvxdF7ob1wkuqjAfsR91hhD52fMbsVLmmPxP",
  "key6": "4fSL9aFFvt9P2SDJmf1cM46Zhu3gnmmqNDiJMxC1RywMDHj2673EnhRPyEUJH2Qc9i6qi2TjLH7H1mP75zRTabeX",
  "key7": "44dwXXGTsWBMCma2VfSk9gpw5pVV2rktX6scejSEsJvWwgTHvPskqpGWqko63pNEv9uriYo1BTsN27e9notEAgqg",
  "key8": "WH2VAXWKNXK96Q4h1Hz5iFUvm2caUL8iQ2ZqDaGkEiKodcTmLzeRWh5RE7kHxQgVo1mBuiNCGpfdw33wSaGvisv",
  "key9": "5wGADP4FEr9WFFxgaiJQU55VXkdXPncLe864hZskJbZxXzoGxjzGP9wnGSdkfNHrB6BC8mCqKRGJ3HWxfQQBR2c8",
  "key10": "2dQ8cSjaxyp4cd2LMgxk5e8pqkeRg3E769748ditPxePDGgvAUnJgdDM6yCoMzzAp5nPFtmqRZxBizMR6MMytbsV",
  "key11": "JhVb7Z4AR5WWPNxSu6R8MmF8AwgPXxSsteS68TDZsXG9tBUxsgvuG1LhNvfMW6C8wYkxB3tpX6V6qNYKQrPPJa3",
  "key12": "5tpdpf4vbvi7dgBpEWkjrtzJb8a6LVGiuc47tmSaGUMFwvyNafM8Ckm55NzWtPhN87dpTZWFFzgbz56yYJzGrM3k",
  "key13": "5JKkJiZ88R5Q9FzBjSbfb6km3BvaWtRMnXcGHBNnNaN8MoyR4zJbUwpfSwU5ARQvDDxQR7kbhYpmrTy15vQHTmJj",
  "key14": "5mnqQk2E7b4ynfCqoJ2m6JVQMYD7YVY4UycGJ7Qxix4U48S1BU2zB3iYHZUcwsoRCQsVM9F9FfeZkYSAtMcP5izp",
  "key15": "4oCYjBy1WiUzHyp4MDS5v36hiLXEgF1bP4SZob75CUjeXATTXJPacsRYsySp9w4PJbPAHcXHLMPd5JV11dzxbYP5",
  "key16": "5EXHZ22oTZZozKWe8sKFxf6UmTRbtuAu9x1Z8fbeZWgMkn9quXpjpcGuuFSjiDL8bVU8iwRvzEy6SHWiQGshxnpj",
  "key17": "2H188vgajJk4U7G5Hgqs44JgorLfSKjz1ipwncMZmzfSDjk54WA193vrmA7mbueunF1B6q3mZoY8dadvm5EVVe6x",
  "key18": "3UPHuMQfg5tCPpuQNyPvg3bzwDVv2v82jds4RJhHvnFkpWpod8448vZ9ngUdo3HMkrH9V1GVNpp1tp37zZzrhHGb",
  "key19": "KyZbT5kSNfDKNEVbeX3hZT9H5F7CQN6tRZudAJ6GyBsPzKgx59nqnNek5iM5fpMgFCkwWeGEhWohRAxsxQbLkHE",
  "key20": "KpSyjArQzjNJEXgPMYJeazPixNbPAz5mpD5vuA8Z6eDgMaguRzXczpbuBetthzPk5RsKr2nMGtSxVJiXrNYUeXF",
  "key21": "4XjjehD4k7MdQKVkK5dUF1fsajdg3aKbv8RmJ3PyzBvoJcodoQfZsVspPek8wk3T13cicwB7khRSdN48cGrrGvzK",
  "key22": "362i3P3Dshcok3dF5KsZS1vEKM3PG7MW4iPeHaZ6Q5gKEjyjavWhsPyDbQY3EcjoSEvdGWFLaXY53GQByakLKjbS",
  "key23": "3aejugrfBBtyzQuB94YksNKsQnVno1x5si5dP3UEDtYGb7MBWMmH56ncd3DPf9xkRbj5RrkVtQtegbg911wcnpNw",
  "key24": "4fyAgBKFEoDmg9wGbiBhNqtQJY53HMJVhPFf2vjRRrnCMVAoot58mW1mJFYpH8vDjaEnte7qk6oVatVX4Sx5accG",
  "key25": "58HnbtTobR3s8CwvgATikZ8LpChxZo1uLtNofr69SAyYr3cjs14MuM3bEy7EvZLZ3BZnLqhi46UMtmzaMDJWrmcs",
  "key26": "28gfHQULhPEi18rAaJ2U4uwBn9zoHDj5uP3E2crg1dUw63FrmMn56uS5hnTEspbv9TjKX1iguZE6omQ6xJdFSqDs",
  "key27": "5h4QjJk8UCxiC3A6fKBs2zpPV9yLtqSHGkG3bQvqUd4YY9KjYKXwjUFyomAfHgskxq14Tq8eQbKzMRKayYwiUM53",
  "key28": "7Ei8m72gJA28W5DPJwYqEx4VtxTJfDj3cjpEzrBaPGbQT68rJNERSyh46K14cLjyjDAYuYdTZ8RgZxZrbdS5yV1",
  "key29": "sh2zdw1AcXP6g3btvDPCWtomZHCk44A6KigjbXf41cNV3WZhMSqN7sNPHSh7eVQBGVi9h27QgoohaHEEsCgdQCE",
  "key30": "5o4F4YqCUe5s3dkxtMLhZDBmDY3JNu5aNrJZCuWdTiyt5JUdK4h2HmSp9ZFsPXuruou8y4TxNnts1FeG6SdBJn6S",
  "key31": "2FSFtbigjRQj1u6Td2PoaqzUix3eZgM1Gm9PZZV9tAuuRNyCSj4iRFhLG6aZDqW4gbBKbWTEdSH9kji3pDYWAQmh",
  "key32": "4AcD5DUeaxYYe9wL9qm3ZE9iGsJgMsGDiG5UJYs59qqLw9eK4maxiryXSCohsGAxinBp1QpjVRxFTuQgGn45uU5i"
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
