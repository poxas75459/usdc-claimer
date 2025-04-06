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
    "3bA9BWXTBuS6K1oe7c1cUyZ7pxZyp7BZrFjXrjJSMeG4euhuxV16dCH9pUkDHxA8Q9yibAnF8uEeKP1RRwia7LES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sfvx8xjBQ6LRpKnXsvWoA7ZNYMHv5AHfkz5JzGnaHTLS7A9YpE9x1a6DWZDveKaNbjp6wtJaqhfMFvyyJAu3D2X",
  "key1": "2yQPPUKWxmS7vsWBLDPrSZ7sXEuNw9bRsxzipVbQCfnkB7cs2XcUeNBW3RYXf85ZtvDkFg6fEBFNBaWXxfshy97x",
  "key2": "3i9aFBh3Qmr7WbqDvAuC41PTVkspQXJj6e3C738ZZSp7YqEqvpA6L8bfkxs2VezseLKdEUbiTyAKv4DU4vkT1rg8",
  "key3": "26CEc8PsAXxu1bhqQKTmkYQdvo44v7u93EuKcXyxrxwt5Tc7e44o3r1RidrmoxyX2xpfnHzrby7HoBXWzz4GUvHm",
  "key4": "4phVWGdZXUwVqSF1NLKvJqbMYUN7JvgF7cywxprZjkRceSgohmk6pfSNrjggSmhcpzMckbBgtZppXr6PgEAUCyFC",
  "key5": "54LRgfhsJE54TECPTWcfdgMez3Au9r92DwynKfZ9tAThqpe9A55tMos5iSAtDo4hEGyVu3d5nrP1MpvJS25T5gLx",
  "key6": "5hTNZzszW8W4TC1JGJ4EaVTnyVUtYz7sdbsDGmLeEqFr9uRavX24mNfajnEgrL85hqRsEpKoBbsxyx9sXvLPQNR6",
  "key7": "541Ye3Cr7SRjjKKA6bZLpF9yHWqp5TKqkqCm9rQEzp46nJzU8k8k1pAYuY9f61oH21i5dimS5ghowTmF2mtdVsJ",
  "key8": "2X86aFjLv3tajTNGQLethzimggyao4Mutcrs8fRteeARimrvYAzUnfWTjbguSuBFG3FDe7oqk5EmXByLPFpetQmx",
  "key9": "5rYX8NDovnDdy4vZKgUYEGkpQrwpWj2tuEuF6Dc3BwWKbXZ3c9Ku9GPJCfyG3vadumSudWii8ocqgoUenvASEvax",
  "key10": "5kjLa28kH4NNKX4Uxz4rm3fsJxPVMExLm1k9dQ2eXf7s9eLqmBSNdJX3T9xTpGGFk2xwQANihtdcSKCwUoxoiGPV",
  "key11": "2C2JuqSmtru5RwTdpTxMBbfs4w8v7RxnGevHfJFRzTEr8ppngref1PEtsZtkhE9tC7GYofodSRfcoJG45unV7y8m",
  "key12": "TAd65DQmTTXkVZ3JNPRXuXGfTeJgxC9d2dJfbqjjKnF2sFakzGGqvfKCpbpfs7uaZTwQDKgXJijYqfGRmxz6wut",
  "key13": "3H5rvir7tiCGVFEvyu5f9ucYQP8jnV5zwcZns6pxRq3gd5AAsroDQJU2LWaZdZY2DWD2bKS4w5E6gb4iUTNLeKGt",
  "key14": "5KSzjwYGVQ54ZQmJV5LRkiKMd7CkQ1XKwotw6xH6qGdZPrWiPnCpHyJGxKmbr1PMfhmPwdxM4oJ9645easEZyZ5H",
  "key15": "57MUCEeHZdnw41en1hyucyXP2uTgosbwnz6pV9YG8DptjY6dqhBAg2ua4ikjkFZGUNd47UPpieUyv9fuRPrphj7h",
  "key16": "626E9adQdhSbU4R2pekriZo8NUgrroACFPaAiAb39iRwdXthgx2t53H9MDSHorYZtvcKDgdn5PojU3P3dRRbiShN",
  "key17": "GTjX6PF4AyGoAa8wwRtLAaGSgJotp1HcAaQmK1kAVXcP9Jc59AXej5MWzSSwgfPWHf8Rs8ghcHsAjCBJtX7r1CW",
  "key18": "2XvsaMC6kmZfgMT2FENBrhoD7g1h1QJtLdJbFxQS3fichfnCrFzcnspftESYQv2xeDe2Nv5cEMPgQSyLAADSFDE1",
  "key19": "t8b2u2cvkJf6DPTyhStDmkWkBVV9pHxy1UnMsBxFUDM7eFcaHz92ar5rUrFWupgAhygy2bJUCFrVTEXWdtwTH8C",
  "key20": "35wCW3GDW9tj2LYDSQW12bH2cMUytmCJvYnK4ww3hpv6ia7ixFTayZa4M2FeEpcW9fc93EzreWRXHw5SbuWSg2T9",
  "key21": "3sB1B3nP2qsABWmZ66aQwiZfULhTgc4iSeS7tBbVHfw3LKzSKUoppEBLHDnagiSswgmML8ngzZAktuQbWu2brvFg",
  "key22": "yWwGvWkpoVBob1zLCopgajMWPPeqfxZVRoL53iYY29zJmHLeseLcJU5XSVMGfYvwUa8n68n2XfpN8ut32vnqWvb",
  "key23": "3zLqE6caVNJRDWLGTGCYdYS1YZXW8Dnjs3TsTncSuGXMgeoTsrzskeY2Y8qxUxhtYrYyaWwzk8N4R3dQr5EQePjF",
  "key24": "27M4qWNgFiYg6U58bXk7PpnGqCsu739gYETzbWjovWb4KdvpsZrmjcF7fBUA5PzAJfxzJwLUZqgoR2EJ81uNm8DW",
  "key25": "3Z9vHs7SbBtBtQhHP2nQ4MnGMKwSLnorWFapDwazam56sg2Bw9nAt32bM1kqCu7c5e1NSBi5NnhajwFckCbKPhUX",
  "key26": "2Lf957U24LyUXjTm2nSbCQtySdVuA7BSTtEgMKtXwUewBPr4MgqYRaJwwGUMKT4VBqpC41pPnPjM8o7ymG8bhKsj",
  "key27": "2QK59PJxZd7xCQgJVNPt57u8wUNW18fWy7rQGXJD2hKYdh8jsrAEpfc6gSVS2UmxsJaEeY99XsCz7wRckvYps8Cx",
  "key28": "4jVFfhv6ePUu29aZ4af86qZuKsWLgMEVm6HUGNHjk7LA6rdKR612rMYZx2UsTJbBWkzoAwdgyFFfao6eFhtm1y61",
  "key29": "4gZ1mRNqtrvBR7pcQAkgWBHHVzwfFYHsVAMAgENS1teupDrLLvQ43jVgwbYYUTUxo1fkaf2VGvsgQcqBgepzQ77W",
  "key30": "2mVodbyY6qRpWfxurDT8NmfVK7Sruy8BNM2iGPFryatgQDesTnVXrV2JrNmjNPqMMsTRXV1wz6CasZzL87fheQ68",
  "key31": "pYUcUsGy3pZMczUWJAp6u5Z3pwHnxryd9mv2ne8ZuzUodyQLq6qviiADE4239SkS9iHSiirR7WqBZUkJ1AqjD7c",
  "key32": "3YhycoVk3bP9d2mLG9NRAia5qamiMmHaW8zq6P6mKWaaePSBSK3sK7v71MoMf2eMCfdNhrzDoGucuunLwp3fY3aU",
  "key33": "55weUui6WyG1TeYPPun5yRbMV8N91DDTkJLszaeeLhGJNJR5DuAyHpStttS3njxR4Ct33XBC1z9kso1m5yoN8yE",
  "key34": "LXF8R7dyW74UNX1gKoczFnzdJ3SdTKsnHfp1JJgwGv2bvStcVaMvsnKm6PqzZB2d1DZ8e1tH41sbKw2JKLzp56w",
  "key35": "3pc6CxHtW1MCtCeMAC7VnomdunFc9vfEHTHrnZycymZxXnTpEVrinYq3p9EN1DP3hnu1cYWJZLCoYDg3bqaU8pP",
  "key36": "3BuXYidJgVorLuwBg6oJ3U3u2f3DWeM56HsquGqnpQiBWNBypE7KCMWMBn3xqSYbUBCu3ciVhbEEesJYMNokdZ4s",
  "key37": "2QKk7svbM89QVn21MzmtkLAL32MuSj5n5yBgsedPCoeD9mJNbwf6vJn5VEdXjDs9u9b9iV6hWKKMsQZ9bEc6ymtb",
  "key38": "5kyVykKuSEzHqikfvRSn57yxJd8AxuJu9NoSCzJtjFvRMKD1YWZfLiAHNtMKsQRw43rbPVYJLyYm3gGoeLV8EeBR",
  "key39": "54Ri8Q7buEukzNQ9ULnzRZfbYcdM59gVN4bkfwm5sLrgGYjtLGMhK9gGFBrc8XjWLK1my86nj2aCaicfVoDC6wPf",
  "key40": "5gftQEG6kaESbkm29gka9Yxi9ot36Q74pQAUXAiceuvhsACZ897WS3jpPa1JjNfmXXiKCQFy2Y33kFVhDPx5vrMM",
  "key41": "2GM7re37RRt9M9mF2Nh9gKJH7LRicMKm4UxuiJEDYuTLjAYRc2YmRNAm7tq742JnAar1Eom1dfCE4JtVjFgNzwfu",
  "key42": "2z2nrqJvYvbWVgF9SMnZc1RfnobGZsageSuCFxT2An2tbZVVPVH3oEvitq5Y2cyP1GrF6VNTiMoNGTw4g2UXG6zH",
  "key43": "5eVbY2xhEcuFMZLSgDrdtAABHgm8oU8cfwn5aQmnW6qL47nGHazcN5QTnGZpW74TVCngCfyRpwttGGzSJm7pn1jM",
  "key44": "3G1GcyDHGdHvJBAy7xxuYf2LsF5qphbYc7mCEmgpzrzqSJLSW3mizm7yrhXjHYsLESxqvzkdp9geyyZx2JmQB7YC",
  "key45": "2hS7WS2CLvfwdkGuKiqHwDnaMbqRBAgPRuL9sCpKsuccoJCeNNdt46gbsgTa6VvvUFmsMJ2Rpxs7vdwsyRu9FdQ6"
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
