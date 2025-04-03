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
    "3uzsBwEH851QVoiFRkV7oXMqy2cjmehGuHHGpvYa8yEySVugGfaRdcLPKocSFYKvnEABLFidiyxaUpTuwiauTzzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJFhUjQb3K56TKG5pKvb9nKkxRa7JZD9eFqFSrKrDm8LvQ21ikjSRdZMx4rECEP85pRVs5S3TrhifQrxBRzqHo1",
  "key1": "4YQBjJJnyqhGPS2PxqkKmQ8DvwhwBbMhM25AjsrGRvSPJAfX4J6r6KovTP6M1imB1CYe6o7xqzHs8hHb2Ep4g3oT",
  "key2": "4PrzFyBiKn3dWVxbDR2gS9mDimPs7JihpC4TojW9gTYVKxYkfXx3EzJhZsjJMkhCEkmKthdCtSgmQb6mza4qU32M",
  "key3": "fdKT7KpGJbK7pJQAQnFM2L6J6WAHVrbRZKr5R7vyfvHcg7FT7du526Yot4A8FWqzmr2H5LiAK3oVWcxcVQLMiER",
  "key4": "3TKGTUeYo3tpspqMburFPDmN9txASifJJTncuThK3R3tCg6GDnJ6TAjLrfhZx1cKd7dvVh664wbHncfvshpjKh92",
  "key5": "wNSFc7LarGM17bkbREdWtHZphCeTCQPo7RP3NnRmkL4QDYKJChhPqfR2xTHnfpH89ZeVQiuUXwP5A96fBVBRa5j",
  "key6": "4pfbf7K9YJLuDpoZuKmqDhrDBrGuHP8T5b4EFu9S12KHZZwbSy95LtyBsbD38JWtb4DbXsH27tMNPHYGxNvgSFkk",
  "key7": "3NUBzSxcDegMEoqwsikUXWENz2CPwku1dWXv1LtE7RmdvtUmBeArpMZJKmFzxtYnXoLKwiisSiPmRD4w6knhwkA3",
  "key8": "5S63CMvw26rMjfM9roLjj3D5YTwy4LBAyBHZxzKzNdfyv3WpyfwZ4sBcxYzfaPFT6Kj7zACeaAg6WcqZiVa2wDUQ",
  "key9": "46dBz7W1EmCCagL6US9ZvZTc5o4VKUufCgzjM9aXYa9ZoHCcrLUjebCmtnEfva1sAeGirDaMdo6dugDsxeFQctKQ",
  "key10": "JgBjzG1evnx426meRFEUvbXAHaixBeZbu7FQJxcTEV4JuwEF4BLDCRRPi6UWnLT2TMn2SjuqHGQhwAXWpDs5SGS",
  "key11": "3AmX1kviZiX1eC3xMBreZ44PKqUhP9YTPPHXdMFBdm5QkwpP7aKuVZhYnHCmqfWqMHFEXfpztgCrVquamm1v9woE",
  "key12": "RNqzN2ewb4YuzjfGR51sr7GCUhrGH5ULkWKUP4breZPjaCEiknuVYBybCV5Rzc1xmZ97bh2Npk9Jd6ALRyd6BwG",
  "key13": "Pr7mZdVPs15cC817nxUs5nYcJrFhbhoUgEA13n1z8wdYyi7RKLFUdYZaGF9aZKHYPSPSyjJv2PHTVcvCjoYyPZW",
  "key14": "rMqh7s8iLBz1WWefApoeH6huQ7NCRHLV6puJyqNi86e5BL23NcRMoxZXuNcy94Z1zqSk63i7ZV4cKxUfALq2CXj",
  "key15": "5uX1JgiSBdgGF9pMR8g7H4RtMNMJiT5AZZ1M5uwbAHWAkP5oEwseDTxNLCtp2kmeXNCKBbY5dDyr5zaifw8kpNfa",
  "key16": "DfRrks4RsyhTrhtYrNkDL6EjMQgGQXanmfUyTgaCU5JDMGyPTTM6YpVojTKJDoSSNbm1SK8w9S1u952N2H5d7qY",
  "key17": "2oZzNM7zRWxvkS7gjMmu6VXwKV9bYXx5v5QZ2sF3jnprjCATx2BnhYgRMkytjQBSQDaj4WAHRDbUwwG7eUjkJ2Vp",
  "key18": "5vNECBoCdsaJ1Bqg9q2sn7BcyUXMs48Xjy9HNH7cTDFqyRjbvSUUBAzoeYUipZ1uqRMjteLdvEXsacxkfqxpgeQM",
  "key19": "655CCpZ2663yGZ6kbygUTvZCzR8D7ALeQUNVzybwxj63Z82jmfSuPxBzPCb4ckQBVMazthAvhGCxpv7yujBh5vv7",
  "key20": "43ewn6cAeq5GC1j7g9hhb4uTMAbMjKZEA6mXtV9xVv65zMA4fL4DiJjh5iZKJimVZCaETJ3LaBkdpLNQqgVJHfnW",
  "key21": "5SwENWXKVVqjrHoLcPd2g5YenobuAqNxuH5nAnS4qZ4M3KPpeGpYdTepysshUhHyyp33zocKB4tUyPJQNKCjugvn",
  "key22": "2vsLU8apWZxQe2A52ekdGhLj2LvenYBvMs3N28AG7dPa9HVCrHjNHPZZwZbbxYgLejZ2YbzzqkhYpGR4z8PgJ12L",
  "key23": "3SBLaTyqB8M3579L6F1TJTm7Y47nqHuU5NxccAjbHMMAnL9UMAS43fduGAQJRvhCVLb2XHHQQqDWkN8Mkoees7a2",
  "key24": "5tM8RJAn5dCCuNCw4iZURiQ6Z8xJdVn9ogi15povjN9VLMhFDBkCCnSDSyyQ3xDHW3UzipY46aD7Vppwwvuhkj3R",
  "key25": "EErTG5D8Pf7LTJaGgEQHVoyngi1J5SUvL2Rtc6PR8b35EFFQomxaULb1dj96YytzWVUYvV1gEoKcC4p8oKWVvzu",
  "key26": "4EJyxHbUaNCw4dgSWxQrcnfepzGAq3fHzWGR2jkut7EVzu64sBRhDmPPugE3HbuUyfSZmuP5pFyzFZJ2GrsLPrFs",
  "key27": "2MzxTj8od292bmLXqcaCGtwtuvGpFXTuauKBdVGjDrvoSrzhB1HMbxtsVygZwJqfHorUebCRu7d9F8j1gdR6rrEU",
  "key28": "3ub6RrRs8dgDodBpYT7DFG7qCFcCPCy5McWJppPWC7TiWR9d29onUjv22GyxkTmpsWnQghyRT8Wc5nhkcM5B86oi",
  "key29": "2P84Q9d5RH8wUvs8SaJNsNEnPQDhBJHNp8o95QWSCwhk91KRFPF4GuQLjgbK5L6AfDcbww8qeDMcRDVzKdzBJPWV",
  "key30": "2sFYNWeuC3VDMRkohVEZjpxZTPQignVadqXYkyDP2YyXSCq7q6vkmEs5eiaXBH1YCcVkTdfq1HybnpBQRcXzB2VU",
  "key31": "4Ho5e7XVZyG6NhFTywdBE7i3h5RbGzmw4baZeumkLJEAfEfNU8G99bE9Q4nrKFEMLnqynF8GmkzDGo49NJaoVzLB",
  "key32": "3FfhoDVbHfZ4b8YnHomysroEosomhDuDvXa6uuMhVRuuFos1n19PDzbTg1KVB4fkqQsbFpwwdZSRo3EWpyTcU3SY",
  "key33": "bhFjasJiQrk83npDtBmko5My2Rp9PB2U8cbErYedsqXGyskR2M7H9845FXi1ekr2SdcLiVqRYq7RDMPW6Yri61N",
  "key34": "4Zt9RiNY63ttc9fCVVbkrwsjVSFRu4hZp1H41ETBo6ETDRtCFv4hnoUXpbngP43386wFsbEJ7dLySGaqUx6ucnZu",
  "key35": "5WhQ5XymPVhCPjK5PSTfTCkfWaG9JUKNDgWxoJeXqVnQm7wcvgri26cMuS2GHbfnFueqcrTSdn8irBwonnuRY6fW",
  "key36": "qq2ihWwH9FaAWF1Ke5SAWpZPxnheBA4GChKF3tCYM5r2amDjxVbhzDBm77L1F6Y8LBc8qkqwTbXLanwL8CwyEex",
  "key37": "2rR5L6AZidiPynJ3fssLw1fvXy53KFMSb6K3woiPkMcC8Q855dBKebD5qRT5u8d1UCriJ46cdBihYLT4JN2gkDhr",
  "key38": "5UD2fkBpDAhCPmqWCSqCZomtU4PtmkzYT3JVidFS3uFgNCW3T7Wf2oreb27TuikY2qdrRALYyVAvNnnp9GKwon5h",
  "key39": "cnzwt4u4HREpi4iKiRvHA1zpKx9ZLURbVjqPanVUCtgJcRXaPD1148Ddww2VNZGQH3QAAUzzfAh2xkvbo3yUQ3j"
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
