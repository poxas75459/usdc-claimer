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
    "375CS56rqfVeo8cwStkmMHxdAURU3UDFHVcuDZD8r9XH9LXxzwWPff9vh2bJBN8Nsi2QoviTREFUx6k4kJ2sgxgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29T45TMfzxAH7y2ykm1ouijYqcehcqJwGG8cPDTL698egHhmRdN5Zg3HQcHWB5tQaWEQiXbguDnbE7PPiXvizZi6",
  "key1": "34zEsLGMPZSmR7diyV9iTjV5sr9qensHYFxsU2RMyMXSPkSif2cEc7TwCyGA5wSt9pcHh1zKinUMdW4sa5HuvGYJ",
  "key2": "yuyzsEvx2Ez9wVfbbtH6keuHtQGcg9JXZyeGbbs9cKibNntbeKL7cudu6Eu1BEhBKf58rUonB9HkPw3TQrV5vXW",
  "key3": "2sKAdtyb9zzojZNf46BEDJ1URc6Lzw8U4NGBTA2HpiXg7u89x2u6ufSfw6DEj6tAs3guMyiC5qCFLYyKvZunLKih",
  "key4": "5Gv39w4N66eNgsjQYwvwnSTz4ufBSPbSRreCHHtdKZdQFJyxckzqxqWgCrHeXgKeT6rpBCxNby2F4Xp7vZjeh18B",
  "key5": "g37yNxtaQXfUng8qcUD4tNHubyNqN7fXYr6wu8gmerdAQYr3woVxzVpz9jKx8qdn9dBncRazZhWmE5SphstJbvK",
  "key6": "BwZ1oodeeqFimoBr6iaGvUF2pyhjsmBX5oWGLWjwuNXeiDfeErfSeHyadM4uezYVS25DaruKT1PbQmYZgXCRQJx",
  "key7": "3cRyXdEtCS8jdHFXY39Kg9PPSdX4MEnbL64KjNpeMceoMMYbTYo6og66WXVynnTKPjva3SWti9BNheXzY2y7Czm8",
  "key8": "2hDzEg4XwHwkb9C4Y7TAjJ6Hv6PuKxqwb97DyqnE1jorq9T6R1pqjVbVnpFakFD63kNPhoaiCCrZPgtrxsn1CDCd",
  "key9": "3VBmfufC7rBBu5Bq2fUk5e6Mko3oxDQrXGPpK8buyiqWkQpLtAZYvHa8tUQ1QzmYQAxGUEYDAnKTUpG1QRDgLRvv",
  "key10": "2pDi7sL8pBNJwV7PNhKxefqdodejSvCf75xKDGJk7nVDQqWuVoQVQq21MXNYznXE1DCXn7yLWC5XpP4bMmxxxH7U",
  "key11": "2i3DsJZFStNShjpdT9Tk5fnQD7DGKb1mvknxGiisbCY3T7yo8gaFQVT1PkASpxunTcNAgRpfv2PfmMEP39nur188",
  "key12": "3ScGTANdEK5cPQxnsayE42YuJVLMfk3vGbNuvmtEuxuUffAaQ2n3v1n6fsjHu3Qwm8ENBdqpdsySFzXJiMCTXdoU",
  "key13": "5kha7hbMaykiP6DXwRm1DgX46eemQxzXyLykwVob5bo8w2HYWm6nR79AMf52E9LC5QZawv7p27Ucn8Xewh9Ni778",
  "key14": "5h9KPXBNrHqcngXbvS2xm3JLUx5yeUnebkXWnAa7bF4GR3D5s8ED7VugE9uMozcdkHXvLqjoK6E5QWc7NX2kB4Dx",
  "key15": "67Dsvnrn2MnyaPcrU7aLE1EjUr2Qv8BzZAGGwsLLQvuXVjBtWo3sSodtJwZCQB9TnDgzHTAhiNbXenheVQQUCgof",
  "key16": "2NRCxwFodKWSRdbZkAa7xweAMN9sfpju9oZQpYFZ89F4ZxTKgkpwyMtVZ1yYET17PZfhdaLXp7T7RCLMRoSYRd4R",
  "key17": "5yxnLqpRjoPLKwKiYrwgjA4HM4q7RHE8JoVf9WMHEFaiSgUsNS3WNSxwxEEv5aUZMsc1CQxTwk2ixbfGKHsa13mS",
  "key18": "4XG7GBerYQK9EmzEedVfaTfEvEVkueAzzndYiTQDPE8FGH8n1Eqbo1EYHbcM7LMzzEStPViwV58K96PBKJak6Uxu",
  "key19": "3oVHCMED9KHUxPrdmPmyTdPRy5anRqosmLfAiercDNoNLoHbvBWK2mD4sumVxNLEMFwBd85LjJxJAa5yocrMs1e1",
  "key20": "2MxUGkehdC5sCEfLHrYsJrp1yi3WncCzJGzpq48NA5ZB1CpH8aKAFNHLaN4ssRfDMkPN2o88fTUAiczGNNWtDr7q",
  "key21": "4CA8BvWBe1vS7KjK39vsJb3rAZo99Qr3WBQBVgJdwiMTs2yLBKch9CH6dcMzkL2kLwwno1ozVZyxt3txsMmYDzXP",
  "key22": "8EmHJwL7FnZDRCbSDQyAkYuNEC56cX3GBDPA8GcATiGPnEsYRTDRmZ44JD69xdg5WX3TFL6LQGCQpz984QrJPW3",
  "key23": "3U7e72qHJ99Yz28VExb9zb4opGYrEU1bxN8XYQdoacRx58cLhHRfqi1MfVxqsZQeEMRxXckzs7K3dtLqBahEUqa6",
  "key24": "47ZYFxqbydrj6yJPzV4p8nRC1gQRzipMMegMrJoRVHeoAWxHJUQNpcAFkshJKmWdncKkG6qijbHH89DfL6Gidoo",
  "key25": "8gT72NrCU4o2gmW6EpXyKwgo7q5Y3H4NMcazW2iv7F1PjErC94hufarHif6Wr4yydXGeTWdvTZ6EAtx92BJM6o2",
  "key26": "2bshsTJJnNyMs4SxFYZTuzzuSfQ5ZxqX7YNo4A3GaVD6tREWU4oAmMu8SsCzZ45Hf3qdc6hF48uv9gq3dAb4R7da",
  "key27": "591fsJFYbFjMKB6CEREx2ZacTCHbEFLs2qTNwKXsJRYXBvd4MK2uGpCjopwWhsFymCCkQ2peFCeqJBj3svS934X5",
  "key28": "fV5Ktmqum1ZPqghzhpadEqn8QS5poURGwb6dNKkrATrrFQFp7rnn79qCL1jmfUknffDrAL8f1PPLW3BRxnzdu17",
  "key29": "7tcB3kvBH48KVtUH5jKyrgoCDoiWFp8kei8qba7nyTZVVcFXcP2io6csWfvfvK9uc6vbAMPBpd11dMv62TmE8pa",
  "key30": "4a5PiSrFkY1EF29so7zUHwX5YZ6g2NVwXMkTP1Xm5Auvm6hMAaJTMnfCj8hNCQ9yhAb3eC17hfoabVt6DPUpJDh3",
  "key31": "J7wCmtrdHEAHu5Vt8pFr2U8y34cZmvCSpP5yjdzWZqD9MMnYHTJcDvxe4qYbLkVqLaDLx8bCJKgxQsKtQikCZx6",
  "key32": "5ZEFpBfxWvi7ArdwSwy4HYdof1ahT2FL7b3ZszrsDvuW9uicfoYWNvz4o1bnHANUvzNhyaRonT4mtNvt1MVmUyPz",
  "key33": "3dMUBMHfaVSzx4uak5KtkkA16uPZF6YEwdUgBRgy72YAL5LZnXQUyptf9PFqMciZiMtZ9s46LJCe8yjS8PFMLbav",
  "key34": "2kVWy1gRft8iAxAvhpHfKRyX6W2NSp6T7JGf4kq5VQ5GzspS6U1GpQGFuk7xmvUdtMumGKQcUFCRRgRVbhJE5CcG",
  "key35": "2CiXzuZ4dFtEjS7bi2G6QYcGKe8jm8rTB2fGCGH3BYxdqr9ZRc149mRzaUFQDH473eXQwCGdjezziqAMmy5oxnrY",
  "key36": "3HzZyzV6sEw5991UBsnyRzoKFTFsbUinFVinUHQjoTKe1AkHfA4aMRE9D6dycVHjKfNzo1oGVXCT1iT9PeHSurNU",
  "key37": "3ed3pT8aEcLRD2QGDSWdKe2zpkxhPFTxvhxqUY56A466gywkLaeWAii7QCr3QRK4AA7MSPGy1Yo96jjhdvKXHaEj",
  "key38": "3URsNEpYatuhYWgGi8eqJpAhzJyGYJd6L2VcrFDY5j7hznCLxPuEqToKwZvTdcRoewVHaShYwMBfmJSvLEevuRU8",
  "key39": "3h7KK5ZGvHPfgFRHUDrWwrrhP8X1Z5rxoP2HfeHXCG7evoaqR7ELdwkQJTNNAXsWBSdHdLtZFP3L3GZF6EbPPi7K",
  "key40": "v2zQKfnYo4t5Mpwpnv7M3CHm64eoUd9MnrEBjBEJSRAK4zDK31xWEzaYZa225WcjQuvCue9WgQVAF2a1vNy13v7"
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
