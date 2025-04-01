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
    "5oPaL43154gEoogpMDWucmHu39oj6cBYku1afD2CyPg7mAtQenKYZUFMsUcecmWneeWpZrnyuUJuTFhFvnc2Etjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H82EzpbhLZQ8sfhNCi26VhrZRejQVn7auFGFWZMn2G1auFxscmn6BNrEMJNqtbmhMvXATbVh7rxSJwaWKiKUso3",
  "key1": "42JVhUEFmm5kZkHFtToSs3vhDdZWunpUcDCqzjfeR8ENp21MfFWkHutzivZ1S2viVtam9j4LhEwJnsxXCHo1hCBL",
  "key2": "QEroyCnx9qEUFTQJ4zwJ1anjF1tsHEPoX1G5ie8RtB9FJd9niRm4k8DABbtZkYWdCzPJ2fgyw7VGFcVmav2bMKJ",
  "key3": "4WP7zer8R3UKGF3objBUXkBCMPeusncEyHyK74N9vAoUoRHE3UgTPnB56b3W2vGMeiSmS4jrruWLdJGV4KGZJz19",
  "key4": "2G6dXoxb4gBdQKE8FBqq6Zsuu9PAytRkfhGWUjtBCTgwHwgLkPZw3n2RYu591cYagRb8naqCt2PoNvwKEJj4HA25",
  "key5": "f4i6ZWqRonCfeyt6dSNC98tGA5crfCqWvMa2TKs7hk9yqRpFG1Yqq5LYwf3KFPQVViCwGafDpEbZ5rby3245DoL",
  "key6": "3gio6ZifsdgtafmG1ovwfNHAjRUe83m3F4ZTJrzffoeKTqrgcutUJ36gc7f1cy1pMmGRAaW3TZJPijp8Eh3WYHt2",
  "key7": "3hPcsp7NZxDfTXeNvYKDpQML9GMma68BFtihQ6UxnLxTUjFH4uAidrWFRXvanKDpR8sseLWTpWbs6waHbwWzo3gD",
  "key8": "3pyJR8fZXWXJjsJE2NJyjKQNakWCzNpog8Hk37p6u79s7rFarJpsiymBntnWCisdErDPVfVu9tMawP817rsMpEK7",
  "key9": "2pPeHMvoFkzcvNAhj3GjMP5NXgFGow3L9eakuVUYU7X9yRDGQ5pGeEAGVhr48vCY82f9gGdW1hqoFoQ9c2S6SSoy",
  "key10": "671CjzquA72CYgHihDLsJK9Meu4UEuxGohXY8RMpa5L6pThtBVC3M8NPs4F1GuZ6hDi9u2eatx7Si4dxMuyNRBCs",
  "key11": "5tbWJCmvgRwbDbSNN2MnusKcfWpmkNVJaCWvoaZhzg6xSSfNPWhBS6u5uLigk2iSFJWoRp8okhCDNhin6meLZWDN",
  "key12": "5Yd5M7Bn1djddQo1VXzpoDS7eheRFfKWV7CwAbJ74HNFrrQdie5mm2GGNvGtezoRBeCeeXS4t2Dj1fMnvxKnm3ck",
  "key13": "5N7rseNowLUSU4y7Xs7Ch4sxpdu3dvcd3AXLwHrMdALHWBiAUz1YHsatt59zCvJGtUDQumAL184ZDntCyTitFXpD",
  "key14": "4knDfbJQfeZRUgraEWZ9xjpSZEmjpCwWeRyMj98EAX2jeB1s2HoX5UnZAySs5DAeerZ5Rdw12bLDR9387oW7mwdV",
  "key15": "4b2RC9QoEfA2kA4QLVooR7doAoAY6UK7ekAg7b6cfT4X5CK9pGh5mzbvgYd2ugdqwZ127x1JWEUrD7JDNQqiVirL",
  "key16": "3iVTUCotvGdXGsCaR97Sw62gd2CEaFVfBf4XJ6642HZP1M3WhvFN9BAMFGpwNXNXb1wdzdad69qAXG5qV8GdowAR",
  "key17": "5rYEn6mFfvVD5ZTMLGVR3S64nAuKugnDwwKsprfCNrFXmsgkHxsxTmPdLEtupwsQMhpAKFhpouKfLeodmXQC6bw5",
  "key18": "2vMxXtcATd638Xssn7cgS1M7MdDz8XJJWQAAGyi93oF5KbdRPRqL66QZW8yChfLCHvHzyRz1R7WboTRVsKKNmLLd",
  "key19": "4ZP6xT2vvWeZsz36rGBbkTeXQpASeUsvsyGzXz2TJqcJbwbXj6tkzV7o7Q3jC2CBHq855D96Gn2GrG4hZvmSJE2j",
  "key20": "2YzDA3YNdLjV83gWRLKdcrrqef6J4in1sTByfHe29sNhQZ8U4j5TzTn1bUxzVNXWHKKdpPfnbLjo6o7iWhVJ73LQ",
  "key21": "3JDoUpSXvmqyMRWFw3kg9ZJUERyUERBvGgsrdr7Cz4L9Um9CKkif9rndfbxmbcVp1oBbPr5YCDAGtXcZMpppubaY",
  "key22": "51G1PuQmeFHgJE3J8VjdC85HfVH5mhm4yPNF3hnAVBQLaUYfRG9KEp4GoSwqjpZJCLnHdgU87uMwrDmyQQXtNjpx",
  "key23": "22hz8XTDUwaEno1AmwrQGNzzwy2XzDZGZuk8XidvpXWWSGh9EkSyrL6x6Awm1d84iiKvH2aEDoJmLoDh6xBr6meB",
  "key24": "5UNhpjqFk4QueG6BFzgzEKt83PaoM2sDPJxHgkm9QDjG8tZt6HCsp1nbAh8jHuT7pBudDWXRypgqdju15owpE4zs",
  "key25": "5ABia5VyHJx35Nd6VxwTdD9dCV1Cpki4HiT8Qcfr7q7ZfyaCRZWFdeQ2VEY2aWFBvjT87nmxHXPgmKoQzQSqjF34",
  "key26": "2TDE6neuarKnDmNJzY3XPBRoYi4j7q2XMN86rdmBh2SxWHTGU7h3QXgzamqg98NWdLAG17txboPdHBQjm4VwV7Fz",
  "key27": "5vq2DvRNWVw8H1ZJhHXZ9SVDfW57vhyQvhpyB6CG6dwd78CiPtTNLHPvWkST8RDacMk8GPtbQis3PpVtqm84sVCT",
  "key28": "5GDpCN46m6qqcRZzYnf8d4KDceDb5YMbqnFSAZpmGuQEBbM2BVMZpLE2A6345xJgrqptS5qik4VKQwHGZ6mtEvcx",
  "key29": "5Wde99Q7VwqAhyaghrxoVWehrhsNanfLNTSqzhPPhSRJ97RfNTok1gATVXAz7ZTH65M8NJJ7vYgGWR65iUKxD6gH",
  "key30": "kGkcGyMMrigjR6WwLi2C6FpSLbv49Xx7T3LGMJkf4NyjuwsXzB2dtJhzCWrXwdSt4ixSjS6kxZHuLEPjHyq8sqb",
  "key31": "43pahpw8mGVwSroAZrbvUfs8E6qjNjUqscFXbjh2FMCQXib24Jp3DK41myJRxm4tiHvsAFE4HWBFMR6CdVpC6vzD",
  "key32": "33gudXfXHmBsZkguhp39x2BydbnsNkJGoFErWoaj1EMPJv68cqBN67Y9xMGJ6YFtKvSHVkCtnQdRREgLdUDCjppZ",
  "key33": "8cxJLNEHhVZj9CtZ3ytoYn5xsUmtYxZAnQb6LYV7ZM3tUrVqA5dBxUrETTFsFi8gcVeRnNfJboB9fbpMB1EnBs5",
  "key34": "3QbSqFyRPUqpespQ8LPVFk33W9dCbwdfNouKxd798LWNWRgRDTEpTACUH7qCyrg6QaJXmhWi5Khn5sf93P4mVvDR",
  "key35": "5FubdMQvtn3CFTnk3MNqYyuhf5dH79oYQ4bndvowQSy3Ui2j61QJFqDUHKan1WTpXXkLurb6FgduPJYL79Cfj2np",
  "key36": "24pdVyo5xxnW3w8uUmkv4kKQy9GFXhzTTFFTf84ESLpBrDZXqWfDSo7KXNTJ6t5r8x1Fxe56GiCDTHo3mNxGCBBg",
  "key37": "2F6aVH9fk4dGupPGdtSRDnV4CSV8gsgG7Z1CZEEZ2Zh6MXa1z8QaB9CQRMHYW2r91NajGSKvuT3ZmZUnhGvCz9fe",
  "key38": "5drkuvCRzHiUTdsZcXPJeetudrjJfGoiNp6hZ5LJ8CmqeF8dx4MpX6eDK5vsrmwDMbqUnje82ahKCkos3KcoWJjT",
  "key39": "5mTZtpDT7AbmD6zWcj8KarVRxrJjVvbVMaVk2KqpJfXffnmsJipG2ZHRKCi1bzntcLmCzAJaVnLu5MYg7dZ1g2LM",
  "key40": "5N3NGQUAcvPZQFxatL3vj82LyrhXFm6D1oJxeA5wRcTFkeUv8nfgDTYbsNUzuvKkyGUXMdNcbE8NK9ocKKbiaMqc",
  "key41": "3AJGDXbfnCjFxwtCC4LDGp239npaoYrmqPGaM2vk5RcUzSMcbNEsmArjonX9dY1Ju61C5HNu5LXWSqhLUcMUYERt",
  "key42": "4uRC9acuNecfzPwZQBjvNjhCuEgConKT5L2dKc78Ki2owVcrPXvPL721LTuE5amms599SfRY3sdULqGDSuJeX455",
  "key43": "3kYQEtM6EgcQY1xW5kf9vuE3FGroH63Aesrd18AAzH7rYMct45jnXepDBWiPqJo3quTyCBCFKLaMFEKpdYHh3RjD",
  "key44": "2beZMw9CYa9FdbFyXqm6L2K6hJaSYnv1qcyNzMKVj9w7huH6aQbQFLmi9siQMSWhMLS8TKxf3XfpiprpgWPzWGau",
  "key45": "4ubLytBXBhLw8n4dttn5KxCqEz1T1SyJAUoqrsGByJ42gBpBAEVmmsKb5FJotTRee2MW4cjDqosmNvzATuaKsZXW",
  "key46": "P6b8TxxsV46QAgCzg1tkdh7H6C9VZd7ttr64hCKR87GWPRCcWc8UzMacPoT2pnGgvKJT9VuCMZnx6QTTSSNQbj7",
  "key47": "4cBQ21xwBjnmsdSsSedSeXzpdyeBwHWMVQvyBkjFzHtkymZb8fTCi88bMTERbq5jPRjeBycmDWaTC7ojSFgbdV3Q"
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
