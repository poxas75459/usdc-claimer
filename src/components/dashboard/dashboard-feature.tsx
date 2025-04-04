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
    "s2X4PbSHNiefk1ZSaZeR6oECbWQjYGwc7UWVTu5qhDQnZ2QtDh7i2cDpyUt4uc7j4X62eCCXYWtXCAj43bTmq1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3paWVy6YCtWDwKXRWAJdmuvJ6rHmg1fYobeDfneKUmcktJczeaNSFpjXfefNSAZULS4UY6Ma3yMe36XovGRzpprh",
  "key1": "hFSZjropqjJjAe8yuxhXQKun5ZeNE7SZfYQ6ei4xSApaziDeiovY5gRyZf7U3qNuFbqLTWJvZbzi8KayNxBUyv2",
  "key2": "564NPPsz9T9PYXYttXeB6Vm6Yi4GPQizBE4JWv8VFjzYEFbFt1fUcs3Sx8XoivQ16ErUwcjKb2SuaYpUkXqr1Paj",
  "key3": "5X9MkcKNSiA76xFnJaRonuQchrfK2bPEdoRgQdR1YbThzygrUHKVJJGJayyDo9ubjF63w6KioqpZVupoZsgXJUwi",
  "key4": "Hjd2imFaAZKZYq9tcyygRmYp5ygFAaC94weCrnnpX7N6zgebg3CDfs7VhCCup72ZrXxNRkuWXTNWeMWVSPnVmU3",
  "key5": "5NQZW3aBwQ8jofNBj54vaYq5LEvChJxCYgyGkDyqqXMy4LZYCzDeMpwHicXtHyFri6Xh1jSHJ3AqAp3pJp9wdyrD",
  "key6": "3ZK6oAe9vedJZHZmHqfYcApNnZWU3yUZ93s2muUFNfg6jf4oWq5Lhpnepot2mWWKB5vL8j6WP4egmQzKfHA3zEsj",
  "key7": "DBD3UuY9NKSX4K8utDmKFDp48Mkx7Brpfji82oysWfyrjSFuvJmiRN187PSxj4jRntqgV7vBiFLbjWuqqTh9b1m",
  "key8": "4i6ab5KKgLrgzdr83FXsRRGnSn7JeqKYE9QSEQs4HptzyCKRbnK6E9GHLn2Xg9d8Aduym1kg8PsKNpZQoRFdHjZm",
  "key9": "2jDSPM2AYSzkTAgtNVTitTsEYz1pFkyK64X6pC6DBwHgCwTsDTFq2LsmPuiBwZyTPFPTN6d6QFDpp5KnubTHPWB9",
  "key10": "BDUKP6V5brGUr5tDsWAZx84RdXUsPaWYEpJ9FB4gG79Bax5BqP7wq6XxvCNAWQKm4tjb1BZNbPHTD8KgnGBnjwa",
  "key11": "6hkpQPutWbn9g57GFVDXohqdLq4V589R1VKAaZP3NTTpHpNixaArBaqG2ijufaWQtDWgJ7etxRhmTJNxcW1bBVG",
  "key12": "24KnvkvEBQjm2NfnWDa3U74dyM6sGFPNZAH9gj4i6Vf2A9eQEy4Kvw37k99eHByzCgkn6TvR1i9UWGHHrVYWwegr",
  "key13": "3VZDGxY2pVdEx5C12kgvazoKzFfEcB92hsx1S8CyPfNViUDppkF7qRjB4kNxHbV2m29aPLA8o6Fi2FQfXwbjcm6R",
  "key14": "2MuMY2JfKTtzvixGBknYhgouQTLknDUJGQkk3Kb8UZhZGLXexd1Cy9fo29V9SX7nBVARjCvGvmY6wd7JozSKv3dg",
  "key15": "2Jo8tLhHaee4hY7eC8twu113YuCmpJ3r7CZvuz4kGgWbpDfUMCm7iAQHbSre5EtZGBb8hV4x51uab1FYPLBsK3b9",
  "key16": "3A6NwgHMQQfoXPHkGwcp9UnFepq2WNhA9fMCMBDcneGPB2zCavo1qvJ416s4dfX9aWpxVQ1FuqUfvi6PCS6UKtRW",
  "key17": "4kV1ReRt3pbjjsJVsmDwaBkhbq9kJpbHJND6r4kdei2PA1kUddqQ4WJQzmFrM2pWVi73L4SVm1Yg5dUUmR9YKFGn",
  "key18": "3jjZgFoaB9oz6VBjwGJKXw4HZGBx3q6wT2p6tq3HJyAEstyhjj9CYVJTjwajcGUkDoVEk5oRrpSuoKCoXKK36WEb",
  "key19": "tuibh9bpQo5cDPMXmtDrqJdcBYhpJkHtynu3jxDvzKSxE3QSWm7eBHUAP54jDwYU8uHqXXUh3UmeEAkHbFgRYgw",
  "key20": "3Q3XxfbPeo1m19rCj5yxA41yZ9CxaUrE1zQXoyjJpM82h5hB8fW94cYtzFmmuHecjNtuXJ69AG4nkg2BaSC2EeHB",
  "key21": "2bUWYJJAL9hgMhnEcXVYsix48pRWnPoqAioGrmpRAE4nAuvYUALjvE34Z6yKppj9V9b6ANJpazJBTXyN3sdG2hqd",
  "key22": "2N1txcNeL51BKnatkoEyupAGHUnwmDHAYfqXVFGFTb9rNRPdiStSHsHa4Ntip5s7VEPHxQuLBguQJngN7De7PSB4",
  "key23": "4XS7pa5tJpDEC7XcvS9io5ZeKGhjEhtDQKCVLbcrR2A6wpP5vYixxkNkj5ACpxYkVmCE1iMzrsEP1egi7UtFN9aX",
  "key24": "4mJ4nzEqiAqrStdWpVHQAqaqf26QjSkPiMxtTWgiLE4eKCohYPgF2An5nLtPxR4wJAPDQfvMsnD15T59e2ikAHSJ",
  "key25": "aTZBYLZzetq3rU4oUM4g8zBwhkSAsKrXX5qpFW9FCmsjEw8syNjnDBLxovhqjGfhXhCdaT5TBbeC5qYPKwKrCQW",
  "key26": "4ig2fKZRR9Via81RwWeBGBHAGD33qm3XuvwXKAeDcQrEktBspPasKcBFS6Uqi8o7GxY9GSQtm8PouQkRbFgnx8kW",
  "key27": "EgE5X3np96JxKPRhJjBmMcnCVwJh3Un6jsnFpS1jXHYzqxyeVfWdfPMgjqtB3xQfbe5Dkkcv5sacFZTxghewWQk",
  "key28": "2poWoyU9V6xop3b231htbwryfvuF1eyDu53F8he8dVCSCh5L2i7jCQjxf2J3XFxdrp8kJENNTr3jWDYCSCCukkZk",
  "key29": "5UH76g4ViELoNYoMYCyFQWYGQrNC7TecGcWCPWvjeRv3V5fFywUcj2u2Md6CeVXRLrdutDVHwqHnKvQTEz36i675",
  "key30": "2aAP4pXPc2GkgdbStihcGXVVVhgvBzHfHpcDswaNvYdZmU9iD9NNasuWZPGWbA2F14y1BYrwGyzUqcokTnzPJup6",
  "key31": "3qjSYw2HE3Mpbugo385uStVYphPHPtQq8trwhNpWQTSWMsSNjfozVViPNLDFbjTbQV3LaDVHQQ5F6589LKqfgPru",
  "key32": "522Zm9Fta7qPYEeMx77H2d9ZNWqwj8LJWBS3tj3YJPA5vGDQRZyVVfFZDpB4Z19NkJ7zNfmQJe59boDTbKc3cJLr",
  "key33": "YX3WKvzwADP2kLRNXnwEajAmRoHJEwN5n89EZnhvcc4twyWy3cZQ6G76a5VHqaUfVETY45snhXTMZGkfBHiT2Ts",
  "key34": "5kUrqmAXd5fMh96h9cjj5gDKmHSweFPMwJZvywKwtKMVpizghfq44fQ3q1s79NBPkX6ktzEE2iUnxmfpq6nhupkS",
  "key35": "2FTzjvsdNzMqQCeGEwgz76WbeiCPmiRKAwcPhz8ka58NDkX57JgxAJe2XHqgqUD8A93yJkPuGYuaJ3zsM2B3q6Z4",
  "key36": "525sUzAWUYftsrr5Xsho678zsVyqiZzrRFyyVy4UfiLMqcoAv9N9LeGYpM7i6wFUVD9dJTR69eKAnsfPncyAP58u",
  "key37": "VapbpKTJNgnCY5LBu6EdvZnaznkTTE4yHbQkAkUWDKH72yk3emCT5MkjpCpGJYsDwmDYmVwXa2cpS9px9LDm7ou",
  "key38": "39cR3UPA2TiAuwNyopZbKjpegNXv8ftCDyJutCJ6TuPehSuAqmki2CwLE9nAQTVP86rnSt7JtyeVL3ZJJkoktKx",
  "key39": "4KQ9uxBKyuNkW5WrzTb4h7q1mxNc6i39MYj5JUkrxQvrsK9Lb4H8ZoyH8o6RQQBu5A91646Rz2sKqtKDtp2rfWTe",
  "key40": "3bnzjz3SBdHe3mqtUNEWPqK1E1qvpDdSFNLzWqx5V4FPYc2NwGf8ficVZpYokZyrhkQ7pY2xLMdU1iBYFQDDgLoA",
  "key41": "5kV25mxJRhE4pnmzLfPJ9oFmUWxuP9LehZDaJew2qYdxiQHEryRvgRuN4MMniBZTJBD1Q6qmq6sVwQh5n3p3qwaZ",
  "key42": "3tdeQgH6joD67FRQ5pTsLWCr5gixco7rFZ36nE2hLE3c4BKumeU1CuDN5RKc1gyUiT3KfWaWh3kJGgNceWkbYcdu",
  "key43": "3Pue3o67es1CsUfzhNDPtLMddZv3iaJJQ2dnDqb9sG7MwTwQYP3QYmCib2mtV2bmvbE6yYQm2osAKvW4wFqW4iDL",
  "key44": "3KR1mkMS1LPz397H5fPPwL92d5wnCSj9CYsaQPPziyCbbybewjmejeY7erW6xRPw4DAeap25WRhRfci3rNHGkeuF",
  "key45": "5YNC9kaJrCN97tYNVepu7s86tREm8yHvrvqNwfcnhcPwkx9ZkqhTwmvJnxApU23uNtsK98ffzaS9PJvQTTbvC6ZW"
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
