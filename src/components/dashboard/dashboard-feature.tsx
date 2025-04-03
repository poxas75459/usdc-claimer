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
    "4LLV6HJkCyUjvkEM7JvbvKmJeQL5Lcd2KYrZHC5F48ni82obyvwJZqu5UhVbxNQubUZgJu6H7vpBtNh13BZDNkeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hVku48pAPSVgg4GcdxJnT1imZk4cLTMCsPyJVq4xUES8qnZqKZN4h3KEVfCWWwTmVg54ZHC4FBMCRRXK8ZG2JyB",
  "key1": "2yyNCczvDgnFYBe1vfYPp3VMgBPa3aZmsUPTxEtaBtgBx3YDSknbqEusER2rNwwWrxMK3qqRLVQ2FA9ewynCTjnj",
  "key2": "4TtF8PdGUcceNtkk3Ama1pJUhnaT7rTsiQZnxVCxH3CpLffYxN8S9fnpaheCxTYF8rcoffQFE7LXNGnY6PnJJu8m",
  "key3": "4763U74Xz7iua2XjwbpWAfxLDbhxGaB6RFGc61wnmKg9NyHhNT5uS7VCZKJyvQDmZ3GwNRzGHRR4kAmCXVf5BZ18",
  "key4": "37Fz63e7ycWFzQPoN6ey4b6RPmdGr8mnnrmuQBsBmkqakrMeu3rSaHXQx4eWkeT2jct6nbHEcQUAomYA9x6Q7kFi",
  "key5": "3EsXcCmMTxx4xKJQBLfKLus5D5eQyyxfC8w76Xb5jMAnLzZDNLadJq4Mz2DxNhYjiLShqWh6fM9NgoXPSXVhRL6y",
  "key6": "4K8TCJtKoMebvfre3gVMhDcAkXuTUwKFcuSfGQYbss1SjVoYBe4qepKBSUJYB79iB3Q6bqqg2gViPSitywx1pQrE",
  "key7": "RkwA8RZ3rDBoJUyZx5khynJxkMsPiz7w6kuKxcGXJSj2DErYm9FgE1pmcijEsbUDgQxD47n6qJYF2S4rP7jSGhS",
  "key8": "npjxsAgL128UgYF1Xmdzf4X5UkNC5DQo3st8TG4rixcH6yXmHcjKqaR5BdutqjKE28S8o9sRuoqVzzs6uBxqCZq",
  "key9": "2d1QUM3QTkTJ2ATTQKtHTAsyn2eSA19cn1AAcjqfR9ixAT16vQT5FFsYy56D2kdYqKvXx4DnFWPtee6V1L176nkf",
  "key10": "5xYX7xwN4Tr8SowL3PncRuQfZKSk7u84dRpz24T2LeDS5jWkDpTndvYMWYR1k3UtmLpgjsusGVebsJX8WHeB3Cwe",
  "key11": "JFBgFxERaW7W251Y6u972T3XS7JUHUsSLo85MC7mt7EyFnFnKn4yfEU8vycC796AXTVzpLbRDDiGnchKZv6Tokg",
  "key12": "2XQXwq7DP7jvMAp4pTaj8qyHG2QXokNi9uLN85axSrSmsjYP9SxZTKkwKb8z75kENuTMuEjiiDBop6kzxhNX32Tm",
  "key13": "576kX9GW2cbuzc9H8Ef8uN2qZuJGGqRxnJiP1PppF4RdkCLBd64TDkJ9BGiP3NVEyjNqmgsKQJfY5fHZwWTrhcJ8",
  "key14": "5UDo5euWjnAzwVvpZynGXU9mZJ8BkQznersJ49Ax8mpJi9bX5FGaxgcSYCuVXGkYsCAGSUNd7RbkuS6vCFm4hH9c",
  "key15": "3NN2vvMqhodREWgzQb4RwmKNGTFCKKf5VjNfNmQ4VqcxTWZjYhHQMVPRmK9xu21JtNrjuG5KXnSNG7vmvdxJy628",
  "key16": "3gYDqbyjYke3jt3abAN4ah2SScCMbMHSCzpnLpgRcpfw98jYF3Lv3uFGBwcebPd6ZZmzPMydcLjvrTtcFdMXvTwL",
  "key17": "2Dbks5xrvtmzg5MZJXz9gcQuysF5M8Dg3fr23RH6dHF4GMgoQkaWfRSciRiHCsBdfWh2KJ51qjeUxNiyj8vGewQy",
  "key18": "3MBuRq3YprGEkNB6TYqyFa9HCZFeoe8z7vsaXGfu53aLM7XSBzF77ukZLmk5jr2CHVo38ZL7TecWsn6F1rt97oWM",
  "key19": "4gat68KCApM5V96DcG6QcwhCSNvL4ENjrLxGdH2VfBmNfs7X1kCWQtJqbZCoLqt5iKevvmxdnRyXRDC6BzGVoQY2",
  "key20": "4MRDCRNtBgP4hKsVKppKzSEjAnWbaPNvLvkDoR2xXR25Jx8kf67ewJ2H1gr3bx2YWeNpQ2aJoMBZkyU65BAxjPwp",
  "key21": "YwnHmEkRPdnLFJPX1NdCQaSr4YMF5D3mYDJbb6VjV9vrtSetMVMCHEK2JJVwnFHcc7k2QFw3VGjk3LTzdkTDyNV",
  "key22": "3ydqbr59bkiXwb83WrFaW7Khr4V6a6DN7iwqTBhJXz5i8pfCbswR6tGeLGiY4LKXz4cmMWvU5sJj5eiARgm9J7mZ",
  "key23": "58gE4bnYuqtNz7UwYy4faWvnsQn477xEpPQ5LZZpsEkMg9GBCPLVSnmB8FzwHwx7xwkvgVCmCFpJfggPveqreLN4",
  "key24": "2Vzpx6YbBPpTA9sZUREsB63BXTmfvZXSUHnKCPaBWZXXCNtjLc36vCQEDS76mS1NphwdroCJN9dzmLgTrPZWzzFS",
  "key25": "4GsimQerBqv9rvPkx3dAVmXecssNMdPaAQwGRLKBiSn9eWYH8v4XhNYrm8mqkGEuXB6mzDCoqSFdWkogkook85d4",
  "key26": "cvhd5yKJh1ctFEtEzVFuWuPjUo3CCLb1VGNaoSi8Z85bypZCaivE28qjNFWd36zLCzBaBUWyi8o4hDsQ4zmBhLy",
  "key27": "3fuPEVAUaYhCmUna9FAaE6A4cb2vbZgRTo5MMfNWvkNUTHQFrojnZABprL7ZBcjqp7uXqRKgNvCw5yR9PXzFijYy",
  "key28": "4MV9k36qZzeGN2jMHW4Ugj34nAxVyrmhHJrvBQ6wAbfiuFESsT4XpohuZds1p5EGQxC5A7P9CMAdgM9zAorQyrRk",
  "key29": "3UiACkwyyLE5Wx211PT4T1T1rv19y81av6ge3LLk8pYDwqab4fo1Ra1wgLEuQ2TERaBZCnxTPK53hpoB1iV5Jp1p",
  "key30": "38HrZfzao4itEnvq14kfeTTpf8aPbib5YHoyMQFMwbn85u2F74iYaWWKm5dGcmmWHRK5mAzWGVzW9pHRjLv8fpH",
  "key31": "22duBSM8KFR3NF2QJM9AURwwb5HwoeC71PoiF7EsxU4rWdSbvzhhMoEJgD4vW1xSrZgoXv6r9aXa5FXkxMVE9LCK",
  "key32": "5CnXADftV8pZgD4HTk9vCM9LwvEewNKemUoMbB4vmCp6Am29CYPGx2xBFA1hsafikCJKBxnqkNtc94sYtGehBfQh",
  "key33": "2F5GEkpDHxMoEMDfPeTVqn1by4qB2svyFs4gD2RRWBo5UqwSGazy7VVxUGiojM2KBmXFcU7fcvC58oE8cJaQWKVd",
  "key34": "EsKMV8JcTZVHG5hUogFksLhkCfaTVjtjcfkGQFEq177Q7ELsffjhsxYS882uPPwmoSDQw2Nxv7FMhJCzUjwhcmj",
  "key35": "38w5jFvR7JgTAH1T5YUQy8GUjye4qVpXVDsmWtJAr5DomiJg9zoujRScZNPCKRniy2Yj9u73n1MUcKchTHtdx5x7",
  "key36": "5AmHL5vhizX6gbUKVDXHKmYDvJ1E52oHSdUgMgVsbyEEjuUAc5A5YKc79HHaypi2ZoMUHNVDsNMvooCyQ27YbZEX",
  "key37": "2hFPAnx3CW1pM2bJsZZAw11hnMkGvPgNEWRxzjDQUjWvdAv9g38cWcyTnaNLbYdEoJXccXzBJM9L1ED6eo4g5EFT",
  "key38": "2t9M1D5j2LUdpkqBmXL2TfWphJLGtkJa7DqhhZuuH6UDK4smwukx9j1wG8969rPuadU4kzPSB2Hi11qtZ9WsRoPX",
  "key39": "5b2FfqdSLirxJQi69sUgRKDPMM1mFvobcD2sH6HpL1HSoX46n5vuBZj9syttQLijFCVjonktB9rxibhgXDu8eivb",
  "key40": "63ry6dUqq1J5bXUaxvAoNKMJ78Zkve7yxU72QhN5PLaPzqC9pbf1F3mHkwK48dAJYCVxP8ZHgrtijZVmhwhsTGmQ",
  "key41": "4CU3DynrXwnN369fFXioAKaxanvxxuuYsTxS4nVoAvPukvEA4cH85CZ2hJwv5t1gqvQPkmEdBk2gcmozXzQjLRG2",
  "key42": "54AZSt71Qwu676EPCBm1xXrkTd3dSfd3trgyyDeUdCrXBVjx56iGz5rBtyVrrD73nkXCFJtAW6PAFmnTeGu2RDb1",
  "key43": "5bX2PSu7oKAuDtTpuie7kpkawGp1MGv2EU2N8bsDJbW2FjAdb8ghJfB15UbEbcBp9hwr4QTmfweYUAyK7D424hyh",
  "key44": "3cfoGxyYJn3i65D9NQHPDk9oGNVSnX2s9XBRe4A1a1AG9FtvYs2WC74rNLzW6Edf5kcVBaAzacFxkZVJfjkCCvbN"
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
