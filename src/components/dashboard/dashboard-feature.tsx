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
    "3bYgByjSm3f2aXUrGik78gZL5JRuXBy1zsTLXyKdxTxontPoXwmyYVUjif1vTGVdz8ddPdrLA9CR5Z2B6NQCR2mC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32i5M1TvDNoBNFQ6Fbt35h8qPMHruwY7pZVsMhytG9qQgRLqM6GvyBx7d4QKQdNyB9bxY3UTLfyY621YAjWYzahf",
  "key1": "2sH6RGvojoNEZexa7Aa1aNv2yR68XNb8nUax9V5Tr1yxGDguXWDLLDj3foHmrv2GDSYoZ4XFrENXH9uJLTTJTVJf",
  "key2": "4peTMViobxoqNy3PULtTL21mWc5FP22DioPosFBNFKW5xsF2j8XBRQs9g6PU24s1fEzQ56G3krctFxrnXeMvRoBH",
  "key3": "5saWPCYUtZ3zvjkWfjhPEhPJNBE2RhbiKF8zZfDAUp2CTLLwraWtxueFukC4wpYd6CoRqtybghTLbZQgby8wGLp4",
  "key4": "62qtZthEB5Pg47mKxLc4YuWjhLTBrYFbzT9uGd3vrFZztKkng5T5bKyt6r2ASqK9tkLBjZM8nHDqZacJw8UkHsfS",
  "key5": "5ABqqn7tiYkehwcBKEsP66mb3CJ6DMfHYeZFWqyWAyjg5txR1qGPc4Lg6cQmd31NqiSD5wv3xYBeD7Pxqy58kLv1",
  "key6": "39N6kbtpPUzxqZZZUaFw8UYK3qiXFUDxFnF9o4sLtUNv94HsGMX4sTUWfJfiUsMxs5JafaD5oR2ZiSFb4NApdqUn",
  "key7": "3gD61CvzZSwcBh81N9RMrgLf1X7PXBwRNoYCR8htCXE3CU7Z7gPY6Ctyj3F5N6qoFStLuAGtFQduC3hn2kYiicw6",
  "key8": "5vKNX1Jkp3hnTY85Vzkb3k871Ds8836j4t5Bdv2ePe7nzaCrb51zPSebZWKC2dZtGoVsxuaC8XQTXfq2f2Q6i9ga",
  "key9": "83ydK6E6wvh4ba7HXxm2FBwLQGK9DGi6RDu3793B1d45wLbWwrYgeA8vckAoih5FAm6zyepyytCzFsHT3Pwv9XZ",
  "key10": "4wPHF49KMXV7nzfNGLfyuSZMNor9n3XvTVUXaxJ8wysqWQPXFGiQ9t3iPVYmrKSLdv6V45WLCkgMHoizt6h4fUdz",
  "key11": "EMS9TwebkKXcUAu2MRtFVY3gLnNqxuiCeAL1EMi2PcUTQmkW2kGU5EFp5XB3ZhSZtwAN9L5QQy5rXh2e61SmScy",
  "key12": "2tc6tsJQi3jtSRsyLEERnNZzUYLESprEnddc5qKa7FEF1vq4bXESanFXfwhguQYekVgfJ8jNze2kKp6EtUAQHre5",
  "key13": "4e5aEPVhc6a2H6v9xqWioFduEjrEBDEtDJ4uVRZt46cbcVwxjfRrH3XKhKo1et13U5mCEv7VF32ySY2oh1dX3qvG",
  "key14": "4VjkCNsnowWYi7qJZGgCRCb1j5Y32gL7nGh7Y1cG7ihsAgymbDQXSudMFo7uZduiycwNX2gaC11Ujgr2Mzivx8cJ",
  "key15": "4GcoD6mo871VpeMdjo3ibCsmCa1QnDRL3rb5AhwhJKDuWAteX8qzMSTrCbF8rUdpokissKGMHviPUTZUVjS47rX",
  "key16": "4UHeKen2pavin6zZRxmXnvvpF3YSCKnu5yCXJMxC4rxcTUxQWYwTDW7njYHXSX6wJCNFrsA7A8xiqeMD7uauX8cq",
  "key17": "5xFeMP2tE5FwwbUpuy3L5zRCAVKUb4w1a9wrrScp8dUZBye6KfEm8Y6xzcZVbMHT1MgT5jqXT562fmGMJjb9Vazy",
  "key18": "2aKWaBevR9afAM7EJxUZqQdTHoJLhhyh5XJjAiRwg4psm5xmhEUvd7BXowsCbzmVKbJBEfAnW6tUqBRG2bbNtWc",
  "key19": "5Ucw28vGYJ2SWjJdBXjwtnuYP4ed2rzwtzgERPaYpC2Lbb4LDpVkG8LKRs8dU3mgyJUCCPXsehpyM9j9KeHLVWYU",
  "key20": "2iRBihZnsqaQxrVPVVBNbPQ9LK2ssJNAKgFG33TJPb4N6JNc2NwxdqsuaG8fsCJX5AiCknwDBJLCFuch1sXhiNKG",
  "key21": "4P16cqzKKQP9KaJWzHdZorcmvixY9cy8Yn9xQGt9xYSsu98qeJ4NrBYVjhSwsFC8K6afEbbf8Lfd18FNNi4pC8p7",
  "key22": "5YkmqMfwoKUwsT63Ycri2Mxs3svKcdk39gk3cnGpEFZUDkqS38MJTKb6j5uB3w6kVFxt2E8DeGdFD4enpZDDVv1S",
  "key23": "5uE6AP65d7j9S9bpdkxGo2EPjXVq1mDPwSwMWhSDmXuosoruc2pbvEd2etPF8Bnzb9e8sFHgNezFVK3QTdamU29L",
  "key24": "3eSQQfGpHXh5uBmLVTT32aQcFoFhygGbFfHG6xbbJ8BAnHmuhi18QRooYe1RjH46kuwdmpGo762EWs6pQCRzTK9T",
  "key25": "5rw4jKbyUonnA6Pj1VcW9ZL7FuZda1bG5U3zQSxnWq2c22UvNHUL4fFzejDZnrViiGYhR8PXm51FMehgnjn1Gby8",
  "key26": "5XzNDFLr51YfoC2rq8Cv1KcUPs1iBzsad858k3YEwRTRDCUTmVADrsAsPtq9h3WLpdLpTEMzGFue9SEw4pEvTFBK",
  "key27": "4o13wRX7VALjWvYtDx5DWVq1RKrKxKALu36h69unpgHKJ8zMuMMTYiJJbfanRHdVHfzbRHorU2Gd5h9XU97DkW2t",
  "key28": "2LgNdJjWKqNCfBoqkHo1y61PNZ5hCsEJdkXRNLPXjLMa6ePMiBq7QBtKAQ7pUj6n9cXBMTuK9f1wDNNrgSoyHirk",
  "key29": "3BdA5EDdn51eySY6pU4Zox9kw12RfmKe7uM7QrnrQZ82BGrjVCnRsb1C2M6wq4XFsWQhHkiEfBFoVBv6SWithdcX",
  "key30": "2n1WudXFuahb3ejE1ZH6K8jwPXu8mTwLkLAzTUxQu36UAVuMQCgNqPn6cXPRkJanshH4XMpCxJPUNMa3oKxV8NbS",
  "key31": "582ZPVYeS3oGALCBPe52ah6F3ipskq5ewqw1gRhuAvuzMJ8GadTjztwbFZHToQjdnCArEtsvdYfxyXTYd2twvLvE",
  "key32": "5CAB3cUiGvprDkhKK3mVAtStJWALiaMf19BD1DkvdFpqshykGcteJ2kfMduSHrB9sU2NYcDpi1QSGuwkM9pwrHfS",
  "key33": "3LcetWG6sBGBuRhQU8xWUnsse8ZExPXVLUMYhMtP2pmLMRP3MesJJKuKfsLdpNjvBHFCikTcMJS4Z5dB4voce2nu",
  "key34": "U6RK5UmgE3TcA4bTwJvdZY2d893odh7ibyzd1eWWD47aTwLkFhZhRf4nuLrvPEq6WsvtEXbWvkwnqE394sZJqDs",
  "key35": "55W61FVkoo57cUqcAKjg3yy26dUi7Bb2MfJUhdGvg7uL3NFrTDHrJdmAb5VBtGAPStEuvrj9mEAdbAYbZHbUBR8v",
  "key36": "4EtNPe9AhaELmFeyLz96MTq6KV7gV4MDVMLGQfMESk6nFX9atjdZxrSgmCfALHN3tkhdqE97eV8VT5r5SuvNkfv2",
  "key37": "5n7JnkmbAUNzgBbWhhwZs5GctpGAf155CMxaq5MNhCyqFwod661yjcwPneF9iiSvn3MciUkGTZ4fkkR45ibTveRH",
  "key38": "ie4hksmVDw4MEQTcuEbEcf23GWQv9zUGJ9sxMiiuy9X56DbkCuqxacPTupSyZgAjCEp2HqfC8D7J5ZpaoHNoydr",
  "key39": "4sBpfiDN2wwCbHSJMCvoGC7vNbb2WkwKgREwgh7cFwVdDGf1D8aeF2fgr3FKfotfK9xaqpSWYxnX2c36tLw7TL2t",
  "key40": "33H8orukhNgEFBQdUz3azXGEmnnhUwr6ZZU8Xm9hor8a3JJxHjJRUbjtwGJ9uXU5q6WKjmmVGcAy5hQcBQk7gutM",
  "key41": "22rAgkYF7T6pn43ck3jmncADtzQ9oPDYramxyFbz7cvhRWqZEnSrXdousiMTQVm9yvyV2anDsDPDSpMUvxEuW3Nu",
  "key42": "3MreJZdcecMinxMbgB2p34EwiEsyuoyqC9B5Wy5bRuD7xNzzXFxeXMSJKhCApC9iwJ97e46NBMzANHNfovCRLf5F"
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
