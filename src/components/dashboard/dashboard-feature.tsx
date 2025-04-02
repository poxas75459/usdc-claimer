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
    "5iFEmKMbt7nmbeHnCHnNR84GobWDPd385eVyYtPQzRfz6ayx7Xo6b87gE6Wx4aFtVekhUCL6EwHnSaA5ZUviYHKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6CKoqeTMpxd2xVTTSjrLGVEpRgPVYA1yiGawoFDkhWGWZ3HTpTGVTWs718rqwDgjjUgMhKnNYJ6mijneEkEHaWj",
  "key1": "bYNw6v35wgB9oLafHkK3fyxkH4jvh98R3CsAMJhDEzkyqwqBLe3WSB5viWcf9Q5emisPxNpu3tRxscu7C6LDrcM",
  "key2": "4M79URjLGZJh8HbGDMJqPuzE9RdfHGbS2kiP1UnRMXWuysCGg9T4RSdVYJZp3aYUqYdBA3GdWjtdf3netSzL3Xze",
  "key3": "5fovTrcHodWAfkgBMJfsugzfdNzLvfgj27exw4Bocgg77hPxGgAnxAjFKzwZC1i3p1t1mA1NAFSHHntJwmQ9PCdr",
  "key4": "3gij6Lw4mcSTcEsoZDuraG2RFi85r9VsCJw7x5rJoBX1YFbyi7cKwBPTaMBhLZnkX8HPuq98ypurDgZY2RT9Jj5q",
  "key5": "5teuH3MubLTUUHjKmgSdANGcMpeaVVRu9mv5DYFb3JHW3PEuEAbzTeoRAwCpWdoK9K4aSv5cqtFhdmY8jv3FsXpB",
  "key6": "55yDQW2LZq8dBJPw5dGMVeJhKWEGYU8Scw5TiUAayERiirtdZZWnrKrZPvyVaLHPJcorGLKnxipDq4icz8EJaQjK",
  "key7": "5m61KCUjV7sg28Yxsjku6JEx5Nd1rimfpn8MZWPnhEGRnNP3Gnr4oSm3SPudrYMe38NxKZ1uSCXeJN8E23VFGesx",
  "key8": "54s6szz5Hvmm8PAHabCiLZs3Ew91iaGM88f1iX93jearwmBqMNHbybDRz9gbuf5SEgw3PzU7axRDJTtic1wgFzA1",
  "key9": "22qwd5uVDNvHWy9jK75CzbEZAYA1wsaWCpBCdB2iA5PwDm3JJQUzEZrT6EmzeZdN3nncVpR8anDmAA389WwBBYuv",
  "key10": "2vqwNHxYSJ6TnFaWHuW8BvfjY5pWnSTjx4L8Xtq7gMkvBkfRkAcAzwGtT2F2YRkduymrvWgGzSRXE1vC9bREowda",
  "key11": "5yNdeYUt2KeDCvHXn8Vjus2UERGZPec4gbuTRMKw1keFLavBvQqc5EEsL7fvNrwueVcB1jCLQP9fXQPPoy2PT6cK",
  "key12": "WTLPiANSf2F6QhVkSyCfpuYSvsWZEhFvXimbsLDWUdksUPT77yVwxChAiNWX7e2wYAHrW29Gz8kYrND7uYEXDtW",
  "key13": "54jb2JWaJxAH5z7net1uT9bgYAKr7yPiC6KnyoRWZDDR1Kmg57mYfJfQ6WRwGSGroQbyHFkAaQeSE8AYsebToUAG",
  "key14": "52vPvcmrB83PKibS6kRzCBcbNxtzRUzAqZArF7MwnKHcjaaYdSrPLd1syvNdZiCRftiGeeqDf5ER6iopfkL7xgaJ",
  "key15": "2TnvTpo975b43h8ooEKcuVcxvGFeqyPt5nT6JFsPQ5joyfZwuQuGF9XTGbwieqJeMWQbgZMQBmfL76jLLtuBbscB",
  "key16": "yebQie2FndrSEPpF5TY9T8vXVDsS2UneNmmno7hRhwpUh1r8sht5yoA9oujTEKfXSe9xL7UB5PtEn2n4z6qo7cY",
  "key17": "BdoicwZhW3FZ75E3Nt4EsrHNiAzfhNwyiuHrLr8H5KwLGy4smNPvSn3rNQ5Mf1fJcKLZCbmtbmxhC6X8Kc1bTRL",
  "key18": "2guDwGtoiSs6xSurcN8EirybU8eFTmHqS1UF6nRewZAWmbZJXmYu86equT1sQAKYF9TyRRiFKPeF9PRMyctkb3SP",
  "key19": "53qS5C1tggdNzvyToxXWb3aFQ7NqxNCE96gQudJ5Un9Tz2FsbQeaKS2YgJpbk1aoutkmepY7mFNnund5CrMHhGiF",
  "key20": "38VEsQBKSAFVZZqR3XosU381TVBFdAJedNXMGACxJNsVmLvU4Za8vcruSwzF9kNmeEehpCUfBA719kDuzKhMAPtf",
  "key21": "5neDhENZt1oqBsnA51v1y3pNv53yCn9ixwx7FTE4rDdc8RPX59sMUkBbSBCRv61fNBhjap84cw4iyfef1mMiZ7fA",
  "key22": "5vUEkZJ8Hj433TJyC3egxTkmLBeK22uztfwsYKTEZ8P5aEAborjUaexTBHtMNhhzv8Lmia4y9WZc13YwJxCyfX2o",
  "key23": "4xf51nVVJAkVxs21CJhr5EHJGbvCVt9Q9KzcWjMQTYTBN2Dw7YqLJTmTsLKr6abjEE9cZP2X8HeppfHzAfsjmoJE",
  "key24": "4PGRQsR7LwK33AhhwJqS2ud21Tiapy274JPdnbbEwrW9FAMWDWnVuX4yuwNggxFzLrsFWv2wE4rAwzp45mQteNJB",
  "key25": "66ArjZVCWd6jA5ENF24x5kkzCyvjpRdQ7qqNWCGTxbChr147x11xs1mJ9nExx5uYmr5zR4VNzz6SkwUXDXEYSvFZ",
  "key26": "41rzfHEi8ydEfxi4KcUorMFMeriDzXgGfH8BAQydAhvi1o2NaMd5t2ZpVaVz9MHJSgqu7Mq5ccAoFaCay4GCqJoW",
  "key27": "53fehbK1bEt1CvkygFhb8h4VBpaR75jZc4nmCaE2e6m7t9XToYdSXXLH5c4wBUeLcH1bHXKXMGo2CPW8mxBux7Rh",
  "key28": "4va9YSXyVBhYArVFJXw5MKEYw91no2Y4GSa6AnPXCPYLoqiTdW9cS4dKNW7nwv3wwf3UvPHVKnngwVBAw2AcFAnc",
  "key29": "34SVvvr4dVi9D4evRpixtPH5Xk7sEzUh7GAS2JTV3FRCLDaSptRT7tECsoeAydKrpd6pHeFw4uGYEz9BwJWMKx8n",
  "key30": "5jmr1ByKHtRu6yaFcaUYgcj7ngydi53ZyaGX5w9zp5dJhkHcRiphNJt5S4876cQzC1TN7mZaLCwY2A84awGSJ9fJ",
  "key31": "xHPkhyi7YXBb1K3Vytv6HjRkD5Kjj4jLCNtJx6dFGbxg7m6v8xgFus292nFpKMpqGdbDZS6FMQ635AaRLmtPgro",
  "key32": "5wYMvfP8JcJFjmYGPejxv2zi3x2o5c379JQnWLVUTFU1kXVz6msZyNYDJbTarYzJrMruC32HGwf16PbbxsDB79hd",
  "key33": "2dxZLeYxKkXfqjUcHNUStPPGkFZzrMNsnzZUjbWmf8L2sNeBPCdh6TjytkKkAD28PHsV4C8G5FD88LpRp6Qe7z55",
  "key34": "4QcNQdRr8WaHuVoLfeWC9uzQteMd9yVpreLQxUN2r4eHLnpooJFrejktm3mRa3LrJfZgWeuQAyERU47DTsb14yLr",
  "key35": "3aEv1gEavJDBC88Xwn3N314DYpLnJaKBuxZpHCbbXvQzXQqvp8xGGPk5zi3KjHFmLEzgCKRJW3ddpLPmvtEC6HPi",
  "key36": "MX4e8hUs8gadJLqAPZPeydH2XjpjrKKjG2qGHc3F6LjauMFrFQHF3sdBN9KVpfobymZXVaStm3tsFw4KSkrAAN8",
  "key37": "5AxFavF4fXe8gqccUyNND9sqcz52NAASvPqXmy6tV7J4tszKNm14oXNGiwNPhDKicuALuJZz3nWZF1gNJC1HAfbE",
  "key38": "ThiS4uYG9TyxtfnDFP5hKcWpDfPYs55eAG6RmuQSqNaQh6XZmi6u6jQbCaXTogT4ReYqZcK97ocauVYbbgxpBch",
  "key39": "3heDPwC1xEKALk5bWhwwHifASLXzjTHpikWEo43sU2Kqit7VShih4AkmmLsNhAYmKmoBEEr18kdWuSPGpow57ovE",
  "key40": "3zvUHaS6NVx1HoMP1jnw7CkH83AiNJyQEkqPyreCscHtrxPdTzJc5N3shNBoC7qoM4ku6qVBzBt1yyzKFycRU4PQ",
  "key41": "41Ce9fNLTNfAjxbYBQ9VkoLW1AzFv7yT47osGmxtFdxMjEAxqrQNSp95kPRtpx6M7DYC6jMkBV76ykw5QYiqPy6w"
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
