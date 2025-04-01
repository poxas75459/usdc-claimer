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
    "boijsPrPD5zRGYxUDcBdmov9D3WMRRVFdinTsNTNsxLXuktWuXwY6pdg4VGgFpRJ5bcahSwQ62JsFtPhHNDHqM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmPxMs1LAUMQd7BjUEcgx4CrHPqrhygUrVTAfa3SKqTqP8uHaCpRn6qypwGtEFNkduxF6okfxkXuRbgiGug5MHF",
  "key1": "5tDzBfdb91Ku1b4jKjHaQkHQfFoTHy4N4HBZSBTp8kVepMwVMfUrL7yjXCkor1b5LDCVsZcJEKid86vCVG3Dz6TZ",
  "key2": "5Fa6QEsfmuzWy3yFZCRehdD31Ejb6sBh3rXE3zEL725hjUDe51Wy6JeoXLRNCVYty8iLnutm1gegE637z4gQYLib",
  "key3": "21CTdiEWFEN1gF7pzVkdd3ojZznXj16xGBcVdVLkEZyBEbkEMearBRDienYqRtV5sJCsdvVePMb9y5dK1rLrp5QL",
  "key4": "46LU2FCH7E3ZHkTKnyoVE8sZJfqZGHXtCtqncNKfWjkmbPaUZJFEKEFX1nXwPDyhR9qMNBtRfU8v2zZQBbKKDQCV",
  "key5": "Zj2E4doTN7rxzkkhnQfDWhpULP8G7oEjAMDnN5byBBVD3q6uqYEaJDHbuqmPnTEStD7P1mWbuQix25ZtSDh24Ym",
  "key6": "e3VPJc1SvjCd7AXMbLu7kH17zz6dy4FAJBYRXdmriX2oguJZX8KnHCH4tdYJ1oMS9y6tYT5SvbU3wYCjNvsMGoG",
  "key7": "3HK476z8zwwQNKfAd7hTcTqHy6oSMUEnLLvyrvZKMXXAwTJniNRQQz6jTofgffmKS5pDDJcmHJ8VJKyvd3XrK3AE",
  "key8": "4LdYz2MafX3Gut16ShtvyxV7WUGTaB5JuA9hck4yqMuhVP1UpQwkYnoaFkeM8KZW7PunaNdcTpAbF6n8o6Qe8apx",
  "key9": "3rxzuW5aRndEEiYzKgzSA886vCUpQypEbLawWCgWnw4HQYNBhcgLxjRDsh3oTNqQCXtdVMkEtRB8cdGbT9X6H75y",
  "key10": "5Sz31tTimankEeSEL6rHyjwn2x6YWEaS7ZqVicnzmwVEEweX8obgeMADMJCqxPtDwyN6axTS3ANfhpidYkBV7ci7",
  "key11": "3QSZxZoGYLUgSwR4dvL6yxBKnRwGKBTjTuo7TkPbzUuTpxYWNjAvs5qSykqZtMuKBAT2d6yzDEHbD34EuDpA61tw",
  "key12": "3VLDoYGcj9uwqVzDAaSamQv3vpdXmq1XFjfLH9mVsDfeGfic39b7tyCGthL4Z9Kx7g8MLoTsCxRGnAQMkS87jew5",
  "key13": "45K4fWj9k4KvVNmjzzrnMWf3bPtV1ySagYJ1v4vqUCWPRGamAqP3sShhwKNT1FFhsUnpsAPnM3YdJiMo6vdVVq6G",
  "key14": "4A91qCm4Z3tVtrFDWUzZ4cMwB9uQuXQmuLMegHuJTCtFkU9CjVYshVD7ikfCeSfrinpsDbDcrnAHD6qf4LGFFtnz",
  "key15": "2XRkZcGGAK92NXCNxAESJijKmKynArjPAVnZ62tu4o9SHH36do56YMRhvL6BdXhRvjvzLrTBXbQ3dBLXy89p5ijV",
  "key16": "2CcE9f4i2n4aiW7aJ1RRjtDxKagKShBfma7b7qwhk6JJUeHj9aMLjfmvvjV53htitCoHPdPmf8UUus2xReLctUjU",
  "key17": "362Ay2hQrFiJvQQz9Gz69E33rnScBHWUvJ4JsQw1i4zbqhVqT1kBYpTH7RTQGBeZ7phA5h8mt6XxbmmXQJJWJS8M",
  "key18": "5VDSxaBTzwv6FobsdPVV6VKavAkkKvVC1amjTzt3wCfViLDQ1chanRNjGGFUWUZjRpmPCyScFZVcyPLGYW7Me5wQ",
  "key19": "6788VKGYYe5XhXSERuMmy122YroADVaRe3XMFEWax8ysfYouUAo5VdYN7jZQ7eE1ea8FaVmvLaMi7HJQkYXS2hN7",
  "key20": "46qUYfBY64Rbay2WiZj7aZvWyrV91VCpfJ8EhFx3pZJxkXiuC9m73qVszMvGRj6p9ZNKNKYyo82opevSFPZG76R8",
  "key21": "zMHAqq6mUYyuhBRsqLBH7gKV9sznu8Zf8kkcXbp5Fq5wCVmXNCDqVWQfLJMwHzX6h1Q3kM5SsTQvuFPwAeP24NU",
  "key22": "4Dygy5QGwrse6DYtR7xhT16HC2KdwcUG8rJgGfBSAeY3YfAeZgikJSGGV1EGAmtwjUx9wdpaGcJt1yZNBzGsxVPy",
  "key23": "3QneFE4hFMwP6unJ8JZFfQiYMG2mp4bjf9dLkGhcdSBYZBT7fVp7Up44NBpD6oJejKfrVjfo6LHTZKJwuYfAjcQZ",
  "key24": "4KexmLWXBYkyx8ir5s8wHGyZ8TMQ1WYTvhykabXqSu3C1Fzhnjar8Pgk2xstjXfLuVH3hjUUgHysqDiDNyG1qa1K",
  "key25": "56yPkesqotswjr6gYVnni6UckTAh1mddoSJjX51cLbivrVMErngfpYiQWuRn1HdLumjnWPn1PwLyaWLskCwKPEqZ",
  "key26": "66RETTwYDrCPdTABWuH4FRASgKhhm7XjCDNdECKc2q4SrGPoS4hypZbuSFcsHZK2JkV7nsEmaSFshbAvz8yLgAAY",
  "key27": "3gZksLaRzsUB4tUc5UKHbQg8Fdx2Zf55jZhf5DkB2D7DT417asJ8RELukSrL5u1k66a2mxghoLCz23hCFcpCMc3G",
  "key28": "cweXAci4S8AWfEPC9Ru5EekTn952sD6gUs6z879AeQvPyxAisamzXnUWLs9eCZwLJobuAUtviwktMvABRKbYtmT",
  "key29": "4GeKSuU7RCCESB4VmxpWpqdPuAM7zgENswdXnqFuSN843jNN9js36BPga2cukZJWBVjj142bYZER6xVp3hsndtyv",
  "key30": "2B3aaiep3XQ875sKZ2ij1oxm4zE3oKutWwmHghWsf8uqV13L7hBqkcwV6SRzyTuQ5gRuA6aq9Z9YzJnZxovvjGiv",
  "key31": "4uTCRDHMc3XqTtDmTedt2g8Vgmh6fMDFCHeQbE7dpSEVpgFpZuYMcU5PjwMk8mF7DtkkzzWaSoAB79KZVYRsCwbL",
  "key32": "28WdNHVwyZpm1v7Jg9jmuMLa7xg94ScsMYi8gi2YoUSpfHsjDAazCK3986n74NAs4iTjNZByv9ZvonsYHc5xwKxg",
  "key33": "2AAZScwy9AruPEo2w6BVqriv9QS9YQSoDS6cnM4TH6E4yVYSyTcUHd9MN6AJaMbiX1aki28L3zV5VQPS61zZgt1k",
  "key34": "4dusWqCGTZ52bAnB1nEeA7Qeoe8ufGRg9dPq7jKY1J6vNurFQreXixkwUuDQAXKMRLkzkE5vCuKZ5WPwK5eqmD5m",
  "key35": "5tq4Q3UeLiKN5sF5dm7frsfidUmxWaAWUFYAcoWQgEdCMcoxut7xQbED7sfsSC9ejFdaN3LHZ4ULGyRHVRvt64Vu",
  "key36": "9cAUPegR3pZw35gUbk1pewRLae4MkQQuuVvDt6GQNYGEjtBC8Hpjwon3harJLxaRBza5sB4kimRKcUs7msVRPXQ",
  "key37": "3Azss4jrARfVXxDYtwWsD9Ff668DeA2bR2Zt68F8uzAZ7bn6vQQLL5A1k48Gq2qJJEMx9Q2cFdDja6DS11CfKvPZ",
  "key38": "3FBR94Z3AJvuHrVNsjUfCABgHJijemdsBfZ83yTWmiZeBEronBjicmCdkLkUMcdNkPScWYBLXarWafXDCjFJpe9j",
  "key39": "5PwTLCfsb1onPomeksWFLQkgeHuEYJncYmgu9wDfp4mwjt63PMaRfHCbAMtVEVKp9r9eXdB1ToPUN7ChDGJcW3Cn",
  "key40": "5cupiJJXGsFvGig7DtTvgteBoqnhxzC6pc4Dt5xUQkFjxuPCaY6KKqw5MkEsXgLwapGTVtFqgW74fHk5v4PN18is",
  "key41": "5NFndYzCwXi4WRvEgwmXnCmnEwwQ3WL99QankTgkxjX3oX6yUKQsoHKJ1J5ThdMLpaZs7UgSdXDdWnHzN5uxDdCk",
  "key42": "4beWMAnEE1Apnw8kYJsV293MfC9Zz4Ptcg2ztCbkwm1jJzLp2n3Y3xWbttkVEYX1Hzg2HqXET3qDxBmjCbvArgH8",
  "key43": "3Kt8VNnwnNDichBtsQF15Va5D7CB7ik94nrTADwEiaP2eEjeX2UoCnfiKW5UL8Noka88gWKLvLiqti9bfQwWjKHx",
  "key44": "3R9q7QU46hHn31W8HwLgpBCgmvwfNgsNxThrAhoksstMs8dc75TRvSiNrHCuCgpejriyb4k2LLMCzATevmFULVTg",
  "key45": "2ztkuYkZaL96TkxYHrUCcyeuiGuA4R5DEPQY2XUs6u1FMJ2ThKdmzwuUrDW1raVA2A8tE554EN6EUNapJsuTmnKM",
  "key46": "5JYr1GasQQTbty9tifCpweYdmn8ZysEDH4m1LEzVKpbaRBHwAHd86GBFkixmjX3U7KgmSWEPcKrqD8R94TEsdzM3",
  "key47": "2dt29Wkux5184Xj3XKmDXxKD7cRCd8295BCM8ivoaWcSvW3d1QmWHi8JDfqwVcjgVqpoKYHVXhBV43yTqr9v6R6v",
  "key48": "2xLzsiCTwTvr4ioKUDts1T2eXyRfphxbakNqWhvyeqWKVQEywYGg3Mz7v2tNPQrxpf1h1ofkLhcEHCFedZYWsyG4",
  "key49": "2CM5xYXPTFxsX3h7e43UZNKW8bPZpVjv4dMMeQDrE23Kg8HmecaZ6tDnp6BPjAGFVmMK3rBFAzfmmjsX1AYQvMyq"
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
