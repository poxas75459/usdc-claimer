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
    "3c4StbUHLAHNt91DqbRnt6w61hqcVkYPFCJfDgD85mrERmXB9pHznTg6bwLMZPPimrSuXi6Fr8mwWSULV95pJyNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DNhen4ga74RQTxP7jtYZBfBzk8JgiRuwoZinqU5DbRjebuDmcRQjZK4RkVQ6jTB1RK4nfgeFNYzh6CuDD46GwXf",
  "key1": "4djNutoGDhtVPKy79ocCh3YXNhdPFMn6mdFdrQXamqhNBdjniNDCykwnDVSV36XdQXCa7MDTtqSVcTSKnxLehmUe",
  "key2": "365WE6jNJRTzFDarsxCcc3CZizwPTWGkh41wzUfNmzh9U1m5Q8QayDWv3Z5kmMnVz94DqBbm9iS3SY9uM2BeanTv",
  "key3": "5h2TQFwhY6dF4R1mFaqXb3pXsLuinFPk4La5UAv9HJMCsQVLwqDWoGQBjjwV6X7qHf5Zu5byCEA5cEYLXNwsUBrf",
  "key4": "3HeZ8psuo3M6SqkmzeoknNz6cFC4PKbDUFdokHc4E3gFjhx4aCGNri9ZncnBvr4pPyPdeyG4nRr9GcyWzJGXPF4M",
  "key5": "4dSKNYvwx2jaedoQw6jLBTmHjBdS9ZzrRK17f6wqjWmAhWhrLgqhUXB921jFyBekAyAtg26C1CsNzfRfDXwh6WFw",
  "key6": "27yEWdLECu9fLnsFM9YMEPUVoM8mSZyQKfomLEVLtRVqdUwD5SpkDogLoLjvQr6PJjrVo5eHHALa5qxwdovRRpzt",
  "key7": "27pYQfBrQKLx1sw2ctz6ed8xJofZrGnwQFHskaBnabX96RYvkTPX1jL8YnH7io4Ax3w8jN57eB92XjDmGuGJgECq",
  "key8": "3DPqF6simQY2MNp36cEc8pSzYGDWigEsLnGAyDXM322GQPQqyqbKFZsdkeBsuEhwKPkyVSMJadxE4bPow35NSpYz",
  "key9": "3PGdUZLWsEBxch7KMiKAW1VF7PZ4NSXGksRP3QugVjbyx5rfFGxwh9jDMWVnVdByKeVNCGbzAv8Uf4cr8XA4f12v",
  "key10": "4m5aDUxpcGeUwRDVKtKogjigFYu3sHAWAbqZkQs7S71B9cSrwBXhqDkU1chQQ6NuJh7sW1eh29nmVg4jBDGm6gFJ",
  "key11": "FXRHGJHjmmXDPLoMZPtciDL8SThd44UMhM8p1uMbeyFA4TjCi34E2bsKBwL3UWtBFaodapKptNyghmDvW4jeQCh",
  "key12": "2gB7VYs8J6zfdT74UyFKHLhxam6oHvgv5nqgyE6LhB28yQiBaRggSxtqd5JRZHuULSyWRjoxe9f83WiQugyv6Rg8",
  "key13": "2e785eniYKVo9WsHDidf5CuDJRQVCkc2gKLUW22DmiFcuaTfraG6j9SdvPEcUCroxGPbTF4sTEQxeGUoRoLDbxGT",
  "key14": "4oyWF6UyuXSrmNBBK3EXC3JwhZKNGLMy8WHn1hcoUsDjYAZSZ1a7iPe6ews2EjLucNjhFN2c3Xij2xBEAm8SYHe9",
  "key15": "HSCS3svUd5ExxjSFEjTcXsuuqArcpMPa4zMjezBqJUCP1jZeeCfeggzkdVuJVp3eEn6rbNui3h72GFNpRKBG7rU",
  "key16": "PWZ8asRB74d3McJwhhUZpRKMdZ5SnditJpmyVLaqY5jLsTrQpuG5631aLVf4fJpQvi8xKVNCqqCyBReVJuv58Qt",
  "key17": "2HmKm3Xf7fjbxxJjuAARp4ziih3fDXPySv2Y5GyMY5YnbHszYbYkGT54YT6yq2H5MEi6o69kNUWRMBggnLJzC2pf",
  "key18": "4rqHMRymqNjZi5CoTyCKmTGodJmN1HtgciKqktBVPvu5T1v979P8bdDpK9hjfq7xzn8QSQtkPvQXvJffnLPtjrHv",
  "key19": "xte9rMrmbhNrbEBZwLCXmKuBNB4N5hR9VrAhaRUMJ6Ev7CYYMzp2EKeqJhrhDRbx7vu6oT731sQKbaCRLfMGVo2",
  "key20": "3eTEChjJBtxnezNz858MUVJEv2Mr1Dub9HSgXxmr9mvdkq6TZ2PWHoF3Wuja3ADkxibgqE6mzwjt6JTVdb5BMCjx",
  "key21": "ptLCFjJ2nYe682RoQbwzjv95uRwocUzuHSJU3yUjjUzex73k64eERwVt2FXk1AHzYpGoLhpoyne3XSSM47k5gSh",
  "key22": "57fRkDGCQvTs18q7RFzrgUSwCYMsifLHfXQAR8d1qgouUQLvnxZRwmxXDpxp8SwWXCUuDYRP1KmH8MQw16PZdYHx",
  "key23": "2oqGfnrQC6zJT5dPthJdyW65QQ5LgG69CjzroS1wrxEp8PPgTfNKQizrmEjra8B1e8hcUNn6eh76kjnoNeNYNCUT",
  "key24": "4phR9bWLVnxji4P9ES5Sg6JUBoi9NqyFMz3XbYEoVTXkBFqcHGuaJJqUXBpd5TvGewiNc72RDc8bAqsrMYe6bN3h",
  "key25": "4SxndYxrrZDEK6DNGNdfVbTPLJuNAR7fjVpTiGwWCnixRdiNkd9AAWZCwtAbQjQrV8VmHmeQosnRU9iHHy11JruM",
  "key26": "39MqfnVFutesRh8EFniU3FnxcHqzhKpYsCvYtXd4QShyq9P3R9JQwUEhDuEyuSV9xn8jxqWNxGPbraeek4QR7BHz",
  "key27": "5p8AQYcYafd6iyg4LZxp2WcbXeGJy2D12Wx85L7fSkNeM5sQ1w9Pixz58pXuQJbqC5r5sZ83qBxiPYmZmJMScTYY",
  "key28": "5VXWcbbzNNYkPGxvf7KV4D7aGCNYX6TyNVFB7Wx2ec5rdoSawkTYLp31GZpxTZcBYMxQEWV98UzKGeov4CZwdr1g",
  "key29": "4vqjLxc7jCXKikXNhZ9P5hzMbsvrhDDseF4nM2ZFfXXfjK4gSZz9J5VNjCAcHxgEBu3cJVQsExcbe72VMNQjUsik",
  "key30": "3BaZHV3rFF9UKoZtxac37HtWXqpT63JhhPhCTKxBM9PeL9kHoYF7nYA14Z9X23pRmkoWaYBgRdd2WYrdVuFEC87Q",
  "key31": "jwRXW3nBP5Vnr1oJKgucy1go7n6K86EnTZeSps83X6j6GCtcnqVLGQAe9Hm2SGBNRGktZ2VJ4CgfCN9C5Vd8J8q",
  "key32": "5PoR22WmsDi8bEi1dqZmnZwcyu1KTKPWUZA2Sf5UzHVJuCrsY7jjXY9yHW5nvUawV97t4xUnhSNmcsVuokSx9yFA",
  "key33": "PLysHmgZCxo8iD3wjSLCatzCHp3vatkidtsZXoeRJ5VBNPXv2cFfSktCgsCSSXBp6RC4TJtvaCeN8PJcBTX8fuU",
  "key34": "469KWP3wtD1BWnHSVbUPXmqi7WuDabzn51nVQYeDHty6NKBva6fRGkcf1dKQLToxNLqancDUWtuA3uvNbaSQQusJ",
  "key35": "7P88FXKtaQL5Q5QytaZTfYztRNiDLX8WSJVM4bC5MRkyyC4mJHabt1K8J7kikKxgkFuweW6XpLHgpiZurGoiB7q",
  "key36": "5HCUX4ZmxyhaZivkALHV5t4CQj6tdPH1v6zLZJPmSqFfR46o1jwZ2RRciev9hrthcBpvSUZy1tkLhopJnadyqnJc",
  "key37": "3EACBRQvw2awApABacPSwUq3RP95xYNtxkt49G6ip7m9Ukp3MNY7wJPVXWMgdNxtpQhpHKw6Mb7F5dAScQPmysPL"
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
