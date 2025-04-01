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
    "45svtbFVP1ED1fwF9pnXb7zsZFZWkYi2sKE6C5NPUEj9xSYSCKhwJg8NSfouzjNUJjamuz2Us5CbQVMb1bzPd1es"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59nbUEkkYn2E1q1rCTGN9LM9S6mJnEsxFkYWj3E8bvFPbHQjoPbYraMSmBuwBA4FXNuTQGS8xFwXQhL1dfxGgnrk",
  "key1": "25Younr4cZ8GxF1YevJpLckNJNJQLbsLF7d76Yt9gU9xAwYsWjN8RicjUusnrefP3Aeo7UwQkBGfZF36FYH7sbrK",
  "key2": "4BPdotb9oAsRVz65m4ZLh2LZaKps6hYM9UtU9KHzb6GXVvkuwXzUiCviReiTrHv6ND8ADENL5BETm8vqp4SHQAp9",
  "key3": "3xd7iANhfCeWfJ8WWc8eFDYaVtzKrkrNF23m2FkLzzSksxVgtjNB8LRpbUrdqrAKs7dV11FcWmE2tKPdT4memH4X",
  "key4": "2E5F9Qb5kmZZ2RicYU8SZzyXiJwUCiQWEXkGoCMheJXK8vNggTFcJFBAhVDaBBGatAyzniSwEkvE9uk88Zo5xVpn",
  "key5": "3ZV3fdJJEDFbwJxQ7eHghAmXPefwWUtWok7FhTXLFCYWNitd4bXeA2TDBELnQq1vDkGhk4Zy8aNvjLWUEEfNjrQG",
  "key6": "5fF1wSmgzv4cctXgCHowmsSpPLpJ29FqGXUX74Qa2XEdwK7rEsQHd7Xvv9Drmo95LEVwPbN9JnAUo42Sfjp4Vb1L",
  "key7": "e2FEkjBaBNFrYiV1xYNAV7byWQoqMM6HMRDpKvQUrXiovK5cuG89GAutED1uRbP5pr2e3FUDUchrpRUqJ2ZcoKM",
  "key8": "2gRCYKDqYgvXQ8reRdHNbNxYrAvsurcYbQddrvriUUVCbNUvqDLwyxhRKZMcQfXeqvsnxxnNSW3qktC71nfSAhHs",
  "key9": "5dJKpSLL42tmk8WobT2PtYnmmbRnjYGdZeGjpeKvwdYsqdBhUM1AsJCwwvEcML3sBTw8zTZkKBD3G53kTj8TDDo8",
  "key10": "3kQZcaVYRExwF8CG1bRxMrNenB6STpm84sJufN93GeVbX8LUyBU1S8gRP2bFzmPEMrLpiKChkoUgFQRawxCTKU99",
  "key11": "grhnU8C4aZTXd1px2QgaMXE5mHkbUdawXdjtDX2yqWQVnqbad5crM4z3AU1p2RAVzusLsqexSVJjmsF6KKXTzRm",
  "key12": "D3qtjkrK3Au685MCgfv7FGTjqwWuugcaztY63W3U1oGGzjHRcb1jf1trBXFXHRSMKTjnJgBt7TLiP1hfvx3Lq6N",
  "key13": "3PrvgyCAFXPKXLSMZHweNavBhuuoPw1uiVuseTDC86i37unv8NP2n7eyqVVSgHW9iNcKgjjw6ytyfPosU4Gk3gA5",
  "key14": "4Wgu9srcqubVwSXiGB2ynRTutwxZXSB94shfW5gLwBZW597qJDa9vo1WXkBeAt2HZvvB9wXNoxDU3VEA7XDp7B3p",
  "key15": "34fwCn2pArZSQc1asGL8xRxjHwmZ9ZtL9tKT2GqXrGWVBDZs86o4bpXtMknYQt72DCvYR4QE1E3YZfYEyARnaKEv",
  "key16": "2vcGCBSV5MhacfcNgJseURB5anQQ2zC6S3wnDZPnctDG3zvQL34Ey1MrX9kFyoCdxStj84wCDECybBS6MXgEAftT",
  "key17": "4KPyFnoDHthzFyMs9g8E8jBsrhcVw7afLgLz5RjugaTnCtxjuoyTG52UxGrgLTG2e2NYQdYt7LMd5yeMiPG8opEb",
  "key18": "WyvawM5JkiPfSwYKoqaUUT1Q5dV3gXYfJpS3KfSXrkReE3MYwSp7j93pgPsbHzC418oYor6iPaopx9ZrxEh9CuP",
  "key19": "3y3sdpgMvZrKJ9ZMMcZfiyuh3jf7xhXdc8NMam8L5ATN42sBRQ5ZzK6XuLvuyDLLAvAWBSJ7xQpJcpidvgdpz1y9",
  "key20": "4rdiNhGG5sZXmeSgzLM9TEm7vVzDEtKT8zMEKNADveRzMQqtvL4515a2MqHanJrnpQNGz9eSmnuFjZ3wTeJKvrT3",
  "key21": "2mnu14WQXzHE93sfPnwuWBaziBA5aa36o2E3ozXgPBuFwaQWV6ntcGhBwfYGoJ3bnEgMgKHriKuVa3BJDzTX5gqB",
  "key22": "2CRGTFdmWmFmiELXxyEGjpF6unETsMUUtvRTxYzrDki2WPJVvLokgkUiEwVRvDf6XNmsXLcnbEuUrsjDNoCpugKM",
  "key23": "4v8zteLbU1ALPkQLSj5BRbirf1R1Mk7wMqHnmwQyvPq3BTL3j9brgGMWNkZjVMq3VFaraU5FpzhCrN3ymLCpeKtx",
  "key24": "2RjEQX1Yk4rwbpYbb2CiNMD1QHcVX31vPFrHE7zv2K9o1f5ksU9SwEqMBy8ZfrkTrSuTEhMFxfHhZFqmLbufG71c",
  "key25": "2A5ctM3iYq1ZTx1DHVeR13cbESzSBY1yuvyPfRtq99x4h2tPAZKdWYr8cty7msFKLCGQHv9HVZDKAXaqH3FQcFmd",
  "key26": "4tAZkb4hTyQjso2Rr5H1LpwACVJoRCUY6oeDP3XYpVKh34EsTYQA2YcGm58A8bxU1iKuuiu8Xu4eBLitYpZvSGss",
  "key27": "4uTC2XFWVTSizD6Z1bErJVPToBuRwS1TYQbsvUj2Murqma1jR8ULra69GFd11ebFrNcHNB7D8VJH6hvNkVSqiKsb",
  "key28": "5gV8dM9r8axTxT5qvEoz1cxN6B7cGxp6xd5UpPNcBye6VFxphHhgQuqoK1v7btSj91bBQvwa1gGUzhy4476WdBL1",
  "key29": "2soY3mpYuCpiyFpR2j6Nx7eb1eu5j7XBnwK2u6exCVzvCMY1xehdfSLkKVcMrVuSPR9TQZN31zyWJL4cpv4pnNxR",
  "key30": "678p5qTemSDzxLvcjzEEdPuUrdfiBJ753xte8TuDHEetHbzBykARaxk2L9YBNo2b2qiTLREFgomCCwz7V9T8HkJ5",
  "key31": "45PZE151szZqd2g8oYY3stooS1Bz4R23Z3Y5tmB3s7AP3id93LqwiiWxo1tPBaGJXLaXzxup7uTaVF7dJN3Tb8PN",
  "key32": "FpzG9gmxMjELzf6MbgJ18cy6dbATAxmbeLhVLxhvB3LBZPK2VxsiYJJdLFjUteNkm5TdqQfJKpoxrg5huaz5tUE",
  "key33": "GjedWopxgsbpB74CYNmUVxSn5mnHYB42UaZ91Ddor8nvx6W7XwtpM4tAckXnqmfmjXwtcDN6NYEgKC2a3CBNdLQ",
  "key34": "RHT5MgHe3C9F7xPdko5Ccxi2ZQ7CLAYUt1KGoTZm9fig8HfKbcR3c2tA7B4zUVaFXhjuNeRXWvjNpvGWxansJEN",
  "key35": "3C4Y8pQKt31KgbfEJq9cA5aCufvJnjC74U2NKWe8qshrTwnovVuebs1B7xwtPps62wxuryMqxbUXMjWYHEh3hPyq",
  "key36": "56zEzvhCXJrd3rRMQStkA6wEB9x3VwjTj9XomBr48kzAoxyBzEpDt67HdN9PdwSKnv3CPtFV9w8UDtnv1jgA1zYC",
  "key37": "23CkDHdUUvZja31EQ1oxidnbkiWwDnDpfwJZgPEndiwmtT7GcbXxdZJHXDgbtnu7ph2EctZKrA2nwEazBa4uk2nC",
  "key38": "3B1tZUwFupCfhNoxrYpUDKY3PCDHS4DokLbkvKSKA9qmVbk8JkYvnURg2947rzQNwgSR2hLKavARaHReunuXdSep",
  "key39": "2cjM71SqgixirUaXBeCskMo64MRFAnjbpey39BUkT45vdY2buCEkxrrvAZzfwUWCEyioZcQcKT6xeqjsQP8jphqA",
  "key40": "26Q5PdY3EnEJ3FQPp3RQwWWvFtXUSD7oATUx9ef9BnsbRy7iPxV3Jq4Ds1Q1HEnqXyva76v34nq6rPQZHkzzWeSf",
  "key41": "4fD6s99ZuPGkTCbRnW8ehSWrveSzUoLZYPRbLax1zRSEPFGHcQVC9L7yUdZx8ZeyHGk4FospzNNvUyvUnE3hVwXV",
  "key42": "SGXSC1YDf8EK9x1VUTz7u4uJJFBjwndWpx93mP7UEuwyGgYkirCKY1g31mXjUGwQMZaq2YMTuAVpP8NjNqVMGwZ",
  "key43": "58W8zn4CE7sk9zoCXY1NnTzQb4DAGJNwZUgZYuGWPvcxXG4jVs6cifk1Mu1vmNQvdhVvjqnEGQ5tZYG9RVbDsBXw",
  "key44": "5L4azdWVXDnHdTzViqzCTuJchfviBusto4Zjan58YptMSGwXwXSfzLcEhQDgPaZcxBwkXb3N9qU3RYmPKmpX4fTS"
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
