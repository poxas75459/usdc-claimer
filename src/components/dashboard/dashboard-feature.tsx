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
    "5XkEvtxw3xWkF4V8TVk7hnagyr8wmvjyzr2t9ezUAURZ2LfVFnRSH8cc1qUyjFsa7pJ7A5cvcjPrtnLgjU2mXvJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jZ4CYL5g81a1dCP33KUTEDFT8Z2pQK3s5J2UR2QcngHvW9qJgL7Mo7KgP5ZQwzcEUaxYoAaZyb9Fo6wTUxcjVct",
  "key1": "29QqhfwK8Mq34GZUSqhmNrF667fvQVodYKZTyPwWByhKb1MpYUvtPEp42hXbEd3frfpWmfcpaQQaVeKNpP9iGQQN",
  "key2": "2s1BjZJh86U9HVZZ3zUetDW5H1h54xdVB4vnnbcD5YbxkDTxYsBYCBEGmSoLRQ2ZKkraZ8FZMLmsEVRZmSG1HrMs",
  "key3": "3sXghpUWZ8XCuobgi9MuQiLv9bZDxDcmELMND8uQ8pufnJzFXtesz2G9poE4yJCXZsGR5dftKLjh5pgJYTrcKjCj",
  "key4": "kiWmzkdyPHksUoovLAJureMC9ztE8nrZ4LyHxhWBFD5tHFN1DEh5ALU1VDKZ4t9ABteryfMhPJ4h7ikyQxg68FH",
  "key5": "4xXNHbyr3BvB7j7b1ScWeT8eM6WW4v3CYwmepzxkYn6tau31BMt24WEnjb8DkyjhXg91TJNGFDyJWvA4TB4TirtU",
  "key6": "66jrucejb1Lr62Nnb5wJZ4mcPm3Y8DRJKANw5YvXKhN6H8wuuCqjypTh3nqdBzkX7UM4ocBeuzATuj4aZmnjKETj",
  "key7": "4VqbcDZApjXvTbLXfqRWq69PXaFXEkkk1dfuWVePzXYqmmwC8nWU6HY5vEiJ7xgQJY4pfNdXaa2EAmkKF1yeeKbT",
  "key8": "3PbvZjMQzwxQ9snn3RVbLPmNu5UZjAy4o4MTz4wSMynyw734HiPNiQjr456QvcEDFuDYRotyYd2Z7RFe6g3VzYSH",
  "key9": "4zsbUFRiGmqi1ZtLQH5sxo67snhBv4m66nwrSLwgZKB17evd1SsicdCuueiU8u8wcCpbJjDhFNByzzRXgUZVobSV",
  "key10": "3SjcgacZfZndDBn4P6TrdtRg2N7WhZr5B43XtjyaoYfeLe23tuJn4MuvDhAayZL6qPG6XcApB8KWg1reb361Wogg",
  "key11": "2BamjkbL4bUzyiaUKHHPt3LvHvC9RBf2iVmprYSzef2wCYfKVRh8yPc25NntMmiCHF1JUiF5nzw7NRUbfgcWsffr",
  "key12": "3jiRqUSBZkoyHTgs32LjGdKDnWrqGvbbmUCcQQH4kALz1CRxHpDjDuWcuKnwNQi4uFucKcQLF4iY4seAhpVZHucj",
  "key13": "2NH2VfMuMwYECQDAG454ba8B6D1wsVyzPoU55y5jzhUK2MB9qNiE1BPcPDJ94fWWCcPfZunmvL9jnsL5AEpZhXa2",
  "key14": "2eDc73GQWfT5mgUbo5NaoiEJ8CydF1Az6Je2S2iGHZfooD3gw7sugyaBzhcNia5cy7PmkoU2trMhtCsSejNDLW8g",
  "key15": "5sf7kk4vngmGLUNq9L1VWB6vDuQW5UUKb8AZTERNGcMBoCbydSDCtyXYCGuz72HzRC2RaUxJE4cB4Nct3etBeC9g",
  "key16": "4VgojFKUqoMoJnSRP6SeLWYS2fdHWM4udkyWCtvrAHFgXZvSwWVdWitfrax4T1AtH8wKi66Q417zoyZSUFgwd5X4",
  "key17": "z2RJqVLJb2PfYNxozH6VGwMUiBCFYDc8TjWdLx5EK3xu25ANQBKc7grT5mdn9GnzreN2rRhrK7exMx8K6qwxjzD",
  "key18": "2noX2ZEtsn5DjiXTDPg5Z1y7tsrnKkqR3b8tf8k3okhZn4fLK4ns5XA7NrtDgfG7oNAFAz57eLfhsrAYk6Gr8LhX",
  "key19": "4DDCg4wdq7TxgYjpde1BqDDKFREX4yAmMzt24zpzZrDKgG4EuHvwZEz8aBg5688ibgkvdaVt3n1gV2g1X6RHX6cT",
  "key20": "bxMroDSKkMi1BmkhQZyEW7LSbDqViWksyvwomkgrbgyQ7XPEYjZUQE3ZKYQi7MPorPX5B1JvnJCxoWCPaU2Mmd7",
  "key21": "4q9FMn3qGJUEWqaW4jNeHke9P8Y1HGs46z6bNT3sjrLQWnuv5nXKRWJmvCLqyGgkEJpCkFFFAti3hE3GRNz3M8L1",
  "key22": "ddsieKPTgWu3pN2UThVvJscUEUgNTdJVeSJNdvhfDpQDdgamLiHkmPfScX8AYc5A5y4378U9GZnPDmN7724Zx4n",
  "key23": "3GXL36fg3pqAf6oM1BXVjb5RhiEMpoo9iboKjo9WdBQGaDF13373hf5tEbVgUAL3EjatqeruwpUeDngxir6d5sFD",
  "key24": "ht1FPfMbVoBR9vJmUCDb1fu9UCqJP4GaDMAHMJ1dbCaxHKCi1qzN2dHo5MxVP8YQEhwSqY2kH141wXJdx2hZPF8",
  "key25": "3enHiCCckqjhrPeWAxLiFwMvY3ywZc6EVvBVWkG4yG187aBTqUTG8xHQd8ybjjuW2bRmywSYmRpw1AKGTUR8eRDY",
  "key26": "3NqFxfeeZzWday6qEdxcgbAV1uZfkdx2vnRboBeAagXRQY2MKZacaAiYe4cXdUyc5F7hYU72UBk3o8LzQ6LHVLpY",
  "key27": "3ePu8SkcdTqEjvJc9we5mcqtEGoghqqByXE5kQo2HiP9K7D1KSnKiRBQ4oG6KkY6cMsNiCdvGPLGonZWsC8SUXWA",
  "key28": "5XtC5z8RjasNRm34bBtT55vkg3PkWSRM5LAmeCsvowDFwG1gGRAi7U6GFm8NMq53hhFJweTMrjw4Jga9Up7GZ9X6",
  "key29": "4oavARH81vgmMmd426FbfKWNikTEPqVomESNyNDh5AfHXYgZYRX71E1PtnaxCjKEGbKCye3xZctwmVM8LWS1ShDB",
  "key30": "2hdmMnhHqkQxHFXup97HPv5woxm5NsphDfoQEYtr6CzUJWBTRyQZg4TwZFTDULaKGRyQeWucBF81vtFbDS5Duq3R",
  "key31": "24tYcLg8YRGTxfYS8H9tQV3eg52Cb79AAySLNABW13WiV7s8XyPb6ELtUjenyaZKGHnEeCFF5wNaaau4V4xSomzV",
  "key32": "2fpuAsmFc9mhY7YiJTftShmT9FFdmTmo2btieQt7u91ncaA8wKgTqWcPaJCNcgVok27FTdmE1LNUZLptWNxjfrbR",
  "key33": "23E88TL5g3mfgRafEXAPe9NL1HhK2iydZgxrgdcnsRQT9b2m3QApjHyp9zGqfxtJkmgPNa6mP6a51LN7ZuZ6SgeM",
  "key34": "2PsNk1DX74P4gj5M9NcBT1xg6QctA2gH8sbstASsfgekgoMmA5vVKayZh4uj6stPAk8C15T1tRkuBS3xS6NUTgab",
  "key35": "4sqgNwG1qxoZV8gxFsNSRYZTiW4QtDNhk1jHoLekYyuXw6qgoHbE5WXnbUg33j9MAzZuym6pnVXuDEc12P8mty5e",
  "key36": "2u1cpyagLVPJ7hdiAzFo51L9maN2G6wC7syF1nbtBt8P8RFyvEA3Mn45iXTtpGCjdnMtkvwQDbgp3zcxKSrCBK6",
  "key37": "4GdBeRA4b3tnRb9KTXwWZwodVUJaPnNUpguc6pVTszuaahue61QmH9Mxdc6Wt3AevHW6jqjT7CoX5jfMu8rzj2Aa",
  "key38": "24wJEvSWnFgRdU6XwCiRWF1D4GfC7aQ85osxWXYKCvVJNbQWgPC1DYdxMqx3rkprs3GUVP23dfiQUx8aHofFa6ax",
  "key39": "4cKKhw2rAL2sjtjyizHLrby8oQTHCus7NJAMDGpU1pCHvvYHrC5c6VySaGXzb1CLSHfaCeSy9A4FiTZ8y6FpNaHx",
  "key40": "4veMDNPGpFDyKaaBc69HhJwgpGoQJaFsKfWiF7S1t7CRRNhYf1EEotGg7zbXqqzWdNVbLyLmPWC9sVEsyTK9HaEi",
  "key41": "2fpa33pP83SpYLHFURWb39fnjvQHAefns4W4XqMBkdeWGYvcR11Xy7Rg3cWNhpZ7YmvwFNc6vdpWzZdyywNdENaE",
  "key42": "2D2qEoJeSJ87sak9c61xRhwP18Pu6EtXNA7BcaPPzG3HoueZdCU4rEMeCJ7EmFJaKuKFx9te8isV3JTq6KvVk1oj",
  "key43": "4aBuYiHMmV8hz3byHdGoK2BJHRBj3u6o6XbXc7JsSzeFpyt3ech2NyjVv9WdvQFADhG6VXWoV76YUej9jGZ1STiN",
  "key44": "G8fAocKz433Av7z7B1oAM9fPn8CLvh5GXoradaoXjeijWALXtLDSDHp9doXAoETNAbS9zaQDuwmTXjDSE6fedTU",
  "key45": "5rEZHxzipru5f1iG9DWnZN9sG9FVE6vNkYZ3puRed6h9a2ghS7p5Wi9bvWWZyYTi28FXzxj3vYgCVuDTyfGgTqiA",
  "key46": "xgo1SKFyhHYeqVL468FPAakPrF9W949Vk8VmK6uy9SCw95kZeSQiC5mDyo715eiuHzN4axxpvMV579peo5LjVvV"
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
