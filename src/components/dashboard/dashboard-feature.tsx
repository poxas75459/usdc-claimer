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
    "4eEs49sT1Rgkp19sbLyu8m7Knc9maaqNWrpGP3DuecHZ476TdR2GNpM8oPVahT8riqq1WZv6Psp8Ng4dmC4Kxb8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r6q5bZK29LaorLEAvz64iTN64Li4Af517czhggZSL3i29xz23kZJ59D8ksmUnXeVLVJJrS4hBicBbEfKqZ3bCHV",
  "key1": "38WgZaBHqu1jo1Q7S3bgAzy3G4rTryG9STNwWdyMjA4KUrSz1Nv4HtEmNPFH6CJp24B8qWCFH8rjscSQaTUpcf3u",
  "key2": "4EkbdSddEY89W7sHYXW3BgWScxP8BmqSTpcLqvfP1b6eyMXtapw4cW7CmpVmWTp96urMM2qed6cZfZhTiDhuXgtq",
  "key3": "3dfZggg6CZt1Jw1nS9RcXpTebWjsVuTUiGH6DGeXrTaAMkVo32U9SwmsucFKZNtrSxXYcy2U5DsGAqNb14NPJk83",
  "key4": "qxt3yQ6PCDVmKzirJEjrpYuAH7RU1wWsraopiVqgNfE5HT9mQtmGCvDviAZYDjpeE6zM8iPoxbxaAjvKMNHFZmd",
  "key5": "5T1Tug8rXjjGdvmshJy8NfC8Qf1bnQPdUsGYETgKt5JdFdy4sZmyHVYev8Q98oWS49pmFNuacZMd9JVikWf7bLTY",
  "key6": "kVwBAFzJVvgiGopwQ1V3TQZaGKySn6wYar1xCCjiS8gw5TrZApLpru4ZeLDazjtHopus1i1eRsYn1F1zXRKn4Dw",
  "key7": "5FPiYYgqR1TuSdN45TujTs3Eu8p9TSpr1BDjJkBTfLDYcQo7NankPVYj8Fq2UhDKuURnvJfyZQbkzKwbhQ4CidHi",
  "key8": "5xVcLsQPcNEVwHJKPzSjp2oaU3S4bZurF91xDRW362isTEazdjRCLYRW34fGMUnQfB2pB3KFnA3GoDRV1Rp1H4os",
  "key9": "51UgmU5q2jNXDscw2uyD1d8nGpUAmDVztgZ9vSb7hdfmJzrqb3anskUoZWPmGG649Lx7jBSD5wpiAb7tmsWitKmQ",
  "key10": "3kHwiXjgeU5cZkwRMW2o7TYf3dJC3LKjzv9j2YcWsH1EkwZYDnsimAWTwoDbB9LpZYj1wFBUhk73d5znVUG9Uz9h",
  "key11": "5nXPpzQwomFEEV8UYS6gpjiNFHFZqfN7w5aqVSwkiBzW2zJu7SptRaaGdbbiszQdtVETRhdrkepJF8n7pRQV4fp7",
  "key12": "34bcBnJpRPdhN1fWNnfEUG61EdVSxLodzZjrNomMMFVAp3sw6oPoquSFu29o49kn25pPF6UERtKqu6Jbd9es3x9v",
  "key13": "MW1XF1miRM2ZKBLhte6f6j5ue8NP3kyWBANejmKmdBLeBYtCXej4kDQ8jJUbnZ3wbdHxyNwDm2PXTeWDFBUigH5",
  "key14": "2VHFCTau4q4r5QwXYwpWYSxbLv3e2JkziGLqpJsYytT1kPTs5gnHspmhs2bvxkB8MSLBg4L9NBk6bRTc3HZM11qx",
  "key15": "4dTGYor39xBwGwV8gxRn2hn6nfEVrFGFBViJWZQst1fBA2jDRekDbwwahqQgjmUruycunUW2hszWrA37sq3PFkRc",
  "key16": "ypKy4k3PBSsFh16cJ6gyuKyfeYscZx2hwCSQTbTGWcc9Xf3QjwRw4vcLKqbfYoxsL1cGF4bsj1o2r4LfQuuijvW",
  "key17": "3ibBvBHxJy47LEJktUiMSoMhYf168ByDsaqmBRct6dmARAqF9YbdkDnyHc7VuZWspGZGAwDcPVmde2437w11884i",
  "key18": "4hpVu22nEfUNtgjHKPX95qJtMNo3ouRxF3Tnyh6dNnz4D4AvtQXbJgequyGS9fQeqEkjLMGtakRSA2ifr2xd6peE",
  "key19": "4Jj1fLJPVNn1XQV92FWsyapKTtSaBbczQmtkh87p74pHZ2hZgvzDfGUXPK7yPYiMokS2YzZNyA62sSC4AHneq6Hq",
  "key20": "4A5VoUuAcLdYFnmdNNk51paCoAgybcxuKtu5iwo5pbmM5fRC2fkmWnDFMUWqcP86rajpR974CkvRmPmLi7rHYGvW",
  "key21": "3X2rMPtoCLS7NLz4qE7JgWoc1JuTLBcqm4xffwjgLkrsogjgx3H7X2bnAcW9UhW1vSL8HnmNR6KsiSqjfLr9qGv8",
  "key22": "5pw3bgHXn4vWPVNzw8yUBa8TvtB2oEJit1JgfjC2yirKhRyT76REM3xinNqMGM4XuFeFZyQYEW4RLiCxt38cVygt",
  "key23": "3pmCurYSgLp3Z6gamzg8jadu6ZUXrzD8nAja2JKn67BD9ttwEu9U9xTBEWDQN1yjf798pMHNZTbEj9v39bjCt75K",
  "key24": "3nFD5xcxvhsm9MbKHeUhJga2os5rQar88nk6ji5Dku1zzdVSYdzrNAD3dHhAp1VEpA1pXdqGhe73YctxdeJQJwJw",
  "key25": "3jpszCU5EHfCzAzpVquo3brBymKWEToJGwRLZdXrkZ1CJw29uofQ871vewXd4F4uY2EyZ93D8yfoJ9he3hrPJtm6",
  "key26": "3MYQNHZvgaShb34oaePqTvW3E62c8QGWbSJY3CdtKWrUD31CHtxEqvGHgCYVV82HuAUPW5xjXWbsiJBNBgKu3f4Q",
  "key27": "2krDocFaabRdp733ALzNRRpJxFMDqirganhQmTpuDux53wyjQejHvBBcFUyxV7WQGWHXmKF2uDed28Fxn2ubsW7T",
  "key28": "5fxYVW2Q13vvvy4LkHeX4XPsFZnAUE6JPeU6KbcbYmnvmzPzZEd8hSny8hURiQhvH6JGQPtnnCse3qFzjr8fhDs"
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
