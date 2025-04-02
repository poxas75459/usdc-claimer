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
    "tuUoGEfYmNphpFU3r1coWqVCzENMouby9A63tXWWkB8nurCQCJLhrMibayYH5g7ES13ajYhEUXg8PQcx3xWPWjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sRDHP5B75pmAcFKCJffPfmRUkKYMKbhBRKE9fyHPyjseNxwDmSqB6EuPhCYiPqgV4r4yLrYhSwXvMVb5qgUbc8F",
  "key1": "3rnooiFapKFn9BwMWMkcAQCtdnDNy7fvEu6CdFPxAzsYZn9EaaQk5LAX9d9Fe9YH23h7hGkQgoZ3i1XaPQqJ9BE2",
  "key2": "4UbB2NZtL2ShwK4ptMzEyTBMESCgxJitdT69wnzHeyM7UFukKhwigS7UaSSNVK4yqYLUnHvz8BXJhkDg8Zx75tkc",
  "key3": "5pwboFwwXzz38ginNQxFUmrKfCmmBUSp2tcdYvLRjtW6eT3wnRJwc54E4737ZvwpeA7K3YXVrvdBkBmcx84TL4UC",
  "key4": "3L43fYHCSvPZgm7TVYqtKhwE7VCCuZPXHdQKmKorE5MFG2gBDY1Fi6QQN3oP9Gf7PdnBTxtzE4X9DrEPkb5JtA1k",
  "key5": "5vB93FpLAVK9a2PvEvJvE8XUwf2apuSMX7Pq8xV17FRn6VjRanY2tsAHepHYYwuzMKpQo2h3iuC1kgRCdcHEsewG",
  "key6": "3vwKmxqNW425HYGFNBPtP32tCrw2Jh7QQ23gkbhz8YBhnZg85wCJektHXFka9bbJe6L63VSY9rAtyLU32b4iQzQa",
  "key7": "5KNQATNZCbtoV4emdkLyGsVXryjRFzwak7upWY8CoLApKCkGn75eKkT9SzcYb2gnzXggFsQkX7bXaVk4pDZ5pNV2",
  "key8": "WuJfsJLn29FY5A49oJ6cLZFm7pzFvjkWpHqojXVZUShPMLFpBaWtndgthZsvozckxkt6HPTp4aVzUbTTQuvAqMT",
  "key9": "3Uf6pZwpv3JrPvWXLoJacRC1ZjxRF2q8DADaUsaqnJghDJ8DJ8tcv9cpRLfam7meoCXZXSEdV1XvaQuSgLgEYtsa",
  "key10": "5d4cxBRW2ouVL2J8VXBW383DTrfZVMC9wVSykgFmqPfZFqt7vTGLhS6o7UuGQQSXU5YeM8BT23coUvHeVK7qqDqm",
  "key11": "4yRVEqLJjmW7qaTRXtmDnJDi4XybsSqif9p4kZi8WDYFio3dJTWTf5VQ92sxS6yVyBs79L25L5Ah5Rn6omYyEY5D",
  "key12": "5XZ7haQXKKk8BfgeQB9uPVrzzWJnhMgQjsT2AcLB8A8NEsbrrE1ZemB3KzvayiyeNAeKpvcq82GR8NHREsQAm7ek",
  "key13": "2sLZsTthhyrQgripESkBxpchda1ThxPHNxqjm2F3mHBuRgbTy8m47Ap77Hkyj99nXb1XdUJP2m4FVZiGyPpYVeqh",
  "key14": "3cBMgVaQnEzzDbjsPEXYVmG4hcwXqoWSpT9ACeZjzNbqTT1Utomzs18pJ5ezeYrXVNJyx7jmDuE6ErkT4vJwyFrA",
  "key15": "36JHQoD8ir5eLU6VnDcfMmUKZzgY4Kbief73z97dYgdBwtF7ctKihfrurnBQ3xgLyg2oUGpL4gX6kb37xfiSwnbQ",
  "key16": "XQucFENE25pqW1CDD8oYcRztC33oqYB3qXgy7iBNPHtU67K27ULDLMrnsfXACTYMVuEe3m1wcYWyHn2fWvgjjXE",
  "key17": "jHW9jDtgxFUPcqRdWTr93y6Arepy92WLmLiNTfi48eZrxCF4P74rdXeZUKviArGJWK2GMpA5LHLZy5ZdesSgirs",
  "key18": "3PfP228hojFEkjxZ8PAKyrzDMTt8Njqkmvy6AyPJdFvZyA8GD4Mn5cyNepRspcx5PWf6bcJUQR89bqoKNprNcgyZ",
  "key19": "5QqoELnDyzmGXS9vMxdv4zGZyJkWGZrtTAurwdfDzL7gFCqPyjFdG7jGjrncnR9q5tQT9ABRFFVa24st3zPBcotJ",
  "key20": "SiZoM2PF4xXvF6oUE6U8VDfoqT7ibF6qGzfEpqyVVh4gK87PaKT66NuSfCEocxbZqNvbNxF6nUFighJ3ZVdvVUC",
  "key21": "5fZbAwq6jwaGZcrXnQaTGJrcafhRZChCyzUTtmCxcecnJ4SZ7KE8Mgy3RLGTuHtQkPVmMPBLxWim9wTyk2vtK5LW",
  "key22": "2ES9GR6qBVoju8KASuTnNi5SVvax9PgMhYE5awjqwVNtZGfB4uVo3cZYX3WQDaqw7vdM8kDwPVbyZBMvM8FpFzRN",
  "key23": "3jAicvie4cXyqBsjbQaAGy8GbpuyAUbEEdfnYB7DhQBLt648qd5f54CJ8WiSbSyV2UYj5mH5YdXXtc9ujpdysw82",
  "key24": "25Bt6V8iteojMMYAQumPMHk7JaPpzE2xWK7ez1NZnVL8hdQMfkBimLrXGkjerE2KJi2ruDqefB4JEvQYTPbpXQ1c",
  "key25": "2asNfFsTmkSYYNbYcg8rwsPtHcy7hzMNRy9fYwufJTFxQLuaTVMVY5TnocCuyeReYatxXJPfGYCLWo9esQUnEyLz",
  "key26": "3NNBy5zwmF7t6eAr7BTbwYmPXx1L7v3CvcXZUWJJDt73uDF3z9jTyrgKPjo2wSHFPLBmW6sHnQtdp98v98BnFyuD",
  "key27": "48m3BbWMGnHD9J3EKJeLsC2VEB7nWA8ickWLhbHZKMLnXx1EzQyEMN5bphKNSMpm3JsEL72UT9sArLuEVZQJfPkz"
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
