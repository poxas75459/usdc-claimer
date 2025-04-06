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
    "4yiPPDrxQ5rSzVPDKNvBEyMqndDjrdZ9LMLHGJC5fkaGtpNeEHBYAAy9mk6JWqUNFSN3m5T37v7ygB8A5BEZ6Jmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TFJKuRuGgAbZzhsRZcQVrDjaVzYHjMB6kWCxwsUR3W5djrYKSL5ArxXtZPbU5REfGXwSFwVfDJnB2ZMNN63yxED",
  "key1": "5eJKhWvUtFKMoZHArk2uewEzNckmogTLyZhXMYNLjBZArJLeAPAueckWDghcLk2ik8Uu3LNpDqjNKpiuNfsZEb8a",
  "key2": "65ADZm9MZjdcjGQ2fc7jFY35nYBPuJB2J4FTtYw4vCbv5bQqSPNfsm5yj2bRjM92JeqYUfxENQgHn6rdujpQJCUL",
  "key3": "5fmp8WVtd7v1YWWE2vCZUFM1kB5pc8981xC8QHEQN7aFzrFcwVYwynXn5z5HoiVGUgfMKPgtqEov9ea7sGc7u28H",
  "key4": "2R38NkBsK1Rc2mpoHegWPBizKeUmvQtZ25nfs4FufRW6mftA9LRW4TX4az2JME8mo9REYSsSj3SBMRR4EKN44D5t",
  "key5": "49uWBRRxPss1of8tQ8nbfGix1ggYrrX1yqwug2hj5x2JzSBmw1JRxGT5rom6k7mkXRSe7WW1D17gXQ6hV95BHUZc",
  "key6": "LJ1HTDjSjQfbMwi4TFCN9SasUMpg7FkQ52grt8gXrarTRdnFkJdskBTsHwvL59nmz45AXLhxjTwcQnjT3U2mT36",
  "key7": "4Wj8JcX4GS3C6NhatdpgGmaztWFS9NyyKdqQEKdozXPUd3d4hReSuBNkk7L65DgpGTSNF9Lvi3apf3FmWFnmKfTp",
  "key8": "oSaa79xaqeLzBQgEut1fxMyqz6swzrhrSrq1DF2tt5Cf87So8TjSBAAoyNmdS9VFzZ3BDUDT7hFGPsK73U4sfzz",
  "key9": "2SyAdp97ef1xHfPPk4KRcRo8RXmazqnMf2ea2XtDshAVviFVrU9AWSi8GSWQLCEcHQwnG8f3GwTgPFuNWEMaHvZp",
  "key10": "2wSCd3VgVhMwDCWhHA7pnvft6H2YD2NybbRFhbKwdRGpCAr4ALqe2sAzddPsE3wKLigW55y5NDTuEmrG2bSUjBnr",
  "key11": "4mnfJi1qsNFrdEN7G8h8B6XvewJDpDHECE7B4fg2M1MWmUTPafV7awy126pFZnQWTAYfquLcDgiVPcctGnK8eUeA",
  "key12": "UA3KeXhqv8H8WqZtzhagAQsPPk1cucz7Xg9evzQVahP6tTUfc8aqFNh4cTHtCB9mTYUrcU4M6FKdyXWWy84awes",
  "key13": "5hko1Z4qJNgmNjoV1Ly1hukcLUzqQVanqbxkmx4z45KMZbkGMRdP1kFuRmNEhK6rcGhjNmJw6eHP4c22e43QNor4",
  "key14": "4ti96w9Y7YRCRrKY7EKwit3jNuF5TnBu2ESg27nKiH4WpMq1vsKTkRyVGEo7TBc8nSsM2X4MbfAhDmQHGcZmV38T",
  "key15": "2trgcZ1p2ikQtCEv86tHneGhJPZsNcZDLt2wpTSEuL9H3qjKtGLjrtMeDYfhtuyiSxRd5MxjUvp8mnxXw2ohsMwE",
  "key16": "2aLts2f3Fkp4NgSTYPvURAjrkTtfxEpSwDoqSGwgkZBatdXrchN6NhsUr2dMpMyzmhtRgCGwhUPqfBETzyy6o4j4",
  "key17": "2g4fp8WovJ9ww3DUcmtgmvb781612pZuKXsLWWwCkcPdLHm1sQJTXuCnoxH1JN9xVq6gkHi3UdVEnSjpdrfncjzz",
  "key18": "2AQA63UKAa3yyz3BT5sgNSUgr1yEJxvcF13Tnu7zJ7MdRnk9h4f3XDf8mhhMs2Qqua4S2KKFLSDuSQ61NNF85VYx",
  "key19": "3hzNeqZkxk81mAxGARLmwnvYXM8xJuoMK8LHTiYDWBf1LHva1y82QLr7yRioYFbyZy4GSVr3xMjZZQPXGGSe79x6",
  "key20": "EVwux49sBKPqDoo8rLcVqdQvMDbGXCwKZsC81FUk6Rn4Q7dnq5E5hwyYcBJ9vTCSvACr7898y8FmYAAjeH7b3S4",
  "key21": "3eg1sVXtSLrwUSEkaGrNs8aUj49YUmDRbNqW6Lc48FrFRyqV5zwMrph7SiZcg53xeV5WesNUCgQRwUdtz5sDpjxR",
  "key22": "3cHfwLP3H2HUTbiYxfC6iH2ojVytGLProXmQGx8mA4DT2ZyZb1E99XQ2gSuyGzNb6YK9ro498whsDMwYBJu6vZ5g",
  "key23": "3S1iL14CspZY9tPZUpUXDe14WG3QeuFs6rF9TemyfTPKDjqRtpgUfjSB8CLnM5i4pQBZLpgNFHqzpEYsqmqxod8U",
  "key24": "3cHfSDPNJmLJ3tpBQUyADWX1yAPtfphdQCET2x295mZNy7Fz4Uzpu9sEDQTv7fEZyBXKL7CyCE6VvNpPg8UEDHoF",
  "key25": "MTFvF1xoUzf57W9PVBjVXxGu2erXq7S4mHuxQSfbbhf9tT9ckuRyEnAbzqy5oBckxBwE26sgpmS8Y5B1fe6sZs9",
  "key26": "3QbQF27f7eGbZigqmzLgKFG2LRn7sYa3JzYzcdoF8ygDHWRHnLqHYfpurW6VGPNL1AFDHgu5TDgiZ5AoRgUXBfWx",
  "key27": "sRp1HLXu4xgvi5VtWGkyVJLDq8v2vSTbk8qwqUpstcv7USq4EH75ZZQ6pFZGkRVWDnokTmeiVg8u8j6YdafnZAH",
  "key28": "8Xd4CLuhYRuC6HBiGfwJqdg5KzbqWa4UueM9KxvAaQfjtWGmPTqfhPX5xHdYhTqTu94Pzbu8F8BF9HZUWQnkLLW",
  "key29": "3GBuzQkyQ9XM8a2Cjn72eXdHFgSwWwWXWZ7binAJ8DczgztQKXFCqNABuqKn2R7XzihJSVDzewjf19BSg8HNchGX",
  "key30": "3MwLzUUrfRqRGxrQFcSWhY2brSqK7gixDpKpexLENgQMtNbnXtzDZog264mwUX7EKR9prZuT71PjmZHv9581rNnq",
  "key31": "5nJ4poxB3jH6vLtxcURg3upcBEQwwUnbVCKnUMab1dj9CzCswSLjEcVS3cDGVk9P5EZJTgP51pwaCxY8iQWx4C1X",
  "key32": "2u8jLDhcjhjLEyGvpiKYJBY3GZwkUrRzx6j869HEjLPFUV7iW8izrFSft7FBFQUfVsyFBX6MfB3ermqMEMFx6nLQ",
  "key33": "3f6XnyNAF4obgWyQpzbTfi1F6CtLy5a7gTQxBfavo3z99fkg4xRj5oELxxeoCGXEvbniNSArN3gYQqPSGC6pCeFa",
  "key34": "5bJWB2PhSjKY1EG74u7oFdZtVwFbWtbFBGzdu4VtUjQ1uezbuZGhBtpAnaxiSHBEdwRDK9q73uL1Ki52jJqzSBev",
  "key35": "3t5RvhtYn3yAkW13Nc8oizP6gRUSeK9uau7s6YHofUxLbWx9LUqMxTzF6vLEGWKAdsFZtPxnsikRTiXgD5AsbURm",
  "key36": "27uhBtxE4a3bwPdFmiAy3CS93z3mS4bvBRiC6YbndvGE356F33QuQHBfhz57qxWthoZDc9ZCWoq173in2j4dHofh",
  "key37": "2RNyg939vY5DQzLeNhrrcP1vb9BWvEahGQV4y39NWbGoPS7BjP4Qv6wxLXCNKzesXqZTpAk1f187vsk7eXmMapDn",
  "key38": "3b4NZZExgfCpTqHJVyeKDBrNqZ9cdmW9V4ziiR9vfASPMEuSMwt5yQrdgoT9ir4qgeYZo3crrgTVEChXtcSCujfq",
  "key39": "4tjFKPZBpJgU8peqr7QEzGwJzFSfeAW39WKBk7hw4VQoy1kuqHWA3ZyqYzBLxWpqr6WCA2rTqtYerFWo7Qf9sHvQ",
  "key40": "5WD7fTYC5v57q1FBFG4Ce23nHoBJ6zYUsMFnp7o5HTk23BC9mvJF6SURrRMxsMhY3C9QZ9Dw8UwyCnXE6prikXRp",
  "key41": "2Pi8GKua2U5VRtxz6VYRYwUGuXP1DMto1b8vc1hdfLPcpjtd8TVhqigSnE5SoJaJZwDNf2dRMKL3UYAtogLiwgq2"
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
