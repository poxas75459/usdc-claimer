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
    "4cMrvCC7UAYxFj1AqqRusYxcSUavUbcd4LTa3dqc1sguuW1nHu62JcddHgpa7mvJYsBh2g3AqvasV4p6GjsDNmcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4sLR3smX8xHVrqhSVA1aiQ6zUrerAGB5P24MofMmq61bZQjd7FwwEge4xSo4Qf1ioFyPnbuxiDuXMyTGoWEkdn",
  "key1": "4NNZq4Apb9WFQVtFwzQUdMmQbHUM84R5W1VCN11ULkYCgLTduJvXAqftWR13eiS8AkEEUT28JvQzKmuj1vypveV7",
  "key2": "5GCDmJMNZzt95TqdyJbBsoaBf1nhW9CFfN4XkJhPm6hNZpBxgrSNzahNL5RBXtdy1htMKSX5HhPpvd6g4rC8Rbao",
  "key3": "2weSoXTaLVtf3cB9GYCG2cpzp8wsGg3BddTaAYgvtxkbAx3xeL71EBDYdqcXa69vRxkuQoYu6JyUwugNFMxAu2CF",
  "key4": "5SF38ozuFhQHrnCRQaskDWzaNrn3MFxcBwEFCz3dHffsa1MoEoDvjZFgMoxtPqAiNAL3U2Y7YQKnvcGxs1Zth9bC",
  "key5": "21PcUubw3sUrXHjXLvcgznPAF7UQ2QuGgEyL1pU3LPWK22Wxs717KC1K7zUkZ4Mw9MY8ixuFk7ZBjviEMhHrMWrM",
  "key6": "2VuwMSnVtnXcCmxUb81MFwFXm1ksaYgz4QDHsU94cm8C36gFJ11aGutgnNeffY2XDUav4k5G3zHLajCojZ2NvXn3",
  "key7": "59DEFBZNnh9BrPdBvzjh7uZ8VXVUTgTigmsvCJgPUoG7QfVsWoJ6kjcanrK9NmAbooPBJSyziCUWrX2R176b6d8o",
  "key8": "2VgC9YDrTR9SiTaMsTH4cExgHwGFsp2LrPhnoPpXDd76kY3sv9SaT1KgvBcEuwZfbN3rTJvBj8qYTGURYdCgHgpN",
  "key9": "5EvJ8rMbhamL4yq5jzwpqsUeMaANu17UPVWoBFMoJHupu75URqSLL8SWm8ce1jpZeN8Lksof6aPQyEDMAmWarXzM",
  "key10": "442bWiTRhLgkX7jjedk3LohMzUgpTHiLttJLkfxZ8LVcWzd6N5dmFf75AX3DhpFfYwG3JFEv1tFJLmSdSrfdzeJB",
  "key11": "FqH9WXkxu8aRvJfu8yYcsVfvnPtgED47JwXAuMkyoS2EoiN3Hd3t1cR9Bwfg7v2Zw2CDgEhhcazMR2zpaPsegBq",
  "key12": "3etaG6gT9VZGfrau9e3ZyXC1jdRuz2FsiswBjLwHQ5UcjcLG3hmGTsUj2UBUKYZMVwZnStPHBSYZTTxCumL3iYDz",
  "key13": "45esXDx5jJ9TYai66oK33QdyDqz4kCpzWi1Znww7jYvJ9eHpFaCPKLWBWuiEk8nHM7jPqv4bfKpneCTwUYYAyxyA",
  "key14": "5EhAvvJX7Vxtq5STgCgC4VXtf1NLptk2cyk1CULP1HmQjQvHzGGd1yA5pgr73hyZ7DKPwKZPgNKcagMtEZhC55oh",
  "key15": "4ovvSaqkpGVNYb3PSESPy52UZDZpd8HCc1NsazzFQ3ZecBBTc4mfxxxhPp4gQKzqkT5uae4KynorKNnnJxUdJrcZ",
  "key16": "5z3B1vhjGgy6ovnFvERPzLy6nXVMJbpG7svJo8ZGb5mQzppvwyQ8BUu79ub6MWY8ntbukneg3xjkDjxEqZx5WBCc",
  "key17": "21z4Pm9tHvAJu86vAUsEE1GoUyc4iPUwKaM3EJo6zMBqmCA9WGxz6st69QzdJRfaQDgHRB7bv526yCQvdXvZR5pM",
  "key18": "4CJNyQESzctVZMPC6tRnETTQeadc73WCRRJ452aGsLaZpH6FgmvctbfAQveX5aqsmvua6ZRpgzNkcZEB8sVYYV6b",
  "key19": "4MxNNH8eaZKHqKp2h8DK8Ke3ULeonaH8v9oTnL9o1WAAz5psVohvCpyVdwp57gqVwx4xkmr1f1EPEd947bBkdjqS",
  "key20": "4gZbRqrjxXjPH6sniXzFSh4fGAf6D6aFyaaNTErbKxLfS5YacPBGNRZ8zNyQcTcUYoGWDUdkBrbtXYK6yuzKTDQR",
  "key21": "FtAgJ8fh9vgMawxo4ciQToUdGLtZ92qeDSrYNF81m1EKYCDyb59No4ecxHYp2jCwURQbnZZDbXJduCMg6iEWeWb",
  "key22": "59bMiCyZAzzwWv31deUmDzxmaqNPQZ2uS7jm5uqEQa9g5kyvrrDbF8PyqDEqjX98K6EW1C9ECFxZXDwRVvptmaq9",
  "key23": "2saeaDv457nZuusiohjcbXHwPgbxFoDpv7HTgELizYDTNdgZ7akrPLnmHaW8DDG9RXoXgfFYFWhKgARFCBMHRWmp",
  "key24": "5dZQobjpVcM2RkWSzAY6o77W8MTMekqZ7Ai6xaPex8h2qDZYyK9hsg26PZwNws54pq68MKttLvd22rh91zd2sc4K",
  "key25": "2v5bjwMGAD7SunjYhRGjf1Vx4EwTmtJHcBvsR6UPbjv76TvswxpyzyrCAWGPSo7PMzU4z2GnxPEETCaxaNX2JwM6",
  "key26": "3TGpbxe539kF4r4nRR5E2LffWy1HaPUnwTMYWdMrRTVjcRyXV7ViTCEGWdC2R3EfdMX1tvcPvJ4NkrEbenjpv9zK",
  "key27": "3X8cXS3K22k4UnEAPyLTebhEBqANGCJuod7iDHGveViBLq4W3wcSztf36r2pTPfsFJeqjddZLwN3UQpTcCws486r",
  "key28": "3qHSvcYf5wocAfAJWPgzsj711QjApwjdnu12qvM3FtzinoymrgFz8q4UZup5wwK6ipmpoErbfiDyoYxUNUQpNvVP",
  "key29": "5NmHCXroNPPdrFwQmBhsVz5fFExhjnSesnZE4UvfrbjCdxWRsw6eD7q9ax7DEvVBvY5zbnbCcsbDR433RHAFjjzt",
  "key30": "4txStVffr9MH667qacNuWJSH6rgD4nQ6jNbXfJe8obFUwQd7CjicuVPPA8rYRDqUHcqhJhzwghpB8ZFERjnFL5eA",
  "key31": "MHsVy7wUr1ndRaiXtSGm2h3TrVT6eZykr72pmEd4f11JshorsHUur61Cg5DcWhGwZFTURopELCddUSeHZDbFWPK",
  "key32": "2NiRvFEjw95XktB8J4X46K5zBaGagiKmo11FdPtXgKExBVbhRc2zTDA2MyR9igHxdvrBvURcqWuXyw5w9uYbuDk2",
  "key33": "2ndNFSZuquCPa8RT8BKWoZdqYYC3JN7BcxSuNjgKZa38CMfEEdMQE3XPJQQT3aH864sP1k8ypGbb4zWNe6xSi6hc",
  "key34": "2UERB4ktMvNvzMMhagWGdCRpFz6C4AUu34gDX2mPDZXtJtsNCeMvGqMgbuZvZ9fGtqcXmLuYyFXuaVE3XcDvkoAR",
  "key35": "5LLNiquvFr49h3L9pQG8AUq37WFw4vEoyguhM5W79NkwkaKeBSEpTgjPq2AsVxwPfSC1UWbfT7XqhUBWwcVzoAWu",
  "key36": "5sr1NxwGg1fskEJKZ37qPoF7hXuzvabG73CvxK5myf5K5Pj8j3r4L3VhRqcpYgenENGf9rDfLZo8Gic5YSE2whF7",
  "key37": "5E72F6PdvrahBM1QZMj2q1q3UxhNvhMe2tEEmZLBqfUvKphZpm73F73WvXMaiRDwRwCSTbJiRutf4YvnX6gNm7L6",
  "key38": "tNSvZewrKuPT493LhCGN4rT7f2ZfERRahsKMPxeoqG8QXiTqY4ixWDMdwbePUiSH37BKE9EpnDDddo9aN1P5N81",
  "key39": "4TWcZ5jmsh5DJ3fMeXwxuCJuz1EmbCNB2FZZQtS7PDsgmzCd5ZkzuyFrxZsMZmw7DcjqWpjY2NkUxRi7d43bdqUb",
  "key40": "4yfTo1VtKypTkZ3bXpf8TogZLJvQwN6wstQ1LBi1J8rmhycf1K9xD7FujAJEMFkNy9portQyJK8vEM1yjtkAYKez",
  "key41": "KniBMKrcePsB1SMiEF5Hjdpd26JCRBGBTqPfZE71eyXFk6MYU6UhWSF2FCQMvQDcKKfFQBHYqcqsa3Rs2MqSisS",
  "key42": "481w2K7SR6UMGUKVnuRTAZwoEnrWxUnrtpQHysYw1bSK3wfpQqw5Z7fFcANdNNNnz72uKeqnhW4HfuShBJdbg3C9",
  "key43": "21SsCMHk5L3tXiYA8JQvBUjfjoxATS2pxbeLecfT8J2nxvPwTYbdkAaq5mHpRLmnf7MHBpaFcwpdP71TTTjt9aNW",
  "key44": "3dYomEVZLFoNXS6vKRdjKVFFNDHhapzLj7vscU8jC2W8awF2sTVFj2XttX6thxbT8YP3JgUaRHvYMH3Bw3Uxhgzg",
  "key45": "3dg8E1rYC7ac7u3WxBUh231echrCvG6xZHVEWHGRY6pq8Q9Fmj5P32BDUF6dyASPhG6ChCVYckGyAvEtwnyzSHyN",
  "key46": "HQ51rYBR79FvQhPujTYu6GXXz65AG5jkqB7UmL8agy27xumzAzkasusHjUDJETFPckpqFaK3em4rDrQKaHMmGoi",
  "key47": "3xXo21atXmXgqcVPfHQDGQqqSr37KSS5z7aFkrHejHdeRBf1Nu3hU8kZNJnKQZgV7M6Wsmjt7uTHWpwzcp2STTyb",
  "key48": "5AKtYLv8pxPhGJqwgrros3Hm2X2yCmhJPaFjaHUjnuxXhkg59YjaS51mXUeBAq15uE31sJk1NnSFMnMMsBaWeSRv"
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
