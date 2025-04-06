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
    "kiPkMtEgTxzuHHH6GdoXPmW7u82a4ZdTUp1NTRWN2yVp6qdBMUHH5BmgAw64FEnCFStdSqMjkuEVJAEzhgJTdSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ud5MnJWAa1khUKZQRuwfa6RyWJerJnxM1epyMkpUeLFtgQ4xAXqPPHVzLfzF5ZytoMwMLPvr33HvrwqwuKNVU3L",
  "key1": "2wiJRGSmnqtQxJKZ72F5aJUv1SwqjiYPWtEKcutrSBb2FMcjEV3tGaPCRCijaYNviJbZ8mM4NSDobpo6VCWi1sP1",
  "key2": "yk1UJUhkXcSHGup2ZspWmqjpiuGB9BhGeJQmmRwpBG5C8YL8tnJCizApx1W41cmhETo7v5GycrQS4iEQ8JnqDGx",
  "key3": "5c7v7f5J1TrYQrs8QoutjVfnjYwVo5Mbw4wuVyiPw8EiGhhnyXaeHbGJAFkmKQkiFMgjxfTgxZZSpCSTfEatDMQX",
  "key4": "25CjJXVz9if8wKYaDm5vvxBa1ne6L2HEyuHtX1Kk5Fe65TRjTxi6TGfLNMj6rLaTBQrpvF9drkq2fhUUYY7eJfW6",
  "key5": "3sfUxu2VrTKhZkRLMHCs3mUmuKMFgqE3zBmtcHb47m99AvMG5YVeT2wAojNnCFhC27EXWJFGqAcM7rCjmGUNvrSz",
  "key6": "3CBjygi8huG9pq9JhuDKTFwKrm4vsi3AcyusVSedEjMJf18C1QsTeypFpmDtaEdpz3yFcZsq5KkSuT922AemX1Me",
  "key7": "BHswuSi1h4XLEHdSRDa1XbegGhZuYevgyKaJKQT4ex9RExoHqTfDuhSL4KXycA7z3sVgvTw2wftVdE8WctbgBhA",
  "key8": "wsLhp1Jit3WpnC9wtUSngV4SfTczauRL3RvJxL8RkXpRSAK9brthJJpQ5MCtaacRPVdNWtroM4ovxon8Q4znMoP",
  "key9": "3g8LWdDnP7EE3RsnD6VDSwWZNR4wZRuehwdKGwRXBSNPGt5A1YXNPBjZMsVf5535KAFU1E8My3CWztSoH5ZkE5NC",
  "key10": "3e9cj4Pkqw3d9vaAdaX2FGXMsKUH76DaYkVuH2NDwZFzTTjRXysGDzBRwcQYA5CBPrGSKNuW1AFDKbBBedLmbBsT",
  "key11": "4uc4MSCJLfx5pVgAwHDjX9biFA3GMYPVmLE6wwmHRWsCHMbwrLmucrCAPRYYW2X8gp47faYzgWwEoti53hVcWbHJ",
  "key12": "3PEDWpaRfUQPq5pExHt5Ue8Fo4RZ2WNsbxMdHReUB52xRhUgbQNd5w62V3CJ6c9UUDJ3KorP7v98ctGrJj6naabH",
  "key13": "4Vy3DYvJEVG4VSNsZAHUBprt2qRMnAw8Zif23vb416VXptmCp11PnguQmm5obg9a6M3kBE7HhNChuqnH6jjp6UF4",
  "key14": "4XmS6ip54q9V81Nqn3zYhKgLTP9P83FjqgY2E4kxGzYLBVXEqWL9fqxSjpi4FGFbdSSLn4cicgKFpq5mbYQYoGtF",
  "key15": "2QGL5fbZhq7AEMHgmqzNG75cAtU9o46EXgZrXr59yggz49gxo8HyRpT2oMxYGtLJHSCKLrWrzhBJ1omEY2fYyjHx",
  "key16": "2Be2mVJ4CUVzkEZYJpBcAc5XxDv5jqRGoyuwVJveaCWvhwGGE8jnnNTkhnpbTzkPAQt8PVf2Eug3ReBG6pkN1445",
  "key17": "3S3gw8cmgsC5ZFQiQ6gSn5zRMQXwxAZnV17H6BGgrm6g5n5Ujg3DCBMHHbMnqou7sksa2gnnD3D4mtMBS9GzYQUJ",
  "key18": "4QBfQjjrjA6KYx11jjW3weF7ZEhcwC55Ege1oPFvC6m3nMBLn4Jc3k4HQ6M3WGtGdiwZoC5iXma5a6vwAwRuqoE2",
  "key19": "43zbXjRiENwhdRNa9ZAH2Qrhj6Xtg2Zws6Hp8SN5CoUPZkjYMzY2sqZk46X3vf8B6VzRZ6Le74nYqicSRSek3pqx",
  "key20": "54GJuzagdVxzadZEHkoTSpe2dZSdKpNTaC8DSMskTBMQa21Y5Zw5bhM8y44XM7L43TkeQ84cVYziEpcyvpykxedb",
  "key21": "ZxMzWBoYBeT2SXzFJbJixneDrSXGgrQYKx6MYPxHig1QRkqoUAa42D87GLhexGvYKo8aRRjieHs3NUAd1vYkGhk",
  "key22": "3CR5Nq5gUuGJYJXp1S7zuMCULRwZaLGUPoBCep126y7FxZ4H4qmuNsYfXGDbBNh2DL4kh3qWaUZ3vRKMEjsZhRwH",
  "key23": "2XuaUDMeh5RUfrPU7YDmn4zQmdS4tep8ZzGs9dx7u5yzQXowM6bWK3QEcKCzaixUEFM4htmaiztspDDFdKrbio7c",
  "key24": "4ETAPwfk1rZLeTQViLPfYEHwsKHjcqqWXtrTS6TYYnKoxj7Qh3gY9ZfY5qbRqHChGQF17M4FTQRchhJsyaXFePj8",
  "key25": "4qiZLLLcSTXmocHyNiyDPBd4ziQNusGVgFPpbPqnnCRWEnMtuRevhumyBdiDqKwbRKhE6j9Je5kkqaGYhRUZtFT3",
  "key26": "54EwTm4mD2PbgGnt1xNUg2oLxda1gA9RQaqJRSKjTLjXkbTb1L3evrSsNMC4vhEnrfhyLjmTD6YdRH23LoiCy6J7",
  "key27": "3Ko7cgT7kG7nvvqDwPuZFRkmkeL8kqMNG65AKMm9FLSbybePnR8Jy4vvitf4j3pVEovJXTE1Nzub369S7buDGGTd",
  "key28": "3gsAf4YzhBYyaoRmT5Kok7j5tA4wxVUdSSQ6fU4YWHWTnYweSdJKZcCfGCrDkW8FKyMqboTzaxnYfeGAGTNhepun",
  "key29": "5cQG1vfSvpCKJ2b1D5MFSxFJcS91uPXnBgUjJBL1V4FsUcHwA4hodX8itv5BKbjsZ4FTgtHwd1ji5nYioK2A1rGe",
  "key30": "42unBtMMXeRUcu4RFsUU9PSfmSszxjpFmJCGauFMFTW4hLrqQu9KsAeSkU94Vf2h75xEM1i3bzJuxGegtsKz4KNu",
  "key31": "3p62Q4hDtRmE1tas8cdvXxifNpPZGaBqHQuCV8x6yw2fHUxbwG9YufBuJUCQRsRbEWdPP9dDoYJBuKL8tpXzttfF"
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
