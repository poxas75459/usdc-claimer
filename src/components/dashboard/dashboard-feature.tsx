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
    "2atPBzQEAirMV3zkxnq6ie9Fqvo7BqdukyNpqxyRrBSS3aovcCh6iAGTBkaHLhzbZEZedEdZNZUPmF6cFE8qXag6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NnbBKih8QjLELCz8SzDtsPoF8LrX5xLxJnLJXSQxY9jgXAN5qiGA7wr3N3YQaaDWTF3k3AnuSDch5yY9i21rvYS",
  "key1": "4GyA9UyYJRpFfmT3nmEPM8MSyguJaHBkY3G7tDr8gDVWryUSvASK46rcfSECXw9hS1k3mdbsHJmbX75HNXfYgPvy",
  "key2": "5ZtsP6qYVVag7HSqM1Ec2K1nxQn5xHyxsQFLwmTQbRLwLbnhP7BsXLTBTLQV89LVQM1dXHks7r28Nk75cdXjCUtB",
  "key3": "BhZir6bWH823T9HSuMn3N1YHaPo5RPETRjaMxHWFoyg1gx5yAAvtKmZNPFzeJMyEEtcckQTWbNw6jvU4uUs7om9",
  "key4": "3a1sXKrCoNgcr1q5YZpbPAoo7eTXPGyr7m7SGMojaP7JuG5s9ENvvqNQYXxH4pJEs22TVWZZgpGYHojndFG1YHgp",
  "key5": "4R75pxQ71z9qyuCahp1bRnwg2S2miZd3BR8uxkt2s4nWMUAo782GEViSokdifqjz6ycddVtsANgrhzwAddzuAXLq",
  "key6": "3XruYVr4MccsqQrXv598n1dvTececMSdG7NBBaBnjn7sjYPKqgiBmiPwGNNR5GXj4CbHg4c9NXPk8rwwBUTae91i",
  "key7": "3DaUQUmmsqHAZxjK98JoXaahd2jLYFaaJLfGEFsC9Lz9z25oy2hjipt6aBWrk58HQf1tvAA6CGv67x25Y3zgQFFe",
  "key8": "3YbcMCGWBeoxukKhd6zNDYkyFNKiDQYG9LPTagvakvCFonNnfEDqNAMKf1uX6gtztzZ7pt44mqaR1kk36thyvo9",
  "key9": "5MK4NTZmHq6B3sqooWDzyPQ984RnH8ybqfgGaMHaAAPsi4uEaGzKGCqakKbeYEgKjrnRjbtNKqRTQrnhUt6FyNTL",
  "key10": "23cciUazyMpHywVQyUxvxe6bkccmcaAJyDM2chyQzbucW91xyUcEqqzZEVxSwMnW3Wa33k9n9eX4YAkyRfoGQYeT",
  "key11": "4ZUiMMJdKt9mme2rWNrKP4crEVGB3Q7EUrcoTYKmzepV8vFkefLfvRPeddGwQYfsYaWVZWJAZoNCfm9oehZqtLWd",
  "key12": "hwc1nct2vpUf17JaZVWKNWw69UrBMvZp88NqJCm2SEVaDz4qQkRy59bYJkcer5Wf6aPNEpuMgTuWq2qnN6X4FDh",
  "key13": "4yzA2bLPkx4gCEm4MY5m5TGZb3PS2EZi6gdqE5ECzKP8wYEtQaSuNtUk2cDv9kWPAipVihwFiqg3a4ndtTkLVVM8",
  "key14": "5nuS4SNmnHBwpDFux51AjFGiqfX8KoSAadKdxTLQr5mzoKAft57bf2bBvbrameCSfJdP3tiUwfeFSs5dHnN2w15L",
  "key15": "4rGTfh9QPVPFoxST8d2D4wmENkWuEQbJERF43LpSVZSLNDWuTwjsKFaq2Y82JTbBq6ZQvMHnZvL6Lo7rYXEtfwaa",
  "key16": "3ymZT8RKZJrEZLAF2dYdcJ9L8SQKMoZaeMf1v53f6582Ee3BxioinB1JNyQG3DfQTSLUAQM84e1NV2jbKbhCK9Kj",
  "key17": "26zGYfpTUdFFB3peAQPNhdyW5Akv8iFex9CfjwppW2kf7c9ZZEQHKpgsEQ345Pijcn1PHyQnS9JqgtBA2X5G6StB",
  "key18": "465CBzfXs6rmyfVA9rDPVtk5pZm7zzMcddhNbEBmNDBSNX7uQF2SuKm1iaCNkdTGjP169oXGfnMY9oGELTVgwcRX",
  "key19": "57s61krsrQp7gxHYsE3gugdJFNaEQ9fJAx3866fNiTpZ7XPHQfDXDvk3RzY4n7AAAdZPDRToFaM6p5CafCZqCyFe",
  "key20": "487Uq2Ljw5KXa9TkBexRJXW8erhSUqcdUfo1CffafxT5AErMricTu6Ga2ktkLxoAxYkDfgFXToYTNrEt7PBJ1ri5",
  "key21": "5wHikhZvBvEtKmnbMBXwcx6ZaYy3PjEzjAexb7gzhHXYPCoSYkRspk9nHufs6NNXA1JokV8LrpwrHA2qCPSWPLnt",
  "key22": "4RK6TruhTz2ECgSB95wceTfnNkmfoRiwbU1BvL8sy3WuWt8WCmo3kZpiV4eXutuXDjcRr8QBWSRBZKnqobGMJtkA",
  "key23": "qTVAMLC1Jbppn6AyvRJGKsA5isnGtya9Ysv3C43Pr3RPz5nPj19hpt5eJqhPhTSC4JGQntN6eSpCpSbPThZCQsr",
  "key24": "4Dxwm4AGKef27GgGrLSrxopHFZqPGR1FUmBDyVkegfEMzvEade2StgJrJFYP7WDQhNQAHDnWZNUb32yHArWb1tSt",
  "key25": "2W9PJsXd9ZtmDjQ8e2GMfrGREKBtx34zREvYMN3hqt6J3XAePpz8aNToVwFXo6aMfvSgAAgi8yrZ5gEtmTK2xtzr",
  "key26": "4vgLNVAAw9WvA7DeZwAZyMFGi77SoZHbJ6xo835jsG2WUx8xXk8h3t2hPc6vscS57kUHaFGY1f8XyvQaBAmUCLXp",
  "key27": "2tkM2U5csqitqgteWE2wQo2jJuxopfwmFrj2ME1VLJS2b1PEJiw7ZQrNEEgeL62LLzeft49zLiqqmBZAy7wQMHZC",
  "key28": "5NK5kg3DdjTgCCjivRKaWMCj4D2Kt4oUaPwsn9ZW4EEDkYYs8P2xSgBrqts7HeQ6CrfG9p2WtYNk7tUTEb8XrG8y",
  "key29": "mKDxPgXEXdqT4qG854Q67KA7avfqfQvqafXjo66rjyNHCnBz4QmTbJmpvrFBbjYuUaAgHBWsS5LCg44GumggTY8",
  "key30": "2B7ms9JP5pZTkhNcVJHarBNBBBVxivn97MD3BWucJnTrukew6UB4fEi5nDzBFTPQZ4axwabcvBefKBd2d7E6Yu3U",
  "key31": "4mGHjJizuomNCzN2eBnUhypV8GScKJfPccUNTqfJDHG2C7A6bHaZ85n2dKZ2bWysruEkjoxDwmAXyegAreeZLmNP"
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
