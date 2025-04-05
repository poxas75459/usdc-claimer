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
    "27oEzqjHerD1LBLzi1AGMWtzpxpmGJKRbWhWkSnXF5VkTVyh6XfcuZfowGCRGcfymkaHd8KVtu3M3QoEJJ9V69Eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZsKLNQPGMudVxKGrgH77YNXpXKMNp2aAev7KHVPX2kU3Cub2TV4bafiCu3PnJKAZhqZUbxXtVmi9qsvTyKAwvXz",
  "key1": "5Y3ZrupFtSjRY5xmAn49Tt5LzykKjM5oF8FiwgVuGzsMCoPnEnbmxBMgtsKbTMiv3F9hjFBtQkabUfjFkDDHZDuE",
  "key2": "Uym6Lg8HfGqfia8KzSgktn2PdGxAExYLuzoMLqPV2RT41yppqEZ9ZXm1FgmsUemWJ9HsGBkP12PSq4vQHFsXa74",
  "key3": "4jyuapQ7PUyqDoMbUBMGgZPjJj4YAbgWMgpemS9a5BSvwwDGPw5fg4tTDQM6g86oHnbvknGHtiae15xksD5FfL1V",
  "key4": "2ucTiSBtFSFc1XXFkgWWDTpEYXK2cWCLPsBaop3dTkDV7Ubt6ZEvy3yZama4EHbecbgDYEWVtxmBJjZYQwLsstbz",
  "key5": "fXbiq8gugmLg7ngoGPbqGfCybRdQtdPCRZ5p2HKq7dHi6EhuKMZ8eRG6T6zYRXQHX7w3noqgso7hwrhxbnnzQEb",
  "key6": "2eYQxScjFPuhVxEqfXZ2fzxoQjmCmkBTGHtXPECuDyHLx45T1SZ5UcUtufBMYCATXeLt8x11BEKEXSCgfo9TGJJo",
  "key7": "3vD7NnyFCpkVkPHXSn9CF7zF7PWLwvHc6J6Av5ZnffZzkfWJ7nuzBHa6HTkBhh2eyH7Joatq32gqnEVXQfPkm1st",
  "key8": "4fL7cnXcfzTtcyLFjEsYsqm9dWQy3NvvVuEF1WnBjUS7qLnoEmtHRABxYmcZhb2om8ceUGa3awRS4brfyt6bVNf3",
  "key9": "4M5KKyxopknpXHq1NmyWwK1tjpniisv6wx8C4V9S54bKwMNcGuNpZwiveq2oKHw5Kh4LWjtTvN92ENxrZV9bVGcB",
  "key10": "U6ogxKDaPKjJeTKhfLRf3Vdwwmx5uk2DRUM3paBUuJA6fDEEghNNgb5XqG7AomywQ1ELHbCcMfrYvwtcQPAMB8h",
  "key11": "4nps24sHJ9GvLiyDo6J6768DauwWBNUmaFJViw6w7grVyEhXatV5pgeK5Pk6LGV1ihutUuNp8F7iCG4hg16dQ54m",
  "key12": "4E918FuoeiZ3kPzpD3o3K2ngDjFwHydcJ9xbWuxX87yfkQfot2K4kT6M1b9w7UymkJkGMN69zEzfsZTiLaXKULEc",
  "key13": "4oWZBjUFc6Fh62rLXkNNJg42URrHVrKshnWjeBMoZD9RyjSfV7VQ9pZyP5EuJqHYCLJExSbobS5ULVj8beDEZegi",
  "key14": "qv59tdxkER4LnDniiFFPu1hVpcCT2a8Tzi5BRgmdAyHjPzusePBvc6QCWBx1r3Di19YtCyaXkcYZTvpHbb1pjv9",
  "key15": "2EwRkACNtzdLUpXS3C56y64jPJM7U5KtpJxvG13tVQ5Mc3rqm3iPtXyUzER9FAqvovQJeMXYJdX2ppYjEwoiTErW",
  "key16": "44xgjPhn9QUezwzCiDuQDyi7onDCWuXkSPkwLzVJL2fXD3TGLaSUFrBYvDLbRVooeTQKJtKLdB8Q6Q2gYWC8xsi4",
  "key17": "5kCWJ6PdJ9xawJJmJD7gH1CKhWtTHCBWrz7waJkBZscdsMvbE2CvY3HdHrs6k4QeNDCyMSCD8AYPcDaE6KsFsWk2",
  "key18": "3DRKrjkDbNqCyZZSfe759DkSWYw2aJWLJUx53h7eEhEgM4PbC9PSDBfFi88tBvxiXrrEmtJzKNqLs3EhAw6KtvDQ",
  "key19": "3pNsGvYXmwYnSvV6AMFMtqwjcmPvqWvhnuCDhZyah1Sw7hWpesA3tkoiwZHCRjHYZVT2MYk8fJuyiYBtPm2ChtuK",
  "key20": "5ihdmjCh9QjTfrXtfRK5k7uB5xuaHEhXiCbk29wYY85xw2LLXvX5RuJN7b6Fmfh3ZK1JYGVYKrzBSgkaZfKSjeYv",
  "key21": "5zMfyTm9NDLfEJ7oKW2Gr8gcUeZeEHetHTHyYNHzWnPK1dgwyThAMrXzGY1ZxVEcbLpLZxo7sY5wxNGitPY8kT7o",
  "key22": "2nu7o5Q1Uob2BnmW3qfC5TWaXanvgLLRdmkAG3J5bnwf9qGquSLSjH76RA6vfozRvLVh4xeE9a4j9Sjud7z6Mqmt",
  "key23": "MKEoLSpcgLh9vfQSgkTVNAr5j7KvzSFx6vJNa5baoGp5vikMssczA3wA1ccKG67vuSZZRhEKozfpPPZtK15RvvV",
  "key24": "2meJUhCAZ7CyB9UJFMr2ToRAJKaRXgc2PjfVrDvY3j6di4NdU9KjY8KHw4c7req2priRg3RzMKJuDvNv4By36t3h",
  "key25": "3brgfuns2WUeYBmkFa8b59oqkcSQkBtHEBjdrHak3SGqcNtvTS1z8gQQJSRrQHsSKCg5EZRToKmB7YE2HBn88MoT",
  "key26": "2SNcQ8WWkneaLodUqYwG3jBEjxttWdzNgW2W2ZhPd8xepB89RTnfBe9xHz2D17PNUQHDi81Aiqfit9x3tMitDMc1",
  "key27": "Cvvk5MBm3VmvRNHMkFjg1HEcBqJyz3L3CTzoFbHBQHnVC9TJ1yLma87GGKdr57EgUxtiEtkfRVSkauoLRK9zSr6",
  "key28": "4yJo5AWCfGYJimDg6UgrYQ12aqXLnqBUL2vDe3s9fUwkUNKfChfWCHh3tq5Wmj6ifduJsgJAp5qMmQPMzMbXvTqc",
  "key29": "2eDhmWkeytR35wPz9mAHaxN9n1vXSUuzKcJGK8ps39UtnH4oLRBnBeZfMaKLBHJyrkbBaBQcudPEN9xXKXXWiLPx",
  "key30": "4mAGraDGN4dekmKRmjg16YfesjqCKa7eAd9k8RWNUVXCQhTw2cRxYDf9YfddU8Nh5BEkg9zHJ3ZYh2bC4XEC2pVJ",
  "key31": "5eN4eYrRu2qPsi3CwbyMnhBzbCwp6WeciscBjW2SEiHtbz6BzZYXv2G8BDbxLCrDJ2VQNp8DHADpiFWc2TNEuLZ9",
  "key32": "K9udUsbCc4Ky69m16x1ee8iApAVDZ2eWjqehrWtA6vHaEipWmbRKmwh8QjjCfbPHo6c9ZdekaykwQweoiNb38mu",
  "key33": "4VA9EDtBEsAqkSRrnfeNgbNCMSKuQ3t15X9LuWMz4KFmcuqDzM9iWXM1eBcdrwPX2SzDBDRDqisM3CmVJehXwq5g",
  "key34": "3rKN7de2NEW7wzgfqTu39Q5TB9fxS3GKAA8izEDatzPXLa9qBZy2gahSJGfc621WikCbdWd5CmHzDYU9KZ58xuJ3",
  "key35": "2xpNoUYxXruhvV8F8fiLf5PNE1z8ivZW22g4jp7huXSvSvUtBBy3acp8x2czj6pEMvbTEJfC1nj9AyyYTkSmDGmr",
  "key36": "VFJk5MZVAqVpgJ9Kvv29f3A7xaefHwByrpb8cTKkHxoh7nFGuTLrqSMC5xNcHJg7ejDZ3YE9RvVDfGeauaqk7nc",
  "key37": "474zS5w4Sr4eLwVvVBrvX69BYdqJuJj8qDL93srJ2Y98AV1HQLz8Qif2YurFQa5um8HP3fYzjX9sGtiCFKBUUzBt",
  "key38": "2hDYgsVXmrzhcT94dYtsqruphX6Bb7zah7KvbfRms5vz97wtobLJ6Kq7WHBVhc1zVFFSN5PEZNWzMy9Qwq7nYN81",
  "key39": "4LCeKJ7gBcCyJKiEXkFEHggnc4NBD9EnKsnm1EpgQkNpzw1YJHYWYQqF8qmJwn1Uxp6Yg7U7vobyMWBEKAmUq4aX",
  "key40": "3XyvH3UoirWHTMuy5X7NTyR2sTeDYNuR41C6vdiofrHraZRU4QgUc6fxQ1fWa1LYA2Q878k6dfkvPqAxacdF2aRN",
  "key41": "5Sc7j8aWALfW7R267NfwWzL2LuizUY87fQXdqCuutwU7k91FkDhceuXAzuZLmPKGk386EJDrXqyqGNnFqRc9HCeq",
  "key42": "5TmMGaGEdJZtP79T6zR2u8rejknyMCYnzCpd3qqFm4AggXihW2xnstEE77bo6yCEFxMqnr6frZb9T1EvKzfdzLeu",
  "key43": "5UBqBxPBPoW91jdFHU9E2JTFLkYTuX7KxviR7DB5QjmaKWEhvTVuWLbbK9UGqf18BGg3CWBQ1WQNLToGY6ZnAZn3",
  "key44": "25ogb6DB9DHDrXkgVMQsZVfHyWmvwCp5Lyaq1CCF2Q6gGz87HnxASc4XWXW4wHRF3Hq4TXBu2HUKkwpV7n9xYmuD",
  "key45": "3q7WZs5P9NBQaFxHhv7DELPSGhxAbX5ht6NVoN4q4Qtd99Vh3M57fopQyZtzq6keLvzpxkcSx14xs3Dx9XLD3jRz"
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
