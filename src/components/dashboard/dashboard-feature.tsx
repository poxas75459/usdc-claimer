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
    "4U47mHmxqGkUeEV6p2ugRrxCfRRPBaw3eAVMNSrKgatdQaK4Uhc43g8P2UNuwxnckn2i2V3qp1rVzWAveaa66eH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4avahShLLCkeH3waYLq32r5HMrgt6LrHWm8nLHAjh51RJkmNcEPf6SnQW2AYtzU5Bsu7ju6HM11WnKKt9gqC56Kv",
  "key1": "3m1AVHZ1N46GR7c6PoKZBCfBSuaxEEXJCn7gQkcZip7kJ1CCsGVt16KWRHXppML4eB4rG85bTLnqHgXLAxUoxES9",
  "key2": "5tRBMRpqzRCEn7X9NwrigrD1Wx8tdhCbidxEKgAdyifuMkkSrjDdMqAq7ZVYNpUszHPGUrJLyRBMWsaqFzQQegNb",
  "key3": "6PcwrQWFkBk1CUmH2so34V5kvH2KFKGdwnvbouQkU7rWAXZXpLJNHaQPHYrP8khgBqX4q6THAkPj3cQimq4Bj4r",
  "key4": "5PT2fxNCvQoCSUcXrpHFE6suQakSeBS9wDzS2fNjQ7QdaAdJFf2Fy5JS2Np9p6NsTz2edW9nzKqPzxoY4eKcfoom",
  "key5": "4UtVRhf7gEm3U7nqGPXL4Z6iMWMaEU5PemkzFPzvdq9yiMrMZFhXokN3aXRd5jJHAXGS5MV92a13owocwPcwqD1T",
  "key6": "2USL1FEJt8BAiyMSNAEfns6MNQzaP8YhbGSwE2WcSd3MQh6dPN2EwGuWooSA9YJdzZvAt2tDGxbi7VzE1CjB5UdF",
  "key7": "5URbLr3RJkzRF2ZG64Nxa375emzHBCJapWA6unQ278LAKw6wWfqzrRzcTYthVgqDuNkDNNpFYALRkpjFZ8dJ3qoc",
  "key8": "3eDcReugPxSB1Q4vBoD49brHcKiWxeXr5aJUoRsekoZQRTEXcS9cXwsPBp23N85qJNJXr7JhLGWduWhz9sevYsnY",
  "key9": "paQrhrPpvKGn1UYJVLZRkX83MfCGqzebkpbFet3Cttbfv8JEEPCAdRuborSm7wFBgZmN7VJwJyYgwETzqMjutWe",
  "key10": "24geZk7XW283Y5g5BR8Hju666pquSwKYG3XFnwVafwr4ARWDYxsH4bdq8EP4Z1doc1ghC5LP4dH1pfuDudGdTWbE",
  "key11": "4hWQxHFTAf2r7UyYr5EPUfSNLaC3YC4GWGNgRBrNag6us5QvmG6eguTRTA83HtNtNjHS4KL9r3ednej9H9qcYkXf",
  "key12": "5SybWLqBViP4f3LPtRQ8VsHcBBesk1upHrMvFjz1kMzLe7i1s8muTwM7pC4D4T6Gx8DnuAHPj6NfVhRb5ofShmot",
  "key13": "5VYR4VZf6gVfqHTRmSiR3UdXcnW36fefhExyi9gUZw9z4omDHKZF7faR3xFt3S42VnLDqsJU6aTU6pzLQQ2E5fL8",
  "key14": "2JgMGSRJFHDBZmB16KuZFM3LMZ1Nf4htW2wHZtaFdDdkeu4s8oE1qYC86Bv5cDZjV4cjLW6Zr75WUT9uSKbEDNys",
  "key15": "bEL295pcAw4v1s3qLhgvwoqkLJp3mtadszuQ6zAMt46UGogSb1NfiGMcENA7tQmvrP1HSgU888RotpyBHTiXkAH",
  "key16": "4YeDxae8BXCGpN6hDRR61QeGobr8vZgkkTpvdYCJ2n5SLG2HHQQdSeygEdnGXBXoqbYNa8RPbi54eAfSGJ3S5gjv",
  "key17": "3ZoBFr4EsNg1nTHMcTXz1JLRCLGbWAeMAYFouwXHqkfuTFVh2brGkppYcPf6CZtWEgGnw1qxBZxvYB4bAbJbX1NG",
  "key18": "Shbq8xCTprPHNxUzrJGcGk1VbsxFQ3h6FYeN2hV948NB1oToNte5L7z7re7ERuKA9CtrDAcvpSfuKmHmKrZ75ko",
  "key19": "4rXXcb7mE657x3eLp2xbyuwfaFjXWJMy6SG9nDNfVuP2tFYt9e6U7vxpdScs9pXy16XL3RvpoHKQorXjJxwXADyh",
  "key20": "3ZzcDQnHCEcEqrt38XqxjHVkdYKDQ9tPFwQ8ucR7fZa3mqMZMdWc7heNpivspgAeBsgu9Xbwca2tATVpNJhWrnKg",
  "key21": "4djZWCVn4AoRPj5UY4id2BMmhhAyFMsGJ5aV94ux6yr9ukbw5HDRJRCFPpy95Fu3EULRpPvUDyQRwtnUEuCQZzG1",
  "key22": "K3p7nNu4wKzGJzro6vEjvMN7HqF3pscJvKQfq7iGTUxKypU4b2bY68H8Qu8V47ZbLrCwkDhAtLusf1wzpfpyn7t",
  "key23": "4eUM5Y7QFt6uefJtU7poZ4TLjygFpVA4LdcUG9DDZ9mvS1HR8GdmHcPQbVevwd8286g9tGjYUXgThoSdSu74NtsD",
  "key24": "2Qigj9aCHasEDyQBprgvaEiCkX6tbVbhevgfxmLdKL9f2RptVcLhPJvMzyFjyerW5Czt3EDq3SryQtgBhSUyYSFy",
  "key25": "P1r8EvF4iXTByqxgJdefLpafwjY83yXZRRbhoedtgdW3tXYhw9NnqdHg3KqMCaXVbJzNgTfSAKB4i9seEw1PES4",
  "key26": "dp5QxJZye4cz7uGNKg24AwfsdtfGeQvEAUWuXdrNqEzD16rcpDb9LTBE9P12bwr22311HrdGGW46HY5vVt1gwsK",
  "key27": "2ZcSVbShyYZWDdHmu9eeQJJLLN1vDEMoWsio84wBAdiQkHwrshwnxvowA9aQMnGMzKXXaSdS4JKrBeek2vhEYVGF",
  "key28": "5g5pbhKHdr3eTGBsoCHyTDDStBBoEsJdkynBTa6vTCVwZui1mvssr5NgNKJQebCMyFnsuLjZLuvpqKmKBAtveqj7",
  "key29": "4tVbJPy6xgXwXA7FQhRgTFTHG4KPRrzRVwGn8fXN5M6YNcDKuBskgV8UgKqPQjJFGiA5eiYSaV5rVhrW4dtxKMEC",
  "key30": "24JZAPnh1mjFcLwqRoJdFiKBJYGvNjTaCyw4punbyNet6xfWDoVL4tP7icBLzEJ8CZKBp5GauJVuvEr2CSvvzXpC",
  "key31": "55T5c6sofPs5Ai6eqB7kahgd57vpJkM52npZRPbqJAip9Cpfb6iX6ixuHkkzWTUAHr1iobg2QACSwJGa3Q4ZZ2da",
  "key32": "469MjRr6w8a4L1CdZCSPo1D13sZk6Q8RTYzbESQvrBcabpRtyV4ZX65hMQ4AJMfXc4Z5iKCoe85eWuUQ8ZeMeM7Q",
  "key33": "3bJ4w7kdyZbjpTChZe6A7A4431qKtDZCQKDtHPxEtkpUe9N4MuLktkMAhwP8PBGNdYqSBDe2A5hwg4J3stTc7nhD",
  "key34": "nbwhtfDdMoWepGdEbmxHaxmsApXNZeK3v8gGyj3KtCyPeEzzrKeYZrhuN5HkyM8aCMvKWGpQFiKVBL8ELrTQVXQ",
  "key35": "2M6Bk7k7RPE5MjTuFgLbYHQVtxChzqvCR3siF6KHvW2vsrWmoSGLkQkXPug3wYKTkuXQsGMExAfj7q9eeDE4xoGr",
  "key36": "dUwd2ryPGZpvLrvCTbceRpG5V46eyjSmRq2QgT2GTQA1Fxm3g9AFU6jSuSSNybBcV36CxEzWbSuUPzucQSBodCL",
  "key37": "a6RQFPZxJx2PmBzWcWLJHQqY1yGSxoHz2jCvJqZsb9Zn7N9agMypcqTgtCDAPZnwFmnLPzH3Z6njNYmyXgYPTpT",
  "key38": "3uQtDBXjvEkVsVi5i97HszspfunPz64EM8uWXPWDLNbuUQnbYX7zGS7fNAz3UA2s9RbbwAvEDWpQgZBHhfbWU5qo",
  "key39": "52bd7zgfypSnkuL6PgQpQeGndsKkcm8hQu8kfDn6RcWJfrRqFxoTznmtfCdvhVvfhMqiS1djh1NYpMBZo2oYQYwy",
  "key40": "29LDu2KJCHFMNN1qvbNjsH7gbh6RZyJjXJEXB9PEakQ1FVYEFozqoHXT8242eZHzockHmJEeVPFMLZ56eSATh5j5",
  "key41": "qNmK7zqPTbjRidCB4kA7S5KBW71wXwwhg2Bq1VfK8ewcnA6fw5zGEAmRnx2woKiBnBPWPUwdeM9gTyRQfXjq7pd",
  "key42": "2ivxd3W5bvEv19fiCaMQ97Zuzv39885KgnCV4KRQKf5WYPCHsDUB6fiAJZdAh6DrMUQuh88EjTytDi8DVsFb8NLa",
  "key43": "4YTxHTqQSvfwFJpbNT51Tot1Tvia3igkMitcnmsq3Ncd4T96mUEpTum2FKsgwZrLLaHf9ZzsxUAaaPSbNVr6HhTb",
  "key44": "49MFMpX1Xkua8iSYp5WnRqEMHDihEBG7G8JPDvUKbVeFZVqT1UaVZmMHtxh1YWnySVnmpKWssNG632pts88Te1pS",
  "key45": "aHPmWdEpbQnKCpLdJQb8MoGZsZg2PheEjK9ASGVkp3pN9JNKDCpUWjyikiFZCbNxbBcRiL7ZCX9rwh6WKDWmmHN",
  "key46": "5uhWbiWUJNViaENtgivTrQEj4HqxmvhXzwkHy74PZdNH2g5p51pE8t27KQSfEnFduJr3DwCE5wVU2Zkh2KiJSGBC",
  "key47": "4C6D1rGRtQLvqWvJWNabuKknPdBFohaZKd5rDnKajYGkVeUYdm68LjBLUsoYdGmmuWCgumh8WZRXjTRJGb3UZLcg",
  "key48": "isxEURKjNZdYYciTA99nFe44XnbH7k38xturte24d67M3oAMNQPf1w8SAx3wJG3Q93MsDwdLTPbeHxMaB4vjtH1",
  "key49": "3WsJEP6Ba8uNbG2efWCL7FWiWaet2ED3HTyXGKs4z9q5TmfP2jjxGc88siJJD3p5XfQUtJodx8MF9pKtTkcS66sS"
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
