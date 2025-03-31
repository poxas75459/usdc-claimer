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
    "3CY57XoFgCZt55F1QTGAWik3Uk36Qz5hyQ2E231Ktq4ytJaanLvdmc83SFnWdKRg2d7yGrWrpVFu1h2wzPdUeXfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BSNWMEFDi8zPsvNY8XcyjRjDGm2wPyrxAmURhTVojbEu8sEff8LqxrHhMMrzkxBc9LG27F1Lx8g8eiyCUoqVuy6",
  "key1": "4tBPRkkMCyUn4tBLGqJ9X5E9TY6kH238mCkpB4eTonCcb4AL5vVnNTe47yqwDZnTnYJhfQwoYbYc5qj3BdGmDgeM",
  "key2": "3eLvqz5ZfMZBNNPNSfTHojPFATh1WPUiEbGgMa6Dp5VWNWL91vvH7pujoP5JFHyNdio6zCPAMyaho7YwuXhWASX3",
  "key3": "52K7wubdTrJR62FykWYqgkNLHaH9qPaPA1pQrNuYuMjYgtw4SDCHy8jawyMfRbVXK26extSUwA6BxqHzrmmGqyeS",
  "key4": "44XkrAFmuhpNaQKReSVMCBfm57T4DPu95a3K6pZm6ALstrZAEuL8ve4ryqCMvHZc8xhg3sn8vXE1mec7HcarXWsZ",
  "key5": "2iDhjZ2Z74PSb3tg5YAB4Xw5PNn5xyRdVXwoHbSy7dnYusKpFLYY6pvvK85fDMvnr6q4BrVnHnXeBftcr8MeSbej",
  "key6": "2yVu199pfkvHKYhzfbBpm4TK6evSQCWBSJC83aMaob4QuirATnmSXJMCHaFmkRUYF3kVnHmoyQjZGQ3STifJAeXi",
  "key7": "5bo1tF9JKKT7sNaNRh7ApxvQ3xLJVLRkB7bwVM74s5Y4SzajwAgiPDcK3yH2aCVaokxvuhzFzvsCX2eBqGv1UxgY",
  "key8": "fATW6JkwPtzWE5FpsMqbCym14xSZVF9tzZZvrMyLYFfHYRruupdEJqN3omq8QqcXcaNjgaUFz4yp2zMKLAWJ6ej",
  "key9": "SGwuF61LDVsuzhPGhhfBv5m8q9iPVV8naxoZcT7TXPxETDj5ymFgeJibtyB7K86YhzAv3p9pexGVbQKNDM4JKXU",
  "key10": "5WCxxUXeKpVEt4tLaGUNqgEMzgvktpZMDCwPhEXFJ8DeYg9kMTJS9k7outuUNxMisqLUpb35qzRCPsbazv49z95Y",
  "key11": "63JKuJVy5CagtA1WpBf8x1VCnRLxH72VA9oGE21SuijBZvdroNNHUeQtxC6UpDF5op9v3swa72njK6GNRyR4ivdm",
  "key12": "28XgimuXi5v82rYNYzjA5XaRNS3bGodQcdkGV7Cnpyv5Yuhgy6vissxCh15fSLcA6sCyZrMoiWJkB3GQS6w4mV1o",
  "key13": "2EKNKhsMWpxvqzDphCpEjb83Q9y2LR4Hn5h312Eu9VjbDmFswK5knfEhx87CTGEGVRnRKPaPP1KbUPkHAvmkKmi1",
  "key14": "5k9EmzMZ4qzH9W6S3XM6pXzLuinUAKRFtbEU3Fu2uGgtSXa1vANHEqEist5uPsMUC4vb44ppfv3auXhpNnjYXryq",
  "key15": "2NS4gQNsqofAgm215ydKU3H19R7UwXPMH6Hd8x7iuripS9JH3JBgdoNpcaqgTV8qu7PiXpPrcXFspeFA9LQ7rZyQ",
  "key16": "2mvZG8MdkviMkYfHcYbWPhDcKBzmvsan8fvn6iPxjT9QBoRqj4m3juEyoqe2U5tZgi7z8rRBWcck8ikaBXJ74BMJ",
  "key17": "5QvHzAzxaDUToMM83eyyN97bwJVtXP3FzKtKdnVoCmDKmZhT4bnUN1DvHVJ9wD4feijyoLgcNkuxUwzs4z5oSCuJ",
  "key18": "2gfsCbm6g3j9RvFBFz8zvFsK1QbnXyYqJyKYnSM2CSPmsg9G8D6CRcC5TPuyag7x11viikdv1dpwsPkewFfet6nR",
  "key19": "R96NvYdo46XD3xmgvTn8rYgUEwfEPgMYUgHiST9s36mUTx11CW3RGbtFrw8Wpoex3AR5jS8XBb5ASaP1LiLFndq",
  "key20": "5LngBAQFSeMPtHTiXU6naiEe5p4cvVZ1s6uZMaabFtLRDcbnBqa4wBrH6Ho8tnhBgTcTzz4bkk49e4yCCPACFsVe",
  "key21": "5GhUK39PhAcRymUqMEJLg4wNwQMtsScggFPmv2Yt3TEeZ6ie2fs8byCE1VnVMgAH4M6ecgSHGbCEmCb3cBivc1q6",
  "key22": "3vFrgPcg2Dw3jJbx3TfrPTCniSnJpPqjMf6C7KQA9Md9qvqX7sAg7F2MmCr2ZydVGvvm37vNyahGyxAmKdUt5s63",
  "key23": "2zSbMUX3kF2t2SDz2BXw4pZXnkZQJws5tDsy2GeMinUaoHrnNPADPpkm63yRsPXh61WTW43ByfEP5LMG7iyg7WVz",
  "key24": "4oTHjm2AkaJXazrTbiTk4Q6CeXWr3b5PGK7HsNHXQND3RzYNseDnNiSaFnxr1x8SzVUUmwCpJF55Jk2eBSGQyYLr",
  "key25": "3EUiYqvQuEQarTRFYeJk4NaFcKnzetbwRgvc7kxmzJnBpwNTfw7FD6c6yNABPFrqn9h1W42Xin2mMbS3cVr2FUpz",
  "key26": "41sheBWKWAaLMAy2KGnKdTJGLfvXhNJ2VQLxCKNeV6vPdYgFUdh7425YGAiKSe96qhF7LQfZ2g5DFzWganA2yyDj",
  "key27": "3tWJfagX8Y5WHPBbFRKxP41yyVGKQrgM3zfP5rXuD4X1ZzSbupyYkd8sYXGRsWDrND1bgtQcqvx7Tc9Xwy4JFyUr",
  "key28": "5BsUSiPuxmKwrBJUNEsFiNmjb2Rqk6BYz3ENDoBWnFGvzUMr2gmnqLXTEmMu64PVMioAC6BbPCxWj8PvWm4cg6M8",
  "key29": "2TRQGtRnYbzwzsMYbJdFtZ817pXxL32SMNq99iWEkuu44ayLaGNA9ENoer7owpsnp3BKcUqhee2V1xZdwyYz1ndX",
  "key30": "L9VXNCtvHoNMFSzayA9oTov7yrDEA4vBUbBETwqEn4tsY1BqBGutYmJBR93iWz3fi7VwRhuPwomNz2vTJPqoLL4",
  "key31": "4EhvvotHr5bHgsNwK25T8JohZ5idowcaRHNojW9JC9iBQvwvaHq133f4S13YQM9giqedpB8dr2wayBhfqWoEx73c",
  "key32": "42ZfbwUiyRyNEea4Ggaxxjz1Jk7UXUEHjbPSQ1jiMeFUKsANjywi32hfaaJXGct788maS3czr66M8SKGQLYv9KxX",
  "key33": "5H8Ma7PEyWuEfVF9Q4ngSxkHwFK21M3gZB5LqN6ScP49mFnTuosqEJeK34WAEmopmtaW2hF2eUQdsVaxQQcgAybi",
  "key34": "2RW5CZQ9dHBiSGVrovqpTLmvvpBarEDVQPiCkW9vuvFSKQys4T2VggjkRBYGrgLEmGfep5ZzzcoiFnPD3f65tBG1",
  "key35": "4pM5E9mLbny958p9x58chEfStzLrpaQx26EJAcR5yPgDmtyVeLW4pC23qfzAh89BAp4Vm4rPMZdY4L28zCPRjioD",
  "key36": "3ezZ4iXzPyfqyNurMQUWTqSgKiNdyZSkSH8Rdkm4EeAmGhLzV1EXdzJF9oSBUR5PNkcTTphcy6BAoQkxvGc5JgiX",
  "key37": "3Ks9qt4qHjJybQWKxPLAaWZYNanJSmwKWTM1kVFd8sPuUt61sbaJmZu9LjFyRSJ173gAxZcqofe91289EsgYo8en",
  "key38": "5qVjmezEWXig2vZ5UyDoTVi9d6CEzkTbwvGQ64Ww5U5APVrv6PLPiCS6TWqmc5aKyLSreH8fvBgEKD6rdCUp6z1p",
  "key39": "xoaVf8EVWKerbtxmn2ovzPW8RCWJsbcUZSDoubJFF9ujyUmL61bzLTD8P6iNqT8NcYJQ9mo3tiH1xxL4R89464b",
  "key40": "4uLZSfF6GL2aEC1gedDqLHSqwF4Reodv3Vcjvp4KedbtPZkjAG1oTZGJ91nB5URLRadJx26RTxYY8rkZDeYFPd2y",
  "key41": "5MoYDwBKTCmZdnDqh9EqgT2nHv5ihkXNA73A25GSCayV71BHDYtiET4ywcCmv1tegC3s8M2SQe35YohjEoMA2x8z"
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
