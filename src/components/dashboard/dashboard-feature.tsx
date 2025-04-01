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
    "5aoLXWiwMFS37iq6x5CAjhAQC9sbbXJgLJYqRtHVKQ7jc3yEUAnysYsCfnZg2QbK7cELAKMbCD2FqkFbNW1LWqut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XxRd2WkRo3P4h3h1HzXDRJznSc4rKU3HPDvJk9yQZFBKS9HM8nsUWJdihy5faBVgcm7aKuWY7qfkPHmZ7AqPzQe",
  "key1": "57TAfspcgKxRHBNyZYLyuhmiZVGCQRE8btqi7f7pSx9e3n4Xz8V6DYhizV9hKE9GRm7oMMcTwpWHngbrQn9Zts3M",
  "key2": "4qy8hDsx1omRz5TH8kwCorhYx69EQ9uAVzWC2uUAjmkFuYgMuoqW31f1WSvcWJz1d1rE8nyKcqWSECaTZMMdiVzz",
  "key3": "2wT27i4AXJNvYpTZWQM9d6xbtWMgmekaGFToNniqjncLxq1zQyDBiV3EmuehxsZ98VgduQUYavehR18Janbc8QtT",
  "key4": "636EafEXbjTQ2VVzCSQCEWDgjZfYsp53FFYdc6JYz5agRAHFBFGR28eZ2N1xgyctSRE46XLRfdsQnx4E4u58Q8My",
  "key5": "uddYGdFWNeMer9pGm2vFU6om2HUmScZFrDthVkN42noUfK7b1yMPpvzfUpZj1rqZs4PTK7R7wWciubWyYbBnorD",
  "key6": "4LqmQMimpx9YoFW6Bwu4Kv4gmSju3RZbeAJToLivAxEKNXiaST21iynpN8Nj5wTRYGpTCmhyTDLkURKYqafYpumL",
  "key7": "4RPNnPqgv738qy1nc5Xgm3vQPqJrA7qMVMGW8zww4FQVs5M1pyKARt412awV8XiKTMQi8z4gpcKryqG6PnFqkMwn",
  "key8": "4LEwGKPiT7mRood2LmUmQ5sREryWQSKLCwB23b3yNuAMBnMvi53Taj4ia7iLvfnsj1CPtrkesx5QJHvtBohnE3iv",
  "key9": "mGmvmKvKvDjhGFWm5esra1hr3MVfYBvnarDvnauuuKZKQnjvPgZWhT3Ce1aJdoDhoQBLJcREDLokgFWdNiKprdX",
  "key10": "4GQp9YhTwNLqQXyszVGfEPZwPTXT2LtdoARafLJMpfG9C6N9ZKXSkUbredmx8m3vVx3hJMnKpxKZ7d7inQj6Q4Uq",
  "key11": "38d3rrfXdmdeajEX1EohEagrsZmiVq2YKoX2xPgydKXNC4qoFanur762vx5rFg3XmDb2EDEYrSN9wvaU9SUmppsB",
  "key12": "yfH89Q12F98TBRHbhoHvfRgnRcdwJuCsDPXp1e4ek4gQu914j46LWhh7Y5P4S2ShiXDVE9BmaCvdKuoR4T5KN2A",
  "key13": "2nYvN2mHgQNHGp7owQji5ohrKKF7Ds8j6Cod2T2xVKm8ySiSswtaRkvuaCap1UYgYUcGAkAysr2o5ABuS7KdJuqF",
  "key14": "2XaKj4nQ9XqBmGkASLMfPu1RDRvHPz7d2mKgqSLREa6eDbCP5nSqvYsVSvtdCMt8GD3ZH5U4Lq1he713JUyYaFW3",
  "key15": "3vT2CFDTRf3zNQ6VFBCNUXMzCk9B7LwHm4YuvLFNCD4btrdAdz17kiGstGdBbP7HNw6EDcawZQhdxnqCciaWH6az",
  "key16": "5XcTwNEoAW4Rm5A1usve9SYrLTtVGgJEa2cufNVaif26uMTmDcNwcecbSNLe6P1rY6zTvTqfRJdQZTtqLiJ4NmdR",
  "key17": "9seW9VgJbPX2zpox2198EXGDXbsRV5faEVbJG9DGv7NRkizNh9oaCxNzEtMuYnZFiX1hPnUtLT5QfPZgFhLfXRY",
  "key18": "4PsiUECTbgNGLCpnybjgLeJe3FC5tSipcbzazVAbjuG4N6QeNxmGwnw5nRR7W99BiCQHcs31zP7b86tE1b1V7n44",
  "key19": "9hVVBfaDMXGVcE7YTXXRSJvnEUSFreErDCbWkiuCCYfaPNmjN5uLLLRfiBDR2BnwiFaWn3o1CoAfr8LtozCwXAn",
  "key20": "2NzassstgAyhbzWZ2CGVyd7Dyn6SK9nH3ZkvjgSQBZCG5gkCyHGeWigdXCd1mNZdbvwmBfhQCju22QErHFLRLKHr",
  "key21": "qJRfQth5Y9ZuHvGGxV2RWMsu6c72AQNkqD1aaoXBu68pw44tTZ1mMUrKbw72oiFtvaMBWC16WqBWjoHexMFx4HH",
  "key22": "2F8giJkEJ8BQsmjidwztmxCiJVdRDjcjvkUioEw5v8xypmRzGKy2pB8UqudWAnqqYuUj7wppAbHHjKFhsx1D3Tbu",
  "key23": "51Yi1SB2uMJdUCesHLBc6QYhontudF5K9St8jgKSBGakYbaYeSHcuZsoahH5tkTbaAG6CVcSRhscLiRZ623Vrfzy",
  "key24": "4TCBPpM1ZHTxxK7CkNM7WTAaUpqbeak7kJodg8VA8G1ieysSb83j2U1rGgU5VzmELdC5ZWE7TWYEiXSZX4Rc2XZX",
  "key25": "3ZvhPH73uPrjN96dbPgT9iR2WCRqMAtX644Vy8TM1cHZL5AxDhx8VKNrJRmX6wgXJfkhQrWG67KNPU4tyCgjDGr9",
  "key26": "2cDZ8QmXB9SCLPtQPKXPXCiJjBUG3dPcg8vSWGTzfdjYJZEAmQxqa4eD5ufzeLSVvifebAfq3Wyev74SuovpYYNN",
  "key27": "2J1xxhHbFDhieibJqiRGQp2VYHmjdXqCErTKMLX8xAExqhgxX1VKKr1ZouPEoPCcYaXgy2sTNgGZtWtErLhc1YZv",
  "key28": "2RgvP9KL6B6Hr8jqdpAKsKqSZH9KAmSePKa4SzGY9yivDmNW59nUyPiC3pPf6zBvSecNvkJx8vfb8vMgQ6AUBWTH",
  "key29": "4GMQ1aayTyv3kZCa1BT4dhaeKkPC5yrPsQ3eLDG9VvSwsWhtnMd1NymaMSSC9EuyWKBMusW8oB6fRNXdsV1yc46U",
  "key30": "4nbcZuXms9siR96nHLur3xijKR5PFW3qVexEjobNZNJQbAu5L95DyVsxmgf6i6WQbJYGB212xu21XzsjzAk2Pwcm",
  "key31": "28SPMh7ySM8fS6cGwdBpQvREYJbk7LeHueMgnLA6wJeYVsRdfvhRRkLVcUJ3oB2reB6Ka9difSffyGWSGnox6jFM",
  "key32": "3Mw1TY7Xxy775a82bZ83CdmYBUbzPoCL7W7EfGCuuvw74tbuyWsk2ssETbFg5nKuZBy4mfx4BGjnPRsNmbLozZ2c",
  "key33": "2eNqDPRvK9a1yLNTYHmAaGDhvWKoVmTG3HndjFGDu6uX7SBEG3s5WgMtDvqBm4A5gApM9H9aUd8JeqL9dqmbu1un",
  "key34": "3TbMicwsMpLUcQFp1BN5bUPWLruj37kg252HnA3MFsUw5gHuxtrUMpWBvjCWJ9BUrbihoNd5xyeo95Zhyz4EUUCK",
  "key35": "nqaqdNBKyDMauk91WQZjJH8i5n4oMCYLs4TRdR8wntzkBrCPJHorsSFATii2rkkmhimLUp55MsjkYSK53yxus1h",
  "key36": "4qaW2uLfJNsytbErySBbR13dQvLJuejafyGohomDMF1SGV551B61yaynpe98Utm8KxHvW55KRLHxnfZu7xemp3yk",
  "key37": "368pfh7si9aK1AU5deff3Yg1dSXUR1ias2jYKXjGGVTCyz41PftT7ZH1VLJnsWWx51ATaJDEVBEKVQLCfpMSBDCM"
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
