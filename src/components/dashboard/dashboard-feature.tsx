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
    "45webQ1S3nBZg88st6gK27p7XCa9UvqLPkCkshii6LsBqWqZzjA4WSb145Sj88qce6NPy1gBaBeDjKWsKp1tSY56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y2z7rrAraJJxXYU4Vna2QxJrodntm6yEgtXhQ9SMmAGBuG2cWqM4U1okWrdJKoosJ4aZsBJsacVF6ueML4ubcM2",
  "key1": "4eYC77BG4tGyscxEAMzyk39PNAYRPV4M1LfGSzTvhapBMGh6ajGrm85Rt9Mzay3m2tFcnwAJ2SA75s9GBnKomxB2",
  "key2": "5wQNaoeBfag3Fi3xiFQFebHsmvjN8dcARk14LYycghnBaUQzRcEjijh2c6d7yM1eJdSA7k9Faw7aUPfcothfL9d3",
  "key3": "2bDuCZVeDUV3RriSU5eSE18f9hLVMcKnXpiSA1qKpoKubhUa4jAHGznXQu7xmCGiX6jxUEAd2wVdRC4JGwwzBuEg",
  "key4": "2ucp1bmcpRT2sRxEJXhbCGc3pfqScTfPr3odAwUo9dTwvjRMZ9fgEAP9oGJj61pye6x4m4ZTPJe7anALkR2q8Wr4",
  "key5": "5Gyp6GvwBnduk5674GMKJ9pxCpw8tsPyoV4G63UYK3cMA7vMDGevDG5BpBzg7db8bxrCTsoJX8ai4TZ6iMKZyzHk",
  "key6": "3a65K7ZnURck25pvdSbPB12PDtV9hmEGWhQq6y7kiQBhtQff8hUNAsMAacHUSWNhNmmagPR1i2aDTNtqtX7Ac3Ma",
  "key7": "28waqFrKvstxgkmTUHBx98GaqgTajX5prb11yXK2VeuUm7RrhyHFLGmRJxoucd5inFzK6hrZeGSPnmPLfPUZybC5",
  "key8": "5CqP19RzJ3iCvu9Q3iqqqg8afwBi5gYTNEYsNHcZuj8dY7PZL7jDrJwzsUxLQaBuz2y4R3XsqwBqQxCV5nE1T15u",
  "key9": "TgqygQMV9vwsS9ZwcgKWpkrtJPsaBvFQeBrgZeJ27svSPdQqupmNz8ccdbatoG7mQPpi4CPwuUaXfkZVCUkAueK",
  "key10": "32CMoB3aCTLzJA8PNX1UmAAm1RxADaKTLN2fLV5yj6XPTabU2yJvZ7sn6JwPztz9hKDnWkrEyj5EHHqMvuW84xJG",
  "key11": "4YdiHfzhbvsn1yS53NotijBmiVYZZqRqi9CK9uoUmSWVD54pwEX4RtECNWRCYESaVyq7VLsP3Trvh9v1YRcnrDuw",
  "key12": "igfKVHGoCxpy8FSneyLnK3kYt6WU84k2TNqDUgE9UY6wF4qzx1my6matdT5W6eHZLXsfSLQPVBko51kbmCz4cjh",
  "key13": "2W2cLPYekCvRpWDkL7tsFKnjK7bgMqohW4jr3ZoBh2YKTuFCJ7AM4pX7MvgmWTktk9D6M1F718gn4vcFVQXkQV3h",
  "key14": "knBu6Vuo2zTn6KmAYyRyz7LcE9bLsoQUBiTN2a8izysdEi98icRS7G42WJR9aQbdsCobmD25gPbddLwYFLuvqJy",
  "key15": "25iuVC4LuCcpJPWEa4CFQyUthhtB7UafNz4pmxvRbHqzaT6DxjJR1gFMHcJGitao5Hq1B3cv1ncaeBAczDSY2TJu",
  "key16": "5Phbt6tV6fTzhVsYcQNSCGPLuceA6Pen6GGsA2wqiVufe1mCJ7CQMab3L4Dh3eqGpYGrrfs7VuzrBEpot8pWGK6A",
  "key17": "3oktUKGsziKYH9u7asbL511rSFYfvjBbdvj4wMqrhEPoU7oPgHYLtdHEsWDJeVptzPRnJaJ2jYVsKtTQwDfoUCet",
  "key18": "2EdgEGsPC7vQGojTjqyNWVXa7zc5dWeEd59aCZLki9E57o1eaAGbkaJgrSC2e7LwrnvWA72TBebtihKvaGgLk5in",
  "key19": "4keQK2z7JGzijijakNCGyAJf5ZR7mhTvMBRBvhka1zewQZsPMm6xaCqdEz1DzcfeFWafD1Yxt7QUsgdYpsUCQZXJ",
  "key20": "5LHpt1jdRBeTLczqDLJYv5VxRcweYXiX78ZxS9jjgTP4ZrW9X7gHxchDqGAVveb8u2oviFAEcMEdCzhVMBNTa4hE",
  "key21": "23prm6et5izqCJrAmpuKEpJjA678ceMukguqr21HKWwyvtuinX6JEbcfbM6WKGZpjk7HohQi1ERDkyU1htwT7vbZ",
  "key22": "56qc93aJoWeiEyBMhnomfNZij8Yo5WAR4hMpsPfze2uHdSSowRRMgbfsp16ZMrM6V9m3HKZALWzCMCbA29Hu18Lg",
  "key23": "37PHdeUNXXdgULsafdnxx76TzCLHVCiMJvGR8jMwYhTwcbzUGdJVwkK33abSSfaRqoMYD45zkZBSgpVsBTaYz7UG",
  "key24": "2S3nSv2bUKMui7wPJSjiSizy2Rcqfcpu1hjT7ocyj61S1DdM7rWjKGp7Gr42iuLHxoiFAd8yTfgs5TGDW3PdHhJb",
  "key25": "eE68XdP2S4yye6PsomYo9eB8M6cVNvuGGJfvHR1F4VfM2K6iDwDoEbXNBj2AwyzakXi35rLtsxzGpcDvU4jviHh",
  "key26": "256p1ch4KT67SwJHrJHC7hGh8Kz38xrAMG482AZSZLjSrAFJMnfU9yjkyQXZ81pua4BhXJ3yxtybeMQY74AUpv7Z",
  "key27": "2kAHa18P44EkANdgUPNQf14F2sv3hNaT6TZ1tUBePYNztdawECs4D3fMBW9cyXApeUbjErLC9Qx6SGRV4szf588x",
  "key28": "3Dj1acfHWKwakj8B12k5BWdkkfjLbydYVPPJ1uyjpp8fcqhsWU4QrLGEaoaBUbaFZShvbMX5yJ66U66ZgS6dSkTG",
  "key29": "4f4fyPFRDm3wTuZfmhupVy5WzPwDj7RAgWzjDvK66pGVgdjJ1UcP2ottMVz7KMWGfkbx4i4iLs3eoLLZBvNDHFcY",
  "key30": "2RwqbjaAWTNGgVYj275LQosZWzf9TA1zCcKwN553Apg3GyTnyUzH4achqGJBbKVtoron51X1A6moZThtFSm6Xc94",
  "key31": "3uZUF3FByj8UnesqTA1bSW5ppNGCnLz3iMW4NvSnhF7PqiPFeF67nCvQRufRmiLjpuahxxRjBXDQBrcvtYdBWYju",
  "key32": "4oe114JJcA2DTPi8Mbf7ePq9fcRWx6o2BiWDWjaCnjt8by3ESBVwJDLGqjuv7gMAkWkzk3jJ3JyGKq4wcqH2KEcp",
  "key33": "2GG6sxpM4y1s3SPZdcbitRNYYzVCwskS6BmQ8s5XNUGV6n7ccCRsbzP9MnUbbHB64ZEACGFXPJWcpjNDSKspo2Mt",
  "key34": "2EH7cHbLrLutcxH4u5yAHAW7kLW7NHMncruxP2BtgDKg2BwCEvAgccpMaLqHqKBw9Jdib7chDdyGwRhZx6zEE155",
  "key35": "4Xfu5rv1sCVLi12p5gk4NznPQsK2cQMnXEgcirXitJLTu6oimoCnpqMS5pcT7P1khAMaWifLioetVA5nnuKSxYby",
  "key36": "3kLRDDcb3eeajtc4FptD7zRZ8uoDptswqoS6FGmEnFxMgfaZuaUpk8hc2dRriA5oCdojYcppX7MsSjCjUWpf8SvP",
  "key37": "5FRzzQJ2Bm3JykUfCmhuWuBd7cM9iUT3FjX5UnQqMqHfyzi9A76udxpdi6udarjDhwzjFH8rHF6AfWc7vq7vugcQ",
  "key38": "23WBMr3rdvaGQb6i7PgRGjkYQRhQaQpE9b6TMBpdVyVVbwNf3PvTzrs8HMXRb1Y4tEa2zKQ9JKVJRgHFqWcnyTJe",
  "key39": "67cbpoL13iFxjiPcJ65wTrFoSyQf2KrH2fTw9JhL6pY4NrXfDya2RSMri8ocfErErFTVeMR6eJSwkgQaU6PxjHXi",
  "key40": "5HGDghweoLdqAxst7gd18FGwAGbgmKGgejgQiqdWVHrMKXfaf3At7YvJioANr1fGoaQmbB4HPcz1Rn87Wu33Gd8v",
  "key41": "4znjWua5u716gVYVscbxbrsBiEgFWVVeswPK33SX6R6qHPYAoW91YrZBXKx1Z1V22kbZLvkGMHzxmRQTUVUj1yGb",
  "key42": "5d6JQ5hFJt8zAXnXFi3t1NxaSTQgvLXBMXdmvWz1YgFTyHmnTW9WFQ2eSoVd4sQZemy4YPYCVD6CuzMqAxnpdu8d",
  "key43": "5UHFANM5GgZ1QsEuUeqqm1MSUAVUFvXWd4v5CyYseQk6MFwDFmArtzScN5m9cNHgk1BcW5u9Cq4AwtbRTRi5g8sd",
  "key44": "5ath4xdNSvJd7hrAVhn4iG9vaqrSV6tRvFxuHXUdMJj9vMZNGL7exgmRsQuLZyE8497Ruuc9XqQw8uNFLSfNeRt9",
  "key45": "5z2CxEQAHbgdeu4wM2Dq5S6LDeBEkbnS9PbQs5jGF7kSVdy949S756dymittJoq9Kib69LxL4owJvX4TT8FFjpC6",
  "key46": "2J1ibYrHktCM8bvyyMmXEGeXm3ho1En7S1NFCkQB2LiSgYjef9FayUiufKXYwFxYP6BLVkoH6Uni55c9ukJDxBoK",
  "key47": "4Ge5EWnYrc77mcg9srCgdJzY1jNxnTqubcreVCvAcHAZhdXxBHKqaxSg2JHrKcEZXukDu2mgVZosLzQiLDFPWz7f"
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
