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
    "3bPzceszZqQcshxjtkuvXyeM5ZDzG2myBazwBMGVziKjTTwhqpRv5HrZ6K8Dp3q7ZF8QxfxJE5735vnYtM3aRj8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yewGe62XofZK1nknXhGQHc8N4BuMKwqVqtdVZoZyZdBt9YLTabqX6XEnvdwhisnW2pEjL4RNfQ3PM96yT8f7b22",
  "key1": "5uPfLGHSJLjiLmDzkbjNLhsyhP5Ku2LfbQ1XqHkEu9JSTDfzQMSntRVSddRPcYcMStBmFX6MGVoCh3Z8dVRjMzbw",
  "key2": "8NGB3Z9PMm9RkCW2b7aQVD8wKSxsKLxXtPVBsW2F5taGkPD7GHbHR6kDEGFJ8E1HqPo5W34UKrTtLhNRMHyqNan",
  "key3": "37znRGf4jCSpEyrvHXUHfa449uCSMdzHGHhETsVBG9bPEyZNdtYuwWPoPM8tH5bz9aQUwtYp8gTbqZziVayASM5g",
  "key4": "5CiMKPk3BrHQR56TSuvwzPArWUxhBM44j7X6ftN8fmp2WEPbX2ELQ3BanBQm51sksdQp5gereRLjEzaxZG7ZuPYh",
  "key5": "PMys7Go96pPCzMipf898pb1rEviEG1wZRp6VuBMxtr1FMhnoJFCu26tGrjACYEsUm4hM8dHsaYNrk56y4gkugAt",
  "key6": "sAXeZycAJGwyaUU5wiqbJaoQvgmR9QfnUQYLTijHUNwEgnT48vGMqKkwoowCijwCJtKUTe9aztKr2wwdm4bmTyf",
  "key7": "5D1HAhyCQwy2qVJZfX6TJqwggcc9JhfmQkmegMoUy6zC1yVcDSYWPo3SPEVxTs9BzwV3BKhCbQDWEjW8xrRFrihb",
  "key8": "4Quqs1146qsHaetjZ3sfyVW9R4KgpTw6z5Qdny1U6LpTSQf1xwwTNS28NXnAJxiPLw14ntbd14EcsW8AUN7cz2sC",
  "key9": "23tWB38cX3kKGjT2RiUjcUmGLo83KKwcKFUSzu42MyXrCe4kYgbfEyCtMxnS6YU4ivCfZRr83eUMzJTd2HySSmyE",
  "key10": "ZtE8qWyoyr3mE61er97qmKfXf6Z61xK6rbRvNSH2oH8w18bPNmXYkG1vt6hY7T9UptGPbZj8JvqVwr8QTQyxPGo",
  "key11": "4PBEmLxnb9NJyhLie8dji6LW5ZEiNzhfazE6cMiHctncWbMgVDwdd3niJ7UxGY15FQkgV9ntPB5aUMHwvWz8vdZE",
  "key12": "5UXbsg7VM3qGB3GtEuwpWfbgWJ2cQR5xfrQcovDRSzTur3TZzpB4141AFfFerQWGZpngPUGNxQzGzCah9xYfR2oU",
  "key13": "2CJr9bAdxZQMhgPoh1MMUHfgtiZC3S2wfYysRkWKHvruEg3UWWEbQKmBasHC3Kg7RuocaY4S2upzScgbeH62LVZW",
  "key14": "5YaMuSGQQ9jQaAg36cCLbxUnEKzm4MaMLFoVyAd7KeuuVnj3uXkMqbAkzUtsBuH8gLKMsuGJsWNPg7jkHKvK4Tyy",
  "key15": "3yRLdNC71rBuKMZVTosUADEeNH8JANyzmmQoV6T3aeR7VMAPGTzJikXFZ561191dKcFb8oxPEFXeSAxLfLJvqPcN",
  "key16": "46fxZKiCGiEej8h6XtrXScu8pM3UtKEU7kNaorhJKQpmsLeHzfuhB9rAbDZt4CEmB3fkEHEbMWrE97dhPFddHDBN",
  "key17": "4QuMy39povE9SHP8VznJgPA916q7BF5UMgfByEb3W1iLQSztv8swRNw3u8Nw1oqGX56FVHSFRY4ZAQ5wYo4Xwtt1",
  "key18": "2of8Gp5NH4JUxRKFRNu7BXsVRvfUZ8PfYsbj6MFrmrdFau5LKj7EbxbuPsAu8uo6aLnwgjaLtGU9BaKdtLcgi52y",
  "key19": "2jXZ1jKgJe3CXCKCn3utTafJisFoDoRLfFyKjcg79F6iQzJCnL2XcnGQ2DA32hHrhitS9e1XqwFADhWUusoGyqNz",
  "key20": "2kPmkPgkfGozfPS8FUZkxhz5ZFH5j67aqar7Qn7on9uFevtKBUXkwxSju65dz4LvL8qsH9k7MccfNFkp5zbSjP1K",
  "key21": "3eG7HUj7tsHcPAGGiYHKQ9Jcjft2aaZX32tVVqszzuHxLehihVHLvkta6apUfmTveRSJ8Tu4iBwMDR5e9sTCuo34",
  "key22": "4awDByyxuHBuCV2D7riRYm6aLaeFYYMsbK7x1LyXEFUD22ZcUsKmdYQyNvMgp4F56CYne3N894vu7KfYmrGkiMMX",
  "key23": "pn7ptQvUcziHzYRuoDgQmZwe5A2tDXPYRyJVRThxqfi28Vc9GqxcZDnav46j7jqWJjLyKhwx36mT6wvtZCRp2rT",
  "key24": "3byG9SAWbu9147sPtNWWEtcBQgXJeFUU2bAJKvX8Yerd9s7ZnUgRFEeyWapxm8YZAyYRRxN8ZBfHyYxmhAzqRnYm",
  "key25": "464rfwLBzEgydaMfvDVBCGGhA7pSH6bYLkDUY49FYmCShtLW46VKghMJd6QbgtHMfwvKvbw79H9jykSB9LHr6WzY",
  "key26": "3DdF3kUHXvZqUP9usVEAMZofkpiAghdgnN6VejzSAj3Z6paTax7fVThkNuANyC7YYpdqTc9PcuuY99BFQB1tbAmN",
  "key27": "4aaaaebSdNoK4XjBpthZMpakqmfNvm14iYMi1s1um72PJo3GkrKxw9wNA2rGAryoAMCUCumstrJruRJAgJavzVcj",
  "key28": "3CabQAKyUxkApswvJQ6bMVoLN4s8Qyc5wueANpgPhwuFbBWtLvmVD1VZzbhMijbcPaoGZAs5PD7P68Gwh84bYCiX",
  "key29": "4Pn7b15dyLuEs6nh4iatgHKL8VWZ5i96bNiz3bj6FzgvFjZvdxWEBcY5dTs1Btegbart39cDRpznX1bCY64L76WA",
  "key30": "4wphKBH1tJYEVK9eERX1yvdnTeNzEjBuSYKyh8JX2KSSkY3bYm8npmVk7n3FDgtwFeVNyPAW7GKSMZMteiiga71g"
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
