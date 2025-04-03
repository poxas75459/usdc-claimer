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
    "26qtydkv2igEYyhJuMU67ys5WecvGYnrX5V77Ga8GcXL4PyYCFghxcpiZ87JbSn231yamMGC4ts2riegYqNX7Fbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZE4wnnm3arJngMxibbDq63i5haXHw4pdF1CLa9WcWW8WhALNvxAJAo1yEdcP6kq1JcpdswvnMzFR5eGrTSfhZCh",
  "key1": "2JW8xCYd8kM6RgyMfXy2GD1D3LxuaWNboEG9HQtJ3LT8PbCC6e3NGjrEtDZfQdGVutcTV5Mzbnqpdy9LGG597NGk",
  "key2": "5A8zzLRF8J46aXyhL8oEtTviDjfzotKmWyNL4fr53ad3UUvHYucUYF8pwGkQCvTJgknx9njmEjz2oRBpVTtEekFv",
  "key3": "4y5d1RnqjaQbZfQDjfupruiX2GT8BnqogcTFAcngX7A37RLwVbz8pXK4K6gkpAaAcwkcCA1nUCA2xB6yaiMWz1Ss",
  "key4": "3cVPT2UiBGLgwpMWszgmhwRSQvkqyfMjmvEsHRZYVerGwmAgbq5n7SsEYfzWVwBwE8z4mCA18RyZvCuxhwcqReQu",
  "key5": "518KcVAthbtPTBQ62oWVAsKxNaQR5cHUKJRHkL4oCbu3QSkL7HY55HEUhQDGmToB2wnCdwcw5TS4GqayiBRxBfbo",
  "key6": "4xdcaTvKchDzbY4hNhUrsqYgZwzmUXwi8awE6xtpcLKhJWKQUM9d4pMr22evbvuzA2o9zmzdgLoCdN8qV2jr4Gyi",
  "key7": "2MZUhDCsnFdzP7fPS8LTMmJYFzPZBgARUZRcJHVo3DRavKmdB3qvQZHq8Qkr1H9emisAPabNMBX8ytqfiwN7cM8B",
  "key8": "5rFhLpcxryMwFkTud4CV1r8FGzTw3UUhaFCGUKgDb5CWmkf9LsKkuV7d1d4REDxwgURyAxTyBSwM5YqV1w9x6gjm",
  "key9": "CSceoSDg5VVQoGdcnYpmsF9fEfrazKZxw4An9JRiUwuMdwrEGjBbxNkS7T3ngCxvGB1W9jYoZGhGQfJBSpPVKid",
  "key10": "nGPdB7EXNm8c5XqXw1Ajtpo1zf8eTbJt92VwKgTUTEfyD1LYFNbi4ab9TDxRBMmaVVVvtnit6BnmSnb6vqAJCdE",
  "key11": "2gjfDHcTVGZ5JCkU3kWiS1BwTg33kwfmaNsxGSRAtTkvwSGXki1zk6mDGvWgFPReLN5ap1nryu6jnf8JfSmDZHjh",
  "key12": "4LSSJsuPCQoo2sSxGw1Vucy5Ts4wsuKmK6P5smkdKMsE3UorRb2Uy7kVHtQypLJ3g4fyRYsjHrNiDaWb7FKHg2UP",
  "key13": "Ve1rGmQ5Ty3Ldb2xYEAH3EvZfhpNW3hMspHVP5nSUqDz4d66skrqgPXf6wyEFd1aQdp3QKQr9XMxaoL8rs75YSh",
  "key14": "LeRzY7YYdChzSKZKNQVaya18n7UUofG58ofR8CRTwyCAeg1Vkrdw7ysEmi3Znz4KCwQiXTa7TADeVuuGqpowWCK",
  "key15": "4z71AXYwgC9PJNGDhJ9TbAz4HiwbmZmneHLqPRbJW9V5cB6DUDuaJKAzHrnDozYdB53Mn9H4UX1qHtWMx2dhHrHr",
  "key16": "j76kjdWpEeCYZnv2nEfoPsYMvTry1TqH2CZhrmukzbrsu5QJPeJ4js75y1kgwmVygAD1BB9zpCfJjfxWXkdaa7M",
  "key17": "2S9t9zp2HJsqpa3UZZvcptTXXjEPy5YHpLWKtM1mMAWzrBhamaACxftxBctnicntJxpMJLjAHLBpF2TGVDAM4yuT",
  "key18": "34ySpFFCxDPa85GgkWvzsQsV1LYh3FXY5CAyirWmviLkNsvZ5U6MHojMbUnpcLmj1pBd2jvNYf7vCN6WBwskbdPQ",
  "key19": "42j8NsFYkA6MU2chqNZthPUW6hF92YYo913jRUxwvXnrdU3nvMtBva7GXbTwqp847vbbcu4DprGDe7W7UusBqqjk",
  "key20": "3A8sNAmMQovU6TguZvEwqRDTpmaZjXGQN8Ek7EtoPA9JUNRUBeXuGsATRizPqvfeR1as1yRFhP6pS1f49s8g4Gbq",
  "key21": "5MYgsuAcNB4oG3YwGpiEQ3hXkmQbsUkyT8cQjA2v8rsSgh7a7CLr3c3MdYFKKAMBAVWesawmXEKhKwwcH3AaKFUe",
  "key22": "5djFkPFQNzMp1wWCjJznHzELhPC3tv4hi4heLFoJuAUtUimkUCAW6pEJPsz6M9rAYyDFTu7EwTuiXMTUTASJWhjq",
  "key23": "4p82qcUWxwiGnbjDQ2rz4idK1ug1sxXBs7gaXcV8tUKyFvXkeAhF9QHUtMHCm3YUeqMYPffBDv7uzVG3Wnp1YZiH",
  "key24": "4LFjJAB3pHzgKWBae5NgSUc1rR17pgSBEbe9d6RVsGceHP2WqWpUMNoKAeuhao6VuqnMKz5dLLgDpCW5pdjiXwzS",
  "key25": "p4mUhmKVGPjL7ZEZX2mXxRw4G3fTXf6qrqj2HnTz9rYdSzynq7evuZqmHVCUN3DKoevqZFg3TnuKsbx9s8YWwrs",
  "key26": "43JBqr7z7DicJjfLb5ECdkG5VzFMvFVBfFC1UCk95KNbFR7R1vEgSsK57P653DCTyPhFEpnEfh74b7MD25nr9kZs",
  "key27": "izSAjJRZYgNyAj7YxU2vNUMYtjKMGkTqchhE9o5RJjBos3nDrSYK1Hd26e6RbKxsTHkRhz5Euj2JxDVuZFodLCr",
  "key28": "2xXu6geyrygKKzA4frf5USm4rgBZ7hQawvEKk1SzBSKkLnEqzUnu1gP9tGBBqpaFMb5AN2vJUFZCw9Vt7HZyCGcs",
  "key29": "2nYV9smfEqjH8trHCK7wwNerixibPi7VcfkEbN3tRngnk569i5JxxdduVSR8UoKgtkBtugaHQHqa1Z8qcbZZYszA",
  "key30": "2UMmPKwkJGX87yc9odt2ibHZpG1PZ2KKR9jLHjcox6hBNeAgWuch6fArQLT7Vci2ZpJArci5kLcngbrAB7yToHLu",
  "key31": "28SM37S838hiT6FS8LwTpt5voNx1PrENj4vrFztxfu7mDzGEZJsUg9S3xpRTBrNNQhyX5bC2JsEnhMSbbgowEWuc",
  "key32": "4zpbkkvvrJRvvXqwvkDH6n8cz5XHVjCwSbrgoicJ2iayLDezBZHj97vQUMSdFrH2vn6x8J9bdExt12YZR6FGBPVV",
  "key33": "4EZ9PmbFyHGSwzvHEXg8viMhRoDLcZ8wfTJBJnxy7UUog29mgNk9KVCMQsVTK5T3HXiY3xP1g4oykWBPYoJ5mqA3",
  "key34": "4Lzi4hGsfPcFX3HkE9KeEyEc8X6d9fi5xmqZdK2M7QsNF7nazDjh9CmUaPNWoUhvotwriuyGzxHkwTJUpZFpAgKB",
  "key35": "jqWyBo2ZVhMYxGpo7YSMucQR1H8JLtEjwNLtjMtamrrpBNigFHWNVpCi14HsDyxzTJr8vbsUZ47BcWNfDB6Z2B7",
  "key36": "4Tb4unFKEpaLc4UE8NJeLbyDiDVVzQ4GejSF8cbK9UJajYDNb5JmjTtJQqAKwq1SDrZFX2irMFwixBjFakGL5vVJ",
  "key37": "24HLvSr1KphNjVc3UEYnLZaDXMPnsoN2gFnqwj9BcRAxwKzH8yHTMff8hr4GRgHPTExAaq6eQ4JEUNStZaeNoh7k",
  "key38": "mrEVe9weciUVZDH867uSXV1PMyQ5wTN5p57t7RELRBQTedATmnyLrpcErnMZWiu53F6jncZPqKvZRN3Q178v29D",
  "key39": "xFhW4yzeMUomxVKUXorNvFgXrVawPVQ4o3AA1FGn699XAU9jSBMhvvQQ9PF8dc7oqqfMdb8Jom3KNRKBCdWY1M5",
  "key40": "5bUCGaw75ydVHasnEXE6ev1kT4TaGScCXS6x3vSu78xEjW1BocmKA96ZRrskRLvE4a2LFkCHtTztnpkQ16DihGdj",
  "key41": "pEY5NkM8LXRZ41jLCnXk872NuFUPAgoMat6i6D5dhChmkLYosupC29CENdis8QG6FLmEu5Qo3cHyWjFtyxWs6Js",
  "key42": "2Xzk3wm1W4U9d34PWTQRsgCq4c5UL2PvyrDDGwCG1CMR5K7jtxfRe7twr4pnZ26WQYDiThczGLJX6oP3vdCfSCvR"
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
