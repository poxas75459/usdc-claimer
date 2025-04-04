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
    "KSgpVvowAymmdqim2o8zS93CtHex6ps1iTdoa9kEcVkaigW42dQbQShATMxLbaLwYnagwJ2qycByVtk7jb6DucE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LuD1Xz23ftrQzG2PVepauvx336f8siyAByAJ3464yD83kRyYVeEwh5NTj3B9LfjgaeqaCktEWk7bb2JhwZMeNXB",
  "key1": "4WfmfiVuifbSWYQajV9iU98cimUtf6LWfnLWgRu5wxqfiKFjY9tYhhJDQCE693QgvtYnkfnnEpLL75JsKLxtYEN6",
  "key2": "4c3KxhkEJ7MqTtTbV65kEADMYVEJFtM7tWvAjDfYE1UCvYVYJdYvSWoSPStzD9VUpbs4P89bfuuQrZn3BGrygkot",
  "key3": "2mrjHzwjtaTo1e2zfrc3Pf19eCGDwFrzJGRvPtTk1Kepd6DY49177Wi9xtQpyNBrsK99qXFvLW6ukKtpDiNyoNGi",
  "key4": "5bmBbwKzPFgrz57CVJAA4aDZYNBQbu6iXxDsVKpTEBHDiW1zP4yxhmvcN5W5h7fyKoVzY6SytCp9UJ3FTPNEak4c",
  "key5": "4Zg6vJsRn5ieUxKgq3TadVEhziXgEowNDZY6mTP2ZVSeTU95mgKhrQsG8BGsATz1pDCGxxNUhyAy5Q6pDnvmv5eu",
  "key6": "4petwYAZPSJLCExUAWNVSB4SixSrSFf69i8LKXLWXTfVcZ3rsDTRS5rn2aLMo9YFWLEKhFoCHtxUpgewcrmnLWrz",
  "key7": "5hA9u2V1uEAvsv9VBVPtfZy7UzjY6o38RoYpq2JS5V7eWRiisAvN5fHAV1WbGU3HEtBCECQ1zg73EnXNzyr5uXnF",
  "key8": "xbbA7UCFv1jJJ3iEZSEyr9mtSXsV22vsghA95nD6tmNUY7BZhLgmnzt3pSyiz5d5awDvWfmnVE4wRDnCijTUjze",
  "key9": "4ihiXqe7UwuoFjXzisAbSLdSJxhMA62u8PTxBD9S1K2ommcythgf1YqPfXqhdLGcMQfdMBFGyuBT9GYNN1nRafye",
  "key10": "5r9HeeEZE3Mud2dCswT7JMGmo6pKqssDXNXaMsrkT7HPnVmz1wQ8XNoqQ4JkLLHEtR4j3AikzQNFNSp8p7waXRkb",
  "key11": "3GXJzcoze4hte5YF3bsH5QDuUDPxi98tZVvizXxYT7BdbWoHGZGU1Am2gRbfaZNaduFxV9dA3BKnrzTQsLP4PHiA",
  "key12": "2ns5gi5tC6UpPz7TuEQ6gsZsax1oGUpeK31yUxBHhgQufEeK6CyQ3ouoWiHS12GAPXor19Hn63oR418fDxA1ymp8",
  "key13": "2BW4YM7oPR74D4PRkZXnafatzCJ76xb5cvFLXfhTAs8hGUMAuRTpiyZuJTsEhYTVhQff3njb7feBTEsETt9aGpyk",
  "key14": "4gqDjBXgpR5HB9LWazqDnHbbKZy9viz9Cp4ibF1xX1jr7xHK6sgjdrZjThA3y6Ka78ungzJb6jWDf3TgrvtWJEXf",
  "key15": "2XjJHKsvCufzf4BMufCVkSqZY22G1sJTS5oo2eoxN8CSPvs4bDnUoWnF7j5nS2SLfRKt4QLtafzuhpYxHR3CPGXL",
  "key16": "2DA8SurWerqv6YVWV8mkWx4ctmByYXTorAhUw9DxX3xH6hC649K8MkXHySioc2Q7heaBXHpSvTJ5vgXr4CPbLpoH",
  "key17": "2mRzZDMsKPAe26uGtofKNjdbLFNhtDQBV8mcx5kevex1Qr1BByXpDBiUkjTDgMbiTxiSvZgAPsAWmkZuHDJnjHPL",
  "key18": "422oqgUGeovMHgTh9VU2nS1ftnPU5jPdx3WPgua9ixgFrSgKVvLs7NKZieryrnfx7ams8yssxewxm6c1gi5pwwP2",
  "key19": "41QkmU6kDfpbF2KNcBD3yMacuHkDbbTVhtnWpKWdav59JekyiK2GFDQaiX7EaWwEaGVcyqvmJQ9Yj8khEWgFaXqV",
  "key20": "4x9DXEqTCvNeeZ9n9GH1MXVztnuG6yPNgDsFcN1HJE8Pmh1j5WSKM7sHZgnjcTLy7ANjG219HpcLKBvUqSk5yQbp",
  "key21": "5G9dJ7C6CoTqLfBNtb5Lnfzce2HX4yi6fNXAYT15dxYq7GfbQmUppoDW5ZMsSpzicZ5GsGoJegXuPvurivNZToFK",
  "key22": "59LLMD8kR5BbfHazok36TfsL2bBUGgyePe8dYdanujLp3PQ3qT1c19SwyST9ENg6BBg3rL3o5VGEkRXLTErHZsJA",
  "key23": "4JH5RDNvY69QvZN2if5MbSeMGwbJhuokTo5169stQtnCJTQvTuKn4Q1SQjmDxq5veKwDswm3FeNCQgqnXnwm5J3m",
  "key24": "31JAdE1R9fUoPmFVsiG2A8mWVu2AnZ63PExijHeu8K9kU93qG5KrZp6Lb1QAvS5MnuAQ14qDmpasaiQwuiEY1h61",
  "key25": "5yLPdBo2ndEmfpYU2fAnJ9BDJQNDsxfEsMxJxYnPS6Jk1ptmwN66pcwNGH5r8BzVGfk8rryniuVuQabV9NWAzhVP",
  "key26": "5Htte5hrPh5gfRA285AMTEsvc4ePhdRLkX4ZtuJuktxhwF66jbZHBwP3M6viD3m5GaqofYvKuXHAWNUMggezhnsR",
  "key27": "5GpQQ2avaYAi26mo44FoLGAV54yvu4ovq6cLuoZJuJBQRt8feH3t3hCPfvV7bP3UEYr9aAzvSJnpTskfgmsBCuy7",
  "key28": "25RwP8t8jVYhaDCMqSMa3SW6J18TAN4vkXcNqnXj8uEhxMP1pmabWv5Sk2JZ7fPgajE2156FKjEhMbG8Gn2pqQbZ",
  "key29": "5pz8Ut2rkGLqPqf3hwxKCLLVnueHtfcDiUduS8KMyJdapd59hxfWbdCjxxmy5tmsJoR5gXns3qngGfkn6o8XXmPJ",
  "key30": "2xGKpiTuwyuDYvNC5x6VVXSqU7iJLRR99ogPpmvcZ6vDuD2CSoxfhUbKaAVsVUiMCoLMaKAPM8Mmy9VtAnukY6yc",
  "key31": "4pbLScNb9j5T45ZuaJb5hKm3JiWumR9MxzrSrvBHcEAgxgNw4LzP29JJANUDVacuRdd7fgF94pfFDsgiDvP8UPfP",
  "key32": "4QNBeNVmU13Z8zDARLMThMpzATX7Wy9kq6AiA69kp9TFYZYKn5QTBE4RuLEpxvEk1rfCpDjD82JzognmUxDxyJzV",
  "key33": "4moH9v5fxMSZRaeufiYfetYGQVAnuCnKfQRt2QexKW7j6H48HEABZ2NdQht6hwTHs5MqMA9eJjzDpcTk1HcmDJ3R",
  "key34": "2mRXF5obE5hepkQFoWmuRdvunDTGsaCJR671BXFFgi6dLWspCtcoDFAGmnX44ZDtXqrV76YdgoD3YktScY1WpLeB",
  "key35": "3eVjU7XtGWdMRRkxcZy9xkg5E68kKrfBsrQb98HZXdJrCndSQpjs1NAQvJjxRWK7FxeVnHFFEojSUQEfnt5UntT9",
  "key36": "2kfUxui1ESFcaGFJme7BjdFKXNPe5WFEKz3XdTs339qACo83yZCkHHQgKMpFpfn8qGy6HtHwGAPRWwBpnyN3Jj1",
  "key37": "bw7W3sv9L1ESQo8JtSuKBGHJU9XeFSxuSTWJuh9hDSj33iTAPyzegiumjJgcsGiQckS4CoA839qfUr3TWSkPQp1",
  "key38": "2Y3Lq2UDUN7UsEpWMLWPohFYf4rJGyLcb8tsvonTANiQVndFnw9EaFYVmyFL3TR36pKcycfrKHcXaRYAWYyvV7AT",
  "key39": "4UkVywMmitwYSfLaziUzKzAwFoPXT7FCmXupP8CwyX5Wbf3VqNwWMkkPrTGJxsnka4QjCDSuNrGof3ksoAG3Z3H8",
  "key40": "5wKc16PuN8XLuntDs4UpjYsZB3BDMRk8PayCZp4YgwhwobJhALJygKhScgXpUXFmrnihqKW5Ym7vbApgpS4MYck",
  "key41": "ue84uRi9EwqAHCuT8cP3MRqWTyvDKSefGT7vzyJ91QiqTsVp6A3jZVT4JZ1UosZXLp2NLVETzYDHdg6NFuQpYEF"
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
