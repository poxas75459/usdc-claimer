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
    "2t4jYYNZZUBwGcfwzfAY66Na8zHEyorT5cYg5SaWh8uYFVX4csQBU9tbCep9najokQ7koaxtLL74FABAKrEvoZFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AaBs47CLm5GEUwrBK3ZsnWrgKXuMasuELNDYXdNWJq3Umu3aexNURQTJxMunSkJxABXssoZhhR1TsNLXZr39jJB",
  "key1": "2kX6MXuk8YwXoZG1KjvhHDXwnyQyBTWa4vpDqFgzM4huf39B72Fsr4E6rweL82Wf7hAAoSHC6xwxd4dybAE65eTF",
  "key2": "xWVSsX7gpks27nkGgHFS1LsTsxceZhT9jdGo12Ckae8xQhpquuxMWCSepTvf66pEX3h8G5TACS9sRb8j7LYEDVq",
  "key3": "4UhGR3iHXJCeMzwQnV7NneUU4y4y5jNX9U8JFsUQ9Gq52GytUkprv8etAJynSSDmC5CVK8qVbQSuMweSV9cAwkw",
  "key4": "2iUSgYquhNn8FRTGgFXQ8u55oWRYLjsFevJHeukG6fbgeWQd7UPznwQaWGu5NZUZzLcExkAP5KhFyAYJXeWBi5Re",
  "key5": "55EtAArNvHPUfGKgPdxhUmuyDqRPG5L6UrcjwKpJE4t5fNVS63QQ2cES3Z84ZX9bH7QmoZWoziC2C5SMom8oTei1",
  "key6": "5x9KHaU21tufEt6cFwB8izVG2oSpn5XnQ8TJ88HhKtuRMoXXPHBCVVJGdYFju6Up6gQMPHTms8Y2ERyWLCPcoeFa",
  "key7": "33nfTRJ8bAAFYxR1VvzjUVuZQP3MNUpNXZRq4gLfU4MhvnyVa7XM1FA9a6QYejGnYx2dp6vMTFJKerPc3iCzGf91",
  "key8": "3kQzShZETcG4BBUJrRPSWCnz1PRWjaWZvVRXS6fS3eaCNx3RWbPuiTCFYFCbcHHoJgSyahwaaNJeB8JmwSQQfkRY",
  "key9": "3aNh47M2gpC7YBV5NtzeKPkA66MiiNsVZgtRG2SLUoDqkR6RVgrjezMQwpy17zRecfUVciv5NXxcZmuXCzDRBtMb",
  "key10": "4N8YjwMocX7eZLbDzAE3c4jytQ7og6XKAproAWvCfZeeJnStq43gThCbZRQsaTy2abgGQqKSp9VHBM9q6mrps8Et",
  "key11": "3ZMuztoZfb7hmgXV14pPRETLMokWLXq7jeXmf52ioGZQZz82sJQJ2BXQ7arPcgw17KcFRZhovPGPFREzzwidS8L5",
  "key12": "5i1NeqyC2zsdnYeBXoQN4H57hXZmyiabYAYmoiWZmrxDexXq1EZe6o1RRLJzoGjafuXEs9Z753dMTEUmqY86Ji7",
  "key13": "5ztnUezreeyygJpZZGnL5H1ij8WGwVbgc5QGSmxyGp6qzL6LwA7yGQFxWktzViP4vFFLZuQZW97vbLoXf1WuDz74",
  "key14": "5fN3hRR7nQTPQUMhN52xaA5HbFRrGJZJWHfeNGWGkVSrcg1QqUsESCoYnaBLj8oymp6EUaPTM6ofUoJ3BN8ZwvUh",
  "key15": "2oczR7DDbiHvH1L9AufjwLXSVC67g2jM1nWJiugKxtURL5YQZBT7G6R1yEr7i7KULZJVFNdr18YdGSS4Ma8KGc73",
  "key16": "2PduXYnq74BW3CvqX6YffzqZvDsEZ7WqEKWZDv3qQeTJYFrTqtKChR2F1zcULQsiMZkoYNPqnABFJa2sxkoRMrkb",
  "key17": "2zQYYmD7eP3FrKaq4nuf4Hn76w4b4Y4dbupd2dMJY21wMQCnBMrk1AqvqMBsPcfdcHp5DGA4b2rRa4bsA3NeqTjr",
  "key18": "45onZ5NQULKZkrdaqUiDEtxX62vcg21xh7oKKNMWo3ec9y6LYABYY4aRQKKh5dpgKU59o2eSVY98wGGFWXVtFmm7",
  "key19": "5acTRrY413EE6kehCPBeGjp3PKpboLBpVRuTUicsGnqMCDZfA9TykrXv1h4WEa5975Jxabrr3b9hNqacKNgVAp3X",
  "key20": "3nvbZeF44LPh5b2DuBZyz7u2WdK38DcBU2d86JvJT2CBMkXcQ2H8Vi2TjJRHM1uLAG7G3JMwpdrr2NGgjDgHe9kg",
  "key21": "fFTosDDiaUvebyafg4X3xuTKCm424JTnPiLKw5xMsttUMyto9SQ2xUKPgxZUH7Z7k1GDSUw72gB3Lmqwsex4zAX",
  "key22": "2nxq15WPHLTUfa4eaWQSvJ5s1NNt4sYToXzFbAfY5mE6AD5a9h26ZhE6a3Ui1jJzXVQa1FGKdNB6fHXRkriMpHYk",
  "key23": "3iCcXFBfjLicFzpEpz7KECiyLohuv7rV6Bi7rG1sPwj7xqBSeeUDJ1K5LwTsp89tqEFvqf27fX7h4e3beZzkoT58",
  "key24": "3WLj7626tYdr45gY48cF8dpZ7TDpLxTPTUcR9deGiNekoJnoTRfMb4Dmwh3bWUPdChDWiPLbLE9N7uZ2UPMc42oL",
  "key25": "5JLUyYbDneGPDKugiQEDVH5JpmRATFXN9dNHDumfGgXCZnvWdGVCN9NpNQFXfuqrWNV9qsweyMi1T5DrZqcfLqHJ",
  "key26": "5uxWJfarW1tMz5M1oZPw9MS1eGirkekHwuPELAbpXAYi2g6tJLJXGhj1aXozqYCHpC4ysUYfcc3biDDx5thDvA1",
  "key27": "EPSsBC6T5z3dqgak1F7PUT4dt6RXP3wfvNzuukTHGhDLiQM9tp4vsia2FJb4u7wc26CZ9s4qxN9iDQxjpcsS3Qt",
  "key28": "4SAMVJj41XBTsuMHwGG8fSaWdNxm4cbMC9SvcqD1kqEM82QcwH5H98sLNxuMy6LaCsvRaWMMNhURCxQhETcZicD8",
  "key29": "5EfTiMaRh1v3G1CTctKGVeqBDE3Q5XcH8yyK6nejhLPmtqNYFcztiiuSeZQmCVtvgQgCPKEVZrsTK2czjEQG9HSh",
  "key30": "26ziYYa9sW8wcPGj7g4vVHkgpE6EsspdKnttNX9MkNjAfAyydTweEVoMnAB68bdETVwjq66GatDbMU3bmu98WWsC"
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
