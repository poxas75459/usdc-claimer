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
    "3Uj34DeXtKtLru66tdDTWGG8VcUk3mUq78w8XjheUEjnCQKsiNU5GDaAU8TnszgLnQAWDJJFd8P8VdZWRYdB1Tzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pb7JodujAqzcW2RvXc9n1G1uZTMWje5pHVrk7A4SWnRBaCZNW96ZBfT6qbNbLExPrsiozaxad5tCPPEK99xjK1a",
  "key1": "L4w54oF6ANCJB7Ydf4GP2EePZwy1zvQLLRiNPPuwjkGN8sk3RiShbLxgEPRzNXGAHCSsCcD6XHHAaQk9DzP2mjx",
  "key2": "4K66JcJyaqAQzh6MvNGEJC5FhAhFYdYqmH5Ko5LMq3NxfNKqdeaYUsXqWS34UFXj1kPDQT4uzfPxq1LauVrib5wV",
  "key3": "5Fa9qbodr3c867HTJQpiD126465KhUBMLP9MoeQE7JCKTq6mdyskXe13vwbXLon9sxaEaXUnvxXisxMXMgQrkuz2",
  "key4": "3WGFsVa7ukVpW4rEbY4LTy97ok3CcMeyU6pc7YgWJt8NL7KuDRCUAKJUQCcDJ1xF6qdfRFxzjorf6CFmvsAWX5i",
  "key5": "pWVxhFMiFjiG69cLtcLHK5Y3RWKodxCdArbEDEnZZjErpmFqH5aaXYRzx1y36JZhAQEAnoK39sqWUQ4GhS7HCeL",
  "key6": "PKTj5cwpRPQ3MRxT7nxcDndniCApfDBqUuPgGkiwwkgeob21ZKjq4gC13FtCDRcEjYZJSzrpzKBrhoqvUhLvsmn",
  "key7": "22nS3bijET6ssNzJNT5tZSGdzVqzRmZQjRwxCKNr4jrFowZsw73EFqzjmQ4sAyrRcucvfzbpcqMwezbpez5WEPdu",
  "key8": "597dMZhv9jojVXooWTPVHfvZonBpv9MQzLLTvugeMUFwQGjYBZ57ajEHaHt4j6nitm4DwEEi8mZWNRLbBtztQSmq",
  "key9": "5Ee4buzG1BP7iDnNd82G6bTiJ22FJVUHcWbk336kV6gYnHqvy97c6Ho1Cmcz6bSaJiEkn42Xw9o9hxayKDeYtpZb",
  "key10": "2Gz2MdSPePPCLAfqU7kppGd6CGs14S93MyeU9vTY3VgQ3qcbUWff6JfhLWqZDfDaaQhrLRjtXw1e5NRqnoYrDhiY",
  "key11": "2zkZfvBYxJp791T85DmaDGmHuxhFNMQLE9RBRR9zeejTv9KrMWX5c1BiNubbQDZrp4qSjJWoQpFex8YyhX8aMh5C",
  "key12": "3dt8GfoqyrBtQL8DQCveN6o7mq1f994dDNVvMxjTf6PNkk6oFphRm7Wkh7VjzxwaYeQuRgYyCuveDzqNQHyDKaL",
  "key13": "4hpbgiNfWynDuckbgxanX3uMYs6xBWokPsj6JtEhDDeW8ZX8qwfLpQy9PABQd71v1LZ5rhFASP8vGeZXP7Xujt2N",
  "key14": "3HEkABx4UYzNDBvV3m7wifTh8ijEuxDun3qZMmRfj1uJC54swRYt9A3SzMQeyoDVU4wApFymrDQnAJAK1P1risff",
  "key15": "ppa2j5X6gee6NaxzQTMSYyi1oD84w4M93YuKmiScVG6DDWpXM9QfegBq1VfJDCN8WyDvN1CeKeTjakUPvmFT4RY",
  "key16": "4HVCF2X1Lna4FSydYreCbBTkXAKyCj9hFsjZAYwnzWmyyUUtdChztknWa99bQDged6ujY7fpLaoKMnUx9Tq7jN34",
  "key17": "4wp4jhbEU52Do7LsoaBivSPJuf8zud6wA2rEnviFn6vSRJgAA2c6xKcrLKF8LZLDn6fPsUNvvyQNu7UQgSnCHgrr",
  "key18": "csRXPxiLRa671LRDCCwkiQ4KM8ojoyFSFEGQQshuSEVj5SioSqeYXrFETxAcQ6NYFpxRMzy1kxvFL2T8DeLYr8F",
  "key19": "3ch9foT32PLEdyTeMKkpH6XonkTmLjXkRJ7r8AZpnGSLQuB1aTbU7FqUemFizzZYSqfNUCY8QsjzNWUcbcwrCH4B",
  "key20": "2a9qntLZP48991xHZxfMJdfz7c7DqnHrySyLGwJEv6FY1YwmS1oSyFXZnJ1yJ2YGTFzpx2S4ZYhJ8HLstKzEWJj4",
  "key21": "DX2tVTS57RcWVqKotNf3oSYBzXRqmkoggTwjFiNKcJ1sMNd3NiL9gQyaoJUtWoghSxsEuFmZECSck6kLTusPsgK",
  "key22": "5XaD8nanpwC3t85vXMjUbes1PU7hKb2f5y9F2mHFBD5iYjkdLsb9CTwNDXhw5MoWSHZZbSkUAU6wiL9DdVxnJrZt",
  "key23": "5hLX3FbbUT1Yp9yNTU8izBtHLfWr7jdEvB54rtfW2GDF8Akw3gxHjrAAvM7jP2CF9FCGRguwvkKjVFUC6eCGj8Rq",
  "key24": "4EZB6zGFy1i8ninZ9iJZJba9ZLCeDu9UuneceXBr1x6PdJENkAqDqf73mWzL4bcTnNGJiQrzykpnbDM6G8ZQPQX9",
  "key25": "2G6n8jm3gBoYuF9AkWrfXiS3thsgX2jdF62QMevg1NjWNtu3wjSYRGSFF6bgs6r1Y1kU9Lnmex2M4xCm96ieVtzZ",
  "key26": "2S4vZaBaE65i2DY3ghYqb8SCbQbUAv2GoMrbM782GwKhPAbdJhrCJWP64voWrPWgrYmMWBoQDobD8geoRwpV2Gq1",
  "key27": "4jFgk7hJQJgc9ERsfhWEzxdXp8w2HeXMCSFPmkRD9gQJqf5T3YTuPTRD4ccvE2UuFZQjgfxpWfTWrPryhu1AmAdW",
  "key28": "3Y5hC8jR5dQUwQdd5FrMJ3pKQKGaoYvwUgDt9fmcmpynGiUvop5NBuS6Xr9mzg5RgcbDS55Q2CL5oHiWjod9mQmw",
  "key29": "4pyCSg34bk1YYVwz8erKZ8y82zfchTAwHBbacwtKprthPr8dyc8LbgWvTd5nFpvsxQJi3mJ4wqgKCBjACh67pLTV",
  "key30": "MGvgEjfYsZnoz8Gq8Wo3m9HfNKiQzGoS8fsojCWiPvewsPc31HK2BTRnXzzwVgD1UzaYv3CiGgGYZukPcpE6fD1",
  "key31": "5ksQ1G8TL8NcDy9D5Gj9YLF8tnzjC1z3sUXFjqdM5dsvvqnvcas4Qc2rasBvUkaWUJFaNge9pfLm9iSrcikzBDEH",
  "key32": "o53j5XiZeEfLyBMPcyMB4n4rULokXFwyuj5AB7NYgMSGXKQTdbLjNhWzYbEVsDguu97KyMZsTnWrg2TdnfgUCaf",
  "key33": "4tdrrwXDtTUBhAowp1Ragv8gERV6fxN4Vsz5MFK1zMEdtrbVdP1VYoZfovpepGd5RduZkkFkQQELCiPLrVGDsq4i",
  "key34": "4WPseAgcMFcMdP96b8XuzAevDvfwDiAD7QaH7QGt5j99Enj5CN8w7JZgf7YSoK8Upe76aa9qcgynMgqoT9i137Rm",
  "key35": "UYuNCbzZNSyNnSDGFtWys7SdomQiEin9rkJ4wLoy8vTUZq7WAdreDCnpHoJa6ptK6ydV4HmoDBnsT1CrhtF6gyW",
  "key36": "2zKDAz9yt84yN6QFGG9DSEXBH3uQ1gLm1QwK7ntzztUGNRaxamNT16WG3aMwnAmVsEryPc6vc46WzKQtoNT9AhpR",
  "key37": "2Y4UqtHruNXNJ1MY3MGoG2VUH8zD4G9Dy6kTvRGurDPhCuSC7qyFXKdfjHZrFT8RfVQnUbaoXM7PXDvYN1GUwfko",
  "key38": "32YcEe1n83CzooEKz5Uqt7eS3vbuTd8hwDrgvq1U81vsj59drgs5UUi49HL75NGQTcUHTD1WBDDEf5Qj7zYLBi5o"
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
