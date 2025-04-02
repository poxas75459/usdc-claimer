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
    "57VUAWvLLzPb5jdzwGuEzPGXJv6dW5bLiZn9Tc5MouuVqqj3VCP8vV5L7GmR2MfaFsUZQfriEbnoReDqE14XZHwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64qipdUiLj6sAbuKFWYSygKsS4kqGLAaf8nfbjdZPeMZqv8xYiqpTujmT2Gnwk57Y4KG7VGRL5GGhCkPZXeU8GQd",
  "key1": "G7TRLQm6fredFwyZMph5a3pjqct9eF9BZmmX6RiF2DBTswQJQ4ZyX6uCXw6UagEQxUsEAZ4TQ4NH5rwrm5SUTi6",
  "key2": "4ZwPLvpEQfcKKJ1HF7WzEhYnwD4JpKmwpRe3dPYVDJo8hpHyVLGkyLkLeYZVo4T6sFLUdUqdTGe1xjrWrv1znWJY",
  "key3": "4xrX4a6SCq4TFY2Hzn93bANVJyPgYRLTcKm64fyTH9mndMVx9gJWN6ETfp124bpMnXYRTgyWNJ755yysqz59iY8Q",
  "key4": "4sYbtywUwqYoyaXpmT9a3aePVrozReKffaNmeySRRpmuuRAQsrwHWYDH6RRgTQ5RJx5VPCdwjpGDXJM7hEYfTw6X",
  "key5": "5bftt8DbyVHp7KruDohagtv7dewRs715uonQVTTqp7sDJ42L5eApMKhkVQKaxzighqwWNTzfVALnxnefJLCpTv67",
  "key6": "2p4XhdUvHqVdnQ25oi5ckhx9bRhdHcTi5CSX7V1S1wgyUAivzf9qkXWKN96H4uhFBkSVhKSLWkBu48DMjsBiBg5s",
  "key7": "2GXsUGVoG2MxVdaaYqKVWCEyBdWp879L86ARZvB7TFN2VQtoxdKXo4NfXSNKx3kaibAzMuF4ndPv79jVBFRcB8bh",
  "key8": "3dZ32hAA1udCzrebkuBbQxCNkMjywJ8DVwvXFhJm4wv6gQFP3a67BHt1FMLVNpav4cHsbRj6zNrkNEqA2eGisSti",
  "key9": "3v3nZ6zkpGDRzn6kwNNdfRMJ5hrSkeVXnQja8EuXMpbFMCzRZ9FjE42LCyuh4tu1XaC4QBK7mkGJMrhpAPwTndR4",
  "key10": "128UkxPb7CLZeQY59qhSRWNFEPb1HzdYYgZnDc5uDerRCcZbBt5nsL3xKBBYvjtXhC9ZjsSCmQzBBdHtYtLgUFWR",
  "key11": "4iVGLrbJW9ZnRDqboQhT1dhE6SiyLUNfWpJ3CAbpeHfcUkpg5ojACwHov45CE8tcCSbqVdH2GfHiLGxTM3ve94TD",
  "key12": "uceyWZSd9Jo3DkyacHiWKMKo8sUza1r6aXrV3LDyydFuCeJDjribDhzw6YHksnJbnrrf79Rhb4w4QtKmq2QK8Nn",
  "key13": "2ZPsb9ba4dTTPXCbHUQMC15KmjtxzZEMsoKtngBrbjMumXxFvV4jiAtvMYkQiWFxyp8acdEaBuUvzAEvK9FB7aAV",
  "key14": "4LHgDdBzqtvA98NU32vsQszcDdq3QxhfVeAdnhqbr1uMQUNWjxEX3Nxvp9hXwxTaZqkFDpmQKbLhnJTSmsikMGFP",
  "key15": "8CNsXP37vh43NmHy5XSeHTe8KvNVqYUh3jWRebxvv9gKj7pbYMmF3E4nmuypjqPd3Pusc2KzNsB2RPipyBtyBrV",
  "key16": "61Qu1JDBMKzot6649HfopkeUULxCRwTaJz8JdmPmHpiVmqmuBANNqWt8vXz4yVNQDcAqYhzQuCjFtrFh4xA1Fnhi",
  "key17": "2DDLafUSH7W88rsngBUEZDnB1XA9N34R2kC67y2x5Yio9UC7DwEwgve4Wkwmx48GBMjvmULCHKYiESMWBDqgWzov",
  "key18": "3DefPjNDyoNtTvypqpbix3tcFfN33cG6LZ43dJHRdqeJS72Fra4B1S61qu3nVfsSrEVzmcM63j3Y5SbcnjmoMXtV",
  "key19": "RqY73jfuVRzuFShGcvJrLmNnNU5gZUsihtJA6vfxJjbm77FUFJAZS9AXj42wFco9NhJfvi97ttSuCksAZJNrKdz",
  "key20": "DMXYoyDNgDJS2mHcQJqTGcCNVsGuYwSU9yLUMoNiHkCVAteqWVfzZNykcJPX3hazJEnK7xRfHu6SRoAgpPCh7K7",
  "key21": "4woUm14yChSqeizuuCVkG1hPMweTUdRcBjVL4Te7MHao6To4XqgjQQBnKm9TG8rdzGr7yxsmchpJg37He5eb4mjH",
  "key22": "43CvsvgNBQCTyp1QuPJDLAxPfxZjtpJyzRfE2Hn4K4pMEeL6N8gRMUvAgHzJj4zcTPBtatsMSMCa9iFzbVBLuYRb",
  "key23": "m7CtU7TKAWzLDYSiZx8x1CPYMSc2dDN6xdc1T3WTL6T97SAik2EexjeqHJ6GyCTqyFvQ2BRWoDMuUAJJc9HdBM7",
  "key24": "5pGgBPVYgdMnJTms7q7rn5NLU2qLtdgg3VNn97sBFr8Cc3YPQDkDsjjYo5YRAtZBkcaDgZ3QHAWfaueTb4vPbexi",
  "key25": "4JpZTeQbxs1kSA9FehNYoG1ZRuqbExVkeJGSkj2Hvp9fzi42kso1jniDVKvDvAcPWCMGJ1kngEHgaRuR7xdsxda2",
  "key26": "5X3yRPh6J4rnFz7JbcxFzJykALJhvio8fAnGKb7gPACLscQhJdQaYTo195dJ9ZTXs8smfs9wm4BjJS6tyTffXvgg",
  "key27": "3P79VutCwWALXVGx8MvE8JoLFC8UYCpFFKoZeJh89wYUyM4teGWV5nJV8Njx8tHAY9eux33WqL4RckcmsWdQ2T2r",
  "key28": "YBf3FTEPh3smeJbfu6k15EKrY1ynadAfMtjE4Q2tvcryDMahT8okdvoNogiBut6hGdLsuoeTVDm41Jds1ZUWLDn",
  "key29": "2NoQWhoxbdamKW7bjPcy8Wxw6soB4KhSexRai4P1k7EyPxMoF1ddto8ntw6E8H8U3PSe5uirpytfAjhW8X1s8eyV",
  "key30": "5aGm9SacMX7NT1obZ82qgRfzHP4ezFNN5apMajUcePQk9jd2Pt1Q5zQNyPGHcjJ816Kfz7VEJcDaTJsUj54b43ez",
  "key31": "5z46G9oJMQ7ka5tfm1VMk7aL96BhhM7BreXegg6ZUhhwsGnfhiexM3hvXTwneLQrMKmW3qqyDdRezSJTRqUYuMc9",
  "key32": "3AH6ZR3UjAb8kKNp55n3V2itFUqHTmmvpCjbr4ydEDihC4bfeZjv9gyeo4CS1RXSyZK77eku2V6zoufdXhTK2Yp1"
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
