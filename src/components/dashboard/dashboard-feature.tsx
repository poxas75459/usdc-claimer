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
    "4prBH8Q8xYtfYn3S2vMJPxp6iBhLwVHEtZ5MuThhGUZPuS7VFd4Knfnrc8FfU9esFxWMUjcoyeC13p5omXasUvU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CSDF24thWASDDneJ3abxjj8pirGR7L98pNByo9mkvA6QCsdYW9qu5VkYoknxEXXcRM5WVUVKB5tLKuhYe3g5kAz",
  "key1": "3qUYJsjB8uomhPg4EPJQV8279Kw1E63hsMBG8yM46GmGSou3hzZe6WFJheAtH58Wb5nWAxS4DCcqsfPCrGQgm7nb",
  "key2": "3Mx4SyZ3KEATju8QWNCkzXNY6364WGA6tVTXMQoJ6kXBcHw6EqDs7v8qpsayLu8vsjftFTjdqh9ZTW86cV8hNXEF",
  "key3": "2XmHtiBgSw8fH81m4DNueMTbkfT1TNnaBUFuaVgvCQwmcohK7G1ap97DM1HK9esB1oKfFjUvjKmrZJjonC7wV6sc",
  "key4": "3DTMsWLbhGQkWEbnEbXB65DLj9KcBVrUnxieEkFmuJqyLXahxB8DKzZcFXxxFwsFvexdizcXEmYpD8GTey96JMxK",
  "key5": "4qkKMa6QCzn2Nw2PJ1duShgr3YVEVAanuj1Wt16of8f6jSeQGmVGfLiyAtqSTdmLZkKh84zLX3YZjbE7R2WtQ4gu",
  "key6": "42BADWB2UbVwxCYvfYYgdXTwfETezAP7CYJNPfinJ81fPCDpxHdLSPxXdjc2UCGTrvNf39SiVZiRB5ytNgRa2xuH",
  "key7": "22NyBtLTPf5kzmPBZxUDThDm8RZAJFPNMR9pmrnMDV8fKxZuQcDUJw9dAjTa1zNFkiC7je6QdaCyNacLpydTrc4U",
  "key8": "5Uov3GCyBTrxNtx6g5FSfH7VTYkc4so1kFwBQEbYsHgnj7x41cdtiskqHJindBo3hMqRwRZp42NWC7GjGLVWTMJ7",
  "key9": "3E5xT9BQVTPvUAeVVUZr96dPasTdPvwcK5oiQZi9hKhagA2TRp9AmwDqcNfhcDPan7mc9GDxrsMuRrBnLcvuUTpq",
  "key10": "PkmWKYKvuo1wHh9GkMxzXQk6EagXyLMSpypM5TKHA5NSCCvUV38BgBAn5c2mLh824dH19gnBC2LZEpWZXx47KDn",
  "key11": "vH48ssWEdJ79p1iei8kuXyCpvzjVcGN5cF7fFaXmqTHfaTSKYYkJotBn56BrdFXDn9a485XfFhGDDrTPpqDiJai",
  "key12": "3BGvEGvnsQooKNRREJW6KcLL3D6jb7XXBuXS7D9iaB5diuNSCD181rAaeF8mZn49CKxtZEaP45ptqgrF1nnAzYgp",
  "key13": "2v3wLLQYdh5DqaA92SyqyPqLNBLn8UFkR3exNX9cpJppWihEHym9iwz2dAx1SzpTi7kVkxx9fJh2v8oU794B7Utw",
  "key14": "5PPiNqw2tSxFokQbHX3yxFkxpkju7FWKawbwXQhpLujFnMaBkeEVnvYqpz5Z4YzEDgXh9Yy9pdp2pD6fupP7e2g1",
  "key15": "BgYLPXuvkFmBz9msX6SzoqkoKKbhDgXYLzLDMS3fsuJCN2zEQAaT6DRBv1UEaCLXUk7m9kv2h35HquqmRkJv7p4",
  "key16": "2qqpMusSPLeYR2zz8gCnyRrLTDxHgi9nWcvuszjQ9htLC2qVtYCYctgMy3tVigfhBrbzdiK39185aG8sCKYvVt9g",
  "key17": "3fLC4DVEqtn2oB9xnWwH5igwGRHVtmmr2VZHZ8ubC1FjY5LAK6HzSJrKJHxLzWdMWzdDtBcVHvqgoaYkBXbsbQoV",
  "key18": "b1n2p6NZgsXXcg5GwUutymctqcsFrggteHHLuVVdu8JoDUtJKNs89uVJzsHPkqauSTKHjY9iYXsVpswCAgCpM7B",
  "key19": "3RrBByw3vX8H9DPPtXqBdU1BrLrXbNLs2nMBUavZqFTop7jvGirxETqsvZ5vtSRiFXkUG2E56r5L7zQRz3PvonNk",
  "key20": "2hGKiXH5Hk7TL8hrDW6RTFMyUPqre4c9cd2dLnaUABw5Rzz8ZctJ3cLPczSu5ATwHrVZWnN9CoWr1L8cmKAJtk8R",
  "key21": "3T7FoM5shEAwbGWkNtsBhbRNaZ5aRZeRCGbV2fZbqd5qisuknbtJxzkftXcco1o7yX5frZ2SYMSZ6m4v9yzZkD6h",
  "key22": "5C7h9i6ki1LddpehW63nbjJ9viNdc2Xj5Aq6GaHNdXiiHz7UCGqf1HucEpiyT62YXRFZBDZ7wzVppasDNNNxWCsC",
  "key23": "3KwKQqEnL2iV6eMAPpkgUzSc7i96r3aemFPDnHdGQJh2cQVXRo3PC49UAXbAC41YUBUr1YEPp7TmVu9FGeizwmcX",
  "key24": "2xQZ56irngi5kMNsXXsgm3JcWxX1ZBnwqfJuRLBpDJCEUMjkpfHJ3TN2vBBXYJtEatiLjWJ9nabbzkwf4rbMzHn",
  "key25": "34sBPDNGYidrUWY8xuqBzPK3Z9KkbDo2wStVsWiu9b5LDn2zWNZ8iwbBQUMYDyFxXAEka4S991CdUyGpX8RMgRXt",
  "key26": "8t1mSTfqJcm2NWR76c6WSYWD4pEwD9wKTbFFFGeES4ssonjFbe4GSScUzSsBfATFwFw74AvNf5zyeRsbsQhFqtF",
  "key27": "bBg7bc7kXgkZjNJNb4VcpJaYekc88fMYPJ6J24fcEbH7ZuHSxwRHEkduJsBTpztaSK1fBR2kJdH4JaDzD6kzV7T",
  "key28": "3zjT8PcfkWDNkYX3m2enoUv8NdgMmDpd19faKcqRJ6Qu3oqa1yDwiQfkyZ9M6a3nBUa5ThoJ8ErcvN8dNSs2Ljak",
  "key29": "3C2KoLxLX8rz54CTP6aYBrzEASngq6Yjqs5bPstxSSjMKKVAQBdx8ds5EaHU21P7fL61WnKNaok2kkgFYdSNx8MR",
  "key30": "FZ8WDvVZGRzEtMZinhVAFs3GThYJUMRYaJgqTSsgZHShBBabJp1r6nSm25GPCeuHA3x1G4G94Ge64sY8H8ak1pJ",
  "key31": "5WVoQBH763CY7Qm2GiURqzV2rJCSDx8zS33qeYHwPByu5Kk6b3yvccbvQn65ZhD4jGk7Kyx3xbR7qNmpUFz8wCe3",
  "key32": "5gUV4kzAFRw65H8d7LekLPgQC4hQL2CwMJhKECekt3H79Cmg3qmJgyhFtyDng9S593f93JbMaMeCUZ7F7MoL9TuB",
  "key33": "4tPna2A7egRLqDD9vM7sBXeC2tjyN6HEm748BKNXsiQ6z4kvxaEpqfudoVVbty4cTawA69w268Q5HYKdN1NYKjoE",
  "key34": "4z5g6wRBkNxtFKXLnoRPvECEkXZPC9j2NbLgEZd1A8m8Y7VuhtRdCnBcVGg8bSKgFYYFCwnjB8U61B7aXKZ4k1Qs",
  "key35": "5Z1w9L6nnj7tKnnmziehgFXs7LauYq8TySgKs7oUTdePvHpuFdK2EzhhEyKMNpqgsK7MrVHnTbY4HWKxvvu2sKfw",
  "key36": "2GvdP2fivgpWqpAnfo8eZoFx9yw6VQPXzeFPSDt83mTjDDHm7gLj8jJnWReqwvnq4NH33ConNfYcdWjR5o6JokFq",
  "key37": "4WrUAdu7RbitAToF3G6Z1vMqQgWatUBpYweCsP8s7WnnmTwvmXUh3bykNAkaz68xmtUjDJxBrFEe9dYMQa3GLaQc",
  "key38": "35gh6Ani21tuTiupnTx6VVZUEiTHfuK9H6zhpTyiqn9VUsKz4b7WzETE3D8k74CRM2aP8r28QrXzjJB6jVy4aLfy",
  "key39": "9NWNUY8J6NWUXUTU7hQCFGRNgkgvH6j94qWJB1nrkeBfT1vEgfYQNrpsW5ciBxrYqCKQ1Ng2sLU3rf6QgfQPE5w",
  "key40": "5uSV3G4Vo1QnPynXidSXdottRK42vtuSjE6wxdARfKFkoMDDajXERsxbxEgMxNwJ1qn5ijyKzK4Bk2mWjhnUqwnC",
  "key41": "2X25mAS7CPag8J2qeGg9HQMvxtEw1xt1ufGGtstiGR21vqSaucSiKBndMbWViKtMkehdGpNg5oFdRnSQEbX6tWJP",
  "key42": "3MUKk9X6ajZdfsGRjFPREdfBuvUMiptmCGNVwLW8rwt5sqZ2ufMoDku2d4AZMDuTgitn6xNDiEwFXjrGPMqxVknq",
  "key43": "3xtsR2gaaTzcEPYYAHwD2GGbxf2YUMnR1Ng3Jq1NHA5UAqJwWLFahRVKFvH5LDdjq7HdPDWDrGXUyKQz2fTtVq2j",
  "key44": "dY89cQwFeXNHnxCmvHG4Vxok3QK6VqJ5gweKKrX6hxocRjb9m1x9C8JmN62JjGxJc4cpeAKdbnhviDZrFcgv66G",
  "key45": "44TDJhVbDtZyq1LtQxAQr1n5mvc6KhznUsAQK3T1czBQnLYa28Kk7ETpTACeG5oUmkJMPWawHnafgMaZeUGBxkgj",
  "key46": "51Hi8zS3XKgmkjqpUEweMwLQXzH6oyxPQDM72AgP7dThWYevbWPZ2GjJG3aKtpimkyQ9Jn2hEzVtY5o9yhMqSJSS",
  "key47": "5CmHUhvVdaZqGyvcVgzFekxQtd4ws4WzNU44huUKzBNHQhdJg6imYVUAroxqDbFx8NwKxdoAv3LFkvi8xoakjXv8",
  "key48": "64LGTVrELVb66UP6TcMHLeC9R5Josocj1Zd79FLYUYU4NkmCzLcZosUQ3wanerYDfNfjF5pefFtf1jYPnjyVQBoj",
  "key49": "2egvrfdm4b8adbmLh2WXJsm5EjKqqKP2UMSAFhsTAiif1SVj1iPwfbLChED4wzqcj55kZSk65yCK1xAqFuBoZXcv"
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
