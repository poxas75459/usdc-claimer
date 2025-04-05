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
    "5oRQZUb39BorPJyXsp6DZk3NHscQ7Z5JBWH85Te9V5SfvmcppWf6XRjqYtQepKDd5XU1SXBWvTrro2ZEovY2Hojc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "217iE2pdoGfKyzYU5oVaATXCPRytpjCCurRBvqUgnkW2iaqjFUtNhBfR3snxquCoZCjW9DN7jzNqWxnjVvK148Cn",
  "key1": "4PP6tHiEAU1v3G1TMePhdA5FikVtgdVDGtfWJs4QdqAiVmssPjscRX3JA4fYua7GCoLQDUsbk4Mdy2oaHr6rK7Qh",
  "key2": "YnmPsq5LD45xdEh5M7DAvzqNfcycixvB9g2Uz2GSgF9qzP5x748G44Q5zX2M4nq5JQCNWLetSHRgwsfVq9i3fdt",
  "key3": "5b3D67jUxca1mqzgDRYoKwhaKoby9E9dAVBzSEHjXRmS4dggAEyaAPEzESVRLXUe7FJqeyefRqrq9EijDPkuRvPJ",
  "key4": "2acH6rh87n2s4TVu9PzB1XfxqLtfaK3zoZPXmceA51eKE1LAZndzNsumki2Ez9pjrCNiwwyqZTpXJtj7KCmXRE8y",
  "key5": "3PuHA53LKbk12SD2TMhoyHPZfYM3GosFLDFe5vbPLPbYKnYbosFmXQN9THskHpsANmbmTaGd2w1MmaTcDtbRDwVz",
  "key6": "3SqgFtbxE1oggfhd8azuCSB91FqHmewyP7jaW2pX5Sqj6nAC4664EcDcemrUSXapvu9ZhNtZfc75RCxwqia1t4zB",
  "key7": "W4vERn9wh9bykZhaQVi51fwPyh2kpXEpKJjRrZYXrGkK66GAKBq3g8DqYeY2Y92T8uQJ2wCEXYKnJUtUACF5E8p",
  "key8": "4rKkX4oBhBbZXRXa58VQCqz9HwRos268yhWQj1U2NX9kLjBkZ5X1MLUsDA9scwWsBvt3DdK2AnGpac6TtLp5kgGd",
  "key9": "Hob92h9iYZBV18dtYjkzbqwSPhWdSJYZQdAkW5KMeKVxwzdeL8XnX8Ykyz37CQaxf6Aqn1r2Rz8eqW695RAkMNT",
  "key10": "648Xrdsx1NBfqaL7Q5RrLvmnd1zAt87YNptjsbYEsNeBeEG1ukKqS3WAzddVxzii9n7LuyyshQtt8sHk182gK1Ng",
  "key11": "5wY3D27zoUkMx6xREGM6mpM84Bd81fqL4eXL7gisGcDRW2WCJhZz9fuQ4aJgES8ggFqeBbr2peWEiraWNEhgdCsh",
  "key12": "3gvxHCtU58vGVTnMuS8WHx6PdU52K8TCQrffnCYAD7si1TMEZ4pck5J5M3fZvjb4pB9gtXBNg3JsmjR36VZBZB8c",
  "key13": "5QKKoMpb7bHxBP74duvp3Nep8MLU1RybiKc8eRMtdGGamBc6K6mx8GRpaPAiPjLbynzkjKzm7r1hvsp1m4v9eSLJ",
  "key14": "3PpnKszvV1rhCr1qFndYkHDRLpkSfV4yYt6MqnK6iPJcKNmsnHKoSjUxv9tAU4LgvDRpBroHtrYALzxs96R4brFe",
  "key15": "44dN8TEg8eSXXUtsSpgkhnnt16C1BkttLC2zrNeYKkXWxLZQxHZxaoHVB8TPNtaFkdZ3jPRXiMC3Qtrkfo4i7Jh7",
  "key16": "614db8m7DP1uVgzLS7hvMy8nzEaQM8Y8neMC1hUzFHjPApeePYyFw2zBvcxabBNaXmdpLWES8xfEv9Nbit7R6zsT",
  "key17": "5ByxkxzDxtHoynmP6fSFMiNCyAqSHHdtuQEq7AQBoqqq4YhGu6dU87VUb7feCYRaVQSqsbwBLRqq5mQ2QH78hDAn",
  "key18": "34TagdrCMpXaQYrA9hKNFFa9HL17JAyqBgEpR1CrvDB3j4zDp87ACfpv6EVAmyCvc1YqCe2peb8qSa8p9wotZUDM",
  "key19": "26967FCstNayhWKjiG41N4TLTzFjLakszvQxpruNebUT16w4gGpEK5KqvEUpEiFUuEHidezmdMesCYno4JY6F9J8",
  "key20": "3CCQgmg3JcNUbnvnHfNaH3Y8JWQGbhwcbWkt5rEW8NqJjq3qZAqtt9wQH2D27pCAyqFdNS4hrHNf82yYNYBYrZ5d",
  "key21": "9SqHmm4j8kMq3FCeYaB7iz2MGsP8oofrXjuRtDNGRBnS8JzH1pppgAcqXjbqSMuWe84q2heucUbC6mVBwvffsny",
  "key22": "2Am9jNXWsXTAeTpeWvQGhpyCGi5k2SdqjSzRVAF92Uaz44iTdBMY2pRaExDg8NYff9qxGLSEzHxYGV3RTpoDZzHR",
  "key23": "So1VWAmzUphGPmyqZimq9sMJuXZibhuxXHkenN5YVuZJztrkDqipgycPTm3iE2MqwB5N2sRVakJoYWvUxwSwjDy",
  "key24": "437ZvWfnHbzAejqK47sAzLJE9y2Gvqtoxst1NDK4tDVCiZZhBsXceCdi6jjYZ31JaUy5oMUJvNJTwYtquwdVmD8K",
  "key25": "5pBKibRY2DGoSPRMhEqCnM4evw9HUKSpDmeQPxqqNgnuiYqZcpdpCNeTpGFkzUBuHqaMwi2ZWQHH15fDEN4iXBvU",
  "key26": "B7cy2hPAx1m1uMGNqSyYYHFTJuZK1KuMezDtqvyn4j1qU1zRFurWa4zeTy6fagioGAhSBRdjXcTLS23z6uVktVF",
  "key27": "5M42NFMru3TpSXAyMp2ehv4HyDBPuNHPvtjtPf4jfd58sE7KM4vvcX5PRD3oaBnsndWDXyLdr7Yo67xBqUsTwcze",
  "key28": "5ZgyTrzd6ZLdqDZCr4NDa24w3YBDWWczDLQXpCgUbwMgoDgUdnyeEsfdJfwMQopHL1QTis8QpoXpppEv479Ecf2N",
  "key29": "3MEVfrn213QucBHoVHk5p5JGWHauhgrpQPFx4Y1AyZFXjQsRaWir71VuXEfPKrkzEwRSMXbHYny3jGiShkY4Qmvb",
  "key30": "4DWyY8p6K63dGCjvvejXraqoLucyiGk2wX5pJxt2ZeUTa7eGd6dFLKy899AJsD5kPkdDMiVsMEH7QPYkVmKFiHe1",
  "key31": "2ggQG8n7kuAati1n9wDFFKoj3tiKffrkMuTQG8pxfxFq5AQ6scXaHWhL9JQ5qrZQcHGV8TT9AiBJFac8z961YPPj",
  "key32": "27feoHH3VNcvugekufh8rKPMn8A8Ps3op7bxYKHm83za5oKe3QwsCeNqovAuDHLaeybjHAz6pr6BrR2LL1CJntcP",
  "key33": "4m1AP7Pd7ti5CqnUB6HZZM4WrEEWF5nWwSgJCTVvGV1FEYUq5oWoLHjZC9UfjhyiQVRhNW2YnhaJoXPM4gTUUfok",
  "key34": "U5vgX9imVrTWtsg8a7GNCtoFV1pyyZ2TuXwzUtwapttK4Uxnsdq8dn5LS8Y9FAHCGkUpsneUKTzpaTsF2vZAr6R",
  "key35": "4tMCzqSqj2Dkb75xChAVPKQbDVbunuwGkSpqKpAyzzoqhLAvXWRT9erGPFFdKUxtjp1szKTNvnxjReDjoTvV5EcQ",
  "key36": "cpd7qzL8fEK6PmLatpqBwKLwAzGH9Ev9WNue8bbHtSAeKp8tScUqod9gLBSAHa1kAFyViQUqB1L6w5Lj4YeuZJT",
  "key37": "3Quy7QS81EHtRodVfrLXXMWskpW7qGXEQ4Xk1kgq7K6hheWFVrtgNTv43yf6kq4aPsRCJzm5ewtUxg6Y1RsyW6qK",
  "key38": "miNGS1QNcCtbCaGuuPvMewe5PLqD5MppY1LGzYKrwE187gr9nh3pJPNTF5i8gu7eH8YAN3rZzr72srk5pnFFvrV",
  "key39": "39x4pREd4p7kJZu9aMeqEdGoDKkT9UdnJxWh2vGeVpAPmtUfKxaLQJJUFf6A49bdMncGU3UzM5bqnFwxK8f6GWiH",
  "key40": "2YKHxkJAQNBgkubP4XCFKGrGq7fJi2FanC98PqpexZUA7eKx17pCQh2nLvivaTLSQ3noKcdspYfAGRJto6nhczKB",
  "key41": "YvsgSMtsk9EYTRLbuhG1kboB8bJa61xAkLfrqpohtxWEmSn5cjaYf8CuhVnowpvkrB5qLgRNJU8zyMrZAF4DesJ",
  "key42": "42eUch9HFFUFsAQXpf7cHoNvFwfns7zoeKV5EbU8tnZpwEmcLf4A9GRALBQuq4JE5RVjGH7EKRYU1JuHMTVNxHep",
  "key43": "5bsfwnPzWx3uECA5rtkXWeo1TpXh4YVnyDRiRrxiyF5B3R41baa11p3DvnX1qZDU1dunUYgkAAtxM1AJu17LAyQQ",
  "key44": "ZB7V9JcjiTCgLqWkR9YzbfJLtZDSdte64SRmow3gqQ5KuNesiVBVmBjGrFe8NHwNfMpGVXcHPTSudPTeksCQEgx",
  "key45": "4obR2T31CeoTTCweBT7QxcGCxhZAhzUNMiYDbv6MTEmDqAggBnTHF7xEAbmzkqNVEFaXZtawrf8Q9X7nW6VipWu1",
  "key46": "5aMZnNb8DFPuKbRHFkurRU5yJRW7hTQjzyvY3kcDLAa4fRWu2py98HEjmmiKgkyXK7rrHnC3Ct4TFc2t5P1PM9Ep",
  "key47": "5ihy2V2v1hFxFSfmkXMZjBU1ojwQxLtLKxvoaDJoNn71UwWVd99T8ovqr59oHiLsdK8xDUL8t1tQBGRMJehzimyM",
  "key48": "2TsGAnb7ESCkAYFyzqGnpLKPpfEAvp5zvwvZ11pbfLg1yao3nnD8d6iVeuVQDgDYPtTSuWtCe62zRN3kquGQ6ogd",
  "key49": "2ycvRkXNgdvkET99xoGCBe2ajpF6GHhGDWf8BzTeneWUocVgNZXFcMxqMXaPu8toJEycA4K3ZQpenuKN9nkm2Hnw"
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
