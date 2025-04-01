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
    "rLH2SuAckTjV47EedV8qBAwRDCsGWhFdXEtUcyWbwu1GMLrLq3Aufu5NvsaA45AzB2s34no3sZxP1VKrodvH885"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ytTptLhby2gaWFBwb8fKKRZyKukH8pJE13c9brCTHfdsRsmDi4KfUdvUX3zmWReT1AjWfx4k2yarnpFanqLL2bo",
  "key1": "25Hys637ynsyfXRPX7qhRrT63ppcZDLH6KmHeNTiUm6BEMFb9wPh73ZAwybqQj6kYt4oyTbx73A4xwaaQFjyc72A",
  "key2": "2HRaQknVdpA85G592zYJLPTFADQ4moS2Q8HPa5s3e6TP6MUPZW7t1iqRoR1KWqZ7VEgXK8oDiboWk1jPPxW6tz7W",
  "key3": "5m8GHFHTSTYhCtLPtYKFWjBGL93HgNbDRW1kaV6MFPTmF4cYsVuLBoqMFLyqvHy34TeTLGGrdPmsrPvAVu98X7Lp",
  "key4": "5p9BjekzDywkyDRN4UbpKAp9XdBdi21WBPHgqxFnSm1e97aWLQz49372veAvyFCBW9PqYCskyHfhVkQ7oDhTuktf",
  "key5": "4hYbvpf5UUfiknRNhQhVQh2mgQjFqcySgGwxG6m9zKwarjffE7NcQxGRB4DAm8GNtMuWRJDBvQrFE6e7jQ8e8ed1",
  "key6": "4XnY3VfLzutHHhUE5YNqb5hsjGrsAZqcdaSPUNSWUJ8gNjKhDi8afHSNMfc8pDKbhzRNj289GkEMaLgxttMnwuXo",
  "key7": "45jXqTqpcUfzx7vB9L89G8dgE9N5AuN2xuTYXiVA8RBgaqnB6snZwBPY9yGBcXszLBa5sfhsHSRcxxUkWVupN26W",
  "key8": "2xY89HrBJPtTRRoJSQhEZGZCPGUJYu5E3TBSkR31VXQwxVNL9MoG1yTQCnmk9CNqt4RkvF8XucxW8DPrbAPFEnBH",
  "key9": "4sjhFXDVjbbzs1CNoEPvywm5XhRVx6Pr61q4Djz3fe4SHjbEgbn9Qsyor3H71ZHyLHUPveftqB4qJkDxaQfc7MF1",
  "key10": "89A2hFSLMebo5tVhAAYmzT7pxQv5V4ZZLaZhgvCNhSE2Jhz3CaxZHMEGoWjmk6m6U7w8nC1NSttyTN9fac8QUmZ",
  "key11": "2HPBAaEV5uZCfKKMRT2mDNCh84V64FjCfFNgrNMRj97YDXibZwt51wS2qAYPq9oE2MzJroYEzyZuUSEEVUqkc8ZG",
  "key12": "xWb2176DUGQyVXYZCVq4b3StP67g1of6RePceTtCEqPk7Y7dSvgXWpz42nY8cRNbVjbwtJhf4QDFoWYzyj2pmRk",
  "key13": "28oqNi3Eea9ykH7PopXjd2AK1rNogq9yVmE44s2V1dXZtfNou1kmoPoCi5ZM2cKc9qobowoWmuWbcXNPieqVyeGF",
  "key14": "65VPazFEH8hnTzMSKLQ5NXGP1umEtRsQVN1TmAKY3PoL8SDkCWrFqiT2UWzvrRscBeXudAqS4AKGLpgAbKAjvVcb",
  "key15": "3yB7KvSZ8Lt4p4jF1pdxsdHPNYafWysdSt5EBb5yjwUNXB4G336LHoA9Ao8yDg3833BGg9dFjzzFqm8FPziTgF6c",
  "key16": "uf8CKZfQrkt56Qpdrw8fsKvkAAwwFD6pk4neevCHQNngEDvQFq5Uippdr8zKdgk5DeKg3otPNN8jBnLdLfWJfjt",
  "key17": "257rcx2jHLZhKyz8RuwqyMvRzrApHyq32QTBXRsT1hiaGBt6eJEZLfNxCSpxRfwgMcKw8T4kmrYqhAST3X1zVGRs",
  "key18": "4FJhakX1SzdymahNBT6ZUEjw8sG8zM8B9vz8QKPG38vkvvP4FxyLD21wHYy1Vpv9NXDmVrmM54Lit8qbcKuiftQx",
  "key19": "3biHXNyHC9UjJWcWCQqchpyTTqgioutzyev97mgcWvVsFMkZcoBoYUrYsq2JzNFmdW9GijfNGSSsKhBN8ckYi5GM",
  "key20": "3ueYhxaXre3oR6usx8e6wNG6DMaCiRQBnasi2cZ5fP7dy8QtRx2iUrrAFHM1fyGujqzi5KTg52qr1d7JFeJuEY21",
  "key21": "3LLvBx9PwvmymuW6aUAAKfV8qaZcQHTbScGyWvJDTjd434b3E8FdhwFtWQrqkVD98h7YWuGkdgGtZnjncdiAZ5X2",
  "key22": "269QK11TvEcRyqG8izqkDcYojVjPF1AQ15cSQigRUsx1iGD6WuEocrW5EH4p2h61NGMNRKjbkacJ1fCFxiXQLSQt",
  "key23": "5DVvqKyvwPTnYb1TWxHezK8a5s4UCLyycJHMwJQrUhaMGAWumzzc8fuqdELsZHh3GNRkan2SZRUgMGVEu1j7w8A6",
  "key24": "23mqYm3Ts5jSKQDayrfKDG4Ya4gaunZcVNmN5vuui6qZPcKWuQp3eGN25TSSQHjpfcbYXciwpRVS8JuDiqfu2FUX",
  "key25": "iN8ScTTkbr59DZmapifP1kkxMgiNx1bbGnnfRiKUsVw7E3RysvuGke7R2tsUNKyvKtTF224YYfRJMLYXjEdZCUD",
  "key26": "1xZ6c99mFEi1UrAA7bhydZN4xawSvwSej21PjNv5FBEshLkktxed11K6nJVfgw4Ks6PuoEz34jktc4fJ7AGm25b",
  "key27": "2qb6hiRVWi36rKAxCs3JTRdWptoHGkC3w31qNZc3q3EJH5F5vJg5aRmVFSLTUYFmtkDAFTYdsYH3tCAvFqXuPVqs",
  "key28": "2UBmeqSdrm6A4QgLX3wyGHduZdh9ifU84FxWxi2c2crEWAuYTLsA7WqQiicTDE6GrKzqGdDgck5mDeVMQ3QZgK1w",
  "key29": "2jHQEjeryqghfvotSkGCHAD3GtLgRX5xiutxruby86KQuLtzm4H26MBLSyQn264NDdjjTAqkTjVcxjijXDm2ktEG",
  "key30": "3EGNY6We9ktHwqCv5Gx5J9nWDFNweaNpJH4HMChtG4GPf2ZLy9R6w7NrqpBN6Xnx7nPR8vqrWr6haCtim6ywMi9i",
  "key31": "2CwHUrq587wd6g5WCdMfy1cjYdWWTw5FNBs7mj5iD3nRYKLEY1zSwy63jpvpEcWGWLFiDLH3M1awPNAAK3jUMzHg",
  "key32": "4uTuhtY2bGvdKv4Ed7nZyB5tMv25W6b2Vz76He18YzDu85cGtEBoccVM7mLNy6kuV7WuajxapP35zve9oMR96zLe",
  "key33": "3jPWRzDSNTWEE87ZJwykhSpiKKzffRAB68nLusPBfdUoPzwZa5bJpUh6zEDjNuFU7Yf5C8KqYTAwyLdsxg9u8814",
  "key34": "2GvS4nLPer8PhhgvbRyrUqHbvzeaJea3AVoE7Dd4Qoets8ZgrDEKdvTjMNRF5d2UKPZrgxyHFHDLtKLrxswqtcCi",
  "key35": "4AkKqnRmNRJNVp5nvkvSG1DawVzWuasBFAQNRr9EaZxKLSKYov5qiudAv8SPJn7TTgj13EtzezWxYMuCHEbEBHsw",
  "key36": "2B6BJo78H7XcRMUg7UKzrHNb6YQmQLW3o45sxB7VtP6Ffq6wcBAnJZ2GDRddhY3bnaTmBA2J43NihmcHVrzq9ZHv",
  "key37": "nZJwV4sEbjpCnmvy9SkQ2fsJ6cxyQFYTs56FoZq4acuruFdhMzPN5QfKVompHysoZJDNWbbEXGzRLJaE2R3pijG",
  "key38": "EkaTR92Ld9dFN5ajgiHHeGowvYQdFiA1yuCRgve5wFTV5JcHna8QHDbWuHwS195kpgtdyhUaKGenbbu3b1fvzjW",
  "key39": "5oFdLKTwzzELvMQL5WQud4stNm9XHtGWqrdsqrba6tSuNC4r5nP8jGGzXJHrdWvZZDR9P9TxwUefy5Ud1ctFa7J3",
  "key40": "2hJX7LFuooQR1JwEo85LNZRR69KRKUSb4hvCSJLzoYpYhNEmuZfgUF8PUNx5E85ZGFHFNks3pn8zmNfWdNGDyuP3",
  "key41": "4E5eqpTpTkME3FYXMzgsAdKUEXKAvStdkYUUGTDr97UqzRGJzbrgA4hSMB3zxUXsMFDtpvQ5txWbPgrZf2L6cMq8",
  "key42": "58vUytPvzdE5CNSs7UxD6iexm11Gr8zZ2kdJr2zac6hJ8N9iLMxMumhrdLrsab2zQEnLNZrBktusateFKgKJ6T6J",
  "key43": "37K9ekFup6kX5xDEscMS2X9pPJZcBfz5DiZCHvGuG6h6eZYcYnAKQbdjGhUb37NJtc6Yx61yQuBYDz2BRaBmGurL",
  "key44": "5EE2kCuCkYpWSBEXGGE6LbtfHZm3gE5vFneNpQoPH8ieP7WNYdvrAetDq1EpLzK4hk6oL39gXggJd1QzyiWoJoDF",
  "key45": "QKN786wANyWWxuyXBuFXByqpdo1iNdk7rLFJ67dMYPaiNPwK7BrgE7oTuPq1HdKhWPzWUFXt5MpJMiVw4GGRVWu",
  "key46": "37ryDZnqLPumUf7J2nnVCnWiHt24E5P1owNDRJzr3pZLDNy4SynFL58LTiXYDgRtCVPUitsTpZgKhYZxzyjHMxaP",
  "key47": "2jeJesySeqyKqYxMp2k7Su4o7FfxhH6cdUtTRgwWgqZcS9irD6zTNBTnVZyhekcHc2BARVmxdpbHYM86158GkCR8"
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
