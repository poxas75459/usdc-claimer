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
    "4DSocqvM4tX552nPdpZf4iCAcjLVs45CSy9QiuZ7sduFzofN8gLRXELTYpGKsMiHUPFeeSK89o5qcM7rVMZedZTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VNe9ki32devZTxvYnkvaAF1nrjeqPCwMEZUcEh8xet5Yxc2HKhYMVVzAUbTFwcgeCVBBWN65MSJJHs2fiKy8uoY",
  "key1": "2HP9QcSzFA76KZB7kYn52kmMYJ89ZRN82YVGU5b3jm7BSSih26No3prGqoeGZJVtkwxwHpbQTazywJJkVR8zM11i",
  "key2": "9pqU9ZGEBda9WzgGzdfr1xYi4iwQEkTqAmMSdXMG8WhUpQzL7zocdMrsUTUsfMQEVmZjFQsNS2QE8JgToxr43L4",
  "key3": "5CWiL9VsvvcR5o86coa67SAVUjAstjbRPb8Wv9jCJCHyozjn17mZRc2Up71QkECkkwMjKyjLKHU61c54KBjEM8CZ",
  "key4": "49DFBTyMDx5eK7ACWteTAmSiQXLk25X2mxygBay5MmfhZH8uMaKSdUPmUUHt7YX2ZDz95pXm238fMYx2X43qTKLu",
  "key5": "Z87a9V8VzhnurbNb34xZn9uXAttfSYGPMJFSJhsVqsNqHPZNPhUo7Snnokvy3gy6Pp7ahw56ZW2Th2ADaFkHGTk",
  "key6": "3YScnfWA1Ro8UmiszCG3YsLaHgejYviBLtgUxergagHfnF3GDmraCoLP1FW8rbj3LxC5VMQnC7HDNngTBST2HdMr",
  "key7": "2KFSU9NbbFc7KYAQMZnfoY4Yvctia3K7EwMyDuPRb1kTnQa1tXL2UFoqqAkgSPwZgv7EPJsERxj9ERtqXGTStNd2",
  "key8": "2HEucqJ8apnSABpdGEpiQj99fKRmHQczJ4NywU3GjJEFVC24xL6LcQdCT1gfyTReJpspj8jcExHD6V1FcxGXTi5x",
  "key9": "3kdYqeD5DhW1Mm3tyWxmaq7xBHHRcagLYQ2xq2uxqnvxgWPL3xVpvgV7c54jhkXEVBnWZaZoMLWNz6yuB7iFgJJf",
  "key10": "5gSBnPknctPqkt96nQ5USe1rz3f6JKYsHbGcv6z6wmP5Q5emAN5PxiEFPqeFVz3ZR9PehvaWe2pEZKPFBvpr9f3b",
  "key11": "596aEJ14xAYfQLJPhtkZLGxH1V5ztseyJjdAcNC4YZxeu8NfJCPqNCDpysWrm95BSfv5zHQj1WzWaTcvuCPBZMPR",
  "key12": "63xroe4r7RxjGD3XXVYMidXCxTwKVjsxFsif5HvjuiAU2MWGHpmdMBj42QChkox1i7fnePcEUNKVzkW9CpGYdRH3",
  "key13": "krtnjwvDxtFQwXLA7TYy17jTg97jEaGFnF3hys6Hf6YVKpaL1iGbd2RQbdSZcgYbghQcwU69tiHScS1p7crE98y",
  "key14": "5qz6cs9NaN4S1FAUpzUYkKmwKwCMspKF8nZoKgbPEDidPC8pH9gdNpCZCs59fyAoYjRQrz3iCKPK9STLr9Hg6Z3e",
  "key15": "4K6qHYC5EQXgafWydnYp9LkJvNn1woMgzoGLww75pdbLNKZcSegYU38TtNEQHgt6nJxPEYVujAXu6cRqCVJFBH5m",
  "key16": "5u9F5t27QWiy6R15DkQzdKMBHgMYygHEAP4uX5YrcaeFaCMfQBPYHyd6tskT6GD4GPjk4P4YDxfNbHoEaNVXc3o3",
  "key17": "26udtifZit5qFVzCFeqzigeFPvmMrGHopArDjDYfLZpr9PMkzMWrcUFyopj6t5HRqC3T3iuZdjDr4M8u5TEohW3D",
  "key18": "4L4rzHDfkYLqCgbWkS99ZGKhWAdjpPdXmNAKrDy68MF2UQweFhjmEetntadcwuCgZdLCXagWvRN616TXLBXjfxi6",
  "key19": "67H4EGkMvXY6qfBgdkcTijwS643e7PNLFUR8zoPEWPBtZdkPrt6m2ScgAuSmAoM2LozdGYqG5UAXezgh9VtNx6CB",
  "key20": "eKwWFsjeRZpwKkfi3NgwwRBdAX4pGzgdHZRfZE85bRppvXQiXY9x6dcYeTrJ9BFQBrxiikGoyCJmn5PTh3FjSZ5",
  "key21": "33sdMYdX39MLLCGxkYL8fSygZJcW4SQivcX7u1kHKPMpqwLf4MFdz9E1J6rfebSat6EoocY24rTBgnxs25ox8tQh",
  "key22": "3Ctf1wmLbm4hMuKidhE33jTUhk9hec1KxTBcTNAC3TqoHeQ7SyW4efUt42WxpW9so2Cpo4gJGNTYFsQLHntWnh1B",
  "key23": "ABT5D8AjMUNjxKy83T4ihzBtsQiBZX58WWow8NgSKkd6prLNPPFaPC9UhdhKgi3sZFb9TABEServYnvFg97DU8h",
  "key24": "2mKvZcxPPQcvs1WfgBDvKiPamJd6qfKXbDVSmuCF8cJi9qdn7bk6X39qFuMsAHaC8eptVqeCR8audsEzKEezwdya",
  "key25": "5xmb2evaX4ELmnpf3k7PCo5nVtvCMoaPLfovYc8pxn6ZFbRCYBBnKMqNUCie5h51Smg1EbAVfV4oSqyo5qw8rcNC",
  "key26": "4YanZBRw2Z2xtVRpDjDWQ2o2bxcvMXvAewESZGm5neMfM3jMf4rcMmpTmXzhqpnC27EDfMcDCpQCAYyFU2YHHXXo",
  "key27": "5qhF346TfkzfiZ4dh5WAeferL6hWvM4h9DYBz1eQXfyGgsYgSAGLY75L19JAZQ5pKbAbJSvzfAbNVroJ3uUUV8DK",
  "key28": "eq373kNGkMVqqxiE9F4KmymsDqWdDxDjtxsN4qEMBy4vACqwcaJEKqnCnsenECEPQoDgTzacRdgZuDeqMSfpmSn",
  "key29": "5gvHYptKFC53Q7aHiwdPTDdywh2rCyGC3f5SY16obviTJJcsNvp1SpX5kVtFC2yCE9nQNHMzvrguHMQU5GpyYteC",
  "key30": "qnsBbDVrQARDFNfwddWGdWymPpBpm9ejWBKQz97qUDbGQKGaQppecsHa6iaw1vF9KS475gVkRoBPVA6ya8oZguY",
  "key31": "3nfwbm1WGfUdN9ogpUCH8ejYs3qe5bfmJpVE7sNX2mzReZgtcaTARtWhXkKuioDQRC6DffzRfZDDCXWyxuoVhQGy",
  "key32": "WTNtJPmEiUEBfdsRxVfWCBoqkK1wrp2G1BdYoeXah9a8z67kjzXfxJxZsAsq3cCcDniHQvexr6tzLPXPbkMP1xi",
  "key33": "Ba6XEVrYhBDdq9dQ1q5PAhzsB5eYxZ1f8zQifvfCteppQvJSenWVLTGuhjn1wTua9WdSYEA85JdCzkiUoZffHK7",
  "key34": "3D4Fw3QwmmFZXVuLEasQFjNfFwS8NnYHCE1ognrVTrZYsengLk7KmBwVuuEVjofGidyCWpG7XY5tWQJBh7ziNb3b",
  "key35": "2qAxrxq9yY13anPU2j9azPkJ4PSZQCqQTK84H5W9eGKnMmuvFfqgGKYjWisS2z2Qm8xfZLHCc6VUSPgVjk4Ty1uk",
  "key36": "44EVaLDvYqCTGAF6eQYhq8DqCX4Ck2PAs1R6PXBFzXjwB1ZsvoA1A7UmyJY52Aetdac4hAFe1fq3A8kqtfKJGnaN",
  "key37": "3A9hZvqcQRvdhowTiYtCkTCS1mM9Z1qQNMahChG2yhxxtctCb16VLhrRSaTZ4J5pjVm5kLCi7Pova7Cv9jngdPky",
  "key38": "3jzLRf6AhW36Z34JqyD7fi8BWkUDqxxnyre7MsiNKpfxJ4p8ytVxqYY6bjiXbE6vU67qipBBF3DPzgkdNg6UPGAW",
  "key39": "3PmqpmYCQAGiANRAUf4ruLVGpQPtkYAi5KNdT4Hia6QtWx34EXTMhQJfir4CEu8jyLKYkRtaDjvbkBjYSGUQUx7D"
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
