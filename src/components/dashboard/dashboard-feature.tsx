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
    "2pUdW74M9ViQm71BFcvE9Eqb5iZpts2DnCifndyDLP8iTBUMXUAphimQYDagCFbyZhZ93eWrW9dFuUtxASq2K6um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HuUSNPTspBBZoDwF2D7SSyCTgL3z9or1ELEQfkDRP7LeUCT2BkAwcqcW7nydvCBUyjfnd5VimN7J2CqHAxrhkkv",
  "key1": "4LjKNStM4PwUBcGM2Dc6ok3kcvSVMM7SWkhyqDysS23u6Et4Ye9MiAUGW4czWRp3VQTYnmM79eAeJ9K3XKzGxXW9",
  "key2": "4GeZjgEUEVXC1WS3TrhgR8aMLi6nY9of3s2nJsVZ9tgsW42gsLGDjyRSzHBFRQWSseNqCysxDe31ZJbHUPjhmt6e",
  "key3": "rLFdsGjVH5xVTkMifibqg8brdZwfLxdwVadVY9x8xWxn58Lqu6oj4P7U1iUHCFMkZnta3eqMhAtTPwa65ULDG39",
  "key4": "5PkA9Sd8Tyn1S4AFMbmhsxjovZhyDMyxSFCw5FB21ZeEMJZDJJSUUugCTB7hxXREWia5hNLWxPZZHsqu9UWQqmUB",
  "key5": "4hFr2YUgvn9ykYV4Kp888iT1b6zyWRihQCTapYBhj2YLYuz8xfi31h9N4LYnbejWd7JyeetXybyHyZnLqqg88BoW",
  "key6": "4jUPSBzxz5WwYQJsQNkXeFURRqiGXUsndPkna1a3Xyz4vvmPUZKaTrqfEZzpf8gCpx51QydLVLm3r2XMFGuq5bsM",
  "key7": "21X4pDmEjYaeZjcJG8omuiQxpzn5i7DPcytYJ8VtZw2dx7f1JHqhvsuYf21NRR9Ge7qt7Fes6kieErcKFTng4Edg",
  "key8": "4cTAKZcQPocViUSvaq7YCUqANqRsDpb3hnx2htQHN5SxGTT9LY3vCg68M5KtbuRkXUzT21Hxa5GSPXCNB2SNVjJn",
  "key9": "397xz8SUVm1HV9juMdeEBP5anayjoontFUXyU9VGwuX4kA7D29MnpBnqVUdBHoo3MJ6NhtiJatcaYUjkJVWrBrws",
  "key10": "38LfmfsKHG26ttAf7GiPFLBmgjxwREZ76YLutc12yh1MWi1qJSG7jPF8frPvpWn4QjTxsVhnhpiPDMcVVs2QoVQz",
  "key11": "3W8XqhMgyVi4r4Qo6YtaW3x6ttEZS4V23dU7AoW2Bpa5SePGqUkAGPY2cACoPHtpRJzweaPyShVAzTQd6eg693ck",
  "key12": "2hcqPCLuBsrAt5CmHAerwuzJmwfMGrxNu1CmqiRDq7sfqR7GKEUNAaQaEYqdChcNcfvipYQgygF6NA6QxHCsPnjX",
  "key13": "5Py3wGxDHiCp7LNEdyVJbg7r9k7oyjMjDY94djpiQqEhw8HqdETbhtetsCJc1yFSGPsANa83syGkCDrUxocPJvyL",
  "key14": "Z7oWsXaGXFNTJ3RWLFEpgnLhRcbqiMm8T1VRq4YfnuRhgPgDgvD5o83DY3ksAiPrQhqRyciR8SiXfvYAGxTjJcF",
  "key15": "4PLWYq5mMrKihwkXB1RVEoXnPHqpJMPkALBHkP4qF3zuhfrM6euP53DRSRFLn7HFtRepJ9zx5GbsMhBv7yof8QfJ",
  "key16": "5cqzjHCUJsu1RXFnirouSrmWR8j2nmag7Sj2d2hZuRjBzoVdrovVPGuUfMkbBzo6qHgC22B1SirgHV63PakNqk6e",
  "key17": "2wAczgbai9ryyYh87WQi1kfafxVYRvcy5ZkWe2qQzkjVnLBNAFBvEvMwXBEMJ3J1mUEiKD6vDoodNhkFy2uUAtnn",
  "key18": "ADze6Mktu4kSAxygbAsetd5EzUHGeSJi2N3QPPN1UcTgFuzMzERx7sHJ3dtNDX8FXr7BUUcwCcJLxiz1bAdM39a",
  "key19": "2r57PPB4xxvsyj5pP2KdHTZkR4rk6YAKFus7AFDq7zqP6ggo3A8vYHvYVpSJ5qzQEq1E1GYp6fDbX5iMWeMBST5S",
  "key20": "3bVHRbG6jb3ewjG85rJZTvZu71FXFAEdUc9DMDkWs4VXbUYfrfUzUc4E7NpMSgoGAdcaXVK9bn6hn8u2nZCXdDqd",
  "key21": "41zQ5GUbyihfvnQDFRzCX8gz5B5PRhy4NPi26UQSxj1tCttMVeU7E9gkdcS7SyrzCZXu3xqMNhU9Fj2AwvCzZTwV",
  "key22": "5soS7RqhZmPNeoDzCRQYoYGnU37bJLfQEuYrWqkjVu2z5EZCPkUWWHfjm3cyD3vLfh7XYjsYJk655PhNy2qmkrWC",
  "key23": "gdU19e3hsKfW9acK7akGRg2eGtZysf5FZGr9s8TmY2yz3DEauwCdNusS9o3cEcz69g1bueLjViQDbpofGLf36J5",
  "key24": "CysKW5j4M2E6KrdupwyspRuHSgNbzLXytyDpob7zv6d9hVXfRrGZ8AhK1TTXeekTqNTz2vkRUjfTMEtMcfTrdnz",
  "key25": "31BsdfcLPrxPG7rGSAeZUrfDcujpdKyj72YLdfhtAxhQAoj6qPQi5yzxj9zx4X8XdSPQW6Ae9UZH7ZbuL8ge24vs",
  "key26": "RazRzPoafbWa7G6CBH1zWU844ajx5gnfrwN6JZuCcDzoycokyPNVGJzCnDv1oB2WmHEBXoBaPahVzQPCaJcub8o",
  "key27": "6dQgD6MhcT7WjtUsnRkCBYEsKTydrBazbVeqHsR6mhxv7Y3F1MUGKRacH8UAXaUR2icPV7MDgCnfJvHmmGf5BXH",
  "key28": "34AZ8wiDqzo6te7St1KLQAhuh1Y1f7DZAj7k3v1KQJ4GL2YsaJFXmi8e2tVggHbXrzcioVRbkRFiJp1GDCSRGsx3",
  "key29": "32teoADcXME9fPSNHf2zfanamV2ftUMiQrvnGvoHXN5S9rWddGKDfdTzjrX8AZd7hEGP3NGi11q9gZ9KuFKD7uRv",
  "key30": "2GR4D92jFBk6GQgEdGGjRGui3xA8J7VPLAfUSScqzwuWAvLshYwUmQ6mJt6vj5JMH5Fxaytr3HQpBbZmHWVzVBTo",
  "key31": "3atoh8o4WVfbsXcwsq554o9wJRxx8P1nSt8nCFaKkWu2BaxQrR2Ykyi2PvUCWKN7QrGsiss9wjRALr2XpyZLg2PN",
  "key32": "4k38U72eEVbdQA8zMYAL92mq4jw1XTmu9bt9WpERgpScHhVFfNHHnYJCaCxPeQr7TU8yRCMb8w7Zwuuc8mFtzLgQ",
  "key33": "4Wtdia9dvCvWdWUk6rccrVfPpGPsuBFoW82mnvQmoDSxQkW6EHYGQ25sQedabre1ewJfWJpBQqz1kWpRMztfCu5U",
  "key34": "3WzNZ4gDQeDBRHiwdt5rr5STCXhJkJfZTg2SrZS5tBM8zRdqhcZtEwc4UEqhu7TbstEwBjhJBJfs52XzChKfVayR",
  "key35": "4a9gRxRDwU5accqNUhwD45e3Q1JEZKR2sBHhurtTqAQwnCfQbXQuRgGL77drnaWaZ3oxvp3uo5Jc5bj1dStCruTE",
  "key36": "4i7SZ94zVNZbFw45LQRDofBZC1XAAmiS4dRkjqpU2LAqFL9CAzV8765UCaDm3dY1vCn6sByLA1CerfMDNiFUDbKo",
  "key37": "3ndramT9yiJgCgvYeqYgofJjWC6oGZQK6Ji2XhrDMGuBGJ444dsyeyAhPBK1838DTX9HqvMmouxaZKSf9W1prFwm",
  "key38": "617HJghM8aYDR2AEis58hXVNz4ViBJaWW7qnaRnTTC42j24BTfjEiC3vSGGKmypQeiW1XMfMW7hV38dbtaYkKXSX",
  "key39": "36Q4X9unxtbK2M3bMeXouY8ay77bAaofG9TXGbv9U2jhFUKttnsuuPBihx1U2aSSgw3B4kNv9AfU9NdtJyMbNqGC",
  "key40": "4uNAVWm61SNMGWZu7vw3x2TFiHneRbmqaUx8aoxLgsCfD4vC8xCPnqjUSQBJjdpJguBLKpvKNUXbVNAJTXQAFCXS",
  "key41": "4k48WcSVxyUaGT43eZu8dNtrXzDscLAtbf4mA9XRs3Wbg5Aipj4vBJ7TwRuknYmzCuKX8dMhpEYEZfwQVX77Me1j"
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
