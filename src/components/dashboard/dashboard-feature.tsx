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
    "3maWFipY2teXTviLi29K4qJicD1BspMKFtjgbNJVkyktK5GtZUCpktJh6tjsfLsYQAQ1r1BFNUxciP9wLCWn97pA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mEzHD2smR4SqMrih9bTqP9EWuydu8oqzxw15D9Zdv3ovUNoyHx6JVgBD5fHBp2uoxvbkk6ipr8JzCWe13jWsnQz",
  "key1": "TNNLs8vuP6bVk2W4KDXBiKkosubhKajZRaZ94NQiEA1URQM8HvKquxbpEevQB2btMaRTzSLYZFweLhSCY68ksTb",
  "key2": "nsEAsjSUYE6s5QJecUFr8yq4rnRhPKqCiDwSGmz6oG1Xq6zAReUuEe8BnkpPJzfKsT2NFSrYt128U3FLP2L1Rpv",
  "key3": "2vTKL4qyVmwkMzwb5wdBjDDUDD916PagqoWG3XXP8nqfYfanRU8tM98D9uL9XKnvyvQFwqFNWTCkoh61qfoC5TNg",
  "key4": "4jUWFFETbtYhot3fkM5fYXK7Kpoif4NTUmCBc7pw6yp5MzQ9n37Wv9yApcUy2M7V7MpJYYNpsVcuykpFYGhq6Rgu",
  "key5": "3LE1n6dRgWLdEjde23iTcxNxACqgHVFJAGmw4Rqj8ckSorBtMgaPJuHyMbUFp1vckXvwRibqfHMP59i2VbZUr8WG",
  "key6": "6qc36thgbJk3jQvBbqV7YQ4zotAR9B96pP8XkDWiFaQPRGy25P1g6nvM9u1Gq9caqtDZG2wYjDgnycZDEHpdBJo",
  "key7": "5mmBU1BMg37LWe28HHSzoTQTut22ELUYoNPRjjXToU9hm1mdg2KAc9RErbJ9xBbZHrArjxyYfYq5NNkfQnZsryCY",
  "key8": "JqrxSmbMPQTKY7v9XZrqNWJ6P75D1kYnvnMRYeSiXT5E1eedvPLA2naXdjo31L3XFskJ7ASH48pRZUJZ1j9G1Lw",
  "key9": "3TLKfvG1pd1r8qSN8hqei56RXa33e9kojWuUMogTN3yisLefjeYt1ZkNHwiYNHj7aKyP2PhobSXiTPEAhdNthSjJ",
  "key10": "2mVdankRXZJ44wdCZYVkj1Memyp6Te2kDo4Mn2FyARckTh4ubQ3t9dbb6Gquiqbz1WpmV34GyQRYHSJ7PhuHCpu9",
  "key11": "4VJGAiVjbPwhL7ZmxJRACZHo1iJi8SpevxvqoqC45wwqK5QR62qEb7a4YEUawXMEJp5CBkX49GRhH9HsYwkKgjwp",
  "key12": "3887Mh9CxzkX1o2KRVcCCmJUx1HEsEYmHQzL43AjAvQZhVdnybpDCXs8wYXo9yu58VfPLW2zbQayP2MrvyZQXyp8",
  "key13": "5ueLFGVnnqpjAoP7NCqV7ReJQe3dDtfRqkS3QZdsBseF29ijRVcFaoSwYGWL9Z8iuKfMxXC5ywHdXYAHxbDwHm8F",
  "key14": "2SeQdkrboDzcntLNnMxwqyysLCJzQczKRY2cbNkey4TXWy89UNzghnQvbqhY452bpKHTtefAmLEhDQjgtEp9WgGD",
  "key15": "3kGER5qHEEQCMWQueFWaZtLMi7yBvGgafNqdTh8ux3LCM34YejmA9TSxTYDvwN5f83bSPRgrcpcoNDQFULwwEyvv",
  "key16": "zoqxBPY93RE6Ld8DyfdKwshCoetisJiXYmbCMwNL2ekzs1vn1dvGufstaUHZjD1Jxnnmt2FSUkzvKSxmFzH3aSm",
  "key17": "626GdBCoijVW1zhRxrq3a7DK9NVHX9pVp3DwjZJdoH6Wnkzn7DmEyZStqMtumX4zbkYy6dLkJ4Z22kry7TAVp297",
  "key18": "4Yc8EWVg63huPiZAMbaVsRc62sF1muqAPg6yYenry9guY297rWJJdJ7hEqYY161TVeWG1m8h1eVKsqsD9p9Ug1i6",
  "key19": "5qo528mB28WgHdMXJho937DgGS4acek51iTKvxUBhKhHSBFhURR282SEP8ZLvZXgd5HpLQQTEoKBkAwFPzpmC2nV",
  "key20": "37UwpMyswBEzAdoWnMnUeZ5dsosKUL5MGaNXVf5SB7cAuBbsSCrsKPvWwBKSdTJtNcJ3PBjeAzUQPp6G3jqErcH1",
  "key21": "5VA4NwYKZYGcncmc2xDkvhJ791gMsPKXSGFcehyNZaZ5HQfwHqu1ZKpKXyXwvbWy2G15SExBsayZ9TVM4JSwqFCU",
  "key22": "45muBsrVfXKhUyF8xPpKV3JRoZx4YuUTEm2uJ1hs8p6qMSgn4BNUHJNEaMkdWjWRM7uzpae53X82Dgq8B7jvxUW",
  "key23": "2bZd3pmv2i8TzFNsdyK1sPCPULgqyG37odMFxncRWHmKpoNaTML7EaceDCPF1pWFndWGx8NwzVi4s3xhvUM7Thgt",
  "key24": "5vmesmAwiAVe3z4vJ9UG6MY8nvcidZQrpUDuiQEkrjRZvwAmvj8Gygt7i2K1EqdgajyiikdHBVW6gxQi1PyEMkMV",
  "key25": "3D8YJsdS7bqGSeQRvndwTQ8YRsaMBYSyNEuQ87ponhuBSZKhtQtvaMH2r57EZeP9DZCbnDNtmbKV7w2eVMFrTW76",
  "key26": "S39yv3FBobWGCL1KecG3secUJDKYV2qSwy8Qq7QxucPMu2iHDbzYKzJh4wYe8twKH7ac86HDfHZvHY23kueLbpt",
  "key27": "34wPrna4ftpU4SAjWVxTs5TEPgadPEYxdhTnCnJHWsRSfLQnApDzR2CBwKRk7KirKWUrmm2QNBWbLBikdzx7DxgW",
  "key28": "5bAvWxNVkLF42NpU5BXEffotgGWPNXv8YN33GTUKn89FwxSq8C7PCx8Vu37XbkA5tke28LaUhRkEDqEjQePVWvgS",
  "key29": "4gy8PkTsEitkqc6jPAWbHNjWWW3eaeLYt96DmpHbXDbG8RNLX7hgBz25s7u5QtbbVxEYA2WyFrtYzaJHqndJRp97",
  "key30": "3PNfNxLydHdXgKtzapoMWmrAMnyhPWpm7pcQGNjBvfJdQ7RqCQcSyPrk565SepV4XpShbynPvpoVFNAJgtdQmefx",
  "key31": "zNJjGjGqQ3Uj3kWC6QfTBAcuNKXJU6hjjB9QxANY3vfacNXnYYn3PAX63AskTS2Cc6jHgAPSS21arqZxaJucxVB",
  "key32": "47SgL7HPZCzDa5bnSw9W4QwyiPYbafRbfqTw14s11kQTtm4kT2sdBUuh9aGB6xbq5UUat6BMykt16Y8F2xzKsjjw",
  "key33": "5FeUFnEKLSuVMQF7JqwM7mSzvTyVT37fZKBdJvxKEWfJLNbfzgEKN9FL1Hs2kaX2tXvHGG6TDKJFkN2MonTjYtja",
  "key34": "4AY43KTAfz4wghQYT51qpZx9GsFPn1YCRgLWGmjX6ezCk7DFUnnRJg4gQ9aH9NrmLycem9VCa1NMcxg6mB3SZCLo",
  "key35": "2WjswGyoh6TeZwASBUZmmynPBLWy8bbt1T2eCrrXyZsvDtkDKmGdi22rRDJc8dGUNjBad4Wyhp89xZHDQXqDzr5P",
  "key36": "5rikdEafhpLD89gQCz6fcS6LAd8zfNeC5KpJEQHWqnFFcUgEprWiJX5mdFjsxWksmzdppv7AZibz5PVpS9wM4SsP",
  "key37": "LnkNvL5ZX1oiM3iZ6gu5FWfiGi2Nq8o1dtxLEmths3W71UdkXBcFRuowMMJMk4TyEnjksapWPfhKA8XjnFJvqLh"
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
