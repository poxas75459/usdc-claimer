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
    "5HxFSanAiBBgZ4ry2JpUDsQX19L7RZEu4gdTCPPjbY8eH46tGrEKMSxD1Kd2sspWssntiWdT4sQZb95srH6oFK55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZBYG9daPyE4L9MF7NyfaDFVNGGhmV8R6GJFcXuFy8HfvsB6vAKjhLkynysyVxH3p4SqsFxBW3eHQU6NBA5oFNvA",
  "key1": "58ziKkn53ouKHPiNkGTXbaQjB2dGXvofK89yTZsQvLt58nWHJtYwh4xDBXKxPLP5ucZnpLUZkEfZKeZDU5PccqYw",
  "key2": "2hvWfasXPWjb219VEVTQM5zceqRXUV1J8aZmaqTWDT7vHKSR4JxJXT6yPBcRfhiBfUrpaPrN8Tn3bQAAHZMWtzNK",
  "key3": "36Ebn1vHNLHJ6NNczrCWro67WPS4qYGhjPj1kHXqLr4wLR3U55S59V4AH6rznkPWMJREQQe2QTjg9kaBcNvsRUKv",
  "key4": "5EsjLmiqWDwBfKGb8G1Wav5cLH4ynoVzjDuaNCsgzmsgjouZsdXxT1gmDnfsvfp2LRW4T6ThSYSESLDGS6mNoM52",
  "key5": "3eLyh1iekKpXGZMUhcqs8pguU1VFDfZ2azKqy2ngv899nHAysUCy6eY8LXfq8EdyFduyC53J8sUTFPfzYCfNprcH",
  "key6": "5tsuWUwGMPkMfKQ5huXNYWftZ86kmvJ9X71PCqkQJS7wCyqmpjCz3uTJHqw1gmQivmkQ3uSbZxp13jX2pkJAQmVS",
  "key7": "4UBGzK3wYp6QULb8ECmNoSy7Yw7tqq3Vo7khjLMYYCJ7iq8PJf9vYtCmf8ZrJDgKzR79xySwXPQYgUqmhZQpHVki",
  "key8": "4b3g2CjHPWrPEnBHyqA1sdcssPV2TSQ86FX2M9xfW5y6DsH3xqWMbTsNKpMLQcDv7267Xh2D6geZD1epji3Z2oCR",
  "key9": "2rfLunTyck9vJt326G9akhStVuN59BD6vKPKWqzcn8Tis3dS1eYe3ZR5NxVUFYh3F4mZwJazQpsykr9z1H1kGBpv",
  "key10": "5rNvqh9EMPAPT79Udm8NeaFw8qRWEqqc6C5GvFVRghRvQJJaFwNbNMR8mdZwXKjFxXCgkzZEmPtgatN96kjFDivu",
  "key11": "NDkrre6AHAqK1CS2NRjQBgV5356m4Bsc5PjxDJ5yxUPzRNwRhpMdNfujbuN2kcKwG2SNiD79MfinaJpR95Uz4cr",
  "key12": "5ZceVVnqWdfBxWiR2SVifbzxKHa7dHMymaMvwU1NMcb6hK89umLjhNcpaYeoTRdeoYJH4scrrBFXZmdnrWTJnXvU",
  "key13": "39KQUK16u1X8uq67ZoZCX2fjxXdCKuQiTvRztSoYg13LFgFAk8QX9oXmDCyxTFJZkoKNPsZvi2uy92ZEeDWaTD58",
  "key14": "vUjy4LPn6D2f6mcW6vqNzg6CjPummyt7Ud96iFLGaaFVMPww93k8CaZtrwdq4eyuvquBTaLjWJjrMHUZfdP2VaR",
  "key15": "33Mohr186JxEdir6nhLz5YZ5aFBTQdAibcWxwkyPAWG3Qnm6pw58cLtjxafqNSaFeePvmSGWA5JAGrq4rENXvapa",
  "key16": "nsWicb9Drwyq86jjCCBvu7Bj7znxkARfYbc8u8jmqYGiLsvQjF2YqDR4sRCXzq4ky1qQmobKS7MFA5kJYZYNphD",
  "key17": "2DLUyHQiPUWVDAXKAqjvy5TnkBtLvyUmayYkuThABQXBnZkvK8LkK2sXg3wUMvJtBUi9EMKx4y6LciiU6wDG4ucD",
  "key18": "5qoPRp9DecoE4wVA3NPoiJgqPSKDaoudstFApMR4gdfAvhHjzuX7TwypeabG2xFFayUvLdvfnaT5uJ5CaJ1tFmZB",
  "key19": "55qsDTGT3epYj4yXEfCeYaXp2xfm7erHC7iD9sxwiocxJeb713bcEC8vU3WaAjEAp7boPr1QU2GMWhTjH7EbGnuN",
  "key20": "3aqsRQv7G3yRSAF9qwr6FNrZ8X2P4fhg1Q8dMKEQRU4ftbALBvqHj2HGG18XK1Wx8gQ5oNHEvA5ogTYX8juWrmdj",
  "key21": "3bTf5s6PdmCUhfY8djs9PeUsSWEGhkN3b31NBfV2wSMihmB1SyQLKgCvtRcPjgi23awTQegNcWHvsRZ6682eV4SK",
  "key22": "3H1t9xDpGe3BbxrBqRXeJBLUxA4ANtLcBhjyJx9X6Hkx4Vt8cMjBTi5Dm7LxJYmqDGjbAevhqrKayn67B6ZjN7CL",
  "key23": "dezDYgjm9f8Liy5k4oELqG3KTpzT5Um5ErhssUqYBETv21ALgwSd3da2DcMomKPcu4FNk5BgpfJRMGindGtaDqN",
  "key24": "63Ua9dcy3sntJs9BngHfRpX2jJSYVWt87GEHk5d1M2gtSyCmrdcJz38ygTtEZ9e3AdXy91U8C3P9BscPNrR6erJX",
  "key25": "barEwfW9MC2NXiikcNgBtUn1VyCaWeBcmVTSQ6viu5G8tdMy4vho4PgiGcoPYiWqiNt8gcgL9cPgWEfwyFRxo74",
  "key26": "2FnKV4o5shRPFhdSQ3F3PpgoBpFHQGGbgVqDVP8LrJj7nRZiTZZ4TiiJLVoJMwSN2eWVsv9rc8dYAPzw4pTL2Mzf",
  "key27": "48Ce8Ff6gwfkLrEnpjoenaFX34EfGBrYanixHMntFSmYjDBU1spXAKT9EJrFFdBtfR6W5CKTjNaBaGqvnR7ab8L",
  "key28": "5qVtHMUGf4sFQ34V4iTGgoMx5kWqq1eAyordER9YXeZisTjNxmY1qtdmYa2pum7yYuEpcj9s9aAorq1iRSg4K87e",
  "key29": "2TWKw4an7aDd2To5mxwVKt4jPdWuAoWttXSiddAUm1s7tN8AT7gRm5r34LMN4nsCBQS2yYTBNf5yYGyZtiLvCzsL",
  "key30": "5VXZb7Xoq6XffqD7RRNshAz82BgGQZQgGzDtXSjgvZn8JRP1HoMLX1ioBg1smBjZxzFLFq5t9SmoV2gFvAHd9ffq",
  "key31": "4NyaBqkgf9xg2n4EtViGByzkkDSUgFU4DfkEUoJ1N1eNvpoVRdfzqAcLnvt6xsn4sqpXZQNy3CccGWMjCXGybkna",
  "key32": "2gsC22msTH8EFszHX93K648B3aLvd3sC8cPEm6oVNYiKZ76t9GfSRKa9N1kEXQ1j4qVWKcRnQpyq9RM8nbnAmq5q",
  "key33": "42mtwHLDxLfRMGL9hok6RbEDCLWqaKRJS8hNivhAkoSqrx8uZKEfFxHV2zpeLNrnsiSPMGhgSrLqtfY92f4B6pgb",
  "key34": "448qMdkWni7f6WLXCJPhFULJssYiarZ2Uy7z4wnNv1hoPkwtBVKy2gK2fjmELzbsperJtnu1FDbD3SYcYdqjM5tQ",
  "key35": "5J8W8sKLfKjiLMS5ehTnfZCHFkjQzsef2X9jxv5kHvpJuu6o6qVoUWvzFHVbXuH4hjLpFv7MF2wxjkQ8s31CKHnc",
  "key36": "4bcckSrf66xJvwoF29LifKbTTx3U5sFEUELN9U39USdnuDKri4dbK5YUNHsbuZvNd6T5VdptdAA2vYwVMFb7gnpj",
  "key37": "3U5GsB4cdS2E4yiowBkXhAG2zsTnjHWAEaStj3Eh716eyyWzpAWreDhFjnhm4pSHbCNrwUL5ZStUdEErjiKKRM3E",
  "key38": "43PpUsVjhbCbHpuMN3ikjr7CcMzo3xsjN2Bnn4AXmL2C1at3YNmU9gNP7nBkYJfRsnHm7H1jAD4jrpSrj3VBaRYw",
  "key39": "GYsei5h5aZ2LfABqyreE4WjW242Yk1A3j3JkBD4hCYdFGXpY3VXb86NwiBjGft15p7vEj9QTACFPQRj8uE26Dwg",
  "key40": "fSbPbZU33M8s9uMQRcymfU5fjdoKRANkLNghnSYjp6vPgj3JBsPfJdam4b4rBnHpLbhQMRwgkGHSsZWgVRcnSQU",
  "key41": "4RUWDCyiEhDmiNbqDsjL7Vg4pgbfkBherLfBhYqUbf5VnuMGefArBGMBBLQtxj2dGsLQu8jK3Vj3fex9S1Mcwcpx",
  "key42": "2VGZmigiybXQdNuniCeK2RVtt7UMq5AwLnEKkZ8camEhuRoewNF5HMmuh3wwLh1MUFK2ZcJZ6Fgv57SQKi8Snjxr",
  "key43": "3t57gNbmpoqE8RPkNSpMFFEaarRWo5BFG4oHi1WvafPWkPKffvsUv7hqhHzawhaGgkGC1pMeZmkVmyBoGbffcD6N",
  "key44": "5Bb2pYYutjghhbuACQUGVzyGMLapsmJ7DhLQQdxaHRyuTPdLz8GJB49eVB3VgFHUkLHosgg8L399UiybG1jFYKVk",
  "key45": "5tcstGUYmysnf457sUkNV8XSUwqqMicUuhwTxFuzL89GSZy2avfP7iY7AzcnvvKETUk6rtJpLQU3jnGHkGA592W6",
  "key46": "5ywU4tLSCJj5zAxkzbiMnx9mSiSAqpPLFHSHawd6YK6DoWziTSX89FsdWRiVPwLz3NGYjGdi1jvR694KSfXq1aYZ",
  "key47": "4Sv8Nw7LjvLNtaM4kaSB1zWdvHWsi7dEsrnJezhgKKrBieGgCJ1eN1crwTv8EsxA2ixRA6KbdTBhbVYdUnc82RN6",
  "key48": "2VieKZeYGW6nrdTpiqJS31P2ngUoFqD8mq8kLBNT8LHJWb9BQ92CRtQw7ZfjZ9FDKrR49YuL5sesyR4CtwGknNHP",
  "key49": "2275dNbnPoSAPamLeWGbQwhbQyqw6zP59Vk2DDcFW9sL2kJZswSwQepZCryrJtJhL8uecTkjxwLvCpr5cikJDjPs"
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
