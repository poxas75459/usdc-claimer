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
    "59bszKYK51PUq1J82b43joRCT19HMEoVNFexQX1JTrLhQtkVpehJM3z8EPopGeJUd86L3tAfNTQRAosSB6L8eQRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bTPxK9xnbUPF8dcWw8Urg2MZBE3mx7DkG6qdMFVFRfqRJbezYqxFHDcMedhVrRq3BkVT5yReKf1cA91shkQVRxX",
  "key1": "KFCQh681vhw5A4vC664macewYoCVwpRu3w56sY9mH8cWEeHA6sxXTVLK9LkZVSjX5mm2QVY9URj83o2xBCLndYf",
  "key2": "2SrNLqVXBiiF9P7DH2EGXtuNUcojTWa3Eq7SvZQtHcMDKJW1cdAXw13i4QbXqWPY2tBwNTir9oeb8oanobY9wtgH",
  "key3": "uv1aF28iCvBzv4NvoavPL1V955Hq1t9Ep4j8asorxRoXfsRzgqDnSSLfetDR7PtxU9BxBqJ7GGdpUfvuMoSYfvi",
  "key4": "47F7Fpy1ZsLoyhdNv7r13GDF8ufCCAUt2d3vEovqPo1Lq6M8rPNK8bLu5a5R59TNQFuuo7N4dXiV6EUdeAWdqNx9",
  "key5": "j17dHhfvnHuoYMt22gSHqYzd2wDzWFxBkVLrDJ8ASYwJcAh63QoKiryt9mynDMkJBiK9mr5s1yyztTFpyQrrzfA",
  "key6": "snUAhpTyqiEaaGDmUfHYKaMApGBGQVsamm1r2xUsDysHZTGVmegfTBDs1F1VVGTkzJsTqq9UCdsKAD9FyYCiurk",
  "key7": "2d3pfYK2hjc1SfqXwuRs1479Y7aE6ijj6QHcT7eCd7pcEd1mDejjGUND6fsXerKWuwkn7wuBWewdmHjfJ1jhvL8C",
  "key8": "2nhkjs3RiG9cRoCqDqqwifFffxH24WDmvPE1w9Ta97pWgsFoa6JiRd1jVecqYS6EmPnowkNsFz5bXAa8GrGFatFt",
  "key9": "4n4UMVx2hPEPoJFBbc28x99emGtKCiALF53argpBU3Jrai8gXpNGf6k65zVeZfiJoRBYkbwHyX5vbVi9cFWf3vwr",
  "key10": "5oezNQT3go56avAKcPxqAVTCbESFo9xD8RfJ1QwN9bgwP8cLoaezB66ukGFUhRVjx951D8UUuAjRjGYgfSDtM7oE",
  "key11": "5CyByusuSEeEKyXZRCT8T2hhqc3wrWmFMT657jFmRYVn1rieZvPrrauJMCU9vnZxA1JUTfLoQ3JkJw4R2NGYFqwy",
  "key12": "3QGP6Fsr2z3Vpu3dvz893eyYGEh6RPkE6V7Nn7ixMA2zMPg74JZ3QEQyPzyVtxSvoeBFcXGZ9JiTjA3HXcR5h6Uk",
  "key13": "2sqJtgmFLEZJPamuFgSTYF4urHBM3H9TXn33DS3orTx5C1aajZgJcyy8giKupdDc6QJ2ag4n4wQgWrRDHdLngReA",
  "key14": "4VfzUQ2LLb9uxBKXXgG1kTKPRcrWh5PgaQQceH5EZgjSFAQ1WgZ9aEVRBKMS1RdkBJ3rhj1ukWA8aLrvt8aNSVBz",
  "key15": "4Suy6BHhg3HDzwjc3YmErViHMDE5zHyLCVATWcKzK325UsvwB89nqWmDpToX2x7DtBpyZX7Y11FJz4igi4crtf96",
  "key16": "67eLvHNDL6iKum3N9FmBosKRBnQEESNWpVD3g4CBFUJmnzxnX2s852z2GS9kPVPmVh5XZ2gEcJniE52b1wi1Mbvv",
  "key17": "5WQRwhvaV9GbjsgKopFU8P1DRuX5LJSL4zfCzBbZLaAtc2YspXiYAhatD42zpJcjST9sxTfnAQ6ACBxgjvdDrbpE",
  "key18": "guRYUttvd5ssdqYgq1J9vLvNA5FaU4VTGfbgQJHX3hTBdj1s6z6ZQRwmoncGhWxrVXgWJFyTts3p1UizR4etnow",
  "key19": "2CUQS9T2GqVjfUyYTnoVKrHeJcQwPepnbUcrK4wb7PFKC4f7QJFSEsuv9cLovnCnvatT1C6xFbnrh7WbDxm2dE9V",
  "key20": "3RGax5EAFjrhjZz6dgZefstaU65tRQ2y5WFQk3pwxeEzbqnQ9aLikQxQM8VfWCdfVWEMViXzFVFe9DQtMHkn6V2p",
  "key21": "3XedNyVSmWccbH26MXmujUy1j1kAEuqc74ZWHAFFbMMuiwptqj8y4BG4eLxSWKefiYhmeNvrsG3DXMsWEUyBhJ5v",
  "key22": "3aykDAarsG4c5hCQAYBYLY63nW2cxj7Jzk4CdopJ23aKbvminAvivQ2Rv5fwVUzxMSc1ffui76VjNojkV5HDeQuJ",
  "key23": "fr1yHZnPS5zi4qur7sS9xBvf72FKbxmhGRgy4txufkySbezrWQeYS8w5thq8LLm7EubJWiswRzGeyq2n1wwTvFi",
  "key24": "4kreta8jSU3zjVtZ2wRPk6Fr3bb7z5spzj9ZR6xdrLUZtec3yegpdE4kHZdKoSx3Q3kRAUuMTFH7gmBBPcV2sSL3",
  "key25": "xpd9GZ5qSJjd8YVq3PZ3RJBRKUzrPPVmpmq8xd8EYb1iRVmMM5QJqY6N8gha8d55x4EWbUBK7PKYqtvAu1vm3Li",
  "key26": "2zV7u6or62CMzJZGbZQ3PjyA4ZNPz8nJnrLrcttpdL6tQBbjdKKnyXQBumk6uVouEW5DRtDpefyQd9SAzStB9U8y",
  "key27": "4KJF3Vv27PyEmfHBGsR1BgrtZVWbnmNwCJ6T1qHBakG5yxEpBLCHdgR7t8nDXuyDgAzpveA2k15Y85ucpTkXksj4",
  "key28": "3WnhFNZgKDy4hvD9hLStU2yrv9Aaw4S1dSPCGTK9mwe6xDZ9N9eLZTCJ7MUqRe1vVzsufEngZ1KnzUH6vkg43Ar8",
  "key29": "iSUArdW3nnCeBT2JLQpi7ox2ZFaz6SdXiu43oLZqWfUNb7mjMWSxMJTXe2LxtMB6Usp5rRuJ9tdaJcZYfnRsLjm",
  "key30": "4fCo78x4jVhtj7Uu3JNqNyBdYKcaT6N9cb4rZ6fYwh1pVSpn5gg1187DyJT2vin3Wgzia3o9DbwVaybY1WAuq4hx",
  "key31": "5Q9qFq2nkVNYyAEoT2yWNFiGHxxx5SaKrYrzCVieynD7V6HfbbopcqV4DmTE8EoUdkS6KDSr5skTNmwWD9K3zqHd",
  "key32": "i37Jevt2aU5Zy7TS4rkUtsw3NLhENdfdHJX9tsQhisyGjonrHL2XHhGsqTTXAmyj25KDakp1Yg7PMWwnDcEn6EN",
  "key33": "4KKDGqDboLZUH2f5w6iUDMSZsf8sFQETEP3aBh3AUkag3xesZRNYMyRfKzHn5qF1cScY3SJnk9s4KYRnYvTuZx3x",
  "key34": "3NZGGKBxzhEYD2vKQLTxnLyjtUXACvtYRiGYw4eHcXo1oXhhHn3m5CxAP7jPUhMj7oeVWPH2Wva417cQPbVngTZc",
  "key35": "2ASKjtHm7YVEzk11tFg66AmbRsxUYdS6kojPYY7JMazAh8w9wSUTi24FwzddzBXzEpYcZtMjCivbUAXzELcxG734",
  "key36": "2NHRJu7dhTXJR6RyrifiufH3AY2zMsdBaQkZTdzZZoE2s3D7P1oHGJHJfm5y1NYNRM2ra6yr3CB9r1BisHLRPoED",
  "key37": "5tcMUSQ5TP8gzmoFRopmLnnWjhaXf8oQWxd5hQJNhzvHQWuxDY2QdxVX8pDxCUWbDmY9PpgK6GzcWbqLwwoBJyVi",
  "key38": "2hEJ5EfMaDPokzotgsCGUwGa56vzuL5TKr95pahfe6j12JWioxiiKQjoZj72jn6M3DxgPJ2ykYrqZ5wMdeD7omgi",
  "key39": "4VFM2PNmfj6T3wVKfRWwjtrQqmQbY2K6ErmZetG8CbuFHQVVFi8fhmAVfqfXQxkSEzXHhrJsPB2uCmWsmrFU5EPE",
  "key40": "5SqBWXe8rAYN1xE1vk5qiFS7dELjyKtK4b1xHhg6HCsG8wksQ9L56sFhaVcDGcuYaabDwKmg1eqPZWkZAzFFU9tw"
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
