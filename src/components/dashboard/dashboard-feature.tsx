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
    "5YEzLK2UzKnsW2xLyG3Z5x4g5CArXTYcpVyamqui9FYdfaZzsuasByiSst75FhpqAdHvGrEt89uvbgEuYwW62nU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32yfhFdriwhTUK43HMiZicfBpbsrHUJGv6dYRvYV9mt1bdyhgYwvjYkuMsqmMWoNg6Q8DDVBkybjV4svncEd2xYe",
  "key1": "38XyMeFRHvP9d5rJv4uMErzg5KJASR8ADtpD6XCCQp9DFaPT1QyTqfkN51MUxjWMLe3PwfJhSbu6kbQ7ZqvHZ9P5",
  "key2": "3xWwKFCqaAb7wVbBsqAXsM5eUvwdmMgQmbHEaSjBFSTNTQ4N251Q5Bzhn484if6eWFXt39PtgLgh9MnKXaUBpjUE",
  "key3": "4mjcPzPLbcfKBzqog47DEBHNx9FJNAjUbnZiLMqzCo1fbAksrvtBfxtD2swgRq8nN5DcwRPHmhifePZ6JH56SH9",
  "key4": "3HjXbULF3Pnw1m6brGKuUHnxchJT3Sq6gwkejPwjFZzqPMeyfkNy1UHVbDnLidoBU2fP18DdgSNEZsWnU2RakCJ1",
  "key5": "2R5EYzTfQx6WGoePRJRZEmDNe2QhRwDrJPTtVcLBmVXQ9ZZptbkJmnyYX2VtksAMbNLdwFwKpJALxfESsnBKaQ3e",
  "key6": "3oUx3mWBh75NfwxvS81uiv8sBjw7dtxN1BeeV8bZo5PsDHwvthSBup3YbHCb8hESrG3pWSWX6PvrSvXySsNBGuBd",
  "key7": "3zqTQyK2dsDNmnvCkUN1eAdzqaeMNqXZcUX1kmukocPUxX1KoczkkKnzkdkBUiT9np3mqhWP9tmyqGJHCdneevtB",
  "key8": "3ugpA5QecMpJvvNNrTg2iR2AQ5KN4F4CYAUKoh3p7KQnksqVCoX4QBQunybU5EFpkDmwocJ3EmtvnNKYEkXVNBJL",
  "key9": "5UKSxSeNEMRdpxtmnSbnWcwkXPESbQqFgFxq3FeJ5qMVdSDEEZLBDLuF49yYKBCJTvTyjoRCxUNCPua9wHxcF1Gt",
  "key10": "5aWJr1z2M7DYCNTXvVTXnWZEDyRLTeYHQrrLkvL9Qu3ATwR8F7RBfBV3PrBjLJWkpPMsdphWVi1cAkgbbw9ezEtv",
  "key11": "2WkxPoqP5ATiSP3R2ydpMrhy6R3YMe5ZVC31a8CujDLFcTE9iKg4P9oFjiDupYZMb4wJr2XRdmVxBbsN2z52BNNL",
  "key12": "e8Z94Le3Xg1XvQXFZPPdygkk2qgP3Zpe2YmRdyv4N3wJHdYCSC9wgeMZvqqFPgBMUtkT2JtLAKXMiWjTvjDQdUK",
  "key13": "GC7BNxt7Tic2tVyz86Y8jmeAMa7VKtWvTy2TMmMBRgt5NTyrSt4vU2r7uEe6bbdwPCyRHhaB7P5P6uYcbLAkgjf",
  "key14": "5NHBgxKwKvP9WsSK4yMAjUq1iuHbH94VY32zmMC2V34Q8vmSrZw6vMceTfVFZxmmXhL1ftdpfdWmedGkgkcy22US",
  "key15": "AGeJ1JGyCpiQsSzF6ybHPCqbtWXYeEkHzStQxmHq1eaHqYKLxfghgc9MzSqdz1odUoskHa7XsaVpnf751uSHis7",
  "key16": "kAcp8KfLcKwSyvKxL5djmfRKwSiSsf61fbMvfqY5hjVtkR2r1X7bWqEmkD56kubqAzE9wSunjrT82wAU7Pg5vin",
  "key17": "5ei8imosRjGPy4etHhHDsSxngFjFSBFjtU7dy6DPS9nxLKgTvf9nL1VX9uc6cpcVmjkAmaTrU89WkFqdNayB5qLB",
  "key18": "8A6wywvxJ4PzLJVKMMdWCV3yUHxv9Kub6mJf5tdEsSqGLNhjae9W2fQSd4UPzDSiWt76122L6zVaVPezjdisw9N",
  "key19": "3T1XRXWcUQMQfHtLqZ8TFySvUyDjjrWZavco6V69gyQTGLipm9MQ4Phcmk99CCS5VZGsyCLewgv6911tTyE8PFCZ",
  "key20": "3FJvwjiVNCsP6fvPZwWKCiccLmtCywG7xkme7Czb6L7Amaa7iSEMCybm13B1Por8TyYX4X1P5jRUPKh227MYdYVT",
  "key21": "2fyHXiqaWeZmZocEqJBsApmqPKBXHbBVSqDUKzTPdtJ9UJFvMEJqyQzYzJEBtQzCSzZCcC135dFLrtnJSMs1AosA",
  "key22": "4icxgXE3i7iQTyKwygNCkg2jH7yrgbfn7XcMfXw1TNzJ3DudQLvqpPtSevWmLUXvWmiGobcC37Bo9NUfrrQFKFJA",
  "key23": "5kvMv44vtbHxSLETLKJ2fxH7qJstq8Z8HRLmBRMdb8BUjfHmSArZqZZLXFFeKRrsvPrMhL9bUBGkjHoUKnmsmKxV",
  "key24": "5iyx51nG4iWrEERJmjihCNvFSXkGWs3jwMr4ZHVmmRSmZkTLbmk9MsAYPATz1av91HGd8ZczHVYLcqeAw4GYsczM",
  "key25": "53tAgNPjSYp3eCvtZQWiPSeyAoVzZoNZQc51d1HzZJ5uLGMxQ1Nci3MrBY9wfJKiHRERorsDV2JvTvSRYeb4VW35",
  "key26": "HAziWYcQqXfkR5cQ1Q3iWPCKd7ppi9tM6E4eFNiNDR5bPociHS9VE7UKpxoqjkfBhfnLTqPfUvqe4NtY2LuuQSb",
  "key27": "3ypxqD1svLgUfe6WBTbdLUCpwZmG9Ttwq4ezVJSRuNNH7zfZuMb3Jt3KvF2USGkTrPWxqJUBnSx3PZvzk7mGfAYq",
  "key28": "5JzMfW1d6jkwUnBVUYJCtWtoUUpLiBcXeFyZpnEwTEzPLnJ8rGrzn5Ht8bpTCoGyXXX9RhTTsjfELnFt4QUaiJb7",
  "key29": "51k9idYizmReC9P8oVQ6vfzRuWK82rEaM7aTEJnpAm91g8KN8ZSSvT9YAggFJ85jE1Bo1jx35CLAWimqtFf1C2XP",
  "key30": "3L8SpLpnVJAPfp6mYbWMLoxPjgzA3pq2vZPRL289B4g68ksZzY3zayeCJDRhPKCUWVBtRDxxgNCQRk1wgjBxRh4V",
  "key31": "5ajxNDfJFCHeXYfqVVdPNnbwrmY7cbf7hwAzVb5RfFt6CzYUjomfZGzrUDUUwt2c6ycShtnFsrs3nbG7ftMH7wrt",
  "key32": "2UResdQc5wFvL1mFhdjQUH2HpLqe41UruinSextb5PxgVKDxwNasppJb54yFMX6VYCTonYWW7WE74ggTVDhZxzuh",
  "key33": "3wkUiwjT8xnEJJsnbxDDqZdykkByzjMYXKUNvUu6aorEsNMXEZVHuEdsxtDAmYQs8V2F3bD75MG3HBaSXg1WwVpp",
  "key34": "TgTBfjpAQgxDeXgWwApiKTEWzFqcMfLEWZ36YeXGdsKyKbC7GwTsmqMcpgeth6DJfarSMTJNUMorK2ffpQzHiPt",
  "key35": "5GevVUcrq8a663R3TjiCzD2wFuJ6BbXcLR2sZ8cBRjREwDutNt7kU5EMv7zMb6uy3nUZTFqF5Lpog1MH6LnR1njU",
  "key36": "2K44NYEnumGFVj4SRCNoTcszuo3u9AKJD3dfPBj6Y3fVEsgEKTfnms9qfmEw3XyUU8XLRGs1fKR5g6eG5Q2KsUma",
  "key37": "5s4ZXphT8KFYGGbGAQE1mqTaYuCtGb68FVp9VPSNdjGek8PwRgjozpvqB4oCpsCDBUHnFiaPx2Csyz1yowmBUY2Z",
  "key38": "KTStL58g5qumuh8Uk9gcW8cW5BtZ7fAbAnmUmQWtLNwVkQRS766N613Rd9tgcLao5J11rSfz6dePsuCYn736jFj",
  "key39": "56bFr2iPrNK7fBi5uwrh5ehLcvrib7JreX5ufACnit4g5iFRHppreTCB62P6gMNsLH6Fc5ChjEjpxxobDfrchDcA",
  "key40": "Fv9CKJYQVLi8DiELDkFVmc8UPnjdfXWh6ZK27Eib5LMpwty2551r26FcVwsJw24aKSc7et9dx5bHP5ok9RUMFVL",
  "key41": "3M6cWTGxsNde9NyZt1ybhHG7Kyomw7aLpBGgyAKFv4iuAQDXw8M1Dh74ahSUrearRncifidxBQyZL6kaMttCJm2X",
  "key42": "4Q96JjkQtk8kwVxC8Q4annte34KnYc5hQha7Y7PVZHjgV5Mv5xworXHfyWhgnTqPkDKKSdNWhdNwv6VXQFS9Ey2C"
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
