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
    "4AZrmSEXXvHAHz4HqwQxCchiVneAP4Kz6BEHv5LFSY2dwuse51naCGM9MLC74gK4UnscTMEob6BtEXe9UzpH1hGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bxJpfuKUY3PJTzPmgB4BRrJftbNLJUWNxxt65Hwj2v1wShAVePfLBHKX1wjgJKd7akrKKjcEJDJveusocmgJQ9i",
  "key1": "4EHzoUXFze6cNpYRzkC2zY2oRgcrYbvzt463eSpT55CitS6pV92FungK3xJU4nW2MHiv5koct2u3ouU484zSu38H",
  "key2": "5NidNkkqBhwh3GK5waGSDxBy8rTpdVYQJvxHmJzZsDirKA7KEzpS9hLyZhiLWKJ8t5j93Ld3eKS4YJpcCnFneYUj",
  "key3": "2D8z4pBQsT9rnGsB1kyiFoWx2JJvX5xmzZJEK9HqdrjP1ncKuMCS1q6cKBFZyrPGzREM9wxcqUTjgAzBbToJUt4m",
  "key4": "4nZwuBpNPrTTWPYSvtQS9xKcxFy6bx3PHPBtmHk9nrbj4hNRgHYSGKvpr59h7BJiAF6zJ1nmCZtqVATbpSnE7Zrd",
  "key5": "4sFhfs4pnurfob8ToSjEyfii4NNXNQHDz9DSCJkEEgCSGVF848QXwjagCGWSib7gYymUbDX68fMykKkpRA98bYoL",
  "key6": "eeEDCYAZx96w4doszMJ7wTHJYREXKA32dZW51RQ6FxmUCNY8JX6fy9rPdVa3xUzy25nzvH35doyDVF1ExWRGKrs",
  "key7": "5zyq1irX369t6mT1HXkgAhV9TH8tJ29cKjEfDXweo79QF4DeTAznDeiggHRwpR7cSjsF8yy23yb8Zxn5xSr6XU4X",
  "key8": "n5L7bZU9LSEuAzdt1GfwhUjn8Jz1xoC1gZ9dn5oQPKhoLiuV8X31E5PhcWNw8PhNgxeTURaTjo17vRu9rVc89LL",
  "key9": "YyxA5tuZ7uJVdLMegJfWUn4NEmhTGZwweA966nN9gvFvwE5o91ehoToNh4VbqKECWXAmvmRQp3DEHt6BygmFMEV",
  "key10": "64GuVi5W9bj4AUiQBemeSJGzq3g6q5ZMC6cW1JqXsgDRPKG3aJXrqwkntYa4EKWFhthbsAkpreonqBfRNtCw9UGy",
  "key11": "2UW1fgemksQNovFP9AtUsZy6SX2gH6fJCuPM9JZjE6e7d1bNtJW8Gi97z3rQYMnfMWZY3PQQXFH1fzf2os82iFKn",
  "key12": "2tbvYauAkPkoFtdXTAbUQkxgd6waKbA3qiBAtePy51owcffDAPKXtV4jcDvKskmrSUPW8idSC6Ly7rb1gVXKtvwi",
  "key13": "14zehEjpiu8JkUxxiQcyeg62tGDvtao2jNhWcvisgQBAirLgMieYPfyWfAXrs1xPUmoXVFmBBRC9y5BPPwBMj1Q",
  "key14": "3cGoGT5WYNHeePbxYLA4rqALTwQzzmdBUNLWhRkPj1UEFytwn4s1YvHNU3zgD3XjtWiWAsrCMKc2hvDwCi9m7upg",
  "key15": "66x5ZzzfvYWEfKmoQ2cTGdDC4nD8Ygvp8fajfDrSvZrn5R56whRANPWDogwT326WqkvCiCT6Xj6A1rFMK4ziPWB2",
  "key16": "5Rn3q2Xiaz6AjNkEfk9f75gpwLn6H7bSpxqi8ZYnaQwJTuRiYRXoCKUxDKnXHbcc2mz2z2xbG33yi9z42QqR98YJ",
  "key17": "9aAVNVripEbDCiakb6cddkFSsPeG1fNgn2JsFvy9mLZcVgrRHjE681Yjf2unP3WeSLYLDewTS3N4wvgtdsTjsd6",
  "key18": "S5qzFoPsMAYkWisSCnKKnXCE3fmoUyUs51EyLz5hdp5kHrmEHUHAspw6rPML3bJCZvqumZtupb3zJDrH5ndZETu",
  "key19": "3jLpDMt8Lv9aB7NsJoqtBYdehrzxtz9Bh23CmNKRMPqxGJYSRztGn1aejjxB27p6WEjSVjU9SRGFDdrZnjdPaENm",
  "key20": "2AnUD971VdfjFV6doPNHxwhMrhtJnqs7WBcbCdBkWjoSJgK9bKSkBhb39ktFURTmUV5VpVmqzVEcbiKgPXw8YoAF",
  "key21": "5cNEZPaTU8tmkVoHzd8nGfM3nsvgvFAsYcDtVY4SwwJxZdV13ykqZ2Y5DLKLLMRQYsPsWdAk1QVFsWyBUNkCFnLb",
  "key22": "5cU2L1UuVxKDMmuADTZMqW2icpU9jpqc9CECNejHRRNA7sQDu58b3GXVLkrMks1Q9XiLW1wk8jHDapsXAkew4PeL",
  "key23": "4NUzxYwMwMM4W3sMf2h33DXJD8JJ2mu7LimWD7SR1M9dW4UJBanCJunrtu8PTUwEYWfGMb1ZqYtQAYSzZSsKqqiY",
  "key24": "4kijkUqSmPUkpD4mzaxgsDWq3aDrG6tQcay1ECJuZUqt4Xs2oEAB9wm3RkUQMF3peBPBFpshhgdRa8gusZzdXybk",
  "key25": "5WKbGXedGWC2MHhfy2SjcK3ANvUNY4ejNzi4bexUtEZRDiGKhnrMWrirrHLdJALBJEBfWKe2pQqBM8z5uVeeVUpy",
  "key26": "5aYcWkiabRRnk6Fcm4C7KnX3GDLSWDkUjt5FZbuzd2Z77PWjRsy6ohhhHz8HR9Kmrraiy1qjPtXqVRjVB6e7DhRD",
  "key27": "4QNBzF1cLy2AAeF3zyQE1SRaveWVr6zoRjgNhv12bXnR81xnMsAK9XXBP3x7bsfkutNr9dAJ31ENGycmaLnz6Y2X",
  "key28": "4pSYRNiAtgPiTTT1nLu4ePKQYT8NnTN8m2YcAJb12GmFDnx8XLxpYKK3Ju41MpCuCW4NRg6FAwXpouVv4Hqgf7ah",
  "key29": "xNw7d1Vw6NfLdXPV5uBi1cnDMCHsvdVEsK916bc6kWBpHPhcQvBrkCScr2prjhkRV8d2ZjM66tu94NAmUGey7DN",
  "key30": "uqXpZSJ6WfyinmwBbYXatFw4tmkgtcGeevmP4jcRb59nNpCtHNU166C9MKSkxL3JUq2oqGjMKAtRD5Qj9aWUamB",
  "key31": "5Anud1EXPYX2EXGTcWELAQrhEjCWYZPD8o1W6TCf8FTTFxZFehaSfvtWJbynYqV8jN1eNLv8edjj47DNzRe3G8wk",
  "key32": "UB7Luybn3T3TTLk6B8GSMMGfjfAX4SpvoTrkKa2n31ewM2H9MYYBDJZb57mx46e3EPrXUXxTw8BQkdRaS3oqBsq",
  "key33": "2J9g9KMPCM2ZJU9Saj6rXRHgWBaAf6gpShiS6GrBLTd3nJS2Z9JDFGFdfLwCjbVY4JzNTbyiLoswAwHbYAk1CV2Z",
  "key34": "3LeYwbu9tDkBF2WdfjE8Q2YJBTGA4teqAjM31CjRPwfRS4sr6hSG6YhNtKkVgWhugEXwJLUDxaLnP6rcdkxx5Wfr",
  "key35": "4cTMQdP1SzX3M7QfW1xww97NN2v1tof2aR4c18Uyzk8CWzJJnstHq7fddeanWeBrwQBYcTkPiUptWCFYNvyBjnr9",
  "key36": "j1VUhVYUMumECWeGUCzhgSJKr7tLPCV1U3X9vBWNQxxm5UNiVuhh4BGgnSF2R6ahzEAQ3Ps6HQ1UCXD5fXQPyYA",
  "key37": "fJDSZgpNtfHvKjYKRmLrrBHSEaTdyspdv62ckE5vh7J5epUJtVznvgRyS8urny7NcxBtBXYtLj4zWt7Aju4mnZj",
  "key38": "4CMEVAcRUbVJL5VG1ztbp7GbpQnX7kmooT1p4KaZU2C823zFXFbwWJ8WdJqGEzo4fARPjem3PUdN8bGU7EKHEnzU",
  "key39": "3rHDxdYvAp8sz4xUF9rWW4FQVfHmKpPDQp5gLcRX2PMBmbFz5L55Z8WdMJpr2jz8NvCFQN7ZmFamqsbtwDm3tsfB",
  "key40": "5HUNBudW7wyJ9SqcfmQYmFGPjUypx2vYbVGVJ1GNxyFrzh4EEHY5Rkgpko8qzTegLcUrnuPgHo9wrUHWaPDMhcSg",
  "key41": "edwwUbakoEi1JxQvomYA7Tdm8qzhT81cmNnXXqj2QtT59wAQ6XxoCk6Gx3DMAFRWfDoZpeijNBvSxJgsxi1jBND",
  "key42": "2WKnwteCNFyTNCfLzP3HDeQ1WnNJck95BLXDgdwnDJU1TqQdU9QPMif83LkrJtgUx44FEfprEsVGPmhrMBCBW7qU",
  "key43": "mdaBCEYR2iWMRKayRPuiBPP4je4Jkq2TpHLSdAo1Qi7jGvJU7Jg6NbK9uupxp2jt3bbRqZ3n4RKBrNuUia6uy87",
  "key44": "QMCfhCExnfZoMHW19naNdCQYXHjKcWsXgpv7VamwRPm1VSWDD7NkBwW1Ba2DZDmq47oE4kGNsBrcgowXi8KeM91",
  "key45": "31Y9dMaoeik41vwAykPye5iHVpQwZxBBbpz8Q7xgw38mDykJTaFpuTZv53Ly2nLwrSXnsFiELTV2ua5mAjEwjmzU",
  "key46": "mNkQp8W5d9TxBgY5MWxgjKjfiKdFyotpMmNuoV7uewzmh7evjuEdCMTmMFPyQhcR8EfDkz8Dwi9TUZNBDjLcY1C",
  "key47": "5fsuQYxULFBa4EjG3acHoUBvTZcj1ypQeGxyUKd5C3CD6gP7nML1eXdmrx7JhojHJenSv565pvxZQ94E37xDXuG8"
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
