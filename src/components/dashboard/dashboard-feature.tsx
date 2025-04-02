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
    "5pXdytGcrQLHbgqLKdbf2FvnrAiro3mtGhxPzDSe1j7wbXGzYKmfZ6Nr9WRwtNZguFSpgHMzyg3ExizV9q87B3Nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q3QrJNjCd1SgBH3D6mbFyd6zrihY5mBGauaAvsm8E9abTsMBY7CKWQH7Dw5nmFZXF1MwgjcnFkkHErbmqeMzoZZ",
  "key1": "2NpkNymBvpnv5FxLUU3ozQJXzcqbMWqW6MdaDZ1zy4ZdjFVoLJ55a5NPZnUiC6i7kkVDU5xQArjY4ATq3stEQf9c",
  "key2": "5T3fZGbYxyStzKsVtcthshxKUiicfo13TxWe1HHPhUq3EF47JXip5UpraUrPF37nDXyiyLKJKfWzkDB6nJoEukM",
  "key3": "3cDg9pmwASphM7bFcyvR7eRfpN2GuJGF7fsJ1AzgXACCZXfjJiu8MqkgBBaKBw7C8G5RZsBKhh7wiV4yGuRD4hsQ",
  "key4": "4cY3UkUYTbERskjXgEkZzaKdwkGzeEDn9R6RQkfwPaPXtcGbT1M5sd1Ta99ureePZUy9gLuLSnWJWddwnPahyqZ8",
  "key5": "64UHttFLEXR67kL2VFXX4sfoyoFtZ31Nt2ZNjaLjTtPTSRhqGJXV8dTaCRL4jg5HLKNK2nQeKuwdXJwshnMPeJyd",
  "key6": "rfZF8ozAehBaX3RSFa7n1uUuu2oQf4VkdWBL8WFdrnMLBrekNX5YfRwm56VxoBREfXpLADRzyAornVQgiXqVs7J",
  "key7": "2sMB9r6qDYMDUxVXKHypnREX6AEtxPB75riPNVAjnB8YRPLdmJGYAy4kJao7bH4FN67STa7Pvx4v1vhC1esX5Qv6",
  "key8": "63ojC3zAK6MG7v8ztiFnWQBWy7PbPFPZVb4dahY8YyqXsoRSSApdhtYN21H1r8tR8vhwQ49YLpT3MmaepXt9v8Xw",
  "key9": "5BfW5tKUiNEhoRpKYK2vaQaCvqctYDUVeSAVjWqErziLQwKFtGGj7jNT73YLHeJZQ8Fcz7gFEhorr4o2mdj3wovP",
  "key10": "5ZeQi4sBjMXbJkjsngbzNJgbyvUPV7rMB3AH68ehSGJPtxrCHb2bmCTYxuZHHyfVXNS7ghWFyTTMXnfHudsowaQz",
  "key11": "cuNGhWumJKSbcfpLpmiE8CyrUVHsV3JKzmwv3Yuy255hKUxGim3HLa9RJFXYrkdHCE47nMu6gSs5PYDEwm55Wse",
  "key12": "438fsmkvVv2HzCZkWSAMKMVtVmEwEGZJA2pD1fJeAmTN3G779d2rMi5T8EjmRT2Rx3wwLgzAeRDkMMRz4oPsa7A8",
  "key13": "2kfNDkVC1R3As3P2qtNDbprJzsFnFHU3GpMRFZXXYiKtvV5hJhfGct2q8BrqJbTMa6sbzDknx9CwcP4DCmcjuzPn",
  "key14": "41yUYtUASGX8SMwKiAzXmyefS8HMYrZoFCmeuMS2eQPvP7Z4f9Eb18WniveGZSaAJhnPvz3eoudDCwNHmuiTyKT9",
  "key15": "5Rkm2i8UE5dV2KPmUUkPpTgSiufMuVatYnotudJocQueE3cipqynKFj2Evz7QuvuyoVnpTBJLpXiUfWGKGFyasQf",
  "key16": "5TiNs4jpZuJg8B1QdjAG4XCqtBdHzhXiXrYL7YHiksUewAqSkjN3gonVKr2zakUyWj6WmMJwHn8NZwNbkW2wqg7a",
  "key17": "EM8d4oZN1phTSNC9FN4SD6dSGW3A3pM5QaBDwQRzrkVETTiFfnU9stEA8RMWsZsF5YWeSPFcptp24rsFjS5WZ7J",
  "key18": "4d73VaLGUV6to6RJxpau9YPQi6uS2FWUiFZjYhDGFzP5FJXGsCKZhwtXfYGRxupyaaWBn2tXNouUWsHjJqBbviGz",
  "key19": "5BjpxUX4PFLVTZyDPQz38RSd6uMvwFpH1Vr1dZ8i2Z82ozjxr1U7FoTPUE6fiTdFMipyBpfVmMM3v2LvJ3ZhmYT6",
  "key20": "34HDESzxPCaybWAoXhrcoMHuuYdyHwa1A9Q94eVTrJgg9SbLNvvV6nHEtMDtXuMXqbygyE9CuTcqns8Z7VaEEAWR",
  "key21": "5LRdVD3EAwSEMeDBcvCkgS3tEiw3fvM3zUd1tvBtByP4Qr2o1WHVoqQNfhDjzgsRt9N3foWBMJ6kNdGBwht8iyps",
  "key22": "4CfP7FWv3mLbX6saPKueF9SJwnZhHpUJwR8VxAroRL8ZXiGpmn1X72LatQEFze7cPsJghDWLXj5QGUP31YThF5D7",
  "key23": "2zdsgrmGPixh5XrnVZnyqBE7NJqTybjiwkMQzRg7p6w2Wk5Qg5CMBH5fjERZgLn7pHXD3k87eN2xrZVudcZULmVc",
  "key24": "4zcnoyw9PbYLo9dYC3KNUkTkZQAm7vVh74RnqoJzMfu2WeBBgtMT6wvS1ifMtrhUQWebF5XKdKsDgmBt1DZHkJi9",
  "key25": "4YUUkWmh3AGKEaugW3x3Sr3SDjDgzXDQkuXbyhdo5utjcqkx4dtYeW3Ph4noH19r6h6cARPcWmut37a9Yspjs2qC",
  "key26": "5cqqZuyXeUP6td6s4B2CvAyRuPiEk5Jg2yGgvXnfhCJh3JZwGnBxxAqGJDPWtp1x1kkbNBxZwG1xxuv34MPCa9g8",
  "key27": "5jifopXCEsfJPzVrm9Qj3bA63TrPwevfz7aj93yHxvbZzqmc9ReGKyRbqtXLJctaRwrmUyZQTyVdVYEjSgajMpAm",
  "key28": "2ptYGSm9CsgTFKAzFEqg6Y5vKf1fYWQqJo7JRihoHabY1ZjeJAMrbXar69h6XyXgYfGp7nLwDRkUJdvp8wtgmXFi",
  "key29": "5X5qWtKvizQxVGySAPKcf3zWLsTKEnuYhwJu5ELfsH1XCJU5FWLS7stmPViSfFuGf2EbUXMrxSNaQBReJ3wJCduK",
  "key30": "4VLkKaqdQsNnUJWsNjoT9JMDyzGcr6KTcTnNEyQ1p1hFv6zNNdEjoKzffCPVtrHRyoi55DPVw4ey9TQ49m6fajEa",
  "key31": "kmHHiqnmwHBvRt7CSM8ZkoijhvahoDjBdxEVfEKQxy9o3ahMHne3XNzfcPrFT6yP3gvgb4C1G1qkWAQTCg1Gagp",
  "key32": "3WgRXhiTz9goB9kduu7XPtT69fk3iiUQA1cFtKMBfYndYC7aKfaQwR4bcNT3X95xLkSXpjpBChpDAZEtsFT6YUp",
  "key33": "5DrkqrgTzyxcsRsMEGEyAMQLCysWtpSwPSPbqeM5QQDJciRMT5K9AYiXmVv4pcY2ZeWS7sDs3eoUq61kbsdQhgAk",
  "key34": "3cyux9Hp4o6s48KTaFPs84zS4oCYFyR5UCwXzTcikRPQ71fkj1V6eJ42Pkbu8LAEraAeChUz7WiwgK1qHJraJvj",
  "key35": "3LQrjBfvkpsT1Bn62iPxNVWDEpppETRLaKX5q2MUqzcncf8CaomY9hVuDkSvfqBJpmvFEHKZ2tdnNUsMpgppMAeU",
  "key36": "vqMTibFZCVxP75RW3H3n5kQ1LA2jXVe9gm3DBoi5KyFRVCyWZsqP37xch73xJxbSJ7AQQqimERLDcJg9QNvsc5Z",
  "key37": "2evPrnnwJK2f5ENpQ2GmDskeuwA4rbsLYS8JVYLX5eZaksaXfHD37RiWsdy2mcWXP4kugyZr8X2sFRCUvRWAy2Y7",
  "key38": "2ypnEUuKXrLLDFJrq3ZnkaitLjFsCtPftGGVSnyZEWT4UGbNThg6QdgqWjPYMpgtdrUpCAj4pAqZ1fi3UdymD5Yv",
  "key39": "33FSmcCBbumVnM8RxjXd83A5LpfHhc6brFX5zt1zjT8chwdLAo1FZKfh3nLPceRdD6ERwNpn8NY2r9NeHpbgHNRC",
  "key40": "5ukQFnYP5HLKAbwMFsQvFJWweiD9jRxksxZQY7APxfnv11dMtAd42bp8Z6tmf3VWe7BQYXWL1hjWJGjmo3WpbDg2",
  "key41": "2sh3spREWC13FhNLjK5uqG3c7s6jwVRrUoaZ8k74hFgsWYb2giE2PEvyzEmJNfewrwpySU799QqUeSvxvu3WAQcE"
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
