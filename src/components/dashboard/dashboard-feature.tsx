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
    "2ynJPGCetWoVfNq9HRD1AcQysturoy48cps2E1D4x3nyhRMeNDYaFKmWFYjb8Wzon6KkCMJmiABNPHnW2f12Hnpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jmztvoz3ikUEMgJHc1HrMd3jdkFooXU29jYkCQhFJK9sLrAqJRnxTvzrCYuoqDymBQ8JEScem81TE4kgfkeXLoS",
  "key1": "3XMdHMJjPPCYS2d4KVWUgHJK83zXuJGYBeuMzHAEZnqmkSCXbvsSF393zRwHYeundCUarGwFiAXKKtJcoQ1uhrVw",
  "key2": "24dcAjV9HG7xEx5nxeBvYxynBfbSkhktxHCYuR6yMFuTCWHK9DPwJ3yRcCo92c8Dng3KGYhChw7NwdfgNZGZLFg2",
  "key3": "yshZsxu1JgdypD6mJwyjYQV22rTVgFjubQM9qUbte26bkvy5TfSnVnVeNE29XsckEbyUjKB6yMdt51EU9Rc1WAj",
  "key4": "5MCmKmAD9yN7k8AuHa2BtDx8NF6qxiYbCe1AuxgpTzmgeKWBkekeMAxMQiDvKMhQLqXwT2SQBL3XPebfGh54uWo4",
  "key5": "4DeeJoiqyFvh6tFGMu9Y2LYXHHqSWm5qN1mDMwKANucTQgU6P3y6icmSemmKbopayu4TuvjpG9Un73vGmAynu3i3",
  "key6": "E4osPBTF5odtnP6QGaUmiEZcdp7L6MpudjDH1XPDq4CYVxsA9afTr7sNM1RHsBVHSugAxMQVnvKZsxQfw7ZtAaS",
  "key7": "4NmUjvz2QENDabdpgwdv8ouFrBYoFgzyrrppuReyTSJgFRbNqmWZ4DdWzB4Ni7uXAWY649HLj1F2AYhgVvDVoSZQ",
  "key8": "5wjkEpLtQZKrHQRDsS2wmuVBVMc3XKUL6cazq3hnNh5JYsreWUvXFeMnuNv9JuDATzKAMhSGyCp1YKVZF2rK2GKr",
  "key9": "3PsPVS7SZaY1WUqP3X8NbJ4jgiyGS2SGLf75AhrRnnKosgdjUXrEKaKwNqxy63imNMtbumPkVxLtr2qyvoswiniA",
  "key10": "2SAze9FbHREQWJxExVUEMRkPcmNnKdyYgGHFYp1Tkw3hVCaRf3XCjd9amV4xmTURWip5ABXEStNfWtGoTirbPiXp",
  "key11": "5S8GqwopMZjyaAKoX1vJyBiRtvVmGn5zfoGWza65ha9P2jPF8iboyfM99xVGwLnDGUnKt18DxftwTWn4zQgBUoBp",
  "key12": "2BhWfUuRYSVaVcFCAw7vZNM873h6yanf51hwaLYqesvCg63q6u7nmiPSxqfbTarme7JmSpnEC4Mmk6AC9cfyXJEj",
  "key13": "3w7FskmH7R6xe3tsAJNpT2YQryyNLURYkCBjfguX6sJWgckEVk3644HYeRDQXPbfXWHH8AwNh8nBhenGViNpqKwU",
  "key14": "246Bbgvac3uGAfLBtaa8ZvAuppXWnULtsbXF87juTGVtj6kg9QY9bHwmLjiLUE1bP9dDeAJyXDefWXNor1nHrWf2",
  "key15": "2biz316wPzeb2S1E7jbNTkRyPJqSNk5GhvCVxvwtFjcxzLDmafse1NiHdS9y8ZV6Ezh5pttRTb8d5MmVGur6PjCG",
  "key16": "5rhuJF7fGWzWhBuoy84BQ3Jz7g3hVHmnaTcUwowuC1mEMjCuFrYkYnVN8D2KwJDL5Lrq6HvjmWvkd2E3hdarHZSk",
  "key17": "4s7pMzNuJtFYbLDxVCiGhDwNPE5P7Nawhrt339kqL8GWiSkBW8JDBJuwGmpAjcTwQP1UyD14byZUmC5MXjUPykNk",
  "key18": "3D9ZNd4dckVvkBEmWKfmiPLUpwuas8bRGp5ES4VorqBM1UBFAYxYabhGS9LEanmCP99dYKjSG8SDWXMvygmb6euK",
  "key19": "32qNedvw9pMRdzBrSsreSCL3bbP4EgabXxpEw8bHStfmH7Mkvf5dqqioxQxko6SHZTobMSyzPjyzghYAJJdVEf7f",
  "key20": "cjRu3rkwwmN4dCWQTAg6nmwk2EBfmCJtMo2TsaNsFgArvidhfa9gkeuKwQTx3CtDdmwn6W7BdFHaA7VYrui86Jx",
  "key21": "diw6tLzfCiL5nbp5L1mkSQ8N1yEVj9e1eVVRnmRFVE7etgePCamQz6RyQBykQFvRwNMyjUm14VsnuH52zrnHEH2",
  "key22": "FP79zyG7GRXxMHPrvUWK6E83R2oUzJB3edAjd2eW8em8k4mn4278ESmobVYAGKBssi5HMhfQ5tkXqHgNcN5PSUv",
  "key23": "3WeiGD6TQYQCBsZBmMJPtD9Qxk6Q7qp8CmUbyk9HyGwGUtjjwgZQz2iKxuvdzTFzYMmZdZ9MxD3bK3hUn2Awn1rq",
  "key24": "2Qwe47fivNCcefXxSBtTKXB9o2tUcLQRLR7rFWYvAmBCM3pTS5Q4JrvMSoCbYeU8omEdfq48zbEuP8cQJbLtzxGv",
  "key25": "55QkCTaf25V5UyrGrb8VvxEeeoDg3sEeFzFJ2Ug1nvwjTmsaJGqpbUJHC65vv5Frr7AzxUohn8AxWsj11f12ZcdH",
  "key26": "5S955Koq5ZVajkv56hGz1zeuJuX4TKdqiN8CpVyckBvx6yFnao1SgXxqrbMmxQ4xKQBbaiv78mzXiAEr26bj2PLT",
  "key27": "aSGKgTRmh5ioViiR2UZN2t3yYtFFwZkgy2usn21iD4bqveA1uRMTzb1uCK4hHTWMVyMsbPpW7YjBb4JckzqCJyV",
  "key28": "5Fh87asa1oKV3vpVagQbbG8popGV3gXoENVKJ9Rvv7iPTszzDwNPHEaxVJeimmFGGrJ7Q7cqCRCne6BcAApJncPz",
  "key29": "5P8hLzL6t7RWTREHurfJHqSKvj36uREk6zfzaMsXnm9TkeEJ52Ge9WzS4tvNRTphwG4MEDHCPArXsnvDBsWjuWiA",
  "key30": "2tNDDUo3sDPWGWRdrFdxbXRmQ3mMzkrxsVYofJG6pCjEr3wLzCeMAHVKeEqxs7ZMjRxb8SWLVmiFXjQXK7cA1SCZ",
  "key31": "4c5v4uDE3KvohLmZD46cGHf7rpcLepuAaovhG3ZvzrZJ4xri43YxJN9sGLpcmLckdZAJcgyTCmtMsTHLT5zcJLC5",
  "key32": "3nUQWu7VGiTxP9iY9stC3c2cXhjgvzag7XiBWAUkKdsVv93UDrWJa6Yxz5MB9Cn5SHmYapZ2phGQF9uAn3jRMjx8",
  "key33": "33fcxoc9xCkGLxKDq5u4hQeM4vohkKbwvPTpRxykxxdf8UnEjRyLioxCe1zoKmwYDBxXRemwVTkqiPAyCoXRbMeU",
  "key34": "vJuL3Txkqj9R6EWoxRcmeKWC7SCUPQLFa88h1yER6ueqDGxwMp6k93KEFotf1oCzw8aRjR12dPsvRCasjCofKDp",
  "key35": "374RPfextFX3TgMAkU7vUbi2GYjAaxEUNM1DFWt8ecD49535vhHqjwF6gKRvw8owRDUtEdpU2XRT25LCTRpZTfe9",
  "key36": "5LZWjSbcerp27bgptjfTnEGsWP4BJZvVzJkqXMYVvPTrnXmMNmV7xyvdNk9akX3pSTwnNzPQA9XiRQTTuuqiNYW2",
  "key37": "58MXo9quEpZXSFxdgXMKTRhzUP2xFMD7ALTGFCaC7aXvJ5YYknPfj8Le6ZU5aYabJCLPuHMY7omvwxUoDmjh62io",
  "key38": "4mCZbDRs4hSqkcxkZHLsjWGjpn5ZTLEnVeLv5HvoXosoSLuLJDpxDoXD3FB1uZhmTD1aLGrfKM9RhN2vDUQhCzAx",
  "key39": "cVsqRdp4roc4ndaFDQ9xJrnJ8AGEuptSYL5KWuqHr77J8tzN8AxBGGnZCJUoNPQTLwVBK4k3NUtWQ4zdLbqcCHK",
  "key40": "4KerfkFJTiYYfqUeJNTiKGLZ17JBZJdvsMsNTHqjZXqq686f6MEraq6T1vjqhccETvVew8v5TuKqEzhB2uhUKjLK",
  "key41": "4bSaoFCcE2fAvAhAcHDdSxrshDVxdiDapjr4ZSSTP63Y1T8iWLnnTd6yQAvwycC4tv8ULw4vCJr4Z2cS8QDREGfr",
  "key42": "MAf6bBroP1zvTzAFFtL89aQX8b9fx41SUnmm6hAMqqJcZxibLeLftSu7NpApkWXyxHAcqZomDn5UafAZFUPQJYB",
  "key43": "3rf4VXPQKDdphhBJ3j8mTcFHDVSqvNdzjReCFNPDzDJaQ7VLgiguVik52dWJobt4kcLkNpj8mcUKbvzKJFXm8FmM",
  "key44": "smtDPMG9XNQDkxTYun919WYZ475rqBQ1AUw7j6DoBosRffhMeK524K1PaAkc1NpSB95PLcbxNA2JEeqVppkff9z",
  "key45": "3VAaffBEUXxBSK1jAsDwojNnywqgdqS88PZnGNkj6zQCcHszESXE8xtGkRMzTRr7ZurbMLTj7pkpBvciiwE4y55p",
  "key46": "3BWKve9mu1zZPuSQ6ix7Fu2mr5X4rcSmr2tJuzxMykxXrdBpovActvTA3idzFy14NNb9YuKD6SYhMaPbMyQDcACw",
  "key47": "5brwzdmUKEykD6E3BWD2unZidhkHnnDwDgHMiGdZPKoC5DmM79YHkjpjY39GGJDUoJztpdPxqrcGensUGpT1Hu3e",
  "key48": "2sQqfE3JmxzH8A77iNGX8MwGSiY88xJnpSQBs3i2GecX6GSCF1e5B9S1HJPX5uy8DbJffDFHRcNgipymtT6qT8sT"
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
