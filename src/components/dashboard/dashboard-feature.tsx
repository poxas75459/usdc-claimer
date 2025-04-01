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
    "5rSr13rbeV8wtxx36KVw8rqgjdHCtGLGZJPhsvavBfHhL7ZyC1KM6YfxLe5q8dNoSR7VF68DbqsRrnfzksNLNwAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ntRJS4BkdY4MXGxshnzyb3X2QnHzcETAG2rCykovCFbXg2LnXoX3zqxec9WYg9rgsR5edVaJ83q96wadfCiWrr",
  "key1": "2tGLH35e6EZdJYaYRpDSt9UNZquoteSkC5gSaqi8JZa2JNAP1Pop5ahurhirSa7kEbps6Db3nFYauLeu9jGHGprF",
  "key2": "5hyUHj8XnyqUb67CxuQkUq47aBjtPsJ985YZX5e7Ss7LpRq5CoLn1YSThqEfrhr4CZFw92pdh2rF45NKgYHn8URJ",
  "key3": "3qqcqJamDrAJqLjTKnptZe5t8RPSwJMybjW6EvETeUJSkUuCMyUsHv1FRVhEMb1p5pneeALrULjLyQHMQyJ1LB73",
  "key4": "2A26iogCJPHXW34vgi4P2pBj47dWqiHPZwnJCZc4zeJMhtyZSWKuHCRvjiTySh94n2Lsm2xgNjWhXRynUnEaAmXa",
  "key5": "5q9TLuGrvJJRR6gYKc4c27ipoLMtHyz2cvHhpN6Y3ji6tVCNhrzC5KdK4BR99KYbhnE71K6ochw1H9mzU5J3NMFq",
  "key6": "2bgu92Dasq4yA19ouhhRy2j9mE4po6qCnL9PShzSSZPTPkdMrpaVARjQH1pLNsF81xTykQPU2ZeopF1UwrcTPgJU",
  "key7": "5ZJXArd9J2vWKJ8TBw8vYSw2SCKrd7uPzGdPLMmBHvui9LhGELfVmGYc3EADBgoy5jtkynQ4YZ6jPzLmAsx8mSVg",
  "key8": "3gVEwxyZEfEEPPurmwkLGUaVEehjwpQ5Ft8yCqRPMBivWmhRqNSYjhW5Wyg91xQqoLA1sWd9BFZpo2VdFdGZ9uA",
  "key9": "NWY8eDSmqNjMHVytppnYJvr2YkMz2y49iuY6ad9Uhr1VjYBx9XqEtS1QqJfyPfnWyiJwhkVPCpMhzAwuq9RZLgh",
  "key10": "3XTMV3ZZSm3xwFKFTWCtbejLCfbEhQ4R1wvX7Kn4HMMafXudmKpYvEPVrzbyynfvbnjWdMsivnXUToB8hz6jnncL",
  "key11": "2e3PhN6y8YE2bUfpc5Nh2qHXxuF1s7RbXzncxtWgXbZ8P9gz73BtcXThbqRAwWg1ujtWzjErDRwg6Cb51QuRZYKe",
  "key12": "4SZSQWoRC66mbRQDzxA2ejAbLwHu5RyMgyHV1FwDcVrmK4mTREXWdtBJDb1at1ZzGyidxW9bEWVTCuhv2Zxx2Qe9",
  "key13": "2xduNuoFEfdjfsUPHHUhHJ6S3uoK52gbM2hM3BfQm12KxTva1jjhUAVa4uihrmzNawG5xj4Bhu9ES6SwVr13T2v5",
  "key14": "673BL4YRud8uh8uQSpy4PLpATqB6Ww54kSpyYUypLRQRe6uTU6WHFeaNUa5jf28xupXpB44Y6dQB6JCFGhM56zR2",
  "key15": "pZLAibQRLzXf5R7gknPDEkMvHNvxNaRRkoZKZVwni4wXUxbzpTYDmaoSbqAYEScqPsKWjJ6trFGzRzg449VwRD3",
  "key16": "2nEiy7jZ3pLCwzwbRcoqJnAmym5tLDk7gQ6BiPW7rMpLam9CcvsKVj2eLY4Rz5TpVBr9BHGX84MzN1R4ommoboiJ",
  "key17": "51mehgzm9WyCcj4hpPhcAokA1dedBtdtvG7V9PQv6TEzZq81ZirzWMSwfLPaaXaFfRFFrF5sEBZtah1haL4G7th1",
  "key18": "4rDVJ2eS6fTDAjYTY5EBuTVc889G2cLUUczSCBLXgwGTvDdbyrSsvWfpGYzRth4yL8QJdd77fDMLZJPVhAG3zqE8",
  "key19": "sWNPLjDwhfj5TZuVgAv2KipyZqjRaQ74ypvU75Z9PXinBznbXDRUi9VQ5pqBQekmdo7gxG1ehPJbogXWaSueAMN",
  "key20": "9gfimWbPSDKQZPGMvhzTxvWPwtjFtfCpUu5XXona47Uj15ZoU42zcYwQLXzLCLzC6FAXSJaafueBaSSfVPR7eAx",
  "key21": "63VGkKtvUKDK5h5wFgh7eSLz17q4aAfrgcC7CDnGyJdNcDpktAqQfC9i4MpTD8jQhQz6uCntiXF8iCFFuHKFK7po",
  "key22": "3DV2E28n78n6LBvYj1Zpg77NaobdaMFiNV3bTs136wV8WJx3ZEBaGn7KDsiddZxjJPKh3jp44cDGohKVB4TyajXD",
  "key23": "4XBhztoqJkgbcVU48akxXq9AC8Nn7ciAgS6Ezt2shiRNHuNZBCNbLf9cgzrbRv53Ntba5scM3BBKm7xdRrJB5N1u",
  "key24": "RhzGzHXAfjHvUxy3PC1zsDpj7XSyv1LfJG1jzEYmxE7QfiqDA5ctY8T6GqjdZLLCLQyKg4JbrqQkkoMD3k3vGFB",
  "key25": "3uHZJuEJwhtyL17ZzJEzHzu6Aj52u9k7ojySueoTiTwDi2UA3YD5JyB5CHG6AMCYKz2vtiumek5FCmgGBsHitSb3",
  "key26": "34UbtQMcftoXeVLRHNrRFW9AifuGGBfrpoV8FkHUnoQByVyHPUepMC9MWuV6pYrga4qiAQwJeTr2i8yHJHd7bF61",
  "key27": "38KqDGe1mwMdH4pFC8fUWXj4RBxGLi7J6RseCnRDHtnSBUeN78i3efKtRsHAqgzxEF8tmK4ja7dpV2FVoXbipVF5",
  "key28": "5vHEgWH4N48JbQq8HqUpDMg8BkXAyMRgzUEmG5eehXdcZPAVjJiXrppZt5m2juJkdAMbAQsgVcyL6Lf6DkaeNVcK",
  "key29": "2qWX5DcK4VvANp4QUJK6WVVW6m7TWPt3EgUSHSdQRgcYYgvrGzos2kG5tpaWWSecdJiHsuZvNVfVHFEa8pBB7mqf",
  "key30": "E5gLngZ8qbp8N5vQ5HuwcebdSX2WJHT26aE1et4P1fVQHktYaLqQMjx4249Ft9MtP8n5q53hcWGoEmJ5DyBn6nG",
  "key31": "dHw8D7JpADyd2W8PuLh9qXY7yGS76NpN5Q9ahjU9vQweiNb6XgzitoHNh7pnGECrzFWfEUjnyceSScjG8dgHi2Q",
  "key32": "5MiRwd8CpgDANmAvid9ntZVX3Kcxu34QPLzD15uhjUFDNY4A52QvAkJfkiiG8NyEuKy3fGYmG2Eigz2Wcgje8eck",
  "key33": "2xRFTvhMVPnq9XyjLjNaRbr4oMaZ2QEJTh5iaXp9r2Tfc2z5iZmLfd38CGdJKboeaTNEFhijURJKBWeCfMCq46c1",
  "key34": "5TZh5v6PAyxhQXrqMunNhcdL6QKeyTrHPK5gZUkkMBmxLvZ2SUZbAFthbgLh7DJcePV7nALQfHP5W4jx87r8VcN5",
  "key35": "58ZVvm44iq3csABGvXspZWVrkYyQUZeQQrypjpqrbfWcBxD6CENaguB9XV9MQVrPMPoYtouoZnVXNXi3kfRZL2V8",
  "key36": "Yn8m56rRCciCACenAcx4NHAShAtfzuYWFe7wewVjZ1P3CfaCKLKzD8WUyVe9e8WfNVZdDK1gmgmd83Nrsy4Tds6"
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
