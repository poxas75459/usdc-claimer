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
    "5szpwCMQ7yeAjbZcAM5KcETbqtTgsRuw1fJSeHgvG8Lk3oRiqDVAaEERsY6e9s6C6rPJV6GNq6w4hT7tF3RfMSXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SB1XTgZJazLrRFpcQMDJ3ivLY7YD1zxrXgUhrzKSAVcuEg8FzbuK4oVD5E8x97y83ARkdWsgnBy1aH3YTHSihL6",
  "key1": "2XsZzGh6qZoqJfct5uuNfKUwGdyMiepGuHy9r1GXPwc7JokDDbtTHZ4dWfnGH1GjrAVxiFsTmGMCnbUECcZZYGud",
  "key2": "2erUp7asNt8ffYR4JWz7Dgx9QoX8H26Bu92ubvctuVHbQW6X97EZ17mkkPc2TQw58Yzsx29cVcHu1hhFfyiGb7aC",
  "key3": "5x3ete7eqPWYecWndasLkF4qagFLz3YKTbbFNkoR3dPcbR2rQNSWZdGhyUipVsVFnfXimQykBoAdB2aG5HK5vwwJ",
  "key4": "41WzSWWdHDuGNsccpgxLH31hF5sPaxHYgM8Ywnfoztv1fP6YVPU9XfE1LyfqZfcsYtCtqHpjWZkHsCp2thvsuLPB",
  "key5": "4gMPrHb6bPo1xCmZT2wwf2NStrnEiHt8vAdnpZTcCKTYbxtVMBRvdgHtSXREQEW7h3nQM3pJuiBWAJk9zSn54De1",
  "key6": "5QsqBQNgomRjaiKiEojo2UPdK6WyG9FPNzdgVVfxK9ziCVCNyAuqMpdJqFiP4GtdbvyM43dYDB7EgNh3uyhJ7cJx",
  "key7": "5NxK5U62ssrTJfVdFBiATcwWv2QgUiF645Cxn5TUWQECgKZzg1FHmYk8TKeAiJ68gqvexwt37JoYH1BkfjprDXJF",
  "key8": "4GisN7Nq4Yd3SvNRVuMcg11X6QnGzyxWZDGkGx5DXSXktGY24T12Fe4RThBu6hAj3kpacvYjS6zNy7Wx5KnuuanM",
  "key9": "57vutqsqT3vdECMUHxu14rEkTXnqK2eXsLt5PQmaidHydSUvPeqEDSAP85gYnE7gZVVZRX71K4nHGvaSNcC1i6d7",
  "key10": "5NV5MPrSvkBK25aAKTZ8UgKiJjTvD51eapQJxnVhbQ3dARr3SqLAdAq2g5u8iMGC11DiGjjV772NUox4rrRpkQcb",
  "key11": "GB4ganRA6iEdi8sd26CXpzy8jaXi5S7ysFzj8ZNuFiCiZ8XWUTA4qnpGEzunLzDXk1jCUqQ9XVA1E5juNuzXJD6",
  "key12": "2KZsGFMweaxZP3drz1gxT5KdAdpjeXZqBGm8iQtBbMzVEgCgMNHUNkxUGgSDgTE4XkhbbHSVeABY1NqjMRMu7Jvk",
  "key13": "4fb4THLmKkdHgfQwuWBgcLe3nX4hBQrCvzZCwfUXsYD7riEvtf4Ui6adxieWvyayKK1iCD6DZhVdk2PH3nQUokKR",
  "key14": "3Nbbf94HiAF1rMoTHKgUJNqysV1BVVafpRvSwxuXRx6moKjrgZyLwevseuCRLcQojwnvCYXZFKHQkyuBZbqBsVdt",
  "key15": "8gEYfWcntUcFrwNwy7RseeJh19byHVykkc2iFh2fdVhPxtdAXY9b6XRBRsDrmz13DUDNocCC8zUBEeWsKsvBzCc",
  "key16": "3CEWETtdALRV6WTK47wNqfSKorMzr7KjzLxHC1jr72ALAwik1718CLXZEw1Ua6mnYghdcgAHeVKdyVTS8tSxfYnW",
  "key17": "N2D9HNiPN2nveVrtfaGW4TqgVHunmsgvE2pKj8MKkwKfDhoQPwRyr5zPdLKCDCV6hRK2dDF2UKyXqMsBCkoCsrR",
  "key18": "5sTGD1P3pUqhaSxrsoUQc8w9LCtZJBLXc7dCMb254CwCw8TPmDVj3rpeR6pYUuVwaiBWGtMXQTJb7nKUh4wbq7is",
  "key19": "3xViJP1fCLwUR97XtVa4C5ST65X77nzEhbVTgpuuo9gd63piPyeiCjAw5qXg3esppTxrzivXzwDCRLoyxVkaptnA",
  "key20": "5xxCmKLAo7bfmdfwtX5oJpAb5ct4fDG4ZEKtGFKjU5NsBbHuzyU8qjWxc5Vbswayn6M5R43sLaRhV7hh4Xxd7dxC",
  "key21": "66qSdGeaJk1zaMhBEYbH6iiqqXCNcAmmbHMKX2Hb3sXge3r6U1myMNzEtYLjAHrVtn3q8oFNmSEESmhMrTaqRxjS",
  "key22": "5fN6RoyZes4G5VKbUBZuPhHGt3TPbHhTmMCbNQp6F6MGXWyMkQH1CnYYdojPEGm8NBmLKqFEYNieFcSqP1ox7MLr",
  "key23": "2hkfGM4fenymtTpNvR35JVvwUUYvXfs9vHN9NSpgcZP2Wor85zS8RpABPaQUkyEDyx66gJ2G1pob8Abg4V4Q6egS",
  "key24": "4u7wrtrqB5mF7o9LSdbco5LWTs5M9qqthFCSmx1DisC8sj34VoxyQh5NYjZvPfLF3CnQ43ut3QHLvH1idVQVzVDm",
  "key25": "63VwcS9MzcCdPqJJ7imLsFibsv8xtyDzqnuNCQ5i1ak6vefifPkCj4begZhkKdq5rxkBXmXMaSdh6swmb2LpDfp3",
  "key26": "3X65CefwVJWWQJ3ebvkCEiJeGNfwarWUb2jvzaEhGqPSadot7MghqiEuvAiE19o7WZERbkZQyYTuymLGFj2m2yod",
  "key27": "37sH4G3mHYv7f8RpKrf55j7EG2U6tnVdLtHXDUtngXnvYCHPuqFKTgcodpeGXqoLLiMiSHcSjefH9JHXWjijzNLN",
  "key28": "538S1Hn6sZ71RBTLf8snDywY3kM5QZwcRk1ipBXM7ArYT5dAboFTibqQh2DDzLteXF5MQNEobnQtk3AK6ZQVSq3u",
  "key29": "2epge4V6jSPaCaJ7tXkzJgW76E5DSTpmZkaCejL2NYHno8LxWmbdtnQ71bFpV148HVtghnXMDhpN23hn7APzu1yL"
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
