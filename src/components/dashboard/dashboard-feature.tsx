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
    "4QCxUrDKRKC1s3RgWTonxBYqMjeFMsgQVdxDec5d3EN7JjvvD7PH99LJqs6mGzMFPtZR1G4ePvopZh7QyEfGCaNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xk9ZV2AHxgSrhdUoJ8V5KHNoUfHskjE3NnHX5wKkzNVXNYE9otELgHnbhffDVFr2m32nYhJavLEFF8oFsucHjeQ",
  "key1": "5QAk6TvSYxmeLAyH9MS5Et8nZjykNNWMDjvzWJG1eKJp9EA2UdJotkDWJUKVMbbMwzcBWGMPertJeFTpxuStEWZu",
  "key2": "4uYpG6JpuG8EKdq8zbT7jBRVADmawKgrNcuWuj1MsmcFKna6XU6ybpcccrKbWWg1uLdeaTTfQaiijNSpJfDGTcpS",
  "key3": "wsBUZMt61SecLmaoXSwaR42pzijhdnBwqRFHiuUSMnrsk2SF56FVqTx1mK5EwUf7fccboEGUm88aboe5LsaekKa",
  "key4": "34c1y6QEiySaTiNxpfB5s4WwsHccWwSLzZ3TpPMDrDW838SenqSwAz6ANTLczUrRZjKYzHayj1BpqQhszhd3DTv9",
  "key5": "iqxeqqnHy6pNbhjhEDFC5meA7gTLxFrCr2qfYwgZ7SPncoQKXQB1NyFJeFFsm4Ug4ypDvqHrGzjFxgR9y3UUfuj",
  "key6": "4yazsNakTovocavdi5uvVd61x9CABS8FF9JvMuqjxSXyjicubSDbVWHafL1GkX9wtZfcDekhavXM9qiBWuZDSitg",
  "key7": "3EHNv5PrpNcB5QzmzQbxHdxAf3J67nuzrvrgvPn97ghoC5PFB6jEhn88KiPetoacQz2cgKX2yri2mUQwu5scb2Q",
  "key8": "2FBQgDvKNJLkWT5RQEpj6hvZpbQPmJgGz75Hxr54vqDq22ZNRnJrXHDj24EpjNCBd15LwkwitMFiWZZLUaTBnisE",
  "key9": "2rAP7muavBRRwsUV2RBgjCZrBZ3kYqKtSjz9tbq3tk3dyG8HKexEWLLGLEFhtaMdw49CbjwPV9CtwmXkcUwH35z7",
  "key10": "2RY9Hhnt547bcAFn828oVQ35H4JFaoDTyMM74ZvsRNTxePVUkbE7HBY4X9nCPTcGpTCcBp5LabXQZThKPmhThjjE",
  "key11": "2znv96MUptmNQZYqU9hn2EcRrZNYNABSaXtTHQFV1YEEztjj1BYq5gRzMxUzYGDrrHKdhQoZGud5SPccSHynCvGj",
  "key12": "5xG7FWpU8x33ZxqCA91a6VXYPzSeBsXFoncnqKapfnF3B6hcKrpTVQW1tJrUeP7f5Aa91jUsNDJQ3iYyhrUjbYgc",
  "key13": "2qWdRuH3bJArYsAb9Z9hJGttmg5Xihmi9SvhDGkRSmSfWkX5sCL42zuA8yyE4bpKT4ysrZh9GCTLXY6t6HwRPrjq",
  "key14": "2Aaa3irV4wmMb2sif8wyZSDV1b3JTfMbcYkGGRP18Wzyjq5sJw74Woc3ecJfBevZjvXo7MrLYGeXzbfV8T8jsjfw",
  "key15": "cbyZy4bJeuwCsJgjLSMgbk2mh8PaVgMgczzmyYwqVLPaVZpcjwe1DH8ceLcgbW8KnNKarpK8pETbJFFWg8WxTdy",
  "key16": "4pu8nDptjieEned1RqWp8ehFiJR46zLXi57Qeyn9ADdMDgKDficguG7gv2rWewxLpUDEgpaymbXE6xTWbKCNTCv9",
  "key17": "2CjKb6h1wvK8yonG6e62bh84KGC32yLLF4Sb3RAjwpoFz98zqs8iLsDhFCt8PC62XNjyfszsu8yhdsabiWUFnJ9q",
  "key18": "4pGRHEdNWUkRpeGUL3ootMkRbbDjC4mv1zitE4KL59DkbavJ7H9YiWq6TLi1AWGGMVyquBfbxdd2a7rzXkCGBpDq",
  "key19": "2rUzLWtMqKxjpVDRS4tsGAHgat7XXUcUC1kpHJbLe68YxBoTQd14YfmUPPf7LUoEJQatUHUtjKZnB6c7y2wpKasK",
  "key20": "WRHvn5tm3aqdbkM4A4XRYgTBe3y8HvwsHJsJYaSnNSdVdyBK33xzUpN58sTVzzjMtbKCQoDNioXRHMnbFyhiaJY",
  "key21": "2RznM8ixMpohMszf8y8t86UW43ELrzioB8XsftdmXDyrBQZkkZMfmzzbxkE5QjEhwWcAwYTzfejNwUYP8NvJzFSh",
  "key22": "2Fqw4vXF8KwP1eW3q4JQtxyy7aQ6DWwyPvwrPVq2ST6uwhNy4D3vQmEy7aDfxzTo4LoUENnbWAYVgiDxvikGkJGZ",
  "key23": "3MBbMMgiHmdXDVGuva2sn6WTsbAiYk3nBvahdZoTRrYKHFmY7PPKZvbr8KahkVckQnWfFwewHdB42jYJg8Bj6945",
  "key24": "EJiCL4MQC2QBZuagsiuJuQ6QBXx7TCf15GsLrHFsSMVbPmUbR1ZA6R6VR7QgcMN977L8KYFJhat4E5qionbEHag",
  "key25": "64zYsMknVwrJiEcThzG2jj7AwLCdRpqk3GTog5CHkXxRp8cnrin4ZrbHocpBFpmeEj1Hz7SXrjEZCxUEhbLeCoaF",
  "key26": "t8a1U2phW4beJKJg9UKMaYESdzHGcn4VySemMvuQE2HbV1mUBoewkom9z6Fju1Sxpsj94xodUy1p8L9TPbxjAWi",
  "key27": "3gACLnRtsMkdutvEcXearPFQP9jPffhS3h5DkkyabRMxr6M76yCoiLMwmE9LgPTxFKvqi75hWyQRJp2NhDTsmt2u",
  "key28": "2uPySV1hy2npC7in6cbccyfx1Hvtj9NYNLhevsVrMDYLx24maMgvvNV1DFs6eLKYydHkCZK9oifVtacmcNuzEqu5",
  "key29": "2qPvV11xFpcfpQBZMrQoUnvn4GYLALkXhwNFpLTAdCjKGYfbc9z8ydCedAuQziQr7MNEGuz8bcoZb4LktrT69Hh2",
  "key30": "wbkk2TR142fPDgp7whhTejYD1da4oidYQnknMJjkZ6NnqZ7WkccyRjP54mnUes4GvNDPyUgXxgkb65v5hV36cWf",
  "key31": "DyQW44kESWYtXxnFKSFMVHjoUiTnjaRFyyNw3rc7KpkrvXTxzf5xKd589HYpR1A2McDjK99ft7uPTYF3U7VEa7S",
  "key32": "2oPWCGPfTehZ8tMN4eDipFY77eAGc6zkyQwzbYL5geerRuE89rHWtY5FfMLprsBQhTyCbpHPMrKeuW4mW6yzrSeD",
  "key33": "FWdgd8mobBkwCgqGSnee3mfPA2YEYTPiEZvYBsRHaDYfqwo5dqyWb8Z2d5UwQyy1afnG1EUnU4YMjPnEM3uAFkd",
  "key34": "5CLMZUM3a7WBGaA17CygJ5n1NK8t6DwJFxdoiaFEb6LR9c59gZAWraRDee4YtWXt3hs4tK7u8C7YKiVv7XhS3FRE",
  "key35": "5opTENXSkmFYuoXShyrjrdxnvdo2iH3i6Z7eWtJYLGNqjtzjNtqV1Cn4Jz7nah1rdioexknWrRcz4iuQkbLKPeUb",
  "key36": "3YciC9CzCHmMaCuhbJjHgw2vLzUgRLqPHru7QbEunGW4HGwKxzvwuxnYLXuxby4xQ3j4gjabDL7hwoc4SGNJEGzF",
  "key37": "51GMUMuFR8zPNVTHs9hudzj4sZdyvywiGF778ZY8ca9CPzMnYKSdvcZdsjyoe9JUirEaxm4GMfqEscShS4dCmSUB",
  "key38": "SczYUMbynNfcCXAnXmuMiSuDgy4UMUPovnm4NNsFPp2s75ZFpLHZrbJyvkcCPb369et2DRzVDYMujH5Koon8Ef8",
  "key39": "357DYtqCwyxm7PGPuQyzydMSyQRaJoz3mKaE9PMHH6JJJprh9Vz1rDgaoK72wy7WKn1dSr3CcTAR7FwzKo2E25fi",
  "key40": "4tof9Ma4pqoPoSyVnvVVfBA11uPhBKuLqit85rwymfj5Bt6iyfQ2SvcR5kP9vfQLoAQgCzQ64Z59Jg5uC5k5TBt1",
  "key41": "5zx49ixY7TN9YXmHrvySL797JkZ2vLZ9FfHU9Af9hk4887V2pcCU3MXTLDFd5AYiX5qyffDgKqcqP8FPuUsYs9zp",
  "key42": "4QboJJAJJX3a45xrQ9JBgi5QxGUw7gcbDtFCu2Pu3mQWPBzCqian2x14sLnorJzWMgcPBoyHC86WE7g9DSUatwAz",
  "key43": "4MPYj9dxfqXsEfoKRkPD6Yx9XC78R8wmLKRCi86tfF8zWA5xf7gXyk5PgxjUYis53pXdr1PVo5ypWBAtF1YXi35",
  "key44": "21vqTRHLXmMshPyFhimXjDa1nK5KgN1npnT8nADunERucHYBn23TqbjBV8AvSJYqaK3bLnwwzEsyofmWouMNuyEP",
  "key45": "4XvPADZg7UM11Cb8fjYNUJkf97JAPWao7evTcqJrizBPxuiVU8CvQeYGHP7iM9sWuCSBDgoikr9dEwNP48LkcUfA",
  "key46": "5HjXXewv4Xy1kGPG8QqW5vxZRyekU8FCP6K3TyEiDNyPFcVfipbLz1PbJm3JHZ899KfjcMTVf2NLhx4Gnbf8mRGp"
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
