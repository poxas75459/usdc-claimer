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
    "25WqS4Z4KvdnUC6mVqHVvUVDjcXYWAGTe5wjbtVxSBJW13iY63RDGG4rCHmQK84ouuJNPY6L42fuYJ9ydAbB9HgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21HwgATHPpnZnDJs47CFHAd8W19bwLVbyAi6NviyCP5pkL9BvYpgibq65HEN45pcBhNczVJBMvcD11qqLHZQJejE",
  "key1": "KNahKzQc1RRfDWvhPPggjyxDmm2KtP15gpCH5XX8p4Xah8Avo3UqiX2ZBDvfU2ij6Bbav4JrGPxFRKyCwvS3Kdx",
  "key2": "2dL5h7TTcTh1BKhTiJR3vTb4J7WtJRkerH6EPiaWhZaTZWEcHa42D6t4mfKZpDso7WJBXH7B8JwtJUQGD2GNmjUq",
  "key3": "41BpqkB1DWhskLYxXn9GW6WpoqB1DTZff3mWEcthtQ8dgbFnoTSQEejUVrTfzVA5mBwP2xVQrarS31y8hSc6HpjH",
  "key4": "TzfGRkxDq3nUDzXtueLb4vJ2U5axZyizsfynfs28vMAPFwbTu9RkpCa48nRuRf5NYsmUCyBhvZYryfWYxdgkpeE",
  "key5": "6FGQQq2jKjQ6twUu4uAbw7WHfwnBDfiCc6LzxJbWVo8FT2rhT4XuTfswu4pFgkHvdZDEokdbUPgDrioPRAPqoAH",
  "key6": "3ASmb5wRASjJe1WLK6917SjqBCWvAk2qokiBwKymEto2A9LsWqjtyYd328ArSYgsskn8U9MuGbk4q5jLxvTFDS61",
  "key7": "54khWKhwrzBMXbraXZZchZkseLUqfhCUXkEK71ynwFxaDRwybdgQCqwK8oRV8gyyAXajRfr3QByu8vwKVTGk6APk",
  "key8": "5Cp49Qd4SyhcGWgrvT5dacSGUftA9ksjbrf5Y6SqFdi3keCbdvbpqTZjCXk5FhmWGPjJSLL3EjG8gQ1wMxqY39kE",
  "key9": "PXWhEpLgpu1YfVXX9QmJbQJJwQDQXTy9vfMfwKpnboP9P2QAMKuB8GgRmBvFWVeT73S1GYGNTEDFDg7tp9PoqST",
  "key10": "2WvpRffBEmnanJ6B1CaQuqQRsxwFsPpKQ9MJmL8d8eGMfyRbNnKDSef6buJ6aFHLjGCf88K7AR1GwbxADAgn2EGf",
  "key11": "5Dy2Bw95GtQ69shkbtiT6QKVF9WSAVPc8FR6SABNaQZj6YobyVCZiwBVPQNJW5MXdp691pHMF9wYAzcJzSix4hzU",
  "key12": "5dWJp1RXe3GmUXXP5UXNiPMVCCCMD4siC9m1nz8yGh5soxajmceTha48VEFJeA2EZYYFLA4kXUFc52VDtuQzHykC",
  "key13": "2ZwcLEvccQRLv52P76Wgg3zJh4eZAmDDY2DsZe8XgqUZZTDTCSabiRedgJZvHxGqgok5HuR2HKks3uiY4d4DKWwo",
  "key14": "2kU27qSQGvXjYn7topDcCCrtiACrBin4Fqdu2LnJLjGT5kGsxTed359XwQEhuDirnh45B9X5PG3sqPrc4WnrKm6Q",
  "key15": "2uLV6MABR9kLbHvVnrLLmXSQgR8tWZhLTiv9YNxbuxLHz6MSqSM3uiNisTJagfhdfZkQVv1RfKdugzCdwSQ5DDjE",
  "key16": "cMRWPyri1tcMAFgGJn6qXXoBR8zCsmd8A4hweGPrJCArpAGogw4PghHnxJ8NEKAVUb6r7NUSnj9rpq5QC6rvcXV",
  "key17": "Cpgt682PsiGJqHYYvkChZomQntcBwPvTZw7tjByyTD5e2bW4z4K2x4vZtCVv87inkubNrcVUM9qvmZKKFsb6XTW",
  "key18": "4vuWWs6Q4KgD6zyWqTUuVYtg2onoRryoDkAeTiZKwjjL5etE5gt8AP77ad8tsN9kTyrzsNwcWrRxhS2VEKYSN5Er",
  "key19": "4P9QZ4EwqscmyfxAvJqqjHeAbFotUcJPZv1RKdYa3oRTMxaz6yqgKbmxsLV9sHQwmhmfoizBzCpSiuLNm6zdTRX3",
  "key20": "2c6KUE15a5FPPWR7PVdKgEWj3hTK2LeQY8JViZwX32LrJgwch9utF9Y6PWza9q9cjD59SRLBuUbRwGTGr5J5d6AL",
  "key21": "2bqQiPqG2AeFjFv92Fh1gN1oSuebu8JxnSHenHY1CfKCEHFAU98NijwhBwQtnNnxyWEgG9aC6jK7LNazukAeGNW5",
  "key22": "4Ewn3YDLfWEBM2czvnV8duP6xTKE7naxXRVLMvzz54Sf95oHXQdA2sig3iyh3zEajQSAg6T94ZHJYZSE86Gy1hjZ",
  "key23": "54xdfVa71kPDfTvwArCgMFyazv8zXCLsugomHC6CHZG47oFwAQRBSZvH88V9UxAawBo7ecZQ3fCUAFymgT8BW6VR",
  "key24": "4web4pzC2RULv57L5w7YjxTorTvtcrRypD1z4PEC17qsgJzcnohYD2h7Vs5xRosQns8swUK4GpMftKLDoJnrvSkh",
  "key25": "4onf9pNZKAVooSCHvSXCJc6RnnSYAv94dSfRNAME1nApYuVUe9w2CG3p8fRDzLXGKdbvLedP4aekhHjbUzMhyhzQ",
  "key26": "2KyxXFjbBRRYoG4TJDjzeUmDwknVwu7qR7AMyQu7qtp7tAfGJkTHPAXPVoXECaLLpqmFUNqqQKDxeMMBQdxFcuTm",
  "key27": "5KtNh3xSrwmxesCeshecquiDv8VCi5P9UgttSY79AbMLQwGtJo7zdhFoTieos78MJof7QEDswYNBj7cUqx1mixiZ",
  "key28": "47QrG9E6Bu91CTMunPN2zZ5fGu3pRvXhryhLhEgZqkEgEbWyAtzBNZKerLkBGsp9jqDJtWz3VoQDmoECqeqXqQMc",
  "key29": "2YVkWPzJFTuwisxQ5b7hQ2iAvYdD5DHM9ApzL7d66EtMciUFZZNsVThR2RgmcTfXZ29Mjfcbfh6oXoVuYfWaCnY9",
  "key30": "3WM1AQ72v3L5eBTY9CnTjgU5jFyEKSVyiFGjeaXfRxcS22UcB27GqJhCBzDjpMjgU65aZEGJ95PzDWDSftpbsBJF",
  "key31": "3shP34HqNyKmaNgpGT4NQfuPJNXES5Rki9dQVWAAPkAqHgM1Chns35RGaqvXXHPsQoqLjELt8fQTxQURCQEtsxZU",
  "key32": "TxUZ5x91WZdmfkXzkKAkxa1FaqzLNKbhiLqQ9ZyrKiNyrQfckWzo5h9kMiZhSznnabm5nMopF6aXTVLax4f5HNA",
  "key33": "6DPyx7vAByHXgQK7URQcyZoDwoLG1CrBKUVewJa2QKUCAUnq14w5meVn4rLZV8bE3aojDEgsYHh8Mv3ygyBRk7b",
  "key34": "3jJvyWmtfPxfLY1GWqW1wefnoYn5ro1tPnuvDzbDBpH8s4cJzHbpqfr8rPUTivieaYFMMFcYgw2rEtFaxY6oh4FP",
  "key35": "qqJzQTQAbPhLJa7PUzxPcScKPXtrEX3oHDEJihrDsGuesmYctd9YSgpoY4PpEPkZ4uYTzXCQMW6ECRXcq57EcA4",
  "key36": "3mEnenmJFDtWJvAWSw4h54TfrTFBXPKmoaJUnNeWCSeUvQ6t8ir319yWen93KseRkxH5TvKMgZkvGipSgcKYC8Zo",
  "key37": "5Lxh6n56eNKUSML75xk6VCvQ8k4d1pKbStXDr68eNmmYMfpzvrExgEfQsQwsYLZcbrhjLm7ctsGDutcHHM8KF6FT",
  "key38": "4gov9JbAdKnW1b3gx9fQ46vCeQHM3pHvN5WX7chJbRqAvgwpgVGtRUHeoibs1aTpZQdBg2LYFyNYwqwzuN7aTfrb",
  "key39": "43evrFwnopCytX6BeV7nvkY77eHYg6LSQtWa4Tkrd7GsPBcf77TyZYVK5zswTbbuhYxA8Ho4j5SkP2fp9nuym3CM",
  "key40": "39ZPDrYzjRZEBWhWxffeGuhb9GJQJW2nm3gLPmyY34ZkFJFt2URz24Hfsuj49tBEfup439VsdFHfQWg8DrbfwBsv",
  "key41": "3w37n1d26eLFoiRTz5ymTjpLvFeP5FfkfCvfJYmmz92TUXDXiVmKKjEaM5jDpZLm2dP4RR2rehJwWtkBqjNBAAjc",
  "key42": "23Q99ZRN8jnWif7wpSJLVfUnB2i8DwVb2oehDKB6bzGLgXVJzM882V89ioo3nsSdSQXfAKAZKHTaJ3Jkib8i9G1v",
  "key43": "36ucLAikEv9hdXMkUW6nJXFTbGES9TZxDGkBwpTiEGSMow4f9i3JWjpUpXNfZCWmSBNJNMPz5kWJb1RUC7qHG24Y",
  "key44": "3PHcikz5yDHr1pdSFULFJX8HuxrPDbJ2nAy2mZCmSCpnQmToHDphSCCV2pFszx3UgvUsyBqfi89y5ZjgXJXRyMo6",
  "key45": "3uiKWvdcgHXyxdnyeg4ckRNo4xzSop7EMPM9rQZuYPuJrVrVY4PkM7azeHAe5Essw657aFq5fDbGJ8a75qHJg4DA",
  "key46": "4rQYEDiwocZWxKp9L8Fyzmmt5VfNS1M2ZtMGWGBAzWUAL69BfpyRPjAD3K4qKndM5qgYYvZdJb6ttJuCVfZZchot",
  "key47": "5Yssgkm1AzSJxkYSyi44eQNk4qzTsD9KBtmQi9F7hsJLMKwr4ajvz2ZDjzNzzziiusW4vUdApthWMts6z3FaQ7ZP"
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
