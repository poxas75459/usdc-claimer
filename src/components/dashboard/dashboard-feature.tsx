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
    "41RS5pTAzhYZCmFLeJfaL6AKUUhwj1ET3yYD3NgoJTsMBMyTGeyUvroEYEAf6iWGq53YRnNkf7MWyNhs5ASDkH3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PvFJt9yogtRSDNc5HWBbEQRMc2cDFV2zEvaLsCcjb5ntR9jv5fHCjySu2kK6UipZWTeCb8wzSNoSDKEzLpXubuD",
  "key1": "5fGLC7hfU5VHtVJEBdXiNPUbxPDBCtjvkyrBBmiWbDh8J3kAGmAymhRmv9GzB1ppruiQDSrEL8F9oyz2Y7rptw1m",
  "key2": "3LsLzNM54y6fZ2F5SboWiFGjF7H7usyQvAFXAkoG5MV2h8Ns7rgC9xCBWC394QVp6KWKck26MXQ8TChyaBwnTTaE",
  "key3": "3P3bY8T8Qn1fMFJfnSiNo1Vg4WfhARfvNu9M5gryo4qx3QnZxzK1NF4P82HqnfwvWnwq1gh2b3FvjmE1dNt4dyP8",
  "key4": "4he9pqsechbGoP3RJzy4PBiVNK6bm8GSqzQhHht1bWidte9L63DPqtVyU7PvnPFseC7n6EJuxuXSLfiCDjVStrdg",
  "key5": "3kcTijrf6c8ADnT4SFC8CwULGgyYBzhauzsb8aB8uT6qmMj3zMk95zGtSCR2uqEqnvVdGDp29HABb9ZDeeWVaJPE",
  "key6": "2Vu9QFSR6wKzhQDkhnmun3HPqTDEkqL23eUC2qqSCqmjHcc1skqWmoAVJHJqLMcCsgEEJ1aAuJybMNusKjq1T38U",
  "key7": "5NZELvJYUkgfg6NPqtxkdnofvjWwiibsn3qg5Q5z7u6BU5mJK6nF9d35eqVJMZxUpbxkPP8yj8sbrQzme5Ag3rNG",
  "key8": "2paDhp6wpzhm8NoTznauz3DgH1uFFGL2qST471BFJybziDAypq7DjHqcsbZ5QJBwueLTXzrnwFHn6jfR5NGmVDJ2",
  "key9": "3poRxR9PCGxsmMYAcD16rumtnf4tMCRJ7z9RDWT7bs2fUCU5azbNEW199icsCebBXRD7yyyYswhBTbuLuVhpvwLv",
  "key10": "jmAP9eiCtLDX57U6UCsCdSvz8cD5tiNChRDx2gamfBFh6hM4SPKTefn7PXNEDwgC8DxAZGkdvi4dFGQbifoxGXg",
  "key11": "3W28NGspmgSa3GvXyJ8RjRpbTVvdHxxKwr2CAprtxEm5c8jAp89JqSiyAa8PwsDWZHxHyPmapbJiUvB3JkpsG75Q",
  "key12": "UwJzNZRMVzZRuRq3RMJpKc4NYAshgbZdMuSgs484vhN5w7wd5b7Ek1mYtyvoGDud8BGKp813tfCTzf21tsgHe6b",
  "key13": "4FkpJKvEL5t2gyPh5GoJxY45g6qrCWGPVQyynN9hPRFgCr75fX6QgA1j2CqdWvAVv34vmH65SkYMfo6Rk8bsZHKk",
  "key14": "4mZQQjuuwaQk6YY8YgPPbR5E7mua4PSTZuCE6cXMCdpKHXWY1SXHJqRS7XZzVSfDMsmDXfzJpULAAa5zvDuey1vu",
  "key15": "4mGpquqFJbDuiFeyc9qfYyGuiFrz7Ns5ToRnktKGZty6oWyHRmipTJUWxAHT7kyBYF4XkBFScyZXd1xE4ZfZoz7X",
  "key16": "4t9hnJyzcxfH2fciVkwxPjNU5vk5CSsULJRRBSeeyEmRid9rURp3bKHd6HSe4xkzUD31DJDmPTrHzz7GTgzPVb5B",
  "key17": "4EpMtmz2JGp5F53hVkjFZS2s5DiuA8pN1Mo3AZs8X2gQ7SmApQPMHH9aPD93MfGRfxWbW3URarJjn673dpkYfFyT",
  "key18": "4TFxoWYq6sMUpTUQxtPbDsudA69oNVeyiBTBVFHejxDWG32nyXYFRdZY8876tM7V4xsiPTiYs6XNjiv1JstgQrKo",
  "key19": "pbdopikXqcpQfvjxEq82ARoXvU4BHNLu8WYYSBvnyYtgV7NcP31xGuWRSAL36CPF3zi3mf5amUjmDyy1tfDubif",
  "key20": "4rzWWCsCBDPUw1VxnHPJg4v3J2LE8d1u3uHJjoeJxfcoEeCsMeBzgGMAMCSMuAvgmVEL9numbtcAB2XEBuPcczX2",
  "key21": "4JcaU4RJLhQED3mGMH9u11ef5Hw75y3wsTYCrBrjAkNFvj2iGsxr6xxm5mqDgPwYxBtGqQMeonuC4Rp1UHgpibyR",
  "key22": "5L4gmHMbpnUt2sJrRWukrnYYhngs17dMULqivUdy7vkskPcAJSJFGGeFDVHfB2PCgY1e9rNE7rDkXKVu2xA3odxN",
  "key23": "43bTgg9gTsQNAmkU7ZkWsD9sHLhNUxTGAmxU1HjQQKPXWiMebrrkL5WzzSsgRMSBJ9VtuLzQ1HtG2CCmrzvaSQ3g",
  "key24": "pY8TXiMjSz58uXqpVJZT8iqsUPk2tQ4wQRrf74B3st1LQYa2BQ5VFB55TN23fF3WZmeLDdgo92CHytVxqXc2Y3i",
  "key25": "U8xNeGX1E4CWQcFuF2dySJBUYHGi6fn7qNszMoKt3SntRRuL5TSo6zxL3REacKTKgjACabAE4SGVsFW2tUaF9hF",
  "key26": "2poeKzAFMaHaGeZW79RtCGvafvPiV7KGnHYPRgy6QEwXkDVU6ED5nf1ncWP6fkcqpRtQbWGA33DGkuWCBfEC48ey",
  "key27": "2cVZLFxpZs9CALaFZJbqsVUeCjKfHM9UNm7oGxFNHBcumAEDMt95qnGrxU78QR4H9q4FM4mgvCJXnvpi39Kuf6rV",
  "key28": "5Lu1KpNCTxRUgeYV4gxagbdnqbR2AUw2eoaeUyKUgXeXJtu99obkyFc6v8pwZFTTJcqsrffW5LTkrMtH2J2TAQdm",
  "key29": "5fJhp6PNZgX7BciL3tvYsg8hGtQRSudsnob21AxMkJTen4yraPQz6W7V6PEs1qzDHhoGMaD9PcWvpGET9Hrr6PKg",
  "key30": "jtEFcQ2nKEfFwdtsBhzwW4jfaNorQTiNmueiwn7b5uc9DzK5zJUh9tnZDjAdBZfdWGB5o17CLsb6XPRtM2XnHEp",
  "key31": "3Lm8WUZfFAv1ArJ3rUe59bGH4V9eszUbxqQXQMHzXprkkPpCDJJxCPR5iSmqJQ5JvXHGvvQe6JPVNSMCECjowAWn",
  "key32": "5SzdcPQrJVhxFSo6bfvk19tmwQ3XANBzDTyaK2kHEbG1jFmNGUjaTZNpd8Uauf6iSqtb2v6ep8rS2hhUezq5Jp7R",
  "key33": "5UKGsosbyXCenaNoYREEASM1FJFGMRm7rHzW1eEL8cf4W3q3DBofQqpj76XeASBy9T9t6zVZEJ68rcyp6xrWiDpx",
  "key34": "33pJBXJhgeGahUa79mqsxqmWYkiSSfQYYSUgszQPCMp7VrsPpyk6d7YYKrBmJUJ7sqjotvdQNb6QaRuFSchuQD4u",
  "key35": "2gNiVJVm2P49f5WNEmEm5bwXNcuHVz3eQ5H6cSxRWFAHs6Dq18GE2hLdKu3nLTAebARMCaNFEu5WxAoUUEfKkBnq",
  "key36": "4hhiQ5cDaX5c5eMzGzYB5aVMdY9kYMCPqZRtsX9d3xzc4CBZSbdmhH4NczLL5mMqiNW6NMSeQNWS6yEKi5Yerhzc",
  "key37": "2g2uwtsUrK4jHNEGBY9xpRhfd1eM7CaN738fJBP2U7bNWPzY4quHGdagVYJu2zJYiUVRpQWHiPkpm5dhRywaU1jH",
  "key38": "4F8Kxssg9cwEpzDB81A8GMLLScDmaAcZya2tpaz518ncCLiMAtjgDTrycVnhNscjQmqywGLniw82Qp7H1HvdgLk",
  "key39": "4qs8omese6j3HUawU1id7TFYJCw2sYcv8uTZFTaK42Qp9EDirsureN3WpyXJTqhX9URgsS6p8iQF32x9HgpX6Mtp",
  "key40": "5KffB6jS8tcAx6tCvaysDkHzs8GiKweVd5MKW3DDUPfew5mphmUfwB4YHgMvirr6Y9pepH7yck7Xo2uZWxC2uRtq",
  "key41": "4fwEckBU6cmzg3KJq3ZiH8F6Pq94zn7SKh4AtSZUwRqXmyWqxkXkfoikzQg18RexxrXrtkeKz42whtLk95iYw8f1",
  "key42": "Ym1RdyZq6eo5ShwARRMkWRePRJLPPQ7WVeYmJxH2UwVSvHs97CK151CGaS998bynuYa96nVvZTT8QN3NFd5XdnG",
  "key43": "2634V3qX294mEdchsLGfprv37hGpfGUuSwFjeSdGkAW7iFQCz49BpvWBJoQXUZR8m5TCt1vVgXC647dsxF2cBuER",
  "key44": "3RGzkkJGv62i3oEvZJyZmZuFYNyHeKUhF6hbzW3xqgs91CcvbK6QqjXAzDmsV2tRrBHVgrYL8MVJDwwUWYLKt8LU",
  "key45": "5ZSunvvtCj8DxmH3dVj7DzzbwHynckwmP57TZRo9iqosL7ek5F4T6YrRGsDfZ1mHusmmR22uSgrU5GhdCmbvDBgd",
  "key46": "2oHsorLs87BfC2yMBsFFr4HZaQyy9SwSEgoQPPuqvR6xNdscFxMGKaPCrxEZ2jooxB1NXbdNxc3qYXtfW5JAYR9u",
  "key47": "3q7Mugm6L2VS3JyeQ4Cdof1rhAo3QkT7PKhzKC2PCyk89Ls2mBL1N4Pd3kgGVbSZ34KWdaovZ9gfP7oM9moav4FB"
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
