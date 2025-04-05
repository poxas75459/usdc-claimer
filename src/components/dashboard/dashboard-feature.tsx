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
    "4AGA4yP2VbgD7yJqvT6skM6jAmCVHYBbg7CXPAV8rEqgwYwWiE7H3YFP8Ef94jkBvpWpoSZTx5yS8YZfwM9j41ak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "521depFYuGyhNk6ikATbXotTnenk7qB1m8wfAnsYHv6HhiKQuj7QGQFRMBJUeVR11LVE7x7izL1K9UMKPTLtbd6Y",
  "key1": "5MAEgqsxgwauwJrtWMW6RRYeU6nYvbhBfkxBv86TZeaPx1XK4WxQ8zbxFLvHDSQMKeQSCQfVuauh6EbGzkzgPtpS",
  "key2": "3fte4zAU1PZ4KJt25ksA4kBsj2D3Mgk8mBuXjk8aogqhTTzLFdRP8ihMwat9CBwvi2M6YSK5weeTmCjykaSS8v8z",
  "key3": "3c8bDbezpPn8K1pRX4AF9yRZZDiJ5yEyXm7VzqEPbwB8hzAXtDDirGGbqMtaSrp86Q4R7TnHrDvAZbYcpmE7y6kk",
  "key4": "5UZeKQbriGs5o6UotbUX5Fy3CpVeHeSo4fGn8EB16RTowtGCUWGmZsNRyuwdV1wWQ1oX8FbtgSibSwQCditgP11U",
  "key5": "3oztQkF22xMkyY6yksSh9BaCw4r76DDfEtVtbWgxj4uPnsM4KRHEMmGnPaYt94q75FNKj24NLt8m87eWU1Nezh2z",
  "key6": "97Yf69MWahTXX53tnKHXLBeBJAdMe76jzaugtSmmZt2m7L3B85wegbn8am7Fi1rnjb73jZv2i2m1Vyfq1c3Dwor",
  "key7": "3LerUXYNgb8ffh1CvGWxSwzRGeofhi2aTppLTUt3QnCr9bkcyrY8RqKaqq6J9EX7FgZjMVg2ZGTszDXvMqCCnLy2",
  "key8": "2bQHeDXgkiNX9CfAN8oNNhvuEkkpy4Dhu6pDg12jbBF3ooxbNyvBT9UQfoWesRrf6BybetrbR6L7TAiaiaon1yEQ",
  "key9": "2GTW9vYbfHSwzrWtUdCiqvMjFTznwJtFcn7ZmnDuxKSZ1qwTyAzrptKys4XcUyx8UanULo95sZTWttcqEAiMcVNd",
  "key10": "2ULepPzRCUJDnoP7W9JfgV5auVcokAnmD48qXmUpdbuyXTZ5HUPxFoMmkc6msxqyu9sYdX9zDHuJvfNzyErU87cV",
  "key11": "4gyTYi2H3NCLtnykA59kHyeZNjhyFiPAV9T5awHhkN9DDtU4TqeoGXBXCQLEP37gQtqWwRS85jk7bZcKxf3zL5Ys",
  "key12": "3nXfsw32wTSLv7sXFzjb5271cgBudskcsYpfDFEEWPRxp1G9yNLMZXynBpPTwKq2on2hWBw9oyamsxSKFPRq5a97",
  "key13": "5wmPQsymCxeFhyZkNGopRQ2oEWEpTHGVafNk2AuD7xJB6LDNFYhGHb9NJt519UzERDtW4YHXmiD52RVNTRFcF9Ly",
  "key14": "3gS7PZdwCLdfUxGF4fQXBPWtahr5FdgP95yZ4xNJAW66YigPiB5bbYKN8WKiyUmZeAkPhfWV3dpgjN77oys32Jmj",
  "key15": "5VBCCASGPMoBNR8Hvjcuo1heDFbCZDVBWVNaofaaxXwojJZeFHYCX7Wsvra2ZQmkKYtLJSGPY7NximNQpNLrNTJP",
  "key16": "2yEva9qvcGah6XmcUap1QpL2547oZhKbTnsAsyjSREmYiLXrr3smr6FEe8d1ThD5xogocfBP7qsVzueEFpgUxYF",
  "key17": "4uh25YWPJxuGooGZPhxzy1VZw9byjbxEEjBjt6jwjpcKxqU6TepfjLjcxhqVGQcrdJGuq8sr8vdwGZ1Qp3wd2F6p",
  "key18": "3rpF8ztnaozMkZj9Lay9uxMcJAcV2isHh6p8TTEbKpmQmcFBkdcH5mHnEHtDWEGHzBPMtNb8gXQBzJ5NMLBSzWh5",
  "key19": "43kZMb233AkXzFxmDHCMQfjQaQn6of8kw8v477saeYArit8x9JwMyTRedctX9iV6r7mR6ktxMxEYfaXzfQsWtGX9",
  "key20": "5ZNRFRD46uF89RdiRt4GyxFAh1JH1BW3WRpcU7aKjsQvNpQaBvrtaZzcWNRdn8FbgnrkftGFtCvUrXfjPZNrcj9a",
  "key21": "5731zMfdjVETfvEL3LYEmr45a2UH9WADhqtUQZ8Yj8jWJLX7DtTKUe6WDoXjrjQmsSvKEjZYWvV2oXYXYigPsofo",
  "key22": "33bHVBB7AFSpaNiDGRKyshfSQdRddNBxsr9nySFoFhmw4PFgngmqnmRxZQutmC6pcuqB7gyzAnF1dvmwfFPfSCE7",
  "key23": "yyJqks8pWN9AXJASM41zqMzAYVoStcd9W34wfq5YMVgXD5AobDg7NtHLHek1gPkYahFZrN8nj1xN9kMHLeUCKLp",
  "key24": "28RtL5eveQNquQsKZg4KYbPQoguiqbXnmtnWivsZA75mFMXxMefjvAXH43uFUA5DM28cMxnRzSXsfq6itC22vHGZ",
  "key25": "5E4SwLef3LDiMrcLpNpZVAsXo2wbM8XrPEd8ncGVZTi7HnjVHRxPvvuRnRRGjicFFiWiCbiS5gYoBMuU7ghaY7rx",
  "key26": "2ohpPEAwqjkzJqC36QgPKyaHJcw5SCb52hb4whTUHHTZwKjs77yKQRSninaU7pENfo1GWCUBWNdHgnitLYVNKPH9",
  "key27": "m9odtC6Xs3RhFkaLEmYqMN5WqY9CQqNaiUDTNs4y1vgF7WdmvWCpUQvB3xPBgjuWdwYx2auP1vrm3ZWpMQEoqfM",
  "key28": "2NngTCTrZFAA4TLYCEfq4QCEuybrrTozpq3tbRHYQGg3XMV78u93DNbUr8adBQTNr85tfcgLpVZ5CHL7PTLVprhE",
  "key29": "fQpCoJzYUcrZdiHNUbLkKgyGfQnwZUB8SgLR291kyZTrXUt7VbqoRrjUqskg6CeF5ysgamYMg5pvFFHPjcD57tM",
  "key30": "2y8DJUiDRN1QPyA25W743W33VmduFEFfZ2T9f6naPDnKQKwP1VoSj1yzhFBm172sCCwujbMVzQhkqwi6bSaWk2Q3",
  "key31": "3ViSt3EpcJoCJR6h25yFmzkkXQUZFEpAsrp76Tk2eG4qY4WFNXEgo3jkMwjtXTvqyd4ZM6XW3GyWzELYjG7CwaqU",
  "key32": "KNv66zPjoGgFAHhHvn9jHaNXmFWJX3rP3AG449VKqjQyxHHryvwsmMQLeonKm3N3xXsf2xH4HZkS9i2fdzTuAJU",
  "key33": "4BhQS8xRQTBdY9C99KEPpaoQtSrNhkE29Gxs18Bwqigw69c9RAmT6gx1yJpuMvq9nbYp6hDWfLgNQx4dEpZYoy3H",
  "key34": "4EC2MSL6bSPcn6gTdUeNoZGA2rMpEYfoSwHWzQndGxHvGcijAz4J1Mows7JDR3bTEQy9X3RXE1MJeVvbBwh2xhsD",
  "key35": "2eC5XwPZdmzjrgZEBRt4soWQH2xLyjuJ1mx635nhqpN9oRzNjJMW1eaGZjj3NUVFGep2uqyAHkBmzhS6yD6zCn7i",
  "key36": "Rr8guzQHM97etcuYL7GwfnvHhrkof549paNYf9xfnxW386Pk6SRbcE2BwxtupkDLkxBrzmnQq2wKuZYgsw4JE4e",
  "key37": "3taHDWxvGzbvGgQF9uBHUZe5uNtiywPy41jeH8Wb1CgazM88qM6Xju4Pw3yxdoWJQrhmDRYfRwX6vY5n3cghHbzm",
  "key38": "ZKyG5RYRjQGczTM6Xp2qBTns3obaQnBsABdEyes4SK5mcx5Ysms21Axt5MarLfXUk5NvPDZusmdVeGgjwuPe2sm",
  "key39": "377jUCi7aPHyBTgYbnKMNDGQ8oz2LuGb2teDHfV4eQKgATp5JLBQGJa2CckEwMQkhHpKhoJ6dNTDozerNbTit9BU",
  "key40": "27V32pBQoUkGPCCfkS1RxXarH39D47ew3hNSoBoa57qpMbGvWoyeELsewUm5vnQLB3RxeC1g2NbnpVcTMxzi9jf5",
  "key41": "5yizahV28vE1ccQCEkzCNkmb2LsvePqKn4HSzcD2cftD8LwUBQiSvhFETg5Drrupr3bt6xR8sTzFkws8jGnsBW3Q",
  "key42": "2UnV33V6qknyVbXzFKc19TZnyzBALBApFXcyGpprf6RgBsWyztRQSXPza5QbUGacofj15r6YRNpdeKBKcMdk6wfh",
  "key43": "p6fiW4jbsidG1FPDA9kduG76Uii6gD3YDRxyNp4rUWjiNPUoGQrdNqNp47Ziy64V8GoqYfSwoffFV4DZKwktRV6",
  "key44": "58rGvqQJG9aBKbTXoFhU3Gj1wdPPK6rB8nLVmEuCwErrvHWW2VnVXGtkxMz7e6zn72gmwpzYgtgSgcZ51zGRrLES",
  "key45": "2syPkCzE5kdyvjbdJSbxGkTpsWYwmTwHUc89RYo3psetXLZ4opDLUiADcN8viAwnfjaiSRUWquuqi1NVxQ8RXCQC",
  "key46": "2ne9kVpiit5BR11WZkxHdQ3hDxg9RfKJenasBK4Hu7tzhHvxEam1w1JgMaQFU4td1BLGBFFzqtpS2QHvJ3KWSbxe",
  "key47": "48TE4CHznCwsSoGLcS3Ki1zGZzkbry75a1bLPZMPRi3aWuCd6Sr192VJcPykxDugQmJGn7UqqcNGkdhUsNcgFmzM",
  "key48": "QjdAuKp6U4DjA6q9qqQgRtoWouNtVGaFYyh31ggQ6y3koUudGpVM3YesXnyKAhitowHCNZpDLGSvcQtpaPQ8ZXi"
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
