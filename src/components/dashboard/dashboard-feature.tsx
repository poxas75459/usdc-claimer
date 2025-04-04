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
    "5Be5FwDx2ZZHRt7KfXjmEoHcQDacfgd6WPq3uK2QQ4SJekWshkLxgL4yA7xfNJWdDn1fBLArRxZc6Y7TaCfcjVAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pcWdogiTpVCwS3GVqD1ZNQsEPRyRTEThve79EVNXRKZCQpm6bURZS2ePrs1Sc8UBRbPwyRqtnHmSszRVDmoPXEV",
  "key1": "3aEquW28SWH1UVywdbshEZcyvJQ3DGaejHHyFbZDXs5oSn2XU3gyfYYHMarFFTY4on1KZyUTfMAyGN7t8NTwdK5R",
  "key2": "2WvJtWgBFoMWkZqxLiMHoDRP3R2ymPr8xztyLEz34CN99HZST9d4Hh11rgnRBHPd2WSR9ugd9oiQaS9an2gJcVmQ",
  "key3": "3KBxBYT7Mz2RL3frLqGNgpEkHqQBFmE6CCcs7YQBYf1XCReL38XEPBkxQJzpUz3iPJc661woaSteGGfcdwtqtphT",
  "key4": "3oTEiaLp42LnGB9kx6iAdvz9eu1mP3csGzpB73pEKgAkwbdAXTkVcM1r8xSNUAuDFjBEAPy5c2nhkfMNicoZbnKf",
  "key5": "2kmpi3pz8Gpv1UNGoyYFxDaNgn9XC7WUmhY9WFrF5C2HEpgTUZqkx6cfgof7fx9SxNr261K8uZHWwCGcGHvQ2ANR",
  "key6": "3r5ryeTtZKJY2vhBBC79iWFU8UoW26kR2M6mAaA8jvZJiNsZiNkKUFucwMndBPURf5vu6WqfMkLj58hH2122pxrQ",
  "key7": "54wt7UghJ5sbNko3mJr9PLSR9Uqf8YgquiqbSaUVHRBtBiw1Y4dnEt2wU1b1hRZNDrqtJbZWd7LHwrdE6ohsaMT9",
  "key8": "4yQxLdrQFRvCHseH5W2Et21k1TY449iAjL3bhnWquzYmK69Jeu9MUhBesW5jBod4ZvwBEWA2rtdSbKszWF6gPbs8",
  "key9": "2ucU8BtYab449Tr2WGZxviPKRg569i4UZ9dC25VpKKLdekkpusBjSvHrbbmY9EC6g5TrMNNFpneRH6pA1upJ4duD",
  "key10": "NwahTYfKfZDzCEk4cpJ2nj3BqG9wiYbLf2M5dwzvZy2EVMd8mzCM3UAmjSCPns9cYA57zczCneP1Ve8KKKburQU",
  "key11": "4bKmZaoge1T1dG4jRGBQt9CyNq3EZKrhLAsqDHfD2RwhnTPs62kHGyBuPbnDQNoofWPi1HLV33HU1ndp7Qr3TfAe",
  "key12": "5DxqZRcDvxYmgfahTv6gr1jAe4nFx9wiwTDJQiHQM6DTkKhG6gRiCCwVDfZmre7DboAA1QrbwHcvmfr4fkTyZgNa",
  "key13": "6o2kjTvFALLTnW84zizt3Mr88kAU5496dGsBzd6fUJsuLELRCGJVUmNdLtnxJk1JLzbcAvezwmY9XNdWvhK6VXJ",
  "key14": "2pBwnFUgpkDuCNCfN8wptnvwNg8Zz63BrGpKUDnoK8vWKHc2t71J2FhDVtemats4vhemNQX8mpvvm8XdwbeQRNvz",
  "key15": "59wfwxwT6NsBJNSJ7cVoQTyX27AozHgLiAgg8yM3MRQCWpDx6pvP3PzLj6UhoZweyruPLF2PwcAnEUqgLXrvKDBy",
  "key16": "3eajh4a4DLFc3Gf2oHrXYTRAWViz4gwk4bumNJJL6VHFBVLs7dVAoTvHAxkvyZ3m8fowQEjjDF4vNJhNe1cNLyt9",
  "key17": "4dY2LYdZgfcHtU6PQ6z3yJ9fZxnKnYtanM2yAWkMhArrmPthdxCaNQUrKb1jujprGDSJJ2sEUGh7JZFg8ETLABv4",
  "key18": "4zTxegAttGghfpqdkz62F3MJqS2iKwQk2vzapEBNizYZ3oRYPwwRQyifNpBdgJnYyuGgX7HnTk4UWGZBp33xEV5c",
  "key19": "rE7tLSZvkvsanREfCJbHdRFeHFx3PYZPXansZ22KvYtiVYLaAdUiqxAsLPdaWpYmPnbH5fzSrnHBjPANZkCaRfy",
  "key20": "2aqmSmjTwbi4yUwBfEt1Xpz3zTEeDT47G5sQGZxd88Fakx7b2cs35SYevsbEmbRPPcedjAeEvvQeKgZXFSG3F8j5",
  "key21": "93rFrrj6guByLBhEY6qfr5FMhbmM6U6WtkkE8Vh8K5LVSLTgc8sWbYja2WWCDNDXY8p2pHWGiD5vq2dWpCwcSXv",
  "key22": "KcwcL6Ey36Kp1jniViGnd93SFequ3D4rprVK6P7WuAdfYReuN7eRMnpZRx5Jj1t3AX6dQ7FYTynhpPMPkEfCBjm",
  "key23": "JWeUqadXukuMxYwmeLw6V13Hb4H7iK88odrt4TRPTfF43bH2iTWKu4WqBzkpwT1r3qF7NLkhzDhAf8qE5Yshwcw",
  "key24": "3uWWKcbwWhB7iM5z5KZJ9Eum2vDF2jVpHbM6pAv57PEmP1N8EbVXPauuMfuSqoQ1R26HGnD5TNPCtojCDXzn6HGU",
  "key25": "3HUKaZDn8jyGBVrA4rBgL9dVujFXPJP4ZU9NodS225fa4xhrXvMNbchSyCCz8VqvrMrmAFjQ6Ks3BUspGWqb7Jjw",
  "key26": "4phRWexVSkNoiVnP2xrXS2XJ1gzM62nRCWA6x1d3cfEDQkyQoUHgxYpvUeZE3E61HYZcZRqjn6U3xzh4TDpBXKmF",
  "key27": "2Q5Co6UuQsS7qrHmMoDU4Nz87yo8BFVe68RNt6bMtSWyxgY5ZWggwHSSkkXVFZwbDN6XThyuTdJj4rrWxzXpfn8f",
  "key28": "37k2ok1C6eXd4Qkt1bj7FxhxnuZP1KPkwNSU5as9fR5VvpKbAGaSKePHky999tWKyqs7ZQGXX48P7YjP89psyBCR",
  "key29": "489EtcxNrMgTiMrmXpAkzecu5GVaBoFLXQAYugQ1HzAhLrRmJ1FLQfneY8mYkcj47qn1sjJhZS35gv5fLx8cqqaR",
  "key30": "4SXiWCGZPyUb99PeeH9eHbLhVcjoYFvZxih4jz6tV4ff6YELt53csSgGNUCEZn2gL9jr9sDdBVNh3VoLCbDqFwbE",
  "key31": "b82BfpbHiUSZxtvzaNFCQH2MsPEBgHCgniqoSVbG5gewYpXmLAwWFors7bWypm4iCNSDfS1dPe55A8ScGddwK2U",
  "key32": "4vFC377ByU4x78Gz6yPtgR9hroorL5dPrVCu5o8viPzqNjReV4JJ6d2Znhwm6jhD5i2eLrXjnDEhyJqaYN977qnR",
  "key33": "3AMPnwU2WWy9xksWmq8fS5XeB8S5zVVpbEdywSjU5CWaRrV53X2To8sAn67LZwqvAGHTSaKXVSZucv1VjcwnWja"
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
