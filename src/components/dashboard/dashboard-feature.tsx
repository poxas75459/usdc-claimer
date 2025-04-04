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
    "3sv8PeU1HB5kyqdhg4TzyFKka8wchzMZ8U6RZQpCjoDYcQuAYQoiPQVqVa31UqYraontWraopyoC8FK2sq5vBG65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z1Naox619Fm6x4LWdyJSjsYGkP8PDCAFegehjiGxthCRPGtKmhW1SnM9EP7uB73tCT6E4WViaNYp865reTeehvv",
  "key1": "3r7pVDyAmfVVMbgiaxRDRv7FVyrGmbxkoH6CfgV4fo7VrgfGLT85GBHNLeVVe69myTYrwdqGbh3jL8YzT8BrALab",
  "key2": "sDfs7YBQdRL5U84BVHAnnnT77R6JcRntmHBB2xe7jz8YD3dUYZXiexs5JoppSfyNDtC6LLttFHtU9S9Pmti1XZw",
  "key3": "3id6Lwt3chmZu243STAvSNepnNYf8MSX7jTekrHjUtZABLe9ESppQgVLpSQRxAdKu7p8zfSNnB2DLFrBwMH83m5X",
  "key4": "5aAZWKTiX7fEucH1pYVMQqvn1LNZKWqz6BFdupUHCZ3wLF1P72McFQo7juAqEtsLLYHRrdJPgHLs4qePRCQMpSbQ",
  "key5": "vwALi6ozqTeEZwnHjqmBo96vg61iFVDupetX6ve9QnoKwafALRwfUGGk2v83X7aTK4cHaRTg98CEU1UedTRZQd3",
  "key6": "49aMBXgX7nLpvyse6GnmZFxgRdYiQqU98SACPuqJB8zr2L9CmLNLZNSgUNzNnxvL9RPcw3xF8XMWnD8ZWCGyg8DX",
  "key7": "5e9zwf5e4APbkgAjjZhYrZg5SmAx45GUZfKNPpxyp5izmBW6B998dPk6mgh4ueZ3iNogACg2bBcDUxR1gjnPm3UK",
  "key8": "5Tje2Lv4TinkQKGAJM9T1do97WxSnXwQCRGkDNHa9MefrRBHFxKTjTBFnCkt3D7nM7s4os3QibZNyYUxrH9Cb59y",
  "key9": "2sm77g6iyfmZBNKJb1rT25sD5iSjkHKvbEZjBGwJap7rKJKqe2V2LGpNrimYjVgCAp5TqRLq78Ga4DuAE1b87SKg",
  "key10": "3fFftTRGTWRQKkpxTBvVRzfkpWzP3wyp74qV2c9DtSNimTrZnK24cxzXGA4q9GKVE3AzVZpRvXbd4QpAGjhBfmRR",
  "key11": "cxgjmEJmUbmgbvWWTvMSCEfUyfJwE57NomXHStUqsag2mCndgXeh4Dn6xmox3v8Z1QA62XvEbvz3zCK5aBxFjrR",
  "key12": "2Gc2ckhQvZh8pLCRQkbuaQcLCRWLQYnkEbRWXsih33XxryyWqsw49hjQqA6vug5M9NVm6WHsibPKobq3eCqB8SjM",
  "key13": "4HuXtMJAqqsK1wx1Vp8WAaoBndeeCjJV2P9ffTqhtLZMaGVajfE1tuKZcNFGrh5Cf2jeNKqNns31SqHej7t2qpaN",
  "key14": "3HMkFv1QHtuWdmiTLrcy47HBDKnqPr8KapmvMkaP6PcQ2rzxjQY9mKk6q7sygUEnibbppCVT2hXCWuaHBQLLCg1L",
  "key15": "2STi3XA2etVmvUVGyesHMvf3rgZ9opE3nuLzfqvvEMc4TDWCoGWenMVY51uRn9xoyBiJNYqaXDAz7Ne79Ra6adXN",
  "key16": "37wwTiD5Ctu2ivFEVnxFqGZUhEKcfeDUBAprtYSHif1Ypbx1qL7cGRRiFV9CoX1DkWswxXe3QUFLBEY5UBU8e46k",
  "key17": "366FgVLCBPvENUXjEz6ppkGW2xnyRkZupAyy93RPnsJoTLGy7ugU5wtSNzZUKy5ngag35xnFjUKb7tt5UZU6TNWY",
  "key18": "55oSZufGXkkoBPwbHcFUrLpLxpCop2enqrWViomofRBvhyCzoDF6nP9jCA2zxdKeSMTWDUp1F7A2s1c2ehBehEEK",
  "key19": "S1sFVbNjMdJxNjWr8rEToA9vRp78W53icgPzSgs7wKDfHnPYqSXXJ4ofbi7A5Z5rdewvWkL7oNy1kJG2ypPK8no",
  "key20": "4Xdq6gfSkGNR2gnHBJBvMCe55XR5zYmVgugdpeTxzoZSChBU9uVHdC1N7HYntJfFrLboovnVLMKnMJ5BkqSG9G6J",
  "key21": "3JvdP8EX71JXBYJGjjv1kD6Fq6GzEuFyVFiqSP6nPqzoQtbTUehmMdaousTG9GzAbWxFuZhVmBG6MyAjcLtnMkCb",
  "key22": "3ppTB3UCtSnBvetSCt2F8xBg5qtWvLu2CeoMuSiLTJDAx8cgg3kha1pqJDfAvUiKNMyh7jbUtKjYAhNpPov9jvaB",
  "key23": "3Ehsj7JUAJMENQMoSZo3syGkz8S5QrYb2ro3yCRoCrSxXufTLhtWwbs2ZDW2KKNLtWsKdSP2pKWGyGX9iTWYD4Ep",
  "key24": "4erzn9ZBBSDapEJPFAkPuu7KAE7bDFZkp98qhwwgfaDddjcRz1d1fDz4icvME9FKMbymoaohfWPCp47KJ6FWT7gu",
  "key25": "2BsBjJBJu4v4QuuGgHP8EtrVRwy359iqnx3qtAmr6qoXMMpeGopgoBpNgN6GqeFVWJ3ab52hsnUxX3XSmwBwDPJz",
  "key26": "4xVm9qL2fTemgTM9Q11jzqahK6iLbC5mM38YnDj1Zi4RffELmaEW8cpVSy2XnbGbN1a85Bn16ztPeGDYkmj1F2W9",
  "key27": "4ajvqbouE8JsGrVX7G6poR7qbx1Q4etuNH2CVsDAxRzrCktywdWLhx4FD8cBkWoBiHiBwDebUhgbNeX5QBVzWdt6",
  "key28": "3UTugGQtY9RVBdFj7rQaD2wJuh2gQsGCjBNVX8PgYDWRt2MZVp355XYU8hDMx9X4vSuo55SBYeSwuEBPyFBh5mc6",
  "key29": "4PX537YS2o98P75tZMinJZLUfoqD2z9g6kMdSDri584WZvE6su34KATvq1JsfBWMZUptDkrGUUsPvczAT3eQESzu",
  "key30": "622V3RquWMj7gT55oDWyhevx4QEruL8ChSa5wptbynD551WgtdL759WmqLLbaVZWCJ9qiGmMkKCjR9BgourjdLsc",
  "key31": "3fQkZwGBsBxV1gRyirLM1MxVouEEuPVJtjKny7Hc7gKj6DWDgYu1j1aQ2vPtud1xjZfXNoxcEJJrE9tusEfeQeqv",
  "key32": "23qU4m4dpsB4e2NNA5ELtwY9FHnbwrnabPtsEaNmfzvGJKgAqZBaXnEgPDqFdnuQnvCoYU4z2bkcpNYHbBoQRfrf",
  "key33": "fLkMqaNx9pKdhCU6oHLTfm3KdGNFAAWCexk3Wk1jUVTkiBDdtv4s8drSL46AX7PZwY4fAcmqLwsuoFuYHeDeAMB",
  "key34": "34xhQts5jBXr5iRjbbVfVqzPwzTJakFvKj9RreGqPtRLKvqNvoGnoSkY3F5JCUtQzqin3JTHzinGCaXFUeaoaurv",
  "key35": "5fHwftHXeRB9G3SAFWhm4VKM54fhGiyMsvyfubzHmZGthGzJa3tmr2PbAmm4kJAsqgx8CnaQNr1kTxFob7hhQdM",
  "key36": "31nRNM2ZYuSevewCnMTCpjuot14ixUiNGYvwGokD1HneEJZGs8w7ULfKDHDey9UJmFUWmR2iny88gnGbHzrg3za4",
  "key37": "62GfH1SvQeQZuYxb5cd9S5wf42y5j5dS5M8TpnTMQTBSuDnRxt4PZL17iGBU8XY5796M42R5No7NxxZZoYeKHVRb",
  "key38": "32RCsvzzd7PMWZr5Yg5TSMsVDv7YM8S98LcZNfGvnqfE69ysoDeb3Bu9dZFjrmkftJ5xS5P3Y6a5ZQAEEVmdxUX6",
  "key39": "3amNymHwStevTkQsivvYtZrtgWczQrZSmT8HnchkQUzL4XTWyW3puKE4jTcDjgKxSQMAN3Vo9vDFbLHVUt2TrdmV",
  "key40": "xgmdNRqUjmyeezbWkP7BqZTVi9gWgDPehf2jD29KJEMNGtBfyytLFDcmbxkYoCnkmkLSYBKn53tHY3FffUkwhci",
  "key41": "2p1eNDArJuRFh7kFd1WbiDtaDwBmzu3cnS8ro1D36jdxTnrwafo4G2KiDCVZxnEPoS9ThoqiEYLv86Q8t5GmpUDS",
  "key42": "4rWJ1kjQm7mhzwxVwdCX1vDa6UZzd1cXHtVAgvEQm49PkYDyUmKRNh8eiAh5VeGDZf7egqNtAHbZFPkVj6CPoDvr",
  "key43": "5AgzjzcqmARAYxmeeNivJGTf4uyFUtYy64YU91z5tKgM5pb5skYWibQaPABzoxecSEahyggq7LZfxE88k1CRe6fz",
  "key44": "5aTrbkePhogsrzNXKsXkFku1SU6rD96iSgLKcDfKdXYWeyhnZ6TKmW84UiA7BmP6WG5WH4v1ESoHL2Z96RqyTajF",
  "key45": "5yca1crXkQ6GD6o1qQEraYWBuaeGaq9ntT6Ysxyb1F1H1w5kgCzG2NNcapnMzG44hmg3wZDP43Sxmte9pshMt5oM",
  "key46": "4KCjTK9JqfQUBMqU1CEecizJbb1rd6Y9NLaarUgej3D66979FkxrLnf7tT2qAUqA3y7YdamH1iCpoMbgS5JQ42pm",
  "key47": "2soik8QChvnu3RKkLN66M47UsPBu5L23PVeCFExdW236eq9wfq3Aw9WhmXqzpafqpqgQhhgxVeYGYVCdAB8dFVb5",
  "key48": "52CWDXCAqnQNV9vyyL2UUNrAdivrLUz9fDrTGEZmwov3fHK7rd16QnwHGTeGXzFX1xckFAwjbE39ZcxX6xDZPJdf"
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
