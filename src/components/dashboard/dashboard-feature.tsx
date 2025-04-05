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
    "3xevSVUp5hkboxg8yGdW5W8Tc2StNppQsxAzbabrVBU4aD4Kn8aXqBk4ku7gT2EpQrvtjqr54pEKyRGVfByYtyvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HeFNhLteQFCujmeARwciu1wry5E5q4oyWvrJZLNEapwBb4FZ74p1AkTt3oxsrK4MHkeygDEzGGDZxmgsmKZAqEW",
  "key1": "512gpAQxCSmgfFJcbghJ4Gr6vKU7ANVU1fGtwYedrJkgxh2e6TkzrQLig7DrDgtTaV7PWpX8rzsubHvuNLAsz7SG",
  "key2": "21qAZMFN61bNJXUL48qZZEJqQGft7wXhYcHr23sq2KLB3VviYtsD4UNFqwbibpknhD2uGdNPXeSUCPycnG52dpeQ",
  "key3": "4jGjg1XBcnkbWfJRTQvLCXjuzo19qTcbn4kKmVhaiiTLt9wEvjYN4sJfpSAVhTvxZKGeRRcSarSv285JTdm1obhe",
  "key4": "3XBcGoxxc4xNPo5ZVniBmUMoJyai4P7MgrsPdDpHpQHkrLc15zq4gGpKzJZ2mjvpZdzw7FJZL8o7tcu8F2wMhy77",
  "key5": "5TkWtAeqf3LejRLTfhuUsyb3UWTRK6wqfkt29XLWiUxyqTQBFAGoCTFqMDgCV1h3jPzbmbZj7DqsbPkrvN8xgGuc",
  "key6": "5AZREvmDiNvmz8rQy68EqTbfFBZxSJug1pzm9P9HCniqgatvwzfRavQ7UnXnfQ3Ju4UVzAbzX1YaF1oSLoojs3Jc",
  "key7": "Q9JxEexyQLFUqCwzPqPGQaF1kifsgmYtmSH45obHPPLo5U2kv4Wh5wkNGonm8LDwbZyfrxYQCCHdx5TgmVUvUwL",
  "key8": "5BhDkjs1gp31qhNURTHkXGJnbRfm9ULBjhUgS23ooYWpCHEvhK4v3Pnkb7pvXzzZRF5zazAuEAZJKaXWW4gt1MhJ",
  "key9": "5Neor6JaXboVDK5zxztrLLnmwZ9Kxyctk1ZvH1578camdTFkYyxx4e7nmuGZFt7EmVzWPyRsrSMuUK77tASXquin",
  "key10": "5gtncrufg3iREY9xhktUAhspPNQszrtFAbUmmAiNBds33YPVdYsvT9RVYbr6CdDc5tvVa5jNHoX7SMxKn9iBFhPQ",
  "key11": "4tdkAuCZa9HGZuXyCkSPQLot5CXnWmBTkgN4Eg5xPsPMeWtEUMb7tPzbdyTeaSr2Vq5aV8AeunExtPDcLF9Qx36u",
  "key12": "2UGZpK1tf7T2B1q5UxiHTHpjC8C9DBUuqrN2SvrLykRWeKDT8TTjz7SXQ5Dboz5AUJJQ6ribtB3JXce75jDbjfFK",
  "key13": "5gH1KPXM7HRqk6DRocBKZTyn87LbGUvBkxB2hX9RT4pQahz6gy2oaNKC7a324xnzknza5HSWFbRdNASxjrXvFaZS",
  "key14": "4aHVEKqFqdXLfrUwkYUU3JXvRSuPcGjSg8adokKKtcdD6i8KZ7yRvQcvpsJn3qxSLK45coHJrL97SovR9BunEKhQ",
  "key15": "MUzCcXidmbr3ooFK31KmaErdb5dA1MAJDVdgi7Y5nZ5PffWARCiaiFBrzurjkukQsdaZC1ChTpHYoirQUoUTEbK",
  "key16": "5qBeaXS3Z7tNLdyxhk8CjxEcFZDjiUv8Zcxp7pyRKsjGuPoQEwFxs71Af2EKVDyTCPnwyEGTDL9GGDfEoJ3dtw5m",
  "key17": "5u9aQQmKEX4wkbjKbJyPXmspCAYzsbibd2gJ6xzza6oApB82b6SZwZVtHYTvMyFxmbwgdeAeXGrXHy3saZJjvAcy",
  "key18": "4XVWXDgTNBfQxzQshFNSkFdNu9HAxFTCkLVxBiYjADXmbyrWXHcwqJVk7FPkcBkQZL35pnXKh1aA9NwiQ9CuWYm5",
  "key19": "2xYogf7zLdUDj5H8rvPwhEKXFxZdLxxUsJmJCmT6Z8wFKC2iy6kbZ4X1JcCwNmheg6VJPFYPq43EzimD3inuZZU8",
  "key20": "3Vm5oojbMo1UKZoQxe1KPeEEKbscBqJo2axLvrfDqFKF4acMkWoTmXTQLNkZTua42wJxbqW5Bw1cqzEhwqFgUnuf",
  "key21": "2A4FRdPo3G4wJPtmzebhfYSaa2PcxgXChsRazMqnw6E8uTvJcKiex6EKYU1r4G5jzHhhitfhhodX5WM7HCcPCLqT",
  "key22": "3M9K3M5Uv1yfENiRisQojXWruGWTcejn2ew6enYduA3fBamgHzJvXZuStWzwR16iBuHqNWgJEPQHs4Lbc2gakpT9",
  "key23": "5yTm6HXaF8tyFWZgVK2snAzyPuFRPAFVYrW9DePYFRMRsHtZ8LfwsdZrmy6hQCMsVUPTbMHGDZWgonBWWsG6DkNr",
  "key24": "X7WmynLWpQ6gEVjrzXcrrnPqdY8QtbC9kCHXUizvNiNHttKY86RUseDcSGSsDU9QD34DQCLDuzPz5fEgqeJXge9",
  "key25": "66PP4c16HHMmuGvJp3rbgFaJvNbYe14Lr29yTyYHqroSa4qn3jhTiCvRdYpZ12MpzDCXbHx9HQLB4JcmjLmN21qL",
  "key26": "35E33Jek9YqWgMY2iy36kCG3TNrpPZkBnbvrSUL9CGfNiPteSgcMJJVLYKpCtfQT8ox4jEEAU4pQh5AfJYTAdVGY",
  "key27": "4cL4HmzCEZTkFc8wuoYkcWXVpwVd8LxoJsxEvSKiRfCG7nfT5qoNPEfwUrFsZX9qyZZFEmNh67M12bDGZrxr5AoV",
  "key28": "fTcMU8hwGHLsq4U2tEykk8BBoJaGFccvFVCQSFcZ3bQ3UDPFdNCPoZrYYHGquNzv68ajpzvBSLRixTFrACgJ6Eh",
  "key29": "37QyaV7DoJKgUnqsKsArrEL9E2hM6zGF8CYouRbGkuvm9nhiaw1UTgUdjP3Aw91FVyaQrmBCB7hi2oZgk1M96fAH",
  "key30": "4QFXt7NagZbs6jWY4TQVUWZfJ6cBVMhzwEjrYwHhE5MVbXPosQ7BR9n6q3LDVgjYD1iJteQ7JQ8Ps6bEj4SU9w6j",
  "key31": "3eBgEdJ2g1bDbsGLrF563959uAmmebf8k1nj32dLsFmwFCpQuJs31vpE83HeBc72BwKEVWZgcgUKYYYkaThyuH2S",
  "key32": "63gZxZa5VEG7La3yEpGvtszkZxqg93zGhfeYad2WyKvrEu77Z7HJ9QAhnvL5BYpchbkwg6rANhAUc4448WyiCf4J",
  "key33": "25kfWBMtKHPxctgLx3z73vZYzJNnxavK2PXoMUzSvCmxAq4c33mcXq1U6VjcU9RJ8z6sgaGzKHsDkwZ8doJFdpyd",
  "key34": "4DYXdziC9wgakAYGAMCPGK8aytXtXjTx2DxsRFXRBxdRxv4SWkp8p7JdiycMfBvhS9YFvZmb4jwCwdPzCsiena2S",
  "key35": "4B9qC5pBRakizT9GiPa531CKtHzM14v6HThyqexRHCq2UP5UrEEmxvt2dpuV58K5jpv3exabjh4x9DBzXBaATTY",
  "key36": "3hRB1veWNtGcYb7zwbsEAhyKT1Et2Qpn4pbZ8vGXhmfizXCGQiqHm4puaW2VJhPmNaFDnMaihrJqrMUjjH3vFcom",
  "key37": "5C7cGdhdFSrSj9Eg3zAi1oWnLzrDPL3sSSso7SUFguhxMPv7YWoFf4sg8R5eWVZ91TnKNVWFgiKa9FPaPr14EyEj",
  "key38": "4PeD1bgkzpJox2C8mfud2FprG83MAyW9ypgsYCBq9LezEicyJs9uUbtGdHziXHWL8toErA32G1TFe2ATgVC4XfGH",
  "key39": "4PLF1gcxJ4yJ2npPULE6mhe4ZJHmEekd3iKd9Gv49Tf9YJyY2NDyuMcLwMsgjEC2BUBVRaMEwxCCQdtVzBBLqAvD",
  "key40": "4E1WihEeJkf25a39XNwQ1tQ1to5Ur4uXnXwijgXSPUpZg31j3VpCKZtNW1Uf9qd5mvdCLNjvJZW7RnvjW3qbPWm3",
  "key41": "4YLJW853CiEhfuFnLmN3RSVV7aGFnRXWsoMUhQVm5TgTLd6o8yKqU7rCaLze19Gcv1C2WcR7U4nnJCBacmee6Jud",
  "key42": "4cxciLRKK8STYTF8iken6s9fWNEMBQ5QvdPSqjkhNhSnVWzrfZXdkRopUKNA4NwiiMWNQqu6poMP6fHFW2JSV4fq",
  "key43": "4868eqF48Xod3C12MbhFcj2njy78FCSsUv7eUdLV9KfQVHMbhfECtLwiVfu8zyfGUiwYFkkp4bwemjUjQ7Y6PzY8",
  "key44": "5bERhDtRwoRS1YTZDYuwejG8y75EzmUJxbo5eTBmU6p6ShiGuq67rMfamERL1FEomYs6iLPF8JSrgaWvsDFtJD4r",
  "key45": "5ANoLwkxvbiS43anAP6aBZjPfCjxyHtwJ4abzVWAX6aGToHCCUFg1d994TepjCLQo8scgkpqAP6aoBHB6pu3ecxr",
  "key46": "4LGf6pSVZH8TDWe21DmiDcVphfVYWpMqAMY1xKKr9kqWLFGMX3wAcL3cqzhJ1DdZJXyUwEVyb7nWaUStPoPDELFK",
  "key47": "467iijMNnXX6ro4VY4CywFjp12134h1p8h3BHkwbSHVwFAjTteg2bXNBng7ZoPqEiahf8KdGRzoPkK8XLwLZ1tpz"
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
