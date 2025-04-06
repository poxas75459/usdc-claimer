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
    "5Q2vtzUfCeBGurb4j8gRDMAJyEQfcrkpdabR9sVhTvBvKY7GXJfRPjNnpUA6NzQ9PN5SiUdAEQkGDV19pLU8ciQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SBN1kBJFVagqQ9L26td9cD5GyDSg2zSV7pWMWxJ8fGhYXGk3MYpm2eukhFFM9obykTEoSHVqUP5FTLxLaAArwzh",
  "key1": "3a38hHbWNvNEX9ugMpdSG8trQEG65WWcUEktGW7F5VYJgxhx8BzpDsshZ3htArYA3yLj17TuN8CnZti7oziWf731",
  "key2": "59xZ1vLNUGZDxfbDwcoqSoRhpr6n69133pAyKMgJMvCwdcGPgYhAik255T43t5G9PdqesFEVunW1ssgyfd2ird41",
  "key3": "2fETfCNEwFT5CFhoXUkY686Sac3tkAWks55ePiKzKomm5aAxkZYcpKQnLMkkYibKgQTca9atxEPDfRGGtrsebom1",
  "key4": "2HeTvhGRLSXZmqQVm5TfQ2RatKqufbjmzVVMJ8NbS6mV9BiTZKs92RMagTtrX6xYMcYsyZsDWbffGtb2SdcmL4T9",
  "key5": "28dba4VamAJAhBqkmBVP4jca3YTAkvbbpgNmBC5xEYapjSQpjECGgUEQ5LeTGrKy9urufCm8ZaZxUihtQurXue2s",
  "key6": "66Fv21dsgiSZPGsxhibgFrVGkT5RWtuDdt63pDjB92DzM9h2Gk9ehkQoSH5rp4XpVxpu4uVaYwDsptjctqKiyJGE",
  "key7": "66KYMbZeJRdWE1jxcNog7icF6SaanoKZ4qu48CzqqLsPkgSSkpsh1mwmGxQ4KqcyYeWFDdaAZu8gYmD8wv7M16cN",
  "key8": "4QoTrniRpjYhZaHJC3iTbaozF4kSj2j3bapn5QkWtkjL3pDxmLMhYgNdqs124ETALRYEDD4WgZd46riCLrJkh3Un",
  "key9": "2pD7SZ7nBwNbCC6ZNWBipYPU1XU43XN8LxSnnsssBgt5ZgNZ61dUyAFdFrAtZ4yvoEGi6QdUjQ29pYhQ81sKxaL8",
  "key10": "2a8r9ftZGHR8AUzhMB9QgmkJLPEazzfPkVHpgnFxmS1mTzHCQpZF8uvGuoUz7YDD2z2xm8mff6HxRfBBSzTr8h1C",
  "key11": "51sj3Txkmfn2nhvKLjv7J6cngkUB8fu6WTzQLYMRRPtKWNXj7TUUSdpkpcNkmSN3tjk3tww6CkyVMsY55NPyEzkP",
  "key12": "3Aqov5pphRPCxUe6LQ9DiYAScpiSzjmgMTtdAy9DqWWCW7PKJJ3548iAYVhQXPhwKtiizTX32MJU2Ue8YTAePkPd",
  "key13": "3adciDSukmmYuucUa8L9meSUpDwwQXxPaDAH8GAjXAN4LLErJ3PkPX2UKdHDEN2rb5oiodCZx4nVQWr6HZfUUAYN",
  "key14": "3SQAqrTYuhXCw5NJPQPKiwQzdD47UcirsR3KppoZmeL2RmGMU8XtYyiCvzUdTh5aVPk3sYnK3dzQBrMGsm1zK73w",
  "key15": "4jWLanCbwwXLyNvFB1XpRr4RMLNMkPSwnocousAfUYEKFUfTuAG8eqrDYDTi1bKQnoncvjGcCLC3F8R5LBdDnRjL",
  "key16": "AmqVE7JerdNZWYr1qi2ZJQU4dJ3LU7KMC3S5k4hhE655LkMNZdhHMYqgJHjRWRLjudSSNAtahqZEgCYXXnUnUXs",
  "key17": "4cETus8LDpfiMwse3YGBW5H2xXBoPeBytwXgdnirjkjQsXht9g9UGdHVzPpD5fByZQczeURhZBxBKK8JxUWwSxL1",
  "key18": "4zfYzhxhtyQcRNvMhNsTxik2KhU3omVpBFxC3ETbqn1QMG5yvsQYw2tiXwtZrCgxBGHupLvNbajSht4XSpFZgzn9",
  "key19": "4FbiYxZ4cB67Uc9f1Xf36kXuyEdNreK6QdC6ZgCYP29QpTDoi3jyLceGdYnvqFL2Nxqq2FNgfhwvDphXA2hByR5v",
  "key20": "2QjwPHXPVNubigHSNp8vxsng5wM4RveRFTTzUEBULTS6gM6tUVro3WUXmLwxpjAX7Yer9YjzWcAwaeWwaHKcpfm5",
  "key21": "3p66JrVktPp1ovRzegnGs4HFKkd8EXmCpfVyhAJtc4gr37MKB1X9L2ENz7kkhdbcmPFKjuvxsKDURUK581sCTNDQ",
  "key22": "5cPGwfk3xKVT4G3tX8s72J7MwF7dESbadFKeABM2MDvAPzrGAH5m6SRB1wBjL6f764Nry92pzAqBSBGaBzvkrANV",
  "key23": "225fVmZmioDC6WgCLRhwQpyHjXkvPzkJttNB1fZnhKeiMvs1MYiTwyLyFW3WFNxwVcDT3BwxchJEZ8qGAFYbcLdy",
  "key24": "2YCzBRmQCbBZZUAA5tYmLtVWsKmP2bYUzfUxJ5g4q4S8v59gMTL59j8KnuG1uDi2HzWHZj1MeuUqFoaVzvWMmJ33",
  "key25": "4eWhMabEMyFJPNvGB2MM2TQPEkHEemwcynLaZJwgeYrGR82jgKtVaes8AUy8jsiFGtRwEp917Mvb4p1o1wJLYUSS",
  "key26": "cbUv617JRAUdgqDZZ2aw8XjgXjVh5Neoe1vkfyWEn6VbiSNBAJyEp2mZ4KkrppYMtRAX9DtSH3vFLmcv5zghYdM",
  "key27": "3Caxs2sAPWphCvo8mnAijDGDvvhYi8ngdwsWNHdLZGvta8Q4qtRRwv9v5EnMDGnbBJafiLTc4gdQ1gQDQXUJjp8h",
  "key28": "2pt1TTDCv9G9riiXtatvZFgz7WUL3nmgEiy3pq9VoPxauBEqNJBx2smjMGYCTtTkTGs5iQXw8H1MhzC7NnmCavGT",
  "key29": "2XWeucX8jVHFM4bnkednNomTVsD1G7Wef8rL7MeLw3XS1NfDfLVpeMArw3mCcMY81ndjPW4Ko9e8eWV6zeawXqWQ",
  "key30": "5WSm66UkRxXtCbEZXCYPesfCg74jQCdewdQginX7E7r8jLbxdtRB7z3BuNUmwP34ia9CGBNaCCQDrrMWgP7c1VDS",
  "key31": "5RH6FKXDihVezbQGTqDNoKbPNV5DUG1MCDg7de55mMcqZnaAtmUyqQ7UntdmwhFJtfUmX15wzARndU1cZCLjcNSV",
  "key32": "5cWBvsi9nM42mnQFrJ2peybeQpBstAZ3D5mQ7WxZZQ1r3x1eVw27FRCs4Lxdzz8p86D4SniRMmryEHy4hM9qQE2j",
  "key33": "3AvYyitTEnHn96ppuy6vL6BYKJdqjben7Q1iL84U73KQXdYwrrCquWc3Tt7JZR2zL2hVXEsWopVVif9d1tUN9Rp5",
  "key34": "4NN8gaKJtU9AnJUTtqhKBm1P3p13xJVz2eTfcDgmtLHoZxgRJX4RZRr99d36oiVyR51WS9Ay8HLZWuW7FjpyhpwT",
  "key35": "3vCJE2ueDyABK4jNxsJr4PiSj3iizgEoLzPEGgJe9f292fqbgzpFpmhyrWXXS3rk1bVGYQJWhVNTMP3Pc9xVWWKR",
  "key36": "23JXgaRfsxcUgxhUA6cwGu6VJFNfjtT4C2j6xCgvee1HtJcFGQfoFCb8a1n2hTgeSkZwcVrLu3tnsR2zUyAFfGfZ",
  "key37": "33BpwB32naaZxtdTSk9oDZ9TGdURNSRvjg9qWQiK91fKyq3XNa4nQhMXTUNJE8GBcX7jzAA26hSXFMNVXADVXdRX",
  "key38": "r61p3Ljp3QbEa3aEZrvvzkBBheJUBKmAcoC1YaaS3mvJ1UoBeUGdNPw3GBQw6npHDjja1Kaq14RRZoKxU8dfkPG",
  "key39": "hXuAnGxZ2RnLB9svrFt4BPxbNQMigorko6oeUmjDH48pFFERDWAFHnYV2u9XwAKpyHhA9swKPDxjVUUz7GCP91V",
  "key40": "5PVX8n1EZLowPSNvmSpicd2s1ERNnGcApTeSR2JBDTD1nvvaQNiHqeyuurEG15fQmuGpTJiEQeUrtfZMSpfdxzXU",
  "key41": "41yC9tBHR4MVPYfwLmsggxRqnGS6uamTniwgWUf76HnMxMhphz13oCPwwuKNrtJx88zpTgRHgD7T2W7dtVt9R38s",
  "key42": "2s1KMJH6BuUHGGcbv7M3rBqu5DJdxYduw4VTwWQG6nB43EznG1gmUXj7xaxXqhn5ok6X87MubQdK3PevK9ZqxJvy",
  "key43": "4h3j64vRJoMYmWTDqSkaNdHxrKKEQU4W7jwK5uiL3reXsKTwjcz4UkbfpKjtBfaX1hbk2EKamWQS7xNo4K6E6vaT",
  "key44": "kzWjVhKHZPsEiLjEgCrT81NALgN6JpPogSQdLd7PaW3U6N59LkpEthCPb5bGTiUXLBbBvyXsLPxsX6F67D32N9L",
  "key45": "tQTrE5HM5sUPTbAF6AkpqcaPrzNNW7RZBKFy8PXSpbdiNkdurhzLG5SJa7Bw85CA5i3Ho9KvcnenmdnDCZ9rN48"
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
