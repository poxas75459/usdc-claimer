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
    "36cA3GBy9CZpECCFHbvpU1xmPhjqnRdJ8Ns9JcUWFEJNbTt3YWujLZCKJYVFQ93bgaoKmgn68RPogQ3KqWjAu32f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FMYP3GWNgA92dVVQ62RCyT2aaGLQ2srWniJkYBuzf5ct6MmxJLxuJ6biP7pKkv1qEVRAtafcXajSdR4D5okysth",
  "key1": "2kRmrEZVUgTyT9FqLjR5Fn2JKnAt1HpXmDzebYqivr6NijDyFc8SfUFW8CWHE53zK81XzNYZtJh2qrCojPcHCMpP",
  "key2": "28t3JttMMQRDYJJcCfkBJ1XoFEHqqtv3rUHbfxMcypBoPKtMAUR86d8Wtn9v1Va3mpoE99wV8V3xA86D8wbcTMKS",
  "key3": "65uNWz7rLWyTza4efdaSQSfJquAtccHUGBsv1sFENHPe8hUM5QowbhJCk3e5gvTuYmto6KRNivWs3TSQVaKaRjc3",
  "key4": "K2dw1By62Vkjo57kWf8DZRWJUiMSUTSreoZB1vvvVFYGsT6NGH4VwG9Fy2A1XJLbxnc9Yr48rVUasSkgmVDgEbP",
  "key5": "5xi7VLm8J4UMTP816aqkX3hyVwvNcSuwWqUhvANACuSx8Av4yefP8ngzkxg3fKNYJTrYf4k8PzgggsyCVHYMyQ5o",
  "key6": "4Babt2fxKUWryZd8486guemVwdBWe19cgvhNwpYhBr844uhuD8kmogWZVGERTwRzxzBs3PoquEYtcXuDFsvqpzvk",
  "key7": "59oS6t2NrCHpgkfVw3vXjV9Qp8wGjRTVZDSxhUckHXuWR9Ysctvd5Q3swuA4k8enJamwwxnDBfLS9JtdCRqHRSj6",
  "key8": "zLaTdarQAhBu6xtBdyybtiiUaLWtHztU5yGqzh6JnEE3LGZDf61mQptgWqrMA8Xmi1PDdoPwc5FfJxmS9YzFGtt",
  "key9": "337mKKjC29bGWSduXBqUHKdWuN9zEpGW6GGgF4SerDJqSBLybSj2yKt1Rdyktg7exEb7yZuaWQSZdphaDJoPyp7H",
  "key10": "2avET6j8E4eqwEefLsvndNhYNdM3eC6k69wQXHAhxN7Tyx4Jz7YHj9bSJs5rXEqdPfamC46aKGZ1oCqtqFwSkA3b",
  "key11": "2e7vGgiGhNdtxkpCFNKbovuDTpq85hFrLainyTy13aw4nVUodz22pH5vatm4SxzyjWs1Uuer1oFFi8hoXCWKz92W",
  "key12": "4UitZP9QosMYYSDAaiECWwxTN4roYWEe6dRQsdXqbTsDW6xv2rvxLTu3gkgfSkZnnTgPN4S7EDPN1M6g5GVWdt61",
  "key13": "4xWHRqFWRd539o8PLwwLvgfpBnEHRLyRvhMgaDSukDaxxarARWg4jcTEhbrTFVXP9QMLPPSuWPrtXyJDBjhDUm9K",
  "key14": "5RvyfgQQymKEnXWYEtt8fWuiwD21n2Fhy2nhGrs73cU3ZdCtSKeBc9f31sGx4KtxWkDKyw3mtRG5LRqgtrvgMYcw",
  "key15": "23DptngybcwUUvQSoAY2ywdNEGeckqgHSmehTzvER6mqW94p4hU3rR3yvk5P7WghMU1hrj1vkz8t1Snd3oxKV84P",
  "key16": "5vjfDzpxvYCJ6aTASEaVHy9ncC97yY9n73czvWwRM79hp2MVGH3xyZjMWYDxRrP1ERYxdofBURjpXKLTtecjaqpw",
  "key17": "4rb2aZhMV5nvrSTBwMHCtESStrsZNsnsFhUhoeHjpfRjMs96Vr4sq3QYqPhAdu4DsQEB6kr91fEfVTa8mc5vn1kC",
  "key18": "8yUNR5k4kfYJHCMLMUMZR5nkkCLg3g16gfnqYg5PB4wEsxAeQxQwB1wsFcbT7xaAgCqAwTyfv8eqSLSn1jxWdVC",
  "key19": "3AojDf2YrN88MYrBuZg7o9xkCUqPEE4nWruqnfMx2M58EykkPQerAE7UpHRqxsD2yyJFTVt37XfEHmFQsFt2MtqA",
  "key20": "4iahAdUkkneVELRhFWKmvy5fVwGdHBHe8sBcGMT2g1rW4DP9wbfk6JZTaFhN6GW4WKMbvPh7CnZgaqK5jCMP3XTo",
  "key21": "5VafVEiAyayn8WJs58Uz2t7inBeEBXfDfmNrjdGh8qxkG27Yqhuywq5HXxKsfLjStRDy5yeL6knYWAvBTx2b65L4",
  "key22": "3AKtr7oS5eRh8G7gGRRVCBMF2tXotfqvNVdBsykCCfG2sHgT4eJDpJNPrfPr38Dh9BqCzHW5jSjK6CsZToA1uap7",
  "key23": "dTC6sow9roT8isK7GJzepHsDQwGqvcgLaCnEYwieL7Dr94BcuUY2DJ4Qf8irfmv8dKQFpwhhnddUknHXbdvJchF",
  "key24": "2Sd6xLAvWgqvKUWPjWTngqKc1KmNsKp2jaa8X41fbDiEPFeQkypPCJxBfiUJBfXvSZhUaijTugvYUhiM2aAjCnm3",
  "key25": "dVKwDZaTWkXk8Yg41oYg462xSZpBxPyuWzR4Zy94dkYMtHFvm123EjTpJ41kZearNNa1hDw9FSQWixJC9LjghZC",
  "key26": "2go2TzvgHKnZVb1hrZyeVXp2Gije5WgKwnD9vwwSrF7eJs58Xg6tumGJXqmdqJ6NAR8xyMdkhjWrefiTtkqyVzVD",
  "key27": "4psTWU2Y3MdmDTtNxVxeS8AGUVcNNLX9iv9re8WHAtpRZK34iFy1XfDjLiR44oeb9T93YDD8wd11CZfmCa3HTTaT"
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
