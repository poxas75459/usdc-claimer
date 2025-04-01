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
    "94affMXgwZTA7Bsj62e25WT711ahCdQpFYYhtfwUWw4yUW9gctZLYLr6he7gie9uFgKz2ep9DZHqAC6BNa5MmKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25vjS2K5WNhXKoTy5ivf3qJdAqM5pvtCyf4t1kkMiuSUnMSfMdB3YYCQ4QAn8Rgiw8VFnLLVZq1yVR5AXADqKV7N",
  "key1": "3qGLi8hmHSB81jY997duBJyy9D2g81GLZ2TqAf39FqjHyQCB7LLQJbqWFxdt6nwLL78fP8uZ7HfqPBfr1xa3ke7W",
  "key2": "26HERVkFczdFLs1b5PFqPG9q5btKBwXUZ1pTajtsLAFi9sipypGuxaMdUTqRBR1eK6oZRxuiN5wTSq4P9xrbe6CS",
  "key3": "4zDQGFJfhoNBB67bQkBkQLR6yfG2ZLjzRuvsRvLdTrMgGwrofGLjanjAAbhGD2oxcpWq64TXgEhzreCubxTkQ4iZ",
  "key4": "4jDizJUq95H87UNvnHHvtkaWBmFz5NxKJgGo2YX9CGiyThK3NriYT78oa9xyqRNdBLBU9PLgatEE2rhtfayk8LuA",
  "key5": "62BBPLwfFX3BoWkJKX42NVxaPpiKXs7YaACYUgUwbUPYhY4mhj3Ghgsjm8uTq8sS5BPJtG8MUbB21b4p7dHjgmic",
  "key6": "3zbJ9LHAZJzAfJdqXqnHwrNyJHvP5UjcnWwo5kUPxke3WAnr7sFYzZcWQSsQiQsY8YTXnDdWBJX9CGxUrpJ5zT8g",
  "key7": "2QDzbyoDQZJYKYHEwKwvMaVeCxSg5c4dMFfprEVwoht6EKhCNPRLE7F7a3ZCNDiHfqmEhQzx8DYaxXmfo9um3ehQ",
  "key8": "DUvLb4YXJYv12UXZYapM3GZWXMy9823yxZnMudSF97ZdGSqoVrzKS8pdFgG1uJfVzvbNxTjn9t4kERdoSVLXBGt",
  "key9": "2Y8xwK2UGf4PpAWB9PJc6b47kc5MfVT7Kq8rbmjgVKdWMXYRw3hWurjWTGx11LDU7nrkuFEzo5Rvo8ggdwwDYCBB",
  "key10": "3EHEoS1pPauvDeHsXRb1D1arjYcbjaAtjKF6Li7QZhR4wdbaQJ24RytngMeLBXHZg5ChfUtSsyqYLWzP98YaJ6HV",
  "key11": "5TtHrSj7X8MYi7WahCAkavCBY11xQ6PzjjsdZD4K45j1uQiTyqKCJkcsBXmvPjCaFUqL4Vp3hbpGuAtKPDi2Eypk",
  "key12": "pUx4Kt2gJLHY7tEZqcVXMR84FXpgiGhpkgV5fc3TLzFGqWFvfg3XW1irxuTBaCCFTmvdqWShMk4gq6vWuczzHTg",
  "key13": "8GJAx4UhzS2PnAVc8XnoMBdxDsGYYi7NZqzvRRCRQaGUpxhE9XdRKWfuKb2naeoRcnEVvRXvxvitGfrsZwMg4c6",
  "key14": "3BcLKrcxyo2C3SxCwLa33SmcnLWdHtzr3ws2rCSwh3LsnYGTwsoHdZXDxKaB18rUAh6ArygywZ6z8DQTFvPBuFTX",
  "key15": "62dyYasDuK8qJ53MEXbMhDGJ3b4j19fh7aHyHNDnAxxHkHYrCtXyj3rbLSKYMJQYNhVfMP9qniaHyMaUt4YXNNio",
  "key16": "2eD4X3uF2F3CCv9AxuuKXven43HsN2UTbjmAecKJ3cPGzLAqDLjdSKDVmbDhPkR4hVWkKhjJEiiss2c5SDjxwXEP",
  "key17": "rHS1iqufsj7LKwobPt6qqsqNVV1iWDnU69aSCBuFXnbCuKHBqSiWaTZXjFjxxAsLFSU2Qts1UYXpFUyfEPn7gsJ",
  "key18": "5wt93EsNqkKwVhARpUq2Ci7h9MYpRpeuKDjwKZgvjoskUQ8hBuSriL6HE4yVv6MMpC6KrQ29xUWgRum9uJMV5DjV",
  "key19": "hN2wSQViteVUKr1Ke3hwNV1ReUwhvcEL7Qga2QFSEq1aFwMRhy65mRujGZyvJaYqNHnxZ1V8wR9TPRDdbQV3xcg",
  "key20": "3K6tLYVo3vo5yWhzUo7w2pwUx9XzbSTHnziKULKDgXHiUqvCCGQ6hnSGy5Y7xt9JGZJ2sRdqxxBC7oHVhuNEo76F",
  "key21": "4umHKXp8Znr7nEKCPMnRYiti7o9PWVmWVeqc7cvqHY7QKGDne6f3zxeX2TcQRbvLfm6vXdxCiv2eAEPQyfvs418c",
  "key22": "5r9mncpudpDmVuZ9GwNhoTs4zzH2HeK3EwwdLNfzvroFoFMpWd2XmNSeTpjQyGa9d8H3MWZUxUx1VgeiD3w9JRML",
  "key23": "4FHNeWyxsoDW8gKemzqv2AYbAVSWP1SiZjdadPPs7tVsCBM3JAWsZ3EUrLNvt6DMYjRUGLBKcLms9MDx9GjPJEy6",
  "key24": "5JLkzm1mk2FW5LFe2uCZpKBhsgPuYBbmSrxLM4K3JjeixRSCCAjFeaq9g7vCE76rwrn1SdoaEzNxkDWu2biHtD8B",
  "key25": "5DZYBmtr7oL4GhzLEvFGKf73zvr89yZJTM6j86btBuTz6tVniFjyxEAeJJq8dr6jeHgCcKJbu5nNpYvWDaxWXQ5Z",
  "key26": "4tX9EA9w6fJdeaW7nNwzgdpih922JWddWwBihbvcdQB5G2HnGEDDz8uZR2ijPLTB2nsQrpJTSAxJ5XTXXmU5F2tR",
  "key27": "3pRj5TNG3aaUvH7KRtX4s5jM2RNkh88dAPYC6x64xMYgKx23H4V6TCodYvDCL3mNQGHyMACjCS4Q8KXoVtvvYu5Y",
  "key28": "e3BqGQZmCKfsZb1kgeGT4wcPCMinE1NSsXtUNwAD94ikVe1bY7M7bzdAAQERmZEGBFPXkJAsfkApYi2BpDuU8vL",
  "key29": "2dKzXEeDDx8LMstKxrUFQhHmhU2L92TFscRwmD4peLANs88CZheuhhuvZU4zLchY6Fq3Ggux1VZvhVFDUymRwyME",
  "key30": "3p2tiNMGH7FFbYSobY2t4683jnf7PwbKrZzoSoTkZaucy1Ymyx4QxpHPbTDazxpyNBC1RrrBpUtajKk6kXwUZEtA",
  "key31": "4AStoeqhNotJuD57pSZuuQaaCo2bBN9XL74AkAfV12SSUuYojTqLU1B2hSwsyURWDgh76SKbqb1x5ghGboszhi5A",
  "key32": "3GNuGTwJhKFX4kzJjrFa4U49w8Pyz2QSeZCXAUfDD6715hQzU3zQwRVy8PFqHwFzHLMxeN5i2bEG7Q9dW5ndQmT5",
  "key33": "5Wx81eieQCyHYriXETfoGaDtrVFk49D2umKEm8VyhihNvCAZaEFUysoLE7PAyYQdFHLgq6bA4f3ogJeLaTZWSCpa",
  "key34": "2ER13oLeeAeXUPLVhD9SaFP5aS5zSDknSxCtVD5MXW3cw11F2XsZsXEbBwukRMvdPKMoH14B8Lb3YjjWy4K98ZBb",
  "key35": "3Hq67A4xGqWTZUyCwAKEognRgDmTc6rtMxnpfTTRCmfM3aJmdynCjo3SLjd35Pd3MwEvpYgwafuPod28ppR3pWTp",
  "key36": "2pg638SYfmgg1Bcg6VvwKx3zMz8qq5anMHJEMU8yn75qzkPhQ79ktfiVJ4D6PHirL1MAESTRED9Vi6aJ87J8Z1AD",
  "key37": "2iZr3y8EVRoUCPxZrnsi2k2qpDRoGnB8dEH1RP1crHJGfvBZYA9BLFdEwGbxnkkLMshene51DhZ29SvqqLXETFEY",
  "key38": "QxCc6Pbsmnd5UjchJBJFZrAYEEVUNDGkiWfb2FDsd7rjcCBc56GgqZW4wrKRcxMjzBsitTpMn7AfUAme8bNwQ6u",
  "key39": "2gkLLRXGFyvTHC8fk9vZh48BUrbgQa12NFMLzgGmdiMmm4MdY4hsRoyrDxChfU4mfpA65ivepnPum7CFfyzh1gZn",
  "key40": "5T2vXL5gC3JdNsSAUr9rN5oZBdGnwDCDzy5qEFta3nm4G7org6wNYTetrrs64Qg3Mb4oxhrXFm3dg6KLkmHkxfJ1",
  "key41": "5bYvWCiBkc2KGa5y25mD114iLKmbeqvsKfc6erQPu5GtdN9FcV4by5xaCpqZUardhugJ7YLAKcdox4VfsZNyoEUL",
  "key42": "3YNdoyLvsbLCC6bpF9TJ6Cp531gUVcTcPXBr3CjdcAqzLkRWZRRNiga7aQPpw5CeZ1aV7Kk2nFHunGxfPSLyECcX",
  "key43": "KbXcg5icH8TDg53bAS9SjYihFFr7SNyZ4iE8BnQ2c1EtwjmsZNRBEN9z1m8EKk8b5Xru4SNzmr8oLvsxjGaGWoG"
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
