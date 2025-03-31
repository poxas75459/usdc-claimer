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
    "pLc5R8sj9J3Mi3Zv3vyM5iMbSM1QvmxRtdNdViKJWYWWYkaJQue7shkWzGsusy7bDZoYBpDBBW3qcG9KKaeVm4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DJirTRwJP2hx9u1byF7NyaHdD1GHJSxpyZxEh4GmthTuWPQdSjHuTDZQ5NEFRoVokzTRWThoJi8gytDGGpWZRyz",
  "key1": "4LGdXgr5nQqn7Zc24vh23CJEXHHG1an6uD6xCkrkDEhXNYuA38t6CUuTTTsrkorrQggk3B7o6K92fr76nfrGgxCf",
  "key2": "47YtYyKQE1R92rVvCrbyvMAAP22m8WcMFeYqiNNQM9ejsiY9TKoKzwk5fPp9tSqyy3wZN9ifgJtxW9NXUKSEAFew",
  "key3": "Dg5ooRb5o34xozoWQ8psmHgqKyLCakRMTp2s2A4Wun1Nfnx9chna195GtMc9BqhopjLJR3LGZPfQrmWci6JPecL",
  "key4": "64nrUXcXZrPGXB3goWcU6MNdzxb4DysYAof7w3JzuTQEETXvWXtnTy3AcU8jyaiUg1hsL4sYM1fd9TLezuT1hPDg",
  "key5": "4riZtaDemWjLkbSKoNcDJ6R5jzpGDdQyKsxGUFAUjxVuRoHmzS8kH1hzJim3h9xpHQet413BdGjeU7NvW5W2bhTy",
  "key6": "5yHbobeJ11BhPwW2rV8urwWPWtRPxmjMKWn2Dotcf8AKh2mWhm1bZ7Ma5KcoGvKKr3x5D7ubH86aR9UsocAvtJUx",
  "key7": "T9h6MZLV3TGtPyc7a7Xf3PMZUbn7YBW485VC4xFJp817sKN49veqsAwAw1RhzqEaaD8y4paHqv3tN3Livk8HtqT",
  "key8": "3UW2iSRbmA3X4sf8sMxdw9ST3i92HMP8M3ELgVqwzkybaPudRSqwg8iVqFBC5zkjjqP2DxNseFUjqafD9X1oN9ZY",
  "key9": "3ZNGC64wrSGgM8h5rfALKWbFsverSCASkc4DJ4UM9k3cC5GMy4GNtv2T7XheabSeA3G4Nr7seKzhGjcUUFcJhTCg",
  "key10": "2Ct6W8nxP1odMmxy6upPDs6qn4vScruawTLb3boJJEfUcMjaPwiZ16qcZhZT4Fxm1HoH5nsevh7hsBtKUQg6UEqF",
  "key11": "wRdGnyWBBZ4inH2UVH8ju5cqh4wuGdpf1nbsUUN2pnhbhcsTxUcxkxq2KkE5k4CpHJA2D6xzaqjPaNRuBLSwKVu",
  "key12": "4jqWbufrb1bBcJqCtcmjKDBxxp4Qt1Hi8htpBtfWM9ETfjSfkgBWcNLXgXvJCeKe3gnBiQKkqSFnVA6TU4EpRadD",
  "key13": "4v6YCvnoxHmwD9kMMekmnMZUk32ykY5Hu3hVmN9VucD1zFhQqsmHCnC7u5tr8tbRbTEtJe9gC3MgCrm2wtgwDpe",
  "key14": "3sfibFdAY3qbUcYiH96Wo3QMkx7gi5BYqyckQoTJ4ue2hwGKvDpZsm19UVHdGePeNh2uMFx5Cxg8qX6nX1Nq8TA6",
  "key15": "2zGiiA9ZR5p5cGuuzqs9QLUHEQsnj1hfvw8DAroFSSZLy4feH8MtkU1nFVBNUua99NcE2aiRcUsgjSCE6XGK9JpH",
  "key16": "4zxd9NyZMpuoZ6tNG4u8XeC8wrnb94jmJp8voPdhN9Qsmoqs19QpLNfbA1JETdKwi4dbqNboWpMSNDrBJZgAVRkV",
  "key17": "uKu5ybX73q2BAGv3qqs5BVm4y2Sg7MLe56iZMgPxqATxGctQSENcjhWmZHA4BnqAucyoRte8tXGiEHW3D7UoFqU",
  "key18": "kT5aZaaDv6etoScsf1VMjiqRykzdzokwcLTrmRRnV1nu4NzhmaLZhhzZ77BkCiZUK1sVmJyei1qvimCtAEZoGDi",
  "key19": "gL9EbkqgMK5V7McPtnx75sRzZjcngTKTHvvtwAS8fnHmwkF2H4eifbatxHvzDtr7Q41754cemgmRrDMYtsgifT3",
  "key20": "2FtypwtqnvqSwDu6amHDuTFw4Y6A2mqUfdBXsMBEzwqZUxbX7F28TY2NaVHpb9mWQjUTanhhMJb7JZxstJVCfRWM",
  "key21": "41PgX75kHyFzd6nYFPNyP16k4FpBgHMPcMbypf2gN5tjKxk4xXmTs2zMDdswC8VsC6m6U88V4us6uSvWw1WMnJ1o",
  "key22": "3P7RDDbG6H9iX6WcX8t2qGk6yqkSUsWhSobS6aT9dyhnmpKW28J8LVxguDToNnK5bj4KgkJE7QFsVMzeywpaT7u3",
  "key23": "26de2ARQeTjUDa8nwGuEC1tZHR2DkFPgRhRk4whgvKvpj9gSMasLhyWxbP3mKWBFaUKZvj35TsvxtF8Ns6BxJ5pB",
  "key24": "4PyvqDV1kBKSWDUtUckeLGCnigCS4MLqP9zDNtgVdQ3zBMZMFKQ4GPYqEGyS91Q7B5ytBKo5yis9a9MnPNqDUztA",
  "key25": "4p3rNjsQE1nY9ZSfPjPFCJNsrQthFH1L46sxK99kaLuPXJbC99ig89TSU8yEmPKBkuwTmZmsiQuCdZAMHu9ZQ5eJ",
  "key26": "44hTGsz9VupVHyT5xxtcjFDYcGmCbFo2YksjaVy6628HmKsPE2VmSMQ6ErPhXaGMJ3MWg32wwWdWjGw7ncPxNPEA",
  "key27": "4uzTKsWnE4wv3tYhwMsQohWh5PDGMjL4zC48PWNMevWoZddPDABRKj744374zTw9ownQje3k3XpkjqJ8pZv7Z9pN",
  "key28": "2ZNsmTq4kVYcZFCd2oR84bVWeJxSh274ebKXFn36BitDjmRqk8qUpQ6p9p9PnXvfSuvBq8dRDg23mndr6RjHU11x",
  "key29": "5F4AdJcnK8NsrzUrCcZC4bZBBY1qu7FghgvSTkWHAdqdutPMJMNqQK9VMabAfkYh1vWnSuiSy8d74tCZUySXLAip",
  "key30": "3dtpdp7UHsYRrPgg3TfbgG4dycpyj2zrMcpDTv3WAzZaVPo2HPAUYiSxoYJdA8S7QhHg3cttH3iyGbQLK1uYYBa9",
  "key31": "5YcwfMMHPTsZBZ8gA7325eewoyn6FZh6DYcJTpYHpXrxYp3syXP5LCyT53aDjme4Z5tLA7KgHhaFmVddMwE8b9v4"
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
