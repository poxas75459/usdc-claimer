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
    "au4EezZ4q3gn9Z1hKC6Li5yufNQFf4xX8p2wAKgzbq9whsTW51RY1c3zbZxy89MadHSrQUAQQuu38FRgpC9FwJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56gu4vweFxg7me8cKpgohr12TcsvwFacHY7FaUWC8jZBLY4fdnu4HH9fr2J5p7fjT1Au4vHzvjJWi1FYjKb7Jqg4",
  "key1": "3tcjH7qQDWrbb1qWC6efYr3aQQRJq1amNDqeEu4i4Byiuozp6Y6F5FrndSfAkrF7zHWZ4qJW9SFq4a8sYD9Q4KVm",
  "key2": "3vaawxicKmuJxoScdihHn41iK51wxjS5iY51qkuXURxfWBwmwgAbgjpZe28U2vBA8kpUKhqFGTo8SyTUg2Xp83NJ",
  "key3": "5eDU8dN1KWH2viMnKXW4y3NNtfaTTAim6bFmLF2Abqw3p798k2XAHUWnptfRbhcHpWhQGQb7UyKFKJQNCzTXqvGd",
  "key4": "4saoamKJhLqf2jYDjaZTd6Yxxi4nRHgzqdAwdjtsARuXs4AJNByQsDt2A5k94ahgi3ZfnurYXyvaaptAMkVSnYRw",
  "key5": "22e5UsaGFSbBXjvdsQ3hjNc6XSxWZ5ESdfUazbYdLWyYyU9qDMkeN8EQx5LNuYSk3vztA3DCp5XGmHdgzL1DJiHF",
  "key6": "L1NyTVNSmshnzLt3bAWvVzQJAY6GiGnH3fz4zLs7RDd6vG7koc4XcxXonBo8FqEtXNAqdFGAroKLrf26MPesy1L",
  "key7": "3LLskXqD8u4VtRGAZvQoi6GG1x7mZvBmRqWjKqwiWK9Z5a2VB5bkyyqNFU7KWhxDvkFkPrbv35dds4bYLfKg4kMX",
  "key8": "57ycWppkbKNgYRyz6zsYEg31SKxHdofAUh33oNZ4k3Jd3ErsD9SQbbq2PPNYnps1eQpW5whfeXx1LvSsLfVTgwyy",
  "key9": "W3te8p3x8DTBDFWrCePy2vsMLkcptjzvX432KNunVDJLZBt45wC4REFhuGWJJt3QEy8XsU6wmXd3U9UpvnvoKzX",
  "key10": "3FXeGZBMaNK5xCL5UdmCqpRPLz3RQhAzxx9FMuQiNdyiUh9CdmQhTSaE9Cwk9mSgoyTTiB3xvGYSgx6nNkWQgNuG",
  "key11": "3vKku3hpbScxDVXaaBf9sR3YJv53Co7LXyWGUjoggREBscHt4pSAFv9fBkacdkdTS5qGpMmhEWU1bYtGhTMAkpBp",
  "key12": "5x9KaqReAyHaUVCbpSeGuvLny7o2qzz5qY2sD2pRGbqkgyzxiP585rviV4ggC6A78qqyCjeBCGvFwev1ZgQaHFqw",
  "key13": "4YNuWtqoh7pU97gEWBaJEG9FuCJ5EQMRmTpYTf2jSbao4EkP9Rxvk7tUsYCe4LaB1KV5D8WYtzVbX5FgnBNSQXLK",
  "key14": "5qUFYhtZ5r4giAAwkuaG6P5J5fMvTVE2ip5WGUDfWAghe8nXGn1bG3UjArk6LJoGBaq91GxCE4pP2EiC2FF8EFhg",
  "key15": "4M4ra2D3JFmkyX1yU49X6Fmu44DtJGADhKAezwxTLTuUzcGpnyEHVbS9eyXuc7Esh7aGqDaMxaNN1c2Pr6aGuQTc",
  "key16": "67TBmX5mgJfQgDXenVzYX35HKJLMuX3B9mCSLHPhJoMNZTv7TAX5uwuwyV5mBBShdgeQqebqNMnFdiHqTr9e3rWG",
  "key17": "4k49W2rC8hWD3wBU3oxTexFqX97tSXaBTt68DDQkScuLWMQ5tqYZMdRHPUiWRTQzrQw2Camnn6NBNi1y1J9CxmH2",
  "key18": "4MwwdnHxYS8Jkf6KhKzp5sif1qo4U66n4MbkHr8NHXucQfGRDv1Fa9g3tLJ5Fu1H3afskbuAfwEJJxSMLgTxHUhK",
  "key19": "3oLwqH9ggZyo6dncpa31qHp2VARBR8WYahpTMQ3rpVvFYLonvZ5xzBzzxa3tGB62CwPPMPZ8QULtyvbCg6q3bccY",
  "key20": "2AB6ANzknHLXDeCFKZ1ECZQgpG4tu8YtYoAiTSzeZpxgVfCU8YEP8MAg18FhQLq1x8WcMa4dZ4184S8YC7u5ZwrZ",
  "key21": "2SZ1VrhmXAqFD9Dqsq3skoa7VJr7ryJFU5ExVByMqxJuMnSrZBw8G4gtCwD3Ahh1kA2RHWUGwLpJZpoe2BLRZV2n",
  "key22": "4djppvzuZLpu5FRWPzkhGGkwTSndKSo3myGnHfPWiy9syHLPeAVkGfDjodBGcUHryPGoZNhTPC28mSviyqjYTKPZ",
  "key23": "RbzTrHdsLuEuzUeNZnWa4Bo1iUY73BGoBfG5jHwXRS4qkWq1HwLUtnWrLkvt65HyJR73Ao3uxNsKByUK93o9xde",
  "key24": "4yAL6gHTz57GdKEkzh1QqDKXP94qfhTKfsX1f2P993Tok7d89sCyeA91Xs31Yo3DqgWrRSsA8gtammoZDfvGfURU",
  "key25": "2BS5aF7wBH98dAS6oUScTMPAEmB4PvJzDYbGmRbdmeJjiGmcUdKB8hkGNcDzpw2URZA5jGqijMerG6m5Ndo1qNGM",
  "key26": "2yv1s72Lmv5BEKg5DaygMzXfYKSC9KzKFdSUo2r3S9jkmA4VNE8k1wexJ5tbEiXxzLm3GnYixBvGtTiKKdC1pUoQ",
  "key27": "21cRnoqMn8F6mxaK6num9yYzvZ8pMaDrFRrkXtStEPEjCCUUR8hNuTQHBHjbWismZwZ8Wtpg1dNaV2iDTRs11461",
  "key28": "3UdHeLyi6N6peCefeEXKQME93iP1SDUwKVZuGGUR77Ys9qXUVGxUvewrF4Wbxmzc3rUYoxeqdKynoZY2Xu3dPET9",
  "key29": "3FJ7gCex8gTXJ7xwoJXa6DC39VbCapkhA4CqadWma53ohoeJEbHqZMVpMRjHrF4QT2NoNn98BWtUu53R1Zutu7Pi",
  "key30": "DUyyiZSro5yk1kNfq5EBq786m8hjnSUiXuTNKEsDD9UJm2mB8mU7uJZGMm5jPcBPGqHe7XQrGMKR7WZxvccyTjZ",
  "key31": "47f5SqsPFd7yEioWCSv2aAL8tUQ7rtvrnBracb4utrDvtpAGECY9dDMymfJ2NbnG922VAQTRaAZk18iJQD81rjn7"
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
