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
    "3zfaX571WPz8HcTib2NCC3XAzQGtLNKJZHRbp4oZXaGCjTrNjRMeVzBpm4eCD9ka9qiwNZJhZTULZVQNmv5AzR8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vzKTvpm1jWZWicS524zeShm8LNttP6FfmvER2eyerpKM1S5YnFSXGmNXBft8CezEzYdJi9s5sy1Rvf34p6V5No8",
  "key1": "2oantQvt7ytFN4pWjdrJVtYK11T1J7ksBZ3hncx6pvfRHW5NeRgmEy1Bpt838a8vpmQ8P8c3bk5mx7DWyTr5zJYv",
  "key2": "5z85HpA2nPvFz3HxvgNPTrnjkTGaQPCWAZJvUpShYmhRdR8zYjp47WNpiazgCToGAPAzzzCF8brnxvURTpnmXNpy",
  "key3": "5hopAzcGiRnb5GG7Jn9y5eGRNdqWPe1zALtPCyeLKGof84Y14XN5SXjQkCP4xFyBQTtsESEo31YrXZfNvvUrUdjg",
  "key4": "AfeVQuMUnjqru3sq3hxihDcRUFB4ynpjmDhQuNejUWXqWYteoF6zStTKyaBW3vHhS5co7EPCwUVKZdXkvh6VEAY",
  "key5": "5ToRcgzJ8cg1yYa4maU1fYYyPPB19rpXZxtNanqbXtNJWBqS1mEXe2tK4kKAjiEDoAYNf7xZicGAAKXGVmKh2bqe",
  "key6": "2toqQBctKf9Eg4AmYa4fHw8J52ykXNRCxA5EWsNYWFfF6rqnbe5QatsdbbBekMoLxW3vmvYkjhq7UZNkDYREoNqQ",
  "key7": "CcN4bSrbWwoHPQi3r7cMN119M4vnqxsLDgJKkuotZjNtLCyVh1WHr5835ZR7p8iTtCCZz8uunu4d2hjknWy6ZRe",
  "key8": "3mfK3aN9VMt74QCWhG7moo2dvyriATp5VFP2LPCyhKPxpG83MjedGJbEHWPzQF3KU9GURViRsRafUE1YR3pyZP5W",
  "key9": "DLbdJ6LVZhexJbUC48CaHbWhBLVpD8WEPkSCKCnPexBUzfZr1QK9UP84fX42us4LbGGitwyscE6u1KJ7oWE2F7P",
  "key10": "4DYqkUcGW5EN6FyMM56KLsFPYAfe7dvwUZ4ZZfbajGxXURzqGNTRuvVdWTyL6724qn9Ui9jyDVsA622rp7H5yb28",
  "key11": "2yMcj1pMjY4uxbXxxyXWDSa6JNqN9GyPf1YRF2JcjiTKDKPSp5Do7YcL7LEAmTyNCksJuvMQPT3L9z9wnVXo7EGY",
  "key12": "31xcDCNmVWiJg1rvDLB85yukeWwQZ2Jz3jZZpNMdVU4q3yEdZUXAkFFsyCj11YxeqZrQqDVCDsFUNi7yDfd4kEYc",
  "key13": "63BkBYTjmry8Hxf2GTF5kX8YgyaCvLgYuUe4aADiK2h2ufD6LeP6erkdRGsUkf3Y7Buw9yiQstReJ5GJV2L9AzSk",
  "key14": "2FWyfHBhT28et8aRRCoqi1YF79mPABTAuLxBAREYWefPH92YrvTuFgzKPg8pf1JXgWQZrAwT1M9tB5rkLGcXeTSX",
  "key15": "12i1ZuZYw9mkKVj6R2pXM222gN8m8edqDPH3WFS5kJKbq3w1ExLNw5C1qxrQLEEn6pW7HfX64uYVSKFw6Tf3ZRa",
  "key16": "5BnaVF7mHVLHHaJp3zAV2EdX2khyc6opmx7AUmcicbsJFjmmjbeKGMRJRhsKXhDydbUSh8x5AUF1ZWNQhTXPv5bY",
  "key17": "327kQfAxUy296RtstZ61BzEqmEiHAHcaCExHwbd74y84FkVmTJuL93oBy5MBLaXAxFFYQq9pZX1ozAHTEkqUXiQy",
  "key18": "3x8R6cff6hpsZnPozYde7pU1ZfRxoHBUVqXPtDR8CHcoqGtRmTRBSzcMntx7fSH8ig6VbiLcRiHbMce6wT61hozt",
  "key19": "3ysVTLiBb6rnU7XcXX2WSaLioqjfTdV3Ae17dQR71CBopsja3kTSurXhLEHJi3msz6PUuYFf4aWYoNeyvsYVhPMc",
  "key20": "3VG2zkxWTAUEL6p4Uj4PZRMMgZfBheVCHkA93318PrrJdiTdexJ5s6GwNTc9v9AMstZFqpF3AVqtv9jhDdbsSZ9A",
  "key21": "2h4CNXSfPBmi77tWQppTV4siJcXwco3korcGaU2jgeNZk4RL4id4mfWc24xpiAKsHbUk81XpdKrH56M8xUmzdayw",
  "key22": "aKgU9eoLzwkfHLhFRnEydGxbfyhcGiw89Y4aT7nLGjiami1V5YzMjZfLwvbCB7QAq4ZX414RVwyuzWitpJuArRP",
  "key23": "59t4wc2Ehu4bA6XNjNSCu7sAm49qf7g6c91BefSogsEq2c3yAja56krHo85hsakKvLsaobgNspEAizd96AUdxj2k",
  "key24": "65SKPjGFg33fFMd4WsbNKdkh8yP4KRPRFfUx56rXxhKPAvRgL79xk5nQVY74sozFrbBkZgNstSW97FNpdjrMCfo7",
  "key25": "3jEATxCW8tcMFuJHzrMuaaCjXLSg6muhDxuWqKWYELWJntg7qg2VdaBYRXucmGkuHkTDChEwesjCirScFEkSJpNS",
  "key26": "4zdccK7TxnV9skZev5bSdevwiXfjo3FvkBqXgfk5i8GhEkghKcPGo521rxr2khHKcKE2RUqVpRZfTLZnFxzBVHbb",
  "key27": "5uZp17MdtXup1d9c7DVh22ZKfZ8sdyigxFZbtCUVyamvAUtU4KsyYezpirvNTQJDJbaGEoE7rAkjhFeCh4j9Zzzi",
  "key28": "3S8BoZbQUezcVPe1hJ8qhYY9siDm1gp3LuPXGnVeLFhe6DcZAYF8juZEcvxqEfxjErLB9NqgHqu8P4iQrq2MrNaq",
  "key29": "4HtkWbYdYMQAr6dZYyjZL93ksKetA7CcTTAQfYm3dDS56tFsYoHhssD3DxKvhDAsxpsVLj74nTyDySQ1SQvLqgif",
  "key30": "2KLmKd9qMQQWrbjbKWrFVjykq94TBAmhEHxbN7sUna83m3CvY7Sw8ARVr9aW7P12n3kE9YjyLg4PT5igMFEiZSud"
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
