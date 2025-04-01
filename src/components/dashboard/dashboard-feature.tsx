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
    "22MXjKc4cQLqmsgxoiFPXJpNG2nJkKKThpetshjxQJ7bHMMFUivRgLF1M6SM1B7pkCq3rGA8eYKua2B7xJ1DTs9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "81Etz1G5mg6Hziv6f7WQwbRQh6ye6EYeoVdP1NWrmq5pEZdUdMhesL9vgmS6KnPaQq33WbPuHLFvN6oFpBJrQyQ",
  "key1": "4AisQ9cjPxhSKiSSm4Xi8CjuPHqZ5u6mrV5GmCSmicYAQdPku2mmys7ZiCHnCLDVYWFM4Avrp6hj8FyfrvYYUpAu",
  "key2": "7KZ3iD4dRSAKn2NxYL68Tfh6AjvYAkbXahyYboiZs7XFcK56sHq5m895BMwbawfH57GAzb3x12XNTW8iYAniCWw",
  "key3": "mEEZX8vffXd5m6WiXQU5nPC4UH8pJA765HXBMagJY9Kz8ZEZWT9ogSDuiGRXNLJ68kX4NFi4BjjGCr1uM15Svx5",
  "key4": "3FGJcSvbgcHZa5AgNfaSatfWyVL7dU1pbNy5fjjBjBFdyYDQXTBGoRwMhC3HrRRzJaQmBXcgfFKiBtLUPvuqeGgX",
  "key5": "3LwJVGFhXVnBy75W7nu3peyAzCZVihaKb9ZyMxqLxVqh3GQGMBDowUMhLf89U7TTZ4veCRDG2J5VfGmYddK5ctHQ",
  "key6": "57eTJt9QBhbTBwqxxauvwnQsRAFVMk9Pf3zHozsTVSm4XenZ67Z4d6gJraTgSZpPRh99aj1oKXS9M9f9i3XkHu4Y",
  "key7": "5WSq58pG15nLgTW4NWi584yN9ShNg3o5CNTnUTnsrma7cwJniUMbd85TLWDoi7L6GTZZJPSnhb77utVNxop1f5z",
  "key8": "32digrkxRVzJXBYWx9tebRS9bEFjVapM5dP3iYHR8JtF5MCfXQxSqsuURPFYYHgzoU4R4md2DyrNNWFoyErjE67s",
  "key9": "3WPtKUtMVQdEdfExGxSBYJ3vT9kpdzJ3oZjHjy1TG2tn4jqXKvER338gZ2NRvM3Q7T3ennV5swZS8YF47nDwVdyd",
  "key10": "5ECSsFkRqJS1wyHc8YqYnZit2DggY2TH3cWrN7wT2xfFsABkoMLVF6zyY5pL6wPC4Y97GgN6LBi4iKMnt5Covok",
  "key11": "5XTuKqSceufahMtaDXxXB3MQrjF3vd599tS7r6LwsmadWxQ6nDeWCMDYmYeEnQ8X4rPwWtxmwVMfnFj6MCZJnMgD",
  "key12": "3KphmVso3KT11v3QPK7anSBLyqfwgbUmp1Ze8BtnJNA4gnn8tNi6GNhj2puBy2qLKAos2pfWgD8C6SopDcyWgiZJ",
  "key13": "VuQYrbvhYwL62e5UASgjZBKTxTun2oqLVbc6LLPyo7bTCQfYPp5Xdi5SBPVXQ5wLsKCmFSFFhqGSmULRT57HnTQ",
  "key14": "522EBJ8zMBSQ1kMdvhVZ7KsDdtnkfkodBta44kHf2QaWc4HhtRbWvzhQLXPxM9DkJwKJs2GQhNFYy5kp1fdxo6Zk",
  "key15": "TM4tLox2TnNw3AD1Nh2Hf4BUbiehCS7E1akCZQCEQuX4oHFuMydC2md1H4ajxjtzQXT5n9v81JV26E44tEL97Jx",
  "key16": "4kho1UKMcRmqxJj2ne3u1UR4ajTYpuCLUHiMk74SjZefGGkLWur3Mx9bchCyvPBMiasqgxH6aTHjoEaHjX3QSK5g",
  "key17": "2BGGWVTyA3YduB2E9Hoo1i48CLH2fUEBbHXQnmX3R8NzDjrvzNkpry1Z6MSVxrmN1Szxc8oxTB525FMMwHSwdgzz",
  "key18": "5C3TPtVkGy9GNGifccEVovRBboVhEQj2kJ2ZvDymYmNBEqbR2vhtkdseeVpAfc9vuFuGSWoSnaaeZpkmsMPrrwkL",
  "key19": "DitTYGCPygfFU2Hfoi473M6kiJL58mfQyrs2j8nKfgHhDsJzUrjzNX1nAP5QPxUQkfLGpsrYZYbEjUmCyr1JWw8",
  "key20": "5vS7P61k5zKAXFqaqmdDaTe72HpuxNxABH8XQouc9SvmGZRXtc85Vjxiz3fEyYD2jFGkJu51Jg9no7F1w3tMXQX3",
  "key21": "3DtcMrVRJ7UP9KF42AJEMCqtnCC7DaQzu3JCVPFRWmc8pF3gEobzsSiM8GFEmXaefqdk9XF4z4Rz5DkgTHPuhmd9",
  "key22": "5tHkZSCRyvZsaWhBTnXMfLVGaPdYoFi8CRGgSd4x3Vs4skzE48ecuNNwKLaCEmt1mggtakdGJx2atQYbWgsGx7or",
  "key23": "4sNQeaF36p6NLhAyV8QamvPjF3xGdogoxtKEMZoqXemSEpCgmypc8Xz2F9dCWSfohPVgUgG9KHbdvZ1cFHGP2aEy",
  "key24": "3XN5rNiQ9R99mvH5pm5Fqz3eaH9MfPK5aJ7ZiDLnPWMu3CqP37dNmEmntV8DafePXGiGtrquVQVwNcdpQdzcuvKL",
  "key25": "3hwiCrPAfpSu7NkTtKvrEQnh9GbwyGS8eaQEtQxcyfeGwoNmZ9uNhdwDwevUfbWbxY4u2WcgXQazfgCMz6hHtzpt"
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
