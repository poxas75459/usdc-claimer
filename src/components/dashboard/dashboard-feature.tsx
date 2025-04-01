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
    "2Sxt1JzNWF5yLrcBiSR8wBhnWyyjo9t5fyHNfhLwNu4PudgbB3bj6K1Y9oDgi9yk2GWSgVtAHRSBF5evyrVRU9Ve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BbubDEaLwXiWFAR8RXMnmybBvmnNG8t42XnSLAUzXa6rZNRrKXhAdhxVX4TRsonFtnBYUvtzepWpfHYHAXx64Ja",
  "key1": "3PGEXjPnJV6iYxM34VXU7BVbpxnjyNEdoPS9gStEbKJ2R8o8nYbJKXA3mVFxWq9jZfaVGEjP9yqBa34QiaVuFrFZ",
  "key2": "42VSsDyBwzmgVaTPvpXhpJedk812naai3EzTe7x69iusVDnZtFAhEyW9STXVcG5HjFdt23CEALEcPi9BRm1ZkVHW",
  "key3": "5HG7QpQysbE3NNJv4fkE5QqcycYuntBMbmKmJNsu7uLErk1x22ZH7joQcJ7pEHCR1gB7EHZ6kbh7TcBnH1euyK9w",
  "key4": "3joNeDtDxZ2Aqz4eZ1kefnkgLHvVACHBxJ4KUoD9VEP23bgo2AzvPpCoyhFHv1eHhqPWEcbDVa6755uwFMgfs8rh",
  "key5": "49Qfg2nvEXVoM5gZ2nUyWzMhnvHwpLpm3Jyndqy9eeHq42fBRfXGVVm8gw4Sq5XLgUyGqsJwWGZsi39VGUn6qurS",
  "key6": "25a3J8upw9tAjnxAhAPqV6dKTSTADDmdtoowaoAGjzReXm6NntgzaTQQURDZLZ4M6xgrwATRuviBYSS2fkccW5W5",
  "key7": "4FPhR2ZD48bU9zKn1izXLvDYmyonRCjx9MUtha6FZ7hyygaEuqeMQm3YFs11xznyWgPmsm2WJP6GPJoEuNeA7vpk",
  "key8": "3HirB9zBzM4MTYZnqB2GGFaXznm52xBKsgjtwzKUKs422jKPWZTqENeKhgEkyKeVf53Snwpnpo2268AV4drBL6YT",
  "key9": "2AtxTi6g8rFYTxYtCsKfB8SSTQ1Piy7u5Nvn1g4yKjF9MWAqyWjvRqZtdP8Z7vghPXGeanDv2K4BMGewGnuRpmLx",
  "key10": "43ycaHNHCmreV1dHquEdqYP43mRcVvJ3jkTmXpcqdj4zJRLXehZWMQMDbemCA7NwHme81mbDbiJFEFQE9RB5Wb56",
  "key11": "3YDaJ4NcQGPxGkzp7aT6t61M9PH584287BQrTWvoUUoWhTjtcU7xzBHihfpGDBXPQafEP5DugbEeEkHx7RPfuWzF",
  "key12": "yMZJEeUFQSkWXZpWoUQ25FDTZXJceT9zpHScz24ix9MhXYBzkaGPPhj36gQ6BHxJV3vwT87UGx9bxA6Jd3TwGXK",
  "key13": "5wn1kkBZMpuDBt4F5PDaqprmaa5S7GH1phyL8HJ3vo9DjbNp4gfoWi6qcC2TBUxVX36NLkBMiRCfcR5ogQCAg7ZT",
  "key14": "5mAHYY5hitZwsb2ii86U2Az71ME7SMaf9TBf7bx57WwqAyXLXsV21hmsFh7r5Ld12oWdPWXADrnchQLwRskvnvFg",
  "key15": "4hayZ8oXmHqiKHtb6bpDaM5JQy1CeMQjbf1QTvd2gxoVweb69Arehb7hR8YfniqCAtxmogvzjX4t1dnhFNqV4ZmC",
  "key16": "65ksKURF5oZeVvrNFRh94n33X2JH6dud5RRzZmxXzbyVpMLw6X8EtcNkrEYLCpUCbky8X5bHPy63EJLCE2y4PTrg",
  "key17": "38jfMKjxx5FLW7ZWXxiSJ5kzMAyXu5HUUUTC2zD7Dra3aWt5ZrZM6Jy8cxNjxPGMG16CsZBoYfSbmhxwJUDDn3mn",
  "key18": "5MF2AfePq5NPVJ9JfNr8o4rJVhwsMd4an7Ci296QKtXwxeC7KTYSovz5sWYaSbdoo3CX6tTm6EoEuPECvtn6Fa9E",
  "key19": "25hBc8hdUEejW58eHvB9cxGc5saiFTz1iVQbP8q9JSaaDxZ31bwKuV8FHwwxxtPaKNG6UT6JeVtGhoRdRVq8iGkL",
  "key20": "2E7WjcUFXpeQhCh77TGGaJToCt5yS4hszVMfQBqArTJsQ1ExuGYUUK6yvabc7E2FgitUfHDwaSezjDncwFJ81i9k",
  "key21": "AfBYqFWU37621hfyrXkDwcXBwGGNPY2RpGAsc3zoawxR7MMQez93fKBp8mzyijUb22Zy1BCB67TGMjV7JRRoBTC",
  "key22": "WXFK1Gh37TLUvFPpXZGDLrC3gNrTcNgx9aeoNDXDzWw3ZHBs86tHksmUDte8tfj4TT2mrNSsuLA1QmjeSZyraye",
  "key23": "RZHnj9kQVgu7rVJnk5Xeb6WSDeuyzJXBYmCEr1YKovmZaViTL8Y4tc6gT6GyBdqo19U6AgjAZaHMMkSo4WwtsdY",
  "key24": "3TBFq145p4FmiT6aervapZzVNfAxKs392fgqCZnjxNe43q15EH9ub1mv8GCGBvZkvG21s9AfWE7vptTkZUMZGLzJ",
  "key25": "4JwRzqPJVPoHdBePe9J8wVNHmPGZ1PqtYDbM7QpLXPfxcXMgsppU6FQnzLRHjpe2QhiCH29EBc4YFk7BM2Jk9KNT",
  "key26": "3K51HcDLftZoPZDHff3EdZNQYKDv3u5fzophCuxcn7vGbCkGgpVwiBaMxwEpnaow5Nxqa6bDZH28XsybvV1auQQ1",
  "key27": "fmSqnqaUBPy22g55aWVuuSaeBCCzFy6P6oQQXmVk9kHWbXujY3cirdwubst8SfA2bMVrGFrt6xQg7BsdUKRjvuM",
  "key28": "2RHB4QN7vDf6poMF2yfZgRKufoD5ZQA4yqS6bPEpFLTxhzegcUXua2XpDgAfR5eGju6YmaEpLtzCcJ6TmC8sygDf",
  "key29": "65iVMm7pHr7sdoVFmkuec141UGFGUAmVsHrj1fpq9v8wiGUVJG6w14UJduQM6ncv65AbZYZT38rJfxiaQ6i9Uwmy",
  "key30": "h13SuPVT7ZniBcsm78YdN761c7PR2rx3mEj2ymA9DbQ2ifoJpi4hUcriu3gEn2WxTwqHRjydfsCQG3g2VMVnEEV",
  "key31": "2ToY7DRqf4aigthV8xeaE1KNX31xPbPsDReapFLAs5F2YEwfSHgX4PSnBj21RKcQS3MRLL1NYaGU9rqGTEJJiSuS",
  "key32": "4rFL47sn62bx3Ec7ZHVPtfjh4cHeBBMUrK2aLFhaS6RqqiEKoFfG2U3Mw1wjHniWXoAnhpS9ia8vaQg2HPvZrpoE",
  "key33": "31bwbXseB4CvEbfkH8vubUfDw8hTZXcpEBZu21Huymv2nMB8NKRuRVHE3GeXKQEpTF4ixr6C2kXk9PycpebLG4VM",
  "key34": "3TRcAc3qMarZaJpzpFZs6BrM9KzTuET1iufY1YtxqJatTuteZP1dLuXyibK3gNBBdLx7pU57HKkH3kfQr17ZgaP4",
  "key35": "3w1DPisKHiSCJWqitWNUm7zZRvFgcM4K1HYUoGD8hgsW1S5nBNnirMGRhWcHbDYGFwrbqwm8vBFMhRduPmU1n5e3",
  "key36": "313RhRzR8FR5eZf5c8JZAkoQmhJDyCPkiCS11Qzy7zoHj2aznjFkF2sLTgQYVLNxgsAnRHrjqEftuk8j8eU5hGvR",
  "key37": "2SsUJsECFPMy9JjP3BEgAakDYiwR1Na3rTpA5HFyqWpKNVXtdhYd1Ky8aKdLiYiDcD77KbCeAQmthgMTLNu3hUKS",
  "key38": "5U1H2w675yqb3cjxmV593co5LbVv8HY2bshMCxEzqgr3hPRoMQrQYU2eBZzPZ1dQqFZwqZcVwcq4t99gfeckcbcU",
  "key39": "57PcUGLSx4ewDHrRqKUC8Leeo9q2P2vGE3rfNDxFQJEBXj66s364YeaGcZsjXuQmb1uXbVumcL1haapXXQ9WuZUL",
  "key40": "3tUsckb78ym2oNg8BZbEPC7Kg5TvZCBzbGXBxqWjnE5GwpUoRkvNkaStg53Nvc9jNr21hL78B5caWo91azhALiDg",
  "key41": "4pozETwWPZj3a9qqRzedjx4sGD2ZMBxUxevUbrbS26p44zY5qtpftNrJdx2PPEkFfrMcuKo9z1VfJLeoUXdkJRWy",
  "key42": "2nUKgDwNx5iV7ttrn8xhYHU2LZUDaKD7VBerAjEuo5487dU8d3Bchias7B2yK76d1eXjmtLpC9jfbkDPwme9naY8",
  "key43": "3sAvcs3CztW1kGQps2Q5KQLAbGbkuTeMM7Pxgz178Nf2FnhA3MXLXzn9wT6NJVq4LMXz4YoXDJt19gA73veSBHSG",
  "key44": "2mjqidybyExfWK4vxjyir1HELGB2ranaKGECzKSk3QktiCn2Cja3ZstSucTN91sD56tuy2m6hexPqY1UK9wroSYC",
  "key45": "4TuCnK5oHoKfPPvSJzh21RUjvSvhhBTQhq6XQ6M9NaPitghgNvNeFGCDFRVnvzRZhfWnNomVZmyC4myR3kwG3fJr",
  "key46": "4tvk3v5ztJ1C4TW2nhxyG4CmNgLVDbD4womBGBjT2J9BiyqWiN52qeHNbdPaKJmpXc2mx7sBMa8i771b7H1Bm4Ae",
  "key47": "2T85PosiNmPEB3DHkWFBwsVrWN5LXniYNQHRHkVo6djVCiSVyXwXtAmQaVUBMzDL6J4uuApFXrJLiS5subtuTkzr",
  "key48": "35L7unERfpJ6BdgbBsrhnd4vgFzXc6GSAMQnfdY9X8LobogqoN4J3EYZFHRS5if62fveNWmS148uRFY2d8DLimp3"
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
