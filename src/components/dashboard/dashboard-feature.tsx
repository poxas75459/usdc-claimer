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
    "3fQo4pm6hFY7yPuJ4WjURcsZYTLeaCuVQ9eYgKYxkAGe1peFUgaJfScnGSASWPZD9x9FHYYCquVv8kmMroBNSy3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42d4wdLFab4VvRcvGMTC6PCW68rGXhHML2RQXyXLvJaUUR8jX31rBcKivRrYHCk23N6TU4DWrpMrmMrH6QKeycTK",
  "key1": "2q1J1PwvVE8525kA6yGHHoKD7vE86kuqv1wVosviqxtMXT3URGrJh1SE7G9riHYQJqV747fjHfPxNsyAhST3NZrT",
  "key2": "Ba312jpMJjx1gaX5xTDcoYxZKNnm6jN7dB1CNnoZh31Q4ixh4JDrgFACTEWt9ho9WU6ZfpXZ89qJibHehequ6BE",
  "key3": "5EjJcZxitrssD6StcUs6vDtijAic2e4bh8tuFwD27ms9QJx2MsEMpPWhGzR1CKBEWktv2GcM5kTSVSaAspdyLc4e",
  "key4": "9m6yMR2zSwYfNqdLwEC7whJqfLkPii3VNBj87EF6qGmMuaTsG1Ph3gnhCYH5fzAhutFZ44iTzYM9jdop4gN2soi",
  "key5": "57fgBBQ1wWUWcce2QBb5pFrBdaU7ZU1ApiXt7a3sh5tn953V2JYywcpXT1NZeXdJCYgMiuA7r848N5SXmj11cNi1",
  "key6": "4t4uKGZ68pdntiox53yR25EL4k59UP4VEwgZkeEVjapoXN8DitPzkFmkhZxaKxhiJHFrSuP51wYN2hauzCfpUupi",
  "key7": "2D8f6AzRVp3834PHWpNdcdkYN2WETQcj4LkmH19c3rGY1QFqFktJmNTgnjrnFi23wqBdgJbAwxuwikZBa2BVvyv2",
  "key8": "5yzYa2ctuDNeNRVH7KuXnXPtJiqG494ReNDHvYReKxj5sEagAZPz5yMxLo3nWW6DaMKHTyjwCMcET5UdYLDXCHkB",
  "key9": "3AC5sttqperqCori3fxXjxcDLSQXaDZDssBXHaFKm2ZDmrpUfVJnxGLrigDfNY2V6JnMh5oJYoCvmvPaYido7xNc",
  "key10": "tCTAoD4qBh5nwFergSmUm7tq44pyHGpHnU2YHEw7y7o9TXBfQxXZRiHteC28DZbz8ivUrHfNDz5ZX8jpXkYGeaG",
  "key11": "5WheTMRZByG4kkLKeKaTuJA51ho69Ti8sieBC42xMR4p93iPXEffy3eAD68JeEbHgrx9434ELMWkxLSyFWvFuCL2",
  "key12": "5Cai2bafQbpCK3QrpBAJLw2ccgv3gVLGhrfpECA7h9PZtTwRmJn1mHJ9xq5jaGmzm28nK56UZMSgrN6RWCE6bydd",
  "key13": "2jHrs1TxrxiiBgA7qHBZSyoEd3GAWkZTPcaPrsvDzdH99BammigG5pgjNEraG8TKERUywjTiGZA4GvmPzAxUvTor",
  "key14": "63vhrYJ5LJqj7dArBKS1qRAaDYXByjnkEfiQiftAycoKXFxmaK6Du2esfj6KKTyJtpbzbpVtoXGU3za7zC14k55A",
  "key15": "3DeCBbDoLxYgb6mPgai6hkf3pK1Fufte4rFR42iFTnirF1Teyvws2pXbXk1AqbxLjUfKmVUwdajjtYVTZuTwD7NH",
  "key16": "4NNCkwUbQZ7cK6JET9Z6WzopriQQMuKSbGgGqcip3ZRmbBV5PzbkuQHLyVYTr8mohDGFBVV6VDDgDkm6euQrag4o",
  "key17": "3pwzawfr7Q4Efz4HGJAt3gYYvBek1qTDM1pZkoAQzdrX8zWBSZ2oCowFNWZhE8LKRExv2Vpw31agMYiyDxJ4sU9G",
  "key18": "4fE8QAQHP4AHEkCxvMQYrC8JfSjojLqHvQbJeGkcuFgEnvWUXDoA1W4GQDUiQTqvYegkz4vcAa4Urh2Zjufa5hYQ",
  "key19": "3AnCdPbqMrhfCC1rvit6YW4BJsufhQvNpDZWQu5YzLJDLbSotEcMDinBu2KckuvSRkWpzKxUoYZFc6Ncm24pmQGk",
  "key20": "4RkpFKXrPrK25q3K69di4DCtNEvqPXVEbbTU62vX9BQW325NdiKyq5VSu5BbD24vKbJCcJi7cyP7ptQ3PYD11rjv",
  "key21": "4xWBwzxW5FZdjEL99yrevPJ2PNexcCE9tGAd8bhB4dZWeK97oQYGbQLiMbE6Wa7b4R4GsSm48FMoZZggGaWDw4GH",
  "key22": "iVzk4PbFXY4kSJFximrKdiobeA3spnPPAB74DVJD2vJ36doCBWpvsQyBEoeV6QQPqD6CyfcHZr4rVLYZL2tqpcN",
  "key23": "5AWfmLkYFKdihKrJiesdo2nMq3geLzu9nKZ55F94tmf27ALwac8hYFAUPtWanUiWAXCsg9M93pZCMZtSMW9er7Mq",
  "key24": "3i721DddqH2voqpyXTQqfvsFjdHhNnUfMpEKZzzZx2SKiAyHuy1yUDV5jmFuv5j5dUDtiAH87qH7ahzLymjABbiP",
  "key25": "4qbhybwgePkQg34tDCiffSwxjk8qEX2mXowwoMUpUmh6dwiHsnRdGwf4xGb74NyDvdqWzUTaG6jnH3XXZYN8ssSv",
  "key26": "3fho6U8xuFqQWoj3K2y6GEGCogsSYzHrQ65GvmEpocLBR8uDyymjbAe361NUPjGfmv7ScGQt9Csk1EpkPzTEXTDd",
  "key27": "3vfwQ6432heCE8qoedezKH9jx6hyd8whMiSVMNmcgoTEGaVfjTx9KU3MH4xTgu7zU3QPwKLs3BkXeYNXngxAYokY",
  "key28": "5oM8mJRCDSKekjvEndzzEY6W2q2fPj88tBfDJSFmPtUqcuJ6ntDLKxsMLG9x8CkQ6JtYpRwepRh4CFWxk72YddBY",
  "key29": "3A9UuFWrurNmwndksE5H5qQwPqqnpGALLTiE3mSjsefJyu4VqC56Nsd8t9r5pyGokPyE6M8NczZG9ZFXbo2Nfc3u",
  "key30": "5nU1yLk5QQUb72iermCrZ48S6gbW5NFC1cxc4vPYFyP8HWfY4Cg4caD7dqBQmpu5Fo9mQeNHhopdgtKTASaotNVo",
  "key31": "v7XrZ9p3PTgKC51uPCPk5a24EqotSrRwGxCoyX2dMsxoHFfwHQtoexCRBHoDpuoi6xtga6z2EXTg1F8voKuTDuU",
  "key32": "3anVDA6fE7Twt7GaLbV4Pbt5qTHMzpAUioSnsPPtAdBK2vfKM6sQvkV1wEAKme8HU8ae8fqCr7YW4JrmmBNiskRV",
  "key33": "2YdUkdFzShnJVxF5U8y6Hmzwc2sMFZrVG9VVsm8iAxm6UnSmfo6bd4xAriMXmbCjHRqHpwtMB41guudmRnvURHM6"
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
