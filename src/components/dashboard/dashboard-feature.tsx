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
    "351pkTNviuPXkWXjARGDQTAZidLNqKb73Ji7VTvNNryw7om31eqVagENVQNHDRoiT7621KVHBLtmyxH9S7v8PKtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eu2LUrsM4cVxHQuviFa27WkVtPCNLmxPgwbEYARaHMis88i7VhfWroywpju3He3axFB3YmFUS6xyPhocH2VstWT",
  "key1": "5rXWQ1aNdpKdJi1LUGocxL1juH7vhzQKhVC4MUEqWNKrm8VCJ5kU1mZtnzc2yPYhTsmKoFgpJVnz5WcCK8VL5zkw",
  "key2": "G1rJypGCDfjVR6iC8eXfxntcsVMgAPQBKFf4DLh4Ap8mQXS86s1SY47TpwLLtDjxkBq1mdsE3VqdUyCzegbsCxS",
  "key3": "2evshtHrcNRA3FGWQUJFNmxYTYS4eAxA1NDermLxSu1XiTVgPpdKi8CfSyq3UNkHuxkW1paw3KmBKgshqQwG9YGX",
  "key4": "CkptiKkUQbBu32vrVaBuuUxvMFMYaPgNpz49VFG4t9Epvh2zCRicsCq8YcXx9CdBXZFzmSHBhT4xxhijudvV5b6",
  "key5": "wF69HzNsi7vwwQPvszv5MYZcPrdmizwh16BkBWg1i9NdpQ4PS1UGHuNiAufQj5A2A5G6VhedFiA5T4Mjx9UhawG",
  "key6": "3mExaWM4ZasDPhMd2jnBnEqmiMhzDcVVBYo9EKDPqF2LoEe35rXqfEBsiAo9i5KTWppPMP1FtrTYD3vemE6Zmfv6",
  "key7": "4ytZAejrAog8JmKrRDoyXWwnrwNXbndxwtTkK1SLHHNZPzytw492YYuDC1Z9hYrgUQKoPpxiGELLtUjTYPF5TADD",
  "key8": "5LKRfFC3PJbFhgC93Rz6bLZZfVWuPKNBo86sVXaFJ8UxuUVu8TQFfQTMj6d3cxZcS5LcH3C9DBRVG9AEqSRoRHvj",
  "key9": "3p8ZJXFNB7J7E2p79J5RNC9NVrqSdf1XiWZL5qQdZu8a8k52BUfqa4ATS9Jw7xzYphVZMpAsesTY48HgQxGfkUQ4",
  "key10": "5WQvXk4F372aAScnriWK2M3cUuuGpHYJETvQms9SMtfR39q4mH9jykYsj31ezHeMBGwJKBc1Td7oc1fWS352TbKA",
  "key11": "2U3i5jegxJnCwERK3nZuELgpSFVEubUcg7MDVae5zfF5A3MkAdvvtkSQ4cLA8z4y9eU5Q467R9XcDz6oG7oJKbYH",
  "key12": "3BXJ8b8ytHSXdNE18P5ggTDedMn8dFrwcznSYuJ1gE7FQN1UR473Cm8wz1uTbzqgw58XGUwPfZZwDBqSPioa2hqj",
  "key13": "4QQNXePJFTMUPARXz2kSXouFHnHxyoFkpKVXZ6jDuRXBnxXbaMzc4QV1Ev6vviFQ6hMLEkLCPVqxyhtJJQSy9k8W",
  "key14": "eMBnCrLfnCbUuVkcgCKNGyBPaUdmTjPXnRYHNhJGdfpn15hZDG3KbS6fzFyg19Nv8E5Uavajr9fhreVaKrY8R4F",
  "key15": "5vLFTW24pUYfv6VNg1VGfKu6FY9u7CsHAzEQFa17oQKkJdYRJKDVr9ixnyA76GHhFErzUx5rbxMXbsMfkQoHXQqj",
  "key16": "52SV1iUm8fB56hpCVD8ZunLx5MCpVxxPoBsq59WiQWkE6rBYF5nWaFvW6WLLT7W9Gfzna3KjZufPL3AqAHztQUGR",
  "key17": "2iCdmB65JhvVxW8HkwEp7ExTfboZXS7mE8vPPveBGgyqtcob72kRUtRp4iP4DZ7xgCmMQcTyXgt2HtrYdwHCyGZ7",
  "key18": "5uemaVEi3HwQF7zZtHbK5DtZ9tVKJuihJA6S6yRWsZJWATmZBUmK8JDTgYzxQ4fe7hhrVAj9HwJxASXMHNMSpfXy",
  "key19": "4AFBFMqPoFpPqQpxnTs2SdATn7BaqXPtZ24HCUiLBjS1v7s8AHC3P9jU2acC6qzMSVtS8QeUxo4DTx5CpmyC5VVo",
  "key20": "4i2zKD8L9AS9LvjEUkiQJGWzSsa1jmxosd4aVtUH8JD9AZXUEQDm5opJ3HeckARmU3Zr9UXvz9NNxjeynQHR9L7S",
  "key21": "3gVkGMQFR9AzQqbHFftxKfy2i1sra6hK2p3dgie7Fba67WByqxN7QZgJWA7A4VitHLdkATQ3Jm5ax8XXUwMAy9d9",
  "key22": "3J6Jj1HJLxDfxWNPBf2r8Ht5hsAYXrmzqTph56THjM9eAgKwYy4FffHcvjrM78SNfZdQy12SAMwUhEYcg6t6MkfZ",
  "key23": "5vZeTTxCLMXxEydYLYcJSDEBEZGH3kMpJmboDJAWBhDFfZonUCpPzc1b5UXX2cMNT2rrjc4UPXWscZczVFdVTHUz",
  "key24": "2BsKHb2DDq2xWFQjsuDi7yadBYNTmnjUQYrUZH3JUcKui8447MkBCNR24xWhZcw88gYNv27WxrAvhmrfhLfNTDZ6",
  "key25": "3PWZhQzr8qeuWnqUa3NZ8AyLoteSspF1oesY27ZgP3mgbW5ZqMNkmH21LbU2VQ6VBfPDzTZEVNG4C8gz7UNZQUtN",
  "key26": "25HD24GDRJe9VPHCNFNSmzHY4jyDSEhVJPLtevDuvLsUFDr6PccS1XLRy5N5pT3M8nLLJNZcN4DVk72scKx42ci4"
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
