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
    "3Q24CcXVjPYtz83gF9XMVa96NDvaNV4m8aUy16tY9M5nLJcsq3KTzBSbBxwsxP3xFtrEx11d9hZ9ZmzaeThzuv4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LHs5jAuw4m3LZ5x6XKkAgUSAyPKXbaAWrJubjV5qpbqLDmtif2XSD6egzNxvLhnegZCpKZrXrdsFoai3nu4she8",
  "key1": "VNmWhd18kMi5rEpixdch5s4MWzC5Kr4Ddj6SLJGtjDwfReZSBphs759ZiLpE5H37Yof3DFxqhaBUPLEbKYQkrMt",
  "key2": "2idAfyAMzSoEbzny9d7NkhC3jX2dRvwDLWoFzN4YnbuvQyQVZw6R8aAt7R1j7ganRVRCy6vWpaYBvR923gtAcsF3",
  "key3": "oFGaFm8kwd2KR7USSRitonPFQd3HLQP6rRcCQdA8Wrh9JbisbubxFKBZ7LZ9mFNdSpxqbDQUU9vQMEFekyQFisR",
  "key4": "3kGYvaYKh8NBNks3DbnoVoY1nG6ysyxBZK5pV8nqnEx5aj6GPPTRn52c7YoR4eXeuX9C1vSza7MtgNN7UrRiSL4b",
  "key5": "5T1wwwqH71zg6eiWHTQGRHcfSuxFcoX3iAKUp9VtEpkRvmqkm9SFkp6qfjqzt9Qc1FB3cwRxPX3DLgwrA9mDcQD7",
  "key6": "3VPTfrGDTnNjPXDJFo5RAybnHUXDpGiNMVDddRUVC1knZEy91N1LAQS6nmcwYkcU6WkTEuL59BJRs1WFhwHuawks",
  "key7": "UQ9TbQ9S91teix4QKbzuXXKU6UM3Ahio6vLi1MgmgxZgDBzJPJEpQgX1n9kMrGy5KbQq2k6t1ad6dEgE7Jkouja",
  "key8": "2bVFGohymSVt4rexqQ3kLQji33oZgwuiFuxMnHbCHM6Emko9ybyS7fV71A1WaH6vxG5TRmyYSR97raifUHYB8G6e",
  "key9": "3pK9TBVMTZ1pBvLUSVHosiWKMxWGHtK9YaAAFZTPMQN6hGZdvXGH2LERGUgcoeNWSHaiuhG2ZvjJNv4yUV6Umhq1",
  "key10": "GTSF6MgwW9b3dtYkgt9T34XiCaDLzj5nHcreHU6seWkp77Tv7QZ7uRUjcocPXvUtHQVLfhLxhC4Kb6kgp1KRMKC",
  "key11": "3hzVbtGsNVy8MgJ3bA7i3gJ4cVx29WszozCetkeSnQGPR8FFGNDuT5pfy18AN8yhaDs4N8LKG5ru94L3R5SMc7jm",
  "key12": "3nqkgvTCTkCuwQp5Ao6pWHcZRdxZDmziZPfMeL5EnA7dCpybXLB38ZNa9c2u4njYxeAmq5wUqUPoGXyRM88DGB6K",
  "key13": "5rHUWJQRJN4mU7qJduGZrWdsfzyhd8HAfDsdEGXX9FKA8EzrxRnhxv2Y9Q7qCZLJHu6grFAY7vbSQzP8ZxTzfXGN",
  "key14": "44YW3NiML3Q7iwzrXaUaK2b3BX2VPdmS8bTqDudCgZVYx7WjZwFpYEHmVjuhRXJ1yzzMcUqpsq3v2ZmagYKtAKhx",
  "key15": "2m2ZkQQU3wF4TTcEcTVkGEJNsdUTsmme5DKNiyrHH3ptbXorJFZkZaCSRDWjedyebj4CZGuemxWPNFeHuVD6gzB4",
  "key16": "5jkMYqywbkePmRyVDszSogGS4fvhWNsXQ7BFqABtZLd5rwJrgUGuPk6SJNVJHLj4FEfmTeqBELvWMC5DPbYGjCYW",
  "key17": "5tpLYyiSjHGisHD9EazqxnwbaPyPG4bpkbmSgyVw72CjzyePcesHCWfuXkUpQfhb34W5e1EeMqSFNW3BDfR9Z1eW",
  "key18": "5mGvJUKgapKEu7CzuFWntC4gdqwGpbbjwKa979oqnKqooK5oL6n3Q8jqUE4x7QuyD9PqTjHKp1WhvWKJ6HsR8Kpv",
  "key19": "2qDSByj82TX9Mt4Qd7TXiw1gRfYuVjLyC1ndBUi2uNmJ6ETGNDiBYwwXo2vjf2Qn9BiZwpUBkkgKVpY4pVnf8sHW",
  "key20": "4E68uzEpff6s1uYQqsJc4ifXgfBwKfZ4H7PFLVF2UjQzY3wZdxaT9panzHJNrBTYEfn9u56VYSj2w2AtA1d6KenS",
  "key21": "5zWe3bmjxe1ZSitcbWosQZtmK7qQfsFjFMMnQW6Gb1VFZPSTEyFh6d7cUK3VVRJ9FakFozWgki3ivYTmE1KMsX7E",
  "key22": "3P8aGvfhz95DNqZEim49YYmYrk6pMkFgwpmMhVd7RnxLugDdNcvs3hPuFxkGUor1DNJVLAeRZciMAznkKbtZyYbd",
  "key23": "5ekJEx3SYdu7Wa9KEzTARQaGcS8QNaYgU8LVFhqDNw5s6RzR7fTYw2bmWZGTE78jaBSgzSBkeZMp5uq5UsrHGik3",
  "key24": "5VHjVMBaK8ej8e8RWknPdeq4cj7uJKvQNpfX6so1cvbNsaHUDV56X4obKqREk1DF9gJx6qpYhDD2MmvN4w2bpxJh",
  "key25": "2ERmJLHkYh6baj4UbF5iXiDeeHUYBLP7Wgt8Zktz1xrY2LJFFWouZEG9dTJsLbbUgmk95TVVfkpSw8hdUi5FU6H2",
  "key26": "YNkjaAPzAiga8pXxjQayr1XWbLKMxyhtYrdf5kc9d813urgVYS4e1SZofoxnukRDhBfgKY2kfkXzmzG78cyJXqP",
  "key27": "4cAFffKu1e5p4CfsVsDLff1xF9eMzq3fL2BihCzy4SsayHf9NLdf1PjHVxkXqHipDmayk9bx7uvb87XcK7dgvzbV",
  "key28": "4FsheTUqWNLeUmV59SKG35covWf41vNc9vkWcHSoTnrCZYfwpPRDkSjK7Gv3r1K8xqU9XA6HGvyPad7yExvytZjy",
  "key29": "59znQmD7KtSPC1ibBkzsvkx9gPRxpnPGn6tAdvRnBqyjEfGHEPKyzedb2ewnU3XRVo5D9dT5EWe2HbqZ5zuCZhbm",
  "key30": "5Xjub7Cuk47kG9gJEa5DCC9vTKnpChXPY5otQmr44SbRF9HhN9uY4T3eHAz5oTHMLaphxBgN9qkFt61vUzMPKv1k",
  "key31": "3XKfU8CEdAYkQ62zT7MczZtD3V3P8QcmPdVceWKzTnek96F2BDr9Rkk8xM5t2rGdeR9MdoUu6etqK45K6LH5kqkb",
  "key32": "4VGi6e11QGz7MhrTW1XnhtgxoLZvqikzWkM2Au8fkazKySi14MhEX62SEGPy2zB1BLvbHUoGq7hH9KEC35ya7XC2",
  "key33": "52ZMSH8anKtpnx4UhMieN75bnYRibhEfviwYcUfbD1VvBre9F85wt5c83U8e4nZtLjVKFqH3XC4QPeATZB1wud3Y",
  "key34": "5tfbrGcmSY98u35nWypezn8g4mmWMYnn3A3qc6gaDT7Gy9jHVyHKSCwshjRNefECWpa7eKTm81q9tWn3fEpFAEd1"
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
