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
    "dKzX7mkLH2M9FfDdum12vepLQUjiU9MiFj4ypyi6bdtdJRCkYsaSVGzoR7u1c69YzbB2FoypRaGCHFarhggrtsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fSM2aeJwNAtadS1yD6uoxCEiTtB5Yr5KuRdCZmHTMAoxRaQzvZMEAENpLeTpeX3XW4rn8Lyb94XpeqfBmuaZNTR",
  "key1": "4M4meqjRsumGLdZiiZ1nDnheuUv7MRxWMXuk7S8YWQbo5Vkbzt9Bm2tnF3PS7e8bzmsuEiJjscvQXmxsJyw7JLkp",
  "key2": "5ndQZX9JFVAnW4N3KANXdxDgmcDm8e19Fypy2ENDVRftsW4xQe4dzpLmzxLd1TT8NafknYH1ieXiW5gtMXxduxTS",
  "key3": "5TXspku1uwen3c5XfXvG3PA3Ez6Jyf4KFr82m1x1mzv6yBaU2pfuaSAj6uZvAQ7ukUqrH2XUDwKmSQbEhps6au4k",
  "key4": "5r6M8b7QyDo3A2468PHHksHVn8vnftR7DN14NbHmagezAMUiVgsk2V45HyWDJZ727GVxu6FUzXN5GR3ZihTBUeqE",
  "key5": "3Pcs3SiyVZN8awKMcQiiCGZ9yvS27pSLvrxz4yijM7kaSMMrYxQFxivQLZ8HLJB3vECtVmscdkhk1aSCvYqyUU7X",
  "key6": "3ZynbJq6YVQNGNxB7nWyDUDuB1SQU5EsooxWDcNRNDK5uXTpm7szBhc8A1W9bgjkj8zZHAwaV1whP1uk7Hk4PoGj",
  "key7": "5VZEGLxfsAerS9n5BYtRwSDLDDQbhFqee3juTTz5Ujmv87BzS65hYJkFwUuhBTWNHLtM56uKYLhEY72TCzdth9Xa",
  "key8": "2KDpdBfRPcSGaGx5zhRJRRZZGGhGkmn7yVH3My4U4kQbz3qv633dpeF5T1qMNVsSTs3mznchKpZc4AcbQYSPubeZ",
  "key9": "3WmoPLPixjYmyoTDtWYkAyqqGVxbxqzV8zPW4QDa9cn37hwXRWRVBnagLckYCxxEDPBttXhfbP1bCaZq1UwSDYxQ",
  "key10": "3TD86Ququak8bsfSRfPY33FFjarXdMb1QorrrrdTAawGs8Qy8Vw9HEs347KYYLd4UTtpkPyyZfLpVg35Mr6kY81B",
  "key11": "4ZvTVb7XuDE3LxgDHtg1bZxXDMAGVyJKdXzcoFsCxLN6jshbxfKK6rnPDuhfTVJPXMxUirdtkHRuba3EcE65kqZx",
  "key12": "3wV8wBkGiGQadCTEmydH7yJKM5oyP8r3hwacBsHk9cEToZDZPZcKfCqsrP6n1UgJPhkTNwYuwmC75qn49sTQKeEm",
  "key13": "4SjnxCjgbHcnnYkhrctQy2XxCSoaCVHmabDykCYdSyF6vQRjVJF5yZZvKhyq8RZ4VcwWE9cHYAHt23QKpKWVsYAa",
  "key14": "2fH5UwvBZtw79hkxZ9UVNBM5ShZRMaGYQxwVaYizT1B3fhRFB1MMHb68GgpiUUxfqGj4NGmd7xPUaDmKf7D9NURk",
  "key15": "4CPd524wdXVks9chA4komDwoBk5ZpS2DPD6tJaL4aXqpwm8qRmd7ZMjHCWCRt1rHR9yJQko7bWSHLXgLpLsMgHMv",
  "key16": "25W66j7cgWNiBEgMYxdLBLHAS3hyrX4yuS9iV4ttGszYH2yQQRVoqnf2RYEJSCx4TDJymAgjtYgznVtPr5x46Yc2",
  "key17": "34J4pQVhGSNeHm8c8CNT4qG1aELAcG4HbowmPrjDrbm1kkJf511iF5ksKiQ8h82ttmVPmL2AwnExcgBC8JUkxDmE",
  "key18": "38n11UGCNcNbbd1iZxStrT4pwusHr9FtLLzxaQmMbZjYt7QeYgLGxczU8J8JwsvtxPLXATPGuptYJAhSJLWCC5Ta",
  "key19": "5Sh3SFRjohBvgg4RoxXC4pbzbtXUaJYc6qBcg8H4fLzv4YYhSF1P18co7g6mAcN4VbDk4gU5CyWEPXwThFtXfsAw",
  "key20": "gHub41ihnYnhjB64gth97ZD4XbsjPGZpo1xV8hEy2B5UFTEDNcAjVZNfKH5nBXhpDXjbPSkSPTGGQPvqxzjUKuK",
  "key21": "32g6vbw9CqpVAzvyQzwTEVLz3Zw5HRt6uYRcbBs7pfh5TeGEgygdh2iKfqNecJURpyRu9eVqMg5uKW8Je59Rf7Vd",
  "key22": "4ogURRgLaERrpsmjaWq9UdvdqNgmX6NGgy6MU1miBNRXJJCUiifYB3UGtipYhLZCkPKRonXbXdC9ZgYyz45Wzp1g",
  "key23": "L5ydKKvoRQXDwBSu42o1e5yqHLPBGFpkBdo7r3mdbVYhvSCSHCNfu7QJxofBfqvRYrxr9vdYhe5K97uHRZa4dnx",
  "key24": "4C1Jh6y3XV3juG7HCJSEzxetg5SWKt5jgTmeffTQyfmXunGLY97a97qjGB56BF6jjrTjFwjQGZZHyCEiM37LmYBA",
  "key25": "4DRhaj3tEpXcA3eic1ocBZDxqAMFSSTDy1jxjrQ8MDksf73SThpvpTyeeyt83BNvFin8xdeZNyuSYYghuLEjJPSy",
  "key26": "61NjBhYhhwgnB33F6jJbcHpazXPSXTH54yryoxiJERLRqiJnmEg1c9FgzW1jcwccB7iyv69e9VZXeVMAhc31YusP",
  "key27": "24H533sFMjPvhVRfNvy6e4LrtNFV3fnvABCciQxfN6UjS9jXoB8mQZSLtQLxqLYqPN1iT9itjX9zhkWX64qVUzYv",
  "key28": "2VVJJr7bvxTV2b7vgGKYxoqitYXnbKPJELFmdQWyKfAswiJhno88jmhgd8Qz2CQQ4LfQVwPC4jQBsM6FmTy8eDJH",
  "key29": "wR2CqMjrrE7qSCuJE2tSPPgzvHoy7Gg3qVYkqCzgP23Z75mNq1gmGBokgHMvqGR3qx9U69UB6bM2G2L7AvCZNDm",
  "key30": "5G5ixKbdeVarpWU8DupsFrJPcHt11GuNwbXcXaRXDHc4jgLR11MXcJoqbBjTZawtiL9MKTnviZEmtHQEZ3AfCk27"
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
