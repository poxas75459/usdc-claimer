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
    "3KRoQxyKkCn6NypSDvke7krfPJypgtqKcmgLiUiEYTrqBjXvNTdqCPBVaTKiLNH2zrCLfsAeWSNjBJUdAniHciha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aWMbHZ62SSwcyGCaQxJBeyazu3Wn4DmYTEUBS6YhVZUrtPGiu1sH7akAkT25RQeoSLWMugJL38zMLquZ2yL57f4",
  "key1": "4hiP3oPiPp4FMSWenLrfWUp3krBNNxLy6kDZHRQssvBxdAyzTQ3qFtpDu78p5iVGCsTS8wNWKNtVrj6irHwjBrj9",
  "key2": "jj4qVY3nqpJYkBWSD9nwmjjJ2JtvNi1UVqCGtkM5s1pe7ErGdKTxzeotJcFS6opXJF8hAJbM99tRmYkHJd681aJ",
  "key3": "6T94ke7dB7V6sLEi7EN9keYbnjDLYWcAnVywtWQHRXp1gUzWTEXqDB4kmUQp2dxq5CSQQrFUjr5zJEvXGmD1suW",
  "key4": "4K3N8ETB5RXUgz5tHE5KGDd1FY6LvR38Kt59oaCyZ24UzKU3YnkRXDzKA55LR4ZoPkmM2qG8DJEhuHDgGXaseyj8",
  "key5": "4eKh4FUJxPzwRUf2yAJNQ6PdteXbMxpKBdPCehc5L9wvcKXbjiYLvhTGcUDU1RrBfG25JDiDSoFVyBTazK1Kmm7n",
  "key6": "4jgkqqhhdyB8YCkAbJxQWQCfFLSFBCzug2U2u3YS5PUrKiBMqRzA47bpeFboREEW3NoZkUMMBENT2jr92SKUiVGt",
  "key7": "Fk4rxLoZCpY5m4xMuG9gjkwBo11oty1RwooNtCa8GzsvTPPWL4wS6EK5tLoPaZEaQAos288XTzXvWbtXqQS5Sas",
  "key8": "2g1H4smZYNJpfVBuDDhdXB72Yys7T3J6uNe4WEiTqrqivHpLzGGBcQxX2m55Z6ChSnK59P1AokLd2eBL7GiivDS8",
  "key9": "3yScLStdgbQJJoWrk4vhqPPwXSCh4zcE9wcBUwksTVSFZoRnFLTKQMV2c6dMpBYCH4oT8McKw21P8Ar142WHUSGm",
  "key10": "614YAStumTf9A1D9gMJPQgdhTdoqXSaWeWn1ksJiT8q8ZiADbZarUKwo5B51KS8DV4WrSosKDJbpwQtChSB4jj1D",
  "key11": "3HToRLS5edCM79CnsaNTauZaisw1P73RkXdSjPVt4oe1oLiz3kFQHNJ1hzR21c6kwBF1kS6xvpaUic5NPzW51PDH",
  "key12": "4xrtBfkv4t8XTa7Lvv7LNTd9aNB2CuNWpwrRaaiYkegDPUxvx5STicQJauPKapg362uxLC9xPGwmtEE1J2XTCqKg",
  "key13": "Sh14aNUy2SmPDE8n6gax6CrwtLYpZhUC6y6zcS6pNSy6sGgtEVqiL2YmFJx8nEjgFf6Y1JV6jpK98qtL29fSDJ3",
  "key14": "56hgydbQVJMuTP63dczyKd7oz759p11EbpzdJ37iGrhE6eP7pyYHX2xKz2e4Xm5nHHwSQpofmHce95jwYbbnysQF",
  "key15": "5kvioMoJbro6mCyafcCLyJvb14vroQ4LuzWcCAvXzphSHm9rQRLckn1cwchXit6sb9AV31TFfD9zToNAkBw9sdzv",
  "key16": "4TjpPof1g9qvjYv7cu5h5jTHrBk7VbyyFFvezXRMNAaDZZ2T5DKsrjwoxfELi7HZFSFg2YmeHcT8iqVRZeHE4muH",
  "key17": "4NYBG351bkCo8DNQuKhjRvUJEHd4xeGkxoWMNGtwQLtXj2Ug8kFeKReKzW66HsxqZUmGsxVCnAH8uSPXfz76PApm",
  "key18": "4a2F9hb17szWociT9CZCojQWcQuLMigCZVZTph2ZLDW9ywgHjGufVZvBZQSp7fgMqyV5x34Kdwou4qgKuRHfAxU",
  "key19": "3XH6Db2fCLyAfPR33d5MhoiUGFL8aX3Qn52E2ZBxyoVLrFCSXtA8ArTj3S3t9dLEmLJTpXonTS5XjKQo5SLVEUGu",
  "key20": "3aqDZKB3bfmBwDWshfYZeonfSkX3TLBNBFjrhPoNbvz86TaDJXpq59fnrZVrwtpoZfVC2ykVFRDJbE6QbfWVa6oH",
  "key21": "5AcimGy2bidp31j9NJ3kb96kv9tG6Y7gaKEsmAgXS3Nys6PXGGZqjojx77sSbARj4zNyVd6KW11DCvaDb1hYg6Ue",
  "key22": "3qP8tmk4MNPYpAXTT6bxjcTiEnYd915RnvTywD66jJCNVi1MPawa6gC68R76RvvhqwbLvWa12T6BGYGT3NX5qxHc",
  "key23": "5YoHngYyt9V8ZGwaCPq996U5wy5d1YM3UnME5A22F85sYPU4a2Cx8pUEKK6pTT2tDY2GVM5NWCkiMVeGGP1YcnTX",
  "key24": "hmJZY7x7CKsLuHbTnzMtf2GW12P8W1h6G1Z4Tdbb6Zhf3eGmsC3r5ug3MWu3qGdVVWrzf6oWqT3bUtrXSwfZWnh",
  "key25": "2jMbz1mDoCabxcrSdTfgYN3NPBTpSBKhDGVGuXp8QvbpQCttkhaXxEUJ46M9WTEYDy2HqfHswtj5Z7dddTWxmpFd",
  "key26": "4gpcc3cr1uDa13Xhc1dx4dKENK6XhCdsrV6TTLKtx6W5CUp15es3kR5di7NpmjwpoLE6qjG6GDzze58HUt4nQZfj",
  "key27": "71F3L44HwHnAzQ8qRMi2FVL2eWSiwifQchLC7SVN4ezWYaY2Zhr5y4KGw8QRsqsfUE64R1YDTMAnGYDTaoQLsXy",
  "key28": "26QYABYKmWLsvpL1DYvsaoEyM29ospCFK7bvWwgp9jQkm5EzCLR9KnLhd6m67bYD4UHEYKhuuJEETdyVwPbJvUEU"
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
