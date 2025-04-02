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
    "2MVoFR2JzgGRHpano8F9Dn8sE5PqSZQWHoyR1Ra1S6TLYq2ooHGrZDMaNwFhRMkyUkGVWknz9zjQLMg5x4omAFTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65aE8iATbojhUF1Ac7EMUL2yqtRViMc6ydeXH3xChQAFHgm9869QaA7sqfKHhZMuXAokQNRhhTWkipfJFRsQtXn2",
  "key1": "E1QLpXasVymc6afXE68U9mcxWMdugcD1k2MscorhnCpdvryMXf6dS3RUHYAUu8xTGfGpDemdxASiFGzi13HHVFw",
  "key2": "3xo4yCWXuyCWfCX8NF5AfiQpD65dSS8Zh57uQKohKS5SCD2TEHwrDKy7B8ay833jWRpsySQTHC51x2mNgwn9YqP6",
  "key3": "4grBcmK6Ls189zzzpcvqvBsQR8kNNCBuvpg4ux5UX2sugcJdQPjPWkNz4BKyEo847gXf9RmKPjMw2KNbmbSEJKFt",
  "key4": "4KUfEvtkbtswULyEKf17X1nvmXqPJeMXfPgak1QHd3FhtvsDKaz3gzcVSTamGWqyanarGPjhYWn74mbvKn7icf9n",
  "key5": "3Q7XH94p59JZT6KCt1qRqQzxhu8dfdTs1ZhT77E6LBw1Hp7KTpMnmh6on7nRJzCWPymafpAE4Yf9Khvup3jNKeD3",
  "key6": "yxXUqFKJN5684rhRQ7YSkhNyrokLbVbb2ZUAxWhmTXQS7FF8Uegid53zoZUnoBr3y5RDvdHFpX8y5rbnxemsEzX",
  "key7": "4BHCD9gq7mDUegHwi72qQ4yAePVTRNuygMLR8RQ5TG1wyaQ39qqPAWfN3ETsnT9wGQM3nmg3i1Hm6Xk9SnpCyVFv",
  "key8": "5ryKaBXt42ZmjYEi7uXJ1TyWtpXvnp5NYPZcDRx3foy1GDHZBt5aURNwCUoqodemXDoNFpHe4RTsHpBsKhXkGpM9",
  "key9": "3dCJeCdNmdujYQ1m7atACLnpPZop7wiZxBg4dk7CWEL61ud4sMpB8jkDJue7VAvQRgnL1vpZzZfgwErHLN3cpmsH",
  "key10": "67ASWT3xhJ6vc6NiK6aW9ZhgMiw13GupGNRyb8q6ZTVnCrcrGnHrJMeDRhMkZ5ZdY6pmv5gy5DoNhmr6sDg33CN4",
  "key11": "5oD3TGTEQnaniXZpTbG5C1FvxBFWVKxi88BAepGZddvnCrvk4Wy72kTeTmWa6oEHQSdxvrzCHDCusQ6kCGQxN6kF",
  "key12": "2pVLB43DAsJjVS3A4TeR6ZVaehJ6uLWurWM9nvrtqVMgJrGRPTM2k37PTp4b7TWMY98bQ2ozFPhXHD3RbBzn7DcT",
  "key13": "zPaGpKajFAF3ntk1DT16HTCMfGwE1FPsZ8epzDZMADBdE5pFHhN97J7FsrxieVV2b3yYtZoX3Pm9F4Ehv9U1FxC",
  "key14": "4UqJcMxWerNj2Ymf9NjySyLPWuSiphMvFe2c4bi1XkKELVKpNo4CqKTddYrnNhypPKhMjgbUgiDBpqzvPr4N5s22",
  "key15": "541B9w1wRaRnUCswNQb9F6rVXEtEpeUF6FXQY6iNXRYyYvS47pKK47DEmNLwRvwDzPMqsupZ46HmFELExrCGjV6L",
  "key16": "5HGzgeejXRbhVaDya1yCnARvi1GdBWbM2yTPPHMgsExVWyGoENm7k34CZ71NuWedTGx8iT7bWcnQZYFKzCa43GoH",
  "key17": "5ePQAS56ti6b9QSgZw9Pxt2jo8xgtkHoQQvL8r2JQTzoCZXBPEte7Phe53B3aN7HSijVaT7YFZXcnHnjFF2TBC7g",
  "key18": "wyw7i8eCTXVKf4HVnoGbd8XDMcw5UiHFUmaW7dg5ooM84Fpxg7AcY1STVog8gZ2WvThJ9wwYQgQwndesWA5Nwzt",
  "key19": "GyB6dFYRW9s8TmXJWjHULT4HorwQNYM2WVwfozeMVP5q9BftSc1HaozR4qBoVZBAmeFUeNiza97yTjuFH9mwMZN",
  "key20": "3bksUAtNVZ2gZ5hhkmi6HyhovdgMMEcnHw1YSc5WYFMYNNTUf2sU7NPk6DCNoDG2Pf8J1TEvkwt3SCr9QrYnKex7",
  "key21": "ME1DcXW1dZ9kbgZVwXnihnAA7AapcHN1Msjz3gRDjrmri2rfx5SVcgDAjyb8ecLik3GpRrUdCN85oat5znaRNAK",
  "key22": "2BWjey2a9PfraVGLrZrkCmAEUnjeTmiLj9U2Qjb9ZviJdYA49KKWSSWDMXWuqCqVyeGMmuoj4TPEaythFDCECxYk",
  "key23": "62uwDFcyi9xrYKaVLdzaEv4PHNDvXnD6qvxgpUtMUdjaFUSNHWvGwobHYJaZGuytm12osEat3ALQAWQezEMf85FW",
  "key24": "3mEufUvvVRNCds98wPs8nw93y7CazWxd3njcXVAS5koZ693K5EhUfSiWdv9JiYogYpi2NeRcJgxQxJjaR6T7CokT",
  "key25": "66d5yThwwNVU97EmBg4yWbwwrBZt4NpW1vjwDWnbHXE8bo7EPiA75MsFQVeP3fMtHUnvCB79qfbjWHpHqQg5uhsT",
  "key26": "4cANYVPsfXocziYj3W7ZVEyDUKCQ2AEJDdQuhwGEirTAWKoehkV3jSvy3zrH4UF4mA6GsxgUWzUjax35ea6c3VZK",
  "key27": "449XYRuzUE62wUL9mAtSYqqmC1miJS9kjGT5UCQqgkS3kgYgjnBH5q1eSEphLHeJszhJvUpLKhnXYRQo6wZiQYBB",
  "key28": "Xs9YEnjDQjfH9HSyLxiCMegoQGZRKvoqFS5bD41iUAq3QscgJGWRKUp4wP64882yrRKQ9LZ9seLjgpQBXWUYTC7",
  "key29": "9YemyBYVc9WZhHCeT87qxX9yHCLTHDnh1nEpEkbCZDC5ss5wmXbiQ6SehcT35poeRgHtSt6a2cJ6LP6JPP1YYPT",
  "key30": "2S95V675NAWLfC1ZsbphHwQ9qd6rSDPVUzfR61sWCV5NMD9Kz352b5JrBoWK5feLjB2HWmvGKsF8EnShfxcqAddX",
  "key31": "63XhY4RVBy65zkX1gfc1E1C3NDNFaFWNMWWxyfpsAQygAiNVNGa2FReqkhox4w3UAXG1VWe7oDyU25UjAi71qPAP",
  "key32": "ckZAMVRchyp2daHroAd1eicpfMg2kwBVk5bfmiCESTUAwyqbkGNa2D4RiNoPqK4XXP6Zj4ixfsGw1CLcyg9uyac",
  "key33": "5imGrqtNtykXqCJGU1aEmUuNVpBRe9TDMvcNHJc5KxJqXkUFeFHsp2dbqVqC4pg7vGE88FUEzgvV697wd9roswpu",
  "key34": "3eLaPPQh6UZAyJXJVwgfXV2BvEMiLdLFZQTRYAGmW5HTTnPABoRtfawpRjTNjKhRTda1j198pG54df4ctYBwrcVq"
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
