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
    "4Dgd2RpAJngYd9MRTRbfKFnv8zgRWJYZRdmuwcQdHunXLefXWrrRQ1zDFKuZaWUuvtTdVA8QjBDC6n9umPvPdCww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xf8KL2nXMkbESrGe1k5VrHzeyc7vffJxHkd4KwRgtSre68xecHYeGZJQiNS9BsBYT2ytHGKLEzwPJG2Hq6JXe1p",
  "key1": "2P1dbXvVRE5KDnX4KZGffxhCkSspgR7eud9TbGDzLiXHqtj1XXCPfUKi6eZ8uDKLyCwKk2khKQx5mdy3RH8YDemP",
  "key2": "3BuZ1SqBwTWm6eDBzFUSqBD73Eu7dty4LHL2kvmZD61AkMPaD2v71wrY1no29MuY26Uhcotpw9TzgGPJ6L7thzGb",
  "key3": "5kfdd3UjbKdTAYhjjtZmw3287W375nBardHaNQW4xQpEVgYPZYfYW7kuf5FjSRMxc1vHz9yY3hqYWUMRzBXofEvp",
  "key4": "36z6KYreVdG1rmDfXNLJkPosuGLkX8AxRSxeDdyf8ttrW5c38ZkMM9D3RfPrZ111FAzLdgjoNVZepnQ8moZ3BneK",
  "key5": "4B2NdHV2qmsUCzwZpBX6CFUCGUGkou1TuaUiRwJk73csAgdee8qkrqgNdFoKXSZbxRdZzWDg5LoXcezGCcwLs2XY",
  "key6": "43LrTmJYuPUYgFbD4XpDSBBe5QwKLcfbvsSwzBz6Rxi7hUGkrmosdrYppvQDZ2qrgQBC9sYJ2VpSp4hhW6Wpk2Nm",
  "key7": "4ngAyb6jr1ka4uyX1am8KgW52TbzyHoZtVhf3P4dSoeCMLVcVgySgdTMZsBDzrfH2dN8Ne58CpmeGfCuDEM9ezJG",
  "key8": "43jYsUCLFrLD5Q6YfL3pVCZvXR91QfCbapkYqiB4eDp3HozHUshhTwAgescpv8NGTzf4DVLYyv6uAcrcybNQhZAE",
  "key9": "5d6pD73TesDWFWkrTd5yNBKeuGr4S6i73adJkVTfwakrtbye5JqWMDEYecnFcgsoimAdktHz1ehwm4gPBCSBHpeE",
  "key10": "4U7KdtE478hUidjdb1Ff36Sqf2wRH4uMRnuS37ra8Gzjvk37LM8VkVsHCF4SniFvCLBibKpxVXnbYV93BdvAYmzm",
  "key11": "3CZK7YZLqKXHTFGXc2F8dSErcLfjMPK2Gn49PADKjDNKsBEqUCbbZsnA9vKKJEnnjWK8VYGRB9aoJwcXSgAEod3p",
  "key12": "5pK1MJ2AEG8nKduXSxfKBQxYTvaYS3XR7ZaMyzTGm24sJ1NHfue59DRp7Yk5Xntc7dSJBmPoNqQYs8k27JGWAxNZ",
  "key13": "5VmdiQPog9mJv69Z3GR5TH46FZT988UA63pGq1VW47qbTpyMrBpzm3Y2AjwYpaN4ZEa1GA29zEn7c8gydCiWwzSq",
  "key14": "4Ndf4Sk4ZesqP74gJifokVSurMPuQd96RhJ5aF2Xd7NCZ6sgCiDcca9nrbdFb2maf9cPGtXP1YfYC8deZTzervcG",
  "key15": "5c79P9mnSNh8Z3J8ovADMMaUbHejfguNSsovZJZoqTAR3dPHDYp3hvMUcw3cyGMAKqHyRh65TPWggALaPwM9W84W",
  "key16": "5gvGjXJ1ETQiJuYQdhkKXrTt4EXeTNPPz3vYFruxgvBeMWo56z7SoWQVUyi1ZUTmji7REx6uDXD4gXyXhiNr5i3K",
  "key17": "4s5i9uidywH2YWRQsgYNbHuD1h2KC9SMDXA5ANPqPBxVHRiyCcB2bCuUV9vpm7np9it5y98F7MiGLfRxTdGJ1ano",
  "key18": "4YjjfipPtwxbRrxLmtVq7PKnzH3tkPwd9BhYcCe9kZBUXsK61bNHmQNCkXcgicwzv9bqy1UZJv6sFa8TewDpVTTR",
  "key19": "5CWjHq25VoUQ8H1yJzyfmEGbPLeL3P86TdEDCnA5EMp4xDQSB994snAa9DyPCwNBwcb3hUBWyRrjaaX5ZUEJUgfK",
  "key20": "275vGxnzpW4Wo1DV5B5dmEMEHwtC25AgNNHTepT5HHQASykfudchdP4q47DhKscnpZjPwctZqcfEHAVLmD6ZJH78",
  "key21": "5HugFfv6QCsF3MmYqHYVDjo1CdSBKBZvgZ35xEfHAdbh8WYiiHrQGMhukkWdwLGUiBdfwtman8zZxhhwBrJZ39vV",
  "key22": "2iCJHeiR439yBYUWnxAnmwg64ry7NtMEHyAZJBQnHS3Zk3drL4Yrrh6rnpNBLiZxm3Lq4SgnjaFfvx7FRagnYBFN",
  "key23": "wtZ8ax8vE7MSCASZ5MiALVqq49rtZYFyiFc8Xb6FpnujnFDpPrYwc5MX4eHwsGsuQVTN6QXMBWuZgdXBxqSvGjX",
  "key24": "CdqFS2gTe5hE8R4vs4o39sVyubu4VWiDiyfMssLuY98ZfVVYXR6LcyGxSvAnYayGhp97xZ1HNjk1hwaFi4kDkyZ",
  "key25": "3VqYQiN1QwTFS8NrYh7gwcH6Pti2R15apkyUPKTk2wYf9wxoEibg5FWyC5whXLuDVwG4eXSvxYgaSiCiZwJxR59q",
  "key26": "52CCUUpdeELbR5T4bPPjZSba9TsQWuLev1ZXDkpATs6rnWcdEPkg7b8KFk1xwVtCdSVVsBtAX43S3D1pgNCuhNXK",
  "key27": "36Uv5znDj2Qv3Ubn1d4z4HLJ7QtsbMMTX2jHGedyvuskQn5YYFWpYXTR88nvfF7NZbQ5QwY9e16LD9nyhzN8KRok",
  "key28": "37jbLRivg7Kfg1iGAhVzgZ3MKBp9CGTWQtrxPZ4JeFtJcW9RafG2QXucwBohKisW6UQowVe88QEqzwS6tZAmn8Pb",
  "key29": "5Zps21LdMELEGmsfGKHVNALc3cJbbLRxSMGTpRBgoRqyhy4bWCeSS3RQYq23wxCTUyb55GmnFBaVUXWAVMGbm3Tk",
  "key30": "3ThD7ekuaRrHufHDhqj6qdr5JR59DjEmXMY4yWopR4UoJfj8gS5pD86LbEM5ge4dYYhuVXsooWYHqojv5DU925Xd",
  "key31": "6165gCk71gcN7iujNmkV7tdxYMYPfBnFaWiDEJyqVDxNMZtSR4HckDogf77sRqeZXqbsW6cNMjBv2q75jpSbQxK5",
  "key32": "4kHs3jX4MejoL25Ket5UiyofSmpJXvv8M4pY9NxXc7jPeqSsX6eKoGcn8HqbeuWFWkNUT3JasCMh9se8DPq5N2aa",
  "key33": "4DQ8u4WTTyZZjojz1ZEMcPmKinWNQ7qvitFvJcHtA777j4nxyBZfVgVeVFMC3H7JEJxq2xFqagaVMRD3sfEFuNJJ",
  "key34": "2Qci2RTeFMGgmZ4NEbGhwAGG3daRb66zfq7YL3NPRPpLujwQ6QKvUq9XW5vjGp8NmTpRWnUXnUGE4T2qUrqQKVNW",
  "key35": "3c1rhRiJqvb3BU6UiU7caRDBBVVBZ8dM4PxrWHUoZypdim4bp2btGhSjFHw3Fhb1ehfDEEsoEafmHvbqZYJ2E3Ht",
  "key36": "47U9rqWyGeAsruhmVbDVJCq34aDGcXNKk549eKCseJPA6RrY92W4GVuEuMg5bRx2VcorsmEsL7d9Abb88DLn7Jox",
  "key37": "hQCFRTgZSZSZBtpNVNuKNsjAyBGzUPDcFGmeA8X5FTLkG4ofyXbH76L5VSspAyHuqGfc5DFmkKq2MvHJYQqB3WM",
  "key38": "3SNoTyPfxaT2BhmW8rN7aCA6H5BEmJ5MkaNkCdy2P8QaUAqxu3ZQUfH6MMsYMSPt5y2YT141Gxfs7usqn14sEEmT",
  "key39": "59pbgkUuefQ66BdbRS8MBm7HVjtWMubQyrvCrC7zhBpLSiBQ5UqqPXqvS9H4FF4XKDRkipADse7kATojMKRoF7Jm",
  "key40": "3ayDUJZp7mMtqfpD9mpi3PnnM9rJyX18byKNmXYReLMgjYiWNWSxmxKJ6F1zV5DZ5HYUpMxqDxJbj52Bq5iVyLM9"
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
