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
    "3wrP1y8kdfoiLXKigt4EXyBy21yJHeeaaYzqFfCFtrbETB1s71hyMZFqS12VsBVMSm55VHd3YJ23kVZq3qsDafhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UoJNmFizajGgMCrx56osDEPL7va7DQyVxyhn9L4xFwhzN4UAufh9nmT22riJXqEiELnNkqSpkH7TQh8vLtWJvBV",
  "key1": "4wENdvhnNz7QRDi1DPiYuikCnVvRRRWmy3VpnV7fGmU3CLjEXVYZRD3byegVCYvUsAfvfYHemodzet9HZNLbkrGS",
  "key2": "3ChHZKHS9xnb9S8qSfCKat71EiwmQmeLfSuF8PaqxiE1GJY1jz8YS3F5DTQTqPvLTPA7tTV4WEoUnLmViCaGfjv3",
  "key3": "5yEmTvVguJo2SCcG9cQegZS8mN3CqWf4cnye812UhMah1yRjMEBHiTvghhKG2kmdbthjuDoSMEuPhBoNYkwXHR76",
  "key4": "2u1qGuRwzpWak9UWbJ8jtvfTRhoX8jkJB7Kv9yxF18iXrgtRcUFBfnbxeQCypsyhNsXXSUReU94zs1epU5Fm62JC",
  "key5": "38HADWBV1Z2pXKDpsNr5V4hqrvEjzTwKjjK6jceFbFqDiQP5BvivTGNh1MKDZRZNHcxBYZaJSj7BczP4zB6HHx2a",
  "key6": "3D9UDX9TLWTuVNByaNN1iMsZYaPiJcxb2Q3EH6GoBmGAV1Fo9zS2ASnp8Yn6WvBrpbeiaP5CG9c8rUKTZMzjrvcY",
  "key7": "3ZKMxq9vAzJAfsn87HcGG97vwMLBCXQt4kcAHdkyg8vmTgmtgAzNxQ3PBgQ1Tj6bChCCR9jdCY2exRYhX6cwmaSt",
  "key8": "yjh29wgzKvBo2Fih9cnE5BF4HnFMFjuy8iMN9JA2Y4FEfykagnCy4xaNHeN15vp4a6khtiFRyrXLdiXEjSaK76U",
  "key9": "5nXyWwciiJydanbjF7YLDiNH1F578c6cM4kYEMfQTx5hzZxHZuo4ShFZvvvvb4kWxC3bBvgkyV3wvFP16kbMAzno",
  "key10": "3LkHzsr4U39KWaStwGmgrBpSvTba4VMFaZ46BWo9mqgH5QbbeKxXsTCPMuZLPsH4edEmMtBsBSzBqG2y3KqBGGEY",
  "key11": "5hrKkuu7wZbaC2nw6vAkmBEC5i2Z1RBd1nEQyGuSo8iSzbCSS2vwPNa5bxrvQwbh1zjTzF5nBy6matKtYHbEUPdK",
  "key12": "3hCsaMz4nER6QiYRFAezgmLUtrE4HpnmUe3rxcNGZTsJCn9qfs9uUxG1ehRatkaM6uYN8vxzkrb14qeVFZShDQre",
  "key13": "ncDAhCd6yXCRjCajqhxDuuhUk8AUAHLBPWts83nJvFW1ukLTAPExuYHMWcZMHKfMcFLfLVujstwBXzJvdNwTGE7",
  "key14": "2ESihKp5GGqr4vVW4Zb9kxvK9uTDhGgDzTY1BhvDWCA17rUbwtEfCAcAF6enBqmrJ5MYE55fCtQjhdHpDyLK7Axy",
  "key15": "5hUNV1fo79zhifdKN363bnKHfPFAFoa2mJ4FfZqiqiAL3GzVPHoTKCC4xy9pRbhxvXbox5CFR1tjzLNN3Uk1VDsf",
  "key16": "2jXR8i6LPa89ZNZ6kwPqs9Ch6N2VSMLoBAPf9nCj2Y7BrA6d1a427w4Q7K2fU9Fkjx2mkwm2WgZcFnvJ4H8ghZkV",
  "key17": "5q4frSSt3o9XXCU4EbuxTQ279Gzg7PDdv4RN4EWzUXSzK4XnmqpKURkv8Ao64DvfvXKtthB1TrZsYaL1McXwrQxX",
  "key18": "2t2eN344Qmv6v3rCizPYUwpv4GaabXr4PZndGWXbxGSAcqYV27rLk8yYN9VuASxGp1wLsNgT2yqXRdBuE9vow6Ee",
  "key19": "5sqp9g1EyW5rKmnbvBQhmU81XWWHmGoiv2yxfoM72BZsqjfZChnk4GcdfPdkcsvFpt9jkmK8r1cxcTznNnWNU6cg",
  "key20": "55c7F6Nw5Bt4nNX8zkmQAC63bid7xwov1zUkwARyj7X9a4nBWmyRhEffzyaCMKoytJZrDxfgCyu6r9YwFdS3PrjT",
  "key21": "u7ED9MAByGjPV1KBzyYANtSxsc3RFtm8aibBuYkST4Rs43LE3KkRXuw3Dth9M7Vw3B2NReCCSYvc2iHpH3wP9p4",
  "key22": "4xZVHqMRvKD3RWTEbU66ZTuBungeREbg4Vm2s5KMVMyvR765A2u7a4mtbNb7cHsiEpWysJbVpiohqhAETMCk8iBC",
  "key23": "ABEe6GqkAhQK9G8c5haCRMXy7sZ8nNGLFTKcD4YS63yAqiLJYPNgsLpeXeiUV21fBMWo2wUxfXvLAEYYMRzPrsF",
  "key24": "4YF9yHMcibjS5rfZLCQc5PEbxg7tWp9d8MJRyA5E1hBZVUn5JBjhBYiXqXY7BGFE1G9cmBM8cLha4TBTJqpYwBjj",
  "key25": "3ZmdP3uNv3tLGq148kCwpTxHEfkcGs9ZtpGMroa3o8UmHZtDzHFTmzetm1tSUzmiLeubicR8SGu96S6Aj17VWvgn",
  "key26": "2TMrFMHqhYKujooS6qEXo8XViKyKwKyyqn6mbcVHzcsw8KbADdQDEVhgGi3kpE1KNAjV5EbJbbYqXnSrywLdf7m8",
  "key27": "337NNgXHSxT4ig3NZMHyWdPfogRi1rQRK523Z2oHw3B8KYsJM2HWWyukNMe1itYiAJnQkMqgvbwBFBcLTE4faF4p",
  "key28": "2fXUB13gYta9EXWaya26ufLDw5D1UWWmTvd9s8kJXxfSFkDbRGBhUuVPDUDcs9mTBzW9jadR6bYNvFw3AYp9erZE",
  "key29": "615zNC2vgUFkDXwCiaUG4GDrrnnBbcL8NMoyQCTvX1M83yY7hrC9PVzQ2zb8YePddSBfHWWNNf2aJR9dySMyA5qF",
  "key30": "5apn4EBR7BhGwcpj2th1P9guUM3gDxmdMRd5hzZEFQoDmaSQHRN81Hiwx2gbcaiKtEGaGyxUsyNuMn3rstfZ9Hbc",
  "key31": "echPLRJMCaJGfSzMPEwEhTR3kgKNr8CtaZAYzfCdvAU8FYJgYjUUUtcKE5y51YiP3btpZeMiD8EyBcvxzTBm6hd",
  "key32": "59VmT3gBuwkbKBK6tMraCZukpkiwJQJFSWmiHBmGo8oBTtpjonmbS5Kk17tjtgrr1M2rhpASgBvMbZ4u1HiaMRqQ",
  "key33": "4METJFFXJEMtNGkMKSotficBgYEU1t7Wr8GLbwVYFqtS5aUKvjpz4BXwy7NFS6UzWemE2uwAsXBKMd6GZkmxbf3g",
  "key34": "3Y64UT3gy5espQMoq6TKYiZ4v7izS6jN47qTA7QhwnvWrQuaERVLpAEmda8iQVQ2f6YVKJHecws4GAvnCN5vDNYD",
  "key35": "5zY9AbwLd4UAUsL4YqgQW2jZBdaL9AFv4FzjNWiC67UScmMtafsFtDahk5LhhivNKwYZGg4ERXARX8QFPGrBtmXj",
  "key36": "3vz7427uWBkoXxFS9p6mTiy1YAd73RiDcWdzY1WDEeJah2gsWqgaQYdyJysB2LXt2PM2zTuGYKwENvvBqhtB3V7S",
  "key37": "fpDBiW8h23w6KgLe8aMaWLncayPfVmwMZK38UdoGGVJVi7VoDCSai92GqdYfxciWrgUEfFfzEKxPwKS4vDktvxo",
  "key38": "3U8Dmu6tAi1nzcW1FKt6MfoszW2HYvXqBfmzD16gkM6qm9y4F9MjivwjUHkKuHFBadZ9EwRh9f3Vb98xc9mzyf4b",
  "key39": "mi8cDKe3VBZv376Zx4ZNqR6hgT3FTVaw5qBQW8tqeyDeNjwaY3g3dAMohQjbZemPxVGtBu2cr7v7hJbDL94mvGE",
  "key40": "3KEAKVQn28gavDWajjNuATR7RVyWRKGRkiGywetAD4NFaWD1rkk5vBQE2Xs3R9apnmhZrGH37ybQ3XLGSRFumwK9",
  "key41": "2kfpqvhNtzYWr8U31QXzC6eeDRNtFdMF6H643CHUD65NoZuTPNMykfa8pN9hJiBVi1MJeBBx7Qmw26CM6XR6k6x4",
  "key42": "3ne32pyUCphPtndAJZ9zCTJZ2D7PYxZ92sbmvCbCCw7NLBxH9ssFv6HegzU1P4K5arTVPSLBaQZ7xMfNb1Njs4qZ",
  "key43": "3P622dTN6oJG75oM4VWt9mJoWsmirnp3QDRzTGM5ASMMeXYoUVH18AyqWxKjvHsytcSQT9MHSry69GK6EPiw4C7c",
  "key44": "BfTkRFffLSABJHsvFZ6ZrjRkznZAZmBPWwcbtQ5z8nB5G2mzsizD44JGFqNkoEqFWxB7NVFLMeRMtH1PjxiX1Jy",
  "key45": "3wYYjcMTaYnWYRcrGHFkXcU3rMSL5PdKZBbD9AnQLuRmWuuoohw6xU3tYHaTD3yM9xin1JC5UQnJ4DrCoqXBDt6s",
  "key46": "4Tg5E147XPfoyD8oXoNi8vd9KTHrVqzRK4qCtEhzJfvK9WfqQPk7EGK6FiXgjABSY7F66xA4WGTNY5EwSjs81RYw"
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
