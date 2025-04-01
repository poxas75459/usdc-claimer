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
    "3WQw2afti27UCAbweE2ijvGbGXSX8AxPMGHAGhiyoPc4ALxcuV2mSJjrQtGSpiK7FsxYtVPPxN2PbV8qAJTa2pMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J7CSVHY33awi7RerrAjSHhEwzh1H97V8JtPDMamtYwU5n7FQ6noKfbHKCmSKBukrRy3TkhjZUKdexjNU4mtiTYe",
  "key1": "5Z6jXKQLDSEyzmd1YsYXNPZuNGy8V4dGrv98RkPh2auzNzvJxL6K2m621RrYuBgswYMc51aMeeWCvZyxk4kHZimx",
  "key2": "2krcduadXeX72ogNh1NLnr3sy3XE9nSYm25pdmqsqTTSZCRmZJeeG8eeGH4HUB6No56guqeQMoYXFKV8pTLexHMc",
  "key3": "3yTt9hZJAMdKTamU3CgQsRxBquEs3xBm7kwpwX5dhhZTiwJGBtv1h3nPeJx2eFR9GPJuM5nmixFqhFxzaUCkUjXr",
  "key4": "2cv3a7XKpru1S6H2sS8TmLWr79PGk8sYTecioAh7DhnFRVELdGH5orruA8VGB6p1BVW4ZMdkg5CrAp228iSSD94X",
  "key5": "4hLAJqahgAyryKiharjzzwWqZomqChUTeeEQ7BM7WdEgMR6ccVcPUNj1X66b662SA6oKU1499mhaa3ChJTFotEm8",
  "key6": "2bgqum5VcpxhQxpXmzfrfUUnHC4qgbXExomHdmiBkoqKxN2y3H5Fogyv4qKh1ubVeiqxjaSkwRq78jBDyQmxtRPU",
  "key7": "4ULUynTPHD33ig3ayY1FKSSNVFYWGZNEakX5niED5eTFE2cPqDHGxKHQezsqmCX7VFb3CU9cHijyv2j2nhL9qBns",
  "key8": "4MqLSsrik5wBBgLkQVvCe3BWVohMFaD3LnkXksnb7t8wRmEmAnXqTz597GBuaR97UT5b8Rqxby5gUpr7wb6Xs6YW",
  "key9": "2Zx2dYzC4J6cNgAKCzMmR36pP4yY1BibABYdoUpS9JMSfuZpFz7thJDAXh1JCMVvScznc7XgzEtrzhy23dMRhSZd",
  "key10": "3CkjJ9SWF15coP7B8TY5qf8w8LpAkYJksY98SrD2YjSrcRtNgprbsRJ3hpUEobDh5e1nBPZxb318Wo6kHug6asm8",
  "key11": "2VvRcwcEZLNeNSpVz772BZB6xuCPKq61XCDasdjBsDW1mdMppuNiuEL28fwmbBsHasdAn9VPoJBxGXKpAqdWvt42",
  "key12": "36MSJvwph7oUEWaM82kYDckWie9pv1Tgzqyi74rFmqLiLEpPRpFga6YXvp4cvkv3ar5Th6A9dakiVLgYk4ZAvhGu",
  "key13": "47CQT7QbhBG1QqAsC2RWky3h9wsjxJRSZazadRXf8qvyQRsuMPxgDeZR2neHAeoQbAHYDVJ75pFXcKXUxFMzpnV6",
  "key14": "4mt3N8rJZdmSSV9dw96Z21FGFf71Y3QG2mUgzLPjgryLvjCHpbkhDp8MFQsJXgAJU83k3E31eqErBh2VKuHDqinc",
  "key15": "XYqQeTaUT68DN4pY6GjBKNUkLdnrADisRqMS2ZkMSxuxjHVPDeahPr2inPAHHW2XDFYgJj6ELJThZKVYYBc47ai",
  "key16": "4a5r3HTJTh6ZUnv622pyHBnSgZzUBrGtgtk9qS6VzdKxTE2u2Eqvnc9ohU1znc6mqZEGn7aTuwontXeW3bAfNtVV",
  "key17": "4A8zAaupT218Z8pFnUh4FQUub19kpSgNZoidSvckUafe7ee5aCfHGwnZdrL3969DzxEarzBHNWwdBCjVJMVJ1fVG",
  "key18": "4KSA8wgW7aZ3V2gWkCXGeyWwHCnViyojrJ2AQyQt4utfL9VX8m72eN5EkBdruYkwruYoe7v3x5ZRg2LYyfZgAKnv",
  "key19": "icuPUtwhzCxcTnuBLZmFkuKfDVouvvnepuYRs7AzrHo8VZceqn6VJ1whg3tmryFnyzQSANHc7sPUpEdZmReeGoy",
  "key20": "MseoG1gZNA3v6d6yLPRGZZDQDxy3KxPMU7pgkMLBYuJRMsd27nS6pssv3k8kkqdmqKbDaQaHjuom7U8oYCcakEB",
  "key21": "pEbM3sg5516mYQiJnNmk9nHpMSUGkdUZqdr3w7E2itZiaTvZSSgxvfSpwyyDKL4ptbGeJdftqJAVwaAihtbJuGY",
  "key22": "b5C4D5eHqmqyuc8QX2bmpMj7dFM6eLeNnKjujUymxn3fAi6yAkYdkXb3Ke3Us95oGWxWR95JSCeZFjpMDcyc8qJ",
  "key23": "4iYBMZgWkwoXCtAXcRJ2rn25qahNcya2TM8FfXD3r59icebUopYUTv9nX5jAYNpX11LpqiExx7o2ig2vNbQtpNX6",
  "key24": "2vvWsMWNtxa5ZbCY6SWY5Dtepcbe8EGDv6UXFKPzytWLAjNX4PvFEXAm5pFcHYrog9ZsNwv1xjP3tZi5BtHwThJ3",
  "key25": "4BpEwnBBtJcPYQEMDtBkX7Xaa1MdKuxME93vDqBJ6Z8AUynKGSCKAS2E3NNpr15pENVaCeRwe3CFRdpmc37qVFzV",
  "key26": "4Do7czz4vo7K6JvhPkP9cjR8ZcUM6RxFMMjPF3xnGirsdWkfcHNaLe7eQLYZ3NEuYo8fTJYQ2xFFGCbhy9946bxq",
  "key27": "2gHTYQkw3v383D6ZDCYvTKBAoKDHjMikPGG8BSqnjJi6uUvEQx14qX89Hu6wsXBz5yJNuECE18UxnBGesDzYG6op",
  "key28": "5kWCJYcQNx9HgscR2Kj6mfMB189d9xx5k8SMaGazPbkb7ppNGR4D6DAu2hstGeNxRuecfgtmKHRM9XdbFYWXzVmK",
  "key29": "3Jegr8WCxpb4E2TPo7UpZhU2h7j7QgCr9s64P2J2rWbgRETBcAhHrgkjfkrFfLHpHwA6pR4D7TrAjskUJD9y6otX",
  "key30": "5KgHk72CYyodq5F6pHcGhuGgnQnpJu5VZLSy5sTKaVKTaxvuVtfRDfb7Som9ZdBFu2tSzZNjzH1AghksFXD6K1jE",
  "key31": "2CB2zibq6cn39p3dB3uosZFt4RoAvAy9mQ1aG571aVPnmGcTQB6w9mGdYC2ccTFGpwxTB8TecFMFond4BYrTTBWy",
  "key32": "443iMQajcfDyKBVsB2ZX1U8n8TcemFcomv2mNqbhZXiyH5vgTa6o7xLtJ487JievCiJfVofR2pES8qsav84edYJ9",
  "key33": "3zEMFokMJ1EAiCxGUfn4AK52LTrGcVEr9qjggDTvewAQTdhqdxKcX9oTjyKTJjwpPKzVetnBgeYw1QoUt5y7woR",
  "key34": "4wQi4i7YdXAE2us83JbKewGcF7itzfG7HSF85MiKM2w1yU7hp3FKxwzNbH5DnDCA7GBnsDThVUS9DKmir64w8eg2",
  "key35": "4KTNPzXLMeZUbmeEuhupdGQ2tqJKDoM7oQDigQhLunpDdFkojCsWGMYtrJStCJuBRD4LaabvbiPQzPGbGH36LpDX",
  "key36": "3XFRfbEK7HZTvFkW6BNF5TMEGTwpTETZLdCPVkZhUsbYw6gCxoZS3m7kuPA2Cjo8XSvw8gFzYGJeDPCJQyUXhxdC",
  "key37": "ZPioiTDHGen4gy1fNpjN2UZhQNWUtkHpjKsQwF7ngTWs66L6TBoeZo56iAGZzfVdypKd27m3kmJMoy77moNRa5Q",
  "key38": "4BqVfKkhpWiFbFjd2jFcQSXo2gLAjkCFT6s7vTzUNVmmc15GazttsgiMMjjFyunTAZp2s4awqgbL5wib7kYp3Cbs",
  "key39": "devYyPTfVVtFu2NyCZGuH2M1iFnWaF1CMd2LNU9qs7DNaxZWCUMvLYieiSbHPago6TbCE954omTupdp6DtgiMkj",
  "key40": "573GVFy7FjqvXK4Zc8tYqCKZMmH7cocUYJMtkh67n9fkrWs38idppkSe2eHZu9FFx3PpdffrMcgC78gHXhk8Dczq"
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
