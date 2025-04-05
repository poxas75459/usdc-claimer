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
    "3n9g8jRWHvadrcCwg13dm6CLYYBaqHabHvwLMsS3NndLXT4QTa15RZsrPVy4QxzHkFuSHzHyiPVBQLujwKGX8aVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EBzkSiU8bG7BmbomWX73gk9veqvgxAG896MtB19tMD5c6GTTq8CeLEWkzFcc3JAq3HKXHGqR1HjPQWd6ZaNdQkn",
  "key1": "4ibFJjEMAsHMcoyf9B45N9sYzcxPb5ki91R6voK3mLHZNiu9Fw6RmVsB1GvwvR5xBDgww21KYPcDxwhmLQzmWcYt",
  "key2": "CVqqsPRtcurvKzkCrqK7f1uuT7AcU98jczHTX8nJNYpVWs7DX2pUMBbooFe8Dp1sajGdmacfeQC9XiEP7LjLtyW",
  "key3": "4FC6LmSiZvnHGUux1LS6hAjq4gAXpXpYkar3J2wvNhWyJVmzTTWbLqZ1c3V8AnbhgTznTnSU69wUetoQPto5b6mR",
  "key4": "2dtzKMpTiBsJiUXRbQnsgX6f9e2YUM7YGN9q4TdZrnwq6fVmJDYah2i5ZLs3PLzpXRK1xcqhsyf9UuB27ibQVsRY",
  "key5": "2XJExmGYrFPgHyQhpjgXUAtvAMEKWqBZ1cBGkaEoiuiJVepnjCZoDMp9W7GEKLhpqtqHvtYMe6L9Lz8sa7YtChEY",
  "key6": "3ybJEDNXNbSbsjrqdYarjs86vpBktQ7eF8LtyXp4SJrkZSXTLehSoc2GQMVJr5t9c218EVU6YZMZxrkVi5sQMNEW",
  "key7": "3Fq2cCvRj11s4wzPq5sjPjAFoiwYMCtuZ3MwCQQbbg9m5sufExoT9qBp6hyfuoGXozV3gZwJw3rD8ND5vyEpC4z",
  "key8": "4aarLsfQ6q2eyNuSGm2Ghk2JNdLTtB4UbGyKz49Ta4eCBaR6beg4GVggMhtPTipZKjvdtAd7U89eF3btzHxfyXCQ",
  "key9": "46WF52tKAnUEVb4BaFojPYuA9jagr21h7wYujGgqQ36kGzyZZdRBi67s7nAn8rCEvBF1HpZmcyEA1mWQNeU2j9Xm",
  "key10": "2xF5XvsvZGpCRJL5FeCWbRMoiv8NNU6FSJQoHBPYxrZM26oQrRrZekPURMtY9UrEE26sfJAy9jaV65nmkwps7A9M",
  "key11": "SaPsijMvYibC86Q2oHVGcVUoBxnuWQjX6V4xLyPH7yqghuumR59FZJTDHYucn1HJM1CTLFfnPLg994Mx4Ma1ZyB",
  "key12": "4aydsxPLcG1rdK14FBDdueEMwXMy4WCfKgAv7ZDUrKNuw2sRhDmz3raRuD1BGSGNANtYzQgdBXeH5ghzGEpR1t4x",
  "key13": "2sSsBmBHhqMxtyLEdcYa5vjawYHDcv2x5YYXnsWWbh4HfnY13d4sv13JFBxcBxai5qtiCar9ck3Hrxs1FgBBsQv",
  "key14": "Bwmq1F3oKP2Wc2gTw7wnhsQ3HoUiN2DjShbBFdvzXdKiZfC5jmhm7TnFHDYFmJdpWLxCmmSed3jNGc1rLT2eNbT",
  "key15": "NhxYU7c8F7MUTpQTrYkhiY3x7T7S8RyKH4u2LV2Jtpu5SVauxsDybqBoFhrHwcZmsQQ4n2GiSMCVo9uPL6HcHad",
  "key16": "2bsuqWLUDGxeomQrWtPsfVmptCqviUiKvwFdDBaSSk15GNSQZ8BvHa78AtrHTC36wa2N2cFQhvDBB6tsKTghbnff",
  "key17": "3ucf6oFw3YzG6MCvdKjfHPai4SafGdpLCpj7xTd6D92B4hC8fcSEoqvVhVCpJtDq1eGfBxrPm5MJ9z3qj8UZcRfi",
  "key18": "3D7HTcWq18N2mG3jgA5yRbVGc5LCNKMXZ8MBTyzrwDzfthxzacxtLmkTXWA48ghRme7gMnM3ciTo73mEezBajnSf",
  "key19": "3Lj3G47UEZhjiop6Kz1x4EJokenN1NfRCAStxkEZHAN363at1zVV24ViKZV9NZjnozngUzLMC1MW8GcSxAoBJtCb",
  "key20": "5Y7we66EvV7o9uXi9Qe7fZ3JbCmW1uN2YNxHQiwkhLxopssNU9Y2uM2sQwcWSGPPUPgei4jUhFetsW689S6x7MN6",
  "key21": "pXrhXEqPu1ocGLdQXTggLQFM1nwmwYR2CmgvqzVa5HZRnr37DoSLcV5hE66vZAxdj3abwPH8UMPP7UmazMC1HV2",
  "key22": "5ehbnGhnkA6zX7A1ubynWP98ygjeh4dfk9qPkWy66PE6QtxGAo7PacbLRMamnDjrDyLzJtyKWZGKCRE8R86GhNB3",
  "key23": "4ANDRp2bGs25io1q27VzUnzJbMrQwFcMucnUNRPe5eHBy3KtixkBSyTiNvADBxx1n1s8P518KzU6vA2KQcaDoi3m",
  "key24": "3pTjG5WvFbmnu56QGCcSSLHLYZ5dQT16T7uyyNrT6iaYYg4YYxx6i31ctKBfx9AsHfWBuw3Hn4iHgebSkXPEYxmY",
  "key25": "24gGjF2hu1XbiYARiypV7m2nKu4jSgcYxPh3Bv8gJoJEoSKd4iisHMDvBK1jU3X2cwijVS8UHWwMzHC2EfA25Sfw",
  "key26": "3ne886A5rZBW84y2QFvg1PonYrK8EXDP4UcfcQnSkcEGWvRuqxuDf97v74H8RQ17kHP1NChEYq8J2nuZM9jeDBEK",
  "key27": "5YfomuPqZLX8cU2Q6e3iW2LLZBRN9Ek3b15PaKEQ4qYnABtVW7oVe3UT9xcJwApUxbdH4VfKWa1JoJKq5vB7sh1T",
  "key28": "3PvK4HhxXmMv2iMuZPkrjbRmZ4fUscABrKWwidLhqbveJqZQ1cL9XqV9W4dywdqWuZtDdgrPtbuFVHvjtEdYYPtd",
  "key29": "5P6j52L3jFFi34jTHeXfou93hncT7uEmRrckEnKvysYFSaNTd2u3cnHHtz5wfQLZHrCkoRaWUtPZXKuATgmSrM6F",
  "key30": "524C3bsd8HZ5kQG49BMB2xTe4v3pLgvwHcGeThz8j6U3Reod33quKsJ32BVm6Er9ggoC4s3g1A91WSSHmNZnkCYt",
  "key31": "3wwsvxpjJ49fJm3PvEYnQgLHBvmC7kgUHb1kGXZ4LsSxSRWQrD6Yegjn4GhpjCDVVWm7ZvCAtkcC5EK9yRankRux",
  "key32": "66dZdcoNqfWSQmDLrRvPaBGC5hV4ddg5xwGf5qLrDXY4eHyE8jByaNvJwuEyhDctxv5avi4qPHWDkDrzLhn2okqn",
  "key33": "3cm7enSptBbPUPyUo6Ek1ZPrYsJBCHu6D5NZ7MZzFfbhDBEcUNPPU3yDjsFj3nAUNN5WtkXvFWfQKqeGNCLzSfUR",
  "key34": "2ZtJyZjLicEg1YtFzgUiUAqwkgdQWJBhQhZEg9krF122pfzy5WQ51YcQzU6M9kvpH7oGhEUonGPUa7JVMkRYN2BL",
  "key35": "3ugfN5dU46cGHTj65gPhYaRrCAEKjwYdpEHo56auxmZJTuJPGBF4Vo3obZNTTm15D8GxybtZAbjSBPL4KRDwXims",
  "key36": "4hcze2hdHXuCRBn78V2fSoaP9BpgUPbrpEEg71gCK7Mg79tFnYe8GuL4PJXvMWiaFH6mAQ12EB9P76hkvES3ghMQ",
  "key37": "3xLZQ4huiAJbwL6G8bJoDNguHfJyfrsSjgbYV2fvAtf5CDio6ciTfnRtaWBsLJk3neh714PoosnUzyxyNxb667dS",
  "key38": "8yJKcgBXZYbVKNv8hn1KyhrdhJhXiCbh6QxJoUsfvNokFwB9icfpcZKqfph8aJtEzAiqh5RMs7WKvxziinzEYDr",
  "key39": "5d1Ptb4KZavUQdCvMLqepfEbjvUYthbeP5fJYx4CwoGSytrrikk9dr7fFgCxLwjPTRH6brB3CYUVhymoPqgMMdqP",
  "key40": "4QNgwZWy7BHXFfRybWM65U35u4YghiLv8VszL5kgNR4hrSdBj6eDdmua8qTU9BvJ5GaX8PivPErQ2GQD1dHr3g4e",
  "key41": "5VMeTvDjYVE14ZBJnrrQ5mN9tJEQ7QPqXcaFKxCkAsi5t6edz4Egkqv1XCrd495LAtwV9drxSsZ9YzcvknStC1QS",
  "key42": "3sddFKF2TPvirU4WKUVmVVJ4Jy6D96hQ7WsX4LW4tomCLzCb88PGpyEtiYRQ2nFoZg23dgQHND4vRXS2FQJgaZFk",
  "key43": "3VE2wZgbyEfZ1XDqXif9VaWxx6zjVAW31edFkjXB5Q2FzHZq1VU91Duetax9cSgwXR9V9YeHV9Uswvf238PJ2yrw",
  "key44": "3w7zVFZbHhJ7JfDqQSik6xiXrkjxNLGFiSj3KPS5158UrwrdkEkD7eVCyonE9yRJvujBwQBujQRgVpCotDQEmB4N",
  "key45": "2Y4A6btNpDh6omwpHCvosgZEbmjhGsyo7bdSspCMab6ZWs3bYsB9KB1rKkPShf18eYWEHKZNqGsKL9V9KugsbjTK",
  "key46": "26S7UAq8BvUN1ugy5YJinJioyD7EuKaPyopD1ohcR2QPpToqV3spw5jpULvcJJkB9VoPmb7Nek3kEm4u9Ap4egHu",
  "key47": "4dXSYqPbjmNG7BozLc4SnEa5wujnoWjBGCcMLjxihLngDstRfyqjtP72s3uX8iYcQfErS2wuX2VdeHycH2uYphjp",
  "key48": "3ouCADHJyvNCKzoNE65hMcAkvYxrZdCEgotSt6Uiinh4UFExyE3k5ZdmC24fcKand6LvhswpcRmtFc8WD3pR87gG"
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
