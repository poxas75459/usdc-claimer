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
    "TTyNjmNaPCgvdKKeFnq46avBeMPQpp78tmt4SwKzaM2Wc2A8MFiWx9gFLwZHc1QfNy9Pc7ZuredBiu3bi4gNBkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4StYmHRZhzSarAoXKV95c1KmKVQ9JvRM7BwTGVDpBub3DxN9XCzg2TgbSFDayNcvjEExbkWuDFS7gYXPg1NkYBoq",
  "key1": "4k8nYGBxDnFRRAsiU1JgXLPHqUDMRjNGV2CCDkxzDb7EqpNgdKcRdJzJgemyCSnQtnPeFJzXFEDdm6sYvrmuJGrD",
  "key2": "41WgmJ38iCBe5xURfbPUiUNbJKymazAibv3anWC8BLviusMdEdFFF8fMA8KCYUvE81oGt2fTHv4dLePZ2uhGhHGF",
  "key3": "inVJzZmTvWR4PUYVkqp1m2fjntDLbD97AgqypfNU1w9J81KjpM7zFr2WhWjzqNwd54QkXtLXFoesrJb9P4nVUez",
  "key4": "4QhdkteKcCTWjMN3uH6mnmhbtYGjVJKqqu6VNDx3h2KTrZ4xB6kohfrv1dvfoKEs8XP64GqrfnA5dA1HHCym93Lx",
  "key5": "4Nth3cFBbUHjhVWa7Ckogi7uEoPv78Aiekths5m97jtELx2sV5cw1G2i6tVqx31D26CwEPxoZqf9RpvJnDJahBZc",
  "key6": "fffLaADwdk6rnmHZ47t7N7VhPP9xbE8jdAVKn3iJwUVNADGBm6BPNvuzGBnNHsSnBSHjLHH6YAx234NV7thZrdH",
  "key7": "3rYgtacLeat2DWKjdPArSWBHsE5uhazLK6wy2aVjeELMG53qUFfpAwEiGyeYWMhCGp2CM66j3HBk1NLj2zUh9gJx",
  "key8": "NUsSZ1FrZvJSSv73SEWYqYLms4gNcb82SehV91iBtbfbkt1GCM44veU8bzi5TjXn3JZvHVPTrh7ZUHmeoHQhoYJ",
  "key9": "4ZtFrUKan8bXkRRib7EgZn4ccRTdwUNwsGEynGkvKzXfLAAdQb557bEtDssKZAyWKZpfZoEPfHHnBPSGjpkrMmzH",
  "key10": "36qah58kxng5eLdcfekTQprgc7GzV2rD9bTbJyU8MJ5aPJT3RHXYBDC1VwBhsAzCJaDzLwJtjVu6XFrUCMco5pq5",
  "key11": "3QM8AnTsAcx5e4mnzMAkMhr8i98M3ykQYiiCsrR9E56BzFBQcdYE4FCvNeomS7uH1qGTdyberkMjeZqU5SdLMBWC",
  "key12": "5CABFjGwu5KZm41tD5zGwCCg1VZjGyhN2DfwnAMYBpZ8ArGSx6v2MycjN6CS2XZdUjNkWfXWjYtUBJgUEnarAVrG",
  "key13": "4LvvasFSSbSYvJztfD4AX9YBRkkg8DTvVVZ8rscoVeENvPQ3eQczLBZCagm9KEos1jDi1t2G9Z2BvSBWeFUy7Ywo",
  "key14": "5BBq1iZViibvewLD2XLkkxSgPTeWdnEVLnkZCpiTHhZXceZXge4GMHPUcwayLZjGFKikbbFo1Gvr5dCPYhA7muAy",
  "key15": "44FNVD2tbTmZdLvmxLZhwZxqpkP4o7nYyGnqS9Ep3nUKXgNxCg5N7YxyMcur8Z9ewZiF4AAfrzpwvrZwab8eD9o1",
  "key16": "3w44w7vJJzaDPBYEiK3LVk6MgYaR8ZH1yU6pruYi42GZTNGtbvsHgnLXpYpMHEF3rKEaaFzdBttkSKPpnCSDajWP",
  "key17": "qtymrJKw9npRRNJbmCqMNt8iTZ5HSd3ggT9a9CVQyNYBjeAWbM4h3nW2NumgR9AQ4UWRc5Lw8A9rTtd1wbSbadG",
  "key18": "23DfxTtkEvsRvSoCnBZnremAyZdzvRVby29VJaXZayUuBdLRbZHkaCb9nwUEwCEkPTDdj9hZBTM55vKF6C22PKBq",
  "key19": "5PWaYvfam4FbqvY3mibdMT4Rn8PeDy6BopXJq63tBZZNSfRdLxyCWAewCBeasw83bJwCd9rMRBVk8wtrx1UtNMyE",
  "key20": "4di3Q46XkVP1KiEV5Mq67XsQb9xQJZUGk8FhWL96D26JRY8nRKZCWD6Er8YLGox8tKj4drxVCh7wM87HuCzvuWWZ",
  "key21": "48cJE68DgXBE6PN7vRAmoKkrZwqVmJq9Smz3mnQd7Dex3AWiR3Ym2HSEgcqeQpN2nfjE8ct3FxmKBuXCCCY24BBe",
  "key22": "UJp3wpXFMJhFk5vQJRHwPeKD7sunPbNMHzkeTmcRWWz6XyAv1Cw2gk6he1Qz4iA6u21YV55VKjZKYEGUp4P7xRs",
  "key23": "2qiyKM1zNjSbom21GcWESc6pkNAz58MTdoseQFYTy41yKJphUm1MUpdexwco7WToVrQD9ypFxPEdug1hqcSANPia",
  "key24": "618pus5CwRDToc1xbZ2hFkSzQV6nd57DCj6T5fb36vwtERnNNpem9DLhV9KNnX4xKMjyTNsDC8ib8XFhoj9PXUnt",
  "key25": "4nYBKu9TQ8xt5RnKjzLLHXorTXzCuygci1wyZfZAi5iU1Teu1BCpD8XS4g76i39KQc4ogpYVQNfcqpJGNdgZUuMF",
  "key26": "ya1jCahYccyS7dkZDUY273ZEZ5bSmXZ3KHaUgXKLtCkhpj6tBbGtzpQw8J6An9AwVTnWNmZBT9TxhF1dMgJQbeX",
  "key27": "2ZHhVSeBM3GqhAMQk9tiH6p7cEdqfuArq5bcdFY6dx49pXiv8TbP3JRjTsyyHoyGbshhGJjz7TFgtPDAQnYWKd8j",
  "key28": "2t3hnPBA2ysB4yStTUZNj45quiKUPjcH6GrTfgBXP25xXVZnpgZakmzGPUDx1hxcMJqxByATcJa3S5pXtXorWEQf",
  "key29": "3kHfn12abK9ZNKqVVDoYdc1EJek7zmSiwk8AjDcLp8AdHqXFokLnxJnqNi9XfqkUG5RmCHZih61VCfvyx9JUFWne",
  "key30": "woBs77W3mZz1G8ZhSFuQtRvKtSttDHD7eX3LpyDAXHNMajTQaCsx4SACo8GS6Px8zmQibvk7prQvzVQ8e6Q1SDi",
  "key31": "3NoHWk4jPnpcbY8tm46f8KH8EpkWLv3FPaDciA1aiibSYmXCmxVoLaY7wtGSjtCk7aH9YGcyHMYVVznDTa3aae7U",
  "key32": "5HcqCENncfZiFBWguwakyMgZVV9N7JW3TDC5Sm5Hit1VQfaF6AWsB4aLR5vjjsiF3vxmjuYJqw3227aaTj82KZu9",
  "key33": "4zqjvYDdro79WBdzAsmsH4vEeSDTcugmjHra9rfSeQNJm86f5jgGN1gbZQk5bSStD9D1NumKNeAXaKE36QPqxaXw",
  "key34": "51rrsJmro4Erw7TaAy9VdtPJPYiL69uLWoM5KMgUxzkNTmzABC5TunyBEX92BWzHBGrsABFC9SMZ4gzMmYRisxWe",
  "key35": "26dk1qyxLeFZprsoqEcWp4w5RqZiTqSn2Lyhi5S7dieTuhn55xjJU4VqRoqzCy1YxZP32uQvVxYVSHNc2DDTWLru",
  "key36": "GinQq4q8zhEFoic4tfxULfRpehwhrxxHfeEENqMJt7WGjP9Qm6vnZ4e1UpgzwyA93PfzxE5fxnnBShXvCqMSSAS",
  "key37": "rrbp7mR2rwvemccFZ88GBX97Zg5Lu3cJWEZVwgQkpGjsbSGMxsJc7wsLhWaVAQ6zGbptGzoXzaZ9udAyETKsGsx",
  "key38": "2DeWqsX4m55wk86raWqoEdPkT1QKowXLppjreQBMHqxzRT6nEuLeMhMCYrW5pqBSCwq9QyiT42q7tve71izECnCZ",
  "key39": "bB2NyMWKndxs2JenHEoYeQ51qc4Buue3qEvJT4WG2mmBLWMx2pJG3UF8FeufBcW23a9fVwywKpL2bu7HejUvSFt",
  "key40": "31qMYYB8ZFmAudnLyetRAxZSWtrc2g6Ej3ij8RmmtxVipcsgV1SZAmyywXus6Dhd5pwkcLL4yh4y3NYVH43hw8sb",
  "key41": "54SqVGzZdUV73q8kBkA5EjbdWyYzEQawRtu9tcC1CeDzyR5b1ahdbAGQuVVB6tpqkj6y1aWdZYouQnPV7GN89z6U"
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
