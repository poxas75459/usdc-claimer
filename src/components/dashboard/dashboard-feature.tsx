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
    "2DmEceDodF1kDSgCPC9N2jkQ1hH29Q8d69R65oQm4HkuJL25f9u8An4m92G7EQaEnwACbEQez77W8Bsea7fLiXEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kfhMFZNTyiRW6CemkQwxV9ZBKqLoWmLJjYrFAwecdx8sE7AikVqbuN2AGkodVUWGYtXvdkUEmqj6rzajKSmBFgE",
  "key1": "3WN6zpvB7Ko3LruCGrChRNP9fWM1KjoYQeZR2R8YtmizB9pacZWuq5SPVQXSCLQwGWyt6nh9KgNxaWsftKLDCJUa",
  "key2": "533eqwDA47gm8Pz55d62kTcjf5V2KAyQ6D3UzVYWMJZDyAKhjLbDQUqQ9GL4jdMSAjEgqXTjdmSRhpuZ8zrj8XC5",
  "key3": "4Ce99iHqe3aHRduWHm18ZxidZz9Qn23U339GZurvxr4wZ2TumRm5Kagb7NXeHUhZgkCcMnBknTRZGymkrxDG3QF",
  "key4": "23fFLNPim38fZaNVSoeaPHkgMXJyqgXNE5CurrKGJ58sem5bcw33DjYF3FAJ9SPoQjzCcjbYVXBDebiDSWbuzxgf",
  "key5": "3c3ztQjbDxSyJUByZ4YRtLxtutAN8MdDMYbsQ1693eD9z4UwvypBvhLQhqASxRBPWNiXCqRywVt8Zci3oX8sNE5n",
  "key6": "2AKHxYbRrdGC1b4rLBRj9VNzerv1McFPdg3NeWPAHTd1UgPDzhRiG2XjisQwt6Kxh4cPmXbhP27bC8jcwApA5Ftc",
  "key7": "5TdzMykFrry9wTocpc9njwm4Cr5SZtozZeHByztpMvNmcEtR5iQw9C4ST1JBVbdvkJEYZpbLFhSkRXJQ5hPgAz6X",
  "key8": "4QrjPi97Lr6f71ttweJRGypLyzDCH6PdZ81iR1LbhHsbDmweKv56KzFbMNTTUJVnjC9tVttQVjDSXGcwunvjkiQ7",
  "key9": "5PNd4N7RzSoLeNt4rPv5aUw8qQbwroQH7U4PanyxvEmJuzS1LJMyazK9uhpjEjg74ax7q131KExDXxWvJV3yNtKZ",
  "key10": "3WkHuWmbkWm5ACaxSBhUXWo51UPux9sc8zfhZ3wTzscuSo15UTbpMmr6sbfmHZGv4pNQ4xxLeGMu6bnTpdgvEc1X",
  "key11": "44zoBuW334kyzraEkZ6CrXo7c9ZRDHMYYM3fqhECfatHhn3ZxwgJLhjRSw2yktaW42ARRigGgW61zbySuskBNwov",
  "key12": "4GFPpExD5aRi13LooY5GWuQAG4gqDPPa9ihmfEWEicNXjhwLCGWwjPQ8PzD4qYNDRtXRDKAroVPtjHzv6LfkUZoh",
  "key13": "UJMJVpvLsUWVWX5Mzt3TMuYFcBV8fgdvy1fL6qwrdwxVTEMqzm3WKTgpww88PmJcmfVeFBLqfVG52KDwZJ3CkVX",
  "key14": "FguM6riK5WPkMoWFeAfbaAQN4vNFQ8N4YPgjJ5HRDDVtSDoECLPZtaVRVeMwQrQFmxECtds8dqU8uBUcGNXkM8m",
  "key15": "5APXwdVFgPyN1du71URNh1mKwQCqzHTcRbV6rga3xGzPJtDdpyrtyZ25jRcnhJkCNY3vsvrL2t7j4oLavaLquYeR",
  "key16": "5dVPbB8g2NTA7QNgQEkM2p57pUGJ76U87MLm3NFDrL9SMK2K7GLepHVAoHKXpXC9XS8DHyumSHPpSwHi3m489pT5",
  "key17": "4S3v9dzDNb1hdZR2YVwTUKzgp6NrcRUjLeYqKGZg6iR7pPggQcy3kjgq3xTotL3J3due8H9v2v4ZjFw6X5GARCwV",
  "key18": "48ty4FuzjFggfhbEEKDZwmSa4T7UEMzZz1gGtFVa3zEwiXk8MYuVtDVEj1jcJVcxUHTuQeCxkBoGDzVuqqAVgzKz",
  "key19": "2q82ZFAdB5Gz3ZisSMiwy7TmRJqFirrb7x2JxYdF3tthWjKWmiKYyjBYEwEHpdVy3Xd8XC7kTaHYJfmLMKwWjfQb",
  "key20": "BC5vfRx7RbEqZErbHwkjBv2dvp84TxJm6RFHxm6kMw8aCE16Vgi8yEHdqARHMccu8kJreT15kSQcUs27zbDc3L3",
  "key21": "3pZ7aR6wf2E2gu2Qbhjtd3kmydtggy3PAQwRqB2EKr2uiTXbDAswrQN719HP8dZo2Re5HcoczWx6YQSDpYGP3Gwc",
  "key22": "2BMsNLBKQydPg3P2XNSLtzQC1KhYDM3A2Yxy66KvauWMbFvaW6xP744yW9GWHpMNeSCqdmyx3cJk4LhcCn1FWq7W",
  "key23": "24ZSWZBtJYmUUKTKejdgPeDpuW1SiXDFwByH9sLuRCjzNgQCGc4QMy7Bxsv8BWKAisCWzAYcDtXfFTxLWC3CJQ7Z",
  "key24": "4L4ZPRb8DHyzBx6xH6azStN1jLnmys5V7stBU6Jc5V4LuKZ78DQk7Mg7157gbA1zmg7vJ2LEg2tSr5S7owCHVZYG",
  "key25": "5pFYrbxdXF7LGZLNFXKDioJDY2dJmruCotiBWtnBB9dh6vjY1rN41QvMDr7NUfR6r7AtYZHHTRaZueu42wkBpJP4",
  "key26": "4mMrmpYrgAmtEbEqrupvjSyiiCX34zRKD9eL2wS5bzgmJDHoeapKtX9YsZ6gQvMLLPe31ZugvZX2AASDFY5VQfR2",
  "key27": "SskAQPZPyRLJASt7pE5MqEGHZdiwqurj9NL3etFnLUBDpLH2hQm7SHQXKs4T5qXjDkMQ6rSQr3ptxTnMHSsS8ue",
  "key28": "HxubxPG8jKFvk6rv8mQwMEkbz15XgenCazw5FEua2ri8Lvr2qNVqxVHSuYc7bfd97TVKFF8Fa8NgiPD7x3YAnyC",
  "key29": "2gNegFK81kFwzFEnBiFPBZwZ8dytqPpipUXryYgfWjDhMMBWBjDcBfVm2drHaA97gswKRVjAoq91fK25usMbc8dR",
  "key30": "3WqrP73PAV7R6w3hbvmCJCLERAJ29WVCyr8FUzweskNaYJXFiCh89D9Qko6mdvntE3q3UAYKSWYv9RbXUqGtGqTH",
  "key31": "4kLcSfXGMPog7thuiC58uSWJoLPbKchjegHszBphrrV6NYQXtUpRoKsbRZKCR6gtPKqx9KrWp1ghbLugszRhgxXt",
  "key32": "dhxAtnJndnnVTXFGzywhE8uFp4B21TtLR1vGpVYrGFfqBhoQYQvbG2sdUMsZVvp4bWENJo5q5EqXmAhwCsTGRpG",
  "key33": "h6ZgTwaL8Dnm4rU1e8rKAShZsNeaNjkh4RV7EGcH3Q6yx3GXDVK2ELPe3TfxVqn9KoBtMMStCAnU6W2bXraUmYD",
  "key34": "WwQ6s7HAEpcRifNBymjtifuiea3P3ACQQcpJgWWyL7VdtTo7dowDG4RHMs2hsKViqrb5XyN1FuEb5Ng9PyTbuHs",
  "key35": "2y8YzZk1jVgDNSK5HJdynGFiN3Xi43QqkjU7Rga1HXmyP6xxVam5MkgLRkCYgRZijD8mjcWhCyYsaJtuqbkcXV53",
  "key36": "3FXnHpsxrBPgoCyoAPgRSPqCoqYBF25WkKuCt35wANCj5XercDG6Dx9ThDG1dNqHmsjJn3wiY96nPQjQDGdLnHFS",
  "key37": "61QW2jFT1TRqeXqfiEGANvmFfqT7MXtP5DYRMcUxYCAeJnC8Qf7gZjFUUnamJZedvtsx3aQTYZN28ik1wqWQBd4f",
  "key38": "32fEmrpEqrqBs1NEuS7CevNs54RMNzLAB58gXqnwGJvJT1aYzyZj6JiCbPvuzTazbCH6gggbq6v9DbCTPA9gpHnC",
  "key39": "45BQ4D9kyKZJhNBH4aJtQSPBRu2yJFtt6mb41Gmx2fVZqjihFxyvxnwi56nghEdsF1s1JCMqS1fhy8xzJL84bKPY",
  "key40": "omGuEXPb3TYkAiTqeT4LRkvBadTxFYrehPkbJryTiWZiDyDzLUVjqWTJqSwcowLwYPhodWvM5YEPnWXiLE79cRr"
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
