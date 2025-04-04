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
    "xKq1sXnFxAALbDnGUyaYcw9DV1ravyVctCNjiAzDiqbexjjvJcBDa2R454WukaTWbj8ncjqSxuxhwjKSBoj6mFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yGXQBriiW7TSG8nEYFpZmboWnMKT9BxsA57vo8eEnofAJ9qTB2JCwKHELbFyCKo5PU6xu4oM9bCJuLW2dMWSCYT",
  "key1": "4yBi1MgHiZum4ZTPsghKNWUyqqzgnwJX1M63iqWgQp9hu5VLmd9unMJwQuSQedgYyFqRywtne5jzLRDMoKSEhCED",
  "key2": "4x6fUxYpatcaCFaVLsQ4kQeQ8AZnWcnksxBUDoNA7EkPfNs8BnpxpsjxXqd1oz6tEP5i4W4u3d9YRRz4TTCVdixt",
  "key3": "3THT14TWBdHFkwfxtBEv2pTsi9svSDJiPQKQAEb9JXPLePAsj1aBRtmhjzwQPhc2eYQyg6af9Wg1BHopniED4xsP",
  "key4": "24UhiYqT6EjAvonjYpizVKCMBm8m3zJCepZ3FZTfaJzif9WfQ9MTsQrc1fJjiLaTL6Bft5wEGotKkjw6h5i3eJoC",
  "key5": "8maEm5zdfgCkp5pvMvFkNoZ445DvYHqebDiPniwsTzDDNTU6ZTGGvHDS9tU7ZJEWEaREYHVGaXtPFxiyonPhZ6g",
  "key6": "2B2m8Qxi7k6JzL6VKoSbiVpK6sr8x9UCuq8rU6ub3EeoGz3eoeoLRA69rFFT3dBp1QrkymYKNVSUrZA9PRL5fzHb",
  "key7": "45QznDusYfds9oKDPnFXcFXs6A6QGTbW6WDZkP4zEMnmJmRHYAeRZNJg1sMs82yrNsDD85eNk6riRzp48rxaGjx1",
  "key8": "41GZey7iSD2NZBmoWsDfGwDJj6nYp3RNPmjsaeyQq9LtbRYtbJt6F41QB9Jf8NMLNAW4tQzvH4gWraQ7ZsZUYj3S",
  "key9": "MFM8yudLSETyj9AQPp15TXQy6z1YZDRWGKtbSnEDk3ZMnhAz4bCf3MberJABpHG3HeWiGVjpHKAbtuu3nyHzXpT",
  "key10": "2pXNk3onvrquafbrGFZKd6PhFKvV8xPzCvoftPEY7aCJfWeuc84YBzsSpKG9Pcwex3KRG3fTdtnhjZUFkJ8zjViA",
  "key11": "2UeJHyyrknPrvbTVEXmSZn4ZWBcvXkUBR9CdumoJmbhMj6gqiCfciMVCiw8motPQR9u2bC8AKWdLNHJmfdTv1qbu",
  "key12": "4ZyPHXLoRAVFoDBT6oZDZKYnCzPwBgFPXUjPYgGU7czMJERY64qMzY8mWzrNhJjTEFQuZSLuCfabKfTHqwBGbd2x",
  "key13": "3xeAMBpScMrYZXQ9N3B5NdS2Zo8cAVu9YbvCiKfNfwts1AHAr4bSNWVaup91zoh7SaCkiAH1QtEFVBx475DZjZNa",
  "key14": "2AhtJMkCuy4WmQzTjUoAVaVrQD5QcnAhgnGx9uZ5rcxeSjjHGT2kF579q28CCkGAfVwyKAXMixVteEKd74iup9RK",
  "key15": "Cf4c5h4HPEserKnM1Zuom9yGhZ2vaNuCPJbeGe9CQwvScJPKa1KBN9tzmLmBPHtcZJPKd8x1eetQRZi4ZqADRhv",
  "key16": "cNucQTTTRVKJ6cr39eFoReyqs7jgYmDQ9dim9WC2z6A75giKfnoD9br4hdBwUD5oYA1tfRNw6re8qgJWJM1abxb",
  "key17": "zqNPq71Cf2AyxGWSMWqmGh1yGdam7Bxn7mGcnSTYtmGURQUCDhN92dNB3HKzfc7u5nQ3drFqt6LajHbc8BjkGU2",
  "key18": "3STYjVUDyzV9Nz1NJe9KgTT2oxySetbt1AN1ZDCV292jm5Nj8wdwUSTtPTeL5BRWS17VF4v82m15bGCqADsTBgs8",
  "key19": "4GLjSJ5fcuhRBHQ2CRLVCbLKYCXwHWci4c2B7DDFkn2ku1wcF7ytxUWDHm5uk884qLx5fBWb4TV4Viy4mFBrx7Xz",
  "key20": "2RSSLv93d8PUPgKRHG44wbMNsY6yyQXRrcAXno7hVAQUTmPsdr1Mz6jGUomm6nuKEXT3AX8bycKbieWfsPmq3wqz",
  "key21": "3NLZiy5q3aM1Dk81Y66oZ9VFnwto1zFp6bNbHQDLyqTn1yLPwF1aZC3BwhM8x2Ghpbrd4376jQYdMtpoEb8FsFnm",
  "key22": "5iCYY4AyqaFApKrKw8eJDBsYBwfCSWQ4feWhC4oUtrA8FSbvVZZoVyN4J5aQFi5dJ8m27nf3pDkvHQN84TqV781F",
  "key23": "KRPQb9hK2Ak7mbmNzSuXSghEYsNKUb7ZtVUbFoVCVQD1QEqe6ffrsJZ6gTRVAvpw7JtYE5sywvfotU7uJNN8R7V",
  "key24": "44YMphJV64sn9RWixmVTm2T4Eibbrnyu2wTtkZR5Ye5zUYeCU8LyKCVWH8KKvfpQHda3PToQEq9F2Qmo654Z4yGR",
  "key25": "5ZkT2zPmB9w19Jji9KmMQUzAd8BKQADKY7Pwz3U7xGdshjDi6FvtnZTvux11TeaW6Cca8RLWF1jdxmcKPQzaKSQa",
  "key26": "4CJqcuD67MQzzb1DehTsu7K62mqJ3q4k5R4bn2GjN6KSPTymrfWY1F1bSLVZDTjyCKzgZqZkLXVrYPWCZBikpMVa",
  "key27": "5WJ4RKZ5xMCsbeTaHF9w4vXehpbbZ3knANmY1PnrtynieMuAioDLCN1JjC2oWWWbS8SVmt5STfDr8XVgzvCpe32X",
  "key28": "QV3EDBwWMbGnq1jWJMhqNZpambwAdsC3Tv7tcf5Gy9X4K6pu4SGCgyu8gUodUE89fdEK8ATs9P8ndyS1PtDpkbT",
  "key29": "6XXBauS3BQVpFD2rCW3W7hgKvLtnqWBBRcr47bsestZCfF47N5EUaZvwNockcKmQbn12T8RtP6xiZPycDPwh8zj",
  "key30": "3fqCnL3Uncpsqt7oWYkJ22kAyJX15snoTyL55wnzCPa77tVGoE51nduXVgqqb6XMueBQh64cfgrD5oTXzkpfj4Fk",
  "key31": "37S2dtLQA4B1ziLWnajikmRV38RiyWPyd63HKjpgUi4iQotzNjUoci9vudK47pyFDEup3rVTcTZAQzS5UW1VDuhF",
  "key32": "RyfK4aCrGXMVJCYihqrvP9WuueqEUNtLmVnPLxS1hyqhtC2zpoSqt4inQfmkfnCKUTYbQxtXHP1WwaAyFF6bX9w",
  "key33": "Zz3AFP7DE7UotkQqP5nP5s42An6AkspHwaCEe6e27pPAB215kV6qniah5zNc8CCBy1D82pdSHgaMergkpS9aJ6V",
  "key34": "3ar9WrsXv8QVULKvjaPKrsZEXQZ9c9PcjiZWc6LYoqeFCfJQQFXK12w1WJ2zn5rvykzHvqwcSp87DS22SaueU3KG",
  "key35": "24A21RpXBKmBiWZRiNtyQSTmr8tJmW4YbtdBGqX5jFJ12WK6gSVc1EUMGNaMsFbqHqCui6MM3UUVJstKYrXyNGWP",
  "key36": "3nnMs5EUAWKKiCC2jCw1QX5UtA92DUSAMvirBnvawTAdLzGLmGcarnMG9D3EnnBMFoCzHhy9JBv75RyV8PTEp4K4",
  "key37": "2uhLsHS8YY1gtSnSJb3MMVcYwWguP3WAjCpYMGwQh84DL4AwoPbCiAL6dYE3iuo5CHRzHttY3553wZ8PRoyeggZS",
  "key38": "W35rRqqsnNVzhKJz7snQsB9wgfy88WPxk6GyWdQ9srTG3wEDGR1qQFWrV7oiyYhjPquAk55p3ytcbXPGS9fEkiG",
  "key39": "4HJGuY9UZeXudiLvPHhqVJKDn6m1Yf7JK6WrDm7ycWbRtxHEq49Mbg3ijAF5JUyENrf37UciXGyeVXCar1LQakU",
  "key40": "56VWbaBaCk7Vf4YCbdoT6cDCm72UJXnW98s1ufJFH5V95pJz9jFseNcD95zSWC9bStHxBXufy1XqSeZQEnnb62c",
  "key41": "2R7xdNSJxuL3iziURQihs8sMdswHvdiVkp1vrN8A5czC5TX7K36G32ojw4ok2ias8zk4U7HU44dRqG932StRPAx3"
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
