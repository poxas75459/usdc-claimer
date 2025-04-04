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
    "odzbGue9pDmzyVXc5UYho5UTMckLfjckNSkNJPQz7qA3cFNV3uJQkcV5g8yFuFyrdxJTSY7yr6dBKXqjwgWVFVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38oKKpPDBVqrrfEgukhKDY7SUMGb1jid8UvEvgf6tSLhYZG2yz2t5mvxgmpFVQh1cJQQ7W7ucmUST7HEHNGtoPNh",
  "key1": "4wMJHmz4UAjoKE4DC1Q3QbrwkqDeUvTCGqcTQGX1okkX8mkgj7SGuuGtbFEjeWhgEGGRXtTfpg62jH3n8VRNf2TN",
  "key2": "5jhsLEyTkpy8guMML4aFhwdsj7FVrCuVttTxSkbju6baCN1eiUcyxZhQCcqE53wiBsjgqFgRRvZSQYyYZGiWQ19s",
  "key3": "HxnMUTaT6tMKPYeEMt8CcP18ofvrqtQ5KEtcYFCZjKJhSpMQwxCzkwFWorKu8TQx2ZTYyBvti6no4gpuQHs5H7X",
  "key4": "2M6PtLByfHYe8vC3rNtMNzGyxz83y4GQhFPUqb6NWL9p3RtmpCx7uRiXHJiB8aAwRGEku8sdXZPHYeLXMdeFJfiU",
  "key5": "3Qa8eErdWcbxm7kFmMUYo3SPh4qxwfFXEsPvq2vh3C2Bttk1hZgZuzpLXbWZh19yBMZxFdU9yRS47oBisArVe7bA",
  "key6": "44oFLRT2BW9hUR6QyUNTx6GLvaU7jdG67S1LBDrpQBqM4Kay6BsaN9fePKRqsSKEPT1HyoPUuTs8wBAVRjVqPBaX",
  "key7": "52gGRw1CGj9sfJq7PzPm49r3MmnR1nBhGhERJVHnCsSD5TAZWPX1S9WVExxPwpudG3EFtreULjGmwHRgcbiNRNKk",
  "key8": "5ma7PeRwfAHaJ1zc2mPV8RGWefiWvfePowUYfchku5yxicGYHGcGyL9Xu2KuuNQxThJjcEi9G4XZs8fSViwMFzTa",
  "key9": "2h25n3maBMjrFXBDgZRUg5L4gPBnZ6MCsq6yP76U5nvEHNfz7fxSW2Srhbxwkm1Ap6H9VpHGYo37m49XFG8fSWg7",
  "key10": "2ZxXf8MyyeLem4L2E5dHMSry13VsLvXaoBYWUhXQ3N1vxdMHfEVp5chSj1Q6me3iYBKRm7skd7zQVqfwE7UQhQUP",
  "key11": "4GwLPoCU6Ag3p7oCUvcjPfJ9XqXM5gveZ2AQPc8JpGbsruo7o6jREe7RuWBbtkmptv4LuJUnfPiZVLz8dv4Ffnz5",
  "key12": "3T4jXX2PApS7DS4BKYheSJ7RdmH5osphUZnxPKxEDyPs2cPpPoY3896TzRhPneVV3r1fJ2NzLsGDWmir3nBSeTrw",
  "key13": "44wN18CpUcZvimsdETAMzyEk7AN3FTtaiai8bBht5oFDntueTNvZ3YMk5ucZ7W2uP8Kpm2qouerWxdcvfsrz8mqE",
  "key14": "yo3YmYzrpeybp8AVGLKFN11iPhuTWFYceoHgXGDwGuwJQ5yeC75bEXN8fERx1xoR1PRf6QaB7NDTAoExPhx9Zub",
  "key15": "2hWt6e1ovL2ALNcEBRQ2gDoy649d96hGZc2q343AZPYmHuNe3aNhK1MFrEerHnyVs1dmbQbrLsgwSU4jsfTse7yR",
  "key16": "3zYuvcsaQWFdLXY2gEkeDDkRHFmXPZEEZVehaB5RcBzqRTT5TnTda49xKUH9tqekLHazSFhpwLAxLB43yMSD5PS5",
  "key17": "3vGctTqRHvVzgDqFvUVA8DyMczjt4uXyMri6k26oRXCAEyi3MvQ6oBdcs63PrPVqrtnYW6RuUFqszRsNaK5tV3sP",
  "key18": "3Lj4UMa8E138Dj7fEn8Wxi1nVmxJprn9YcFmZTnkcEBRPxeiJ83HTfkTHxJ2Ruz7cqqALbxt7ScGG1o8uRnjoz9",
  "key19": "3yLdNCS2ezsDgRXi4nrdVEdpMB8bPotTV6eY18SojiF14mPdCVhCnojQCu9yMix4dpgRc9cFs29dNtEQXQqTUF4k",
  "key20": "3qcoHhEbKJxBLhpMMErojyaZPx2DdHawu7WfkGchTNgSTAHan3WabhNPea2AUjeMCvS5xVkVNgeJZEzvvN9x5Tng",
  "key21": "HKgE9T9tXrcKVqPJFYxS9dFTFLgc6vvYqSnin1SvWWY4b5sFxnUn6KjgxVPJ6hvV8W8J2KVbMz2uyFLHh27B9p2",
  "key22": "57ckzCWWNFoz1fdphVnjbVJnGxABge8wWsM56aFJVXauvTHJjf8qW4NGqP9MQUM7KDzLA6DEtpy95HQuuT8omecn",
  "key23": "4NiGxbbacogsG3weCb5c3sPGH42fhAD1uXEiJtRinw9rqcsd8RXc7HQooh7gie6q7bEqHsBVnUAoSMPJ42vxc17Q",
  "key24": "4W4evHSA2oisKBLxNERYekJS73ooVfrLZw8ruhtJo79n2HN6RmToJigCpxUxc2RuqtkRJKH64HrfTVysEgvnjZ73",
  "key25": "3FGq6yrmYP9SyhAoJKtjSK5ZnmGQYSyUfcbvTY2gXC8FgA8zp8pXXKwqRAQzFHoLv84wUCdsrBJBb8vmxYKzsJfT",
  "key26": "2AVNzyHh3yGSNNFZcyeag32gec3JQbg1UgfTzS1wuJNEHUkBtPQebrUD1zA93fgrBtcmPJzHS2EnvBvhtfFmGNDx",
  "key27": "21Rt7HenjWsMK5nHnCbtJqJiZvLE6Ys1Ht5JCYs41k7tGkG1RJsCFGCTeA6uCJbSYdnrda5GeN1XXUk3m8Tr6Yrd",
  "key28": "5e2k5noy7aM2XeomcrA9ZaZsjs9nzqD7HBadzSBt3uwV84mGyed4nja5PTwbYmizTjUPEy2Mz4B8SHoGA8ujBnSM",
  "key29": "5psgFi7kKbPnAAq6fL3n9oqRKf1GHWNsyC1gZ2sRkkopaZ1e5EZvFr11qP6MrpEP488Gwjt9KjjGV9J6rs17Ynaj",
  "key30": "66AdBhKjdQe6XyVMFN4zCScXEUomRezFSes4cgUcUm6ESeCK9TpzUMxM8B8ktqDqCJsZTw5yWJzQa4fgWdFCpJ8B",
  "key31": "GYmTxREQhnTu1EgMur9mSUW255cnnAQGgmQ6gcsFzuAQ7AzeDXnhHXVZCohVLqQBD5VeDfntntV7MyeqohbPYtw",
  "key32": "5FytnNwU1m2yocrkd3ZYTY7SPjnU5X3wP1ESD6Q4iGKw8J8kFtYLXs6ftUaLqAS7ByxG2UvZzhGVJr5HR5DEgwdj",
  "key33": "3vRGukuz7NJNJ5kkuyA1NkZxPvQi3XzXkVtxSu62JZeBXfyfXS23BNv9VgjGPfwVaneMGrPpPPGFPSA8BfAWk1dF",
  "key34": "uJtdKGPSBDz4PrckoiahQp68zETVXYdGvanGULM37ZNZoRxE2AT59LfGtMDetcZj9bLwdXzSAv7NZUaLoJp1sN6",
  "key35": "fWQHdimKgaXzg8f7nWxkLJydUmWsmD7GLp68AbittXv24Gk6WR3X65AyYKxEdCAXGqV8GAZyMDcQJB76sNE1ftL",
  "key36": "3fV2DJHxnU6CvCogA53roPfX5jHQ5hwFPvZcniwVNwSrugg3ayAShJFocthq2TDUrff7DmeemWyLhbofam5fESxq",
  "key37": "3kYSkhELmoZ72wm9WLsPCe5sDFEQP1UjDRCKQrQKGoXDBvzPo29SitQ3Q95NNd3Movpb53RBrfmvkr4A5YKUgtR7",
  "key38": "5e5ZY7PmGDkXUWoXHqYRAYdsszVwqaFFX3qE6tagHs96iEzcrKsuv9SmYSZWX6Bsxg63LqGPhkpJQ8WLDS3H6pjA",
  "key39": "4faU1pSEfb32T2P3fe53GfGDDFR9h6fjdWiHzHZaCaxCcUWM8WLyCJmnJUSkkgFh6Q2k4Bd1B9NqL2uuT12xCELC",
  "key40": "5bzwwrteGgveoN8FHbL8XiykDv4JzRUt18YJfDLzWkw1rVYXCGivutFi5Do8zUByTM3jXtDUdL9XDdj2NKt3nuFB",
  "key41": "4RrTUBU6HKdr8TLjcTQLwGnTsc6ZcEGRpNuDVY3y2YpxjtnqHiKx4khBE7vGDRfSgGUtWGqESdmjx42seqd8skxe",
  "key42": "3rrq8LFbxjj9XZgeG2zqZVvZsbfrgBDZQCHivTyaxW4PYn2ePdtaD1powrHnCNBjQjBfMpFSCj25mEeD3eTUTXhB"
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
