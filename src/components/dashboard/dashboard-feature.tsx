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
    "2HN2AP94mrwjGGRtDHPLMAYK9W3eK8EBym3VFy5ytD2c1CixLECNKZk1KLAYxq3dDsaBAdsUJgua1TRrJuLckTCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qNB1mDCwALQtyxAavKYTYVDaqpQNrAoxTMZkfZx9yzvjytMQRBoa7wbhmo2vVW77UWiXQJFo8v8MUDeJ2K2NnMk",
  "key1": "fXsLYjksvLR79sxJmyNHmntPeQQLzLG3QqpCNCQHBrm28SV7b5iGeTWZTtGyXnTA9R4BGqr3iMjZzky7Mk6QoMX",
  "key2": "33EphYH2HREdHtHXxJjNfRgiec3khgyfR9SCoYX6k6emnwjCmkZR4kn5HV7WRJ41wycJnrXBpFf5bGZiAnF8CT5r",
  "key3": "zBnqsZW21JKVaKgGgzCoMTBz536UTkvnTevmd2LvAt4jpfhKtYD5JwL8G5pit3D5WXQxaF6GsfKUM8kx7Nsw6Zx",
  "key4": "3WRMLcZJZx3Bgour6imyzE5onppuNwPSR43bouK58Fgw9HDn9REaXNqKveL1T5knJRKvqB5dQE2UfcM65SzveKdp",
  "key5": "35eDuHRbwZoMtH4Pc5oTp1EBTw4M6ZZJ8k1E3FUrG5HXnL4XPvFLvRXhtbncNtQGThjpAwghyqqxoPfmXiizApAY",
  "key6": "3uB2yCgYLEZbCCA2RW7fvqveyipPauyzytQUaMcVS68ND7nrssgdxUJubddBzRrp2aSiWbT54nubRf88A3i6izdZ",
  "key7": "5CoidPwq264QbAzXFW8mtgh18tuCq8a3zADB7JmkzW6sESnehecChiFawhxoeiApnmYToHueYo154V4BzJ9sSeR9",
  "key8": "3BPsCPAW2PFtQi6BjWBuk6f1vU3dh6aUejkbbqKJQ1zhEHPJkNGSe45w3izjwF76NQF6zHqBomvqEktvsdUnmQ7x",
  "key9": "5JiVEU4UN3pp5GyR22UBkfipVfW9sTcqBZvZmZ7pWbxTRRJiX28n3ymJrMrAGh4pEs7riSq7oYfKQVfo8TvF35f2",
  "key10": "3TrAWXvLpxLTjMcZuZFwzDuncXJgmCa1bGrwg2D1BMHTbWgNGtCsMXC42gXVUp3TPGZMRzYrBNccdWFdnP213zsJ",
  "key11": "3JAmPf8K4pQDkkc3eMipKzUrn8Yuvfpj4w4YN468wJB93zysCUrt4rXKGkRktGVsjq5FUUGtYQbL8h144tUJFp14",
  "key12": "2PjkQhNbVmGNTqUY8n5AJG5jLqeerpGbuPkHZmZ5xyHbsBbpEcFGAok58ZzmrPCk1BqVJLXgHdeg4tcU2C5VLqSj",
  "key13": "TpfiwU3vf9J9uaS7ypcNJ7a55dL9XLXWxzrA1nZULTAxVJav5WqDfVATSZ4SyxQbS3UbdL6oQLkDwTPToxC1k1i",
  "key14": "4uDQFovBSF55hHc4VsWnKx9AukwhQ4YVGwSZTbMMXDQfGE73sc9GgSA4TshDQKEApKMutq8dYWdpe4169jGdGP1i",
  "key15": "3BoHvtRR6bsiFZaRhrsRt166Ps4FdWryjDQRgUv3XcC3jHN7QpK2XZDYVPatzYa2RsngwWfWzZFioCYbXJAqMpGQ",
  "key16": "5iY53EH9Jb7yhbxyaos148HcUndjjF9JgmkrMbjghyqzCmQ6k2Wc2fCXkqh28dQfaHNdRPPu6Ja2Nn8AroHeP9tU",
  "key17": "2mQ9PHitLQ3oDTxMCXkfA2ebHzmWnsQdEuG7iNgNpKJcWxASXBAYmUEL4wj8spGidVc4H69q2i6uJdx2pjB9YAtq",
  "key18": "45sgPinC43iyBtqqttC9wAr6dNR27gAomhsvVgPhuVZyn6reJSnB8qm1yqvVSGg4ZF57WBcMYLTYFYwZPLS5fxTX",
  "key19": "4ZrJy4WWZBkvgjupRSEKN17jKP7fh1BEUWSHr28qFzSzZBZ69nQjkxvbyj6fmaVJ6T9iBgmKpHEtWvPGhKY7qKB1",
  "key20": "5aqAVetuwZ7LusEEbwPzfdi6XCXpEwdwpuf14j7KCDnVaZQiGWnkhW38P5eQp7765aaAfbw6QcNigEk6rq8SXwVf",
  "key21": "4gUhd2fsSXyFuon7bsmEsanm7mmjXWKE98xqdpZ4NMykaRQwmbvCiMKzevnPbJpqbUropR9MZws9nKYLJtokcdnr",
  "key22": "3XiUxQVihjFV8sHhhuuPxrtUitvE7CitiJTAyxjkguXs2wFRpfN9AhvwkbotCxZQ1MrHLeW7XjDMDeCk2zFc63Xh",
  "key23": "2UcfnDWsqLSRnzfH3VUggeE1LgXiHSAy4Q5dUJ71NNUxMnq9HJoyXmsK6vLaVubwHXjwry5JBaKENoemNUdZF6NV",
  "key24": "4S9oWhQXc2fFDFy8fFVX8F6jYWH64NybyjpSMzvBzTvhBaKwdRge7XqFoKz52VDTVGCsWXqr1sCAXHRJU1eFverE",
  "key25": "2LiJtxRN5WVPevmz6xAadMjJfyHt9mPHcB9qMHJWgWHKBhuUFPpPc5eNBt37iaub8Px7cBMorAsdcYWKoDHDWMTq",
  "key26": "Eyzg3sQr59iuGcr8qDqhpWzxH7ZSHhY9SYvd5o2FZwB36mF1eFHi7vdVBqBb85GcbaLFJobmreaAb9WermWYz5P",
  "key27": "RHL8rsbFbwHkfKvW1aQDKtp6ahtEPkQtUYwHDnydf9n67dt6UWtaiPhVshu9JniLHThJmjejQzXQsNhTBxAkW5K",
  "key28": "39z1bJZNmh3eBaDGaJEJRccG3cS8ac6YSYux43BfULUyB61T3rzLxHE4cBKNfgmSPrMRJJJ1kDcGXenxQk7RreQp",
  "key29": "2JPs5vouoRbhy2DzouzMJzL4p13rEFPH15aD5RSwKi8Kv91zwkxY6yhACwJMiXk8h1oH5vESiuMkDYo4hDm6gZ5q",
  "key30": "62GTvHmaZ2AwsgRf1JrjkRhDKNLt5YqRxUVhgdjJhWj64a79JFNjeidd6YwRjpxaGsMs62MZLYCbGen7NowyVzyA",
  "key31": "3ELPyQfeaSuyHrmkXbst717DHMecAYnVAdB4ak1o9tb3GgevzLU9xnbprk31vLVwYQ5PzFBdM5mCosjkKGAYsGJT",
  "key32": "5cZmDxkSMcYDFSkncZUuHpQNmpdjjXuA15hocGw8WZngM2u4ktLbpsj4wLQcxry6skDw6LuPv33RiFkZZkJiuug9",
  "key33": "3rgoK62SqLmGuMptnHN1VX8sa2QW4RH1AVez9MRmhBo4Z4ToaHkWHzfmBLdKh7KBTCEDETnQ1YwGfZVQ21mdcZjJ",
  "key34": "126Kfn9v2P2QzKTUUR1bkw48JzbNFJyhtMBzHuUgGLA4zxfPJCHGG5NbNwwcCxy8EUq4CCY6UwrrkPyWmDq9q5zj",
  "key35": "4qaoXVqKNPBWhasWgA68xsjDXQ4u74Q3UBqKQtcEVxSVQYKsRiHN1CDruvG9c4KbXseoJ8bMsXAgDbPxE1PVnaas",
  "key36": "4f42831QtpqUVguXVUcvKRe9HiuFbkUbMMjkVVsARqBYZ6oYg4KJB7EM5DWpvrAvdT2unku2r748xFyvNbyUePJJ"
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
