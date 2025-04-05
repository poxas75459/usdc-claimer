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
    "4dGi1Ev6kHTPwMW36kLXYQpzLvZYutTZ7xZksPDPvWARwFj7M5EXuhZeBPD4vAmeCnp6Ngj6r9L9KecYpbohNJ1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WrjzKZHLUemroyZ8MmJR8oR9dZYwTLqZZnoCzki2mvnRWjCqNFUpGU3mDCwhP4DR8RofXqbRpryexKoYhAEFfJp",
  "key1": "SGut33r9P8kCpPAEouY4hCEPCZrK3LPHRRT57mNYdzwE181shREhiU3ktTqaaUJ9qz1aQQaAKcNLy7S4yPJ36Br",
  "key2": "5vXJP48oJJ3FpCbACEFjR2QE7HeQDxtPywzk8sgvEA4esXW1szAhqLD66ZgC849NBQAuWJA7n7fDstSk9zxJRqHq",
  "key3": "5oYEKftr533dc9CKfZHKjNvPCY7P85uBXjUUB7zSkbaTpnirDfTNJ5y8gXiD9dpL4vf9LwabMXPonjkHorT3CKDb",
  "key4": "22amK9jaRbBSSLJKnLkzhBoX4Z9h9AH8zuym9kqJ9bRKivwLybBUgUAwKrvTAMzLiPgwnhrKhuETAP2xbKWMZPrE",
  "key5": "5Njfwprec3uBjQBsv1hF6jbX95D2cYiRgRCr4YFeZH3r58JDvkr2L1iZsTrxGi99XE2rbT9UvbdXNRzLmsK6jhGP",
  "key6": "yN8TCG84R4DabsKZ1KxrngxBnEVYyarnKcgxNLrjLbRwLq8ezQn9LuRGH5qYfCkaC14p2oscEZAC95nwkJgiteg",
  "key7": "4mUuhLzWdGAfgccevBYhP2aJBC5fW6Wj9193K3T8NemyPByfSdBARyNhqm24qaWLmMvoBEY3kSeECVtP25jXFqD5",
  "key8": "4WjMi3a38GajCMikSAiLeTDeo1gZrh9JRqjsWv1sg23ArPSf959n8NCdTwu3yvudWX73nygsDw2nPFNrHo17xnTM",
  "key9": "2ndBZWcboPerHbBkz9KJtUZoByXCPvprDbrmaBWz9S8fJT7TSdumu711anRoHXjhyuWMbf14h8R9EfEB56pR6CaB",
  "key10": "5wb8YXzA1VBjcvRSroGvMwR7yVgh318Pi3M3UoDog7HyLVrEnV53w5Ewuqw82BfvoFN57qDr4aBUBTZrtfWvAfX4",
  "key11": "4v2vRTCZe6FD7XCaxdpdSW6Xq55S7WV23nr2mTTEk8nGyFHVxWXfxB69DwXxqwfAmTfy3c65FsveNEZnS8VoUnRa",
  "key12": "TJaPzk7euFjnEPzY9BqBYa953o2AbNpgaeBxevXxeF1r6ru2z5rUBU9fEyAiVbtaMAXDtk6RtWVzq23DPGrbCNH",
  "key13": "3afmdkTc4xUhjbZ8RSPbpv1Ge7qMrFmdXcf1Le7ic4FvY2vQaDENeCfwqxemwJWvrnwqtDMXka1dPBNsPKQNbAFm",
  "key14": "3eG8SrVEGRYhg4bJu4KRosyWG2utzgLzSUJPeopjyv7uLZRSdbMmgDxXxEKgajfL6ZwAymZFMWYVHzJ1JnGNDdig",
  "key15": "3un3sZ8rqSsZvzCQp83GW6ShEszbojyEEV3aSQd9B3oezXP9g3E1D7reLh7rmNYTa3VXCXQhM19wCq7nnwFcq9eh",
  "key16": "3UhFmFjfTbxAJU72vqjAj2NLNNiqAerYQ3S7yr7BFwqoPNZfCY5uupHQRGaPXgj8S8wMUEkNYwmYpBeqB1fNePPK",
  "key17": "41zb1PJo8vGFUZPnt9cEzJ485rXjwVcVPWFYYRiXbgC6zjTUP7GYbYj3FzvQvYBb3U49ymrbzW5aMRe5azVnLtin",
  "key18": "29yveDJJQRCGGkKBMrF9BGMDJEBXRqHiYvRQABpdUaH9gJdtZBz9C5AG1ZroznwhAxRf8bzq33hPVpmRVSSsxx2o",
  "key19": "sya3BBwGJzJng7ZcTBDF1EezvktA3sKfHAsFULFeaC4Uwj7Mu95CBQQq2awdjTCw1nXgM3rk9xEny2wzRT5J3Kw",
  "key20": "5wRV4BAF1Zgr82fcsTiPJe23f7Z9LJsFcatr4cDH8eVZo1S6czz7oKQJHHub7dh637LjtkRm5ddEfKMStDhEMSi2",
  "key21": "24hT5oLzL8yR8GNb2eBL6HU3X4icGZ6frNCbdgzgD8Tajmipr6DtXPcyPMXB6a1MwiBziYpMvBAPq3ruTMUCgytn",
  "key22": "RgxgxybzC5SNXd87vof72chNF7UnZLgXfoXCMGgHiPt7QAXPirGaygFHX3dhYiq2dRrqHx747K4tcKNMVBDU9Ue",
  "key23": "58wfGUrmdBNjqVZ1iLVUZKAGdkjrJ46ENRjSZa9SXdMx1xteaQi79deU3LHaCU6j3ZZvTyapug6wWyS3675w65bg",
  "key24": "4hGzy7LiZd977WviZqSNT8BpjWhaJxQoxGZqc4rSujVoMhTq9hhsiq4VVWToNrNZx3yYtDSF7T4JGnSXfKGnaRhd",
  "key25": "5jC9Nmd7QkfDiTxMkyrDL9VN437CSmK3y1pojPGn8Tgq3n1cyfhJr3QSPjb5n29ZZgPY5JBk4Q9vbNpQHhg5HQbJ",
  "key26": "3y4e7kp2zVeGaUZMsBsQG1sdiKoJZ3SxNw5CXExLYo8nwiYaKtzeGhpY4hSFh6uwRn4dfSmw6YtrcbCGsurNiEXH",
  "key27": "4ZXskbaY3oLdoonWA4EQWi76P9qUEQnhrnwV6xh3NwLBeWuWHfdPqLytn9E5gMRJb32WNPauYX3pAShBWUF5YTJ5",
  "key28": "MKSgxpkt7XJGVRcZNqRVvkgQMQim8sD6eXZgJYbtSzF24SwWvc1DTboUCyyYNaWEBXaG2sRfMzjTjUXGVnsx7Tj",
  "key29": "58RKmZfReUGojBAj93od5gh7iogSNptaf36Qtwbei3EPjDMShgRbZGGmiKKXrC1pkLfqLn44JjYskbYMUNnQRAcQ",
  "key30": "NKoUjrR89am17nkBzkVPhQgcUoyNmptx1gESbLKrSzxJvnmts419Htt6hj9JRoKEES1JgFX1qVJRRthJFAVNThM",
  "key31": "3JVKbCBpQ9W4BdFqmMnQrnBaZtLQhBZD3CZTQCN6RX2fCYhGeiXs7aDbPwBZvdnubKtzkhndDg6hyoPE8Ep5wF5s",
  "key32": "2M3G5QPegA2d4VhfhUeW1PB48ECogB5ydtnQuTMAibpde2VBwhpnCwbxxV1a1wmirhoUcwHvQun49k9ijSEwzjYR",
  "key33": "btci4auEF9q4Tyk52F6JXaQPea7t5msiV8NmrCcx5Udtj1X53tcxQyUjcRmZSFXB9VnhFJZ3QtetxyhZFwzbNGE",
  "key34": "2kVgcHG3NcY73nwfCwrMDf5SgjV72ktCnt5P2cQ6y9TGCjPcrURoHRrDKzRW1EGqoWqUdREdKCkGfpJ2D7PLVZ8j",
  "key35": "4tNuzxbHZuGK41E6ZMw2NTYJieY5yevfHvtoCC3ZuqBMqGEfL8YciLpz3pkKdhT6CuyZzke4PcpcFCrKSNgtetCK",
  "key36": "HGfXa6EzzfCRVNbgXd5WjFgV4jyteQu4MekKxedgMRJ41cREMiqXuCxYYLYjx29xeW14dfrAXgt8fmxF9BcxrSe",
  "key37": "W7735GnCCZD8YLuHxccc5Jt6d5tuHB9EbMDtAwyNAKbz1kvxVQNQgG32xi4LVYpniqUm4RWawXG3Y58Z7iffoUw",
  "key38": "zF2WN2sf2KGqP8pGhtTnyeoU5LcBcTUcxYma8ADTcLDVhW9exeAWppekn1XXXVFQGzznpy5NFEuPqbMvnUrt92V",
  "key39": "3yCBi15r6h3BxBk7rgdKLvPShWsqzw8LdZmtDxMvRBZeBwayh6CV3NbceoN8Xkz2EwRTW4xpfdGGF8TgQvheEgM7",
  "key40": "4HwzYhH6sYprB6JJ9kMySPFr4zTiGxRKCj1Mx5ySMhUYQ4VE1xZGMLcE2D5cbktuJc2YvNQKfeKSfCPdBgaQ3eA8",
  "key41": "3Pj9BJJgG5eQj4ZMg7py6KWzdLhjiMw9gBojjyHBAGVp6ooYu75fLBuCCwF6RBktH1URzW7Hu5B2Bx2WqwRh7VMm",
  "key42": "45znCojtaw79MwGNR73tH33nPjR6QEStygPG6LUZ8t6Kzdx5tFsfh1te636WJFABykUYejRPK1NzsHoEp6c1sE3k",
  "key43": "3M5MzvtTukJoem6Pncn9cn3nMPgXbeLdZvZjZ2rD1W7NbMfRLkHx2JBhsPhAYMgtFs48xHWjMBLDxh878tNAjJtP",
  "key44": "2hbp3gDxSPTXxEMhjmJSRB8E1yx6DqqM42r3LJBKwwckpX5j4aYTnGfE997kPVExsDWr4K661YJyQnto41Wrg5dE",
  "key45": "3KEtWhPsqkLei9xSC3pttuRQTRgtdyVds2MNqRjpHfZkecVZRfjqnQ8sfLPrYPuQGu5PZZiP5gEBfwLeUEGAdRFz",
  "key46": "39poXLa7myd2iBspx39qiUwgn7itQKdTB1Bhys2bGLyNcjhJUypYf7VdGpNnwuABqnqrFPWHuRzHtkVv18SLEhtG",
  "key47": "5JiUnF8WmToiRzTwtv9bn5FMXD56rQSmserB4cVhgybtD3ZayqoSFt8B7631tn1kVo81NCyq1PCw5aHeQRuUVJRU"
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
