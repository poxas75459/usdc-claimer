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
    "39pXf95EJdkj6iLovFNXndn5r9QvP7sZW3z9WKybqrKRXUCnSFmmspdJAjY67QJjs1Yq71rJ1zXFD5mjw8bbFTP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23HvniujTHYGMqDzJ4eDbR6eSoz4K5j7UWSYjFUGHw7tScek6mdYmCBApXLjAVg2JdkKLdoteTN6ybhJyrDkubBf",
  "key1": "5zMjtLxZKWkLAgwc5Vy9zhDvVrvuQQ7f5H1E1qY7qdEohBAewKp28s6B7jhsDwDG3Q95sG3xpsHUkSZTXP887dws",
  "key2": "5by6zJSBsHyk6BVUa915RusMiujM8fGwkDhV2f6hX9jHu8i5kNRS4FA4Maz8qTXwPYDDADAbMrYYY7QDhp5QP3ZJ",
  "key3": "s3hurE3XSVcsYx6syEPq4bAfDrwdeJLNoXggsrZL5RHzdhud2PxUzgKpwSdjhQLuSX9dVfbQsLTsVsiwRKnL3u3",
  "key4": "HEGogCM8DoDirqh3MM2oU8AJKHaXxVrCnpvamJcEp5FiBKzABcYLJ7uakCQ4mMZmVM3hq7gRhSVgTsKqqkQfVzu",
  "key5": "62GemCPATyq7g3YaEuvP6RFZ3PfhXpzuxUU5PZqztSDXZrk4FDba5fzJFZE6CRL1YqNRhVYQFK4NUSCdqKTQcnqN",
  "key6": "3drKHGzcViRcQsV7Rx5YqZDiCWJhyvkK546T73oUsWTJQ5zjvAMof1mYkNwWp923eHftE9B2DfTD9RGXuBYtUEic",
  "key7": "Pa2KyKzitP83yjyzmowAXFZAkm51SXLfS6tv6hQ5CNo4QmSbo88X1d2BfB149FFW8eodRAWWDu8uNbZp4f3w4ov",
  "key8": "3QPieZ9r2pymUaxG5bph8GdCt1XGQnc2KkuUSNsNXFdG13SwrFCYmRxdaCdFdx78RQBKqmyFaX4hUPatLQRMk23i",
  "key9": "46Y77GJSbmy81Gmk9s7xU2esPDpJmizp5J2ZuhPQ3A6BkeAt4rVb9ucgmym1XKAN8v9AJcSoYRcGVLuUpU9SGBu4",
  "key10": "2r1u6pMrCHrim9c63psaMPnGHEUdsKEfKD7pycDMHSAt5H23DG6ndKLfUA9kS6tB1Xv5pp6AbZP5qrLRTM3eJGp6",
  "key11": "318FRKd6C6MJDehA1b4L7eYJYfyJAEEhTXrTb6V6sXuV84XpSYHRT1ZrS1h4g7rPMF2aL6KuinoJJ9gWDz5vHCSM",
  "key12": "3tQsvWCiQUMu1H6GpEUgt9vdzH4gG46t7ABGsBQLsUf2ZGkXuawDqMG6exBR4kpAVgdyhT3NBJzAzfUfefsNpEGi",
  "key13": "KRZykf4SH2YpTyAYWVWUqe6NbLpgNvdmr7vF4n3hj7C4MRzK7K9E5F6fKkEBrigqnyQbMzm34xaRhuD1pZ1UTSr",
  "key14": "5RNJQVraNG4xRmcsy9zWeKrkAmLu1QvxWbpXMLoFzy28yZBcfM83trnhoe3ad9zDpMfFdsRuVKrhszYWXtfPMEMK",
  "key15": "tWKSGjLMPm4dVbn39ttZWuFX8ojZEy4dUoRGkYg9jM45JygyRjuhBRkFHzxL7iSCVmkX1BtnRdHayDdi5KaX5pr",
  "key16": "5z6eRtXtspoPeShiFuHrxoFjgNwdfyqJvV5kTF997WkXenYqH5W3sXQom1FcMeV68x7Fwy2ot7wCYfzsvnBuvhSu",
  "key17": "A89gbQqr5qA2awxMYiPnqvqm7cjANJqL3Cmyh6Vi4VbAZgTLsrvn91PetyG3oCdo9Tj2PoU6z6Z7y2KvSp7uTp3",
  "key18": "3mohJH1JhYq3e7SkRLcqVhXzSWT4m3ETzVUFoaibEyM1iewRbnTw96NYCGeXHQeZHfkRB48kkpJ868wiz81afnDj",
  "key19": "2sc4Y8hXwTK4dh9eiUsNSL85UwQzATSj8sPycMu3XesdCVejXB2AyNkmBt9KnFuXVR1eJD7cfLvXDCDchwFspMHX",
  "key20": "3Yum3vTbFsdso9aSYdpokvLtVmmRXyW2oHGbj5mcbS8enqn6vdMStEiBAJ26EQsZ8RvS4tDk4YVmsQ9v3aELrZgW",
  "key21": "4ZaP25nGsS4jhhbpTeBLrZmLaLizSfZcLTLx8w7dq5Up3WkAsDgMHPL5LzmMfjLeZSk9U5xXqXn28pioVHqo5pRp",
  "key22": "4GrtHvYyAW371hr9uU9X3NZ81H3XdAEtnqSNaGFhkZ8CKwdDKeppxXDAE65X9oYttfLR8MnpqVoKTeNp368gLFMP",
  "key23": "4WdB5FjNmVJnKfjdSowX5nhAdNM2o4A6ZxN3eFaBx7e3hYghUL6nf3rAMDipfYkr9RGPHYHkYmSWk9t9b1uQMTyz",
  "key24": "5JwTfNMNL7X3byP4cik4SKZDcJSxbisVThp9wLxzxXfLh5hsN7ooHfCLMepUW1XGXHRJSu2bYj3pNwQhA3TFGvEz",
  "key25": "52nDmh3brV7yNCibDw9dUoc6Xn12LBZnGXMRyayUVssa74kjFCbdkm7T3EBmcUyrtWUfk3BvcfpEYjFnrxsJUBiP",
  "key26": "3P9UhULiVcL2CGCNXxsUCPqvWJjc9yUJQWivCrYswXStWaDm4r7eCSGL9wNjowSihjWDApiP7FkeLGC3mgVDRGZB",
  "key27": "3ZCBJYLdWxhmRAsTM8utBm2emVB1igCaQsfkUkrbm8y8eUHE5H8P5Djm7Ta7xt5n3Y6e5maPt9bemz2VDEfn826g",
  "key28": "iotajKGjUhKGJpbxk99ef6bqj28rysRXwPQ3s8ZuZBcXcDJvLDqxcQq9onq7CSfcwFoRWXeGq6gyyg9VdomzjBD",
  "key29": "4MrZwPbTqEeADzCgjotACDZg4xkrGB6nJ4ufA1nPYQxhHyKjsJcxvNSDJ7qFcQpYPxriuWhRZYRYFZt5gPaqMSkp",
  "key30": "4AX9BCxYeFmgXMaLmAbjmQY3C7d8nrP69LwqjZSKtm9SJ7eQ81vztMZ8V2o3mrgQPKySoJ8fdDCr2L4hisYG1jAo",
  "key31": "fNo15KMdo37Pi5rXk2kouA9VrotbrrsBAZP6Gko7NGYW7z7JPnDD5W2TeUSRtVgp5XFvbNqs5B3Uiv1fHMqLzb3",
  "key32": "NoV6jVmiNiRoFrYEDonh5fy3D5uB7oPmeVacTCb68YfngP111iHtHRi6CGjjS7Y9AnyWiT8RBjJViagC1X68i42",
  "key33": "5cfeeHREAoM31rqATijFejkpLQBA8dQNfoB7D3oQSd3KrhKuPQvKjePBvSqVdB6puX5XU3Cu2sTS1CRow2MXSCsf",
  "key34": "25g4U84e9rv73QdEcp7BAacxPcYWTeGPB57GK9ZL5rQkTU87Hi1q21Uf4UgWhNh95umu9Abpo3KkLBtqADEgKWzt",
  "key35": "4WV3xoBnV7FwUEStY7oHEUyEHDhpYdpG5rp6uyXxZuPsBsY7zi8bNx1QC5u9ZHCCWcwYwyipiuBBCGUEHBLzqhAQ",
  "key36": "3BzPBvJWj7XwewYwm2wnzsq3Z8fs9n75aUJYLL49e4v291iwQFKHEPhKrUzG359JEWBDKUKyUXCt9kGaKFy9PY5h",
  "key37": "3DfWKQhv5SpYk8K39f5qcG3mZ4Cx4rM9Qaydy5PaHoDhUqdoRk5tenejuushL5XhK1KDnuVNaqr7ZQSYJyk6Tbjd",
  "key38": "5wNMLW4Y8ZFjy4BVb6joowgTqu3tdKynpFUFQqAdfXSn3A7eRmermZi8GpTZLSsTDzBcpt7vFWAo2JWFXWo7BVHK",
  "key39": "4ZQ48pA4xkbBXeydceY6rxVtxEHznPYM17HZ26AuWjS1htkV4du1LuHit5twSAHtecHhDuh43iBEuCBM3vKB5L8B",
  "key40": "4ZstSiZmr41AQESwGBRYAvVvQHCKG38mvekBZbNpiHV7ryxu1sYfqALEfNWrW6FKUmdiLvxm9PQJbKWYKqM2MXB9",
  "key41": "3WDWKc6kSQpeGftE6zHp5fy7igdkjcAJjpCpTkRzUB9yh2zcGgJTDXDyaRoVfVYSi48oCWX3nE2vWv9bJZAAYWHu",
  "key42": "a6RXmBE9Km1Pg4T4JpDGQeAKF7Yvmo5J2QvaECc1ZZLDVN26LjqjKjVTiRm7Xb6b1EsgGXzFsJVmUCCebQN7uEJ",
  "key43": "2VHLGXvXJNqTrAS7vEHkXDWTk7MGT5ZYANLvaw6BAAjkpQHGCWaK7QGwyuP6M9tmPx2uGT5MB12no8msuT3tB6qL"
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
