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
    "4SxYSJBZ1eLweNVfzxLA7QraPdCYBqCvNEdvHmyYBTasZymhXRNJp1cuPcgc1ojZwa8F8Fxh2gqLtkvQ8quk23Am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qZNoGdQRG1xTVNYXoEaa3wS4PMbtZykRcnNJf2DrFfRgBJdCJMfY6ETUJhrwrM8pQwRPPq81BTaEfYXof2hbwt1",
  "key1": "vHGBd726oVETeTo9vpECgbdxNNnw45zMSSC8qLFh8B1N5gzK6QSFPr5edeNkLxLAyxnAzVzRhHbnAETFUPeWmAr",
  "key2": "4wRKTfbjm9N3WFYGGqUo79uFsyB9RGHACFKqFoe2yCsESbN5T3VQiDAxwGPy1kW5m5ZzqPujukBSVZpYxhuAaNjn",
  "key3": "33fcZQTr5egk3Ppgy1vZkjufGGdTCrA3FG3qUzkjDXf2GHY9p4bG1ijrgacBhPmZRMZjmJRGCJfrFEywu6ropJZV",
  "key4": "5wkmQFWypPkWfAxdoZRxgZxrhQwSdNYBvehg7pM1465AccK1b8Ao7UaDfJkkRRmqALyuY1zaqNuyVGosrvyVtj5i",
  "key5": "vJMFK89dbK2DTxWT7Dr25HZypCtymphpTRtVmz4x4BKpgFqJYu7FhnAF5WxSuzj6PSp7662EpvGWxjkTwVKyLdA",
  "key6": "2qEogTEN7fXgc43tyCfEWJSU3p6DXXLC9BrRn8LnBXYRzQnSrXunH2u13x6DpAyq629voKmq1mq8d68MaLS9opdS",
  "key7": "225qs9Wg8Lg5ygQyxT2s88Xx6Km1TAqi6Mp5dYoyNsHgnuHMh7LAcTfbsAmjXU91hCWgzaNyNS8AxFEY1FZD1uqC",
  "key8": "3ebvjKu3fhzFAgpBYzs8GBkPNYjd22MVMMXc2fhcBAwJm1HveBhoBh7jjDAd6h2MqFXJ4v1NEKd9kAh625uj4Pya",
  "key9": "29WUwttn7YVSxUFt1QuuUQqB7dih3yVkuToXXnB4X2x9nRqJdBTTXUvY41JUrnyku2xznBtG7rUEBKAT3RS3N9Si",
  "key10": "3ipt4vmgTGa9y9iJ7hMKfi4L2uRnh4XZbRuw89ZE3E3Ws9C76F67ntxHgHQ4r54PLUxCxixPGVpu5eZDUC6888r",
  "key11": "4dxo31XQF8vxMUvUHap4VznSjk7xyzJ9ZUZrPePRSK2UuMwNxporMAH7d8uoU259ZSUvYohcCwC1jXFZmfFWCEyX",
  "key12": "2zxEpkDWv293ph6GNKwkRXRupVLwEhbbpEHP4xaa6F8XALZMzahpUneidj5VxW85KNGF3jwfGjGpDRvS3eCzMEaJ",
  "key13": "3UG1azNkdA3QtaLN7B2WoBrh7y2KBwYs5SHZ5GkiBWko2dDNCLaytg23BSjf3UGKPjdVdW7P5Mfp1ndAEDda5PoN",
  "key14": "4hHvGRZVGrWay9t1ewoM95buReZng3ipRcc6fvacf7bieMTzwmtHcmaiatcsoKNjEEnDLtBXiE6MTwET5vgpdUaW",
  "key15": "5M5NJAh6EvTawjmx2hEstXxzxnoWDHBAgYS7JEHtUFyh9S9di7opHpKNE7abxo1s4MTjwhxgdbzQZHyBehtfxRR9",
  "key16": "58NCpG4hxwh5Fzeo8Q3EzMUUFxdDmSTZ5mM9bgL6cwMW9sNLLo5Qs1zpMZe4uTU66cq5bqGLPsgwBGPTjJnABWrZ",
  "key17": "3h7e3h349STKKs8Ugjh4BvmbFJgmsZseCHwixviaYKo7oJYQX7neg5TF6zF3LhdWVB3LMVktfbnfDniMmXBFYf2q",
  "key18": "2CPcwavL9uKnhRySgpkDt9PWKZsHFBTVzMCSCKSMAQcQbVzQzRuUQ1szLjuBbiLDf4V3b1wixBnma8FNCmXft1Er",
  "key19": "hyUVDM6Gy9gJWsMNanqjAH54bGNsHLCNFd9MNcww6aEbNh21xy1CcPNkzCtKNJ3mRh32tkeVGtjnty4LfsidaEW",
  "key20": "2tGLnVzmgwSMM6c4fekPqPPX1RqoL4UobAbdKpTYyh5B7u5wnB4VjmLx2ecbf6ya3r8yWBvkN7UmL4aRwyARiW6g",
  "key21": "66RM7LJAV1cZLiXXzCnuBZqJ2H9nxmMqxTcCLwBk3DCCEYxd93kxGFWbbPY8ho4PHS9CJRKw7qeDTrAMGJXchrmm",
  "key22": "5wh5gg4rUuh7zhuncSNEmEHVvFj8FNjgHC2yooE7w6NQfsyMajTyoU45YMc9cE4snsi6vPEkdmmN3ddLEqqEmphV",
  "key23": "uVLrzEWs7j1kS6dVBfLN79GDFqyEvwnJJmdBZy8PQ64a26Vhoq27HaHKxMQdE7vJSQXMqWm1r6d9eFanPLyEiVU",
  "key24": "3ivzkPR3UoaqCtruAqEQEoSpB1mGrKAdDuweZzsTPviF11dtZWQBL7nymwdxqCPVqiN4H5CCarfFCjWhNj9imEsM",
  "key25": "3DcaKmd44yz8op8ExdWtoYcLYFNygVtUvKfbNb69qVJFDPoFprifZaKSakoiNEd1goT1piDMtohyPZv1RxQ47Vh",
  "key26": "3L2kPDkcjnhqp3HGQu5TgWwaD8FfzobWiuHTP98Z6P1iQisSx82wcgZ3cqgXkr7wvQuQeJgqMW5RhQoD418NeF61",
  "key27": "3KPBtty7RNdEBUf5sE9LF8nuAFZnsQQyBpVosWMAvY6JpFEEuzoSqD3DoT3g9QhFYFJPLbstF1YZfmcHUyEa3BxS",
  "key28": "1KCMBq4yAQunmTF9KkRkuLRGyAFW8wBSihAuLhoD5iDwMGJ9CcwN1kksnPqNho6k5aVWv8MmtRmQgVce3MTXZaX",
  "key29": "5C5MFK2qS5e5bW3KDLtswELLRZDP2FLE1mKx17BXZKuxqYhX6TsuqTNZTmZwBAMNnyGQ5AQYuNK1PDJffyNYq17j",
  "key30": "4G3PomhfssRZ4PShZ5xZfxhhV4mhvNbci4LsLPaF4LXBWYmzpvEsxfLv1bWMtRABDUGKEsUdjEjxbiNySX1c2P6",
  "key31": "5ARq3VhBk7wJ6u1CvEp3NS21hqrLvT7JaKoL58dzNmCgD4fa2ZFm5WSxcnLcnvbJxerLXrt9Y2a8D3upukX4eHsx",
  "key32": "5XQe8eC1QSCiazVrhaLXrS7fpP534B9UWtSxdXeC3G3Sp3mdzYETvyCMVoAEMtPigQY5KSzj9SVEDmgzhoe97Wrp",
  "key33": "55F5Qhy9Qf2En5AmbNEFJbydgb8aSxFYxreTW1gySJtCLKyjLPvGToT6DgCvGYCizF49BubNVU4XCcpnhDdLpNTW",
  "key34": "2hzEsKjCXhBQ9YX82Yx5MTskF54vb5cswLKrex4MYx5zYbboEj9gFSiFCTPDTgUbTqCpTK6U2QLVMNoQTrAWgdZ4",
  "key35": "3pTkWLFnZ7DHQQZCPbdrDPStc4fgipCrnoEHqB9iYyYCTyaFnE2b1vL1gP6z8gHrCV5FnF18kfEdeTAD6MaDw1Tc",
  "key36": "5YUiyiasC5L9DqZFSTFuwhBtVBK6YfpJWYgpqbfdTtfTPzBYq7mizk8F1dWYf3pLTdWZSQMMmRBv5vpDg5bZ15ht",
  "key37": "5fGWk6PoqM5WKskBa34m4TWzdp8mNoJAErHcf4T1juwAA9q51HTrvZGbrbExnaqGvfg2f4n1pYYYs4y1qncbCK6j",
  "key38": "564FNzvZp9aneq8D8EPNdtQhz589V1qWSwvX56FfVjsRJmZhHuZSjsoXGJEqcstrLt8TvfXadHz6GJvzSP9uBpHR",
  "key39": "52ZzcnAvfTh2VvTeL36k4RBdxFuN6RiQdbY9xypk8RUbPMXMVH6RUA3Pt6j7d4KZtjYiUn2ETgSAc6pi6Cv7idi8",
  "key40": "3iEYQiLcQNPXSWBZk127FWRySP8ANerv61jmibmBBnuzNUTqcZiScT9yw11SgAZap1PnmF8vSH2T4dM3FZuQhqtu",
  "key41": "5yCHjENZjv1N2JrGneHmWpdxhNr1brFtmJKdmMJ7szSSG3cre5dq64mYi5DdD3HdEHP2B4iYWWjM3yYaqMkRMDor",
  "key42": "29eWfCLR7kKjNHv1XJyGkvbttPaX4fneRb8XDHkaopBuLgvNAq7SgvtdMtZuNTzFa7L22UJAnaaSTt7Hx2My6W4i",
  "key43": "5LtELv5RgVoQvN9TFTkte2YV1KsxGucHiZoFd4hUEiSWSH3KAEtLMop9dd6SjcHMZaYoVMUeiuqMpPKRZCb2Y3cL",
  "key44": "2BzQYF1xxBCA5gVrR6bsqDieAFtkbAf87egquFsehLYdGDqozamdPpZCx1NV4a6pDnL5K2VdugJiJwtE6sLZC9VR",
  "key45": "5Y65PuNM8PYFmazhdRq4u3LFGrLqdschRGAQMbudZbfj9SG11RNd186ESFPi62umQ7RwQmumNCTCXHxDcKndZC3b"
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
