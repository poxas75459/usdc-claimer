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
    "578c5hRRbh6fHY9SkcA5Q3taRageCWYYN192d6eYCr9fBCG7pzixf5Jb4FLtBrQvyQ2X23GmvXHP6BK8rjDxHUa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56LyJMaVWxiws1Aur13GGbzQuHtghSPGnQfqm7qRNm8tCdVqLk4aUzQpusBFXFhFQHuV5jJcTshBSZZB19rH2MhX",
  "key1": "5Dsf82V24cdod4uHG6kQBS3ZMMjrZnuL3KmhY5WFbqxpBVVvv9A9eqL7U4GaHRKmMSRrsu8SFgVriSMSwYmbkb38",
  "key2": "3zS3zmLbnPotbHJHm1mf2kHf9dYkKRb1zMLETzWqRNV2XkNyv8EgM7zck6Rgi5ZnMeVkQHHiLoSe4o95qGJAGJx8",
  "key3": "9dBYwoi5LWLFPwVaXj9zZAfVHhVECfyahaKWGZMi3f7gdFRrDhHGqLnKxzN8gHACxFBeaLYPdGEXKsYc8XYBeje",
  "key4": "4cLaHNJKjbczQBcC2Ddqm9jH2GDEL9SCbMwxMfzywdTyimCUaRMsHf8ST697ebaA3iBewoJUtA5yxXTQ6hvu1tqG",
  "key5": "3M29eaopZQ1q3Htvvxqv51sa7ZvfAjHFGVkAunLgusKXvT6wM87yzmd8CqzARA8gK9Xdm6kZQiczSCvGZWk62VmB",
  "key6": "4tjWQjx4eYxNikfQAL3Urp4wMJKDVMe3n2VX8FfeSH75avYdzoJwdf5NRz7dxUginFPSJopVEd3zh5DD3GTPgWoG",
  "key7": "3qTAjG44BHn1WsDFPu7wC4T8cAdppBpueBtdXZsDH92ovYFYpkCcX6ZkXSCGM4WrFGy9Poy6NRmZyAtrvLEC4ZwA",
  "key8": "T68yAHrT8bVe9ifv38dE77QWYbbXfzMtEBpiuo8PtN5DiwpHJoZdZGtsqGr291L5Z7yWigzWXKtcrNemncXDZoR",
  "key9": "3rjgQvSq4Ch6CZg8mMPAkAmpfp2DrEp8kgk8Fqo2vuNDqwASN1YpSQyG5pDz2m9wnezr74HMhUjGShD2yeFrf9kC",
  "key10": "84BwPm2szoDyrQUWQhNPXvh1kx8PusgDLu1pSby2h5Bp4Yd52ytL2qVXnF36AUfaSyfM1sDw44UwPiouRkezjBa",
  "key11": "56CCm8kaC9Bv9knDRZGTYJ5NXmWkMzbGX1kX6eBmqSfTtca9LsWhX5zc8hBzUBKJdrKk2FSqqYmDj5tkoN8rJVdr",
  "key12": "2iiLNWgBDT1VsEPSeZ7jV4WUh2X2issikyQDpSNqmi1ipQpcXNfCEAtoRb4ZYtaVmqiQHK16VEBHD6ykfAiWhM7s",
  "key13": "4T9XfpCUNQuz21wLnKhTfzoLCWnd8zj9otSgVB6dQG4F3xKVMo1FMY8JSr66tk9W7BJj8zjywznuH1jUXRKwGgHq",
  "key14": "3qRmk5ekRRj7xDDifyeNkoQNbnn5e2aDyzGZXj3GVnMV3vqgswvacEhRjSamqYYon9QWu6No8BYFGykRQukhZYcy",
  "key15": "2tLqB5PHTerQCDbsFgdnmvMhE449SSPkmXbbLvf6x2nQfgFheL7Bkekh8mCGdW6XKAvTnWagK2nRocpHyvaC3VBn",
  "key16": "2ZTe9Cihg2EnkaS72vdHQLYW3DgG1RskMijBavapbYuXyMYWp3kZdc29xDHhpYgfLnJJ4UrnKANugqvUc33yLxYY",
  "key17": "2BD9p7NaqoG9FzZHTczGjHnYkznk16AbgtBe3YLE3eRN9a6kZvaV2PHzDyY65o3SpGSNhagfPSmPBsLfbwdX4jn5",
  "key18": "2bEXXdPiL5VYZfedkiwYDF8fzktJHojGud7AhjsqTLdctfhsiLGsD4D3qieYGiqTnXoBXcRXH28sZsA9wVJuhKhZ",
  "key19": "9mCeDxnAnQigyPx3S8a8uKpqcTZJZXQFSxh53SJ1EnGcZibaS19gZnSeAgmbdpVgT6V9RDGVDSZ2gVBaYe7izQk",
  "key20": "5ruMKyR1FFGZ5QHVURBXiDjQEPunRi6xpwLdxeeo7Dn8MDKqsa8BrnnqzbjyNinEHdHhZHaVvKEJ4J5jpk974MD3",
  "key21": "3dZ7Z2AF2Rv6U7Uq88kogSpvZgCzcwjvryQ7TY1qjAUrzyYQvgyzhWf3FGxCD4AEq1cBDQRHKm8MmFBdkgxjr1cu",
  "key22": "4TrxrmSBen2fpSx7XZAuUKCrcZE3763AYtHBAzaRjxtXuTS34sWEALRbWZZaZq8NrPVpJcyBjiYU6FPVdS8TiNkx",
  "key23": "5bjzE4anUA2g2kUNnB7nhT9635YGhgfJR8sY3BeVQzPDi7MxCLJKXPwfUJ1SaGTZJTPXrJUebXZhHhRCXWumxqzs",
  "key24": "36ateu3PVsW4bG3F7kCAiVyTagxMBtghoE71DDe4X8sRzznP3aR4wmGZ1aKptyVoycS9471rxMarVTjKUxE98P1i",
  "key25": "3BAzpawNphgKtv6fN2DfN2jguQe8nxM3vuL6v5zAqzX5y9z9A4a7uukR42ErtZEY9tfGUydR7AVLD8LrUmtJA2yM",
  "key26": "5UZW4aWormWdJ9UEYzNMFiRajqGidcG3e5QBCiycQQtEnQeyp22iYS1eFRorwC3uNawZJwFMcvFy9aRF5AzUqqgv",
  "key27": "2K152QTDHe1wGvmxf2Gyz2zB7rimo1rnM3nZUe9jxxTKyAhuz7XZ8AhxUkZpceKs6fhkZmarZYPV9Hpg8oeyi2RY",
  "key28": "5gG213gnus3oKdufTyi4LvjKLWZanKpGwLn4u8tYBLRVyza2KzvxYs7Gez37p6K9rdYGi6oNmHAupYJYVTxFeWbS",
  "key29": "3myaUdoWz8M9wnjJhxAKMXf1sdRwcdazWwZL2d4sJxNMjgiYnphZGMCuyD1seVr3UjPDxJDePUEGurEQ5FZUrLXc",
  "key30": "4nk1ptArymyTHaaxNmGA28VrUNLVmJCJnWMKr5Xh5sYgouq5AA8SFGWwtUtKJHEqdQ7rM3Qv25uvYFCGWbHVwnsB",
  "key31": "23tSaJ1nVBQYgyVz4nsdXeTwEHydwW6qtyxm2fp2Ke6Dp2SX5LeJUG2JZrGPkDZjN27Gwwb5isdnVTMtRhFpeC3n",
  "key32": "2Ecge5XeyvhqygVsxQFBkXJCYpCB6V2KVKNbcy5Ava5L2eVbpgfsTTvLMgqjGoZxdbacAuTAj6TCLZLV4t7wL1BW"
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
