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
    "JUEfdL5Jb3kQmz9psiAdKBqRdfkguAMwsLtRpdceoro9JLszsZBjK2PDuLMmbxyZbSJTumifK8jZ5WhHcfY4Egb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kd9iGJ6ndowQrH2s6SHEMw7iyGUmxMaj7BMBeDjdtWbzBEbcWWRFqQB4sJtzBRQMNx5Xs7NMhAiojSnqyH3ADA4",
  "key1": "2Usm8Rr3zNfMaWu1TCyXVK3iJzzwUdgMiTB9QSQim2r4Zyva1waGdAtZxMEGfG6KwcmCpgqFDchUbZZuDwCTcGb9",
  "key2": "aF12oQPYxtM2dHfbeSvTU8yjdCrMkAEnwowh6qmTt4jjk4RoF11Agy7vfbNrJXBRSZS6z3bdQUDKeuD36xYfGpH",
  "key3": "4AtMRE1jnP6banKHdJQsLcWJ9SNniapxuK3b1atEcmG2UPJEBoAneNENkGnhFA913gYrofvwvHH41iSf3HQdoaQ1",
  "key4": "2FyhRUPrpNDgCsXtVswwnfCksL1GzhRSuTM9AFjcdYVubsCSu3CHySb3QgbkTCeAkXFEjfRN1LnxRWhw41HwmvS5",
  "key5": "3ApnQrBzrpXEuJ4cx1HaFKM6k7V1YtEuinGzAncRQSGv2SD2q5AvRcouJWP6VJHy8uZWRV7h7hukwiFVmVFTZcox",
  "key6": "31mjmCK4JRBG3AZ9az2H7Bni4LPcXJr8yhLSVn76Ydc8cG2JVE5TN6rhp1sKBVFZ7PqLpLoiu6uEWBQKnoCLXbTo",
  "key7": "4NnKuTotmJkLdQzCBqQAUGhQp51UKsmzi5d8fh4Uve3hnBr8DykhiZxsnE5EPqCpCX4Tqo3QdFyVprTTg9E7mNdr",
  "key8": "wg7jxWYYQtUasExmnyFV23vuuzg1EbxBU2wwxWfLpy7PXDSSf2nB7Eib8ZLuad3HhWHk1EaMZrE5YACTg8NoBpT",
  "key9": "5DtpCHvsEP7W9RcrKZCjhUDoHfWdS99DY9f6qhiHnBz54y5F7JVzLnd5jUFBVh6Sn1qUdDUAXyBCdniyhhjidUAr",
  "key10": "a1Dq2HMeLwAgmPemkY9tWyo6HXWvpjSUyuWYBZrEapzxq5LbWVZ9BjCtXQcEywFLyz7SgJdGwkp1apssfmLmG2w",
  "key11": "27t94LsMrdsNAGEHL8bPFpkH3eAeznSGrZ695vFEayH9JwtmGzbiteXV7TfBn8kw5Djy63CbbU1idsr5ZtsVSTdz",
  "key12": "39stzja94eo4PmezT22F1Q3neVrHjUPx5KefQaNrfbgPze9SxEJEEBwUXxTyGjyPxKJWRhtBkUNjEuZ8HnZXLJx8",
  "key13": "afN5azhXKumJVK9jzrBGDwjQ5XbNcXcJuPSNFUXWjBZ4XwusHmNh1Z8xTACFM3p444c7E6LK5MUxtVgk7LSXecL",
  "key14": "52gxtNS5nKqsY3mzGfGspsytAJqrDL4Xp7TRezuNm2UQT1NM3zBArR9i3mPdS1zksvBRdqz6D58swkFunCJawnso",
  "key15": "5i4G26SHGqaR2LurdYaB2F745f4GW8gfdRLB2QGEMQ6pqi7nDnoKE4kv9jM57ZELaRamWRKWA9VZmuag6eqVpKPk",
  "key16": "5pR1TVqGeVjhiwyZfjLQzy5rmBP3GhieiywZkABMgE5BLMRr6GaTaY53PhEKsn6sjTe3C9ZZdLvTvu1ZoP1iQn9a",
  "key17": "4MQFshNwcZrd3iPf6X66Kw39NmhLq1uKrAzYgd37kjHLJfap9oiMa6sHXjghiNa4K9zfqByEPEjBEFeJk11NGFQW",
  "key18": "5MBXctnm48Q6gXpWczTFejxrrJe4RjR6wXgefeyfxSM7PyeifhALqJDwCrhzZkN4vcijX1XYXuezNUuG9YKMTTzW",
  "key19": "5WxrW2Z2q1Nbt7JHy6cPaPJUrXGRRJji9nUwvWvoaSmfkC7Uf8AU3pC8PpJ5GrsAqnLTHvKX2Ctjt4BiNpe96V8T",
  "key20": "3obdrVV3RWWPmpvoLDN36ieGsofSnHRRgqQLEPunbhrwYpELL2bHuhLdPvEjFRuU2Gan99Uny9pMB9JAx3pbgQTQ",
  "key21": "5vpHKnKiQU338CBedkEETxzQoJTTyztnozAR6DcDSdA6q6Rc1Yr3ith66yGfdmdcbWgARTmFAzAjwdXtPthZQLN6",
  "key22": "TLZmqrfLTptMHdGJoL1jyGH4mXW3xJKmZEEcEry5BaZ4d4UjUDNDp46efzVzghLcic5W5KvWSMBTMcS36vKSWpZ",
  "key23": "25RmurBGjGbNs7Hkpe1sUJAR8koFFWK9Zaao5WZ4K71XWLSHC3WtJNbkVutE1j86Zi3SyaedvZLLv6cyMt3EWG1W",
  "key24": "2khVdrgX4U1mmM8T2EYy3SLA9ratt8415AVhhfkmrbYqsgCqYJvmxBaRPJGhDHtBKBnSUJXnLPZAQzFfpxsGbG4K",
  "key25": "3X1L95K1Yakn2vPicuMCzfXGwkyVNRksTgKvdhxRFzE544V8TxNvc5ZYxmwftaYRp7ZTs9bUi6CVE4igyQVRv6VX",
  "key26": "4KqQct6ubjWbEuzNDNV925otxt6hBwXvBhHKR1cmz4J3pjenqeVskps4ivckZhXsxdauKPSUiF7oR2jqYxeqUQav",
  "key27": "3w91JeYb94DeQ7wvyVhiZjDj5tpj8Ma6oQTjudKGEPicnrtjm57sHcW4pLPNuSawx4XJTA9BD4ydbVzAJXELBEei",
  "key28": "9THDQrB6iVeDoDbDVubBf6n1zvkxDsFi7zZou5oTAnEKCU5YGHzpUV42YbEUoyjpm4vk2xZux35DMoPykntgsgU",
  "key29": "4aMAoueZEFjAgBTP9mWeeiG9Jwhcc4MJPkj9XduRs2ZHTQGFDxuQiFxFEfq3UCLiN4ZDP3ESfasE9YSwcwsZqKi3"
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
