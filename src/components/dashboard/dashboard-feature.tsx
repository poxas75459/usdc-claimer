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
    "63XWAHpKH3jZ6qeWxNmsbqtJMUMk1Px2cpSebC1vsP1htj3u6txXL2Rs9oNW2pkGwHjPAPnZeHcxfETSpTdyaFQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "omYbqpB8nLWPTfK9S1pRpzMbfL2PRc6NdFYgbm5vFoMMSHXr4tT34i4ZMbEGoFaRbrBnpkfsAwggmVhHSPEEQzy",
  "key1": "3CX5jiPMavBZzrGp5haamJnJiZJKCbzo7jGART9qcrZV9kxB6CxDTsrSWEjzC1ZUaa3bow5xuCh4A4ShcG1noYUq",
  "key2": "dCSC29FWBGqzMb9EnKELs8zsU8paiCvButEigW8FocNgjuPUMqy2WVxpRmc3foQLx83tYjzEaaYi8ekVNzpycnS",
  "key3": "3ocMJyJFJDupNQbhan4jwudZBtQhxgmNsmk8teHURAqsgNK5zrg2S1Np7eqYpavMqzLpccYuYuGMoSKDYu9DkbgE",
  "key4": "46WsvmA7ETrG9cXdsy79ACRighjXkNtCriZZGzJj2QKrjUBzEYJQahvAic2PeicWfvLTqRpP6SXNyno2U6iS9FJu",
  "key5": "5KJkKyJ5XkgxpgawRARvPzRLPmUgPsHtc1R6XzRXNWcYQ4ybQCo89Zwt8nqJbSnuEYppbkzoe18FsN7NZJAKRpgq",
  "key6": "4D3uvcnyunj3U1oF59PHm6GyUHv7T11LBeHqg5CGa9kafiToDxUnDDK35mJCw6jEHmSVkcghkagmoLRjGfxY8Acb",
  "key7": "3cSq9W8nbGkicSNnagJbgKcPZhoj1pHBqCeWiA1hFEqkGvkcRsV2g2654HkrNAe6L6sBjiWC6r7aobXPzcVisq9w",
  "key8": "5RfPGidn1GJHZrihSFQZQMYeehmsAPLxsKm1PcFZ6uZHzPWxSk9jGvUx4qC5WeeyCa8AJya9oR5i19cHKv6MqgmB",
  "key9": "jVKGwtgoEwHSxfuoLVyyt2znoAehuA4gCDTP8iqaNAzNktVihR1mEAY6p8h5ss4xbKj9j9mUVMHX7WLKUwEvPHa",
  "key10": "q1P8ZysnEUMYzzCqw8dXTxmxF1N6uFmMU3LDmDMNiQFTjMMeNeDd4oVfJx5SUNQbfAkhDvuPsfAb2WWku6fWrmB",
  "key11": "45T8FgQYFvsw6YmGeB8HA8jeDKHPZ7XJuZp5dyECKnFsWCWLK3f3NPhcfytTxM9EBDcx4W3kFb9XYUTuNuswxJVb",
  "key12": "5FcydRjrKjsYzBqKmzWzajEtqH5wit7jgW5xKrjfoJBCVFUA5yVtvyRjjqFEq3douFX3TM8eD49DnCbkpdLis9cP",
  "key13": "3SyAE3QDRgRhyJqvWZYK1zjpybKiZh9HCwmV8BbEaiDxAJsSpzodv42rLjpdoLsQpEjmS76pGfCk57RqJz6rCn3d",
  "key14": "2SnGoTxm9dtk1NALvQmvQEpWJC55LykFyPXAuxEEBrHNH4NUpzN3UTwitxc34JiLpMaKiBVVpG1sXLJyFPGmxRe8",
  "key15": "2M12FpDxH2a5piCJdFhJXWtL9xvuzrEYkGdHerp6wYhu2up1qMf2Gju3zVNTeQ55atARQtsNPYfaysrD1MvoyFJ6",
  "key16": "4Q6Uu51Pb8Eabvi8dhbGbT4KBprCQL5TwzEhR7xidxUtLaqqzQ7U1RmUKRzgN5LCfhLbC7gPRJZvaTC2BnqBXAiL",
  "key17": "8LGgp7gJwVJgnXSC6xHLGZcA2SWrhv9JKAHjpzuCD4ANYqJwzwhzCk5cLCBSqc73DxqfVmRFGFYWHj4x7V6YwDo",
  "key18": "29ffbizzQQEMjQN5SUGGWmB9zoobJo15DynruRBQnnxqNweCGheK7YMLRzuQGsHEfR6kBbUhx5NrGx4BprVNSavU",
  "key19": "565Qc7qW8Lgdo5252vaEf9nw87F5GppyyVvipPL5HNHk8e9wMAzDZ34XBxJtBSUGxKDtxRqrefVW7kT3ZNmqpcD2",
  "key20": "44MNenXtmSW4i6d5j2cb7CsnuGeMaxJr4oWkfKDeSUY36CyUfWc7gYkGEV6HspXc3vpQSdnKGxmNo3EAKec2mCkR",
  "key21": "4AaWMynqudQgJXMNVVhUwpcnms3siDHydJaVq6EBrfWJWysssyP3iE37xfJzPEffky2aZifjbPD58bi7idJSSYYb",
  "key22": "4cfzTmCi9XPVgtc1AUbedb73Fjpy9TW45AqwBpkWJHyekuAFPJrErbK2iSpBLWdb3UGbQyygr2d4q2uvLHkLEWDp",
  "key23": "2mGTEnJr1D4TbYYXMKppy9sZQgccpMkfCz6wHWWjPUsTGKjDW8EmHKPEQiHxD9cnadzYcJFGS7Cjgs1JYekEP5Sk",
  "key24": "3axKDvtUeYMgSs1sVGqiVBCr3qm2i4c5L2ySrdiGivUrpwShBxaGQuZ1q8R8zTycgJ5dFXRYYpvuwbaHhbCNbE4D",
  "key25": "48p6Ap98vdvbHabVXXZuddiBs3hBbSRmbQJJNNWNvnjfkXTxwLAKBdgSECQyRE2GXe67qjtEGjUrGdtBzkXGvHU7",
  "key26": "25Ky2FMxvcwTyraqW5k7wiMcxomsDbPvdwzLpdxjzMNhqLjK2gjhrdWVntRv854BMLi9xU4uSkr2orJNvc3CGBk7",
  "key27": "5Uv9MGCqLC9MQwWmzyWnDprfnrfokqSUkqgxzCc9Decry4CLK1joMo9GF8ZWcyxLMP9SyAr95PQBSHN6rL59ZmxX",
  "key28": "5dkR6DuPfD73AaP7CehKXJmx95hUzVntxw11EiYK2jQVfb1CPnB3Q2jF4NJwaxyE5ETPypHQpAarhM3ccJ5U3v2K",
  "key29": "5sH3GGjcCQKhE6U1B3s2P5ZCebhN656MXawaF7Ecx8ttnnfMqVCy2iMy27KB8DMpnYKeg9EC4he2AMghAKvbJ4wJ",
  "key30": "4383N5KrwrH48xV1FohtnVaFAwRZNGeGckvTfNHosdcQi24Gi9iCQH36n9kkdPX8PxjKhCMUEZqabAXTub29d5Vi",
  "key31": "26Jb9dWVswDH94pmpJaiBL9pKJUtrWe9wbUpY9r5jMRVwY4faGLrU5hQ8b5DkaMEqTXg4jrotWan68ecS5aVBfPk",
  "key32": "5t5a3cEYshsnxCrR2V9xpsNZ8PDPajWa2sYHa12hPf4xoTNRjQVbsjpooS2ggBLaRAXy7PVNM5kzbZD81sHKMnKC",
  "key33": "4YWCfpUfGTGcruHE5ZTjJZC4ijKTNzRYqHFyFWwdQw1fv8V8GoEsjuuEqGiGWCH6rhLRFnQQRTTiBxGAFiKTcYng"
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
