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
    "3A1jxiVgkNrowjkLJ6irnsvo7WhwN2ujhrTqp1zNTf6EUsWZFjYtGQE8vDV81uWpYH9mXPoVs4Zco5waqzoNtidV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ma8ZkaiJnJh9KgTvJzu6JFiVeG46zctVRVkdHhC79EqxmeAigdFeSYGVVS8KK1x69UZRdT4AQxw5bogQJc8KCRM",
  "key1": "76ftNb7WhxiKiQ8jgXjRxd1mjqLf29AD3uF1jKas9hBqCfpbAmZHpRyshhKKVqBBPW7aLXqLTtgw2XZgMxpfg5f",
  "key2": "AkbveEXKHesC8U84tAs3sP85JAtmqP38wjfLvuA159HxP9LxSHBWVP4tgdEG7AfDNgw6ema4UWGVEGPocRQVRgb",
  "key3": "5hnTzYLjWJauaiCptVEdJWVunMNuozbVd8eWApYHbYFNNigsWzfSHxFJcWNSEbz2cQdAqg3mVe3UupL1Bp2yUzfg",
  "key4": "2WznWgWQB6Mej719wd9LyBhGu36vu2RhF6yVdMvuN56nRcdFoKWFAFJ8BvYST2KfaUtbTyxQFrxJWnt64jgfQi4m",
  "key5": "2CJZKKPF1WqQB3fMFjqTkX9Wu4qsifmmb8m1Gpk8gaTDpciS5YEWT1AE7dbacxMR35CV2V4jpEUXT5hmVdc3XmU5",
  "key6": "5P79kpyM5rGb5XeDQ6uuKMwGsXZ49FSipryB7b9NHusyhFMRYdr9XEDYz1z9aNM3gnYbu16q9u9xdpdJk63DDv2V",
  "key7": "4E3aAF4iXP2rMzQJEHWQmF9rJ3zFg3qbpTBgUeuk7tcXX3XMDfP7Rrt7Pma53A8V6wxqHxrghBwZrpunwfsX4QWv",
  "key8": "5csEX48vcZjQJ9Nr3EAzc9zR3RsMJQkF7TjVCUyG16nt3vVzkGnwzc2QdrZ1V3sCAjNcocixh123V42mSW1BnQwR",
  "key9": "3VeSvxwSwfVPoMbE6MmAM9FpCmQ9eppaXQzmtMwmVnZRLGCf9cvqynWbCAedcoLgzX6RKJo5WXTpCnQoAiJYEXQn",
  "key10": "5PgTngkvkxvPANtyWs2Tjfh4fgYJKMjSLKPpZ7DAeceH6srVwGA8xM9efrC9mRuQbJtZc4b61p4Ba9rjU9LJ4X2",
  "key11": "3AwG8hP81EaFnWePzNyEe9UefCkipBkm4fEUuBiJPgihNazbVFdNoXHzmtp2Dp3QAUyrDfWTZJbjDTkAgh7zBKpK",
  "key12": "2ap3Bt1QWXH4EAfKVCPp4zqSJmYEub8XfiAm91mUimAQG81vKG5q4TUPoaGx1vEyLePpfqSmj8RRd8EpYz3u4VxL",
  "key13": "497SAnCBhtDgYHL1hPYT7iGY6xRYm9gakneV3Zax7YjQEVWKNnMqq9CHmfQpQVNwpss6dZRTFXvtBtijMYiSq93E",
  "key14": "3H4qrYc8C4cEQgNk2HsyyQB78KBgTofbYZXY4GBdEuAxRCVydsjjqr8kK2DwThiSkToY319N7BYdhijJDpT4EKur",
  "key15": "3QT4rV7eowTEJj9yaMDtwhWnebEAKacexwCihS71NpNMrNyMQcMZYNX8N7wJNhx4GDJecP4fNXQg2Z5YcsHQh9ur",
  "key16": "JpzvAocrXuKK3nh15kXu2N1k4zZgoYygUJHiY9DiJVVMeDsgpx3wgJPyfXXCqN42gKqfi35Ktoq3uwnKGEFNArz",
  "key17": "62Zu9gzmufc4wqVUxbvpr8LLmB8oTYb1h9WqR4rNE2FJkvJfHYAciBsBE6YZeUa7HBNrT36N3f561fjV811LUZET",
  "key18": "2XSUbfCp92j2g7hSku561wnUffchfBTW2Z3io3fp6CBJyAWi4vdEi15j8NM8YmTcYQa88iWkpwvmG6evjw5U95jz",
  "key19": "5ayP1Z53ZtcvrgY7bhByg15NxXtxdd2MfMYkpMKrfjHAit4pFKNh2tRZwAB7MwM3HVEP1XVh8qqmV2386nrJJsbb",
  "key20": "h7rNryrqhJo1kw544hnvLZH3ahi8D2HGTbuBG2XvMifnkSrj82miS72Y2Hw3MXxMT2BSuF6CgZMQkCXiTXVsCzz",
  "key21": "4sbp99NHykdrkvJzvPnKchyrCQb6gz1FXAhuP96SKxgFTogooLiGwvBABuoXxAh6XEzCgwA8sZdN5efWRcATkFs5",
  "key22": "2hbuxZgz2XTGgxsBoXtzt6SAHAtPJM218VyM5AX1PJfVUemJpvXSyrNcvR3WUXhdTfGdMeyia2zSjG8BbhdGFkyQ",
  "key23": "54MNK7ecsAKQvBb7eKue2ACDQqUzLHyAmqYghSbrsPLChC265GDLANqnQPmVBkiozwkmZTsbL6PCVzijRXeoyovo",
  "key24": "uMzwotf5E65MJHhWxPHDbcPsHaeoPGr4sownfFZfKy7RTkCjn5Nv73h1VCoVftd9oEVg93d4TLo3HuEmWLnJgwo",
  "key25": "553hgNfUEtksSXqYKtUYRSvD1QxeQjo9XgFbbpUzetzidUDwYt5gKz92ZRTRMY4FVPKXGm9XcCuECxsMXCCsR7Zg",
  "key26": "4v5bNUEsQRM2CuZ9rbMKcK1zL6k2gGRSYmRmFL1wWwwdnQ9sKE7mKd8XoTJPDZnQfPBcmbW1Qz2vxDt1jqBzZ2k5",
  "key27": "65epE8AkPnSh9oQXnKLq2SzYbbV3EpbEUor76AKsRSaPyEdNkbMqvSwUD6nyFZ4g24XSgmTwX6mESD9yp8unfDdh"
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
