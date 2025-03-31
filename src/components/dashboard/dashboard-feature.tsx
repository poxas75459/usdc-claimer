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
    "4F9za4dhaKzK8NCLKet9jVZKzFsMjdKhwiwRGLw6uMYyE1xCu42MyQuJpRgmwMsL25CDZPFBn7Cpfjb366uW29dS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vzc46P3zKC85qp94LnmcGH94YiZSfe1BDc1BUUH3VaPEMSPbWo7CdteRCzgadqgvfcX3XS3jtjsKkJJRgzCyUTX",
  "key1": "31av9K8SfG6SiNTuMZnVfYPKtmEPQJ6xLvtr52v7GNA6CHqnozkZuLj3kHt2CJcTJXMPFVRfszGP4khyuwNqt6NS",
  "key2": "9Cq7BujtVrx1AgCiPttZtv7nxETzFGTM5TgSDtjx8yHdSWfGw8dUauK35LsSn8ZLfwG37YJg731oPX7pPqeEYsJ",
  "key3": "fiN4SJ6XWLoXp3bjWZThoZ9qp7R7oWHGPisPu9sCTfXhixe8cGrYpNcy31VTG7CMm4Tz7PULs5CNek4GALZJ9vQ",
  "key4": "3tYtthfaVc1VKGpTLJNyyJy2E3qyLMXNW7x2ZMNmjr5S6T1PpVmHeUA1ofufKR4itMzwaTAK3RW4DgmL8ZQxw7y5",
  "key5": "4GhZLz48nBVXp1ZXVXJjryTaTLFm4BMAZBdDhXDAcu1eHLMvc8vY3uBXu3xPr8D8eoGiQqGZcng3UHeDVjP4rAkL",
  "key6": "4MKa5QH67PMFJe7SRk28YiWoVaq7KxrE2Cdo9HoVt7Pj4gbX1nT9PZNydYmjt1gFDMTwocu5dZQ9kqiRn4vuG5sN",
  "key7": "W5YaDrG4Ayy7uPjbyBcDg32qoJkxtfwibBtNe3y4uWtsZHvFxSLfcxXQUFphtvAxxGWjRBMPKk4J7M3iaWyQBxU",
  "key8": "3jYqtMo23N5gCcPQQfi6PSEdBUAkqFs8ZnYvse615f8gjPCTPV1du3z6iCNnJFU3vqUrD53E6eVtrsWPEjzRcMz2",
  "key9": "2eZwJJQK18G3KHugXTxftSKfRK2JP8cZWJoXKh2pbL8FsF3m6KrNc2V18JWbXbYWo2jA479cwCEWjtz5T92W9UBq",
  "key10": "2w2QGfHRoUFRDC7aQ1Ni3d72z52KTh2M6KfiAchM7PVjWgkYjXs1yMUNY74iDMY3vrD9EXAfVCfT98DJKZHy87oc",
  "key11": "48FEcymtShc8q3HL8ZcxKTR8dfnbY33ds4xvzfQBk1DVDhfzQo4T7v9fyUy6Sa51gd2SLfeZrqzXrFFTKcUzT2rs",
  "key12": "4w3oXJ528vMDhymbPuZ67Ezfb2vv8SUfWFmNDsiamxy4haAAfyzQVGYmCEAYJ8ipq1XTMbi46AAb77KU9EQPSVpV",
  "key13": "3yKEDHDTNG2xA4EzutYcnr8XyQG4s3MTRbbUd3Udt31rUDsuDvxe5qVedpeCa6e5Y2xwzBnbqzdNsSxqc2kbDWmz",
  "key14": "3RaVtFNEqSD6bt1Lz43J7MQvqgup1CStJHaia7F5ztCFg5JiMs51vjsBxK9poJQFseQm9KZ4K5GkQAHMsFfjpFtS",
  "key15": "AUAEaeVaBGa5g66njygxpPDiKaTEExe5KAF9mXCfN8t5sVhfdm3PHbhsTS5Px16y4JN5JBpgP1jdNecvhriJ9Xe",
  "key16": "4c8F4nKgbuTUL1y98RBVV4si3vpbMRGaevBSEWGqd31jV7PHYfXfoWJKDLz9Csthv2Lk7jzKFA6PZnpb8DPSARcN",
  "key17": "28jVRu85ev8DyrwYBwAAyHc1aKqkQEPPoQM5swtBRzTtCQPK1cEUCaybbE44ESxf5vcAH48LpM9j7LEakQ8pSNzD",
  "key18": "2tkA1LnbRd1M4VyGT6UFiQSEnfNsZBsurmZA8rhm5GKnabJJahvPQLUiDsGWmA7ugd5NGNDopmim1HYc6nXd5YuY",
  "key19": "mTYZe7d9jasunBTqFEcZDrt1QN4wKsYcexZwRDDQgg9m68sgmN6fDat6jfGwAZgbCNgMmkjRavbh3GU3YgDkECP",
  "key20": "4xojKQQVcZmseZ3a7TYsUQ6fCTe55Wwj54USdXFxjstQMJsQgq6T3qhj7wN5xDpL2ziak8VqLbTETWgTSA4Hti47",
  "key21": "d3bRwvVM8TqsChsvqLhzZFy5BVRzUgWLdVTnwDPCQieF1M4bUxj9T9qxpSSfVAfa5kPpu3o4hSWw9KMTBHicqAD",
  "key22": "2DTryerVsZve7CxmQNdn85RyqJfzhr4V26AkXQUZ9uURngeXDL5jFDuVgxT2Fgmi3Jx4skeRrMRHho4SY5BKmCjL",
  "key23": "5B6uioxs5qrvAuqrVwZrCa3Cg9U55JTvugnihESRxZad5t6Ras2eq6UVm1WSF5fTihwwzNMFt667Rt3DQ28B84v3",
  "key24": "CXe3VCbM6DdmrUJgRjjavvbjpc34HvfPkpvYEiTowNwmtALHq47qEsBSxFZnoohmTbfMezY5srCP99uD7i2CsU7",
  "key25": "bHSW9SN5mzHQpifiUVFt4gN3fiB3mCTgf5URYvWkGESZ7T3zQuJPLmgUbgKd1SnceVBBCQWPc1XXHyGXBqrLHH5",
  "key26": "2dPTJPMTbuu9rQJCPT6Vzy5iwWuyeBbZZn1r5xtU9EaYo6RL6JjKhaouQpZWrkf1kxiXkmhZmixaMiGWo3XS4WvB",
  "key27": "5XgcxkHZXfs8mMiXcDB9NzMHxP4HH8SVuEUu6cRjCAAWzCJxC4wKf2rQfMX3H8VGXXP2NeimgrsPu3fQU6NkZY2t",
  "key28": "5XUoshjNQJD89tnSDitWWiqwggbVWStktUm32V9pTv3ibUNKnGu22BQvQJomcDtg5FJS171eF25qxbjKHPqeYKjV",
  "key29": "39tPm8h3fiQRGa61eCRwEkVn9T25vN6KJhZQg4FXeoeNez6ugmXuGf1iYuNM3Zos7M41XxT3yU551Ru98T8B3SWf",
  "key30": "3qPUS2Buy4GB8wkAcBviansriEQb4oLHHUhAeryZRFrdK4ehKefK62gxj448XF2GfAqKLPEHpdHNRA36xYiEnbV",
  "key31": "q1rYdrZpafTBjECEvSRnKa4aBypACdyKW1StVmaJbm24ygztQm1PfHinKUpQpv9Pngto8WgNqGGXjtG9nKrngoG",
  "key32": "3HF1sthR6YYm4G56X6eSZYgFZH5u5FknesA9Hwe8KQfaUViCLpLRFE43i9BYkrngbte3GybnT1F4XwNaZzgYRwYG",
  "key33": "2GTpUDSmzw1rcUDmQ7YBJMmFCFB1ZWT2hK8rC67cop13Dk6WxefMYExFnw4t9P6LV4Ymnu4DNAvQNtzJGeLypip9",
  "key34": "4Sm3KEYL1iX9wDkTWakyxrHUNT2C9BDvLXuLxaPkudKpjugodSRxBkNBAqDAiSupVCFtwRYCwXJaFZk8DpTMXyAq",
  "key35": "4FawprPuhGvZzptdXaL1hMrL9XPgFfth4xCiG3qpkiBHLNyjnsgr53AszAjoXuiTEnVsqq3g53xr5MHFG7emLrtN",
  "key36": "4NrAxLMZhdZW6qnqQjWjwGttoBDkdKJ8SNDUhWattp8r72Esy9WWXusiWDeDvmQ8P66xtwze5CtHmPBRKCZSX9BJ",
  "key37": "66RQwRRwkARVGDZMYEfGDMFxDm1nm2g1p2iYt2ZD2oYCdwAeJQQeEAtz7W8xdDf5K4nuXR8uxcNhjDtZZDfqozfx",
  "key38": "57QCpqJSJTPpbqvyx18uQEuL9NH4MxXQ8Q1uhcAyvfC7yRmo655aWQYNx63D3wvgETTeSziB1QqkAKYWGB7iZuV1",
  "key39": "5oALtJwFXtN5M3w7FEmuyZrS4afoUWEQ1ciYNjGeuGVDsYuMRabiCt9K87uhTynKoJzV5dNwZg55C3yEJ4r7FEXw",
  "key40": "52ZxgruBAyADDdD1jeNSjDkKNbBhzRYi37uF47g6BCoWeBrnuJgoAMGQ2BaJXeeTPJ5rBpepHMVwLbJz7Qn6Jqt5",
  "key41": "crHd2cTsHqAapWhp7mHisN5oCf6T8qyPD9PLxrnYe7HpkoTdw4JRFyiA3t6kouYLjX4aJ4XLHvjpbLKn4r5mf5n",
  "key42": "5mde5sNtJeirAyUZWzpA4gr1VKFS3idZhcxwA1mRbfeuLwNoeJcDRbPUfGznHvwu9eTmoHoxW8nSsPacKLmgnv9F"
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
