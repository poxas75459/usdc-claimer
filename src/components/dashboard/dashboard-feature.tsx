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
    "4GGBtdWDuCFDGiF8XbtFbXE6AqZUE1zZ3x1yt1usEA8rQv46abTgdenTFGg5szceZG1Vgy3Dju8CPCnUyNTvEtWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VBWWJAw7fgpkeKUCS3JZMrHVJefPYLGjNr4mhmPusVJ4yU4snfVNHB6NABt8zgdEDZrULaho74rA5nQxTcvQvqh",
  "key1": "4wX6icBmmCdVri4VAAhSrCNBUmZueZJdmTNcVFJ2ygHPVJyPX31HaK7xmmxJyzqWNGjAt1vRsY3V74MpkWhPSziT",
  "key2": "KZVJy3GTAxtE2L19EQfD6SSwihHBym9Mhpwj5bujsHGQd77uHdVG2n1FpxuPWSsn4ZAz4awzPL8vnkBMZomSJvU",
  "key3": "ravWLcz41PLhqvS89gPjFWw9ek6BmcxtJR5RetVQ2czx5Xfk4mBXbYCTXQXD1eQHqGgqeNe9EqEggtNR7BCCgaK",
  "key4": "4jh8XMjYMhBPdKEjiuLEfHdwLfkp4HvRWjd7Ra5rrHE5CB8qCp8Rr4tkHxMBcZftjLfeRJpGD7SWJ5mTa3UJidsL",
  "key5": "xxTKaehNNScG4SrMv64AXXmw1FUmyJcGkdDsyEZxMV6BsPrZTD3Sq7Ur2byuUX1A2PYWceeKuiE1ooFqAUnpJDr",
  "key6": "2ykwwq6Q3HuLZGzybz4Y5fghsHcZpqDDaWWhwZizBn9BYsYa5DLs5hGB6v6SYzkTygBppKM8KVUBtSVrcZpm3LMh",
  "key7": "3jPcdz98owSSQTbauhQW6afEfNNunnQ6hAtGzs6Z2BdVyTquS1FHmcqbWREv5v1YScAzfzTSkak6AJC4Ethq1iqM",
  "key8": "3NPv6v8avnSQyEnpagUrHzEYGaWs2QdzwAf3zt2LX5qE217Vf5J6xs1wxHx2XzNMuTmbUnag6AF5nbAv27ykDmsw",
  "key9": "2Vjp3tB9TGSGvJJ3P5329ifcBThgfAMHEB5Mj3KNceko6rHcyPeJkGiu8iXAxsyKPvx7mLQjaWSjuH2g6pqLHo9p",
  "key10": "5bJ7XLTM6Uc6ktVPZAncHKtVGtwNGdb9RZNxf2C2gh2nWVstATd7PJ6cHcujBt2txpFBmfUhdLAE36yjV6aGgiio",
  "key11": "3wjN9M7fGnySHJLghD3FTvN9criWgJkhEy9PLTo5KLQ742xF3bvJ5ujrSTucdfxy2xxykRPV8no3yg4hKjseESPu",
  "key12": "2iA1YET6F8FPMrmDZHHuS83QENiEeLCRLmecv5b6nAcr293wGs9QDbtPqVe7K8BuzGH2t74GBB9dKkFVzAjCqbjn",
  "key13": "nboeoaYEaunFJ1LHhv4CnGuwDimRjiDNCph7SEnoeUfBmf8JhzpHFECF5HoXUEdFzqtzk9dy3KNNF7ucU7DcSNf",
  "key14": "4kV3eZHbfju4DSpLJAv7ZVyWbpaG1vjCp9f5VYu7cJMtL5qvMCppsiPaqksBw2b7qNLGhXQALejbFkBpjpdejmGw",
  "key15": "5vEHF7gWfik5EQQbMyQbfQAFSk318jE4k11vghDUV5JPUjK5GzXUAnwZY6KhJ826edQxNtwvRsMSqbXQK21eowGo",
  "key16": "4YfzTHxnqbfdJugthkjbu2QaBd1T8w7exDiFJxauG3bCasGH6Di9PMjzwQ4YPrVDVXxMFWwAstxLVr3mDzh423uQ",
  "key17": "vhR4GVPKQd4x715XMRUvYcXEQkTK875xMcER7SDSG1PBCUNpasHZkseyR8XFDzgYU6c5jCv6Vs19otNjpyy9NzF",
  "key18": "5E15tHGrKqdy8sLFvSifhEih7XPTLDv2VUHjUVPCrg1B7FakqRrafZuv25Vo533Bz9hJRXNN6dJ9i7ChnxwcyzZe",
  "key19": "QcdJa3MzakouujRKuMF1vf6o4a1ezj3rr9oHnAjZZPStRDJM2YdxRDT8viVoJ4ddB5mn14yvwerTvuvF2LDcmVm",
  "key20": "5njvKFwd9eb9ukt4jPrBWGuxgLsjW9PeAbouEB1LTQu9DZzixoqiPHJTavJfKtw3Xmi5To85NbpTmwXYe9FFVggK",
  "key21": "2wHYfEr75gALRcWtaJC23DDTWx1yfFN1ucKQCH3ATEwxGcvGrooLt8Lrj1vjU3tYz5tJbatRag2ujbDqCowg7pGo",
  "key22": "4b1edBSjcVCbzcGyWXyuyvULmJFwUQecugaARDiaPWQou7J9fP6QsqDKTEJ5TrKV7sgd8qFditXamb8wn7Q9Jkuv",
  "key23": "54nvifqRs7VS1AacqC87YmKb3qemYQbWzbw7YTbS1PxMLQLXFow42kUxAAwRE3LFhBPiAUnaDgrhvAwedVx19ZsG",
  "key24": "4PkEbW6Bry8dEG5EcmbVQ7d5r5GELp7MX4pyvq5RarmZk8h6CtwL353nokejMy9ZhZS8BpmGy71aFbZW2eHgsB47",
  "key25": "2hmnLT6oo77nGAbqztNvTV8GszUp7YCqNr5h7z6AfoCBR7hn4t8YeZSYzDbkWi8sJ2eHZ252PTtX9Kyhqeciu2PY",
  "key26": "124dR3g162VSr97UycWmeqgf5eLi49FJvxvXFQjBaN7iS7HGuSrSm2cGpmkwgtwf5eJN1FbLXPrZedmrQqVJAHmF",
  "key27": "32bhdTRvBnoMQLzHJi3AXBNeyUGoF4yMtKxGX82ju34XQpuTX5BZk6A2vCYfntYF9g9fbGhrPRaDyP6E83bfSyEH",
  "key28": "2cnY4YVEyak7Hu26E14KHtEmASV9WvkRBgT223KBpFXmSbfD428B1Dx6huEdT4tjoYgSTRdT4Bb5KdAspHSycFH7",
  "key29": "78GabCLBEPohnSYjV2KSGmicD4BtBsyiifZJ12Ryt87cTwmYzPPM4BsqctNpGcWXKrastXnDvQ5n9JjxL3hSJv2",
  "key30": "WCJwjKPXaE6WYZvsFuuq46LxwyZk8Q74YLhnhgYyT6GVNmTcd52NwYE6wvdTaLDdQCNDGQhprVsx1EciwMht6W9",
  "key31": "7u8oh1YNwgwHsV1o7xxpDxCf9HE8C8heJzc84fDi5kJaiWRtjENQCirFDfD19Cv8P5dCHdEGvQnVPX2AqeGF7d6",
  "key32": "2337vBnso8STvufNkr3Wm9meZ9ZK4F1kjyaK8QsGfA54P8Y81LktCiTkpEjNEj2ahAf8Hs8eSLTVuLzZqSsm4Yih",
  "key33": "4WuehQfDouazG1Q6a6VhCYY2grix1YzTx48z2YeXqDmfnCD3k3xQndFAUmFjBU12ne6VYCjfSxr2ChXQ92qN3zKo",
  "key34": "5pY5TY5AiAiPZUaf9b8dbMdCuLWJgNRgQKaXy8rtE99YZjdG9dDvJ6SmftwQVjGXgv9EPH5xPo6N1ntF1Hg9U1az",
  "key35": "5aBhUezNG5iR2WrwHYhUG2aq5Yp6qgxAG7Y2nZ9ngenvo4w7cLdf5ArKUmjkGCbvFepBcLBDTiFzPruJK28Exwtn",
  "key36": "59cDnvBMEy23N5gig8cAbJ9Tn4Vghpp1ShAtQ8HpDRP3fGVYq7AXtkv4xMuH3vMYj3RoiFTk2eUhjPVmUphSmugK",
  "key37": "7XxfV83LHqmhJL5JqkZCtJmHkDuBLg3c593UAausNLDya8iGj3DaPaFtSEHokiZWyH2yAyhe9KZ9sU11FPhKx7h",
  "key38": "M6LN8JFzEhdAHVUrCYHR6DAHhwMvaHRfRCwqvBsyuNDGRaejTgav4ZB6n6w6vdCHc5yrLVLsoPqRE4fFKYTxZ5L",
  "key39": "123epbbPxAdYjbLUtHQ8ZDohjxsbjWYce62hCKggvHaAccA11AUWkwW1ctfwoPKHtNLwuvc2PmZUvkBXVn3vLFJ6",
  "key40": "516HDMKn693kf2dUHLMNd1W8HsPtwB1w6h459u1pCL4mRvAdNhk3nepMyk1iNDEPmGTsZYonP51aXWpkCPn2QA5r",
  "key41": "65WVXCw95sGPiF79k5CfBpmDcvczUuwUrQYUk9wUuG7G9qbE1K4v4ZW5Anuwy64anDiubDH1N74LEMwK3sPzVhYc",
  "key42": "653tfAaAh2qk2NQtWbf9tWzk7UbGKht7MTatPoMoUSoYLStMHyGRufTHs4aRiC9nqcFhA4AcAUCQi6KYNNa2rttg",
  "key43": "513NMxFdLhFsB3pnLWvzpAbMqnCy5f9ABKbCPCBvP9CwRx15eCBYRHG6CG5ZAw9ekHiTpWye3qX2kXHUENZKNJsD",
  "key44": "Nf2nT6yXRsETzpN7VMxeB4hy1b9hFuZZHSKwb4KYf8E7UjwpBoEC2MK6pKQGxCkkeLaPYHV1L8Rnw6YU6gNuSu3",
  "key45": "3hijGcckswth6RjKREgkgT2WwTJkdeh1BeJWMLRYFSLGsU1rYFoGgVXWWEQbtFSddHRCWtqYBEazbUpTdpV15CTt",
  "key46": "5h9rPFusG9jU3mAbYuUVvQHpcshzNJJgSXyYrk4zJqY5HPz498i82aY52yvPULy11fiafWXoTjvEeJnAUa7sC1Dq",
  "key47": "4zZB2qrKz5t27aSQygA3NeJBKrGWbsrFxWzz85H9emv2Eevae7ZHCnBTvkbKtLuefPa7oRZSWcjT7mLvEY2Q3jxh",
  "key48": "2pfp8mKBGdcanA5fYxig9aRPJAck9gDjD4YAJ5Kiw46AUrggjdUk35dMS3J1i8PPWSj2jgR8jsHQ1RhEH5re8vTg",
  "key49": "5w6x27HiaDzJDErmjKYVuJt9GBnAfRrqUcWS9tTcGjC4zZoL1b8UWNSqjykt9LEqa8i3Qb9DCc9GgHoUBABDGpaj"
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
