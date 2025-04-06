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
    "5L6pciqn2RPZFdR413uJBZY5L24SucTkpUDdhVPtiktmqjLAadcT6sk9gHpcpezCn4bxwYh33GZRDRzvo9erWHP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fRnxmLZZ6gGGrYjLXDsjZEtaGLJnHU5PdKTQHM2Y2Z76vi46mGd4L3TJtQZktNeSDqCz57zvJH2qRPKT6KsaLn1",
  "key1": "4xV2Ra9hLMrWe6jLtseE5Vup9dJfxvPQtEtQcvb8edire2sJuJy8Pu4R3aebTJ1Cgs2H8XrLcWyPdDnNCkcT4a43",
  "key2": "2M1JNGu3HbLMqq9YEgZxcMvcjJuymttVEPWH1ZUdnHgt7Kumc9YQM4cR9p5BtNWpUM4XFhzX3aN3gT5ZvSambvNq",
  "key3": "4YVPuDDHVVZKPjWfht7bsxFbPR8aoZ2bcgu4VnVmr4Rcv9HP3m4k51QVyPp459uv7KBz1QTUaVoTxUbpyiyXAthN",
  "key4": "5k3Nwu7MLBWiLPHxxXJVCG2K7rabqL4kGrAh4bVN5NSJ1RHvd7Gw1214KyEou2XzuD2K3ToedtmYGHwBP6Cn8GYv",
  "key5": "2K1L85hhzQ1pMX5yT3DAyjeCkM77eSgWM2W16DNEEn4mwnT2GfQaENRG7vgCFYxe49FoKWc75bbBY6XW3Zbvmpbz",
  "key6": "2DDTqVcHnqS77EyjwMXrfmNNdN2YtiAEZAb2fM5HxiPTnqi93BjYoYvXJQggEMAvQsCpFexpR18aGe4aiusPZQV5",
  "key7": "UJ1hjcBnRLrSYqsGJrWX2QAaFwCvhYiadAGxawWxEmEBjjypdgHPyTS2qSBEaaG2RYbCiHF8cA4pZkArHw7HwfA",
  "key8": "3FmQvdu5JQR3fdmTStgi4dbKm9Ks8b71en97dyBvmMFvKMVF3Lrt1psnsFGZuuBP1FctEHT5FaajJoPVQnrGUKva",
  "key9": "SWKxcnwwcAu4tbdZeUu2NpSDfsdJ8hYSxGsXJHXUfko185mrBxHrkGoUkeFMirt7ZxG8QFw1Ci1kygPWza9TZDJ",
  "key10": "5TWx4UjBYp1qRvpVf7s6VmYHxh72nj2sDNJGKDhfDny3nyFAbXajQQ7GNNZCYY3L3YnhQc3ytnkbXLthT8mvEPBo",
  "key11": "2UFThKutYuQ1SzjnVjMiBFGSzkz8yt6pUTTsUfvWnMWmB49TrjumEZWSjcEuGdkaeQgM2bfvLQzd2YfxZymiKWBS",
  "key12": "3B2m1tswFjnPvnA3Mj9UpNn93K89aPU1819fMk6mQdMehbFdP9arWULMJzmD1oUyiuthB2xeHZVvXC38WXWESuxZ",
  "key13": "5YZjuGeRvEaRQjWGCSuykeQnu6hk1wLqoDqGF9BMQPRJ9qS3uCxHQt7V8wY5cXykQ6fGEj5crt9G5Lx5u82S9m77",
  "key14": "466LQY2VNwWrykimtLjufEJf6CSDoH9px4qJpuYei1LiQavRAhF3AF9ucAHUFxhZVgVYXqib5V1Pjbx7y84mJ6PK",
  "key15": "263SQdDokmbZuFYMz4fLRq7EeNQPKpvtQS8hkREV52DPGKMCDUK7sJ7LdLWCQbMe1MbdvxE7B2P66RQrjQ4TKEss",
  "key16": "3GFpFzJFgFvUBdzm3cXEG16r9tjw8fmxRnqRo5nFdM3UFtawm4HQ8TKhnunVLAU97Ppev9wQPDksun1cUFfd5BDJ",
  "key17": "VpNMNZZJPWg31koeAojQNmFawy7QhqXsgYXXPhmNeZshvHAMPoXk2e6cCgHcXwf53TxExzvhsfGBrJ1UjjdT4PD",
  "key18": "2wr2HztUr1KYGduaQaofSKAufNR8LWEraizAFWgfyG7o2AD8GuwKwE1dA35Eoeihg5kuFqE9XSQmaLoHo9SEBKKt",
  "key19": "5PgbN6gkR5kH3d7gWAkTKfLo3WpjbdKbKde5eeKcE3U96w7yZdr19QvaBvuQQURCD4hChywVp53yoWGFiemA1xrg",
  "key20": "48vecry1Cq8vSskHpyiGWY4Vr3eLKY1zBHHqL4aNcTExDikYF9TBBkxP5UoW5aGB7bfMu1KuAZRomoz65SeB7JbB",
  "key21": "Nn6s2M8JVgv2zpbVjGhfHCq6Q2DJj3UyVwkhTSN8cFkW9fYbCKBdQ3VDDoBz637QAPzhpyZP2yBPpjLJp9d9PBQ",
  "key22": "2F7SDAeoEyTZFxYwXPmqAVoFqy1HyyKD2K4EaSq9NcS92AFQdnkza9uMvEcTSkHyHsStisMVt7NrNgBukdvH3bnJ",
  "key23": "3wPaDe49PBRmx1oWABtYJU5ScqSEsov6yornvN6esJ5pK8zy5D4tFcGfJ1f1W6evYaDdTEAHskEo5xa7qnG9gpUm",
  "key24": "41Jtw6v8S6wVyTVmX3f6XGm1YvmK3YHa6j36mFtPt935wFTj4zR4ruyhEyMae899zDBbzhcG4kpt8paJ3cRLSrGx",
  "key25": "5picLAy5qsQ7ocn8phbRyD8kKZ9ozLhyGyMV6nbTh9FyiwE3wHXQnFAqZ2ZSy6XtzRE9fSxDQM9TKq1GmeyhdKur",
  "key26": "ET8ydXoZGnMsXeFPs1CEQTEzcp8xchCujXKE2wPcqhAfcQ1kHt87UqgQqzMeX8HPmYKwiEapLkNY5R2kzG4JGGL",
  "key27": "3bQB3H1FYxPYRpC4vTQMqXkWS8nqesrHECYSyFvW5Cw9Pvc9qd2BZ6QyTF6rvpmqAaJcmu1hFjEpdt79HPMRbkif",
  "key28": "HZJnHs4CZ62g342WZS1odkocMhD2Frdggd9ogzHuDRqV682hygLnJKAX2C9q9D55vUf1ZhyET992udsti33GGJ4",
  "key29": "3QEDtVsfxhzXBaeoULywikcNCPMPbtEW6pec9cnxn8jCfDF6WFih1p5iWCF9LHRZLoZEs8fFo4bYNAUpcJwcJK4D",
  "key30": "3vMSAYKpb11oUgM3gxaV5DdVbSQq2G1576R4TG8XDKXh2PrqYy8MUbbiCv7F5pb6Yv85oXi7eaU4Qstqa9zwnMZf",
  "key31": "4hEt3uEWaZtcMiLJ6ERc51VtZ6YhzQfuTP76vBR5n2DdxU9YnLY1QSfztPF3aUCh7cjCPwgS3hH1H1Q6sJCfULuu",
  "key32": "4p1N2zFvdUc2AJH77hcpHXUTfSAFtJvDyjo5uBzrBgKFSX5uJ1zUjocjZwGT7xi14iekrkfhwter9u6YCkeuRt26",
  "key33": "2igE42jBVc6AhiqfGbf89Pnx8u3VvzdjZyUyw186dfSjhwsRTACHZ8u68n27B2bXjW7Ri8f6wSUoRrd3vvYz3D2R",
  "key34": "2BHAWJtSkCo88VaKBpdnJ9a6c77ZqHQ5LvWCGxAvqGggEpfS8aZpuoGjPoueqTcyeKpes8usLD7YkrqCzuKk7yMY",
  "key35": "3eNvyVQvDWUU9yiXgCKmo4WFbus4UxwNdD1sHDNYJHxeHHZUgpKUhKUhjYJmS5cfsNPW4p9NsMsuynx2Ry8MGuAB",
  "key36": "4Stdt9WrafhEEe91Jxhdziqqmj1KPuqcULwT3Kn2JyoGJgrC9uBMx6tSxCRVu4aAQMhzRn11yyQUdfawR4iSZCz6",
  "key37": "42ZN9EMSz5E19eNs8sJoNNtnZiaE1Sx6j65Uvx3BHPufLhvZZ9HvcGnwP1tAAkhcQunUQbR9JqtxZUjpMpRcRSb9",
  "key38": "4uERNuoMwep1qPrVMBrfvfFt7rWW47VsBqV7TkfH1CFTJzirYDTcvBSvtFBYVJ6YpfkgyRZNCCAAm1VgvHTc1DtT",
  "key39": "4B5nekEWJQRLn9FtPnVcbmDLepPsHhjJRrLoVBJYU7HTrgFoR5LXCqMqVgzTMAtZ7STMoEHYfZAenABkUtKJYHZv",
  "key40": "3HQGjzMS18FYU9KXNTjZPF8AdQ8jN1gdQQXYy2syCG2DM3V3DHDzhakf2fNUCWnVd8QPYLJVhSdecrVmsvxhQtyB",
  "key41": "2gCnJ14aMFY9kfwZH8pnFyhX1JsQTBP97ZoV7P61jJmpCfAzNGrZ31uEMrMveaLXo1qrb9hNiT1EfP27foaQEgoN",
  "key42": "3qmNteHJai7a1wrzrJgBtyrcvkxzGkPQqtBSg3TcBAwyoSp4in5XjAUFBKMth3CsD3ec6LhpH77vR3HyLaKxt9ZP",
  "key43": "3MT2g5eDmvQcwDA3XecjhK3JhPKpgGwjt3m4qQee7fLtjJeZv7TWEQU7GAx1sHmvJ8Mn4zt23qmczbGe9cuk6him",
  "key44": "2nEeMi7Cz3Yi2uVzmNyH5dyUQPbierYfbHtVUv79BJ9vNj9iudksEANJjE5bfy9QXQV5trGNfjMUK8eHhZ7gJHRg",
  "key45": "2PJmTejxDf5D1y97GZtMJ7iTZicJjFtCxwGZVHqNwVJ3bRmqAJtLyEQMDh3eczDL1AthR6KXpUYt5ZySktAbnajH",
  "key46": "3RGpKFcQgbupD5gGTv93nSdfLipVuPBBFK9Ypanjm9nQKuRMJXMgbobFxApUk6sgRsnLP3iC4VWk1EjnzHNpxaKq",
  "key47": "5vE5osXydCBmM4RzrbpJ4iRtENnjvsCoyFWn1LSHHvQzMNot4dt5uruHMgVS5YNHkYaDCcb2t78eHvpAZJwXFgg8"
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
