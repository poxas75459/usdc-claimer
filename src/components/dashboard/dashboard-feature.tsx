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
    "4NrJUeP7SAnyceSW3MrY66MUmQsYuovmj3qoZ3QL4YaobpP5CTKNTDeV7BxXrN679criu9hZR54bFwzWuh43ZLBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tR6ftkFXaKyQFR8EASBijuGET1SZKGTJ5ycNNDaDk2zK7R2RsywSprhJyh6pawshDzYTF6WzP6nhuG3qQJurQ4e",
  "key1": "4r9TxYtXAd92ijLGnkXBLiiXt9iXLJtofj4VLpsHaZ2VU4MMMahRCeJLcUCMNJ2Ba719dUviz3EGWtCoHHbe3dqv",
  "key2": "5Vx1YsJHWyb4UTGDxXXTCo3F2MNnP6gHcWtBE36zvPARU6djT2G5vEF1tyEqUAeqDBAM9usY7JxyxBPnKnusvsuw",
  "key3": "QL1aJ6f4QCXNNs8Fvxfbb227pLrgMzuyi1NF62NEPr8Rzxjjwat2sV7yi3Y1ZK13eom7ycxDAadCZhibdvVYWPG",
  "key4": "2fn6rxjVVxqBVRy9fgfEAgmWa2sJP7ycvBNnw8wAGFYJrhsbmvYMmxv2HwbvGHDb6eAjG1fYuPR25uX8QCkdAet2",
  "key5": "3jfKdKMd5DkfvUozVf45GUeT6sYz3C4wQ3ZpSNx4KQ3iMhoBTWcx42dRm3UnbwS7fFWTX8eXHAgdfpYrVYf1fFFj",
  "key6": "57JYwcZsWA1Qg2L5bxrZRL9Bw9YbBhrvsxmd5hUijDqGYJCiNpPSMFeLe9ZnQEmSkeKLTV3XaKZ8c1WFjfFRVGhd",
  "key7": "29T2uNU4FbTgjfcwjM4SKpqftJrd4Dzp16e2g9LojzxkAiKUfoxeqEqHoNYFZbKN5WKHEXMuxVdLyDoYuRPxgc6m",
  "key8": "PNAqN7bW8RFT1LxHk5yN8QJKSfqQgP9JmYuiM15KAMreK3QRT9DXkGCQH7NzTjr7DH7YoEJg635QPqizRh2Jnm5",
  "key9": "2K2KmutLgDzhfe1BGQuyu8kQ6QuKCbSeLnHqDPSeTdefoD76nvb1VaNrNzY4pa5nWPGJx26WpSYCeWBkn5G3tJ4",
  "key10": "3q2HjXGz7i6gDMGKsn1nCe1qALcT5qLJKsSaBhiSPGrdicDE6pwxocwgWMEBiX1jhgJSAxPcDFvrD8ngL7zB7mXD",
  "key11": "NYg9L4sYvz1KqvhLx9v2YyHwKYxknS59AJZWvYEj4GEWEFiBwZZiUTXKSZDG6HVb9EprnqUd1PSn5owWwpWkLnJ",
  "key12": "XeCDjpyhZ8tbo6T9SMuXHvzJuLcNHK8dMonxWSRs3SZZez2g5yr2u6huDt16RA4xadkiLhSaqCP9fTPcm9ZsRkg",
  "key13": "5tKDbDbg8ZssczLKam9cSU38HsXbtFLHZ7MfnL4yDS5tKTGtBgBoBnNxCHbBE6BUS21gJQKubcatbXMcyKdVZv8d",
  "key14": "4vyayF8EEivrFGXBVQjbTEr5eNS6W5b1jT9MNhCctSd4SYtEbv2oTeRxqBn1GqNVEEHqRUVTRPgnyXymJSwRX9Uz",
  "key15": "3qbNC7MN7fxXuJ2Dzyus9cfWmpULtme8qAYXVyJFKBAyNuArz1YgGrVrHZcQoY7KUCavWcovED3UT3jUdXCkFHVb",
  "key16": "RJMNf2SW5bPxLxpVnv6axfro8MKs66rV6CtXVpuRfWgw5wcpzh49g5hhcd5WuBd9LKTyaxd8R1Y1JaUhKsQ7rd5",
  "key17": "2p89J9279kYRCXrudsoxmbQeynDWvN7HunACPeUwMgpqUXPNssJtDa9fowbqi94iLBSKetdCqTmqs3pnNxLgoS7r",
  "key18": "5RQg713KQqYGYE9SvExzexJvxNuG8AwP6pTFx28W5P6Fo5aXn5Un4LsmmPmBnSTfj3fBhCgw3f8KRF1KAXuM85Tw",
  "key19": "2N3Ey7V3BBdzZmYNRX4DGnCXbZgWn4B9WdnmvoSeaL7epeddz7Uu37Z2iWux2wDQoAdHQJW6vVaH6124L2Njr5Sh",
  "key20": "7nzNt3vbGxvZM7fiKdoFb7Xib6rWa9xwEvNCZbxkUX6fAJ3B9uKT9KgPx9z2LuDDhWVj4vpTbm5C9E2mdd2oKmd",
  "key21": "3VMG7NMDeEJxpaSZ8aH4CJpKcHqE62asVUD8xBRrNaL7jCc9Vdb4rbjeDLKnMUM3kXQax6Mnyc6RFG9SHYYuGX8x",
  "key22": "jxWzez7nuA2KcJn2G4DaXHNdDtuZwXbaMpeyCQHr7vTVsqZe6tWSzP9pwEtgss3D66T1uAPx5bdABMpkrjnAfVi",
  "key23": "3eH23GBfsukpvVgED7tfLZAhu2wAMhgHxeixoZBmB5Vqwkw1zadT6p3UAgDoKxj45bBP8KZhZoU8G2PPkKYKPXBe",
  "key24": "4bCBxeyS2PNhRf9hAMRVGkwCs6LtxDH8UuHffec2vbSVVgfV1CJJJXVESnYABym2owKtG1b2j7XgZPPbH6eLRs2k",
  "key25": "4MNa1atCTXuuuQiFVjQob5CC6rjxpJAPYvUCEicb5AxoZQCCkvHVZmPpEUZ2VKqspjNyPZbu7ScDRWVg3YRebGGD",
  "key26": "mnabHvsY3YGbpgBqjUvdRaRfwzwpEKwWWhxuijSdVggdw2LHKy5XU3WD9bTTe8eDazFK6NAEVqYZvrb3YAJSPNH",
  "key27": "sYzLMc9HbcBmgRqZfmwxYmiDaLcouL8vbUZvTHhgorbDCgDsnQgj8BBv7mXx264v7pjoSissRDusaeaSgxKXi5E",
  "key28": "bDrZUBh1uERb45sZaJJhdGXFppTYGvUJo256BxNz2WrLfnjZh9P7biTbyb34MaV2ysqrjXPUJbVYGHgnLkdD1PE"
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
