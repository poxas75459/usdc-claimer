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
    "2KgvhTks7NW6gpKJiTc8PQT4R1oPUL5L3ieGUAyzQ26VDvNCqVBFVJvsPNdJNN7gpphTW2xYgy8uYdihs6EF94nX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mr1kF7GonRWXWzmqVp8dh3Ba25o3tmGpjNJxsLBFWm9ydYLBVezYTe6QPmadHjkGff2M52UypVHUkuYwioyHeRE",
  "key1": "4uS9ndYKpb16EGPv29jzfbW4wwULUmPad5HbwrRcyC6XchvWWpdb3QNjtLv9r1pjh8Co2o3n6mRXs1gfU1joGF1p",
  "key2": "4F4kbNoMPHnkDAGpVVe7Cr8HWbETQfivqSGPWcUC6f5fcHmcL7LcGZJBgpDsnTNcpMjZXvkBAS7dBtWe3qgxXQkK",
  "key3": "JuJ82PsZfk9MvxYgRN1jHTvPWhfQddyR8hYyJitCa83wfw6P2QU5w7BW6YfNwoBjSJRo8i5Mp8BLAx2mQ4t3ivj",
  "key4": "21WKjFTWvRqPJJMJZct2urTnmYPCE6qjMFhX7EZwWx8FogbJDYbKpnq1uSCoAQV8kKW6ZaBE6QtGdW4571ij4u7P",
  "key5": "3AfjT7NcnGCfDpe5TBx1hfEw5hfcxGKtCMK735kdbv271ARcpNysUrzesh5eSW8sm4kJGvUZrfGkwaRn1qi9tZHL",
  "key6": "2vgA3G8hESiBMKh15fy53s8meH6PFVjC2LwUyFTjG6qknPLeQDBgcbgakkTmZQ69bQK9nhSg9uejM36CYoEjCQzu",
  "key7": "dKNP5Zo21nW1DJ3TqyFmXJLwTjXoVisfeEWCW1G2r7ioE6FnrDgMokx4WzYZy5sXcTiFWwhacqToFMXpZxMnGUo",
  "key8": "fsRZ2MShddPFeQU7aPXQh92y5szY3bruSyGumfjH7ExXopf7Sfxt7Ei7MxwJPLwGVe7HgNXGobiZa91UwMZ2nRL",
  "key9": "5jsxN8furXkHhmk4ZmbVMc3HyqffaWd6kTqEhVjYAFjGyZ2PuWZGJoCXbm9ffHQoELPZUmUPcV6cVs1VWfTiNrKY",
  "key10": "3gLVv6gfg5A8DW8yDhmgMa1oGMnpjgJEN4V4eJzYjkYX4DD4s97awyfNhWRpyy8dktTXt1ymrXP3ubrndFrArm6k",
  "key11": "2L5vTTAcyHrp6BaHkEKADqnDJJuBEjjTFbMZmy7zrKPUUJ6YzNV3ztHMHb5SzRGdFgsjYNZQvkFLqfV6wntmCqMN",
  "key12": "eXkobiK5EoFXBwSCiXxH3nNrSen1L3JjWSirVhS63LjK5A9KcYkuwei1pafDgLqtLrNbsKTLeKFxdPpYng3qYLY",
  "key13": "4dBdmoaPnSnE7nj1JnPGPbTwpb1YrYAKE4rGPcMKrN8T8zAsZ1Cx9gaa8bPnXmgcLDBRT92usTeHi7rKyqjDko5G",
  "key14": "4k72Z45Dc5hp2bnZRo9tCCtUH91fPV6yFyyLfbg1vriJ98KhKhwkPQHW6kV6TpYcYvKQHPPFspCZuwYzLtNsG84Q",
  "key15": "5VYhHVMEQb1c6hdXUE6JSxq5sTNgUy9kpLJSuVY9K9tKydb1kYXRCiNL7had8RRDYi4CJKbhEqfopthEbXpAJyUX",
  "key16": "TdW5GKty78dkNC2DrS2acXXoCsQ6eFj2GaLv3KZrj7SsRA1ZZQdv1wYM3Ev6EyGDygJ66NmtVDEFE845fbgn9pW",
  "key17": "4S8CET6QaAWu6qsNJ9Bp7TjbzTdkwQVdpWAXJnSpc8BuDcr4mvRCWwtu3y9usLFSRiLFyP6A57vB231piusvqEjG",
  "key18": "2UuZW5mfCmwoAKbNxwGtRCQkxP6BRpbWFfhofRrBMc9nfYd7pUN1wdv2rpXPzK7WMKXAvC8ca8bKepcFNi5WpG7E",
  "key19": "2YeqVuDEdsCnSLkgJu5cRAXoWnsFRFRNUyHLCw9gRmsv2Wc66nBUVarCbmW8E1zRH69p5BdqggButjEB7hEogkFP",
  "key20": "4oBHwr1YW92tDNQSPZJm3KQSWSGD3cY426pdJbPVRhonfEfh8btxWAung3WNHaLMT2ix3NoD4zYocPKjuS8oJRcs",
  "key21": "2ZTh4GjGrkMqtUBzbyxp4JjQLePibUFhAMLiTLec4mikq1UHJRTFFbkK7ecjkjx37t22JAts6NCLkZWrqSMGAqZE",
  "key22": "2CSpZSAJ3fYYDcqP3Hv47GANbfn6TpQ9HxsZuMyLk2xnHdrBwR3NqJffpaMoZSm7L5GGH33pAVbdRvtwLUvzTFeu",
  "key23": "RV5nXBA6izfqrBNuAVsSZSr8SPZH3EVvFfcmGf3fv5Jura16e6narib72ETx9rbxTGqTEF9dYPwwXTcrpuzrepJ",
  "key24": "2fzZ9mMjs4mQikKj69SeCqWca8DwbCLiqKvHsKiCSwEcXB45snPpAtitncMgiVprHykeqaJ6q6DnqCcX9Sa3cmM6",
  "key25": "3iEQofDSWnPCpnDwquGtxvqDtJ68z8vKkSfKxtJv8yu2pSkcCKoJrg5wwS8UYS4Kgs1BkuhGN7vT5JPxP8BK7u8K",
  "key26": "3EFUiHCNunEVKx7X9TQ8V91EWikF7UdFK829ucLySVGaksLbwf21zsHbhWVKdB1NZcoREEwaLLE4sTbjXwBPrxsf",
  "key27": "6MnCB5hETKcRveUADcpy7yAxGMk6JNejZAzwCJYjjmXkZBTD43i5PCUas3reoRcLNHqFNeQQNDV57LnAMcxS7Yv",
  "key28": "4X6mAc5nGbmkB3c5tuLua13Sd6pfpjS3nVHvAySiofxCMMVnz9ySVqPmtB4ryaNbwgPUSx38ZqoYfuKwQqVnVgpR",
  "key29": "nG2L57oqLT2h2cFwQya2LT18PeVGeywcKYvPL8CG1aZ9UvBcqs1tbKonSYH6cvwp3dFGtn8DEk2YJWXzcHKNANb",
  "key30": "2BtyX6T8HxXyj1smamm48DkEJiBGQHwiNx8hvfG6PQDtjion11SSAfmZoz3Nc2sCtX3XcKdPF6PuzR9pbbe8v374",
  "key31": "TRVX2i7jSJRF1P5BJoCWzrgUipADQ74JycLPCdLdMcEQ3UfNGdquD5tnNCEtNS5Bwco2XTBK1YtEBBFvvuiXFsu",
  "key32": "do9mXy38nqBicqNLxpsXZt1GXZwB2t424LozyDvq1zTwqWhxiZfAaxmhJVDXdvuU1fXon8sCRh2p5Rvh3gCfC3x",
  "key33": "3PbzUiB8xchotnMeR6GPjQw6XX5QNgagpX5YECWSRtP5cJJFYVzNZiAcKdqosZrxWRHY4NcnFCjE2CUaNJK6REwT",
  "key34": "5e7QG9ZHBnN8BbQhrTxCasT7hmR1dR9QpwxBHuSw23o9pTxixYLNs2erFQyXHtRxbpWB4G1BpHeY53Fq1qGNq1QT",
  "key35": "2LDiLqqX5rLWouEjJ6v96aXVr4kgkRYfdGv6PRUi3c8NxytKZ1vM6XN7HCUC7PmcrAZvtZQ833gqCx3PyLZAHPLR",
  "key36": "5eqdHRCuPtX9bKjWnfzFCQiEnyeS3XAFrfJGtHmUZGof6SNt8ra7RWaFvLbosY5CNphxThsCpwKar1YReEHp9Jgh",
  "key37": "2sftZaG5XyQxayoSen9phoAjxXUQTM8acsBQ4sFeUpPT6NdQLFjMvARKNumibYt7VrbJ1JGx2S96cjrisATJ7eQP",
  "key38": "bGcyytNgZbhumfPEb6yKBF2ZeEMqNz8dt52PDHRQyVM4V3UGtE3DGCzYveiC7EG6YpyYq2qJrWaYpEzCiFNVh9C",
  "key39": "3ES8KY4fhJoCUrjG7nW64ryePK7bgjErk467UogjReYQNAZmJbFUtTu44JKRdpuHcQgNDyZExs7XN11T39YZDkMd",
  "key40": "8L2E6sArhv6fK84XXeG5aQ4WHhpYqPPWLmaMRPi9Kdf1cw7d69AVh9r96CNFak8RCNNcR5vuRUAf4ntBHh7Y6Pf",
  "key41": "5gM7YtM75ikHpbZ3VWKMd9e1R2xR8QbE73Mz3fmZaWBgn3zp1t7DtFRQn8jwNcXoVDvzLtokwA9fWXPiF3ihE9RG",
  "key42": "4TBtuEMTRg2w19pvATBy3vZXfpPx7hPFPMbVUpzXAf8cAz6pncmApCGcvpRMehf5gdGXUezX14KNEauZ9JguKX1d",
  "key43": "cxJHpuZyypq8xLPLAiQa3M2NNAQECBqHY9fDHpvj7S8DHEutD12D9xhoAxPiWxJstAEwRf4CuUFyK6RhNc5HExe",
  "key44": "2321e33yY8x3PDUzmAMbqCecBi6eRKy5j7jNjddQyggzScmFg9rKvpj1cJNAPNDG5RBiJ3w9mJheV6wt17MP85Gj",
  "key45": "4Y8bWtpbuyvFRKCQutmtTjoGM2EcJbFDRbc1z9STBEDywVwkP7h3WCsS8inZLJ8ggWKJqkkaLFH4nucmU7GXq72U",
  "key46": "5kVH63XDCUf3ceNmWxgNHtKz96mNhP5MFWPVRU6biEk2TjEnb5kaVC4Z6eZ5g9JpJT5FJcAfqjVhqBPy7YnTDdeR"
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
