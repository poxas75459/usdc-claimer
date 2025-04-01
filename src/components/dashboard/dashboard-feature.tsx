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
    "449E9UY1DM9HhbWc2ZMJmP67CywyY1mwS8WnLHwy9Dy9BkNKgHdAVQCgEfQJiSbkTu4ZgCNyD7feankR2wcNoT9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EQetMjmz9ytELamkfPMygLwyDezMHZxobiX3ZHHHej5rNqxSwqzjwokYqquuBygbAt3Z8fYG27t2GkAcAnaS3eW",
  "key1": "3fYEh8Mg7dero9AubzrEg4q79bAHHQuo7pkGS9xmPB8r5CibjRerZE25pEEH3Wcaydmy9ZgLtdQoER1ecNmaQVGn",
  "key2": "5CT3sTMH2iuFMTCLj3p7zyE65zpFNVkif2HcXQJiaoUyE88wX5usikdQyvfgiZL3645Qd2RxmANxANHYcqyPgXZf",
  "key3": "4JFF4k3wVPsQMASj1mmnTBq9zNQQFpZXSCFyP7sLZLuYtFtoXgZigLYWTe9Ag4MKiqUTwKboQ46BANd83kkpgdce",
  "key4": "FB4o7W2ZSvR19uiqD8pszZBLQGt1ZtG8A9a6VUM6RokxHcTjBfBhBrEiH5bSxPnaJupV5SFJ92Kdgy7jTo8Su7g",
  "key5": "4ERLWVMEBybPvzpvpLkvjGUvxeTXVDsoNBEByZ9AqEfZbWDS4ratwbi7fp4cbfhTVUY3vFq4BYMrxK2s8LGhzfma",
  "key6": "2oDWqdbXi2BkM43kcNKDYBgkeWxSwYQqKTeSoL8hjzjkXyS9b4ABZnLRZ2cuSfexX9gGpseBbP5ohqRLoDA4cER3",
  "key7": "5XmprjYPXV6hMHNUfRv2avu1N5th5RKGnD46Vm4xPWngw4rZpNSqNbTzbmhLKWfihUamezYdBzcTiescYT6bGbni",
  "key8": "5hjTbJqWAZkekyHYJJEjYX62E5bNQUSCig3Wk3zkKAuT5gbn8KxaJxZQo4Ut1uj3QiKpYsvB6MgegsvcBPVXs7Xs",
  "key9": "2QRaf4sgv73tpR7Aa27d7Mi7P7QhyxjfWHT1H1EqgjTKJfqqSrA4sQa22U3ziPahdJ53CHgvcGpVQqtCDDmVsTDJ",
  "key10": "5AaU7JRtxFj8pUpk5ZzbBff3G2no75n8m6cER8ZALzts9jNJC614Hjgz2SZEWVWT6ENcKZjwxN6EXHhCnNcxGFWD",
  "key11": "5tS6gnzNRqqW5HsjZyUJr3qSqyMbrd8yHwC2q7MRBqQc9RrWBkxBg1QdPJc7hFcYRN4h12heKJFFu1fNdXiWgvEb",
  "key12": "2qPZQFkySRUSkFcKHE5w7QUk6UN8Pp42Qm8b9gczTyhEhz8ism6Bm4rS5mWjMK4VpG3B3WvdbasQf72xGbY3oir6",
  "key13": "53UALnrPS14GCdZYqxosTUSDs5qKCzVaXDqwRgrtCZQozN4hXNgHmpnRBgn4jcJAy4nwqJyVBneaS8ED5AoH8Lmy",
  "key14": "frasP6eWe5o1xXZyMCm8nXnGZZ1a4yYFTWFycEDbTTztB8z39fjNGMfAgMmc8RC7iEzDD63wTWxN8yWxSmPZY7P",
  "key15": "4BSPnAbG7eV3xmRqdTb86xre7WaKE3Rkv3KTXBHYdfTM4vWQj1ZsqZBoS8g8PnLVKCWD7BMGaZAw3UusFaphYD63",
  "key16": "5R1dmjYxJFDMJ14D43YGYtY1wrA7y453op12p1WVMAg7xpYpyWgdCqcpSWXjKW6PWNgKNS1EasFX3xtwQHpmRQUg",
  "key17": "5UMMPwJTHWucddQThUPssRN7NQbbz6UVqZ6zXC79nAsFTmwjRDnwdp3gh2ybT2eMRsrc97g37JzCMrW1zX8T3HtE",
  "key18": "5JraCQQ6SwMLV3Z9E2WK2SGygahaM8uPedJ6H8NfbbMpEXq65uM8pqEX2mySMT3QYHzPVfnT5ryHW9dKvEh7C4y7",
  "key19": "2B8KENJCwPerSZPtiojRcd8ExRgj8bCSNJbeX2oaenKr9J3MC8sXphYcZu4fco5vcnvJcixbReW5nJtyYhFmhWr1",
  "key20": "fPmBdmk1ZeqTfMwo4ncTjaGqJUCCXTnwte3kjWaaN5YdMAsAdGg22Nc9xtYeTr4E61q6wNoRdCSDKjSpAwp1mhS",
  "key21": "4iug1JcV7RQCqnydBUBaZy1eoqNCe8o5uN9aABgB8SoEJxD65GPDRnr6jUK9qjz3LWWu7PA8PDSbJNQWjBtD92Vg",
  "key22": "5CN1hpJMLzY6FyyrXjbYdfLBdjpmrCPfEXe4KCasZMG2efDLZA9Cj3ZLrRhLqYZDehM4do1kLcZ8P2pryeB5G8sF",
  "key23": "2eUaHipcj3Si6MwMHXJMHL155v5oSVg4DspZeid1CV3ewDFHq3oJGsBMpUmwRQS3ton1HmF1M3vi5jN7J8tz96oY",
  "key24": "3pT4jWikbVc2KcVMpimFjH67417ZzVCYqPMDiERahbqXRP6TfpfsJcD2pnDXz15s359RDQcoskHgiwcarNtv8A5j",
  "key25": "WirFzXnwgUg9aBX5jrS3yfQ3KNUA8jKRdxPtxDYRNky9xCgY9hgj1g1iVQGKfQX2gtpwiv7ayL9DqJ8xtPRp3xp",
  "key26": "32sNdaNknq8EGYCCGjuxjSgQyTZr6bfxPLLeX11YjsvfzURoiyPARKmjhuNjgrWDr7owTX4doT7PvzMc8nraEMBD",
  "key27": "Wi6jezxy3V3z9mBoiwKK5f33SWVWJGSKt8cysX8ysS84p6xYY8xTgLQWg74VHNT8mY5aUoEhnfD9reApmiH9ZTC",
  "key28": "4uz1n9kf7nPG1rQKg5577NbDdMTFGSXviVLGFjeyVXvTtdbGhR9Q5xsMKyH6PmSfX6jNTbxrw6z6VjWURVcK7x2H",
  "key29": "GH7QWe54VKLSFaxjEibTMexfjj6sdgJzRkg7AM1Kw6FRzLfcVfr6TzbsPbmvZZL2c8NbfJLagVzXPqLQyaVytsV",
  "key30": "2XWzEYWWaMV29LHZ8sXB7sTTVW5pRJEr53iMuHQEDettFVtSxJHhmKm6SdWNAEogKR2o83Uvxuu7nT1GDP3ENkek",
  "key31": "2iUxCkaeSGtuc6xQ71KPm9qMezxMopp4wCgjdKHweA7N8Rr4yMd21Xu6sLYhRnTkLTgBUhP52rspYPPEVfKHMDpt",
  "key32": "4g6svpMai7Q6Mwx4W6fYUkg9oTzgRY27moZ9q5cPM7UTNGuj4iDzi4XBD1CgEi6qaum3bfiT7XQAVMVH7AZBZ5LS",
  "key33": "4a92kwg4YL3PFZ8NooTD7fd9N7Wgah6dkJMV9uC9utj85NPYXk5md4FjWA4yU4UshGZbUZn2dtq9AqaZWvLZJnXX",
  "key34": "2qcNzQfDBrssaGeRVC6auaNwiK7XZq7uDXELnMkqZbRzHXKnkKfndpxucYww54U3PvHs3EQdyd9kjXCtucSegYCp",
  "key35": "3AeaxDau1CyQLCgWtJ9aSBuADtmEAHuxbHuaw1AAkL1oWNBbwQMxCy9sTLGgAKPESkGTUWDaevjewanZ2ASvpKH",
  "key36": "2cJsKXyKnVw3Bj2t9WL1sXorRYdRbMnUcqigVKcsQfP6WdYkgE4DrExQqzkkvvTWduCahxTEsqC7SghSnqXMBKoS",
  "key37": "5dHVWhuvEZ3GW6FWsePeKbBUSvRMAqu6ZR96p7D4XHoRAx25zMdsSJAFaEcU1yZJxdzjThggGgVAHRKSBgFtZLbL",
  "key38": "2fpMhSfZgU4B9ZjuCLZ8Q78rCwNY5WBAY3VKFqTbGWyok6JtE16yrCxbG2qdSoNdKtbZpLiBgy46a2inXbHTwaMx",
  "key39": "5M4uLqkX8jtgrxxfsqwfFbzVqZsi583Tbkx8uvMY6c8K3uyYGAFQR5S6UGXZPiEreD2HgTu2EvU1m8enjHGBMLgT",
  "key40": "3K44ZH12JJG1e3H7zYoY7h4pCgqeZEg8TLQAcSR6bfMQLWc8PKG8XNqtVmvqgygvmCLF9URcor9URAKcuo6yYET4",
  "key41": "5VDe4Y4SVTLG73Rytk82LU15gqUkVrNJ3VGFJmWPMvfEiBVQurgSAdtX3sjmPF61aq27ye8tuSu72tvqHwYbN7e6",
  "key42": "xK6WogiiAsGv2ab7RyPozVcrVX1j4F8t276WBjLC4oau3cegc3iiAEGmbqkdu1gweAvFd3GkYpAzsx65CMAXDUY",
  "key43": "4tXHYL1vm3aVhC3jgj2L6HFGkbUx6pHP5g3q2YCkKu8cVVpttbYounEyQVvyCBfHz8znipEKYySiQaRaxzCHbwJy",
  "key44": "2xdViKpY9eGNURF7eHaTagBQfRWAk8BcRXtp3kPJRGtQa6wygMuBcDDphxqJWVghof1nwYkj4wz3ta2e1demq5YL"
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
