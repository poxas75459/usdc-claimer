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
    "t4SfF5tqoLWAPYMYQwC1NQWurJ2KBzeBdD8TajaSCMyEBuXvTV66eG4ZYhm2f5phHQ8ymhb94Z34GvZebiKzHxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rr4zqqQBoacnV2cUriFWkQRaAbT4AgCFecU5EharXKWDMEcB2TvRYUBQpuG43mydKe8yK34yqXG9zkBHkTo31cu",
  "key1": "3GLxDXDUwjqSwh2cthxkGr6NzLoNpFECopy3TyKY2JhaTEXuxHyJGyAJztYh1dszWoRAJUiAjavX9jNnoKcExbvT",
  "key2": "9LWyX4u6eSectBQnMSaNgoLU5oytj37Pz7M4TwCNGBCfVJbh17VNtTJTRLkCuYwbwH6xLLgK1YLLWa8jNpUiKPB",
  "key3": "5HUz6C146jpiBYLXWBoskxuZiknj9XC8CHCtXQHQ84TRCSYnDodfsA5xwd9gJG4rHpsjrQq1QZur4FqBP2Zfsmqg",
  "key4": "2RjEZnCiz7i698xmDYw3qJoTs52drADAqKi8beCkBBJTPPDNiwt61kvQhbPUUcNzEMNmAMv79D3LPM8zogPkYaUz",
  "key5": "2jy4JKMXyHvYxTjDcY53KwvwLTn9i8hoP3CkqVbGSUp49enCgZk4B9zdu6KEDxpWvshEmbYWgPb19kxii5iAqCCn",
  "key6": "spE5tCAySSMSyquQRHDqUpzLCLcigtfTSa1KzTtToBDNPM7Qz3e78ETNCg4Vj75M1K5d5RkyE9HH6C8A3QP5iHg",
  "key7": "2r274n7zCvCdgoLXGugaP9rcgigZ6TxTvk6XVPi1asm1d4hzZDXa2ne5wuLEgcJx6cGD9pW2vRbzWnyRhdUx7CcR",
  "key8": "37koPm6bAJBoiYygDkBs5xEukTV6xGFpf24LY5Tea6dapxjKXcdaA2WmoZuYcnRmXfuEXMxMvfww4qrrUZ1GbXhs",
  "key9": "2ARQRCuKqUXYr8UicgoEedw58STGFw9wRm6YKzoENLPG9qhGyxgG5H9vLBhLVWrYBneTdA8XueVMNF4RLp8XNjTB",
  "key10": "2ECn1rvtKP1o8T75xTKU1HtMqyqNazoFuM7RbGYYbem3JTkt2AhNDdXYU3btxFn5aC7mmPcmdF3fYGafHHxNhJmC",
  "key11": "5WbQfVKgjEP4GkQv6syLRByuny2JxKmPHJYeHUnkMg2mSMGKH6ZzkKhs4jxEh2q9MotFitdeFcZRtvm9Zemikfeq",
  "key12": "3Gimn8j51NjpKHgHU8LKaKY4JKoN99F7SUotEWAsVajFBgyihMgzYLbF5jC6H9nrSW1zhVCNvXWxvM12QZznDnWF",
  "key13": "Xx31VisRFmD1rFxWEsxSNztKW3ENUwsnMTwgj5GQDeBWMW7ZbudAex4iD16SkDzqXyfD7Jfs6KZR4BietWe5pcN",
  "key14": "2bgNBTmFaduJ6Y48jL9vsRKYzJMUBgkQF7SuuQq5zBNnGZ1QCX1rDQSxoqY4H1MbPF1LjGmUWn87cQ1JoHuBxP7K",
  "key15": "2SLs8BLtfUXcMpk8H9dd6VsDLHTa2MfsG3mefcKhLjK12dbkw99F6peP3Z6n921See49HXcsamESjSBoWwuYDxSd",
  "key16": "2t6b7DBww6dL9YaMDFJ81D1foN758o8Eh4YfvTY2fLFiGgSGaxJuZRuj3nbvhvRqMqQJG3k3swbH8AkuY4FSV2uP",
  "key17": "2DPtNBBaJqPxaEuaYPxVszB4v3WKs7ZHG7zzuLRPuaP6aiJfkpvaoZUJXCdBqR5GG8qL5qSs9SdS7khNg37dbKyS",
  "key18": "5JdZjkzLgPQNTc2qFdXwW62TyMxYHPhrHZmmEvEpXB4Lr21pFNfapXRcf3KEtupat6tq9LNtVL2oc9QxapumPNYQ",
  "key19": "3sbYnKWH1fEufW6xv94hZRzwFPLRsio6TfqiN9m5CZfB8m8L9bpHPouQB6tf5PcV88kGNYrhamTwQNE4xdEvTRxr",
  "key20": "2exMVh9JYXmiuw1CbA4qy8sYerr31gQaYEgAHvdf13iDJxJWBX6K1uxrKjozwZPRamyZ7eNE1Dhfhp5Nxc6YNdsp",
  "key21": "4m1VnT5XQrtoPiHwi6ZdhvtD321EwRCZRzXKFtJuViQk5tXb9xikR4kYffxvw6CT3z6mFhoxBMFWLv4paFFkWJKG",
  "key22": "2TWJnyYnX3kcNPreFxRCNypiZ91YNxAnuGUNUtRF41hDbXQBo5gALPgz9q29VAtxzU6W9hh2yXLV4L687SKVmiqv",
  "key23": "4A54qhDtAVKTK3LxX5Yetk6JSL3DeFKZSup97gv1UVRe9BXC4qrntbEwRGQqGiTNjhu6ZS4JSSDSW6ej2eKfjGPT",
  "key24": "65um38Ggd9YHFpRLTy5KwGzNFu8PGHz8z3dDvbCxCfRQ9yEdWagvhv1KkWNSwFATqvjP61LYLpGNe2kgD2fXF7Q4",
  "key25": "ZD1uV7poZT3BvsuC2oPQfq9cmvq82kJ1Dk4VBT1FRR1BnobMJuN8FuHhsbBXGRvhYgBNfLQho43UpYepx7KVeQv",
  "key26": "5zu7qNsuCcLvkASxLoQodLgtkAbi17kzoR6R6tQ4XrxG2SH7W2gwcvSqhKm25WF4oZahLvzAzTmwTVcW97bueJtj",
  "key27": "5iUkUh7dPqLXJevMAYjcCgyUgqYSCMocJghEGv3F1wfZEbFaz7cTuyYk4xaBE2inm8bnRVgTmhGn9VCqHSQZRibY",
  "key28": "3ke5d5JLuXXX77sAUmNt1PwoEnhdu5fdUUDbJGeQr1X8eL1RjzEhPhzyeFBRYmoJNc7TTKt4dorSrjuy2TBQukC4",
  "key29": "424KF83oR5K4zHK27MpizkrzyGinGCyr49oZCMaj4vPzVDwkGzFrQfZYvZNd5QAgbT5VjrVG2ZHFwBAoZQezMER6",
  "key30": "5UqgKvZYh5fvjGBUU7nySsECrCFqzoGFmd8ebNE4dpCZyUscpQxYYSsTTtPG1QA9EefXvzUF3FNQhsdPnDjxZc6t",
  "key31": "zSJHxeNPGNRKcXxkhKmY96L4CNaUQ3pph9hm8McMXMZNfKQW8jExk5ZcsS1Ws3TD4WFxURJ18cKo2CxFBx78VkJ",
  "key32": "3nan2oFom34bL8P3mJkahv2z4WC4icCpHn4FEX9CHga3FzTmkFAjchCAv55RB4UEugAED41HHU8a2UsCc97Fc14m",
  "key33": "5mHSzVxFasVhJTnn5MWLARZBRUwYXsxDBRqvwE7qRYY1zy66m7DGEjQ1tXtzvTmue8Yg5npmrG11cEhrUftAT4X1",
  "key34": "4vnnoZM2sNF9AKNedyghMneufJRAqdM4bXYfsw5P8jvupiXF9fze9vbuvCQ8MuTg5RcQJBQ4K7pQQzPhdWqGtCBd",
  "key35": "5LEpaR4uP5CWRMRAZShfrR2y33jpWGq64pis45ANqgjFhYRAUGEq2GoTg61qRBScRbryG71wpGjtAxvEqKGjtu7H",
  "key36": "2F3DAbxRS8EgDiwLDNdVJ3wUHX5vMWY8pPGEc3VDFaYwQjsJ6YcBJDhKqdzyMHkontJpZC3iMTBfNaMVo6nkxLAv",
  "key37": "58b3HZ7VCvKaFtisAN3QYPLP7zz4BXwDcDJmwxTWurseoM6DQ4iQtJJETkeFEouzZDnJe7UuRTj9ZTNYxbhNQupT",
  "key38": "5XKxx1kAZsp8iFYRuLnHMBxa8oxxFCfeujnxAW8rtExutHgji2iEiN4jwZMNGVPu5G6sDCrGxA31dpaDYCRrScfS",
  "key39": "GuJ29LUpEaoYBDh1ANGB1dschcWUqhec5vXkJs7n3gB4ScNH551N6DV95RJVbB7BS267Zyx3na6y7fW7yi686Ao",
  "key40": "44acUDG2tDHRyEf9qCkJekJ51iamBwH7hjLbXBKsAYxbtz48uud9AnQUDUyGBDDkQ9gEfY5HqQMcALd9iGckKgzz",
  "key41": "4MUSnGRiVRdGbvnbgEYBBvmzndXZvJgXohQ4UMgpzF5ShedRBrjQwpneJT1ddFEUfTkL74HGHjuRzSwcxVsZFWAV",
  "key42": "3HCYbPvX9U5RtznPkHAx7wuhnhWXk3vGWQyK3ZGowgHL4aT8KJxdBqKNfc8cajWQkciEx1zemJ5PDVnecbmY8oYh",
  "key43": "5psPaWnR2voNipbLgo2vw84nbkKYZahAdzN8aLUWPpbTqSSgiyoR3SnZUXHCrsXUA5iMHazfSeDeG9hoCqwMwj6K",
  "key44": "4xer2okhPivwKhJZpnR5BCBPQ8HW6riXc97Cp4Coseivth5rZT7RPLYzgbCAMo7cNmQACUsFd5JDUsJZdD3EsscS",
  "key45": "48EmCMMD8RiDxgHEDYvvEUAUtjMDY2xMEsMPJ11bQxidwxSFp9e1dGYHoAh2R6csitJW9XW7F7gcZR9MFNUhmMuJ",
  "key46": "5h6sr5Q6SgvSFYQm5ein4a83JvM8JhDDiWAurfeKU85X9fAjcXfpMxY6WhQ2d54AatgRyeqVUhBEgeF15GezsYTj"
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
