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
    "3tLUmAprWBuv8v7CZePbGaXz1oMCfDt14pxpe6AELf7Wcnww25CkJavZZFUtZf7VRdZLQ5TUS9f4Ken6tALEsbx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wXKExBSUjmLi8yxpAWK71QnjSUbt6sxEbxR6gpo5GdnZQptMszzi9oPTCTvsTHgPamzH2eLU6cU9fNTvr2oo3AW",
  "key1": "3ujBoLVixk7GsxWZWdJNjvzgzrahKtPNxFptadRDaPGbDq3n9MuvvMLkZ1wcNMfCQXf5QUG7ccsMueyYegNof4QQ",
  "key2": "4hW1bzkG8qieMALiNZfUSE6bfncdhtJ8s7pJJqXKTZXJPvhv1PqMszQ76cKqgyMc893JHxs4vx8sre31RhNRYGkm",
  "key3": "pJjNGaTraYsk9JzPoADaRSgH518JRVhhF8JefPQUCThZmUkLxTcoiz8LP6CKcxgKi7yGUxZtHxgEqgdSBnTF93w",
  "key4": "2sWr3nmHvBLcEYvkGMWRfVyGdeWFbZgzdXsV2JvyhA2TyNwVQrKnJn4L2F4svovVcNrRSMJBpPZVhXTusvU6fvNE",
  "key5": "3VaW5JBsKqYPftepJT4AumYiJxsv6FDaxymnSqwzNXjyKujSHhptZEJdWS2Tiz7AR3i2qasG8wQtzKhpvcA8kww4",
  "key6": "5pEDAp3fxADJ4TfpuKdj5DsXqbA3GNAwC5PBTLqnMSY8CLQ8ZEkMtf5nFVBzQLtcLPaBBroj122kLu2TMzJVQ9Hg",
  "key7": "3qqSNWzaL9vFjYeiLs8uuXaRCeUd6jnBvYqGTAfEz72t7SYb6LL5ZSpzaXjtSKakFK2bLMetqayYSjCXeaqQJ8Uj",
  "key8": "33HQZRnY7hTNbUkUjBAKXzvhs8ta3CdrTXUvYbMBG4x7LvworGTyxtHTaoE8wjUKLXm3StcHgSVjyKYowpZNNdj1",
  "key9": "2Wvvvh8R8CBYNLTfP9St4CHmFERyRumBGvJPgv5vL3uAfhYAN4n4qReS1S3GhwZeE28oB6NGLVBXGcVVyS7kd3Mz",
  "key10": "VXcADavcyYasGx1MSHA8Cr8uARZkmXmonEd7rqgdDuMmLJz92QTANrurSrMc2cwfCHnZ66bFxmBQ4xpeuU8eRw4",
  "key11": "Zq5AP1CxiHfv5HX4zpdYZtb7VZ8gGUyPdXSF7f3FQ9JVmdKViVrapLPrJNdRA5iwzTrbL6sWJDNCbQs1XvEWw7a",
  "key12": "4g5vJgdkEGQXz6NtP259zyRCPSVbYfCDD5jfwkUQKfSGKLbRZXmLQRrvEwqVvcD4d7jxWh1KywbTToaGrqxjCLcM",
  "key13": "3vxAUZVCG4r8HG9FsXKKr4FDSGFcCHAaVYrT1DSCezZdi7BF1nXVCA3Yaykeh2t3wVg2d6QeGqbCTS62r8RMP3ew",
  "key14": "UCKJB7RsdtXAmAKGxbwiMdQWVeXvhYq1oFpVsJ3QuDHywDJpRppCehhVPrA1Sbppou33fhxPjo83sLS7n8aeGh7",
  "key15": "3BjxA2L8yQSzkkgXZ69SVH9LuHGB5tKv6JRo6gBJSc6RsayhayL9biNCwccaLVEej9fuLFAQgMEZmRjFXjcBeEtP",
  "key16": "422aaASJJ5c973QQVhEaAm9FvzvogozFPBn1aRffTdXXaQmmaeqBbEdeLZndb8SHLgnwam4kqi6otioKzzVkAG4k",
  "key17": "4LTJj4JoQLPTt8yNNwdUVZiTCWSaranuSZvYiriGrKav89Lf5EXviASWJ2QiiUnX797RrKwPUt3cTJa86Ha4WF6B",
  "key18": "3mgg8yph8nMZ54116VrQ6WY3jg6N7U1QmdXxXHLMx3ueZecHGRnLTAUt2fQSXm4VpRacn6Rj5VSKTJibHNszvuVB",
  "key19": "4zKHXQqxMZRDPsjVfwbZs7RGNdiS5KuinxjSz1DzWyeYUG8qD7qtUHCf7XUSjSoPyqbJjfCxG4RYerEmkQyfjx1t",
  "key20": "2HgQBGdsxnGkTpHXjv7wEtdZcERVYzRQJiFTif38XrjaUy1zPRRFgf4G3gWgu9Rgy1wUHfgPWFj1TcT5va5nD7pX",
  "key21": "2svN1EX6MPHNpShDHuNKfwGRXWEdNAA52dE8u4Eo7oF4XRN5koi4iiv4FFLArCymPHkdTJMqRXkoH4ihJw3m8EDY",
  "key22": "4V2LGDMeibG7UVVkMLJLFEtSvfJcazn99dgxgsWk5xwtF4V52ZAwbAPfqijxcfB2H2rCm6zw61q5gb5tj78ddMZa",
  "key23": "4sHkNZnsejqRrcFxGyjHthTvJpbCbAYbx16hjJ1Gp8NUeBHG3b5Fzz3uBvknwSWjmvrKQJfD6JvYh3XKhkw2qyRA",
  "key24": "3tVaDv2Rod2GTMQGqkSBVaRavTcufApfi6tPGdFzKSfN3nKxfzfzURBeR9kaMu351PRZNYEHhYKrtL1JKSrRGp9z",
  "key25": "5HuwV72zAdDEGf39euQv629AnvSy8rYVgdCWhp2Dt7gYUxSvKdxA2iACsGmU7P12scFMS49c3SoWLejQBWpShXGA",
  "key26": "3z6ksm71tgbQvf63nR25xh1cp4sMgfAUUK6dRbEiYFWE7RPV5CP2rVY9tQtCPJ8xq9ByvuhzwX5GyPDzcm6AcCGs",
  "key27": "4HiQyQQP59KqkruJVyy3qczyo6U3NSo4fEVqAXkbj7EuMKuigb9NCiJHeBHLhfpqtKUgNWMWhr5A3C1LdBTD287J",
  "key28": "4sqtLAVczET4tgBBuW1VSp7uGJMQrqqyffWEJKBAzpRM2TUQvsaJxRQ9p72GKBVUqG7xoTVKF7qTtzWAS6B74BwM",
  "key29": "5i79WuxBtmU26ssZEXQRxeriSypynHQhj7GdWw6hQduyCj4LXT53yFncmuT15JLJAJqo2tQZb9eEmTbVRXVggwdj",
  "key30": "5qijY3c9ZxANg5sstNvjic26Cdm6sNFL1FUkk4cNxkzwmGQXaUZor4oFV3UuqUZkYxVCmqyXMEFUfpKNkwTcNLv5",
  "key31": "3k21PPZPGspa6sCv8bZBpyYo2cCtFSm7VyxctyiiGTZ5fxL4BzXrAm6qYgJZonAjWunJcMto59cTRk6Gaqm6CLKz",
  "key32": "3o3fhb1ZwkG1cU5iN9KAFXMQaYCaM69aByXaPCGNMMSMmQUiVGPD7cV7wtz3FPtQaEsfQjQZDUWmsuRNSbXyVzhm",
  "key33": "5DA2y4xJhZf7wboUVJo46owPdmzukVEMn2tLkdCMAGED7BZjQK5KBMv6VkUsgSbuwZCH6xWT3E6ZAw8Wr53Brs4X",
  "key34": "53DZteMw18qAPGR23pVP7oiJe9zPCf8FabvnsmSDQcNiEpYwBnbZ7tk7UBoCHugrXeGrcCQq4spkg2tREKjpi7R6",
  "key35": "62cDfENajkWYN1GTyz4FL1VBPDDxCYvn98meb4A49xQexyeY45NdmbiLja2b8Ed12NSvjLA2bfP4mvWjV6bixuby",
  "key36": "2fQK2g1qx3Ae3sgXukCrfKiRxgFqzedzPSvXUcbMXpBEHCYJRHNij8tifQ9fRkHiuvKNjQxwLNSLYeyiQqQk1ehW",
  "key37": "pDr3z2FQ7FLEsFmguDJFCW8KWoDhG6fakLJ6rpVRf6hK3Ekz8Gq93yzZcNpJzmATDKkS5hAdrkp6M6GEJqrz6nU",
  "key38": "5dLx1t7rjRXLtq2jgHahrWkj15YWb9mfuyJHy6qpT6jHAmoBdQeKeRvkAfA8HjYAS2jp76T4JQE21QsNpGhzNbw",
  "key39": "2avbdSNASgT9T9qsota2CnyXqzBhF2xXxdaLhRGHAxgEDAKZhV1k6a4MEQhxtJFQQBurWc1S7cuSRA6KB6Gwrrqw",
  "key40": "5v2iypVvADLeLBYQAyaT6SWd1QpLVwMVYs5FuQs6wod2YXsrH7B7Dh4YoKX3UJ53iQE9REmdNo28kEqZyM93k1N1",
  "key41": "41LqZjvGj5EMmxThKxbqWoqdZt4qUtt3uSYrNibbG69QyBz2aoAjMyRRoQrZgrtKv29Wbpzv9PdWWYDNSono7cX1"
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
