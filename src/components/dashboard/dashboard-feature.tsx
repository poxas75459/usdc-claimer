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
    "3opFHG3Sw7e5jwhEUAqWphQ1rq7hxrkDDBUZe7891E1vYpuVNEfxTPGMaJfr6sAC1vZacq9GcKVycwxDJckk2ZZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dFbmBudyPnTG1B8nfr6kYWf6AHot8PXwqyFGTzRFfBJ2yf9JSsKxZyYP5eG9JUQKL4AER9MHtTfEgMwDtzwWkyv",
  "key1": "5U9fL3UHSXfjLLg6TQuVzCBj7EP7LSsHtfCcpYs1aFi6ZfCYAiA9RMwnQconDvjqFkzBvqv63ZfAFdPCtHZyiMRc",
  "key2": "DBUhrJgUa5zJUCEdsBoL4UrtjuMUk9rZCevkdM1J8Gngr9XxfL9igxUT1Xn8QsV5jdheb6Y6NNL79YKk4LUq7h7",
  "key3": "K6AE23nmRuBhPRcNJxunozoWaSdyqRc8Si9j6WJhDKKNBBZmrTzjGgAbsPVqJ3WqqaNLFDuCPoxsfRiPqFnra6s",
  "key4": "2MeLovtZDG1oe5qv4vPUf2UAD6G8DgjxbozmBotYLBZzgU323B4j26r857zvyFhJ4rRzcKmYYrtZfVpxXpotnkzU",
  "key5": "4wdAANH57i5wqMuWALpWkavjuBTSoQk55eV6WwTHQymrkAZXKdKUp9ZFygYMxHCFdmvS9Aw9tDhQTXgZrwsSKqVT",
  "key6": "beMqEk3H73VPcM2CGJxV9V7MT3JEBtBSC6P655yNmfC9CM7KEFTZipHKSksmz3LPTs3D5x7hFuSG5trq7PS97Vx",
  "key7": "5vH8FAV9C58ZALwKqWabdB3Yc2FihxGgwZTD33ZW6pqyMTsG2NnE75e34ShghkGeKdo2rLKLWZRCo984YUNW7ArN",
  "key8": "4VbA6sY4Xm25qUMGgBfPZ9yE7Me9NamzTghrSn2CcxfKcmtf9hzhDud57hpjA33CsixNR3AGLzvUf8KWPWy1Paim",
  "key9": "26U9VhNjHBxPDz6tuh9guFwv8ETZSUa6H7B8up3qbVvTkCmAbi3PvY2KGw8mbPzCx5Uyi44kUPhRn1pJCdT9SJGP",
  "key10": "3Z8GMH6FHdXhUj2rxTN3XfcDEAi5vmdxLMhaoHVL42nNFxMHb8n73YaSfBQo9zoYmBmSga7ew2Lnn1eCHDbL1THK",
  "key11": "3qy4G2FzNBKSTrxwJGB3f2pNVhK3zeYHYDy9aBmiVRrSLDWk3tu4AzusKdPxL1C29Ah5JYHQYuPRBCJh4ccPpEk",
  "key12": "4ZamSsr9h3DsYVNSWyGmMNjPL8qeH5RomF8szxs9262RL8cekWa112FZ2akhKrWPGzwCgLN24o4gJfLYF3fy678Y",
  "key13": "XJ891GEtj4q1rK2XykdAgVfE8KRvhJJbMLUvcTgvXnLeExFWSduyf6Ft4Ax65ZER46zFPwWGFbsbEUxj8ycUK3X",
  "key14": "wLzBqz5JoaUAAuYQD3jkPe8L84Ke1kFmtFHMTqVz62DR64uccrJPQqewiNakwgQypfT4nKcgYoWLnFX2PYRRqiD",
  "key15": "3ZfQj7Ly5YbaiZPyJwFdR1ZjQXtZCRQ4yjKzcwMBjpBJGjVuoK3xW3y5DhuC41Ap56u3GCSW2ZxGHyjGQ7BpqKks",
  "key16": "PN2aCCyRBpqbiYEv3CDyodh5xHnNcaotmSZYNc6zmABiME3mFDPKd4vRuDqZUnpeUymDHG1WRYzD4gJSP86Hq9z",
  "key17": "3fRjkQMKQMJD1xyaRQqZ4sV3CJP9MHpkz2iphgXQQ2ajvkeHaVDeufsCPWuhzTAXKEAb6ukoNawvWerudU1H6ahi",
  "key18": "5oBK5wj7Xqcy9SKs1cc1bwY8S4Mn6w7hr8dixkofA84oNyvdGufiWjrbGrsLKQXsYFNyiSRwvGAGdUHoYyPBz8MK",
  "key19": "3JUfooaTCUakPGbKphw7JdTvwVFdfTa33g9rMAgVpRwtKeFraawYVWtHrMZZfU2FyHFU3AZRWgnd4gJCDZDGULhu",
  "key20": "5DJVshoSWx6MqYgUtupatoaerTSW52jwFJ7BtLnVtgwr7N46kCHcAjTzCtzewcDxeeBqsb87GTQpgF7xe9nPjq1V",
  "key21": "oRs7V959zaovLhGCqxWXiLHqVaxDbjgcJ8irm3eXgBt4fxBBLQggxtTJB5A6QFEHTQJkknRyizXHEyKRTR7rmQM",
  "key22": "2eYxK5Y6kjMoZVJzRf9qPYBrpmr4RZnkG9ZavRMRPKp54jdEsHiUQ8FAgdhAWRarYFkrYxQ4m2mBh33yZUjtvbay",
  "key23": "4Xi4QiobWAqMrbT8dTs4JTe14DyiQLwvnPye9iuiR6PpG1sPMFNcqKUpN1SWyvfdeNUkVJivaRJ27MnatooBSriz",
  "key24": "5M56S9isyMqUs3WFPQn9KLHWMQPemXmWT3S8xiT82d47LPHnghuAw4UFuS5M97U1wuNBckoD1RRougFeDWfJa16A",
  "key25": "5wPR3bPex3V1Uscyheb6z2aqvjYXP7rEsbQgJgbM31JwVDqXGuyy56XnQvEJkRrmcqyz37R4VuL7fBaourdAAErE",
  "key26": "5f88betubk5gaExCNNTjch75u2WEsNCesX4i27NGtaF7oNSy9DLpQMwewJ4yZWwch1exAYB1ns29Lj2r82ofj7TB"
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
