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
    "3S4S7oBB22ZY32jrmPkyxA18NZQvnDsZFN5HRo6RiihuM7gcadC6D9HRA2QbrwQXu3Pr958wW5WnxkaN7rpMcdSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C9kmj8GhuPC3d6qyHDPMtBDwmDWBzNgr5bJ34Wq2sU6QFHvq4rxSnxgeHWWDqcZTUxddB92NjrY9rMXpDjh2jxK",
  "key1": "2jRMA1uhhTv76z2DLNeSAprLdr3UyG3UxgQBJXi5mm9nuHP83qqCeibBkJwE9KgHsZ5tevf4ZAr8AnxKjYCpxdcT",
  "key2": "4oHmhVqWd6Njx1mLsoTudWc5AYQKtkH8TnLq42LZMNyZkmWf3zimRKM6ymkitgC1kKuCf2LpPmjp4ct43pRWDnox",
  "key3": "49Di6aYqtXBS4U2dUkABja2Y5qvqbhQmJ1EXXkbWJpf2ACugManmmnSjDXKLbsSKjfjFqBW2hrMWuyCqQxSraXi8",
  "key4": "52oMEMvAFDx5SeTWNKUcvfB3qBz1QjPYXZhMm2631UQgiZLUvp3b42Rq7w349AqLfMmLZkfPGCKobyVkbua1HP97",
  "key5": "Qq7pNw8xQ3SdTLmRZkqpj4ETZdhJFNDQ6iMTR1AJZRQHmDbmyjtCRtV3PFiTkKo61BcqVgunZxWp1HAqGddWSzU",
  "key6": "LLTh8CC2wHvFM9gYVs6qdPBuhWoNvmyafviCiKM7uUXsZGWV9d3XDNnXQ78N3VVw83KU4h5UNHoi5oqFrcPbYek",
  "key7": "5pNDjBzqmyY9oZa5qTKH7CKaxrQuUwcnCe2v7qPTPdwXHV5asVjimjTzv4whuiouUqtnuuw5nfdK6npxKsdzAbkg",
  "key8": "4w1E6yxVADz8V6hjPyb4Wovi4hBg32uVskQi7XhkPyzvCHwP2DQd5kUJ9qtQrd4f6L4VxRfoFoDaPkn6U9rqK3by",
  "key9": "rUew3rZdmeAsBNDA3Eu9AXNneVMMSNppbN7WRybPaUsMhtKZcXhCXREiPWeEWVRmeg9auX789zf5RRHtSNQUgaS",
  "key10": "42mG9Pe4p4FhLwdUbmVzuK9cZpPZMNbXUurcJ9hyXYHz6U4QipyfQu3X7grS5upv8gScuZaCCNKtt9sb9JQsUEeX",
  "key11": "4z3aR48Us1oN9W8sSrQp4Vc3ujaQaAtrQjRr7VxQkfQLWbTwuco8Fgt1SWrQjkJB74E8oTUnecJrB7geBKT32wh1",
  "key12": "4r5nLx2uGdBhEb1BEfDmHr9LVkfHuqhp9Pn9z1BM5axMWdc4VnK7fxX5AF1JsD1wUAMgpdck8KJVDoUD6NRhTe6a",
  "key13": "SzLjeqWWwG5eJouMiSvppVc52Do6M1VCuAPQBRF6kyJ4EN3Pb2W4Rt953ZTVyAJHLhH2MefXby8HuNRGaihVuBy",
  "key14": "397BW2LwD67wuLEnCp5213MNwG4FGLqtwdYvJWuFNVdP15UP3MUySEsSTGLsrumgNHyNfr81qpnkxm3qsmJiLy7X",
  "key15": "5G6fUcgQXWvinteTYquSvr92rdZ9zB98oxZjSYN6FXWG1NsL64WJ2MYvrinPoL8mYDhJgEw9vUZrycoawuqVTPvR",
  "key16": "34JTjMfKXBsX9G4cdiLneDCZMRvqm47UuiLiFJvhgtsFJYF8jwyjuHk2kwPW3rR8bvcf6pRhgANgDEAPS8jyEETh",
  "key17": "DEcdSKnCEAfpkQoyGHTim5pN8vaXCHhhyvxY7jBNN2KBW321eheqEdP1uTCVoy3AnfQ7w18FvAQgHbGJmuePco1",
  "key18": "3aMsc7Lf2nuFUtDzXwNLiS5Q9eXKoH85E7RgVontTwoNTKa4pqCSu8VXsqV8Cs81xg3WPZMSyFqWzfDenvzfKy3t",
  "key19": "3GzrpUxHAfJwwBPwRNuzcstJcxfyYYUexQAfhLcAxMd5YBnE2iTXC2fQeDMbS2JmrWWmyREqmAiLTYyB36M1ZbuG",
  "key20": "4BWByC72UixxVFt3PFVT9p8qp8mVxEZA6HcB2NERVkSS6htRXvyDFrddFRwxyk4yZN9grQh83w6PhJJduLQ353m",
  "key21": "59JKjLQpyTsPtMz2sPpiHm8vSbHugPzMMYVqxF9BysqRbVPqsP2gDmKD7RvQQDYBVvVtbxH2EoxtHYd7R8EAY4ZP",
  "key22": "2SRkk5PViq1ZhMYLTHx8TbY2Wm8tvGryjct2FzoThffzGMWY9EwrhCVLHeQkXcTWJmHfpEir9kRBCweMupJhLb6Z",
  "key23": "2kcb7VKEQ9mbEZCMJx1SdPpuS2LYUXM4rxpLJoGuGmk1U9kabQQVTEvbvs3tgDrXrAiMFuVADH1tKCP3LRrUZ8F8",
  "key24": "2G8NB6uVFxuSr8HawxT5nAR5qqMC4SFN6SfhJ7c2WajftfPRXJZ2zU1LYVmTzDYBix7rubZJipg9sr8JX45qFfMA",
  "key25": "5D5uaukpG5KQKBcLefvYhZxZnWz8DHMQ4d3dXfgDmq8kV7fDk97cmJ9bYqjARV5qtUmS2p88vZtoPKN4RZ3MZyNC",
  "key26": "4Yro9FWKktjbJ1JNj78TTfCh54saQ88aJ2cP1BvRzmX8yrcxHg8vPF1t85fezuhYHPuxjHa1iDJDwkeeiw9YjYPy",
  "key27": "4CD8wKw3FnxCiS5uz25zvGUhUHh8ZcKYpd7qrmtXJysFkZQKuWAdZLAAxNQFJUerHZ9XFBcyz7HZjpU6eHWvKbQ1",
  "key28": "2Dpdzbvu4UJs1VcHAxJtUh9whUXEbzfyk5qoJjRTufn9WkykShQf3E5UHW738cxEJUDhody2JM2BjrzTX975wcx8",
  "key29": "53y8bimJ9AFqTFcR3EzFz53wEy6DtUZg9ZHWMLNjkDLUBVhEt9GwumaLohciXr422BJpye2aNoeAm1Kp7uV3bXvB",
  "key30": "5hbkH2ar4s2oQ5etMWvzskjsrtpbJMoFmCGYqqYpyZPQfdfPS7XKsuVVdDH3AbqjYi8ACgvKyzxT8rdWbsDkks7e",
  "key31": "5jK25tfCj1xCoZJ65M7ikfGnYuKyc5PjqU1frt5C2BiQ9KRLJ2kENmSWXnW2gvbz9Vw2y251WgSAKbadSeq14hMG",
  "key32": "5vHo29D7t58dkYiCuUso2irbk7rAreoEToEjCZGdCHS2ihqAgZJtuWEB2n8KhDDaxjFzPtLoHfQTGg3ufAHacLFG",
  "key33": "3qKjP1XxeDZaJpdRoyFrTY25y93qmSqRWh7SzEHjNrgYumh9L399nZRZwRp5ZgnNDr2jJBJVaA379aXxdL19hKSV",
  "key34": "XxQkDKmoSkPh8Hut32ksVra9aCVfMDkFk5QD2frNnBmMmD7KQndAsWTQVS6STFFawCyJMuTCHrhq7z1be4FJ62p",
  "key35": "e6o37QuS2DMmiawBfTG9zzkLTSugfjwTur76AvcsFmC1ktEbrXjYJLmkBb6D9U1ynRrNTfDaE5owUoYKS7YFwu8",
  "key36": "45XiLpSEPRHwCsmAhpMfDswJBLpmd9uEzprMX3k15KGscuhfGRUPNnu66UEBYoBE8dxczbVUsQk2w7FLzcR3AqTj",
  "key37": "32pRtZoYFxGdKEQGuHb7Qo6c2fqB4Qa3Lx9pC1VEEwruizvY8v19nm8H3K41Y7xxi8QDJYsA8A3wo7uNyL5NCAs4",
  "key38": "2Q38NBZZmhPMsaA3RwUThX1Bag7gTBFVSnuYmmegixgFbhM5FefrxzUQWUjKzGyFgBhQUrJ3jKDwieGmQPcdy5iF",
  "key39": "yVApEgnsEX8YhEbWeNR3Sf66XMjbjfB48kEhbCEfah98y6yQr6u9pg29ezu3MWAn5YQV7y1ydk2sgZtEGDpGEGp",
  "key40": "T7xCtfjnoHuiaAqobfixELdaJc2M6iaaDvJ9tkqJYcQFv31joFFXhfM13qKQBf8GNxFCSAH5XP837op5wajdRbf",
  "key41": "3PC9Pq8Xe8EWExSeAEnJGpMjpPh2agJfU4mpWN9EnBwCtY1HtjUmgRsg19dBtqXerJoiwSSfRbB6n81ToiKuLfPt",
  "key42": "iecNjSWftejosS7zVEzfss5KAodv34zqB6mMF6H7BAYSCCJSYd3v5L7AdejfWg91hw7XDEtickjVfe4E7Mf7wMz",
  "key43": "4SMZY3yat8mraW4kFEAinBre8HSNKapCsBd2NifKPjDRHW1pRpsWFrd68Xni1qF6BRo4YxQbzd1uWW79rYMr26LB",
  "key44": "62oux7ErgYnctMg6ZEcEwmPFDAgQ3b1fzzEpyHaY4A8e9zJMVerWwyCh2huyKrLAhcBe1wgC2PyHNdsSRe124m6b",
  "key45": "5NkvobwMVdmLKwyHBF1wBnGRnFciX4uriMJNa37mmmBexV2vkqua3K55W34oWHiivTarjkpfeNwWVzwiAPwntkQA",
  "key46": "4oq6XyW7iGv6ycVnXrZE3vycfKepqrjNZpb9a6bGysd58BZp1P4SibE3ozNRfCaFeoBWEPkYD18H3iWUurkytZv6"
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
