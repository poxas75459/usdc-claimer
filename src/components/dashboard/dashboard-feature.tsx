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
    "56gUfoqwVuKYpAqUWUqDQF5dYcGNywghKyC2fGfQ9SjjNnreCZxcgUPhUGSDfZZuCdjuim5av1rEgJMyrqYdNwAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "huo1Qgph7imJBCnKQYXZZnL5RPhtyh5UfP2f9daH6XG5R4D2XMKKd4zHrXJQpTidmS8u5XDpWx9HBDuKcFy1cRg",
  "key1": "5h2Sdp8osqgeb1UXhd8JkGcfcpbK1RvxoUrodgHwRVYnxRTFRFBNjSF8AfFDRkG7zMKyMJUDiA3eeJi2pxjaY3Aa",
  "key2": "49xqysyvEdSfLA8NfqzmbgY8GrCxTZ1a7SSQamtCvQerHMHpwiF39oQgSWw61MXctH1MdzUiWgweTNUSpVeU76iY",
  "key3": "2AFk9NdCSgcgyhrkLojXs6Faxrjddo868iPT8mdjutG67MEuMb5b8V4cuPWYEQyK3pqxpudvNx5xc9ja7p6nd3SU",
  "key4": "63jU2XW3crWCkdo2wiBvuq1JP7o8heNrNvx4TXQqqnRPapg7yQMYJhA9U4pjjpCuVJbK3qJowwa1xdvWZEzLDCFS",
  "key5": "3LVn9QZvBn6m9J6o8EHZrcRZLTCtjXpwA7WM46n2DyrXLYZ5wiSYUWsTsNuLxgRkAQabZJ1ncPJeiUnUSS8Hetei",
  "key6": "4TomXi5oiGUYXn9hwp6T2abaTd5QS1HJ3Bx1BnvDnmT8JuXRihD28Ts8S887zHgsTQmieaqrzo5RSSzuMLWBejLi",
  "key7": "iCeykHLhT83xAYvyEf5w8MkxPNgAhtBKjU93KC1BSLJZpgv2CwsT4HM9hEKN9ciYSeb7x593WcCqqAyXZxPujw4",
  "key8": "4ef6faZkSem7Vco8BsB9a7jtwAvD4oa9tQZYxpYufTzCGbqLtmudzGPjL59GahBmEWRsrrBHuQasLaTTogePrQRk",
  "key9": "4PeeMZCcZz3d3YPeq7FFkB6Yv5UY8xvAn3J2gTCppWQfXFbJKSQVBvxY9CiV9nQcMNq5y3eLhXBDetMaoDua1NZu",
  "key10": "2h3uqz6nNcnWvf7YJDHxb5uAbRydJZjgCWu1uyPgPZbo6oDuhhscQrnAR5rYfVs9TYq24dXxoSSLivguwDBXn4Ka",
  "key11": "26Yeei5H2EaCRPKFgJfk1Dy7qw1C3TMS4W8EBHYseaX78SGjS6n4L4XsypNqfqohfPjuAZJYBTGAEeyWDXEhpxGq",
  "key12": "5pdECqyHWSAAYSdZFkxfYSs1LDsrckExjSMJztCGEYsySSXthJGrRtkXpQKYezizKGoyjky7PUFz2SoYmYBUbWUW",
  "key13": "25CW38vtgHDEPs654W2qNQyEMjVBvvRNvCjhPKJpaXub33tXzmLxEU2oCtvZs9gPA8mzPHg4uGnJSwgSoFzWWYie",
  "key14": "5645EuJDWSzXLtqLdT9qATvzXFXws1uyDgnE66GWtsrMd1FBGEuAjppznxpct59Mi1fbAbyaTfnfjnd4bnnAGzbi",
  "key15": "5KeY3XqxXpDe1Ata8822TkedVtyQX4vwKfdwGJa2rrA1cZ6GxkSR2qW8JzfGWTG9c7miTkkoGMkuUzWDKWiW89Wc",
  "key16": "29VBBUNhVwWnUHVSk8zjQUadHGDh5MTgiEa26RjQMDtbqd9kQMraKSNXP8QR5Z6YQZtwHZyxwh2NGzDMnBRMeHPW",
  "key17": "nbcQNqkgnhWLM3fbfmYrVTQgosQ34LVwSZtwKhA2ixDZMbhKTsCmtVrYf1hJ76M72jQmHvC6v7RDAJ3dQqEWpnz",
  "key18": "48H9u9V1XkJwC2ms3zNEBTPXULWQgc2kvvqoHwfiKSLKS2kKLGhFj6Ti84f7BXwjr83JXaFukvH8dKAEBT62S4za",
  "key19": "2zZT6XrYGZiXZSxaoJk5qnhRz7pWu3EmqnhsvbLCkoFD276gQo9kFKvjWVa15zim3XN8gLc2bmwt8VnthzgKwchQ",
  "key20": "TvbVhtqcKxzZmBUUcKNEBe328wJsvqyT4uXfyxAVMLRFNfhfZAHTk7GzyPpbm1eJB6jYkk5VTvRtRjCMcXeu4M7",
  "key21": "55TDMXse8eCNqtP2CPHeSRfzHquUjqH8UvkbQSrtd8t8mosz714QcdaDv4WAZdtLH2ZdmaaCpL2L5rBsBikjEvu4",
  "key22": "vysis1FJzBgUFEVCj7tCknepETWYdZ8znfsgbM35NGxEL2RkXJzu96wwsNGtVUbHB7bgsEAj2e7cT3yEAj3mTnp",
  "key23": "zjsPW2AgGCywdRYxfMkwqgZJ5o4xmcpxYN1Znx4UM1BKWcq64cgJ7tUJ7JHME1KKErNZmFEYUgYjPKGzGgHeUnG",
  "key24": "55G47zqARwdzRBZUow3Ks2tES7wc2M8oGyUUEYpbXBYonnu8Ma1yECZAn2N6vToRkfkqGNhPX9wJPjL2Gr2EWGa1",
  "key25": "51bPprDPfoxXAs5HY9mnkodTLx5mhGLmRrsYYc1fpu8iquc82anZnUs5JFbQFdZjLmcH1FUugd5BBb53QJ29Dyro",
  "key26": "61va3uArEuF7LsaAfGdWf5Vu5V9aokKEaB2gobzDiC5nMnkW7MSyms8M2JSnWbWKi4XFHYJMMvFFZZK2J8M3dFHx",
  "key27": "2dEDtmK1xaX9XqAk8hw5q4zznLdbHku7PHXf76mf5vpcSt6w2k4CgRUJJcP7dbHVSbK2RnHcdx4Z8zpBkCHg6uTS",
  "key28": "4GsjQtuP3wEzfQjo4LRskRL4f33tFt1NP5ieQGvYSAa4rqQ249AVDbQTwx6RCtaEPtt6K1e9ERSpt3s7w6mmdcRE",
  "key29": "33UVFo6DF6wT9SwFfPgPbPLD9CTZNam11kt5qbHCXxLZoWCBChx2fanabq7vxrDd8NDPdNWtmNFfuvoor1K1kaZt",
  "key30": "2A64GJz75dzGcLMV6UAz5kqYCNd62m3ka5VVqKsrKFFdCv6WUAxxzSVUoxwqaa9GpvVHLsbexrfENxRNqQdqH983",
  "key31": "5ovgMgjguKany3UXMi6qCe4AXGMBKW5VNuTSv5zKDEM127mHFiLR9XWP2aH2S11gNSaNYhcoc7LrnHuuhYfncrZk",
  "key32": "3gBVpvEm9U5GoRGRsrVpxMceRqPBuzjxDgqPoYvPP5dKQBuZe1mzve69E4978RhWW5bpU9KgZWXm1F9a67eiithb",
  "key33": "52kEsp716x38YdfiS9kTbMs4JWYsv5AHvTKWt4aaFPTuFAupB2PaQpVgnAypNevwSKv7AqnYEjDyMPj597FVfaB2",
  "key34": "hSAnRMUbseFk8MGTu9bPcxvwPS6TxQwDk2RN3w3Kh8WVcYxXNSRNv8P6yA3fQconJFjwBVNq2BrHpPcQi5oM7p9",
  "key35": "D1MmfBkV5XbQKLoFcHAEuupsUt2dWiNSUdAiYKpCGneeakD4APv11w42NwQdve5ShFRE4ns4XHZ8Ayd2sX4vFaP",
  "key36": "rixscaDZwtWq194qWPdFcNWn6LvW1CssxZqDWR2GLf2gTvph3zyvWGFw4xBovW7rsDAX1LsgLjDnfQTGSGLrDyy",
  "key37": "5aj2w4WF2G9tpefq65cAyAAf1cKxR6evhDJBasdBW227kX6df6tzCqRrzkk9e4gCYJYcQkY6YiVdYa9mHkczJViK",
  "key38": "42JmMF5hhCdwjuuLeMXtEZWdxqLUCdUwfuZiw1sDvXtvrpVFKXAEQWiFJxYFoZKX89wBqueJiYQ9GbiZCU52FTP2",
  "key39": "5kwUgHErBLGUMV3NYJS2nTNXbFU5sMtYT5DSpk4xPiu9vmK5TA5geQpcJWvooBRgoF76MnvAj9tfAGNbrJWUfFww",
  "key40": "Fu3LHAdUvBwTfpY1hCkZ4ehWh5sXgXDi5gcmuMVxautb5J3Q3edwKc4rvQPRU5rpnw2B8B1rtcHEgyTt6qyGjr6"
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
