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
    "65W6CqeYwZvyWcrBnaau78hMnU4U5SF3hY51HFhwFR45S8oFHnEeyCd9eNcWBejkXkdnecQ1HJ9jC6fMhK41DykX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x6kNiPwiiyN3VPG333P3GTZ1REj4G9RbFnLKmRHYBG2Arfz7bpM8QnEDkvW96ViuWJup2DuNJi1Kwv12GpG4q7N",
  "key1": "62DhiuCNvqHVa6rxxac78hd4gsKkXyyCXtVvSo8hrf7xsLiYWN7gZtXtbJzRthQQwroNi3gRkeMNa27akkq87TUh",
  "key2": "3HJUtzdYsSt2vT1KS9uhYiZDru8GRkuugJmeWREU83NSqFDEsackC3wB6M7Q9ZcLdNxDUyhVq1zSAbMavWoVBp6C",
  "key3": "TKRajTLUFGpvmAYu4XeAnfBfM5owvfiTCdJTDHJNnD6eSZhWmeJVNHGJsRJyBk4CMe5LvH2mBrKrKGDfUbXd28s",
  "key4": "2WcN6tRj9q7PDMVDphw7UXWxKmHmYse6NMrPwqTtwpy8F6ioGkZCzTectR7WQ6esGZHkRpoDYMjeXvABo5X8yRin",
  "key5": "2XJ44pJTQ1HRWBoXoame6trom75dLUt4FoP3y9LViuvZXpKKaGKnrtwa1ZeGus7YTUV2ueNhnq7SyvvqcXZC9G2f",
  "key6": "3yoh298zDuxVFeh1D25PfFjd3hZEwtW6JWsub8NFKv3MaLT4upCmYijZkGdwmTmAQZJwpkFds8sGsZFowFpztaoU",
  "key7": "5w8A3myVno43L2T5Laa8GSQfqxZVVonwCHmKRawefAhnCiqh91KsCAQHEH3eLszzDYTRRywTwJ8GCjRFGxNtyuJt",
  "key8": "273RaYLw3wqFaKjPoPXFVJtpLvenR3Qvc8kp4ArQgeXjdbb35jfKH9GZGzo5hQRWYnHHTKxb9vkogLVqMMMpPMAs",
  "key9": "2LmHcz7HTH7Km2HCrHGXhoa2vZgoea2ZgSv2GFwS2bqeRgxywGtuYTFa9JxrJVHckud1uoyLDsG3K5EsfdwGrJ59",
  "key10": "5FVpk4RPHarkZTiHzGq83zuyKL27uGCrqgGkyA7tELkFQunFzWRzqMKNisWVKJDkP2nEntwuKSkLKKdEw2na2p9b",
  "key11": "64rkvaJqd4XW7C7UiLnSF1ytnywmU2CUwBbJiB7h8N9v5GJCbYmnVcixPfrG2TBuvjMdhsDtFb6e3pGFyqPfSWnB",
  "key12": "3S2AHhLoLdkQD18PikNgBXPaM5C9hqaFXuAS91Uxy8tSD3BaS6LeXt6qgbdBR44Eew8EC4Ekx4kAxfne1Vx23798",
  "key13": "4wq9sqpQ1xr6TZL5CEfd34bWj3pW9UGYi545sAgTvmQnr9YtSvvsGHC1BMt3DbGbgPs83Y3KG5aDndp7mk7zyp6n",
  "key14": "5nqgQuEauDdGzak3UXmNRTASNrsCvfQojaxtCjAwULYsq26dtQskrCvwXx23jerEPVg1VtWoqekyY2REr5UVFuqS",
  "key15": "3xvFs4ZpAvzFJUXSJhEEv1rUnaNhf9EC9GLz1PWa173PuHxYHGeSegEmVLSJgNZScZCarNUDE83HXjTqsC7NHqg3",
  "key16": "PG7PgWqcjM1sJ7XYCvPZjbYHWvzeRerJLmsodWagbfc1PRuaAUyPiyfxLrYDzyPJioXsYYZH3SJ2gViqMReXj85",
  "key17": "5bbkat1bTktnuwJMVbqdbVdn6jxHTFJzqPYnynRkd5gfXJFbFskDhmyciedbicHpPiSEuwgz5hNqBhMh4YoV3nDc",
  "key18": "5ZRbq9AKXuc73LRG82ZPBDZoxe9zJPzhU1RUGKVDXhkD23VB3DXY9rZv3mtHfAzPewck6PP25eQEYukWJZjhAVjR",
  "key19": "FSrTg5zDtXz4ya6FTcSBPiDw5rP4X3eYJLmvgkixbjCT36npnJzhUPqW1jUzJdQx9ruEc3tis7tR9EqYqrkBpaC",
  "key20": "484zPn5HiUJUYCEz6mUyfLCgXKDEaK6N2swa7vt2pf4RXfvDTiUbGG9mNW4orY2GaWyWcaBHQrDSBC9f27hvWjQi",
  "key21": "526SM7EnP9sAtYRiHB1CipJA2qCAVF7JH8hWVunkFFjjeqSih7LBinngME4QJE3jm6RiRzMDhZDCUqAEQfcVuSD1",
  "key22": "23wmk4Xi3q2aq5sLpQDmqS2bEBXrPBQkm11f6Lh5UrpGWS9eRRjkya5bCzpQfo6EtGE7sTpo9g1XgR8zDRVeGYMo",
  "key23": "2bjZ1eutrHTxPUfqAeFgxytBeKaUo1BcLLrnsaS6kRf3Jk6Z4pm658qs2896tWQP3R79vTzAfJCjbQLwpEXDRrZS",
  "key24": "3fKA9k9DM4hCq57ptGpEN2sku4Y8u2Ze1s9Hjc8kvs7ssAYjX5CeZMRWzY8EGdxMWZxarayXjmB6NFDGFT1K18iV",
  "key25": "4wqgAnPUjwpQ7kzaE8Fst9mK9TbXM2vBpQawYP3n9YTrnRzSsGQA36nb4G7vhP29uTy4EZoLxpjJ4er6qtPJF3W3",
  "key26": "2hXo1CZbPjrkyQQKjyvoCFHbtn5WQEoVoiw6wUhw5QJX4cb9nYzC8r3MNPF2aNoaupW6HBTCRgr8KzME1mdSDnQ3",
  "key27": "4FRtCtc8bA4gnaWtmNDW4WVVU3QkH9SRS6XEetoseXMmsfLesyC55UpRggwZj5kvTtFJDA2W54FdHKP39mTGKWD5",
  "key28": "3vZ8ZVaQkpKcpoxYfgu5SfNkwkmdMjTA9v1U5oTqjoTetTyA8YZD1SrFw4c31xzuFhzrruSiJM9nwk5qi2q4jYEq",
  "key29": "5qg9mXLxfSTFQg8LuPtF3Fm16dKGo779ZvPK7W65X2F5x4B3UBcytF3iLMvQgoKPJMbXkJKxDmcNvyXV8NheQnoR",
  "key30": "4es71nfQBso1QYTf9Z1qQDE6x44BAVbMfHBTaQ2DD2DiKx9paLB8SwGrwzCNeFV2uPFMtd3QBhXhgk81X2yraqC9",
  "key31": "35vsMWesY87UXNndLequ7Sn4jkyp58QpGkMm1nxjzuUfjFPaDmBp1ScU31eR3Y59C9hJMVF4avsCKwknmq8jSFqS",
  "key32": "5eGsMakaM3DGzESttGqru7D45fX4orykqFo4CH3ZyLkrGSSE3gzTTgzYSKN8iavzQ53CT4KuVoJCaMXpWSmA3aMC",
  "key33": "4UrPdak2ErHH9EmPDcvzrygUvT2Rjqj8bzM7fkDDBwNu2TdCDpynb217pdsbVchTpUkkMmYnshApJzJZDiyEPxbK",
  "key34": "49obfbXFNLtRHbJy3QELfwYfvgbVdXxuXqj9cbbgkEDy6ydTcbsGHPLpc6pSV973dbTgeXWsTj1weR8X7iZr8ft",
  "key35": "z65eVNRBHuZZfe9L2jc8CFRdRHpSThpK9VUnUm5eZrkVBJNNh4KeBLc2yGVYMxgKq8p5kggCFTCmL6dKaf9Zu8T",
  "key36": "4bpPMVuFG9Qop9Ajd6TaKLWYUcfsRuyEMg2Jfw8F6ZaFMVJQHpJAcTge4jC5RB1YGzJG7cHRroAcemPS4uJMjaap",
  "key37": "2T4CqygyaU4JnP1n97sRygRLuAWxUmSsjdYM71aGvGiDhoaaUZJ3Z3FobEj7wuDXNzWJYXyxNJ45EJgEtaxkJayA",
  "key38": "5yaDn5HLQUVkpYWCHgru7NLhkuCjLAyqzLMN9Wu354fBBwPcianmFyQEgJfEFa8tmvLm9XGmJrG2PKgJhDXFKmF5",
  "key39": "47MeKE49CFoZnLJRu3ouaMjC2Z9o6vLGB3Y1RashKnWwrQX5hheH74AXykHQ4jpC97kCgC2akBHgJD3DfYYBpmxv",
  "key40": "58sMAXg9jCuF2VWohQkuyCtDfem8Xetz2ccKbK1g5rBu8Cm1rhYzoYVKNDA1s3aKsc5uS4jGr7ixiSpEX7DvDkRp",
  "key41": "2sbFTfzShxq99wk7ksVdYB9bKpz62NZqrMmv8ry6QRcvB3eUexqfWZ16sajm9F1LP438FUdWD5jGx3EgVRnbcsKc",
  "key42": "5MEZUsJLshYpsABDX8Lhtnju5hDviK3UdNV5G4dCHisbe9GqW17fZPspHZCdQESov9YiYUXHeucJAc2kF3Nzt3th"
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
