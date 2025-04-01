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
    "2RtKDGbAge4bHNwSYqKmGrfj7BNaBTRCCY9iR1n6ah1qBv72hAra4wr2q7o4KQZCLUUFuNp5aJxk6RxXR2VnFKSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1Rb1kUPnkqyLZjatHX8sKCqyxwCSfQZYkhPtky7sni6GD95MVuxops9Vm3BcmDYVYKHEeZafLFSjryaJrtLBLH",
  "key1": "a3ggYn77yTq5tRvJ1CXDafLdjCNzNthCozAaRve3EQQeaeL1QjVGBfiGtGDjchhLvcnsxKEXBgmRuc4XSxVVW4q",
  "key2": "2hJsXQChb68o7pcsSJnN8hqPca7hjcTjedWxeR36svuZzN6ziFCe3SfcBEYcB8Nj5DWDCE9WE4nwhiZ6nXpCsQXv",
  "key3": "254dyHFnrrPvkvBWbJ4wnuXh1i8PqBozUNPsfWoZegs5E2A9zQ1LRQKdXzVcPepc65mWubLRGBB9WAGmUS2TQr4b",
  "key4": "2foDbLvkksZfmdUDK6DxjBChQjPe6Um6Y1hB4HtyeLkGrz5PpQrdxWDqrML4HDJCg27JrP75LMn5Fq6vaP4Khfad",
  "key5": "5MQHSoCeLCt6m1MKtsJgJMs3ddcNFnSFp784qsoZuMsuAaoL8ceLvmyNaKD2pyC4PmmREbe8g9wLth8N8sLuEuLe",
  "key6": "fXGFG7TjQfr7FkQF3QFnBmi1xvWZpeguDszHeMgjDJCFsT5HWCHRgiz9a3ejLkNDfVdk4rwaqTg8iV8jwrzfnfw",
  "key7": "5wwp2uP9k1T6KGputPPJaisQYFrm4VYPsuAPftQusfraXuvRcMwkpoZeudCKuFLwt82tVjXiNmzxLZVF2gQgZLEd",
  "key8": "3oYedvFmLFFN1rnLKoStXQwjHnPXC4DYBpfhfM2BBiA3fb9ud1naup2Fxqe578RqTbND4Zhs3RygMVBbBFwuarmh",
  "key9": "4Vf1524FoHG2tQtZEsFbSEgfNYGszkuUZCn6V8eirX6vsvjCg54SdiQ4wedjWJi1EDVDzpGMrohb2UbH57qPrGPy",
  "key10": "VZQA7ucUafLCLwz3MauQ3TJWikJcJTi6ekyQX4kXmC5zKY2WuDH7DQqj2t8QXjCGiJzyZt228Ms3dFa4UcuqtyU",
  "key11": "5Kr3jfBtPQ1ed52wrNxe47aV8kznk5HDwaaN5MvRcszTT7u3p79xQ9u1LvshBBYxhEWreRXeXtxfV25diSAiYUhf",
  "key12": "4YCAxwT6vd1nWQkBh4vZq4RRU2ZhPxdLkJYUbnYfwjaZUHa5pFcbKqKoHFhFSiDLon9djYWgrhAzgH4DGfjsaYtr",
  "key13": "3wkNPEYajwReuBSZ1A76Sx4zWSz8DcRfKXeGFRfFLJoLP6GdXZ2epDZp6boB9JnwgYM5E4uEmHc195SCASFwpfJG",
  "key14": "CtuomCN2eLAduayuyZjr4hVvLtD5engePRbwX6vSfRuvtvXigKDARDBk3z8PbmHvTp17Wma3xBWDS1spmqDFvdg",
  "key15": "2cbJ4nCRHN9ctzo5S2FWrQZDJcvcDyVBwfhV1xgjhhsekmMgZcvJaEw1dUZVyHakviaHn13LVx2tj8afrPrSyYjt",
  "key16": "66iFTegb5JgEtxHVBaBDnCkdEoXnoNDAuCaya9dnJWRQuE1xMdmZ8hYu7JfgreA6shQwWdt9eSF4gmPhhm3Lrpqp",
  "key17": "5nz1QAykTVdbfEbFGfRkiwEHrfpKpuBPrKuWmvdHjZWcDJaxyZCYYeAoLexJ5ASoqK2Wz2nHJgS9SkzkFYE8GsWM",
  "key18": "2KJhC5GXXkuDJRS2RokZ6Xsd8GRurX6tN74VAKcUTyUAwrNeXHArXSdLi5hYMYQbhMTKMgqnF3hGi6B13VWg3HNb",
  "key19": "aukrzSPMRpZrTJfL7mAXaRiU6xvQrYwYD7PxQqzi3QXUDst5SmAKEKG5PwvJQ5AKDHAxFyCcVEZPVVGKdddorFv",
  "key20": "8JQzdBhBkABpALvw9FMBkzR9EM3cWdbGXxvbJjJo5mpYxsBtYNAV3cebfABHYcp8MYnLd8fUsHLVsUURx4SMJ6K",
  "key21": "4i8xPkGFowQg7ThmxumRBfQwYV2hLR6ZfgHwfpg1Coi1YGxNurwgdurgvT5C2LAJEDAi1YgeQV5rvuEWTrEfwCRe",
  "key22": "4428WWGynexozbF5QVmbZjQntfUp6fMt9x4a32wY4YZNMg2g9sAbZ73EPKn6vQeuJqajgvtk6dhorsnGxavm2mHb",
  "key23": "42bW5WkkpYjJXksrtxA1T7QSPWmmBWTCqkdHP5KgaLc9JjQWW5apkJL9dNnBYrJM2PnPVW5K6ytpjn68vwVK71W6",
  "key24": "3xMWowMA9HnbSgtng9AkWnW6uWriHjBwi8dhDvrPJGd6UQhjTNrcJYqmpBkox1zcEXMxhqgr2UXGJrZyonDhgMkA",
  "key25": "22PkSARNrR5jdy4FUPL73ZEaYp4mLMuoKPqe7FeeGWMs27i1KXUCZ189aWCR4PL4TFw6BFcEuoNdWUdqfq9WeKhu",
  "key26": "5MbFYQACMHWdUDdCJ8fBfubz1WvbJy9CrJoK8MxYS3msSDTdV1FHHgpdb1PumesGvcExT1PmiHSAmX8SC3XNDp3i",
  "key27": "4CzYJU88Qiyow3nGfbH8CYj7WkU2MTEpUK69gzmiuvUop7Pz7sP3hUQTgSwW9pZ2XKPR24J3jhSmoqE2V7cSGraj",
  "key28": "5FZSeuSPwUdTaJMPHt21PELReAUrrXNnBTRAvcjS661NkhyaU1hngWaWed76MPEHnhdD7JxANux4VpoSE5Sz1hj6",
  "key29": "ZNFU662pDUcT23biyutkk3yBQRePGo3q5AB3sLyGNnhoURnnhPuZZZGBYub2tdkpqBxiqY2TM1pZpX8kSpXE8rM",
  "key30": "2nyrTdAoEZg437JtFujZMgKkD4mghzkS9nw3iRwVqLDGm7AaHPYmRtjTmMptmD37AEzVtr2twTvpCV5QAVUteKYh",
  "key31": "32Lc5ETXc5ijjGsVuF24tfiGjJ6rSJCu2dcAe4RUZYT1SLcpS6RcUR6uttdeWokd1bc4fLczZ31ZFxARhnt5BkqV",
  "key32": "3ZA336q4Pq4mYx2ehp9SsZ1hHynyGR6hQhXcUn7rn6SzU2H3uG7rZozrmxu3je9iokU1ZfECU98Yvqir9ju6kfha",
  "key33": "3XLJiXh4VsGiMguag5SitZqiPrjBHA5jjcw53xPYCuRBULABeNkexiwiEN5TwbsuqvddFKDAZ6jFtMQak87W75o1",
  "key34": "4KLcTyDeBLYjGAZmTjzYccLbgHy6zU27u8tWfjzYFPXSKV7K3g53B2BdMnDKPCXGaKy8ibRkHck96yzEykWn3Gc3",
  "key35": "vfWJtEqA43LBots1QMKNhc3H8fNiyXQ7kWx5kRcKJp5WtuvZKHwRgJ7ZGL7nyM8Ru5CDfqH2xd14h9QTJRgLvE6",
  "key36": "5ZMbqbAgbY5nQFxfPwuwqouYQLzgFM3Dz19fDKyPSmWj5mQCS2fE56hYTB67pxRfeLe46tabvFxrVjcK1xEi7j9o",
  "key37": "5XzPSpBzG7TonLcdnwrgHXe2TutZkc9k6ULNY9v5Pe7Y83BnSpRqPyoTdkEUsnv2YP7idqgZmsTxdGZXY1LUYdbs",
  "key38": "4rQL3hceFkfiCW5esC4mHygzRxeM3k9VLJNZoAJsw2QeYhNRmJBfSQPpG1yTbhitDi3Pf1vLijzaSJMdtX7uDAfV"
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
