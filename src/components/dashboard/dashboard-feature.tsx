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
    "4F4CuMosnvNQDSGX16CsqmyaQPDNmMRESqkmfBvagzuCeF6e2BR5SQ19CWYWTnfFfoWqKz6pYkHGdZpKuVDd4F3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27mBNNHv1E6gBACkebfb8oa1pYj5D1sznsoHpEFurwNCfMSq8gww5TCWMtd9oXCK1cP5dnQ3hsRyc7FJmD24qrTx",
  "key1": "2n2H6sKJRW8SkQoMioVS4CkthTs1MgHvVfJZGc5ZWhJe9H5MhhMmLuJGgmHtxLAQyipRJGFRvXUyq7AyMdWAuXxj",
  "key2": "3kkeAYQskPWhVHqkNjEW4J2w9qyMGQUzN3F4PzJRijyB8iHWFxY7L2p2CKYhe6H1JDRUrdEWcW8QcG8dnaZq45QA",
  "key3": "5sESPYtcyZonPPfHKSDQvUaThuFJun1aeKQ5tH8jy6PhYeX8G4ic8mBB32iFwnWbDCzMUkoen2sCg6r9mWaQGHRK",
  "key4": "FWzB4CSP4QULFCnNBRqMURPK8xGJ2a3EEhpR9wkKtpPuD8oEv1Bsb9EQs91ktejT89McfG7XwgJTXcyAsyTnk6p",
  "key5": "4fRabY6TtZX7qMBZ1zv4CFj3bYdP3u5dxouBVzCjLpXVvMnsQq8Xa7cbB7cUfQBrtCXVqj4FihYY7xsSFLULzBSs",
  "key6": "5B299rF9vE6itDpJNNTTAjF4ZBjm2exNdVdj2CxHeYB8u6SS5ej4J8styMBb4hMseymDGzV7SMik6oP1QT3bGTNu",
  "key7": "492NMvUyr8tQgTagVwBFARsZXV78ZSVsgD2zZ7X99BF3gZaN4SrfWUESmrQSLV6VsmxyoWTWhcAvByAEYVwbbmyJ",
  "key8": "2RBJbP5hVft2qtSsMXAik5bc2utXwZPXQ6uAVTujoZy5vbpv5Yintjh4N6KPxmkBZhq5CbXTeTbkNfnRqq3gBijC",
  "key9": "51WPvNTuXuB4NzRs89FHtQnMHY4k6osiuiSNHVA7rr4AdxsqLZuzfx1vPfcfa1968gX1bCYuEJFHbkjM8LzCKRJi",
  "key10": "2v7DMuLsP14QSzFmCsHBwXzG3cwvtERnUoWr4AVfFcfavMeML93TWCpsAkk6D556U8xLnT48n764h9gKPdSVHPpD",
  "key11": "3Q9uYq7Q8YuuFADvxBGfF1XEYpY8v8hWdshXYK7nbmd7NN1kKZ3cYwsBamX6Uo5HZLnKuJCP2hofjT65j3SS4hjP",
  "key12": "4DpqRotKWdyDb9Bp1T5p76XBbPVzi1kJQM1qhYJA9yVxZYyzKq3cjDG43CMhUtxBYFsy4TFLFiBJUeDZEGSk4y76",
  "key13": "4dTEEVFnL89hQN3jZR8fq2P1WvzNwN6Rb9wRmHMYC4jnx8ErUXdpo76xtQjhE1i2CRD3nMeVUPZHokiQwbe9Y7QY",
  "key14": "3xgjQUTkCa5QL5kPTbYtX4NHTgAtT565NEeu83eTqkCGQMFitu94VH6sZVbML1pxVnAqcTQJ4CK2WzrkiHrw6vr2",
  "key15": "35grb1pJAPtDtMdNEj9d7Y4grbGPhphpm1pCxuHVFVyKxSMTgv1Qpj7PHzMfdostnz2nzF6YFk1iNcuDHWtkUHJe",
  "key16": "4ysTiau26BfsYiRa5phmynu3ixJA3xzMFMK7hxQeNpb4kyFnSfitUmuBxNqcSuwgzCrT2tMCxy6Xwx4sL4NBQyo3",
  "key17": "2jSE3mvCXxK7kZ25yzBpuWs9ahsqFdQf1pqKTvXHwZPjxh8vAc2Ybono1LJx2TcCtfkG8HHXTHZbXUHNqte1Zbdd",
  "key18": "5FGXhr9JnBj1SBApDrnpAnSDybiX3m4w2NQTzLujPQxgqEykR2iWy1U3uzBdtQ8fwshSWgn5sCHZ6iLQky9xG2FP",
  "key19": "3zQsRgJ2EfTY1yqc8obRbswZ8FdHD5M8MEEAEcJee2PHt6Wau9gumRf1FaRGxPw2u7tUJvD29pnQWPf5nhjCGs6q",
  "key20": "3YMe3NdHwT2R4gGqtnBFNmbUYJH5TXyeWoidK93ihS3p4mFNcpJwngzKHruzSsHk5rKFQrKXiPUVbtxcMBU3aMmS",
  "key21": "58Zu7G2WTEA3i4HoRNjZUYSH6Z27tzE2ivVKFjuHfTbuVL5VcfVxkpLGY1YkszSQg9tfZzX9PHCQonikqZea1xB5",
  "key22": "57Giabaza55Hd43eSr2g7fQJsnPbZKcaL1QnFJqrqRQ132Ao6xSuz3k6bZSbzow7DGFhAGnzkcTyRhBWTnVuarv8",
  "key23": "629Na4inXUCpqQKq1gpt63ahdFc7K3CES6mgzcGMEK5hgjGv7PS7noudtCAqiBpz5rrtErZyn777EzHaiLEERFjN",
  "key24": "2Zd15Vxn3j33dgqd4dXQ287sQn72JTzpMvTDTVxfowWjYLyjibYzTnNNKJqvBGpHxRA3BaE8eScdXtQG1uCyhPka",
  "key25": "XUanek4ZhU6Ssiuo5Yy5Y6VhGjaqCh2kmo3KXUn9hT2wyR9vDU64jBiu7b33JmAs87K5jL2c9BvmfAbMrQK8nxw",
  "key26": "5pqM3UcmHUxWr3sDojij38yLkC4418bHUwVyUTMeV81JKRXmeUwnFoo6AEk262Fc36y2mJCU24nVPaNBx7CtrFMh",
  "key27": "dzidhZbraNZTXmPQV8YoASEpFU6FRhSbqJETY23hXvuwyz9pH6xfBG7VvghR3kwuxTbxYJ3buwTsSDvuecU5Mso",
  "key28": "66dtft1DPQQJDngeFC7MyYmGip4j6ATQ6QF4E7me4q5KAh5LPFFTS6T1GnTrumWULAbSShqzUV2SgFQ96bn78Dov",
  "key29": "121CoPcBkRBQ1GLnhFVUqMJr9TA6uaeJUP3PExUm1i546CEPn8pGkmhszLqXYnyd8w9Z1G538Cnucm1rKpsYPsqS",
  "key30": "cd8zMDDKSaMF8CnpC6g4WyY2keN7DDV5HenF6afFqhan2Vn21CVm1ymJATBtJ2rFQRWTEa9Ei4UaFESWh54adAU",
  "key31": "3zJM7ifiHRHXzP7azQ9ApsZ5mPQvvzPuE7nHQm5WJbDXk1sVgTKsUqhVvdjaaXMA2ULTWChGT8osBLadFFiY3Zdd",
  "key32": "5ZUbeJ2wdAueJpK1rv7s8Dr6UGT2aMjLSU819b7PbAhFXPeyPRUpxPVpY2PVp5LXwrcrV6kt1K4rHj1zXDkDBSok",
  "key33": "5LDqNd3xsGQEWR55rY51jYhQTFH2A15sc7YtWCfrEpFXbpSsDLSjC4PKTCqyjHGyej4o4Go8dcnMzs3whPXtEUjg",
  "key34": "3kx2stKavRhYMb1r8EKKzv9ExwweU1jA5snt27DYSVJQtqoqzPfrq9rgv75TQb5VDGSXcdPUpkS5X9rj4Lj6NKUC",
  "key35": "3iZcrDeDN8KCXvqLMW9g7KMe2KwkxEqQkKXuoFtzmuA1Uu5QknL9bWUkieuQnHRtmuoE8N6XbuZwud7fXFAkiTr7",
  "key36": "2kqLSjo9iru6J6rPu6thP4PD6z35BdYrEaPz9UMTM2yFJ3uLkoNNF5zwBCd8dGqX1iRcneHabpA2CtNoF5MhGsqv",
  "key37": "5cgcD4kYZP5Jo72LLLp5Sjp7tQSvoMooD8nYE1i2GghXPCzBJCh6QMYKQirDuWGZc8HEqJ1c93bkboPSL5nr48ho",
  "key38": "4e18sLuv6uLseB4FhpSpBnmjUB7VEbNkyPa4ukTGJCd4G5GQFnteX6nbajKmuY16qtCT6D18a7KCyLnZs4TfiFa7",
  "key39": "Se2S1iuBEQJaTcmXoUAKgMEEdjAydyqeguYejMWsdgE62D5H3Y4jy9ex3ZcWcpbBkBG1JZBZSsM9u9FRndDNCkC",
  "key40": "4xauY2q6gn2xLpbxkt5BUJnKvVucWFmSZwRE13PhnCQTfNL57PtoLFXM2w2x6PKzgTDhrxnj3f9sf7Bud2yPTMvo",
  "key41": "5pcvw5ArXNupV1dwi94HLJRtKb2SqJ63ad9RFH1ub46mveUSgiV5ifCTMcT9jeM9F2jGYnpAXPXaec8iR7WTaGiZ",
  "key42": "dZWFJiTMwzAXv5GMPzk6AQD9UaQ9JZkUbn7VFQMbfR35vzw7daj46uZUoqQG1sAPGhjqzfNTPW2M6qd6GDDEfV4",
  "key43": "hdT4jFczzi1AmLkGaF2UiMcomwjLNFAycG55YtikyGnNm4QbuuJ6bM7k9EwhuP1Wp2k4vH1ZtzwkEPY7Dxb5B2x",
  "key44": "53rnRLuW1QcpvzRx7ZqnCgMPTGqqNRANmX7EpirhLjew4vevz1ctFMdhehVZZmxRWKxpb2XUfyUMjBunbapG6JQa",
  "key45": "3hSE4gQYU3ja3C5NZ1pay3rkYX58Mbm8iMdTPSu55sNyowWwoLTMquuuTT7HaWAq8HYpJY62reiqWLFmXWwfsNBZ",
  "key46": "2BjFLpt2oKPsAMbFpWXSSq6G8NhZds7dStYhmzFB6Q9c4uSkT93VLdiAyDWK6AczzNr1CRf8AU2VTbS8YJMSHyZV",
  "key47": "4taV9sex8dXfZSa6MotzkKPp9L6aUd59VE2etzPy6VRbt59sN187pcsHa255kF5H751Kmukzd52G9TS6Hh3jxvX",
  "key48": "t61vzGnz1sfPkapfj1L5r3N3uh16ge4PQE4UbMLsREwMPvbTMs3SCQZN9QGwcvMn5ai8f3QETcCNXADKMQKHXCc",
  "key49": "3XqFBupG1czY78DUZxp8GMPw5tNzTW3FHDLuUWX2vvEe3q8zcrMQy3DbFf6fJen95cVEDASDvxf9MVQ3qKGnicKe"
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
