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
    "31E4eNALnmpzeZveFwpXXS4CoKbxC2JKrUJuRSqLEWpUvgwxsRVYSthCDAJPJp1goKe9ABpVhkmnv7T2RWbmnszm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cjyWsBXPEgXAxPm6gGZXLj96fdULjQUwZ4km3FhBAfhD3nDMAFN1XJHdpn4bvV5eA7VtmVbEEQT5R77m5RyHo8v",
  "key1": "4xduWwQx7GqbizY5qs9kPzXCeXpiTEpcsUJK3hfYVH5A1MGnXk6u4tnCUSohJoxqiN1LBdLqewuKepnX7cdUXvzT",
  "key2": "5KbBgmuDWysBtMEE61MxwBE6yLqAQ29AzbziopfAquPk9V7KGDCC6ZeLsiHPiBhYRHHgFjdAc4fpEEYbrvy9YYbt",
  "key3": "3gMeR49U9QQBkgneFo9vmTFstuE2rx2Gf1hBNd4MQJ8JzwntyYkHZTCPjov3gjjBeWPCqUzvqwPrhibaLNdyvXMp",
  "key4": "5rbznZFyokzZBTLAw3SSHeSAB6N91TypR7CTyM41PR5f3r6FxSRoWeavSH7TqkW3eVrjSFXVadCJAQaVhb2MSv6C",
  "key5": "k4Hr4gibk1hTUFpuFEfGX8vNRvfSQHkaipmdqsXiFEXDtFFT8pyWjjLPABSNvEdtMp8xfJuRVX6gBd3o5uaumBC",
  "key6": "57NA4YDyyYuELsswDwM8KfG1Eq7gH7SWAb62qUsTKVUqGoVL1Pv3RK1Jmt81Y8KWRsqMniYuQNJUNLtChdvbrYEp",
  "key7": "5FoJvupM2RdeufF25JtNjKiY585Wg6vs9DZNLTr7cWZeYwVRmVnmGoMGppeGqYY5BRutX4jjwEuGSSzZQ4jn5s1n",
  "key8": "58uLtep1ZxHmrgw6QjPk2c33vJEY5CepsJEY8bF1SUgf3JovgxgVLVnRx6oFGKWQATx9JqdMzXW9GWN7esenbaX4",
  "key9": "2wMkmBuNtZjvE4ShsgSQqd846LjTUc6mTMkp77QbcwYXUC1Usrw6h1PLWsMJJAyeFzATuZ646cioNArFHZ33c9BZ",
  "key10": "h6xfRkm9hpg7Cgr1Gz5JdcVm3ozjjsTc4EPj3Ws9UnVywTAcFcFVSB7twkrXDQZjTpYWyXPUPSHv8Mea2hxsDVf",
  "key11": "2ZThutQi7sqpt65LNZhZyEESiqwCRkSRKUjYsz4ns88ZCGAcnkjfry6KiL8AsLusLLb6DryQsaVeGwseMX8JCpRR",
  "key12": "4h96TU2Rjva4D1PYFQLzF28jtLWqMMvzWq6oMmDJ1ieQbK2AjZeuYWTUxtFwnU2ZNAXgB59HWG3Xk1HrTnqrLkEo",
  "key13": "3WXJNgJTgGtm2W4tBtbxBHMSL35dEbrSASgk9yMAwM3ws75r1dMAwnhDWFJiEgfusNAy4F9J1z8j3cVkdNUzBo3d",
  "key14": "4iiZRGtZPTqXjRvtK5VtQt4FfNR4pLUhia9VW2CNwhjhxiV9Mx9QSbHqhYaRNQmoy1k3U4qz4cRn9eESb5PeEzNH",
  "key15": "54HTAw19j58QyFEkcaf432sJqXACjKYjWTo5TyPUY8EQRFUJL6Tgyhmq6qGU2t1PYNELiLBrNBMLxQK2B8VFpSb4",
  "key16": "4fPuCw5pvzcVEJt3nv7Xs6FSJPgBeYwKAfxVVHiLNXmkaMkGk2qduTCfGarqu4ghXjtxQhT1p9Vec5BUDvUCyEmw",
  "key17": "2vW2ivKnX88RSULXg8oWpeEtiWa8vnhbBLg9yqSCcuwn4xa8LDjFp2qBitjDFyeFH5BQMD1ZhzKPby319cNKoJyF",
  "key18": "4UJ9DKRNHr5rMAgsRrNdAY9XBUQgdm4h8uMXbW1PSW2LToN9wX1MgyKKCMtraEgLAZH79UyXyWhGVnibTUp626D1",
  "key19": "2qj4vPrc9GPzTHroEBSU332yvwV6w8kpu7QTfE9aGKDbKUB5Cu2tEJYKXKp9RhtkM4GmHhUb3ueqWi121Fssrnzg",
  "key20": "3c9CWAUSoyrzRByZ7dv7FgrZSFxgXP5V3wbv8RwP6nkqmjQ157bizijHjw1wC94AUUqajryTvcJKBrdk8CBG21zj",
  "key21": "3BM1zTb1E2yjEcJ3fTTwqPsD2VJLP9RywkTKQ6CcTfXEVVgB3U5UuvyjBiHtL79oGvz5TfUgSFDwLMy9PtcxzxsK",
  "key22": "sFYaLMKejy5erPH9o7wmN5z5Tj9DanJDdGKvr8tgogQCzCb6aCXzjo29uUeqLbFzZVJ2ynJPn6zzDEoB6Gfp6Hz",
  "key23": "cQ6xRioLG1BZjeq3RhmfE3MydgSpQ3KwvtKWspyCWoufhKbAKM3po39uJcSpUbrjT1aW8j5MH6Nt8VYFH48rtFo",
  "key24": "56Zmw3N4pNSbtKnQJacH6fxBfGAEvXEJBXwwNtZjTMXFdhjtpEtMr6h1RLt7uFRdjsvAszq3yQCGZk8EhQLbG2Pr",
  "key25": "48tcTStXQFAtQrGpmAz2DVKjEzff73xxbL9ZYn58JA2PqmYegqW1pHJXPVRoXqLfPrfxnVwa8pu7yPSRtZnQ3Ka1",
  "key26": "22uiH58enASES4uyiu8uJpMuZ91Jn9GQbWhNwuDGaRbV21DxXVs1GFY7qcdSZbwUyCWRYWuhxeFg5K2A8bQmxixj",
  "key27": "5zgmouq1HcyMcbbv23umH9FkDtE9A6E5XwrfXtY4pBN2U1yx5Bxmiek7MBJUhU6M5Rhqj2h2WmiKTV3MVdAaFxrK",
  "key28": "AgyJsxQYZuZoyu9QCtteqqUgSiSQGP3j2idjsfMvz4HgV4hWyALxrAQyZtganUCE6WsT58aQgdVarCeF7uqDWHY",
  "key29": "3CSRPDFugCVWWxrDRu5HNHmc5H2DPeRiEcwgTfxH7prRGegn7yTcEsAwCtU7jwtiLo5UWjz2DnZXwgXNpapVjz6f",
  "key30": "Za9Zb2VQG5SN2TSXKnQa9BxXpwL4h98NAMpLKQuiSbCpLweafTvthDZezifRNZNDcw4CNgEHz4DmXcrnWFm3T5p",
  "key31": "3bym2HFvCz13qqNbvTdtzM62NU9RNmLSGH4y547Ui1NN4yBEy18gdrLQBGTLnjv2hck8qQG2Tqop1SzCU8Mwq1aF",
  "key32": "3wxJDKs4mNJLid8N4efUAZvKpcGkysZcpeNKiWazZTFBjehSZFePQFuwqWFmEreL1yLHNXLpuxcAAdVN15K1edZD",
  "key33": "4H2a9vvcp3sww9Dg9zX3kmZgp24Sf4cTPuEzJprTFfVH25MfDNxjs4PLkU4o85kJUt3nkMqn5EFGqkKzHq5yagLX",
  "key34": "59bCmqRJ5NvscWa2FKxCmEWFjQkakWyq27Y6zzCYsDtvbrER9z86Hw4Wvbpx3WAQwtVMPQzU27YsvAtSWGbk1TJF",
  "key35": "2JBrAmtWXHTRX9GxvDVkSBxWY9noWm3AwpcWQwMntFbQmoWoqU6DwLR7TB2qXEg154NFaoWftj7xYGzmPGYJoi2W",
  "key36": "BJSx3PP2UE51yBe6k7w4GBP8QVuQqUnJGADgUMG2nCsn1v43STDGr7M34Y6bxDRuzPo2PkmEMMseRYb4q8EDbGu",
  "key37": "T5DuqcQ24dbbH5UVYNgioKdkALQQrh8kU5LLVNRG5aj7RF1iKwPSsN7EnxxC9auUZuQZ8P2xCc7VokHTPh3EQE8",
  "key38": "4ZdGLeSvNRdsAcvjimb1agrqoAN1vj67K1dCXrqPbPgJmH5aTKcajSixdnPeygcv38Qd2A59QcWryXocEMC4ZrLw",
  "key39": "4RRr7wRcVRu5mTXrSMnAJFfM1uRfoMwvH6XPWo58qXMP7nCFFrsyQz89RDzuabHey1TQF7Zah1oYw4CKzfHqwL8U",
  "key40": "5haU13DTvdzi3SaP7LcG8AmdrpCTaUqPnwodzuLq7BjUCZvUKHPTfr111aB6UFgUpxSeV932pxmGYwaZaXJ7rHp5",
  "key41": "Rjw4mThLbSvqnF4yt63WtbWjousQxEn26oqorzRh6efxdptfCfdzdQUj7TLk6Pmqft9EioGuAzQKmQE3cpHsv6h",
  "key42": "37AdR427b8XjyRadmnYdtPHEBV88gQpPdHNhD83jueRMKWs1rU9nVhqJPVLkbm5sTViSqK9nCB33C59njwzBa5kS",
  "key43": "3gRs6GdzJzwp9rVzKvR1YEApV6jjokuUdw5tG2aAsFfSzJvQUwscXcLtQCq7Dzo42qRKM6TUHuRuGMoDUfFx8FFt",
  "key44": "4EmFy89LYvWgWFmJdmAy2sYKiY25iFZjScarPRU8FmPZX6nzGNF6WyhiTuKPZoK3EyxYBnMj4GBKaNbjmtMZDH6Y"
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
