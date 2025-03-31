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
    "2g2UfkPoZkdW1rShZD2wTVss792XLLuY9yg5JK6jdjKBggrJSCJQNzfCCfAjJHjD1fWLeoED6DMJtpxUNJU2y4Jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55YMcNKyCVpzdrkXLzd3v9PoVqg8Rzx8J5BAeHM9KxaUFUV5PbokRaEKPwEP46kE9CtXMXyBtA89U2J6HFY3RmUK",
  "key1": "312vE8bpDaLnbDewuR5oU2k8v86vgggGkarg6TZoetacEq72Pd4gWVjunYNqccrMJLKhV8T9s8D7Dn8BUzFEtuBL",
  "key2": "3Sou95URkCjWsHXEVFd6jP38Nz8Gd6dnFShPt99brvCP7pzEqehCeyJ8EnmctSc21T55YKnr5jworihUJEq2c5Vw",
  "key3": "2BiF6rsj3h1VntgToVKsTPMJAZxXMEsKZfdAnKd427bzzzqsZBVdrW4vFMfCLssykWweppnAaW5gQ8F14jK4ogDb",
  "key4": "2RGjsQKFMj5G1XBjryt5i64zoUJfNp4KKiFd1EwFnQr7v6GHmPtBJP6MBEiSXZ8v9g6BUoNo44BqS1ADDdJ2hYRv",
  "key5": "2vT6eXKnpiTZBrNjmxmMvfkdoLmwCAm768ZBb2bJLJ3vwPjcGoUts363BPK88hFQdpR651dYqyUttZebp8wBJVjg",
  "key6": "2JxRi42CUgNq8ZqrBxUAjH5dSUZuTrexxv5BPYMo8J34Xw6TCtV2AgQUMD2YwQjWZxtGiyzGQKbrSMdqAwMWgaHp",
  "key7": "2EtP67evpcKtk5SSgzUyagVonwcwExLLSKGsryvqWAGwCAfSLXUo87e6wdRpKjiNm66GvsvA41iS5Fe5gNLPxAcZ",
  "key8": "5SGhwwXTtDSShrUuWX8DavrNfp9TSXMMtV14N9E8gs36pMrUn6p2rdT7c35YqCpMSLjRseCLSdj3TvHt36TBqasW",
  "key9": "gSCZYxYkYu5X14GPWDoKf7UEyQLmQcWvxhjTXSGft2BqEx4CvwBagQffxyngiH1VVFukWVaM6Fedpv3rSzh467F",
  "key10": "5xf9P4KRAjLEptzrZND1NySx5nNrHSxTEEhdab4P2sNF13B47VZ4dLrMHUYaXx6qkkdSo4iqCpdiGKK3tWWM7A5w",
  "key11": "3bEVY3wGJjj1ZrQz1i1Dry6dcp6qRih2rpzbwR3hK2xMPsgzN2PPrQ2fjATYchD1Uf7u81QvRnnwThZ9f9q2Smt",
  "key12": "2WfkGVHpjtD9jXwujwnN5ygZMeRdVB3tZX5rzMFmGH3sLGbPDpf7Q2Mt9WQKQbuaGtNX7D1FXxZmSXdE58J7y4mE",
  "key13": "345T6hCedR9MMYE5vtNwuTk9A9pvD7YUYTSW8hfhwKLcEjdPJeK2mPSt96fME2RqDCCV9HsEjADLm6N6ACzXGdYd",
  "key14": "53uifEUBwFg2awVrnPvXxNYqKctj1rR1Vdc62e2mFEpqghbQyrzHgqmQGpNSAPnzbh49SHgJ46i6vihEZ61PtFMf",
  "key15": "3B8qYGGwn45TVDurrhkTCYWvZqx4iJA7kcY8uJjQhQTygoE8SUCFRK5oiRbkbgt2G8bL93rmdBEJHykBTpYWzvs3",
  "key16": "5oU7amhjzWHC4oGTxTriCy8YaKe4Y7xtH8nP9uvQhiZdvANJoPKeweF2ijxjd6CgWdJ5r54MGpc2rdQEjJgPHMNH",
  "key17": "5j9CYnvZWE5VTmgTSyGtEBjF4ac2tPwg4Fkn259P45JWhzBjQwQYKGYkA5ABVQDWgPtJDRGXXW82z6jZJEfs494y",
  "key18": "4jJUUhyg24UvTxbao37XoQFysMojDK2Xvaav8YsjJeNNsc31si3G62bDvDyikpupJ9jX3n9mPjKVKrNLLwUvSThN",
  "key19": "4Kz64dc4Lc7hjCLY1B2YQa1PfjQ6VtX85yZSJdQVXVs3ET7mTnhhdMdNgvSMyNxiERJd1o9Y5zN7E8PnS1qGYVeP",
  "key20": "24usDNFLyjDG3KKMbvSKR3MXUxwkwGkKBgYZyGfNBBxEkKBdasm63Gxv6XtW6GpuzXosGnd9yiBWQXNGvAf1xqGD",
  "key21": "3QdgboZYuCLo88w4LxhvKAE8BSdJFKEPGLtzXwdCHXmzSPARA6cxKhRqgCNNrLtVXKLGyYbMrLNM8dg7acTNKrSf",
  "key22": "2wb7LjhMbdUJTt6KujzT2av19rnbT22qBSjnm3TzbywdZ3FyD5ang8MqNLT28NDesy3Uv4Esq9ZPESwXF4cCdp2w",
  "key23": "2dPmhUJSzPxxCgZeSzFmt1xb82nwtstozQQwynMvdg16pJiPrr1JBxpcNRHACgqMkuQM2e1nsxjhugAJLimDfyNX",
  "key24": "4JDCwQdmWGJvQu6urk2s2bsDiAmzKuYsc6MbChECLMGouJn142Y7G2XX969LyDpLDP6UooUbFGMVnRVcjBkjTcBD",
  "key25": "4DJNsyCKqyWiFP6LEayCUKNUrs6zhiH5zt9LGNgEYufSs2UdmLEAy6skbw9aLWJ9ETPFWACqhc67ZsvS3WhuiNbd",
  "key26": "1XXDoTigbeZWhHLaUQCsseKyigkvoi2Xk6R8EnA9Bj8wicRw3V1jcX38hakLbYCyQovnNKTEDA55R6cSHFQMyc1",
  "key27": "478WEPQjUNk1fr8NNDYwFcgawou3ELSGNSJm24ggbR8AiWFAfnGKgS2wfWuAzBPmnTmZf4PMQ8XEvK73t71cM5ru",
  "key28": "4duEmwKCU1phmTnLoV3oretBCeVUdbLsuFASwaAR6AyjYQ8ib2CCUQnzZ82Y8tgn9kLdXiBoa8ChGSvcKGum3pq3",
  "key29": "29jmkc4w9VJnLvVvXxDLdxjPMgADFXMsSZ5VnKQDECiE8VuGBHjqTkhq6sFFJrSrdgCtGbvCc2qRHFFYN3rtgMZv",
  "key30": "58BgojseihdMjhpWzaTf2iaUXNy9QbmxeP9Edd7FnqysyzLPkdQgaNbQTTVDKERmoj6RWrcPM4Sy8NHGLUTCMVEW"
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
