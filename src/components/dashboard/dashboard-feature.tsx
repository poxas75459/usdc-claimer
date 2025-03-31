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
    "3ykvVnE6NxKLX2Ss5ecifDxkUQsPks7PT64u6QJBCjDxNAaWTMtEYzDTdiyKR3fg8DB7jnWasT9ToD5iEHqu56jF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RPC6HJTZAbmR9UB1Qpy5ATeTyAipu7jDK2tPVoCWvyJw2ZSjS1TQpPQ5EE8L4jjxW7iFLWNrFSiSrtyQ1DMoVD2",
  "key1": "4S27gFoJTz8wGBiHybRwB1aaNE1RCs6CfExYHtjFkaNgxQoPXFjBfYc8Lr7j1iEkqVY6Q9pfKpcWSBNhspJXTvnF",
  "key2": "4BqCaPvfmS7bJMxcPa8HB6Wb7pta2KP4qnvsQWh8DeXWmQw8TNB7upcpqb2BqhXANyxWjAzURMSbm2S6BHy4W1yb",
  "key3": "2tHtqvnBcA22rZAtUfm9iXZRiwuasJJKspMgcV9s8gRsghLDFQXw4oT9xEPSzEMFKCRSRTZ6ivkTPGD6yYbUmYAA",
  "key4": "2weG9TQwRnJZDbMAj6J6fu3si5xiLYZJHb99ALfgZa25Y5WUF6WWJ2t9ATK6ueRNqct1kcoF9vCqrFEPjmxLn6NL",
  "key5": "48h7WFxCMkTMJgXKHApSJcyXLezBGKKt6efL2zjPp4tf3svEGYkw1bUrsxtojeWrhhERDaXdrQmScf83uVLLxPT2",
  "key6": "jd4chTiYp98dxywUxUWC5gDkF6zeAxgErkjNi1Me2fQN7GW7i2EyRSKWCtSH69uKY5aUzgE44nrdYYwetzQuFYo",
  "key7": "3gFtwKxiNkygwNF2eP45jDg5LpgLNXdmCBquMBuuWz5yU334fxTZKWcufXqDNzSU2z1YG7vGeUDAMRHrGQdUWEVW",
  "key8": "2Y7nM1T8CYuJqDPz89jHAg2pd9Lpzz5o1NZUacG2ZHVfCTRn88JvXgwRsDfXRywiVpmmZNzwBnJAJBiTQ3UXRNaN",
  "key9": "62ntkyRddpacjNSRswKpLLL5b1dzvmTHHN7w18EYf79Y91zUAp698WBz5aVaVjtNxJN1vwyiNbov9EyEWNuJHAds",
  "key10": "3vKdcdcGxmyRaLDGG1CVAePdaeNtrvmEc8jqSx14vH1tZ3cdzcwWfFGVeKuX7D6tacW5WDhx61qv3JQqGMrugzx3",
  "key11": "5YbLzdx49hQb1wzg3vfseVg5MnNcsfwqk7S5gofKmSBR4cBMisWGH8xt35GnkAWaiGHigM9mQLKrftFKY22JsX6s",
  "key12": "3Xoj5YHQ5qZ1ivN4zvoyP4VFC2Y5YsViH8ww8bCQVrdK3buuEgfEWxa8JEfehj7mELAgzPrGHagaA4FbWtJnz3L4",
  "key13": "haN9EfnJCMxGordwnQzV2LzpvVxvgvsPbrTjUyVpJjE6ubhzAdCsfdVGFt4E8nQnhFp2hg8C5cXQWxVvmrYJyYL",
  "key14": "4DyqjLpjy6zupVGqRGAauFFEqpQtanrk1JGj1xtz6nuonAHFiGaiSaEb6PpgDcxmMPNPNJM1W3fcn7wJy1HGMdBw",
  "key15": "2hoWcLqu1bWKZrJUMrKWymHMeRHAHdZnudZVcKP6VfC1eiytTi3w5B73mfJvAwRZt3uQFB34eLvAL7UgximajAjD",
  "key16": "3KeT4xzuh7yuxfdeMKDqgQikHiXqn5XxHunTgtmimAseNfsN53RZNHg6yX7CDTHsJfjtRu4EuQcirV3pFMYtB5bX",
  "key17": "TQCbaBiPXY4Nd1TDd62Weve3dtznj7j6NyFoLNDyv5yMfu451cL2BA1qrdtfYSwQiwsGZxwp6AHgSfxyAqFMdMc",
  "key18": "ajz4oiWzYkrxEYYntuV2y9x7YZa2FDUgWNzo2Hyx8e7pWgQQXSH1x4uQsoKAfW9JhAmXzntrhJxEAW6XkyhcaPa",
  "key19": "61tt3hQ4uDzAEnB3xxkSRJF8wHjMWme8xtdtfNCRuBoA3uLjdAgeeHvUqk7aS9q1Vbui9Rr7NkPLHehqLYNqx3AZ",
  "key20": "41pHv1fe98pRazHqWCkQcGBGKAVpon5WPfrA4C8BxrSzWvYLHe1fssVeKX11JbnZT2Yy9XAqe5pFvq9a8tCrxh9j",
  "key21": "2g34ejEjCTMK8nzH9TLNQdyqo3tVXDDqajJDgb1j56aRjYSbiLs87c9rRLHpPZenqPVwjyCJGGuBPQ7vSMazxv9T",
  "key22": "5Q8iERBpUJg35XK7u5QEQbugFvmHTk5JbpXXBtGPbwR7vJmHd62weRhQ2BCf5S5JiDQgHMKh5ZLPBgB6BQMnpNwi",
  "key23": "xAboRMbDUsCeei1aqAasdC7FHXpGByQWzPpQ6E3gFZRHv6KzxA7NZAFMLo7E332gwNgDy4buBUuwHCAby15BoaD",
  "key24": "36kZjd47ECLCxyM1RAPcTm9jFcJTHRKKAdTuP2AuWoj3xNezMPX8TtS2NgRvAfUkwSiCT5b7eEwM1JuGCSb3YfYD",
  "key25": "4LLwahRvmucZB2zqU7XsjPC2cGgRciqWRscaHZn8nuQBZe9JcMBxt2eU16fLvgXYASyqBk53XY4Up3f8CSZxEy4i",
  "key26": "2dJp79sv3R2tULCxCyCqCUWNxXTzXXtYCdX1wGEuHohsRUGrhHtH3HUrQ8FV6vg5Z6wo3i2CFCEUjAmwS5CRXLy8",
  "key27": "51xuqhzCDNyiMPbBzANJmtfNvsf9cQV3yirPp1jPpMpRLhsioBFK3tV7gE7eQNSRaUACAf5fGChHEe8xFPJZwFj2",
  "key28": "5aaoL5sYoqd1474zWnRdB36VAfL25VjhtaXrt8oK3CAWmQxHGvmiMqH1mCppGMTJcYFx4UjjGDDJ1vF1E9ET5Pby",
  "key29": "4MpXDaGjVZK2oMPzzcrzjay3CvXXfZjSCdcQxKwM7nzz5n3y7nrsP3Qc9NMJZ79gRure4qePZwea4mnL8gMK3iEg",
  "key30": "DR2dfFoDPuyWuWqqNGXgxfA6GaCrAY4SaXiKqTLhmmwRLhfZ7cQrdzRy1zo79Sun1Vy92AuJoEKuSfjCBSD9xhx",
  "key31": "5o2zPup7FdnuZGekTWcNNe3vWjgQ9Dgz27eJUt6VfJdtQgfFTg9MspDnAF9YhB8fe2LHW2v7kp31evyomDPttprh",
  "key32": "4RhNSj8vekXEGVk3WZTj6DmcKrRpwnuud1G5Anu5AGu7kvTkhxMgd2a7USZwSWm5YAWH21tCthzuwHZnVVS46UWd",
  "key33": "5XsVkqocLQL1tgkjfmStARbV87CqDdjAyxhe6vW4HEH7UJz6BGJo3Pa24FwpEpy5aTwn2MSv5toEGYWTry8sicmd",
  "key34": "3jHbpeijYwBWUX8qZio33uGaWggZpvQCXEqkMAXLxWRGZhKTXtcM4fchPqM43mcEf7qW5jpns15pdXv6RSK2Hi6p",
  "key35": "4c31pJPCiNt5qxhVbmjrjrEcowC6bD1mE4PemjrdZSxQkmn2pBE7JyqkZZtxogykPeRsUmUQHqXYTW5ENDAQ4Wmd",
  "key36": "5N9gsueeQ4BcqXwybVbDNQNuawZEWZiZc9hHhSE1TSqnS3RBcxTS8K3xKwXyZJ7quhjhbobyT44cQNennnMoKyDx",
  "key37": "2dSAcqxHwZoKCwfgrJFtHDfqTg43PBUDAyt1xNuZNpssnTwNckjVmLeAQY1vCEvtCgWSGfueLDevYjrLHMhhNv2w",
  "key38": "3Jw4akqh9APHqxBC3WNMdud8sVW8v8UuvyVz8yKAXYgTcv94YxH5bSLPtk72JHDcE8zq9DHBKULPZ1WHi1Ythe2y",
  "key39": "5Mt1yegga6H8nT8WZe2aDvwfhBzdmKYtgp4TpPdWWUwFjdfEUgDUVvZqtC2azXdnKvW57RUnvYC7hHbSphJ9FVer",
  "key40": "27WfkE4SjNYH5cCjNf1dtRDVxuAnjaXbqkcUpPNq1TzL6ZjmKTSQKtQheQqNBkMqjqzPh5T34KtXzTV5W3QtrUQo",
  "key41": "4ZR3qAzRKqFMyvS4EWc3NvQpHxGdy9oQP7Qh4bTsQp4kYN3x8kbYhtan4hvw2ujUoUWePFH3doRfpRtm5G1hNwJt"
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
