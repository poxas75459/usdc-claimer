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
    "21b38QbhvnBmQhW9bpdC7Qf6DHTKACgU8NbVacjGURsRiTiPatC4HiZ7ERbRWGqRZhn7Yug7Zk8GMt9xRRhMSzL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R5KX6NDfi4eou8xZ8nMQFQaky5FdcPgPWgTeMuotAQXAZRv6rcrvg8DXgfkNfDHHLDg4zoGm65Tekc2Z8jjX2eM",
  "key1": "4F6HADsnSNsYoPqrH2cYQwgJVkCemLMmHhWJxWn2h6ukBqW6KkjGYZjXNmL2ad63rjtSExR15oNqqoxGn4GwQjct",
  "key2": "4P3o3BwVFtkX8UahEy5z6MfmbH51EtkUbEpDNpdXfXg9gLdmdWFMhU28846k2upFkw9yURTdBhzvYDYEiFfG6rEM",
  "key3": "QmfU2a2wQC1mQ489XiPfSeZiZvgmjMCNsUw5FgeyNMTyK2ZxqDwLqasJzPkh7a6mLND335fnMdf72Pwy42xtCEN",
  "key4": "5cbDKgWXAULcgo4yQ6SzTb2tZz16MtNziXhRGrpMiwz77HwU1mrGo4NoFfrCkirKctjmd11gscKrJCA7BfLRkgeq",
  "key5": "3AV2eyR8A3mAif27qGFb83WbnB6M4tSm21PMAwowFR7Pd8DGkaRYaBxY3yRvEoFUvZrnSGAS85uuB3ds9Tk2xUd3",
  "key6": "24MevuREgygirnCXtxHssKgzpSn1QBseoFuAhvDcfikiXwh62YxaKhWq45iCxf2RjE7JSdouryqz4XkqcFwjof12",
  "key7": "3rpzNVPY6pH4iVP3mnvw5vQNMPAwzcKFNLicx8EvPRnWK2r5aqAdFHEC2jPF2UQTfPeJyJ5fHb3k12ACHnEnpc4p",
  "key8": "2TV8ZyGndA9QhUpPQwt3iGRMpkbmnoc7DezmQPxZbgn6EbAFVa328FKB7hNaU5rzXJVqBiJnQDFbtNNDLSzjiRNk",
  "key9": "4XjpKLNgUuS6LdiwLG6YwoLtuoUZ2v3imGfJS3Z3n3zMvsx4TJ4vbvtkuZN64DTMXhWAdHv4n1bKs8dUShNAvx2P",
  "key10": "235ZAWGVfrSyBUMPU6QK8zBXHX6LdqJVNwAKzYGJkVgQiDbx52MWzEmc7axewASmDVZUYTFUXG5MdLnqLjkRXrEe",
  "key11": "3NfN9TpT21YTX4zUJNG1jKmZAKu31yV2e3xgLa65Bazry7ZveWLuytuDryEW8HWc78Fx22CdS79DGUxnu5Pou9xn",
  "key12": "5Q73hjgVQKEEX5pbeXmp8HK73KxaxU6FnNbYy1MgHtL3xHzdCzeMJWKe2ZQ7sNB27rCrbY9EAYNgjwL9pwh6VEAa",
  "key13": "3njzARJ7D8RzgMifYsSCUJsCZFpSwL4Dg82ftdruQUtNUHJGZRkhyL4qqxkVkpThwQbgkGNcVZr7aasgDJg2U1cx",
  "key14": "5BBT4MUQQX55xQ7LQmCMxpHevZ8f9iRNf893XTahxwTFxRMqWyDoZUfuFfDopvBLZPpNEBuBhYPFPfGuYmrnP5De",
  "key15": "2dtTmd4oYQ1wqoWowxFLBxU2tBJ9G9NqM8tuNUQwTmFt4wsei569ZBEjCQGLVatUxJmxs8nRtn6zszo5cBp7QhQ5",
  "key16": "3s6rpgYbMcuDSDN85U8i9br76RR8wdtXRohjLrAdiKuzNsjY9uNL83kMetK7hiFKkd8LuNYDjMzqHiAvwRyBEy1z",
  "key17": "5UcqfbFPvPugpBRkUidvnN3ZbkvQoFeoBybXEW7Fp8zXnFXiKBuMfTM9TcuxqxkUXJgNzkcxYWQv6iBrssBsipym",
  "key18": "3eoh5PHgWMHmBCenRWWLUso2WG2pZ5scp8Hxk8Dh6ynAXaXyRorvEivRiSwdMVoLiK5cGxJb3jLLzQTpS72kuhfG",
  "key19": "5hrB1hvYJfp4M36YJAPqxi2PPhztMapgRBwNH8uidmLekSEesFd19YJufeE3nrzgd6soceLiZaXhTpDNh1tMZUdv",
  "key20": "24Jigvw8VCQj4xP8HW1Zfm6jQz2V4gw23xN2xXKW4bx1woN8UG9edPhhXPFKfgbg1APaJJneyHj6nAkwMrcCdn7t",
  "key21": "HqGvbhGQWd8Ji6kgk5evwvLw1VCmPjWGtZKh4LcD7cRb8qMu87KQPR9UWxTr7Q9W1Lbe3vm1uZx8vexirFMumP1",
  "key22": "27zfW3sAFg5CDhf5CnCXQdkNUaYTv8UEKMPhFz99AWSXdMux4x2ptTao9pqifyamGHjp1ENN2sHPrGi1yeaZ42RP",
  "key23": "2Q2bCR2WgUzj3UjGTDzGJY2jehT6UPuBGt2iiXDH6yZchSDRxnX2ghPanx1VFdBGfmHPsPjE3m58MUBTceipN5Xm",
  "key24": "2PSAPDxMLmygryVFTEAujD3gExVpY8EtqQEH2Uxxt6Y9Jzn3BKTjs45BoTpRAxkKpcffRCo14zj6hdqq7VuomfK6",
  "key25": "3RLLLK1vvKMochjunsAAjWAeSPL1dUNDCtFxkPfoPKtEuLmjYXDvcHAJY977wphSBvyh7QktGpyDgBjGpJBbXfWi",
  "key26": "3XHwfNvSs9S1qoisEF4TqKvQPdHisYT7aFLVTXmHRA935YRy9ZyLEY7bFwkBw8FXXhgMrQzdwV4JdNBUaqRMLsLz",
  "key27": "4iV1Cdvq5W8j6q3DvTUqaTQo1gXmD4cC587LhaCyEhRp8CUD1GkqzgaWdzwrKVR1ktrWNobchABMB7v1cY938GgH",
  "key28": "5oaVjRPqz68KDkXQAHeeFGxF5B7VaMMyT5yL62i5kMgaSE62xjP2yEGj9LEUNHCZUYTeHjBZ6TgVhyZcjFvmfHKW",
  "key29": "2YMRFspoH4YtgBUyeeeVhQYsfSemEbcECN7LsyNBjDgiEDtYuAVgyfzGj3QYcEarpqDM8avPbHNST7Dx3BKcTjMP",
  "key30": "wQ356f8Lf6Y1g8eXwY2M9WoTftuWpis74NrNsDShyQXKsqvtvHoSgeh1eHjnDgRc1jDzZKyhoymsDMyRxHWz88R",
  "key31": "26tVCmEf8W1Vox994bvRWdgSyN3Qvf4KdM5EFC9YxkvFptbRL4pUWmhcXR6cUEwKUPG1LuM5jADRGcNs4nsfdnPP",
  "key32": "3UM6udSL8JvGHGjb58modEM8SBiy6xHbBbCjqXmnTjWb5RST8D6UojR5n9i5PsQm2MRBavt3Hk2nwQAACmBoayka",
  "key33": "4dmkrmcRui5TBTtAkkAXQf5RdQMm6vbzm7ASpvUdxcLMLcHKDyNt8mxaoZnYVBwgPoNcHGCncApbYU3YnVofFQZo",
  "key34": "RnStw1aBVpbb8odufcW9WHTNyCm5wfnwaVoMVnV4RD5P4eKeeWbRz4i7noTpkoGcf2fCPdDEwH8ZZo4dCkSQBMb",
  "key35": "65Jqcmk4brrzxAeiZP64wtvpDGTC9Goocanqb2svkkX2G1yuBKAHZEGrsWubycWB8ToQ7bqSsh3xSVmeJGNh2R9A",
  "key36": "4efMVzAjkvDZurtabf9Ys64GfRdd6VxrtRqFp3VF9cuGwcLvNafE1NXkEQLxpXQAnjZ37CZs5XwSEUSC9pjP9jr6"
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
