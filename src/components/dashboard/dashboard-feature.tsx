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
    "SgtY67SNy3JpWid8EQBPqY36r2dKKqYtoEB1sx43BCm71qYZpkKfLMZfgcNx6QWZZxPueuRdSky2dFRCc8kQbSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YWYWwL8n8pW3rsmdphHnUGS4gocSSFcAveh13hUfug5eiWfpXapXjitBuyJMPyraZUJcmQYwL2ToAB5bDWXPv2v",
  "key1": "474dXJL56bT3S23smyo9PBU7y37fCdrXPeWiVTyCCt6geCG527GzF6E5v89X8zQbRfzzdqhW8MhDLMA6uKPVMr5w",
  "key2": "3TKN5aZ5BLKQnvhCt6brrzQxbU4ZBjQGvTN488cQXnFL89gksFKQrhBrRkTLHYzgVsTq95gda6gnemoiCme4oxkE",
  "key3": "azkYuUEcZag6UyvL6dWts3JGSXxv3SkGUbGjLmoSFDZkuLbuNigQTMQz7187yJpAN2nydk3AV62fw2XL1hyk2RB",
  "key4": "2zWq62G15KxnbTk5HvJD6vQJRzpK4YqpnRLX92syWHcGtJdvdxkj6MfKLRUqq9aW7djV3XMzw2sjJ4g51eDXqBC2",
  "key5": "3LUW7jwYiZ5sT2ceUvoQ9vyYXuYxjZ1W7Tbg7GWFqMvNArNDpcC4wRppMgTgahVjbxeaF3nYDGVPkVzMA6XAtuYd",
  "key6": "2VNaupyWHMYKWLbGdwFnsX1VkbgjToZ4d99Gc3FbjDgVagnGB6GofrfPXfzKjAPJ9JhUB6yJy13hWNdxWrG55s54",
  "key7": "4wzFmmHqXGWLQYkLGMLFXLzJQHFKxDffsPNbHWTa2Z1w8Dqr4W9sseuhv5YjXWVeXhajV6gUDkCk1svuS1EUooKa",
  "key8": "35NXj3J7KA22q2kp6N1512ZoVxMaD8HdmRqPBAnGAPpQAraJzoMiT6MQTG4ncaW8dLd9RmxjdEDF8ceSTwQHKbtU",
  "key9": "3zKX1pbxsV19p1Pedm6QSrCm6nFbx3SdiuAypAgwuXN8bAQXSwaL99tvW4S8YxNHxcCkZj8NSSjy1jUqY4zsetkE",
  "key10": "m9JYAFPnenkK734HMroQAsWkSd1SbX75NYwA1NGmGhLzxWSnh8vKgdzE8bHyGniW7uuw8ZYniG4iTEgwcSFD6ny",
  "key11": "5v1kp4GrSsLH3fPZNyboRJELjqgbrDKGGrjzYA7zcPSX755A655gGHP4Zwg3jiRLdiNruWHyb4ogDTkE2X4SW4Ba",
  "key12": "TDfm5xiiPPMAtQvgM3Xifu4faiUfQBYzQkENHjcQf6wynNkTcWbPiv8S3ayPpouyo3RCfh3kGtWBAzUJV5Hn7vL",
  "key13": "3P15NWdimQENpEXfr2v15rTt9D6TnuZfdYqkuWtjaV6YVAogSgs2GaWBoFXYfa1PEoJ4GfpVZy8MCAW4EQCvxWbr",
  "key14": "49ghFsTZQ1tDMyA9KrLFukEmT44fteZUcV2ZezVE5Y3FFb3u7H542cD1KjmZYca3s4B8G9CYrpCA9qLRTcN8Gbc7",
  "key15": "2TPDdb35s39dBUMrUvzjCvYDijbQX8ZN6Sehiz4CZdY35HZwjedRMPEYFaSUoqrEonviaVGTfTSaPD9E9EcbjD2D",
  "key16": "25kwhcpjDGSsv1F3fNXoFRNxAHVtyUmGYjQsTQxx83caqcS3XY4p1qkkrmJWVUUkUH2ad4AZTRMjsxVWWPVcbbfY",
  "key17": "55GXAmL9gHt9BSdxa4Pgnm3zj6BQo7RcXc8XGbsV8Ah8z58CzDZDxCXjYSQYPN6buwMjxdu7H2psatUS5YzudaFa",
  "key18": "aGTGDnHv39CguMtVEFdmCsqBq4JDtyrmpBgr8su8Yf77Tah4TbDTnkQoqAoGn92edbF2RXdCjqft1ymd7RXyHfo",
  "key19": "2LNvDsZENypNLfYMBdWwVwBfJxU41yByvzaKNMHmyXp8AH8UkaAoyobqx8SAZ6VVAbucEXjsDspZ4DiueU6UcrhK",
  "key20": "4CxT8nCm2c4YAMhyVUzjaUuLXzgXx73tuN5r9Spaj5to2hF9xL1b1WbtHgfX84qgoGQSGFeUEqFdRYijN215pctz",
  "key21": "3ED464FhFsxMeaimxWw6WHUq5amHAWe9HKpTy5P5WwJphKMsJrqQWvsfSDA5RHvB9NaPssNnYSgkjFbpLqxWK65Q",
  "key22": "5P1VU4uhu9wNrXeYhTaQESkt5wYw7f9PtLjS7ddzaN9gDC6hvsE4JWtE1hw6wUdMsvggs4YFueYkEQBtTj9eeb9R",
  "key23": "4cZhotxPGwvkR9GcnZE6HrAddG9mJZoZiYDc64J4Lf4DmnDycqwpRwXNPdzWAgJUMj52EkfFGj11GY91AEnDpte3",
  "key24": "5jihNzoCuaKDmLy16s47xqK3Ej4pAAYhpdb43ZrE8tFofruQCNZpCJNv7RcnWZuX8Baci8MrRjAdz1xYMQcXDGty",
  "key25": "42TTNZgs7UuBdaLTkBWwv2Vs35p6i53fx2Y6a7ZFLQcXto5fDKcydc2Ltd3t8feCUK7XAJP5qMmZMbA38MmP3cyq",
  "key26": "3rGtYjaGXoaW8UZfr7FShC7t1q8ZnePiBFgCeGm4Hw8cvLrkXJd9E2tR3bwE6ebtSPGy5b2fMERRNSB7YyAshLSj",
  "key27": "X9XEEFWHuSL6xCdLDPzrrGorkxKMVMucTxsKJRRmbuKoN8QcygucLqemcVLCePWRHx7rLxNShfECCerVzKSdKcb",
  "key28": "2xbVVm5JwS22tRNMGiwSvDCUzXP7tDA8cJDyqFuEmWGjZZSJvFEbxCMszzofsEXEvAqfCQnKusCEeRxaAarXNMUs",
  "key29": "5tPNE5J1YZQbyZ1Yo3EFxK7beFkVSVF2WShnN1BriUE1L9y4ak4ZT3jNsH1mjf9pVf9aMFxuwniPougikuRb1aec",
  "key30": "4sKddLViFbizWtBWwVEnc9pkwXv2vP7TQh23dAdJsg3AZijFiRsWG9YmddeujP5FpREdkTsCDjU7eTjXM6Fzk8HE",
  "key31": "5knEk8ygtTFbSp3pxqzFFbRJE2S8BdSu2YWU1UNps52u55WdJVej9DN1uDavZdp1CK6SfGhtu7EZNWJY5UP59LWv",
  "key32": "WeEVbhKsrUwzTY3F9WUsQNaTFVg3ZMECfjpyxW88zqwEBPcxsWgrU5WdCqEbv3RnwA6hdR1AHaHQyyAHAJyomGS",
  "key33": "52sTpiQEcXdBwu8T9m4REiwgJsbVAmavYxDfU2v3TQrvuWRZ5Pp2vS62SgeZhrvDrXeJej4vNXeikAHXjix6ySYS",
  "key34": "2gLsLTyECjAZyWAzKCPhQnCkwFQCLDEwekQttaD1unBQZfHSqH1kfaMahZgELMvNvU77dtnq25kiWDmijrGYkh76",
  "key35": "FbZqSnnicxZgAW7BMnbftp3jBMpwGZNtQEP292UWYdbcX2f6HSD3jrJHG5BEzrm1xfxkbeNuPfcgkdWz25HoTdz",
  "key36": "94D7kWrAzBpa5uLR7J5wfareF6yN3YDrYT7Stwwkri2FxiY6pqpxtEY6agBNxNbhgWniv3SFJ4rYPFKF24ZMASz",
  "key37": "DBqVZC6csHsqLkyCo9saYWsgNtVqSns8oMc2pXhKJviHBh5RPjgJaikBXCAnupE2SB71Cna6zxiHup4nB4o7TSb",
  "key38": "3U7tkWvuXw3QhfZQihBg8Zgu2MdDSqDWtbSBUQtyacwnBVusUJp8N6C7RUVBBzYyBhGcAQo1JHrH1mbPDYXvLurX",
  "key39": "5omWd2NtdZ3z5iDa4HPKTZxRc85rPW8UJJuikeAQKEYFquLaVmGpM8hi21abBh321tpqsw6JkhEuRdFtKhwkXgiT",
  "key40": "4uYQkTteLHbnSsSEjg2STQpMGYYDqzRHiaoB1mgHg7n1jUNBaWGSMcu6bhiGHQASzTSA77VpSUwSTB32oHGMmuW8",
  "key41": "3GPqW1SoPZs9qtbab6ffZgdmLfoHrDgbKoz46SxjoTLJaG1KtJXbLRdYKYtfoPpE7sWCUdptQLzEbaWPhkHUYTah",
  "key42": "4Q9vqEaoV3gb3a5rHmM69RzjzxY8c4QyVtBqy3XPC9g1wnKH24y6t2etbh2HANA6FMT8qq8T7dmcFavuh9L1Na5i",
  "key43": "4pbmCci5dSvnvkVEG7zoefQSFfx3ifHfVpE4C3cNsStcjjb3RR8P1UGMyUeLWhuncxf9DCS9t8YECJXV5B6u9DuV",
  "key44": "3NwxUskSXweyNi5G7gaAip2hAvU4sCSUu38qy7SmQQz7RUmnccbLLBt9cDPhXDVowUVUKnjo4uQvPkJg2ewu3a9H",
  "key45": "hGj1w3fY78cUcwsFyzHGMLKv767eZ8C6U9CsJkBUSDFEPoBoxnw1WGWJ6QaP2R2VJuxKMhhzvCmzHH5tRXwbotJ",
  "key46": "48ZkbuJM2XG1zS4khY4jp83FxAFDTTwDm7YR23RUkCjA6W7PY6h3gPwPyXCZxXES4RcjX9JHigZV1GC7jjkZ2DSt"
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
