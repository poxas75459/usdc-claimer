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
    "3LrDeGwCaMgEmyDk1E4abNdK6i1HbCs6RY7RoRN1EGTW3P8Qd4Jur6NkDXkY9KMCxmJryP7zbZ4imK1zjocimnJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FStodCHkDQHS2zyMBd2FQMxo81X33LrcjH5nT8Lt3dFxVWqXtkZmdM9aF5BhqmARBSGrow9AWpoLwKSGJH7NBRP",
  "key1": "3XMZSBdF8kU1zmhkps4b1CbjXMrwM1XPXQRTmFoP8VcdDH57EeKx1mWJQYZH6Tbbyk2EXNgXqSPoGjTaPbYXbh6R",
  "key2": "5trbiB92VFMKiio452yFLPxVExZbjJg3PLTBaUe14nas8SVugcfsgCeaq5NPvoeRYRbVPxC2rLuoJpasUwmvvrHR",
  "key3": "3pGSqLScc5DnBDZz6XUWnyqstP6YuQeX5fsRyjaagrUeZgdvanjYqp2DXaN1C8dNLsEXEBxHRANSrLpDudXZijjq",
  "key4": "2rTytDgrSAFyYnZnRpvo3DxF2eEqLEScUAQBd177JQGCyMVQ81BY8SysFhUWr2vRsa26akFsJTjg4diE4UBwpgQB",
  "key5": "2UTwnzE8UbqbjJQoVK1kJez3jNvRQm5n9EmLtwad3CgezW3z2PaToPdNnzkW4Vf5g5d1b17gxUdWwvXxKcsEYysu",
  "key6": "4Uq9R4NMxKghVSXnPacn1VFFnukyoPkupsvLmVyo7d9LL2cZJ84Rtsxjfahgycf1xH6ZLx6xXrUx2uVF64dwGYSs",
  "key7": "2aCwjFVontWbUmMg8XMNeJHkbkgdRk8emyL1Lcd9e7T5S3yB881eHrMiDyzJWNx8m3jXCgNb6XsAoftf8LsCx7Ck",
  "key8": "5G7DR98wgLqX8MU1yHi1nhShK2huK5KKGpfpZ7pp6faVkrv3FunXm5gffP8mjGfRX4GqBMHn4qMsfKQQz1qtfYj4",
  "key9": "4e8JZ8LiLNywxn8jQTdJ7bzbGz5Q2s29FdnRpJN7ez8RLi1VLfdaPH6pk3naRiAdpuGDMxZ3CRf9Trmahs3jUvSa",
  "key10": "5PJrNCpXkKmgU9X3j38FejHtFqY9K4aSpZzq4urrCbk4ddNoYAf4Sc9VQBaCp25rvz7UBNazM6bbZUfk8NkFZvRi",
  "key11": "RUF2axzjv4KbzGzd7hnLrh1sNaqJufYWo6De6gpVPoRnMFLwKddSgznDX6scDEoFhgeXT6THxumxCnaTFY1McvJ",
  "key12": "2ojK2bTdii8QsWDAVLHW4pd4Zanq5hTM7Mx9GtKHTZ1TmZSX2RnCYwjRpuYvHVR8mvPjLMJ5cLB9tUzmbrL8GoaT",
  "key13": "4sd3ycMneiNTEGamAHhQzrCQUAgfRq1Cpd397825XdgGQX1eAXLkjp4qPLkuVH7xvSd26gmNZCcqQjkQ7kJjed9C",
  "key14": "2UQJ39oqTRRgkWTxr9jubdsQFfrJnXN1DHukMR5m7F6ZgU5eb9wLKfZW7LMERgugrwerPUVYtMqZcXHEWinMMytv",
  "key15": "3iuQkpRnKrE51EDEn7rSH4UX2aZ6Z13iSCWY9wbLCzWjYfNP9PufkBJzuXwYcAt5qZ7rfsbRcuTEiKJkEZX7WuCk",
  "key16": "MWHvnq5jWjNU5JT48UB89LHPdCXAVZtdThye49GVN8Ha7G5JfhYZzPvAZ33nFtjLXyWZtDYVuiCbtatydtXWj39",
  "key17": "5UmUzCBVQKsLccrxECSfy1xtzNXkm4j8VvmjvGg6dDaecdYLtWEEeh3FFJ48NyhBV6SW8vFjBodHrUYJdEukf8yg",
  "key18": "kUJzWJ7ZwmP8nj11m88n3k1y7B661xDzLgEFLgRuT5R9ewoA4HckY5JXk8XimY1EQAV3JaegpiqkMseSKPezgvF",
  "key19": "58y6kXCHgUEtBvg1WdveH4ct3ytHLfgzMD99tbkWiB9cJLbFUrbG6Ham4McPu6gxELH2qcjrFs2CHKs9UStWVMnX",
  "key20": "2DPXszu2ggPuFisk6ShzUCGbo5Wcq5eWtqZhFkEUCV9aUAps1mJxM84qa6HNB71fsDAcnK5nQow1gDF21dUzFPGH",
  "key21": "3weQGmEBZtEqKFsL4QyoqJ2kV8boXrAKxjuYrg8HuerLdKyEHKFAfAt3CkJoEBtdcw6mzKHwyrYPTM4ctJscEYMH",
  "key22": "5acYaj98uRgm3nyZQNn8o2dYWCLaA9LtvEgvYvXof2R6NEmncXHVPESMUBsXcE9w64krUfv6aFbYHwZto44gLR2H",
  "key23": "4fV6hDY6PQ6nm7fseuxjwe4AsqcLow384pVGyRiKn7LBhG7reCayyMj3rKh7xrfYkZnZxJjD2TZMfFSgJUFgcuRm",
  "key24": "3CQ7AX9uCLRYrxXFPtPqR43RhrusBKVrFRpQHBbX1pwia131WB4NpZKDLNh4VBoErURdHSnX6HqL6nAnEGrJ9GZJ",
  "key25": "UeBsfTnpkuowp8tRQTejEJLXK4PS51JWD7bqXVC5eCokasQ7ntEdVcTx9J71q8YMNgC6LvNxQWiaVYG1pBJKSLT",
  "key26": "2Kv3jzfyzBseGGza9Zu3hDdupCAVgjd2RjcAFWFVHSHkFL9jcxdbih2st3aBwbHbXUSG5U7j1emkD9eRcEdSBENf",
  "key27": "2uBEFQu7FyMuHDAfvHJ26wV86PLv3AfBMkmd8e8rxpZXjomgNdWfnAx1YXBaZkX51nFk7cnRCSpsCv5jsxhYwFoy",
  "key28": "5rmPX3pqqsSWhL8DS7pat8fg7aXzCkrxiRq6EpxAfEsH1HSK6G1F5daCuAdBwzc2deaM9F8SYeHkrpTYbof9Juyp",
  "key29": "2EE98zDk4NXfbBC2xbfmFp4QB9NcyYpkdSF43j5eZHdsTm1HaHTJv8if6YcJCTy2VVZ2XkniNneyMQDy4UHR62aC",
  "key30": "yLdvKPPYEg3KTsdUCcJTmDKatCHfUT1Vz9ypR5Tsh21BZA8gRZvTrynUEAH9KzQ1VjWNuGsK4mvH6pdhpLSXCSd",
  "key31": "64LEfsuLrNFRXxxwJ4gZqeNswHk8ZMPy82gtYJAPSVZ9awRpunPaSzZr37d8fq7ibvozKeS2sE3aP9yQDZ6F9sbo",
  "key32": "54gEc8tVbRGAa5qThWa7cX1cZBMdegPPFbkrFz9jbhqrvwwrQccMiEa9C9z3PDqQfEha4CYYx2eGT5zqanc4RhNz",
  "key33": "3XfSCXX3grYHPDRmzkH9JC4dsNzLL1Ai58uj14XNEUq2B4uWyz9dGoC222VBABsSHbF2jnRq2itJs1q6sKHxnSKt",
  "key34": "qi2uCe7FW6xnHq5fspQmhiFfhTn4oTxJWaXY9gh8b4kvVQrjXdwLssGL4paCGioWzGuhyqM3SbiHTGcdLM6AFyt",
  "key35": "5un69xzzfr1CXrM4d2U54hCDGDQZiNbe9gscZ8FFtyBkByYYTNLFox8suxkXsTa3bKsDDEDCekgXwnoA7Te4VUiS",
  "key36": "4YGPjtFzvzSThNoeD7Q2uGKT1S7tHVc6SJoBgjbcUtkS81EuVE8vJPzw1ssEmvbyYNxyPZKvk6JTQKfxY2JXS9rk",
  "key37": "3yTnTR4KSxaH9RwgbBAqvGP3undngKzqzHXadVzpmBm98YcvPMhCifqo15uuapxc69vxZg1BYdLK8pn187BkbQBt"
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
