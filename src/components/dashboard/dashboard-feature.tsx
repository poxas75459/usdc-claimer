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
    "ZktANv3wzxruDzRKCMuVAynQMBB6vsi4XArFpD9C4T9F4kw4FZKaVXvARhofLX54yidySfhrkuwTMLDaVHg5JpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EGpKazw2H8ezY7F6sFzGGErKUA6bWr41c5tv6eMxnRZPYbgsh44xLYqph7tQHPKTv6eNhgr853s2WEoVY4jHaEC",
  "key1": "2jeczSiWguiLSNQRBah94eD2myjVa5tRzxCj6m6983M9KTtJV1iFC3UQ4Z1dPeYz2xnJTxwYUMWPYfz8n3EtJGsS",
  "key2": "3VEnA2Us6TaPcacAi8KAiy5r6NN94dBVPhWXQ7zz8GvuqxHK2h5pYDiCk6WApL74iBrxnWUkx7nc4Eu3Hs7SsC34",
  "key3": "29CLGoz4YWPwemgSecGkJrCiW2Y1XaqqJ3KQVXzXoMbc1KoMwuDmQu9BfMkQWUXckbHoPUmj3u6YGfedWfBGkZcT",
  "key4": "4bD8WrbvKFfLvLsfnKs5L984RXgUH19BoRLazmvJTCiN4HegFQAKHmyX8My2C9t1TkhE3z4SGubBBHs2fyLVxSXc",
  "key5": "3drS1HrPVbNcyohWrFtyTa71v6L4stbgBzevWEud49LxSRwp9Fqp9UtBRxGLNESh3MM9GZFR8kQSmtJkLCHZMZXz",
  "key6": "5wQWXkyiGM9hsvZ8BaqAL642JQCEuzFKLZaAhHpj5CQeXYGnW69fhJ92jLzkMkueGG5JAhwq3pt7DswuaarpjKJM",
  "key7": "4fpmWygupXvPcAAfWbAX1QMZGb159XVjLHeUZAydY9EkdciBpsuXHDoEVjZg5EKGu4LMTD1BZCLi7rLxRzuYqjL9",
  "key8": "vD3Wrtfrt2cFP4dCUUDPbh2dHdB4DZEUtqFMV7BnLRVJSdyNEEhokRdVGx81w98K61tkFZfbpLFqgKEhHRnc7S4",
  "key9": "3SgpmcuyBr7tVvM13i7ADPVARkNFvoTMxBTbowwJdH3tX36UXV1TRdzMqxme4gfphmWPGxhV6RSEDsGdPGqXYyWA",
  "key10": "2nSaUdgG4FAx148ffAi17mfF35i6EXfpA7h4DqwNngdoigdqjDZgVdrptWspobHs92inVD9veWc4gVdFzV7Sndsh",
  "key11": "3iL6DSTLimWwmFaHnh92ixyTiUsQ3vDgboEfHDAwXengoYPz4CrFLs17MM5MhmqdkitWaDgH7o2SwF8ohacyCeoc",
  "key12": "4fCQSLXw9hCvDDiqfqfFbneHgdYkuncciG8BMx4yBrZHDt1whPkPVtM3mPzWPCefY5yCd54qRSwZq3iXZBdQvsXX",
  "key13": "2NDkLnXGzyAbFr6Xtt9aZiKDyk8poDgDApvWENAH5BiCCLSFDx35evTa2fd9kku5gj4sLFCWQ8grQADduDEHu8kw",
  "key14": "38SXyB2pvjXydG1vKYrAQZeizNx5m3uV5wpHmPnCjZdGi7FtdZwXiQcmuNw9JcHeNYrGVnLi3fyHbYQvW68JYocg",
  "key15": "3NpxfcXoLi4RJHkUSPPSBfPkAM2K2Q9gaaNchEpCnhFaGkyis5Tgwx4Z9nkYpzxhgjCcDSbrF29UkPwmBKpMsNkH",
  "key16": "2uRnoCriPZrysuEfKVVKRDyQgsYHUWrq9u35XfKgUb7wC9zDggE4vSEXX9yjW5SjNXvzQpvpYcmbJa64zRv3mKsr",
  "key17": "28batHuZmnHJwJoebqgovUAnM5Qd6LdqjjWAuwyyycLKjp1mYs4vzxqEK1SQQYWiChi4DeEf7uY5Yz3k1SgLXLkS",
  "key18": "25aF1CVLLLdYRL4CKYq88jZZ2HGxsmHhxUEvCDcYpwc8cWh8oSAv4Pknj9Y7ARgvbNudnhJs3Gos3QhCuBB6ZfZF",
  "key19": "3grvNwSDo7qtGGZxo1dvzsDbV4zwSzFVatCzSEMHhqWHQcxW6pJgu9MQrqQticpGdGw9j7vXtrDtKkzrEZeLn9uY",
  "key20": "4JLZcdaqAYMsw5fgGTuxwTZR7VzCKAjDo1MDRFakWjzZF8tNegs4DJsid8hwr8rnZPBXE5vxTgwNwG2fNH5cYwUP",
  "key21": "58Q1wgMKzEg5wXJX7S1YXfxxqpRSYKrJXk8e8tfTt5Sh8G8q23wU4YtVTLPrADvifze721o3pxW76M4fseYx4W9t",
  "key22": "4hL24tiwgY1A2mWrRzCp2yeY5VXAKn8jPfhE8yQHvxr5zJi1TxSmRHbpnXS131a9cmSU6Hs6DSb5mfnK7SMCmyw6",
  "key23": "5qw8KQamUVRrGP47yUEU7dci3Vt9DRaKqF1vLeZfk39A8AAmuJJiCEH5tGvY7rjrkaxz6CNreJDu9WSpdQxxCAUc",
  "key24": "2XgjhXzrW4tjWj4NM1heD7F3aKURnwZQuxHY2CYFK4Um8siTnU6D7oXdED4gdLJthi4ZJKEJNNuwoHHYjCN36PiH",
  "key25": "4q43dMqwabCZvaf1JqgksFgX36Pn7uaDpKDtZAw4zBNstKS84ZTpTaLRRn1DQBbtw1EaEXv98UHdq57UVPNsxyYM",
  "key26": "48LddzFj23poaEX8zzZFy6BpVNR8PXAi9Rx96TjFbyxDcMQZV2Ch7P6PhWX8E4NvyhdJCZaVq2FHkpf3SvDq1y22",
  "key27": "eejv2f5X6WWw71dZ86SKXdWqEtTKm7VqQm7QqbrRQbxCNE8LxWapCj4TVMkXDdrgANFKSpbEPFa4jkxUFiTfh2y",
  "key28": "45WrmZyohm5AyBhAJ8ee4LoZbTvpkyEeZi6VK2GKjEqrdyKqLiJmpYRQRNYi745xwV93eZNAutkvU7mCnjuaTcgH"
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
