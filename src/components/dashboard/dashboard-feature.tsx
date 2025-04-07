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
    "zVnxKcVCcMnTjok2hHBFScKjLkRrUXJqNiADwQ2zQBEomQo91iXWn3PjSWDTN8rn9XjQxR64Vnu9gziU9ckp7wS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qZxCCsYPBm4Kc468BtDyq8sB7iG51RvEP8bB2dz1GP2iAWgE5r3JHJy979R7EeMvP6oBBYcJoNEjGCKcBfcwGwA",
  "key1": "5LRikfhKdkyvF4LWaCLjWEQ6cZ1cexvEPCmetshz1oEZg7MfNBZfezCTh8odwZTHVZZLpYc1dJLiAtPPQHkmTXA9",
  "key2": "S4bVR7bbDAjyRA5bX51tDvVMTc9iSNkogyGPpfNCoHRF4Ruvkquq9fKQ5QMXdYns5fBVdPeCzcwo5MqL2cLHpLV",
  "key3": "47izYTd4m1TpsQNWZ3s9QtRf7JL9ZE3XkxdpTcXRKxjAhL43uYX5dxuMmZYhBsEqVbsbWTJXbALwfrpdNjTeMQob",
  "key4": "3oQwAokzdDkvCBb2eUy3nozptfcQm7xf98xZ5oiCbXyzngi1MAxQEuhfjk9G2nUmfRQugiU1Jchv2gpoygbc5UwA",
  "key5": "5hzHhushXndSNucdZiaMyStbSvQbLbBrYQ3Sg7jKwdJZA36G48rnwFaw13vakNARchewby17cyW3BGGjRP24XkYP",
  "key6": "5fYt5DPZbiF1Tpg1A7FzF5zzVHCWtm7DUVKTpn4ASwgmC2AwFd5FtquCVZffoctcvoHZqE518asAN3BtRzRRPfNy",
  "key7": "5pQSjC5VwAVfZZGvuUKFfLaLHngMnju5WETRrqhDhQYsVzKy5dwyBac1CNX1hQBhPuFjPLefvKhwjTYceXt6gSPD",
  "key8": "5SYzoXqHwW9wTGJctipcsodWGCuCNTJ5FJXsB7x8P5maJbF1H9gGWr1SfwVshe4Zujqy9rbZ7u6JWwGq4TMvGAV3",
  "key9": "5Ry9Xck6Wy5Xgu7feF2kMsgUGehxAAoK8KSzCtss2bYMFzoosesh39f67GYGvvo6jg2nSUuhemgz5RsSJuQcAfdq",
  "key10": "5LB4bL1uEroNaYgQGfePvT1UGPyztRHQRuidffN3L8s65ZmrMpSTPJqmuTZK52kGQ5dMaakPDatAMTfzJkXRFuaC",
  "key11": "Rr8JGZM5uxwJDhYypYKvSZSHwyat7nEGPDtxhCjo7hxV5wATYb3AL2JE8n54Dko9arpkMJ6Z1hzbhk1eDaw5YQx",
  "key12": "3uKqVjoabFr6JYCAqmWu2P97SbvAQV7SiAd7yQX8F8XPT7nc382Y9DRTynKhCpqWzQ7QoDo4AwYoCPzjDNjerdp2",
  "key13": "2qEJxnqC5vCRZaXtxMxTt9zczwjGbqKTFToZBNztC2ARt22d7P8hz9221PWT5az66epVGRAreqeSi38E56M63xU8",
  "key14": "4HQihSMZyzeyoxSYaT9pVPs69WE4aCuPiqdaPEJ5oHQgZisF9qWt4sjJBkSZviMfj48jiCdSKpqGo2NNEkpPareD",
  "key15": "4DU777E3n2yzb6UF5UeS68MnnErRgKjD2xyTbvcGg114HJ5fKC5VkRaeA8CEk9uvzToZcBTQYGZD3ABMZyFGRKn2",
  "key16": "2mc7WEsojtWFFs1Lg8xhYgZMgSeRBJrEtT7FuMY7EqogC9NXaTWLdXfccWf5GZLNpcrfT9Vj7XUYHXt9bCobYDhw",
  "key17": "3GBcMxadApF6WWtM65rK2RzHVJzrSFBMvacSXH6jMKG18aNTk7hNLma9VwReYm4QNhrKCff1VKhrSVB2xPYeyL71",
  "key18": "5cw2RYrPtKFfZY4pRKxGGbHEdC1q9crE3qbhDfDY4oW7Ykf6Z2g5yYz3brgZqEDQGhZy545bLLvNiLVQ3DrNuXT5",
  "key19": "4TYFF7gLyUub8ft8juXEd38jHKxXDT9WHeD6XvFE2g9y8Xe7NTz3fhgK8tt2uAHUJYp8WeijtUaZ3jKtXqk5VzLB",
  "key20": "4KyZ4YLvwckzwEzDwB11MeyiUVT4pmhyzFVAutavSdTKjYgTgCW8rFWpzDDLbF9DKZPfbXCDGkupGFiQwtU3WVPT",
  "key21": "4sQ27n8UNN5a68VDMVsk1zf7sf5DJS5Sd4Y5ptdGoiQ4S3kiU3nj2ax4DZzaLTkTUuf7jFgcUCqKQMKHZyAzZnSm",
  "key22": "X5mZak1EKSYBLp6ZiuDEy9sLz249TXnGKBUZn9bUdEaz4x3YsWHkUzsWca7VMEjkGVi9NeCtZwfUAkYmwBVBggH",
  "key23": "4To9HCS62sS65x3sBewGhgzoHrQ3MAKEcEmLrkjDmktNWHVPSsGdYyFQfWRd6qVMAzUS4CE5Qjut9pYqnvFJKCBP",
  "key24": "4SH3xvL6rGFWTxt5WPgyNfvWj2MLuhftotRKCbZ1oYprCLnsNybDeVj3nF11i98Qnu64TE5oTDv4XMSeET4N7DB1",
  "key25": "2nUdZVkUhrdTYSZzrPA4kFB35bxKfwKVQgcJS6cxzhrR7yWcKt5EhXuzFTV8267NhbsHq47C2d4jpzubyWhPgVAV",
  "key26": "5mRTMiKJmn1UfWCjSxUNsVHZYfk5YyCEnaZenGVJ3ZLeNxqsTA62hbxRFuVggkCMvkyZVj54zU3j6PLBxFFkZNZH",
  "key27": "5ADtU62xAbBvxMMW75WPwBq1FmBKXUiR6LMAfHPBVDLFozweuaNscfbghM4WpY3vmbkbXLEmZSwb2nqR35e3qnvn",
  "key28": "2G5idvcfL1Pgd4HETxqASt7wKvKSXGKjyt4xMjSE9MfMYtWwe4o3nS9MRWJbJjgWbviVN64d6URjXMTJFpocn1Cf",
  "key29": "52gT9aezEw3rAxiXAXr2hnj4JiyGsF7tughowQ4KVKshabD15kgJXGJiZzraYqDwT6FMajkRYE1GyWuJ8KbnJVq4",
  "key30": "49EReaoZFmF93Lsd6mrrMUZFoNuexy2RXu5213FLpYCL4iVvrtBiDgfe3nwuuwKC6bdvYRmH3mNTKhPfvLKup8Fq",
  "key31": "5JPyj6WnR71Q6YAUfmDQ5zMM2FzbTPi4cp3yCbLoK6vUSk2U8va4WpU3jQhZcnZBQfKZwFBDJ1HryyKdHaVsiXbY",
  "key32": "4xyWgG8ZadV1ZKeUiZusrikCiQEk6wdt3Vv5U1qccxsmfawySedquYhp3w5aL54GJJBXkUGhq3gX5fveWx4vAYsn",
  "key33": "GjVipVS1hzFozFDuVrfkDzXQVwgvmF7t8ZvRxRpNUpMeHXYcuaVDd4DgRCNzVvceUeEgBUmi93MLmy8cRuhnzRB",
  "key34": "2NAbfn31GnDbU73ysp19L5XTm2mexRpy4N1BmRN3mUtYgF8PFjA43DcsMRiYmJLGtfaXYr4rt9tyRYf1ZCeVGsqb",
  "key35": "4HxsuCCT9FooJ9Jvdodab5uBo48MnZyQGgsXEYUDqrDwz4jaYKLnSoy7rGk3fcpdno69eQbctfsnp7LHnxsM9w7G",
  "key36": "dDZsktYnkP5MX9Z3NbKkGxFpyeYSvhLsPdL5vsSv8BfsMCbrbUVXPgwaU8Qx9ZBznkEA5YY3PV8bGqbx4KyBLCu",
  "key37": "46R9AbakpbQRnEphV3jt63p4wGy1zPGmVg1eQVFkL3CGixQJrjMfaY4RGFhjbN5khCpSdZv8vLJZfs8FQZLWzR1W",
  "key38": "3ZjBhJRNFtpCD41ckC7cScPsDJdkFYcSD71sCCRk8Uw3kArVVgSw9VGbT7CwVCg5gzfXLzz9j4hXoPsANse9R3g",
  "key39": "3wzpLqMxGyozKT2fsDMDK56C27LwHa43Snt9VEz7iZ2LpTbb1nZ5AFMAmuyEtVmsZ3ZfNYcD3HWo8BeGC4pVjs8a",
  "key40": "2i2KnngWgzA3bH69rANzYkCFmJBEsMt87f6weMPBLRrgbMf5YgpnHDC7mrgMuFcQ6KvzJQaqnHgVMyzHzpugyh7r",
  "key41": "4WfiHZ2bv17Tz13UoiGMKVAbtH4Dvv9q36PDPyWQ1eqJaA62ME9MdqceXJLtPT7yZpptqchuHZp9Y32YrEuUCXPs",
  "key42": "s9C6J8hx2mnzoaqTxtueFbD2wwTK2acoKrcWiP34rh4v55XNCMJiFVhz8jUXPVcUnrge7SW6aTZ6U2eiVrA2JkH",
  "key43": "5qwBGAjvQnxdCuHf2kBF73i4CLAKyLfADjVG92haeokEvEkt1NEqN5xhtZoXMauA6MXiqqFSnpuiGW6QkCQZwSq9",
  "key44": "2Dn2Lr3WKDV1yzhVn8wAnu1o67YPAuA1SYoUxDV4oG9VpB9U5cgJovakRyc3RYHJKraAAVY88d1w7qfyHcRcBPfp"
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
