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
    "gp5RhoUJbEs5wNFnWDbyt4rDYKDBZ8VMejL9YKtE8pYbc9Kv9EJQTrroznUVqWFzFCJC2Rya4TrAPeBURMNajYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pZeUUkNVPvHeokjhPAo7m66zsCHE1yRqtFtP2LYF9ei4iCq9QCnfuw29ZPnoLbRERfzWGXwhu9eqywUgUC8RsTh",
  "key1": "4umAb6CiSHEjY5Zr1iDRQAd1JpUK56VAZJuwzoeusUkba5CiQZD4Ej8B8w8wiSyWb7YMmR5Eho1Q19opMbosjMSw",
  "key2": "XZeuXTQtDoCSbEPCyNvthvNp5hUzWfSP1MSdxxPEa2C8G8sVQY2H4pvWnEuqCdrZwZTY6htRMRGFkaeS92i2T7h",
  "key3": "4T1sNpDGAJUbvQ7yzX5ryDnXBg9VEDeDPBmyU7J6JU8FB28pHrggbo8wpHEyyc6KWA1hGTxay5yHBW7GrSkVjEEg",
  "key4": "57mUejqqhJBGXQBRW4hcywiJzxL7Dr1DcMVSUeqv7ZpW66vqWGPFVL69ACAZMYt3Ha4ETE8S4SWWfpEYUnZSfFGU",
  "key5": "vUQcZbv7Sh1aaRWREZSeuaXdVmwGUzdXrabo3Pb2rCbfxKsYJPkqyeM1162VVpzMGYpCsnwdFtThJ2pMvcjp1gK",
  "key6": "36Q3PtMXjiTo3Etehgp75EDKehT6GhxJev7dQ7rJXiqSZBcvvdpDFepZKevmsuSAuidkzYPUnhvG9hN8Y3GTaiNo",
  "key7": "4zWTkhWajEVyocn9KM4reBVvcUUXzQSDUCn4mcpmFEiqYNKZhFw3rVms6YR1tzN8QTw963tozF2AYX9NHJHvq7WP",
  "key8": "5tJ45zqCAy3oUZUejeF9am2VT2oBdiWHxJpwsw4Jj1J6TwW5LD7AgiZSje67Ty1RRTSfwYFbqEoNTwdoxFgfimKj",
  "key9": "4SQejrEceR2ELsjuFy2aDAtY8PScg16Sibcy9FSoNejoea9FQDnbHUKaVgBvLUMzTBfkVfNZWx1qMhpeSWQZvY3S",
  "key10": "4jrCg6LiKHyccDDse6JpJbdDpiegYWd6Mr4YgwarAFYbwyPuyLk6aDdwqEvDpTtjmmWBSip7JywBPF3VdCyVKiw4",
  "key11": "4BdsykMhVZeRTXycHg6QkK3u5KTwGzDc5su97MPiX7a2BPMagpKWmLQwPeFu3kDXDgQcgjEFnmpBcHE1XuoHScyc",
  "key12": "2haEvzCLfN3ngQuHxkmcC78JFhJtPsmZAPS7RwYYGighLhyh2ErS7HiA316AssbWPUzRxR9XQ7HvxLVunba4Zy4M",
  "key13": "3186Qhi8EtMQqE5iU5etPijpgHoMgJ8FdWEBfkEqxbk8GwGBe92D6XpYvYnMRUZonHQ6PpXfrqtoMugmDrvxGVdB",
  "key14": "31wTwDr4zYZuXCV4KqoRwwbujeo5JEXs7Y9ecwmciFySkdaKmaU8KyZjKeqv5mPZUFxPcJSRguPJEqgqXE4zvHLf",
  "key15": "5gGvGB3aNi1AZ4fPguY3852GzYcYknRhVJ1zNHaZpCmwawsbPXgZoy1P3e1p2cqdndNXGZKGY98xy1KgepAhuYFV",
  "key16": "2YeXrrnnFC3Fx5LVQfJYiJd91tx4E9gjBWMMA93yQ8bXVBzignr8LP9eTSBFHtMh3hXtfa6EQteHUrNQAqZgkr76",
  "key17": "51FbTgKV8eEor9LTa2VwWitWdPVmAxQsEt8Tvx8PtCqHbzg9Kz774GBz1bz28webG6WQ7tMqJY8PnPHPox2neUoD",
  "key18": "4SE8MAmKtaQXasyeRNQypYjSx62PjJXwD9pdZu64GneZZdWVibJM2Z8XZw6zXj58rLRmSBQwqTEQQR2W1ztj7iGA",
  "key19": "5CLjHPDXRajsCCS4pV6tXws7uduC8YtVCk3NDfjnrZf1sbRDT3sdZdDZQrBtQaZ16XAKtBJKxmvqpVo4Z5xDWyiD",
  "key20": "4TQ5GYFL5t2aTY516G7QySiECyhfdCjTj5EwFRNFjhGp9tzPYraADKhkSDZjsaMKyodUCdrpfd1M4gWTfjpbbjj5",
  "key21": "5u2eZUbUhvBBQqgodfWqUshqxp1cjVvzAc6z69PSJpSVZJM1DaKSB6SWhnNvgsHEzUCYpvPJF9cuCteGDpkg2WFx",
  "key22": "2CqfgosFdtPTwLUqzW9BUXsLddynzPjmfxNQUn9QaNzHpSNhqgxqyLKguLCwFUHMwAbi4ZGxFbZ7Lq5ZTNzhGKRQ",
  "key23": "5SzPtrVsasdENWrhPXKEZjZTwHF29QSZx3UPCSTjYTk6hoyaUdiDvd9pKGHj4bdzT92pkiAtBLAwp2WSDhqWh8wt",
  "key24": "mkMvkw3FSuxVcm4yMMJknTTu6Mowxg8qhj7vXYRFN1E1x48i9Btpcu4kLoSQr5b1JiRxEdJLUPRJZHftHGUwyqY",
  "key25": "5wGQsCH2FDqr8ADRb7jxk5RzMSfshBNkq7NVvVYLLyNijW7pfLW7hj7YNRuqq2Frv9qyYxwNuADqHnLQtZ6LBNid",
  "key26": "31v9za9D3wyVM11H5g8QfeT29LRwDFaThUbsjtPwbnXxiDcrKMqVmoZcsAZTK67LujLRwDrekFVR7x5V2yWwJru9",
  "key27": "5qPg14zrsh2H6vuJtchcq9p97szy2VtPsivC8D9m1GYDWBApp3mC1NGz3rDRt9SA33egLTk8hAncrgqgezWgPTHS",
  "key28": "3LUfYqkSct8ncDag7mU6tMxaA5BdnUh6mLgU2Bc6a6ZjJNCuwKSxHcEiQRhhLjx7H9qGr3BfByun4LY4f8KfFjQr",
  "key29": "4cHfm5GMoGoELEXMvsnzR7HfoL3PkhENAx4aGVCHSJjRCHaehU36DJA3DNCQKboQWcP429muBJ6RNMv9gt872i1H",
  "key30": "5PYvBe9naA6PFSRQkF4AE1Tc1f54UxxBwqGbBzBNpoBvY5pBCrY6fgYtKeFuKqAZrB6J3mJJAaGBTLXz5nRkq3hj",
  "key31": "4RXmxMfDehk9WSMZW9PoWCLsppEtNXDSta78anrEWn64oeLLcgxdUNLdnx85N4QNGooSzj6KZfdHC79biP8vB7bu",
  "key32": "9LsANvqQzXsjdp5RLH9ikfPpL8e7KygyZauExiDZDXqGi5zpTdejqVA73zRaZJ8p1VRVtPHyBy3DmaKaQJD2xCh",
  "key33": "4PE2dTAQw8hBYaSzZcoKfx1xqbFYQ7xb7VeKtRM2p4qjNJR9mst5fx12G2BhShwwreucfNbET1Fb9pRg8nmUCKTd",
  "key34": "2XiQtL98Y37RTaUfAMEo4fjZKxCtqqw3mQLaQ9LAWYDxaYHgwBLG8JKGoi8a4SDvgqmdvgLXiL6JrDQ3iEnTPsby",
  "key35": "4QPrShBG1NFkRrFjv3ETXhTvedqZhF3cKN6x3saSoGcUzSUaBS6F3Tbf1hSeFVQNFj9ZbM1zgNt8rMNxjtZhaZeC",
  "key36": "y2BYXMptfyST1drofccChVKb9txf6Bzqs9LmUSXWaspAxzEuuYdAZWe4eXZRwyxyHuoKPkqxrZf3hXzjKZ95BY4",
  "key37": "3E4ZZmN7cvWX1G9iNGeqNXPjvdjeA3dQVzJbnvQE2owCuGHaJafu2SDc8JVVuDdPJcLP33qxm5V6DT9aMU6abaaC",
  "key38": "4mJrCmmvQnfNg88ovrnaGHyFtCSJp2EcLXChkmdp2ujGZdXNpWgbbpKvyq2MAXSMybq5fXXwKxmpaJj7o52dmUaC",
  "key39": "NnNZG1Qo5YebMEQFdaMTWQQvtZwhE3KJSz7T3RYN9gL7d4xvvWn2kekucefhEFhCCrxTnKb36BgTMCSXmkzNNks",
  "key40": "2fcBMxLFZFz1WyjpPRw9SAHEqvVEou6ovwkU4XN9RgvhJqkEgm8duYUNpgp8UZFnNCyosVUmQEb8Xt3Ahh9S2dP5",
  "key41": "gfLG2eQPmWB3rQyoXbsHtnkWrRWfECysycGGLaf8ZEPXDT8Af6PnGV9mygJuJXRnF4bNgv7YSPspVwp6xAMjiuq",
  "key42": "qiX8mqYSgoTFQGf4qT5XVhUtZFsobYchcT4Wj9ubyaDJjzcBn1NVMwLvEAnk4UN14cZRUpyf72aHXshrpmm622H",
  "key43": "4juppwTvKThJ93iuy4J7TtiW3Gjku3AN3Ss8VLAMbLHvNnueGemP4pc1zGG5bgfjknNa9Km2hD44JRhZk6Dv1KED",
  "key44": "5gbPy3im7iWyPEVTbPCzBGXmh2sGwBbqfZ6Q7WrjNcViwnZhcwmGvK7ZN5Lj1uoRzmQ1ar1RfKwQyXdyzS8ALhQN",
  "key45": "3PBM46eMgr9eSGtmwRPoFLZjZfzLuUcetw8JmQq3FMqqH68ip6igrn7Lnw5fSRjnaPNb2en9jTpQw3rKE9r1XSGx",
  "key46": "3qnCpVEDnZHzUb2tVfRLybetz5T6Hjoj1Zozi8rCC1kvuB7HhYVqQ3JFdk6DyxM6tisfwkVvfzcKjyTDSP3a3euy"
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
