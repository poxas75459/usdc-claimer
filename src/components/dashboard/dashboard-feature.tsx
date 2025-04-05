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
    "4yJiUefEzZb5MKuSUZUsF7VSttqGp35APWtbD5X62fzA5WcDo9sj5xuHVeSCi2VXmv8L9SqZ1Q1SCxxrdFa3jM9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CN4Lhc5rQ4dou6cjAipQ2x7geKMGYAQ4d6DdRSVgSDCXa7hnX7wLDPdSeAYCjpfHSLy7KNByyPLZ1CXgcsqKn3i",
  "key1": "5jwwNStKVEmhbNWwsRXw1mDCxBZULrCeYY7EC9HzHCAfn94xQ7QZFpoRWq7N3CvVbuwP512hUcznAgnmo2RhpgHc",
  "key2": "gbTu6yRScwAby7T9ESadT3NXzT7maQ3Umv3Y4pTGgEjreqo4yRXR3hQ1Y5xLpJPfiWZEHubWzfneQXnq6f7p7JX",
  "key3": "5JKXxKwA72tJFo4Yh15g6ZMy7gHBtPAJsXCyXnJv8kB78RM6X4veBKhK3pLrCi1YyzaHVZ9gqMFyQ5JXTKdbVNFf",
  "key4": "5kZF3xCmJfDRoehpyv1ScXrKVPSZNqtuxRYQUKbVGMdRzzgutt1duyY2xG34HRzbBAjBug8gGPjJzcnxAHNdjtke",
  "key5": "s9XLujyttagvX39ARL9vVk63Q4U5M69ZGEQGSctsivEjUN39p24UBSTbcLst9rFNGZb2biBNfsUfUspwmPKQqzS",
  "key6": "4NoKQ9Herk5qcYGahxweWEutNRcDZFV6gKjPdi2H2zYxaQeMSDhVqPkxpFhWzo4u2gsJ3za15eioFXjpja74ieoc",
  "key7": "5DkGNXbkrrLoD8yr1eyCXc2nnYPcnC2FeeEk9JhWbGqLco6M9QdSP5zvMP5vgzmqtsvXF7jfjrd9Ubk61Tir8VyN",
  "key8": "384mHBwbQjswmQsfZ7fgwjHM4TySpCwczUZU2JsvWGiHL8Xn2fDFRg5akdocQkUE1veyHx6YGfh1xY2mZMSizGGP",
  "key9": "2CFnuz7L7r316EnZKj5tFGhicSQxga1xD32ZbP9v6UoHpVkHnPx3yA5NJeHcFjTFrx5bojh9DZUFNiuy1UU4XgZP",
  "key10": "2gWcx6hsYRMhUYUdC3HmSaALde2yJmTiXGqJ45WWwBsgh6mWuqTJ5VoQsuKcrD8uSJUuRVUDMpSMrBrwzV5PYp8t",
  "key11": "3LhX4GzxLAV4NetcUP8tdZZCy4cyiE8AZiWp6hxC3xPvgcGZVmhKCneh23m4nNsHX1M6XRfTG9WkynN9pA6scR8M",
  "key12": "fRhr9Wiy9nC2Hzi7s7P6ASfBh7pnotTgK5MQgkKQ7NVKF4wehFR82r4KE6onnYyngcCXHUEqswZoJCTBVG4uQje",
  "key13": "2UF6Zrmf7Vxz9nbvJ6Hav12ieYFQoKuqbob659m3yqneR5TPrm6y4DBBDZaKRnNpjcEpx4i8qqqr6FzbmAQuoSYG",
  "key14": "96g7xWdij6aifs4mF7RCnSrP3BQ6CZe7TFfwREqwie6SquuWcy1ZdXDVzGjHez4Hthn8cmoM1beKWok4Wst6YBw",
  "key15": "2eKYDBGT2usR4x5YcLaL5w8JcwPZpaGtiEPmnCKfy36i5Rq8qe3wLsJFhWHrBs3z1HtAdFdSxxQCoqYbrhptFeC4",
  "key16": "2VsUdoJgLb7UdNtWxiqJjUhbo9P9EFa1CLmaDLirvN4j48ccS6RTcHnouz9k9HFEQR85zBBP2jfYPHsYfseMr1sr",
  "key17": "29o8cRdnZYPCY1RoHmMHdqg7kKfUbfhDKp4FLbcA81pNUNqiGJwAecUfWRZzyuqJMGQH6tabgAGxShet1FcmsUew",
  "key18": "5qqxzfV8Te9SWQrqzkfc6zV6gZrxvkitcGTJq3uihbomVwsgLEKHGmKrF7vWF9WaWE3HENPXLFBGgmrjWzmJivFy",
  "key19": "3hfKvqtaokij48gfNxN9v9AcDT8kFJn68fDs5pdGz4wASGcvSiDh2dd7QVeC843ceUMzLT4BFbpcMpWnGknGMhKb",
  "key20": "2Xk3iLi5Hqn2NUquVmWpqif7Z9aFUWRBTydEsQfkyvsPM6TBND97rNMDPg6ekQNrGWUkws6LgmzdQwSSPDThq9e5",
  "key21": "4rxHT33NTFhtZjrXNyGT4T8DJi4mmJHKCRM28i9JStykHiF2G2DQQtne21kD2i37VEyBi9xtv8mxp7eKssmYT2c6",
  "key22": "3k2wkNmQ1XN2jWgL45XnfejbYCteBeYGLCJQApCgq2KydsATBG3ym9HEBRPar9Ry7vQ6Y969LuPJj7i6iWFmjYdy",
  "key23": "3dgaf88xo43FXUR6BBqgv1jk3aEkAdM632fk523ujFEwNTLhaUobRwhaxxe4kXigY9EDN1kHK9giNhYMoSyinKF1",
  "key24": "65XwESyuPY5i2KbiPuFvEnukJFTtYx7835dbV7kEYoodxvUyqiXF6t6QNBtsm34SZwkV7nBVV3nJcVuQVi9Adwv3",
  "key25": "2RUhSR41u8tKbwdz7ecAK7she3YxrfoyMgjRa88eN4zYoi4sBLyQvNcRcevkNuqvdPhhScKX9n63bAA7meC4i2jF",
  "key26": "49bAbeRcS9j4GFhxxU82B4SUMUd1Pk6411xUFoDhR2MsBgdEfGUgyACePa6nZq4y2nT7pvqV6Ra2cL5QkxzkBTtR"
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
