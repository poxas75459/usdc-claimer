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
    "2fZNaJBWYGs7o79wx3sB1pTcazBF9wdg51MSYoF7LDTYohVcPwf4nsnLmkugcXGAQ6wVKLoat1FBMeoqVWFrabMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eBHwfuRJTnhRtk5TaEhnc4t3VhYyNtM5T3reLA9Vrptq335PRcTChsn7stSQsfHCcsDUK7Eq42cKhveguY3Rgxc",
  "key1": "3NrDJvQqgLZ5wG9M9c4bB1pXsdo91Uod9dCx71ySbM23CxwzW8rigvCDCeDfzY5vUGe1wopTACjUTXihw8YYkFzc",
  "key2": "29WYqkhTxMcscP7M49APLSL5EQ1MJLt2JS2nsEPVLnmcX4gA2FgmSK9HCfwCwm8YDEnZ4XBDc6VcYZhM3Pyjvy87",
  "key3": "4pwZBv9xcGH7q7TsMBvh88uTsMKFqz17Xwy2zGi4N4pSmZ63zFb4mUXFWfKZ6XVgKUMCH8UxVj9Sam3BcG4Tk7NJ",
  "key4": "21V9NNxRUPzW9VLcjGFZZGcAXyYThN578JSrrELu8UePPdapv7scSDdTX2eF1PvEjvWDkrZTTsXK5BWEGuduRVBT",
  "key5": "4FgSstoQyrucneSdAF2BnqEvy7KQkDAEc3T12C8ZicLHSwxrr3oFnZWVeBJxTa9PxNj7wwz47gxcREikH5zCcFnd",
  "key6": "4viE3du6joQJfA3ztfwbHkXC1kXZ6QF8Bb3BnwCXQKcVYDTfynPYp8xSxJEVkpPvxBwyd4hAXDdQzayeeTbtJwrD",
  "key7": "5EvGiVQxFwcku5TCKvAqGDpkjDeRfK2dadSNv8LGcy6ZAXjqN8GY6FmGS3Xw7tGQ3GxjjBXmAeeMygbu8x9BAUqC",
  "key8": "3Uwbf8dfnfgxPEHYJ2XYCSx8a6KGQjbdxUj4aFqsrrFP9KzghBsoZ1mWsU1nUhafjv26WvzcmyYZBRdLSFoKUMkW",
  "key9": "3x7zXK9NEUVUjAefeZEyaZGUd4AH32ms5YgT6e53xMubuobaARZq5L59wB12zjNfckSnujU2VLkLmnYYu4rvtV3U",
  "key10": "4RbuyPT76qTb91EEV8NmbgRTCREhb1QHMQgwHbE7f3ZvQCJTecaDNio4rbG6bEN891spjdrtopvqHXhf7qGDDgHf",
  "key11": "2oy19ZUNsgabeMtTDwvgc53GLv5gaXUXEmyVj8rLetK3mWy2PjxGJJJ3iaKTYUKRHFwXjXCfN6GD9pipt1BuEKCD",
  "key12": "c8UiWyxSxiL1G5W1ocb2qJZUzASChMKc1sgmSjevxhf7c5vLPt21QRmKwhPvDUUxskb8optR8FtAnDJSBpPMaEz",
  "key13": "5MXkJ6S49PfnM9uurQbBMSM8i8Zhjq6qCDEAYcDuXiWjbNjrum1fWK7DoGqWbQ5Ppo94oQsbuvTbozdpLsheiqD8",
  "key14": "2tmcBZGsuV6CaP85VyjYaCs4HLEdZVALk9L8teQ78XyrdADmj5K9iJZ2PikmizsppAQmxXkHQ5nLRtssn5Qsk67p",
  "key15": "35bSQF46x2T18dhXVUFzcJPjoA3N322yKTEEWDqctDnZpgcbbEvc5uj39MmutR2T2paEHMb5XPNdWahYg3fHs6aS",
  "key16": "X94HKJkUhbhLhR1CX8wQz4JQ5ZcF9bLbSKDwBt5WYnKQnKmUeRN8W1WdPivZovEAbdTAy5gxUixWsbJL5jgxY2U",
  "key17": "489L6gmZZP9cGkbnqogzizgZr3q2gSrv5UbWjq2ZWQqby4ZoNsfn17PoKfsjdcgz3ar4yduSGWVNsNvcv3Q8VBvg",
  "key18": "4qkPg22yr6LxyDcpfWqs7ELmEgUoMApWLTaKfCYdniRXFfxswCwxE7tJPWLrWjvpjL2s2byqNfAMy6g9CTfPKrvx",
  "key19": "eev9hkpJXXFKForkdZf8w6e3Vt4y4Lj4Kj9Au9oApQmspEKUFZeYqZDMwrbKLXByn8XKkaCKN5XkcSYE4LwTWs3",
  "key20": "3C8pkJqycVCzZPtmjrTLq789TgL6cfdHVwrJTkDC7XUcoTPUd6x8JML8NKtBpWTo5BS9aXAfmK9Q5g4RU5AmfDth",
  "key21": "24T45ZDrjrXHeKnDi91WNAqTkY5M25FGe1WNcpL7sttxxAHKFoL7Qq6H1KJCJQeKvQCJhRhAJkzx331huTb5t13R",
  "key22": "4BK6e98g86XFKE2EZKF68dXoGVfDCcFQ94oWdBshkFjPptYwp2NqczoFbvk1UNLV1tsmnWYcas71u7QJZMj4UFjC",
  "key23": "4m1WyE6FftxW5FuDHzBBDBkAfmFpY949WrVC37LGJbwXv9eow9HNhsoi7yxS6xZ6nj7nU4uspmX7wpUXcwNAB32n",
  "key24": "2qfVW7zThqFA3yBHWmSawZmNsEJ6cFVpdE2yzEqEYA4yE1NbozMzDYoJho8W3FMS15meJgVvswp5TeUfd7vPL4i3",
  "key25": "3bnXqnu6MpCFr7WijoPdt3RyqzsYddQ4v4LQKW1Zpw5FgT74deXnyfPCJRFd9HQf8hNpuaUoAoc8XKQ8UD32XSXf",
  "key26": "5yi5pMZ4vet81czTwPCPuNMUQk7ztqWe7MNRug3MNwdACdzwictS3GNSy3h555pQbPkAXZ45DYGziHeXu51Z4m1H"
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
