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
    "5WaqoALkYBdtTpNavjgj5Bs2REuEbDJJFJRmcmbUFboY83hWfzWFuzxZkoscC1W6TaceDTDrq1hUSJs7LZPD8gt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66J6yD6GeVaQsrUjFPrL2MfFLwtmgnRYGH12qBabGaN4vTGpvM2N7HP2t3RWjNneJUmX8KLx3gRB9z9nEbRtniFy",
  "key1": "2vWJhYGKV1gqX3V8BoHhnqo8NJ6rDpTmx6UWnYsv3EEwztgE3NNFZLPSB9FK8N5VRSN7Tt8sGZLroAc72fuAsfy",
  "key2": "5WtUW5NYrry1YZAi3zPDibej9jsPfCnhNJJqMXWKM7CdyxLJqUdV9WsmyHLd9QxvKuQzhe1kBn2Sjd7MtBoK46Zx",
  "key3": "WiTHj4Hr49NyuCPcwdom1YHUFEu4GxMdqbC42gQx6QPdgdgoC7WmZ9QScD1rS5b1389pnPphmvk1BMDDx2c2auc",
  "key4": "2BR9YJePgoqenguKoFLCq9buKb7nYixS8VmrGgQXJdi4apg4RzGf9rRHh3Kip1bjBqYHyeoiWQmt6BgUZi9Dcgdj",
  "key5": "37hqjBMLr2h8QK3iFx1S1r3eD1P2DtiHJEZ8aVkHSZ3KMYgF33xSdxTV6p2U5124s4dxp234V9n4615aWnkaYrbh",
  "key6": "64huTZZ5o1rPqrPF6ogKPYiofdjf2CjKgMwv3KmbPR7SKfBEZB5scnkmD57qVrGK8mck8hbcFZRLLogyxFijPjGY",
  "key7": "2dd1Rt439j81kJ5Ay3k7DjqnwXy2Cng4bjDHySWxB31uAYvJXNn6EtpiS2j3iyAhFnfa9uGrif8VLWT9MoJCLnD1",
  "key8": "5QE8WU7KmcrxvZC7Djjmwzh8Sa9HWkpKRQgn8Frz82k558xKdxJTvwCLvmH8ynnhhchjYQzVq7kSSk889Yor2Cpm",
  "key9": "5AvDsXdm5cMWj5akwNwxLL8CbhyaY4DM15zKsqMt4i3zyFKLACQPFzpbuT9WHaktz6CfhinPsf6DTBA5DnZ8feEy",
  "key10": "3htvuKCEJXtBFL3x6LekPZspgd5t93bpbWcAsQMoaGQ86YkN98PDtgtkjWAR6ZYfXwv8NhMbkpvVRpndGpvfN7Gb",
  "key11": "2GQu47a8SDVWLEqchFqTaY5Lmxy1Y6BWENsnQWakLjVKEtVCeeRwkJynjDSVrz1rF7dRwpRzddgDPXmeToseGXAW",
  "key12": "5yqfmaFbW2d2stsnyxuUCGgJuZnwx87CKaGpi7PeY7JtRHPTfnvSAwMSqbVFEvYM1NwB8TMvGuvkCxnB3xqtYuxa",
  "key13": "5mUTFbimqiipqFiENvyTFSfrZELSRHrUqAyfEHCJRk4FvtfYqn597joGRGkKiyLLKi3wzpbGPiotbRxNwPWPoBA2",
  "key14": "2SGo88RpzxnhcuZCe9TtjfWfJvu8WLR7caLLaLc6Q1fNRWzQzbRYP4JrGuKGSTkG7rYyokSVJ3CcvaqnS9EUBhT7",
  "key15": "5LJYvPJ6kbhmaMnGD88gunbzFdzc3bD8YDQ8yeGKnn2Dd9kGL6wUM8gNJoSZVL2BbwKkDdqmCt7NAqwLEx8S3bJU",
  "key16": "tAPxeuoJBYX2hgX3Da3yi8ik7kE2JCKTQZnNQ9nGGGAUYvH3YwWp5g83B8yq7Fm2bTbA2A6aeqk5Z3rSXxe56NN",
  "key17": "3m44MkrCPcgxKFFEnVrcj1ygcdi8n7Z5LL1a5Z7yqe64HYtFaMrrb3viphnwimeK6UQipKPoQdUavRia82YUjMC1",
  "key18": "5n5kYrnm9XXxSRnWRQfyuz1o7wL67kbC85XBrnXP8dLvYDpmoPT738tAZeVvDWnVwUar9FBwSmHj3wLq7zmPWudV",
  "key19": "3bCfeGdrCT2kRUUHr7d5Rd6KTXL5qMnVRicFBa1XEXXJZXZS1jYkjYVhrpCnBLHMrc9Jip6SxRW6J25RMSLRJGyK",
  "key20": "3PfRBp3Euh6VYFiVnAxKkUhV36kVDb6NJjyjZ2S3FGdW7Gra1SAfzxCFXtvTBQbcYKcJsGeHwpA1haeC3JyDp8cz",
  "key21": "6dq5ybqtDsiQS8rvj5oREqN6ArqRygon18geqe39S58oAcKLQuETQ6oUspq9gHe8qn2Z5nKNWJHWHSigHxMY36c",
  "key22": "33hQTxA3Z66R7Zi3RkBx52sZnFcXGJkFy6xhYbMvtzHRWdBixD7pqFYq9jr2dH7QAv8Lz926RjJd2atqKzn9igza",
  "key23": "3SUgG4Vj2bSWFcSi65zrnMpkd8FKyMzvWNqAAr7m3pE4PaiFphjjuCduJ9dVSMrX9DamfFnqvnj8ZszFrzjfm1uU",
  "key24": "2vjEftkCuZtP6o1Sdjkp813qwEinXLQSWgvazQVXAE7AkNXSQMyyYYWQDT746LeCQXv63ZqYiFy1mRCb3FcJJkBs",
  "key25": "5QZtn6RcNgtyGgzor9gYoP9XFJN1m8F1Y88euGP8QEFbCRSz1DdsqJYXgvyzajRh2tzp6JZ7i7vxtYpVB2g9esYY",
  "key26": "5VnKjSaBuUFrwGgUQbgeKxaHFgr4L3VKBt91Samhif7DxqLWySsQpU8DZL6pLLpYXVfvMRnWALYtpe6WbTWKrhBC",
  "key27": "5aPDtFh7uKkNDDUzsqpBwNyay8Jz49wUWncM9KQk32HNEmmy9zHbKPtb1M4WSfbVpNYBixxBPu2ixKWk47FYZ4ta",
  "key28": "4dVoWmpuZkE1JuHCnNdspwhpbbtAqPAw3PnCbRL1u1bo51BtxFt3DpxG4NYNnq4AWL7V46mG2NP3MEmeRjhJqd1h",
  "key29": "W3uafR1NzsJ1Yhq6x6jyufT6a4NnUQNuFmzNuNACos2ztuiB3kqnRbJ4gXnJs87Cn3NHLw7fZ4ZZM3fUS9sVs1d",
  "key30": "2NKCTn8JeYm324oMcXCDTWTcvndXuaaHV1YkwTep1Uu7qLJTXtDBqaW4rbB5Nnc8juRC6WfZoSq6TzRhWk4y4rbF",
  "key31": "4pSZpiofHrAuuwuAp1v9q4yiGuhWYsqEgZNEaonwySuaqXABKXsvY8wXh3Y7uvMgTJRK61nfPACKTE4PBnvGoFcR",
  "key32": "3xy9RsQNcuvdX7xQza6jzxAeZVDCgFviCBZpodcBvaC6bW65k7wchHefaoH7SXWhTGF8XqFhVHKTsYt2FNGB9yoE",
  "key33": "5jvM2fup6tfEQdkfkj8aGX6ucqY7Gdu5ZZgs7VQ1saUWmJ1DGdLSJ9fE49RV8i1jTSac2Lkc7MzBYsm6bqLsfgdK",
  "key34": "xmp2sfDh9iodce57JXe2xa5QJKxwABg9b32b161XRPqzcSQYvyQ229xMDqcvYwFvVWoARMSnXdSf38WgoV8vRqw",
  "key35": "2K63NjyNwnTuhWViPG85VZUdweJ4HFJFc4o7fkCQdJtcjsfowMeSgugCMahUydUzPZkMgqkgHskXZ9qHbN3Mmm9V",
  "key36": "3q9aGDpT4mfmsYuPVJ391pRnDBXbsUyY8KN3EZfUH9ha4gLZYfhpqt36wt6882FQ94tvVnaqTEVasuMck9dY7ooy",
  "key37": "5X7uUv5WyWXL54u2KVx4omnJ7QxN3BAUENE88jnUf8HxMobZrWZGi8365GpH9erpiGtU1dU7Hm8gtw6jeeiDVALh"
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
