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
    "5kfhSiGSUFz2V9AvUkwbLuhDNSdQr3gPFJq4cpHJXSSagV9LAysmRxJPbjn2sax1qMARFEgzd6qWP8Qst6mAjMHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GBwfqDXDUs3GAtdWgi5QU7i7q28rBW9s2DbH66wyNcpLfpmwkEUfVn6vqhGEyasUQaA14GuzvjjxFSeMBRTkMQq",
  "key1": "2wSpmisoqjj77auJFNGQf6oeTQsoapG1FkTjpV4rWDXL1NufVq91UMcqUAkTTDNhUmzs85dy9osz9BSdfbd5zjAS",
  "key2": "26TFP2RTGzdobkkvcaRzWuDhfRrciYvs4eBcxQefbWaQLVdKUwbEnbwZxs449JM9gsTavyLUh5tzUqk1zhPaxAYP",
  "key3": "4h4A9Zdo5EkNf8w1cBGUuT86qRwpdhG47hNuGQGMLadijFyzKfEDhQ7crh99Yu8GiVPPJF8Hp6hHXR7MEpEwt7Su",
  "key4": "2N2wgBs3dBX4wi6KSTEJDdrBVSDUBo636qTcQvNpaAjtTvpixHjtH3NPKNogJFLeyTco8aTx5sRkevpYpak3BYBG",
  "key5": "2dQrcHe6jNYiRiCxvjyskhva7aUmubNddgPBsLfHWAsVtErjuRHdkFuH5SzDo1xaaPy3TR8VPQc6NCcCnEqzczTF",
  "key6": "EXcm9kAZcd91GJyapLF5vXrH9uB7C6p9eYUJ56QD7m9Ez6z13zKdXZCS9i7KkCvwmpmiR6EAdkWh46V54euPZYy",
  "key7": "5Xjn89F2uThbgZzC8bMoMnx3Xapf6de1h7rrotsz6cb9BbJTTbqzG5QjkyxZ4DRzZz7nMab1PAJopw2ADaB2uCvM",
  "key8": "3Nxf1b1zVdUSnj9c8wC8Zb1D4gPqF4sfRm7sSaviZjT6Um9TbmKSstNsY2D86hibSHvJR3j4hKaGkpTJb4T4ygCj",
  "key9": "51Wr1V2sGm1Bvp2couZy7kX7TJxmwtBzTaB8dAcSeVSes2AUDbcLwmBa6QprQi1CS1Z1FeKGrXKY4k17sKsSjfjC",
  "key10": "5HieZSHhyKNdwYixDAuKvkvXdVrNWCUfdU8bBF2XGAKWvyiRKyg6ToDLK4tLXH8LutoiqZzfj4MPZSyWjzQekysk",
  "key11": "57uVSatMnihHh8RdeNN2vg3qe6aeMxcdcS3yqZzreuJmRLDKypRoAf1HqEBK5ZDMf9Sm7XLGdfeynE7y1pMjyv4J",
  "key12": "4XHWyYEU8EiyswunxGJXmVM5JzwgJyjhD4iE9cDRT3fQtn5wswQ8wuZp1fDWnYRutyPKdpHHDZSMny59eEPgzs12",
  "key13": "2qQ9tGh39CEpVvpE4sH7RxJp6TaLRGcHYeeVUsy4xfBN6xBBFJRduFhmcVAw7neqburRW9cirFVmoMTDb4msqiNG",
  "key14": "27wzqy5xn91sv81Ra1iyKsWsE4Npjfjvsn3B4xHpyRVbJicrefwDkTDu51tK772zFERmBW5FCesGrmYbB4fEBWzd",
  "key15": "5UkJoNKQ5iB1DHSz1XK59jNdaM3j5eqiRYNkQwX8dLKBShW2TjSg1ja3qXdk7bibH4dddT3K5iCAysSerPMppuQv",
  "key16": "4xwekYeuxV5T4twNPmBqJC6GvtJLRhyGKSWunASf11uYccWaZsvB8zd3CSCqNVYCxYytR2Ab17kDm3nHC1MCE5PQ",
  "key17": "Uy6tECoxgAHrGjkZfF2fPYonhZgUus7ure6cnYqR6KVuVRWmD2cvTUHuNxkZFQkSSD5kwWNHTt8PmLmfPbR7GMz",
  "key18": "2RXgqx8kag4DMgPcRXuxx6EmpMcfG6ecXS9BFPdSD4jND1M2kK8PpLpooW6GpuZYMLR6KTGVN7rnzWnsbNYtEZFN",
  "key19": "HekigUKuHLE78LJGWihkkzmuXE8Bvh2m3hHJTV5zKuAhLB8FtBeHXGsox97SqiLBYKwf2FduoQDkfPgM4ME7tVA",
  "key20": "5EATnAwuPNuHszTPcbZo9VvFDbmP2U5hQydq5zJCQUb2n7wCkARquGXPVnKtGwMk5ohktKsi6GBFfn4UbRhXusQy",
  "key21": "3xQUVPz8aPUJMxYPNpW9mxmW547N9yRxVFnysj6jPfeFGZkcWSG8G133mj75VSpEcoj9KAnGE5q7EgkXdxf4maUm",
  "key22": "5u3BskM6wzfRrEBoGjSpzoQVFA9ZEgKgYP6rsYbFhpRCLoVsizKxcBhZyYezmz7Siio1Tr6LQhSYhFU2g69hSRxb",
  "key23": "35Vawnv8hA7ingTi1KaPBqdWDVeEUHer9N32XMRgXNVUpTb6tVVYQkC6h67576boAQfuS3EurHYgpNLteAoiYnii",
  "key24": "cxeggvccY8rfqfaHtk4nC1wEBwBPELjHARgw1ADnCK2HDuHVuCekvEZRZ93wEBwK48VqS2amm5woTRkSEz38doY",
  "key25": "62a7moRBjh267PWi63dXiULfRi7VrdozAW4yFnuhKgYgK2FA1WBbNMdis2sgzYYkox6QM9csYbsZhCSnKsC1PaUE",
  "key26": "WiU5d1Tu59qH4qaC8csjWJwi4rC9mUvWGsAzX4ZKj49gazu19SMU4ZSUwSjJBE7YvqwWJ1fhacDe8P5vKsnwLso",
  "key27": "4rydJhb2to4Z11o7mtpXBJXnJMtkEurytoicqnD6CWqna8qpAdmuWmDA63W9i7w1iAjWSSyCFNeeT6noHaXJM21X",
  "key28": "2B17eoFCzMee6AS5Gd8aLCbsFdujiqStSUF5sQqGWFWVUriXr2rDLmJrYhc9AyCPjyc614tu5SNfLeNThVyGVkkG",
  "key29": "2DJZi4A3CNHQyxFSv9CvRq9cGPWrnqnmqRgQBpEPaNNW76itZnX9jJxEmwP2YPJiPBgZdAbmt2deE7UxyxS78RKK",
  "key30": "5FCTCUstYMih9axJz7LwoLLyfZoMNzHayJLYh8u4MDorZSVLVPRVmsY7Rp5hSoDswZEgVjU1QPYjSgxXjPxdVVRA",
  "key31": "WjLdKUrAf8F4eu5oju7fpuEuUnzQ7cBqKXH3gunZJn2DfcPtf4Nk2pS2PgqaRSrs1MowPgatKks9r6rMdyUSGhR"
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
