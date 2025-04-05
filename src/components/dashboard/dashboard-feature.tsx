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
    "4BvQZPhE9RZ3Wi9KL9EN6wtSaYaWv5FcXfBzNtaNJV1KwcXN8oFNWAeUo3629qjNPMP44MBrHwtT85SGneaVN1do"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SmjQvyHCgcdUXvK7uuVmPEh5EJx5VYvwW6qphbkh2UL3HVoenvnMB3dfT13Eh53cELhgQn3xv9Z6sSzuZejV2XR",
  "key1": "4MkxZwbK76SgH1EUMKjwTUj1A1DPaZTrLXnGHGAHoJ9tNGDMbsujqZGXAwJe9f2erqp9u9Dw4YfYLXPTUPuPFsyJ",
  "key2": "4cW15XGvtoZkWgSVFVXyk4shixYzYkQLvsvenBGct8QfBKK4QGkqkTR2VM9SDcpPQK9BEeKtvFyKQQwasPhepkgD",
  "key3": "4H8xdENWMPPYgbtPTy8FLB5sS6xXNdY4CputADxBfPx2GU7wAJXFpYKH8f9fKKJAqYbuMMrkUnRkz54fw9zS31ch",
  "key4": "2EMBTWHcLxdE92YTdGC2cGGNN2u1LKsPWdj323mRLKXh23A94A2hrkgQJANNKKzPhsj2oWFifHzHy9ePBKNGLnPH",
  "key5": "2zRSCu2pxnASYnVcQggipCxtTyvYmh9SYtUsppKEnNVUR6gtQNPWEPoACFSRJzsLcnm2JbnTJyEbMtU7CCNJeAWJ",
  "key6": "33GgcwvDWdbDxg6FxQ2uiKARr6yS6hU7o6EogKfVCqENp3qBGvRqAx5RY1XCP9QbQavxPb6MEMGnSncJABWkSqM1",
  "key7": "6YZeNhe6GzcRZqLRP2NFcdGmmfGQNLKwrn2QheBmeg6SK16nMqCqMU4Yy2XELBs3LMvV6B2KPQ8GYvENyinqS2H",
  "key8": "4Sj4QZ587WtRQpbc5PtqfofeENuGVXQLMj5aZuSqoMgGdKNWfXghf8KR53HSctb17vcrvmT4yXoHqmURdKEmjy7c",
  "key9": "55tHzfCo3uKn6acbFFi6RQ5C9bZB5tGSFqCk3d72TB6p1a7FrMcrvLHQQ56LdMgXXAdRxVNrJg347dF7VqQGPRwX",
  "key10": "5EuuTEoejeTxpSSQwzXL2L3h3EsggGZwWLRtyMD6o6EZZdk9GwaTiKr9uLeFhaue2yAARRJ6bh3E7hmCcRvEPiwx",
  "key11": "5b1ND2tkMGmT1cjHF4eZBGxViVWXJ3cjVH2aQ737zyjzhmRhapM1x8rhU8aZNgBjPC7p9LF33iwecBvKrEKRrX5v",
  "key12": "3FnztL6Mwz4VAjKZjsGs3881QNV7VEc3393AUAapEuQRYrULqq7njwY5dSLD51RKw2M7rc9sgwVcA5izpwu7fxGe",
  "key13": "JqEtbDZvhyWSQygA6ukCC66DGZEbrz1MgpMaXfzPBVCqSR2uA9gVGqVYHVePFrhavdyYsfdwyJWGkEZmMnZ4ArW",
  "key14": "67FLxToaVyuCfgcfUqgFkSjZHazN4DevogLzZELgrCMphXcYqtNeCDVS46vx2LcUXU7vjdZdQB9FAiumjEPFRn7x",
  "key15": "4ebSxRAr68eRJpDZyAvsZ1i8iTbYKej9NvfgTwUsGtk5TbuUbptorej66cQV3wG35MnEjSJDz6bfE7GZK46RH7so",
  "key16": "3dJQXFFTjkMUZqmo5nBxmaipSCBitNpwCb172AULtXbGK1GKoPEcqskSgcy86XXnK1mJp7FuGpYRtRPcHLDRomnT",
  "key17": "345tYYrYUdCGJPiFfvmkwMo2PzJkKkrLpLn35csaLT2C38hueYPFaN1UuKBrzPHMXc8CffmtCuTfEnJ4NXgy9jcC",
  "key18": "5i7CfupP8Qdfja6GeaJwrsjZTUesXj8jvDc8np4Y39CAtDmoQEVwu6XqaU4817arDZKvgALvbsKrzpJhk84fkSVR",
  "key19": "2W4eJpBUtyYd7DAYrq5VxFp6MCGQ7e7FmkCNVjzR5xMoYWxYdxKyFUr6oFQ5WYrHd8WboBTBCKiPnCXGtbpKsSXn",
  "key20": "VR8fQ8LoBPTM3dwTwkbZmioSdpRgHV6GBxfJMvKn5LrUiEKzMuGuQ7SArjcodNLfPTNhzRypz4QNwW3aXr9pFpw",
  "key21": "tqs1UUonaaLN1mEYPUFomrhXrjat4gBk1ZLE6whEtY63bq9SfxA6E96SUkGtGAaMnL5Na42Z2kZLP8LBbQzxQ1n",
  "key22": "3TaaxYpLRwZXGeMS5F6BMQnYAoxtAVpsRpoWW5XxBrjLAbD8AvC1hb7eDSr3zG5aTfdocgtuLzCYDMaq8eC7WyLG",
  "key23": "4odVAk8YG5SCK9r5oq1k9RZ7XjeRK9ZmriRgRc1SyNosQodt5TbxuksVzQNB1mdp8zxDHrfBGC8maT9LwieqgRLp",
  "key24": "2ENjt8iemCBaKSGyjR628LrTrEhiPaWU2N2x1xqbZx2P3wRjGpzfokWwQGCDQ5pGjK7drNgk7r1b9WNgYGYhC1jw",
  "key25": "4EsNSQbzn5sJTDqrvGPkTCmdVhgoiVQdBWQ9qRXSzaznQ5SzKRRE64o35arem4SpgzM87NzTkq5Qre93YbHsHh8u",
  "key26": "4TsNme1J5cFvEJqTqBQ1eXEyB4j5SiqtE3E8Q8Bve6HTxTQ5seEoZ1oiTPjEFGxEs2WncFN1yyS2fYXMcyMs9GVS",
  "key27": "5CpawMyms6amzfQrVK5LRP9mL1utYoM1GHLeWpmxgCY7irpyTqcwezpRvEWTBn4aDVcetDNvnRET85Jp361jUfLx",
  "key28": "p35Qucrhciom7SsB8NoNvZL1e3wpdfuxgmBBQuncshumw4ou7rWVNseuzFdq25mUWvyA489pkqnsbgdzJuPKxNH",
  "key29": "3wkfTcabH8DN3kb6kQYLfvVdN9NgpmBGupz8DfizPATbQJ2RnqRgi2ZUPmUc1ThZpknDbkhsiYi6U5QD8KBAKbcJ",
  "key30": "5jJ8cyr6XQ76HS13nrxP7c6mRy3vjBF69DTYAd68zV7WD1RJB1KL9SKvvB4HgQgXNga6dARM8Tg5jgGTcAbsdW4R",
  "key31": "3dVuSxM82iEdPGVCi86dPsoV2rhY5GusUodDBA1V67vGkvTJL2QiUNYVAu8TY7mK4sjPaA7QLaHzzzKcddz4FNur",
  "key32": "3WKNFo5eZbftDez1UXZDQ6URr8tBkPjxZZxwGALZRTJRFNuLTSfMvtdNMLtq9XUvbcFWmKWmwNsj7efd8nkGkpQ",
  "key33": "4BsmQGnL5WvrMNm234ReadCWdfsNEPZm64PQh6MNfqqEdaHqQwrd5UoHV6ScescvQv7QP5f1wraA1DpiKvsAhF73",
  "key34": "5tm5cFqyNM5veV8S6ji8Az5bvSdouPCBAFCXNAFY3KvJjCmRNPaoRkd4TiNFMNFvJ9nMu6qrEzKEAwJ6UhmVtY4t",
  "key35": "36GrBcagaEPRvVzLaagohp3dXWiKquCo7zKus9ZNaQb35x4QpDdmkPPDh9PoSQWmnjKrrrj2pz5ngvwWi8fiXCRL",
  "key36": "66yM6yBsdf9j6YwKXmfNuD2ee3SWYgj7GUpfQ2HMnnvKhzdnTrx87Jnxywa8siiYVMeEpvSWxZz5CQncrkarMQHj",
  "key37": "2Lt7gsGNgdmp85ktaCJWwofwTFFtkVWYN1bprzLFJnsGpKkQZLnmMgLMQv9KJHof5WoUiE4uhFnwcTeaJuq2hECo",
  "key38": "5vRz2rB89FW79BSvpfAzZsWCJCCz8HPgS5PsGAGWnTbEkrvyLGCqFkiyZ4hNZxcxiDuyb8EnGufrozqJZcvJ2X9b",
  "key39": "4uJ1xjCC3izuBcN6s94WvpER4fE8MU8wvUVnVPMhxVs18QoH9VXJud9GRuPnTtZs9jpn1BtYkCQsq8VfKAcDi31o",
  "key40": "59V5qiXXkyK3P883tVhonw9JXKKwxSHACjcZn9udzjGGN5LHQrPUPvtXai28wsXPbxHWak3MiZwGM68cQASXo7kd",
  "key41": "3FkeXCtt6qFAbpM2GxLTArqizzFQQUYjbLjMGvXx82PzbHXRLjWB925RyPn5yKfNYqMcBG4RdkibwcfuVUJNadq",
  "key42": "2tSLMHVTLCrTqHg1mXk4km6ZZTmFCM1K1cWKaTLJC2LSVdY8x7e2BDMh1MQnbkNQwEcMzhnyzcgWbHhyGjGoVSka",
  "key43": "3xuSJaVYrnjGy4CRpM93rfZGbHqMePtQVe8jcfi8ZKrcjwwiP7dH872xmGZwMUtNrewfVcshKaBaQD3EZD74V3tq",
  "key44": "5Y44YrXDe4qqj965NbSSYxtuX98G1AMZjreCqS6XoyjsoizLn7n2ZVaaFkuiTMCYbYWNaisDRiHKTZb2yWyVrhoh"
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
