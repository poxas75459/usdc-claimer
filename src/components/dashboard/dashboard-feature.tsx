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
    "s9kzeb72Y99NsXfc5TKpKYrRcSaaJDu37No4NGZvJZo8cjM4MQSRhS2EjcPCpCgBXSeCZT4irkNRqmFzorPy4NF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vsrqz1397eBovRXfBqDFEEhgmK1pN29bCutDtVTZYkUgEE7NZrWFkuk8nGtvpYhhZoN7cVMongQbwzPazNDenJL",
  "key1": "4ZLiEdStxFRBDQR27JgxygEehFxbC1GH4qkZmTtTWfBmVFmRtzDHiAwkeHYHas4J8GeqKGaRRoKe7oB38CuZxyPT",
  "key2": "2X2gGKx5WUmgNW6DTnEYBwqqbFuwvjecfTBexhareEbbMC2UmwULVCkVCJBin5NSQuzc8n85ChmUUonWSd5fVZkx",
  "key3": "5JeXP6vcyMhJKLWTM3iQ3DQZ4uuscwbHcm3hcmPwKKrfwnk5xj3Tn26PxgrhoyQD68UNJpipZehr86H3pxmVMxFj",
  "key4": "554v69TbhGaWUL9oK7nv38kL37jX6tL2BYmW2f3SLVrafNYmi81V6Fg4gJLPmXL9mRyqJDJwLqgxS6vxsFQ9m7hR",
  "key5": "2Mn71J59qhztSELa5vTUCy8gPYS4ujWpMSvLqBT1pU44GiJx9zYpy97yS4TasEWopi9E4Fkrf9b11MkzJvffsD5H",
  "key6": "CzhCg3dRqtQnD8U7o6BPQzz6mPbT3HwDxFGPNL9ft4xw66QokLKT71xxxEk38HJ6WxvNbE6RWadWx8CFjfsWhL8",
  "key7": "3KiQZzpuREK3C7SNbXosPMVy1TGzEQESJGbcL9JkTGRmGU9bH7nxKqZeq4EpmdNJaeL1EBAq89egEQ29MCkDytq6",
  "key8": "3fTsWoyrMc8M22KYgn475pM31t6NoJw8pnRYzRuZBZVvopveCQBKSgCQ959boW2weytgandcT9GzR87VCHLdPpGX",
  "key9": "65VefjX6ZXt3TPiJcbzwKChBY4Zn5RVkL8S1gUR6KxPbeaaEA4vkqJKSZ76uedGGzYs1x2kxAxifD7nxM1Vkc4A6",
  "key10": "UvM73JHpMcat5B2qcqVAw5Yu5KUGgZgWrSWoE9nbmJFpUwYHkai6djFzvTu7j8qnSFuNbojBPsVR1t6KzAG6e39",
  "key11": "3bdaVD9aQfc8ZCTNAzNTAjNJubM5HUWgTtXUVVgMh2u7n7Q1v6TADcPtgJwwdiPqPsRchUKDrp3DZYDSukySWw94",
  "key12": "2pdtWcQdfPGRCwcDkxvLZShisf7GriN58oZgmw4NFfVY2GJMisg2AUDNDxrLCcgDay37nGcsBvR4j7h49VebHz6Y",
  "key13": "36T93SYYQ4vSaLiy5xS5nBGmA2N6jdvV6uMLRm1U6k7diECV6eciBissnHaaqgXhSdahsAvaXxn41YataT9FG7TZ",
  "key14": "4ZuK1wrWTWEyLm85YtZPuotHYdkGNdmdmvuWadoCGPTzPyH7XpVW9HnHpaDXzZJeMeSBKYkqEHK7z7wgxive5L9g",
  "key15": "4QpN8Au6cfYiR95qZ5FaTEzPTcoMkSCy1kTwEJcBfU4UW1NKDfvyKSy3DRjy9UrgM1hQgx1tWxyEJJJW5HdyXUHx",
  "key16": "FUCYpXLq22QAqA8oxr3AamCLYfhfTYkWSZu8jEXNTwPjv2FBvk2dr9YDZC6VBVowpKaPCp4pypoy8NWj79CW5pr",
  "key17": "476nNYZYTUSEdt7rko6Jm7otBVxgSvsY6EsG6cJER9Vhb4bWMLrwS6qpha3YGMnKWBzAt4u8xFi5HKWK5tyPMHLg",
  "key18": "371Q2Mn5XRrP8cn7L266EdPMBTYQdqZVwkb26FUDvy2cRiP55VMWzH2TdzgsiNx3Dnq1dARTSCmEUbJnZrzdcP8M",
  "key19": "q7XJTrt9REW6Q76yyRVdtQeehgn4bspvb6n4yWsRcg6BEuWz2VkUz1cWCJUcxpVDQ7JextLaQkGgCW3M6A5DKYF",
  "key20": "2gV6K5hL8PP9MdZ3RxGaNYLCKCXuCNXWLKZzKoabxQMAdafJhXMg6ztaD3duLihnMCQAfg19Sos6BfXx38YJ7eti",
  "key21": "2PQx5ZJyY4XdWAx6A5M3ZbWZvuMUZC38nLMdjRYYtMJXrPYvv48yFw4pL4ktMahKFKddwa33D3b5VSRGSFXciffh",
  "key22": "5SbFDvHuSvpLPakyfSMWpLcGZgukDYC3CtHHZZigS2aJ3XVddhYys2qanNLCcb1RXyaDR4X3J8rVEaM2p6rUHhf9",
  "key23": "4VgMHzVN4uJbRpfAtR6ajCKGJWcagybgfncDt6KyD6SEnLn7bRmvPKQSg7e3ktojE3WNKFBYX7mm49w1L4tUVhka",
  "key24": "3kSakJpLmydkA4HKezKSx7k4aE9hrhTUTVvKiGxnp9JDMoD27tdZJweV5TT4jC35SS9rYorVigB7actBZK784Gox",
  "key25": "4C5qCSsakc7bF4ZmWytQouZSXtT6zrwk4hSW6NfoMrT2EmBFVC8PrnNNFuF2UUiBAuj8gZ12YE8nVZzicX6jm5wv",
  "key26": "39jdVnbUhrm16pBRbLY4JepdQmbhhA8SJUSGWTWBL5tTwsrKDB4TKAd2WGDetxvsHjujJqaZxSBuGz6Etq7VSQyS",
  "key27": "3zLabKre8MdYt5W8fFH6H6dXJy2gW2PW9jpnJ4624Ju7w6EAkZqBWwCHeB4X7qGKsYZyth8539aB95NvwR9L5buj",
  "key28": "5BDka9rn4GT6WigPPLccfRoHFkqvBSBaJv8H73RBZCePQhAwAfyfeibBthHi8LYE9vgWE1UfTLj3qWBPHtP5Ak1i",
  "key29": "389gRow7J6WqsyhRkYEVTEoqRkYne3EugX461Vh7y8rKAnESw4ZmzNKoMMKiau71MRqNoHFnbh5VmkqtSa3oAPj2",
  "key30": "4DEbSqjcvJN7WhzGtU8wBe16DfgFycBucE5tVPXQ5uXHCwW5T6EuDaGVNensSxz3kbedeV7jwryPkr2kTEAnHhwA",
  "key31": "oEj4pVv16R6iVMZY9UxDC3mpkor8qvA46TsgcuM1XBFApmshHd44N3UFahFEtmVwiznUmiScKM28srvvAgTsJQf",
  "key32": "GaNvYbkpnT5vzz44VsMSCSc6zs3fowijkiZMmf6ahBJsyA3BK1utTcV7ZbP8vmk7ARWJH6EcHYL2pnvJKf4jrvG",
  "key33": "5L6wiwMUkwBiasCSTjbkoMgR4hYBn3Dq4nauc4QvEGZpVsSuCXnrekmixpMNvNn9RDZwcdPT5trnr9ieme9P6657",
  "key34": "2xEKSu866X2FdJ4YZhQkLmSTkuCXqCFv5X8rvtRx4WXhskPZz7FG5Tp95xWQTXEqqvUi6MCxMSeMZGnQd1FTKPjY",
  "key35": "2ncKX36denvVMaxSuTUc1bpGZbeMhcJXs8YsW9MsmNvVbHjmEU3vSay1Hbr5syD1Dnyj5rTYKZnSWgAoRSJcyPvV",
  "key36": "4f7pb1bybjXihHpwADedx5egYYSwjBF7nqGzASaZbrtr2LBoGDZoqgX5ECFKaZtaUzpHkk6gw4vnP7PsJLGPYcUE",
  "key37": "41HLDPDNPpGgMbavzRTRXNoHHeS2ekyXEY9e1Qk6dDaLMbxsDtytqHQ7EVtNYhG4Ayg5qYoZtJrCAKzdYRZMDTs3",
  "key38": "4A9rJePUdtLW6u4cA9xdzm6ew7MCDmgeWkN6TWTejuvZf8GeFWW5Qosmj9UgMJhF65aMdE5KEXmcYZ9EenCof7d9",
  "key39": "5zyQNfqN8qoLxC2WNm71MtaUE4uzNdaWioztrUB4h7AGYpbiMWcHHwFy7Gc9WLzvP9ke7XsqPcdeYFZdEsuUf2sQ",
  "key40": "4qMwqGXbVut85oiBSnFJaYrEm4yTdWTSoaTi4Cmmx6mnUqD4Sdwu12ZYx66nssqhYQgdGE41i3YHWkeRB7vm45E3"
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
