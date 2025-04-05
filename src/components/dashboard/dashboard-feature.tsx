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
    "3R729ymaRJed8v28gEnfgQ5cHb9tPUDU4B7K76LCG3T1VzJfqvkUMzcMDeFrp6viajnkJMf3aS6v55BFhupEPCty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M1vFa8VtvwGUury4YQE61m3Q4E8QijhJm1sMw3jwYUuBMFydmDpsPJYeZbRu7zyEWp2Qtg48APw15V7EDZL383s",
  "key1": "24RLZgbUDeZEZYNauTYRcufjn6hD1JH5byhAWYkdxZE7taawdBxzrSx6LkChHXHP59gki51A4khFh6MsCzTreigS",
  "key2": "5wXj4VGrjpqR96VxjahNrGYoKv14aXkLkAWC6nB8VicZDpqjBhQuUvigmgAFKypPQEsFo6UfQCei8iEHwnAZoJXC",
  "key3": "5HwZUtv4hFdv5kT1rMJUPuTH6BYGes8TuqZSmhVFo4CSPsjSXXc9xoJZeLMVfHKhc1ce7rN1pzXtD7SXaESyVBUu",
  "key4": "FemzJx8838vWenYdzAymgenuTJ863X7FKD1zB8eCsGAChrFMQvY9YfyhX4kpkgGqbRSoeKQfT4eiSbu1tEn8hcg",
  "key5": "5ZrTabk3EnWR7CnaruMjcfyMmDtd1P5JAcg71rYWuGpdYA8ScKMZpFizZkVPcQvNFyGwL4GM8fzgm6hkJA24vpqM",
  "key6": "jxb5iH1fC9i26rSMSdjtUrESzg9aW5aH5PCdNFfMkMkv7BDRRt3uHhzAeXMseMHivS5Somd3edRmwgFioRWoxTK",
  "key7": "56bSS45F59DiLrDoYxcJgQg7NsyZWyPccv5JX4jVESNYSDxzreuUoT2pbCjKFUchNMkN4txHCerRpNeQozxmwxyb",
  "key8": "E5KvMHDzZZbX4uwUNMf47fnGDkk9VhwdQPTh3rM8Kh3ykVUaSADYzdLwszSkTuY5J8ZYfCJ4ryuL9e2WzkuwGQb",
  "key9": "3wjcSoRxM7hgiJzbY8jZvAsZWQwRLaEFa3ZyJhyo8d3kZpjcaZ3ESjZevxfbEuG7xCZjFKRViXSoJRcfSRo5E1Nn",
  "key10": "4VYvx246uzJj2NVdvVrj4BXHs95rvrrQqB9yMgnonVgF3HwmCwVxiTutDTBf1ztUNXpYMwb3XcoM9cJbJWhgeC9x",
  "key11": "q3rAGF1Vv8vVUx58E7Tuu6ymGYmhRS2Cv3Dh68TQ5krJDNk5rgQLEw86UET1nXTt9iyX6QzEhpA95t2Qjv5qbJd",
  "key12": "3fp6iyJSPyEGCCUHrUvg1akY5EJdzTDy6HmJf51WZKMkUy1DRtomFqpPVUeZCXfsDuVGNpfA8iTayMWqXz6kBhri",
  "key13": "53a1nqhn1hZ6JuwtocMVEPq93FboLJkvojdGzbEwezR1PYZPBYYAFbXhdo3vtoKXMTQeBft3TiVa8KrhcXwssfXR",
  "key14": "25s4GijJYKNXoDLdqiLrKN4sw4iqPCT2uD4pKeWdXREzcTc3eYpwpJ7NuN9xi2Kx1nLaojneGLeU8GtUwQWfs5hx",
  "key15": "5FDMGY2RQ1gHEU5yvWqtjeazuJeR1zddJciyz4r9vAqfQA8oQo1TGEpp1Nu7S1urH8MYVyutFitivrhTSRhJZrBq",
  "key16": "4g89LtU5qYmdNdd9kWCSRZn9WQwe6kaidCnURk7QsYUjYFSu9QMe3Eoxad1oH9SjTGAHM8JbCNEYggjk3nAtD57P",
  "key17": "pZVeiUiGyLFJEpx1nC4d8ecpZmJsY1JZoiZHsEuCB2WnZNkggSTVPj83Ve666JuWdtKeZoXyF4KGajJA3YUrsNd",
  "key18": "3mi5nX7WWRA6PZB8pL2zUkMgW6UFFNZhj2aKZcnJVTEFFQGumB16nB63octDzU44SfHeDvCyt4a7L7t1jkAfTUSb",
  "key19": "35LQWT48sutStoGsLU9TtKWt8NYYAj386KSVQTokvV9ZpFZAjU1uKJxLXr6R4wM95GUfuzwTAHu2V7umHyVWpeiQ",
  "key20": "2kQ3zQgBigRY9L7UGPepsYciK3bCYWEdaAMwyL7Q97Cs7RYZ3wjN1oz1pMkT9ts9s4bxHN3hRVzMpDHk4wc4WM9",
  "key21": "3dPVWHf2W5BUG5idK3YWL4x1SXQESyXFiYV1yxYdruT6cyJaQNVdoqGavMiU1JLNZwiL14BSzRXquVpyeJLQwqcv",
  "key22": "3RHmQXmwxTsDaKb4udfHYX92fUDLp2LQvNn34kBoS8nSWuyH2N8rPjZvw43C5Sw14FQttC7qkKrAjLfN9yWUZNgK",
  "key23": "4E7j82JZVQnhJ1SN4jaycn1DkUFCaroahAayfHjpvVSQo8fjg1NWJnDYfnMMcKd3Zc6Qbx7HYLGvs63RkTAtBrNu",
  "key24": "3VsmKRZpFv71ofHrZ2kWuGScGpWNY2BXjfVVjxRyCagp4YA87TCHTeuVU3peHQN1Xnu4uWtSBhNTbaNMoi26m5Sw",
  "key25": "4MQEjxrcBquZ46a5Ut2qc1gT9eMJekbivAEicKcAratzYvT7vTRT5iNpqdAtermBTX7jjkvfuxvJMJ2cv8QhW6n6",
  "key26": "b3JQ6EsrDsCvBFPSKQcZCVPJgKHWyFmxT1zxzQUBniU3xykjV3Wmear5DqZFTpnmAijAvC1LRGxtXtQQSxzkCTZ",
  "key27": "3heWzwH9uHeo7bHw47P666qndQJcz4g7nDuwFpkR5kjJtps9AzqjXuAzwVaMDNhbbJVRYHtBConudNw6BjQ1a22o",
  "key28": "3M1riHUvAcHtP47sjfBqHMTuMoCBKXyXkwa74GpBqume7sEQXSRFA4EA3GiUAWFNwQXjQUcZxfL3RmqZApGSHmmJ",
  "key29": "5YXqKjFWQ4rUXD2xd1RPWNWQGYkKdR2GfXgBBH7vNTTLLGJHw7WBxh7XL3GZRKGRUBqu17DZ1mYDxmqZEzKAD31j",
  "key30": "j1AmNYpo4rvpKtcTpsJ6zELKHbzKa6g55xVKgfzVsGZAAjdaxMCgfYJxfZMU3Yy7bHm6pnFojzC7ZsffnY9NFe5",
  "key31": "3kVk2KXGfv4vsKPP4CKUTG7wB5RrD4SSUnifUY7QswCFqjRmozhAGiCsbXeMtJnULrWW8cScgLV6mTQsktB6uWry",
  "key32": "5wKSxzgWZnt7SZ3nta5jc1ej76KMXW42bReW5BFf8vQP7v9ZrunLEENyZnigWKGJcJLto46M2ey9hD4fXTgSjCYh",
  "key33": "2PEHtWSinpMerofxCRdDRqyGTGpYTrd4E5oJbevBUkZU5tB4yLs8nKvY7G5pzKxW86WG3DJaFcNKwGaePBzzJDWm",
  "key34": "CJUUM5ka5a33PNsvco4otiDJp9Mt8NoyABUF7o6C5fDKfcQLrv13GXVi9eDcV4s8zuq5t1FGfyPBp7Nn1jDoUTM",
  "key35": "46JxCVL1cXkorrieU9KGnMPvxWBEjdVavtRZzfdV13b6uF7UP1Rp9VTnrjpRSm62BDBMspwgLGBGhwFg1RaXszLz",
  "key36": "5mg6aUvXZqtLC6NVREF7J7mtxNRvCWD5Na5ihPe1R6pxya6zwg6wdzg6KNuzDVPXuJYVnPUsUjTiNqfkpb1JnuHL",
  "key37": "4gHosUrEdkVsusHarMj43NxK6bKSjMjpFNmtkqZne3sosHqzkPCoNdyep7kv2mFoUbANjxnpvepmaUd2akKipTCZ",
  "key38": "5qP5Vp4HTJXWmxD1PwoCkrv86ZT9egpemQaseVhhLkD5UKBhK4FTcUxJG1255V8mQuWrvoB6HMznA37cHPGEjyHX",
  "key39": "3TJi2E1CekrJ2oktA4q5NDy1wDbKYZfUvGcKDyZSX5A2Ta4hpB6bxx9MZkbvqfm48QgdtMnmvcgtfXNeiMRFGVQw",
  "key40": "3knnX1PEbpMsVxT8VXsLUGqMsJEPBiyhfFbePjyooYTZT9cZQ5Jsne7os8y9ZMWXgTcx9UzkN5qC9Xu5WbbEciuJ",
  "key41": "P3Tco42Pojt6tmCUUtfGUhDTswXQsHV4ro6HfPsQ34A3wLZcVwcX3ziKrX557BstxET5kbGKXx5Czmnvt3EnakK",
  "key42": "4Megmf8cXDgvPo6PFczdJMH6c4LkUWzpz1yzJHXrsHjiEVTiMT5159STCYMnaEH2TM9VK6v9xendBh3nDjp9Hp8q",
  "key43": "4eoiPUzaqBNWxYb8i2uQBUa5c7R8fiD6mZ5mKQJenHtBW5PmtN3UytJVc1R9v5j1cRByNsNjEgigHJsMeMB7m57V",
  "key44": "5w9PpYCazH1WoxVCbxJioHeZgtbfobLYo5auvRnXiABCcN2bYCnK6nWXVXxVT4WSHWmqnUscRbB8EjK6Yx7kkKUx",
  "key45": "5BJCGtHcGuPLnwE1HZLPFGrNtW2FBuayVWeoiUDXiTCdahaVk8pivFtSJnfQnVC8z59k1fTyt1Lg2g1f3s1twXj5",
  "key46": "4asuBnMcgdKefV4VCLVVrT6sNQ7Lvb4CW4dp4bw7HzfvG8tpnRnHB4dVPhm4kH8cNEf3KnozwDMiBsWUSuFqnDXZ",
  "key47": "3kFaXVQGjchjVF7Qu9aC69phKHuxn9TVUhibDbtsR8LEob3qJzhsXs4P7rA7dqg5ex5zLSFpZ8Cku6GvtSv4kLF5"
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
