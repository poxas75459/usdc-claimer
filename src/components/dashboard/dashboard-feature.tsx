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
    "66R8MNXeP69NrgAvMeQk3xGMpmCSgEYJsp4XKxzVT7dpDKxQAj8VMBXWrbCNVN31eN8mQMyfHAEcEZtcikLYqa2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JkYGdFgsh3WmWgn9WKscoXTa2HrLJgmwkhXB4LLJ4uvRuF6QWhsmyuGmc5hUPMRDryQtBePJmnv6dPw55dQYn33",
  "key1": "4kF8XxzKLqAvAmjG2FNcoLnPzC15suKujyjRyDiktxeerBLPx3ZoEgHCuCgdFnTkHZWBqCKqkKoaSABvpR4Ju4CT",
  "key2": "3NdMMARSXK262TtmU1mpysCFt1udo664gJttKURfLj6XnDiuBQRBXz6y6ZEHdEXug5HdxSXPq9Gq4rDG38qiMZEC",
  "key3": "BSXawJBEsdu5W1fGjnEemJbzEiLzZQucZvDK8btNAnXKJa8m3ogqZZ8tyuiqEqss5wJio6TCrHESvJ7iKZ6fUZJ",
  "key4": "2gYRNm2UyUPyb8iq3ujHp7iN1rr31oJutzFentmTUcLWkXbTj52S2ifdUzrxvFStgVN1AFxjHGzK97rSKsjN8ydF",
  "key5": "2DevGWa5dX59zxSCXz4XQiGn31t6Nd7ccN1iLYTnC5cR6qaUtfVUNmKWvE2zPbSSctboeTkyQKYZjZtCpECYFqxJ",
  "key6": "CAvfWryYPGsM1dwXMNmCThTvAzeDtEK2ScvNFYRiM76wAwiuDAUNBBAQJifgW5AT2sd4ekgyRUo7CKEropNZE3C",
  "key7": "5SFwV2BTzXTUTeY7oRZZrZyyoedHzB7kPai2TfVzpTKp61tTpSAdmZ4Prhf6PTSzu9n2kBAwhaVduaxkQfhEkfw5",
  "key8": "4TGCC9nbgWrfiibxTQy5aTJwhYSXmEv3WwXGQiLE6fQjbmyPExuDUk19pRd2MYXFXC2jfwHzWxZzUK5iTfQT8Eti",
  "key9": "YS89Y9i3zaZs56rQKHsqfZphLCZF5Gf5FZ1VcEGT4kivcRz1vXT3tSkX5GkRB2i8wXrBHCoS6q9mHzKaouUcr6F",
  "key10": "3eqgz9YvdnnjPPr5u5GUBq2TyyoeXqQp3kmz4KhccErxd5rxk7Rw6bWpaAaJjyyoynHx5Gh6czcc5LUCuGt2sKFH",
  "key11": "AgzeEYpoahX5NAhDbcY4pWyiPbiw1bpXkFCKze2UXYXVaEYmDHgCcQhqFPyGMSDipDvXm13xXcf8N1e3F2dUHEK",
  "key12": "2679VQVx5MVsnGSX6XgYN5rB1UGRyJBjeJYCjr7x2yThME8668KkDqfYfLUe42aAc7H5ZDaf5FtUbbi7uApBhPFp",
  "key13": "3c4zP8CQpjzuun1R3RyASinWXQFSmd69pgECrSmYMzBNFZNbW3z4UsKaUMQcQMH1ShDuHqcLQSYXF8sfUMHGeocb",
  "key14": "2rtjmnWfxdJaono65U8Ub2DBHDhXjndadguaSVVpRjk54UdScRQhQEDQFPBJCvU72jfd4cpohgkk9FZS7Z31Bc7H",
  "key15": "2XkaNctHwcJoFgkAUfw7ttYGwZetqiYZ6THDjHfobH9vV9V8HikNYoJdHdJFw7w2ZuQYeheAhNpLJMfcSc9yaqQs",
  "key16": "4qRmKNrAEhURhjwUkFfPtSSczJKWxc2uEVXBgmvzsADzqFep7zr5FgqUqwquEybSTK3Vis1xTnkALD6FHC5AJNBw",
  "key17": "3wVYpXgtiaBMMDA47Joak6uiQA2wm8uA5QmDzmmL7hCTqmR5LTKbFnp6K9z1dZ3ABpAUNu6royhP2fQo9oAi78hw",
  "key18": "3xWpNS9Zko7tfZu2yiRBqM4wUcxqGgeReSPrf3zCvfwrQaa7FJHg97ugW96gHYwNjNBr7v2tUzfWZAbUi2F59P77",
  "key19": "5NS95WUmBLCXaV3bHhD8YePHJuTpFCiaQTX7iY5KSFuAdJ36u7e9vriUZcJDKGJNvNMbWeHVH1jBDtkL7qsRSyAE",
  "key20": "2TQurXi73kfPcjVokhAB9WMog9SKiwFU5nYFETXB9Y1q3YSbdAB9Jpf57ZunDw9iqApmJvvmm1Jt6NmJnJ4XZVMR",
  "key21": "4nyFeekmbxphR9msod2g8T6HceRxbMV4QexVeSGGzDpN9ZW36PqsJbisj72MLS6qFNn35QVNoTfthju6CNRAEQWT",
  "key22": "61ESP2SdubcxJS3ukyTnAR7EYEdvTVwVvCD8NzM3ZPdwZGhkiBxaAeLG1rDWAY2PQB77UaUQ5vApet2JXgTHcHso",
  "key23": "4o1LrmfGf7oSpmGUEzdDfAVEaR4fFECZKzEZ1o4v55BSGEoufKwCG2TFsakobCGTLu6h2VMdX7GeWivwFUuZtdGN",
  "key24": "2UUeg1cykdhnQoCD2mt8UaXGQHtLoPmz4NZq7WgrD154dXqaWbt24fRsdABgCcJeuS2Pgb9pdT53Vmoz5enJyzWQ",
  "key25": "p4LMv37LB9BB6k6E78Po1nktZZwTQyK8T7NGgNrtUVa3QUvP5X6WYpPTaGma8EyUoo4bwnRkZqwGronNAKQZ5Fq",
  "key26": "54eyApQYiiwGaBg7ejJHRnKYAGVjp6Y1rbwVFA1YGwTXuG7n3Xek19uWsRiJvQWay1jWUGoyMhBWKMcQzwJejQz7",
  "key27": "3iXrbHAYKxus4rPbyGRajkLPdmDSPvNE6AXLxZ1Gq5YvregaYqz6dnsBUcyVm3KrSJQKpSb8Zh9n6Kcfb58gastq",
  "key28": "4TLa5AwwfDX87UDCVYXekCWkRJdD69TcSGtqjYuGFWxMZRLixG9esXm7rhoBWAYe2KGiPhvBP4NUEgkRJ2WwqMEk",
  "key29": "2tp7GbuybNZKqVj4NCeoZne4UAvPXX8azYgSDZpc9wrfZbk8GQFHgq8nxMHecYVeomBwTYMqJjjuvaHgbhHfx889",
  "key30": "3oyaWrbenv17XAoQRsRBGJYjkb9rTsK15f6udbxRcMCA7d5bVaYiYZZFebuDtw3WzFWn8isSegKSiU67LShVBxmP",
  "key31": "Q1ysnPkWXUNy2ys1BgyXtNfEcbTJa1aSV5omf9JFPrsuMDQrRNxXzLAxeykjVEySzg2oWtuFxgrQjAEQ7voXVTc",
  "key32": "5f6NNgDnQXjPuWbSjqCpLPTz7ojojy7NrdvXJMGx3JjkLMEb2utFNkxPLuCD3wGgy9mTnUe4mhARizRDHvQ4Yoxj",
  "key33": "4uqBTyeW7LHiq1zMDwvXEqeAsHzkF1SCwKcynmX6BH16WGWXbBUw2f1v1dY6mWvxCXxSCdxoZjcZGnmnnQyyDJPy",
  "key34": "3ZffRzCX7wsuewffv3eDkXHDkqvFmSL25q5FEKAfRfvkbypHFaSiSzPQqTcwiTqyvy4wYNGbZ6gUyRGenbveZo1z",
  "key35": "bkfHy5o5ZNsf8dDZ2b91Y8nQvoUGbH4FcMwtKCJDw3AxakDZeXBvuQe7X2GEA91sbp2FmFHJiRXyudJfHH2rkpw",
  "key36": "YgD1Xm4oQLyDV8Pb2iJ1truBtsKK28TdVee2PLi2MQNMHuhJ1QKcFY2LDowcaA2YkwqCuwBWmyP2L7wFuvMcvGu",
  "key37": "3s7Sic238JaLjEdKJH4cvn5H7X8HBbxMnx1ubwAB18yEFbKQAXyEQcxhXvmDkzGsu2X17qJTKEABtsvoodcSxoJV",
  "key38": "3PVdqwp6L3uxpU3MaWLBXnM31PCjQwc9eMgAVfBchEufs84vo1H1yiE94FGYTQr4fYZhcz6jMAn16avDLU9n7Mbq",
  "key39": "4Xz1BXkTzheun4wCycRrGfaeWWdJ8SQfnx3Dho5g9p74jRuMkwMFiVtMwg5duAA2GwL5thwVsNphfFAnV9V3RQ9P",
  "key40": "9JCiFZNRGyLT6y2QjdzcViCKYgLK4dpf462ErQpRyKm36NanFtZTUqx8gjk7BtZSfRsp9dtDzb6R86fp668dWiK",
  "key41": "3uVWD4Fg1UADV2oUYXwkAY1eNw4ppTtHqw2fRJoiN6U64JWADeAgyXTYfFSPdgDE6wJw5HNYEyKy1nfq1nD7Q1zw",
  "key42": "4ADfA36sMmnTbDmk6G2sCheUBhzTTipdyTGak3Y9qF8SCQxy9GuKcEHDPrXBtuUGUTj4jmNTyjDFteDRC5TRPHSH",
  "key43": "23ysySuL5wXk5rqLc5as74YNacS7MtQMKHYSzPM8NZCVCDKn2rAwsrmWKMSiiov8qBUXcFNyZHCUBSkJcXPHaFSf",
  "key44": "2p554MMxRQyTWVBbsR3jVyZS3LkcftkHQpLaVut4tGN3sZjfKnLC1JhvGRZjaHtRX3dbJWvcPQ4xaC42KvAPZLP6",
  "key45": "5XB7LzoBiY61HVfBzb3jpcvsPuzjGywbFiH9tr2mmqTdjEZPsJAmWXUjrdPBRaxjKpmwjjCPtY7T3mb5rgFzVRTf",
  "key46": "4NSzyS2mtFR4L3ZMwXQgrwjd281Gv7bXxPYdcGhzPNExaufot7UAYJU1oeqyvB8CnBvxKFowx5KtLS3pqak5Yw33",
  "key47": "5A8TyA9a15eqYdbP75Ka2DQNmHdNvc5w2ZhMXvBV52CGNJXp3YGfN89KvniGMX5NKz7ADLykFagv5QuKNgAW7MCA"
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
