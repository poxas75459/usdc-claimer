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
    "eeRhXVr7otmQdeBCaED78ckYyDCex5ypyu5ksQmDVuiPnFij1syQaqv7q8nR2TUMDygXxscjA38o8u6umV8M5Na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YHpriMxtKQW5NEvVYd1T9bbkahun9Ex6CKKux8ji7enVu4yYoAJNVLvoyxy1wDTxKYB7CQyrnm6uJJrkxfsyhB",
  "key1": "55kzXH9NswgFZ1ncDEvE6Tudi7JFXJG37HMSh195e2ukz1E7huxqZodnJUGmuqEa91Roi9fb7TXwa41kKhGKTRW9",
  "key2": "5G5UZjTc2LzZvpeKsXdjKSzkaaixwH3c5YECsgLjgouoM2YCsigWkpVNQM6zQzc7cvEgJrEfoZ65HDE5iEGJ2qMo",
  "key3": "3UoZdHjARe8usSGW8o7x4soMwrurdyNxUVbfLxmkH6og6d4daao5ZjRCQwytNw6J7w9hqCa24ahqBfzBagA3E3PY",
  "key4": "4Zp8Sp35S84dH8C1aP4qABwQKDc4oCUrjaEdwyBnwJDcd4bHuP1nb9pr3xqYG5T4wRSzGn8tzFmXHp7m3ZCRDkXY",
  "key5": "3ZtDfNgoFuknGmfmVjN697SHHG2eCxTwHZnqZBtaxR3ysD1iDExf98XVirL21oyvpFexhe3cXEdCqJiqcSdM6rKw",
  "key6": "3Rvt5rfGeWK6exP3R18A82Why9kwLAnVRx7kFBY3YkUfuL5gxBfxD3J98WzMMiRFzs9v62jbTx4y9xU5qRWu1NSz",
  "key7": "wVqfY4gW3GHyPhLiZXKoL9MZUWjSqCccfrJhfpXbBiyCFGLFFKuUjhymX3mqJhQCRf6dvRtiL6Nf6RHuFcGEBTB",
  "key8": "2z1znA3b49KrWsALoJmAEA1KwXVQar6q9aj83QSyosX15kb1xp3aC9Au6JjQ7tWHLDpb6ziU1an2WiGS87WQRCRg",
  "key9": "4zDh89PdgNcV4CvV5yLSHpmZiCy19Vpox9puti6bhaQt6sQwxyEgTCD1UDU1AJY5y3A342AjGbsmSEQTkuySsrpt",
  "key10": "QeLdiXXgk6Wd2dPT7ygQa3TwH2qbaS3YedVqGy3MbiCZrtM44Tw95jpsM1y1GzsERXRRozdKj8MCYtLBiHGBbGv",
  "key11": "JVf1mCYdegaZBPTPqoztTAnLfiHLQdSvQJ6GeuEEmSMiJGKriRCi6mAnZTrNbofot4nmvSLH3RxXR9zTryDy66d",
  "key12": "2bscfUtobsefgckQVxovozfWnPfThAP5VSrZatAibBmN87opJTpZKdu2w4bnhvg2EfGNXz67AD94j4C1tBVkdzXX",
  "key13": "25qwFS8yf8L1Dfs8HP1pbhDBncXQyke7DLXCMuD3rqzACKmM7TduQk4na45oCbJQKDucZdkNBvToWZcvyYLmdJ2g",
  "key14": "3oM9sNkFDk1zz844jJuQjw5Ej3NLp7d7YLnJa9ozoB4VRRiTXu87zGxSBsp8jCrn16boW7hb4f5biev2pMeBz14j",
  "key15": "2PjZz6FnDuxowAvL9E2vFVV1PH1FPj97GNYayyfp6W4i7eawNS5ER5fEuu9rVvMvJjYryEqP1vcSAYjxtHYAQgjS",
  "key16": "5zVwU9YW2uBLQnQHAX6y5VuwCFLzY1Wf1taHgTThS7mWdgBM6yMKyX59kNFAmXttkW7EXzQM13GofWLsCvJpnRSM",
  "key17": "fbpyCEXcmuueytjpXqCyZtHfFsDh9XBzCefCSJ8X1H3s5HprcY7KX43p3zKaz5CLDGvaLHAviPXYwZyvJvYgzwa",
  "key18": "52Egwp2kgcRssrGAfCafPmXWxXRme82HYJd1vGDVeSEqXLf8anNpFs2QdsSAfWoTa7yGSTiE5oJCzVJJ3JdD3HWp",
  "key19": "5dkGqhRm4FcJz8BBJeXTwP7frut7KMNgoq1y7er5Gf4KduuTsqzYsvsgZAaMcuL2sSo3TxcUtqwJnbSY3UVYDqCE",
  "key20": "sCZJtvyseGRfK5dXKeYSni18eUCRLh2rCnHhBFquGb7knemBnj52XoS4ce2tefu1V61NvWiFsSeG5SGwJgVZV4K",
  "key21": "27z33AURoG1KCLakxdcRQPiZckm127DT6SXrS7Wpw4P9BNsJTKSso8r4c42sAqq48BGFowtVC8PbzGcET8j3JGir",
  "key22": "2qYxoSsLCWRUvpFRBn7mdPZFPN26DLqWsXwBC6nU2Rs65x3GLz957gbzECQtJCTknKDays5PJBTuYJTWeBbbVJJX",
  "key23": "5xsusn7qTCPatuCsnYrx9pkXW3zgYrofmazEfssAY7WZhbTPY5PYwHiNqTekaa5h2rhbURnhgFqddCJMJMJMqNTn",
  "key24": "5T4rYST2UFmiVk5Z3Zhb2RY2tBHou2NF96h4kLC99a9xZKh1k3CEPa6WJEpYtjXXFK4cjB53F5opx6tDdA5mCDyc",
  "key25": "5FnM2AYYpyyL8tz5Gry3s3onJr3GtrimjmFZu8GGzJWd3iCxxYMbCrL22caJ9wfyctaE7TmK2HMKJLVd8mUUgDSG",
  "key26": "5k5K7u2hh6VYhAd2KcaM58KBt1NkwQ6hMehKS4uW3bL4gE8uRWKYP8viBvPhssAse8BHUyEfw6jVPfM6pcpdaUZe",
  "key27": "2XRhor24aoj1Cm6qcHvtyv2XbSm77rcGjNmhMLjLmf8YF6yMnLTP1CUQTidrSko5UuACXCvQnU4NJGXXSuyqqHd3",
  "key28": "4jfTx4FjWSv1cHmKZKj6x4fY11CBut1fExdZCotABoAoBTG6YjJ5fsiNBMgT8CYqjEVQBjq9bk7KJt1haaXvmA1A",
  "key29": "2VokQRSHjmt7jjYziZwH16zDwuFrM3nxez1p9QTE1eW2HHFUJichf6CcXsZqMHQEiZFFoPZSkgS8nRaSBju6n4FU",
  "key30": "5FdcpmHqhqKCJTUiB3HpLLSz4TL3buraD5BqEPLNUfVtXpkwVT3VCYRkxq6viG4NbcDEqGJQQAHfL3yVu2WNjbVF",
  "key31": "29X9vEjNbr3SerU1BFbxcRD3xE7qQPMbLrfcPQiXXTi6CjXycjoBG2pGuQBNSVG5MExYcCXfZBZQz8BVtfBQBKvm",
  "key32": "sHZdFrXKZ2gbxM9doM3aW1oF4FQ2XW3tvNvmZ2KPymBJ2yRS1dEPe5LBJ4X5Nt2doz4PPi5YNg8Qm7RyGLqvbDo",
  "key33": "5xLE6KUqQubfb5sxFDimjE4RsSMJEzy7mdRy8dTviNVMhMiatiZbQSgsPPHiSSEVNdSR4TdGoEhF2sQJGrTVa9KA",
  "key34": "ZAvyreSMh4zhLdA7Mttwnvu9i4iXsKCmd7kFyvpBYsSRNo9XsV4v1oZABuhio9DJwA6YR57xQNZKNyAYwaL6tsM",
  "key35": "3aBcZPy4tBS7AHUEnmwUATZoFYAHrJnGMf3hftCZBMRHuDc9GE6T99eEZe7yYgVx55da3ZozMBcjqMxkhxnGUuop",
  "key36": "5C4inmjdoyUN3e5UeXN6G4K8CeuUE2guJE8eyyih6daPAh53yc1R77BSquDeYXfwrDhGCUd3BUF8Eoj6rMUeEeE3",
  "key37": "Zw6tDCvwmh2E7soyZpTBjDBtFPM1FPBMoQJwvhHmfMX7r2MreYzdFerSjhWB8kPY88VvN5LFznWGdrXmpNA7wew",
  "key38": "3noei7tnhsH89TYf74bbyydDXZ6wmKbbnDhAc8JcYqo1NCxnE7GVqQmQgkC8esyvrrXRJCesyEuB4fLarm9RP5BM",
  "key39": "28itVL4LEJocGZeXdBLjoeznhUX79366G6XeVh4LovB2DhBi8GyrW1AwwHhJKWw1KJhLQAzys9wCnerHt4aMtt4Y",
  "key40": "NjEuV86AA4SbKkqdfXZVYpE7i1DG8ovVzCnvf5BETi1ZEV8uubkQ4frmEbF9wMzt4Gc5JTZYsWs24FkeFCEhDiy",
  "key41": "5t4YvjDnZePCtBaS2nntJDkxFYMpKqt5ELUArEWvb5pvph7GsP5rdE2uAW25KBS2kW3BcKmwa2kyK2DCP8hYDfdB",
  "key42": "64oU5zgzu8oYSa5BSQekk2FX2JU2SQP1cuJReJA4UUXY9RGE17uJUbpdXFTJZN6HpKsEY3jMzjSWzcmuRYZ8Kq8R",
  "key43": "3C79Y72TXapHGU1BPoLRFaLXzPUFYLTan52vA6YgqrcdBdDNAw15R5mmos67ES4h6iqrdfT7n2ezGZeNp8YgPGw3",
  "key44": "3f8FK1MP6kosoDVggoLBWq7f4t4w6PXUxS9CoNayLFdatNK5ijxoxUFsZgv7Gd2navUFUxyivFZJJKVoXbSieZUV",
  "key45": "mVpD1BegF9GMmLrmkLKCQ1WB8pu1oGVACuTou1bEsF2wfTTid5aKSCquEaD7bUqmJbGz6kqRsRu33K8DgL9ciNb",
  "key46": "YnNgV6zFeRd5edEAGhwnCC4gRJjZcQqwwetmwQKT59dr9czKvASe9JmcGcsCiRMsREHoa5F2W6B1sbvfu988g4Y",
  "key47": "7uqWWt59ifuMFhRhkQGA5kUuC6p47gqgeT4wwEj7HjXqpEgQL4J9ZmwZrZSgKzMjDYi6oZe5w7EoaQ2SQY6imTa",
  "key48": "3JeQ7srXtVsZ387FTq92NkGgoxfFBMjjrUDsU4umAcLHBptGBLpAWAHfbGW5eGdAbLdBvHGFQF9VYNrPbEwH7CMP"
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
