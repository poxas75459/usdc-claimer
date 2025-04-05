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
    "HPVwuSYPaGfv9x6yftwjA5h4syFJGpVuKUuP9SQfH4UxbvqaRLtZfypnwfxGhUG9aveGCNZXQBNsBbSJ8rD1PqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rmNvuxtWtekje4RxaqBxHNHdccAX6HZXmtyDtiaFF3CFAYrDcwfVGYCThLX5xJwe5AbbocdkpTDmVdEtNEpTo3C",
  "key1": "5uzWaNVcfCFFV8nVaLNEv7uZTLxRyNCapyXn6x8x7PNF7u8FUc4arMP9HCR7crmw1RbbgqDNJSq7cNC1coWMPrtf",
  "key2": "3d4Y9KizPgPZVUBA5fwXBsarnTN5g4JLYwtJJNThcArumitBPfZWTC3sN2xUAoi3iSjYaqMebxYzYKqq64fCUHy9",
  "key3": "4aAGkrbV2UUTbgQvcXkF3zSFAD2azUnTMAzGcLLHrwn4jXnEDi8qGwtHVQwCei9AkY1Df2R5ySdNLoLoGtPb1o5e",
  "key4": "2J8VTKxeyZC293ohgVyc1cRbymkyx7YT1AzozHmxV8rcW7TcQ9eMeVEXd4yYaVszN4N9rBazX2ctjUpuE5vGcf7q",
  "key5": "5ox8CuyjLXzkgHRLFnqveoBZL34eY1No8cThB3s7dMcFUjqZC5W59jUS3tb1U5WRxp3PDB1r6ckDGqGRgRbxdgpn",
  "key6": "E3UJZv3rChekDvnMnXgMCNZ6kRPCFP38qiXX9BxB7baccSTgeigyeMh9RwKG6aoo5MpuicyP44AWMHqRwfnkLj6",
  "key7": "4iq9wvZmPtbNzSQEeHwUkAEYXEwEPaH1A5eNHPh4FNztAQSfRKCwpK58SRQMx6Fn5vMx9M1cauhh1FbBEadA2Y38",
  "key8": "Tri3qkmFUsziAYC75FTAeLNGF4iPbb1gMRoYvDgB1C2MK3GDcdc3h55fj4iERD9kjM1CCgGS2VeE5RzXcphh6JX",
  "key9": "5q2nPyihToJyAfpbSXriBrc4tGFjv516DYuEj2144Lu4vHPBBnPGptGaUe9Psz2yahjUzP3QU5wt2YSHUSKCWRPi",
  "key10": "2HgAurmE61AcGtp7xKkcR7dpsd7dcpav1dVkVgpE4RKZco1NTbzYTAZCJDK5qorA1FMBLtjXNrJ9t9qAFarxW8jd",
  "key11": "3nYmZcdScZQZmwq2hjLgxu9Z4yJMuC5f877EEKydBhquZbvfVGwB1kTk96Vz7iPqVbZF2rp6deBCNzC83dHksvC",
  "key12": "5upUc2BsKRpAEoTMfVMnmxE2N6MGua6MjKCSuZiSCA7ZdhuKGyJS9535uR72VFxqquMdAV9tiVxym7meK1p9Ubso",
  "key13": "4HBVT6unncgJ2GMMAs2K2SKCAHntWwm8oDKa4Eomkjqh2L5viAtgHKWfsEuCASjRzCYwmyRZhVNyMzoHb3HMDo45",
  "key14": "5NX5zayTp9Uf8J9tv6fWTPS3Ys5Y5anomSzvUwA9qxzd6YAb8cW4SzD49kjrjv7A86MgJhGP3RW2XnFJvbCRCA1A",
  "key15": "5gpuNus1tvTdkyEM3bexDStxEiihMrHVAAi5aCPyywkb5f7JScmaj6GsqoUYiNPGE7nWNia2U79Wbf66UWSFo8S9",
  "key16": "2o9Zo9uxJCyf1AwtNN9SSdRDBKHZ8WDqzetXNpysapEh3911D6778xotWnDhSg17Dd7ZF4YUFoAK4tgt6muBYTcG",
  "key17": "82Uj3Yo324urRrod1MUbiioPYXxiWn1KnJa9giibRrN37R2dnTrGwSEtypsA1xQybYuGpQ5DBRCtFaVmTDGNVgM",
  "key18": "2SLEW1xgZUWzH7BDxQR9Z5n7KCSvcdrbTgmMg7GT6XNQCzESSRJ6qLMcVen7h2x1fPGZNP8pN5XspjkjCSV2kEgM",
  "key19": "gmnynQu74dv5TnHYqjG1JtZ7fM7kdGyQQsiq9uUWKbpYTqPXRUDjXfLownkLvCMDAMUdy21c9yzAups8rEXk6dZ",
  "key20": "ByFiWXkLATZRiEbNgrg6MwYckBUXrvUKUaVfC6No1ByFYQqYyfGx5HDTzTLHfX7Duz557tTaheYhcdb5aUD5Hkw",
  "key21": "3fFmrcVj7upcnfRsru8QnsJPqei3cjtZk375Wiauy4MaNDrZAdwuNjceUQC4CmYhyZJMCCiebFhhNa5fa1JAkpVw",
  "key22": "8krtVjdFHLFq7SoQGVaVJF76BHZm7rTpSNqVPdSHZ2Zx3em9i1wfMrQn8bw4KtmQfTLHTJmQgeqkL5DBeLgGghY",
  "key23": "5yr7A8MQMicxy4yWZMjzSN8PeMAWAyhPMkzgYeeejGaCy4rB3K6S1tnMaQXVpKav7uoUv5xNiBTEZwi2G1kSQgc7",
  "key24": "x1Wf8evhaGjjQ6UJBj6QkU31opZMVgbaeF6W1WPUNJLoQDBrhBsN3TstbHRWVghU7HRR915Raw5mynhGusbUD4m",
  "key25": "5XYp46jLmvkoF4ugnfk1929Uuhwe66hm1uEvxSv1ptg2QcD5k42bcfqFnsZm41mrRuziiqCfJ5e5qGAQPFbeaYrG",
  "key26": "61EGskDTVaKmeoeLCJM1dogdVpbeFbqMGKBNVwiPac4utqHnvZgJnUgchJNCsEce4TPAScT8Nw4R3Re4ZSS219V7",
  "key27": "24Po3mvPWtUKbARzDw6m2pRynX9wrheqFyRqsazgnjrX8bitnVvFKrSqT5TmMhSJBj9BTuBjNhwjqYtNkmNuagxd",
  "key28": "FDdcyActJwojvY9Vra7yBVnLeSmNwK8BrmkEvHHsohx7S62VFAqbnq3uLa9C1rhyzJTXr6tvMcV9WR45ZGTrgyZ",
  "key29": "2kG1oMSwAGjCKY3r4DztEqnRHTMqJFBhGQu1QN13238MSSTX4zzzCnmXxusTSzMPx3XRSkUezJMMr6jQQBx9nEsr",
  "key30": "5r2HM2ALxPRporhe91GRBr3KgJPmmfNmi2RACmgQ7rfoMdakzvh7vtydd6ZX7gNBbxLRkoVbk5bZ1Ru6pP3wptHG",
  "key31": "3Fu8QUEj3MoXaemGLQvAMxS437Fwv5ytNHpXdw9Xf9u1s3u3CeEL1RNRf5W7oCWiNfyYfhybisuTnc5dBwXkr7n4",
  "key32": "2WugGwuC3CyfvDDe6XQBaJ1eHfTn6iR7HRnwdpJhCjWeXaZVrpRrSurXCSrdS8zt5qPiB4LQbSXXGqpaq9whMVpg",
  "key33": "3YTi1WhP52e9SDKkLzV2SBkRyz5B3uJ7zaC1hdFs9K8yJmJ8U8kjkZSyvfKmvHcAfRNGpjZEy69sgJ5TJviXugQD",
  "key34": "2gFsULxxdesACr2hqDffqfsTQWbffGeuYgSqJeDou9dM8EcTCL1MMLNJZqHdz2wg8nVAA572dpR6bQAhKiQqCoCh",
  "key35": "2hkaRyvbVQjN3Q2xRjnhsVZLFPkwS7QexVTcr2RFx3hDpmGPmn86TaNy1Gg5APB7dLgCFGQzC5Arxu69ELb9LkJG",
  "key36": "5i2GX5Er4VVdbtuXusAmxXY9o7RM2RaioJHtdXTkuCMfaVyvsZZkhzijpK91tQpCv6JuznNWEwqsusCsUnBgx943",
  "key37": "5fy6bKobLNjRpwebDHaar15eDKyCERgo5ZkdMzUEN54HXWD841DTmbos2W3BYxrhQCqfKyGed26XdmmPeNT4Y5VG"
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
