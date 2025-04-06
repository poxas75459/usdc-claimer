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
    "tQ38gVGZnavvDb1bBPFAqPSYrVKQtfdaVfAV7vomkbdLxMK9Y8hRykLHRAfsvheBs6geGrCyo1rAgLFNSUMeZbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ju1kkfECb2FwBWEPkDsitfV7B7wdbHtazLF5fcAJnm5i45zZuf4bDvs8us97bLh26RZKZuwbsL5Yqt4TRKvukZJ",
  "key1": "62JHfL6icnSsZXqvUdANPbc5MeMKucbagx37AHKfrsE5DZePF7Ydee6cH6yuixzkeESDWWyvPrcWZhnF5m1RMpB8",
  "key2": "c7piLE2W1aE4qH9WWP7EXpLUvhhYystV1jhV3oEUsiX8n71nntDSoxXz8xZWjqptAJAjnE7MrwgVaUiU6wSVuWN",
  "key3": "4ekEgYYMhD9YXmo9gRpWQcm5SLaJwUpWPfoYELesdczd7r5T6a9vf95wi9ZUddbE2Z2inUENZnMnXngg7C6EJsjN",
  "key4": "2AcnB35dfHkjmpjzZsdEYAQto8fUN3ojVVwc9gcPxvFVD9SBTRJaRrSMiEgqKa2YSB2EvPxcJTxb8rZtAh5Zvf7o",
  "key5": "27Yx77XGST4gbZYG3XzPvish5CGkhi8Ss3z4ixT1MccvyExwavq2WkXv3DpzDhUCBva4bq565gW1uAHp6CNmjwsT",
  "key6": "3LJE8os4LBoCVB5Yhn2Wbdxbbn1LTLYzQstsQoqJ9ZjUzn6356egQ6YrHgbGkVZhkjYgMXto7ZHvEQqhJiQtJedK",
  "key7": "pteE14UPGZP8zUV4SEwpAxmoMVXyAp5hFSTTG8JXHxnCjLMorV7M3XWPHtZGsSEnMkJb1DepDFugJUvx4wxQkku",
  "key8": "cwvZnotKpF48gpckL9qpwBNBsv1MJDy6KCH9EfcjFTuAz7ge5ENj9FTRTtF16AEFt9ukecaC2jKQc5zpn4SE9SM",
  "key9": "5vnKeC16p2jdo25T2vje1S9TYqe981nyt4pDT8jpCyVgFzv8mGVJGeETGYzrT2QdPKkyCVpMYbTiLFPSz4PpuCXt",
  "key10": "4o1i7kdDHDwe2tSfw2mVa9cCPv8WC875qJ4V9FpzWkhUL5Nbgqd6zT3D6GmjsKjJeZLch9EGeF9WXCcKYAmDLGov",
  "key11": "46vb95MeMhtMytETZEuxGHa66b14Jy6eSY9szBotbP89aeqiQNicLMGfvvsDyod3cgwKYupZWcgjvg4hQb3Vufcj",
  "key12": "34aD5jJX3WRR1z9fRb6RYV6DoFzxzF1xm6FS2D5tEvy6oT4aVFWxFvW3g7LLhgadqE7vG7AMMjVtMnJ6P6yHaftB",
  "key13": "5JoRCX6A1PHmG1hh2VmPMcKJET4pY8iX6NKjn4hWCLs2iQgcD456hsAv2YTovrPSQSMtinuG8Gau3BfdGmP59sdN",
  "key14": "sEJTHZQkM8QVU9GtJYegu7ox6Wagx8grxYawJJ1L2nRZJTkd926u1e1oYUKBEjvKgHsxfwLNhfcwK4m2kcxCKhY",
  "key15": "2uiES5jqGKUtQHfTGBzugPfF5ag58iCq14Jdqx2KAwvBySHUvhUcr9WmMr3KMEDPJYMuV6RgW5nybxHC9hDd7M61",
  "key16": "ssrsZps2Qf24rAyQebVV5eQEq1RX298w994um9G3Z7msUeCzcN2qic9iwMhetqXdiExySN49eQZL8koXY5THEqa",
  "key17": "u4aTzQLqxgiyQjJwEBc2VeDswUgiPVMiSZBnnkegV9ZRxRf24y4KYvPMEf874TurXcDHaf2Sff2E6CwbRNvsjJp",
  "key18": "4pkNYv1q7p4wd2FxvVC19diiQo8y69mkdSyUoyjxfEdRhrbctPvPyxTzd4oiATEhqj8f3ps4Dst5JuUpnSRZBY5H",
  "key19": "TE9RsjuVkXy8QKP4VmeNz7UY5bU3CQWFu1SSyLLLt27KRUcbjtjrf3hvbhSSJfeQ4iXxngYDuUBcoaCj6CNHBNM",
  "key20": "67A75fXP3D1KHtmt8T4it7mL9X54xMPM8GwguCNBS89b4zDUqMudpvMfqArt4xJB9gH6vbgun7xHzS9XLoMCtGPG",
  "key21": "2Dd8xdUvj3b4jM43wJt9XwCb12jE8SQT4V1m72ckjCcen7TKtXPMLpCUTvwFi3Jv4z1sbn2EkV9a4aVb3ydZH9n9",
  "key22": "HAmDiUDu5hxkoz2dF7oPkJUTjBNKTT8UNSFt3GdPZQ3eMq4yAqmCeX2dAVqjUEgsTnLzgmFuHT2e7UqZnx8e1s9",
  "key23": "47LeSyCGDgziA6G3fLEy4FQFtSRK8e9HjR83dtjFoj8EjqKHtxzScUJ3HqwguTpfTL6SYMruXELVHQXsNNUg6rAY",
  "key24": "3RtjULTU88z9nPWeKsMNr1oepYRjr8PiZS15b5JRc6XESVtMbrkzZT7SmH987VqMc5euiyeTsEhwarPhooYRuu5V",
  "key25": "sGBUX87MJRKbzG4aZgphTbDhLVRvGZksg5v1FfNu1aDvQDyoW5QW9aeUBX7en4ZvSuhkyRKwixwRmExqugR84N6",
  "key26": "5iLcqtxVQnNPPwU5GpV9h7ASKqLEph7bQdGeED9p4XxUzsw8JSeSgy4oXQoCLmzHJqSmAfSn2vyNyrn5sVNwjhjd",
  "key27": "5SEShmX16XjonWPLF14CqJcEqrPiHEE24JcpJ6RSJ8sVSbQvtaY9NjG2JbJ5MAJZhtWfrfAjg5PjvTBH5r6UZQCw",
  "key28": "2AKjGYzBW8Kv3k7BiZCViJzk7Vu1HLrHVDfpPho37VzBb8N7JMqPN5j3ssxcuceE82LqCHsDsACnAbEP5YqLRCaz",
  "key29": "29kh2KhpJN184PPJGfoZqhwbFkTcVroF4d3pnY7BBbbfi4ybbUh4tqYxdYEMEJrHncZumqcW9XKvgZhWCYyyQVxS"
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
