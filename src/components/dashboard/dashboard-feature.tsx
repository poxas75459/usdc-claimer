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
    "2w645YmXGrkLkQKwSJLSK4qSFbNyPGr2Ws7jzUzAt4fJWaT5AX78kT8BthT8r5ziGzJriCJ8aovdatrDwc2KZ6r4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bhb1fWtFsHVTMiFSFA62pqafLeBw7PsjayeYt6Bn64HwGdTWy9jcSbJcKHyBFZQaHPDNRrUBFxvdD8yQNhnbpua",
  "key1": "5sYqwDtvrhi6BWgrjNSWvtarwJGx19PeTx7yMHez6LYRb11vVDuUmt3NNzSsERH5VHzSWdk3NLkaJzhAH7sgPr5G",
  "key2": "WyZ8DkVuitL9soWmHZpCACn4k1fnNckk2HSvTZNZTGePFKyKP3XrGVcRAWbh6ZBSKp6JipSfeN18ugptzr9Jm4H",
  "key3": "5PnwLj8eZ5FY6ju9j6bbYnowQi8ei9zhguGeNXnF36hpvsq13CicqxDrrBcF542NqLmELg6nK121oi3YFiMQHuyr",
  "key4": "62KBgFg51uboCckjybaniVrufBUivLbEwNSzUuVFeMAfFwvAxrGQzkxjzXgb2UVePbsU1QERyzAK3Baot5Dmzt42",
  "key5": "3uiy3fbkzG3kHA5GgW7LahZvMPKn5EhYnAGRebVksc3scUsSvVshqPKP7khfNZyucnjW3zeHqzpWqmoP7MscP4W2",
  "key6": "5xzSrrprX9ETQAeLm6rsRUr7XdGixLNxpxjtECMijVc3JQiihtNKoQxQDd1iZZyKVKt28wEb22zmsyXhShAkgSd7",
  "key7": "2fLEDWb7ueJGwe6hy8QR3x4YxHyaqn8VfdhxTVCHjKn1Cc1NAPag9stF9e4dK1BycQCTZr4rPjtnsJ84PQNLSVbF",
  "key8": "4eJ3kZNgoYqXpBrVyr4moLeaaYhhLSLgq3Wm1wFZ9hAgFxzNJrFCZ3hudt2PAkvwUX7venGg1gfAJqrd2yPJbzP",
  "key9": "4VqdNfbbq8RKArumakyjz9Log4Si6M1wseNsuNueqHDkauyWr8NtfrPSLSujVypCzaU4nofg1MJYespnPA5pvMa2",
  "key10": "4HmoJ7HSkqmBurust8TxDJxdoXrDiRd3HrUw77tjgaoujCx7gkK5PPw9aonaMhRo5BqqPRBXQoBBVyLik8DQ32Ku",
  "key11": "A2wAeX9uVXzAWSmhWmfC8nwqXoiXuK4jzi3oFZSuEHE1czxhMCYfS9at7L2geKZZUVU7yjC5jmx7NtAUhL3LfiX",
  "key12": "42n7P8JJhe2zYdccTphfz6dE4Fa94AkXPdaUkcwJSxZq4nDqZpoAPVrr5Y8uCULZwGYAzt5bHQL8Ufrr6UUHyLtH",
  "key13": "3aDEZ3EFc4MqpTqgnHiQiQ8rbMjgEELgB6ZHK6qascSBFBTUNoQUiknAvx4dNYGBstgY9xufbhLj9GBhjCj1THRh",
  "key14": "41QTgLjuUYgndY5qBUeLNaGVv7VKZS1RsHbGBAvFhFGu6xGxFES4o7bHUeLYWw6UMppc9iNA9G36dgbpWpVSS3UZ",
  "key15": "4X9dECdw1Y8DsyYk9teeoDW8bTbu68UhDpncm3TLk24Zyo4AvDVbUdFRC2887gRCJ2SYTd5mFF8S2hBmeWNLAEhF",
  "key16": "33Fg4zPw752DAUKwU9iWCstsghxySdee678xqXvRQkkUTtCA8KH9RLpCkdYrRWTw2a4BvbaYYgWas9N5P3aqpZFd",
  "key17": "4rX1d1JcTjdtuo5mESP8P3sHY8cK9SbhmzhcpJRApXCh7yux4jKokM9Ao67vkPPfstawmEteLYn3HRgoHzTGnL6W",
  "key18": "HAd1ZCjo4JbQTqbnSb94PdYjZBmVULj4ugUUKL19i6U2gvQx555GFihjMxSvCnLzxQWa1N34sRvgoDScxKC6Zse",
  "key19": "2QJ8U9KKWGCQxuwWWg6dicJY7k4uau5VZwoiogxF8N5VKppXipBmT9c1q3emCgJz3yRvQsXmdTcEfEkDE1pPJ7M3",
  "key20": "yjT1VRnq8RTiXkCs59toSPEBrz2TTh2adzDxzXsqdq4RGUP9H9seUZofwSpsXMSi45doT7TRoW2hkSTPD8PQgux",
  "key21": "3fFjZGVPsNotSmffMZFojg4tPU9nETKNeaFm2fLyjiaKtrqubVmfivXykbJABQ6B75Rga8oqnN3eXjMbXJ3Tprag",
  "key22": "4yhZDTjJtzGcxwSWZ2pJH8u47WTtxzw2So1iYVRARQMKc5GFMudH8Zj8TjaPH5H9fmBacuQmjfUL3CsDJR9hiFTd",
  "key23": "43sXaxZFV3Nyk7KRQQ94tPw3Jt7CKApwTBB4fbWSw4M2CQxVGA1UiBGWDgQR8BGV4ZW2mfd3SfFFyA31JK3RweMd",
  "key24": "4arCzoqMYYawL1ocoxb2WUZgo8QCPTanewhRTqdQfSYF6aPpbUBDhY3sgDJT2EA2H8eTNRgCrgGnTPjdVmHVxjP8",
  "key25": "XGe6VQ5Z1da1BjB6PPvRzPJiPAipX9dTCgaiacvNvos3RqtDtKjoqVvJwL5dHbzTgqLvcxjveo6KVPngVeufM5e",
  "key26": "3dGuq7ZfKqtyj1gnCSf9pTwMUj5gKe8jaQANeiAiSvFWyPc2FW2xNUZEuJJBGTQgUn9TY1C84o3vHcWbyprqtdcU",
  "key27": "KCKStxAX9sGYEGH7bN3ytfTKvo727768pcZ2b74MVDcHUNXwN5zT9MPk4LF1CqMkkWPvwygJHPznr7jU9iRE461",
  "key28": "2o3qnFrQTiPDycb7cg9SL98Jj3nLWVmieHiER39aUznYjfdB3yDDqDtpjaKk7Cu4GWEZdnv3wggTf4QLNTgqLpEq",
  "key29": "61suauEY3j76D4wDEgZsCCCVnjefRCwUbPDJyMfYjdt5SvUS55BtnhHJYDULqQndzGQctwMgqr4TT5SVdEDLe5ht",
  "key30": "3y7xjQaaJ4K2R1XhZtpkYaH2p7guocb6rxzPjNCdxDDS8U64VCm32FheVvusJkFkjejyGAN74SLxwEJwd3QKYNfh",
  "key31": "4X5hPnq1Wb9fvDvXuwaWoRMoBah1YfUjk5F89FPFCNriQGZqA6LkBsbZFMBkhspyejDvtWVbtQTTds7HtdoV21EY",
  "key32": "5v7S2rNoUXVyi7UgBs2hnCr4L3KELAugWgGmgwh1xSgc1dPgF2ssvVaGRMV5JVGijX4sNhdk1AvBWHTNH9ct4rNH",
  "key33": "2i92XvMdNWvyyNJUL8gtSxvmRpsSG5y7Qfmx4V63dmtskJaVZhDNQUECftaXM2x7jnSJ7nF9rWiuVWYkLTUSdxTw",
  "key34": "55oRVBQHZ6Cb9uDtLwsfN7bDMux5nNagVVg8RcTE42PtgkgFCwSy3FvWqLZaFcPM7S6avivBub2KJgAQKKMJDgG1",
  "key35": "4TEGq9bSoKCnAGp7LmMwzr2hkUZGSrMevabK3QaEGGvZv29e6heabYdSoBAbNyR9ScKcePS7DMwzusfqjVxgGhb1",
  "key36": "2BF4csGsk8yhe6mJ6fXJQSBe85Wz2TVRxcvgm43gZ5begsbyN5rZADipttWqiMoi8EBSGk6AjwYjoxnYDuwifx9Y",
  "key37": "5FvVcoNHw7ENxzbroh4jsGvtoLZEaSDMuq3MFDLKBz5HcaZVw2BiUYzVb3m2Pdye5n9mDd4FXMXXwrCP9NXSAuLx",
  "key38": "2LxGqa6JQw5srPPAPACBXvQS43aiPNPFpoKpcrZhLqkW5cADZX8uo6iyEwA1Nw9LCVt7xgXEugrrHj69RdatEm89",
  "key39": "2mUFNPhBjAMdwSgpjtYQhKTFjBVk5xEiKnvuGmiYjQtiScafvCngAwGETAgAdbEfGe1Bsf7h2CejyZttDwWL54VU",
  "key40": "DJCWTkfLkMLfKmXnwDMDwAgz1tMW2zSr1XHH5BdRuyWhCnRV83v3DDeMfYNrqsv6FxF5a71RBmvjyPSnWaLNqzG",
  "key41": "5tj3zhGcrya3vxouKpHdggPCLZbxwLvzcnEa67TgAbTuek2JsZzSq8iVCysoNzW32X2ujCj9ftdTCcqJjSM5kXYF",
  "key42": "5auU7BL8VKWwGxLRj2M1mqznvqN2KcD48xJd8rsWEyGcsMcDxHxYNv6iy9RgBqWmq4Ttz9eAs9VD9DWP9GnsJaM9"
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
