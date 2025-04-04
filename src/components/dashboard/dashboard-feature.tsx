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
    "5a1DceZjnaUA2wNSYcVAc74U6r6TKoNNMUyYgF2YT9fFMeSo6cWdjP7Wcswxm65v6vwXhhNAmNUgNDuqtaP8a7MR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EEUbZHSM8qVmPWieUT89bikQeGBjVFL9771Fdpmvjg9suAWkmwbx1AK9ppHmYMAHSZ9X4F1dQ7kpRh1iT3djakj",
  "key1": "31KA9pbsnUtHEYwdptgm52QZ4UC1Ys9Dobade8ZnCJFrbcY4iJ85rg5pVeMx36Mqwm2hZgwp1Jk7vhk6Z9vnnNnn",
  "key2": "365YpdXqvrHqahX4GYYqNE3KmSRrwQhbE6Uz1Th67bwQJz9ShUApS46Sr4Tgi7PtZoKqJus5hCvrNrdBVChU8T9n",
  "key3": "2LZyXpXjpGxWdbByKK9be8mrNEnSj2SqmzJAhuSURA2dFahdAxEyFjqNRysdqdgEJnndfyyEHTyWW29oThi8zDCn",
  "key4": "tSq8jhi4jQ7BZcaDeGuNvd4nR1P1LfU5oqWmLS1McoHyhzWrgzVgS5wWV4unFq2S5dJ3xAeuYZi6u2VYGGFEwF9",
  "key5": "Jwarp3g8TMbnLFXuVwjXyrLiGZcxTivjqQ3NAuRkZcwiJLvn4bWvQiyy3Ff2Fgx3Xc97g4XsTD7k9yrHXfi39Nt",
  "key6": "32p7kSWuJLjS3mxqtoWkcrNQkdGMtiPoSXA9mviJZ3g8WYNSqde2DL3hvvStt1G3vyqqnGEyw6EfyZff1WRPap11",
  "key7": "cpyfFSeEidrptr3cdAEofGWzruSrbiQrAJL2u8EbCU64Lo8bNyLdNWH486i2nUCcgNJp6eeqbfmxF13fFLv6Jk8",
  "key8": "65ziT4wK2qzXhgJjn6RjjgGdSBp9x4cDPSGis5Y21ew3doSFyfzLseMS6ccH9XNNJeSoH3b5im6QwgHneiy87r9m",
  "key9": "2DaWywLjDoUhSKRq28sHRp9o1tCyDgLWUbFMhA1skX1PG6VNoMtMYvE5ETqTond8VREvYPvJ9XPHS9EEUQxw8SP9",
  "key10": "4ofgbKKXpytfnidcMrscvPrwUMLBhoGXPAxhh3Zb8KjNyD9N12qgKjyQW2JLtFUphaxYMmcFjYbPc2mah184CmqQ",
  "key11": "CGbL549LJkVfjEKSb6gAHEmgEHTXaxiMR2Zbu7AeodrN7KeZWLjFFrCDdtaZKjtmP168NNN8FkEKjjWbpLTub5R",
  "key12": "3DbfcHv6fJBJypUKXqHBr9RyyWZhXVaTBrYV9ALQESviBfjay4RfXifS81sNn4aChaCymNUBLFhbXgNR19xbnAqy",
  "key13": "4Fz7KZuiKegCkTTVY2GW8Qb8CrPjsVzrMaYqWZKb6wUHF6j1Zmay9Rhd3UeaVQ42Wzk63rS39QpJZwrNXyXxscdt",
  "key14": "4ukFQ4YvoWsGC5GqWxtVYi9SsdjbHoVdkfTFqvjHR54VQLxj93ufEEW7oWCh67JT1ZnP9XrneGzvqeyFChb4VX2g",
  "key15": "52AD2JvbkXg59K2mHZAJx3zyazaJ99zsnxcAf6bBMojKJf939dptPAv4T8ibq2s3SMxYmSX2Fy11qUoB9zhxhNAP",
  "key16": "5PkM38zBwqbK4KFyRDJ6GsAMNE9MEUiJRfoP6EgM623X7qjPUB3HFQm2cMKJruuJ6BbQj68VHDHmsMKKFtnNqh24",
  "key17": "2WAZAiTw2QE6mCeFXgng9TL9VZF3Dnmocynt1X4BbPq9kugPKGtLCgDYmNV7qxwMKfv1fc6TzHvRpkT3ViBfGqDR",
  "key18": "4c5thaWaukoT7KXyeqRqTiCwMiqNdMxTWRTapTbkJnYtxXabsjjXzWXyYjkfgcwcDQx9cb4fnKvrXzSrigJ3KjTB",
  "key19": "2iocreuHtx5zN3hmsoA45Xyr3x2GBGk2jo28hx3BJUo61Hux8Rpn4AsP5D6QPpiCpdTgUewPDEeGA9NJPMYKzPiX",
  "key20": "wrSMAERNdJFsMhcEBf6WSwZuvp9UYsNmeqfU9UNTvFM4jxB6kR4oKqMDuNXW77R1KwWG8KsLBthHV7A2LispZ8E",
  "key21": "g2q7QcbWkrnGupU1e2XTW17r4JtUzBzmQfwvtKsWcoUNb5MMmvTuvhzcVW7La8sf89gAj2xtnR6uq7npkcQeQTg",
  "key22": "36iEWsfaVJig7PtgpPfX8SfY8dHeCk7k4KQeNQQNg81NjGEnV3QrfenSmgXkjiB3GMuEFnzqiD6E5hMzYEXkcbWt",
  "key23": "655TdRCQGYjbj1wN26rnZ5F47Uq3iKVvm2YxfKq7sWMbbGnSZRNDRvz9NXMTFLBw6porhRvD3zvQ4HMamo6qwe3P",
  "key24": "3AvRKWhJDQuNQAzkFau46dgfydz5JNFwASVAQxNAxR5q1gcExfuKLEHcSCKjq2cop5pTVtMnB9bQVsKhsrq6L6ZP",
  "key25": "3HV8vN4o4jVmpSwFo1Qvfgbe2Rmu9HWgmtVUGqQ9yWcFdeXtwExj9cJ3en5Uv9KS7anUejxK4CrzDBEmLm25pZbN",
  "key26": "3RPH3gLAVkotRC1Dn4qv7vEXT3gmzLksuJKut1pkU7deT2ugD51KnW2hYTqrMbLUCP36kYTtN1cQE8Dtgq9nKZbA",
  "key27": "4mhUU2AZ1sxTVoAf9Mo56CUBDxa9rvLcmS5cComWCsQ6i8Ds8pCtDkLUkwRV5vZrGzBYCcgf58WA3QAAZd2xfBMD",
  "key28": "4vxV5BB4Cx8WyzLPsjr9rXQUjsb1hmqYHNyQeQSbGVrjenKty3jVbzepV1GXHnCdj6sERbBuCGouLk33U3fhynUd",
  "key29": "3G1sMs74iQ1HDVt6eCYVaZob92B3WmTzrPEqWPBeY8DAQhbwhP4oupF2SvGyC1oTK8eCtEbfxoKmMZygZCaFUTts",
  "key30": "2NiGap1CQESZnjiQcFEp9hijWVQZjFhimengfewDFKfqmr7TARrg6SxX5SQAqo1uhFg4UNcaCrda4WGm2JCBf4Ra",
  "key31": "2E3r5Fvpc8fwwdKDgGPcNb2gvoV5pP2e8X6nyp6GMSanCoP9DdPg2rJKuDzH5sE5g31oXKPoHi98xGbKfHZG98T5",
  "key32": "5HoRw7zcZu4BBFosJHERQERgUazNGhxHi2rv41F5EN5X8G3HTmxoexnZLjmZxhZ6NKrtvCYbFWv4T7k9arpuYN8p",
  "key33": "5rtvsfA2BzMmxpiADMKUcALG5Ae92AMLhHryUUQkUBCLBYVYJxa3pp1vTwnHNrMk9WP1Et32cRmEdAoJEbdTRfwq",
  "key34": "53R13AiUBGcc8wapKWGgAqAurxLiADg3npaxqb45eYKoLs2n6xCyA45tFkb8q1MF7TtLJN4MjpV54KqQwP8zDqhv",
  "key35": "5bHTZe8L9NfAYToKo7KgxtqodHF6FsNGZV5JfPz1CUTYf3VqVJfq65nxJ78HS19NS6xgnGCJkzRFuguMg6kXMPRx",
  "key36": "4Qwu4xTfQvDExvzHvz6cB8kz6EpVi9scVanf3dsWZkWst2q5BLN6jBr2WV1Ly8fzMdt6i44DHxzXUN9ZnzM1haDH",
  "key37": "VWdYzuQ6Xwn9LPgxV7a43CDtfB4Gt9KGmsPavycRn1oDKNH9tQk6hsc4327TaLh1NPNXghQBdFeHHu4Xi1fMkJB",
  "key38": "33hPMTtK8NT8HhndVn4UtAB4RMt5ue78aMjHWc6P6Nckugp4KNoNu6B1hXn9LQGbfygoeRN18HkmVsCyoG9BAw6r"
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
