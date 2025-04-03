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
    "41pTdpdmquQ38BoNiLhErrQCWvaGoD1ui87ZikhZhwjog5JPViWss3ydwBjK2hARNCDeNd8WZ52nAKyL29tJY3dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sFcQbLDmpmxXd5nk73eouaQYoEJobA4QKiroLY6KmBuEevTccVzAQ5pfSgP4rNK7XKX5of2Js5ah8tXxFirHpe2",
  "key1": "4zWCKiXuiuuKkBkboFJbywZPFmji1vp3GzHhdgQ44hLtK5XtpqCMciTWfJZrpQx89Z4yBrJZJnuNazNTnjexLBEa",
  "key2": "5BWTLvfib7e5Fqwf1Bup9gq9giL8s67i7xDMkaECAtQ5TYaeVRdhcEXjYrAuiY37tBUFkfEsf78z4vY1HYshizhq",
  "key3": "5usvxAy9zzqdim8f34nwcprPu3NiCjHyji4LDceiLZBswTgAsBtKSx44W2qUN1jSRGS1WrmnbnvBG4Tg2TRLbM1d",
  "key4": "2eXZ3W26pjttPQwrfwV7DCfHwvgL9bVsZKN66BWTZVPF6JzmnhLHCKddsMTvQjNHm64qB56xhgfgtVqQCek3FS7n",
  "key5": "4bndzykQCMdfjxEUJXe7RRM45mth92NnWnNu4Wh7ySXNjcr158KR3pm9QFjpXiBzJ3VFNEUHmAZYdcjj2HCouTLL",
  "key6": "4mTSiJwoKBJgkAjMgJjMjjc9b5pwRscJvADKppL53KY7PSNoLxnvPJzPFvNBKzDY66S9uKpjLEEZFiHSiWqej78Y",
  "key7": "4CC1ppcVMCLta7XuZk7XDhZpSqr1yRZrq4hBLbdYUXNgJrju7wexcjpfXVgiKhjUCZRbFRK3S7zGzuRGm4QQf4kT",
  "key8": "22UairbS1LBuLGAaVSbe986Np45tY85yTQzwEsWN6KJTKQsoo27Dm6NekgeAKANwdPB8XrgkvCExW6yFaF89Mrqx",
  "key9": "5y5KhPkGY9D3PZoGbM6jBMBQCLFbtXKR5tjF1aMXDF6FTwzMMZvmbUeng9zjnYgDd1QMUCZzZMETaPbU2SXgcDef",
  "key10": "5Ex7FQz45c9D3JEQeQPEpTD5i6f4TXyqUcoLLwHxKmL7PwbDUbQ2JGyQa6ZTaRJ5NN6wtPNtDRv4vEXxYPTiC4o4",
  "key11": "47y6rE7EaToZppNGbvbybAp2uecbaTgKkyhdkuY65oRfoSncuJcSYLSN16ExTnHEiq5cMx6crnw3XwU3DeKzSyU8",
  "key12": "4ExCzTRfURUuXc6S6Bxka58gnBAeHanh2WTuLkARkqAh3ay4dZzv42vdQDtywU2YZvY4JCSFoG3haEQftjJqTzjG",
  "key13": "2WGHCabqoxtQy1xqPYMUJuUhMvgEHZaq2aqDLkXVEPWgoF7CvAAiYCqXZ6yoWnNEaGLGC8C5ndpWJuMSt5krDEr4",
  "key14": "5Wms9KuJBN3KxfmD1v7AgStzFHgifZPsMR6XAzXzrGUo3MQQzifVCpUd4Yagv8xYd1XqR6VtAffEabS6eRZCBmr1",
  "key15": "2wCTWnUms75esjctYP4DJQj4pzsHB7DAJPv3J1wqs1M3U3sacsDyULXrvLQnKgqFFMXgfw3J8jMGMbSAv6gnuULw",
  "key16": "5EeviX5d46ffMUSPq9Qe7PWDwqky4LDa1JFUNYJJgKsFLZjhDVBVrJu2sGJZYoSGJiSi8SoJTuqTpujmiFMJFCy8",
  "key17": "2TwwUHuNhicy2ymUGAMSBKoJcnk34iCj4ujy7LfWAhLmyvU6zuTFkyadSvAgvKKsdj2fqG4nFubg5diSzLWkNpn5",
  "key18": "3z4Foo1mhXUfbM7bHXpSeE6GxruwPjemXHdSkG7pyC9p4csvFc6NjfB93aEp9d6pjN7EGhzVBfnAcLDWt4uAMRq8",
  "key19": "4d91mLC4HETUQf9Y7c82JdE494KKucYeTUn2zC5Yu6YEYbczg8umg5ef9aZ6ekdUqfnAf12UsonK4P6ZiBBR1dV4",
  "key20": "2ygKWd3vtimA6RPqS1fApXMZu9xVURwfa9LrWKyXG6CNAoSA2NBt9fAweRXPXav3NyanFKisLid1B7SMfMfGBTJ2",
  "key21": "3eeSioQSwHrzXgmpLKssuchZ1oHEtkACDKLZB1fF855c1zQUcdjx4d8cSa1B462bGeXktDqdS7m91VRq1Z7DTLj",
  "key22": "uiiZ8jVjWsD8Bhr8E1CTosVykEeXdnNZRRQVgHKHMQjQrRbTxtjzy8CgRrVfY4EKBxS2iav64qCBf36ihhpNQNh",
  "key23": "2QwMXH3XFteoB9mrPTcd1Xkm517oeE8NmX73YDgimwXz75Nwk2U2gypnF6a3bh65afoxRqfdoQ1uoUzUCMxR66WG",
  "key24": "2Mv8eeNQ869N41iD8eK2mGCgaBAN86ENMpkU8ztKHHbpBAfMbSnfnXHhV77ZAiiheicoE8YSgFgHsDfL4SUiRmJq",
  "key25": "2maq8B5h726dQNo3CFuCCQcHDn6tLubKz2VUBFixWtQbBPFTXkKLGNwXeJ1kTkaoRMpMx86c1ja9tvHypqhSp5Mh",
  "key26": "45NZteewA3qP18uLwuNnxutW2WY1dShwEH9HmvVGGfYt5vQr52wCxD9DWs7evdKgrRdEeVFY3XcXSYzbUFccmuJW",
  "key27": "4wbNbMFYmBVwKA4WYX4f7A5XgQh7mHNBTxCmHu7cghtA9T98KDLxX4rGhuvXD9i93EXYxf7gj7FerDYHx8kh92eo",
  "key28": "iUSN7eLp1y4bJB5c2BWDZ75krELNtpEhb37KdYrdN19rBpyfzWv4QpMgRyk7TvVDk3hH5Huj1caHcyqWBmkVfZL",
  "key29": "4TzeUG7YJTrr9QUYgg1tAKMreXKhgPRbVvPPfqs3VbtV9CPSvLHTcdBribwJKMWsfDcgtJRD2amZmAjLcSxXy9Zv",
  "key30": "4dpk4Z9qri8PRppDeeCkSu7ZWdy6QdaiZMzE5F4V8p5weoYfBGVCNysTbmoXD4iwhFMcVBL82ffauoephEz7ku9d",
  "key31": "4cCaXYdWdZzhjvmQhFc6c2pWHT1aR8vBV1rgyCjthDo2RDiXjfcpKPdEFT6nAZZaQnmCy5Gq3RkJs7udjjCDyQdX",
  "key32": "35ioDQLinvpbJShoA4pDp2u7g72vEJGCP77LQwP6zxxm7B4kpJqdmshYGGtVxuf6naskxujjKqMyw9ceqHKoedBx",
  "key33": "2QaERUEr9giZzQX6XjFLnMaQ2yDuVSsurcL4u4XmJLnVp844oNrKxjnszaLeHxweMiSuUraH6GRWiYgPD6asMk4g",
  "key34": "3yhpnpgm8Ak1gyyfXyEo2kNvYtQ1sFrnw2whySzZCcBfhzu2hjR9zbYow5Pr6vBWxQB27UiM4uKa5vbyxe2GjkFu",
  "key35": "2ma8gmnYYEm8E5d1DwHzzXPzsMc9SrYpSbFiZqomeCFd38WF9efMg3nvtDvJi7bBS7QRbaTHWajbt4aGAF5iaRg7",
  "key36": "4zYqd349exESpnYsjD8sEc7WQb2zesVVNFHBJhfn2STACfXcUyuntRYBeQi8LJS2SSWcj2pmptbs4qGAoQYA65uo",
  "key37": "4WDmQePbWEf8XXLt7373hFxFzSfjdNdJ42fqmw5wLLQWCVeTLvgxRNPSqxxRstgLdKDcyWRWEvWhoxQhywX5PFKf",
  "key38": "4pf8ZAQMfaXGbG8ZMLsCZULHwGokMnfYk4wSe87JMJB6erPGWgT4ZbEvUHxxi827WMmf9YKAxwvRHwEh2CVpFUC8",
  "key39": "315xvHC6R5qRFBBqQpqYQZmayWAdT9e9RXir3Jr1UkrgRAj9cZj4MovJSrgWWBjmQhMrvPeM5CtYf9MBCBXqxZvb",
  "key40": "4tN39KrNwyVQhvF8F1gndcEPuWmozJbz8n9CdQWrhs5PK29PjmPyoEsamwcXVJWDyemTKUpeVqQjocFzo4ofu9P9",
  "key41": "2t9VYvPknyrSSrtkrRHPLf4nY7afhYRrvFFKAgXoaKDeS3Ur2myvvnTdHcHRi4KkfPvG1SL4CfobDyNfUYw8kFAT",
  "key42": "B5Dan5yAxNSqEqixSvXor9Vms45FrSjXvm9FZdgZBRuzU2jADfZdyYM5Y7JKpcxiRsUMMRVzS656PVahwiFthwL"
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
