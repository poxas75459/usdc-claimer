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
    "5RPrH8BJ36Wx2GMjjpdVyo9HTUYZrgEg1PZzNd4X3cvXST9JZ1CzYgo9DfEBCg9dzfKsuxwQquztPKoXcoMEWnG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXraHrvYRYtJifpFN55oEd7EAZNAyN9ydWt9aHo9kgUpZpq4YneR7uCM1WxSiyP5XZptPBANQ9WiV9DB5Rz7RNj",
  "key1": "4GG2RKp8p6yap4Nsid9fSc219nX7jynKuTTfNPd9PfKWxjcvjzLEYtqc3XGw3c7W2HaGEgkmgGtgxDHYnNdrP93R",
  "key2": "4fwDCJKt4esXec2YhUiVBCG6fY4jDfTdYx5YD7LgsZU8KkN8CqMofVF19wnbYkaiAgoaPSZ768WtDu8WkHzcwKsd",
  "key3": "376R4N7pRKcyBPujV54PtFGSevjxNJmiRCitdfRzXtXUeFBczMHAdox84hRLrSH15FnaMj4Tc7wYbHPTrpP7FVq3",
  "key4": "sU9pA3khmUPcN9gPME29FNAJytQbo76YrBCAi9pJdHJ6uxaDD7aS3FQgt5GqavxFz3bjcAok2m2LXzmFGuTLSFC",
  "key5": "5UkwT22J4G6Cf3ehWahxn13ddGpsD2M6jx4X5Aa452JoXp993Pr5G5m7i7AkvhjCYgDyXwisnDgG4XheBLcD9MzB",
  "key6": "fmJtz8qBrrPZVMU7WvHQGPwu4EKczBY5rCU7hSVA8xfZvt3HjSPz7rLjx5Zcsp6hM7vuEqtVBbR7SXwykebyVqH",
  "key7": "2mTdgL3RebkTYgcjMhPgFMrFgyzqVuV3Mrwk23omPzchCc8AmeyANh6XQBiCqFpPUR3hKX9hhm1LcfWuWRoMetvM",
  "key8": "5Ez2QGLp4eYXPghe61o9QZjSQGRhPnwNqdQv1nEnN7ynBP3Q52NSbhpJMRmXiSzeVJ1q3GjBv8opiXCsYaRFCmrF",
  "key9": "q5qDzgXtyiyr3pfMBnWJ4kWYcPuwo4zHvv1LdAAk4Ui2YsHzuWwq36cK7rpkzGJKTpmpCDkK5dyH6KtbMgGvd1c",
  "key10": "3QCDqapfa9wdS8HGfCusjBxGpU23WT3n2dGiA1Y7ChugH9PJSFAj4NeJg2onK8QSVpw8BgFa4fyoCKcBWafwPK34",
  "key11": "3ZmDXxxu2YXwKu6vKav5P6aF4nGVhvBadKJhGdyfa1xGurcXBQzJ8EabAKiwhvnYhGkuihGAMw222m2sPY15okrX",
  "key12": "2kt5i18AV2r5UTokvDjcvQf9r3NPoB7yTmk9wCGonzDLLmeuzjdgxMUYCpdYg2JxSgAwDXN9t9Mdg9qpudxECT5P",
  "key13": "5R1mGkFCn9vWsd9BMJNw8QPUMfkPSCTLh1jTbcYvdeiRb1srAsqpK8q36ixAMSgyKbvQeku3Tw2XUVjFs7TKSvf1",
  "key14": "4TH9eJ2eU6gFG5mNcJknA2crpgWMJWTzKPVy6Ls73mX5GYAphrvj4d7b9Jqy42rVC4JFAyrjsDwP2naSDoY3PCFn",
  "key15": "EctHpJiBjyFNj5BYYoXEH9EP6ZQWtzUwZU1dwwLiu32kkz1bmDjCypc1cFud3PbWhWjRdSdCcYFM8FvsaeYhJBX",
  "key16": "4EwnvxFdCa9eX7zmoVdMaNRHCJyET7WkEiL6YMfCBdtg95VS34Az4uabwReZhdNrMi8Gf5D4i1QrsopjJUGfnYwV",
  "key17": "HswGXuWk7RAVjXqk9k2g5BVJfWa3KnzrgFpY1w51HkDPGqaApdTn8xZYFPLy3r81HJi4MaF4dFyc2CPoiMBsPgs",
  "key18": "5UNxpXtpXt9extNfi62Jg8HLPm5zqkewMQvejaQSmG26hJ8vg76diLsMhZH1gekRMBwzVNAn1bUrVtMUGjtgvWh3",
  "key19": "2gZjhumFZ3m2WgvhwaA2PTUzvHPtXtcX3VozubyPwQS3gcAf2QkjLxpzqMaCeekcLNqheYAJQb1T6DcmShxJAJSp",
  "key20": "USM2UnjxHZLhZvs428bVr95891bSmUMF64xLJHG88gK6cGuxMxJprEtfq6s7VtnbKG3PJBefoqiqi7622juE1C4",
  "key21": "23ufxggdZtrWUziVK64cvosJkX89XfFKuHZeyhpHeZryRxnfZgq6Qm2ys2Do65Drgp2acwjx5jWQBdruzZZE7M7j",
  "key22": "smMuNijdGNo3AMH3M37fNuXE7udzYxaarrvjL8MEhVLY6smWMJptJXmar4g4FxNZLbSDPAShZQj95VquZxgoYhs",
  "key23": "7Yr6SHsYxPQeVsdkR3crmhYGKjxy3waoufx1UYrBiw8sH15LPwyfYRLRmTrbt9kiE8JxtCs7z1LzkuTWcGoHDXT",
  "key24": "FXCcEPJdurDpF5qMSnrtW1WVtoVgC1hbXjbpoUUsZU7QugfZhH3WwWSjkbEauQ4aKKQuv5H269etgmH5L1mtjwf",
  "key25": "5nKiJjfdptMve11NGWQUt3CZMBpWoQmUdhDwnTp2NkqZWJLjaYrPRohiv8VZUsBBvkRnFhZrf7mDERoSrWpGafZi",
  "key26": "4NDAr2YH5AqK8ukgh78g2TpmwoVahY2vEvDumSGuxKaNu153G5iAtThRZz617mdDTuNLeqpYsZjetGe6GL1XVANn"
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
