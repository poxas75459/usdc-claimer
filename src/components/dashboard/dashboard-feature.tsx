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
    "4bpuQan6FQdHqk831Vnj36YqMgePuJ35hWK2TaEXx2RW9cRB8mFQd7e3JaQPVJx5mPPncaLkMVEt2bbaVqk2NMMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QHmNqWHth7oDjoMRryANcTzZRS8j3FGyvvwhcWN7qmGJJ7CsBUFvurmHQecYChew8CLsRqFAJeK36YsZPKWeCpm",
  "key1": "4zRd7UpwHsCbpZx1G5k54ZBJGKZxWTChTYuDzygbW3gHB8YjGBrv55SN8F1yMYnEnkYGQWpm575LRGQwPsQFbJ9N",
  "key2": "2X9xLfmbysxQw7myXxX5yEoqboatMGYxLtXNG4a5q4zPfLpuVGa1C32H2XBLAC7J5bsg2yPZAfVYo1YQuZc2nm8n",
  "key3": "31LegXdgQGUZWTmLPBgzXEkEJYCgEdvcVm9xd8oPzSgfvmxYaH5HrLJ1meBnuVPXC6duek72v4yxaj8CKEAPPoF6",
  "key4": "2ouuUNDiVQFUcpgxU8xGLZTKGTvgMKVvLG8Fi2WBfJsFhsnHFzZ5Xyk2Tt61bhoZBoo6xqSHHQmqb1RLbbUEfxb",
  "key5": "3UCtVeEF7P36UiPCoZRMQWUvpEVeg6a3jhUdxsfyJ2gesykU6z2ou2NTkFvRvU142NoapP3LAmakjXzAs9D7pq88",
  "key6": "PXKaNdpJEhAnAaKWMnb4PXc9LrpPfJvtJtgiGH3VUzXKLCwiFnewHTkbdsJjE6R9hj4hRTA9TgVV6qvd5Yg3Bk9",
  "key7": "5CdjJpc9bbmRZgn63ns4mWJvj6Ba9mLkdRH2q6HwgMmWzJT2mrcVcaFv2uRf4iFwtMxLQMjpo37egGZ2Z1WHQRrJ",
  "key8": "2uHkA1ipC7R2E4LD3LCHrGETTR5XE74Kpx2AMUmqZGFrEdVQYLJvdfyFEEARy6yaXr4MpVj8qs9FPnut9iR4mmth",
  "key9": "3AhTVbbuCG1gUzaPQun7BuHW91oqUqqJyuHgt6ysQdY453LdzPkuXWV97onwENgZnRuvtQF1FhkXGuZmmJWhudcL",
  "key10": "2HsjogV2GZSkqAwQgAGm4CdFPkG33riEaP3JnDBSCV1mMQTQfETcGJqvVGQjihdz7jDyF56LAcKxnjbPyTU7Bed7",
  "key11": "56zwfPMsd2D3FgjZn6LfTynodUd7trXN6CAa1CWefiiWEp2g3UKzpbzHLkGaquJAxeao1sboq1wTCqkbh1cNPHBG",
  "key12": "4ckER6nycSKLG9zC4HNLBnvFpS6SGkGEQtqLaCfJYT9YM1YCphyuTFhjLSHq34xMMaxN5EM2fiPvuSFUyw6bGppj",
  "key13": "CZ2GCCUW6WitTm5C27h64vbq4kE6ZSUqRkGjcZDpQrw7EKJ2GgXwrWupNniCEs8ejS5EC4eXKPebxFwZiw9mViT",
  "key14": "5nVqjAQweC7doFU9ZWUGXEbFvBBFLZqjUTdxHVwAZW1UrG9QGsWrKSmi8vsRFnUruKKDQMSaizQNgxb7ccxgKgJN",
  "key15": "5qkkzhksumJM5qbqJKxwAVoYHB5jb1UFxoix8zei5KkpaKDpJDvjp6rL6McBk5gHnos6duJHeAuttEUKW3k2YntH",
  "key16": "3gCXxFrR4ZsDv2aDPpPyeE534TzLhCUpZFH57MuZUCpRh5srA8UawGP8zBadqwUxp8myYyeokjzGTvs5YosyubTZ",
  "key17": "4pTSzvAUmkm9eVRdvseiFPbUR63ExRk87Teh8TkQfNxfDGudLfbQwFCYoYDqxARqoaZKEJ7mCujKgr6soSwrv9wz",
  "key18": "4LJhV8FTdFxApf68WwzkNEmnik1XX2wNJ847CPrP9BsVvGnb18g1h6gUY67pie49XWfMu19UMRPJemcS3d8PSc7F",
  "key19": "4VaQFubJRnvawDRejFrbhRvdkj7FdiaG2uK3i76nd3asQdUS56jRbCZ1QnG3mWskiyPX1md3YbfQUehFzuofMPjc",
  "key20": "2Y49qLrzJDrVqBanKfrz7QdmY9VRDSttjRMudJMNiYtGqgYyeFVcQaTLsLCRostPCidyNgrtzRsySUykWvZZUcTC",
  "key21": "4dW8XA8F8ykL5aLhJeNWDf1aoZDX5wSfBmcvqi1AoGuQfCqE3GWZfdC6NJ51zgUHDSTRSLRjAhgr4weBuKFtkeBd",
  "key22": "5RCPc3nKW4bdNr8dmVA6mfNc8L4YiQZxamoLDGLRGcn7TLaGHXiCGMHn12o5EfJVrbodasfKKTmHAoJDcnTPsveV",
  "key23": "5t1kC6bM9A4yeqaJoC67rur8jnvtKPG1hZMV7jUSe4fd8koPMLC4C835VYU4UxqjcZF99UGtPQmeCbC3UGq5BTJg",
  "key24": "5voSC9Xk2J7obuetYWgK9KjtpbTBDceMtCYN7ibnaD9arxbX1gwacRfacnkNmiwQ3JNfESDE852LyCTEKMHBzcsz",
  "key25": "3TgdK4GUykzQiwgjE8RuV6WTQpEXbFqtvRaNAKr9rE1BrZwEUKoq7e6TcboztfzGqHCsEJWgF4b8mDskaqNUkH5M",
  "key26": "3X3FYW6VHhTFPndzZMgXLZ8qvi4KLw1aDr6nGcj6LMJQokbUNjNCs1RiU4V6wgzpnUETzA6JZKYqgm82yELm9z8F",
  "key27": "2Nh5xzYozeKJUyVBFBcVufScwsvwH91TkZ55MN5sbs1L8m6ZFhDsKtJwrmSAcAYgBpAP1zFu6UHZDXbyAV2LY4rh",
  "key28": "4dCSpTs2NamfTf8V3WdtRJKp8nfhoJo1pPmpoFctkvkMCbekqETcNpyBuDSFDWo1segtmmpYxjSkady3Hbf7jTDj",
  "key29": "2yQdky69e6syKXEEFm4iBBH8oZttBXvEFcbTRhTWYDJkBmAD7FEHq6T9cjNPeiJZAAbkwhcVkKovzu8UQTvmYfXe",
  "key30": "5EvVVy8H3ie79v9TLLpnGqbH5Y3V3Xz6NFN49G8dXu8ytmxEWReK2dbDyCibp28EqFjBt5fSdpKsX9KjzcjPZWNU",
  "key31": "35qQ1AhjMkohFsHm4xzEDck5BNcHEgksrZJ4kmXNawYDLuexw3n2aeQXeTJCG6AYpJjoCvi5SePCakoLTYP5WbSK",
  "key32": "5KrqJRVDanxZ4RiwWicjQF9eJhayXU364pTEiMWaog8vy4fzHv8mucZkupiVgjxiUUnjkzXUDKs2Wu7gyrbXUbgG",
  "key33": "5yc1kSQ9d6e9JqJ9cdKZfEX6Jp717gcETFRcMqUQ117vaDnkRLyd9imScifLYnrMcjo5kst4HiFPtYt59p7NmvX1",
  "key34": "4VCYqX29JsrFtv16HXkMvCBX9k5fo4WNTpDY7je9se36EjBcsrYmQKS12gnpXvKoCzBGHTs1LGoS314rwWL8vfTy",
  "key35": "3i75fbCWieuWfNtCHhtFuWQyPfbeyc3qtBH77zfTY4H9CQghjR9GeYpCv1iDwhnz9YdmXasZZ1GgJdYXYr8wpvB",
  "key36": "aPJc3K9MivxuDPB6BPLjVQdgdT5kqjbqbLTd2H9undLkhduX2Txvk9a3FQQfvW9YmM6V6JK4fdN9yQYY7fz8pNV",
  "key37": "sD8bqjpxUAUYHqbdKfm56GPf6S6ZEQj8ojQ4bFGGa2ddNMyFr9SZNCDcFwem1U6AdaQiiJo7x71v7z1gXn6yj4x",
  "key38": "2P86zLtGKzoN9snpsEixzh7142zev3htMdeuLzuZK2LGVfsfY99HJkxfUicoj7ebrVmhbPCGRVXe7DWeS9d8gKTs",
  "key39": "bJG7V6izYE6is93VHDun6Tf2oxuJWfh1od1hGbrATvGP3a3ESukHU9BpzLV1vsv6V43V1tGXFhyGMe3ngWz1hsA",
  "key40": "2fZ9BqWfHLkU7gSxRYirm7ixMm77o29E4Tuvm2fTbzb1VxFzAS3uQAzXjM8t6Dizer5zhyAWuGpMKTX68iwr5uwk",
  "key41": "4W487MHCrkrj6jvS5qATz3CfLjchHa5u9SCkVU4hSYy8nmacsF8wZEifNwA9gSwVghELZCfchPwnktLb717QHXGq",
  "key42": "Q1LBn4hk78hcLhihQ17bE9a7yjBHkD57Ag7v9vWEKPKyMx2svDDFQBygvkXhQ7W1Gw8Wvgiq5gFNdJaKS1KTq9V",
  "key43": "4RenrffuEqgBKd59SD37nouVCV2f436t3jj2kgrFCkopAuaytEV5gEzZ6sGFX93N2KYFsa4zbQWGuNsxnr1iPv6g",
  "key44": "5QAUnqw6BTxTGiyA19Tg2dVH3NGPBPM8gbcw5XPVhcsNNnEUcEsGDWYJjqvs1ivwh7sfmH44mGreZDND6KJZtrKP",
  "key45": "2WbvpWVGCSEBFrg3C4tQmomRwVuiBTWzTyzSxW4gtgfAZsoG1CCBUFJPKNiwWXwpW3VTTat2y6pd6HqDRY1id74t",
  "key46": "V3Ngq3zgZRP2fZjaEhf5wco48Wvn8h59n1QRk6Y7PxjyK2RyKJoDceepiD8vyLocmusYv5feDUefi2KFR4ZsUYG",
  "key47": "SBYXxFGVQwr1xwssPUikNtaGMdHA6Ct2mMwL5oVaSPFkhF21xSrP3vf4q3Cge6mSbfme9ZbBCJ6xoBettYCsrux"
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
