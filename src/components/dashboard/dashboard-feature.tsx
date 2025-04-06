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
    "3YmLvKYK84Zz9GVU81J6TxoP546oEfRmQ5Pf1fZMF4oHJbKvutFpUddH2DUTqFroy6NqVqAwWdNJzzpAv4S5B3hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rbRSisdVFaifva8CuE33r6AcMP5PWQg2o8HrQMkBkzMeaGdKtsgPHPiz6H8xFbc6cdSXWryvtnrHThX16YnghhT",
  "key1": "5rDMw7Nzp6zu7WNtbHQLgLERc67CmjbY7wDWrLhBQFFuwA4i4Lt5dhuhLPVAvhkSaHq6cVktykBkPpqhTNtmWgh8",
  "key2": "2pH6eAxAHi9VH7mgEEaVB9WAv3SCbpXDg3o11ppnNawMeACvKMTtqFqMCFyftnXEnX93JzC5kJC1z5EfDvXpgjXZ",
  "key3": "3yVWUpcESmubqNkYtqfQ4EqhWXbz9YZzcgzV9s9vP9j5Q6gHmL1PmwjYnn23DbBTGKR7YpPtJM1wHrCnpVPU499x",
  "key4": "2yNyiSvPYGzypXT5wGWYtkPV8Arq9DLSwFsdYMbHHaL6FYaW1sbCf61fLpe3aNBidJZ87ZGzmkd1zkyp9k1VJ7ZF",
  "key5": "4ZuJpM3VjMewrHkUeCGcieHkLnkjJcKCkSWWQs83hNf8Q8xdgoS3yfjLfv2rrChi8XVtuponHLoMG1rukary5auA",
  "key6": "576HbE3CfrpTM1KtQP5UoBpSNQ9X1vPcq8wmuQQozBSJoEu9MdWGDfCzoVPg9tcUXhRSC8YM2LZu4rqgwjbcF8X1",
  "key7": "5JBxnSmpcGpmfpkZ5ndDLChrmkJ2MgyLHMuqfXX6gFC12s6UxpLm4ngb51BBmAFyTsGXt9FCDWN3SnUUup1MNA1Y",
  "key8": "49dbug3cKRQu4u5rjfGvAbJpLdG443R1ANP4bDVRAoaa96NLXD4a5Awoy2963yDYx9LdeapqDcXczgBKA3zCG9nt",
  "key9": "3ABtarEeT9bNj2Upw8GtP9YDn7GnkvBxAxPfs2cnApMdoCFZzyXXdZbm97unBsyZ5HddLYVK8quhcHH8PypERgQh",
  "key10": "5GkRdiYgCEkKx4L38oFN5jZXADMmpc6HNgmr3JpAKYCryKufpMapAxj467ShXDo9GU6N4E8MYHJd3JU4vu4rhCQJ",
  "key11": "3v86BA2KTCxyqtSrypjte8oQsgRJmU7rwpjzXwEGHJQ2BpNMSG6K6tEzKDcvTA7deaVwNTUx3wFX71KEWe7JJ444",
  "key12": "4b55tww79DBNqYsghjreYPsR1u4hMfTC8G3BkTMHC3m6pDaSSE4UVJwyDnvnR1JLGqyaTdYpoa7NF6FUFePK9fBN",
  "key13": "ERWGeY66bptJZGnpmqd85i314ePDXr6y9VeJTshod6gTzy8HbgYqCJNpsnrkS5rZsqXyGC4Nv1PsTaf6t3nqMgf",
  "key14": "FEboCHRU4DDcJw1NLU8R74pMu3mv4ZTWb7ocszqfAfUHgagyccservGakd3MtYGDR4HhhnxGh3iDG7SwYioJAov",
  "key15": "3QQZZnnPkeusL8W8p79GWJdRGU2iVnNxY1NnSxkUQE3uuc6xPr6tvrmQYbVCsShLaTymp4JHSHabQJ7PDdfi1CcP",
  "key16": "5pgxiPei35BB9dHtYXn2sGZTknmGksrPGmhS2ZjT1ayumKPhht4ZMKFLybuDbNiXE4Y35mJzsq24YT8H6u9cKVGa",
  "key17": "4wpx83UrN4BnmHh2PLtCBpgKBGHNW8fXYXQR16QRPAeNceDrwYbYjTjYLrgZQyEcgYsLNdUkN7XUmqX58f6HrPC1",
  "key18": "dfgAACurH7fPwJTqD49HPU9XsCUb6YPzmrRzSi7vH4ZoCfRbuvBXDRAgoN3Da2icFLyqeh9HnG2nzFKX2qjmLRz",
  "key19": "5puNAoT9vcCPrvLmi1xxVYnPrmydA3wUiMFJAWJcb8FopeftUP4zDfo3ewQsqBDohUaDwXB4TZgFiLQuzyF43vuv",
  "key20": "2jj4ZZ1mJuSuSrxgYaZsnf6xSFG418Ry5b24xSiti2pRn6SFB9GD129zeUFktLNPd9qKXTV87pnVBAVnDnN8DXkY",
  "key21": "5Api285sqy1GZowAFpE1QVbhxFX335z2Kcm9imMPD62RdwPWCNqfHVPn9fqX3ctXTXiTZDeLPtQ852Y3BrYPDw7m",
  "key22": "4jkQh26hdBWph7rgLUjjWZhJq4dYHyZB4697io4RnKzw3un9eiRWPwMAgQgaZgoqYzb2BqbrrRbFfpFYtvYeDvhQ",
  "key23": "3HBeJsmFnquZC6ZSAUTA7vksHnWm46usKyzTvAxpbCYxzK8njx6uC91b2s5iHrWzU92dvDzaNCqvS1H8nywk3rh1",
  "key24": "EedFRX7sqwgvXiwmn3DdCLY2jbxnNhbYS4ZugQFYTJYxmXs28mEfJXr8LbRFUNgcqTegWj79NktGqSAzcgAHzYX",
  "key25": "3Gz7QYAMUxi1bBGt5t1b5v8HjropYv8apzmM9d1gbAXEBCVynw2ijWwbeiJwdZp6TAu739Xixtppjg8DvEniSphV",
  "key26": "2LEJfAfe2vQvCfcNpoZScfQkpYU7AdiJ7Vzxpgv1eLxRQdfDi1H1GdzDw9SPoZtwLrUgNJixvozHXD238VReCHUQ",
  "key27": "2AGYCjFz3r3fg3aTbqK2kSN2EdZo7Xe9ih6TXUDCFtufB6nFNYp285VUbLpxx6GYCWdpJjvzkF1NUpq73FWu2xd3",
  "key28": "2fP4R3W6Hkhax67mSGu9g9JGkR9ABoJHYpqmY4B1P8xwS8332RM2t7HeyYhPo4KMFmH4Nf18EivkbPZ9x2Bmb9Vi",
  "key29": "3sNKfjxZerAiJUHk8Za8vmJXfZxSsmJxyqA9eu89SpbHwko4d4z2A9DQf9isKzmgL8KnF9UuF41ph2vBZfKaQYXc",
  "key30": "LCbyroehHu87Xs7p3TwnzN3JBTGvUkCBJhUEb9Ne5mCpGNo1Zha5qkmzTqhGmjL61C5VdA24h9oHtp8qtLvBUFA",
  "key31": "2JSaJA7S5bmJLcudUkjBTQD665atchs8ByJJXtdhKJEEjubWLrMmGfpsPX4CgM5wwEZboH8PteVEMJJJRkPp2Bpr",
  "key32": "3uNHp5MbRbkT34TudUuLVbBVtAaaTxBKTSxboHS9zKinETDuuejAJuxNqi2iKNuRrPZi15NBWcTxGfnwkxWd3kx1",
  "key33": "52Xt99PaHt9SVtXSwWxvTSGtZ2i85d86MzAdNTQciGecJrkY7G5UszG9XtzaHzgCC4xTnt9oy1LP2oJePDbaxGxZ",
  "key34": "4ZcMv3orj5k2FEPLv4KeBWWirnye4tRSYHwRvVWHxoZH3t5N4VT4tCzTbP6ZxCa63XiynngBvAhbJcbULKsEE9RZ",
  "key35": "4AusC2Y2wJGvfN548mDg3W3RhmowN2WzF8BkqwDW42bvz5SyVbY72NNeHFw9H3i8NnRt1XqUYSNYzknHjuLCss5A",
  "key36": "62NDwZaytw9noGfaW8Y1TmmLwWYJ8SDZYQvQX4M8kPz4tBRHVmxniXr8MFysrhWpP4DQ1karg3LvWobgYH2q8CBH",
  "key37": "3nkKGhZCqUob8WVMMiF61sjyioJBZvn7YWkFQvSnuhsMztpbJJHiD3MWTY3sbJxBvQAwTHjsyYjT2jwjdcDEFdpi",
  "key38": "3G6gnpmSy8zHY6LP2cNGA3DFree7tMaM92zLWguTGwysuPgRcYD92azvEHrANRRSf9sTT9FgCfDyy3oucPGHt4ou",
  "key39": "bLFLdGzTYRkgDyAxSyze4Bkfka4Bk9tuDLnsSoiDGbNJMCojZyNWLrknDpMC9hYfHyseqsZVMte4nwvm6LWiHie"
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
