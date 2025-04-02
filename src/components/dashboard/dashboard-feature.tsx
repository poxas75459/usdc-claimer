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
    "3aVnD6jkoK6jQXAqYSsdVspXTS5wJ4ru5N6in6txgERyj1mkEYsFCjkWW8ezmA4wFt75hPQyz2opT6yt92vjfVMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mdoath3UiBs6eMpBFNTsgY2ErrzqepDJrMbxiMRuKHmJkSPhyrJuKNoFuA6XmoF3egf9vibxAgPX9X7N9WvW7oP",
  "key1": "46uqaonfN7Z8JUXYwKtfVm5CwKuFxD8DdGHTmHmuWo9HU9bpoPgtXWPg23Uf9BvwjuE56eRBpuxH7Ga1yQCLPRXT",
  "key2": "299fRdWiirkJXrcH8bteBYpKHL7hizx2yFfJfmTjLCj4b9pe9VweVPkeDiQ1L1ncJdMMT2qgjLsSKZ35DqJGqHBs",
  "key3": "4JdakLpzfCazfGiFL5rgJQEN52bX4EoapJ7XFNd6F99tDkjLmVKJi6UxU9pb1ZRTS1BC5zBdePyv7Er9ZhThMpm5",
  "key4": "3fJNALYu76HbG1qhv6eMGnrqkadw3zPWmRVe9x3fisD1izaDbCUXTo54VmscrmUGHLj1WJhvprq82b4KGvCw23pe",
  "key5": "2GK67zGx6rHZpfD3xe96nTgEV53uAJZ24Yz31rAr9hM7srz4g6Etdcx6e1XrcFpSHm5XGau2FQSzMK5Wg1k7zSQf",
  "key6": "2ELySdGuaDfiTJo2yWkDSaFVrBJ74WQ1xRyDbVqBG31idDxaBunseF8zW7MD8w1xuUkb5Xqit2QJd7hpxk2uAr7A",
  "key7": "5Hi7LhM3Tii5e3v5xZJ68MW1YRQq3F9J6j4kuyfAagN4KvfmjYePpRC8dd1MkDXhXwyXoeCnsHWUdEm61hNTGC9f",
  "key8": "53qsAMz4xF4jcrvQpEYM82suR5Pw8xiG521SKbfqUWzCb4LUU3nrokHryT7qPh5nT1aDMMCExRmaZWYkJJoepkKf",
  "key9": "4EEZdgrH7rc9mASR8UX35RanJQtmLtTTSayMFLSrnitEWWxYUt6jMv7xESPEWUxKrDkN1uFHwzVWoYeDMF2p5TuN",
  "key10": "3QFBesaEd5KoLYGJqwoEeapdn8MZsyy2MERB5Nk5cMWLykkBnAkirfi4UvEkgvc94sEzbLJkdJ7GeZ3h3LFj72HA",
  "key11": "3jHZ5L3GLuvo1W6vVZhUEEMuLbnkrsTkgXCeYb35TABKLQp1jBYTiYLaBHPtoQwraXp23uef5pTadYPrzTb1dWhy",
  "key12": "2ZS1FWVQe3ieEwWJTGit43pScSZEK3duRDq44VpUfN7bDTFpzQp32MN5ggh9mt9E8ZPXBjC4bjUJYQFnNanMRhHk",
  "key13": "2aL5tGqdbVPXHG6FUmmhJiC5L7WGXAszXp4TBHR9ehgxpS8ajCyPAkjXtdTeyqDVdkfpwg1u7fURJCZ3WkHGdXqJ",
  "key14": "5w9CFWi4zPrRJdVbwSY1snkKemuaEyJYEzdW4vMnqAgTiAx9wa1nrFEKr2PHnLAwjuK3Pfs6P5iVY7LE6h5XG6PS",
  "key15": "4Hmxiex9JhTugUStesoqEnjoGH8FRn1k1GLXxcHnEreCZydEy8GWb3Pre3tiGkC9UYNMtG2QtG5oQbRhfYY56sfA",
  "key16": "3JDJ4ey8v4Ei2jfT19MXBQT9ywLWy22DNyfmYFN4Ga8CvBuyfpUGfCSMmF22ttuE9vxom7W9PaqSn4TgHY3xB2br",
  "key17": "5SpDo4dx8wr2pVQDA2EeJvoqXZEr95AFiMJB7jgy7z63wRcGcs1rqSCBFotnGGZV5ngub2c3RW3Ahp935MesPdFa",
  "key18": "2oLkVfdG5Rwj7FgBuYakak5Sn5Dfb5137C1rMXPDPkSPj9CnREvpzD6t2saXz8Ryfk3mftwuTPt8N8yrLN2umzeE",
  "key19": "4F4EDRKHBzrL5SSLXDVquoZJf9Qk4bkPiFk2r9AW8GyMCWUdLjTprZZB4W1rD7At9eGyp5fgZmJuAgZ8zztCSwME",
  "key20": "4VQCwHiYGHzxYwzc5J6cHWoSuFNncFgmpXgeFxcNqwLTNZ8szTxbeFQYQ5VtV1v9KjVqPx64vxHNP4y6asgB3Qm3",
  "key21": "4eFyVTsTpQeVtCcdYPD3CKYC3GLkLFwGsDEyvRcB9gZNtjNWJWprBk1W4MknhBb4kS3opSvQynR4MYhKmySvzTc3",
  "key22": "5bbyVHSur5aeSK2LoamcLBbTE9C92SDh4NVqyD18iiNNPfwJUXcYKm12wfpDXCXvMA7aW6rF2LVGuprmTJoEwTiu",
  "key23": "3Jz2KdUmPXDsfNbiWQkzEgx5f5kRYcfR76urDrcSF8PpQ36zsnnsox9Z3778qwhb86rNjiz5tdWhzBixy5Ftunrm",
  "key24": "2yFjojZTmEvoRkNseATon3jtCWt3akkzZz6tubCARpviQm6SPHx8K4kJ6vKgZoPVwrU9FboB2qVC4QJ3FgsjkrLE",
  "key25": "5MBNckY2BTQS1NjSBrTpQwkpreEssaDvC81AfsicGubh9x6Ucjn8KS7okgBuwTLsJPNP4BjLFsBNELb8Kd9KJscF",
  "key26": "32pziTKoB6angFbJ23doZ3QbJMqwteiNaw7kSKi5mwGTY4PEikHwRPSPYhFdgtQfLtgbiN9s2uXVm3Gz7GXhh595",
  "key27": "4K311LByf1T5ffAEkrMYQnoVWsAuKDni4xLg5cu9KmC4NVZynUZ81KEq6Kj6h9UTaAbgbEGZWhY1qLE1U1QeRyUc",
  "key28": "3KS78RwSXMJoBkpzr6TkiPd3yEJ3wPnaSoydKcgni8haLcjz5999vSwTqgZ6QN24CnBUfGABZRgU1LG9DKatsjg9",
  "key29": "3RXd9yHZzhwo8YiWRjmkuaQ8FpeTrEpbLkTQZQHafXVfhkAGsnPr7sU7CUU6JPmKkYgARMkwvoUZDWJAPq7ynngL",
  "key30": "4LG7DDPLpfyoXwvaBhhCMWpqE3L77Euh3wMspXo4HMAvooiFiYdnYaywUW4u8P3L5db5mMZs5mmVJ4dRsXofWw5W",
  "key31": "4RDFp5auMLjMHPpwgxAQCZfg5fX5ANVw36NW9TwFSQrfUM3APAWszBhSPuNWTwNmJzDWmrCf2KBHpiKNwqL7ohkA",
  "key32": "2VwY2GV5aQLkASi5wHjU8m4zFs7gde1JrcpuSVZZdTsXN3vBgpjigujXKmVCKPP6KdeBAXGDaSBdcbnEzyjnisAC",
  "key33": "2xcio4YwHCeMgYLsRba6dLSdkC18CaVD5UcMJqMzZqb8asmm6aNYWtJ4Nhu7LqifaAeTX4HASpcy5c6twvsvd2YE",
  "key34": "onzrp9rAnJyuHotMwzi2p93sEXEifcrP6BNKTBAxKjdCkviLDv88zoKDrBVDzuzP5qTwRipr2VVudbgBkpmpdC9",
  "key35": "5r5YGHPWePpPzNBr7VYWJhBQ8mMDQAptewo8VTSTr3GXTh9iAgNxFzj52cyrbbpMjZLazaD1pjXbGbtxgcpqJqfk",
  "key36": "4ZSc6mbcijkzUS81b7Br2UUzbsnY9iRPgYWQzFJYYtWdTTxLtA3Cbp2oAcCTTogjKe9ofTcb9Uv1onyvwXoQ4oXt",
  "key37": "3KpykYAHR41ktjsroTM5SLS799KreHLrvJcjXSYE1CT5Hk2jh12aZvdctgsb3Qy6hccTWt2A9tnGn64SFTBiPJFh",
  "key38": "5fWs3KuWfhd3ymwGxEFTtBQMYM5iZqRcki9HPp7S5fpcDibzbL39EcFheFG9SXm5xQitKf71NuM3M6CdzgCX3x4i",
  "key39": "VTsLKkaQU3vbzBKXXMg8K3yLz6WXTeTgexj723GkW6ScR7vtyANh7PCmch8jmZ9ce3GAXAz4cY5j3Qh7naDRebc",
  "key40": "3iSMPqmY8q4o8tnmyZ8V6zU4hQAL61Q9WbT8nhS6a7232b1kKyry7r6gJMPmfVK5Cm5VuVVDcLNLMb16P1VfmDxa",
  "key41": "48qBDdmT1ChNRFfcNBgdoneXYjVbbdP3oiSyPPEvVLXp7THLQxwx2AG3Ku78zBjPFSdvQ34CLASaeMS8GxzpBJUj",
  "key42": "2Ce6bC4BESp2WuAbvVxNmZBhS7vYj7k26E5Y8V9V7TDjXcJ5m631peSjTGJ9TJf6tcN3yUJgdShLVXMovwz2EUmP"
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
