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
    "5Y31C7MYVUi8XuSony2FUi9gv6eqS8KTSxeB7JcJNuPY9fPeBZWy6xbNqbJ1bZsJPNDq5u6Vviu2mTRCvK3XSUKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u2sLGKuc2oPfTXm2MngGcBLXWp9A9LrNSeAFHTmYwBoL8FcT3DRKLAgJaP4sVRmo6YwnVPeHC9a2evP65zHGMvq",
  "key1": "3zM5r8EcfUnxnPZCKkjjAkEBu9rVg6JhCdEmEpkJB57MAG1VX6RhETFQS6v57CvyJXV94gxqhYfiEjeV2RLdCreV",
  "key2": "5XStBG9uVmbg7ivZPXya3rWoNuc4jGrVh2jBB8jZSr2E838kcxouaMi1xyCEetAYumSayatDJs2aouZuYrhMjxXJ",
  "key3": "3cyoGC1k7yu8AR7b8GwYqryCGqiyNPu3tBeRHWf5wTkcWYSdtHvU1q5YJpwULDr4pWAja4NF2uRiPhGoWgqhVZEF",
  "key4": "4eAu9UajhesDVkT4GYjs7UE77PSev4CVpTeFizV3egSmKfd3VMdv8X2kYSpWsgRbJoFe4uY19VoRRj7rYJXCzJtZ",
  "key5": "4PkPkvN7hiwXbbFFJWV5NByJfxksadQC9umcGHNA1qhKfPtwEFGkG4BZn8pN27uGRM18vrrTzM6VynHFHTLkV3Q",
  "key6": "2dHArnAnBz3S97N1NJL8TtWLK8QP4SHLTWzjNPRyQLXfKZqT8sV4n2FuhA8kYWqjDh8gz95FkGW8hAmSJyMVQhN2",
  "key7": "KVAnZ7K1vC7j6FNuBZysocveMiBVC9VGRBg3RnPex7FqjYy3ZShocTYadZYKbNmBW9VQYVnCaAgxhZtQbpn4Lfm",
  "key8": "5PctPps2YKekPxfpZ2keNkJ75wshQUuMYEmaxfw2Mt4dpTaeT3RQB3fwibjUHggcPkeFtRerfduVUwtRTcaWUKtP",
  "key9": "3bF7hyKEP7HJsSVPpZrSqEzB7EhBE86wurW7xwuqSfbFm9PvbUN9F2poktUPDbBt5yK2RoPq5eZZcjoCSiGTLW47",
  "key10": "3M4LBppW4XJuSyXUJmZiVDArzMGtvSGuxTQUELM6N4VAer6MkByinUgTP9hXTeekE46uXWEhs7wGkTbQuL2JNoTP",
  "key11": "4MdrWkiuWsd4yAhRhp36sTd957aUQ4rENdraJnE244toGvAFeLNtPRNrwzPQ4vSPvipsmFCeE7uVyQwwqFNE7UYr",
  "key12": "3FgxLsJ2U5aHwXxkbQzLQa46P7hsYGaJz3m2MT93vDD9dZVJbqfSk5sVNuTFKCMTqpo2iKXwCxEdaHSt5yBMNAWy",
  "key13": "27L12wLHcEmtY33dv8Mpn33GZfE8CrPsvkHD19GtnBoQfLiTER3xtFVqR9YJVBAnY1daP6sS51oC5ky5JLbQ8mEa",
  "key14": "4k1ix1AL5xQerndn54A7Y1pVK5c5fwiuKM5Ap398niTPKJQmPj94KdMxrVyW1y6dP2HshgXL5zY4yiPiSNMGihbM",
  "key15": "4QaFdkCQ8bLwobuaNLtpqMez4zZGgU4uiQzNFABSEfvu78PhiqTG5Lgra9EoTEDLzFxFqSCdxF7QPSvPSpnSC5Ls",
  "key16": "5i9TdzYHqPV3q519qUoYyG2ZNT8z7X7Ep9vR5Ggvx5t6hmaQCmYGEJbrxQFeURtkFWHP6vkL3YAKz43WVkKi8jo6",
  "key17": "VfeRSvGyRzdmv5oAzV1tzCX2RuoDmPNiJPaT5LJ4cAJAmiEX2S1iFT8yxrNhd9d9PJugci5p9j4jxpBpSSbawss",
  "key18": "3hBLGJCEtgcZrjDXFiGL8seSwVDCFesQhiMRi7QzGCKr6ZNS2FyxhsDU6uxsz1ULQCN8nUDA92ZeANTWgGYRbRf9",
  "key19": "SxSJLYChBR2rgDVA1PAcZ5fXmnUBEegBy3Pq6Tdiedr59SMBhHWR2rmrJiJgvfQGGCVhJp86NuhdW8V1WFUyGSY",
  "key20": "4rHfu3PYrPFReP1brLs6F2apRE3hGAHfeRiW8vu98C6FeqJ58TDWzuYahhbqnMa7yqtmYVddSgA1QNfPNG6vUtAr",
  "key21": "5jzN9Mja8Q5uyuyMjcv5fU4TD1e6CUeEXLMg6hH2LduGD9FBQBemDpoSSudfpoSsxEj25LMwh7nNbAyi4c1Lrsc4",
  "key22": "3nyexVRbmiGxe3FMNXjdo5TYGpUQ3ykg26tvofe8y73o8VpKFAtL4z7nkMwQNc5maLUtTATiSunxbtMQ7X5JPKAD",
  "key23": "47kUFufMAd7CoQaxxscfuS74uMMsFPZvgim3yvjegX3FsQQhLZM6V4XQysUXGEGnLtXhv94JRy4PS63XdRmJLFNG",
  "key24": "3KHcEurZrukEcLacggrQH75HVKzc1tRBfwBY44GgbssZ43oPi44g6qyFZZPQjt6q7JyhUKyWgEDD9RUxFs1s39cf",
  "key25": "zDjKhVd8Ff4iL4CFk2J5AGpV3TBHoizA5VSgg2Uax95JycjcXVhFZkjujUS7RiCXkpMEB8xY6Aon1btoqE6W2N9",
  "key26": "4BCoPzo1KPespYLKhXa2JpDKcreJRCdSCkTcg6ic5nEuF2uoLyNPaNtKystpaK5xwa39145GnmqMRnRqvzCXFwyk",
  "key27": "56TmA1p43TSkdC1BPmW73wJtazCLnZ3Edt1uCe26XSsBEtaAN1ywvyo8iQRghekeJvFieLjggZamQoYxaB7nedt6",
  "key28": "3hWKsbc7d9TrMDhLEgLiChytJhaqhKSVjFqyL1UzvyK7AiCCGPkydkq1iBM6bXTQUnqJq4jacxdkX3egwN4r9foN",
  "key29": "UqrWXeTbQD2ZNd1TJr3qNpAcqA5PWtoEqMBmMz2HXV9Xhh1jxRS2oRA5yii4PT5aFFfoxjf5qmivU1CPXs7o18R",
  "key30": "3pSHjDmpo8LuCJ9AUN6YxwWTYGHzxMzdMqiQCiWsBWFom65ZSMTmbj79d9t8ZvKYqvH9FBufRC1gZettSekkAE29",
  "key31": "XUpT35dAS2upVFA9BZ7iQZ6fwSRYtw1V7Ut3Tob9N2AMkmXKCvkHr9j19yq4NixESCcb54vbw4Yhcca9ogCGJrb",
  "key32": "386bXTssCi2yZK2s3J2wRyTeJq1xoKU1bagJ4H3BGxwG7F326jQCZWku36Jg8SbZcbzr6uR52AnWBque3wLkYv4C",
  "key33": "2PJj3u9ff96EfMDq3juh6LCKVSpgu2UgMcQ1vHymnBtT3nv3RdgPx2mM7y4uUievaN255hQDcqnGKs6EqhhpJtc7",
  "key34": "Pewo73Kw31vRrgZxZVKxAtho3yaXXHK26wyjbbC4RvuRhtzXCgie5hMd3TiiUkVs9v9efessi8DEb7nT4ugveaT",
  "key35": "GLbbPUutfrHUrS55L6uyJZ6U2nQ4ZQRoQ5bQm196G7mbDtnM8GsB99qhPpyQ6pHDMTmJbnMLmjZ347BQCKdESHF",
  "key36": "2c97SSZa1cX7vhtrdxbrubtM17fLdNXMsJMV88pZZtQFG3yYk6bE4uDBLCqmdPV8FbWanDkGXoh8bpw7HXqjkMYe",
  "key37": "5uY6Ad8gLBaDE5FQaJ87RtfGb6j4gXGcuHzPzqoFU289o7J97D4zqKe7Jf1cS64WL4iBQgk771J9jGnP99NJGyg9"
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
