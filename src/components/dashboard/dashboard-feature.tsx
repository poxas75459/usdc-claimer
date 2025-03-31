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
    "3jauyUHeruPSrj3vbpGRtqGfNJNzki83WWEQht3XCwVGDZX1ADtEMvtoQxaATaedwPthYhDztPgxprqEw7FjhbyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SfeLT63gL1yKyTCW3CnZGWQpsfQdWF5NEruFXkzKFHmopFNsk82LJwERXjS8VdNJxZm9DfvhvTxdLfUJLYw68uM",
  "key1": "5hcB7awBZrSL96amnAwzyRTtD67sKxJG38nrvBpgvZe8pFaz9vhvQxjaxV2mxupkizoGJFrVuTrMg5kAjoRFro14",
  "key2": "2rg9swbc518HkYgQoxpaJsazRCEueQumdBKZ9GRk5q18Je7zvQFfnq16zvMDBc3yDgQcB7RDn9bumR5ddsPEcR2C",
  "key3": "2K7Xyn7oLRWMDiwxebDocUk3dof83xGTUrn5WaS8kLHTZFq4D8fs67sx5rPs556UzvuAo3FFy4KdN4wseNcigQzh",
  "key4": "4cBe3NSxi8MzFdYbVb41E9d9tjiL4c21wqZYM8yaqSKTbiSDeQJNxAEwwSYwh5SoCwjD9Wkoit64zrjbwadV9hjc",
  "key5": "48V2FVESNXKLndTfMoCHVt688evPq31bGrtVeoeGL7wnUHfRHGAAC6iQ3Xmxrv2sp1nzHMSYaYZ3BH11WWA5EYTs",
  "key6": "62LYpKjNQQyEAT8HLBGhtUcL3zKQxzhUVjLXQsW4u6xDkSFuxEi3SPmax8KZsMfTjtTpAy5iBqKVkQQyJJxNBV3f",
  "key7": "BFRJfDhq8C2c99vkB5DETBv7QvWT21wbyR3gZQtkpeGzZ3ZMxQGfa19kk9DQLbbNtxYArcroR6dRRim5iFyBGdA",
  "key8": "2cxnvhsYcxy8sEMsCjFQgtpHZS9s4bJoKzN3APV9GA1qSNz5bQWWX3haYknKeXUq5eeE5F2QZFPq3kk1ixyU34DK",
  "key9": "5ZqRxWPxSVFE2npe42WgVnCFvumpph1VZcHqmEAAN9sH7deFaRZiAeoK8kPm4LSpsnZJGJ1bdP2bKJwRq3YevBXS",
  "key10": "3J9MpUU2MRJJrcLnEYfY84ajZStv5tD1ShU18jNzF6Lv7LPZkpypYp8azUExSca6h5hjw6nUwCny5qLuwAdRzjsn",
  "key11": "u9U8BgvutHs55P2icJ92m91pEXfg7hiTQ8Ff572ZLPsJMxe8yS9voGWFtAY5RkBNoMw5ChQrmXs2x3uzQyVptMX",
  "key12": "3vZjhEAwtws6tCbvLvC7zySQCAjRk8aqe3F5F3jRa6ncVJJ5BdSqDPziQ3GkfsCLzpW7thfAW2UTCpc89mTzFS4E",
  "key13": "4m113ckkyQ4AMEeDNiuiJ7qK43MxUrrwmCd383f3QkazvTb5CaRhsEvxeE4zHpbuqaVffhKvouD9Pw8QcoiKAm8i",
  "key14": "3RUyn1panuTrjZTdi1yJaoGLfoJPMHnRXFRxWu7sdF1eunufUDVVxMqnuSv8WfuYCP88F1Dja3n2KE3UyTanVC18",
  "key15": "K1GYfuHiJsqouzeWCgyWuqvLYMLLCf4RyfuknNqYwLQ92tRWeFEku8njbCrAZbdw3u8RK9q54wV2YFsCj1aEax5",
  "key16": "3KyEbLgg25bMSnNnZw8NcBeo4Vp9giiSEzf46hCuch6ZvQ8mTdmwKgHGH4CiVcENZheT4wVzr3kEoTS8LB61sUAt",
  "key17": "2QXXLtKfx1fLrWZFGKaM9aNwxrCeUcvPSP3daDUZ52Dw8N1x5TNGqdh4nFDEhsXNMFnaJ5dTpmcWxuzGXAvurK6y",
  "key18": "4xti6LhNdKma37ZwT7VZswmQSp5SuLBSEz4NhTNxLU6Z8nw1GD3T2yiKS66eT2FGpACdk6BNaRV4pPU8cRLEFjid",
  "key19": "21wbNZ2W4u2uPsPYVEN4H9RfJwEmBmTZSPLodbt6z5knNFP6VYvWZJPhppGcwYzvfjM8fSUbpvWuB1zcxiWhixzT",
  "key20": "26ZzhDgGDgPV1SMg84TCqPnwN7W17cQt4NRx7t2GaBUiUW7Q6mHFXCQzKYcJ1AVa2CcVKcU5bd38Z3Ny7szLkfti",
  "key21": "4RMihztsFBkKayARKeiegK2S6ev5PM8Txv31phSCwxKJq9LCUgeQnY1DuG3Us2SXQ6KBJ81AD7vm6oV1AoCYbvZR",
  "key22": "5gX2FocZh7cu7wWGpPnZ2vU3xf6Y5YuyEGZYxihx3ah8JdXAEXgQ2wkvmJ59Q17u1TGCXAbpi28iKCWhGKSJMKZY",
  "key23": "2Y8Nn9wqK6KfGsnaHdGYrBnanUWqcxAaavoFCiZUuABpK3oAUHsqzDKfuqD8jJ6qHQyAWQegjpxApv6ep4fyd2hW",
  "key24": "3m4aQYuTnZfqvE9tChng3DjAZmtPdRp4ujdF8foWwxHSgbKgHZVkwWMTpVn66P7pHo8f5qYpRZzoz9Mx2HdMxbfL",
  "key25": "3bmxucxQ6RQUG4znDV7w2GRdJ3cEsDXG98aosTow1YZE1orbUWgJJivUp2cEefBUME8zaMiVUwHpr8WVSmKPEHyr",
  "key26": "882TET7HuGo8mGwBHTV2R2L5g7qUoYAD89vUFj7WuxXvtWM8Dkt1NjMuAnQzdWtRAh2V6gAhD1UvrvSdBHB2rfb",
  "key27": "5NSg8HagBKyrfMeQx4VopxwaDQp1WamAsHsSqPo3DJQWE9aRqaH6quksGXZc29TKYx2kBsQpyXQqRMCW9ssvBuCv",
  "key28": "WfropmvZgYnzHeveBy6hV2tWWq54GoFNpQX3AfpVfNVbbMHRMtW26cBwnSDWTRwEKdiMV4CcQ77Q7wgb3peurYo",
  "key29": "3QuTLsfP3AGikkvSxpk3GtRfgbfKDSfTpFuiz1VrxQKDnwZxqucGepLMG34nrfMFXiH81bS5QRAw796iod7YTpAV",
  "key30": "4q3tM2M3aJwJ8X8xHERLLt49rGxnopyQ5sWQCxBaZC6XDxBnGyHLHjjcywSo52sHyjLxBKntoT2NrBHdrNPERb28",
  "key31": "4kGgkXk8xZ7XJrFBG3BEjf9kUWQjFPF3PZoYkXiYy6HvcPQU5E5yjVDiv81AxoCYk9oo1ELoztZCvkuU1zZRmEnk",
  "key32": "2Cw4bSAWNpUJar3BDLzVtkC8cZ31ftfq3QvQbDsGa4MrFNo5s1Zbp48xoBBBJoyRcxYF3fNgVAUSqn27qHSEGSgs",
  "key33": "y6SsFL5Urzh5znzuACK7BCNEKXtgxyTQY1XCrTwmGdK5cuWWnuj49v3qAwKSBE1UV9nszYdVbAMzBppWrGsu59b",
  "key34": "4Xi5HK8Vo2rhWonQ5gheNZGYpCeeup45cDqg55ZjWMY67LymFSFo8x6gp87suSQa3pPF2ratKSP8rY2cuuXooUEC",
  "key35": "5JdEaovAd8KpDWTyWBPhFEvbVku91KgvSEww26ZYeWusPVxu7whkYJ9xXnStadrJ5rmR3T5ZKHrToA99zGMy98SC",
  "key36": "667t8WJiZwKM7kaAvMJABJ8kevcKT6YBWK96ZHUCeRoVt9DzoFHEkDR61CP4JrBJ9nhpxWngqX3qGuRvL4fspJAs",
  "key37": "3ZvpsiqPQT2TJCGpFxTer1hDD4ncRw8HivFXxvJ7eKwGo2vUHEpTWxQ6edNWxFRR5eYFw9CeLd6qtb7TgLXy7U8h",
  "key38": "5DsPf6Ui1krMUgUk9jDRqZz8Sc8HrYDoHZxv2Kcn24oEwXmPb3MFPzwfNUMkztY8MkvRM4WGQGYL8z7cFrNsK7qr",
  "key39": "SVdW2eCnhHJpc7mUC4JNfrGwu7JmyVcByFyM5m8fvxfAhpqnRrZuZ9YzDFcHpeBA5tgwc4esrQ8ziNywgKTSKo8",
  "key40": "4FYXhhbMAC7QAvhN7bbfG8sJmygfBoeaUPLoFW7nUuGkgnECphESCn44o2RyXhR5CWmBVo6UShNQALJuSuF68F4E",
  "key41": "5HJtXeXAUYUe6cX5J9C6JRJMgbjCpr8ex3iQJGAtyBYWHi4jEUK1LAdEsz4mQTbk2FvXBt7qVLCP3jhWy72LxKYC",
  "key42": "4Gv8DVU8GCK6rqUbJB6NDpuZWco9ayxJxMcjtrMVZMgPxJfogDXpVT8YpzdzuanzYzXGhriqVr6iYfTbbXamBPEN",
  "key43": "3VQMzX9RgNVVGpspStPw6Bm59Xo2seAqgrxniCMnCbQkgYsnRw3DP51B29wR6xMY86RVdERwrBo211PjNGv7Jkxz",
  "key44": "47S6h8k23PmnLw4oBAfDg7LFkPCoTC22UzQysPyUcxGkvpqNjjBWmHa8q3FkGSXfPPsbqkkwAmqdsv9YwrMLXWSg"
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
