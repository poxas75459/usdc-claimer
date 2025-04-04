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
    "3q4jTTB5zu3SCZpr4kRbqjKsPSzYzRa3zqxEKz4XYJfKdo2atntuZYEUXGcfX747wwaEHp9MXzPoCTWE4Yq98m8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yzJmczzJkYBmffm6fhfafE8ZtTuy43KJfZcgnadXx6CSi51zaDd4Jddduxc1hnDjfRB95TkY83iX5kPvCu6wUFw",
  "key1": "45epCNEKKhTZRM6YG1dGeBywFyoJq1BBz9g3qGp9pkWWAGuNY5vYMpVjWdaf6zKKumPUx4KXNn5kEaQ6robueUDQ",
  "key2": "BSZGmkLcUCPRs9nteR6Y7q5WzmmhpVoUr17Zo7UxLioC186c6Qx8TfMXcPRe8Sqwiiy7W8xH7MC43LCkVNJUdpz",
  "key3": "2TTxCz6jHt32uv4MqW6PKCmx96pCxE7Y2p3CG36tmRspW2qYLNhLRVeELm86pektUkofXqZA3LWjTmqt1B4RviGR",
  "key4": "5aeNwgdPijzU1k6kxeEZRLr5bwovD3sbfDa9PFnTSmDak34nkpPjW5f8YPbxMtrDBwWfVpuck7gSyr8W267SVFKV",
  "key5": "5Bspcn3HjKg2zZhUDsLEQRNMGMzpddKZAgk7oZW943255zShQMqmaXYZME3RnMoks7eEjAu2sbSFMt9dcFCirKbf",
  "key6": "5vYiAzonxw4p8kTtaK4sGtL913D6or27nDMyNp19cukUf8q7RpFCraXNyXcnabZwNAK9DmJM6jKQaKw4kccYPWcN",
  "key7": "59h3mBbKJUUv47o49vpLSmnipooQJxD1jU89Ae5w9xqtSjG7H1FAZnaerVPXGziXC4PtfGacrd1sFu5a2PwXH3BZ",
  "key8": "2BCS9gCpGhwTsW8EyXyDdscBg9BHYmepz9YEXYuesiK4nRKgiwrrjQKUdkzFdzCgpeZ7D5NLdbX6dbyHds3sYqke",
  "key9": "5r8JBjmLYjbieJrBLLJjXxFVpXk4kCjcqo2UFBs8dKRnS37JuEs9rB4iauN6Y3AYhGh5ZxCfUEhFNz4JsLsRruJX",
  "key10": "2pJLK2TDCHGRpQF1DqoYeiNsStehNxT7hYc9URyGFAvwdS7F4iMAEUQvpyDg4bxWQmFzJWrECXrsd1YDoBJ9NvZb",
  "key11": "5YrruWqyfG7ErnQv3vMUqkrHvqSCsYxzbhw4gLPz64VUPtdQ1YDZD7sNV99erasZhsV26CX7WBYkgNHYF96a2tyv",
  "key12": "4mqA21KGrr5k234GhU3Czqpfo4fQya7JCUg1HiJbgivmfcVMgjdvtiLAVknUJio8ri9NJc99vqYppQk43qjLTURU",
  "key13": "Cgeu8oRqS1Dtuaubzoht2Ca1Ea2G1jPeZtF7VTmW6AuwvM9YQTEi4Cf7BcYuJ7Xggt3HnXVTrUUMQYrzvFW6gkp",
  "key14": "3sLEoMoJp6giG96gJjPZi3TJJVfHkCxT5kVhv5Tr4Grwcm6ex6EvsVBzjjtpZwqEzmfC7d4x9dsFg8mfEqKaWiUz",
  "key15": "4drYfL56URYxwUbQthcoBBXBFBDFLyCcWtESSwi78jmQhqzvh98Ljs5jpyfGMC2yLbink1FLoKsjqdR93pkKL5QX",
  "key16": "4FMeVvJweAAqDCqqNBhSFN8GyZScfL85CnaWU2wEDhinYhJZzBafeoJkcXWitQig8u9Q4wM3v2MDwjXaqEcznVzX",
  "key17": "4p7bhbC8UoSv6AkG1vMPg7ap8AfmqbfP9YLq3rWZ2MCDn4GtHa14J2XUt7XWKjpc8XxYZPrLGGgxbyEFXfFZUn5E",
  "key18": "ghnYZVHxfCYhGB21dNJ4i9d3WvL7FyMBDUtMSUrzvd19jgy7WWZ3AYTwhMrxNeoWGnXCdqD632VYEj7DQ5iAZQw",
  "key19": "GrY3YXRmE1Ut1Xak5ybceu1foCpowVpDAetNWzktFimptVr7udawxYzYVTudp6kAfBk8fKbU85PLiQsy7ouym3w",
  "key20": "4e9frY9t1526F1Rcgoy1NyaFmKsEAAFqzm959s8kpTMZh28rEPHTowqbVKKfyRaPzHAt1rJxnd8nyePEd5tfDsyc",
  "key21": "27h5uaoJPUyzXDGf9WRTa7tBMBraKz63GbKfer5pw43sxF6rFJ45LUogQUcUdNpY5KLHAnYM8MypyXF2Q7CxWrVu",
  "key22": "3cdiicxmjTdhoDXzQzozB631XXxFdnAHLJ93Gb4cu4MAQm6NNGkTgNnocFktChnhsAoz1eAHNx6PpzWhCZvmqEqM",
  "key23": "2wXko8V79jsUv5ETsGGe6SY7E4zWWtNSkPMv2mGsJ69s7VMN7ZUDFCiGycHQE5urVt7cSJg6PPBuK4JjrqJQTd5F",
  "key24": "6N3jLGxs61S1pbrHp9s5S2GYgjmD2a9qkhLZvzjPQQcfm9RynPdqR7PRPQu8xdMMFtceAwybdJuC5BVUD5KPC8y",
  "key25": "4FXidtPg8rYyXPWwpuvh11er6PgA8gGf1nRMqbHxiyGXSyszuckhCHGWVhRfSjrX7pqHDwW7N4VPou8YN5zdo212",
  "key26": "31bGCkTENWRwsRkSczFXmLW5TXnExxYEe1bkRB6VbtQEso8T25PeP1Cex4DNrucvVj9wtiUvf5678ZvAU8k5vgYZ",
  "key27": "23cG9Gv5EjBmSLaM7c83DE93Z94FRLYSAjAFmNqEqP2bcfrKaasmYQyxVsE3Qgaq7SDjv5K8AVsakBgzjkiJj5Pz",
  "key28": "5guzR8ykNfJC8f4m7YKUbMS1kriiwu3aW8XHyELeL9EFPSLYggPddH2y33GJ4zrX1Bqh8QNsLDKziGA7EnzXXexV",
  "key29": "4njhLnvpitBFNBQZNY2DBRRCLzeLwdLf1o7g8BsZw2Ddso6VDYw7T2zK1iJnMuwcqrKJhnmE6omSXkFpwo7Ved3m",
  "key30": "UD16CnRuvFpg3RFjnJWgbQtWxAd9NSajsrBK5X5gyH13WRctZEUSnH9yiL3vL4P1ZwoYfWoQ8atDMuguGUTjHEm",
  "key31": "2QsKDHPFKrsUTVD7PPcU8eX35LdDErkSXNheEjLfapzEQXWegQHKctMkPczAwVCX8yziDee2HgdwkYEemvsW7Gkc",
  "key32": "2wYd18BcKC6zHfM4UvSqLRRSLsDuoq8raZKVftvvHDgf51h1Tv72vx1rNdCiDgQejDGELvWRpxbtc1a3ZmxJxGXW",
  "key33": "28S6R4G5DMbxyqmJCwyLeDgT1QC5gmxuU9gPDmvjP41yErseN5YLhVafvr6wfJGEzvMs94sQdo1CusXS1J5vS9jX",
  "key34": "28bfAQcieXHRELyfhPVSgMb3xYPMrRrZiKM5gxn46Wc7P24pcfyFx289jJy9aRAeQYBFcCk6c5Q1ruAMV6rqyjjK",
  "key35": "3ASuoSoTAfCMhZmUm6SkZe4qbpDyY6kZJ1DU5WijRi3TQkrzv5xE8s2zdmcLofJmEfAy5qzPh86jjEhmrf5JVe8b",
  "key36": "4WG489Jnq5smfWunFhgjbkKryKATDSWhoaAPw19Vkj9Hx5vLo9KRjWvmTbPiW14ZwMu2wtpqQ9KYZtJQeBrdh9W1",
  "key37": "5A6ob4qyqNSWeDQGWS9c7nicPwK5u1wPBLkLYyFWwUDV6NAZ8L9T8vXQjckwT7whWioAE3rTuvF5VR1dvNt8eq8X",
  "key38": "332iMeyx1jFyFTapRPV2dgyA9Q8Li2v6BGkd36JCPoJDzHozyHKWCjuZWEEPscvc4ZrdK7UHDC2KYFwTn3DVuFKU",
  "key39": "4HnVdMueiFgr3Rd9mn3wfwQLkBTAohHqtVHucVZJcGauFFmuEPJu2hHoiQcb38eMumgQg6gD3Aic5bFfCwqiBwMG",
  "key40": "4Domq85J9DcTGCHDiEDx6gXGhaAiy9YcUMVRmxTcBwbMM49nRrygSrdA2PFJtbtpZYwLZ3YALdFq1E4DbLdw1vPU",
  "key41": "2PfqXb2SEtAhfw134gdjWhkFrzvNgYkKXNVJnQTNBFDJv3eFFxUHsyKJjdGH9roJW2sQJ4pDzMwZSzHwX1tMdVSA",
  "key42": "2NiJjVjNmR6V3ynvGWMau9wT1TfrX3UEfZEKFkrdT1i97wbQz67ZMeQZ9s9HzzvfdU5ktqat5eV99TmiWXu4nH61",
  "key43": "5GVRSXZMEQ7ReVCcmwrSGroZSQmqXpkvNbczSw1JeDmhL8HYWV1hHMHAeY91n31UbkgEA57QasddHFRmzSC4Bz7p",
  "key44": "4PK6u89XtBgJLZvxiJMoitf7FBh43mWAowB4XqRHHDZWpzVUnytRZWqmVr8EcQHTt3CE3mGWwam4Ra6WADJQ2MQY",
  "key45": "5NrCmhitb1B8zNVNYfsr6Riy5pwKME5gUg549QdXVdmiP5mC1qtBVA2XaVWvBbpYxHmM7HAVhUVj32FCDNyPijZa",
  "key46": "4nN91XodzxeLM2g4YHj7QvMJ2RNz4XYV6aEJjvQA2YpPJ2n7zePxdwdixHy2yuSS2VG12v9mZGAWvbaiZ1ZGFmHa",
  "key47": "35LMjXK5NmRehbmpMM2BfnyThcjrPqGy3dKyTWX5Ec3sLeTdEHrU1Vb3e4K4aLEp3F3ZZpzwGYVF9LsmvX2ePJYj",
  "key48": "uGBxcbMAz6ryYfSz8ePRgHAiLWLEoHimDUGUxz8W4pkCCbMJq1DUD2cA3A2ErdGod9nUKXb7bmENLHttBAPnwk7",
  "key49": "2sw38b7ZWgenojDnrmqe1xPJGosJtv8RsqK3Jh99d6KpNh3FhbHQHLaHuBXWigbDCmy7Cz7oiBjnJciDc2UHGkw5"
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
