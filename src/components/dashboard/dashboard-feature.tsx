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
    "5MenzErhPEtXLvYqKwCwdhanEdhjQ8QHA4kC6ak1DmzhV4gw9ePjWxLRGwnCm259QDSs7ihwRd2KiVQrjeCR8y2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QVBQ6W7JgcfBW3hhvFue1We7jFh5M15cw7eACA8g4MUx41SzqVMQpBxjs4YUPnzaTo2x9toWBzLqwHGb91vdCsj",
  "key1": "5zybE9SyDmFixcB41UrhnQhAPtDJSwgemnnDVBjGDb7sQGbfy22FH5o2Aqjpv8HZWapjyg1AN6fLqUAtwWDGL4xK",
  "key2": "jpuWbBQ5hJ1obLJXNgtxTkDgyc6g7Psv6jiz9e1Wp3SvmwmTW47gLFMgwqDjzvax9RfSLr1tRdXtCGcQoMppbud",
  "key3": "4xLeMYCdg8VjepupnDNRjhZvvmDzyZ2K8Nw1R8tXo4EpVC5v1vfon7wer2B1YkwtzRjdR5i76Wya1umuLSGHnz5L",
  "key4": "5KHkiaPP7awrT3GnWpyem7aXzWefNWa14waUTpRrvyPKoaeAkSWpKjraruRbssT39vxGxGRPsyE8UbbM9uYm3e86",
  "key5": "4ZHWTED9SzCQtGZccmgHkY3ZbVhWkjhZAeeRTkMjHvjDGQW7qY77r3CeZ3Jche1ifbofuNwRSwN55aAWkQsVCCv7",
  "key6": "5qeMPqq8AQgpZfRx2CfhVPWvMrWodFUzxJ4bMVqgVqtp27LopLg3SEj6FbmG7xeAgunbi3d4r5pNazDomFDamyv4",
  "key7": "58wyuqiS2xC5qwWNyRi3ASZNZUBBDsn5jhrxSXEedV4xj8ynV6uNgzwyKqSeFerRqSU2g73nHbra5KxMeSYjvo52",
  "key8": "2nUTMqbJqzxBJc1KcPtoJ7WCg1Nm3NWRStCSNFCjZ99UGTTHHruWYmMtJaP2JP9hHTTzQREqWLkj6zFwUHqzuCGt",
  "key9": "4vEmtfoRQnHUYpEkWnhCjKfXWRiCmAR9kYnLnkMMEatV8yHwGtDJaRdMu1UVocFn3bQ4Z7L3MXDutqxYNpU1mWD5",
  "key10": "5EsBxpxBMtKghLmvT6h8hCY1fNNGCdiDKdireqPZXAEdrB1bzfJdBQ1qY4GngD9kksdv9F1QhF8ERW8Hy6gySftj",
  "key11": "2Tu8w4HMZ1sh8hvUwbXZsmqe7uMS6DYa8bCQbY27MQrzGkBP9XbMRfkjAhDNWmpfywW4XCkjCaxFD6h6iqcqDGdx",
  "key12": "5rttBbp31JLbR5hV265p5EivsAEg8CVB47UYJnzoKyTCMV3SLArCjnzPvV7Ewihdpy7wJbV1LkZAR7aJCFTKGdiY",
  "key13": "61BBm7GaxV2Qepc7cDSfoEpfReecBftwZABkFKgK2mf89F3VDYNaaHBVEJWUwSAXVXffUcnGENfQ6YJaQJB8K1fm",
  "key14": "5mwndHi6KiuEMfAdNZvKHD48P3Hr4nbfkm77DELsqqt6Nw69AU2xrD9icHBawsoz8ZqT56C3GNZsKSccipgHKTpb",
  "key15": "3RnBsjLw7V76mPW2hjA7kSs2ZGmnNhZd42XHh95smsC8PS9yarrVPjnGN88FRP5Gidr6aBppd6vsRc3rJEDqdtD5",
  "key16": "GiqAjP5sBLnnmgHcNqdCtAwmeE6LXr7pCsTQjQxa3FP4ox2GWH4kZQwAWhoaJS3szfdNsaBny5NTBVpX6FAn7Ao",
  "key17": "5e7E48TzcqjwjmhEdvBhQZd62SRx5t3hofkQdzBR4Kkcqk9bZwbLtpBy5aM3dc2sfT9h4Uvf6iqeLRWxQvsHRbJb",
  "key18": "2jDi7WwDvBjACrzfGdr66HDJSkCs8nhzZUj4ghL8Y7f732S3TpDGMggmKcuGmfHn5sbRUkzaPVGDksQPApZhhgnK",
  "key19": "BumN9pKQpHpV7jBESsp14cvYce2hpmKt7QejuR8jquGN1vHMLTtSo3ixyfT6QxNCJo9h3pchX83po2kveEZVDtN",
  "key20": "3cgDLiLfnKZBUTMB2b8KNYMtkudH2jHPpJCVCyttPU1Tb2QhJiFsMEgQi7KTymJ6gdXNQjVb9CJPmQm1DxB7zsPS",
  "key21": "4tgyfjyodWTdPjBpwchuZuTPzTovjftU3wYXGhLTJ8HR9t6AwKmYJMjtjook74eRE4kSmn1qK2sZ5AS2cFinA9Ek",
  "key22": "4iXdBDcU22CJpzuzcKJjvhj7Z8gWyV2r26F4ghS2MdgQMhnmvtjPgoCbucefGzES845M3qDRAgrM6ADqQeS4xeqa",
  "key23": "4NRLm21tNbyEkFiAT7qMp4ceA28UM86fkP8XEBQvThxthmC5cXUafa6bB7pMBapxp7ua43K3yQzzSkswS8pNbm5M",
  "key24": "48RFXSQbB9FPoGeb3ja8gaz9F8byrPGQgJiuQHbXj1QVxviQtcAnHhtZfqHGpYDuYttQig7g4i7Nt4ArQfKL5ZHd",
  "key25": "63Fyq7NZdXtQe666Sg7ewBF8enrFGGMd9PVoPkSu3uvZFPfjdF3AGH3u4kgzAgezdjZQ9RYDWzNQz6iWZmttMzff",
  "key26": "4uVReaHUzbuoh59DV7HGDgayayutRKtxrGgXSGVrJHrbypn26W37pjmoJTMgmAAPXr65y2sDowbK6EV4yUGiwJVB",
  "key27": "2o1bfNWTg9uTB47PEz8B1XPTtv61wkS6qZ89kvNuawxMV6bKqhPYZ5AcMFtmt9fqdsWMR86ysxqmUky3e8ec9kg8",
  "key28": "reiUvAiPQefTLKSSPWD4bcLjijnhJKXzr6dM35yFG8CJGSEqcNL4Gem9i87AfsuQi3Ci9Fsts8wWxn9rmyhoP7H",
  "key29": "249zMk7tLowMZB3a9M81bjkuzhpknYVYBWAhk4pLQJxZTzQ7K33AQEeLaVbVAJuAYYA98XXcmuaWxUXqzjbw45oC",
  "key30": "2bsyHCfqFtytAFHWL6QQSgew9aYFpALbzpdJ2XGuxSVisUerq13dmTnmK4waMh4cpkCXoP1TqsqSF1hHrJAXyTEG",
  "key31": "5LGvtbWmEwCPadWnAeUwQ8vuEj5UfSFK4PhxYfwZQhKuCcHjyb29eDUXsrPhn8KHrgZ8kNUEnJ4ZLf5R27rizzky",
  "key32": "2FvaN5K8R7uys5FSsYYTnrp87zW967Bew84DFC9ATpbkA9tMDcCWgvuZnQcbqAToaLN6YUmz6CyxjSWsN5Um1bP",
  "key33": "5taYUQh3zUMDDjqqEm8VhQcBwcd5j4s4D8z3qFGVcDeNESzesHZb2UaH4BXNGGEVAF4mm8UG4VSpgSCoMY8ZDiQe",
  "key34": "4EQBsq17bsJYREA4FfSAVCkXqxreuKNbh9w9PMd56xnZgKZjm22Av5D8MZLGYeM49dxzCttxya29o3mM75EVWKqq",
  "key35": "5nYCvmjpoK4Thf2VXMtLTTWoC8FPwmqSyT7Ao4D9Wi56cwN6EWpkkDhjTCjns2muZUazdeqC4m6j83o9fTomyPqh",
  "key36": "UiDyqzMBis8oCP8XmysLG3nynh1C9mVVR9n5erFW7cV7z2Mp6zcrDmZo43os2odpuJdimS3sx6bUwGLFCrMy38d",
  "key37": "5z6WhYhaLRNRLrdP6Zwdk3ECF9dm6W6HMcv5u4qemL9Hwh2KkUEmrWUvMD5ZeTaos4F5SjVvm3HFNFmZcEH6kx54"
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
