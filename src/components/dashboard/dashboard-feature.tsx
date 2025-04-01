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
    "5ME1STP58ShhGTUeif9cbDnwdUPG5YsizAvytADNzoCronnL84zAW62ZKbdHB9yHBNUTdQhwKLeWL8Jif28NPN7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ej3ozdLwrgVUUKm9SYqeKK6gEAffdTE4LX1cTe3kMbESsLNNjm7fowzmiJVBMcF6Gh2KoosqQk5vEB6q7ZuoZ3",
  "key1": "34aCASFXmZdaKSKJtmG7g6XJ8BMQSbLkeGNWVk8kGvGuDvunX7Fmj5cjyjmFUUXFFsZmG3cXUs77o1ejDhgcFGpU",
  "key2": "2cyK9UgDd8fond4sDMURuYfDFvcbX1B7xYZA8BzpZnhXbGDNuScAsvbhd8YQqtZuBA1zjmPRG7wFx9qEZLPXFRJx",
  "key3": "2Ym54HzF7BcMJQBrEJ9UKJstrD8LWVX2GpEyyMXiVAXebe9nk99egQJyMhDvzKmnhteDaHD6Q6q2ypumt7iRtdfs",
  "key4": "5uHk3pHLeJAmLyNvYrS9kDuCyjGfad3Mp3wD2M76QAsJHVNhhcwBkNzw8syKAu3J4E7sD7owui7Pxirct4g6gYPJ",
  "key5": "Ak8QnawkMkPEWTpv7gWkBGW9eaRjyCSHkRNmL3bwQxXre1ms8xjbZpd3dJ7Kct6877BYzoRNGcZz6DzyyLGJ9TT",
  "key6": "3JzzU8atwAdqpESiE5tmnpWDtAS2Lu2TwPseXfRqoWdvRE9PaGAnQPXBzYP95mBaMuwS1FH7CZ6qEm3Mnd37zBpt",
  "key7": "35NHXUzzoxHJ6hMLPscPDqvDnsYBDHJRp6VWnzKEAymKuHRPHs2UJGPVgyTnjdojrDCk8qniADL1bRqpBJ3EbZaM",
  "key8": "wQYpvBLTn7FVq7LStgnTL2ME3zegqJU2TPsv9FiHaAyAiuRxbxDzL8KT16AKbrqnaRfjZ8mrRHPL7jBH1nxTcBh",
  "key9": "nfiPHdo8ZYYNhhhVkF3NvgTWPhTPSHD4BkbUzFZzHHNsdthUT1KeCfWD5KYun7mdJ24GxvQUDjUTvmSsGDXZTBR",
  "key10": "2g63RaKUqMWehBxWWebFcnwFP5YGWyaW2YfQFRvuYgQZHuA3SennRWXuY6LiGN9WDJF6VeDD5SMKVCaLm8MTgNt2",
  "key11": "rcGg8oMKFZBidyxQ7cHAso3Nh9aczZjmpfbvCTjzMSi53wJCXPgP8gHqduXRxDez6iCfq3KHCwR7x6bPuxwq5kH",
  "key12": "2TaQm43uHML4dAv6kuJYJS7HJYv3T7DmWxZJpTKFMaUcvJBePeHaEUgRUn8kkkEFu1ZeqnfRkGYjbY7dV8meP7UR",
  "key13": "3yB64H19BEiTX2Wdfwq64npzjg6M9nmiiZVoauCcWtWsEXfW3q6gyXcaHFWkaPQ2HK5N4V1FNWVrQvTPXjsEPCGr",
  "key14": "2ZKmacCZBkzQhw7ZcBr6iXH3AwjfxPdL1zMfShzFMcysUmGzLGMJ3oBSEbCj92Wt8TViAkCmyaPErosdfQffbru8",
  "key15": "2yMsLX5o2eeSuoYQRYg1QpzUZ1k6ruYgEGudrDBT8Er7XL9KsgPe7mK1rgAPp9dEtBfxaBRFyMjATe4jZ3hTbdZt",
  "key16": "5zbtgdEW89E9A6DSME69L6hddxACBsTzbrt7w3FVoGTCz1syM7qX8QaJwy1bdvzUGWgz9BAKVg4GEqoz95izvUXW",
  "key17": "5x9fiaY5v6hmWrvqFKH4gCCfGBUbRazpLVc1dwhZXw2P2pT6RgdJEMT1ZYofh9ezHeLyZDNhC4gSrKvu2yhjyCk4",
  "key18": "4PuVF5hLqkE5X2Tvw2YeiGYja3kRp4ffsdJRKEHFD4k9JSmqQLM9R77Vvccp5e7QssZrDK1rgXSDbxa7ewiX2psp",
  "key19": "5VDQX3CTy6FnpEsWfj2NZZqJ243H5LY86pQjXWMahfTmbLppBKCkZxc5jwFiRpKrr9XnKkPxsfZpR5gXugcQDj9K",
  "key20": "4qqZo4YoNQEwPJDUiR9DHQEQdVwZziiCGozMKuFB3sdinKEyTq6Ljx2e8igN7jeHwRo9CePkTZx8MUAmMbjbrUAK",
  "key21": "4jzre2qQVECLrnZjJSoMaef7F2NY9kTWgyKUEh9F4u84fUWJUZa88YVpgzqoLJyNk215zTJpEU9Uxq9xJ4kU6fDR",
  "key22": "2khRHpLvU7ntPiJK78DXLcWa1LeitGAr9B4XocyzBMXm6YfCHkN9agJmSTAnGLSxbViHnF5MzbRmH3Bugc7ACvqj",
  "key23": "46p91x5c9JSZCe5VGwUctqEBZZGkw7rQbG9XmWLvnz8xRxv3ESbkWKydxaT281wprLpHsXhy56MAwFkxp1JYYpVx",
  "key24": "5xJ5aXZkdXGJw8Auo7CtoARYBsQXWqpMcL8rnDMd5aTiLJnoCDW2qs6o2XBTtE7rvEbzTwPRAGTgGVStSw37G8n7",
  "key25": "5s96uW92A8XfTAtWN8KFZPyY9Ud8JpVBAz8iu8Zk5pYPSsDvgLeCHRqGJS35h5fEBbnnUen7uemSUG4D8525iFeB",
  "key26": "2yYY8ab86iFNtnkj3GgjeQfS4VR7Y1tUKBUNDLQRJzBPpSQpNCQekSG5iyawKN2o6x7nTX6w36LpdLvebiSVmKjw",
  "key27": "ZHWwfbPwzJhiDViBYttEYi4ggMeYJdx9qbRVB7PMWpK3H3vo5q2mJgXsTpVB28rQmUQKQ1hRbHT7HXqweMCjMjW",
  "key28": "JYkxoQ54REUKLNKj4GMaD6MsaVpKUeJCbbE5ktF6JkM9XU4zjWRB3rxNAvRyhGG8v6319tA326NWFt6T7NmsbYY",
  "key29": "4pWNxACnbaiB6aAPC7QydgL7USGfxsLhMvYTSJ7MMSn3Nm866uHyhCLvsQ872Eydc5AGKT1goZa7bjzqWRCeHKJc",
  "key30": "5VEebaAjL7tHa9bv33VKM1ZfdajXwtuMEcbHa7YF15fHHeQiHRfF669zPgosMdpxGTk9PrqRgkb1PMTpfAF7fYD1",
  "key31": "49sKMDECiBWkwz8WxfFd95siiwJJMqG4QVxpDCcJrsa6M3eX3FYcTQ14NE4f5jL3NxgqqpmTZbhm3nS6yPVAjf5W",
  "key32": "iEiAh3yE7QUmMWAGTWh5LAAKTrzzwXKoEGDJfwrYHmrMBjq9FAnhxpVjLZjpyUdaX5UQnvmPgwUQaEia76i6Qmk",
  "key33": "5Dq9Z3NrmbAoLhDfvdRLDhrQPMtNvCPP1F4Fu8VqCQFU16DwpTBxyTD92RXaQEijDGqSi5VGLczwgJDYSXyvo7aj",
  "key34": "36poT5ZxtXdD87gSjk1JJR3K4AaYMUc2R1Pcf3UMrtFGTA1Ymgw2b84UGyRbGwLP1f6sFqcNdEyywz94YqourjBQ"
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
