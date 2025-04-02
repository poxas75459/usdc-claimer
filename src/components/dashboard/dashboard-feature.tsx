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
    "4XyXhaxXnjwygjAzRzoiv1ee6J6HkCLtTSR5DUbCcHP2zCuyQC8LwKsyh5hXb6pM8qWBK16cV5aeitDBX2vD8FL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lan6ZrboQ8eWykJfeQLxGCYkbhKTokdZDbpckc4T68Zmhx17zkg6FZRjjeENv9YyUEaBcYT1tabJ3ZgwrivrRPk",
  "key1": "5T5kt7TS2ffjQe6oXxMu2E86DPmQcgc4djUWt9mADcZT2RnmBCzep7eV3ey2Z6LnbViEuM18zsBTZPyYHY7XUJNo",
  "key2": "2hH4CXuhSJ1w1Ux8Adw7SW61GTGNVqTdbjZszL9T6fa1whBRMjYKZpU7gdT51NmLvbREohLduGhVCrFSFCePgs9u",
  "key3": "gU5hrfe9AVotzvxHWkg4mekvLEJgFVZ9ehLZULe7bSDQmHSN4bT3Bsd8xTTiQfsvYKSiAmGVHWzs3JuTTU4ZJ3f",
  "key4": "4vg6GrBj3AM9zkQqDaLj3jbL4KFzoEx7pQL1AfyiCFbgsxKABnVE3Vf5M6XaVjpENF1U3QZKLMXqxxGorayqc7UM",
  "key5": "3WN8ULVH4gdqbbLL8pmYtCgBFFLgwr1dcbvFSuEDUcUD1JTtcZTdCVTyF7aZSyA4FaMtKvP5BGnjV86qaoQKhhWo",
  "key6": "KYmqBDLJmd51LuuK5DEezwAX42p2FSe3TGZvYScYmvY78gjt9rbh57YdaBJsGvMABSiXzTcQZUEEtNii7Nn5m2z",
  "key7": "5s75NetgKN1kvrf53yLnjkjdLtwT9g8ueTtV1bNQfzFYNdH6hyPEBGi9GQahAffEKb7ZUsTL3i9RRLTUNUC14pqY",
  "key8": "jwmJhg6eQRh71JjV7Bz8mhHwi9RbDHjF3DYe261W2KCE2CDaWGSZSPVqbEz2zpz2jiMwf5aAt6Yuav8J4UzX8EG",
  "key9": "5Qyx496RxhJLsZBi7LuiYh7Royksp2UTZgXAkG3CuZw9CuTrEXSbz2dJXLGzgA2aWXLpGbFzo4yu8s4A4zfFYy8D",
  "key10": "EqzgwDWRtnxs2aFZk25CtkH82o1GjxvCx8w2N8mLiTcvpkDxJUmb9bk66KBNkGwDjeExyHaTtFeLTVDpco3Cs9o",
  "key11": "Z52Jj6mhvg6dFaJuBJbRHVraGXxE1bEuemUD7LEcci7HdE1CXZcHksSAPhavRd52FpSFfZTLSkmM4GN96hPKt1c",
  "key12": "2pK32TrwWyWgqkPdzkizSVEyEvTexFmgECBnxSM9yre3kd5eeJBNKYJPYKywhH1u2L6DVwhYt1XUP5QzjQTtpYut",
  "key13": "52xCjaaVHDaoMHvueBLwmPDjtt73KRV9rWJkaaUS5ZXJFgMBDfruQFohZXD5GcFbdKfNLqdfD7G9deY7xxUNkgkT",
  "key14": "3vx2TFYoeoDSFu4JXhUJ1hAVY3gTtYsE284k8r59hMJQzYMWdoWVxbbDoEahXoHhuhdPXzq7JWAw4kYqgiAhjQCj",
  "key15": "4RzPmt6J4DxzoYJiKraDuQR3v1bcNACgkJn658R816dDNJbt2WkY49uJg2qFCyMpvyyj3616HiQw8q4BiTpKQi21",
  "key16": "5EfqPCjeEdkyLGrh7YYfJNY7UaXyhapihXxweBfBeCminCRJwd8szv17kxPzecFVXr7xFJy81wPsvtawc2jDKQNT",
  "key17": "5sq7mzviJFVewTwVxo7T3EjLAToZzyemwKuUDjVZrkruFWAr4vCBiSQw7vpRnoJN57grivYrA6bs82zKzry1xjhi",
  "key18": "3LKXimmr1BaPEhRerciMWRzjA5EoYpzSSrrNovwYCi4dJmyMJk78yNHUXZG8rMMVCKJiPDGxptZVzNuAp7ywFrnr",
  "key19": "Pn5n5NxzrzPh7kticPHfXYVe3wtMSvfqdco5HrPdYBMtVu43qfxeXkBo2WxtBJ8KsQkEvwBHt4WpqsRoPY6LH8x",
  "key20": "3ptVdyAWzm8iYwosjXShDcu7tdpxnjim4DohVvWuT2DFenjHQsMfMFftXq6HDYdCoBQN2Zwn4xJx87fVxyonT4ND",
  "key21": "2D41njBSdvqs8XUf5mu9ZYLT9vPC4TpoE1rVKMC46C6NTmC8Wfa5U5aQw1FX2owHe5ncEmxALkqQnf4GUA9Fo5aV",
  "key22": "D98BTTR5oA4CL95Wk1jnLx2WLGPHmf66bGfAHYwyExV34zsdZ53vq5EmU67TbmDZibvWNEyS6qMzpWha8ot2nK9",
  "key23": "2oNyfiHr2AsP5jJ3iLEXZ4C2Xx4QKxAeewdhref853yyEAYRfnfwsZo2tJfXREus8YtTWAa1pPPkgt2snHdftKWJ",
  "key24": "3dZCJLeJhr8yqmFHu7wyjx2Jp13NhCy3RiHrqVN8gXgaiQEsVzJUEzAuEPJ8LSfNg25EYC4h2xYwo9QGKNMRLuiZ",
  "key25": "4YiXh5rZUzhpUiPioW3FN4QvnJygAFi86UcSyadhQSafhEvVz5Pn1swSFph9et5AmSMC3VU9R3YWZWK479RyNVYN",
  "key26": "3wY7B9nq4K8KYmHwiX32n1kgw4kKWstiVsyBPG9fkfKPYfKUGNNqrdkjAT2bQhUFCdosHh55ZFR1vDd99EBNp3PF",
  "key27": "pat1eEuziBEW6y4TLmnBwp8xt41nvmb5F5ZTb2zZ4fubiNru6Vb2Lsr1L1V1dwF5Ux4sDDg9RjPq3wso7K69Gi2",
  "key28": "5CuyBLecRRrZv1bn9jzdR4Dfy1QYhnHaqWNumdu5LQ5G2caxHrwq7qcXMafsq7GCKN9bN4Rz95cBysj3qD6HXuKf",
  "key29": "3LDmP3tXQogJXnkDjmjFcdHXJ3j8soaWVPwzo6A28RxprLfiFbFPdyCC6zDJYmcPBPzfvPWC2EBQHWvTpcRfqm8c",
  "key30": "5Tjw37fUcP7anBrgB1pcqTmbRym6wDkxyNW67Wu7EmQPX5e1whSpaz2ALqiNfSbDd8QdSA6j4A9ydBh24iHcspKd",
  "key31": "4q1fEf2dvjfkzU5N8yaE9JGzr69EpCoNAVdbieicDvRkCqM7YXktV2BL5JkMCfXazeoj3LmhNt5xjptud6w3dQQA",
  "key32": "2BMRxENBwT64p94qkH4kD3xKAhdz8S2pqtA8wB8r35Q2zT1d8JLPTUFAVkPd4ShHegV3euecgmLChHGoS1ft7nFt",
  "key33": "65ksPjLBShb8kZT4M1omFCBXFyENpUJ2riQ3GwvwGUpHjLCw2sjMuFohrEH8jzDWPUShXfNRaoy8Zar28XNni7Yc",
  "key34": "4bdm3YPosrezkijsZng9LRxTwwFGc13WTedmCWJ766dXYeEGF9C6UmfCssKvDfpb4oqjkZEfVRcFrKwVmTZ5pPzA",
  "key35": "666xwQdFc6ovSxj2j46d3tMPo8fEGPpu3DxYKnjTiyd8873ZbdmSdr3zSqiYmjwRB6ZkG7wBqxVa5KzGg8Cuufzv",
  "key36": "ad42qu5FwHkxoqGDL4vvYjREByr1sS5gothTxmtW2aXqWsT2YnTVvWxsHn567Rob24kjHpP9TLYDjXFSxZ6bBRD",
  "key37": "6TWLwKjeVVaGrV453DTHcLj4e9XB9LUoB6axaCufhXZ8CTVjJSa44ouydn5WchSBTfggqnv1AXvZnJXaNX7jRTG",
  "key38": "4cqd2qWqT21wPVH2gkGSN5EcJ5f8ok4ZAPGAM2FeDbikHXRp2hP3hpxW33h6c7WZfE9yhcue6kUyJLngKeJgFjAs",
  "key39": "3h2UMyfa7DMa2NedHmukfZR85YPtxrXUyQiRFTBSD8kXkTn1KLqAtimzvm97bmVn9x1BcKjhfGZfkevw44WAcUdc",
  "key40": "4bcp5LriApHd3eZxm9UN9v7qv4YP4Kef9iyVCZVk15r72t2vaNVh9DyApsmgTyHr2iE2NCCoj3tPPx82CU2BagGt",
  "key41": "2VZdhed1HDWbxe993rNEPQmUt75mBtvoDTFLMxjPnANbd56Ado1zKQZRaaywSPDzCMfyVzqZg3djYJD7GSGckha3",
  "key42": "4gyfZBQ2zjsk5sJ6AtLewqM9v5akD9v5WbigW1XgAU3n7KajPjHpevJmw7Jn5Q4TtHgk4HuJW5LRtWN85kCyAjUZ"
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
