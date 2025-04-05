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
    "43eMZQ7ZkoaFzb2LYCuDjonLA97eLUxZP2TScshEXs9GpyD1v94cii1CCzbtosSauUFZ7NusaERym8bAFtP8BH6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJTccN8EU3VofdBWzC94dTAASprMN4TzeJGmstGdj7h7nG9HZVitA3QxLAH28yQx1Hmw2qWe36UYgkYaJmzFk1B",
  "key1": "5SQnWGdbaWs6PPnccr4fS7jqSNtM49vPwAaUosAmU9X3Gv4ZtoFfpikhusuhQW42shnx69SmiVP5HxKcnmpEEuGY",
  "key2": "43StWJozviM4EVx4HwG4VLbksYjjK4wN6tG37KWZ23tx1DcLKWe8d6ise5r8MCjRUKP2kj33Ufso2hSic6iRTPU3",
  "key3": "2RkYTDLtrEb813izuaAzbwYvxRoa1iCDQJPpAVkHDsBSUZkUj8sHpqvoN15HcJXSJ4pvNxdxyvUYzR9s83VWpLXK",
  "key4": "32AxBBbEyFsGso9TqmpX32ingurDqo5oA4DXAyiAufPpeV7sKq1mE9mdzZXHJL4GTfTRPbRLcBu1F2dsYQpPpeEM",
  "key5": "2VC7rYGReW37wi4b675JoNnhy58KxrPzyGHAWUK2EBNNq6h5xn7EteB4TVqCgoMJJnqVq2FtHMHtz48aoNgGxwmQ",
  "key6": "rVy87KaFvCPRGCu1MPy6FWu1uwG6bpkUxAntbTWYj2HyCLYtrui27328RaFqREMh5kgPXMpeMJPwUB5Hxr8HxBo",
  "key7": "5frA7hGYo9X2cztTpDpykp7ragcxS75cinqsxe697SjhmiYQHdJ9nLkhSqgciz4GMdXBVGMZiNVUMUQjmZRMKHaZ",
  "key8": "3NUrfUEvFcXWnmP8hRgvUx3CRcmTsVyRYXJpCHdTHJw53ncz92ujrkzZpJndsuhSwB2WzFA2zE2Agjuoj9PB65ow",
  "key9": "2TUs6nk1z1QjnFu4KVaYAPBAMmNgPQhkgNbCxvpCfCgTvBSNnLHJ1ah3iKCDKBAmNHsFsr39shDga9Uaa4RjD62z",
  "key10": "qyAcfDfZ3v3aWurTtHXkATEKjNFEJfR7qzT6UFjvZsDq8wg9SL7HgLGdHFVerWhWGGNd6U8geNkNQCzMPuv2skN",
  "key11": "51AsZ3pSorC1FiuQ7sFeYX3W4nzpTsdKw2jpXcHTDqVdxtMfsnBvgoZ9YqFH4of5J6yJREFyE5RfjspuA8mS9P9t",
  "key12": "JpAbHv7TktKW43cuj5LzQGdCFzPVjpHUb1KdYCEHLN5TuDc5G12fc3TLvEEANpgUSAm2GBtbviXb6BQ5NgwyQ1e",
  "key13": "49nofuM23FSBXv1Zw3se5tVBAYD1bP4iUdNgUkrtyf3BhtzjXcgQxNphWWktQhMRPpzp2JtZcqXNihJ76z4VSbJW",
  "key14": "4bvddvhDkks6JT2JSuZXs5fVLUfaejCRoVgTUvCD6wyAS7QJbvr3WVU9fBoo5SMpdUfPKDwbVtiv913AEUes7WvS",
  "key15": "eoywDQe4Pg5uJqBHqPsdDCoxii22C4yAij7wKcJbcMSNpp96ZGkQxviBbp2kdb9roSN99Y9L6zGwnXiXNd7y581",
  "key16": "2if49TfvqFG8Yff6X1CC89UtLSRAa2TMr4gDHz6dxFi3VJb1CAqH1QmT4uktWfiVJnf8VxoQ9NJEmZCmH6CPXfbE",
  "key17": "2H5husWYbf8u8o8bWFTTmau5m2HJ4G4Wwf6LQ2XfZrp6o6SKvz8TGkdhYUSGdLjUuWyKNVxjFZbuqgY7yby8eDPh",
  "key18": "5VaKLxnTpyqcq5GmnF16zaYeM944gGii9sdEWXn8s7jSBvrCiQwcLkzXxJtv8hcQGZCvgZGFjhdd3HpYZpw1m168",
  "key19": "5ttTm28Do4qVfuC2NmhcnGTmWr8B3RY8U66th7NSbGUqcDRFh1JX9DVbTrBQCcx6gTpsCzqbhnjtnqyyxxDHWoRX",
  "key20": "43XpMD1megKn7koT6KzT62H2Ky6HnhmhkgxZocUBLZXKXSiUaU1qkoQLv7pmSSUXRiMAoYpuDLQHXFWnax6yAuHN",
  "key21": "EB3gquAhPkZEKwbdTfMNL95CHLFvtx87yGYxB1TM6r6Vo7reqV15PKGjXY57XaYcPwteM9VtBLk13oTo5qm25fS",
  "key22": "4wna3yE98wvDiWXg9MaE3vx3jwnxseeGV9ZgaqhXztoH644sodAaJi9pF7Tetnz6tQ5rfDBFraQRpwkyrBYi83SM",
  "key23": "51seXNXbdNPxnvpqoudve6etYTEtTygLBH7HLzvfeEig2YYuGhTfchxPizAPU7NDUCajFkZ5qPGHbwQz4294Bj7U",
  "key24": "5uyZ9PZvCoDvzPXxo4Zm1EFb9XSHnRsFeckG3b613gkqi2GmzEnnmLkLG1gyR2QdfnwhLH1eUPz2QTuvm6SFhBcF",
  "key25": "hPCjvQoPtREWd1ecjXRMrvnRqEETaQCXwssTb2Uu22XjeYxA9dLKR5tfkZ4n8XozBQ6i5pxdBWryXTyhAeyJzLU",
  "key26": "3CgTk8XRRVHXA6PPAmKYhgjwVMkUQ34m2H3jimajei1FW6htyZQwQCJCYW7zSasfKMY8AqbrA2zrHGQjcxgnvVWx",
  "key27": "4TPpWHNieA1rvyY2PRX3AdyGsQ26S9NKZYXzR3qVJ16zJJkwXTyich988QE3xBUxeYaX4NxptnZhSDdcVrd1zGdx",
  "key28": "2FdfpifioiK2tMghd2eBDCnfrHBYWo3JBKy2qGMNwtTVXjwoqvnC3H7e6EVPTVZ2JNkMWXaeu4bfwyuoc4nNUyP",
  "key29": "5E6kTKKthihygodofKXcfouFUtCYWQCDmJd2dDERiXdAGBmRNKdXt66tUL3V2RKv5YYYqFFmrEX4z4HdmEJS1PaZ",
  "key30": "MHmhCVUTYTqeQEbFkZLsaYRvTNY5zph3MeUYW65SsU1iswiypRWAhTb9uEWsxdRAFGFt7bJFeZrTBMscfq49N3f",
  "key31": "5THWmaB3wzVUS2Ui5UfZNeppN45utTkCb5FK8FSeQaGowbWf6ZQH1Co5BtyXxsGgDcRnUGM9ufkMvkFXc7nMsaqm",
  "key32": "67dfbLujJdtuCKErNjQ5eWJy1RJWQ7jPD76Nnyic79iazjWph4QiDoTZ2J9aMZ4Th171xFAhAbrXrU3NtmWn47NG"
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
