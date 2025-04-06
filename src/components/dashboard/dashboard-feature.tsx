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
    "iNAxbc8nUadVbD7UFgrv7cMNx5Sujog9QPmKHNsvusyQLJ9fnmvRop4xmMdR6ugQK3KDambyrHgJ4Uy3h1FVdac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wKzkp6kHrvKRQ9aNQcNaGFdrZo5cxucLR4doNLPB3HkPsLCUPrwsG68vAJgQ83URqPq9T1YFd4GT41Vs41jAkFB",
  "key1": "Cb1Y75XNZke9Cyu61SJWzWYu6PtmpLFzxrbVznFGiZVCq7DdKfuyUH3mRBerbuiJEgVLC8T2b4fzvYu26YySM5m",
  "key2": "FZxGxb3r3wrCkvwTdZgJAkzDXhvW2DULum9bxzUBJ3iyWzsanqgYed6UkwVbWjqjA4wfxa7oTKZfBK4mZVZKhh9",
  "key3": "2XV9MZJSntJKY9U2rSTFTNRcfqskgbdq1DWyyu9uwCBZGjgdabvhaNAomPRhEuTzHpuKYGpAGsGg4m3a4dKJw4wx",
  "key4": "47dF11JYULVFLWR149XCbSXbJvmLvyhPKMHK1L4sdAdT63FdXeqiPHD6zLabLDqrua1xB9JYgnUp8wGNfyjF7Hdm",
  "key5": "5Ei5GkFEBh5iQtPikFy4GDWMqE2j9qvrqaCVq3wAwkpEcoumt8vWW1JECDgyESD92rLmjBz3i1HDH3Rtj4jwSpkN",
  "key6": "2ah5X8Br9A4wx5Hu8qYatFjMwQ6V7S4cx7Lpfx5nKxaawnjDAeMse12MPjKVxyL1MfUPQJKYfqTcBvdvYQUFaSt6",
  "key7": "2beup74uVjmvL7R9nSQmY26zSdbw4GX5jnSkeWic3PkaqaSMjVNVJWBswKA6B8gVjN3GsL5T4foBAE3Aup9j3DsC",
  "key8": "4ipwxsbAdke2nGijtYEUbXc31SGTEm25VantdEbS2yE5gArxR8wcRvD7M94sVLxWXm9h6ES7r9pjd6Um3Hu4C8FD",
  "key9": "71PTb6iH9Uu5V7QEybVWCjNPNoXhEkmgv8XADh2yQsBHXLiwuq9sG5z3pGaCr1aLDhzm4NDr6VoPmbvE1TwLTcp",
  "key10": "2eCNN7gtkNNBMLvCW2QurRWY3Jtw1KpxedGQp8UGirAxUgALcgxHYjd8H18MEpt1QsQ6XugxxcAgTMqwGfDmUwzu",
  "key11": "8SUspkyVviUkS3ye3Y6YeFdUDE8JXNiQkxLhmvE7cHgZpmYMzE8m76wQ3TVo4iLoENBdtjy6awBEg476Tox8VeX",
  "key12": "2JvKjcsnub17iJxK1trBtLnNvBRxbLiN4gFxTx1c3C8W87YfaEuDounALKsoZ5Gyp4SdqfLF9yxWGbksvbB6W2Pe",
  "key13": "5R2WeBoxuetrQ3wX1g4D4hrNF7S37gr32b92FRCPza7jz7b3aRWVvEXFKrbVMq4xSLZUKTwho93neZqMYMixoR8J",
  "key14": "3Q97cdW16UivxKE919zPQEsCnwV8nLMARcm8cEJ4FEgotEPE29eWTNnUfYiG8EpdtyqzTwaN5DSumBUjM3MoeGHn",
  "key15": "2AWGA2u3oB7QPNkcd6KMP3gN3FRDd31aTh6W2QZ8tpUiy4LvVcW3gst4dTGKdmJ1d5afcRiCcwETG1u4jJJ3QSsx",
  "key16": "2YUtFTD7VPXzJnG9zJet6V8njawBT7dvsXvBUS7Y7RGJA62wdGUmHNkd5xTuiYj6T32JvshE6SsePz7dx74ykhye",
  "key17": "3AAFq9nUpwqGKQB9HJCBUUsQRAMyLgWq7pXJ9TiVncujzWqNdvrCEUJvuw7NT3CBa5mgEnFXGrvsG9h1NrGhvVqh",
  "key18": "41BkPGH8ozsxkwmL1m3wJ2bwSYobtcKd7WRbS3pXaT2jP2naEUu4EpV2MbhDPM26rHVybMCprUQMyEa2Mp641n82",
  "key19": "66j6eUMkRSfRoU9jh8xS5dfgY5BhK2keQivnsMr6bFQRj6zh4ecqGJShfrkLGvMc4JEMevUghzCT1JHfYPdxofBS",
  "key20": "3i2NSi6FvbAoUFNdRpVDox8YTaK8Ww28dNiERzWyuvCX8bcPqGPq7MS6QNqCWHkodbohmEwx9aiAQoD6cBGvHzTB",
  "key21": "38FUevyywZMqsbvGSLmVman3WA2AdgYmH6e6TGN2UQt7kty8UAc7RqhtGqSSoAKy8Z7qaL8xkBtTKpjqz42GjpNj",
  "key22": "39VDYKEmWkxW1D9JQPb7bq6C59MXoZVsp55Qj9TXEUTNFtwUQJUCMtntRmV3329Y6jMRJgWJb7875rMnH3SDLB1B",
  "key23": "5Tb3q8s9mhsL37EMUZrP7UrnQ8uc2MnpRQUpayzTi6fHLms59AbdQTSN4JtCGn2W88rm3Hum8M7rHhZwqMiS1DkA",
  "key24": "4Mz74m6AvypC4txtGix1DWAuCJyk8G6KUZk48z9TTtD9ZHyMk82HgN4PQk2dX69jos7DYBChhcga2TNcAX5xc2Ef",
  "key25": "5FcZrtLmVest3573x6Xe1Jp5CWbwGFRMDN8gLpsTADeN3Y91tsX9g5APzv7ymUMxeWtuRRQwZT2p8KGBDhC1G4eT",
  "key26": "mix5B75TZozZ5aRcLkRshTzA5DKg8KDVeP62qdBE3we9fk9LxtaPUo7ixFhMG3Ly67Q3ZihKLL3JSNhQHkUBP52",
  "key27": "5beHZpS5FdQUiMRuzTc2hwatNvua99A5cs6F6Z5ULTd8mLeW3k76VUYEDK6WXNCLihbup981zVbYWGJExhtBdXfs",
  "key28": "MZpq2v1EtaarSgZtbDCao3vp4ggbSVwYWBy8pUVEoTrUKprnBuTeHTuP4LZvPPSTMgogZhGRm4qjNjibBhU17qh",
  "key29": "3JiT3uesL6uD1HL8hkXNbJF843eSXrMGVvZ7G1rgTaWTwfzXFvJvQcUTnNmWZW5kQwi6dShgNRRfHrm1c7AfFtmh",
  "key30": "3SUnLVXwRAQs59EFzCBwS3vmyFvtqpybSJ53vmzhSzHS9MeAqnMwWHU3tiVAYttgoPvSx9urgwfkKwBsd5eu2gYZ",
  "key31": "3dqLS9BZJ8JSyPbdCfMZaSqajnynEXfnTjc8TDYTxKPFViAznhrfyXFYKG46tmBF8phNnJ3VF1S2piPRmL21bBe3",
  "key32": "3buQ9MvzgqXWWxxkYeeNy5djYXCKJFoVwxV758fKGZfSeSBehfajd7sqs7SF1h9fMWHadzr1ZoANk7uovkxYtA1i",
  "key33": "43Xusw5M4LPo6Kq6iCDMwwggmCfbRYhwxdU1LFCp6g8crfEpGzoq1YkNmx2zsRePEoNgFefvR3X8UcwpKnsKJbnp",
  "key34": "4CDJrsCfptj8FDe4HCvejyhBCWVUKBCLHeCy7Zw2HzrrWwC6TcVZEjhH1KyjuQfUQWK8uReh5ioeTgG6vWteY2mx",
  "key35": "5qEQCemjQGCCcdokJfq7gQFDZBGCLWQSHyEKGrG7DgXZ4GUK7TEbhwGEXuk65joeAgmujWhUez1TNFDYeSxcaZr",
  "key36": "2Vh8NfYEPi3E4dymGL7WhQxMUi5kJGdyBE77xJH3BwKc83dETNc9qxvWqjCX3F95aDTo3KwLj1yFJxuutJmuoiUH",
  "key37": "raL7YBfFajHsY483bsUcx7LFGdRfH9qLCLVHrvC17c1sg8kwDXxR5PsawrJKwspceSswTogkkWi7kvE3PRarndF",
  "key38": "5fNyQpoHudfjooXaLh8CvnLgzLsUC6dXcHmzHzGCgErqH8xniTLrf755cyahUwyogxK1r432CyXCtR6UnU4kmcSn"
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
