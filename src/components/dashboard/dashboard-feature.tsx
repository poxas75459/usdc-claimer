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
    "485cuyN4YYVxHEDfHwT6CutEF35ut5DGKGqzobdNzvsq39bvuKTcPAXXeYwNnFVhv8PXXb3UDKb3DxpKu9suxMSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "usgZVpVPQSofBNzNpeqEgL4wTJogUKpBQEi8KFFmLVoNJQX1CCrcZemYXMv58CZ9o1uL83LU9CkUymn5UNMQU7V",
  "key1": "5dpgoZsToLLHm9N3smecd5qScLTijZo8hQYt3qNikDH7tpQLNGEYfG5QKGPQCovsJkPKocGGRwE132bE5tBTPjhC",
  "key2": "2LNYLdJPj9QaRUvpftbspc2LXRw7wJg5TatsWLeLhTswkyMovPxcDJN6cjqLdZLDwetCLEuarUeVZFS3Y933myJQ",
  "key3": "2xVCmZGqhiyvZoVD5dRH6uDcGeYhdJN4iwSygVna5zaFfeKphRAvKD53bHubwd5LZy9AC9wQxirQCSo1noHudWLV",
  "key4": "5WFhLXqYXSW1fNbq4kut3MCXccreKno1C2u2dPYisH3KH93a6hMQcJb2pQ3YNJuKr1xMedcJfUwZNqNS2WAFGDJf",
  "key5": "39vopVgEker3Ja56pT4JpxMSPf3fS8LeDiMs6AuoVGcdXQ7TwWB86RXyioDBwGTRFYZBwCNSPsQVu2oTMVQ4sHfF",
  "key6": "2ZUVdmVGCGCyYiSPFrBffUBwnv77yvFRTqFp9RF9u2mx7FLHUcXoV79oKTFZCByv3gckQhZeem5MUM31nFcMHjSP",
  "key7": "4WDeHGDvD49pt51wjJTZEywCbYgypPTV13P8kzavr6FR4feBsAKp4WAd3gqHCYkeeoktn7J5yyuNmWPrZctgjH2d",
  "key8": "5sT6vSaDeCRmAGzXM4UfwmjAFwDK4GmhvFNbpSnXNzUkrUHbW8kd2tFJuRbUvRtbzVjhJQfHVzN2L4m1QLJ2cSPS",
  "key9": "3P7Rkc1H5KHNp3XPriL95HXLh2PXGU3toDt2XSnBU6ESMEw8FwfSeChh3aVRaw6jsHb5wErCpS5gwabYXhs8m7Rk",
  "key10": "3txYocorVd9bRoYpGwvucXvcuDqMpvfB7qBduMGspfXE7BYbNsRfktQtCPb7TBHKAGw68SDrVAmx1DojDfWSe9jT",
  "key11": "4KDuFpjC3LwCjLmJr6YPnN7GK1rd1isgT6o4DXT6LqG9oebzYjaANipG9aQt2tGc1SA4unuBzLt4zeE5WzzuwSiC",
  "key12": "R7s6Dxo9EfG3HYhQsqmUrRjrbQgKXkAccnzHdvDJio7Q9rSYnF2XjJJT5MoFNKYd56AzxgoCeexgiAw8TXTRnud",
  "key13": "YstjkeBPCvB6QHeoMHzt1jV9FZ1equEYimXnBMXURPHCK634Uv85MzRZNWoGvfCojsvmHchwgeJvFPgR5W9V1Ze",
  "key14": "2bxXVJn5Udc6PjeAaaftCEvUgxkVGCrfUUeEb9gbKRR9WkCotc7vn9J7YyQPCn4HzZp3wMGjPLinuH6FicGKA693",
  "key15": "316tnjNJ3WmbR9rF1bzGEkbZBCpHVosrU1nmSpnuwcjKzDRpEt348FAWrQMw3wW6JwheYVAECRDeP8XDgfT9DtiS",
  "key16": "659fQPjYwBaq54WXUaRejCvJKh7yngWKzj3FCPK3bQTGy2AiqkLTgZVV1x5tqX84KY4KSihJJPWynoX6usrZQLB2",
  "key17": "491L1JTC3z3KB3AHezqgsiQikBiM8tPEmVC6yYuJbPzGxq3ju7GecmSpUR2JXmcUwDxzuv5cSfM38aE4KzVUPddK",
  "key18": "4d8ybxGBLr2j5r9fH19KEg9v629gNPwLffAAC87j8b4Q2kdFryBYxLWyjmAAaCp3aH8DU6VYezPXQHCBcmCURBns",
  "key19": "42S1YMQs4Xbbn1bBQGHbfeqTJbkfMS8pYhb2zFCAJnShXtK6ADFtPx8D2ERmuxBkRSwY598FowoxsqCmQFDHs1w2",
  "key20": "31rRwyinjeyp2sPHqDRXegEAC3cbPVeSJYf3bEbDoJzkXnHjy1WWJhkUApAjCbns2LBUzZ4Cs6HUP1wgWRmvTbuy",
  "key21": "67cL1yyVA2rUtNfetmzYeBRqnFvAbuJ3pVn4WvcB6KndQCegN9QxMzt9sS3Rwzxfkdg86VbSxSqQNgxX1dZXzDXa",
  "key22": "3zqvTh9F2nph3NnY6EHCitufo1XNhwS7BcqeBHxpMRpjCsfRL1VwFmZVtwNBDesitb6CQ4jSv2nWWPQy9yXrkA44",
  "key23": "4uNxVVXjUvU3hyFYxwbax56W2eVeXKiBd6g6WXsiUNDVJM5Km7UQnNgH4PQjoj3dRVoTGdfTxBRWDVZLKE8tNcAP",
  "key24": "56rDu3uFFMxn2Pau1JjH7GipvZfWq3SSictUUqJ7pAz42Srj3ZdvaVZYnhtZamX3F7dSer8FTPtmQi8Uiwh3zAMv",
  "key25": "SUVjctCbE9bNau4mop5ZwReTKzFq7gxuy9VLC4JpkSUqRQXJ7UJtUvWgXQLNW1mgMwgV1hUA6fUaYBNhRYr97XW",
  "key26": "3SwrEXqd84atpTvfG5Goq2DKFVJtiQ5X2PjDbz8JRL7nUppr2ayFXWCcTz8UcGay4aiqD3qWVFxTkoqzmDh6n6ik",
  "key27": "2fLEV46ZMMMyKYtUbBcggtAVSYdgYSBoAF3x5xnEJrThe9QFKxh8iTk6VNbEz8jVWQayPHnPxnz2pDEtJRxNShwG",
  "key28": "3e6thRgTCX3wmrKxQXbPUV6xFpvuxkm426JstNC8ksKzHScNeeT7HeSHPcisDu6V3LYcvLa37RWtYexHuqSMWCtL",
  "key29": "3WuxaghHDGNHTCF6sFgUNKDeHk51Q861HNo9SLeswDCb8KFPLDKRtG1RNTWZ8GsepV8TtufN7dSpLT4avsmUpyNa",
  "key30": "oBWmkzGBK3BTb8o3nVoB7g8ctEnMZiv69cK6gx7c8wiJuvvsTC1Vonp4TmpUDs6HrvkYGWhwkdSpPEXe4heNeaY",
  "key31": "1GReHiFYhRfzKBDYWb2vdKvUbQ1KqEGYrLavkMk4Ye9wasP9CGSoWBKiFKJRXxMssbZxCo3f8TXBNFeiYDrfLsX",
  "key32": "Lx9R2HEjG2PyTiWzwVTHSJyHWQXCH8CtJgCz3tLcygBHdPpLJh3xU8WTa1y2mcmsEmcePyoiTYeGA9fmNTEKeMp",
  "key33": "28b4EtrcEfzAVrxK3aULNeqf11EhJUrrLQv1q9W8jc2KJnEkVtzWiRLwfzrsoRamQWoi7y46rujuAqWxo8k6Kr8X",
  "key34": "tTAyLWQ1sYChUkwxtNakP4oyFVcFn2EiytwkGLHTNKNHcT7hF24KiujR7a6YqTB8wEbRJY7t1jNdotyJ8wWQWP6",
  "key35": "63ATL29xzmvuT9Bv8vR9n3wspyuKDe95Gk7gjyDc53CMQP9Hm3vUXneT4vKDQ6go3pS7PYPDHBpf7bb3afEewF7k",
  "key36": "5aJYq85eh4b2pvkG8mQYpEwEnpg6DfFzsPvwsst1sz9e2rkxYhs5xuBjwkFVkR6Dv9qUYyNJFBHGncV6SQd3vPiZ",
  "key37": "27YXsxcvP5oC4FfxBZN9upQdSy4HmTrhRzHBuimzo9ivA7ziwfkrjMVLp1DecAnUnQkvf5ZoRBCumWW7dKhehZPq",
  "key38": "43GwWwAnJqsokL6m6VcjD5NAS9SzkdHCYyVf3TRgHsekMs5UbTmHdVjNy3XGa5od1QMMRLMKMmzs55igWdWarh9",
  "key39": "3kYLCA1AzFSr3ARa8LYepYu5hzuo7zsvRKowDHDowvvB6wte6GDnsm9ioSKfws8xNEYJiwGtPj1d3fY7PTsW4oH8",
  "key40": "grkzfXafDnDjPTeuzLswinJi5mM12f2jtYqVWpSmx1Sk1gRG5K28povm4Thh7c8BUjjBpVz6vQFgsg2Kyz7KSmU",
  "key41": "roRKUD66i8mhKtU4MMquQGqgp8ysabEE3bWpGuA8PdRSgNFw5oUrWPPDqiiQHMWaSSmNkvSHN9znPHBEWNzw9D9"
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
