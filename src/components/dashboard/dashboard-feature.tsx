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
    "UmU8hutHfWwKSySWrq6KiaqLJNv7SUJ2m1C7SCqRs8jk2dEsHgkgJ67dd7vWJegB5MsCibmQWHwYGts5hRYethC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43HWgr43qR8642GQKkBbVp1t3NvUqWTtKcDSEGabpkSchwnUAHKERMP7kHm9zNVptnsDX4wTu2JXRw3msEGnhyzx",
  "key1": "5E7Zc149s6wq3mAJuK4C5ESrofqCGMmto3ZzhVjkKHVkK3SUrkr3rSSvT9zGddJSo4e4NQAh8mSMu29LuefgC6G2",
  "key2": "5tTii3DWtv7yUJuKYKS38DMA2aRAdh1dSzjrBaiP2vvPNnvRuXxjeXoxFdv5VRCK1gJ91HwuGWm3pbqmJL2mqWTd",
  "key3": "2RYMPfDAFbeWjFN5PdqTTmaRMNLptRmaVXnmmPbph8WfHgcBSXNSYEFDJPz9FHQ5er9zs4Pbh6mvPJGD49XAEufy",
  "key4": "3zokK4rMQz3ZnWXeCDJW4wPYhiACJXvyHhX25C8tkbjsaLoov2d1deVjGZymscJwDuogtT9sysfDsDW4BQnq5Sfn",
  "key5": "RKsK6pFWLcDhUuWTe3Akww3Uhj5YoECobp4kJ81CmvKkapvoSgn7ogKv1Qtvpb6EcfwUMwmX9dBkNsaq9AX1gCy",
  "key6": "2ZDD9UwJ28RyNndeWwLGahphwdKnuzkdqAu5vnpNkxte8D5MdagWM1Ag7rWjcwUkQDpvBMDAPMx5NP2z5xms8TEa",
  "key7": "3C7HszpDcaMmxg3JRTEiNUW7oiBSNGghXTRMkVeuKEJjpDS69zzUdDUv4BYLMQZPkJCaPtLAJ3LimzCLa9GtuVKV",
  "key8": "3xbypgYvr46VvG8Ytco4z7TPYoCsWqMGMniD1ksv8Xgaf5DZcTbf8xXCnXZmxQ1tf9uuR9A2ddbbNZaLgandyB6a",
  "key9": "66PsVz9sByvig5H4SC48qypNrXGGbQupCMcyZ6nsEADFdL5zjnVYmsJsLk52bM6QQLHtJTQZayHpHyutkGJq21Dp",
  "key10": "4TfVzXvkNdxyCfmzHuVycxLUNNyPKknpLydjJAbmh5dT6gsVYjMgxQvZd3hF64E1em3WDzUp58c5K9R1jnGZo9oS",
  "key11": "3M6RvyAdLECh5zgpDk9Bj9kFvvdZhmEscnx4LyDpLF7YxkBxyGbSMkAz3X8kXd9M6rSBuqxPQNcJAN5for9LKGED",
  "key12": "G6WmgNd8ap6k7En19oaHYMveShCHgAc5hpT5rCZxGSzDJxuK2bzB52X6Sdrn5Ss8nRftaR1H6L2FEpjPfRFnTJi",
  "key13": "s7Czvo2EeXhS712YtyBeoYJy1jv1EBmzKDa1K1So1C1LeRcX2wHoti7PyXgZUPTa8uvSnZ4LTsULVmRjuQn6NSS",
  "key14": "61EnKtUEdcsE1yXW9orEuRLY3dUPXa8zKRLyxKgWH1QH5w6Sc2oTw7zm57JwEsYcppe6i96VSDs8a9cdJpHRruY1",
  "key15": "4y9MzGGyBVLN7bz6QKov3cHgDU6BEtmGB4S5GKT89jhCzrQkVpaTipZm8cJfNdvGXLFXkiXWDPvSgyRbdk3d4Evn",
  "key16": "4chRAdJkHCRLo23rF2W9RwVKFzypcZ9ovvZN2mx5H5UN6j4eXyhZEHh4JMkmizks9tW42XUp6x6CXEsTkjjQBBCx",
  "key17": "2kuJKjfUkqFzkdWCpi8m53j3RE3CXeyrRkmTcjz9MoUQiQMQ1TuQEYN8aiXLnJWbbVvfpiJAZ743rUHvpWq6R4Jg",
  "key18": "55xuqwzUQwa3YfD7TrQS33gT66FomNMApVLZqMDYGdHUXBFWcPoDvEvVdSGYXLgJQjPRUKihJwEx57drJignRZUG",
  "key19": "65CHcMoy6XV4Szwq2PCdMB2Cb4aMB1yK4tPKJRAqqhP2zpQG73jgA7RHfgbfniJUhzFLnArDXmHR5k7NHM1836CS",
  "key20": "3yeLurGfcG33FiEfwVXzmje6ExAcQRptxafddTstgpV9spPf6GKoP9V4tPyhRK4aTvacyZLEWk2U529yUMfGRwJn",
  "key21": "3zFZE513MogYirNAMU4meNbCRakEoZRVwpHNrWXhM6eAYYH25VVEtXcz4nS9RM945aACaamiXSzNDgWnj96EYeet",
  "key22": "3Ko2i5be7vwWCSnCTNReVJP3qMx2BBcbm3dBByDTm18rkCpYGp1Ddx1ZCoQ9g3VHXjuf7Gm6F5Ff74LK1ZcmFxRh",
  "key23": "32Y7QJUG68ju74Nogu8pBBcUJ7rNZQUxi5oaXxsyEKJPGiezk1PUo7JMuY6oW6WxPBc11ZhGuynjCnJtm9jXn3JF",
  "key24": "MMC8g3FqSt2BG9ZK8RQXdwHwTPS3F4wGbLy1fLpfQpo1ziQ5mS4WHJhTZQ1CKVVcoRtUxGxiBaaVKrncULGZrXA",
  "key25": "cmRAd2rh496uoMuNfgqPiyGeVQkPPzsGfLHavdRXkMDSNmR5vPYo56Tw4g8SVNtS1PcBMHjvBxoQonQzvG6utgu",
  "key26": "2vRmCwLhvn7cCv6JHmLbzx8nPBNemDjzuZ1gwBAGPkNVsagxqgvPixHwoyaMJHgXurDWyT9nuq6bNEqARBUHezYE",
  "key27": "2TWWdJ3CQnBirKkrHyY11gN5yK5kzq8GVpRvY2ra6ydcQ6Sjg7QCgdgSPbqMgV81KVtfKeTWKQQ8akj7qpeNxSFk",
  "key28": "4vvt2HoS5ymJGUoTAiAjrJ3vy2PvWc9PVdo6X1kmRh9yu7nELr39rX8NoqY541jE48seAsQow8wNgUUBbaFvygMk",
  "key29": "5hPcd1Nbn93w4ENGZg3SydDqtRp1vdMD34FWhPf1drH3AiBD4nXos5f2MQyqK6xrvJbwYZmrDijonF9gKpcrydQZ",
  "key30": "xzb7cWsUna1p8GiS6zPkctpCY7uKDovGNcf7Sigaf4afcfNApJQaBSXzFmc2YgnSNkNceWfMysefiwWB6UVxrQm",
  "key31": "2jaL8r58brReAowKZ7zY5L9Hzrv3JfuGKsik9VGkJHmkfDb7mqKAviHT7ihSL9KeVrxHCeXfepPB4S5tStyxccPU",
  "key32": "4FzyZjovircpaM8oeHQLJ7C44eDnsnkTCesb87nhJwA7L1rvf1BVXf1tjUhGAVBWCZH1QLL912z2gUpwY1KNxDCK",
  "key33": "2v9Gxv25PYk9MrgviUn6yU3Wksaqji3r5gV8voutKCKCJYJfdMkK627YsG89gqrXVxoMHwCDhJhQdX9McTJUQnxA",
  "key34": "2uVDEWn1jGvDTnBot26bex4oHJFg63hV6SDaym481ndeK1ghbRwzufu27RYcaAGbuVWEArfzdpcKv3DoxDkuRzeB",
  "key35": "G8erHvsHCQkFn7zggeDvfZkyaoszP7nxKe1tWCB731GHXcJHKZmJD6AHrwcMU5rRyyJPQD6pdRmbqrNJ6SoesC4",
  "key36": "93KrbzsQzjui9j9uqaPVqJqpwkMHXWjNnKHBm1p7WjSNadGy1JYLvSLzXw8HdUzZm9SM7nNucMmh9UiGayBF3rr"
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
