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
    "k8kV1cEbtwbHKHYq42ntuG8CVWJmvDBDcid92ZhrWLh1D8MdjmYhKmk9E8hKQcEbTBbbwsjg8fSVNgtTQgvQ68N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hz2ctfpnzhd93heG4rkC7uyh3xCtxNLY5SgArVQmnCpsGWmHzVpP2J6Rwe7nT6aMQ14rK3dze8TZHTP4x6Sfcch",
  "key1": "42KCQvnRKYa3Ha3E3aKpt2EWvnTfUPV51bmX4ueJUG4nWAotE9dBwQBfRfMhTuxsWnY1DR1dmv5i1qMtz5Y2whtu",
  "key2": "3Ekmp4cXr33HV1iWHrEx5gyac7Qij4SoZVc7ETJ8JbgFQy2ofSW8RfVuDdNLFxgZv4G31Fjh2JcTjetzQcpU849b",
  "key3": "5ArcV3T5fZKVu2Us5N5jPAydA7Uij1LtTuXtsHFyH1duBVyMzjTySznfEEvQGB9bKwZKea3AoR4x8A1jh1gPrEDQ",
  "key4": "5AXPuTUoVyK2mHZLN2XiiNQRLtzGRLdtU2WhPQtAs8dVyZnkKSPa5tKUvWcXzSMCtEkGZT4uTFAWNRfN3k6H2HXg",
  "key5": "3eAJJS7C1dqrAMEMVYVoMEbjmKTZyDT8YrWzKvJZESXrt8NCnVbExnrAwVzYiywjrc56yjKjAQYgtAUBS9Asp45f",
  "key6": "5wEvg6q2mo3ocTAosgq1Y1gTfcFwurzEG93oEE8CXozrR2AbJd6B6ZSijBBJeRSssJMDGMutDyYhMdJF6hnyHbSE",
  "key7": "59JkUuFmq6WxEzYJk7rC2VFefmwJ2gKK7c7kkU4Y2wRkhgyR1ABMgz8ndWbDT2GVd5peeW1NPnYTSEzkjrYmjE2E",
  "key8": "5XpuL5WKh4CsWyKHehV23CEtY1htBuKWLshCah52oLL7gxYFPqNX4VA62EiCDgS9Z9ppFstH6YfKKFhvtnPVeXxy",
  "key9": "3E3jyLyZeTErZeN3uuLRA7svqs2oFcwFjyWmV66F5MbfX3m2S15EYWrBVPiwsLGXE3YSjaQQjRrU8ZydfdeM2CxE",
  "key10": "sHqKBHbRPRNCjmZXhfj8eWCL8tR2tfSu1zcDFju8xT3UgAzFb5a51UyVVk4ZSUKBhb8qV3A6rCjAYMEjyignLTt",
  "key11": "cAnK6mp7ts4vFjYseVHrrnJnieBZbFG6MU3tNEhGYhJHMz7LF3qwr9faDffd7ARtDb5Ez4scJRZpXc8PFTmKASX",
  "key12": "UizFdHmMZuWmw2m2GM7hWy1ryUdBxf2oY49EhHArDegxMqJDADMjqTyytRvZxw3gwxTXTjTNb1ocofCyT4aVqg1",
  "key13": "P2rrWqbRwTQDifs2K9rTyC91Rq1dGMuwEC5iiKDusrQYYiEWATs7oh9ymKBoroh1FmmJYkz4PdcRwDYeVdKcTkq",
  "key14": "2Wskdnowd63b6pJP3LFzuXkeJQtkNeoon3WXLstufsewwGcykFVw8dCPNSYX3qtrykWCJr6wEy7iFLfsaWHpLQhm",
  "key15": "4abArzbC1V3vcpBRxATTYWU5LfFrymSkAnm2sZDM4kYgK6uF44QLnA7EKjD5kVGc7xyP3WyCZdbVsnZEmiwWSaok",
  "key16": "3g6VUnySDroMc5XnxnjFKmQNbXUQsiBBju9cVgq5ehbJ7WpKJScv3yVehmXWJQhgzqdSRndZSJ5sjH77AugGyJL6",
  "key17": "428TbGn5KarggPjJMiNUDzQc3ycSf42xt1Bd1LyffxVVaYKNX3VEXhzNBvg4Jnr2uwsxzmSSFxy12esCMp9Sn9dF",
  "key18": "2hjkkBhNoXhYAvM5vcQwwqh3JWxF5Kq2r7rvUfxpNx1YKdFDuc79E9rURu94wQTFUwPo1xAKh5cPT6GucpSKC6hX",
  "key19": "3gnaqQGR9iaFYMmFpG1KYh6KdoqMqGLR2baDV2vjq3wQCuYDp3r4emT2uNBzyxaJZqKDAQXHGnc7sBwdEzfbgrK2",
  "key20": "5jGFsaNAq96y85PgvXqbCK9NAoFTcUpaUF8mKUn53mwVZPYEZvg1bHxELbji75TPD3xbejgPb8KRuzorPY1Fp8F",
  "key21": "2bTXyA51GSvxiLS4K68d3jrbiARXaYwyBfEiTfpMxqs53NWJKcceSrYKrhc1MnsTc1ogVHu9VM7KLS1hKmEPCY33",
  "key22": "3sZfmd3PQ1aKTghNDyDQ8twayNqRpFC1Fe9cmYdTzaMJQZfJFSXtXeHscZoHydNfLEZ6biw5BEWB2YAYkRFqvHjc",
  "key23": "5wahtiTfB9gStD7PMqfzHJVPhjwJjBKoLiNhPHFtGk2GqxWNjgkxhJomyNA6QoXmGWFGV6WCGYo9QpguDE3e1pVL",
  "key24": "3X3LUctArt5BoYVoYfbBLGCNUgjYRvnxUhNMf2cwAS5oW3w3upm5wL2KHFASWCF2Xe4R72d3B6iGEHX4gFGqoL43",
  "key25": "4Av6xT9GA2NAz5ZLYEzzGhYiUGU1wU3qFpTJGjXXa6imbM9RJvTpujJNgAzTwx1mEuYv4v2DA9FEeu2V1vzu9fAE",
  "key26": "3NoVdStFbvb1m2Qz9xRcSrPEp5CKfEJpcLek9TZPH5ybDwoTZKDgFaUmuDMwQGMzgCZNEtVLyrQ4D9ocjk4bK6XK",
  "key27": "2DDyWn4mcvA3qBzq2tZx2vtfRHb5SFxMRjpWqs11cVvrSZ22adeGMHHX83D8AbmNnajRSWwqx8HhhY4kYanHD8zW",
  "key28": "3n8HWSfe3QQWXQB6PcHKjFkqxeskLzYPbRPS8DGszRYY3My5Fm5f4sneqbHd3YcX7jpm8AwczLxJwycxedVWqTY8",
  "key29": "2PVkiPSzQKyMtG16iF74xwxzDqBv3CYLrgwQh65yFFHdkW5QF36yvewYW6HbXVxtKLyNmvBUN2y4s1eZDtj2d68E",
  "key30": "4ZdVAnLw2x26ctASzba7hN7j3i2WV7AhprmxwiytYAhNrP6fpeQAB14HS8sZH254emggsrd7mpJPEnNushKxLt2f",
  "key31": "nyii8WRBDN3L7BYrT1JLMwCfWPx4Wu5afaasnZe8TmoXdzB8p69RcjW7Wdm5MJ6tFkmEf3HP4m1CRnLYPUG2Zix",
  "key32": "J7FMSBL2DhW6oWRpjZ1RyStdJ9KJ1TihE7Zd8BJPbahLqs7stUFB1NRspKUeQ2Cm5w4waVFvD3jZ7c66dfaKSjV",
  "key33": "5etZh4EX73yLJ7DnsxZ4XyKsiDhddnaqENCkBByKKvzaUizipqjTDw5jBaGvBz7GBTTtX6yHth6sEwP4QReWkeDQ",
  "key34": "SuJV5ZNFSuYwtLXxPzHQJuDQqPVzsbQYqKK9BJBhN4pHzykJXJQamKX5ThREQstKoEgsjQXT1a1Wko5LVJ1p8Ab",
  "key35": "3fGiwDdfFvUD7H8AWsm4Zg6qKSFFYDNZTdqpF573EzbXxjtWG7L3GdUdcC1hjSeGLJKPwApKbgvvNG5nHHmYwMoJ",
  "key36": "4f9BWdfqGLgu6GckuwuKCrK7oRZ9NdJ8CxBH9u9abs9NyRPqJ1ej7reFdzMcbG73yZ3kexP2rCW3FJAh6xJ5GJdz",
  "key37": "2t3Z9LTN7v6EeEL6BMzuj1peGyRWrfeLtuAXoTa52BwFDUqBoTrWN5qYmcE1mNSr8bJ5rLip3mMvTzYwVFivNA3t",
  "key38": "dHfdB2AaHthS3w1Cf5gwSTMoU4TceGhhe4KJoAhhV359N8nKTpUojyaiCS55bxv9pvQ2WrUyuPWz3D17uFNnKYn",
  "key39": "5SjWma5U5vf7jewtBWgL71AGdA6C8tyK4ERZVNcrgcjiBWeBRrygzfJTKoytDfrj8WzdYAE4xPFYUCp1k6F9MqiP",
  "key40": "5cPhHjAxqE7o5fp629Kg9L6rDFJZRpwkZgUBozQCqqa8ZhdEcco4pg6dMYbzr7wqws7XJteZxkiL2e7gfKGjSFS1",
  "key41": "4DHjeqKgc2VWW12gUgL7Le35j322yVURxdUUYiGqMpkQJaa6YwVGbRrq4jtGXuWq4kUyDcUSWTsfggE5yPQzvf6r",
  "key42": "zLE5svT1Gr9qo5NdEDq8nJKbuUcmoTnZnxvJXArEutSH41zgDtxJYvA3apUkdBgkcnXVPD7ufgLyytxxddKAvVC",
  "key43": "4Sfgr648ngP2gyeHWUqBzKWsNoBrvcngM2ciwXXiD7V2JTnuTWyJvtfaHTtxba74hvnkXESJgynME6A7x4fZvcdr",
  "key44": "62mWssB4es4recJqxq9q7nQsEDkKd1og3K8JFNA1GNE9UiqyZGFYyUkVNgpQR8Vxz4hniK931RCndAfB3pUduoGq"
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
