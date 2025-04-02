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
    "61Mk57nTmQo1gfMasiUWgYzzAdfZcnJkWHaW4ac3SCvK8tZqCtKWZhZ2NBbJNBF8nmaFFzEpGMd251WL9TXshsKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M37rytVA7DefXs7UbRAv8i16u8tENYXSv5DxQBdDDrZA72SqePApxPVYnjPD8xjL3BbiUJ5J56mk8EcSQHfoPJn",
  "key1": "3HLURJc7KewqzSZ1RkTCsqB7JQBDTGXZ9TQej22Yfqp8tS2oSrNbgDLGdZVPerVy7fsCRwTndTmkGMfaAzrZtEoU",
  "key2": "3tmezAwkHbV61QfPQBGnsAwNefMwHLzX5L9ZEKf38Xh4GAiTs1gaoFHV3j5MgcUEHDT7AwoS9c11wcHuGgCwBpEi",
  "key3": "5nj7mkK2DiEY7tn6cFz3THEjEBzWnauE8kp9DJu2mpDVmxNLSPt9cWhysUdEuJRMzF2E9aPeNkRUWGKSrUQi5tKC",
  "key4": "JgKX1LWCjKkPrhxz2ezhbqMj28kuHj35Lvu4Za4uDoBd7nN3z2RyWh8CtHug5ynpHiQaK7k9Z8AoNmdZGGMHgfL",
  "key5": "2EAZ12v61DF3FspqPT2QZzDwgeS5GrbxBFY92VNmUptgP4A953NtacCBAqPaqUNhKYSRVjKjksHKVxbLdyAqBcLi",
  "key6": "2FYAZygehmDJL1HEsDkUD66TLnabNkPXebFLLqTwrs4PgefyY2zdXXDNpHmqQ6ubi3wnhDeFEixoAK2dVj8yVBwa",
  "key7": "5Y8tnESnuNuSw9EJfqqsx94Ub8PfB9pWKhnNEih7ESJ7TKPZwXexp3ZW3VGjqTRV2HxdaBCbcGYpdgiH7T1Bstr9",
  "key8": "57DtUF7W57gSpabxbezqhR8qgArFx7KGLhzJNbmE2V1ruZmAPEL5veEx7qYYucE2Q73dxXVVBx8XPvDCZvuSUhHi",
  "key9": "3ZHE5zjAUJUqBpUegMfqcnvMs7hwHvK1eohBBA8oPR6a8XvToLmeuJwizc9sFuumBFdgGmb73xKTnxLquw9DTk69",
  "key10": "5FFYyUuhxhuYmjXNiVeHRSbfXcj395ZHfAJqK3in9kmyi26ovF6s9EvSqGyha1c514c1V6Ecyh41NSXaybNAWm27",
  "key11": "3iL9uVD7zEjydW2i39UBcw5Jaux7p1pvX2w6DaD2fwp32gUeowWq3WxKgwcJBUBDpndqoCPP8obnWQQCLgqt9gSa",
  "key12": "52X9Dh37mGiKhPvHjDNzFTGajoJY1DXS2K4zHUNtkJTuWVzRtSBTTwQmAGQQAy1JaVYLTTPYcjAuumkjhUjnwTHA",
  "key13": "3LohAHu6zaWmZ3jQDK1v9WEYfKrVDvuuj1MFALiu1freymHpYHq8gPdhXXvf4rwo76T9qirTCpHbkywZNK6E2MJk",
  "key14": "76838r9xfet1HFcFsipsiVQpMLqSpSfA2tmdtGopMv6AuDMDYTBmkDmvVACiekiGapAEBa2Jxp2cawMzsTuy78B",
  "key15": "5Y6X5Rfsj6LQh84HQHo7AqoGbrXzLnuYuodJeW5qhbSH9cGgVBB52r9NEzBRyUCoVZLjj13pnkhZ6kmd5dws1iga",
  "key16": "4hq7T6iQWn67is16B28EDwHNDyKgb5dJt8zFQ5WB61QxuXpZb8w82dDPFiCKQ7MrKCZagy5NiYtaSVsynfGba6QL",
  "key17": "3iggJ4aVChKgADy91JvS3G7UmmXqAJRNriFFNuU2zZ2CesfTytqoXJqKTJC5aPmRqifunhZHqMssdEUkeDk9RtCv",
  "key18": "3ZyHZxAMB8TbaBRna1AoE6KA1Q5wCgKG7pZM2zoBR9tzmXfBRheiwfZ3ebfNcfo9xzZbfm75FkBYs6Wtrt4sQbGv",
  "key19": "2A9JAtau9JUZTJpwYxCFgnBq6msGLLkkaA7G3U6RrjVpmZcGYa1gcQQSsn16YQqu3VixBSbbqbTaJHqcQfSFRRuE",
  "key20": "3oJWwQJK5yzSZaUdSGZNDRWtGZXpWaSBxAuoeEuKQR6NUtFbZkZNf5BuTAMXgkHHo9QzwciGVK9AnkmWRcqRjZuj",
  "key21": "DAdpUmtpnnN5FehFgynQccKujv9S9YfADsnYE8ZqcZzdjmMTCBDK48LHtYEqPv4gDQaMxawzwEJQf224n7idoDs",
  "key22": "3cbo7qC6qPRyuFgG2ePgw9k59dRpqSdiWRvNccUBDbU4bK6X92PHzpTFHpM3LpsVdUuGTxZcmAsPtbL6Qybyvgbm",
  "key23": "4twemzHciumojmTQvbTHaVaAkTKHr8mzm7WpCcVfUtfZRnBCoU6CFvwPgeCeKWxSJwDzpk1j7hpBowKoDhpztg3U",
  "key24": "5YdmtRcCpCVrfitGLNs8t9E6n7etLybkFxD3Nu82UYwpZrCEmc1NCoXuDExuKDXDKSjdpVLybY3KFxiKu9aC5J7c",
  "key25": "4io2gmQLa7kURuhAztjQpZhUKFKpn89k7GdzaicZq3NXW6XdZm1PL7kwj7FuzpCW3Kcj86an1rhBjbg2cjX3uJsv",
  "key26": "2quHUmcod7fxVWK3k76ErVeaP5LeDCfcaoMXnJRMpd3bNne4UHjm54xNu7RGNzXUmz2U9XUDiaoZupCsdRGBqEbb",
  "key27": "vJtxFhG7roYE2t4LeLjGvMNx4hghn7iLx6o6mavGLsie3AWo9bhi4Y9ga7Vc4K3Lo8oRHWgdhCBW78eq5Q8xDBx",
  "key28": "23vmMVW4n3XAuXyftbAw8Au8vpxeAUMZS9iC3XF3QhswrNicS7KGtWeXjEipzhBTCbfQKwp86cRGBznAte4Uoeq5",
  "key29": "64zMdrYJZw8jhyPezpCoZYMec78344YuqRHepMngqqTYAADVRGnv4CxN9FV1onDcixJS2ZZgjParZZyijb8eJw9T",
  "key30": "4Yfxm2dXMimYLs7N17wx8ySKhn1a4QNhGCj187PVZPP4EbHbRr1cY6ksgKmRGtKT7nSBTjmTqd8oDpJVPj6pKyZ7",
  "key31": "27jeAemcqK3w6GPfiNfpVwHKkJ6Sp2N7E617srZi3fYa7Sx4P77j9zFge4zSAnakuZWzAqBmUCKM8xoPqYSqVoba",
  "key32": "3hmWAWnoLwVoVwj7GAdsLUZ3eQ2V9A6uJPkyCxYnmfKEhDbwkERgwEXnFZnRBsxWMjNumpE2DmHjCKS6GUgWPcX",
  "key33": "3oEbvR3theTPvhc9HbZRagVkbS4u5aXR58N5FUmSjcU2MHdmDZZPyr3KEmRdKY7ZrNi4yaTvkXUE1PiSAiBcTsC6",
  "key34": "5VgvTy9NbH9uofjLk5W7HLK658M4fvX754onA9RtHAM7LysAuCEVpa26ns4BrTk5WGK4ErwVc63g9Y7rV1AYvfDJ",
  "key35": "65k95sNXJB4fqV3cE3cfVFomVM5g4F5p2XchfbmMipxUtz3NCuM7HJVDPD3aiWKuJDwogDoabxmHHkdQ6iw9sc6P",
  "key36": "4ueqRUdF9FzwWgxw5MowRZsknQwrw12BaKtRdGYq3yQDQB4YoGcu6usYxcfSP8Pav4s6A45arnpiGmMShYTWckTA",
  "key37": "4MUX6GTPoYg6FKwYVSaftq5gntgJaBwF3oXcZDgMEtqEmYHTMckJoBzKGecCgxhJ1seiawyBhcQTxcFYjNFev7JM",
  "key38": "28nDrfxqb2gPQCdm1D5b9ZvE9n8BGLgzDkjzbUfoTJ51gbjKY7ynAdRt84xxn2PtPu4nLfZuA7eEhq2cmYuQz9oc",
  "key39": "4Ze1Vkv2n7wpMsHF9cRfwEc44a9ZMBC8jVqWTdHA1udbwzfuG8cE62S1GqJSq1CueuzF3i74xF8ziWcUgshGqLYp"
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
