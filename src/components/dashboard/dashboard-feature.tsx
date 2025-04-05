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
    "65QPma9w69NQFdnuzxX4xhG3p7RLZUxxX8EgJufJfmCXP1A1A3KyQwgbFcJ9y4fvRWGvhP4NhuefjmXVJANxn9UD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31uigiqQeSWqDwd6rytrqZ4oMrCPMpvjzf6FbnzCHGxX4sZ8jfMS9yYq8SydGFaNbhXL1SbMBvNWcdcAz8Wtm23Q",
  "key1": "5drfgor2NEAAhw3L6Luj6Aea5yuYa6sPJXc2SoruXRvJ5Le8HtPdx1c4d8VAWvShBN1JKM3fRBFoNh2sHiKj5g2q",
  "key2": "kfwyYhpkdTvGXviuvAZAzA4NcnWpooCbv22A5V1HgHacgSFs7XiLKE3jku29oTyMSZGgPFgNbVUb229ubxnZvos",
  "key3": "5zXoj5BA48gj4T4P8XZ2L9riNKLjmkmdLtEF4vT2JMhUnkGr3wz3TQR8yCQT1XajN7Xg8zgW7P6sgij4DcPoLK6Q",
  "key4": "5Xe5QDUj23b86nNJTv4n8a9DDxZBWnwZi3u5G4dyZtifW8us3f8neXH9d94TxLWmui92QnYFAywUrmvfjX2XqByD",
  "key5": "5gU6pa473LxgRAduaRbSUYejQKj1Vx7Y55oMnvHxdbX6tQNTwZcMn4ZiqrrwTF2NrZrFYn2LjE9odCTP4Y8CDYss",
  "key6": "5ArB1WyjYxHFhjGNuXDQYTNy6MthjfbbLAynJnT5g2d1Vpo4BCmBTgo1hhpAedAKd2r7sRArh4gZGNM9rZ5P8pvM",
  "key7": "4QPCPPLniR7doXGPKfoCdsRPBnt3rKm4nSs3fVSwrh7CL4JhTYbkrB3KRrHD4jBaEK4TH38q8rg8r5KScQZcPs1D",
  "key8": "2cKhEotzuaT7hNL3uYmYxTbyEdm8r39onB4uTTJEv9nFWcGgMeTgia3eZRXJWJCzFinub8RDbpXL4g9yBnkM9gPo",
  "key9": "5SeL3235GvCkjNRdKtDkTz2pfCPHFVaUeoWUQLgg5gyY2TdgkRvDkrbZ45871wVwoy59rwv5ttMdK4iTR7jbFz9k",
  "key10": "5G9MUfoEHy4yMgRbQji4SNsdSdGrbadkw7JAS43J67PA1eebCnfWSDXUZmqtSa7GA1VFkizjDj1rVPKVryh87PdM",
  "key11": "4hjv4tPBGSQJra2pKCkb6BjfA3mDGHPwZ1eHE9zgUCQnj9ptaAk1L8d6MWgFLp75NhepKqge25TRbJ4F2zmupvdG",
  "key12": "5WPMnA4zxmhMdHpfn8V1RnUtQyrG2SMtNjeYHyCysLogbTkpCWnqdaZ2PzQMHcwBQUNmwcNJ4jrKRvSKY4WVVYzS",
  "key13": "khzgGeDUJFuVytW6CFd1rs2TiLBBPyxPfQEgmNSfiZoLQJrd1TvngFwfiCpQGAWBzBZ4H8CE7r5MKSiV84YLvoz",
  "key14": "2dfqwzqsfQdP16LzUGXD4Ughj9GqxWtaeBDZJ1gCsGXP4BErKUskWfmASujB6sTRYW6BPMoZag4YPTkzi22iKFVm",
  "key15": "2U3urdx4DW5XURK4vsmyRnbsFXHLfzjA2n1mRHo3xS5piBc6Ji7292xjfNFpyEoRXtSw8WDsuqTHLEXYKmQJCaXN",
  "key16": "dWSCfP6scG6Rh54bvsyyBqgL18vtFx2NmCt1hDehTqfn7S6GGeSgqgnQfz6Q6u3cw2Gnbpb3TpAjzh3ffh25Rkc",
  "key17": "3p9MJjbKXEKNFgauMdpiQKBYk4eXrH5YFRG1ovBwWeLUVD4F42hT5xhZ5W11DT13VJorupHEXmxj3by3jEcuq2Us",
  "key18": "3mCyqeYfeBLqY69GEiY6PEiTXsafKFQNeG3aKvWxSwHMPU4JRUqFQRCz9FGxbUH4W5iPNr2opDwANE7FJiWPTqNZ",
  "key19": "4qxYTWDiSMMuJVkPwnQQZxRqQSithJreBHKZMwpaS9xobgRj8278rurkVQvgku4isiHRmFLoGYbuTw1nUovN8efp",
  "key20": "4ciWnuyZH85nhKP9T5Vd8uHViMShpciFTQo5Zc377VLUUyYTn2WngzzAvswi3i4y59GB8M435hvmgxPFoqHBPqSY",
  "key21": "2NVGpvHCujQC5jTG4FD98Kkmcj17Fh31hexF6LSP2QDoLGhSo6W9P2ZdHBxkUPScu7uxK3B35NwS27hBjddJNcpW",
  "key22": "3EngquLw8ZsxhvigAHTYufo95DadCigWg1FUTHqaqsRc1GBNng5rEyGCJpcemRLxS4DeS31jGTeJagTLrgZHmPFP",
  "key23": "23ZorFsKGGQK3Ldh5xsRQaqPA81e84JSGY6rAKxq6Nm8HiZfLKL9u6LUxMxv8Stp3XcLbXAGTm73A3f8Q21LwFPH",
  "key24": "2iXLaQqj1hs7VnRvdwMZbMxbFEgdqiiJ9fHnNzohFxgqeTB1PkX5184emYt7fcXx9BSHcMcrTFpbmJWDwCa7dKtF",
  "key25": "2UFC1x2K4UYVzrkXv8J5uq24KKzphsZX4GKTPLMxUAxjGVmi6VG1vVGx8btTs7VgUZPtASZanB8mrV1mBPabytuZ",
  "key26": "3sTiUrvDPYKbySvy2hmVtFwyTwxmqJgg53hX2o8fLkNAphsNhLNn5EC2JaqeB52B2u4VHrfbthnJrca7QbTC6mvn",
  "key27": "V9UNPYi9JrX46c6oKdXyYvfkg8Fu2Kx9pvzktu8kVq2DYbtpYTAxPbwCsSYt9HvUqfHiCBwxrcv8Zb9UJtFVE1U",
  "key28": "2rTxACmaTfEQPRGaFAmcPbZAmywKLACPQXsMJmbanmrRoaZ4VjFVrmHANPQLEgR7DwBq1hQhJTrfvTicTnXk42H7",
  "key29": "4rMsXS8wiB3NmF68b3kYs2MMHnR26NU87GkKTh8cVyZL8BT2x1ftDYSCDjWpEgAQsoY1giXDkP4JTw9cL9SpRWEE",
  "key30": "2FC9JiKWYFr3mUen5N6TNEbc3ArdzrSEpN69VzEKZKrw2EapuSsP9d61XorvGDmntzzSt6geAjFFmJmpbYGRpTEi",
  "key31": "j7c5BKtg9vbR2WBXWg3i3N9D4VoYJFE7jtuvwoHRgj65aurzPcDpndx2aPfGA56v1cwj3msHB6uUG6XXPoupE2i",
  "key32": "44ttWVyE7ErDM617ZcjbUVKT4dHhVwKgqZvV2gJuFKe2Y7RBSNPKfK7hycgcqjo2EA3u4KGdd5bDMfmF7Ym4pg7i",
  "key33": "516b11es258Vy2Abu9bWirUDq4hAvRD4LCZS41hFALdsUHwYiGEnjWmY9kiHwJd3KUG4GBpGQL4mmnWLFJapj2WS",
  "key34": "21MK48kbcbbmsQFeNTydwv8nwXAUwA9EYJXNpRwPFE3URvJL4ExByitPE8GZgksHLmgnSB2jxxXuQnmLDJgR3WMU",
  "key35": "5gJzvivbuqP28dTqsygcHdnUheTzkGKkMjF62FyTZHYATJ8MLHvYrFg1JzCyjAoo3jVniC5egGZL6BuywQ8TmhPQ",
  "key36": "4oW6KPYpro2AjdXuLFABW4rSjx96CD2VkEhoDAMmnPSWA6PT6uLT4FnZbXNLMNGU4FhzACXvuoMDJivWGHtAD2of",
  "key37": "3yLvvmEBXwCds3ynjCriwDKsD7rYGaW62tHyzLX31g7q2q3jBrNCftKq89sYtmEk4S4jQ6Zuk7iF6Bhvs6N9dQPa",
  "key38": "613bT39TKB4u9fJEFwh9s7paDXm5CczELRW7X8Fs5EPL143wMqdHt1cgNzyp5YqNhATwL3hiMas3Jmx25nLiyFCs",
  "key39": "53uXgDXMgGi5fkmtVKo3NNN86JfvyqFc8B34kRUnDpNQ5uUK1zo79sxCVZn2ctJLtokXZxiqQQayHKg2ZJdb1RVT",
  "key40": "3WwsvwDrPP5ZCS9CupocENAHzSjC7L9JTP8S9KqBtYujuPHgLm15vJQTTHHkXrDBDzXLWosUArWFzpb5BJ3Y5ckb",
  "key41": "2FYuqYGBDFRgEETfFJa7B3e8GA4dcMKTgGXERnmhPfmv1miUvmqXZPfdJE2fDYa3KRZRCWQysBNQT8aN4q3iRUuz",
  "key42": "5oseqxgqxoH3KhnZqFYi7R8YPgbgdMTQvt9YgFizkfUuBi1Ge942ovX83d2jEWe8PDWX2578wczVo6rpuJhW99Kc",
  "key43": "3PUeonhAj6ZRyUntzwQu57SesZ3DBQF4dtqegbbUiDYNYDEA1h22uv9wboXisXEmCwr4HwgmbCnFLmLuPbMYXQ5T",
  "key44": "5zkunRA9pFF1y3CRrPe8nt3Sk5e5yZdnbxJk9vBAionnt7ax9HScYsYdn62uv9gNaXoCTk26ZAWFH8oPnknMBZkR",
  "key45": "2FHZW8xx5nfpuHHA2imR9mnRB9S5fuNFRSerNoyHXR3zaKaoUjEpSkkaUpbYiWSNJoSM928ZMLVSVYKsW2BUNEVZ"
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
