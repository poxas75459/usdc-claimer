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
    "yxLesfoFci65vCUmwFshvMhMdAYXokFwRtxE2qrjzXqftfCBUTBxjSmS8NLS1bTDKcGLi3FP6oSC2c3gG2YmMU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44TegtmtojFyKSXpeEWb9sUoLuet7xNHiaJ3iRGuiLvF6vNf79QFoU6P4rJR83ndcKh7PEzME3RiNpboTpTf1Fm9",
  "key1": "58PVCmeEwPGTcZBt4FxhNTpf55JxvRZRr4t5nZf7asQLj44mFcZyAv1bU85KEHH1AtPt9pnR4yAAGH2po7xhqZKz",
  "key2": "4as1jEdrcwUX3dRykYZCQBaRfuM5kxtCrHcnoMnWKCA78dM1QphMriRFD9tqt7ABd9S13pwK4vi7KEgZywYNCX9v",
  "key3": "5Ln8qoJmLwmgB2naaWoZDGR4RewVCdAeNWmEUCGJ6twFHgxs1PLFsd1tWA6XnDB9iNgrXp36Lvg6VxFPmfDSK6JE",
  "key4": "51xgfaYxHh5vjMQMKawFm3yPz5TX1ZVrK6bnZRHnLfGHJL48brasib7AFMYWF1xVEsDhuyWfGxTgGSx6GdyB5Hrd",
  "key5": "5VtjnPQSyFSaUoUEFwnmP7tFyJcjv9F9EjgPW6h4wsqu3ZWHM5Qf7qio78oFGxbTJUcJFWGD12zRR6YcpDsZ3G24",
  "key6": "MhaFvBZHmhDCiDCVvQRyoqdAn7JhyodNf1KYmf9nsoSAPo48Y37Nfe2J2UpLnzJGsReaFzRFZoqAZKUo2XH3u7F",
  "key7": "2v3TVY8DiXdfuhQVvtH7Jf9khoACbkaaEwQBBenqCjNEvgtUucCAtGH7WPxCbyJoC2mms2VQM3UofvW4TWVZkitn",
  "key8": "2gqL5Ny4rztGYvSATEmSpdTCDiHUmjQeBKhtZ4Qj9ZXxgNdgPkKBdMikTeaAppJU8BTF1iHXdcRMkGsgb5Run2oT",
  "key9": "5DbvSwuzCTeASLi3wEUC1qZWFLG2783QJEBVfKkJBfyECkiZT6ioN9WozWQy21SBu8FfBioER7ML3ipMU9hY8mUd",
  "key10": "59CjvEVGSMgok8dDAXFMqWp8kst4v8nNdxMpiBabsBAcbqHcES4iGCuSyAJijKnJ9sz5kdC3BiyiCTeQHuw5tB6h",
  "key11": "36P21aA36TYiHUXcCGng2wKgLnPAhRnBb5M3L44z7zzcz21yKYoXry3HiFC1Eb3HEMRtpLHd8sWCEXwNdsTVnQMq",
  "key12": "KbhD3tYPWoe6Zg32Vq6Z412F4ihPtespFcMjy1G5y6DfYJZc8wGiQ9tkeRYeKa2tFSs4g8EvWKLCJGY4Kz3bhS6",
  "key13": "3y36QT3SYzdBBiQCAxUXjaNtQLsTUwicBuFFyK9hPt6vQuQB8vWWxDWXURqbZYgGFu7RuNqWWU2suFV2sg1SgUQW",
  "key14": "3HaCgtLaF1nwS4xnrrKPrqEdRjbD9bawev9i89mAyfz13ozXegvJWP9X3cUnV3GsYzmC5ThgE2aSkWEzHkMYMSt4",
  "key15": "3UUzeNiyj3o42nWcgffoLzRFomwXbK8VAQUiWH9HTijzMjyfa2A4a8QBw3Si1Qm8ak4YhN5egZzBuYvge8xkKdCu",
  "key16": "5EPNEEGT3r5onWXumDBXQkuNnsVNK5DQdn2PBDH2oqMLP2k4dJa9mU6CogGvHBqzLMUKu92xU1tgHXb4RVafo7S3",
  "key17": "49ph3oMA777TumaVBdyawja9J2w9tj6LEBzt8KobwsXjT1jUVUfdtCUPkdxBqK6BatWL4Js88A4T1PLA58AgFKCd",
  "key18": "3JKQEsPXbSVZHdXFWtWS6oW2KfvT7GwDk3YZ8XjhuTsN1XXTABqyaiMT5cBnoxv3uJXG4WbGg8e3w4vJ8vRNAwnT",
  "key19": "DHAE1uFQAAyaN1kBBUvMyA7U4DGDeUcqcgi2GyYPqA9YFoNBBSwWWtMUCU9tyqLDmsQczJFjvtNFKYe5hNtHtf2",
  "key20": "424hmBSDjr2XT5MxNwud8nAUQFdL3gGGZ8f8rSWTu8EF73Asd3J5DutakPcQ7HWxCuW2SNqjXPyye6Ny1GM2KPGz",
  "key21": "3Q5NLENzrk9TXRuuBsuDqYphpC9SoqthsBLpEuJxkZSfEJgoux6e6gxxf5ii7DDg5HrU4S434H1o5t66v7KKfd4A",
  "key22": "5NE3eX8TRb5dHP7y1MjUbgEKiLCqGE7Nbo11vLnhb6sDTC5Gut1L3oFPBBJAKWauKdkXDbJXSL6hahQz8oTY3ppd",
  "key23": "2c15v6vJW9xWcF4GLpnjQJzgQ1YU9bLRjU1TTtd489NUkaB5XdLDBXNWp23zCa86oNFzxMQMndiaMkVCe9UMtGk",
  "key24": "2ASBXwNnurdscjxhxWsvV9HZ2uzezpBFot5Kaez5wz9NmXJMUp4nPQuHmgg1GVWubSsT3Y9NF2xdGjQhBXuDHShu",
  "key25": "3XxJFM3rC2wFjnemrrdcoKEZ8hwNa7MLr6Dop7gHkAAFF4eWHH2R8opZZTrHyCH2pUbkkuorDSBkN32JmXp69FX4",
  "key26": "hZWY1BBXMYJeo6a2RHRrK6UgjKYEQwSvE3oBV1XeRjs2QQ5tpw7sFeGrqKCC9GKLMdnN72GF3ci9vzz9Lo7FT9S",
  "key27": "4PK2FfuFdJdCkBZCoWBHG5KjoBnJ6kodtaiNm7yaAqTV59W9aE3XFxdbPTXkBi6cbhbqivKeK2Go539MEAdwPV4S",
  "key28": "3zS1ePbf2mPjAgSGEGMNmXQ9CrHhJAJgvHgjXSh6pr33TRfAtLAar3NLSkNhHx56Rkg2ADBSuxmHXrJrCdFerWzr"
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
