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
    "2zuJ8ZRPSmWJo2WUBCddQrP9ocJDVMjcyKXaxEzsQjbyy4F3xcg8aX8XbGvUhPhryaWHK3rY28ctWQk4sCSjTyt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iaQPbmbHpSrHb1P22sdkRBbmMsTjNB5A7N8JNUdpjjYz9xAQxsZ4qAqm6sEJVHVZQrw4aKYR5NETyPca9PE852k",
  "key1": "5QTdQ2pwx7td1Egi56RKHMLoEHAwcME9redmkmubSgRTesazyKsjfAzQonEKPUBijZkn6qVnar8NV8kL2Hf3Tonn",
  "key2": "63h2toz11RUod7DkaU6bVpQ3gd9L1pXK3XcnsD9FwLrvBZ9LMmdYN3QeqwCjsGCwSLQAsuC381bXHRUCEyxVwZCC",
  "key3": "JEL12UmA554e3nWdr8FLjJ8GXnPpgvHW7RVpt76EJk2aK4HYVUou7cKaWU3KP8ZDXGtc5Rb1bbatXBKdBnR6YRN",
  "key4": "4Q1uAQz5LkxD2NxBScQybr5J3PrsHao2fE4G6L84DeD6RQmC1GjBNjrWgiSRem2s23htJEfzRUgUyxzkGQK31LDm",
  "key5": "2VSxMP2FCZJT5nNNfCvwRh7gVEiDaW2uNb6uncYGVTkiFzMTb6u9yYLHLf3UrPCDFhWjqqGamc5FiYRv5JABtnUc",
  "key6": "2fn3Jb49nZrqfah3KBLScUYUKDhXkLYaJ6ULmYJJ9oDgKrQR6ajjCkovjHrvEjmr5jbsBe7Nni3T8dDuLx5HJ4Rk",
  "key7": "2kTX6CHKdT11gFrBcYrQz8iK846eK7qpeBzJUct8LNqBjcBmfeUzAiRjnDQeTT65VMP3QgNJRAPxGFWA95MQ6s1f",
  "key8": "2CmBLnpNUti1RVPs3uG3KwUwhaYkUxCcthYm6jbYoF4HhsGGBRN9tpQzVWTY67t3vKi38fkkW6A6ZtXBJqmGxSGG",
  "key9": "3NuJnzcpszhxVv2GGfjczGqfFGutfftaFYchPrehsKtP4iiawmpofRWZtzGuk1hu4NauWuEqzKTp54yP1YTsnsHY",
  "key10": "62ABWjCB9wjYmdL6DXgu6PSTboeBzSf4Jm868PpwpsLYzzFK32m93qG9gtDNjK5FbnmUPsQZszpcFHo5EoQA9ocU",
  "key11": "3GJbe4LgNtcUsuzRs42ndhFjEX4zvyVGu9CazMcMkKw6ybLooF7zmSR3oaQNopAdBwLFMU8AkgdCsbpijEzx6wYy",
  "key12": "2Ef5mM1mEGBnRcXjJ2g2GH5NfHYnT76rkkdKJGABrumhmZbpgn5UepmNEFWrgZXSwq8CHuzv4QJ5E9XKiVXuVmCW",
  "key13": "gKqjF2Y69YsWEBsh8UNMNt6qPu12HRuiUmrcKUkfY8C5pjErQi1vVoLEFiCBRaoBZeBAAoEoyQkySPD1Lnbi1J2",
  "key14": "2bN4J6GT6VzU5KDnU5B4jRbRtxqeGScdwKF6uDbN1w6KfLFiwhtzDTRgpHVRU8gibAc9XNKiBTyzCsXfFx68niCw",
  "key15": "EWfPmuTk5fyqadYL6LYDi3sAh5hA2A8MkdVSvz1Yq6nhojFHzhg9AfQJAZXAhSiojrEmjx2EDq9nunRvuPaM6BU",
  "key16": "64so1a4tSQKo1Yfrqz6fqePjCb43XBm9z92RpEftzoZKQrpfc8voVHuwZ22YMPsp9Zg23c4mPFDMxrEdG4ZqKYvy",
  "key17": "43UuJFUP7DyFDJYJEsxdVD9KAXTEhj1SA6oe7ctbmh1dkK2L9MQfnCjf7Cf1Bz63AutRuMzp6Rpi1Kw8JmgXpARU",
  "key18": "55oB8xgL2qELHf5h3maU6YSU1qqU5NK8C4CVf2Xos4kCshNAbBNcxGD6R7hSBWGXUaTG6meiqCEdHfpD4d4hV74B",
  "key19": "3UfUJeo7V87m2CRJgt7gYV85TYh8mRMQLyGn3KsGidKwjNyf63hLZJLgiqjowkvevyXr8h7XHPsjS6pnxcSHX7PN",
  "key20": "5uo7gGpZEkjBi6K5dTJw8ZpthyaPtJvUsqHTT5Qq2YtCfc9yGrY7Qh4rNu96sKX2QFeujquUyf7U2aJ1ChWXVVM5",
  "key21": "2aMBoAVE7n5pRqnN5Lw4DfhojPtGYTB3F74fVA9CDfFp2J7fuonXZ1SV8gBTDeKYh7GJMX7ZqFwnrruw4xvbKh6D",
  "key22": "2tnDdD7mehKh4tGdDxmi2NMv7vaS2NXPnLKXZg1dKZziafuuXtTVQHYshGqXxsfUC4sFvCjyfitD2kYg5SKKvD1M",
  "key23": "63eKvPHWGSDiPRLFsNrzdb2bRqNrrGcqtbC3UhFHeXFJbfCQqdxAX87TkZrZacDmMR4ZkhAX2SjGxaBuDKQB6n8z",
  "key24": "BXTBbC22GGtUuPQqKJn68iQvRPBhEFGeMkopvbb45E3sJR19ZwvnAYvMijqLa187XMA3kehYZdKwFJfvhvRdaMP",
  "key25": "2b44aVNmnwDxbAaYKLsZWuwqBmStfQa4fcRRyRCdy4Z9ZzRtvBKKUkGc4ndcuNnNe93ciWb8PB7PF1Y5DrhV45jJ",
  "key26": "4Dtewobz4UTyXVQ3T5yXsHbg8pj6CW54aCnvTabtfHs8t9nBxgMKbTN7UTenSUw1VsVgG3siuHFkv14Rx7eaVa4B",
  "key27": "2p6f3NnPsf6zZ9iGCFZpiZkoqewZKpbsYsMB6pLqHP32YFSqdDUeciDascJAcoq9jQrhgot7ZMKWKvrm2uif79za",
  "key28": "eGydS79Ct6taw9QEjVKqDyyhPkERBTv9xKgRRGSnnkFApxjxqpoY9oC8nhxRPLgYwNaFmkLUZepmbARo8MuBDKn",
  "key29": "2YLeNhQiUctUiudybZakP7EdgBczDSC4ETs8rBK2tnitdwMzERbK2tZtsJCnP1kaMsRPRDpBzgw1UgcNrrHpgGSY",
  "key30": "3gA21ygGwNajh6H7BvgLt59Liv8x3jtngxwYCXtRwpHmmZz1pcxwqLJYUrfKWuFsSAz3SR2a9HQsWtX11tFL8uvd",
  "key31": "54ivtR3rw4s2Cm7UhnrzA9kX4pEL232B5fdDS7fUP1Sc98wPZLfNL1ZU8DfibMihkNswCKPBcWp9CUBLnW7tdpWp",
  "key32": "q5dGDwmNRgLKxG3sYEvCCjrFbrxPdTxydKiMomNw12GB2AakGnxwZf5ZAake2sBMDQeU4eNEE2Y3ZPs7xgg2VvU",
  "key33": "2E4wNLLhenFhexEVyc4d9EgFU3X4maqfyqV2W4bcicukvM1TBgpAWe6nyz7Zrei6ATw9aaaC43q79ubbkT5kDikr",
  "key34": "37QQzqemVsuUMmGFnQoTAFD3GRpqDH8bFEWqfjVk6YhJp3xGc7h5E2AJMdAmzfZPweo7nLCd8gEELBhYesWJBrsA",
  "key35": "5nroj8QrLkGyE7EBdyZKngCGJ3NKDxG14kLVGdMr3ZoZbXoPijByPY8puBPVr8jtsrA99NgpTparQcXjX1CK4o3Q",
  "key36": "24SUcAM6oanCthtXE5ieUQMCKc3pe7sabK2DiGgNYPSL1wnn6F8B8gc4a6pqefLXKBQFN7LPZM8kYLVevhap3pHT",
  "key37": "5XJqeffShDmTTopqmRwXEvxddrZUjaumbzRZSN7Jwv2Q2sdU9xT3xcbb7hLmJowXRDhXSbd43TCjfy2pb5cpyd2n",
  "key38": "4oaPjHXvVzwJXqEHDABq1gELWL52nFTNgpx5vhXunbXxR7joRyVYEU4iN7Fs2DmrSEWwK7CkMZeSZnQZE1DpxTDr",
  "key39": "5Ep9Hc9LAuEn1mJAwUgztMQZtM7o1tVk9BGujHA8zwPueGQeocEqCXBTEMsuFKvQKeyDsN4MHXB2mN4tG16qaDc6",
  "key40": "1K2WuHcsbtUu6hixf546E1oYaBjBSz5QyZMrKcdjpxs3ZasdDWGwaG4pJMwXWrLXVHzG5XnfTzPMUUUUoQMhFQL",
  "key41": "DoQFwUB6Dj1a7vkku2v1qVMj9BjPesJeFH7deLrbC1Nj4XqAb7C75o9xDGPW1BZZo1e8s4fXtCjLioJY9Wv1Y6q",
  "key42": "4uHWtuDAC4fGwCYbezdinbNWJmChucubDxgpoVhtz4QjWeodzUtmFa49tk3vG4cUJwkes3VxwNjEq4rxrjZaW7Mj"
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
