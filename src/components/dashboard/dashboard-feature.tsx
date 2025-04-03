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
    "4CeZJKu6yrSc4QKxg5cG2vLjEeszFx4Jz4mmGfeBruwDs9ERWgtY7L2xmFc72cVSbyQ9sG3s7j2uXFjr67WpH81x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v49tLMrEz4KUwzRNuXB6jKeuHvNTX6nx4Ca69XRVatpg3ivFfVRGMAbRQ8oZ5t2QGkvxxonyhygDyjUDHc1LEx1",
  "key1": "4Vaxycfywk3Dx9Uioa7qf14BevxQaxLSzPDUWFcbn1SqZ3znZdtXDb43ntZRfFxECZAWP5mWXzGSacHUu9ra4NKq",
  "key2": "64FsZXRkhCXdiCgR1LRgTtA1mM2NpMjqHqtDGg6SU6oegJmNaojWJPDrU4eEbyYjXjkA8v1GH5UeVeoSibytocYM",
  "key3": "3rDVzbSgLaLnZg5qekDGE81nnqNLJvgqJM2B6e1HiXsu1NFad1FwPXixEGiLWePPxDjy3w7quPZNqFJSkPSMgJy6",
  "key4": "2e2dav28yjhoPXAGmqveAjxZ5GvR2KwZ97vU8hSHKPVAVmxDcy4pVUHFAPnSnBvanZ74UfthMUxVMaoDf61T2Xpd",
  "key5": "3Hi15ETw4iidvV7qqMJTkeaDXoTTZWtGfNQF5CmsHtah2RaBhuC2otEu6GkDn5oTCkajneMBKGuQkbJfVZq6vz1w",
  "key6": "38Rq7RtdnPyFcan4tcY2qWB23yzuJc5T5e6oEcQNBzrDZrKYZ1vj9SUFpykpSQEHBHRzTmgY94DYusVaGjdv6esb",
  "key7": "23L7Ua5uAFnVFAPdftsxfjssehEA3KAgeQycZno859FeANYowQ3zG3M9hczRV8L53Nvo7LnyPkViKVdCwfA8g3bH",
  "key8": "q9smtgmru37bKKo4SCJG5mRjDc4WG7zS5C5AtDuFzhNhyk5yqTk2d6GxNbuKCc2FdPXzoJ3XXScYjhCFqpZixWG",
  "key9": "2XPraUqHE2tCmuehgM5Uc7hKHW4mvcTyUk2siSAqbsvmDhokdEJRUVDmQ2hEsR2k1GdE8N88TTgpTdKHbM4FoomU",
  "key10": "3MQ6JdGRQuCZYwyMcMTg6TRVQMyBhxK2tHSa1EYZzLt9C2vQxagseFhouYBKrfJv2TNei7N4Hy72hwQQ5P8m6wrn",
  "key11": "5fYAVHrNMZbXVGfGDLqSx2cHRPEAwhn2aa3rcSzPst31bAUkbQ5PPUSsn1ArxjBuWDjG5X1fvgWsKUEZ2Mb7Erwo",
  "key12": "FDocAfkUhBMNRdUQUuhzigQWLCPKNrc1yr6PPf4WStMfN2XokbydAqJFvBSwL22jCdawt4mkkMVGgTF7at7g576",
  "key13": "2RQYw4JiTKa41gGhtD7FTGtEPjEGXMScDynM5mnf7jdgS2Y9kwt6GUZGPfWugGkVSePTborGgPnfR5xT5B5KWhHL",
  "key14": "237NtXLuixhv8Rc7jUUxokXuRdtwBjPpLDWQvwQ1qzKNkux9pKm9MT1He6CAJ9FFmRqaZdQdTuu5GEok9ZNBQUqR",
  "key15": "378HAdMwjFB3sRuZWyAF9gANtU6rU5giieD6nyY6mEucPkB2H4n5fboEHg5adJhp4embXNnBziLoN6EkNcoEKUQX",
  "key16": "UVefDiCq1JrvM4DFVgRduvciMExtEPsU9GqZVnK6Mfd6gp6pS41m2wu2vw1sf3azZCyFt6hEz5YtFdY5HbcNnYW",
  "key17": "3mPmEG5QPxDnfqeW9Ef1ogD7poKgtvZRcN33dSTGXAKD53sgs81ovYtroTy9Voxf1sGxDeeqQrL3Xz4oqtBvtSb4",
  "key18": "5prwWW9q4Gt3a87T1yW7kVm2gzya4drYPEU4345m13ys8cGMoVo3MzsEqwnmN5RcpmHrzpSZedSW71rGdCL4XLZQ",
  "key19": "3pCFbFU21QtFZ36JfxnCDBUvxt2sKvthk6wbtq3G9hz6EJnXvjEaDNncRLLFHGV6kzWA8Xyoa9vs1uxFyerqVhEn",
  "key20": "4y9U66jWGco9ZnjUthGeJysxtREaofX6SXMeA2fPppPKgfnF6aheqYgYnEcbdgGkDJxzJTYWz6JiFGNNCnA9L7N",
  "key21": "4cQdmEfutHH2UFUgRpc38mzv1LDmsp9Ezq1aft4Bud4NrwegryeeKG4AMH63pAf6rApwQmebjHwPnJqraS2KEvmu",
  "key22": "CBgufGKNFKFG5Cg88gqeBKKPpbYamb7bPZAtL8Cdv9fuv72r2CqQYbF5FARxGMiiBqeDNKamWxds81AduN6HnW2",
  "key23": "3XVncWSo5zBZA3JLsym6gREVky2Mi5ygMvhrDAh1M182p9HBCQNbAfWch3xQjEqrBdkg2ktoYMrdgth5V2szJFUe",
  "key24": "5YdxGGrvzWm3M2a8Ae8Vbfe3e2U2tzcmkbubhcaZEDERbbzCuXwScsEuNnA1GBM25HshGCLRRAQCF864snu6QpKS",
  "key25": "5G5dSPUkV23XEs4tDYK26i9ywwjazaPT3xZZxaKAmC2dQp5Pt6GUr9YsPjWqon4UCCWHUzZ9MTsbwYaWg2TGjUmJ",
  "key26": "7jKN5ApH7MGdiRKUR8W69uKqY8eB7PMpn7QKSKqjsTxeii6bPmKuP5VTisTP3H8RWT3p2Ro7RsYTa2GDBP6GHPp",
  "key27": "p3aisVRS4zbBaQfza9y1uahQRdq2CHqyHNeaE4Rshm7Dtz2rHvjxySsWtg4c8dDcSwwQjkLgEmefmBW4i2QAWP9",
  "key28": "2BPB7TfqAaVJrba1uoApkFum2NjyeEeDX2pjg8gUXyy5ygpyHSEBo5rU9956YpGvbtbxZvKkJJh6xyqy5k4ZY3fs",
  "key29": "4xDwkF41Vu16qGV2DJd1d1zv82gSqAVf7uBk7v41HHqSFDA5eau6TXqw2MiiJZXgxVoPpTWDi3PJr4hcxVP5bkpF",
  "key30": "4Re6PnWsCooujX8PnirsxgiVu2B9rUMR8qVb8QCmmkeGmR2bXxMSBf1GonFUUf5XfrWBhcLUgNXYz5k4Ztribrsa",
  "key31": "iogzE1nHgAyEhFpJGLofKkwtWmk2xHNuCbfdC2apKVra8JCaRRSZZSD3DynfJc6RgwcN1LBM2ArohD8JCdJQ87x",
  "key32": "3UcbA6mMffQMPvKcTEddGAj4dfosDBM2RvQa2MRz7U8kvAKm1H6tUJUsR77TR5MgCnpQSCEwkvYwnEJPvpgJEMY",
  "key33": "4j5CzNkczHBNkKzQR3YFQkNe1pxYmozPd5U49uVVSUTvtQDp36Fwy8xUJDX4EAQ3E98uC16uQXyiPr9ymydmyHQi",
  "key34": "2xrnk18uEtcE4SvWx4KFppszL3BP9N7ncTdCJR9LZEb5AGw3jXqF568eDu59jnRdBcVcpJobhv3cK6GTNtN4KNuT",
  "key35": "3WFkz145kySF8tQcPckhVdUVan1QmcT4M7SR3nB59edV5FYMY4sY8RigLJga3wdxnZVGsHPFmCPmoU1gGRBFwhVC",
  "key36": "vm76y2trMjrnTVnFy52j1vCdKaX4ypSt9HQ32iKAJGoujh53W4XtGMYBDxuvnfsSYQS6mwFd5P8JS9q1kSB8MSu",
  "key37": "46eBNdURyzxa2kEsUjzJ9eDPZYkU2uFrQ8k9X66C3HRoh7CVgvTXiAXXR9Ma4MX6ftZQCTQDZKh4ZokXQEM6dQBU",
  "key38": "3SeoyEZGuCxXEq4qgzAkDv2Q82dTJwe4p8ArcrsrR7nqQjbNb7t3W79Lmp5M5jEA3jwzbzqHWRMhG434gheGZPqv",
  "key39": "2BktEaS2qxxxDfyqaeSEe7aQ53w5KFtzu1MFXJLf8n8zrat3Tb9kZwpjSxfjAFXyJXafoTuLjbiXLcAsLzmTES81",
  "key40": "2JkFFf2DQekSdbEDmezHuNUJiS3gueEdvLmmDoJLhZfrL7zNomqgUz11eFUxec18wBqE6AMyTd7rmCvZmyqu1TbE",
  "key41": "5GMqi8AdMYz1iM1fb1ZM8d9UkXZc5awiAwsta8KkxkNTTYf8Wustg8CsSutPCbWooRR1DopRCGAAHzWkfuW6YSsL",
  "key42": "2tq3jBJSfxs3M6vyDmgtH7pDs2g4XtWREspHfQNLnU79srtYWcstukhwst7N7ni9FpkVEaS95v4dTV575gRR5hbn",
  "key43": "2V4x3VtEPHnGQJguT4Z5Zi77CR7zZWnCi2y18RUxfkanZihfhFbA4VH3XVTjf2fKa9svskdaZCFSYRS8KpqLua5M",
  "key44": "5tWnsp2tHYamBupTk4U8rmgarxT4kwCin887N8bADAQd2T3rePQhfztYBfd6RVeW79FjdTFEXcTxHBUM6TnzmsvW",
  "key45": "3NkiUT8uhK5zCrPSfVSYCz6QGmhjPmVA3FvmoC4UBrxsdtpxG6LCvC6reTf1acAFFoXQRiswuqKHPJFaE2Fpmwhb",
  "key46": "2wift7XNvTn7PaucikVW3gdHgikHuzeHCJqzh3pnwUHe8aX1eqvoJML2atreJGDMNzKYrBq8YPGY56Q5AA7hFs2G",
  "key47": "pt7ANS1xdod3w4KS8qcFwPezJDfcAzyav8AGXmiNAx1qFBtBQLDUyppGtHSu8dQS1gyBnVsyRQa66VhukM6CJRN",
  "key48": "wqPJgd6chvX6UNZc5khxr3tgxRMoaw6nC8cLoeeS2eG8w6EriXQs2vzvjgcefyeBEruywVmbWWQUWXWtM1HEP3b"
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
