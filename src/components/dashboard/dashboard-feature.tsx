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
    "2Ao8CmxEG84RkjfHjEHhtL81dzYM5dtuybJx1WS5iGqxfNi51ejT4N1yN3mzbGFxiqwSBJrcS9czqLwFHnnwpw82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VTmnTwJ3rhdipQVzboFYfmVHwT4CMFYjiN87uodQdyuCqLYm54epKbDEPYpbSocCzkkDpv8UbtgpghMin9oBNw6",
  "key1": "3f3UXqKDDgBHXMSU7uJkUb7RZhF8bZZcgu3EQb8z6AcdxLjGVSY4nb7q2b3T5BBoR5ZgC6GyHBFtcckXiQAskmVj",
  "key2": "36PCEUcCcwFVCSWRjUe6WTq1ybzmEbScgsoJ7dEAXcACXeHXxTsQv5gEQkcaPaLxLjFrsKxeQ1upBDCQVHtFJ4jD",
  "key3": "eagu4jrmg7YsfkvUzVgnxH1RR3WKkMweWDTaQqX9LQCGRihs1pA7YFqivbsNwzv5byJgxztTq6xDzfhW8DWp4tC",
  "key4": "3Pojhc75n5Gfhcqsfou1ZXJFVhyXB1qRhJbF4CVkTWpz3y3sNc4Rg4pkUy8e315YZbUsgjeUkfeFh1BsdoaQrQ9y",
  "key5": "AJopPjFFk6FEzTbzP2HuHDbJLSsck7Yg7Q6FGw8H5TsMa2PWcS1JnzSZD1VkdbhREeSKt3M5SQnvLqfWhUC6tvx",
  "key6": "5X9nEPWRie4DHk3eX7U6dt9hKXjSrkHdFrkB8BWr52n6Jj4YkcwaWBitUTLA2g2aywTQSLBuCkPQgUWkxHYekWME",
  "key7": "4zVng5ugo2UgJAhPgvw846e8k9zTw8jSRnDLmKwCKkNhGkAEEMkqzLoYdX6MuTwcYvbb8SVqRBRK4f2ZuqhpPx44",
  "key8": "4otPX9WU9LfhY2JJyB8hvHmMjsPsQiEe79KxGofjhbj1boYskaucgoozaJxhqSQuw72EKJwSbUPA3RjokRCUpEoD",
  "key9": "ZqkPw1vhagjQ1euFLCfbtQi9DgsCEoAgCKsoF1Mv8NjubKqCd7ktjQfnnSaWjVizF6GDZuApDgS48JMUKEdLgEU",
  "key10": "X7MtmpWYG6Ew9CnHdmvGzG9fTMbPMkYevrSeCHdh85RrVnrA82rcy3Ex9aHESu9JDPRNQmzBBGMNkm4cpzHYWAm",
  "key11": "27GsDFuCPbZEDj1onJQgprKf7Y238cioNrit7hBrPfzDUNTyGrBWwSRbjXLF3P6QYKxEK7eNru9ZT3CxUa6s9YVC",
  "key12": "EpLsadHUkeUr4Mkm2Yk5T6vgnarpw3oneGcH18c2pDM1W9gCN4uvdNbpwAuj6Yfhi4yaeHuGyfk548QqbDzMGUe",
  "key13": "FRoXWG1unTeoY5GD3tAxjG8aWc4VPncLp2FhYCGD2XTw4spYTtdSyCFuU9gyPFPFdx9MCUzKjCwkXs2v2v9jAvW",
  "key14": "5vmjyhJYCw3r3SH5dQWzexr9kEp5n9Emi8q6iv5HPsiu2MqcDpnYDCuD4uJUH9FtPCpQwb1CxgC3CkjpMSom6m7d",
  "key15": "3iiHWsNtx6C9VcUKQMCNQDRSMSxUvEV8Wx9U9pEk2bSwQ6uYxdLr8QNRzuf2aMQ4K4NnkdAPERM2azkY8gS85ttF",
  "key16": "2pSxpHadooCT61HJAr3vcZjbNR9z13JeBQ4GTi7gnrBRtF9EV8ivWiWhXA2qtYQtqnLoAu4f2rNZJPfrxTZngzQ2",
  "key17": "2Q9Z7e9aRJaXLhTSZTwvWJvK3YBDiqBhcgT61skxaBmERYcdWEoGEMZUx6c7koCK6p2Q9kfiYLWGdtYQJafxW8bg",
  "key18": "2WhTtmo9epMXqC6qhTJ8Xvgu1vnVQP9ewcjfPqTmfVtjmxH2Lf6rhRaQtFMEniok6Bi8sf5ceyAADxpVxfAQ3r9M",
  "key19": "AGBdZpyCTG2NeHt4G52ESwfVSq6RGrHMgUjuFkBfCPCd6XVK2LemRq5JkHGx2zW9ZGmrEM9ZAeXkBPirnK3GqaZ",
  "key20": "21bEtSRDKn8B4pi67PFiweBi4Tnb6AKPD9jHTrngBKd7a8xm6MG78mY164nvuJgTpw78DPBPcRL7F6o7eHqB3qA1",
  "key21": "2XWgZo3B3gDmxST5p9R1U3SjKAnJEaD16HkfwfiTrsbgkhbFDasDaP2XX3XVExrZyiW7mMRp5yLj4ftSGuoSJAwn",
  "key22": "5whkujERG8jSvQGVwGjXrdk8t7u9jfEkb7QNguJ76CvBCe1k7GmfaMKK2EtEWw2vdREKo8MFsA9FT4ecnacAm1mZ",
  "key23": "5tkxNTbAopud6EbDDJCSWBRre2WeKHDVBXeT4m6CsVBSzCY1HVtjU5jV1nwhqx2yi27K7XrgP8A8tFzsMe2K72uj",
  "key24": "2gsC7KRt4Xxs4iWu2MZZHoTgCSL1UZmoi3JngkV3MZ7cWbjmQwKjebYd6bcWRyr9Q2hPzDRFWJWM1GDjeKxfUx84",
  "key25": "4z7ixd8uhr3FVJjVtYgVnWghtkY4b6anXwphTmEQ5WcNT7AkpmjkUFsXM4xduJVispt3ot6jnVPPsBVupCGdBpKf",
  "key26": "5UUUSoPXcREVYfqXxy5ruXBcb6JjgUebdoTNNXXZ5XQ8KzkPZrowTzr63CYZdoHdsgEFhw6M7VwbYq2qqYibVdFu",
  "key27": "3c72dDh2mf8vPqzFEJkX7jfuReAbLPW5s91xeLiQZ2sU2PGLjT3aaa3Yb1tgXjgkJsZBWebzRxY379YY9LE6vgGZ",
  "key28": "5tU5zmrQ7AvZMQJxfCVoGYfycxc7DTqVHxXpfZvrC4merz3C3YVj7aTJqAzGtMSavj68knkAkruxVEuaVpxqNzWu",
  "key29": "4HmSSetvwDBuBgN4ukAUAu7kRRaVJjL48YJyNk5XYsHJ3rf4oEXbtCKQTp2gbkjqq3Q3G8nzUiN2d4hbWT7W3hxp"
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
