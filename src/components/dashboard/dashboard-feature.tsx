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
    "nSvheSdy5upkfX1NjdLvEJRThnqCBJNzBcJEUHWpG2xUpcqwadyXJqQTKUAbwJHQQtKGp3BfnpXKiwEgCnrVq6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJC1uVHoosg4meimSrDCAkG6mvFnQdqz3J2ewhkxDjy9NiZkaxjEjHYSGcknwc9XZvEW7MSb2YPs1XHcmCheY9L",
  "key1": "Gn628FHx8yuaCDNwDLormPiNvvVLutRgHphk6ZWR6vdNqVMVtwgPmzxSefRzQ1NtQK8TY55VfJLNu8yAtgYEqkx",
  "key2": "3qDJerBLjnKnz1Zuqad4FP3hBHBC4Q7H9BqCYC66qjvcp4m29SFoL9eLc9rSi81FYaWGQaM1GmNcijXSR2Asi8qX",
  "key3": "258tuAeJU6TqaPQbbcX9RbCvHGVm5AWRR15Qk92zKGSaXMHbHjPpnjCtmr2uCv4yMegfjCu63xES3dmwFJGvnx5W",
  "key4": "aLe5jqae9Dx6vpX4aicHQ3XfBBUqjMjxwQ2qRwPbMCS9FXdtBktUhJHWLHKakX6pgGa5azJQqLccsaQ3h7nZHEt",
  "key5": "3WYLrTfn8YBDVHZn1pQPEc2mNcNxuCeSyZSZBgmk1cjVkBdViX5txnQkK6xBoJiQixog8J3CmagZm2o9EimWohiD",
  "key6": "5WTpBrTGpk46zqGmZLMkTXcRypQEtRUBRMQymGGiSjpzbUHQeW76Vba7fcnqjp7n3pLNKXopGcyhUfvYZSzhLpWj",
  "key7": "3X59UYpyrrfrtGRdewRvgoAXXxNvFdE4hSZu5H5Z8md3HW8vFgANr5KhCQQJasUUjYGTp1oQ4kxSpf2LyXwiWRcP",
  "key8": "3csaS12dsmwp4rhzpppMXSnLXeWTwJ6wYE8NdAj3KubpfuGRckNHxdpBdizLLHDY1UvohHdVKF4CdpsNdHt55Xbm",
  "key9": "5vHRd9Um74mZBnKsCobXEagbBhyDHN631tWbDQmwsGgg11fK9Azy7mxnh851hvAcGRGtNddKGP3ANGu21hmgMyES",
  "key10": "3G7tbn5Cu2v9RaMUf8sKSFy298tXZ9cog5nLGaGf9hHL5PbPjQGFGwzhnsFGoKa7mxJnP9msWT6GBSjyHoZwUbEe",
  "key11": "2z21yyzpw1ovxPJWxFxGm9US4XUP9R75fhtBbxAiY1X3bVFE35jdmyo1xUxX7JUqjA61ixuP6HStJWwxxZJvQHAs",
  "key12": "j8D9uRHUBztdH7EcwtHvxbP8mRL4DiGM9MmAC49VrWgWcQqeDUj1jPdxvoF6CxomygjKWEks845M4sCDjhE7qDP",
  "key13": "2yQVyitCEggKwiEUmEFVzj4rXdnHtpgCg7mYc5wfDZKXj6uWpJQ1yhWGk5HkKpynurHA8HDV3Lv5fFZ2wSiNuSnn",
  "key14": "5qwLLqbnTmYb4ZUZomhpheXu4RcRAcJwvaGSo8PcFwCmpm5AZCax4YePHxyhD585i8iWrMx6U2ZjQbePUvTUq2zy",
  "key15": "daV8gcHiCHbFmYYWT86gKcJZfTmhg9dhaD4d7YSEuM8drMysFEuwsf9gxWU17qf7pyNqMzRGSRh5ihp5Ni4cPTz",
  "key16": "3HZuMniDdwWUFg2419B6RsUDTfcTptKjpSmGWJ2dU8QCUnxxHr7eWKtkojz1Ju5bPHSbjsPG6A31chubbvN1DayK",
  "key17": "5atNbnYuytdyc9QZ5GL4XPVW4u3jED41xCnBjPU4G2vpcqNU5QQHMiE8R78HQGCdmdXLvBqsWvmnTuVQA3bxn64K",
  "key18": "33xxMLPQFYXXTUmNpxcFPM9UEeX93iGKfWdKu2pt6U1FD6B3UavfnHVmuRPVCDyvTK6DTdNQyffmJbprdpRw6UTt",
  "key19": "4z7Q2SsrKyLkWV6ux4bdfg7J7DtkSY5es1wb1uEJD4vm4AJpEs6YRME9jNkQpBDdKe9ZEctjsHH2eVg9gDuuGVfF",
  "key20": "3jatFNhLuDuStSYtyLkMssDPAdJnZ3yVoxf1dKZKLhmVgPjVcNdjuYVNqbQHwWF4gyjYQ3CguVSmhu8nvbZcRqgv",
  "key21": "3YbWkLTeGJ74tWZHBQVorLf8ERi7KfVZexNUH2YizTwGDN8gA488japrRmoCAXG4bzzMZujvVWmAPu1R2DCCfJYY",
  "key22": "2wpsLQ3C4ApFEHh9UXi6jvH17buXRh1j2hTSDrRHHcYNnzS1MvwKxfHqeiu2ALwc8HAxyaZHz8zfjXgLhDH4cuz3",
  "key23": "4hN2mjL28F593pGvMeK5zxWdt9qi9xd43qVHu42bunQctG8J2mYZdJNtJzd31CXh5sfxqyKZbpRSksWQDWZjBEK4",
  "key24": "MNqWkTTbhUC1GcL4f2Nobp5oEqvALs8xGqKtSCdrsgPn6MeiQuGWYEVJ6ND5yBBuLwQqSowcsRqPSyV4btn7G8A",
  "key25": "JCeZqjAXSiyd1Fq3oTPRv9gbfQVVA2skSyKkmVFrX2ZNsLyVd4mXy89vqeFLEpNrm5DcMSNDKanvMpA4s53LDx2",
  "key26": "4HX94bqHsMspFDyaVBr8ivcRartw18UzBXTqgoqyVDAiGTBrM1p39EH8pupmCkz6oYVDhUuMgm3NJZ14UoieTzeG",
  "key27": "4xi4FkoSVdJq3PZus81KeMWwFeuK9z97XCJqswFQKngwKT8WmmEuz99XRhHajPeLkkov76vSK5SD55SBXhYBTQV6",
  "key28": "4CC2g554Pg2PhFaHfZMGvzvtAx5uWvcoS4EC2qry9Ze9vzmD8gxnsGQfTgoGcTepCksJ2Lu6rNB5GfujHT5TGnPg",
  "key29": "5KQjr9sh7KQEhqqWUzCxKBos9BMZVX3FdRUx5cso9YexmUqTqzSbfX8t16iAZiL9BueG6fVgzTKsYWXH9FHgqkyb",
  "key30": "LPLT6znDDCxAmMQTuhYFxWeZqZrdrZUMjoygK7UH8N12a4eqTvCZfr66FiZ36cSwkuELiwyZk2kN8UM8qqoVgfQ",
  "key31": "4ddXRgv7WQ8xMxtJquhpgQovv4ywWKPesTZg2eevy8nGVrrMpJfsGgfKAVMSCG7wrGt4xeuBF3ZoYw5JPJdTRauW",
  "key32": "2JvkXuQK5S6XdYyS3Lf3XY9AqxSryq6uev2yHtyiP8KU21uqFMX9Gn5UEChp97L8ZTX8KzD2i1EZLqioEkBQvu6V",
  "key33": "58Pttyguer5boJvq1JdbHjm5RCPmk1SQLRK37m2HhRmAQLVLRukeYDLpuAXD2XuWDEyuGUtk4Jx9cHypxCf6jm41",
  "key34": "31BcxYxjUKWZ5ZM2JY2cqjahAcrm5eHF5UJ9WGhCXadfVJV4BGc89FCqTxid9ZAxXcGC7Pi7zGsVVchxRFoib3DZ",
  "key35": "5QP2ms2Q1D4EcNtqjBNEKfqVXfSro2nbu8WzL7UryPie5QCek581W6F63YyUJxxkhiVbyDMKkuFGwCxh698hD35F",
  "key36": "4J1cPfpdRXFG6AMB1D8Z1YmALbgTJBJFYZjbZJwrNa3kYfqa2RgtvhAAphVfupBgyjic5KeNnowieRGsLRsB891F",
  "key37": "2QFqy7xCqsF3AEofyQjzyJHHVtQL24iUkzPQuBGmuiHyu1wEX7wjTHz3B8FhzyRvAdnR8aPNXdmUW6Ebqjg2FE46",
  "key38": "3L52VcWKaGwY6hmHD6q8Nq3qccDV3HJ5nU1Mua5CAgfqYWC5MRVY3iFb99FMhLmTRVDQqw1iEhggzxYKF9FKDzqV",
  "key39": "62h99gMwNADLAsRsH2Mcg9bKT1Wyyirti7rCyU62X2t4D4QS1D9FCANN6LhzmdECCvbXPcDfALrvqBDjYakB18Mv",
  "key40": "t3NTeb1YEK3XpWkXFApnCd3M2nUCQdFwNieE4ejudxdcv7FNg7Vkit7GMavpfoP11rCpj6KpFjrip1bjzRVvNhx"
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
