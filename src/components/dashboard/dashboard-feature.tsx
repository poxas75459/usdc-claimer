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
    "27iT2HVEDKiYPwJcYCGbygQDQdcxyogQVPqC7aMoc167vwPgMycXiHTdE89dmuXEHud7T7WMhpQWqMSpRVUwdkk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h1AvevTDvV16Whsw9fv7WMJiTpFBooYGE396Y62BgAjst57vBSSH6GY4keVGVpQQZ8riYAse8ffKJkpPJza9Pit",
  "key1": "5VZt22i2UV1d7m7zKvqVW4fApyBh1RDiucjQpxGNaeevwCznFH3gnhi4yt2sqhi9by1gMyep5HsHQF9GkTLfWXVr",
  "key2": "5LCViZQo2a81mmesPbVW3SKeEF339fHpbqcApuwHBBauUBzt5zms1B4sQHbrXx4Et1D1Xa3eQEykYoQDJ7Wh4nbt",
  "key3": "2XTRijJjuSoeKmnHXDm7LhKFwxv2qBQZtENLrFgcnLLzYqUWJfAiXCcYjJabZKDoPf4SztaAW2WvHAo7MPQL3PNn",
  "key4": "4PkvNz24aqqVREZ6ADKu7wmocaWvNXR1kQVLZHKvvt3aRhjiPP1bc6vUrfbeskNT3H82PUee3fR8crp7H69hr2un",
  "key5": "4ncWw1NtwipHsog1eZJJKQaet9BCAZ8XXbqxZak66G8yyogddvWUM55wREaFJamuQD7vpQPSP9D2BCb8hsLP3roD",
  "key6": "2Hbz2cABrUSb4sjR8KT9uFFzdeLEEMiHtGC3R1GBG4BY7JtGtr7A9pmkoqEd9fB8jA18oEhkKFpudg733sg56EM6",
  "key7": "27xVpgPJ5vzir6M5VpaLN41YLY3kLMntyMMM6CMLWF2BmgnEZaYAM67EH4yU4o3Z3CyX6RJNFR17WrPuFiTxAggE",
  "key8": "4FH2ug8HZ2WfApxj9bu8s8WorzTWjjHZ6N4WoTxtrcH6hib1sFgF9ahZT5YdanqRHEWS2yeewBRdeYUeXs6zhfZ1",
  "key9": "4s4fCDaBTCcG33sikAa1q19XNf6eMx41ELYWDUjBGmRUETMbnnhjZN78ReE5ULpjp4t6ies99JXUJun7c78Fbf8U",
  "key10": "5xCL3AgbP9CWQ5885uGmTU8D5owaZcVuhp5J7B2MPTpKEKPqBywArzzznjzEo2PxtR3XGWjSLqoea69VrTRTGDEf",
  "key11": "415T7SHXrPzwmp5szkyLh9afgFZCwuNEZJgNG4BpJaKxNzJNV9aUn94BxmBvysafeNwD29Ky9iN65TVmQpN9pbt8",
  "key12": "5y1hc9xckjMjYPrNbUX1DEt35qXbapPh43wMR1EXWh7Rr3ifhkHanvdAesdWhTmwU5M2jMfdhfs3Xvie8gWR6zkG",
  "key13": "DALByWF4x5rU4f4t8nMC9RziNnLrXAGQuDGjeU9z3cHr8L4RfpmKJs4wsu1m3eguEo4ZTF7xyhuV8TU2aX65sPM",
  "key14": "4QJ7UUPXQdsDq92DtBajru4pYvYLSQLgyw4N9XSmrH3NjPnDHF99yboY4BgxodF7aDXeVawCbwJacfvgs8kxnWpU",
  "key15": "V2QS13LQGKEhW8N9x4RT4EZx5D9631M6GRCAqnmAfjExLtfPkyeHx7iKAWLuDAm1kKTEn4sLvtCWq4CD3JwyWwV",
  "key16": "4dUPb3qkv2DEXN3sMyRfmXpAcsMGxLfb9JAk6Brj7uqGqZVKF8LX5hyoRZv5RoiZWZXynFQmGgJBFCkU2px3C54s",
  "key17": "osvMdLUDNjgZGYbvTt57fK52sTfRWfCBUijngcgrMXewbEFnE7LxAt1hy7MDCgHeKbkKkHGKg7NVKMgSTExZ5yK",
  "key18": "5e4dVhjYGM9DtLiGeCfjRqLfJzoosvEo9NRX7SURzhVPqYZvwnBfEfTZq12xSiSeebfmYndqQYWHippHAK82uc9m",
  "key19": "5aLbkRZWcxuRG5uy46dXBK9sugwSNdmJWvzH2sRFzS1J3pcosLXHCg9RsWtPFAdn49F3sBta1VcKVTQtkmmvTm7c",
  "key20": "2wHy6WPQNsX4cFNHvkdXkz57gccUwdKUUmmqUPHmZLXnGe4nJcWwcmww2keGLPKXkLgcNRXffaLQtYfnPvg19HCj",
  "key21": "3XeXLm8p4K6UFXY4y92vJvUniXafAWDjq5H5SMmcH98CByKkMFzYvsmn5YaMK6CtTGjy9aPx2eRoPAodqBv2cWrm",
  "key22": "3TeQhHBC6wvqibjU6ruXHACTxMKMpXUyrhXixm82jwcnQdPjEB5k8mWBdDdEE3hgRXRzGQaoCrzihHPeEesuhDwe",
  "key23": "5qE5QskjEu3VQeAkiuF55yzvHFf2DrvazCPDRfNnUZtLkoF7eCU1bNNT2n5xz2x7h1GnHzNv33DDFwK1CAopuWXK",
  "key24": "2VGyYt4ouZDkhMLRSp5LLUFeP4E1hAnJwya854DDxdZYX7jtC4Bz7CdYCqcHSBbmMpvw5B71vauw7vrKvD1dKuwu",
  "key25": "2i4nmnHV46vJy6Z6Uk33LMWvquGZCqfjeCor8yoJ4WSxJkFpSyootaM3QgSRhyoHdL3tgWNrP9CAQv1FPsoHELFB",
  "key26": "5thnkQa2tTY2rUmpSTiTGduURV3dNoahFVaHbFsKXkzckbsGjnGFYmHEpdE3dGbCm6GViNvWMhu9zpB3b4xhGYL7",
  "key27": "2vAyrF9xdcu1CnKwFgDPPxyezFTftxtBruYgN9i5WNdN8mALGpdPSvzaUrUZhVnMw5en1NphstYuUuBdhixD2FFw",
  "key28": "5GuNr1RkWS1QaonpSnXwTV5ZzkwHkUMcU6Ju9xuKejyCxaaR7Fazjfq2QHf7qHwpz7rTmCQL7nADnUQkJiAcvLmV",
  "key29": "2fnd3VizAkyjBf67HozH3B4fN7QxmRnnUE7Yq6LJ7hakisPVikc5rEJCz2bgdLd92b1W4eaVeMv4tnPWuVQZetVT",
  "key30": "fbS5WuqVNDgbmiWR58YTSEgqCQvEA7deythZZXnQCVtbPaXG5qRwmCWxerFEqm16Rc5bTKtuR4nNpJGEbeHxdkw",
  "key31": "2eM3QS6XFz3Lb3RBKcKkofAwkL5G4xJd8j955QNdPaW4S4nT44Gm17KQUciL9hQTWVpGFTfUwXLLHUArT7haLjwi",
  "key32": "wWm13VmrY693ju7uPvup6jhshhEHiTM1MCzbY9hTXhjGdaNHtCbYNWXiU11ZwSEGUsbxU9afriS5vwECAuqboFW",
  "key33": "b7iLKzuQY17ne1NR1QPVzL8JAkGMfgeVynDmgdECHKqcboPB5cNxp33zGyaiwx2qdqZSB51aBzcJL7nQr97wpwi",
  "key34": "5dc7oCDCHoVP9eNaJA3tAKrh8a1NRa6G1UuL3vhmDv5fo7t9cm9gr6aGVT8aXweuiiejLVmB27X2KQr32MyxpJ2y",
  "key35": "4pvNGncDv5u8hX9pQBT8kPMhCTtc2z3uTUh2QXNjeteQLXUzyDHx3bLcv4xZNH6j5xMPD1zcAPteXbKEFHMPtCpY",
  "key36": "54aBhqB7rAPhCT5wbqG2QZk4gDTZpvCntSUaSuPL74TqaAmdi9FzJgUXKGvFawoVZgd7DmWtCbVFetUFif4efdAT",
  "key37": "3UApoUayGyt3jAu3EK4sbJiHqqoziDBAzKCToQzbZXQpbCKo7qoAcNNhbMH2z1NBwCzNqvAWuhuBzR8yJmU6XSu7",
  "key38": "3hmdCrKLSUAj7UFmFSzqadrw1eCb94nV4TKtdn95QW4mubEoJVuQBBfoqeiNQRD6uiRuvFNWVbYQaAV8K4UMKqEM",
  "key39": "5ii9ohsfB6qe4MANUxDpcPqZQLpozV2aPtPTpmAECC4RBvdZD8nD5M2mV57cHNwVytbdsSKkDgRoPCzJF5iK8CSX",
  "key40": "2fFjgUs1J5qYat2fL8FA1hidNbUAx59s5ppwMS1PasnyV1FWkpyMJYUYxXLRU3G4Ye5Jq8N7gC1sBXGqLu84ks8S",
  "key41": "LBE3ymPDjrWFcAmD4jbAbLCTsQJ8R9YikNG3cxFwZsNSh7Nx7TocpDzHu8oJvMF8GMPfMUyW7PBFVcLMZht6L65",
  "key42": "RXGVqQia6tySAX4F54kX53zpojKHu588sguNKzfewAXqENFRCUBw1DTXfDnZte7TZuhQM91NemnYDixAhLBTJKQ",
  "key43": "yidvHgfnkr5tvJxxcz1DR3Rp22wf4z2yRqQLQ4jX7ZXQmvpVuhaHFp4Z71EP3XgDKEfcdbixRmHqDejtWtTLF8S",
  "key44": "4grPT2oKEsckvsLvVS9due6yGWJLx41WCcxpeTmShR9nWfAVNmYarmDZ7u35Z12C5t5opYHKcaXjRSL4BcTSDSKH",
  "key45": "3fhXtaLGP7gF4bMmS6PxCN5ZkZKmuyFK3QPrEj4NREsQktD5myoZZUHnR9FyCbR5KgsvdqDEi7e8p7gJsT5khGiH",
  "key46": "5TbkM1x8kfmwfZUjFussEjq1aCmKCEvELPyRTnMbpSkd16nHqfrop6koZGDDNhtVGJ83CcjjcwjHbQhAjtdWhUDb",
  "key47": "4rEbo4gsggU8iyngfzi72QxhC5JnaXYF5tahMkTQDY5dVAGJoFMiTh4quGTu8Q74xWwgH7H8kTe9nTS9FgNr9Mu6"
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
