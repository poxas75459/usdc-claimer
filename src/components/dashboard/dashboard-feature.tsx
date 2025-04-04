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
    "2neQfFmY3ZdbwNcxr5vriykk8WWdkVm7DwNPAGTr9XeCbQZ1yPEdrtNuuJLd7ao84SK9gkrrvZjCZoMQ9EcKVD48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pJzPAu7iLn4ZuNk4NDZt582CTrrTy2MJCz9ACykkTWbu8tC8QPGD4WA6Pe926H4u9rVsravqCGioAYhpkZAptku",
  "key1": "3m2wuRg7ZxPapEYKsEDm5qQFbkttN74uGRiEt2msQ6gAAVZcBaRWAorvgzEgBUSwh4sxPZifZbYoPc99SPJtrqEQ",
  "key2": "4RdbakJvSAPa7MQUDSHbgisFWEf5JTVEfYEFNwamJRNkCjZpn1M6FUy4hyJAzaCEguquJCMTggnDtQ5CfJdxq98o",
  "key3": "396onFnRNoz6nNvD5rSatTnL2ctbioNxkuKnBAJvmpSdPWuHKezbDcQsV5XS3bC8szzYRG47PAfMrztdH7T7kSUM",
  "key4": "4LcPNvHyYYtBVKyWSrGGSGKQVCKgV3E2Wt4GJNZ4Cj52kbarr4dY39FxmKxNLhEUAqf3AMPD9gXoUTaxfU1hnfyb",
  "key5": "9P6DuHkoPGMwsR3xsYFQAirsuDg8TMHBJgAQKMECkNG5eQbv23HxdsNVG12kwE71SNaxbkXNPbD5iZ4jt1W22Q7",
  "key6": "3FPpq2UzH4P8cy6RDcMgNhDNmaS5DKjqPpUPCzpttyshyFXqoQd7TF2Z2rYrTaxQ4RSc4aPRnG26nWoTq5mb6vgy",
  "key7": "3FvxFytFoHzY1G3Gsjt8PZwWUW6DPcw3JYoTf9bmrJt2i6jTk3D7dDH4evT5JStCpHXJCP7FmqgvVFZb5WavcLfG",
  "key8": "59W2YhmtoqoToz4tZe4d1GmFwxgiGExzNx47ecN6Kf6cHg7CB8vPezC8PHZPvTsUrZeaKq8bzTdeTuE1tmXy2wxW",
  "key9": "2AZn9wZjucJtunEYmZWTxLcYcBfxAQb6Ngna1EegKeyjQ4qQcEmQ8gUxCkxqdBQKQHWXq4j7Mr39KJ4QMcdN1NLm",
  "key10": "2P7GJNWGVXhfKGAexpL2225uJkMHwsVsLjDCuVof3h8mTQ53Qjwz5h6a12rw1ebi9vAkSH8gYWJjL6jqbWHZcD1x",
  "key11": "2few18UBQ6VUkdjEmMo6XSCFpjK2gCDM7XRAJua6d1vTiiDeRBgzHvWkb4DUHLVcAxgQGoVzr7fwnuU3JAdJbewr",
  "key12": "4aHkLxg8SztrzYNmKKrT3Nwmos9SB1366MfSXPqWEmFdHpyd9rawHZ9Vg36u1cPZZwMn1xzgAGKQxidzoq1mZjF",
  "key13": "4XaGGrLcRTgP3ZsEvwVHQdCv6K1Ki5qkCMsudkexbNgeht1NGkJTwpDLTgvT5js3WwHa74hXHzN9CXjRK3CAkyYB",
  "key14": "6Ux8yfgaVSjje1sPyEwkshKUUU4Y2enyeFgjnUC1QphnZ9gfQdEnc38GDAhbNSDitSDrS3gHeBG7YBPZAnx4Ww8",
  "key15": "2c9D7cVQ5zqhkk7PXVfhc56C5N5x2HSE9mG2xEa7jBw5TPaBDRxdV3UyHwaQ4X1uVJbe5G9MXt85mm9pJPoREuSf",
  "key16": "3x5RscdQTX4otaSZ1n6oBgBvM7XHorNoYSueJVMbLGuY6CxN128ZM1KVbNHdWY3MiKE6g2tGsRJNVHUc2pEve8oF",
  "key17": "4iEbVQ9NagfusCurhmCtk6ytun6PyrEDvZHbXakmMgvsaK6K1GhjZJG7svkrzztZoxAiwUPEpHSTQyva5tbMRAsq",
  "key18": "2bzifeFTg9b44bdthkkR5y2RYnxy3gTFecJuZKqnWzmZP3S51NojPHa6Bg2PzkKwhRGCViPDNoZJ6MHvhqGMmMy4",
  "key19": "LhsHNhxWjJJTvpmSbvu1iNcYovcpRnR2uQajwgVDbgSdNAhi2GwRfW1Z12QtZuovk8kPQtMq2cYiHsAJyy3CghW",
  "key20": "TybjVc8S89PhYWw8ZVi5QfRfMLK3zLkyqR5g9yQvsq9UiFsSMoZVotQZ84se7FA2Npn7e5rrYa7eVyEtXFTbWTT",
  "key21": "26VWV4w4zkeGsQ6L4GX3feVcmdBMt4GBpeTcmhLrqxMnqpW4f7na7dZgmdfB12LvucQcZTsa3DSJ5fWW9XtxXtoA",
  "key22": "3vS5ZUwiCJhKfFE5mRd85XX69TkaK1L4tQWyBewPyVfXkFND57ULZRd2bp8UP95WZPeZT8QuGYhBtHxf3YT8wx9x",
  "key23": "4Y5fL3fE4Se8W2kkSnffjhJeGSJ7JP3GsVFXNxTrLEZgk5NuzZsYc2sKrEphUQBZ5an2sdcDyfy4YYtqhBEL3agR",
  "key24": "5TD8iysaN683NrEjdWKdBbAR6x3XPH4MBmuhp6MAkN6t8rG9ottywzX2WWWnbhzVGfaVs3WkPiGde4oRSCTpvPjn",
  "key25": "4PZmNsXxpncKF9HLTkZP4bcmTKqXpmgfLz34c9YiU5dmfPRUjjjHUFFswAWBggV5Kv7bt29biswXoxGbH56qDrgM",
  "key26": "LAsxB6tsQEQZSD8oy92mYM41WZs8v3GgjastLJFaKh3WDs3A8Mezreot5S7rdN2ThvV5wcLE9Z15Tze3F53PxGo",
  "key27": "3XdtkGv3Qyx8AuAhSpWc5Ss5GJcrFQA3Z1jk5DT5XiERTuKWrDkwqBhrjCYHrKr56m6FeiXJ2cAwwyJR9L3gDfCD",
  "key28": "3hQBtqRD3JQcRZ34t53GuKYdKUQNbm6rdc3G7hXNad73xLgbfFBh4LBPk2HRe6C1TcY7HgdvBmKra7yHmNJXBjCM",
  "key29": "4qPhNeeZ8rrvY5i4DQ3BzX8URD3QLSj5EVEh8A5o4irwmJGQgChEUXcP92BsaNxWV7Kh51kxHsugMqmkouqwRC7y",
  "key30": "2j44sfv7ims5tuLgi81jTCYXhgfVLYESKqbEHRG2ZQhjLBbbG8Lb3XmZAMvStzYmaF5qJNu5htAF1nWm9aiUDPHF",
  "key31": "2PSavPvzSY8SCebMU2r3QkcXe1TWCiQ16e8uMAufj1tNxayhUMaQcEwnoTedeUkXWC5iMQWvuKpgyjUAHmxSyXFU",
  "key32": "3KLAJSz6sscsWwVtZMEhnYMKzPTndfy5YMsV6Dasvw2rFsD5mih895unTzeMES6WHT7Cs6EUCaS2rzcpGd5ye1Rg",
  "key33": "5FzTtt71otMKRwTh2aLpxX8Mv9GdzCe9EXRpAYK8PNyogUqnC9qJKhbMowqWZkDyn6Gufh1PdFWXHTNKLuAakarD",
  "key34": "Ftny1APe9WhpNByB2X9pQxu7mZ5ZkmJbMDWDY5VmQt85tzLpdkprZtH2MRzLZifJdLxPw962MnY7cLxzzbjqoQm",
  "key35": "3z8uUHZ8JdrEkxd2KrM24eVHmFJVPq7Z5uZ7jg9QHemCKrMUpp7PXv9r5JURDEdStMTXKZRqPyi1eAdJgYakQYen",
  "key36": "DUrp19FzwHsGUN7ptqd5Q6XGW1CFqvNg7wQrMPYvh6maiYjq1UbVq9QJ9XP3yPo29z9jL1FcDcLkNXpxbthK7Wr",
  "key37": "5NCG9tNB4vXMyZ3Jv7VjShhPtBxNU2yCe82r63AobwwpyRTBZjTVeMrfevrPXKa5WjHHVPgPVC1dNYzygHaefai2",
  "key38": "2Lr1iKyEbJKf4DqqmzJimuWWgYtN5tPjUzPYzcFreiupPpxUXXXrcUFEtKnV1MxWfq1QLUztFArLquYAiP5xJqMk",
  "key39": "4um3J8bpbx6Gqk8zVGSLjrke5izQzGcbbHDcw3n6eWAaqfbScaGaQ7WkHHPMB4ASowpQFR5iWBrMQsiCQdD6krwx",
  "key40": "53NCL82jvvJz1VqUFgDtGyVftfBKvKmVRp7f3iEh3FLAQQedB2bAHdmZqgXp9gYWhpfWTU7tVbugqg3RiiveLZqn",
  "key41": "3kCrhdZoxpnsZvaHNRFNfhoHCdNb55y4oNszSNk59NsRffZwVSUrcYwKPftR34dzQSiwrwVLsHCtzqUGBs6mDkDa",
  "key42": "2mQ8E4hwJy9FfaB3hwttkcD2KgutYrTFkQk4qFgRZrnoaQg536TxTxDQ4bwFMNXuWuM9bkZL1DVyoLbGGnhchW8m",
  "key43": "42S9WQTnBrxLyHrhuDFS6U2UFLaETxTomtUd5cN9jiXrCdrCPDBCpaX6BUgPmfhsifGcQiXZJdKKJ2E82uzfhgbJ",
  "key44": "5Ns4QSCJYomLAzauvfKVnWSwTtCvGxg4pzYsPr6sAQSn21eS7QFgpT9wFtzDaKLXnJ6SYtkx58F73gKSntMJ15Z3",
  "key45": "3sLgqjau5VvbUpzWHgy8btSDSReSZLGufqoun1HuZCTGfUCPhpE3yhXfGWFMCGGsLLKevUMcvvAEyyKh35smF2c7",
  "key46": "FXrVeFW2cEhuPGy2ftReMA1bd31NwFExxRjXDXv1uGbtYNcy2roeVPJbTm3N5P39wcskBBX4NmVYytJq7QtXEZK",
  "key47": "4ksRe1fr6mTYfMYDCS4oPRd3Yi64ew7jwDc1cAz6WA9RdCnhgDgFckqoJhTf3rB9JrhVXEbMbDvdpzoCmkWmn5Mf",
  "key48": "QjYd5CZ6wvxkAuNX9bLqScrjgvPCMXdmRVPhu9TZEnapS2shMuD7PFuFE1oF8bL4wVrvaMVpDMR6mWNJg2G7esg",
  "key49": "BZfkqmxYFRFxFpujXnW9mX4BQr9fBwWDFwZDynao1kJ1FWSVC4DpcTnvSK6auW6ZaN56VvgrHCd27ftNCxmQfBz"
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
