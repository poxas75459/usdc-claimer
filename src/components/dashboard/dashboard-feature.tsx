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
    "3wYm2LQkZ63WA715KTjGtrk3icZPAoMJaQ1pw8kwiHjq4mLC1tmcPpgsBZVrZXqge7FikDTZ2jnChSvixhFZq2UG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AGLfEhLpVMXx2QNmqtu6LSqtXpbGCrNyyo6qxJpNVQUh1Es4qsj9w69eaA4BHdbQzyu8YMZbNzZtYCxghWfLZfr",
  "key1": "QzCezECu49bUvhJqYsCvDoTHYjX263wieWfFDTHpPxNJXp7sCwXXHKRQR3TSz1esGB36pEmRRwnyPH1cpnB5HLh",
  "key2": "2Ug3CR9ikeLSZFVtwRz61A6exfzQgjiQYSj1NYnFoKbSJ6wq5BaiFf4EW4JBMN7T5yrirKNKx4CEXGKHoYz6ZE3a",
  "key3": "ytxyrkmWqnEXekhrps6PGmi9j738vvdPKPteKjfXUGRUbghbQGpD3ytG6vGYDHeTytY9Zg6VDzt75xyV94dxtyE",
  "key4": "3WecPN2XNDLXKEYi37VKjDxo79TqZEx3vsTf5KfvbWtBBvyJfDCiFJkwYMF8F4RCQDvVrLRtEqTM6dCfoHGApsfx",
  "key5": "2oMn6j2K2xLXouEXBrgJroTZLN97tKBh8if4XHNs5HgenBh7JLy3c6ZdhQkWtdRzrm8aKWaX1awgufmsSgyxFHfJ",
  "key6": "399gYwrboRCJt6VerQLY1cVqgoSr188647rLpKui9mvAG952CWhh2LTYAFqvPdQgXW6BUhyARfwkDa8c6o475vYW",
  "key7": "3GSMTodqLufF2Sx4fHatrCfasCRoTTVbzqpfmtkhximb5wuRM4riYu7Zy9xyaLju1XFhcbdYTK7dMGzjPrMFL7Zv",
  "key8": "5K4MeP5QiWJ1VVq7fPxUXSRWQfv6RgDw37vK84ae4bjpJnYDkPdmrvZPRFnim3hdACiEr6v7iZmzuwdAEQpRGJ6y",
  "key9": "2hb1cA9ARwghmMKKMajPXQjfyqkb5sJSRKxhrsF1dppffqR5rgGZNZrLLcDNBqJEVXTpxq1c4X5y6QWzX8v3XhYZ",
  "key10": "eAuQbBJcLhEed72KDpvxuFHYJgtPBwjByfsa77nhh6XhDNmFchZEnC4d7uAoKU7cScvx3UyuqpPBNDwEBDqz5Cx",
  "key11": "4gGY8Na1UeTxUKgBWfPKcHLytGQ5AXBUR1ZoB5XRvzqjPZeCxWGfp3m983LvXjJeK9fUUA5R7H6ZszdTzcJDo3EA",
  "key12": "2X1u75JsVdyAqJ4p7BnuXTsS8KjwbsPtEAoDfytZLj2RaP83UWme3QdBoYjGtn33JGJdNTZpNPouFZKZgwj9qCK9",
  "key13": "XRnmDDNE6Twbvte8LzUJrVD3tdnbaMZiYqsRwWK2nFH4Uhr27sR73q2PWW74aWbA5fVr5Y8pW7DPqEeMKg3MrRD",
  "key14": "v4QhGy5j6YD83hiLdnc5Jwj66yW6duYw6bCDHgXUFi8occBT3Yrc2VRJvjaMdHaTsaLHnHi55fVymhsycAoE7V1",
  "key15": "5xTZdE766QpPDK8t96hyUq8ysuEV8rvnTmcT7K33gxxC66VhhJbAzWZxyTTxUX9hTD4TkVaFoR5RrV2W8BfYLCJ",
  "key16": "3Pm84on74y4THZhiSxix3f88AQWmvGFQZUqZtsJKuNjZQESSF8Ujbhvux3XaTAsAzArPEenyZMa5sh734jYvjJHh",
  "key17": "cdrBUrggDPUPyHFTN4xbFLnbFtP3BmMyXP6bL8P3hjHFDBu68PMJWTLLXXVDoQr363dpraJ2dKF6fJ4khKAYorK",
  "key18": "4g1UAQ6fpC6QJTbSjPR7XRGB2rq2Wtdkw6GoSThLrcFmEjsaAQm5iSjY887AkNhiMBQFzQWFaH8YVsawGbvZN1sv",
  "key19": "5qBwDhqVdpyyqtaMwn2X16WXuX4sQXtoDy6ZH5sjWNNzfPxJkhfjg6CDa7iUYspSqCDiWsdb1DzuXaC71Ti1o2Ws",
  "key20": "2EGPXQKbSLW8FHUXsM1CAzeDExMs7fjZG7HZYt8ryDE784NFGkrVF3NpiSL6H3SaNWYh48MA5cA71DejcHwvK8RJ",
  "key21": "5pZyyCE9Dv2Ni41EWZM7NamZbZg3RQo9EjedXwJuZ7SVnRWoY6TXwNKp6cwYxinEXzjcS4u2cuASGBsJayxSaZHR",
  "key22": "YRb5yijAxGuXsR7Vce5WBzEEUttXiULKejqYXDkEr2NsNCLfcEXwqqy8EAssvoJcrs1KbLJf3y9wCiwmzvPc5fK",
  "key23": "4QrN84J37Y7KstCrgQbGkfTXb9aFuLSgvjLWvfBAN8RkvUVdAo5nwATqNZHN1UArFwWQCtgCXArT8ZfiffC8fy9b",
  "key24": "Eu5xmLB3B67TmLVKc5SJGuwEnbSQ4PpR3aaa6aziy6QaenC9Ao5Jhb3oX4aadUuixrZDJ78Jg9DNr7LeymFfKb5",
  "key25": "2tFvyGgYBtZgr58LzrNV1Rgt4C4xDhASisEaKs8UGLxcAGRCsnWhkyn1uuhWduM9qtJiTRHLYC5u8LqBNNZytfRc",
  "key26": "56QQUHFnydFawmYEZG4r5hpHnRdv4wic8Evh1X3ppaCCDQNRsJyKNLLQMReW2v69AUTGv6UCK6EfmLJoyFcNFiov",
  "key27": "63526H4jTxNpKAhNrZNGFgvp4PJp4LhhbwcqCi9evzdHaFq724nM7wwv6VPFhgsZCNg5hW9USBrMEzXgUhhdcopa",
  "key28": "5vdLEVocKgj12ZLLJnrJxfzGNznrPri6HYtaxqojKMq4YiMPU87fjXiQjLwBBUg73QuQDaq5KqkyEf1MR1G2GggM",
  "key29": "tjfFDBXiGwRtP4GWZvvJD8WZpuspHjUYnZfNTGWX142b5G5bdwtPFm4aRHRzx3sDa16p7hUtq4jKtofGuCZv6aF",
  "key30": "2yBgURu7Grjptwhe84s9JT5uSvvwHyLeTVH64RXTdbadBSNUZEczM24LSdD5D9hqvcuujNTyZsr92LwM5xg9gzsf",
  "key31": "5WNm6UeqpjExA5dAJmvtbgwtGitSAN3vFmsmKvy81e9yFN6j4V8SCqHDFfNi3VehGK2rUceUAfQH7rRtTUE5Q1VA",
  "key32": "3J5S12XsxFv4j4V7QGQ5egYGBkRfs1r3DuxJrgoM7hJaRHfqu1ybfEsqGAHmM2caWRnhg8BrQp7YYyr7rfcuiULw",
  "key33": "UpyTiDfPYjUfScvwvxbbTsLDBayvq7WCwNXbQafPHLidvWtKxrn8NrezASRCihRcKqJfj6tATCUjXYsNNp2ZdZT",
  "key34": "2ynK26RrHV5c85cXZJTxJ1Ttt2jBvrYb69MoMw1uCyzuyZXqs1nWXzxi1nGZY4awDrj9QcpwD1hFntSbaXAhTU9Q",
  "key35": "4SHge7Sf2Y8wgWAqhahPQ7yfKqrq5MsrdERiTA4aSmgdr25mdiJSG6zgRdtExpYDEKw8ddPrywYt3vFGUSrWzSGw",
  "key36": "3KpECMCCKySzwSqqXzCg5UQvhoCqmaMki3XTDW3pyd7iQM1YHjxu7WZzQrTQVi1NXTq1mEUuf4dDLc1GVqREHRa1"
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
