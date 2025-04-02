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
    "3vvG26w7E4PWPLLBATBGTKggrtyfWnK4vgQJ3of5TdxHKu2dUX8JwQ13thvYdwwGuepurLfMdhrgwQ1EPuQQD4c5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jVraN2mgwQnFFosYZHxwicD73KKU2fV23eJUwUtk7eVse8Sot4JrG9pq4bxWwZa2jsqrdJCHpSGqLvkFgsAppPb",
  "key1": "5Zx17JFJ8qUmYgibsXBv8F8ox3aFZCkSRAC3Yk64mc1kdoBqQYu7HkzeKuvr4qfewcxyekyHtJci7rScCMU6Jkdc",
  "key2": "65Pb2SpHukpSzXQRY3xnotMxzAScHtUNMHPD5KfJ7uSQm4HJn5j3GrkmwrMhgkb9L99Axu67bKHe9R9HLb2JLLA6",
  "key3": "2zNsin7AJ2QGcsVZ9ucDSg417mxQFFSKFQmYLgJyB7kGbfddfAyMoJH2c4enBtatZ7ANV8aTqBJumVLf5mpcDQNu",
  "key4": "3PwdmZ33Wsi5fUvrJuhZKHcobrdou444QWXyQFwwj3Bd1jGH2reKXVhkQM3pEF3dz4oUsTrRgocQuaCGtZs9VsCW",
  "key5": "4yVRAwYiMC2h1rq9yhdLo6E8WJkt6XgiyhgW6CUn6KaCShjYxuvGcaf9Rgf132umDNjjEtfKhVMr7qHKpQsrLRm6",
  "key6": "3mab223uwsYnuZjV4tvYXXX3CYCoqVDJ1UY9kxHfLsszYJJRnQfyPCuj7FtZ1hutYdDy7m1HtnffBmsuymXveAnd",
  "key7": "3AwGPvpShYswcnkMEVWZ11u1E2STrHHkkf4YEzgJUZCBt5eWjmLgDepxGbZVf4RqnQUQdRG4kFPrSpPX73QVUuqe",
  "key8": "594rwCkCekdPbR8BQWkkpuvH86fNyt1AbHfGmmtWhZKUS53t4DkiYYGHVsRZkqP4atEhmSjQtH4kQ2oV6wZjcw6p",
  "key9": "5VAPJGeUhPcF4UREEzvTFyDGbfA138Hgnk3DDoRi7rERbpukCsXJbVzdSmHa2R47vHuj9KFjsSEXDWWAkMGqxRnE",
  "key10": "byJqRz9cUy6d3BUsHyfqKVhKS7fg2h5UPkdmwGk5CahqjiCuC2xFN52uWVwp9Nmxdqqirb61sgeS5zz8WagFkFZ",
  "key11": "4Bx5CY1cSBjPwM8EpLeN2R7hFvHmLndaHvymAvEJe9Bwqie6zvPMJ7cpBzfD31MpkdihUkTcVHUHjCXE7B2RPzSU",
  "key12": "5Uxq9M6YKV1YpJVVGEiiqUWUSMxagtmyyfGpM5FFsa9wrCVH5669pD67Mf4uAv8mt8oSYFhjcwDTqVPCzkBKHN8d",
  "key13": "35wFRH1r5FSdHFUw3Pmofzzw65WXj9NuwnAii3KVTBnWiJ3cvEZj1T77ViDwys2C2sY3vwV8hBXVfLLWQ3RVNcts",
  "key14": "xa8q29DUzs1PFo8yVsm3tEVzrj7LzvxUPjjnfZsP2VQeTeoAKDkFZ5SPF58Xv96GEaix7436Gb9KKjp4vaBtvqu",
  "key15": "aCx3f858Uh7J358NRZXokDQx6PgLCr6Cmj16eFzichKA5WsVjoeijv4bHdEm3LTwXN8ZJPHe9uaNFzsjr1vg7PZ",
  "key16": "4McwX8zwu7yAg1gspXbW4B8WdaAp94HrV175DesieQk4qvgDUN3vSYanAQfbCR3DV8sDiYEKHs62Q8VCY9Y8SbG8",
  "key17": "4q91AAqqzKa9mr7G9HgZAkMnztVEoe4ahrCzxnBECNpBBhyNFWDM5LhUYaecJQAMeXgLvT1TASuR8HFnaKooVkyY",
  "key18": "5QHjS4QjtcgFS2z1k5fa7T499NE7xsWcVioSvggsF8bx9BG15gGe1Hzm5WxXTuJfrKnvBEW54LaMrWf5N9nSuUce",
  "key19": "8ecJtfdKnPp7xXDbuuM2WJyQyuqZ622UHQvwjWLXE6CJmSqW9etSKC4PouL5BVzB38Qw6LedskymJbya1bBDF9d",
  "key20": "1U6Wm7LXdPMP4NYoCDYYCHPpFs6VdnZLvtEN4pFNd7eia4WsrfMySv2DhVHfRyNTDVbyxaSMFnA5mhTZ4tCT56K",
  "key21": "4M713yduAUhNbF5P1ki9kQbcQ3bRANy5bud9m2vNuxtdj3Jmw5BxvNP7dSB6STnvWe3Cfg1yrduDFxSuvm5ASb5i",
  "key22": "gRmLhF54UdUFqssVkGmoibbesc346idiirv2hUa8AtNmV7V4vs2mG6mAW1EMiYnNLCvHFKW9eHpraFssNX3iy5u",
  "key23": "4UQ61mQTks5TXRs57SGJwgokVEtraaZQdyEGHQn2HtNh6VUkwdEr3R63P2bxYK3cLrL2DKbt5XS3JHiEtD5WerZ9",
  "key24": "4Fc9HDgWLriKsvPSd8tJUzuH2nmDKZKepLhj9G5K67uRrhcnqgmtRxCZ7MmuPPJhKrHwuDA2qqXGynqv8iHknWfN",
  "key25": "5jfwqha9QZjSfdf8dJL6oVUYqowcsNNmXLfgVV9YwD79qH8NMytghz8QCpDojyP4uw5sWeGSf7jEa1uqwjxjPdvA",
  "key26": "3efEmLKkmW4r6ocDmoTEMWWChnQab9a2c2HcVZWte8WbYtsj2ydoMSLVjcxmrigXBrwBXCyRafLYEPH8iG72koHo",
  "key27": "4xdbdGZU2hh7GLZdzzcJGeBqJy6bYGy2LLmR2X5gbL4RaQiuJDK7VkTnsmMhNsahfagna6g3V7cKbpQ8orN24dHq",
  "key28": "5WZnDwHYkkPNHood1hAZzuKvCSmQkSVziWZSUm3JYTz6jyALeYSLEv9HByVicd1jskeFyxShSndGgep8U5KvuV1",
  "key29": "5zpAY2aKRVtxtDBLHgZiUpcJRrgh4P22FonHzckoz66YRiNCHRNwPnnSvuF48Zya8vL6aPSEY2s11xFNYRJpmcPX",
  "key30": "9ESmW3nQfyy6CrWv4CBkVtYzbaQRuanKTgRJMP5CQa265T8NahadkYyyuY6CW7p8ReZY7wLvjYQJk6ZoNMPjybk",
  "key31": "8NU1c92qmJupewYhpwpXKctmg5p7Z5ofycJCmdKC8obah7Tw8Zw6beUro1A6DegaGohHh2BmTuCciSo46LVaLW7",
  "key32": "Lz5wbTkhJTjweqqtA1kivNwGkxzxab1dBEy4DXRmD4q6tWzMGDkvuUUnpxbJuJDh2ajENCPcDY62d2gRurCQ9xp",
  "key33": "cUtSnXDYWZGSf8cwcRUMNes2R8jwJMR8jw5MzEWnLz7cC1v4JUfrMDbyJ2tkV142i2Qjbwfh2VizSzRgv24VmjS",
  "key34": "3jKyP9cjhrWJRcks8RUHep2DDqsz1KitE4Gb6nGSYUrYbC57bugP5rwFQMzki5uhTmYp2Hh8RpL8Eq4Z2kxDp1TG",
  "key35": "3CKeyzDBt22NWK38Pw3QdLfhTQxpHgPqwydZvpMX88K2RRQEKKTVZ5Uc5f4mEqcqnmgnbtCAhpPis7EwsNNunW9s",
  "key36": "2TZnfZ5Bu1LaCC6ZKcn7iZhntnwiDuy3LpN84EUYycPwYYHEKrYPb5mSwWt3ugDaNijNSAHTdzrMzUr7ANVZdTZV",
  "key37": "3vm1mqEJQVp7x5J52wwNmH5erFPPgGqPYGgaqQvCwsRPVtvM2wmeKhM9ZSR5crWwJk3Lsh44zZTuvMgL6GKKZnLK",
  "key38": "2iG8SU5oymjXwLzS21CmfwbMuQdaShzgo3aNQVVVcM2oLrTnfptSHf6Zz4fedsLp7WxhcXvLvG6zckMyooKLi1rQ",
  "key39": "4V3YVUic3Z3HMqeSEtRcc67GQDD7sFSkT3X2a4nNGATCmQEL12Mi4oeaxneVFmU5Fm7Kj4sM7CxnytSoC8km54v5",
  "key40": "4zfXSGbCqqnEY2JjpmbvpxRTgNrhzVZLHiEzCH5qir4EgKTrJdc6QDQJ4Wvr2V1g43ohMoqbAEWGQXbUgwZEj3pU",
  "key41": "3GoKtAkoKv9uS98qFfrbh48GrW7yMizPWLNMDdWqondmYsfygJrJ6TT1KSf5RYAXF6hoWjLxDNcMCdsSDi5BRgmC",
  "key42": "4gTffbBvRwqcdagYGgAvRYxwZR4ksuyHg6jVpszfyJKWo66CNDzaCxu2aeQrdcyJyubASycPU5G9j6XMcjoo8qXp",
  "key43": "51DWuBcMb1bkQtqMPjgqarNkGTYWc3qLTP4GSr5vTPLust5dt3yHxps3Um1FvmE7Nt57X81DNGytJRtapwYVU3DH",
  "key44": "n3vywSMq8JzgcrnM5p33eWXd6nuu48f4SBp9ZiFV52VWAH8xLHc6FfBBqgzqg2qgsxR6WvKPaWGXbYYzGS9t4aQ",
  "key45": "2Xme3qzMF85WLEW2wM6VX66usj22aotyXetrztA6YfiK2JJiKLQJeoVUuamDHqoKqARPhV7TrWotdETwURXD7u1k",
  "key46": "4Eu4UH6FRdYkj2kPFtAEYpKfQrCjP5hNYo4Pxf8kKeTYbdWKZZqbfq5RtiSRqCePk4eUKbAuYBC3YAb43LweVhHv"
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
