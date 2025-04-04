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
    "5VqbahtkYgywfq2uQ7CCS29uLMiDcdyCH9aeD4qpp2zwVub1KVvfECvNZ6QSQFjWc88pyBjeijX1XwULQ7LwYgtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BJpgSo1uUNh3wKq1cSC7og4xTWsZiHtzrCumSj9YxffagqW2WmbL2EnBNq4nZ5XxNQ8akSu4WCobHtzQYosJAWk",
  "key1": "5ZqEMwLgRoPJPbnmn7wBFfe7ncLt3TyZG1D7zKxCPmjGiwR4Adfj3zYVqAApnvuUvxxYjfWTMDkxQJvZfFnV26HN",
  "key2": "PWVqpb2pUM9vCTVGRh4L8ght1Jx5G1cbe4y9urvZif9ecTCLe5AAVTbAGLWcQvA3cXPzsQgYUbBNowuvTj3GJLY",
  "key3": "5ztGaExGQojxBGX9S6B2yxrVq522haWN2ZLabTaKndEPopZ96wTbt57KVkqn3Cz6zFBxXGrEzNvXiCsVdLDvsmGC",
  "key4": "3Vn74ARqMiymmb8ZswqMQ4Erb2hrpLuo7q8aAZmjMGpFTyYFQqp7Qc6FmB1JXtgwvQ7tQGChpBBbjModT8sZkLkz",
  "key5": "42XeUKk5fVzyEfQoAEzRzLoqiRkQT8qVgxTxtte4kZqZNvdjviFLuQhonrXh7eQ2Nroh1RejoDBS54TbSCdD8Srw",
  "key6": "3zGiw9VYp9ngcEjgFiAEHxrJr3F46UM72JnFYYRofbK599RwF7gQxG4JdD8C1v9j84yqLPA8CaWi3oJQcnDeiwHS",
  "key7": "3H9AkTsyAk5LtUUTpuKwU3YPGi5XXSJLc7ncdj16pne7kFEi3ErET1TtgQATgHbUmQkkBZm6jmtBLEvRsrVdd9nb",
  "key8": "5aFH1UApmpQuXoMFNtikzW352gdjLA6hwvmsGBa52Jia2M7nz2y4DB833znzurQ6JH5mRYm6Wr45kPPMpUpC4U6c",
  "key9": "5bm8HGQZogxaq6m6G1biTGqXzQaFUUZT3VinhSba8puFrxNQK5BGksi7ghsqTyG6YtXvT2oLXM28RouYhMWY8kT",
  "key10": "39vMCfkKvCUosWSBAWDkiXf6wXtATyMMS6zcVhKT7W21f68UyoZ8aEyMNdbPaA6DSf2hxoGqgYWSezj3DGh5KBF3",
  "key11": "doeNa4wNeiie987YFpntnqUtKGqytSTk8eEXfiYVr1xtJHBHvBnmJ9FqbUMPdcaA2vhrqCKkKfzUCRQ8owuN81q",
  "key12": "4djvP6C4JQGUZF1nc6NatFYSRR8bxxixZ3DHyWb5jBZLPhqPxhjxCjLEKUccvkS5eBP62FhEZhu4pZuCYRNAS6QN",
  "key13": "4s6Ni19P9423ZHrWC2JfiHsftEm9qWxezEgNC5RqA1UzniC7qjHAmdzqmUidVSenSpS7rnwAYDNkce8QsFQQBGsD",
  "key14": "2Ym3v28UZ9tjUk5WMqKLqueirbDDPzHmrF64CgPjcTQPP4voLGVjUWUJ1U3FmVynDtbhCTBXUnziz3yHWYbvGarm",
  "key15": "3pTSk1uGAU8YfbGXnqQXf56HZT32CcjqkL3WeiVpZm3uAnrwgoGKvrekcPmsRhyHG6XryEgrZoVVXLWL2HKkUC9q",
  "key16": "XRG4N5oR8U2SMbUioamjW9kshxaDFTQP9bi8PqFEB4r3323BMvayom81jT6uuEeGcCkWnjC7R4x8UbUihiBy5GD",
  "key17": "2sPejykpLQmSD5Do5UGCoJJEXC2XX7inF3k6NqcrFXpymFenNYaGQTsDGau8oWJwDTJP8xH8m8gmYg2UfHDzsLxm",
  "key18": "4geS8VgGq7y5d7PszvAo3ejKpKMYiMFM9k4DEwYWDYYEq3dg5fXo4Br1snN4iwkGaAntvsG7bZxWjoYfmHkfHb3w",
  "key19": "2MUu4aUMfurwGJM7oqtdV5QJoHZJq2Aq8uVx3vjs1ak8gttYBYJBUKZiRifXRFxnBNyra8KrYY2tCGDLo1vHwsGH",
  "key20": "24zdfJ9HdwBpBrRKgzuBKSVrDmcsC5ssDmZZrrnT8ghgj4ZDyEdjJm8NX31HSBqrFLvz1nFTpXrE9LmaR3JbvN7o",
  "key21": "4WEJBuuRUMzvJFaLHWDgGuhyWF9NBbm7S93X9RV3B64DXUchibcENRE468oZjfmYfQz8rJAw8exZPXKvE59Q9SG",
  "key22": "2gNctwNfSSUJqKspJk66yTPBQoYJXo3gqcCZm3PcaPDZVYuHFURR47CfWQGGSb7Unj8TfPyYHVAv6GXSoGjEuRhX",
  "key23": "5K6AWh1hGnezTagD4RLQJVRwAFJvhtiN6Ybyn5U1usG6V4d9ZUigEcnyrhRtNmeZwuLzFKd5Zwz6speDYVNQKYj9",
  "key24": "2frnLeS3qfdJc9bi2Bys6Cu2VxmisYPnK38Y7Tzr32rkv3gD3eBznbY8TsazYNJp78a4dPKgAicbFoya5agFXqB6",
  "key25": "36Rk1Wry3gaLU36ZhnGyyUSR1JRV3tobFVD24r4VcH4nMZvzWmheEHG5jFPpmN74oKC9p7TgPcsctyJijDRmhN91"
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
