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
    "412W9YcPp2YDRLqJFrfF5DAjyHQraTFhyRnozzetYzEqKSTAZRCqW11MSXZRmjbjwHcVz273W5pCV7gVdw2hdzkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VLgAXgzUrAMu8sKbbCPmvCihc4HQx76DRCabhnG2dKQUUo4vzXGMSiyUEz3k3oyF1vC7Bi2omF1TrG1m7MSRAmP",
  "key1": "23vrWiiZV4CSJYXJCshfVwxSmvyEVTk2N9uzzcgoRWYzQ9BE2dn6WBQndkfSdTGoMTDH1s2qw3C4G69so7nfiyrA",
  "key2": "3QLCWHd3iFD92tXuPrUPsJVTzUYMtZnSfmrFi26fBy2fn9F3nUpY8DpCtphBxtVEDpL6H4hDpfbaBVZRvkKfFAhA",
  "key3": "57dc99MsjX8qefoR7U4fACooUEkB3vhh7TLBsptVS7KKKd1w4btzMNQJREmvPKUSu1uCtidXy9bj5yPE2LKirtJz",
  "key4": "3KeSVkeeUQmeJeCgcjKYvXWYGw3moDmVtgnzZntVh13urSwgXTCEUUS5BUMzdabaSqUV7mhpefnLQnAjoDonLuEJ",
  "key5": "3cBGWkMAhX6fskMHyqqW8zgfpGuWbkYZcQzPJJ1cU84NJhDBfK5peYdirvv39RfqR6w4AgN9NaUUs7KRFi7CoeeT",
  "key6": "2kwmxaHeYysxsxQXwAb9C8PthFwAEn3XkUa2zCLU5Zn5NErEsTWafkztNPcyLtESsRL83Z8FvKQwfKSZd6s371sG",
  "key7": "5q9x8ESdwRLqou4fya7ik4YqRnbJjVpbWA5o7Abpu47dqYwndy5uuPcBWGu7NWNNXtf1YpLJQhJQWHFAsafGkQia",
  "key8": "6v1WGKPqSmpUeRqMK1Z3Ke8dXWLNynyoDxVYMWQV9Zio42A7rgwsfkonrfTjtuCchMjkoCEuqsvBzwZeCEkNsA3",
  "key9": "CpLSTCF2sz7QahiZS7xUio7bdu3mQjSd78P55wQS6haMKVM7YMfmG48a4JyYs5A4zxcpYhRNAjqHGtP1DMmoG5Z",
  "key10": "5HNmE8sqzCdtMBasKzjPzhRTUFA1Spev7rS1PVVc1DX528m1Boy2GivgTJnfhwun9yYq8JgBvT1XXUke59KkZ3Ka",
  "key11": "3bhragACZNDWZdKJGFE5HuPoux3F7HEBjt93SkRsrvsQohfBa5HaGRpFkGacJ2B5q9ZceGJ4XGUgSeXnSjzSAdE4",
  "key12": "4SnURzWoChppJyGPn4SPGozmy4b6LgmkeDbQ323vX46L2AYRUawAusFvRoL4dwufFufE1f9ivFrnyTkPQXr3Xsbd",
  "key13": "2LbqURBeXSyWGPUYcioGdCQAcFbg2fSBdSL4iHbjevBP4wzonB2LmTRRkjxpAitUfYxdeviy8QA4mfNgr4ZEyqgN",
  "key14": "5nXx8dYu7ogHsBCUQMjzEaWcf261XEXdkWNts4jq57k5FCmGjpG4CtM6rPBHRM9UgrJ5CwkbDstdacuc2L91kMZB",
  "key15": "5ra8PbxP2LLwGc8v5viTW3foMgM49YuonfQZxMUWNA7pxjez9y283Zjpvs6wznNPi62Raw1Xgv6SFu4nCHnckjPL",
  "key16": "3EcXS3NDj1B2gZKrF3Bq114whdyZpTUwyeNPf564GoSJLG3pVyc4dcvQmgj7G32RSrghXXwiyt2v4wYaN9wrWwvZ",
  "key17": "2nCSDDy7uR972pMbxjf85gRgp7tidcNca2ikv1osfLQc6f3JYo9p8JfrQr9iW3xt7oF7HRQxeyt73gai6A24J5ZY",
  "key18": "3ceSDrc8veKkm8XqbW5jBBAi1uuXmudPEgeAMeCrrXe1McFuS3LNjrUpa6WGQYHitabhVTL2UUKKxKbwUmguJsJV",
  "key19": "2HLpoDJn6B3YpixmzPevSXVrAypzBa4Yfe6hMGAKPANXHoy7FpniR6dPPqfVc62767X5UrSWeRUQeeGrPh4iWpsT",
  "key20": "5XLczDpc6xhaSVJ3yQQdY7ysdYLsT75uvBDyVUUYdA7Ted5qSJW2mWsTRVkyLUeMB8cMki36Kyw6nBLJmHo2s6b1",
  "key21": "mB4CfSWvGEMhmLYNLpUbbsGMC3AU8CtRNTYb4h5xkw2A3KcucQauQCa1tEsAo1zV53tFr4APpe3pV85mLgGZdLo",
  "key22": "Lb388RA5NChq45NKF7sCfFMC9atUx7ic5NdzpHAHnUgcDxsHMCoYbXV7dxEuZ3RqGe82Hpu6GL3S4875JUbMKwk",
  "key23": "3p6pDSW9wsoyh1PpDJbTKDxVbkQbjLiJ2D5GAXHVCiswoxo3Les1eoDPhbJSBvDJXRJwcsTYYW6P7AQg7M9LCo9Z",
  "key24": "63xr983gy4kyq28DKNFMLUGZkB5Hnpoem6Wp3Upa8j1iWiR87dJqm6hHkrW2U7XhSL7w15RUBJJ1hD5jFGGTTurk",
  "key25": "31LoZAkoFojTjnzLwRcag34XaMpGKRBSd5tKMkmFpbfHZotUHmoR9eiRXy1SSHb6yBFaRtgJTcQKc4zkLfq6Ya2M",
  "key26": "2fYtQE8J3kzHDivZ6eUjrJ8BakmFRmMFj9PVepuvVdxg5Uj84G8FrUfazHu4v5zrUq6kyT9UcCJjHgXC5eConqKH",
  "key27": "Lp3QonPucjSEiJHH1Z9bQGhxR4uhXiYT3RBrmu8nFRfvFzNtv9FLvfjyJMcjZ9HKtHE1EKbXhzzJqDni68gmcBJ",
  "key28": "52dcLWg7FKHhU9s3a71uN58GNqz2eHFuX8utpaoo1sm2mzGsLaCpZ4YwdcT1yjVwUvr6FRstjBt4faKP3AaiLMyb",
  "key29": "324eJdHAhRiFaVKZix8aByqHyhmKk3BPxhVE7e53MKkxR7Vbfcpsc4ufQyYPwzLgLudUk8zjXBgGCPaAiRUA352Y",
  "key30": "3shMpqZjsQHa9m2rkjXU8KQkShPY9kQiKwuqXPqzGZgh5rD6YRc3bzsVff67jiXLA9zgWGXr6reqxeZ2jmnCNm9W",
  "key31": "5svNvYjxKcdUk3UhZm6HHpkbtJbivWLeFxgT3odtCaxDeExUkEustUkvuYXNAYNoNg7ec6MLjD291wTeZs8Vfjoh",
  "key32": "3NYV55r7XFDyFdiGdRXtEWfi8tnLxRErfZKFxY7rRBz9pPvjgCU1USfmS8LQbSNYJLZVovx9jF47zcKZsezaLYvT",
  "key33": "5yuHiqE5CbYXXLfAMWQHUCcemLUihvw8H2D7TayJK46LTFwaqoPyQPYFQT7X92moFTUEkRLkps4oyrZh3eHpiXax",
  "key34": "VKAwcVv5MyUfmBdxmrLYsGp9WFxq9PmezP1uWb3hM6ebTNaWoGGcTR8qiBpfy8pLNyeVvzpg5UDoJMx98iJke9b",
  "key35": "52T8s3gyJLHg5XKUYSxMWVdbV13BGMYPWWNQrJztV5Ub7PaS2gEwHZqgX5dXHHRJaWVdSrv6Yk3ji3X2o9HFBgQ9",
  "key36": "4f2aQa6dEhoctEYWMmgHPm8c8oXNJrPzGcUTic4TgFyLAtRqsaLSp512CBPLVn2JQNLpJXyVLnAQUkQpayEFitK6",
  "key37": "3ierURmNi7R1ut42NtVdz3j18Sr98vfDiegvpUpuJ4pV8VN4NQt8Y2PL44t8was576VZpHSqhdyJfkb7WJxUpBA6",
  "key38": "2cSjZSG8syzBcSnui8ghuEzMRexVFJjoWGa493dkgm2rC1ej91FAXhNpNFBBtGcySeudSJ7R3AaZvwJX157y6qrZ",
  "key39": "4HbhvB1J88pa4ssXRfNsgrBvHAhFEKJWtN7iQHyeo2ex92mgpJ4RtxkyCJyn8wwCNUmP78Q8YqciSwe5mKbXMfRd",
  "key40": "2ycYPfawRaeSuDAxs9AQNRcqfJUCDua9iAeXAWuePB1j95myVkiyRCAobgG47FgiJoW8xiHs2PapyRde4BP3QD9d",
  "key41": "3Xgj4H1xMZXNe1TCJoZUo6KHB2VfGtdoFubLGV4qhhmiGi5z1G9yTW2kVUwNPfKLeVmWrkvVmRS9o4AH6CxHwCCJ",
  "key42": "5FKAbYYP5sTnPV6CyMQFzfUabKdjcv4YizKzhFFfEVB8GoN12DssipubBEhd2MsZ6NkMgagmeCfP5539tdNhRp5w",
  "key43": "5jdM8fiFvizmePb18hWXBAcS5p2YVMccewDZNsiYoNU7Sdxi8gSio36ruPMVBVAxmjXxSqGDhLQ1N74xc1dse6Kq",
  "key44": "37wrUtBaPn8y6fuJTM9StiAY9UQemYT7ysSgnpYogT8B5E8PC7RwjBCBwyAR4W4JnhvXR3T6MqPMC9Pu9vNqW35W",
  "key45": "4PF1hFGt1ZQmgUCGNr4qzrEDggANRM9r49SXbFTgh3UdZXFdbM1ZU6PwUHnB3eXT26C2LJTeqCWFaHTgtqnY9x8x",
  "key46": "64iapCJUcqr4D5ynq6uhtHZznxFNsdMkc5S58pSLdpYSsycQzLU13tGuhQN7P9DxCdxk262UZx3Gpmv1MvySqmgL",
  "key47": "5JmjfQipsGZn7hiv8G7JfGYUxiVivpB8aUij5ZjgPJkEcwt3x6T5K8AV1LhxJg7UZiGzZ5FL5wyYnUqXcT5YyKm2",
  "key48": "3Hb1krP33t8ti1epDMv2oJ6r4UJ6LkGt2unukVd7JEY5RK1e4kxvUQ8aWavz5XWMMGT64onntg8kfFLzw3hL1WHf"
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
