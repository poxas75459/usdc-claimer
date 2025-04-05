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
    "2q9iRnCRBF3sPGvUFo6NqBWBhnsGC13YGWFFcZiT4ZETvaCppXkj77nypofNyMw7ttiBxDJRcbsg6s3mWeWBqJUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qUJoRUsT3U8fnoKtuP2tUsiSLR4gKG8zzWx5M3ScUnKUcZYAPNGWcsLvdUayqiBwJ621YcMKLMK8LXrW7MqorW4",
  "key1": "3pkitiWgfBMZYM7qH7jkyyGrJoGJ2CvVx9g3MTMGLPnsamDxRzD3cq8skHKHuCaxX2XoKYNhiSyQV8eeYLTF6xfm",
  "key2": "3suqeBFKCv75WpAzsPcC7ATKMch88UNkWn6TMHSuuvcf9a1GzVmK6ezK3ePyJfLpKWayt5sXUs7mLUGSXpYKdRnm",
  "key3": "5xDXMGmJ5ZzU166qSSELN4Xbz2Zs6wyZr3ZnLA5X5jBK3mhXzGtcuetkeqx999p5VxuRmpcZLFKkFtn37dR96izd",
  "key4": "27HuyJbcxYU6WRvQx9AN8NWVfbXPci6xzVhoyFQGj4TW9wZUUSe47gYX7QKSpwJbsvN7VHs7BDiJ6ihYMMtYLHDK",
  "key5": "2pkKkkYDhLQK1iBedRvsgT6XXrqNYdQoBeYUMWaDMoBoyocfL52ZvtAZmYpVaESm2raioCkgtzVVry84rqHhuu3S",
  "key6": "2wawni9fSuNZQ2bQWxCwvGbaBeSuikmGdU3aTXMjW39yduazYS2GHbCPfUCot5yCJGtvknHau8AmzPT9qNj2w3Nk",
  "key7": "3pZYHdL3YJdxA1wrqXD2ronyU9tZbktXgtaB29vXRoNhBa2ADDy51G9t4CKhQ27xaCqLPFxusmtkHBr3yimDLzHD",
  "key8": "4Lp8Hsc8oqiYNJzMetThTAisDvimMrf2NfiFznVU2rgAQgh63JXfmyq5jEvv8fqd8BrfwwErGqPez2or8eYquvFB",
  "key9": "47BpXrhZ2mzUme8MH44ckbdAYYuJfBWrQZzii6A48wi6tSLPsR7w6UAtbE6XHMsRCre3En3Qq5qVnXmiL22VZePM",
  "key10": "2XwF1UCTCdCD5nXNwMWiV6tAvukfrsMaBpirZn5kKzLZqqgiRYiV5fU2MSsEkcP2P5JGfamQMEiPTMUfdFFewnwb",
  "key11": "NkitVqnxQ1zjnGkbXwtgo48uiaNT4wVVjbbD8i2feiZ6KYCy8dRp6xoihm3YWDmH6y85msQ8R7NYhX9rxnhZy3F",
  "key12": "ucXGm4hpsdufZbwm3wnaFiTmbW5kAm2oTa16688xcLQXcJXjhtQ47oXXM7EvjAQXe6MrSe1jtsoKGJa4EKE8qXb",
  "key13": "LTpfiCru6wAg7QVYNqV3sc4NLhvALWsEKT23XVWJCebwkj4nzc8ywnh2fWEozX5MbnvsESu6tnLwoqoznGAnk3U",
  "key14": "57ATJ4U1xBpKFKsAsj2foRvCYq7qWsZ8sWMhxQeDVWD1Pi9fApfJxBZdhgaj4HoRZuBgxtrREfftoWfDjpo6UpFW",
  "key15": "3JwxLDJinLhqhuacSDLbRQ9rKEPxCEpP3YdH94YNH9rLXkxV75M623t4LouhxcsSHcNU1nFezz93tzDZ8o1E5EQY",
  "key16": "3Auq2DpSPhgyDBLLY2tGGU2EfGGL5bNVH9CUEuLgVJ9hupxVRuKceT5BVRxeMfDitmuq75CSLBpPHG4Zqdxo84Fz",
  "key17": "51E7JSB9UrSXNAp97jya7BrCWk88RsfX8mSADbmeszcTe9xJa6a1Nrn1zStmb1LWneY2T9EQnXLWadJzAQbUnzrY",
  "key18": "3ShLx5hcUZAVqjSWmTTRtnCN6GiXJn3t5uXxqP41sPQ39j88mF8uuvscxFeufVZYRojWLtb1SzUr7wzsBHL19ybq",
  "key19": "HjL7Siugi8UsMWWKppmifZKUnM5r9bctjW25rwYPCZ2ATDzcLmFYpWAvrKPcoHADCfveLrPvcdjfTv2LrqWf5za",
  "key20": "BHjjGLDSCfC5za6EPb11KLAUoNoPLFeouPbUYpnR7Nu5GAdZjqyvZVkDKyQekTy4Daxn6Dk5qKWiuvZ77H72Bqn",
  "key21": "2UM8oV9Yo8CcKWGYrxZN95mmjyiNPQVPKPRGdgefAj9RT6gxVGmQxkBXD1MhRdYLqfh91FuwDWQ5oFd42o9PQZRr",
  "key22": "33wDoDz7iGfjfnJa7xR1Yd8TbCmmZWMTQvhuLega72tkRpikHXqccWEZPE7mE1scmhrCAydffBkwTwKkk87tbG9d",
  "key23": "4EDfAdMvRPPkYDpv31bdRZQutPW4X5dSSKyuAyqvzrGoiPnNqm3ghPuSK1hcHDBmM7atUPAxk5udbkdyUN8AP9Lw",
  "key24": "4v9ByFCZaQfv1hADKUT18tPog8EjmstVdygNyLNGGeztyr7NHBfrDX2WKGkWdQ73ihgo8FK87esh4PVYa4PAtJEu",
  "key25": "47S5tBCFU54RuwNVa9LSFXoZfTcBJeNnt988hJ2Aj2ZKE3ntngEMbi3ig6qKmfFmyVMXN2dpJNKKURM47qx9g2cX",
  "key26": "5HGe63EGN1yGZwrgCQHXFzx2AJGEXg3bXV84vfgBHbz8tEyqQGzUzrh7hMKk5jyn2kNQYYNYzz9d4v2eq7Fiyajf",
  "key27": "54g3Tg1p4XnaR9FUeU68RbPzd7Xj8BiRswBDCR7rieK7i27Z6RgjRViUwg5EGMvkwZWQk2tFcUUUhsNjAwC6Ta2X",
  "key28": "5LPKiE6VNdC1BNhrDy3iyy4tVYHSZumDE5RFKdgDfnK8u8YNP9Mw6ZMd3tgP5Qwxabt3AeBmnYa31wZbBNfj72sM",
  "key29": "2tJQxEbcXS82reTdE8s4MegRZ8Eyajk4NGVjygHKMRvDcVE3dKQsi3S3KdMykfs9QzyLSB3jfeaDmK8LtWB3JcHj",
  "key30": "2FSe6op7oFZUKvFhm18hh8E2QywwVGd4HTzRZmCtBwHX1GiksbgwYt57M95eT32nWkjiATQgiM5HguQkycv7b5cd",
  "key31": "2Un2WaAbrXuwJEPpujX1ViZBmqCTEENLX5zBwXv6zVsKBqEo73wDXqcGet7cC97r4WNth2qk3N2BGpVT8BNAkK5W",
  "key32": "5zgrP87X2XctpxtZ4DHMpRbet3g1BuuLBsEnz2cK2bx8yQWiAW24PbY6GR6qFAvNNFqqYA7ygjPiDJtg22abfmCQ",
  "key33": "3X9BuFsqwGQGUGHSXfLLevktrNRm5aeCWjXdZA8swaB7T4UrSTmna6aF87MguLs3BYqm94JuMzYFy3BhKurPQkJv",
  "key34": "5qx1SEEJW3t4WKMqxSmw8eRrfzvR2B5hLtdDkzBtLZ2aarRdvajcY2rw7fafZAwHhPJfYMrZ9dbgu6GNvukNhEEH",
  "key35": "5A7DXkjavP74DKSYQLqTMCMDSreeGZfWSAkKvYebHTQ2D9Jke8rrC7kqh9pHYj7YMdB5PT5sm3qgJazs6N3sSGHR",
  "key36": "5Eo8tQo3P9rUPJYVZpn261q1RoidoQD3T3BensScy2aMhH4TmDt31QF8TN6MTMtUnfDewvy7EbkektFCRX5oWGV6",
  "key37": "2wmWvPeB4Qdhk3mvMrYSUsGwRRpD7NPheUJqJhPr9dTTUpWvAwwupqZJy3aNt45FMDvnvV4cDAsz8SMkfVUqm2YY",
  "key38": "jwy2RW5myxRyRWMBenanf96Ud1e25tDcLggiV81kHYa2ZMutg7SXhoeDwaWKdYfCNXtLtUFMogBhkFk3x98B7VR",
  "key39": "4Djnt7Jbg3Y2Y4vqiE8y7ToB7jad7erDnXX8kPBoaxDPPyLoQDLR3c9Vp3dKFrUEaJYo5M7abqpQ6PsrBPSABEAa",
  "key40": "5nwXpB6Q4WPJAchTF4quXBuAxVe9yMMC7sXTsMoCA9Z9n8zq5kLbvNHbsnQPt8nKmDsjhdyYdF1iHFhWseUaFp3x",
  "key41": "m8r4gPHnDbrkKNJ3hzR5gYpxgBbnY8rxj1yM19LEwV5P1MyzASHyV7yBMyKPpa6YpKM98JxA8PU3eHq8Ns3UzwQ",
  "key42": "26mik2Sh9nuZWo96SoRwTepxh9d6bMnNLFEyGstPUwKpzMtL4c6X6tqXBcXSzyGVyrK1aLxDpSZzKPGxenhweb6m"
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
