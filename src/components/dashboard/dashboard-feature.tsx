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
    "5fNKq69qhLKMf9vaMtpYRmXXPHybbrc9kJPgiFyA67yM1ogNmTwyADUYRgweQJFE7FTSAVfAZSYE2KRv3QD4C7vE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dRrspPk2ZbrAKXnsrGiPwbWZVVMc5M5RZWatggwRJbn1EqGcvpWUN6LRn4hjXXHE9GVaDsmcZPhgbQ2tCMZx3ii",
  "key1": "4Y68m2DfbAcfT4MWPY9vq3FfUZe7ceRrQKMCL2oGNrgcE7qxtXrWPMFzN2ZZe7nFkQYQpMr22axM5tkmsSCaNjBM",
  "key2": "gMhqHN12aVjzuwLqzWj44ku6M77LBxf9BaXjyxrM95DG8F7mSX3ncTGWyb4YUNaBWPUvr3eQQXkn73zutL2a4PS",
  "key3": "4dGEunczkghDbRDXVzSiC7BgoQW99pwFvqQdT4pqRQfGemxbzhaTUyfPRGK9Jv8ZjL8wQD2Zsatw796Vqu6JzURs",
  "key4": "NAaZhRpPFeQ67XPB4P8DKSWic7XWQG2Fa8MZKY7dQEYvhs57x56RkeB3o7TdUPs75nVqvSqSZA5bhQD5VLwcfYN",
  "key5": "HRbhzc9MCG4B4c8JWhyRD5YgCZA6ePoSdUMa4G8enqbU1EV8PeBE9hAMN8bQoaefZ48G4b63Pqbd8tHSNVta1uq",
  "key6": "4h26CpncV37bbk7SA39XJjd8BP9vXcNffPptv8bniV5ooXWUB1deqZV7g8uTNRyapdWVYZcNvN9nenSdHvjpSCBy",
  "key7": "sWGSY13BvZW77wkxBMVjNigLB5EAFkDahLJxwMqaaStU7dVqpMUDXLMbpVZrV5gxuxnjDrDrakj8Rkr9e6PQmA5",
  "key8": "3gh35RYugiTF3YioZbvJ1R1MsqFK728PzQT9MN2RUQCni9PT9y9AnePF1W9L3CRiWPT3ypuatVLo2WZR8M2EQMAA",
  "key9": "4ihzDA3UeExiQ9w1McQT27xJ2dChFuT3bx34NcYxUAEQRDVuqGtM1DDinUTWjQtXwE5zXGKGNRBUZF7d8wzh1fC1",
  "key10": "m4PkPVEEnoizv8WqGmgeDFDTvK49vQ9qBy7rLgRSXiJVx67RPVDJGgBhFmBPrbw6coRBDPck2Tb5kyAj31HpeNs",
  "key11": "5LRrCPhN7z1TtkzxcvEu85w4Uto9kbN24dBtqvbhyYsdrh9GSAYmKEq9zW6M9MLG7tgWkwKqudqccfsf89qXodaR",
  "key12": "2Hqpx7UwGwBaqD15gvTNxEJpKA2PLnH7DgHe9cicptnf8QrquMTTeVqo8VtoEzaYsDQMdyfnjS9dNHBkGqn5Bvk",
  "key13": "dNWmb7PLhRhTrWEkDFXcKFzdoXyTrH8cDNHiwnfVZuovBJ2zXrGJFoWt25CWw51p3xEVBpQYFzHT9NoCSTRYQwV",
  "key14": "4yRoDARJ4XfX6NuEdGVVSLP7vAJmv5gUP5eURc3TYAEeh78mbn5uJH8AmKn369D5CXw5qhZ4pLqVirGu4pXdVC55",
  "key15": "2z5JYSzT651Zm7tvZzSKYXYf7nnBkf9fJcsYQjWqXuHmBX3W5tFRvN4Yc8EZKQX4jpTxShaXwgHQ5q2BDMYhRB27",
  "key16": "43UfKRAkTksNooaK2DZr4vGeZY8bBgo43V4Qp16vwERg66fBrxRg5BEshEMzchZrHZzjbiUm6uKPefGFtt3ppAXe",
  "key17": "579FhfbuKxjNodTSP8PBbvMRj3W7YWJNBiYkMjeW9gv3L7KBjxakov3SQZajWYKGP7ve3KLVSMAvL54MhrbnvL35",
  "key18": "2vjJa5nEgsa6nXvxKJo3dyCwcD7af7oRzozFnRdk2n4bvcA5CzhLmFGNMKDwZkMWSGWJJSVaaDLJcdq5HJ8hMLda",
  "key19": "5Mz4spsNSKSJFqcYbW8QoDcsERe9c1Q6x7h6pi92XTURYbutFpvRG7qFjQ92e1fEj4z5gATALuUWTQ3KNPJn4Qfk",
  "key20": "5pdVvxLzSYCRFhwyjfJnVJ7toZSPNKdTycR8v46Zuod9ChQEhCt8pJFauhTbYr28CznvKLAsT8MV8ddizSCeb6TZ",
  "key21": "3wVYeEmHYHhKQF1Xh86jzdDZiwR5ywfFStuUv1tvns3kUFczzaJZKZgENmHFMqSE9Ae5YLj4VzqKAmEYZBVv5QgJ",
  "key22": "21f4fWmSpdM3wSKQhnXUGKN6GUpkVLH2BSJLcUWxka9ivqCuL3io7noRYBsntH5Nm4kMGLT3Bvxt6Pqi1dtEzdRZ",
  "key23": "4LcrUkmtPoyUJNtraCf6Hr4CJ9hHcBVhvV5RSTTAqrmRvFGJD7Ak9VmULU7PuH6Zs7bLDFhoTG2uhbyA62fXH578",
  "key24": "2Vjq7ozLQ2pfhArvHK44bQF8WsmvsxvfjsRr8gDjhghyMkTH4Gt9sHjawQUDN3yot6BApcFBtNMt7sD4XAKoYdJ8",
  "key25": "2XckeMvoR27DVmrJWC3WyGBz3g6SCaoRVDaVtemj1tY5sedtCQHiF2xJfwqsCMm27UW6ZqpX9AUtevrsZbAskoLE",
  "key26": "3tpwNp2EaNSUNyZQ2UFmxwBtrFqj2ZQ5uQz4wz2Ed3PbyTLU3mz6EHyVYeL7438jws8jRjJ8rZukbgGdZjq9au5",
  "key27": "4P67uP5z2ragPo8dGXFyF72i6w53B9fHd9oy5bQo1JyJG9qTU5pg3EF9a9YRvrZ6T4E2AS1tyEKdbUkSgqsjo4AN"
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
