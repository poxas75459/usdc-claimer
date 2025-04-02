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
    "3Bmon2Wpb1boN79azPy1QLidBT3wKB3hPLcjYgpvHYUqazM8kNHHL6SVQ5gTntRih14KP2WKMuQbpNYckkuTxMS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bqeDfBHJf7WRG9x9QZnGiZa2mbm7JBq1SCR2czEFdDfmfZq55d7F6tLNL2CebHkVzLZanNcWrxQLbktTB5wR1sC",
  "key1": "42YL2DiB9XRCFTSS54C14zTzf2aomdLLV2MXMx9NWCNEQv1EPH6cMUmCygeFT8BLNYK4tSUhZ2jNSFHVZ5eDiUQW",
  "key2": "4JooR4vwQ8v6xztvk1fsaHornynZhxnjYpH8Z8ium9FZPUfMVSybUzm6mhzeeMjNgfbUJz4TxEyzsMcPtduJjuY",
  "key3": "AJ28NVbdakoX8n7DH7733fC33AiCFSqJ1XSAiw7DdTAhPMPXEwaZ9mVEdjV9Br7BiGcTfRN34DjbQCCkPevYbVT",
  "key4": "46cuuMjdszPmBym2ryGQFJBEdQPPNbjH2qUzwJKX42dM767wyFRHz7xNe78S1feioFrNfFjHsG1ZYyt1udKxwNh7",
  "key5": "4fRLjiLF41mU8nwL57pgUaxvW2qM15yGUibYqwG66icgtCvi1DiX9eym8Wkjtu41cHKNvGgSv5nD467Go9V3on98",
  "key6": "3wfX7pLfJZsdFRMohmaMAfN4bSSifpWoaCxU8t1GwnGzGZhxHBSBXjYEVcZ9FEWJ1ZBZTJor4H7fjJCtutuJci5e",
  "key7": "5FGMiej2Y9gArQxUcye1DG3NaWR45MQb9Wre6v89wmo5bC2yViWAfNsY5fZBLiVqdpjZaymcvRSWWkyeQMg25uEU",
  "key8": "uBTfmrRLcSdr9ZJ4xoJJMe1aWDGV4ssKtMZPtpDdjR9AUQdb8UyhuQBbd5HXkNwqcTUZCVWewMdPejx256876mL",
  "key9": "2YiTDLjjpMjoQpgDzJ21TVV7AXjU2pit7zFuUDeGp3wuG1dn1RQ2i1cVf8btn2WZqPLpTzzcQ5R9oqURrpU1tkBd",
  "key10": "1dx5DJyvXdRC2w8uJz6PryjVCcoxSvvJjyJfDFBArreGFARtePxS6RYMvE1LEFEtYTvgio25FUoXLhgawA4Z5bh",
  "key11": "4ZBpKsT84qkkZ6NuEz4eRNAdZkLqLUCrSHS9dH7jAPDgd85xzmBa92wuCMvQG9dr6qkDStymWWXXavizvPtKS3VV",
  "key12": "3AmPxB5TERVodK8iFxKUZDLFegVV81T8XKd5JfwVzUX8A53NQJyDufHL7ocAq3EWvYwtLeyxbHgrZ5eQqbt66tHG",
  "key13": "2Fq3wXuBbnoxhRgX3P1se9vRayuXa7GRK9JNiD8F6sKbg4uNRDBvAQ9DASBuc5PD1vLYkges3QuLhEfzpm112kyB",
  "key14": "2a8MKpue1JUGnKGEqZ6tLMmUoDUhFA6fjgBE2A4UN9okQY4W9EnPZqSgsutJXUdRxyLuysi4FeAh1MLFz8EQ8BL4",
  "key15": "Di2KNQKr3ynRTyLfKxmn5AKCMHKaCerxcXWG5FDo19CiQcYYEXVt65g4DqJX2gj2n71xmGadzG5tg2g74xVJeTT",
  "key16": "4D9Gj9K4xnjMkgo4nWCAnUrs3hJJePgh7RZuWdkEdSepvRaA1ch2vvn29D2mt5NxVbkWqnPHPe4c4wTqV17TbnXM",
  "key17": "4DqnwehvvYB3a54bcZiQSvSYwcP3e5pxEmgzHCjYNp8KS3TSVVmmfqep1S3VhSBHiE5KEdWuxepsr6SaKPSxuNt7",
  "key18": "FUxCV7KDw6DnoXBQqqGeKp43tBb7TB1yzkh5LNy4Mq7d4yZUhXwDa8tqv6xU3g7Qqh3b5Z9BaLLbZBgTF95LZq8",
  "key19": "5oYA7fsuKegrVoDADazqNrNzjbhupgmeapqp2WHKeWsVzvSiFdhLAAJNyewLs8nVSWhfbMkuCQ7JDF82c6YYXmz8",
  "key20": "4euLaTuJhd9AtkMmURQGav35dzrGGifEY2X3PiCFDho22yGF4Z52ErSFn5rMU1rgm3DDEVXpxTtnrWmBJ5p3kDNy",
  "key21": "g4Dv7xBG4tjGFiJWPMcoFDCQJpD46XHrVEyKtJi9BqmyeKS57Ncz8FKuFrL1j6dw3CwEXDK8LFsz64j3obffyz6",
  "key22": "3sZ3KJdkdmwCZYfhkemY25Do6uyQ8uJu39Ky8BpxqpnUyHyaSPvSYeadLwtAvENWVTnv5octxmmvismPuFz4KwFk",
  "key23": "2WyeJzqyy4uSsRwtd8kLS9wkmjrdhKwLz8hGjd8hpCikR4hTG5JxBa2A7ZK6TAQCzyciGKD3JTmqeV126p3uDA3v",
  "key24": "5efVAoXtn1uLDrFDCLqpXYgH8WDvtjYURHtuNA81sfDeVXwzZSe2N3vW6mQwu3gNXVjjNdZDDU6wiZg83pUJASat",
  "key25": "3wuwkBneeQVwsx6m1GvAwUzfDKapsJj2zXACAHA7m3GLQPXC1m3PpAATEAzBeFAv2SHR3G4ScFxJp68rYk6d5jNC",
  "key26": "3pYf63qPGsnzPgxAJcNtctr1nvW75Z2Hf6pmUuGeDuL4Hckr2NBXXarsCnQeF9dGDCpRRrzRNzLbympTqHDNaJ4K",
  "key27": "2Yj22W66KfZczEmihT7QPYAeZYLUbvNpGC5qB8Ysv1gvaaM5qzmXVCUxUV695QW63YMkcycwq38w9cE7J6fZDGU3",
  "key28": "3wAjzyJrP1xNon6BNGRPjsbwqnQukwRfX2kzc6yrweDj1cUzKss4MWSYz7cTbQmqvUTVY3WUp1exB5PNEbzCXiY6",
  "key29": "5RuiCkEkPZRNx2vCJv5UNFF53nGLhnFrKLkNPE3qUgY15znovmKpCtGX5VkMCs5XjFL6vzVGwXwVco3kC3B7aRDp",
  "key30": "QKoWmt8BZJcr2akJnGPfb4bnpGFrxVr3xeGN5BNbqwUvJWjrEmEvV1QcQLyb8vrbbLp3eZsxN9VZkxBTHPvhN1E",
  "key31": "5grHd113YvizXHnkwubkwJC8gtdP77zwWygwY8yHhf2jsbAkXExvPqrtKpqBkxmaiF3t79hQVK2HDbJku1fz2rNX",
  "key32": "3NZfcKj56UcGwkk41WpsAPMp1Hhk2Q4jsW2feZp3ymo8ornMdjtM8eAwsqWXMJMVFxyyLtdWUEGTqe1UKw5HpW8Q",
  "key33": "2hUvmonBuY7JYjGjXkkwnT1uPMinPBpsD8soqrkWFf7VGsayBaCvVTsPXVeKGnUcGyyZNMsM385aBEeZR8sU2DJD",
  "key34": "5gLwWGfJQHxn7g4rgQkY5wSGGCVGVtS6UeYGcF4mRUtN9yV2n6DVxJAkDYULaieET2WdBwH8bovNbSMLjxmEd1bV",
  "key35": "5LN4pXQxv6UBGTxcXV4RjZSdEanwbU7Txgpz8cZo41Ap2xUChcTbdZf7HnrxqEDMGFxdq2sbSNRHgRwKQo7VrCik",
  "key36": "5AWV9yVdaVtWioWP662V2nLENGyrjiHBUTDJxzPBN6xSFZ2ozrDpKgkRDgdf9gcGapexDRmETZpJWtLGRzZrgYgX",
  "key37": "3qcQGrP9eCgPtb6YeFr5AhYtk2bb4CYjnwEYoxAPqQpJndPZWq9157q8SSbLYmNzXTNny1YsTuF7GEmzGDctV6U8",
  "key38": "2TkxH9Utr4G2iAankqN7xdfuhfZ7rLxiSoj1DY5jr5EwW2CheWnyVuqS83NC2nh4eirwHfRVvZdspGKVcyL8srVV",
  "key39": "4qENoXjWV78dExQkrupMUUCs4QvBLPdLcpgmdvHwPtKtr5vN8beLsAsgnLVL8DZxDTdv3y7dxCpWNXJEALJPMcgE",
  "key40": "VadUyjL3KReuPKdHnJbST975iCuoNygZJ42gbz4eDwnSHDX2aQQU84EB6hcv3ke7btXNSGjgEcokdu9JQbEeR3H",
  "key41": "vWCMpGaRxn9xcLndH5qLWrAZxhfP4aHJYUfpCEyUie49jkaGEzJd7pkcTJ487PsrDce2eZ1YERJgbMFi8R3sH6m",
  "key42": "3RMKgrnf89cBqpugRbTFjFn2Eh6t9MGsqVN4TV5b6N2YZEqm31u7EMqn7TJP7rK3DJecMvh2iuusFchav44QEHD8",
  "key43": "3sQsDtNhnrvunwuVFx2dMJxAa2jT6YHqdHNAMidwAZBvzjMwyopoM2Yfd2tNi2FAo3B8ugNJz41Tq2ubNkozfSPk",
  "key44": "9T7FuFHqz7o3CR3R8R6W41fVKfEkY8guJMdqbhYmvDmaQ8r3iwXzzAD1L2qJFxk5BcDuLZ7TsrqS9CMpB7HM2Gf",
  "key45": "2bRT632dNn73MjmAdmKRA2eCfxzCH1rTn7wTbpG7QFiiPGMF5tJDJMiT4xtc9VBxCbiSuBPnoKYevngyKZtQoUhn",
  "key46": "3xppP5oMRdFY7naWyCS9gcfWy6Co5YKQ2ckyBxYTQv4A4oVBPhWuG6MoKq4PNB5CTAN4LE68DZDxHVh1kX8rLtrm"
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
