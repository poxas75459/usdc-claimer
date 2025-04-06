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
    "2gnNWdnsCnAEKPaf4BppWvFkZBBWsKBdRuYcUPynF481F9pmDq7cvPNFAZv6b4LtPAcdyrkPJxgfZxeZWcAHKTzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rBQRwSB5AP3Z1mKmabPwUpCKM646xupyQTJDYsZHsGqD9nLXMoyzB8sm88dUXes31Jtwx23eYdKm98XZgHfPeyL",
  "key1": "5qCDAmdDqtubKH7wqxUq99Thfr2u5T9b2UGHdyzoQV6Hp3GxH4dDPpGaV77G6rnEjHDnGnpFmYgHRAJFLTt8BvBN",
  "key2": "4h64nCPj2QPDM1jxxnSBWYeBiKEJvXwotPssAGSJZ9gvAmpmXQZum53Trg8XVGFx2VyNiJX1igTVSdvg7FsqV7JA",
  "key3": "26F57K5SzjK6ewfXWi3RREj1WnBKqJN8UCz2A5eDxWcq2pL9eNLMa479wpDg8xxLvMbt6FPMVrrAQSYpmsLNa7oS",
  "key4": "3RbbUDuYz4hfPjZRp235BJG5no92sax2i3wFeEPVgzby5ivTSUTR4YgsV95bjxLVewgrE28vPeQQ3C1keTWoLVKU",
  "key5": "4vahpc1C4jiJ2xn6XnUAkkoG9PQwmVc3pD1g8QE24wPcbmFALb9gtTKLuHkguQVb1N6ymyfmREWtaUw5MAz9YZrY",
  "key6": "3NCUYaLRcEqrtrg7FkxmPDnQBcvaXfGPZZfvsDtUarRUrCogc5792zzquf9Zcko8tqnDe842XSzyV6QRjRyPyUeH",
  "key7": "2vZjMk3vjjeY9K5Kcr5ibLzELDUXHirirkXWKP197cjUHzaTnkLTLpJsgvYAv2cWTUdfAmCr2uJsvxsE9GTfiriv",
  "key8": "4Bb3AnmZBgX4ZodPBBXH3XRLnnvs3JgpSqxpEb1zknMWfK75L7TNAwbMbnUaDWp7mYJqWMAU2h4Lxim6Skqeiy8",
  "key9": "2j5rkzVjkVNAu4dibjqxbkTL6yfQ6srnSCFQid1UeHj6g7MjUUiQZT1YiXF9Hj6yy8cbW66jGCCcch6vGJVsXxMd",
  "key10": "3J7AJd6xF2Wjb9x85bCLQcYL2x5Z7CdYyf4XvKjzs1pf88RpLvJsSbaAuGsV3dVTQkcRtG8twmgSpQMa9t7zTzsD",
  "key11": "4BhFL3TS41Gnovp9bVtgR2nMjc7x2bdBkwMyuqm9eQ7EhT6ChPiKe2FnjVZ4w1k2SfC3kfwsaeghaANV1KUf5Qf1",
  "key12": "Pfz82fEP9sep6bdz8wtSgiXziX7jakf7z6QLzGDgDodnvD3EqRdEwo3LPbkhwJGjeCaB5YFK41FqWsDvyAjPsUN",
  "key13": "3qSkkDZmMfUa3wxwiz2mBck7agLJr5PtfK6UtfbeWaiqeDu5XgoSU9RyN3oWXaD4Q5vR9TuXvoTmyomuehzGpqRV",
  "key14": "uWj1G62x3NCSskYoeGhhZZWtdyU9uyJqWF6f2a97ormfQJaAbdsQS9SQNL1tyjg7BuFNgaufJiDA94kQMUXPaH4",
  "key15": "aCNUdUSgyRHuo8FmKwyE42kDn1y7aC1iPVN1FYMiZTxX7nTw22vpX513yGdp1FQrvxkUwebb2wVUqi1ihDcnHS2",
  "key16": "31SNeZyJrc7gBPz3yHdUxuJNxaauzcAdXXFcvFWqm9jdTNtt384k4ZfkcSinQW7Gj62xgakQ2eHFBrMxYGJfCJzX",
  "key17": "4tTgpWTzPodwStKn6VqYHQ2NDueUPVYb8hi6Va2zB1XMd5AwNpTZf83NMuR52QTqbK6N7ngw7Z6CuXX4G4WQC6Cb",
  "key18": "AKsrQmSfkrfwk2JcPtEPV6QD2c4jGBfvB7aWf1USR7HaRh3aTr2exg7TKAai9ZM1yMnruqJF3CkmjZGTwhif3vh",
  "key19": "NvNnKPPLaxnKfzAgNg5fsjHmWfn1Fqpwb8uY9W975zAtX7ujCxzt73xfRwVgN11dPLkmx5YKqb1X7TXkjkduvH6",
  "key20": "kpyE3deZEJSWLvjCXyV8MPuCmmSJC35eNGUMQCSsuWUy7HLoKenVguszSG8JdGuxsMCaYBtyQ3HxodDEJYjd7qL",
  "key21": "5qwQ8eJizy5mnprG49YfLLuxtSaSqir8WnwWYqnc8LnLkQ9Lgu34sfHLnHmB16uQxwqGpfvTcSDWBwtKQCyp2GxT",
  "key22": "2mPiw5mQmnHrbyFyEPJDhK1ZfPnZMetxNjawaoPWiqmDyBBHRgdwu6hcBG1zDwknUMq4YgBXAZFZqhktMP8MxApC",
  "key23": "tA7PQ5ntV4HBzciK7Ycc6Yg8byXYucDbo5CPLs8nio8P8Fd13kEda9pYjRFVfr92Z3X1kpxQNceU8os49WiLzRo",
  "key24": "vzTYDoeY3zdsig31TAL1B2WVphSfzT1QCZAitdEmU6ewrtS78GBeigSW7a35fNDKnv4cip7Jta6T4JNuqcrTgEe",
  "key25": "2L2dtqsknwAAW9qktoP5FgrdjQMGtN8EXa65g95MHjbgydMgujVpMyuT1jXfqsYUzfM5FnrGPqhoAndZsJVruYyY",
  "key26": "64G9UWJeebGkLCB9W3VdKdy7EBo2gqBT4PwECkmjHUJUcbdmXyfGEfmrp21bSUQ8t1J7YDwnQQZfQY3o1bhV2aAX",
  "key27": "35YwmxNoBDyLEBTzzbGtxfbUHcwfdwPwgwU7a2ThZ86dpZwbHYwUndXVstw8vEoKTK6uTv2NJGpSvWaMpTzPvv5f",
  "key28": "4eZHbSYkqo9XHypekH3TojxrPAWny1yQaS1HX1TR45rhDAP2yHf2N9HK6U2gPCv1uy2xpMeBZpdzsbys7K744Z8",
  "key29": "3B65AFBkvhhWZeyMrnPZkigSKS7t5yFC8kphX27K7FXmnWwjLSX4T9Mw9RHT8dRfzJrkYJogKRU1p4gh4CbiCWa3",
  "key30": "3sRvVCm72SGXUC3HbihbJtR857RARZKnaNGfjnRcsjD3BWaigSGx8yiV7RXN55JbeLRExx214ago9EgArHaVAzxZ",
  "key31": "4yDMrZMJx3scRuXiKVPgJMgRxZuzUkqmwEwLtv9LW99ZZ6zikZeZQHLdFNEtC4UYVQbisJjSrZHmFNFL8PaWRrrT",
  "key32": "2XEuYMzsBnZvy53ihs4oAxykaGjaX3d9L1erm6AVbr8edfz3h3hzEh6rVMRN9XKej1nnmYahGM1wAsSw3nT7CgN7",
  "key33": "yBRaQXvUxxvQXWcjQemYBzzh56p9Fk5Ngypkp2YFbMwuVq8cUetGsfmnvcuvqkdMLjM94FvoWfVXwEkQwnSbqYb",
  "key34": "3fQJrf426Lpjsvtbh8N65W2qH6zZikHktgzVcbcLUkdNJcuaHy4xuVZnWER1VeifYD2HXRdJTTYmWX7unDY1wKcS",
  "key35": "3ee1Vzw9N6Z6D7cM89QYtz8abX4Ypj119fKrsCS4d3BQjmjuMKyzdHsi3SKaGyPQS2JftFm92yoweCjZ3AVtRyNZ",
  "key36": "pYJ8yYiM8iuLoaTcngZ6sEDRD2AojXJomTTvWdQZiGuSzXcT45j41YtVt6ssJHWmmBGUjLXWh7S16uYUGFzWus5",
  "key37": "5MYPh6WRhxhbGGdYtcs3HmjJqqHxCZcqd1jTUtc2PxYrz6wXz14ercuiPHZpnLfX9EMwrh2CqxzHt87ZTwQbt1hN",
  "key38": "4ZTykcTKgSfwHvxnFcNPoNrWFisdEFBgZVUsLajhzBYXWJcYgPcMDphNLKtPiJxsUkvaBvY1psjrv71APaBr39uZ",
  "key39": "5QvDsXEDYgFwVNyxguniugJFiFQ6Wpe44e73kWA3sBbNvwWwz8NhT91qMusindk5LPVnf4TEnThLwk4hZx6wqYtj",
  "key40": "3r5SenCUtoE8JujqJJ6XvHVtFi3Qezg4qRoKjGey2e4ZBxYg1Jmo2TBc3wBwcAqc47LWoPmGoWRCdM6afJjMoojR",
  "key41": "ASHLnkYkzacXtqBZMszVFxmom15PrrnWPY7H69Exs8Y7VDBksivrLQ3AYcWHwc1P9w9yiNDJCywQREbNQ3fE2aJ",
  "key42": "3wCyrcbMC2L3XHiX8sBcKDdY8e1SuNawyzjY6bvvZ6MsaoU2akaxFLJ5mXbajxcjMTaYJ2LL3h4vkw7k6PhALHc8",
  "key43": "AGjd8KEWF25D6QwetYQs2M98JXro6yFm476RQXqDVrC3vf9kbBknfwMQmmcXdD6zgzTTygpxZ4E9wHoFFBYJuT9",
  "key44": "2nUnRb1EBh83AG4b326dMz4kFxwJAAvtZgZoKSybGKKQpDpikgbucL7tdgjj7Mm5hpsGx1LXsPXxAzpZEcRePwSp",
  "key45": "5cCeMFWxi1YtCnyGhzkJ5d88QVt2GFSW1GaQTokkpKTzNygnUyTJYtyynZeYwA3fySoGGBRQp9P273ErazninDwz"
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
