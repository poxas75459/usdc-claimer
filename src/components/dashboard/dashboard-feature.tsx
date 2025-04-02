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
    "JtUcF5WKVq7eQE65GGxG81wcxH9R6wkLiJJizXJjow6HXZjU7AVW4KPj2XioSi1xLkGJEjGroQhmpuc2ei9iRpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aXVUMGH6u92DUhcGhXsDGd9WWoKT5RY6CcYgg2fnB5zvuBkZcYbXgcKD94TuXDSmmyZt5g3dPRMWZ5b5Chr3u9B",
  "key1": "3Kb33CuhV4K7HE7KP4ZNqVGJefocjeu16crpvvHygaKkE5LFqzo6y4cJFa79EPRHpUXZ1kzuQGcaVXWcYkjFuCsR",
  "key2": "3ySaztVwAHNQyqkzaNjBNfzRymVx6po66ikiCN62F7pVozxqnM1XsFrUM2Y7jHFy84xtvwTK4SBtqpTDiixWttoN",
  "key3": "2FqAJQUArtdXX3DjDrg6SLwRT5tXWwETFERzkZ2aNo6DjLgaVhNeukGp3DmYvnNA7eYKaqJbdNHmF8ea8eWgAmJW",
  "key4": "31hCNu6rqMx489rBvuufw14FbbdgaMNU8q8uZD1VcqMRVQPw51uT2ZTm4RL56urpYGFVv49vUKPgVWfhTKsnWwe9",
  "key5": "5jD7fYEaPhur9FP4FM4FAtfZL8CsZVQcupuBPsGeMYmeKMXm4TRmnBXHqDrEx4wwDV7aiVpCoPB9zNHzKfEf2eA8",
  "key6": "LKeCpzDyJMXE4gCWerA3zgJBBpA6kPaDAXDVK2QWw9MU3qCroApm8S47GDACaHLLrW5wQtUfoPP1wLPqKV4sLjS",
  "key7": "62zrhVDgchERkpyjhVxjpc8BWDLedrR8Cmzk7orHuQ9NgFbmL8b8hJ42oraG1Y5g1QsBHpRDmvSt6gqcgT6PeFi8",
  "key8": "2LmWXGikjGNtVMWNVUuqybSxrokRyXz9TXAdbU43ifCeNhYd2WxjCii117828p3swRbEUWxegsqLV4dgMuP6jnqq",
  "key9": "3uxZAo4wF1WVfKWW4UQe89SzTyoPkejZ4ayA1d4nL5M6QLebiB3Y29XmQnNQpP6yzaJWknYDC1iSDaQAWhAu4rpy",
  "key10": "3i6gFyY3SP9kPVPuWGweM6DsubPH3YfsLzbyz9fcmiwkvyvcE5WVfWfRgJS4ZX6YYM5h7CwfK9xfFmk2reykdbk7",
  "key11": "6KwTpAY5H161be1UeoY5CjgcfhWwauLtiJphsgdDPDAQHME8zkEeLydw7hktyGnMrW5PFK1KwYgSRqtPM6qpCNE",
  "key12": "3ErCBmqRVA5npV1nToZWrAMFqhtjGUyX9LnfVmuYoopXJmYX7E21gZCF6XNvTktExzzZx8fvogysR5pYHKavfQ2r",
  "key13": "1HYcPVXFmq1YuE5HS2193rmoCKisHCkyHqPyGS9Q56Rp9CMkF3aUzApzsC5qqXiiZxkc28KMTeiEqfjKs8EsHnZ",
  "key14": "BwzyfT29DxJig1PD88UvHNujrwAy8RwgyF8EqAQ8adrgbSFwHUTr6YhPTiktfsgx7C6poDuJPWvMfNVnZ3Qvuu3",
  "key15": "5fHbsec99xijH3qmc1N9byJfcGLGXfR74TdkMMDYMvMdMMqrNnYFUY12CHkAgzTUMScogVkmSf8WVLKxg9tWrguv",
  "key16": "4TvqEj9PVtMXGN88QfBHzzkepAuM7kWHG9YrHMAaJj31jBz9U3eR5Cq1ZMN8U2kCnZzc4twainrbaF3gDdPKVhjm",
  "key17": "3f9Ks27pZUaeXWw4tKc7pip1EiJdpXAVaJdNZC96mLtkThuWN281h97jR1ECWizfSbCAQrAF32KqiGSVUnbLZmXZ",
  "key18": "2u6mXTCoiY8925DaFhTLCturHanLnQ5kZEUMTXhVCChyLeaTwdYUhJ77BsAp7D4MJrUhHRMHuMVVR7KkMkAEkafk",
  "key19": "5eTz1PttRCkcf4KDwynE4uy8VNWtpfRqFvPm4QvLGXw9zA2em9PSo7VPvW2Qcy8w5m8fsuHQNiThVAzhzGCkwCet",
  "key20": "45qy5ncgZGsFQoj6djbexR23xPJ6wMJUJWcNNRu1Qj9UcX1y29ML51hd1eKYe6KvoQtkn5AXGqiVW8YXSNs4GyqH",
  "key21": "2trYxZfCSC89AQEYJQyJeY2RtJRkcP6wKVw4gjmYq8S87kSmXwm8YNw8ozEDwwpTYAgWV5j7rNh64krbC34MBo18",
  "key22": "3WwghSgsAPq5wxiPgFJwerQTf7bczycV9TGhVMvfbkJSAym9ThkySENR6CgSbpx7ycQjrqnAMVz7QmmQTerUubX5",
  "key23": "4fPK95pZehRZeps1jGF7vGDkA9ESyVY56XjuQ57z9AjbX8K1P7XbdcY2jtcajQnDGnpBWLbbjEtiKFARZJXzDXeK",
  "key24": "3JE2tx5u4ufXyNbeYbUzyTzVNUg9LYok19VJXsBRmYdGrqrNtM3wpN27Ev7SHo3taZjPJM5u35DHFL4JivbxAjYv",
  "key25": "4hFTUM1ab1uLRAcPN5dTwSNjnGYm2r5UixneEzAYzMFcmwjb7Ueun4Y76U5VMi1dr6V35d1EqhLt8ocuoLitoGMX",
  "key26": "4oMbJyCkbWBYBttTkeHArf55aCBsM7KySoiV9JJTZN9vRMFSRSTCadccST2LUVeqDE9vLeMX8yDXsSLEKtdLyiMP",
  "key27": "t3Phqqh72s9GGbAJSKSN65pe3WkGYfiic2DpRr8CNUe6RRmbuZYMxrzP4MbxJwSZJPQfrFqaPxwHkH7LADWEHYT"
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
