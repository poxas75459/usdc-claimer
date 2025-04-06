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
    "6ph8oQEAsBGJTsE82wKzCRrkFibNWr3GuF3wZt6sPKPixphviCcpv43pq3a82FVwkBaVy1P85B4bDC7wDCLDFWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64VBuyc4DiEkQ3tRaA6w8ruYGCRXDqbwA2aeccVGgkifg4uAXQDW2UWkFSCJ22v44TdMaSqNUvTGin8e2evm5yvd",
  "key1": "5cB8Ryah1iR5aoZkcYZQ6PbmLRQ3PkoQ7DPW5HLXwANRFao1ffJQHzigUJ8cYKaGVUjieBgv9vhp6Zffw6E58uYf",
  "key2": "2qEKWg6Luc869Xjiu7yPzS2zRH1Wfp7rTpZuyR1nmUGQYhiCb2avkU2v325hY21J1tWNj6mTGxkCydav94RG4ugg",
  "key3": "3r2V4ecdj5MWL2bbwdGSdhV7nGCaaFUwBCzZE9yL5sdrV8froyEG7Afh8qrm26hDMr3oqWu1gQzApm9tZttBfNhu",
  "key4": "5W5xzhpvvsAZbhVdr3qjzQFcNTJHowZVkbJjVAJKKXyc2EKypS4HYC6UMKvYkP54tsRFnThWQMChd2ewRafbF8Lx",
  "key5": "58w5BF7BrLJFzGVkQwy6jKRP75M7Ly3sFzWcqDrVkdjpCgQUW2SRjUFHRyHKDsqsGMDfAeCkHynh9QzWgNz8RXFr",
  "key6": "2WDo4BitgrppFY1zGdFfu1CyrU1nmjqDAaUqfqNX2Zhus5sojnijDc25GuZ5npz3oeQocrJc5jfSuXeBpu93FAWS",
  "key7": "2rFEJ8M1NX4UzMi5TDaWg7e2AGtSFAMKrqPxR3MPHtu6bxaqVtTgQKtZ4iuyXaJjRsR5cZv2Uz1MbgxFPKWgbVuh",
  "key8": "4MQpasktU9oqYvk2szVHFb5cjoJntP8UC6X5YQyu2PLNJzcMaBna3veE7Rocadgj2BoYbdvjZHm3Z45ZdGjBj4KC",
  "key9": "3R1jg5aMozY2JM2ZpUzJFryHMni9K4JcuAWqt73YJkz3Tdt7L8NEAXHWCULn7QEqd4DfmAinEJoVfQ9nj4VtT7fm",
  "key10": "3M98QvCgyhSVHtuKUvEdUzhGs68muGsriv4rfMzRQAKLsxwe7owXqudKSq6VwaQPkApM7woB8HhjmmDSpkWfhn82",
  "key11": "3UvCZdhhPsZYoWYawrXN9yEaV2TcCQx4PLhBo5xpmbLREDBuD7ruZffwq5XrwL1KnunZLSi783mAzpkcqm2FKhM2",
  "key12": "5dBm5HZHWJ3z92a73ZHJgEwHQZuEFobfRvgBnzdw4XMbPveofJztqQ49UwhPKXJukbRNit4ErogcRkxgYbLTcyeo",
  "key13": "6267N58J9NMEaoPCiMLiAd4fgRgT7axjtyPGVeLAw5YUSvg1cZGe4SLq2TH4D9JWbeMGLzVs411UtYYmHo9xMsx8",
  "key14": "3Ky6x3LXopb6PgnCbrgD8R3umTxL8DA2B44EqoJJCUcjash5qJBCAa4eCFygiJSxQGGhP4cvWvvVgjocLFvR591o",
  "key15": "Yz8NuJb35aCHraxm2maPZ882idoVMJF5wbCD1A6RaqHZvyzmARjuLTRaK2ByQ16RYBQSNCWUT1rMABhGHJAa4fS",
  "key16": "2rq46GiFEyyiugu8MEEhQthiKptaMZ58Tg3LGUKoVVmv6M5ur9gEQBS3ahSUr74w8K5iGXqiqvDgNEN85JuJNkAC",
  "key17": "2f8PQt9RycExLbSTM3rSNKBNHFjpwxBZ6Na1ajJDijukEjCU4XCiPq3igqkJChTZRGDEMe7qYwoJDtYh5bXvyMKM",
  "key18": "3ukaP2i28GBqpBen7nAumxmzBfqXyaTpqx9f6btrSnjdZGcHVXdeDPKQ842NFUWQsW6gRPYUDkciGp9ogUrEzcyK",
  "key19": "5HPEtGMJZQCHDkKQYuwrRb7ia173WkH2H7bicjJ3ZVdeqL6E542m57JM79PqR74gy65KmX2r8DEUazyrgCSQZeZL",
  "key20": "NyKKFep2ALgQFRQkYeJHkAagh1EAiChxbH8uHwk4YHGkpHDJiP6cHiNsNaPfUD9ZWKRYyGnahAyKe8YPG9DdEF3",
  "key21": "5FXqcZ7dAH1syb39zSeutRDTnz9KotEfozCczDqu4GiYsrifH4ZugbfKhTPb8QoL5e3dsTjt4mZA3P5D4gd4ZkDG",
  "key22": "5k7hGY4noJcVn6Hws8j699wAkjQ87mi8iPLdtHC3DieqsPEWy81FjDFMbjxuhf1wGUZAgRWYp7guVkLtP7GPQTVM",
  "key23": "2dfVmPt6qLXZZ78s4NWRQ9A7QYhB1ji3RZcSbbXbTeihR1XjsYrznioK4TCa7JCAxd4RFPdLTxtuhQyS2Un8mmYJ",
  "key24": "2yXEsVjScAPzg3VWLXgR3DAysbjnzR5YFaoxxtjm7VQvhmyfygXYVJ2woPJWHjZhQWbvxonLs9GmFymByPVmSnb",
  "key25": "K2u68nXWeCqnv9U8DpGFNmCtKPiYg921EGNXuHFLg2TcN64z3uV9ggj1CaLyXwAkWj6R2APkC2WCqknzRzVapbU",
  "key26": "3LXdU39vtGy2c5MzX2LcEaRPdpWQgngtDsY8Eybd5CUHYD2QV64XKfJzRDKCdEZJkmTFtfYn8TacAT8HFBBVZ79"
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
