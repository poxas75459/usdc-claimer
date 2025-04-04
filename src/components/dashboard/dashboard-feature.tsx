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
    "3yqUMg2PLPpDrn6xCU48ifg1JVTqBbkQu3yZfQikqSwEoCjRLBxyzBoUVpz1gQb9u12FZUXxp4VFsjTqxtW3XcR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bmycbZaNpBQqeTPS5QYPWwF7dW3RcBp4mod5XrRawLs256zcuy9R8wZcZc8UiphrMR6Mh5x9NBNjAsWYtKdEtQa",
  "key1": "3DaMR7RysSFW2vp9SMK28zsfjmwZNdA7scKQFBWwAbzjH8dHMkmrD85iMscY4Qm13svXyi64pL1SR9WTWCHdBFfF",
  "key2": "531gfb7mXgh7bgk3Gkh1mXraxQfFaSe1naScZy5z93uqQzc8HvUUx5oe6eoh8vCb1ausCaKQtWVi6xBs9Q1NMExq",
  "key3": "4nNc75iRHk1fbSMtM2xbTwGNpuajrQqPa7gvBTVkXtCaRVugWQcXTxCVGS7XcDW754jbjgj1vgoQuH1mpyhjY4ke",
  "key4": "3u4nPKserTM48DJ9RvXQ7rrUFon8s7HUcrocvbvdHJ97U81cfnZrjW5RqWGMjhZjLYJDzkaSv3w6fbDAc12W93vc",
  "key5": "57KrdWBbitTtdohGoCP9F13BJjKoodtiUBu549wkRHXcBsgqWzHEeQAzFj8rh1YtFUqtW3gKoR93BvX4YPjnm8SQ",
  "key6": "5QgumwSJjo3cuRH33pMrzDonMfgXneQzqcFTQPeV8um9H2As7coQS1mFawncjtkqW9YjBhcG5ZFwq2oA5a6Anhyd",
  "key7": "2N82HHCA4uto72AuiHwY5ZC2poyxYawHsHpVJ5Rc1pxRZ9RsnW8n269kmuUMGmSLgnTPE2ekp5oMBhxNz2mNpKU8",
  "key8": "64tDzTwGiSQgtws8ELRpmTe671mwRaB2gmnh43Knw4b75k5PsZtKtSj88KywJoZXxiGeLcESPgptKghdewJXtBfE",
  "key9": "3py82R8mxiXsr1Bnfjnan1UKXQ9vqaThZcFY1tfT7LTgGFxUtvzaUsVKqRD3FXicXXDqqebvq3hgkoaTpJcMmWw7",
  "key10": "4U2rhYoyTwaEtwtSxN5yPaX2aabFix5bXywkrwQ4D1yJma5eYiP5uheFfvRjnpmt7Yn4iAkhZjybFkL1C7gcVSZp",
  "key11": "3GrtmbBJfLzJPfeNrJzG3dLXYeTszf3gjXefvagnzH32F6N7LRUUVYhCoWU4LJR2DUEJEUndog1mCRyCBptNSqKe",
  "key12": "485QT5LQN4Kt1wUZaCk3vsN335yWTGbuaEkoTtTvB9uvF9dn3vtA2LMJSFP4p7KF5dD6Vr7JcNg2K9TPQKAfuiWC",
  "key13": "5QhWDeHA3erXFBbek4XM84QR4z3gc2rrEmYCn8KoYxn154QPV5Kspda16jxeEKJgSUsrBTj87ZbLReWdpf2HKESN",
  "key14": "2MtZrggix9kL91Zf7KEWsjAyZ474ScAUs22PeXCxLnafKkTMBXZgjBP3oW8G4bXLdsFtDPGFgL9iXVtziQx5ortv",
  "key15": "2WUEpp3HgZ9Q299XDriDcWoBS1ST4L7R7rbQKB3KobaD3yAzuSeY94MrGs4CMcAgPwTcCwrvmjqz5e1xh6EWLaxw",
  "key16": "2j7rVMDZktNp8y5vh4vkhWY38k74LX71xVDVLMg4SDuFWgzqWMPaeBUq9JqyLjZCsq1HLanwuCRLf2ebisnwiCmm",
  "key17": "4jfUUGzCHGJ2CJa7pFkSFfhz7YEneBYcuiWoXTn9dHkT1cpaPDTTxtfGnqjiWoEhi5iPy1Zact4BgUNny5Wasq9z",
  "key18": "4xCQsit4rZfMQFAfQwDivZtHgiosvcbBnJGYYJF9FzvLfmMpwWJfj2AXtQdpxo8keVqfRnP5pkwGZJxDvg6zJoff",
  "key19": "5jvQeVBwixkFkQ24U7C5YPdUdhr9cwWx3FRwzV3djMHqjqsZxXEp4N5UGEPXhYuSXxok7WFwA7Xose3HZiiqk1jA",
  "key20": "361T84f6Crmj93VK1HVkMcudj1TZ4eNvjUgpVHiNEN2Afk14A9aK64FZmEJmksGnMQsYtTriNxPk7h2iGUFDT6ha",
  "key21": "2V7UwTR2f4vZMhrDbZ8MiBMmA94MzJvhjtSJkcVsEF23FcSDMtkLNRuvhZi8PFZnBGqomkmDvPmHTZJacwArvA1T",
  "key22": "H4H3xKspqTuBdmqdtHwdrDk8oY7bqgxZZaFKWrvpUdbYSNwnoPtVVNLVenoz8NRcf9bWQvpRMCYRpBHx5UXSwtG",
  "key23": "24dB2uoC4vY5yUKiLEsBWiZ6ArBRBdjTQkwGSxKeZvjj8Y4REX76pUex9nWckL89tNx7RyeC2PpvSeKmVgfaubcE",
  "key24": "28DhnD9JwvUhB12uzHrT4v6brQVqzQ9FFhVgtoHiFJn49qym2go5UKCrmjaWg2fqZLtEccVNaz2pVqUBngYvKLrd",
  "key25": "5GpdhAKuX9KHbJKam9HE63jHiScryJaq61RzKBFqvoCzYSKoxg3XboNBXgP1gww1r3D4Q8CpqQUGqtKwHyJyVfbB",
  "key26": "5jm5ruyY6tpQktLWpeUyGPjqW4poeqgPJYFqqfrRpYYP3hevk7e9wCJda8M1oY8L773VymmRq6B4yq6wthuCiFEG",
  "key27": "2qF3o1SUT57TL5v9kucwJBc9HpF7prAc9zZFShpAMXEU2nQgmdgvWPYXHYoTXWDNUECFaxt75jdoZZEvBFrqM6ww",
  "key28": "2cSX5TCUBBJQ92G5oZoqmHrNqGiM3Ef4iBMaj6d51YesDq8FWSW4oUaRQ6qnS2HXxLKNfkGafXVtKCYqXyWFHzuL",
  "key29": "4babwacyScV7V58Go3VbvBN35RD61Zi7hh1FBwPEQsAZPuh2utQYgYGBSqeJiXVutb4nx5ohf3GhpJLFNhhurWFD",
  "key30": "q46nJnCdLLVza6Qgbe8F7Q2ykr3q1uSStuNwG2aeDqc9cqgb1ZphFwZiz5RBLmZfwBtznjAuhXaWyy5Em9apaE7",
  "key31": "5aFX5YpyMazTe1yShjk5n57Z6pdjw8nZ9spBcdbGJzhCvXUXez6o26hAVZAb49RenNgQk4oncJmNc1djsQv5tkPh",
  "key32": "5p2Xwq6YLRqxz9SCFmSJu3ed3TM4pstXC8d2QBeUHwrW95XgGAt2Mqi1kLeJwauPoH5PzV6FRPaT2N1WcP7EHcZG",
  "key33": "2pZeCFDF96i5GdPG8dwLnauzP79npVXUu6u5Wb3KoFgKHkRjG19aNeMoTBytbBmwd4ZmLTNcTFZjdcuoLGce9BoD",
  "key34": "5PX3amyiw7GkzpfCDstTorBwYKT6vmM6bZpnz27r62sA1xYWNtzCWQpcbXBzafzNtGB6hP3QFMct7j6ASBy22tvL",
  "key35": "wP5KHGbJBoLRu4BxFo1dXkp6yKuN7rDjpuJzLx1VvVGbnhJWbxLNYudAdo3hgWQJSowoQnJhYsPiYPvnHbm6Are",
  "key36": "YzR62756wBVei6PdgJuQPqLouaxfobPvNRXbyNtNv3Gycdv5jWS5ArQvUN8kRK7PUUhgpn3fUr1Nbxv6YZZV1bN",
  "key37": "3vNNecogAyWc7y2tKJcs3zKt31ER22EBiXaGCDx7ZR5nwoRY22D83FwC9n8ebbdnv3mGUev1NujMLz2f6UKe9XGZ",
  "key38": "5nZ2zRj7zUDtF5H28K2MXP75NqP4hd7LoshvXPdtgJHM45EDn3D1HE8ido2TujGBARQZdjSUht8kYzZB4phw9GWC",
  "key39": "5dPEd6DJdTSsYEFhSeisbEreM6u3xB8AZa8CUMq6BcEQacy28LPf7aN6aPsr2JPEqxji9kbY56hBifoXZ32qgxVN",
  "key40": "o2THf1D1aY5RvEFYY6NNyFGkPWg7i32yU8oshm6ibvFztstNK4BhvXa2Bd6FwZDDADez7MKEAz68C9B8sWUGfKp",
  "key41": "5Jjb4w2UzFgW6BgHxqSFod3yWpApziQzapkuwrV39enjp9wyxxNFdfRPsQx9CK9iuABdFe2y9fqPJdPnwtoo5Tt1"
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
