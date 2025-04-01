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
    "3kqT45icXwpTZt5Aas2G29vXpzfywjpexc9gc5FhPrKR7ZCMKCVTZYXdu6j6drVSy9r2hKnd592skcdGa59Ddv6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y6Mx2TwDM2o8PwpPBGyN9jVUa1P5CmAz1xJW96CMX2QdMunxMD2gZ7efygF7dDo7bHz24Y1KodVE47KY7GJT6p2",
  "key1": "Sh7WUvPRTuxFaF3fdWuMJobDqo4a77RP4yGGm3EPUcmykdTGuUfUG6XaPe6iywhc37iW4cXGU6rCkxy991Sq4dt",
  "key2": "2wPoesnPvpS7cW188C984CeYcW4dWoXmc4e5VMnrceiBAdNr2RbjdDUQiAQbEvkEzWU6CdcfKV1t6Lo5MqkGBzEB",
  "key3": "43hXygbGw5UVE4XJho8sfd9tEqLSBhKa1BDnffhc6U7jSYpexumvGDZb6ozNf4oj4GX5di1TQN8PQngHfLKcbYoz",
  "key4": "281K5xZxShdmeuT2yhuBoeNdpAmkm14xmQV8xTnkW3EfAGr6AK2ddNb2AABQjYqRbBgSymNwwmByFjTsPAoJJPZS",
  "key5": "3mV4XvsmtGEx3owQfGKvAxPY1bdSB5MXCDFXHT51YoUmj5CxNZvySJaEvcoZTQoAxYTAoGaPBEotFwXQtUacpQJZ",
  "key6": "51b4AuT67FzLjyg9K6Z6sAKv9jUzbcBojQAsiBFvmDhiSLAyVQ9FHGvTgrh3coG1FuZkkA4nVK6NCtxVSqJLYQqr",
  "key7": "3wSkZEFQab7mjjt8PTSqky9Ry3T4eAqJWZahws56iFczjLiSSxKBKs4yw5tcx98agViBU3WE8NZtapw8GkunHC7x",
  "key8": "5JR74GZtN4emkAN5myQJYUdwxsMwq3jprgH9bD77ohfuTH7jAE9wX9R7zv5AVZFkNYWYipdzd44GGwRuaXLgKc45",
  "key9": "44fyjWndqYhCuPUwzgv6qHsC1VhtDTQwrAXrW5Z9uXA2WKDkAGKpNJr49A6NzBhpPdSXv3nXdBewWV8hzHhNMhxp",
  "key10": "4QKZKD99PtwiwwxusqZBq83Gq9aV8peCJSv8pyzUb3p2X1x9J5gxrcwNCr4hXJxJutEDwnnPiCP5wbecoJsqGLgd",
  "key11": "2Ro7Uz4uEyRMUKkras8MjDx4aBbHF9BKNumfBfTKMyX4NrzzZWLRSfuNPReRRi3JJMGXoc7stCq75C6SS3PxjMfw",
  "key12": "4GkeyF3DfRsgNymGpUvJyJ9yDhYoZwsZDnPAnVNeF6tsd71jJCyuWkQdpHcZHX6wtbmi8EjdPXt9ssEbXDjnzGM2",
  "key13": "ZHgUwaipvoDdcVdAXCAriGd7iayyMpBJR5dN9VmqbQyi4AKXx6vaSW7u3DJNR76srbDin1c9vf8HgYdGeFb1JPh",
  "key14": "5nhRsDWD7TirR3Z5eKcvYtkYxfXbFBVg1hjKYnQ4DuAsGPxBrNkYG8fPXL8MP6DcJvPiKXgBKkzHJcvRVyWXKdo5",
  "key15": "GZXcwV34i1B24Dzwx1dUgNgvm7iUYT9SwdDU8Q4qB3ygiQQXzdQAMMLfDihQ8KwPwnDujBwcezuTfhDQ6X8N7pp",
  "key16": "4stdZgXookWAvUgWHZ7zuB4J5VqSmfFobwTyEptsyfTbfApyVbKi1F3sWXmEBHeQJ8RycgEXpcb1nUxmaqDdqMpR",
  "key17": "63zXjCoDyXm4ZrHPoqt8pqmeahsG7TwZfSjgAb2WtCpPCc9L4BimE8jRECWrs3CMVP8WAUmh8A63V2pPTtHxxG3y",
  "key18": "XLk7JCraA1oSBmQR1hNft4Wykg2kGHemqP4VST4YGxZsadgNcGngVrgTxKstiKpjbhgT9NW1e1A9VpviWVYnDRr",
  "key19": "3V8PV9Fw77tDdLVuz8hyG94UV2mPqxgREYVfTdxVmdGkUH4J4ZLKNoh174n6ZEVhWeBLXKpXVdhUt9TnVHJ4cA4H",
  "key20": "3ZiysFrpfsjQVwi1bj7eFyKFGmumtQ21KxMYYipsSewCFqGgf4MBxGmkufHjTuePP19HgkJDvid7R2rtRyvfTEb1",
  "key21": "52eBDtiGxvEtg1UXLSgvd9hQhg6AwQp9bcZqekKmJBHGkauMMJV9wYP5GeW6Yo3GZjWPJbzrr4DMbq5HRRExV3Mv",
  "key22": "4FtCyceR4W8U6MPmZfdoJzZ9uXLeb2WDTY91BsSSwWMCXwkBWsQegEvaDLSXynWCBN51LBoMGMNyGk7fSifAr4b8",
  "key23": "4C9WeJkA2cg8KUYnmSE1PPBhw42PH8EJgLWqXBZ6Z7sVrdRioRA53BMPsfERugyagu5L62rHhLYS6bSMm1EdXcys",
  "key24": "5GGsKP82Nq3RCSejFVnKY3aYPTopjD8q1aPD3zL8qcmuwi7o1Uyw68NH3aym4SqToyW2QTL2tJ8TW4FpRPtSkKCQ",
  "key25": "LEpBGt64VMuzYwqSHmKBTKpfVuXWqk9AXkqTwhrHczZGEA1FqL5UJazjh7g7yH3LDNQRrXSuftWNka8rtoJxvbr",
  "key26": "9z2aW9EMagfM9HVxY1RoyWhgm5rdBD1FhPnJw7PRZ39dvSYwW5id7EeP1XzJd3LYBmvfiY7CiLeRZMbZin2pXih",
  "key27": "3mFknfaFP1hC7N1FdDc6GxhocjwmAndiYndP6swLppavMNwJ7mxSnZULrin26Fs3448c6W2ZZSvTLtD4T9aBy24s",
  "key28": "67dvxTDpM9rdjqwzqWYW4UXq5rjqzfB8AmcA7D24QQSHudJmUbFfmWA8fPEnat6SaUg6hS3wQXr3Zxrb7YFEG29Y",
  "key29": "3Q4qk5mMEX4T3dk387VfybRR8thSU8AA5TSScVLeee2anDhHwLV9SJmUp2j7A8L9orxHsFkWWqrFTWHji35gYUsQ",
  "key30": "L58CnqovkiPiiHdnSGCgTR2NsAzLK1X9j7rUYxQTQzR27xWDuY9WGmF1x4pJ5odcmfBGsixVB9BJYxHYSvc9CJS",
  "key31": "hmo1uF8H6a2iTQUdxDVmUKAsVjmAB4iphqbjKTu2hSqt5b71f9km5JysmonFDfcAVWZszCDqHnen9Y71Wub8ktj",
  "key32": "4vew3thg84MsGkEVpmpwQj3wDfw1ngdomEpbTZRtGm1u19KY2SY34oZcCHS1frwaFmhRrfekoYm6v3Yox8noQ2zu",
  "key33": "2bP1E5jz56EQBDGWDC39V2StXxUG81aM1XaZqHFNLs1nyeAN52bJpvW46DsMAV34LuqEnTEekGxpjooe8zRqn5v4",
  "key34": "3WbkoSnt78xvwWkPyqH9WixNkaqFDCdHKGQHr2rJczMEdkfuKfUxatc1wXMjQuXmCbt1sjDBCosiF9Dw2XaiyL43",
  "key35": "XAEA4a5cip49d6YrZVAvPykdKq4XgArsd48G2AdhiLBmVN3teND4KWCSf7NSKYff9wZZ3hGC1jYmiS55Kd2LCmg",
  "key36": "5bPfXZ9vPrm3s6AxEEkTVstmce1jbrAeQ2Vr6c6A5RPwViC4GkhdYMwZs2kcfUsXLjnK2CkQtvfz87q27Kq8BAVr",
  "key37": "4jiMMmZZnMbcqJQvP4pVmrxaPKzQimjw2KKsD8m3R6ZCg5p5Y7ZzZ2eFumwZs7p7g6UbmQaS2HZrTDDbbc7m4L6V",
  "key38": "2zZDWhN78NSsUAhJitng1T6v9cMUhADac2DK6gPQfAcPnkLdCkShG3y1HzW9QrTGoM22UDcGZ1RXzNwCpkMyb9nd",
  "key39": "2pERVryrYXnbM85QH4pVD2E8JX1mo1awM6zv5yaUdiGunXBg7t7g9pSWNZGCHiGsbMNGGcac4CsFMybUW1vw6S1J",
  "key40": "26kX1QuFpkGQtEM5BQZMGgnnWW8AkV33iwv16NhGgK3vYVpq4b2P4eFFQb9kSRad7uaJ3CX2gbVMsEDp8kYkneQu",
  "key41": "254QiTBAHAHpKJuoZ3StSBXNnNTt4vfiMvzfD19wRQ5vgps985nd7C2G6ea4kF8X5QmoZaZb7JxCZ6JapqoLvjZQ",
  "key42": "3XZZ2oYH27GRjKprWbjAaifSyX7GLUqmMk1DE5YmRTSYjVNGUBZvwEqrDcTUrHJE9EX8VSt7xGvvx3vEozJn81oS",
  "key43": "54gZFD95JrUhC29gz2a8J5hsh8nT8G7b1FFRveTwftLHgruYhDtHpjngQZj33KSpTj5KCuttRtrXMMbt2rAZyqyg"
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
