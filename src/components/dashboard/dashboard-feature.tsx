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
    "4VwdUr1PqLMJgXfcXS7kbb38vSpHfMGDrGskcnNti5jCkG4ngGCdQDE3mV7TecDDHfrRaqjyBrfPfp1jsVoFkehr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7tcC8dFXXFqU2b6pEyjdcqJi92i32bqxCCGyQbEos2uVPTgxzPAzrNHUm5u1AYcepbvMhD663NT15fwgCvVwrsJ",
  "key1": "BdDUJteDi1ED2NyjxLG9KsV9nXHKGwZhC7vDRpfCZCbK3zwDACQWqnBJWy2yTCU8bGU5szXdSVSVqxFtmZ3RWH1",
  "key2": "38k6Pj1LA69JwEEd3JbsMCczbWZmrPMneRqW52YQc8vk4DXvUtpwbiBZMDdimsT1HhwfGPbcdaoBAzwSndzfMbrH",
  "key3": "5BJL2QNPispNpp31w3cKX2VofGQReG8FEiXJp16ynTFogiKhUZJF5L2rGBJdXEJtJH1G2DLi6JkyBakZeNHEWszT",
  "key4": "3hgvCmv1rChRNvkDpQKPXyFGoakmPMoSy2CMPdMoDSKxz2dArxAe3p6vYL7xYjEJtt74FC6JEYrGVMHHMeuZy39v",
  "key5": "4ShXd4pohP3G6Ab1zwk5oHhfUhMd35xS7iBWjQ1L5L3kiHdvs6Wm5WvQJhDsFMYo63PVuBegg38j28QHfq8EW8tb",
  "key6": "2huKecuEbQAdJSjQFAMAMUyJW9tx5xZMLXFZCZDNk4WNTCjp9P3jQNNfo5JRo5doZ1yMoqc3HJucMDqkhpwi3mnT",
  "key7": "4BPZTryoTALb1CMjqbykS93fmsX9Q46pCErCee8dj1brw71bai1FRp56indekJaUfmZVskYb1j8k5PokXoM6DnME",
  "key8": "2EMoLA37ehheEVainw43xmMKprb47yt6J6zqty4oCjspAWqyZGPZikmLHJ8GnYSH85et8NHEXNJt3nCexARTMo7E",
  "key9": "4MrCJxyNGroWMsfkC3vw3xcPs3GjYErSLcFYq65e5NzJvmoKw9Je5VVrRs8B9tMC7CSywt5a4tEAgiyB7A9eyo4J",
  "key10": "2Vv947ZLWTUqeSpgEFMtLhjvVX2FmW44X6x7T5q9fupPJhzgnwwuwZ4zzqQZDehjxA71hLWxvqRfyJtvb8AkBDj8",
  "key11": "5PPD4uDaf3GiMj1yXp3r7JJBFd8VYZismdEr3McAHT3y1bnap8ftAqcNtj4jfGDSJ6oaRk8hYooTSC7psdxCBq8j",
  "key12": "2vsGdZDWVeGRuSYLTJg5FdSzoZFhMHTzgBYLWV7X8t646woWEF24jmpM85zPacfFgFuGeeG5k9ZbK6tRbwxBmQgw",
  "key13": "3FkAMZusT5vm94LCCKsnJZ5uFVJrycdAr2MzkZKw91j5zHRE6rfvsh55LcutWQHjcCL7ve5TUjsaEKFcADFKqBEs",
  "key14": "Xy2WbzdW54gi7o232i3dUJota6Qwzmr7bQhb1Y6C2DrAC317cVgDyGgTmbgERAQim2KJxQqtTF6Butrt4Q1XFL7",
  "key15": "4TczpeFMjU13ykvF7EuNAEVETJ9aFDWwVWKLaMXce3ykXkC92VviNoeCk3RAZsTYhqWxvUY56E8nBEVqBbFp1JzJ",
  "key16": "mUkoL3tJQFRpN9qYfaUKYYoRSNPYRv2sWwwUPaR86ksxToSaHLbKVgLkKByQResCdC1jPX6wsog5KHvAf8rn56d",
  "key17": "3a5iW59bFaBSntRwqQLNt6DraAoAtXRuisg6YozP1aFsDsyuerdnfCn6uoHLtvptT8K2SVUAZVTK5G94PeeQQYAg",
  "key18": "673Q2uGTgbft64wBa6uuySKqDSXaT5imFZm14XhNRGX3axuAgVeRCmwwNDFgxwWeGEWLmSy6Prn4vMP7zSTHw26S",
  "key19": "2MKwUYwRRbZ5JKeTLf6YJTTZ4SMbqANQaYfXNDPzPtouuAWZXoMgfW8Go4nQrtHZxq6h7Gt7wfKHUZyfYS2P7kSJ",
  "key20": "5Rb7k1TNJ3oWz65tsDo2YbMizRXsRPUbfGhx2WQq62tNmPEqLyLtTJdULRbDxHXKmoY6dJZbAERvN7QCdZHdHiyJ",
  "key21": "2etkUxG2upKZMfBBTeGHZwU8tLXy1gWMFfELbBRcuqTfQswgxQhHKGxu7ERp53nq7iJbh5cmAyXgvmtGRA7FCRGJ",
  "key22": "yJzb9tXdJDytpLPPfpVmbZJhhNHaB6FgTwZ3aBzSwJgNDVNyPdEh12w8aTYGmtt6qcAm4xfQTMt8QaPB6ntxe4B",
  "key23": "59RL3F8wPKb6ANRQYwAyVp9ME57QLYJNxt27jp9VUN4qmq9YfPXfboN6m7men8DNfLuzZ6MUCC2uab1dDiw7tEaH",
  "key24": "ZniZWRTqfWvKegXuzqBhqBuDiF67SixqU6DtH3eJgNXxgNFrZLqB2N9GLzjVKm5Ygb3ENZJj4ia1FZYrZjHVM8V",
  "key25": "2SCWGP8RyVNNi8BsRvLpPzqZEQayCfJVkEJCHbNAw9xA2NvxX6Mts52QrvEcmXg28ne5caugRgdHNM1humbchtJ5",
  "key26": "5hc7x7C7sV5DPZK4Wyb6fbsHaNiL5j3ALFuMA4iaYg9gaKKULJUbnrc9jAZz7kUs2EjSuQyX9gX9iVgP3CfXVLvE",
  "key27": "4GD4WEma8RxM7yZyvwovdTjm8S8rVG4FCfbnktvPsjAMGdD4HvtDhqVRoam4x742MRzsvEHwQFj4fyDYHH5SEfSV",
  "key28": "5sY1LZae5KLbuR1i2NoGGB9RpLXBP1RxFkCSpdmF7zWRQfjcqthUFRbWTeCeKhBFC3ojLgMNZxVrmaX5HRSHD9tg",
  "key29": "4ofwwRtHLCU938DexDSaCkcth4u6XX88BsVdWMRAL81pn8tn2HuM3dV2kGa6SescyrcXTMyn9Ap3AvLfWwcPVcws",
  "key30": "3QY5u6BtBtiZZnCsaPBbrsvm1u2PyNQLRQPHEYJGXbCiqjcezd6aXy4ysQAjRK6TmgYME9xe6wEC1Jz74cPo3TjQ",
  "key31": "3VwuHitUoFGVsgybFmNMKoyJWNLG9GCpg4msZaRTFfo8af4eJHmeCGXDFUy1V2YZWejJvDy1M4WzGsN8C3bvcFjH",
  "key32": "59vsRkZ75Whqd59apgZojrBk8qFjL671LTWmJBtkfSJhofFR8on8zbu3DHeHf79cAiP2GPAdmRqmBDDsjGfVh9Sd",
  "key33": "3bAd1xnRUDg871MRJFxPjMk1A5NrmEjGZmVexqGap5QQwGfy1Ph4qDgrGYJD5ufXXpBtfh2NLQRvfupBZWUVGKLN",
  "key34": "2yCWCJyX78jpTKwUG6AtBVAaXSH9KtqvUwTxJWS8FKc1dbjiCZ8wSxtTv1JwMJH6nBvn7PReW5JohETLqG6fqmL6",
  "key35": "3bkVXzQiVsiJdqZ6cfLNXstV4CuqFxLPjwh4sG12cMMSTs947ybmjPYDZ2ScKv4KuZh5B29nB1KWRBTg9zeeQzeK"
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
