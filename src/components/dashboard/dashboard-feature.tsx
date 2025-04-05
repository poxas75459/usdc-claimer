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
    "5DSnbCct4xHS4aqPSRmvAapdaTL3hkaSupMDgFJZD3FUrMgfagnxwz2yDSh7QqMAuknn3YRuBwZrmd4eNQxot3hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "382REAroYg3bwAWB9Ggy1tS2A4JBNg4bDmRxh6LpBGXUG3dEvDR5pN4kDDfLgsZ8JEbbRXcgCNYidpjanjyc5gyz",
  "key1": "29ZDGR74MMjpRZupHLrtR2K8VWmgntXNbjEBh9BF5rPMttFJC9s2a1r2Uv5wtoiD74G3VbyXqqBFas7etGkd2QGY",
  "key2": "5EuMoLj1bk5mLPK4jLca6KyGbcp5ECdt7yyKjo1gSBgZkHBEhkaNqKEQ3GTEVqv6UDX7DBKSwjrjC3EB7AJf8qdG",
  "key3": "x3fkzJfV9kWBNixaa7bLSjJT9Xzs5U5mfc7U34BANiSUjHpS1bvbtWHQRKZRKrpuTcUWCiWk8p3ETBdNRzbqi8k",
  "key4": "2hRwEtttXiLEPf9Sc6X2GvqGLfrC9SJznDqJ3HxLgEaBrxuBELyt9Cd8bSopDdHq97it9oqapCGQsjaYf8HHBau1",
  "key5": "2eZ4BVRzZvCvAGiwawGVv1x6umhXuTfwix4DB8tvVqzhddLYX6NncBXZbNqXL6jAGjtpnoCrUo6LJ5Fe2zahSyM",
  "key6": "3P72W2AQsk3qYovsJSA1RtyycGor1ZQF8uDvn68vnHxvU9bjfzxgbESD1vdVxVG1zEkK3MHtxiwjXMebtU6PevLa",
  "key7": "5BRW2esdEB3vQQxEytnJY1xQ55M2dKrq2t5gU7LzK7eieDcGXdbenLh4PfsBuFVfUuRwqvfduoFFJvRywbjVGEqy",
  "key8": "3A4TYgVzWrjXbT2Rt5CvAbXELoHyrCXN2t6R31M66EjjsYyY2vg3UmwgDcUZc5F9egfNz2v9x2SQaBqAkm3Cakep",
  "key9": "4td9SzSttgdk5uSPhrg4JBFLfc1Xh4SyaLNd9YMaJ9hxvtYASDF3LLDNaEUz3rBTmSouJT3HdmXvmgJo1jEE914h",
  "key10": "25EWY1NWNzCMMExKggExknZ2VN6qXALXNdSuD9ohfgds6qdbxD9shShYoghkyp1YUvg2SUeG4zuuyN66qPFSzqLU",
  "key11": "4u17Dnz8EZrnXg6gPkVNFvonGeYsT7RwHoH5gBaBQVcGJuzGVC6A4hKG4ayNPNoqwnTahinGjJy2H9DyfZ894Hia",
  "key12": "4EB6DenEeaE1Vwjg4o2efCWVVVeb4s5xG5zVL6RsmtJnorrSadLt6wwC4mJatjZVKAjak1zEFP46J8y512J9Jnap",
  "key13": "392odWzpFkwXNb6MPH591XYk2NrWYjp8qJ4hvsBhHStFG3RKtUn4qayvJWCGvG4hQFJLb6evTeBcQsUvix6f6Qd3",
  "key14": "4HBWPbMuYLSmic2Gkfc3n1PSskxBr8cod4BRCbEPemwosTXMAD7DX4bjWwP9sQNBU7bHxoqP7i2XBDRy4v8Spy3o",
  "key15": "4XJY1we9q5LogteAjYbhr7hmtRUanYXyM5F2zkojmoVAqbLytRutTGacCL2AjYsdF1nZzicxSjDm8w3HFrNoE6r5",
  "key16": "2EGn9NwmLVVjWrfnAevZFEELqfMjHvLRJtUVi85VFXAspwwRVqCjWYiotsQD35qDa3RhHpVvHgLuxexEKqANw8DQ",
  "key17": "2HB87nM7MPevguAWZfJwMBAujgLta2tTsVPZetQcH2wkSx7b6k7Lw7APBNnkpnLvttER3BnxgFdeQTdj4NXYQC1g",
  "key18": "2zsAdFvDTkf6mZyKTPvWD6m4cgZ9msQCXMU4bKdjWyk411AtbBy2vJJPWeMFJg5sLP5exCJSdVYiRHSfnYjYDMXx",
  "key19": "4oA3zJEYqhKLMVuUgzXrjWjuP8jNVCY5Bm27317LQXN8METGKRJ1mmD8Lhj5DUEZrbsyzbUJmZqCtFUWb3ffpWv6",
  "key20": "5WF58qxjT3Kq1ppqFrBdjWU7E1iFrkMdK8GTZxYKbQxR1rZYtTxJPTYADcVhnBqqhK3UypYi7XZn3YHiVEhQUAkV",
  "key21": "5VUXSVnRsicyLSd3TWWmmCzSFbQNzCHrrTArHW9HDrQ2L3PCuJ2sGpWvsWtoVDSGkSLiqSxbB7Ven9HxNPW24NbC",
  "key22": "4mhfE9NNTuWGScfksfkK2RGTmAm4q6D8wenuxv3Q3SKiPZMBYzH7B25Jz3xQqBwKqmr75H9b3uqXr6jT5Q89HT7K",
  "key23": "33hjy8DV6SsBqx1HiQBHvrjPTeDcfed5MHtQTcvKgfZLjgnaRdouX7stm9cYNztUAVYePbo7mwCwGmq43WMPpAgT",
  "key24": "o6LRxb4wRvczDcjfrwQTR9Ts5a45N4yQAYgHnyZrLmo1ojyTUjzKaeLt71MnAxVPR4MWN2i7QLcJ1Ye93LMv78t",
  "key25": "5HRj9CkTGQ8XuV7BcPBAiH8riR2N53DtTm9hCijEaV6jtSq5EmfyUSrVaQkRy1rap1Q9wbNYcJ37SBaajme2fqcT",
  "key26": "5FwNdFPd5JSwjJnoyggMdStKXgAThcj4vUx98swuZRiJ5mP3iwgpG5mFsdNsTjA68JK3ZEhUbWRwhNUxgcV5jKjU",
  "key27": "4TG8YXecDwFw4tFRVCJf1Z7r5em3CsPRccYq5PdiKpAUiqETfc5ZBuDmaHW6Va2VGX3Vf4azXzctKYZLoyQVrUhS",
  "key28": "5UrsvzpgdsUtnpW7girE2Mh56icgBGF9xN3KA6UzpgXSsUpXDkmXBur8gJf5ZUqgHNfw1EAjNMdNKxSxwgBJDiiL",
  "key29": "5b3wLZs8kntYBoq5C2ZjttMT76zCT227SL1SZtcpJfhdQCnZ7UtpqqcMBMdY2QMTrB8iwugAnk7sUsTVbx8Sqnx7",
  "key30": "4YN68EmekPsGPYKqqDCwAbZL7rL2cMHzbuotvenc7bTq3uvo4YXoQhZ4v9juJNvrGti1joyoxKeHU9J24FNjaegG",
  "key31": "4uj2k7u5av6qb5WXhuPjmRv3M3jbhuubYe5erdeauesc7HgHE29nH8VMeBkPriuRJZpqD2EpSBya58iRi7Up9BXw",
  "key32": "53jUHiPBp7zbNhJYnrdmM64SYAQXxd5f6i7MTjXScqfFPQdWQmgYj6ZQjBCi4zJG68G3LuKeHPxJkC26KcoAX2oJ",
  "key33": "TeajaSssxowXR5Sns28ymGVYPh32PBiVfPrGDm5KUPH8Ws9NNP4LocnY8NzhRgsbK5vfM29zbX1J3SQAA41CfY1",
  "key34": "4HKvmJGc2gFvDHcJrD6F3z89LaJo8gsXccGWhJpTMYjLrZhQVKgLYuAw65DWh1uVPHiX1tN5ngsisbhzDaJP4v5c"
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
