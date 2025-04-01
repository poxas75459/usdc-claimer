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
    "5gFng4ReBqDV53XUv7haytb6EpkCzTAqZJF815Js3psqpbmt1kSUdCNQhErtjRTSwVrH5cxV1Wu8abzSrMZhd8fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LuH9WKT6YW41se6DF6w5nkVRJKhcXJ9X7njAkLt1UJ1ZYkc2i7peJ28GbEqUDAz2MBkW86b9NsF3mSL1iUgtXt5",
  "key1": "4VXUHnEFyMUkENuoxBEBMTpjs5xDdp2rzeVCH2wDVesXJn9zN9PZ3ZfYs6vn6LnDoW1ZUUaRmy4SFzj6qa2FxqaG",
  "key2": "3Y25ZU8bRHGVUC83pTG5a9bRUhMndVemHfzdmPdbCuj3pFkdc4ZhkXMrDwgzbNbWMC1EVZ65ejMRhMNNJoCb3JYx",
  "key3": "28Yue6B67px2UrQta4Cob7Mwfd4LgmQZaVkdC14CNtiRmHxr9oqEFhCXrxi91qoSyB63zkTo8tncmz9b9Wa4P6Lq",
  "key4": "b74nCwPirMVehrqXMTRZ2L4CPua37L8td6kHJuRoTEANJRud8MdkP5DVgJCWFMTPAqewLTYuDPshsXQJ1bRTrph",
  "key5": "3JCxRzNZPsB5z6VY6GwRYGvk7XuA1YQbE9T8eRcRjSRd3s9CzAgH8Boivci5rW7dRX45JM3o9bjznnYb1x1ka9zN",
  "key6": "2qcFZP5AdCLaMHqy7sTzu5vsSkGRNEJ2AvtJFu7GA3R3rHerjk8VKNAw6YLAPLRUP2xXUtzUjAiLgEBJf6NFhjZX",
  "key7": "2yPE4KHwuC9NqFWbjPersLdoArvUHKRHcuzXg7PZXMPfwuNL6byp8uTvnYfAaQ8pdn1eFz436rzSGk7wcmibkP9T",
  "key8": "48L8Qqaa6k6xHse3qRe3N8ZNLx5xe2xZxgWfFdWTrApKXRkTkfLWdkmANDntA1ektb5xnkx3WzAsqknX8eWEF8hy",
  "key9": "2EdMNW7jdG6KxKyPGBNSCGZYsyBkgj6TFMi1PtRxZzuwdtVwFkfA3f1wAnQxA1J1dM4Fmu37vCbCuEoEDm5A7FvH",
  "key10": "4ue2Rpkk9CqExEvujXDND6H3GRBswMHqzmvEr9rE35Fhc8touVuPYfGPnBD5UQ5bKV9AcS1b599xqy27mrNWqLB",
  "key11": "3DZrJ6qcKYeTe8UsT4XZ6bCwiYQkHwSc2ngZRMnVoqmH7BAjRzgC9WbbqYyDHiAQrFE5TugxBQYwM1tBX1s13PFY",
  "key12": "5dQ1CB8JWgZpkqMGXML2RChYpgmenfr8tF9hLCXmncRFuYvVPUsAunypLeQQq9HiVZYZqbfkvCLUciXXeysiDHE3",
  "key13": "5AyHDBo5aKiA32CP6mFvUGVw8NwBUz3XX29HFWxLqEP6gw2HgKqGNHNZo1Z22YnmyWRz42eGLVCYpndrBzQLZDFh",
  "key14": "3pBXbFhUyHBJCJZDs1GJ4escyy3sW7hvW7tpSSRzfCtQXd43SuG3c1gpzEwdborGQsyC1Kd7wqZWEXPrqYaL37CH",
  "key15": "3pZvyNHpvrU8YGP18RyEbJaEkFFv4yK5HHCYzpNbpkvjSkxTCcw4M5XmE7FtdTz4mappoZJPxR9XCh7VQ2BFc2ni",
  "key16": "3djNiYkpyz3CdGf5ktWWpyxSqfBEmH4LUBHUNFYpzr6W5KAfbpf7RQN5xMK5UCbZRhPdECjTjz73X6u3b5qSkXvf",
  "key17": "3Mnn11c16L9UkzYmzJj4cEUdbAkXtPqxQxNxvjbJSs8iJxPvU7n1pJUHARGJrbY4GvJjy8Kgv6bDn71YftUm59fW",
  "key18": "3cZMtzm5Y5KLVYuWFctmk881E8YdGum7WQyxKFStgcw4TWyWjqWVkiAvmQfvbfaQvPch9Cdukgjnam2QjJoJFXas",
  "key19": "4hYUY9JYJePMva3Sh5w322LcyMW5orfpG8gTibg6zYm6XZdTkaG3CEAYgsD2DjJ4u2y7b3YZXvLFWgxmFBbEAQtN",
  "key20": "21ye7p4z5XQdSu3eVtfu1LHfCEVK5LL98FqMNparweJutSRDFjxWRV5fSH3nTxmE8RssooqTVgAoxP6JNqr2Ay4G",
  "key21": "5MiuMwcYTD9AKe2ErKBzmLtqMKXvpgWVDnTNSMWR1mecTU3o54yw7mYcRpaaSV65bxLsV6R1eSvhbmyj9oJmixB6",
  "key22": "2BedEtRmk8TVJ1aKATyTnYfywP7Zzjd962AQqcbQCxDYaLTiBa8AJ5PaYQTSSjicWDD3ibQ4WhWRBuHs9VrAk8Kq",
  "key23": "5NQQCX8qAi3uktgRJxfVdeERpp74Rbx2nGaiQZjfoTsSDwKmLia4xF8dAe8EC1HFRPhRCKVJiNSbSShHDXRt4HRv",
  "key24": "5BBBmE9dnTJP738PM4tbPEF8s4qhZApGEpJETYF22eNKwDxaGbrie12ydAFP89kptk914pJY4rcZDSPLz3QYzems",
  "key25": "2RNMyihJBYAmzkvu88BDWrUTRUEdEHeyeb4aRaTVVmFx2KxRGpKh7DD2iGZmfgpJEk2n3KmuCmnzqWHmcT6BYcHd",
  "key26": "2dTZjxFsZhvuNuvxvepu2FeDz2eLgLhoX3WdcR8WwkPvwNbS2yd4UTvVgvJj9o1zujdny4mpvQpXqscmCjMMcEaS",
  "key27": "4Myc1tJKngCuz1vbcpkS1JUCWJjjRYEvvZghiZjeMAy3959NpSDAhywfWbLXq1jJh8wYZpqWSribV1Kb54yBdJhd",
  "key28": "5gP9g1na6SeQ8EabhKvrijystxngzfomnhyxrv5hJNuNPywUWYSJv3HeUSpHjZK3NTC6qaKaYiCfyk1hFLopfPnE",
  "key29": "3C3VeuQYxuP22PN6hgrzUf3VUctRR5kxyje6rc2zT18SR3GgPqVpd9UyXeBM5cdZzGHB1LiaAHeBN6DYCyw8Lew8",
  "key30": "5Dky7mCuJNyrf3cXj3QeVubPSgEeDBnFLHBSfvJtPWZ7Tt3WVNdhLru9MeZkhfb2KX3ZP8o6jxb29RMreHjps2Yo",
  "key31": "wueHUja7FDmyaYS23WP3a2nnmkigCrQGey1WkKNwiEvKrnKNuzxiADELWfT5KBui8vX6KTEAhLi1AD1fM9qiJcP",
  "key32": "S5x4osFFmZ2YgFMgYgRvtGxVGkUa2wj5bpAfPHcoEBG2nq3pZTzWutfAF2uBouU54rtM5BVhqVFkg6bYuEFXkbF",
  "key33": "5nrDGSxYyi5mHBwubSGCak66PJc3ob7dshDQ8EoUpg7Dw13u5SuQFmHeEgGGqfZVDaCC8P92b83SeDyGabMA7vnR",
  "key34": "3KPqiWkd1nuqguE87nb2dwD2aHGDYNGwwxxbq8kNyfGV5ECU318YRC5jrvJYvC9uW63iEjtY4HuPxtGn2YnLTn1A",
  "key35": "48gQHNrNrt4pgtqzedjAjcwkffLuRovKjQPbzY7zxXS5X2JN5woucVt7L9zojtxxkzA7LecxyGJL21ttCihLyTg2",
  "key36": "2BD4EHvPf1S6i9XpK8Ecmrp5SsdWytiK6CtKhbAk3kYcuPgnjMAsmSjJwoaTo1vYFgWe8ks3dhCcAG9bYbJTD5VJ",
  "key37": "2eExfAjSrGdaFvzmsaSssoUsieaJo7GHGpVg8XYqLEjCW5zSDjZNVkFBRNhZFHnBSiU5wRwyCAPmqwuXBe9X24zP",
  "key38": "3C7qLnAjf6TJqxVpashyD9q4f8Y6249sthLtK2TamQftNY6tHCHMf2jzXGZiwQDZn7QikjheETg9Ujvhxf6PJYwY",
  "key39": "31ywx6WJaVi7xizZeJhzXPMWEiZ6CFBw8yhXkVRiKBvmAZVCFs6JiwXoLiqqSDsDcqimj3FtK1Xdz7vDiW8o2PC9",
  "key40": "42zBpQFsNoRiYaHdsLtDkUrYagWZCnrVneBRKRSWumjxupT9qZaXJZMzNw5fQAZpGweDnNBDw1pZctrxrexKaPzk",
  "key41": "5rJ75YDNUmRz6sDJxZWDDsDYFYQ983LXfLFtmktNJtigJqZeBS8bteJNJfdc9idQP62dZWaDt7eyRfAJG1rrFA5z",
  "key42": "oHcDAi1eX3fseCUT2zNAVEN4rfN7uHUZG3MjU8ZnSTYyhXcioHBX61KEh7capTWqdmRrxSBEHUqV9rx2A5ofAA3"
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
