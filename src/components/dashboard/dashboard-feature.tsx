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
    "4qzNh5E68KwfbhuSo2TRFGDKPFnUtXRBkg59SELBheQXVfwmBLvSSbm1VKkwiLD3cxFkr5AbYiAjuwnbiSehtQLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HwpXMevKqJiZGHYXMuddGxReqUsrbggW8B22i7wBWDwuixWMkTVUH4ukNJziUZTYe4rZnxhb4LkaQQXFCj6uXcW",
  "key1": "3MJRxjtyk8ALcKBnGUc8SK4yS5th3raYM2w9GJoWJoLmWLTrha6ZWZdHLE9eev84nBDXgunStUuwuBRQpLu6Lthr",
  "key2": "2qKxoSfBPcmTrvbNYnbEfxS9VwUjQQGEcHoTbChywa9Hqg4NNBjMFpvFmGR3HEKrcrXYco8HiLQE5ARzBM3uuXNy",
  "key3": "hb52nMGguFu4TgoAdAzVgN4jPAPrBL4a89aDXye2sFLCHBfM3kHFLxwtomjX31aCXXswdsYxq2MHTjKttByudfY",
  "key4": "5YmZ39dUVzZ92Ew33CcajxdW5saZafAjFAXQYwErLFnkpVB1NGQvaNa5EqnvWhXPXCURWKe8uzQntUXFcvAa6gKm",
  "key5": "5uGqKx3sfo3qf4P8hHBGbxA189zdWFZjPaUMr2FwKbkDtSctrgULiW5diCUGSGUbBXeyV61rv9kpqhdaoeyHQJyg",
  "key6": "5uzScR5pMdX8rqK7XZy7KKLmbQCQx8A17bJpK1xKPtnqeViUMYEpfx8y37DqJWZ7WtUywDQkx2frgknqHZzAdHMc",
  "key7": "4P76MzK6J18VLSPhajTnH2snLsRrWci4JT2SN6ebqRCkHLme4Nnw1WYfhAifGt5kxYzJ6z45Cf7CFoqbhUwzTFW2",
  "key8": "2nhAjYeGbQyA69JJhfn2HzwdigEoNK8C6s9s2aXL3YbuKpy18s7dGNiTrVbJCki9ZhMBGH7P8tB5h1u4a3kvvRcY",
  "key9": "5AewxrajhuM6nZPF7bfGuUhyq7SnvokufFoqWYaSyctMpxfvEx7Fj4RT7GQK3eRCzTBf6CJQUmDH8oTWZxtsMqKU",
  "key10": "2cTuxx64pkwket11bdeznsFJGspwqea1Yx8MEb6tq9Mprgo4NDzADJKdWn4gEPiquqzuZRsv6CzqCKzjVxGeuv2c",
  "key11": "3QAXYfUDE5zdku9e7xcA7Fwtp2rcGqRbnDKxkfBuJdSekVeeMknaU7fMEbkQMrD6CKAzC4U4xaLmFQuv5uP4BxwB",
  "key12": "2W25j4Xs5oXei63DYBEQSwnYu9xNHJkyo7anZqV5Psb8eq1EjnmSrS8mz5NwgJKtjnD4JkGzQoSti9NeKwnZyvf5",
  "key13": "c3ejqKvQ3vzz2C1hsqmRRNgf9apjVxRAvszyg638JT1qdV2Xw5xBJzRGGD1jdfDDMGDFCUVMumozLztFdgrMh4d",
  "key14": "2ypHbxD3eDVmfDwW8BWfuaEDw84o7DpQ9LeoNRurD7cURqSDBbTXbudddMtumZd6C26zYBhYrHYJJ8Sxvpqczh4X",
  "key15": "v5Mc67rKZtiXvCDZDntD7fSBzkVwE9QCDGZQK6NTbiX3suCZrzDcBA1MQqbceQfkb6ebwJKf1v8H3yYrPxpKaGw",
  "key16": "2RQcTV2rwbU29EXMDvaDPF18aJTZhvKHTeDsdHGF8XUe69FfP6yhGNwiSMqvaz7qGGZ7udmoBAMCzA311UhdshXF",
  "key17": "2URs3aaACWGCBJTuWKgcpv749fx5UbpxtbXcr5TwLeJnk6uuQWH2Hu3Xw9Y4d7BKBUdw9E73obbvxRQMR5DD8nLA",
  "key18": "2oaR4mvfR2GPasfhMSpEpshepfnng1CScVQy3g6W5br2dM589EFcnqED7o8RYCimJYv1vLekZcKW8Hj2fv3Xe6Rf",
  "key19": "4wajNnA6ySftAfr691P2A8Y9WbggUCmxz5ocGrdMzScXvFAvzpo43SHFYdowkTbkc1KGHtRBLSdfcXh9DDeCstAb",
  "key20": "4ugPuzA8bpryJQNe9kJFAEKL8nWNDkuA5tY1aS3tMXXGyCYJGBgGj4JpKB2P98ufFSpLXGaavLWtGBYtzGabc6Gf",
  "key21": "2iW7LnD2xR4vPjyy5LftA837Fm9Lyp9Kzh2BhL2pQfEsnV9JTrSyJ2Rs5qmF3y4sN6DpTv9PcKD5rE1SEQtudqHM",
  "key22": "FGLkQNVKnS9ec8aat7qTzV4kMmnMyC2Va9UFMsfXKW7ckRsr1D7Fj7wggh9ZPEF8PH1UUQTqKQwRHvXFuur5Riz",
  "key23": "2GzpVPVG6d6PFuNiaaNipnvx4yy288GqefsNMpjXHwNSmGejrmTuKrGwifGN58Bwk5tf6x73xxEpacn7QrwyeKGt",
  "key24": "3Hr8VFY2h9oYc8GeM98aMV5UyYAWHgZh62dr6dGc3MViMK1sToS4pdwLgy5YP4TBri1jvrprgujgBLypDGV39duG",
  "key25": "5osGDsxAJfFmiYrQc7G66qRfegd86qsyMJYGqPHxnAQZaBwDf2eJsDsZFepqTQdN699KPqDP2wwrzZMtYmjq9nS3",
  "key26": "4eEC6NkNvZEQ6rwJn7StrdqjCU8nbvNUKGehDhHYHafVKGLoXfYFBE6tZzBJLzvsJTufCnFY7oVLQTRT86tvPpG1",
  "key27": "6zMut56y2naftjxDCRbr47asXAd5iX4ZmCo9Nzh3qJtyZVGK6kv8xfSTuztUDtmP4127c8NqLjfDoLBpcgxT9u1",
  "key28": "3WVAfhmUUEf1B8HNVuVAX5uXTj5eamrGTayQHw89BqXbg489e3XzYTJ7EcTwTrqqFeJBB6BCziPHpc7hGBH5rfdp",
  "key29": "CZzD6eqJHAwugbh9Sod7UwGdS8tcX1Gt7HYXe31g8d5r8LAvcHqWwPxJoF6U99gVV2WZii1cCYvPn2yYJpaxZB4",
  "key30": "2bjr2ss8TeNRwb4QRDD4YFJXzCVvMYhnKPjfrq4JRZ73Emm9rD4tnbWKhKPMq9rtPgWYq8ZU6h1rGPJqfoSGKRZS",
  "key31": "3uxWtu6fr2auBLKtutAsbdi6bVwCY7Umj8c1cqstx9uPNMZZvQMU3ZuEyPVAcWi1D5Su1D7iwuGT7phR9zhfnsud",
  "key32": "odMzxdGqr5aAoFvEmTaKVDS2qtm6SjXy32mEJmaNLKDvnMomHtkqqWgZBpUfXosas87ZJxz928jsoZ6AjieEpw3",
  "key33": "47fvienS7PmKipMad16y2nS8YZab9S6cDdXNfT1ujNc3ZfqsbctfGqPebkqE56PXis3uum7PeEeFRn3ukQKk4Ppp",
  "key34": "4uEdbAakYo1zNWCjjiwDtgjzY3cfWjDhGzEeKJC3tf7dMKavHuuwPbUGuu1dsdpzr8iSAhWLC56VUHCtutLmF641",
  "key35": "5ZNagLKb89U2AWmsfc4fQDJX5AiCnA9HY4TnWWsT57xnCuvZkdsBk5MDUgchKZZN5ADenYEoJYZmdbv9WmY3UNyQ"
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
