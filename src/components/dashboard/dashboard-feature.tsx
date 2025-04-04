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
    "6396sfAgroHC86b8Pdxq8N8gmBpGeLJJQoXVjuccNjYRFsbvqcrsYJ1LNFQ3ta1tXW2snQBBHC4NZw9JEJSkjGe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KApPofZmwn3RcW4vYUABy5iqTd8ZLyYZQycCn8UdKYejgoMcerJ7cYu5pDxLEBU12MJu6K5S3PnNE5LEqQabbrE",
  "key1": "2ZcepgZMpEu7fxCc76K5Jkw9menhEchPC4krp1zCCBnnLTgfYq24Q7hxxNG7piaUbjbczZSEh8uj95yQbxvAAX1D",
  "key2": "4pEepc2Qz4igr4ybhuLvwxJ9J3vNfAAkfeeziwtbZ7oB2EQpXpJvGkhSPwvCq9H57mmD1UZWonTeNjRTcsjmmJ7T",
  "key3": "ifG7RAfCZAvqPFcFv72h2uKZrm3dQV17sfvTogy8rLQxUhftBPGZPkLvUxJjgwcVFqUepF1JNdvG6dgLSePNUa4",
  "key4": "5YAUQ4xa1gY2CD6zv1t3MrH8sPvn2Ei9JvX9YFQ79rCxBsFwgVhUbKUdjmw42YmeVweNS9Kd7TA848kCMnnLUup9",
  "key5": "vFWkwvZVUUim3fTE5quNWM4ehNngkPDPh4u2KmMrvDyF9o31WMYLspGmqVB8ZWJMgNdHqhfMknrFa7gBo7rJSiA",
  "key6": "3x2axFmxBY3FsjXzNs6ec9eUGKJkS59xjb2Qf4qRpVH1jtBYPmPA5L2NKD12EGwhCypwooAjpRpeHs8rBxLfB6q8",
  "key7": "2LHkciLDhBJd4ezMipnzpyNqbisdaV4mqMQVdXuUb5ELpQErYx1KAboY7LY78AsM3G79rruCWNjUYmiSTEh1JcPF",
  "key8": "3yaeZ96zFHd75qiaVm3MLCr3HebbHbB9zLAAYN12h45vyc615sgXw7WyacS9GoahCgthxf2tFwp3e6DRKJww6wCY",
  "key9": "4DpA7RKN2x88dnpHVFggRah5aBVyauho72sZU1gRFnuL2cm6TqpPmxh8NwFD8NwjBNbrKxmdjrtxykRdvazswUnb",
  "key10": "2WCd8sFqsyyrvMMgR8dpCu8ZK68ky6w1boMW8yAjjPeK9Ch7HjvFVXXwz3bnh9pTfgmDWVu1MoCMBnWMSzRByiN9",
  "key11": "2VWSNtxyFhh6doGwB62ysUUWyJT4LjaBC2pJcavJj2Ng4hNf131zTQKbJikG36VtVLaps4FXcfrwDfra1fuZPEzC",
  "key12": "5bSUMaqZ6EE8hZD4zJzSzWM6PwKXkLb63kd5hUvPsqZWDNENu2rrxkiVW33t4NruK2ZAdKWGDr9FZzFW7cTEGEAc",
  "key13": "5FSX5fEtivXA2sftZ16qZYvneUHuXqcrEYNweJbLkSSHUz1wRyHqfavQmMs4KKkEEVsRqA8MGV4Tzf31RNXEWijG",
  "key14": "28UUbbNeRQpLvG5rSyAcAogyfNVANZXB5xLhK9KpNFsV1UExwMde6sEDZUNM2WqZRNCKyX5Y3boyaVHs2ZAmLXMP",
  "key15": "ah8Vf1ZU89kfDJkvXRd2k1WpH7Ki9sRcQGMQwWGQHgdyXcWVZBdxut18zGgdC4iV84zM6c4nU5PAj8ZeMvrz4zb",
  "key16": "eD6E7quEiC8qSgCjdy2qYH5hPtHvEShfBu4zYu4jczJ3HgjS4VabQURAj6VK9RbwdSk81EUySTdvWQiz2naguvQ",
  "key17": "457v75Z2umJ1ABCZuLWUoTbhJdVyVQxtu3iCQ8QaJXCfWXKQcfCVf7RVq1wnM2L8dVdpv2BDhbtWzieUwhv2CJc1",
  "key18": "2445d3t8sKzyFryQU8WJ8z8nkogRrb3APgQvrAFvWJyJEQjqe2Wmf4jVoPWSuCxbj42LVJPNGYuTfgiMjFPqfmsv",
  "key19": "tLJWe3BsVM9wjN98LKnwJ2N2TB6kX1eJMLyZyiysg945MxrtdBgCEASidBEsoA9WaWMJoWGuyKeSmNDhVybqR7T",
  "key20": "5RiNqdmnSkApzdTagYw9fFonZ3GzDRURxN7691ZVf7sRHxLsgkr9kmsu66zRzuFvyqCxKFrXDBFt6cGnSs1DNmSW",
  "key21": "3p6DRLhyeBV5Wp4N2dBjEhoVDqH1z3NyxvHWBU6gbHL8STTycSoKsNRgMT5s4ZFL9stUFdMeqQuPiBhbVq2ZbpoM",
  "key22": "3Suy4ePFXyrTazhuSYrHSQdCPCzjMESBTdACauYsbPaJ9FsdpYkUisRg4rkHnrQM5iw64Tov3YHbcnn48JuNRYh9",
  "key23": "2kBriQ7GFoBKfSMgiVd8CcJKAmrbfXeKUbpCM5CzmPGGTVXJxCLWEfKocC8BTHbq3c9r4nHrZmMeHNyRTdvn5zXa",
  "key24": "2KsS9kjJ7tTxEY4wTMgDiyMLX2vbXr9ovy3toALdeU7RFXC7J71Je4UooK5gUYn3N8SqaNMwxSYRYfgmyZaAv7Bt",
  "key25": "31yfJBpYxkfTzxGXvXQT5eQ34vZ9qEGeBZ78DGSVqj3hWtUnurgFT53DKArnkXS4BHCce9aoQfXZvRDKQT7YxGHn",
  "key26": "4iHsDU4PGgxAr5e5Hk4it4YULcPyVqH3zScsHqwWRQvCxFbKXF7DgJ2t8msuWX2941aMXCRySjUpVqgpVYvUzFnw",
  "key27": "hJjY31ea6rDhs7AFb4ESD8tLgvXgjHfqf1RjjAEViWH4FRtLAUiPkUQdrbVsP99CcWNAxC56pg4QiiwnnpGdPLQ",
  "key28": "26kSepo939GFaibepnfBKzDVPNZBXCJLSNWVWfgBk7V15nuJf8FeghEKb8WxWn3Ui7quhpyLEs1kDJgsAzxGBDt9",
  "key29": "2XYfvGgm5BPYGGs85NeLDsEMaSYZfbgrFLrMDS8bJBEXJUKAQ53hQod1opMmERcwHAPV7GN9zT7qxax67Bc4ZWTx",
  "key30": "4eACdyEqdLV9AMN2uk7MJQ2XMYN1TEKMvsB3NN46bxWikrgdJuPjuawAcGUAoB2ZVnUEJeUeQzuW1YVP9jQRFroQ",
  "key31": "643xWcAEfDWw6zVemHuuZYiDdHe3kFdJA6SkpnYpoa6AdumCgGBJxMW3tNwwgJFE5YjxFqxpgKE6ncy85aRXZQNc",
  "key32": "5QrsFLk1w4ziTkU8XXUs2w4ZXsdovtiS9RmcrK6JiRaWeMRU3EYz8X8Wohc6zCpdDENdxVot6aNyWCPxEFiQmGLo",
  "key33": "pptVa2Gpn7TTSQ3UGuLoWKPPa7MkUs8DHiMRVwYUHqToQivnqDedk3bNwowPmc891tztrc3fSGQrTW9WSVQtr8B",
  "key34": "4J7RuiK3ZvjQHNaYKdgkVjuQQ6FXFhrmHPFV8ek2UAN9u9toWt3iUT5BceLus9Yhu1nFfyQTQ7mvjXNPWKgAWCmA",
  "key35": "5Zaqr2Ybj7XfeRaLATggmpBFviHwRy2Q6d4pAGUy4v6d3fFDpBB9DqpjCaD8bnFUzodPKGqed9CDgy7nLrW6sQEy",
  "key36": "DLpCgb5hGNzCJKJaoA2ABWZZqmSxTpkzeNyjxiEetuUNtKvs6h72XtUpgwf15LzVVQRt15J9fMexGqawVe13nDq",
  "key37": "4yA3PXFeiiXz6x2dYkxnAiMnmH7SdaShAcSZNjiwbDwGLrFbUZ31xQXAKCQupYreQPAe54VCPdS6TxwGNT1xoPip",
  "key38": "2q6hV76eQ42WXTCpK5iAFvFFnRNPSgFdzZUjzaXhXMDJVPbBFTUCxyTsBe5J5VuswG11PddsfZhTsAhmfyj1Lz4n",
  "key39": "2Hfr5pB9M4YcbqPeLVdMNdq1M3KE5ezH3EyDmLK9ykKrqBSZQ883SWgXF4F19FvcVmaS2UiGfyrCYFAvVoQ55tTY",
  "key40": "51s3u4ki8ks31TCNrrSEztZk7YUTK944q894RSafCQBAaoXJ4NQPbvYseTKHEo9fmgiTg1Fjx5EPvuvgQPE5NGXS",
  "key41": "2Pdx9MAEwirtm1fkWLRQNkpewQAsDb2FHviz7Ks4eitcSWdUA52LUgmCHYxC7SqX6F2JmMZtgrXdJXpwJJHuwpr2",
  "key42": "2uiFF4L2KqmAEqAjkgiRQV832FgrAvw8kVZSyAXC6SHiLLKizjJSYFDEqqrSNesH19q9dq3nvJk828GNToCYCM5b",
  "key43": "BCKKgUsxxBq3ChKoD8vfGp61YneZD2AYNw85e8TmGnxZ3x5CE11m89w7PfwuQ1iLtDyP8LV1JmeBarjopYdUXv2",
  "key44": "3eFP6xTNjxursoGroPvZhjHF266ga7Fqg7ivyfvWJQJY5N46BT1CjAQ9aesgpDyH1eB8xf1NA7xCw6FYe8j789MC"
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
