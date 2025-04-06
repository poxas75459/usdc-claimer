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
    "swV1LetFvS11hVQj32aYr9yWutQCu5xhQ5qw36TUe69VwvzMsAcSVEypDUr7UpSUf8Ntg2LQC6YYAsa74QGUZr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W9Y7SMv7HGxEZ7K33VCFBhV86YiwGGctdTfUFWsHKs9KP2NZb6bTnLwueanh7sPwmQ3QM6zxCeJuYCsSRDzDFvS",
  "key1": "2JBUKpan4QAB2GKUc2XHeSqpJhf2YCgPjDvLX5aGLrqt2mjWUNExjDENwNe9SW2v814RHKZkm28Y7rpXZz9jmYJe",
  "key2": "365xS5xSos2FbLcud3HKo7hBenG3ges5EnUEfGNNzGTfpmfkfhKBxRJNpZwEcZsyU2MogRvgGGH1bwzwzcQxXDMc",
  "key3": "565XtgJxTosHB7czGGsagrRMdCGrgobgGME9TCfqzerfPsPZAdmMSqhQunD87FqTuQoJAdEMYyMaoFsuu9L1kh2A",
  "key4": "pFtZVJPokNT1ZZiiB6krEzPhruoYwoxamSjP524UHUTd8DhL9VRsf9SfRG2chZkUpRrckGaKTs3jZVaPa1gojBc",
  "key5": "4RxgE3LpoDGxRWdjzJTXgAN7yKkHPJ1j7LTc8xFVAHpfoiZwQjnkBw4bT5s1KvQJWhwoADa6hL6d9cXahHk9Zj8u",
  "key6": "54piyLaSuDxn1gGMKJKUeDRX253nNYFg8DsooP3tncPFVuaCoEJnnXw9HAehFpVZndt1tZyeiKMKuFBZtZtm7X21",
  "key7": "G1pTUeWZYr4B1GcKNzmQ89ZVScg5jkZRprMuqaoFpiuHe4afJmZQJ3oNKLvznvVUSpuKdirHJ4qPu84QaC25WX9",
  "key8": "wYavxKutU5j8SmqPYUMjBnVo5Pkzoi4BKDev7HHppAfVjhUxxPBmmdTDkxAEheU1smwS79vQsJttayso97oHKYN",
  "key9": "3FbJ6cNAxqeomoh9dhpY8PDg9aJJXpQiJNiHoBtWiK6vJ25rC5Gx38PcRdcrEDXSRyfKeDQ2RbzS3Z2QDURYqVg3",
  "key10": "2usmt4J7QmKbep1x3igPN8zSobDwY3csaXcMTvgkdwXabJmjMwaUP1DrmD3aWfDjzgRu7q6fTh8JAdeNmqHyBsxT",
  "key11": "3u9P6MasDqztR9Hj5PUyFGmthcCTaEkJyHCqKeWV33LYGmYmnnqCzmCkjtmmiZt4mbjcw8tcMnq6jn7ZngcW1Emz",
  "key12": "pdrfYfUtaaRa39yuKAwa7qgHGU1E1paCoCanTuY6MGPMGimNiaRN8DwXiGs5Zgni7NBcvyumn5iBehdwbpG7Sb6",
  "key13": "5A7cySChMKqVu6VD8J58i196MAmzzf1MM1V8KEeW1at6r6B2ccvHTtB7tZ3Coc9WbiBK4ou463wHRNWjLegLJYZs",
  "key14": "5wso2fiNKs2eBbkjPuzqJ8AGApSSB8gLHvmq5DJdgLm5d2LGGLbkPMoeSo1UcnALgCVpHFj5EoM5szoTqBti1KGj",
  "key15": "xausjLkzGPKmZRXrUSJc6TKqwZxzqEpLd32ADFssXDkYaHe1k56jQWwX8ijnKEFkT35JWmt3zce2CNnQAn6JhJ6",
  "key16": "3yRAZjW5YtsA66w3ZW4g5XUH8G6tbNj1pJHcaru3XjQA634dtUrWZ6URiefKUPyeF6dDFf8yc2XifArzxQ8Ng74T",
  "key17": "aKoCdpcjpJDBqZEDFoLsZmKnaeaYrJahsrBJHPfyhajCN8axQJbNcwpjAN8cVKWGN8rw9v9u3kQw9vFGwn35xPq",
  "key18": "WXu6m3NYJBc2xdEKKa5vqmwYdAqz7c4DpPggCz3ob4gGiXdbXdSbYsMDnm3EKpQhsbHv9jJn6ArmwyrX26Krq4E",
  "key19": "5WcXqW31vSpvLBwM4Zg2f1dHBRS3WQLidytvBTz5bwrCq7DXpTugpBtbB36CSN5fBCvTWYSM6TGAM5XoSb4Ze6iF",
  "key20": "5pF5q1FLBia9wnHenMVGzHo7WKWvAzRR6Qdy7TX9VsDUiLgd38f9XpopwHptUthYdDiqEJEgZx7fq19SDzdt6p4u",
  "key21": "4gNMvvDTwHz1Lb7NaVvdcGY6n9GjR1emyKaD8j5xjkm6pRkrx6To9dPvJ3d75RhQkvHstEnkhp29Aci3L7PPc8TR",
  "key22": "4X6HJRQZgddbFaxvCZBCaMYugq2batnRonuLmzFBLtdyH9YMwKoQUwwNwbKT7CBgUhuxmRm63KirELznpvLB8YeC",
  "key23": "5sYQWbwVMBJuvFhdt6zWm5UdGjv7A47vwi1pQ1GG7xD9rerfSvrRoYx7Wv6dFyySDFXFtupyyv3kh1Mj6rvsnJie",
  "key24": "2KAd552dfXPUy9ptZCu3HWVNFpHfqcpWdiNrHxhntXEUfqHzB9FaFmTzwiW9fAUyw9tkRxaF2MEGA3yRxGnxn1iP",
  "key25": "2AngdxKQMz8hUKhCuFjhvztF13ATAxyiHvWsm3iP2Sd5Wbo8dnqrpAAh9oCKsh3Mk98QgGqqTFvLy5mmYisDPhAa",
  "key26": "58uLo9QKXuGM4LFXL69WuQ2bRmmjiqYh8odq5btZ22SXNGkRrgMnSBbDMNDiRFJGrieaMrpi1EaBoTVNj8pMBB5u",
  "key27": "5Zeyhcaz3gUZnVz1ZL8GAxNMNR2bf4EXjzkXXNrh3jX7RcizZi4L1xDZuBZJij4DhJrcm3c6EJmSxjCrvWEfkzGN",
  "key28": "RQTB3aJzt9tjvmUw93AyBey8Fd5yQdsqyACaaoirztrsScNdLYLQfNYJ9UxHVB6m9k5qasmG7SQ88wt8fF4NLqx",
  "key29": "2ZeQeqn4CxVtGeuhoyEpcY27Ujz6Fojze6FdQPdTHvjQanDmuPPUCJR18hyJFCqhdfeza5UNCMRNZydSjnfbLyTz",
  "key30": "23dnC4UTWxvyfu2Uf1jxWaZrFP2Pp4gPxxrLj9ey3fTbAoiRJWXsKSaa9VddZxosBNvhYbZSLTeE1fjw7Hxy8emH",
  "key31": "3edEQNiseWYjCYFq1S7FYvPVcc9Vx5ykse91W1iufVMNcPqJiyUzgmaRWg7XzQFFwn99Kh3R3vqXVPAn1z1PH8Hr",
  "key32": "27hCQJfTzZCrrpvJeVpVyWQHKdZRFDK7QJqz24q9p3cThL41fEWShJTjg615oS1sZWwd6MEt5qxzixDzux3S8XqS",
  "key33": "VCMZqBaKtFMq4AVzquaNoUzARsfmp6RBp9YbN389JmE5fWgrmVmUJVUWKh3m2FG1DAif2qcNqLBPzpah2pXuj7b",
  "key34": "4Ndgn7PjESUWdoJKvSyy5bpX3ceYy9XBthKr3ZnKqrPtNM3MYWdQELTGPzroX7tRUPCnYpQbPehrpsR8tcPwxt3w",
  "key35": "4yDs1yDucBqSuBMRBARtYFWHMT99JgUE4954onUMfSNHMKiq5rzNxKzTLt7giFSmRYhebnfdggff9RdVhbNzsaKS",
  "key36": "2YkQBDSAhf1M63U4LANWjx8ribAd2jHTA4YmjxomBgLp92Fzf7PbjGkfT6TJaW1XaGnihoGMhRgRQ2XLuGoVAUaH",
  "key37": "yFhoKVBRrhmCQyhSCbNq7kcyJxQBPvpSN9ZsMqg9T5PRC23Y9JSQqLn1BeQivkXFoCKmzpjXDmb1rQJ2UqutTDo",
  "key38": "SqZMM49KgcAWpw33pw19rragKVTsNCCddGGrm9zXFa5nse7ALAQefjGXcaZxdvWFBfzVuK9UhSbuGKe4aS3MPZV",
  "key39": "toju5CGhPKcEzx42nYaZbsrX1Bxz2myb25y18ZkEz6eVNESS8ecvUKcGjzceCePce52V44mRqUtTyh98keG8NhV",
  "key40": "3R1Fpd4Cq9BxcEN6amRXQDMvBtWkdo8JEontUrKzauTk3GfJr1xtFC4enkdTuawC3CLjiDGSuTymTeDvLgR2TWPp",
  "key41": "3T8vqSHoKWAMhxgeqB81VNEjW4AJFq1aQGbFvBqWJHnMGeuQ5fSPhc8QY1QwXtqKnuh8xvL4GM8shjTP2o8T6FU4",
  "key42": "2WFSL9JMY3DVyhZVmCWwEJkctoYrHxw6azZCxUXCorim6PdoBzeTNSsRaXVGDuGwy47xM8rWqnVFqNDneXXQSnaq",
  "key43": "36waC8R8mhYuLYN1TdpkkSEbwDRH1VxaHFMDMg8gWPVGa7fVLDhKYB8Y7zdXhVomvNsUo8YwoB5ujEEnHiEcFe7Q",
  "key44": "5doqAiyKSjzUxXX3zV5etWehnVceE5YSAQLtrSE2FJAHwDwvcpru4TfnueVKA2pLKG71ScuZfRK8j7UzXBbCkTBc"
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
