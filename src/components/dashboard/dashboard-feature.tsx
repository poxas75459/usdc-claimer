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
    "iKwxd7pc4u1bcXiuEky5Vu9LUapdm4EYxXt9YrsE3eVdaste7jGa3k5dhdkDAx2jxhjU1sp2eWM47UB6DZ6qxB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W2WaFHS1HegFSGx5jsFQHZ7reNDsTKo2o4yq8JRENvAZQf8GXFtP9M2BhhnxUAzQ69MZF463iQk3rjXA7UPrpDi",
  "key1": "2VfqYxcaWUg5JKxgEiCrf8QwF2to8VXJDCRCvGzRS6dM2yjxyG15cZkpF8eu2XVHWrzTTiXqzCTUebZE4dX3Sma4",
  "key2": "5j9Lg2s5DqH38v8nVU3wNqZdciyKJNBkpjPnJtbi7gQAX9wVeEQkECBwsV4D9GNysS55kowULKXLiTz2J3eKfyex",
  "key3": "Aufzasi4JeSPo8pTdKr4M8TibC5pqXZDLhFqLHBPEZmJfm4Evye62wqC5LmrV2u78busTntAQ69oEsy2z8UTDP5",
  "key4": "2uiHsmg6U41xcqLBKrBaDFPJeV8EMzaDEE6UFvQW5QVME1EFcWqjMcvjisVVsizWj8BSG68SEM9jtpzkf4ZtYUEw",
  "key5": "2eeQNDwPGd7Pb4ygsJhaFuogwqB1Q6Pgaur3iTErqVomfLhjhnCfP93qK48FjpKfzEK2me6LbQo5EbPJxze4VLw7",
  "key6": "yDCFXsCe3PMEB3R2VBJjnWhAQA4DLwSScShPQHUp1vGBVrdQeSoubzMQskjgNX4QLiHpDPEx7xByggpGFfM56N7",
  "key7": "ZCCWv3jQ5E6cEuKrhQCRSQuJfoFifpeSwT7Hxo25KznoxtPEyVwrnhBHa5ov5PjcRGsVmhBEL9ADSq1W4h4psS4",
  "key8": "5VYjYFVaC3W1eTdB6CMmeLdZMuJshpKHeKkNWnrgodgnRHyA5WseU7dgvCejzjxBYief2g2WeezM7oH2aGUHoVhj",
  "key9": "4Kqa1nSBzyxp5bxwBh5HHecAQvG1V3jTcWxHiqfu2pfyCJvvKTusRhCj2msEVpFwer59rgHc1kKeJq1FGpoL7HF4",
  "key10": "5N1FN6Ja3F1AjyxWsHnv41mSyvW2Fdn3p6JWiFsGefomtSnpv2jdtGpnn7kQxzMGmCYiQKx4oZARRizSYxb4MFB4",
  "key11": "3qjJnverUmjmWgt8ej2DmFXmVtkTx3KfkWebfPHF96jW9HSDzJa8m32ANgroz8Yc1U8KimXjTJjfEwYpd2gwAdDF",
  "key12": "4fGzCqxqZJZGQhMZEnXhEVDVRaPm63tanBQJCTyLH1qyGSSYrxfrEY7d5G8mDcNRV2PkVf4uwYLVDUKAj7jD78iy",
  "key13": "61ShEyvM2W7hhoNF7EzxYvVQij3G6VZRJ9q5tT8CM7RnzdKyDXvFrWT58oPejsHR5HZiJB43WZykEmiZrytLS8Sp",
  "key14": "2aUZC5mi9D8btSP7B3k1b6knx6NJXKno8fHkyP2GRvY94g8Cbb9AvB69BSRgUeZ97TRPm1CHmSsBGW8KSdBQewDV",
  "key15": "4AdyjedkujQEhqqb1gZjraiLZegfpzv99QwA1NYrhjnxyGc4HpHZKV59c4s2o7V3KtB2RR1abfctcJBjdhqJFXk1",
  "key16": "4jGfQEHUfxfEbxe2Vm7QHsuyvRnhVGwh1BiyKdqFysWfxNS8JErCRun2zZaxRRSxJXH7bMkqPdYufSEegMq6F3YF",
  "key17": "34GS1XdQmFr8Rf6qJQE4xCqBptFSZGFbUXAyJRJWLj3TLg37PB9WeNx58szPyq69cBkxzsxf2BTTeoZuk5C2DrqE",
  "key18": "34MFDDNdr2QkPMqQxHNCqXHNiErqnno9RGdwQLqkyDRmPpaGnbzB4e72WrpgUCvDehVow4kHPBNSUCwrmNHkfbVN",
  "key19": "4Dn8bBrrBC8VEEYBRPU9Kr9S6YfJEAeAgUnN1GnTWCNUivuQsQMtEWgv8kxLbDDVwqoUscVpvUfYdYe292FU38xX",
  "key20": "3Ex4MmhjydyJcDwg1sbspWpHHApsRxukgD7zGvVAwoJEAJSbkgHXuP77QqCgFct4EiELQqpBptktuztX8vQ4qtr6",
  "key21": "2gHVV3fjFEaHAfaBfVHPQBxRtqmqAg9RrXJch2Eqa16qVfe2BPfAPLsN55UnN5Ron5zWy5utaE4cjeFqWWU49cYY",
  "key22": "2jVVXe2SmFKaN58d8gQtbfBLCDtMCmtJtfcZFjzgUzh2WdUZ2mAZ39Keng4KUk4aZicZDhYTcocuzaNrcjBBS8nL",
  "key23": "4bufnZUh639JQu5YMoGFfDKXhxeopRXDekbiraHkbQC3nbmUT4iZBvkv2TQgkFznhMV4c2kRxXKTRgS7cA6q994i",
  "key24": "2pV1AJGvfynfFzbNC7KDtEw8uvGyvULpxaKupsoEKFMMiGH2za214gFV469h3Q51KYbCu9umhM5HNmpbaWdSDD4U",
  "key25": "5YMJYCEQaJ5CtBSrJAJk5NjdPwhUEbh9dv1qR7ihWU8ZEwkNaiN5E5jXpPe3bFvtdVouEPrtCdNPbYkHPQga5o41",
  "key26": "bw7oQdKGcTrNNwXhj3omhLPP4DkjDPWioDvc5cG4uvQ74UMpvSvzHRLpGWgtg6m92ejHodSYyRJ3ErzFAb9JY2h",
  "key27": "3HpHrnev1Hbe7ZniXEGKAjMvL2KXyY22rgRRtQTHLCyYRnRmu9rmRtA482xdeizSadeRH2qQrpwrcNkpDFJeXhqW",
  "key28": "JCYj1fQDdcpSsjTi7e2LyfuBz98sjj6RL49EkYYv29H2UxioFGP6LitR2qZSDroz71HFNh4dJLbf2rP6yNdYXo2",
  "key29": "5rhpsyGNi3b8YbpypZ3EqfevKCoWa4qWMU95GvyapUSd73RiEYJ79iRBRdpFbvHcc3GargMH7VwE8BzZEJrRiaWh",
  "key30": "5GYxYvRWwVZ5P25SswPjHMV5gQkxdptj8drTPrgV2vZAxprSwrqsbRRHMigdW31zJh2iwhuygzU3KZTMUXp9YuFB",
  "key31": "4aLjJ7eSRLpGWfvB1m3pZfLhuFw3177m3vzA6QnZmtYABQDztcEvKL5mxtoDEu7YcpH6TiuM1aUoMyhn73SDwXSB",
  "key32": "2FfdDJtc93kimA4pqmLm1k56MHaM6KALt9YmnuQZBanyY6BuNfDFPX4wZEeNtnpSdYzT3FYHumYXb53unhh5tkBw",
  "key33": "3M2EZvv3VGyAdBMMvKrtrwNoy65L9HHFxKbumCCEx2Ag4YTqZ2tVjSdKgpQpc4waRDzeDM3ap4378X51eWrDerQA",
  "key34": "ssEn8GcCZzEt6ab2ViYdq3M53pzaXHAmsLVLpnJuSZCzMgpfCijbqKsWiCbG9Hq7Qf1RjbJcMhNEevQMtcVoQuR",
  "key35": "vPGF3ENftpLp3pGTsqfswwPDfHh95gc6EG7iFVcMSoCGzzYeFvB11HNmE2nZK38hiq8zZKnUKFnj1VZyT6tNLRU",
  "key36": "5EcNe2Cykdgi14pajttYDQw1cFQXxpWWq9bfDDrbLznA8ZAsr9R1X19pMsUFu7zEingXS9gFBZw1K5mLwoNXG3KR",
  "key37": "3BqWWPdDaW69xdMihMw4BmEwPpvgFoTcYsLiF9xts9VagwFb1UyPXx3kcbZu2JGkXcrqzb7xCuMnT1LHGaN7M2wv",
  "key38": "2qjaBQCeKoj5FpAjGis9XhyNL7U5KtfS6qK39TUj1H4quUsipm9KiQ2X8N276Ye5jv3Qi46qj8TM4wxwrU8JSDwe",
  "key39": "42L4eZ8JVM9sT55yVXQXNrSK9mdXGKUbZ1nRCvVFX9Dbwyy7TK6NpcJ591ckzTPjTBegrhCh4Qv38yvu6yzcbFDB",
  "key40": "4GvFJo6F8dB5sTuhZ4yrjShKi4fmCY2n5e9zJwpy7n7WyozaHGH6yX2uAG6CZettcJMuuWjhNDNRpKRppukKr7o7",
  "key41": "2LShUv2DCtAWEShdFNK6nMpPC8GyE1mUsF3dtU82gc8fhNt2ncqBFuNCBxbMoFw1UUgmvMzeFL3hkxet6tgKZ4kY",
  "key42": "2Ktikw7LijWWxaVbmUesSwZVkfQAgNcXN5EZLZS7x3ScgmH9e1Cw5F9s4k1QnQZ7FMEPFuGB4zPDMB72yMEr1oba",
  "key43": "5uniz6zGPGHvNnq7T1HYUtcuzaU8FxN7vYh3uq6n3L42jeHoQQ3Wv5hDbMbrDNhSobC7BHyZF2NLuVwTqNDHoMCJ",
  "key44": "MkKf6p6VCgeqQoyiHifx9AshNgihz8SqUz5vfJNuduNmqHSfZVbi73L2vQGJmPmRyJzbRmoP1T7wwT3Zw8zKYNb"
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
