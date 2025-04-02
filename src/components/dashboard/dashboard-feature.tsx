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
    "66UqXKuPah3pbqxdp7dRExT7n4vjjTZxEaDKZoJLN1QPjGqYLC4FXsMEB4EkjWKDxK3mPvaKYMB7LUrc28ANif51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "254K198AUuy9gRYBfkryoE1qKR5yGAF6MQajMnC75ZYWHrrM9xVCKfNGFLqx6YKr25Nz52paVuSZcJtrtAApHXb2",
  "key1": "55Kuv2SMiqQa2Cy2fF7Qi4Drf6wAUaoemmvjrkagUHM5rtiuHsnn1iF3NGkwTQ7GjnRFGM88bp9wV7JfKjLLgDBe",
  "key2": "5GDSW8XmcvUurHcWUXjMpRdkNuGwr8EiyaZS2NiMozg3biViSfwXmvhNxCgBbtLeVVudwLMk18QaB2kAWhfTSxXB",
  "key3": "4FiGWtmmUi5zJqNH84n3EWKbqCKbmWwBheAVhaFJnvGJd7wJKhdLoMHi4oD9RQrVxUh488zM7maY2sqndahASxFk",
  "key4": "2tvDGbupmdHDBTLeosNAwSba4i4Pf8jJJZvmj2EkiTCyvtA8jUhb7umigNxGzoR8NpBbqjFYApDxG1zT3A8XpqBi",
  "key5": "7phuhMvSiX69w31hctp9DJGHHYCC7jFB8n7sh8kjXL2RhSskwNyB6iKC5NXFyH1x81kYzJiHc3muadvRaEju8S1",
  "key6": "3WPrUsuAcMV6nT9AKmcjBJwLmdMZxhBKdvW3cRvyZPYKUWwSoALuWLSbmva6qfj4KE4zKT3scgCAsQnFdAzvKKUX",
  "key7": "2aztMN42TyDg9Kkbje2YCqwdnPhhoBacr6TTPo8ZCSrpkauturmZkc6iSWwVyD6yDMSihMqSb2nE9x8K4wSdKo6E",
  "key8": "5poTNMkkx2vEkpib6v69E7bDGXZwSz6ECxG5HahN2wPq9zbK5qB4VTeHZ7s8LfeHjg8uHMJ1ZSTdMYhyL1syj4jR",
  "key9": "3Atw6rjRpP21HEW71djHt7ymuNfUgJMCyL2jYo8bnrTRhjHRoXzzFoDnaj1XVYcEvmj1bF46KMveStcc6dfVBTiN",
  "key10": "611b3DwgbMA7RGQ8vVoP532HeMH4UCMP1oo8JEPRakZU72moA7ipJgZV2wL1ZirsCiw1ke2UG5dxxHUVzzK83GGZ",
  "key11": "4ox8G7DozqYSJP4L8boCMLJ1LJNHNYbw9rj8FSf2MXKJXoRVTeLEBWzEpM6M1sGf9FQxqQuQpmfk62zqGW3xgKvD",
  "key12": "MeLcSJGWjCkyb1428GGRush4zsRK4ZV2hXYLm5T1qk9imvtsjQZsUe9iWKzxJ84zuCB4u6RywUZBDf92HU5tkto",
  "key13": "3Xdv58NMzrTzw9jfdvDS8v6YhuxmdQBCcuHDSubEN6RiYZKwLMBfFt2q8KLjaMRE3Q5tEGaAUC3vmLUZHYaXHz8Z",
  "key14": "5hFx8GC25G254yQ48yKDjZ3PGMS9UmyKsJwn6ZaMj7KQdnRWXXaa9VPzSpkG41JZ3T4cF93s6rAjumSnwusjR8pv",
  "key15": "3HUvw6WCQWzDy2Q4NpFr4JYiZFLUZPbZYzUFAHzEf7g6Kimb4zHmDi69xYXok4Yj9tfVpTpW4U8tLycuA5VEgLvD",
  "key16": "3AsRPsxDrfbPGbn5g3DZXMg1stKSQVfEjJMtW9zrwnz4GmLM8r73DVCjKfJf2XNk2yAGMiq39caqHcsDai44wSce",
  "key17": "2csUqqv83Afda7JZnYUpaCt87mZMfAexXBEMo1BEw1SskPGWLwJjHmRqwzLJdVmj9YhpL8A1LKmXk8vQAj6j32UT",
  "key18": "2pn9LqartkAW3gN2rdGkwkHS3XwwCb3swxbG8c2Lzs5r4qWBtG8qLGQF3Y7M7jUgHUC9MJSB7ZZfc15fHxEQjstA",
  "key19": "28dXzV2vVW4KzvyU7cu6kDtekwJNdFqhPcyAKn91Mkc1EujXyKi1BbPD7XJ36BQ4wNGrAk6fn1H3Gn1G3BrEDTxt",
  "key20": "3jCKJCVAC2QbaE5t8VuPuDpycUSqq8MbMrGHcjm9nJwDfoMyeq3NZYrSZgaebfAzrvLGfmXFYJYmKusLyHuwt2Pq",
  "key21": "5HHFHFeE4WE5PaCv8shcku3z4A6yeqi8UcyL5sR3vX9vSZH13BN2hrUd8CtScvJ8uwQTm1NueEffDFwEmpingvmK",
  "key22": "64XCiM1YciiwCRB7JjwNkbpri2WygPNief11nXXFNWkA7fjZzexJwAu6L4B6kor9swqxVBexavLVDfVLb27Mxsw8",
  "key23": "4HumMCRPoC5mAnW9bLXp8q5GRDEHFjYZgusksbpMVZKPU1MBHXZwq4fqbxb9ky7fnxvK3FSv89C2H7Q2Dv1A6Scm",
  "key24": "2HGAzVTYyKDXMYJrS1EMDFoHkmyzKn2VvFCLDAgnXLdHe7V9uzmKAKs5h5mjwU1G15EPEZJA8XDPF7WQXMm59iwa",
  "key25": "5sq7qpruFDdyYepSZhfkeVuxn9XEHubpBoqj6GMPMbThiRs6MatFgpo7vyqTTSR6JjdQfrnQ5sxfz5FNdqaSWzVG",
  "key26": "LMDWsPZdsCx6dUe34Y4z92dg4HLDWjBxQZhxmjHpGWYxkQc5ZUSR7c9EPme3QVYhuLsJSmNBSNKPDaA4C1Hm9ga",
  "key27": "ASDNoxyA6kME6ssbSqQHsqbu4UQQct8h1EddkHdjRSJvbmXNVCEskWPY8TapDwJzKy6TybLWQ4e9F1ZMtZCzwHz",
  "key28": "LfRcruqUtQz6hyqV6hVtDK5APhyKckWnydRC9r812aG4rMrPu5DvgqYcGeT8GJQibW1jiJke3TnjpFifftknrMC",
  "key29": "2xWz3yL2pMCcNCZ6EzwiMLtx4m2Q3EmqeApH9MY4h4vCjeHRTNioxworv78yPRfaBgfn3vJwemhyTd3ZzSWZ4Xdk",
  "key30": "3rcB12DJc27M3Qz2ydXH9RcME9K4B5tiUCi4gycEdrfWcoA6318pz2fQRjsrywkRjuEnaSFivq83uL1J89kpP8hu",
  "key31": "4gWb3axKazBiiVnSxnoebawJSszofG9NmKKK4hyuTH2jm9bUok7VgFdnNEFjJ79HCebCcQ2RB3FfvoU5cRV2irxE",
  "key32": "656idcxuXnsZ41KFPKvLiZWiq3zTpsqKgtHRk8J5mrdBKe5TFiUP3tUoNd35ZjxEAgyaFUSe89yXzkEV1irUrKj1",
  "key33": "3pn61cEhiAFiHADBFwxEHk79J4rqDSyY7PGEgjy46iAGcS8JTsumHcpARJqUwdAbBgDDFzb4vRdimyQTDbqPbdRV",
  "key34": "4eHJwL8H1qzpKLzWzz3NiPpM84iJVPhFzU9uy53cwui5qMMND3ucoGURemXT5Hg8C7ZZfam1Hx2F2NpYKMT4t8eL",
  "key35": "4ehhCwQRKAzCEGGArexzwuGNuj6kTzCvEkfGEKcXUM7fy4tZm1KFoDSQHCFVK9NM8XPbhgMzNc5yyyvvWUXCNLPm",
  "key36": "5dQBJ6gYQdmTyEh8pBCAQGH1T8mgwY8pGcshDozmkwZ3Z2uagujDCYHSfuw9uXbXZrabSwXhA54eTpUeTuVapbzf",
  "key37": "5quq6NQFvx3hYcmFfqbayLsHg6f8cap6WXDYKTy4edw7E1x3CR1FcacpJNkXyYbmtvCTJv1KnyFauQjUs7jDpZc2",
  "key38": "43a4ZJtNMHjJ7yohxeE5cFT9YYnfNMqFtyiekRQz7uN2b5v3S2etzQnQkrbbNxRwjUbPJSjifA6kjwGHSrpDo4DE",
  "key39": "5TYApFMfyL8F5KEffsbvyDsxbukgrt8xfAKw3ZmhFQjDfqHV6Mx1GeaEUCWKTyS9HPWt7pPzn9JZ1i8vi2v6cY4j",
  "key40": "5bNAXNqq7wToaFYSfbvvT35FApBSiyd9uHBgodwEjyThZiSqcr2D2ufZZgmeXyGC3NNfavyEoZN7i4cesu7EnWzb",
  "key41": "2NW5G2sCCSq4e1wi3EmFdyqc86fpLU6C5ZAuZEchZGbbygLdJUmv4fTorUyEE7N4ydTJUAynzBizgcjUpGjVk3qb",
  "key42": "3AvSXPY98MR4GirifeK4fw5HYCgx52xv7G5ZcpqdkrJ7agZsxBaxEjt3GXMKtp6r5mznnatbNYnQJpiVmgmUyJ5u",
  "key43": "2kozjJMuqS5J28bUjd59SHwZjNrsP5pJREe1B5RKVzG4eRDbBn7EpLoDRFVqJKsnr78qkXhEGffYKUaJitZ3LSP2",
  "key44": "JkFVfiknqn7MwjGwnDDVMJufBsSoeKCSAEtTB5DiQktrci5rpCipUJvGpAQ3g6CJwdfkSxtPnj7g5scMun7jwZj"
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
