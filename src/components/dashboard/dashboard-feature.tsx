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
    "26n9KXzqCqQABphA2fKnf197YFd9ZarYAuSg7yhaQehs7Tp2m55cZNSzdXrkg7ZnbQM1tWmXnH3ugjeaXdfmuq1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4syrkoVpceiVGyXuq76TG8zppDgbVFYkqpYkmXcYghQbmuuVDL4K8sciVEu7DwqZzbgqdc2uGDUBuLbbqycDCZgS",
  "key1": "5DdKSdkNpfyarkVAQJWfcng4QAD8kQQvrneXT17kbFDqeaY7D4Uy1WfF7vW3GxkKfLtKkdy2TCv8JPdTLtjF6GXd",
  "key2": "5jA3226cZ4DC3TRcADHLFFQ9mY3HAHy16gGB5NMrFw9pMP9ZbEUKJeaPwWFgh4Q1DhE69HzLFP2Rhu4hT4UoNHt7",
  "key3": "4nvqJ4niivLJFG46kxt3UuUHKVKvTsZPeBAPymXmTnfwBaauSsD8AYoQuiDa6tgJJGpkfrq5vrPz5yGfmt7VUt8B",
  "key4": "3fVJsmHUq8wQ1qRabowF79UtLwB1pHHD3JjMi997r9WVycbAaSbpgs8oAKNmHB47wSENzmbdDaoJz1r4uhCoNGCy",
  "key5": "56D8EACqdA2ysv6XoFFyAsSBSLtUsu3ZepVwWWMAmLQ22J6aGpTWgWVRYNbzugXe2q5s3Wf6KEuZWxNbBnjbY67",
  "key6": "BMYP2HDgQQDGaFCvijfhBkKuC7WAYmEjtqyT59TesZd9PeLp8Vo9BwJDDphh3G5qJsh4DGv3mtSHTFz7FFWFm9d",
  "key7": "gekLaAwGYV2t7kc1ZMyAgBPJswavQJJj1WSmgf9RAqdxqsFnhFTSwZtvVzD9fmHFbF3hSQMQ3GezkGQidekXVpW",
  "key8": "26o7GPQtSJHeSSvxjbTCiHdMNiEQxJeFNm2FFdetz5uGwTqwSCHsSRD8KhEhKSL77WKuwXHS9ysM2MCQyjFoQV5D",
  "key9": "3eVDXiefsR4PHKnJgVBDCy1teRok25suxE8wz9GEpnvCj8LXTdq31TrXNSTPgX2owXSXmGNicH9D2Wnx3VkwBYWy",
  "key10": "5fxgBYugvshGFJdndRMkncWFQxDxhgfGbnqTnjqk6HjZ9zrnvGQLoEFt1fLypzhzLn34XsKxfKenuHeHGVxbc7QS",
  "key11": "2MgQUUFexjGJG6Y8fXpvLMQF65otD53hdf1yGM2rLCwytaqd3MxGVTzfw5pr46m1VEah25byna9DYLxQ3U7GYi6S",
  "key12": "49dkHz8kiq3pJRhrKn9oSMp44rTzY6WChE1aorvyh2Zv3rfPDs7DtjwNSAMmQseELM6SR8UEgzs6bn9Gq7ttkPx",
  "key13": "5A6oALtdq2GraKKob4MYVZqUQrckdUqe9XMJwD4vH4QNjyL37R3fGorHvmsDcDFiQGzsoJofBs4RSm5UyxXg41m8",
  "key14": "5B56ZUpnCRQbYxdfvU3g69VwSihxdH9PAzXntW7mH2gjDTDBYcdeAex9LU227aWeU7ZDCef38Uue2D78xJTb6N2",
  "key15": "2x1SBAAZL6c1d71VhSPjCfN5pUkGbEsgMq12h9HUodb6UXgp9EFEkSzvZd1en1CcP3mmZ2L7Sp2Sn1iWeMeAHJY1",
  "key16": "3ZWQruFqUupTGb8tkqWKqoC4boUQZNcMx7UwbvsFw1PN4YYGctVeLTCdboyojidar49irARRtwN4EcYdvUAMdTXG",
  "key17": "5tHYqhLMq1L4H2mqYETcuZm7b6JM2QvWfvVEZRagANBKJritK2sunoTpQm4csGFfr3U7UvTMnwy1iorAxTguPnjG",
  "key18": "2bvy76fQu43CRSP7WtYgS5GBgLUQqDtgvCEez7m62isDfT1GgV3BeVEkWcvZd7kAwVbC5xuHQRAvHfLgR1tyauuG",
  "key19": "5eKNcbyMMQmyV9auDVaDA58eCMNag9MztX8gZZpXVCUE9uMk8Q3zL4HT34GSRzjzp5cUVs7V1cprRsxdqGNqUWAF",
  "key20": "5TEMeeiK4yvHUtH4PvsYTJm99zJBJHg2r82gsbdy9BoWPdPZFWDgP2dxsfHuG613j6763KGyaSer8G24zsnHYA81",
  "key21": "2dLQykHsCZMaXEmjL7Z5VbS6AspcbmTkgiJa4gZFviD5Gcu3V2fVydzLw8Ena2J9ptAT69xnv5Wx9PFeu8LWE62u",
  "key22": "ttLaGMby7n9BxuRj9vuzvabxWHrehJ3HL8233Qa4QdpRwLoLPiFKCNp2XzYdjDY9s42vVqXGHjjLWfSbCoBkuQg",
  "key23": "64j3gtqmtZvZPFNGBpqnc3zm89XPKUQyJynvfCgetEj9GTGRRp5M2edZWoFcNHWbcs3asgheBmib7gHK9XrjEfRs",
  "key24": "2XoEiCAycMkZdcpT8JjVFEVRTCxTeQGP7pGDBLXAD8gvA94S5n4LLi3jEHFj9q9bzntT4muUMk32uYzWC2KDdwQ6",
  "key25": "mwzZG5EMmSyqFhpFGqjvLqyo1e728wExmw5JHHXVCHHDutiJaSEPh9s3x9HxPKga1YwSHe1ZDA11bt7Mfb1mmHV",
  "key26": "43g9TbpkhzpsmahA17Xyh7xAnsGRjJyQe2fCEWE2cqxJN6pEUsoEim1cnjtR7zRj1metZMA8Ga6jJKULxyAxuujY",
  "key27": "2Wk4Fqh3t9R726KAR59BwTojNMNGbRyBhQGtxKzLAfJxXTVAghxnsBxj5yVDyc1Ripix9AemTNHNzUSfdpFx1r1Y",
  "key28": "3DHzjM78X2tGZhWVwWSkTD54wNPXDN45b84CRHzEMHvn7SEJqR9sphxZLjtMv7Msqs8emKP9VSKfHyKLtggHiYbS",
  "key29": "5y48uc1WCBrzTBNPkwyuqVfmwh3UYXhzXGtc5HfRKuZFV6ieNMM1sRf6fobRXGrAixkLeLcUMYbQzSkZqqUJ8sEj",
  "key30": "5pg7d4rq14TsTKbP196pXaTwCN2tbyym3k5M28mK8k2JR8eLfR2pngsa2abnTsdPM9A2wVCFtKGV2bQUue8gFF1q",
  "key31": "51PgjDFazEkNUEZm3YkScmpQcKffsTKySZb5NYivmK8m68fFAUGGP6SATgk5Xd4AZ9SoanoUJh4hPzJCNECyb9R",
  "key32": "3pGiyd7QY82w7U1FM9x6RESrHvKh8hyAuP4zaJuJLZqTBYr1GsqRCvjZHHYD7KG6zgjQcqVbnjLQYcgaedJ62HNa",
  "key33": "eoFpksusCC8iuka6aP48Vnw9SnzfLZpw6L89wy5L19RpdmJJKTMucV3P2hXne2Ufptk1tuqRhhUExPWnQrsxjGT",
  "key34": "3WrLMMYw3mJuW6x9zvtk6e3PnxAW6g7E1sp2Ggi9heyKqqyDjCBwsZ6JDTyB3TuMjgbVCuYnTrW8Qby5pF1iRmZv",
  "key35": "3fX8GETjfrxS9DyoJjm9GDihSAMv7LTWpUvX4ozKEmLDz5qrTtw18vYJ1GaHTeYXZ9qphCS2uDkMu2ek5tWAP56y",
  "key36": "3eSdZkrEctcTkWKBCcaDEUfXH7ZgfVEDdK7Gybwp7UJSXS7Ri6AW2YvFfLJpmMctP7tGF33aTob2qziaGPucEkKu",
  "key37": "LZBbdLjoFVHDXyvDRMkKFMWEotSPSF6kAbicoD5asrgrNDhm7KuadmdA6di4KFtvngekKuY64sEh4V6aaDkTK8e",
  "key38": "cUrRrU2BxtcSxmEehikJaAeyERxG3jTA1stEekWPYHt1YfGidPAwXDPhXYA5anqtCpncqUSDWkUtMyqLAWS9q3E",
  "key39": "3qutjuARTsSw5opVsreZGuuBT4HF8seqtb8hQeaAc89JBHCKB89ZyQYzfotPezHi7beUjbz6Sg55JeSPPF2oX6Zz",
  "key40": "5R6bwShnj26DaqdFJp37D7hegzYA7tosKgRRyuXNHso4Wxy3ZMwXjgYy7gNQ3m67i7CwjFssm5Mb3Vy7CXWCW4DD",
  "key41": "QkvMH7JHSKhex2AcZyPQAx1vPM4yLVVsqCvZTU7aRsMEcYenSCSHQYcCijEh3PsN34uhKC9bxPcKbYPzafZonuC",
  "key42": "2Jv8ZbjgoqJPvr5cbvTXug1n8o1aiHSB71EbXMqS64jDp3Y1G5xU5m2AtHcbPFQLkhPNX5ACiARNSHdiELWiuv7C"
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
