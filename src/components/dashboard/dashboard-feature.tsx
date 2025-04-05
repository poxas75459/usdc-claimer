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
    "322wTHM2KvRXP2WLw22yngmPuRygyVsDxJAbi5mXybst8CNiSj5mAuaomvmmPcj3Z6oVemE34dhA1Ur79cRvrKi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xothyZE6nHiNSACsUkmrtoANn1nitEDUT62fn93Kwyoa8YWcaiq2JNeVd7yvLYiT4HmJem5dUULo1aMCqpZgfyd",
  "key1": "5ZtmJCq6QKCbo6XaAMksKnez4HnDyhUZwbHUJRKWcxQ4dh688GuASGc4Gtfp2MQPd7c9udqdymnV3eHs7hyyo6yb",
  "key2": "5MKNEaKVHbt8XoUJSiE6qmmzg5bEh8Hcv66HcHTmohib5haojR8rgZHs6mNDnxFkk3TZ8AfSfjCPfp6H4HrASg4y",
  "key3": "ZVjV8BWuZVHueyXVQXnyDNZJBnZFi1SBb5m6docamH3EPMLcRiwNBYSEVMRxB3arRNiyWBV4intU2nnfFtj4dii",
  "key4": "5H7ZkhJHA3kfPXZ98jvKXrzJzxsPPVMpWYm9n6nYLQh4P2hYxdCwD2ps5FCFybPJ4dJFJUS6eLwFjcm7NYpjY6r7",
  "key5": "5UFrdGvQcGAyrFzkjipjpeUha6AZoqkThvifmt87zqmLbeua3VMATLMpEjP9LqdUjdzta4K2E8BUhLc7VCtgXGeT",
  "key6": "2U5bmFQMSX3ftExUkHemXyMmMb9ntarQTpTkhK2dxjmF28SRqUfFf8fcm8YRXnEAtMTvS61qqqEkwCYot859Tv5e",
  "key7": "2y5HvkQxESbLVjamCoJXMtwra6usqg63cngbFESLQct7ejzFbqhaMCGfVkfBNVygPuNHda686w9FuWsC4ZTgQ45a",
  "key8": "3RUKeneLopFPxDej5kKrQBR679Uq4oAj2H76fdJcM69WN2HFELPveEyRS1iS74pUo8rqAVid1z7JGLjt7YkDqvzE",
  "key9": "31sn2CZBu4UykQ8BfKKRng9fE8BtEzLaiQVSqNJoPkR9GVA8NEnNxerv1KE1zmmKKYiqWCmLG3GeKDMz8y5xQmpd",
  "key10": "5v6JmJ9HJaJA1kwESQKj8KGowCuD12JxBoMnEoDw6FUAoYgkbDkdgRwmK8ZrBhricc2esjwmhctm9dtD67m1tRVw",
  "key11": "5rcYKe8TGPLAV1VtM73EspzLSd5qucLhPdEYDMjGVhAha7cBEagjCPqT1yBKFCZX48zmGeYAt7VeNvKShUE8mN8a",
  "key12": "4wymHTW1ZN3pUntXng1R54R9oMnxzk7GrDmopNhCvSB1spHvpDdZaF6wRf9u7kFeqfQSFHg6Kr1LVVyCfKHbcHp6",
  "key13": "2mLDTGWBrzJWvhX7iGsHMNKJdLM5LsdUC2AASKqQoQvkTEUGErHaePSgvkh9QcJ95A8FvVkXpfMwqgudZsM3jVzi",
  "key14": "5LoaQUUvQVfptdRsb4RvXVLa7hA1a7BQVUJ1KHajDw6uDvfuEZmz489Mi1tm7sgZPL9kBpe1a4hQ1RykDxP9be3P",
  "key15": "4nqdywZVWP8c2TgcynvmLAxLCh4yMB4q9yd3SAEjgcBHCtvQh72YaxhgmDuXYV3qJ7XQ3u94LNNMxBkkAoYPK6WN",
  "key16": "3KKuyGi5MbGurgCTVMfHFkrfA4xAf98ewAnAAS7P1zBK5NbWLH7r9bsDUsME87n8wsA9vVzNpWbofiHCmheYbCUp",
  "key17": "hewnnHSrGEA8R2za4Zfzt7kRsrCvCwhnqmRCGJeJq9AH5dbS5xBPX7uDGimpaGbe3saBmqhmwRR98nqnqR2B5Ea",
  "key18": "3Aorqp9LXtHp8JE1jjrv1GmaUgcRKsnsEeheGiT1o9C8s72CusaA3XFTNhK7SpztKndcWuwThPUMNqhmcVj7144J",
  "key19": "m59LRfsncDHgZgfjKMDaXCfou5B4nEpRYxobeHfRb3UBf7qNg324ao4dGDCvyerjxbA1QW2gFwqdFAeoam2rt7i",
  "key20": "2FQ9RUwfTBUsebi2Dwu12nrdkLfWJ8BBab4yh4v5qWudAEgLkAMrui8MbjjoAYvAkYWottNt23drePCfM5Ksmvnt",
  "key21": "QSw44fQ3HcCPfLoavy6envV1bgCRyZ8D98PEFPxWtLwn3BNj6YxhvtiKG1aa6XC5r5BNLeg6m2zx8P9MeEczaPF",
  "key22": "WcSnhbxomayi3edQSL5sLYc4uj35qBqexGEFJeebRBHkEAJsYPTCoYFC1e4JsH6ggTbJnHrYE5XVkffYKBWsed3",
  "key23": "23PKQVVMVyr3c5wLiA1CnYc86NwTTopNdbLfF2dgcLWfARRdaqVua9NePLvAoBzWKArM5vwbeyKXGoE3yFKiM8dz",
  "key24": "61AFeVBKGByZC8amr5Txmpi9iffrSckxdKUBQti8G9znSdqhFiNvxbTQjP152p215pB7NHXiuGVyjVaRkm5Xfv6T",
  "key25": "3i5DvqUmt3ViW9KJoMc6PHXTwv7zpbZNfWoJoaQv73pcxPDrmWSnTBztvHkc3a3zAqxSCQEzfRDN69vkaYMxNmiq",
  "key26": "pJ6XBg2BRWFudLh5NaRkrhECEhcCAn3dHBPPci8HUpL661hXtAVmgNiCpVjYywe1dHdF8RWb7mgHudfCaXf8gFA",
  "key27": "5rVJZvzV4fpU1cUVfKHi96FuojFkrsyAC2CaqwyvyhvvJKNbwckUjmDFmXNJ1AFPGCSsv16aVjhEvoAjsuMGxjqy",
  "key28": "jhq5CPFGMzpVaAW2ZmxY8Y4ncVsj8DyzDxuKeVjtEXpJP5f8FuubWDUKayu9YGjnqEJzs4vajvkBoYmaBV564hq",
  "key29": "5nVtckh6zbakHELpF7EoYVuFQXJxG6GG9X7RuHSHqpyVTUnBBAUDjy8JD5Zkp2ggtTFGzm3b3bpCvKSL45827wBo",
  "key30": "KG4bGLH12pBpZd5cvwrV3MbBpuuyzesU52FbT5AFFH4WnbsV7XrmdCkoMoYWjRKUSsBP1Eqohg4yLxKvC8qEoZT",
  "key31": "4zj9Xa3hGok4fNXhGzTbAop4atnd21auHT3YKpTWz9JqsqxiiZCTYNy4GHE3yAJm9mwpU7hJzfUwMJEGmcv6oXqz",
  "key32": "5iUKCZLscmSY4YrjBe39MRs6Ma8NKCmXRLFW7ebDpLGtaTDwfNeXmybbHbgcc7FbZEfEfa6n59kok9kaPHAhWM2X",
  "key33": "3k6Q8iHQsXoC56R3bWLVBPgZWRY7QoDSYvuwjozW29bTG2u5h2HsSa2PznD2XKSvHcBELzkaP4DPzmGy4K6bpxWn",
  "key34": "3Vcx8RPBGrByKeRPLcWPDfL1keNttXK1nbVDA8PQzpFwpqHEqxN6FZFWrnMhvfeXKwgEvjtCFav8qHPNMBwKSyEa",
  "key35": "ajCvhZBkPKsmL6G7DGdpJJDLiVoPbKbUK1qzFhJcRggGuBqVajmhK11xzxrKGBBd5eL2Hi1EXLmGMehSGDVgait",
  "key36": "6keno6a4BGGdA89ngPRzzJiRRKNthmLtxkpzFd79FX7cx1N1wyw9s2BoV693BgLqSEW4ifMur2x3WocpwZsBNg9",
  "key37": "4sNT6oXkthKMb3ZjetTWssmnfvBXPb4Rr3NVVP7t1RMtJbwqbL9hYP5xGYrAxT9hjYnmj2USgsECiEj2SXYgmHZk",
  "key38": "4YqQYeuvjosfCX7neSNrjjuNQEUjEF5GsFay2GzRXpeu4xNSzp3ujYU8WVGXLq4KT1wc7QuHx7c5yaMXJbiLkXqF"
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
