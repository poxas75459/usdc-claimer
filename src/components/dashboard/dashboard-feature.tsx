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
    "2UrNEtgEqNd8AKkk4WjN8KJ1Z9eRzRk8gBnwcyLiK7eB8EJ1yCtefYJ9dH7UWbbX4Qf4nvtDENww6zpAoXEy9GMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TbDkSxRxxGZBWzc6UjSScHpbhbMTykQ1tkQ9kzpodKQsXrCV1ALctJGUyJLdthR3QEoWMgx5E3tehfvWCSnr9JC",
  "key1": "3g6UftrFdG9FCTLboQJmNVHTTNCmmNpMdPMmA77PFVUDktbsutj3ZhPYHanzwDAf6PMxBhJtJEtzKUQpeAykFJd9",
  "key2": "54T326JFrcmTMDikaAtVt4Lg5eobsEsicGUwYZFMJXAo65rKk5s6YUhyx2rikMxRyHvxQX2U7FVRodtN2GPkCfPw",
  "key3": "5GTXa4abonRZneK2Cj6JYFRaopLQ8NKKFTgUkBFA5Ci1AgSPNv1wFeMwgHbtsaMsyhMo3etxr6LHCy9L2cKEXDxn",
  "key4": "4T2vjNYhm9a43F1Ljv1af8zCPu4wEFhbcimMsNVoinju5wXRQSMg2a7Pcs6wxp7Za6ToRcVbtS2ZanB5HmZxgvZD",
  "key5": "3aKhgLUXcge3i2TiwR72hdm1foWPZMQTKTrCbAKBkPRe5KdPCt7ALmU7NyedLRHPwrDgXacSVzXCBaxar8e6mNiM",
  "key6": "5j72usot6ymXtQSTZynWxySwXbwCWfWbSvq1zC3wBsR5puBJYRY4hXiVr2adPBZuhBYhYnusRdH67bSxeg1VByx8",
  "key7": "8AbGHET8P2RJKJ5akKyxfirkYE5MDVDieU9HDMjyoQkSr4LFmd8WQDGDwcbDu71FD1bTiXtVuQSfQ5Ks3qRk67v",
  "key8": "5RLcZpUMfCTStrV5C5g4e4AhTYAqwqaHVpP4AdAYdJbbDUf5sGLMNxRFFBus5EEtTt4QihpAg7AVTbp3sGLojeNp",
  "key9": "5VpnjFDS7yZNoquxZhHoB4YpC9xfcqJ5D2dqayNNpyRPkCWeJdyUh3dncbRx39F8khAw9GjrDgrgMBWZBLFD7RB8",
  "key10": "k8KZ4d4MENBoXKYUai1uatRA31GgVd8THGbStYh6x5W6AJNmhSuWymGJQVBZ9haambKbCwouMAwvuwracRRoC3E",
  "key11": "3MgZHHCbekXDY3Vjno1vbYbcvEKGHbeAPRufzFVWKKJ9BHrQrN5tue934xaeJLzVzygShfbWLCajTziu9fZFJV3j",
  "key12": "2FLqpQiL8r7YBBxubGCFTp381TuZPZXWEamJnSjWuhKXjuJCwMRCXFDK1YYKjuH2juenHo3qcauvQHTMaGKonEkB",
  "key13": "4zoPtLg5FjxzrLFZNer3Xvq347ALqYzLrUFJwzptFpZRqi7b8sweNeSiDSNhJvsLVcaDS3FkH2AwjGZgqmKFrq1u",
  "key14": "rJXgHY2tjsVahy4iEU6wAxRLGNJdkqEUJkhqPaCUfxYbSjEzhCztLMZsyjUufV71CP4rjW2size2N1X1zfcycF3",
  "key15": "25kfaYJvf91QdoZiyjwdTDN3shgqQMpoGqWyiNRBaScdQrsHYoCrWjpUx9ujmKft1FgcdjHvG4FNk7GWw5wTXcff",
  "key16": "3MDPsbnk41nGG4XKhDDyqaSHyMSB4TyLrDATg7EcJzvSQiBvbkrpeEeK97QMoPL5SzirqR2GdHrK46RhHkawX5Zz",
  "key17": "3t6hoyuSNRKQTYHQGYZc7y9FAG12VxXYY9gYxXYHWnyPrdNbp69g7CHc7YokZMSgXREQpL4b6ooxiAe4BKKh9Vs2",
  "key18": "2rtFGANVDbiGAmV5VLPvTBj8u9XKZ5WXsPk1dqVkKrAWq5D7XH7CswvazeVZgc2qddcvXyzHNQ5HAkaKrzuUYKqC",
  "key19": "3wzvkC7oCrvxDXKfcR9qfbyWm6eDVFA7xiLRQyb3HxRhF9cBCND42i6KYdikzPw383b1m3ounMJtgDmrLFokqvJ7",
  "key20": "4cu7WFn4xfMCyERP4NfgPYY8cdKnE4HWf99W39n9Wrgo6gK5pPjq44jJLpauMqWSEEobB14V4LYi3LbH5ZHCFDUN",
  "key21": "2z3bARfunxe4kX315ePnX9PYDQ1Fp5e47jaj8gxTUozrBp84jv55gxg6YNtKgs4iCL1UjkwUDtMXMJ7VLa1ZTysj",
  "key22": "5LmT7wNKhB75KQnsiUwEmg525oYa9rqZR5B5xM2qT51UV2z7tXxEwYvb5MQ8Fw8peeZ4A5yBtnGjkmv367ECttBm",
  "key23": "5HrCwCPe365zndtsnts6pTZpCrUDP7SZwksRjVGQ7wf2o5VZBsbhVkdmztvjXbaaEFegEvzn3vsZP5P75XvaYwLg",
  "key24": "4CFBMsyyxCrGtbFuAyPXk9fEhy4i4z2Y2Y3eo2V2dDyu43WUcnBtzC6j2UfvMaRg8kvn1Z3TqRZiY6aWyfJRTkX4",
  "key25": "5djeTom9h9DHJ2UPL8jhXBMJxxigQstp4fHLp3GbzmhHdT5FDhfkWnwciQi8cA3fruvYgUvAhCp4NkBdrQipwRhv",
  "key26": "nP5zvoLFqp6P9gS287jkZJjo6VNf1RnicBhhrnVJAuPqiv7KHEjaaW8yiXFJrbJBEihiLGeDFMkfhwr81G4VR9p",
  "key27": "63a7VVBZTgcVGKmtWaJ1vijLV7DP2NbeRxutarHXKLF5VM97KmGoNzfTgMQfQcz7KFFZadxoLApvfmjf4PkBkXAk",
  "key28": "4qzoZxjfa7c95qEscPpt9jLxKDCaKo111wD3dX267y6xvb5JQPTrTsvxUtLPG7BQvxiJJqDWrCehqcYKFfR9ALYC",
  "key29": "5r9dJPVATFuZ1PcvAb7YUjuJnLFmHA4AfqEERPWnMspo6nJys9BdGkULEVbnpTeEi87tD1fdGFfbuyqdjh1eD4FW",
  "key30": "2Le5s4yKmL4HN319tKvDT2XwH8WKjzUUNC7EZr2TcCeNjMWiBZqQmUMTHe3bVMvv7QyzGTnPzGRbN8T641WAQxrq",
  "key31": "3HVj5Ka6rsNWAGR7TSkMwvyi7fVr7WeHNLPuh4DLrmqBeJ2t5PsypaVhDq3UrHkF4tBQ7ieZQFDp6oJ6fAFHjp6x",
  "key32": "3j4WEKojAq1cdtLk2b8q2z14fvCZBsWEGuLibma8kmvNnubsvBsc92Sv51oy1vp84M5GbbD1xYmVbQ94F36XmZUz",
  "key33": "2zJzxCrGVVHzYXrJWmChApodnKkoATkTsD32v6WtAj5RSxLy6c9PMi5cBM5RyZ2f7nAhH7qLRC7D3SPYuzcQ66KV",
  "key34": "2T2ohLnJXSjHP187GKmfWr8qA5hvkTDDv9LxaYKVJZtPhFzk3jNXgLjjzCfcUsK7RJte7fj92UT58uFxhmeC8YH6",
  "key35": "38k6VB2SfjpHvfMGC1ifX76yETMvpQnYQinAkz47b9o5jxCMHb3otwF5dqFf46cG39ULjF9JyMumBRxAjoWQVgft",
  "key36": "4oGiYw6jrUunLMeqHkNLmBEMpWL1n2xfLAmxQQmbLSvyPY6xMHwSC8NvSMtaWX5NCcSmTzxak4v6ePLcUV3XTaQz",
  "key37": "r33vupQphDzgo8WFjqDuEvJiKMjYBigwoTRb2mxnJdYqimPrSHMNLNmoZSbFRuaaVc4wV673mJpJBeGUjxLscmK",
  "key38": "2fDQsNamYQ3yhuuGzrc4QzVLQcLYRpVj6GTParDT86EdjMaxeu15dryJPN1N1tGvdTt9UCDJYGFsZ7XumrEfT8nX",
  "key39": "4qDwAXqR3URRNLR416E73QzS32oHn1VsekJ1EQ5rEer1M2PtsfPnEBLMbgWDr1rhJzdNR4DXcP3Wc69JhvxBWLBX",
  "key40": "xq6MqAj6B7qHtRYyd3bFWMAZh9CXfRjHYSY32uzNzDYgr3zrrqC5DSSQG9wVKsXr7rCXJdEV6L16bNVCtc7QeNN",
  "key41": "3VfeLBqJPeZDNrZsYvP2vVFCuVwqxKzgzzYckpKtkLAa5JisroGewgWFab59DQAZFEApmhXrGEXmkZntwqfQVXGJ",
  "key42": "horppQAnC2LRrVphKJuezwNgdhKhA4wzMeY1mH78Zxi5c7w8cq1GmdCoh6HK5wQy1xBmKM3zw9crbGeF5i8rYWF",
  "key43": "4vXyxCtpKFRzUrSFZLzyRvHXvMWL6w5vik4YXFpnynVSfn98CZNziQVhvkL5MuLdamarjDngFyXQ9QBQ3rj84KUL",
  "key44": "3s9y2jVydANe4a6im9LTAsGLg7U1NncqTJEyD5WnF7rAxB4Db1171gdFpiPHK2zc2X7Tgr1rrg3MipgMwnevWuTv",
  "key45": "4UDawkTXusxVKPK8dFuzsroio4KT24PyBk7Skt4MLJMRKztAukdjhesWacid9KCs5ygEHayHj41yhxT8MT2uoUvD",
  "key46": "5TBPJvPM5HtMXN6ZtpNxEEh5ZnSwDhMs5QATUwQH1fAQcGBppBHfnEXp5BUVLtYDQMyZXujcXxhpwJMv3enRor98"
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
