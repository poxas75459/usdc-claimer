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
    "2vepV9yfmsUw6wfXhX1yUdsknK26AQ4jNbXpg1vQaR7wT13b7Ddmeg4WAJFJNPguGXE7PnWaoCb1xwDsVWu21hGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D6G4LvJPehexaCQPNDdLcM29KqQpbBSGWkQNH95hj8bHA73Mu7K6NW5zyeNpAcjZi7sgrHcAMiSsBpspTjW7vDo",
  "key1": "4Dc6KNtbaTKDhJu3J4jFtzF8RZq6RM1s1xKhZHKcrEtbrqJzhEK6bSbqhpac9ry1VwkapfnXvjRZMjJ5UreXCvFA",
  "key2": "529Vjc2pQ88iK9BVqxsUSQkecarSKMZzSJdWSzaodTqjKPiFghHqqxnquekk7K26h38GtTKNs3ch7Gt8Wd99X4SM",
  "key3": "5Eb8QcVuzoGadrEiAaq6BtW1ERaYCAYQgZDemTZi7AMk1Pn1HuwUDYsURjTao6CodV7DgCU4e1gZixixGx29hLM5",
  "key4": "3mppu7VQwFadvWQJie7bXjWqxYS2cbQieU9ErenPd4UimzsjLsQU6t5DDA15PdxnaavBLeWggtMX1GQXvDt5nvK7",
  "key5": "39ZPyJkbXnH1VmoQPpLaNJE5MAVa9pQJqz6LbQvBF3pyKYomXCqJAb8qNLvdXRApzekLf6HD8zdbhk9hMrCVz9QL",
  "key6": "2XNExJzDsvgSSdquTGPjfsHeaSXVEs3sC4YVoWSBqkoTmwfdjk4fN2BNHp7YgCoxG3WwDxaXwEXZjdYDoB2yoWnG",
  "key7": "5DQdEd2KZEhQE6x9NK4atFoUCz6WboJjrEbBx3Ke1oYQqCAUfDMnSsi1asy1ftRpQTX6woAxkiP4b6rofPnupWho",
  "key8": "4BHp8PemuxE953soYgsRaHwEwJviL96hCNxhFrkYmbn292F85yhSQ7shxKtZtc8Mx3xMyMxBPWQLTZa86kcX9X3U",
  "key9": "YFyNnXxZrheD6atA3bYnUdz5ZHVfB1mmiVrLeNQGchNu2cvVfaBy6NFkHsAXPG6FtJDFW8yvVpLakHKmgRXtJSh",
  "key10": "2zaipJrBzWytjRG9o3mRVFGfvMKo6zyR5CULQ96UfpV91ii9wp5hnG68YTRYvZ24oLKqbeR7oUF7t9JNwjMCPDn2",
  "key11": "3DfiqxJ1Uz2EtR9yo3Y5sS9FAXdX7BCYa5F5UZACNpcE4YPZmnfaLtfHCqCrnAezyvKszk6NjAyuxxFuDShLZzQ8",
  "key12": "5Kza6dPYvEWiQqT9Ui2wRvT7cT6Qi7HiTbwN7begDUfooC4HtEGQxhMoDNWnKSuotr1NYg6VbPLkuZLmVntqqntN",
  "key13": "53Xmw9suT4F197q53Hkq2uSEHkufCgt2EcYcihDEuwAYGMSGbtBDBmc5gzXeb5P9z3pRhqbwRSj3pfvNLDBftFVD",
  "key14": "24qrgUmGjgozzjGPuSnh9Wc9VtDGt1rCT3GbsUP2vpFdSNeBAaW6PN7GWfL7tjHMBi3hg4CVN6Bw9Ee6KnePn7oh",
  "key15": "592MavEvZxviEkRP1xAPazJ2VPc3rn3PK1wFKQEDVbuXFPgq8PmbHRtS2RwtqDPNKdAyuPEgKdkqPHjkQzfQxFT3",
  "key16": "3UAVR6eG3eiA2rVbXkMJjpHkRW1kvHQM64meA1Rn2hjJ2YRgA1wnb12GrcWmbqitVmqrcDcYdAW6dGYw4BMSAwdf",
  "key17": "49Ayy71B1yjKtuoU9UhM3iQCXKyCRvTBfZdFyccTawpxnMNWPUbCCpcxmM53qgQh6AyeT4KWBgKVmfqsQH4YhqCQ",
  "key18": "59YeN1pxXC31KqVta543VhVsa5FAe8W3pThSKHmKCxWT1BDKYxTtoLF2MMqXRbHnbo5YuDAMUXYc9JR52sbrzdXH",
  "key19": "4t51GMAiVLJBmyWhscTT2WokC7PLYqSQAgm2DaaVnYYJdvxhoZW8T7f9WEPjT5FZE3XSrEFrbakCz5zFGhxrMux2",
  "key20": "4NuKF7HMgg5X1fDnhxJdgojDSvePgjNRTuCNQ16rwJ95HpQ25nt4rf1BchoWmHBDE6s5BEEQxAJDfEFQKgAR2EdV",
  "key21": "uvX1wEpFX2xkLxTugpnfZ3BQfAm2oh648R4AgCvzLrpmf8d82a3Zc4R7s3pM1QxHdB6wB3czrRNNfeiMow7GkUE",
  "key22": "Q4Kq2Bx8NoF64PPvZ8UtZe5mnBqkDdffWMySLbsTGYEmBWuFwZVkgBb6SR7FRmxm8ZhVBTQKZe6C1dyMKstcajQ",
  "key23": "3YBvLQ2wKpnBtUuYkaGRaWmUgKgQxoESN6aWfT4S7jNfiHQT4HsLtiKCVcrcKZYBxXg4ivLr6u8rmoRDkDC38NFJ",
  "key24": "5HR4mbLXNNYQNyHLTsLXJNzJtLbCf9hfYp9aAz89DDRKxVwBzamVLNhi6yJVAk2Ar9VtjeT3mwCHC4EJRPe3YTVK",
  "key25": "4wXokP3eHFy531rvn841kw6KrQ7oTM79AtFXNzbBECg5r9F6UuDrLsrBzcLaD71xnzyCZw12avr6UWDUGXCnBBGH",
  "key26": "T7BbSb8XLT9tbSo83uiKP5RjstxPETEjctVhGFKXDwSf9MBJZVQYHLNyn8c1UwPFB2sJy6cPvfv9KWEjdRPdmnC",
  "key27": "5fq98JweMyh9iLL91ngq7grvmb3LSwKkr9BRpQFPp73FcadQUmYPMgE2DSEjWmqxaJYSEPojuZDknhTsCt2F1mTj",
  "key28": "7jM94UrWq8XvZhFu5itY2J6DAe8Q3qxeufkCaqEwywLQSwHBzUxpHSNyWcQx5mpe4hJKuAoBwESGJsugmJHcJP3",
  "key29": "4a9RvKLesyJDzw35a1ygWi5WsCqPXXu1vvHaf44fA197QcLvnCx56eQvpVL86ycJXJDiW4azV3Af4EbLVxSamzCU",
  "key30": "neESUEotwoRKAM2HaVb35d9t9r1fmh8HYr5kxh7bEChHV2Ls1aQ4EfNP6ievXPWfpZmrbBWL5BK8ev2tmqsS7Wf",
  "key31": "4GJxVsXuA9wAmdXEgnpMDHBpEE3dv4FmWDwCdSjfhmzf64dPBqNEJoNybMF7vWEQosehWBHsC84Xz2Poy2Mireqf",
  "key32": "41pGURyQ2cg365tqk6kJka8JhYi9kCW8e55gmu9hWLEeZQ4z2hC7QS7MyaJgMxu472sbU9z1Bfy8bVoaxKU2StvS",
  "key33": "2MTQJ7BbAavmzy77Kjsxa9F85P6uZ7idgBdQ1U26vkpLZCYogvpeHca9CPcdS4Y66QhfHoAgdQYk6Ub8nczd7cbA",
  "key34": "45Sm7JDaZ8BJLtoYepqthbd1giEAwseYzkXqcs9QR1nWtMr1GzSaH6im3HdLPp95pRYjuKnEfdXDbTUK49SpaPQf",
  "key35": "45YP2F6SZy1aFPZGYnJBnUxoDwcmFNrrCWRbXq8oUVGUdr7CvQi6FRETusYbQdw5o366HrEbjGwDNuS3a4UsSeah",
  "key36": "4TjSRQbVDz8Fo2ceomtGCA6ZxS3M81neouvfAAQdNbgsKeHn8vqjZZgTUSCzZhkx3zy6mJAcRz4WBnP7C4hgZmng",
  "key37": "3He5bQEPfFXq9Vh7sYTHMTK6pPzDhFtxorpi9UA54DWv7d6G7xp7Cpf9xXfPvRtC2C7WuirBibReSESUVkDRq6P1",
  "key38": "xfMDpUw7QSqxdtifWsPbSFjrAdajjsNeJwiU4Q8SKBLYoiGsr6eKKdC5fWZ31pKbywDaRjtu3iUnJRjZ8Nhakhw"
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
