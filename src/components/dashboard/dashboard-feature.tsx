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
    "48B7LZuJjxg6HNTf6rZHpB4aofcyNh2Ca9s74jA37YSvHBuvi9ZcgcWRQcFtWRoY7fAgxu5PddtjryeMopEQbrSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aQ7DH5Z7wVdrSLSsRHmkTzgKWndCkB7nic5eexJ5fiTjW6kpGuzaxGhCeo5LEt6ajNPbmcNVeJYLEuRPjaCCxXb",
  "key1": "4kJ9SGcCRi2d1iUTtcRFv9znvxXUEQieisANVUTU4mQ9SZG7uvaLBJw53NYKC17KaVuRDURhbBQ7rcf28dPTEXtz",
  "key2": "2169UCRYWgNDwdvqmF5iov35HijYFJMfVCc9pmv19o92ZMu8v3E7Qj2idXNiU9eB9C17iWySeCnMCW8zvVwze9Z6",
  "key3": "2D9gQUaTLn5okEWV8FsxL69YFrUGH32239E7mExPtCWHgcAHP1UyFSGeoBnn81MKdH47LiEVvPFYmDS8cM9CXGbz",
  "key4": "5pnWwW69prL281SYMrNXop4wxCQrB5RP2TLpUTit5n7AjmZ83td5AM3poTSo3RTD58SzVuKp4mR5TMyoRYgM2UU7",
  "key5": "bErNZ8wwjKzRSZn5y1CKCXQAyuTL8aWmChPeoWPHJfvEX55TkZFnza2p97W3NeiYwK2ZhEqgPZEdL3HBW3mqwG3",
  "key6": "4rj8qMs5obV3HRdeQTboyDgSKirFMHde97QaUaUrZooD51s7CKwvsgacMXJ3Q6EyJ9ekb95qPWCYok4HCRPnNezj",
  "key7": "cu6agNA8jApM8KZ6qTDWFvgeLcjkMGAkr9MY1h4DMAZep4hJv1uzwALQxhLWi7dJphyXd1w68b4HamF4tJqwRiw",
  "key8": "3Rck6EzodLukjve5ixx1Zy5o6Kwb753z19fae3HSoAGLHBN1WS4keRzUdrJcQM1C4YaZqLtiK6vdauBXfkwCkaWN",
  "key9": "5MQYhMBeh3oqZLrLoMjgZenUmpjXZCqpAAoY8istX8xjitUJqBvJx9HY231vLPa4h4yttD1QUTh61QaU2Wo7eGkJ",
  "key10": "3ysA1CCoUPgZJhQ9NgRWA1N92hFZPQinZkDdSKUxGdBW88hKpWjMJWi78Qve5j6Sbxk4yzU7FVSXBdaJGp7FMWFR",
  "key11": "dtityLHCDopKbfevn3VTGeB1eVhya9QxSn35BkNC9buVMhvQAB1wv723V4hVXEjwy7qsoCPPWu4g5WfvhYN6ZUz",
  "key12": "3hpAsNevGQdxCKJ56vT2Seci17YUTSUNERwdXEzVnmAbRqyaPE2Xnk6a1jHQujTivW9s6ZwC9jTBfQE4iRLW54Bx",
  "key13": "2QzeVjWNcLxHAqumKpn8AXGUgZjsA43XVhp18obxS8SNnjfdQow6i5BDMgCQHPkqEZJig3Yic2trU3wekyAvG8B9",
  "key14": "tyC1CJLyEvNW76etiGq2iT2vdd9xMAFDvyugJFmR68tRitDCsipFURpNSWpEKAhYcUoUy79VDBWreKzLPSY6mtw",
  "key15": "4G7SHHTjThjb7AyugHZTVF4GRciiiqdgZa45DP4hTeB5YPXVM3XfnPwaro7dTwp1NZMcvm5J625JMwkX6uGhRZY2",
  "key16": "3onWBNLZZVWP3W9qjjyqLaPLYQ5qXUYMaqxQVPrVCx8tzJghbkrdK56a4dQA9Em6Ti46o2bqWAqMRZTv8xgDrXkJ",
  "key17": "4TgerrsVYDkFaPo78bDrqLbw5h9xiosikXVYoEPqfqaEWzrVg1YdfdPRgMcgj7Kp5bjNMy3vnDjsoCgU3p6AUfxo",
  "key18": "3Vff2jNGWXrK2XKZH9ndyFwHDEsTB4rpLg99b52fQCSosJQ4bDqqw7h7Sszv5qcJHfEWSGejEnXPZatbpPxiMy2U",
  "key19": "4ZJUbfoL7UoeZ2V4TqF69VGoWNoBjDUozkVm4oeLQFfvc4UKtqZkqCaYUtPUYNbLT3jKHFGaCsiUxFLFKrTt8x1E",
  "key20": "2QnSdfor6P8cGhHpbzRCC8L21cdx3kNxvQ8NhDdienEQCipSRpUVkC7fp9heYipjwcs9m8exaxmzABaqHsa8QgBf",
  "key21": "3g4LgR7cdQYXSXRbe4HNsVkD7VGELJoixib4n4A7iKmmJVXUu89L1vDe31Pq6Tbo9AWi5umq1gSF6vcL7jrFqe3W",
  "key22": "36gR5onWW6v7xcFqhRgSLnvdF5afc7VM6bpD9mfMfgSVvwhNqchb1Q9buFLTCBAgGf8UtxzyHR2gGFXpZ4NZEKWi",
  "key23": "5Pa44x9EcvizozayYuNKBSf1BuDvMvpHuFsmENL4WXgq5Rtmxny1jwvDEqWk6DSCtjNuYDertVb4GMsFKReKA24b",
  "key24": "1CFcRncSYkaJLaTBCe5Fjd9Ubf7XBMb4CVjru5c6wuHTxfErhZdjTWeNzdzNmEoM62YzTcRysg1Sp2HFmT5omZi",
  "key25": "4qq5CinDuvaMF3PAcYFbN7fVAKBwdYqaKSrqBJdSxVyvzm2WwPCAs472qa7rtNyBvbLuJaAudEuN93D1yoK4eb9X",
  "key26": "21PV5SmQvPr6PMEUAM4cZLnmsEvnEM8JzBEYCLZymcCTTg1YvVbqMsjxcT6vQRs4d3XJpoDmcCPvcSkhFyw2pGpu",
  "key27": "569g91ZnGzKNSqGELTDyk4NRnqroQtfbdk5jDPnm6tbvLeL46Mn9hxmDpDZUkNtv19ywufSMEt5Jr8qrZtiokFJD",
  "key28": "5TC2QPJcr6tFxFmrX2npSq2J5J7RuqwnWwJFx7DudxWoprNpFm14Pvx6JEVG62LJZyebnnU1ZuWLLpLS69nrYV2h",
  "key29": "4Ri5iBYphBR8kHLMJSsiqrNq6JFzMyEGzfGfoZAfaXgWLFz9fjFX1qqvY2Xx1wtjzepjkbJSQBTJfUsMNK6vKXai",
  "key30": "2A5kzeeV5AEUqVSEKDbNzkqznzA6dHGsvoV67zTV6ERGbw7VoKZC14BVrJVKiTYv35usBtx3NzJt6hWbaZqUkUMs",
  "key31": "3zQ8u19dR1XALQLKckSSCGZSCoXJpj7kwVEGbVWPuVoWjho9aDpRWh9F6i5pVcdosfPbLJqgVKGth2fUeMWBUjeN",
  "key32": "3UFmptXC5K9LAZcca4K3dNmFTQyWwJJ33MV18zyayDKEkRW2oHTASNDfBFqrmgi4Je6BzALwLFnyHSTZLRoBykMi"
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
