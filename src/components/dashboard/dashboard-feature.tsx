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
    "2mS1oDJcLaZYzMzTwhoF3farGhVx3JFM4pT87CdedeAJAuQoCCQ4zYweZA3cYcWtn7C4yTS3XQJK5uFhnqXeg17G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3agrX4dgfFELq2jNz9yArTsuExH4JNQUUd8CQnGA6AHwDDzp3vbfGjDBQG44tRcHnbqCTC98biMuRBu4yHJgc5Hi",
  "key1": "4QPeapMFtTXcMqP2aHYDTonSmuw6oEWWyV3RcRutHATbK8vQy7hT1m7yJKFGPnh4wESwGvUx3aAQfQxgDKqozcsr",
  "key2": "2hfRQcxPXJ6RHX2SJrhrMrzEYPRJBaSrUW8nrYibuzvpfkNMvKnY738dcxu5csxTpTtDuMkzV1RRJUW5HcRYmzgN",
  "key3": "4TJBVndBrkT94jaz9PjX88N4zn1oYYyyU1sUwhHWuYTJp46qi83n3oryTdbJJpJ8RBoxApLgQEgexJ6Ewu4rE2KH",
  "key4": "62Yt6YQxsf2q1wxk1CgEBcAYN9JEgkwhKY5j2sNQ1cxLNH6KR6LK2Mwdk43aZ4P1nihhfs3yLUzzWkGvXQFLwWzF",
  "key5": "4jFcn4QttfgMVzNuwX1kQPsrpo3qQpfx4FfAowojZPsssYxj3eKkZXnhs4sMWWDHqRUzGEfC3U4dfrDPEFczS3Jv",
  "key6": "3ESCdmBJuvpE4S8URvnkPBQVN5ompyBnH3VYmUWfrG52zYrrnvUTFg3DzcKUn93f3jtty7Fp2wQSZBFTogdSWSH8",
  "key7": "53MYyNWD4Uy6nKAUUPR5cgiC9v1r1szGQRCHqZBA5Lpe4bibqDDNiQfw369HAN6aV3kUxgm2SDCg9PGKRfRMTCLj",
  "key8": "5DneU7muSJ6aMaigrxSBysNpzZ5GSmgbxXDfvVLPVasn56vu8YUgKW4hsA3YeyVM2FRPGhz3bX16P6FPK15dRG5s",
  "key9": "3v1HfiAeMoMu3VLHzuHYZMcsWkDGmeLuyZKsYrZWNesFe1seDr7GeRt6KEqPCosL3AAF8hDcStJd13mMovjs3kp4",
  "key10": "25jF1swnPedCaZ1vQk3LyesacyeXQTBMHR7Svo8qL59Asahh87e2KYrddF57hasu4JcHcg5gVw493fMpdSEFFTxv",
  "key11": "QSkX5SMpQHkxHbEhtE8kGRfmd5rRVv6sySSnNLip3Jf22WJouACBqPUecDwGSeqGHYi7xAzL7xX8nPpFW32ExeE",
  "key12": "j1hQ4YkLiXFe8CSbHLjMDGMfdoWhcRrj77Dnb6VR856Ebo8xqv7aKcpqWDmiu8jc4QoBNk4XroEst41gCdC42Zj",
  "key13": "59GDgwLnzZxfrDG46cxiTWMtmdK6MQdeoukYkgPEi3VWiSyvRWqzUDseHMN7XSTHcs36G67g3S6DaJ4eddhkGZCA",
  "key14": "WqrcrfhYJJxvYiMHWCv1PfQQtKzxdTC3MfzwdGRju54wf6JmwXfEH248iB8tp7KjaUwAH2tQQhT6Hm8gi6RuLm4",
  "key15": "2EheULPtUH4ADo8UzX5V4vjPY2gw6mb3HPYjR7Qe7QhCgfsahqQCi9jWfAWUuie9gnp4RoyGm1s3sseyoq4QDjfN",
  "key16": "4yoLNomAqFKZFgJs1yNG4mBtmGNxFDnfSFtfJHzcBpeYi5SwWMiYeZHw3HTJcdJTTjBgCcoNGK7iLBGnhDgzB9Zj",
  "key17": "2Lf9bp3nTrPrTbv4iKrkKbLtqM7LXNBvcDFYXRJqdcwJPYjGa922Ar1nwiZCPy3MRCgVo75DoWcvPnYiW7hGh5Ry",
  "key18": "3Kvytk4R8qqufWoFmcQKYJNopBd1Fko4XZ6kRerLmQ8qYu1fj4MSrTQuW77JS8rEn5CPNoXWTu1Qhh5RzMZiU5wV",
  "key19": "51eYKGE1H2bnUcBb4awL5DUJPK441mdKmT2i5KeBgCGrPrF7j1iRTPikKTSe8XUFGaKyVdES65RWfWkeZHFMyG3B",
  "key20": "2hXszPD6errqFjKYvKowNivLiPZm27vHa5XBw8ZYueH8SxKwa3VmNT1nZvHb6VVr55zGcdedixtH36fPsr2Jsu5J",
  "key21": "3tXju1xnAFEgrEK9FoktxxJuc7WZonjM4AoV4cqWy4fRACA2v6qJGdny5N6n2xwsbfSCcJWZS6YjUPQuQjS4bTCx",
  "key22": "E7uWyZ1cf72rL96jWKh4qfxQhC9YQrGfYL6QJySRZwWD261J7qsFH7paMfjSNmVJktsvEegELYBNkCHcFjHP4T4",
  "key23": "3G26FYpQoSYy3AhjYUqgfG8vi6XRB8y7VtndxmDPPJGwutDRN5kMgZbexwxXMzM5TDLXkTXXi225UuZNYdG5tdjk",
  "key24": "2wXrBEjbFyaHt5n5euncwYanA1yk4cew3NX9XFtVG1honciJ8tEEKadV4sq6qjmaCAs72ufvxWUbEWWKvA85vVJ",
  "key25": "JAHrLXfJmU5Bt7sAdbJD3bmzWeMZZ8K1dsvnN16GB8Jmc65ng5aMg2nRaT23HGRrsnowafSWECVmtQ7hVcaDZS9",
  "key26": "2RpKZ3SPZTsLAMSMxWbryrde6ZNyCWK5YT77Rii3FJ7YnB2iZhap67AjspUtKsCQBcapuVfy3zHN3g4oKFdnz3HL",
  "key27": "5XiujEQGFLmVePS2oPtZQR2se1huXoLVJEJ54MLoiY8QcjTNfHSsFpiKv5g3nG7uVssyuiQMbxH3fwUr6ifQM86Q",
  "key28": "3MLAAaRqpfBiXQ95MtPy3Hf5pXezoqC3DYeutobgpmVkzorpQBYu7UG5DWxWiPXtPQXQYeE5JbLHcWqKNksjgJZZ",
  "key29": "8yp3PBqV7Lx2RQC2oEt2Q9vSfgvSrE2yqA7RwnDMnR3GufcbsaUAZHRds2a2cfu1w7i8uL5YeSLnejUcsDh9vsE",
  "key30": "3KrzqAFYTxbaLmxdRQLTKkzJ6QPLJT4wy49cimdHEpjCNfbPjoevq5TKS6a32NasCLEGUwyNkLnP1evYJDWkxwiK",
  "key31": "4h8BVg2m3Z18vQodr6SCf85dzbN48DXSVafLgcbaSXyjHPaGEY8BDNTNwo3FDueJx65MFKjQWbLLcYMqJURncTNU",
  "key32": "4L2fstSAS59JCRotKwfSQD4k1jnp2hVAJ4eir8hbsrYm5uJEDz4KfMJhoQGXBRdGY39XiXxG8bUkdu5Bb2W6ekje",
  "key33": "4Bx6MxSSkvb8ktj9NEYGzX9EXj3ziJzH5ZJtywxLMDFerP99yJzi2AUgTTyaUH9asjTkpZfE6Zrt7uUDRizjaaLB",
  "key34": "4ZJrvtsVDhtJo4KU8cth1XuQGGsJUjDXURFfLoJH6GdWtpXpMty4rkMNJgrsPnAHUAh5dsLHNii9Fb87GHHcj6Kg",
  "key35": "VNVcRHynbbmEMkhEfxbPRdEfY6a4XbBRSncWdsnHWAQyEaZedNyrWH4xfnyuGvjRuujwnQTB1iJxnie1PwwUUoB",
  "key36": "BRdK7ezDg4CzezEPAjd1g9xoBTxifM31CSiBDPFDiXEbSw1HYhN4FJCEhqbgQZ4gbknhjTVVastWxux7UmzeKu9",
  "key37": "4gjjV9QZ6oNBbmw974wntuDW1ki4Mj2rJ2qgVvudEqwBRcuDnx2MKQ3KAKkMG7RbCdRPFecByTeGz6UgZD7JS5co"
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
