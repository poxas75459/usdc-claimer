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
    "4z1EjEAZHnLGwVhibDgXTTiSpSn6kFxsMdvKU5F7oSi3YQpghjc1xfP5qBJSJPed5Gyou78C5GgpWgxbDMUokDcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J137hTfh4uhdaYm5CxrXveNSjuddQZbw3tx6qKE3yMkYtTSwsrZ7M4ZdBmjz2mnywpQDTnsT1SetGCcafNACDB",
  "key1": "4gXmXW6Re7xx5mraDVihF7rvEm9NTMJN5pBFVK9Jb9229bz8x27YtCAo6kjnnNrWQtEqpHikXdEKEFr9kHmCECbv",
  "key2": "8P6q9oHcSrsjWgcw9Sk4s84x2VUz9n6JTgN1Hr4M2uhHR7hbSGexFvoXcjCkfZX28YFNVD9u2AuUwA4JiJXCAQZ",
  "key3": "3ofa78GLQdaVETsZ4smCYMsZDVpzsCBZLPcPem1pXjbYSpG98k46UqTJCy4JwPU9V8XeYLjL4Ypf6eui4RZudqEb",
  "key4": "48cgbPzWj4LrirwkoSv7d77cBSBK2HcKN95qfsC3id1BqcKMJU9BJXgRoWzv3qe7hG9CzrGUXm5bwUKrjkDzSeXY",
  "key5": "2RCF5eopZru1iv9KCtMcU3Zx4VivJrTYAQd3s4rnbDzzvqMgXo9BvCVJLHeCvhQ9G1y5hvunFkzcqiQZ9LS6zyaH",
  "key6": "4vG5VPANvyCDYFG6vbpSWTeKfqTqk4hG9fjxq8BBCFXKTMuizzVniALSdhG99uS2w7KGvuvgBxhwkfgFS82aQ8cQ",
  "key7": "39sjXsdLSWb4CeWYoArKZbjNkzfckD8DrnvHzfiqKhv2XZRuYcRwoVySsbsTVahAS9feNATCUm75WTLjDJtBf7G",
  "key8": "2bH6uCR3TG9gj228RzPrHt2db7StM9bqb4a5V4PuUVMszuMaLv6MyMB3NPnE3nMMp3KL5fEf3YVPEjqemDzRDAQw",
  "key9": "3BoBp5kRrtPRNY2LfRn3JDurPjksbMTBEipJZ88PcauhKMH6zTG3rSoET3Xa3NjUqSCn62BLMEex34gq5QS8p3km",
  "key10": "3udP92UFAh63SzQQm8UUVpoAU4QQLKohbtZ9sdE9H2bvghwcYyFVnWfk8W7ZWC8ZhYec1BVsXFKc8i7LLJUdkmW9",
  "key11": "L4xyqnA5RmDrTprMgiZZh56bLogb6CYz2icX5ePqyZJabjGrdLMuJhXarLG39wv6otCmbA6qbuKuKDvihLENecK",
  "key12": "5efBnrFFMRixiotjkvvJjTZkbKc5DfhFj4p5eo6QLqEvdJG6h5kidYp1Kxi6ejWF4hXvhiGDvSWZL59eTmEJ8Axf",
  "key13": "i3Wy9ZxeGhRHTKfhsvodUXuwoFoHM5HbKTQypPYEnNhgxqSN7Nd2ZymDa67iPAqL9yXzJcfQeoWYGTf7pQMyX3F",
  "key14": "3kNs2B2sbtKCcFLYozJE9Ro4KGNyxjxpRwfdgaDgYaSgMQse8ytJvRsMn6ShcFBLnWexrr1CpSpiUTfAYa2DkqSb",
  "key15": "46vx4VnR4BKJncgfoFwcVTZT8SWyvz1a7Nf2hgU8wy6J3muvi5jRvcvosCDXRnjqk357qFDdhaa6rewqoHrR1SSR",
  "key16": "2n2oCaGqb6g4tUXTspMRDkxhFCxvqbE7rnLcJqZibWBJFzHtt1mSAzJ1n3vxe6q8soFeAYsBjZK6MyUG4gjqus1d",
  "key17": "26QxiJyczD98Ztx4Fwkr1X6STShQ1kzCGqpCLAqU974NR8aPRucuQkjTGWDURtbhjqGZnUCmZ4UGHxbrp9x9QLNM",
  "key18": "5TA2NPWdT4VQBp516GNqfQUznY3QmFzYJpKCsDvXPe6KtTnedXABDDzNCtbCUTTAsuNuvYDTR8LdLCAqMjWPhCyK",
  "key19": "45izjLDUurANoXoCoHcsMzJUU25LeHmsNc94RNTWi4BPSP1ueTiZ7CJTFqjakwSVFQN3c6kguDMR1n7NaXxD7a9U",
  "key20": "hoSArtNG5bJhHEsdNvb5tN1UzVCNpyqUQeec3d41UkGH4PGfSGvmHbgcS1EjiX3nvT4DRkJ4sNW9rGBM5RKXzDM",
  "key21": "sfr4EkPfCXLBPNwLZwTwFnsVCQyftt3xkBDK6JjhQESmTcXGmUZ21RrJHke9uvyF3rtyL3K8wNpQAX2m9Aaa6hp",
  "key22": "2Ev6ivbstf3mUgg9fo9hLxpaqJ1wLLWy4fuQEe2cY2zaHEsEKfyTkwXeZYPKUcnSb28iox356hzaeoeT8AHbnCc",
  "key23": "5x5vKzmB3ZqJgdw2NofCbdrVXH4RT5NkmJtk2uBYuPVqQvUr6uJUh7RT2sphhTkF6RNhZ2D2Vr6w3KeV1bQVsrte",
  "key24": "5kUiXcacmVCv7BiwUfwSMGESVn6DuTTggXXcgHDs7zDaHNjAvNyKPK93zA5LT1R3NwZq5BL7oXq5sLasaFmEGNoe",
  "key25": "F7rnmL9hwJAyJhVX8RQM71v7uMAhdE9pbvWqLPxxYq9H1vamN2YkFwQwdi5xn23EGTpgBKhPiqxWpua7pwkgw4j",
  "key26": "2krbr5ibkQqHnEzJV5xQhtMtbvVPBYj6A5ziiSs8Un9f3dhhFf5BoPz2wq6VmtzWYZearW6Tidi4ntJLLm6ktLSB",
  "key27": "218NU6sVx55yr6BYbVcH7UECu6iQQgX6hG7umRDypTAcCcbc2PUCS6rD8mg37Po4QmqdRtPuEKasLHv9ophURq3b",
  "key28": "krfCLmfzCJeALThwhgpzdjyoStp9cdLfduK7LEcGnkrMS6TngKxSL2Fs7qqV5qn2GpAxyv58VL2HjUN3itGrr2r",
  "key29": "3p4ckMBSfPTJTxS3L9hHXnfxJCsii2pb75fxT9dcneEiuQHi4TN8rE3Noa1699xJV5q7vXyzC8YCPsPU7qdiTe1U",
  "key30": "4K1epQwDwiSJd9UnYqK9pDYdBdSPsncq3oZ9aieUscNV6yFvGjuQ92piew1PqUz6CPAxJfLKB5sPUG6yHf1m7twt",
  "key31": "52kestmHGLhvVzoqqbtU9obZJSmV2JuC4bvDjuHAXYtuGaupeD5yA6YVqpfTQc6LNE3sCM8re9YexCZHLBnk5fQy",
  "key32": "Jv8JHuWKUdc5gBLvKQP77XgWoPZKdXk2o8ikTNYKMJ83a6iiGJM2wxVn4irn9nVXVEcynPRUvhXTAVW2dWZGuX4",
  "key33": "5ZGENoGueX3Eumaga2iP1wLe3bodf84PV7yJdBwaLVdospgbL8eR8LJ3xVoBfxdQDvks5cpSG79QQjv1NqKARPGK",
  "key34": "56mMxDbAgJKPBXMXcHMqvthA3yzF146NubPMXkyg4qakw9dQyVR1EHdnH8hceBsTSXnAv88DtNuTjtbAmwhU39FR",
  "key35": "4FwwAWy4BfRD9p9UhEKG7cauS7A9beV32X6GJQcixTsBwnTnGbiVKyrFoZEjfpRe8DFsQxUh6Qcx1xGZBqtUM3zV",
  "key36": "2tC6nkhLKjDL78vufYhHb6FwEW5XseKN2KaAc8B7r9T6goUDFQg4Jt3HP8nnZ4MGfCmZMfpQMTA53mBF9pDmadrK"
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
