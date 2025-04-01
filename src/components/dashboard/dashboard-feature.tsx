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
    "3yu1WCUsy4cZZB5ge1QjrJA4TvVUjPQRSznN79rbPY8aazfkv9MB3V6pTwu1TrWmYyCVsdjPtwwJGt8bMbTiPJRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gqyvkrcyjC56fP4s6HRgvfqGdEck1cEfqLvw5m5ApPGQ3zXra7WuvuvmfBnxNfr9QC5f9M1yXQ5RHSCJBDzqiE3",
  "key1": "4CSdiEG49Av4zFRysqgxiQ6edtDLWhpMsBybNfBcMLGqKJ8sVqsTWfdHcjP7zDkVbPKEeMKypnDNiEtCTE1Ua1qp",
  "key2": "5Jdm4jmEqYTVGXGKcL7raXWzemJngAXfgCdcLjAYhNEkgHwEygDJqtuRWk2fvaSpRoC4bs46o1FFWK3f3KGBty6r",
  "key3": "NH3SL7nD3dFTuYgKjyFursR7mzvPz9VEG73AAD66zPmg5yk3tnFTMseedAFpKfTuxsgYnuySevTSLP64YK1h9Cw",
  "key4": "iHCF65tnVNTTDGMRxxPt6s6khjbhFHkdpnr8e5n92baSADyKBfZzcn4AZJhqAN7zrpBa9ZytKy7KQ5xWtndjfGw",
  "key5": "4L1X2aNGghrQzhjk5rs8GoYGydTH4ZXpp7Zp6X3Md3htmjVzTVpL3xzL452wx7R85ovh6gfh3gdwpVaoTMzHTgDR",
  "key6": "4zdhUUiFRHyhe7dmtoyHNoMtimasVYQfzdYFu8gvt73dJEJqHUrAqMSYQxe6v28qY1mYo9Cq67hthSAE5FGghtxX",
  "key7": "2pFZrA8qowASMYuSg2rh2sMBjsSXvUXfrfht28Q9mU6fSTy4MTrt5eUMR4jw3CshyEzgFuULcJ6t2xMbLCu8VxJ2",
  "key8": "457MRtLzhZLhBmSTjm4tMufxsiDLF26pFQZv9M7b56p999ujv9sdSwk6TnLseXvar8FibEXvPtN6rViyfECdH12L",
  "key9": "3D1GTmhz8f5RaJvweEHMHnkxUH1bpobCwx4RNYriKkcuV1rLhtCkcBP19H2oesGByQK7ynU8ZfwioS1VQQdQELsH",
  "key10": "QAokekg4hfSXr8aWQnF1J13DZ6TmaJYAh6RmYatv3kPfdo2xkBjgA5FtubVVYjhtjSLmLTitV5uzJy8kMkESSoP",
  "key11": "5A9BRi4s1AmYwZNrC6c1PbqNWHKXQstqBSmoj19FRf7k2MsREWW7Qx1jHi7tk6D9vY9MD4EHTVDt6YrCFZt7KnWk",
  "key12": "3cgY26w2VhrKD2yXk65XMJAt521Jgc4HghLzn4hHYgmogfaXFZU8ukz57ixJyqzBG2U2piVQMX72N2DpJP9TwcBE",
  "key13": "4AkhtpEE1ELGF4cBZFCW7mtBpjC5PTaCmftEmm2XgTf4nuyTtoGf4WE76KkFhwMc1NLmtzGCgzbpcHuLeLDGzgwz",
  "key14": "4pSxKdXXHiRFYrXZYFwXSWaFDRGZcwhStyUrBGHQNbWRCZQHsHJF1tgCvcaeZZJwmaGxtMpoVSNskkMBRHdXtmPd",
  "key15": "PMHHnEVeTHD1gLUApayHVh4jbUjKFdvCGpeBLLHEhz3chYXsCLdG354KNAaaNLzGWCrkho1emMgtBm97gvFMoxS",
  "key16": "5YqxkBjKRFfW1JVUZiCC3XuusyQVWaPKRoHR9C4TpRRXL1dEkXR4CCLjBCw4sMuJprtpoiPbW92xw2LixQSLYtmp",
  "key17": "2sGmx6DdAdq4Q35LgEEqMs3KsD7aHLu3CBKeDe6QZ1yAq2bt4FwciEFCXLhb4JgrfvHFjHa8Uv2xW4XRbFaxrUUY",
  "key18": "3XUcKpF6oHMQS6HLQnLL7WA726yeJyvWwEKAgP5Rieybki4wWyvPKtAF8awgph8isEyb9YDkwzjhpoUEQRbGgQED",
  "key19": "5bRCM3GDpTm1qayDfmp7BcPXnp7GZF7N8xYyiESyM1LN312QD1B4n9taN2C362r1gBBv3YskKPJJ81hyUh7tSEWd",
  "key20": "4SX9efvnzRpWguGfvmieAi1mAKaNvzGtxMhGD6hw1fy8PMCRQrULrCK66a1PxFRxTMzbKFRT9vWrxY983rZt6HqA",
  "key21": "5WyGi8xaiAPFzSneRzkAjEeLUF2mCS25QpxDYNzRtNJbaHZjpktsRdYFwpniJCZdNBJqwXFG5Xv6qjcshrXNcjUV",
  "key22": "5UrmoFoFb5n2DXwAMo1pPXCJyUCmjzWQiTXV5ZxN4dkNrsQU3VZkq5mJmdwhvuCPhkqRauDFhN8w3RTGyf96t8LN",
  "key23": "qA8PGTQKJaWavhgw11i7NMFpDv3QpHJrMcACpG7gpCsJ7ur1RZ39SdUFonht269UrKWfn5VR8uPvEyFX8PSbv5v",
  "key24": "3bhgH6TBnSxBDf4QQuipf5zZhZDgQgYiAuaf6TrZr4AD4mNN22NtLM4sY5oKnNmJZLprqwM5kPtiFnF1ibyLKwKh",
  "key25": "66sckFeugwdHSanP23ExmGGq8KK7796pvZW5rdAz6SxtMihvegbPLUVBM35524DBwjFyFfrUbpUzGPirum1eunnD",
  "key26": "5JehhSQgF4mWdVabkojVSoNm19QuND5DYganKojXBmntPuJm4mdMhGqkJUErhNSH5nFbvu8CXurLHmUxa9yzSZkn",
  "key27": "5XYuBjyfqA7RDEks29yPoRb9gFSwPHfTaA3CD49qQTbqvG1gdM1SUXeW56QshPTjzNuc7PzhH2bDVxjGQpm9FeFa",
  "key28": "2PBitxzQPcBvM63qAC7PZ1Ls49EeP9Uc3AiEjReZsZj7MvHpSKwAWrG6Js51FcbsFktrZukBdECg1Pybtki4Bkv9",
  "key29": "5zmZCTP3U7WYDKdkQEepRjTcavC9wgAQH7GD3fwuY2UG5K63GQBjkUTSS4TRuCCF8ia3stM568wMyXuXz8pB6bHW",
  "key30": "43GvFjtFhncy3zPxjWmMDcZjQvzC749DLY5fGvaRG9LE4skHWdWx7TA7E1HiyTZWZ1Vh7XCwCfgZYLV9etNBENA",
  "key31": "3wkbK9hJQLezMQ3MivbQ1273q9WvLt8NpyCqx3WfEntX2DSBaKr7TXj4qpnc6FkxpzhdDoPyypRsGXhAvxqQPBJ",
  "key32": "5W4f6AfkWCHv9Wfr7YptJPARJ4ELmrEh7Yp9dNyDXHwX47g7Lg37JCrxe6fGFeLyquoZTgeq8Kvkb7yZL9g9urgp",
  "key33": "5suVDRQ94JbyoWse15UGRMMNYBSCTm1eowppdV495LjH6d5qLm888MmC7aBKf5ExJeH9rAHMwiLqwCUVoAVqBMxd",
  "key34": "2xqnWPvsADYYjKUEu3h6u3LtSvQA13yuN38Tt7arHZdzN2MpXGUMYgSgaAeuwjYHsdRpby3vGgPyncMwv5d9Mynk",
  "key35": "2heDWhUBq4RpNgTmaJTZ4ieWUiHwqDVXvHq9VgY9m2EZSKNLSpbozpmvCptwQWGgkRw7SiwrwtrG2xwG3Ae5ES6F",
  "key36": "616tvC9od1MBgJsjpHWBxxE1ms5tYmty4ENwUY3RzZBRJnyCzuYENo4tpMZdwyZvc4Q4bomtLcBGH3ygeGEodUxq",
  "key37": "3MFYY7SSUfDaWFp8Q8EMrAK8k9BU4ZiAPix26P6Ya3MSTYPBWJ1iUxquW9Zt2rppp6LkiVESCmC933bAuSXHHxdJ",
  "key38": "56EkpNweqzvJs1TEZV7ow3gCG8TBv3ZwMM5Uk2C1FiBM5KUMNHhMnQtHbMUKmPy55QTt1GM3XMxRx1mjFUfKV778",
  "key39": "56cwz4BZ8fnJ3gKUHdML1MxUrEULBZL2gzmRq3MmPxkU1dCtwHV4GfNsbrNRbGnEcYA34fjrisdYHt9n2rN4nUVT",
  "key40": "2paZkAUdgRB31SLWr7FQJUZ1bSgx87Ly9EuRPDwmwGyRweDA8gUh4r7hA4HrqnXdMFS1ZcEJq49MMWwVenrZVxiy",
  "key41": "51ruTiVoczo2FQnqH6qpeqSoBwgLUJjCAu9y1848St7JwwwQxYYGUGeN4oucrRukgVCxiaR6qBUuJq6Zjo6GbXNU",
  "key42": "2LfS6tq7scgYUTJcfqGXGynvo7JkigfVETAaA6whTxZMWYgUtQFXPQuSAusYXSBpfeq18pJmoSVuDqrc5V4i3RaT",
  "key43": "4wa3BnYUxm1qXcctcA4GC5F9fGTeWXXP5a4LepZvMiZLXZLYUabhvzyCdqyWdQwx1dVVJCFgBD5Fx9CjxsewZqxw",
  "key44": "haymS67fzTJnjfQguDxqfF6q7BtDyN1aD6pmuFEG9V5UsQ8hQDHbwLebd71kFcUXzxumghSu493oKmwrFoU997f",
  "key45": "5MXFWkyfUe4e6EkEsAktnGPzkKeTskqgWWDWMrYVUBwFMUSW5naLAi331UcMPvCHF1HuV1vMMRLA2W6FzVMTqNqt",
  "key46": "65uF25vFtD78y5C8YcvDjnWubh6xV5KQy3ovwRcWgRMLRhp6ZZ9RLrcMkt7q7oMBgLvHvWQMF3KeTG3yafs1gfPU"
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
