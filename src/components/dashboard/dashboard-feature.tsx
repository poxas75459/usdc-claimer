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
    "xupXEtwHTT7xqNkcYK7gP1hGqjfSpKNiMYrM4sfcdykpTec2igX6WRJ54QxCELTUEp8fCnqof1uCtGwMpKfgGLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e2rYJntohbxp8M3MpxMVdGzjbDAhqxnhUFEcX5dUQpVcixQ82XD3fzzWAjgfJexbHd4fCdRoJViUCwJv4hLQhQG",
  "key1": "45c8RhFxx1rCWgo9Km4mhGuowVVMpQf2aqfJrBBGqautPeMnvbTVWYzFhnskqNWA7MJnv56hja5NsNy89aQxQToT",
  "key2": "4TZRkmPbruAru1i54PH7CQpqzvk4LJDf4ayx4ryL4DFtPMc91P4TCHK9ia3SzB8iscXrQRYy24y1uc8vmM3GqmTQ",
  "key3": "2pQMP84LVim69SLkEsu2bGGaijva2YohRJ66svAvvmX17KpgCQtAR5bb5ApT3shaM1BCja15CScaWmk9y4c1LRWr",
  "key4": "eh7QXg35ho8NA9CqwAvahgAcCffk6NctwpF3aA9zeL6Uq8QCvMNVpQxp4t3ZikWETdvu7oUG2kvGMadRq6av6wg",
  "key5": "2ZQBNjeoBhYZjTgh6r1WPQ7fHrN5GLroCnBryuYKUKYZssZwVrF3gQySDtQQbQdJt8XUWUq531xZhN8LN39Fuo4R",
  "key6": "B1dpQ6uFGEtWgHQvSYCRn1jfQtreVzS16T9i3WiLr1GERpDygrNBhN4KRtbCJ3gbRQEkkqca3P7vGtUVpjbqMAu",
  "key7": "4kCEihFqb8aF1LgZ3hcQnAzftuyKNsiffsa8aAN54tvPu9fvnuMHjVx3waWg6mmpADMNan61EY7TKNz2cEFSvvVe",
  "key8": "2P45EN27YWHzudctedQanYWQ3THcxgx8iuKm1sMiAjje2X7cqeXcPtsmiHAWCtt582fizbY473UJhM2St2u95oeb",
  "key9": "5WrwtveZqKgU1Sv6TpXiR9SgXHY53ozbtbmnNHknVXyQFqW41TxuFYpmbZEGCbMETnCcKeb1589UHbBoaFBVh7e3",
  "key10": "34XxkqNQkbEM7nMpxM3j7DPCBVSFA7dHJkhogRLY1ghre5VxihjWknLW3QeRqT1jz4dw47N7mTCjfPEdTXRqB5Do",
  "key11": "3r4ad6GTbTNjeNiYhesvPrhthEpenYdUMHKDLQZxcRTSZrCwhw9jNU37dUQP74cLHnN2PSySTcJ4gj62YdswKSkS",
  "key12": "21fQLab7QY431ozJJYgCc3P15RX8Vb7fctDnZFPjhKpqivsqNbnQNjmnNjgaSY6iirG9jQACBxYhVV6y2JkQpiU2",
  "key13": "3NzkHcPZC4WrrPwf6rkjcfBsJbTjjpwvx3XHKva4quQc2hmxJV1McaERVxpZsA1GYMk34J23AUM8UNJkaPTmuvx9",
  "key14": "49wxVyAQrh72cUsi49bBcni9pnuDY83Lp8rYqBgeUw8FNeNyQMioCcD2UAVF3xueugiy8sv8wTYeWq1vRt2DB2iW",
  "key15": "61AZ7fTzZL9tY8iB4u1ZBPaerGb8cX8hohfwHULPYoixtHHG7LHe9GnrbfsmWdoZxuNNHMKWxK5Fju6WdvBdB9Ag",
  "key16": "43b1z1WysnZ4s5ErHkJyLiFrz8PeYogD4vGaq3jyLrRjgxZ1KHUgSM6tAMdASkB8KYp1enzyHtfDC3PMaYuEhANV",
  "key17": "4q2bCgQQsoVmH8sqPykpS53h4qj1NsjjcmGSpiZLkWKdHix4X9EBLxYjqEVSwTP9NzwUPkYBnH3syXveKnhS7PRk",
  "key18": "5XpmwWfX1f5JFuaoK72TcEHEzQ4XGQrDgvZe7v9db1pPYaLNPvaxixxbyox9HwRRF66apoQ2tCCucdsUd8aPVftm",
  "key19": "2En4V4DZRGvuPWzRUXWrWqbNc8utVgpXy9eKUAgrRJazMsicYKoFLZAZo9daRSaPHpVpZbqhKapbnydN4zkY4rPe",
  "key20": "4L1n89sFqvigGCUBPKfku9GXEpSbKn9wGcLGvNW8oamzzrMr4BYUJ9NMnSz9M2jf4EBYZsnojDKtJt7hfPG61Urk",
  "key21": "3FjB64W1H66BocYbM9BhwQBuNxbPE7eC6GDyEVLyMaLxsCEqknpyQV3HjSrm8at18C9jpGnf4iNvfRaRjuwT3Pya",
  "key22": "4rSNkNTxUTvFWvf4WVYrKR17gJyMuQmYEGUotyxNR238XG5ArTZPEt8XbRpymB2W32g5MctYbFWNFSvkUbCu22Xk",
  "key23": "3P76x9t5fz8FT3B9jp7YEsgP4gQTgXLCAvbnEvoAj6f4kXKtsx2sh6TLruckXD6V259YG3zqibmD5awQdNamRBW5",
  "key24": "sqcHgYJ8joZspGZcbXuTsRwv5qnSVuQ8GhDHgXTTdkB3JTkXYkLR9ANEGwMUX8A1mP2CAh9VbeRmiam18Sj3Kcv",
  "key25": "46DTPY9bGqqjtHnRqhdqTWZwGuP8Jqq6sN96AhuQjNiMpafv2kamtWcn7whniibeoqh2mCZ7zdKSJ9Uwr5TGP7z4",
  "key26": "4ivJWjMnmJoZ8HCpZopjpNfWwiQjvs86QZ97E3Eoih8SEtiXhEG7AMrDkDEJp4hKmajCMcLrTmLMuUhyQVcbgK5x",
  "key27": "51J2EKEwkeFt1LEdMM6A9imzvNiWHx7LcDnkcHGKFfuikKLXpew83JUNMyPdq71UZN7nyKhu4KSmjHwPtQpdU4YS",
  "key28": "5Tt4f1dsH6oA1JeeQWJNxMr24FvTzcfkHbQn8RRaibFbCnWkwTUR234skjXEpQwqVvi1nh9g9PWXQUW2dHwqTZJe",
  "key29": "2ByTt45faMyE6wHeEWAUt6vPDgSQUuaX7tjaNracn9NTvPxVigCF3FP5R3F7YWXDD66e4ZT1twMdyAVSBuqtadPB",
  "key30": "3irEqZ4BpyHzayLgXTjeZ8oX2BqMuENbWTec3MJghja7XnmdQFvozKoaVu9dhfhF5TmHm941SojNXtLJWwzdUvym"
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
