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
    "2aR4JaXNLumN8FhqDQdmtJ8x8MEdVD77UJysgVTUkAi4yCGdnbH2eyFnUdgwESiE9nYrdw1nJQAndgAejZ7JqPLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tVaAv5NcCse5s2AzRKkpZuucwjYgZzPkYsuXdTSkPquCqsSmXEGqpdp6faUUyuZYNfNJ5aGT1ZdCRhEy9rRMTf1",
  "key1": "3NdPxXJsaLQLagqoS4s821imb2FfD2VzdSFujbHNknLLrtmBaWbZ1dZjpxf6nx7nSS5TBCweEtq6eVt1YGefyCWD",
  "key2": "2KDnSHz5tyxwSySZQSesBFVcSdsbJgjhzSCFXSy2js7eqyBiedxTGuSfdTQY4i9SPD4uTpPnGzfjRKFagT3VWgFf",
  "key3": "5iYQWKokcZHfnrH2eBQwZXp3CHwUoi36Qub25cA3h2WCeLhRo27jgoL8Zm6JDPgu9TiSFroyAkWsMzjhzvyBR9Ph",
  "key4": "3w2kZVeq4vewHo86M4HMndpgoZYSuFgNa3ceWkxpwc8cfPGdQ6a5hZTCSkK6ufR7C7y3RMUYvXRb1Lmy65gR7EvV",
  "key5": "2TgGniWcAaKAcDrbPf22uc8iZSyBCuZvmqAWnuYTdDKEAtwD96sJjW7yhhBfbop3FRsr8MNGkS5ZGCcREgYzd9AE",
  "key6": "52wMycxwVNbG9BuFU5LLXtYDNFoXvFpmDmdmVuySuygnWNsP5ufDEHJv7GE6CnYxKBuqpuSTxKDj2bwcSekhxdM2",
  "key7": "V2XhUUBMMrtTbg5arhdqQ5BiytuTx6xiZWxBtSXCMD718Rh8oNoM6e1tNdBatxtDgq8kSp3GN4yKUyt7aBMCPQT",
  "key8": "2BadzT5HZj115fEoST36EKAy6iRYsiQVpJpLR1AjUmzcH9L1Bu23a3LjfLtBNhR8SGqrcBdq1ZJHmWNyqyteEZjY",
  "key9": "5qFfD8ro9GBYetkoFt4Gw9qvs6fCdFfQu4EbFCJqJehynXwzZKX5Fj43K45FnHxc5PQWfY2nkuGbbpkV33YNjPmZ",
  "key10": "3NKyNheYYSt6h26Qnrpa5xht95ZibE2h4GADD7c9eLxP4BuUQ4bHZu2pBkE1vZrNvhv1QSCaZroqef6nXMyXhyCD",
  "key11": "Kw9m3SacL2UfPpxwPVbwtT8Km7dD4tZhxgqcdBRWPcaMGhkYbakB9UJkuXgFmAjBb8JwPHNKnfc5fwfHmLouuUA",
  "key12": "3rBa2rmtpwQCBEkYGsYz1Pe1D8Zjmrkp2ztKXqtYJPVDQrTdj1biHmVYD1PhKLU6bqtj6Kj5mU3kQ6fFr4tJmfqT",
  "key13": "3zNm7tccKW8VTaXs1Ha1WwBeZHSpEBMq5pBVnyFURwyGtTW8qLFtTR1b4ci8doBBTNJRoaYK9YXwm5T2ApZDZ6BS",
  "key14": "2fQekLUpnychhhfWqoNmYbhex8NaARfFvdKkMyLkCvhotKzAUKVjUig3Zo7HGQs5yY4zc6iwRw8bmpHRyvnQuiTX",
  "key15": "3sD9YBgVShVHxqBrX2FbA8tcehj49mk6cvn3BXHd3jQCwijXr82MR7ubCz4MrS3E5RBNE3QuaWdVBDxepE6iWme2",
  "key16": "3ejdVkuFTy4w5oWmEzCAagbbKLYVkUEQ8j28RusYCJS9XojX8NaWzWqC91cCkA2mWE1Jj2w6hssASu8akc399deZ",
  "key17": "kPCaWd2q1jUoceKYb4v8XgXTZCK51yjybibJSmdhdhdSYsvJx5SVVyr1Me79qNqiUyyvyt76MrUWjThvkiND8tG",
  "key18": "3S7FQ2fqkTYa8vGHiAZHNvQuxA3bi2679voZSiTTsomKB7AAhNVaxmvBxj5S1PKRXmj9NFnjEfjX7N45vuXPdejC",
  "key19": "4QS8H2Nx2huxGeyk4bB7d7nymfr2hpE29zZPDJA2rTYeJL9sov7WgfpW344o1JNidzQA1xtm7rTnnJQqbF3doJoJ",
  "key20": "HhpYrR5wvEBZ3qUwEykGWYLZG5vfv7tU27wTSMjiCwN8s41GMS8SziKPJHVbmdFqJCJHC5tLeSRQrsx9sUM3zd8",
  "key21": "t63SHhChStkSwBJcRT25YVvyWhUdmwEoL8n3eCuMD1JbyFBnrsHzYUjHDgMTW6cNtAEwA471dtHNorSvGY5y7cU",
  "key22": "64NZVmxoPxCNHQgRyV1yVa9VUR1CH3RKHxQEF8TKo1dz6Uv3WNfVafML39pYyrf96P1jU2WgbccHvCSTXiWPCzjr",
  "key23": "5g4qieKm77j1E8hyBN2AzRwwS2er7DpL8XUxMmotXZRJ9nHbrvkjUfDF7jsg4BcJhevhueE25q2ffSNqMLhcLkFB",
  "key24": "5mNxiWRuW1fwmy43v1MPcqsyKADtgxpdBaGp4cJBcQALT8zaiXXdPCWdvQKHo8io7uum3ruXpmdLiQrs5XQDoHX7",
  "key25": "5DZ3z5iasKbS2rsNKP3QrWohggApoFNBckAC4nXT6VQEWaGZiVkfSGy36HU4AgGtaFH7En3G8vQhN6vbzWkndXqU",
  "key26": "2vpCijc7UcjwwFVhFqqkM8SzEp51o5MSwMr52aBVZRy8YzDw5C8FfeVf4UtSKKpVA6NEH3doSs3AmjLDNgtUWLrB",
  "key27": "2d3jqbVQuZrXuwAbbWXaweP2EABToNkPkqjw32KkRLJrrwzLRe744tEDTGNAPg4pLFjHNfNmp9xgYQKjF5dkE9PZ",
  "key28": "3fuLG3cyfs3PzJGurD1sBuZtE6uRbue5SdesaarUMvwJDLUZEYvDqWnzFdpCLnrhG8s2PVEoA7GW3ry5T8EyjWkF",
  "key29": "2r9mbnvdQyGo5wz9gKmSxC7afa9BcApxHgcRPP8RbXa7TvbzzFazvYDDF9pgFfXncx8NZtPtXbgzdYP2PxsMyNnW",
  "key30": "sHjqWSnqP4vC16KErWg77yCuSoi97KasnkHrwe1PyWEhKB4AG9fJinqGtAqH1zYPRhCbaoH1qubVwHikHkMYFWi",
  "key31": "TBWPaEycAoXoKZjnyDgzC49PicAmzNxCfDq1Kh9LSmP7JPxHC1ZEojR9Ux8aqvvKSLSJiBJVWjP6997QUxijWdg",
  "key32": "24AS78D3QuK3DB3CdtHqgEeLgmuqnouDX99XzVzer66ZVqntre9XoSJTKxVewjyvMxeT3U51QiJGbtr4f9dNtyqQ",
  "key33": "YvotZGBZ6uk7KTA3Qf8SqZ9kGThJ6ubRxhebKZdVG4Fe8QRWxYQznSFfQofd3R2aLfSspWBbjXjv8SuzAZGzT42"
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
