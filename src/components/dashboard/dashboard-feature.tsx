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
    "5V3UQYz7XaZCpjPmF3XjbrFoeqarCgiVSchabU1WH9gZ7kogGbRXTbejzta1iwHW7GYskDGKdmK1p1Qq9fwSDcxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cvLTfPWAAoJsnaJXt9SRWfqMFRvXqQzRet1JQHHvDFe62XhweJaCaUCs4Z6Cf5SGxkiBAeRCy2XP8DMfkU8G58q",
  "key1": "2tUFBxBahKeS8yxDp4fiXkMHErbLfsNRtoacm15CVxGgjuTb11HtHrcXatZ1tqNrYpoYfDi3bjowNxfMzkHCS6TT",
  "key2": "2W8s5WcMEaUhqQyjxj3EJSjRSsJNLbrgbAx4BHsaLeXgghE5GgAXPCkY3zSV5b2xDf1EZErfgBZWRWNaVqMh9jD4",
  "key3": "5FrBhCMcidG9q6avwXtcXdyjjySCcnjuAyzwg6whNS3428skhcePe7S6U3s4B5gABWGLGQo7fM7o11uX6iTGWH5n",
  "key4": "32tnTEz2pAFYe8wzmSyv8cgbPFioQ5fCDRpD93HyfQ9Dja3JvnxXzkUejjuVSr4rpwLUUshLG7hf6HtRGWdPQTfc",
  "key5": "3bvSRiEana5t8wd1rdoppzoLszUd5nfXpiHTCNLXySgHzTtuZXSK7bpZxkhyPa5i9wf5X2naCvNUzeKQrKNr4sSY",
  "key6": "jDyS1Mv62SzwQJryR8rRMFDAv9wViCNQLhW4RHgxEtSeHv64oX8Nr7R4PTqqkcQckL4LXut1pAVvc8AxdkF2quf",
  "key7": "4KGYMGgFWH2BXoPBvfPEBokhfdPYF7Uyye66V6sgk83gRom6apivszJiDSGaPVtqLSu5XQaZVQWm44eFYbKsk3aP",
  "key8": "4UG7QqxdQ8NW4vwykEvZJP8ryRXNEFAeyEfW1PpAcNoi8NN9xUWBMzstThBZmAXR2aAjhu76xdVWaUQbEHJd3cRo",
  "key9": "47Pt6rk4pUnSV7cgBJ8XuEvs9mxTmKY3PNQPnzfeiSprH7xfkhz7bU5rqBXe3ThWWW9zjqB6iXLU8yVRQrMk1cSj",
  "key10": "2uSfzDrFXm7cUoLmMgVrNhgZvdEsrVJk2PsHcNDuuB9TbHdMHa2Px9guf9EkEKmQnD9QNFHtR4Xo7Z6AGgYEgmTq",
  "key11": "3CuH4hBJNchgNde4vVQgPqWtFMNFjWj7Y5Yi1UEYrLad7iN21FXoXEEMyU5z66n8SdM3Bkwub46V2Zu1YinCoeq1",
  "key12": "yu6r3gHNU8wKyt847j52gkGp5azhp2DgVCVKgM9wicsRYsBkrtY9q8PmqVmBbKXy6mtLb53jde7RDDC5mQJGkoh",
  "key13": "2GugLCjFwcFBFmzvGrWbx7WY4Y5RgbhD2Ph4QLyCwyeqZCGawZBUX7et6JKgr6pgJsumhpubvb7JxzvKEK9Tma7F",
  "key14": "3XJmHnCTVfeQpUPscyRaiT2HKdvGwvNfvqGfTub6VTzoWysudiz7S3zSiQp8FN4sKqS1h6WrNwY9ANiY1wjx7oPP",
  "key15": "2SqvwuHYhkRxgF9K5HxRvQgpwnRNJdzhn5adnn5Tq1ZfhtRCknj6EDaZFdrpZRGJZAearyb7knUPmX4CrWGb4Csp",
  "key16": "2DC5oubW528gNzeSxSQMkY7xdxaBgHYyX8zgZio88NRvGXuoKitWVK9zEbxfzExSPdsJm4aCZTzQikEGnJQGkpV6",
  "key17": "4Kxx8FpHUMtEyQCg65zA1QGohv2y9zLsq61uj2PoWN3bwNDevYc2FSUqnDkKBwCwkjJ7HHLgmhjfxEmMUTfTYKwd",
  "key18": "LEdkXAsjgZXw67BY57i2gyRrx3AWLGQuLTq7K3kiQhFhkDyj918355DUjxd1CxYAorJABSY1QXnbT7K2QggZXxP",
  "key19": "2UJoZvQWADw1Do2QqQG439KKm4tqrVrTTVekFdSHNAtAds76GV8q5f7NK4Loggr9D8znQAg7RJCdpgk9VpEjRAum",
  "key20": "kv3pqE1d2nFCVxFhArwdgbWziXXa3EPFwpXEe1X6D4Nsi4HULwF6hoLiScMikjbKAbQNjqWJfiVpfgUxzKiUHhq",
  "key21": "4vZ3uBytNtxZVk8iy3vM1GjB7eytCJik8z8quhTpRpoaiJ4gwPrNAx4LGi72PRsHqaNh1innphybxGGEKmvj2FZ9",
  "key22": "4WGA2C9F4MXi4QFutvRBvtFgp8DmUu5Ppwrs8YK5SVBEEU1cqPwWTLsGaiMBTdzLgLssDBjV4Z1WP1sWBcUfSw1Q",
  "key23": "4rHQn9FV7Shorm8skYLCGn2yrk8EbWuBMJ1x2sK1TdVqLbeWpgVDQ83ibJPJkW5kSKBV9QnjStUKpnid28WwUTRK",
  "key24": "3MuS9A7ekqfRbV7n1YPpAQjJ82X1SNxWzoQBvKxrKdGgde1Vobas96XfEamJ3MdXdxE9g9WYbJo7ivKTRgqCBMEq",
  "key25": "4TknkkwT48cdhu7ufRDhd2NtK5tfQ3wuuMZ6ySEz99vZETo1N4Uh8EY18nsHQ6o1Vy6ciWFhPpGGzLAhBxDqT6Py",
  "key26": "5qnVfKfAoVV5qFqHKaryScLKNXZUjZo1SRMeTjL7KpkmR37XTAeT3r4Q8FWNTP8F1oPVLW2vhkDbUKCJDwCWyo5t",
  "key27": "5YrDvTeVYLZda8gKRzH1pBoEqRj3MVRJKvCzFJL5Ajo8YVfu2TSbPjaa5DzcfipMBQGsnZpYPwWaLagaJPMpo7tW",
  "key28": "3R3iGPKnj77F8LQJRqnz8ZmYxUHPtUFWGsYQQNEqCiRhXiegZm4RD9G8dzaq8K2kU56NHVbcArVGu5BLkhaLZp3k",
  "key29": "4sMfpcX9pxVPNThpqkMLqUjHx68ubwxyFHpocb2JL3TTRSUWC8vjC9q7JP63KZmgxYCR976kQyQWLH5xAAzTy69S",
  "key30": "4ZaqX1NuMy4hHA87wG3oqwx9cay92fyayf9ha4ZVNoF9D5soD6bP8AfTgQF6a4okiQ5LN4USFz2KVirpmokmJWxM",
  "key31": "NTdWtxXqwrbt3DzbuDaNeFLBMfpEW3k6BpNVWBbi1EKHFm4wMBhdR9q5X6SagcXooPaH62Ry1NAJJPmTYFV9VaN",
  "key32": "46ZTVeZVKcP2q96fra2g2SjjgFckSkEM4B3fAo662yC9wq15EtsYqdCZN9BKck8jFGxzXgU92dWW1SUbvBMEGyzH",
  "key33": "3gNTH4HjDdSQq3Fb62pb6nbdirXTKE34GnHi5nbXAzwoskRJrtd9jEHZ7rejqk6xVQqAS3FVdN8vwHyVr8n78XzB",
  "key34": "3kvti4j4bNfy7Qx2zShdJe3kALoS9JeQXCRoxRhuZGcNkAbti7NJxvTt9JWfF4z4E6RwqyBkeuu8qeUb3sTHuy8j",
  "key35": "3ek4wzvpY2rE3bYfUfTws14A6fHbNKGRoGiVn5Eqk26cS3AGGg82x8kp77u6AZcRDYY1qZKkedyp4AgGPNxd9LiM",
  "key36": "2A4yzd7NamZ6fZLywux9bhm9rNHjSRwt5iTb1ZXwtpy4NJnjzrG6VebzPEnWEcqoZw38b7qk7uzf1iJqt1vb8Scr",
  "key37": "3tHFgr8PRfzfeXdzPXJjuBqrbXeJJ1Yt99c8CsFZzX8rbmuraXUeAZoFHBh393ZTshT3E1UDfEsS8s2mRQ6EqwJg",
  "key38": "4W5Kaag8NrjQH2ZB1TxTAhmgNCFLtqU9ZMnrfxww4yovbbANbEoHFvWW59DnBnRmWxXqQPLP8gARTvniMJc8ADPT",
  "key39": "3uL7te4DDzwTU89bPVk9wCki3ujbjnHUbVaiuCrF7zcQ1iNzPw1e5qZUar91Q75BKvbxZVS35EWcsGxqTJ6tGaiB",
  "key40": "5QJyzEZjnuoYnKz4s3AiqvMBuMXMJsiuPM6gcG1Jr1SPaSxQr8pNgAkA2p7vccsP9Bt7ZRuyF7X9gY28Ghh6xY4d"
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
