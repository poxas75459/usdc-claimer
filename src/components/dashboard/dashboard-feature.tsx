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
    "4w6YiwyHEDCAWZhYXNMhmr6se2gavLANg5gZGSiZMbd8LQKF2fmwLenzchVsE2s2NVhVuzmicyy6iBm6tZ3UMiZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8sWEaUdKHTv5azJmY2VCkHkxx1J996FHubpXQhByJNK4DZoQvWgsuxiiR1Mm5zuv3Q3Y7ghGDZJ2bUMZPSeMbY",
  "key1": "2atJyfLNmtbbm4xe3hcFvKA1h5jxFFFdNLZ8PFxd3Ta7GMRKgy3s3bF3hkW4QBcH7SyD3JVQw4bF7CySxQ7wKJiW",
  "key2": "217pA5aqj5KL84b7waAEp4jnzJN4yWxC4XmMtEXsztXoyF2wAc9AdTPAapnvBrgoiCDX3SHuqX7hqk1gg74v4U1C",
  "key3": "4DowSiL7q7Heo1Syg826sZAaDVpoBbc7BcMbiZC3Wge7mP755iTTkCrQcEYJXpjEuvpVvdVpDbEqokM6tCbfn6nU",
  "key4": "2Yz2iDeBceJA1JvdYwz4ZFCo4Rsiz1KvNAsrgNtAicfWsVFWDPqRixRKqrBXhtcAzHGft1wzbJnKEz6ng2DoM3zk",
  "key5": "626i3gTAm9Mamq8zZASKHEJke4oCbwiPG7yHaHSzmk5WKSkM9amhwKveWmTBTbVZuTx2HFGR35zhnU8jhn14tboh",
  "key6": "48PjxDqjmThFMQLtMo4ZMFeFGUTLKjiETGh7vyhJZwLZRG1i7CbDA5NPXPo7ot6rHMQD8hBFZJ6DDXJ4h2g9UqHe",
  "key7": "3ampRTd2ensExktuw3tHLnuVraSQxFNX8eynBqSCb18mCxTAZp9LZQ2vNRo2XKMDd84noj8VYVy6UVagArq9ZzY8",
  "key8": "ehXr1vRc315t3eFVam27iQ1SA4WCS2QuYiifvhnDxwWgsmAygxsRM3f8x33haZzjuBC6HPDwC4r5rHt6KAS5B7A",
  "key9": "5pJJicnZo9MDiqqo2WAxuaajA7mUQBd2HAaxkmy4WunmWVL5DvBXW3PMecJV7CnP6LSj2A6EHVciRnMLXVwU4Abd",
  "key10": "4dTvV7xJsoLV5aiU3Q81S1nEojiPMstf9xv4HZSBQNLdAFU6GUjwYHV8eY9qXJT1Mh1oF42SsZJywY98ysRCFMh5",
  "key11": "559GQCow2jLSjHYg9gF17JbngS4aRKtX8BC3PU77y8tDfYDXHc9rf5JHVnjAuVQGGMhHocCg5qbrvUt13a1VxJbd",
  "key12": "5pj5jaxaXvUg1au9KMhXTRduDhqKeVxn8xCJoJUqKYoN8HXoHPKgW9Ae81VyCR4eBQJHA7cZwyupHon1YaKbhjuQ",
  "key13": "2eLsk93NqV8cAYGMbwqCgjvAevMZGtmjXUgRp3jLZxZ8jk4SnAxj5N8wvrqK9RdXSWAitNTN7uG6w7haYTUmCtSm",
  "key14": "3YUR265UfJqkzscECS1yJnzapZzVLuawXs79rmT1CMfQZkJ6st1Q8qRjJushK67PJa4rmkTRKVmpAeXp3c3agu5G",
  "key15": "57J7Bd5UzmWrRW511FCrs2RNs296Ypo1Hci3M6VrNSaHr8QCkA9iQ7RCJNcjqXuzQ8GMxW3RnUvngUYiSipN84CB",
  "key16": "5kQxqD2Fjtf62g5gGcYQJobHZxyBPo5ykQ7FxVKu8DWEY7YMLgpTWnDb1PVQX6mpbFmmGJkoF9ZC1Nrv4zpco8rb",
  "key17": "5yugjLWdpWCEKsXVqNtMG9x6u7T9kGW9Vg1aSk4XMhGpcfxdgopAdofSsinAQNmh9wDzXVy8mNtQXpkLJiuFE7AN",
  "key18": "2gbi74KRvbWt1LH13AxxR2KkKaQ3nQX4AN9JeTLkwmTDCu1suiSQF9Rm33Pq1ZdHychidWRSB6om3EDwfTQkmarZ",
  "key19": "5h5tKvMz2yZnpqGYdGjXW714TP3ayCtL8fB89MCtatqhiCrGQwXETD4aJ6YNFdQf3KgEdtrG7ZvkW3pKssCibo2d",
  "key20": "s2mrrxW5L6xSgb1fYnxzye9hfbrWF1uoufn8x8uSMY8FHJnTXcpuzHNnves1G9QSTjfbVwqR8RTfWwpFPLGKgtf",
  "key21": "2Zhu4HuM3MZkrH7dnYLGnTTxreGmaXaK9sbCDhFKrBiNXV1bvFDq7uvJG9UEE9vJmheMusaF8PoT7HafVRzGjTYm",
  "key22": "5Q4epJvFRC2fLY7eXPkum3y3GwXUHutJhP45oRFeaGse2zzC4yAsP6EheJMa2SovF3zmLQE5DQC7MR6ky3Bkh5MW",
  "key23": "2JhewE8L24TErGFzLYka6iNRsQZ9fE1QyMj57bz3ks3CGr5AHFH85hLUG1Go46FmHHmg4dD1TxY2SZpHq1BPsxyJ",
  "key24": "57zpfHdUPZh2fVsvXud3yHEWP4r2LHruuq1DED8HWFf6RerLrv9d6zQMf1fsGSTL6MvWEvh6xVU1Wb97XuNMbivh",
  "key25": "2Xh8EJEMhGSFJrGRVzcAXYsxTrsfQpoaho7RcnX9inkVtMZh5S6ugGp77erLaWNEovxRLqwiZjF95ovUxxf3kUSi",
  "key26": "hdFjHeMETCmHF1vYJxVnvtHhGML3C5tFdL4m5Zyu3UmMCQkf6RXizRK1bASA1GL2BVxkHwwNFh3iGQY8Kdj2TA4",
  "key27": "3zoMcBKabjgPcD222CxP5rFwWDyuMGtTPDrRDxPYmsXaUYS4BEbmmqgBU75eaNmDWuFnYkqfD3s8GW86yMtnNfKY",
  "key28": "5gJ9bP9UArgfCvjC3ZZVZXRxVU6Lw1gXw2gPngrYZ6ovsuJ7m9QQJtTVrEy35zrHnDns2aESNf9pZ2JpbcSGi6EW",
  "key29": "5rKotQA75Q7pctnKTzBV86b9FKopoNaAdaFGNWTkjPqcnvznvxY6skQcbNNsm4vkamqmgiPJjoaqMdVjeiSxfPxG",
  "key30": "3yxcj5J2cVvUcnvopVweuBosjbtnJLZ8ZLcLkDZfsFKJU4Bn3maad2aweKe7jn5yRbTwU9fg6JNoQKpo8KWsRh2N",
  "key31": "2A78gnnXhnSAFht1EPqX6otkiYbyMjj7jeydFiK74hyPnMPwpg7ivdGpTsSUkBuW3mmtDnY8Q3SbbR6kLBP1zPx7",
  "key32": "3AfjVCCgvX2JeDCXMAB8yDAtmcevivGw54ZeD2rC2SB1aodYcakdaGcrD9HGZoMWqEn4baNhv8dPbGgKvpQsMeHX",
  "key33": "38WoW9enFEMuZTXjSyaRpJXemyuqvaTL33bZFCmMs7kzQ1jHp7oDGybbxxkEvwfU2Umpkgd3UWYyhLJPmfEmBBkU",
  "key34": "5ixf6Yv6KoUJ84hA4LoGFXBc29dCHKASWdC8aoNCw1DUweqFGbpYzFPLH9yuJCNbomCwDyaFPkh75C7hNqBxzdfZ",
  "key35": "38vapfnaSrrHpLtg8sZcT1xYVp8vVwV4YAyRaHFStawajCTe5BM8Jnyw3obZBahmSBS6cv7JD2z7gGMv22zQQSZe",
  "key36": "MK2BXQiAiq7WiviwNhNoUGyNdYitg3kHWF5795cyGaf2QWBUh7G2BdANTxhr772dHe4XEqaxvEEfAd4VkBraaYL",
  "key37": "3sEjbPin3KuNb8FowDbkAkqad5vUoRZpZLTqN8pzKzHDdYB8gLyo8nWeNh7sU69nAbLp3hUBiRHehhaCJYQA5ReU",
  "key38": "2TReEjifgaiHJdX2M7CKs6Ghd1WRHk6tc7Ya9M9C2rzX5Rvea86H79XDxiQe8yAopbr9frnTJE334646CexuVxJs",
  "key39": "3f9aphRR5CCW1KECF1kpQXWVvsvFb8hEktuPJY4MHmzP2nUSccEUZXPqfBiYXmy1QJBabgpqNS6dbyqNpqi2oNh2",
  "key40": "38SyBQreUfCKVrZY4xFZ4QtjbYM1YAk2r4EFhYcDu33W3T5tZT9L6mfAKz4JConxaH4WPm6UmJGbSV5HefkVUD15",
  "key41": "39gtWzX2wzGNK5BeETkM64fCpcQDiZ4c9dVDVqyRrsyFgJA4dBowhDsiB13z7X98aQjZetA6uBrHu8G22Koho9xk",
  "key42": "3wzLbPNazwXt7eAtUn9sUQJkjZQks7SW8dnEWak6UVgEZ7jTa919UJxwLhgQ17mX7rMWPjRGyPD5C5endm7EKuWK",
  "key43": "PFtQnHrAzmTLTDyWWL8B4gqwUpxn9t2ycmFanjaq2ushedjGvRvUSTsEAixoAP4ux5S4LrPbdd4jVwFw3cAUjEu",
  "key44": "4LjGuKVvViWbH3RV3wXCXwch3Co2HjM4daw323RM7PHVWJrY9X7XHR8YjtUegkhMSAhtxWuh2diFdkbgbe6Qtyer",
  "key45": "51pubYz4fQQei7ZqpixCdFLjLQZ682egdn4qu7m9C9BFQKtuv9jhDfJc4htVLZ8czFHGu2HsUR5hmCYZ8JkgS2fY",
  "key46": "K8dPp5sioYNj5iD6bUAEq8MaN5vxrTQ7Z9ppChHBcMBPXrG1G8RzcgEYk7Z7btkozSe96CP7Hb2iZNdjA6bkqkZ"
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
