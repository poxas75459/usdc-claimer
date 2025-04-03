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
    "dKG8UUVnjDV5A88vK98hXSFMpABB3FAkG4wXTTECoDG3kgVLjknBe2eFCoeZx83AGKK1Nxo1X1H1vmDLLSfUXJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FC6dLzvMqEbhG6RgpLxeCxdDBzTG3qt5Dm1HvQbKHbeg7N5d1yUeVUBEjmjDcKPzr59XopW9fY5hqjHdd9W4jjL",
  "key1": "2JgLjm8RqmmyBVk81PBeMFXAJJQxakdScMF8VFzShXaNAjUBnTFVfw84YQfHYJy4DSNbENM19e5xpLATkJyMS2qk",
  "key2": "39fr3zfuKUTk27X5GV3yiteMGSw1XpjeZECbx1Pf8Ytrriak8URsYYSmxJB2YghXsU5vvYW72cpTaybNLrffmbeS",
  "key3": "4TwY41EbNRh7GCJXAcpFseQsiXXYZFMeDBCGXPUUQjDppyb3hu3HW56Mm4vQLmhhUuwLS4NYR2j18VQ1KubvrG3h",
  "key4": "yTf88PKzeBemL5tNfziMWcDoH9X8X8FAgs9nZSGwDW5fRtXEDsbWT2GoN2FS8pESMjnZyjRKcaj9nv8guFiEaNa",
  "key5": "4hMAZtLABVKcHRPgEh2GvkbrBrSDaABqp2b3LycRwoWA9zHZ53QVkL5HuSsNxvPZNHAd7RrdzvvVLB5oGB7ngUD7",
  "key6": "5TysfuM8wpP4k3WTiHxe8GPAjAtRhRMnmBCdFjxNn9t6aQuTNg7QFZtGCKKRUhvJSHmDfvAHa584iK5xHmaQKLiy",
  "key7": "4Q9CXKU2ncPhPZbZoGr8sKt18v7sPvxK8woEeTpzyApfqr6FWZwYiYjsVJaSDjKn1FLkptbe3iX4kofu3nZecjMG",
  "key8": "2eU1CutkxDMt546evkUsquh6FBs4bnwabRtjQ3D65CkMAEY5m4giB48FeMSnW1EPnDaZg4z9NDQWDTgX2XrSH2vM",
  "key9": "UsdriVdjdXC4kDz4PwJh5PCVQ8de6gPiN6j9dgj447VAb9ww8CGo9SyAV4RNTA14jZ5ojerBTbg76QsL2d33wDh",
  "key10": "65EP58o2AFGm4m6X8Jd9PugZzaQvLC42VQaPmhe9nhXtKK4DXEZ9zULXDuWQNRXFrFBYQHkovfMBGzQJVUxJaKDV",
  "key11": "3jbiugKhEGbwyNUs3Qq1rJHqDELvoZepj54XndPZ51gQUpREXxxjNbAtKM6GCyi7tsLTPLVXGKCSuN28trNDa75n",
  "key12": "4zZF8UGYyWLAA24GC3BsPe7WdHSfmQRhrJDX8heSCHVQPMf421gtBtvtE5jno8CECLQsETP4HWuSbKkbDMdJVc5J",
  "key13": "RaMEU9uRBj9MNeB8yJ829QTmwfLYqejdBvkpzU3nH6eNhksd7CkchvZd8ard9ryA2gHuMHRGEF4iuRBW1wAm7Sm",
  "key14": "4XB2yzN18ygU5PyTRgsARJmBDg3FgbNqDarjyFdDTnRvWvZjZprXqTEoePN4QCVLZm45fkpGWuzEHxU41S5yefEe",
  "key15": "4vwqM7pWszAo2AiUVFzcTF9SnTLNCTQBWUSrH76Wvt9fWCBt2gJAomB6eNZajs3Xn2CMTELkbDrZ3K9Hom69CsVX",
  "key16": "4xgh2gc6yB89y9RkoB5JZCTDdFrdZsiDiNNUZ3GfmTUSrNo83DUEwi8ioyu6kP8SeqVzUPAHAFkXKMu1JEpxC7gJ",
  "key17": "37XFLdKbRBgPae8fQbXXLkeSrDGdW5xv93Y5w3GEWwLf7ETq7QQJcSWgEg2PGaYFx23QrFUSRL2qzVdoVfrYWXXR",
  "key18": "59LugNYyNEYAiWdjQ4NyrfsGUqRah33XbkS9UWfUQ2E3HMWQ4o6yerpY2CzwvNiGmjXLvx3rt3GmD3UATB7QAgXP",
  "key19": "2kd5wx9u3jZejjFv4nAYWBsjJiTAgx9ED8i8ysw3jrXxSyoWpo3nR9SBmJF3MdxSitwGgX3ZayS3Ps4842Su31ZR",
  "key20": "4ofjyfa2cmu53euwJGPhfHMnhuPkjQgsEy4UQmohmB9erffzTGNk8CKGyn8ev2B3p43ywLkV1PmBZdokFwxqoyuV",
  "key21": "3NugzHE5wae7u5qMdVfzrPi9gK3FNva6NADTgxTDkvLvUtU9Xc2LoUMBFw8sytFRHbWPqA66o5dBJhrK5YeYtCcU",
  "key22": "5wzpDzQ9MJ8R7eyBJfLNJdjyUZG6uG7QrbKQWva3DyaK83Fxw7ovpYLV6DnVABzRemTmgxetXV7ohtcmP31Xffy7",
  "key23": "2HDuL3dxtUrQzwSBT6En5yCmMtajFWr1Kqfbshy58wSvpFXzRtQsMxjT9vJN4W9D4rXrrkiBoesDSTc6APu1cu6i",
  "key24": "4XqtH9cjNWYd8HG63rZWh8Zgv8Kw33i7rwsuaxVhD2ap1ne5Ztu4NxvDKBCMbEwW5WHgCuq8cxVSc4JaLvLjXHhj",
  "key25": "aS8C8TTPT44kMmk7mWvg3CwseXf41UNr7WjRc9Z2WCeoDd71aEmY5mqubL6EYwhtptShgZNi4vSQzHbavgXTg3L",
  "key26": "3i5rUYQd5xNHxKKucw37d1oammU4u8qHkxbTRRB9xkrgazbgG5hpP6trSNkjh8kuVvh7ukt9LvaFj1yU1RP8EnjH",
  "key27": "2RjXdX77jz4TpDG4Z7RoVZS7yUAhvbJ17bt5YaxToeecweaqv8u4xMru3NKz7isJUVTkYZXembU2QXb8r6d9p2Mu",
  "key28": "285L4YXDnrdcJsrt5FpmLgXnMwL72AESPm8shayW2zDVjZSMQYZnMkpu2b8eDBdvrdGeMbE2EJj7EUyLHzTCstKo",
  "key29": "4vwZv5xY5XY8xkhbBMcuUv8rwTHxWSKJmibrZeDV1Uj8nqwTGEqrK2KEoXtCxWRkTpBDhMTJXDzKSGQxbiV2kr8p",
  "key30": "XkeHWBcmMKQQfp6QehNyCb7GA6vF7RvE9q3wmg5pMBLhsXMHxrDBnnMx3HV32M9kTQpKryfZ8cPghRAWGsY1p3o",
  "key31": "QTnQyhNStwb9VytUFtyjvvZs5g2C13k8E58TNBV4xE9t7wMpMqm6zS2nir1istxXa997Y37myuivKbFajdd2Mh8",
  "key32": "5VJWT1CV7Hs82G3u34tbTW1CBcqYbQTochakxRaqjaTLAY4FjBjngzETZThrUWAMTYB3FcrFZ5dkTsgWtxzdj8QL",
  "key33": "24ZWEQwaVz4NPWCGnKLGez4yHdpnVFbfAaTcnFNXJaJ4TN28crUNxfYrCjHmRKMgL3TEgL8k4Be7rH4Y6n3bHDsi",
  "key34": "5oGHwi76EcsCSGi1TUWBPZe2fiYtBSX7GQe585DoEAZm3nNcbyrTZz9r7cbUXVTaPPLYQb3q76t8Z7MDZGsy9UUH",
  "key35": "WHFuJkjgXut2YWxGBWSqykMCwre25jhoHSkiJVo1aXqUHszKRnm2RhLyxkFPsxkdArWBrS5Kf82SE5S1gdAQdMR",
  "key36": "3fwEHs3QSHBXakjPPXckqRbGaS7SxPYqWv3ztHEja2TvkfpPumwC9VgR7En193rhC8nVsQUdqueqMBEYyUV5HW4j",
  "key37": "5Favy3XLhCjYWXZP2GE8WXioA2qc5pbXG2yCVn8zD9w3nJrygYp2QfqY2kxvRwY4jjzbXo3SYkgqgNjx5rz4T6Rk",
  "key38": "3uPxF44vqZheYyFBopviQt6yyJqhfD37KPVGVWUcCotLozrVA3fcg8q6A4pVjxmedguhdBxjUW6T9CGo8MSTyteJ",
  "key39": "2uc1CdgHQgnW5ECEba3xR67HF6f8LofzuKExco8CuS1fC9vFB3fYHLeVjPnRbUCijB6LuGVQrcwPLov4jzemngnE",
  "key40": "DvggNJH2iiskZaaQ96J3WGrPNtPi7c6SgFupfdjZoEDfJ5xxgrKyEUwu89e4JC9iCFSwAbqQYKucT7xGocj58Yb"
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
