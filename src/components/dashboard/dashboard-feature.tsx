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
    "292BpTdJFp7gFr89nG7wUuKLLMdEUJHaWb7LGfa8Lzqw3UT1wrx2nzCQJvgz7j3QRhz3isLggU6vsCS57KW8sjaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hM38sxtQgDh3uxcLotvWpJfKbvQVnMZ3fTsncYDT4ShyQphLFZNhZ6EQXyXz6o5ok9eUZV8gmVnKEgUU2DvM3W2",
  "key1": "3m7gaDShSPFaKeexHWbKJrEids5EgB8tnKubZzhgqzvxUmE1UAmLsVNEmp92bNpnW2zSEKptk7Pf5aQcnaUWkA6M",
  "key2": "5hotJkqMdwMoBEs1tqZkCfcXwHCG83ufoVCh3fvzvo7xuTAp6yAJBhzSMCnjYkTPEaV88FCd1zSJxGswXkQnyQPQ",
  "key3": "3SP6YRFLYUU4Ep2FevYZ59kyCq6qQtjmvzGHdhDJqRcbsRVDQAZsVbbDnk76Q3kt5shjYLSubGNmaRvUNwuoUFCs",
  "key4": "2QrR3QtQLq3TwLTknnthi6SoVxHdhfe63GiNutAZpYg8hDDV2Poip4Yk8ZTzKqhTeHQJLGZpEoT7shZhGY8gCtvq",
  "key5": "5NigncQXbzGhTYSXgn1rroeQMYnKjYdDnuutvkKSaXeCpKSG5rsXbS9LjN9nbaJtp29ffAGJVy878TJvdkUG4878",
  "key6": "3Bo9E7qe7GzYxMwbcoidYku47H9HGRk99tbTmoqAusY7mSXVBwWDtFpdj8K4TGHJ6Gv8LDjZ3iHaRB6GoCLfzBXN",
  "key7": "26JSTAGBWrki2dVXw9RdVkongMVM92dYcaMGPjtPZ2LqK5cxE6fGUCikgvMSkts4gzn1qxYXzaVDeQxvYi5jyKCR",
  "key8": "5H7ZtnGpvum7XxTy9xMqFi4h5hXZ4aZdCBHazcs4TwDMSYnSC9CCKXo2SUu3J2mr1mR7N9VMDR8X4C7qXwRW9y7V",
  "key9": "5NkboYe7GRKfHNgjqNQgSZGfsgKAPuTMycT3DW2ywBdu4EDGKuYKyTV6rWAi5NVe9hypC9ZvhpUE6z2rEGNdyHdK",
  "key10": "3qvzhGKNBJZWECLxmR9K1sxzCXXw6n9koFKwrab2bMGLu2Hwva1URjdbDDkPBy1HbjdCfKcZyany4ACMTsvgprTf",
  "key11": "4rMQCE83xPqLirfKL372xUfjmh7ttdj4xan1QHadFq38D4rsjms5KgycvdMVm5AeRgAUu6ZKXP7jnSEGePMSRNX6",
  "key12": "5H42xfuch3p6rDbwPTB5m6Gvvsrv3JUhn16ZBykCdqymFRYChL39a8LzG6cmjKKnNai1cE8zRmk1u7uJoAFKV2Wo",
  "key13": "Q4zmojd6J83Bq4Bcij2fH3wSqkaxakn9KWvsjfvRBWCGRceJytvYNivSwUkupK8uVbZcnk8kn8a2R9z2sUGHvzb",
  "key14": "4CUE1n4YWQUS2Qyt2E6mBgSPeq7wAv8v7kN3aptJfBsJ9ppL5A32yGFfdfbH4R7wLdbXEYaYMFHM82NVEdHsxnf1",
  "key15": "2sVY1VHNQH2zGCXx9oQffNVfvgNDwmgH9BT6eJdRGadN71Vkp3wSgZjqbngsAWnUxavuA2zcwLXQahFnrrRrRodR",
  "key16": "fv5UzTyJQjf6bKmRJBsMmoZGqeFoqVnE5fAgdURA6HdoCCJGxAv2cULCBSWjHCQENpKJrrhCgqWXDysnXbW8Qf7",
  "key17": "58zm8YZmZSdrwETmSX8Ek3CDKNg14zieew5hLMgcss5XsVjGr5o95Ek3jJiCmausALHUK7WpHzDvG1uLHy6TjDKe",
  "key18": "4Y3H3yj4mQgJwiwBuwkGCWiitYSVeq8RA15YyBsf8AdEjKGkBQps7gDG9W6rLSUz1TUjozQvTnPemqVcFa98N7PB",
  "key19": "2nkJETrGHZk9nPjqEKL7JvnfxKK2o4P2UppqKNzbgF8ZcbBMKe4nLAiDegTGzJCa5r4pT9tjityP5EvVtYfRbP86",
  "key20": "FexfMbQz2PJQsve3SvfYqnbAUEFWFewE2Dy3zRgzrw37a3aGWxc96VapKcr4QNpCMjM5TWcNYaBFC5CfoPGXxvQ",
  "key21": "4hHjjm7oPrUVULuezD53kpEsme8NkjMYHQ5YbFPD27XZZGhCfmnZe4pnuapEN7jzbxU7iGUjMo8dGmMzx2UMujXB",
  "key22": "BNSTL4xiHjzjCsJTs8Px1bsTatykETVMsCqdTu3ndk9k7Nw36Gc4KqgMR6Q7cw3uTj8SvFzCykkN9SNgA296S5a",
  "key23": "2vxp3FVfabceiGcVcMJ8BWL8xBXLzFyYrZS8E3ju9yAbiU2h1VVrnL35UdMpTxqHxEbqpk2sEiNPEuSE2Xkm96FC",
  "key24": "5HFkmUnzDKA6NLcjozAnAR2VajXBWBVyE9Rx3ZHdoTLbJ2nP2zdb2VZf5g9zrswwEUaEBP6U7FhK14PjB19Dbqj5",
  "key25": "2zRQt28DVKkP7rVMv5BsVeqErJM5NiP2o2rm2R8yv7oVDqkQw6mjSRr7uTH2kJuGGaUZeAEJxDchwL8esR3yeHcV",
  "key26": "3tzs66kwAnNrsVX8GXji5F46FvjASdqYzBx5VgA8GPBW8UA7CsiVXkUVaUk1KL1toBG5m7nXwUyAMegUdQfMhdoc",
  "key27": "KpTSqe8QAmhQxwB9yXKt2dMmoQCK2DKU7JQ4akFGPKha6zMMLGVZeVyzVgJEHCRL9XeDCq6HbZMoUhQmHRDUMRh",
  "key28": "4iZ5s7FqkAWYxKUhKFAcJUNy37WVFnuobHGm88xz1o3enquRVXQq6njiFDaaPzfLikSsXLkyob7pFF9aAiZVkXQ1",
  "key29": "2gZkaTmTRAaeME3DMp9E12ZnyZqgKZp6iTwcXa2QQuL39nRCE34VakUAp6k29mgnQ6YsoAAT64sZnLPd9qsngTAU",
  "key30": "4PdjQJCAVHNxY6MzQtRQNKZZC9iSMeCyQcZdZrYnERUpd3hh6oxcmDr4vd5uTezXXoq9wrLW6HsVT5LHLGKpdBhH",
  "key31": "DWek21vtUL7R9T5aZwmSfnHTxprfE3vDXwED9qjJvG2LsKwdBPj582H1LA4EGj4icX42BaHBcXp1GetvjHP1cnj",
  "key32": "2CCDoDwLN2PZ3QPeVPKz5Pfa1EjoZ7iGYYZCj5QzoTAW9SWtiLepEykzj1zLursa3UUpZECLiPsrXosJdcAcHGkp",
  "key33": "1sSw4411WnqK592ERu9x2571zGb2SVZE1xKYZMY7xcrFjVWyWx8636HWa4VnBYh81iEFeRiry5GR6DaFhheYSjY",
  "key34": "tLYb3eREpXTwDd2cKGYathNAxtA7soNo1ZoGGcMi7fdcQXaTbHMWRPyNkMagi8jacQyTLdwVP9DyAoW8xCeQbLu",
  "key35": "5iHpNj8t8MutS1W5TGWEJ4AhxT5ycTdUQ1kMzT7qHncQGDcnNZtRvzTPwf2Pu27V7UkFnVS1NugYfPiyp1bouhwC",
  "key36": "4CJ4qw8RL6FKLFoKhvZg5DwUWsLJcXx2gkcZVRLtBJjpRrgFDdX7m8XH8NxLxT7DKc3LQ8FULVBSUjPqjcuttCTp",
  "key37": "4LGcgFEYhGFn5ohdd8x8etgbYa4xqg38ournqK7gxiPyRNziyh3hkdyMbHQJNWHFSpcK1EPL1Lj9TXNgknTsQoAB",
  "key38": "3erinnDE62oz48YPzCUU7Dznthy6Erfue2Qrv939LSGNyJRNUKvdsrDwsCBdaurXXQV6JawHKc63xd6cGNs9Px9c"
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
