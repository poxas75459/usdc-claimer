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
    "3HsfxaD1Y16yACg1ZH9Zy5eMJWqqRVDowohrBb7YCLjeCDPErsqtGF1egECac4JwN6Lxjddbn68jvC7Mgz7GhmBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lccyv3jRqtorehk8nJVSNF4sJyCagVdNHNQSu4sd7zuBzN3SrZsicnCQgN1n88JqDhEaZRueAyHspn3C1irtEVn",
  "key1": "3PvMk1d1MMsoPxR1LwEhMqJXA2gj8HaEc97iqMhNXMdFYdc4JEYmsMUKGDv44RpxPPPaRpjsbQcS8mBk2wPwVbuw",
  "key2": "4Q3TCzAZTC4ALhXrrwMp8ZcJ9rau1ATmNPxzLCDTdR73ziYMwJyy46cxo1oe8PqGP2xEWt4AR6es2GqBG5kBkt6k",
  "key3": "61fGTz9ZYF6YtSLrDMCWTdFzXkRCkQec5Hn1u7rvhDWJMoAcB2qKmXez8VMoY1zBU7Tp8oDUgewVLzKPqERzT87q",
  "key4": "2e6VNLepQudM8VMbyuJSFNf42z3VxudSnnT6h7EP2dNcAaaRDy3z46cetuwhp58jyYGsgmDKcoRut6soU6ot2aZ1",
  "key5": "46VoCbwTwPVhBFn1bU54Xxs6mPnYDf5GJRYuEUnqT5cyxhESz2sWq54GkLC75z7QJA9imCBZx6ACscvxg1SmAdX4",
  "key6": "3HYhGZCX5yPeUH8oT5YK8ATj4igara1cYUun8QyxtApMyuiNm1DA3TScYP1Wky4tEHS3LuYxwRHYK4bEjcCgMMPJ",
  "key7": "2CTFhCeiiQrL1B4ejbiNGKVnLohHrnZEgPtcc5gDefP1Xh1jNavgzE2MgF7hTN7A1L95niSkdHYGrJPp7EhyXty",
  "key8": "5BVDPbbkQH3m8Uujofd8LwR29mDHTAi6KUWaKL2ZWghnit2XKfx4ZySwuLgyW8QLcMRHAAZY1gW99p5j6PKr4c6Y",
  "key9": "5U1YdJTDLj4Je5tJU4cZU4vp62yh24iwJQjEWa9sH8FGjeAmRdHan6ZE6UTT9JGbukjgYawbCsLAfBd3jx3vSZk7",
  "key10": "3a1Et7WUmEZ2QDh81ZNjmchxRZ6JNcWb1YmJQQo2tGDUjXoJTgrc9nfQpb72qt927PgXHQhR5Rd3sBmzeQA3q4Fs",
  "key11": "dHwKvf8vG2XB6tXVXgEJyUXWx72n5Kddro5pFyn8GFwBM54QrxLZVtCRrukeqTTc2QvFp2qa1yJGbapVeTq3yKL",
  "key12": "2SZUbkFrHcL7RsaWwzxtivk1T8tAoGyne9TiLfwBjP7gaJpQYkPmg8CQbgB1HboRReDqfmh7xDyLCuo6ZMs7CYtJ",
  "key13": "2C9vqV577kCQfneboaUgVo7rYNacL7Fa3UrApgDLUDiZDqzn5NoHxMaUfh9axBL7rU4WXNkavnnjGavirWYkVx5n",
  "key14": "5J6he6RUCn3DZrYeLGwSj4AdBFVamHpuFVZgpjXyq3Zn2NfCvBmra6ZU7pdagP1Wcsa86xpXHJVUD8rub9KRGQz1",
  "key15": "5vS6QgTQRM6YJ6RGibiaNtU1TzYtJAR3APrSKaA1jsMp4VGXqSexcKSTcgyyygkhLy8KwM43VxEd5uUc292k4tqu",
  "key16": "3RYGTLpkWZxpvU32zm3Yux4Xbs6N4oJvVuAe6ZF7Fbo37kVR3mKSLHDbqWaRgnZZ4JJRs1yrBayj9GpBUbyeN5eA",
  "key17": "Ncyqkh6jEFyypZu2rWMdX17cqhQudVLC3R5PV3cBp4dVgLnSj2h9wE93zJMvv1p28tZ9xeiwui4krKZ62Sx7djt",
  "key18": "2WZVK6Gwf5j4YSZmCeZh5xTEgp7nrsDKLwEXYJv5x6PCgQdFW6NUMvdfw5QppjtVdQKZfS4rmhRiFsvmjzZHxELY",
  "key19": "2nmdkQTgfY8Pkr4mk3Npwfqi8smR29ySubHWXQvbTTxiRJuGBzF83rq6kAiZzM3GvaWNH3SMzCqvMj7SrFUk8QcX",
  "key20": "3dWu2eLykiWLrxYXu8dDYMkhMYixvv8cvAba4n5R88qZSr61WsdYMJCsZjCVDkwJiFJWUmyUgQUkNhT4GgtTgS89",
  "key21": "vv6j3m7gK5YDXRBJPcmxufomb2YrXvcN8DkYbaGJXLiVBUoHMd9GzPXerAJnSeJ2ifnWsRbehpy1fMRZZiPWFXs",
  "key22": "3DqzAup7kumYrpfTM2U7eorbvq6CFn9VeUXQN8efpURmMwCdcSRnD9j8vNaw7kWhPc4tAt6PrVyyWicst7tFb8F3",
  "key23": "HKqHqCMBRmhtH52BNK2e9c9DhSh3MtHnVWC1LEW19oYSsoErNJovmtBt6cABK8wQ58ZWoC6U92wLW44uZ4TzWSN",
  "key24": "4H3NbGy2nJTfce6re2ViYSa4VcmJM2AjQFzu6gR2AM7CPb9DmxSWk7pXjicPLN7ST7QYvRmnLJdmYLUqGbjxKFDV",
  "key25": "xnifzyCsxRPqCacd3a9qQZkBwmVkvEhBPtjPUczMsv5dbzZkGs5eycqMRcYfKvFWyxPzKvJrXtXcxwm1vJLnFjv",
  "key26": "3R7wuAV5JUNuCYNGrEUQNDUQz6WMRSQHQcU75SRueLdMGCpLqUdqrhTjXvpS8fLG3oDE2QcCWZomwhymgtpQNNdm",
  "key27": "ULX6o1ZbjkkDrwHugkduTzwXAuyuJcgRMPdFNCAGA4oufw772zZWrxkoBgk9tTzzK11HuUAP8o6oWRdVe7jcJF4",
  "key28": "2rimZsr5A4DWFUPe9rHbwtN1PYh3ZumR87F7XMZkX44ejHSJiB7WWx8NytbnKFXhzVEX3uHtXBHd2HEYFkUby1WZ",
  "key29": "3gomQV4GzaUggD9bevYXmWhS8p2mHEyird87GYpNd9gy8VkpaN2FiAygHqqdeNFM7UchX2EtifSghe9KjktRv5mD",
  "key30": "31j9Zfe1fqYrJnxp3RZZyvqQmrv9GYjaaZc6CC6KEYNasUQAGrXecuw8evHyVNiwRHVVzXfeeS5VsXgVPQnJpTkA",
  "key31": "3ZehwSC4WBQstk9rhftdbL9K7KrGS25i6KibtCufUQaqAedfHUHjN54kK1yP37Ue1cBgQTa8vq3CZsmGWtDz61gQ",
  "key32": "251pkd5Z5uMxhE6PZFeYQes2K9KQJqJBdnUxrqqGmGGpeqAb85d71Ge6oWHe2wstCRQFKcd6sHYweFmWd9gSm7Rr",
  "key33": "2cw27fQowe4vUiBcYSWQHNzSMNYMCcGKuXVN94LLncGgTPa7caA9FgHvhoLHCWf1YsmjtCfkUTukkgqYcNem9Qa8",
  "key34": "3epx3oaKoNQJLYjccTU7HjVrK9g7pwcp7ww5UbRGPtRnLWXGGcy8LSt84vFe2yx15sfdZsbr9RCmFrfJqixqnKRD",
  "key35": "32ef9xCEZBvEWkP4b6Nd4vqDa4ViHVXFCzSmxtKs2ZNHZCkD2DKjCLxFPxRwJF9BqGxSyvxNVEBqfnT3Nw2udmTg",
  "key36": "3svu2ZQUD9JRxSToHotA4KHT6Kuq8AcyF8Yypsfk83gaXSuHbfQUZHBWDb7Kt7NWq9RTmNSCfpbyDgkXdoEpB8mo",
  "key37": "3HDwLRqJnsQxTX8CgYfLtKD2NoYGVFnDxDMhagkFZcky1bbGWEDF4wSK27uZLLNBFk7y8jn3pKni1HWvWj11vq3R",
  "key38": "2hxoMRd7w9Bu2whutRdLkxAVEAsP3b38DWMnHJU9r3ESHkJ175KNuHQrPKQyPnnBe7GaDghNu9zeTjtTxTsQ2Egr",
  "key39": "58Kff3sG8iBSMen5kFqC1fqDHa2zdFmfoihCJPqQS588qebNKijdjATxx1Q2ojJctHnHDRmxJHBgUqQCm92CZ4Jx",
  "key40": "4jEnRTdDA98a8UxqXBnnnYLF3TUpWtMartNXpygTUR8D1wKr6yFCsVpXDLRAF5dc6bTK7KUezBiQbio6Lu1SqRBe"
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
