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
    "3RhKZnxWCVsPBi4r8oYAEPYfrYnQ849VjkyzeUGwSSs5JUZzgiHRDgyPQpPCRAoYu33fSZK5CRFZDXYCt4HZxRUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VRZ87TbQ1aDC3rCREFiUw846zpghkshHVQ7Puou6Aax3AoXbYs6MMpxw8SDgJcpxqrVDuqirNvRNHWPqy92pfEd",
  "key1": "5PReFesQdhJSkVUDk6pNMEn2yNbbZkjw7271ZUWV47UD7gqsAHyhga7frBV26h9tHyHkvv23KsYjNTJew11QgwoC",
  "key2": "28EFmkbZ6QHcRJSycThKsRFYhnqHDo4jbgAJW3dgc4NzJpP1BwJSj4SXFZyqc8VhCzdwWzH1AjmNW2TMFyuTLpJJ",
  "key3": "2fD6SfhVN3oEsREkYuEFEi6PVYWXTtwTaNQzx3ET2e5TMuZvdmUwDSNtx8eV2yWKu9kVfpqhaLXtJNRFw7YRsQag",
  "key4": "JaHPtSysYsVhZ5dtg4G3aBD6wnKsimRajhGDW1Gfurs2d97MiMCnEAwGpGWMDoCHZhS1RLynqoLCopzBwJhwqVj",
  "key5": "6468oVquf7jzgktz8L6NUpJvfzCqB8dKzbivTtLBSoKcjZd1PASyNPCYaSJe1Jcg6rXwZ5GdYkKgmiFKav9Jkj2i",
  "key6": "cP6qoV6gni6U9dy2AB7d2qSCFGh9bVYgrxU8zEit6prDFdsxyHpskfQKW7nekqyQsUUWgSCtibeuAhcVBfR8pqC",
  "key7": "3KBehPdtyCTHfwC89Nq4NGyTZ9Q9G63shYiFCxDfdrH8SJq6xGkwMhkam6ehGvZkvfmEu7Kc51Q8Y1JPhfG29sqA",
  "key8": "3813UnnNnBxnh556E2AvXB9M5mkpZ6uMqivJNkVwuLM7mtg41tLnox9nTgSzzotLuZKm1YyyKLgeKEHCQ8ccuxM9",
  "key9": "35rYUUQcGTS2ufNqZSU5626RiDJdaam7Vhf1zvChSLTjtE6ZVBGS4u3PC3SA7RF2ejD5zEHtJ8DnjfyneST9WGRs",
  "key10": "3iyumhdFnJUZ1qxtMUPE6x6JMjE6ArV519vBiV1NqK9uHSXmT1JNGgjrYM9Syt8Dn9xCtaLgoJ89LEMxKxdLV8ah",
  "key11": "bStYYpJYVAPs7Jejw79AxH25xFQfXiivwqpS8URxWcfJinS9fbCTRfYjxSATSyJtdgG8Eap14S7vK499bpsnqbh",
  "key12": "2C8qjcowwdfADBmuUGe226L2LiEhjNxzkEwU2qktZHadzb563X8c5cjBVXkKq5VMigyWqqV2BbStJhCMkqumaVfp",
  "key13": "2xSHpjC56Xn5QbgUAnrGHi2omLRSrGtoaNsm7o7q9BEZ6CVGAhAKE1j3FT11p7fiwnSZo9opadJSi7HAaVxXuo4F",
  "key14": "9uZ6frnuXdto5BsFXMpDPCiaLHNzbGcDV2DuJTTfnvSpAC9xcn4BVPWeP8Stt6c4ZhmNXp2mfbBj1qxiq4rBX8Q",
  "key15": "63m6f7mSbqAgJBRSunrPrQ4syUkrdAwcBxT8ByL6SvbcchFXq9WryS9QxdNwKA8Q8ziVA46aHe8uP1mxaWqpSu8k",
  "key16": "5bnfFGbZ86V28yRJtcSHn26QNvi5k1LGKxDYCuukSKxB6dnJ8JRTpZeys73nku2P2tmftsC28kXctTCJSUEmcK73",
  "key17": "rCkuRhPeAq9npcVpKUgK2kQP99wRWZCoQifa875v77X3WE34M3MjRnut6C9Z9JmpGtaXvmJ6cdWCuix6nUd6vTm",
  "key18": "2PhFuxCRsMMLgddmdeUfTofj8kQKLygDRz7vZZUq15uJqgxdAn3ge3mFwD5KYEo4DkNEy4WcrCzrCjiTYELtuAm9",
  "key19": "BmJ4tSKhY7YQcFFXHru4mRUJKg5YYGVfQrmto65yQP39vrpPoKHGL6vfK1cXNwMaXSzbH62viH8U6EPgpu9M5PF",
  "key20": "2u22Q8PTXbUkW3GeGUEMPoCuW71kC1eXptRcbHnLPkRAMKkPLV3cjEBwe3GNj8q1H3434x3GjDVdZ1EbUVZUNypi",
  "key21": "Pp8KY7cBZuqtwoPd69TtyhRZRCFucKMGSEy85DCHBDNyJUSYNrPePgypeiNyxUoQjdusnnYYXUjEhzGdR5XLsQN",
  "key22": "3tk1AMhEzcob9472vFKHB4dwBSwLuG9pSSuvgV9bUVX2pLvbN8HLERSGVGuv4QHkz4mPxeMCM1q8evemMEA6yWpC",
  "key23": "2N1qNF9GyAimCKGbALMAYYdo527eLw6jixM25B19pJiCm9KWheidH44t9jDUyU9TXYdP9U867vkzJr4oTeNppuAb",
  "key24": "621K7qRFbd3R2eN4Wj7bBrm993C2RGnKrrVeuPZC3ZRkG568dATMq5xLZJD1crUD4u3XeUPc8Qz343hTirNECByg",
  "key25": "2Dqr5UiTL4rCSp4EbbWUJ6MApbSC93QBTi1tTXCx1JS7kWFGUTNwTXDqmAqT1GoNCLGZGpBvKY8nhRyc7jXGHNxo",
  "key26": "4CH8SzfE74PTf5gnQV4kGgUvVtf5mg4TQr36yFUM33meN53YPWmzFvxJE3zu8cE5dEFAShc3st7r9DqVB6BE8dPM",
  "key27": "eCuFvst4w2WyJ5KR6o4URupMdawwtkojrGnKEPHiaJBi8QLtsavGgif1g2CZrKqWq4yUhJtNu2ifYTaUd8VsNTW",
  "key28": "2u6JZvhmWbwgjDQTdLiRdXTZn9iisdfnBJPwbFN9nhHwNKSnzRvnf7svAHMetRMHSLfViorKpFeqXatWQAoXzVAZ",
  "key29": "3GYoF1YzFSfT1mqyENd8GVJ8X5Y2YS4Jy7LvUsPuhTCs4YKkpMTHFZVAaReG5wHMGdgovjaGFv3ZW98RLHmaQSi2",
  "key30": "3jPqNRGdSrwyNQUzgPF4veeAuQ2daHs2XbB7nsHeUjdJ4tmXhv5Cn42z8TGH6Zk4ZBY8cokPeeiEPmpSfqY6R9Ft",
  "key31": "27GshebRRbtgLfCBWXQQ3yqmCmJrZcJaTrygtdcEFoUcCtAvD4iaKreM1qBVKRKbLiAPhZrCZMqAt6Sfbtg1oVKe",
  "key32": "4aAqNMo7ncJhhDSn8CYnTgYdk6keyZHxsRicduuEXZ6WpThQbNPkUoyRHExnwRjmZdsF86obviMQe7XYJivhb2hb",
  "key33": "3k9Nc7kdRj8iZKschLbskeHa63VeoEGjfpFqv8C74g5xmV72fF8bf1sT5339JUdE85jDE14M3oUf9gmGZHYQ4ivp"
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
