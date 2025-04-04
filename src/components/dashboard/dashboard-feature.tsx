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
    "4f8CQg2VPxMESAXT5vLi9ew8wtpCrCgsMTjYnj9ESP1tZBFKJAaGd6PwQryUUXSWY9YvXg3ECdYSakeBdypbpUci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YQqz8XNN7zyz5YsCg2Zt91KiN4nHpm9HRCJWWhFHA8FvyEEJgAuwL8h2kUGoFehU3gpQYk5o9PkfSooaFU3hiEA",
  "key1": "5JToKTdJBa2Wt1Rf9iNtMH2bfYx9X3xn98N28htgxzf1hseSyVxjwxLctCsuQ5Jo2HwoQjy1sENmt8DLLr4SVhru",
  "key2": "zGtE1BtX58om57X28i6hTp9xMPVzVqFPKFTVikTKDxnRiJvxa1caKL3eEHACvDkVK6s1VKwHASoq5ShwjbyjuDb",
  "key3": "2xpKqMZAocvZASuyzn38gzbJpP8gimy7pm8ftpc3218b7Eb6J6zMYEsEWgvVLkTmYyP7kbm66wSgbD5gmxLUU1Qb",
  "key4": "5H3JYV768g2hqG68x1czs5uzT2HRwABFPtYr4ihdVibUXnkvutnuKa9cxmu3xQTXKMBKj8BiEefxUfywPL6tNhSv",
  "key5": "4sLZeLzrtLAjzR59bpwfyuWVGw5imS9b8NEymyotBxGeugb4mtRPEvxi6BoMfLBXPn8HyV5DCdHv5rSNZtEyfHPS",
  "key6": "3ER9bfCb3BZcqx1wP5RM4VYir15vkkpnAFuxEruBZYZdZjiyfzUbqjbaMCiFs4589pz3s9TvALNrpkc6cX3Mfj4N",
  "key7": "V6uUr8fyakBg9mU7g3iN7NRwTEMhymMx3ATVwqSV17rDBnFaRQVpxZB5RUvyLay2N71ekQFZCA6DKtn9XtbMyzh",
  "key8": "5YVywmtNCejuzDxzXKa5XPNJddgxkjG8BWGWN39b1E5WqhBjmCnS4UZc4GdsWcb7JGFbMES1Gv9ASPTsxK3soqFF",
  "key9": "47ewN4Ef26QbyvPSiFHYePmXRCANRyJUPTcpcLSisZZanuwTeKGwEgZSQhmhHiJgA9kNi9kR5F2LsFCRYGrY7xrR",
  "key10": "4rjjVzuxT7SNMjLTG5XPS7pWUGRSc5oENy2DXHTH1yp979fLRMCN8qqo4RiGapEXN42adnbhSdUs5qzE8E8zX3C1",
  "key11": "2bCQrib7PJoZd3upSyE8FryuNkdxCinGVev19Bk7yf3VCjHmq56DdVDRJDXCoQzAZ2Fub1smm5LqKdBUMvWkbjtj",
  "key12": "4XDoCyFRDuigpV2FgUQnijdExxnoQY8Aggt7aMeAeU6dBMDEmVBAsDgZDA7ND62KqkPSZTpsxnZ9QdhvjPEz3Pgo",
  "key13": "4wNcXzd1udYkSTjSkLqJ8kQzTf2PKG4gZiXYMr9syCsFKLmmTjK132X23ip2jpxieKGsGKK94CPdpxvGhL6WaznK",
  "key14": "3b5nkp3wAbx7whUF7nDeL53fTjRNu9T57e5jjstAwfvpr3XD99PU6KNy1BaCqFS3Bt4eAB4r4yhtKJ7LbYyopPEB",
  "key15": "63GFfA2sMdnHxuisUoRB63mLQJTYdAZ6n9f7vgCKhLFkTvxARVBCjaYq3KLNr1zyF4yPXa2bm83m5FE5pp21jBSf",
  "key16": "4GYuxHYZ21AExE5UDdWw4Vgdt6V8jnAFhupDPW5bvMyumot3qZfbCLtFgQSJ2GUWox25LXHEnVQnav9P6LgToia3",
  "key17": "2iAtZvaejV9cLsrpKxhpgeLcRYHkkw6t7bpQEML1Fockx58ETT9bSrqDi2GokHBagttaDTS1mgbz7j1DvJgNNX57",
  "key18": "sqCU5NvXyiMHuHJE6xS9L1wYKzGhJdJQuDBNZHS32ArbxffK6ZvDcfB9M8RPnR9V9HZ4QUSBhsUGEFiUKnHR84w",
  "key19": "33rhv1x4SXf7FQja8fr5m7K6VBC8ch8JkvHsEEJPtoZyP1M46MTEENJL8Ny3N2ctWLxFiW63CocYhKmCbNSwG1pR",
  "key20": "F94J4QCG5PA6RQ4NJ6vkEVV94qFvGUJqidiYnxt2ZEqAapy7wz3ogrNeesiVB527n1pEi6HYfiuP8yt6yirSbV2",
  "key21": "2akBpaFvWQMLiSvvzghfvEgXaDzdQDsuMXhh4fRk9NEu8tczYbJMJTUzpwiMvFWuG5Rm9HCGW1CzydQxrXeHMmrw",
  "key22": "3rvPyLLV4bqex6ybMmJhzejBGuKWsbrPVnqn3eqyxL64AMmfj32H7nYuAagCYoogFzzWeHNH9DCCjiDGDBp2cNcd",
  "key23": "3D2jfn43eKjwWgwnZ6pKu26BzBJ69mbMMQt7qSMmrQQzH2r8TrfK99nNYzMaueCXrQ6D8yALJapbcAKxom1JnegR",
  "key24": "4q81fcdYJaNzyKn3NzPSbpc8wG3yMY38LX5wfo69MtBga4mrcNQnunmKci4PZ6XFJGtTU4PCpRgsCeMsPEqHTXoK",
  "key25": "2xyAS6FY85e16gHtzMrDexwxZRdooyV6xsLeYdsjzm5o3EVnXzE2YQFo6bFh6RG5bpuuQaWHAzSJ9P6AC2TiQM5R",
  "key26": "2j2xGc5bxtjy2bf966jpBjJzxx2FLqAaFUcPUvW973WkkTP2q7xeEYG59coHzYHCwU4Z4z2PYvtuUDekm5oSEXER",
  "key27": "2GmsyMXD6vvvdkS8qjsL8GEFjncRTqCRpbFhcZBEEaHk7bwyQ5neF9DknMgXzoZM9XeoXm5dGQqUQWkFtiFXanc4",
  "key28": "hvgoH7kW7GPQeHKXSzsRA4YJWhTaM7W2M1bh1KKrnguqzo1URcTcjz2pHLJrweum8qPgZqaaT9zqTPRc9scthB6",
  "key29": "2R284vE44BrRWGDbhnpXqNeMawsaAYzBeejN9ffCpYzXn7DUwH8z4ZiA4EwzT6mTepxLD6kqDMXKhUAbA9QA4bgk",
  "key30": "3xGfRdfKnT15HLBkYcZuN24zUtbyHer3QbCdT1o13PcWvxakozHbbn6k1PtYpBZMhL3C6r3HrpKJ59u7UXkEvSZG",
  "key31": "obxacNYysEhhUVHi5ZX3mbH1TadyzS3pqzn8VTZ4n9y9MVvigvHinSi1R8GhSC7NjVDGo3wHQp81k3zhqndWgMX",
  "key32": "4AoocngJfhcAaKAXM4uXUmYgxZpNCtGbXjhpmQNVcHskxgt7jewbMTKq8NNkCjEwbFeZzDTuowXYCBJc3sMjKZJS",
  "key33": "4skhmwqkUayGJfdnPTpfQQ8yYhNct2EKsw2LcgWrvhXViHicDqQ3PD63pKwU2HUBG8S7sGSVwkacMNgYgje1EdYt",
  "key34": "3KxmBqPiMenkuQnGQHNzga31zcWfQ16ApgsyogEPSodEoyQP8hYuoeT4QkaGaMDzdbXLa24CsSs1ANxn9SR1EtcW",
  "key35": "2gxkzoUJaVkTaCX8GpeCWgBqa5jg7cJcmqPF6Das17JVXakccpGLYg9jmBKBkJumkyWg7KzQQ4WYwH1pdvtCpGgN",
  "key36": "Tk5zCzhbvKmDx1HwYRUNTwLVUAPXjLKhn7oVk5v5VgJSGWUxnNa1uDeWyF1Wx9bJpuA2mMp4kHkHeh11nuonHJe",
  "key37": "4qosgP2bN7pKpDV8jmXUeyMLwreQtmUT9QE9qyKwfnvnBGDCdVaU8g93BiN54D9wFczJi8yT1tTUZRznvfkLGTYo",
  "key38": "5LMZ9Jar7qaAPQmu4PmuegeCTvmv7EHWMyLnT1m6k244N6vXNG4Z77m9o6RWmvER1okZfX4hVKNyAGaoHKUEz3Ek",
  "key39": "2y4iwm2YcKch6QjqodbMe28BfkNCVi4VpSXqCbWSDxax8hvxqGGg7rtnKzBnGATEBECdeswYfR1QXC399HAo8Hs",
  "key40": "5tf2tp6rcp5hBHgbmZbT1Z71TDbXCAfzUn2LprJkyjRuLtaHjUdWxWJPT1mxfFXMuvvPgzXYhjvDmqYQP5YvLisD",
  "key41": "XUYnqUDyK2z3mSTRLZRP13KTBprVi5AG13uRvoiMxBCce857kZUQPPWnCnMKeh67V4HvheZFJWRFjbvtYK8Ljmc",
  "key42": "C23UJcDFMPcgTfN6KUx61quZRxTHFDDra6vVnbFUeF6E3m2FxumBn99cCgnUsU9jcrNWU44oRNB51UEy8Nwsyao",
  "key43": "2FfQfEhTy49759d9ksZoUiB9sa3SfShnidBs4GH8Xsv7VxGWLanFW9fR8XXL748b5RPphKf4JQLxoyyPijWjz4xK",
  "key44": "5QP9KsnYA7sT9P7jiE9a5fYBXc9Qg5vZpFGfUKWhLRH798xyzpqiRHrgQtudaHzVcQJtakB7s1yqEUiNnfYMcejA",
  "key45": "2ue4BW4mohy9c7KTceE3sJAibCX19BMXVU3Z7jRs9gcM1Lw8LCHqyaiGMXRxYnhNT4aG39mkFpu9hYiQeubNqiC5",
  "key46": "3G7B5F2Wv2skQGRjDsZ9M4yKgFcVZfLnq1u32NJ96ykeDbAeMzodaKk5JmSHgSnMv3H3f9gVkySYTqgoTRRvyUXE",
  "key47": "5th9EW52HoJf92dHR7ADWaPiPXK3CbrJWuPYjnFtEXLeGDRi6pxgf5Y8c9ppr8MiS1MFRRLdrTd7rRAdL9QGHGPU",
  "key48": "VUoS1Urf7gmtkPdAnaUm6wXJWCiLsEkrZrvj9hEbRbPxTFRD2we1Q6n6KvA7bWuPVf8XUGrazueVqi5C4LETXzP",
  "key49": "38fEtHvxpx8M7vQHLQ81oCEuqyHH7aYaojn9goKaguvH3B8psjHRLYkk6hmHao9HTMNa1bVJfzL15DJ5R6W4HZsb"
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
