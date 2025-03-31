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
    "2kXFjjK9iyvAtY7xeAzgAgjhtRVkD1x221swAoNEDCaMJ3CZK8vWntvpYswWKVX9x43W4zqNTiKhNwESY3byptJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64gShvQfSzNx8BrGY7EFnJrZyB3BYXDTpX981bkb1dN1M1bVnoG6U4cC9NrcffvYbJTnW1rC7j8RpMDY87zwDmqs",
  "key1": "3MA8SRCdAysCa3C43ZGzZCLdK65fecma9cAgvN4dki2H3DEa8SG37oxtQxZBt4F14KFmnkndE5GefY4D4RmTpAwL",
  "key2": "2zVaPeZrvB84UwjJfZxjGGmbfeoXiSKFHd8RXqJQbJZ6eiYwjES4kxBJT1BZWUQ4EKHLcXayaRm8AkMsdexZCYvd",
  "key3": "29eaH2jmbDdG98UfoCdYQMvBNc6FSLByj7ASxzfZrvHZm59uSgZSww1EZikRNbrk9gu5yNzunhQEHpJjDnYqkG3y",
  "key4": "5eRsBUwN6eEVED3CLHDDixuV9a1wTa32GpCS9Rq2aHY4nsdUBYoUhGH6MAsyoQYxG6ELJWLFnSPGdGrkkZBFRCWT",
  "key5": "5KgVJpCQhY8iNiZPTw7E69XCxroroc1NFxPQihWDHZf9MwiaNr8rDfGMfNQxQNi7b4WMvAibU4WdjNTSTU3wStDG",
  "key6": "3SHPGMvoCR7BGkiDRmKgswdrmfGjpYJsvr8dFw5y5ejy2Xrc4A6p4H8Sj7wyHREgCSVKyJFSDcYALuRoiTYiuSTp",
  "key7": "5XUNMYfbe7sgrUiqsnXUdx1CgpoLSAQPLV3s7ynGaVkJWVAB6oK964KrpyXL9H1MgoWq2U4BNxDuu2hTPJ13inVM",
  "key8": "4izB772yr564TzDJ4SvNE9kgvsKg6HRqNZ8WBHjY2yuEkXQ19uBn9wrxUA7kckNC1Df3pctfXb6vTWKny5pZAPSY",
  "key9": "4psBfyqjd6roTTxTib6tPgK4ASV4iWSSMR9FsFB1a8fJ4oU2QSnAfokSaMGPXowWP5DGmWuXtVuww7VKvg8HbxTL",
  "key10": "3C3dEABBX5JHkm1Ge6mzFH2GG1JHRS2E3P5DrEufpJGiyUyRNt5uSaxNq3PGM9YgZNzGEupymmxxe3h3VUy4irnT",
  "key11": "72JHGqeyeE8PD5xzx61vhL3Pi4uGQHMZ1xzVB4SeRJrtcsbzvPGQEdbbSiKg2RBN9KVR6jtbvdB4sQWd9dGj5xz",
  "key12": "2Ffa59Uts9frbNmxpB9XdR6BCvWKMHvm4h5n1taVZhjbfbZJiDuwLETRKoVsxwRFu8SxBqFVzUkvRt4naRHH3xWq",
  "key13": "4kCuqH25pxqFVy82pdtLMNGpX4tzP413d8on19NKr1AE3YjXGY9L6nSsv1Y5fb7qZFDFmwukPkJWWkacPZ7aPxdL",
  "key14": "5pSP6MHrw8d38EzaoCJCnYGYpSW5shdx899JAU9D2o3BiPvLJm1HHsBU68uUiD32HUjwtMB9Vcjob4dAitWKKR18",
  "key15": "uDaDjx4g1ETCh7TfNzYVZnRVPJ3m4tVVGrcvnbvRxFr8osQkE55rjiu36p3DFKDVPJ3JJ23wyk5n3gyRMbRDSMj",
  "key16": "2sSdyhmN2xa8VFAHeVuECJr7VCRLGJqH8AULqTt2rbr9X672xin2mREuWHTJMQ5n7KLuuFjDqJxAUtp1NaVZomYF",
  "key17": "Ljk1yJF7UmsMzXuu3NYozkFbUonwNhxSV2jp3wAEXXRrY3PDWgWhDcW72E8mVq81gZP5XkBR6Xm7qtc8WdTY1tZ",
  "key18": "v8LebSWQRYp5kP261c88EQDrr6x7TdY5H3STPbkmnDGZoAE39gLbpiPN7kZ5JTbkyzREZbXqko9rJQtwYFZwzc4",
  "key19": "4bNYmR2VTFW43d3rtBouC3ygNC8NWXv6U8C2a85DauUXcuxu9QPBCdcYQ2K9dD2Z23e7dGZXTTk3oi2ggf3dKFdX",
  "key20": "4Y9ojeobPxK2ZTHGTZVdPtR4FZTKdMiEP5c3HETu5CPBSx5ks8zraeZkaJZgV2wjyq9286obkw1k7gqYtkh8woB6",
  "key21": "32QaxUovKtjc7CTDCCytYoEMEeY3ubnjpyxQz1Mwu2E2QXvq5co9qvH5KwoLGBsqLYcp9HWdQsGtUCJ87HU8eDZj",
  "key22": "13aWF5w4nPBoAXMf5bHnn5U4Qv4aZj1pBp34WvJjSBWyuvutnYABQJbk4ghUJy5NoWhjD55FXo5CSaUVdtAxYnc",
  "key23": "WACUt5sUdv65Q2m4a8ZhFkrW4ujZqEuhNETam88VJ6WwbuPdJR9bJubchUhWDdZ6gzKN58JAGhMyHCF79AfDtHq",
  "key24": "DVVkwNBx9M2LQoLWA1PoebwmqqUovgh7kzAVVZPV1rfu5EAupPcweUYbw7BwLjoUXebenfL9gniUNcKe7GD5GxP",
  "key25": "5hb2tGyQLXprNdkvew22Yu6QfLzmiGhNdTEt7JELmr2qsPAbK7YqoUNSyfUbsWJe2CZVNFTwA1YK15BvGrb5uDb4",
  "key26": "4dsFZai2fjWBF4bjMjxF8y5UFo1VKrNPeKJ8xC8oDvnmEoysQbCHUSanW3norTm1bidhXBirLdHebSqvFRjTyPFM",
  "key27": "5rGJN6rvNnmT4EAQVM9X1jBtpiRoCWxiUyggizsKeYdRibYG56Q8N4xKog5r9eCKH4HWjh2cZkTjWmU4YYbeS1dh",
  "key28": "ESBnhPtdhpsQLqNENwRJKYWYhfEg7T2S3HNvYq8KDW5adWshWN73Qq6giZo6uorvfwJL7Jx92SsYgG9m3GJqbLE",
  "key29": "3J5EFTftdSNAdYvo4RMnznAbVvoLhb8m8zNswPaxCQUuBNZ7UsZVNvVtPGZh5xcMWFXUySZy4gs73wK548p4SvVv"
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
