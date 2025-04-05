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
    "5BKax9zniucaLuCAjCwMiNz94yKC1iFL5DB5KQQcj355BEyTkaN338CdfZms57HvZuvrJ8k8avfACwKPVmrmqdAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CuixvwZ7gaixQFjHYiKHKjx54NZ2DqpajPHtiVfrry15UKRHnFttJgvu8QuugCCqUR97fVG8w9RxiHYHFVjkDKh",
  "key1": "3xsFZDsGbYvXvGq77wMDtUykNWMv8LrWD7q9tUirJ4YnNrHS1BACgK2Kyw3niu2rVpgCPi9jTBf3onZJUWWrYURg",
  "key2": "4bpKW8gTa5viRCsCSTGSpRky29tjitvdBkj5Wxtcbw3U3e6pgrHWshT2gcf8BfUvb59t74Zgwj7H3eUscxiFyQ3t",
  "key3": "4PmEh9TdL2LFB5omtYvrxVVcgTHN9Aart2idquCbsCVhsYW4o2dBV5KAnH74ZXzfMTjkyy5z1LB5aTds6pk2Z2Ci",
  "key4": "32ctV5SA2jncXw7K5rnH28Exokqrv1EHoJds5r9pbzQtWt88TxppAqgB2NA5qYak6Kh9CqSgBfuhRJBB8a24vdKh",
  "key5": "27EuKNmvUWCpFrPEChEGuPEozGnqwYisybDJ6DbNUgb7auPnYbGoqE8eXcZKdLQDV64xgHHoEtyu9rXLhb5yRoF1",
  "key6": "36USWM8X5NXBkU3TFaQbg8o42cruHd6mL13RrhEANYSmGQwhtFiNgRAvAXrajFiyaJbixVQh3uqit5ewnvWT9dxQ",
  "key7": "3cP89yJxXHbbRjo6bjvA6MjeBx1bKuDnE4j5AQfhBVmBPTs6k8cVz6Z4dcckKq5Np3AZ6q2iXva6e8S6WsNDDHjR",
  "key8": "4tJD837G1ywoHPWkp3d4iPiW6KHEsmSGnnqa1G3SBQXZ518RX3tX3HG4zpB9NTKXBMZG1VJrQpzZEGT98ZcGeSEh",
  "key9": "2yg25mYZshdQAXMZBdrcE7rG9Nfq7c49Dqae6iJJUnprqUPo4GCd6uY4P1riD9wwSdvmR64Cy5NhJNf3qikHbREP",
  "key10": "4sCBo3ACSCfgPXyXJf3trz9ujPikLWNhifkK9wasPSAG5nHa834v3guYGy59576yBjbHc3PyU1WSR6EHDBRtaEae",
  "key11": "4oq9bw3WzyGLaMb7qqAJW2k4Z4fUQQ7Ya876ero7PQ9cVgfqWecY1oKgdWVxbkH2FC2qdJr7oJW32TQ9epvrrQLE",
  "key12": "4AQn9kYH39v5srT477kGsyjYUB43od9uny2BHU7YFRVRedqijjVku2C9Bg8zCZwvTRseZx43EraJ5UnwV6FrEBEx",
  "key13": "2tPiMeaiLVNUxbcLre7YkkqQ5UWGNQspPKaxTUmvXGX5vmpV5i3GhXmVXWmf3xJvrYkUmeCMFb9NseQCQbGgJ1U6",
  "key14": "41kq6jxy7omBaRu4hXiHt8X2917pkmiURACboJnPcK6EciD7FMArzXVpuowapycGodjSbFUkuR95QjcoZ7mLuZfN",
  "key15": "59AMJiuiF1kWPH8n4C8WxddR6v8bKWAosMGzgZJ2oFx227zsBkvghdcyzewzYsy1BrZuEPZEWhuZ3LFFUVQPXMEQ",
  "key16": "5JVv1xLvk1ZHSMLMSwnBhzTV7Cv3aDZga9NemeMzgguSRegerN9nNyXGXvusGwWmqgeskjcHCyAvCdcFQceiLaLu",
  "key17": "3sGBgAHRtzrUCQytjpX55r9RmskDq72sW6xsPS49xEWFCzHt6eqiYDmf3FXEm2GJF27hrCwKpZrHnE2XBFuDDtVU",
  "key18": "5LNMiP4Zv5qh8LC59KXYodkDzgLCmi3KUGpN8d5sg3uwvJfnL8MWptYCmJLLR1dyPLb4z2kFUHGHjWM5s7u86Zy4",
  "key19": "rJVNtcyKiuJp6H5Thg53QP6tDScKTL7WpGhoBFraqcgGgQHsT9Z5Wnw9wFSt7bEYs1411VsTjaEb6RdyKGGsrma",
  "key20": "frRE3YBHJAfGZD1qpjzb5Ad6Pn9t9nUiYqkD8v48N8grTfw75osQYEnWzy4M567a4LWAZFUKWa9pMjmgFffVJZV",
  "key21": "XkQ42XAV1URmUrBe14Srp4Ejiz9L21N5VxaPdYVSEVfvaXQ3DKuqPrWXRfuKQANWfr8bL8npMG3Zp29nKzu5rbs",
  "key22": "5xN9J1jQGoBNgNVXu3xkdGatUNuEsnESCKGRpZMNaQytG1eYAS2gbhCFgefhRre45TgFHgFwGkq5gmRoVwY6PAyv",
  "key23": "32GfXGP4q149CmdPLf96cqHKemmh1KPhTezmofHyhC2xjfg4xSZu6ymyBJQthXrVoQTYJVSRrEWrQSrKxwjiwSHY",
  "key24": "3cBZ2FJhxr8GZwpUXtHdAwmqgdP1RQMQzAzuRRmuk38DoNyvstU5bEdqJ9jJgDtTD9cwRbF5ZTdLbtri9bbDHHqF",
  "key25": "2tMneMjKZQVxrbHrRizY8LHfKSMTBScjPznAgamMqe87xmEeDHxePw1BvXeHyu2d4jkykNRn9Dg3bdPKw3cqxQjc",
  "key26": "2ZM7JmSQJ1N6iRxQoXnYed1UN8zCb4nQXqEx7eCSza6P59vHgYux6DTcd9x7Cyhwf9N4LSP4yyS5hnuUjNHcnNvg",
  "key27": "5tSm9QDkDNdHzheVmuMqjt7m8ohbYUWQbZRifnk52PU5GT9QxnKRQxdVvbfKd59J9o7wLS5hHnt1uLzRLJTMCAGR",
  "key28": "5fdXq7D268B4WPvCTMPmAkQzDjMqZ6kBVxHkSzUvdxrAGK5kuzZsH4hvYhvs4JmU9EHbsKNiTFUGmHD7MGiFYRph",
  "key29": "y8pYt7FCYdf6R8opYEJDT1U3JjrfcvcgiB8tgKsGoq5V3a28Zv2GcyKyNA753AX558FMN7R5pNJDEiVd8yE8BvD",
  "key30": "4h8TT4nNHNB9BK37WrB2ybwyi83sCGzscQXMCtHJWs8Nse3zkun3ZE5Tqi96zZRd1ctHjbaTFqCD17P7Pbt9XuEF",
  "key31": "5w5js4X1oSxJJGJGsyUzFP7XSQXdwfQ8h36Y1K2FY4dHEAzqyRowubbFYdJwxsnrCPrXz7fxz6eFUeAYXfescS1b",
  "key32": "3Mt95SFKb3iFS1TJeQThwQd8MwnLHjQFDeRQsBmH7z9JLg8R3gQ481LB51KbTYoT8QCRdyRK8Tiq893bDhb3Q6T",
  "key33": "TScb4KTENmsS9pxMVjMbC9njGXCS51Yrnc7vGpXr1161h7261UG5p5woa7dhRwQrssrC7VyBAHH66yDncU52yQf",
  "key34": "24iMm24oyA93Fy6pLFeWGGifqr9x2V8SABTMLi5j6uHKdwgzbvRNXw5M3JP7W5yVx27PhfpVyH2geFaGTmXCNyjp",
  "key35": "G6z9ejbJeAFGJrz3o7z1NppAzFaqR29o74Mg1xCqYSteRzocxRpF24nn7qDyCGfb5xaYLRrLNJ8T7dvpzzmP5UP",
  "key36": "5xJQBB1BCJRNViQ7nT4t23rN2yiiLmK8QaBoBNhakrPiY2P4anBgituTMeDvXxY3yqk9uhkw2f4iVxxvZR7YdqQz",
  "key37": "2upWAjh8jB7BLE55aFckUq2eQiwiVd58uorBVhFavFAQ5wpgFCuCbxnJUaQMJe9ZDzAEs12mYTZ6ULLz3YsBMiYk",
  "key38": "63Pz6sbbob5ub3XTSxD7rYhv64Yd9hmsdPXv6ySCFatnstkCaRBhu2UpbSY9DwYLsBCWicxA4k3QGC4R8U8oG6FM",
  "key39": "5sFWAVn4nRfYqY1BJtKPKUdZRH2SrJmmoWr4zTJ9Vygei6YHngGMmXeboYsRh3QiFtN7YcC4mRBwhNH72g6y3Ggp",
  "key40": "3khpy8YYfLkqPPHZPXUAewULG54Kxotbh89dkib6BFkpePxCUWd1iMzAPPJg9hyHVgjFLEMGMrjEzcoLGMznCYBB",
  "key41": "3414M9LrxArSQwPL1jggS1SfrwQdoKCKzFZ8gErSwh97Rm7AwZDKqxfMbhEcbpWF5sBryqNWcoFuNHusA36kJTdp",
  "key42": "5VpPZqN2NRqWteoUiQUSaUHhxyeazhopnwfqHarsnRrci38TyXcHZbeeoVXiwJ5eyEpTyr7wxcb4MrnBUKCx4Tp8",
  "key43": "fMXY7gBWkBEbSvzSCmLSYTbYNJ6MVDCe8pAwe8BxyoEMyM2RNx9c3hCJjrpXnn2ttFXysTvD1c1fN6RNRm7gRkW",
  "key44": "X6bZ3wntK8ef7uVJLXGQwnqR43Ff1J39Lp7H9GdSxDEJj3ir8dv4yd3JQqkutR9yYUegEv6w1Fv89uMNVSUtNtm",
  "key45": "2hR3wPzTXzHdjwi8axcBGXy11iweWKdupk5PsWMeFHh8ugw87Z47m5k9QXJ1d3de7z1BYnQUJbEBRL9QALCv5kQD",
  "key46": "2P5K7bEgkan5L8bDQ3A24zFMrUSH4SGoLCNy9S7nnvYULqM9sWnZWdpVcw5GFArBoACC8JGqvCKVWSz7Uhs8uYia"
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
