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
    "RFqTCWrc2fG9CKjDd9KWuZNodU453RbH16s9YYHxAA8bWPo4aEH1C769hg426GcTtkyYEogyQuM7Pstv5EDvRcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oYaMrwQWzBsGaNfxJPFphsAcpDF18LwAeEwhkg1fRvqREQpN61HhAtxVhmi2gQVXjxp9kw1Kp37Mf9v2VpMf6cf",
  "key1": "i6Yqi7T9eq4ifjVHK7P9jCi27w6we9E1meYscbGL9aAnTRPLF1JQ2hpc4LXrbf7ZAu9kjGMnfof7vcC5E5EgXcT",
  "key2": "588MPqZA6xGRPERBZHtnn5iWRYzC714ALANwUSbdfvMvrPu4c5CbHNkxhe14dqLt6RTqM3Qyk7Akyka1h2bVjFXJ",
  "key3": "4U4zLzJxGgFktFpMTGE3ZKXSuvRxMfuqctK7qDRrb1ULZgYJ7zWgjzTazCz44cTDpaBNCUvFQiGdpNNXfsPKRcFi",
  "key4": "5pL58DC2bBPE81wwN15Awd83x2A8GXrozPxBa2iFgQJtjKNu4yLkm61UfiSNXPsJkFiW4eYLs6HCBGCoXB7dGr5D",
  "key5": "5YDGm9cPXiXwC4JVq1v48GVfjoi3mkF4xdq4R7CfMhV5ZtT4iwAVqMGD6CbshDkCQ787aXrB7QAC2cGrfdRkQi2U",
  "key6": "2rnHK78YebPBGQmWc5QXDWGuENqsvGes8WmhjqpAnrBXf2CpykVH5vZUM5SQfbMjiabQADgAbWeih8cNhv2S6X95",
  "key7": "25Ee6aecUXUE2zZZitGreZgM48jrtR2cZcCZzLE611TjTtNDJmA2ZnatqzkcgEuh4tAbf5B6UNdr1B3eeyzFEwep",
  "key8": "5Uv5htjHgYB7VnhDcTLSUQsa2fc8xvGD6HYkf9Ao5b1uCEpkaje8sf2qvKxM4oZ9ts33oVgfvu4u5DsMgZsA5QJc",
  "key9": "XF79KDxj6suUU9tmmuBCQQmpuYZVWPrytcMFDrP7rNTMK4yjaJYaSMmtqeKLwwfvo5kNz9tcwGT7wpVmwcLrQpf",
  "key10": "2WTnF4FkWoGNuFAkfNVQRsiCSqSU87YpXdMjg2QEbSWm1CM4JbvdLLA5qiUoegrR9BRxNx3mjNK9E6xndb69Pfot",
  "key11": "4ejmhirZtM9MzmswEgeVVsKV5ThXdwX2FvpHJAF3r1FnNcuPEej84wjgkbAhACkhHHkuxt7BES6hPLvkV7kQZg4B",
  "key12": "5pxGCg5Jc4BGXM1NmXxenZxNCbeiQWcUV3BV5Nn1JvSLcXvD51JvwUhexXY8H2R1svPNNyXVzKKc8SJZKmFVRTyq",
  "key13": "67Nut9YM65rjcbU8nNe1pbdrrT8XM7h6iQ5efDDEktdteaZw7G8Jjz6kgiK8LmBBioyfHUaf1krVxf23FR8Ne4CK",
  "key14": "g5C2r1qS95b719mHTv7Vzp3LDsAMbtMaka48QUG8cT9GecH5Nax4BTfjMgPvzCRqnf3i7YnWUZz6AqQaEur9CAf",
  "key15": "4NzXAkgTYrRC6seVjSJF2NMV98ciLrk3MLA1RTwggFdzeNEe2NVow7CSzDbc1NevURPTfpCAifJHBUb5tcEVUccf",
  "key16": "5DvPvcujgVeF4NtbyJbggWPNHpNnqMpbLUCB69S6EfA34hLtropAkTg4hnyVvgULeqr5xP5X55dm8wZ6q8XoFgAK",
  "key17": "5EpfWjouUFARBhqG5rtvxJoPf8L411UTVoNwyAE38ggXkCK4aGQvfnseMqAXnHmV82kkWYivkN2RT94gf3vGugni",
  "key18": "42n67wHdUvfKGQPXeWprJYYUSo2c44FkJTH6tvDFYMn8UbNLGSKSEToZZMA4T13BvrzgrTG6McHvkaCZDpvBMxvE",
  "key19": "5MrBoHK1v4wZ9S7ysSUavsFiBLm6JzPHRPGgQpgnTvwnYW9DGp4RsAbRLqvRGjZRbHE7j5x7TEx1WGdfpduxn5Eu",
  "key20": "2XfREuEttVNEFRNrWQ1UQUwKurBz7Q2zDvVmt5cmERSoEbst1RWi1hjht4WJz9y5MsDpgJwo1wkV5TFiNnDZqni2",
  "key21": "5Q2AeTQbRMozeoUDfn1FDBQR4Ni1VFdBHexMf5p2JnFa4xB4W3SLUTcTeMoU1Dg6a9PZbA5Pj1EzGZgEKnhDtiHM",
  "key22": "3vmcA9QSxKAyjX5tWtJ6YEbNX5kpstzVZR1XbaNtRTBmWTDJsGNq9KSMmZKC3QAVseooLnTBbbBaY3qkmCGo4oxR",
  "key23": "45a4HAjLLqtc1qhhmLnRmxjKsJrNJ5D2VEkqg4GLsUqMXq2vuJXv5fojfdoCcxfq4HWnR2i2UwxAbC243mMDrvZv",
  "key24": "328xDhWNVU6RchFtQJrRRByBxJsQPeNhatjFBUHX6QRDgxrmLj3bT5m6ZMCmNoiVz8ZPdth4UrWr2WnaX8V6iwep",
  "key25": "2de6p44ftq1yUy9eYaLuXe1KpKtVZx7S4eM19bUxFaJQ9snQKYuvpyXoW4q9Si5J2Kav7kJB2LkYmWywWbJXDvtp",
  "key26": "5C6WYzHb1nco9seFDxDEmfxK7TcuEJb1NE629SqYmaMm6qGDqWCDmLuRkAaDmQbRfEbcxiona8T187XYQZ1MNYGP",
  "key27": "UzZZ1856EzEENRfUTy5JdDyHwkGrHmYFtqjMGhoVAMfTDYe9XBWHokLxLZz8owwAWcQUwZWFBEa3z52duPnLwGU",
  "key28": "FkLGsujc4Ek8TCgtCPRHnpBxnLUQK7P3Fi8uzjzehyJtZuqLJT4saq5BzdU7DyHUcdLMjsSHoQmwcfjjeE31vaV",
  "key29": "2UxrvXEB2NdNPZcJXU6xqxs9Zy9AVsrX21muQ6Frh31AYDXgJ1ZmB3rSoxLZRMbsQP9K2YAVACy6ZVs4gTPbxc27",
  "key30": "59jmwdAvgP4LhSUJtAzCXqGRhZaNG8LNwNeSQ51V9C5sUrvLcZt8jyTJmofrWJAhRq8TqZWkuBRp95TwmxHY6fRb",
  "key31": "3MfiAtW45BQE6E162xyTS7YktgbMzzEK2W9vpQXMNwfbRSokXN2GDnrfVpeG5gYPhWDXaczeDtXZSCyNF9poKj1J",
  "key32": "4sNPGQwot39RaKP9Ny87XJbVNmCRgN8NLVVsfXLBMzPdQXZr9S2Xc2q1gCgWr5ATpKuB6SATGeeawS2bYRv5Ya4J",
  "key33": "3faiSsznAsFLvZXQjtzdfrKSKWGpkZXNW6bSrRf48ATePJMSC9yENjPye5xVDnxFALvzhL9ENBjr5pvSwBmxBYRv",
  "key34": "5qzSKSwggJC1WZtL7xBSYgw2KWq4bpTB5YQCJkLE5VMqdrWR1DFDdvMBub9ay5mFCZfdFhvgT3xcGpyTJpNbMcYB",
  "key35": "3beEXWNRVXnWUy1p2Fkm2tekaHdLfNnxp31QNWcxE34rUh6Kdv79wg6hWUfqknM84THWzUog7Bx4ZrrL1LNBURm",
  "key36": "5qpULJjQsBGPadH6eioWvrSk4FWJyunwf82BG6dMjpncR7WvKyAbX4z9LDobfjBnib6JXeuh5N6TVaB2DoJANjGk",
  "key37": "rSa4Pr6obYQLPt3KSVb5KR6rYyhDx32HSWCY49BDbCUi7Woru5WRwUV216HHxDq6WvfZTLBzBRLr28BFmxnbiN2",
  "key38": "4hxHWcGKz2Wcczn83LocnsPSTT9HAWL8HFRUTTfpvv82HM4ra3w2fNVkVVayWwjS1Npz9Kzh9CuvtEmcMh6hvxpj",
  "key39": "2hYrnV2DRFYbncAkzrPHvNuCy1bt8ufZeL5uZn51buVGH1X4Qj2URLipjWuFyM1EMdQ6aQ9vuqFy1VXYqG7yFk6E",
  "key40": "59dLZNDfBcSFuJY8UpTnQ44rXAszztDVSUSDtUX9t2mrYo6VmNWkkF9gtCHDeiUfpJSLmPDpDqvU3w1DPS1hp3bi",
  "key41": "2xcwiAFJnwjaZWCRgL7LWEfZYVSCfa5mRRa4rpUDQ2FpnTpujePRyfqS39WLMF7g8CuDu2bgnASfQ3F4oxUo9MuD",
  "key42": "3gSR7UU8wg2sgffCyBzuwC4ovdRZVs1TK6NZdBZSKS6iXtb5z1Rr6XH9SfcHqJGjEJ39hhtq36QG2AnzK9sfBUsW",
  "key43": "2q3KZe6shAQJKf3is3ZcvJ4dQS27LmJGvc47yMFYnGwPfmdh27VbsvkwqCLXJd8KCM1PbrRvtPtcVrwVPU3hEzjA"
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
