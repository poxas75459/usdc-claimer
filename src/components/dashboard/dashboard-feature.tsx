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
    "4NUJZRvpocMYxU1hRdBCL4JqWqcoGAh1h1JRte3FCGjPCApqbxwv2aQewfdhvE6fGtLJV93m19rCWgHDrDExt5ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xH3hjjDNe4d2ozjP53G932ofurfKXvnZXYGtMhduqRuHxhC9gbbTo855m7iBAo465tBYRQBfzdW2oTR2Xjzw3bG",
  "key1": "3ASmbrj1AZ2VpvVrQaFECFeE75g7UC7WjvKV3SGbqdiYKpwPzAftnxScxGHSut62viXKJzeGsBNyk4sC6n5hYXGq",
  "key2": "wzeZUtAiDhvzTYLcGqfZc55tFya5g8xA9qixjTBuz7HTgEo4p2Le8y33d3XyxWb411J9YJAL9fHY54uL1At9n3t",
  "key3": "4CqPk2CsrWBq8UP8XqZBH8VnEAQNanHJJK7aaBYA7LikS1RkmTqvFfmcuamJcsc4b8ZKKyyENPtvvpY6k9iXA1vn",
  "key4": "3Z2Eh4iLfhbdfLnAvbJyLXQR9nr8wr5XGtBRk8LLbeZeqsc2GCwNvf34y61SDB6SQAo4SpTqmwoK5HUFrB21NCsH",
  "key5": "3cx4CXDbgceF1BpyXhoptuyWSuHyP2wYg2tF1CXe3UMq92WmN7AUxTF7FraLUtk2rJ9yzbE56pwvT8vKaXm1DUm2",
  "key6": "5p5LZbnA2FfCJT5972eEmXWHKV1TcHS3h571cFjnZ9vSvu3bLZ85HJUAVxShFzvzSJsuF6t3b9W3c3xzF3dqo943",
  "key7": "4HhrFeGRvbmXDU9VKh513odaeXaZf18mTYgyQxTtQXAqYBtSBkdWn7mRaH6CRMJn8zCgKLNWxVe3JHVLKm7N2veJ",
  "key8": "taCYWPc577Es9YCvtSEiCfuDfQWFFJQ5d8riDuEAFA4ZCsChHMy29cnAxLN8dRvSRcugaT5K3gXkp4T6MbFbVDz",
  "key9": "5QSMUCKPdYxBGMjT8iUZ9WiZbwtrzTKag4kL6Nw6J1jNSZW4PqJ75KjrJnpLSSUc6GDHxYoU2QtwoMMuHnfLSCV1",
  "key10": "3RrUurg9e1JRCHKpLiHhzRLbEtY8bVDixqTqrzFb66GFVwie3WFL7JY4hPH5w8ntmB6WTtiTUMnNfxPvZsRXyXLQ",
  "key11": "2YkQR2vNYcTxqTeTVALgWPyzEgG7YCLpP1dU86Mt2sj3Z3mjcMGNuVvL4Eg4uK2uP7D1v7g3kZom3wA71LezJihX",
  "key12": "2oA989gdsS4aG5SQd8MEL4AEqK19mD78RKMwA6T825gL7MoKxTcgUQKpXo9ptsC6HHKokyKGYJvQ19kuqV6c9jbG",
  "key13": "5uNJS9bdEswCMj8vt67apJsFHgEEHFzYW8h3dvy4UpKSbKj176skeCwNhefT5w1xGxdKhybjNeGSDu9F5gfAbyPS",
  "key14": "3UxwgThNhP3rD5i9zLDGqAknYo9JTFu4Prcib6Cu3KEDmEjPVb44MApP78jUPEjzSTdhLAofva6mVb7faPAjrHVH",
  "key15": "DQxZeF6hrHT3X8hWQQABhCEhk8NBGcoeZuvVAw4mGhvUgjNtqHgS1bpNPZcCgMreLz4N4nwojUz2kP9oGR3nBfx",
  "key16": "3txNek6SmTi6a93uYXuoD6px335aWkQjcxZ9sjMFD2moUJTpYbdfguMhWig2u7oBnQ37X493xQ6ZxZEYiF2cgJ8W",
  "key17": "5ssV35qxCBjdg8dwEowNSLJAnTGpgbMwsmiSeYvg1kZWc6kALmJy9ZFYbrtUGo6GJdxVpa7WnnpYWZPLeWD81ZGx",
  "key18": "2TQhHvgo8tvg1JvibPgaftX3hQAa2e9WvBRvfnwUn36pWmS5ZeUryCqKpWhMRtGEZdQDt24g3VdGYJjfGEqycQsD",
  "key19": "62aJBwTbdwAg51PyDrbtCLC98AAwKANB5YUe1QhK2LR5rKSFdAXbsN2sP89ZQi5Vk1cygMjoEfHZEewkSURv23Yx",
  "key20": "4xfi47cYHMPjtQNsnEVjhBXScmWrcob8KAj9aTUB5RpaZfZdYTSKtZ8ZnhxFtB16kPRdtqb8J5XnsFsbDCFL2GtE",
  "key21": "3MXGhx6ChHpayhri2sGnVgFnAHpka8m11vxLNS8Gj6Ca6VYp5bxSgdxcVULb45Kxga2skuKBq8TSL3eeUQRhKpCt",
  "key22": "5vH23DGyEWbSvgpMZ5DL7zmeA639Eu4VJrmySkviGoMtyZJupMfskrwHjHtXcgRvp8QP3AWWGByr1ZgQJHrPCKTn",
  "key23": "uCCMHU2b8ufzPJk1a2qo832zwo3fD8Xsqim1Rnja1TjVkhhGLY3MvqWR49ov8kTDG4Xz9gYvckFgXZtcnhKTiXq",
  "key24": "3aA42PF9NU68KRYq3T7UQaS6ZPY6fx7kDDEYFFoakz5Ec2CD41Ar7upztHu33zsq9b8STqrDAWrA9st6JoF65ou7",
  "key25": "3PbC8ZcPFxCoTn1ivGqG16CYwj1jyVxgvzhuQS6EQXxXP3RockJqCv2V5W6gyRnRd7H7DaesH7BQ7V5LaveqHBYR",
  "key26": "59oYXdX2uw4yp1BCM3Qf8vvzhpU2E3wGmsAB9azJHJrgotDFfScrgaWuGJ9fJtC8tYNrNRqgF8FRn1YJh9DKKnUs",
  "key27": "4GccseBjtwwmhxiwsEBmSgSwFNeLL7RQ7ZV1aWFK1kiKYJy97Y7r5cEDhMTc1FKpncDbLQ6Pi9Zw2ng1emRs1Spq",
  "key28": "5w9VKXsjkB4cTsbAbNWps34optGJxnmrjNe4E9vxWg4t7cRzF45XiUgd2KoDrLAzZvw3twYGjtuJPRWqrSdvVyQ4",
  "key29": "46iTwPsBSJfhKTC2w4fVfXks4KFQRag18sgmQw3mm8Pf66nsL4uq8erJMyyYdrwG7WyMmLaHxKuuEWdJT1NZG5tY",
  "key30": "31dbTPDwaFkyA8deaPFj1xQES3ay4UJBJWVZbKLd39jH1HJt8MJon8jczKJF53dqpA1pRuBL11XajJNftLruekRv",
  "key31": "65adS6ZEAfKJ9rts3r9wZaVdGWuPnAF6dgqHSDGFYHtpEQAqC3d8Pb6awZbD8wbwrhPiS7GDnD16ABdshbDBWZPN",
  "key32": "2zBSJk563Q8qtbaUoE3ffdq35wpLLniAQmNo2t5Jr9wFT5inhNvgmwLX3F8GxVXoMXzPPQ8CEdnnVzXQpDbmzwch",
  "key33": "3P8Zkw1eEW5Q4siT7EMirBSGVaPiLZoy61SkyttR8SQoKAEP3Bjo5m8PcsCSp1cx5aRNeY8e4VU49VHRCuvWh6dp",
  "key34": "2cVSLNTCeMc4dwSU6zrHAHoyz9mBVYEmXen3zh6JDk2kyZDN2WNHtjxt7XaUdBGKKnhZRJG9BebRqcGTjzs6L7cd",
  "key35": "3pMTqL8dQQQttc5ksfdfK8H3bNCmvCgnpDuqpbE1EMyCwaXr5BTi8zS4QoTtbMxgajUh3jBwfAG37apFpE6WqE8b",
  "key36": "4cmiPju4JbW2HMZS827z7ir2jaztgrURUKSrA66EM6WwLzBxTLSXxUyXuNaUsr4Y9oXw9GVsLZjixGhEh5u6e4AQ",
  "key37": "FjF1rfYt2WzZPQpAHLQRp49CCcBfjWbZBcWL6HYbzuFLUWdG4srqMcoJMJ7BrLHBhrvEnfLZxANmh5KAro6C78U",
  "key38": "URDFkNkKyoFM4pXgpdRd3ojt6bXmdHMALQpBig7aEe7aEyGcZP6KBY9NmWzvrdBo2CBTnszoMZpQFE7bfDfFXYy",
  "key39": "5Q2m5SuKCrkg6iw8XszaLxqNKuCvzxjFx79tfhwP3KqmrBJih2LWVcuAWRaxgk1Lkudpew2d4ntKfC3RzsB64JES",
  "key40": "5mXGBaBTTng1BkFQLLxGbLQn9TtULGfHP9QCaXgTtBo1NWnEVYziwGPh8YywBcqEnWthWcj8UXocc8mnu9v9MV5K",
  "key41": "4gT4HdC4MzJ5L8AgBi3KFubHqkLAkjjdntH3pXWWtdZTnLRYtSVe1AEsfjP9cHRxh3G4zuoX3rz965Qus2CvUd9w",
  "key42": "253bGmUC1t1qFHCpBM2vmng4bJZxg3rGn5N3DzAb5uhVru7LNE1zE3QqtDDWJSizR5CZTgDfpfF1PcdX7F1R535u",
  "key43": "2FKCpxXmJuVaJCTFX7oUvpi5P1N3qQKxvcSLMntYA8K63Yu1hW7Ex4G2LeGqqS8zt8wrAPHEyCEmKgNqb1Hvn8dp",
  "key44": "4u4Z5YX5VqJcHoPJGGxXQF1ncF8N6q1RGTwDK83Y77FGoSMajeHofabM4tuemmPz5djYcsoRYBgoCTsSY7yzongM",
  "key45": "4JX5hz6xzDjffrAM4rrsYVprTjY2sevmdArevRTrJmTXyQCJjSh2K87wV8EzuccJ53J4dd5T5Ne93fzftAnkfm6B"
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
