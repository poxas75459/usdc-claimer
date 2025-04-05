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
    "5HbTQqA3TEcPUhEMTzZM4LTVFBfH7s39ZTQnpmsjKHKtgrgnEwL1xFmSXKsegcusoStaqtPtAi9aryqSe2166Fg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zqFkfj1seghx2YemwSdik8DmKp3p4CoRaFRSvcbm7tizkrZgYjLxJen3F5ZzyR2Vn7o4dC3mxYA3519WxviZsd8",
  "key1": "2Q2ihgpPMvRG5FuQrsuwv448gWAxsinyXg6o2eXXw47vWJi3U8P8em5CwL1c7ushRTbdJh8ikeYb5QP51KCoN9Dc",
  "key2": "3SUoyC9vJaiSDtmhZaEvPMpRV11rz2xZVxCWq4oYw8Tohm5RSYZ8sRdakjMNX6bXMTKyTr5S1PhjZYJNcs9ya6h6",
  "key3": "3aGrPFJgGAVbconCZdtQBiGSS1i8UktsfhaX4G4BFV9Z4KSfo62oxpq169NmAVKFN55TmSJZPYmjAmvXidJod64T",
  "key4": "3zJ41Y3ELEZXZeqwgtjtVF4rzKJH7ojpMoR6PmrokBagVVs7LUNbiGzThUPjhqNu7U6PCSQgNW2AZ68XUookN1cK",
  "key5": "4pTeVuz5zg7yj9mSWaioAgwRLEVzvcyEhEBNeeEwNHPuVkLP8oYqjn81sKhNFzTQhwMaz6bsMBXNp7rPAEPGYQFj",
  "key6": "2XB8cQmPBC1aE41CdkbqVvLtBDcEdbjHEJCsf4ukB4iWNu9jBqBbhcbnDeNR4iHppKRfjM6UdoBeWhUNWAZvKMTD",
  "key7": "3oH6u4Nn7iEUwaANzn9L4rRqNh6rE7GmSwoEbar5faDDcyx1TjNPdXdSSLvjg1XXLGwMSAoZ4dgt8tTAMjkp8zLZ",
  "key8": "26XMkAXafXYBoCRQezxs8yoKFSp9F6iZRFwsUEbM1kHZJD91MU996WoerK5PpSiayBL6FrcdFVq6gcUifnDztvyX",
  "key9": "4wdCwVWBtsx5q8iFU6xtUdhbM6ZThgacQZLabGUxRG86EHNbZURas8cbetXcSyVvAhmarB2Z6k1Ty16d6dftV5eZ",
  "key10": "27uVJgsYHfmPeHDSkwwrbmV3SQjDRroEL3Gku4CzT9iCA38atZiSpcye9qnTWJjNXfzKCVbqSU26BSSLWgp4xVLc",
  "key11": "31GkaKVRNuru5F1QpGNqyq3YdixrHqXbCRA4DkHv3ypm9gnzxHxTp4G8K44gS3MDKqFMLmG8ZJUv6fjuXgotQn42",
  "key12": "2wudEPkL6kE7oL3mLxnJWQzEfTmb7e5TYb48aj8LTiVqoy3zyPQAbURiadxpc2FckJsAcEf3xt1tDETxMKJmmCAb",
  "key13": "1jajsu9iJt7WHHnBjcxZ3nuC6JYbj5nyJJyTq1kNoZXd7LRh3uz8cQeqMWWb1T1zVsgHkUGc8PY7Az2B9z1qPzx",
  "key14": "5ZYKAjHgrgenrDpFv6r6Uq5cMPNiigaV11jHBvaammJKucqE39FN4aZmp5aPLSthVBySdhM8dyuh2FqrEbHH2bTp",
  "key15": "5mtUouqA8gzYEfh8XoHiRCyUztnz8BBjXXEjQYXAp9ZSC6yHr2ZA36hRTbpmGt6zSSEQrowVWwCGxx2FKBuNYUCa",
  "key16": "5BAkXaVQzjqPz4WiG5Q4MzS28JuAWrBpxXaH1u6fzuPH4ESKvhbHM1RH22twEkLyGjRyzmAiimwD2fDjA83qvkRG",
  "key17": "2c2CycfnWz7PY5SSzwU8H1fZKk58KmVD1B7ViEq9mDtMU2Chw3MuYS2R4NopYmcJUiNqwFPY3QcESe7PVVHVNQjC",
  "key18": "2V6yPxpdb4RKa78HG97sCAAhdETmXHftQ5bM22CErTmTR6Tuk6xsgG2zUYAp3szZ2paTom23pxKDWE3BwBUseRPa",
  "key19": "2UqpZz1C72uzv6ATsLREhSDpYpV6U276LSAx94GiGPWanvZaGwvjSC2eE3WbZvezvFzWkLLrLe3ay695VUDk69vb",
  "key20": "2kw9x3aE4cyeaCQMJdPieJTcRTH42STehC3fY3yrSRZgWnEWyYnPK5kCAfNqUrKubi11AzLApxdYrhSm66rFVo7i",
  "key21": "vHaQpxN6WUG4cvfUjsRbzLaNWFiBpHKWhsihyuCaB5cTzUxHVt8SUWpb79RnjYmerxYWJgDj7dtE3KDAZBasncv",
  "key22": "5V2EYuD7x4DFXLdscEdJuwa96zyJmah4TZELXUM2x5KM2LBogtXLkWGdYSxrQmZ2gdhzsBCj1wMZcnipmUcDuc7f",
  "key23": "2yWuAEwjWZLToqVXnFJmiuHgdqwXo3PbHsJt8ipYzMMXkWgJDokcQEJczwghAfEwwKjayBuKWKfsamczAmRAAM5V",
  "key24": "3yAGiVJgpDP8LUPzbPqDNriuXkUMR3hbBDzXoH8MTBAF7UCfJ1krhZDP2i1w2ewMsbVbHkbBL2aFwHsqqMNrk1yH",
  "key25": "3Uo7c3TMD3pjvGXWcMUmhPXDgon2RsF7rLjNtDkVhPUC84phd2pjn8BQypKTCjaF4tiGpFDJ3KjsJeq6CJGBny4X",
  "key26": "64KiJd28zMGFcfdQ6zc1Qcso79bcVwzmp5K4ruoy2W889azGMVZbMmxgNwDXniphLLydTJhjmbgRYMJPJhs5CfdY",
  "key27": "UWgHWaeHbcBph59hgscGbfnhXmWMN7cjdZUV8WcpXBvJaJrCg7K41HRgMURovVBjcfNg69J3WzC7Q56rGstJPy6",
  "key28": "3TawKstmECYFVxCU9B2nMw97iwkWEuTu6W8rHxKkFE6hhgtS3TsE9LZ4Hi44eLCDfvcwGam6ak5VB41E9ZVW56r4",
  "key29": "5Y7G2X9JomMr5iX77QhZdVsjGUkQLv9N8arz6Qqn2HtjT4JpWsUVDXpnH5KUsQQNbSmBTvsdDyU3T9uzJXPfbuwR",
  "key30": "4fuGJ1PXVSUHyrngmJVA3FkTv4VfFum2Z3uSAcrRdNfc1X9u4EDd4fvat8YRpgY2ejaWAptbzbX7zwQT9RXdujPV",
  "key31": "62QWWvieRKwHaM3ZbsF81GFoNRjVaBy1ckSSpqTQatbFXYMa7QzgbxR74fJd5KTKXpbq47AHgExwfRaXjyk2aoeV",
  "key32": "Wbj5FxXBUWbmZCjR8xDhur7VveoyAwxfCT3ZqTJ7jhbSXaW59miiAWCUwhWBmWNLYst6gorwYv3k3qMVwMKGhs8",
  "key33": "2L2TpphxRcYZNZ6WkPo7t9JebHpahF56SLWEiGRemQmeAaL1QdyqfpcaDcuqQYkofWxy9KSR4GqknMdtwtReUC2N",
  "key34": "2nqvhQxT5cxC6YHLU7gNhFkAn6m441cs6SpkM3pRyJSEn5VYtrXxPraYLNxYKu8HTCtydh8FyNpbJiBaE7RnPTVr",
  "key35": "3KiubucDv64GWPRxTXAkDAwtYUC6BdGjNsbp5pdomsDm8mgHiCFQYAdoeoLTqQEdqRrcZopkNMJJ1zDi5fpm1VWT",
  "key36": "3QWVExKcRG7E7NPwcLZY3E1Lb82W2hFTD8jVJ6tomnv8hrQNZDWf9U2UWgN3cpGWQtVJzYpbz8kq88dfWZJJpGhs",
  "key37": "1E5RY5bKHgqEJxeMHQNpeEtsLgEsi18qrW2fj35iwCJCef9iUcXE6AEN1bZ3cg1SfrwPGCn7r69hhQ5UqXadYoC",
  "key38": "2ippgPrRmKouWFv5aemWmq6oBirJqrTt6TK9Bkq3gksXEnCxg63LE9BodqRRAax9rbY7WHib8QqtSRxVVAiwp1r",
  "key39": "3YwLuvuQ8UndPjmvh84ZLNRzj4f7PN2DDqSjsSyPF89L524jWgskPpVeBdVqvawtZm7hyhsP23WPF1BLTnm2wz1V",
  "key40": "26skUAAnqsW95jch5tzVbZtSc7WaBca6g9kN9NDoBxFUWn7K4UnW1V8SM6aSbRFVuLQW1zGoaGh8Xzhx2Uf31awe",
  "key41": "5eswdSx9Udjgyqp7LtgJXZkhp77tobtthTr7bbTUierT8TqGDv88judGQEKsVycKGUsGLBqTzhGrB6qD5tMyhfDY",
  "key42": "2GtbsxoHirTtwtTmHbHE45xsq5APrXmczN7ufNaE24eUCzYAT37JGTd4waWmQiBdH2AnCjMzmzWECrAXCwPtCWwJ",
  "key43": "5AccK7gnS84vWL78tp77tmSt2QUGbz4tN5p15LN26JafAKdQixYqAdK99CSY11zBksBosnqGbntoAbLedAA2idRq",
  "key44": "5ybbf6pJsSGXPs3H6PpFPudLuSVftUBxktMfjq5qYkzWmbXtvSbjzAUpWKgEHXeuXfYPArFKpubLH3WC8LoeHfrf",
  "key45": "4YsVavL1cLkVGCSi3C2nFY2vfz9bStmg3LsV5moZEfDLKcSo6GRPjn7iDPLMPwQandsdfMjuoQ3yTXrQ1FQbKyAF",
  "key46": "4Jeupi2fqTQ6T9Xybo6MQxYULt4D136w2CAeLpDPg1t8bGqCnNiwmRLtgJgV5QZai4oasN4cgipCUYNyaA3T51vT",
  "key47": "avvRoS8nrJT6FkZ7fdEsHzu9VyX3kVtsTWUu97jx2MDrDXCfUz1AbW9NXZg9obfyH5a9TwbdR6oUR3Bu5YDegAu",
  "key48": "2CgmJ6ZH3W5CYQMUEeQqhjduPRVZTeuChhWRf5uezKYcKFP3hX4ZyniD9aLzdcqBarL8gPLa6VTt1GzPqoSAz1Dz",
  "key49": "5eJa96rTh5zfTfXWnJoN17DbFmfJbJLJCNu9n6MEb4UtrkVm1GyPYEp1HAg7SE4CzwAQzkin7zVDC95pdxu1fTfX"
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
